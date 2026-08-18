(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["112265"],
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
      n.d(t, { J: () => R });
      var r,
        i = [],
        a = "ResizeObserver loop completed with undelivered notifications.",
        o = function () {
          var e;
          "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: a }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1),
              (e.message = a)),
            window.dispatchEvent(e);
        },
        s = n(522816),
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
                var n = new s.Z(t.target),
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
        f = function (e) {
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
        h = function () {
          var e = 0;
          for (
            f(0);
            i.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            f((e = d()));
          return (
            i.some(function (e) {
              return e.skippedTargets.length > 0;
            }) && o(),
            e > 0
          );
        },
        p = n(717205),
        m = [],
        g = function (e) {
          if (!r) {
            var t = 0,
              n = document.createTextNode("");
            new MutationObserver(function () {
              return m.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(n, { characterData: !0 }),
              (r = function () {
                n.textContent = "".concat(t ? t-- : t++);
              });
          }
          m.push(e), r();
        },
        _ = function (e) {
          g(function () {
            requestAnimationFrame(e);
          });
        },
        y = 0,
        v = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        b = [
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
        T = !1,
        E = new ((function () {
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
              if ((void 0 === e && (e = 250), !T)) {
                T = !0;
                var n = w(e);
                _(function () {
                  var r = !1;
                  try {
                    r = h();
                  } finally {
                    if (((T = !1), (e = n - w()), !y)) return;
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
                b.forEach(function (t) {
                  return p.S.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                b.forEach(function (t) {
                  return p.S.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        x = function (e) {
          !y && e > 0 && E.start(), (y += e) || E.stop();
        },
        V = n(838259),
        k = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || V.U.CONTENT_BOX),
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
        A = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        S = new WeakMap(),
        O = function (e, t) {
          for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
          return -1;
        },
        R = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var n = new A(e, t);
              S.set(e, n);
            }),
            (e.observe = function (e, t, n) {
              var r = S.get(e),
                a = 0 === r.observationTargets.length;
              0 > O(r.observationTargets, t) &&
                (a && i.push(r),
                r.observationTargets.push(new k(t, n && n.box)),
                x(1),
                E.schedule());
            }),
            (e.unobserve = function (e, t) {
              var n = S.get(e),
                r = O(n.observationTargets, t),
                a = 1 === n.observationTargets.length;
              r >= 0 &&
                (a && i.splice(i.indexOf(n), 1),
                n.observationTargets.splice(r, 1),
                x(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                n = S.get(e);
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
      n.d(t, { P: () => _, m: () => g });
      var r = n(838259),
        i = n(162563),
        a = n(47361),
        o = (function () {
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
        s = n(916784),
        u = n(717205),
        c = new WeakMap(),
        l = /auto|scroll/,
        d = /^tb|vertical/,
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
        m = (0, a.C)({
          devicePixelContentBoxSize: p(),
          borderBoxSize: p(),
          contentBoxSize: p(),
          contentRect: new o(0, 0, 0, 0),
        }),
        g = function (e, t) {
          if ((void 0 === t && (t = !1), c.has(e) && !t)) return c.get(e);
          if ((0, s.dK)(e)) return c.set(e, m), m;
          var n = getComputedStyle(e),
            r = (0, s.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            i = !f && "border-box" === n.boxSizing,
            u = d.test(n.writingMode || ""),
            g = !r && l.test(n.overflowY || ""),
            _ = !r && l.test(n.overflowX || ""),
            y = r ? 0 : h(n.paddingTop),
            v = r ? 0 : h(n.paddingRight),
            b = r ? 0 : h(n.paddingBottom),
            w = r ? 0 : h(n.paddingLeft),
            T = r ? 0 : h(n.borderTopWidth),
            E = r ? 0 : h(n.borderRightWidth),
            x = r ? 0 : h(n.borderBottomWidth),
            V = r ? 0 : h(n.borderLeftWidth),
            k = w + v,
            A = y + b,
            S = V + E,
            O = T + x,
            R = _ ? e.offsetHeight - O - e.clientHeight : 0,
            P = g ? e.offsetWidth - S - e.clientWidth : 0,
            C = r ? r.width : h(n.width) - (i ? k + S : 0) - P,
            L = r ? r.height : h(n.height) - (i ? A + O : 0) - R,
            I = C + k + P + S,
            D = L + A + R + O,
            M = (0, a.C)({
              devicePixelContentBoxSize: p(
                Math.round(C * devicePixelRatio),
                Math.round(L * devicePixelRatio),
                u,
              ),
              borderBoxSize: p(I, D, u),
              contentBoxSize: p(C, L, u),
              contentRect: new o(w, y, C, L),
            });
          return c.set(e, M), M;
        },
        _ = function (e, t, n) {
          var i = g(e, n),
            a = i.borderBoxSize,
            o = i.contentBoxSize,
            s = i.devicePixelContentBoxSize;
          switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
              return s;
            case r.U.BORDER_BOX:
              return a;
            default:
              return o;
          }
        };
    },
    916784(e, t, n) {
      "use strict";
      n.d(t, { XJ: () => r, dK: () => i, td: () => o, vq: () => a });
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
            o = e.offsetHeight;
          return !(a || o || e.getClientRects().length);
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
        o = function (e) {
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
    106071(e) {
      function t(e, t, n, r) {
        Object.defineProperty(e, t, {
          get: n,
          set: r,
          enumerable: !0,
          configurable: !0,
        });
      }
      t(e.exports, "announce", () => i),
        t(e.exports, "createAnnouncer", () => r),
        t(e.exports, "clearAnnouncer", () => a),
        t(e.exports, "destroyAnnouncer", () => o),
        t(e.exports, "moveAnnouncer", () => s);
      let n = null;
      function r(e = null) {
        n || (n = new u(e));
      }
      function i(e, t = "assertive", r = 7e3) {
        n
          ? n.announce(e, t, r)
          : ((n = new u()),
            (
              "boolean" == typeof IS_REACT_ACT_ENVIRONMENT
                ? IS_REACT_ACT_ENVIRONMENT
                : "u" > typeof jest
            )
              ? n.announce(e, t, r)
              : setTimeout(() => {
                  (null == n ? void 0 : n.isAttached()) &&
                    (null == n || n.announce(e, t, r));
                }, 100));
      }
      function a(e) {
        n && n.clear(e);
      }
      function o() {
        n && (n.destroy(), (n = null));
      }
      function s(e = null) {
        n ? n.move(e) : r(e);
      }
      class u {
        isAttached() {
          var e;
          return null == (e = this.node) ? void 0 : e.isConnected;
        }
        createLog(e) {
          let t = document.createElement("div");
          return (
            t.setAttribute("role", "log"),
            t.setAttribute("aria-live", e),
            t.setAttribute("aria-relevant", "additions"),
            t
          );
        }
        destroy() {
          this.node &&
            this.parentNode &&
            (this.parentNode.removeChild(this.node), (this.node = null));
        }
        move(e = null) {
          this.node &&
            ((this.parentNode = null != e ? e : document.body),
            this.parentNode.prepend(this.node));
        }
        announce(e, t = "assertive", n = 7e3) {
          var r, i;
          if (!this.node) return;
          let a = document.createElement("div");
          "object" == typeof e
            ? (a.setAttribute("role", "img"),
              a.setAttribute("aria-labelledby", e["aria-labelledby"]))
            : (a.textContent = e),
            "assertive" === t
              ? null == (r = this.assertiveLog) || r.appendChild(a)
              : null == (i = this.politeLog) || i.appendChild(a),
            "" !== e &&
              setTimeout(() => {
                a.remove();
              }, n);
        }
        clear(e) {
          this.node &&
            ((!e || "assertive" === e) &&
              this.assertiveLog &&
              (this.assertiveLog.innerHTML = ""),
            (!e || "polite" === e) &&
              this.politeLog &&
              (this.politeLog.innerHTML = ""));
        }
        constructor(e = null) {
          (this.node = null),
            (this.parentNode = null),
            (this.assertiveLog = null),
            (this.politeLog = null),
            "u" > typeof document &&
              ((this.node = document.createElement("div")),
              (this.parentNode = null != e ? e : document.body),
              (this.node.dataset.liveAnnouncer = "true"),
              Object.assign(this.node.style, {
                border: 0,
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap",
              }),
              (this.assertiveLog = this.createLog("assertive")),
              this.node.appendChild(this.assertiveLog),
              (this.politeLog = this.createLog("polite")),
              this.node.appendChild(this.politeLog),
              this.parentNode.prepend(this.node));
        }
      }
    },
    756942(e, t, n) {
      var r = n(106071);
      function i(e, t, n, r) {
        Object.defineProperty(e, t, {
          get: n,
          set: r,
          enumerable: !0,
          configurable: !0,
        });
      }
      i(e.exports, "announce", () => r.announce),
        i(e.exports, "createAnnouncer", () => r.createAnnouncer),
        i(e.exports, "clearAnnouncer", () => r.clearAnnouncer),
        i(e.exports, "destroyAnnouncer", () => r.destroyAnnouncer),
        i(e.exports, "moveAnnouncer", () => r.moveAnnouncer);
    },
    321733(e, t, n) {
      "use strict";
      function r(e, t) {
        for (
          var n, r = arguments.length, i = Array(r > 2 ? r - 2 : 0), a = 2;
          a < r;
          a++
        )
          i[a - 2] = arguments[a];
        if (!e) {
          if (void 0 === t)
            n = Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var o = 0;
            (n = Error(
              t.replace(/%s/g, function () {
                return i[o++];
              }),
            )).name = "Invariant Violation";
          }
          throw ((n.framesToPop = 1), n);
        }
      }
      n.d(t, { V: () => r });
    },
    707040(e) {
      "use strict";
      e.exports = function e(t, n) {
        if (t === n) return !0;
        if (t && n && "object" == typeof t && "object" == typeof n) {
          if (t.constructor !== n.constructor) return !1;
          if (Array.isArray(t)) {
            if ((r = t.length) != n.length) return !1;
            for (i = r; 0 != i--; ) if (!e(t[i], n[i])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === n.source && t.flags === n.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === n.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === n.toString();
          if ((r = (a = Object.keys(t)).length) !== Object.keys(n).length)
            return !1;
          for (i = r; 0 != i--; )
            if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
          for (i = r; 0 != i--; ) {
            var r,
              i,
              a,
              o = a[i];
            if (!e(t[o], n[o])) return !1;
          }
          return !0;
        }
        return t != t && n != n;
      };
    },
    66713() {
      "use strict";
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
        function o(e, t, n, r) {
          "function" == typeof e.removeEventListener
            ? e.removeEventListener(t, n, r || !1)
            : "function" == typeof e.detatchEvent &&
              e.detatchEvent("on" + t, n);
        }
        function s(e) {
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
              o(e, "resize", this._checkForIntersections, !0),
              o(t, "scroll", this._checkForIntersections, !0),
              this._domObserver &&
                (this._domObserver.disconnect(), (this._domObserver = null)));
          }),
          (i.prototype._checkForIntersections = function () {
            var t = this._rootIsInDom(),
              n = t ? this._getRootRect() : u();
            this._observationTargets.forEach(function (i) {
              var a = i.element,
                o = s(a),
                u = this._rootContainsTarget(a),
                c = i.entry,
                l = t && u && this._computeTargetAndRootIntersection(a, n),
                d = (i.entry = new r({
                  time: e.performance && performance.now && performance.now(),
                  target: a,
                  boundingClientRect: o,
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
              for (var i = s(n), a = l(n), o = !1; !o; ) {
                var u = null,
                  c = 1 == a.nodeType ? e.getComputedStyle(a) : {};
                if ("none" == c.display) return;
                if (
                  (a == this.root || a == t
                    ? ((o = !0), (u = r))
                    : a != t.body &&
                      a != t.documentElement &&
                      "visible" != c.overflow &&
                      (u = s(a)),
                  u &&
                    !(i = (function (e, t) {
                      var n = Math.max(e.top, t.top),
                        r = Math.min(e.bottom, t.bottom),
                        i = Math.max(e.left, t.left),
                        a = Math.min(e.right, t.right),
                        o = a - i,
                        s = r - n;
                      return (
                        o >= 0 &&
                        s >= 0 && {
                          top: n,
                          bottom: r,
                          left: i,
                          right: a,
                          width: o,
                          height: s,
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
            if (this.root) e = s(this.root);
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
          o = 1;
        o < 20;
        o++
      )
        a["f" + o] = 111 + o;
      function s(e) {
        return i[(e = e.toLowerCase())] || e;
      }
      t.isKeyHotkey = function (e, t) {
        var n, i, o, u, c;
        return (
          (n = e),
          (i = { byKey: !0 }),
          (o = t),
          !i || "byKey" in i || ((o = i), (i = null)),
          Array.isArray(n) || (n = [n]),
          (u = n.map(function (e) {
            return (function (e, t) {
              var n = t && t.byKey,
                i = {},
                o = (e = e.replace("++", "+add")).split("+"),
                u = o.length;
              for (var c in r) i[r[c]] = !1;
              var l = !0,
                d = !1,
                f = void 0;
              try {
                for (
                  var h, p = o[Symbol.iterator]();
                  !(l = (h = p.next()).done);
                  l = !0
                ) {
                  var m = h.value,
                    g = m.endsWith("?") && m.length > 1;
                  g && (m = m.slice(0, -1));
                  var _ = s(m),
                    y = r[_];
                  (1 !== u && y) ||
                    (n
                      ? (i.key = _)
                      : (i.which = (function (e) {
                          return a[(e = s(e))] || e.toUpperCase().charCodeAt(0);
                        })(m))),
                    y && (i[y] = !g || null);
                }
              } catch (e) {
                (d = !0), (f = e);
              } finally {
                try {
                  !l && p.return && p.return();
                } finally {
                  if (d) throw f;
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
          null == o ? c : c(o)
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
                            o = 0;
                          o < t;
                          o++
                        ) {
                          for (var s = 0; s < n; s++) i[s][r] = e[s][o];
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
                        for (var a = [], o = 0; o < this.channels; o++)
                          a[o] = e[o].subarray(t, i);
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
                          o = [],
                          s = e[0].length,
                          u = this._resampleFractional,
                          c = (s * r) / t + u,
                          l = Math.floor(c),
                          d = c - l;
                        a =
                          t < r
                            ? function (e, n, i, a) {
                                for (
                                  var o = function (t) {
                                      return t < 0
                                        ? i && i.length + t > 0
                                          ? i[i.length + t]
                                          : e[0]
                                        : e[t];
                                    },
                                    s = 0;
                                  s < n.length;
                                  s++
                                ) {
                                  var c,
                                    l = ((s + 1 - u) * t) / r - 1,
                                    d = Math.floor(l),
                                    f = Math.ceil(l);
                                  (c =
                                    d == f
                                      ? o(d)
                                      : o(d) * (f - l) + o(f) * (l - d)),
                                    (n[s] = a * c);
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
                          var m = e[p],
                            g = new Float32Array(l);
                          a(
                            m,
                            g,
                            this._resampleLastSampleData
                              ? this._resampleLastSampleData[p]
                              : void 0,
                            f,
                          ),
                            o.push(g);
                        }
                        return (
                          (this._resampleFractional = d),
                          (this._resampleLastSampleData = e),
                          o
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
                    function o(e, t, n) {
                      var r = n.audioContext || o.initSharedAudioContext();
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
                    (o.prototype.bufferSize = 4096),
                      (o.prototype.bufferThreshold = 8192),
                      (o.prototype._volume = 1),
                      Object.defineProperty(o.prototype, "volume", {
                        get: function () {
                          return this._volume;
                        },
                        set: function (e) {
                          this._volume = +e;
                        },
                      }),
                      (o.prototype._muted = !1),
                      Object.defineProperty(o.prototype, "muted", {
                        get: function () {
                          return this._muted;
                        },
                        set: function (e) {
                          this._muted = !!e;
                        },
                      }),
                      (o.prototype._audioProcess = function (e) {
                        var t,
                          n,
                          r,
                          i,
                          o =
                            "number" == typeof e.playbackTime
                              ? e.playbackTime
                              : this._context.currentTime +
                                this.bufferSize / this.rate,
                          s = this._playbackTimeAtBufferTail;
                        if (
                          (s < o && (this._delayedTime += o - s),
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
                              o + this.bufferSize / this.rate),
                            this._bufferQueue.sampleCount() <
                              Math.max(this.bufferSize, this.bufferThreshold) &&
                              this.onbufferlow &&
                              a(this.onbufferlow.bind(this));
                        }
                      }),
                      (o.prototype._samplesQueued = function () {
                        return (
                          this._bufferQueue.sampleCount() +
                          Math.floor(this._timeAwaitingPlayback() * this.rate)
                        );
                      }),
                      (o.prototype._timeAwaitingPlayback = function () {
                        return Math.max(
                          0,
                          this._playbackTimeAtBufferTail -
                            this._context.currentTime,
                        );
                      }),
                      (o.prototype.getPlaybackState = function () {
                        return {
                          playbackPosition:
                            this._queuedTime - this._timeAwaitingPlayback(),
                          samplesQueued: this._samplesQueued(),
                          dropped: this._dropped,
                          delayed: this._delayedTime,
                        };
                      }),
                      (o.prototype.waitUntilReady = function (e) {
                        e();
                      }),
                      (o.prototype.appendBuffer = function (e) {
                        this._bufferQueue.appendBuffer(e);
                      }),
                      (o.prototype.start = function () {
                        (this._node.onaudioprocess =
                          this._audioProcess.bind(this)),
                          this._node.connect(this.output),
                          (this._playbackTimeAtBufferTail =
                            this._context.currentTime);
                      }),
                      (o.prototype.stop = function () {
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
                      (o.prototype.flush = function () {
                        this._bufferQueue.flush();
                      }),
                      (o.prototype.close = function () {
                        this.stop(), (this._context = null);
                      }),
                      (o.prototype.onstarved = null),
                      (o.prototype.onbufferlow = null),
                      (o.isSupported = function () {
                        return !!r;
                      }),
                      (o.sharedAudioContext = null),
                      (o.initSharedAudioContext = function () {
                        if (!o.sharedAudioContext && o.isSupported()) {
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
                            (o.sharedAudioContext = t);
                        }
                        return o.sharedAudioContext;
                      }),
                      (e.exports = o);
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
                                    o =
                                      (e.numChannels,
                                      Math.pow(2, 50 / 1200) - 1),
                                    s = 1 << n,
                                    u = i(n),
                                    c = 1 << (n - 2);
                                  c -= c % 100;
                                  for (
                                    var l = r.float_array(s + c + 5),
                                      d = r.float_array(s + c + 5),
                                      f = c,
                                      h = c,
                                      p = r.float_array(s),
                                      m = 0;
                                    m < s;
                                    m++
                                  )
                                    p[m] =
                                      0.5 *
                                      (1 - Math.cos((2 * Math.PI * m) / s));
                                  var g = 1 + (s >> 1),
                                    _ = r.float_array(g),
                                    y = r.float_array(g),
                                    v = r.float_array(g),
                                    b = r.float_array(g),
                                    w = r.float_array(g),
                                    T = r.float_array(g),
                                    E = 1 + (g >> 1),
                                    x = [0, 0],
                                    V = [],
                                    k = [],
                                    A = [],
                                    S = [];
                                  for (m = 0; m < 2; m++)
                                    V.push(r.float_array(E)),
                                      k.push(r.float_array(E)),
                                      A.push(r.float_array(E)),
                                      S.push(r.float_array(g));
                                  var O = r.float_array(E),
                                    R = r.float_array(E),
                                    P = 0,
                                    C = 0,
                                    L = [{ in_time: 0, out_time: 0, tempo: a }],
                                    I = 0,
                                    D = 0,
                                    M = 1,
                                    U = 0,
                                    j = 0,
                                    F = 0,
                                    N = 0,
                                    B = {
                                      mapOutputToInputTime: function (e) {
                                        for (
                                          var t = L.length - 1;
                                          e < L[t].out_time && t > 0;

                                        )
                                          t--;
                                        var n = L[t];
                                        return (
                                          n.in_time + n.tempo * (e - n.out_time)
                                        );
                                      },
                                      flush: function (e) {
                                        (U = 0),
                                          (x = [0, 0]),
                                          (D = 0),
                                          (N = 0),
                                          (F = 0);
                                        for (var t = 0; t < 2; t++)
                                          for (var n = 0; n < g; n++)
                                            S[t][n] = 0;
                                        for (t = 0; t < l.length; t++) l[t] = 0;
                                        for (t = 0; t < d.length; t++) d[t] = 0;
                                        if (e) {
                                          (C = Math.max(0, C - e)),
                                            (P = B.mapOutputToInputTime(C));
                                          for (
                                            var r = L.length - 1;
                                            C <= L[r].out_time && r >= 0;

                                          )
                                            L.pop(), r--;
                                          L.push({
                                            in_time: P,
                                            out_time: C,
                                            tempo: a,
                                          });
                                        }
                                      },
                                      getTempo: function () {
                                        return a;
                                      },
                                      setTempo: function (e) {
                                        (f = h = c),
                                          e >= 1
                                            ? (h = Math.round(f / e))
                                            : (f = Math.round(h * e)),
                                          (j = (1 / e - h / f) * f),
                                          (M = (function (e, t) {
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
                                        var t = L[L.length - 1];
                                        t.out_time == C
                                          ? (t.tempo = e)
                                          : L.push({
                                              in_time: P,
                                              out_time: C,
                                              tempo: e,
                                            });
                                      },
                                    };
                                  B.flush(0), B.setTempo(a);
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
                                        o =
                                          ((2 * Math.PI) / s) *
                                          0.5 *
                                          (r + t) *
                                          f;
                                      return (
                                        ((a = e - n - o) -
                                          2 *
                                            Math.PI *
                                            Math.round(a / (2 * Math.PI)) +
                                          o) *
                                        i
                                      );
                                    },
                                    W = function (e, t, n, r, i, a) {
                                      for (
                                        var u = e % 2,
                                          c = 1 - u,
                                          l = S[c],
                                          d = x[c],
                                          f = V[c],
                                          h = k[c],
                                          p = A[c],
                                          m = S[u],
                                          g = 1;
                                        g < m.length;
                                        g++
                                      )
                                        m[g] = t[g] * t[g] + n[g] * n[g];
                                      var _ = V[u],
                                        y = (x[u] = (function (e, t) {
                                          for (
                                            var n = 0, r = 0;
                                            r < e.length;
                                            r++
                                          )
                                            e[r] > n && (n = e[r]);
                                          var i = 1e-8 * n,
                                            a = 1,
                                            s = 1;
                                          for (
                                            t[0] = 1, r = 2;
                                            r < e.length;
                                            r++
                                          ) {
                                            var u = r * o;
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
                                                ? ((t[a++] = c), (s = r))
                                                : e[r] > e[s] &&
                                                  ((t[a - 1] = c), (s = r));
                                            }
                                          }
                                          return a;
                                        })(m, _)),
                                        v = k[u],
                                        b = A[u];
                                      if (0 != e && 0 != y) {
                                        var w = 0;
                                        for (F = 0; F < y; F++) {
                                          for (
                                            N = _[F];
                                            _[F] > f[w] && w != d;

                                          )
                                            ++w;
                                          var T = w;
                                          w > 0 &&
                                            N - f[w - 1] < f[w] - N &&
                                            (T = w - 1);
                                          var E = N * o;
                                          if (
                                            Math.abs(f[T] - N) < E &&
                                            l[Math.round(f[T])] >
                                              0.1 * m[Math.round(N)]
                                          ) {
                                            var P = G(t, n, N),
                                              C =
                                                h[T] +
                                                p[T] +
                                                H(P, N, h[T], f[T], a) -
                                                P;
                                            (v[F] = P),
                                              (b[F] = C),
                                              (O[F] = Math.cos(C)),
                                              (R[F] = Math.sin(C));
                                          } else
                                            (v[F] = G(t, n, N)),
                                              (b[F] = 0),
                                              (O[F] = 1),
                                              (R[F] = 0);
                                        }
                                        _[y] = 2 * s;
                                        var L = _[(T = 0)],
                                          I = _[T + 1],
                                          D = O[T],
                                          M = R[T];
                                        for (g = 1; g < t.length - 1; g++) {
                                          g >= L &&
                                            g - L > I - g &&
                                            ((L = _[++T]),
                                            (I = _[T + 1]),
                                            (D = O[T]),
                                            (M = R[T]));
                                          var U = t[g] * D - n[g] * M,
                                            j = t[g] * M + n[g] * D;
                                          (t[g] = U), (n[g] = j);
                                        }
                                      } else
                                        for (var F = 0; F < y; F++) {
                                          var N = _[F];
                                          h[F] = p[F] = G(t, n, N);
                                        }
                                    },
                                    z = function () {
                                      var e = 0 | (U += 2 * j);
                                      U -= e;
                                      for (var t = 0; t < s; t++)
                                        (u.m_re[t] = p[t] * l[t]),
                                          (u.m_im[t] = p[t] * l[f + t]);
                                      r.blit(l, 2 * f, l, 0, s - f),
                                        u.inplace(!1),
                                        u.unpack(_, y, v, b),
                                        W(I, _, y, 0, 0, h / f),
                                        W(I + 1, v, b, 0, 0, (h + e) / f),
                                        r.blit(v, 0, w, 0, g),
                                        r.blit(b, 0, T, 0, g),
                                        u.repack(_, y, v, b),
                                        u.inplace(!0);
                                      var n = d.length;
                                      for (
                                        r.blit(d, D, d, 0, n - D), t = n - D;
                                        t < n;
                                        t++
                                      )
                                        d[t] = 0;
                                      var i = 0,
                                        a = M;
                                      for (t = 0; t < h; t++)
                                        Math.abs(2 * u.m_re[t]) > i &&
                                          (i = Math.abs(2 * u.m_re[t]));
                                      for (t = 0; t < s - h; t++)
                                        Math.abs(
                                          u.m_re[t + h + e] + u.m_im[t],
                                        ) > i &&
                                          (i = Math.abs(
                                            u.m_re[t + h + e] + u.m_im[t],
                                          ));
                                      for (t = s - h; t < s; t++)
                                        Math.abs(2 * u.m_im[t]) > i &&
                                          (i = Math.abs(2 * u.m_im[t]));
                                      var o = 1 / Math.floor(s / (2 * h));
                                      for (
                                        a * i > o && (a = o / i), t = 0;
                                        t < s;
                                        t++
                                      )
                                        (d[t] += a * u.m_re[t]),
                                          (d[t + h + e] += a * u.m_im[t]);
                                      return (I += 2), (D = 2 * h + e);
                                    };
                                  return (
                                    (B.process = function (e) {
                                      var n = e[0].length,
                                        i = e[0];
                                      if (e.length > 1) {
                                        i = r.float_array(e[0].length);
                                        for (
                                          var o = 1 / e.length, u = 0;
                                          u < e.length;
                                          u++
                                        )
                                          for (var c = 0; c < n; c++)
                                            i[c] += o * e[u][c];
                                      }
                                      if (1 == a) {
                                        if (N + F > 0) {
                                          var p = N + F + n,
                                            m = [];
                                          for (u = 0; u < e.length; u++) {
                                            var g = r.float_array(p);
                                            r.blit(d, 0, g, 0, N),
                                              r.blit(l, 0, g, N, F),
                                              r.blit(e[u], 0, g, N + F, n),
                                              m.push(g);
                                          }
                                          B.flush(0), (n = p), (e = m);
                                        }
                                        return (P += n / t), (C += n / t), e;
                                      }
                                      var _ =
                                          2 *
                                          Math.floor(
                                            Math.max(0, F + n - (s - f)) /
                                              (2 * f),
                                          ),
                                        y = N + h * _ + Math.floor(U + j * _);
                                      N > y && (y = N);
                                      var v = r.float_array(y);
                                      r.blit(d, 0, v, 0, N);
                                      for (var b = 0, w = N, T = 0, E = 0; ; ) {
                                        var x = s + f - F;
                                        if (b + x > n) {
                                          r.blit(i, b, l, F, n - b),
                                            (F += n - b),
                                            (b = n);
                                          break;
                                        }
                                        x <= 0
                                          ? (F -= 2 * f)
                                          : (r.blit(i, b, l, F, x),
                                            (b += x),
                                            (F = s - f)),
                                          (E = z()),
                                          (P += (2 * f) / t),
                                          (C += E / t),
                                          (T = w + E - y) < 0 && (T = 0),
                                          r.blit(d, 0, v, w, E - T),
                                          (w += E);
                                      }
                                      r.blit(d, E - T, d, 0, T), (N = T);
                                      var V = [];
                                      for (u = 0; u < e.length; u++) V.push(v);
                                      return V;
                                    }),
                                    B
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
                                  for (var a = i, o = 0, s = 0; s < e; s++)
                                    (o <<= 1), (o |= 1 & a), (a >>= 1);
                                  n.m_revTgt[i] = o;
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
                                    o = i >> 1,
                                    s = i >> 1,
                                    u = i;
                                  if (e)
                                    for (var c = 1 / i, l = 0; l < i; l++)
                                      (t[l] *= c), (r[l] *= c);
                                  for (var d = 0; d < a; d++) {
                                    var f = n.twiddleRe[d],
                                      h = n.twiddleIm[d];
                                    e || (h *= -1);
                                    for (var p = 0; p < i; ) {
                                      for (
                                        var m = p,
                                          g = p + s,
                                          _ = 1,
                                          y = 0,
                                          v = 0;
                                        v < o;
                                        v++
                                      ) {
                                        var b = t[m],
                                          w = r[m],
                                          T = t[g],
                                          E = r[g];
                                        (t[m] = b + T),
                                          (r[m] = w + E),
                                          (T = b - T),
                                          (E = w - E),
                                          (t[g] = T * _ - E * y),
                                          (r[g] = T * y + E * _),
                                          m++,
                                          g++;
                                        var x = _;
                                        (_ = _ * f - y * h),
                                          (y = x * h + y * f);
                                      }
                                      p += u;
                                    }
                                    (o >>= 1), (s >>= 1), (u >>= 1);
                                  }
                                  for (
                                    var V, k, A = n.m_revTgt, S = 0;
                                    S < i;
                                    S++
                                  )
                                    A[S] > S &&
                                      ((k = t[(V = A[S])]),
                                      (t[V] = t[S]),
                                      (t[S] = k),
                                      (k = r[V]),
                                      (r[V] = r[S]),
                                      (r[S] = k));
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
                                    for (var o = 1; o < d; o++)
                                      (e[o] = (n.m_re[o] + n.m_re[t - o]) / 2),
                                        (r[o] =
                                          (n.m_im[o] - n.m_im[t - o]) / 2),
                                        (i[o] =
                                          (n.m_im[o] + n.m_im[t - o]) / 2),
                                        (a[o] =
                                          (-n.m_re[o] + n.m_re[t - o]) / 2);
                                  }),
                                  (n.repack = function (e, r, i, a) {
                                    (n.m_re[0] = e[0]),
                                      (n.m_im[0] = i[0]),
                                      (n.m_re[d] = e[d]),
                                      (n.m_im[d] = i[d]);
                                    for (var o = 1; o < d; o++)
                                      (n.m_re[o] = e[o] - a[o]),
                                        (n.m_im[o] = r[o] + i[o]),
                                        (n.m_re[t - o] = e[o] + a[o]),
                                        (n.m_im[t - o] = -r[o] + i[o]);
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
                o = r(n(205)),
                s = r(n(585)),
                u = r(n(754));
              t.default = (function (e) {
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
                        n = (0, u.default)(r);
                      return (
                        (e = t
                          ? Reflect.construct(
                              n,
                              arguments,
                              (0, u.default)(this).constructor,
                            )
                          : n.apply(this, arguments)),
                        (0, s.default)(this, e)
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
                o = r(n(205)),
                s = r(n(585)),
                u = r(n(754));
              t.default = (function (e) {
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
                        n = (0, u.default)(r);
                      return (
                        (e = t
                          ? Reflect.construct(
                              n,
                              arguments,
                              (0, u.default)(this).constructor,
                            )
                          : n.apply(this, arguments)),
                        (0, s.default)(this, e)
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
                o = r(n(539)),
                s = "1.8.9-20220406232920-cb5f7ff",
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
                        return o.default.wasmSupported();
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
                            t + e + "?version=" + encodeURIComponent(s)
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
                          o = function (t) {
                            return (
                              ((t = t || {}).locateFile = function (e) {
                                return "data:" === e.slice(0, 5)
                                  ? e
                                  : r.urlForScript(e);
                              }),
                              (t.mainScriptUrlOrBlob =
                                r.scriptForClass(e) +
                                "?version=" +
                                encodeURIComponent(s)),
                              i[e](t)
                            );
                          };
                        "function" == typeof i[e]
                          ? t(o)
                          : this.loadScript(a, function () {
                              t(o);
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
                o = r(n(525)),
                s = r(n(205)),
                u = r(n(585)),
                c = r(n(754)),
                l = r(n(408)),
                d = r(n(319)),
                f = r(n(445)),
                h = {
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
                m = new ((function (e) {
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
                            : (0, o.default)(
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
                          var n = h[p[e]];
                          if (!n)
                            throw Error(
                              "Requested worker for class with no proxy: " + e,
                            );
                          var r,
                            i = n.proxy,
                            a = n.worker,
                            o = this.urlForScript(this.scriptForClass(e)),
                            s = this.urlForScript(a),
                            u = function (t) {
                              return new i(r, e, t);
                            };
                          if (s.match(/^https?:|\/\//i)) {
                            var c,
                              l,
                              d,
                              f,
                              g,
                              _ = function () {
                                if (1 == y && 1 == v) {
                                  var e =
                                    d +
                                    " " +
                                    f +
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
                                  (r = new Worker(URL.createObjectURL(g))),
                                    t(function (e) {
                                      return Promise.resolve(new u(e));
                                    });
                                }
                              },
                              y = !1,
                              v = !1;
                            (c = new XMLHttpRequest()).open("GET", o, !0),
                              (c.onreadystatechange = function () {
                                4 == c.readyState &&
                                  200 == c.status &&
                                  ((d = c.responseText), (y = !0), _());
                              }),
                              c.send(),
                              (l = new XMLHttpRequest()).open("GET", s, !0),
                              (l.onreadystatechange = function () {
                                4 == l.readyState &&
                                  200 == l.status &&
                                  ((f = l.responseText), (v = !0), _());
                              }),
                              l.send();
                          } else
                            (r = new Worker(s)),
                              t(function (e) {
                                return Promise.resolve(new u(e));
                              });
                        },
                      },
                    ]),
                    r
                  );
                })(f.default))();
              t.default = m;
            },
            759: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(913)),
                a = r(n(575)),
                o = r(n(309)),
                s = {
                  MEDIA_ERR_ABORTED: 1,
                  MEDIA_ERR_NETWORK: 2,
                  MEDIA_ERR_DECODE: 3,
                  MEDIA_ERR_SRC_NOT_SUPPORTED: 4,
                },
                u = (0, i.default)(function e(t, n) {
                  (0, a.default)(this, e), (this.code = t), (this.message = n);
                });
              (0, o.default)(u, s),
                (0, o.default)(u.prototype, s),
                (t.default = u);
            },
            278: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(913)),
                a = r(n(575));
              function o(e, t, n) {
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
                var n = o(t, ";");
                if (n.length) {
                  var r = n.shift();
                  if (r) {
                    var i = o(r, "/", 2);
                    (this.major = i[0]), (this.minor = i[1]);
                  }
                  for (var s in n) {
                    var u = n[s].match(/^codecs\s*=\s*"(.*?)"$/);
                    if (u) {
                      this.codecs = o(u[1], ",");
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
                o = r(n(913)),
                s = r(n(506)),
                u = r(n(205)),
                c = r(n(585)),
                l = r(n(754)),
                d = r(n(8)),
                f = r(n(731)),
                h = r(n(936)),
                p = r(n(848)),
                m = r(n(964)),
                g = r(n(893)),
                _ = r(n(309)),
                y = r(n(759)),
                v = r(n(278)),
                b = r(n(168)),
                w = r(n(625)),
                T = r(n(302)),
                E = (function () {
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
                V = "INITIAL",
                k = "SEEKING_END",
                A = "LOADED",
                S = "PRELOAD",
                O = "READY",
                R = "PLAYING",
                P = "SEEKING",
                C = "ERROR",
                L = "NOT_SEEKING",
                I = "BISECT_TO_TARGET",
                D = "BISECT_TO_KEYPOINT",
                M = "LINEAR_TO_TARGET",
                U = "fast";
              function j() {
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
                (j.prototype = Object.create(HTMLElement.prototype, {}));
              var F = (function (e) {
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
                    ((e = e || {}).base = e.base || m.default.base),
                    (t._options = e),
                    (t._instanceId = "ogvjs" + ++r.instanceCount),
                    void 0 !== e.worker
                      ? (t._enableWorker = !!e.worker)
                      : (t._enableWorker = !!window.Worker),
                    !m.default.wasmSupported())
                  )
                    throw Error("WebAssembly not supported");
                  return (
                    (t._enableThreading = !!e.threading),
                    (t._enableSIMD = !!e.simd),
                    (t._state = V),
                    (t._seekState = L),
                    (t._detectedType = null),
                    (t._canvas = document.createElement("canvas")),
                    (t._frameSink = null),
                    (t.className = t._instanceId),
                    (0, _.default)((0, s.default)(t), x),
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
                    Object.defineProperties((0, s.default)(t), {
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
                            new b.default(e)
                          );
                        },
                      },
                      seekable: {
                        get: function () {
                          return new b.default(
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
                          return this._state == P
                            ? this._seekTargetTime
                            : this._codec
                              ? this._state != R || this._paused
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
                          return this._state == P;
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
                          return this._state === C
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
                          return new b.default([[0, this.currentTime]]);
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
                  (0, o.default)(
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
                            E(function () {
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
                            (this._state = V),
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
                            E(function () {
                              e.stop();
                            });
                          var n = i(),
                            r = n - this._lastFrameTimestamp,
                            a =
                              this._actualPerFrameTime -
                              this._targetPerFrameTime;
                          (this._totalJitter += Math.abs(a)),
                            (this._playTime += r);
                          var o = {
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
                          function s(e) {
                            return Math.round(10 * e) / 10;
                          }
                          this._codec &&
                            ((o.demuxerTime =
                              this._codec.demuxerCpuTime -
                              this._lastFrameDemuxerCpuTime),
                            (o.videoTime +=
                              this._currentVideoCpuTime -
                              this._lastFrameVideoCpuTime),
                            (o.audioTime +=
                              this._codec.audioCpuTime -
                              this._lastFrameAudioCpuTime)),
                            (o.cpuTime += o.demuxerTime),
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
                                s(r) +
                                " (jitter " +
                                s(a) +
                                ") cpu: " +
                                s(o.cpuTime) +
                                " (mux: " +
                                s(o.demuxerTime) +
                                " buf: " +
                                s(o.bufferTime) +
                                " draw: " +
                                s(o.drawingTime) +
                                " proxy: " +
                                s(o.proxyTime) +
                                ") vid: " +
                                s(o.videoTime) +
                                " aud: " +
                                s(o.audioTime),
                            ),
                            this._fireEventAsync("framecallback", o),
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
                              (this._state = C),
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
                              (n._state = P),
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
                            (this._state = P),
                            (this._seekTargetTime = e),
                            (this._lastSeekPosition = -1),
                            (this._decodedFrames = []),
                            (this._pendingFrames = []),
                            (this._pendingFrame = 0),
                            (this._pendingAudio = 0),
                            (this._didSeek = !1),
                            this._codec.seekToKeypoint(e, function (n) {
                              n
                                ? ((t._seekState = M),
                                  t._fireEventAsync("seeking"),
                                  t._didSeek || t._pingProcessing())
                                : t._codec.getKeypointOffset(e, function (e) {
                                    e > 0
                                      ? ((t._seekState = M), t._seekStream(e))
                                      : ((t._seekState = I),
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
                            (this._seekBisector = new g.default({
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
                          (this._seekState = L),
                            (this._state = O),
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
                                  (this._seekState = M),
                                  this._pingProcessing())
                                : this._seekState == I &&
                                    this._codec.hasVideo &&
                                    this._codec.keyframeTimestamp <
                                      this._codec.frameTimestamp
                                  ? (this._log("finding the keypoint now"),
                                    (this._seekState = D),
                                    this._startBisection(
                                      this._codec.keyframeTimestamp,
                                    ))
                                  : (this._log("straight seeking now"),
                                    (this._seekState = M),
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
                          else if (this._state == V) this._doProcessInitial();
                          else if (this._state == k)
                            this._doProcessSeekingEnd();
                          else if (this._state == A) this._doProcessLoaded();
                          else if (this._state == S) this._doProcessPreload();
                          else if (this._state == O) this._doProcessReady();
                          else if (this._state == P) this._doProcessSeeking();
                          else if (this._state == R) this._doProcessPlay();
                          else {
                            if (this._state != C)
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
                          (this._state = S),
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
                            : ((this._state = O),
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
                                (e._state = R),
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
                          if (this._seekState == L)
                            throw Error(
                              "seeking in invalid state (not seeking?)",
                            );
                          if (this._seekState == I)
                            this._doProcessBisectionSeek();
                          else if (this._seekState == D)
                            this._doProcessBisectionSeek();
                          else {
                            if (this._seekState != M)
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
                              o = 0,
                              s = !1,
                              u = 0;
                            if (
                              (t.hasAudio && this._audioFeeder
                                ? ((a = this._audioFeeder.getPlaybackState()),
                                  (o = this._getPlaybackTime(a)),
                                  (s =
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
                                    this._startPlayback(o),
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
                                : ((o = this._getPlaybackTime()),
                                  (n =
                                    this._codec.audioReady &&
                                    this._audioEndTimestamp < o)),
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
                                      o)),
                                  (this._actualPerFrameTime =
                                    this._targetPerFrameTime - u));
                              var c = this._targetPerFrameTime;
                              if (this._prebufferingAudio)
                                i &&
                                  this._log(
                                    "decoding a frame during prebuffering",
                                  ),
                                  (r = !1);
                              else if (r && this._dataEnded && s)
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
                                    o && (l = d - 1);
                                if (l >= 0)
                                  for (; l-- >= 0; ) {
                                    this._lateFrames++;
                                    var f = this._decodedFrames.shift();
                                    this._log(
                                      "skipping already-decoded late frame at " +
                                        f.frameEndTimestamp,
                                    ),
                                      (u = 1e3 * (f.frameEndTimestamp - o)),
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
                                  o >= p
                                ) {
                                  this._log(
                                    "skipping late frame at " +
                                      this._decodedFrames[0].frameEndTimestamp +
                                      " vs " +
                                      o +
                                      ", expect to see keyframe at " +
                                      h,
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
                                      (u = 1e3 * (g.frameEndTimestamp - o)),
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
                                    var y = this._pendingFrames[_];
                                    this._lateFrames++,
                                      this._framesProcessed++,
                                      (this._frameEndTimestamp =
                                        y.frameEndTimestamp),
                                      (u = 1e3 * (y.frameEndTimestamp - o)),
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
                                    var v = {
                                      frameEndTimestamp:
                                        this._codec.frameTimestamp,
                                      dropped: !0,
                                    };
                                    (u = 1e3 * (v.frameEndTimestamp - o)),
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
                              var b = (this._frameEndTimestamp =
                                this._codec.frameTimestamp);
                              this._pendingFrame++,
                                this._pendingFrames.push({
                                  frameEndTimestamp: b,
                                });
                              var w = this._pendingFrames,
                                T = !1,
                                E = this._time(function () {
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
                                              frameEndTimestamp: b,
                                            })
                                          : e._log(
                                              "Bad video packet or something",
                                            ),
                                        e._codec.process(function () {
                                          e._isProcessing() ||
                                            e._pingProcessing(T ? void 0 : 0);
                                        }))
                                      : e._log(
                                          "play loop callback after flush, discarding",
                                        );
                                  });
                                });
                              this._pendingFrame &&
                                ((T = !0),
                                (this._proxyTime += E),
                                this._pingProcessing(),
                                this._dataEnded && this._codec.sync());
                            } else if (n) {
                              this._log(
                                "play loop: ready for audio; depth: " +
                                  this._pendingAudio,
                              ),
                                this._pendingAudio++;
                              var x = this._codec.audioTimestamp,
                                V = this._time(function () {
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
                                ((this._proxyTime += V),
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
                              var S = u;
                              this._log(
                                "play loop: setting a timer for drawing " + S,
                              ),
                                (this._nextFrameTimer = setTimeout(function () {
                                  (e._nextFrameTimer = null),
                                    e._pingProcessing();
                                }, S));
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
                              this._state == P ||
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
                                    (this._state = O),
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
                          (e.src = T.default),
                            e.play(),
                            p.default.initSharedAudioContext();
                        },
                      },
                    ],
                  ),
                  r
                );
              })(j);
              (0, _.default)(F, x),
                (F.instanceCount = 0),
                (F.styleManager = new (function () {
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
                (t.default = F);
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
                  var o = this;
                  for (var s in ((0, i.default)(this, t),
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
                    e.hasOwnProperty(s) && (this[s] = e[s]);
                  (this.processingQueue = 0),
                    Object.defineProperty(this, "processing", {
                      get: function () {
                        return this.processingQueue > 0;
                      },
                    }),
                    (this.messageCount = 0),
                    (this.pendingCallbacks = {}),
                    this.worker.addEventListener("message", function (e) {
                      o.handleMessage(e);
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
                o = r(n(964));
              function s(e, t) {
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
                          o.default.loadClass(t, function (t) {
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
                                  o = (function (e) {
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
                                              return s(e, void 0);
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
                                              return s(e, void 0);
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
                                      o = !1;
                                    return {
                                      s: function () {
                                        t = t.call(e);
                                      },
                                      n: function () {
                                        var e = t.next();
                                        return (a = e.done), e;
                                      },
                                      e: function (e) {
                                        (o = !0), (i = e);
                                      },
                                      f: function () {
                                        try {
                                          a || null == t.return || t.return();
                                        } finally {
                                          if (o) throw i;
                                        }
                                      },
                                    };
                                  })(t.audioDecoder.audioBuffer);
                                try {
                                  for (o.s(); !(i = o.n()).done; ) {
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
                                  o.e(e);
                                } finally {
                                  o.f();
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
                            o.default.loadClass(
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
                            o.default.loadClass(
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
                o = r(n(913));
              t.default = new ((function () {
                function e() {
                  (0, a.default)(this, e),
                    (this.tested = !1),
                    (this.testResult = void 0);
                }
                return (
                  (0, o.default)(e, [
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
                  var o = i.get;
                  return void 0 !== o ? o.call(r) : void 0;
                },
                a = n(828),
                o = "arraybuffer",
                s = (function (e) {
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
                            (this.xhr.responseType = o);
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
              (s.supported = function () {
                try {
                  var e = new XMLHttpRequest();
                  return (e.responseType = o), e.responseType === o;
                } catch (e) {
                  return !1;
                }
              }),
                (e.exports = s);
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
                  var o = (function (e, t) {
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
                    (o.url = n),
                    (o.offset = r),
                    (o.length = i),
                    (o.cachever = void 0 === a ? 0 : a),
                    (o.loaded = !1),
                    (o.seekable = !1),
                    (o.headers = {}),
                    (o.eof = !1),
                    (o.bytesRead = 0),
                    (o.xhr = new XMLHttpRequest()),
                    o
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
                                    o,
                                    s,
                                    u = (s = i(e.xhr)) ? parseInt(s[1], 10) : 0;
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
                                    (o = {}),
                                    a
                                      .getAllResponseHeaders()
                                      .split(/\r?\n/)
                                      .forEach(function (e) {
                                        var t = e.split(/:\s*/, 2);
                                        t.length > 1 &&
                                          (o[t[0].toLowerCase()] = t[1]);
                                      }),
                                    (e.headers = o),
                                    e.onXHRStart())
                                  : (r(),
                                    n(Error("HTTP error " + e.xhr.status)));
                              }
                            },
                            o = function () {
                              r(), n(Error("network error"));
                            },
                            s = function () {
                              r(), t();
                            };
                          (r = function () {
                            e.xhr.removeEventListener("readystatechange", a),
                              e.xhr.removeEventListener("error", o),
                              e.off("open", s),
                              (e._onAbort = null);
                          }),
                            e.initXHR(),
                            e.xhr.addEventListener("readystatechange", a),
                            e.xhr.addEventListener("error", o),
                            e.on("open", s),
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
                  var o = i.get;
                  return void 0 !== o ? o.call(r) : void 0;
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
                  var o = i.get;
                  return void 0 !== o ? o.call(r) : void 0;
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
                              o = function () {
                                i(), n();
                              },
                              s = function () {
                                i(), r(Error("error streaming"));
                              };
                            (i = function () {
                              (t.buffering = !1),
                                t.off("buffer", a),
                                t.off("done", o),
                                t.off("error", s),
                                (t._onAbort = null);
                            }),
                              (t.buffering = !0),
                              t.on("buffer", a),
                              t.on("done", o),
                              t.on("error", s);
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
                o = null;
              e.exports = function (e) {
                if (!1 === e.progressive) return new a(e);
                if (
                  (o || (o = r.supported() ? r : i.supported() ? i : null), !o)
                )
                  throw Error("No supported backend class");
                return new o(e);
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
                  var o = i.get;
                  return void 0 !== o ? o.call(r) : void 0;
                },
                a = n(828),
                o = "moz-chunked-arraybuffer",
                s = (function (e) {
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
                            (this.xhr.responseType = o);
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
              (s.supported = function () {
                try {
                  var e = new XMLHttpRequest();
                  return (e.responseType = o), e.responseType === o;
                } catch (e) {
                  return !1;
                }
              }),
                (e.exports = s);
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
                    o = t.start,
                    s = void 0 === o ? 0 : o,
                    u = t.end,
                    c =
                      void 0 === u
                        ? s + (r ? r.byteLength : a ? a.length : 0)
                        : u,
                    l = t.prev,
                    d = t.next,
                    f = t.eof,
                    h = t.empty,
                    p = void 0 === h ? !(r || a) : h,
                    m = t.timestamp,
                    g = void 0 === m ? Date.now() : m;
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.start = s),
                    (this.end = c),
                    (this.prev = void 0 === l ? null : l),
                    (this.next = void 0 === d ? null : d),
                    (this.eof = void 0 !== f && f),
                    (this.empty = p),
                    (this.timestamp = g),
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
                          for (var o = this.string, s = 0; s < i; s++)
                            e[s] = o.charCodeAt(r + s);
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
                            o = this.readCursor;
                          o && !o.empty && !(o.start >= i);
                          o = o.next
                        ) {
                          var s = Math.min(i, o.end),
                            u = e.subarray(a - r, s - r);
                          o.readBytes(u, a, s), (a = s);
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
                          o = t.next;
                        (e.prev = null),
                          (t.next = null),
                          a && ((a.next = n), (n.prev = a)),
                          o && ((o.prev = r), (r.next = o)),
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
                    o = t.progressive;
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
                    (this.progressive = void 0 === o || o),
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
                              o = r.bytesReadable(i),
                              s = r.readOffset + o;
                            if (
                              (r.seekWrite(s), e.length >= 0 && s >= e.length)
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
                                f = function (t) {
                                  c !== e._backend
                                    ? n(Error("invalid state"))
                                    : ((e._backend = null), n(t));
                                };
                              (l = function () {
                                c.off("open", d), c.off("error", f);
                              }),
                                c.on("open", d),
                                c.on("error", f),
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
                            o = t.bytesAvailable(a);
                          o >= a
                            ? n(o)
                            : ((t.buffering = !0),
                              t
                                ._openBackend()
                                .then(function (n) {
                                  return n
                                    ? n.bufferToOffset(i).then(function () {
                                        return (t.buffering = !1), t.buffer(e);
                                      })
                                    : Promise.resolve(o);
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
                    (this.drawFrame = function (o) {
                      var s,
                        u,
                        c = o.format;
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
                                o = 0;
                              o < a;
                              o += 4
                            )
                              i[o + 3] = 255;
                          })(c.width, c.height),
                        r.convertYCbCr(o, n.data);
                      var l,
                        d =
                          c.cropWidth != c.displayWidth ||
                          c.cropHeight != c.displayHeight;
                      d
                        ? (i ||
                            ((s = c.cropWidth),
                            (u = c.cropHeight),
                            ((i = document.createElement("canvas")).width = s),
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
                    o = i.contextForCanvas(e);
                  if (null === o) throw Error("WebGL unavailable");
                  function s(e, t) {
                    var n = o.createShader(e);
                    if (
                      (o.shaderSource(n, t),
                      o.compileShader(n),
                      !o.getShaderParameter(n, o.COMPILE_STATUS))
                    ) {
                      var r = o.getShaderInfoLog(n);
                      throw (
                        (o.deleteShader(n),
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
                    f,
                    h,
                    p,
                    m,
                    g,
                    _,
                    y = new Float32Array([
                      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
                    ]),
                    v = {},
                    b = {},
                    w = {};
                  function T(e, t) {
                    return (v[e] && !t) || (v[e] = o.createTexture()), v[e];
                  }
                  function E(e, t, n, r, a) {
                    var s = !v[e] || t,
                      u = T(e, t);
                    if ((o.activeTexture(o.TEXTURE0), i.stripe)) {
                      var c = !v[e + "_temp"] || t,
                        l = T(e + "_temp", t);
                      o.bindTexture(o.TEXTURE_2D, l),
                        c
                          ? (o.texParameteri(
                              o.TEXTURE_2D,
                              o.TEXTURE_WRAP_S,
                              o.CLAMP_TO_EDGE,
                            ),
                            o.texParameteri(
                              o.TEXTURE_2D,
                              o.TEXTURE_WRAP_T,
                              o.CLAMP_TO_EDGE,
                            ),
                            o.texParameteri(
                              o.TEXTURE_2D,
                              o.TEXTURE_MIN_FILTER,
                              o.NEAREST,
                            ),
                            o.texParameteri(
                              o.TEXTURE_2D,
                              o.TEXTURE_MAG_FILTER,
                              o.NEAREST,
                            ),
                            o.texImage2D(
                              o.TEXTURE_2D,
                              0,
                              o.RGBA,
                              n / 4,
                              r,
                              0,
                              o.RGBA,
                              o.UNSIGNED_BYTE,
                              a,
                            ))
                          : o.texSubImage2D(
                              o.TEXTURE_2D,
                              0,
                              0,
                              0,
                              n / 4,
                              r,
                              o.RGBA,
                              o.UNSIGNED_BYTE,
                              a,
                            );
                      var d = v[e + "_stripe"],
                        f = !d || t;
                      f && (d = T(e + "_stripe", t)),
                        o.bindTexture(o.TEXTURE_2D, d),
                        f &&
                          (o.texParameteri(
                            o.TEXTURE_2D,
                            o.TEXTURE_WRAP_S,
                            o.CLAMP_TO_EDGE,
                          ),
                          o.texParameteri(
                            o.TEXTURE_2D,
                            o.TEXTURE_WRAP_T,
                            o.CLAMP_TO_EDGE,
                          ),
                          o.texParameteri(
                            o.TEXTURE_2D,
                            o.TEXTURE_MIN_FILTER,
                            o.NEAREST,
                          ),
                          o.texParameteri(
                            o.TEXTURE_2D,
                            o.TEXTURE_MAG_FILTER,
                            o.NEAREST,
                          ),
                          o.texImage2D(
                            o.TEXTURE_2D,
                            0,
                            o.RGBA,
                            n,
                            1,
                            0,
                            o.RGBA,
                            o.UNSIGNED_BYTE,
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
                      o.bindTexture(o.TEXTURE_2D, u),
                        s
                          ? (o.texParameteri(
                              o.TEXTURE_2D,
                              o.TEXTURE_WRAP_S,
                              o.CLAMP_TO_EDGE,
                            ),
                            o.texParameteri(
                              o.TEXTURE_2D,
                              o.TEXTURE_WRAP_T,
                              o.CLAMP_TO_EDGE,
                            ),
                            o.texParameteri(
                              o.TEXTURE_2D,
                              o.TEXTURE_MIN_FILTER,
                              o.LINEAR,
                            ),
                            o.texParameteri(
                              o.TEXTURE_2D,
                              o.TEXTURE_MAG_FILTER,
                              o.LINEAR,
                            ),
                            o.texImage2D(
                              o.TEXTURE_2D,
                              0,
                              o.ALPHA,
                              n,
                              r,
                              0,
                              o.ALPHA,
                              o.UNSIGNED_BYTE,
                              a,
                            ))
                          : o.texSubImage2D(
                              o.TEXTURE_2D,
                              0,
                              0,
                              0,
                              n,
                              r,
                              o.ALPHA,
                              o.UNSIGNED_BYTE,
                              a,
                            );
                  }
                  function x(e, t, r, i) {
                    var a = v[e];
                    o.useProgram(n);
                    var s = b[e];
                    (s && !t) ||
                      (o.activeTexture(o.TEXTURE0),
                      o.bindTexture(o.TEXTURE_2D, a),
                      o.texParameteri(
                        o.TEXTURE_2D,
                        o.TEXTURE_WRAP_S,
                        o.CLAMP_TO_EDGE,
                      ),
                      o.texParameteri(
                        o.TEXTURE_2D,
                        o.TEXTURE_WRAP_T,
                        o.CLAMP_TO_EDGE,
                      ),
                      o.texParameteri(
                        o.TEXTURE_2D,
                        o.TEXTURE_MIN_FILTER,
                        o.LINEAR,
                      ),
                      o.texParameteri(
                        o.TEXTURE_2D,
                        o.TEXTURE_MAG_FILTER,
                        o.LINEAR,
                      ),
                      o.texImage2D(
                        o.TEXTURE_2D,
                        0,
                        o.RGBA,
                        r,
                        i,
                        0,
                        o.RGBA,
                        o.UNSIGNED_BYTE,
                        null,
                      ),
                      (s = b[e] = o.createFramebuffer())),
                      o.bindFramebuffer(o.FRAMEBUFFER, s),
                      o.framebufferTexture2D(
                        o.FRAMEBUFFER,
                        o.COLOR_ATTACHMENT0,
                        o.TEXTURE_2D,
                        a,
                        0,
                      );
                    var p = v[e + "_temp"];
                    o.activeTexture(o.TEXTURE1),
                      o.bindTexture(o.TEXTURE_2D, p),
                      o.uniform1i(h, 1);
                    var m = v[e + "_stripe"];
                    o.activeTexture(o.TEXTURE2),
                      o.bindTexture(o.TEXTURE_2D, m),
                      o.uniform1i(f, 2),
                      o.bindBuffer(o.ARRAY_BUFFER, u),
                      o.enableVertexAttribArray(c),
                      o.vertexAttribPointer(c, 2, o.FLOAT, !1, 0, 0),
                      o.bindBuffer(o.ARRAY_BUFFER, l),
                      o.enableVertexAttribArray(d),
                      o.vertexAttribPointer(d, 2, o.FLOAT, !1, 0, 0),
                      o.viewport(0, 0, r, i),
                      o.drawArrays(o.TRIANGLES, 0, y.length / 2),
                      o.bindFramebuffer(o.FRAMEBUFFER, null);
                  }
                  function V(e, n, r) {
                    o.activeTexture(n),
                      o.bindTexture(o.TEXTURE_2D, v[e]),
                      o.texParameteri(
                        o.TEXTURE_2D,
                        o.TEXTURE_WRAP_S,
                        o.CLAMP_TO_EDGE,
                      ),
                      o.texParameteri(
                        o.TEXTURE_2D,
                        o.TEXTURE_WRAP_T,
                        o.CLAMP_TO_EDGE,
                      ),
                      o.texParameteri(
                        o.TEXTURE_2D,
                        o.TEXTURE_MIN_FILTER,
                        o.LINEAR,
                      ),
                      o.texParameteri(
                        o.TEXTURE_2D,
                        o.TEXTURE_MAG_FILTER,
                        o.LINEAR,
                      ),
                      o.uniform1i(o.getUniformLocation(t, e), r);
                  }
                  function k(e, t) {
                    var n = s(o.VERTEX_SHADER, e),
                      r = s(o.FRAGMENT_SHADER, t),
                      i = o.createProgram();
                    if (
                      (o.attachShader(i, n),
                      o.attachShader(i, r),
                      o.linkProgram(i),
                      !o.getProgramParameter(i, o.LINK_STATUS))
                    ) {
                      var a = o.getProgramInfoLog(i);
                      throw (
                        (o.deleteProgram(i),
                        Error("GL program linking failed: " + a))
                      );
                    }
                    return i;
                  }
                  return (
                    (a.drawFrame = function (s) {
                      var v = s.format,
                        b =
                          !t ||
                          e.width !== v.displayWidth ||
                          e.height !== v.displayHeight;
                      if (
                        (b &&
                          ((e.width = v.displayWidth),
                          (e.height = v.displayHeight),
                          a.clear()),
                        t ||
                          (function () {
                            if (i.stripe) {
                              (n = k(r.vertexStripe, r.fragmentStripe)),
                                o.getAttribLocation(n, "aPosition"),
                                (l = o.createBuffer());
                              var e = new Float32Array([
                                0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
                              ]);
                              o.bindBuffer(o.ARRAY_BUFFER, l),
                                o.bufferData(o.ARRAY_BUFFER, e, o.STATIC_DRAW),
                                (d = o.getAttribLocation(
                                  n,
                                  "aTexturePosition",
                                )),
                                (f = o.getUniformLocation(n, "uStripe")),
                                (h = o.getUniformLocation(n, "uTexture"));
                            }
                            (t = k(r.vertex, r.fragment)),
                              (u = o.createBuffer()),
                              o.bindBuffer(o.ARRAY_BUFFER, u),
                              o.bufferData(o.ARRAY_BUFFER, y, o.STATIC_DRAW),
                              (c = o.getAttribLocation(t, "aPosition")),
                              (p = o.createBuffer()),
                              (m = o.getAttribLocation(t, "aLumaPosition")),
                              (g = o.createBuffer()),
                              (_ = o.getAttribLocation(t, "aChromaPosition"));
                          })(),
                        b)
                      ) {
                        var w = function (e, t, n) {
                          var r = v.cropLeft / n,
                            i = (v.cropLeft + v.cropWidth) / n,
                            a = (v.cropTop + v.cropHeight) / v.height,
                            s = v.cropTop / v.height,
                            u = new Float32Array([
                              r,
                              a,
                              i,
                              a,
                              r,
                              s,
                              r,
                              s,
                              i,
                              a,
                              i,
                              s,
                            ]);
                          o.bindBuffer(o.ARRAY_BUFFER, e),
                            o.bufferData(o.ARRAY_BUFFER, u, o.STATIC_DRAW);
                        };
                        w(p, 0, s.y.stride),
                          w(g, 0, (s.u.stride * v.width) / v.chromaWidth);
                      }
                      E("uTextureY", b, s.y.stride, v.height, s.y.bytes),
                        E(
                          "uTextureCb",
                          b,
                          s.u.stride,
                          v.chromaHeight,
                          s.u.bytes,
                        ),
                        E(
                          "uTextureCr",
                          b,
                          s.v.stride,
                          v.chromaHeight,
                          s.v.bytes,
                        ),
                        i.stripe &&
                          (x("uTextureY", b, s.y.stride, v.height),
                          x("uTextureCb", b, s.u.stride, v.chromaHeight),
                          x("uTextureCr", b, s.v.stride, v.chromaHeight)),
                        o.useProgram(t),
                        o.viewport(0, 0, e.width, e.height),
                        V("uTextureY", o.TEXTURE0, 0),
                        V("uTextureCb", o.TEXTURE1, 1),
                        V("uTextureCr", o.TEXTURE2, 2),
                        o.bindBuffer(o.ARRAY_BUFFER, u),
                        o.enableVertexAttribArray(c),
                        o.vertexAttribPointer(c, 2, o.FLOAT, !1, 0, 0),
                        o.bindBuffer(o.ARRAY_BUFFER, p),
                        o.enableVertexAttribArray(m),
                        o.vertexAttribPointer(m, 2, o.FLOAT, !1, 0, 0),
                        o.bindBuffer(o.ARRAY_BUFFER, g),
                        o.enableVertexAttribArray(_),
                        o.vertexAttribPointer(_, 2, o.FLOAT, !1, 0, 0),
                        o.drawArrays(o.TRIANGLES, 0, y.length / 2);
                    }),
                    (a.clear = function () {
                      o.viewport(0, 0, e.width, e.height),
                        o.clearColor(0, 0, 0, 0),
                        o.clear(o.COLOR_BUFFER_BIT);
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
                        o = i.stripe ? 1 : 4,
                        s = i.stripe ? e.RGBA : e.ALPHA,
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
                          s,
                          o,
                          4,
                          0,
                          s,
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
                      o = 0 | t(e.format.height / e.format.chromaHeight),
                      s = e.y.bytes,
                      u = e.u.bytes,
                      c = e.v.bytes,
                      l = 0 | e.y.stride,
                      d = 0 | e.u.stride,
                      f = 0 | e.v.stride,
                      h = r << 2,
                      p = 0,
                      m = 0,
                      g = 0,
                      _ = 0,
                      y = 0,
                      v = 0,
                      b = 0,
                      w = 0,
                      T = 0,
                      E = 0,
                      x = 0,
                      V = 0,
                      k = 0,
                      A = 0,
                      S = 0,
                      O = 0,
                      R = 0,
                      P = 0;
                    if (1 == a && 1 == o)
                      for (b = 0, w = h, P = 0, O = 0; O < i; O += 2) {
                        for (
                          g = ((m = (O * l) | 0) + l) | 0,
                            _ = (P * d) | 0,
                            y = (P * f) | 0,
                            S = 0;
                          S < r;
                          S += 2
                        )
                          (T = 0 | u[_++]),
                            (V = (((409 * (E = 0 | c[y++])) | 0) - 57088) | 0),
                            (k =
                              (((100 * T) | 0) + ((208 * E) | 0) - 34816) | 0),
                            (A = (((516 * T) | 0) - 70912) | 0),
                            (x = (298 * s[m++]) | 0),
                            (n[b] = (x + V) >> 8),
                            (n[b + 1] = (x - k) >> 8),
                            (n[b + 2] = (x + A) >> 8),
                            (b += 4),
                            (x = (298 * s[m++]) | 0),
                            (n[b] = (x + V) >> 8),
                            (n[b + 1] = (x - k) >> 8),
                            (n[b + 2] = (x + A) >> 8),
                            (b += 4),
                            (x = (298 * s[g++]) | 0),
                            (n[w] = (x + V) >> 8),
                            (n[w + 1] = (x - k) >> 8),
                            (n[w + 2] = (x + A) >> 8),
                            (w += 4),
                            (x = (298 * s[g++]) | 0),
                            (n[w] = (x + V) >> 8),
                            (n[w + 1] = (x - k) >> 8),
                            (n[w + 2] = (x + A) >> 8),
                            (w += 4);
                        (b += h), (w += h), P++;
                      }
                    else
                      for (v = 0, O = 0; O < i; O++)
                        for (
                          R = 0,
                            p = (O * l) | 0,
                            _ = ((P = O >> o) * d) | 0,
                            y = (P * f) | 0,
                            S = 0;
                          S < r;
                          S++
                        )
                          (T = 0 | u[_ + (R = S >> a)]),
                            (V =
                              (((409 * (E = 0 | c[y + R])) | 0) - 57088) | 0),
                            (k =
                              (((100 * T) | 0) + ((208 * E) | 0) - 34816) | 0),
                            (A = (((516 * T) | 0) - 70912) | 0),
                            (x = (298 * s[p++]) | 0),
                            (n[v] = (x + V) >> 8),
                            (n[v + 1] = (x - k) >> 8),
                            (n[v + 2] = (x + A) >> 8),
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
                  return o.default;
                },
              }),
              Object.defineProperty(r, "OGVMediaType", {
                enumerable: !0,
                get: function () {
                  return s.default;
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
              o = e(n(759)),
              s = e(n(278)),
              u = e(n(869)),
              c = e(n(168)),
              l = "1.8.9-20220406232920-cb5f7ff";
            (r.OGVVersion = l),
              "object" ===
                ("u" < typeof window ? "undefined" : (0, t.default)(window)) &&
                ((window.OGVCompat = i.default),
                (window.OGVLoader = a.default),
                (window.OGVMediaError = o.default),
                (window.OGVMediaType = s.default),
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
    999129(e, t, n) {
      "use strict";
      n.d(t, { A: () => a });
      var r = n(582128);
      let i = [];
      function a(e, t) {
        let n = (0, r.useRef)(),
          a = (0, r.useRef)(i);
        return (
          a.current === i
            ? ((n.current = e()), (a.current = t))
            : !(function (e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                  if (!Object.is(e[n], t[n])) return !1;
                return !0;
              })(t, a.current) && ((n.current = e()), (a.current = t)),
          n.current
        );
      }
    },
    676999(e, t, n) {
      "use strict";
      n.d(t, { t: () => R });
      var r,
        i = {};
      function a(e) {
        var t = null;
        return function () {
          return null == t && (t = e()), t;
        };
      }
      n.r(i),
        n.d(i, { FILE: () => p, HTML: () => _, TEXT: () => g, URL: () => m });
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
      var s = (function () {
          var e;
          function t(e) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            o(this, "entered", []),
              o(this, "isNodeInDocument", void 0),
              (this.isNodeInDocument = e);
          }
          return (
            (e = [
              {
                key: "enter",
                value: function (e) {
                  var t,
                    n,
                    r,
                    i,
                    a,
                    o = this,
                    s = this.entered.length;
                  return (
                    (this.entered =
                      ((t = this.entered.filter(function (t) {
                        return (
                          o.isNodeInDocument(t) &&
                          (!t.contains || t.contains(e))
                        );
                      })),
                      (n = [e]),
                      (r = new Set()),
                      (i = function (e) {
                        return r.add(e);
                      }),
                      t.forEach(i),
                      n.forEach(i),
                      (a = []),
                      r.forEach(function (e) {
                        return a.push(e);
                      }),
                      a)),
                    0 === s && this.entered.length > 0
                  );
                },
              },
              {
                key: "leave",
                value: function (e) {
                  var t,
                    n = this.entered.length;
                  return (
                    (this.entered =
                      ((t = this.entered.filter(this.isNodeInDocument)),
                      t.filter(function (t) {
                        return t !== e;
                      }))),
                    n > 0 && 0 === this.entered.length
                  );
                },
              },
              {
                key: "reset",
                value: function () {
                  this.entered = [];
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
        u = a(function () {
          return /firefox/i.test(navigator.userAgent);
        }),
        c = a(function () {
          return !!window.safari;
        });
      function l(e, t, n) {
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
          l(this, "xs", void 0),
            l(this, "ys", void 0),
            l(this, "c1s", void 0),
            l(this, "c2s", void 0),
            l(this, "c3s", void 0);
          for (var r, i, a, o = e.length, s = [], u = 0; u < o; u++) s.push(u);
          s.sort(function (t, n) {
            return e[t] < e[n] ? -1 : 1;
          });
          for (var c = [], d = [], f = [], h = 0; h < o - 1; h++)
            (r = e[h + 1] - e[h]),
              (i = n[h + 1] - n[h]),
              d.push(r),
              c.push(i),
              f.push(i / r);
          for (var p = [f[0]], m = 0; m < d.length - 1; m++) {
            var g = f[m],
              _ = f[m + 1];
            if (g * _ <= 0) p.push(0);
            else {
              r = d[m];
              var y = d[m + 1],
                v = r + y;
              p.push((3 * v) / ((v + y) / g + (v + r) / _));
            }
          }
          p.push(f[f.length - 1]);
          for (var b = [], w = [], T = 0; T < p.length - 1; T++) {
            a = f[T];
            var E = p[T],
              x = 1 / d[T],
              V = E + p[T + 1] - a - a;
            b.push((a - E - V) * x), w.push(V * x * x);
          }
          (this.xs = e),
            (this.ys = n),
            (this.c1s = p),
            (this.c2s = b),
            (this.c3s = w);
        }
        return (
          (e = [
            {
              key: "interpolate",
              value: function (e) {
                var t,
                  n = this.xs,
                  r = this.ys,
                  i = this.c1s,
                  a = this.c2s,
                  o = this.c3s,
                  s = n.length - 1;
                if (e === n[s]) return r[s];
                for (var u = 0, c = o.length - 1; u <= c; ) {
                  var l = n[(t = Math.floor(0.5 * (u + c)))];
                  if (l < e) u = t + 1;
                  else {
                    if (!(l > e)) return r[t];
                    c = t - 1;
                  }
                }
                var d = e - n[(s = Math.max(0, c))],
                  f = d * d;
                return r[s] + i[s] * d + a[s] * f + o[s] * d * f;
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
      function f(e) {
        var t = 1 === e.nodeType ? e : e.parentElement;
        if (!t) return null;
        var n = t.getBoundingClientRect(),
          r = n.top;
        return { x: n.left, y: r };
      }
      function h(e) {
        return { x: e.clientX, y: e.clientY };
      }
      var p = "__NATIVE_FILE__",
        m = "__NATIVE_URL__",
        g = "__NATIVE_TEXT__",
        _ = "__NATIVE_HTML__";
      function y(e, t, n) {
        var r = t.reduce(function (t, n) {
          return t || e.getData(n);
        }, "");
        return null != r ? r : n;
      }
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
      var b =
        (v((r = {}), p, {
          exposeProperties: {
            files: function (e) {
              return Array.prototype.slice.call(e.files);
            },
            items: function (e) {
              return e.items;
            },
          },
          matchesTypes: ["Files"],
        }),
        v(r, _, {
          exposeProperties: {
            html: function (e, t) {
              return y(e, t, "");
            },
          },
          matchesTypes: ["Html", "text/html"],
        }),
        v(r, m, {
          exposeProperties: {
            urls: function (e, t) {
              return y(e, t, "").split("\n");
            },
          },
          matchesTypes: ["Url", "text/uri-list"],
        }),
        v(r, g, {
          exposeProperties: {
            text: function (e, t) {
              return y(e, t, "");
            },
          },
          matchesTypes: ["Text", "text/plain"],
        }),
        r);
      function w(e, t, n) {
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
      var T = (function () {
        var e;
        function t(e) {
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          w(this, "item", void 0),
            w(this, "config", void 0),
            (this.config = e),
            (this.item = {}),
            this.initializeExposedProperties();
        }
        return (
          (e = [
            {
              key: "initializeExposedProperties",
              value: function () {
                var e = this;
                Object.keys(this.config.exposeProperties).forEach(function (t) {
                  Object.defineProperty(e.item, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return (
                        console.warn(
                          "Browser doesn't allow reading \"".concat(
                            t,
                            '" until the drop event.',
                          ),
                        ),
                        null
                      );
                    },
                  });
                });
              },
            },
            {
              key: "loadDataTransfer",
              value: function (e) {
                var t = this;
                if (e) {
                  var n = {};
                  Object.keys(this.config.exposeProperties).forEach(
                    function (r) {
                      n[r] = {
                        value: t.config.exposeProperties[r](
                          e,
                          t.config.matchesTypes,
                        ),
                        configurable: !0,
                        enumerable: !0,
                      };
                    },
                  ),
                    Object.defineProperties(this.item, n);
                }
              },
            },
            {
              key: "canDrag",
              value: function () {
                return !0;
              },
            },
            {
              key: "beginDrag",
              value: function () {
                return this.item;
              },
            },
            {
              key: "isDragging",
              value: function (e, t) {
                return t === e.getSourceId();
              },
            },
            { key: "endDrag", value: function () {} },
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
      function E(e) {
        if (!e) return null;
        var t = Array.prototype.slice.call(e.types || []);
        return (
          Object.keys(b).filter(function (e) {
            return b[e].matchesTypes.some(function (e) {
              return t.indexOf(e) > -1;
            });
          })[0] || null
        );
      }
      function x(e, t, n) {
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
      var V = (function () {
        var e;
        function t(e, n) {
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          x(this, "ownerDocument", null),
            x(this, "globalContext", void 0),
            x(this, "optionsArgs", void 0),
            (this.globalContext = e),
            (this.optionsArgs = n);
        }
        return (
          (e = [
            {
              key: "window",
              get: function () {
                return this.globalContext
                  ? this.globalContext
                  : "u" > typeof window
                    ? window
                    : void 0;
              },
            },
            {
              key: "document",
              get: function () {
                var e;
                return null != (e = this.globalContext) && e.document
                  ? this.globalContext.document
                  : this.window
                    ? this.window.document
                    : void 0;
              },
            },
            {
              key: "rootElement",
              get: function () {
                var e;
                return (
                  (null == (e = this.optionsArgs) ? void 0 : e.rootElement) ||
                  this.window
                );
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
      function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                S(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : k(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function S(e, t, n) {
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
      var O = (function () {
          var e;
          function t(e, n, r) {
            var i = this;
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            S(this, "options", void 0),
              S(this, "actions", void 0),
              S(this, "monitor", void 0),
              S(this, "registry", void 0),
              S(this, "enterLeaveCounter", void 0),
              S(this, "sourcePreviewNodes", new Map()),
              S(this, "sourcePreviewNodeOptions", new Map()),
              S(this, "sourceNodes", new Map()),
              S(this, "sourceNodeOptions", new Map()),
              S(this, "dragStartSourceIds", null),
              S(this, "dropTargetIds", []),
              S(this, "dragEnterTargetIds", []),
              S(this, "currentNativeSource", null),
              S(this, "currentNativeHandle", null),
              S(this, "currentDragSourceNode", null),
              S(this, "altKeyPressed", !1),
              S(this, "mouseMoveTimeoutTimer", null),
              S(this, "asyncEndDragFrameId", null),
              S(this, "dragOverTargetIds", null),
              S(this, "getSourceClientOffset", function (e) {
                var t = i.sourceNodes.get(e);
                return (t && f(t)) || null;
              }),
              S(this, "endDragNativeItem", function () {
                i.isDraggingNativeItem() &&
                  (i.actions.endDrag(),
                  i.currentNativeHandle &&
                    i.registry.removeSource(i.currentNativeHandle),
                  (i.currentNativeHandle = null),
                  (i.currentNativeSource = null));
              }),
              S(this, "isNodeInDocument", function (e) {
                return !!(
                  e &&
                  i.document &&
                  i.document.body &&
                  i.document.body.contains(e)
                );
              }),
              S(this, "endDragIfSourceWasRemovedFromDOM", function () {
                var e = i.currentDragSourceNode;
                !(null == e || i.isNodeInDocument(e)) &&
                  i.clearCurrentDragSourceNode() &&
                  i.monitor.isDragging() &&
                  i.actions.endDrag();
              }),
              S(this, "handleTopDragStartCapture", function () {
                i.clearCurrentDragSourceNode(), (i.dragStartSourceIds = []);
              }),
              S(this, "handleTopDragStart", function (e) {
                if (!e.defaultPrevented) {
                  var t = i.dragStartSourceIds;
                  i.dragStartSourceIds = null;
                  var n = h(e);
                  i.monitor.isDragging() && i.actions.endDrag(),
                    i.actions.beginDrag(t || [], {
                      publishSource: !1,
                      getSourceClientOffset: i.getSourceClientOffset,
                      clientOffset: n,
                    });
                  var r = e.dataTransfer,
                    a = E(r);
                  if (i.monitor.isDragging()) {
                    if (r && "function" == typeof r.setDragImage) {
                      var o = i.monitor.getSourceId(),
                        s = i.sourceNodes.get(o),
                        l = i.sourcePreviewNodes.get(o) || s;
                      if (l) {
                        var p,
                          m,
                          g,
                          _,
                          y,
                          v,
                          b,
                          w,
                          T,
                          x,
                          V,
                          k,
                          A,
                          S,
                          O,
                          R,
                          P,
                          C,
                          L = i.getCurrentSourcePreviewNodeOptions(),
                          I = L.anchorX,
                          D = L.anchorY,
                          M = L.offsetX,
                          U = L.offsetY,
                          j =
                            ((p = { anchorX: I, anchorY: D }),
                            (m = { offsetX: M, offsetY: U }),
                            (y = f(
                              (_ =
                                "IMG" === l.nodeName &&
                                (u() ||
                                  !(
                                    null != (g = document.documentElement) &&
                                    g.contains(l)
                                  )))
                                ? s
                                : l,
                            )),
                            (v = { x: n.x - y.x, y: n.y - y.y }),
                            (b = s.offsetWidth),
                            (w = s.offsetHeight),
                            (T = p.anchorX),
                            (x = p.anchorY),
                            (S = ((V = _ ? l.width : b),
                            (k = _ ? l.height : w),
                            c() &&
                              _ &&
                              ((k /= window.devicePixelRatio),
                              (V /= window.devicePixelRatio)),
                            (A = { dragPreviewWidth: V, dragPreviewHeight: k }))
                              .dragPreviewWidth),
                            (O = A.dragPreviewHeight),
                            (R = m.offsetX),
                            (P = m.offsetY),
                            {
                              x:
                                0 === R || R
                                  ? R
                                  : new d(
                                      [0, 0.5, 1],
                                      [v.x, (v.x / b) * S, v.x + S - b],
                                    ).interpolate(T),
                              y:
                                0 === P || P
                                  ? P
                                  : ((C = new d(
                                      [0, 0.5, 1],
                                      [v.y, (v.y / w) * O, v.y + O - w],
                                    ).interpolate(x)),
                                    c() &&
                                      _ &&
                                      (C += (window.devicePixelRatio - 1) * O),
                                    C),
                            });
                        r.setDragImage(l, j.x, j.y);
                      }
                    }
                    try {
                      null == r || r.setData("application/json", {});
                    } catch (e) {}
                    i.setCurrentDragSourceNode(e.target),
                      i.getCurrentSourcePreviewNodeOptions()
                        .captureDraggingState
                        ? i.actions.publishDragSource()
                        : setTimeout(function () {
                            return i.actions.publishDragSource();
                          }, 0);
                  } else if (a) i.beginDragNativeItem(a);
                  else {
                    if (
                      r &&
                      !r.types &&
                      ((e.target && !e.target.hasAttribute) ||
                        !e.target.hasAttribute("draggable"))
                    )
                      return;
                    e.preventDefault();
                  }
                }
              }),
              S(this, "handleTopDragEndCapture", function () {
                i.clearCurrentDragSourceNode() &&
                  i.monitor.isDragging() &&
                  i.actions.endDrag();
              }),
              S(this, "handleTopDragEnterCapture", function (e) {
                if (
                  ((i.dragEnterTargetIds = []),
                  !(
                    !i.enterLeaveCounter.enter(e.target) ||
                    i.monitor.isDragging()
                  ))
                ) {
                  var t = e.dataTransfer,
                    n = E(t);
                  n && i.beginDragNativeItem(n, t);
                }
              }),
              S(this, "handleTopDragEnter", function (e) {
                var t = i.dragEnterTargetIds;
                (i.dragEnterTargetIds = []),
                  i.monitor.isDragging() &&
                    ((i.altKeyPressed = e.altKey),
                    t.length > 0 && i.actions.hover(t, { clientOffset: h(e) }),
                    t.some(function (e) {
                      return i.monitor.canDropOnTarget(e);
                    }) &&
                      (e.preventDefault(),
                      e.dataTransfer &&
                        (e.dataTransfer.dropEffect =
                          i.getCurrentDropEffect())));
              }),
              S(this, "handleTopDragOverCapture", function () {
                i.dragOverTargetIds = [];
              }),
              S(this, "handleTopDragOver", function (e) {
                var t = i.dragOverTargetIds;
                if (((i.dragOverTargetIds = []), !i.monitor.isDragging())) {
                  e.preventDefault(),
                    e.dataTransfer && (e.dataTransfer.dropEffect = "none");
                  return;
                }
                (i.altKeyPressed = e.altKey),
                  i.actions.hover(t || [], { clientOffset: h(e) }),
                  (t || []).some(function (e) {
                    return i.monitor.canDropOnTarget(e);
                  })
                    ? (e.preventDefault(),
                      e.dataTransfer &&
                        (e.dataTransfer.dropEffect = i.getCurrentDropEffect()))
                    : i.isDraggingNativeItem()
                      ? e.preventDefault()
                      : (e.preventDefault(),
                        e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
              }),
              S(this, "handleTopDragLeaveCapture", function (e) {
                i.isDraggingNativeItem() && e.preventDefault(),
                  i.enterLeaveCounter.leave(e.target) &&
                    i.isDraggingNativeItem() &&
                    setTimeout(function () {
                      return i.endDragNativeItem();
                    }, 0);
              }),
              S(this, "handleTopDropCapture", function (e) {
                if (((i.dropTargetIds = []), i.isDraggingNativeItem())) {
                  var t;
                  e.preventDefault(),
                    null == (t = i.currentNativeSource) ||
                      t.loadDataTransfer(e.dataTransfer);
                } else E(e.dataTransfer) && e.preventDefault();
                i.enterLeaveCounter.reset();
              }),
              S(this, "handleTopDrop", function (e) {
                var t = i.dropTargetIds;
                (i.dropTargetIds = []),
                  i.actions.hover(t, { clientOffset: h(e) }),
                  i.actions.drop({ dropEffect: i.getCurrentDropEffect() }),
                  i.isDraggingNativeItem()
                    ? i.endDragNativeItem()
                    : i.monitor.isDragging() && i.actions.endDrag();
              }),
              S(this, "handleSelectStart", function (e) {
                var t = e.target;
                "function" != typeof t.dragDrop ||
                  "INPUT" === t.tagName ||
                  "SELECT" === t.tagName ||
                  "TEXTAREA" === t.tagName ||
                  t.isContentEditable ||
                  (e.preventDefault(), t.dragDrop());
              }),
              (this.options = new V(n, r)),
              (this.actions = e.getActions()),
              (this.monitor = e.getMonitor()),
              (this.registry = e.getRegistry()),
              (this.enterLeaveCounter = new s(this.isNodeInDocument));
          }
          return (
            (e = [
              {
                key: "profile",
                value: function () {
                  var e, t;
                  return {
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions:
                      this.sourcePreviewNodeOptions.size,
                    sourceNodeOptions: this.sourceNodeOptions.size,
                    sourceNodes: this.sourceNodes.size,
                    dragStartSourceIds:
                      (null == (e = this.dragStartSourceIds)
                        ? void 0
                        : e.length) || 0,
                    dropTargetIds: this.dropTargetIds.length,
                    dragEnterTargetIds: this.dragEnterTargetIds.length,
                    dragOverTargetIds:
                      (null == (t = this.dragOverTargetIds)
                        ? void 0
                        : t.length) || 0,
                  };
                },
              },
              {
                key: "window",
                get: function () {
                  return this.options.window;
                },
              },
              {
                key: "document",
                get: function () {
                  return this.options.document;
                },
              },
              {
                key: "rootElement",
                get: function () {
                  return this.options.rootElement;
                },
              },
              {
                key: "setup",
                value: function () {
                  var e = this.rootElement;
                  if (void 0 !== e) {
                    if (e.__isReactDndBackendSetUp)
                      throw Error(
                        "Cannot have two HTML5 backends at the same time.",
                      );
                    (e.__isReactDndBackendSetUp = !0),
                      this.addEventListeners(e);
                  }
                },
              },
              {
                key: "teardown",
                value: function () {
                  var e,
                    t = this.rootElement;
                  void 0 !== t &&
                    ((t.__isReactDndBackendSetUp = !1),
                    this.removeEventListeners(this.rootElement),
                    this.clearCurrentDragSourceNode(),
                    this.asyncEndDragFrameId &&
                      (null == (e = this.window) ||
                        e.cancelAnimationFrame(this.asyncEndDragFrameId)));
                },
              },
              {
                key: "connectDragPreview",
                value: function (e, t, n) {
                  var r = this;
                  return (
                    this.sourcePreviewNodeOptions.set(e, n),
                    this.sourcePreviewNodes.set(e, t),
                    function () {
                      r.sourcePreviewNodes.delete(e),
                        r.sourcePreviewNodeOptions.delete(e);
                    }
                  );
                },
              },
              {
                key: "connectDragSource",
                value: function (e, t, n) {
                  var r = this;
                  this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
                  var i = function (t) {
                      return r.handleDragStart(t, e);
                    },
                    a = function (e) {
                      return r.handleSelectStart(e);
                    };
                  return (
                    t.setAttribute("draggable", "true"),
                    t.addEventListener("dragstart", i),
                    t.addEventListener("selectstart", a),
                    function () {
                      r.sourceNodes.delete(e),
                        r.sourceNodeOptions.delete(e),
                        t.removeEventListener("dragstart", i),
                        t.removeEventListener("selectstart", a),
                        t.setAttribute("draggable", "false");
                    }
                  );
                },
              },
              {
                key: "connectDropTarget",
                value: function (e, t) {
                  var n = this,
                    r = function (t) {
                      return n.handleDragEnter(t, e);
                    },
                    i = function (t) {
                      return n.handleDragOver(t, e);
                    },
                    a = function (t) {
                      return n.handleDrop(t, e);
                    };
                  return (
                    t.addEventListener("dragenter", r),
                    t.addEventListener("dragover", i),
                    t.addEventListener("drop", a),
                    function () {
                      t.removeEventListener("dragenter", r),
                        t.removeEventListener("dragover", i),
                        t.removeEventListener("drop", a);
                    }
                  );
                },
              },
              {
                key: "addEventListeners",
                value: function (e) {
                  e.addEventListener &&
                    (e.addEventListener("dragstart", this.handleTopDragStart),
                    e.addEventListener(
                      "dragstart",
                      this.handleTopDragStartCapture,
                      !0,
                    ),
                    e.addEventListener(
                      "dragend",
                      this.handleTopDragEndCapture,
                      !0,
                    ),
                    e.addEventListener("dragenter", this.handleTopDragEnter),
                    e.addEventListener(
                      "dragenter",
                      this.handleTopDragEnterCapture,
                      !0,
                    ),
                    e.addEventListener(
                      "dragleave",
                      this.handleTopDragLeaveCapture,
                      !0,
                    ),
                    e.addEventListener("dragover", this.handleTopDragOver),
                    e.addEventListener(
                      "dragover",
                      this.handleTopDragOverCapture,
                      !0,
                    ),
                    e.addEventListener("drop", this.handleTopDrop),
                    e.addEventListener("drop", this.handleTopDropCapture, !0));
                },
              },
              {
                key: "removeEventListeners",
                value: function (e) {
                  e.removeEventListener &&
                    (e.removeEventListener(
                      "dragstart",
                      this.handleTopDragStart,
                    ),
                    e.removeEventListener(
                      "dragstart",
                      this.handleTopDragStartCapture,
                      !0,
                    ),
                    e.removeEventListener(
                      "dragend",
                      this.handleTopDragEndCapture,
                      !0,
                    ),
                    e.removeEventListener("dragenter", this.handleTopDragEnter),
                    e.removeEventListener(
                      "dragenter",
                      this.handleTopDragEnterCapture,
                      !0,
                    ),
                    e.removeEventListener(
                      "dragleave",
                      this.handleTopDragLeaveCapture,
                      !0,
                    ),
                    e.removeEventListener("dragover", this.handleTopDragOver),
                    e.removeEventListener(
                      "dragover",
                      this.handleTopDragOverCapture,
                      !0,
                    ),
                    e.removeEventListener("drop", this.handleTopDrop),
                    e.removeEventListener(
                      "drop",
                      this.handleTopDropCapture,
                      !0,
                    ));
                },
              },
              {
                key: "getCurrentSourceNodeOptions",
                value: function () {
                  var e = this.monitor.getSourceId(),
                    t = this.sourceNodeOptions.get(e);
                  return A(
                    { dropEffect: this.altKeyPressed ? "copy" : "move" },
                    t || {},
                  );
                },
              },
              {
                key: "getCurrentDropEffect",
                value: function () {
                  return this.isDraggingNativeItem()
                    ? "copy"
                    : this.getCurrentSourceNodeOptions().dropEffect;
                },
              },
              {
                key: "getCurrentSourcePreviewNodeOptions",
                value: function () {
                  var e = this.monitor.getSourceId();
                  return A(
                    { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                    this.sourcePreviewNodeOptions.get(e) || {},
                  );
                },
              },
              {
                key: "isDraggingNativeItem",
                value: function () {
                  var e = this.monitor.getItemType();
                  return Object.keys(i).some(function (t) {
                    return i[t] === e;
                  });
                },
              },
              {
                key: "beginDragNativeItem",
                value: function (e, t) {
                  var n;
                  this.clearCurrentDragSourceNode(),
                    (this.currentNativeSource =
                      ((n = new T(b[e])).loadDataTransfer(t), n)),
                    (this.currentNativeHandle = this.registry.addSource(
                      e,
                      this.currentNativeSource,
                    )),
                    this.actions.beginDrag([this.currentNativeHandle]);
                },
              },
              {
                key: "setCurrentDragSourceNode",
                value: function (e) {
                  var t = this;
                  this.clearCurrentDragSourceNode(),
                    (this.currentDragSourceNode = e),
                    (this.mouseMoveTimeoutTimer = setTimeout(function () {
                      var e;
                      return null == (e = t.rootElement)
                        ? void 0
                        : e.addEventListener(
                            "mousemove",
                            t.endDragIfSourceWasRemovedFromDOM,
                            !0,
                          );
                    }, 1e3));
                },
              },
              {
                key: "clearCurrentDragSourceNode",
                value: function () {
                  if (this.currentDragSourceNode) {
                    if (
                      ((this.currentDragSourceNode = null), this.rootElement)
                    ) {
                      var e;
                      null == (e = this.window) ||
                        e.clearTimeout(this.mouseMoveTimeoutTimer || void 0),
                        this.rootElement.removeEventListener(
                          "mousemove",
                          this.endDragIfSourceWasRemovedFromDOM,
                          !0,
                        );
                    }
                    return (this.mouseMoveTimeoutTimer = null), !0;
                  }
                  return !1;
                },
              },
              {
                key: "handleDragStart",
                value: function (e, t) {
                  e.defaultPrevented ||
                    (this.dragStartSourceIds || (this.dragStartSourceIds = []),
                    this.dragStartSourceIds.unshift(t));
                },
              },
              {
                key: "handleDragEnter",
                value: function (e, t) {
                  this.dragEnterTargetIds.unshift(t);
                },
              },
              {
                key: "handleDragOver",
                value: function (e, t) {
                  null === this.dragOverTargetIds &&
                    (this.dragOverTargetIds = []),
                    this.dragOverTargetIds.unshift(t);
                },
              },
              {
                key: "handleDrop",
                value: function (e, t) {
                  this.dropTargetIds.unshift(t);
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
        R = function (e, t, n) {
          return new O(e, t, n);
        };
    },
    386693(e, t, n) {
      "use strict";
      n.d(t, { QP: () => ej, eV: () => r });
      let r = (e, t) => ({ event: e, check: t });
      var i,
        a,
        o = n(582128),
        s = n(477900),
        u = n(321733),
        c = "dnd-core/INIT_COORDS",
        l = "dnd-core/BEGIN_DRAG",
        d = "dnd-core/PUBLISH_DRAG_SOURCE",
        f = "dnd-core/HOVER",
        h = "dnd-core/DROP",
        p = "dnd-core/END_DRAG";
      function m(e, t) {
        return {
          type: c,
          payload: { sourceClientOffset: t || null, clientOffset: e || null },
        };
      }
      function g(e) {
        return (g =
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
      function _(e) {
        return "object" === g(e);
      }
      var y = {
        type: c,
        payload: { clientOffset: null, sourceClientOffset: null },
      };
      function v(e, t) {
        return null === t
          ? null === e
          : Array.isArray(e)
            ? e.some(function (e) {
                return e === t;
              })
            : e === t;
      }
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : b(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var T = (function () {
        var e;
        function t(e, n) {
          var r = this;
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
              var e = r.store.getState().refCount > 0;
              r.backend &&
                (e && !r.isSetUp
                  ? (r.backend.setup(), (r.isSetUp = !0))
                  : !e &&
                    r.isSetUp &&
                    (r.backend.teardown(), (r.isSetUp = !1)));
            }),
            (this.store = e),
            (this.monitor = n),
            e.subscribe(this.handleRefCountChange);
        }
        return (
          (e = [
            {
              key: "receiveBackend",
              value: function (e) {
                this.backend = e;
              },
            },
            {
              key: "getMonitor",
              value: function () {
                return this.monitor;
              },
            },
            {
              key: "getBackend",
              value: function () {
                return this.backend;
              },
            },
            {
              key: "getRegistry",
              value: function () {
                return this.monitor.registry;
              },
            },
            {
              key: "getActions",
              value: function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  a = this,
                  o = this.store.dispatch,
                  s = {
                    beginDrag:
                      ((e = this),
                      function () {
                        var t,
                          n,
                          r,
                          i,
                          a,
                          o =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [],
                          s =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : { publishSource: !0 },
                          c = s.publishSource,
                          d = s.clientOffset,
                          f = s.getSourceClientOffset,
                          h = e.getMonitor(),
                          p = e.getRegistry();
                        e.dispatch(m(d)),
                          (t = o),
                          (n = h),
                          (r = p),
                          (0, u.V)(
                            !n.isDragging(),
                            "Cannot call beginDrag while dragging.",
                          ),
                          t.forEach(function (e) {
                            (0, u.V)(
                              r.getSource(e),
                              "Expected sourceIds to be registered.",
                            );
                          });
                        var g = (function (e, t) {
                          for (var n = null, r = e.length - 1; r >= 0; r--)
                            if (t.canDragSource(e[r])) {
                              n = e[r];
                              break;
                            }
                          return n;
                        })(o, h);
                        if (null === g) return void e.dispatch(y);
                        var v = null;
                        if (d) {
                          if (!f)
                            throw Error(
                              "getSourceClientOffset must be defined",
                            );
                          (i = f),
                            (0, u.V)(
                              "function" == typeof i,
                              "When clientOffset is provided, getSourceClientOffset must be a function.",
                            ),
                            (v = f(g));
                        }
                        e.dispatch(m(d, v));
                        var b = p.getSource(g).beginDrag(h, g);
                        if (null != b) {
                          return (
                            (a = b),
                            (0, u.V)(_(a), "Item must be an object."),
                            p.pinSource(g),
                            {
                              type: l,
                              payload: {
                                itemType: p.getSourceType(g),
                                item: b,
                                sourceId: g,
                                clientOffset: d || null,
                                sourceClientOffset: v || null,
                                isSourcePublic: !!(void 0 === c || c),
                              },
                            }
                          );
                        }
                      }),
                    publishDragSource:
                      ((t = this),
                      function () {
                        if (t.getMonitor().isDragging()) return { type: d };
                      }),
                    hover:
                      ((n = this),
                      function (e) {
                        var t,
                          r,
                          i,
                          a,
                          o =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          s = o.clientOffset;
                        (t = e),
                          (0, u.V)(
                            Array.isArray(t),
                            "Expected targetIds to be an array.",
                          );
                        var c = e.slice(0),
                          l = n.getMonitor(),
                          d = n.getRegistry();
                        return (
                          (function (e, t, n) {
                            (0, u.V)(
                              t.isDragging(),
                              "Cannot call hover while not dragging.",
                            ),
                              (0, u.V)(
                                !t.didDrop(),
                                "Cannot call hover after drop.",
                              );
                            for (var r = 0; r < e.length; r++) {
                              var i = e[r];
                              (0, u.V)(
                                e.lastIndexOf(i) === r,
                                "Expected targetIds to be unique in the passed array.",
                              );
                              var a = n.getTarget(i);
                              (0, u.V)(
                                a,
                                "Expected targetIds to be registered.",
                              );
                            }
                          })(c, l, d),
                          (function (e, t, n) {
                            for (var r = e.length - 1; r >= 0; r--) {
                              var i = e[r];
                              v(t.getTargetType(i), n) || e.splice(r, 1);
                            }
                          })(c, d, l.getItemType()),
                          (r = c),
                          (i = l),
                          (a = d),
                          r.forEach(function (e) {
                            a.getTarget(e).hover(i, e);
                          }),
                          {
                            type: f,
                            payload: { targetIds: c, clientOffset: s || null },
                          }
                        );
                      }),
                    drop:
                      ((r = this),
                      function () {
                        var e,
                          t,
                          n,
                          i =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          a = r.getMonitor(),
                          o = r.getRegistry();
                        (e = a),
                          (0, u.V)(
                            e.isDragging(),
                            "Cannot call drop while not dragging.",
                          ),
                          (0, u.V)(
                            !e.didDrop(),
                            "Cannot call drop twice during one drag operation.",
                          ),
                          ((n = (t = a)
                            .getTargetIds()
                            .filter(t.canDropOnTarget, t)).reverse(),
                          n).forEach(function (e, t) {
                            var n,
                              s,
                              c,
                              l,
                              d,
                              f,
                              p,
                              m =
                                ((n = e),
                                (s = t),
                                (c = o),
                                (l = a),
                                (p = f =
                                  (d = c.getTarget(n)) ? d.drop(l, n) : void 0),
                                (0, u.V)(
                                  void 0 === p || _(p),
                                  "Drop result must either be an object or undefined.",
                                ),
                                void 0 === f &&
                                  (f = 0 === s ? {} : l.getDropResult()),
                                f),
                              g = {
                                type: h,
                                payload: { dropResult: w(w({}, i), m) },
                              };
                            r.dispatch(g);
                          });
                      }),
                    endDrag:
                      ((i = this),
                      function () {
                        var e,
                          t = i.getMonitor(),
                          n = i.getRegistry();
                        (e = t),
                          (0, u.V)(
                            e.isDragging(),
                            "Cannot call endDrag while not dragging.",
                          );
                        var r = t.getSourceId();
                        return (
                          null != r &&
                            (n.getSource(r, !0).endDrag(t, r), n.unpinSource()),
                          { type: p }
                        );
                      }),
                  };
                return Object.keys(s).reduce(function (e, t) {
                  var n = s[t];
                  return (
                    (e[t] = function () {
                      for (
                        var e = arguments.length, t = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        t[r] = arguments[r];
                      var i = n.apply(a, t);
                      void 0 !== i && o(i);
                    }),
                    e
                  );
                }, {});
              },
            },
            {
              key: "dispatch",
              value: function (e) {
                this.store.dispatch(e);
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
      function E(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      n(416886);
      var x =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        V = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        k = {
          INIT: "@@redux/INIT" + V(),
          REPLACE: "@@redux/REPLACE" + V(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + V();
          },
        },
        A = function (e, t) {
          return e === t;
        };
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : S(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var R = {
          initialSourceClientOffset: null,
          initialClientOffset: null,
          clientOffset: null,
        },
        P = "dnd-core/ADD_SOURCE",
        C = "dnd-core/ADD_TARGET",
        L = "dnd-core/REMOVE_SOURCE",
        I = "dnd-core/REMOVE_TARGET";
      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : D(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var U = {
          itemType: null,
          item: null,
          sourceId: null,
          targetIds: [],
          dropResult: null,
          didDrop: !1,
          isSourcePublic: null,
        },
        j = [],
        F = [];
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : N(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function G() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0;
        return {
          dirtyHandlerIds: (function () {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var e,
              t,
              n,
              r = arguments.length > 1 ? arguments[1] : void 0;
            switch (r.type) {
              case f:
                break;
              case P:
              case C:
              case I:
              case L:
                return j;
              default:
                return F;
            }
            var i = r.payload,
              a = i.targetIds,
              o = void 0 === a ? [] : a,
              s = i.prevTargetIds,
              u = void 0 === s ? [] : s,
              c =
                ((e = new Map()),
                (t = function (t) {
                  e.set(t, e.has(t) ? e.get(t) + 1 : 1);
                }),
                o.forEach(t),
                u.forEach(t),
                (n = []),
                e.forEach(function (e, t) {
                  1 === e && n.push(t);
                }),
                n);
            if (
              !(
                c.length > 0 ||
                !(function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : A;
                  if (e.length !== t.length) return !1;
                  for (var r = 0; r < e.length; ++r)
                    if (!n(e[r], t[r])) return !1;
                  return !0;
                })(o, u)
              )
            )
              return j;
            var l = u[u.length - 1],
              d = o[o.length - 1];
            return l !== d && (l && c.push(l), d && c.push(d)), c;
          })(t.dirtyHandlerIds, {
            type: n.type,
            payload: B(
              B({}, n.payload),
              {},
              {
                prevTargetIds:
                  ((e = []),
                  "dragOperation.targetIds".split(".").reduce(function (t, n) {
                    return t && t[n] ? t[n] : e || null;
                  }, t)),
              },
            ),
          }),
          dragOffset: (function () {
            var e,
              t,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : R,
              r = arguments.length > 1 ? arguments[1] : void 0,
              i = r.payload;
            switch (r.type) {
              case c:
              case l:
                return {
                  initialSourceClientOffset: i.sourceClientOffset,
                  initialClientOffset: i.clientOffset,
                  clientOffset: i.clientOffset,
                };
              case f:
                if (
                  ((e = n.clientOffset),
                  (t = i.clientOffset),
                  (!e && !t) || (e && t && e.x === t.x && e.y === t.y))
                )
                  return n;
                return O(O({}, n), {}, { clientOffset: i.clientOffset });
              case p:
              case h:
                return R;
              default:
                return n;
            }
          })(t.dragOffset, n),
          refCount: (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case P:
              case C:
                return e + 1;
              case L:
              case I:
                return e - 1;
              default:
                return e;
            }
          })(t.refCount, n),
          dragOperation: (function () {
            var e,
              t,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : U,
              r = arguments.length > 1 ? arguments[1] : void 0,
              i = r.payload;
            switch (r.type) {
              case l:
                return M(
                  M({}, n),
                  {},
                  {
                    itemType: i.itemType,
                    item: i.item,
                    sourceId: i.sourceId,
                    isSourcePublic: i.isSourcePublic,
                    dropResult: null,
                    didDrop: !1,
                  },
                );
              case d:
                return M(M({}, n), {}, { isSourcePublic: !0 });
              case f:
                return M(M({}, n), {}, { targetIds: i.targetIds });
              case I:
                if (-1 === n.targetIds.indexOf(i.targetId)) return n;
                return M(
                  M({}, n),
                  {},
                  {
                    targetIds:
                      ((e = n.targetIds),
                      (t = i.targetId),
                      e.filter(function (e) {
                        return e !== t;
                      })),
                  },
                );
              case h:
                return M(
                  M({}, n),
                  {},
                  { dropResult: i.dropResult, didDrop: !0, targetIds: [] },
                );
              case p:
                return M(
                  M({}, n),
                  {},
                  {
                    itemType: null,
                    item: null,
                    sourceId: null,
                    dropResult: null,
                    didDrop: !1,
                    isSourcePublic: null,
                    targetIds: [],
                  },
                );
              default:
                return n;
            }
          })(t.dragOperation, n),
          stateId: (function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return e + 1;
          })(t.stateId),
        };
      }
      function H(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      (j.__IS_NONE__ = !0), (F.__IS_ALL__ = !0);
      var W = (function () {
          var e;
          function t(e, n) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            (this.store = e), (this.registry = n);
          }
          return (
            (e = [
              {
                key: "subscribeToStateChange",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { handlerIds: void 0 },
                    r = n.handlerIds;
                  (0, u.V)(
                    "function" == typeof e,
                    "listener must be a function.",
                  ),
                    (0, u.V)(
                      void 0 === r || Array.isArray(r),
                      "handlerIds, when specified, must be an array of strings.",
                    );
                  var i = this.store.getState().stateId;
                  return this.store.subscribe(function () {
                    var n = t.store.getState(),
                      a = n.stateId;
                    try {
                      a === i ||
                        (a === i + 1 &&
                          !(function (e, t) {
                            return (
                              e !== j &&
                              (e === F ||
                                void 0 === t ||
                                t.filter(function (t) {
                                  return e.indexOf(t) > -1;
                                }).length > 0)
                            );
                          })(n.dirtyHandlerIds, r)) ||
                        e();
                    } finally {
                      i = a;
                    }
                  });
                },
              },
              {
                key: "subscribeToOffsetChange",
                value: function (e) {
                  var t = this;
                  (0, u.V)(
                    "function" == typeof e,
                    "listener must be a function.",
                  );
                  var n = this.store.getState().dragOffset;
                  return this.store.subscribe(function () {
                    var r = t.store.getState().dragOffset;
                    r !== n && ((n = r), e());
                  });
                },
              },
              {
                key: "canDragSource",
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e);
                  return (
                    (0, u.V)(
                      t,
                      "Expected to find a valid source. sourceId=".concat(e),
                    ),
                    !this.isDragging() && t.canDrag(this, e)
                  );
                },
              },
              {
                key: "canDropOnTarget",
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getTarget(e);
                  return (
                    (0, u.V)(
                      t,
                      "Expected to find a valid target. targetId=".concat(e),
                    ),
                    !(!this.isDragging() || this.didDrop()) &&
                      v(this.registry.getTargetType(e), this.getItemType()) &&
                      t.canDrop(this, e)
                  );
                },
              },
              {
                key: "isDragging",
                value: function () {
                  return !!this.getItemType();
                },
              },
              {
                key: "isDraggingSource",
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e, !0);
                  return (
                    (0, u.V)(
                      t,
                      "Expected to find a valid source. sourceId=".concat(e),
                    ),
                    !!this.isDragging() &&
                      !!this.isSourcePublic() &&
                      this.registry.getSourceType(e) === this.getItemType() &&
                      t.isDragging(this, e)
                  );
                },
              },
              {
                key: "isOverTarget",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { shallow: !1 };
                  if (!e) return !1;
                  var n = t.shallow;
                  if (!this.isDragging()) return !1;
                  var r = this.registry.getTargetType(e),
                    i = this.getItemType();
                  if (i && !v(r, i)) return !1;
                  var a = this.getTargetIds();
                  if (!a.length) return !1;
                  var o = a.indexOf(e);
                  return n ? o === a.length - 1 : o > -1;
                },
              },
              {
                key: "getItemType",
                value: function () {
                  return this.store.getState().dragOperation.itemType;
                },
              },
              {
                key: "getItem",
                value: function () {
                  return this.store.getState().dragOperation.item;
                },
              },
              {
                key: "getSourceId",
                value: function () {
                  return this.store.getState().dragOperation.sourceId;
                },
              },
              {
                key: "getTargetIds",
                value: function () {
                  return this.store.getState().dragOperation.targetIds;
                },
              },
              {
                key: "getDropResult",
                value: function () {
                  return this.store.getState().dragOperation.dropResult;
                },
              },
              {
                key: "didDrop",
                value: function () {
                  return this.store.getState().dragOperation.didDrop;
                },
              },
              {
                key: "isSourcePublic",
                value: function () {
                  return !!this.store.getState().dragOperation.isSourcePublic;
                },
              },
              {
                key: "getInitialClientOffset",
                value: function () {
                  return this.store.getState().dragOffset.initialClientOffset;
                },
              },
              {
                key: "getInitialSourceClientOffset",
                value: function () {
                  return this.store.getState().dragOffset
                    .initialSourceClientOffset;
                },
              },
              {
                key: "getClientOffset",
                value: function () {
                  return this.store.getState().dragOffset.clientOffset;
                },
              },
              {
                key: "getSourceClientOffset",
                value: function () {
                  return (function (e) {
                    var t = e.clientOffset,
                      n = e.initialClientOffset,
                      r = e.initialSourceClientOffset;
                    return t && n && r
                      ? H({ x: t.x + r.x, y: t.y + r.y }, n)
                      : null;
                  })(this.store.getState().dragOffset);
                },
              },
              {
                key: "getDifferenceFromInitialOffset",
                value: function () {
                  var e, t, n;
                  return (
                    (t = (e = this.store.getState().dragOffset).clientOffset),
                    (n = e.initialClientOffset),
                    t && n ? H(t, n) : null
                  );
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
        z = 0;
      function q(e) {
        return (q =
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
      function K(e, t) {
        t && Array.isArray(e)
          ? e.forEach(function (e) {
              return K(e, !1);
            })
          : (0, u.V)(
              "string" == typeof e || "symbol" === q(e),
              t
                ? "Type can only be a string, a symbol, or an array of either."
                : "Type can only be a string or a symbol.",
            );
      }
      ((i = a || (a = {})).SOURCE = "SOURCE"), (i.TARGET = "TARGET");
      let X = "u" > typeof global ? global : self,
        Y = X.MutationObserver || X.WebKitMutationObserver;
      function Z(e) {
        return function () {
          let t = setTimeout(r, 0),
            n = setInterval(r, 50);
          function r() {
            clearTimeout(t), clearInterval(n), e();
          }
        };
      }
      let Q =
        "function" == typeof Y
          ? function (e) {
              let t = 1,
                n = new Y(e),
                r = document.createTextNode("");
              return (
                n.observe(r, { characterData: !0 }),
                function () {
                  r.data = t = -t;
                }
              );
            }
          : Z;
      class J {
        call() {
          try {
            this.task && this.task();
          } catch (e) {
            this.onError(e);
          } finally {
            (this.task = null), this.release(this);
          }
        }
        constructor(e, t) {
          (this.onError = e), (this.release = t), (this.task = null);
        }
      }
      let $ = new (class {
          enqueueTask(e) {
            let { queue: t, requestFlush: n } = this;
            t.length || (n(), (this.flushing = !0)), (t[t.length] = e);
          }
          constructor() {
            (this.queue = []),
              (this.pendingErrors = []),
              (this.flushing = !1),
              (this.index = 0),
              (this.capacity = 1024),
              (this.flush = () => {
                let { queue: e } = this;
                for (; this.index < e.length; ) {
                  let t = this.index;
                  if ((this.index++, e[t].call(), this.index > this.capacity)) {
                    for (let t = 0, n = e.length - this.index; t < n; t++)
                      e[t] = e[t + this.index];
                    (e.length -= this.index), (this.index = 0);
                  }
                }
                (e.length = 0), (this.index = 0), (this.flushing = !1);
              }),
              (this.registerPendingError = (e) => {
                this.pendingErrors.push(e), this.requestErrorThrow();
              }),
              (this.requestFlush = Q(this.flush)),
              (this.requestErrorThrow = Z(() => {
                if (this.pendingErrors.length) throw this.pendingErrors.shift();
              }));
          }
        })(),
        ee = new (class {
          create(e) {
            let t = this.freeTasks,
              n = t.length
                ? t.pop()
                : new J(this.onError, (e) => (t[t.length] = e));
            return (n.task = e), n;
          }
          constructor(e) {
            (this.onError = e), (this.freeTasks = []);
          }
        })($.registerPendingError);
      function et(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function en(e) {
        switch (e[0]) {
          case "S":
            return a.SOURCE;
          case "T":
            return a.TARGET;
          default:
            (0, u.V)(!1, "Cannot parse handler ID: ".concat(e));
        }
      }
      function er(e, t) {
        var n = e.entries(),
          r = !1;
        do {
          var i,
            a = n.next(),
            o = a.done;
          if (
            ((function (e) {
              if (Array.isArray(e)) return e;
            })((i = a.value)) ||
              (function (e) {
                if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                  var t = [],
                    n = !0,
                    r = !1,
                    i = void 0;
                  try {
                    for (
                      var a, o = e[Symbol.iterator]();
                      !(n = (a = o.next()).done) &&
                      (t.push(a.value), 2 !== t.length);
                      n = !0
                    );
                  } catch (e) {
                    (r = !0), (i = e);
                  } finally {
                    try {
                      n || null == o.return || o.return();
                    } finally {
                      if (r) throw i;
                    }
                  }
                  return t;
                }
              })(i) ||
              (function (e) {
                if (e) {
                  if ("string" == typeof e) return et(e, 2);
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
                    return et(e, 2);
                }
              })(i) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })())[1] === t
          )
            return !0;
          r = !!o;
        } while (!r);
        return !1;
      }
      var ei = (function () {
          var e;
          function t(e) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            (this.types = new Map()),
              (this.dragSources = new Map()),
              (this.dropTargets = new Map()),
              (this.pinnedSourceId = null),
              (this.pinnedSource = null),
              (this.store = e);
          }
          return (
            (e = [
              {
                key: "addSource",
                value: function (e, t) {
                  K(e),
                    (0, u.V)(
                      "function" == typeof t.canDrag,
                      "Expected canDrag to be a function.",
                    ),
                    (0, u.V)(
                      "function" == typeof t.beginDrag,
                      "Expected beginDrag to be a function.",
                    ),
                    (0, u.V)(
                      "function" == typeof t.endDrag,
                      "Expected endDrag to be a function.",
                    );
                  var n = this.addHandler(a.SOURCE, e, t);
                  return (
                    this.store.dispatch({ type: P, payload: { sourceId: n } }),
                    n
                  );
                },
              },
              {
                key: "addTarget",
                value: function (e, t) {
                  K(e, !0),
                    (0, u.V)(
                      "function" == typeof t.canDrop,
                      "Expected canDrop to be a function.",
                    ),
                    (0, u.V)(
                      "function" == typeof t.hover,
                      "Expected hover to be a function.",
                    ),
                    (0, u.V)(
                      "function" == typeof t.drop,
                      "Expected beginDrag to be a function.",
                    );
                  var n = this.addHandler(a.TARGET, e, t);
                  return (
                    this.store.dispatch({ type: C, payload: { targetId: n } }),
                    n
                  );
                },
              },
              {
                key: "containsHandler",
                value: function (e) {
                  return er(this.dragSources, e) || er(this.dropTargets, e);
                },
              },
              {
                key: "getSource",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return (
                    (0, u.V)(this.isSourceId(e), "Expected a valid source ID."),
                    t && e === this.pinnedSourceId
                      ? this.pinnedSource
                      : this.dragSources.get(e)
                  );
                },
              },
              {
                key: "getTarget",
                value: function (e) {
                  return (
                    (0, u.V)(this.isTargetId(e), "Expected a valid target ID."),
                    this.dropTargets.get(e)
                  );
                },
              },
              {
                key: "getSourceType",
                value: function (e) {
                  return (
                    (0, u.V)(this.isSourceId(e), "Expected a valid source ID."),
                    this.types.get(e)
                  );
                },
              },
              {
                key: "getTargetType",
                value: function (e) {
                  return (
                    (0, u.V)(this.isTargetId(e), "Expected a valid target ID."),
                    this.types.get(e)
                  );
                },
              },
              {
                key: "isSourceId",
                value: function (e) {
                  return en(e) === a.SOURCE;
                },
              },
              {
                key: "isTargetId",
                value: function (e) {
                  return en(e) === a.TARGET;
                },
              },
              {
                key: "removeSource",
                value: function (e) {
                  var t = this;
                  (0, u.V)(this.getSource(e), "Expected an existing source."),
                    this.store.dispatch({ type: L, payload: { sourceId: e } }),
                    $.enqueueTask(
                      ee.create(function () {
                        t.dragSources.delete(e), t.types.delete(e);
                      }),
                    );
                },
              },
              {
                key: "removeTarget",
                value: function (e) {
                  (0, u.V)(this.getTarget(e), "Expected an existing target."),
                    this.store.dispatch({ type: I, payload: { targetId: e } }),
                    this.dropTargets.delete(e),
                    this.types.delete(e);
                },
              },
              {
                key: "pinSource",
                value: function (e) {
                  var t = this.getSource(e);
                  (0, u.V)(t, "Expected an existing source."),
                    (this.pinnedSourceId = e),
                    (this.pinnedSource = t);
                },
              },
              {
                key: "unpinSource",
                value: function () {
                  (0, u.V)(
                    this.pinnedSource,
                    "No source is pinned at the time.",
                  ),
                    (this.pinnedSourceId = null),
                    (this.pinnedSource = null);
                },
              },
              {
                key: "addHandler",
                value: function (e, t, n) {
                  var r = (function (e) {
                    var t = (z++).toString();
                    switch (e) {
                      case a.SOURCE:
                        return "S".concat(t);
                      case a.TARGET:
                        return "T".concat(t);
                      default:
                        throw Error("Unknown Handler Role: ".concat(e));
                    }
                  })(e);
                  return (
                    this.types.set(r, t),
                    e === a.SOURCE
                      ? this.dragSources.set(r, n)
                      : e === a.TARGET && this.dropTargets.set(r, n),
                    r
                  );
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
        ea = n(818884),
        eo = ["children"];
      function es(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var eu = 0,
        ec = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
        el = (0, o.memo)(function (e) {
          var t,
            n,
            r = e.children,
            i =
              (function (e) {
                if (Array.isArray(e)) return e;
              })(
                (n =
                  "manager" in
                  (t = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                          r,
                          i = {},
                          a = Object.keys(e);
                        for (r = 0; r < a.length; r++)
                          (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                      })(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < a.length; r++)
                        (n = a[r]),
                          !(t.indexOf(n) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                            (i[n] = e[n]);
                    }
                    return i;
                  })(e, eo))
                    ? [{ dragDropManager: t.manager }, !1]
                    : [
                        (function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : ed(),
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = arguments.length > 3 ? arguments[3] : void 0;
                          return (
                            t[ec] ||
                              (t[ec] = {
                                dragDropManager: (function (e) {
                                  var t,
                                    n,
                                    r =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : void 0,
                                    i =
                                      arguments.length > 2 &&
                                      void 0 !== arguments[2]
                                        ? arguments[2]
                                        : {},
                                    a =
                                      arguments.length > 3 &&
                                      void 0 !== arguments[3] &&
                                      arguments[3],
                                    o =
                                      ((t = a),
                                      (n =
                                        "u" > typeof window &&
                                        window.__REDUX_DEVTOOLS_EXTENSION__),
                                      (function e(t, n, r) {
                                        if (
                                          ("function" == typeof n &&
                                            "function" == typeof r) ||
                                          ("function" == typeof r &&
                                            "function" == typeof arguments[3])
                                        )
                                          throw Error(E(0));
                                        if (
                                          ("function" == typeof n &&
                                            void 0 === r &&
                                            ((r = n), (n = void 0)),
                                          void 0 !== r)
                                        ) {
                                          if ("function" != typeof r)
                                            throw Error(E(1));
                                          return r(e)(t, n);
                                        }
                                        if ("function" != typeof t)
                                          throw Error(E(2));
                                        var i,
                                          a = t,
                                          o = n,
                                          s = [],
                                          u = s,
                                          c = !1;
                                        function l() {
                                          u === s && (u = s.slice());
                                        }
                                        function d() {
                                          if (c) throw Error(E(3));
                                          return o;
                                        }
                                        function f(e) {
                                          if ("function" != typeof e)
                                            throw Error(E(4));
                                          if (c) throw Error(E(5));
                                          var t = !0;
                                          return (
                                            l(),
                                            u.push(e),
                                            function () {
                                              if (t) {
                                                if (c) throw Error(E(6));
                                                (t = !1), l();
                                                var n = u.indexOf(e);
                                                u.splice(n, 1), (s = null);
                                              }
                                            }
                                          );
                                        }
                                        function h(e) {
                                          if (
                                            !(function (e) {
                                              if (
                                                "object" != typeof e ||
                                                null === e
                                              )
                                                return !1;
                                              for (
                                                var t = e;
                                                null !==
                                                Object.getPrototypeOf(t);

                                              )
                                                t = Object.getPrototypeOf(t);
                                              return (
                                                Object.getPrototypeOf(e) === t
                                              );
                                            })(e)
                                          )
                                            throw Error(E(7));
                                          if (void 0 === e.type)
                                            throw Error(E(8));
                                          if (c) throw Error(E(9));
                                          try {
                                            (c = !0), (o = a(o, e));
                                          } finally {
                                            c = !1;
                                          }
                                          for (
                                            var t = (s = u), n = 0;
                                            n < t.length;
                                            n++
                                          )
                                            (0, t[n])();
                                          return e;
                                        }
                                        return (
                                          h({ type: k.INIT }),
                                          ((i = {
                                            dispatch: h,
                                            subscribe: f,
                                            getState: d,
                                            replaceReducer: function (e) {
                                              if ("function" != typeof e)
                                                throw Error(E(10));
                                              (a = e), h({ type: k.REPLACE });
                                            },
                                          })[x] = function () {
                                            var e;
                                            return (
                                              ((e = {
                                                subscribe: function (e) {
                                                  if (
                                                    "object" != typeof e ||
                                                    null === e
                                                  )
                                                    throw Error(E(11));
                                                  function t() {
                                                    e.next && e.next(d());
                                                  }
                                                  return (
                                                    t(), { unsubscribe: f(t) }
                                                  );
                                                },
                                              })[x] = function () {
                                                return this;
                                              }),
                                              e
                                            );
                                          }),
                                          i
                                        );
                                      })(
                                        G,
                                        t &&
                                          n &&
                                          n({
                                            name: "dnd-core",
                                            instanceId: "dnd-core",
                                          }),
                                      )),
                                    s = new W(o, new ei(o)),
                                    u = new T(o, s),
                                    c = e(u, r, i);
                                  return u.receiveBackend(c), u;
                                })(e, t, n, r),
                              }),
                            t[ec]
                          );
                        })(t.backend, t.context, t.options, t.debugMode),
                        !t.context,
                      ]),
              ) ||
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
                    o = !1;
                  try {
                    for (
                      r = r.call(e);
                      !(a = (t = r.next()).done) &&
                      (i.push(t.value), 2 !== i.length);
                      a = !0
                    );
                  } catch (e) {
                    (o = !0), (n = e);
                  } finally {
                    try {
                      a || null == r.return || r.return();
                    } finally {
                      if (o) throw n;
                    }
                  }
                  return i;
                }
              })(n) ||
              (function (e) {
                if (e) {
                  if ("string" == typeof e) return es(e, 2);
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
                    return es(e, 2);
                }
              })(n) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })(),
            a = i[0],
            u = i[1];
          return (
            (0, o.useEffect)(function () {
              if (u) {
                var e = ed();
                return (
                  ++eu,
                  function () {
                    0 == --eu && (e[ec] = null);
                  }
                );
              }
            }, []),
            (0, s.jsx)(
              ea.M.Provider,
              Object.assign({ value: a }, { children: r }),
              void 0,
            )
          );
        });
      function ed() {
        return void 0 !== n.g ? n.g : window;
      }
      function ef(e, t, n) {
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
      function eh(e, t) {
        var n,
          r,
          i = ep(e, t, "get");
        return (n = e), (r = i).get ? r.get.call(n) : r.value;
      }
      function ep(e, t, n) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + n + " private field on non-instance",
          );
        return t.get(e);
      }
      var em = new WeakMap();
      class eg {
        constructor() {
          !(function (e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw TypeError(
                  "Cannot initialize the same private elements twice on an object",
                );
            })(e, t),
              t.set(e, n);
          })(this, em, { writable: !0, value: void 0 }),
            ef(this, "register", (e) => {
              eh(this, em).push(e);
            }),
            ef(this, "unregister", (e) => {
              let t;
              for (; -1 !== (t = eh(this, em).indexOf(e)); )
                eh(this, em).splice(t, 1);
            }),
            ef(this, "backendChanged", (e) => {
              for (let t of eh(this, em)) t.backendChanged(e);
            }),
            (function (e, t, n) {
              var r = ep(e, t, "set"),
                i = e,
                a = r,
                o = n;
              if (a.set) a.set.call(i, o);
              else {
                if (!a.writable)
                  throw TypeError("attempted to set read only private field");
                a.value = o;
              }
            })(this, em, []);
        }
      }
      function e_(e, t, n) {
        (function (e, t) {
          if (t.has(e))
            throw TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        })(e, t),
          t.set(e, n);
      }
      function ey(e, t, n) {
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
      function ev(e, t) {
        var n,
          r,
          i = ew(e, t, "get");
        return (n = e), (r = i).get ? r.get.call(n) : r.value;
      }
      function eb(e, t, n) {
        var r = ew(e, t, "set");
        return (
          (function (e, t, n) {
            if (t.set) t.set.call(e, n);
            else {
              if (!t.writable)
                throw TypeError("attempted to set read only private field");
              t.value = n;
            }
          })(e, r, n),
          n
        );
      }
      function ew(e, t, n) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + n + " private field on non-instance",
          );
        return t.get(e);
      }
      var eT = new WeakMap(),
        eE = new WeakMap(),
        ex = new WeakMap(),
        eV = new WeakMap(),
        ek = new WeakMap(),
        eA = new WeakMap(),
        eS = new WeakMap(),
        eO = new WeakMap(),
        eR = new WeakMap(),
        eP = new WeakMap(),
        eC = new WeakMap();
      class eL {
        constructor(e, t, n) {
          if (
            (e_(this, eT, { writable: !0, value: void 0 }),
            e_(this, eE, { writable: !0, value: void 0 }),
            e_(this, ex, { writable: !0, value: void 0 }),
            e_(this, eV, { writable: !0, value: void 0 }),
            e_(this, ek, { writable: !0, value: void 0 }),
            e_(this, eA, {
              writable: !0,
              value: (e, t, n) => {
                var r, i;
                if (!n.backend)
                  throw Error(
                    "You must specify a 'backend' property in your Backend entry: ".concat(
                      JSON.stringify(n),
                    ),
                  );
                let a = n.backend(e, t, n.options),
                  o = n.id,
                  s = !n.id && a && a.constructor;
                if ((s && (o = a.constructor.name), o))
                  s &&
                    console.warn(
                      "Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.",
                    );
                else
                  throw Error(
                    "You must specify an 'id' property in your Backend entry: ".concat(
                      JSON.stringify(n),
                      "\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx",
                    ),
                  );
                if (ev(this, ex)[o])
                  throw Error(
                    "You must specify a unique 'id' property in your Backend entry:\n        "
                      .concat(JSON.stringify(n), " (conflicts with: ")
                      .concat(JSON.stringify(ev(this, ex)[o]), ")"),
                  );
                return {
                  id: o,
                  instance: a,
                  preview: null != (r = n.preview) && r,
                  transition: n.transition,
                  skipDispatchOnTransition:
                    null != (i = n.skipDispatchOnTransition) && i,
                };
              },
            }),
            ey(this, "setup", () => {
              if ("u" > typeof window) {
                if (eL.isSetUp)
                  throw Error(
                    "Cannot have two MultiBackends at the same time.",
                  );
                (eL.isSetUp = !0),
                  ev(this, eS).call(this, window),
                  ev(this, ex)[ev(this, eT)].instance.setup();
              }
            }),
            ey(this, "teardown", () => {
              "u" > typeof window &&
                ((eL.isSetUp = !1),
                ev(this, eO).call(this, window),
                ev(this, ex)[ev(this, eT)].instance.teardown());
            }),
            ey(this, "connectDragSource", (e, t, n) =>
              ev(this, eC).call(this, "connectDragSource", e, t, n),
            ),
            ey(this, "connectDragPreview", (e, t, n) =>
              ev(this, eC).call(this, "connectDragPreview", e, t, n),
            ),
            ey(this, "connectDropTarget", (e, t, n) =>
              ev(this, eC).call(this, "connectDropTarget", e, t, n),
            ),
            ey(this, "profile", () =>
              ev(this, ex)[ev(this, eT)].instance.profile(),
            ),
            ey(
              this,
              "previewEnabled",
              () => ev(this, ex)[ev(this, eT)].preview,
            ),
            ey(this, "previewsList", () => ev(this, eE)),
            ey(this, "backendsList", () => ev(this, eV)),
            e_(this, eS, {
              writable: !0,
              value: (e) => {
                ev(this, eV).forEach((t) => {
                  t.transition &&
                    e.addEventListener(t.transition.event, ev(this, eR));
                });
              },
            }),
            e_(this, eO, {
              writable: !0,
              value: (e) => {
                ev(this, eV).forEach((t) => {
                  t.transition &&
                    e.removeEventListener(t.transition.event, ev(this, eR));
                });
              },
            }),
            e_(this, eR, {
              writable: !0,
              value: (e) => {
                let t = ev(this, eT);
                if (
                  (ev(this, eV).some(
                    (t) =>
                      !!(
                        t.id !== ev(this, eT) &&
                        t.transition &&
                        t.transition.check(e)
                      ) && (eb(this, eT, t.id), !0),
                  ),
                  ev(this, eT) !== t)
                ) {
                  var n;
                  ev(this, ex)[t].instance.teardown(),
                    Object.keys(ev(this, ek)).forEach((e) => {
                      let t = ev(this, ek)[e];
                      t.unsubscribe(),
                        (t.unsubscribe = ev(this, eP).call(
                          this,
                          t.func,
                          ...t.args,
                        ));
                    }),
                    ev(this, eE).backendChanged(this);
                  let r = ev(this, ex)[ev(this, eT)];
                  if ((r.instance.setup(), r.skipDispatchOnTransition)) return;
                  let i = new e.constructor(e.type, e);
                  null == (n = e.target) || n.dispatchEvent(i);
                }
              },
            }),
            e_(this, eP, {
              writable: !0,
              value: (e, t, n, r) =>
                ev(this, ex)[ev(this, eT)].instance[e](t, n, r),
            }),
            e_(this, eC, {
              writable: !0,
              value: (e, t, n, r) => {
                let i = "".concat(e, "_").concat(t),
                  a = ev(this, eP).call(this, e, t, n, r);
                return (
                  (ev(this, ek)[i] = {
                    func: e,
                    args: [t, n, r],
                    unsubscribe: a,
                  }),
                  () => {
                    ev(this, ek)[i].unsubscribe(), delete ev(this, ek)[i];
                  }
                );
              },
            }),
            !n || !n.backends || n.backends.length < 1)
          )
            throw Error(
              "You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx",
            );
          eb(this, eE, new eg()),
            eb(this, ex, {}),
            eb(this, eV, []),
            n.backends.forEach((n) => {
              let r = ev(this, eA).call(this, e, t, n);
              (ev(this, ex)[r.id] = r), ev(this, eV).push(r);
            }),
            eb(this, eT, ev(this, eV)[0].id),
            eb(this, ek, {});
        }
      }
      ey(eL, "isSetUp", !1);
      let eI = (e, t, n) => new eL(e, t, n);
      function eD() {
        return (eD =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function eM(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var eU = (0, o.createContext)(null),
        ej = function (e) {
          var t,
            n = e.portal,
            r = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    i = {},
                    a = Object.keys(e);
                  for (r = 0; r < a.length; r++)
                    (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                  return i;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]),
                    !(t.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (i[n] = e[n]);
              }
              return i;
            })(e, ["portal"]),
            i =
              (function (e) {
                if (Array.isArray(e)) return e;
              })((t = (0, o.useState)(null))) ||
              (function (e) {
                if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                  var t = [],
                    n = !0,
                    r = !1,
                    i = void 0;
                  try {
                    for (
                      var a, o = e[Symbol.iterator]();
                      !(n = (a = o.next()).done) &&
                      (t.push(a.value), 2 !== t.length);
                      n = !0
                    );
                  } catch (e) {
                    (r = !0), (i = e);
                  } finally {
                    try {
                      n || null == o.return || o.return();
                    } finally {
                      if (r) throw i;
                    }
                  }
                  return t;
                }
              })(t) ||
              (function (e) {
                if (e) {
                  if ("string" == typeof e) return eM(e, 2);
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
                    return eM(e, 2);
                }
              })(t) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })(),
            a = i[0],
            s = i[1];
          return o.createElement(
            eU.Provider,
            { value: null != n ? n : a },
            o.createElement(el, eD({ backend: eI }, r)),
            n ? null : o.createElement("div", { ref: s }),
          );
        },
        eF = (n(333007), n(686246));
    },
    818884(e, t, n) {
      "use strict";
      n.d(t, { M: () => r });
      var r = (0, n(582128).createContext)({ dragDropManager: void 0 });
    },
    964966(e, t, n) {
      "use strict";
      n.d(t, { F: () => u });
      var r = n(707040),
        i = n.n(r),
        a = n(582128),
        o = n(914707);
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t, n) {
        var r,
          u =
            (function (e) {
              if (Array.isArray(e)) return e;
            })(
              (r = (0, a.useState)(function () {
                return t(e);
              })),
            ) ||
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
                  o = !1;
                try {
                  for (
                    r = r.call(e);
                    !(a = (t = r.next()).done) &&
                    (i.push(t.value), 2 !== i.length);
                    a = !0
                  );
                } catch (e) {
                  (o = !0), (n = e);
                } finally {
                  try {
                    a || null == r.return || r.return();
                  } finally {
                    if (o) throw n;
                  }
                }
                return i;
              }
            })(r) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return s(e, 2);
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
                  return s(e, 2);
              }
            })(r) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(),
          c = u[0],
          l = u[1],
          d = (0, a.useCallback)(
            function () {
              var r = t(e);
              !i()(c, r) && (l(r), n && n());
            },
            [c, e, n],
          );
        return (0, o.E)(d), [c, d];
      }
    },
    225995(e, t, n) {
      "use strict";
      n.d(t, { u: () => o });
      var r = n(582128),
        i = n(321733),
        a = n(818884);
      function o() {
        var e = (0, r.useContext)(a.M).dragDropManager;
        return (0, i.V)(null != e, "Expected drag drop context"), e;
      }
    },
    686246(e, t, n) {
      "use strict";
      n.d(t, { V: () => s });
      var r = n(582128),
        i = n(225995),
        a = n(964966);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e) {
        var t,
          n = (0, i.u)().getMonitor(),
          s =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((t = (0, a.F)(n, e))) ||
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
                  o = !1;
                try {
                  for (
                    r = r.call(e);
                    !(a = (t = r.next()).done) &&
                    (i.push(t.value), 2 !== i.length);
                    a = !0
                  );
                } catch (e) {
                  (o = !0), (n = e);
                } finally {
                  try {
                    a || null == r.return || r.return();
                  } finally {
                    if (o) throw n;
                  }
                }
                return i;
              }
            })(t) ||
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
            })(t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(),
          u = s[0],
          c = s[1];
        return (
          (0, r.useEffect)(function () {
            return n.subscribeToOffsetChange(c);
          }),
          (0, r.useEffect)(function () {
            return n.subscribeToStateChange(c);
          }),
          u
        );
      }
    },
    914707(e, t, n) {
      "use strict";
      n.d(t, { E: () => i });
      var r = n(582128),
        i = "u" > typeof window ? r.useLayoutEffect : r.useEffect;
    },
    667498(e, t, n) {
      "use strict";
      n.d(t, { mg: () => Q, vd: () => H });
      var r = n(582128),
        i = n(655972),
        a = n.n(i),
        o = n(412700),
        s = n.n(o),
        u = n(284009),
        c = n.n(u),
        l = n(859141),
        d = n.n(l);
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function h(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          p(e, t);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function m(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          t.indexOf((n = a[r])) >= 0 || (i[n] = e[n]);
        return i;
      }
      var g = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
          FRAGMENT: "Symbol(react.fragment)",
        },
        _ = { rel: ["amphtml", "canonical", "alternate"] },
        y = { type: ["application/ld+json"] },
        v = {
          charset: "",
          name: ["robots", "description"],
          property: [
            "og:type",
            "og:title",
            "og:url",
            "og:image",
            "og:image:alt",
            "og:description",
            "twitter:url",
            "twitter:title",
            "twitter:description",
            "twitter:image",
            "twitter:image:alt",
            "twitter:card",
            "twitter:site",
          ],
        },
        b = Object.keys(g).map(function (e) {
          return g[e];
        }),
        w = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        T = Object.keys(w).reduce(function (e, t) {
          return (e[w[t]] = t), e;
        }, {}),
        E = function (e, t) {
          for (var n = e.length - 1; n >= 0; n -= 1) {
            var r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
          }
          return null;
        },
        x = function (e) {
          var t = E(e, g.TITLE),
            n = E(e, "titleTemplate");
          if ((Array.isArray(t) && (t = t.join("")), n && t))
            return n.replace(/%s/g, function () {
              return t;
            });
          var r = E(e, "defaultTitle");
          return t || r || void 0;
        },
        V = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return f({}, e, t);
            }, {});
        },
        k = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  console &&
                  "function" == typeof console.warn &&
                  console.warn(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      typeof t[e] +
                      '"',
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var i = {};
              n.filter(function (e) {
                for (var n, a = Object.keys(e), o = 0; o < a.length; o += 1) {
                  var s = a[o],
                    u = s.toLowerCase();
                  -1 === t.indexOf(u) ||
                    ("rel" === n && "canonical" === e[n].toLowerCase()) ||
                    ("rel" === u && "stylesheet" === e[u].toLowerCase()) ||
                    (n = u),
                    -1 === t.indexOf(s) ||
                      ("innerHTML" !== s &&
                        "cssText" !== s &&
                        "itemprop" !== s) ||
                      (n = s);
                }
                if (!n || !e[n]) return !1;
                var c = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  i[n] || (i[n] = {}),
                  !r[n][c] && ((i[n][c] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var a = Object.keys(i), o = 0; o < a.length; o += 1) {
                var s = a[o],
                  u = f({}, r[s], i[s]);
                r[s] = u;
              }
              return e;
            }, [])
            .reverse();
        },
        A = function (e, t) {
          if (Array.isArray(e) && e.length) {
            for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
          }
          return !1;
        },
        S = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        O = function (e, t) {
          return Array.isArray(e)
            ? e.reduce(
                function (e, n) {
                  return (
                    !(function (e, t) {
                      for (var n = Object.keys(e), r = 0; r < n.length; r += 1)
                        if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
                      return !1;
                    })(n, t)
                      ? e.default.push(n)
                      : e.priority.push(n),
                    e
                  );
                },
                { priority: [], default: [] },
              )
            : { default: e };
        },
        R = function (e, t) {
          var n;
          return f({}, e, (((n = {})[t] = void 0), n));
        },
        P = [g.NOSCRIPT, g.SCRIPT, g.STYLE],
        C = function (e, t) {
          return (
            void 0 === t && (t = !0),
            !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;")
          );
        },
        L = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        I = function (e, t) {
          return (
            void 0 === t && (t = {}),
            Object.keys(e).reduce(function (t, n) {
              return (t[w[n] || n] = e[n]), t;
            }, t)
          );
        },
        D = function (e, t) {
          return t.map(function (t, n) {
            var i,
              a = (((i = { key: n })["data-rh"] = !0), i);
            return (
              Object.keys(t).forEach(function (e) {
                var n = w[e] || e;
                "innerHTML" === n || "cssText" === n
                  ? (a.dangerouslySetInnerHTML = {
                      __html: t.innerHTML || t.cssText,
                    })
                  : (a[n] = t[e]);
              }),
              r.createElement(e, a)
            );
          });
        },
        M = function (e, t, n) {
          switch (e) {
            case g.TITLE:
              return {
                toComponent: function () {
                  var e, n, i, a;
                  return (
                    (n = t.titleAttributes),
                    ((i = { key: (e = t.title) })["data-rh"] = !0),
                    (a = I(n, i)),
                    [r.createElement(g.TITLE, a, e)]
                  );
                },
                toString: function () {
                  var r, i, a, o;
                  return (
                    (r = t.title),
                    (i = t.titleAttributes),
                    (a = L(i)),
                    (o = S(r)),
                    a
                      ? "<" +
                        e +
                        ' data-rh="true" ' +
                        a +
                        ">" +
                        C(o, n) +
                        "</" +
                        e +
                        ">"
                      : "<" + e + ' data-rh="true">' + C(o, n) + "</" + e + ">"
                  );
                },
              };
            case "bodyAttributes":
            case "htmlAttributes":
              return {
                toComponent: function () {
                  return I(t);
                },
                toString: function () {
                  return L(t);
                },
              };
            default:
              return {
                toComponent: function () {
                  return D(e, t);
                },
                toString: function () {
                  return t.reduce(function (t, r) {
                    var i = Object.keys(r)
                        .filter(function (e) {
                          return "innerHTML" !== e && "cssText" !== e;
                        })
                        .reduce(function (e, t) {
                          var i =
                            void 0 === r[t] ? t : t + '="' + C(r[t], n) + '"';
                          return e ? e + " " + i : i;
                        }, ""),
                      a = r.innerHTML || r.cssText || "",
                      o = -1 === P.indexOf(e);
                    return (
                      t +
                      "<" +
                      e +
                      ' data-rh="true" ' +
                      i +
                      (o ? "/>" : ">" + a + "</" + e + ">")
                    );
                  }, "");
                },
              };
          }
        },
        U = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            i = e.htmlAttributes,
            a = e.noscriptTags,
            o = e.styleTags,
            s = e.title,
            u = e.titleAttributes,
            c = e.linkTags,
            l = e.metaTags,
            d = e.scriptTags,
            f = {
              toComponent: function () {},
              toString: function () {
                return "";
              },
            };
          if (e.prioritizeSeoTags) {
            var h,
              p,
              m,
              b,
              w,
              T,
              E =
                ((h = e.linkTags),
                (p = e.scriptTags),
                (m = e.encode),
                (b = O(e.metaTags, v)),
                (w = O(h, _)),
                (T = O(p, y)),
                {
                  priorityMethods: {
                    toComponent: function () {
                      return [].concat(
                        D(g.META, b.priority),
                        D(g.LINK, w.priority),
                        D(g.SCRIPT, T.priority),
                      );
                    },
                    toString: function () {
                      return (
                        M(g.META, b.priority, m) +
                        " " +
                        M(g.LINK, w.priority, m) +
                        " " +
                        M(g.SCRIPT, T.priority, m)
                      );
                    },
                  },
                  metaTags: b.default,
                  linkTags: w.default,
                  scriptTags: T.default,
                });
            (f = E.priorityMethods),
              (c = E.linkTags),
              (l = E.metaTags),
              (d = E.scriptTags);
          }
          return {
            priority: f,
            base: M(g.BASE, t, r),
            bodyAttributes: M("bodyAttributes", n, r),
            htmlAttributes: M("htmlAttributes", i, r),
            link: M(g.LINK, c, r),
            meta: M(g.META, l, r),
            noscript: M(g.NOSCRIPT, a, r),
            script: M(g.SCRIPT, d, r),
            style: M(g.STYLE, o, r),
            title: M(
              g.TITLE,
              { title: void 0 === s ? "" : s, titleAttributes: u },
              r,
            ),
          };
        },
        j = [],
        F = function (e, t) {
          var n = this;
          void 0 === t && (t = "u" > typeof document),
            (this.instances = []),
            (this.value = {
              setHelmet: function (e) {
                n.context.helmet = e;
              },
              helmetInstances: {
                get: function () {
                  return n.canUseDOM ? j : n.instances;
                },
                add: function (e) {
                  (n.canUseDOM ? j : n.instances).push(e);
                },
                remove: function (e) {
                  var t = (n.canUseDOM ? j : n.instances).indexOf(e);
                  (n.canUseDOM ? j : n.instances).splice(t, 1);
                },
              },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
              (e.helmet = U({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {},
              }));
        },
        N = r.createContext({}),
        B = a().shape({
          setHelmet: a().func,
          helmetInstances: a().shape({
            get: a().func,
            add: a().func,
            remove: a().func,
          }),
        }),
        G = "u" > typeof document,
        H = (function (e) {
          function t(n) {
            var r;
            return (
              ((r = e.call(this, n) || this).helmetData = new F(
                r.props.context,
                t.canUseDOM,
              )),
              r
            );
          }
          return (
            h(t, e),
            (t.prototype.render = function () {
              return r.createElement(
                N.Provider,
                { value: this.helmetData.value },
                this.props.children,
              );
            }),
            t
          );
        })(r.Component);
      (H.canUseDOM = G),
        (H.propTypes = {
          context: a().shape({ helmet: a().shape() }),
          children: a().node.isRequired,
        }),
        (H.defaultProps = { context: {} }),
        (H.displayName = "HelmetProvider");
      var W = function (e, t) {
          var n,
            r = document.head || document.querySelector(g.HEAD),
            i = r.querySelectorAll(e + "[data-rh]"),
            a = [].slice.call(i),
            o = [];
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var r = document.createElement(e);
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) &&
                    ("innerHTML" === i
                      ? (r.innerHTML = t.innerHTML)
                      : "cssText" === i
                        ? r.styleSheet
                          ? (r.styleSheet.cssText = t.cssText)
                          : r.appendChild(document.createTextNode(t.cssText))
                        : r.setAttribute(i, void 0 === t[i] ? "" : t[i]));
                r.setAttribute("data-rh", "true"),
                  a.some(function (e, t) {
                    return (n = t), r.isEqualNode(e);
                  })
                    ? a.splice(n, 1)
                    : o.push(r);
              }),
            a.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            o.forEach(function (e) {
              return r.appendChild(e);
            }),
            { oldTags: a, newTags: o }
          );
        },
        z = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute("data-rh"),
                i = r ? r.split(",") : [],
                a = [].concat(i),
                o = Object.keys(t),
                s = 0;
              s < o.length;
              s += 1
            ) {
              var u = o[s],
                c = t[u] || "";
              n.getAttribute(u) !== c && n.setAttribute(u, c),
                -1 === i.indexOf(u) && i.push(u);
              var l = a.indexOf(u);
              -1 !== l && a.splice(l, 1);
            }
            for (var d = a.length - 1; d >= 0; d -= 1) n.removeAttribute(a[d]);
            i.length === a.length
              ? n.removeAttribute("data-rh")
              : n.getAttribute("data-rh") !== o.join(",") &&
                n.setAttribute("data-rh", o.join(","));
          }
        },
        q = function (e, t) {
          var n = e.baseTag,
            r = e.htmlAttributes,
            i = e.linkTags,
            a = e.metaTags,
            o = e.noscriptTags,
            s = e.onChangeClientState,
            u = e.scriptTags,
            c = e.styleTags,
            l = e.title,
            d = e.titleAttributes;
          z(g.BODY, e.bodyAttributes),
            z(g.HTML, r),
            void 0 !== l && document.title !== l && (document.title = S(l)),
            z(g.TITLE, d);
          var f = {
              baseTag: W(g.BASE, n),
              linkTags: W(g.LINK, i),
              metaTags: W(g.META, a),
              noscriptTags: W(g.NOSCRIPT, o),
              scriptTags: W(g.SCRIPT, u),
              styleTags: W(g.STYLE, c),
            },
            h = {},
            p = {};
          Object.keys(f).forEach(function (e) {
            var t = f[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (h[e] = n), r.length && (p[e] = f[e].oldTags);
          }),
            t && t(),
            s(e, h, p);
        },
        K = null,
        X = (function (e) {
          function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).rendered = !1), t
            );
          }
          h(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !d()(e, this.props);
            }),
            (n.componentDidUpdate = function () {
              this.emitChange();
            }),
            (n.componentWillUnmount = function () {
              this.props.context.helmetInstances.remove(this),
                this.emitChange();
            }),
            (n.emitChange = function () {
              var e,
                t,
                n = this.props.context,
                r = n.setHelmet,
                i = null,
                a = {
                  baseTag:
                    ((e = ["href"]),
                    (t = n.helmetInstances.get().map(function (e) {
                      var t = f({}, e.props);
                      return delete t.context, t;
                    }))
                      .filter(function (e) {
                        return void 0 !== e[g.BASE];
                      })
                      .map(function (e) {
                        return e[g.BASE];
                      })
                      .reverse()
                      .reduce(function (t, n) {
                        if (!t.length)
                          for (
                            var r = Object.keys(n), i = 0;
                            i < r.length;
                            i += 1
                          ) {
                            var a = r[i].toLowerCase();
                            if (-1 !== e.indexOf(a) && n[a]) return t.concat(n);
                          }
                        return t;
                      }, [])),
                  bodyAttributes: V("bodyAttributes", t),
                  defer: E(t, "defer"),
                  encode: E(t, "encodeSpecialCharacters"),
                  htmlAttributes: V("htmlAttributes", t),
                  linkTags: k(g.LINK, ["rel", "href"], t),
                  metaTags: k(
                    g.META,
                    ["name", "charset", "http-equiv", "property", "itemprop"],
                    t,
                  ),
                  noscriptTags: k(g.NOSCRIPT, ["innerHTML"], t),
                  onChangeClientState:
                    E(t, "onChangeClientState") || function () {},
                  scriptTags: k(g.SCRIPT, ["src", "innerHTML"], t),
                  styleTags: k(g.STYLE, ["cssText"], t),
                  title: x(t),
                  titleAttributes: V("titleAttributes", t),
                  prioritizeSeoTags: A(t, "prioritizeSeoTags"),
                };
              H.canUseDOM
                ? (K && cancelAnimationFrame(K),
                  a.defer
                    ? (K = requestAnimationFrame(function () {
                        q(a, function () {
                          K = null;
                        });
                      }))
                    : (q(a), (K = null)))
                : U && (i = U(a)),
                r(i);
            }),
            (n.init = function () {
              this.rendered ||
                ((this.rendered = !0),
                this.props.context.helmetInstances.add(this),
                this.emitChange());
            }),
            (n.render = function () {
              return this.init(), null;
            }),
            t
          );
        })(r.Component);
      (X.propTypes = { context: B.isRequired }),
        (X.displayName = "HelmetDispatcher");
      var Y = ["children"],
        Z = ["children"],
        Q = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          h(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !s()(R(this.props, "helmetData"), R(e, "helmetData"));
            }),
            (n.mapNestedChildrenToProps = function (e, t) {
              if (!t) return null;
              switch (e.type) {
                case g.SCRIPT:
                case g.NOSCRIPT:
                  return { innerHTML: t };
                case g.STYLE:
                  return { cssText: t };
                default:
                  throw Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information.",
                  );
              }
            }),
            (n.flattenArrayTypeChildren = function (e) {
              var t,
                n = e.child,
                r = e.arrayTypeChildren;
              return f(
                {},
                r,
                (((t = {})[n.type] = [].concat(r[n.type] || [], [
                  f(
                    {},
                    e.newChildProps,
                    this.mapNestedChildrenToProps(n, e.nestedChildren),
                  ),
                ])),
                t),
              );
            }),
            (n.mapObjectTypeChildren = function (e) {
              var t,
                n,
                r = e.child,
                i = e.newProps,
                a = e.newChildProps,
                o = e.nestedChildren;
              switch (r.type) {
                case g.TITLE:
                  return f(
                    {},
                    i,
                    (((t = {})[r.type] = o), (t.titleAttributes = f({}, a)), t),
                  );
                case g.BODY:
                  return f({}, i, { bodyAttributes: f({}, a) });
                case g.HTML:
                  return f({}, i, { htmlAttributes: f({}, a) });
                default:
                  return f({}, i, (((n = {})[r.type] = f({}, a)), n));
              }
            }),
            (n.mapArrayTypeChildrenToProps = function (e, t) {
              var n = f({}, t);
              return (
                Object.keys(e).forEach(function (t) {
                  var r;
                  n = f({}, n, (((r = {})[t] = e[t]), r));
                }),
                n
              );
            }),
            (n.warnOnInvalidChildren = function (e, t) {
              return (
                c()(
                  b.some(function (t) {
                    return e.type === t;
                  }),
                  "function" == typeof e.type
                    ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
                    : "Only elements types " +
                        b.join(", ") +
                        " are allowed. Helmet does not support rendering <" +
                        e.type +
                        "> elements. Refer to our API for more information.",
                ),
                c()(
                  !t ||
                    "string" == typeof t ||
                    (Array.isArray(t) &&
                      !t.some(function (e) {
                        return "string" != typeof e;
                      })),
                  "Helmet expects a string as a child of <" +
                    e.type +
                    ">. Did you forget to wrap your children in braces? ( <" +
                    e.type +
                    ">{``}</" +
                    e.type +
                    "> ) Refer to our API for more information.",
                ),
                !0
              );
            }),
            (n.mapChildrenToProps = function (e, t) {
              var n = this,
                i = {};
              return (
                r.Children.forEach(e, function (e) {
                  if (e && e.props) {
                    var r = e.props,
                      a = r.children,
                      o = m(r, Y),
                      s = Object.keys(o).reduce(function (e, t) {
                        return (e[T[t] || t] = o[t]), e;
                      }, {}),
                      u = e.type;
                    switch (
                      ("symbol" == typeof u
                        ? (u = u.toString())
                        : n.warnOnInvalidChildren(e, a),
                      u)
                    ) {
                      case g.FRAGMENT:
                        t = n.mapChildrenToProps(a, t);
                        break;
                      case g.LINK:
                      case g.META:
                      case g.NOSCRIPT:
                      case g.SCRIPT:
                      case g.STYLE:
                        i = n.flattenArrayTypeChildren({
                          child: e,
                          arrayTypeChildren: i,
                          newChildProps: s,
                          nestedChildren: a,
                        });
                        break;
                      default:
                        t = n.mapObjectTypeChildren({
                          child: e,
                          newProps: t,
                          newChildProps: s,
                          nestedChildren: a,
                        });
                    }
                  }
                }),
                this.mapArrayTypeChildrenToProps(i, t)
              );
            }),
            (n.render = function () {
              var e = this.props,
                t = e.children,
                n = m(e, Z),
                i = f({}, n),
                a = n.helmetData;
              return (
                t && (i = this.mapChildrenToProps(t, i)),
                !a || a instanceof F || (a = new F(a.context, a.instances)),
                a
                  ? r.createElement(
                      X,
                      f({}, i, { context: a.value, helmetData: void 0 }),
                    )
                  : r.createElement(N.Consumer, null, function (e) {
                      return r.createElement(X, f({}, i, { context: e }));
                    })
              );
            }),
            t
          );
        })(r.Component);
      (Q.propTypes = {
        base: a().object,
        bodyAttributes: a().object,
        children: a().oneOfType([a().arrayOf(a().node), a().node]),
        defaultTitle: a().string,
        defer: a().bool,
        encodeSpecialCharacters: a().bool,
        htmlAttributes: a().object,
        link: a().arrayOf(a().object),
        meta: a().arrayOf(a().object),
        noscript: a().arrayOf(a().object),
        onChangeClientState: a().func,
        script: a().arrayOf(a().object),
        style: a().arrayOf(a().object),
        title: a().string,
        titleAttributes: a().object,
        titleTemplate: a().string,
        prioritizeSeoTags: a().bool,
        helmetData: a().object,
      }),
        (Q.defaultProps = {
          defer: !0,
          encodeSpecialCharacters: !0,
          prioritizeSeoTags: !1,
        }),
        (Q.displayName = "Helmet");
    },
    848421(e, t, n) {
      "use strict";
      n.d(t, { Kl: () => L });
      var r,
        i,
        a,
        o,
        s,
        u,
        c = n(582128),
        l = n.t(c, 2),
        d = n(333007),
        f = n.t(d, 2),
        h = n(207970);
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      let m = c.createContext(null),
        g = c.createContext(null),
        _ = c.createContext(null),
        y = c.createContext(null),
        v = c.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
        b = c.createContext(null);
      function w() {
        return null != c.useContext(y);
      }
      let T = c.createElement(function () {
        var e;
        let t,
          n,
          r,
          i,
          a,
          o,
          s,
          u =
            ((a = c.useContext(b)),
            (o = (V.UseRouteError, (t = c.useContext(g)) || (0, h.Oi)(!1), t)),
            (s =
              (V.UseRouteError,
              (i = ((n = c.useContext(v)) || (0, h.Oi)(!1), (r = n)).matches[
                r.matches.length - 1
              ]).route.id || (0, h.Oi)(!1),
              i.route.id)),
            void 0 !== a ? a : null == (e = o.errors) ? void 0 : e[s]),
          l = (0, h.pX)(u)
            ? u.status + " " + u.statusText
            : u instanceof Error
              ? u.message
              : JSON.stringify(u),
          d = u instanceof Error ? u.stack : null;
        return c.createElement(
          c.Fragment,
          null,
          c.createElement("h2", null, "Unexpected Application Error!"),
          c.createElement("h3", { style: { fontStyle: "italic" } }, l),
          d
            ? c.createElement(
                "pre",
                {
                  style: {
                    padding: "0.5rem",
                    backgroundColor: "rgba(200,200,200, 0.5)",
                  },
                },
                d,
              )
            : null,
          null,
        );
      }, null);
      class E extends c.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t,
          );
        }
        render() {
          return void 0 !== this.state.error
            ? c.createElement(
                v.Provider,
                { value: this.props.routeContext },
                c.createElement(b.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        }
      }
      function x(e) {
        let { routeContext: t, match: n, children: r } = e,
          i = c.useContext(m);
        return (
          i &&
            i.static &&
            i.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = n.route.id),
          c.createElement(v.Provider, { value: t }, r)
        );
      }
      var V =
        (((r = V || {}).UseBlocker = "useBlocker"),
        (r.UseLoaderData = "useLoaderData"),
        (r.UseActionData = "useActionData"),
        (r.UseRouteError = "useRouteError"),
        (r.UseNavigation = "useNavigation"),
        (r.UseRouteLoaderData = "useRouteLoaderData"),
        (r.UseMatches = "useMatches"),
        (r.UseRevalidator = "useRevalidator"),
        (r.UseNavigateStable = "useNavigate"),
        (r.UseRouteId = "useRouteId"),
        r);
      let k = {};
      function A(e) {
        (0, h.Oi)(!1);
      }
      function S(e) {
        let {
          basename: t = "/",
          children: n = null,
          location: r,
          navigationType: i = h.rc.Pop,
          navigator: a,
          static: o = !1,
          future: s,
        } = e;
        w() && (0, h.Oi)(!1);
        let u = t.replace(/^\/*/, "/"),
          l = c.useMemo(
            () => ({
              basename: u,
              navigator: a,
              static: o,
              future: p({ v7_relativeSplatPath: !1 }, s),
            }),
            [u, s, a, o],
          );
        "string" == typeof r && (r = (0, h.Rr)(r));
        let {
            pathname: d = "/",
            search: f = "",
            hash: m = "",
            state: g = null,
            key: v = "default",
          } = r,
          b = c.useMemo(() => {
            let e = (0, h.pb)(d, u);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: f,
                    hash: m,
                    state: g,
                    key: v,
                  },
                  navigationType: i,
                };
          }, [u, d, f, m, g, v, i]);
        return null == b
          ? null
          : c.createElement(
              _.Provider,
              { value: l },
              c.createElement(y.Provider, { children: n, value: b }),
            );
      }
      function O(e) {
        let { children: t, location: n } = e;
        return (function (e, t) {
          let n;
          w() || (0, h.Oi)(!1);
          let { navigator: r } = c.useContext(_),
            { matches: i } = c.useContext(v),
            a = i[i.length - 1],
            o = a ? a.params : {};
          a && a.pathname;
          let s = a ? a.pathnameBase : "/";
          a && a.route;
          let u = (w() || (0, h.Oi)(!1), c.useContext(y).location);
          if (t) {
            var l;
            let e = "string" == typeof t ? (0, h.Rr)(t) : t;
            "/" === s ||
              (null == (l = e.pathname) ? void 0 : l.startsWith(s)) ||
              (0, h.Oi)(!1),
              (n = e);
          } else n = u;
          let d = n.pathname || "/",
            f = d;
          if ("/" !== s) {
            let e = s.replace(/^\//, "").split("/");
            f = "/" + d.replace(/^\//, "").split("/").slice(e.length).join("/");
          }
          let m = (0, h.ue)(e, { pathname: f }),
            g = (function (e, t, n, r) {
              var i, a;
              if (
                (void 0 === t && (t = []),
                void 0 === n && (n = null),
                void 0 === r && (r = null),
                null == e)
              ) {
                if (!n) return null;
                if (n.errors) e = n.matches;
                else {
                  if (
                    null == (a = r) ||
                    !a.v7_partialHydration ||
                    0 !== t.length ||
                    n.initialized ||
                    !(n.matches.length > 0)
                  )
                    return null;
                  e = n.matches;
                }
              }
              let o = e,
                s = null == (i = n) ? void 0 : i.errors;
              if (null != s) {
                let e = o.findIndex(
                  (e) =>
                    e.route.id &&
                    (null == s ? void 0 : s[e.route.id]) !== void 0,
                );
                e >= 0 || (0, h.Oi)(!1),
                  (o = o.slice(0, Math.min(o.length, e + 1)));
              }
              let u = !1,
                l = -1;
              if (n && r && r.v7_partialHydration)
                for (let e = 0; e < o.length; e++) {
                  let t = o[e];
                  if (
                    ((t.route.HydrateFallback ||
                      t.route.hydrateFallbackElement) &&
                      (l = e),
                    t.route.id)
                  ) {
                    let { loaderData: e, errors: r } = n,
                      i =
                        t.route.loader &&
                        void 0 === e[t.route.id] &&
                        (!r || void 0 === r[t.route.id]);
                    if (t.route.lazy || i) {
                      (u = !0), (o = l >= 0 ? o.slice(0, l + 1) : [o[0]]);
                      break;
                    }
                  }
                }
              return o.reduceRight((e, r, i) => {
                var a;
                let d,
                  f = !1,
                  h = null,
                  p = null;
                n &&
                  ((d = s && r.route.id ? s[r.route.id] : void 0),
                  (h = r.route.errorElement || T),
                  u &&
                    (l < 0 && 0 === i
                      ? ((a = "route-fallback"),
                        k[a] || (k[a] = !0),
                        (f = !0),
                        (p = null))
                      : l === i &&
                        ((f = !0),
                        (p = r.route.hydrateFallbackElement || null))));
                let m = t.concat(o.slice(0, i + 1)),
                  g = () => {
                    let t;
                    return (
                      (t = d
                        ? h
                        : f
                          ? p
                          : r.route.Component
                            ? c.createElement(r.route.Component, null)
                            : r.route.element
                              ? r.route.element
                              : e),
                      c.createElement(x, {
                        match: r,
                        routeContext: {
                          outlet: e,
                          matches: m,
                          isDataRoute: null != n,
                        },
                        children: t,
                      })
                    );
                  };
                return n &&
                  (r.route.ErrorBoundary || r.route.errorElement || 0 === i)
                  ? c.createElement(E, {
                      location: n.location,
                      revalidation: n.revalidation,
                      component: h,
                      error: d,
                      children: g(),
                      routeContext: {
                        outlet: null,
                        matches: m,
                        isDataRoute: !0,
                      },
                    })
                  : g();
              }, null);
            })(
              m &&
                m.map((e) =>
                  Object.assign({}, e, {
                    params: Object.assign({}, o, e.params),
                    pathname: (0, h.HS)([
                      s,
                      r.encodeLocation
                        ? r.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? s
                        : (0, h.HS)([
                            s,
                            r.encodeLocation
                              ? r.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  }),
                ),
              i,
              void 0,
              void 0,
            );
          return t && g
            ? c.createElement(
                y.Provider,
                {
                  value: {
                    location: p(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      n,
                    ),
                    navigationType: h.rc.Pop,
                  },
                },
                g,
              )
            : g;
        })(
          (function e(t, n) {
            void 0 === n && (n = []);
            let r = [];
            return (
              c.Children.forEach(t, (t, i) => {
                if (!c.isValidElement(t)) return;
                let a = [...n, i];
                if (t.type === c.Fragment)
                  return void r.push.apply(r, e(t.props.children, a));
                t.type !== A && (0, h.Oi)(!1),
                  t.props.index && t.props.children && (0, h.Oi)(!1);
                let o = {
                  id: t.props.id || a.join("-"),
                  caseSensitive: t.props.caseSensitive,
                  element: t.props.element,
                  Component: t.props.Component,
                  index: t.props.index,
                  path: t.props.path,
                  loader: t.props.loader,
                  action: t.props.action,
                  errorElement: t.props.errorElement,
                  ErrorBoundary: t.props.ErrorBoundary,
                  hasErrorBoundary:
                    null != t.props.ErrorBoundary ||
                    null != t.props.errorElement,
                  shouldRevalidate: t.props.shouldRevalidate,
                  handle: t.props.handle,
                  lazy: t.props.lazy,
                };
                t.props.children && (o.children = e(t.props.children, a)),
                  r.push(o);
              }),
              r
            );
          })(t),
          n,
        );
      }
      l.startTransition;
      var R =
        (((i = R || {})[(i.pending = 0)] = "pending"),
        (i[(i.success = 1)] = "success"),
        (i[(i.error = 2)] = "error"),
        i);
      new Promise(() => {}), c.Component;
      var P = n(806163);
      try {
        window.__reactRouterVersion = "6";
      } catch (e) {}
      l.startTransition,
        f.flushSync,
        l.useId,
        "u" > typeof window &&
          void 0 !== window.document &&
          window.document.createElement,
        ((a = s || (s = {})).UseScrollRestoration = "useScrollRestoration"),
        (a.UseSubmit = "useSubmit"),
        (a.UseSubmitFetcher = "useSubmitFetcher"),
        (a.UseFetcher = "useFetcher"),
        (a.useViewTransitionState = "useViewTransitionState"),
        ((o = u || (u = {})).UseFetcher = "useFetcher"),
        (o.UseFetchers = "useFetchers"),
        (o.UseScrollRestoration = "useScrollRestoration");
      let C =
        "u" > typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? c.useLayoutEffect
          : () => {};
      function L(e) {
        let { children: t } = e,
          n = (0, P.W6)(),
          [r, i] = c.useState(() => ({
            location: n.location,
            action: n.action,
          }));
        return (
          C(() => {
            n.listen((e, t) => i({ location: e, action: t }));
          }, [n]),
          c.createElement(
            S,
            { navigationType: r.action, location: r.location, navigator: n },
            c.createElement(
              O,
              null,
              c.createElement(A, { path: "*", element: t }),
            ),
          )
        );
      }
    },
    93932(e, t, n) {
      "use strict";
      n.d(t, { A: () => b });
      var r = n(1139),
        i = n(299146),
        a = n(47312);
      function o(e, t) {
        return e
          .replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      n(655972);
      var s = n(582128),
        u = n(333007),
        c = n(109610),
        l = function (e) {
          return e.scrollTop;
        },
        d = "unmounted",
        f = "exited",
        h = "entering",
        p = "entered",
        m = "exiting",
        g = (function (e) {
          function t(t, n) {
            var r,
              i = e.call(this, t, n) || this,
              a = n && !n.isMounting ? t.enter : t.appear;
            return (
              (i.appearStatus = null),
              t.in
                ? a
                  ? ((r = f), (i.appearStatus = h))
                  : (r = p)
                : (r = t.unmountOnExit || t.mountOnEnter ? d : f),
              (i.state = { status: r }),
              (i.nextCallback = null),
              i
            );
          }
          (0, a.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === d ? { status: f } : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== h && n !== p && (t = h)
                  : (n === h || n === p) && (t = m);
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === h)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : u.findDOMNode(this);
                    n && l(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === f &&
                  this.setState({ status: d });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                i = this.props.nodeRef ? [r] : [u.findDOMNode(this), r],
                a = i[0],
                o = i[1],
                s = this.getTimeouts(),
                c = r ? s.appear : s.enter;
              (e || n) && 1
                ? (this.props.onEnter(a, o),
                  this.safeSetState({ status: h }, function () {
                    t.props.onEntering(a, o),
                      t.onTransitionEnd(c, function () {
                        t.safeSetState({ status: p }, function () {
                          t.props.onEntered(a, o);
                        });
                      });
                  }))
                : this.safeSetState({ status: p }, function () {
                    t.props.onEntered(a);
                  });
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : u.findDOMNode(this);
              t
                ? (this.props.onExit(r),
                  this.safeSetState({ status: m }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: f }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: f }, function () {
                    e.props.onExited(r);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : u.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (!n || r) return void setTimeout(this.nextCallback, 0);
              if (this.props.addEndListener) {
                var i = this.props.nodeRef
                    ? [this.nextCallback]
                    : [n, this.nextCallback],
                  a = i[0],
                  o = i[1];
                this.props.addEndListener(a, o);
              }
              null != e && setTimeout(this.nextCallback, e);
            }),
            (n.render = function () {
              var e = this.state.status;
              if (e === d) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, i.A)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return s.createElement(
                c.A.Provider,
                { value: null },
                "function" == typeof n
                  ? n(e, r)
                  : s.cloneElement(s.Children.only(n), r),
              );
            }),
            t
          );
        })(s.Component);
      function _() {}
      (g.contextType = c.A),
        (g.propTypes = {}),
        (g.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: _,
          onEntering: _,
          onEntered: _,
          onExit: _,
          onExiting: _,
          onExited: _,
        }),
        (g.UNMOUNTED = d),
        (g.EXITED = f),
        (g.ENTERING = h),
        (g.ENTERED = p),
        (g.EXITING = m);
      var y = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              e.classList
                ? e.classList.remove(t)
                : "string" == typeof e.className
                  ? (e.className = o(e.className, t))
                  : e.setAttribute(
                      "class",
                      o((e.className && e.className.baseVal) || "", t),
                    );
            })
          );
        },
        v = (function (e) {
          function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (t.onEnter = function (e, n) {
                var r = t.resolveArguments(e, n),
                  i = r[0],
                  a = r[1];
                t.removeClasses(i, "exit"),
                  t.addClass(i, a ? "appear" : "enter", "base"),
                  t.props.onEnter && t.props.onEnter(e, n);
              }),
              (t.onEntering = function (e, n) {
                var r = t.resolveArguments(e, n),
                  i = r[0],
                  a = r[1];
                t.addClass(i, a ? "appear" : "enter", "active"),
                  t.props.onEntering && t.props.onEntering(e, n);
              }),
              (t.onEntered = function (e, n) {
                var r = t.resolveArguments(e, n),
                  i = r[0],
                  a = r[1] ? "appear" : "enter";
                t.removeClasses(i, a),
                  t.addClass(i, a, "done"),
                  t.props.onEntered && t.props.onEntered(e, n);
              }),
              (t.onExit = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "appear"),
                  t.removeClasses(n, "enter"),
                  t.addClass(n, "exit", "base"),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var n = t.resolveArguments(e)[0];
                t.addClass(n, "exit", "active"),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "exit"),
                  t.addClass(n, "exit", "done"),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.resolveArguments = function (e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
              }),
              (t.getClassNames = function (e) {
                var n = t.props.classNames,
                  r = "string" == typeof n,
                  i = r && n ? n + "-" : "",
                  a = r ? "" + i + e : n[e],
                  o = r ? a + "-active" : n[e + "Active"],
                  s = r ? a + "-done" : n[e + "Done"];
                return {
                  baseClassName: a,
                  activeClassName: o,
                  doneClassName: s,
                };
              }),
              t
            );
          }
          (0, a.A)(t, e);
          var n = t.prototype;
          return (
            (n.addClass = function (e, t, n) {
              var r,
                i = this.getClassNames(t)[n + "ClassName"],
                a = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === n && a && (i += " " + a),
                "active" === n && e && l(e),
                i &&
                  ((this.appliedClasses[t][n] = i),
                  (r = i),
                  e &&
                    r &&
                    r.split(" ").forEach(function (t) {
                      e.classList
                        ? e.classList.add(t)
                        : (e.classList
                            ? t && e.classList.contains(t)
                            : -1 !==
                              (
                                " " +
                                (e.className.baseVal || e.className) +
                                " "
                              ).indexOf(" " + t + " ")) ||
                          ("string" == typeof e.className
                            ? (e.className = e.className + " " + t)
                            : e.setAttribute(
                                "class",
                                ((e.className && e.className.baseVal) || "") +
                                  " " +
                                  t,
                              ));
                    }));
            }),
            (n.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                r = n.base,
                i = n.active,
                a = n.done;
              (this.appliedClasses[t] = {}),
                r && y(e, r),
                i && y(e, i),
                a && y(e, a);
            }),
            (n.render = function () {
              var e = this.props,
                t = (e.classNames, (0, i.A)(e, ["classNames"]));
              return s.createElement(
                g,
                (0, r.A)({}, t, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                }),
              );
            }),
            t
          );
        })(s.Component);
      (v.defaultProps = { classNames: "" }), (v.propTypes = {});
      let b = v;
    },
    758588(e, t, n) {
      "use strict";
      n.d(t, { A: () => h });
      var r = n(299146),
        i = n(1139),
        a = n(527758),
        o = n(47312);
      n(655972);
      var s = n(582128),
        u = n(109610);
      function c(e, t) {
        var n = Object.create(null);
        return (
          e &&
            s.Children.map(e, function (e) {
              return e;
            }).forEach(function (e) {
              n[e.key] = t && (0, s.isValidElement)(e) ? t(e) : e;
            }),
          n
        );
      }
      function l(e, t, n) {
        return null != n[t] ? n[t] : e.props[t];
      }
      var d =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        f = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this,
              i = r.handleExited.bind((0, a.A)(r));
            return (
              (r.state = {
                contextValue: { isMounting: !0 },
                handleExited: i,
                firstRender: !0,
              }),
              r
            );
          }
          (0, o.A)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (n.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var n,
                r,
                i = t.children,
                a = t.handleExited;
              return {
                children: t.firstRender
                  ? c(e.children, function (t) {
                      return (0, s.cloneElement)(t, {
                        onExited: a.bind(null, t),
                        in: !0,
                        appear: l(t, "appear", e),
                        enter: l(t, "enter", e),
                        exit: l(t, "exit", e),
                      });
                    })
                  : (Object.keys(
                      (r = (function (e, t) {
                        function n(n) {
                          return n in t ? t[n] : e[n];
                        }
                        (e = e || {}), (t = t || {});
                        var r,
                          i = Object.create(null),
                          a = [];
                        for (var o in e)
                          o in t
                            ? a.length && ((i[o] = a), (a = []))
                            : a.push(o);
                        var s = {};
                        for (var u in t) {
                          if (i[u])
                            for (r = 0; r < i[u].length; r++) {
                              var c = i[u][r];
                              s[i[u][r]] = n(c);
                            }
                          s[u] = n(u);
                        }
                        for (r = 0; r < a.length; r++) s[a[r]] = n(a[r]);
                        return s;
                      })(i, (n = c(e.children)))),
                    ).forEach(function (t) {
                      var o = r[t];
                      if ((0, s.isValidElement)(o)) {
                        var u = t in i,
                          c = t in n,
                          d = i[t],
                          f = (0, s.isValidElement)(d) && !d.props.in;
                        c && (!u || f)
                          ? (r[t] = (0, s.cloneElement)(o, {
                              onExited: a.bind(null, o),
                              in: !0,
                              exit: l(o, "exit", e),
                              enter: l(o, "enter", e),
                            }))
                          : c || !u || f
                            ? c &&
                              u &&
                              (0, s.isValidElement)(d) &&
                              (r[t] = (0, s.cloneElement)(o, {
                                onExited: a.bind(null, o),
                                in: d.props.in,
                                exit: l(o, "exit", e),
                                enter: l(o, "enter", e),
                              }))
                            : (r[t] = (0, s.cloneElement)(o, { in: !1 }));
                      }
                    }),
                    r),
                firstRender: !1,
              };
            }),
            (n.handleExited = function (e, t) {
              var n = c(this.props.children);
              e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var n = (0, i.A)({}, t.children);
                    return delete n[e.key], { children: n };
                  }));
            }),
            (n.render = function () {
              var e = this.props,
                t = e.component,
                n = e.childFactory,
                i = (0, r.A)(e, ["component", "childFactory"]),
                a = this.state.contextValue,
                o = d(this.state.children).map(n);
              return (delete i.appear,
              delete i.enter,
              delete i.exit,
              null === t)
                ? s.createElement(u.A.Provider, { value: a }, o)
                : s.createElement(
                    u.A.Provider,
                    { value: a },
                    s.createElement(t, i, o),
                  );
            }),
            t
          );
        })(s.Component);
      (f.propTypes = {}),
        (f.defaultProps = {
          component: "div",
          childFactory: function (e) {
            return e;
          },
        });
      let h = f;
    },
    109610(e, t, n) {
      "use strict";
      n.d(t, { A: () => r });
      let r = n(582128).createContext(null);
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
      function o(e, t, n, r, i, a, o, s) {
        return (a < e && o > t) || (a > e && o < t)
          ? 0
          : (a <= e && s <= n) || (o >= t && s >= n)
            ? a - e - r
            : (o > t && s < n) || (a < e && s > n)
              ? o - t + i
              : 0;
      }
      n.d(t, { A: () => c });
      var s = function (e, t) {
        var n = window,
          i = t.scrollMode,
          s = t.block,
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
          var f,
            h,
            p = document.scrollingElement || document.documentElement,
            m = [],
            g = e;
          r(g) && d(g);

        ) {
          if (
            (g =
              null == (h = (f = g).parentElement)
                ? f.getRootNode().host || null
                : h) === p
          ) {
            m.push(g);
            break;
          }
          (null != g &&
            g === document.body &&
            a(g) &&
            !a(document.documentElement)) ||
            (null != g && a(g, l) && m.push(g));
        }
        for (
          var _ = n.visualViewport ? n.visualViewport.width : innerWidth,
            y = n.visualViewport ? n.visualViewport.height : innerHeight,
            v = window.scrollX || pageXOffset,
            b = window.scrollY || pageYOffset,
            w = e.getBoundingClientRect(),
            T = w.height,
            E = w.width,
            x = w.top,
            V = w.right,
            k = w.bottom,
            A = w.left,
            S =
              "start" === s || "nearest" === s
                ? x
                : "end" === s
                  ? k
                  : x + T / 2,
            O = "center" === u ? A + E / 2 : "end" === u ? V : A,
            R = [],
            P = 0;
          P < m.length;
          P++
        ) {
          var C = m[P],
            L = C.getBoundingClientRect(),
            I = L.height,
            D = L.width,
            M = L.top,
            U = L.right,
            j = L.bottom,
            F = L.left;
          if (
            "if-needed" === i &&
            x >= 0 &&
            A >= 0 &&
            k <= y &&
            V <= _ &&
            x >= M &&
            k <= j &&
            A >= F &&
            V <= U
          )
            break;
          var N = getComputedStyle(C),
            B = parseInt(N.borderLeftWidth, 10),
            G = parseInt(N.borderTopWidth, 10),
            H = parseInt(N.borderRightWidth, 10),
            W = parseInt(N.borderBottomWidth, 10),
            z = 0,
            q = 0,
            K = "offsetWidth" in C ? C.offsetWidth - C.clientWidth - B - H : 0,
            X =
              "offsetHeight" in C ? C.offsetHeight - C.clientHeight - G - W : 0,
            Y =
              "offsetWidth" in C
                ? 0 === C.offsetWidth
                  ? 0
                  : D / C.offsetWidth
                : 0,
            Z =
              "offsetHeight" in C
                ? 0 === C.offsetHeight
                  ? 0
                  : I / C.offsetHeight
                : 0;
          if (p === C)
            (z =
              "start" === s
                ? S
                : "end" === s
                  ? S - y
                  : "nearest" === s
                    ? o(b, b + y, y, G, W, b + S, b + S + T, T)
                    : S - y / 2),
              (q =
                "start" === u
                  ? O
                  : "center" === u
                    ? O - _ / 2
                    : "end" === u
                      ? O - _
                      : o(v, v + _, _, B, H, v + O, v + O + E, E)),
              (z = Math.max(0, z + b)),
              (q = Math.max(0, q + v));
          else {
            (z =
              "start" === s
                ? S - M - G
                : "end" === s
                  ? S - j + W + X
                  : "nearest" === s
                    ? o(M, j, I, G, W + X, S, S + T, T)
                    : S - (M + I / 2) + X / 2),
              (q =
                "start" === u
                  ? O - F - B
                  : "center" === u
                    ? O - (F + D / 2) + K / 2
                    : "end" === u
                      ? O - U + H + K
                      : o(F, U, D, B, H + K, O, O + E, E));
            var Q = C.scrollLeft,
              J = C.scrollTop;
            (S +=
              J -
              (z = Math.max(
                0,
                Math.min(J + z / Z, C.scrollHeight - I / Z + X),
              ))),
              (O +=
                Q -
                (q = Math.max(
                  0,
                  Math.min(Q + q / Y, C.scrollWidth - D / Y + K),
                )));
          }
          R.push({ el: C, top: z, left: q });
        }
        return R;
      };
      function u(e) {
        return e === Object(e) && 0 !== Object.keys(e).length;
      }
      let c = function (e, t) {
        var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
        if (u(t) && "function" == typeof t.behavior)
          return t.behavior(n ? s(e, t) : []);
        if (n) {
          var r,
            i,
            a,
            o =
              !1 === t
                ? { block: "end", inline: "nearest" }
                : u(t)
                  ? t
                  : { block: "start", inline: "nearest" };
          return (
            (r = s(e, o)),
            void 0 === (i = o.behavior) && (i = "auto"),
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
    478676(e) {
      e.exports = (function () {
        "use strict";
        var e,
          t,
          n,
          r,
          i,
          a,
          o,
          s,
          u = /\r\n?/g,
          c = /\t/g,
          l = /\f/g,
          d = function (e) {
            return e.replace(u, "\n").replace(l, "").replace(c, "    ");
          },
          f = function (e, t) {
            var n = e || {};
            if (null != t)
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n;
          },
          h = function (e, t) {
            var n,
              r = Object.keys(e).filter(function (t) {
                var n = e[t];
                if (null == n || null == n.match) return !1;
                var r = n.order;
                return (
                  ("number" != typeof r || !isFinite(r)) &&
                    "u" > typeof console &&
                    console.warn(
                      "simple-markdown: Invalid order for rule `" +
                        t +
                        "`: " +
                        String(r),
                    ),
                  !0
                );
              });
            r.sort(function (t, n) {
              var r = e[t],
                i = e[n],
                a = r.order,
                o = i.order;
              if (a !== o) return a - o;
              var s = +!r.quality,
                u = +!i.quality;
              return s !== u ? s - u : t < n ? -1 : 1 * !!(t > n);
            });
            for (var i = new Map(), a = [], o = 0; o < r.length; o++) {
              var s = r[o],
                u = e[s].requiredFirstCharacters;
              null == u
                ? a.push(s)
                : u.map((e) => {
                    let t = e.charCodeAt(0);
                    i.has(t) || i.set(t, []), i.get(t).push(s);
                  });
            }
            var c = function (t, o) {
                var s = [];
                n = o = o || n;
                var u = (o._parseDepth ?? 0) + 1;
                if (u > 1e3)
                  return t && s.push({ type: "text", content: t }), s;
                for (n = o = Object.assign({}, o, { _parseDepth: u }); t; ) {
                  for (
                    var l = null,
                      d = null,
                      f = null,
                      h = -1e5,
                      p = 1e5,
                      m = [i.get(t.charCodeAt(0)), a],
                      g = 0;
                    g < m.length;
                    g++
                  ) {
                    var _ = m[g];
                    if (null != _)
                      for (var y = 0; y < _.length; y++) {
                        var v = _[y],
                          b = e[v],
                          w = b.order;
                        if (w > p) break;
                        var T = null == o.prevCapture ? "" : o.prevCapture[0],
                          E = b.match(t, o, T);
                        if (E) {
                          var x = b.quality ? b.quality(E, o, T) : 0;
                          (w < p || x > h) &&
                            ((l = v), (d = b), (f = E), (h = x), (p = w));
                        }
                      }
                  }
                  if (null == d || null == f)
                    throw Error(
                      "Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" +
                        r[r.length - 1] +
                        "'. It seems to not match the following source:\n" +
                        t,
                    );
                  if (f.index)
                    throw Error(
                      "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?",
                    );
                  var V = d.parse(f, c, o);
                  Array.isArray(V)
                    ? Array.prototype.push.apply(s, V)
                    : (null == V.type && (V.type = l), s.push(V)),
                    (o.prevCapture = f),
                    (t = t.substring(o.prevCapture[0].length));
                }
                return s;
              },
              l = function (e, r) {
                return (
                  (n = f(r, t)).inline ||
                    n.disableAutoBlockNewlines ||
                    (e += "\n\n"),
                  (n.prevCapture = null),
                  c(d(e), n)
                );
              };
            return (c.rules = e), (l.rules = e), l;
          },
          p = function (e) {
            var t = function (t, n) {
              return n.inline ? e.exec(t) : null;
            };
            return (t.regex = e), t;
          },
          m = function (e) {
            var t = function (t, n) {
              return n.inline ? null : e.exec(t);
            };
            return (t.regex = e), t;
          },
          g = function (e) {
            var t = function (t, n) {
              return e.exec(t);
            };
            return (t.regex = e), t;
          },
          _ =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.transitional.element")) ||
            60103,
          y = function (e, t, n) {
            return {
              $$typeof: _,
              type: e,
              key: null == t ? void 0 : t,
              ref: null,
              props: n,
              _owner: null,
            };
          },
          v = function (e, t, n, r) {
            r = void 0 === r || r;
            var i = "";
            for (var a in (n = n || {})) {
              var o = n[a];
              Object.prototype.hasOwnProperty.call(n, a) &&
                o &&
                (i += " " + x(a) + '="' + x(o) + '"');
            }
            var s = "<" + e + i + ">";
            return r ? s + t + "</" + e + ">" : s;
          },
          b = {},
          w = function (e) {
            if (null == e) return null;
            try {
              var t = new URL(e, "https://localhost").protocol;
              if (
                0 === t.indexOf("javascript:") ||
                0 === t.indexOf("vbscript:") ||
                0 === t.indexOf("data:")
              )
                return null;
            } catch (e) {
              return null;
            }
            return e;
          },
          T = /[<>&"']/g,
          E = {
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;",
            "`": "&#96;",
          },
          x = function (e) {
            return String(e).replace(T, function (e) {
              return E[e];
            });
          },
          V = /\\([^0-9A-Za-z\s])/g,
          k = function (e) {
            return e.replace(V, "$1");
          },
          A = function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !0;
            var i = e(t, n);
            return (n.inline = r), i;
          },
          S = function (e, t, n) {
            return { content: A(t, e[1], n) };
          },
          O = function () {
            return {};
          },
          R = "(?:[*+-]|\\d+\\.)",
          P = "( *)(" + R + ") +",
          C = RegExp("^" + P),
          L = RegExp(P + "[^\\n]*(?:\\n(?!\\1" + R + " )[^\\n]*)*(\n|$)", "gm"),
          I = /\n{2,}$/,
          D = /^ (?= *`)|(` *) $/g,
          M = / *\n+$/,
          U = RegExp(
            "^( *)(" +
              R +
              ") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1" +
              R +
              " )\\n*|\\s*\n*$)",
          ),
          j = /(?:^|\n)( *)$/,
          F =
            ((e = /^ *\| *| *\| *$/g),
            (t = / *$/),
            (n = /^ *-+: *$/),
            (r = /^ *:-+: *$/),
            (i = /^ *:-+ *$/),
            (a = function (e) {
              return n.test(e)
                ? "right"
                : r.test(e)
                  ? "center"
                  : i.test(e)
                    ? "left"
                    : null;
            }),
            (o = function (e, n, r, i) {
              var a = r.inTable;
              r.inTable = !0;
              var o = n(e.trim(), r);
              r.inTable = a;
              var s = [[]];
              return (
                o.forEach(function (e, n) {
                  "tableSeparator" === e.type
                    ? (i && (0 === n || n === o.length - 1)) || s.push([])
                    : ("text" === e.type &&
                        (null == o[n + 1] ||
                          "tableSeparator" === o[n + 1].type) &&
                        (e.content = e.content.replace(t, "")),
                      s[s.length - 1].push(e));
                }),
                s
              );
            }),
            {
              parseTable: (s = function (t) {
                return function (n, r, i) {
                  i.inline = !0;
                  var s,
                    u,
                    c = o(n[1], r, i, t),
                    l =
                      ((s = n[2]),
                      t && (s = s.replace(e, "")),
                      s.trim().split("|").map(a)),
                    d =
                      ((u = n[3]),
                      u
                        .trim()
                        .split("\n")
                        .map(function (e) {
                          return o(e, r, i, t);
                        }));
                  return (
                    (i.inline = !1),
                    { type: "table", header: c, align: l, cells: d }
                  );
                };
              })(!0),
              parseNpTable: s(!1),
              TABLE_REGEX:
                /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
              NPTABLE_REGEX:
                /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            }),
          N = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
          B =
            "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\()]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",
          G = /mailto:/i,
          H = function (e, t, n) {
            var r = (e[2] || e[1]).replace(/\s+/g, " ").toLowerCase();
            if (t._defs && t._defs[r]) {
              var i = t._defs[r];
              (n.target = i.target), (n.title = i.title);
            }
            return (
              (t._refs = t._refs || {}),
              (t._refs[r] = t._refs[r] || []),
              t._refs[r].push(n),
              n
            );
          },
          W = !1;
        try {
          RegExp("(?<=a)"), RegExp("(?<!a)"), (W = !1);
        } catch (e) {}
        var z = 0,
          q = {
            Array: {
              react: function (e, t, n) {
                for (
                  var r = n.key, i = [], a = 0, o = 0;
                  a < e.length;
                  a++, o++
                ) {
                  n.key = "" + a;
                  var s = e[a];
                  if ("text" === s.type)
                    for (
                      s = { type: "text", content: s.content };
                      a + 1 < e.length && "text" === e[a + 1].type;
                      a++
                    )
                      s.content += e[a + 1].content;
                  i.push(t(s, n));
                }
                return (n.key = r), i;
              },
              html: function (e, t, n) {
                for (var r = "", i = 0; i < e.length; i++) {
                  var a = e[i];
                  if ("text" === a.type)
                    for (
                      a = { type: "text", content: a.content };
                      i + 1 < e.length && "text" === e[i + 1].type;
                      i++
                    )
                      a.content += e[i + 1].content;
                  r += t(a, n);
                }
                return r;
              },
            },
            heading: {
              order: z++,
              match: m(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
              parse: function (e, t, n) {
                return { level: e[1].length, content: A(t, e[2].trim(), n) };
              },
              react: function (e, t, n) {
                return y("h" + e.level, n.key, { children: t(e.content, n) });
              },
              html: function (e, t, n) {
                return v("h" + e.level, t(e.content, n));
              },
            },
            nptable: {
              order: z++,
              match: m(F.NPTABLE_REGEX),
              parse: F.parseNpTable,
              react: null,
              html: null,
            },
            lheading: {
              order: z++,
              match: m(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
              parse: function (e, t, n) {
                return {
                  type: "heading",
                  level: "=" === e[2] ? 1 : 2,
                  content: A(t, e[1], n),
                };
              },
              react: null,
              html: null,
            },
            hr: {
              order: z++,
              match: m(/^( *[-*_]){3,} *(?:\n *)+\n/),
              parse: O,
              react: function (e, t, n) {
                return y("hr", n.key, b);
              },
              html: function (e, t, n) {
                return "<hr>";
              },
            },
            codeBlock: {
              order: z++,
              match: m(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
              parse: function (e, t, n) {
                return {
                  lang: void 0,
                  content: e[0].replace(/^    /gm, "").replace(/\n+$/, ""),
                };
              },
              react: function (e, t, n) {
                var r = e.lang ? "markdown-code-" + e.lang : void 0;
                return y("pre", n.key, {
                  children: y("code", null, {
                    className: r,
                    children: e.content,
                  }),
                });
              },
              html: function (e, t, n) {
                var r = e.lang ? "markdown-code-" + e.lang : void 0,
                  i = v("code", x(e.content), { class: r });
                return v("pre", i);
              },
            },
            fence: {
              order: z++,
              match: m(
                /^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/,
              ),
              parse: function (e, t, n) {
                return {
                  type: "codeBlock",
                  lang: e[2] || void 0,
                  content: e[3],
                };
              },
              react: null,
              html: null,
            },
            blockQuote: {
              order: z++,
              match: m(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
              parse: function (e, t, n) {
                return { content: t(e[0].replace(/^ *> ?/gm, ""), n) };
              },
              react: function (e, t, n) {
                return y("blockquote", n.key, { children: t(e.content, n) });
              },
              html: function (e, t, n) {
                return v("blockquote", t(e.content, n));
              },
            },
            list: {
              order: z++,
              match: function (e, t) {
                var n = null == t.prevCapture ? "" : t.prevCapture[0],
                  r = j.exec(n),
                  i = t._list || !t.inline;
                return r && i ? ((e = r[1] + e), U.exec(e)) : null;
              },
              parse: function (e, t, n) {
                var r = e[2],
                  i = r.length > 1,
                  a = i ? +r : void 0,
                  o = e[0].replace(I, "\n").match(L),
                  s = !1;
                return {
                  ordered: i,
                  start: a,
                  items: o.map(function (e, r) {
                    var i,
                      a = C.exec(e),
                      u = RegExp("^ {1," + (a ? a[0].length : 0) + "}", "gm"),
                      c = e.replace(u, "").replace(C, ""),
                      l = r === o.length - 1,
                      d = -1 !== c.indexOf("\n\n") || (l && s);
                    s = d;
                    var f = n.inline,
                      h = n._list;
                    (n._list = !0),
                      d
                        ? ((n.inline = !1), (i = c.replace(M, "\n\n")))
                        : ((n.inline = !0), (i = c.replace(M, "")));
                    var p = t(i, n);
                    return (n.inline = f), (n._list = h), p;
                  }),
                };
              },
              react: function (e, t, n) {
                return y(e.ordered ? "ol" : "ul", n.key, {
                  start: e.start,
                  children: e.items.map(function (e, r) {
                    return y("li", "" + r, { children: t(e, n) });
                  }),
                });
              },
              html: function (e, t, n) {
                var r = e.items
                  .map(function (e) {
                    return v("li", t(e, n));
                  })
                  .join("");
                return v(e.ordered ? "ol" : "ul", r, { start: e.start });
              },
            },
            def: {
              order: z++,
              match: m(
                /^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/,
              ),
              parse: function (e, t, n) {
                var r = e[1].replace(/\s+/g, " ").toLowerCase(),
                  i = e[2],
                  a = e[3];
                return (
                  n._refs &&
                    n._refs[r] &&
                    n._refs[r].forEach(function (e) {
                      (e.target = i), (e.title = a);
                    }),
                  (n._defs = n._defs || {}),
                  (n._defs[r] = { target: i, title: a }),
                  { def: r, target: i, title: a }
                );
              },
              react: function () {
                return null;
              },
              html: function () {
                return "";
              },
            },
            table: {
              order: z++,
              match: m(F.TABLE_REGEX),
              parse: F.parseTable,
              react: function (e, t, n) {
                var r = function (t) {
                    return null == e.align[t] ? {} : { textAlign: e.align[t] };
                  },
                  i = e.header.map(function (e, i) {
                    return y("th", "" + i, {
                      style: r(i),
                      scope: "col",
                      children: t(e, n),
                    });
                  }),
                  a = e.cells.map(function (e, i) {
                    return y("tr", "" + i, {
                      children: e.map(function (e, i) {
                        return y("td", "" + i, {
                          style: r(i),
                          children: t(e, n),
                        });
                      }),
                    });
                  });
                return y("table", n.key, {
                  children: [
                    y("thead", "thead", {
                      children: y("tr", null, { children: i }),
                    }),
                    y("tbody", "tbody", { children: a }),
                  ],
                });
              },
              html: function (e, t, n) {
                var r = function (t) {
                    return null == e.align[t]
                      ? ""
                      : "text-align:" + e.align[t] + ";";
                  },
                  i = e.header
                    .map(function (e, i) {
                      return v("th", t(e, n), { style: r(i), scope: "col" });
                    })
                    .join(""),
                  a = e.cells
                    .map(function (e) {
                      var i = e
                        .map(function (e, i) {
                          return v("td", t(e, n), { style: r(i) });
                        })
                        .join("");
                      return v("tr", i);
                    })
                    .join(""),
                  o = v("thead", v("tr", i)),
                  s = v("tbody", a);
                return v("table", o + s);
              },
            },
            newline: {
              order: z++,
              requiredFirstCharacters: ["\n"],
              match: m(/^(?:\n *)*\n/),
              parse: O,
              react: function (e, t, n) {
                return "\n";
              },
              html: function (e, t, n) {
                return "\n";
              },
            },
            paragraph: {
              order: z++,
              match: m(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
              parse: S,
              react: function (e, t, n) {
                return y("div", n.key, {
                  className: "paragraph",
                  children: t(e.content, n),
                });
              },
              html: function (e, t, n) {
                return v("div", t(e.content, n), { class: "paragraph" });
              },
            },
            escape: {
              order: z++,
              requiredFirstCharacters: ["\\"],
              match: p(/^\\([^0-9A-Za-z\s])/),
              parse: function (e, t, n) {
                return { type: "text", content: e[1] };
              },
              react: null,
              html: null,
            },
            tableSeparator: {
              order: z++,
              match: function (e, t) {
                return t.inTable ? /^ *\| */.exec(e) : null;
              },
              parse: function () {
                return { type: "tableSeparator" };
              },
              react: function () {
                return " | ";
              },
              html: function () {
                return " &vert; ";
              },
            },
            autolink: {
              order: z++,
              requiredFirstCharacters: ["<"],
              match: p(/^<([^: >]+:\/[^ >]+)>/),
              parse: function (e, t, n) {
                return {
                  type: "link",
                  content: [{ type: "text", content: e[1] }],
                  target: e[1],
                };
              },
              react: null,
              html: null,
            },
            mailto: {
              order: z++,
              match: p(/^<([^ >]+@[^ >]+)>/),
              parse: function (e, t, n) {
                var r = e[1],
                  i = e[1];
                return (
                  G.test(i) || (i = "mailto:" + i),
                  {
                    type: "link",
                    content: [{ type: "text", content: r }],
                    target: i,
                  }
                );
              },
              react: null,
              html: null,
            },
            url: {
              order: z++,
              requiredFirstCharacters: ["h"],
              match: p(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
              parse: function (e, t, n) {
                return {
                  type: "link",
                  content: [{ type: "text", content: e[1] }],
                  target: e[1],
                  title: void 0,
                };
              },
              react: null,
              html: null,
            },
            link: {
              order: z++,
              requiredFirstCharacters: ["["],
              match: p(RegExp("^\\[(" + N + ")\\]\\(" + B + "\\)")),
              parse: function (e, t, n) {
                return { content: t(e[1], n), target: k(e[2]), title: e[3] };
              },
              react: function (e, t, n) {
                return y("a", n.key, {
                  href: w(e.target),
                  title: e.title,
                  children: t(e.content, n),
                });
              },
              html: function (e, t, n) {
                var r = { href: w(e.target), title: e.title };
                return v("a", t(e.content, n), r);
              },
            },
            image: {
              order: z++,
              match: p(RegExp("^!\\[(" + N + ")\\]\\(" + B + "\\)")),
              parse: function (e, t, n) {
                return { alt: e[1], target: k(e[2]), title: e[3] };
              },
              react: function (e, t, n) {
                return y("img", n.key, {
                  src: w(e.target),
                  alt: e.alt,
                  title: e.title,
                });
              },
              html: function (e, t, n) {
                return v(
                  "img",
                  "",
                  { src: w(e.target), alt: e.alt, title: e.title },
                  !1,
                );
              },
            },
            reflink: {
              order: z++,
              match: p(RegExp("^\\[(" + N + ")\\]\\s*\\[([^\\]]*)\\]")),
              parse: function (e, t, n) {
                return H(e, n, { type: "link", content: t(e[1], n) });
              },
              react: null,
              html: null,
            },
            refimage: {
              order: z++,
              match: p(RegExp("^!\\[(" + N + ")\\]\\s*\\[([^\\]]*)\\]")),
              parse: function (e, t, n) {
                return H(e, n, { type: "image", alt: e[1] });
              },
              react: null,
              html: null,
            },
            em: {
              order: z,
              match: p(
                RegExp(
                  (W
                    ? "^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b"
                    : "^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b") +
                    "|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)",
                ),
              ),
              quality: function (e) {
                return e[0].length + 0.2;
              },
              parse: function (e, t, n) {
                return { content: t(e[2] || e[1], n) };
              },
              react: function (e, t, n) {
                return y("em", n.key, { children: t(e.content, n) });
              },
              html: function (e, t, n) {
                return v("em", t(e.content, n));
              },
            },
            strong: {
              order: z,
              requiredFirstCharacters: ["*"],
              match: p(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
              quality: function (e) {
                return e[0].length + 0.1;
              },
              parse: S,
              react: function (e, t, n) {
                return y("strong", n.key, { children: t(e.content, n) });
              },
              html: function (e, t, n) {
                return v("strong", t(e.content, n));
              },
            },
            u: {
              order: z++,
              requiredFirstCharacters: ["_"],
              match: p(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
              quality: function (e) {
                return e[0].length;
              },
              parse: S,
              react: function (e, t, n) {
                return y("u", n.key, { children: t(e.content, n) });
              },
              html: function (e, t, n) {
                return v("u", t(e.content, n));
              },
            },
            del: {
              order: z++,
              requiredFirstCharacters: ["~"],
              match: p(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
              parse: S,
              react: function (e, t, n) {
                return y("del", n.key, { children: t(e.content, n) });
              },
              html: function (e, t, n) {
                return v("del", t(e.content, n));
              },
            },
            inlineCode: {
              order: z++,
              requiredFirstCharacters: ["`"],
              match: p(/^(`+)([\s\S]*?[^`])\1(?!`)/),
              parse: function (e, t, n) {
                return { content: e[2].replace(D, "$1") };
              },
              react: function (e, t, n) {
                return y("code", n.key, { children: e.content });
              },
              html: function (e, t, n) {
                return v("code", x(e.content));
              },
            },
            br: {
              order: z++,
              requiredFirstCharacters: [" "],
              match: g(/^ {2,}\n/),
              parse: O,
              react: function (e, t, n) {
                return y("br", n.key, b);
              },
              html: function (e, t, n) {
                return "<br>";
              },
            },
            text: {
              order: z++,
              match: g(
                /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/,
              ),
              parse: function (e, t, n) {
                return { content: e[0] };
              },
              react: function (e, t, n) {
                return e.content;
              },
              html: function (e, t, n) {
                return x(e.content);
              },
            },
          },
          K = function (e, t, n) {
            if (!t)
              throw Error(
                "simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`",
              );
            var r,
              i = (e.Array || q.Array)[t];
            if (!i)
              throw Error(
                "simple-markdown: outputFor: to join nodes of type `" +
                  t +
                  "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.",
              );
            var a = function (n, o) {
              return ((r = o = o || r), Array.isArray(n))
                ? i(n, a, o)
                : e[n.type][t](n, a, o);
            };
            return function (e, t) {
              return a(e, (r = f(t, n)));
            };
          },
          X = h(q),
          Y = function (e, t) {
            return ((t = t || {}).inline = !1), X(e, t);
          },
          Z = function (e, t) {
            var n = I.test(e);
            return ((t = t || {}).inline = !n), X(e, t);
          },
          Q = K(q, "react"),
          J = K(q, "html"),
          $ = function (e, t) {
            return Q(Y(e, t), t);
          };
        return {
          defaultRules: q,
          parserFor: h,
          outputFor: K,
          inlineRegex: p,
          blockRegex: m,
          anyScopeRegex: g,
          parseInline: A,
          parseBlock: function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !1;
            var i = e(t + "\n\n", n);
            return (n.inline = r), i;
          },
          markdownToReact: $,
          markdownToHtml: function (e, t) {
            return J(Y(e, t), t);
          },
          ReactMarkdown: function (e) {
            var t = {};
            for (var n in e)
              "source" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                (t[n] = e[n]);
            return (t.children = $(e.source)), y("div", null, t);
          },
          defaultBlockParse: Y,
          defaultInlineParse: function (e, t) {
            return ((t = t || {}).inline = !0), X(e, t);
          },
          defaultImplicitParse: Z,
          defaultReactOutput: Q,
          defaultHtmlOutput: J,
          preprocess: d,
          sanitizeText: x,
          sanitizeUrl: w,
          unescapeUrl: k,
          htmlTag: v,
          reactElement: y,
          defaultRawParse: X,
          ruleOutput: function (e, t) {
            return (
              !t &&
                "u" > typeof console &&
                console.warn(
                  "simple-markdown ruleOutput should take 'react' or 'html' as the second argument.",
                ),
              function (n, r, i) {
                return e[n.type][t](n, r, i);
              }
            );
          },
          reactFor: function (e) {
            var t = function (n, r) {
              if (((r = r || {}), !Array.isArray(n))) return e(n, t, r);
              for (var i = r.key, a = [], o = null, s = 0; s < n.length; s++) {
                r.key = "" + s;
                var u = t(n[s], r);
                "string" == typeof u && "string" == typeof o
                  ? ((o += u), (a[a.length - 1] = o))
                  : (a.push(u), (o = u));
              }
              return (r.key = i), a;
            };
            return t;
          },
          htmlFor: function (e) {
            var t = function (n, r) {
              return ((r = r || {}), Array.isArray(n))
                ? n
                    .map(function (e) {
                      return t(e, r);
                    })
                    .join("")
                : e(n, t, r);
            };
            return t;
          },
          defaultParse: function () {
            return (
              "u" > typeof console &&
                console.warn(
                  "defaultParse is deprecated, please use `defaultImplicitParse`",
                ),
              Z.apply(null, arguments)
            );
          },
          defaultOutput: function () {
            return (
              "u" > typeof console &&
                console.warn(
                  "defaultOutput is deprecated, please use `defaultReactOutput`",
                ),
              Q.apply(null, arguments)
            );
          },
        };
      })();
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
            o,
            s = n - t;
          return ((o = 1.70158), (a = 0), (i = s), 0 === e)
            ? t
            : 1 == (e /= r)
              ? t + s
              : (a || (a = 0.3 * r),
                i < Math.abs(s)
                  ? ((i = s), (o = a / 4))
                  : (o = (a / (2 * Math.PI)) * Math.asin(s / i)),
                -(
                  i *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e * r - o)) / a)
                ) + t);
        },
        easeOutElastic: function (e, t, n, r) {
          var i,
            a,
            o,
            s = n - t;
          return ((o = 1.70158), (a = 0), (i = s), 0 === e)
            ? t
            : 1 == (e /= r)
              ? t + s
              : (a || (a = 0.3 * r),
                i < Math.abs(s)
                  ? ((i = s), (o = a / 4))
                  : (o = (a / (2 * Math.PI)) * Math.asin(s / i)),
                i *
                  Math.pow(2, -10 * e) *
                  Math.sin((2 * Math.PI * (e * r - o)) / a) +
                  s +
                  t);
        },
        easeInOutElastic: function (e, t, n, r) {
          var i,
            a,
            o,
            s = n - t;
          return ((o = 1.70158), (a = 0), (i = s), 0 === e)
            ? t
            : 2 == (e /= r / 2)
              ? t + s
              : (a || (a = 0.3 * 1.5 * r),
                  i < Math.abs(s)
                    ? ((i = s), (o = a / 4))
                    : (o = (a / (2 * Math.PI)) * Math.asin(s / i)),
                  e < 1)
                ? -0.5 *
                    (i *
                      Math.pow(2, 10 * (e -= 1)) *
                      Math.sin((2 * Math.PI * (e * r - o)) / a)) +
                  t
                : i *
                    Math.pow(2, -10 * (e -= 1)) *
                    Math.sin((2 * Math.PI * (e * r - o)) / a) *
                    0.5 +
                  s +
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
            o = r - n;
          return (a = t.easeOutBounce(i - e, 0, o, i)), o - a + n;
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
    801813(e, t, n) {
      "use strict";
      e.exports = n.p + "3d87e0acfdf050a9.scm";
    },
    736722(e, t, n) {
      "use strict";
      e.exports = n.p + "a57d829a5323de30.scm";
    },
    577124(e, t, n) {
      "use strict";
      e.exports = n.p + "ed21b8919abfe80f.wasm";
    },
    238698(e, t, n) {
      "use strict";
      e.exports = n.p + "2d3b24aac48706d0.scm";
    },
    738494(e, t, n) {
      "use strict";
      e.exports = n.p + "892b86b1b37195ba.wasm";
    },
    298950(e, t, n) {
      "use strict";
      e.exports = n.p + "33f9142284a10095.scm";
    },
    785842(e, t, n) {
      "use strict";
      e.exports = n.p + "731b4cff0d046fd9.wasm";
    },
    929054(e, t, n) {
      "use strict";
      e.exports = n.p + "5d60c65a42dd8b61.scm";
    },
    577867(e, t, n) {
      "use strict";
      e.exports = n.p + "4f098f595413c750.scm";
    },
    713784(e, t, n) {
      "use strict";
      e.exports = n.p + "dc76a5bc246aea02.wasm";
    },
    504216(e, t, n) {
      "use strict";
      e.exports = n.p + "64eba10de56bb765.scm";
    },
    173808(e, t, n) {
      "use strict";
      e.exports = n.p + "d4930f9858d01e43.wasm";
    },
    666851(e, t, n) {
      "use strict";
      e.exports = n.p + "93e51b74e13d1db3.scm";
    },
    674112(e, t, n) {
      "use strict";
      e.exports = n.p + "219b66cbda651d28.wasm";
    },
    420121(e, t, n) {
      "use strict";
      e.exports = n.p + "74fe2c2f5a3c7981.scm";
    },
    183932(e, t, n) {
      "use strict";
      e.exports = n.p + "0268a0d5c3fc7ebe.wasm";
    },
    96281(e, t, n) {
      "use strict";
      e.exports = n.p + "108c8dd67e955e3b.scm";
    },
    107328(e, t, n) {
      "use strict";
      e.exports = n.p + "ddd52ece2d8c63eb.wasm";
    },
    68932(e, t, n) {
      "use strict";
      e.exports = n.p + "07e417d738722d4c.scm";
    },
    222880(e, t, n) {
      "use strict";
      e.exports = n.p + "ac511252e9dcb401.wasm";
    },
    317562(e, t, n) {
      "use strict";
      e.exports = n.p + "9fa7b99795cad999.scm";
    },
    566900(e, t, n) {
      "use strict";
      e.exports = n.p + "42b3775c0ce02e01.wasm";
    },
    852811(e, t, n) {
      "use strict";
      e.exports = n.p + "3ade61e47a975b88.scm";
    },
    868406(e, t, n) {
      "use strict";
      e.exports = n.p + "ceb6f797636a2e63.scm";
    },
    608256(e, t, n) {
      "use strict";
      e.exports = n.p + "7a1bfe86553551a2.scm";
    },
    667120(e, t, n) {
      "use strict";
      e.exports = n.p + "cafd71ad5c41a020.wasm";
    },
    181538(e, t, n) {
      "use strict";
      e.exports = n.p + "93e9ab38b759fa94.scm";
    },
    29940(e, t, n) {
      "use strict";
      e.exports = n.p + "519be724979f0108.wasm";
    },
    520573(e, t, n) {
      "use strict";
      e.exports = n.p + "89a7618d9c5a0636.scm";
    },
    596044(e, t, n) {
      "use strict";
      e.exports = n.p + "2b2a1cbf61630395.wasm";
    },
    227341(e, t, n) {
      "use strict";
      e.exports = n.p + "04576dbdb98ad02f.scm";
    },
    698220(e, t, n) {
      "use strict";
      e.exports = n.p + "c3ff5fafeceaae34.wasm";
    },
    734834(e, t, n) {
      "use strict";
      e.exports = n.p + "be3f7e92e07ca1fd.scm";
    },
    146727(e, t, n) {
      "use strict";
      e.exports = n.p + "2666b65494736dbc.scm";
    },
    838688(e, t, n) {
      "use strict";
      e.exports = n.p + "79bcfe8f592ca991.wasm";
    },
    746052(e, t, n) {
      "use strict";
      e.exports = n.p + "9d568a1f15e8cf74.scm";
    },
    867914(e, t, n) {
      "use strict";
      e.exports = n.p + "dfa0d8c944be3a84.wasm";
    },
    115964(e, t, n) {
      "use strict";
      e.exports = n.p + "982ab3c69af96dda.scm";
    },
    622109(e, t, n) {
      "use strict";
      e.exports = n.p + "bd9bde68cb2a04f0.scm";
    },
    612664(e, t, n) {
      "use strict";
      e.exports = n.p + "e02a5b67b3c1df40.wasm";
    },
    813710(e, t, n) {
      "use strict";
      e.exports = n.p + "7555218a1309ad93.scm";
    },
    350992(e, t, n) {
      "use strict";
      e.exports = n.p + "7663a3bebce7deb6.wasm";
    },
    868485(e, t, n) {
      "use strict";
      e.exports = n.p + "0b59c2275238d17c.scm";
    },
    821556(e, t, n) {
      "use strict";
      e.exports = n.p + "cbfd32db1d5ba021.wasm";
    },
    521948(e, t, n) {
      "use strict";
      e.exports = n.p + "ffc648b27cbf1caf.scm";
    },
    905834(e, t, n) {
      "use strict";
      e.exports = n.p + "685345d8f6dff552.wasm";
    },
    18811(e, t, n) {
      "use strict";
      e.exports = n.p + "6edd364cd748a297.scm";
    },
    385872(e, t, n) {
      "use strict";
      e.exports = n.p + "af5575828ca9af40.wasm";
    },
    68958(e, t, n) {
      "use strict";
      e.exports = n.p + "6e4f9b9f5280286f.scm";
    },
    639390(e, t, n) {
      "use strict";
      e.exports = n.p + "39a2d47ac3762397.wasm";
    },
    636879(e, t, n) {
      "use strict";
      e.exports = n.p + "a781b7662011d5f8.scm";
    },
    317032(e, t, n) {
      "use strict";
      e.exports = n.p + "0692eae161114efb.wasm";
    },
    124638(e, t, n) {
      "use strict";
      e.exports = n.p + "b79558c9fe3061d8.scm";
    },
    20235(e, t, n) {
      "use strict";
      e.exports = n.p + "11028097ed495199.scm";
    },
    107312(e, t, n) {
      "use strict";
      e.exports = n.p + "55f0b93e3801c156.wasm";
    },
    779754(e, t, n) {
      "use strict";
      e.exports = n.p + "d4bfa95eadea7b95.scm";
    },
    443944(e, t, n) {
      "use strict";
      e.exports = n.p + "ddbd456b03bd614e.wasm";
    },
    992642(e, t, n) {
      "use strict";
      e.exports = n.p + "0490603e9d0d01cd.scm";
    },
    533815(e, t, n) {
      "use strict";
      e.exports = n.p + "30e0c6c9ec034936.scm";
    },
    880446(e, t, n) {
      "use strict";
      e.exports = n.p + "6b2a83c56c10aac5.wasm";
    },
    698533(e, t, n) {
      "use strict";
      e.exports = n.p + "38b49511c25620a4.scm";
    },
    909628(e, t, n) {
      "use strict";
      e.exports = n.p + "c6e91b47ab586842.scm";
    },
    644610(e, t, n) {
      "use strict";
      e.exports = n.p + "68db595d8460bf97.scm";
    },
    16084(e, t, n) {
      "use strict";
      e.exports = n.p + "3c0de8eda87cde77.wasm";
    },
    764158(e, t, n) {
      "use strict";
      e.exports = n.p + "764d203016a287be.scm";
    },
    873186(e, t, n) {
      "use strict";
      e.exports = n.p + "9fe54b19e13e9fb4.wasm";
    },
    737719(e, t, n) {
      "use strict";
      e.exports = n.p + "b62210ce632b9c7b.scm";
    },
    676320(e, t, n) {
      "use strict";
      e.exports = n.p + "db7b3abf723619a2.wasm";
    },
    273359(e, t, n) {
      "use strict";
      e.exports = n.p + "a90228e085a54917.scm";
    },
    163362(e, t, n) {
      "use strict";
      e.exports = n.p + "83241319c2f5ea44.scm";
    },
    946748(e, t, n) {
      "use strict";
      e.exports = n.p + "14ec376fdb114a1a.scm";
    },
    523536(e, t, n) {
      "use strict";
      e.exports = n.p + "952ea714b7ffbf0a.wasm";
    },
    278749(e, t, n) {
      "use strict";
      e.exports = n.p + "bed44ef8a588de5e.scm";
    },
    614804(e, t, n) {
      "use strict";
      e.exports = n.p + "d59ec0d928765c62.scm";
    },
    526378(e, t, n) {
      "use strict";
      e.exports = n.p + "71d5da341ff42d98.scm";
    },
    724552(e, t, n) {
      "use strict";
      e.exports = n.p + "821c6e039088a32a.wasm";
    },
    877365(e, t, n) {
      "use strict";
      e.exports = n.p + "bfd02fa6ec3b90f5.scm";
    },
    308624(e, t, n) {
      "use strict";
      e.exports = n.p + "ce7c50e2af3b3d6f.wasm";
    },
    58659(e, t, n) {
      "use strict";
      e.exports = n.p + "ca7b1a42047fd4a7.scm";
    },
    925600(e, t, n) {
      "use strict";
      e.exports = n.p + "b0a784773bef755c.wasm";
    },
    71652(e, t, n) {
      "use strict";
      e.exports = n.p + "26f3233db8fd35cc.scm";
    },
    691144(e, t, n) {
      "use strict";
      e.exports = n.p + "b652b3efd242781a.wasm";
    },
    146991(e, t, n) {
      "use strict";
      e.exports = n.p + "d1d5683e682403ee.scm";
    },
    410626(e, t, n) {
      "use strict";
      e.exports = n.p + "9659a56d1febda1f.scm";
    },
    805880(e, t, n) {
      "use strict";
      e.exports = n.p + "ca88c20b7cf9201e.wasm";
    },
    801525(e, t, n) {
      "use strict";
      e.exports = n.p + "49df8c4579e595cf.scm";
    },
    94284(e, t, n) {
      "use strict";
      e.exports = n.p + "378d2e61a0746a96.scm";
    },
    341170(e, t, n) {
      "use strict";
      e.exports = n.p + "d5a5dd5a59b729c1.scm";
    },
    630836(e, t, n) {
      "use strict";
      e.exports = n.p + "43a404ef2bacd054.wasm";
    },
    105486(e, t, n) {
      "use strict";
      e.exports = n.p + "e2e4ffe9446b9430.scm";
    },
    876848(e, t, n) {
      "use strict";
      e.exports = n.p + "2ce3dc45e1db6adb.wasm";
    },
    863170(e, t, n) {
      "use strict";
      e.exports = n.p + "b95a3d59c6e54c5a.scm";
    },
    375106(e, t, n) {
      "use strict";
      e.exports = n.p + "3994858ee4a3d1a5.wasm";
    },
    840840(e, t, n) {
      "use strict";
      e.exports = n.p + "c1a7d06de3d1ae83.scm";
    },
    909345(e, t, n) {
      "use strict";
      e.exports = n.p + "b5bfaaa4cb03e124.scm";
    },
    961214(e, t, n) {
      "use strict";
      e.exports = n.p + "3bb8623d0cf32050.wasm";
    },
    182448(e, t, n) {
      "use strict";
      e.exports = n.p + "4c2fad6f8a84d5f2.scm";
    },
    844620(e, t, n) {
      "use strict";
      e.exports = n.p + "73781ffe08a670a8.wasm";
    },
    496015(e, t, n) {
      "use strict";
      e.exports = n.p + "872d0bfaaff74572.scm";
    },
    794344(e, t, n) {
      "use strict";
      e.exports = n.p + "30338096d02ca71a.wasm";
    },
    296961(e, t, n) {
      "use strict";
      e.exports = n.p + "2b31faaf5a622150.scm";
    },
    976264(e, t, n) {
      "use strict";
      e.exports = n.p + "06ed02fb3171cf6d.wasm";
    },
    162770(e, t, n) {
      "use strict";
      e.exports = n.p + "1d975cf88cd6d438.scm";
    },
    586759(e, t, n) {
      "use strict";
      e.exports = n.p + "f78c17604b26eefb.scm";
    },
    242177(e, t, n) {
      "use strict";
      e.exports = n.p + "5002d3c2fa5919d9.scm";
    },
    62326(e, t, n) {
      "use strict";
      e.exports = n.p + "a2c69124836d682e.wasm";
    },
    829099(e, t, n) {
      "use strict";
      e.exports = n.p + "1d57cb39bf3f26f1.scm";
    },
    787120(e, t, n) {
      "use strict";
      e.exports = n.p + "ff93f208f0e34b16.wasm";
    },
    321456(e, t, n) {
      "use strict";
      e.exports = n.p + "9a8a39530b75f971.scm";
    },
    909346(e, t, n) {
      "use strict";
      e.exports = n.p + "6b24e319e808103a.wasm";
    },
    117039(e, t, n) {
      "use strict";
      e.exports = n.p + "9d7a1d34922edf76.scm";
    },
    510248(e, t, n) {
      "use strict";
      e.exports = n.p + "91b449b24fee47e6.wasm";
    },
    924124(e, t, n) {
      "use strict";
      e.exports = n.p + "7fe23f9203b51756.scm";
    },
    568448(e, t, n) {
      "use strict";
      e.exports = n.p + "f9a3103f4ee9d984.wasm";
    },
    515280(e, t, n) {
      "use strict";
      e.exports = n.p + "0d418e559e607820.scm";
    },
    726186(e, t, n) {
      "use strict";
      e.exports = n.p + "f603d7672d6a6e7e.wasm";
    },
    694537(e, t, n) {
      "use strict";
      e.exports = n.p + "0f6cf3430264982a.scm";
    },
    849188(e, t, n) {
      "use strict";
      e.exports = n.p + "3737e12dd107cd70.wasm";
    },
    710232(e, t, n) {
      "use strict";
      e.exports = n.p + "67b407c2a35b083c.scm";
    },
    183721(e, t, n) {
      "use strict";
      e.exports = n.p + "916bab3e06f5d5ba.scm";
    },
    284960(e, t, n) {
      "use strict";
      e.exports = n.p + "b4673c9c89418881.scm";
    },
    741392(e, t, n) {
      "use strict";
      e.exports = n.p + "7a0971b265902e89.wasm";
    },
    290556(e, t, n) {
      "use strict";
      e.exports = n.p + "7cc0acd33f903a55.scm";
    },
    313053(e, t, n) {
      "use strict";
      e.exports = n.p + "fe3cea4ec886ffda.scm";
    },
    379918(e, t, n) {
      "use strict";
      e.exports = n.p + "8cacbd2b1e532bba.wasm";
    },
    520686(e, t, n) {
      "use strict";
      e.exports = n.p + "4ba2f997145549c8.scm";
    },
    574747(e, t, n) {
      "use strict";
      e.exports = n.p + "8f7666f15b118b59.scm";
    },
    474644(e, t, n) {
      "use strict";
      e.exports = n.p + "5778c5dc2395f49c.wasm";
    },
    647044(e, t, n) {
      "use strict";
      e.exports = n.p + "f43f7dedfee334eb.scm";
    },
    130150(e, t, n) {
      "use strict";
      e.exports = n.p + "5c175a2f0586e96b.wasm";
    },
    47703(e, t, n) {
      "use strict";
      e.exports = n.p + "55072d0bf912d0a2.scm";
    },
    118832(e, t, n) {
      "use strict";
      e.exports = n.p + "5d0dc209a50a9e4c.wasm";
    },
    579725(e, t, n) {
      "use strict";
      e.exports = n.p + "0d0a5d0e2c94fe47.scm";
    },
    358344(e, t, n) {
      "use strict";
      e.exports = n.p + "986d76363cefe222.wasm";
    },
    330562(e, t, n) {
      "use strict";
      e.exports = n.p + "58c9a8aed17cb1f1.scm";
    },
    871735(e, t, n) {
      "use strict";
      e.exports = n.p + "e0b7a2d0c737a42b.scm";
    },
    131153(e, t, n) {
      "use strict";
      e.exports = n.p + "0af059d1dd61fef3.scm";
    },
    264908(e, t, n) {
      "use strict";
      e.exports = n.p + "6da9b27ce7cab314.wasm";
    },
    387967(e, t, n) {
      "use strict";
      e.exports = n.p + "1291257665f1e395.scm";
    },
    273682(e, t, n) {
      "use strict";
      e.exports = n.p + "be08ad58feef479c.scm";
    },
    200204(e, t, n) {
      "use strict";
      e.exports = n.p + "0298ed9734c0f49b.scm";
    },
    722640(e, t, n) {
      "use strict";
      e.exports = n.p + "db9153a6cdf43765.wasm";
    },
    201593(e, t, n) {
      "use strict";
      e.exports = n.p + "a52dbc97f447c6f8.scm";
    },
    528350(e, t, n) {
      "use strict";
      e.exports = n.p + "91d438d370df2fb9.scm";
    },
    715604(e, t, n) {
      "use strict";
      e.exports = n.p + "80a5722bc623941c.wasm";
    },
    287788(e, t, n) {
      "use strict";
      e.exports = n.p + "3e482b73ce2f1d69.scm";
    },
    415949(e, t, n) {
      "use strict";
      e.exports = n.p + "d90643289be970b6.scm";
    },
    249018(e, t, n) {
      "use strict";
      e.exports = n.p + "ba009a223769eb8f.wasm";
    },
    527017(e, t, n) {
      "use strict";
      e.exports = n.p + "c74b8f4de42fb2da.scm";
    },
    455544(e, t, n) {
      "use strict";
      e.exports = n.p + "e394548d74912d61.scm";
    },
    753572(e, t, n) {
      "use strict";
      e.exports = n.p + "b5eaffe67f1557c0.wasm";
    },
    496428(e, t, n) {
      "use strict";
      e.exports = n.p + "4edda157d72b3808.scm";
    },
    374154(e, t, n) {
      "use strict";
      e.exports = n.p + "9e4fb139961e70d2.wasm";
    },
    964952(e, t, n) {
      "use strict";
      e.exports = n.p + "7aaa4791a7108ef1.scm";
    },
    923574(e, t, n) {
      "use strict";
      e.exports = n.p + "61665e8e89ab84fd.wasm";
    },
    600759(e, t, n) {
      "use strict";
      e.exports = n.p + "5bac5070b554561d.scm";
    },
    120464(e, t, n) {
      "use strict";
      e.exports = n.p + "3f3519798accc469.wasm";
    },
    813981(e, t, n) {
      "use strict";
      e.exports = n.p + "31a797c4177b7453.scm";
    },
    923604(e, t, n) {
      "use strict";
      e.exports = n.p + "2dc3595467f9ed1b.scm";
    },
    175136(e, t, n) {
      "use strict";
      e.exports = n.p + "6c0268ca4767d79d.wasm";
    },
    833771(e, t, n) {
      "use strict";
      e.exports = n.p + "77cca439b48681fd.scm";
    },
    249184(e, t, n) {
      "use strict";
      e.exports = n.p + "a4bc55505fc9536f.scm";
    },
    756752(e, t, n) {
      "use strict";
      e.exports = n.p + "0557210109298761.wasm";
    },
    381414(e, t, n) {
      "use strict";
      e.exports = n.p + "5862f376888a8350.scm";
    },
    741197(e, t, n) {
      "use strict";
      e.exports = n.p + "e145a14fcbb9a393.scm";
    },
    382934(e, t, n) {
      "use strict";
      e.exports = n.p + "dbee2bca30941847.wasm";
    },
    136635(e, t, n) {
      "use strict";
      e.exports = n.p + "28047f781bb88e3a.scm";
    },
    760486(e, t, n) {
      "use strict";
      e.exports = n.p + "bf7803ec51ec3253.scm";
    },
    952528(e, t, n) {
      "use strict";
      e.exports = n.p + "d6864494d8ed8678.scm";
    },
    611792(e, t, n) {
      "use strict";
      e.exports = n.p + "56a6844e47ed00d6.wasm";
    },
    475414(e, t, n) {
      "use strict";
      e.exports = n.p + "d819ef4b6df05088.scm";
    },
    268344(e, t, n) {
      "use strict";
      e.exports = n.p + "53af3752c754c087.wasm";
    },
    634457(e, t, n) {
      "use strict";
      e.exports = n.p + "ff4875e34b10af15.scm";
    },
    476488(e, t, n) {
      "use strict";
      e.exports = n.p + "5d0750991aa24edb.wasm";
    },
    957587(e, t, n) {
      "use strict";
      e.exports = n.p + "a7fe368b1af4bff9.scm";
    },
    83006(e, t, n) {
      "use strict";
      e.exports = n.p + "9113833583a1967a.scm";
    },
    262416(e, t, n) {
      "use strict";
      e.exports = n.p + "44a11828e0c61f08.wasm";
    },
    235451(e, t, n) {
      "use strict";
      e.exports = n.p + "ab244c7915a4882a.scm";
    },
    979984(e, t, n) {
      "use strict";
      e.exports = n.p + "1a395c1d440d9bb5.scm";
    },
    514640(e, t, n) {
      "use strict";
      e.exports = n.p + "8812aeada150df4d.wasm";
    },
    190926(e, t, n) {
      "use strict";
      e.exports = n.p + "1d745fe76aec1178.scm";
    },
    848790(e, t, n) {
      "use strict";
      e.exports = n.p + "f60b8f5c207e5359.wasm";
    },
    511093(e, t, n) {
      "use strict";
      e.exports = n.p + "5abb4709a74efb87.scm";
    },
    719224(e, t, n) {
      "use strict";
      e.exports = n.p + "cf833be5c054a77a.wasm";
    },
    890484(e, t, n) {
      "use strict";
      e.exports = n.p + "17a02aa0e9d4b682.scm";
    },
    720755(e, t, n) {
      "use strict";
      e.exports = n.p + "f11ea8e873f2ad7a.scm";
    },
    4698(e, t, n) {
      "use strict";
      e.exports = n.p + "02a35fe8e81c2853.wasm";
    },
    465607(e, t, n) {
      "use strict";
      e.exports = n.p + "20d59b30c0bcd07b.scm";
    },
    561666(e, t, n) {
      "use strict";
      e.exports = n.p + "746af5998a0b7ac9.wasm";
    },
    763733(e, t, n) {
      "use strict";
      e.exports = n.p + "880f37d7d46a1210.scm";
    },
    318232(e, t, n) {
      "use strict";
      e.exports = n.p + "ecda9b3ec064a378.wasm";
    },
    433030(e, t, n) {
      "use strict";
      e.exports = n.p + "5f17f56e87bc030f.scm";
    },
    589267(e, t, n) {
      "use strict";
      e.exports = n.p + "ffc798ce19d71d0a.scm";
    },
    551602(e, t, n) {
      "use strict";
      e.exports = n.p + "4feef76a0d7aff8a.wasm";
    },
    37837(e, t, n) {
      "use strict";
      e.exports = n.p + "150079cffc11c19f.scm";
    },
    159108(e, t, n) {
      "use strict";
      e.exports = n.p + "6926cd0c58ac1bf3.scm";
    },
    21306(e, t, n) {
      "use strict";
      e.exports = n.p + "3477e34e77ae4659.scm";
    },
    611456(e, t, n) {
      "use strict";
      e.exports = n.p + "dc4e546ac5258279.wasm";
    },
    718955(e, t, n) {
      "use strict";
      e.exports = n.p + "ba3ff33752bdeb90.scm";
    },
    377366(e, t, n) {
      "use strict";
      e.exports = n.p + "25c677b3c2f23d03.scm";
    },
    986640(e, t, n) {
      "use strict";
      e.exports = n.p + "b65e9a1d7515980c.wasm";
    },
    274590(e, t, n) {
      "use strict";
      e.exports = n.p + "0e68dac0c0691a0c.scm";
    },
    686539(e, t, n) {
      "use strict";
      e.exports = n.p + "b46002b17c746471.scm";
    },
    58037(e, t, n) {
      "use strict";
      e.exports = n.p + "023e042f81f1d190.scm";
    },
    402054(e, t, n) {
      "use strict";
      e.exports = n.p + "fcb059e098364cef.wasm";
    },
    859146(e, t, n) {
      "use strict";
      e.exports = n.p + "4bd633ad81400c98.scm";
    },
    733695(e, t, n) {
      "use strict";
      e.exports = n.p + "7bbbd663402a67c4.scm";
    },
    98185(e, t, n) {
      "use strict";
      e.exports = n.p + "1bd9a135dae6ed53.scm";
    },
    964884(e, t, n) {
      "use strict";
      e.exports = n.p + "7ae3794b81ebcba8.wasm";
    },
    770882(e, t, n) {
      "use strict";
      e.exports = n.p + "9d2904ef6dd5e9fe.scm";
    },
    518112(e, t, n) {
      "use strict";
      e.exports = n.p + "14d4b9d117e56b22.wasm";
    },
    759546(e, t, n) {
      "use strict";
      e.exports = n.p + "3da6afe347130d3e.scm";
    },
    434863(e, t, n) {
      "use strict";
      e.exports = n.p + "ceb6f797636a2e63.scm";
    },
    22169(e, t, n) {
      "use strict";
      e.exports = n.p + "ae8158b5143b2105.scm";
    },
    979322(e, t, n) {
      "use strict";
      e.exports = n.p + "5bd4db186cf51c8b.wasm";
    },
    653454(e, t, n) {
      "use strict";
      e.exports = n.p + "4ed39dc06943c3e2.scm";
    },
    277829(e, t, n) {
      "use strict";
      e.exports = n.p + "48aa74bea3fcda40.scm";
    },
    277612(e, t, n) {
      "use strict";
      e.exports = n.p + "2ec8b637c8e0b57c.wasm";
    },
    605025(e, t, n) {
      "use strict";
      e.exports = n.p + "6a47e50cddd6b30f.scm";
    },
    348844(e, t, n) {
      "use strict";
      e.exports = n.p + "affb5b09ebb90e03.wasm";
    },
    745654(e, t, n) {
      "use strict";
      e.exports = n.p + "180b17205c422875.scm";
    },
    661309(e, t, n) {
      "use strict";
      e.exports = n.p + "27f2b7e9f1c3c033.scm";
    },
    43656(e, t, n) {
      "use strict";
      e.exports = n.p + "fe1336aa068c50d6.wasm";
    },
    164410(e, t, n) {
      "use strict";
      e.exports = n.p + "71e40836c4f58bd2.scm";
    },
    885977(e, t, n) {
      "use strict";
      e.exports = n.p + "27f2b7e9f1c3c033.scm";
    },
    479590(e, t, n) {
      "use strict";
      e.exports = n.p + "56dcffb1426c7643.wasm";
    },
    96023(e, t, n) {
      "use strict";
      e.exports = n.p + "268bf37036a7000e.scm";
    },
    559434(e, t, n) {
      "use strict";
      e.exports = n.p + "672084259765f452.scm";
    },
    545728(e, t, n) {
      "use strict";
      e.exports = n.p + "6a6b6795bb897737.wasm";
    },
    81419(e, t, n) {
      "use strict";
      e.exports = n.p + "1f8dd043494ee1f1.scm";
    },
    76656(e, t, n) {
      "use strict";
      e.exports = n.p + "fa2ccc14c5a0593d.wasm";
    },
    272363(e, t, n) {
      "use strict";
      e.exports = n.p + "89689369445eca3b.scm";
    },
    954096(e, t, n) {
      "use strict";
      e.exports = n.p + "22178b81b24702d6.wasm";
    },
    947101(e, t, n) {
      "use strict";
      e.exports = n.p + "cbaed2f8abecb5b8.scm";
    },
    573076(e, t, n) {
      "use strict";
      e.exports = n.p + "7692b169a722ff31.scm";
    },
    722136(e, t, n) {
      "use strict";
      e.exports = n.p + "8f278c002e0e9784.wasm";
    },
    136625(e, t, n) {
      "use strict";
      e.exports = n.p + "f81d26c65b6725c8.scm";
    },
    368160(e, t, n) {
      "use strict";
      e.exports = n.p + "6e18f7a201cbaf97.scm";
    },
    791720(e, t, n) {
      "use strict";
      e.exports = n.p + "351542e79139fb36.wasm";
    },
    988689(e, t, n) {
      "use strict";
      e.exports = n.p + "d838a86863f4f0dd.scm";
    },
    29248(e, t, n) {
      "use strict";
      e.exports = n.p + "4f098f595413c750.scm";
    },
    156072(e, t, n) {
      "use strict";
      e.exports = n.p + "f0cc1b80f561fb60.wasm";
    },
    665124(e, t, n) {
      "use strict";
      e.exports = n.p + "5e8f3bb7f8d4c68c.scm";
    },
    965310(e, t, n) {
      "use strict";
      e.exports = n.p + "78d9a07eb3de8635.wasm";
    },
    346372(e, t, n) {
      "use strict";
      e.exports = n.p + "338c675ef087c754.scm";
    },
    403884(e, t, n) {
      "use strict";
      e.exports = n.p + "520b8aeb8520dc6b.wasm";
    },
    325686(e, t, n) {
      "use strict";
      e.exports = n.p + "d1978ec42eed74f6.scm";
    },
    707474(e, t, n) {
      "use strict";
      e.exports = n.p + "2e4f937355ef638d.wasm";
    },
    99522(e, t, n) {
      "use strict";
      e.exports = n.p + "de82efe956afcfd0.scm";
    },
    271706(e, t, n) {
      "use strict";
      e.exports = n.p + "cec1113b799cc248.wasm";
    },
    308219(e, t, n) {
      "use strict";
      e.exports = n.p + "07316eddff5889b3.scm";
    },
    227878(e, t, n) {
      "use strict";
      e.exports = n.p + "b5d39ce99749cca1.scm";
    },
    279376(e, t, n) {
      "use strict";
      e.exports = n.p + "d02e778cf34d2166.wasm";
    },
    504496(e, t, n) {
      "use strict";
      e.exports = n.p + "ff32678d88643c9a.scm";
    },
    749616(e, t, n) {
      "use strict";
      e.exports = n.p + "ae550cee3b9e6b43.wasm";
    },
    260501(e, t, n) {
      "use strict";
      e.exports = n.p + "730b0eb89fc46ade.wasm";
    },
    658775(e, t, n) {
      "use strict";
      e.exports = n.p + "8cbbf7598f095e20.wasm";
    },
    527758(e, t, n) {
      "use strict";
      function r(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      n.d(t, { A: () => r });
    },
    416886(e, t, n) {
      "use strict";
      n.d(t, { A: () => i });
      var r = n(682465);
      function i(e, t, n) {
        return (
          (t = (0, r.A)(t)) in e
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
    },
    47312(e, t, n) {
      "use strict";
      n.d(t, { A: () => i });
      var r = n(149859);
      function i(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (0, r.A)(e, t);
      }
    },
    299146(e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
        return n;
      }
      n.d(t, { A: () => r });
    },
    149859(e, t, n) {
      "use strict";
      function r(e, t) {
        return (r = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      n.d(t, { A: () => r });
    },
    728639(e, t, n) {
      "use strict";
      async function r(e) {
        return null;
      }
      n.d(t, {
        WY: () => u,
        gT: () => i,
        Sx: () => o,
        BW: () => a,
        LM: () => s,
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
      function o(e, t, n) {
        return 0 === n ? "" : d.decode(e.HEAPU8.subarray(t, t + n));
      }
      async function s(e) {
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
    584206(e, t, n) {
      "use strict";
      n.d(t, { p: () => r });
      let r = {
        ada: {
          languageId: "ada",
          languageExport: "tree_sitter_ada",
          wasm: new URL(n(577124), n.b),
          highlights: new URL(n(801813), n.b),
          locals: new URL(n(736722), n.b),
        },
        agda: {
          languageId: "agda",
          languageExport: "tree_sitter_agda",
          wasm: new URL(n(738494), n.b),
          highlights: new URL(n(238698), n.b),
        },
        asciidoc: {
          languageId: "asciidoc",
          languageExport: "tree_sitter_asciidoc",
          wasm: new URL(n(785842), n.b),
          highlights: new URL(n(298950), n.b),
        },
        asm: {
          languageId: "asm",
          languageExport: "tree_sitter_asm",
          wasm: new URL(n(713784), n.b),
          highlights: new URL(n(929054), n.b),
          injections: new URL(n(577867), n.b),
        },
        awk: {
          languageId: "awk",
          languageExport: "tree_sitter_awk",
          wasm: new URL(n(173808), n.b),
          highlights: new URL(n(504216), n.b),
        },
        bash: {
          languageId: "bash",
          languageExport: "tree_sitter_bash",
          wasm: new URL(n(674112), n.b),
          highlights: new URL(n(666851), n.b),
        },
        batch: {
          languageId: "batch",
          languageExport: "tree_sitter_batch",
          wasm: new URL(n(183932), n.b),
          highlights: new URL(n(420121), n.b),
        },
        c: {
          languageId: "c",
          languageExport: "tree_sitter_c",
          wasm: new URL(n(222880), n.b),
          highlights: new URL(n(68932), n.b),
        },
        "c-sharp": {
          languageId: "c-sharp",
          languageExport: "tree_sitter_c_sharp",
          wasm: new URL(n(107328), n.b),
          highlights: new URL(n(96281), n.b),
        },
        caddy: {
          languageId: "caddy",
          languageExport: "tree_sitter_caddy",
          wasm: new URL(n(566900), n.b),
          highlights: new URL(n(317562), n.b),
        },
        capnp: {
          languageId: "capnp",
          languageExport: "tree_sitter_capnp",
          wasm: new URL(n(667120), n.b),
          highlights: new URL(n(852811), n.b),
          injections: new URL(n(868406), n.b),
          locals: new URL(n(608256), n.b),
        },
        cedar: {
          languageId: "cedar",
          languageExport: "tree_sitter_cedar",
          wasm: new URL(n(29940), n.b),
          highlights: new URL(n(181538), n.b),
        },
        cedarschema: {
          languageId: "cedarschema",
          languageExport: "tree_sitter_cedarschema",
          wasm: new URL(n(596044), n.b),
          highlights: new URL(n(520573), n.b),
        },
        clojure: {
          languageId: "clojure",
          languageExport: "tree_sitter_clojure",
          wasm: new URL(n(698220), n.b),
          highlights: new URL(n(227341), n.b),
        },
        cmake: {
          languageId: "cmake",
          languageExport: "tree_sitter_cmake",
          wasm: new URL(n(838688), n.b),
          highlights: new URL(n(734834), n.b),
          injections: new URL(n(146727), n.b),
        },
        commonlisp: {
          languageId: "commonlisp",
          languageExport: "tree_sitter_commonlisp",
          wasm: new URL(n(867914), n.b),
          highlights: new URL(n(746052), n.b),
        },
        cpp: {
          languageId: "cpp",
          languageExport: "tree_sitter_cpp",
          wasm: new URL(n(612664), n.b),
          highlights: new URL(n(115964), n.b),
          injections: new URL(n(622109), n.b),
        },
        css: {
          languageId: "css",
          languageExport: "tree_sitter_css",
          wasm: new URL(n(350992), n.b),
          highlights: new URL(n(813710), n.b),
        },
        d: {
          languageId: "d",
          languageExport: "tree_sitter_d",
          wasm: new URL(n(821556), n.b),
          highlights: new URL(n(868485), n.b),
        },
        dart: {
          languageId: "dart",
          languageExport: "tree_sitter_dart",
          wasm: new URL(n(905834), n.b),
          highlights: new URL(n(521948), n.b),
        },
        devicetree: {
          languageId: "devicetree",
          languageExport: "tree_sitter_devicetree",
          wasm: new URL(n(385872), n.b),
          highlights: new URL(n(18811), n.b),
        },
        diff: {
          languageId: "diff",
          languageExport: "tree_sitter_diff",
          wasm: new URL(n(639390), n.b),
          highlights: new URL(n(68958), n.b),
        },
        dockerfile: {
          languageId: "dockerfile",
          languageExport: "tree_sitter_dockerfile",
          wasm: new URL(n(317032), n.b),
          highlights: new URL(n(636879), n.b),
        },
        dot: {
          languageId: "dot",
          languageExport: "tree_sitter_dot",
          wasm: new URL(n(107312), n.b),
          highlights: new URL(n(124638), n.b),
          injections: new URL(n(20235), n.b),
        },
        elisp: {
          languageId: "elisp",
          languageExport: "tree_sitter_elisp",
          wasm: new URL(n(443944), n.b),
          highlights: new URL(n(779754), n.b),
        },
        elixir: {
          languageId: "elixir",
          languageExport: "tree_sitter_elixir",
          wasm: new URL(n(880446), n.b),
          highlights: new URL(n(992642), n.b),
          injections: new URL(n(533815), n.b),
        },
        elm: {
          languageId: "elm",
          languageExport: "tree_sitter_elm",
          wasm: new URL(n(16084), n.b),
          highlights: new URL(n(698533), n.b),
          injections: new URL(n(909628), n.b),
          locals: new URL(n(644610), n.b),
        },
        erlang: {
          languageId: "erlang",
          languageExport: "tree_sitter_erlang",
          wasm: new URL(n(873186), n.b),
          highlights: new URL(n(764158), n.b),
        },
        fish: {
          languageId: "fish",
          languageExport: "tree_sitter_fish",
          wasm: new URL(n(676320), n.b),
          highlights: new URL(n(737719), n.b),
        },
        fsharp: {
          languageId: "fsharp",
          languageExport: "tree_sitter_fsharp",
          wasm: new URL(n(523536), n.b),
          highlights: new URL(n(273359), n.b),
          injections: new URL(n(163362), n.b),
          locals: new URL(n(946748), n.b),
        },
        gleam: {
          languageId: "gleam",
          languageExport: "tree_sitter_gleam",
          wasm: new URL(n(724552), n.b),
          highlights: new URL(n(278749), n.b),
          injections: new URL(n(614804), n.b),
          locals: new URL(n(526378), n.b),
        },
        glsl: {
          languageId: "glsl",
          languageExport: "tree_sitter_glsl",
          wasm: new URL(n(308624), n.b),
          highlights: new URL(n(877365), n.b),
        },
        go: {
          languageId: "go",
          languageExport: "tree_sitter_go",
          wasm: new URL(n(925600), n.b),
          highlights: new URL(n(58659), n.b),
        },
        graphql: {
          languageId: "graphql",
          languageExport: "tree_sitter_graphql",
          wasm: new URL(n(691144), n.b),
          highlights: new URL(n(71652), n.b),
        },
        groovy: {
          languageId: "groovy",
          languageExport: "tree_sitter_groovy",
          wasm: new URL(n(805880), n.b),
          highlights: new URL(n(146991), n.b),
          injections: new URL(n(410626), n.b),
        },
        haskell: {
          languageId: "haskell",
          languageExport: "tree_sitter_haskell",
          wasm: new URL(n(630836), n.b),
          highlights: new URL(n(801525), n.b),
          injections: new URL(n(94284), n.b),
          locals: new URL(n(341170), n.b),
        },
        hcl: {
          languageId: "hcl",
          languageExport: "tree_sitter_hcl",
          wasm: new URL(n(876848), n.b),
          highlights: new URL(n(105486), n.b),
        },
        hlsl: {
          languageId: "hlsl",
          languageExport: "tree_sitter_hlsl",
          wasm: new URL(n(375106), n.b),
          highlights: new URL(n(863170), n.b),
        },
        html: {
          languageId: "html",
          languageExport: "tree_sitter_html",
          wasm: new URL(n(961214), n.b),
          highlights: new URL(n(840840), n.b),
          injections: new URL(n(909345), n.b),
        },
        idris: {
          languageId: "idris",
          languageExport: "tree_sitter_idris",
          wasm: new URL(n(844620), n.b),
          highlights: new URL(n(182448), n.b),
        },
        ini: {
          languageId: "ini",
          languageExport: "tree_sitter_ini",
          wasm: new URL(n(794344), n.b),
          highlights: new URL(n(496015), n.b),
        },
        java: {
          languageId: "java",
          languageExport: "tree_sitter_java",
          wasm: new URL(n(976264), n.b),
          highlights: new URL(n(296961), n.b),
        },
        javascript: {
          languageId: "javascript",
          languageExport: "tree_sitter_javascript",
          wasm: new URL(n(62326), n.b),
          highlights: new URL(n(162770), n.b),
          injections: new URL(n(586759), n.b),
          locals: new URL(n(242177), n.b),
        },
        jinja2: {
          languageId: "jinja2",
          languageExport: "tree_sitter_jinja2",
          wasm: new URL(n(787120), n.b),
          highlights: new URL(n(829099), n.b),
        },
        jq: {
          languageId: "jq",
          languageExport: "tree_sitter_jq",
          wasm: new URL(n(909346), n.b),
          highlights: new URL(n(321456), n.b),
        },
        json: {
          languageId: "json",
          languageExport: "tree_sitter_json",
          wasm: new URL(n(510248), n.b),
          highlights: new URL(n(117039), n.b),
        },
        julia: {
          languageId: "julia",
          languageExport: "tree_sitter_julia",
          wasm: new URL(n(568448), n.b),
          highlights: new URL(n(924124), n.b),
        },
        kotlin: {
          languageId: "kotlin",
          languageExport: "tree_sitter_kotlin",
          wasm: new URL(n(726186), n.b),
          highlights: new URL(n(515280), n.b),
        },
        lean: {
          languageId: "lean",
          languageExport: "tree_sitter_lean",
          wasm: new URL(n(849188), n.b),
          highlights: new URL(n(694537), n.b),
        },
        lua: {
          languageId: "lua",
          languageExport: "tree_sitter_lua",
          wasm: new URL(n(741392), n.b),
          highlights: new URL(n(710232), n.b),
          injections: new URL(n(183721), n.b),
          locals: new URL(n(284960), n.b),
        },
        markdown: {
          languageId: "markdown",
          languageExport: "tree_sitter_markdown",
          wasm: new URL(n(379918), n.b),
          highlights: new URL(n(290556), n.b),
          injections: new URL(n(313053), n.b),
        },
        markdown_inline: {
          languageId: "markdown_inline",
          languageExport: "tree_sitter_markdown_inline",
          wasm: new URL(n(474644), n.b),
          highlights: new URL(n(520686), n.b),
          injections: new URL(n(574747), n.b),
        },
        matlab: {
          languageId: "matlab",
          languageExport: "tree_sitter_matlab",
          wasm: new URL(n(130150), n.b),
          highlights: new URL(n(647044), n.b),
        },
        meson: {
          languageId: "meson",
          languageExport: "tree_sitter_meson",
          wasm: new URL(n(118832), n.b),
          highlights: new URL(n(47703), n.b),
        },
        ninja: {
          languageId: "ninja",
          languageExport: "tree_sitter_ninja",
          wasm: new URL(n(358344), n.b),
          highlights: new URL(n(579725), n.b),
        },
        nix: {
          languageId: "nix",
          languageExport: "tree_sitter_nix",
          wasm: new URL(n(264908), n.b),
          highlights: new URL(n(330562), n.b),
          injections: new URL(n(871735), n.b),
          locals: new URL(n(131153), n.b),
        },
        objc: {
          languageId: "objc",
          languageExport: "tree_sitter_objc",
          wasm: new URL(n(722640), n.b),
          highlights: new URL(n(387967), n.b),
          injections: new URL(n(273682), n.b),
          locals: new URL(n(200204), n.b),
        },
        ocaml: {
          languageId: "ocaml",
          languageExport: "tree_sitter_ocaml",
          wasm: new URL(n(715604), n.b),
          highlights: new URL(n(201593), n.b),
          locals: new URL(n(528350), n.b),
        },
        perl: {
          languageId: "perl",
          languageExport: "tree_sitter_perl",
          wasm: new URL(n(249018), n.b),
          highlights: new URL(n(287788), n.b),
          injections: new URL(n(415949), n.b),
        },
        php: {
          languageId: "php",
          languageExport: "tree_sitter_php",
          wasm: new URL(n(753572), n.b),
          highlights: new URL(n(527017), n.b),
          injections: new URL(n(455544), n.b),
        },
        postscript: {
          languageId: "postscript",
          languageExport: "tree_sitter_postscript",
          wasm: new URL(n(374154), n.b),
          highlights: new URL(n(496428), n.b),
        },
        powershell: {
          languageId: "powershell",
          languageExport: "tree_sitter_powershell",
          wasm: new URL(n(923574), n.b),
          highlights: new URL(n(964952), n.b),
        },
        python: {
          languageId: "python",
          languageExport: "tree_sitter_python",
          wasm: new URL(n(120464), n.b),
          highlights: new URL(n(600759), n.b),
        },
        query: {
          languageId: "query",
          languageExport: "tree_sitter_query",
          wasm: new URL(n(175136), n.b),
          highlights: new URL(n(813981), n.b),
          injections: new URL(n(923604), n.b),
        },
        r: {
          languageId: "r",
          languageExport: "tree_sitter_r",
          wasm: new URL(n(756752), n.b),
          highlights: new URL(n(833771), n.b),
          locals: new URL(n(249184), n.b),
        },
        rego: {
          languageId: "rego",
          languageExport: "tree_sitter_rego",
          wasm: new URL(n(382934), n.b),
          highlights: new URL(n(381414), n.b),
          locals: new URL(n(741197), n.b),
        },
        rescript: {
          languageId: "rescript",
          languageExport: "tree_sitter_rescript",
          wasm: new URL(n(611792), n.b),
          highlights: new URL(n(136635), n.b),
          injections: new URL(n(760486), n.b),
          locals: new URL(n(952528), n.b),
        },
        ron: {
          languageId: "ron",
          languageExport: "tree_sitter_ron",
          wasm: new URL(n(268344), n.b),
          highlights: new URL(n(475414), n.b),
        },
        ruby: {
          languageId: "ruby",
          languageExport: "tree_sitter_ruby",
          wasm: new URL(n(476488), n.b),
          highlights: new URL(n(634457), n.b),
        },
        rust: {
          languageId: "rust",
          languageExport: "tree_sitter_rust_orchard",
          wasm: new URL(n(262416), n.b),
          highlights: new URL(n(957587), n.b),
          injections: new URL(n(83006), n.b),
        },
        scala: {
          languageId: "scala",
          languageExport: "tree_sitter_scala",
          wasm: new URL(n(514640), n.b),
          highlights: new URL(n(235451), n.b),
          locals: new URL(n(979984), n.b),
        },
        scheme: {
          languageId: "scheme",
          languageExport: "tree_sitter_scheme",
          wasm: new URL(n(848790), n.b),
          highlights: new URL(n(190926), n.b),
        },
        scss: {
          languageId: "scss",
          languageExport: "tree_sitter_scss",
          wasm: new URL(n(719224), n.b),
          highlights: new URL(n(511093), n.b),
        },
        solidity: {
          languageId: "solidity",
          languageExport: "tree_sitter_solidity",
          wasm: new URL(n(4698), n.b),
          highlights: new URL(n(890484), n.b),
          locals: new URL(n(720755), n.b),
        },
        sparql: {
          languageId: "sparql",
          languageExport: "tree_sitter_sparql",
          wasm: new URL(n(561666), n.b),
          highlights: new URL(n(465607), n.b),
        },
        sql: {
          languageId: "sql",
          languageExport: "tree_sitter_sql",
          wasm: new URL(n(318232), n.b),
          highlights: new URL(n(763733), n.b),
        },
        "ssh-config": {
          languageId: "ssh-config",
          languageExport: "tree_sitter_ssh_config",
          wasm: new URL(n(551602), n.b),
          highlights: new URL(n(433030), n.b),
          injections: new URL(n(589267), n.b),
        },
        starlark: {
          languageId: "starlark",
          languageExport: "tree_sitter_starlark",
          wasm: new URL(n(611456), n.b),
          highlights: new URL(n(37837), n.b),
          injections: new URL(n(159108), n.b),
          locals: new URL(n(21306), n.b),
        },
        styx: {
          languageId: "styx",
          languageExport: "tree_sitter_styx",
          wasm: new URL(n(986640), n.b),
          highlights: new URL(n(718955), n.b),
          injections: new URL(n(377366), n.b),
        },
        svelte: {
          languageId: "svelte",
          languageExport: "tree_sitter_svelte",
          wasm: new URL(n(402054), n.b),
          highlights: new URL(n(274590), n.b),
          injections: new URL(n(686539), n.b),
          locals: new URL(n(58037), n.b),
        },
        swift: {
          languageId: "swift",
          languageExport: "tree_sitter_swift",
          wasm: new URL(n(964884), n.b),
          highlights: new URL(n(859146), n.b),
          injections: new URL(n(733695), n.b),
          locals: new URL(n(98185), n.b),
        },
        textproto: {
          languageId: "textproto",
          languageExport: "tree_sitter_textproto",
          wasm: new URL(n(518112), n.b),
          highlights: new URL(n(770882), n.b),
        },
        thrift: {
          languageId: "thrift",
          languageExport: "tree_sitter_thrift",
          wasm: new URL(n(979322), n.b),
          highlights: new URL(n(759546), n.b),
          injections: new URL(n(434863), n.b),
          locals: new URL(n(22169), n.b),
        },
        tlaplus: {
          languageId: "tlaplus",
          languageExport: "tree_sitter_tlaplus",
          wasm: new URL(n(277612), n.b),
          highlights: new URL(n(653454), n.b),
          locals: new URL(n(277829), n.b),
        },
        toml: {
          languageId: "toml",
          languageExport: "tree_sitter_toml",
          wasm: new URL(n(348844), n.b),
          highlights: new URL(n(605025), n.b),
        },
        tsx: {
          languageId: "tsx",
          languageExport: "tree_sitter_tsx",
          wasm: new URL(n(43656), n.b),
          highlights: new URL(n(745654), n.b),
          locals: new URL(n(661309), n.b),
        },
        typescript: {
          languageId: "typescript",
          languageExport: "tree_sitter_typescript",
          wasm: new URL(n(479590), n.b),
          highlights: new URL(n(164410), n.b),
          locals: new URL(n(885977), n.b),
        },
        typst: {
          languageId: "typst",
          languageExport: "tree_sitter_typst",
          wasm: new URL(n(545728), n.b),
          highlights: new URL(n(96023), n.b),
          injections: new URL(n(559434), n.b),
        },
        verilog: {
          languageId: "verilog",
          languageExport: "tree_sitter_verilog",
          wasm: new URL(n(76656), n.b),
          highlights: new URL(n(81419), n.b),
        },
        vhdl: {
          languageId: "vhdl",
          languageExport: "tree_sitter_vhdl",
          wasm: new URL(n(954096), n.b),
          highlights: new URL(n(272363), n.b),
        },
        vim: {
          languageId: "vim",
          languageExport: "tree_sitter_vim",
          wasm: new URL(n(722136), n.b),
          highlights: new URL(n(947101), n.b),
          injections: new URL(n(573076), n.b),
        },
        vue: {
          languageId: "vue",
          languageExport: "tree_sitter_vue",
          wasm: new URL(n(791720), n.b),
          highlights: new URL(n(136625), n.b),
          injections: new URL(n(368160), n.b),
        },
        wit: {
          languageId: "wit",
          languageExport: "tree_sitter_wit",
          wasm: new URL(n(156072), n.b),
          highlights: new URL(n(988689), n.b),
          injections: new URL(n(29248), n.b),
        },
        x86asm: {
          languageId: "x86asm",
          languageExport: "tree_sitter_x86asm",
          wasm: new URL(n(965310), n.b),
          highlights: new URL(n(665124), n.b),
        },
        xml: {
          languageId: "xml",
          languageExport: "tree_sitter_xml",
          wasm: new URL(n(403884), n.b),
          highlights: new URL(n(346372), n.b),
        },
        yaml: {
          languageId: "yaml",
          languageExport: "tree_sitter_yaml",
          wasm: new URL(n(707474), n.b),
          highlights: new URL(n(325686), n.b),
        },
        yuri: {
          languageId: "yuri",
          languageExport: "tree_sitter_yuri",
          wasm: new URL(n(271706), n.b),
          highlights: new URL(n(99522), n.b),
        },
        zig: {
          languageId: "zig",
          languageExport: "tree_sitter_zig",
          wasm: new URL(n(279376), n.b),
          highlights: new URL(n(308219), n.b),
          injections: new URL(n(227878), n.b),
        },
        zsh: {
          languageId: "zsh",
          languageExport: "tree_sitter_zsh",
          wasm: new URL(n(749616), n.b),
          highlights: new URL(n(504496), n.b),
        },
      };
    },
    632438(e, t, n) {
      "use strict";
      n.d(t, { A: () => i });
      var r = n(728639);
      async function i() {
        let e = await u(),
          [t, i] = await Promise.all([
            (0, r.LM)(new URL(n(260501), n.b)),
            (0, r.LM)(new URL(n(658775), n.b)),
          ]),
          o = await e({ wasmBinary: t }),
          s = await o.loadWebAssemblyModule(i, { loadAsync: !0 });
        return new a(o, s);
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
          let [u, c] = (0, r.BW)(this.host, e.languageId),
            [l, d] = (0, r.BW)(this.host, n),
            [f, h] = (0, r.BW)(this.host, i),
            [p, m] = (0, r.BW)(this.host, a),
            g = 0;
          try {
            g = this.abi.arborium_rt_register_grammar(
              s,
              u,
              c,
              l,
              d,
              f,
              h,
              p,
              m,
            );
          } finally {
            u && this.host._free(u),
              l && this.host._free(l),
              f && this.host._free(f),
              p && this.host._free(p);
          }
          if (0 === g)
            throw new r.gT(
              "grammar-registration-failed",
              "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
          return new o(this, g, s, e.languageId);
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
          return new s(this, e);
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
      class s {
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
                  ? { spans: [], injections: [], timed_out: !1 }
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
                      timed_out_languages: [],
                    }
                  : JSON.parse(e),
            );
          return {
            spans: n.spans,
            missingInjections: n.missing_injections,
            timedOutLanguages: n.timed_out_languages,
          };
        }
        highlightToHtml(e = {}) {
          this.#t();
          let t = e.maxInjectionDepth ?? 3,
            n = e.format ?? { kind: "custom-elements" },
            { host: i } = this.grammar.runtime,
            { code: a, prefix: o } = (function (e) {
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
            [s, u] = (0, r.BW)(i, o);
          try {
            let e = this.#r(
              "highlight-failed",
              (e, n) =>
                this.grammar.runtime.abi.arborium_rt_highlight_to_html(
                  this.id,
                  t,
                  a,
                  s,
                  u,
                  e,
                  n,
                ),
              (e) =>
                0 === e.length
                  ? {
                      html: "",
                      missing_injections: [],
                      timed_out_languages: [],
                    }
                  : JSON.parse(e),
            );
            return {
              html: e.html,
              missingInjections: e.missing_injections,
              timedOutLanguages: e.timed_out_languages,
            };
          } finally {
            s && i._free(s);
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
            o = i._malloc(4),
            s = i._malloc(4);
          try {
            let u = t(o, s);
            if (0 !== u)
              throw new r.gT(e, `arborium_rt call returned status ${u}`);
            let c = i.getValue(o, "i32"),
              l = i.getValue(s, "i32");
            if (0 === l) return n("");
            try {
              return n((0, r.Sx)(i, c, l));
            } finally {
              a.arborium_rt_free(c, l);
            }
          } finally {
            i._free(o), i._free(s);
          }
        }
      }
      async function u() {
        return (await n.e("532914").then(n.bind(n, 184009))).default;
      }
    },
    120330(e, t, n) {
      "use strict";
      n.d(t, {
        BT: () => s,
        Wt: () => c,
        bf: () => o,
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
      function o(e) {
        if ("symbol" == typeof e)
          throw TypeError("Cannot convert a Symbol value to a string");
        return String(e);
      }
      function s(e) {
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
        let o = Number(a);
        if (isNaN(o) || o < n || o > r)
          throw RangeError(`${o} is outside of range [${n}, ${r}]`);
        return Math.floor(o);
      }
      n.d(t, { z: () => r });
    },
    518375(e, t, n) {
      "use strict";
      n.d(t, { W: () => i });
      var r = n(120330);
      function i(e, t, n, i, a) {
        if ("object" != typeof e) throw TypeError("Options must be an object");
        let o = e[t];
        if (void 0 !== o) {
          if ("boolean" !== n && "string" !== n)
            throw TypeError("invalid type");
          if (
            ("boolean" === n && (o = !!o),
            "string" === n && (o = (0, r.bf)(o)),
            void 0 !== i && !i.filter((e) => e == o).length)
          )
            throw RangeError(`${o} is not within ${i.join(", ")}`);
          return o;
        }
        return a;
      }
    },
    29685(e, t, n) {
      "use strict";
      n.d(t, { U: () => s });
      var r = n(183580),
        i = n(26232),
        a = n(120330),
        o = n(518375);
      function s(e, t, n) {
        return (
          void 0 !== n &&
            ((n = (0, a.BT)(n)),
            (0, o.W)(
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
                o = (0, r.q)(e, t);
              o && n.push(o);
            }
            return n;
          })(Array.from(e), t)
        );
      }
    },
    243399(e, t, n) {
      "use strict";
      n.d(t, { A4: () => o, Nt: () => a, V1: () => i });
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
      let o = (0, r.B)((...e) => new Intl.ListFormat(...e), {
        strategy: r.W.variadic,
      });
    },
    315847(e, t, n) {
      "use strict";
      function r(e, t) {
        let n = t && t.cache ? t.cache : u,
          r = t && t.serializer ? t.serializer : o;
        return (
          t && t.strategy
            ? t.strategy
            : function (e, t) {
                var n, r;
                let o = 1 === e.length ? i : a;
                return (
                  (n = t.cache.create()),
                  (r = t.serializer),
                  o.bind(this, e, n, r)
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
      let o = function () {
        return JSON.stringify(arguments);
      };
      class s {
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
            return new s();
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
      function i(e, t, n, i, a, o) {
        let s = (0, r.W)(t, e, "string", i, void 0),
          u = "always";
        void 0 === s &&
          ("digital" === n
            ? ("hours" !== e &&
                "minutes" !== e &&
                "seconds" !== e &&
                (u = "auto"),
              (s = a))
            : ((u = "auto"),
              (s = "numeric" === o || "2-digit" === o ? "numeric" : n)));
        let c = `${e}Display`,
          l = (0, r.W)(t, c, "string", ["always", "auto"], u);
        if ("numeric" === o || "2-digit" === o) {
          if ("numeric" !== s && "2-digit" !== s)
            throw RangeError("Can't mix numeric and non-numeric styles");
          if (
            (("minutes" === e || "seconds" === e) && (s = "2-digit"),
            "numeric" === s &&
              "always" === l &&
              ("milliseconds" === e ||
                "microseconds" === e ||
                "nanoseconds" === e))
          )
            throw RangeError(
              "Can't display milliseconds, microseconds, or nanoseconds in numeric format",
            );
        }
        return { style: s, display: l };
      }
    },
    369364(e, t, n) {
      "use strict";
      n.d(t, { m: () => s });
      var r = n(243399),
        i = n(206311),
        a = n(411211),
        o = n(501974);
      function s(e, t) {
        let n = [],
          s = !1,
          u = !1,
          c = (0, o.n)(e),
          l = c.dataLocale,
          d = a.Y.localeData[l];
        if (!d) throw TypeError("Invalid locale");
        let f = c.numberingSystem,
          h = d.digitalFormat[f];
        for (let e = 0; e < i.u.length && !s; e++) {
          let a = i.u[e],
            o = t[a.valueField],
            l = c[a.styleSlot],
            d = c[a.displaySlot],
            { unit: f, numberFormatUnit: p } = a,
            m = Object.create(null);
          ("seconds" === f || "milliseconds" === f || "microseconds" === f) &&
            "numeric" ===
              ("seconds" === f
                ? c.milliseconds
                : "milliseconds" === f
                  ? c.microseconds
                  : c.nanoseconds) &&
            ("seconds" === f
              ? (o +=
                  t.milliseconds / 1e3 +
                  t.microseconds / 1e6 +
                  t.nanoseconds / 1e9)
              : "milliseconds" === f
                ? (o += t.microseconds / 1e3 + t.nanoseconds / 1e6)
                : (o += t.nanoseconds / 1e3),
            void 0 === c.fractionalDigits
              ? ((m.maximumFractionDigits = 9), (m.minimumFractionDigits = 0))
              : ((m.maximumFractionDigits = c.fractionalDigits),
                (m.minimumFractionDigits = c.fractionalDigits)),
            (m.roundingMode = "trunc"),
            (s = !0));
          if (0 !== o || "auto" !== d) {
            let e;
            (m.numberingSystem = c.numberingSystem),
              "2-digit" === l && (m.minimumIntegerDigits = 2),
              "2-digit" !== l &&
                "numeric" !== l &&
                ((m.style = "unit"), (m.unit = p), (m.unitDisplay = l));
            let t = (0, r.Nt)(c.locale, m);
            u
              ? (e = n[n.length - 1]).push({ type: "literal", value: h })
              : (e = []),
              t.formatToParts(o).forEach(({ type: t, value: n }) => {
                e.push({ type: t, value: n, unit: p });
              }),
              u ||
                (("2-digit" === l || "numeric" === l) && (u = !0), n.push(e));
          } else u = !1;
        }
        let p = Object.create(null);
        p.type = "unit";
        let m = c.style;
        "digital" === m && (m = "short"), (p.style = m);
        let g = (0, r.A4)(c.locale, p),
          _ = [];
        for (let e of n) {
          let t = "";
          for (let { value: n } of e) t += n;
          _.push(t);
        }
        let y = g.formatToParts(_),
          v = 0,
          b = n.length,
          w = [];
        for (let { type: e, value: t } of y)
          if ("element" === e) {
            for (let e of ((0, r.V1)(v < b, "Index out of bounds"), n[v]))
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
      n.d(t, { H: () => s }), n(632459);
      var r = n(243399),
        i = n(206311),
        a = n(120330);
      function o(e) {
        let t = (0, a.xC)(e);
        return (0, r.V1)(t.isInteger(), `${e} is not an integer`), t.toNumber();
      }
      function s(e) {
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
          (void 0 !== e.days && (t.days = o(e.days)),
          void 0 !== e.hours && (t.hours = o(e.hours)),
          void 0 !== e.microseconds && (t.microseconds = o(e.microseconds)),
          void 0 !== e.milliseconds && (t.milliseconds = o(e.milliseconds)),
          void 0 !== e.minutes && (t.minutes = o(e.minutes)),
          void 0 !== e.months && (t.months = o(e.months)),
          void 0 !== e.nanoseconds && (t.nanoseconds = o(e.nanoseconds)),
          void 0 !== e.seconds && (t.seconds = o(e.seconds)),
          void 0 !== e.weeks && (t.weeks = o(e.weeks)),
          void 0 !== e.years && (t.years = o(e.years)),
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
      n.d(t, { B: () => o });
      var r = n(26232);
      function i(e) {
        return Intl.getCanonicalLocales(e)[0];
      }
      var a = n(183580);
      function o(e, t, n, o, s, u) {
        let c, l;
        if ("lookup" === n.localeMatcher)
          c = (function (e, t, n) {
            let i = { locale: "" };
            for (let n of t) {
              let t = n.replace(r.KB, ""),
                o = (0, a.q)(e, t);
              if (o)
                return (
                  (i.locale = o),
                  n !== t && (i.extension = n.slice(t.length, n.length)),
                  i
                );
            }
            return (i.locale = n()), i;
          })(Array.from(e), t, u);
        else {
          var d;
          let n, i, a, o, s;
          (d = Array.from(e)),
            (a = []),
            (o = t.reduce((e, t) => {
              let n = t.replace(r.KB, "");
              return a.push(n), (e[n] = t), e;
            }, {})),
            (s = (0, r.B4)(a, d)).matchedSupportedLocale &&
              s.matchedDesiredLocale &&
              ((n = s.matchedSupportedLocale),
              (i =
                o[s.matchedDesiredLocale].slice(
                  s.matchedDesiredLocale.length,
                ) || void 0)),
            (c = n ? { locale: n, extension: i } : { locale: u() });
        }
        null == c && (c = { locale: u(), extension: "" });
        let f = c.locale,
          h = s[f],
          p = { locale: "en", dataLocale: f };
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
                o = 3;
              for (; o < a; ) {
                let s,
                  u = e.indexOf("-", o);
                s = -1 === u ? a - o : u - o;
                let c = e.slice(o, o + s);
                (0, r.V1)(
                  s >= 2,
                  "Expected a subtag to have at least 2 characters",
                ),
                  void 0 === t && 2 != s
                    ? -1 === n.indexOf(c) && n.push(c)
                    : 2 === s
                      ? ((t = { key: c, value: "" }),
                        void 0 === i.find((e) => e.key === t?.key) && i.push(t))
                      : t?.value === ""
                        ? (t.value = c)
                        : ((0, r.V1)(
                            void 0 !== t,
                            "Expected keyword to be defined",
                          ),
                          (t.value += "-" + c)),
                  (o += s + 1);
              }
              return { attributes: n, keywords: i };
            })(c.extension).keywords
          : [];
        let m = [];
        for (let e of o) {
          let t,
            i = h?.[e] ?? [];
          (0, r.V1)(
            Array.isArray(i),
            `keyLocaleData for ${e} must be an array`,
          );
          let a = i[0];
          (0, r.V1)(
            void 0 === a || "string" == typeof a,
            "value must be a string or undefined",
          );
          let o = l.find((t) => t.key === e);
          if (o) {
            let n = o.value;
            "" !== n
              ? i.indexOf(n) > -1 && (t = { key: e, value: (a = n) })
              : i.indexOf("true") > -1 && (t = { key: e, value: (a = "true") });
          }
          let s = n[e];
          (0, r.V1)(
            null == s || "string" == typeof s,
            "optionsValue must be a string or undefined",
          ),
            "string" == typeof s &&
              "" ===
                (s = (function (e, t) {
                  let n = t.toLowerCase();
                  return (0, r.V1)(void 0 !== e, "ukey must be defined"), n;
                })(e.toLowerCase(), s)) &&
              (s = "true"),
            s !== a && i.indexOf(s) > -1 && ((a = s), (t = void 0)),
            t && m.push(t),
            (p[e] = a);
        }
        return (
          m.length > 0 &&
            (f = (function (e, t, n) {
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
              let o = e.indexOf("-x-");
              return i(-1 === o ? e + a : e.slice(0, o) + a + e.slice(o));
            })(f, [], m)),
          (p.locale = f),
          p
        );
      }
    },
    26232(e, t, n) {
      "use strict";
      let r;
      n.d(t, { KB: () => s, B4: () => p, V1: () => u });
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
        o = {
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
        s = /-u(?:-[0-9a-z]{2,8})+/gi;
      function u(e, t, n = Error) {
        if (!e) throw new n(t);
      }
      function c(e, t, n) {
        let [r, i, a] = t.split("-"),
          s = !0;
        if (a && "$" === a[0]) {
          let t = "!" !== a[1],
            r = (t ? n[a.slice(1)] : n[a.slice(2)])
              .map((e) => o[e] || [e])
              .reduce((e, t) => [...e, ...t], []);
          s &&= r.indexOf(e.region || "") > -1 == t;
        } else s &&= !e.region || "*" === a || a === e.region;
        return (
          (s &&= !e.script || "*" === i || i === e.script),
          (s &&= !e.language || "*" === r || r === e.language)
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
      let f = (0, i.B)(
          function (e, t) {
            let n = new Intl.Locale(e).maximize(),
              i = new Intl.Locale(t).maximize(),
              o = {
                language: n.language,
                script: n.script || "",
                region: n.region || "",
              },
              s = {
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
              o.language !== s.language &&
                (u += d(
                  { language: n.language, script: "", region: "" },
                  { language: i.language, script: "", region: "" },
                  c,
                )),
              o.script !== s.script &&
                (u += d(
                  { language: n.language, script: o.script, region: "" },
                  { language: i.language, script: s.script, region: "" },
                  c,
                )),
              o.region !== s.region && (u += d(o, s, c)),
              u
            );
          },
          { serializer: (e) => `${e[0]}|${e[1]}` },
        ),
        h = new WeakMap();
      function p(e, t, n = 838) {
        let r = 1 / 0,
          i = { matchedDesiredLocale: "", distances: {} },
          a = h.get(t);
        a ||
          ((a = t.map((e) => {
            try {
              return Intl.getCanonicalLocales([e])[0] || e;
            } catch {
              return e;
            }
          })),
          h.set(t, a));
        let o = new Set(a);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (o.has(n)) {
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
              for (let s = 0; s < a.length; s++) {
                let u = a[s];
                if (u !== n && o.has(u)) {
                  let a;
                  try {
                    a =
                      new Intl.Locale(u).maximize().toString() === e
                        ? 0 + 40 * t
                        : 10 * s + 40 * t;
                  } catch {
                    a = 10 * s + 40 * t;
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
                a.forEach((a, o) => {
                  let s = t[o],
                    u = f(e, a) + 0 + 40 * n;
                  (i.distances[e][s] = u),
                    u < r &&
                      ((r = u),
                      (i.matchedDesiredLocale = e),
                      (i.matchedSupportedLocale = s));
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
        return !!e && !!e[B];
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
            !!e[N] ||
            !!(null == (t = e.constructor) ? void 0 : t[N]) ||
            l(e) ||
            d(e))
        );
      }
      function o(e, t, n) {
        void 0 === n && (n = !1),
          0 === s(e)
            ? (n ? Object.keys : H)(e).forEach(function (r) {
                (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                return t(r, n, e);
              });
      }
      function s(e) {
        var t = e[B];
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
        return 2 === s(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function c(e, t, n) {
        var r = s(e);
        2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
      }
      function l(e) {
        return M && e instanceof Map;
      }
      function d(e) {
        return U && e instanceof Set;
      }
      function f(e) {
        return e.o || e.t;
      }
      function h(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = W(e);
        delete t[B];
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
          g(e) ||
            i(e) ||
            !a(e) ||
            (s(e) > 1 && (e.set = e.add = e.clear = e.delete = m),
            Object.freeze(e),
            t &&
              o(
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
        r(2);
      }
      function g(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function _(e) {
        var t = z[e];
        return t || r(18, e), t;
      }
      n.d(t, { Qx: () => i, jM: () => Y, mq: () => Z, vD: () => Q });
      function y(e, t) {
        t && (_("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function v(e) {
        b(e), e.p.forEach(T), (e.p = null);
      }
      function b(e) {
        e === I && (I = e.l);
      }
      function w(e) {
        return (I = { p: [], l: I, h: e, m: !0, _: 0 });
      }
      function T(e) {
        var t = e[B];
        0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
      }
      function E(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          i = void 0 !== e && e !== n;
        return (
          t.h.O || _("ES5").S(t, e, i),
          i
            ? (n[B].P && (v(t), r(4)),
              a(e) && ((e = x(t, e)), t.l || k(t, e)),
              t.u && _("Patches").M(n[B].t, e, t.u, t.s))
            : (e = x(t, n, [])),
          v(t),
          t.u && t.v(t.u, t.s),
          e !== F ? e : void 0
        );
      }
      function x(e, t, n) {
        if (g(t)) return t;
        var r = t[B];
        if (!r)
          return (
            o(
              t,
              function (i, a) {
                return V(e, r, t, i, a, n);
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
            s = !1;
          3 === r.i && ((a = new Set(i)), i.clear(), (s = !0)),
            o(a, function (t, a) {
              return V(e, r, i, t, a, n, s);
            }),
            k(e, i, !1),
            n && e.u && _("Patches").N(r, n, e.u, e.s);
        }
        return r.o;
      }
      function V(e, t, n, r, o, s, l) {
        if (i(o)) {
          var d = x(
            e,
            o,
            s && t && 3 !== t.i && !u(t.R, r) ? s.concat(r) : void 0,
          );
          if ((c(n, r, d), !i(d))) return;
          e.m = !1;
        } else l && n.add(o);
        if (a(o) && !g(o)) {
          if (!e.h.D && e._ < 1) return;
          x(e, o), (t && t.A.l) || k(e, o);
        }
      }
      function k(e, t, n) {
        void 0 === n && (n = !1), !e.l && e.h.D && e.m && p(t, n);
      }
      function A(e, t) {
        var n = e[B];
        return (n ? f(n) : e)[t];
      }
      function S(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function O(e) {
        e.P || ((e.P = !0), e.l && O(e.l));
      }
      function R(e) {
        e.o || (e.o = h(e.t));
      }
      function P(e, t, n) {
        var r,
          i,
          a,
          o,
          s,
          u,
          c,
          f = l(t)
            ? _("MapSet").F(t, n)
            : d(t)
              ? _("MapSet").T(t, n)
              : e.O
                ? ((a = i =
                    {
                      i: +!!(r = Array.isArray(t)),
                      A: n ? n.A : I,
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
                  (o = q),
                  r && ((a = [i]), (o = K)),
                  (u = (s = Proxy.revocable(a, o)).revoke),
                  (i.k = c = s.proxy),
                  (i.j = u),
                  c)
                : _("ES5").J(t, n);
        return (n ? n.A : I).p.push(f), f;
      }
      function C(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return h(e);
      }
      var L,
        I,
        D = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
        M = "u" > typeof Map,
        U = "u" > typeof Set,
        j =
          "u" > typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "u" > typeof Reflect,
        F = D
          ? Symbol.for("immer-nothing")
          : (((L = {})["immer-nothing"] = !0), L),
        N = D ? Symbol.for("immer-draftable") : "__$immer_draftable",
        B = D ? Symbol.for("immer-state") : "__$immer_state",
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
        q = {
          get: function (e, t) {
            if (t === B) return e;
            var n,
              r,
              i = f(e);
            if (!u(i, t))
              return (r = S(i, t))
                ? "value" in r
                  ? r.value
                  : null == (n = r.get)
                    ? void 0
                    : n.call(e.k)
                : void 0;
            var o = i[t];
            return e.I || !a(o)
              ? o
              : o === A(e.t, t)
                ? (R(e), (e.o[t] = P(e.A.h, o, e)))
                : o;
          },
          has: function (e, t) {
            return t in f(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(f(e));
          },
          set: function (e, t, n) {
            var r = S(f(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var i = A(f(e), t),
                a = null == i ? void 0 : i[B];
              if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
              if (
                (n === i ? 0 !== n || 1 / n == 1 / i : n != n && i != i) &&
                (void 0 !== n || u(e.t, t))
              )
                return !0;
              R(e), O(e);
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
                ? ((e.R[t] = !1), R(e), O(e))
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
        K = {};
      o(q, function (e, t) {
        K[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (K.deleteProperty = function (e, t) {
          return K.set.call(this, e, t, void 0);
        }),
        (K.set = function (e, t, n) {
          return q.set.call(this, e[0], t, n, e[0]);
        });
      var X = new ((function () {
          function e(e) {
            var t = this;
            (this.O = j),
              (this.D = !0),
              (this.produce = function (e, n, i) {
                if ("function" == typeof e && "function" != typeof n) {
                  var o,
                    s = n;
                  return (
                    (n = e),
                    function (e) {
                      var r = this;
                      void 0 === e && (e = s);
                      for (
                        var i = arguments.length,
                          a = Array(i > 1 ? i - 1 : 0),
                          o = 1;
                        o < i;
                        o++
                      )
                        a[o - 1] = arguments[o];
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
                    c = P(t, e, void 0),
                    l = !0;
                  try {
                    (o = n(c)), (l = !1);
                  } finally {
                    l ? v(u) : b(u);
                  }
                  return "u" > typeof Promise && o instanceof Promise
                    ? o.then(
                        function (e) {
                          return y(u, i), E(e, u);
                        },
                        function (e) {
                          throw (v(u), e);
                        },
                      )
                    : (y(u, i), E(o, u));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (o = n(e)) && (o = e),
                    o === F && (o = void 0),
                    t.D && p(o, !0),
                    i)
                  ) {
                    var d = [],
                      f = [];
                    _("Patches").M(e, o, d, f), i(d, f);
                  }
                  return o;
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
                      r = t[B],
                      i = s(t);
                    if (r) {
                      if (!r.P && (r.i < 4 || !_("ES5").K(r))) return r.t;
                      (r.I = !0), (n = C(t, i)), (r.I = !1);
                    } else n = C(t, i);
                    return (
                      o(n, function (t, i) {
                        var a;
                        (r &&
                          ((a = r.t), (2 === s(a) ? a.get(t) : a[t]) === i)) ||
                          c(n, t, e(i));
                      }),
                      3 === i ? new Set(n) : n
                    );
                  })(t)));
              var t,
                n = w(this),
                u = P(this, e, void 0);
              return (u[B].C = !0), b(n), u;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[B]).A;
              return y(n, t), E(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.D = e;
            }),
            (t.setUseProxies = function (e) {
              e && !j && r(20), (this.O = e);
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
              var a = _("Patches").$;
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
    196765(e, t, n) {
      "use strict";
      n.d(t, { P: () => o, v: () => u });
      var r = n(582128),
        i = n(976245);
      let a = (e) => e;
      function o(e, t = a) {
        let n = r.useSyncExternalStore(
          e.subscribe,
          r.useCallback(() => t(e.getState()), [e, t]),
          r.useCallback(() => t(e.getInitialState()), [e, t]),
        );
        return r.useDebugValue(n), n;
      }
      let s = (e) => {
          let t = (0, i.y)(e),
            n = (e) => o(t, e);
          return Object.assign(n, t), n;
        },
        u = (e) => (e ? s(e) : s);
    },
  },
]);
//# sourceMappingURL=112265.a56e0582742d4d77.js.map
