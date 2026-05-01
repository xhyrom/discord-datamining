(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24199"],
  {
    899898() {
      !(function (t, e) {
        "use strict";
        if (
          "IntersectionObserver" in t &&
          "IntersectionObserverEntry" in t &&
          "intersectionRatio" in t.IntersectionObserverEntry.prototype
        ) {
          "isIntersecting" in t.IntersectionObserverEntry.prototype ||
            Object.defineProperty(
              t.IntersectionObserverEntry.prototype,
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
        function i(t) {
          (this.time = t.time),
            (this.target = t.target),
            (this.rootBounds = t.rootBounds),
            (this.boundingClientRect = t.boundingClientRect),
            (this.intersectionRect = t.intersectionRect || c()),
            (this.isIntersecting = !!t.intersectionRect);
          var e = this.boundingClientRect,
            n = e.width * e.height,
            i = this.intersectionRect,
            o = i.width * i.height;
          n
            ? (this.intersectionRatio = o / n)
            : (this.intersectionRatio = +!!this.isIntersecting);
        }
        function o(t, e) {
          var n,
            i,
            o,
            r = e || {};
          if ("function" != typeof t)
            throw Error("callback must be a function");
          if (r.root && 1 != r.root.nodeType)
            throw Error("root must be an Element");
          (this._checkForIntersections =
            ((n = this._checkForIntersections.bind(this)),
            (i = this.THROTTLE_TIMEOUT),
            (o = null),
            function () {
              o ||
                (o = setTimeout(function () {
                  n(), (o = null);
                }, i));
            })),
            (this._callback = t),
            (this._observationTargets = []),
            (this._queuedEntries = []),
            (this._rootMarginValues = this._parseRootMargin(r.rootMargin)),
            (this.thresholds = this._initThresholds(r.threshold)),
            (this.root = r.root || null),
            (this.rootMargin = this._rootMarginValues
              .map(function (t) {
                return t.value + t.unit;
              })
              .join(" "));
        }
        function r(t, e, n, i) {
          "function" == typeof t.addEventListener
            ? t.addEventListener(e, n, i || !1)
            : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n);
        }
        function s(t, e, n, i) {
          "function" == typeof t.removeEventListener
            ? t.removeEventListener(e, n, i || !1)
            : "function" == typeof t.detatchEvent &&
              t.detatchEvent("on" + e, n);
        }
        function h(t) {
          var e;
          try {
            e = t.getBoundingClientRect();
          } catch (t) {}
          return e
            ? ((e.width && e.height) ||
                (e = {
                  top: e.top,
                  right: e.right,
                  bottom: e.bottom,
                  left: e.left,
                  width: e.right - e.left,
                  height: e.bottom - e.top,
                }),
              e)
            : c();
        }
        function c() {
          return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        }
        function a(t, e) {
          for (var n = e; n; ) {
            if (n == t) return !0;
            n = u(n);
          }
          return !1;
        }
        function u(t) {
          var e = t.parentNode;
          return e && 11 == e.nodeType && e.host ? e.host : e;
        }
        (o.prototype.THROTTLE_TIMEOUT = 100),
          (o.prototype.POLL_INTERVAL = null),
          (o.prototype.USE_MUTATION_OBSERVER = !0),
          (o.prototype.observe = function (t) {
            if (
              !this._observationTargets.some(function (e) {
                return e.element == t;
              })
            ) {
              if (!(t && 1 == t.nodeType))
                throw Error("target must be an Element");
              this._registerInstance(),
                this._observationTargets.push({ element: t, entry: null }),
                this._monitorIntersections(),
                this._checkForIntersections();
            }
          }),
          (o.prototype.unobserve = function (t) {
            (this._observationTargets = this._observationTargets.filter(
              function (e) {
                return e.element != t;
              },
            )),
              this._observationTargets.length ||
                (this._unmonitorIntersections(), this._unregisterInstance());
          }),
          (o.prototype.disconnect = function () {
            (this._observationTargets = []),
              this._unmonitorIntersections(),
              this._unregisterInstance();
          }),
          (o.prototype.takeRecords = function () {
            var t = this._queuedEntries.slice();
            return (this._queuedEntries = []), t;
          }),
          (o.prototype._initThresholds = function (t) {
            var e = t || [0];
            return (
              Array.isArray(e) || (e = [e]),
              e.sort().filter(function (t, e, n) {
                if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                  throw Error(
                    "threshold must be a number between 0 and 1 inclusively",
                  );
                return t !== n[e - 1];
              })
            );
          }),
          (o.prototype._parseRootMargin = function (t) {
            var e = (t || "0px").split(/\s+/).map(function (t) {
              var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
              if (!e)
                throw Error(
                  "rootMargin must be specified in pixels or percent",
                );
              return { value: parseFloat(e[1]), unit: e[2] };
            });
            return (
              (e[1] = e[1] || e[0]),
              (e[2] = e[2] || e[0]),
              (e[3] = e[3] || e[1]),
              e
            );
          }),
          (o.prototype._monitorIntersections = function () {
            !this._monitoringIntersections &&
              ((this._monitoringIntersections = !0),
              this.POLL_INTERVAL
                ? (this._monitoringInterval = setInterval(
                    this._checkForIntersections,
                    this.POLL_INTERVAL,
                  ))
                : (r(t, "resize", this._checkForIntersections, !0),
                  r(e, "scroll", this._checkForIntersections, !0),
                  this.USE_MUTATION_OBSERVER &&
                    "MutationObserver" in t &&
                    ((this._domObserver = new MutationObserver(
                      this._checkForIntersections,
                    )),
                    this._domObserver.observe(e, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))));
          }),
          (o.prototype._unmonitorIntersections = function () {
            this._monitoringIntersections &&
              ((this._monitoringIntersections = !1),
              clearInterval(this._monitoringInterval),
              (this._monitoringInterval = null),
              s(t, "resize", this._checkForIntersections, !0),
              s(e, "scroll", this._checkForIntersections, !0),
              this._domObserver &&
                (this._domObserver.disconnect(), (this._domObserver = null)));
          }),
          (o.prototype._checkForIntersections = function () {
            var e = this._rootIsInDom(),
              n = e ? this._getRootRect() : c();
            this._observationTargets.forEach(function (o) {
              var r = o.element,
                s = h(r),
                c = this._rootContainsTarget(r),
                a = o.entry,
                u = e && c && this._computeTargetAndRootIntersection(r, n),
                p = (o.entry = new i({
                  time: t.performance && performance.now && performance.now(),
                  target: r,
                  boundingClientRect: s,
                  rootBounds: n,
                  intersectionRect: u,
                }));
              a
                ? e && c
                  ? this._hasCrossedThreshold(a, p) &&
                    this._queuedEntries.push(p)
                  : a && a.isIntersecting && this._queuedEntries.push(p)
                : this._queuedEntries.push(p);
            }, this),
              this._queuedEntries.length &&
                this._callback(this.takeRecords(), this);
          }),
          (o.prototype._computeTargetAndRootIntersection = function (n, i) {
            if ("none" != t.getComputedStyle(n).display) {
              for (var o = h(n), r = u(n), s = !1; !s; ) {
                var c = null,
                  a = 1 == r.nodeType ? t.getComputedStyle(r) : {};
                if ("none" == a.display) return;
                if (
                  (r == this.root || r == e
                    ? ((s = !0), (c = i))
                    : r != e.body &&
                      r != e.documentElement &&
                      "visible" != a.overflow &&
                      (c = h(r)),
                  c &&
                    !(o = (function (t, e) {
                      var n = Math.max(t.top, e.top),
                        i = Math.min(t.bottom, e.bottom),
                        o = Math.max(t.left, e.left),
                        r = Math.min(t.right, e.right),
                        s = r - o,
                        h = i - n;
                      return (
                        s >= 0 &&
                        h >= 0 && {
                          top: n,
                          bottom: i,
                          left: o,
                          right: r,
                          width: s,
                          height: h,
                        }
                      );
                    })(c, o)))
                )
                  break;
                r = u(r);
              }
              return o;
            }
          }),
          (o.prototype._getRootRect = function () {
            var t;
            if (this.root) t = h(this.root);
            else {
              var n = e.documentElement,
                i = e.body;
              t = {
                top: 0,
                left: 0,
                right: n.clientWidth || i.clientWidth,
                width: n.clientWidth || i.clientWidth,
                bottom: n.clientHeight || i.clientHeight,
                height: n.clientHeight || i.clientHeight,
              };
            }
            return this._expandRectByRootMargin(t);
          }),
          (o.prototype._expandRectByRootMargin = function (t) {
            var e = this._rootMarginValues.map(function (e, n) {
                return "px" == e.unit
                  ? e.value
                  : (e.value * (n % 2 ? t.width : t.height)) / 100;
              }),
              n = {
                top: t.top - e[0],
                right: t.right + e[1],
                bottom: t.bottom + e[2],
                left: t.left - e[3],
              };
            return (
              (n.width = n.right - n.left), (n.height = n.bottom - n.top), n
            );
          }),
          (o.prototype._hasCrossedThreshold = function (t, e) {
            var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
              i = e.isIntersecting ? e.intersectionRatio || 0 : -1;
            if (n !== i)
              for (var o = 0; o < this.thresholds.length; o++) {
                var r = this.thresholds[o];
                if (r == n || r == i || r < n != r < i) return !0;
              }
          }),
          (o.prototype._rootIsInDom = function () {
            return !this.root || a(e, this.root);
          }),
          (o.prototype._rootContainsTarget = function (t) {
            return a(this.root || e, t);
          }),
          (o.prototype._registerInstance = function () {
            0 > n.indexOf(this) && n.push(this);
          }),
          (o.prototype._unregisterInstance = function () {
            var t = n.indexOf(this);
            -1 != t && n.splice(t, 1);
          }),
          (t.IntersectionObserver = o),
          (t.IntersectionObserverEntry = i);
      })(window, document);
    },
  },
]);
//# sourceMappingURL=24199.c9dba7958517f56d.js.map
