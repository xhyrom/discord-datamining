(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["354100"],
  {
    838259(e, t, r) {
      "use strict";
      var i, n;
      r.d(t, { U: () => i }),
        ((n = i || (i = {})).BORDER_BOX = "border-box"),
        (n.CONTENT_BOX = "content-box"),
        (n.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
    },
    234097(e, t, r) {
      "use strict";
      r.d(t, { J: () => O });
      var i,
        n = [],
        o = "ResizeObserver loop completed with undelivered notifications.",
        s = function () {
          var e;
          "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: o }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1),
              (e.message = o)),
            window.dispatchEvent(e);
        },
        a = r(522816),
        u = r(916784),
        c = function (e) {
          if ((0, u.dK)(e)) return 1 / 0;
          for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
          return t;
        },
        d = r(623577),
        l = function () {
          var e = 1 / 0,
            t = [];
          n.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
              var i = [];
              r.activeTargets.forEach(function (t) {
                var r = new a.Z(t.target),
                  n = c(t.target);
                i.push(r),
                  (t.lastReportedSize = (0, d.P)(t.target, t.observedBox)),
                  n < e && (e = n);
              }),
                t.push(function () {
                  r.callback.call(r.observer, i, r.observer);
                }),
                r.activeTargets.splice(0, r.activeTargets.length);
            }
          });
          for (var r = 0; r < t.length; r++) (0, t[r])();
          return e;
        },
        h = function (e) {
          n.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (r) {
                r.isActive() &&
                  (c(r.target) > e
                    ? t.activeTargets.push(r)
                    : t.skippedTargets.push(r));
              });
          });
        },
        f = function () {
          var e = 0;
          for (
            h(0);
            n.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            h((e = l()));
          return (
            n.some(function (e) {
              return e.skippedTargets.length > 0;
            }) && s(),
            e > 0
          );
        },
        p = r(717205),
        m = [],
        g = function (e) {
          if (!i) {
            var t = 0,
              r = document.createTextNode("");
            new MutationObserver(function () {
              return m.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(r, { characterData: !0 }),
              (i = function () {
                r.textContent = "".concat(t ? t-- : t++);
              });
          }
          m.push(e), i();
        },
        _ = function (e) {
          g(function () {
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
        V = !1,
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
              if ((void 0 === e && (e = 250), !V)) {
                V = !0;
                var r = w(e);
                _(function () {
                  var i = !1;
                  try {
                    i = f();
                  } finally {
                    if (((V = !1), (e = r - w()), !b)) return;
                    i ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
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
        T = function (e) {
          !b && e > 0 && x.start(), (b += e) || x.stop();
        },
        k = r(838259),
        E = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || k.U.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = (0, d.P)(this.target, this.observedBox, !0);
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
        A = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        R = new WeakMap(),
        P = function (e, t) {
          for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
          return -1;
        },
        O = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var r = new A(e, t);
              R.set(e, r);
            }),
            (e.observe = function (e, t, r) {
              var i = R.get(e),
                o = 0 === i.observationTargets.length;
              0 > P(i.observationTargets, t) &&
                (o && n.push(i),
                i.observationTargets.push(new E(t, r && r.box)),
                T(1),
                x.schedule());
            }),
            (e.unobserve = function (e, t) {
              var r = R.get(e),
                i = P(r.observationTargets, t),
                o = 1 === r.observationTargets.length;
              i >= 0 &&
                (o && n.splice(n.indexOf(r), 1),
                r.observationTargets.splice(i, 1),
                T(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                r = R.get(e);
              r.observationTargets.slice().forEach(function (r) {
                return t.unobserve(e, r.target);
              }),
                r.activeTargets.splice(0, r.activeTargets.length);
            }),
            e
          );
        })();
    },
    522816(e, t, r) {
      "use strict";
      r.d(t, { Z: () => o });
      var i = r(623577),
        n = r(47361),
        o = function (e) {
          var t = (0, i.m)(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = (0, n.C)([t.borderBoxSize])),
            (this.contentBoxSize = (0, n.C)([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = (0, n.C)([
              t.devicePixelContentBoxSize,
            ]));
        };
    },
    162563(e, t, r) {
      "use strict";
      r.d(t, { a: () => n });
      var i = r(47361),
        n = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), (0, i.C)(this);
        };
    },
    623577(e, t, r) {
      "use strict";
      r.d(t, { P: () => _, m: () => g });
      var i = r(838259),
        n = r(162563),
        o = r(47361),
        s = (function () {
          function e(e, t, r, i) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = r),
              (this.height = i),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              (0, o.C)(this)
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
        a = r(916784),
        u = r(717205),
        c = new WeakMap(),
        d = /auto|scroll/,
        l = /^tb|vertical/,
        h = /msie|trident/i.test(u.S.navigator && u.S.navigator.userAgent),
        f = function (e) {
          return parseFloat(e || "0");
        },
        p = function (e, t, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            new n.a((r ? t : e) || 0, (r ? e : t) || 0)
          );
        },
        m = (0, o.C)({
          devicePixelContentBoxSize: p(),
          borderBoxSize: p(),
          contentBoxSize: p(),
          contentRect: new s(0, 0, 0, 0),
        }),
        g = function (e, t) {
          if ((void 0 === t && (t = !1), c.has(e) && !t)) return c.get(e);
          if ((0, a.dK)(e)) return c.set(e, m), m;
          var r = getComputedStyle(e),
            i = (0, a.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            n = !h && "border-box" === r.boxSizing,
            u = l.test(r.writingMode || ""),
            g = !i && d.test(r.overflowY || ""),
            _ = !i && d.test(r.overflowX || ""),
            b = i ? 0 : f(r.paddingTop),
            v = i ? 0 : f(r.paddingRight),
            y = i ? 0 : f(r.paddingBottom),
            w = i ? 0 : f(r.paddingLeft),
            V = i ? 0 : f(r.borderTopWidth),
            x = i ? 0 : f(r.borderRightWidth),
            T = i ? 0 : f(r.borderBottomWidth),
            k = i ? 0 : f(r.borderLeftWidth),
            E = w + v,
            A = b + y,
            R = k + x,
            P = V + T,
            O = _ ? e.offsetHeight - P - e.clientHeight : 0,
            I = g ? e.offsetWidth - R - e.clientWidth : 0,
            S = i ? i.width : f(r.width) - (n ? E + R : 0) - I,
            L = i ? i.height : f(r.height) - (n ? A + P : 0) - O,
            U = S + E + I + R,
            C = L + A + O + P,
            D = (0, o.C)({
              devicePixelContentBoxSize: p(
                Math.round(S * devicePixelRatio),
                Math.round(L * devicePixelRatio),
                u,
              ),
              borderBoxSize: p(U, C, u),
              contentBoxSize: p(S, L, u),
              contentRect: new s(w, b, S, L),
            });
          return c.set(e, D), D;
        },
        _ = function (e, t, r) {
          var n = g(e, r),
            o = n.borderBoxSize,
            s = n.contentBoxSize,
            a = n.devicePixelContentBoxSize;
          switch (t) {
            case i.U.DEVICE_PIXEL_CONTENT_BOX:
              return a;
            case i.U.BORDER_BOX:
              return o;
            default:
              return s;
          }
        };
    },
    916784(e, t, r) {
      "use strict";
      r.d(t, { XJ: () => i, dK: () => n, td: () => s, vq: () => o });
      var i = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        n = function (e) {
          if (i(e)) {
            var t = e.getBBox(),
              r = t.width,
              n = t.height;
            return !r && !n;
          }
          var o = e.offsetWidth,
            s = e.offsetHeight;
          return !(o || s || e.getClientRects().length);
        },
        o = function (e) {
          if (e instanceof Element) return !0;
          var t,
            r =
              null == (t = null == e ? void 0 : e.ownerDocument)
                ? void 0
                : t.defaultView;
          return !!(r && e instanceof r.Element);
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
    47361(e, t, r) {
      "use strict";
      r.d(t, { C: () => i });
      var i = function (e) {
        return Object.freeze(e);
      };
    },
    717205(e, t, r) {
      "use strict";
      r.d(t, { S: () => i });
      var i = "u" > typeof window ? window : {};
    },
    816885(e, t, r) {
      "use strict";
      function i(e, t, r, i) {
        var n = r ? r.call(i, e, t) : void 0;
        if (void 0 !== n) return !!n;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var o = Object.keys(e),
          s = Object.keys(t);
        if (o.length !== s.length) return !1;
        for (
          var a = Object.prototype.hasOwnProperty.bind(t), u = 0;
          u < o.length;
          u++
        ) {
          var c = o[u];
          if (!a(c)) return !1;
          var d = e[c],
            l = t[c];
          if (
            !1 === (n = r ? r.call(i, d, l, c) : void 0) ||
            (void 0 === n && d !== l)
          )
            return !1;
        }
        return !0;
      }
      r.d(t, { b: () => i });
    },
    830845(e, t, r) {
      "use strict";
      r.d(t, {
        AO: () => l,
        Fu: () => f,
        TM: () => E,
        sC: () => R,
        yJ: () => h,
        zR: () => y,
      });
      var i = r(1139),
        n = r(861193),
        o = r(987701),
        s = r(258635);
      function a(e) {
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
      function d(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function l(e) {
        var t = e.pathname,
          r = e.search,
          i = e.hash,
          n = t || "/";
        return (
          r && "?" !== r && (n += "?" === r.charAt(0) ? r : "?" + r),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function h(e, t, r, o) {
        var s, a, u, c, d, l;
        "string" == typeof e
          ? ((u = ""),
            (c = ""),
            -1 !== (d = (a = e || "/").indexOf("#")) &&
              ((c = a.substr(d)), (a = a.substr(0, d))),
            -1 !== (l = a.indexOf("?")) &&
              ((u = a.substr(l)), (a = a.substr(0, l))),
            ((s = {
              pathname: a,
              search: "?" === u ? "" : u,
              hash: "#" === c ? "" : c,
            }).state = t))
          : (void 0 === (s = (0, i.A)({}, e)).pathname && (s.pathname = ""),
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
          r && (s.key = r),
          o
            ? s.pathname
              ? "/" !== s.pathname.charAt(0) &&
                (s.pathname = (0, n.A)(s.pathname, o.pathname))
              : (s.pathname = o.pathname)
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
          (0, o.A)(e.state, t.state)
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
          confirmTransitionTo: function (t, r, i, n) {
            if (null != e) {
              var o = "function" == typeof e ? e(t, r) : e;
              "string" == typeof o
                ? "function" == typeof i
                  ? i(o, n)
                  : n(!0)
                : n(!1 !== o);
            } else n(!0);
          },
          appendListener: function (e) {
            var r = !0;
            function i() {
              r && e.apply(void 0, arguments);
            }
            return (
              t.push(i),
              function () {
                (r = !1),
                  (t = t.filter(function (e) {
                    return e !== i;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, r = Array(e), i = 0; i < e; i++)
              r[i] = arguments[i];
            t.forEach(function (e) {
              return e.apply(void 0, r);
            });
          },
        };
      }
      var m = !!(
        "u" > typeof window &&
        window.document &&
        window.document.createElement
      );
      function g(e, t) {
        t(window.confirm(e));
      }
      var _ = "popstate",
        b = "hashchange";
      function v() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function y(e) {
        void 0 === e && (e = {}), m || (0, s.A)(!1);
        var t,
          r = window.history,
          n =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
          o = -1 !== window.navigator.userAgent.indexOf("Trident"),
          u = e,
          f = u.forceRefresh,
          y = void 0 !== f && f,
          w = u.getUserConfirmation,
          V = void 0 === w ? g : w,
          x = u.keyLength,
          T = void 0 === x ? 6 : x,
          k = e.basename ? d(a(e.basename)) : "";
        function E(e) {
          var t = e || {},
            r = t.key,
            i = t.state,
            n = window.location,
            o = n.pathname + n.search + n.hash;
          return k && (o = c(o, k)), h(o, i, r);
        }
        function A() {
          return Math.random().toString(36).substr(2, T);
        }
        var R = p();
        function P(e) {
          (0, i.A)(N, e),
            (N.length = r.length),
            R.notifyListeners(N.location, N.action);
        }
        function O(e) {
          (void 0 !== e.state || -1 !== navigator.userAgent.indexOf("CriOS")) &&
            L(E(e.state));
        }
        function I() {
          L(E(v()));
        }
        var S = !1;
        function L(e) {
          S
            ? ((S = !1), P())
            : R.confirmTransitionTo(e, "POP", V, function (t) {
                var r, i, n, o, s;
                t
                  ? P({ action: "POP", location: e })
                  : ((r = e),
                    (i = N.location),
                    -1 === (n = C.indexOf(i.key)) && (n = 0),
                    -1 === (o = C.indexOf(r.key)) && (o = 0),
                    (s = n - o) && ((S = !0), F(s)));
              });
        }
        var U = E(v()),
          C = [U.key];
        function D(e) {
          return k + l(e);
        }
        function F(e) {
          r.go(e);
        }
        var M = 0;
        function j(e) {
          1 === (M += e) && 1 === e
            ? (window.addEventListener(_, O),
              o && window.addEventListener(b, I))
            : 0 === M &&
              (window.removeEventListener(_, O),
              o && window.removeEventListener(b, I));
        }
        var B = !1,
          N = {
            length: r.length,
            action: "POP",
            location: U,
            createHref: D,
            push: function (e, t) {
              var i = "PUSH",
                o = h(e, t, A(), N.location);
              R.confirmTransitionTo(o, i, V, function (e) {
                if (e) {
                  var t = D(o),
                    s = o.key,
                    a = o.state;
                  if (n)
                    if ((r.pushState({ key: s, state: a }, null, t), y))
                      window.location.href = t;
                    else {
                      var u = C.indexOf(N.location.key),
                        c = C.slice(0, u + 1);
                      c.push(o.key), (C = c), P({ action: i, location: o });
                    }
                  else window.location.href = t;
                }
              });
            },
            replace: function (e, t) {
              var i = "REPLACE",
                o = h(e, t, A(), N.location);
              R.confirmTransitionTo(o, i, V, function (e) {
                if (e) {
                  var t = D(o),
                    s = o.key,
                    a = o.state;
                  if (n)
                    if ((r.replaceState({ key: s, state: a }, null, t), y))
                      window.location.replace(t);
                    else {
                      var u = C.indexOf(N.location.key);
                      -1 !== u && (C[u] = o.key), P({ action: i, location: o });
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
            block: function (e) {
              void 0 === e && (e = !1);
              var t = R.setPrompt(e);
              return (
                B || (j(1), (B = !0)),
                function () {
                  return B && ((B = !1), j(-1)), t();
                }
              );
            },
            listen: function (e) {
              var t = R.appendListener(e);
              return (
                j(1),
                function () {
                  j(-1), t();
                }
              );
            },
          };
        return N;
      }
      var w = "hashchange",
        V = {
          hashbang: {
            encodePath: function (e) {
              return "!" === e.charAt(0) ? e : "!/" + u(e);
            },
            decodePath: function (e) {
              return "!" === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: u, decodePath: a },
          slash: { encodePath: a, decodePath: a },
        };
      function x(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t);
      }
      function T() {
        var e = window.location.href,
          t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1);
      }
      function k(e) {
        window.location.replace(x(window.location.href) + "#" + e);
      }
      function E(e) {
        void 0 === e && (e = {}), m || (0, s.A)(!1);
        var t = window.history;
        window.navigator.userAgent.indexOf("Firefox");
        var r = e,
          n = r.getUserConfirmation,
          o = void 0 === n ? g : n,
          u = r.hashType,
          f = e.basename ? d(a(e.basename)) : "",
          _ = V[void 0 === u ? "slash" : u],
          b = _.encodePath,
          v = _.decodePath;
        function y() {
          var e = v(T());
          return f && (e = c(e, f)), h(e);
        }
        var E = p();
        function A(e) {
          (0, i.A)(j, e),
            (j.length = t.length),
            E.notifyListeners(j.location, j.action);
        }
        var R = !1,
          P = null;
        function O() {
          var e = T(),
            t = b(e);
          if (e !== t) k(t);
          else {
            var r,
              i = y(),
              n = j.location;
            if (
              (!R &&
                n.pathname === i.pathname &&
                n.search === i.search &&
                n.hash === i.hash) ||
              P === l(i)
            )
              return;
            (P = null),
              (r = i),
              R
                ? ((R = !1), A())
                : E.confirmTransitionTo(r, "POP", o, function (e) {
                    var t, i, n, o, s;
                    e
                      ? A({ action: "POP", location: r })
                      : ((t = r),
                        (i = j.location),
                        -1 === (n = U.lastIndexOf(l(i))) && (n = 0),
                        -1 === (o = U.lastIndexOf(l(t))) && (o = 0),
                        (s = n - o) && ((R = !0), C(s)));
                  });
          }
        }
        var I = T(),
          S = b(I);
        I !== S && k(S);
        var L = y(),
          U = [l(L)];
        function C(e) {
          t.go(e);
        }
        var D = 0;
        function F(e) {
          1 === (D += e) && 1 === e
            ? window.addEventListener(w, O)
            : 0 === D && window.removeEventListener(w, O);
        }
        var M = !1,
          j = {
            length: t.length,
            action: "POP",
            location: L,
            createHref: function (e) {
              var t = document.querySelector("base"),
                r = "";
              return (
                t && t.getAttribute("href") && (r = x(window.location.href)),
                r + "#" + b(f + l(e))
              );
            },
            push: function (e, t) {
              var r = "PUSH",
                i = h(e, void 0, void 0, j.location);
              E.confirmTransitionTo(i, r, o, function (e) {
                if (e) {
                  var t = l(i),
                    n = b(f + t);
                  if (T() !== n) {
                    (P = t), (window.location.hash = n);
                    var o = U.lastIndexOf(l(j.location)),
                      s = U.slice(0, o + 1);
                    s.push(t), (U = s), A({ action: r, location: i });
                  } else A();
                }
              });
            },
            replace: function (e, t) {
              var r = "REPLACE",
                i = h(e, void 0, void 0, j.location);
              E.confirmTransitionTo(i, r, o, function (e) {
                if (e) {
                  var t = l(i),
                    n = b(f + t);
                  T() !== n && ((P = t), k(n));
                  var o = U.indexOf(l(j.location));
                  -1 !== o && (U[o] = t), A({ action: r, location: i });
                }
              });
            },
            go: C,
            goBack: function () {
              C(-1);
            },
            goForward: function () {
              C(1);
            },
            block: function (e) {
              void 0 === e && (e = !1);
              var t = E.setPrompt(e);
              return (
                M || (F(1), (M = !0)),
                function () {
                  return M && ((M = !1), F(-1)), t();
                }
              );
            },
            listen: function (e) {
              var t = E.appendListener(e);
              return (
                F(1),
                function () {
                  F(-1), t();
                }
              );
            },
          };
        return j;
      }
      function A(e, t, r) {
        return Math.min(Math.max(e, t), r);
      }
      function R(e) {
        void 0 === e && (e = {});
        var t = e,
          r = t.getUserConfirmation,
          n = t.initialEntries,
          o = void 0 === n ? ["/"] : n,
          s = t.initialIndex,
          a = t.keyLength,
          u = void 0 === a ? 6 : a,
          c = p();
        function d(e) {
          (0, i.A)(b, e),
            (b.length = b.entries.length),
            c.notifyListeners(b.location, b.action);
        }
        function f() {
          return Math.random().toString(36).substr(2, u);
        }
        var m = A(void 0 === s ? 0 : s, 0, o.length - 1),
          g = o.map(function (e) {
            return "string" == typeof e
              ? h(e, void 0, f())
              : h(e, void 0, e.key || f());
          });
        function _(e) {
          var t = A(b.index + e, 0, b.entries.length - 1),
            i = b.entries[t];
          c.confirmTransitionTo(i, "POP", r, function (e) {
            e ? d({ action: "POP", location: i, index: t }) : d();
          });
        }
        var b = {
          length: g.length,
          action: "POP",
          location: g[m],
          index: m,
          entries: g,
          createHref: l,
          push: function (e, t) {
            var i = "PUSH",
              n = h(e, t, f(), b.location);
            c.confirmTransitionTo(n, i, r, function (e) {
              if (e) {
                var t = b.index + 1,
                  r = b.entries.slice(0);
                r.length > t ? r.splice(t, r.length - t, n) : r.push(n),
                  d({ action: i, location: n, index: t, entries: r });
              }
            });
          },
          replace: function (e, t) {
            var i = "REPLACE",
              n = h(e, t, f(), b.location);
            c.confirmTransitionTo(n, i, r, function (e) {
              e && ((b.entries[b.index] = n), d({ action: i, location: n }));
            });
          },
          go: _,
          goBack: function () {
            _(-1);
          },
          goForward: function () {
            _(1);
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
        var r = [];
        function i(e) {
          (this.time = e.time),
            (this.target = e.target),
            (this.rootBounds = e.rootBounds),
            (this.boundingClientRect = e.boundingClientRect),
            (this.intersectionRect = e.intersectionRect || u()),
            (this.isIntersecting = !!e.intersectionRect);
          var t = this.boundingClientRect,
            r = t.width * t.height,
            i = this.intersectionRect,
            n = i.width * i.height;
          r
            ? (this.intersectionRatio = n / r)
            : (this.intersectionRatio = +!!this.isIntersecting);
        }
        function n(e, t) {
          var r,
            i,
            n,
            o = t || {};
          if ("function" != typeof e)
            throw Error("callback must be a function");
          if (o.root && 1 != o.root.nodeType)
            throw Error("root must be an Element");
          (this._checkForIntersections =
            ((r = this._checkForIntersections.bind(this)),
            (i = this.THROTTLE_TIMEOUT),
            (n = null),
            function () {
              n ||
                (n = setTimeout(function () {
                  r(), (n = null);
                }, i));
            })),
            (this._callback = e),
            (this._observationTargets = []),
            (this._queuedEntries = []),
            (this._rootMarginValues = this._parseRootMargin(o.rootMargin)),
            (this.thresholds = this._initThresholds(o.threshold)),
            (this.root = o.root || null),
            (this.rootMargin = this._rootMarginValues
              .map(function (e) {
                return e.value + e.unit;
              })
              .join(" "));
        }
        function o(e, t, r, i) {
          "function" == typeof e.addEventListener
            ? e.addEventListener(t, r, i || !1)
            : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r);
        }
        function s(e, t, r, i) {
          "function" == typeof e.removeEventListener
            ? e.removeEventListener(t, r, i || !1)
            : "function" == typeof e.detatchEvent &&
              e.detatchEvent("on" + t, r);
        }
        function a(e) {
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
          for (var r = t; r; ) {
            if (r == e) return !0;
            r = d(r);
          }
          return !1;
        }
        function d(e) {
          var t = e.parentNode;
          return t && 11 == t.nodeType && t.host ? t.host : t;
        }
        (n.prototype.THROTTLE_TIMEOUT = 100),
          (n.prototype.POLL_INTERVAL = null),
          (n.prototype.USE_MUTATION_OBSERVER = !0),
          (n.prototype.observe = function (e) {
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
          (n.prototype.unobserve = function (e) {
            (this._observationTargets = this._observationTargets.filter(
              function (t) {
                return t.element != e;
              },
            )),
              this._observationTargets.length ||
                (this._unmonitorIntersections(), this._unregisterInstance());
          }),
          (n.prototype.disconnect = function () {
            (this._observationTargets = []),
              this._unmonitorIntersections(),
              this._unregisterInstance();
          }),
          (n.prototype.takeRecords = function () {
            var e = this._queuedEntries.slice();
            return (this._queuedEntries = []), e;
          }),
          (n.prototype._initThresholds = function (e) {
            var t = e || [0];
            return (
              Array.isArray(t) || (t = [t]),
              t.sort().filter(function (e, t, r) {
                if ("number" != typeof e || isNaN(e) || e < 0 || e > 1)
                  throw Error(
                    "threshold must be a number between 0 and 1 inclusively",
                  );
                return e !== r[t - 1];
              })
            );
          }),
          (n.prototype._parseRootMargin = function (e) {
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
          (n.prototype._monitorIntersections = function () {
            !this._monitoringIntersections &&
              ((this._monitoringIntersections = !0),
              this.POLL_INTERVAL
                ? (this._monitoringInterval = setInterval(
                    this._checkForIntersections,
                    this.POLL_INTERVAL,
                  ))
                : (o(e, "resize", this._checkForIntersections, !0),
                  o(t, "scroll", this._checkForIntersections, !0),
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
          (n.prototype._unmonitorIntersections = function () {
            this._monitoringIntersections &&
              ((this._monitoringIntersections = !1),
              clearInterval(this._monitoringInterval),
              (this._monitoringInterval = null),
              s(e, "resize", this._checkForIntersections, !0),
              s(t, "scroll", this._checkForIntersections, !0),
              this._domObserver &&
                (this._domObserver.disconnect(), (this._domObserver = null)));
          }),
          (n.prototype._checkForIntersections = function () {
            var t = this._rootIsInDom(),
              r = t ? this._getRootRect() : u();
            this._observationTargets.forEach(function (n) {
              var o = n.element,
                s = a(o),
                u = this._rootContainsTarget(o),
                c = n.entry,
                d = t && u && this._computeTargetAndRootIntersection(o, r),
                l = (n.entry = new i({
                  time: e.performance && performance.now && performance.now(),
                  target: o,
                  boundingClientRect: s,
                  rootBounds: r,
                  intersectionRect: d,
                }));
              c
                ? t && u
                  ? this._hasCrossedThreshold(c, l) &&
                    this._queuedEntries.push(l)
                  : c && c.isIntersecting && this._queuedEntries.push(l)
                : this._queuedEntries.push(l);
            }, this),
              this._queuedEntries.length &&
                this._callback(this.takeRecords(), this);
          }),
          (n.prototype._computeTargetAndRootIntersection = function (r, i) {
            if ("none" != e.getComputedStyle(r).display) {
              for (var n = a(r), o = d(r), s = !1; !s; ) {
                var u = null,
                  c = 1 == o.nodeType ? e.getComputedStyle(o) : {};
                if ("none" == c.display) return;
                if (
                  (o == this.root || o == t
                    ? ((s = !0), (u = i))
                    : o != t.body &&
                      o != t.documentElement &&
                      "visible" != c.overflow &&
                      (u = a(o)),
                  u &&
                    !(n = (function (e, t) {
                      var r = Math.max(e.top, t.top),
                        i = Math.min(e.bottom, t.bottom),
                        n = Math.max(e.left, t.left),
                        o = Math.min(e.right, t.right),
                        s = o - n,
                        a = i - r;
                      return (
                        s >= 0 &&
                        a >= 0 && {
                          top: r,
                          bottom: i,
                          left: n,
                          right: o,
                          width: s,
                          height: a,
                        }
                      );
                    })(u, n)))
                )
                  break;
                o = d(o);
              }
              return n;
            }
          }),
          (n.prototype._getRootRect = function () {
            var e;
            if (this.root) e = a(this.root);
            else {
              var r = t.documentElement,
                i = t.body;
              e = {
                top: 0,
                left: 0,
                right: r.clientWidth || i.clientWidth,
                width: r.clientWidth || i.clientWidth,
                bottom: r.clientHeight || i.clientHeight,
                height: r.clientHeight || i.clientHeight,
              };
            }
            return this._expandRectByRootMargin(e);
          }),
          (n.prototype._expandRectByRootMargin = function (e) {
            var t = this._rootMarginValues.map(function (t, r) {
                return "px" == t.unit
                  ? t.value
                  : (t.value * (r % 2 ? e.width : e.height)) / 100;
              }),
              r = {
                top: e.top - t[0],
                right: e.right + t[1],
                bottom: e.bottom + t[2],
                left: e.left - t[3],
              };
            return (
              (r.width = r.right - r.left), (r.height = r.bottom - r.top), r
            );
          }),
          (n.prototype._hasCrossedThreshold = function (e, t) {
            var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
              i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
            if (r !== i)
              for (var n = 0; n < this.thresholds.length; n++) {
                var o = this.thresholds[n];
                if (o == r || o == i || o < r != o < i) return !0;
              }
          }),
          (n.prototype._rootIsInDom = function () {
            return !this.root || c(t, this.root);
          }),
          (n.prototype._rootContainsTarget = function (e) {
            return c(this.root || t, e);
          }),
          (n.prototype._registerInstance = function () {
            0 > r.indexOf(this) && r.push(this);
          }),
          (n.prototype._unregisterInstance = function () {
            var e = r.indexOf(this);
            -1 != e && r.splice(e, 1);
          }),
          (e.IntersectionObserver = n),
          (e.IntersectionObserverEntry = i);
      })(window, document);
    },
    294106(e, t) {
      "use strict";
      for (
        var r =
            "u" > typeof window &&
            /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
          i = {
            alt: "altKey",
            control: "ctrlKey",
            meta: "metaKey",
            shift: "shiftKey",
          },
          n = {
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
            mod: r ? "meta" : "control",
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
          o = {
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
        o["f" + s] = 111 + s;
      function a(e) {
        return n[(e = e.toLowerCase())] || e;
      }
      t.isKeyHotkey = function (e, t) {
        var r, n, s, u, c;
        return (
          (r = e),
          (n = { byKey: !0 }),
          (s = t),
          !n || "byKey" in n || ((s = n), (n = null)),
          Array.isArray(r) || (r = [r]),
          (u = r.map(function (e) {
            return (function (e, t) {
              var r = t && t.byKey,
                n = {},
                s = (e = e.replace("++", "+add")).split("+"),
                u = s.length;
              for (var c in i) n[i[c]] = !1;
              var d = !0,
                l = !1,
                h = void 0;
              try {
                for (
                  var f, p = s[Symbol.iterator]();
                  !(d = (f = p.next()).done);
                  d = !0
                ) {
                  var m = f.value,
                    g = m.endsWith("?") && m.length > 1;
                  g && (m = m.slice(0, -1));
                  var _ = a(m),
                    b = i[_];
                  (1 !== u && b) ||
                    (r
                      ? (n.key = _)
                      : (n.which = (function (e) {
                          return o[(e = a(e))] || e.toUpperCase().charCodeAt(0);
                        })(m))),
                    b && (n[b] = !g || null);
                }
              } catch (e) {
                (l = !0), (h = e);
              } finally {
                try {
                  !d && p.return && p.return();
                } finally {
                  if (l) throw h;
                }
              }
              return n;
            })(e, n);
          })),
          (c = function (e) {
            return u.some(function (t) {
              return (function (e, t) {
                for (var r in e) {
                  var i = e[r],
                    n = void 0;
                  if (
                    null != i &&
                    (null !=
                      (n =
                        "key" === r && null != t.key
                          ? t.key.toLowerCase()
                          : "which" === r
                            ? 91 === i && 93 === t.which
                              ? 91
                              : t.which
                            : t[r]) ||
                      !1 !== i) &&
                    n !== i
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
                for (var r = 0; r < t.length; r++) {
                  var i = t[r];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              (e.exports = function (e, r, i) {
                return (
                  r && t(e.prototype, r),
                  i && t(e, i),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  e
                );
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            525: (e, t, r) => {
              var i = r(331);
              function n() {
                return (
                  "u" > typeof Reflect && Reflect.get
                    ? (e.exports = n = Reflect.get)
                    : (e.exports = n =
                        function (e, t, r) {
                          var n = i(e, t);
                          if (n) {
                            var o = Object.getOwnPropertyDescriptor(n, t);
                            return o.get
                              ? o.get.call(arguments.length < 3 ? e : r)
                              : o.value;
                          }
                        }),
                  (e.exports.__esModule = !0),
                  (e.exports.default = e.exports),
                  n.apply(this, arguments)
                );
              }
              (e.exports = n),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            754: (e) => {
              function t(r) {
                return (
                  (e.exports = t =
                    Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                        }),
                  (e.exports.__esModule = !0),
                  (e.exports.default = e.exports),
                  t(r)
                );
              }
              (e.exports = t),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            205: (e, t, r) => {
              var i = r(489);
              (e.exports = function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw TypeError(
                    "Super expression must either be null or a function",
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  t && i(e, t);
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
            585: (e, t, r) => {
              var i = r(8).default,
                n = r(506);
              (e.exports = function (e, t) {
                if (t && ("object" === i(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return n(e);
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            489: (e) => {
              function t(r, i) {
                return (
                  (e.exports = t =
                    Object.setPrototypeOf ||
                    function (e, t) {
                      return (e.__proto__ = t), e;
                    }),
                  (e.exports.__esModule = !0),
                  (e.exports.default = e.exports),
                  t(r, i)
                );
              }
              (e.exports = t),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            331: (e, t, r) => {
              var i = r(754);
              (e.exports = function (e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = i(e));

                );
                return e;
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            8: (e) => {
              function t(r) {
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
                  t(r)
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
                  function r(i) {
                    if (t[i]) return t[i].exports;
                    var n = (t[i] = { i: i, l: !1, exports: {} });
                    return (
                      e[i].call(n.exports, n, n.exports, r),
                      (n.l = !0),
                      n.exports
                    );
                  }
                  return (
                    (r.m = e),
                    (r.c = t),
                    (r.d = function (e, t, i) {
                      r.o(e, t) ||
                        Object.defineProperty(e, t, { enumerable: !0, get: i });
                    }),
                    (r.r = function (e) {
                      "u" > typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                          value: "Module",
                        }),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                    }),
                    (r.t = function (e, t) {
                      if (
                        (1 & t && (e = r(e)),
                        8 & t ||
                          (4 & t && "object" == typeof e && e && e.__esModule))
                      )
                        return e;
                      var i = Object.create(null);
                      if (
                        (r.r(i),
                        Object.defineProperty(i, "default", {
                          enumerable: !0,
                          value: e,
                        }),
                        2 & t && "string" != typeof e)
                      )
                        for (var n in e)
                          r.d(
                            i,
                            n,
                            function (t) {
                              return e[t];
                            }.bind(null, n),
                          );
                      return i;
                    }),
                    (r.n = function (e) {
                      var t =
                        e && e.__esModule
                          ? function () {
                              return e.default;
                            }
                          : function () {
                              return e;
                            };
                      return r.d(t, "a", t), t;
                    }),
                    (r.o = function (e, t) {
                      return Object.prototype.hasOwnProperty.call(e, t);
                    }),
                    (r.p = ""),
                    r((r.s = 1))
                  );
                })([
                  function (e, t) {
                    function r(e, t) {
                      if (e < 1 || e !== Math.round(e))
                        throw "Invalid channel count for BufferQueue";
                      (this.channels = e), (this.bufferSize = t), this.flush();
                    }
                    (r.prototype.flush = function () {
                      (this._buffers = []),
                        (this._pendingBuffer = this.createBuffer(
                          this.bufferSize,
                        )),
                        (this._pendingPos = 0);
                    }),
                      (r.prototype.sampleCount = function () {
                        var e = 0;
                        return (
                          this._buffers.forEach(function (t) {
                            e += t[0].length;
                          }),
                          e
                        );
                      }),
                      (r.prototype.createBuffer = function (e) {
                        for (var t = [], r = 0; r < this.channels; r++)
                          t[r] = new Float32Array(e);
                        return t;
                      }),
                      (r.prototype.validate = function (e) {
                        if (e.length !== this.channels) return !1;
                        for (var t, r = 0; r < e.length; r++) {
                          var i = e[r];
                          if (!(i instanceof Float32Array)) return !1;
                          if (0 == r) t = i.length;
                          else if (i.length !== t) return !1;
                        }
                        return !0;
                      }),
                      (r.prototype.appendBuffer = function (e) {
                        if (!this.validate(e))
                          throw "Invalid audio buffer passed to BufferQueue.appendBuffer";
                        for (
                          var t = e[0].length,
                            r = this.channels,
                            i = this._pendingPos,
                            n = this._pendingBuffer,
                            o = this.bufferSize,
                            s = 0;
                          s < t;
                          s++
                        ) {
                          for (var a = 0; a < r; a++) n[a][i] = e[a][s];
                          ++i == o &&
                            (this._buffers.push(n),
                            (i = this._pendingPos = 0),
                            (n = this._pendingBuffer = this.createBuffer(o)));
                        }
                        this._pendingPos = i;
                      }),
                      (r.prototype.prependBuffer = function (e) {
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
                        for (var r = 0; r < t.length; r++)
                          this.appendBuffer(t[r]);
                      }),
                      (r.prototype.nextBuffer = function () {
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
                      (r.prototype.trimBuffer = function (e, t, r) {
                        var i = e[0].length,
                          n = t + Math.min(r, i);
                        if (0 == t && n >= i) return e;
                        for (var o = [], s = 0; s < this.channels; s++)
                          o[s] = e[s].subarray(t, n);
                        return o;
                      }),
                      (e.exports = r);
                  },
                  function (e, t, r) {
                    r(0);
                    var i = r(2),
                      n = r(4);
                    function o(e) {
                      (this._options = e || {}),
                        (this._backend = null),
                        (this._resampleFractional = 0),
                        (this._resampleLastSampleData = void 0),
                        (this._tempoChanger = null);
                    }
                    (o.prototype.rate = 0),
                      (o.prototype.targetRate = 0),
                      (o.prototype.channels = 0),
                      (o.prototype.bufferSize = 0),
                      Object.defineProperty(o.prototype, "bufferDuration", {
                        get: function () {
                          return this.targetRate
                            ? this.bufferSize / this.targetRate
                            : 0;
                        },
                      }),
                      Object.defineProperty(o.prototype, "bufferThreshold", {
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
                      Object.defineProperty(o.prototype, "playbackPosition", {
                        get: function () {
                          return this._backend
                            ? this.getPlaybackState().playbackPosition
                            : 0;
                        },
                      }),
                      Object.defineProperty(
                        o.prototype,
                        "outputPlaybackPosition",
                        {
                          get: function () {
                            return this._backend
                              ? this.getPlaybackState().outputPlaybackPosition
                              : 0;
                          },
                        },
                      ),
                      Object.defineProperty(o.prototype, "durationBuffered", {
                        get: function () {
                          return this._backend
                            ? this.getPlaybackState().samplesQueued /
                                this.targetRate
                            : 0;
                        },
                      }),
                      Object.defineProperty(o.prototype, "muted", {
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
                      (o.prototype.mute = function () {
                        this.muted = !0;
                      }),
                      (o.prototype.unmute = function () {
                        this.muted = !1;
                      }),
                      Object.defineProperty(o.prototype, "volume", {
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
                      Object.defineProperty(o.prototype, "tempo", {
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
                      (o.prototype.init = function (e, t) {
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
                          if (!i.isSupported()) throw "No supported backend";
                          this._backend = new i(e, t, this._options);
                        }
                        (this.targetRate = this._backend.rate),
                          (this.bufferSize = this._backend.bufferSize),
                          (this._tempoChanger = n({
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
                      (o.prototype._resample = function (e) {
                        var t = this.rate,
                          r = this.channels,
                          i = this._backend.rate,
                          n = this._backend.channels;
                        if (t == i && r == n) return e;
                        var o,
                          s = [],
                          a = e[0].length,
                          u = this._resampleFractional,
                          c = (a * i) / t + u,
                          d = Math.floor(c),
                          l = c - d;
                        o =
                          t < i
                            ? function (e, r, n, o) {
                                for (
                                  var s = function (t) {
                                      return t < 0
                                        ? n && n.length + t > 0
                                          ? n[n.length + t]
                                          : e[0]
                                        : e[t];
                                    },
                                    a = 0;
                                  a < r.length;
                                  a++
                                ) {
                                  var c,
                                    d = ((a + 1 - u) * t) / i - 1,
                                    l = Math.floor(d),
                                    h = Math.ceil(d);
                                  (c =
                                    l == h
                                      ? s(l)
                                      : s(l) * (h - d) + s(h) * (d - l)),
                                    (r[a] = o * c);
                                }
                              }
                            : function (e, t, r, i) {
                                for (var n = 0; n < t.length; n++)
                                  t[n] = i * e[((n * e.length) / t.length) | 0];
                              };
                        var h = 1;
                        n > r && (h = Math.SQRT1_2);
                        for (var f = 0; f < n; f++) {
                          var p = f;
                          f >= r && (p = 0);
                          var m = e[p],
                            g = new Float32Array(d);
                          o(
                            m,
                            g,
                            this._resampleLastSampleData
                              ? this._resampleLastSampleData[p]
                              : void 0,
                            h,
                          ),
                            s.push(g);
                        }
                        return (
                          (this._resampleFractional = l),
                          (this._resampleLastSampleData = e),
                          s
                        );
                      }),
                      (o.prototype.bufferData = function (e) {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot bufferData before init";
                        var t = this._resample(e);
                        (t = this._tempoChanger.process(t)),
                          this._backend.appendBuffer(t);
                      }),
                      (o.prototype.getPlaybackState = function () {
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
                      (o.prototype.waitUntilReady = function (e) {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot waitUntilReady before init";
                        this._backend.waitUntilReady(e);
                      }),
                      (o.prototype.start = function () {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot start before init";
                        this._backend.start();
                      }),
                      (o.prototype.stop = function () {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot stop before init";
                        this._backend.stop();
                      }),
                      (o.prototype.flush = function () {
                        if (
                          ((this._resampleFractional = 0),
                          (this._resampleLastSampleData = void 0),
                          !this._backend)
                        )
                          throw "Invalid state: AudioFeeder cannot flush before init";
                        this._tempoChanger.flush(this.durationBuffered),
                          this._backend.flush();
                      }),
                      (o.prototype.close = function () {
                        this._backend &&
                          (this._backend.close(), (this._backend = null));
                      }),
                      (o.prototype.onstarved = null),
                      (o.prototype.onbufferlow = null),
                      (o.isSupported = function () {
                        return !!Float32Array && i.isSupported();
                      }),
                      (o.initSharedAudioContext = function () {
                        return i.isSupported()
                          ? i.initSharedAudioContext()
                          : null;
                      }),
                      (e.exports = o);
                  },
                  function (e, t, r) {
                    var i = window.AudioContext || window.webkitAudioContext,
                      n = r(0),
                      o = r(3);
                    function s(e, t, r) {
                      var i = r.audioContext || s.initSharedAudioContext();
                      if (
                        ((this._context = i),
                        (this.output = r.output || i.destination),
                        (this.rate = i.sampleRate),
                        (this.channels = 2),
                        r.bufferSize && (this.bufferSize = 0 | r.bufferSize),
                        (this.bufferThreshold = 2 * this.bufferSize),
                        (this._bufferQueue = new n(
                          this.channels,
                          this.bufferSize,
                        )),
                        (this._playbackTimeAtBufferTail = i.currentTime),
                        (this._queuedTime = 0),
                        (this._delayedTime = 0),
                        (this._dropped = 0),
                        (this._liveBuffer = this._bufferQueue.createBuffer(
                          this.bufferSize,
                        )),
                        i.createScriptProcessor)
                      )
                        this._node = i.createScriptProcessor(
                          this.bufferSize,
                          0,
                          this.channels,
                        );
                      else {
                        if (!i.createJavaScriptNode)
                          throw Error("Bad version of web audio API?");
                        this._node = i.createJavaScriptNode(
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
                          r,
                          i,
                          n,
                          s =
                            "number" == typeof e.playbackTime
                              ? e.playbackTime
                              : this._context.currentTime +
                                this.bufferSize / this.rate,
                          a = this._playbackTimeAtBufferTail;
                        if (
                          (a < s && (this._delayedTime += s - a),
                          this._bufferQueue.sampleCount() < this.bufferSize &&
                            this.onstarved &&
                            this.onstarved(),
                          this._bufferQueue.sampleCount() < this.bufferSize)
                        ) {
                          for (t = 0; t < this.channels; t++)
                            for (
                              i = e.outputBuffer.getChannelData(t), n = 0;
                              n < this.bufferSize;
                              n++
                            )
                              i[n] = 0;
                          this._dropped++;
                        } else {
                          var u = this.muted ? 0 : this.volume,
                            c = this._bufferQueue.nextBuffer();
                          if (c[0].length < this.bufferSize)
                            throw "Audio buffer not expected length.";
                          for (t = 0; t < this.channels; t++)
                            for (
                              r = c[t],
                                this._liveBuffer[t].set(c[t]),
                                i = e.outputBuffer.getChannelData(t),
                                n = 0;
                              n < r.length;
                              n++
                            )
                              i[n] = r[n] * u;
                          (this._queuedTime += this.bufferSize / this.rate),
                            (this._playbackTimeAtBufferTail =
                              s + this.bufferSize / this.rate),
                            this._bufferQueue.sampleCount() <
                              Math.max(this.bufferSize, this.bufferThreshold) &&
                              this.onbufferlow &&
                              o(this.onbufferlow.bind(this));
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
                              r = this._liveBuffer
                                ? this._liveBuffer[0].length
                                : 0;
                            t > r
                              ? (this._bufferQueue.prependBuffer(
                                  this._liveBuffer,
                                ),
                                this._bufferQueue.prependBuffer(
                                  this._bufferQueue.createBuffer(t - r),
                                ))
                              : this._bufferQueue.prependBuffer(
                                  this._bufferQueue.trimBuffer(
                                    this._liveBuffer,
                                    r - t,
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
                        return !!i;
                      }),
                      (s.sharedAudioContext = null),
                      (s.initSharedAudioContext = function () {
                        if (!s.sharedAudioContext && s.isSupported()) {
                          var e,
                            t = new i();
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
                              var r = t.data;
                              if (
                                "object" == typeof r &&
                                r.nextTickBrowserPingMessage
                              ) {
                                var i = e.pop();
                                i && i();
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
                  function (e, t, r) {
                    window,
                      (e.exports = (function () {
                        var e = [
                            function (e, t) {
                              e.exports = {
                                float_array: function (e) {
                                  return new Float32Array(e);
                                },
                                blit: function (e, t, r, i, n) {
                                  r.set(e.subarray(t, t + n), i);
                                },
                              };
                            },
                            function (e, t, r) {
                              var i, n;
                              (i = r(0)),
                                (n = r(2)),
                                (e.exports = function (e) {
                                  var t = (e = e || {}).sampleRate || 44100,
                                    r = e.wsizeLog || 11,
                                    o = e.tempo || 1,
                                    s =
                                      (e.numChannels,
                                      Math.pow(2, 50 / 1200) - 1),
                                    a = 1 << r,
                                    u = n(r),
                                    c = 1 << (r - 2);
                                  c -= c % 100;
                                  for (
                                    var d = i.float_array(a + c + 5),
                                      l = i.float_array(a + c + 5),
                                      h = c,
                                      f = c,
                                      p = i.float_array(a),
                                      m = 0;
                                    m < a;
                                    m++
                                  )
                                    p[m] =
                                      0.5 *
                                      (1 - Math.cos((2 * Math.PI * m) / a));
                                  var g = 1 + (a >> 1),
                                    _ = i.float_array(g),
                                    b = i.float_array(g),
                                    v = i.float_array(g),
                                    y = i.float_array(g),
                                    w = i.float_array(g),
                                    V = i.float_array(g),
                                    x = 1 + (g >> 1),
                                    T = [0, 0],
                                    k = [],
                                    E = [],
                                    A = [],
                                    R = [];
                                  for (m = 0; m < 2; m++)
                                    k.push(i.float_array(x)),
                                      E.push(i.float_array(x)),
                                      A.push(i.float_array(x)),
                                      R.push(i.float_array(g));
                                  var P = i.float_array(x),
                                    O = i.float_array(x),
                                    I = 0,
                                    S = 0,
                                    L = [{ in_time: 0, out_time: 0, tempo: o }],
                                    U = 0,
                                    C = 0,
                                    D = 1,
                                    F = 0,
                                    M = 0,
                                    j = 0,
                                    B = 0,
                                    N = {
                                      mapOutputToInputTime: function (e) {
                                        for (
                                          var t = L.length - 1;
                                          e < L[t].out_time && t > 0;

                                        )
                                          t--;
                                        var r = L[t];
                                        return (
                                          r.in_time + r.tempo * (e - r.out_time)
                                        );
                                      },
                                      flush: function (e) {
                                        (F = 0),
                                          (T = [0, 0]),
                                          (C = 0),
                                          (B = 0),
                                          (j = 0);
                                        for (var t = 0; t < 2; t++)
                                          for (var r = 0; r < g; r++)
                                            R[t][r] = 0;
                                        for (t = 0; t < d.length; t++) d[t] = 0;
                                        for (t = 0; t < l.length; t++) l[t] = 0;
                                        if (e) {
                                          (S = Math.max(0, S - e)),
                                            (I = N.mapOutputToInputTime(S));
                                          for (
                                            var i = L.length - 1;
                                            S <= L[i].out_time && i >= 0;

                                          )
                                            L.pop(), i--;
                                          L.push({
                                            in_time: I,
                                            out_time: S,
                                            tempo: o,
                                          });
                                        }
                                      },
                                      getTempo: function () {
                                        return o;
                                      },
                                      setTempo: function (e) {
                                        (h = f = c),
                                          e >= 1
                                            ? (f = Math.round(h / e))
                                            : (h = Math.round(f * e)),
                                          (M = (1 / e - f / h) * h),
                                          (D = (function (e, t) {
                                            for (
                                              var r = (e.length / t) | 0,
                                                i = 0,
                                                n = 0;
                                              n < r;
                                              n++
                                            )
                                              i += e[n * t];
                                            return 0.9 / i;
                                          })(p, f)),
                                          (o = e);
                                        var t = L[L.length - 1];
                                        t.out_time == S
                                          ? (t.tempo = e)
                                          : L.push({
                                              in_time: I,
                                              out_time: S,
                                              tempo: e,
                                            });
                                      },
                                    };
                                  N.flush(0), N.setTempo(o);
                                  var W = function (e, t, r) {
                                      var i = Math.floor(r),
                                        n = i % 2 == 1 ? -1 : 1;
                                      return Math.atan2(
                                        n * (t[i] - t[i + 1]),
                                        n * (e[i] - e[i + 1]),
                                      );
                                    },
                                    H = function (e, t, r, i, n) {
                                      var o,
                                        s =
                                          ((2 * Math.PI) / a) *
                                          0.5 *
                                          (i + t) *
                                          h;
                                      return (
                                        ((o = e - r - s) -
                                          2 *
                                            Math.PI *
                                            Math.round(o / (2 * Math.PI)) +
                                          s) *
                                        n
                                      );
                                    },
                                    G = function (e, t, r, i, n, o) {
                                      for (
                                        var u = e % 2,
                                          c = 1 - u,
                                          d = R[c],
                                          l = T[c],
                                          h = k[c],
                                          f = E[c],
                                          p = A[c],
                                          m = R[u],
                                          g = 1;
                                        g < m.length;
                                        g++
                                      )
                                        m[g] = t[g] * t[g] + r[g] * r[g];
                                      var _ = k[u],
                                        b = (T[u] = (function (e, t) {
                                          for (
                                            var r = 0, i = 0;
                                            i < e.length;
                                            i++
                                          )
                                            e[i] > r && (r = e[i]);
                                          var n = 1e-8 * r,
                                            o = 1,
                                            a = 1;
                                          for (
                                            t[0] = 1, i = 2;
                                            i < e.length;
                                            i++
                                          ) {
                                            var u = i * s;
                                            if (
                                              e[i] > n &&
                                              e[i] > e[i - 1] &&
                                              e[i] >= e[i + 1]
                                            ) {
                                              var c =
                                                i +
                                                (e[i - 1] - e[i + 1]) /
                                                  (2 *
                                                    (e[i - 1] -
                                                      2 * e[i] +
                                                      e[i + 1]));
                                              c - t[o - 1] > u
                                                ? ((t[o++] = c), (a = i))
                                                : e[i] > e[a] &&
                                                  ((t[o - 1] = c), (a = i));
                                            }
                                          }
                                          return o;
                                        })(m, _)),
                                        v = E[u],
                                        y = A[u];
                                      if (0 != e && 0 != b) {
                                        var w = 0;
                                        for (j = 0; j < b; j++) {
                                          for (
                                            B = _[j];
                                            _[j] > h[w] && w != l;

                                          )
                                            ++w;
                                          var V = w;
                                          w > 0 &&
                                            B - h[w - 1] < h[w] - B &&
                                            (V = w - 1);
                                          var x = B * s;
                                          if (
                                            Math.abs(h[V] - B) < x &&
                                            d[Math.round(h[V])] >
                                              0.1 * m[Math.round(B)]
                                          ) {
                                            var I = W(t, r, B),
                                              S =
                                                f[V] +
                                                p[V] +
                                                H(I, B, f[V], h[V], o) -
                                                I;
                                            (v[j] = I),
                                              (y[j] = S),
                                              (P[j] = Math.cos(S)),
                                              (O[j] = Math.sin(S));
                                          } else
                                            (v[j] = W(t, r, B)),
                                              (y[j] = 0),
                                              (P[j] = 1),
                                              (O[j] = 0);
                                        }
                                        _[b] = 2 * a;
                                        var L = _[(V = 0)],
                                          U = _[V + 1],
                                          C = P[V],
                                          D = O[V];
                                        for (g = 1; g < t.length - 1; g++) {
                                          g >= L &&
                                            g - L > U - g &&
                                            ((L = _[++V]),
                                            (U = _[V + 1]),
                                            (C = P[V]),
                                            (D = O[V]));
                                          var F = t[g] * C - r[g] * D,
                                            M = t[g] * D + r[g] * C;
                                          (t[g] = F), (r[g] = M);
                                        }
                                      } else
                                        for (var j = 0; j < b; j++) {
                                          var B = _[j];
                                          f[j] = p[j] = W(t, r, B);
                                        }
                                    },
                                    X = function () {
                                      var e = 0 | (F += 2 * M);
                                      F -= e;
                                      for (var t = 0; t < a; t++)
                                        (u.m_re[t] = p[t] * d[t]),
                                          (u.m_im[t] = p[t] * d[h + t]);
                                      i.blit(d, 2 * h, d, 0, a - h),
                                        u.inplace(!1),
                                        u.unpack(_, b, v, y),
                                        G(U, _, b, 0, 0, f / h),
                                        G(U + 1, v, y, 0, 0, (f + e) / h),
                                        i.blit(v, 0, w, 0, g),
                                        i.blit(y, 0, V, 0, g),
                                        u.repack(_, b, v, y),
                                        u.inplace(!0);
                                      var r = l.length;
                                      for (
                                        i.blit(l, C, l, 0, r - C), t = r - C;
                                        t < r;
                                        t++
                                      )
                                        l[t] = 0;
                                      var n = 0,
                                        o = D;
                                      for (t = 0; t < f; t++)
                                        Math.abs(2 * u.m_re[t]) > n &&
                                          (n = Math.abs(2 * u.m_re[t]));
                                      for (t = 0; t < a - f; t++)
                                        Math.abs(
                                          u.m_re[t + f + e] + u.m_im[t],
                                        ) > n &&
                                          (n = Math.abs(
                                            u.m_re[t + f + e] + u.m_im[t],
                                          ));
                                      for (t = a - f; t < a; t++)
                                        Math.abs(2 * u.m_im[t]) > n &&
                                          (n = Math.abs(2 * u.m_im[t]));
                                      var s = 1 / Math.floor(a / (2 * f));
                                      for (
                                        o * n > s && (o = s / n), t = 0;
                                        t < a;
                                        t++
                                      )
                                        (l[t] += o * u.m_re[t]),
                                          (l[t + f + e] += o * u.m_im[t]);
                                      return (U += 2), (C = 2 * f + e);
                                    };
                                  return (
                                    (N.process = function (e) {
                                      var r = e[0].length,
                                        n = e[0];
                                      if (e.length > 1) {
                                        n = i.float_array(e[0].length);
                                        for (
                                          var s = 1 / e.length, u = 0;
                                          u < e.length;
                                          u++
                                        )
                                          for (var c = 0; c < r; c++)
                                            n[c] += s * e[u][c];
                                      }
                                      if (1 == o) {
                                        if (B + j > 0) {
                                          var p = B + j + r,
                                            m = [];
                                          for (u = 0; u < e.length; u++) {
                                            var g = i.float_array(p);
                                            i.blit(l, 0, g, 0, B),
                                              i.blit(d, 0, g, B, j),
                                              i.blit(e[u], 0, g, B + j, r),
                                              m.push(g);
                                          }
                                          N.flush(0), (r = p), (e = m);
                                        }
                                        return (I += r / t), (S += r / t), e;
                                      }
                                      var _ =
                                          2 *
                                          Math.floor(
                                            Math.max(0, j + r - (a - h)) /
                                              (2 * h),
                                          ),
                                        b = B + f * _ + Math.floor(F + M * _);
                                      B > b && (b = B);
                                      var v = i.float_array(b);
                                      i.blit(l, 0, v, 0, B);
                                      for (var y = 0, w = B, V = 0, x = 0; ; ) {
                                        var T = a + h - j;
                                        if (y + T > r) {
                                          i.blit(n, y, d, j, r - y),
                                            (j += r - y),
                                            (y = r);
                                          break;
                                        }
                                        T <= 0
                                          ? (j -= 2 * h)
                                          : (i.blit(n, y, d, j, T),
                                            (y += T),
                                            (j = a - h)),
                                          (x = X()),
                                          (I += (2 * h) / t),
                                          (S += x / t),
                                          (V = w + x - b) < 0 && (V = 0),
                                          i.blit(l, 0, v, w, x - V),
                                          (w += x);
                                      }
                                      i.blit(l, x - V, l, 0, V), (B = V);
                                      var k = [];
                                      for (u = 0; u < e.length; u++) k.push(v);
                                      return k;
                                    }),
                                    N
                                  );
                                });
                            },
                            function (e, t, r) {
                              "use strict";
                              var i = r(0);
                              e.exports = function (e) {
                                for (
                                  var t = 1 << e,
                                    r = {
                                      m_logN: e,
                                      m_N: t,
                                      m_invN: 1 / t,
                                      m_re: i.float_array(t),
                                      m_im: i.float_array(t),
                                      m_revTgt: Array(t),
                                    },
                                    n = 0;
                                  n < t;
                                  n++
                                ) {
                                  for (var o = n, s = 0, a = 0; a < e; a++)
                                    (s <<= 1), (s |= 1 & o), (o >>= 1);
                                  r.m_revTgt[n] = s;
                                }
                                (r.twiddleRe = i.float_array(r.m_logN)),
                                  (r.twiddleIm = i.float_array(r.m_logN));
                                for (var u = 1, c = 0; c < r.m_logN; c++) {
                                  var d = 2 * u * Math.PI * r.m_invN;
                                  (r.twiddleRe[c] = Math.cos(d)),
                                    (r.twiddleIm[c] = Math.sin(d)),
                                    (u <<= 1);
                                }
                                r.inplace = function (e) {
                                  var t = r.m_re,
                                    i = r.m_im,
                                    n = r.m_N,
                                    o = r.m_logN,
                                    s = n >> 1,
                                    a = n >> 1,
                                    u = n;
                                  if (e)
                                    for (var c = 1 / n, d = 0; d < n; d++)
                                      (t[d] *= c), (i[d] *= c);
                                  for (var l = 0; l < o; l++) {
                                    var h = r.twiddleRe[l],
                                      f = r.twiddleIm[l];
                                    e || (f *= -1);
                                    for (var p = 0; p < n; ) {
                                      for (
                                        var m = p,
                                          g = p + a,
                                          _ = 1,
                                          b = 0,
                                          v = 0;
                                        v < s;
                                        v++
                                      ) {
                                        var y = t[m],
                                          w = i[m],
                                          V = t[g],
                                          x = i[g];
                                        (t[m] = y + V),
                                          (i[m] = w + x),
                                          (V = y - V),
                                          (x = w - x),
                                          (t[g] = V * _ - x * b),
                                          (i[g] = V * b + x * _),
                                          m++,
                                          g++;
                                        var T = _;
                                        (_ = _ * h - b * f),
                                          (b = T * f + b * h);
                                      }
                                      p += u;
                                    }
                                    (s >>= 1), (a >>= 1), (u >>= 1);
                                  }
                                  for (
                                    var k, E, A = r.m_revTgt, R = 0;
                                    R < n;
                                    R++
                                  )
                                    A[R] > R &&
                                      ((E = t[(k = A[R])]),
                                      (t[k] = t[R]),
                                      (t[R] = E),
                                      (E = i[k]),
                                      (i[k] = i[R]),
                                      (i[R] = E));
                                };
                                var l = t >> 1;
                                return (
                                  (r.unpack = function (e, i, n, o) {
                                    (e[0] = r.m_re[0]),
                                      (n[0] = r.m_im[0]),
                                      (i[0] = o[0] = 0),
                                      (e[l] = r.m_re[l]),
                                      (n[l] = r.m_im[l]),
                                      (i[l] = o[l] = 0);
                                    for (var s = 1; s < l; s++)
                                      (e[s] = (r.m_re[s] + r.m_re[t - s]) / 2),
                                        (i[s] =
                                          (r.m_im[s] - r.m_im[t - s]) / 2),
                                        (n[s] =
                                          (r.m_im[s] + r.m_im[t - s]) / 2),
                                        (o[s] =
                                          (-r.m_re[s] + r.m_re[t - s]) / 2);
                                  }),
                                  (r.repack = function (e, i, n, o) {
                                    (r.m_re[0] = e[0]),
                                      (r.m_im[0] = n[0]),
                                      (r.m_re[l] = e[l]),
                                      (r.m_im[l] = n[l]);
                                    for (var s = 1; s < l; s++)
                                      (r.m_re[s] = e[s] - o[s]),
                                        (r.m_im[s] = i[s] + n[s]),
                                        (r.m_re[t - s] = e[s] + o[s]),
                                        (r.m_im[t - s] = -i[s] + n[s]);
                                  }),
                                  r
                                );
                              };
                            },
                          ],
                          t = {};
                        function r(i) {
                          if (t[i]) return t[i].exports;
                          var n = (t[i] = { i: i, l: !1, exports: {} });
                          return (
                            e[i].call(n.exports, n, n.exports, r),
                            (n.l = !0),
                            n.exports
                          );
                        }
                        return (
                          (r.m = e),
                          (r.c = t),
                          (r.d = function (e, t, i) {
                            r.o(e, t) ||
                              Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: i,
                              });
                          }),
                          (r.r = function (e) {
                            "u" > typeof Symbol &&
                              Symbol.toStringTag &&
                              Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module",
                              }),
                              Object.defineProperty(e, "__esModule", {
                                value: !0,
                              });
                          }),
                          (r.t = function (e, t) {
                            if (
                              (1 & t && (e = r(e)),
                              8 & t ||
                                (4 & t &&
                                  "object" == typeof e &&
                                  e &&
                                  e.__esModule))
                            )
                              return e;
                            var i = Object.create(null);
                            if (
                              (r.r(i),
                              Object.defineProperty(i, "default", {
                                enumerable: !0,
                                value: e,
                              }),
                              2 & t && "string" != typeof e)
                            )
                              for (var n in e)
                                r.d(
                                  i,
                                  n,
                                  function (t) {
                                    return e[t];
                                  }.bind(null, n),
                                );
                            return i;
                          }),
                          (r.n = function (e) {
                            var t =
                              e && e.__esModule
                                ? function () {
                                    return e.default;
                                  }
                                : function () {
                                    return e;
                                  };
                            return r.d(t, "a", t), t;
                          }),
                          (r.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                          }),
                          (r.p = ""),
                          r((r.s = 1))
                        );
                      })());
                  },
                ]));
            },
            893: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(575)),
                o = i(r(913));
              t.default = (function () {
                function e(t) {
                  (0, n.default)(this, e),
                    (this.lower = t.start),
                    (this.upper = t.end),
                    (this.onprocess = t.process),
                    (this.position = 0),
                    (this.n = 0);
                }
                return (
                  (0, o.default)(e, [
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
            523: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(575)),
                o = i(r(913));
              t.default = new ((function () {
                function e() {
                  (0, n.default)(this, e);
                }
                return (
                  (0, o.default)(e, [
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
            408: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(575)),
                o = i(r(913)),
                s = i(r(205)),
                a = i(r(585)),
                u = i(r(754));
              t.default = (function (e) {
                (0, s.default)(i, e);
                var t,
                  r =
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
                        r = (0, u.default)(i);
                      return (
                        (e = t
                          ? Reflect.construct(
                              r,
                              arguments,
                              (0, u.default)(this).constructor,
                            )
                          : r.apply(this, arguments)),
                        (0, a.default)(this, e)
                      );
                    });
                function i() {
                  return (0, n.default)(this, i), r.apply(this, arguments);
                }
                return (
                  (0, o.default)(i, [
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
                  i
                );
              })(
                (0, i(r(580)).default)({
                  loadedMetadata: !1,
                  audioFormat: null,
                  audioBuffer: null,
                  cpuTime: 0,
                }),
              );
            },
            319: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(575)),
                o = i(r(913)),
                s = i(r(205)),
                a = i(r(585)),
                u = i(r(754));
              t.default = (function (e) {
                (0, s.default)(i, e);
                var t,
                  r =
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
                        r = (0, u.default)(i);
                      return (
                        (e = t
                          ? Reflect.construct(
                              r,
                              arguments,
                              (0, u.default)(this).constructor,
                            )
                          : r.apply(this, arguments)),
                        (0, a.default)(this, e)
                      );
                    });
                function i() {
                  return (0, n.default)(this, i), r.apply(this, arguments);
                }
                return (
                  (0, o.default)(i, [
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
                  i
                );
              })(
                (0, i(r(580)).default)({
                  loadedMetadata: !1,
                  videoFormat: null,
                  frameBuffer: null,
                  cpuTime: 0,
                }),
              );
            },
            445: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(575)),
                o = i(r(913)),
                s = i(r(539)),
                a = "1.8.9-20220406232920-cb5f7ff",
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
                  (0, n.default)(this, e), (this.base = this.defaultBase());
                }
                return (
                  (0, o.default)(e, [
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
                            t + e + "?version=" + encodeURIComponent(a)
                          );
                        }
                        throw Error("asked for URL for unknown script " + e);
                      },
                    },
                    {
                      key: "loadClass",
                      value: function (e, t, r) {
                        var i = this;
                        r = r || {};
                        var n = this.getGlobal(),
                          o = this.urlForClass(e),
                          s = function (t) {
                            return (
                              ((t = t || {}).locateFile = function (e) {
                                return "data:" === e.slice(0, 5)
                                  ? e
                                  : i.urlForScript(e);
                              }),
                              (t.mainScriptUrlOrBlob =
                                i.scriptForClass(e) +
                                "?version=" +
                                encodeURIComponent(a)),
                              n[e](t)
                            );
                          };
                        "function" == typeof n[e]
                          ? t(s)
                          : this.loadScript(o, function () {
                              t(s);
                            });
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            964: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(575)),
                o = i(r(913)),
                s = i(r(525)),
                a = i(r(205)),
                u = i(r(585)),
                c = i(r(754)),
                d = i(r(408)),
                l = i(r(319)),
                h = i(r(445)),
                f = {
                  audio: { proxy: d.default, worker: "ogv-worker-audio.js" },
                  video: { proxy: l.default, worker: "ogv-worker-video.js" },
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
                m = new ((function (e) {
                  (0, a.default)(i, e);
                  var t,
                    r =
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
                          r = (0, c.default)(i);
                        return (
                          (e = t
                            ? Reflect.construct(
                                r,
                                arguments,
                                (0, c.default)(this).constructor,
                              )
                            : r.apply(this, arguments)),
                          (0, u.default)(this, e)
                        );
                      });
                  function i() {
                    var e;
                    return (
                      (0, n.default)(this, i),
                      ((e = r.call(this)).scriptStatus = {}),
                      (e.scriptCallbacks = {}),
                      e
                    );
                  }
                  return (
                    (0, o.default)(i, [
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
                              r = document.querySelectorAll("script"),
                              i =
                                /^(?:|(.*)\/)ogv(?:-support|-es2017)?\.js(?:\?|#|$)/,
                              n = 0;
                            n < r.length;
                            n++
                          )
                            if (
                              (e = r[n].getAttribute("src")) &&
                              (t = e.match(i))
                            )
                              return t[1];
                        },
                      },
                      {
                        key: "loadClass",
                        value: function (e, t, r) {
                          (r = r || {}).worker
                            ? this.workerProxy(e, t)
                            : (0, s.default)(
                                (0, c.default)(i.prototype),
                                "loadClass",
                                this,
                              ).call(this, e, t, r);
                        },
                      },
                      {
                        key: "loadScript",
                        value: function (e, t) {
                          var r = this;
                          if ("done" == this.scriptStatus[e]) t();
                          else if ("loading" == this.scriptStatus[e])
                            this.scriptCallbacks[e].push(t);
                          else {
                            (this.scriptStatus[e] = "loading"),
                              (this.scriptCallbacks[e] = [t]);
                            var i = document.createElement("script"),
                              n = function (t) {
                                var i = r.scriptCallbacks[e];
                                delete r.scriptCallbacks[e],
                                  (r.scriptStatus[e] = "done"),
                                  i.forEach(function (e) {
                                    e();
                                  });
                              };
                            i.addEventListener("load", n),
                              i.addEventListener("error", n),
                              (i.src = e),
                              document.querySelector("head").appendChild(i);
                          }
                        },
                      },
                      {
                        key: "workerProxy",
                        value: function (e, t) {
                          var r = f[p[e]];
                          if (!r)
                            throw Error(
                              "Requested worker for class with no proxy: " + e,
                            );
                          var i,
                            n = r.proxy,
                            o = r.worker,
                            s = this.urlForScript(this.scriptForClass(e)),
                            a = this.urlForScript(o),
                            u = function (t) {
                              return new n(i, e, t);
                            };
                          if (a.match(/^https?:|\/\//i)) {
                            var c,
                              d,
                              l,
                              h,
                              g,
                              _ = function () {
                                if (1 == b && 1 == v) {
                                  var e =
                                    l +
                                    " " +
                                    h +
                                    "\nOGVLoader.base = " +
                                    JSON.stringify(m.base);
                                  try {
                                    g = new Blob([e], {
                                      type: "application/javascript",
                                    });
                                  } catch (t) {
                                    (window.BlobBuilder =
                                      window.BlobBuilder ||
                                      window.WebKitBlobBuilder ||
                                      window.MozBlobBuilder),
                                      (g = new BlobBuilder()).append(e),
                                      (g = g.getBlob());
                                  }
                                  (i = new Worker(URL.createObjectURL(g))),
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
                                  ((l = c.responseText), (b = !0), _());
                              }),
                              c.send(),
                              (d = new XMLHttpRequest()).open("GET", a, !0),
                              (d.onreadystatechange = function () {
                                4 == d.readyState &&
                                  200 == d.status &&
                                  ((h = d.responseText), (v = !0), _());
                              }),
                              d.send();
                          } else
                            (i = new Worker(a)),
                              t(function (e) {
                                return Promise.resolve(new u(e));
                              });
                        },
                      },
                    ]),
                    i
                  );
                })(h.default))();
              t.default = m;
            },
            759: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(913)),
                o = i(r(575)),
                s = i(r(309)),
                a = {
                  MEDIA_ERR_ABORTED: 1,
                  MEDIA_ERR_NETWORK: 2,
                  MEDIA_ERR_DECODE: 3,
                  MEDIA_ERR_SRC_NOT_SUPPORTED: 4,
                },
                u = (0, n.default)(function e(t, r) {
                  (0, o.default)(this, e), (this.code = t), (this.message = r);
                });
              (0, s.default)(u, a),
                (0, s.default)(u.prototype, a),
                (t.default = u);
            },
            278: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(913)),
                o = i(r(575));
              function s(e, t, r) {
                var i = e.split(t, r).map(function (e) {
                  return e.replace(/^\s+/, "").replace(/\s+$/, "");
                });
                if ("number" == typeof r) for (; i.length < r; ) i.push(null);
                return i;
              }
              t.default = (0, n.default)(function e(t) {
                (0, o.default)(this, e),
                  (t = String(t)),
                  (this.major = null),
                  (this.minor = null),
                  (this.codecs = null);
                var r = s(t, ";");
                if (r.length) {
                  var i = r.shift();
                  if (i) {
                    var n = s(i, "/", 2);
                    (this.major = n[0]), (this.minor = n[1]);
                  }
                  for (var a in r) {
                    var u = r[a].match(/^codecs\s*=\s*"(.*?)"$/);
                    if (u) {
                      this.codecs = s(u[1], ",");
                      break;
                    }
                  }
                }
              });
            },
            869: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n,
                o = i(r(575)),
                s = i(r(913)),
                a = i(r(506)),
                u = i(r(205)),
                c = i(r(585)),
                d = i(r(754)),
                l = i(r(8)),
                h = i(r(731)),
                f = i(r(936)),
                p = i(r(848)),
                m = i(r(964)),
                g = i(r(893)),
                _ = i(r(309)),
                b = i(r(759)),
                v = i(r(278)),
                y = i(r(168)),
                w = i(r(625)),
                V = i(r(302)),
                x = (function () {
                  if ("function" == typeof setImmediate) return setImmediate;
                  var e = new MessageChannel(),
                    t = [];
                  return (
                    (e.port1.onmessage = function (e) {
                      t.shift()();
                    }),
                    function (r) {
                      t.push(r), e.port2.postMessage({});
                    }
                  );
                })(),
                T = {
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
                k = "INITIAL",
                E = "SEEKING_END",
                A = "LOADED",
                R = "PRELOAD",
                P = "READY",
                O = "PLAYING",
                I = "SEEKING",
                S = "ERROR",
                L = "NOT_SEEKING",
                U = "BISECT_TO_TARGET",
                C = "BISECT_TO_KEYPOINT",
                D = "LINEAR_TO_TARGET",
                F = "fast";
              function M() {
                var e = document.createElement("ogvjs");
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, Object.getPrototypeOf(this))
                    : (e.__proto__ = this.__proto__),
                  e
                );
              }
              (n =
                "u" < typeof performance ||
                void 0 === (0, l.default)(performance.now)
                  ? Date.now
                  : performance.now.bind(performance)),
                (M.prototype = Object.create(HTMLElement.prototype, {}));
              var j = (function (e) {
                (0, u.default)(i, e);
                var t,
                  r =
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
                        r = (0, d.default)(i);
                      return (
                        (e = t
                          ? Reflect.construct(
                              r,
                              arguments,
                              (0, d.default)(this).constructor,
                            )
                          : r.apply(this, arguments)),
                        (0, c.default)(this, e)
                      );
                    });
                function i(e) {
                  var t;
                  if (
                    ((0, o.default)(this, i),
                    (t = r.call(this)),
                    ((e = e || {}).base = e.base || m.default.base),
                    (t._options = e),
                    (t._instanceId = "ogvjs" + ++i.instanceCount),
                    void 0 !== e.worker
                      ? (t._enableWorker = !!e.worker)
                      : (t._enableWorker = !!window.Worker),
                    !m.default.wasmSupported())
                  )
                    throw Error("WebAssembly not supported");
                  return (
                    (t._enableThreading = !!e.threading),
                    (t._enableSIMD = !!e.simd),
                    (t._state = k),
                    (t._seekState = L),
                    (t._detectedType = null),
                    (t._canvas = document.createElement("canvas")),
                    (t._frameSink = null),
                    (t.className = t._instanceId),
                    (0, _.default)((0, a.default)(t), T),
                    (t._view = t._canvas),
                    (t._view.style.position = "absolute"),
                    (t._view.style.top = "0"),
                    (t._view.style.left = "0"),
                    (t._view.style.width = "100%"),
                    (t._view.style.height = "100%"),
                    (t._view.style.objectFit = "contain"),
                    t.appendChild(t._view),
                    (t._startTime = n()),
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
                    Object.defineProperties((0, a.default)(t), {
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
                          return this._state == I
                            ? this._seekTargetTime
                            : this._codec
                              ? this._state != O || this._paused
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
                          return this._state == I;
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
                            var r = new Image();
                            (r.crossOrigin = this.crossOrigin),
                              (r.src = this._poster),
                              (r.className = "ogvjs-poster"),
                              (r.style.position = "absolute"),
                              (r.style.top = "0"),
                              (r.style.left = "0"),
                              (r.style.width = "100%"),
                              (r.style.height = "100%"),
                              (r.style.objectFit = "contain"),
                              (r.style.visibility = "hidden"),
                              r.addEventListener("load", function () {
                                t._thumbnail === r &&
                                  (i.styleManager.appendRule(
                                    "." + t._instanceId,
                                    {
                                      width: r.naturalWidth + "px",
                                      height: r.naturalHeight + "px",
                                    },
                                  ),
                                  (r.style.visibility = "visible"));
                              }),
                              (this._thumbnail = r),
                              this.appendChild(r);
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
                          return this._state === S
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
                            ? i.HAVE_ENOUGH_DATA
                            : i.HAVE_NOTHING;
                        },
                      },
                      networkState: {
                        get: function () {
                          return this._stream
                            ? this._stream.waiting
                              ? i.NETWORK_LOADING
                              : i.NETWORK_IDLE
                            : this.readyState == i.HAVE_NOTHING
                              ? i.NETWORK_EMPTY
                              : i.NETWORK_NO_SOURCE;
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
                                (t * n()) / 1e3)),
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
                    i,
                    [
                      {
                        key: "_time",
                        value: function (e) {
                          var t = n();
                          e();
                          var r = n() - t;
                          return (this._lastFrameDecodeTime += r), r;
                        },
                      },
                      {
                        key: "_log",
                        value: function (e) {
                          var t = this._options;
                          if (t.debug) {
                            var r = n() - this._startTime;
                            (t.debugFilter && !e.match(t.debugFilter)) ||
                              console.log(
                                "[" + Math.round(10 * r) / 10 + "ms] " + e,
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
                          var r,
                            i = "function" == typeof Event;
                          for (var n in (i
                            ? (r = new CustomEvent(e))
                            : (r = document.createEvent("Event")).initEvent(
                                e,
                                !1,
                                !1,
                              ),
                          t))
                            t.hasOwnProperty(n) && (r[n] = t[n]);
                          var o = this.dispatchEvent(r);
                          !i &&
                            "resize" === e &&
                            this.onresize &&
                            o &&
                            this.onresize.call(this, r);
                        },
                      },
                      {
                        key: "_fireEventAsync",
                        value: function (e) {
                          var t = this,
                            r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                          this._log("fireEventAsync " + e),
                            x(function () {
                              t._fireEvent(e, r);
                            });
                        },
                      },
                      {
                        key: "_initAudioFeeder",
                        value: function () {
                          var e = this,
                            t = this._options,
                            r = { bufferSize: 8192 };
                          t.audioContext && (r.audioContext = t.audioContext),
                            t.audioDestination &&
                              (r.output = t.audioDestination),
                            t.audioBackendFactory &&
                              (r.backendFactory = t.audioBackendFactory);
                          var i = (this._audioFeeder = new p.default(r));
                          i.init(
                            this._audioInfo.channels,
                            this._audioInfo.rate,
                          ),
                            this.onaudiofeedercreated &&
                              this.onaudiofeedercreated(this._audioFeeder),
                            (i.bufferThreshold = 1),
                            (i.volume = this.volume),
                            (i.muted = this.muted),
                            (i.tempo = this.playbackRate),
                            (i.onbufferlow = function () {
                              e._log("onbufferlow"),
                                (e._stream &&
                                  (e._stream.buffering || e._stream.seeking)) ||
                                  e._pendingAudio ||
                                  e._pingProcessing();
                            }),
                            (i.onstarved = function () {
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
                              (this._playbackRate * n()) / 1e3;
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
                                : (this._playbackRate * n()) / 1e3) -
                                this._initialPlaybackPosition +
                                this._initialPlaybackOffset;
                        },
                      },
                      {
                        key: "_stopVideo",
                        value: function () {
                          this._log("STOPPING"),
                            (this._state = k),
                            (this._seekState = L),
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
                          var r = n(),
                            i = r - this._lastFrameTimestamp,
                            o =
                              this._actualPerFrameTime -
                              this._targetPerFrameTime;
                          (this._totalJitter += Math.abs(o)),
                            (this._playTime += i);
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
                          function a(e) {
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
                            (this._lastFrameTimestamp = r),
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
                                a(i) +
                                " (jitter " +
                                a(o) +
                                ") cpu: " +
                                a(s.cpuTime) +
                                " (mux: " +
                                a(s.demuxerTime) +
                                " buf: " +
                                a(s.bufferTime) +
                                " draw: " +
                                a(s.drawingTime) +
                                " proxy: " +
                                a(s.proxyTime) +
                                ") vid: " +
                                a(s.videoTime) +
                                " aud: " +
                                a(s.audioTime),
                            ),
                            this._fireEventAsync("framecallback", s),
                            (!this._lastTimeUpdate ||
                              r - this._lastTimeUpdate >=
                                this._timeUpdateInterval) &&
                              ((this._lastTimeUpdate = r),
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
                              (this._state = S),
                              this._stopPlayback());
                        },
                      },
                      {
                        key: "_seek",
                        value: function (e, t) {
                          var r = this;
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
                          var i = function (i) {
                            r._stream &&
                              r._stream.buffering &&
                              r._stream.abort(),
                              r._stream &&
                                r._stream.seeking &&
                                r._stream.abort(),
                              r._actionQueue.splice(0, r._actionQueue.length),
                              r._stopPlayback(),
                              (r._prebufferingAudio = !1),
                              r._audioFeeder && r._audioFeeder.flush(),
                              (r._state = I),
                              (r._seekTargetTime = e),
                              (r._seekMode = t),
                              r._codec ? r._codec.flush(i) : i();
                          };
                          i(function () {
                            r._isProcessing() || r._pingProcessing(0);
                          }),
                            this._actionQueue.push(function () {
                              i(function () {
                                r._doSeek(e);
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
                            (this._state = I),
                            (this._seekTargetTime = e),
                            (this._lastSeekPosition = -1),
                            (this._decodedFrames = []),
                            (this._pendingFrames = []),
                            (this._pendingFrame = 0),
                            (this._pendingAudio = 0),
                            (this._didSeek = !1),
                            this._codec.seekToKeypoint(e, function (r) {
                              r
                                ? ((t._seekState = D),
                                  t._fireEventAsync("seeking"),
                                  t._didSeek || t._pingProcessing())
                                : t._codec.getKeypointOffset(e, function (e) {
                                    e > 0
                                      ? ((t._seekState = D), t._seekStream(e))
                                      : ((t._seekState = U),
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
                            r = Math.max(0, this._stream.length - 65536);
                          (this._bisectTargetTime = e),
                            (this._seekBisector = new g.default({
                              start: 0,
                              end: r,
                              process: function (e, r, i) {
                                return (
                                  i != t._lastSeekPosition &&
                                  ((t._lastSeekPosition = i),
                                  t._codec.flush(function () {
                                    t._seekStream(i);
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
                          (this._seekState = L),
                            (this._state = P),
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
                            var r = this._decodedFrames.shift();
                            this._drawFrame(r.yCbCrBuffer), t();
                          } else {
                            if (this._codec.hasVideo && this._codec.frameReady)
                              return (
                                this._codec.decodeFrame(function (r) {
                                  r && e._drawFrame(e._codec.frameBuffer), t();
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
                              this._seekMode === F &&
                              this._codec.keyframeTimestamp ==
                                this._codec.frameTimestamp
                            )
                              return void this._continueSeekedPlayback();
                            if (
                              this._codec.frameTimestamp <= this._seekTargetTime
                            ) {
                              var r = this._codec.frameTimestamp;
                              return (
                                this._pendingFrame++,
                                this._pendingFrames.push({
                                  frameEndTimestamp: r,
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
                                      frameEndTimestamp: r,
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
                            r = this;
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
                                if (e) r._pingProcessing();
                                else if (r._streamEnded) {
                                  if (
                                    (r._log(
                                      "stream ended during bisection seek",
                                    ),
                                    !r._seekBisector.right())
                                  )
                                    throw (
                                      (r._log("failed going back"),
                                      Error("not sure what to do"))
                                    );
                                } else r._readBytesAndWait();
                              })
                            : t - e / 2 > this._bisectTargetTime
                              ? this._seekBisector.left() ||
                                (this._log("close enough (left)"),
                                (this._seekTargetTime = t),
                                this._continueSeekedPlayback())
                              : t + e / 2 < this._bisectTargetTime
                                ? this._seekBisector.right() ||
                                  (this._log("close enough (right)"),
                                  (this._seekState = D),
                                  this._pingProcessing())
                                : this._seekState == U &&
                                    this._codec.hasVideo &&
                                    this._codec.keyframeTimestamp <
                                      this._codec.frameTimestamp
                                  ? (this._log("finding the keypoint now"),
                                    (this._seekState = C),
                                    this._startBisection(
                                      this._codec.keyframeTimestamp,
                                    ))
                                  : (this._log("straight seeking now"),
                                    (this._seekState = D),
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
                            i.styleManager.appendRule("." + this._instanceId, {
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
                          else if (this._state == k) this._doProcessInitial();
                          else if (this._state == E)
                            this._doProcessSeekingEnd();
                          else if (this._state == A) this._doProcessLoaded();
                          else if (this._state == R) this._doProcessPreload();
                          else if (this._state == P) this._doProcessReady();
                          else if (this._state == I) this._doProcessSeeking();
                          else if (this._state == O) this._doProcessPlay();
                          else {
                            if (this._state != S)
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
                                : ((this._state = A), this._pingProcessing());
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
                                        (e._state = A),
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
                          (this._state = R),
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
                            : ((this._state = P),
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
                            var r = function () {
                              e._log("finishStartPlaying"),
                                (e._state = O),
                                (e._lastFrameTimestamp = n()),
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
                              ? r()
                              : (this._initAudioFeeder(),
                                this._audioFeeder.waitUntilReady(r));
                          }
                        },
                      },
                      {
                        key: "_doProcessSeeking",
                        value: function () {
                          if (this._seekState == L)
                            throw Error(
                              "seeking in invalid state (not seeking?)",
                            );
                          if (this._seekState == U)
                            this._doProcessBisectionSeek();
                          else if (this._seekState == C)
                            this._doProcessBisectionSeek();
                          else {
                            if (this._seekState != D)
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
                            var r,
                              i,
                              n,
                              o = null,
                              s = 0,
                              a = !1,
                              u = 0;
                            if (
                              (t.hasAudio && this._audioFeeder
                                ? ((o = this._audioFeeder.getPlaybackState()),
                                  (s = this._getPlaybackTime(o)),
                                  (a =
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
                                  o.dropped != this._droppedAudio &&
                                    this._log(
                                      "dropped " +
                                        (o.dropped - this._droppedAudio),
                                    ),
                                  o.delayed != this._delayedAudio &&
                                    this._log(
                                      "delayed " +
                                        (o.delayed - this._delayedAudio),
                                    ),
                                  (this._droppedAudio = o.dropped),
                                  (this._delayedAudio = o.delayed),
                                  (r =
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
                                        (r = !1))
                                      : (r = !1)))
                                : ((s = this._getPlaybackTime()),
                                  (r =
                                    this._codec.audioReady &&
                                    this._audioEndTimestamp < s)),
                              this._codec.hasVideo)
                            ) {
                              (i = this._decodedFrames.length > 0),
                                (n =
                                  this._pendingFrame +
                                    this._decodedFrames.length <
                                    this._framePipelineDepth +
                                      this._frameParallelism &&
                                  this._codec.frameReady),
                                i &&
                                  ((u =
                                    1e3 *
                                    (this._decodedFrames[0].frameEndTimestamp -
                                      s)),
                                  (this._actualPerFrameTime =
                                    this._targetPerFrameTime - u));
                              var c = this._targetPerFrameTime;
                              if (this._prebufferingAudio)
                                n &&
                                  this._log(
                                    "decoding a frame during prebuffering",
                                  ),
                                  (i = !1);
                              else if (i && this._dataEnded && a)
                                this._log(
                                  "audio timeline ended? ready to draw frame",
                                );
                              else if (i && -u >= c) {
                                for (
                                  var d = -1, l = 0;
                                  l < this._decodedFrames.length - 1;
                                  l++
                                )
                                  this._decodedFrames[l].frameEndTimestamp <
                                    s && (d = l - 1);
                                if (d >= 0)
                                  for (; d-- >= 0; ) {
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
                                    var m = 0;
                                    m < this._decodedFrames.length;
                                    m++
                                  ) {
                                    var g = this._decodedFrames[m];
                                    this._lateFrames++,
                                      this._framesProcessed++,
                                      (this._frameEndTimestamp =
                                        g.frameEndTimestamp),
                                      (u = 1e3 * (g.frameEndTimestamp - s)),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - u),
                                      (g.dropped = !0),
                                      this._doFrameComplete(g);
                                  }
                                  this._decodedFrames = [];
                                  for (
                                    var _ = 0;
                                    _ < this._pendingFrames.length;
                                    _++
                                  ) {
                                    var b = this._pendingFrames[_];
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
                              } else (i && u <= 4) || (i = !1);
                            }
                            if (n) {
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
                                V = !1,
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
                                            e._pingProcessing(V ? void 0 : 0);
                                        }))
                                      : e._log(
                                          "play loop callback after flush, discarding",
                                        );
                                  });
                                });
                              this._pendingFrame &&
                                ((V = !0),
                                (this._proxyTime += x),
                                this._pingProcessing(),
                                this._dataEnded && this._codec.sync());
                            } else if (r) {
                              this._log(
                                "play loop: ready for audio; depth: " +
                                  this._pendingAudio,
                              ),
                                this._pendingAudio++;
                              var T = this._codec.audioTimestamp,
                                k = this._time(function () {
                                  e._codec.decodeAudio(function (t) {
                                    if (
                                      (e._pendingAudio--,
                                      e._log(
                                        "play loop callback: decoded audio",
                                      ),
                                      (e._audioEndTimestamp = T),
                                      t)
                                    ) {
                                      var r = e._codec.audioBuffer;
                                      if (
                                        r &&
                                        ((e._bufferTime += e._time(function () {
                                          e._audioFeeder &&
                                            e._audioFeeder.bufferData(r);
                                        })),
                                        !e._codec.hasVideo)
                                      ) {
                                        e._framesProcessed++;
                                        var i = {
                                          frameEndTimestamp:
                                            e._audioEndTimestamp,
                                        };
                                        e._doFrameComplete(i);
                                      }
                                    }
                                    e._isProcessing() || e._pingProcessing();
                                  });
                                });
                              this._pendingAudio &&
                                ((this._proxyTime += k),
                                this._codec.audioReady
                                  ? this._pingProcessing()
                                  : this._doProcessPlayDemux());
                            } else if (i) {
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
                                var A = 0;
                                this._codec.hasAudio &&
                                  this._audioFeeder &&
                                  (A =
                                    1e3 * this._audioFeeder.durationBuffered),
                                  A > 0
                                    ? (this._log(
                                        "play loop: ending pending " +
                                          A +
                                          " ms",
                                      ),
                                      this._pingProcessing(Math.max(0, A)))
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
                              var R = u;
                              this._log(
                                "play loop: setting a timer for drawing " + R,
                              ),
                                (this._nextFrameTimer = setTimeout(function () {
                                  (e._nextFrameTimer = null),
                                    e._pingProcessing();
                                }, R));
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
                            r = this._codec.audioReady;
                          this._codec.process(function (i) {
                            (e._codec.frameReady && !t) ||
                            (e._codec.audioReady && !r)
                              ? (e._log("demuxer has packets"),
                                e._pingProcessing())
                              : i
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
                            var r = {
                              base: this._options.base,
                              worker: this._enableWorker,
                              threading: this._enableThreading,
                              simd: this._enableSIMD,
                            };
                            this._detectedType && (r.type = this._detectedType),
                              (this._codec = new w.default(r)),
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
                          this._stream.read(1024).then(function (r) {
                            var i = new Uint8Array(r);
                            i.length > 4 &&
                            79 == i[0] &&
                            103 == i[1] &&
                            103 == i[2] &&
                            83 == i[3]
                              ? (t._detectedType = "video/ogg")
                              : i.length > 4 &&
                                  26 == i[0] &&
                                  69 == i[1] &&
                                  223 == i[2] &&
                                  163 == i[3]
                                ? (t._detectedType = "video/webm")
                                : (t._detectedType = "video/ogg"),
                              e(r);
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
                          function r(e) {
                            if (t.codecs) {
                              var r = 0,
                                i = 0;
                              return (
                                t.codecs.forEach(function (t) {
                                  e.indexOf(t) >= 0 ? r++ : i++;
                                }),
                                0 === r || i > 0 ? "" : "probably"
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
                              : r(["vorbis", "opus", "vp8", "vp9"])
                            : r(["vorbis", "opus", "theora"]);
                        },
                      },
                      {
                        key: "play",
                        value: function () {
                          this._muted ||
                            this._options.audioContext ||
                            i.initSharedAudioContext(),
                            this._paused &&
                              ((this._startedPlaybackInDocument =
                                document.body.contains(this)),
                              (this._paused = !1),
                              this._state == I ||
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
                                    (this._state = P),
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
                          this._seek(+e, F);
                        },
                      },
                    ],
                    [
                      {
                        key: "initSharedAudioContext",
                        value: function () {
                          var e = document.createElement("audio");
                          (e.src = V.default),
                            e.play(),
                            p.default.initSharedAudioContext();
                        },
                      },
                    ],
                  ),
                  i
                );
              })(M);
              (0, _.default)(j, T),
                (j.instanceCount = 0),
                (j.styleManager = new (function () {
                  var e = document.createElement("style");
                  (e.type = "text/css"),
                    (e.textContent =
                      "ogvjs { display: inline-block; position: relative; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); "),
                    document.head.appendChild(e);
                  var t = e.sheet;
                  this.appendRule = function (e, r) {
                    var i = [];
                    for (var n in r)
                      r.hasOwnProperty(n) && i.push(n + ":" + r[n]);
                    var o = e + "{" + i.join(";") + "}";
                    t.insertRule(o, t.cssRules.length - 1);
                  };
                })()),
                (t.default = j);
            },
            580: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(575)),
                o = i(r(913));
              t.default = function (e) {
                function t(r, i, o) {
                  var s = this;
                  for (var a in ((0, n.default)(this, t),
                  (o = o || {}),
                  (this.worker = r),
                  (this.transferables = (function () {
                    var e = new ArrayBuffer(1024),
                      t = new Uint8Array(e);
                    try {
                      return (
                        r.postMessage({ action: "transferTest", bytes: t }, [
                          e,
                        ]),
                        !e.byteLength
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  e))
                    e.hasOwnProperty(a) && (this[a] = e[a]);
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
                    this.proxy("construct", [i, o], function () {});
                }
                return (
                  (0, o.default)(t, [
                    {
                      key: "proxy",
                      value: function (e, t, r) {
                        var i =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : [];
                        if (!this.worker)
                          throw (
                            'Tried to call "' +
                            e +
                            '" method on closed proxy object'
                          );
                        var n = "callback-" + ++this.messageCount + "-" + e;
                        r && (this.pendingCallbacks[n] = r);
                        var o = { action: e, callbackId: n, args: t || [] };
                        this.processingQueue++,
                          this.transferables
                            ? this.worker.postMessage(o, i)
                            : this.worker.postMessage(o);
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
                            r = t.callbackId,
                            i = t.args,
                            n = this.pendingCallbacks[r];
                          if (t.props)
                            for (var o in t.props)
                              t.props.hasOwnProperty(o) &&
                                (this[o] = t.props[o]);
                          n &&
                            (delete this.pendingCallbacks[r], n.apply(this, i));
                        }
                      },
                    },
                  ]),
                  t
                );
              };
            },
            168: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(575)),
                o = i(r(913));
              t.default = (function () {
                function e(t) {
                  (0, n.default)(this, e),
                    (this._ranges = t),
                    (this.length = t.length);
                }
                return (
                  (0, o.default)(e, [
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
            625: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(575)),
                o = i(r(913)),
                s = i(r(964));
              function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
                return i;
              }
              t.default = (function () {
                function e(t) {
                  return (
                    (0, n.default)(this, e),
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
                  (0, o.default)(e, [
                    {
                      key: "flushSafe",
                      value: function (e) {
                        var t = this,
                          r = this.flushIter;
                        return function (i) {
                          t.flushIter <= r && e(i);
                        };
                      },
                    },
                    {
                      key: "init",
                      value: function (e) {
                        var t,
                          r = this;
                        (this.processing = !0),
                          (t =
                            "video/webm" === this.options.type ||
                            "audio/webm" === this.options.type
                              ? "OGVDemuxerWebMW"
                              : "OGVDemuxerOggW"),
                          s.default.loadClass(t, function (t) {
                            t().then(function (t) {
                              (r.demuxer = t),
                                (t.onseek = function (e) {
                                  r.onseek && r.onseek(e);
                                }),
                                t.init(function () {
                                  (r.processing = !1), e();
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
                        var r = function (r) {
                            (t.processing = !1), e(r);
                          },
                          i = function () {
                            t.demuxer.process(r);
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
                                  r(!0);
                              });
                            })
                          : this.loadedDemuxerMetadata &&
                              !this.loadedAudioMetadata
                            ? this.audioDecoder.loadedMetadata
                              ? ((this.loadedAudioMetadata = !0),
                                (this.loadedAllMetadata =
                                  this.loadedAudioMetadata &&
                                  this.loadedVideoMetadata),
                                r(!0))
                              : this.demuxer.audioReady
                                ? this.demuxer.dequeueAudioPacket(
                                    function (e, i) {
                                      (t.audioBytes += e.byteLength),
                                        t.audioDecoder.processHeader(
                                          e,
                                          function (e) {
                                            r(!0);
                                          },
                                        );
                                    },
                                  )
                                : i()
                            : this.loadedAudioMetadata &&
                                !this.loadedVideoMetadata
                              ? this.videoDecoder.loadedMetadata
                                ? ((this.loadedVideoMetadata = !0),
                                  (this.loadedAllMetadata =
                                    this.loadedAudioMetadata &&
                                    this.loadedVideoMetadata),
                                  r(!0))
                                : this.demuxer.frameReady
                                  ? ((this.processing = !0),
                                    this.demuxer.dequeueVideoPacket(
                                      function (e) {
                                        (t.videoBytes += e.byteLength),
                                          t.videoDecoder.processHeader(
                                            e,
                                            function () {
                                              r(!0);
                                            },
                                          );
                                      },
                                    ))
                                  : i()
                              : this.loadedVideoMetadata &&
                                  !this.loadedMetadata &&
                                  this.loadedAllMetadata
                                ? ((this.loadedMetadata = !0), r(!0))
                                : this.loadedMetadata &&
                                    (!this.hasAudio ||
                                      this.demuxer.audioReady) &&
                                    (!this.hasVideo || this.demuxer.frameReady)
                                  ? r(!0)
                                  : i();
                      },
                    },
                    {
                      key: "decodeFrame",
                      value: function (e) {
                        var t = this,
                          r = this.flushSafe(e),
                          i = this.frameTimestamp,
                          n = this.keyframeTimestamp;
                        this.demuxer.dequeueVideoPacket(function (e) {
                          (t.videoBytes += e.byteLength),
                            t.videoDecoder.processFrame(e, function (e) {
                              var o = t.videoDecoder.frameBuffer;
                              o &&
                                ((o.timestamp = i), (o.keyframeTimestamp = n)),
                                r(e);
                            });
                        });
                      },
                    },
                    {
                      key: "decodeAudio",
                      value: function (e) {
                        var t = this,
                          r = this.flushSafe(e);
                        this.demuxer.dequeueAudioPacket(function (e, i) {
                          (t.audioBytes += e.byteLength),
                            t.audioDecoder.processAudio(e, function (e) {
                              if (i) {
                                var n,
                                  o = [],
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
                                              return a(e, void 0);
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
                                              return a(e, void 0);
                                          }
                                        })(e))
                                      ) {
                                        t && (e = t);
                                        var r = 0,
                                          i = function () {};
                                        return {
                                          s: i,
                                          n: function () {
                                            return r >= e.length
                                              ? { done: !0 }
                                              : { done: !1, value: e[r++] };
                                          },
                                          e: function (e) {
                                            throw e;
                                          },
                                          f: i,
                                        };
                                      }
                                      throw TypeError(
                                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                      );
                                    }
                                    var n,
                                      o = !0,
                                      s = !1;
                                    return {
                                      s: function () {
                                        t = t.call(e);
                                      },
                                      n: function () {
                                        var e = t.next();
                                        return (o = e.done), e;
                                      },
                                      e: function (e) {
                                        (s = !0), (n = e);
                                      },
                                      f: function () {
                                        try {
                                          o || null == t.return || t.return();
                                        } finally {
                                          if (s) throw n;
                                        }
                                      },
                                    };
                                  })(t.audioDecoder.audioBuffer);
                                try {
                                  for (s.s(); !(n = s.n()).done; ) {
                                    var u = n.value,
                                      c = Math.round(
                                        (i * t.audioFormat.rate) / 1e9,
                                      );
                                    c > 0
                                      ? o.push(
                                          u.subarray(
                                            0,
                                            u.length - Math.min(c, u.length),
                                          ),
                                        )
                                      : o.push(
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
                                t.audioDecoder.audioBuffer = o;
                              }
                              return r(e);
                            });
                        });
                      },
                    },
                    {
                      key: "discardFrame",
                      value: function (e) {
                        var t = this;
                        this.demuxer.dequeueVideoPacket(function (r) {
                          (t.videoBytes += r.byteLength), e();
                        });
                      },
                    },
                    {
                      key: "discardAudio",
                      value: function (e) {
                        var t = this;
                        this.demuxer.dequeueAudioPacket(function (r, i) {
                          (t.audioBytes += r.byteLength), e();
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
                          var r = {
                            vorbis: "OGVDecoderAudioVorbisW",
                            opus: "OGVDecoderAudioOpusW",
                          }[this.demuxer.audioCodec];
                          (this.processing = !0),
                            s.default.loadClass(
                              r,
                              function (r) {
                                var i = {};
                                t.demuxer.audioFormat &&
                                  (i.audioFormat = t.demuxer.audioFormat),
                                  r(i).then(function (r) {
                                    (t.audioDecoder = r),
                                      r.init(function () {
                                        (t.loadedAudioMetadata =
                                          r.loadedMetadata),
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
                          var r = !!this.options.simd,
                            i = !!this.options.threading,
                            n = {
                              theora: "OGVDecoderVideoTheoraW",
                              vp8: i
                                ? "OGVDecoderVideoVP8MTW"
                                : "OGVDecoderVideoVP8W",
                              vp9: i
                                ? r
                                  ? "OGVDecoderVideoVP9SIMDMTW"
                                  : "OGVDecoderVideoVP9MTW"
                                : r
                                  ? "OGVDecoderVideoVP9SIMDW"
                                  : "OGVDecoderVideoVP9W",
                              av1: i
                                ? r
                                  ? "OGVDecoderVideoAV1SIMDMTW"
                                  : "OGVDecoderVideoAV1MTW"
                                : r
                                  ? "OGVDecoderVideoAV1SIMDW"
                                  : "OGVDecoderVideoAV1W",
                            }[this.demuxer.videoCodec];
                          (this.processing = !0),
                            s.default.loadClass(
                              n,
                              function (r) {
                                var n = {};
                                t.demuxer.videoFormat &&
                                  (n.videoFormat = t.demuxer.videoFormat),
                                  i && delete window.ENVIRONMENT_IS_PTHREAD,
                                  r(n).then(function (r) {
                                    (t.videoDecoder = r),
                                      r.init(function () {
                                        (t.loadedVideoMetadata =
                                          r.loadedMetadata),
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
            539: (e, t, r) => {
              "use strict";
              var i = r(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var n = i(r(8)),
                o = i(r(575)),
                s = i(r(913));
              t.default = new ((function () {
                function e() {
                  (0, o.default)(this, e),
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
                              : (0, n.default)(WebAssembly))
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
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                });
            },
            431: (e, t, r) => {
              "use strict";
              var i = (function () {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var i = t[r];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                    }
                  }
                  return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t;
                  };
                })(),
                n = function e(t, r, i) {
                  null === t && (t = Function.prototype);
                  var n = Object.getOwnPropertyDescriptor(t, r);
                  if (void 0 === n) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, r, i);
                  }
                  if ("value" in n) return n.value;
                  var s = n.get;
                  return void 0 !== s ? s.call(i) : void 0;
                },
                o = r(828),
                s = "arraybuffer",
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
                    i(t, [
                      {
                        key: "initXHR",
                        value: function () {
                          n(
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
                            n(
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
                })(o);
              (a.supported = function () {
                try {
                  var e = new XMLHttpRequest();
                  return (e.responseType = s), e.responseType === s;
                } catch (e) {
                  return !1;
                }
              }),
                (e.exports = a);
            },
            306: (e, t, r) => {
              "use strict";
              var i = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, r, i) {
                  return r && e(t.prototype, r), i && e(t, i), t;
                };
              })();
              function n(e) {
                var t = e.getResponseHeader("Content-Range");
                return t && t.match(/^bytes (\d+)-(\d+)\/(\d+)/);
              }
              e.exports = (function (e) {
                function t(e) {
                  var r = e.url,
                    i = e.offset,
                    n = e.length,
                    o = e.cachever;
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
                    (s.url = r),
                    (s.offset = i),
                    (s.length = n),
                    (s.cachever = void 0 === o ? 0 : o),
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
                  i(t, [
                    {
                      key: "load",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, r) {
                          var i = null;
                          e._onAbort = function (e) {
                            i(), r(e);
                          };
                          var o = function () {
                              if (2 == e.xhr.readyState) {
                                if (206 == e.xhr.status) {
                                  var o,
                                    s,
                                    a,
                                    u = (a = n(e.xhr)) ? parseInt(a[1], 10) : 0;
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
                                      i(),
                                      void e.load().then(t).catch(r)
                                    );
                                  e.seekable = !0;
                                }
                                e.xhr.status >= 200 && e.xhr.status < 300
                                  ? ((e.length = (function (e) {
                                      if (206 == e.status) {
                                        var t;
                                        return (t = n(e))
                                          ? parseInt(t[3], 10)
                                          : -1;
                                      }
                                      var r =
                                        e.getResponseHeader("Content-Length");
                                      return null === r || "" === r
                                        ? -1
                                        : parseInt(r, 10);
                                    })(e.xhr)),
                                    (o = e.xhr),
                                    (s = {}),
                                    o
                                      .getAllResponseHeaders()
                                      .split(/\r?\n/)
                                      .forEach(function (e) {
                                        var t = e.split(/:\s*/, 2);
                                        t.length > 1 &&
                                          (s[t[0].toLowerCase()] = t[1]);
                                      }),
                                    (e.headers = s),
                                    e.onXHRStart())
                                  : (i(),
                                    r(Error("HTTP error " + e.xhr.status)));
                              }
                            },
                            s = function () {
                              i(), r(Error("network error"));
                            },
                            a = function () {
                              i(), t();
                            };
                          (i = function () {
                            e.xhr.removeEventListener("readystatechange", o),
                              e.xhr.removeEventListener("error", s),
                              e.off("open", a),
                              (e._onAbort = null);
                          }),
                            e.initXHR(),
                            e.xhr.addEventListener("readystatechange", o),
                            e.xhr.addEventListener("error", s),
                            e.on("open", a),
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
              })(r(566));
            },
            810: (e, t, r) => {
              "use strict";
              var i = (function () {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var i = t[r];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                    }
                  }
                  return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t;
                  };
                })(),
                n = function e(t, r, i) {
                  null === t && (t = Function.prototype);
                  var n = Object.getOwnPropertyDescriptor(t, r);
                  if (void 0 === n) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, r, i);
                  }
                  if ("value" in n) return n.value;
                  var s = n.get;
                  return void 0 !== s ? s.call(i) : void 0;
                },
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
                    i(t, [
                      {
                        key: "initXHR",
                        value: function () {
                          n(
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
                            n(
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
                })(r(828));
              (o.supported = function () {
                try {
                  return !!new XMLHttpRequest().overrideMimeType;
                } catch (e) {
                  return !1;
                }
              }),
                (e.exports = o);
            },
            828: (e, t, r) => {
              "use strict";
              var i = (function () {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var i = t[r];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                    }
                  }
                  return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t;
                  };
                })(),
                n = function e(t, r, i) {
                  null === t && (t = Function.prototype);
                  var n = Object.getOwnPropertyDescriptor(t, r);
                  if (void 0 === n) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, r, i);
                  }
                  if ("value" in n) return n.value;
                  var s = n.get;
                  return void 0 !== s ? s.call(i) : void 0;
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
                  i(t, [
                    {
                      key: "bufferToOffset",
                      value: function (e) {
                        var t = this;
                        return new Promise(function (r, i) {
                          if (t.eof || t.offset >= e) r();
                          else {
                            var n = null;
                            t._onAbort = function (e) {
                              n(), i(e);
                            };
                            var o = function () {
                                t.offset >= e && !t.eof && (n(), r());
                              },
                              s = function () {
                                n(), r();
                              },
                              a = function () {
                                n(), i(Error("error streaming"));
                              };
                            (n = function () {
                              (t.buffering = !1),
                                t.off("buffer", o),
                                t.off("done", s),
                                t.off("error", a),
                                (t._onAbort = null);
                            }),
                              (t.buffering = !0),
                              t.on("buffer", o),
                              t.on("done", s),
                              t.on("error", a);
                          }
                        });
                      },
                    },
                    {
                      key: "initXHR",
                      value: function () {
                        n(
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
              })(r(306));
            },
            761: (e, t, r) => {
              "use strict";
              var i = r(855),
                n = r(810),
                o = r(431),
                s = null;
              e.exports = function (e) {
                if (!1 === e.progressive) return new o(e);
                if (
                  (s || (s = i.supported() ? i : n.supported() ? n : null), !s)
                )
                  throw Error("No supported backend class");
                return new s(e);
              };
            },
            855: (e, t, r) => {
              "use strict";
              var i = (function () {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var i = t[r];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                    }
                  }
                  return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t;
                  };
                })(),
                n = function e(t, r, i) {
                  null === t && (t = Function.prototype);
                  var n = Object.getOwnPropertyDescriptor(t, r);
                  if (void 0 === n) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, r, i);
                  }
                  if ("value" in n) return n.value;
                  var s = n.get;
                  return void 0 !== s ? s.call(i) : void 0;
                },
                o = r(828),
                s = "moz-chunked-arraybuffer",
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
                    i(t, [
                      {
                        key: "initXHR",
                        value: function () {
                          n(
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
                })(o);
              (a.supported = function () {
                try {
                  var e = new XMLHttpRequest();
                  return (e.responseType = s), e.responseType === s;
                } catch (e) {
                  return !1;
                }
              }),
                (e.exports = a);
            },
            503: (e) => {
              "use strict";
              var t = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, r, i) {
                  return r && e(t.prototype, r), i && e(t, i), t;
                };
              })();
              e.exports = (function () {
                function e() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = t.buffer,
                    i = void 0 === r ? void 0 : r,
                    n = t.string,
                    o = void 0 === n ? void 0 : n,
                    s = t.start,
                    a = void 0 === s ? 0 : s,
                    u = t.end,
                    c =
                      void 0 === u
                        ? a + (i ? i.byteLength : o ? o.length : 0)
                        : u,
                    d = t.prev,
                    l = t.next,
                    h = t.eof,
                    f = t.empty,
                    p = void 0 === f ? !(i || o) : f,
                    m = t.timestamp,
                    g = void 0 === m ? Date.now() : m;
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.start = a),
                    (this.end = c),
                    (this.prev = void 0 === d ? null : d),
                    (this.next = void 0 === l ? null : l),
                    (this.eof = void 0 !== h && h),
                    (this.empty = p),
                    (this.timestamp = g),
                    (this.buffer = i),
                    (this.string = o),
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
                      value: function (e, t, r) {
                        var i = t - this.start,
                          n = r - t;
                        if (this.buffer) {
                          var o = new Uint8Array(this.buffer, i, n);
                          e.set(o);
                        } else {
                          if (!this.string) throw Error("invalid state");
                          for (var s = this.string, a = 0; a < n; a++)
                            e[a] = s.charCodeAt(i + a);
                        }
                        this.timestamp = Date.now();
                      },
                    },
                    {
                      key: "split",
                      value: function (t) {
                        if (!this.empty || !this.contains(t))
                          throw Error("invalid split");
                        var r = new e({ start: this.start, end: t }),
                          i = new e({
                            start: t,
                            end: this.eof ? t : this.end,
                            eof: this.eof,
                          });
                        return (r.next = i), (i.prev = r), [r, i];
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
                        for (var t = null, r = this; r && e(r); r = r.next)
                          t = r;
                        return t;
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            91: (e, t, r) => {
              "use strict";
              var i = (function () {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var i = t[r];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                    }
                  }
                  return function (t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t;
                  };
                })(),
                n = r(503);
              e.exports = (function () {
                function e() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = t.cacheSize;
                  if (!(this instanceof e))
                    throw TypeError("Cannot call a class as a function");
                  var i = new n({ eof: !0 });
                  (this.head = i),
                    (this.tail = i),
                    (this.readOffset = 0),
                    (this.readCursor = i),
                    (this.writeOffset = 0),
                    (this.writeCursor = i),
                    (this.cacheSize = void 0 === r ? 0 : r);
                }
                return (
                  i(e, [
                    {
                      key: "bytesReadable",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 1 / 0,
                          t = this.readOffset,
                          r = this.readCursor.last(function (r) {
                            return !r.empty && r.start <= t + e;
                          });
                        return r ? Math.min(e, r.end - t) : 0;
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
                          r = this.writeCursor;
                        if (r.eof) return e;
                        var i = r.last(function (r) {
                          return r.empty && r.start <= t + e;
                        });
                        return i ? Math.min(e, i.end - t) : 0;
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
                            r = this.bytesReadable(t),
                            i = this.readOffset,
                            n = i + r,
                            o = i,
                            s = this.readCursor;
                          s && !s.empty && !(s.start >= n);
                          s = s.next
                        ) {
                          var a = Math.min(n, s.end),
                            u = e.subarray(o - i, a - i);
                          s.readBytes(u, o, a), (o = a);
                        }
                        return (
                          (this.readOffset = o),
                          (this.readCursor = this.readCursor.first(
                            function (e) {
                              return e.contains(o);
                            },
                          )),
                          r
                        );
                      },
                    },
                    {
                      key: "write",
                      value: function (e) {
                        var t = this.bufferItem(e),
                          r = this.writeCursor;
                        if (!r.empty) throw Error("write cursor not empty");
                        if (!r.contains(t.end) && r.end !== t.end)
                          throw Error("write cursor too small");
                        r.start < t.start &&
                          (this.split(r, t.start), (r = this.writeCursor)),
                          (t.end < r.end || r.eof) &&
                            (this.split(r, t.end), (r = this.writeCursor)),
                          this.splice(r, r, t, t),
                          (this.writeOffset = t.end),
                          (this.writeCursor = t.next),
                          this.gc();
                      },
                    },
                    {
                      key: "bufferItem",
                      value: function (e) {
                        if (e instanceof ArrayBuffer)
                          return new n({
                            start: this.writeOffset,
                            end: this.writeOffset + e.byteLength,
                            buffer: e,
                          });
                        if ("string" == typeof e)
                          return new n({
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
                        var r = e.split(t);
                        this.splice(e, e, r[0], r[1]);
                      },
                    },
                    {
                      key: "ranges",
                      value: function () {
                        for (var e = [], t = this.head; t; t = t.next)
                          if (!t.empty) {
                            var r = t;
                            (t = t.last(function (e) {
                              return !e.empty;
                            })),
                              e.push([r.start, t.end]);
                          }
                        return e;
                      },
                    },
                    {
                      key: "gc",
                      value: function () {
                        for (var e = 0, t = [], r = this.head; r; r = r.next)
                          r.empty ||
                            ((e += r.length),
                            (r.end < this.readOffset ||
                              r.start > this.readOffset + this.chunkSize) &&
                              t.push(r));
                        if (e > this.cacheSize) {
                          t.sort(function (e, t) {
                            return e.timestamp - t.timestamp;
                          });
                          for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            if (e <= this.cacheSize) break;
                            this.remove(n), (e -= n.length);
                          }
                        }
                      },
                    },
                    {
                      key: "remove",
                      value: function (e) {
                        var t = new n({ start: e.start, end: e.end });
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
                          r = new n({ start: e.start, end: t.end });
                        return this.splice(e, t, r, r), r;
                      },
                    },
                    {
                      key: "splice",
                      value: function (e, t, r, i) {
                        var n = this;
                        if (e.start !== r.start)
                          throw Error("invalid splice head");
                        if (!(t.end === i.end || (t.eof && i.eof)))
                          throw Error("invalid splice tail");
                        var o = e.prev,
                          s = t.next;
                        (e.prev = null),
                          (t.next = null),
                          o && ((o.next = r), (r.prev = o)),
                          s && ((s.prev = i), (i.next = s)),
                          e === this.head && (this.head = r),
                          t === this.tail && (this.tail = i),
                          (this.readCursor = this.head.first(function (e) {
                            return e.contains(n.readOffset);
                          })),
                          (this.writeCursor = this.head.first(function (e) {
                            return e.contains(n.writeOffset);
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
            814: (e, t, r) => {
              "use strict";
              e.exports = r(91);
            },
            566: (e) => {
              "use strict";
              var t = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, r, i) {
                  return r && e(t.prototype, r), i && e(t, i), t;
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
                        var r = this._e[e] || [],
                          i = r.indexOf(t);
                        t >= 0 && r.splice(i, 1);
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
            936: (e, t, r) => {
              "use strict";
              var i = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, r, i) {
                  return r && e(t.prototype, r), i && e(t, i), t;
                };
              })();
              r(566);
              var n = r(814),
                o = r(761);
              e.exports = (function () {
                function e(t) {
                  var r = t.url,
                    i = t.chunkSize,
                    o = t.cacheSize,
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
                    (this.url = void 0 === r ? "" : r),
                    (this.headers = {}),
                    (this._cache = new n({ cacheSize: void 0 === o ? 0 : o })),
                    (this._backend = null),
                    (this._cachever = 0),
                    (this._chunkSize = void 0 === i ? 1048576 : i);
                }
                return (
                  i(e, [
                    {
                      key: "load",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, r) {
                          if (e.loading)
                            throw Error("cannot load when loading");
                          if (e.loaded) throw Error("cannot load when loaded");
                          (e.loading = !0),
                            e
                              ._openBackend()
                              .then(function (r) {
                                (e.seekable = r.seekable),
                                  (e.headers = r.headers),
                                  (e.length = r.length),
                                  (e.loaded = !0),
                                  (e.loading = !1),
                                  t();
                              })
                              .catch(function (t) {
                                "AbortError" !== t.name && (e.loading = !1),
                                  r(t);
                              });
                        });
                      },
                    },
                    {
                      key: "_openBackend",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, r) {
                          if (e._backend) t(e._backend);
                          else if (e.eof)
                            r(Error("cannot open at end of file"));
                          else {
                            var i = e._cache,
                              n = e._chunkSize,
                              s = i.bytesReadable(n),
                              a = i.readOffset + s;
                            if (
                              (i.seekWrite(a), e.length >= 0 && a >= e.length)
                            )
                              return void t(null);
                            var u =
                              e._clampToLength(
                                i.writeOffset + i.bytesWritable(n),
                              ) - i.writeOffset;
                            if (0 === u) t(null);
                            else {
                              var c = (e._backend = new o({
                                  url: e.url,
                                  offset: e._cache.writeOffset,
                                  length: u,
                                  cachever: e._cachever,
                                  progressive: e.progressive,
                                })),
                                d = null,
                                l = function () {
                                  c !== e._backend
                                    ? (d(), r(Error("invalid state")))
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
                                    ? r(Error("invalid state"))
                                    : ((e._backend = null), r(t));
                                };
                              (d = function () {
                                c.off("open", l), c.off("error", h);
                              }),
                                c.on("open", l),
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
                        return new Promise(function (t, r) {
                          e._backend || e.eof
                            ? t()
                            : e
                                ._openBackend()
                                .then(function () {
                                  t();
                                })
                                .catch(function (e) {
                                  r(e);
                                });
                        });
                      },
                    },
                    {
                      key: "seek",
                      value: function (e) {
                        var t = this;
                        return new Promise(function (r, i) {
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
                            t._readAhead().then(r).catch(i);
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
                          r = new Uint8Array(t);
                        if (this.readBytes(r) !== t)
                          throw Error("failed to read expected data");
                        return r.buffer;
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
                        return new Promise(function (r, i) {
                          if (!t.loaded || t.buffering || t.seeking)
                            throw Error("invalid state");
                          if (e !== (0 | e) || e < 0)
                            throw Error("invalid input");
                          var n = t._clampToLength(t.offset + e),
                            o = n - t.offset,
                            s = t.bytesAvailable(o);
                          s >= o
                            ? r(s)
                            : ((t.buffering = !0),
                              t
                                ._openBackend()
                                .then(function (r) {
                                  return r
                                    ? r.bufferToOffset(n).then(function () {
                                        return (t.buffering = !1), t.buffer(e);
                                      })
                                    : Promise.resolve(s);
                                })
                                .then(function (e) {
                                  (t.buffering = !1), r(e);
                                })
                                .catch(function (e) {
                                  "AbortError" !== e.name && (t.buffering = !1),
                                    i(e);
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
            302: (e, t, r) => {
              "use strict";
              r.r(t), r.d(t, { default: () => i });
              let i =
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
            926: (e, t, r) => {
              !(function () {
                "use strict";
                var t = r(487),
                  i = r(627);
                function n(e) {
                  var t = e.getContext("2d"),
                    r = null,
                    n = null,
                    o = null;
                  return (
                    (this.drawFrame = function (s) {
                      var a,
                        u,
                        c = s.format;
                      (e.width === c.displayWidth &&
                        e.height === c.displayHeight) ||
                        ((e.width = c.displayWidth),
                        (e.height = c.displayHeight)),
                        (null !== r &&
                          r.width == c.width &&
                          r.height == c.height) ||
                          (function (e, i) {
                            for (
                              var n = (r = t.createImageData(e, i)).data,
                                o = e * i * 4,
                                s = 0;
                              s < o;
                              s += 4
                            )
                              n[s + 3] = 255;
                          })(c.width, c.height),
                        i.convertYCbCr(s, r.data);
                      var d,
                        l =
                          c.cropWidth != c.displayWidth ||
                          c.cropHeight != c.displayHeight;
                      l
                        ? (n ||
                            ((a = c.cropWidth),
                            (u = c.cropHeight),
                            ((n = document.createElement("canvas")).width = a),
                            (n.height = u),
                            (o = n.getContext("2d"))),
                          (d = o))
                        : (d = t),
                        d.putImageData(
                          r,
                          -c.cropLeft,
                          -c.cropTop,
                          c.cropLeft,
                          c.cropTop,
                          c.cropWidth,
                          c.cropHeight,
                        ),
                        l &&
                          t.drawImage(n, 0, 0, c.displayWidth, c.displayHeight);
                    }),
                    (this.clear = function () {
                      t.clearRect(0, 0, e.width, e.height);
                    }),
                    this
                  );
                }
                (n.prototype = Object.create(t.prototype)), (e.exports = n);
              })();
            },
            895: (e, t, r) => {
              !(function () {
                "use strict";
                var t = r(487),
                  i = r(826);
                function n(e) {
                  var t,
                    r,
                    o = this,
                    s = n.contextForCanvas(e);
                  if (null === s) throw Error("WebGL unavailable");
                  function a(e, t) {
                    var r = s.createShader(e);
                    if (
                      (s.shaderSource(r, t),
                      s.compileShader(r),
                      !s.getShaderParameter(r, s.COMPILE_STATUS))
                    ) {
                      var i = s.getShaderInfoLog(r);
                      throw (
                        (s.deleteShader(r),
                        Error(
                          "GL shader compilation for " + e + " failed: " + i,
                        ))
                      );
                    }
                    return r;
                  }
                  var u,
                    c,
                    d,
                    l,
                    h,
                    f,
                    p,
                    m,
                    g,
                    _,
                    b = new Float32Array([
                      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
                    ]),
                    v = {},
                    y = {},
                    w = {};
                  function V(e, t) {
                    return (v[e] && !t) || (v[e] = s.createTexture()), v[e];
                  }
                  function x(e, t, r, i, o) {
                    var a = !v[e] || t,
                      u = V(e, t);
                    if ((s.activeTexture(s.TEXTURE0), n.stripe)) {
                      var c = !v[e + "_temp"] || t,
                        d = V(e + "_temp", t);
                      s.bindTexture(s.TEXTURE_2D, d),
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
                              r / 4,
                              i,
                              0,
                              s.RGBA,
                              s.UNSIGNED_BYTE,
                              o,
                            ))
                          : s.texSubImage2D(
                              s.TEXTURE_2D,
                              0,
                              0,
                              0,
                              r / 4,
                              i,
                              s.RGBA,
                              s.UNSIGNED_BYTE,
                              o,
                            );
                      var l = v[e + "_stripe"],
                        h = !l || t;
                      h && (l = V(e + "_stripe", t)),
                        s.bindTexture(s.TEXTURE_2D, l),
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
                            r,
                            1,
                            0,
                            s.RGBA,
                            s.UNSIGNED_BYTE,
                            (function (e) {
                              if (w[e]) return w[e];
                              for (
                                var t = new Uint32Array(e), r = 0;
                                r < e;
                                r += 4
                              )
                                (t[r] = 255),
                                  (t[r + 1] = 65280),
                                  (t[r + 2] = 0xff0000),
                                  (t[r + 3] = 0xff000000);
                              return (w[e] = new Uint8Array(t.buffer));
                            })(r),
                          ));
                    } else
                      s.bindTexture(s.TEXTURE_2D, u),
                        a
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
                              r,
                              i,
                              0,
                              s.ALPHA,
                              s.UNSIGNED_BYTE,
                              o,
                            ))
                          : s.texSubImage2D(
                              s.TEXTURE_2D,
                              0,
                              0,
                              0,
                              r,
                              i,
                              s.ALPHA,
                              s.UNSIGNED_BYTE,
                              o,
                            );
                  }
                  function T(e, t, i, n) {
                    var o = v[e];
                    s.useProgram(r);
                    var a = y[e];
                    (a && !t) ||
                      (s.activeTexture(s.TEXTURE0),
                      s.bindTexture(s.TEXTURE_2D, o),
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
                        i,
                        n,
                        0,
                        s.RGBA,
                        s.UNSIGNED_BYTE,
                        null,
                      ),
                      (a = y[e] = s.createFramebuffer())),
                      s.bindFramebuffer(s.FRAMEBUFFER, a),
                      s.framebufferTexture2D(
                        s.FRAMEBUFFER,
                        s.COLOR_ATTACHMENT0,
                        s.TEXTURE_2D,
                        o,
                        0,
                      );
                    var p = v[e + "_temp"];
                    s.activeTexture(s.TEXTURE1),
                      s.bindTexture(s.TEXTURE_2D, p),
                      s.uniform1i(f, 1);
                    var m = v[e + "_stripe"];
                    s.activeTexture(s.TEXTURE2),
                      s.bindTexture(s.TEXTURE_2D, m),
                      s.uniform1i(h, 2),
                      s.bindBuffer(s.ARRAY_BUFFER, u),
                      s.enableVertexAttribArray(c),
                      s.vertexAttribPointer(c, 2, s.FLOAT, !1, 0, 0),
                      s.bindBuffer(s.ARRAY_BUFFER, d),
                      s.enableVertexAttribArray(l),
                      s.vertexAttribPointer(l, 2, s.FLOAT, !1, 0, 0),
                      s.viewport(0, 0, i, n),
                      s.drawArrays(s.TRIANGLES, 0, b.length / 2),
                      s.bindFramebuffer(s.FRAMEBUFFER, null);
                  }
                  function k(e, r, i) {
                    s.activeTexture(r),
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
                      s.uniform1i(s.getUniformLocation(t, e), i);
                  }
                  function E(e, t) {
                    var r = a(s.VERTEX_SHADER, e),
                      i = a(s.FRAGMENT_SHADER, t),
                      n = s.createProgram();
                    if (
                      (s.attachShader(n, r),
                      s.attachShader(n, i),
                      s.linkProgram(n),
                      !s.getProgramParameter(n, s.LINK_STATUS))
                    ) {
                      var o = s.getProgramInfoLog(n);
                      throw (
                        (s.deleteProgram(n),
                        Error("GL program linking failed: " + o))
                      );
                    }
                    return n;
                  }
                  return (
                    (o.drawFrame = function (a) {
                      var v = a.format,
                        y =
                          !t ||
                          e.width !== v.displayWidth ||
                          e.height !== v.displayHeight;
                      if (
                        (y &&
                          ((e.width = v.displayWidth),
                          (e.height = v.displayHeight),
                          o.clear()),
                        t ||
                          (function () {
                            if (n.stripe) {
                              (r = E(i.vertexStripe, i.fragmentStripe)),
                                s.getAttribLocation(r, "aPosition"),
                                (d = s.createBuffer());
                              var e = new Float32Array([
                                0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
                              ]);
                              s.bindBuffer(s.ARRAY_BUFFER, d),
                                s.bufferData(s.ARRAY_BUFFER, e, s.STATIC_DRAW),
                                (l = s.getAttribLocation(
                                  r,
                                  "aTexturePosition",
                                )),
                                (h = s.getUniformLocation(r, "uStripe")),
                                (f = s.getUniformLocation(r, "uTexture"));
                            }
                            (t = E(i.vertex, i.fragment)),
                              (u = s.createBuffer()),
                              s.bindBuffer(s.ARRAY_BUFFER, u),
                              s.bufferData(s.ARRAY_BUFFER, b, s.STATIC_DRAW),
                              (c = s.getAttribLocation(t, "aPosition")),
                              (p = s.createBuffer()),
                              (m = s.getAttribLocation(t, "aLumaPosition")),
                              (g = s.createBuffer()),
                              (_ = s.getAttribLocation(t, "aChromaPosition"));
                          })(),
                        y)
                      ) {
                        var w = function (e, t, r) {
                          var i = v.cropLeft / r,
                            n = (v.cropLeft + v.cropWidth) / r,
                            o = (v.cropTop + v.cropHeight) / v.height,
                            a = v.cropTop / v.height,
                            u = new Float32Array([
                              i,
                              o,
                              n,
                              o,
                              i,
                              a,
                              i,
                              a,
                              n,
                              o,
                              n,
                              a,
                            ]);
                          s.bindBuffer(s.ARRAY_BUFFER, e),
                            s.bufferData(s.ARRAY_BUFFER, u, s.STATIC_DRAW);
                        };
                        w(p, 0, a.y.stride),
                          w(g, 0, (a.u.stride * v.width) / v.chromaWidth);
                      }
                      x("uTextureY", y, a.y.stride, v.height, a.y.bytes),
                        x(
                          "uTextureCb",
                          y,
                          a.u.stride,
                          v.chromaHeight,
                          a.u.bytes,
                        ),
                        x(
                          "uTextureCr",
                          y,
                          a.v.stride,
                          v.chromaHeight,
                          a.v.bytes,
                        ),
                        n.stripe &&
                          (T("uTextureY", y, a.y.stride, v.height),
                          T("uTextureCb", y, a.u.stride, v.chromaHeight),
                          T("uTextureCr", y, a.v.stride, v.chromaHeight)),
                        s.useProgram(t),
                        s.viewport(0, 0, e.width, e.height),
                        k("uTextureY", s.TEXTURE0, 0),
                        k("uTextureCb", s.TEXTURE1, 1),
                        k("uTextureCr", s.TEXTURE2, 2),
                        s.bindBuffer(s.ARRAY_BUFFER, u),
                        s.enableVertexAttribArray(c),
                        s.vertexAttribPointer(c, 2, s.FLOAT, !1, 0, 0),
                        s.bindBuffer(s.ARRAY_BUFFER, p),
                        s.enableVertexAttribArray(m),
                        s.vertexAttribPointer(m, 2, s.FLOAT, !1, 0, 0),
                        s.bindBuffer(s.ARRAY_BUFFER, g),
                        s.enableVertexAttribArray(_),
                        s.vertexAttribPointer(_, 2, s.FLOAT, !1, 0, 0),
                        s.drawArrays(s.TRIANGLES, 0, b.length / 2);
                    }),
                    (o.clear = function () {
                      s.viewport(0, 0, e.width, e.height),
                        s.clearColor(0, 0, 0, 0),
                        s.clear(s.COLOR_BUFFER_BIT);
                    }),
                    o.clear(),
                    o
                  );
                }
                (n.stripe = !1),
                  (n.contextForCanvas = function (e) {
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
                  (n.isAvailable = function () {
                    var e,
                      t = document.createElement("canvas");
                    (t.width = 1), (t.height = 1);
                    try {
                      e = n.contextForCanvas(t);
                    } catch (e) {
                      return !1;
                    }
                    if (e) {
                      var r = e.TEXTURE0,
                        i = e.createTexture(),
                        o = new Uint8Array(16),
                        s = n.stripe ? 1 : 4,
                        a = n.stripe ? e.RGBA : e.ALPHA,
                        u = n.stripe ? e.NEAREST : e.LINEAR;
                      return (
                        e.activeTexture(r),
                        e.bindTexture(e.TEXTURE_2D, i),
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
                          a,
                          s,
                          4,
                          0,
                          a,
                          e.UNSIGNED_BYTE,
                          o,
                        ),
                        !e.getError()
                      );
                    }
                    return !1;
                  }),
                  (n.prototype = Object.create(t.prototype)),
                  (e.exports = n);
              })();
            },
            627: (e, t, r) => {
              !(function () {
                "use strict";
                var t = r(877);
                e.exports = {
                  convertYCbCr: function (e, r) {
                    var i = 0 | e.format.width,
                      n = 0 | e.format.height,
                      o = 0 | t(e.format.width / e.format.chromaWidth),
                      s = 0 | t(e.format.height / e.format.chromaHeight),
                      a = e.y.bytes,
                      u = e.u.bytes,
                      c = e.v.bytes,
                      d = 0 | e.y.stride,
                      l = 0 | e.u.stride,
                      h = 0 | e.v.stride,
                      f = i << 2,
                      p = 0,
                      m = 0,
                      g = 0,
                      _ = 0,
                      b = 0,
                      v = 0,
                      y = 0,
                      w = 0,
                      V = 0,
                      x = 0,
                      T = 0,
                      k = 0,
                      E = 0,
                      A = 0,
                      R = 0,
                      P = 0,
                      O = 0,
                      I = 0;
                    if (1 == o && 1 == s)
                      for (y = 0, w = f, I = 0, P = 0; P < n; P += 2) {
                        for (
                          g = ((m = (P * d) | 0) + d) | 0,
                            _ = (I * l) | 0,
                            b = (I * h) | 0,
                            R = 0;
                          R < i;
                          R += 2
                        )
                          (V = 0 | u[_++]),
                            (k = (((409 * (x = 0 | c[b++])) | 0) - 57088) | 0),
                            (E =
                              (((100 * V) | 0) + ((208 * x) | 0) - 34816) | 0),
                            (A = (((516 * V) | 0) - 70912) | 0),
                            (T = (298 * a[m++]) | 0),
                            (r[y] = (T + k) >> 8),
                            (r[y + 1] = (T - E) >> 8),
                            (r[y + 2] = (T + A) >> 8),
                            (y += 4),
                            (T = (298 * a[m++]) | 0),
                            (r[y] = (T + k) >> 8),
                            (r[y + 1] = (T - E) >> 8),
                            (r[y + 2] = (T + A) >> 8),
                            (y += 4),
                            (T = (298 * a[g++]) | 0),
                            (r[w] = (T + k) >> 8),
                            (r[w + 1] = (T - E) >> 8),
                            (r[w + 2] = (T + A) >> 8),
                            (w += 4),
                            (T = (298 * a[g++]) | 0),
                            (r[w] = (T + k) >> 8),
                            (r[w + 1] = (T - E) >> 8),
                            (r[w + 2] = (T + A) >> 8),
                            (w += 4);
                        (y += f), (w += f), I++;
                      }
                    else
                      for (v = 0, P = 0; P < n; P++)
                        for (
                          O = 0,
                            p = (P * d) | 0,
                            _ = ((I = P >> s) * l) | 0,
                            b = (I * h) | 0,
                            R = 0;
                          R < i;
                          R++
                        )
                          (V = 0 | u[_ + (O = R >> o)]),
                            (k =
                              (((409 * (x = 0 | c[b + O])) | 0) - 57088) | 0),
                            (E =
                              (((100 * V) | 0) + ((208 * x) | 0) - 34816) | 0),
                            (A = (((516 * V) | 0) - 70912) | 0),
                            (T = (298 * a[p++]) | 0),
                            (r[v] = (T + k) >> 8),
                            (r[v + 1] = (T - E) >> 8),
                            (r[v + 2] = (T + A) >> 8),
                            (v += 4);
                  },
                };
              })();
            },
            877: (e) => {
              !(function () {
                "use strict";
                e.exports = function (e) {
                  for (var t = 0, r = e >> 1; 0 != r; ) (r >>= 1), t++;
                  if (e !== 1 << t)
                    throw (
                      "chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got " +
                      e
                    );
                  return t;
                };
              })();
            },
            731: (e, t, r) => {
              !(function () {
                "use strict";
                var t = r(487),
                  i = r(926),
                  n = r(895);
                e.exports = {
                  FrameSink: t,
                  SoftwareFrameSink: i,
                  WebGLFrameSink: n,
                  attach: function (e, t) {
                    return (
                      "webGL" in (t = t || {}) ? t.webGL : n.isAvailable()
                    )
                      ? new n(e, t)
                      : new i(e, t);
                  },
                };
              })();
            },
          },
          t = {};
        function r(i) {
          var n = t[i];
          if (void 0 !== n) return n.exports;
          var o = (t[i] = { exports: {} });
          return e[i](o, o.exports, r), o.exports;
        }
        (r.d = (e, t) => {
          for (var i in t)
            r.o(t, i) &&
              !r.o(e, i) &&
              Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        }),
          (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (r.r = (e) => {
            "u" > typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          });
        var i = {};
        return (
          (() => {
            "use strict";
            var e = r(318);
            Object.defineProperty(i, "__esModule", { value: !0 }),
              Object.defineProperty(i, "OGVCompat", {
                enumerable: !0,
                get: function () {
                  return n.default;
                },
              }),
              Object.defineProperty(i, "OGVLoader", {
                enumerable: !0,
                get: function () {
                  return o.default;
                },
              }),
              Object.defineProperty(i, "OGVMediaError", {
                enumerable: !0,
                get: function () {
                  return s.default;
                },
              }),
              Object.defineProperty(i, "OGVMediaType", {
                enumerable: !0,
                get: function () {
                  return a.default;
                },
              }),
              Object.defineProperty(i, "OGVPlayer", {
                enumerable: !0,
                get: function () {
                  return u.default;
                },
              }),
              Object.defineProperty(i, "OGVTimeRanges", {
                enumerable: !0,
                get: function () {
                  return c.default;
                },
              }),
              (i.OGVVersion = void 0);
            var t = e(r(8)),
              n = e(r(523)),
              o = e(r(964)),
              s = e(r(759)),
              a = e(r(278)),
              u = e(r(869)),
              c = e(r(168)),
              d = "1.8.9-20220406232920-cb5f7ff";
            (i.OGVVersion = d),
              "object" ===
                ("u" < typeof window ? "undefined" : (0, t.default)(window)) &&
                ((window.OGVCompat = n.default),
                (window.OGVLoader = o.default),
                (window.OGVMediaError = s.default),
                (window.OGVMediaType = a.default),
                (window.OGVTimeRanges = c.default),
                (window.OGVPlayer = u.default),
                (window.OGVVersion = d));
          })(),
          i
        );
      })();
    },
    335033(e, t, r) {
      e.exports = r(108110);
    },
    352944(e, t, r) {
      "use strict";
      var i;
      function n() {
        return (
          i ||
            ((i = new Image()).src =
              "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
          i
        );
      }
      r.d(t, { n: () => n });
    },
    653944(e, t, r) {
      "use strict";
      r.d(t, { j: () => s });
      var i = r(575241),
        n = r(782376);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      function s(e, t, r) {
        var s, a, u, c, d, l;
        return (
          (s =
            e ||
            function () {
              return {};
            }),
          (a = function () {
            return r.reconnect();
          }),
          (d = (c =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((u = (0, n.F)(t, s, a))) ||
            (function (e) {
              var t,
                r,
                i =
                  null == e
                    ? null
                    : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
              if (null != i) {
                var n = [],
                  o = !0,
                  s = !1;
                try {
                  for (
                    i = i.call(e);
                    !(o = (t = i.next()).done) &&
                    (n.push(t.value), 2 !== n.length);
                    o = !0
                  );
                } catch (e) {
                  (s = !0), (r = e);
                } finally {
                  try {
                    o || null == i.return || i.return();
                  } finally {
                    if (s) throw r;
                  }
                }
                return n;
              }
            })(u) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return o(e, 2);
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
                  return o(e, 2);
              }
            })(u) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })())[0]),
          (l = c[1]),
          (0, i.E)(
            function () {
              var e = t.getHandlerId();
              if (null != e)
                return t.subscribeToStateChange(l, { handlerIds: [e] });
            },
            [t, l],
          ),
          d
        );
      }
    },
    657335(e, t, r) {
      "use strict";
      r.d(t, { i: () => g });
      var i = r(290309),
        n = r(575241),
        o = r(582128);
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
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var u = (function () {
          var e;
          function t(e, r, i) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            a(this, "spec", void 0),
              a(this, "monitor", void 0),
              a(this, "connector", void 0),
              (this.spec = e),
              (this.monitor = r),
              (this.connector = i);
          }
          return (
            (e = [
              {
                key: "beginDrag",
                value: function () {
                  var e,
                    t = this.spec,
                    r = this.monitor;
                  return null !=
                    (e =
                      "object" === s(t.item)
                        ? t.item
                        : "function" == typeof t.item
                          ? t.item(r)
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
                  var r = this.spec,
                    i = this.monitor,
                    n = r.isDragging;
                  return n ? n(i) : t === e.getSourceId();
                },
              },
              {
                key: "endDrag",
                value: function () {
                  var e = this.spec,
                    t = this.monitor,
                    r = this.connector,
                    i = e.end;
                  i && i(t.getItem(), t), r.reconnect();
                },
              },
            ]),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            })(t.prototype, e),
            t
          );
        })(),
        c = r(204581),
        d = r(321733);
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      var h = r(22633),
        f = r(836539),
        p = r(79726),
        m = r(653944);
      function g(e, t) {
        var r,
          s,
          a,
          g,
          _,
          b,
          v,
          y,
          w,
          V = (0, h.I)(e, t);
        (0, d.V)(
          !V.begin,
          "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
        );
        var x =
            ((r = (0, c.u)()),
            (0, o.useMemo)(
              function () {
                return new f.G(r);
              },
              [r],
            )),
          T =
            ((s = V.options),
            (a = V.previewOptions),
            (g = (0, c.u)()),
            (_ = (0, o.useMemo)(
              function () {
                return new p.b(g.getBackend());
              },
              [g],
            )),
            (0, n.E)(
              function () {
                return (
                  (_.dragSourceOptions = s || null),
                  _.reconnect(),
                  function () {
                    return _.disconnectDragSource();
                  }
                );
              },
              [_, s],
            ),
            (0, n.E)(
              function () {
                return (
                  (_.dragPreviewOptions = a || null),
                  _.reconnect(),
                  function () {
                    return _.disconnectDragPreview();
                  }
                );
              },
              [_, a],
            ),
            _);
        return (
          (b = (0, c.u)()),
          (v = (0, o.useMemo)(
            function () {
              return new u(V, x, T);
            },
            [x, T],
          )),
          (0, o.useEffect)(
            function () {
              v.spec = V;
            },
            [V],
          ),
          (y = v),
          (w = (0, o.useMemo)(
            function () {
              var e = V.type;
              return (0, d.V)(null != e, "spec.type must be defined"), e;
            },
            [V],
          )),
          (0, n.E)(
            function () {
              if (null != w) {
                var e,
                  t =
                    (function (e) {
                      if (Array.isArray(e)) return e;
                    })((e = (0, i.V)(w, y, b))) ||
                    (function (e) {
                      var t,
                        r,
                        i =
                          null == e
                            ? null
                            : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                              e["@@iterator"];
                      if (null != i) {
                        var n = [],
                          o = !0,
                          s = !1;
                        try {
                          for (
                            i = i.call(e);
                            !(o = (t = i.next()).done) &&
                            (n.push(t.value), 2 !== n.length);
                            o = !0
                          );
                        } catch (e) {
                          (s = !0), (r = e);
                        } finally {
                          try {
                            o || null == i.return || i.return();
                          } finally {
                            if (s) throw r;
                          }
                        }
                        return n;
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
                  r = t[0],
                  n = t[1];
                return x.receiveHandlerId(r), T.receiveHandlerId(r), n;
              }
            },
            [b, x, T, y, w],
          ),
          [
            (0, m.j)(V.collect, x, T),
            (0, o.useMemo)(
              function () {
                return T.hooks.dragSource();
              },
              [T],
            ),
            (0, o.useMemo)(
              function () {
                return T.hooks.dragPreview();
              },
              [T],
            ),
          ]
        );
      }
    },
    708793(e, t, r) {
      "use strict";
      r.d(t, { H: () => m });
      var i = r(290309),
        n = r(204581),
        o = r(575241),
        s = r(321733),
        a = r(582128);
      function u(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var c = (function () {
        var e;
        function t(e, r) {
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          u(this, "spec", void 0),
            u(this, "monitor", void 0),
            (this.spec = e),
            (this.monitor = r);
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
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          })(t.prototype, e),
          t
        );
      })();
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      var l = r(22633),
        h = r(635610),
        f = r(202462),
        p = r(653944);
      function m(e, t) {
        var r,
          u,
          m,
          g,
          _,
          b,
          v,
          y,
          w,
          V = (0, l.I)(e, t),
          x =
            ((r = (0, n.u)()),
            (0, a.useMemo)(
              function () {
                return new h.b(r);
              },
              [r],
            )),
          T =
            ((u = V.options),
            (m = (0, n.u)()),
            (g = (0, a.useMemo)(
              function () {
                return new f.P(m.getBackend());
              },
              [m],
            )),
            (0, o.E)(
              function () {
                return (
                  (g.dropTargetOptions = u || null),
                  g.reconnect(),
                  function () {
                    return g.disconnectDropTarget();
                  }
                );
              },
              [u],
            ),
            g);
        return (
          (_ = (0, n.u)()),
          (b = (0, a.useMemo)(
            function () {
              return new c(V, x);
            },
            [x],
          )),
          (0, a.useEffect)(
            function () {
              b.spec = V;
            },
            [V],
          ),
          (v = b),
          (y = V.accept),
          (w = (0, a.useMemo)(
            function () {
              return (
                (0, s.V)(null != V.accept, "accept must be defined"),
                Array.isArray(y) ? y : [y]
              );
            },
            [y],
          )),
          (0, o.E)(
            function () {
              var e,
                t =
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })((e = (0, i.l)(w, v, _))) ||
                  (function (e) {
                    var t,
                      r,
                      i =
                        null == e
                          ? null
                          : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                            e["@@iterator"];
                    if (null != i) {
                      var n = [],
                        o = !0,
                        s = !1;
                      try {
                        for (
                          i = i.call(e);
                          !(o = (t = i.next()).done) &&
                          (n.push(t.value), 2 !== n.length);
                          o = !0
                        );
                      } catch (e) {
                        (s = !0), (r = e);
                      } finally {
                        try {
                          o || null == i.return || i.return();
                        } finally {
                          if (s) throw r;
                        }
                      }
                      return n;
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
                r = t[0],
                n = t[1];
              return x.receiveHandlerId(r), T.receiveHandlerId(r), n;
            },
            [
              _,
              x,
              v,
              T,
              w
                .map(function (e) {
                  return e.toString();
                })
                .join("|"),
            ],
          ),
          [
            (0, p.j)(V.collect, x, T),
            (0, a.useMemo)(
              function () {
                return T.hooks.dropTarget();
              },
              [T],
            ),
          ]
        );
      }
    },
    22633(e, t, r) {
      "use strict";
      r.d(t, { I: () => o });
      var i = r(582128);
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      function o(e, t) {
        var r,
          o =
            (function (e) {
              if (Array.isArray(e)) return n(e);
            })((r = t || [])) ||
            (function (e) {
              if (
                ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(r) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return n(e, void 0);
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
                  return n(e, void 0);
              }
            })(r) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })();
        return (
          null == t && "function" != typeof e && o.push(e),
          (0, i.useMemo)(function () {
            return "function" == typeof e ? e() : e;
          }, o)
        );
      }
    },
    836539(e, t, r) {
      "use strict";
      r.d(t, { G: () => a });
      var i = r(321733);
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var o = !1,
        s = !1,
        a = (function () {
          var e;
          function t(e) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            n(this, "internalMonitor", void 0),
              n(this, "sourceId", null),
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
                  (0, i.V)(
                    !o,
                    "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                  );
                  try {
                    return (
                      (o = !0),
                      this.internalMonitor.canDragSource(this.sourceId)
                    );
                  } finally {
                    o = !1;
                  }
                },
              },
              {
                key: "isDragging",
                value: function () {
                  if (!this.sourceId) return !1;
                  (0, i.V)(
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
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            })(t.prototype, e),
            t
          );
        })();
    },
    635610(e, t, r) {
      "use strict";
      r.d(t, { b: () => s });
      var i = r(321733);
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var o = !1,
        s = (function () {
          var e;
          function t(e) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            n(this, "internalMonitor", void 0),
              n(this, "targetId", null),
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
                  (0, i.V)(
                    !o,
                    "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor",
                  );
                  try {
                    return (
                      (o = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    o = !1;
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
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            })(t.prototype, e),
            t
          );
        })();
    },
    79726(e, t, r) {
      "use strict";
      r.d(t, { b: () => a });
      var i = r(370725),
        n = r(723651),
        o = r(816885);
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = (function () {
        var e;
        function t(e) {
          var r = this;
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          s(
            this,
            "hooks",
            (0, i.i)({
              dragSource: function (e, t) {
                r.clearDragSource(),
                  (r.dragSourceOptions = t || null),
                  (0, n.i)(e) ? (r.dragSourceRef = e) : (r.dragSourceNode = e),
                  r.reconnectDragSource();
              },
              dragPreview: function (e, t) {
                r.clearDragPreview(),
                  (r.dragPreviewOptions = t || null),
                  (0, n.i)(e)
                    ? (r.dragPreviewRef = e)
                    : (r.dragPreviewNode = e),
                  r.reconnectDragPreview();
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
                return !(0, o.b)(
                  this.lastConnectedDragSourceOptions,
                  this.dragSourceOptions,
                );
              },
            },
            {
              key: "didDragPreviewOptionsChange",
              value: function () {
                return !(0, o.b)(
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
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          })(t.prototype, e),
          t
        );
      })();
    },
    202462(e, t, r) {
      "use strict";
      r.d(t, { P: () => a });
      var i = r(816885),
        n = r(370725),
        o = r(723651);
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = (function () {
        var e;
        function t(e) {
          var r = this;
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          s(
            this,
            "hooks",
            (0, n.i)({
              dropTarget: function (e, t) {
                r.clearDropTarget(),
                  (r.dropTargetOptions = t),
                  (0, o.i)(e) ? (r.dropTargetRef = e) : (r.dropTargetNode = e),
                  r.reconnect();
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
                return !(0, i.b)(
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
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          })(t.prototype, e),
          t
        );
      })();
    },
    723651(e, t, r) {
      "use strict";
      function i(e) {
        return (i =
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
      function n(e) {
        return (
          null !== e &&
          "object" === i(e) &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      r.d(t, { i: () => n });
    },
    290309(e, t, r) {
      "use strict";
      function i(e, t, r) {
        var i = r.getRegistry(),
          n = i.addTarget(e, t);
        return [
          n,
          function () {
            return i.removeTarget(n);
          },
        ];
      }
      function n(e, t, r) {
        var i = r.getRegistry(),
          n = i.addSource(e, t);
        return [
          n,
          function () {
            return i.removeSource(n);
          },
        ];
      }
      r.d(t, { V: () => n, l: () => i });
    },
    370725(e, t, r) {
      "use strict";
      r.d(t, { i: () => o });
      var i = r(321733),
        n = r(582128);
      function o(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (r) {
            var o = e[r];
            if (r.endsWith("Ref")) t[r] = e[r];
            else {
              var a = function () {
                var e,
                  t,
                  r,
                  a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  u =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                if (!(0, n.isValidElement)(a)) return o(a, u), a;
                if ("string" != typeof a.type) {
                  var c = a.type.displayName || a.type.name || "the component";
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
                  (e = a),
                  (t = u
                    ? function (e) {
                        return o(e, u);
                      }
                    : o),
                  (r = e.ref),
                  ((0, i.V)(
                    "string" != typeof r,
                    "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs",
                  ),
                  r)
                    ? (0, n.cloneElement)(e, {
                        ref: function (e) {
                          s(r, e), s(t, e);
                        },
                      })
                    : (0, n.cloneElement)(e, { ref: t })
                );
              };
              t[r] = function () {
                return a;
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
    104681(e, t, r) {
      "use strict";
      function i(e) {
        return "object" == typeof e && null != e && 1 === e.nodeType;
      }
      function n(e, t) {
        return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
      }
      function o(e, t) {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
          var r,
            i = getComputedStyle(e, null);
          return (
            n(i.overflowY, t) ||
            n(i.overflowX, t) ||
            (!!(r = (function (e) {
              if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
              try {
                return e.ownerDocument.defaultView.frameElement;
              } catch (e) {
                return null;
              }
            })(e)) &&
              (r.clientHeight < e.scrollHeight ||
                r.clientWidth < e.scrollWidth))
          );
        }
        return !1;
      }
      function s(e, t, r, i, n, o, s, a) {
        return (o < e && s > t) || (o > e && s < t)
          ? 0
          : (o <= e && a <= r) || (s >= t && a >= r)
            ? o - e - i
            : (s > t && a < r) || (o < e && a > r)
              ? s - t + n
              : 0;
      }
      r.d(t, { A: () => c });
      var a = function (e, t) {
        var r = window,
          n = t.scrollMode,
          a = t.block,
          u = t.inline,
          c = t.boundary,
          d = t.skipOverflowHiddenElements,
          l =
            "function" == typeof c
              ? c
              : function (e) {
                  return e !== c;
                };
        if (!i(e)) throw TypeError("Invalid target");
        for (
          var h,
            f,
            p = document.scrollingElement || document.documentElement,
            m = [],
            g = e;
          i(g) && l(g);

        ) {
          if (
            (g =
              null == (f = (h = g).parentElement)
                ? h.getRootNode().host || null
                : f) === p
          ) {
            m.push(g);
            break;
          }
          (null != g &&
            g === document.body &&
            o(g) &&
            !o(document.documentElement)) ||
            (null != g && o(g, d) && m.push(g));
        }
        for (
          var _ = r.visualViewport ? r.visualViewport.width : innerWidth,
            b = r.visualViewport ? r.visualViewport.height : innerHeight,
            v = window.scrollX || pageXOffset,
            y = window.scrollY || pageYOffset,
            w = e.getBoundingClientRect(),
            V = w.height,
            x = w.width,
            T = w.top,
            k = w.right,
            E = w.bottom,
            A = w.left,
            R =
              "start" === a || "nearest" === a
                ? T
                : "end" === a
                  ? E
                  : T + V / 2,
            P = "center" === u ? A + x / 2 : "end" === u ? k : A,
            O = [],
            I = 0;
          I < m.length;
          I++
        ) {
          var S = m[I],
            L = S.getBoundingClientRect(),
            U = L.height,
            C = L.width,
            D = L.top,
            F = L.right,
            M = L.bottom,
            j = L.left;
          if (
            "if-needed" === n &&
            T >= 0 &&
            A >= 0 &&
            E <= b &&
            k <= _ &&
            T >= D &&
            E <= M &&
            A >= j &&
            k <= F
          )
            break;
          var B = getComputedStyle(S),
            N = parseInt(B.borderLeftWidth, 10),
            W = parseInt(B.borderTopWidth, 10),
            H = parseInt(B.borderRightWidth, 10),
            G = parseInt(B.borderBottomWidth, 10),
            X = 0,
            z = 0,
            q = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - N - H : 0,
            Y =
              "offsetHeight" in S ? S.offsetHeight - S.clientHeight - W - G : 0,
            Q =
              "offsetWidth" in S
                ? 0 === S.offsetWidth
                  ? 0
                  : C / S.offsetWidth
                : 0,
            K =
              "offsetHeight" in S
                ? 0 === S.offsetHeight
                  ? 0
                  : U / S.offsetHeight
                : 0;
          if (p === S)
            (X =
              "start" === a
                ? R
                : "end" === a
                  ? R - b
                  : "nearest" === a
                    ? s(y, y + b, b, W, G, y + R, y + R + V, V)
                    : R - b / 2),
              (z =
                "start" === u
                  ? P
                  : "center" === u
                    ? P - _ / 2
                    : "end" === u
                      ? P - _
                      : s(v, v + _, _, N, H, v + P, v + P + x, x)),
              (X = Math.max(0, X + y)),
              (z = Math.max(0, z + v));
          else {
            (X =
              "start" === a
                ? R - D - W
                : "end" === a
                  ? R - M + G + Y
                  : "nearest" === a
                    ? s(D, M, U, W, G + Y, R, R + V, V)
                    : R - (D + U / 2) + Y / 2),
              (z =
                "start" === u
                  ? P - j - N
                  : "center" === u
                    ? P - (j + C / 2) + q / 2
                    : "end" === u
                      ? P - F + H + q
                      : s(j, F, C, N, H + q, P, P + x, x));
            var Z = S.scrollLeft,
              J = S.scrollTop;
            (R +=
              J -
              (X = Math.max(
                0,
                Math.min(J + X / K, S.scrollHeight - U / K + Y),
              ))),
              (P +=
                Z -
                (z = Math.max(
                  0,
                  Math.min(Z + z / Q, S.scrollWidth - C / Q + q),
                )));
          }
          O.push({ el: S, top: X, left: z });
        }
        return O;
      };
      function u(e) {
        return e === Object(e) && 0 !== Object.keys(e).length;
      }
      let c = function (e, t) {
        var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
        if (u(t) && "function" == typeof t.behavior)
          return t.behavior(r ? a(e, t) : []);
        if (r) {
          var i,
            n,
            o,
            s =
              !1 === t
                ? { block: "end", inline: "nearest" }
                : u(t)
                  ? t
                  : { block: "start", inline: "nearest" };
          return (
            (i = a(e, s)),
            void 0 === (n = s.behavior) && (n = "auto"),
            (o = "scrollBehavior" in document.body.style),
            void i.forEach(function (e) {
              var t = e.el,
                r = e.top,
                i = e.left;
              t.scroll && o
                ? t.scroll({ top: r, left: i, behavior: n })
                : ((t.scrollTop = r), (t.scrollLeft = i));
            })
          );
        }
      };
    },
    987701(e, t, r) {
      "use strict";
      function i(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      r.d(t, { A: () => n });
      let n = function e(t, r) {
        if (t === r) return !0;
        if (null == t || null == r) return !1;
        if (Array.isArray(t))
          return (
            Array.isArray(r) &&
            t.length === r.length &&
            t.every(function (t, i) {
              return e(t, r[i]);
            })
          );
        if ("object" == typeof t || "object" == typeof r) {
          var n = i(t),
            o = i(r);
          return n !== t || o !== r
            ? e(n, o)
            : Object.keys(Object.assign({}, t, r)).every(function (i) {
                return e(t[i], r[i]);
              });
        }
        return !1;
      };
    },
    185621(e, t, r) {
      "use strict";
      e.exports = r.p + "3d87e0acfdf050a9.scm";
    },
    316690(e, t, r) {
      "use strict";
      e.exports = r.p + "a57d829a5323de30.scm";
    },
    554724(e, t, r) {
      "use strict";
      e.exports = r.p + "ed21b8919abfe80f.wasm";
    },
    308970(e, t, r) {
      "use strict";
      e.exports = r.p + "2d3b24aac48706d0.scm";
    },
    544958(e, t, r) {
      "use strict";
      e.exports = r.p + "892b86b1b37195ba.wasm";
    },
    501958(e, t, r) {
      "use strict";
      e.exports = r.p + "33f9142284a10095.scm";
    },
    492338(e, t, r) {
      "use strict";
      e.exports = r.p + "731b4cff0d046fd9.wasm";
    },
    796510(e, t, r) {
      "use strict";
      e.exports = r.p + "5d60c65a42dd8b61.scm";
    },
    445323(e, t, r) {
      "use strict";
      e.exports = r.p + "4f098f595413c750.scm";
    },
    691384(e, t, r) {
      "use strict";
      e.exports = r.p + "dc76a5bc246aea02.wasm";
    },
    371672(e, t, r) {
      "use strict";
      e.exports = r.p + "64eba10de56bb765.scm";
    },
    151408(e, t, r) {
      "use strict";
      e.exports = r.p + "d4930f9858d01e43.wasm";
    },
    253475(e, t, r) {
      "use strict";
      e.exports = r.p + "93e51b74e13d1db3.scm";
    },
    996928(e, t, r) {
      "use strict";
      e.exports = r.p + "219b66cbda651d28.wasm";
    },
    820825(e, t, r) {
      "use strict";
      e.exports = r.p + "74fe2c2f5a3c7981.scm";
    },
    901052(e, t, r) {
      "use strict";
      e.exports = r.p + "0268a0d5c3fc7ebe.wasm";
    },
    501721(e, t, r) {
      "use strict";
      e.exports = r.p + "108c8dd67e955e3b.scm";
    },
    533440(e, t, r) {
      "use strict";
      e.exports = r.p + "ddd52ece2d8c63eb.wasm";
    },
    371524(e, t, r) {
      "use strict";
      e.exports = r.p + "07e417d738722d4c.scm";
    },
    623584(e, t, r) {
      "use strict";
      e.exports = r.p + "ac511252e9dcb401.wasm";
    },
    718266(e, t, r) {
      "use strict";
      e.exports = r.p + "9fa7b99795cad999.scm";
    },
    284020(e, t, r) {
      "use strict";
      e.exports = r.p + "42b3775c0ce02e01.wasm";
    },
    253515(e, t, r) {
      "use strict";
      e.exports = r.p + "3ade61e47a975b88.scm";
    },
    785462(e, t, r) {
      "use strict";
      e.exports = r.p + "ceb6f797636a2e63.scm";
    },
    427200(e, t, r) {
      "use strict";
      e.exports = r.p + "7a1bfe86553551a2.scm";
    },
    867888(e, t, r) {
      "use strict";
      e.exports = r.p + "cafd71ad5c41a020.wasm";
    },
    582242(e, t, r) {
      "use strict";
      e.exports = r.p + "93e9ab38b759fa94.scm";
    },
    747060(e, t, r) {
      "use strict";
      e.exports = r.p + "519be724979f0108.wasm";
    },
    843389(e, t, r) {
      "use strict";
      e.exports = r.p + "89a7618d9c5a0636.scm";
    },
    662604(e, t, r) {
      "use strict";
      e.exports = r.p + "2b2a1cbf61630395.wasm";
    },
    632781(e, t, r) {
      "use strict";
      e.exports = r.p + "04576dbdb98ad02f.scm";
    },
    124332(e, t, r) {
      "use strict";
      e.exports = r.p + "c3ff5fafeceaae34.wasm";
    },
    135538(e, t, r) {
      "use strict";
      e.exports = r.p + "be3f7e92e07ca1fd.scm";
    },
    547431(e, t, r) {
      "use strict";
      e.exports = r.p + "2666b65494736dbc.scm";
    },
    555808(e, t, r) {
      "use strict";
      e.exports = r.p + "79bcfe8f592ca991.wasm";
    },
    713796(e, t, r) {
      "use strict";
      e.exports = r.p + "9d568a1f15e8cf74.scm";
    },
    122250(e, t, r) {
      "use strict";
      e.exports = r.p + "dfa0d8c944be3a84.wasm";
    },
    983420(e, t, r) {
      "use strict";
      e.exports = r.p + "982ab3c69af96dda.scm";
    },
    489565(e, t, r) {
      "use strict";
      e.exports = r.p + "bd9bde68cb2a04f0.scm";
    },
    590264(e, t, r) {
      "use strict";
      e.exports = r.p + "e02a5b67b3c1df40.wasm";
    },
    681166(e, t, r) {
      "use strict";
      e.exports = r.p + "7555218a1309ad93.scm";
    },
    328592(e, t, r) {
      "use strict";
      e.exports = r.p + "7663a3bebce7deb6.wasm";
    },
    687429(e, t, r) {
      "use strict";
      e.exports = r.p + "0b59c2275238d17c.scm";
    },
    222260(e, t, r) {
      "use strict";
      e.exports = r.p + "cbfd32db1d5ba021.wasm";
    },
    108572(e, t, r) {
      "use strict";
      e.exports = r.p + "ffc648b27cbf1caf.scm";
    },
    712298(e, t, r) {
      "use strict";
      e.exports = r.p + "685345d8f6dff552.wasm";
    },
    502907(e, t, r) {
      "use strict";
      e.exports = r.p + "6edd364cd748a297.scm";
    },
    640208(e, t, r) {
      "use strict";
      e.exports = r.p + "af5575828ca9af40.wasm";
    },
    655582(e, t, r) {
      "use strict";
      e.exports = r.p + "6e4f9b9f5280286f.scm";
    },
    445854(e, t, r) {
      "use strict";
      e.exports = r.p + "39a2d47ac3762397.wasm";
    },
    604623(e, t, r) {
      "use strict";
      e.exports = r.p + "a781b7662011d5f8.scm";
    },
    571368(e, t, r) {
      "use strict";
      e.exports = r.p + "0692eae161114efb.wasm";
    },
    992094(e, t, r) {
      "use strict";
      e.exports = r.p + "b79558c9fe3061d8.scm";
    },
    404043(e, t, r) {
      "use strict";
      e.exports = r.p + "11028097ed495199.scm";
    },
    84912(e, t, r) {
      "use strict";
      e.exports = r.p + "55f0b93e3801c156.wasm";
    },
    180458(e, t, r) {
      "use strict";
      e.exports = r.p + "d4bfa95eadea7b95.scm";
    },
    161064(e, t, r) {
      "use strict";
      e.exports = r.p + "ddbd456b03bd614e.wasm";
    },
    817218(e, t, r) {
      "use strict";
      e.exports = r.p + "0490603e9d0d01cd.scm";
    },
    842039(e, t, r) {
      "use strict";
      e.exports = r.p + "30e0c6c9ec034936.scm";
    },
    941694(e, t, r) {
      "use strict";
      e.exports = r.p + "6b2a83c56c10aac5.wasm";
    },
    565989(e, t, r) {
      "use strict";
      e.exports = r.p + "38b49511c25620a4.scm";
    },
    777084(e, t, r) {
      "use strict";
      e.exports = r.p + "c6e91b47ab586842.scm";
    },
    224578(e, t, r) {
      "use strict";
      e.exports = r.p + "68db595d8460bf97.scm";
    },
    993684(e, t, r) {
      "use strict";
      e.exports = r.p + "3c0de8eda87cde77.wasm";
    },
    72382(e, t, r) {
      "use strict";
      e.exports = r.p + "764d203016a287be.scm";
    },
    934434(e, t, r) {
      "use strict";
      e.exports = r.p + "9fe54b19e13e9fb4.wasm";
    },
    807991(e, t, r) {
      "use strict";
      e.exports = r.p + "b62210ce632b9c7b.scm";
    },
    482784(e, t, r) {
      "use strict";
      e.exports = r.p + "db7b3abf723619a2.wasm";
    },
    581583(e, t, r) {
      "use strict";
      e.exports = r.p + "a90228e085a54917.scm";
    },
    471586(e, t, r) {
      "use strict";
      e.exports = r.p + "83241319c2f5ea44.scm";
    },
    645372(e, t, r) {
      "use strict";
      e.exports = r.p + "14ec376fdb114a1a.scm";
    },
    584784(e, t, r) {
      "use strict";
      e.exports = r.p + "952ea714b7ffbf0a.wasm";
    },
    679453(e, t, r) {
      "use strict";
      e.exports = r.p + "bed44ef8a588de5e.scm";
    },
    531860(e, t, r) {
      "use strict";
      e.exports = r.p + "d59ec0d928765c62.scm";
    },
    345322(e, t, r) {
      "use strict";
      e.exports = r.p + "71d5da341ff42d98.scm";
    },
    441672(e, t, r) {
      "use strict";
      e.exports = r.p + "821c6e039088a32a.wasm";
    },
    463989(e, t, r) {
      "use strict";
      e.exports = r.p + "bfd02fa6ec3b90f5.scm";
    },
    115088(e, t, r) {
      "use strict";
      e.exports = r.p + "ce7c50e2af3b3d6f.wasm";
    },
    757283(e, t, r) {
      "use strict";
      e.exports = r.p + "ca7b1a42047fd4a7.scm";
    },
    847392(e, t, r) {
      "use strict";
      e.exports = r.p + "b0a784773bef755c.wasm";
    },
    477092(e, t, r) {
      "use strict";
      e.exports = r.p + "26f3233db8fd35cc.scm";
    },
    117256(e, t, r) {
      "use strict";
      e.exports = r.p + "b652b3efd242781a.wasm";
    },
    971567(e, t, r) {
      "use strict";
      e.exports = r.p + "d1d5683e682403ee.scm";
    },
    718850(e, t, r) {
      "use strict";
      e.exports = r.p + "9659a56d1febda1f.scm";
    },
    867128(e, t, r) {
      "use strict";
      e.exports = r.p + "ca88c20b7cf9201e.wasm";
    },
    206965(e, t, r) {
      "use strict";
      e.exports = r.p + "49df8c4579e595cf.scm";
    },
    16076(e, t, r) {
      "use strict";
      e.exports = r.p + "378d2e61a0746a96.scm";
    },
    208626(e, t, r) {
      "use strict";
      e.exports = r.p + "d5a5dd5a59b729c1.scm";
    },
    56948(e, t, r) {
      "use strict";
      e.exports = r.p + "43a404ef2bacd054.wasm";
    },
    972942(e, t, r) {
      "use strict";
      e.exports = r.p + "e2e4ffe9446b9430.scm";
    },
    370800(e, t, r) {
      "use strict";
      e.exports = r.p + "2ce3dc45e1db6adb.wasm";
    },
    449794(e, t, r) {
      "use strict";
      e.exports = r.p + "b95a3d59c6e54c5a.scm";
    },
    697922(e, t, r) {
      "use strict";
      e.exports = r.p + "3994858ee4a3d1a5.wasm";
    },
    911112(e, t, r) {
      "use strict";
      e.exports = r.p + "c1a7d06de3d1ae83.scm";
    },
    495969(e, t, r) {
      "use strict";
      e.exports = r.p + "b5bfaaa4cb03e124.scm";
    },
    284030(e, t, r) {
      "use strict";
      e.exports = r.p + "3bb8623d0cf32050.wasm";
    },
    583152(e, t, r) {
      "use strict";
      e.exports = r.p + "4c2fad6f8a84d5f2.scm";
    },
    561740(e, t, r) {
      "use strict";
      e.exports = r.p + "73781ffe08a670a8.wasm";
    },
    363471(e, t, r) {
      "use strict";
      e.exports = r.p + "872d0bfaaff74572.scm";
    },
    771944(e, t, r) {
      "use strict";
      e.exports = r.p + "30338096d02ca71a.wasm";
    },
    883585(e, t, r) {
      "use strict";
      e.exports = r.p + "2b31faaf5a622150.scm";
    },
    299080(e, t, r) {
      "use strict";
      e.exports = r.p + "06ed02fb3171cf6d.wasm";
    },
    646866(e, t, r) {
      "use strict";
      e.exports = r.p + "1d975cf88cd6d438.scm";
    },
    70855(e, t, r) {
      "use strict";
      e.exports = r.p + "f78c17604b26eefb.scm";
    },
    66753(e, t, r) {
      "use strict";
      e.exports = r.p + "5002d3c2fa5919d9.scm";
    },
    316662(e, t, r) {
      "use strict";
      e.exports = r.p + "a2c69124836d682e.wasm";
    },
    137323(e, t, r) {
      "use strict";
      e.exports = r.p + "1d57cb39bf3f26f1.scm";
    },
    848368(e, t, r) {
      "use strict";
      e.exports = r.p + "ff93f208f0e34b16.wasm";
    },
    20080(e, t, r) {
      "use strict";
      e.exports = r.p + "9a8a39530b75f971.scm";
    },
    314786(e, t, r) {
      "use strict";
      e.exports = r.p + "6b24e319e808103a.wasm";
    },
    187311(e, t, r) {
      "use strict";
      e.exports = r.p + "9d7a1d34922edf76.scm";
    },
    316712(e, t, r) {
      "use strict";
      e.exports = r.p + "91b449b24fee47e6.wasm";
    },
    324828(e, t, r) {
      "use strict";
      e.exports = r.p + "7fe23f9203b51756.scm";
    },
    285568(e, t, r) {
      "use strict";
      e.exports = r.p + "f9a3103f4ee9d984.wasm";
    },
    823504(e, t, r) {
      "use strict";
      e.exports = r.p + "0d418e559e607820.scm";
    },
    787434(e, t, r) {
      "use strict";
      e.exports = r.p + "f603d7672d6a6e7e.wasm";
    },
    281161(e, t, r) {
      "use strict";
      e.exports = r.p + "0f6cf3430264982a.scm";
    },
    655652(e, t, r) {
      "use strict";
      e.exports = r.p + "3737e12dd107cd70.wasm";
    },
    871659(e, t, r) {
      "use strict";
      e.exports = r.p + "67b407c2a35b083c.scm";
    },
    273558(e, t, r) {
      "use strict";
      e.exports = r.p + "916bab3e06f5d5ba.scm";
    },
    864928(e, t, r) {
      "use strict";
      e.exports = r.p + "b4673c9c89418881.scm";
    },
    718992(e, t, r) {
      "use strict";
      e.exports = r.p + "7a0971b265902e89.wasm";
    },
    9916(e, t, r) {
      "use strict";
      e.exports = r.p + "7cc0acd33f903a55.scm";
    },
    516061(e, t, r) {
      "use strict";
      e.exports = r.p + "fe3cea4ec886ffda.scm";
    },
    86414(e, t, r) {
      "use strict";
      e.exports = r.p + "8cacbd2b1e532bba.wasm";
    },
    581934(e, t, r) {
      "use strict";
      e.exports = r.p + "4ba2f997145549c8.scm";
    },
    635995(e, t, r) {
      "use strict";
      e.exports = r.p + "8f7666f15b118b59.scm";
    },
    348820(e, t, r) {
      "use strict";
      e.exports = r.p + "5778c5dc2395f49c.wasm";
    },
    955268(e, t, r) {
      "use strict";
      e.exports = r.p + "f43f7dedfee334eb.scm";
    },
    675046(e, t, r) {
      "use strict";
      e.exports = r.p + "5c175a2f0586e96b.wasm";
    },
    448407(e, t, r) {
      "use strict";
      e.exports = r.p + "55072d0bf912d0a2.scm";
    },
    835952(e, t, r) {
      "use strict";
      e.exports = r.p + "5d0dc209a50a9e4c.wasm";
    },
    980429(e, t, r) {
      "use strict";
      e.exports = r.p + "0d0a5d0e2c94fe47.scm";
    },
    75464(e, t, r) {
      "use strict";
      e.exports = r.p + "986d76363cefe222.wasm";
    },
    714370(e, t, r) {
      "use strict";
      e.exports = r.p + "58c9a8aed17cb1f1.scm";
    },
    739191(e, t, r) {
      "use strict";
      e.exports = r.p + "e0b7a2d0c737a42b.scm";
    },
    227473(e, t, r) {
      "use strict";
      e.exports = r.p + "0af059d1dd61fef3.scm";
    },
    242508(e, t, r) {
      "use strict";
      e.exports = r.p + "6da9b27ce7cab314.wasm";
    },
    974591(e, t, r) {
      "use strict";
      e.exports = r.p + "1291257665f1e395.scm";
    },
    860306(e, t, r) {
      "use strict";
      e.exports = r.p + "be08ad58feef479c.scm";
    },
    373196(e, t, r) {
      "use strict";
      e.exports = r.p + "0298ed9734c0f49b.scm";
    },
    45456(e, t, r) {
      "use strict";
      e.exports = r.p + "db9153a6cdf43765.wasm";
    },
    602297(e, t, r) {
      "use strict";
      e.exports = r.p + "a52dbc97f447c6f8.scm";
    },
    347294(e, t, r) {
      "use strict";
      e.exports = r.p + "91d438d370df2fb9.scm";
    },
    916372(e, t, r) {
      "use strict";
      e.exports = r.p + "80a5722bc623941c.wasm";
    },
    358060(e, t, r) {
      "use strict";
      e.exports = r.p + "3e482b73ce2f1d69.scm";
    },
    486221(e, t, r) {
      "use strict";
      e.exports = r.p + "d90643289be970b6.scm";
    },
    571834(e, t, r) {
      "use strict";
      e.exports = r.p + "ba009a223769eb8f.wasm";
    },
    910825(e, t, r) {
      "use strict";
      e.exports = r.p + "c74b8f4de42fb2da.scm";
    },
    323e3(e, t, r) {
      "use strict";
      e.exports = r.p + "e394548d74912d61.scm";
    },
    247524(e, t, r) {
      "use strict";
      e.exports = r.p + "b5eaffe67f1557c0.wasm";
    },
    980524(e, t, r) {
      "use strict";
      e.exports = r.p + "4edda157d72b3808.scm";
    },
    628490(e, t, r) {
      "use strict";
      e.exports = r.p + "9e4fb139961e70d2.wasm";
    },
    449048(e, t, r) {
      "use strict";
      e.exports = r.p + "7aaa4791a7108ef1.scm";
    },
    177910(e, t, r) {
      "use strict";
      e.exports = r.p + "61665e8e89ab84fd.wasm";
    },
    290858(e, t, r) {
      "use strict";
      e.exports = r.p + "e9591638fc2a87af.scm";
    },
    330234(e, t, r) {
      "use strict";
      e.exports = r.p + "3b167da64f5d1d6f.wasm";
    },
    425335(e, t, r) {
      "use strict";
      e.exports = r.p + "5bac5070b554561d.scm";
    },
    181712(e, t, r) {
      "use strict";
      e.exports = r.p + "3f3519798accc469.wasm";
    },
    214685(e, t, r) {
      "use strict";
      e.exports = r.p + "31a797c4177b7453.scm";
    },
    840660(e, t, r) {
      "use strict";
      e.exports = r.p + "2dc3595467f9ed1b.scm";
    },
    892256(e, t, r) {
      "use strict";
      e.exports = r.p + "6c0268ca4767d79d.wasm";
    },
    652715(e, t, r) {
      "use strict";
      e.exports = r.p + "77cca439b48681fd.scm";
    },
    396576(e, t, r) {
      "use strict";
      e.exports = r.p + "a4bc55505fc9536f.scm";
    },
    157456(e, t, r) {
      "use strict";
      e.exports = r.p + "0557210109298761.wasm";
    },
    968038(e, t, r) {
      "use strict";
      e.exports = r.p + "5862f376888a8350.scm";
    },
    914189(e, t, r) {
      "use strict";
      e.exports = r.p + "e145a14fcbb9a393.scm";
    },
    705750(e, t, r) {
      "use strict";
      e.exports = r.p + "dbee2bca30941847.wasm";
    },
    855995(e, t, r) {
      "use strict";
      e.exports = r.p + "28047f781bb88e3a.scm";
    },
    479846(e, t, r) {
      "use strict";
      e.exports = r.p + "bf7803ec51ec3253.scm";
    },
    539152(e, t, r) {
      "use strict";
      e.exports = r.p + "d6864494d8ed8678.scm";
    },
    834640(e, t, r) {
      "use strict";
      e.exports = r.p + "56a6844e47ed00d6.wasm";
    },
    342870(e, t, r) {
      "use strict";
      e.exports = r.p + "d819ef4b6df05088.scm";
    },
    762296(e, t, r) {
      "use strict";
      e.exports = r.p + "53af3752c754c087.wasm";
    },
    221081(e, t, r) {
      "use strict";
      e.exports = r.p + "ff4875e34b10af15.scm";
    },
    282952(e, t, r) {
      "use strict";
      e.exports = r.p + "5d0750991aa24edb.wasm";
    },
    544211(e, t, r) {
      "use strict";
      e.exports = r.p + "a7fe368b1af4bff9.scm";
    },
    153278(e, t, r) {
      "use strict";
      e.exports = r.p + "9113833583a1967a.scm";
    },
    585232(e, t, r) {
      "use strict";
      e.exports = r.p + "44a11828e0c61f08.wasm";
    },
    636155(e, t, r) {
      "use strict";
      e.exports = r.p + "ab244c7915a4882a.scm";
    },
    798928(e, t, r) {
      "use strict";
      e.exports = r.p + "1a395c1d440d9bb5.scm";
    },
    715408(e, t, r) {
      "use strict";
      e.exports = r.p + "8812aeada150df4d.wasm";
    },
    499150(e, t, r) {
      "use strict";
      e.exports = r.p + "1d745fe76aec1178.scm";
    },
    910038(e, t, r) {
      "use strict";
      e.exports = r.p + "f60b8f5c207e5359.wasm";
    },
    581365(e, t, r) {
      "use strict";
      e.exports = r.p + "5abb4709a74efb87.scm";
    },
    42040(e, t, r) {
      "use strict";
      e.exports = r.p + "cf833be5c054a77a.wasm";
    },
    93492(e, t, r) {
      "use strict";
      e.exports = r.p + "17a02aa0e9d4b682.scm";
    },
    307379(e, t, r) {
      "use strict";
      e.exports = r.p + "f11ea8e873f2ad7a.scm";
    },
    711194(e, t, r) {
      "use strict";
      e.exports = r.p + "02a35fe8e81c2853.wasm";
    },
    512564(e, t, r) {
      "use strict";
      e.exports = r.p + "20d59b30c0bcd07b.scm";
    },
    622914(e, t, r) {
      "use strict";
      e.exports = r.p + "746af5998a0b7ac9.wasm";
    },
    631189(e, t, r) {
      "use strict";
      e.exports = r.p + "880f37d7d46a1210.scm";
    },
    295832(e, t, r) {
      "use strict";
      e.exports = r.p + "ecda9b3ec064a378.wasm";
    },
    400774(e, t, r) {
      "use strict";
      e.exports = r.p + "5f17f56e87bc030f.scm";
    },
    557011(e, t, r) {
      "use strict";
      e.exports = r.p + "ffc798ce19d71d0a.scm";
    },
    805938(e, t, r) {
      "use strict";
      e.exports = r.p + "4feef76a0d7aff8a.wasm";
    },
    757197(e, t, r) {
      "use strict";
      e.exports = r.p + "150079cffc11c19f.scm";
    },
    362116(e, t, r) {
      "use strict";
      e.exports = r.p + "6926cd0c58ac1bf3.scm";
    },
    607930(e, t, r) {
      "use strict";
      e.exports = r.p + "3477e34e77ae4659.scm";
    },
    317952(e, t, r) {
      "use strict";
      e.exports = r.p + "dc4e546ac5258279.wasm";
    },
    789227(e, t, r) {
      "use strict";
      e.exports = r.p + "ba3ff33752bdeb90.scm";
    },
    447638(e, t, r) {
      "use strict";
      e.exports = r.p + "25c677b3c2f23d03.scm";
    },
    793104(e, t, r) {
      "use strict";
      e.exports = r.p + "b65e9a1d7515980c.wasm";
    },
    582814(e, t, r) {
      "use strict";
      e.exports = r.p + "0e68dac0c0691a0c.scm";
    },
    994763(e, t, r) {
      "use strict";
      e.exports = r.p + "b46002b17c746471.scm";
    },
    756661(e, t, r) {
      "use strict";
      e.exports = r.p + "023e042f81f1d190.scm";
    },
    463302(e, t, r) {
      "use strict";
      e.exports = r.p + "fcb059e098364cef.wasm";
    },
    259850(e, t, r) {
      "use strict";
      e.exports = r.p + "4bd633ad81400c98.scm";
    },
    134399(e, t, r) {
      "use strict";
      e.exports = r.p + "7bbbd663402a67c4.scm";
    },
    917129(e, t, r) {
      "use strict";
      e.exports = r.p + "1bd9a135dae6ed53.scm";
    },
    682004(e, t, r) {
      "use strict";
      e.exports = r.p + "7ae3794b81ebcba8.wasm";
    },
    264834(e, t, r) {
      "use strict";
      e.exports = r.p + "9d2904ef6dd5e9fe.scm";
    },
    658400(e, t, r) {
      "use strict";
      e.exports = r.p + "14d4b9d117e56b22.wasm";
    },
    584122(e, t, r) {
      "use strict";
      e.exports = r.p + "3da6afe347130d3e.scm";
    },
    259439(e, t, r) {
      "use strict";
      e.exports = r.p + "ceb6f797636a2e63.scm";
    },
    720793(e, t, r) {
      "use strict";
      e.exports = r.p + "ae8158b5143b2105.scm";
    },
    40570(e, t, r) {
      "use strict";
      e.exports = r.p + "5bd4db186cf51c8b.wasm";
    },
    58894(e, t, r) {
      "use strict";
      e.exports = r.p + "4ed39dc06943c3e2.scm";
    },
    661637(e, t, r) {
      "use strict";
      e.exports = r.p + "48aa74bea3fcda40.scm";
    },
    703724(e, t, r) {
      "use strict";
      e.exports = r.p + "2ec8b637c8e0b57c.wasm";
    },
    191649(e, t, r) {
      "use strict";
      e.exports = r.p + "6a47e50cddd6b30f.scm";
    },
    155308(e, t, r) {
      "use strict";
      e.exports = r.p + "affb5b09ebb90e03.wasm";
    },
    613110(e, t, r) {
      "use strict";
      e.exports = r.p + "180b17205c422875.scm";
    },
    757629(e, t, r) {
      "use strict";
      e.exports = r.p + "27f2b7e9f1c3c033.scm";
    },
    21256(e, t, r) {
      "use strict";
      e.exports = r.p + "fe1336aa068c50d6.wasm";
    },
    648506(e, t, r) {
      "use strict";
      e.exports = r.p + "71e40836c4f58bd2.scm";
    },
    194201(e, t, r) {
      "use strict";
      e.exports = r.p + "27f2b7e9f1c3c033.scm";
    },
    733926(e, t, r) {
      "use strict";
      e.exports = r.p + "56dcffb1426c7643.wasm";
    },
    13079(e, t, r) {
      "use strict";
      e.exports = r.p + "268bf37036a7000e.scm";
    },
    960138(e, t, r) {
      "use strict";
      e.exports = r.p + "672084259765f452.scm";
    },
    262848(e, t, r) {
      "use strict";
      e.exports = r.p + "6a6b6795bb897737.wasm";
    },
    486859(e, t, r) {
      "use strict";
      e.exports = r.p + "1f8dd043494ee1f1.scm";
    },
    502768(e, t, r) {
      "use strict";
      e.exports = r.p + "fa2ccc14c5a0593d.wasm";
    },
    858987(e, t, r) {
      "use strict";
      e.exports = r.p + "89689369445eca3b.scm";
    },
    276912(e, t, r) {
      "use strict";
      e.exports = r.p + "22178b81b24702d6.wasm";
    },
    330909(e, t, r) {
      "use strict";
      e.exports = r.p + "cbaed2f8abecb5b8.scm";
    },
    440532(e, t, r) {
      "use strict";
      e.exports = r.p + "7692b169a722ff31.scm";
    },
    699736(e, t, r) {
      "use strict";
      e.exports = r.p + "8f278c002e0e9784.wasm";
    },
    4081(e, t, r) {
      "use strict";
      e.exports = r.p + "f81d26c65b6725c8.scm";
    },
    751968(e, t, r) {
      "use strict";
      e.exports = r.p + "6e18f7a201cbaf97.scm";
    },
    769320(e, t, r) {
      "use strict";
      e.exports = r.p + "351542e79139fb36.wasm";
    },
    856145(e, t, r) {
      "use strict";
      e.exports = r.p + "d838a86863f4f0dd.scm";
    },
    413056(e, t, r) {
      "use strict";
      e.exports = r.p + "4f098f595413c750.scm";
    },
    650024(e, t, r) {
      "use strict";
      e.exports = r.p + "f0cc1b80f561fb60.wasm";
    },
    489700(e, t, r) {
      "use strict";
      e.exports = r.p + "5e8f3bb7f8d4c68c.scm";
    },
    26558(e, t, r) {
      "use strict";
      e.exports = r.p + "78d9a07eb3de8635.wasm";
    },
    730180(e, t, r) {
      "use strict";
      e.exports = r.p + "338c675ef087c754.scm";
    },
    897836(e, t, r) {
      "use strict";
      e.exports = r.p + "520b8aeb8520dc6b.wasm";
    },
    395958(e, t, r) {
      "use strict";
      e.exports = r.p + "d1978ec42eed74f6.scm";
    },
    30290(e, t, r) {
      "use strict";
      e.exports = r.p + "2e4f937355ef638d.wasm";
    },
    686146(e, t, r) {
      "use strict";
      e.exports = r.p + "de82efe956afcfd0.scm";
    },
    78170(e, t, r) {
      "use strict";
      e.exports = r.p + "cec1113b799cc248.wasm";
    },
    692027(e, t, r) {
      "use strict";
      e.exports = r.p + "07316eddff5889b3.scm";
    },
    95334(e, t, r) {
      "use strict";
      e.exports = r.p + "b5d39ce99749cca1.scm";
    },
    256976(e, t, r) {
      "use strict";
      e.exports = r.p + "d02e778cf34d2166.wasm";
    },
    371952(e, t, r) {
      "use strict";
      e.exports = r.p + "ff32678d88643c9a.scm";
    },
    727216(e, t, r) {
      "use strict";
      e.exports = r.p + "ae550cee3b9e6b43.wasm";
    },
    79445(e, t, r) {
      "use strict";
      e.exports = r.p + "9d9d426962dd2fb8.wasm";
    },
    531031(e, t, r) {
      "use strict";
      e.exports = r.p + "fc1fef817cbb6528.wasm";
    },
    915639(e, t, r) {
      "use strict";
      async function i(e) {
        return null;
      }
      r.d(t, { pb: () => l, A: () => h });
      class n extends Error {
        kind;
        constructor(e, t) {
          super(t), (this.name = "ArboriumError"), (this.kind = e);
        }
      }
      function o(e, t) {
        if (0 === t.length) return [0, 0];
        let r = c.encode(t),
          i = e._malloc(r.length);
        return e.HEAPU8.set(r, i), [i, r.length];
      }
      async function s(e) {
        return e instanceof URL
          ? u(e)
          : e instanceof Uint8Array
            ? e
            : new Uint8Array(e);
      }
      async function a(e) {
        if ("string" == typeof e) return e;
        let t = await u(e);
        return d.decode(t);
      }
      async function u(e) {
        let t = await i(e);
        if (t) return t;
        let r = await fetch(e);
        if (!r.ok)
          throw new n(
            "asset-fetch-failed",
            `failed to fetch ${e.href}: ${r.status} ${r.statusText}`,
          );
        return new Uint8Array(await r.arrayBuffer());
      }
      let c = new TextEncoder(),
        d = new TextDecoder(),
        l = {
          ada: {
            languageId: "ada",
            languageExport: "tree_sitter_ada",
            wasm: new URL(r(554724), r.b),
            highlights: new URL(r(185621), r.b),
            locals: new URL(r(316690), r.b),
          },
          agda: {
            languageId: "agda",
            languageExport: "tree_sitter_agda",
            wasm: new URL(r(544958), r.b),
            highlights: new URL(r(308970), r.b),
          },
          asciidoc: {
            languageId: "asciidoc",
            languageExport: "tree_sitter_asciidoc",
            wasm: new URL(r(492338), r.b),
            highlights: new URL(r(501958), r.b),
          },
          asm: {
            languageId: "asm",
            languageExport: "tree_sitter_asm",
            wasm: new URL(r(691384), r.b),
            highlights: new URL(r(796510), r.b),
            injections: new URL(r(445323), r.b),
          },
          awk: {
            languageId: "awk",
            languageExport: "tree_sitter_awk",
            wasm: new URL(r(151408), r.b),
            highlights: new URL(r(371672), r.b),
          },
          bash: {
            languageId: "bash",
            languageExport: "tree_sitter_bash",
            wasm: new URL(r(996928), r.b),
            highlights: new URL(r(253475), r.b),
          },
          batch: {
            languageId: "batch",
            languageExport: "tree_sitter_batch",
            wasm: new URL(r(901052), r.b),
            highlights: new URL(r(820825), r.b),
          },
          c: {
            languageId: "c",
            languageExport: "tree_sitter_c",
            wasm: new URL(r(623584), r.b),
            highlights: new URL(r(371524), r.b),
          },
          "c-sharp": {
            languageId: "c-sharp",
            languageExport: "tree_sitter_c_sharp",
            wasm: new URL(r(533440), r.b),
            highlights: new URL(r(501721), r.b),
          },
          caddy: {
            languageId: "caddy",
            languageExport: "tree_sitter_caddy",
            wasm: new URL(r(284020), r.b),
            highlights: new URL(r(718266), r.b),
          },
          capnp: {
            languageId: "capnp",
            languageExport: "tree_sitter_capnp",
            wasm: new URL(r(867888), r.b),
            highlights: new URL(r(253515), r.b),
            injections: new URL(r(785462), r.b),
            locals: new URL(r(427200), r.b),
          },
          cedar: {
            languageId: "cedar",
            languageExport: "tree_sitter_cedar",
            wasm: new URL(r(747060), r.b),
            highlights: new URL(r(582242), r.b),
          },
          cedarschema: {
            languageId: "cedarschema",
            languageExport: "tree_sitter_cedarschema",
            wasm: new URL(r(662604), r.b),
            highlights: new URL(r(843389), r.b),
          },
          clojure: {
            languageId: "clojure",
            languageExport: "tree_sitter_clojure",
            wasm: new URL(r(124332), r.b),
            highlights: new URL(r(632781), r.b),
          },
          cmake: {
            languageId: "cmake",
            languageExport: "tree_sitter_cmake",
            wasm: new URL(r(555808), r.b),
            highlights: new URL(r(135538), r.b),
            injections: new URL(r(547431), r.b),
          },
          commonlisp: {
            languageId: "commonlisp",
            languageExport: "tree_sitter_commonlisp",
            wasm: new URL(r(122250), r.b),
            highlights: new URL(r(713796), r.b),
          },
          cpp: {
            languageId: "cpp",
            languageExport: "tree_sitter_cpp",
            wasm: new URL(r(590264), r.b),
            highlights: new URL(r(983420), r.b),
            injections: new URL(r(489565), r.b),
          },
          css: {
            languageId: "css",
            languageExport: "tree_sitter_css",
            wasm: new URL(r(328592), r.b),
            highlights: new URL(r(681166), r.b),
          },
          d: {
            languageId: "d",
            languageExport: "tree_sitter_d",
            wasm: new URL(r(222260), r.b),
            highlights: new URL(r(687429), r.b),
          },
          dart: {
            languageId: "dart",
            languageExport: "tree_sitter_dart",
            wasm: new URL(r(712298), r.b),
            highlights: new URL(r(108572), r.b),
          },
          devicetree: {
            languageId: "devicetree",
            languageExport: "tree_sitter_devicetree",
            wasm: new URL(r(640208), r.b),
            highlights: new URL(r(502907), r.b),
          },
          diff: {
            languageId: "diff",
            languageExport: "tree_sitter_diff",
            wasm: new URL(r(445854), r.b),
            highlights: new URL(r(655582), r.b),
          },
          dockerfile: {
            languageId: "dockerfile",
            languageExport: "tree_sitter_dockerfile",
            wasm: new URL(r(571368), r.b),
            highlights: new URL(r(604623), r.b),
          },
          dot: {
            languageId: "dot",
            languageExport: "tree_sitter_dot",
            wasm: new URL(r(84912), r.b),
            highlights: new URL(r(992094), r.b),
            injections: new URL(r(404043), r.b),
          },
          elisp: {
            languageId: "elisp",
            languageExport: "tree_sitter_elisp",
            wasm: new URL(r(161064), r.b),
            highlights: new URL(r(180458), r.b),
          },
          elixir: {
            languageId: "elixir",
            languageExport: "tree_sitter_elixir",
            wasm: new URL(r(941694), r.b),
            highlights: new URL(r(817218), r.b),
            injections: new URL(r(842039), r.b),
          },
          elm: {
            languageId: "elm",
            languageExport: "tree_sitter_elm",
            wasm: new URL(r(993684), r.b),
            highlights: new URL(r(565989), r.b),
            injections: new URL(r(777084), r.b),
            locals: new URL(r(224578), r.b),
          },
          erlang: {
            languageId: "erlang",
            languageExport: "tree_sitter_erlang",
            wasm: new URL(r(934434), r.b),
            highlights: new URL(r(72382), r.b),
          },
          fish: {
            languageId: "fish",
            languageExport: "tree_sitter_fish",
            wasm: new URL(r(482784), r.b),
            highlights: new URL(r(807991), r.b),
          },
          fsharp: {
            languageId: "fsharp",
            languageExport: "tree_sitter_fsharp",
            wasm: new URL(r(584784), r.b),
            highlights: new URL(r(581583), r.b),
            injections: new URL(r(471586), r.b),
            locals: new URL(r(645372), r.b),
          },
          gleam: {
            languageId: "gleam",
            languageExport: "tree_sitter_gleam",
            wasm: new URL(r(441672), r.b),
            highlights: new URL(r(679453), r.b),
            injections: new URL(r(531860), r.b),
            locals: new URL(r(345322), r.b),
          },
          glsl: {
            languageId: "glsl",
            languageExport: "tree_sitter_glsl",
            wasm: new URL(r(115088), r.b),
            highlights: new URL(r(463989), r.b),
          },
          go: {
            languageId: "go",
            languageExport: "tree_sitter_go",
            wasm: new URL(r(847392), r.b),
            highlights: new URL(r(757283), r.b),
          },
          graphql: {
            languageId: "graphql",
            languageExport: "tree_sitter_graphql",
            wasm: new URL(r(117256), r.b),
            highlights: new URL(r(477092), r.b),
          },
          groovy: {
            languageId: "groovy",
            languageExport: "tree_sitter_groovy",
            wasm: new URL(r(867128), r.b),
            highlights: new URL(r(971567), r.b),
            injections: new URL(r(718850), r.b),
          },
          haskell: {
            languageId: "haskell",
            languageExport: "tree_sitter_haskell",
            wasm: new URL(r(56948), r.b),
            highlights: new URL(r(206965), r.b),
            injections: new URL(r(16076), r.b),
            locals: new URL(r(208626), r.b),
          },
          hcl: {
            languageId: "hcl",
            languageExport: "tree_sitter_hcl",
            wasm: new URL(r(370800), r.b),
            highlights: new URL(r(972942), r.b),
          },
          hlsl: {
            languageId: "hlsl",
            languageExport: "tree_sitter_hlsl",
            wasm: new URL(r(697922), r.b),
            highlights: new URL(r(449794), r.b),
          },
          html: {
            languageId: "html",
            languageExport: "tree_sitter_html",
            wasm: new URL(r(284030), r.b),
            highlights: new URL(r(911112), r.b),
            injections: new URL(r(495969), r.b),
          },
          idris: {
            languageId: "idris",
            languageExport: "tree_sitter_idris",
            wasm: new URL(r(561740), r.b),
            highlights: new URL(r(583152), r.b),
          },
          ini: {
            languageId: "ini",
            languageExport: "tree_sitter_ini",
            wasm: new URL(r(771944), r.b),
            highlights: new URL(r(363471), r.b),
          },
          java: {
            languageId: "java",
            languageExport: "tree_sitter_java",
            wasm: new URL(r(299080), r.b),
            highlights: new URL(r(883585), r.b),
          },
          javascript: {
            languageId: "javascript",
            languageExport: "tree_sitter_javascript",
            wasm: new URL(r(316662), r.b),
            highlights: new URL(r(646866), r.b),
            injections: new URL(r(70855), r.b),
            locals: new URL(r(66753), r.b),
          },
          jinja2: {
            languageId: "jinja2",
            languageExport: "tree_sitter_jinja2",
            wasm: new URL(r(848368), r.b),
            highlights: new URL(r(137323), r.b),
          },
          jq: {
            languageId: "jq",
            languageExport: "tree_sitter_jq",
            wasm: new URL(r(314786), r.b),
            highlights: new URL(r(20080), r.b),
          },
          json: {
            languageId: "json",
            languageExport: "tree_sitter_json",
            wasm: new URL(r(316712), r.b),
            highlights: new URL(r(187311), r.b),
          },
          julia: {
            languageId: "julia",
            languageExport: "tree_sitter_julia",
            wasm: new URL(r(285568), r.b),
            highlights: new URL(r(324828), r.b),
          },
          kotlin: {
            languageId: "kotlin",
            languageExport: "tree_sitter_kotlin",
            wasm: new URL(r(787434), r.b),
            highlights: new URL(r(823504), r.b),
          },
          lean: {
            languageId: "lean",
            languageExport: "tree_sitter_lean",
            wasm: new URL(r(655652), r.b),
            highlights: new URL(r(281161), r.b),
          },
          lua: {
            languageId: "lua",
            languageExport: "tree_sitter_lua",
            wasm: new URL(r(718992), r.b),
            highlights: new URL(r(871659), r.b),
            injections: new URL(r(273558), r.b),
            locals: new URL(r(864928), r.b),
          },
          markdown: {
            languageId: "markdown",
            languageExport: "tree_sitter_markdown",
            wasm: new URL(r(86414), r.b),
            highlights: new URL(r(9916), r.b),
            injections: new URL(r(516061), r.b),
          },
          markdown_inline: {
            languageId: "markdown_inline",
            languageExport: "tree_sitter_markdown_inline",
            wasm: new URL(r(348820), r.b),
            highlights: new URL(r(581934), r.b),
            injections: new URL(r(635995), r.b),
          },
          matlab: {
            languageId: "matlab",
            languageExport: "tree_sitter_matlab",
            wasm: new URL(r(675046), r.b),
            highlights: new URL(r(955268), r.b),
          },
          meson: {
            languageId: "meson",
            languageExport: "tree_sitter_meson",
            wasm: new URL(r(835952), r.b),
            highlights: new URL(r(448407), r.b),
          },
          ninja: {
            languageId: "ninja",
            languageExport: "tree_sitter_ninja",
            wasm: new URL(r(75464), r.b),
            highlights: new URL(r(980429), r.b),
          },
          nix: {
            languageId: "nix",
            languageExport: "tree_sitter_nix",
            wasm: new URL(r(242508), r.b),
            highlights: new URL(r(714370), r.b),
            injections: new URL(r(739191), r.b),
            locals: new URL(r(227473), r.b),
          },
          objc: {
            languageId: "objc",
            languageExport: "tree_sitter_objc",
            wasm: new URL(r(45456), r.b),
            highlights: new URL(r(974591), r.b),
            injections: new URL(r(860306), r.b),
            locals: new URL(r(373196), r.b),
          },
          ocaml: {
            languageId: "ocaml",
            languageExport: "tree_sitter_ocaml",
            wasm: new URL(r(916372), r.b),
            highlights: new URL(r(602297), r.b),
            locals: new URL(r(347294), r.b),
          },
          perl: {
            languageId: "perl",
            languageExport: "tree_sitter_perl",
            wasm: new URL(r(571834), r.b),
            highlights: new URL(r(358060), r.b),
            injections: new URL(r(486221), r.b),
          },
          php: {
            languageId: "php",
            languageExport: "tree_sitter_php",
            wasm: new URL(r(247524), r.b),
            highlights: new URL(r(910825), r.b),
            injections: new URL(r(323e3), r.b),
          },
          postscript: {
            languageId: "postscript",
            languageExport: "tree_sitter_postscript",
            wasm: new URL(r(628490), r.b),
            highlights: new URL(r(980524), r.b),
          },
          powershell: {
            languageId: "powershell",
            languageExport: "tree_sitter_powershell",
            wasm: new URL(r(177910), r.b),
            highlights: new URL(r(449048), r.b),
          },
          prolog: {
            languageId: "prolog",
            languageExport: "tree_sitter_prolog",
            wasm: new URL(r(330234), r.b),
            highlights: new URL(r(290858), r.b),
          },
          python: {
            languageId: "python",
            languageExport: "tree_sitter_python",
            wasm: new URL(r(181712), r.b),
            highlights: new URL(r(425335), r.b),
          },
          query: {
            languageId: "query",
            languageExport: "tree_sitter_query",
            wasm: new URL(r(892256), r.b),
            highlights: new URL(r(214685), r.b),
            injections: new URL(r(840660), r.b),
          },
          r: {
            languageId: "r",
            languageExport: "tree_sitter_r",
            wasm: new URL(r(157456), r.b),
            highlights: new URL(r(652715), r.b),
            locals: new URL(r(396576), r.b),
          },
          rego: {
            languageId: "rego",
            languageExport: "tree_sitter_rego",
            wasm: new URL(r(705750), r.b),
            highlights: new URL(r(968038), r.b),
            locals: new URL(r(914189), r.b),
          },
          rescript: {
            languageId: "rescript",
            languageExport: "tree_sitter_rescript",
            wasm: new URL(r(834640), r.b),
            highlights: new URL(r(855995), r.b),
            injections: new URL(r(479846), r.b),
            locals: new URL(r(539152), r.b),
          },
          ron: {
            languageId: "ron",
            languageExport: "tree_sitter_ron",
            wasm: new URL(r(762296), r.b),
            highlights: new URL(r(342870), r.b),
          },
          ruby: {
            languageId: "ruby",
            languageExport: "tree_sitter_ruby",
            wasm: new URL(r(282952), r.b),
            highlights: new URL(r(221081), r.b),
          },
          rust: {
            languageId: "rust",
            languageExport: "tree_sitter_rust_orchard",
            wasm: new URL(r(585232), r.b),
            highlights: new URL(r(544211), r.b),
            injections: new URL(r(153278), r.b),
          },
          scala: {
            languageId: "scala",
            languageExport: "tree_sitter_scala",
            wasm: new URL(r(715408), r.b),
            highlights: new URL(r(636155), r.b),
            locals: new URL(r(798928), r.b),
          },
          scheme: {
            languageId: "scheme",
            languageExport: "tree_sitter_scheme",
            wasm: new URL(r(910038), r.b),
            highlights: new URL(r(499150), r.b),
          },
          scss: {
            languageId: "scss",
            languageExport: "tree_sitter_scss",
            wasm: new URL(r(42040), r.b),
            highlights: new URL(r(581365), r.b),
          },
          solidity: {
            languageId: "solidity",
            languageExport: "tree_sitter_solidity",
            wasm: new URL(r(711194), r.b),
            highlights: new URL(r(93492), r.b),
            locals: new URL(r(307379), r.b),
          },
          sparql: {
            languageId: "sparql",
            languageExport: "tree_sitter_sparql",
            wasm: new URL(r(622914), r.b),
            highlights: new URL(r(512564), r.b),
          },
          sql: {
            languageId: "sql",
            languageExport: "tree_sitter_sql",
            wasm: new URL(r(295832), r.b),
            highlights: new URL(r(631189), r.b),
          },
          "ssh-config": {
            languageId: "ssh-config",
            languageExport: "tree_sitter_ssh_config",
            wasm: new URL(r(805938), r.b),
            highlights: new URL(r(400774), r.b),
            injections: new URL(r(557011), r.b),
          },
          starlark: {
            languageId: "starlark",
            languageExport: "tree_sitter_starlark",
            wasm: new URL(r(317952), r.b),
            highlights: new URL(r(757197), r.b),
            injections: new URL(r(362116), r.b),
            locals: new URL(r(607930), r.b),
          },
          styx: {
            languageId: "styx",
            languageExport: "tree_sitter_styx",
            wasm: new URL(r(793104), r.b),
            highlights: new URL(r(789227), r.b),
            injections: new URL(r(447638), r.b),
          },
          svelte: {
            languageId: "svelte",
            languageExport: "tree_sitter_svelte",
            wasm: new URL(r(463302), r.b),
            highlights: new URL(r(582814), r.b),
            injections: new URL(r(994763), r.b),
            locals: new URL(r(756661), r.b),
          },
          swift: {
            languageId: "swift",
            languageExport: "tree_sitter_swift",
            wasm: new URL(r(682004), r.b),
            highlights: new URL(r(259850), r.b),
            injections: new URL(r(134399), r.b),
            locals: new URL(r(917129), r.b),
          },
          textproto: {
            languageId: "textproto",
            languageExport: "tree_sitter_textproto",
            wasm: new URL(r(658400), r.b),
            highlights: new URL(r(264834), r.b),
          },
          thrift: {
            languageId: "thrift",
            languageExport: "tree_sitter_thrift",
            wasm: new URL(r(40570), r.b),
            highlights: new URL(r(584122), r.b),
            injections: new URL(r(259439), r.b),
            locals: new URL(r(720793), r.b),
          },
          tlaplus: {
            languageId: "tlaplus",
            languageExport: "tree_sitter_tlaplus",
            wasm: new URL(r(703724), r.b),
            highlights: new URL(r(58894), r.b),
            locals: new URL(r(661637), r.b),
          },
          toml: {
            languageId: "toml",
            languageExport: "tree_sitter_toml",
            wasm: new URL(r(155308), r.b),
            highlights: new URL(r(191649), r.b),
          },
          tsx: {
            languageId: "tsx",
            languageExport: "tree_sitter_tsx",
            wasm: new URL(r(21256), r.b),
            highlights: new URL(r(613110), r.b),
            locals: new URL(r(757629), r.b),
          },
          typescript: {
            languageId: "typescript",
            languageExport: "tree_sitter_typescript",
            wasm: new URL(r(733926), r.b),
            highlights: new URL(r(648506), r.b),
            locals: new URL(r(194201), r.b),
          },
          typst: {
            languageId: "typst",
            languageExport: "tree_sitter_typst",
            wasm: new URL(r(262848), r.b),
            highlights: new URL(r(13079), r.b),
            injections: new URL(r(960138), r.b),
          },
          verilog: {
            languageId: "verilog",
            languageExport: "tree_sitter_verilog",
            wasm: new URL(r(502768), r.b),
            highlights: new URL(r(486859), r.b),
          },
          vhdl: {
            languageId: "vhdl",
            languageExport: "tree_sitter_vhdl",
            wasm: new URL(r(276912), r.b),
            highlights: new URL(r(858987), r.b),
          },
          vim: {
            languageId: "vim",
            languageExport: "tree_sitter_vim",
            wasm: new URL(r(699736), r.b),
            highlights: new URL(r(330909), r.b),
            injections: new URL(r(440532), r.b),
          },
          vue: {
            languageId: "vue",
            languageExport: "tree_sitter_vue",
            wasm: new URL(r(769320), r.b),
            highlights: new URL(r(4081), r.b),
            injections: new URL(r(751968), r.b),
          },
          wit: {
            languageId: "wit",
            languageExport: "tree_sitter_wit",
            wasm: new URL(r(650024), r.b),
            highlights: new URL(r(856145), r.b),
            injections: new URL(r(413056), r.b),
          },
          x86asm: {
            languageId: "x86asm",
            languageExport: "tree_sitter_x86asm",
            wasm: new URL(r(26558), r.b),
            highlights: new URL(r(489700), r.b),
          },
          xml: {
            languageId: "xml",
            languageExport: "tree_sitter_xml",
            wasm: new URL(r(897836), r.b),
            highlights: new URL(r(730180), r.b),
          },
          yaml: {
            languageId: "yaml",
            languageExport: "tree_sitter_yaml",
            wasm: new URL(r(30290), r.b),
            highlights: new URL(r(395958), r.b),
          },
          yuri: {
            languageId: "yuri",
            languageExport: "tree_sitter_yuri",
            wasm: new URL(r(78170), r.b),
            highlights: new URL(r(686146), r.b),
          },
          zig: {
            languageId: "zig",
            languageExport: "tree_sitter_zig",
            wasm: new URL(r(256976), r.b),
            highlights: new URL(r(692027), r.b),
            injections: new URL(r(95334), r.b),
          },
          zsh: {
            languageId: "zsh",
            languageExport: "tree_sitter_zsh",
            wasm: new URL(r(727216), r.b),
            highlights: new URL(r(371952), r.b),
          },
        };
      async function h() {
        let e = await g(),
          [t, i] = await Promise.all([
            s(new URL(r(79445), r.b)),
            s(new URL(r(531031), r.b)),
          ]),
          n = await e({ wasmBinary: t }),
          o = await n.loadWebAssemblyModule(i, { loadAsync: !0 });
        return new f(n, o);
      }
      class f {
        host;
        abi;
        constructor(e, t) {
          (this.host = e), (this.abi = t);
        }
        async loadGrammar(e) {
          if (!e.languageId)
            throw new n(
              "grammar-registration-failed",
              "loadGrammar: languageId is required (must match the name referenced by injection queries)",
            );
          let [t, r, i, u] = await Promise.all([
              s(e.wasm),
              a(e.highlights),
              void 0 === e.injections ? "" : a(e.injections),
              void 0 === e.locals ? "" : a(e.locals),
            ]),
            c = (function (e, t) {
              if (void 0 !== t) {
                let r = e[t];
                if ("function" != typeof r)
                  throw new n(
                    "grammar-language-export-missing",
                    `grammar module has no function export named ${JSON.stringify(t)}`,
                  );
                return r;
              }
              let r = Object.keys(e).filter(
                (t) =>
                  t.startsWith("tree_sitter_") && "function" == typeof e[t],
              );
              if (0 === r.length)
                throw new n(
                  "grammar-language-export-missing",
                  "grammar module has no function export starting with tree_sitter_",
                );
              if (r.length > 1)
                throw new n(
                  "grammar-language-export-missing",
                  `grammar module has multiple tree_sitter_* exports: ${r.join(", ")}. Pass options.languageExport to disambiguate.`,
                );
              return e[r[0]];
            })(
              await this.host.loadWebAssemblyModule(t, { loadAsync: !0 }),
              e.languageExport,
            )();
          if (!c)
            throw new n(
              "grammar-registration-failed",
              "grammar tree_sitter_* export returned null",
            );
          let [d, l] = o(this.host, e.languageId),
            [h, f] = o(this.host, r),
            [m, g] = o(this.host, i),
            [_, b] = o(this.host, u),
            v = 0;
          try {
            v = this.abi.arborium_rt_register_grammar(
              c,
              d,
              l,
              h,
              f,
              m,
              g,
              _,
              b,
            );
          } finally {
            d && this.host._free(d),
              h && this.host._free(h),
              m && this.host._free(m),
              _ && this.host._free(_);
          }
          if (0 === v)
            throw new n(
              "grammar-registration-failed",
              "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
          return new p(this, v, c, e.languageId);
        }
      }
      class p {
        runtime;
        id;
        languagePtr;
        languageId;
        #e = !1;
        constructor(e, t, r, i) {
          (this.runtime = e),
            (this.id = t),
            (this.languagePtr = r),
            (this.languageId = i);
        }
        createSession() {
          this.#t();
          let e = this.runtime.abi.arborium_rt_create_session(this.id);
          if (0 === e)
            throw new n(
              "session-creation-failed",
              `arborium_rt_create_session(${this.id}) returned 0`,
            );
          return new m(this, e);
        }
        unregister() {
          this.#e ||
            (this.runtime.abi.arborium_rt_unregister_grammar(this.id),
            (this.#e = !0));
        }
        #t() {
          if (this.#e)
            throw new n(
              "grammar-registration-failed",
              `grammar ${this.id} has been unregistered`,
            );
        }
      }
      class m {
        grammar;
        id;
        #r = !1;
        constructor(e, t) {
          (this.grammar = e), (this.id = t);
        }
        setText(e) {
          this.#t();
          let [t, r] = o(this.grammar.runtime.host, e);
          try {
            this.grammar.runtime.abi.arborium_rt_set_text(this.id, t, r);
          } finally {
            t && this.grammar.runtime.host._free(t);
          }
        }
        parse() {
          return (
            this.#t(),
            this.#i(
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
            r = this.#i(
              "highlight-failed",
              (e, r) =>
                this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(
                  this.id,
                  t,
                  e,
                  r,
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
            spans: r.spans,
            missingInjections: r.missing_injections,
            outOfFuelLanguages: r.out_of_fuel_languages,
            fuelUsed: r.fuel_used,
          };
        }
        highlightToHtml(e = {}) {
          this.#t();
          let t = e.maxInjectionDepth ?? 3,
            r = e.format ?? { kind: "custom-elements" },
            { host: i } = this.grammar.runtime,
            { code: n, prefix: s } = (function (e) {
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
            })(r),
            [a, u] = o(i, s);
          try {
            let e = this.#i(
              "highlight-failed",
              (e, r) =>
                this.grammar.runtime.abi.arborium_rt_highlight_to_html(
                  this.id,
                  t,
                  n,
                  a,
                  u,
                  e,
                  r,
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
            a && i._free(a);
          }
        }
        cancel() {
          this.#t(), this.grammar.runtime.abi.arborium_rt_cancel(this.id);
        }
        free() {
          this.#r ||
            (this.grammar.runtime.abi.arborium_rt_free_session(this.id),
            (this.#r = !0));
        }
        #t() {
          if (this.#r)
            throw new n(
              "session-creation-failed",
              `session ${this.id} has been freed`,
            );
        }
        #i(e, t, r) {
          let { host: i, abi: o } = this.grammar.runtime,
            s = i._malloc(4),
            a = i._malloc(4);
          try {
            let u = t(s, a);
            if (0 !== u)
              throw new n(e, `arborium_rt call returned status ${u}`);
            let c = i.getValue(s, "i32"),
              l = i.getValue(a, "i32");
            if (0 === l) return r("");
            try {
              return r(0 === l ? "" : d.decode(i.HEAPU8.subarray(c, c + l)));
            } finally {
              o.arborium_rt_free(c, l);
            }
          } finally {
            i._free(s), i._free(a);
          }
        }
      }
      async function g() {
        return (await r.e("379098").then(r.bind(r, 623777))).default;
      }
    },
    159563(e, t, r) {
      "use strict";
      function i(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (r.length
              ? " " +
                r
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf",
        );
      }
      function n(e) {
        return !!e && !!e[N];
      }
      function o(e) {
        var t;
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var r =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              r === Object ||
              ("function" == typeof r && Function.toString.call(r) === W)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[B] ||
            !!(null == (t = e.constructor) ? void 0 : t[B]) ||
            d(e) ||
            l(e))
        );
      }
      function s(e, t, r) {
        void 0 === r && (r = !1),
          0 === a(e)
            ? (r ? Object.keys : H)(e).forEach(function (i) {
                (r && "symbol" == typeof i) || t(i, e[i], e);
              })
            : e.forEach(function (r, i) {
                return t(i, r, e);
              });
      }
      function a(e) {
        var t = e[N];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
            ? 1
            : d(e)
              ? 2
              : 3 * !!l(e);
      }
      function u(e, t) {
        return 2 === a(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function c(e, t, r) {
        var i = a(e);
        2 === i ? e.set(t, r) : 3 === i ? e.add(r) : (e[t] = r);
      }
      function d(e) {
        return D && e instanceof Map;
      }
      function l(e) {
        return F && e instanceof Set;
      }
      function h(e) {
        return e.o || e.t;
      }
      function f(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = G(e);
        delete t[N];
        for (var r = H(t), i = 0; i < r.length; i++) {
          var n = r[i],
            o = t[n];
          !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
            (o.get || o.set) &&
              (t[n] = {
                configurable: !0,
                writable: !0,
                enumerable: o.enumerable,
                value: e[n],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function p(e, t) {
        return (
          void 0 === t && (t = !1),
          g(e) ||
            n(e) ||
            !o(e) ||
            (a(e) > 1 && (e.set = e.add = e.clear = e.delete = m),
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
      function m() {
        i(2);
      }
      function g(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function _(e) {
        var t = X[e];
        return t || i(18, e), t;
      }
      r.d(t, { Qx: () => n, jM: () => Q, mq: () => K, vD: () => Z });
      function b(e, t) {
        t && (_("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function v(e) {
        y(e), e.p.forEach(V), (e.p = null);
      }
      function y(e) {
        e === U && (U = e.l);
      }
      function w(e) {
        return (U = { p: [], l: U, h: e, m: !0, _: 0 });
      }
      function V(e) {
        var t = e[N];
        0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
      }
      function x(e, t) {
        t._ = t.p.length;
        var r = t.p[0],
          n = void 0 !== e && e !== r;
        return (
          t.h.O || _("ES5").S(t, e, n),
          n
            ? (r[N].P && (v(t), i(4)),
              o(e) && ((e = T(t, e)), t.l || E(t, e)),
              t.u && _("Patches").M(r[N].t, e, t.u, t.s))
            : (e = T(t, r, [])),
          v(t),
          t.u && t.v(t.u, t.s),
          e !== j ? e : void 0
        );
      }
      function T(e, t, r) {
        if (g(t)) return t;
        var i = t[N];
        if (!i)
          return (
            s(
              t,
              function (n, o) {
                return k(e, i, t, n, o, r);
              },
              !0,
            ),
            t
          );
        if (i.A !== e) return t;
        if (!i.P) return E(e, i.t, !0), i.t;
        if (!i.I) {
          (i.I = !0), i.A._--;
          var n = 4 === i.i || 5 === i.i ? (i.o = f(i.k)) : i.o,
            o = n,
            a = !1;
          3 === i.i && ((o = new Set(n)), n.clear(), (a = !0)),
            s(o, function (t, o) {
              return k(e, i, n, t, o, r, a);
            }),
            E(e, n, !1),
            r && e.u && _("Patches").N(i, r, e.u, e.s);
        }
        return i.o;
      }
      function k(e, t, r, i, s, a, d) {
        if (n(s)) {
          var l = T(
            e,
            s,
            a && t && 3 !== t.i && !u(t.R, i) ? a.concat(i) : void 0,
          );
          if ((c(r, i, l), !n(l))) return;
          e.m = !1;
        } else d && r.add(s);
        if (o(s) && !g(s)) {
          if (!e.h.D && e._ < 1) return;
          T(e, s), (t && t.A.l) || E(e, s);
        }
      }
      function E(e, t, r) {
        void 0 === r && (r = !1), !e.l && e.h.D && e.m && p(t, r);
      }
      function A(e, t) {
        var r = e[N];
        return (r ? h(r) : e)[t];
      }
      function R(e, t) {
        if (t in e)
          for (var r = Object.getPrototypeOf(e); r; ) {
            var i = Object.getOwnPropertyDescriptor(r, t);
            if (i) return i;
            r = Object.getPrototypeOf(r);
          }
      }
      function P(e) {
        e.P || ((e.P = !0), e.l && P(e.l));
      }
      function O(e) {
        e.o || (e.o = f(e.t));
      }
      function I(e, t, r) {
        var i,
          n,
          o,
          s,
          a,
          u,
          c,
          h = d(t)
            ? _("MapSet").F(t, r)
            : l(t)
              ? _("MapSet").T(t, r)
              : e.O
                ? ((o = n =
                    {
                      i: +!!(i = Array.isArray(t)),
                      A: r ? r.A : U,
                      P: !1,
                      I: !1,
                      R: {},
                      l: r,
                      t: t,
                      k: null,
                      o: null,
                      j: null,
                      C: !1,
                    }),
                  (s = z),
                  i && ((o = [n]), (s = q)),
                  (u = (a = Proxy.revocable(o, s)).revoke),
                  (n.k = c = a.proxy),
                  (n.j = u),
                  c)
                : _("ES5").J(t, r);
        return (r ? r.A : U).p.push(h), h;
      }
      function S(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return f(e);
      }
      var L,
        U,
        C = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
        D = "u" > typeof Map,
        F = "u" > typeof Set,
        M =
          "u" > typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "u" > typeof Reflect,
        j = C
          ? Symbol.for("immer-nothing")
          : (((L = {})["immer-nothing"] = !0), L),
        B = C ? Symbol.for("immer-draftable") : "__$immer_draftable",
        N = C ? Symbol.for("immer-state") : "__$immer_state",
        W = "" + Object.prototype.constructor,
        H =
          "u" > typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                    Object.getOwnPropertySymbols(e),
                  );
                }
              : Object.getOwnPropertyNames,
        G =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              H(e).forEach(function (r) {
                t[r] = Object.getOwnPropertyDescriptor(e, r);
              }),
              t
            );
          },
        X = {},
        z = {
          get: function (e, t) {
            if (t === N) return e;
            var r,
              i,
              n = h(e);
            if (!u(n, t))
              return (i = R(n, t))
                ? "value" in i
                  ? i.value
                  : null == (r = i.get)
                    ? void 0
                    : r.call(e.k)
                : void 0;
            var s = n[t];
            return e.I || !o(s)
              ? s
              : s === A(e.t, t)
                ? (O(e), (e.o[t] = I(e.A.h, s, e)))
                : s;
          },
          has: function (e, t) {
            return t in h(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(h(e));
          },
          set: function (e, t, r) {
            var i = R(h(e), t);
            if (null == i ? void 0 : i.set) return i.set.call(e.k, r), !0;
            if (!e.P) {
              var n = A(h(e), t),
                o = null == n ? void 0 : n[N];
              if (o && o.t === r) return (e.o[t] = r), (e.R[t] = !1), !0;
              if (
                (r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) &&
                (void 0 !== r || u(e.t, t))
              )
                return !0;
              O(e), P(e);
            }
            return (
              (e.o[t] === r && (void 0 !== r || t in e.o)) ||
                (Number.isNaN(r) && Number.isNaN(e.o[t])) ||
                ((e.o[t] = r), (e.R[t] = !0)),
              !0
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== A(e.t, t) || t in e.t
                ? ((e.R[t] = !1), O(e), P(e))
                : delete e.R[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var r = h(e),
              i = Reflect.getOwnPropertyDescriptor(r, t);
            return i
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: i.enumerable,
                  value: r[t],
                }
              : i;
          },
          defineProperty: function () {
            i(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            i(12);
          },
        },
        q = {};
      s(z, function (e, t) {
        q[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (q.deleteProperty = function (e, t) {
          return q.set.call(this, e, t, void 0);
        }),
        (q.set = function (e, t, r) {
          return z.set.call(this, e[0], t, r, e[0]);
        });
      var Y = new ((function () {
          function e(e) {
            var t = this;
            (this.O = M),
              (this.D = !0),
              (this.produce = function (e, r, n) {
                if ("function" == typeof e && "function" != typeof r) {
                  var s,
                    a = r;
                  return (
                    (r = e),
                    function (e) {
                      var i = this;
                      void 0 === e && (e = a);
                      for (
                        var n = arguments.length,
                          o = Array(n > 1 ? n - 1 : 0),
                          s = 1;
                        s < n;
                        s++
                      )
                        o[s - 1] = arguments[s];
                      return t.produce(e, function (e) {
                        var t;
                        return (t = r).call.apply(t, [i, e].concat(o));
                      });
                    }
                  );
                }
                if (
                  ("function" != typeof r && i(6),
                  void 0 !== n && "function" != typeof n && i(7),
                  o(e))
                ) {
                  var u = w(t),
                    c = I(t, e, void 0),
                    d = !0;
                  try {
                    (s = r(c)), (d = !1);
                  } finally {
                    d ? v(u) : y(u);
                  }
                  return "u" > typeof Promise && s instanceof Promise
                    ? s.then(
                        function (e) {
                          return b(u, n), x(e, u);
                        },
                        function (e) {
                          throw (v(u), e);
                        },
                      )
                    : (b(u, n), x(s, u));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (s = r(e)) && (s = e),
                    s === j && (s = void 0),
                    t.D && p(s, !0),
                    n)
                  ) {
                    var l = [],
                      h = [];
                    _("Patches").M(e, s, l, h), n(l, h);
                  }
                  return s;
                }
                i(21, e);
              }),
              (this.produceWithPatches = function (e, r) {
                if ("function" == typeof e)
                  return function (r) {
                    for (
                      var i = arguments.length,
                        n = Array(i > 1 ? i - 1 : 0),
                        o = 1;
                      o < i;
                      o++
                    )
                      n[o - 1] = arguments[o];
                    return t.produceWithPatches(r, function (t) {
                      return e.apply(void 0, [t].concat(n));
                    });
                  };
                var i,
                  n,
                  o = t.produce(e, r, function (e, t) {
                    (i = e), (n = t);
                  });
                return "u" > typeof Promise && o instanceof Promise
                  ? o.then(function (e) {
                      return [e, i, n];
                    })
                  : [o, i, n];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              o(e) || i(8),
                n(e) &&
                  (n((t = e)) || i(22, t),
                  (e = (function e(t) {
                    if (!o(t)) return t;
                    var r,
                      i = t[N],
                      n = a(t);
                    if (i) {
                      if (!i.P && (i.i < 4 || !_("ES5").K(i))) return i.t;
                      (i.I = !0), (r = S(t, n)), (i.I = !1);
                    } else r = S(t, n);
                    return (
                      s(r, function (t, n) {
                        var o;
                        (i &&
                          ((o = i.t), (2 === a(o) ? o.get(t) : o[t]) === n)) ||
                          c(r, t, e(n));
                      }),
                      3 === n ? new Set(r) : r
                    );
                  })(t)));
              var t,
                r = w(this),
                u = I(this, e, void 0);
              return (u[N].C = !0), y(r), u;
            }),
            (t.finishDraft = function (e, t) {
              var r = (e && e[N]).A;
              return b(r, t), x(void 0, r);
            }),
            (t.setAutoFreeze = function (e) {
              this.D = e;
            }),
            (t.setUseProxies = function (e) {
              e && !M && i(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
              for (r = t.length - 1; r >= 0; r--) {
                var r,
                  i = t[r];
                if (0 === i.path.length && "replace" === i.op) {
                  e = i.value;
                  break;
                }
              }
              r > -1 && (t = t.slice(r + 1));
              var o = _("Patches").$;
              return n(e)
                ? o(e, t)
                : this.produce(e, function (e) {
                    return o(e, t);
                  });
            }),
            e
          );
        })())(),
        Q = Y.produce,
        K =
          (Y.produceWithPatches.bind(Y),
          Y.setAutoFreeze.bind(Y),
          Y.setUseProxies.bind(Y),
          Y.applyPatches.bind(Y),
          Y.createDraft.bind(Y)),
        Z = Y.finishDraft.bind(Y);
    },
    694260(e, t, r) {
      "use strict";
      function i(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function n(e) {
        var t, r;
        return (
          !1 !== i(e) &&
          (void 0 === (t = e.constructor) ||
            (!1 !== i((r = t.prototype)) &&
              !1 !== r.hasOwnProperty("isPrototypeOf")))
        );
      }
      r.d(t, { Q: () => n });
    },
  },
]);
//# sourceMappingURL=354100.af7ca6bee0751fe3.js.map
