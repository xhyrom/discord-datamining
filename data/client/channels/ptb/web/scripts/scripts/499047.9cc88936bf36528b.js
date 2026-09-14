(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["499047"],
  {
    838259(e, t, n) {
      "use strict";
      var r, i;
      n.d(t, { U: () => r }),
        ((i = r || (r = {})).BORDER_BOX = "border-box"),
        (i.CONTENT_BOX = "content-box"),
        (i.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
    },
    234097(e, t, n) {
      "use strict";
      n.d(t, { J: () => D });
      var r,
        i = [],
        a = "ResizeObserver loop completed with undelivered notifications.",
        s = function () {
          var e;
          "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: a }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1),
              (e.message = a)),
            window.dispatchEvent(e);
        },
        o = n(522816),
        u = n(916784),
        c = function (e) {
          if ((0, u.dK)(e)) return 1 / 0;
          for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
          return t;
        },
        l = n(623577),
        d = function () {
          var e = 1 / 0,
            t = [];
          i.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
              var r = [];
              n.activeTargets.forEach(function (t) {
                var n = new o.Z(t.target),
                  i = c(t.target);
                r.push(n),
                  (t.lastReportedSize = (0, l.P)(t.target, t.observedBox)),
                  i < e && (e = i);
              }),
                t.push(function () {
                  n.callback.call(n.observer, r, n.observer);
                }),
                n.activeTargets.splice(0, n.activeTargets.length);
            }
          });
          for (var n = 0; n < t.length; n++) (0, t[n])();
          return e;
        },
        h = function (e) {
          i.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (n) {
                n.isActive() &&
                  (c(n.target) > e
                    ? t.activeTargets.push(n)
                    : t.skippedTargets.push(n));
              });
          });
        },
        f = function () {
          var e = 0;
          for (
            h(0);
            i.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            h((e = d()));
          return (
            i.some(function (e) {
              return e.skippedTargets.length > 0;
            }) && s(),
            e > 0
          );
        },
        p = n(717205),
        _ = [],
        m = function (e) {
          if (!r) {
            var t = 0,
              n = document.createTextNode("");
            new MutationObserver(function () {
              return _.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(n, { characterData: !0 }),
              (r = function () {
                n.textContent = "".concat(t ? t-- : t++);
              });
          }
          _.push(e), r();
        },
        g = function (e) {
          m(function () {
            requestAnimationFrame(e);
          });
        },
        b = 0,
        v = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        y = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        w = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        k = !1,
        x = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !k)) {
                k = !0;
                var n = w(e);
                g(function () {
                  var r = !1;
                  try {
                    r = f();
                  } finally {
                    if (((k = !1), (e = n - w()), !b)) return;
                    r ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, v);
                };
              document.body ? t() : p.S.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                y.forEach(function (t) {
                  return p.S.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                y.forEach(function (t) {
                  return p.S.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        R = function (e) {
          !b && e > 0 && x.start(), (b += e) || x.stop();
        },
        A = n(838259),
        E = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || A.U.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = (0, l.P)(this.target, this.observedBox, !0);
              return (
                (e = this.target),
                (0, u.XJ)(e) ||
                  (0, u.td)(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        T = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        V = new WeakMap(),
        C = function (e, t) {
          for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
          return -1;
        },
        D = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var n = new T(e, t);
              V.set(e, n);
            }),
            (e.observe = function (e, t, n) {
              var r = V.get(e),
                a = 0 === r.observationTargets.length;
              0 > C(r.observationTargets, t) &&
                (a && i.push(r),
                r.observationTargets.push(new E(t, n && n.box)),
                R(1),
                x.schedule());
            }),
            (e.unobserve = function (e, t) {
              var n = V.get(e),
                r = C(n.observationTargets, t),
                a = 1 === n.observationTargets.length;
              r >= 0 &&
                (a && i.splice(i.indexOf(n), 1),
                n.observationTargets.splice(r, 1),
                R(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                n = V.get(e);
              n.observationTargets.slice().forEach(function (n) {
                return t.unobserve(e, n.target);
              }),
                n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
          );
        })();
    },
    522816(e, t, n) {
      "use strict";
      n.d(t, { Z: () => a });
      var r = n(623577),
        i = n(47361),
        a = function (e) {
          var t = (0, r.m)(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = (0, i.C)([t.borderBoxSize])),
            (this.contentBoxSize = (0, i.C)([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = (0, i.C)([
              t.devicePixelContentBoxSize,
            ]));
        };
    },
    162563(e, t, n) {
      "use strict";
      n.d(t, { a: () => i });
      var r = n(47361),
        i = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), (0, r.C)(this);
        };
    },
    623577(e, t, n) {
      "use strict";
      n.d(t, { P: () => g, m: () => m });
      var r = n(838259),
        i = n(162563),
        a = n(47361),
        s = (function () {
          function e(e, t, n, r) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = n),
              (this.height = r),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              (0, a.C)(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              return {
                x: this.x,
                y: this.y,
                top: this.top,
                right: this.right,
                bottom: this.bottom,
                left: this.left,
                width: this.width,
                height: this.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        o = n(916784),
        u = n(717205),
        c = new WeakMap(),
        l = /auto|scroll/,
        d = /^tb|vertical/,
        h = /msie|trident/i.test(u.S.navigator && u.S.navigator.userAgent),
        f = function (e) {
          return parseFloat(e || "0");
        },
        p = function (e, t, n) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new i.a((n ? t : e) || 0, (n ? e : t) || 0)
          );
        },
        _ = (0, a.C)({
          devicePixelContentBoxSize: p(),
          borderBoxSize: p(),
          contentBoxSize: p(),
          contentRect: new s(0, 0, 0, 0),
        }),
        m = function (e, t) {
          if ((void 0 === t && (t = !1), c.has(e) && !t)) return c.get(e);
          if ((0, o.dK)(e)) return c.set(e, _), _;
          var n = getComputedStyle(e),
            r = (0, o.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            i = !h && "border-box" === n.boxSizing,
            u = d.test(n.writingMode || ""),
            m = !r && l.test(n.overflowY || ""),
            g = !r && l.test(n.overflowX || ""),
            b = r ? 0 : f(n.paddingTop),
            v = r ? 0 : f(n.paddingRight),
            y = r ? 0 : f(n.paddingBottom),
            w = r ? 0 : f(n.paddingLeft),
            k = r ? 0 : f(n.borderTopWidth),
            x = r ? 0 : f(n.borderRightWidth),
            R = r ? 0 : f(n.borderBottomWidth),
            A = r ? 0 : f(n.borderLeftWidth),
            E = w + v,
            T = b + y,
            V = A + x,
            C = k + R,
            D = g ? e.offsetHeight - C - e.clientHeight : 0,
            F = m ? e.offsetWidth - V - e.clientWidth : 0,
            P = r ? r.width : f(n.width) - (i ? E + V : 0) - F,
            S = r ? r.height : f(n.height) - (i ? T + C : 0) - D,
            L = P + E + F + V,
            I = S + T + D + C,
            O = (0, a.C)({
              devicePixelContentBoxSize: p(
                Math.round(P * devicePixelRatio),
                Math.round(S * devicePixelRatio),
                u,
              ),
              borderBoxSize: p(L, I, u),
              contentBoxSize: p(P, S, u),
              contentRect: new s(w, b, P, S),
            });
          return c.set(e, O), O;
        },
        g = function (e, t, n) {
          var i = m(e, n),
            a = i.borderBoxSize,
            s = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
          switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
              return o;
            case r.U.BORDER_BOX:
              return a;
            default:
              return s;
          }
        };
    },
    916784(e, t, n) {
      "use strict";
      n.d(t, { XJ: () => r, dK: () => i, td: () => s, vq: () => a });
      var r = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        i = function (e) {
          if (r(e)) {
            var t = e.getBBox(),
              n = t.width,
              i = t.height;
            return !n && !i;
          }
          var a = e.offsetWidth,
            s = e.offsetHeight;
          return !(a || s || e.getClientRects().length);
        },
        a = function (e) {
          if (e instanceof Element) return !0;
          var t,
            n =
              null == (t = null == e ? void 0 : e.ownerDocument)
                ? void 0
                : t.defaultView;
          return !!(n && e instanceof n.Element);
        },
        s = function (e) {
          switch (e.tagName) {
            case "INPUT":
              if ("image" !== e.type) break;
            case "VIDEO":
            case "AUDIO":
            case "EMBED":
            case "OBJECT":
            case "CANVAS":
            case "IFRAME":
            case "IMG":
              return !0;
          }
          return !1;
        };
    },
    47361(e, t, n) {
      "use strict";
      n.d(t, { C: () => r });
      var r = function (e) {
        return Object.freeze(e);
      };
    },
    717205(e, t, n) {
      "use strict";
      n.d(t, { S: () => r });
      var r = "u" > typeof window ? window : {};
    },
    816885(e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        var i = n ? n.call(r, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var a = Object.keys(e),
          s = Object.keys(t);
        if (a.length !== s.length) return !1;
        for (
          var o = Object.prototype.hasOwnProperty.bind(t), u = 0;
          u < a.length;
          u++
        ) {
          var c = a[u];
          if (!o(c)) return !1;
          var l = e[c],
            d = t[c];
          if (
            !1 === (i = n ? n.call(r, l, d, c) : void 0) ||
            (void 0 === i && l !== d)
          )
            return !1;
        }
        return !0;
      }
      n.d(t, { b: () => r });
    },
    830845(e, t, n) {
      "use strict";
      n.d(t, {
        AO: () => d,
        Fu: () => f,
        TM: () => E,
        sC: () => V,
        yJ: () => h,
        zR: () => y,
      });
      var r = n(1139),
        i = n(861193),
        a = n(987701),
        s = n(258635);
      function o(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function u(e) {
        return "/" === e.charAt(0) ? e.substr(1) : e;
      }
      function c(e, t) {
        return 0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
          -1 !== "/?#".indexOf(e.charAt(t.length))
          ? e.substr(t.length)
          : e;
      }
      function l(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function d(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          i = t || "/";
        return (
          n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r),
          i
        );
      }
      function h(e, t, n, a) {
        var s, o, u, c, l, d;
        "string" == typeof e
          ? ((u = ""),
            (c = ""),
            -1 !== (l = (o = e || "/").indexOf("#")) &&
              ((c = o.substr(l)), (o = o.substr(0, l))),
            -1 !== (d = o.indexOf("?")) &&
              ((u = o.substr(d)), (o = o.substr(0, d))),
            ((s = {
              pathname: o,
              search: "?" === u ? "" : u,
              hash: "#" === c ? "" : c,
            }).state = t))
          : (void 0 === (s = (0, r.A)({}, e)).pathname && (s.pathname = ""),
            s.search
              ? "?" !== s.search.charAt(0) && (s.search = "?" + s.search)
              : (s.search = ""),
            s.hash
              ? "#" !== s.hash.charAt(0) && (s.hash = "#" + s.hash)
              : (s.hash = ""),
            void 0 !== t && void 0 === s.state && (s.state = t));
        try {
          s.pathname = decodeURI(s.pathname);
        } catch (e) {
          if (e instanceof URIError)
            throw URIError(
              'Pathname "' +
                s.pathname +
                '" could not be decoded. This is likely caused by an invalid percent-encoding.',
            );
          throw e;
        }
        return (
          n && (s.key = n),
          a
            ? s.pathname
              ? "/" !== s.pathname.charAt(0) &&
                (s.pathname = (0, i.A)(s.pathname, a.pathname))
              : (s.pathname = a.pathname)
            : s.pathname || (s.pathname = "/"),
          s
        );
      }
      function f(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          e.hash === t.hash &&
          e.key === t.key &&
          (0, a.A)(e.state, t.state)
        );
      }
      function p() {
        var e = null,
          t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, i) {
            if (null != e) {
              var a = "function" == typeof e ? e(t, n) : e;
              "string" == typeof a
                ? "function" == typeof r
                  ? r(a, i)
                  : i(!0)
                : i(!1 !== a);
            } else i(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var _ = !!(
        "u" > typeof window &&
        window.document &&
        window.document.createElement
      );
      function m(e, t) {
        t(window.confirm(e));
      }
      var g = "popstate",
        b = "hashchange";
      function v() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function y(e) {
        void 0 === e && (e = {}), _ || (0, s.A)(!1);
        var t,
          n = window.history,
          i =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
          a = -1 !== window.navigator.userAgent.indexOf("Trident"),
          u = e,
          f = u.forceRefresh,
          y = void 0 !== f && f,
          w = u.getUserConfirmation,
          k = void 0 === w ? m : w,
          x = u.keyLength,
          R = void 0 === x ? 6 : x,
          A = e.basename ? l(o(e.basename)) : "";
        function E(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            i = window.location,
            a = i.pathname + i.search + i.hash;
          return A && (a = c(a, A)), h(a, r, n);
        }
        function T() {
          return Math.random().toString(36).substr(2, R);
        }
        var V = p();
        function C(e) {
          (0, r.A)(N, e),
            (N.length = n.length),
            V.notifyListeners(N.location, N.action);
        }
        function D(e) {
          (void 0 !== e.state || -1 !== navigator.userAgent.indexOf("CriOS")) &&
            S(E(e.state));
        }
        function F() {
          S(E(v()));
        }
        var P = !1;
        function S(e) {
          P
            ? ((P = !1), C())
            : V.confirmTransitionTo(e, "POP", k, function (t) {
                var n, r, i, a, s;
                t
                  ? C({ action: "POP", location: e })
                  : ((n = e),
                    (r = N.location),
                    -1 === (i = I.indexOf(r.key)) && (i = 0),
                    -1 === (a = I.indexOf(n.key)) && (a = 0),
                    (s = i - a) && ((P = !0), M(s)));
              });
        }
        var L = E(v()),
          I = [L.key];
        function O(e) {
          return A + d(e);
        }
        function M(e) {
          n.go(e);
        }
        var B = 0;
        function U(e) {
          1 === (B += e) && 1 === e
            ? (window.addEventListener(g, D),
              a && window.addEventListener(b, F))
            : 0 === B &&
              (window.removeEventListener(g, D),
              a && window.removeEventListener(b, F));
        }
        var j = !1,
          N = {
            length: n.length,
            action: "POP",
            location: L,
            createHref: O,
            push: function (e, t) {
              var r = "PUSH",
                a = h(e, t, T(), N.location);
              V.confirmTransitionTo(a, r, k, function (e) {
                if (e) {
                  var t = O(a),
                    s = a.key,
                    o = a.state;
                  if (i)
                    if ((n.pushState({ key: s, state: o }, null, t), y))
                      window.location.href = t;
                    else {
                      var u = I.indexOf(N.location.key),
                        c = I.slice(0, u + 1);
                      c.push(a.key), (I = c), C({ action: r, location: a });
                    }
                  else window.location.href = t;
                }
              });
            },
            replace: function (e, t) {
              var r = "REPLACE",
                a = h(e, t, T(), N.location);
              V.confirmTransitionTo(a, r, k, function (e) {
                if (e) {
                  var t = O(a),
                    s = a.key,
                    o = a.state;
                  if (i)
                    if ((n.replaceState({ key: s, state: o }, null, t), y))
                      window.location.replace(t);
                    else {
                      var u = I.indexOf(N.location.key);
                      -1 !== u && (I[u] = a.key), C({ action: r, location: a });
                    }
                  else window.location.replace(t);
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
            block: function (e) {
              void 0 === e && (e = !1);
              var t = V.setPrompt(e);
              return (
                j || (U(1), (j = !0)),
                function () {
                  return j && ((j = !1), U(-1)), t();
                }
              );
            },
            listen: function (e) {
              var t = V.appendListener(e);
              return (
                U(1),
                function () {
                  U(-1), t();
                }
              );
            },
          };
        return N;
      }
      var w = "hashchange",
        k = {
          hashbang: {
            encodePath: function (e) {
              return "!" === e.charAt(0) ? e : "!/" + u(e);
            },
            decodePath: function (e) {
              return "!" === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: u, decodePath: o },
          slash: { encodePath: o, decodePath: o },
        };
      function x(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t);
      }
      function R() {
        var e = window.location.href,
          t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1);
      }
      function A(e) {
        window.location.replace(x(window.location.href) + "#" + e);
      }
      function E(e) {
        void 0 === e && (e = {}), _ || (0, s.A)(!1);
        var t = window.history;
        window.navigator.userAgent.indexOf("Firefox");
        var n = e,
          i = n.getUserConfirmation,
          a = void 0 === i ? m : i,
          u = n.hashType,
          f = e.basename ? l(o(e.basename)) : "",
          g = k[void 0 === u ? "slash" : u],
          b = g.encodePath,
          v = g.decodePath;
        function y() {
          var e = v(R());
          return f && (e = c(e, f)), h(e);
        }
        var E = p();
        function T(e) {
          (0, r.A)(U, e),
            (U.length = t.length),
            E.notifyListeners(U.location, U.action);
        }
        var V = !1,
          C = null;
        function D() {
          var e = R(),
            t = b(e);
          if (e !== t) A(t);
          else {
            var n,
              r = y(),
              i = U.location;
            if (
              (!V &&
                i.pathname === r.pathname &&
                i.search === r.search &&
                i.hash === r.hash) ||
              C === d(r)
            )
              return;
            (C = null),
              (n = r),
              V
                ? ((V = !1), T())
                : E.confirmTransitionTo(n, "POP", a, function (e) {
                    var t, r, i, a, s;
                    e
                      ? T({ action: "POP", location: n })
                      : ((t = n),
                        (r = U.location),
                        -1 === (i = L.lastIndexOf(d(r))) && (i = 0),
                        -1 === (a = L.lastIndexOf(d(t))) && (a = 0),
                        (s = i - a) && ((V = !0), I(s)));
                  });
          }
        }
        var F = R(),
          P = b(F);
        F !== P && A(P);
        var S = y(),
          L = [d(S)];
        function I(e) {
          t.go(e);
        }
        var O = 0;
        function M(e) {
          1 === (O += e) && 1 === e
            ? window.addEventListener(w, D)
            : 0 === O && window.removeEventListener(w, D);
        }
        var B = !1,
          U = {
            length: t.length,
            action: "POP",
            location: S,
            createHref: function (e) {
              var t = document.querySelector("base"),
                n = "";
              return (
                t && t.getAttribute("href") && (n = x(window.location.href)),
                n + "#" + b(f + d(e))
              );
            },
            push: function (e, t) {
              var n = "PUSH",
                r = h(e, void 0, void 0, U.location);
              E.confirmTransitionTo(r, n, a, function (e) {
                if (e) {
                  var t = d(r),
                    i = b(f + t);
                  if (R() !== i) {
                    (C = t), (window.location.hash = i);
                    var a = L.lastIndexOf(d(U.location)),
                      s = L.slice(0, a + 1);
                    s.push(t), (L = s), T({ action: n, location: r });
                  } else T();
                }
              });
            },
            replace: function (e, t) {
              var n = "REPLACE",
                r = h(e, void 0, void 0, U.location);
              E.confirmTransitionTo(r, n, a, function (e) {
                if (e) {
                  var t = d(r),
                    i = b(f + t);
                  R() !== i && ((C = t), A(i));
                  var a = L.indexOf(d(U.location));
                  -1 !== a && (L[a] = t), T({ action: n, location: r });
                }
              });
            },
            go: I,
            goBack: function () {
              I(-1);
            },
            goForward: function () {
              I(1);
            },
            block: function (e) {
              void 0 === e && (e = !1);
              var t = E.setPrompt(e);
              return (
                B || (M(1), (B = !0)),
                function () {
                  return B && ((B = !1), M(-1)), t();
                }
              );
            },
            listen: function (e) {
              var t = E.appendListener(e);
              return (
                M(1),
                function () {
                  M(-1), t();
                }
              );
            },
          };
        return U;
      }
      function T(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function V(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.getUserConfirmation,
          i = t.initialEntries,
          a = void 0 === i ? ["/"] : i,
          s = t.initialIndex,
          o = t.keyLength,
          u = void 0 === o ? 6 : o,
          c = p();
        function l(e) {
          (0, r.A)(b, e),
            (b.length = b.entries.length),
            c.notifyListeners(b.location, b.action);
        }
        function f() {
          return Math.random().toString(36).substr(2, u);
        }
        var _ = T(void 0 === s ? 0 : s, 0, a.length - 1),
          m = a.map(function (e) {
            return "string" == typeof e
              ? h(e, void 0, f())
              : h(e, void 0, e.key || f());
          });
        function g(e) {
          var t = T(b.index + e, 0, b.entries.length - 1),
            r = b.entries[t];
          c.confirmTransitionTo(r, "POP", n, function (e) {
            e ? l({ action: "POP", location: r, index: t }) : l();
          });
        }
        var b = {
          length: m.length,
          action: "POP",
          location: m[_],
          index: _,
          entries: m,
          createHref: d,
          push: function (e, t) {
            var r = "PUSH",
              i = h(e, t, f(), b.location);
            c.confirmTransitionTo(i, r, n, function (e) {
              if (e) {
                var t = b.index + 1,
                  n = b.entries.slice(0);
                n.length > t ? n.splice(t, n.length - t, i) : n.push(i),
                  l({ action: r, location: i, index: t, entries: n });
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              i = h(e, t, f(), b.location);
            c.confirmTransitionTo(i, r, n, function (e) {
              e && ((b.entries[b.index] = i), l({ action: r, location: i }));
            });
          },
          go: g,
          goBack: function () {
            g(-1);
          },
          goForward: function () {
            g(1);
          },
          canGo: function (e) {
            var t = b.index + e;
            return t >= 0 && t < b.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), c.setPrompt(e);
          },
          listen: function (e) {
            return c.appendListener(e);
          },
        };
        return b;
      }
    },
    899898() {
      !(function (e, t) {
        "use strict";
        if (
          "IntersectionObserver" in e &&
          "IntersectionObserverEntry" in e &&
          "intersectionRatio" in e.IntersectionObserverEntry.prototype
        ) {
          "isIntersecting" in e.IntersectionObserverEntry.prototype ||
            Object.defineProperty(
              e.IntersectionObserverEntry.prototype,
              "isIntersecting",
              {
                get: function () {
                  return this.intersectionRatio > 0;
                },
              },
            );
          return;
        }
        var n = [];
        function r(e) {
          (this.time = e.time),
            (this.target = e.target),
            (this.rootBounds = e.rootBounds),
            (this.boundingClientRect = e.boundingClientRect),
            (this.intersectionRect = e.intersectionRect || u()),
            (this.isIntersecting = !!e.intersectionRect);
          var t = this.boundingClientRect,
            n = t.width * t.height,
            r = this.intersectionRect,
            i = r.width * r.height;
          n
            ? (this.intersectionRatio = i / n)
            : (this.intersectionRatio = +!!this.isIntersecting);
        }
        function i(e, t) {
          var n,
            r,
            i,
            a = t || {};
          if ("function" != typeof e)
            throw Error("callback must be a function");
          if (a.root && 1 != a.root.nodeType)
            throw Error("root must be an Element");
          (this._checkForIntersections =
            ((n = this._checkForIntersections.bind(this)),
            (r = this.THROTTLE_TIMEOUT),
            (i = null),
            function () {
              i ||
                (i = setTimeout(function () {
                  n(), (i = null);
                }, r));
            })),
            (this._callback = e),
            (this._observationTargets = []),
            (this._queuedEntries = []),
            (this._rootMarginValues = this._parseRootMargin(a.rootMargin)),
            (this.thresholds = this._initThresholds(a.threshold)),
            (this.root = a.root || null),
            (this.rootMargin = this._rootMarginValues
              .map(function (e) {
                return e.value + e.unit;
              })
              .join(" "));
        }
        function a(e, t, n, r) {
          "function" == typeof e.addEventListener
            ? e.addEventListener(t, n, r || !1)
            : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n);
        }
        function s(e, t, n, r) {
          "function" == typeof e.removeEventListener
            ? e.removeEventListener(t, n, r || !1)
            : "function" == typeof e.detatchEvent &&
              e.detatchEvent("on" + t, n);
        }
        function o(e) {
          var t;
          try {
            t = e.getBoundingClientRect();
          } catch (e) {}
          return t
            ? ((t.width && t.height) ||
                (t = {
                  top: t.top,
                  right: t.right,
                  bottom: t.bottom,
                  left: t.left,
                  width: t.right - t.left,
                  height: t.bottom - t.top,
                }),
              t)
            : u();
        }
        function u() {
          return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        }
        function c(e, t) {
          for (var n = t; n; ) {
            if (n == e) return !0;
            n = l(n);
          }
          return !1;
        }
        function l(e) {
          var t = e.parentNode;
          return t && 11 == t.nodeType && t.host ? t.host : t;
        }
        (i.prototype.THROTTLE_TIMEOUT = 100),
          (i.prototype.POLL_INTERVAL = null),
          (i.prototype.USE_MUTATION_OBSERVER = !0),
          (i.prototype.observe = function (e) {
            if (
              !this._observationTargets.some(function (t) {
                return t.element == e;
              })
            ) {
              if (!(e && 1 == e.nodeType))
                throw Error("target must be an Element");
              this._registerInstance(),
                this._observationTargets.push({ element: e, entry: null }),
                this._monitorIntersections(),
                this._checkForIntersections();
            }
          }),
          (i.prototype.unobserve = function (e) {
            (this._observationTargets = this._observationTargets.filter(
              function (t) {
                return t.element != e;
              },
            )),
              this._observationTargets.length ||
                (this._unmonitorIntersections(), this._unregisterInstance());
          }),
          (i.prototype.disconnect = function () {
            (this._observationTargets = []),
              this._unmonitorIntersections(),
              this._unregisterInstance();
          }),
          (i.prototype.takeRecords = function () {
            var e = this._queuedEntries.slice();
            return (this._queuedEntries = []), e;
          }),
          (i.prototype._initThresholds = function (e) {
            var t = e || [0];
            return (
              Array.isArray(t) || (t = [t]),
              t.sort().filter(function (e, t, n) {
                if ("number" != typeof e || isNaN(e) || e < 0 || e > 1)
                  throw Error(
                    "threshold must be a number between 0 and 1 inclusively",
                  );
                return e !== n[t - 1];
              })
            );
          }),
          (i.prototype._parseRootMargin = function (e) {
            var t = (e || "0px").split(/\s+/).map(function (e) {
              var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
              if (!t)
                throw Error(
                  "rootMargin must be specified in pixels or percent",
                );
              return { value: parseFloat(t[1]), unit: t[2] };
            });
            return (
              (t[1] = t[1] || t[0]),
              (t[2] = t[2] || t[0]),
              (t[3] = t[3] || t[1]),
              t
            );
          }),
          (i.prototype._monitorIntersections = function () {
            !this._monitoringIntersections &&
              ((this._monitoringIntersections = !0),
              this.POLL_INTERVAL
                ? (this._monitoringInterval = setInterval(
                    this._checkForIntersections,
                    this.POLL_INTERVAL,
                  ))
                : (a(e, "resize", this._checkForIntersections, !0),
                  a(t, "scroll", this._checkForIntersections, !0),
                  this.USE_MUTATION_OBSERVER &&
                    "MutationObserver" in e &&
                    ((this._domObserver = new MutationObserver(
                      this._checkForIntersections,
                    )),
                    this._domObserver.observe(t, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))));
          }),
          (i.prototype._unmonitorIntersections = function () {
            this._monitoringIntersections &&
              ((this._monitoringIntersections = !1),
              clearInterval(this._monitoringInterval),
              (this._monitoringInterval = null),
              s(e, "resize", this._checkForIntersections, !0),
              s(t, "scroll", this._checkForIntersections, !0),
              this._domObserver &&
                (this._domObserver.disconnect(), (this._domObserver = null)));
          }),
          (i.prototype._checkForIntersections = function () {
            var t = this._rootIsInDom(),
              n = t ? this._getRootRect() : u();
            this._observationTargets.forEach(function (i) {
              var a = i.element,
                s = o(a),
                u = this._rootContainsTarget(a),
                c = i.entry,
                l = t && u && this._computeTargetAndRootIntersection(a, n),
                d = (i.entry = new r({
                  time: e.performance && performance.now && performance.now(),
                  target: a,
                  boundingClientRect: s,
                  rootBounds: n,
                  intersectionRect: l,
                }));
              c
                ? t && u
                  ? this._hasCrossedThreshold(c, d) &&
                    this._queuedEntries.push(d)
                  : c && c.isIntersecting && this._queuedEntries.push(d)
                : this._queuedEntries.push(d);
            }, this),
              this._queuedEntries.length &&
                this._callback(this.takeRecords(), this);
          }),
          (i.prototype._computeTargetAndRootIntersection = function (n, r) {
            if ("none" != e.getComputedStyle(n).display) {
              for (var i = o(n), a = l(n), s = !1; !s; ) {
                var u = null,
                  c = 1 == a.nodeType ? e.getComputedStyle(a) : {};
                if ("none" == c.display) return;
                if (
                  (a == this.root || a == t
                    ? ((s = !0), (u = r))
                    : a != t.body &&
                      a != t.documentElement &&
                      "visible" != c.overflow &&
                      (u = o(a)),
                  u &&
                    !(i = (function (e, t) {
                      var n = Math.max(e.top, t.top),
                        r = Math.min(e.bottom, t.bottom),
                        i = Math.max(e.left, t.left),
                        a = Math.min(e.right, t.right),
                        s = a - i,
                        o = r - n;
                      return (
                        s >= 0 &&
                        o >= 0 && {
                          top: n,
                          bottom: r,
                          left: i,
                          right: a,
                          width: s,
                          height: o,
                        }
                      );
                    })(u, i)))
                )
                  break;
                a = l(a);
              }
              return i;
            }
          }),
          (i.prototype._getRootRect = function () {
            var e;
            if (this.root) e = o(this.root);
            else {
              var n = t.documentElement,
                r = t.body;
              e = {
                top: 0,
                left: 0,
                right: n.clientWidth || r.clientWidth,
                width: n.clientWidth || r.clientWidth,
                bottom: n.clientHeight || r.clientHeight,
                height: n.clientHeight || r.clientHeight,
              };
            }
            return this._expandRectByRootMargin(e);
          }),
          (i.prototype._expandRectByRootMargin = function (e) {
            var t = this._rootMarginValues.map(function (t, n) {
                return "px" == t.unit
                  ? t.value
                  : (t.value * (n % 2 ? e.width : e.height)) / 100;
              }),
              n = {
                top: e.top - t[0],
                right: e.right + t[1],
                bottom: e.bottom + t[2],
                left: e.left - t[3],
              };
            return (
              (n.width = n.right - n.left), (n.height = n.bottom - n.top), n
            );
          }),
          (i.prototype._hasCrossedThreshold = function (e, t) {
            var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
              r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
            if (n !== r)
              for (var i = 0; i < this.thresholds.length; i++) {
                var a = this.thresholds[i];
                if (a == n || a == r || a < n != a < r) return !0;
              }
          }),
          (i.prototype._rootIsInDom = function () {
            return !this.root || c(t, this.root);
          }),
          (i.prototype._rootContainsTarget = function (e) {
            return c(this.root || t, e);
          }),
          (i.prototype._registerInstance = function () {
            0 > n.indexOf(this) && n.push(this);
          }),
          (i.prototype._unregisterInstance = function () {
            var e = n.indexOf(this);
            -1 != e && n.splice(e, 1);
          }),
          (e.IntersectionObserver = i),
          (e.IntersectionObserverEntry = r);
      })(window, document);
    },
    294106(e, t) {
      "use strict";
      for (
        var n =
            "u" > typeof window &&
            /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
          r = {
            alt: "altKey",
            control: "ctrlKey",
            meta: "metaKey",
            shift: "shiftKey",
          },
          i = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: n ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta",
          },
          a = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            " ": 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222,
          },
          s = 1;
        s < 20;
        s++
      )
        a["f" + s] = 111 + s;
      function o(e) {
        return i[(e = e.toLowerCase())] || e;
      }
      t.isKeyHotkey = function (e, t) {
        var n, i, s, u, c;
        return (
          (n = e),
          (i = { byKey: !0 }),
          (s = t),
          !i || "byKey" in i || ((s = i), (i = null)),
          Array.isArray(n) || (n = [n]),
          (u = n.map(function (e) {
            return (function (e, t) {
              var n = t && t.byKey,
                i = {},
                s = (e = e.replace("++", "+add")).split("+"),
                u = s.length;
              for (var c in r) i[r[c]] = !1;
              var l = !0,
                d = !1,
                h = void 0;
              try {
                for (
                  var f, p = s[Symbol.iterator]();
                  !(l = (f = p.next()).done);
                  l = !0
                ) {
                  var _ = f.value,
                    m = _.endsWith("?") && _.length > 1;
                  m && (_ = _.slice(0, -1));
                  var g = o(_),
                    b = r[g];
                  (1 !== u && b) ||
                    (n
                      ? (i.key = g)
                      : (i.which = (function (e) {
                          return a[(e = o(e))] || e.toUpperCase().charCodeAt(0);
                        })(_))),
                    b && (i[b] = !m || null);
                }
              } catch (e) {
                (d = !0), (h = e);
              } finally {
                try {
                  !l && p.return && p.return();
                } finally {
                  if (d) throw h;
                }
              }
              return i;
            })(e, i);
          })),
          (c = function (e) {
            return u.some(function (t) {
              return (function (e, t) {
                for (var n in e) {
                  var r = e[n],
                    i = void 0;
                  if (
                    null != r &&
                    (null !=
                      (i =
                        "key" === n && null != t.key
                          ? t.key.toLowerCase()
                          : "which" === n
                            ? 91 === r && 93 === t.which
                              ? 91
                              : t.which
                            : t[n]) ||
                      !1 !== r) &&
                    i !== r
                  )
                    return !1;
                }
                return !0;
              })(t, e);
            });
          }),
          null == s ? c : c(s)
        );
      };
    },
    108110(e) {
      e.exports = (function () {
        var e = {
            506: (e) => {
              (e.exports = function (e) {
                if (void 0 === e)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return e;
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            575: (e) => {
              (e.exports = function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            913: (e) => {
              function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              (e.exports = function (e, n, r) {
                return (
                  n && t(e.prototype, n),
                  r && t(e, r),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  e
                );
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            525: (e, t, n) => {
              var r = n(331);
              function i() {
                return (
                  "u" > typeof Reflect && Reflect.get
                    ? (e.exports = i = Reflect.get)
                    : (e.exports = i =
                        function (e, t, n) {
                          var i = r(e, t);
                          if (i) {
                            var a = Object.getOwnPropertyDescriptor(i, t);
                            return a.get
                              ? a.get.call(arguments.length < 3 ? e : n)
                              : a.value;
                          }
                        }),
                  (e.exports.__esModule = !0),
                  (e.exports.default = e.exports),
                  i.apply(this, arguments)
                );
              }
              (e.exports = i),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            754: (e) => {
              function t(n) {
                return (
                  (e.exports = t =
                    Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                        }),
                  (e.exports.__esModule = !0),
                  (e.exports.default = e.exports),
                  t(n)
                );
              }
              (e.exports = t),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            205: (e, t, n) => {
              var r = n(489);
              (e.exports = function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw TypeError(
                    "Super expression must either be null or a function",
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  t && r(e, t);
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            318: (e) => {
              (e.exports = function (e) {
                return e && e.__esModule ? e : { default: e };
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            585: (e, t, n) => {
              var r = n(8).default,
                i = n(506);
              (e.exports = function (e, t) {
                if (t && ("object" === r(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return i(e);
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            489: (e) => {
              function t(n, r) {
                return (
                  (e.exports = t =
                    Object.setPrototypeOf ||
                    function (e, t) {
                      return (e.__proto__ = t), e;
                    }),
                  (e.exports.__esModule = !0),
                  (e.exports.default = e.exports),
                  t(n, r)
                );
              }
              (e.exports = t),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            331: (e, t, n) => {
              var r = n(754);
              (e.exports = function (e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = r(e));

                );
                return e;
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            8: (e) => {
              function t(n) {
                return (
                  (e.exports = t =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        }),
                  (e.exports.__esModule = !0),
                  (e.exports.default = e.exports),
                  t(n)
                );
              }
              (e.exports = t),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            848: (e) => {
              window,
                (e.exports = (function (e) {
                  var t = {};
                  function n(r) {
                    if (t[r]) return t[r].exports;
                    var i = (t[r] = { i: r, l: !1, exports: {} });
                    return (
                      e[r].call(i.exports, i, i.exports, n),
                      (i.l = !0),
                      i.exports
                    );
                  }
                  return (
                    (n.m = e),
                    (n.c = t),
                    (n.d = function (e, t, r) {
                      n.o(e, t) ||
                        Object.defineProperty(e, t, { enumerable: !0, get: r });
                    }),
                    (n.r = function (e) {
                      "u" > typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                          value: "Module",
                        }),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                    }),
                    (n.t = function (e, t) {
                      if (
                        (1 & t && (e = n(e)),
                        8 & t ||
                          (4 & t && "object" == typeof e && e && e.__esModule))
                      )
                        return e;
                      var r = Object.create(null);
                      if (
                        (n.r(r),
                        Object.defineProperty(r, "default", {
                          enumerable: !0,
                          value: e,
                        }),
                        2 & t && "string" != typeof e)
                      )
                        for (var i in e)
                          n.d(
                            r,
                            i,
                            function (t) {
                              return e[t];
                            }.bind(null, i),
                          );
                      return r;
                    }),
                    (n.n = function (e) {
                      var t =
                        e && e.__esModule
                          ? function () {
                              return e.default;
                            }
                          : function () {
                              return e;
                            };
                      return n.d(t, "a", t), t;
                    }),
                    (n.o = function (e, t) {
                      return Object.prototype.hasOwnProperty.call(e, t);
                    }),
                    (n.p = ""),
                    n((n.s = 1))
                  );
                })([
                  function (e, t) {
                    function n(e, t) {
                      if (e < 1 || e !== Math.round(e))
                        throw "Invalid channel count for BufferQueue";
                      (this.channels = e), (this.bufferSize = t), this.flush();
                    }
                    (n.prototype.flush = function () {
                      (this._buffers = []),
                        (this._pendingBuffer = this.createBuffer(
                          this.bufferSize,
                        )),
                        (this._pendingPos = 0);
                    }),
                      (n.prototype.sampleCount = function () {
                        var e = 0;
                        return (
                          this._buffers.forEach(function (t) {
                            e += t[0].length;
                          }),
                          e
                        );
                      }),
                      (n.prototype.createBuffer = function (e) {
                        for (var t = [], n = 0; n < this.channels; n++)
                          t[n] = new Float32Array(e);
                        return t;
                      }),
                      (n.prototype.validate = function (e) {
                        if (e.length !== this.channels) return !1;
                        for (var t, n = 0; n < e.length; n++) {
                          var r = e[n];
                          if (!(r instanceof Float32Array)) return !1;
                          if (0 == n) t = r.length;
                          else if (r.length !== t) return !1;
                        }
                        return !0;
                      }),
                      (n.prototype.appendBuffer = function (e) {
                        if (!this.validate(e))
                          throw "Invalid audio buffer passed to BufferQueue.appendBuffer";
                        for (
                          var t = e[0].length,
                            n = this.channels,
                            r = this._pendingPos,
                            i = this._pendingBuffer,
                            a = this.bufferSize,
                            s = 0;
                          s < t;
                          s++
                        ) {
                          for (var o = 0; o < n; o++) i[o][r] = e[o][s];
                          ++r == a &&
                            (this._buffers.push(i),
                            (r = this._pendingPos = 0),
                            (i = this._pendingBuffer = this.createBuffer(a)));
                        }
                        this._pendingPos = r;
                      }),
                      (n.prototype.prependBuffer = function (e) {
                        if (!this.validate(e))
                          throw "Invalid audio buffer passed to BufferQueue.prependBuffer";
                        var t = this._buffers.slice(0);
                        t.push(
                          this.trimBuffer(
                            this._pendingBuffer,
                            0,
                            this._pendingPos,
                          ),
                        ),
                          this.flush(),
                          this.appendBuffer(e);
                        for (var n = 0; n < t.length; n++)
                          this.appendBuffer(t[n]);
                      }),
                      (n.prototype.nextBuffer = function () {
                        if (this._buffers.length) return this._buffers.shift();
                        var e = this.trimBuffer(
                          this._pendingBuffer,
                          0,
                          this._pendingPos,
                        );
                        return (
                          (this._pendingBuffer = this.createBuffer(
                            this.bufferSize,
                          )),
                          (this._pendingPos = 0),
                          e
                        );
                      }),
                      (n.prototype.trimBuffer = function (e, t, n) {
                        var r = e[0].length,
                          i = t + Math.min(n, r);
                        if (0 == t && i >= r) return e;
                        for (var a = [], s = 0; s < this.channels; s++)
                          a[s] = e[s].subarray(t, i);
                        return a;
                      }),
                      (e.exports = n);
                  },
                  function (e, t, n) {
                    n(0);
                    var r = n(2),
                      i = n(4);
                    function a(e) {
                      (this._options = e || {}),
                        (this._backend = null),
                        (this._resampleFractional = 0),
                        (this._resampleLastSampleData = void 0),
                        (this._tempoChanger = null);
                    }
                    (a.prototype.rate = 0),
                      (a.prototype.targetRate = 0),
                      (a.prototype.channels = 0),
                      (a.prototype.bufferSize = 0),
                      Object.defineProperty(a.prototype, "bufferDuration", {
                        get: function () {
                          return this.targetRate
                            ? this.bufferSize / this.targetRate
                            : 0;
                        },
                      }),
                      Object.defineProperty(a.prototype, "bufferThreshold", {
                        get: function () {
                          return this._backend
                            ? this._backend.bufferThreshold / this.targetRate
                            : 0;
                        },
                        set: function (e) {
                          if (!this._backend)
                            throw "Invalid state: AudioFeeder cannot set bufferThreshold before init";
                          this._backend.bufferThreshold = Math.round(
                            e * this.targetRate,
                          );
                        },
                      }),
                      Object.defineProperty(a.prototype, "playbackPosition", {
                        get: function () {
                          return this._backend
                            ? this.getPlaybackState().playbackPosition
                            : 0;
                        },
                      }),
                      Object.defineProperty(
                        a.prototype,
                        "outputPlaybackPosition",
                        {
                          get: function () {
                            return this._backend
                              ? this.getPlaybackState().outputPlaybackPosition
                              : 0;
                          },
                        },
                      ),
                      Object.defineProperty(a.prototype, "durationBuffered", {
                        get: function () {
                          return this._backend
                            ? this.getPlaybackState().samplesQueued /
                                this.targetRate
                            : 0;
                        },
                      }),
                      Object.defineProperty(a.prototype, "muted", {
                        get: function () {
                          if (this._backend) return this._backend.muted;
                          throw "Invalid state: cannot get mute before init";
                        },
                        set: function (e) {
                          if (!this._backend)
                            throw "Invalid state: cannot set mute before init";
                          this._backend.muted = e;
                        },
                      }),
                      (a.prototype.mute = function () {
                        this.muted = !0;
                      }),
                      (a.prototype.unmute = function () {
                        this.muted = !1;
                      }),
                      Object.defineProperty(a.prototype, "volume", {
                        get: function () {
                          if (this._backend) return this._backend.volume;
                          throw "Invalid state: cannot get volume before init";
                        },
                        set: function (e) {
                          if (!this._backend)
                            throw "Invalid state: cannot set volume before init";
                          this._backend.volume = e;
                        },
                      }),
                      Object.defineProperty(a.prototype, "tempo", {
                        get: function () {
                          if (this._tempoChanger)
                            return this._tempoChanger.getTempo();
                          throw "Invalid state: cannot get tempo before init";
                        },
                        set: function (e) {
                          if (!this._tempoChanger)
                            throw "Invalid state: cannot set tempo before init";
                          this._tempoChanger.setTempo(e);
                        },
                      }),
                      (a.prototype.init = function (e, t) {
                        if (
                          ((this.channels = e),
                          (this.rate = t),
                          this._options.backendFactory)
                        )
                          this._backend = this._options.backendFactory(
                            e,
                            t,
                            this._options,
                          );
                        else {
                          if (!r.isSupported()) throw "No supported backend";
                          this._backend = new r(e, t, this._options);
                        }
                        (this.targetRate = this._backend.rate),
                          (this.bufferSize = this._backend.bufferSize),
                          (this._tempoChanger = i({
                            sampleRate: this.targetRate,
                            numChannels: e,
                            tempo: 1,
                          })),
                          (this._backend.onstarved = function () {
                            this.onstarved && this.onstarved();
                          }.bind(this)),
                          (this._backend.onbufferlow = function () {
                            this.onbufferlow && this.onbufferlow();
                          }.bind(this));
                      }),
                      (a.prototype._resample = function (e) {
                        var t = this.rate,
                          n = this.channels,
                          r = this._backend.rate,
                          i = this._backend.channels;
                        if (t == r && n == i) return e;
                        var a,
                          s = [],
                          o = e[0].length,
                          u = this._resampleFractional,
                          c = (o * r) / t + u,
                          l = Math.floor(c),
                          d = c - l;
                        a =
                          t < r
                            ? function (e, n, i, a) {
                                for (
                                  var s = function (t) {
                                      return t < 0
                                        ? i && i.length + t > 0
                                          ? i[i.length + t]
                                          : e[0]
                                        : e[t];
                                    },
                                    o = 0;
                                  o < n.length;
                                  o++
                                ) {
                                  var c,
                                    l = ((o + 1 - u) * t) / r - 1,
                                    d = Math.floor(l),
                                    h = Math.ceil(l);
                                  (c =
                                    d == h
                                      ? s(d)
                                      : s(d) * (h - l) + s(h) * (l - d)),
                                    (n[o] = a * c);
                                }
                              }
                            : function (e, t, n, r) {
                                for (var i = 0; i < t.length; i++)
                                  t[i] = r * e[((i * e.length) / t.length) | 0];
                              };
                        var h = 1;
                        i > n && (h = Math.SQRT1_2);
                        for (var f = 0; f < i; f++) {
                          var p = f;
                          f >= n && (p = 0);
                          var _ = e[p],
                            m = new Float32Array(l);
                          a(
                            _,
                            m,
                            this._resampleLastSampleData
                              ? this._resampleLastSampleData[p]
                              : void 0,
                            h,
                          ),
                            s.push(m);
                        }
                        return (
                          (this._resampleFractional = d),
                          (this._resampleLastSampleData = e),
                          s
                        );
                      }),
                      (a.prototype.bufferData = function (e) {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot bufferData before init";
                        var t = this._resample(e);
                        (t = this._tempoChanger.process(t)),
                          this._backend.appendBuffer(t);
                      }),
                      (a.prototype.getPlaybackState = function () {
                        if (this._backend) {
                          var e = this._backend.getPlaybackState();
                          return (
                            (e.outputPlaybackPosition = e.playbackPosition),
                            (e.playbackPosition =
                              this._tempoChanger.mapOutputToInputTime(
                                e.outputPlaybackPosition,
                              )),
                            e
                          );
                        }
                        throw "Invalid state: AudioFeeder cannot getPlaybackState before init";
                      }),
                      (a.prototype.waitUntilReady = function (e) {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot waitUntilReady before init";
                        this._backend.waitUntilReady(e);
                      }),
                      (a.prototype.start = function () {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot start before init";
                        this._backend.start();
                      }),
                      (a.prototype.stop = function () {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot stop before init";
                        this._backend.stop();
                      }),
                      (a.prototype.flush = function () {
                        if (
                          ((this._resampleFractional = 0),
                          (this._resampleLastSampleData = void 0),
                          !this._backend)
                        )
                          throw "Invalid state: AudioFeeder cannot flush before init";
                        this._tempoChanger.flush(this.durationBuffered),
                          this._backend.flush();
                      }),
                      (a.prototype.close = function () {
                        this._backend &&
                          (this._backend.close(), (this._backend = null));
                      }),
                      (a.prototype.onstarved = null),
                      (a.prototype.onbufferlow = null),
                      (a.isSupported = function () {
                        return !!Float32Array && r.isSupported();
                      }),
                      (a.initSharedAudioContext = function () {
                        return r.isSupported()
                          ? r.initSharedAudioContext()
                          : null;
                      }),
                      (e.exports = a);
                  },
                  function (e, t, n) {
                    var r = window.AudioContext || window.webkitAudioContext,
                      i = n(0),
                      a = n(3);
                    function s(e, t, n) {
                      var r = n.audioContext || s.initSharedAudioContext();
                      if (
                        ((this._context = r),
                        (this.output = n.output || r.destination),
                        (this.rate = r.sampleRate),
                        (this.channels = 2),
                        n.bufferSize && (this.bufferSize = 0 | n.bufferSize),
                        (this.bufferThreshold = 2 * this.bufferSize),
                        (this._bufferQueue = new i(
                          this.channels,
                          this.bufferSize,
                        )),
                        (this._playbackTimeAtBufferTail = r.currentTime),
                        (this._queuedTime = 0),
                        (this._delayedTime = 0),
                        (this._dropped = 0),
                        (this._liveBuffer = this._bufferQueue.createBuffer(
                          this.bufferSize,
                        )),
                        r.createScriptProcessor)
                      )
                        this._node = r.createScriptProcessor(
                          this.bufferSize,
                          0,
                          this.channels,
                        );
                      else {
                        if (!r.createJavaScriptNode)
                          throw Error("Bad version of web audio API?");
                        this._node = r.createJavaScriptNode(
                          this.bufferSize,
                          0,
                          this.channels,
                        );
                      }
                    }
                    (s.prototype.bufferSize = 4096),
                      (s.prototype.bufferThreshold = 8192),
                      (s.prototype._volume = 1),
                      Object.defineProperty(s.prototype, "volume", {
                        get: function () {
                          return this._volume;
                        },
                        set: function (e) {
                          this._volume = +e;
                        },
                      }),
                      (s.prototype._muted = !1),
                      Object.defineProperty(s.prototype, "muted", {
                        get: function () {
                          return this._muted;
                        },
                        set: function (e) {
                          this._muted = !!e;
                        },
                      }),
                      (s.prototype._audioProcess = function (e) {
                        var t,
                          n,
                          r,
                          i,
                          s =
                            "number" == typeof e.playbackTime
                              ? e.playbackTime
                              : this._context.currentTime +
                                this.bufferSize / this.rate,
                          o = this._playbackTimeAtBufferTail;
                        if (
                          (o < s && (this._delayedTime += s - o),
                          this._bufferQueue.sampleCount() < this.bufferSize &&
                            this.onstarved &&
                            this.onstarved(),
                          this._bufferQueue.sampleCount() < this.bufferSize)
                        ) {
                          for (t = 0; t < this.channels; t++)
                            for (
                              r = e.outputBuffer.getChannelData(t), i = 0;
                              i < this.bufferSize;
                              i++
                            )
                              r[i] = 0;
                          this._dropped++;
                        } else {
                          var u = this.muted ? 0 : this.volume,
                            c = this._bufferQueue.nextBuffer();
                          if (c[0].length < this.bufferSize)
                            throw "Audio buffer not expected length.";
                          for (t = 0; t < this.channels; t++)
                            for (
                              n = c[t],
                                this._liveBuffer[t].set(c[t]),
                                r = e.outputBuffer.getChannelData(t),
                                i = 0;
                              i < n.length;
                              i++
                            )
                              r[i] = n[i] * u;
                          (this._queuedTime += this.bufferSize / this.rate),
                            (this._playbackTimeAtBufferTail =
                              s + this.bufferSize / this.rate),
                            this._bufferQueue.sampleCount() <
                              Math.max(this.bufferSize, this.bufferThreshold) &&
                              this.onbufferlow &&
                              a(this.onbufferlow.bind(this));
                        }
                      }),
                      (s.prototype._samplesQueued = function () {
                        return (
                          this._bufferQueue.sampleCount() +
                          Math.floor(this._timeAwaitingPlayback() * this.rate)
                        );
                      }),
                      (s.prototype._timeAwaitingPlayback = function () {
                        return Math.max(
                          0,
                          this._playbackTimeAtBufferTail -
                            this._context.currentTime,
                        );
                      }),
                      (s.prototype.getPlaybackState = function () {
                        return {
                          playbackPosition:
                            this._queuedTime - this._timeAwaitingPlayback(),
                          samplesQueued: this._samplesQueued(),
                          dropped: this._dropped,
                          delayed: this._delayedTime,
                        };
                      }),
                      (s.prototype.waitUntilReady = function (e) {
                        e();
                      }),
                      (s.prototype.appendBuffer = function (e) {
                        this._bufferQueue.appendBuffer(e);
                      }),
                      (s.prototype.start = function () {
                        (this._node.onaudioprocess =
                          this._audioProcess.bind(this)),
                          this._node.connect(this.output),
                          (this._playbackTimeAtBufferTail =
                            this._context.currentTime);
                      }),
                      (s.prototype.stop = function () {
                        if (this._node) {
                          var e = this._timeAwaitingPlayback();
                          if (e > 0) {
                            var t = Math.round(e * this.rate),
                              n = this._liveBuffer
                                ? this._liveBuffer[0].length
                                : 0;
                            t > n
                              ? (this._bufferQueue.prependBuffer(
                                  this._liveBuffer,
                                ),
                                this._bufferQueue.prependBuffer(
                                  this._bufferQueue.createBuffer(t - n),
                                ))
                              : this._bufferQueue.prependBuffer(
                                  this._bufferQueue.trimBuffer(
                                    this._liveBuffer,
                                    n - t,
                                    t,
                                  ),
                                ),
                              (this._playbackTimeAtBufferTail -= e);
                          }
                          (this._node.onaudioprocess = null),
                            this._node.disconnect();
                        }
                      }),
                      (s.prototype.flush = function () {
                        this._bufferQueue.flush();
                      }),
                      (s.prototype.close = function () {
                        this.stop(), (this._context = null);
                      }),
                      (s.prototype.onstarved = null),
                      (s.prototype.onbufferlow = null),
                      (s.isSupported = function () {
                        return !!r;
                      }),
                      (s.sharedAudioContext = null),
                      (s.initSharedAudioContext = function () {
                        if (!s.sharedAudioContext && s.isSupported()) {
                          var e,
                            t = new r();
                          if (t.createScriptProcessor)
                            e = t.createScriptProcessor(1024, 0, 2);
                          else {
                            if (!t.createJavaScriptNode)
                              throw Error("Bad version of web audio API?");
                            e = t.createJavaScriptNode(1024, 0, 2);
                          }
                          e.connect(t.destination),
                            e.disconnect(),
                            (s.sharedAudioContext = t);
                        }
                        return s.sharedAudioContext;
                      }),
                      (e.exports = s);
                  },
                  function (e, t) {
                    e.exports = (function () {
                      if (void 0 !== window.setImmediate)
                        return window.setImmediate;
                      if (window && window.postMessage) {
                        var e = [];
                        return (
                          window.addEventListener("message", function (t) {
                            if (t.source === window) {
                              var n = t.data;
                              if (
                                "object" == typeof n &&
                                n.nextTickBrowserPingMessage
                              ) {
                                var r = e.pop();
                                r && r();
                              }
                            }
                          }),
                          function (t) {
                            e.push(t),
                              window.postMessage(
                                { nextTickBrowserPingMessage: !0 },
                                document.location.toString(),
                              );
                          }
                        );
                      }
                      return function (e) {
                        setTimeout(e, 0);
                      };
                    })();
                  },
                  function (e, t, n) {
                    window,
                      (e.exports = (function () {
                        var e = [
                            function (e, t) {
                              e.exports = {
                                float_array: function (e) {
                                  return new Float32Array(e);
                                },
                                blit: function (e, t, n, r, i) {
                                  n.set(e.subarray(t, t + i), r);
                                },
                              };
                            },
                            function (e, t, n) {
                              var r, i;
                              (r = n(0)),
                                (i = n(2)),
                                (e.exports = function (e) {
                                  var t = (e = e || {}).sampleRate || 44100,
                                    n = e.wsizeLog || 11,
                                    a = e.tempo || 1,
                                    s =
                                      (e.numChannels,
                                      Math.pow(2, 50 / 1200) - 1),
                                    o = 1 << n,
                                    u = i(n),
                                    c = 1 << (n - 2);
                                  c -= c % 100;
                                  for (
                                    var l = r.float_array(o + c + 5),
                                      d = r.float_array(o + c + 5),
                                      h = c,
                                      f = c,
                                      p = r.float_array(o),
                                      _ = 0;
                                    _ < o;
                                    _++
                                  )
                                    p[_] =
                                      0.5 *
                                      (1 - Math.cos((2 * Math.PI * _) / o));
                                  var m = 1 + (o >> 1),
                                    g = r.float_array(m),
                                    b = r.float_array(m),
                                    v = r.float_array(m),
                                    y = r.float_array(m),
                                    w = r.float_array(m),
                                    k = r.float_array(m),
                                    x = 1 + (m >> 1),
                                    R = [0, 0],
                                    A = [],
                                    E = [],
                                    T = [],
                                    V = [];
                                  for (_ = 0; _ < 2; _++)
                                    A.push(r.float_array(x)),
                                      E.push(r.float_array(x)),
                                      T.push(r.float_array(x)),
                                      V.push(r.float_array(m));
                                  var C = r.float_array(x),
                                    D = r.float_array(x),
                                    F = 0,
                                    P = 0,
                                    S = [{ in_time: 0, out_time: 0, tempo: a }],
                                    L = 0,
                                    I = 0,
                                    O = 1,
                                    M = 0,
                                    B = 0,
                                    U = 0,
                                    j = 0,
                                    N = {
                                      mapOutputToInputTime: function (e) {
                                        for (
                                          var t = S.length - 1;
                                          e < S[t].out_time && t > 0;

                                        )
                                          t--;
                                        var n = S[t];
                                        return (
                                          n.in_time + n.tempo * (e - n.out_time)
                                        );
                                      },
                                      flush: function (e) {
                                        (M = 0),
                                          (R = [0, 0]),
                                          (I = 0),
                                          (j = 0),
                                          (U = 0);
                                        for (var t = 0; t < 2; t++)
                                          for (var n = 0; n < m; n++)
                                            V[t][n] = 0;
                                        for (t = 0; t < l.length; t++) l[t] = 0;
                                        for (t = 0; t < d.length; t++) d[t] = 0;
                                        if (e) {
                                          (P = Math.max(0, P - e)),
                                            (F = N.mapOutputToInputTime(P));
                                          for (
                                            var r = S.length - 1;
                                            P <= S[r].out_time && r >= 0;

                                          )
                                            S.pop(), r--;
                                          S.push({
                                            in_time: F,
                                            out_time: P,
                                            tempo: a,
                                          });
                                        }
                                      },
                                      getTempo: function () {
                                        return a;
                                      },
                                      setTempo: function (e) {
                                        (h = f = c),
                                          e >= 1
                                            ? (f = Math.round(h / e))
                                            : (h = Math.round(f * e)),
                                          (B = (1 / e - f / h) * h),
                                          (O = (function (e, t) {
                                            for (
                                              var n = (e.length / t) | 0,
                                                r = 0,
                                                i = 0;
                                              i < n;
                                              i++
                                            )
                                              r += e[i * t];
                                            return 0.9 / r;
                                          })(p, f)),
                                          (a = e);
                                        var t = S[S.length - 1];
                                        t.out_time == P
                                          ? (t.tempo = e)
                                          : S.push({
                                              in_time: F,
                                              out_time: P,
                                              tempo: e,
                                            });
                                      },
                                    };
                                  N.flush(0), N.setTempo(a);
                                  var z = function (e, t, n) {
                                      var r = Math.floor(n),
                                        i = r % 2 == 1 ? -1 : 1;
                                      return Math.atan2(
                                        i * (t[r] - t[r + 1]),
                                        i * (e[r] - e[r + 1]),
                                      );
                                    },
                                    G = function (e, t, n, r, i) {
                                      var a,
                                        s =
                                          ((2 * Math.PI) / o) *
                                          0.5 *
                                          (r + t) *
                                          h;
                                      return (
                                        ((a = e - n - s) -
                                          2 *
                                            Math.PI *
                                            Math.round(a / (2 * Math.PI)) +
                                          s) *
                                        i
                                      );
                                    },
                                    W = function (e, t, n, r, i, a) {
                                      for (
                                        var u = e % 2,
                                          c = 1 - u,
                                          l = V[c],
                                          d = R[c],
                                          h = A[c],
                                          f = E[c],
                                          p = T[c],
                                          _ = V[u],
                                          m = 1;
                                        m < _.length;
                                        m++
                                      )
                                        _[m] = t[m] * t[m] + n[m] * n[m];
                                      var g = A[u],
                                        b = (R[u] = (function (e, t) {
                                          for (
                                            var n = 0, r = 0;
                                            r < e.length;
                                            r++
                                          )
                                            e[r] > n && (n = e[r]);
                                          var i = 1e-8 * n,
                                            a = 1,
                                            o = 1;
                                          for (
                                            t[0] = 1, r = 2;
                                            r < e.length;
                                            r++
                                          ) {
                                            var u = r * s;
                                            if (
                                              e[r] > i &&
                                              e[r] > e[r - 1] &&
                                              e[r] >= e[r + 1]
                                            ) {
                                              var c =
                                                r +
                                                (e[r - 1] - e[r + 1]) /
                                                  (2 *
                                                    (e[r - 1] -
                                                      2 * e[r] +
                                                      e[r + 1]));
                                              c - t[a - 1] > u
                                                ? ((t[a++] = c), (o = r))
                                                : e[r] > e[o] &&
                                                  ((t[a - 1] = c), (o = r));
                                            }
                                          }
                                          return a;
                                        })(_, g)),
                                        v = E[u],
                                        y = T[u];
                                      if (0 != e && 0 != b) {
                                        var w = 0;
                                        for (U = 0; U < b; U++) {
                                          for (
                                            j = g[U];
                                            g[U] > h[w] && w != d;

                                          )
                                            ++w;
                                          var k = w;
                                          w > 0 &&
                                            j - h[w - 1] < h[w] - j &&
                                            (k = w - 1);
                                          var x = j * s;
                                          if (
                                            Math.abs(h[k] - j) < x &&
                                            l[Math.round(h[k])] >
                                              0.1 * _[Math.round(j)]
                                          ) {
                                            var F = z(t, n, j),
                                              P =
                                                f[k] +
                                                p[k] +
                                                G(F, j, f[k], h[k], a) -
                                                F;
                                            (v[U] = F),
                                              (y[U] = P),
                                              (C[U] = Math.cos(P)),
                                              (D[U] = Math.sin(P));
                                          } else
                                            (v[U] = z(t, n, j)),
                                              (y[U] = 0),
                                              (C[U] = 1),
                                              (D[U] = 0);
                                        }
                                        g[b] = 2 * o;
                                        var S = g[(k = 0)],
                                          L = g[k + 1],
                                          I = C[k],
                                          O = D[k];
                                        for (m = 1; m < t.length - 1; m++) {
                                          m >= S &&
                                            m - S > L - m &&
                                            ((S = g[++k]),
                                            (L = g[k + 1]),
                                            (I = C[k]),
                                            (O = D[k]));
                                          var M = t[m] * I - n[m] * O,
                                            B = t[m] * O + n[m] * I;
                                          (t[m] = M), (n[m] = B);
                                        }
                                      } else
                                        for (var U = 0; U < b; U++) {
                                          var j = g[U];
                                          f[U] = p[U] = z(t, n, j);
                                        }
                                    },
                                    H = function () {
                                      var e = 0 | (M += 2 * B);
                                      M -= e;
                                      for (var t = 0; t < o; t++)
                                        (u.m_re[t] = p[t] * l[t]),
                                          (u.m_im[t] = p[t] * l[h + t]);
                                      r.blit(l, 2 * h, l, 0, o - h),
                                        u.inplace(!1),
                                        u.unpack(g, b, v, y),
                                        W(L, g, b, 0, 0, f / h),
                                        W(L + 1, v, y, 0, 0, (f + e) / h),
                                        r.blit(v, 0, w, 0, m),
                                        r.blit(y, 0, k, 0, m),
                                        u.repack(g, b, v, y),
                                        u.inplace(!0);
                                      var n = d.length;
                                      for (
                                        r.blit(d, I, d, 0, n - I), t = n - I;
                                        t < n;
                                        t++
                                      )
                                        d[t] = 0;
                                      var i = 0,
                                        a = O;
                                      for (t = 0; t < f; t++)
                                        Math.abs(2 * u.m_re[t]) > i &&
                                          (i = Math.abs(2 * u.m_re[t]));
                                      for (t = 0; t < o - f; t++)
                                        Math.abs(
                                          u.m_re[t + f + e] + u.m_im[t],
                                        ) > i &&
                                          (i = Math.abs(
                                            u.m_re[t + f + e] + u.m_im[t],
                                          ));
                                      for (t = o - f; t < o; t++)
                                        Math.abs(2 * u.m_im[t]) > i &&
                                          (i = Math.abs(2 * u.m_im[t]));
                                      var s = 1 / Math.floor(o / (2 * f));
                                      for (
                                        a * i > s && (a = s / i), t = 0;
                                        t < o;
                                        t++
                                      )
                                        (d[t] += a * u.m_re[t]),
                                          (d[t + f + e] += a * u.m_im[t]);
                                      return (L += 2), (I = 2 * f + e);
                                    };
                                  return (
                                    (N.process = function (e) {
                                      var n = e[0].length,
                                        i = e[0];
                                      if (e.length > 1) {
                                        i = r.float_array(e[0].length);
                                        for (
                                          var s = 1 / e.length, u = 0;
                                          u < e.length;
                                          u++
                                        )
                                          for (var c = 0; c < n; c++)
                                            i[c] += s * e[u][c];
                                      }
                                      if (1 == a) {
                                        if (j + U > 0) {
                                          var p = j + U + n,
                                            _ = [];
                                          for (u = 0; u < e.length; u++) {
                                            var m = r.float_array(p);
                                            r.blit(d, 0, m, 0, j),
                                              r.blit(l, 0, m, j, U),
                                              r.blit(e[u], 0, m, j + U, n),
                                              _.push(m);
                                          }
                                          N.flush(0), (n = p), (e = _);
                                        }
                                        return (F += n / t), (P += n / t), e;
                                      }
                                      var g =
                                          2 *
                                          Math.floor(
                                            Math.max(0, U + n - (o - h)) /
                                              (2 * h),
                                          ),
                                        b = j + f * g + Math.floor(M + B * g);
                                      j > b && (b = j);
                                      var v = r.float_array(b);
                                      r.blit(d, 0, v, 0, j);
                                      for (var y = 0, w = j, k = 0, x = 0; ; ) {
                                        var R = o + h - U;
                                        if (y + R > n) {
                                          r.blit(i, y, l, U, n - y),
                                            (U += n - y),
                                            (y = n);
                                          break;
                                        }
                                        R <= 0
                                          ? (U -= 2 * h)
                                          : (r.blit(i, y, l, U, R),
                                            (y += R),
                                            (U = o - h)),
                                          (x = H()),
                                          (F += (2 * h) / t),
                                          (P += x / t),
                                          (k = w + x - b) < 0 && (k = 0),
                                          r.blit(d, 0, v, w, x - k),
                                          (w += x);
                                      }
                                      r.blit(d, x - k, d, 0, k), (j = k);
                                      var A = [];
                                      for (u = 0; u < e.length; u++) A.push(v);
                                      return A;
                                    }),
                                    N
                                  );
                                });
                            },
                            function (e, t, n) {
                              "use strict";
                              var r = n(0);
                              e.exports = function (e) {
                                for (
                                  var t = 1 << e,
                                    n = {
                                      m_logN: e,
                                      m_N: t,
                                      m_invN: 1 / t,
                                      m_re: r.float_array(t),
                                      m_im: r.float_array(t),
                                      m_revTgt: Array(t),
                                    },
                                    i = 0;
                                  i < t;
                                  i++
                                ) {
                                  for (var a = i, s = 0, o = 0; o < e; o++)
                                    (s <<= 1), (s |= 1 & a), (a >>= 1);
                                  n.m_revTgt[i] = s;
                                }
                                (n.twiddleRe = r.float_array(n.m_logN)),
                                  (n.twiddleIm = r.float_array(n.m_logN));
                                for (var u = 1, c = 0; c < n.m_logN; c++) {
                                  var l = 2 * u * Math.PI * n.m_invN;
                                  (n.twiddleRe[c] = Math.cos(l)),
                                    (n.twiddleIm[c] = Math.sin(l)),
                                    (u <<= 1);
                                }
                                n.inplace = function (e) {
                                  var t = n.m_re,
                                    r = n.m_im,
                                    i = n.m_N,
                                    a = n.m_logN,
                                    s = i >> 1,
                                    o = i >> 1,
                                    u = i;
                                  if (e)
                                    for (var c = 1 / i, l = 0; l < i; l++)
                                      (t[l] *= c), (r[l] *= c);
                                  for (var d = 0; d < a; d++) {
                                    var h = n.twiddleRe[d],
                                      f = n.twiddleIm[d];
                                    e || (f *= -1);
                                    for (var p = 0; p < i; ) {
                                      for (
                                        var _ = p,
                                          m = p + o,
                                          g = 1,
                                          b = 0,
                                          v = 0;
                                        v < s;
                                        v++
                                      ) {
                                        var y = t[_],
                                          w = r[_],
                                          k = t[m],
                                          x = r[m];
                                        (t[_] = y + k),
                                          (r[_] = w + x),
                                          (k = y - k),
                                          (x = w - x),
                                          (t[m] = k * g - x * b),
                                          (r[m] = k * b + x * g),
                                          _++,
                                          m++;
                                        var R = g;
                                        (g = g * h - b * f),
                                          (b = R * f + b * h);
                                      }
                                      p += u;
                                    }
                                    (s >>= 1), (o >>= 1), (u >>= 1);
                                  }
                                  for (
                                    var A, E, T = n.m_revTgt, V = 0;
                                    V < i;
                                    V++
                                  )
                                    T[V] > V &&
                                      ((E = t[(A = T[V])]),
                                      (t[A] = t[V]),
                                      (t[V] = E),
                                      (E = r[A]),
                                      (r[A] = r[V]),
                                      (r[V] = E));
                                };
                                var d = t >> 1;
                                return (
                                  (n.unpack = function (e, r, i, a) {
                                    (e[0] = n.m_re[0]),
                                      (i[0] = n.m_im[0]),
                                      (r[0] = a[0] = 0),
                                      (e[d] = n.m_re[d]),
                                      (i[d] = n.m_im[d]),
                                      (r[d] = a[d] = 0);
                                    for (var s = 1; s < d; s++)
                                      (e[s] = (n.m_re[s] + n.m_re[t - s]) / 2),
                                        (r[s] =
                                          (n.m_im[s] - n.m_im[t - s]) / 2),
                                        (i[s] =
                                          (n.m_im[s] + n.m_im[t - s]) / 2),
                                        (a[s] =
                                          (-n.m_re[s] + n.m_re[t - s]) / 2);
                                  }),
                                  (n.repack = function (e, r, i, a) {
                                    (n.m_re[0] = e[0]),
                                      (n.m_im[0] = i[0]),
                                      (n.m_re[d] = e[d]),
                                      (n.m_im[d] = i[d]);
                                    for (var s = 1; s < d; s++)
                                      (n.m_re[s] = e[s] - a[s]),
                                        (n.m_im[s] = r[s] + i[s]),
                                        (n.m_re[t - s] = e[s] + a[s]),
                                        (n.m_im[t - s] = -r[s] + i[s]);
                                  }),
                                  n
                                );
                              };
                            },
                          ],
                          t = {};
                        function n(r) {
                          if (t[r]) return t[r].exports;
                          var i = (t[r] = { i: r, l: !1, exports: {} });
                          return (
                            e[r].call(i.exports, i, i.exports, n),
                            (i.l = !0),
                            i.exports
                          );
                        }
                        return (
                          (n.m = e),
                          (n.c = t),
                          (n.d = function (e, t, r) {
                            n.o(e, t) ||
                              Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: r,
                              });
                          }),
                          (n.r = function (e) {
                            "u" > typeof Symbol &&
                              Symbol.toStringTag &&
                              Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module",
                              }),
                              Object.defineProperty(e, "__esModule", {
                                value: !0,
                              });
                          }),
                          (n.t = function (e, t) {
                            if (
                              (1 & t && (e = n(e)),
                              8 & t ||
                                (4 & t &&
                                  "object" == typeof e &&
                                  e &&
                                  e.__esModule))
                            )
                              return e;
                            var r = Object.create(null);
                            if (
                              (n.r(r),
                              Object.defineProperty(r, "default", {
                                enumerable: !0,
                                value: e,
                              }),
                              2 & t && "string" != typeof e)
                            )
                              for (var i in e)
                                n.d(
                                  r,
                                  i,
                                  function (t) {
                                    return e[t];
                                  }.bind(null, i),
                                );
                            return r;
                          }),
                          (n.n = function (e) {
                            var t =
                              e && e.__esModule
                                ? function () {
                                    return e.default;
                                  }
                                : function () {
                                    return e;
                                  };
                            return n.d(t, "a", t), t;
                          }),
                          (n.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                          }),
                          (n.p = ""),
                          n((n.s = 1))
                        );
                      })());
                  },
                ]));
            },
            893: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913));
              t.default = (function () {
                function e(t) {
                  (0, i.default)(this, e),
                    (this.lower = t.start),
                    (this.upper = t.end),
                    (this.onprocess = t.process),
                    (this.position = 0),
                    (this.n = 0);
                }
                return (
                  (0, a.default)(e, [
                    {
                      key: "iterate",
                      value: function () {
                        return (
                          this.n++,
                          (this.position = Math.floor(
                            (this.lower + this.upper) / 2,
                          )),
                          this.onprocess(this.lower, this.upper, this.position)
                        );
                      },
                    },
                    {
                      key: "start",
                      value: function () {
                        return this.iterate(), this;
                      },
                    },
                    {
                      key: "left",
                      value: function () {
                        return (this.upper = this.position), this.iterate();
                      },
                    },
                    {
                      key: "right",
                      value: function () {
                        return (this.lower = this.position), this.iterate();
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            523: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913));
              t.default = new ((function () {
                function e() {
                  (0, i.default)(this, e);
                }
                return (
                  (0, a.default)(e, [
                    {
                      key: "hasTypedArrays",
                      value: function () {
                        return !!window.Uint32Array;
                      },
                    },
                    {
                      key: "hasWebAssembly",
                      value: function () {
                        return !!window.WebAssembly;
                      },
                    },
                    {
                      key: "hasWebAudio",
                      value: function () {
                        return !(
                          !window.AudioContext && !window.webkitAudioContext
                        );
                      },
                    },
                    {
                      key: "hasFlash",
                      value: function () {
                        return !1;
                      },
                    },
                    {
                      key: "hasAudio",
                      value: function () {
                        return this.hasWebAudio();
                      },
                    },
                    {
                      key: "isBlacklisted",
                      value: function (e) {
                        return !1;
                      },
                    },
                    {
                      key: "isSlow",
                      value: function () {
                        return !1;
                      },
                    },
                    {
                      key: "isTooSlow",
                      value: function () {
                        return !1;
                      },
                    },
                    {
                      key: "supported",
                      value: function (e) {
                        return "OGVDecoder" === e
                          ? this.hasWebAssembly()
                          : "OGVPlayer" === e &&
                              this.supported("OGVDecoder") &&
                              this.hasAudio();
                      },
                    },
                  ]),
                  e
                );
              })())();
            },
            408: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913)),
                s = r(n(205)),
                o = r(n(585)),
                u = r(n(754));
              t.default = (function (e) {
                (0, s.default)(r, e);
                var t,
                  n =
                    ((t = (function () {
                      if (
                        "u" < typeof Reflect ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {}),
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    function () {
                      var e,
                        n = (0, u.default)(r);
                      return (
                        (e = t
                          ? Reflect.construct(
                              n,
                              arguments,
                              (0, u.default)(this).constructor,
                            )
                          : n.apply(this, arguments)),
                        (0, o.default)(this, e)
                      );
                    });
                function r() {
                  return (0, i.default)(this, r), n.apply(this, arguments);
                }
                return (
                  (0, a.default)(r, [
                    {
                      key: "init",
                      value: function (e) {
                        this.proxy("init", [], e);
                      },
                    },
                    {
                      key: "processHeader",
                      value: function (e, t) {
                        this.proxy("processHeader", [e], t, [e]);
                      },
                    },
                    {
                      key: "processAudio",
                      value: function (e, t) {
                        this.proxy("processAudio", [e], t, [e]);
                      },
                    },
                    {
                      key: "close",
                      value: function () {
                        this.terminate();
                      },
                    },
                  ]),
                  r
                );
              })(
                (0, r(n(580)).default)({
                  loadedMetadata: !1,
                  audioFormat: null,
                  audioBuffer: null,
                  cpuTime: 0,
                }),
              );
            },
            319: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913)),
                s = r(n(205)),
                o = r(n(585)),
                u = r(n(754));
              t.default = (function (e) {
                (0, s.default)(r, e);
                var t,
                  n =
                    ((t = (function () {
                      if (
                        "u" < typeof Reflect ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {}),
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    function () {
                      var e,
                        n = (0, u.default)(r);
                      return (
                        (e = t
                          ? Reflect.construct(
                              n,
                              arguments,
                              (0, u.default)(this).constructor,
                            )
                          : n.apply(this, arguments)),
                        (0, o.default)(this, e)
                      );
                    });
                function r() {
                  return (0, i.default)(this, r), n.apply(this, arguments);
                }
                return (
                  (0, a.default)(r, [
                    {
                      key: "init",
                      value: function (e) {
                        this.proxy("init", [], e);
                      },
                    },
                    {
                      key: "processHeader",
                      value: function (e, t) {
                        this.proxy("processHeader", [e], t, [e]);
                      },
                    },
                    {
                      key: "processFrame",
                      value: function (e, t) {
                        this.proxy("processFrame", [e], t, [e]);
                      },
                    },
                    {
                      key: "close",
                      value: function () {
                        this.terminate();
                      },
                    },
                    {
                      key: "sync",
                      value: function () {
                        this.proxy("sync", [], function () {});
                      },
                    },
                    {
                      key: "recycleFrame",
                      value: function (e) {
                        this.proxy("recycleFrame", [e], function () {}, [
                          e.y.bytes.buffer,
                          e.u.bytes.buffer,
                          e.v.bytes.buffer,
                        ]);
                      },
                    },
                  ]),
                  r
                );
              })(
                (0, r(n(580)).default)({
                  loadedMetadata: !1,
                  videoFormat: null,
                  frameBuffer: null,
                  cpuTime: 0,
                }),
              );
            },
            445: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913)),
                s = r(n(539)),
                o = "1.8.9-20220406232920-cb5f7ff",
                u = {
                  OGVDemuxerOggW: "ogv-demuxer-ogg-wasm.js",
                  OGVDemuxerWebMW: "ogv-demuxer-webm-wasm.js",
                  OGVDecoderAudioOpusW: "ogv-decoder-audio-opus-wasm.js",
                  OGVDecoderAudioVorbisW: "ogv-decoder-audio-vorbis-wasm.js",
                  OGVDecoderVideoTheoraW: "ogv-decoder-video-theora-wasm.js",
                  OGVDecoderVideoVP8W: "ogv-decoder-video-vp8-wasm.js",
                  OGVDecoderVideoVP8MTW: "ogv-decoder-video-vp8-mt-wasm.js",
                  OGVDecoderVideoVP9W: "ogv-decoder-video-vp9-wasm.js",
                  OGVDecoderVideoVP9SIMDW: "ogv-decoder-video-vp9-simd-wasm.js",
                  OGVDecoderVideoVP9MTW: "ogv-decoder-video-vp9-mt-wasm.js",
                  OGVDecoderVideoVP9SIMDMTW:
                    "ogv-decoder-video-vp9-simd-mt-wasm.js",
                  OGVDecoderVideoAV1W: "ogv-decoder-video-av1-wasm.js",
                  OGVDecoderVideoAV1SIMDW: "ogv-decoder-video-av1-simd-wasm.js",
                  OGVDecoderVideoAV1MTW: "ogv-decoder-video-av1-mt-wasm.js",
                  OGVDecoderVideoAV1SIMDMTW:
                    "ogv-decoder-video-av1-simd-mt-wasm.js",
                };
              t.default = (function () {
                function e() {
                  (0, i.default)(this, e), (this.base = this.defaultBase());
                }
                return (
                  (0, a.default)(e, [
                    { key: "defaultBase", value: function () {} },
                    {
                      key: "wasmSupported",
                      value: function () {
                        return s.default.wasmSupported();
                      },
                    },
                    {
                      key: "scriptForClass",
                      value: function (e) {
                        return u[e];
                      },
                    },
                    {
                      key: "urlForClass",
                      value: function (e) {
                        var t = this.scriptForClass(e);
                        if (t) return this.urlForScript(t);
                        throw Error("asked for URL for unknown class " + e);
                      },
                    },
                    {
                      key: "urlForScript",
                      value: function (e) {
                        if (e) {
                          var t = this.base;
                          return (
                            void 0 === t ? (t = "") : (t += "/"),
                            t + e + "?version=" + encodeURIComponent(o)
                          );
                        }
                        throw Error("asked for URL for unknown script " + e);
                      },
                    },
                    {
                      key: "loadClass",
                      value: function (e, t, n) {
                        var r = this;
                        n = n || {};
                        var i = this.getGlobal(),
                          a = this.urlForClass(e),
                          s = function (t) {
                            return (
                              ((t = t || {}).locateFile = function (e) {
                                return "data:" === e.slice(0, 5)
                                  ? e
                                  : r.urlForScript(e);
                              }),
                              (t.mainScriptUrlOrBlob =
                                r.scriptForClass(e) +
                                "?version=" +
                                encodeURIComponent(o)),
                              i[e](t)
                            );
                          };
                        "function" == typeof i[e]
                          ? t(s)
                          : this.loadScript(a, function () {
                              t(s);
                            });
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            964: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913)),
                s = r(n(525)),
                o = r(n(205)),
                u = r(n(585)),
                c = r(n(754)),
                l = r(n(408)),
                d = r(n(319)),
                h = r(n(445)),
                f = {
                  audio: { proxy: l.default, worker: "ogv-worker-audio.js" },
                  video: { proxy: d.default, worker: "ogv-worker-video.js" },
                },
                p = {
                  OGVDecoderAudioOpusW: "audio",
                  OGVDecoderAudioVorbisW: "audio",
                  OGVDecoderVideoTheoraW: "video",
                  OGVDecoderVideoVP8W: "video",
                  OGVDecoderVideoVP9W: "video",
                  OGVDecoderVideoVP9SIMDW: "video",
                  OGVDecoderVideoAV1W: "video",
                  OGVDecoderVideoAV1SIMDW: "video",
                },
                _ = new ((function (e) {
                  (0, o.default)(r, e);
                  var t,
                    n =
                      ((t = (function () {
                        if (
                          "u" < typeof Reflect ||
                          !Reflect.construct ||
                          Reflect.construct.sham
                        )
                          return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              Reflect.construct(Boolean, [], function () {}),
                            ),
                            !0
                          );
                        } catch (e) {
                          return !1;
                        }
                      })()),
                      function () {
                        var e,
                          n = (0, c.default)(r);
                        return (
                          (e = t
                            ? Reflect.construct(
                                n,
                                arguments,
                                (0, c.default)(this).constructor,
                              )
                            : n.apply(this, arguments)),
                          (0, u.default)(this, e)
                        );
                      });
                  function r() {
                    var e;
                    return (
                      (0, i.default)(this, r),
                      ((e = n.call(this)).scriptStatus = {}),
                      (e.scriptCallbacks = {}),
                      e
                    );
                  }
                  return (
                    (0, a.default)(r, [
                      {
                        key: "getGlobal",
                        value: function () {
                          return window;
                        },
                      },
                      {
                        key: "defaultBase",
                        value: function () {
                          for (
                            var e,
                              t,
                              n = document.querySelectorAll("script"),
                              r =
                                /^(?:|(.*)\/)ogv(?:-support|-es2017)?\.js(?:\?|#|$)/,
                              i = 0;
                            i < n.length;
                            i++
                          )
                            if (
                              (e = n[i].getAttribute("src")) &&
                              (t = e.match(r))
                            )
                              return t[1];
                        },
                      },
                      {
                        key: "loadClass",
                        value: function (e, t, n) {
                          (n = n || {}).worker
                            ? this.workerProxy(e, t)
                            : (0, s.default)(
                                (0, c.default)(r.prototype),
                                "loadClass",
                                this,
                              ).call(this, e, t, n);
                        },
                      },
                      {
                        key: "loadScript",
                        value: function (e, t) {
                          var n = this;
                          if ("done" == this.scriptStatus[e]) t();
                          else if ("loading" == this.scriptStatus[e])
                            this.scriptCallbacks[e].push(t);
                          else {
                            (this.scriptStatus[e] = "loading"),
                              (this.scriptCallbacks[e] = [t]);
                            var r = document.createElement("script"),
                              i = function (t) {
                                var r = n.scriptCallbacks[e];
                                delete n.scriptCallbacks[e],
                                  (n.scriptStatus[e] = "done"),
                                  r.forEach(function (e) {
                                    e();
                                  });
                              };
                            r.addEventListener("load", i),
                              r.addEventListener("error", i),
                              (r.src = e),
                              document.querySelector("head").appendChild(r);
                          }
                        },
                      },
                      {
                        key: "workerProxy",
                        value: function (e, t) {
                          var n = f[p[e]];
                          if (!n)
                            throw Error(
                              "Requested worker for class with no proxy: " + e,
                            );
                          var r,
                            i = n.proxy,
                            a = n.worker,
                            s = this.urlForScript(this.scriptForClass(e)),
                            o = this.urlForScript(a),
                            u = function (t) {
                              return new i(r, e, t);
                            };
                          if (o.match(/^https?:|\/\//i)) {
                            var c,
                              l,
                              d,
                              h,
                              m,
                              g = function () {
                                if (1 == b && 1 == v) {
                                  var e =
                                    d +
                                    " " +
                                    h +
                                    "\nOGVLoader.base = " +
                                    JSON.stringify(_.base);
                                  try {
                                    m = new Blob([e], {
                                      type: "application/javascript",
                                    });
                                  } catch (t) {
                                    (window.BlobBuilder =
                                      window.BlobBuilder ||
                                      window.WebKitBlobBuilder ||
                                      window.MozBlobBuilder),
                                      (m = new BlobBuilder()).append(e),
                                      (m = m.getBlob());
                                  }
                                  (r = new Worker(URL.createObjectURL(m))),
                                    t(function (e) {
                                      return Promise.resolve(new u(e));
                                    });
                                }
                              },
                              b = !1,
                              v = !1;
                            (c = new XMLHttpRequest()).open("GET", s, !0),
                              (c.onreadystatechange = function () {
                                4 == c.readyState &&
                                  200 == c.status &&
                                  ((d = c.responseText), (b = !0), g());
                              }),
                              c.send(),
                              (l = new XMLHttpRequest()).open("GET", o, !0),
                              (l.onreadystatechange = function () {
                                4 == l.readyState &&
                                  200 == l.status &&
                                  ((h = l.responseText), (v = !0), g());
                              }),
                              l.send();
                          } else
                            (r = new Worker(o)),
                              t(function (e) {
                                return Promise.resolve(new u(e));
                              });
                        },
                      },
                    ]),
                    r
                  );
                })(h.default))();
              t.default = _;
            },
            759: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(913)),
                a = r(n(575)),
                s = r(n(309)),
                o = {
                  MEDIA_ERR_ABORTED: 1,
                  MEDIA_ERR_NETWORK: 2,
                  MEDIA_ERR_DECODE: 3,
                  MEDIA_ERR_SRC_NOT_SUPPORTED: 4,
                },
                u = (0, i.default)(function e(t, n) {
                  (0, a.default)(this, e), (this.code = t), (this.message = n);
                });
              (0, s.default)(u, o),
                (0, s.default)(u.prototype, o),
                (t.default = u);
            },
            278: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(913)),
                a = r(n(575));
              function s(e, t, n) {
                var r = e.split(t, n).map(function (e) {
                  return e.replace(/^\s+/, "").replace(/\s+$/, "");
                });
                if ("number" == typeof n) for (; r.length < n; ) r.push(null);
                return r;
              }
              t.default = (0, i.default)(function e(t) {
                (0, a.default)(this, e),
                  (t = String(t)),
                  (this.major = null),
                  (this.minor = null),
                  (this.codecs = null);
                var n = s(t, ";");
                if (n.length) {
                  var r = n.shift();
                  if (r) {
                    var i = s(r, "/", 2);
                    (this.major = i[0]), (this.minor = i[1]);
                  }
                  for (var o in n) {
                    var u = n[o].match(/^codecs\s*=\s*"(.*?)"$/);
                    if (u) {
                      this.codecs = s(u[1], ",");
                      break;
                    }
                  }
                }
              });
            },
            869: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i,
                a = r(n(575)),
                s = r(n(913)),
                o = r(n(506)),
                u = r(n(205)),
                c = r(n(585)),
                l = r(n(754)),
                d = r(n(8)),
                h = r(n(731)),
                f = r(n(936)),
                p = r(n(848)),
                _ = r(n(964)),
                m = r(n(893)),
                g = r(n(309)),
                b = r(n(759)),
                v = r(n(278)),
                y = r(n(168)),
                w = r(n(625)),
                k = r(n(302)),
                x = (function () {
                  if ("function" == typeof setImmediate) return setImmediate;
                  var e = new MessageChannel(),
                    t = [];
                  return (
                    (e.port1.onmessage = function (e) {
                      t.shift()();
                    }),
                    function (n) {
                      t.push(n), e.port2.postMessage({});
                    }
                  );
                })(),
                R = {
                  NETWORK_EMPTY: 0,
                  NETWORK_IDLE: 1,
                  NETWORK_LOADING: 2,
                  NETWORK_NO_SOURCE: 3,
                  HAVE_NOTHING: 0,
                  HAVE_METADATA: 1,
                  HAVE_CURRENT_DATA: 2,
                  HAVE_FUTURE_DATA: 3,
                  HAVE_ENOUGH_DATA: 4,
                },
                A = "INITIAL",
                E = "SEEKING_END",
                T = "LOADED",
                V = "PRELOAD",
                C = "READY",
                D = "PLAYING",
                F = "SEEKING",
                P = "ERROR",
                S = "NOT_SEEKING",
                L = "BISECT_TO_TARGET",
                I = "BISECT_TO_KEYPOINT",
                O = "LINEAR_TO_TARGET",
                M = "fast";
              function B() {
                var e = document.createElement("ogvjs");
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, Object.getPrototypeOf(this))
                    : (e.__proto__ = this.__proto__),
                  e
                );
              }
              (i =
                "u" < typeof performance ||
                void 0 === (0, d.default)(performance.now)
                  ? Date.now
                  : performance.now.bind(performance)),
                (B.prototype = Object.create(HTMLElement.prototype, {}));
              var U = (function (e) {
                (0, u.default)(r, e);
                var t,
                  n =
                    ((t = (function () {
                      if (
                        "u" < typeof Reflect ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {}),
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    function () {
                      var e,
                        n = (0, l.default)(r);
                      return (
                        (e = t
                          ? Reflect.construct(
                              n,
                              arguments,
                              (0, l.default)(this).constructor,
                            )
                          : n.apply(this, arguments)),
                        (0, c.default)(this, e)
                      );
                    });
                function r(e) {
                  var t;
                  if (
                    ((0, a.default)(this, r),
                    (t = n.call(this)),
                    ((e = e || {}).base = e.base || _.default.base),
                    (t._options = e),
                    (t._instanceId = "ogvjs" + ++r.instanceCount),
                    void 0 !== e.worker
                      ? (t._enableWorker = !!e.worker)
                      : (t._enableWorker = !!window.Worker),
                    !_.default.wasmSupported())
                  )
                    throw Error("WebAssembly not supported");
                  return (
                    (t._enableThreading = !!e.threading),
                    (t._enableSIMD = !!e.simd),
                    (t._state = A),
                    (t._seekState = S),
                    (t._detectedType = null),
                    (t._canvas = document.createElement("canvas")),
                    (t._frameSink = null),
                    (t.className = t._instanceId),
                    (0, g.default)((0, o.default)(t), R),
                    (t._view = t._canvas),
                    (t._view.style.position = "absolute"),
                    (t._view.style.top = "0"),
                    (t._view.style.left = "0"),
                    (t._view.style.width = "100%"),
                    (t._view.style.height = "100%"),
                    (t._view.style.objectFit = "contain"),
                    t.appendChild(t._view),
                    (t._startTime = i()),
                    (t._codec = null),
                    (t._audioInfo = null),
                    (t._videoInfo = null),
                    (t._actionQueue = []),
                    (t._audioFeeder = null),
                    (t._muted = !1),
                    (t._initialPlaybackPosition = 0),
                    (t._initialPlaybackOffset = 0),
                    (t._prebufferingAudio = !1),
                    (t._initialSeekTime = 0),
                    (t._currentSrc = ""),
                    (t._crossOrigin = null),
                    (t._streamEnded = !1),
                    (t._mediaError = null),
                    (t._dataEnded = !1),
                    (t._byteLength = 0),
                    (t._duration = null),
                    (t._lastSeenTimestamp = null),
                    t._nextProcessingTimer,
                    (t._nextFrameTimer = null),
                    (t._loading = !1),
                    (t._started = !1),
                    (t._paused = !0),
                    (t._ended = !1),
                    (t._startedPlaybackInDocument = !1),
                    (t._stream = void 0),
                    (t._framesProcessed = 0),
                    (t._targetPerFrameTime = 1e3 / 60),
                    (t._actualPerFrameTime = 0),
                    (t._totalFrameTime = 0),
                    (t._totalFrameCount = 0),
                    (t._playTime = 0),
                    (t._bufferTime = 0),
                    (t._drawingTime = 0),
                    (t._proxyTime = 0),
                    (t._totalJitter = 0),
                    (t._droppedAudio = 0),
                    (t._delayedAudio = 0),
                    (t._lateFrames = 0),
                    (t._poster = ""),
                    (t._thumbnail = null),
                    (t._frameEndTimestamp = 0),
                    (t._audioEndTimestamp = 0),
                    (t._decodedFrames = []),
                    (t._pendingFrames = []),
                    (t._lastFrameDecodeTime = 0),
                    (t._lastFrameVideoCpuTime = 0),
                    (t._lastFrameAudioCpuTime = 0),
                    (t._lastFrameDemuxerCpuTime = 0),
                    (t._lastFrameDrawingTime = 0),
                    (t._lastFrameBufferTime = 0),
                    (t._lastFrameProxyTime = 0),
                    (t._lastVideoCpuTime = 0),
                    (t._lastAudioCpuTime = 0),
                    (t._lastDemuxerCpuTime = 0),
                    (t._lastBufferTime = 0),
                    (t._lastProxyTime = 0),
                    (t._lastDrawingTime = 0),
                    (t._lastFrameTimestamp = 0),
                    (t._currentVideoCpuTime = 0),
                    (t._lastTimeUpdate = 0),
                    (t._timeUpdateInterval = 250),
                    (t._seekTargetTime = 0),
                    (t._bisectTargetTime = 0),
                    (t._seekMode = null),
                    (t._lastSeekPosition = null),
                    (t._seekBisector = null),
                    (t._didSeek = null),
                    (t._depth = 0),
                    (t._needProcessing = !1),
                    (t._pendingFrame = 0),
                    (t._pendingAudio = 0),
                    (t._framePipelineDepth = 8),
                    (t._frameParallelism = t._enableThreading
                      ? Math.min(16, navigator.hardwareConcurrency) || 1
                      : 0),
                    (t._audioPipelineDepth = 12),
                    (t._videoInfo = null),
                    (t._audioInfo = null),
                    (t._width = 0),
                    (t._height = 0),
                    (t._volume = 1),
                    (t._playbackRate = 1),
                    Object.defineProperties((0, o.default)(t), {
                      src: {
                        get: function () {
                          return this.getAttribute("src") || "";
                        },
                        set: function (e) {
                          this.setAttribute("src", e),
                            (this._loading = !1),
                            this._prepForLoad("interactive");
                        },
                      },
                      buffered: {
                        get: function () {
                          var e,
                            t = this;
                          return (
                            (e =
                              this._stream && this._byteLength && this._duration
                                ? this._stream
                                    .getBufferedRanges()
                                    .map(function (e) {
                                      return e.map(function (e) {
                                        return (
                                          (e / t._stream.length) * t._duration
                                        );
                                      });
                                    })
                                : [[0, 0]]),
                            new y.default(e)
                          );
                        },
                      },
                      seekable: {
                        get: function () {
                          return new y.default(
                            this.duration < 1 / 0 &&
                            this._stream &&
                            this._stream.seekable &&
                            this._codec &&
                            this._codec.seekable
                              ? [[0, this._duration]]
                              : [],
                          );
                        },
                      },
                      currentTime: {
                        get: function () {
                          return this._state == F
                            ? this._seekTargetTime
                            : this._codec
                              ? this._state != D || this._paused
                                ? this._initialPlaybackOffset
                                : this._getPlaybackTime()
                              : this._initialSeekTime;
                        },
                        set: function (e) {
                          this._seek(e, "exact");
                        },
                      },
                      duration: {
                        get: function () {
                          return this._codec && this._codec.loadedMetadata
                            ? null !== this._duration
                              ? this._duration
                              : 1 / 0
                            : NaN;
                        },
                      },
                      paused: {
                        get: function () {
                          return this._paused;
                        },
                      },
                      ended: {
                        get: function () {
                          return this._ended;
                        },
                      },
                      seeking: {
                        get: function () {
                          return this._state == F;
                        },
                      },
                      muted: {
                        get: function () {
                          return this._muted;
                        },
                        set: function (e) {
                          (this._muted = e),
                            this._audioFeeder
                              ? (this._audioFeeder.muted = this._muted)
                              : this._started &&
                                !this._muted &&
                                this._codec &&
                                this._codec.hasAudio &&
                                (this._log(
                                  "unmuting: switching from timer to audio clock",
                                ),
                                this._initAudioFeeder(),
                                this._startPlayback(this._audioEndTimestamp)),
                            this._fireEventAsync("volumechange");
                        },
                      },
                      poster: {
                        get: function () {
                          return this._poster;
                        },
                        set: function (e) {
                          var t = this;
                          if (((this._poster = e), !this._started)) {
                            this._thumbnail &&
                              this.removeChild(this._thumbnail);
                            var n = new Image();
                            (n.crossOrigin = this.crossOrigin),
                              (n.src = this._poster),
                              (n.className = "ogvjs-poster"),
                              (n.style.position = "absolute"),
                              (n.style.top = "0"),
                              (n.style.left = "0"),
                              (n.style.width = "100%"),
                              (n.style.height = "100%"),
                              (n.style.objectFit = "contain"),
                              (n.style.visibility = "hidden"),
                              n.addEventListener("load", function () {
                                t._thumbnail === n &&
                                  (r.styleManager.appendRule(
                                    "." + t._instanceId,
                                    {
                                      width: n.naturalWidth + "px",
                                      height: n.naturalHeight + "px",
                                    },
                                  ),
                                  (n.style.visibility = "visible"));
                              }),
                              (this._thumbnail = n),
                              this.appendChild(n);
                          }
                        },
                      },
                      videoWidth: {
                        get: function () {
                          return this._videoInfo
                            ? this._videoInfo.displayWidth
                            : 0;
                        },
                      },
                      videoHeight: {
                        get: function () {
                          return this._videoInfo
                            ? this._videoInfo.displayHeight
                            : 0;
                        },
                      },
                      ogvjsVideoFrameRate: {
                        get: function () {
                          return this._videoInfo
                            ? 0 == this._videoInfo.fps
                              ? this._totalFrameCount /
                                (this._totalFrameTime / 1e3)
                              : this._videoInfo.fps
                            : 0;
                        },
                      },
                      ogvjsAudioChannels: {
                        get: function () {
                          return this._audioInfo ? this._audioInfo.channels : 0;
                        },
                      },
                      ogvjsAudioSampleRate: {
                        get: function () {
                          return this._audioInfo ? this._audioInfo.rate : 0;
                        },
                      },
                      width: {
                        get: function () {
                          return this._width;
                        },
                        set: function (e) {
                          (this._width = parseInt(e, 10)),
                            (this.style.width = this._width + "px");
                        },
                      },
                      height: {
                        get: function () {
                          return this._height;
                        },
                        set: function (e) {
                          (this._height = parseInt(e, 10)),
                            (this.style.height = this._height + "px");
                        },
                      },
                      autoplay: {
                        get: function () {
                          return !1;
                        },
                        set: function (e) {},
                      },
                      controls: {
                        get: function () {
                          return !1;
                        },
                        set: function (e) {},
                      },
                      loop: {
                        get: function () {
                          return !1;
                        },
                        set: function (e) {},
                      },
                      crossOrigin: {
                        get: function () {
                          return this._crossOrigin;
                        },
                        set: function (e) {
                          switch (e) {
                            case null:
                              (this._crossOrigin = e),
                                this.removeAttribute("crossorigin");
                              break;
                            default:
                              e = "anonymous";
                            case "":
                            case "anonymous":
                            case "use-credentials":
                              (this._crossOrigin = e),
                                this.setAttribute("crossorigin", e);
                          }
                          this._thumbnail && (this._thumbnail.crossOrigin = e);
                        },
                      },
                      currentSrc: {
                        get: function () {
                          return this._currentSrc;
                        },
                      },
                      defaultMuted: {
                        get: function () {
                          return !1;
                        },
                      },
                      defaultPlaybackRate: {
                        get: function () {
                          return 1;
                        },
                      },
                      error: {
                        get: function () {
                          return this._state === P
                            ? this._mediaError
                              ? this._mediaError
                              : new b.default(
                                  "unknown error occurred in media procesing",
                                )
                            : null;
                        },
                      },
                      preload: {
                        get: function () {
                          return this.getAttribute("preload") || "";
                        },
                        set: function (e) {
                          this.setAttribute("preload", e);
                        },
                      },
                      readyState: {
                        get: function () {
                          return this._stream &&
                            this._codec &&
                            this._codec.loadedMetadata
                            ? r.HAVE_ENOUGH_DATA
                            : r.HAVE_NOTHING;
                        },
                      },
                      networkState: {
                        get: function () {
                          return this._stream
                            ? this._stream.waiting
                              ? r.NETWORK_LOADING
                              : r.NETWORK_IDLE
                            : this.readyState == r.HAVE_NOTHING
                              ? r.NETWORK_EMPTY
                              : r.NETWORK_NO_SOURCE;
                        },
                      },
                      playbackRate: {
                        get: function () {
                          return this._playbackRate;
                        },
                        set: function (e) {
                          var t = Number(e) || 1;
                          this._audioFeeder
                            ? (this._audioFeeder.tempo = t)
                            : this._paused ||
                              ((this._initialPlaybackOffset =
                                this._getPlaybackTime()),
                              (this._initialPlaybackPosition =
                                (t * i()) / 1e3)),
                            (this._playbackRate = t),
                            this._fireEventAsync("ratechange");
                        },
                      },
                      played: {
                        get: function () {
                          return new y.default([[0, this.currentTime]]);
                        },
                      },
                      volume: {
                        get: function () {
                          return this._volume;
                        },
                        set: function (e) {
                          (this._volume = +e),
                            this._audioFeeder &&
                              (this._audioFeeder.volume = this._volume),
                            this._fireEventAsync("volumechange");
                        },
                      },
                    }),
                    (t.onframecallback = null),
                    (t.onloadstate = null),
                    (t.onprogress = null),
                    (t.onsuspend = null),
                    (t.onabort = null),
                    (t.onemptied = null),
                    (t.onstalled = null),
                    (t.onloadedmetadata = null),
                    (t.onloadeddata = null),
                    (t.oncanplay = null),
                    (t.oncanplaythrough = null),
                    (t.onplaying = null),
                    (t.onwaiting = null),
                    (t.onseeking = null),
                    (t.onseeked = null),
                    (t.onended = null),
                    (t.ondurationchange = null),
                    (t.ontimeupdate = null),
                    (t.onplay = null),
                    (t.onpause = null),
                    (t.onratechange = null),
                    (t.onresize = null),
                    (t.onvolumechange = null),
                    (t.onaudiofeedercreated = null),
                    t
                  );
                }
                return (
                  (0, s.default)(
                    r,
                    [
                      {
                        key: "_time",
                        value: function (e) {
                          var t = i();
                          e();
                          var n = i() - t;
                          return (this._lastFrameDecodeTime += n), n;
                        },
                      },
                      {
                        key: "_log",
                        value: function (e) {
                          var t = this._options;
                          if (t.debug) {
                            var n = i() - this._startTime;
                            (t.debugFilter && !e.match(t.debugFilter)) ||
                              console.log(
                                "[" + Math.round(10 * n) / 10 + "ms] " + e,
                              );
                          }
                        },
                      },
                      {
                        key: "_fireEvent",
                        value: function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                          this._log("fireEvent " + e);
                          var n,
                            r = "function" == typeof Event;
                          for (var i in (r
                            ? (n = new CustomEvent(e))
                            : (n = document.createEvent("Event")).initEvent(
                                e,
                                !1,
                                !1,
                              ),
                          t))
                            t.hasOwnProperty(i) && (n[i] = t[i]);
                          var a = this.dispatchEvent(n);
                          !r &&
                            "resize" === e &&
                            this.onresize &&
                            a &&
                            this.onresize.call(this, n);
                        },
                      },
                      {
                        key: "_fireEventAsync",
                        value: function (e) {
                          var t = this,
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                          this._log("fireEventAsync " + e),
                            x(function () {
                              t._fireEvent(e, n);
                            });
                        },
                      },
                      {
                        key: "_initAudioFeeder",
                        value: function () {
                          var e = this,
                            t = this._options,
                            n = { bufferSize: 8192 };
                          t.audioContext && (n.audioContext = t.audioContext),
                            t.audioDestination &&
                              (n.output = t.audioDestination),
                            t.audioBackendFactory &&
                              (n.backendFactory = t.audioBackendFactory);
                          var r = (this._audioFeeder = new p.default(n));
                          r.init(
                            this._audioInfo.channels,
                            this._audioInfo.rate,
                          ),
                            this.onaudiofeedercreated &&
                              this.onaudiofeedercreated(this._audioFeeder),
                            (r.bufferThreshold = 1),
                            (r.volume = this.volume),
                            (r.muted = this.muted),
                            (r.tempo = this.playbackRate),
                            (r.onbufferlow = function () {
                              e._log("onbufferlow"),
                                (e._stream &&
                                  (e._stream.buffering || e._stream.seeking)) ||
                                  e._pendingAudio ||
                                  e._pingProcessing();
                            }),
                            (r.onstarved = function () {
                              e._dataEnded
                                ? e._log(
                                    "onstarved: appear to have reached end of audio",
                                  )
                                : (e._log(
                                    "onstarved: halting audio due to starvation",
                                  ),
                                  e._stopPlayback(),
                                  (e._prebufferingAudio = !0)),
                                e._isProcessing() || e._pingProcessing(0);
                            });
                        },
                      },
                      {
                        key: "_startPlayback",
                        value: function (e) {
                          if (this._audioFeeder) {
                            this._audioFeeder.start();
                            var t = this._audioFeeder.getPlaybackState();
                            this._initialPlaybackPosition = t.playbackPosition;
                          } else
                            this._initialPlaybackPosition =
                              (this._playbackRate * i()) / 1e3;
                          void 0 !== e && (this._initialPlaybackOffset = e),
                            (this._prebufferingAudio = !1),
                            this._log(
                              "continuing at " +
                                this._initialPlaybackPosition +
                                ", " +
                                this._initialPlaybackOffset,
                            );
                        },
                      },
                      {
                        key: "_stopPlayback",
                        value: function () {
                          (this._initialPlaybackOffset =
                            this._getPlaybackTime()),
                            this._log(
                              "pausing at " + this._initialPlaybackOffset,
                            ),
                            this._audioFeeder && this._audioFeeder.stop();
                        },
                      },
                      {
                        key: "_getPlaybackTime",
                        value: function (e) {
                          return this._prebufferingAudio || this._paused
                            ? this._initialPlaybackOffset
                            : (this._audioFeeder
                                ? (e =
                                    e || this._audioFeeder.getPlaybackState())
                                    .playbackPosition
                                : (this._playbackRate * i()) / 1e3) -
                                this._initialPlaybackPosition +
                                this._initialPlaybackOffset;
                        },
                      },
                      {
                        key: "_stopVideo",
                        value: function () {
                          this._log("STOPPING"),
                            (this._state = A),
                            (this._seekState = S),
                            (this._started = !1),
                            (this._ended = !1),
                            (this._frameEndTimestamp = 0),
                            (this._audioEndTimestamp = 0),
                            (this._lastFrameDecodeTime = 0),
                            (this._prebufferingAudio = !1),
                            this._actionQueue.splice(
                              0,
                              this._actionQueue.length,
                            ),
                            this._stream &&
                              (this._stream.abort(),
                              (this._stream = null),
                              (this._streamEnded = !1)),
                            this._codec &&
                              (this._codec.close(),
                              (this._codec = null),
                              (this._pendingFrame = 0),
                              (this._pendingAudio = 0),
                              (this._dataEnded = !1)),
                            (this._videoInfo = null),
                            (this._audioInfo = null),
                            this._audioFeeder &&
                              (this._audioFeeder.close(),
                              (this._audioFeeder = null)),
                            this._nextProcessingTimer &&
                              (clearTimeout(this._nextProcessingTimer),
                              (this._nextProcessingTimer = null)),
                            this._nextFrameTimer &&
                              (clearTimeout(this._nextFrameTimer),
                              (this._nextFrameTimer = null)),
                            this._frameSink &&
                              (this._frameSink.clear(),
                              (this._frameSink = null)),
                            this._decodedFrames && (this._decodedFrames = []),
                            this._pendingFrames && (this._pendingFrames = []),
                            (this._initialSeekTime = 0),
                            (this._initialPlaybackPosition = 0),
                            (this._initialPlaybackOffset = 0),
                            (this._duration = null);
                        },
                      },
                      {
                        key: "_doFrameComplete",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                          this._startedPlaybackInDocument &&
                            !document.body.contains(this) &&
                            x(function () {
                              e.stop();
                            });
                          var n = i(),
                            r = n - this._lastFrameTimestamp,
                            a =
                              this._actualPerFrameTime -
                              this._targetPerFrameTime;
                          (this._totalJitter += Math.abs(a)),
                            (this._playTime += r);
                          var s = {
                            cpuTime: this._lastFrameDecodeTime,
                            drawingTime:
                              this._drawingTime - this._lastFrameDrawingTime,
                            bufferTime:
                              this._bufferTime - this._lastFrameBufferTime,
                            proxyTime:
                              this._proxyTime - this._lastFrameProxyTime,
                            demuxerTime: 0,
                            videoTime: 0,
                            audioTime: 0,
                            clockTime: this._actualPerFrameTime,
                            late: t.dropped,
                            dropped: t.dropped,
                          };
                          function o(e) {
                            return Math.round(10 * e) / 10;
                          }
                          this._codec &&
                            ((s.demuxerTime =
                              this._codec.demuxerCpuTime -
                              this._lastFrameDemuxerCpuTime),
                            (s.videoTime +=
                              this._currentVideoCpuTime -
                              this._lastFrameVideoCpuTime),
                            (s.audioTime +=
                              this._codec.audioCpuTime -
                              this._lastFrameAudioCpuTime)),
                            (s.cpuTime += s.demuxerTime),
                            (this._lastFrameDecodeTime = 0),
                            (this._lastFrameTimestamp = n),
                            this._codec
                              ? ((this._lastFrameVideoCpuTime =
                                  this._currentVideoCpuTime),
                                (this._lastFrameAudioCpuTime =
                                  this._codec.audioCpuTime),
                                (this._lastFrameDemuxerCpuTime =
                                  this._codec.demuxerCpuTime))
                              : ((this._lastFrameVideoCpuTime = 0),
                                (this._lastFrameAudioCpuTime = 0),
                                (this._lastFrameDemuxerCpuTime = 0)),
                            (this._lastFrameDrawingTime = this._drawingTime),
                            (this._lastFrameBufferTime = this._bufferTime),
                            (this._lastFrameProxyTime = this._proxyTime),
                            this._log(
                              "drew frame " +
                                t.frameEndTimestamp +
                                ": clock time " +
                                o(r) +
                                " (jitter " +
                                o(a) +
                                ") cpu: " +
                                o(s.cpuTime) +
                                " (mux: " +
                                o(s.demuxerTime) +
                                " buf: " +
                                o(s.bufferTime) +
                                " draw: " +
                                o(s.drawingTime) +
                                " proxy: " +
                                o(s.proxyTime) +
                                ") vid: " +
                                o(s.videoTime) +
                                " aud: " +
                                o(s.audioTime),
                            ),
                            this._fireEventAsync("framecallback", s),
                            (!this._lastTimeUpdate ||
                              n - this._lastTimeUpdate >=
                                this._timeUpdateInterval) &&
                              ((this._lastTimeUpdate = n),
                              this._fireEventAsync("timeupdate")),
                            this._codec &&
                              t.yCbCrBuffer &&
                              this._codec.recycleFrame(t.yCbCrBuffer);
                        },
                      },
                      {
                        key: "_seekStream",
                        value: function (e) {
                          var t = this;
                          this._stream.seeking && this._stream.abort(),
                            this._stream.buffering && this._stream.abort(),
                            (this._streamEnded = !1),
                            (this._dataEnded = !1),
                            (this._ended = !1),
                            this._stream
                              .seek(e)
                              .then(function () {
                                t._readBytesAndWait();
                              })
                              .catch(function (e) {
                                t._onStreamError(e);
                              });
                        },
                      },
                      {
                        key: "_onStreamError",
                        value: function (e) {
                          "AbortError" === e.name
                            ? this._log("i/o promise canceled; ignoring")
                            : (this._log("i/o error: " + e),
                              (this._mediaError = new b.default(
                                b.default.MEDIA_ERR_NETWORK,
                                String(e),
                              )),
                              (this._state = P),
                              this._stopPlayback());
                        },
                      },
                      {
                        key: "_seek",
                        value: function (e, t) {
                          var n = this;
                          if (
                            (this._log(
                              "requested seek to " + e + ", mode " + t,
                            ),
                            this.readyState == this.HAVE_NOTHING)
                          )
                            return (
                              this._log(
                                "not yet loaded; saving seek position for later",
                              ),
                              void (this._initialSeekTime = e)
                            );
                          if (this._stream && !this._stream.seekable)
                            throw Error("Cannot seek a non-seekable stream");
                          if (this._codec && !this._codec.seekable)
                            throw Error("Cannot seek in a non-seekable file");
                          var r = function (r) {
                            n._stream &&
                              n._stream.buffering &&
                              n._stream.abort(),
                              n._stream &&
                                n._stream.seeking &&
                                n._stream.abort(),
                              n._actionQueue.splice(0, n._actionQueue.length),
                              n._stopPlayback(),
                              (n._prebufferingAudio = !1),
                              n._audioFeeder && n._audioFeeder.flush(),
                              (n._state = F),
                              (n._seekTargetTime = e),
                              (n._seekMode = t),
                              n._codec ? n._codec.flush(r) : r();
                          };
                          r(function () {
                            n._isProcessing() || n._pingProcessing(0);
                          }),
                            this._actionQueue.push(function () {
                              r(function () {
                                n._doSeek(e);
                              });
                            });
                        },
                      },
                      {
                        key: "_doSeek",
                        value: function (e) {
                          var t = this;
                          (this._streamEnded = !1),
                            (this._dataEnded = !1),
                            (this._ended = !1),
                            (this._state = F),
                            (this._seekTargetTime = e),
                            (this._lastSeekPosition = -1),
                            (this._decodedFrames = []),
                            (this._pendingFrames = []),
                            (this._pendingFrame = 0),
                            (this._pendingAudio = 0),
                            (this._didSeek = !1),
                            this._codec.seekToKeypoint(e, function (n) {
                              n
                                ? ((t._seekState = O),
                                  t._fireEventAsync("seeking"),
                                  t._didSeek || t._pingProcessing())
                                : t._codec.getKeypointOffset(e, function (e) {
                                    e > 0
                                      ? ((t._seekState = O), t._seekStream(e))
                                      : ((t._seekState = L),
                                        t._startBisection(t._seekTargetTime)),
                                      t._fireEventAsync("seeking");
                                  });
                            });
                        },
                      },
                      {
                        key: "_startBisection",
                        value: function (e) {
                          var t = this,
                            n = Math.max(0, this._stream.length - 65536);
                          (this._bisectTargetTime = e),
                            (this._seekBisector = new m.default({
                              start: 0,
                              end: n,
                              process: function (e, n, r) {
                                return (
                                  r != t._lastSeekPosition &&
                                  ((t._lastSeekPosition = r),
                                  t._codec.flush(function () {
                                    t._seekStream(r);
                                  }),
                                  !0)
                                );
                              },
                            })),
                            this._seekBisector.start();
                        },
                      },
                      {
                        key: "_continueSeekedPlayback",
                        value: function () {
                          var e = this;
                          (this._seekState = S),
                            (this._state = C),
                            (this._frameEndTimestamp =
                              this._codec.frameTimestamp),
                            (this._audioEndTimestamp =
                              this._codec.audioTimestamp),
                            this._codec.hasAudio
                              ? (this._seekTargetTime =
                                  this._codec.audioTimestamp)
                              : (this._seekTargetTime =
                                  this._codec.frameTimestamp),
                            (this._initialPlaybackOffset =
                              this._seekTargetTime);
                          var t = function () {
                            (e._lastTimeUpdate = e._seekTargetTime),
                              e._fireEventAsync("timeupdate"),
                              e._fireEventAsync("seeked"),
                              e._isProcessing() || e._pingProcessing();
                          };
                          if (
                            this._codec.hasVideo &&
                            this._decodedFrames.length
                          ) {
                            var n = this._decodedFrames.shift();
                            this._drawFrame(n.yCbCrBuffer), t();
                          } else {
                            if (this._codec.hasVideo && this._codec.frameReady)
                              return (
                                this._codec.decodeFrame(function (n) {
                                  n && e._drawFrame(e._codec.frameBuffer), t();
                                }),
                                void this._codec.sync()
                              );
                            t();
                          }
                        },
                      },
                      {
                        key: "_drawFrame",
                        value: function (e) {
                          this._thumbnail &&
                            (this.removeChild(this._thumbnail),
                            (this._thumbnail = null)),
                            this._frameSink.drawFrame(e);
                        },
                      },
                      {
                        key: "_doProcessLinearSeeking",
                        value: function () {
                          var e,
                            t = this;
                          if (
                            ((e = this._codec.hasVideo
                              ? this._targetPerFrameTime / 1e3
                              : 1 / 256),
                            this._codec.hasVideo)
                          ) {
                            if (this._pendingFrame) return;
                            if (!this._codec.frameReady)
                              return void this._codec.process(function (e) {
                                e
                                  ? t._pingProcessing()
                                  : t._streamEnded
                                    ? (t._log(
                                        "stream ended during linear seeking on video",
                                      ),
                                      (t._dataEnded = !0),
                                      t._continueSeekedPlayback())
                                    : t._readBytesAndWait();
                              });
                            if (
                              this._seekMode === M &&
                              this._codec.keyframeTimestamp ==
                                this._codec.frameTimestamp
                            )
                              return void this._continueSeekedPlayback();
                            if (
                              this._codec.frameTimestamp <= this._seekTargetTime
                            ) {
                              var n = this._codec.frameTimestamp;
                              return (
                                this._pendingFrame++,
                                this._pendingFrames.push({
                                  frameEndTimestamp: n,
                                }),
                                this._decodedFrames.splice(
                                  0,
                                  this._decodedFrames.length,
                                ),
                                this._codec.decodeFrame(function (e) {
                                  t._pendingFrame--,
                                    t._pendingFrames.shift(),
                                    t._decodedFrames.push({
                                      yCbCrBuffer: t._codec.frameBuffer,
                                      videoCpuTime: t._codec.videoCpuTime,
                                      frameEndTimestamp: n,
                                    }),
                                    t._pingProcessing();
                                }),
                                void this._codec.sync()
                              );
                            }
                            if (!this._codec.hasAudio)
                              return void this._continueSeekedPlayback();
                          }
                          if (this._codec.hasAudio) {
                            if (this._pendingAudio) return;
                            return this._codec.audioReady
                              ? this._codec.audioTimestamp + e <
                                this._seekTargetTime
                                ? void this._codec.decodeAudio(function () {
                                    t._pingProcessing();
                                  })
                                : void this._continueSeekedPlayback()
                              : void this._codec.process(function (e) {
                                  e
                                    ? t._pingProcessing()
                                    : t._streamEnded
                                      ? (t._log(
                                          "stream ended during linear seeking on audio",
                                        ),
                                        (t._dataEnded = !0),
                                        t._continueSeekedPlayback())
                                      : t._readBytesAndWait();
                                });
                          }
                        },
                      },
                      {
                        key: "_doProcessBisectionSeek",
                        value: function () {
                          var e,
                            t,
                            n = this;
                          if (this._codec.hasVideo)
                            (t = this._codec.frameTimestamp),
                              (e = this._targetPerFrameTime / 1e3);
                          else {
                            if (!this._codec.hasAudio)
                              throw Error(
                                "Invalid seek state; no audio or video track available",
                              );
                            (t = this._codec.audioTimestamp), (e = 1 / 256);
                          }
                          t < 0
                            ? this._codec.process(function (e) {
                                if (e) n._pingProcessing();
                                else if (n._streamEnded) {
                                  if (
                                    (n._log(
                                      "stream ended during bisection seek",
                                    ),
                                    !n._seekBisector.right())
                                  )
                                    throw (
                                      (n._log("failed going back"),
                                      Error("not sure what to do"))
                                    );
                                } else n._readBytesAndWait();
                              })
                            : t - e / 2 > this._bisectTargetTime
                              ? this._seekBisector.left() ||
                                (this._log("close enough (left)"),
                                (this._seekTargetTime = t),
                                this._continueSeekedPlayback())
                              : t + e / 2 < this._bisectTargetTime
                                ? this._seekBisector.right() ||
                                  (this._log("close enough (right)"),
                                  (this._seekState = O),
                                  this._pingProcessing())
                                : this._seekState == L &&
                                    this._codec.hasVideo &&
                                    this._codec.keyframeTimestamp <
                                      this._codec.frameTimestamp
                                  ? (this._log("finding the keypoint now"),
                                    (this._seekState = I),
                                    this._startBisection(
                                      this._codec.keyframeTimestamp,
                                    ))
                                  : (this._log("straight seeking now"),
                                    (this._seekState = O),
                                    this._pingProcessing());
                        },
                      },
                      {
                        key: "_setupVideo",
                        value: function () {
                          this._videoInfo.fps > 0
                            ? (this._targetPerFrameTime =
                                1e3 / this._videoInfo.fps)
                            : (this._targetPerFrameTime = 16.667),
                            (this._canvas.width = this._videoInfo.displayWidth),
                            (this._canvas.height =
                              this._videoInfo.displayHeight),
                            r.styleManager.appendRule("." + this._instanceId, {
                              width: this._videoInfo.displayWidth + "px",
                              height: this._videoInfo.displayHeight + "px",
                            });
                          var e = {};
                          void 0 !== this._options.webGL &&
                            (e.webGL = this._options.webGL),
                            this._options.forceWebGL && (e.webGL = "required"),
                            (this._frameSink = h.default.attach(
                              this._canvas,
                              e,
                            ));
                        },
                      },
                      {
                        key: "_doProcessing",
                        value: function () {
                          if (
                            (this._didSeek && (this._didSeek = !1),
                            (this._nextProcessingTimer = null),
                            this._isProcessing(),
                            this._depth > 0)
                          )
                            throw Error(
                              "REENTRANCY FAIL: doProcessing recursing unexpectedly",
                            );
                          var e = 0;
                          do {
                            if (
                              ((this._needProcessing = !1),
                              this._depth++,
                              this._doProcessingLoop(),
                              this._depth--,
                              this._needProcessing && this._isProcessing())
                            )
                              throw Error(
                                "REENTRANCY FAIL: waiting on input or codec but asked to keep processing",
                              );
                            ++e > 500 &&
                              (this._log(
                                "stuck in processing loop; breaking with timer",
                              ),
                              (this._needProcessing = 0),
                              this._pingProcessing(0));
                          } while (this._needProcessing);
                        },
                      },
                      {
                        key: "_doProcessingLoop",
                        value: function () {
                          if (this._actionQueue.length)
                            this._actionQueue.shift()();
                          else if (this._state == A) this._doProcessInitial();
                          else if (this._state == E)
                            this._doProcessSeekingEnd();
                          else if (this._state == T) this._doProcessLoaded();
                          else if (this._state == V) this._doProcessPreload();
                          else if (this._state == C) this._doProcessReady();
                          else if (this._state == F) this._doProcessSeeking();
                          else if (this._state == D) this._doProcessPlay();
                          else {
                            if (this._state != P)
                              throw Error(
                                "Unexpected OGVPlayer state " + this._state,
                              );
                            this._doProcessError();
                          }
                        },
                      },
                      {
                        key: "_doProcessInitial",
                        value: function () {
                          var e = this;
                          if (this._codec.loadedMetadata) {
                            if (!this._codec.hasVideo && !this._codec.hasAudio)
                              throw Error(
                                "No audio or video found, something is wrong",
                              );
                            this._codec.hasAudio &&
                              (this._audioInfo = this._codec.audioFormat),
                              this._codec.hasVideo &&
                                ((this._videoInfo = this._codec.videoFormat),
                                this._setupVideo()),
                              isNaN(this._codec.duration) ||
                                (this._duration = this._codec.duration),
                              null === this._duration &&
                              this._stream.seekable &&
                              "video/ogg" == this._detectedType
                                ? ((this._state = E),
                                  (this._lastSeenTimestamp = -1),
                                  this._codec.flush(function () {
                                    e._seekStream(
                                      Math.max(0, e._stream.length - 131072),
                                    );
                                  }))
                                : ((this._state = T), this._pingProcessing());
                          } else
                            this._codec.process(function (t) {
                              if (t) e._pingProcessing();
                              else {
                                if (e._streamEnded)
                                  throw Error(
                                    "end of file before headers found",
                                  );
                                e._log("reading more cause we are out of data"),
                                  e._readBytesAndWait();
                              }
                            });
                        },
                      },
                      {
                        key: "_doProcessSeekingEnd",
                        value: function () {
                          var e = this;
                          this._codec.frameReady
                            ? (this._log(
                                "saw frame with " + this._codec.frameTimestamp,
                              ),
                              (this._lastSeenTimestamp = Math.max(
                                this._lastSeenTimestamp,
                                this._codec.frameTimestamp,
                              )),
                              this._codec.discardFrame(function () {
                                e._pingProcessing();
                              }))
                            : this._codec.audioReady
                              ? (this._log(
                                  "saw audio with " +
                                    this._codec.audioTimestamp,
                                ),
                                (this._lastSeenTimestamp = Math.max(
                                  this._lastSeenTimestamp,
                                  this._codec.audioTimestamp,
                                )),
                                this._codec.discardAudio(function () {
                                  e._pingProcessing();
                                }))
                              : this._codec.process(function (t) {
                                  t
                                    ? e._pingProcessing()
                                    : e._stream.eof
                                      ? (e._log(
                                          "seek-duration: we are at the end: " +
                                            e._lastSeenTimestamp,
                                        ),
                                        e._lastSeenTimestamp > 0 &&
                                          (e._duration = e._lastSeenTimestamp),
                                        (e._state = T),
                                        e._codec.flush(function () {
                                          (e._streamEnded = !1),
                                            (e._dataEnded = !1),
                                            e._seekStream(0);
                                        }))
                                      : e._readBytesAndWait();
                                });
                        },
                      },
                      {
                        key: "_doProcessLoaded",
                        value: function () {
                          (this._state = V),
                            this._fireEventAsync("loadedmetadata"),
                            this._fireEventAsync("durationchange"),
                            this._codec.hasVideo &&
                              this._fireEventAsync("resize"),
                            this._pingProcessing(0);
                        },
                      },
                      {
                        key: "_doProcessPreload",
                        value: function () {
                          var e = this;
                          (!this._codec.frameReady && this._codec.hasVideo) ||
                          (!this._codec.audioReady && this._codec.hasAudio)
                            ? this._codec.process(function (t) {
                                t
                                  ? e._pingProcessing()
                                  : e._streamEnded
                                    ? (e._ended = !0)
                                    : e._readBytesAndWait();
                              })
                            : ((this._state = C),
                              this._fireEventAsync("loadeddata"),
                              this._pingProcessing());
                        },
                      },
                      {
                        key: "_doProcessReady",
                        value: function () {
                          var e = this;
                          if (
                            (this._log(
                              "initial seek to " + this._initialSeekTime,
                            ),
                            this._initialSeekTime > 0)
                          ) {
                            var t = this._initialSeekTime;
                            (this._initialSeekTime = 0),
                              this._log("initial seek to " + t),
                              this._doSeek(t);
                          } else if (this._paused)
                            this._log("paused while in ready");
                          else {
                            var n = function () {
                              e._log("finishStartPlaying"),
                                (e._state = D),
                                (e._lastFrameTimestamp = i()),
                                e._codec.hasAudio && e._audioFeeder
                                  ? (e._prebufferingAudio = !0)
                                  : e._startPlayback(),
                                e._pingProcessing(0),
                                e._fireEventAsync("play"),
                                e._fireEventAsync("playing");
                            };
                            !this._codec.hasAudio ||
                            this._audioFeeder ||
                            this._muted
                              ? n()
                              : (this._initAudioFeeder(),
                                this._audioFeeder.waitUntilReady(n));
                          }
                        },
                      },
                      {
                        key: "_doProcessSeeking",
                        value: function () {
                          if (this._seekState == S)
                            throw Error(
                              "seeking in invalid state (not seeking?)",
                            );
                          if (this._seekState == L)
                            this._doProcessBisectionSeek();
                          else if (this._seekState == I)
                            this._doProcessBisectionSeek();
                          else {
                            if (this._seekState != O)
                              throw Error(
                                "Invalid seek state " + this._seekState,
                              );
                            this._doProcessLinearSeeking();
                          }
                        },
                      },
                      {
                        key: "_doProcessPlay",
                        value: function () {
                          var e = this,
                            t = this._codec;
                          if (this._paused)
                            this._log("paused during playback; stopping loop");
                          else if (
                            (!t.hasAudio ||
                              t.audioReady ||
                              this._pendingAudio ||
                              this._dataEnded) &&
                            (!t.hasVideo ||
                              t.frameReady ||
                              this._pendingFrame ||
                              this._decodedFrames.length ||
                              this._dataEnded)
                          ) {
                            var n,
                              r,
                              i,
                              a = null,
                              s = 0,
                              o = !1,
                              u = 0;
                            if (
                              (t.hasAudio && this._audioFeeder
                                ? ((a = this._audioFeeder.getPlaybackState()),
                                  (s = this._getPlaybackTime(a)),
                                  (o =
                                    this._dataEnded &&
                                    0 == this._audioFeeder.durationBuffered),
                                  this._prebufferingAudio &&
                                    ((this._audioFeeder.durationBuffered >=
                                      2 * this._audioFeeder.bufferThreshold &&
                                      (!t.hasVideo ||
                                        this._decodedFrames.length >=
                                          this._framePipelineDepth)) ||
                                      this._dataEnded) &&
                                    (this._log(
                                      "prebuffering audio done; buffered to " +
                                        this._audioFeeder.durationBuffered,
                                    ),
                                    this._startPlayback(s),
                                    (this._prebufferingAudio = !1)),
                                  a.dropped != this._droppedAudio &&
                                    this._log(
                                      "dropped " +
                                        (a.dropped - this._droppedAudio),
                                    ),
                                  a.delayed != this._delayedAudio &&
                                    this._log(
                                      "delayed " +
                                        (a.delayed - this._delayedAudio),
                                    ),
                                  (this._droppedAudio = a.dropped),
                                  (this._delayedAudio = a.delayed),
                                  (n =
                                    this._audioFeeder.durationBuffered <=
                                    2 * this._audioFeeder.bufferThreshold) &&
                                    (this._codec.audioReady
                                      ? this._pendingAudio >=
                                          this._audioPipelineDepth &&
                                        (this._log(
                                          "audio decode disabled: " +
                                            this._pendingAudio +
                                            " packets in flight",
                                        ),
                                        (n = !1))
                                      : (n = !1)))
                                : ((s = this._getPlaybackTime()),
                                  (n =
                                    this._codec.audioReady &&
                                    this._audioEndTimestamp < s)),
                              this._codec.hasVideo)
                            ) {
                              (r = this._decodedFrames.length > 0),
                                (i =
                                  this._pendingFrame +
                                    this._decodedFrames.length <
                                    this._framePipelineDepth +
                                      this._frameParallelism &&
                                  this._codec.frameReady),
                                r &&
                                  ((u =
                                    1e3 *
                                    (this._decodedFrames[0].frameEndTimestamp -
                                      s)),
                                  (this._actualPerFrameTime =
                                    this._targetPerFrameTime - u));
                              var c = this._targetPerFrameTime;
                              if (this._prebufferingAudio)
                                i &&
                                  this._log(
                                    "decoding a frame during prebuffering",
                                  ),
                                  (r = !1);
                              else if (r && this._dataEnded && o)
                                this._log(
                                  "audio timeline ended? ready to draw frame",
                                );
                              else if (r && -u >= c) {
                                for (
                                  var l = -1, d = 0;
                                  d < this._decodedFrames.length - 1;
                                  d++
                                )
                                  this._decodedFrames[d].frameEndTimestamp <
                                    s && (l = d - 1);
                                if (l >= 0)
                                  for (; l-- >= 0; ) {
                                    this._lateFrames++;
                                    var h = this._decodedFrames.shift();
                                    this._log(
                                      "skipping already-decoded late frame at " +
                                        h.frameEndTimestamp,
                                    ),
                                      (u = 1e3 * (h.frameEndTimestamp - s)),
                                      (this._frameEndTimestamp =
                                        h.frameEndTimestamp),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - u),
                                      this._framesProcessed++,
                                      (h.dropped = !0),
                                      this._doFrameComplete(h);
                                  }
                                var f = this._codec.nextKeyframeTimestamp,
                                  p =
                                    f -
                                    (this._targetPerFrameTime / 1e3) *
                                      (this._framePipelineDepth +
                                        this._pendingFrame);
                                if (
                                  f >= 0 &&
                                  f != this._codec.frameTimestamp &&
                                  s >= p
                                ) {
                                  this._log(
                                    "skipping late frame at " +
                                      this._decodedFrames[0].frameEndTimestamp +
                                      " vs " +
                                      s +
                                      ", expect to see keyframe at " +
                                      f,
                                  );
                                  for (
                                    var _ = 0;
                                    _ < this._decodedFrames.length;
                                    _++
                                  ) {
                                    var m = this._decodedFrames[_];
                                    this._lateFrames++,
                                      this._framesProcessed++,
                                      (this._frameEndTimestamp =
                                        m.frameEndTimestamp),
                                      (u = 1e3 * (m.frameEndTimestamp - s)),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - u),
                                      (m.dropped = !0),
                                      this._doFrameComplete(m);
                                  }
                                  this._decodedFrames = [];
                                  for (
                                    var g = 0;
                                    g < this._pendingFrames.length;
                                    g++
                                  ) {
                                    var b = this._pendingFrames[g];
                                    this._lateFrames++,
                                      this._framesProcessed++,
                                      (this._frameEndTimestamp =
                                        b.frameEndTimestamp),
                                      (u = 1e3 * (b.frameEndTimestamp - s)),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - u),
                                      (b.dropped = !0),
                                      this._doFrameComplete(b);
                                  }
                                  for (
                                    this._pendingFrames = [],
                                      this._pendingFrame = 0;
                                    this._codec.frameReady &&
                                    this._codec.frameTimestamp < f;

                                  ) {
                                    var v = {
                                      frameEndTimestamp:
                                        this._codec.frameTimestamp,
                                      dropped: !0,
                                    };
                                    (u = 1e3 * (v.frameEndTimestamp - s)),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - u),
                                      this._lateFrames++,
                                      this._codec.discardFrame(function () {}),
                                      this._framesProcessed++,
                                      this._doFrameComplete(v);
                                  }
                                  return void (
                                    this._isProcessing() ||
                                    this._pingProcessing()
                                  );
                                }
                              } else (r && u <= 4) || (r = !1);
                            }
                            if (i) {
                              this._log(
                                "play loop: ready to decode frame; thread depth: " +
                                  this._pendingFrame +
                                  ", have buffered: " +
                                  this._decodedFrames.length,
                              ),
                                0 == this._videoInfo.fps &&
                                  this._codec.frameTimestamp -
                                    this._frameEndTimestamp >
                                    0 &&
                                  (this._targetPerFrameTime =
                                    1e3 *
                                    (this._codec.frameTimestamp -
                                      this._frameEndTimestamp)),
                                (this._totalFrameTime +=
                                  this._targetPerFrameTime),
                                this._totalFrameCount++;
                              var y = (this._frameEndTimestamp =
                                this._codec.frameTimestamp);
                              this._pendingFrame++,
                                this._pendingFrames.push({
                                  frameEndTimestamp: y,
                                });
                              var w = this._pendingFrames,
                                k = !1,
                                x = this._time(function () {
                                  e._codec.decodeFrame(function (t) {
                                    w === e._pendingFrames
                                      ? (e._log(
                                          "play loop callback: decoded frame",
                                        ),
                                        e._pendingFrame--,
                                        e._pendingFrames.shift(),
                                        t
                                          ? e._decodedFrames.push({
                                              yCbCrBuffer: e._codec.frameBuffer,
                                              videoCpuTime:
                                                e._codec.videoCpuTime,
                                              frameEndTimestamp: y,
                                            })
                                          : e._log(
                                              "Bad video packet or something",
                                            ),
                                        e._codec.process(function () {
                                          e._isProcessing() ||
                                            e._pingProcessing(k ? void 0 : 0);
                                        }))
                                      : e._log(
                                          "play loop callback after flush, discarding",
                                        );
                                  });
                                });
                              this._pendingFrame &&
                                ((k = !0),
                                (this._proxyTime += x),
                                this._pingProcessing(),
                                this._dataEnded && this._codec.sync());
                            } else if (n) {
                              this._log(
                                "play loop: ready for audio; depth: " +
                                  this._pendingAudio,
                              ),
                                this._pendingAudio++;
                              var R = this._codec.audioTimestamp,
                                A = this._time(function () {
                                  e._codec.decodeAudio(function (t) {
                                    if (
                                      (e._pendingAudio--,
                                      e._log(
                                        "play loop callback: decoded audio",
                                      ),
                                      (e._audioEndTimestamp = R),
                                      t)
                                    ) {
                                      var n = e._codec.audioBuffer;
                                      if (
                                        n &&
                                        ((e._bufferTime += e._time(function () {
                                          e._audioFeeder &&
                                            e._audioFeeder.bufferData(n);
                                        })),
                                        !e._codec.hasVideo)
                                      ) {
                                        e._framesProcessed++;
                                        var r = {
                                          frameEndTimestamp:
                                            e._audioEndTimestamp,
                                        };
                                        e._doFrameComplete(r);
                                      }
                                    }
                                    e._isProcessing() || e._pingProcessing();
                                  });
                                });
                              this._pendingAudio &&
                                ((this._proxyTime += A),
                                this._codec.audioReady
                                  ? this._pingProcessing()
                                  : this._doProcessPlayDemux());
                            } else if (r) {
                              this._log("play loop: ready to draw frame"),
                                this._nextFrameTimer &&
                                  (clearTimeout(this._nextFrameTimer),
                                  (this._nextFrameTimer = null)),
                                this._thumbnail &&
                                  (this.removeChild(this._thumbnail),
                                  (this._thumbnail = null));
                              var E = this._decodedFrames.shift();
                              (this._currentVideoCpuTime = E.videoCpuTime),
                                (this._drawingTime += this._time(function () {
                                  e._drawFrame(E.yCbCrBuffer);
                                })),
                                this._framesProcessed++,
                                this._doFrameComplete(E),
                                this._pingProcessing();
                            } else if (
                              !this._decodedFrames.length ||
                              this._nextFrameTimer ||
                              this._prebufferingAudio
                            )
                              if (
                                this._dataEnded &&
                                !(
                                  this._pendingAudio ||
                                  this._pendingFrame ||
                                  this._decodedFrames.length
                                )
                              ) {
                                this._log(
                                  "play loop: playback reached end of data " +
                                    [
                                      this._pendingAudio,
                                      this._pendingFrame,
                                      this._decodedFrames.length,
                                    ],
                                );
                                var T = 0;
                                this._codec.hasAudio &&
                                  this._audioFeeder &&
                                  (T =
                                    1e3 * this._audioFeeder.durationBuffered),
                                  T > 0
                                    ? (this._log(
                                        "play loop: ending pending " +
                                          T +
                                          " ms",
                                      ),
                                      this._pingProcessing(Math.max(0, T)))
                                    : (this._log(
                                        "play loop: ENDING NOW: playback time " +
                                          this._getPlaybackTime() +
                                          "; frameEndTimestamp: " +
                                          this._frameEndTimestamp,
                                      ),
                                      this._stopPlayback(),
                                      (this._prebufferingAudio = !1),
                                      (this._initialPlaybackOffset = Math.max(
                                        this._audioEndTimestamp,
                                        this._frameEndTimestamp,
                                      )),
                                      (this._ended = !0),
                                      (this._paused = !0),
                                      this._fireEventAsync("pause"),
                                      this._fireEventAsync("ended"));
                              } else
                                this._prebufferingAudio &&
                                ((t.hasVideo && !t.frameReady) ||
                                  (t.hasAudio && !t.audioReady))
                                  ? (this._log(
                                      "play loop: prebuffering demuxing",
                                    ),
                                    this._doProcessPlayDemux())
                                  : this._log(
                                      "play loop: waiting on async/timers",
                                    );
                            else {
                              var V = u;
                              this._log(
                                "play loop: setting a timer for drawing " + V,
                              ),
                                (this._nextFrameTimer = setTimeout(function () {
                                  (e._nextFrameTimer = null),
                                    e._pingProcessing();
                                }, V));
                            }
                          } else
                            this._log("play loop: demuxing"),
                              this._doProcessPlayDemux();
                        },
                      },
                      {
                        key: "_doProcessPlayDemux",
                        value: function () {
                          var e = this,
                            t = this._codec.frameReady,
                            n = this._codec.audioReady;
                          this._codec.process(function (r) {
                            (e._codec.frameReady && !t) ||
                            (e._codec.audioReady && !n)
                              ? (e._log("demuxer has packets"),
                                e._pingProcessing())
                              : r
                                ? (e._log(
                                    "demuxer processing to find more packets",
                                  ),
                                  e._pingProcessing())
                                : (e._log("demuxer ran out of data"),
                                  e._streamEnded
                                    ? (e._log(
                                        "demuxer reached end of data stream",
                                      ),
                                      (e._dataEnded = !0),
                                      e._pingProcessing())
                                    : (e._log("demuxer loading more data"),
                                      e._readBytesAndWait()));
                          });
                        },
                      },
                      { key: "_doProcessError", value: function () {} },
                      {
                        key: "_isProcessing",
                        value: function () {
                          return (
                            (this._stream &&
                              (this._stream.buffering ||
                                this._stream.seeking)) ||
                            (this._codec && this._codec.processing)
                          );
                        },
                      },
                      {
                        key: "_readBytesAndWait",
                        value: function () {
                          var e = this;
                          this._stream.buffering || this._stream.seeking
                            ? this._log("readBytesAndWait during i/o")
                            : this._stream
                                .read(32768)
                                .then(function (t) {
                                  e._log("got input " + [t.byteLength]),
                                    t.byteLength &&
                                      e._actionQueue.push(function () {
                                        e._codec.receiveInput(t, function () {
                                          e._pingProcessing();
                                        });
                                      }),
                                    e._stream.eof &&
                                      (e._log("stream is at end!"),
                                      (e._streamEnded = !0)),
                                    e._isProcessing() || e._pingProcessing();
                                })
                                .catch(function (t) {
                                  e._onStreamError(t);
                                });
                        },
                      },
                      {
                        key: "_pingProcessing",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : -1;
                          this._stream && this._stream.waiting
                            ? this._log("waiting on input")
                            : (this._nextProcessingTimer &&
                                (this._log("canceling old processing timer"),
                                clearTimeout(this._nextProcessingTimer),
                                (this._nextProcessingTimer = null)),
                              t > -1 / 256
                                ? (this._nextProcessingTimer = setTimeout(
                                    function () {
                                      e._pingProcessing();
                                    },
                                    t,
                                  ))
                                : this._depth
                                  ? (this._needProcessing = !0)
                                  : this._doProcessing());
                        },
                      },
                      {
                        key: "_startProcessingVideo",
                        value: function (e) {
                          var t = this;
                          if (!this._started && !this._codec) {
                            (this._framesProcessed = 0),
                              (this._bufferTime = 0),
                              (this._drawingTime = 0),
                              (this._proxyTime = 0),
                              (this._started = !0),
                              (this._ended = !1);
                            var n = {
                              base: this._options.base,
                              worker: this._enableWorker,
                              threading: this._enableThreading,
                              simd: this._enableSIMD,
                            };
                            this._detectedType && (n.type = this._detectedType),
                              (this._codec = new w.default(n)),
                              (this._lastVideoCpuTime = 0),
                              (this._lastAudioCpuTime = 0),
                              (this._lastDemuxerCpuTime = 0),
                              (this._lastBufferTime = 0),
                              (this._lastDrawingTime = 0),
                              (this._lastProxyTime = 0),
                              (this._lastFrameVideoCpuTime = 0),
                              (this._lastFrameAudioCpuTime = 0),
                              (this._lastFrameDemuxerCpuTime = 0),
                              (this._lastFrameBufferTime = 0),
                              (this._lastFrameProxyTime = 0),
                              (this._lastFrameDrawingTime = 0),
                              (this._currentVideoCpuTime = 0),
                              (this._codec.onseek = function (e) {
                                (t._didSeek = !0),
                                  t._stream && t._seekStream(e);
                              }),
                              this._codec.init(function () {
                                t._codec.receiveInput(e, function () {
                                  t._readBytesAndWait();
                                });
                              });
                          }
                        },
                      },
                      {
                        key: "_loadCodec",
                        value: function (e) {
                          var t = this;
                          this._stream.read(1024).then(function (n) {
                            var r = new Uint8Array(n);
                            r.length > 4 &&
                            79 == r[0] &&
                            103 == r[1] &&
                            103 == r[2] &&
                            83 == r[3]
                              ? (t._detectedType = "video/ogg")
                              : r.length > 4 &&
                                  26 == r[0] &&
                                  69 == r[1] &&
                                  223 == r[2] &&
                                  163 == r[3]
                                ? (t._detectedType = "video/webm")
                                : (t._detectedType = "video/ogg"),
                              e(n);
                          });
                        },
                      },
                      {
                        key: "_prepForLoad",
                        value: function (e) {
                          var t = this;
                          this._stopVideo(),
                            (this._currentSrc = ""),
                            (this._loading = !0),
                            this._actionQueue.push(function () {
                              e && "none" === t.preload
                                ? (t._loading = !1)
                                : (t._options.stream
                                    ? (t._stream = t._options.stream)
                                    : (t._stream = new f.default({
                                        url: t.src,
                                        cacheSize: 0x1000000,
                                        progressive: !1,
                                      })),
                                  t._stream
                                    .load()
                                    .then(function () {
                                      (t._loading = !1),
                                        (t._currentSrc = t.src),
                                        (t._byteLength = t._stream.seekable
                                          ? t._stream.length
                                          : 0);
                                      var e =
                                        t._stream.headers["x-content-duration"];
                                      "string" == typeof e &&
                                        (t._duration = parseFloat(e)),
                                        t._loadCodec(function (e) {
                                          t._startProcessingVideo(e);
                                        });
                                    })
                                    .catch(function (e) {
                                      t._onStreamError(e);
                                    }));
                            }),
                            this._pingProcessing(0);
                        },
                      },
                      {
                        key: "load",
                        value: function () {
                          this._prepForLoad();
                        },
                      },
                      {
                        key: "canPlayType",
                        value: function (e) {
                          var t = new v.default(e);
                          function n(e) {
                            if (t.codecs) {
                              var n = 0,
                                r = 0;
                              return (
                                t.codecs.forEach(function (t) {
                                  e.indexOf(t) >= 0 ? n++ : r++;
                                }),
                                0 === n || r > 0 ? "" : "probably"
                              );
                            }
                            return "maybe";
                          }
                          return "ogg" !== t.minor ||
                            ("audio" !== t.major &&
                              "video" !== t.major &&
                              "application" !== t.major)
                            ? "webm" !== t.minor ||
                              ("audio" !== t.major && "video" !== t.major)
                              ? ""
                              : n(["vorbis", "opus", "vp8", "vp9"])
                            : n(["vorbis", "opus", "theora"]);
                        },
                      },
                      {
                        key: "play",
                        value: function () {
                          this._muted ||
                            this._options.audioContext ||
                            r.initSharedAudioContext(),
                            this._paused &&
                              ((this._startedPlaybackInDocument =
                                document.body.contains(this)),
                              (this._paused = !1),
                              this._state == F ||
                                (this._started &&
                                this._codec &&
                                this._codec.loadedMetadata
                                  ? (this._ended &&
                                    this._stream &&
                                    this._byteLength
                                      ? (this._log(
                                          ".play() starting over after end",
                                        ),
                                        this._seek(0))
                                      : this._log(
                                          ".play() while already started",
                                        ),
                                    (this._state = C),
                                    this._isProcessing() ||
                                      this._pingProcessing())
                                  : this._loading
                                    ? this._log(".play() while loading")
                                    : (this._log(".play() before started"),
                                      this._stream || this.load())));
                        },
                      },
                      {
                        key: "getPlaybackStats",
                        value: function () {
                          return {
                            targetPerFrameTime: this._targetPerFrameTime,
                            framesProcessed: this._framesProcessed,
                            videoBytes: this._codec
                              ? this._codec.videoBytes
                              : 0,
                            audioBytes: this._codec
                              ? this._codec.audioBytes
                              : 0,
                            playTime: this._playTime,
                            demuxingTime: this._codec
                              ? this._codec.demuxerCpuTime -
                                this._lastDemuxerCpuTime
                              : 0,
                            videoDecodingTime: this._codec
                              ? this._codec.videoCpuTime -
                                this._lastVideoCpuTime
                              : 0,
                            audioDecodingTime: this._codec
                              ? this._codec.audioCpuTime -
                                this._lastAudioCpuTime
                              : 0,
                            bufferTime: this._bufferTime - this._lastBufferTime,
                            drawingTime:
                              this._drawingTime - this._lastDrawingTime,
                            proxyTime: this._proxyTime - this._lastProxyTime,
                            droppedAudio: this._droppedAudio,
                            delayedAudio: this._delayedAudio,
                            jitter: this._totalJitter / this._framesProcessed,
                            lateFrames: this._lateFrames,
                          };
                        },
                      },
                      {
                        key: "resetPlaybackStats",
                        value: function () {
                          (this._framesProcessed = 0),
                            (this._playTime = 0),
                            this._codec &&
                              ((this._lastDemuxerCpuTime =
                                this._codec.demuxerCpuTime),
                              (this._lastVideoCpuTime =
                                this._codec.videoCpuTime),
                              (this._lastAudioCpuTime =
                                this._codec.audioCpuTime),
                              (this._codec.videoBytes = 0),
                              (this._codec.audioBytes = 0)),
                            (this._lastBufferTime = this._bufferTime),
                            (this._lastDrawingTime = this._drawingTime),
                            (this._lastProxyTime = this._proxyTime),
                            (this._totalJitter = 0),
                            (this._totalFrameTime = 0),
                            (this._totalFrameCount = 0);
                        },
                      },
                      {
                        key: "getVideoFrameSink",
                        value: function () {
                          return this._frameSink;
                        },
                      },
                      {
                        key: "getCanvas",
                        value: function () {
                          return this._canvas;
                        },
                      },
                      {
                        key: "getVideo",
                        value: function () {
                          return null;
                        },
                      },
                      {
                        key: "pause",
                        value: function () {
                          this._paused ||
                            (this._nextProcessingTimer &&
                              (clearTimeout(this._nextProcessingTimer),
                              (this._nextProcessingTimer = null)),
                            this._stopPlayback(),
                            (this._prebufferingAudio = !1),
                            (this._paused = !0),
                            this._fireEvent("pause"));
                        },
                      },
                      {
                        key: "stop",
                        value: function () {
                          this._stopVideo(), (this._paused = !0);
                        },
                      },
                      {
                        key: "fastSeek",
                        value: function (e) {
                          this._seek(+e, M);
                        },
                      },
                    ],
                    [
                      {
                        key: "initSharedAudioContext",
                        value: function () {
                          var e = document.createElement("audio");
                          (e.src = k.default),
                            e.play(),
                            p.default.initSharedAudioContext();
                        },
                      },
                    ],
                  ),
                  r
                );
              })(B);
              (0, g.default)(U, R),
                (U.instanceCount = 0),
                (U.styleManager = new (function () {
                  var e = document.createElement("style");
                  (e.type = "text/css"),
                    (e.textContent =
                      "ogvjs { display: inline-block; position: relative; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); "),
                    document.head.appendChild(e);
                  var t = e.sheet;
                  this.appendRule = function (e, n) {
                    var r = [];
                    for (var i in n)
                      n.hasOwnProperty(i) && r.push(i + ":" + n[i]);
                    var a = e + "{" + r.join(";") + "}";
                    t.insertRule(a, t.cssRules.length - 1);
                  };
                })()),
                (t.default = U);
            },
            580: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913));
              t.default = function (e) {
                function t(n, r, a) {
                  var s = this;
                  for (var o in ((0, i.default)(this, t),
                  (a = a || {}),
                  (this.worker = n),
                  (this.transferables = (function () {
                    var e = new ArrayBuffer(1024),
                      t = new Uint8Array(e);
                    try {
                      return (
                        n.postMessage({ action: "transferTest", bytes: t }, [
                          e,
                        ]),
                        !e.byteLength
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  e))
                    e.hasOwnProperty(o) && (this[o] = e[o]);
                  (this.processingQueue = 0),
                    Object.defineProperty(this, "processing", {
                      get: function () {
                        return this.processingQueue > 0;
                      },
                    }),
                    (this.messageCount = 0),
                    (this.pendingCallbacks = {}),
                    this.worker.addEventListener("message", function (e) {
                      s.handleMessage(e);
                    }),
                    this.proxy("construct", [r, a], function () {});
                }
                return (
                  (0, a.default)(t, [
                    {
                      key: "proxy",
                      value: function (e, t, n) {
                        var r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : [];
                        if (!this.worker)
                          throw (
                            'Tried to call "' +
                            e +
                            '" method on closed proxy object'
                          );
                        var i = "callback-" + ++this.messageCount + "-" + e;
                        n && (this.pendingCallbacks[i] = n);
                        var a = { action: e, callbackId: i, args: t || [] };
                        this.processingQueue++,
                          this.transferables
                            ? this.worker.postMessage(a, r)
                            : this.worker.postMessage(a);
                      },
                    },
                    {
                      key: "terminate",
                      value: function () {
                        this.worker &&
                          (this.worker.terminate(),
                          (this.worker = null),
                          (this.processingQueue = 0),
                          (this.pendingCallbacks = {}));
                      },
                    },
                    {
                      key: "handleMessage",
                      value: function (e) {
                        if (
                          (this.processingQueue--, "callback" === e.data.action)
                        ) {
                          var t = e.data,
                            n = t.callbackId,
                            r = t.args,
                            i = this.pendingCallbacks[n];
                          if (t.props)
                            for (var a in t.props)
                              t.props.hasOwnProperty(a) &&
                                (this[a] = t.props[a]);
                          i &&
                            (delete this.pendingCallbacks[n], i.apply(this, r));
                        }
                      },
                    },
                  ]),
                  t
                );
              };
            },
            168: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913));
              t.default = (function () {
                function e(t) {
                  (0, i.default)(this, e),
                    (this._ranges = t),
                    (this.length = t.length);
                }
                return (
                  (0, a.default)(e, [
                    {
                      key: "start",
                      value: function (e) {
                        if (e < 0 || e > this.length || e !== (0 | e))
                          throw RangeError("Invalid index");
                        return this._ranges[e][0];
                      },
                    },
                    {
                      key: "end",
                      value: function (e) {
                        if (e < 0 || e > this.length || e !== (0 | e))
                          throw RangeError("Invalid index");
                        return this._ranges[e][1];
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            625: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913)),
                s = r(n(964));
              function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r;
              }
              t.default = (function () {
                function e(t) {
                  return (
                    (0, i.default)(this, e),
                    (this.options = t || {}),
                    (this.demuxer = null),
                    (this.videoDecoder = null),
                    (this.audioDecoder = null),
                    (this.flushIter = 0),
                    (this.loadedMetadata = !1),
                    (this.processing = !1),
                    Object.defineProperties(this, {
                      duration: {
                        get: function () {
                          return this.loadedMetadata
                            ? this.demuxer.duration
                            : NaN;
                        },
                      },
                      hasAudio: {
                        get: function () {
                          return this.loadedMetadata && !!this.audioDecoder;
                        },
                      },
                      audioReady: {
                        get: function () {
                          return this.hasAudio && this.demuxer.audioReady;
                        },
                      },
                      audioTimestamp: {
                        get: function () {
                          return this.demuxer.audioTimestamp;
                        },
                      },
                      audioFormat: {
                        get: function () {
                          return this.hasAudio
                            ? this.audioDecoder.audioFormat
                            : null;
                        },
                      },
                      audioBuffer: {
                        get: function () {
                          return this.hasAudio
                            ? this.audioDecoder.audioBuffer
                            : null;
                        },
                      },
                      hasVideo: {
                        get: function () {
                          return this.loadedMetadata && !!this.videoDecoder;
                        },
                      },
                      frameReady: {
                        get: function () {
                          return this.hasVideo && this.demuxer.frameReady;
                        },
                      },
                      frameTimestamp: {
                        get: function () {
                          return this.demuxer.frameTimestamp;
                        },
                      },
                      keyframeTimestamp: {
                        get: function () {
                          return this.demuxer.keyframeTimestamp;
                        },
                      },
                      nextKeyframeTimestamp: {
                        get: function () {
                          return this.demuxer.nextKeyframeTimestamp;
                        },
                      },
                      videoFormat: {
                        get: function () {
                          return this.hasVideo
                            ? this.videoDecoder.videoFormat
                            : null;
                        },
                      },
                      frameBuffer: {
                        get: function () {
                          return this.hasVideo
                            ? this.videoDecoder.frameBuffer
                            : null;
                        },
                      },
                      seekable: {
                        get: function () {
                          return this.demuxer.seekable;
                        },
                      },
                      demuxerCpuTime: {
                        get: function () {
                          return this.demuxer ? this.demuxer.cpuTime : 0;
                        },
                      },
                      audioCpuTime: {
                        get: function () {
                          return this.audioDecoder
                            ? this.audioDecoder.cpuTime
                            : 0;
                        },
                      },
                      videoCpuTime: {
                        get: function () {
                          return this.videoDecoder
                            ? this.videoDecoder.cpuTime
                            : 0;
                        },
                      },
                    }),
                    (this.loadedDemuxerMetadata = !1),
                    (this.loadedAudioMetadata = !1),
                    (this.loadedVideoMetadata = !1),
                    (this.loadedAllMetadata = !1),
                    (this.onseek = null),
                    (this.videoBytes = 0),
                    (this.audioBytes = 0),
                    this
                  );
                }
                return (
                  (0, a.default)(e, [
                    {
                      key: "flushSafe",
                      value: function (e) {
                        var t = this,
                          n = this.flushIter;
                        return function (r) {
                          t.flushIter <= n && e(r);
                        };
                      },
                    },
                    {
                      key: "init",
                      value: function (e) {
                        var t,
                          n = this;
                        (this.processing = !0),
                          (t =
                            "video/webm" === this.options.type ||
                            "audio/webm" === this.options.type
                              ? "OGVDemuxerWebMW"
                              : "OGVDemuxerOggW"),
                          s.default.loadClass(t, function (t) {
                            t().then(function (t) {
                              (n.demuxer = t),
                                (t.onseek = function (e) {
                                  n.onseek && n.onseek(e);
                                }),
                                t.init(function () {
                                  (n.processing = !1), e();
                                });
                            });
                          });
                      },
                    },
                    {
                      key: "close",
                      value: function () {
                        this.demuxer &&
                          (this.demuxer.close(), (this.demuxer = null)),
                          this.videoDecoder &&
                            (this.videoDecoder.close(),
                            (this.videoDecoder = null)),
                          this.audioDecoder &&
                            (this.audioDecoder.close(),
                            (this.audioDecoder = null));
                      },
                    },
                    {
                      key: "receiveInput",
                      value: function (e, t) {
                        this.demuxer.receiveInput(e, t);
                      },
                    },
                    {
                      key: "process",
                      value: function (e) {
                        var t = this;
                        if (this.processing)
                          throw Error(
                            "reentrancy fail on OGVWrapperCodec.process",
                          );
                        this.processing = !0;
                        var n = function (n) {
                            (t.processing = !1), e(n);
                          },
                          r = function () {
                            t.demuxer.process(n);
                          };
                        this.demuxer.loadedMetadata &&
                        !this.loadedDemuxerMetadata
                          ? this.loadAudioCodec(function () {
                              t.loadVideoCodec(function () {
                                (t.loadedDemuxerMetadata = !0),
                                  (t.loadedAudioMetadata = !t.audioDecoder),
                                  (t.loadedVideoMetadata = !t.videoDecoder),
                                  (t.loadedAllMetadata =
                                    t.loadedAudioMetadata &&
                                    t.loadedVideoMetadata),
                                  n(!0);
                              });
                            })
                          : this.loadedDemuxerMetadata &&
                              !this.loadedAudioMetadata
                            ? this.audioDecoder.loadedMetadata
                              ? ((this.loadedAudioMetadata = !0),
                                (this.loadedAllMetadata =
                                  this.loadedAudioMetadata &&
                                  this.loadedVideoMetadata),
                                n(!0))
                              : this.demuxer.audioReady
                                ? this.demuxer.dequeueAudioPacket(
                                    function (e, r) {
                                      (t.audioBytes += e.byteLength),
                                        t.audioDecoder.processHeader(
                                          e,
                                          function (e) {
                                            n(!0);
                                          },
                                        );
                                    },
                                  )
                                : r()
                            : this.loadedAudioMetadata &&
                                !this.loadedVideoMetadata
                              ? this.videoDecoder.loadedMetadata
                                ? ((this.loadedVideoMetadata = !0),
                                  (this.loadedAllMetadata =
                                    this.loadedAudioMetadata &&
                                    this.loadedVideoMetadata),
                                  n(!0))
                                : this.demuxer.frameReady
                                  ? ((this.processing = !0),
                                    this.demuxer.dequeueVideoPacket(
                                      function (e) {
                                        (t.videoBytes += e.byteLength),
                                          t.videoDecoder.processHeader(
                                            e,
                                            function () {
                                              n(!0);
                                            },
                                          );
                                      },
                                    ))
                                  : r()
                              : this.loadedVideoMetadata &&
                                  !this.loadedMetadata &&
                                  this.loadedAllMetadata
                                ? ((this.loadedMetadata = !0), n(!0))
                                : this.loadedMetadata &&
                                    (!this.hasAudio ||
                                      this.demuxer.audioReady) &&
                                    (!this.hasVideo || this.demuxer.frameReady)
                                  ? n(!0)
                                  : r();
                      },
                    },
                    {
                      key: "decodeFrame",
                      value: function (e) {
                        var t = this,
                          n = this.flushSafe(e),
                          r = this.frameTimestamp,
                          i = this.keyframeTimestamp;
                        this.demuxer.dequeueVideoPacket(function (e) {
                          (t.videoBytes += e.byteLength),
                            t.videoDecoder.processFrame(e, function (e) {
                              var a = t.videoDecoder.frameBuffer;
                              a &&
                                ((a.timestamp = r), (a.keyframeTimestamp = i)),
                                n(e);
                            });
                        });
                      },
                    },
                    {
                      key: "decodeAudio",
                      value: function (e) {
                        var t = this,
                          n = this.flushSafe(e);
                        this.demuxer.dequeueAudioPacket(function (e, r) {
                          (t.audioBytes += e.byteLength),
                            t.audioDecoder.processAudio(e, function (e) {
                              if (r) {
                                var i,
                                  a = [],
                                  s = (function (e) {
                                    var t =
                                      ("u" > typeof Symbol &&
                                        e[Symbol.iterator]) ||
                                      e["@@iterator"];
                                    if (!t) {
                                      if (
                                        Array.isArray(e) ||
                                        (t = (function (e) {
                                          if (e) {
                                            if ("string" == typeof e)
                                              return o(e, void 0);
                                            var t = Object.prototype.toString
                                              .call(e)
                                              .slice(8, -1);
                                            if (
                                              ("Object" === t &&
                                                e.constructor &&
                                                (t = e.constructor.name),
                                              "Map" === t || "Set" === t)
                                            )
                                              return Array.from(e);
                                            if (
                                              "Arguments" === t ||
                                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                t,
                                              )
                                            )
                                              return o(e, void 0);
                                          }
                                        })(e))
                                      ) {
                                        t && (e = t);
                                        var n = 0,
                                          r = function () {};
                                        return {
                                          s: r,
                                          n: function () {
                                            return n >= e.length
                                              ? { done: !0 }
                                              : { done: !1, value: e[n++] };
                                          },
                                          e: function (e) {
                                            throw e;
                                          },
                                          f: r,
                                        };
                                      }
                                      throw TypeError(
                                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                      );
                                    }
                                    var i,
                                      a = !0,
                                      s = !1;
                                    return {
                                      s: function () {
                                        t = t.call(e);
                                      },
                                      n: function () {
                                        var e = t.next();
                                        return (a = e.done), e;
                                      },
                                      e: function (e) {
                                        (s = !0), (i = e);
                                      },
                                      f: function () {
                                        try {
                                          a || null == t.return || t.return();
                                        } finally {
                                          if (s) throw i;
                                        }
                                      },
                                    };
                                  })(t.audioDecoder.audioBuffer);
                                try {
                                  for (s.s(); !(i = s.n()).done; ) {
                                    var u = i.value,
                                      c = Math.round(
                                        (r * t.audioFormat.rate) / 1e9,
                                      );
                                    c > 0
                                      ? a.push(
                                          u.subarray(
                                            0,
                                            u.length - Math.min(c, u.length),
                                          ),
                                        )
                                      : a.push(
                                          u.subarray(
                                            Math.min(Math.abs(c), u.length),
                                            u.length,
                                          ),
                                        );
                                  }
                                } catch (e) {
                                  s.e(e);
                                } finally {
                                  s.f();
                                }
                                t.audioDecoder.audioBuffer = a;
                              }
                              return n(e);
                            });
                        });
                      },
                    },
                    {
                      key: "discardFrame",
                      value: function (e) {
                        var t = this;
                        this.demuxer.dequeueVideoPacket(function (n) {
                          (t.videoBytes += n.byteLength), e();
                        });
                      },
                    },
                    {
                      key: "discardAudio",
                      value: function (e) {
                        var t = this;
                        this.demuxer.dequeueAudioPacket(function (n, r) {
                          (t.audioBytes += n.byteLength), e();
                        });
                      },
                    },
                    {
                      key: "flush",
                      value: function (e) {
                        this.flushIter++, this.demuxer.flush(e);
                      },
                    },
                    {
                      key: "sync",
                      value: function () {
                        this.videoDecoder && this.videoDecoder.sync();
                      },
                    },
                    {
                      key: "recycleFrame",
                      value: function (e) {
                        this.videoDecoder && this.videoDecoder.recycleFrame(e);
                      },
                    },
                    {
                      key: "getKeypointOffset",
                      value: function (e, t) {
                        this.demuxer.getKeypointOffset(e, t);
                      },
                    },
                    {
                      key: "seekToKeypoint",
                      value: function (e, t) {
                        this.demuxer.seekToKeypoint(e, this.flushSafe(t));
                      },
                    },
                    {
                      key: "loadAudioCodec",
                      value: function (e) {
                        var t = this;
                        if (this.demuxer.audioCodec) {
                          var n = {
                            vorbis: "OGVDecoderAudioVorbisW",
                            opus: "OGVDecoderAudioOpusW",
                          }[this.demuxer.audioCodec];
                          (this.processing = !0),
                            s.default.loadClass(
                              n,
                              function (n) {
                                var r = {};
                                t.demuxer.audioFormat &&
                                  (r.audioFormat = t.demuxer.audioFormat),
                                  n(r).then(function (n) {
                                    (t.audioDecoder = n),
                                      n.init(function () {
                                        (t.loadedAudioMetadata =
                                          n.loadedMetadata),
                                          (t.processing = !1),
                                          e();
                                      });
                                  });
                              },
                              { worker: this.options.worker },
                            );
                        } else e();
                      },
                    },
                    {
                      key: "loadVideoCodec",
                      value: function (e) {
                        var t = this;
                        if (this.demuxer.videoCodec) {
                          var n = !!this.options.simd,
                            r = !!this.options.threading,
                            i = {
                              theora: "OGVDecoderVideoTheoraW",
                              vp8: r
                                ? "OGVDecoderVideoVP8MTW"
                                : "OGVDecoderVideoVP8W",
                              vp9: r
                                ? n
                                  ? "OGVDecoderVideoVP9SIMDMTW"
                                  : "OGVDecoderVideoVP9MTW"
                                : n
                                  ? "OGVDecoderVideoVP9SIMDW"
                                  : "OGVDecoderVideoVP9W",
                              av1: r
                                ? n
                                  ? "OGVDecoderVideoAV1SIMDMTW"
                                  : "OGVDecoderVideoAV1MTW"
                                : n
                                  ? "OGVDecoderVideoAV1SIMDW"
                                  : "OGVDecoderVideoAV1W",
                            }[this.demuxer.videoCodec];
                          (this.processing = !0),
                            s.default.loadClass(
                              i,
                              function (n) {
                                var i = {};
                                t.demuxer.videoFormat &&
                                  (i.videoFormat = t.demuxer.videoFormat),
                                  r && delete window.ENVIRONMENT_IS_PTHREAD,
                                  n(i).then(function (n) {
                                    (t.videoDecoder = n),
                                      n.init(function () {
                                        (t.loadedVideoMetadata =
                                          n.loadedMetadata),
                                          (t.processing = !1),
                                          e();
                                      });
                                  });
                              },
                              {
                                worker:
                                  this.options.worker &&
                                  !this.options.threading,
                              },
                            );
                        } else e();
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            539: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(8)),
                a = r(n(575)),
                s = r(n(913));
              t.default = new ((function () {
                function e() {
                  (0, a.default)(this, e),
                    (this.tested = !1),
                    (this.testResult = void 0);
                }
                return (
                  (0, s.default)(e, [
                    {
                      key: "wasmSupported",
                      value: function () {
                        if (!this.tested) {
                          try {
                            var e, t;
                            "object" ===
                            ("u" < typeof WebAssembly
                              ? "undefined"
                              : (0, i.default)(WebAssembly))
                              ? (this.testResult =
                                  ((e = new Uint8Array([
                                    0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1,
                                    127, 1, 127, 3, 2, 1, 0, 5, 3, 1, 0, 1, 7,
                                    8, 1, 4, 116, 101, 115, 116, 0, 0, 10, 16,
                                    1, 14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40,
                                    2, 0, 11,
                                  ])),
                                  (t = new WebAssembly.Module(e)),
                                  0 !==
                                    new WebAssembly.Instance(
                                      t,
                                      {},
                                    ).exports.test(4)))
                              : (this.testResult = !1);
                          } catch (e) {
                            console.log(
                              "Exception while testing WebAssembly",
                              e,
                            ),
                              (this.testResult = !1);
                          }
                          this.tested = !0;
                        }
                        return this.testResult;
                      },
                    },
                  ]),
                  e
                );
              })())();
            },
            309: (e, t) => {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0),
                (t.default = function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                });
            },
            431: (e, t, n) => {
              "use strict";
              var r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                i = function e(t, n, r) {
                  null === t && (t = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var s = i.get;
                  return void 0 !== s ? s.call(r) : void 0;
                },
                a = n(828),
                s = "arraybuffer",
                o = (function (e) {
                  function t() {
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw TypeError("Cannot call a class as a function");
                      })(this, t),
                      (function (e, t) {
                        if (!e)
                          throw ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t &&
                          ("object" == typeof t || "function" == typeof t)
                          ? t
                          : e;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).apply(
                          this,
                          arguments,
                        ),
                      )
                    );
                  }
                  return (
                    (function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t,
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    r(t, [
                      {
                        key: "initXHR",
                        value: function () {
                          i(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "initXHR",
                            this,
                          ).call(this),
                            (this.xhr.responseType = s);
                        },
                      },
                      { key: "onXHRProgress", value: function () {} },
                      {
                        key: "onXHRLoad",
                        value: function () {
                          var e = this.xhr.response;
                          (this.bytesRead += e.byteLength),
                            this.emit("buffer", e),
                            i(
                              t.prototype.__proto__ ||
                                Object.getPrototypeOf(t.prototype),
                              "onXHRLoad",
                              this,
                            ).call(this);
                        },
                      },
                    ]),
                    t
                  );
                })(a);
              (o.supported = function () {
                try {
                  var e = new XMLHttpRequest();
                  return (e.responseType = s), e.responseType === s;
                } catch (e) {
                  return !1;
                }
              }),
                (e.exports = o);
            },
            306: (e, t, n) => {
              "use strict";
              var r = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })();
              function i(e) {
                var t = e.getResponseHeader("Content-Range");
                return t && t.match(/^bytes (\d+)-(\d+)\/(\d+)/);
              }
              e.exports = (function (e) {
                function t(e) {
                  var n = e.url,
                    r = e.offset,
                    i = e.length,
                    a = e.cachever;
                  if (!(this instanceof t))
                    throw TypeError("Cannot call a class as a function");
                  var s = (function (e, t) {
                    if (!e)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t && ("object" == typeof t || "function" == typeof t)
                      ? t
                      : e;
                  })(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).call(this),
                  );
                  return (
                    (s.url = n),
                    (s.offset = r),
                    (s.length = i),
                    (s.cachever = void 0 === a ? 0 : a),
                    (s.loaded = !1),
                    (s.seekable = !1),
                    (s.headers = {}),
                    (s.eof = !1),
                    (s.bytesRead = 0),
                    (s.xhr = new XMLHttpRequest()),
                    s
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t,
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(t, e),
                  r(t, [
                    {
                      key: "load",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                          var r = null;
                          e._onAbort = function (e) {
                            r(), n(e);
                          };
                          var a = function () {
                              if (2 == e.xhr.readyState) {
                                if (206 == e.xhr.status) {
                                  var a,
                                    s,
                                    o,
                                    u = (o = i(e.xhr)) ? parseInt(o[1], 10) : 0;
                                  if (e.offset != u)
                                    return (
                                      console.log(
                                        "Expected start at " +
                                          e.offset +
                                          " but got " +
                                          u +
                                          "; working around Safari range caching bug: https://bugs.webkit.org/show_bug.cgi?id=82672",
                                      ),
                                      e.cachever++,
                                      e.emit("cachever"),
                                      e.abort(),
                                      r(),
                                      void e.load().then(t).catch(n)
                                    );
                                  e.seekable = !0;
                                }
                                e.xhr.status >= 200 && e.xhr.status < 300
                                  ? ((e.length = (function (e) {
                                      if (206 == e.status) {
                                        var t;
                                        return (t = i(e))
                                          ? parseInt(t[3], 10)
                                          : -1;
                                      }
                                      var n =
                                        e.getResponseHeader("Content-Length");
                                      return null === n || "" === n
                                        ? -1
                                        : parseInt(n, 10);
                                    })(e.xhr)),
                                    (a = e.xhr),
                                    (s = {}),
                                    a
                                      .getAllResponseHeaders()
                                      .split(/\r?\n/)
                                      .forEach(function (e) {
                                        var t = e.split(/:\s*/, 2);
                                        t.length > 1 &&
                                          (s[t[0].toLowerCase()] = t[1]);
                                      }),
                                    (e.headers = s),
                                    e.onXHRStart())
                                  : (r(),
                                    n(Error("HTTP error " + e.xhr.status)));
                              }
                            },
                            s = function () {
                              r(), n(Error("network error"));
                            },
                            o = function () {
                              r(), t();
                            };
                          (r = function () {
                            e.xhr.removeEventListener("readystatechange", a),
                              e.xhr.removeEventListener("error", s),
                              e.off("open", o),
                              (e._onAbort = null);
                          }),
                            e.initXHR(),
                            e.xhr.addEventListener("readystatechange", a),
                            e.xhr.addEventListener("error", s),
                            e.on("open", o),
                            e.xhr.send();
                        });
                      },
                    },
                    {
                      key: "bufferToOffset",
                      value: function (e) {
                        return Promise.reject(Error("abstract"));
                      },
                    },
                    {
                      key: "abort",
                      value: function () {
                        if ((this.xhr.abort(), this._onAbort)) {
                          var e = this._onAbort;
                          this._onAbort = null;
                          var t = Error("Aborted");
                          (t.name = "AbortError"), e(t);
                        }
                      },
                    },
                    {
                      key: "initXHR",
                      value: function () {
                        var e = this.url;
                        this.cachever &&
                          (e += "?buggy_cachever=" + this.cachever),
                          this.xhr.open("GET", e);
                        var t = null;
                        (this.offset || this.length) &&
                          (t = "bytes=" + this.offset + "-"),
                          this.length && (t += this.offset + this.length - 1),
                          null !== t && this.xhr.setRequestHeader("Range", t);
                      },
                    },
                    {
                      key: "onXHRStart",
                      value: function () {
                        throw Error("abstract");
                      },
                    },
                  ]),
                  t
                );
              })(n(566));
            },
            810: (e, t, n) => {
              "use strict";
              var r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                i = function e(t, n, r) {
                  null === t && (t = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var s = i.get;
                  return void 0 !== s ? s.call(r) : void 0;
                },
                a = (function (e) {
                  function t() {
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw TypeError("Cannot call a class as a function");
                      })(this, t),
                      (function (e, t) {
                        if (!e)
                          throw ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t &&
                          ("object" == typeof t || "function" == typeof t)
                          ? t
                          : e;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).apply(
                          this,
                          arguments,
                        ),
                      )
                    );
                  }
                  return (
                    (function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t,
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    r(t, [
                      {
                        key: "initXHR",
                        value: function () {
                          i(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "initXHR",
                            this,
                          ).call(this),
                            (this.xhr.responseType = "text"),
                            this.xhr.overrideMimeType(
                              "text/plain; charset=x-user-defined",
                            );
                        },
                      },
                      {
                        key: "onXHRProgress",
                        value: function () {
                          var e = this.xhr.responseText.slice(this.bytesRead);
                          e.length > 0 &&
                            ((this.bytesRead += e.length),
                            this.emit("buffer", e));
                        },
                      },
                      {
                        key: "onXHRLoad",
                        value: function () {
                          this.onXHRProgress(),
                            i(
                              t.prototype.__proto__ ||
                                Object.getPrototypeOf(t.prototype),
                              "onXHRLoad",
                              this,
                            ).call(this);
                        },
                      },
                    ]),
                    t
                  );
                })(n(828));
              (a.supported = function () {
                try {
                  return !!new XMLHttpRequest().overrideMimeType;
                } catch (e) {
                  return !1;
                }
              }),
                (e.exports = a);
            },
            828: (e, t, n) => {
              "use strict";
              var r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                i = function e(t, n, r) {
                  null === t && (t = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var s = i.get;
                  return void 0 !== s ? s.call(r) : void 0;
                };
              e.exports = (function (e) {
                function t() {
                  return (
                    (function (e, t) {
                      if (!(e instanceof t))
                        throw TypeError("Cannot call a class as a function");
                    })(this, t),
                    (function (e, t) {
                      if (!e)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t &&
                        ("object" == typeof t || "function" == typeof t)
                        ? t
                        : e;
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).apply(
                        this,
                        arguments,
                      ),
                    )
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t,
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(t, e),
                  r(t, [
                    {
                      key: "bufferToOffset",
                      value: function (e) {
                        var t = this;
                        return new Promise(function (n, r) {
                          if (t.eof || t.offset >= e) n();
                          else {
                            var i = null;
                            t._onAbort = function (e) {
                              i(), r(e);
                            };
                            var a = function () {
                                t.offset >= e && !t.eof && (i(), n());
                              },
                              s = function () {
                                i(), n();
                              },
                              o = function () {
                                i(), r(Error("error streaming"));
                              };
                            (i = function () {
                              (t.buffering = !1),
                                t.off("buffer", a),
                                t.off("done", s),
                                t.off("error", o),
                                (t._onAbort = null);
                            }),
                              (t.buffering = !0),
                              t.on("buffer", a),
                              t.on("done", s),
                              t.on("error", o);
                          }
                        });
                      },
                    },
                    {
                      key: "initXHR",
                      value: function () {
                        i(
                          t.prototype.__proto__ ||
                            Object.getPrototypeOf(t.prototype),
                          "initXHR",
                          this,
                        ).call(this);
                      },
                    },
                    {
                      key: "onXHRStart",
                      value: function () {
                        var e = this;
                        this.xhr.addEventListener("progress", function () {
                          return e.onXHRProgress();
                        }),
                          this.xhr.addEventListener("error", function () {
                            return e.onXHRError();
                          }),
                          this.xhr.addEventListener("load", function () {
                            return e.onXHRLoad();
                          }),
                          this.emit("open");
                      },
                    },
                    {
                      key: "onXHRProgress",
                      value: function () {
                        throw Error("abstract");
                      },
                    },
                    {
                      key: "onXHRError",
                      value: function () {
                        this.emit("error");
                      },
                    },
                    {
                      key: "onXHRLoad",
                      value: function () {
                        (this.eof = !0), this.emit("done");
                      },
                    },
                  ]),
                  t
                );
              })(n(306));
            },
            761: (e, t, n) => {
              "use strict";
              var r = n(855),
                i = n(810),
                a = n(431),
                s = null;
              e.exports = function (e) {
                if (!1 === e.progressive) return new a(e);
                if (
                  (s || (s = r.supported() ? r : i.supported() ? i : null), !s)
                )
                  throw Error("No supported backend class");
                return new s(e);
              };
            },
            855: (e, t, n) => {
              "use strict";
              var r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                i = function e(t, n, r) {
                  null === t && (t = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var s = i.get;
                  return void 0 !== s ? s.call(r) : void 0;
                },
                a = n(828),
                s = "moz-chunked-arraybuffer",
                o = (function (e) {
                  function t() {
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw TypeError("Cannot call a class as a function");
                      })(this, t),
                      (function (e, t) {
                        if (!e)
                          throw ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t &&
                          ("object" == typeof t || "function" == typeof t)
                          ? t
                          : e;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).apply(
                          this,
                          arguments,
                        ),
                      )
                    );
                  }
                  return (
                    (function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t,
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    r(t, [
                      {
                        key: "initXHR",
                        value: function () {
                          i(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "initXHR",
                            this,
                          ).call(this),
                            (this.xhr.responseType = s);
                        },
                      },
                      {
                        key: "onXHRProgress",
                        value: function () {
                          var e = this.xhr.response;
                          (this.bytesRead += e.byteLength),
                            this.emit("buffer", e);
                        },
                      },
                    ]),
                    t
                  );
                })(a);
              (o.supported = function () {
                try {
                  var e = new XMLHttpRequest();
                  return (e.responseType = s), e.responseType === s;
                } catch (e) {
                  return !1;
                }
              }),
                (e.exports = o);
            },
            503: (e) => {
              "use strict";
              var t = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })();
              e.exports = (function () {
                function e() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = t.buffer,
                    r = void 0 === n ? void 0 : n,
                    i = t.string,
                    a = void 0 === i ? void 0 : i,
                    s = t.start,
                    o = void 0 === s ? 0 : s,
                    u = t.end,
                    c =
                      void 0 === u
                        ? o + (r ? r.byteLength : a ? a.length : 0)
                        : u,
                    l = t.prev,
                    d = t.next,
                    h = t.eof,
                    f = t.empty,
                    p = void 0 === f ? !(r || a) : f,
                    _ = t.timestamp,
                    m = void 0 === _ ? Date.now() : _;
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.start = o),
                    (this.end = c),
                    (this.prev = void 0 === l ? null : l),
                    (this.next = void 0 === d ? null : d),
                    (this.eof = void 0 !== h && h),
                    (this.empty = p),
                    (this.timestamp = m),
                    (this.buffer = r),
                    (this.string = a),
                    Object.defineProperty(this, "length", {
                      get: function () {
                        return this.end - this.start;
                      },
                    });
                }
                return (
                  t(e, [
                    {
                      key: "contains",
                      value: function (e) {
                        return e >= this.start && (e < this.end || this.eof);
                      },
                    },
                    {
                      key: "readBytes",
                      value: function (e, t, n) {
                        var r = t - this.start,
                          i = n - t;
                        if (this.buffer) {
                          var a = new Uint8Array(this.buffer, r, i);
                          e.set(a);
                        } else {
                          if (!this.string) throw Error("invalid state");
                          for (var s = this.string, o = 0; o < i; o++)
                            e[o] = s.charCodeAt(r + o);
                        }
                        this.timestamp = Date.now();
                      },
                    },
                    {
                      key: "split",
                      value: function (t) {
                        if (!this.empty || !this.contains(t))
                          throw Error("invalid split");
                        var n = new e({ start: this.start, end: t }),
                          r = new e({
                            start: t,
                            end: this.eof ? t : this.end,
                            eof: this.eof,
                          });
                        return (n.next = r), (r.prev = n), [n, r];
                      },
                    },
                    {
                      key: "first",
                      value: function (e) {
                        for (var t = this; t; t = t.next) if (e(t)) return t;
                        return null;
                      },
                    },
                    {
                      key: "last",
                      value: function (e) {
                        for (var t = null, n = this; n && e(n); n = n.next)
                          t = n;
                        return t;
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            91: (e, t, n) => {
              "use strict";
              var r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                i = n(503);
              e.exports = (function () {
                function e() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = t.cacheSize;
                  if (!(this instanceof e))
                    throw TypeError("Cannot call a class as a function");
                  var r = new i({ eof: !0 });
                  (this.head = r),
                    (this.tail = r),
                    (this.readOffset = 0),
                    (this.readCursor = r),
                    (this.writeOffset = 0),
                    (this.writeCursor = r),
                    (this.cacheSize = void 0 === n ? 0 : n);
                }
                return (
                  r(e, [
                    {
                      key: "bytesReadable",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 1 / 0,
                          t = this.readOffset,
                          n = this.readCursor.last(function (n) {
                            return !n.empty && n.start <= t + e;
                          });
                        return n ? Math.min(e, n.end - t) : 0;
                      },
                    },
                    {
                      key: "bytesWritable",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 1 / 0,
                          t = this.writeOffset,
                          n = this.writeCursor;
                        if (n.eof) return e;
                        var r = n.last(function (n) {
                          return n.empty && n.start <= t + e;
                        });
                        return r ? Math.min(e, r.end - t) : 0;
                      },
                    },
                    {
                      key: "seekRead",
                      value: function (e) {
                        var t = this.head.first(function (t) {
                          return t.contains(e);
                        });
                        if (!t) throw Error("read seek out of range");
                        (this.readOffset = e), (this.readCursor = t);
                      },
                    },
                    {
                      key: "seekWrite",
                      value: function (e) {
                        var t = this.head.first(function (t) {
                          return t.contains(e);
                        });
                        if (!t) throw Error("write seek out of range");
                        (this.writeOffset = e), (this.writeCursor = t);
                      },
                    },
                    {
                      key: "readBytes",
                      value: function (e) {
                        for (
                          var t = e.byteLength,
                            n = this.bytesReadable(t),
                            r = this.readOffset,
                            i = r + n,
                            a = r,
                            s = this.readCursor;
                          s && !s.empty && !(s.start >= i);
                          s = s.next
                        ) {
                          var o = Math.min(i, s.end),
                            u = e.subarray(a - r, o - r);
                          s.readBytes(u, a, o), (a = o);
                        }
                        return (
                          (this.readOffset = a),
                          (this.readCursor = this.readCursor.first(
                            function (e) {
                              return e.contains(a);
                            },
                          )),
                          n
                        );
                      },
                    },
                    {
                      key: "write",
                      value: function (e) {
                        var t = this.bufferItem(e),
                          n = this.writeCursor;
                        if (!n.empty) throw Error("write cursor not empty");
                        if (!n.contains(t.end) && n.end !== t.end)
                          throw Error("write cursor too small");
                        n.start < t.start &&
                          (this.split(n, t.start), (n = this.writeCursor)),
                          (t.end < n.end || n.eof) &&
                            (this.split(n, t.end), (n = this.writeCursor)),
                          this.splice(n, n, t, t),
                          (this.writeOffset = t.end),
                          (this.writeCursor = t.next),
                          this.gc();
                      },
                    },
                    {
                      key: "bufferItem",
                      value: function (e) {
                        if (e instanceof ArrayBuffer)
                          return new i({
                            start: this.writeOffset,
                            end: this.writeOffset + e.byteLength,
                            buffer: e,
                          });
                        if ("string" == typeof e)
                          return new i({
                            start: this.writeOffset,
                            end: this.writeOffset + e.length,
                            string: e,
                          });
                        throw Error("invalid input to write");
                      },
                    },
                    {
                      key: "split",
                      value: function (e, t) {
                        var n = e.split(t);
                        this.splice(e, e, n[0], n[1]);
                      },
                    },
                    {
                      key: "ranges",
                      value: function () {
                        for (var e = [], t = this.head; t; t = t.next)
                          if (!t.empty) {
                            var n = t;
                            (t = t.last(function (e) {
                              return !e.empty;
                            })),
                              e.push([n.start, t.end]);
                          }
                        return e;
                      },
                    },
                    {
                      key: "gc",
                      value: function () {
                        for (var e = 0, t = [], n = this.head; n; n = n.next)
                          n.empty ||
                            ((e += n.length),
                            (n.end < this.readOffset ||
                              n.start > this.readOffset + this.chunkSize) &&
                              t.push(n));
                        if (e > this.cacheSize) {
                          t.sort(function (e, t) {
                            return e.timestamp - t.timestamp;
                          });
                          for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            if (e <= this.cacheSize) break;
                            this.remove(i), (e -= i.length);
                          }
                        }
                      },
                    },
                    {
                      key: "remove",
                      value: function (e) {
                        var t = new i({ start: e.start, end: e.end });
                        this.splice(e, e, t, t),
                          (e = t).prev &&
                            e.prev.empty &&
                            (e = this.consolidate(e.prev)),
                          e.next &&
                            e.next.empty &&
                            !e.next.eof &&
                            (e = this.consolidate(e)),
                          0 === e.start && (this.head = e);
                      },
                    },
                    {
                      key: "consolidate",
                      value: function (e) {
                        var t = e.last(function (e) {
                            return e.empty && !e.eof;
                          }),
                          n = new i({ start: e.start, end: t.end });
                        return this.splice(e, t, n, n), n;
                      },
                    },
                    {
                      key: "splice",
                      value: function (e, t, n, r) {
                        var i = this;
                        if (e.start !== n.start)
                          throw Error("invalid splice head");
                        if (!(t.end === r.end || (t.eof && r.eof)))
                          throw Error("invalid splice tail");
                        var a = e.prev,
                          s = t.next;
                        (e.prev = null),
                          (t.next = null),
                          a && ((a.next = n), (n.prev = a)),
                          s && ((s.prev = r), (r.next = s)),
                          e === this.head && (this.head = n),
                          t === this.tail && (this.tail = r),
                          (this.readCursor = this.head.first(function (e) {
                            return e.contains(i.readOffset);
                          })),
                          (this.writeCursor = this.head.first(function (e) {
                            return e.contains(i.writeOffset);
                          }));
                      },
                    },
                    {
                      key: "eof",
                      get: function () {
                        return this.readCursor.eof;
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            814: (e, t, n) => {
              "use strict";
              e.exports = n(91);
            },
            566: (e) => {
              "use strict";
              var t = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })();
              e.exports = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this._e = {});
                }
                return (
                  t(e, [
                    {
                      key: "on",
                      value: function (e, t) {
                        (this._e[e] || (this._e[e] = [])).push(t);
                      },
                    },
                    {
                      key: "off",
                      value: function (e, t) {
                        var n = this._e[e] || [],
                          r = n.indexOf(t);
                        t >= 0 && n.splice(r, 1);
                      },
                    },
                    {
                      key: "emit",
                      value: function (e, t) {
                        (this._e[e] || []).slice().forEach(function (e) {
                          return e(t);
                        });
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            936: (e, t, n) => {
              "use strict";
              var r = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })();
              n(566);
              var i = n(814),
                a = n(761);
              e.exports = (function () {
                function e(t) {
                  var n = t.url,
                    r = t.chunkSize,
                    a = t.cacheSize,
                    s = t.progressive;
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.length = -1),
                    (this.loaded = !1),
                    (this.loading = !1),
                    (this.seekable = !1),
                    (this.buffering = !1),
                    (this.seeking = !1),
                    (this.progressive = void 0 === s || s),
                    Object.defineProperties(this, {
                      offset: {
                        get: function () {
                          return this._cache.readOffset;
                        },
                      },
                      eof: {
                        get: function () {
                          return this.length === this._cache.readOffset;
                        },
                      },
                    }),
                    (this.url = void 0 === n ? "" : n),
                    (this.headers = {}),
                    (this._cache = new i({ cacheSize: void 0 === a ? 0 : a })),
                    (this._backend = null),
                    (this._cachever = 0),
                    (this._chunkSize = void 0 === r ? 1048576 : r);
                }
                return (
                  r(e, [
                    {
                      key: "load",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                          if (e.loading)
                            throw Error("cannot load when loading");
                          if (e.loaded) throw Error("cannot load when loaded");
                          (e.loading = !0),
                            e
                              ._openBackend()
                              .then(function (n) {
                                (e.seekable = n.seekable),
                                  (e.headers = n.headers),
                                  (e.length = n.length),
                                  (e.loaded = !0),
                                  (e.loading = !1),
                                  t();
                              })
                              .catch(function (t) {
                                "AbortError" !== t.name && (e.loading = !1),
                                  n(t);
                              });
                        });
                      },
                    },
                    {
                      key: "_openBackend",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                          if (e._backend) t(e._backend);
                          else if (e.eof)
                            n(Error("cannot open at end of file"));
                          else {
                            var r = e._cache,
                              i = e._chunkSize,
                              s = r.bytesReadable(i),
                              o = r.readOffset + s;
                            if (
                              (r.seekWrite(o), e.length >= 0 && o >= e.length)
                            )
                              return void t(null);
                            var u =
                              e._clampToLength(
                                r.writeOffset + r.bytesWritable(i),
                              ) - r.writeOffset;
                            if (0 === u) t(null);
                            else {
                              var c = (e._backend = new a({
                                  url: e.url,
                                  offset: e._cache.writeOffset,
                                  length: u,
                                  cachever: e._cachever,
                                  progressive: e.progressive,
                                })),
                                l = null,
                                d = function () {
                                  c !== e._backend
                                    ? (l(), n(Error("invalid state")))
                                    : (c.on("buffer", function (t) {
                                        c === e._backend && e._cache.write(t);
                                      }),
                                      c.on("done", function () {
                                        c === e._backend &&
                                          (-1 === e.length &&
                                            (e.length =
                                              e._backend.offset +
                                              e._backend.bytesRead),
                                          (e._backend = null));
                                      }),
                                      t(c));
                                },
                                h = function (t) {
                                  c !== e._backend
                                    ? n(Error("invalid state"))
                                    : ((e._backend = null), n(t));
                                };
                              (l = function () {
                                c.off("open", d), c.off("error", h);
                              }),
                                c.on("open", d),
                                c.on("error", h),
                                c.on("cachever", function () {
                                  e._cachever++;
                                }),
                                c.load();
                            }
                          }
                        });
                      },
                    },
                    {
                      key: "_readAhead",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                          e._backend || e.eof
                            ? t()
                            : e
                                ._openBackend()
                                .then(function () {
                                  t();
                                })
                                .catch(function (e) {
                                  n(e);
                                });
                        });
                      },
                    },
                    {
                      key: "seek",
                      value: function (e) {
                        var t = this;
                        return new Promise(function (n, r) {
                          if (!t.loaded || t.buffering || t.seeking)
                            throw Error("invalid state");
                          if (e !== (0 | e) || e < 0)
                            throw Error("invalid input");
                          if (t.length >= 0 && e > t.length)
                            throw Error("seek past end of file");
                          if (!t.seekable)
                            throw Error("seek on non-seekable stream");
                          t._backend && t.abort(),
                            t._cache.seekRead(e),
                            t._cache.seekWrite(e),
                            t._readAhead().then(n).catch(r);
                        });
                      },
                    },
                    {
                      key: "read",
                      value: function (e) {
                        var t = this;
                        return this.buffer(e).then(function (e) {
                          return t.readSync(e);
                        });
                      },
                    },
                    {
                      key: "readSync",
                      value: function (e) {
                        var t = this.bytesAvailable(e),
                          n = new Uint8Array(t);
                        if (this.readBytes(n) !== t)
                          throw Error("failed to read expected data");
                        return n.buffer;
                      },
                    },
                    {
                      key: "readBytes",
                      value: function (e) {
                        if (!this.loaded || this.buffering || this.seeking)
                          throw Error("invalid state");
                        if (!(e instanceof Uint8Array))
                          throw Error("invalid input");
                        var t = this._cache.readBytes(e);
                        return this._readAhead(), t;
                      },
                    },
                    {
                      key: "buffer",
                      value: function (e) {
                        var t = this;
                        return new Promise(function (n, r) {
                          if (!t.loaded || t.buffering || t.seeking)
                            throw Error("invalid state");
                          if (e !== (0 | e) || e < 0)
                            throw Error("invalid input");
                          var i = t._clampToLength(t.offset + e),
                            a = i - t.offset,
                            s = t.bytesAvailable(a);
                          s >= a
                            ? n(s)
                            : ((t.buffering = !0),
                              t
                                ._openBackend()
                                .then(function (n) {
                                  return n
                                    ? n.bufferToOffset(i).then(function () {
                                        return (t.buffering = !1), t.buffer(e);
                                      })
                                    : Promise.resolve(s);
                                })
                                .then(function (e) {
                                  (t.buffering = !1), n(e);
                                })
                                .catch(function (e) {
                                  "AbortError" !== e.name && (t.buffering = !1),
                                    r(e);
                                }));
                        });
                      },
                    },
                    {
                      key: "bytesAvailable",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 1 / 0;
                        return this._cache.bytesReadable(e);
                      },
                    },
                    {
                      key: "abort",
                      value: function () {
                        this.loading && (this.loading = !1),
                          this.buffering && (this.buffering = !1),
                          this.seeking && (this.seeking = !1),
                          this._backend &&
                            (this._backend.abort(), (this._backend = null));
                      },
                    },
                    {
                      key: "getBufferedRanges",
                      value: function () {
                        return this._cache.ranges();
                      },
                    },
                    {
                      key: "_clampToLength",
                      value: function (e) {
                        return this.length < 0 ? e : Math.min(this.length, e);
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            302: (e, t, n) => {
              "use strict";
              n.r(t), n.d(t, { default: () => r });
              let r =
                "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU5LjE2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAAEEwCZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ//////////////////////////////////////////////////////////////////8AAAAATGF2YzU5LjE4AAAAAAAAAAAAAAAAJAZAAAAAAAAABBMIw3vfAAAAAAAAAAAAAAAAAAAAAP/7kGQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";
            },
            826: (e) => {
              e.exports = {
                vertex:
                  "precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aLumaPosition;\nattribute vec2 aChromaPosition;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vLumaPosition = aLumaPosition;\n    vChromaPosition = aChromaPosition;\n}\n",
                fragment:
                  "// inspired by https://github.com/mbebenita/Broadway/blob/master/Player/canvas.js\n\nprecision mediump float;\n\nuniform sampler2D uTextureY;\nuniform sampler2D uTextureCb;\nuniform sampler2D uTextureCr;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n   // Y, Cb, and Cr planes are uploaded as ALPHA textures.\n   float fY = texture2D(uTextureY, vLumaPosition).w;\n   float fCb = texture2D(uTextureCb, vChromaPosition).w;\n   float fCr = texture2D(uTextureCr, vChromaPosition).w;\n\n   // Premultipy the Y...\n   float fYmul = fY * 1.1643828125;\n\n   // And convert that to RGB!\n   gl_FragColor = vec4(\n     fYmul + 1.59602734375 * fCr - 0.87078515625,\n     fYmul - 0.39176171875 * fCb - 0.81296875 * fCr + 0.52959375,\n     fYmul + 2.017234375   * fCb - 1.081390625,\n     1\n   );\n}\n",
                vertexStripe:
                  "precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aTexturePosition;\nvarying vec2 vTexturePosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vTexturePosition = aTexturePosition;\n}\n",
                fragmentStripe:
                  "// extra 'stripe' texture fiddling to work around IE 11's poor performance on gl.LUMINANCE and gl.ALPHA textures\n\nprecision mediump float;\n\nuniform sampler2D uStripe;\nuniform sampler2D uTexture;\nvarying vec2 vTexturePosition;\nvoid main() {\n   // Y, Cb, and Cr planes are mapped into a pseudo-RGBA texture\n   // so we can upload them without expanding the bytes on IE 11\n   // which doesn't allow LUMINANCE or ALPHA textures\n   // The stripe textures mark which channel to keep for each pixel.\n   // Each texture extraction will contain the relevant value in one\n   // channel only.\n\n   float fLuminance = dot(\n      texture2D(uStripe, vTexturePosition),\n      texture2D(uTexture, vTexturePosition)\n   );\n\n   gl_FragColor = vec4(0, 0, 0, fLuminance);\n}\n",
              };
            },
            487: (e) => {
              !(function () {
                "use strict";
                function t(e, t) {
                  throw Error("abstract");
                }
                (t.prototype.drawFrame = function (e) {
                  throw Error("abstract");
                }),
                  (t.prototype.clear = function () {
                    throw Error("abstract");
                  }),
                  (e.exports = t);
              })();
            },
            926: (e, t, n) => {
              !(function () {
                "use strict";
                var t = n(487),
                  r = n(627);
                function i(e) {
                  var t = e.getContext("2d"),
                    n = null,
                    i = null,
                    a = null;
                  return (
                    (this.drawFrame = function (s) {
                      var o,
                        u,
                        c = s.format;
                      (e.width === c.displayWidth &&
                        e.height === c.displayHeight) ||
                        ((e.width = c.displayWidth),
                        (e.height = c.displayHeight)),
                        (null !== n &&
                          n.width == c.width &&
                          n.height == c.height) ||
                          (function (e, r) {
                            for (
                              var i = (n = t.createImageData(e, r)).data,
                                a = e * r * 4,
                                s = 0;
                              s < a;
                              s += 4
                            )
                              i[s + 3] = 255;
                          })(c.width, c.height),
                        r.convertYCbCr(s, n.data);
                      var l,
                        d =
                          c.cropWidth != c.displayWidth ||
                          c.cropHeight != c.displayHeight;
                      d
                        ? (i ||
                            ((o = c.cropWidth),
                            (u = c.cropHeight),
                            ((i = document.createElement("canvas")).width = o),
                            (i.height = u),
                            (a = i.getContext("2d"))),
                          (l = a))
                        : (l = t),
                        l.putImageData(
                          n,
                          -c.cropLeft,
                          -c.cropTop,
                          c.cropLeft,
                          c.cropTop,
                          c.cropWidth,
                          c.cropHeight,
                        ),
                        d &&
                          t.drawImage(i, 0, 0, c.displayWidth, c.displayHeight);
                    }),
                    (this.clear = function () {
                      t.clearRect(0, 0, e.width, e.height);
                    }),
                    this
                  );
                }
                (i.prototype = Object.create(t.prototype)), (e.exports = i);
              })();
            },
            895: (e, t, n) => {
              !(function () {
                "use strict";
                var t = n(487),
                  r = n(826);
                function i(e) {
                  var t,
                    n,
                    a = this,
                    s = i.contextForCanvas(e);
                  if (null === s) throw Error("WebGL unavailable");
                  function o(e, t) {
                    var n = s.createShader(e);
                    if (
                      (s.shaderSource(n, t),
                      s.compileShader(n),
                      !s.getShaderParameter(n, s.COMPILE_STATUS))
                    ) {
                      var r = s.getShaderInfoLog(n);
                      throw (
                        (s.deleteShader(n),
                        Error(
                          "GL shader compilation for " + e + " failed: " + r,
                        ))
                      );
                    }
                    return n;
                  }
                  var u,
                    c,
                    l,
                    d,
                    h,
                    f,
                    p,
                    _,
                    m,
                    g,
                    b = new Float32Array([
                      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
                    ]),
                    v = {},
                    y = {},
                    w = {};
                  function k(e, t) {
                    return (v[e] && !t) || (v[e] = s.createTexture()), v[e];
                  }
                  function x(e, t, n, r, a) {
                    var o = !v[e] || t,
                      u = k(e, t);
                    if ((s.activeTexture(s.TEXTURE0), i.stripe)) {
                      var c = !v[e + "_temp"] || t,
                        l = k(e + "_temp", t);
                      s.bindTexture(s.TEXTURE_2D, l),
                        c
                          ? (s.texParameteri(
                              s.TEXTURE_2D,
                              s.TEXTURE_WRAP_S,
                              s.CLAMP_TO_EDGE,
                            ),
                            s.texParameteri(
                              s.TEXTURE_2D,
                              s.TEXTURE_WRAP_T,
                              s.CLAMP_TO_EDGE,
                            ),
                            s.texParameteri(
                              s.TEXTURE_2D,
                              s.TEXTURE_MIN_FILTER,
                              s.NEAREST,
                            ),
                            s.texParameteri(
                              s.TEXTURE_2D,
                              s.TEXTURE_MAG_FILTER,
                              s.NEAREST,
                            ),
                            s.texImage2D(
                              s.TEXTURE_2D,
                              0,
                              s.RGBA,
                              n / 4,
                              r,
                              0,
                              s.RGBA,
                              s.UNSIGNED_BYTE,
                              a,
                            ))
                          : s.texSubImage2D(
                              s.TEXTURE_2D,
                              0,
                              0,
                              0,
                              n / 4,
                              r,
                              s.RGBA,
                              s.UNSIGNED_BYTE,
                              a,
                            );
                      var d = v[e + "_stripe"],
                        h = !d || t;
                      h && (d = k(e + "_stripe", t)),
                        s.bindTexture(s.TEXTURE_2D, d),
                        h &&
                          (s.texParameteri(
                            s.TEXTURE_2D,
                            s.TEXTURE_WRAP_S,
                            s.CLAMP_TO_EDGE,
                          ),
                          s.texParameteri(
                            s.TEXTURE_2D,
                            s.TEXTURE_WRAP_T,
                            s.CLAMP_TO_EDGE,
                          ),
                          s.texParameteri(
                            s.TEXTURE_2D,
                            s.TEXTURE_MIN_FILTER,
                            s.NEAREST,
                          ),
                          s.texParameteri(
                            s.TEXTURE_2D,
                            s.TEXTURE_MAG_FILTER,
                            s.NEAREST,
                          ),
                          s.texImage2D(
                            s.TEXTURE_2D,
                            0,
                            s.RGBA,
                            n,
                            1,
                            0,
                            s.RGBA,
                            s.UNSIGNED_BYTE,
                            (function (e) {
                              if (w[e]) return w[e];
                              for (
                                var t = new Uint32Array(e), n = 0;
                                n < e;
                                n += 4
                              )
                                (t[n] = 255),
                                  (t[n + 1] = 65280),
                                  (t[n + 2] = 0xff0000),
                                  (t[n + 3] = 0xff000000);
                              return (w[e] = new Uint8Array(t.buffer));
                            })(n),
                          ));
                    } else
                      s.bindTexture(s.TEXTURE_2D, u),
                        o
                          ? (s.texParameteri(
                              s.TEXTURE_2D,
                              s.TEXTURE_WRAP_S,
                              s.CLAMP_TO_EDGE,
                            ),
                            s.texParameteri(
                              s.TEXTURE_2D,
                              s.TEXTURE_WRAP_T,
                              s.CLAMP_TO_EDGE,
                            ),
                            s.texParameteri(
                              s.TEXTURE_2D,
                              s.TEXTURE_MIN_FILTER,
                              s.LINEAR,
                            ),
                            s.texParameteri(
                              s.TEXTURE_2D,
                              s.TEXTURE_MAG_FILTER,
                              s.LINEAR,
                            ),
                            s.texImage2D(
                              s.TEXTURE_2D,
                              0,
                              s.ALPHA,
                              n,
                              r,
                              0,
                              s.ALPHA,
                              s.UNSIGNED_BYTE,
                              a,
                            ))
                          : s.texSubImage2D(
                              s.TEXTURE_2D,
                              0,
                              0,
                              0,
                              n,
                              r,
                              s.ALPHA,
                              s.UNSIGNED_BYTE,
                              a,
                            );
                  }
                  function R(e, t, r, i) {
                    var a = v[e];
                    s.useProgram(n);
                    var o = y[e];
                    (o && !t) ||
                      (s.activeTexture(s.TEXTURE0),
                      s.bindTexture(s.TEXTURE_2D, a),
                      s.texParameteri(
                        s.TEXTURE_2D,
                        s.TEXTURE_WRAP_S,
                        s.CLAMP_TO_EDGE,
                      ),
                      s.texParameteri(
                        s.TEXTURE_2D,
                        s.TEXTURE_WRAP_T,
                        s.CLAMP_TO_EDGE,
                      ),
                      s.texParameteri(
                        s.TEXTURE_2D,
                        s.TEXTURE_MIN_FILTER,
                        s.LINEAR,
                      ),
                      s.texParameteri(
                        s.TEXTURE_2D,
                        s.TEXTURE_MAG_FILTER,
                        s.LINEAR,
                      ),
                      s.texImage2D(
                        s.TEXTURE_2D,
                        0,
                        s.RGBA,
                        r,
                        i,
                        0,
                        s.RGBA,
                        s.UNSIGNED_BYTE,
                        null,
                      ),
                      (o = y[e] = s.createFramebuffer())),
                      s.bindFramebuffer(s.FRAMEBUFFER, o),
                      s.framebufferTexture2D(
                        s.FRAMEBUFFER,
                        s.COLOR_ATTACHMENT0,
                        s.TEXTURE_2D,
                        a,
                        0,
                      );
                    var p = v[e + "_temp"];
                    s.activeTexture(s.TEXTURE1),
                      s.bindTexture(s.TEXTURE_2D, p),
                      s.uniform1i(f, 1);
                    var _ = v[e + "_stripe"];
                    s.activeTexture(s.TEXTURE2),
                      s.bindTexture(s.TEXTURE_2D, _),
                      s.uniform1i(h, 2),
                      s.bindBuffer(s.ARRAY_BUFFER, u),
                      s.enableVertexAttribArray(c),
                      s.vertexAttribPointer(c, 2, s.FLOAT, !1, 0, 0),
                      s.bindBuffer(s.ARRAY_BUFFER, l),
                      s.enableVertexAttribArray(d),
                      s.vertexAttribPointer(d, 2, s.FLOAT, !1, 0, 0),
                      s.viewport(0, 0, r, i),
                      s.drawArrays(s.TRIANGLES, 0, b.length / 2),
                      s.bindFramebuffer(s.FRAMEBUFFER, null);
                  }
                  function A(e, n, r) {
                    s.activeTexture(n),
                      s.bindTexture(s.TEXTURE_2D, v[e]),
                      s.texParameteri(
                        s.TEXTURE_2D,
                        s.TEXTURE_WRAP_S,
                        s.CLAMP_TO_EDGE,
                      ),
                      s.texParameteri(
                        s.TEXTURE_2D,
                        s.TEXTURE_WRAP_T,
                        s.CLAMP_TO_EDGE,
                      ),
                      s.texParameteri(
                        s.TEXTURE_2D,
                        s.TEXTURE_MIN_FILTER,
                        s.LINEAR,
                      ),
                      s.texParameteri(
                        s.TEXTURE_2D,
                        s.TEXTURE_MAG_FILTER,
                        s.LINEAR,
                      ),
                      s.uniform1i(s.getUniformLocation(t, e), r);
                  }
                  function E(e, t) {
                    var n = o(s.VERTEX_SHADER, e),
                      r = o(s.FRAGMENT_SHADER, t),
                      i = s.createProgram();
                    if (
                      (s.attachShader(i, n),
                      s.attachShader(i, r),
                      s.linkProgram(i),
                      !s.getProgramParameter(i, s.LINK_STATUS))
                    ) {
                      var a = s.getProgramInfoLog(i);
                      throw (
                        (s.deleteProgram(i),
                        Error("GL program linking failed: " + a))
                      );
                    }
                    return i;
                  }
                  return (
                    (a.drawFrame = function (o) {
                      var v = o.format,
                        y =
                          !t ||
                          e.width !== v.displayWidth ||
                          e.height !== v.displayHeight;
                      if (
                        (y &&
                          ((e.width = v.displayWidth),
                          (e.height = v.displayHeight),
                          a.clear()),
                        t ||
                          (function () {
                            if (i.stripe) {
                              (n = E(r.vertexStripe, r.fragmentStripe)),
                                s.getAttribLocation(n, "aPosition"),
                                (l = s.createBuffer());
                              var e = new Float32Array([
                                0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
                              ]);
                              s.bindBuffer(s.ARRAY_BUFFER, l),
                                s.bufferData(s.ARRAY_BUFFER, e, s.STATIC_DRAW),
                                (d = s.getAttribLocation(
                                  n,
                                  "aTexturePosition",
                                )),
                                (h = s.getUniformLocation(n, "uStripe")),
                                (f = s.getUniformLocation(n, "uTexture"));
                            }
                            (t = E(r.vertex, r.fragment)),
                              (u = s.createBuffer()),
                              s.bindBuffer(s.ARRAY_BUFFER, u),
                              s.bufferData(s.ARRAY_BUFFER, b, s.STATIC_DRAW),
                              (c = s.getAttribLocation(t, "aPosition")),
                              (p = s.createBuffer()),
                              (_ = s.getAttribLocation(t, "aLumaPosition")),
                              (m = s.createBuffer()),
                              (g = s.getAttribLocation(t, "aChromaPosition"));
                          })(),
                        y)
                      ) {
                        var w = function (e, t, n) {
                          var r = v.cropLeft / n,
                            i = (v.cropLeft + v.cropWidth) / n,
                            a = (v.cropTop + v.cropHeight) / v.height,
                            o = v.cropTop / v.height,
                            u = new Float32Array([
                              r,
                              a,
                              i,
                              a,
                              r,
                              o,
                              r,
                              o,
                              i,
                              a,
                              i,
                              o,
                            ]);
                          s.bindBuffer(s.ARRAY_BUFFER, e),
                            s.bufferData(s.ARRAY_BUFFER, u, s.STATIC_DRAW);
                        };
                        w(p, 0, o.y.stride),
                          w(m, 0, (o.u.stride * v.width) / v.chromaWidth);
                      }
                      x("uTextureY", y, o.y.stride, v.height, o.y.bytes),
                        x(
                          "uTextureCb",
                          y,
                          o.u.stride,
                          v.chromaHeight,
                          o.u.bytes,
                        ),
                        x(
                          "uTextureCr",
                          y,
                          o.v.stride,
                          v.chromaHeight,
                          o.v.bytes,
                        ),
                        i.stripe &&
                          (R("uTextureY", y, o.y.stride, v.height),
                          R("uTextureCb", y, o.u.stride, v.chromaHeight),
                          R("uTextureCr", y, o.v.stride, v.chromaHeight)),
                        s.useProgram(t),
                        s.viewport(0, 0, e.width, e.height),
                        A("uTextureY", s.TEXTURE0, 0),
                        A("uTextureCb", s.TEXTURE1, 1),
                        A("uTextureCr", s.TEXTURE2, 2),
                        s.bindBuffer(s.ARRAY_BUFFER, u),
                        s.enableVertexAttribArray(c),
                        s.vertexAttribPointer(c, 2, s.FLOAT, !1, 0, 0),
                        s.bindBuffer(s.ARRAY_BUFFER, p),
                        s.enableVertexAttribArray(_),
                        s.vertexAttribPointer(_, 2, s.FLOAT, !1, 0, 0),
                        s.bindBuffer(s.ARRAY_BUFFER, m),
                        s.enableVertexAttribArray(g),
                        s.vertexAttribPointer(g, 2, s.FLOAT, !1, 0, 0),
                        s.drawArrays(s.TRIANGLES, 0, b.length / 2);
                    }),
                    (a.clear = function () {
                      s.viewport(0, 0, e.width, e.height),
                        s.clearColor(0, 0, 0, 0),
                        s.clear(s.COLOR_BUFFER_BIT);
                    }),
                    a.clear(),
                    a
                  );
                }
                (i.stripe = !1),
                  (i.contextForCanvas = function (e) {
                    var t = {
                      preferLowPowerToHighPerformance: !0,
                      powerPreference: "low-power",
                      failIfMajorPerformanceCaveat: !0,
                      preserveDrawingBuffer: !0,
                    };
                    return (
                      e.getContext("webgl", t) ||
                      e.getContext("experimental-webgl", t)
                    );
                  }),
                  (i.isAvailable = function () {
                    var e,
                      t = document.createElement("canvas");
                    (t.width = 1), (t.height = 1);
                    try {
                      e = i.contextForCanvas(t);
                    } catch (e) {
                      return !1;
                    }
                    if (e) {
                      var n = e.TEXTURE0,
                        r = e.createTexture(),
                        a = new Uint8Array(16),
                        s = i.stripe ? 1 : 4,
                        o = i.stripe ? e.RGBA : e.ALPHA,
                        u = i.stripe ? e.NEAREST : e.LINEAR;
                      return (
                        e.activeTexture(n),
                        e.bindTexture(e.TEXTURE_2D, r),
                        e.texParameteri(
                          e.TEXTURE_2D,
                          e.TEXTURE_WRAP_S,
                          e.CLAMP_TO_EDGE,
                        ),
                        e.texParameteri(
                          e.TEXTURE_2D,
                          e.TEXTURE_WRAP_T,
                          e.CLAMP_TO_EDGE,
                        ),
                        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, u),
                        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, u),
                        e.texImage2D(
                          e.TEXTURE_2D,
                          0,
                          o,
                          s,
                          4,
                          0,
                          o,
                          e.UNSIGNED_BYTE,
                          a,
                        ),
                        !e.getError()
                      );
                    }
                    return !1;
                  }),
                  (i.prototype = Object.create(t.prototype)),
                  (e.exports = i);
              })();
            },
            627: (e, t, n) => {
              !(function () {
                "use strict";
                var t = n(877);
                e.exports = {
                  convertYCbCr: function (e, n) {
                    var r = 0 | e.format.width,
                      i = 0 | e.format.height,
                      a = 0 | t(e.format.width / e.format.chromaWidth),
                      s = 0 | t(e.format.height / e.format.chromaHeight),
                      o = e.y.bytes,
                      u = e.u.bytes,
                      c = e.v.bytes,
                      l = 0 | e.y.stride,
                      d = 0 | e.u.stride,
                      h = 0 | e.v.stride,
                      f = r << 2,
                      p = 0,
                      _ = 0,
                      m = 0,
                      g = 0,
                      b = 0,
                      v = 0,
                      y = 0,
                      w = 0,
                      k = 0,
                      x = 0,
                      R = 0,
                      A = 0,
                      E = 0,
                      T = 0,
                      V = 0,
                      C = 0,
                      D = 0,
                      F = 0;
                    if (1 == a && 1 == s)
                      for (y = 0, w = f, F = 0, C = 0; C < i; C += 2) {
                        for (
                          m = ((_ = (C * l) | 0) + l) | 0,
                            g = (F * d) | 0,
                            b = (F * h) | 0,
                            V = 0;
                          V < r;
                          V += 2
                        )
                          (k = 0 | u[g++]),
                            (A = (((409 * (x = 0 | c[b++])) | 0) - 57088) | 0),
                            (E =
                              (((100 * k) | 0) + ((208 * x) | 0) - 34816) | 0),
                            (T = (((516 * k) | 0) - 70912) | 0),
                            (R = (298 * o[_++]) | 0),
                            (n[y] = (R + A) >> 8),
                            (n[y + 1] = (R - E) >> 8),
                            (n[y + 2] = (R + T) >> 8),
                            (y += 4),
                            (R = (298 * o[_++]) | 0),
                            (n[y] = (R + A) >> 8),
                            (n[y + 1] = (R - E) >> 8),
                            (n[y + 2] = (R + T) >> 8),
                            (y += 4),
                            (R = (298 * o[m++]) | 0),
                            (n[w] = (R + A) >> 8),
                            (n[w + 1] = (R - E) >> 8),
                            (n[w + 2] = (R + T) >> 8),
                            (w += 4),
                            (R = (298 * o[m++]) | 0),
                            (n[w] = (R + A) >> 8),
                            (n[w + 1] = (R - E) >> 8),
                            (n[w + 2] = (R + T) >> 8),
                            (w += 4);
                        (y += f), (w += f), F++;
                      }
                    else
                      for (v = 0, C = 0; C < i; C++)
                        for (
                          D = 0,
                            p = (C * l) | 0,
                            g = ((F = C >> s) * d) | 0,
                            b = (F * h) | 0,
                            V = 0;
                          V < r;
                          V++
                        )
                          (k = 0 | u[g + (D = V >> a)]),
                            (A =
                              (((409 * (x = 0 | c[b + D])) | 0) - 57088) | 0),
                            (E =
                              (((100 * k) | 0) + ((208 * x) | 0) - 34816) | 0),
                            (T = (((516 * k) | 0) - 70912) | 0),
                            (R = (298 * o[p++]) | 0),
                            (n[v] = (R + A) >> 8),
                            (n[v + 1] = (R - E) >> 8),
                            (n[v + 2] = (R + T) >> 8),
                            (v += 4);
                  },
                };
              })();
            },
            877: (e) => {
              !(function () {
                "use strict";
                e.exports = function (e) {
                  for (var t = 0, n = e >> 1; 0 != n; ) (n >>= 1), t++;
                  if (e !== 1 << t)
                    throw (
                      "chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got " +
                      e
                    );
                  return t;
                };
              })();
            },
            731: (e, t, n) => {
              !(function () {
                "use strict";
                var t = n(487),
                  r = n(926),
                  i = n(895);
                e.exports = {
                  FrameSink: t,
                  SoftwareFrameSink: r,
                  WebGLFrameSink: i,
                  attach: function (e, t) {
                    return (
                      "webGL" in (t = t || {}) ? t.webGL : i.isAvailable()
                    )
                      ? new i(e, t)
                      : new r(e, t);
                  },
                };
              })();
            },
          },
          t = {};
        function n(r) {
          var i = t[r];
          if (void 0 !== i) return i.exports;
          var a = (t[r] = { exports: {} });
          return e[r](a, a.exports, n), a.exports;
        }
        (n.d = (e, t) => {
          for (var r in t)
            n.o(t, r) &&
              !n.o(e, r) &&
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
          (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (n.r = (e) => {
            "u" > typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          });
        var r = {};
        return (
          (() => {
            "use strict";
            var e = n(318);
            Object.defineProperty(r, "__esModule", { value: !0 }),
              Object.defineProperty(r, "OGVCompat", {
                enumerable: !0,
                get: function () {
                  return i.default;
                },
              }),
              Object.defineProperty(r, "OGVLoader", {
                enumerable: !0,
                get: function () {
                  return a.default;
                },
              }),
              Object.defineProperty(r, "OGVMediaError", {
                enumerable: !0,
                get: function () {
                  return s.default;
                },
              }),
              Object.defineProperty(r, "OGVMediaType", {
                enumerable: !0,
                get: function () {
                  return o.default;
                },
              }),
              Object.defineProperty(r, "OGVPlayer", {
                enumerable: !0,
                get: function () {
                  return u.default;
                },
              }),
              Object.defineProperty(r, "OGVTimeRanges", {
                enumerable: !0,
                get: function () {
                  return c.default;
                },
              }),
              (r.OGVVersion = void 0);
            var t = e(n(8)),
              i = e(n(523)),
              a = e(n(964)),
              s = e(n(759)),
              o = e(n(278)),
              u = e(n(869)),
              c = e(n(168)),
              l = "1.8.9-20220406232920-cb5f7ff";
            (r.OGVVersion = l),
              "object" ===
                ("u" < typeof window ? "undefined" : (0, t.default)(window)) &&
                ((window.OGVCompat = i.default),
                (window.OGVLoader = a.default),
                (window.OGVMediaError = s.default),
                (window.OGVMediaType = o.default),
                (window.OGVTimeRanges = c.default),
                (window.OGVPlayer = u.default),
                (window.OGVVersion = l));
          })(),
          r
        );
      })();
    },
    335033(e, t, n) {
      e.exports = n(108110);
    },
    352944(e, t, n) {
      "use strict";
      var r;
      function i() {
        return (
          r ||
            ((r = new Image()).src =
              "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
          r
        );
      }
      n.d(t, { n: () => i });
    },
    619740(e, t, n) {
      "use strict";
      n.d(t, { j: () => s });
      var r = n(914707),
        i = n(964966);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t, n) {
        var s, o, u, c, l, d;
        return (
          (s =
            e ||
            function () {
              return {};
            }),
          (o = function () {
            return n.reconnect();
          }),
          (l = (c =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((u = (0, i.F)(t, s, o))) ||
            (function (e) {
              var t,
                n,
                r =
                  null == e
                    ? null
                    : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
              if (null != r) {
                var i = [],
                  a = !0,
                  s = !1;
                try {
                  for (
                    r = r.call(e);
                    !(a = (t = r.next()).done) &&
                    (i.push(t.value), 2 !== i.length);
                    a = !0
                  );
                } catch (e) {
                  (s = !0), (n = e);
                } finally {
                  try {
                    a || null == r.return || r.return();
                  } finally {
                    if (s) throw n;
                  }
                }
                return i;
              }
            })(u) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return a(e, 2);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t)
                )
                  return Array.from(e);
                if (
                  "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                )
                  return a(e, 2);
              }
            })(u) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })())[0]),
          (d = c[1]),
          (0, r.E)(
            function () {
              var e = t.getHandlerId();
              if (null != e)
                return t.subscribeToStateChange(d, { handlerIds: [e] });
            },
            [t, d],
          ),
          l
        );
      }
    },
    930235(e, t, n) {
      "use strict";
      n.d(t, { i: () => m });
      var r = n(72867),
        i = n(914707),
        a = n(582128);
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var u = (function () {
          var e;
          function t(e, n, r) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            o(this, "spec", void 0),
              o(this, "monitor", void 0),
              o(this, "connector", void 0),
              (this.spec = e),
              (this.monitor = n),
              (this.connector = r);
          }
          return (
            (e = [
              {
                key: "beginDrag",
                value: function () {
                  var e,
                    t = this.spec,
                    n = this.monitor;
                  return null !=
                    (e =
                      "object" === s(t.item)
                        ? t.item
                        : "function" == typeof t.item
                          ? t.item(n)
                          : {})
                    ? e
                    : null;
                },
              },
              {
                key: "canDrag",
                value: function () {
                  var e = this.spec,
                    t = this.monitor;
                  return "boolean" == typeof e.canDrag
                    ? e.canDrag
                    : "function" != typeof e.canDrag || e.canDrag(t);
                },
              },
              {
                key: "isDragging",
                value: function (e, t) {
                  var n = this.spec,
                    r = this.monitor,
                    i = n.isDragging;
                  return i ? i(r) : t === e.getSourceId();
                },
              },
              {
                key: "endDrag",
                value: function () {
                  var e = this.spec,
                    t = this.monitor,
                    n = this.connector,
                    r = e.end;
                  r && r(t.getItem(), t), n.reconnect();
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(t.prototype, e),
            t
          );
        })(),
        c = n(225995),
        l = n(321733);
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var h = n(25444),
        f = n(894189),
        p = n(875428),
        _ = n(619740);
      function m(e, t) {
        var n,
          s,
          o,
          m,
          g,
          b,
          v,
          y,
          w,
          k = (0, h.I)(e, t);
        (0, l.V)(
          !k.begin,
          "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
        );
        var x =
            ((n = (0, c.u)()),
            (0, a.useMemo)(
              function () {
                return new f.G(n);
              },
              [n],
            )),
          R =
            ((s = k.options),
            (o = k.previewOptions),
            (m = (0, c.u)()),
            (g = (0, a.useMemo)(
              function () {
                return new p.b(m.getBackend());
              },
              [m],
            )),
            (0, i.E)(
              function () {
                return (
                  (g.dragSourceOptions = s || null),
                  g.reconnect(),
                  function () {
                    return g.disconnectDragSource();
                  }
                );
              },
              [g, s],
            ),
            (0, i.E)(
              function () {
                return (
                  (g.dragPreviewOptions = o || null),
                  g.reconnect(),
                  function () {
                    return g.disconnectDragPreview();
                  }
                );
              },
              [g, o],
            ),
            g);
        return (
          (b = (0, c.u)()),
          (v = (0, a.useMemo)(
            function () {
              return new u(k, x, R);
            },
            [x, R],
          )),
          (0, a.useEffect)(
            function () {
              v.spec = k;
            },
            [k],
          ),
          (y = v),
          (w = (0, a.useMemo)(
            function () {
              var e = k.type;
              return (0, l.V)(null != e, "spec.type must be defined"), e;
            },
            [k],
          )),
          (0, i.E)(
            function () {
              if (null != w) {
                var e,
                  t =
                    (function (e) {
                      if (Array.isArray(e)) return e;
                    })((e = (0, r.V)(w, y, b))) ||
                    (function (e) {
                      var t,
                        n,
                        r =
                          null == e
                            ? null
                            : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                              e["@@iterator"];
                      if (null != r) {
                        var i = [],
                          a = !0,
                          s = !1;
                        try {
                          for (
                            r = r.call(e);
                            !(a = (t = r.next()).done) &&
                            (i.push(t.value), 2 !== i.length);
                            a = !0
                          );
                        } catch (e) {
                          (s = !0), (n = e);
                        } finally {
                          try {
                            a || null == r.return || r.return();
                          } finally {
                            if (s) throw n;
                          }
                        }
                        return i;
                      }
                    })(e) ||
                    (function (e) {
                      if (e) {
                        if ("string" == typeof e) return d(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (
                          ("Object" === t &&
                            e.constructor &&
                            (t = e.constructor.name),
                          "Map" === t || "Set" === t)
                        )
                          return Array.from(e);
                        if (
                          "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        )
                          return d(e, 2);
                      }
                    })(e) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })(),
                  n = t[0],
                  i = t[1];
                return x.receiveHandlerId(n), R.receiveHandlerId(n), i;
              }
            },
            [b, x, R, y, w],
          ),
          [
            (0, _.j)(k.collect, x, R),
            (0, a.useMemo)(
              function () {
                return R.hooks.dragSource();
              },
              [R],
            ),
            (0, a.useMemo)(
              function () {
                return R.hooks.dragPreview();
              },
              [R],
            ),
          ]
        );
      }
    },
    651300(e, t, n) {
      "use strict";
      n.d(t, { H: () => _ });
      var r = n(72867),
        i = n(225995),
        a = n(914707),
        s = n(321733),
        o = n(582128);
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var c = (function () {
        var e;
        function t(e, n) {
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          u(this, "spec", void 0),
            u(this, "monitor", void 0),
            (this.spec = e),
            (this.monitor = n);
        }
        return (
          (e = [
            {
              key: "canDrop",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                return !e.canDrop || e.canDrop(t.getItem(), t);
              },
            },
            {
              key: "hover",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                e.hover && e.hover(t.getItem(), t);
              },
            },
            {
              key: "drop",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                if (e.drop) return e.drop(t.getItem(), t);
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(t.prototype, e),
          t
        );
      })();
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var d = n(25444),
        h = n(682012),
        f = n(207220),
        p = n(619740);
      function _(e, t) {
        var n,
          u,
          _,
          m,
          g,
          b,
          v,
          y,
          w,
          k = (0, d.I)(e, t),
          x =
            ((n = (0, i.u)()),
            (0, o.useMemo)(
              function () {
                return new h.b(n);
              },
              [n],
            )),
          R =
            ((u = k.options),
            (_ = (0, i.u)()),
            (m = (0, o.useMemo)(
              function () {
                return new f.P(_.getBackend());
              },
              [_],
            )),
            (0, a.E)(
              function () {
                return (
                  (m.dropTargetOptions = u || null),
                  m.reconnect(),
                  function () {
                    return m.disconnectDropTarget();
                  }
                );
              },
              [u],
            ),
            m);
        return (
          (g = (0, i.u)()),
          (b = (0, o.useMemo)(
            function () {
              return new c(k, x);
            },
            [x],
          )),
          (0, o.useEffect)(
            function () {
              b.spec = k;
            },
            [k],
          ),
          (v = b),
          (y = k.accept),
          (w = (0, o.useMemo)(
            function () {
              return (
                (0, s.V)(null != k.accept, "accept must be defined"),
                Array.isArray(y) ? y : [y]
              );
            },
            [y],
          )),
          (0, a.E)(
            function () {
              var e,
                t =
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })((e = (0, r.l)(w, v, g))) ||
                  (function (e) {
                    var t,
                      n,
                      r =
                        null == e
                          ? null
                          : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                            e["@@iterator"];
                    if (null != r) {
                      var i = [],
                        a = !0,
                        s = !1;
                      try {
                        for (
                          r = r.call(e);
                          !(a = (t = r.next()).done) &&
                          (i.push(t.value), 2 !== i.length);
                          a = !0
                        );
                      } catch (e) {
                        (s = !0), (n = e);
                      } finally {
                        try {
                          a || null == r.return || r.return();
                        } finally {
                          if (s) throw n;
                        }
                      }
                      return i;
                    }
                  })(e) ||
                  (function (e) {
                    if (e) {
                      if ("string" == typeof e) return l(e, 2);
                      var t = Object.prototype.toString.call(e).slice(8, -1);
                      if (
                        ("Object" === t &&
                          e.constructor &&
                          (t = e.constructor.name),
                        "Map" === t || "Set" === t)
                      )
                        return Array.from(e);
                      if (
                        "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      )
                        return l(e, 2);
                    }
                  })(e) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })(),
                n = t[0],
                i = t[1];
              return x.receiveHandlerId(n), R.receiveHandlerId(n), i;
            },
            [
              g,
              x,
              v,
              R,
              w
                .map(function (e) {
                  return e.toString();
                })
                .join("|"),
            ],
          ),
          [
            (0, p.j)(k.collect, x, R),
            (0, o.useMemo)(
              function () {
                return R.hooks.dropTarget();
              },
              [R],
            ),
          ]
        );
      }
    },
    25444(e, t, n) {
      "use strict";
      n.d(t, { I: () => a });
      var r = n(582128);
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t) {
        var n,
          a =
            (function (e) {
              if (Array.isArray(e)) return i(e);
            })((n = t || [])) ||
            (function (e) {
              if (
                ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(n) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return i(e, void 0);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t)
                )
                  return Array.from(e);
                if (
                  "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                )
                  return i(e, void 0);
              }
            })(n) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })();
        return (
          null == t && "function" != typeof e && a.push(e),
          (0, r.useMemo)(function () {
            return "function" == typeof e ? e() : e;
          }, a)
        );
      }
    },
    894189(e, t, n) {
      "use strict";
      n.d(t, { G: () => o });
      var r = n(321733);
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var a = !1,
        s = !1,
        o = (function () {
          var e;
          function t(e) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            i(this, "internalMonitor", void 0),
              i(this, "sourceId", null),
              (this.internalMonitor = e.getMonitor());
          }
          return (
            (e = [
              {
                key: "receiveHandlerId",
                value: function (e) {
                  this.sourceId = e;
                },
              },
              {
                key: "getHandlerId",
                value: function () {
                  return this.sourceId;
                },
              },
              {
                key: "canDrag",
                value: function () {
                  (0, r.V)(
                    !a,
                    "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                  );
                  try {
                    return (
                      (a = !0),
                      this.internalMonitor.canDragSource(this.sourceId)
                    );
                  } finally {
                    a = !1;
                  }
                },
              },
              {
                key: "isDragging",
                value: function () {
                  if (!this.sourceId) return !1;
                  (0, r.V)(
                    !s,
                    "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                  );
                  try {
                    return (
                      (s = !0),
                      this.internalMonitor.isDraggingSource(this.sourceId)
                    );
                  } finally {
                    s = !1;
                  }
                },
              },
              {
                key: "subscribeToStateChange",
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: "isDraggingSource",
                value: function (e) {
                  return this.internalMonitor.isDraggingSource(e);
                },
              },
              {
                key: "isOverTarget",
                value: function (e, t) {
                  return this.internalMonitor.isOverTarget(e, t);
                },
              },
              {
                key: "getTargetIds",
                value: function () {
                  return this.internalMonitor.getTargetIds();
                },
              },
              {
                key: "isSourcePublic",
                value: function () {
                  return this.internalMonitor.isSourcePublic();
                },
              },
              {
                key: "getSourceId",
                value: function () {
                  return this.internalMonitor.getSourceId();
                },
              },
              {
                key: "subscribeToOffsetChange",
                value: function (e) {
                  return this.internalMonitor.subscribeToOffsetChange(e);
                },
              },
              {
                key: "canDragSource",
                value: function (e) {
                  return this.internalMonitor.canDragSource(e);
                },
              },
              {
                key: "canDropOnTarget",
                value: function (e) {
                  return this.internalMonitor.canDropOnTarget(e);
                },
              },
              {
                key: "getItemType",
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: "getItem",
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: "getDropResult",
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: "didDrop",
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: "getInitialClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: "getInitialSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: "getSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: "getClientOffset",
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: "getDifferenceFromInitialOffset",
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(t.prototype, e),
            t
          );
        })();
    },
    682012(e, t, n) {
      "use strict";
      n.d(t, { b: () => s });
      var r = n(321733);
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var a = !1,
        s = (function () {
          var e;
          function t(e) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            i(this, "internalMonitor", void 0),
              i(this, "targetId", null),
              (this.internalMonitor = e.getMonitor());
          }
          return (
            (e = [
              {
                key: "receiveHandlerId",
                value: function (e) {
                  this.targetId = e;
                },
              },
              {
                key: "getHandlerId",
                value: function () {
                  return this.targetId;
                },
              },
              {
                key: "subscribeToStateChange",
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: "canDrop",
                value: function () {
                  if (!this.targetId) return !1;
                  (0, r.V)(
                    !a,
                    "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor",
                  );
                  try {
                    return (
                      (a = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    a = !1;
                  }
                },
              },
              {
                key: "isOver",
                value: function (e) {
                  return (
                    !!this.targetId &&
                    this.internalMonitor.isOverTarget(this.targetId, e)
                  );
                },
              },
              {
                key: "getItemType",
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: "getItem",
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: "getDropResult",
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: "didDrop",
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: "getInitialClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: "getInitialSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: "getSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: "getClientOffset",
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: "getDifferenceFromInitialOffset",
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(t.prototype, e),
            t
          );
        })();
    },
    875428(e, t, n) {
      "use strict";
      n.d(t, { b: () => o });
      var r = n(186615),
        i = n(728433),
        a = n(816885);
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var o = (function () {
        var e;
        function t(e) {
          var n = this;
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          s(
            this,
            "hooks",
            (0, r.i)({
              dragSource: function (e, t) {
                n.clearDragSource(),
                  (n.dragSourceOptions = t || null),
                  (0, i.i)(e) ? (n.dragSourceRef = e) : (n.dragSourceNode = e),
                  n.reconnectDragSource();
              },
              dragPreview: function (e, t) {
                n.clearDragPreview(),
                  (n.dragPreviewOptions = t || null),
                  (0, i.i)(e)
                    ? (n.dragPreviewRef = e)
                    : (n.dragPreviewNode = e),
                  n.reconnectDragPreview();
              },
            }),
          ),
            s(this, "handlerId", null),
            s(this, "dragSourceRef", null),
            s(this, "dragSourceNode", void 0),
            s(this, "dragSourceOptionsInternal", null),
            s(this, "dragSourceUnsubscribe", void 0),
            s(this, "dragPreviewRef", null),
            s(this, "dragPreviewNode", void 0),
            s(this, "dragPreviewOptionsInternal", null),
            s(this, "dragPreviewUnsubscribe", void 0),
            s(this, "lastConnectedHandlerId", null),
            s(this, "lastConnectedDragSource", null),
            s(this, "lastConnectedDragSourceOptions", null),
            s(this, "lastConnectedDragPreview", null),
            s(this, "lastConnectedDragPreviewOptions", null),
            s(this, "backend", void 0),
            (this.backend = e);
        }
        return (
          (e = [
            {
              key: "receiveHandlerId",
              value: function (e) {
                this.handlerId !== e &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: "connectTarget",
              get: function () {
                return this.dragSource;
              },
            },
            {
              key: "dragSourceOptions",
              get: function () {
                return this.dragSourceOptionsInternal;
              },
              set: function (e) {
                this.dragSourceOptionsInternal = e;
              },
            },
            {
              key: "dragPreviewOptions",
              get: function () {
                return this.dragPreviewOptionsInternal;
              },
              set: function (e) {
                this.dragPreviewOptionsInternal = e;
              },
            },
            {
              key: "reconnect",
              value: function () {
                this.reconnectDragSource(), this.reconnectDragPreview();
              },
            },
            {
              key: "reconnectDragSource",
              value: function () {
                var e = this.dragSource,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragSourceChange() ||
                    this.didDragSourceOptionsChange();
                if ((t && this.disconnectDragSource(), this.handlerId)) {
                  if (!e) {
                    this.lastConnectedDragSource = e;
                    return;
                  }
                  t &&
                    ((this.lastConnectedHandlerId = this.handlerId),
                    (this.lastConnectedDragSource = e),
                    (this.lastConnectedDragSourceOptions =
                      this.dragSourceOptions),
                    (this.dragSourceUnsubscribe =
                      this.backend.connectDragSource(
                        this.handlerId,
                        e,
                        this.dragSourceOptions,
                      )));
                }
              },
            },
            {
              key: "reconnectDragPreview",
              value: function () {
                var e = this.dragPreview,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragPreviewChange() ||
                    this.didDragPreviewOptionsChange();
                if ((t && this.disconnectDragPreview(), this.handlerId)) {
                  if (!e) {
                    this.lastConnectedDragPreview = e;
                    return;
                  }
                  t &&
                    ((this.lastConnectedHandlerId = this.handlerId),
                    (this.lastConnectedDragPreview = e),
                    (this.lastConnectedDragPreviewOptions =
                      this.dragPreviewOptions),
                    (this.dragPreviewUnsubscribe =
                      this.backend.connectDragPreview(
                        this.handlerId,
                        e,
                        this.dragPreviewOptions,
                      )));
                }
              },
            },
            {
              key: "didHandlerIdChange",
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: "didConnectedDragSourceChange",
              value: function () {
                return this.lastConnectedDragSource !== this.dragSource;
              },
            },
            {
              key: "didConnectedDragPreviewChange",
              value: function () {
                return this.lastConnectedDragPreview !== this.dragPreview;
              },
            },
            {
              key: "didDragSourceOptionsChange",
              value: function () {
                return !(0, a.b)(
                  this.lastConnectedDragSourceOptions,
                  this.dragSourceOptions,
                );
              },
            },
            {
              key: "didDragPreviewOptionsChange",
              value: function () {
                return !(0, a.b)(
                  this.lastConnectedDragPreviewOptions,
                  this.dragPreviewOptions,
                );
              },
            },
            {
              key: "disconnectDragSource",
              value: function () {
                this.dragSourceUnsubscribe &&
                  (this.dragSourceUnsubscribe(),
                  (this.dragSourceUnsubscribe = void 0));
              },
            },
            {
              key: "disconnectDragPreview",
              value: function () {
                this.dragPreviewUnsubscribe &&
                  (this.dragPreviewUnsubscribe(),
                  (this.dragPreviewUnsubscribe = void 0),
                  (this.dragPreviewNode = null),
                  (this.dragPreviewRef = null));
              },
            },
            {
              key: "dragSource",
              get: function () {
                return (
                  this.dragSourceNode ||
                  (this.dragSourceRef && this.dragSourceRef.current)
                );
              },
            },
            {
              key: "dragPreview",
              get: function () {
                return (
                  this.dragPreviewNode ||
                  (this.dragPreviewRef && this.dragPreviewRef.current)
                );
              },
            },
            {
              key: "clearDragSource",
              value: function () {
                (this.dragSourceNode = null), (this.dragSourceRef = null);
              },
            },
            {
              key: "clearDragPreview",
              value: function () {
                (this.dragPreviewNode = null), (this.dragPreviewRef = null);
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(t.prototype, e),
          t
        );
      })();
    },
    207220(e, t, n) {
      "use strict";
      n.d(t, { P: () => o });
      var r = n(816885),
        i = n(186615),
        a = n(728433);
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var o = (function () {
        var e;
        function t(e) {
          var n = this;
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          s(
            this,
            "hooks",
            (0, i.i)({
              dropTarget: function (e, t) {
                n.clearDropTarget(),
                  (n.dropTargetOptions = t),
                  (0, a.i)(e) ? (n.dropTargetRef = e) : (n.dropTargetNode = e),
                  n.reconnect();
              },
            }),
          ),
            s(this, "handlerId", null),
            s(this, "dropTargetRef", null),
            s(this, "dropTargetNode", void 0),
            s(this, "dropTargetOptionsInternal", null),
            s(this, "unsubscribeDropTarget", void 0),
            s(this, "lastConnectedHandlerId", null),
            s(this, "lastConnectedDropTarget", null),
            s(this, "lastConnectedDropTargetOptions", null),
            s(this, "backend", void 0),
            (this.backend = e);
        }
        return (
          (e = [
            {
              key: "connectTarget",
              get: function () {
                return this.dropTarget;
              },
            },
            {
              key: "reconnect",
              value: function () {
                var e =
                  this.didHandlerIdChange() ||
                  this.didDropTargetChange() ||
                  this.didOptionsChange();
                e && this.disconnectDropTarget();
                var t = this.dropTarget;
                if (this.handlerId) {
                  if (!t) {
                    this.lastConnectedDropTarget = t;
                    return;
                  }
                  e &&
                    ((this.lastConnectedHandlerId = this.handlerId),
                    (this.lastConnectedDropTarget = t),
                    (this.lastConnectedDropTargetOptions =
                      this.dropTargetOptions),
                    (this.unsubscribeDropTarget =
                      this.backend.connectDropTarget(
                        this.handlerId,
                        t,
                        this.dropTargetOptions,
                      )));
                }
              },
            },
            {
              key: "receiveHandlerId",
              value: function (e) {
                e !== this.handlerId &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: "dropTargetOptions",
              get: function () {
                return this.dropTargetOptionsInternal;
              },
              set: function (e) {
                this.dropTargetOptionsInternal = e;
              },
            },
            {
              key: "didHandlerIdChange",
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: "didDropTargetChange",
              value: function () {
                return this.lastConnectedDropTarget !== this.dropTarget;
              },
            },
            {
              key: "didOptionsChange",
              value: function () {
                return !(0, r.b)(
                  this.lastConnectedDropTargetOptions,
                  this.dropTargetOptions,
                );
              },
            },
            {
              key: "disconnectDropTarget",
              value: function () {
                this.unsubscribeDropTarget &&
                  (this.unsubscribeDropTarget(),
                  (this.unsubscribeDropTarget = void 0));
              },
            },
            {
              key: "dropTarget",
              get: function () {
                return (
                  this.dropTargetNode ||
                  (this.dropTargetRef && this.dropTargetRef.current)
                );
              },
            },
            {
              key: "clearDropTarget",
              value: function () {
                (this.dropTargetRef = null), (this.dropTargetNode = null);
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(t.prototype, e),
          t
        );
      })();
    },
    728433(e, t, n) {
      "use strict";
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e) {
        return (
          null !== e &&
          "object" === r(e) &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      n.d(t, { i: () => i });
    },
    72867(e, t, n) {
      "use strict";
      function r(e, t, n) {
        var r = n.getRegistry(),
          i = r.addTarget(e, t);
        return [
          i,
          function () {
            return r.removeTarget(i);
          },
        ];
      }
      function i(e, t, n) {
        var r = n.getRegistry(),
          i = r.addSource(e, t);
        return [
          i,
          function () {
            return r.removeSource(i);
          },
        ];
      }
      n.d(t, { V: () => i, l: () => r });
    },
    186615(e, t, n) {
      "use strict";
      n.d(t, { i: () => a });
      var r = n(321733),
        i = n(582128);
      function a(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            var a = e[n];
            if (n.endsWith("Ref")) t[n] = e[n];
            else {
              var o = function () {
                var e,
                  t,
                  n,
                  o =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  u =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                if (!(0, i.isValidElement)(o)) return a(o, u), o;
                if ("string" != typeof o.type) {
                  var c = o.type.displayName || o.type.name || "the component";
                  throw Error(
                    "Only native element nodes can now be passed to React DnD connectors." +
                      "You can either wrap ".concat(
                        c,
                        " into a <div>, or turn it into a ",
                      ) +
                      "drag source or a drop target itself.",
                  );
                }
                return (
                  (e = o),
                  (t = u
                    ? function (e) {
                        return a(e, u);
                      }
                    : a),
                  (n = e.ref),
                  ((0, r.V)(
                    "string" != typeof n,
                    "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs",
                  ),
                  n)
                    ? (0, i.cloneElement)(e, {
                        ref: function (e) {
                          s(n, e), s(t, e);
                        },
                      })
                    : (0, i.cloneElement)(e, { ref: t })
                );
              };
              t[n] = function () {
                return o;
              };
            }
          }),
          t
        );
      }
      function s(e, t) {
        "function" == typeof e ? e(t) : (e.current = t);
      }
    },
    104681(e, t, n) {
      "use strict";
      function r(e) {
        return "object" == typeof e && null != e && 1 === e.nodeType;
      }
      function i(e, t) {
        return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
      }
      function a(e, t) {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
          var n,
            r = getComputedStyle(e, null);
          return (
            i(r.overflowY, t) ||
            i(r.overflowX, t) ||
            (!!(n = (function (e) {
              if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
              try {
                return e.ownerDocument.defaultView.frameElement;
              } catch (e) {
                return null;
              }
            })(e)) &&
              (n.clientHeight < e.scrollHeight ||
                n.clientWidth < e.scrollWidth))
          );
        }
        return !1;
      }
      function s(e, t, n, r, i, a, s, o) {
        return (a < e && s > t) || (a > e && s < t)
          ? 0
          : (a <= e && o <= n) || (s >= t && o >= n)
            ? a - e - r
            : (s > t && o < n) || (a < e && o > n)
              ? s - t + i
              : 0;
      }
      n.d(t, { A: () => c });
      var o = function (e, t) {
        var n = window,
          i = t.scrollMode,
          o = t.block,
          u = t.inline,
          c = t.boundary,
          l = t.skipOverflowHiddenElements,
          d =
            "function" == typeof c
              ? c
              : function (e) {
                  return e !== c;
                };
        if (!r(e)) throw TypeError("Invalid target");
        for (
          var h,
            f,
            p = document.scrollingElement || document.documentElement,
            _ = [],
            m = e;
          r(m) && d(m);

        ) {
          if (
            (m =
              null == (f = (h = m).parentElement)
                ? h.getRootNode().host || null
                : f) === p
          ) {
            _.push(m);
            break;
          }
          (null != m &&
            m === document.body &&
            a(m) &&
            !a(document.documentElement)) ||
            (null != m && a(m, l) && _.push(m));
        }
        for (
          var g = n.visualViewport ? n.visualViewport.width : innerWidth,
            b = n.visualViewport ? n.visualViewport.height : innerHeight,
            v = window.scrollX || pageXOffset,
            y = window.scrollY || pageYOffset,
            w = e.getBoundingClientRect(),
            k = w.height,
            x = w.width,
            R = w.top,
            A = w.right,
            E = w.bottom,
            T = w.left,
            V =
              "start" === o || "nearest" === o
                ? R
                : "end" === o
                  ? E
                  : R + k / 2,
            C = "center" === u ? T + x / 2 : "end" === u ? A : T,
            D = [],
            F = 0;
          F < _.length;
          F++
        ) {
          var P = _[F],
            S = P.getBoundingClientRect(),
            L = S.height,
            I = S.width,
            O = S.top,
            M = S.right,
            B = S.bottom,
            U = S.left;
          if (
            "if-needed" === i &&
            R >= 0 &&
            T >= 0 &&
            E <= b &&
            A <= g &&
            R >= O &&
            E <= B &&
            T >= U &&
            A <= M
          )
            break;
          var j = getComputedStyle(P),
            N = parseInt(j.borderLeftWidth, 10),
            z = parseInt(j.borderTopWidth, 10),
            G = parseInt(j.borderRightWidth, 10),
            W = parseInt(j.borderBottomWidth, 10),
            H = 0,
            q = 0,
            J = "offsetWidth" in P ? P.offsetWidth - P.clientWidth - N - G : 0,
            K =
              "offsetHeight" in P ? P.offsetHeight - P.clientHeight - z - W : 0,
            X =
              "offsetWidth" in P
                ? 0 === P.offsetWidth
                  ? 0
                  : I / P.offsetWidth
                : 0,
            Z =
              "offsetHeight" in P
                ? 0 === P.offsetHeight
                  ? 0
                  : L / P.offsetHeight
                : 0;
          if (p === P)
            (H =
              "start" === o
                ? V
                : "end" === o
                  ? V - b
                  : "nearest" === o
                    ? s(y, y + b, b, z, W, y + V, y + V + k, k)
                    : V - b / 2),
              (q =
                "start" === u
                  ? C
                  : "center" === u
                    ? C - g / 2
                    : "end" === u
                      ? C - g
                      : s(v, v + g, g, N, G, v + C, v + C + x, x)),
              (H = Math.max(0, H + y)),
              (q = Math.max(0, q + v));
          else {
            (H =
              "start" === o
                ? V - O - z
                : "end" === o
                  ? V - B + W + K
                  : "nearest" === o
                    ? s(O, B, L, z, W + K, V, V + k, k)
                    : V - (O + L / 2) + K / 2),
              (q =
                "start" === u
                  ? C - U - N
                  : "center" === u
                    ? C - (U + I / 2) + J / 2
                    : "end" === u
                      ? C - M + G + J
                      : s(U, M, I, N, G + J, C, C + x, x));
            var Y = P.scrollLeft,
              $ = P.scrollTop;
            (V +=
              $ -
              (H = Math.max(
                0,
                Math.min($ + H / Z, P.scrollHeight - L / Z + K),
              ))),
              (C +=
                Y -
                (q = Math.max(
                  0,
                  Math.min(Y + q / X, P.scrollWidth - I / X + J),
                )));
          }
          D.push({ el: P, top: H, left: q });
        }
        return D;
      };
      function u(e) {
        return e === Object(e) && 0 !== Object.keys(e).length;
      }
      let c = function (e, t) {
        var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
        if (u(t) && "function" == typeof t.behavior)
          return t.behavior(n ? o(e, t) : []);
        if (n) {
          var r,
            i,
            a,
            s =
              !1 === t
                ? { block: "end", inline: "nearest" }
                : u(t)
                  ? t
                  : { block: "start", inline: "nearest" };
          return (
            (r = o(e, s)),
            void 0 === (i = s.behavior) && (i = "auto"),
            (a = "scrollBehavior" in document.body.style),
            void r.forEach(function (e) {
              var t = e.el,
                n = e.top,
                r = e.left;
              t.scroll && a
                ? t.scroll({ top: n, left: r, behavior: i })
                : ((t.scrollTop = n), (t.scrollLeft = r));
            })
          );
        }
      };
    },
    722872(e) {
      "use strict";
      var t = {
        linear: function (e, t, n, r) {
          return ((n - t) * e) / r + t;
        },
        easeInQuad: function (e, t, n, r) {
          return (n - t) * (e /= r) * e + t;
        },
        easeOutQuad: function (e, t, n, r) {
          return -(n - t) * (e /= r) * (e - 2) + t;
        },
        easeInOutQuad: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e + t
            : (-i / 2) * (--e * (e - 2) - 1) + t;
        },
        easeInCubic: function (e, t, n, r) {
          return (n - t) * (e /= r) * e * e + t;
        },
        easeOutCubic: function (e, t, n, r) {
          return (n - t) * ((e = e / r - 1) * e * e + 1) + t;
        },
        easeInOutCubic: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e * e + t
            : (i / 2) * ((e -= 2) * e * e + 2) + t;
        },
        easeInQuart: function (e, t, n, r) {
          return (n - t) * (e /= r) * e * e * e + t;
        },
        easeOutQuart: function (e, t, n, r) {
          return -(n - t) * ((e = e / r - 1) * e * e * e - 1) + t;
        },
        easeInOutQuart: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e * e * e + t
            : (-i / 2) * ((e -= 2) * e * e * e - 2) + t;
        },
        easeInQuint: function (e, t, n, r) {
          return (n - t) * (e /= r) * e * e * e * e + t;
        },
        easeOutQuint: function (e, t, n, r) {
          return (n - t) * ((e = e / r - 1) * e * e * e * e + 1) + t;
        },
        easeInOutQuint: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e * e * e * e + t
            : (i / 2) * ((e -= 2) * e * e * e * e + 2) + t;
        },
        easeInSine: function (e, t, n, r) {
          var i = n - t;
          return -i * Math.cos((e / r) * (Math.PI / 2)) + i + t;
        },
        easeOutSine: function (e, t, n, r) {
          return (n - t) * Math.sin((e / r) * (Math.PI / 2)) + t;
        },
        easeInOutSine: function (e, t, n, r) {
          return (-(n - t) / 2) * (Math.cos((Math.PI * e) / r) - 1) + t;
        },
        easeInExpo: function (e, t, n, r) {
          return 0 == e ? t : (n - t) * Math.pow(2, 10 * (e / r - 1)) + t;
        },
        easeOutExpo: function (e, t, n, r) {
          var i = n - t;
          return e == r ? t + i : i * (-Math.pow(2, (-10 * e) / r) + 1) + t;
        },
        easeInOutExpo: function (e, t, n, r) {
          var i = n - t;
          return 0 === e
            ? t
            : e === r
              ? t + i
              : (e /= r / 2) < 1
                ? (i / 2) * Math.pow(2, 10 * (e - 1)) + t
                : (i / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
        },
        easeInCirc: function (e, t, n, r) {
          return -(n - t) * (Math.sqrt(1 - (e /= r) * e) - 1) + t;
        },
        easeOutCirc: function (e, t, n, r) {
          return (n - t) * Math.sqrt(1 - (e = e / r - 1) * e) + t;
        },
        easeInOutCirc: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (-i / 2) * (Math.sqrt(1 - e * e) - 1) + t
            : (i / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
        },
        easeInElastic: function (e, t, n, r) {
          var i,
            a,
            s,
            o = n - t;
          return ((s = 1.70158), (a = 0), (i = o), 0 === e)
            ? t
            : 1 == (e /= r)
              ? t + o
              : (a || (a = 0.3 * r),
                i < Math.abs(o)
                  ? ((i = o), (s = a / 4))
                  : (s = (a / (2 * Math.PI)) * Math.asin(o / i)),
                -(
                  i *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e * r - s)) / a)
                ) + t);
        },
        easeOutElastic: function (e, t, n, r) {
          var i,
            a,
            s,
            o = n - t;
          return ((s = 1.70158), (a = 0), (i = o), 0 === e)
            ? t
            : 1 == (e /= r)
              ? t + o
              : (a || (a = 0.3 * r),
                i < Math.abs(o)
                  ? ((i = o), (s = a / 4))
                  : (s = (a / (2 * Math.PI)) * Math.asin(o / i)),
                i *
                  Math.pow(2, -10 * e) *
                  Math.sin((2 * Math.PI * (e * r - s)) / a) +
                  o +
                  t);
        },
        easeInOutElastic: function (e, t, n, r) {
          var i,
            a,
            s,
            o = n - t;
          return ((s = 1.70158), (a = 0), (i = o), 0 === e)
            ? t
            : 2 == (e /= r / 2)
              ? t + o
              : (a || (a = 0.3 * 1.5 * r),
                  i < Math.abs(o)
                    ? ((i = o), (s = a / 4))
                    : (s = (a / (2 * Math.PI)) * Math.asin(o / i)),
                  e < 1)
                ? -0.5 *
                    (i *
                      Math.pow(2, 10 * (e -= 1)) *
                      Math.sin((2 * Math.PI * (e * r - s)) / a)) +
                  t
                : i *
                    Math.pow(2, -10 * (e -= 1)) *
                    Math.sin((2 * Math.PI * (e * r - s)) / a) *
                    0.5 +
                  o +
                  t;
        },
        easeInBack: function (e, t, n, r, i) {
          return (
            void 0 === i && (i = 1.70158),
            (n - t) * (e /= r) * e * ((i + 1) * e - i) + t
          );
        },
        easeOutBack: function (e, t, n, r, i) {
          return (
            void 0 === i && (i = 1.70158),
            (n - t) * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t
          );
        },
        easeInOutBack: function (e, t, n, r, i) {
          var a = n - t;
          return (void 0 === i && (i = 1.70158), (e /= r / 2) < 1)
            ? (a / 2) * (e * e * (((i *= 1.525) + 1) * e - i)) + t
            : (a / 2) * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t;
        },
        easeInBounce: function (e, n, r, i) {
          var a,
            s = r - n;
          return (a = t.easeOutBounce(i - e, 0, s, i)), s - a + n;
        },
        easeOutBounce: function (e, t, n, r) {
          var i = n - t;
          return (e /= r) < 1 / 2.75
            ? 7.5625 * e * e * i + t
            : e < 2 / 2.75
              ? i * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
              : e < 2.5 / 2.75
                ? i * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
                : i * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
        },
        easeInOutBounce: function (e, n, r, i) {
          var a = r - n;
          return e < i / 2
            ? 0.5 * t.easeInBounce(2 * e, 0, a, i) + n
            : 0.5 * t.easeOutBounce(2 * e - i, 0, a, i) + 0.5 * a + n;
        },
      };
      e.exports = t;
    },
    987701(e, t, n) {
      "use strict";
      function r(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      n.d(t, { A: () => i });
      let i = function e(t, n) {
        if (t === n) return !0;
        if (null == t || null == n) return !1;
        if (Array.isArray(t))
          return (
            Array.isArray(n) &&
            t.length === n.length &&
            t.every(function (t, r) {
              return e(t, n[r]);
            })
          );
        if ("object" == typeof t || "object" == typeof n) {
          var i = r(t),
            a = r(n);
          return i !== t || a !== n
            ? e(i, a)
            : Object.keys(Object.assign({}, t, n)).every(function (r) {
                return e(t[r], n[r]);
              });
        }
        return !1;
      };
    },
    185621(e, t, n) {
      "use strict";
      e.exports = n.p + "3d87e0acfdf050a9.scm";
    },
    316690(e, t, n) {
      "use strict";
      e.exports = n.p + "a57d829a5323de30.scm";
    },
    554724(e, t, n) {
      "use strict";
      e.exports = n.p + "ed21b8919abfe80f.wasm";
    },
    308970(e, t, n) {
      "use strict";
      e.exports = n.p + "2d3b24aac48706d0.scm";
    },
    544958(e, t, n) {
      "use strict";
      e.exports = n.p + "892b86b1b37195ba.wasm";
    },
    501958(e, t, n) {
      "use strict";
      e.exports = n.p + "33f9142284a10095.scm";
    },
    492338(e, t, n) {
      "use strict";
      e.exports = n.p + "731b4cff0d046fd9.wasm";
    },
    796510(e, t, n) {
      "use strict";
      e.exports = n.p + "5d60c65a42dd8b61.scm";
    },
    445323(e, t, n) {
      "use strict";
      e.exports = n.p + "4f098f595413c750.scm";
    },
    691384(e, t, n) {
      "use strict";
      e.exports = n.p + "dc76a5bc246aea02.wasm";
    },
    371672(e, t, n) {
      "use strict";
      e.exports = n.p + "64eba10de56bb765.scm";
    },
    151408(e, t, n) {
      "use strict";
      e.exports = n.p + "d4930f9858d01e43.wasm";
    },
    253475(e, t, n) {
      "use strict";
      e.exports = n.p + "93e51b74e13d1db3.scm";
    },
    996928(e, t, n) {
      "use strict";
      e.exports = n.p + "219b66cbda651d28.wasm";
    },
    820825(e, t, n) {
      "use strict";
      e.exports = n.p + "74fe2c2f5a3c7981.scm";
    },
    901052(e, t, n) {
      "use strict";
      e.exports = n.p + "0268a0d5c3fc7ebe.wasm";
    },
    501721(e, t, n) {
      "use strict";
      e.exports = n.p + "108c8dd67e955e3b.scm";
    },
    533440(e, t, n) {
      "use strict";
      e.exports = n.p + "ddd52ece2d8c63eb.wasm";
    },
    371524(e, t, n) {
      "use strict";
      e.exports = n.p + "07e417d738722d4c.scm";
    },
    623584(e, t, n) {
      "use strict";
      e.exports = n.p + "ac511252e9dcb401.wasm";
    },
    718266(e, t, n) {
      "use strict";
      e.exports = n.p + "9fa7b99795cad999.scm";
    },
    284020(e, t, n) {
      "use strict";
      e.exports = n.p + "42b3775c0ce02e01.wasm";
    },
    253515(e, t, n) {
      "use strict";
      e.exports = n.p + "3ade61e47a975b88.scm";
    },
    785462(e, t, n) {
      "use strict";
      e.exports = n.p + "ceb6f797636a2e63.scm";
    },
    427200(e, t, n) {
      "use strict";
      e.exports = n.p + "7a1bfe86553551a2.scm";
    },
    867888(e, t, n) {
      "use strict";
      e.exports = n.p + "cafd71ad5c41a020.wasm";
    },
    582242(e, t, n) {
      "use strict";
      e.exports = n.p + "93e9ab38b759fa94.scm";
    },
    747060(e, t, n) {
      "use strict";
      e.exports = n.p + "519be724979f0108.wasm";
    },
    843389(e, t, n) {
      "use strict";
      e.exports = n.p + "89a7618d9c5a0636.scm";
    },
    662604(e, t, n) {
      "use strict";
      e.exports = n.p + "2b2a1cbf61630395.wasm";
    },
    632781(e, t, n) {
      "use strict";
      e.exports = n.p + "04576dbdb98ad02f.scm";
    },
    124332(e, t, n) {
      "use strict";
      e.exports = n.p + "c3ff5fafeceaae34.wasm";
    },
    135538(e, t, n) {
      "use strict";
      e.exports = n.p + "be3f7e92e07ca1fd.scm";
    },
    547431(e, t, n) {
      "use strict";
      e.exports = n.p + "2666b65494736dbc.scm";
    },
    555808(e, t, n) {
      "use strict";
      e.exports = n.p + "79bcfe8f592ca991.wasm";
    },
    713796(e, t, n) {
      "use strict";
      e.exports = n.p + "9d568a1f15e8cf74.scm";
    },
    122250(e, t, n) {
      "use strict";
      e.exports = n.p + "dfa0d8c944be3a84.wasm";
    },
    983420(e, t, n) {
      "use strict";
      e.exports = n.p + "982ab3c69af96dda.scm";
    },
    489565(e, t, n) {
      "use strict";
      e.exports = n.p + "bd9bde68cb2a04f0.scm";
    },
    590264(e, t, n) {
      "use strict";
      e.exports = n.p + "e02a5b67b3c1df40.wasm";
    },
    681166(e, t, n) {
      "use strict";
      e.exports = n.p + "7555218a1309ad93.scm";
    },
    328592(e, t, n) {
      "use strict";
      e.exports = n.p + "7663a3bebce7deb6.wasm";
    },
    687429(e, t, n) {
      "use strict";
      e.exports = n.p + "0b59c2275238d17c.scm";
    },
    222260(e, t, n) {
      "use strict";
      e.exports = n.p + "cbfd32db1d5ba021.wasm";
    },
    108572(e, t, n) {
      "use strict";
      e.exports = n.p + "ffc648b27cbf1caf.scm";
    },
    712298(e, t, n) {
      "use strict";
      e.exports = n.p + "685345d8f6dff552.wasm";
    },
    502907(e, t, n) {
      "use strict";
      e.exports = n.p + "6edd364cd748a297.scm";
    },
    640208(e, t, n) {
      "use strict";
      e.exports = n.p + "af5575828ca9af40.wasm";
    },
    655582(e, t, n) {
      "use strict";
      e.exports = n.p + "6e4f9b9f5280286f.scm";
    },
    445854(e, t, n) {
      "use strict";
      e.exports = n.p + "39a2d47ac3762397.wasm";
    },
    604623(e, t, n) {
      "use strict";
      e.exports = n.p + "a781b7662011d5f8.scm";
    },
    571368(e, t, n) {
      "use strict";
      e.exports = n.p + "0692eae161114efb.wasm";
    },
    992094(e, t, n) {
      "use strict";
      e.exports = n.p + "b79558c9fe3061d8.scm";
    },
    404043(e, t, n) {
      "use strict";
      e.exports = n.p + "11028097ed495199.scm";
    },
    84912(e, t, n) {
      "use strict";
      e.exports = n.p + "55f0b93e3801c156.wasm";
    },
    180458(e, t, n) {
      "use strict";
      e.exports = n.p + "d4bfa95eadea7b95.scm";
    },
    161064(e, t, n) {
      "use strict";
      e.exports = n.p + "ddbd456b03bd614e.wasm";
    },
    817218(e, t, n) {
      "use strict";
      e.exports = n.p + "0490603e9d0d01cd.scm";
    },
    842039(e, t, n) {
      "use strict";
      e.exports = n.p + "30e0c6c9ec034936.scm";
    },
    941694(e, t, n) {
      "use strict";
      e.exports = n.p + "6b2a83c56c10aac5.wasm";
    },
    565989(e, t, n) {
      "use strict";
      e.exports = n.p + "38b49511c25620a4.scm";
    },
    777084(e, t, n) {
      "use strict";
      e.exports = n.p + "c6e91b47ab586842.scm";
    },
    224578(e, t, n) {
      "use strict";
      e.exports = n.p + "68db595d8460bf97.scm";
    },
    993684(e, t, n) {
      "use strict";
      e.exports = n.p + "3c0de8eda87cde77.wasm";
    },
    72382(e, t, n) {
      "use strict";
      e.exports = n.p + "764d203016a287be.scm";
    },
    934434(e, t, n) {
      "use strict";
      e.exports = n.p + "9fe54b19e13e9fb4.wasm";
    },
    807991(e, t, n) {
      "use strict";
      e.exports = n.p + "b62210ce632b9c7b.scm";
    },
    482784(e, t, n) {
      "use strict";
      e.exports = n.p + "db7b3abf723619a2.wasm";
    },
    581583(e, t, n) {
      "use strict";
      e.exports = n.p + "a90228e085a54917.scm";
    },
    471586(e, t, n) {
      "use strict";
      e.exports = n.p + "83241319c2f5ea44.scm";
    },
    645372(e, t, n) {
      "use strict";
      e.exports = n.p + "14ec376fdb114a1a.scm";
    },
    584784(e, t, n) {
      "use strict";
      e.exports = n.p + "952ea714b7ffbf0a.wasm";
    },
    679453(e, t, n) {
      "use strict";
      e.exports = n.p + "bed44ef8a588de5e.scm";
    },
    531860(e, t, n) {
      "use strict";
      e.exports = n.p + "d59ec0d928765c62.scm";
    },
    345322(e, t, n) {
      "use strict";
      e.exports = n.p + "71d5da341ff42d98.scm";
    },
    441672(e, t, n) {
      "use strict";
      e.exports = n.p + "821c6e039088a32a.wasm";
    },
    463989(e, t, n) {
      "use strict";
      e.exports = n.p + "bfd02fa6ec3b90f5.scm";
    },
    115088(e, t, n) {
      "use strict";
      e.exports = n.p + "ce7c50e2af3b3d6f.wasm";
    },
    757283(e, t, n) {
      "use strict";
      e.exports = n.p + "ca7b1a42047fd4a7.scm";
    },
    847392(e, t, n) {
      "use strict";
      e.exports = n.p + "b0a784773bef755c.wasm";
    },
    477092(e, t, n) {
      "use strict";
      e.exports = n.p + "26f3233db8fd35cc.scm";
    },
    117256(e, t, n) {
      "use strict";
      e.exports = n.p + "b652b3efd242781a.wasm";
    },
    971567(e, t, n) {
      "use strict";
      e.exports = n.p + "d1d5683e682403ee.scm";
    },
    718850(e, t, n) {
      "use strict";
      e.exports = n.p + "9659a56d1febda1f.scm";
    },
    867128(e, t, n) {
      "use strict";
      e.exports = n.p + "ca88c20b7cf9201e.wasm";
    },
    206965(e, t, n) {
      "use strict";
      e.exports = n.p + "49df8c4579e595cf.scm";
    },
    16076(e, t, n) {
      "use strict";
      e.exports = n.p + "378d2e61a0746a96.scm";
    },
    208626(e, t, n) {
      "use strict";
      e.exports = n.p + "d5a5dd5a59b729c1.scm";
    },
    56948(e, t, n) {
      "use strict";
      e.exports = n.p + "43a404ef2bacd054.wasm";
    },
    972942(e, t, n) {
      "use strict";
      e.exports = n.p + "e2e4ffe9446b9430.scm";
    },
    370800(e, t, n) {
      "use strict";
      e.exports = n.p + "2ce3dc45e1db6adb.wasm";
    },
    449794(e, t, n) {
      "use strict";
      e.exports = n.p + "b95a3d59c6e54c5a.scm";
    },
    697922(e, t, n) {
      "use strict";
      e.exports = n.p + "3994858ee4a3d1a5.wasm";
    },
    911112(e, t, n) {
      "use strict";
      e.exports = n.p + "c1a7d06de3d1ae83.scm";
    },
    495969(e, t, n) {
      "use strict";
      e.exports = n.p + "b5bfaaa4cb03e124.scm";
    },
    284030(e, t, n) {
      "use strict";
      e.exports = n.p + "3bb8623d0cf32050.wasm";
    },
    583152(e, t, n) {
      "use strict";
      e.exports = n.p + "4c2fad6f8a84d5f2.scm";
    },
    561740(e, t, n) {
      "use strict";
      e.exports = n.p + "73781ffe08a670a8.wasm";
    },
    363471(e, t, n) {
      "use strict";
      e.exports = n.p + "872d0bfaaff74572.scm";
    },
    771944(e, t, n) {
      "use strict";
      e.exports = n.p + "30338096d02ca71a.wasm";
    },
    883585(e, t, n) {
      "use strict";
      e.exports = n.p + "2b31faaf5a622150.scm";
    },
    299080(e, t, n) {
      "use strict";
      e.exports = n.p + "06ed02fb3171cf6d.wasm";
    },
    646866(e, t, n) {
      "use strict";
      e.exports = n.p + "1d975cf88cd6d438.scm";
    },
    70855(e, t, n) {
      "use strict";
      e.exports = n.p + "f78c17604b26eefb.scm";
    },
    66753(e, t, n) {
      "use strict";
      e.exports = n.p + "5002d3c2fa5919d9.scm";
    },
    316662(e, t, n) {
      "use strict";
      e.exports = n.p + "a2c69124836d682e.wasm";
    },
    137323(e, t, n) {
      "use strict";
      e.exports = n.p + "1d57cb39bf3f26f1.scm";
    },
    848368(e, t, n) {
      "use strict";
      e.exports = n.p + "ff93f208f0e34b16.wasm";
    },
    20080(e, t, n) {
      "use strict";
      e.exports = n.p + "9a8a39530b75f971.scm";
    },
    314786(e, t, n) {
      "use strict";
      e.exports = n.p + "6b24e319e808103a.wasm";
    },
    187311(e, t, n) {
      "use strict";
      e.exports = n.p + "9d7a1d34922edf76.scm";
    },
    316712(e, t, n) {
      "use strict";
      e.exports = n.p + "91b449b24fee47e6.wasm";
    },
    324828(e, t, n) {
      "use strict";
      e.exports = n.p + "7fe23f9203b51756.scm";
    },
    285568(e, t, n) {
      "use strict";
      e.exports = n.p + "f9a3103f4ee9d984.wasm";
    },
    823504(e, t, n) {
      "use strict";
      e.exports = n.p + "0d418e559e607820.scm";
    },
    787434(e, t, n) {
      "use strict";
      e.exports = n.p + "f603d7672d6a6e7e.wasm";
    },
    281161(e, t, n) {
      "use strict";
      e.exports = n.p + "0f6cf3430264982a.scm";
    },
    655652(e, t, n) {
      "use strict";
      e.exports = n.p + "3737e12dd107cd70.wasm";
    },
    871659(e, t, n) {
      "use strict";
      e.exports = n.p + "67b407c2a35b083c.scm";
    },
    273558(e, t, n) {
      "use strict";
      e.exports = n.p + "916bab3e06f5d5ba.scm";
    },
    864928(e, t, n) {
      "use strict";
      e.exports = n.p + "b4673c9c89418881.scm";
    },
    718992(e, t, n) {
      "use strict";
      e.exports = n.p + "7a0971b265902e89.wasm";
    },
    9916(e, t, n) {
      "use strict";
      e.exports = n.p + "7cc0acd33f903a55.scm";
    },
    516061(e, t, n) {
      "use strict";
      e.exports = n.p + "fe3cea4ec886ffda.scm";
    },
    86414(e, t, n) {
      "use strict";
      e.exports = n.p + "8cacbd2b1e532bba.wasm";
    },
    581934(e, t, n) {
      "use strict";
      e.exports = n.p + "4ba2f997145549c8.scm";
    },
    858376(e, t, n) {
      "use strict";
      e.exports = n.p + "8f7666f15b118b59.scm";
    },
    348820(e, t, n) {
      "use strict";
      e.exports = n.p + "5778c5dc2395f49c.wasm";
    },
    955268(e, t, n) {
      "use strict";
      e.exports = n.p + "f43f7dedfee334eb.scm";
    },
    675046(e, t, n) {
      "use strict";
      e.exports = n.p + "5c175a2f0586e96b.wasm";
    },
    448407(e, t, n) {
      "use strict";
      e.exports = n.p + "55072d0bf912d0a2.scm";
    },
    835952(e, t, n) {
      "use strict";
      e.exports = n.p + "5d0dc209a50a9e4c.wasm";
    },
    980429(e, t, n) {
      "use strict";
      e.exports = n.p + "0d0a5d0e2c94fe47.scm";
    },
    75464(e, t, n) {
      "use strict";
      e.exports = n.p + "986d76363cefe222.wasm";
    },
    714370(e, t, n) {
      "use strict";
      e.exports = n.p + "58c9a8aed17cb1f1.scm";
    },
    739191(e, t, n) {
      "use strict";
      e.exports = n.p + "e0b7a2d0c737a42b.scm";
    },
    227473(e, t, n) {
      "use strict";
      e.exports = n.p + "0af059d1dd61fef3.scm";
    },
    242508(e, t, n) {
      "use strict";
      e.exports = n.p + "6da9b27ce7cab314.wasm";
    },
    974591(e, t, n) {
      "use strict";
      e.exports = n.p + "1291257665f1e395.scm";
    },
    860306(e, t, n) {
      "use strict";
      e.exports = n.p + "be08ad58feef479c.scm";
    },
    373196(e, t, n) {
      "use strict";
      e.exports = n.p + "0298ed9734c0f49b.scm";
    },
    45456(e, t, n) {
      "use strict";
      e.exports = n.p + "db9153a6cdf43765.wasm";
    },
    602297(e, t, n) {
      "use strict";
      e.exports = n.p + "a52dbc97f447c6f8.scm";
    },
    347294(e, t, n) {
      "use strict";
      e.exports = n.p + "91d438d370df2fb9.scm";
    },
    916372(e, t, n) {
      "use strict";
      e.exports = n.p + "80a5722bc623941c.wasm";
    },
    358060(e, t, n) {
      "use strict";
      e.exports = n.p + "3e482b73ce2f1d69.scm";
    },
    486221(e, t, n) {
      "use strict";
      e.exports = n.p + "d90643289be970b6.scm";
    },
    571834(e, t, n) {
      "use strict";
      e.exports = n.p + "ba009a223769eb8f.wasm";
    },
    910825(e, t, n) {
      "use strict";
      e.exports = n.p + "c74b8f4de42fb2da.scm";
    },
    323e3(e, t, n) {
      "use strict";
      e.exports = n.p + "e394548d74912d61.scm";
    },
    247524(e, t, n) {
      "use strict";
      e.exports = n.p + "b5eaffe67f1557c0.wasm";
    },
    980524(e, t, n) {
      "use strict";
      e.exports = n.p + "4edda157d72b3808.scm";
    },
    628490(e, t, n) {
      "use strict";
      e.exports = n.p + "9e4fb139961e70d2.wasm";
    },
    449048(e, t, n) {
      "use strict";
      e.exports = n.p + "7aaa4791a7108ef1.scm";
    },
    177910(e, t, n) {
      "use strict";
      e.exports = n.p + "61665e8e89ab84fd.wasm";
    },
    290858(e, t, n) {
      "use strict";
      e.exports = n.p + "e9591638fc2a87af.scm";
    },
    330234(e, t, n) {
      "use strict";
      e.exports = n.p + "3b167da64f5d1d6f.wasm";
    },
    425335(e, t, n) {
      "use strict";
      e.exports = n.p + "5bac5070b554561d.scm";
    },
    181712(e, t, n) {
      "use strict";
      e.exports = n.p + "3f3519798accc469.wasm";
    },
    214685(e, t, n) {
      "use strict";
      e.exports = n.p + "31a797c4177b7453.scm";
    },
    840660(e, t, n) {
      "use strict";
      e.exports = n.p + "2dc3595467f9ed1b.scm";
    },
    892256(e, t, n) {
      "use strict";
      e.exports = n.p + "6c0268ca4767d79d.wasm";
    },
    652715(e, t, n) {
      "use strict";
      e.exports = n.p + "77cca439b48681fd.scm";
    },
    396576(e, t, n) {
      "use strict";
      e.exports = n.p + "a4bc55505fc9536f.scm";
    },
    157456(e, t, n) {
      "use strict";
      e.exports = n.p + "0557210109298761.wasm";
    },
    968038(e, t, n) {
      "use strict";
      e.exports = n.p + "5862f376888a8350.scm";
    },
    914189(e, t, n) {
      "use strict";
      e.exports = n.p + "e145a14fcbb9a393.scm";
    },
    705750(e, t, n) {
      "use strict";
      e.exports = n.p + "dbee2bca30941847.wasm";
    },
    855995(e, t, n) {
      "use strict";
      e.exports = n.p + "28047f781bb88e3a.scm";
    },
    479846(e, t, n) {
      "use strict";
      e.exports = n.p + "bf7803ec51ec3253.scm";
    },
    539152(e, t, n) {
      "use strict";
      e.exports = n.p + "d6864494d8ed8678.scm";
    },
    834640(e, t, n) {
      "use strict";
      e.exports = n.p + "56a6844e47ed00d6.wasm";
    },
    342870(e, t, n) {
      "use strict";
      e.exports = n.p + "d819ef4b6df05088.scm";
    },
    762296(e, t, n) {
      "use strict";
      e.exports = n.p + "53af3752c754c087.wasm";
    },
    221081(e, t, n) {
      "use strict";
      e.exports = n.p + "ff4875e34b10af15.scm";
    },
    282952(e, t, n) {
      "use strict";
      e.exports = n.p + "5d0750991aa24edb.wasm";
    },
    544211(e, t, n) {
      "use strict";
      e.exports = n.p + "a7fe368b1af4bff9.scm";
    },
    153278(e, t, n) {
      "use strict";
      e.exports = n.p + "9113833583a1967a.scm";
    },
    585232(e, t, n) {
      "use strict";
      e.exports = n.p + "44a11828e0c61f08.wasm";
    },
    636155(e, t, n) {
      "use strict";
      e.exports = n.p + "ab244c7915a4882a.scm";
    },
    798928(e, t, n) {
      "use strict";
      e.exports = n.p + "1a395c1d440d9bb5.scm";
    },
    715408(e, t, n) {
      "use strict";
      e.exports = n.p + "8812aeada150df4d.wasm";
    },
    499150(e, t, n) {
      "use strict";
      e.exports = n.p + "1d745fe76aec1178.scm";
    },
    910038(e, t, n) {
      "use strict";
      e.exports = n.p + "f60b8f5c207e5359.wasm";
    },
    581365(e, t, n) {
      "use strict";
      e.exports = n.p + "5abb4709a74efb87.scm";
    },
    42040(e, t, n) {
      "use strict";
      e.exports = n.p + "cf833be5c054a77a.wasm";
    },
    93492(e, t, n) {
      "use strict";
      e.exports = n.p + "17a02aa0e9d4b682.scm";
    },
    307379(e, t, n) {
      "use strict";
      e.exports = n.p + "f11ea8e873f2ad7a.scm";
    },
    711194(e, t, n) {
      "use strict";
      e.exports = n.p + "02a35fe8e81c2853.wasm";
    },
    512564(e, t, n) {
      "use strict";
      e.exports = n.p + "20d59b30c0bcd07b.scm";
    },
    622914(e, t, n) {
      "use strict";
      e.exports = n.p + "746af5998a0b7ac9.wasm";
    },
    631189(e, t, n) {
      "use strict";
      e.exports = n.p + "880f37d7d46a1210.scm";
    },
    295832(e, t, n) {
      "use strict";
      e.exports = n.p + "ecda9b3ec064a378.wasm";
    },
    400774(e, t, n) {
      "use strict";
      e.exports = n.p + "5f17f56e87bc030f.scm";
    },
    557011(e, t, n) {
      "use strict";
      e.exports = n.p + "ffc798ce19d71d0a.scm";
    },
    805938(e, t, n) {
      "use strict";
      e.exports = n.p + "4feef76a0d7aff8a.wasm";
    },
    757197(e, t, n) {
      "use strict";
      e.exports = n.p + "150079cffc11c19f.scm";
    },
    362116(e, t, n) {
      "use strict";
      e.exports = n.p + "6926cd0c58ac1bf3.scm";
    },
    607930(e, t, n) {
      "use strict";
      e.exports = n.p + "3477e34e77ae4659.scm";
    },
    317952(e, t, n) {
      "use strict";
      e.exports = n.p + "dc4e546ac5258279.wasm";
    },
    789227(e, t, n) {
      "use strict";
      e.exports = n.p + "ba3ff33752bdeb90.scm";
    },
    447638(e, t, n) {
      "use strict";
      e.exports = n.p + "25c677b3c2f23d03.scm";
    },
    793104(e, t, n) {
      "use strict";
      e.exports = n.p + "b65e9a1d7515980c.wasm";
    },
    582814(e, t, n) {
      "use strict";
      e.exports = n.p + "0e68dac0c0691a0c.scm";
    },
    994763(e, t, n) {
      "use strict";
      e.exports = n.p + "b46002b17c746471.scm";
    },
    756661(e, t, n) {
      "use strict";
      e.exports = n.p + "023e042f81f1d190.scm";
    },
    463302(e, t, n) {
      "use strict";
      e.exports = n.p + "fcb059e098364cef.wasm";
    },
    259850(e, t, n) {
      "use strict";
      e.exports = n.p + "4bd633ad81400c98.scm";
    },
    134399(e, t, n) {
      "use strict";
      e.exports = n.p + "7bbbd663402a67c4.scm";
    },
    917129(e, t, n) {
      "use strict";
      e.exports = n.p + "1bd9a135dae6ed53.scm";
    },
    682004(e, t, n) {
      "use strict";
      e.exports = n.p + "7ae3794b81ebcba8.wasm";
    },
    264834(e, t, n) {
      "use strict";
      e.exports = n.p + "9d2904ef6dd5e9fe.scm";
    },
    658400(e, t, n) {
      "use strict";
      e.exports = n.p + "14d4b9d117e56b22.wasm";
    },
    584122(e, t, n) {
      "use strict";
      e.exports = n.p + "3da6afe347130d3e.scm";
    },
    259439(e, t, n) {
      "use strict";
      e.exports = n.p + "ceb6f797636a2e63.scm";
    },
    720793(e, t, n) {
      "use strict";
      e.exports = n.p + "ae8158b5143b2105.scm";
    },
    40570(e, t, n) {
      "use strict";
      e.exports = n.p + "5bd4db186cf51c8b.wasm";
    },
    58894(e, t, n) {
      "use strict";
      e.exports = n.p + "4ed39dc06943c3e2.scm";
    },
    661637(e, t, n) {
      "use strict";
      e.exports = n.p + "48aa74bea3fcda40.scm";
    },
    703724(e, t, n) {
      "use strict";
      e.exports = n.p + "2ec8b637c8e0b57c.wasm";
    },
    191649(e, t, n) {
      "use strict";
      e.exports = n.p + "6a47e50cddd6b30f.scm";
    },
    155308(e, t, n) {
      "use strict";
      e.exports = n.p + "affb5b09ebb90e03.wasm";
    },
    613110(e, t, n) {
      "use strict";
      e.exports = n.p + "180b17205c422875.scm";
    },
    757629(e, t, n) {
      "use strict";
      e.exports = n.p + "27f2b7e9f1c3c033.scm";
    },
    21256(e, t, n) {
      "use strict";
      e.exports = n.p + "fe1336aa068c50d6.wasm";
    },
    648506(e, t, n) {
      "use strict";
      e.exports = n.p + "71e40836c4f58bd2.scm";
    },
    194201(e, t, n) {
      "use strict";
      e.exports = n.p + "27f2b7e9f1c3c033.scm";
    },
    733926(e, t, n) {
      "use strict";
      e.exports = n.p + "56dcffb1426c7643.wasm";
    },
    13079(e, t, n) {
      "use strict";
      e.exports = n.p + "268bf37036a7000e.scm";
    },
    960138(e, t, n) {
      "use strict";
      e.exports = n.p + "672084259765f452.scm";
    },
    262848(e, t, n) {
      "use strict";
      e.exports = n.p + "6a6b6795bb897737.wasm";
    },
    486859(e, t, n) {
      "use strict";
      e.exports = n.p + "1f8dd043494ee1f1.scm";
    },
    502768(e, t, n) {
      "use strict";
      e.exports = n.p + "fa2ccc14c5a0593d.wasm";
    },
    858987(e, t, n) {
      "use strict";
      e.exports = n.p + "89689369445eca3b.scm";
    },
    276912(e, t, n) {
      "use strict";
      e.exports = n.p + "22178b81b24702d6.wasm";
    },
    330909(e, t, n) {
      "use strict";
      e.exports = n.p + "cbaed2f8abecb5b8.scm";
    },
    440532(e, t, n) {
      "use strict";
      e.exports = n.p + "7692b169a722ff31.scm";
    },
    699736(e, t, n) {
      "use strict";
      e.exports = n.p + "8f278c002e0e9784.wasm";
    },
    4081(e, t, n) {
      "use strict";
      e.exports = n.p + "f81d26c65b6725c8.scm";
    },
    751968(e, t, n) {
      "use strict";
      e.exports = n.p + "6e18f7a201cbaf97.scm";
    },
    769320(e, t, n) {
      "use strict";
      e.exports = n.p + "351542e79139fb36.wasm";
    },
    856145(e, t, n) {
      "use strict";
      e.exports = n.p + "d838a86863f4f0dd.scm";
    },
    413056(e, t, n) {
      "use strict";
      e.exports = n.p + "4f098f595413c750.scm";
    },
    650024(e, t, n) {
      "use strict";
      e.exports = n.p + "f0cc1b80f561fb60.wasm";
    },
    489700(e, t, n) {
      "use strict";
      e.exports = n.p + "5e8f3bb7f8d4c68c.scm";
    },
    26558(e, t, n) {
      "use strict";
      e.exports = n.p + "78d9a07eb3de8635.wasm";
    },
    730180(e, t, n) {
      "use strict";
      e.exports = n.p + "338c675ef087c754.scm";
    },
    897836(e, t, n) {
      "use strict";
      e.exports = n.p + "520b8aeb8520dc6b.wasm";
    },
    395958(e, t, n) {
      "use strict";
      e.exports = n.p + "d1978ec42eed74f6.scm";
    },
    30290(e, t, n) {
      "use strict";
      e.exports = n.p + "2e4f937355ef638d.wasm";
    },
    686146(e, t, n) {
      "use strict";
      e.exports = n.p + "de82efe956afcfd0.scm";
    },
    78170(e, t, n) {
      "use strict";
      e.exports = n.p + "cec1113b799cc248.wasm";
    },
    692027(e, t, n) {
      "use strict";
      e.exports = n.p + "07316eddff5889b3.scm";
    },
    95334(e, t, n) {
      "use strict";
      e.exports = n.p + "b5d39ce99749cca1.scm";
    },
    256976(e, t, n) {
      "use strict";
      e.exports = n.p + "d02e778cf34d2166.wasm";
    },
    371952(e, t, n) {
      "use strict";
      e.exports = n.p + "ff32678d88643c9a.scm";
    },
    727216(e, t, n) {
      "use strict";
      e.exports = n.p + "ae550cee3b9e6b43.wasm";
    },
    79445(e, t, n) {
      "use strict";
      e.exports = n.p + "9d9d426962dd2fb8.wasm";
    },
    531031(e, t, n) {
      "use strict";
      e.exports = n.p + "fc1fef817cbb6528.wasm";
    },
    807853(e, t, n) {
      "use strict";
      async function r(e) {
        return null;
      }
      n.d(t, {
        WY: () => u,
        gT: () => i,
        Sx: () => s,
        BW: () => a,
        LM: () => o,
      });
      class i extends Error {
        kind;
        constructor(e, t) {
          super(t), (this.name = "ArboriumError"), (this.kind = e);
        }
      }
      function a(e, t) {
        if (0 === t.length) return [0, 0];
        let n = l.encode(t),
          r = e._malloc(n.length);
        return e.HEAPU8.set(n, r), [r, n.length];
      }
      function s(e, t, n) {
        return 0 === n ? "" : d.decode(e.HEAPU8.subarray(t, t + n));
      }
      async function o(e) {
        return e instanceof URL
          ? c(e)
          : e instanceof Uint8Array
            ? e
            : new Uint8Array(e);
      }
      async function u(e) {
        if ("string" == typeof e) return e;
        let t = await c(e);
        return d.decode(t);
      }
      async function c(e) {
        let t = await r(e);
        if (t) return t;
        let n = await fetch(e);
        if (!n.ok)
          throw new i(
            "asset-fetch-failed",
            `failed to fetch ${e.href}: ${n.status} ${n.statusText}`,
          );
        return new Uint8Array(await n.arrayBuffer());
      }
      let l = new TextEncoder(),
        d = new TextDecoder();
    },
    728806(e, t, n) {
      "use strict";
      n.d(t, { p: () => r });
      let r = {
        ada: {
          languageId: "ada",
          languageExport: "tree_sitter_ada",
          wasm: new URL(n(554724), n.b),
          highlights: new URL(n(185621), n.b),
          locals: new URL(n(316690), n.b),
        },
        agda: {
          languageId: "agda",
          languageExport: "tree_sitter_agda",
          wasm: new URL(n(544958), n.b),
          highlights: new URL(n(308970), n.b),
        },
        asciidoc: {
          languageId: "asciidoc",
          languageExport: "tree_sitter_asciidoc",
          wasm: new URL(n(492338), n.b),
          highlights: new URL(n(501958), n.b),
        },
        asm: {
          languageId: "asm",
          languageExport: "tree_sitter_asm",
          wasm: new URL(n(691384), n.b),
          highlights: new URL(n(796510), n.b),
          injections: new URL(n(445323), n.b),
        },
        awk: {
          languageId: "awk",
          languageExport: "tree_sitter_awk",
          wasm: new URL(n(151408), n.b),
          highlights: new URL(n(371672), n.b),
        },
        bash: {
          languageId: "bash",
          languageExport: "tree_sitter_bash",
          wasm: new URL(n(996928), n.b),
          highlights: new URL(n(253475), n.b),
        },
        batch: {
          languageId: "batch",
          languageExport: "tree_sitter_batch",
          wasm: new URL(n(901052), n.b),
          highlights: new URL(n(820825), n.b),
        },
        c: {
          languageId: "c",
          languageExport: "tree_sitter_c",
          wasm: new URL(n(623584), n.b),
          highlights: new URL(n(371524), n.b),
        },
        "c-sharp": {
          languageId: "c-sharp",
          languageExport: "tree_sitter_c_sharp",
          wasm: new URL(n(533440), n.b),
          highlights: new URL(n(501721), n.b),
        },
        caddy: {
          languageId: "caddy",
          languageExport: "tree_sitter_caddy",
          wasm: new URL(n(284020), n.b),
          highlights: new URL(n(718266), n.b),
        },
        capnp: {
          languageId: "capnp",
          languageExport: "tree_sitter_capnp",
          wasm: new URL(n(867888), n.b),
          highlights: new URL(n(253515), n.b),
          injections: new URL(n(785462), n.b),
          locals: new URL(n(427200), n.b),
        },
        cedar: {
          languageId: "cedar",
          languageExport: "tree_sitter_cedar",
          wasm: new URL(n(747060), n.b),
          highlights: new URL(n(582242), n.b),
        },
        cedarschema: {
          languageId: "cedarschema",
          languageExport: "tree_sitter_cedarschema",
          wasm: new URL(n(662604), n.b),
          highlights: new URL(n(843389), n.b),
        },
        clojure: {
          languageId: "clojure",
          languageExport: "tree_sitter_clojure",
          wasm: new URL(n(124332), n.b),
          highlights: new URL(n(632781), n.b),
        },
        cmake: {
          languageId: "cmake",
          languageExport: "tree_sitter_cmake",
          wasm: new URL(n(555808), n.b),
          highlights: new URL(n(135538), n.b),
          injections: new URL(n(547431), n.b),
        },
        commonlisp: {
          languageId: "commonlisp",
          languageExport: "tree_sitter_commonlisp",
          wasm: new URL(n(122250), n.b),
          highlights: new URL(n(713796), n.b),
        },
        cpp: {
          languageId: "cpp",
          languageExport: "tree_sitter_cpp",
          wasm: new URL(n(590264), n.b),
          highlights: new URL(n(983420), n.b),
          injections: new URL(n(489565), n.b),
        },
        css: {
          languageId: "css",
          languageExport: "tree_sitter_css",
          wasm: new URL(n(328592), n.b),
          highlights: new URL(n(681166), n.b),
        },
        d: {
          languageId: "d",
          languageExport: "tree_sitter_d",
          wasm: new URL(n(222260), n.b),
          highlights: new URL(n(687429), n.b),
        },
        dart: {
          languageId: "dart",
          languageExport: "tree_sitter_dart",
          wasm: new URL(n(712298), n.b),
          highlights: new URL(n(108572), n.b),
        },
        devicetree: {
          languageId: "devicetree",
          languageExport: "tree_sitter_devicetree",
          wasm: new URL(n(640208), n.b),
          highlights: new URL(n(502907), n.b),
        },
        diff: {
          languageId: "diff",
          languageExport: "tree_sitter_diff",
          wasm: new URL(n(445854), n.b),
          highlights: new URL(n(655582), n.b),
        },
        dockerfile: {
          languageId: "dockerfile",
          languageExport: "tree_sitter_dockerfile",
          wasm: new URL(n(571368), n.b),
          highlights: new URL(n(604623), n.b),
        },
        dot: {
          languageId: "dot",
          languageExport: "tree_sitter_dot",
          wasm: new URL(n(84912), n.b),
          highlights: new URL(n(992094), n.b),
          injections: new URL(n(404043), n.b),
        },
        elisp: {
          languageId: "elisp",
          languageExport: "tree_sitter_elisp",
          wasm: new URL(n(161064), n.b),
          highlights: new URL(n(180458), n.b),
        },
        elixir: {
          languageId: "elixir",
          languageExport: "tree_sitter_elixir",
          wasm: new URL(n(941694), n.b),
          highlights: new URL(n(817218), n.b),
          injections: new URL(n(842039), n.b),
        },
        elm: {
          languageId: "elm",
          languageExport: "tree_sitter_elm",
          wasm: new URL(n(993684), n.b),
          highlights: new URL(n(565989), n.b),
          injections: new URL(n(777084), n.b),
          locals: new URL(n(224578), n.b),
        },
        erlang: {
          languageId: "erlang",
          languageExport: "tree_sitter_erlang",
          wasm: new URL(n(934434), n.b),
          highlights: new URL(n(72382), n.b),
        },
        fish: {
          languageId: "fish",
          languageExport: "tree_sitter_fish",
          wasm: new URL(n(482784), n.b),
          highlights: new URL(n(807991), n.b),
        },
        fsharp: {
          languageId: "fsharp",
          languageExport: "tree_sitter_fsharp",
          wasm: new URL(n(584784), n.b),
          highlights: new URL(n(581583), n.b),
          injections: new URL(n(471586), n.b),
          locals: new URL(n(645372), n.b),
        },
        gleam: {
          languageId: "gleam",
          languageExport: "tree_sitter_gleam",
          wasm: new URL(n(441672), n.b),
          highlights: new URL(n(679453), n.b),
          injections: new URL(n(531860), n.b),
          locals: new URL(n(345322), n.b),
        },
        glsl: {
          languageId: "glsl",
          languageExport: "tree_sitter_glsl",
          wasm: new URL(n(115088), n.b),
          highlights: new URL(n(463989), n.b),
        },
        go: {
          languageId: "go",
          languageExport: "tree_sitter_go",
          wasm: new URL(n(847392), n.b),
          highlights: new URL(n(757283), n.b),
        },
        graphql: {
          languageId: "graphql",
          languageExport: "tree_sitter_graphql",
          wasm: new URL(n(117256), n.b),
          highlights: new URL(n(477092), n.b),
        },
        groovy: {
          languageId: "groovy",
          languageExport: "tree_sitter_groovy",
          wasm: new URL(n(867128), n.b),
          highlights: new URL(n(971567), n.b),
          injections: new URL(n(718850), n.b),
        },
        haskell: {
          languageId: "haskell",
          languageExport: "tree_sitter_haskell",
          wasm: new URL(n(56948), n.b),
          highlights: new URL(n(206965), n.b),
          injections: new URL(n(16076), n.b),
          locals: new URL(n(208626), n.b),
        },
        hcl: {
          languageId: "hcl",
          languageExport: "tree_sitter_hcl",
          wasm: new URL(n(370800), n.b),
          highlights: new URL(n(972942), n.b),
        },
        hlsl: {
          languageId: "hlsl",
          languageExport: "tree_sitter_hlsl",
          wasm: new URL(n(697922), n.b),
          highlights: new URL(n(449794), n.b),
        },
        html: {
          languageId: "html",
          languageExport: "tree_sitter_html",
          wasm: new URL(n(284030), n.b),
          highlights: new URL(n(911112), n.b),
          injections: new URL(n(495969), n.b),
        },
        idris: {
          languageId: "idris",
          languageExport: "tree_sitter_idris",
          wasm: new URL(n(561740), n.b),
          highlights: new URL(n(583152), n.b),
        },
        ini: {
          languageId: "ini",
          languageExport: "tree_sitter_ini",
          wasm: new URL(n(771944), n.b),
          highlights: new URL(n(363471), n.b),
        },
        java: {
          languageId: "java",
          languageExport: "tree_sitter_java",
          wasm: new URL(n(299080), n.b),
          highlights: new URL(n(883585), n.b),
        },
        javascript: {
          languageId: "javascript",
          languageExport: "tree_sitter_javascript",
          wasm: new URL(n(316662), n.b),
          highlights: new URL(n(646866), n.b),
          injections: new URL(n(70855), n.b),
          locals: new URL(n(66753), n.b),
        },
        jinja2: {
          languageId: "jinja2",
          languageExport: "tree_sitter_jinja2",
          wasm: new URL(n(848368), n.b),
          highlights: new URL(n(137323), n.b),
        },
        jq: {
          languageId: "jq",
          languageExport: "tree_sitter_jq",
          wasm: new URL(n(314786), n.b),
          highlights: new URL(n(20080), n.b),
        },
        json: {
          languageId: "json",
          languageExport: "tree_sitter_json",
          wasm: new URL(n(316712), n.b),
          highlights: new URL(n(187311), n.b),
        },
        julia: {
          languageId: "julia",
          languageExport: "tree_sitter_julia",
          wasm: new URL(n(285568), n.b),
          highlights: new URL(n(324828), n.b),
        },
        kotlin: {
          languageId: "kotlin",
          languageExport: "tree_sitter_kotlin",
          wasm: new URL(n(787434), n.b),
          highlights: new URL(n(823504), n.b),
        },
        lean: {
          languageId: "lean",
          languageExport: "tree_sitter_lean",
          wasm: new URL(n(655652), n.b),
          highlights: new URL(n(281161), n.b),
        },
        lua: {
          languageId: "lua",
          languageExport: "tree_sitter_lua",
          wasm: new URL(n(718992), n.b),
          highlights: new URL(n(871659), n.b),
          injections: new URL(n(273558), n.b),
          locals: new URL(n(864928), n.b),
        },
        markdown: {
          languageId: "markdown",
          languageExport: "tree_sitter_markdown",
          wasm: new URL(n(86414), n.b),
          highlights: new URL(n(9916), n.b),
          injections: new URL(n(516061), n.b),
        },
        markdown_inline: {
          languageId: "markdown_inline",
          languageExport: "tree_sitter_markdown_inline",
          wasm: new URL(n(348820), n.b),
          highlights: new URL(n(581934), n.b),
          injections: new URL(n(858376), n.b),
        },
        matlab: {
          languageId: "matlab",
          languageExport: "tree_sitter_matlab",
          wasm: new URL(n(675046), n.b),
          highlights: new URL(n(955268), n.b),
        },
        meson: {
          languageId: "meson",
          languageExport: "tree_sitter_meson",
          wasm: new URL(n(835952), n.b),
          highlights: new URL(n(448407), n.b),
        },
        ninja: {
          languageId: "ninja",
          languageExport: "tree_sitter_ninja",
          wasm: new URL(n(75464), n.b),
          highlights: new URL(n(980429), n.b),
        },
        nix: {
          languageId: "nix",
          languageExport: "tree_sitter_nix",
          wasm: new URL(n(242508), n.b),
          highlights: new URL(n(714370), n.b),
          injections: new URL(n(739191), n.b),
          locals: new URL(n(227473), n.b),
        },
        objc: {
          languageId: "objc",
          languageExport: "tree_sitter_objc",
          wasm: new URL(n(45456), n.b),
          highlights: new URL(n(974591), n.b),
          injections: new URL(n(860306), n.b),
          locals: new URL(n(373196), n.b),
        },
        ocaml: {
          languageId: "ocaml",
          languageExport: "tree_sitter_ocaml",
          wasm: new URL(n(916372), n.b),
          highlights: new URL(n(602297), n.b),
          locals: new URL(n(347294), n.b),
        },
        perl: {
          languageId: "perl",
          languageExport: "tree_sitter_perl",
          wasm: new URL(n(571834), n.b),
          highlights: new URL(n(358060), n.b),
          injections: new URL(n(486221), n.b),
        },
        php: {
          languageId: "php",
          languageExport: "tree_sitter_php",
          wasm: new URL(n(247524), n.b),
          highlights: new URL(n(910825), n.b),
          injections: new URL(n(323e3), n.b),
        },
        postscript: {
          languageId: "postscript",
          languageExport: "tree_sitter_postscript",
          wasm: new URL(n(628490), n.b),
          highlights: new URL(n(980524), n.b),
        },
        powershell: {
          languageId: "powershell",
          languageExport: "tree_sitter_powershell",
          wasm: new URL(n(177910), n.b),
          highlights: new URL(n(449048), n.b),
        },
        prolog: {
          languageId: "prolog",
          languageExport: "tree_sitter_prolog",
          wasm: new URL(n(330234), n.b),
          highlights: new URL(n(290858), n.b),
        },
        python: {
          languageId: "python",
          languageExport: "tree_sitter_python",
          wasm: new URL(n(181712), n.b),
          highlights: new URL(n(425335), n.b),
        },
        query: {
          languageId: "query",
          languageExport: "tree_sitter_query",
          wasm: new URL(n(892256), n.b),
          highlights: new URL(n(214685), n.b),
          injections: new URL(n(840660), n.b),
        },
        r: {
          languageId: "r",
          languageExport: "tree_sitter_r",
          wasm: new URL(n(157456), n.b),
          highlights: new URL(n(652715), n.b),
          locals: new URL(n(396576), n.b),
        },
        rego: {
          languageId: "rego",
          languageExport: "tree_sitter_rego",
          wasm: new URL(n(705750), n.b),
          highlights: new URL(n(968038), n.b),
          locals: new URL(n(914189), n.b),
        },
        rescript: {
          languageId: "rescript",
          languageExport: "tree_sitter_rescript",
          wasm: new URL(n(834640), n.b),
          highlights: new URL(n(855995), n.b),
          injections: new URL(n(479846), n.b),
          locals: new URL(n(539152), n.b),
        },
        ron: {
          languageId: "ron",
          languageExport: "tree_sitter_ron",
          wasm: new URL(n(762296), n.b),
          highlights: new URL(n(342870), n.b),
        },
        ruby: {
          languageId: "ruby",
          languageExport: "tree_sitter_ruby",
          wasm: new URL(n(282952), n.b),
          highlights: new URL(n(221081), n.b),
        },
        rust: {
          languageId: "rust",
          languageExport: "tree_sitter_rust_orchard",
          wasm: new URL(n(585232), n.b),
          highlights: new URL(n(544211), n.b),
          injections: new URL(n(153278), n.b),
        },
        scala: {
          languageId: "scala",
          languageExport: "tree_sitter_scala",
          wasm: new URL(n(715408), n.b),
          highlights: new URL(n(636155), n.b),
          locals: new URL(n(798928), n.b),
        },
        scheme: {
          languageId: "scheme",
          languageExport: "tree_sitter_scheme",
          wasm: new URL(n(910038), n.b),
          highlights: new URL(n(499150), n.b),
        },
        scss: {
          languageId: "scss",
          languageExport: "tree_sitter_scss",
          wasm: new URL(n(42040), n.b),
          highlights: new URL(n(581365), n.b),
        },
        solidity: {
          languageId: "solidity",
          languageExport: "tree_sitter_solidity",
          wasm: new URL(n(711194), n.b),
          highlights: new URL(n(93492), n.b),
          locals: new URL(n(307379), n.b),
        },
        sparql: {
          languageId: "sparql",
          languageExport: "tree_sitter_sparql",
          wasm: new URL(n(622914), n.b),
          highlights: new URL(n(512564), n.b),
        },
        sql: {
          languageId: "sql",
          languageExport: "tree_sitter_sql",
          wasm: new URL(n(295832), n.b),
          highlights: new URL(n(631189), n.b),
        },
        "ssh-config": {
          languageId: "ssh-config",
          languageExport: "tree_sitter_ssh_config",
          wasm: new URL(n(805938), n.b),
          highlights: new URL(n(400774), n.b),
          injections: new URL(n(557011), n.b),
        },
        starlark: {
          languageId: "starlark",
          languageExport: "tree_sitter_starlark",
          wasm: new URL(n(317952), n.b),
          highlights: new URL(n(757197), n.b),
          injections: new URL(n(362116), n.b),
          locals: new URL(n(607930), n.b),
        },
        styx: {
          languageId: "styx",
          languageExport: "tree_sitter_styx",
          wasm: new URL(n(793104), n.b),
          highlights: new URL(n(789227), n.b),
          injections: new URL(n(447638), n.b),
        },
        svelte: {
          languageId: "svelte",
          languageExport: "tree_sitter_svelte",
          wasm: new URL(n(463302), n.b),
          highlights: new URL(n(582814), n.b),
          injections: new URL(n(994763), n.b),
          locals: new URL(n(756661), n.b),
        },
        swift: {
          languageId: "swift",
          languageExport: "tree_sitter_swift",
          wasm: new URL(n(682004), n.b),
          highlights: new URL(n(259850), n.b),
          injections: new URL(n(134399), n.b),
          locals: new URL(n(917129), n.b),
        },
        textproto: {
          languageId: "textproto",
          languageExport: "tree_sitter_textproto",
          wasm: new URL(n(658400), n.b),
          highlights: new URL(n(264834), n.b),
        },
        thrift: {
          languageId: "thrift",
          languageExport: "tree_sitter_thrift",
          wasm: new URL(n(40570), n.b),
          highlights: new URL(n(584122), n.b),
          injections: new URL(n(259439), n.b),
          locals: new URL(n(720793), n.b),
        },
        tlaplus: {
          languageId: "tlaplus",
          languageExport: "tree_sitter_tlaplus",
          wasm: new URL(n(703724), n.b),
          highlights: new URL(n(58894), n.b),
          locals: new URL(n(661637), n.b),
        },
        toml: {
          languageId: "toml",
          languageExport: "tree_sitter_toml",
          wasm: new URL(n(155308), n.b),
          highlights: new URL(n(191649), n.b),
        },
        tsx: {
          languageId: "tsx",
          languageExport: "tree_sitter_tsx",
          wasm: new URL(n(21256), n.b),
          highlights: new URL(n(613110), n.b),
          locals: new URL(n(757629), n.b),
        },
        typescript: {
          languageId: "typescript",
          languageExport: "tree_sitter_typescript",
          wasm: new URL(n(733926), n.b),
          highlights: new URL(n(648506), n.b),
          locals: new URL(n(194201), n.b),
        },
        typst: {
          languageId: "typst",
          languageExport: "tree_sitter_typst",
          wasm: new URL(n(262848), n.b),
          highlights: new URL(n(13079), n.b),
          injections: new URL(n(960138), n.b),
        },
        verilog: {
          languageId: "verilog",
          languageExport: "tree_sitter_verilog",
          wasm: new URL(n(502768), n.b),
          highlights: new URL(n(486859), n.b),
        },
        vhdl: {
          languageId: "vhdl",
          languageExport: "tree_sitter_vhdl",
          wasm: new URL(n(276912), n.b),
          highlights: new URL(n(858987), n.b),
        },
        vim: {
          languageId: "vim",
          languageExport: "tree_sitter_vim",
          wasm: new URL(n(699736), n.b),
          highlights: new URL(n(330909), n.b),
          injections: new URL(n(440532), n.b),
        },
        vue: {
          languageId: "vue",
          languageExport: "tree_sitter_vue",
          wasm: new URL(n(769320), n.b),
          highlights: new URL(n(4081), n.b),
          injections: new URL(n(751968), n.b),
        },
        wit: {
          languageId: "wit",
          languageExport: "tree_sitter_wit",
          wasm: new URL(n(650024), n.b),
          highlights: new URL(n(856145), n.b),
          injections: new URL(n(413056), n.b),
        },
        x86asm: {
          languageId: "x86asm",
          languageExport: "tree_sitter_x86asm",
          wasm: new URL(n(26558), n.b),
          highlights: new URL(n(489700), n.b),
        },
        xml: {
          languageId: "xml",
          languageExport: "tree_sitter_xml",
          wasm: new URL(n(897836), n.b),
          highlights: new URL(n(730180), n.b),
        },
        yaml: {
          languageId: "yaml",
          languageExport: "tree_sitter_yaml",
          wasm: new URL(n(30290), n.b),
          highlights: new URL(n(395958), n.b),
        },
        yuri: {
          languageId: "yuri",
          languageExport: "tree_sitter_yuri",
          wasm: new URL(n(78170), n.b),
          highlights: new URL(n(686146), n.b),
        },
        zig: {
          languageId: "zig",
          languageExport: "tree_sitter_zig",
          wasm: new URL(n(256976), n.b),
          highlights: new URL(n(692027), n.b),
          injections: new URL(n(95334), n.b),
        },
        zsh: {
          languageId: "zsh",
          languageExport: "tree_sitter_zsh",
          wasm: new URL(n(727216), n.b),
          highlights: new URL(n(371952), n.b),
        },
      };
    },
    353134(e, t, n) {
      "use strict";
      n.d(t, { A: () => i });
      var r = n(807853);
      async function i() {
        let e = await u(),
          [t, i] = await Promise.all([
            (0, r.LM)(new URL(n(79445), n.b)),
            (0, r.LM)(new URL(n(531031), n.b)),
          ]),
          s = await e({ wasmBinary: t }),
          o = await s.loadWebAssemblyModule(i, { loadAsync: !0 });
        return new a(s, o);
      }
      class a {
        host;
        abi;
        constructor(e, t) {
          (this.host = e), (this.abi = t);
        }
        async loadGrammar(e) {
          if (!e.languageId)
            throw new r.gT(
              "grammar-registration-failed",
              "loadGrammar: languageId is required (must match the name referenced by injection queries)",
            );
          let [t, n, i, a] = await Promise.all([
              (0, r.LM)(e.wasm),
              (0, r.WY)(e.highlights),
              void 0 === e.injections ? "" : (0, r.WY)(e.injections),
              void 0 === e.locals ? "" : (0, r.WY)(e.locals),
            ]),
            o = (function (e, t) {
              if (void 0 !== t) {
                let n = e[t];
                if ("function" != typeof n)
                  throw new r.gT(
                    "grammar-language-export-missing",
                    `grammar module has no function export named ${JSON.stringify(t)}`,
                  );
                return n;
              }
              let n = Object.keys(e).filter(
                (t) =>
                  t.startsWith("tree_sitter_") && "function" == typeof e[t],
              );
              if (0 === n.length)
                throw new r.gT(
                  "grammar-language-export-missing",
                  "grammar module has no function export starting with tree_sitter_",
                );
              if (n.length > 1)
                throw new r.gT(
                  "grammar-language-export-missing",
                  `grammar module has multiple tree_sitter_* exports: ${n.join(", ")}. Pass options.languageExport to disambiguate.`,
                );
              return e[n[0]];
            })(
              await this.host.loadWebAssemblyModule(t, { loadAsync: !0 }),
              e.languageExport,
            )();
          if (!o)
            throw new r.gT(
              "grammar-registration-failed",
              "grammar tree_sitter_* export returned null",
            );
          let [u, c] = (0, r.BW)(this.host, e.languageId),
            [l, d] = (0, r.BW)(this.host, n),
            [h, f] = (0, r.BW)(this.host, i),
            [p, _] = (0, r.BW)(this.host, a),
            m = 0;
          try {
            m = this.abi.arborium_rt_register_grammar(
              o,
              u,
              c,
              l,
              d,
              h,
              f,
              p,
              _,
            );
          } finally {
            u && this.host._free(u),
              l && this.host._free(l),
              h && this.host._free(h),
              p && this.host._free(p);
          }
          if (0 === m)
            throw new r.gT(
              "grammar-registration-failed",
              "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
          return new s(this, m, o, e.languageId);
        }
      }
      class s {
        runtime;
        id;
        languagePtr;
        languageId;
        #e = !1;
        constructor(e, t, n, r) {
          (this.runtime = e),
            (this.id = t),
            (this.languagePtr = n),
            (this.languageId = r);
        }
        createSession() {
          this.#t();
          let e = this.runtime.abi.arborium_rt_create_session(this.id);
          if (0 === e)
            throw new r.gT(
              "session-creation-failed",
              `arborium_rt_create_session(${this.id}) returned 0`,
            );
          return new o(this, e);
        }
        unregister() {
          this.#e ||
            (this.runtime.abi.arborium_rt_unregister_grammar(this.id),
            (this.#e = !0));
        }
        #t() {
          if (this.#e)
            throw new r.gT(
              "grammar-registration-failed",
              `grammar ${this.id} has been unregistered`,
            );
        }
      }
      class o {
        grammar;
        id;
        #n = !1;
        constructor(e, t) {
          (this.grammar = e), (this.id = t);
        }
        setText(e) {
          this.#t();
          let [t, n] = (0, r.BW)(this.grammar.runtime.host, e);
          try {
            this.grammar.runtime.abi.arborium_rt_set_text(this.id, t, n);
          } finally {
            t && this.grammar.runtime.host._free(t);
          }
        }
        parse() {
          return (
            this.#t(),
            this.#r(
              "parse-failed",
              (e, t) =>
                this.grammar.runtime.abi.arborium_rt_parse_utf16(this.id, e, t),
              (e) =>
                0 === e.length
                  ? { spans: [], injections: [], fuel_used: 0, out_of_fuel: !1 }
                  : JSON.parse(e),
            )
          );
        }
        highlightToSpans(e = {}) {
          this.#t();
          let t = e.maxInjectionDepth ?? 3,
            n = this.#r(
              "highlight-failed",
              (e, n) =>
                this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(
                  this.id,
                  t,
                  e,
                  n,
                ),
              (e) =>
                0 === e.length
                  ? {
                      spans: [],
                      missing_injections: [],
                      out_of_fuel_languages: [],
                      fuel_used: 0,
                    }
                  : JSON.parse(e),
            );
          return {
            spans: n.spans,
            missingInjections: n.missing_injections,
            outOfFuelLanguages: n.out_of_fuel_languages,
            fuelUsed: n.fuel_used,
          };
        }
        highlightToHtml(e = {}) {
          this.#t();
          let t = e.maxInjectionDepth ?? 3,
            n = e.format ?? { kind: "custom-elements" },
            { host: i } = this.grammar.runtime,
            { code: a, prefix: s } = (function (e) {
              switch (e.kind) {
                case "custom-elements":
                  return { code: 0, prefix: "" };
                case "custom-elements-with-prefix":
                  return { code: 1, prefix: e.prefix };
                case "class-names":
                  return { code: 2, prefix: "" };
                case "class-names-with-prefix":
                  return { code: 3, prefix: e.prefix };
              }
            })(n),
            [o, u] = (0, r.BW)(i, s);
          try {
            let e = this.#r(
              "highlight-failed",
              (e, n) =>
                this.grammar.runtime.abi.arborium_rt_highlight_to_html(
                  this.id,
                  t,
                  a,
                  o,
                  u,
                  e,
                  n,
                ),
              (e) =>
                0 === e.length
                  ? {
                      html: "",
                      missing_injections: [],
                      out_of_fuel_languages: [],
                      fuel_used: 0,
                    }
                  : JSON.parse(e),
            );
            return {
              html: e.html,
              missingInjections: e.missing_injections,
              outOfFuelLanguages: e.out_of_fuel_languages,
              fuelUsed: e.fuel_used,
            };
          } finally {
            o && i._free(o);
          }
        }
        cancel() {
          this.#t(), this.grammar.runtime.abi.arborium_rt_cancel(this.id);
        }
        free() {
          this.#n ||
            (this.grammar.runtime.abi.arborium_rt_free_session(this.id),
            (this.#n = !0));
        }
        #t() {
          if (this.#n)
            throw new r.gT(
              "session-creation-failed",
              `session ${this.id} has been freed`,
            );
        }
        #r(e, t, n) {
          let { host: i, abi: a } = this.grammar.runtime,
            s = i._malloc(4),
            o = i._malloc(4);
          try {
            let u = t(s, o);
            if (0 !== u)
              throw new r.gT(e, `arborium_rt call returned status ${u}`);
            let c = i.getValue(s, "i32"),
              l = i.getValue(o, "i32");
            if (0 === l) return n("");
            try {
              return n((0, r.Sx)(i, c, l));
            } finally {
              a.arborium_rt_free(c, l);
            }
          } finally {
            i._free(s), i._free(o);
          }
        }
      }
      async function u() {
        return (await n.e("379098").then(n.bind(n, 623777))).default;
      }
    },
    120330(e, t, n) {
      "use strict";
      n.d(t, {
        BT: () => o,
        Wt: () => c,
        bf: () => s,
        xC: () =>
          function e(t) {
            if ("number" == typeof t) return new r.W(t);
            if ("bigint" == typeof t) return new r.W(t.toString());
            if (
              ((0, a.V1)(
                "symbol" != typeof t,
                "Symbol is not supported",
                TypeError,
              ),
              void 0 === t)
            )
              return new r.W(NaN);
            if (null === t || 0 === t) return i;
            if (!0 === t) return new r.W(1);
            if ("string" == typeof t)
              try {
                return new r.W(t);
              } catch {
                return new r.W(NaN);
              }
            (0, a.V1)("object" == typeof t, "object expected", TypeError);
            let n = (function (e, t) {
              if ("object" == typeof e && null != e) {
                let n,
                  r = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
                if (void 0 !== r) {
                  void 0 === t
                    ? (n = "default")
                    : "string" === t
                      ? (n = "string")
                      : ((0, a.V1)(
                          "number" === t,
                          'preferredType must be "string" or "number"',
                        ),
                        (n = "number"));
                  let i = r.call(e, n);
                  if ("object" != typeof i) return i;
                  throw TypeError("Cannot convert exotic object to primitive.");
                }
                for (let n of (void 0 === t && (t = "number"),
                "string" === t
                  ? ["toString", "valueOf"]
                  : ["valueOf", "toString"])) {
                  let t = e[n];
                  if (u(t)) {
                    let n = t.call(e);
                    if ("object" != typeof n) return n;
                  }
                }
                throw TypeError("Cannot convert object to primitive value");
              }
              return e;
            })(t, "number");
            return (
              (0, a.V1)("object" != typeof n, "object expected", TypeError),
              e(n)
            );
          },
      });
      var r = n(162929);
      new r.W(10);
      let i = new r.W(0);
      new r.W(-0);
      var a = n(243399);
      function s(e) {
        if ("symbol" == typeof e)
          throw TypeError("Cannot convert a Symbol value to a string");
        return String(e);
      }
      function o(e) {
        if (null == e)
          throw TypeError("undefined/null cannot be converted to object");
        return Object(e);
      }
      function u(e) {
        return "function" == typeof e;
      }
      function c(e, t, n) {
        if (!u(e)) return !1;
        if (n?.boundTargetFunction) return t instanceof n?.boundTargetFunction;
        if ("object" != typeof t) return !1;
        let r = e.prototype;
        if ("object" != typeof r)
          throw TypeError(
            "OrdinaryHasInstance called on an object with an invalid prototype property.",
          );
        return Object.prototype.isPrototypeOf.call(r, t);
      }
    },
    842830(e, t, n) {
      "use strict";
      function r(e) {
        return Intl.getCanonicalLocales(e);
      }
      n.d(t, { N: () => r });
    },
    97626(e, t, n) {
      "use strict";
      function r(e, t, n, r, i) {
        var a = e[t];
        if (void 0 === a) return i;
        let s = Number(a);
        if (isNaN(s) || s < n || s > r)
          throw RangeError(`${s} is outside of range [${n}, ${r}]`);
        return Math.floor(s);
      }
      n.d(t, { z: () => r });
    },
    518375(e, t, n) {
      "use strict";
      n.d(t, { W: () => i });
      var r = n(120330);
      function i(e, t, n, i, a) {
        if ("object" != typeof e) throw TypeError("Options must be an object");
        let s = e[t];
        if (void 0 !== s) {
          if ("boolean" !== n && "string" !== n)
            throw TypeError("invalid type");
          if (
            ("boolean" === n && (s = !!s),
            "string" === n && (s = (0, r.bf)(s)),
            void 0 !== i && !i.filter((e) => e == s).length)
          )
            throw RangeError(`${s} is not within ${i.join(", ")}`);
          return s;
        }
        return a;
      }
    },
    29685(e, t, n) {
      "use strict";
      n.d(t, { U: () => o });
      var r = n(183580),
        i = n(26232),
        a = n(120330),
        s = n(518375);
      function o(e, t, n) {
        return (
          void 0 !== n &&
            ((n = (0, a.BT)(n)),
            (0, s.W)(
              n,
              "localeMatcher",
              "string",
              ["lookup", "best fit"],
              "best fit",
            )),
          (function (e, t) {
            let n = [];
            for (let a of t) {
              let t = a.replace(i.KB, ""),
                s = (0, r.q)(e, t);
              s && n.push(s);
            }
            return n;
          })(Array.from(e), t)
        );
      }
    },
    243399(e, t, n) {
      "use strict";
      n.d(t, { A4: () => s, Nt: () => a, V1: () => i });
      var r = n(315847);
      function i(e, t, n = Error) {
        if (!e) throw new n(t);
      }
      let a = (0, r.B)((...e) => new Intl.NumberFormat(...e), {
        strategy: r.W.variadic,
      });
      (0, r.B)((...e) => new Intl.PluralRules(...e), {
        strategy: r.W.variadic,
      }),
        (0, r.B)((...e) => new Intl.Locale(...e), { strategy: r.W.variadic });
      let s = (0, r.B)((...e) => new Intl.ListFormat(...e), {
        strategy: r.W.variadic,
      });
    },
    315847(e, t, n) {
      "use strict";
      function r(e, t) {
        let n = t && t.cache ? t.cache : u,
          r = t && t.serializer ? t.serializer : s;
        return (
          t && t.strategy
            ? t.strategy
            : function (e, t) {
                var n, r;
                let s = 1 === e.length ? i : a;
                return (
                  (n = t.cache.create()),
                  (r = t.serializer),
                  s.bind(this, e, n, r)
                );
              }
        )(e, { cache: n, serializer: r });
      }
      function i(e, t, n, r) {
        let i =
            null == r || "number" == typeof r || "boolean" == typeof r
              ? r
              : n(r),
          a = t.get(i);
        return void 0 === a && ((a = e.call(this, r)), t.set(i, a)), a;
      }
      function a(e, t, n) {
        let r = Array.prototype.slice.call(arguments, 3),
          i = n(r),
          a = t.get(i);
        return void 0 === a && ((a = e.apply(this, r)), t.set(i, a)), a;
      }
      n.d(t, { B: () => r, W: () => c });
      let s = function () {
        return JSON.stringify(arguments);
      };
      class o {
        cache;
        constructor() {
          this.cache = Object.create(null);
        }
        get(e) {
          return this.cache[e];
        }
        set(e, t) {
          this.cache[e] = t;
        }
      }
      let u = {
          create: function () {
            return new o();
          },
        },
        c = {
          variadic: function (e, t) {
            var n, r;
            return (
              (n = t.cache.create()), (r = t.serializer), a.bind(this, e, n, r)
            );
          },
          monadic: function (e, t) {
            var n, r;
            return (
              (n = t.cache.create()), (r = t.serializer), i.bind(this, e, n, r)
            );
          },
        };
    },
    439489(e, t, n) {
      "use strict";
      n.d(t, { $: () => i });
      var r = n(518375);
      function i(e, t, n, i, a, s) {
        let o = (0, r.W)(t, e, "string", i, void 0),
          u = "always";
        void 0 === o &&
          ("digital" === n
            ? ("hours" !== e &&
                "minutes" !== e &&
                "seconds" !== e &&
                (u = "auto"),
              (o = a))
            : ((u = "auto"),
              (o = "numeric" === s || "2-digit" === s ? "numeric" : n)));
        let c = `${e}Display`,
          l = (0, r.W)(t, c, "string", ["always", "auto"], u);
        if ("numeric" === s || "2-digit" === s) {
          if ("numeric" !== o && "2-digit" !== o)
            throw RangeError("Can't mix numeric and non-numeric styles");
          if (
            (("minutes" === e || "seconds" === e) && (o = "2-digit"),
            "numeric" === o &&
              "always" === l &&
              ("milliseconds" === e ||
                "microseconds" === e ||
                "nanoseconds" === e))
          )
            throw RangeError(
              "Can't display milliseconds, microseconds, or nanoseconds in numeric format",
            );
        }
        return { style: o, display: l };
      }
    },
    369364(e, t, n) {
      "use strict";
      n.d(t, { m: () => o });
      var r = n(243399),
        i = n(206311),
        a = n(411211),
        s = n(501974);
      function o(e, t) {
        let n = [],
          o = !1,
          u = !1,
          c = (0, s.n)(e),
          l = c.dataLocale,
          d = a.Y.localeData[l];
        if (!d) throw TypeError("Invalid locale");
        let h = c.numberingSystem,
          f = d.digitalFormat[h];
        for (let e = 0; e < i.u.length && !o; e++) {
          let a = i.u[e],
            s = t[a.valueField],
            l = c[a.styleSlot],
            d = c[a.displaySlot],
            { unit: h, numberFormatUnit: p } = a,
            _ = Object.create(null);
          ("seconds" === h || "milliseconds" === h || "microseconds" === h) &&
            "numeric" ===
              ("seconds" === h
                ? c.milliseconds
                : "milliseconds" === h
                  ? c.microseconds
                  : c.nanoseconds) &&
            ("seconds" === h
              ? (s +=
                  t.milliseconds / 1e3 +
                  t.microseconds / 1e6 +
                  t.nanoseconds / 1e9)
              : "milliseconds" === h
                ? (s += t.microseconds / 1e3 + t.nanoseconds / 1e6)
                : (s += t.nanoseconds / 1e3),
            void 0 === c.fractionalDigits
              ? ((_.maximumFractionDigits = 9), (_.minimumFractionDigits = 0))
              : ((_.maximumFractionDigits = c.fractionalDigits),
                (_.minimumFractionDigits = c.fractionalDigits)),
            (_.roundingMode = "trunc"),
            (o = !0));
          if (0 !== s || "auto" !== d) {
            let e;
            (_.numberingSystem = c.numberingSystem),
              "2-digit" === l && (_.minimumIntegerDigits = 2),
              "2-digit" !== l &&
                "numeric" !== l &&
                ((_.style = "unit"), (_.unit = p), (_.unitDisplay = l));
            let t = (0, r.Nt)(c.locale, _);
            u
              ? (e = n[n.length - 1]).push({ type: "literal", value: f })
              : (e = []),
              t.formatToParts(s).forEach(({ type: t, value: n }) => {
                e.push({ type: t, value: n, unit: p });
              }),
              u ||
                (("2-digit" === l || "numeric" === l) && (u = !0), n.push(e));
          } else u = !1;
        }
        let p = Object.create(null);
        p.type = "unit";
        let _ = c.style;
        "digital" === _ && (_ = "short"), (p.style = _);
        let m = (0, r.A4)(c.locale, p),
          g = [];
        for (let e of n) {
          let t = "";
          for (let { value: n } of e) t += n;
          g.push(t);
        }
        let b = m.formatToParts(g),
          v = 0,
          y = n.length,
          w = [];
        for (let { type: e, value: t } of b)
          if ("element" === e) {
            for (let e of ((0, r.V1)(v < y, "Index out of bounds"), n[v]))
              w.push(e);
            v++;
          } else
            (0, r.V1)("literal" === e, "Type must be literal"),
              w.push({ type: "literal", value: t });
        return w;
      }
      n(632459);
    },
    727504(e, t, n) {
      "use strict";
      n.d(t, { H: () => o }), n(632459);
      var r = n(243399),
        i = n(206311),
        a = n(120330);
      function s(e) {
        let t = (0, a.xC)(e);
        return (0, r.V1)(t.isInteger(), `${e} is not an integer`), t.toNumber();
      }
      function o(e) {
        if ("object" != typeof e) {
          if ("string" == typeof e) throw RangeError("Invalid duration format");
          throw TypeError("Invalid duration");
        }
        let t = {
          years: 0,
          months: 0,
          weeks: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
          microseconds: 0,
          nanoseconds: 0,
        };
        if (
          (void 0 !== e.days && (t.days = s(e.days)),
          void 0 !== e.hours && (t.hours = s(e.hours)),
          void 0 !== e.microseconds && (t.microseconds = s(e.microseconds)),
          void 0 !== e.milliseconds && (t.milliseconds = s(e.milliseconds)),
          void 0 !== e.minutes && (t.minutes = s(e.minutes)),
          void 0 !== e.months && (t.months = s(e.months)),
          void 0 !== e.nanoseconds && (t.nanoseconds = s(e.nanoseconds)),
          void 0 !== e.seconds && (t.seconds = s(e.seconds)),
          void 0 !== e.weeks && (t.weeks = s(e.weeks)),
          void 0 !== e.years && (t.years = s(e.years)),
          void 0 === e.years &&
            void 0 === e.months &&
            void 0 === e.weeks &&
            void 0 === e.days &&
            void 0 === e.hours &&
            void 0 === e.minutes &&
            void 0 === e.seconds &&
            void 0 === e.milliseconds &&
            void 0 === e.microseconds &&
            void 0 === e.nanoseconds)
        )
          throw TypeError("Invalid duration format");
        if (
          !(function (e) {
            let t = (function (e) {
              for (let t of i.B) {
                if (e[t] < 0) return -1;
                if (e[t] > 0) return 1;
              }
              return 0;
            })(e);
            for (let n of i.B) {
              let i = e[n];
              if (
                ((0, r.V1)(isFinite(Number(i)), `${n} is not finite`),
                (i < 0 && t > 0) || (i > 0 && t < 0))
              )
                return !1;
            }
            return !0;
          })(t)
        )
          throw RangeError("Invalid duration format");
        return t;
      }
    },
    206311(e, t, n) {
      "use strict";
      n.d(t, { B: () => r, u: () => i }), n(632459);
      let r = [
          "years",
          "months",
          "weeks",
          "days",
          "hours",
          "minutes",
          "seconds",
          "milliseconds",
          "microseconds",
          "nanoseconds",
        ],
        i = [
          {
            valueField: "years",
            styleSlot: "years",
            displaySlot: "yearsDisplay",
            unit: "years",
            numberFormatUnit: "year",
          },
          {
            valueField: "months",
            styleSlot: "months",
            displaySlot: "monthsDisplay",
            unit: "months",
            numberFormatUnit: "month",
          },
          {
            valueField: "weeks",
            styleSlot: "weeks",
            displaySlot: "weeksDisplay",
            unit: "weeks",
            numberFormatUnit: "week",
          },
          {
            valueField: "days",
            styleSlot: "days",
            displaySlot: "daysDisplay",
            unit: "days",
            numberFormatUnit: "day",
          },
          {
            valueField: "hours",
            styleSlot: "hours",
            displaySlot: "hoursDisplay",
            unit: "hours",
            numberFormatUnit: "hour",
          },
          {
            valueField: "minutes",
            styleSlot: "minutes",
            displaySlot: "minutesDisplay",
            unit: "minutes",
            numberFormatUnit: "minute",
          },
          {
            valueField: "seconds",
            styleSlot: "seconds",
            displaySlot: "secondsDisplay",
            unit: "seconds",
            numberFormatUnit: "second",
          },
          {
            valueField: "milliseconds",
            styleSlot: "milliseconds",
            displaySlot: "millisecondsDisplay",
            unit: "milliseconds",
            numberFormatUnit: "millisecond",
          },
          {
            valueField: "microseconds",
            styleSlot: "microseconds",
            displaySlot: "microsecondsDisplay",
            unit: "microseconds",
            numberFormatUnit: "microsecond",
          },
          {
            valueField: "nanoseconds",
            styleSlot: "nanoseconds",
            displaySlot: "nanosecondsDisplay",
            unit: "nanoseconds",
            numberFormatUnit: "nanosecond",
          },
        ];
    },
    501974(e, t, n) {
      "use strict";
      n.d(t, { n: () => i });
      let r = new WeakMap();
      function i(e) {
        let t = r.get(e);
        return t || ((t = Object.create(null)), r.set(e, t)), t;
      }
    },
    225441(e, t, n) {
      "use strict";
      n.d(t, { P: () => r });
      let r = [
        "adlm",
        "ahom",
        "arab",
        "arabext",
        "armn",
        "armnlow",
        "bali",
        "beng",
        "bhks",
        "brah",
        "cakm",
        "cham",
        "cyrl",
        "deva",
        "diak",
        "ethi",
        "fullwide",
        "gara",
        "geor",
        "gong",
        "gonm",
        "grek",
        "greklow",
        "gujr",
        "gukh",
        "guru",
        "hanidays",
        "hanidec",
        "hans",
        "hansfin",
        "hant",
        "hantfin",
        "hebr",
        "hmng",
        "hmnp",
        "java",
        "jpan",
        "jpanfin",
        "jpanyear",
        "kali",
        "kawi",
        "khmr",
        "knda",
        "krai",
        "lana",
        "lanatham",
        "laoo",
        "latn",
        "lepc",
        "limb",
        "mathbold",
        "mathdbl",
        "mathmono",
        "mathsanb",
        "mathsans",
        "mlym",
        "modi",
        "mong",
        "mroo",
        "mtei",
        "mymr",
        "mymrepka",
        "mymrpao",
        "mymrshan",
        "mymrtlng",
        "nagm",
        "newa",
        "nkoo",
        "olck",
        "onao",
        "orya",
        "osma",
        "outlined",
        "rohg",
        "roman",
        "romanlow",
        "saur",
        "segment",
        "shrd",
        "sind",
        "sinh",
        "sora",
        "sund",
        "sunu",
        "takr",
        "talu",
        "taml",
        "tamldec",
        "telu",
        "thai",
        "tibt",
        "tirh",
        "tnsa",
        "tols",
        "vaii",
        "wara",
        "wcho",
      ];
    },
    762437(e, t, n) {
      "use strict";
      n.d(t, { N: () => r });
      let r = {
        default: ":",
        localeData: {
          aa: { nu: ["latn"] },
          "aa-DJ": { nu: ["latn"] },
          "aa-ER": { nu: ["latn"] },
          ab: { nu: ["latn"] },
          af: { nu: ["latn"] },
          "af-NA": { nu: ["latn"] },
          agq: { nu: ["latn"] },
          ak: { nu: ["latn"] },
          am: { nu: ["latn"] },
          an: { nu: ["latn"] },
          ann: { nu: ["latn"] },
          apc: { nu: ["latn"] },
          ar: { nu: ["latn", "latn"] },
          "ar-AE": { nu: ["latn", "latn"] },
          "ar-BH": { nu: ["arab", "latn"] },
          "ar-DJ": { nu: ["arab", "latn"] },
          "ar-DZ": { nu: ["latn", "latn"] },
          "ar-EG": { nu: ["arab", "latn"] },
          "ar-EH": { nu: ["latn", "latn"] },
          "ar-ER": { nu: ["arab", "latn"] },
          "ar-IL": { nu: ["arab", "latn"] },
          "ar-IQ": { nu: ["arab", "latn"] },
          "ar-JO": { nu: ["arab", "latn"] },
          "ar-KM": { nu: ["arab", "latn"] },
          "ar-KW": { nu: ["arab", "latn"] },
          "ar-LB": { nu: ["arab", "latn"] },
          "ar-LY": { nu: ["latn", "latn"] },
          "ar-MA": { nu: ["latn", "latn"] },
          "ar-MR": { nu: ["arab", "latn"] },
          "ar-OM": { nu: ["arab", "latn"] },
          "ar-PS": { nu: ["arab", "latn"] },
          "ar-QA": { nu: ["arab", "latn"] },
          "ar-SA": { nu: ["arab", "latn"] },
          "ar-SD": { nu: ["arab", "latn"] },
          "ar-SO": { nu: ["arab", "latn"] },
          "ar-SS": { nu: ["arab", "latn"] },
          "ar-SY": { nu: ["arab", "latn"] },
          "ar-TD": { nu: ["arab", "latn"] },
          "ar-TN": { nu: ["latn", "latn"] },
          "ar-YE": { nu: ["arab", "latn"] },
          arn: { nu: ["latn"] },
          as: { nu: ["beng"] },
          asa: { nu: ["latn"] },
          ast: { nu: ["latn"] },
          az: { nu: ["latn"] },
          "az-Arab": { nu: ["arabext"] },
          "az-Arab-IQ": { nu: ["arabext"] },
          "az-Arab-TR": { nu: ["arabext"] },
          "az-Cyrl": { nu: ["latn"] },
          "az-Latn": { nu: ["latn"] },
          ba: { nu: ["latn"] },
          bal: { nu: ["latn"] },
          "bal-Arab": { nu: ["latn"] },
          "bal-Latn": { nu: ["latn"] },
          bas: { nu: ["latn"] },
          be: { nu: ["latn"] },
          "be-tarask": { nu: ["latn"] },
          bem: { nu: ["latn"] },
          bew: { nu: ["latn"] },
          bez: { nu: ["latn"] },
          bg: { nu: ["latn"] },
          bgc: { nu: ["deva"] },
          bgn: { nu: ["arabext"] },
          "bgn-AE": { nu: ["arabext"] },
          "bgn-AF": { nu: ["arabext"] },
          "bgn-IR": { nu: ["arabext"] },
          "bgn-OM": { nu: ["arabext"] },
          bho: { nu: ["deva"] },
          blo: { nu: ["latn"] },
          blt: { nu: ["latn"] },
          bm: { nu: ["latn"] },
          "bm-Nkoo": { nu: ["latn"] },
          bn: { nu: ["beng"] },
          "bn-IN": { nu: ["beng"] },
          bo: { nu: ["latn"] },
          "bo-IN": { nu: ["latn"] },
          bqi: { nu: ["latn"] },
          br: { nu: ["latn"] },
          brx: { nu: ["latn"] },
          bs: { nu: ["latn"] },
          "bs-Cyrl": { nu: ["latn"] },
          "bs-Latn": { nu: ["latn"] },
          bss: { nu: ["latn"] },
          bua: { nu: ["latn"] },
          byn: { nu: ["latn"] },
          ca: { nu: ["latn"] },
          "ca-AD": { nu: ["latn"] },
          "ca-ES-valencia": { nu: ["latn"] },
          "ca-FR": { nu: ["latn"] },
          "ca-IT": { nu: ["latn"] },
          cad: { nu: ["latn"] },
          cch: { nu: ["latn"] },
          ccp: { nu: ["cakm"] },
          "ccp-IN": { nu: ["cakm"] },
          ce: { nu: ["latn"] },
          ceb: { nu: ["latn"] },
          cgg: { nu: ["latn"] },
          cho: { nu: ["latn"] },
          chr: { nu: ["latn"] },
          cic: { nu: ["latn"] },
          ckb: { nu: ["arab"] },
          "ckb-IR": { nu: ["arab"] },
          co: { nu: ["latn"] },
          cop: { nu: ["latn"] },
          cs: { nu: ["latn"] },
          csw: { nu: ["latn"] },
          cu: { nu: ["latn"] },
          cv: { nu: ["latn"] },
          cy: { nu: ["latn"] },
          da: { nu: ["latn"], separator: { latn: "." } },
          "da-GL": { nu: ["latn"], separator: { latn: "." } },
          dav: { nu: ["latn"] },
          de: { nu: ["latn"] },
          "de-AT": { nu: ["latn"] },
          "de-BE": { nu: ["latn"] },
          "de-CH": { nu: ["latn"] },
          "de-IT": { nu: ["latn"] },
          "de-LI": { nu: ["latn"] },
          "de-LU": { nu: ["latn"] },
          dje: { nu: ["latn"] },
          doi: { nu: ["latn"] },
          dsb: { nu: ["latn"] },
          dua: { nu: ["latn"] },
          dv: { nu: ["latn"] },
          dyo: { nu: ["latn"] },
          dz: { nu: ["tibt"] },
          ebu: { nu: ["latn"] },
          ee: { nu: ["latn"] },
          "ee-TG": { nu: ["latn"] },
          el: { nu: ["latn"] },
          "el-CY": { nu: ["latn"] },
          "el-polyton": { nu: ["latn"] },
          en: { nu: ["latn"] },
          "en-001": { nu: ["latn"] },
          "en-150": { nu: ["latn"] },
          "en-AE": { nu: ["latn"] },
          "en-AG": { nu: ["latn"] },
          "en-AI": { nu: ["latn"] },
          "en-AS": { nu: ["latn"] },
          "en-AT": { nu: ["latn"] },
          "en-AU": { nu: ["latn"] },
          "en-BB": { nu: ["latn"] },
          "en-BE": { nu: ["latn"] },
          "en-BI": { nu: ["latn"] },
          "en-BM": { nu: ["latn"] },
          "en-BS": { nu: ["latn"] },
          "en-BW": { nu: ["latn"] },
          "en-BZ": { nu: ["latn"] },
          "en-CA": { nu: ["latn"] },
          "en-CC": { nu: ["latn"] },
          "en-CH": { nu: ["latn"] },
          "en-CK": { nu: ["latn"] },
          "en-CM": { nu: ["latn"] },
          "en-CX": { nu: ["latn"] },
          "en-CY": { nu: ["latn"] },
          "en-CZ": { nu: ["latn"] },
          "en-DE": { nu: ["latn"] },
          "en-DG": { nu: ["latn"] },
          "en-DK": { nu: ["latn"], separator: { latn: "." } },
          "en-DM": { nu: ["latn"] },
          "en-Dsrt": { nu: ["latn"] },
          "en-EE": { nu: ["latn"] },
          "en-ER": { nu: ["latn"] },
          "en-ES": { nu: ["latn"] },
          "en-FI": { nu: ["latn"], separator: { latn: "." } },
          "en-FJ": { nu: ["latn"] },
          "en-FK": { nu: ["latn"] },
          "en-FM": { nu: ["latn"] },
          "en-FR": { nu: ["latn"] },
          "en-GB": { nu: ["latn"] },
          "en-GD": { nu: ["latn"] },
          "en-GE": { nu: ["latn"] },
          "en-GG": { nu: ["latn"] },
          "en-GH": { nu: ["latn"] },
          "en-GI": { nu: ["latn"] },
          "en-GM": { nu: ["latn"] },
          "en-GS": { nu: ["latn"] },
          "en-GU": { nu: ["latn"] },
          "en-GY": { nu: ["latn"] },
          "en-HK": { nu: ["latn"] },
          "en-HU": { nu: ["latn"] },
          "en-ID": { nu: ["latn"] },
          "en-IE": { nu: ["latn"] },
          "en-IL": { nu: ["latn"] },
          "en-IM": { nu: ["latn"] },
          "en-IN": { nu: ["latn"] },
          "en-IO": { nu: ["latn"] },
          "en-IT": { nu: ["latn"] },
          "en-JE": { nu: ["latn"] },
          "en-JM": { nu: ["latn"] },
          "en-JP": { nu: ["latn"] },
          "en-KE": { nu: ["latn"] },
          "en-KI": { nu: ["latn"] },
          "en-KN": { nu: ["latn"] },
          "en-KY": { nu: ["latn"] },
          "en-LC": { nu: ["latn"] },
          "en-LR": { nu: ["latn"] },
          "en-LS": { nu: ["latn"] },
          "en-LT": { nu: ["latn"] },
          "en-LV": { nu: ["latn"] },
          "en-MG": { nu: ["latn"] },
          "en-MH": { nu: ["latn"] },
          "en-MO": { nu: ["latn"] },
          "en-MP": { nu: ["latn"] },
          "en-MS": { nu: ["latn"] },
          "en-MT": { nu: ["latn"] },
          "en-MU": { nu: ["latn"] },
          "en-MV": { nu: ["latn"] },
          "en-MW": { nu: ["latn"] },
          "en-MY": { nu: ["latn"] },
          "en-NA": { nu: ["latn"] },
          "en-NF": { nu: ["latn"] },
          "en-NG": { nu: ["latn"] },
          "en-NL": { nu: ["latn"] },
          "en-NO": { nu: ["latn"] },
          "en-NR": { nu: ["latn"] },
          "en-NU": { nu: ["latn"] },
          "en-NZ": { nu: ["latn"] },
          "en-PG": { nu: ["latn"] },
          "en-PH": { nu: ["latn"] },
          "en-PK": { nu: ["latn"] },
          "en-PL": { nu: ["latn"] },
          "en-PN": { nu: ["latn"] },
          "en-PR": { nu: ["latn"] },
          "en-PT": { nu: ["latn"] },
          "en-PW": { nu: ["latn"] },
          "en-RO": { nu: ["latn"] },
          "en-RW": { nu: ["latn"] },
          "en-SB": { nu: ["latn"] },
          "en-SC": { nu: ["latn"] },
          "en-SD": { nu: ["latn"] },
          "en-SE": { nu: ["latn"] },
          "en-SG": { nu: ["latn"] },
          "en-SH": { nu: ["latn"] },
          "en-SI": { nu: ["latn"] },
          "en-SK": { nu: ["latn"] },
          "en-SL": { nu: ["latn"] },
          "en-SS": { nu: ["latn"] },
          "en-SX": { nu: ["latn"] },
          "en-SZ": { nu: ["latn"] },
          "en-Shaw": { nu: ["latn"] },
          "en-TC": { nu: ["latn"] },
          "en-TK": { nu: ["latn"] },
          "en-TO": { nu: ["latn"] },
          "en-TT": { nu: ["latn"] },
          "en-TV": { nu: ["latn"] },
          "en-TZ": { nu: ["latn"] },
          "en-UA": { nu: ["latn"] },
          "en-UG": { nu: ["latn"] },
          "en-UM": { nu: ["latn"] },
          "en-VC": { nu: ["latn"] },
          "en-VG": { nu: ["latn"] },
          "en-VI": { nu: ["latn"] },
          "en-VU": { nu: ["latn"] },
          "en-WS": { nu: ["latn"] },
          "en-ZA": { nu: ["latn"] },
          "en-ZM": { nu: ["latn"] },
          "en-ZW": { nu: ["latn"] },
          eo: { nu: ["latn"] },
          es: { nu: ["latn"] },
          "es-419": { nu: ["latn"] },
          "es-AR": { nu: ["latn"] },
          "es-BO": { nu: ["latn"] },
          "es-BR": { nu: ["latn"] },
          "es-BZ": { nu: ["latn"] },
          "es-CL": { nu: ["latn"] },
          "es-CO": { nu: ["latn"] },
          "es-CR": { nu: ["latn"] },
          "es-CU": { nu: ["latn"] },
          "es-DO": { nu: ["latn"] },
          "es-EA": { nu: ["latn"] },
          "es-EC": { nu: ["latn"] },
          "es-GQ": { nu: ["latn"] },
          "es-GT": { nu: ["latn"] },
          "es-HN": { nu: ["latn"] },
          "es-IC": { nu: ["latn"] },
          "es-MX": { nu: ["latn"] },
          "es-NI": { nu: ["latn"] },
          "es-PA": { nu: ["latn"] },
          "es-PE": { nu: ["latn"] },
          "es-PH": { nu: ["latn"] },
          "es-PR": { nu: ["latn"] },
          "es-PY": { nu: ["latn"] },
          "es-SV": { nu: ["latn"] },
          "es-US": { nu: ["latn"] },
          "es-UY": { nu: ["latn"] },
          "es-VE": { nu: ["latn"] },
          et: { nu: ["latn"] },
          eu: { nu: ["latn"] },
          ewo: { nu: ["latn"] },
          fa: { nu: ["arabext"] },
          "fa-AF": { nu: ["arabext"] },
          ff: { nu: ["latn"] },
          "ff-Adlm": { nu: ["adlm"] },
          "ff-Adlm-BF": { nu: ["adlm"] },
          "ff-Adlm-CM": { nu: ["adlm"] },
          "ff-Adlm-GH": { nu: ["adlm"] },
          "ff-Adlm-GM": { nu: ["adlm"] },
          "ff-Adlm-GW": { nu: ["adlm"] },
          "ff-Adlm-LR": { nu: ["adlm"] },
          "ff-Adlm-MR": { nu: ["adlm"] },
          "ff-Adlm-NE": { nu: ["adlm"] },
          "ff-Adlm-NG": { nu: ["adlm"] },
          "ff-Adlm-SL": { nu: ["adlm"] },
          "ff-Adlm-SN": { nu: ["adlm"] },
          "ff-Latn": { nu: ["latn"] },
          "ff-Latn-BF": { nu: ["latn"] },
          "ff-Latn-CM": { nu: ["latn"] },
          "ff-Latn-GH": { nu: ["latn"] },
          "ff-Latn-GM": { nu: ["latn"] },
          "ff-Latn-GN": { nu: ["latn"] },
          "ff-Latn-GW": { nu: ["latn"] },
          "ff-Latn-LR": { nu: ["latn"] },
          "ff-Latn-MR": { nu: ["latn"] },
          "ff-Latn-NE": { nu: ["latn"] },
          "ff-Latn-NG": { nu: ["latn"] },
          "ff-Latn-SL": { nu: ["latn"] },
          fi: { nu: ["latn"], separator: { latn: "." } },
          fil: { nu: ["latn"] },
          fo: { nu: ["latn"] },
          "fo-DK": { nu: ["latn"] },
          fr: { nu: ["latn"] },
          "fr-BE": { nu: ["latn"] },
          "fr-BF": { nu: ["latn"] },
          "fr-BI": { nu: ["latn"] },
          "fr-BJ": { nu: ["latn"] },
          "fr-BL": { nu: ["latn"] },
          "fr-CA": { nu: ["latn"] },
          "fr-CD": { nu: ["latn"] },
          "fr-CF": { nu: ["latn"] },
          "fr-CG": { nu: ["latn"] },
          "fr-CH": { nu: ["latn"] },
          "fr-CI": { nu: ["latn"] },
          "fr-CM": { nu: ["latn"] },
          "fr-DJ": { nu: ["latn"] },
          "fr-DZ": { nu: ["latn"] },
          "fr-GA": { nu: ["latn"] },
          "fr-GF": { nu: ["latn"] },
          "fr-GN": { nu: ["latn"] },
          "fr-GP": { nu: ["latn"] },
          "fr-GQ": { nu: ["latn"] },
          "fr-HT": { nu: ["latn"] },
          "fr-KM": { nu: ["latn"] },
          "fr-LU": { nu: ["latn"] },
          "fr-MA": { nu: ["latn"] },
          "fr-MC": { nu: ["latn"] },
          "fr-MF": { nu: ["latn"] },
          "fr-MG": { nu: ["latn"] },
          "fr-ML": { nu: ["latn"] },
          "fr-MQ": { nu: ["latn"] },
          "fr-MR": { nu: ["latn"] },
          "fr-MU": { nu: ["latn"] },
          "fr-NC": { nu: ["latn"] },
          "fr-NE": { nu: ["latn"] },
          "fr-PF": { nu: ["latn"] },
          "fr-PM": { nu: ["latn"] },
          "fr-RE": { nu: ["latn"] },
          "fr-RW": { nu: ["latn"] },
          "fr-SC": { nu: ["latn"] },
          "fr-SN": { nu: ["latn"] },
          "fr-SY": { nu: ["latn"] },
          "fr-TD": { nu: ["latn"] },
          "fr-TG": { nu: ["latn"] },
          "fr-TN": { nu: ["latn"] },
          "fr-VU": { nu: ["latn"] },
          "fr-WF": { nu: ["latn"] },
          "fr-YT": { nu: ["latn"] },
          frr: { nu: ["latn"] },
          fur: { nu: ["latn"] },
          fy: { nu: ["latn"] },
          ga: { nu: ["latn"] },
          "ga-GB": { nu: ["latn"] },
          gaa: { nu: ["latn"] },
          gd: { nu: ["latn"] },
          gez: { nu: ["latn"] },
          "gez-ER": { nu: ["latn"] },
          gl: { nu: ["latn"] },
          gn: { nu: ["latn"] },
          gsw: { nu: ["latn"] },
          "gsw-FR": { nu: ["latn"] },
          "gsw-LI": { nu: ["latn"] },
          gu: { nu: ["latn"] },
          guz: { nu: ["latn"] },
          gv: { nu: ["latn"] },
          ha: { nu: ["latn"] },
          "ha-Arab": { nu: ["latn"] },
          "ha-Arab-SD": { nu: ["latn"] },
          "ha-GH": { nu: ["latn"] },
          "ha-NE": { nu: ["latn"] },
          haw: { nu: ["latn"] },
          he: { nu: ["latn"] },
          hi: { nu: ["latn"] },
          "hi-Latn": { nu: ["latn"] },
          hnj: { nu: ["hmnp", "latn"] },
          "hnj-Hmnp": { nu: ["hmnp", "latn"] },
          hr: { nu: ["latn"] },
          "hr-BA": { nu: ["latn"] },
          hsb: { nu: ["latn"] },
          ht: { nu: ["latn"] },
          hu: { nu: ["latn"] },
          hy: { nu: ["latn"] },
          ia: { nu: ["latn"] },
          id: { nu: ["latn"], separator: { latn: "." } },
          ie: { nu: ["latn"] },
          ig: { nu: ["latn"] },
          ii: { nu: ["latn"] },
          io: { nu: ["latn"] },
          is: { nu: ["latn"] },
          it: { nu: ["latn"] },
          "it-CH": { nu: ["latn"] },
          "it-SM": { nu: ["latn"] },
          "it-VA": { nu: ["latn"] },
          iu: { nu: ["latn"] },
          "iu-Latn": { nu: ["latn"] },
          ja: { nu: ["latn"] },
          jbo: { nu: ["latn"] },
          jgo: { nu: ["latn"] },
          jmc: { nu: ["latn"] },
          jv: { nu: ["latn"] },
          ka: { nu: ["latn"] },
          kaa: { nu: ["latn"] },
          "kaa-Cyrl": { nu: ["latn"] },
          "kaa-Latn": { nu: ["latn"] },
          kab: { nu: ["latn"] },
          kaj: { nu: ["latn"] },
          kam: { nu: ["latn"] },
          kcg: { nu: ["latn"] },
          kde: { nu: ["latn"] },
          kea: { nu: ["latn"] },
          kek: { nu: ["latn"] },
          ken: { nu: ["latn"] },
          kgp: { nu: ["latn"] },
          khq: { nu: ["latn"] },
          ki: { nu: ["latn"] },
          kk: { nu: ["latn"] },
          "kk-Arab": { nu: ["latn"] },
          "kk-Cyrl": { nu: ["latn"] },
          "kk-KZ": { nu: ["latn"] },
          kkj: { nu: ["latn"] },
          kl: { nu: ["latn"] },
          kln: { nu: ["latn"] },
          km: { nu: ["latn"] },
          kn: { nu: ["latn"] },
          ko: { nu: ["latn"] },
          "ko-CN": { nu: ["latn"] },
          "ko-KP": { nu: ["latn"] },
          kok: { nu: ["latn"] },
          "kok-Deva": { nu: ["latn"] },
          "kok-Latn": { nu: ["latn"] },
          kpe: { nu: ["latn"] },
          "kpe-GN": { nu: ["latn"] },
          ks: { nu: ["arabext"] },
          "ks-Arab": { nu: ["arabext"] },
          "ks-Deva": { nu: ["latn"] },
          ksb: { nu: ["latn"] },
          ksf: { nu: ["latn"] },
          ksh: { nu: ["latn"] },
          ku: { nu: ["latn"] },
          "ku-Arab": { nu: ["latn"] },
          "ku-Arab-IR": { nu: ["latn"] },
          "ku-Latn": { nu: ["latn"] },
          "ku-Latn-IQ": { nu: ["latn"] },
          "ku-Latn-SY": { nu: ["latn"] },
          "ku-TR": { nu: ["latn"] },
          kw: { nu: ["latn"] },
          kxv: { nu: ["latn"] },
          "kxv-Deva": { nu: ["latn"] },
          "kxv-Latn": { nu: ["latn"] },
          "kxv-Orya": { nu: ["latn"] },
          "kxv-Telu": { nu: ["latn"] },
          ky: { nu: ["latn"] },
          la: { nu: ["latn"] },
          lag: { nu: ["latn"] },
          lb: { nu: ["latn"] },
          lg: { nu: ["latn"] },
          lij: { nu: ["latn"] },
          lkt: { nu: ["latn"] },
          lld: { nu: ["latn"] },
          lmo: { nu: ["latn"] },
          ln: { nu: ["latn"] },
          "ln-AO": { nu: ["latn"] },
          "ln-CF": { nu: ["latn"] },
          "ln-CG": { nu: ["latn"] },
          lo: { nu: ["latn"] },
          lrc: { nu: ["arabext"] },
          "lrc-IQ": { nu: ["arabext"] },
          lt: { nu: ["latn"] },
          ltg: { nu: ["latn"] },
          lu: { nu: ["latn"] },
          luo: { nu: ["latn"] },
          luy: { nu: ["latn"] },
          lv: { nu: ["latn"] },
          lzz: { nu: ["latn"] },
          mai: { nu: ["latn"] },
          mas: { nu: ["latn"] },
          "mas-TZ": { nu: ["latn"] },
          mdf: { nu: ["latn"] },
          mer: { nu: ["latn"] },
          mfe: { nu: ["latn"] },
          mg: { nu: ["latn"] },
          mgh: { nu: ["latn"] },
          mgo: { nu: ["latn"] },
          mhn: { nu: ["latn"] },
          mi: { nu: ["latn"] },
          mic: { nu: ["latn"] },
          mk: { nu: ["latn"] },
          ml: { nu: ["latn"] },
          mn: { nu: ["latn"] },
          "mn-Mong": { nu: ["latn"] },
          "mn-Mong-MN": { nu: ["latn"] },
          mni: { nu: ["beng"] },
          "mni-Beng": { nu: ["beng"] },
          "mni-Mtei": { nu: ["mtei"] },
          moh: { nu: ["latn"] },
          mr: { nu: ["deva"] },
          ms: { nu: ["latn"] },
          "ms-Arab": { nu: ["latn"] },
          "ms-Arab-BN": { nu: ["latn"] },
          "ms-BN": { nu: ["latn"] },
          "ms-ID": { nu: ["latn"], separator: { latn: "." } },
          "ms-SG": { nu: ["latn"] },
          mt: { nu: ["latn"] },
          mua: { nu: ["latn"] },
          mus: { nu: ["latn"] },
          mww: { nu: ["hmnp", "latn"] },
          "mww-Hmnp": { nu: ["hmnp", "latn"] },
          my: { nu: ["mymr"] },
          myv: { nu: ["latn"] },
          mzn: { nu: ["arabext"] },
          naq: { nu: ["latn"] },
          nb: { nu: ["latn"] },
          "nb-SJ": { nu: ["latn"] },
          nd: { nu: ["latn"] },
          nds: { nu: ["latn"] },
          "nds-NL": { nu: ["latn"] },
          ne: { nu: ["deva"] },
          "ne-IN": { nu: ["deva"] },
          nl: { nu: ["latn"] },
          "nl-AW": { nu: ["latn"] },
          "nl-BE": { nu: ["latn"] },
          "nl-BQ": { nu: ["latn"] },
          "nl-CW": { nu: ["latn"] },
          "nl-SR": { nu: ["latn"] },
          "nl-SX": { nu: ["latn"] },
          nmg: { nu: ["latn"] },
          nn: { nu: ["latn"] },
          nnh: { nu: ["latn"] },
          no: { nu: ["latn"] },
          nqo: { nu: ["nkoo"] },
          nr: { nu: ["latn"] },
          nso: { nu: ["latn"] },
          nus: { nu: ["latn"] },
          nv: { nu: ["latn"] },
          ny: { nu: ["latn"] },
          nyn: { nu: ["latn"] },
          oc: { nu: ["latn"] },
          "oc-ES": { nu: ["latn"] },
          oka: { nu: ["latn"] },
          "oka-US": { nu: ["latn"] },
          om: { nu: ["latn"] },
          "om-KE": { nu: ["latn"] },
          or: { nu: ["latn"] },
          os: { nu: ["latn"] },
          "os-RU": { nu: ["latn"] },
          osa: { nu: ["latn"] },
          pa: { nu: ["latn"] },
          "pa-Arab": { nu: ["arabext"] },
          "pa-Guru": { nu: ["latn"] },
          pap: { nu: ["latn"] },
          "pap-AW": { nu: ["latn"] },
          pcm: { nu: ["latn"] },
          pi: { nu: ["latn"] },
          "pi-Latn": { nu: ["latn"] },
          pis: { nu: ["latn"] },
          pl: { nu: ["latn"] },
          pms: { nu: ["latn"] },
          prg: { nu: ["latn"] },
          ps: { nu: ["arabext"] },
          "ps-PK": { nu: ["arabext"] },
          pt: { nu: ["latn"] },
          "pt-AO": { nu: ["latn"] },
          "pt-CH": { nu: ["latn"] },
          "pt-CV": { nu: ["latn"] },
          "pt-GQ": { nu: ["latn"] },
          "pt-GW": { nu: ["latn"] },
          "pt-LU": { nu: ["latn"] },
          "pt-MO": { nu: ["latn"] },
          "pt-MZ": { nu: ["latn"] },
          "pt-PT": { nu: ["latn"] },
          "pt-ST": { nu: ["latn"] },
          "pt-TL": { nu: ["latn"] },
          qu: { nu: ["latn"] },
          "qu-BO": { nu: ["latn"] },
          "qu-EC": { nu: ["latn"] },
          quc: { nu: ["latn"] },
          raj: { nu: ["deva"] },
          rhg: { nu: ["latn"] },
          "rhg-Rohg": { nu: ["latn"] },
          "rhg-Rohg-BD": { nu: ["latn"] },
          rif: { nu: ["latn"] },
          rm: { nu: ["latn"] },
          rn: { nu: ["latn"] },
          ro: { nu: ["latn"] },
          "ro-MD": { nu: ["latn"] },
          rof: { nu: ["latn"] },
          ru: { nu: ["latn"] },
          "ru-BY": { nu: ["latn"] },
          "ru-KG": { nu: ["latn"] },
          "ru-KZ": { nu: ["latn"] },
          "ru-MD": { nu: ["latn"] },
          "ru-UA": { nu: ["latn"] },
          rw: { nu: ["latn"] },
          rwk: { nu: ["latn"] },
          sa: { nu: ["deva"] },
          sah: { nu: ["latn"] },
          saq: { nu: ["latn"] },
          sat: { nu: ["olck"] },
          "sat-Deva": { nu: ["deva"] },
          "sat-Olck": { nu: ["olck"] },
          sbp: { nu: ["latn"] },
          sc: { nu: ["latn"] },
          scn: { nu: ["latn"] },
          sd: { nu: ["arab"] },
          "sd-Arab": { nu: ["arab"] },
          "sd-Deva": { nu: ["latn"] },
          sdh: { nu: ["arab"] },
          "sdh-IQ": { nu: ["arab"] },
          se: { nu: ["latn"] },
          "se-FI": { nu: ["latn"] },
          "se-SE": { nu: ["latn"] },
          seh: { nu: ["latn"] },
          ses: { nu: ["latn"] },
          sg: { nu: ["latn"] },
          sgs: { nu: ["latn"] },
          shi: { nu: ["latn"] },
          "shi-Latn": { nu: ["latn"] },
          "shi-Tfng": { nu: ["latn"] },
          shn: { nu: ["latn"] },
          "shn-TH": { nu: ["latn"] },
          si: { nu: ["latn"], separator: { latn: "." } },
          sid: { nu: ["latn"] },
          sk: { nu: ["latn"] },
          skr: { nu: ["latn"] },
          sl: { nu: ["latn"] },
          sma: { nu: ["latn"] },
          "sma-NO": { nu: ["latn"] },
          smj: { nu: ["latn"] },
          "smj-NO": { nu: ["latn"] },
          smn: { nu: ["latn"], separator: { latn: "." } },
          sms: { nu: ["latn"] },
          sn: { nu: ["latn"] },
          so: { nu: ["latn"] },
          "so-DJ": { nu: ["latn"] },
          "so-ET": { nu: ["latn"] },
          "so-KE": { nu: ["latn"] },
          sq: { nu: ["latn"] },
          "sq-MK": { nu: ["latn"] },
          "sq-XK": { nu: ["latn"] },
          sr: { nu: ["latn"] },
          "sr-Cyrl": { nu: ["latn"] },
          "sr-Cyrl-BA": { nu: ["latn"] },
          "sr-Cyrl-ME": { nu: ["latn"] },
          "sr-Cyrl-XK": { nu: ["latn"] },
          "sr-Latn": { nu: ["latn"] },
          "sr-Latn-BA": { nu: ["latn"] },
          "sr-Latn-ME": { nu: ["latn"] },
          "sr-Latn-XK": { nu: ["latn"] },
          ss: { nu: ["latn"] },
          "ss-SZ": { nu: ["latn"] },
          ssy: { nu: ["latn"] },
          st: { nu: ["latn"] },
          "st-LS": { nu: ["latn"] },
          su: { nu: ["latn"], separator: { latn: "." } },
          "su-Latn": { nu: ["latn"], separator: { latn: "." } },
          suz: { nu: ["latn"] },
          "suz-Deva": { nu: ["latn"] },
          "suz-Sunu": { nu: ["latn"] },
          sv: { nu: ["latn"] },
          "sv-AX": { nu: ["latn"] },
          "sv-FI": { nu: ["latn"], separator: { latn: "." } },
          sw: { nu: ["latn"] },
          "sw-CD": { nu: ["latn"] },
          "sw-KE": { nu: ["latn"] },
          "sw-UG": { nu: ["latn"] },
          syr: { nu: ["latn"] },
          "syr-SY": { nu: ["latn"] },
          szl: { nu: ["latn"] },
          ta: { nu: ["latn"] },
          "ta-LK": { nu: ["latn"] },
          "ta-MY": { nu: ["latn"] },
          "ta-SG": { nu: ["latn"] },
          te: { nu: ["latn"] },
          teo: { nu: ["latn"] },
          "teo-KE": { nu: ["latn"] },
          tg: { nu: ["latn"] },
          th: { nu: ["latn"] },
          ti: { nu: ["latn"] },
          "ti-ER": { nu: ["latn"] },
          tig: { nu: ["latn"] },
          tk: { nu: ["latn"] },
          tn: { nu: ["latn"] },
          "tn-BW": { nu: ["latn"] },
          to: { nu: ["latn"] },
          tok: { nu: ["latn"] },
          tpi: { nu: ["latn"] },
          tr: { nu: ["latn"] },
          "tr-CY": { nu: ["latn"] },
          trv: { nu: ["latn"] },
          trw: { nu: ["latn"] },
          ts: { nu: ["latn"] },
          tt: { nu: ["latn"] },
          twq: { nu: ["latn"] },
          tyv: { nu: ["latn"] },
          tzm: { nu: ["latn"] },
          ug: { nu: ["latn"] },
          uk: { nu: ["latn"] },
          und: { nu: ["latn"] },
          ur: { nu: ["latn"] },
          "ur-IN": { nu: ["arabext"], separator: { arabext: "\u066B" } },
          uz: { nu: ["latn"] },
          "uz-Arab": { nu: ["arabext"] },
          "uz-Cyrl": { nu: ["latn"] },
          "uz-Latn": { nu: ["latn"] },
          vai: { nu: ["latn"] },
          "vai-Latn": { nu: ["latn"] },
          "vai-Vaii": { nu: ["latn"] },
          ve: { nu: ["latn"] },
          vec: { nu: ["latn"] },
          vi: { nu: ["latn"] },
          vmw: { nu: ["latn"] },
          vo: { nu: ["latn"] },
          vun: { nu: ["latn"] },
          wa: { nu: ["latn"] },
          wae: { nu: ["latn"] },
          wal: { nu: ["latn"] },
          wbp: { nu: ["latn"] },
          wo: { nu: ["latn"] },
          xh: { nu: ["latn"] },
          xnr: { nu: ["latn"] },
          xog: { nu: ["latn"] },
          yav: { nu: ["latn"] },
          yi: { nu: ["latn"] },
          yo: { nu: ["latn"] },
          "yo-BJ": { nu: ["latn"] },
          yrl: { nu: ["latn"] },
          "yrl-CO": { nu: ["latn"] },
          "yrl-VE": { nu: ["latn"] },
          yue: { nu: ["latn"] },
          "yue-Hans": { nu: ["latn"] },
          "yue-Hant": { nu: ["latn"] },
          "yue-Hant-CN": { nu: ["latn"] },
          "yue-Hant-MO": { nu: ["latn"] },
          za: { nu: ["latn"] },
          zgh: { nu: ["latn"] },
          zh: { nu: ["latn"] },
          "zh-Hans": { nu: ["latn"] },
          "zh-Hans-HK": { nu: ["latn"] },
          "zh-Hans-MO": { nu: ["latn"] },
          "zh-Hans-MY": { nu: ["latn"] },
          "zh-Hans-SG": { nu: ["latn"] },
          "zh-Hant": { nu: ["latn"] },
          "zh-Hant-HK": { nu: ["latn"] },
          "zh-Hant-MO": { nu: ["latn"] },
          "zh-Hant-MY": { nu: ["latn"] },
          "zh-Latn": { nu: ["latn"] },
          zu: { nu: ["latn"] },
        },
      };
    },
    632459() {},
    183580(e, t, n) {
      "use strict";
      n.d(t, { q: () => i });
      let r = new WeakMap();
      function i(e, t) {
        let n = r.get(e);
        n || ((n = new Set(e)), r.set(e, n));
        let i = t;
        for (;;) {
          if (n.has(i)) return i;
          let e = i.lastIndexOf("-");
          if (!~e) return;
          e >= 2 && "-" === i[e - 2] && (e -= 2), (i = i.slice(0, e));
        }
      }
    },
    641277(e, t, n) {
      "use strict";
      n.d(t, { B: () => s });
      var r = n(26232);
      function i(e) {
        return Intl.getCanonicalLocales(e)[0];
      }
      var a = n(183580);
      function s(e, t, n, s, o, u) {
        let c, l;
        if ("lookup" === n.localeMatcher)
          c = (function (e, t, n) {
            let i = { locale: "" };
            for (let n of t) {
              let t = n.replace(r.KB, ""),
                s = (0, a.q)(e, t);
              if (s)
                return (
                  (i.locale = s),
                  n !== t && (i.extension = n.slice(t.length, n.length)),
                  i
                );
            }
            return (i.locale = n()), i;
          })(Array.from(e), t, u);
        else {
          var d;
          let n, i, a, s, o;
          (d = Array.from(e)),
            (a = []),
            (s = t.reduce((e, t) => {
              let n = t.replace(r.KB, "");
              return a.push(n), (e[n] = t), e;
            }, {})),
            (o = (0, r.B4)(a, d)).matchedSupportedLocale &&
              o.matchedDesiredLocale &&
              ((n = o.matchedSupportedLocale),
              (i =
                s[o.matchedDesiredLocale].slice(
                  o.matchedDesiredLocale.length,
                ) || void 0)),
            (c = n ? { locale: n, extension: i } : { locale: u() });
        }
        null == c && (c = { locale: u(), extension: "" });
        let h = c.locale,
          f = o[h],
          p = { locale: "en", dataLocale: h };
        l = c.extension
          ? (function (e) {
              let t;
              (0, r.V1)(
                e === e.toLowerCase(),
                "Expected extension to be lowercase",
              ),
                (0, r.V1)(
                  "-u-" === e.slice(0, 3),
                  "Expected extension to be a Unicode locale extension",
                );
              let n = [],
                i = [],
                a = e.length,
                s = 3;
              for (; s < a; ) {
                let o,
                  u = e.indexOf("-", s);
                o = -1 === u ? a - s : u - s;
                let c = e.slice(s, s + o);
                (0, r.V1)(
                  o >= 2,
                  "Expected a subtag to have at least 2 characters",
                ),
                  void 0 === t && 2 != o
                    ? -1 === n.indexOf(c) && n.push(c)
                    : 2 === o
                      ? ((t = { key: c, value: "" }),
                        void 0 === i.find((e) => e.key === t?.key) && i.push(t))
                      : t?.value === ""
                        ? (t.value = c)
                        : ((0, r.V1)(
                            void 0 !== t,
                            "Expected keyword to be defined",
                          ),
                          (t.value += "-" + c)),
                  (s += o + 1);
              }
              return { attributes: n, keywords: i };
            })(c.extension).keywords
          : [];
        let _ = [];
        for (let e of s) {
          let t,
            i = f?.[e] ?? [];
          (0, r.V1)(
            Array.isArray(i),
            `keyLocaleData for ${e} must be an array`,
          );
          let a = i[0];
          (0, r.V1)(
            void 0 === a || "string" == typeof a,
            "value must be a string or undefined",
          );
          let s = l.find((t) => t.key === e);
          if (s) {
            let n = s.value;
            "" !== n
              ? i.indexOf(n) > -1 && (t = { key: e, value: (a = n) })
              : i.indexOf("true") > -1 && (t = { key: e, value: (a = "true") });
          }
          let o = n[e];
          (0, r.V1)(
            null == o || "string" == typeof o,
            "optionsValue must be a string or undefined",
          ),
            "string" == typeof o &&
              "" ===
                (o = (function (e, t) {
                  let n = t.toLowerCase();
                  return (0, r.V1)(void 0 !== e, "ukey must be defined"), n;
                })(e.toLowerCase(), o)) &&
              (o = "true"),
            o !== a && i.indexOf(o) > -1 && ((a = o), (t = void 0)),
            t && _.push(t),
            (p[e] = a);
        }
        return (
          _.length > 0 &&
            (h = (function (e, t, n) {
              (0, r.V1)(
                -1 === e.indexOf("-u-"),
                "Expected locale to not have a Unicode locale extension",
              );
              let a = "-u";
              for (let e of t) a += `-${e}`;
              for (let e of n) {
                let { key: t, value: n } = e;
                (a += `-${t}`), "" !== n && (a += `-${n}`);
              }
              if ("-u" === a) return i(e);
              let s = e.indexOf("-x-");
              return i(-1 === s ? e + a : e.slice(0, s) + a + e.slice(s));
            })(h, [], _)),
          (p.locale = h),
          p
        );
      }
    },
    26232(e, t, n) {
      "use strict";
      let r;
      n.d(t, { KB: () => o, B4: () => p, V1: () => u });
      var i = n(315847);
      let a = {
          "written-new": [
            { paradigmLocales: { _locales: "en en_GB es es_419 pt_BR pt_PT" } },
            { $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } },
            { $cnsar: { _value: "HK+MO" } },
            { $americas: { _value: "019" } },
            { $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } },
            { no: { _desired: "nb", _distance: "1" } },
            { bs: { _desired: "hr", _distance: "4" } },
            { bs: { _desired: "sh", _distance: "4" } },
            { hr: { _desired: "sh", _distance: "4" } },
            { sr: { _desired: "sh", _distance: "4" } },
            { aa: { _desired: "ssy", _distance: "4" } },
            { de: { _desired: "gsw", _distance: "4", _oneway: "true" } },
            { de: { _desired: "lb", _distance: "4", _oneway: "true" } },
            { no: { _desired: "da", _distance: "8" } },
            { nb: { _desired: "da", _distance: "8" } },
            { ru: { _desired: "ab", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ach", _distance: "30", _oneway: "true" } },
            { nl: { _desired: "af", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ak", _distance: "30", _oneway: "true" } },
            { en: { _desired: "am", _distance: "30", _oneway: "true" } },
            { es: { _desired: "ay", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "az", _distance: "30", _oneway: "true" } },
            { ur: { _desired: "bal", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "be", _distance: "20", _oneway: "true" } },
            { en: { _desired: "bem", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "bh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "bn", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "bo", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "br", _distance: "20", _oneway: "true" } },
            { es: { _desired: "ca", _distance: "20", _oneway: "true" } },
            { fil: { _desired: "ceb", _distance: "30", _oneway: "true" } },
            { en: { _desired: "chr", _distance: "20", _oneway: "true" } },
            { ar: { _desired: "ckb", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "co", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "crs", _distance: "20", _oneway: "true" } },
            { sk: { _desired: "cs", _distance: "20" } },
            { en: { _desired: "cy", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ee", _distance: "30", _oneway: "true" } },
            { en: { _desired: "eo", _distance: "30", _oneway: "true" } },
            { es: { _desired: "eu", _distance: "20", _oneway: "true" } },
            { da: { _desired: "fo", _distance: "20", _oneway: "true" } },
            { nl: { _desired: "fy", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ga", _distance: "20", _oneway: "true" } },
            { en: { _desired: "gaa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "gd", _distance: "20", _oneway: "true" } },
            { es: { _desired: "gl", _distance: "20", _oneway: "true" } },
            { es: { _desired: "gn", _distance: "20", _oneway: "true" } },
            { hi: { _desired: "gu", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ha", _distance: "30", _oneway: "true" } },
            { en: { _desired: "haw", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "ht", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "hy", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ia", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ig", _distance: "30", _oneway: "true" } },
            { en: { _desired: "is", _distance: "20", _oneway: "true" } },
            { id: { _desired: "jv", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ka", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "kg", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "kk", _distance: "30", _oneway: "true" } },
            { en: { _desired: "km", _distance: "30", _oneway: "true" } },
            { en: { _desired: "kn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "kri", _distance: "30", _oneway: "true" } },
            { tr: { _desired: "ku", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "ky", _distance: "30", _oneway: "true" } },
            { it: { _desired: "la", _distance: "20", _oneway: "true" } },
            { en: { _desired: "lg", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "ln", _distance: "30", _oneway: "true" } },
            { en: { _desired: "lo", _distance: "30", _oneway: "true" } },
            { en: { _desired: "loz", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "lua", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "mai", _distance: "20", _oneway: "true" } },
            { en: { _desired: "mfe", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "mg", _distance: "30", _oneway: "true" } },
            { en: { _desired: "mi", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ml", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "mn", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "mr", _distance: "30", _oneway: "true" } },
            { id: { _desired: "ms", _distance: "30", _oneway: "true" } },
            { en: { _desired: "mt", _distance: "30", _oneway: "true" } },
            { en: { _desired: "my", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ne", _distance: "30", _oneway: "true" } },
            { nb: { _desired: "nn", _distance: "20" } },
            { no: { _desired: "nn", _distance: "20" } },
            { en: { _desired: "nso", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ny", _distance: "30", _oneway: "true" } },
            { en: { _desired: "nyn", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "oc", _distance: "20", _oneway: "true" } },
            { en: { _desired: "om", _distance: "30", _oneway: "true" } },
            { en: { _desired: "or", _distance: "30", _oneway: "true" } },
            { en: { _desired: "pa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "pcm", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ps", _distance: "30", _oneway: "true" } },
            { es: { _desired: "qu", _distance: "30", _oneway: "true" } },
            { de: { _desired: "rm", _distance: "20", _oneway: "true" } },
            { en: { _desired: "rn", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "rw", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "sa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sd", _distance: "30", _oneway: "true" } },
            { en: { _desired: "si", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "so", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sq", _distance: "30", _oneway: "true" } },
            { en: { _desired: "st", _distance: "30", _oneway: "true" } },
            { id: { _desired: "su", _distance: "20", _oneway: "true" } },
            { en: { _desired: "sw", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ta", _distance: "30", _oneway: "true" } },
            { en: { _desired: "te", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tg", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ti", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tk", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tlh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "to", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tt", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tum", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "ug", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "uk", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ur", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "uz", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "wo", _distance: "30", _oneway: "true" } },
            { en: { _desired: "xh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "yi", _distance: "30", _oneway: "true" } },
            { en: { _desired: "yo", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "za", _distance: "20", _oneway: "true" } },
            { en: { _desired: "zu", _distance: "30", _oneway: "true" } },
            { ar: { _desired: "aao", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "abh", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "abv", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acm", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acq", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acw", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acx", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acy", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "adf", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "aeb", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "aec", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "afb", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ajp", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "apc", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "apd", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "arq", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ars", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ary", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "arz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "auz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "avl", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayh", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayl", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayn", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayp", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "bbz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "pga", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "shu", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ssh", _distance: "10", _oneway: "true" } },
            { az: { _desired: "azb", _distance: "10", _oneway: "true" } },
            { et: { _desired: "vro", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "ffm", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fub", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fue", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuf", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuh", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fui", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuq", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuv", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gnw", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gui", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gun", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "nhd", _distance: "10", _oneway: "true" } },
            { iu: { _desired: "ikt", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "enb", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "eyo", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "niq", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "oki", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "pko", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "sgc", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "tec", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "tuy", _distance: "10", _oneway: "true" } },
            { kok: { _desired: "gom", _distance: "10", _oneway: "true" } },
            { kpe: { _desired: "gkp", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "ida", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lkb", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lko", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lks", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lri", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lrm", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lsm", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lto", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lts", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lwg", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "nle", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "nyd", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "rag", _distance: "10", _oneway: "true" } },
            { lv: { _desired: "ltg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bhr", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bjq", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bmm", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bzc", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "msh", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "skg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "tdx", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "tkg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "txy", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "xmv", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "xmw", _distance: "10", _oneway: "true" } },
            { mn: { _desired: "mvf", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bjn", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "btj", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bve", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bvu", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "coa", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "dup", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "hji", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "id", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "jak", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "jax", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kvb", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kvr", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kxd", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "lce", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "lcf", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "liw", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "max", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "meo", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mfa", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mfb", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "min", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mqg", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "msi", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mui", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "orn", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "ors", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "pel", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "pse", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "tmw", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "urk", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "vkk", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "vkt", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "xmm", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "zlm", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "zmi", _distance: "10", _oneway: "true" } },
            { ne: { _desired: "dty", _distance: "10", _oneway: "true" } },
            { om: { _desired: "gax", _distance: "10", _oneway: "true" } },
            { om: { _desired: "hae", _distance: "10", _oneway: "true" } },
            { om: { _desired: "orc", _distance: "10", _oneway: "true" } },
            { or: { _desired: "spv", _distance: "10", _oneway: "true" } },
            { ps: { _desired: "pbt", _distance: "10", _oneway: "true" } },
            { ps: { _desired: "pst", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qub", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qud", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quf", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qug", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quk", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qul", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qup", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qur", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qus", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quw", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qux", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quy", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qva", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qve", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvi", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvj", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvl", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvm", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvn", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvo", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvp", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvs", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvw", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvz", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwa", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qws", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxa", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxl", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxn", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxo", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxp", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxr", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxt", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxu", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxw", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sdc", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sdn", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sro", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aae", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aat", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aln", _distance: "10", _oneway: "true" } },
            { syr: { _desired: "aii", _distance: "10", _oneway: "true" } },
            { uz: { _desired: "uzs", _distance: "10", _oneway: "true" } },
            { yi: { _desired: "yih", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cdo", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cjy", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cpx", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "czh", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "czo", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "gan", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "hak", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "hsn", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "lzh", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "mnp", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "nan", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "wuu", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "yue", _distance: "10", _oneway: "true" } },
            { "*": { _desired: "*", _distance: "80" } },
            {
              "en-Latn": {
                _desired: "am-Ethi",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "az-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "bn-Beng",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "bo-Tibt",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "hy-Armn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ka-Geor",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "km-Khmr",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "kn-Knda",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "lo-Laoo",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ml-Mlym",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "my-Mymr",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ne-Deva",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "or-Orya",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "pa-Guru",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ps-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "sd-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "si-Sinh",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ta-Taml",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "te-Telu",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ti-Ethi",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "tk-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ur-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "uz-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "yi-Hebr",
                _distance: "10",
                _oneway: "true",
              },
            },
            { "sr-Cyrl": { _desired: "sr-Latn", _distance: "5" } },
            {
              "zh-Hans": {
                _desired: "za-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "zh-Hani",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "zh-Hant": {
                _desired: "zh-Hani",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ar-Arab": {
                _desired: "ar-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "bn-Beng": {
                _desired: "bn-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "gu-Gujr": {
                _desired: "gu-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "hi-Deva": {
                _desired: "hi-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "kn-Knda": {
                _desired: "kn-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ml-Mlym": {
                _desired: "ml-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "mr-Deva": {
                _desired: "mr-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ta-Taml": {
                _desired: "ta-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "te-Telu": {
                _desired: "te-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "zh-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Latn",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hani",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hira",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Kana",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hrkt",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Hrkt": {
                _desired: "ja-Hira",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Hrkt": {
                _desired: "ja-Kana",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Hani",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Hang",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Jamo",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Hang": {
                _desired: "ko-Jamo",
                _distance: "5",
                _oneway: "true",
              },
            },
            { "*-*": { _desired: "*-*", _distance: "50" } },
            { "ar-*-$maghreb": { _desired: "ar-*-$maghreb", _distance: "4" } },
            {
              "ar-*-$!maghreb": { _desired: "ar-*-$!maghreb", _distance: "4" },
            },
            { "ar-*-*": { _desired: "ar-*-*", _distance: "5" } },
            { "en-*-$enUS": { _desired: "en-*-$enUS", _distance: "4" } },
            { "en-*-GB": { _desired: "en-*-$!enUS", _distance: "3" } },
            { "en-*-$!enUS": { _desired: "en-*-$!enUS", _distance: "4" } },
            { "en-*-*": { _desired: "en-*-*", _distance: "5" } },
            {
              "es-*-$americas": { _desired: "es-*-$americas", _distance: "4" },
            },
            {
              "es-*-$!americas": {
                _desired: "es-*-$!americas",
                _distance: "4",
              },
            },
            { "es-*-*": { _desired: "es-*-*", _distance: "5" } },
            {
              "pt-*-$americas": { _desired: "pt-*-$americas", _distance: "4" },
            },
            {
              "pt-*-$!americas": {
                _desired: "pt-*-$!americas",
                _distance: "4",
              },
            },
            { "pt-*-*": { _desired: "pt-*-*", _distance: "5" } },
            {
              "zh-Hant-$cnsar": { _desired: "zh-Hant-$cnsar", _distance: "4" },
            },
            {
              "zh-Hant-$!cnsar": {
                _desired: "zh-Hant-$!cnsar",
                _distance: "4",
              },
            },
            { "zh-Hant-*": { _desired: "zh-Hant-*", _distance: "5" } },
            { "*-*-*": { _desired: "*-*-*", _distance: "4" } },
          ],
        },
        s = {
          "001": [
            "001",
            "001-status-grouping",
            "002",
            "005",
            "009",
            "011",
            "013",
            "014",
            "015",
            "017",
            "018",
            "019",
            "021",
            "029",
            "030",
            "034",
            "035",
            "039",
            "053",
            "054",
            "057",
            "061",
            "142",
            "143",
            "145",
            "150",
            "151",
            "154",
            "155",
            "AC",
            "AD",
            "AE",
            "AF",
            "AG",
            "AI",
            "AL",
            "AM",
            "AO",
            "AQ",
            "AR",
            "AS",
            "AT",
            "AU",
            "AW",
            "AX",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BL",
            "BM",
            "BN",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BT",
            "BV",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CC",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CK",
            "CL",
            "CM",
            "CN",
            "CO",
            "CP",
            "CQ",
            "CR",
            "CU",
            "CV",
            "CW",
            "CX",
            "CY",
            "CZ",
            "DE",
            "DG",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EA",
            "EC",
            "EE",
            "EG",
            "EH",
            "ER",
            "ES",
            "ET",
            "EU",
            "EZ",
            "FI",
            "FJ",
            "FK",
            "FM",
            "FO",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GF",
            "GG",
            "GH",
            "GI",
            "GL",
            "GM",
            "GN",
            "GP",
            "GQ",
            "GR",
            "GS",
            "GT",
            "GU",
            "GW",
            "GY",
            "HK",
            "HM",
            "HN",
            "HR",
            "HT",
            "HU",
            "IC",
            "ID",
            "IE",
            "IL",
            "IM",
            "IN",
            "IO",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JE",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KY",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MF",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MO",
            "MP",
            "MQ",
            "MR",
            "MS",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NC",
            "NE",
            "NF",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NU",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PF",
            "PG",
            "PH",
            "PK",
            "PL",
            "PM",
            "PN",
            "PR",
            "PS",
            "PT",
            "PW",
            "PY",
            "QA",
            "QO",
            "RE",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SH",
            "SI",
            "SJ",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SX",
            "SY",
            "SZ",
            "TA",
            "TC",
            "TD",
            "TF",
            "TG",
            "TH",
            "TJ",
            "TK",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TW",
            "TZ",
            "UA",
            "UG",
            "UM",
            "UN",
            "US",
            "UY",
            "UZ",
            "VA",
            "VC",
            "VE",
            "VG",
            "VI",
            "VN",
            "VU",
            "WF",
            "WS",
            "XK",
            "YE",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          "002": [
            "002",
            "002-status-grouping",
            "011",
            "014",
            "015",
            "017",
            "018",
            "202",
            "AO",
            "BF",
            "BI",
            "BJ",
            "BW",
            "CD",
            "CF",
            "CG",
            "CI",
            "CM",
            "CV",
            "DJ",
            "DZ",
            "EA",
            "EG",
            "EH",
            "ER",
            "ET",
            "GA",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GW",
            "IC",
            "IO",
            "KE",
            "KM",
            "LR",
            "LS",
            "LY",
            "MA",
            "MG",
            "ML",
            "MR",
            "MU",
            "MW",
            "MZ",
            "NA",
            "NE",
            "NG",
            "RE",
            "RW",
            "SC",
            "SD",
            "SH",
            "SL",
            "SN",
            "SO",
            "SS",
            "ST",
            "SZ",
            "TD",
            "TF",
            "TG",
            "TN",
            "TZ",
            "UG",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          "003": [
            "003",
            "013",
            "021",
            "029",
            "AG",
            "AI",
            "AW",
            "BB",
            "BL",
            "BM",
            "BQ",
            "BS",
            "BZ",
            "CA",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "GD",
            "GL",
            "GP",
            "GT",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PM",
            "PR",
            "SV",
            "SX",
            "TC",
            "TT",
            "US",
            "VC",
            "VG",
            "VI",
          ],
          "005": [
            "005",
            "AR",
            "BO",
            "BR",
            "BV",
            "CL",
            "CO",
            "EC",
            "FK",
            "GF",
            "GS",
            "GY",
            "PE",
            "PY",
            "SR",
            "UY",
            "VE",
          ],
          "009": [
            "009",
            "053",
            "054",
            "057",
            "061",
            "AC",
            "AQ",
            "AS",
            "AU",
            "CC",
            "CK",
            "CP",
            "CX",
            "DG",
            "FJ",
            "FM",
            "GU",
            "HM",
            "KI",
            "MH",
            "MP",
            "NC",
            "NF",
            "NR",
            "NU",
            "NZ",
            "PF",
            "PG",
            "PN",
            "PW",
            "QO",
            "SB",
            "TA",
            "TK",
            "TO",
            "TV",
            "UM",
            "VU",
            "WF",
            "WS",
          ],
          "011": [
            "011",
            "BF",
            "BJ",
            "CI",
            "CV",
            "GH",
            "GM",
            "GN",
            "GW",
            "LR",
            "ML",
            "MR",
            "NE",
            "NG",
            "SH",
            "SL",
            "SN",
            "TG",
          ],
          "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"],
          "014": [
            "014",
            "BI",
            "DJ",
            "ER",
            "ET",
            "IO",
            "KE",
            "KM",
            "MG",
            "MU",
            "MW",
            "MZ",
            "RE",
            "RW",
            "SC",
            "SO",
            "SS",
            "TF",
            "TZ",
            "UG",
            "YT",
            "ZM",
            "ZW",
          ],
          "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"],
          "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"],
          "018": ["018", "BW", "LS", "NA", "SZ", "ZA"],
          "019": [
            "003",
            "005",
            "013",
            "019",
            "019-status-grouping",
            "021",
            "029",
            "419",
            "AG",
            "AI",
            "AR",
            "AW",
            "BB",
            "BL",
            "BM",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BV",
            "BZ",
            "CA",
            "CL",
            "CO",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "EC",
            "FK",
            "GD",
            "GF",
            "GL",
            "GP",
            "GS",
            "GT",
            "GY",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PE",
            "PM",
            "PR",
            "PY",
            "SR",
            "SV",
            "SX",
            "TC",
            "TT",
            "US",
            "UY",
            "VC",
            "VE",
            "VG",
            "VI",
          ],
          "021": ["021", "BM", "CA", "GL", "PM", "US"],
          "029": [
            "029",
            "AG",
            "AI",
            "AW",
            "BB",
            "BL",
            "BQ",
            "BS",
            "CU",
            "CW",
            "DM",
            "DO",
            "GD",
            "GP",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "PR",
            "SX",
            "TC",
            "TT",
            "VC",
            "VG",
            "VI",
          ],
          "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"],
          "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"],
          "035": [
            "035",
            "BN",
            "ID",
            "KH",
            "LA",
            "MM",
            "MY",
            "PH",
            "SG",
            "TH",
            "TL",
            "VN",
          ],
          "039": [
            "039",
            "AD",
            "AL",
            "BA",
            "ES",
            "GI",
            "GR",
            "HR",
            "IT",
            "ME",
            "MK",
            "MT",
            "PT",
            "RS",
            "SI",
            "SM",
            "VA",
            "XK",
          ],
          "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"],
          "054": ["054", "FJ", "NC", "PG", "SB", "VU"],
          "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"],
          "061": [
            "061",
            "AS",
            "CK",
            "NU",
            "PF",
            "PN",
            "TK",
            "TO",
            "TV",
            "WF",
            "WS",
          ],
          142: [
            "030",
            "034",
            "035",
            "142",
            "143",
            "145",
            "AE",
            "AF",
            "AM",
            "AZ",
            "BD",
            "BH",
            "BN",
            "BT",
            "CN",
            "CY",
            "GE",
            "HK",
            "ID",
            "IL",
            "IN",
            "IQ",
            "IR",
            "JO",
            "JP",
            "KG",
            "KH",
            "KP",
            "KR",
            "KW",
            "KZ",
            "LA",
            "LB",
            "LK",
            "MM",
            "MN",
            "MO",
            "MV",
            "MY",
            "NP",
            "OM",
            "PH",
            "PK",
            "PS",
            "QA",
            "SA",
            "SG",
            "SY",
            "TH",
            "TJ",
            "TL",
            "TM",
            "TR",
            "TW",
            "UZ",
            "VN",
            "YE",
          ],
          143: ["143", "KG", "KZ", "TJ", "TM", "UZ"],
          145: [
            "145",
            "AE",
            "AM",
            "AZ",
            "BH",
            "CY",
            "GE",
            "IL",
            "IQ",
            "JO",
            "KW",
            "LB",
            "OM",
            "PS",
            "QA",
            "SA",
            "SY",
            "TR",
            "YE",
          ],
          150: [
            "039",
            "150",
            "151",
            "154",
            "155",
            "AD",
            "AL",
            "AT",
            "AX",
            "BA",
            "BE",
            "BG",
            "BY",
            "CH",
            "CQ",
            "CZ",
            "DE",
            "DK",
            "EE",
            "ES",
            "FI",
            "FO",
            "FR",
            "GB",
            "GG",
            "GI",
            "GR",
            "HR",
            "HU",
            "IE",
            "IM",
            "IS",
            "IT",
            "JE",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MD",
            "ME",
            "MK",
            "MT",
            "NL",
            "NO",
            "PL",
            "PT",
            "RO",
            "RS",
            "RU",
            "SE",
            "SI",
            "SJ",
            "SK",
            "SM",
            "UA",
            "VA",
            "XK",
          ],
          151: [
            "151",
            "BG",
            "BY",
            "CZ",
            "HU",
            "MD",
            "PL",
            "RO",
            "RU",
            "SK",
            "UA",
          ],
          154: [
            "154",
            "AX",
            "CQ",
            "DK",
            "EE",
            "FI",
            "FO",
            "GB",
            "GG",
            "IE",
            "IM",
            "IS",
            "JE",
            "LT",
            "LV",
            "NO",
            "SE",
            "SJ",
          ],
          155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"],
          202: [
            "011",
            "014",
            "017",
            "018",
            "202",
            "AO",
            "BF",
            "BI",
            "BJ",
            "BW",
            "CD",
            "CF",
            "CG",
            "CI",
            "CM",
            "CV",
            "DJ",
            "ER",
            "ET",
            "GA",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GW",
            "IO",
            "KE",
            "KM",
            "LR",
            "LS",
            "MG",
            "ML",
            "MR",
            "MU",
            "MW",
            "MZ",
            "NA",
            "NE",
            "NG",
            "RE",
            "RW",
            "SC",
            "SH",
            "SL",
            "SN",
            "SO",
            "SS",
            "ST",
            "SZ",
            "TD",
            "TF",
            "TG",
            "TZ",
            "UG",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          419: [
            "005",
            "013",
            "029",
            "419",
            "AG",
            "AI",
            "AR",
            "AW",
            "BB",
            "BL",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BV",
            "BZ",
            "CL",
            "CO",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "EC",
            "FK",
            "GD",
            "GF",
            "GP",
            "GS",
            "GT",
            "GY",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PE",
            "PR",
            "PY",
            "SR",
            "SV",
            "SX",
            "TC",
            "TT",
            "UY",
            "VC",
            "VE",
            "VG",
            "VI",
          ],
          EU: [
            "AT",
            "BE",
            "BG",
            "CY",
            "CZ",
            "DE",
            "DK",
            "EE",
            "ES",
            "EU",
            "FI",
            "FR",
            "GR",
            "HR",
            "HU",
            "IE",
            "IT",
            "LT",
            "LU",
            "LV",
            "MT",
            "NL",
            "PL",
            "PT",
            "RO",
            "SE",
            "SI",
            "SK",
          ],
          EZ: [
            "AT",
            "BE",
            "CY",
            "DE",
            "EE",
            "ES",
            "EZ",
            "FI",
            "FR",
            "GR",
            "IE",
            "IT",
            "LT",
            "LU",
            "LV",
            "MT",
            "NL",
            "PT",
            "SI",
            "SK",
          ],
          QO: ["AC", "AQ", "CP", "DG", "QO", "TA"],
          UN: [
            "AD",
            "AE",
            "AF",
            "AG",
            "AL",
            "AM",
            "AO",
            "AR",
            "AT",
            "AU",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BN",
            "BO",
            "BR",
            "BS",
            "BT",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CL",
            "CM",
            "CN",
            "CO",
            "CR",
            "CU",
            "CV",
            "CY",
            "CZ",
            "DE",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ER",
            "ES",
            "ET",
            "FI",
            "FJ",
            "FM",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GR",
            "GT",
            "GW",
            "GY",
            "HN",
            "HR",
            "HT",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MR",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NE",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PG",
            "PH",
            "PK",
            "PL",
            "PT",
            "PW",
            "PY",
            "QA",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SI",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SY",
            "SZ",
            "TD",
            "TG",
            "TH",
            "TJ",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TZ",
            "UA",
            "UG",
            "UN",
            "US",
            "UY",
            "UZ",
            "VC",
            "VE",
            "VN",
            "VU",
            "WS",
            "YE",
            "ZA",
            "ZM",
            "ZW",
          ],
        },
        o = /-u(?:-[0-9a-z]{2,8})+/gi;
      function u(e, t, n = Error) {
        if (!e) throw new n(t);
      }
      function c(e, t, n) {
        let [r, i, a] = t.split("-"),
          o = !0;
        if (a && "$" === a[0]) {
          let t = "!" !== a[1],
            r = (t ? n[a.slice(1)] : n[a.slice(2)])
              .map((e) => s[e] || [e])
              .reduce((e, t) => [...e, ...t], []);
          o &&= r.indexOf(e.region || "") > -1 == t;
        } else o &&= !e.region || "*" === a || a === e.region;
        return (
          (o &&= !e.script || "*" === i || i === e.script),
          (o &&= !e.language || "*" === r || r === e.language)
        );
      }
      function l(e) {
        return [e.language, e.script, e.region].filter(Boolean).join("-");
      }
      function d(e, t, n) {
        for (let r of n.matches) {
          let i =
            c(e, r.desired, n.matchVariables) &&
            c(t, r.supported, n.matchVariables);
          if (
            (r.oneway ||
              i ||
              (i =
                c(e, r.supported, n.matchVariables) &&
                c(t, r.desired, n.matchVariables)),
            i)
          ) {
            let i = 10 * r.distance;
            if (
              n.paradigmLocales.indexOf(l(e)) > -1 !=
              n.paradigmLocales.indexOf(l(t)) > -1
            )
              return i - 1;
            return i;
          }
        }
        throw Error("No matching distance found");
      }
      let h = (0, i.B)(
          function (e, t) {
            let n = new Intl.Locale(e).maximize(),
              i = new Intl.Locale(t).maximize(),
              s = {
                language: n.language,
                script: n.script || "",
                region: n.region || "",
              },
              o = {
                language: i.language,
                script: i.script || "",
                region: i.region || "",
              },
              u = 0,
              c = (function () {
                if (!r) {
                  let e =
                      a["written-new"]["0"]?.paradigmLocales?._locales.split(
                        " ",
                      ),
                    t = a["written-new"].slice(1, 5);
                  r = {
                    matches: a["written-new"].slice(5).map((e) => {
                      let t = Object.keys(e)[0],
                        n = e[t];
                      return {
                        supported: t,
                        desired: n._desired,
                        distance: +n._distance,
                        oneway: "true" === n.oneway,
                      };
                    }, {}),
                    matchVariables: t.reduce((e, t) => {
                      let n = Object.keys(t)[0],
                        r = t[n];
                      return (e[n.slice(1)] = r._value.split("+")), e;
                    }, {}),
                    paradigmLocales: [
                      ...e,
                      ...e.map((e) =>
                        new Intl.Locale(e.replace(/_/g, "-"))
                          .maximize()
                          .toString(),
                      ),
                    ],
                  };
                }
                return r;
              })();
            return (
              s.language !== o.language &&
                (u += d(
                  { language: n.language, script: "", region: "" },
                  { language: i.language, script: "", region: "" },
                  c,
                )),
              s.script !== o.script &&
                (u += d(
                  { language: n.language, script: s.script, region: "" },
                  { language: i.language, script: o.script, region: "" },
                  c,
                )),
              s.region !== o.region && (u += d(s, o, c)),
              u
            );
          },
          { serializer: (e) => `${e[0]}|${e[1]}` },
        ),
        f = new WeakMap();
      function p(e, t, n = 838) {
        let r = 1 / 0,
          i = { matchedDesiredLocale: "", distances: {} },
          a = f.get(t);
        a ||
          ((a = t.map((e) => {
            try {
              return Intl.getCanonicalLocales([e])[0] || e;
            } catch {
              return e;
            }
          })),
          f.set(t, a));
        let s = new Set(a);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (s.has(n)) {
            let e = 0 + 40 * t;
            if (
              ((i.distances[n] = { [n]: e }),
              e < r &&
                ((r = e),
                (i.matchedDesiredLocale = n),
                (i.matchedSupportedLocale = n)),
              0 === t)
            )
              return i;
          }
        }
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          try {
            let e = new Intl.Locale(n).maximize().toString();
            if (e !== n) {
              let a = (function (e) {
                let t = [],
                  n = e;
                for (; n; ) {
                  t.push(n);
                  let e = n.lastIndexOf("-");
                  if (-1 === e) break;
                  n = n.substring(0, e);
                }
                return t;
              })(e);
              for (let o = 0; o < a.length; o++) {
                let u = a[o];
                if (u !== n && s.has(u)) {
                  let a;
                  try {
                    a =
                      new Intl.Locale(u).maximize().toString() === e
                        ? 0 + 40 * t
                        : 10 * o + 40 * t;
                  } catch {
                    a = 10 * o + 40 * t;
                  }
                  i.distances[n] || (i.distances[n] = {}),
                    (i.distances[n][u] = a),
                    a < r &&
                      ((r = a),
                      (i.matchedDesiredLocale = n),
                      (i.matchedSupportedLocale = u));
                  break;
                }
              }
            }
          } catch {}
        }
        return (
          (i.matchedSupportedLocale && 0 === r) ||
            (e.forEach((e, n) => {
              i.distances[e] || (i.distances[e] = {}),
                a.forEach((a, s) => {
                  let o = t[s],
                    u = h(e, a) + 0 + 40 * n;
                  (i.distances[e][o] = u),
                    u < r &&
                      ((r = u),
                      (i.matchedDesiredLocale = e),
                      (i.matchedSupportedLocale = o));
                });
            }),
            r >= n &&
              ((i.matchedDesiredLocale = void 0),
              (i.matchedSupportedLocale = void 0))),
          i
        );
      }
    },
    159563(e, t, n) {
      "use strict";
      function r(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (n.length
              ? " " +
                n
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf",
        );
      }
      function i(e) {
        return !!e && !!e[N];
      }
      function a(e) {
        var t;
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              n === Object ||
              ("function" == typeof n && Function.toString.call(n) === z)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[j] ||
            !!(null == (t = e.constructor) ? void 0 : t[j]) ||
            l(e) ||
            d(e))
        );
      }
      function s(e, t, n) {
        void 0 === n && (n = !1),
          0 === o(e)
            ? (n ? Object.keys : G)(e).forEach(function (r) {
                (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                return t(r, n, e);
              });
      }
      function o(e) {
        var t = e[N];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
            ? 1
            : l(e)
              ? 2
              : 3 * !!d(e);
      }
      function u(e, t) {
        return 2 === o(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function c(e, t, n) {
        var r = o(e);
        2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
      }
      function l(e) {
        return O && e instanceof Map;
      }
      function d(e) {
        return M && e instanceof Set;
      }
      function h(e) {
        return e.o || e.t;
      }
      function f(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = W(e);
        delete t[N];
        for (var n = G(t), r = 0; r < n.length; r++) {
          var i = n[r],
            a = t[i];
          !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) &&
              (t[i] = {
                configurable: !0,
                writable: !0,
                enumerable: a.enumerable,
                value: e[i],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function p(e, t) {
        return (
          void 0 === t && (t = !1),
          m(e) ||
            i(e) ||
            !a(e) ||
            (o(e) > 1 && (e.set = e.add = e.clear = e.delete = _),
            Object.freeze(e),
            t &&
              s(
                e,
                function (e, t) {
                  return p(t, !0);
                },
                !0,
              )),
          e
        );
      }
      function _() {
        r(2);
      }
      function m(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function g(e) {
        var t = H[e];
        return t || r(18, e), t;
      }
      n.d(t, { Qx: () => i, jM: () => X, mq: () => Z, vD: () => Y });
      function b(e, t) {
        t && (g("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function v(e) {
        y(e), e.p.forEach(k), (e.p = null);
      }
      function y(e) {
        e === L && (L = e.l);
      }
      function w(e) {
        return (L = { p: [], l: L, h: e, m: !0, _: 0 });
      }
      function k(e) {
        var t = e[N];
        0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
      }
      function x(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          i = void 0 !== e && e !== n;
        return (
          t.h.O || g("ES5").S(t, e, i),
          i
            ? (n[N].P && (v(t), r(4)),
              a(e) && ((e = R(t, e)), t.l || E(t, e)),
              t.u && g("Patches").M(n[N].t, e, t.u, t.s))
            : (e = R(t, n, [])),
          v(t),
          t.u && t.v(t.u, t.s),
          e !== U ? e : void 0
        );
      }
      function R(e, t, n) {
        if (m(t)) return t;
        var r = t[N];
        if (!r)
          return (
            s(
              t,
              function (i, a) {
                return A(e, r, t, i, a, n);
              },
              !0,
            ),
            t
          );
        if (r.A !== e) return t;
        if (!r.P) return E(e, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var i = 4 === r.i || 5 === r.i ? (r.o = f(r.k)) : r.o,
            a = i,
            o = !1;
          3 === r.i && ((a = new Set(i)), i.clear(), (o = !0)),
            s(a, function (t, a) {
              return A(e, r, i, t, a, n, o);
            }),
            E(e, i, !1),
            n && e.u && g("Patches").N(r, n, e.u, e.s);
        }
        return r.o;
      }
      function A(e, t, n, r, s, o, l) {
        if (i(s)) {
          var d = R(
            e,
            s,
            o && t && 3 !== t.i && !u(t.R, r) ? o.concat(r) : void 0,
          );
          if ((c(n, r, d), !i(d))) return;
          e.m = !1;
        } else l && n.add(s);
        if (a(s) && !m(s)) {
          if (!e.h.D && e._ < 1) return;
          R(e, s), (t && t.A.l) || E(e, s);
        }
      }
      function E(e, t, n) {
        void 0 === n && (n = !1), !e.l && e.h.D && e.m && p(t, n);
      }
      function T(e, t) {
        var n = e[N];
        return (n ? h(n) : e)[t];
      }
      function V(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function C(e) {
        e.P || ((e.P = !0), e.l && C(e.l));
      }
      function D(e) {
        e.o || (e.o = f(e.t));
      }
      function F(e, t, n) {
        var r,
          i,
          a,
          s,
          o,
          u,
          c,
          h = l(t)
            ? g("MapSet").F(t, n)
            : d(t)
              ? g("MapSet").T(t, n)
              : e.O
                ? ((a = i =
                    {
                      i: +!!(r = Array.isArray(t)),
                      A: n ? n.A : L,
                      P: !1,
                      I: !1,
                      R: {},
                      l: n,
                      t: t,
                      k: null,
                      o: null,
                      j: null,
                      C: !1,
                    }),
                  (s = q),
                  r && ((a = [i]), (s = J)),
                  (u = (o = Proxy.revocable(a, s)).revoke),
                  (i.k = c = o.proxy),
                  (i.j = u),
                  c)
                : g("ES5").J(t, n);
        return (n ? n.A : L).p.push(h), h;
      }
      function P(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return f(e);
      }
      var S,
        L,
        I = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
        O = "u" > typeof Map,
        M = "u" > typeof Set,
        B =
          "u" > typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "u" > typeof Reflect,
        U = I
          ? Symbol.for("immer-nothing")
          : (((S = {})["immer-nothing"] = !0), S),
        j = I ? Symbol.for("immer-draftable") : "__$immer_draftable",
        N = I ? Symbol.for("immer-state") : "__$immer_state",
        z = "" + Object.prototype.constructor,
        G =
          "u" > typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                    Object.getOwnPropertySymbols(e),
                  );
                }
              : Object.getOwnPropertyNames,
        W =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              G(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
            );
          },
        H = {},
        q = {
          get: function (e, t) {
            if (t === N) return e;
            var n,
              r,
              i = h(e);
            if (!u(i, t))
              return (r = V(i, t))
                ? "value" in r
                  ? r.value
                  : null == (n = r.get)
                    ? void 0
                    : n.call(e.k)
                : void 0;
            var s = i[t];
            return e.I || !a(s)
              ? s
              : s === T(e.t, t)
                ? (D(e), (e.o[t] = F(e.A.h, s, e)))
                : s;
          },
          has: function (e, t) {
            return t in h(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(h(e));
          },
          set: function (e, t, n) {
            var r = V(h(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var i = T(h(e), t),
                a = null == i ? void 0 : i[N];
              if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
              if (
                (n === i ? 0 !== n || 1 / n == 1 / i : n != n && i != i) &&
                (void 0 !== n || u(e.t, t))
              )
                return !0;
              D(e), C(e);
            }
            return (
              (e.o[t] === n && (void 0 !== n || t in e.o)) ||
                (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
                ((e.o[t] = n), (e.R[t] = !0)),
              !0
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== T(e.t, t) || t in e.t
                ? ((e.R[t] = !1), D(e), C(e))
                : delete e.R[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = h(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: r.enumerable,
                  value: n[t],
                }
              : r;
          },
          defineProperty: function () {
            r(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            r(12);
          },
        },
        J = {};
      s(q, function (e, t) {
        J[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (J.deleteProperty = function (e, t) {
          return J.set.call(this, e, t, void 0);
        }),
        (J.set = function (e, t, n) {
          return q.set.call(this, e[0], t, n, e[0]);
        });
      var K = new ((function () {
          function e(e) {
            var t = this;
            (this.O = B),
              (this.D = !0),
              (this.produce = function (e, n, i) {
                if ("function" == typeof e && "function" != typeof n) {
                  var s,
                    o = n;
                  return (
                    (n = e),
                    function (e) {
                      var r = this;
                      void 0 === e && (e = o);
                      for (
                        var i = arguments.length,
                          a = Array(i > 1 ? i - 1 : 0),
                          s = 1;
                        s < i;
                        s++
                      )
                        a[s - 1] = arguments[s];
                      return t.produce(e, function (e) {
                        var t;
                        return (t = n).call.apply(t, [r, e].concat(a));
                      });
                    }
                  );
                }
                if (
                  ("function" != typeof n && r(6),
                  void 0 !== i && "function" != typeof i && r(7),
                  a(e))
                ) {
                  var u = w(t),
                    c = F(t, e, void 0),
                    l = !0;
                  try {
                    (s = n(c)), (l = !1);
                  } finally {
                    l ? v(u) : y(u);
                  }
                  return "u" > typeof Promise && s instanceof Promise
                    ? s.then(
                        function (e) {
                          return b(u, i), x(e, u);
                        },
                        function (e) {
                          throw (v(u), e);
                        },
                      )
                    : (b(u, i), x(s, u));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (s = n(e)) && (s = e),
                    s === U && (s = void 0),
                    t.D && p(s, !0),
                    i)
                  ) {
                    var d = [],
                      h = [];
                    g("Patches").M(e, s, d, h), i(d, h);
                  }
                  return s;
                }
                r(21, e);
              }),
              (this.produceWithPatches = function (e, n) {
                if ("function" == typeof e)
                  return function (n) {
                    for (
                      var r = arguments.length,
                        i = Array(r > 1 ? r - 1 : 0),
                        a = 1;
                      a < r;
                      a++
                    )
                      i[a - 1] = arguments[a];
                    return t.produceWithPatches(n, function (t) {
                      return e.apply(void 0, [t].concat(i));
                    });
                  };
                var r,
                  i,
                  a = t.produce(e, n, function (e, t) {
                    (r = e), (i = t);
                  });
                return "u" > typeof Promise && a instanceof Promise
                  ? a.then(function (e) {
                      return [e, r, i];
                    })
                  : [a, r, i];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              a(e) || r(8),
                i(e) &&
                  (i((t = e)) || r(22, t),
                  (e = (function e(t) {
                    if (!a(t)) return t;
                    var n,
                      r = t[N],
                      i = o(t);
                    if (r) {
                      if (!r.P && (r.i < 4 || !g("ES5").K(r))) return r.t;
                      (r.I = !0), (n = P(t, i)), (r.I = !1);
                    } else n = P(t, i);
                    return (
                      s(n, function (t, i) {
                        var a;
                        (r &&
                          ((a = r.t), (2 === o(a) ? a.get(t) : a[t]) === i)) ||
                          c(n, t, e(i));
                      }),
                      3 === i ? new Set(n) : n
                    );
                  })(t)));
              var t,
                n = w(this),
                u = F(this, e, void 0);
              return (u[N].C = !0), y(n), u;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[N]).A;
              return b(n, t), x(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.D = e;
            }),
            (t.setUseProxies = function (e) {
              e && !B && r(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
              for (n = t.length - 1; n >= 0; n--) {
                var n,
                  r = t[n];
                if (0 === r.path.length && "replace" === r.op) {
                  e = r.value;
                  break;
                }
              }
              n > -1 && (t = t.slice(n + 1));
              var a = g("Patches").$;
              return i(e)
                ? a(e, t)
                : this.produce(e, function (e) {
                    return a(e, t);
                  });
            }),
            e
          );
        })())(),
        X = K.produce,
        Z =
          (K.produceWithPatches.bind(K),
          K.setAutoFreeze.bind(K),
          K.setUseProxies.bind(K),
          K.applyPatches.bind(K),
          K.createDraft.bind(K)),
        Y = K.finishDraft.bind(K);
    },
    694260(e, t, n) {
      "use strict";
      function r(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function i(e) {
        var t, n;
        return (
          !1 !== r(e) &&
          (void 0 === (t = e.constructor) ||
            (!1 !== r((n = t.prototype)) &&
              !1 !== n.hasOwnProperty("isPrototypeOf")))
        );
      }
      n.d(t, { Q: () => i });
    },
    342324(e, t, n) {
      "use strict";
      let r;
      n.d(t, { A: () => tE });
      var i,
        a,
        s,
        o,
        u,
        c,
        l,
        d,
        h = {};
      n.r(h),
        n.d(h, {
          decode: () => m,
          encode: () => v,
          format: () => y,
          parse: () => F,
        });
      var f = {};
      n.r(f),
        n.d(f, {
          Any: () => P,
          Cc: () => S,
          Cf: () => L,
          P: () => I,
          S: () => O,
          Z: () => M,
        });
      let p = {};
      function _(e, t) {
        "string" != typeof t && (t = _.defaultChars);
        let n = (function (e) {
          let t = p[e];
          if (t) return t;
          t = p[e] = [];
          for (let e = 0; e < 128; e++) {
            let n = String.fromCharCode(e);
            t.push(n);
          }
          for (let n = 0; n < e.length; n++) {
            let r = e.charCodeAt(n);
            t[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
          }
          return t;
        })(t);
        return e.replace(/(%[a-f0-9]{2})+/gi, function (e) {
          let t = "";
          for (let r = 0, i = e.length; r < i; r += 3) {
            let a = parseInt(e.slice(r + 1, r + 3), 16);
            if (a < 128) {
              t += n[a];
              continue;
            }
            if ((224 & a) == 192 && r + 3 < i) {
              let n = parseInt(e.slice(r + 4, r + 6), 16);
              if ((192 & n) == 128) {
                let e = ((a << 6) & 1984) | (63 & n);
                e < 128 ? (t += "\uFFFD\uFFFD") : (t += String.fromCharCode(e)),
                  (r += 3);
                continue;
              }
            }
            if ((240 & a) == 224 && r + 6 < i) {
              let n = parseInt(e.slice(r + 4, r + 6), 16),
                i = parseInt(e.slice(r + 7, r + 9), 16);
              if ((192 & n) == 128 && (192 & i) == 128) {
                let e = ((a << 12) & 61440) | ((n << 6) & 4032) | (63 & i);
                e < 2048 || (e >= 55296 && e <= 57343)
                  ? (t += "\uFFFD\uFFFD\uFFFD")
                  : (t += String.fromCharCode(e)),
                  (r += 6);
                continue;
              }
            }
            if ((248 & a) == 240 && r + 9 < i) {
              let n = parseInt(e.slice(r + 4, r + 6), 16),
                i = parseInt(e.slice(r + 7, r + 9), 16),
                s = parseInt(e.slice(r + 10, r + 12), 16);
              if ((192 & n) == 128 && (192 & i) == 128 && (192 & s) == 128) {
                let e =
                  ((a << 18) & 1835008) |
                  ((n << 12) & 258048) |
                  ((i << 6) & 4032) |
                  (63 & s);
                e < 65536 || e > 1114111
                  ? (t += "\uFFFD\uFFFD\uFFFD\uFFFD")
                  : ((e -= 65536),
                    (t += String.fromCharCode(
                      55296 + (e >> 10),
                      56320 + (1023 & e),
                    ))),
                  (r += 9);
                continue;
              }
            }
            t += "\uFFFD";
          }
          return t;
        });
      }
      (_.defaultChars = ";/?:@&=+$,#"), (_.componentChars = "");
      let m = _,
        g = {};
      function b(e, t, n) {
        "string" != typeof t && ((n = t), (t = b.defaultChars)),
          void 0 === n && (n = !0);
        let r = (function (e) {
            let t = g[e];
            if (t) return t;
            t = g[e] = [];
            for (let e = 0; e < 128; e++) {
              let n = String.fromCharCode(e);
              /^[0-9a-z]$/i.test(n)
                ? t.push(n)
                : t.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
            }
            for (let n = 0; n < e.length; n++) t[e.charCodeAt(n)] = e[n];
            return t;
          })(t),
          i = "";
        for (let t = 0, a = e.length; t < a; t++) {
          let s = e.charCodeAt(t);
          if (
            n &&
            37 === s &&
            t + 2 < a &&
            /^[0-9a-f]{2}$/i.test(e.slice(t + 1, t + 3))
          ) {
            (i += e.slice(t, t + 3)), (t += 2);
            continue;
          }
          if (s < 128) {
            i += r[s];
            continue;
          }
          if (s >= 55296 && s <= 57343) {
            if (s >= 55296 && s <= 56319 && t + 1 < a) {
              let n = e.charCodeAt(t + 1);
              if (n >= 56320 && n <= 57343) {
                (i += encodeURIComponent(e[t] + e[t + 1])), t++;
                continue;
              }
            }
            i += "%EF%BF%BD";
            continue;
          }
          i += encodeURIComponent(e[t]);
        }
        return i;
      }
      (b.defaultChars = ";/?:@&=+$,-_.!~*'()#"),
        (b.componentChars = "-_.!~*'()");
      let v = b;
      function y(e) {
        let t = "";
        return (
          (t += e.protocol || ""),
          (t += e.slashes ? "//" : ""),
          (t += e.auth ? e.auth + "@" : ""),
          e.hostname && -1 !== e.hostname.indexOf(":")
            ? (t += "[" + e.hostname + "]")
            : (t += e.hostname || ""),
          (t += e.port ? ":" + e.port : ""),
          (t += e.pathname || ""),
          (t += e.search || ""),
          (t += e.hash || "")
        );
      }
      function w() {
        (this.protocol = null),
          (this.slashes = null),
          (this.auth = null),
          (this.port = null),
          (this.hostname = null),
          (this.hash = null),
          (this.search = null),
          (this.pathname = null);
      }
      let k = /^([a-z0-9.+-]+:)/i,
        x = /:[0-9]*$/,
        R = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        A = ["%", "/", "?", ";", "#"].concat(
          ["'"].concat(
            ["{", "}", "|", "\\", "^", "`"].concat([
              "<",
              ">",
              '"',
              "`",
              " ",
              "\r",
              "\n",
              "	",
            ]),
          ),
        ),
        E = ["/", "?", "#"],
        T = /^[+a-z0-9A-Z_-]{0,63}$/,
        V = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        C = { javascript: !0, "javascript:": !0 },
        D = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          "http:": !0,
          "https:": !0,
          "ftp:": !0,
          "gopher:": !0,
          "file:": !0,
        };
      (w.prototype.parse = function (e, t) {
        let n,
          r,
          i,
          a = e;
        if (((a = a.trim()), !t && 1 === e.split("#").length)) {
          let e = R.exec(a);
          if (e)
            return (this.pathname = e[1]), e[2] && (this.search = e[2]), this;
        }
        let s = k.exec(a);
        if (
          (s &&
            ((n = (s = s[0]).toLowerCase()),
            (this.protocol = s),
            (a = a.substr(s.length))),
          (t || s || a.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
            (i = "//" === a.substr(0, 2)) &&
            !(s && C[s]) &&
            ((a = a.substr(2)), (this.slashes = !0)),
          !C[s] && (i || (s && !D[s])))
        ) {
          let e,
            t,
            n = -1;
          for (let e = 0; e < E.length; e++)
            -1 !== (r = a.indexOf(E[e])) && (-1 === n || r < n) && (n = r);
          -1 !== (t = -1 === n ? a.lastIndexOf("@") : a.lastIndexOf("@", n)) &&
            ((e = a.slice(0, t)), (a = a.slice(t + 1)), (this.auth = e)),
            (n = -1);
          for (let e = 0; e < A.length; e++)
            -1 !== (r = a.indexOf(A[e])) && (-1 === n || r < n) && (n = r);
          -1 === n && (n = a.length), ":" === a[n - 1] && n--;
          let i = a.slice(0, n);
          (a = a.slice(n)),
            this.parseHost(i),
            (this.hostname = this.hostname || "");
          let s =
            "[" === this.hostname[0] &&
            "]" === this.hostname[this.hostname.length - 1];
          if (!s) {
            let e = this.hostname.split(/\./);
            for (let t = 0, n = e.length; t < n; t++) {
              let n = e[t];
              if (n && !n.match(T)) {
                let r = "";
                for (let e = 0, t = n.length; e < t; e++)
                  n.charCodeAt(e) > 127 ? (r += "x") : (r += n[e]);
                if (!r.match(T)) {
                  let r = e.slice(0, t),
                    i = e.slice(t + 1),
                    s = n.match(V);
                  s && (r.push(s[1]), i.unshift(s[2])),
                    i.length && (a = i.join(".") + a),
                    (this.hostname = r.join("."));
                  break;
                }
              }
            }
          }
          this.hostname.length > 255 && (this.hostname = ""),
            s &&
              (this.hostname = this.hostname.substr(
                1,
                this.hostname.length - 2,
              ));
        }
        let o = a.indexOf("#");
        -1 !== o && ((this.hash = a.substr(o)), (a = a.slice(0, o)));
        let u = a.indexOf("?");
        return (
          -1 !== u && ((this.search = a.substr(u)), (a = a.slice(0, u))),
          a && (this.pathname = a),
          D[n] && this.hostname && !this.pathname && (this.pathname = ""),
          this
        );
      }),
        (w.prototype.parseHost = function (e) {
          let t = x.exec(e);
          t &&
            (":" !== (t = t[0]) && (this.port = t.substr(1)),
            (e = e.substr(0, e.length - t.length))),
            e && (this.hostname = e);
        });
      let F = function (e, t) {
          if (e && e instanceof w) return e;
          let n = new w();
          return n.parse(e, t), n;
        },
        P =
          /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
        S = /[\0-\x1F\x7F-\x9F]/,
        L =
          /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
        I =
          /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B60\u1B7D-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDEAD\uDED0\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]/,
        O =
          /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD803[\uDD8E\uDD8F\uDED1-\uDED8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA]/,
        M = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
        B = [
          8364, 0, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338,
          0, 381, 0, 0, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482,
          353, 8250, 339, 0, 382, 376,
        ],
        U = (() => {
          let e = new Uint8Array(127),
            t = 0;
          for (let n = 33; n <= 126; n++)
            34 !== n && 36 !== n && 92 !== n && (e[n] = t++);
          return e;
        })(),
        j = (function (e) {
          let t = e.length,
            n = 0,
            r = () => {
              let t = U[e.charCodeAt(n++)];
              return t < 61 ? t : 91 * t - 5490 + U[e.charCodeAt(n++)];
            },
            i = new Int32Array(2738);
          i.fill(-1, 49, 61), i.fill(-1, 2725, 2738);
          let a = new Int32Array(2738),
            s = new Int32Array(2738);
          function o(t, r) {
            let a = 0,
              s = r,
              o = r + t;
            for (; s < o; ) {
              let t = U[e.charCodeAt(n++)];
              if (t < 89) (a += t), (i[s++] = a);
              else if (89 === t) {
                let t = U[e.charCodeAt(n++)] + 2;
                for (; t--; ) i[s++] = ++a;
              } else {
                let t = U[e.charCodeAt(n++)];
                (a +=
                  89 +
                  (t < 90
                    ? 91 * t + U[e.charCodeAt(n++)]
                    : 8281 * U[e.charCodeAt(n++)] +
                      91 * U[e.charCodeAt(n++)] +
                      U[e.charCodeAt(n++)])),
                  (i[s++] = a);
              }
            }
          }
          o(49, 0), o(2664, 61);
          let u = new Int32Array(50),
            c = 0,
            l = 0;
          function d(e, t) {
            for (let n = 0; n < e; n++) {
              let e = t + n,
                o = r(),
                d = r();
              (u[2 * l] = o), (u[2 * l + 1] = d), (l += 1), (a[e] = c);
              let h = (i[o] < 0 ? s[o] : 1) + (i[d] < 0 ? s[d] : 1);
              (s[e] = h), (c += h);
            }
          }
          d(13, 2725), d(12, 49);
          let h = new Uint16Array(c),
            f = 0;
          for (let e = 0; e < l; e++)
            for (let t = 0; t < 2; t++) {
              let n = u[2 * e + t],
                r = i[n];
              if (r < 0) {
                let e = a[n],
                  t = e + s[n];
                for (; e < t; ) h[f++] = h[e++];
              } else h[f++] = r;
            }
          let p = new Uint16Array(13494),
            _ = 0;
          for (; n < t; ) {
            let t = U[e.charCodeAt(n++)];
            t >= 61 && (t = 91 * t - 5490 + U[e.charCodeAt(n++)]);
            let r = i[t];
            if (r < 0) {
              let e = a[t],
                n = e + s[t];
              for (; e < n; ) p[_++] = h[e++];
            } else p[_++] = r;
          }
          return p;
        })(
          "!}.&u%}'&}*'~!6*)%&,~!J~!J~%L~y<~!R,~~%Lu~~#GD~~#|)1#%}^%}2%+#.##%##%}&%##%'#%##&%#%#'%#&#%#&#'#%%#&#%##%#)%''%&%#%#'%#%%#%%}%%%#%#&(23#%%#&-%0%('1#(##%#'##+%'*.:1}#%#6-+(%'%%#%%%}#L'2351&('%}&/N'(0(/*-%(%%}#'+&T%7.2}#&%&#%#36/5##%&%%#&#%%#))2%%##%&&'0~!#*+&'%1~!%).'3q?&%'1~!.##%6(~!+%%%(Gw'rT~!E#<nA%#jZ~!H%(~!42##~!*31&~!G%U~#)5~#`3~!J~!Z~%]~%Y~%C~!q~!u~#kz~%#~!6'~!D~!U~!?~#T~!c%~!G#'~%7|~!G~!J~!G&~#pb~(Df}#%}*&}#%##%##%##&#-}&'#'&%#.++}%mI,#,@&(}*%}*'%&##&#%##%}&0}#.},U},%}+%}&%}#%##&}B%(}(%}+%)})%##%#&}&%##%&}<%}>%#%&}*%}(%}9%}/%})%}*%}*%}?&}&%}3%}&*#%})%#%#)}#&#-#+*%E%%'%'#%}#*V##&##I}#&&##%&%#&&Qf%%))w/0+&%#(#.%-''''++++7}>%4'',##1,#%#&%##&#'##&#*#9)%&%}#*}%,#+P(%A&%#'&##wSD',9E00#y#@}(+}&%&>~!#~!X}#*}(&&}(&}(,%}%&#+&}#&}I%#%}%)#(},'%#*}4%%#%}(''}#/##(##),%-##%%)#&}(.}&%#&}%%}*&#%},&&}&%}#%*'#%})%}D&}&%}-&}6&#&}-,%}#%})-(~+`~,=?~I9'9%~!,#%})%})%}@%}?%}(~!?~#<~#pP~#BG~#=1#%K+~#?#~%;)~#A~#mF1~#A'~'X%'~#lR~#N~'N~#r~#m#-~#i'?%#'%~#B%##%,%#~#_%#0%~#]732~,w~2+#:&#%&'0%&>%}#>##F+)#%&&#(+_}4&}-%}(&}@&}O7Fdf0@+/v4}&WU##&/0#&'('B#%}.%}'+#%}#%%&#&%#%##+#&#)#6#'#.},%}c%},%#%##%&#&%#&~#>'*-.%##%##%}#%%}%'~#)D1}#%*&~#_%%'(~#S2%'.}#~#=##*'*-%}&'%'##&&~'E%.#&~#M4}%%##&'%#~#O1##%&#'+~#<B%##%%'%+~#;#@%}#&%#&&%#(~#H1}'%'##&&~#?A}&'~#D#%32}'&&&&~#[}'(#%}'~#;C})&}%%#%~#=&%,3}%'(#%%~#^'#&&)#%'~#Y%-~#d-%'~#^%%&#&&&}#~#b~2t*&'~&(~&@~0%~e~3}%*''0})&}+~!9##-}#%-hD*)1fC#%/&/fB#40~!+#)*4~!+~!K'&:~!/*7~!.#~!H~!L':~%x&~!H#~!*~%1~!I#~!+A~#p'~!F~~#-#~,,(~.Z~!V~%;'B'mq-W~!N~%I%#&&#&}#%},%%}'%}+X#%}#&}(%}'%}<%}#%}%%'}'%}:~![)9@~%>~#UA%-%##&~!C%~!-.9:~!1~!-^2/:a~!y,D*J#-5)/4~%23,~#G~!L1~!0X3`~!2+~!!0-~&E~!W~!o,>Y&]~%cZx_&~#O*9#A#'#+I'%#)~!0B*-5A+-((F&*M#)(-7-5+'-3a5Vi~!Y~!?+[)%3),ERHm~!+:D,VG.+)?fB%%*(%)'(#&80%1'8`K8?`+'Z#&O&'H5#*9)A%%5&3))0%39+.*7#()&&*=4@**L)<'_&*+..;(#*+)./&0#3)%')-8(4ixD(&.}%,('aI:,)%,k2231T)I'#/-W7,/'Q#.'Y24+h')37</31&83##&0#),H(?'&?/1##%#&&#%''-%&&&#(&''&#.-'%#%%(,')*'&#&#'##%(%(#%('#&##%%%%('%#%#%%#%#&%##h>w+v<ayvyvcg.uuhKr}g/v|g>u9i[~>g5uI~=RvdwEg;v/g;uk!!TTSx]@RT!U!#!@VBRUU!'UTe-d0c`e&gSdicedFcrdTaqb.kYcAohdYd@a3e+d}dMdtd.aJ#bqcK`dle/e.e'dwdPdodddjbEb}ogd^ofdpduc6j?l%d{drdqc)d7bacOdQ%T#Y)X.sR[yH>6Vyv3[xwLu>vo'!*.[yBacahoj>6Rew3[xqdZa#!a&#^(X-[yG>6Vyu3[xvg3sEr|g.u/Ri9db0T#^(Xa)!-[y;>6Vylg4wKs{JwNZt3@3r=c4Z([xlg;wKt!cpq's@v7A'*a(a+!-a#[y<3Dt?3Dt'>6Vym3[xmg9rxsNJwLZt4~?r?db1T#`-!(Xa,!0[yS>6Vz%NuQs.g4wKtnJwNZtS@3r>c4Z([y%g;wKtrdga8!a(!#&T*Y-Xa#!a0<or[yc3Dtq>6Vz43[y3JwNZtf@3s!Ju}!%Dti:pm3c_%X#tjB5pkd6q!r]u?voC'*-a.a2!0a&a+[yI3DtI3Ds~3DtH>6Vyw3[xx;:s#~<5pKJwNZtE@3r~d`a)!a2T#a.(!+U.X1[yT3Dt`3Dtv>6Vz&3[y&g9rxwzcxstPu.<rAJwLZtT~?r@dZa%!a.&^*Za(/Reu[ya>6Vz23[y1g3sEr}wkg{NuQRg{ci(U#5@b`~,cg#U(2WnH5wugcRh7dX#T(Y,a'Ta!!a,[yZ<]mj>6Vz,3[y+Pv#5ReZKu+=,%!H}7ABwkaS?Rh:BcW(X#<]mrj:ubv/ARekdg%!(!a.*Ta(Y.X1!#sP>Rl*Dt6[y>>6Vyo3Wf*jOvuumvuRgRJuq*!:9<B@bX~3jVv&v@s@5Re[d/rQt{uAvo&a&a*)a2!,0Wf!3Dt0=Bs'>6Re}3[xy~<5s%JwJZt1~Gs)c;&!#2sJkNuXvzq7rxu,Re8dka4!a8(aEZ+a@Y.X1Xa)[yd=Bs(3DtP>6Vz53[y4cX#X&Re:avRe9~<5s&JwJZtQ~Gs*i^rzvdRg+Jv{%!2sbB@bX}kdga,!Za?&^*T1/!a'Dt+[y6>6Vyf3Wf%g/u;s4hGu6?Rh-JvZ,!c%#&RoX54Rivj7uyvf8RgTKvZB%*!2sGh<vu5Rgq<=C::9bb~#dZ#T&Ta6Y.X*Dt>[y93Wf)coZ(T,6VyifluvRgC@95@B@bX~/hFu34cC#T,k/unq8w8Q5RkUklwQuzunq8w8Q5Rk8d/rJu?v8w9)-&!a0a;a&aIWejg3sEr/h1s<DtDJvyZqY5aws3Jvy!&Wei~Hr1:au5@Bag>23E~5c:Z&bX};kKv?w&unuVu5Rjc;>bs)#~@:Rh.=ay<a]C;b`}Vd6s/t{uAvoaxa()!a,a7%-a#a2Dt,[yF2Wo[>6Vyt3[xuNuPRi&NuPwpi#RoWh?vf8Ri%Jv]!%Ri:KvxD!.'2WeAjZu`q9rxu,Re7woeAg-unLq(qA_/*2Wg_g3u5q^9:4E}/jTrxrzv=Wkkd~0UX#^^Xa-a1a5T&a=U1a'*aEa]!a*aPaA-adok[y54Rn>;:p3~Dp5g9rpsFNvZqjg3uJp4~<5p0Pw;5qlJwNZt*@3p1Pw:5p/Ou!5p2JvG'!6Vye=<qnJvh_[xhg3v,Rh3kOwOw-sDuev/Re^dha[a%!%!a+#Ta7)-5TaCaO!aka!a)sf[yb2>Rl!9ARiq5E}Qg=ucRkBE|oJrJ_@Wk~@Wk{JrJ_@Wk|@WkyJrJ_@Wk}@WkzJvO_[y2g-vMRmiKuYC!)&>Ri;>Ri<@3RkNc](X#@9Rk=g5vuRmhKvDB!+'=]meg3u4Rmgd)#Y'Vz3CARmfd`a+!%T'!+#Ta1Ta6TaM-sTDt9[yA9sYd'%Y#s[[xpj:ueunaXRgEjRq,v-vuqdd2'`#6Rev<32@5>:2<E}5xIo9a*X#Y(;5RePJvD_g>vyRgNj8w)v8<wggs:RgXiZt|vjx,hSq3ah!-(~@:Ro/Ou!5RhWj^v(pyw8unRhUdx-UY#^Ua.a3a70!)%UX1TaDa)'omRiRRhE[y:3Dsz=Br,>6Vyj3[xkg6ruwjcqsrPw;5r*Ku]D'Zt-@3r(~?r.i[vwv]dU1a--U#`a4(g/vsRhPOu!5RhLj:rmu9Wo!~@:wdh@g/vsRiTjXuvvNr}:RhBj^v(pyw8unRn]dz1UYa'a+^Y(!aETZalaRY.Ta?a4[yDJw1!#qLsW>6Vyrfzq-pLflpwRe|Js>%!Dt@3Dt&Jvy_[xs~HrnjMuwpsw'RecKu+D#'!t<~Grl~?rjg5u-x,gwp{ah!-(~@:Rg~Ou!5Rh'jXuvvNr}:Rh#cW#X/c;&!#2sLi[v7u7RgpJv)(!iLrxu,Re6j7v@s@5Se[e7d`aW!Za(a`T.a#!a3!&aDa-!9)Dt_=6s+3[x~~DR|h~DS6avhGun5RkZj3w)v-]mkKunB!&*]kb97R|i<ARk<c:Z(6Vy}Juh'!wziMRoS:F|vkLuauJv5vtvQRh1d='T+Y#VyO~DR|jcF#T'7R|g97R|kJv3'!ay<Rj,Jvh&!:ReXcsa6*a+#a#_aIRf9aLRf?c,Z&Rf5Rf7c.Z&Rf;Rf>cQ#%T'p-Rf8Rf=ct#%'(*!,p,Rf4p+Rf6Rf:Rf<d~'Ua%U*^UYa(!a,-!#a4YaTalaEX0a8a<Weo3Dt/3Dsx=Br93Wen~Dr;~<5p<JwNZt2@3p=Pw:5p;Ou!5r3c7&!#:p>3Ds}KvGB)_6Vyk2sM=<r7x'eovA(!hFu1ARf}cV#X&@r5j6rvwQa^Rf3c=Za'wkghJv__g;unRggA53B9=b^}%j6uduo5Jq;!(hIv%2Re`Ou4ARe_e%a#^^^Xa&!a*a2!&a6YaP!*ad!#a:aE/5Rn?[y@>6Vyp;:pE~DrY~<5pBJwNZt8@3pCh=rt3rWPw:5pAJup_[xoNuPpF9c!#'45pD5ARn)d8#X'X*3@rU72s]h>v<<sSjJpqvewOJq/(!hNw'5ReBk0s2u3w/w'5ReE5@Jq.!a+JQ!&WeU23d(#Y&RjG5]jBk!u7w&u0udARjEe#+^^^Ub#!a2/a`Z(agT1!a-a;|@TaG!aS[yV=Re~fow'RguNuPRe?bz#'>RoUWeL>:Cbb|?JwPZtVg6ruRmzJvD'!6Vz(g/vmRh~Jvy_[y(g9voRgyx*cy(#2>Ri2B9b]~9kIw9u7rluJu3Rg]dI#a%UY'@=p%CAx.gQZ&RhwwygtRm{x5g_Z'+ABqR9Woa=Bp&dV#^*Xa'!&@o{g4v]Rk;Jv{!%Rk[wkkiA5RkiwwfUB=x,fUuqC&*!>RfTg8v0RfV~ARfSd;rJsAuAv9wR'ae+/aO!a@aza/a#[yQ@Wg!2Wemg3sEr0JvB_g>uvReWg2v+Re=KupB_+[y!2AbY~-~Hr2AJwD!(h<~El>h<~El?Kun@+_:9b`}Kg-v/Ri3g;vtwyk_9]k_d=&T#*U.6qh@Ab`|K9:H|CJv[!&3Dtex'fDwC%!Rf[9WlMd[(^X,!a%Z06Vz!@WgBg=v~Rgvg,QRe@awd,#Y+jTv|Q~EfWj]uNr|~FRfXdy#Y&^Ua%!aO.!(a)Ua;=!a@aKap!a-,a!Ta]a[rSa]p?[y82sK=Bq~;:p:~<5p8Pw:5p7d'#Y'Wf(;RnRi[u4w&RgJJvG'!6Vyh=<r#ijuuv/sIKuYD'ZtG@3p9~Gr&d2#`(g<vtRgFj`u5w&rqpxRf2CJuY!+:wfnTOu!5Rg}jNs1ucv&RfwJvA!&3@q|BDcC#T,k/unq8w8Q5RkTklwQuzunq8w8Q5Rk9dga#!a'!a=#a0!:+Tb*b@aO.a4!aba8aFJv^}?!VyR~Dr<g;u%Rn.~<5p[x'e`wNZtR@3p]Pw:5pZhNvjBp.woe_g5u-r4JwF!%DtO3:ooc7&!#:p^3DtpLuGw(!+%)Dtk6Vz#2sd=<r8d'#Y([y#<x3gJt`w@!)%}MRiowzikRij=]ilxAf3,U(#B2Rf#g0v-Rm[ck{`U#]giKv3>)!&6Ri154s,KuGB_%@r68r:dJ|t`#X(9<E|u2@H|rx3gJu?w'!+'1Nu7Reg4=H~+9<wxgY95Rm]xLggZ-`(X}U2:Ri4h<uOawRmsJv__5@bb{jbV~3dka#a'a]!,#a+U=a>b6a3b%!/aKa/)!arwve^VyJ;:pR~DpTg3uJpS~<5pOPw;5qmPw:5pNOu!5pQJvG'!6Vyx=<qoJvA!{~Jup!%@qk7Rn/KvyD!}''[xz;>wkh'?Rh,x8gyt`w5D!&),(SgyccRgztJ@3pPB5p#d'(Y#<]mmifubw&RgoJvE&!82s^JvF&!8Rf,ADb]~;x=h'rNu]vK!,%'*0RnORh)4Rh*AqQg-vaRnNg;wHwkh'ba~4cE#Ta*x3gctyw@'!+%RnFRnD<4Rn@hFvK5RnCxWg[#`&a0Ua()`1Rm75Rg[c]%X#qi8Rg^NvdRj>BwzgZauwji7Rm6A4wgg]d1#&(*,.0a#Rm;Rm<Rm=Rm>Rm?Rm@RmARmBe%#^^^Xaea?aC/b+(,!a+a#!a/!>a&Ta<aKbD!2wphBRnk[yPw}hE|.=Br-3Dtm>6Vy~g6urRf.x,hPrNav!%'RnqRo%Ro#Nu;q[Pw;5r+JwNZtM@3r)d'#Y'Weh;xChL#`&RnmRnoKu}>%(!Rne~Bs-;2wjcussJv+'!aYSO}6@B<5?ba~8LrNvj!.%*ROwungw~ng~:9;Ri^>wtnig;wHRnixDh@|(UZ.x1h@|)!#:2<H|*xHn]#-UX'3Ro)z=iT}6ARns=Bwsn_wpnaRncw]aR(#UXa&Ua*a/=]iPd'#Y&Ro'WnXf{QRm2hNvj]nZd`'T~&1`{|`#9b]{}c:'!#Wl{>@=be}]?cl{{U#:5Abb}Jds#^YaF!a*b4a#a3aPa>&Tb!bH!*a_!Eau?/a&RjY<]gj>6Vz*;:pe~DrZg,QRj1JwNZtX@wihspcJvZ&!VyX9WmOJu|!|N2WmHJvh&!]ht~Bpbcn&T(!#RmQ<s7Nu;padH#X'`+WmJ@>RmKCARhnKup=!)&Wf+:RhqNuPpf9c!#'45pd5AwghpARn(Ls@w!%,)!RmP@Wfe<E|IJva!&WmNg8vsRmLd`*.`#Y'Xa!axRn*]hrA8Rhug5s@rXg8u!RmMd8#X'X*3@rV72smdI*#UY&RmICARho~GsgxVgd)Ta'U-Y&Xa!T#RnEWnA@Wffg1uDRi0hFvK5RnBxGnG&#`%owp)@wsf+bX}Ze-*1!a*^^^Ua|!#a.aq&Ya2!a>.a6!a:aO`aJDtL[y`@Wg#>6Vz12@wzoYRoZNuPRi!NuPRhzg=ucRi,@=b`{Yg=ucRi-ACJvB!&Sh[ebSh]ebi`wUuFRm4Jw2_[y0JvB!.<Ju(!&SoG}6Shd}6<Ju(!&SoH}6She}6Kur@._g5vHRieJvx!{L2G{Kx6gd'T#?Rh82Wi5cZ#X(g1w)Rm5dW-Y(Ta#!a)!#aYa=wnfE=su2>>bU{0j9udv:<svj8uQv-7RgHdE%#^'sq9sp=>Bb_{TJv`!&g/r|snj6v(us5d,#Y(56H}[978H}]Jw5!&g1rushJvB!+j;v{u5?zDhd}6}bj;v{u5?zDhe}6}ce*#`(^^^a[aea!=!a6a*aoXb1a.!aAbL!b>,b'aL!aV@Wf|2Wlg3[y/JwNZt^@3piPw:5pgJunZou3@rsJva&!Vy_g<v~Rm#JvG'!6Vz0=<r{Ju{%!:pj@WfsiXuJu3Rm:JvZ&!WfA~Bph@c4Z&Dtwax5rubx(#:awRk1@d,#Y&RfjRfid1#,Y(@Wfp2Wlrg5s@ryKu[@!,'=]ig9wlk?Rk>g5u-rqJvy'!@9RkQcH(T#=>Ri~@<wkj(Wj(KuZB*!&<7rw@9RkRcH(T#=>Ri}@<wkj)Wj)dg(Ta2Xa9X#`-!a*CARhg@@=I}d9x;c~#X%so=<sj>2@@=aybb}XjWv0Q~EfEj3vLv;<d,#Y(56H}`978H}_dgaPaFa'a/!#a3Y0a_a;a|!1(a7-[yE3[xt;:pJNvZrrg3uJrvJwNZt=@3pIh=rt3rxPw:5pGOu!5rpJvG'!6Vys=<rz@c4Z&Dt(ax5rtJvZ!&~BpH@wsfNg-vaRlNci*U#=<wei<F}a5@Jq.!a*JQ!%@qZ23d(#Y&RjH5]jCk!u7w&u0udARjFd/prq=tyvpaEa(a:.!a1aZ(@@=I}:9wpd%=<sX55w_h}@@=I{t=ay<aU@@=I}T=ay<2@@=I})?C9:9au@9Cb]}DP~=x-fAZ(2Wl1=ay<aU@@=I}>5@d##Y+jTv|vV~EfFj]uNpn~FRfGdgaK!Z2&!a8a-Tb({E!acTbM*!a(DtY[yYd'%Y#sl[y*hHvh>Re5x2c{Z}.j4uCvcawRiMd+#X+_x&d!},<5RkX;2Hzw@x,gavfB-!{CcF&T#Roe;RodwWbBg5urRgaKvHC*_6Vz+<4opieuew&Rmq@d]&Y)X,T#X0Rh}<BqP=4qS9:ReMg/ujReNJw0!/<Jui%!bd{kawwnemRelAxUa?a3#*.&UX(Ya+a/RhvRnQ<o}9Wmtd-#Y&RgSRmw9;Rmxay=Rmyg-vaRmuxEhSrNu,v-voC!%(aR.a(a7+1Ro1>Ro5CE{A9b]{@;5x#eO{:g;urRi+KrNA!%(Ro3>Ro79;Ri_Ku@>{;&!x%gX|{KunA_+g5QRj/g3u5Rj#g>uERj%wio/xRhS&!,!#^1U}wba{8>>@=be}qC@:D5ba{7Ku+A&!}x?ba}t>>@=be}se(aA^^^Uat!b0#{pa+awUazbGa#aLb9bgaWac'a5TbS=Br!d1#`%scp_Jvl!#rT>Re0JvX&!VyN=H{Fcm#U&:pY=ReaJv2&!]h0=]nUJvG'!6Vy|=<r%JrM_=]h2@Wlud'#)U'Wf'b]{i=]h/Jvh!&~BpWg=v]RnMx+ny#'Nu;pVwjnu=]nwxJnx,T#`&Reqwjnt=]nvieu9vrRjLLuYwP(#+!th@wih5pX~Gr'g5v/Rh4KunA'!-CARnP@wwiN:Rm_9x'cvw>!|l=<saKvAA!0&3@q}>w^e1bp#&Re2Re3BDx7gH#T|f5H|eKuZ>!%(:qNAH{]Jv6!+3B2B9=b^{X<5<B92:E{ZLvhwA(a;a%!igQuyRmad+#Y}m@3Rh5d8#X'X*:AqUAHzmaxwbh<aXRnVcF}RT#Nw&cj#U(BWnug/vsRntdka)(a3+.Zb7aYYan1!bVa@Xa}[y^@b[{G=H{+hFu73Rj&Pv#5ReQcK%T#sig1v{Rj'Ku+D#'!t]~Grm~?rkKuMB!01d5#`'Vy.ta3Dtu~Hroc8#'{^45s85AwZbP&!#Rn!wghxWn#KvEA!)&2RlA2RlBx:h|#(T,=]j09Wobz>x]z/@awRoTd+#Y(az]hFhCrm4d,#Y+jTv|Q~EfMj]uNr|~FRfOdCa!Xa9_X#@<plJvf!%b`{(9;Rgwc;.!#2x7cw#T|UDb]|T5Ju={(!=@E{&Jv)&!Ab`{'awJvf!~*>>@=be{#KuY>!+&4Ezyi[ugv&RjIdea+T)#UXa&T-T&a!Rh9auRmW=]kLg5vuRn+g3u4Rn-Ow6ARn,hHus5xNk?#UX(U~)/g8v0RkD~AwkkF?Ri.OuNBwkkA?Ri/d|a2`a*^UYa.!aBTZaTa'Xa;!(!2!-a#b2[yC>6Vyq3[xr2Wi?g1rusVh%s?DtF~<5rbJs;%!DtBfswKtCj[uvuSsEu3RgVx3o:u+wN'*Zt;@3rd~Grh~?rfg8w)Lq)qE&-a%!>bI|`jWv0vV~EfCjTv|vV~Ef@j]uNpn~FRfBcK#T']gWNu7x,k7q4ai(0!hHv8<RhmkMu9vrsBuev/RhlCJvB!,g<v{wchh~@:Rhji[vrv{wchi~@:RhkdS&a5UY#Ta!RgPwwiI5BwciI~@:Rh`x'iJvj'!5]iJPu8Bwch]~@:Rhach)U#h3rp]gLh@t|Ax,hTq3ah!-(~@:Ro0Ou!5RhXj^v(pyw8unRhVd|)`,^UYas!a?/a2Z'a^Ta{Tb7Ta(a#!a,Wf&9sZ3DtAadamov=Bqt3[xig8vsRm~>waiL2b`{QJv*_Ouv2qgj<v]v2BqfdR'X*X#Y-@3qr~Gqv~?p6hHv-]glPup5Lq+q?_%*b_{qF{n9b^{rOu4ARhpKvCD!+&~Bqp:5Dbb}nwoiKl&unuTuBv]v+ueunaXRf0=Jvh!0nKufu8v1w&w7q%w&uHrz:Rgnj5w,uxDJq/(!hNw'5ReCk0s2u3w/w'5ReFd>Za&!*UaA=<wkgsRnSJv^!%Refifw3vyRgOKu_B'!,<]gkiiu:w&Rh<=C@a^<B57@2F{[<B5@aW:=3away9A5aW=<B=C@a^<B57@2F{Ie-#`(^^^bCara.b8aza6!/bZ,!adTbnTbOb+aFaS!aAT9@Wf~2Wli3Dtl2@d,#Y&RfnRfmJwJZtN~GqyJva&!VyMg<v~Rm%iXuJu3Rm9Jv[_=]ih9wlkDRkCd1#`(@Wg>2Wls3cH#T(@<Rj*=>Ri|b~'#23s9h<~El.d'#Y&Dtxi^rzvdRl#d*#U%(o|B2s`hJwSaxRmDKv4B&!1:Rmdd5#`'Vx}to~Hq{x'f1v3(!BA5ba|bJv_&!Wfug1v]ReIdO+U/Y#&G}-8wze=Rh{g1v]ReHg/uQRf/by#)ibQwERl/cH#T(@<Rj+=>Ri{cNu+vlax-!(#a0qa9<Rii2;;bU{H;x<i=&X#Rk`<4wwi=C9H~8xAI(Y#<azRi@45wXI<B9;5bb~7dL(X#Xa(+!aL6Vy{g5QqOau:5au2@ay547EzbxOcU(UX-T#Ta#:Cbb|A?wjh/b_|SOw6ARgtihr}u7Rhy<d1#T)X1@@=I|~=ay<2@@=aybb}Sj3vLv;<d,#Y(56H}A978H}@dGpvs@uAu`vcw9*!aFa+ai%(b!aXa8.a?a[ozWey=sU2@G}Nch&U#Rf_WexKu+D#'!t:~Gr`~?r^j]uNr|~FRg*j^psurwJt|RmcKv)@&!)7Rkv~Br[@wxfO:Rl3co#U'6Rezj_q#vIuavjRltwzeyh@vr5JqD0!>aY?C9:9au@9Cb]}9cl#U*5;5<H||jbuus1ucv&Rfvg1v~d/pppzqFr^a--a~!aMat1(hFv;Wiz@@=Izoj5uuv-7Rix~Cw`fk2WlVcZ#X,k)u3vWs@u2]ktg;wEx'fBq(_2Wg/jTv|vV~EfoJv]!15x'hzqG!(P~EfU~CRl_j6v(us5x4i-#T(2WmZ?C2F|d>Kq<aj1!*jTqIsBv=Wl`~Cw`fi2WlWj`v0u*~>RlR=c>Z,k#u3vWs@u2]kr<c1Z+jTqIsBv=Wla~Cw`fm2WlXdmb3!a{(arZa`bkTa%TbQTa-a9+c'!aM!/[yL=Bqug.w'RifhFvyDRj.g>vgwyk^9]k^Jv3_@WfbAARkhJw2_[x|JvB_wkoIRoKwkoJRoLd'(Y#<]gm=<9<H|yd'%_X#skDtb3awwqkgNulRkgdB#^',9:p'hJwSaxRmEBwVb8@4=H|qLu+w50&!)@3qs~?pU>Awwn;;Rn=c:Z'ARn<=<qwKvC@!/&~BqqJv6!&]eVb^z^xRge'/a%+^`#Sge}6<4Rn3=]n0Pw2>Rn8Jw0!&>Rn:>Rn6cY#a7+!a&=<wkaNw~h3z_c5Z{=wjh#=]nLKv^D!&)Vyz=bW|swYb<WetcG#T(2wxa@qVx@gD#Y&b^|V5JwG&!5bb|pg/w&RgD@x=kHs=uAvn!a%%/'+RmSRh694Ro`g-vaRmRhHv-]mlxCcS#`&ba~.5cD#Ta)P~=d,#Y(56H{>978H{Dd_#{2^Y%_+qbbb{6g3sERhsbU{?dfa.,`a(Xa<!aiX#(55RiG54RiHcI#T'WiU3RiVNvdwtfcRlKNvdd,#Y&RlHRlExQgf.1*^T'X#Sgf}6Wn4=]hfPrk>Rn7Jw0!&>Rn5>Rn9Lunw?&a2!,5<oq@@wqfdRlJj5Q~=d,#Y(~ARfcOuN]fdDKw;ay(}i!547E}j?cI#T(@5bV}iCbV}hdv(^^Tb?a40,b##Tbo!a*bR!a<b|a/!aKai!aU[yK=]o^g:v>ReGJwPZtK<7Rh+h<~El,Pv#5ReR@awwxjCg,ulRjDJv6&!]j!z?aQeeg>w=Sh<eeJw;!&axEzOg,Qosc!#*:wkeJ]eJ>x'h-u(!%Ro.w~h.zPdNZ(X,Ya![x{;9ReY;wkgxRiF:x?ap#Y&RmUg<s2Rkod]+UY0TZ'!a&A9sw<=bczLNvuw{gqzNhJwSaxRmCKuLay!#&s_Rf-55b^{uJvZa!!c%#(55Ri654wmiu5RiuawLu,vp!+}^%b_}Y9;wkgxba}o>A9:=b^}zKuh=a''!3awRk3c*'!#aHRk6c+Z&Rk5Rk4Jv)&!awRjSawd9*`#0?C2@EzMj8u<uJ5RmbjQrquJu3x,k>uq@_+=ayb^|W~ARkEOuN]k@7dhzV^X/X&a-#zRzSb`zXcJzTT#2WkVKvDBzW!%FzY9;5bbzWjQrquJu3Jw3%!b`zU=ayb^zQd:#X(T-a!6Vyywxh}=b]{Jg=u1RiAdGp~qHtzv!w(wA+a+a;<!aJaYai'anasb(=azRmV:Cbb{MLq2vb!%')RjuRjrRjtRjqx3jnqCw3!%')Rk(Rk+Rk&Rk)Lq2vb!%')Rj{RjxRjzRjwLq2vb!%')RjsRjpRjfRjex3jcqCw3!%')Rk'Rk*RjkRjl9<CbbzfOu4ARhxLq2vb!%')RjyRjvRjhRjgx=joq*uKvb!%')+-Rk.Rk%Rj~Rk-Rk#Rj}x=jdq*uKvb!%')+-Rk,Rk!Rj|RjmRjjRjidAq&qKs@uAv8Aa.'*-a@a&0!aM@a5[y73Dsy3Ds|3Dt):wxgI2sHJwJZt.~Gqxwsf0ikrzt}Rl0Jvy_[xj~HqzKv_A|D!&WfP8axRoVcf,U#k(v]v+ueunaXRf1Ju}'!g8u#Ri=jQw!sCunLprq>!,')~<5qeGzq9F{W=c##%s5au:5aU3CBE|;d4#X(D!a&6Vygx(b;#(=]ed?C2F{N<capoq2r[a&!aPa9,'Pw;5s:@@=I|,55w_h|@@=IzcP~=x'fCqB_2Wl2>aU@@=I|1OuNBc1Z+jTqIsBv=Wlc~Cw`fl2WlZ~AcTa%!Z+jTqIsBv=Wlb~Cw`fh2WlYk+uNqJsBv=WlSg,u3dca3#UXaMYa)TaB-=cM|7T#<bI}l5@B932:aV2G{BOuNBJq:|M!5Ezt=<B=C@a^<B57@2F{v>cB{/T#=ay<bI{3Jv6!a.6BKq0ah&+!5E}HP~Ef{978BaU@@=Iza<7d#.Y#978BaU@@=IzH~AJq0!(@@=IzG978BaU@@=IzFe,aU*Y&^^^bvJb,b:bFad!a,c2Ta>aL.bo6!a#CbTa'T#Re{2Wlh2@G{yg6t~Ro_NvdRfticuRQRllJv3&!x&c|zs@Jw3!%RflwpfkRlpKuL;%(!Re<@G|C2GzdhIvuBwgjAg-u0RjAKQB%!(GzZ@G|5NuuRl7d='T+Y#Vy[g<v~Rm!==G|>JvA!)@wma=]m1ifuaw&RmnLs@vT'!|/+[y,g:v>ReTJw1!#qX=x!eC{bLu+wT&)ZtZauq_~Graci&U#F|89:r_Lupvq!.)&2RlG8RfaC=x!eF{_h?rpWlmd&'!#X|&]k::xJey#`'T|+<E|&2@H|%dE#(^,g;u.RiEg6vjRiC9xCkA{O|zY#g=ucRmXKs0@!&*@G|m@awRknJuh!,3d(}gY}eJvj!%Rm):Jw3!%Rm+Rm-Ls0w(&!a(a#@b[|6cZ#X'7RkxWgAOu4ARn'dH'U#Y*Vz-Wm'CARm}d]*#a%^a*T'aK!a<9bV{PC=p*Jw4!&SgxcbB5r]idw(wBRmF7xFkt#&`(Rm/Rm8E|!JuY_9:Rl5=wrgr2:bbxd@xXfB(a*#T+!.X0X1Ta/a'T&RlDRfL>RlyARl9b[z[>RfZ:RlL:RfRwlg/ARl;9;RlxKv,A/!%7s69<74=BA5ba{-8Bde#`a<XaKYa1,a'P~=wxfB2bZ}}?C972@@=I}r8@55B9;5bb}G978B2@@=aybb}3j3vLv;<Jw3&!>Rfk=ayb^}4~Ad1#`*@@=aybb{w2@>==<bbz]dx+UY#^UaF!a9!bB'Ya1.!ajXa#%olRhD[y=3Dt#Ov5BrHKuMB%!(Rf^Wep~HrJwkiQjKr|~FRg)Ku+D#'!t5~GrF~?rDdV)UY,Z/_7RkuG{<~BrBg,rlsO:235B@bX}|d?a1!#`(6Vyn5@d##Y+jTv|vV~EfIj]uNpn~FRfH7Lq2vb1!a9-978BaU@@=Iz9978BbU}#~AJq0!(@@=Iz8978BaU@@=Iz7~AJQ|}!978BbU}!JvkaK!AdUa21-U#`a+(g/vsRn~Ou!5RPj:rmu9WhOjXuvvNr}:RhAj^v(pyw8unRn[kPr}p|u7vwv]RiSBd;pppzq@qHQa?(b.!a.a`@.|xa(hFv;Wiyj5uuv-7Riw~Cw`fg2WlU978BbU|wOuNBJqG!(P~EfD~CRlQcZ#X,k)u3vWs@u2]ksg;wEx'f@q1_2Wg.j]uNpn~FRfqJv]!15x'h{qG!(@@=IzK~CRl^j6v(us5x4i,#T(2WmY?C2F{1>Kq<aj1!*jTqIsBv=Wld~Cw`fj2Wl[j`v0u*~>RlT=c>Z,k#u3vWs@u2]kq<c1Z+jTqIsBv=Wle~Cw`fn2Wl]dn1#c(a(b^a2!b/bAT(bj!aDa7bu,a_a{c0!2T0g:v>ReD2@G{42@G{5~DpM~<5rc=Bx6i>{RT#RnI@zCx]y]z:2Jv[!zr5Awyk]9]k]dD(Y+X#6Vz.g=wKtgwhaCwgmTWj2Lu,w%_+/[y-B;b^xeg3u3Rj-2@bX{*KrJ<!+'@Wg(g?QRlC@Jv`!%b[zIwsfII}8JQ_@w|kW|=Jv(%!AqcOuNBJvEzh!bYzjLs@wP#(0!oy@>RkdJwMZtc3Dtd@BcG#T'9bWxg2@2Fznd*#Y+;2x'c}w<zizixNgwa#Z'U+!/!a'!a+w~g~z6wcn{Rn}wcnzRn|5Rh%=]nJg5vuRmvNvdRlvcprJu}w*az*a#!%.a.'Bot9qT]kj@Wg'ay2Gzv@Jv`!%b[zEwsfHI}1;ck#Ux`<Cbbx_Lu+w!a&0*!wko*wwo,So,}6Juqxf!E}PigQuyRm`d3(`#8>Rn%:A5B;bZ~%KvhCa!a2!x>k7#Uxb@b{#xaRk7Jw0!)>wwhlShl}6>wwhmShm}6CJvB!.x'hhvj{!!5Bwkhhbaz}x'hivjz~!5Bwkhibaz|xEhTrNu,v-vpD!a%&/)a3a.,%Ro2t[CE{)@3re9b]{%wjo09:rgc:Z&Ro6=<riifuaw&RmoKrNA!%(Ro4>Ro89;Ri`dSaL'UYzxZb)7Rka3xRhT&!,!#^1U}vbaz{>>@=be}yC@:D5bazzKu+A&!}{?ba}y>>@=be}wxBh[t`u~vJvr!%a!a()a,a0a4RoC=]o;Ju(!%RoGRhdwjh`=]oAg>w#Ro?g5vuRo=NvdRl|Ku]C.!&;RoEJvB!%RoORoMBx'h[v+_?w~h`}~5?w~hd~!xKh]oiptu-utv.vp!#%&a30a@a'a+(a/aOp(o~p!RoDJu(!%RoHRhewjha=]oBNvdRl}g>w#Ro@g5vuRo>c[#X']o<CauRoRAd-#Y':RkpauRoQKu]C.!&;RoFJvB!%RoNRoPBx'h]v+_?w~ha}t5?w~he}ue!/UbhYacXaW^Tc&a;b:a-c/#b&aja1(!cL+!bKbt!bmcRc9aIc?8[yW3Dtt94Rg`Jv}!&SiRMzBhEebShEMNuPRe>x7gL#TzuwjirRipc<Z&>on;>z=h-MSh.Mwqczx'a7vj&!>Re4@=ResJt__NuPRi*NuPRi)j]uNr|~FRfzKrJ>_+@Wfy@Wf]2WocKrJ<!+'@Wg%g/QRl@@Jv`!&awRl<wsfFIzgLu(w*!.*&ShBMwvhIRhI9;RhNx1hK'!#Sn]Mx1hK~0!#:2<H~7cNu+w7D*'1ZtW>Rn1~?rOc:Z&Rn2=<rQ<7wjh&=BSnLMc]#X(6Vz)w[b=a!U#9wzgMc3#&(RgMRitRis<x,gKt`ax!&+SioM=BSilMc3#&(RgKRinRimKurB,!&SiQMzBhDebShDM6BJQ!(P~Efx978B2@@=I}WLrJw!!,a*&@G}O@9wkibRid@@x'fKwC!&SlDMSfLMjUv~Q~EfKKv3@a+!(hFv-]mpx/hYZ(C5RiWz<o/MwkhY?So/M@x,gbvfB*&!SgEM:SoeeehFu3:Rgbda(,^TZa)X/7Sg[eb:2RgI~BrMC@wgkc:wwkcRerx3h(uUvK!&*,SnOM4Sh*MArRg;wHRh(x=h;rJvPwI!a4',a'0@Wg&=BSh/Mg>w=Rh=g3w*wwgGRgGcW(X#;Sg}M2Gzk@Jv`!&awRl=wsfGIz`dKZ*T'Y-:RhR7RhQg5u-p`j6v(us5d,#Y+~Awkia?RicOuNBwkibba}Ld6p~tyu_vbAa'a+!a/'a3aEa8a!>Sh,ebJv{!&Sh@ebSaReb9;SgwebNuPRi(NvdRl)NuPRi'hHu^<Rm^Jvv_@Wl(g;u1Si/ebKu'B&!*Sh?eb@Wl'z@aPeb95Si.ebcpputyvjB)!,&a+0a%ShAMWeK@G}C@WfJ9;RhMwvhH9w{ia}ix,hJvRA1(!zAn[MRhHx1hJ~*!#hFv(BSn[MBJQ!(@@=I~'978B2@@=I}2db.Ua<'X}+T#a0XaG2G}E;wkg|wuh!Rh!x,hZu,@)!&So0MVy)C5RiXACJvB!&5RiY5RiZg8w)cG}*T#2@bU}=KsA>(!a.3wkhZba~(x,h^u(A!&(SoCMRhb5Bz=h[eb?w~hb~6x,h_u(A!&(SoDMRhc5Bz=h]eb?w~hc~6e)aA1T#T,^^^c-bMb&blcPaP(a/!0!bA=b5c@a(!bfbrc#2afwmhARnjwchORnp2Wlf3DtsNvdRl-2@wpa<]m0bx(#:awRk2@Jw3!%RfhwpfgRlnKQB%!(G{V@G|'NuuRl6d='T+Y#VyUg<v~Rl~==G|<Jv+'!aYShC}6@B<5?ba~8@Jw3'!g2QRljhLrpWlOd+#Y'g.w'rIg>w*wgj@g-u0Rj@Lu+wT&)ZtUauq]~GrGci&U#F|39:rELrNvj!.%*RhCwunfw~nf~:9;Ri]>wtnhg;wHRnhx3hDs@v~!/+'@Wfr@9RkSNu&Rlo=@<5GzoKs0@_+@Wl+@awRkmJuh!-3d(}pY#qWJvj!%Rm(:Jw3!%Rm,Rm*de&!1U-U#`)Re;@G|.@9Ri82@wjfvRlq=@<5GzpLvOvr!).&2RlF8Rf`C=x!eE{.Jw3_g2QRlkhLrpWlPde(!#U{s,UXa*Ta'[y'g:v>ReS;x0PZ&RnlRnn~HrKJw1}f!=x!eB|2w]aP(#Xa&a*Ta.Ua2a7=]iOd'#Y&Ro&WnWg;u.RiDg6vjRiBNvdRlzhNvj]nYJuW_2Wm3x)kFze{9d])!a.!,Y01!#&aC!a3RndC=ox~BrC@2b^{pg,rlse7x'ksuq!%Rm.E{xidw(wBRmGx9o+)X#wwo-So-}69:Rl4@xSf@a#XZ'X)X,Ta(/ARl8b[xc>RfY:RlI:RfQwlg.ARl:9;Rlwdn'#^XafaQa1X1TaHTa)@b[{zcZ#X'7RkwWg@Ou4ARn&x)kG#{,g7u/RkGdH'U#Y*Vz'Wm&CARm|bx#(A]gUbUzJj9Q~=d,#Y(56H}l978H{U7d,0#U*2>ABb_xZ978BbU{e~AJQ{g!978BbU{hxMh?ad{oUYZ.x1h?{l!#:2<H{mx3n[t{vl!,&a%3Ro(z=iS}6ARnr=Bwsn^wvn`Rnbd`*T}B0!#^X'BG{c9b]{a>>@=be}F?JvS!&BG{d7BG}(Bde#`a1X,Ya@!a'P~=wxf@2bZ}I56B2@@=aybb}08@55B9;5bb}<j3vLv;<Jw3&!>Rfg=ayb^}&OuNBKuLA!)a!P~=x#fD{f2@>==<bbzl?C972@@=Ix^d6rSu,v7w*C(0a)a6#B+a%!sQ[y?3Dt%3[xn~<5rLOu!5p@Ku+D#'!t7~GrP~?rNKvlaya7'!h+v-5qMg=t|cd,U#5AAaa5Abb{S@52B5@a[@52B5Gx[iXueu;d<#`a(!/549C;ag>23ExY5@Dah89b^~689Jv)!~2b[~1Lv'w(%*!a#bX|aPrmawRe]keu7uhv-q6rxu,q`xTo]/a5aU!bNaDXbi!b-!ao!b<bwA!#5@B932:aV2G|:d-)Y#hJrL>RhG<7@C5<H|_=Cau:5aj5@B932:bJ|ng>vIbs)#?C2F|9jPv0w.vISh-MKvUaz(.!9ABbb|[5;5<H|Eg>unwfh;9:4E|YjQsBt|vjx'hYq3!(?C2F|J:2<BaY?C2F|GOu!5x,g|p{ah!-(?C2F|c9:4E|OjXuvvNr}:Rh&i[w*t|cd+U#jJvsu)vsSn~Mkfrmu9p}u7vwv]So!McW#Xa!ax5@A5aY:5;5<H|>kJv~vYrquJu3x4ib#T)2@SmZM?C2F|Bj:rmu9@xPhI(a*a#U#`a3-5Abb|L~@:RhK9:4E|0@52B5G|#C::aY?C2F|-:2<BaY?C2F|.5Jvk!a)javYrquJu3x4ia#T)2@SmYM?C2F|HAxPhH(!a#U#`a*-5Abb|4~@:RhJ9:4E|R@52B5G|F:2<BaY?C2F|Sc^#Xa2j=Qq5CJvB!-g<v{z;hhM?C2F|Zi[vrv{z;hiM?C2F|XKsA>!a)-g<v{z;h[eb?C2F|]i[vrv{z;h]eb?C2F|^iZu.vix,hZq3ah!.(?C2F|QOu!5ShXM:2<BaY?C2F|P",
        );
      ((i = u || (u = {}))[(i.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
        (i[(i.FLAG13 = 8192)] = "FLAG13"),
        (i[(i.BRANCH_LENGTH = 8064)] = "BRANCH_LENGTH"),
        (i[(i.JUMP_TABLE = 127)] = "JUMP_TABLE"),
        (i[(i.VALUE_MASK = 8191)] = "VALUE_MASK"),
        ((a = c || (c = {}))[(a.AMP = 38)] = "AMP"),
        (a[(a.NUM = 35)] = "NUM"),
        (a[(a.SEMI = 59)] = "SEMI"),
        (a[(a.EQUALS = 61)] = "EQUALS"),
        (a[(a.ZERO = 48)] = "ZERO"),
        (a[(a.NINE = 57)] = "NINE"),
        (a[(a.LOWER_A = 97)] = "LOWER_A"),
        (a[(a.LOWER_X = 120)] = "LOWER_X");
      let N = 0;
      function z(e) {
        return (e - c.ZERO) >>> 0 <= 9;
      }
      function G(e) {
        return ((32 | e) - c.LOWER_A) >>> 0 <= 25;
      }
      ((s = l || (l = {}))[(s.EntityStart = 0)] = "EntityStart"),
        (s[(s.NumericStart = 1)] = "NumericStart"),
        (s[(s.NumericDecimal = 2)] = "NumericDecimal"),
        (s[(s.NumericHex = 3)] = "NumericHex"),
        (s[(s.NamedEntity = 4)] = "NamedEntity"),
        ((o = d || (d = {}))[(o.Legacy = 0)] = "Legacy"),
        (o[(o.Strict = 1)] = "Strict"),
        (o[(o.Attribute = 2)] = "Attribute");
      function W(e, t, n) {
        return 1 === n
          ? String.fromCharCode(e[t] & u.VALUE_MASK)
          : 2 === n
            ? String.fromCharCode(e[t + 1])
            : String.fromCharCode(e[t + 1], e[t + 2]);
      }
      function H(e) {
        return (function (e, t, n) {
          let r = e.indexOf("&");
          if (r < 0) return e;
          let i = e.length,
            a = 0,
            s = "",
            o = j[0],
            l = o & u.JUMP_TABLE,
            d = (o & u.BRANCH_LENGTH) >> 7;
          do {
            var h;
            let o,
              f,
              p = r + 1,
              _ = e.charCodeAt(p);
            if (_ === c.NUM) {
              let n = (function (e, t, n) {
                let r = t + 1,
                  i = 0,
                  a = r;
                if (r < n && (32 | e.charCodeAt(r)) === c.LOWER_X)
                  for (r += 1, a = r; r < n; ) {
                    let t = e.charCodeAt(r);
                    if (z(t)) i = 16 * i + (t - c.ZERO);
                    else if (((32 | t) - c.LOWER_A) >>> 0 <= 5)
                      i = 16 * i + ((32 | t) - c.LOWER_A + 10);
                    else break;
                    r += 1;
                  }
                else
                  for (; r < n; ) {
                    let t = e.charCodeAt(r) - c.ZERO;
                    if (t >>> 0 > 9) break;
                    (i = 10 * i + t), (r += 1);
                  }
                if (r === a) return 0;
                r < n && e.charCodeAt(r) === c.SEMI && (r += 1),
                  i > 1114111 && (i = 1114112);
                let s = r - t;
                return s >= 2047 && ((N = s), (s = 2047)), (s << 21) | i;
              })(e, p, i);
              (o = (function (e) {
                let t = e >>> 21;
                return 2047 === t ? N : t;
              })(n)),
                t && o > 0 && e.charCodeAt(p + o - 1) !== c.SEMI && (o = 0),
                (f =
                  0 === o
                    ? ""
                    : (function (e) {
                        return (e - 1) >>> 0 < 127 || (e - 160) >>> 0 < 55136
                          ? String.fromCharCode(e)
                          : String.fromCodePoint(
                              0 === e ||
                                (e >= 55296 && e <= 57343) ||
                                e > 1114111
                                ? 65533
                                : (e >= 128 && e <= 159 && B[e - 128]) || e,
                            );
                      })(2097151 & n));
            } else if (G(_)) {
              let n;
              (o = 0), (f = "");
              let r = _ - l;
              if (r >>> 0 < d) {
                let e = j[1 + r];
                n = 0 === e ? -1 : (d + e) & 65535;
              } else n = -1;
              let a = 0,
                s = 0,
                h = n < 0 ? 0 : j[n],
                m = p + 1;
              e: for (; m < i; ) {
                for (
                  ;
                  (h & (u.VALUE_LENGTH | u.FLAG13)) == 0 &&
                  (h & u.JUMP_TABLE) != 0;

                ) {
                  let t = h & u.JUMP_TABLE,
                    r = (h & u.BRANCH_LENGTH) >> 7;
                  if (0 === r) {
                    if (e.charCodeAt(m) !== t) break e;
                    n += 1;
                  } else {
                    let i = e.charCodeAt(m) - t;
                    if (i >>> 0 >= r) break e;
                    let a = j[n + 1 + i];
                    if (0 === a) break e;
                    n = (n + r + a) & 65535;
                  }
                  if (((h = j[n]), (m += 1) >= i)) break e;
                }
                if ((h & (u.VALUE_LENGTH | u.FLAG13)) === u.FLAG13) {
                  let t = (h & u.BRANCH_LENGTH) >> 7;
                  if (e.charCodeAt(m) !== (h & u.JUMP_TABLE)) break;
                  m += 1;
                  let r = t - 1,
                    i = n + 1,
                    a = 0;
                  for (; a + 1 < r; a += 2) {
                    let t = j[i];
                    if (
                      e.charCodeAt(m) !== (255 & t) ||
                      ((m += 1), e.charCodeAt(m) !== ((t >> 8) & 255))
                    )
                      break e;
                    (m += 1), (i += 1);
                  }
                  if (a < r) {
                    if (e.charCodeAt(m) !== (255 & j[i])) break;
                    m += 1;
                  }
                  (n += 1 + (t >> 1)), (h = j[n]);
                  continue;
                }
                let r = h >>> 14,
                  l = e.charCodeAt(m);
                if (0 !== r) {
                  if (l === c.SEMI) {
                    (o = m - p + 1),
                      (f =
                        1 === r
                          ? String.fromCharCode(h & u.VALUE_MASK)
                          : W(j, n, r));
                    break;
                  }
                  if (
                    (t ||
                      (h & u.FLAG13) != 0 ||
                      ((o = m - p), (a = n), (s = r)),
                    1 === r)
                  )
                    break;
                }
                let d = (function (e, t, n, r) {
                  let i = (t & u.BRANCH_LENGTH) >> 7,
                    a = t & u.JUMP_TABLE;
                  if (a) {
                    if (0 === i) return r === a ? n : -1;
                    let t = r - a;
                    if (t >>> 0 >= i) return -1;
                    let s = e[n + t];
                    return 0 === s ? -1 : (n + i + s - 1) & 65535;
                  }
                  if (0 === i) return -1;
                  let s = (i + 1) >> 1,
                    o = n + s + i;
                  for (let t = 0; t < i; t++) {
                    let i = (e[n + (t >> 1)] >> ((1 & t) << 3)) & 255;
                    if (i === r) return (o + e[n + s + t]) & 65535;
                    if (i > r) break;
                  }
                  return -1;
                })(j, h, n + (r || 1), l);
                if (d < 0) break;
                (h = j[(n = d)]), (m += 1);
              }
              if ("" === f) {
                let e = h >>> 14;
                0 === e ||
                  t ||
                  (h & u.FLAG13) != 0 ||
                  ((o = m - p), (a = n), (s = e)),
                  o > 0 && (f = W(j, a, s));
              }
            } else (o = 0), (f = "");
            0 === o ||
            (n &&
              _ !== c.NUM &&
              e.charCodeAt(p + o - 1) !== c.SEMI &&
              p + o < i &&
              ((h = e.charCodeAt(p + o)) === c.EQUALS || G(h) || z(h)))
              ? (r = p)
              : (a < r && (s += e.slice(a, r)), (s += f), (r = a = p + o)),
              e.charCodeAt(r) !== c.AMP && (r = e.indexOf("&", r));
          } while (r >= 0);
          return s + e.slice(a);
        })(e, !0, !1);
      }
      var q = class {
          src_Any = P.source;
          src_Cc = S.source;
          src_Z = M.source;
          src_P = I.source;
          src_ZPCc = [this.src_Z, this.src_P, this.src_Cc].join("|");
          src_ZCc = [this.src_Z, this.src_Cc].join("|");
          cache = {};
          opts = { maxLength: 1e4, urlAuth: !1, schema_names: [] };
          constructor(e = {}) {
            this.opts = { ...this.opts, ...e };
          }
          set(e = {}) {
            return (
              (this.opts = { ...this.opts, ...e }), (this.cache = {}), this
            );
          }
          escapeRE(e) {
            return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
          }
          nestedPairRE(e, t, n = 4) {
            let r = this.escapeRE(e),
              i = this.escapeRE(t),
              a = `(?:(?!${this.src_ZCc}|${r}|${i}).)`,
              s = `${r}${a}{0,1000}${i}`;
            for (let e = 2; e <= n; e++) s = `${r}(?:${a}|${s}){0,1000}${i}`;
            return s;
          }
          get_text_separators() {
            return (this.cache.text_separators ??= /[><\uff5c]/);
          }
          get_pseudo_letter() {
            return (this.cache.src_pseudo_letter ??= RegExp(
              `(?:(?!${this.get_text_separators().source}|${this.src_ZPCc})${this.src_Any})`,
            ));
          }
          get_ipv4_addr() {
            return (this.cache.src_ip4 ??= RegExp(
              "(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])[.]){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])",
            ));
          }
          get_ipv6_addr() {
            let e = "[0-9A-Fa-f]{1,4}",
              t = `(?:(?:${e}:${e})|${this.get_ipv4_addr().source})`;
            return (this.cache.src_ip6_addr ??= RegExp(
              `(?:(?:${e}:){6}${t}|::(?:${e}:){5}${t}|(?:${e})?::(?:${e}:){4}${t}|(?:(?:${e}:){0,1}${e})?::(?:${e}:){3}${t}|(?:(?:${e}:){0,2}${e})?::(?:${e}:){2}${t}|(?:(?:${e}:){0,3}${e})?::${e}:${t}|(?:(?:${e}:){0,4}${e})?::${t}|(?:(?:${e}:){0,5}${e})?::${e}|(?:(?:${e}:){0,6}${e})?::)`,
            ));
          }
          get_ipv6_url_host() {
            return (this.cache.src_ip6_host ??= RegExp(
              `\\[${this.get_ipv6_addr().source}\\]`,
            ));
          }
          get_ipv6_mail_host() {
            return (this.cache.src_ipv6_mail_host ??= RegExp(
              `\\[IPv6:${this.get_ipv6_addr().source}\\]`,
            ));
          }
          get_auth() {
            return (this.cache.src_auth ??= RegExp(
              `(?:(?:(?!${this.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,
            ));
          }
          get_port() {
            return (this.cache.src_port ??= RegExp(
              "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",
            ));
          }
          get_host_terminator() {
            return (this.cache.src_host_terminator ??= RegExp(
              `(?=$|${this.get_text_separators().source}|${this.src_ZPCc})(?!${this.opts["---"] ? "-(?!--)|" : "-|"}_|:\\d|\\.-|\\.(?!$|${this.src_ZPCc}))`,
            ));
          }
          get_path_terminator() {
            return (this.cache.src_path_terminator ??= RegExp(
              `${this.src_ZPCc}|${this.get_text_separators().source}`,
            ));
          }
          get_path() {
            return (this.cache.src_path ??= RegExp(
              `(?:[/?#](?:${this.nestedPairRE("[", "]")}|${this.nestedPairRE("(", ")")}|${this.nestedPairRE("{", "}")}|\\"(?:(?!${this.src_ZCc}|["]).){1,100}\\"|\\'(?:(?!${this.src_ZCc}|[']).){1,100}\\'|\\'(?=${this.get_pseudo_letter().source}|[-])|\\.{2,20}[:]?[a-zA-Z0-9%/&]|\\.(?!${this.src_ZCc}|[.]|$)|` +
                (this.opts["---"]
                  ? "\\-(?!--(?:[^-]|$))(?:-{0,19})|"
                  : "\\-{1,20}|") +
                `,(?!${this.src_ZCc}|$)|;(?!${this.src_ZCc}|$)|\\!{1,20}(?!${this.src_ZCc}|[!]|$)|\\?(?!${this.src_ZCc}|[?]|$)|` +
                this.get_path_extra().source +
                `[\\\\/:%@#&=_~*]|(?!${this.get_path_terminator().source}).){1,${this.opts.maxLength}}|\\/)?`,
            ));
          }
          get_mail_name() {
            return (this.cache.src_mail_name ??= RegExp(
              "[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9](?:[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9]|[.](?=[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9])){0,63}",
            ));
          }
          get_xn() {
            return (this.cache.src_xn ??= RegExp("xn--[a-z0-9\\-]{1,59}"));
          }
          get_tld() {
            if (this.cache.tld) return this.cache.tld;
            let e = [...new Set(this.opts.tlds || [])]
              .sort()
              .reverse()
              .join("|");
            return (
              (this.cache.tld = RegExp(
                `${e || "$#none#$"}|${this.get_xn().source}`,
              )),
              this.cache.tld
            );
          }
          get_domain_root() {
            return (this.cache.src_domain_root ??= RegExp(
              "(?:" +
                this.get_xn().source +
                `|${this.get_pseudo_letter().source}{1,63})`,
            ));
          }
          get_domain() {
            return (this.cache.src_domain ??= RegExp(
              "(?:" +
                this.get_xn().source +
                `|(?:${this.get_pseudo_letter().source})|(?:${this.get_pseudo_letter().source}(?:-|${this.get_pseudo_letter().source}){0,61}${this.get_pseudo_letter().source}))`,
            ));
          }
          get_url_host_port() {
            return (this.cache.url_host_port ??= RegExp(
              "(?:" +
                this.get_ipv6_url_host().source +
                `|(?:(?:(?:${this.get_domain().source})\\.){0,10}${this.get_domain().source}))` +
                this.get_port().source +
                this.get_host_terminator().source,
            ));
          }
          get_fuzzy_url_host_port() {
            return (this.cache.fuzzy_url_host_port ??= RegExp(
              "(?:" +
                (this.opts.fuzzyIP ? this.get_ipv4_addr().source + "|" : "") +
                `(?:(?:(?:${this.get_domain().source})\\.){1,10}(?:${this.get_tld().source})))` +
                this.get_host_terminator().source,
            ));
          }
          get_mail_host() {
            return (this.cache.src_mail_host ??= RegExp(
              "(?:" +
                this.get_ipv6_mail_host().source +
                `|(?:(?:(?:${this.get_domain().source})\\.){0,4}${this.get_domain().source}))` +
                this.get_host_terminator().source,
            ));
          }
          get_fuzzy_mail_host() {
            return (this.cache.src_fuzzy_mail_host ??= RegExp(
              "(?:" +
                this.get_ipv6_mail_host().source +
                `|(?:(?:(?:${this.get_domain().source})[.]){1,4}${this.get_domain_root().source}))` +
                this.get_host_terminator().source,
            ));
          }
          get_path_extra() {
            return (this.cache.src_path_extra ??= RegExp(""));
          }
          get_fuzzy_mail_host_search() {
            return (this.cache.mail_fuzzy_host_search ??= RegExp(
              `@${this.get_fuzzy_mail_host().source}`,
              "ig",
            ));
          }
          get_fuzzy_link_search() {
            return (this.cache.link_fuzzy_search ??= RegExp(
              `(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${this.src_ZPCc}))(?:(?![$+<=>^\`|\uff5c])${this.get_fuzzy_url_host_port().source}${this.get_path().source})`,
              "ig",
            ));
          }
          get_http_validator() {
            return (this.cache.http_validator ??= RegExp(
              "\\/\\/" +
                (this.opts.urlAuth ? this.get_auth().source : "") +
                this.get_url_host_port().source +
                this.get_path().source,
              "iy",
            ));
          }
          get_relative_proto_validator() {
            return (this.cache.relative_proto_validator ??= RegExp(
              (this.opts.urlAuth ? this.get_auth().source : "") +
                `(?:localhost|${this.get_ipv6_url_host().source}|(?:(?:${this.get_domain().source})[.]){1,10}${this.get_domain_root().source})` +
                this.get_port().source +
                this.get_host_terminator().source +
                this.get_path().source,
              "iy",
            ));
          }
          get_mail_name_validator() {
            return (this.cache.mail_name_validator ??= RegExp(
              `(?:^|${this.get_text_separators().source}|"|\\(|${this.src_ZCc})(${this.get_mail_name().source})$`,
            ));
          }
          get_mailto_validator() {
            return (this.cache.mailto_validator ??= RegExp(
              `${this.get_mail_name().source}@${this.get_mail_host().source}`,
              "iy",
            ));
          }
          get_schema_names() {
            return (this.cache.schema_names ??= new RegExp(
              (this.opts.schema_names || [])
                .map((e) => this.escapeRE(e))
                .join("|"),
            ));
          }
          get_schema_search() {
            return (this.cache.schema_search ??= RegExp(
              `(^|(?!_)(?:[><\uff5c]|${this.src_ZPCc}))(${this.get_schema_names().source})`,
              "ig",
            ));
          }
          get_schema_at_start() {
            return (this.cache.schema_at_start ??= RegExp(
              `^${this.get_schema_search().source}`,
              "i",
            ));
          }
        },
        J = {
          validate: (e, t, n) => {
            let r = n.re.get_http_validator();
            r.lastIndex = t;
            let i = r.exec(e);
            return i ? i[0].length : 0;
          },
          normalize: (e, t) => t.normalize(e),
        },
        K = {
          "http:": J,
          "https:": J,
          "ftp:": J,
          "//": {
            validate: function (e, t, n) {
              let r = n.re.get_relative_proto_validator();
              r.lastIndex = t;
              let i = r.exec(e);
              return i
                ? (t >= 3 && ":" === e[t - 3]) || (t >= 3 && "/" === e[t - 3])
                  ? 0
                  : i[0].length
                : 0;
            },
            normalize: (e, t) => t.normalize(e),
          },
          "mailto:": {
            validate: function (e, t, n) {
              let r = n.re.get_mailto_validator();
              r.lastIndex = t;
              let i = r.exec(e);
              return i ? i[0].length : 0;
            },
            normalize: (e, t) => t.normalize(e),
          },
        },
        X = {
          fuzzyLink: !1,
          fuzzyEmail: !0,
          fuzzyIP: !1,
          "---": !1,
          tlds:
            ((r =
              "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split(
                "|",
              )),
            "a:cdefgilmnoqrstuwxz|b:abdefghijmnorstvwyz|c:acdfghiklmnoruvwxyz|d:ejkmoz|e:cegrstu|f:ijkmor|g:abdefghilmnpqrstuwy|h:kmnrtu|i:delmnoqrst|j:emop|k:eghimnprwyz|l:abcikrstuvy|m:acdeghklmnopqrstuvwxyz|n:acefgilopruz|o:m|p:aefghklmnrstwy|q:a|r:eosuw|s:abcdeghijklmnortuvxyz|t:cdfghjklmnortvwz|u:agksyz|v:aceginu|w:fs|y:et|z:amw"
              .split("|")
              .forEach((e) => {
                let t = e.indexOf(":"),
                  n = e.slice(0, t);
                for (let i of e.slice(t + 1)) r.push(n + i);
              }),
            r),
          urlAuth: !1,
          maxLength: 1e4,
        },
        Z = class {
          schema;
          index;
          lastIndex;
          raw;
          text;
          url;
          constructor(e, t, n, r) {
            const i = e.slice(n, r);
            (this.schema = t.toLowerCase()),
              (this.index = n),
              (this.lastIndex = r),
              (this.raw = i),
              (this.text = i),
              (this.url = i);
          }
        },
        Y = class {
          __opts__;
          __schemas__;
          re;
          constructor(e = {}) {
            const { rebuilder: t, ...n } = e;
            (this.__opts__ = { ...X, ...n }),
              (this.__schemas__ = { ...K }),
              (this.re = t || new q()),
              this.re.set({
                ...this.__opts__,
                schema_names: Object.keys(this.__schemas__),
              });
          }
          add(e, t = null) {
            if (t) {
              let n = { normalize: (e, t) => t.normalize(e), ...t };
              this.__schemas__[e] = n;
            } else delete this.__schemas__[e];
            return (
              this.re.set({
                ...this.__opts__,
                schema_names: Object.keys(this.__schemas__),
              }),
              this
            );
          }
          set(e = {}) {
            return (
              (this.__opts__ = { ...this.__opts__, ...e }),
              this.re.set({
                ...this.__opts__,
                schema_names: Object.keys(this.__schemas__),
              }),
              this
            );
          }
          test(e) {
            let t, n;
            if (!e.length) return !1;
            for (
              (n = this.re.get_schema_search()).lastIndex = 0;
              null !== (t = n.exec(e));

            )
              if (this.testSchemaAt(e, t[2], n.lastIndex)) return !0;
            if (
              this.__opts__.fuzzyLink &&
              this.__schemas__["http:"] &&
              (((n = this.re.get_fuzzy_link_search()).lastIndex = 0),
              null !== n.exec(e))
            )
              return !0;
            if (
              this.__opts__.fuzzyEmail &&
              this.__schemas__["mailto:"] &&
              e.indexOf("@") >= 0
            ) {
              let n = this.re.get_fuzzy_mail_host_search(),
                r = this.re.get_mail_name_validator();
              for (n.lastIndex = 0; null !== (t = n.exec(e)); ) {
                let n = e.slice(Math.max(0, t.index - 65), t.index);
                if (r.test(n)) return !0;
              }
            }
            return !1;
          }
          testSchemaAt(e, t, n) {
            return this.__schemas__[t.toLowerCase()]
              ? this.__schemas__[t.toLowerCase()].validate(
                  e.slice(0, n + this.__opts__.maxLength),
                  n,
                  this,
                )
              : 0;
          }
          match(e) {
            let t,
              n,
              r,
              i,
              a,
              s,
              o = [],
              u = this.re.get_schema_search(),
              c = !1,
              l = !1,
              d = !1,
              h = 0;
            if (!e.length) return null;
            for (
              u.lastIndex = 0,
                this.__opts__.fuzzyLink &&
                  this.__schemas__["http:"] &&
                  ((t = this.re.get_fuzzy_link_search()).lastIndex = 0),
                this.__opts__.fuzzyEmail &&
                  this.__schemas__["mailto:"] &&
                  (((n = this.re.get_fuzzy_mail_host_search()).lastIndex = 0),
                  (r = this.re.get_mail_name_validator()));
              ;

            ) {
              let f,
                p = Math.max(h - 1, 0);
              if (n && r && !d && (!a || a.index < h))
                for (n.lastIndex < p && (n.lastIndex = p); ; ) {
                  let t = n.exec(e);
                  if (!t) {
                    (d = !0), (a = void 0);
                    break;
                  }
                  let i = r.exec(e.slice(Math.max(0, t.index - 65), t.index));
                  if (i) {
                    if (
                      (a = {
                        schema: "mailto:",
                        index: t.index - i[1].length,
                        lastIndex: t.index + t[0].length,
                      }).index >= h
                    )
                      break;
                    n.lastIndex < p && (n.lastIndex = p);
                  }
                }
              if (t && !l && (!i || i.index < h))
                for (t.lastIndex < p && (t.lastIndex = p); ; ) {
                  let n = t.exec(e);
                  if (!n) {
                    (l = !0), (i = void 0);
                    break;
                  }
                  if (
                    (i = {
                      schema: "",
                      index: n.index + n[1].length,
                      lastIndex: n.index + n[0].length,
                    }).index >= h
                  )
                    break;
                  t.lastIndex < p && (t.lastIndex = p);
                }
              let _ = a;
              if (
                ((!_ ||
                  (i &&
                    (i.index < _.index ||
                      (i.index === _.index && i.lastIndex > _.lastIndex)))) &&
                  (_ = i),
                !c)
              )
                for (;;) {
                  if (!s) {
                    u.lastIndex < p && (u.lastIndex = p);
                    let t = u.exec(e);
                    if (!t) {
                      c = !0;
                      break;
                    }
                    s = {
                      schema: t[2],
                      index: t.index + t[1].length,
                      lastIndex: t.index + t[0].length,
                    };
                  }
                  if (s.index < h) {
                    s = void 0;
                    continue;
                  }
                  if (_ && s.index > _.index) break;
                  let t = s;
                  s = void 0;
                  let n = this.testSchemaAt(e, t.schema, t.lastIndex);
                  if (n) {
                    f = {
                      schema: t.schema,
                      index: t.index,
                      lastIndex: t.lastIndex + n,
                    };
                    break;
                  }
                }
              let m = f;
              if (
                ((!m ||
                  (a &&
                    (a.index < m.index ||
                      (a.index === m.index && a.lastIndex > m.lastIndex)))) &&
                  (m = a),
                (!m ||
                  (i &&
                    (i.index < m.index ||
                      (i.index === m.index && i.lastIndex > m.lastIndex)))) &&
                  (m = i),
                !m)
              )
                break;
              m === a ? (a = void 0) : m === i && (i = void 0);
              let g = new Z(e, m.schema, m.index, m.lastIndex);
              g.schema
                ? this.__schemas__[g.schema].normalize(g, this)
                : this.normalize(g),
                o.push(g),
                (h = m.lastIndex);
            }
            return o.length ? o : null;
          }
          matchAtStart(e) {
            if (!e.length) return null;
            let t = this.re.get_schema_at_start().exec(e);
            if (!t) return null;
            let n = this.testSchemaAt(e, t[2], t[0].length);
            if (!n) return null;
            let r = new Z(
              e,
              t[2],
              t.index + t[1].length,
              t.index + t[0].length + n,
            );
            return this.__schemas__[r.schema].normalize(r, this), r;
          }
          tlds(e, t = !1) {
            return (
              (e = Array.isArray(e) ? e : [e]),
              t
                ? (this.__opts__.tlds = this.__opts__.tlds.concat(e))
                : (this.__opts__.tlds = e),
              this.re.set({
                ...this.__opts__,
                schema_names: Object.keys(this.__schemas__),
              }),
              this
            );
          }
          normalize(e) {
            e.schema || (e.url = `http://${e.url}`),
              "mailto:" !== e.schema ||
                /^mailto:/i.test(e.url) ||
                (e.url = `mailto:${e.url}`);
          }
        };
      let $ = /^xn--/,
        Q = /[^\0-\x7F]/,
        ee = /[\x2E\u3002\uFF0E\uFF61]/g,
        et = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input",
        },
        en = Math.floor,
        er = String.fromCharCode;
      function ei(e) {
        throw RangeError(et[e]);
      }
      function ea(e, t) {
        let n = e.split("@"),
          r = "";
        return (
          n.length > 1 && ((r = n[0] + "@"), (e = n[1])),
          r +
            (function (e, t) {
              let n = [],
                r = e.length;
              for (; r--; ) n[r] = t(e[r]);
              return n;
            })((e = e.replace(ee, ".")).split("."), t).join(".")
        );
      }
      let es = function (e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        },
        eo = function (e, t, n) {
          let r = 0;
          for (e = n ? en(e / 700) : e >> 1, e += en(e / t); e > 455; r += 36)
            e = en(e / 35);
          return en(r + (36 * e) / (e + 38));
        },
        eu = function (e) {
          let t = [],
            n = e.length,
            r = 0,
            i = 128,
            a = 72,
            s = e.lastIndexOf("-");
          s < 0 && (s = 0);
          for (let n = 0; n < s; ++n)
            e.charCodeAt(n) >= 128 && ei("not-basic"), t.push(e.charCodeAt(n));
          for (let u = s > 0 ? s + 1 : 0; u < n; ) {
            let s = r;
            for (let t = 1, i = 36; ; i += 36) {
              var o;
              u >= n && ei("invalid-input");
              let s =
                (o = e.charCodeAt(u++)) >= 48 && o < 58
                  ? 26 + (o - 48)
                  : o >= 65 && o < 91
                    ? o - 65
                    : o >= 97 && o < 123
                      ? o - 97
                      : 36;
              s >= 36 && ei("invalid-input"),
                s > en((0x7fffffff - r) / t) && ei("overflow"),
                (r += s * t);
              let c = i <= a ? 1 : i >= a + 26 ? 26 : i - a;
              if (s < c) break;
              let l = 36 - c;
              t > en(0x7fffffff / l) && ei("overflow"), (t *= l);
            }
            let c = t.length + 1;
            (a = eo(r - s, c, 0 == s)),
              en(r / c) > 0x7fffffff - i && ei("overflow"),
              (i += en(r / c)),
              (r %= c),
              t.splice(r++, 0, i);
          }
          return String.fromCodePoint(...t);
        },
        ec = function (e) {
          let t = [],
            n = (e = (function (e) {
              let t = [],
                n = 0,
                r = e.length;
              for (; n < r; ) {
                let i = e.charCodeAt(n++);
                if (i >= 55296 && i <= 56319 && n < r) {
                  let r = e.charCodeAt(n++);
                  (64512 & r) == 56320
                    ? t.push(((1023 & i) << 10) + (1023 & r) + 65536)
                    : (t.push(i), n--);
                } else t.push(i);
              }
              return t;
            })(e)).length,
            r = 128,
            i = 0,
            a = 72;
          for (let n of e) n < 128 && t.push(er(n));
          let s = t.length,
            o = s;
          for (s && t.push("-"); o < n; ) {
            let n = 0x7fffffff;
            for (let t of e) t >= r && t < n && (n = t);
            let u = o + 1;
            for (let c of (n - r > en((0x7fffffff - i) / u) && ei("overflow"),
            (i += (n - r) * u),
            (r = n),
            e))
              if ((c < r && ++i > 0x7fffffff && ei("overflow"), c === r)) {
                let e = i;
                for (let n = 36; ; n += 36) {
                  let r = n <= a ? 1 : n >= a + 26 ? 26 : n - a;
                  if (e < r) break;
                  let i = e - r,
                    s = 36 - r;
                  t.push(er(es(r + (i % s), 0))), (e = en(i / s));
                }
                t.push(er(es(e, 0))), (a = eo(i, u, o === s)), (i = 0), ++o;
              }
            ++i, ++r;
          }
          return t.join("");
        };
      var el = Object.defineProperty,
        ed = (e, t) => {
          let n = {};
          for (var r in e) el(n, r, { get: e[r], enumerable: !0 });
          return t || el(n, Symbol.toStringTag, { value: "Module" }), n;
        },
        eh = ed({
          arrayReplaceAt: () => ep,
          asciiTrim: () => eO,
          callable: () => ef,
          escapeHtml: () => eE,
          escapeRE: () => eV,
          fromCodePoint: () => em,
          isMdAsciiPunct: () => eS,
          isPunctChar: () => eF,
          isPunctCharCode: () => eP,
          isSpace: () => eC,
          isValidEntityCode: () => e_,
          isWhiteSpace: () => eD,
          lib: () => eM,
          normalizeReference: () => eL,
          unescapeAll: () => ew,
          unescapeMd: () => ey,
        });
      function ef(e) {
        let t = function (...n) {
          return Reflect.construct(
            e,
            n,
            new.target && new.target !== t ? new.target : e,
          );
        };
        return (
          Object.defineProperty(t, "name", { value: e.name }),
          Object.setPrototypeOf(t, e),
          (t.prototype = e.prototype),
          t
        );
      }
      function ep(e, t, n) {
        return [].concat(e.slice(0, t), n, e.slice(t + 1));
      }
      function e_(e) {
        return (
          (!(e >= 55296) || !(e <= 57343)) &&
          (!(e >= 64976) || !(e <= 65007)) &&
          (65535 & e) != 65535 &&
          (65535 & e) != 65534 &&
          (!(e >= 0) || !(e <= 8)) &&
          11 !== e &&
          (!(e >= 14) || !(e <= 31)) &&
          (!(e >= 127) || !(e <= 159)) &&
          !(e > 1114111) &&
          !0
        );
      }
      function em(e) {
        return e > 65535
          ? String.fromCharCode(
              55296 + ((e -= 65536) >> 10),
              56320 + (1023 & e),
            )
          : String.fromCharCode(e);
      }
      var eg = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,
        eb = RegExp(
          `${eg.source}|${/&([a-z#][a-z0-9]{1,31});/gi.source}`,
          "gi",
        ),
        ev = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
      function ey(e) {
        return 0 > e.indexOf("\\") ? e : e.replace(eg, "$1");
      }
      function ew(e) {
        return 0 > e.indexOf("\\") && 0 > e.indexOf("&")
          ? e
          : e.replace(eb, function (e, t, n) {
              if (t) return t;
              if (35 === n.charCodeAt(0) && ev.test(n)) {
                let t =
                  "x" === n[1].toLowerCase()
                    ? parseInt(n.slice(2), 16)
                    : parseInt(n.slice(1), 10);
                return e_(t) ? em(t) : e;
              }
              let r = H(e);
              return r !== e ? r : e;
            });
      }
      var ek = /[&<>"]/,
        ex = /[&<>"]/g,
        eR = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
      function eA(e) {
        return eR[e];
      }
      function eE(e) {
        return ek.test(e) ? e.replace(ex, eA) : e;
      }
      var eT = /[.?*+^$[\]\\(){}|-]/g;
      function eV(e) {
        return e.replace(eT, "\\$&");
      }
      function eC(e) {
        switch (e) {
          case 9:
          case 32:
            return !0;
        }
        return !1;
      }
      function eD(e) {
        if (e >= 8192 && e <= 8202) return !0;
        switch (e) {
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 32:
          case 160:
          case 5760:
          case 8239:
          case 8287:
          case 12288:
            return !0;
        }
        return !1;
      }
      function eF(e) {
        return I.test(e) || O.test(e);
      }
      function eP(e) {
        return eF(em(e));
      }
      function eS(e) {
        switch (e) {
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
          case 58:
          case 59:
          case 60:
          case 61:
          case 62:
          case 63:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 124:
          case 125:
          case 126:
            return !0;
          default:
            return !1;
        }
      }
      function eL(e) {
        return (e = e.trim().replace(/\s+/g, " ")).toLowerCase().toUpperCase();
      }
      function eI(e) {
        return 32 === e || 9 === e || 10 === e || 13 === e;
      }
      function eO(e) {
        let t = 0;
        for (; t < e.length && eI(e.charCodeAt(t)); t++);
        let n = e.length - 1;
        for (; n >= t && eI(e.charCodeAt(n)); n--);
        return e.slice(t, n + 1);
      }
      var eM = { mdurl: h, ucmicro: f };
      function eB(e, t, n) {
        let r,
          i,
          a,
          s,
          o = e.posMax,
          u = e.pos;
        for (e.pos = t + 1, r = 1; e.pos < o; ) {
          if (93 === (a = e.src.charCodeAt(e.pos)) && 0 == --r) {
            i = !0;
            break;
          }
          if (((s = e.pos), e.md.inline.skipToken(e), 91 === a)) {
            if (s === e.pos - 1) r++;
            else if (n) return (e.pos = u), -1;
          }
        }
        let c = -1;
        return i && (c = e.pos), (e.pos = u), c;
      }
      function eU(e, t, n) {
        let r,
          i = t,
          a = { ok: !1, pos: 0, str: "" };
        if (60 === e.charCodeAt(i)) {
          for (i++; i < n && 10 !== (r = e.charCodeAt(i)) && 60 !== r; ) {
            if (62 === r) {
              (a.pos = i + 1), (a.str = ew(e.slice(t + 1, i))), (a.ok = !0);
              break;
            }
            if (92 === r && i + 1 < n) {
              i += 2;
              continue;
            }
            i++;
          }
          return a;
        }
        let s = 0;
        for (
          ;
          i < n && 32 !== (r = e.charCodeAt(i)) && !(r < 32) && 127 !== r;

        ) {
          if (92 === r && i + 1 < n) {
            if (32 === e.charCodeAt(i + 1)) {
              i++;
              continue;
            }
            i += 2;
            continue;
          }
          if (40 === r && ++s > 32) return a;
          if (41 === r) {
            if (0 === s) break;
            s--;
          }
          i++;
        }
        return (
          t === i ||
            0 !== s ||
            ((a.str = ew(e.slice(t, i))), (a.pos = i), (a.ok = !0)),
          a
        );
      }
      function ej(e, t, n, r) {
        let i,
          a = t,
          s = { ok: !1, can_continue: !1, pos: 0, str: "", marker: 0 };
        if (r) (s.str = r.str), (s.marker = r.marker);
        else {
          if (a >= n) return s;
          let r = e.charCodeAt(a);
          if (34 !== r && 39 !== r && 40 !== r) return s;
          t++, a++, 40 === r && (r = 41), (s.marker = r);
        }
        for (; a < n; ) {
          if ((i = e.charCodeAt(a)) === s.marker)
            return (
              (s.pos = a + 1), (s.str += ew(e.slice(t, a))), (s.ok = !0), s
            );
          if (40 === i && 41 === s.marker) return s;
          92 === i && a + 1 < n && a++, a++;
        }
        return (s.can_continue = !0), (s.str += ew(e.slice(t, a))), s;
      }
      var eN = ed({
        parseLinkDestination: () => eU,
        parseLinkLabel: () => eB,
        parseLinkTitle: () => ej,
      });
      function ez(e) {
        return (ez =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function eG(e, t, n) {
        var r;
        return (
          ((r = (function (e, t) {
            if ("object" != ez(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != ez(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(t, "string")),
          (t = "symbol" == ez(r) ? r : r + "") in e)
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var eW = class {
          constructor(e, t, n) {
            eG(this, "map", null),
              eG(this, "level", 0),
              eG(this, "children", null),
              eG(this, "content", ""),
              eG(this, "markup", ""),
              eG(this, "info", ""),
              eG(this, "block", !1),
              eG(this, "hidden", !1),
              (this.type = e),
              (this.tag = t),
              (this.attrs = null),
              (this.nesting = n),
              (this.meta = null);
          }
          attrIndex(e) {
            if (!this.attrs) return -1;
            let t = this.attrs;
            for (let n = 0, r = t.length; n < r; n++)
              if (t[n][0] === e) return n;
            return -1;
          }
          attrPush(e) {
            this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
          }
          attrSet(e, t) {
            let n = this.attrIndex(e),
              r = [e, t];
            n < 0 ? this.attrPush(r) : (this.attrs[n] = r);
          }
          attrGet(e) {
            let t = this.attrIndex(e),
              n = null;
            return t >= 0 && (n = this.attrs[t][1]), n;
          }
          attrJoin(e, t) {
            let n = this.attrIndex(e);
            n < 0
              ? this.attrPush([e, t])
              : (this.attrs[n][1] = `${this.attrs[n][1]} ${t}`);
          }
        },
        eH = class {
          constructor() {
            eG(this, "__rules__", []), eG(this, "__cache__", null);
          }
          __find__(e) {
            for (let t = 0; t < this.__rules__.length; t++)
              if (this.__rules__[t].name === e) return t;
            return -1;
          }
          __compile__() {
            let e = new Set();
            this.__rules__.forEach((t) => {
              t.enabled &&
                t.alt.forEach((t) => {
                  t && e.add(t);
                });
            }),
              (this.__cache__ = Object.create(null)),
              (this.__cache__[""] = []),
              this.__rules__.forEach((e) => {
                e.enabled && this.__cache__[""].push(e.fn);
              }),
              e.forEach((e) => {
                (this.__cache__[e] = []),
                  this.__rules__.forEach((t) => {
                    t.enabled &&
                      t.alt.indexOf(e) >= 0 &&
                      this.__cache__[e].push(t.fn);
                  });
              });
          }
          at(e, t, n = {}) {
            let r = this.__find__(e);
            if (-1 === r) throw Error(`Parser rule not found: ${e}`);
            (this.__rules__[r].fn = t),
              (this.__rules__[r].alt = n.alt || []),
              (this.__cache__ = null);
          }
          before(e, t, n, r = {}) {
            let i = this.__find__(e);
            if (-1 === i) throw Error(`Parser rule not found: ${e}`);
            this.__rules__.splice(i, 0, {
              name: t,
              enabled: !0,
              fn: n,
              alt: r.alt || [],
            }),
              (this.__cache__ = null);
          }
          after(e, t, n, r = {}) {
            let i = this.__find__(e);
            if (-1 === i) throw Error(`Parser rule not found: ${e}`);
            this.__rules__.splice(i + 1, 0, {
              name: t,
              enabled: !0,
              fn: n,
              alt: r.alt || [],
            }),
              (this.__cache__ = null);
          }
          push(e, t, n = {}) {
            this.__rules__.push({
              name: e,
              enabled: !0,
              fn: t,
              alt: n.alt || [],
            }),
              (this.__cache__ = null);
          }
          enable(e, t = !1) {
            Array.isArray(e) || (e = [e]);
            let n = [];
            return (
              e.forEach((e) => {
                let r = this.__find__(e);
                if (r < 0) {
                  if (t) return;
                  throw Error(`Rules manager: invalid rule name ${e}`);
                }
                (this.__rules__[r].enabled = !0), n.push(e);
              }),
              (this.__cache__ = null),
              n
            );
          }
          enableOnly(e, t = !1) {
            Array.isArray(e) || (e = [e]),
              this.__rules__.forEach((e) => {
                e.enabled = !1;
              }),
              this.enable(e, t);
          }
          disable(e, t = !1) {
            Array.isArray(e) || (e = [e]);
            let n = [];
            return (
              e.forEach((e) => {
                let r = this.__find__(e);
                if (r < 0) {
                  if (t) return;
                  throw Error(`Rules manager: invalid rule name ${e}`);
                }
                (this.__rules__[r].enabled = !1), n.push(e);
              }),
              (this.__cache__ = null),
              n
            );
          }
          getRules(e) {
            return (
              this.__cache__ || this.__compile__(), this.__cache__[e] || []
            );
          }
        },
        eq = {};
      (eq.code_inline = function (e, t, n, r, i) {
        let a = e[t];
        return `<code${i.renderAttrs(a)}>${eE(a.content)}</code>`;
      }),
        (eq.code_block = function (e, t, n, r, i) {
          let a = e[t];
          return `<pre${i.renderAttrs(a)}><code>${eE(e[t].content)}</code></pre>
`;
        }),
        (eq.fence = function (e, t, n, r, i) {
          let a,
            s = e[t],
            o = s.info ? ew(s.info).trim() : "",
            u = "",
            c = "";
          if (o) {
            let e = o.split(/(\s+)/g);
            (u = e[0]), (c = e.slice(2).join(""));
          }
          if (
            0 ===
            (a =
              (n.highlight && n.highlight(s.content, u, c)) ||
              eE(s.content)).indexOf("<pre")
          )
            return a + "\n";
          if (o) {
            let e = s.attrIndex("class"),
              t = s.attrs ? s.attrs.slice() : [];
            return (
              e < 0
                ? t.push(["class", `${n.langPrefix}${u}`])
                : ((t[e] = [t[e][0], t[e][1]]),
                  (t[e][1] += ` ${n.langPrefix}${u}`)),
              `<pre><code${i.renderAttrs({ attrs: t })}>${a}</code></pre>
`
            );
          }
          return `<pre><code${i.renderAttrs(s)}>${a}</code></pre>
`;
        }),
        (eq.image = function (e, t, n, r, i) {
          let a = e[t];
          return (
            (a.attrs[a.attrIndex("alt")][1] = i.renderInlineAsText(
              a.children,
              n,
              r,
            )),
            i.renderToken(e, t, n)
          );
        }),
        (eq.hardbreak = function (e, t, n) {
          return n.xhtmlOut ? "<br />\n" : "<br>\n";
        }),
        (eq.softbreak = function (e, t, n) {
          return n.breaks ? (n.xhtmlOut ? "<br />\n" : "<br>\n") : "\n";
        }),
        (eq.text = function (e, t) {
          return eE(e[t].content);
        }),
        (eq.html_block = function (e, t) {
          return e[t].content;
        }),
        (eq.html_inline = function (e, t) {
          return e[t].content;
        });
      var eJ = class {
          constructor() {
            eG(this, "rules", Object.assign({}, eq));
          }
          renderAttrs(e) {
            let t, n, r;
            if (!e.attrs) return "";
            for (t = 0, r = "", n = e.attrs.length; t < n; t++)
              r += ` ${eE(e.attrs[t][0])}="${eE(String(e.attrs[t][1]))}"`;
            return r;
          }
          renderToken(e, t, n) {
            let r = e[t],
              i = "";
            if (r.hidden) return "";
            let a = t - 1;
            for (; a >= 0 && e[a].hidden && 0 === e[a].nesting; ) a--;
            r.block &&
              -1 !== r.nesting &&
              a >= 0 &&
              e[a].hidden &&
              -1 === e[a].nesting &&
              (i += "\n"),
              (i += (-1 === r.nesting ? "</" : "<") + r.tag),
              (i += this.renderAttrs(r)),
              0 === r.nesting && n.xhtmlOut && (i += " /");
            let s = !1;
            if (r.block && ((s = !0), 1 === r.nesting)) {
              let n = t + 1;
              for (; n < e.length && e[n].hidden && 0 === e[n].nesting; ) n++;
              if (n < e.length) {
                let t = e[n];
                "inline" === t.type || t.hidden
                  ? (s = !1)
                  : -1 === t.nesting && t.tag === r.tag && (s = !1);
              }
            }
            return i + (s ? ">\n" : ">");
          }
          renderInline(e, t, n) {
            let r = "",
              i = this.rules;
            for (let a = 0, s = e.length; a < s; a++) {
              let s = e[a].type;
              void 0 !== i[s]
                ? (r += i[s](e, a, t, n, this))
                : (r += this.renderToken(e, a, t));
            }
            return r;
          }
          renderInlineAsText(e, t, n) {
            let r = "";
            for (let i = 0, a = e.length; i < a; i++)
              switch (e[i].type) {
                case "text":
                case "code_inline":
                case "html_inline":
                case "html_block":
                  r += e[i].content;
                  break;
                case "image":
                  r += this.renderInlineAsText(e[i].children, t, n);
                  break;
                case "softbreak":
                case "hardbreak":
                  r += "\n";
              }
            return r;
          }
          render(e, t, n) {
            let r = "",
              i = this.rules;
            for (let a = 0, s = e.length; a < s; a++) {
              let s = e[a].type;
              "inline" === s
                ? (r += this.renderInline(e[a].children, t, n))
                : void 0 !== i[s]
                  ? (r += i[s](e, a, t, n, this))
                  : (r += this.renderToken(e, a, t));
            }
            return r;
          }
        },
        eK = class {
          constructor(e, t, n) {
            eG(this, "tokens", []),
              eG(this, "inlineMode", !1),
              eG(this, "Token", eW),
              (this.src = e),
              (this.env = n),
              (this.md = t);
          }
        },
        eX = /\r\n?/g,
        eZ = /\0/g,
        eY = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
        e$ = /\((c|tm|r)\)/i,
        eQ = /\((c|tm|r)\)/gi,
        e0 = { c: "\xa9", r: "\xae", tm: "\u2122" };
      function e1(e, t) {
        return e0[t.toLowerCase()];
      }
      var e2 = /['"]/,
        e3 = /['"]/g;
      function e5(e, t, n, r) {
        e[t] || (e[t] = []), e[t].push({ pos: n, ch: r });
      }
      var e8 = [
          [
            "normalize",
            function (e) {
              let t;
              (t = (t = e.src.replace(eX, "\n")).replace(eZ, "\uFFFD")),
                (e.src = t);
            },
          ],
          [
            "block",
            function (e) {
              let t;
              e.inlineMode
                ? (((t = new e.Token("inline", "", 0)).content = e.src),
                  (t.map = [0, 1]),
                  (t.children = []),
                  e.tokens.push(t))
                : e.md.block.parse(e.src, e.md, e.env, e.tokens);
            },
          ],
          [
            "strip_references",
            function (e) {
              let t = e.tokens,
                n = 0;
              for (let e = 0; e < t.length; e++)
                "reference_definition" !== t[e].type &&
                  (e !== n && (t[n] = t[e]), n++);
              t.length !== n && (t.length = n);
            },
          ],
          [
            "inline",
            function (e) {
              let t = e.tokens;
              for (let n = 0, r = t.length; n < r; n++) {
                let r = t[n];
                "inline" === r.type &&
                  e.md.inline.parse(r.content, e.md, e.env, r.children);
              }
            },
          ],
          [
            "linkify",
            function (e) {
              let t = e.tokens;
              if (e.md.options.linkify)
                for (let i = 0, a = t.length; i < a; i++) {
                  if (
                    "inline" !== t[i].type ||
                    !e.md.linkify.test(t[i].content)
                  )
                    continue;
                  let a = t[i].children,
                    s = [],
                    o = 0;
                  for (let t = a.length - 1; t >= 0; t--) {
                    let i = a[t];
                    if ("link_close" === i.type) {
                      for (
                        t--;
                        a[t].level !== i.level && "link_open" !== a[t].type;

                      )
                        t--;
                      continue;
                    }
                    if ("html_inline" === i.type) {
                      var n, r;
                      (n = i.content),
                        /^<a[>\s]/i.test(n) && o > 0 && o--,
                        (r = i.content),
                        /^<\/a\s*>/i.test(r) && o++;
                    }
                    if (
                      !(o > 0) &&
                      "text" === i.type &&
                      e.md.linkify.test(i.content)
                    ) {
                      let n = i.content,
                        r = e.md.linkify.match(n),
                        o = [],
                        u = i.level,
                        c = 0;
                      r.length > 0 &&
                        0 === r[0].index &&
                        t > 0 &&
                        "text_special" === a[t - 1].type &&
                        (r = r.slice(1));
                      for (let t = 0; t < r.length; t++) {
                        let i = r[t].url,
                          a = e.md.normalizeLink(i);
                        if (!e.md.validateLink(a)) continue;
                        let s = r[t].text;
                        s = r[t].schema
                          ? "mailto:" !== r[t].schema || /^mailto:/i.test(s)
                            ? e.md.normalizeLinkText(s)
                            : e.md
                                .normalizeLinkText(`mailto:${s}`)
                                .replace(/^mailto:/, "")
                          : e.md
                              .normalizeLinkText(`http://${s}`)
                              .replace(/^http:\/\//, "");
                        let l = r[t].index;
                        if (l > c) {
                          let t = new e.Token("text", "", 0);
                          (t.content = n.slice(c, l)), (t.level = u), o.push(t);
                        }
                        let d = new e.Token("link_open", "a", 1);
                        (d.attrs = [["href", a]]),
                          (d.level = u++),
                          (d.markup = "linkify"),
                          (d.info = "auto"),
                          o.push(d);
                        let h = new e.Token("text", "", 0);
                        (h.content = s), (h.level = u), o.push(h);
                        let f = new e.Token("link_close", "a", -1);
                        (f.level = --u),
                          (f.markup = "linkify"),
                          (f.info = "auto"),
                          o.push(f),
                          (c = r[t].lastIndex);
                      }
                      if (c < n.length) {
                        let t = new e.Token("text", "", 0);
                        (t.content = n.slice(c)), (t.level = u), o.push(t);
                      }
                      s.push({ index: t, nodes: o });
                    }
                  }
                  if (s.length > 0) {
                    let e = a.length;
                    for (let t of s) e += t.nodes.length - 1;
                    let n = Array(e),
                      r = 0,
                      o = 0;
                    s.reverse();
                    for (let e = 0; e < a.length; e++) {
                      let t = s[r];
                      if ((null == t ? void 0 : t.index) === e) {
                        for (let e of t.nodes) n[o++] = e;
                        r++;
                      } else n[o++] = a[e];
                    }
                    t[i].children = n;
                  }
                }
            },
          ],
          [
            "replacements",
            function (e) {
              let t;
              if (e.md.options.typographer)
                for (t = e.tokens.length - 1; t >= 0; t--)
                  "inline" === e.tokens[t].type &&
                    (e$.test(e.tokens[t].content) &&
                      (function (e) {
                        let t = 0;
                        for (let n = e.length - 1; n >= 0; n--) {
                          let r = e[n];
                          "text" !== r.type ||
                            t ||
                            (r.content = r.content.replace(eQ, e1)),
                            "link_open" === r.type && "auto" === r.info && t--,
                            "link_close" === r.type && "auto" === r.info && t++;
                        }
                      })(e.tokens[t].children),
                    eY.test(e.tokens[t].content) &&
                      (function (e) {
                        let t = 0;
                        for (let n = e.length - 1; n >= 0; n--) {
                          let r = e[n];
                          "text" === r.type &&
                            !t &&
                            eY.test(r.content) &&
                            (r.content = r.content
                              .replace(/\+-/g, "\xb1")
                              .replace(/\.{2,}/g, "\u2026")
                              .replace(/([?!])\u2026/g, "$1..")
                              .replace(/([?!]){4,}/g, "$1$1$1")
                              .replace(/,{2,}/g, ",")
                              .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014")
                              .replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013")
                              .replace(
                                /(^|[^-\s])--(?=[^-\s]|$)/gm,
                                "$1\u2013",
                              )),
                            "link_open" === r.type && "auto" === r.info && t--,
                            "link_close" === r.type && "auto" === r.info && t++;
                        }
                      })(e.tokens[t].children));
            },
          ],
          [
            "smartquotes",
            function (e) {
              if (e.md.options.typographer)
                for (let t = e.tokens.length - 1; t >= 0; t--)
                  "inline" === e.tokens[t].type &&
                    e2.test(e.tokens[t].content) &&
                    (function (e, t) {
                      let n,
                        r = [],
                        i = {};
                      for (let a = 0; a < e.length; a++) {
                        let s = e[a],
                          o = e[a].level;
                        for (
                          n = r.length - 1;
                          n >= 0 && !(r[n].level <= o);
                          n--
                        );
                        if (((r.length = n + 1), "text" !== s.type)) continue;
                        let u = s.content,
                          c = 0,
                          l = u.length;
                        t: for (; c < l; ) {
                          e3.lastIndex = c;
                          let s = e3.exec(u);
                          if (!s) break;
                          let d = !0,
                            h = !0;
                          c = s.index + 1;
                          let f = "'" === s[0],
                            p = 32;
                          if (s.index - 1 >= 0) p = u.charCodeAt(s.index - 1);
                          else
                            for (
                              n = a - 1;
                              n >= 0 &&
                              "softbreak" !== e[n].type &&
                              "hardbreak" !== e[n].type;
                              n--
                            )
                              if (e[n].content) {
                                p = e[n].content.charCodeAt(
                                  e[n].content.length - 1,
                                );
                                break;
                              }
                          let _ = 32;
                          if (c < l) _ = u.charCodeAt(c);
                          else
                            for (
                              n = a + 1;
                              n < e.length &&
                              "softbreak" !== e[n].type &&
                              "hardbreak" !== e[n].type;
                              n++
                            )
                              if (e[n].content) {
                                _ = e[n].content.charCodeAt(0);
                                break;
                              }
                          let m = eS(p) || eP(p),
                            g = eS(_) || eP(_),
                            b = eD(p),
                            v = eD(_);
                          if (
                            (v ? (d = !1) : g && !(b || m) && (d = !1),
                            b ? (h = !1) : m && !(v || g) && (h = !1),
                            34 === _ &&
                              '"' === s[0] &&
                              p >= 48 &&
                              p <= 57 &&
                              (h = d = !1),
                            d && h && ((d = m), (h = g)),
                            !d && !h)
                          ) {
                            f && e5(i, a, s.index, "\u2019");
                            continue;
                          }
                          if (h)
                            for (n = r.length - 1; n >= 0; n--) {
                              let e = r[n];
                              if (r[n].level < o) break;
                              if (e.single === f && r[n].level === o) {
                                let o, u;
                                (e = r[n]),
                                  f
                                    ? ((o = t.md.options.quotes[2]),
                                      (u = t.md.options.quotes[3]))
                                    : ((o = t.md.options.quotes[0]),
                                      (u = t.md.options.quotes[1])),
                                  e5(i, a, s.index, u),
                                  e5(i, e.token, e.pos, o),
                                  (r.length = n);
                                continue t;
                              }
                            }
                          d
                            ? r.push({
                                token: a,
                                pos: s.index,
                                single: f,
                                level: o,
                              })
                            : h && f && e5(i, a, s.index, "\u2019");
                        }
                      }
                      Object.keys(i).forEach(function (t) {
                        let n = Number(t);
                        e[n].content = (function (e, t) {
                          let n = "",
                            r = 0;
                          t.sort((e, t) => e.pos - t.pos);
                          for (let i = 0; i < t.length; i++) {
                            let a = t[i];
                            (n += e.slice(r, a.pos) + a.ch), (r = a.pos + 1);
                          }
                          return n + e.slice(r);
                        })(e[n].content, i[t]);
                      });
                    })(e.tokens[t].children, e);
            },
          ],
          [
            "text_join",
            function (e) {
              let t,
                n,
                r = e.tokens,
                i = r.length;
              for (let e = 0; e < i; e++) {
                if ("inline" !== r[e].type) continue;
                let i = r[e].children,
                  a = i.length;
                for (t = 0; t < a; t++)
                  "text_special" === i[t].type && (i[t].type = "text"),
                    i[t].children &&
                      (function (e) {
                        let t,
                          n,
                          r = e.length;
                        for (t = 0; t < r; t++)
                          "text_special" === e[t].type && (e[t].type = "text");
                        for (t = n = 0; t < r; t++)
                          "text" === e[t].type &&
                          t + 1 < r &&
                          "text" === e[t + 1].type
                            ? (e[t + 1].content =
                                e[t].content + e[t + 1].content)
                            : (t !== n && (e[n] = e[t]), n++);
                        t !== n && (e.length = n);
                      })(i[t].children);
                for (t = n = 0; t < a; t++)
                  "text" === i[t].type && t + 1 < a && "text" === i[t + 1].type
                    ? (i[t + 1].content = i[t].content + i[t + 1].content)
                    : (t !== n && (i[n] = i[t]), n++);
                t !== n && (i.length = n);
              }
            },
          ],
        ],
        e9 = class {
          constructor() {
            eG(this, "ruler", new eH()), eG(this, "State", eK);
            for (let e = 0; e < e8.length; e++)
              this.ruler.push(e8[e][0], e8[e][1]);
          }
          process(e) {
            let t = this.ruler.getRules("");
            for (let n = 0, r = t.length; n < r; n++) t[n](e);
          }
        },
        e6 = class {
          constructor(e, t, n, r) {
            eG(this, "bMarks", []),
              eG(this, "eMarks", []),
              eG(this, "tShift", []),
              eG(this, "sCount", []),
              eG(this, "bsCount", []),
              eG(this, "blkIndent", 0),
              eG(this, "line", 0),
              eG(this, "lineMax", 0),
              eG(this, "tight", !1),
              eG(this, "listIndent", -1),
              eG(this, "parentType", "root"),
              eG(this, "level", 0),
              eG(this, "Token", eW),
              (this.src = e),
              (this.md = t),
              (this.env = n),
              (this.tokens = r);
            const i = this.src;
            for (
              let e = 0, t = 0, n = 0, r = 0, a = i.length, s = !1;
              t < a;
              t++
            ) {
              const o = i.charCodeAt(t);
              if (!s)
                if (eC(o)) {
                  n++, 9 === o ? (r += 4 - (r % 4)) : r++;
                  continue;
                } else s = !0;
              (10 === o || t === a - 1) &&
                (10 !== o && t++,
                this.bMarks.push(e),
                this.eMarks.push(t),
                this.tShift.push(n),
                this.sCount.push(r),
                this.bsCount.push(0),
                (s = !1),
                (n = 0),
                (r = 0),
                (e = t + 1));
            }
            this.bMarks.push(i.length),
              this.eMarks.push(i.length),
              this.tShift.push(0),
              this.sCount.push(0),
              this.bsCount.push(0),
              (this.lineMax = this.bMarks.length - 1);
          }
          push(e, t, n) {
            let r = new eW(e, t, n);
            return (
              (r.block = !0),
              n < 0 && this.level--,
              (r.level = this.level),
              n > 0 && this.level++,
              this.tokens.push(r),
              r
            );
          }
          isEmpty(e) {
            return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
          }
          skipEmptyLines(e) {
            for (
              let t = this.lineMax;
              e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]);
              e++
            );
            return e;
          }
          skipSpaces(e) {
            for (
              let t = this.src.length;
              e < t && eC(this.src.charCodeAt(e));
              e++
            );
            return e;
          }
          skipSpacesBack(e, t) {
            if (e <= t) return e;
            for (; e > t; ) if (!eC(this.src.charCodeAt(--e))) return e + 1;
            return e;
          }
          skipChars(e, t) {
            for (
              let n = this.src.length;
              e < n && this.src.charCodeAt(e) === t;
              e++
            );
            return e;
          }
          skipCharsBack(e, t, n) {
            if (e <= n) return e;
            for (; e > n; ) if (t !== this.src.charCodeAt(--e)) return e + 1;
            return e;
          }
          getLines(e, t, n, r) {
            if (e >= t) return "";
            let i = Array(t - e);
            for (let a = 0, s = e; s < t; s++, a++) {
              let e,
                o = 0,
                u = this.bMarks[s],
                c = u;
              for (
                e = s + 1 < t || r ? this.eMarks[s] + 1 : this.eMarks[s];
                c < e && o < n;

              ) {
                let e = this.src.charCodeAt(c);
                if (eC(e))
                  9 === e ? (o += 4 - ((o + this.bsCount[s]) % 4)) : o++;
                else if (c - u < this.tShift[s]) o++;
                else break;
                c++;
              }
              o > n
                ? (i[a] = Array(o - n + 1).join(" ") + this.src.slice(c, e))
                : (i[a] = this.src.slice(c, e));
            }
            return i.join("");
          }
        };
      function e4(e, t) {
        let n = e.bMarks[t] + e.tShift[t],
          r = e.eMarks[t];
        return e.src.slice(n, r);
      }
      function e7(e) {
        let t = [],
          n = e.length,
          r = 0,
          i = e.charCodeAt(r),
          a = !1,
          s = 0,
          o = "";
        for (; r < n; )
          124 === i &&
            (a
              ? ((o += e.substring(s, r - 1)), (s = r))
              : (t.push(o + e.substring(s, r)), (o = ""), (s = r + 1))),
            (a = 92 === i),
            r++,
            (i = e.charCodeAt(r));
        return t.push(o + e.substring(s)), t;
      }
      function te(e, t) {
        let n = e.eMarks[t],
          r = e.bMarks[t] + e.tShift[t],
          i = e.src.charCodeAt(r++);
        return (42 !== i && 45 !== i && 43 !== i) ||
          (r < n && !eC(e.src.charCodeAt(r)))
          ? -1
          : r;
      }
      function tt(e, t) {
        let n = e.bMarks[t] + e.tShift[t],
          r = e.eMarks[t],
          i = n;
        if (i + 1 >= r) return -1;
        let a = e.src.charCodeAt(i++);
        if (a < 48 || a > 57) return -1;
        for (;;) {
          if (i >= r) return -1;
          if ((a = e.src.charCodeAt(i++)) >= 48 && a <= 57) {
            if (i - n >= 10) return -1;
            continue;
          }
          if (41 === a || 46 === a) break;
          return -1;
        }
        return i < r && !eC((a = e.src.charCodeAt(i))) ? -1 : i;
      }
      var tn =
          "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
        tr = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
        ti = RegExp(
          `^(?:${tn}|${tr}|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`,
        ),
        ta = RegExp(`^(?:${tn}|${tr})`),
        ts = [
          [
            /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
            /<\/(script|pre|style|textarea)>/i,
            !0,
          ],
          [/^<!--/, /-->/, !0],
          [/^<\?/, /\?>/, !0],
          [/^<![A-Za-z]/, />/, !0],
          [/^<!\[CDATA\[/, /\]\]>/, !0],
          [
            RegExp(
              "^</?(address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?=(\\s|/?>|$))",
              "i",
            ),
            /^$/,
            !0,
          ],
          [RegExp(`${ta.source}\\s*$`), /^$/, !1],
        ],
        to = [
          [
            "table",
            function (e, t, n, r) {
              let i;
              if (t + 2 > n) return !1;
              let a = t + 1;
              if (e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4)
                return !1;
              let s = e.bMarks[a] + e.tShift[a];
              if (s >= e.eMarks[a]) return !1;
              let o = e.src.charCodeAt(s++);
              if ((124 !== o && 45 !== o && 58 !== o) || s >= e.eMarks[a])
                return !1;
              let u = e.src.charCodeAt(s++);
              if (
                (124 !== u && 45 !== u && 58 !== u && !eC(u)) ||
                (45 === o && eC(u))
              )
                return !1;
              for (; s < e.eMarks[a]; ) {
                let t = e.src.charCodeAt(s);
                if (124 !== t && 45 !== t && 58 !== t && !eC(t)) return !1;
                s++;
              }
              let c = e4(e, t + 1),
                l = c.split("|"),
                d = [];
              for (let e = 0; e < l.length; e++) {
                let t = l[e].trim();
                if (!t)
                  if (0 === e || e === l.length - 1) continue;
                  else return !1;
                if (!/^:?-+:?$/.test(t)) return !1;
                58 === t.charCodeAt(t.length - 1)
                  ? d.push(58 === t.charCodeAt(0) ? "center" : "right")
                  : 58 === t.charCodeAt(0)
                    ? d.push("left")
                    : d.push("");
              }
              if (
                -1 === (c = e4(e, t).trim()).indexOf("|") ||
                e.sCount[t] - e.blkIndent >= 4
              )
                return !1;
              (l = e7(c)).length && "" === l[0] && l.shift(),
                l.length && "" === l[l.length - 1] && l.pop();
              let h = l.length;
              if (0 === h || h !== d.length) return !1;
              if (r) return !0;
              let f = e.parentType;
              e.parentType = "table";
              let p = e.md.block.ruler.getRules("blockquote"),
                _ = e.push("table_open", "table", 1),
                m = [t, 0];
              (_.map = m),
                (e.push("thead_open", "thead", 1).map = [t, t + 1]),
                (e.push("tr_open", "tr", 1).map = [t, t + 1]);
              for (let t = 0; t < l.length; t++) {
                let n = e.push("th_open", "th", 1);
                d[t] && (n.attrs = [["style", `text-align:${d[t]}`]]);
                let r = e.push("inline", "", 0);
                (r.content = l[t].trim()),
                  (r.children = []),
                  e.push("th_close", "th", -1);
              }
              e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
              let g = 0;
              for (a = t + 2; a < n && !(e.sCount[a] < e.blkIndent); a++) {
                let r = !1;
                for (let t = 0, i = p.length; t < i; t++)
                  if (p[t](e, a, n, !0)) {
                    r = !0;
                    break;
                  }
                if (
                  r ||
                  !(c = e4(e, a).trim()) ||
                  e.sCount[a] - e.blkIndent >= 4 ||
                  ((l = e7(c)).length && "" === l[0] && l.shift(),
                  l.length && "" === l[l.length - 1] && l.pop(),
                  (g += h - l.length) > 65536)
                )
                  break;
                a === t + 2 &&
                  (e.push("tbody_open", "tbody", 1).map = i = [t + 2, 0]),
                  (e.push("tr_open", "tr", 1).map = [a, a + 1]);
                for (let t = 0; t < h; t++) {
                  let n = e.push("td_open", "td", 1);
                  d[t] && (n.attrs = [["style", `text-align:${d[t]}`]]);
                  let r = e.push("inline", "", 0);
                  (r.content = l[t] ? l[t].trim() : ""),
                    (r.children = []),
                    e.push("td_close", "td", -1);
                }
                e.push("tr_close", "tr", -1);
              }
              return (
                i && (e.push("tbody_close", "tbody", -1), (i[1] = a)),
                e.push("table_close", "table", -1),
                (m[1] = a),
                (e.parentType = f),
                (e.line = a),
                !0
              );
            },
            ["paragraph", "reference"],
          ],
          [
            "code",
            function (e, t, n) {
              if (e.sCount[t] - e.blkIndent < 4) return !1;
              let r = t + 1,
                i = r;
              for (; r < n; ) {
                if (e.isEmpty(r)) {
                  r++;
                  continue;
                }
                if (e.sCount[r] - e.blkIndent >= 4) {
                  i = ++r;
                  continue;
                }
                break;
              }
              e.line = i;
              let a = e.push("code_block", "code", 0);
              return (
                (a.content = e.getLines(t, i, 4 + e.blkIndent, !1) + "\n"),
                (a.map = [t, e.line]),
                !0
              );
            },
          ],
          [
            "fence",
            function (e, t, n, r) {
              let i = e.bMarks[t] + e.tShift[t],
                a = e.eMarks[t];
              if (e.sCount[t] - e.blkIndent >= 4 || i + 3 > a) return !1;
              let s = e.src.charCodeAt(i);
              if (126 !== s && 96 !== s) return !1;
              let o = i,
                u = (i = e.skipChars(i, s)) - o;
              if (u < 3) return !1;
              let c = e.src.slice(o, i),
                l = e.src.slice(i, a);
              if (96 === s && l.indexOf(String.fromCharCode(s)) >= 0) return !1;
              if (r) return !0;
              let d = t,
                h = !1;
              for (
                ;
                !(++d >= n) &&
                (!((i = o = e.bMarks[d] + e.tShift[d]) < (a = e.eMarks[d])) ||
                  !(e.sCount[d] < e.blkIndent));

              ) {
                if (
                  !(
                    e.src.charCodeAt(i) !== s ||
                    e.sCount[d] - e.blkIndent >= 4 ||
                    (i = e.skipChars(i, s)) - o < u
                  ) &&
                  !((i = e.skipSpaces(i)) < a)
                ) {
                  h = !0;
                  break;
                }
              }
              (u = e.sCount[t]), (e.line = d + +!!h);
              let f = e.push("fence", "code", 0);
              return (
                (f.info = l),
                (f.content = e.getLines(t + 1, d, u, !0)),
                (f.markup = c),
                (f.map = [t, e.line]),
                !0
              );
            },
            ["paragraph", "reference", "blockquote", "list"],
          ],
          [
            "blockquote",
            function (e, t, n, r) {
              let i,
                a = e.bMarks[t] + e.tShift[t],
                s = e.eMarks[t],
                o = e.lineMax;
              if (e.sCount[t] - e.blkIndent >= 4 || 62 !== e.src.charCodeAt(a))
                return !1;
              if (r) return !0;
              let u = [],
                c = [],
                l = [],
                d = [],
                h = e.md.block.ruler.getRules("blockquote"),
                f = e.parentType;
              e.parentType = "blockquote";
              let p = !1;
              for (i = t; i < n; i++) {
                let t = e.sCount[i] < e.blkIndent;
                if ((a = e.bMarks[i] + e.tShift[i]) >= (s = e.eMarks[i])) break;
                if (62 === e.src.charCodeAt(a++) && !t) {
                  let t,
                    n,
                    r = e.sCount[i] + 1;
                  32 === e.src.charCodeAt(a)
                    ? (a++, r++, (n = !1), (t = !0))
                    : 9 === e.src.charCodeAt(a)
                      ? ((t = !0),
                        (e.bsCount[i] + r) % 4 == 3
                          ? (a++, r++, (n = !1))
                          : (n = !0))
                      : (t = !1);
                  let o = r;
                  for (u.push(e.bMarks[i]), e.bMarks[i] = a; a < s; ) {
                    let t = e.src.charCodeAt(a);
                    if (eC(t))
                      9 === t
                        ? (o += 4 - ((o + e.bsCount[i] + +!!n) % 4))
                        : o++;
                    else break;
                    a++;
                  }
                  (p = a >= s),
                    c.push(e.bsCount[i]),
                    (e.bsCount[i] = e.sCount[i] + 1 + +!!t),
                    l.push(e.sCount[i]),
                    (e.sCount[i] = o - r),
                    d.push(e.tShift[i]),
                    (e.tShift[i] = a - e.bMarks[i]);
                  continue;
                }
                if (p) break;
                let r = !1;
                for (let t = 0, a = h.length; t < a; t++)
                  if (h[t](e, i, n, !0)) {
                    r = !0;
                    break;
                  }
                if (r) {
                  (e.lineMax = i),
                    0 !== e.blkIndent &&
                      (u.push(e.bMarks[i]),
                      c.push(e.bsCount[i]),
                      d.push(e.tShift[i]),
                      l.push(e.sCount[i]),
                      (e.sCount[i] -= e.blkIndent));
                  break;
                }
                u.push(e.bMarks[i]),
                  c.push(e.bsCount[i]),
                  d.push(e.tShift[i]),
                  l.push(e.sCount[i]),
                  (e.sCount[i] = -1);
              }
              let _ = e.blkIndent;
              e.blkIndent = 0;
              let m = e.push("blockquote_open", "blockquote", 1);
              m.markup = ">";
              let g = [t, 0];
              (m.map = g),
                e.md.block.tokenize(e, t, i),
                (e.push("blockquote_close", "blockquote", -1).markup = ">"),
                (e.lineMax = o),
                (e.parentType = f),
                (g[1] = e.line);
              for (let n = 0; n < d.length; n++)
                (e.bMarks[n + t] = u[n]),
                  (e.tShift[n + t] = d[n]),
                  (e.sCount[n + t] = l[n]),
                  (e.bsCount[n + t] = c[n]);
              return (e.blkIndent = _), !0;
            },
            ["paragraph", "reference", "blockquote", "list"],
          ],
          [
            "hr",
            function (e, t, n, r) {
              let i = e.eMarks[t];
              if (e.sCount[t] - e.blkIndent >= 4) return !1;
              let a = e.bMarks[t] + e.tShift[t],
                s = e.src.charCodeAt(a++);
              if (42 !== s && 45 !== s && 95 !== s) return !1;
              let o = 1;
              for (; a < i; ) {
                let t = e.src.charCodeAt(a++);
                if (t !== s && !eC(t)) return !1;
                t === s && o++;
              }
              if (o < 3) return !1;
              if (r) return !0;
              e.line = t + 1;
              let u = e.push("hr", "hr", 0);
              return (
                (u.map = [t, e.line]),
                (u.markup = Array(o + 1).join(String.fromCharCode(s))),
                !0
              );
            },
            ["paragraph", "reference", "blockquote", "list"],
          ],
          [
            "list",
            function (e, t, n, r) {
              let i,
                a,
                s,
                o,
                u,
                c,
                l,
                d = t,
                h = !0;
              if (
                e.sCount[d] - e.blkIndent >= 4 ||
                (e.listIndent >= 0 &&
                  e.sCount[d] - e.listIndent >= 4 &&
                  e.sCount[d] < e.blkIndent)
              )
                return !1;
              let f = !1;
              if (
                (r &&
                  "paragraph" === e.parentType &&
                  e.sCount[d] >= e.blkIndent &&
                  (f = !0),
                (l = tt(e, d)) >= 0)
              ) {
                if (
                  ((u = !0),
                  (s = e.bMarks[d] + e.tShift[d]),
                  (c = Number(e.src.slice(s, l - 1))),
                  f && 1 !== c)
                )
                  return !1;
              } else {
                if (!((l = te(e, d)) >= 0)) return !1;
                u = !1;
              }
              if (f && e.skipSpaces(l) >= e.eMarks[d]) return !1;
              if (r) return !0;
              let p = e.src.charCodeAt(l - 1),
                _ = e.tokens.length;
              u
                ? ((o = e.push("ordered_list_open", "ol", 1)),
                  1 !== c && (o.attrs = [["start", c]]))
                : (o = e.push("bullet_list_open", "ul", 1));
              let m = [d, 0];
              (o.map = m), (o.markup = String.fromCharCode(p));
              let g = !1,
                b = e.md.block.ruler.getRules("list"),
                v = e.parentType;
              for (e.parentType = "list"; d < n; ) {
                let t;
                (a = l), (i = e.eMarks[d]);
                let r = e.sCount[d] + l - (e.bMarks[d] + e.tShift[d]),
                  c = r;
                for (; a < i; ) {
                  let t = e.src.charCodeAt(a);
                  if (9 === t) c += 4 - ((c + e.bsCount[d]) % 4);
                  else if (32 === t) c++;
                  else break;
                  a++;
                }
                let f = a;
                (t = f >= i ? 1 : c - r) > 4 && (t = 1);
                let _ = r + t;
                (o = e.push("list_item_open", "li", 1)).markup =
                  String.fromCharCode(p);
                let m = [d, 0];
                (o.map = m), u && (o.info = e.src.slice(s, l - 1));
                let v = e.tight,
                  y = e.tShift[d],
                  w = e.sCount[d],
                  k = e.listIndent;
                if (
                  ((e.listIndent = e.blkIndent),
                  (e.blkIndent = _),
                  (e.tight = !0),
                  (e.tShift[d] = f - e.bMarks[d]),
                  (e.sCount[d] = c),
                  f >= i && e.isEmpty(d + 1)
                    ? (e.line = Math.min(e.line + 2, n))
                    : e.md.block.tokenize(e, d, n),
                  (!e.tight || g) && (h = !1),
                  (g = e.line - d > 1 && e.isEmpty(e.line - 1)),
                  (e.blkIndent = e.listIndent),
                  (e.listIndent = k),
                  (e.tShift[d] = y),
                  (e.sCount[d] = w),
                  (e.tight = v),
                  ((o = e.push("list_item_close", "li", -1)).markup =
                    String.fromCharCode(p)),
                  (d = e.line),
                  (m[1] = d),
                  d >= n ||
                    e.sCount[d] < e.blkIndent ||
                    e.sCount[d] - e.blkIndent >= 4)
                )
                  break;
                let x = !1;
                for (let t = 0, r = b.length; t < r; t++)
                  if (b[t](e, d, n, !0)) {
                    x = !0;
                    break;
                  }
                if (x) break;
                if (u) {
                  if ((l = tt(e, d)) < 0) break;
                  s = e.bMarks[d] + e.tShift[d];
                } else if ((l = te(e, d)) < 0) break;
                if (p !== e.src.charCodeAt(l - 1)) break;
              }
              return (
                ((o = u
                  ? e.push("ordered_list_close", "ol", -1)
                  : e.push("bullet_list_close", "ul", -1)).markup =
                  String.fromCharCode(p)),
                (m[1] = d),
                (e.line = d),
                (e.parentType = v),
                h &&
                  (function (e, t) {
                    let n = e.level + 2;
                    for (let r = t + 2, i = e.tokens.length - 2; r < i; r++)
                      e.tokens[r].level === n &&
                        "paragraph_open" === e.tokens[r].type &&
                        ((e.tokens[r + 2].hidden = !0),
                        (e.tokens[r].hidden = !0),
                        (r += 2));
                  })(e, _),
                !0
              );
            },
            ["paragraph", "reference", "blockquote"],
          ],
          [
            "reference",
            function (e, t, n, r) {
              let i,
                a = e.bMarks[t] + e.tShift[t],
                s = e.eMarks[t],
                o = t + 1;
              if (e.sCount[t] - e.blkIndent >= 4 || 91 !== e.src.charCodeAt(a))
                return !1;
              function u(t) {
                let n = e.lineMax;
                if (t >= n || e.isEmpty(t)) return null;
                let r = !1;
                if (
                  (e.sCount[t] - e.blkIndent > 3 && (r = !0),
                  e.sCount[t] < 0 && (r = !0),
                  !r)
                ) {
                  let r = e.md.block.ruler.getRules("reference"),
                    i = e.parentType;
                  e.parentType = "reference";
                  let a = !1;
                  for (let i = 0, s = r.length; i < s; i++)
                    if (r[i](e, t, n, !0)) {
                      a = !0;
                      break;
                    }
                  if (((e.parentType = i), a)) return null;
                }
                let i = e.bMarks[t] + e.tShift[t],
                  a = e.eMarks[t];
                return e.src.slice(i, a + 1);
              }
              let c = e.src.slice(a, s + 1);
              s = c.length;
              let l = -1;
              for (a = 1; a < s; a++) {
                let e = c.charCodeAt(a);
                if (91 === e) return !1;
                if (93 === e) {
                  l = a;
                  break;
                }
                if (10 === e) {
                  let e = u(o);
                  null !== e && ((c += e), (s = c.length), o++);
                } else if (92 === e && ++a < s && 10 === c.charCodeAt(a)) {
                  let e = u(o);
                  null !== e && ((c += e), (s = c.length), o++);
                }
              }
              if (l < 0 || 58 !== c.charCodeAt(l + 1)) return !1;
              for (a = l + 2; a < s; a++) {
                let e = c.charCodeAt(a);
                if (10 === e) {
                  let e = u(o);
                  null !== e && ((c += e), (s = c.length), o++);
                } else if (eC(e));
                else break;
              }
              let d = e.md.helpers.parseLinkDestination(c, a, s);
              if (!d.ok) return !1;
              let h = e.md.normalizeLink(d.str);
              if (!e.md.validateLink(h)) return !1;
              let f = (a = d.pos),
                p = o,
                _ = a;
              for (; a < s; a++) {
                let e = c.charCodeAt(a);
                if (10 === e) {
                  let e = u(o);
                  null !== e && ((c += e), (s = c.length), o++);
                } else if (eC(e));
                else break;
              }
              let m = e.md.helpers.parseLinkTitle(c, a, s);
              for (; m.can_continue; ) {
                let t = u(o);
                if (null === t) break;
                (c += t),
                  (a = s),
                  (s = c.length),
                  o++,
                  (m = e.md.helpers.parseLinkTitle(c, a, s, m));
              }
              for (
                a < s && _ !== a && m.ok
                  ? ((i = m.str), (a = m.pos))
                  : ((i = ""), (a = f), (o = p));
                a < s && eC(c.charCodeAt(a));

              )
                a++;
              if (a < s && 10 !== c.charCodeAt(a) && i)
                for (i = "", a = f, o = p; a < s && eC(c.charCodeAt(a)); ) a++;
              if (a < s && 10 !== c.charCodeAt(a)) return !1;
              let g = eL(c.slice(1, l));
              if (!g) return !1;
              if (r) return !0;
              void 0 === e.env.references && (e.env.references = {}),
                void 0 === e.env.references[g] &&
                  (e.env.references[g] = { title: i, href: h });
              let b = e.push("reference_definition", "", 0);
              (b.map = [t, o]), (b.hidden = !0);
              let v = Object.create(null);
              return (v.label = g), (b.meta = v), (e.line = o), !0;
            },
          ],
          [
            "html_block",
            function (e, t, n, r) {
              let i = e.bMarks[t] + e.tShift[t],
                a = e.eMarks[t];
              if (
                e.sCount[t] - e.blkIndent >= 4 ||
                !e.md.options.html ||
                60 !== e.src.charCodeAt(i)
              )
                return !1;
              let s = e.src.slice(i, a),
                o = 0;
              for (; o < ts.length && !ts[o][0].test(s); o++);
              if (o === ts.length) return !1;
              if (r) return ts[o][2];
              let u = t + 1,
                c = ts[o][1].test("");
              if (!ts[o][1].test(s)) {
                for (
                  ;
                  u < n &&
                  (!(e.sCount[u] < e.blkIndent) || (!c && e.isEmpty(u)));
                  u++
                )
                  if (
                    ((i = e.bMarks[u] + e.tShift[u]),
                    (a = e.eMarks[u]),
                    (s = e.src.slice(i, a)),
                    ts[o][1].test(s))
                  ) {
                    0 !== s.length && u++;
                    break;
                  }
              }
              e.line = u;
              let l = e.push("html_block", "", 0);
              return (
                (l.map = [t, u]),
                (l.content = e.getLines(t, u, e.blkIndent, !0)),
                !0
              );
            },
            ["paragraph", "reference", "blockquote"],
          ],
          [
            "heading",
            function (e, t, n, r) {
              let i = e.bMarks[t] + e.tShift[t],
                a = e.eMarks[t];
              if (e.sCount[t] - e.blkIndent >= 4) return !1;
              let s = e.src.charCodeAt(i);
              if (35 !== s || i >= a) return !1;
              let o = 1;
              for (s = e.src.charCodeAt(++i); 35 === s && i < a && o <= 6; )
                o++, (s = e.src.charCodeAt(++i));
              if (o > 6 || (i < a && !eC(s))) return !1;
              if (r) return !0;
              a = e.skipSpacesBack(a, i);
              let u = e.skipCharsBack(a, 35, i);
              u > i && eC(e.src.charCodeAt(u - 1)) && (a = u), (e.line = t + 1);
              let c = e.push("heading_open", `h${o}`, 1);
              (c.markup = "########".slice(0, o)), (c.map = [t, e.line]);
              let l = e.push("inline", "", 0);
              return (
                (l.content = eO(e.src.slice(i, a))),
                (l.map = [t, e.line]),
                (l.children = []),
                (e.push("heading_close", `h${o}`, -1).markup = "########".slice(
                  0,
                  o,
                )),
                !0
              );
            },
            ["paragraph", "reference", "blockquote"],
          ],
          [
            "lheading",
            function (e, t, n) {
              let r,
                i = e.md.block.ruler.getRules("paragraph");
              if (e.sCount[t] - e.blkIndent >= 4) return !1;
              let a = e.parentType;
              e.parentType = "paragraph";
              let s = 0,
                o = t + 1;
              for (; o < n && !e.isEmpty(o); o++) {
                if (e.sCount[o] - e.blkIndent > 3) continue;
                if (e.sCount[o] >= e.blkIndent) {
                  let t = e.bMarks[o] + e.tShift[o],
                    n = e.eMarks[o];
                  if (
                    t < n &&
                    (45 === (r = e.src.charCodeAt(t)) || 61 === r) &&
                    ((t = e.skipChars(t, r)), (t = e.skipSpaces(t)) >= n)
                  ) {
                    s = 61 === r ? 1 : 2;
                    break;
                  }
                }
                if (e.sCount[o] < 0) continue;
                let t = !1;
                for (let r = 0, a = i.length; r < a; r++)
                  if (i[r](e, o, n, !0)) {
                    t = !0;
                    break;
                  }
                if (t) break;
              }
              if (!s) return (e.parentType = a), !1;
              let u = eO(e.getLines(t, o, e.blkIndent, !1));
              e.line = o + 1;
              let c = e.push("heading_open", `h${s}`, 1);
              (c.markup = String.fromCharCode(r)), (c.map = [t, e.line]);
              let l = e.push("inline", "", 0);
              return (
                (l.content = u),
                (l.map = [t, e.line - 1]),
                (l.children = []),
                (e.push("heading_close", `h${s}`, -1).markup =
                  String.fromCharCode(r)),
                (e.parentType = a),
                !0
              );
            },
          ],
          [
            "paragraph",
            function (e, t, n) {
              let r = e.md.block.ruler.getRules("paragraph"),
                i = e.parentType,
                a = t + 1;
              for (e.parentType = "paragraph"; a < n && !e.isEmpty(a); a++) {
                if (e.sCount[a] - e.blkIndent > 3 || e.sCount[a] < 0) continue;
                let t = !1;
                for (let i = 0, s = r.length; i < s; i++)
                  if (r[i](e, a, n, !0)) {
                    t = !0;
                    break;
                  }
                if (t) break;
              }
              let s = eO(e.getLines(t, a, e.blkIndent, !1));
              (e.line = a),
                (e.push("paragraph_open", "p", 1).map = [t, e.line]);
              let o = e.push("inline", "", 0);
              return (
                (o.content = s),
                (o.map = [t, e.line]),
                (o.children = []),
                e.push("paragraph_close", "p", -1),
                (e.parentType = i),
                !0
              );
            },
          ],
        ],
        tu = class {
          constructor() {
            eG(this, "ruler", new eH()), eG(this, "State", e6);
            for (let e = 0; e < to.length; e++)
              this.ruler.push(to[e][0], to[e][1], {
                alt: (to[e][2] || []).slice(),
              });
          }
          tokenize(e, t, n) {
            let r = this.ruler.getRules(""),
              i = r.length,
              a = e.md.options.maxNesting,
              s = t,
              o = !1;
            for (
              ;
              s < n &&
              ((e.line = s = e.skipEmptyLines(s)),
              !(s >= n) && !(e.sCount[s] < e.blkIndent));

            ) {
              if (e.level >= a) {
                e.line = n;
                break;
              }
              let t = e.line,
                u = !1;
              for (let a = 0; a < i; a++)
                if ((u = r[a](e, s, n, !1))) {
                  if (t >= e.line)
                    throw Error("block rule didn't increment state.line");
                  break;
                }
              if (!u) throw Error("none of the block rules matched");
              (e.tight = !o),
                e.isEmpty(e.line - 1) && (o = !0),
                (s = e.line) < n && e.isEmpty(s) && ((o = !0), (e.line = ++s));
            }
          }
          parse(e, t, n, r) {
            if (!e) return;
            let i = new this.State(e, t, n, r);
            this.tokenize(i, i.line, i.lineMax);
          }
        },
        tc = class {
          constructor(e, t, n, r) {
            eG(this, "pos", 0),
              eG(this, "level", 0),
              eG(this, "pending", ""),
              eG(this, "pendingLevel", 0),
              eG(this, "cache", {}),
              eG(this, "backticks", {}),
              eG(this, "backticksScanned", !1),
              eG(this, "linkLevel", 0),
              eG(this, "delimiters", []),
              eG(this, "_prev_delimiters", []),
              eG(this, "Token", eW),
              (this.src = e),
              (this.env = n),
              (this.md = t),
              (this.tokens = r),
              (this.tokens_meta = Array(r.length)),
              (this.posMax = this.src.length);
          }
          pushPending() {
            let e = new eW("text", "", 0);
            return (
              (e.content = this.pending),
              (e.level = this.pendingLevel),
              this.tokens.push(e),
              (this.pending = ""),
              e
            );
          }
          push(e, t, n) {
            let r;
            this.pending && this.pushPending();
            let i = new eW(e, t, n);
            return (
              n < 0 &&
                (this.level--, (this.delimiters = this._prev_delimiters.pop())),
              (i.level = this.level),
              n > 0 &&
                (this.level++,
                this._prev_delimiters.push(this.delimiters),
                (this.delimiters = []),
                (r = { delimiters: this.delimiters })),
              (this.pendingLevel = this.level),
              this.tokens.push(i),
              this.tokens_meta.push(r),
              i
            );
          }
          scanDelims(e, t) {
            let n,
              r = this.posMax,
              i = this.src.charCodeAt(e);
            if (0 === e) n = 32;
            else if (1 === e)
              (63488 & (n = this.src.charCodeAt(0))) == 55296 && (n = 65533);
            else if ((64512 & (n = this.src.charCodeAt(e - 1))) == 56320) {
              let t = this.src.charCodeAt(e - 2);
              n =
                (64512 & t) == 55296
                  ? 65536 + ((t - 55296) << 10) + (n - 56320)
                  : 65533;
            } else (64512 & n) == 55296 && (n = 65533);
            let a = e;
            for (; a < r && this.src.charCodeAt(a) === i; ) a++;
            let s = a - e,
              o = a < r ? this.src.charCodeAt(a) : 32;
            if ((64512 & o) == 55296) {
              let e = this.src.charCodeAt(a + 1);
              o =
                (64512 & e) == 56320
                  ? 65536 + ((o - 55296) << 10) + (e - 56320)
                  : 65533;
            } else (64512 & o) == 56320 && (o = 65533);
            let u = eS(n) || eP(n),
              c = eS(o) || eP(o),
              l = eD(n),
              d = eD(o),
              h = !d && (!c || l || u),
              f = !l && (!u || d || c);
            return {
              can_open: h && (t || !f || u),
              can_close: f && (t || !h || c),
              length: s,
            };
          }
        },
        tl = [];
      for (let e = 0; e < 256; e++) tl.push(0);
      function td(e, t) {
        let n,
          r = [],
          i = t.length;
        for (let a = 0; a < i; a++) {
          let i = t[a];
          if (126 !== i.marker || -1 === i.end) continue;
          let s = t[i.end];
          ((n = e.tokens[i.token]).type = "s_open"),
            (n.tag = "s"),
            (n.nesting = 1),
            (n.markup = "~~"),
            (n.content = ""),
            ((n = e.tokens[s.token]).type = "s_close"),
            (n.tag = "s"),
            (n.nesting = -1),
            (n.markup = "~~"),
            (n.content = ""),
            "text" === e.tokens[s.token - 1].type &&
              "~" === e.tokens[s.token - 1].content &&
              r.push(s.token - 1);
        }
        for (; r.length; ) {
          let t = r.pop(),
            i = t + 1;
          for (; i < e.tokens.length && "s_close" === e.tokens[i].type; ) i++;
          t !== --i &&
            ((n = e.tokens[i]), (e.tokens[i] = e.tokens[t]), (e.tokens[t] = n));
        }
      }
      "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
        tl[e.charCodeAt(0)] = 1;
      });
      function th(e, t) {
        let n = t.length;
        for (let r = n - 1; r >= 0; r--) {
          let n = t[r];
          if ((95 !== n.marker && 42 !== n.marker) || -1 === n.end) continue;
          let i = t[n.end],
            a =
              r > 0 &&
              t[r - 1].end === n.end + 1 &&
              t[r - 1].marker === n.marker &&
              t[r - 1].token === n.token - 1 &&
              t[n.end + 1].token === i.token + 1,
            s = String.fromCharCode(n.marker),
            o = e.tokens[n.token];
          (o.type = a ? "strong_open" : "em_open"),
            (o.tag = a ? "strong" : "em"),
            (o.nesting = 1),
            (o.markup = a ? s + s : s),
            (o.content = "");
          let u = e.tokens[i.token];
          (u.type = a ? "strong_close" : "em_close"),
            (u.tag = a ? "strong" : "em"),
            (u.nesting = -1),
            (u.markup = a ? s + s : s),
            (u.content = ""),
            a &&
              ((e.tokens[t[r - 1].token].content = ""),
              (e.tokens[t[n.end + 1].token].content = ""),
              r--);
        }
      }
      var tf =
          /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
        tp = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/,
        t_ = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
        tm = /^&([a-z][a-z0-9]{1,31});/i;
      function tg(e) {
        let t = {},
          n = e.length;
        if (!n) return;
        let r = 0,
          i = -2,
          a = [];
        for (let s = 0; s < n; s++) {
          let n = e[s];
          if (
            (a.push(0),
            (e[r].marker !== n.marker || i !== n.token - 1) && (r = s),
            (i = n.token),
            (n.length = n.length || 0),
            !n.close)
          )
            continue;
          t.hasOwnProperty(n.marker) ||
            (t[n.marker] = [-1, -1, -1, -1, -1, -1]);
          let o = t[n.marker][3 * !!n.open + (n.length % 3)],
            u = r - a[r] - 1,
            c = u;
          for (; u > o; u -= a[u] + 1) {
            let t = e[u];
            if (t.marker === n.marker && t.open && t.end < 0) {
              let r = !1;
              if (
                ((t.close || n.open) &&
                  (t.length + n.length) % 3 == 0 &&
                  (t.length % 3 != 0 || n.length % 3 != 0) &&
                  (r = !0),
                !r)
              ) {
                let r = u > 0 && !e[u - 1].open ? a[u - 1] + 1 : 0;
                (a[s] = s - u + r),
                  (a[u] = r),
                  (n.open = !1),
                  (t.end = s),
                  (t.close = !1),
                  (c = -1),
                  (i = -2);
                break;
              }
            }
          }
          -1 !== c && (t[n.marker][3 * !!n.open + ((n.length || 0) % 3)] = c);
        }
      }
      var tb = [
          [
            "text",
            function (e, t) {
              let n = e.pos;
              for (
                ;
                n < e.posMax &&
                !(function (e) {
                  switch (e) {
                    case 10:
                    case 33:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 42:
                    case 43:
                    case 45:
                    case 58:
                    case 60:
                    case 61:
                    case 62:
                    case 64:
                    case 91:
                    case 92:
                    case 93:
                    case 94:
                    case 95:
                    case 96:
                    case 123:
                    case 125:
                    case 126:
                      return !0;
                    default:
                      return !1;
                  }
                })(e.src.charCodeAt(n));

              )
                n++;
              return (
                n !== e.pos &&
                (t || (e.pending += e.src.slice(e.pos, n)), (e.pos = n), !0)
              );
            },
          ],
          [
            "linkify",
            function (e, t) {
              var n, r;
              if (!e.md.options.linkify || e.linkLevel > 0) return !1;
              let i = e.pos;
              if (
                i + 3 > e.posMax ||
                58 !== e.src.charCodeAt(i) ||
                47 !== e.src.charCodeAt(i + 1) ||
                47 !== e.src.charCodeAt(i + 2)
              )
                return !1;
              let a = i - Math.min(10, e.pending.length, i),
                s = i;
              for (
                ;
                s > a &&
                (((n = e.src.charCodeAt(s - 1)) >= 65 && n <= 90) ||
                  (n >= 97 && n <= 122) ||
                  (n >= 48 && n <= 57) ||
                  43 === n ||
                  45 === n ||
                  46 === n);

              )
                s--;
              if (
                s === i ||
                !(
                  ((r = e.src.charCodeAt(s)) >= 65 && r <= 90) ||
                  (r >= 97 && r <= 122)
                )
              )
                return !1;
              let o = i - s,
                u = e.md.linkify.matchAtStart(e.src.slice(s));
              if (!u) return !1;
              let c = u.url;
              if (c.length <= o) return !1;
              let l = c.length;
              for (; l > 0 && 42 === c.charCodeAt(l - 1); ) l--;
              l !== c.length && (c = c.slice(0, l));
              let d = e.md.normalizeLink(c);
              if (!e.md.validateLink(d)) return !1;
              if (!t) {
                e.pending = e.pending.slice(0, -o);
                let t = e.push("link_open", "a", 1);
                (t.attrs = [["href", d]]),
                  (t.markup = "linkify"),
                  (t.info = "auto"),
                  (e.push("text", "", 0).content = e.md.normalizeLinkText(c));
                let n = e.push("link_close", "a", -1);
                (n.markup = "linkify"), (n.info = "auto");
              }
              return (e.pos += c.length - o), !0;
            },
          ],
          [
            "newline",
            function (e, t) {
              let n = e.pos;
              if (10 !== e.src.charCodeAt(n)) return !1;
              let r = e.pending.length - 1,
                i = e.posMax;
              if (!t)
                if (r >= 0 && 32 === e.pending.charCodeAt(r))
                  if (r >= 1 && 32 === e.pending.charCodeAt(r - 1)) {
                    let t = r - 1;
                    for (; t >= 1 && 32 === e.pending.charCodeAt(t - 1); ) t--;
                    (e.pending = e.pending.slice(0, t)),
                      e.push("hardbreak", "br", 0);
                  } else
                    (e.pending = e.pending.slice(0, -1)),
                      e.push("softbreak", "br", 0);
                else e.push("softbreak", "br", 0);
              for (n++; n < i && eC(e.src.charCodeAt(n)); ) n++;
              return (e.pos = n), !0;
            },
          ],
          [
            "escape",
            function (e, t) {
              let n = e.pos,
                r = e.posMax;
              if (92 !== e.src.charCodeAt(n) || ++n >= r) return !1;
              let i = e.src.charCodeAt(n);
              if (10 === i) {
                for (
                  t || e.push("hardbreak", "br", 0), n++;
                  n < r && eC((i = e.src.charCodeAt(n)));

                )
                  n++;
                return (e.pos = n), !0;
              }
              if (32 === i) {
                if (!t) {
                  let t = e.push("text_special", "", 0);
                  (t.content = "\\"), (t.markup = "\\"), (t.info = "escape");
                }
                return (e.pos = n), !0;
              }
              let a = e.src[n];
              if (i >= 55296 && i <= 56319 && n + 1 < r) {
                let t = e.src.charCodeAt(n + 1);
                t >= 56320 && t <= 57343 && ((a += e.src[n + 1]), n++);
              }
              let s = "\\" + a;
              if (!t) {
                let t = e.push("text_special", "", 0);
                i < 256 && 0 !== tl[i] ? (t.content = a) : (t.content = s),
                  (t.markup = s),
                  (t.info = "escape");
              }
              return (e.pos = n + 1), !0;
            },
          ],
          [
            "backticks",
            function (e, t) {
              var n;
              let r = e.pos;
              if (96 !== e.src.charCodeAt(r)) return !1;
              let i = e.posMax,
                a = r + 1;
              for (; a < i && 96 === e.src.charCodeAt(a); ) a++;
              let s = e.src.slice(r, a),
                o = s.length;
              if (
                (e.backticksScanned ||
                  ((e.backticks = (function (e) {
                    let t = {},
                      n = 0;
                    for (; -1 !== (n = e.indexOf("`", n)); ) {
                      let r = n;
                      for (; 96 === e.charCodeAt(++n); );
                      t[n - r] = r;
                    }
                    return t;
                  })(e.src)),
                  (e.backticksScanned = !0)),
                (null != (n = e.backticks[o]) ? n : -1) >= a)
              ) {
                let n,
                  r = a;
                for (; -1 !== (n = e.src.indexOf("`", r)) && n < i; ) {
                  for (r = n + 1; 96 === e.src.charCodeAt(r); ) r++;
                  if (r > i) break;
                  if (r - n === o) {
                    if (!t) {
                      let t = e.push("code_inline", "code", 0);
                      t.markup = s;
                      let r = e.src.slice(a, n).replace(/\n/g, " ");
                      r.startsWith(" ") &&
                        r.endsWith(" ") &&
                        /[^ ]/.test(r) &&
                        (r = r.slice(1, -1)),
                        (t.content = r);
                    }
                    return (e.pos = r), !0;
                  }
                }
              }
              return t || (e.pending += s), (e.pos = a), !0;
            },
          ],
          [
            "strikethrough",
            function (e, t) {
              let n = e.pos,
                r = e.src.charCodeAt(n);
              if (t || 126 !== r) return !1;
              let i = e.scanDelims(e.pos, !0),
                a = i.length,
                s = String.fromCharCode(r);
              if (a < 2) return !1;
              a % 2 && ((e.push("text", "", 0).content = s), a--);
              for (let t = 0; t < a; t += 2)
                (e.push("text", "", 0).content = s + s),
                  e.delimiters.push({
                    marker: r,
                    length: 0,
                    token: e.tokens.length - 1,
                    end: -1,
                    open: i.can_open,
                    close: i.can_close,
                  });
              return (e.pos += i.length), !0;
            },
          ],
          [
            "emphasis",
            function (e, t) {
              let n = e.pos,
                r = e.src.charCodeAt(n);
              if (t || (95 !== r && 42 !== r)) return !1;
              let i = e.scanDelims(e.pos, 42 === r);
              for (let t = 0; t < i.length; t++)
                (e.push("text", "", 0).content = String.fromCharCode(r)),
                  e.delimiters.push({
                    marker: r,
                    length: i.length,
                    token: e.tokens.length - 1,
                    end: -1,
                    open: i.can_open,
                    close: i.can_close,
                  });
              return (e.pos += i.length), !0;
            },
          ],
          [
            "link",
            function (e, t) {
              let n,
                r,
                i,
                a,
                s = "",
                o = "",
                u = e.pos,
                c = !0;
              if (91 !== e.src.charCodeAt(e.pos)) return !1;
              let l = e.pos,
                d = e.posMax,
                h = e.pos + 1,
                f = e.md.helpers.parseLinkLabel(e, e.pos, !0);
              if (f < 0) return !1;
              let p = f + 1;
              if (p < d && 40 === e.src.charCodeAt(p)) {
                for (
                  c = !1, p++;
                  p < d && (eC((n = e.src.charCodeAt(p))) || 10 === n);
                  p++
                );
                if (p >= d) return !1;
                if (
                  ((u = p),
                  (i = e.md.helpers.parseLinkDestination(e.src, p, e.posMax))
                    .ok)
                ) {
                  for (
                    s = e.md.normalizeLink(i.str),
                      e.md.validateLink(s) ? (p = i.pos) : (s = ""),
                      u = p;
                    p < d && (eC((n = e.src.charCodeAt(p))) || 10 === n);
                    p++
                  );
                  if (
                    ((i = e.md.helpers.parseLinkTitle(e.src, p, e.posMax)),
                    p < d && u !== p && i.ok)
                  )
                    for (
                      o = i.str, p = i.pos;
                      p < d && (eC((n = e.src.charCodeAt(p))) || 10 === n);
                      p++
                    );
                }
                (p >= d || 41 !== e.src.charCodeAt(p)) && (c = !0), p++;
              }
              if (c) {
                if (void 0 === e.env.references) return !1;
                if (
                  (p < d && 91 === e.src.charCodeAt(p)
                    ? ((u = p + 1),
                      (p = e.md.helpers.parseLinkLabel(e, p)) >= 0
                        ? (r = e.src.slice(u, p++))
                        : (p = f + 1))
                    : (p = f + 1),
                  r || (r = e.src.slice(h, f)),
                  (r = eL(r)),
                  !(a = e.env.references[r]))
                )
                  return (e.pos = l), !1;
                (s = a.href), (o = a.title);
              }
              if (!t) {
                (e.pos = h), (e.posMax = f);
                let t = e.push("link_open", "a", 1),
                  n = [["href", s]];
                if (((t.attrs = n), o && n.push(["title", o]), r)) {
                  let e = Object.create(null);
                  (e.label = r), (t.meta = e);
                }
                e.linkLevel++,
                  e.md.inline.tokenize(e),
                  e.linkLevel--,
                  e.push("link_close", "a", -1);
              }
              return (e.pos = p), (e.posMax = d), !0;
            },
          ],
          [
            "image",
            function (e, t) {
              let n,
                r,
                i,
                a,
                s,
                o,
                u,
                c,
                l = "",
                d = e.pos,
                h = e.posMax;
              if (
                33 !== e.src.charCodeAt(e.pos) ||
                91 !== e.src.charCodeAt(e.pos + 1)
              )
                return !1;
              let f = e.pos + 2,
                p = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
              if (p < 0) return !1;
              if ((a = p + 1) < h && 40 === e.src.charCodeAt(a)) {
                for (
                  a++;
                  a < h && (eC((n = e.src.charCodeAt(a))) || 10 === n);
                  a++
                );
                if (a >= h) return !1;
                for (
                  c = a,
                    (o = e.md.helpers.parseLinkDestination(e.src, a, e.posMax))
                      .ok &&
                      ((l = e.md.normalizeLink(o.str)),
                      e.md.validateLink(l) ? (a = o.pos) : (l = "")),
                    c = a;
                  a < h && (eC((n = e.src.charCodeAt(a))) || 10 === n);
                  a++
                );
                if (
                  ((o = e.md.helpers.parseLinkTitle(e.src, a, e.posMax)),
                  a < h && c !== a && o.ok)
                )
                  for (
                    u = o.str, a = o.pos;
                    a < h && (eC((n = e.src.charCodeAt(a))) || 10 === n);
                    a++
                  );
                else u = "";
                if (a >= h || 41 !== e.src.charCodeAt(a))
                  return (e.pos = d), !1;
                a++;
              } else {
                if (void 0 === e.env.references) return !1;
                if (
                  (a < h && 91 === e.src.charCodeAt(a)
                    ? ((c = a + 1),
                      (a = e.md.helpers.parseLinkLabel(e, a)) >= 0
                        ? (i = e.src.slice(c, a++))
                        : (a = p + 1))
                    : (a = p + 1),
                  i || (i = e.src.slice(f, p)),
                  (i = eL(i)),
                  !(s = e.env.references[i]))
                )
                  return (e.pos = d), !1;
                (l = s.href), (u = s.title);
              }
              if (!t) {
                r = e.src.slice(f, p);
                let t = [];
                e.md.inline.parse(r, e.md, e.env, t);
                let n = e.push("image", "img", 0),
                  a = [
                    ["src", l],
                    ["alt", ""],
                  ];
                if (
                  ((n.attrs = a),
                  (n.children = t),
                  (n.content = r),
                  u && a.push(["title", u]),
                  i)
                ) {
                  let e = Object.create(null);
                  (e.label = i), (n.meta = e);
                }
              }
              return (e.pos = a), (e.posMax = h), !0;
            },
          ],
          [
            "autolink",
            function (e, t) {
              let n = e.pos;
              if (60 !== e.src.charCodeAt(n)) return !1;
              let r = e.pos,
                i = e.posMax;
              for (;;) {
                if (++n >= i) return !1;
                let t = e.src.charCodeAt(n);
                if (60 === t) return !1;
                if (62 === t) break;
              }
              let a = e.src.slice(r + 1, n);
              if (tp.test(a)) {
                let n = e.md.normalizeLink(a);
                if (!e.md.validateLink(n)) return !1;
                if (!t) {
                  let t = e.push("link_open", "a", 1);
                  (t.attrs = [["href", n]]),
                    (t.markup = "autolink"),
                    (t.info = "auto"),
                    (e.push("text", "", 0).content = e.md.normalizeLinkText(a));
                  let r = e.push("link_close", "a", -1);
                  (r.markup = "autolink"), (r.info = "auto");
                }
                return (e.pos += a.length + 2), !0;
              }
              if (tf.test(a)) {
                let n = e.md.normalizeLink(`mailto:${a}`);
                if (!e.md.validateLink(n)) return !1;
                if (!t) {
                  let t = e.push("link_open", "a", 1);
                  (t.attrs = [["href", n]]),
                    (t.markup = "autolink"),
                    (t.info = "auto"),
                    (e.push("text", "", 0).content = e.md.normalizeLinkText(a));
                  let r = e.push("link_close", "a", -1);
                  (r.markup = "autolink"), (r.info = "auto");
                }
                return (e.pos += a.length + 2), !0;
              }
              return !1;
            },
          ],
          [
            "html_inline",
            function (e, t) {
              let n;
              if (!e.md.options.html) return !1;
              let r = e.posMax,
                i = e.pos;
              if (60 !== e.src.charCodeAt(i) || i + 2 >= r) return !1;
              let a = e.src.charCodeAt(i + 1);
              if (
                33 !== a &&
                63 !== a &&
                47 !== a &&
                (!((n = 32 | a) >= 97) || !(n <= 122))
              )
                return !1;
              let s = e.src.slice(i).match(ti);
              if (!s) return !1;
              if (!t) {
                var o, u;
                let t = e.push("html_inline", "", 0);
                (t.content = s[0]),
                  (o = t.content),
                  /^<a[>\s]/i.test(o) && e.linkLevel++,
                  (u = t.content),
                  /^<\/a\s*>/i.test(u) && e.linkLevel--;
              }
              return (e.pos += s[0].length), !0;
            },
          ],
          [
            "entity",
            function (e, t) {
              let n = e.pos,
                r = e.posMax;
              if (38 !== e.src.charCodeAt(n) || n + 1 >= r) return !1;
              if (35 === e.src.charCodeAt(n + 1)) {
                let r = e.src.slice(n).match(t_);
                if (r) {
                  if (!t) {
                    let t =
                        "x" === r[1][0].toLowerCase()
                          ? parseInt(r[1].slice(1), 16)
                          : parseInt(r[1], 10),
                      n = e.push("text_special", "", 0);
                    (n.content = e_(t) ? em(t) : em(65533)),
                      (n.markup = r[0]),
                      (n.info = "entity");
                  }
                  return (e.pos += r[0].length), !0;
                }
              } else {
                let r = e.src.slice(n).match(tm);
                if (r) {
                  let n = H(r[0]);
                  if (n !== r[0]) {
                    if (!t) {
                      let t = e.push("text_special", "", 0);
                      (t.content = n), (t.markup = r[0]), (t.info = "entity");
                    }
                    return (e.pos += r[0].length), !0;
                  }
                }
              }
              return !1;
            },
          ],
        ],
        tv = [
          [
            "balance_pairs",
            function (e) {
              let t = e.tokens_meta,
                n = e.tokens_meta.length;
              tg(e.delimiters);
              for (let e = 0; e < n; e++) {
                var r;
                let n = null == (r = t[e]) ? void 0 : r.delimiters;
                n && tg(n);
              }
            },
          ],
          [
            "strikethrough",
            function (e) {
              let t = e.tokens_meta,
                n = e.tokens_meta.length;
              td(e, e.delimiters);
              for (let i = 0; i < n; i++) {
                var r;
                let n = null == (r = t[i]) ? void 0 : r.delimiters;
                n && td(e, n);
              }
            },
          ],
          [
            "emphasis",
            function (e) {
              let t = e.tokens_meta,
                n = e.tokens_meta.length;
              th(e, e.delimiters);
              for (let i = 0; i < n; i++) {
                var r;
                let n = null == (r = t[i]) ? void 0 : r.delimiters;
                n && th(e, n);
              }
            },
          ],
          [
            "fragments_join",
            function (e) {
              let t,
                n,
                r = 0,
                i = e.tokens,
                a = e.tokens.length;
              for (t = n = 0; t < a; t++)
                i[t].nesting < 0 && r--,
                  (i[t].level = r),
                  i[t].nesting > 0 && r++,
                  "text" === i[t].type && t + 1 < a && "text" === i[t + 1].type
                    ? (i[t + 1].content = i[t].content + i[t + 1].content)
                    : (t !== n && (i[n] = i[t]), n++);
              t !== n && (i.length = n);
            },
          ],
        ],
        ty = class {
          constructor() {
            eG(this, "ruler", new eH()),
              eG(this, "ruler2", new eH()),
              eG(this, "State", tc);
            for (let e = 0; e < tb.length; e++)
              this.ruler.push(tb[e][0], tb[e][1]);
            for (let e = 0; e < tv.length; e++)
              this.ruler2.push(tv[e][0], tv[e][1]);
          }
          skipToken(e) {
            let t = e.pos,
              n = this.ruler.getRules(""),
              r = n.length,
              i = e.md.options.maxNesting,
              a = e.cache;
            if (void 0 !== a[t]) {
              e.pos = a[t];
              return;
            }
            let s = !1;
            if (e.level < i) {
              for (let i = 0; i < r; i++)
                if ((e.level++, (s = n[i](e, !0)), e.level--, s)) {
                  if (t >= e.pos)
                    throw Error("inline rule didn't increment state.pos");
                  break;
                }
            } else e.pos = e.posMax;
            !s && e.pos++, (a[t] = e.pos);
          }
          tokenize(e) {
            let t = this.ruler.getRules(""),
              n = t.length,
              r = e.posMax,
              i = e.md.options.maxNesting;
            for (; e.pos < r; ) {
              let a = e.pos,
                s = !1;
              if (e.level < i) {
                for (let r = 0; r < n; r++)
                  if ((s = t[r](e, !1))) {
                    if (a >= e.pos)
                      throw Error("inline rule didn't increment state.pos");
                    break;
                  }
              }
              if (s) {
                if (e.pos >= r) break;
                continue;
              }
              e.pending += e.src[e.pos++];
            }
            e.pending && e.pushPending();
          }
          parse(e, t, n, r) {
            let i = new this.State(e, t, n, r);
            this.tokenize(i);
            let a = this.ruler2.getRules(""),
              s = a.length;
            for (let e = 0; e < s; e++) a[e](i);
          }
        },
        tw = {
          default: {
            options: {
              html: !1,
              xhtmlOut: !1,
              breaks: !1,
              langPrefix: "language-",
              linkify: !1,
              typographer: !1,
              quotes: "\u201C\u201D\u2018\u2019",
              highlight: null,
              maxNesting: 100,
            },
            components: { core: {}, block: {}, inline: {} },
          },
          zero: {
            options: {
              html: !1,
              xhtmlOut: !1,
              breaks: !1,
              langPrefix: "language-",
              linkify: !1,
              typographer: !1,
              quotes: "\u201C\u201D\u2018\u2019",
              highlight: null,
              maxNesting: 20,
            },
            components: {
              core: {
                rules: [
                  "normalize",
                  "block",
                  "strip_references",
                  "inline",
                  "text_join",
                ],
              },
              block: { rules: ["paragraph"] },
              inline: {
                rules: ["text"],
                rules2: ["balance_pairs", "fragments_join"],
              },
            },
          },
          commonmark: {
            options: {
              html: !0,
              xhtmlOut: !0,
              breaks: !1,
              langPrefix: "language-",
              linkify: !1,
              typographer: !1,
              quotes: "\u201C\u201D\u2018\u2019",
              highlight: null,
              maxNesting: 20,
            },
            components: {
              core: {
                rules: [
                  "normalize",
                  "block",
                  "strip_references",
                  "inline",
                  "text_join",
                ],
              },
              block: {
                rules: [
                  "blockquote",
                  "code",
                  "fence",
                  "heading",
                  "hr",
                  "html_block",
                  "lheading",
                  "list",
                  "reference",
                  "paragraph",
                ],
              },
              inline: {
                rules: [
                  "autolink",
                  "backticks",
                  "emphasis",
                  "entity",
                  "escape",
                  "html_inline",
                  "image",
                  "link",
                  "newline",
                  "text",
                ],
                rules2: ["balance_pairs", "emphasis", "fragments_join"],
              },
            },
          },
        },
        tk = /^(vbscript|javascript|file|data):/,
        tx = /^data:image\/(gif|png|jpeg|webp);/,
        tR = ["http:", "https:", "mailto:"],
        tA = class {
          validateLink(e) {
            let t = e.trim().toLowerCase();
            return !tk.test(t) || tx.test(t);
          }
          normalizeLink(e) {
            let t = F(e, !0);
            if (t.hostname && (!t.protocol || tR.indexOf(t.protocol) >= 0))
              try {
                var n;
                (n = t.hostname),
                  (t.hostname = ea(n, function (e) {
                    return Q.test(e) ? "xn--" + ec(e) : e;
                  }));
              } catch (e) {}
            return (
              t.auth && (t.auth = v(t.auth)),
              t.hostname && (t.hostname = v(t.hostname)),
              t.pathname && (t.pathname = v(t.pathname)),
              t.search && (t.search = v(t.search)),
              t.hash && (t.hash = v(t.hash)),
              y(t)
            );
          }
          normalizeLinkText(e) {
            let t = F(e, !0);
            if (t.hostname && (!t.protocol || tR.indexOf(t.protocol) >= 0))
              try {
                var n;
                (n = t.hostname),
                  (t.hostname = ea(n, function (e) {
                    return $.test(e) ? eu(e.slice(4).toLowerCase()) : e;
                  }));
              } catch (e) {}
            return m(y(t), m.defaultChars + "%");
          }
          constructor(...e) {
            eG(this, "inline", new ty()),
              eG(this, "block", new tu()),
              eG(this, "core", new e9()),
              eG(this, "renderer", new eJ()),
              eG(this, "linkify", new Y()),
              eG(this, "utils", eh),
              eG(this, "helpers", Object.assign({}, eN));
            const [t, n] = e;
            "string" == typeof t
              ? (this.configure(t), n && this.set(n))
              : (this.configure("default"), this.set(t || {}));
          }
          set(e) {
            return Object.assign(this.options, e), this;
          }
          configure(e) {
            let t;
            if ("string" == typeof e) {
              if (!(t = tw[e]))
                throw Error(`Wrong 'markdown-it' preset "${e}", check name`);
            } else t = e;
            if (!t) throw Error("Wrong `markdown-it` preset, can't be empty");
            t.options && (this.options = { ...t.options });
            let n = t.components;
            if (n) {
              var r;
              ["core", "block", "inline"].forEach((e) => {
                var t;
                let r = null == (t = n[e]) ? void 0 : t.rules;
                r && this[e].ruler.enableOnly(r);
              });
              let e = null == (r = n.inline) ? void 0 : r.rules2;
              e && this.inline.ruler2.enableOnly(e);
            }
            return this;
          }
          enable(e, t = !1) {
            let n = [];
            Array.isArray(e) || (e = [e]),
              ["core", "block", "inline"].forEach((t) => {
                n = n.concat(this[t].ruler.enable(e, !0));
              }),
              (n = n.concat(this.inline.ruler2.enable(e, !0)));
            let r = e.filter((e) => 0 > n.indexOf(e));
            if (r.length && !t)
              throw Error(`MarkdownIt. Failed to enable unknown rule(s): ${r}`);
            return this;
          }
          disable(e, t = !1) {
            let n = [];
            Array.isArray(e) || (e = [e]),
              ["core", "block", "inline"].forEach((t) => {
                n = n.concat(this[t].ruler.disable(e, !0));
              }),
              (n = n.concat(this.inline.ruler2.disable(e, !0)));
            let r = e.filter((e) => 0 > n.indexOf(e));
            if (r.length && !t)
              throw Error(
                `MarkdownIt. Failed to disable unknown rule(s): ${r}`,
              );
            return this;
          }
          use(e, ...t) {
            return e.apply(e, [this, ...t]), this;
          }
          parse(e, t) {
            if ("string" != typeof e)
              throw Error("Input data should be a String");
            let n = new this.core.State(e, this, t);
            return this.core.process(n), n.tokens;
          }
          render(e, t = {}) {
            return this.renderer.render(this.parse(e, t), this.options, t);
          }
          parseInline(e, t) {
            let n = new this.core.State(e, this, t);
            return (n.inlineMode = !0), this.core.process(n), n.tokens;
          }
          renderInline(e, t = {}) {
            return this.renderer.render(
              this.parseInline(e, t),
              this.options,
              t,
            );
          }
        };
      eG(tA, "Token", eW),
        eG(tA, "Ruler", eH),
        eG(tA, "Renderer", eJ),
        eG(tA, "ParserCore", e9),
        eG(tA, "StateCore", eK),
        eG(tA, "ParserBlock", tu),
        eG(tA, "StateBlock", e6),
        eG(tA, "ParserInline", ty),
        eG(tA, "StateInline", tc);
      var tE = ef(tA);
    },
  },
]);
//# sourceMappingURL=499047.9cc88936bf36528b.js.map
