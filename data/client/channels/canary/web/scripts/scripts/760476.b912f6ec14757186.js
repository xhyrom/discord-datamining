(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [760476],
  {
    838259(e, t, n) {
      "use strict";
      var r, i;
      ((i = r || (r = {})).BORDER_BOX = "border-box"),
        (i.CONTENT_BOX = "content-box"),
        (i.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"),
        n.d(t, { U: () => r });
    },
    273739(e, t, n) {
      "use strict";
      n.d(t, { J: () => S });
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
        d = function (e) {
          if ((0, u.dK)(e)) return 1 / 0;
          for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
          return t;
        },
        c = n(535191),
        l = function () {
          var e = 1 / 0,
            t = [];
          i.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
              var r = [];
              n.activeTargets.forEach(function (t) {
                var n = new o.Z(t.target),
                  i = d(t.target);
                r.push(n),
                  (t.lastReportedSize = (0, c.P)(t.target, t.observedBox)),
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
        f = function (e) {
          i.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (n) {
                n.isActive() &&
                  (d(n.target) > e
                    ? t.activeTargets.push(n)
                    : t.skippedTargets.push(n));
              });
          });
        },
        h = function () {
          var e = 0;
          for (
            f(0);
            i.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            f((e = l()));
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
        y = 0,
        b = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        v = [
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
        T = new ((function () {
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
                var n = w(e);
                g(function () {
                  var r = !1;
                  try {
                    r = h();
                  } finally {
                    if (((V = !1), (e = n - w()), !y)) return;
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
                  return e.observer && e.observer.observe(document.body, b);
                };
              document.body ? t() : p.S.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                v.forEach(function (t) {
                  return p.S.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                v.forEach(function (t) {
                  return p.S.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        x = function (e) {
          !y && e > 0 && T.start(), (y += e) || T.stop();
        },
        E = n(838259),
        k = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || E.U.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = (0, c.P)(this.target, this.observedBox, !0);
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
          for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
          return -1;
        },
        S = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var n = new A(e, t);
              R.set(e, n);
            }),
            (e.observe = function (e, t, n) {
              var r = R.get(e),
                a = 0 === r.observationTargets.length;
              0 > P(r.observationTargets, t) &&
                (a && i.push(r),
                r.observationTargets.push(new k(t, n && n.box)),
                x(1),
                T.schedule());
            }),
            (e.unobserve = function (e, t) {
              var n = R.get(e),
                r = P(n.observationTargets, t),
                a = 1 === n.observationTargets.length;
              r >= 0 &&
                (a && i.splice(i.indexOf(n), 1),
                n.observationTargets.splice(r, 1),
                x(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                n = R.get(e);
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
      var r = n(535191),
        i = n(47361);
      n.d(
        t,
        {},
        {
          Z: function (e) {
            var t = (0, r.m)(e);
            (this.target = e),
              (this.contentRect = t.contentRect),
              (this.borderBoxSize = (0, i.C)([t.borderBoxSize])),
              (this.contentBoxSize = (0, i.C)([t.contentBoxSize])),
              (this.devicePixelContentBoxSize = (0, i.C)([
                t.devicePixelContentBoxSize,
              ]));
          },
        },
      );
    },
    162563(e, t, n) {
      "use strict";
      var r = n(47361);
      n.d(
        t,
        {},
        {
          a: function (e, t) {
            (this.inlineSize = e), (this.blockSize = t), (0, r.C)(this);
          },
        },
      );
    },
    535191(e, t, n) {
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
        d = new WeakMap(),
        c = /auto|scroll/,
        l = /^tb|vertical/,
        f = /msie|trident/i.test(u.S.navigator && u.S.navigator.userAgent),
        h = function (e) {
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
          if ((void 0 === t && (t = !1), d.has(e) && !t)) return d.get(e);
          if ((0, o.dK)(e)) return d.set(e, _), _;
          var n = getComputedStyle(e),
            r = (0, o.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            i = !f && "border-box" === n.boxSizing,
            u = l.test(n.writingMode || ""),
            m = !r && c.test(n.overflowY || ""),
            g = !r && c.test(n.overflowX || ""),
            y = r ? 0 : h(n.paddingTop),
            b = r ? 0 : h(n.paddingRight),
            v = r ? 0 : h(n.paddingBottom),
            w = r ? 0 : h(n.paddingLeft),
            V = r ? 0 : h(n.borderTopWidth),
            T = r ? 0 : h(n.borderRightWidth),
            x = r ? 0 : h(n.borderBottomWidth),
            E = r ? 0 : h(n.borderLeftWidth),
            k = w + b,
            A = y + v,
            R = E + T,
            P = V + x,
            S = g ? e.offsetHeight - P - e.clientHeight : 0,
            L = m ? e.offsetWidth - R - e.clientWidth : 0,
            O = r ? r.width : h(n.width) - (i ? k + R : 0) - L,
            I = r ? r.height : h(n.height) - (i ? A + P : 0) - S,
            C = O + k + L + R,
            M = I + A + S + P,
            D = (0, a.C)({
              devicePixelContentBoxSize: p(
                Math.round(O * devicePixelRatio),
                Math.round(I * devicePixelRatio),
                u,
              ),
              borderBoxSize: p(C, M, u),
              contentBoxSize: p(O, I, u),
              contentRect: new s(w, y, O, I),
            });
          return d.set(e, D), D;
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
      var r = function (e) {
        return e instanceof SVGElement && "getBBox" in e;
      };
      n.d(
        t,
        {},
        {
          XJ: r,
          dK: function (e) {
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
          td: function (e) {
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
          },
          vq: function (e) {
            if (e instanceof Element) return !0;
            var t,
              n =
                null == (t = null == e ? void 0 : e.ownerDocument)
                  ? void 0
                  : t.defaultView;
            return !!(n && e instanceof n.Element);
          },
        },
      );
    },
    47361(e, t, n) {
      "use strict";
      n.d(
        t,
        {},
        {
          C: function (e) {
            return Object.freeze(e);
          },
        },
      );
    },
    717205(e, t, n) {
      "use strict";
      var r = "u" > typeof window ? window : {};
      n.d(t, {}, { S: r });
    },
    816885(e, t, n) {
      "use strict";
      n.d(
        t,
        {},
        {
          b: function (e, t, n, r) {
            var i = n ? n.call(r, e, t) : void 0;
            if (void 0 !== i) return !!i;
            if (e === t) return !0;
            if ("object" != typeof e || !e || "object" != typeof t || !t)
              return !1;
            var a = Object.keys(e),
              s = Object.keys(t);
            if (a.length !== s.length) return !1;
            for (
              var o = Object.prototype.hasOwnProperty.bind(t), u = 0;
              u < a.length;
              u++
            ) {
              var d = a[u];
              if (!o(d)) return !1;
              var c = e[d],
                l = t[d];
              if (
                !1 === (i = n ? n.call(r, c, l, d) : void 0) ||
                (void 0 === i && c !== l)
              )
                return !1;
            }
            return !0;
          },
        },
      );
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
        function d(e, t) {
          for (var n = t; n; ) {
            if (n == e) return !0;
            n = c(n);
          }
          return !1;
        }
        function c(e) {
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
                d = i.entry,
                c = t && u && this._computeTargetAndRootIntersection(a, n),
                l = (i.entry = new r({
                  time: e.performance && performance.now && performance.now(),
                  target: a,
                  boundingClientRect: s,
                  rootBounds: n,
                  intersectionRect: c,
                }));
              d
                ? t && u
                  ? this._hasCrossedThreshold(d, l) &&
                    this._queuedEntries.push(l)
                  : d && d.isIntersecting && this._queuedEntries.push(l)
                : this._queuedEntries.push(l);
            }, this),
              this._queuedEntries.length &&
                this._callback(this.takeRecords(), this);
          }),
          (i.prototype._computeTargetAndRootIntersection = function (n, r) {
            if ("none" != e.getComputedStyle(n).display) {
              for (var i = o(n), a = c(n), s = !1; !s; ) {
                var u = null,
                  d = 1 == a.nodeType ? e.getComputedStyle(a) : {};
                if ("none" == d.display) return;
                if (
                  (a == this.root || a == t
                    ? ((s = !0), (u = r))
                    : a != t.body &&
                      a != t.documentElement &&
                      "visible" != d.overflow &&
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
                a = c(a);
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
            return !this.root || d(t, this.root);
          }),
          (i.prototype._rootContainsTarget = function (e) {
            return d(this.root || t, e);
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
      t.Sn = function (e, t) {
        var n, i, s, u, d;
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
              for (var d in r) i[r[d]] = !1;
              var c = !0,
                l = !1,
                f = void 0;
              try {
                for (
                  var h, p = s[Symbol.iterator]();
                  !(c = (h = p.next()).done);
                  c = !0
                ) {
                  var _ = h.value,
                    m = _.endsWith("?") && _.length > 1;
                  m && (_ = _.slice(0, -1));
                  var g = o(_),
                    y = r[g];
                  (1 !== u && y) ||
                    (n
                      ? (i.key = g)
                      : (i.which = (function (e) {
                          return a[(e = o(e))] || e.toUpperCase().charCodeAt(0);
                        })(_))),
                    y && (i[y] = !m || null);
                }
              } catch (e) {
                (l = !0), (f = e);
              } finally {
                try {
                  !c && p.return && p.return();
                } finally {
                  if (l) throw f;
                }
              }
              return i;
            })(e, i);
          })),
          (d = function (e) {
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
          null == s ? d : d(s)
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
                          d = (o * r) / t + u,
                          c = Math.floor(d),
                          l = d - c;
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
                                  var d,
                                    c = ((o + 1 - u) * t) / r - 1,
                                    l = Math.floor(c),
                                    f = Math.ceil(c);
                                  (d =
                                    l == f
                                      ? s(l)
                                      : s(l) * (f - c) + s(f) * (c - l)),
                                    (n[o] = a * d);
                                }
                              }
                            : function (e, t, n, r) {
                                for (var i = 0; i < t.length; i++)
                                  t[i] = r * e[((i * e.length) / t.length) | 0];
                              };
                        var f = 1;
                        i > n && (f = Math.SQRT1_2);
                        for (var h = 0; h < i; h++) {
                          var p = h;
                          h >= n && (p = 0);
                          var _ = e[p],
                            m = new Float32Array(c);
                          a(
                            _,
                            m,
                            this._resampleLastSampleData
                              ? this._resampleLastSampleData[p]
                              : void 0,
                            f,
                          ),
                            s.push(m);
                        }
                        return (
                          (this._resampleFractional = l),
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
                            d = this._bufferQueue.nextBuffer();
                          if (d[0].length < this.bufferSize)
                            throw "Audio buffer not expected length.";
                          for (t = 0; t < this.channels; t++)
                            for (
                              n = d[t],
                                this._liveBuffer[t].set(d[t]),
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
                                    d = 1 << (n - 2);
                                  d -= d % 100;
                                  for (
                                    var c = r.float_array(o + d + 5),
                                      l = r.float_array(o + d + 5),
                                      f = d,
                                      h = d,
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
                                    y = r.float_array(m),
                                    b = r.float_array(m),
                                    v = r.float_array(m),
                                    w = r.float_array(m),
                                    V = r.float_array(m),
                                    T = 1 + (m >> 1),
                                    x = [0, 0],
                                    E = [],
                                    k = [],
                                    A = [],
                                    R = [];
                                  for (_ = 0; _ < 2; _++)
                                    E.push(r.float_array(T)),
                                      k.push(r.float_array(T)),
                                      A.push(r.float_array(T)),
                                      R.push(r.float_array(m));
                                  var P = r.float_array(T),
                                    S = r.float_array(T),
                                    L = 0,
                                    O = 0,
                                    I = [{ in_time: 0, out_time: 0, tempo: a }],
                                    C = 0,
                                    M = 0,
                                    D = 1,
                                    U = 0,
                                    F = 0,
                                    B = 0,
                                    j = 0,
                                    N = {
                                      mapOutputToInputTime: function (e) {
                                        for (
                                          var t = I.length - 1;
                                          e < I[t].out_time && t > 0;

                                        )
                                          t--;
                                        var n = I[t];
                                        return (
                                          n.in_time + n.tempo * (e - n.out_time)
                                        );
                                      },
                                      flush: function (e) {
                                        (U = 0),
                                          (x = [0, 0]),
                                          (M = 0),
                                          (j = 0),
                                          (B = 0);
                                        for (var t = 0; t < 2; t++)
                                          for (var n = 0; n < m; n++)
                                            R[t][n] = 0;
                                        for (t = 0; t < c.length; t++) c[t] = 0;
                                        for (t = 0; t < l.length; t++) l[t] = 0;
                                        if (e) {
                                          (O = Math.max(0, O - e)),
                                            (L = N.mapOutputToInputTime(O));
                                          for (
                                            var r = I.length - 1;
                                            O <= I[r].out_time && r >= 0;

                                          )
                                            I.pop(), r--;
                                          I.push({
                                            in_time: L,
                                            out_time: O,
                                            tempo: a,
                                          });
                                        }
                                      },
                                      getTempo: function () {
                                        return a;
                                      },
                                      setTempo: function (e) {
                                        (f = h = d),
                                          e >= 1
                                            ? (h = Math.round(f / e))
                                            : (f = Math.round(h * e)),
                                          (F = (1 / e - h / f) * f),
                                          (D = (function (e, t) {
                                            for (
                                              var n = (e.length / t) | 0,
                                                r = 0,
                                                i = 0;
                                              i < n;
                                              i++
                                            )
                                              r += e[i * t];
                                            return 0.9 / r;
                                          })(p, h)),
                                          (a = e);
                                        var t = I[I.length - 1];
                                        t.out_time == O
                                          ? (t.tempo = e)
                                          : I.push({
                                              in_time: L,
                                              out_time: O,
                                              tempo: e,
                                            });
                                      },
                                    };
                                  N.flush(0), N.setTempo(a);
                                  var G = function (e, t, n) {
                                      var r = Math.floor(n),
                                        i = r % 2 == 1 ? -1 : 1;
                                      return Math.atan2(
                                        i * (t[r] - t[r + 1]),
                                        i * (e[r] - e[r + 1]),
                                      );
                                    },
                                    H = function (e, t, n, r, i) {
                                      var a,
                                        s =
                                          ((2 * Math.PI) / o) *
                                          0.5 *
                                          (r + t) *
                                          f;
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
                                          d = 1 - u,
                                          c = R[d],
                                          l = x[d],
                                          f = E[d],
                                          h = k[d],
                                          p = A[d],
                                          _ = R[u],
                                          m = 1;
                                        m < _.length;
                                        m++
                                      )
                                        _[m] = t[m] * t[m] + n[m] * n[m];
                                      var g = E[u],
                                        y = (x[u] = (function (e, t) {
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
                                              var d =
                                                r +
                                                (e[r - 1] - e[r + 1]) /
                                                  (2 *
                                                    (e[r - 1] -
                                                      2 * e[r] +
                                                      e[r + 1]));
                                              d - t[a - 1] > u
                                                ? ((t[a++] = d), (o = r))
                                                : e[r] > e[o] &&
                                                  ((t[a - 1] = d), (o = r));
                                            }
                                          }
                                          return a;
                                        })(_, g)),
                                        b = k[u],
                                        v = A[u];
                                      if (0 != e && 0 != y) {
                                        var w = 0;
                                        for (B = 0; B < y; B++) {
                                          for (
                                            j = g[B];
                                            g[B] > f[w] && w != l;

                                          )
                                            ++w;
                                          var V = w;
                                          w > 0 &&
                                            j - f[w - 1] < f[w] - j &&
                                            (V = w - 1);
                                          var T = j * s;
                                          if (
                                            Math.abs(f[V] - j) < T &&
                                            c[Math.round(f[V])] >
                                              0.1 * _[Math.round(j)]
                                          ) {
                                            var L = G(t, n, j),
                                              O =
                                                h[V] +
                                                p[V] +
                                                H(L, j, h[V], f[V], a) -
                                                L;
                                            (b[B] = L),
                                              (v[B] = O),
                                              (P[B] = Math.cos(O)),
                                              (S[B] = Math.sin(O));
                                          } else
                                            (b[B] = G(t, n, j)),
                                              (v[B] = 0),
                                              (P[B] = 1),
                                              (S[B] = 0);
                                        }
                                        g[y] = 2 * o;
                                        var I = g[(V = 0)],
                                          C = g[V + 1],
                                          M = P[V],
                                          D = S[V];
                                        for (m = 1; m < t.length - 1; m++) {
                                          m >= I &&
                                            m - I > C - m &&
                                            ((I = g[++V]),
                                            (C = g[V + 1]),
                                            (M = P[V]),
                                            (D = S[V]));
                                          var U = t[m] * M - n[m] * D,
                                            F = t[m] * D + n[m] * M;
                                          (t[m] = U), (n[m] = F);
                                        }
                                      } else
                                        for (var B = 0; B < y; B++) {
                                          var j = g[B];
                                          h[B] = p[B] = G(t, n, j);
                                        }
                                    },
                                    z = function () {
                                      var e = 0 | (U += 2 * F);
                                      U -= e;
                                      for (var t = 0; t < o; t++)
                                        (u.m_re[t] = p[t] * c[t]),
                                          (u.m_im[t] = p[t] * c[f + t]);
                                      r.blit(c, 2 * f, c, 0, o - f),
                                        u.inplace(!1),
                                        u.unpack(g, y, b, v),
                                        W(C, g, y, 0, 0, h / f),
                                        W(C + 1, b, v, 0, 0, (h + e) / f),
                                        r.blit(b, 0, w, 0, m),
                                        r.blit(v, 0, V, 0, m),
                                        u.repack(g, y, b, v),
                                        u.inplace(!0);
                                      var n = l.length;
                                      for (
                                        r.blit(l, M, l, 0, n - M), t = n - M;
                                        t < n;
                                        t++
                                      )
                                        l[t] = 0;
                                      var i = 0,
                                        a = D;
                                      for (t = 0; t < h; t++)
                                        Math.abs(2 * u.m_re[t]) > i &&
                                          (i = Math.abs(2 * u.m_re[t]));
                                      for (t = 0; t < o - h; t++)
                                        Math.abs(
                                          u.m_re[t + h + e] + u.m_im[t],
                                        ) > i &&
                                          (i = Math.abs(
                                            u.m_re[t + h + e] + u.m_im[t],
                                          ));
                                      for (t = o - h; t < o; t++)
                                        Math.abs(2 * u.m_im[t]) > i &&
                                          (i = Math.abs(2 * u.m_im[t]));
                                      var s = 1 / Math.floor(o / (2 * h));
                                      for (
                                        a * i > s && (a = s / i), t = 0;
                                        t < o;
                                        t++
                                      )
                                        (l[t] += a * u.m_re[t]),
                                          (l[t + h + e] += a * u.m_im[t]);
                                      return (C += 2), (M = 2 * h + e);
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
                                          for (var d = 0; d < n; d++)
                                            i[d] += s * e[u][d];
                                      }
                                      if (1 == a) {
                                        if (j + B > 0) {
                                          var p = j + B + n,
                                            _ = [];
                                          for (u = 0; u < e.length; u++) {
                                            var m = r.float_array(p);
                                            r.blit(l, 0, m, 0, j),
                                              r.blit(c, 0, m, j, B),
                                              r.blit(e[u], 0, m, j + B, n),
                                              _.push(m);
                                          }
                                          N.flush(0), (n = p), (e = _);
                                        }
                                        return (L += n / t), (O += n / t), e;
                                      }
                                      var g =
                                          2 *
                                          Math.floor(
                                            Math.max(0, B + n - (o - f)) /
                                              (2 * f),
                                          ),
                                        y = j + h * g + Math.floor(U + F * g);
                                      j > y && (y = j);
                                      var b = r.float_array(y);
                                      r.blit(l, 0, b, 0, j);
                                      for (var v = 0, w = j, V = 0, T = 0; ; ) {
                                        var x = o + f - B;
                                        if (v + x > n) {
                                          r.blit(i, v, c, B, n - v),
                                            (B += n - v),
                                            (v = n);
                                          break;
                                        }
                                        x <= 0
                                          ? (B -= 2 * f)
                                          : (r.blit(i, v, c, B, x),
                                            (v += x),
                                            (B = o - f)),
                                          (T = z()),
                                          (L += (2 * f) / t),
                                          (O += T / t),
                                          (V = w + T - y) < 0 && (V = 0),
                                          r.blit(l, 0, b, w, T - V),
                                          (w += T);
                                      }
                                      r.blit(l, T - V, l, 0, V), (j = V);
                                      var E = [];
                                      for (u = 0; u < e.length; u++) E.push(b);
                                      return E;
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
                                for (var u = 1, d = 0; d < n.m_logN; d++) {
                                  var c = 2 * u * Math.PI * n.m_invN;
                                  (n.twiddleRe[d] = Math.cos(c)),
                                    (n.twiddleIm[d] = Math.sin(c)),
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
                                    for (var d = 1 / i, c = 0; c < i; c++)
                                      (t[c] *= d), (r[c] *= d);
                                  for (var l = 0; l < a; l++) {
                                    var f = n.twiddleRe[l],
                                      h = n.twiddleIm[l];
                                    e || (h *= -1);
                                    for (var p = 0; p < i; ) {
                                      for (
                                        var _ = p,
                                          m = p + o,
                                          g = 1,
                                          y = 0,
                                          b = 0;
                                        b < s;
                                        b++
                                      ) {
                                        var v = t[_],
                                          w = r[_],
                                          V = t[m],
                                          T = r[m];
                                        (t[_] = v + V),
                                          (r[_] = w + T),
                                          (V = v - V),
                                          (T = w - T),
                                          (t[m] = V * g - T * y),
                                          (r[m] = V * y + T * g),
                                          _++,
                                          m++;
                                        var x = g;
                                        (g = g * f - y * h),
                                          (y = x * h + y * f);
                                      }
                                      p += u;
                                    }
                                    (s >>= 1), (o >>= 1), (u >>= 1);
                                  }
                                  for (
                                    var E, k, A = n.m_revTgt, R = 0;
                                    R < i;
                                    R++
                                  )
                                    A[R] > R &&
                                      ((k = t[(E = A[R])]),
                                      (t[E] = t[R]),
                                      (t[R] = k),
                                      (k = r[E]),
                                      (r[E] = r[R]),
                                      (r[R] = k));
                                };
                                var l = t >> 1;
                                return (
                                  (n.unpack = function (e, r, i, a) {
                                    (e[0] = n.m_re[0]),
                                      (i[0] = n.m_im[0]),
                                      (r[0] = a[0] = 0),
                                      (e[l] = n.m_re[l]),
                                      (i[l] = n.m_im[l]),
                                      (r[l] = a[l] = 0);
                                    for (var s = 1; s < l; s++)
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
                                      (n.m_re[l] = e[l]),
                                      (n.m_im[l] = i[l]);
                                    for (var s = 1; s < l; s++)
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
                d = r(n(754)),
                c = r(n(408)),
                l = r(n(319)),
                f = r(n(445)),
                h = {
                  audio: { proxy: c.default, worker: "ogv-worker-audio.js" },
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
                          n = (0, d.default)(r);
                        return (
                          (e = t
                            ? Reflect.construct(
                                n,
                                arguments,
                                (0, d.default)(this).constructor,
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
                                (0, d.default)(r.prototype),
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
                          var n = h[p[e]];
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
                            var d,
                              c,
                              l,
                              f,
                              m,
                              g = function () {
                                if (1 == y && 1 == b) {
                                  var e =
                                    l +
                                    " " +
                                    f +
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
                              y = !1,
                              b = !1;
                            (d = new XMLHttpRequest()).open("GET", s, !0),
                              (d.onreadystatechange = function () {
                                4 == d.readyState &&
                                  200 == d.status &&
                                  ((l = d.responseText), (y = !0), g());
                              }),
                              d.send(),
                              (c = new XMLHttpRequest()).open("GET", o, !0),
                              (c.onreadystatechange = function () {
                                4 == c.readyState &&
                                  200 == c.status &&
                                  ((f = c.responseText), (b = !0), g());
                              }),
                              c.send();
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
                })(f.default))();
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
                d = r(n(585)),
                c = r(n(754)),
                l = r(n(8)),
                f = r(n(731)),
                h = r(n(936)),
                p = r(n(848)),
                _ = r(n(964)),
                m = r(n(893)),
                g = r(n(309)),
                y = r(n(759)),
                b = r(n(278)),
                v = r(n(168)),
                w = r(n(625)),
                V = r(n(302)),
                T = (function () {
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
                x = {
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
                E = "INITIAL",
                k = "SEEKING_END",
                A = "LOADED",
                R = "PRELOAD",
                P = "READY",
                S = "PLAYING",
                L = "SEEKING",
                O = "ERROR",
                I = "NOT_SEEKING",
                C = "BISECT_TO_TARGET",
                M = "BISECT_TO_KEYPOINT",
                D = "LINEAR_TO_TARGET",
                U = "fast";
              function F() {
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
                void 0 === (0, l.default)(performance.now)
                  ? Date.now
                  : performance.now.bind(performance)),
                (F.prototype = Object.create(HTMLElement.prototype, {}));
              var B = (function (e) {
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
                        n = (0, c.default)(r);
                      return (
                        (e = t
                          ? Reflect.construct(
                              n,
                              arguments,
                              (0, c.default)(this).constructor,
                            )
                          : n.apply(this, arguments)),
                        (0, d.default)(this, e)
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
                    (t._state = E),
                    (t._seekState = I),
                    (t._detectedType = null),
                    (t._canvas = document.createElement("canvas")),
                    (t._frameSink = null),
                    (t.className = t._instanceId),
                    (0, g.default)((0, o.default)(t), x),
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
                            new v.default(e)
                          );
                        },
                      },
                      seekable: {
                        get: function () {
                          return new v.default(
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
                          return this._state == L
                            ? this._seekTargetTime
                            : this._codec
                              ? this._state != S || this._paused
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
                            : 0 / 0;
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
                          return this._state == L;
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
                          return this._state === O
                            ? this._mediaError
                              ? this._mediaError
                              : new y.default(
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
                          return new v.default([[0, this.currentTime]]);
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
                            T(function () {
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
                            (this._state = E),
                            (this._seekState = I),
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
                            T(function () {
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
                              (this._mediaError = new y.default(
                                y.default.MEDIA_ERR_NETWORK,
                                String(e),
                              )),
                              (this._state = O),
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
                              (n._state = L),
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
                            (this._state = L),
                            (this._seekTargetTime = e),
                            (this._lastSeekPosition = -1),
                            (this._decodedFrames = []),
                            (this._pendingFrames = []),
                            (this._pendingFrame = 0),
                            (this._pendingAudio = 0),
                            (this._didSeek = !1),
                            this._codec.seekToKeypoint(e, function (n) {
                              n
                                ? ((t._seekState = D),
                                  t._fireEventAsync("seeking"),
                                  t._didSeek || t._pingProcessing())
                                : t._codec.getKeypointOffset(e, function (e) {
                                    e > 0
                                      ? ((t._seekState = D), t._seekStream(e))
                                      : ((t._seekState = C),
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
                          (this._seekState = I),
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
                              this._seekMode === U &&
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
                                  (this._seekState = D),
                                  this._pingProcessing())
                                : this._seekState == C &&
                                    this._codec.hasVideo &&
                                    this._codec.keyframeTimestamp <
                                      this._codec.frameTimestamp
                                  ? (this._log("finding the keypoint now"),
                                    (this._seekState = M),
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
                            r.styleManager.appendRule("." + this._instanceId, {
                              width: this._videoInfo.displayWidth + "px",
                              height: this._videoInfo.displayHeight + "px",
                            });
                          var e = {};
                          void 0 !== this._options.webGL &&
                            (e.webGL = this._options.webGL),
                            this._options.forceWebGL && (e.webGL = "required"),
                            (this._frameSink = f.default.attach(
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
                          else if (this._state == E) this._doProcessInitial();
                          else if (this._state == k)
                            this._doProcessSeekingEnd();
                          else if (this._state == A) this._doProcessLoaded();
                          else if (this._state == R) this._doProcessPreload();
                          else if (this._state == P) this._doProcessReady();
                          else if (this._state == L) this._doProcessSeeking();
                          else if (this._state == S) this._doProcessPlay();
                          else {
                            if (this._state != O)
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
                                ? ((this._state = k),
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
                            var n = function () {
                              e._log("finishStartPlaying"),
                                (e._state = S),
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
                          if (this._seekState == I)
                            throw Error(
                              "seeking in invalid state (not seeking?)",
                            );
                          if (this._seekState == C)
                            this._doProcessBisectionSeek();
                          else if (this._seekState == M)
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
                              var d = this._targetPerFrameTime;
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
                              else if (r && -u >= d) {
                                for (
                                  var c = -1, l = 0;
                                  l < this._decodedFrames.length - 1;
                                  l++
                                )
                                  this._decodedFrames[l].frameEndTimestamp <
                                    s && (c = l - 1);
                                if (c >= 0)
                                  for (; c-- >= 0; ) {
                                    this._lateFrames++;
                                    var f = this._decodedFrames.shift();
                                    this._log(
                                      "skipping already-decoded late frame at " +
                                        f.frameEndTimestamp,
                                    ),
                                      (u = 1e3 * (f.frameEndTimestamp - s)),
                                      (this._frameEndTimestamp =
                                        f.frameEndTimestamp),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - u),
                                      this._framesProcessed++,
                                      (f.dropped = !0),
                                      this._doFrameComplete(f);
                                  }
                                var h = this._codec.nextKeyframeTimestamp,
                                  p =
                                    h -
                                    (this._targetPerFrameTime / 1e3) *
                                      (this._framePipelineDepth +
                                        this._pendingFrame);
                                if (
                                  h >= 0 &&
                                  h != this._codec.frameTimestamp &&
                                  s >= p
                                ) {
                                  this._log(
                                    "skipping late frame at " +
                                      this._decodedFrames[0].frameEndTimestamp +
                                      " vs " +
                                      s +
                                      ", expect to see keyframe at " +
                                      h,
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
                                    var y = this._pendingFrames[g];
                                    this._lateFrames++,
                                      this._framesProcessed++,
                                      (this._frameEndTimestamp =
                                        y.frameEndTimestamp),
                                      (u = 1e3 * (y.frameEndTimestamp - s)),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - u),
                                      (y.dropped = !0),
                                      this._doFrameComplete(y);
                                  }
                                  for (
                                    this._pendingFrames = [],
                                      this._pendingFrame = 0;
                                    this._codec.frameReady &&
                                    this._codec.frameTimestamp < h;

                                  ) {
                                    var b = {
                                      frameEndTimestamp:
                                        this._codec.frameTimestamp,
                                      dropped: !0,
                                    };
                                    (u = 1e3 * (b.frameEndTimestamp - s)),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - u),
                                      this._lateFrames++,
                                      this._codec.discardFrame(function () {}),
                                      this._framesProcessed++,
                                      this._doFrameComplete(b);
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
                              var v = (this._frameEndTimestamp =
                                this._codec.frameTimestamp);
                              this._pendingFrame++,
                                this._pendingFrames.push({
                                  frameEndTimestamp: v,
                                });
                              var w = this._pendingFrames,
                                V = !1,
                                T = this._time(function () {
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
                                              frameEndTimestamp: v,
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
                                (this._proxyTime += T),
                                this._pingProcessing(),
                                this._dataEnded && this._codec.sync());
                            } else if (n) {
                              this._log(
                                "play loop: ready for audio; depth: " +
                                  this._pendingAudio,
                              ),
                                this._pendingAudio++;
                              var x = this._codec.audioTimestamp,
                                E = this._time(function () {
                                  e._codec.decodeAudio(function (t) {
                                    if (
                                      (e._pendingAudio--,
                                      e._log(
                                        "play loop callback: decoded audio",
                                      ),
                                      (e._audioEndTimestamp = x),
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
                                ((this._proxyTime += E),
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
                              var k = this._decodedFrames.shift();
                              (this._currentVideoCpuTime = k.videoCpuTime),
                                (this._drawingTime += this._time(function () {
                                  e._drawFrame(k.yCbCrBuffer);
                                })),
                                this._framesProcessed++,
                                this._doFrameComplete(k),
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
                                    : (t._stream = new h.default({
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
                          var t = new b.default(e);
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
                              this._state == L ||
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
                          this._seek(+e, U);
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
                  r
                );
              })(F);
              (0, g.default)(B, x),
                (B.instanceCount = 0),
                (B.styleManager = new (function () {
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
                (t.default = B);
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
                            : 0 / 0;
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
                                      d = Math.round(
                                        (r * t.audioFormat.rate) / 1e9,
                                      );
                                    d > 0
                                      ? a.push(
                                          u.subarray(
                                            0,
                                            u.length - Math.min(d, u.length),
                                          ),
                                        )
                                      : a.push(
                                          u.subarray(
                                            Math.min(Math.abs(d), u.length),
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
                    d =
                      void 0 === u
                        ? o + (r ? r.byteLength : a ? a.length : 0)
                        : u,
                    c = t.prev,
                    l = t.next,
                    f = t.eof,
                    h = t.empty,
                    p = void 0 === h ? !(r || a) : h,
                    _ = t.timestamp,
                    m = void 0 === _ ? Date.now() : _;
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.start = o),
                    (this.end = d),
                    (this.prev = void 0 === c ? null : c),
                    (this.next = void 0 === l ? null : l),
                    (this.eof = void 0 !== f && f),
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
                              var d = (e._backend = new a({
                                  url: e.url,
                                  offset: e._cache.writeOffset,
                                  length: u,
                                  cachever: e._cachever,
                                  progressive: e.progressive,
                                })),
                                c = null,
                                l = function () {
                                  d !== e._backend
                                    ? (c(), n(Error("invalid state")))
                                    : (d.on("buffer", function (t) {
                                        d === e._backend && e._cache.write(t);
                                      }),
                                      d.on("done", function () {
                                        d === e._backend &&
                                          (-1 === e.length &&
                                            (e.length =
                                              e._backend.offset +
                                              e._backend.bytesRead),
                                          (e._backend = null));
                                      }),
                                      t(d));
                                },
                                f = function (t) {
                                  d !== e._backend
                                    ? n(Error("invalid state"))
                                    : ((e._backend = null), n(t));
                                };
                              (c = function () {
                                d.off("open", l), d.off("error", f);
                              }),
                                d.on("open", l),
                                d.on("error", f),
                                d.on("cachever", function () {
                                  e._cachever++;
                                }),
                                d.load();
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
                        d = s.format;
                      (e.width === d.displayWidth &&
                        e.height === d.displayHeight) ||
                        ((e.width = d.displayWidth),
                        (e.height = d.displayHeight)),
                        (null !== n &&
                          n.width == d.width &&
                          n.height == d.height) ||
                          (function (e, r) {
                            for (
                              var i = (n = t.createImageData(e, r)).data,
                                a = e * r * 4,
                                s = 0;
                              s < a;
                              s += 4
                            )
                              i[s + 3] = 255;
                          })(d.width, d.height),
                        r.convertYCbCr(s, n.data);
                      var c,
                        l =
                          d.cropWidth != d.displayWidth ||
                          d.cropHeight != d.displayHeight;
                      l
                        ? (i ||
                            ((o = d.cropWidth),
                            (u = d.cropHeight),
                            ((i = document.createElement("canvas")).width = o),
                            (i.height = u),
                            (a = i.getContext("2d"))),
                          (c = a))
                        : (c = t),
                        c.putImageData(
                          n,
                          -d.cropLeft,
                          -d.cropTop,
                          d.cropLeft,
                          d.cropTop,
                          d.cropWidth,
                          d.cropHeight,
                        ),
                        l &&
                          t.drawImage(i, 0, 0, d.displayWidth, d.displayHeight);
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
                    d,
                    c,
                    l,
                    f,
                    h,
                    p,
                    _,
                    m,
                    g,
                    y = new Float32Array([
                      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
                    ]),
                    b = {},
                    v = {},
                    w = {};
                  function V(e, t) {
                    return (b[e] && !t) || (b[e] = s.createTexture()), b[e];
                  }
                  function T(e, t, n, r, a) {
                    var o = !b[e] || t,
                      u = V(e, t);
                    if ((s.activeTexture(s.TEXTURE0), i.stripe)) {
                      var d = !b[e + "_temp"] || t,
                        c = V(e + "_temp", t);
                      s.bindTexture(s.TEXTURE_2D, c),
                        d
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
                      var l = b[e + "_stripe"],
                        f = !l || t;
                      f && (l = V(e + "_stripe", t)),
                        s.bindTexture(s.TEXTURE_2D, l),
                        f &&
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
                  function x(e, t, r, i) {
                    var a = b[e];
                    s.useProgram(n);
                    var o = v[e];
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
                      (o = v[e] = s.createFramebuffer())),
                      s.bindFramebuffer(s.FRAMEBUFFER, o),
                      s.framebufferTexture2D(
                        s.FRAMEBUFFER,
                        s.COLOR_ATTACHMENT0,
                        s.TEXTURE_2D,
                        a,
                        0,
                      );
                    var p = b[e + "_temp"];
                    s.activeTexture(s.TEXTURE1),
                      s.bindTexture(s.TEXTURE_2D, p),
                      s.uniform1i(h, 1);
                    var _ = b[e + "_stripe"];
                    s.activeTexture(s.TEXTURE2),
                      s.bindTexture(s.TEXTURE_2D, _),
                      s.uniform1i(f, 2),
                      s.bindBuffer(s.ARRAY_BUFFER, u),
                      s.enableVertexAttribArray(d),
                      s.vertexAttribPointer(d, 2, s.FLOAT, !1, 0, 0),
                      s.bindBuffer(s.ARRAY_BUFFER, c),
                      s.enableVertexAttribArray(l),
                      s.vertexAttribPointer(l, 2, s.FLOAT, !1, 0, 0),
                      s.viewport(0, 0, r, i),
                      s.drawArrays(s.TRIANGLES, 0, y.length / 2),
                      s.bindFramebuffer(s.FRAMEBUFFER, null);
                  }
                  function E(e, n, r) {
                    s.activeTexture(n),
                      s.bindTexture(s.TEXTURE_2D, b[e]),
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
                  function k(e, t) {
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
                      var b = o.format,
                        v =
                          !t ||
                          e.width !== b.displayWidth ||
                          e.height !== b.displayHeight;
                      if (
                        (v &&
                          ((e.width = b.displayWidth),
                          (e.height = b.displayHeight),
                          a.clear()),
                        t ||
                          (function () {
                            if (i.stripe) {
                              (n = k(r.vertexStripe, r.fragmentStripe)),
                                s.getAttribLocation(n, "aPosition"),
                                (c = s.createBuffer());
                              var e = new Float32Array([
                                0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
                              ]);
                              s.bindBuffer(s.ARRAY_BUFFER, c),
                                s.bufferData(s.ARRAY_BUFFER, e, s.STATIC_DRAW),
                                (l = s.getAttribLocation(
                                  n,
                                  "aTexturePosition",
                                )),
                                (f = s.getUniformLocation(n, "uStripe")),
                                (h = s.getUniformLocation(n, "uTexture"));
                            }
                            (t = k(r.vertex, r.fragment)),
                              (u = s.createBuffer()),
                              s.bindBuffer(s.ARRAY_BUFFER, u),
                              s.bufferData(s.ARRAY_BUFFER, y, s.STATIC_DRAW),
                              (d = s.getAttribLocation(t, "aPosition")),
                              (p = s.createBuffer()),
                              (_ = s.getAttribLocation(t, "aLumaPosition")),
                              (m = s.createBuffer()),
                              (g = s.getAttribLocation(t, "aChromaPosition"));
                          })(),
                        v)
                      ) {
                        var w = function (e, t, n) {
                          var r = b.cropLeft / n,
                            i = (b.cropLeft + b.cropWidth) / n,
                            a = (b.cropTop + b.cropHeight) / b.height,
                            o = b.cropTop / b.height,
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
                          w(m, 0, (o.u.stride * b.width) / b.chromaWidth);
                      }
                      T("uTextureY", v, o.y.stride, b.height, o.y.bytes),
                        T(
                          "uTextureCb",
                          v,
                          o.u.stride,
                          b.chromaHeight,
                          o.u.bytes,
                        ),
                        T(
                          "uTextureCr",
                          v,
                          o.v.stride,
                          b.chromaHeight,
                          o.v.bytes,
                        ),
                        i.stripe &&
                          (x("uTextureY", v, o.y.stride, b.height),
                          x("uTextureCb", v, o.u.stride, b.chromaHeight),
                          x("uTextureCr", v, o.v.stride, b.chromaHeight)),
                        s.useProgram(t),
                        s.viewport(0, 0, e.width, e.height),
                        E("uTextureY", s.TEXTURE0, 0),
                        E("uTextureCb", s.TEXTURE1, 1),
                        E("uTextureCr", s.TEXTURE2, 2),
                        s.bindBuffer(s.ARRAY_BUFFER, u),
                        s.enableVertexAttribArray(d),
                        s.vertexAttribPointer(d, 2, s.FLOAT, !1, 0, 0),
                        s.bindBuffer(s.ARRAY_BUFFER, p),
                        s.enableVertexAttribArray(_),
                        s.vertexAttribPointer(_, 2, s.FLOAT, !1, 0, 0),
                        s.bindBuffer(s.ARRAY_BUFFER, m),
                        s.enableVertexAttribArray(g),
                        s.vertexAttribPointer(g, 2, s.FLOAT, !1, 0, 0),
                        s.drawArrays(s.TRIANGLES, 0, y.length / 2);
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
                      d = e.v.bytes,
                      c = 0 | e.y.stride,
                      l = 0 | e.u.stride,
                      f = 0 | e.v.stride,
                      h = r << 2,
                      p = 0,
                      _ = 0,
                      m = 0,
                      g = 0,
                      y = 0,
                      b = 0,
                      v = 0,
                      w = 0,
                      V = 0,
                      T = 0,
                      x = 0,
                      E = 0,
                      k = 0,
                      A = 0,
                      R = 0,
                      P = 0,
                      S = 0,
                      L = 0;
                    if (1 == a && 1 == s)
                      for (v = 0, w = h, L = 0, P = 0; P < i; P += 2) {
                        for (
                          m = ((_ = (P * c) | 0) + c) | 0,
                            g = (L * l) | 0,
                            y = (L * f) | 0,
                            R = 0;
                          R < r;
                          R += 2
                        )
                          (V = 0 | u[g++]),
                            (E = (((409 * (T = 0 | d[y++])) | 0) - 57088) | 0),
                            (k =
                              (((100 * V) | 0) + ((208 * T) | 0) - 34816) | 0),
                            (A = (((516 * V) | 0) - 70912) | 0),
                            (x = (298 * o[_++]) | 0),
                            (n[v] = (x + E) >> 8),
                            (n[v + 1] = (x - k) >> 8),
                            (n[v + 2] = (x + A) >> 8),
                            (v += 4),
                            (x = (298 * o[_++]) | 0),
                            (n[v] = (x + E) >> 8),
                            (n[v + 1] = (x - k) >> 8),
                            (n[v + 2] = (x + A) >> 8),
                            (v += 4),
                            (x = (298 * o[m++]) | 0),
                            (n[w] = (x + E) >> 8),
                            (n[w + 1] = (x - k) >> 8),
                            (n[w + 2] = (x + A) >> 8),
                            (w += 4),
                            (x = (298 * o[m++]) | 0),
                            (n[w] = (x + E) >> 8),
                            (n[w + 1] = (x - k) >> 8),
                            (n[w + 2] = (x + A) >> 8),
                            (w += 4);
                        (v += h), (w += h), L++;
                      }
                    else
                      for (b = 0, P = 0; P < i; P++)
                        for (
                          S = 0,
                            p = (P * c) | 0,
                            g = ((L = P >> s) * l) | 0,
                            y = (L * f) | 0,
                            R = 0;
                          R < r;
                          R++
                        )
                          (V = 0 | u[g + (S = R >> a)]),
                            (E =
                              (((409 * (T = 0 | d[y + S])) | 0) - 57088) | 0),
                            (k =
                              (((100 * V) | 0) + ((208 * T) | 0) - 34816) | 0),
                            (A = (((516 * V) | 0) - 70912) | 0),
                            (x = (298 * o[p++]) | 0),
                            (n[b] = (x + E) >> 8),
                            (n[b + 1] = (x - k) >> 8),
                            (n[b + 2] = (x + A) >> 8),
                            (b += 4);
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
                  return d.default;
                },
              }),
              (r.OGVVersion = void 0);
            var t = e(n(8)),
              i = e(n(523)),
              a = e(n(964)),
              s = e(n(759)),
              o = e(n(278)),
              u = e(n(869)),
              d = e(n(168)),
              c = "1.8.9-20220406232920-cb5f7ff";
            (r.OGVVersion = c),
              "object" ===
                ("u" < typeof window ? "undefined" : (0, t.default)(window)) &&
                ((window.OGVCompat = i.default),
                (window.OGVLoader = a.default),
                (window.OGVMediaError = s.default),
                (window.OGVMediaType = o.default),
                (window.OGVTimeRanges = d.default),
                (window.OGVPlayer = u.default),
                (window.OGVVersion = c));
          })(),
          r
        );
      })();
    },
    335033(e, t, n) {
      e.exports = n(108110);
    },
    265431(e, t, n) {
      "use strict";
      var r = n(582128);
      n.d(
        t,
        {},
        {
          A: function () {
            let [, e] = (0, r.useState)({});
            return (0, r.useCallback)(() => e({}), []);
          },
        },
      );
    },
    352944(e, t, n) {
      "use strict";
      var r;
      n.d(
        t,
        {},
        {
          n: function () {
            return (
              r ||
                ((r = new Image()).src =
                  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
              r
            );
          },
        },
      );
    },
    648850(e, t, n) {
      "use strict";
      n.d(t, { j: () => s });
      var r = n(575241),
        i = n(782376);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t, n) {
        var s, o, u, d, c, l;
        return (
          (s =
            e ||
            function () {
              return {};
            }),
          (o = function () {
            return n.reconnect();
          }),
          (c = (d =
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
          (l = d[1]),
          (0, r.E)(
            function () {
              var e = t.getHandlerId();
              if (null != e)
                return t.subscribeToStateChange(l, { handlerIds: [e] });
            },
            [t, l],
          ),
          c
        );
      }
    },
    126600(e, t, n) {
      "use strict";
      n.d(t, { i: () => T });
      var r = n(290309),
        i = n(575241),
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
        d = n(204581),
        c = n(321733);
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var f = n(22633);
      function h(e, t, n) {
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
      var p = !1,
        _ = !1,
        m = (function () {
          var e;
          function t(e) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            h(this, "internalMonitor", void 0),
              h(this, "sourceId", null),
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
                  (0, c.V)(
                    !p,
                    "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                  );
                  try {
                    return (
                      (p = !0),
                      this.internalMonitor.canDragSource(this.sourceId)
                    );
                  } finally {
                    p = !1;
                  }
                },
              },
              {
                key: "isDragging",
                value: function () {
                  if (!this.sourceId) return !1;
                  (0, c.V)(
                    !_,
                    "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                  );
                  try {
                    return (
                      (_ = !0),
                      this.internalMonitor.isDraggingSource(this.sourceId)
                    );
                  } finally {
                    _ = !1;
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
        })(),
        g = n(370725),
        y = n(723651),
        b = n(816885);
      function v(e, t, n) {
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
      var w = (function () {
          var e;
          function t(e) {
            var n = this;
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            v(
              this,
              "hooks",
              (0, g.i)({
                dragSource: function (e, t) {
                  n.clearDragSource(),
                    (n.dragSourceOptions = t || null),
                    (0, y.i)(e)
                      ? (n.dragSourceRef = e)
                      : (n.dragSourceNode = e),
                    n.reconnectDragSource();
                },
                dragPreview: function (e, t) {
                  n.clearDragPreview(),
                    (n.dragPreviewOptions = t || null),
                    (0, y.i)(e)
                      ? (n.dragPreviewRef = e)
                      : (n.dragPreviewNode = e),
                    n.reconnectDragPreview();
                },
              }),
            ),
              v(this, "handlerId", null),
              v(this, "dragSourceRef", null),
              v(this, "dragSourceNode", void 0),
              v(this, "dragSourceOptionsInternal", null),
              v(this, "dragSourceUnsubscribe", void 0),
              v(this, "dragPreviewRef", null),
              v(this, "dragPreviewNode", void 0),
              v(this, "dragPreviewOptionsInternal", null),
              v(this, "dragPreviewUnsubscribe", void 0),
              v(this, "lastConnectedHandlerId", null),
              v(this, "lastConnectedDragSource", null),
              v(this, "lastConnectedDragSourceOptions", null),
              v(this, "lastConnectedDragPreview", null),
              v(this, "lastConnectedDragPreviewOptions", null),
              v(this, "backend", void 0),
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
                  return !(0, b.b)(
                    this.lastConnectedDragSourceOptions,
                    this.dragSourceOptions,
                  );
                },
              },
              {
                key: "didDragPreviewOptionsChange",
                value: function () {
                  return !(0, b.b)(
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
        })(),
        V = n(648850);
      function T(e, t) {
        var n,
          s,
          o,
          h,
          p,
          _,
          g,
          y,
          b,
          v = (0, f.I)(e, t);
        (0, c.V)(
          !v.begin,
          "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
        );
        var T =
            ((n = (0, d.u)()),
            (0, a.useMemo)(
              function () {
                return new m(n);
              },
              [n],
            )),
          x =
            ((s = v.options),
            (o = v.previewOptions),
            (h = (0, d.u)()),
            (p = (0, a.useMemo)(
              function () {
                return new w(h.getBackend());
              },
              [h],
            )),
            (0, i.E)(
              function () {
                return (
                  (p.dragSourceOptions = s || null),
                  p.reconnect(),
                  function () {
                    return p.disconnectDragSource();
                  }
                );
              },
              [p, s],
            ),
            (0, i.E)(
              function () {
                return (
                  (p.dragPreviewOptions = o || null),
                  p.reconnect(),
                  function () {
                    return p.disconnectDragPreview();
                  }
                );
              },
              [p, o],
            ),
            p);
        return (
          (_ = (0, d.u)()),
          (g = (0, a.useMemo)(
            function () {
              return new u(v, T, x);
            },
            [T, x],
          )),
          (0, a.useEffect)(
            function () {
              g.spec = v;
            },
            [v],
          ),
          (y = g),
          (b = (0, a.useMemo)(
            function () {
              var e = v.type;
              return (0, c.V)(null != e, "spec.type must be defined"), e;
            },
            [v],
          )),
          (0, i.E)(
            function () {
              if (null != b) {
                var e,
                  t =
                    (function (e) {
                      if (Array.isArray(e)) return e;
                    })((e = (0, r.V)(b, y, _))) ||
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
                return T.receiveHandlerId(n), x.receiveHandlerId(n), i;
              }
            },
            [_, T, x, y, b],
          ),
          [
            (0, V.j)(v.collect, T, x),
            (0, a.useMemo)(
              function () {
                return x.hooks.dragSource();
              },
              [x],
            ),
            (0, a.useMemo)(
              function () {
                return x.hooks.dragPreview();
              },
              [x],
            ),
          ]
        );
      }
    },
    840508(e, t, n) {
      "use strict";
      n.d(t, { H: () => w });
      var r = n(290309),
        i = n(204581),
        a = n(575241),
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
      var d = (function () {
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
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var l = n(22633);
      function f(e, t, n) {
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
      var h = !1,
        p = (function () {
          var e;
          function t(e) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            f(this, "internalMonitor", void 0),
              f(this, "targetId", null),
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
                  (0, s.V)(
                    !h,
                    "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor",
                  );
                  try {
                    return (
                      (h = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    h = !1;
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
        })(),
        _ = n(816885),
        m = n(370725),
        g = n(723651);
      function y(e, t, n) {
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
      var b = (function () {
          var e;
          function t(e) {
            var n = this;
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            y(
              this,
              "hooks",
              (0, m.i)({
                dropTarget: function (e, t) {
                  n.clearDropTarget(),
                    (n.dropTargetOptions = t),
                    (0, g.i)(e)
                      ? (n.dropTargetRef = e)
                      : (n.dropTargetNode = e),
                    n.reconnect();
                },
              }),
            ),
              y(this, "handlerId", null),
              y(this, "dropTargetRef", null),
              y(this, "dropTargetNode", void 0),
              y(this, "dropTargetOptionsInternal", null),
              y(this, "unsubscribeDropTarget", void 0),
              y(this, "lastConnectedHandlerId", null),
              y(this, "lastConnectedDropTarget", null),
              y(this, "lastConnectedDropTargetOptions", null),
              y(this, "backend", void 0),
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
                  return !(0, _.b)(
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
        })(),
        v = n(648850);
      function w(e, t) {
        var n,
          u,
          f,
          h,
          _,
          m,
          g,
          y,
          w,
          V = (0, l.I)(e, t),
          T =
            ((n = (0, i.u)()),
            (0, o.useMemo)(
              function () {
                return new p(n);
              },
              [n],
            )),
          x =
            ((u = V.options),
            (f = (0, i.u)()),
            (h = (0, o.useMemo)(
              function () {
                return new b(f.getBackend());
              },
              [f],
            )),
            (0, a.E)(
              function () {
                return (
                  (h.dropTargetOptions = u || null),
                  h.reconnect(),
                  function () {
                    return h.disconnectDropTarget();
                  }
                );
              },
              [u],
            ),
            h);
        return (
          (_ = (0, i.u)()),
          (m = (0, o.useMemo)(
            function () {
              return new d(V, T);
            },
            [T],
          )),
          (0, o.useEffect)(
            function () {
              m.spec = V;
            },
            [V],
          ),
          (g = m),
          (y = V.accept),
          (w = (0, o.useMemo)(
            function () {
              return (
                (0, s.V)(null != V.accept, "accept must be defined"),
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
                  })((e = (0, r.l)(w, g, _))) ||
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
                      if ("string" == typeof e) return c(e, 2);
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
                        return c(e, 2);
                    }
                  })(e) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })(),
                n = t[0],
                i = t[1];
              return T.receiveHandlerId(n), x.receiveHandlerId(n), i;
            },
            [
              _,
              T,
              g,
              x,
              w
                .map(function (e) {
                  return e.toString();
                })
                .join("|"),
            ],
          ),
          [
            (0, v.j)(V.collect, T, x),
            (0, o.useMemo)(
              function () {
                return x.hooks.dropTarget();
              },
              [x],
            ),
          ]
        );
      }
    },
    22633(e, t, n) {
      "use strict";
      var r = n(582128);
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(
        t,
        {},
        {
          I: function (e, t) {
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
          },
        },
      );
    },
    723651(e, t, n) {
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
      n.d(
        t,
        {},
        {
          i: function (e) {
            return (
              null !== e &&
              "object" === r(e) &&
              Object.prototype.hasOwnProperty.call(e, "current")
            );
          },
        },
      );
    },
    290309(e, t, n) {
      "use strict";
      n.d(
        t,
        {},
        {
          V: function (e, t, n) {
            var r = n.getRegistry(),
              i = r.addSource(e, t);
            return [
              i,
              function () {
                return r.removeSource(i);
              },
            ];
          },
          l: function (e, t, n) {
            var r = n.getRegistry(),
              i = r.addTarget(e, t);
            return [
              i,
              function () {
                return r.removeTarget(i);
              },
            ];
          },
        },
      );
    },
    370725(e, t, n) {
      "use strict";
      var r = n(321733),
        i = n(582128);
      function a(e, t) {
        "function" == typeof e ? e(t) : (e.current = t);
      }
      n.d(
        t,
        {},
        {
          i: function (e) {
            var t = {};
            return (
              Object.keys(e).forEach(function (n) {
                var s = e[n];
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
                    if (!(0, i.isValidElement)(o)) return s(o, u), o;
                    if ("string" != typeof o.type) {
                      var d =
                        o.type.displayName || o.type.name || "the component";
                      throw Error(
                        "Only native element nodes can now be passed to React DnD connectors." +
                          "You can either wrap ".concat(
                            d,
                            " into a <div>, or turn it into a ",
                          ) +
                          "drag source or a drop target itself.",
                      );
                    }
                    return (
                      (e = o),
                      (t = u
                        ? function (e) {
                            return s(e, u);
                          }
                        : s),
                      (n = e.ref),
                      ((0, r.V)(
                        "string" != typeof n,
                        "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs",
                      ),
                      n)
                        ? (0, i.cloneElement)(e, {
                            ref: function (e) {
                              a(n, e), a(t, e);
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
          },
        },
      );
    },
    79962(e, t, n) {
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
      n.d(t, { A: () => d });
      var o = function (e, t) {
        var n = window,
          i = t.scrollMode,
          o = t.block,
          u = t.inline,
          d = t.boundary,
          c = t.skipOverflowHiddenElements,
          l =
            "function" == typeof d
              ? d
              : function (e) {
                  return e !== d;
                };
        if (!r(e)) throw TypeError("Invalid target");
        for (
          var f,
            h,
            p = document.scrollingElement || document.documentElement,
            _ = [],
            m = e;
          r(m) && l(m);

        ) {
          if (
            (m =
              null == (h = (f = m).parentElement)
                ? f.getRootNode().host || null
                : h) === p
          ) {
            _.push(m);
            break;
          }
          (null != m &&
            m === document.body &&
            a(m) &&
            !a(document.documentElement)) ||
            (null != m && a(m, c) && _.push(m));
        }
        for (
          var g = n.visualViewport ? n.visualViewport.width : innerWidth,
            y = n.visualViewport ? n.visualViewport.height : innerHeight,
            b = window.scrollX || pageXOffset,
            v = window.scrollY || pageYOffset,
            w = e.getBoundingClientRect(),
            V = w.height,
            T = w.width,
            x = w.top,
            E = w.right,
            k = w.bottom,
            A = w.left,
            R =
              "start" === o || "nearest" === o
                ? x
                : "end" === o
                  ? k
                  : x + V / 2,
            P = "center" === u ? A + T / 2 : "end" === u ? E : A,
            S = [],
            L = 0;
          L < _.length;
          L++
        ) {
          var O = _[L],
            I = O.getBoundingClientRect(),
            C = I.height,
            M = I.width,
            D = I.top,
            U = I.right,
            F = I.bottom,
            B = I.left;
          if (
            "if-needed" === i &&
            x >= 0 &&
            A >= 0 &&
            k <= y &&
            E <= g &&
            x >= D &&
            k <= F &&
            A >= B &&
            E <= U
          )
            break;
          var j = getComputedStyle(O),
            N = parseInt(j.borderLeftWidth, 10),
            G = parseInt(j.borderTopWidth, 10),
            H = parseInt(j.borderRightWidth, 10),
            W = parseInt(j.borderBottomWidth, 10),
            z = 0,
            K = 0,
            q = "offsetWidth" in O ? O.offsetWidth - O.clientWidth - N - H : 0,
            X =
              "offsetHeight" in O ? O.offsetHeight - O.clientHeight - G - W : 0,
            Y =
              "offsetWidth" in O
                ? 0 === O.offsetWidth
                  ? 0
                  : M / O.offsetWidth
                : 0,
            Z =
              "offsetHeight" in O
                ? 0 === O.offsetHeight
                  ? 0
                  : C / O.offsetHeight
                : 0;
          if (p === O)
            (z =
              "start" === o
                ? R
                : "end" === o
                  ? R - y
                  : "nearest" === o
                    ? s(v, v + y, y, G, W, v + R, v + R + V, V)
                    : R - y / 2),
              (K =
                "start" === u
                  ? P
                  : "center" === u
                    ? P - g / 2
                    : "end" === u
                      ? P - g
                      : s(b, b + g, g, N, H, b + P, b + P + T, T)),
              (z = Math.max(0, z + v)),
              (K = Math.max(0, K + b));
          else {
            (z =
              "start" === o
                ? R - D - G
                : "end" === o
                  ? R - F + W + X
                  : "nearest" === o
                    ? s(D, F, C, G, W + X, R, R + V, V)
                    : R - (D + C / 2) + X / 2),
              (K =
                "start" === u
                  ? P - B - N
                  : "center" === u
                    ? P - (B + M / 2) + q / 2
                    : "end" === u
                      ? P - U + H + q
                      : s(B, U, M, N, H + q, P, P + T, T));
            var Q = O.scrollLeft,
              J = O.scrollTop;
            (R +=
              J -
              (z = Math.max(
                0,
                Math.min(J + z / Z, O.scrollHeight - C / Z + X),
              ))),
              (P +=
                Q -
                (K = Math.max(
                  0,
                  Math.min(Q + K / Y, O.scrollWidth - M / Y + q),
                )));
          }
          S.push({ el: O, top: z, left: K });
        }
        return S;
      };
      function u(e) {
        return e === Object(e) && 0 !== Object.keys(e).length;
      }
      let d = function (e, t) {
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
    987701(e, t, n) {
      "use strict";
      function r(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      n.d(
        t,
        {},
        {
          A: function e(t, n) {
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
          },
        },
      );
    },
    583283(e, t, n) {
      "use strict";
      e.exports = n.p + "3d87e0acfdf050a9.scm";
    },
    345368(e, t, n) {
      "use strict";
      e.exports = n.p + "a57d829a5323de30.scm";
    },
    205778(e, t, n) {
      "use strict";
      e.exports = n.p + "d617404a9721adaa.wasm";
    },
    837424(e, t, n) {
      "use strict";
      e.exports = n.p + "2d3b24aac48706d0.scm";
    },
    169708(e, t, n) {
      "use strict";
      e.exports = n.p + "5493a714075a72c6.wasm";
    },
    530112(e, t, n) {
      "use strict";
      e.exports = n.p + "33f9142284a10095.scm";
    },
    239368(e, t, n) {
      "use strict";
      e.exports = n.p + "8260f720df5e3e06.wasm";
    },
    273848(e, t, n) {
      "use strict";
      e.exports = n.p + "5d60c65a42dd8b61.scm";
    },
    78033(e, t, n) {
      "use strict";
      e.exports = n.p + "4f098f595413c750.scm";
    },
    19582(e, t, n) {
      "use strict";
      e.exports = n.p + "598b355cd5c61ada.wasm";
    },
    431238(e, t, n) {
      "use strict";
      e.exports = n.p + "64eba10de56bb765.scm";
    },
    420254(e, t, n) {
      "use strict";
      e.exports = n.p + "0be701db53325b4e.wasm";
    },
    869773(e, t, n) {
      "use strict";
      e.exports = n.p + "93e51b74e13d1db3.scm";
    },
    309702(e, t, n) {
      "use strict";
      e.exports = n.p + "db8bd23fc1c2625c.wasm";
    },
    899159(e, t, n) {
      "use strict";
      e.exports = n.p + "74fe2c2f5a3c7981.scm";
    },
    661194(e, t, n) {
      "use strict";
      e.exports = n.p + "faf2d1d701ca26a4.wasm";
    },
    131451(e, t, n) {
      "use strict";
      e.exports = n.p + "108c8dd67e955e3b.scm";
    },
    596446(e, t, n) {
      "use strict";
      e.exports = n.p + "abf348b278af23fb.wasm";
    },
    309166(e, t, n) {
      "use strict";
      e.exports = n.p + "07e417d738722d4c.scm";
    },
    537518(e, t, n) {
      "use strict";
      e.exports = n.p + "8c53a35e60332680.wasm";
    },
    193708(e, t, n) {
      "use strict";
      e.exports = n.p + "9fa7b99795cad999.scm";
    },
    846970(e, t, n) {
      "use strict";
      e.exports = n.p + "f5ddb267044c6931.wasm";
    },
    448201(e, t, n) {
      "use strict";
      e.exports = n.p + "3ade61e47a975b88.scm";
    },
    374680(e, t, n) {
      "use strict";
      e.exports = n.p + "ceb6f797636a2e63.scm";
    },
    164366(e, t, n) {
      "use strict";
      e.exports = n.p + "7a1bfe86553551a2.scm";
    },
    315854(e, t, n) {
      "use strict";
      e.exports = n.p + "70e934b7d091f7ac.wasm";
    },
    699848(e, t, n) {
      "use strict";
      e.exports = n.p + "93e9ab38b759fa94.scm";
    },
    25314(e, t, n) {
      "use strict";
      e.exports = n.p + "6abd2df7d1f071e0.wasm";
    },
    852459(e, t, n) {
      "use strict";
      e.exports = n.p + "89a7618d9c5a0636.scm";
    },
    45458(e, t, n) {
      "use strict";
      e.exports = n.p + "9f40a4e483656d8e.wasm";
    },
    617739(e, t, n) {
      "use strict";
      e.exports = n.p + "04576dbdb98ad02f.scm";
    },
    486242(e, t, n) {
      "use strict";
      e.exports = n.p + "da7d7d6c7def34f0.wasm";
    },
    422888(e, t, n) {
      "use strict";
      e.exports = n.p + "be3f7e92e07ca1fd.scm";
    },
    775617(e, t, n) {
      "use strict";
      e.exports = n.p + "2666b65494736dbc.scm";
    },
    120406(e, t, n) {
      "use strict";
      e.exports = n.p + "799be48d2386aed3.wasm";
    },
    106874(e, t, n) {
      "use strict";
      e.exports = n.p + "9d568a1f15e8cf74.scm";
    },
    294288(e, t, n) {
      "use strict";
      e.exports = n.p + "d08bc0bdf5882cbb.wasm";
    },
    823350(e, t, n) {
      "use strict";
      e.exports = n.p + "982ab3c69af96dda.scm";
    },
    825347(e, t, n) {
      "use strict";
      e.exports = n.p + "bd9bde68cb2a04f0.scm";
    },
    824742(e, t, n) {
      "use strict";
      e.exports = n.p + "be32378ca5aa9001.wasm";
    },
    195520(e, t, n) {
      "use strict";
      e.exports = n.p + "7555218a1309ad93.scm";
    },
    911350(e, t, n) {
      "use strict";
      e.exports = n.p + "06e27614a1e70bce.wasm";
    },
    765251(e, t, n) {
      "use strict";
      e.exports = n.p + "0b59c2275238d17c.scm";
    },
    815442(e, t, n) {
      "use strict";
      e.exports = n.p + "0c9a67f1d13189e9.wasm";
    },
    777146(e, t, n) {
      "use strict";
      e.exports = n.p + "ffc648b27cbf1caf.scm";
    },
    446400(e, t, n) {
      "use strict";
      e.exports = n.p + "0c2cf4025eb430f2.wasm";
    },
    381801(e, t, n) {
      "use strict";
      e.exports = n.p + "6edd364cd748a297.scm";
    },
    979982(e, t, n) {
      "use strict";
      e.exports = n.p + "c7ac1c7e64386ef2.wasm";
    },
    419280(e, t, n) {
      "use strict";
      e.exports = n.p + "6e4f9b9f5280286f.scm";
    },
    864684(e, t, n) {
      "use strict";
      e.exports = n.p + "5b5a0771de70c994.wasm";
    },
    5845(e, t, n) {
      "use strict";
      e.exports = n.p + "a781b7662011d5f8.scm";
    },
    569542(e, t, n) {
      "use strict";
      e.exports = n.p + "a7ae27d6022446ae.wasm";
    },
    397768(e, t, n) {
      "use strict";
      e.exports = n.p + "b79558c9fe3061d8.scm";
    },
    466273(e, t, n) {
      "use strict";
      e.exports = n.p + "11028097ed495199.scm";
    },
    221646(e, t, n) {
      "use strict";
      e.exports = n.p + "9bd4a797e174717e.wasm";
    },
    213484(e, t, n) {
      "use strict";
      e.exports = n.p + "d4bfa95eadea7b95.scm";
    },
    927174(e, t, n) {
      "use strict";
      e.exports = n.p + "395bc20ec051f76a.wasm";
    },
    757872(e, t, n) {
      "use strict";
      e.exports = n.p + "0490603e9d0d01cd.scm";
    },
    924777(e, t, n) {
      "use strict";
      e.exports = n.p + "30e0c6c9ec034936.scm";
    },
    859724(e, t, n) {
      "use strict";
      e.exports = n.p + "437b321becdb7f7a.wasm";
    },
    679075(e, t, n) {
      "use strict";
      e.exports = n.p + "38b49511c25620a4.scm";
    },
    800206(e, t, n) {
      "use strict";
      e.exports = n.p + "c6e91b47ab586842.scm";
    },
    531880(e, t, n) {
      "use strict";
      e.exports = n.p + "68db595d8460bf97.scm";
    },
    502034(e, t, n) {
      "use strict";
      e.exports = n.p + "7dafb92ca6e3ec6b.wasm";
    },
    94620(e, t, n) {
      "use strict";
      e.exports = n.p + "764d203016a287be.scm";
    },
    707704(e, t, n) {
      "use strict";
      e.exports = n.p + "63f5ace618a1849b.wasm";
    },
    517353(e, t, n) {
      "use strict";
      e.exports = n.p + "b62210ce632b9c7b.scm";
    },
    913614(e, t, n) {
      "use strict";
      e.exports = n.p + "d46e056967ea88c7.wasm";
    },
    45221(e, t, n) {
      "use strict";
      e.exports = n.p + "a90228e085a54917.scm";
    },
    220924(e, t, n) {
      "use strict";
      e.exports = n.p + "83241319c2f5ea44.scm";
    },
    8258(e, t, n) {
      "use strict";
      e.exports = n.p + "14ec376fdb114a1a.scm";
    },
    876270(e, t, n) {
      "use strict";
      e.exports = n.p + "c5a069d4906465eb.wasm";
    },
    252935(e, t, n) {
      "use strict";
      e.exports = n.p + "bed44ef8a588de5e.scm";
    },
    955642(e, t, n) {
      "use strict";
      e.exports = n.p + "d59ec0d928765c62.scm";
    },
    918788(e, t, n) {
      "use strict";
      e.exports = n.p + "71d5da341ff42d98.scm";
    },
    303398(e, t, n) {
      "use strict";
      e.exports = n.p + "f038570bdb7af8e9.wasm";
    },
    867719(e, t, n) {
      "use strict";
      e.exports = n.p + "bfd02fa6ec3b90f5.scm";
    },
    751006(e, t, n) {
      "use strict";
      e.exports = n.p + "a95d1640af0ddcec.wasm";
    },
    873701(e, t, n) {
      "use strict";
      e.exports = n.p + "ca7b1a42047fd4a7.scm";
    },
    976198(e, t, n) {
      "use strict";
      e.exports = n.p + "15c8ec64f2ae513e.wasm";
    },
    1690(e, t, n) {
      "use strict";
      e.exports = n.p + "26f3233db8fd35cc.scm";
    },
    423326(e, t, n) {
      "use strict";
      e.exports = n.p + "7cdf35cc40bd63c2.wasm";
    },
    380917(e, t, n) {
      "use strict";
      e.exports = n.p + "d1d5683e682403ee.scm";
    },
    673676(e, t, n) {
      "use strict";
      e.exports = n.p + "9659a56d1febda1f.scm";
    },
    369814(e, t, n) {
      "use strict";
      e.exports = n.p + "6bb16753a126b209.wasm";
    },
    459075(e, t, n) {
      "use strict";
      e.exports = n.p + "49df8c4579e595cf.scm";
    },
    788014(e, t, n) {
      "use strict";
      e.exports = n.p + "378d2e61a0746a96.scm";
    },
    492104(e, t, n) {
      "use strict";
      e.exports = n.p + "d5a5dd5a59b729c1.scm";
    },
    241154(e, t, n) {
      "use strict";
      e.exports = n.p + "bb3ac68fa100d5c7.wasm";
    },
    996048(e, t, n) {
      "use strict";
      e.exports = n.p + "e2e4ffe9446b9430.scm";
    },
    809078(e, t, n) {
      "use strict";
      e.exports = n.p + "8233178e2772b0b2.wasm";
    },
    652520(e, t, n) {
      "use strict";
      e.exports = n.p + "b95a3d59c6e54c5a.scm";
    },
    639344(e, t, n) {
      "use strict";
      e.exports = n.p + "7ae5f9c324bbd8df.wasm";
    },
    382066(e, t, n) {
      "use strict";
      e.exports = n.p + "c1a7d06de3d1ae83.scm";
    },
    156775(e, t, n) {
      "use strict";
      e.exports = n.p + "b5bfaaa4cb03e124.scm";
    },
    920844(e, t, n) {
      "use strict";
      e.exports = n.p + "2335f8474959e079.wasm";
    },
    516958(e, t, n) {
      "use strict";
      e.exports = n.p + "4c2fad6f8a84d5f2.scm";
    },
    437906(e, t, n) {
      "use strict";
      e.exports = n.p + "904fd0ea84eebf55.wasm";
    },
    41609(e, t, n) {
      "use strict";
      e.exports = n.p + "872d0bfaaff74572.scm";
    },
    558414(e, t, n) {
      "use strict";
      e.exports = n.p + "a8fd53282d0dd6c1.wasm";
    },
    324043(e, t, n) {
      "use strict";
      e.exports = n.p + "2b31faaf5a622150.scm";
    },
    450310(e, t, n) {
      "use strict";
      e.exports = n.p + "cc541fde42e3ce86.wasm";
    },
    7336(e, t, n) {
      "use strict";
      e.exports = n.p + "1d975cf88cd6d438.scm";
    },
    311233(e, t, n) {
      "use strict";
      e.exports = n.p + "f78c17604b26eefb.scm";
    },
    937423(e, t, n) {
      "use strict";
      e.exports = n.p + "5002d3c2fa5919d9.scm";
    },
    810692(e, t, n) {
      "use strict";
      e.exports = n.p + "d6b89e5231d97f5a.wasm";
    },
    717757(e, t, n) {
      "use strict";
      e.exports = n.p + "1d57cb39bf3f26f1.scm";
    },
    832574(e, t, n) {
      "use strict";
      e.exports = n.p + "57fb6c3a61cd37dd.wasm";
    },
    453534(e, t, n) {
      "use strict";
      e.exports = n.p + "9a8a39530b75f971.scm";
    },
    170336(e, t, n) {
      "use strict";
      e.exports = n.p + "577d73522f17d851.wasm";
    },
    686761(e, t, n) {
      "use strict";
      e.exports = n.p + "9d7a1d34922edf76.scm";
    },
    658318(e, t, n) {
      "use strict";
      e.exports = n.p + "e3d7d085f023429c.wasm";
    },
    215750(e, t, n) {
      "use strict";
      e.exports = n.p + "7fe23f9203b51756.scm";
    },
    396150(e, t, n) {
      "use strict";
      e.exports = n.p + "17d9fb955684e54c.wasm";
    },
    614310(e, t, n) {
      "use strict";
      e.exports = n.p + "0d418e559e607820.scm";
    },
    951280(e, t, n) {
      "use strict";
      e.exports = n.p + "bdb130d897717272.wasm";
    },
    894783(e, t, n) {
      "use strict";
      e.exports = n.p + "0f6cf3430264982a.scm";
    },
    173530(e, t, n) {
      "use strict";
      e.exports = n.p + "77d5b4e9a629191d.wasm";
    },
    6361(e, t, n) {
      "use strict";
      e.exports = n.p + "67b407c2a35b083c.scm";
    },
    298408(e, t, n) {
      "use strict";
      e.exports = n.p + "916bab3e06f5d5ba.scm";
    },
    673278(e, t, n) {
      "use strict";
      e.exports = n.p + "b4673c9c89418881.scm";
    },
    772750(e, t, n) {
      "use strict";
      e.exports = n.p + "72a6ca901c9c4591.wasm";
    },
    840494(e, t, n) {
      "use strict";
      e.exports = n.p + "68c3eb950dcf165a.scm";
    },
    894555(e, t, n) {
      "use strict";
      e.exports = n.p + "3d801259b9a61d70.scm";
    },
    966437(e, t, n) {
      "use strict";
      e.exports = n.p + "e79699056cd1115f.scm";
    },
    919108(e, t, n) {
      "use strict";
      e.exports = n.p + "11b24f67a9d6689c.wasm";
    },
    208970(e, t, n) {
      "use strict";
      e.exports = n.p + "7cc0acd33f903a55.scm";
    },
    533887(e, t, n) {
      "use strict";
      e.exports = n.p + "fe3cea4ec886ffda.scm";
    },
    980228(e, t, n) {
      "use strict";
      e.exports = n.p + "0649ea5400fabaf9.wasm";
    },
    715524(e, t, n) {
      "use strict";
      e.exports = n.p + "4ba2f997145549c8.scm";
    },
    869221(e, t, n) {
      "use strict";
      e.exports = n.p + "8f7666f15b118b59.scm";
    },
    843178(e, t, n) {
      "use strict";
      e.exports = n.p + "4fe2bf339f9bcf80.wasm";
    },
    264682(e, t, n) {
      "use strict";
      e.exports = n.p + "f43f7dedfee334eb.scm";
    },
    694132(e, t, n) {
      "use strict";
      e.exports = n.p + "2ee8111376e6effe.wasm";
    },
    199169(e, t, n) {
      "use strict";
      e.exports = n.p + "55072d0bf912d0a2.scm";
    },
    35502(e, t, n) {
      "use strict";
      e.exports = n.p + "6000a48ad9b7b73a.wasm";
    },
    659031(e, t, n) {
      "use strict";
      e.exports = n.p + "0d0a5d0e2c94fe47.scm";
    },
    814150(e, t, n) {
      "use strict";
      e.exports = n.p + "76f51e4120a63fe4.wasm";
    },
    575876(e, t, n) {
      "use strict";
      e.exports = n.p + "58c9a8aed17cb1f1.scm";
    },
    633253(e, t, n) {
      "use strict";
      e.exports = n.p + "e0b7a2d0c737a42b.scm";
    },
    829603(e, t, n) {
      "use strict";
      e.exports = n.p + "0af059d1dd61fef3.scm";
    },
    32378(e, t, n) {
      "use strict";
      e.exports = n.p + "8af7eb58f684abcb.wasm";
    },
    583641(e, t, n) {
      "use strict";
      e.exports = n.p + "1291257665f1e395.scm";
    },
    392040(e, t, n) {
      "use strict";
      e.exports = n.p + "be08ad58feef479c.scm";
    },
    996734(e, t, n) {
      "use strict";
      e.exports = n.p + "0298ed9734c0f49b.scm";
    },
    104462(e, t, n) {
      "use strict";
      e.exports = n.p + "37629793d54595aa.wasm";
    },
    4447(e, t, n) {
      "use strict";
      e.exports = n.p + "a52dbc97f447c6f8.scm";
    },
    96492(e, t, n) {
      "use strict";
      e.exports = n.p + "91d438d370df2fb9.scm";
    },
    339666(e, t, n) {
      "use strict";
      e.exports = n.p + "4e875a19cd1d5f9a.wasm";
    },
    12498(e, t, n) {
      "use strict";
      e.exports = n.p + "3e482b73ce2f1d69.scm";
    },
    436487(e, t, n) {
      "use strict";
      e.exports = n.p + "d90643289be970b6.scm";
    },
    520216(e, t, n) {
      "use strict";
      e.exports = n.p + "e8e8836f09ead3b7.wasm";
    },
    565407(e, t, n) {
      "use strict";
      e.exports = n.p + "c74b8f4de42fb2da.scm";
    },
    774898(e, t, n) {
      "use strict";
      e.exports = n.p + "e394548d74912d61.scm";
    },
    582570(e, t, n) {
      "use strict";
      e.exports = n.p + "7035bb3a0c2b8d54.wasm";
    },
    797810(e, t, n) {
      "use strict";
      e.exports = n.p + "4edda157d72b3808.scm";
    },
    119312(e, t, n) {
      "use strict";
      e.exports = n.p + "1969a3392e618b26.wasm";
    },
    637602(e, t, n) {
      "use strict";
      e.exports = n.p + "7aaa4791a7108ef1.scm";
    },
    114460(e, t, n) {
      "use strict";
      e.exports = n.p + "f515f5466b3799e7.wasm";
    },
    46428(e, t, n) {
      "use strict";
      e.exports = n.p + "e9591638fc2a87af.scm";
    },
    88728(e, t, n) {
      "use strict";
      e.exports = n.p + "e78f39b14c762f4e.wasm";
    },
    86713(e, t, n) {
      "use strict";
      e.exports = n.p + "5bac5070b554561d.scm";
    },
    969198(e, t, n) {
      "use strict";
      e.exports = n.p + "52db42441d27d4a4.wasm";
    },
    150559(e, t, n) {
      "use strict";
      e.exports = n.p + "31a797c4177b7453.scm";
    },
    431602(e, t, n) {
      "use strict";
      e.exports = n.p + "2dc3595467f9ed1b.scm";
    },
    390606(e, t, n) {
      "use strict";
      e.exports = n.p + "0898dcd3788b188b.wasm";
    },
    831261(e, t, n) {
      "use strict";
      e.exports = n.p + "77cca439b48681fd.scm";
    },
    635306(e, t, n) {
      "use strict";
      e.exports = n.p + "a4bc55505fc9536f.scm";
    },
    342318(e, t, n) {
      "use strict";
      e.exports = n.p + "7de9e00e06cf8797.wasm";
    },
    870244(e, t, n) {
      "use strict";
      e.exports = n.p + "5862f376888a8350.scm";
    },
    335171(e, t, n) {
      "use strict";
      e.exports = n.p + "e145a14fcbb9a393.scm";
    },
    76852(e, t, n) {
      "use strict";
      e.exports = n.p + "08c1e3004d980a55.wasm";
    },
    2189(e, t, n) {
      "use strict";
      e.exports = n.p + "28047f781bb88e3a.scm";
    },
    860228(e, t, n) {
      "use strict";
      e.exports = n.p + "bf7803ec51ec3253.scm";
    },
    538618(e, t, n) {
      "use strict";
      e.exports = n.p + "d6864494d8ed8678.scm";
    },
    78150(e, t, n) {
      "use strict";
      e.exports = n.p + "4ea891f9226208e1.wasm";
    },
    270435(e, t, n) {
      "use strict";
      e.exports = n.p + "d819ef4b6df05088.scm";
    },
    488486(e, t, n) {
      "use strict";
      e.exports = n.p + "3ee26a92ffe4084e.wasm";
    },
    512371(e, t, n) {
      "use strict";
      e.exports = n.p + "ff4875e34b10af15.scm";
    },
    422278(e, t, n) {
      "use strict";
      e.exports = n.p + "b46742dbee67e756.wasm";
    },
    749861(e, t, n) {
      "use strict";
      e.exports = n.p + "a7fe368b1af4bff9.scm";
    },
    960956(e, t, n) {
      "use strict";
      e.exports = n.p + "9113833583a1967a.scm";
    },
    969110(e, t, n) {
      "use strict";
      e.exports = n.p + "7cb3d6186d2f3829.wasm";
    },
    963889(e, t, n) {
      "use strict";
      e.exports = n.p + "ab244c7915a4882a.scm";
    },
    169350(e, t, n) {
      "use strict";
      e.exports = n.p + "1a395c1d440d9bb5.scm";
    },
    747150(e, t, n) {
      "use strict";
      e.exports = n.p + "40e543a27ba17f75.wasm";
    },
    145896(e, t, n) {
      "use strict";
      e.exports = n.p + "1d745fe76aec1178.scm";
    },
    742876(e, t, n) {
      "use strict";
      e.exports = n.p + "ed86889d600477cb.wasm";
    },
    432503(e, t, n) {
      "use strict";
      e.exports = n.p + "5abb4709a74efb87.scm";
    },
    389910(e, t, n) {
      "use strict";
      e.exports = n.p + "ce91156b16f04d00.wasm";
    },
    668558(e, t, n) {
      "use strict";
      e.exports = n.p + "17a02aa0e9d4b682.scm";
    },
    786053(e, t, n) {
      "use strict";
      e.exports = n.p + "f11ea8e873f2ad7a.scm";
    },
    551744(e, t, n) {
      "use strict";
      e.exports = n.p + "534b88d8e16028e3.wasm";
    },
    945742(e, t, n) {
      "use strict";
      e.exports = n.p + "20d59b30c0bcd07b.scm";
    },
    610720(e, t, n) {
      "use strict";
      e.exports = n.p + "4833ddba4e3c2e41.wasm";
    },
    520807(e, t, n) {
      "use strict";
      e.exports = n.p + "880f37d7d46a1210.scm";
    },
    952342(e, t, n) {
      "use strict";
      e.exports = n.p + "a509605565cd4809.wasm";
    },
    536636(e, t, n) {
      "use strict";
      e.exports = n.p + "5f17f56e87bc030f.scm";
    },
    831389(e, t, n) {
      "use strict";
      e.exports = n.p + "ffc798ce19d71d0a.scm";
    },
    313e3(e, t, n) {
      "use strict";
      e.exports = n.p + "ab4ac798e39bc361.wasm";
    },
    519143(e, t, n) {
      "use strict";
      e.exports = n.p + "150079cffc11c19f.scm";
    },
    111706(e, t, n) {
      "use strict";
      e.exports = n.p + "6926cd0c58ac1bf3.scm";
    },
    105700(e, t, n) {
      "use strict";
      e.exports = n.p + "3477e34e77ae4659.scm";
    },
    77470(e, t, n) {
      "use strict";
      e.exports = n.p + "108f8fe5b2d7ba7b.wasm";
    },
    446086(e, t, n) {
      "use strict";
      e.exports = n.p + "ba3ff33752bdeb90.scm";
    },
    752104(e, t, n) {
      "use strict";
      e.exports = n.p + "25c677b3c2f23d03.scm";
    },
    63694(e, t, n) {
      "use strict";
      e.exports = n.p + "f3d546d9757678c1.wasm";
    },
    771056(e, t, n) {
      "use strict";
      e.exports = n.p + "0e68dac0c0691a0c.scm";
    },
    937961(e, t, n) {
      "use strict";
      e.exports = n.p + "b46002b17c746471.scm";
    },
    40039(e, t, n) {
      "use strict";
      e.exports = n.p + "023e042f81f1d190.scm";
    },
    593876(e, t, n) {
      "use strict";
      e.exports = n.p + "631590b9281edd13.wasm";
    },
    816644(e, t, n) {
      "use strict";
      e.exports = n.p + "4bd633ad81400c98.scm";
    },
    970341(e, t, n) {
      "use strict";
      e.exports = n.p + "7bbbd663402a67c4.scm";
    },
    906979(e, t, n) {
      "use strict";
      e.exports = n.p + "1bd9a135dae6ed53.scm";
    },
    545810(e, t, n) {
      "use strict";
      e.exports = n.p + "bea314831a08c1ad.wasm";
    },
    247812(e, t, n) {
      "use strict";
      e.exports = n.p + "9d2904ef6dd5e9fe.scm";
    },
    506126(e, t, n) {
      "use strict";
      e.exports = n.p + "332b0e874b86247c.wasm";
    },
    752756(e, t, n) {
      "use strict";
      e.exports = n.p + "3da6afe347130d3e.scm";
    },
    754773(e, t, n) {
      "use strict";
      e.exports = n.p + "ceb6f797636a2e63.scm";
    },
    529395(e, t, n) {
      "use strict";
      e.exports = n.p + "ae8158b5143b2105.scm";
    },
    673600(e, t, n) {
      "use strict";
      e.exports = n.p + "c6441c8ee959613a.wasm";
    },
    200856(e, t, n) {
      "use strict";
      e.exports = n.p + "4ed39dc06943c3e2.scm";
    },
    248671(e, t, n) {
      "use strict";
      e.exports = n.p + "48aa74bea3fcda40.scm";
    },
    330442(e, t, n) {
      "use strict";
      e.exports = n.p + "27cb89098c8d5aef.wasm";
    },
    236127(e, t, n) {
      "use strict";
      e.exports = n.p + "6a47e50cddd6b30f.scm";
    },
    935722(e, t, n) {
      "use strict";
      e.exports = n.p + "7ba428bf85f7b5c6.wasm";
    },
    632976(e, t, n) {
      "use strict";
      e.exports = n.p + "180b17205c422875.scm";
    },
    910279(e, t, n) {
      "use strict";
      e.exports = n.p + "27f2b7e9f1c3c033.scm";
    },
    974478(e, t, n) {
      "use strict";
      e.exports = n.p + "e7880f9ee99e8b17.wasm";
    },
    337792(e, t, n) {
      "use strict";
      e.exports = n.p + "71e40836c4f58bd2.scm";
    },
    558423(e, t, n) {
      "use strict";
      e.exports = n.p + "27f2b7e9f1c3c033.scm";
    },
    592340(e, t, n) {
      "use strict";
      e.exports = n.p + "2a0f0d40e3e6b5f5.wasm";
    },
    488449(e, t, n) {
      "use strict";
      e.exports = n.p + "268bf37036a7000e.scm";
    },
    294960(e, t, n) {
      "use strict";
      e.exports = n.p + "672084259765f452.scm";
    },
    500302(e, t, n) {
      "use strict";
      e.exports = n.p + "a927d3108788ff77.wasm";
    },
    188137(e, t, n) {
      "use strict";
      e.exports = n.p + "1f8dd043494ee1f1.scm";
    },
    770766(e, t, n) {
      "use strict";
      e.exports = n.p + "4a85db0adc3763c8.wasm";
    },
    150705(e, t, n) {
      "use strict";
      e.exports = n.p + "89689369445eca3b.scm";
    },
    326414(e, t, n) {
      "use strict";
      e.exports = n.p + "e9adc32678a73c70.wasm";
    },
    834055(e, t, n) {
      "use strict";
      e.exports = n.p + "cbaed2f8abecb5b8.scm";
    },
    891514(e, t, n) {
      "use strict";
      e.exports = n.p + "7692b169a722ff31.scm";
    },
    210022(e, t, n) {
      "use strict";
      e.exports = n.p + "1b7e0f257a5ea496.wasm";
    },
    205499(e, t, n) {
      "use strict";
      e.exports = n.p + "f81d26c65b6725c8.scm";
    },
    829350(e, t, n) {
      "use strict";
      e.exports = n.p + "6e18f7a201cbaf97.scm";
    },
    190630(e, t, n) {
      "use strict";
      e.exports = n.p + "2751f826ec9ebbef.wasm";
    },
    849976(e, t, n) {
      "use strict";
      e.exports = n.p + "d838a86863f4f0dd.scm";
    },
    643190(e, t, n) {
      "use strict";
      e.exports = n.p + "4f098f595413c750.scm";
    },
    324854(e, t, n) {
      "use strict";
      e.exports = n.p + "4c0f09fc8f81ff7f.wasm";
    },
    224870(e, t, n) {
      "use strict";
      e.exports = n.p + "5e8f3bb7f8d4c68c.scm";
    },
    385676(e, t, n) {
      "use strict";
      e.exports = n.p + "7559dad320aed82d.wasm";
    },
    434418(e, t, n) {
      "use strict";
      e.exports = n.p + "338c675ef087c754.scm";
    },
    528274(e, t, n) {
      "use strict";
      e.exports = n.p + "6d6c0c9662c02445.wasm";
    },
    794384(e, t, n) {
      "use strict";
      e.exports = n.p + "d1978ec42eed74f6.scm";
    },
    192088(e, t, n) {
      "use strict";
      e.exports = n.p + "fd49a79b78478dc4.wasm";
    },
    795440(e, t, n) {
      "use strict";
      e.exports = n.p + "de82efe956afcfd0.scm";
    },
    791064(e, t, n) {
      "use strict";
      e.exports = n.p + "764b4de9bc9cc7c4.wasm";
    },
    576169(e, t, n) {
      "use strict";
      e.exports = n.p + "07316eddff5889b3.scm";
    },
    769208(e, t, n) {
      "use strict";
      e.exports = n.p + "b5d39ce99749cca1.scm";
    },
    839822(e, t, n) {
      "use strict";
      e.exports = n.p + "11be26819e947a7e.wasm";
    },
    493366(e, t, n) {
      "use strict";
      e.exports = n.p + "ff32678d88643c9a.scm";
    },
    375446(e, t, n) {
      "use strict";
      e.exports = n.p + "f28149bb435e1459.wasm";
    },
    242655(e, t, n) {
      "use strict";
      e.exports = n.p + "1fe2dbba51cddf4b.wasm";
    },
    158881(e, t, n) {
      "use strict";
      e.exports = n.p + "191563f32b0d4a0b.wasm";
    },
    775702(e, t, n) {
      "use strict";
      e.exports = n.p + "e933c74869ad2e0d.wasm";
    },
    530152(e, t, n) {
      "use strict";
      n.d(t, {
        gT: () => r,
        BW: () => i,
        Sx: () => a,
        WY: () => o,
        LM: () => s,
      });
      class r extends Error {
        kind;
        constructor(e, t) {
          super(t), (this.name = "ArboriumError"), (this.kind = e);
        }
      }
      function i(e, t) {
        if (0 === t.length) return [0, 0];
        let n = d.encode(t),
          r = e._malloc(n.length);
        return e.HEAPU8.set(n, r), [r, n.length];
      }
      function a(e, t, n) {
        return 0 === n ? "" : c.decode(e.HEAPU8.subarray(t, t + n));
      }
      async function s(e) {
        return e instanceof URL
          ? u(e)
          : e instanceof Uint8Array
            ? e
            : new Uint8Array(e);
      }
      async function o(e) {
        if ("string" == typeof e) return e;
        let t = await u(e);
        return c.decode(t);
      }
      async function u(e) {
        let t = await (async function () {
          return null;
        })();
        if (t) return t;
        let n = await fetch(e);
        if (!n.ok)
          throw new r(
            "asset-fetch-failed",
            `failed to fetch ${e.href}: ${n.status} ${n.statusText}`,
          );
        return new Uint8Array(await n.arrayBuffer());
      }
      let d = new TextEncoder(),
        c = new TextDecoder();
    },
    350036(e, t, n) {
      "use strict";
      n.d(t, { pb: () => i, A: () => a });
      var r = n(530152);
      let i = {
        ada: {
          languageId: "ada",
          languageExport: "tree_sitter_ada",
          wasm: new URL(n(205778), n.b),
          highlights: new URL(n(583283), n.b),
          locals: new URL(n(345368), n.b),
        },
        agda: {
          languageId: "agda",
          languageExport: "tree_sitter_agda",
          wasm: new URL(n(169708), n.b),
          highlights: new URL(n(837424), n.b),
        },
        asciidoc: {
          languageId: "asciidoc",
          languageExport: "tree_sitter_asciidoc",
          wasm: new URL(n(239368), n.b),
          highlights: new URL(n(530112), n.b),
        },
        asm: {
          languageId: "asm",
          languageExport: "tree_sitter_asm",
          wasm: new URL(n(19582), n.b),
          highlights: new URL(n(273848), n.b),
          injections: new URL(n(78033), n.b),
        },
        awk: {
          languageId: "awk",
          languageExport: "tree_sitter_awk",
          wasm: new URL(n(420254), n.b),
          highlights: new URL(n(431238), n.b),
        },
        bash: {
          languageId: "bash",
          languageExport: "tree_sitter_bash",
          wasm: new URL(n(309702), n.b),
          highlights: new URL(n(869773), n.b),
        },
        batch: {
          languageId: "batch",
          languageExport: "tree_sitter_batch",
          wasm: new URL(n(661194), n.b),
          highlights: new URL(n(899159), n.b),
        },
        c: {
          languageId: "c",
          languageExport: "tree_sitter_c",
          wasm: new URL(n(537518), n.b),
          highlights: new URL(n(309166), n.b),
        },
        "c-sharp": {
          languageId: "c-sharp",
          languageExport: "tree_sitter_c_sharp",
          wasm: new URL(n(596446), n.b),
          highlights: new URL(n(131451), n.b),
        },
        caddy: {
          languageId: "caddy",
          languageExport: "tree_sitter_caddy",
          wasm: new URL(n(846970), n.b),
          highlights: new URL(n(193708), n.b),
        },
        capnp: {
          languageId: "capnp",
          languageExport: "tree_sitter_capnp",
          wasm: new URL(n(315854), n.b),
          highlights: new URL(n(448201), n.b),
          injections: new URL(n(374680), n.b),
          locals: new URL(n(164366), n.b),
        },
        cedar: {
          languageId: "cedar",
          languageExport: "tree_sitter_cedar",
          wasm: new URL(n(25314), n.b),
          highlights: new URL(n(699848), n.b),
        },
        cedarschema: {
          languageId: "cedarschema",
          languageExport: "tree_sitter_cedarschema",
          wasm: new URL(n(45458), n.b),
          highlights: new URL(n(852459), n.b),
        },
        clojure: {
          languageId: "clojure",
          languageExport: "tree_sitter_clojure",
          wasm: new URL(n(486242), n.b),
          highlights: new URL(n(617739), n.b),
        },
        cmake: {
          languageId: "cmake",
          languageExport: "tree_sitter_cmake",
          wasm: new URL(n(120406), n.b),
          highlights: new URL(n(422888), n.b),
          injections: new URL(n(775617), n.b),
        },
        commonlisp: {
          languageId: "commonlisp",
          languageExport: "tree_sitter_commonlisp",
          wasm: new URL(n(294288), n.b),
          highlights: new URL(n(106874), n.b),
        },
        cpp: {
          languageId: "cpp",
          languageExport: "tree_sitter_cpp",
          wasm: new URL(n(824742), n.b),
          highlights: new URL(n(823350), n.b),
          injections: new URL(n(825347), n.b),
        },
        css: {
          languageId: "css",
          languageExport: "tree_sitter_css",
          wasm: new URL(n(911350), n.b),
          highlights: new URL(n(195520), n.b),
        },
        d: {
          languageId: "d",
          languageExport: "tree_sitter_d",
          wasm: new URL(n(815442), n.b),
          highlights: new URL(n(765251), n.b),
        },
        dart: {
          languageId: "dart",
          languageExport: "tree_sitter_dart",
          wasm: new URL(n(446400), n.b),
          highlights: new URL(n(777146), n.b),
        },
        devicetree: {
          languageId: "devicetree",
          languageExport: "tree_sitter_devicetree",
          wasm: new URL(n(979982), n.b),
          highlights: new URL(n(381801), n.b),
        },
        diff: {
          languageId: "diff",
          languageExport: "tree_sitter_diff",
          wasm: new URL(n(864684), n.b),
          highlights: new URL(n(419280), n.b),
        },
        dockerfile: {
          languageId: "dockerfile",
          languageExport: "tree_sitter_dockerfile",
          wasm: new URL(n(569542), n.b),
          highlights: new URL(n(5845), n.b),
        },
        dot: {
          languageId: "dot",
          languageExport: "tree_sitter_dot",
          wasm: new URL(n(221646), n.b),
          highlights: new URL(n(397768), n.b),
          injections: new URL(n(466273), n.b),
        },
        elisp: {
          languageId: "elisp",
          languageExport: "tree_sitter_elisp",
          wasm: new URL(n(927174), n.b),
          highlights: new URL(n(213484), n.b),
        },
        elixir: {
          languageId: "elixir",
          languageExport: "tree_sitter_elixir",
          wasm: new URL(n(859724), n.b),
          highlights: new URL(n(757872), n.b),
          injections: new URL(n(924777), n.b),
        },
        elm: {
          languageId: "elm",
          languageExport: "tree_sitter_elm",
          wasm: new URL(n(502034), n.b),
          highlights: new URL(n(679075), n.b),
          injections: new URL(n(800206), n.b),
          locals: new URL(n(531880), n.b),
        },
        erlang: {
          languageId: "erlang",
          languageExport: "tree_sitter_erlang",
          wasm: new URL(n(707704), n.b),
          highlights: new URL(n(94620), n.b),
        },
        fish: {
          languageId: "fish",
          languageExport: "tree_sitter_fish",
          wasm: new URL(n(913614), n.b),
          highlights: new URL(n(517353), n.b),
        },
        fsharp: {
          languageId: "fsharp",
          languageExport: "tree_sitter_fsharp",
          wasm: new URL(n(876270), n.b),
          highlights: new URL(n(45221), n.b),
          injections: new URL(n(220924), n.b),
          locals: new URL(n(8258), n.b),
        },
        gleam: {
          languageId: "gleam",
          languageExport: "tree_sitter_gleam",
          wasm: new URL(n(303398), n.b),
          highlights: new URL(n(252935), n.b),
          injections: new URL(n(955642), n.b),
          locals: new URL(n(918788), n.b),
        },
        glsl: {
          languageId: "glsl",
          languageExport: "tree_sitter_glsl",
          wasm: new URL(n(751006), n.b),
          highlights: new URL(n(867719), n.b),
        },
        go: {
          languageId: "go",
          languageExport: "tree_sitter_go",
          wasm: new URL(n(976198), n.b),
          highlights: new URL(n(873701), n.b),
        },
        graphql: {
          languageId: "graphql",
          languageExport: "tree_sitter_graphql",
          wasm: new URL(n(423326), n.b),
          highlights: new URL(n(1690), n.b),
        },
        groovy: {
          languageId: "groovy",
          languageExport: "tree_sitter_groovy",
          wasm: new URL(n(369814), n.b),
          highlights: new URL(n(380917), n.b),
          injections: new URL(n(673676), n.b),
        },
        haskell: {
          languageId: "haskell",
          languageExport: "tree_sitter_haskell",
          wasm: new URL(n(241154), n.b),
          highlights: new URL(n(459075), n.b),
          injections: new URL(n(788014), n.b),
          locals: new URL(n(492104), n.b),
        },
        hcl: {
          languageId: "hcl",
          languageExport: "tree_sitter_hcl",
          wasm: new URL(n(809078), n.b),
          highlights: new URL(n(996048), n.b),
        },
        hlsl: {
          languageId: "hlsl",
          languageExport: "tree_sitter_hlsl",
          wasm: new URL(n(639344), n.b),
          highlights: new URL(n(652520), n.b),
        },
        html: {
          languageId: "html",
          languageExport: "tree_sitter_html",
          wasm: new URL(n(920844), n.b),
          highlights: new URL(n(382066), n.b),
          injections: new URL(n(156775), n.b),
        },
        idris: {
          languageId: "idris",
          languageExport: "tree_sitter_idris",
          wasm: new URL(n(437906), n.b),
          highlights: new URL(n(516958), n.b),
        },
        ini: {
          languageId: "ini",
          languageExport: "tree_sitter_ini",
          wasm: new URL(n(558414), n.b),
          highlights: new URL(n(41609), n.b),
        },
        java: {
          languageId: "java",
          languageExport: "tree_sitter_java",
          wasm: new URL(n(450310), n.b),
          highlights: new URL(n(324043), n.b),
        },
        javascript: {
          languageId: "javascript",
          languageExport: "tree_sitter_javascript",
          wasm: new URL(n(810692), n.b),
          highlights: new URL(n(7336), n.b),
          injections: new URL(n(311233), n.b),
          locals: new URL(n(937423), n.b),
        },
        jinja2: {
          languageId: "jinja2",
          languageExport: "tree_sitter_jinja2",
          wasm: new URL(n(832574), n.b),
          highlights: new URL(n(717757), n.b),
        },
        jq: {
          languageId: "jq",
          languageExport: "tree_sitter_jq",
          wasm: new URL(n(170336), n.b),
          highlights: new URL(n(453534), n.b),
        },
        json: {
          languageId: "json",
          languageExport: "tree_sitter_json",
          wasm: new URL(n(658318), n.b),
          highlights: new URL(n(686761), n.b),
        },
        julia: {
          languageId: "julia",
          languageExport: "tree_sitter_julia",
          wasm: new URL(n(396150), n.b),
          highlights: new URL(n(215750), n.b),
        },
        kotlin: {
          languageId: "kotlin",
          languageExport: "tree_sitter_kotlin",
          wasm: new URL(n(951280), n.b),
          highlights: new URL(n(614310), n.b),
        },
        lean: {
          languageId: "lean",
          languageExport: "tree_sitter_lean",
          wasm: new URL(n(173530), n.b),
          highlights: new URL(n(894783), n.b),
        },
        lua: {
          languageId: "lua",
          languageExport: "tree_sitter_lua",
          wasm: new URL(n(772750), n.b),
          highlights: new URL(n(6361), n.b),
          injections: new URL(n(298408), n.b),
          locals: new URL(n(673278), n.b),
        },
        luau: {
          languageId: "luau",
          languageExport: "tree_sitter_luau",
          wasm: new URL(n(919108), n.b),
          highlights: new URL(n(840494), n.b),
          injections: new URL(n(894555), n.b),
          locals: new URL(n(966437), n.b),
        },
        markdown: {
          languageId: "markdown",
          languageExport: "tree_sitter_markdown",
          wasm: new URL(n(980228), n.b),
          highlights: new URL(n(208970), n.b),
          injections: new URL(n(533887), n.b),
        },
        markdown_inline: {
          languageId: "markdown_inline",
          languageExport: "tree_sitter_markdown_inline",
          wasm: new URL(n(843178), n.b),
          highlights: new URL(n(715524), n.b),
          injections: new URL(n(869221), n.b),
        },
        matlab: {
          languageId: "matlab",
          languageExport: "tree_sitter_matlab",
          wasm: new URL(n(694132), n.b),
          highlights: new URL(n(264682), n.b),
        },
        meson: {
          languageId: "meson",
          languageExport: "tree_sitter_meson",
          wasm: new URL(n(35502), n.b),
          highlights: new URL(n(199169), n.b),
        },
        ninja: {
          languageId: "ninja",
          languageExport: "tree_sitter_ninja",
          wasm: new URL(n(814150), n.b),
          highlights: new URL(n(659031), n.b),
        },
        nix: {
          languageId: "nix",
          languageExport: "tree_sitter_nix",
          wasm: new URL(n(32378), n.b),
          highlights: new URL(n(575876), n.b),
          injections: new URL(n(633253), n.b),
          locals: new URL(n(829603), n.b),
        },
        objc: {
          languageId: "objc",
          languageExport: "tree_sitter_objc",
          wasm: new URL(n(104462), n.b),
          highlights: new URL(n(583641), n.b),
          injections: new URL(n(392040), n.b),
          locals: new URL(n(996734), n.b),
        },
        ocaml: {
          languageId: "ocaml",
          languageExport: "tree_sitter_ocaml",
          wasm: new URL(n(339666), n.b),
          highlights: new URL(n(4447), n.b),
          locals: new URL(n(96492), n.b),
        },
        perl: {
          languageId: "perl",
          languageExport: "tree_sitter_perl",
          wasm: new URL(n(520216), n.b),
          highlights: new URL(n(12498), n.b),
          injections: new URL(n(436487), n.b),
        },
        php: {
          languageId: "php",
          languageExport: "tree_sitter_php",
          wasm: new URL(n(582570), n.b),
          highlights: new URL(n(565407), n.b),
          injections: new URL(n(774898), n.b),
        },
        postscript: {
          languageId: "postscript",
          languageExport: "tree_sitter_postscript",
          wasm: new URL(n(119312), n.b),
          highlights: new URL(n(797810), n.b),
        },
        powershell: {
          languageId: "powershell",
          languageExport: "tree_sitter_powershell",
          wasm: new URL(n(114460), n.b),
          highlights: new URL(n(637602), n.b),
        },
        prolog: {
          languageId: "prolog",
          languageExport: "tree_sitter_prolog",
          wasm: new URL(n(88728), n.b),
          highlights: new URL(n(46428), n.b),
        },
        python: {
          languageId: "python",
          languageExport: "tree_sitter_python",
          wasm: new URL(n(969198), n.b),
          highlights: new URL(n(86713), n.b),
        },
        query: {
          languageId: "query",
          languageExport: "tree_sitter_query",
          wasm: new URL(n(390606), n.b),
          highlights: new URL(n(150559), n.b),
          injections: new URL(n(431602), n.b),
        },
        r: {
          languageId: "r",
          languageExport: "tree_sitter_r",
          wasm: new URL(n(342318), n.b),
          highlights: new URL(n(831261), n.b),
          locals: new URL(n(635306), n.b),
        },
        rego: {
          languageId: "rego",
          languageExport: "tree_sitter_rego",
          wasm: new URL(n(76852), n.b),
          highlights: new URL(n(870244), n.b),
          locals: new URL(n(335171), n.b),
        },
        rescript: {
          languageId: "rescript",
          languageExport: "tree_sitter_rescript",
          wasm: new URL(n(78150), n.b),
          highlights: new URL(n(2189), n.b),
          injections: new URL(n(860228), n.b),
          locals: new URL(n(538618), n.b),
        },
        ron: {
          languageId: "ron",
          languageExport: "tree_sitter_ron",
          wasm: new URL(n(488486), n.b),
          highlights: new URL(n(270435), n.b),
        },
        ruby: {
          languageId: "ruby",
          languageExport: "tree_sitter_ruby",
          wasm: new URL(n(422278), n.b),
          highlights: new URL(n(512371), n.b),
        },
        rust: {
          languageId: "rust",
          languageExport: "tree_sitter_rust_orchard",
          wasm: new URL(n(969110), n.b),
          highlights: new URL(n(749861), n.b),
          injections: new URL(n(960956), n.b),
        },
        scala: {
          languageId: "scala",
          languageExport: "tree_sitter_scala",
          wasm: new URL(n(747150), n.b),
          highlights: new URL(n(963889), n.b),
          locals: new URL(n(169350), n.b),
        },
        scheme: {
          languageId: "scheme",
          languageExport: "tree_sitter_scheme",
          wasm: new URL(n(742876), n.b),
          highlights: new URL(n(145896), n.b),
        },
        scss: {
          languageId: "scss",
          languageExport: "tree_sitter_scss",
          wasm: new URL(n(389910), n.b),
          highlights: new URL(n(432503), n.b),
        },
        solidity: {
          languageId: "solidity",
          languageExport: "tree_sitter_solidity",
          wasm: new URL(n(551744), n.b),
          highlights: new URL(n(668558), n.b),
          locals: new URL(n(786053), n.b),
        },
        sparql: {
          languageId: "sparql",
          languageExport: "tree_sitter_sparql",
          wasm: new URL(n(610720), n.b),
          highlights: new URL(n(945742), n.b),
        },
        sql: {
          languageId: "sql",
          languageExport: "tree_sitter_sql",
          wasm: new URL(n(952342), n.b),
          highlights: new URL(n(520807), n.b),
        },
        "ssh-config": {
          languageId: "ssh-config",
          languageExport: "tree_sitter_ssh_config",
          wasm: new URL(n(313e3), n.b),
          highlights: new URL(n(536636), n.b),
          injections: new URL(n(831389), n.b),
        },
        starlark: {
          languageId: "starlark",
          languageExport: "tree_sitter_starlark",
          wasm: new URL(n(77470), n.b),
          highlights: new URL(n(519143), n.b),
          injections: new URL(n(111706), n.b),
          locals: new URL(n(105700), n.b),
        },
        styx: {
          languageId: "styx",
          languageExport: "tree_sitter_styx",
          wasm: new URL(n(63694), n.b),
          highlights: new URL(n(446086), n.b),
          injections: new URL(n(752104), n.b),
        },
        svelte: {
          languageId: "svelte",
          languageExport: "tree_sitter_svelte",
          wasm: new URL(n(593876), n.b),
          highlights: new URL(n(771056), n.b),
          injections: new URL(n(937961), n.b),
          locals: new URL(n(40039), n.b),
        },
        swift: {
          languageId: "swift",
          languageExport: "tree_sitter_swift",
          wasm: new URL(n(545810), n.b),
          highlights: new URL(n(816644), n.b),
          injections: new URL(n(970341), n.b),
          locals: new URL(n(906979), n.b),
        },
        textproto: {
          languageId: "textproto",
          languageExport: "tree_sitter_textproto",
          wasm: new URL(n(506126), n.b),
          highlights: new URL(n(247812), n.b),
        },
        thrift: {
          languageId: "thrift",
          languageExport: "tree_sitter_thrift",
          wasm: new URL(n(673600), n.b),
          highlights: new URL(n(752756), n.b),
          injections: new URL(n(754773), n.b),
          locals: new URL(n(529395), n.b),
        },
        tlaplus: {
          languageId: "tlaplus",
          languageExport: "tree_sitter_tlaplus",
          wasm: new URL(n(330442), n.b),
          highlights: new URL(n(200856), n.b),
          locals: new URL(n(248671), n.b),
        },
        toml: {
          languageId: "toml",
          languageExport: "tree_sitter_toml",
          wasm: new URL(n(935722), n.b),
          highlights: new URL(n(236127), n.b),
        },
        tsx: {
          languageId: "tsx",
          languageExport: "tree_sitter_tsx",
          wasm: new URL(n(974478), n.b),
          highlights: new URL(n(632976), n.b),
          locals: new URL(n(910279), n.b),
        },
        typescript: {
          languageId: "typescript",
          languageExport: "tree_sitter_typescript",
          wasm: new URL(n(592340), n.b),
          highlights: new URL(n(337792), n.b),
          locals: new URL(n(558423), n.b),
        },
        typst: {
          languageId: "typst",
          languageExport: "tree_sitter_typst",
          wasm: new URL(n(500302), n.b),
          highlights: new URL(n(488449), n.b),
          injections: new URL(n(294960), n.b),
        },
        verilog: {
          languageId: "verilog",
          languageExport: "tree_sitter_verilog",
          wasm: new URL(n(770766), n.b),
          highlights: new URL(n(188137), n.b),
        },
        vhdl: {
          languageId: "vhdl",
          languageExport: "tree_sitter_vhdl",
          wasm: new URL(n(326414), n.b),
          highlights: new URL(n(150705), n.b),
        },
        vim: {
          languageId: "vim",
          languageExport: "tree_sitter_vim",
          wasm: new URL(n(210022), n.b),
          highlights: new URL(n(834055), n.b),
          injections: new URL(n(891514), n.b),
        },
        vue: {
          languageId: "vue",
          languageExport: "tree_sitter_vue",
          wasm: new URL(n(190630), n.b),
          highlights: new URL(n(205499), n.b),
          injections: new URL(n(829350), n.b),
        },
        wit: {
          languageId: "wit",
          languageExport: "tree_sitter_wit",
          wasm: new URL(n(324854), n.b),
          highlights: new URL(n(849976), n.b),
          injections: new URL(n(643190), n.b),
        },
        x86asm: {
          languageId: "x86asm",
          languageExport: "tree_sitter_x86asm",
          wasm: new URL(n(385676), n.b),
          highlights: new URL(n(224870), n.b),
        },
        xml: {
          languageId: "xml",
          languageExport: "tree_sitter_xml",
          wasm: new URL(n(528274), n.b),
          highlights: new URL(n(434418), n.b),
        },
        yaml: {
          languageId: "yaml",
          languageExport: "tree_sitter_yaml",
          wasm: new URL(n(192088), n.b),
          highlights: new URL(n(794384), n.b),
        },
        yuri: {
          languageId: "yuri",
          languageExport: "tree_sitter_yuri",
          wasm: new URL(n(791064), n.b),
          highlights: new URL(n(795440), n.b),
        },
        zig: {
          languageId: "zig",
          languageExport: "tree_sitter_zig",
          wasm: new URL(n(839822), n.b),
          highlights: new URL(n(576169), n.b),
          injections: new URL(n(769208), n.b),
        },
        zsh: {
          languageId: "zsh",
          languageExport: "tree_sitter_zsh",
          wasm: new URL(n(375446), n.b),
          highlights: new URL(n(493366), n.b),
        },
      };
      async function a() {
        let e = await (async function () {
            return (await n.e(621772).then(n.bind(n, 553799))).default;
          })(),
          [t, i] = await Promise.all([
            (0, r.LM)(new URL(n(242655), n.b)),
            (0, r.LM)(new URL(n(158881), n.b)),
          ]),
          a = await e({ wasmBinary: t }),
          o = await a.loadWebAssemblyModule(i, { loadAsync: !0 });
        return new s(a, o);
      }
      class s {
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
            s = (function (e, t) {
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
          if (!s)
            throw new r.gT(
              "grammar-registration-failed",
              "grammar tree_sitter_* export returned null",
            );
          let [u, d] = (0, r.BW)(this.host, e.languageId),
            [c, l] = (0, r.BW)(this.host, n),
            [f, h] = (0, r.BW)(this.host, i),
            [p, _] = (0, r.BW)(this.host, a),
            m = 0;
          try {
            m = this.abi.arborium_rt_register_grammar(
              s,
              u,
              d,
              c,
              l,
              f,
              h,
              p,
              _,
            );
          } finally {
            u && this.host._free(u),
              c && this.host._free(c),
              f && this.host._free(f),
              p && this.host._free(p);
          }
          if (0 === m)
            throw new r.gT(
              "grammar-registration-failed",
              "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
          return new o(this, m, s, e.languageId);
        }
      }
      class o {
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
          return new u(this, e);
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
      class u {
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
                      parse_fuel_used: 0,
                    }
                  : JSON.parse(e),
            );
          return {
            spans: n.spans,
            missingInjections: n.missing_injections,
            outOfFuelLanguages: n.out_of_fuel_languages,
            fuelUsed: n.fuel_used,
            parseFuelUsed: n.parse_fuel_used,
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
                      parse_fuel_used: 0,
                    }
                  : JSON.parse(e),
            );
            return {
              html: e.html,
              missingInjections: e.missing_injections,
              outOfFuelLanguages: e.out_of_fuel_languages,
              fuelUsed: e.fuel_used,
              parseFuelUsed: e.parse_fuel_used,
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
            let d = i.getValue(s, "i32"),
              c = i.getValue(o, "i32");
            if (0 === c) return n("");
            try {
              return n((0, r.Sx)(i, d, c));
            } finally {
              a.arborium_rt_free(d, c);
            }
          } finally {
            i._free(s), i._free(o);
          }
        }
      }
    },
    593034(e, t, n) {
      "use strict";
      let r = Object.freeze({
        CUSTOM_EMOJI: 1,
        COLON_EMOJI: 2,
        UNICODE_EMOJI: 4,
        MASKED_LINK: 8,
        DETECTED_LINK: 16,
        AUTO_LINK: 32,
        CONTACT_LINK: 64,
        USER_MENTION: 128,
        CHANNEL_MENTION: 256,
        ROLE_MENTION: 512,
        GAME_MENTION: 1024,
        COMMAND_MENTION: 2048,
        EVERYONE_MENTION: 4096,
        HERE_MENTION: 8192,
        STATIC_MENTION: 16384,
        TIMESTAMP: 32768,
        CODE_BLOCK: 65536,
        CODE: 131072,
        DOUBLE_CODE: 262144,
        BOLD: 524288,
        ASTERISK_ITALIC: 1048576,
        UNDERSCORE_ITALIC: 2097152,
        UNDERLINE: 4194304,
        STRIKETHROUGH: 8388608,
        SPOILER: 0x1000000,
        HEADING: 0x2000000,
        LIST: 0x4000000,
        QUOTE: 0x8000000,
        MULTILINE_QUOTE: 0x10000000,
        SUBTEXT: 0x20000000,
        DEV_LINKS: 0x40000000,
        EMOJI: 7,
        LINKS: 120,
        MENTIONS: 32640,
        CODE_SPANS: 393216,
        ITALIC: 3145728,
        QUOTES: 0x18000000,
        ALL: 0x7fffffff,
      });
      n.d(t, {}, { w: r });
    },
    359787(e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Ts: () => d,
        tJ: () =>
          function* e(t) {
            for (let n of t)
              switch ((yield n, n.type)) {
                case "paragraph":
                case "strikethrough":
                case "underline":
                case "italic":
                case "bold":
                case "quote":
                  yield* e(n.value);
                  break;
                case "spoiler":
                case "heading":
                case "subtext":
                  yield* e(n.value.content);
                  break;
                case "list":
                  for (let t of n.value.items) yield* e(t.content);
                  break;
                case "link":
                  n.text && (yield* e(n.text));
              }
          },
        qg: () => l,
        IS: () => f,
      });
      var i = n(378448),
        a = n(975370),
        s = n(905779);
      n(593034);
      let o = !1,
        u = null;
      function d() {
        return o
          ? Promise.resolve()
          : (u ??= (async function () {
              var e;
              return (
                (e = await (async function () {
                  return r || (r = await (0, i.i)()), r;
                })()),
                (0, s.Ay)({ module_or_path: e })
              );
            })().then(
              () => {
                o = !0;
              },
              (e) => {
                throw ((u = null), e);
              },
            ));
      }
      function c() {
        if (o) return;
        let e = (r || (r = (0, a.J)()), r);
        if (!e)
          throw Error(
            "@discord/markdown-wasm is not initialised. Await init() once before parsing, or hand already-compiled wasm to initSync().",
          );
        (0, s.QR)({ module: e }), (o = !0);
      }
      function l(e, t) {
        return c(), (0, s.qg)(e, t);
      }
      function f(e, t) {
        return c(), (0, s.IS)(e, t);
      }
    },
    314266(e, t, n) {
      "use strict";
      let r;
      function i(e) {
        return Intl.getCanonicalLocales(e);
      }
      n.d(t, { Y: () => H });
      var a = n(162929);
      new a.W(10);
      let s = new a.W(0);
      function o(e, t) {
        let n = t && t.cache ? t.cache : f,
          r = t && t.serializer ? t.serializer : c;
        return (
          t && t.strategy
            ? t.strategy
            : function (e, t) {
                var n, r;
                let i = 1 === e.length ? u : d;
                return (
                  (n = t.cache.create()),
                  (r = t.serializer),
                  i.bind(this, e, n, r)
                );
              }
        )(e, { cache: n, serializer: r });
      }
      function u(e, t, n, r) {
        let i =
            null == r || "number" == typeof r || "boolean" == typeof r
              ? r
              : n(r),
          a = t.get(i);
        return void 0 === a && ((a = e.call(this, r)), t.set(i, a)), a;
      }
      function d(e, t, n) {
        let r = Array.prototype.slice.call(arguments, 3),
          i = n(r),
          a = t.get(i);
        return void 0 === a && ((a = e.apply(this, r)), t.set(i, a)), a;
      }
      new a.W(-0);
      let c = function () {
        return JSON.stringify(arguments);
      };
      class l {
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
      let f = {
          create: function () {
            return new l();
          },
        },
        h = {
          variadic: function (e, t) {
            var n, r;
            return (
              (n = t.cache.create()), (r = t.serializer), d.bind(this, e, n, r)
            );
          },
          monadic: function (e, t) {
            var n, r;
            return (
              (n = t.cache.create()), (r = t.serializer), u.bind(this, e, n, r)
            );
          },
        };
      function p(e, t, n = Error) {
        if (!e) throw new n(t);
      }
      let _ = o((...e) => new Intl.NumberFormat(...e), {
        strategy: h.variadic,
      });
      o((...e) => new Intl.PluralRules(...e), { strategy: h.variadic }),
        o((...e) => new Intl.Locale(...e), { strategy: h.variadic });
      let m = o((...e) => new Intl.ListFormat(...e), { strategy: h.variadic });
      function g(e) {
        if (null == e)
          throw TypeError("undefined/null cannot be converted to object");
        return Object(e);
      }
      function y(e) {
        return "function" == typeof e;
      }
      function b(e, t, n, r, i) {
        if ("object" != typeof e) throw TypeError("Options must be an object");
        let a = e[t];
        if (void 0 !== a) {
          if ("boolean" !== n && "string" !== n)
            throw TypeError("invalid type");
          if (
            ("boolean" === n && (a = !!a),
            "string" === n &&
              (a = (function (e) {
                if ("symbol" == typeof e)
                  throw TypeError("Cannot convert a Symbol value to a string");
                return String(e);
              })(a)),
            void 0 !== r && !r.filter((e) => e == a).length)
          )
            throw RangeError(`${a} is not within ${r.join(", ")}`);
          return a;
        }
        return i;
      }
      let v = new WeakMap();
      function w(e, t) {
        let n = v.get(e);
        n || ((n = new Set(e)), v.set(e, n));
        let r = t;
        for (;;) {
          if (n.has(r)) return r;
          let e = r.lastIndexOf("-");
          if (!~e) return;
          e >= 2 && "-" === r[e - 2] && (e -= 2), (r = r.slice(0, e));
        }
      }
      let V = {
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
        T = {
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
        x = /-u(?:-[0-9a-z]{2,8})+/gi;
      function E(e, t, n = Error) {
        if (!e) throw new n(t);
      }
      function k(e, t, n) {
        let [r, i, a] = t.split("-"),
          s = !0;
        if (a && "$" === a[0]) {
          let t = "!" !== a[1],
            r = (t ? n[a.slice(1)] : n[a.slice(2)])
              .map((e) => T[e] || [e])
              .reduce((e, t) => [...e, ...t], []);
          s &&= r.indexOf(e.region || "") > -1 == t;
        } else s &&= !e.region || "*" === a || a === e.region;
        return (
          (s &&= !e.script || "*" === i || i === e.script),
          (s &&= !e.language || "*" === r || r === e.language)
        );
      }
      function A(e) {
        return [e.language, e.script, e.region].filter(Boolean).join("-");
      }
      function R(e, t, n) {
        for (let r of n.matches) {
          let i =
            k(e, r.desired, n.matchVariables) &&
            k(t, r.supported, n.matchVariables);
          if (
            (r.oneway ||
              i ||
              (i =
                k(e, r.supported, n.matchVariables) &&
                k(t, r.desired, n.matchVariables)),
            i)
          ) {
            let i = 10 * r.distance;
            if (
              n.paradigmLocales.indexOf(A(e)) > -1 !=
              n.paradigmLocales.indexOf(A(t)) > -1
            )
              return i - 1;
            return i;
          }
        }
        throw Error("No matching distance found");
      }
      let P = o(
          function (e, t) {
            let n = new Intl.Locale(e).maximize(),
              i = new Intl.Locale(t).maximize(),
              a = {
                language: n.language,
                script: n.script || "",
                region: n.region || "",
              },
              s = {
                language: i.language,
                script: i.script || "",
                region: i.region || "",
              },
              o = 0,
              u = (function () {
                if (!r) {
                  let e =
                      V["written-new"]["0"]?.paradigmLocales?._locales.split(
                        " ",
                      ),
                    t = V["written-new"].slice(1, 5);
                  r = {
                    matches: V["written-new"].slice(5).map((e) => {
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
              a.language !== s.language &&
                (o += R(
                  { language: n.language, script: "", region: "" },
                  { language: i.language, script: "", region: "" },
                  u,
                )),
              a.script !== s.script &&
                (o += R(
                  { language: n.language, script: a.script, region: "" },
                  { language: i.language, script: s.script, region: "" },
                  u,
                )),
              a.region !== s.region && (o += R(a, s, u)),
              o
            );
          },
          { serializer: (e) => `${e[0]}|${e[1]}` },
        ),
        S = new WeakMap();
      function L(e) {
        return Intl.getCanonicalLocales(e)[0];
      }
      let O = [
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
        I = [
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
        ],
        C = new WeakMap();
      function M(e) {
        let t = C.get(e);
        return t || ((t = Object.create(null)), C.set(e, t)), t;
      }
      function D(e, t) {
        let n = [],
          r = !1,
          i = !1,
          a = M(e),
          s = a.dataLocale,
          o = H.localeData[s];
        if (!o) throw TypeError("Invalid locale");
        let u = a.numberingSystem,
          d = o.digitalFormat[u];
        for (let e = 0; e < I.length && !r; e++) {
          let s = I[e],
            o = t[s.valueField],
            u = a[s.styleSlot],
            c = a[s.displaySlot],
            { unit: l, numberFormatUnit: f } = s,
            h = Object.create(null);
          ("seconds" === l || "milliseconds" === l || "microseconds" === l) &&
            "numeric" ===
              ("seconds" === l
                ? a.milliseconds
                : "milliseconds" === l
                  ? a.microseconds
                  : a.nanoseconds) &&
            ("seconds" === l
              ? (o +=
                  t.milliseconds / 1e3 +
                  t.microseconds / 1e6 +
                  t.nanoseconds / 1e9)
              : "milliseconds" === l
                ? (o += t.microseconds / 1e3 + t.nanoseconds / 1e6)
                : (o += t.nanoseconds / 1e3),
            void 0 === a.fractionalDigits
              ? ((h.maximumFractionDigits = 9), (h.minimumFractionDigits = 0))
              : ((h.maximumFractionDigits = a.fractionalDigits),
                (h.minimumFractionDigits = a.fractionalDigits)),
            (h.roundingMode = "trunc"),
            (r = !0));
          if (0 !== o || "auto" !== c) {
            let e;
            (h.numberingSystem = a.numberingSystem),
              "2-digit" === u && (h.minimumIntegerDigits = 2),
              "2-digit" !== u &&
                "numeric" !== u &&
                ((h.style = "unit"), (h.unit = f), (h.unitDisplay = u));
            let t = _(a.locale, h);
            i
              ? (e = n[n.length - 1]).push({ type: "literal", value: d })
              : (e = []),
              t.formatToParts(o).forEach(({ type: t, value: n }) => {
                e.push({ type: t, value: n, unit: f });
              }),
              i ||
                (("2-digit" === u || "numeric" === u) && (i = !0), n.push(e));
          } else i = !1;
        }
        let c = Object.create(null);
        c.type = "unit";
        let l = a.style;
        "digital" === l && (l = "short"), (c.style = l);
        let f = m(a.locale, c),
          h = [];
        for (let e of n) {
          let t = "";
          for (let { value: n } of e) t += n;
          h.push(t);
        }
        let g = f.formatToParts(h),
          y = 0,
          b = n.length,
          v = [];
        for (let { type: e, value: t } of g)
          if ("element" === e) {
            for (let e of (p(y < b, "Index out of bounds"), n[y])) v.push(e);
            y++;
          } else
            p("literal" === e, "Type must be literal"),
              v.push({ type: "literal", value: t });
        return v;
      }
      function U(e) {
        let t = (function e(t) {
          if ("number" == typeof t) return new a.W(t);
          if ("bigint" == typeof t) return new a.W(t.toString());
          if (
            (p("symbol" != typeof t, "Symbol is not supported", TypeError),
            void 0 === t)
          )
            return new a.W(0 / 0);
          if (null === t || 0 === t) return s;
          if (!0 === t) return new a.W(1);
          if ("string" == typeof t)
            try {
              return new a.W(t);
            } catch {
              return new a.W(0 / 0);
            }
          p("object" == typeof t, "object expected", TypeError);
          let n = (function (e, t) {
            if ("object" == typeof e && null != e) {
              let n,
                r = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
              if (void 0 !== r) {
                void 0 === t
                  ? (n = "default")
                  : "string" === t
                    ? (n = "string")
                    : (p(
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
                if (y(t)) {
                  let n = t.call(e);
                  if ("object" != typeof n) return n;
                }
              }
              throw TypeError("Cannot convert object to primitive value");
            }
            return e;
          })(t, "number");
          return p("object" != typeof n, "object expected", TypeError), e(n);
        })(e);
        return p(t.isInteger(), `${e} is not an integer`), t.toNumber();
      }
      function F(e) {
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
          (void 0 !== e.days && (t.days = U(e.days)),
          void 0 !== e.hours && (t.hours = U(e.hours)),
          void 0 !== e.microseconds && (t.microseconds = U(e.microseconds)),
          void 0 !== e.milliseconds && (t.milliseconds = U(e.milliseconds)),
          void 0 !== e.minutes && (t.minutes = U(e.minutes)),
          void 0 !== e.months && (t.months = U(e.months)),
          void 0 !== e.nanoseconds && (t.nanoseconds = U(e.nanoseconds)),
          void 0 !== e.seconds && (t.seconds = U(e.seconds)),
          void 0 !== e.weeks && (t.weeks = U(e.weeks)),
          void 0 !== e.years && (t.years = U(e.years)),
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
              for (let t of O) {
                if (e[t] < 0) return -1;
                if (e[t] > 0) return 1;
              }
              return 0;
            })(e);
            for (let n of O) {
              let r = e[n];
              if (
                (p(isFinite(Number(r)), `${n} is not finite`),
                (r < 0 && t > 0) || (r > 0 && t < 0))
              )
                return !1;
            }
            return !0;
          })(t)
        )
          throw RangeError("Invalid duration format");
        return t;
      }
      let B = [
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
        ],
        j = {
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
        N = [
          "locale",
          "style",
          "years",
          "yearsDisplay",
          "months",
          "monthsDisplay",
          "weeks",
          "weeksDisplay",
          "days",
          "daysDisplay",
          "hours",
          "hoursDisplay",
          "minutes",
          "minutesDisplay",
          "seconds",
          "secondsDisplay",
          "milliseconds",
          "millisecondsDisplay",
          "microseconds",
          "microsecondsDisplay",
          "nanoseconds",
          "nanosecondsDisplay",
          "numberingSystem",
          "fractionalDigits",
        ],
        G = [
          {
            styleSlot: "years",
            displaySlot: "yearsDisplay",
            unit: "years",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "months",
            displaySlot: "monthsDisplay",
            unit: "months",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "weeks",
            displaySlot: "weeksDisplay",
            unit: "weeks",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "days",
            displaySlot: "daysDisplay",
            unit: "days",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "hours",
            displaySlot: "hoursDisplay",
            unit: "hours",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "minutes",
            displaySlot: "minutesDisplay",
            unit: "minutes",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "seconds",
            displaySlot: "secondsDisplay",
            unit: "seconds",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "milliseconds",
            displaySlot: "millisecondsDisplay",
            unit: "milliseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "microseconds",
            displaySlot: "microsecondsDisplay",
            unit: "microseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "nanoseconds",
            displaySlot: "nanosecondsDisplay",
            unit: "nanoseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
        ];
      class H {
        constructor(e, t) {
          if (!(this && this instanceof H ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
          let n = i(e),
            r = Object.create(null),
            a = void 0 === t ? Object.create(null) : g(t),
            s = b(
              a,
              "localeMatcher",
              "string",
              ["best fit", "lookup"],
              "best fit",
            ),
            o = b(a, "numberingSystem", "string", void 0, void 0);
          if (void 0 !== o && 0 > B.indexOf(o))
            throw RangeError(`Invalid numberingSystems: ${o}`);
          (r.nu = o), (r.localeMatcher = s);
          let { localeData: u, availableLocales: d } = H,
            c = (function (e, t, n, r, i, a) {
              let s, o;
              if ("lookup" === n.localeMatcher)
                s = (function (e, t, n) {
                  let r = { locale: "" };
                  for (let n of t) {
                    let t = n.replace(x, ""),
                      i = w(e, t);
                    if (i)
                      return (
                        (r.locale = i),
                        n !== t && (r.extension = n.slice(t.length, n.length)),
                        r
                      );
                  }
                  return (r.locale = n()), r;
                })(Array.from(e), t, a);
              else {
                var u;
                let n, r, i, o, d;
                (u = Array.from(e)),
                  (i = []),
                  (o = t.reduce((e, t) => {
                    let n = t.replace(x, "");
                    return i.push(n), (e[n] = t), e;
                  }, {})),
                  (d = (function (e, t, n = 838) {
                    let r = 1 / 0,
                      i = { matchedDesiredLocale: "", distances: {} },
                      a = S.get(t);
                    a ||
                      ((a = t.map((e) => {
                        try {
                          return Intl.getCanonicalLocales([e])[0] || e;
                        } catch {
                          return e;
                        }
                      })),
                      S.set(t, a));
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
                                u = P(e, a) + 0 + 40 * n;
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
                  })(i, u)).matchedSupportedLocale &&
                    d.matchedDesiredLocale &&
                    ((n = d.matchedSupportedLocale),
                    (r =
                      o[d.matchedDesiredLocale].slice(
                        d.matchedDesiredLocale.length,
                      ) || void 0)),
                  (s = n ? { locale: n, extension: r } : { locale: a() });
              }
              null == s && (s = { locale: a(), extension: "" });
              let d = s.locale,
                c = i[d],
                l = { locale: "en", dataLocale: d };
              o = s.extension
                ? (function (e) {
                    let t;
                    E(
                      e === e.toLowerCase(),
                      "Expected extension to be lowercase",
                    ),
                      E(
                        "-u-" === e.slice(0, 3),
                        "Expected extension to be a Unicode locale extension",
                      );
                    let n = [],
                      r = [],
                      i = e.length,
                      a = 3;
                    for (; a < i; ) {
                      let s,
                        o = e.indexOf("-", a);
                      s = -1 === o ? i - a : o - a;
                      let u = e.slice(a, a + s);
                      E(
                        s >= 2,
                        "Expected a subtag to have at least 2 characters",
                      ),
                        void 0 === t && 2 != s
                          ? -1 === n.indexOf(u) && n.push(u)
                          : 2 === s
                            ? ((t = { key: u, value: "" }),
                              void 0 === r.find((e) => e.key === t?.key) &&
                                r.push(t))
                            : t?.value === ""
                              ? (t.value = u)
                              : (E(
                                  void 0 !== t,
                                  "Expected keyword to be defined",
                                ),
                                (t.value += "-" + u)),
                        (a += s + 1);
                    }
                    return { attributes: n, keywords: r };
                  })(s.extension).keywords
                : [];
              let f = [];
              for (let e of r) {
                let t,
                  r = c?.[e] ?? [];
                E(Array.isArray(r), `keyLocaleData for ${e} must be an array`);
                let i = r[0];
                E(
                  void 0 === i || "string" == typeof i,
                  "value must be a string or undefined",
                );
                let a = o.find((t) => t.key === e);
                if (a) {
                  let n = a.value;
                  "" !== n
                    ? r.indexOf(n) > -1 && (t = { key: e, value: (i = n) })
                    : r.indexOf("true") > -1 &&
                      (t = { key: e, value: (i = "true") });
                }
                let s = n[e];
                E(
                  null == s || "string" == typeof s,
                  "optionsValue must be a string or undefined",
                ),
                  "string" == typeof s &&
                    "" ===
                      (s = (function (e, t) {
                        let n = t.toLowerCase();
                        return E(void 0 !== e, "ukey must be defined"), n;
                      })(e.toLowerCase(), s)) &&
                    (s = "true"),
                  s !== i && r.indexOf(s) > -1 && ((i = s), (t = void 0)),
                  t && f.push(t),
                  (l[e] = i);
              }
              return (
                f.length > 0 &&
                  (d = (function (e, t, n) {
                    E(
                      -1 === e.indexOf("-u-"),
                      "Expected locale to not have a Unicode locale extension",
                    );
                    let r = "-u";
                    for (let e of t) r += `-${e}`;
                    for (let e of n) {
                      let { key: t, value: n } = e;
                      (r += `-${t}`), "" !== n && (r += `-${n}`);
                    }
                    if ("-u" === r) return L(e);
                    let i = e.indexOf("-x-");
                    return L(-1 === i ? e + r : e.slice(0, i) + r + e.slice(i));
                  })(d, [], f)),
                (l.locale = d),
                l
              );
            })(d, n, r, ["nu"], u, H.getDefaultLocale),
            l = c.locale,
            f = M(this);
          (f.initializedDurationFormat = !0),
            (f.locale = l),
            (f.numberingSystem = c.nu);
          let h = b(
            a,
            "style",
            "string",
            ["long", "short", "narrow", "digital"],
            "short",
          );
          (f.style = h), (f.dataLocale = c.dataLocale);
          let p = "";
          G.forEach((e) => {
            let {
                styleSlot: t,
                displaySlot: n,
                unit: r,
                values: i,
                digitalDefault: s,
              } = e,
              o = (function (e, t, n, r, i, a) {
                let s = b(t, e, "string", r, void 0),
                  o = "always";
                void 0 === s &&
                  ("digital" === n
                    ? ("hours" !== e &&
                        "minutes" !== e &&
                        "seconds" !== e &&
                        (o = "auto"),
                      (s = i))
                    : ((o = "auto"),
                      (s =
                        "numeric" === a || "2-digit" === a ? "numeric" : n)));
                let u = b(t, `${e}Display`, "string", ["always", "auto"], o);
                if ("numeric" === a || "2-digit" === a) {
                  if ("numeric" !== s && "2-digit" !== s)
                    throw RangeError(
                      "Can't mix numeric and non-numeric styles",
                    );
                  if (
                    (("minutes" === e || "seconds" === e) && (s = "2-digit"),
                    "numeric" === s &&
                      "always" === u &&
                      ("milliseconds" === e ||
                        "microseconds" === e ||
                        "nanoseconds" === e))
                  )
                    throw RangeError(
                      "Can't display milliseconds, microseconds, or nanoseconds in numeric format",
                    );
                }
                return { style: s, display: u };
              })(r, a, h, i, s, p);
            (f[t] = o.style),
              (f[n] = o.display),
              ("hours" === r ||
                "minutes" === r ||
                "seconds" === r ||
                "milliseconds" === r ||
                "microseconds" === r) &&
                (p = o.style);
          }),
            (f.fractionalDigits = (function (e, t, n) {
              var r = e[t];
              if (void 0 === r) return n;
              let i = Number(r);
              if (isNaN(i) || i < 0 || i > 9)
                throw RangeError(`${i} is outside of range [0, 9]`);
              return Math.floor(i);
            })(a, "fractionalDigits", void 0));
        }
        resolvedOptions() {
          if (
            "object" != typeof this ||
            !(function (e, t) {
              if (!y(e)) return !1;
              if ("object" != typeof t) return !1;
              let n = e.prototype;
              if ("object" != typeof n)
                throw TypeError(
                  "OrdinaryHasInstance called on an object with an invalid prototype property.",
                );
              return Object.prototype.isPrototypeOf.call(n, t);
            })(H, this)
          )
            throw TypeError(
              "Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver",
            );
          let e = M(this),
            t = {};
          for (let n of N) {
            let r = e[n];
            "fractionalDigits" === n
              ? void 0 !== r && (r = Number(r))
              : p(void 0 !== r, `Missing internal slot ${n}`),
              (t[n] = r);
          }
          return t;
        }
        formatToParts(e) {
          if (void 0 === M(this).initializedDurationFormat)
            throw TypeError("Error uninitialized locale");
          let t = D(this, F(e)),
            n = [];
          for (let { type: e, unit: r, value: i } of t) {
            let t = { type: e, value: i };
            r && (t.unit = r), n.push(t);
          }
          return n;
        }
        format(e) {
          if (void 0 === M(this).initializedDurationFormat)
            throw TypeError("Error uninitialized locale");
          let t = D(this, F(e)),
            n = "";
          for (let { value: e } of t) n += e;
          return n;
        }
        static supportedLocalesOf(e, t) {
          return (function (e, t, n) {
            void 0 !== n &&
              b(
                (n = g(n)),
                "localeMatcher",
                "string",
                ["lookup", "best fit"],
                "best fit",
              );
            var r = Array.from(e);
            let i = [];
            for (let e of t) {
              let t = w(r, e.replace(x, ""));
              t && i.push(t);
            }
            return i;
          })(H.availableLocales, i(e), t);
        }
        static __defaultLocale = "en";
        static availableLocales = new Set();
        static localeData = Object.keys(j).reduce((e, t) => {
          H.availableLocales.add(t);
          let n = j[t].nu;
          return (
            (e[t] = {
              nu: n,
              digitalFormat:
                j[t].separator || n.reduce((e, t) => ((e[t] = ":"), e), {}),
            }),
            e
          );
        }, {});
        static getDefaultLocale = () => H.__defaultLocale;
        static polyfilled = !0;
      }
    },
    626551(e, t, n) {
      "use strict";
      var r = [
          "black",
          "red",
          "green",
          "yellow",
          "blue",
          "magenta",
          "cyan",
          "white",
          "brightBlack",
          "brightRed",
          "brightGreen",
          "brightYellow",
          "brightBlue",
          "brightMagenta",
          "brightCyan",
          "brightWhite",
        ],
        i = {
          1: "bold",
          2: "dim",
          3: "italic",
          4: "underline",
          7: "reverse",
          8: "hidden",
          9: "strikethrough",
        },
        a = /\x1B\[([0-?]*)([ -/]*)([@-~])/g;
      function s(e) {
        let t = e.shift();
        if ("2" === t) {
          let t = e.splice(0, 3).map((e) => Number.parseInt(e));
          if (3 !== t.length || t.some((e) => Number.isNaN(e))) return;
          return { type: "rgb", rgb: t };
        }
        if ("5" === t) {
          let t = e.shift();
          if (t) return { type: "table", index: Number(t) };
        }
      }
      var o = {
        black: "#000000",
        red: "#bb0000",
        green: "#00bb00",
        yellow: "#bbbb00",
        blue: "#0000bb",
        magenta: "#ff00ff",
        cyan: "#00bbbb",
        white: "#eeeeee",
        brightBlack: "#555555",
        brightRed: "#ff5555",
        brightGreen: "#00ff00",
        brightYellow: "#ffff55",
        brightBlue: "#5555ff",
        brightMagenta: "#ff55ff",
        brightCyan: "#55ffff",
        brightWhite: "#ffffff",
      };
      n.d(
        t,
        {},
        {
          $M: function (e) {
            let t, n, o;
            return ((t = null),
            (n = null),
            (o = new Set()),
            {
              parse(e) {
                let u = [],
                  d = 0;
                do {
                  let c = (function (e, t) {
                      a.lastIndex = t;
                      let n = a.exec(e);
                      if (n) {
                        let [, e, t, r] = n;
                        return {
                          sequence:
                            "m" !== r || t || /^[<=>?]/.test(e)
                              ? []
                              : e.split(";"),
                          startPosition: n.index,
                          position: n.index + n[0].length,
                        };
                      }
                      return { position: e.length };
                    })(e, d),
                    l = c.sequence
                      ? e.substring(d, c.startPosition)
                      : e.substring(d);
                  if (
                    (l.length > 0 &&
                      u.push({
                        value: l,
                        position: d,
                        foreground: t,
                        background: n,
                        decorations: new Set(o),
                      }),
                    c.sequence)
                  ) {
                    let e = (function (e) {
                      let t = [];
                      for (; e.length > 0; ) {
                        let n = e.shift();
                        if (!n) continue;
                        let a = Number.parseInt(n);
                        if (!Number.isNaN(a))
                          if (0 === a) t.push({ type: "resetAll" });
                          else if (a <= 9)
                            i[a] &&
                              t.push({ type: "setDecoration", value: i[a] });
                          else if (a <= 29) {
                            let e = i[a - 20];
                            e &&
                              (t.push({ type: "resetDecoration", value: e }),
                              "dim" === e &&
                                t.push({
                                  type: "resetDecoration",
                                  value: "bold",
                                }));
                          } else if (a <= 37)
                            t.push({
                              type: "setForegroundColor",
                              value: { type: "named", name: r[a - 30] },
                            });
                          else if (38 === a) {
                            let n = s(e);
                            n &&
                              t.push({ type: "setForegroundColor", value: n });
                          } else if (39 === a)
                            t.push({ type: "resetForegroundColor" });
                          else if (a <= 47)
                            t.push({
                              type: "setBackgroundColor",
                              value: { type: "named", name: r[a - 40] },
                            });
                          else if (48 === a) {
                            let n = s(e);
                            n &&
                              t.push({ type: "setBackgroundColor", value: n });
                          } else
                            49 === a
                              ? t.push({ type: "resetBackgroundColor" })
                              : 53 === a
                                ? t.push({
                                    type: "setDecoration",
                                    value: "overline",
                                  })
                                : 55 === a
                                  ? t.push({
                                      type: "resetDecoration",
                                      value: "overline",
                                    })
                                  : a >= 90 && a <= 97
                                    ? t.push({
                                        type: "setForegroundColor",
                                        value: {
                                          type: "named",
                                          name: r[a - 90 + 8],
                                        },
                                      })
                                    : a >= 100 &&
                                      a <= 107 &&
                                      t.push({
                                        type: "setBackgroundColor",
                                        value: {
                                          type: "named",
                                          name: r[a - 100 + 8],
                                        },
                                      });
                      }
                      return t;
                    })(c.sequence);
                    for (let r of e)
                      "resetAll" === r.type
                        ? ((t = null), (n = null), o.clear())
                        : "resetForegroundColor" === r.type
                          ? (t = null)
                          : "resetBackgroundColor" === r.type
                            ? (n = null)
                            : "resetDecoration" === r.type && o.delete(r.value);
                    for (let r of e)
                      "setForegroundColor" === r.type
                        ? (t = r.value)
                        : "setBackgroundColor" === r.type
                          ? (n = r.value)
                          : "setDecoration" === r.type && o.add(r.value);
                  }
                  d = c.position;
                } while (d < e.length);
                return u;
              },
            }).parse(e);
          },
          W$: r,
          rQ: function (e = o) {
            let t;
            function n(e) {
              return `#${e.map((e) => Math.max(0, Math.min(e, 255)).toString(16).padStart(2, "0")).join("")}`;
            }
            return {
              value: function (i) {
                switch (i.type) {
                  case "named":
                    return e[i.name];
                  case "rgb":
                    return n(i.rgb);
                  case "table":
                    var a;
                    return (
                      (a = i.index),
                      (function () {
                        if (t) return t;
                        t = [];
                        for (let n = 0; n < r.length; n++) t.push(e[r[n]]);
                        let i = [0, 95, 135, 175, 215, 255];
                        for (let e = 0; e < 6; e++)
                          for (let r = 0; r < 6; r++)
                            for (let a = 0; a < 6; a++)
                              t.push(n([i[e], i[r], i[a]]));
                        let a = 8;
                        for (let e = 0; e < 24; e++, a += 10)
                          t.push(n([a, a, a]));
                        return t;
                      })()[a]
                    );
                }
              },
            };
          },
        },
      );
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
              ("function" == typeof n && Function.toString.call(n) === G)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[j] ||
            !!(null == (t = e.constructor) ? void 0 : t[j]) ||
            c(e) ||
            l(e))
        );
      }
      function s(e, t, n) {
        void 0 === n && (n = !1),
          0 === o(e)
            ? (n ? Object.keys : H)(e).forEach(function (r) {
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
            : c(e)
              ? 2
              : 3 * !!l(e);
      }
      function u(e, t) {
        return 2 === o(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function d(e, t, n) {
        var r = o(e);
        2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
      }
      function c(e) {
        return D && e instanceof Map;
      }
      function l(e) {
        return U && e instanceof Set;
      }
      function f(e) {
        return e.o || e.t;
      }
      function h(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = W(e);
        delete t[N];
        for (var n = H(t), r = 0; r < n.length; r++) {
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
        var t = z[e];
        return t || r(18, e), t;
      }
      function y(e, t) {
        t && (g("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function b(e) {
        v(e), e.p.forEach(V), (e.p = null);
      }
      function v(e) {
        e === C && (C = e.l);
      }
      function w(e) {
        return (C = { p: [], l: C, h: e, m: !0, _: 0 });
      }
      function V(e) {
        var t = e[N];
        0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
      }
      function T(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          i = void 0 !== e && e !== n;
        return (
          t.h.O || g("ES5").S(t, e, i),
          i
            ? (n[N].P && (b(t), r(4)),
              a(e) && ((e = x(t, e)), t.l || k(t, e)),
              t.u && g("Patches").M(n[N].t, e, t.u, t.s))
            : (e = x(t, n, [])),
          b(t),
          t.u && t.v(t.u, t.s),
          e !== B ? e : void 0
        );
      }
      function x(e, t, n) {
        if (m(t)) return t;
        var r = t[N];
        if (!r)
          return (
            s(
              t,
              function (i, a) {
                return E(e, r, t, i, a, n);
              },
              !0,
            ),
            t
          );
        if (r.A !== e) return t;
        if (!r.P) return k(e, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var i = 4 === r.i || 5 === r.i ? (r.o = h(r.k)) : r.o,
            a = i,
            o = !1;
          3 === r.i && ((a = new Set(i)), i.clear(), (o = !0)),
            s(a, function (t, a) {
              return E(e, r, i, t, a, n, o);
            }),
            k(e, i, !1),
            n && e.u && g("Patches").N(r, n, e.u, e.s);
        }
        return r.o;
      }
      function E(e, t, n, r, s, o, c) {
        if (i(s)) {
          var l = x(
            e,
            s,
            o && t && 3 !== t.i && !u(t.R, r) ? o.concat(r) : void 0,
          );
          if ((d(n, r, l), !i(l))) return;
          e.m = !1;
        } else c && n.add(s);
        if (a(s) && !m(s)) {
          if (!e.h.D && e._ < 1) return;
          x(e, s), (t && t.A.l) || k(e, s);
        }
      }
      function k(e, t, n) {
        void 0 === n && (n = !1), !e.l && e.h.D && e.m && p(t, n);
      }
      function A(e, t) {
        var n = e[N];
        return (n ? f(n) : e)[t];
      }
      function R(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function P(e) {
        e.P || ((e.P = !0), e.l && P(e.l));
      }
      function S(e) {
        e.o || (e.o = h(e.t));
      }
      function L(e, t, n) {
        var r,
          i,
          a,
          s,
          o,
          u,
          d,
          f = c(t)
            ? g("MapSet").F(t, n)
            : l(t)
              ? g("MapSet").T(t, n)
              : e.O
                ? ((a = i =
                    {
                      i: +!!(r = Array.isArray(t)),
                      A: n ? n.A : C,
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
                  (s = K),
                  r && ((a = [i]), (s = q)),
                  (u = (o = Proxy.revocable(a, s)).revoke),
                  (i.k = d = o.proxy),
                  (i.j = u),
                  d)
                : g("ES5").J(t, n);
        return (n ? n.A : C).p.push(f), f;
      }
      function O(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return h(e);
      }
      var I,
        C,
        M = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
        D = "u" > typeof Map,
        U = "u" > typeof Set,
        F =
          "u" > typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "u" > typeof Reflect,
        B = M
          ? Symbol.for("immer-nothing")
          : (((I = {})["immer-nothing"] = !0), I),
        j = M ? Symbol.for("immer-draftable") : "__$immer_draftable",
        N = M ? Symbol.for("immer-state") : "__$immer_state",
        G = "" + Object.prototype.constructor,
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
        W =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              H(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
            );
          },
        z = {},
        K = {
          get: function (e, t) {
            if (t === N) return e;
            var n,
              r,
              i = f(e);
            if (!u(i, t))
              return (r = R(i, t))
                ? "value" in r
                  ? r.value
                  : null == (n = r.get)
                    ? void 0
                    : n.call(e.k)
                : void 0;
            var s = i[t];
            return e.I || !a(s)
              ? s
              : s === A(e.t, t)
                ? (S(e), (e.o[t] = L(e.A.h, s, e)))
                : s;
          },
          has: function (e, t) {
            return t in f(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(f(e));
          },
          set: function (e, t, n) {
            var r = R(f(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var i = A(f(e), t),
                a = null == i ? void 0 : i[N];
              if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
              if (
                (n === i ? 0 !== n || 1 / n == 1 / i : n != n && i != i) &&
                (void 0 !== n || u(e.t, t))
              )
                return !0;
              S(e), P(e);
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
              void 0 !== A(e.t, t) || t in e.t
                ? ((e.R[t] = !1), S(e), P(e))
                : delete e.R[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = f(e),
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
        q = {};
      s(K, function (e, t) {
        q[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (q.deleteProperty = function (e, t) {
          return q.set.call(this, e, t, void 0);
        }),
        (q.set = function (e, t, n) {
          return K.set.call(this, e[0], t, n, e[0]);
        });
      var X = new ((function () {
          function e(e) {
            var t = this;
            (this.O = F),
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
                    d = L(t, e, void 0),
                    c = !0;
                  try {
                    (s = n(d)), (c = !1);
                  } finally {
                    c ? b(u) : v(u);
                  }
                  return "u" > typeof Promise && s instanceof Promise
                    ? s.then(
                        function (e) {
                          return y(u, i), T(e, u);
                        },
                        function (e) {
                          throw (b(u), e);
                        },
                      )
                    : (y(u, i), T(s, u));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (s = n(e)) && (s = e),
                    s === B && (s = void 0),
                    t.D && p(s, !0),
                    i)
                  ) {
                    var l = [],
                      f = [];
                    g("Patches").M(e, s, l, f), i(l, f);
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
                      (r.I = !0), (n = O(t, i)), (r.I = !1);
                    } else n = O(t, i);
                    return (
                      s(n, function (t, i) {
                        var a;
                        (r &&
                          ((a = r.t), (2 === o(a) ? a.get(t) : a[t]) === i)) ||
                          d(n, t, e(i));
                      }),
                      3 === i ? new Set(n) : n
                    );
                  })(t)));
              var t,
                n = w(this),
                u = L(this, e, void 0);
              return (u[N].C = !0), v(n), u;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[N]).A;
              return y(n, t), T(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.D = e;
            }),
            (t.setUseProxies = function (e) {
              e && !F && r(20), (this.O = e);
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
        Y = X.produce,
        Z =
          (X.produceWithPatches.bind(X),
          X.setAutoFreeze.bind(X),
          X.setUseProxies.bind(X),
          X.applyPatches.bind(X),
          X.createDraft.bind(X)),
        Q = X.finishDraft.bind(X);
      n.d(t, {}, { Qx: i, jM: Y, mq: Z, vD: Q });
    },
    694260(e, t, n) {
      "use strict";
      function r(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      n.d(
        t,
        {},
        {
          Q: function (e) {
            var t, n;
            return (
              !1 !== r(e) &&
              (void 0 === (t = e.constructor) ||
                (!1 !== r((n = t.prototype)) &&
                  !1 !== n.hasOwnProperty("isPrototypeOf")))
            );
          },
        },
      );
    },
  },
]);
//# sourceMappingURL=760476.b912f6ec14757186.js.map
