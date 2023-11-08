(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63550"], {
        310013: function(t, e, n) {
            "use strict";
            var o = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                r = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                i = "function" == typeof Object.getOwnPropertySymbols;
            t.exports = function(t, e, n) {
                if ("string" != typeof e) {
                    var s = Object.getOwnPropertyNames(e);
                    i && (s = s.concat(Object.getOwnPropertySymbols(e)));
                    for (var h = 0; h < s.length; ++h)
                        if (!o[s[h]] && !r[s[h]] && (!n || !n[s[h]])) try {
                            t[s[h]] = e[s[h]]
                        } catch (t) {}
                }
                return t
            }
        },
        6268: function(t, e, n) {
            n("70102"), n("424973"), ! function(t, e) {
                "use strict";
                if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) {
                    !("isIntersecting" in t.IntersectionObserverEntry.prototype) && Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                    return
                }
                var n = [];

                function IntersectionObserverEntry(t) {
                    this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || s(), this.isIntersecting = !!t.intersectionRect;
                    var e = this.boundingClientRect,
                        n = e.width * e.height,
                        o = this.intersectionRect,
                        r = o.width * o.height;
                    n ? this.intersectionRatio = r / n : this.intersectionRatio = this.isIntersecting ? 1 : 0
                }

                function IntersectionObserver(t, e) {
                    var n = e || {};
                    if ("function" != typeof t) throw Error("callback must be a function");
                    if (n.root && 1 != n.root.nodeType) throw Error("root must be an Element");
                    this._checkForIntersections = function(t, e) {
                        var n = null;
                        return function() {
                            !n && (n = setTimeout(function() {
                                t(), n = null
                            }, e))
                        }
                    }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
                        return t.value + t.unit
                    }).join(" ")
                }
                IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100, IntersectionObserver.prototype.POLL_INTERVAL = null, IntersectionObserver.prototype.USE_MUTATION_OBSERVER = !0, IntersectionObserver.prototype.observe = function(t) {
                    if (!this._observationTargets.some(function(e) {
                            return e.element == t
                        })) {
                        if (!(t && 1 == t.nodeType)) throw Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: t,
                            entry: null
                        }), this._monitorIntersections(), this._checkForIntersections()
                    }
                }, IntersectionObserver.prototype.unobserve = function(t) {
                    this._observationTargets = this._observationTargets.filter(function(e) {
                        return e.element != t
                    }), !this._observationTargets.length && (this._unmonitorIntersections(), this._unregisterInstance())
                }, IntersectionObserver.prototype.disconnect = function() {
                    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                }, IntersectionObserver.prototype.takeRecords = function() {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [], t
                }, IntersectionObserver.prototype._initThresholds = function(t) {
                    var e = t || [0];
                    return !Array.isArray(e) && (e = [e]), e.sort().filter(function(t, e, n) {
                        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== n[e - 1]
                    })
                }, IntersectionObserver.prototype._parseRootMargin = function(t) {
                    var e = (t || "0px").split(/\s+/).map(function(t) {
                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!e) throw Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(e[1]),
                            unit: e[2]
                        }
                    });
                    return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                }, IntersectionObserver.prototype._monitorIntersections = function() {
                    !this._monitoringIntersections && (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(t, "resize", this._checkForIntersections, !0), o(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }, IntersectionObserver.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, r(t, "resize", this._checkForIntersections, !0), r(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                }, IntersectionObserver.prototype._checkForIntersections = function() {
                    var e = this._rootIsInDom(),
                        n = e ? this._getRootRect() : s();
                    this._observationTargets.forEach(function(o) {
                        var r = o.element,
                            s = i(r),
                            h = this._rootContainsTarget(r),
                            c = o.entry,
                            a = e && h && this._computeTargetAndRootIntersection(r, n),
                            u = o.entry = new IntersectionObserverEntry({
                                time: function() {
                                    return t.performance && performance.now && performance.now()
                                }(),
                                target: r,
                                boundingClientRect: s,
                                rootBounds: n,
                                intersectionRect: a
                            });
                        c ? e && h ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
                    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }, IntersectionObserver.prototype._computeTargetAndRootIntersection = function(n, o) {
                    if ("none" != t.getComputedStyle(n).display) {
                        for (var r = i(n), s = c(n), h = !1; !h;) {
                            var a = null,
                                u = 1 == s.nodeType ? t.getComputedStyle(s) : {};
                            if ("none" == u.display) return;
                            if (s == this.root || s == e ? (h = !0, a = o) : s != e.body && s != e.documentElement && "visible" != u.overflow && (a = i(s)), a && !(r = function(t, e) {
                                    var n = Math.max(t.top, e.top),
                                        o = Math.min(t.bottom, e.bottom),
                                        r = Math.max(t.left, e.left),
                                        i = Math.min(t.right, e.right),
                                        s = i - r,
                                        h = o - n;
                                    return s >= 0 && h >= 0 && {
                                        top: n,
                                        bottom: o,
                                        left: r,
                                        right: i,
                                        width: s,
                                        height: h
                                    }
                                }(a, r))) break;
                            s = c(s)
                        }
                        return r
                    }
                }, IntersectionObserver.prototype._getRootRect = function() {
                    var t;
                    if (this.root) t = i(this.root);
                    else {
                        var n = e.documentElement,
                            o = e.body;
                        t = {
                            top: 0,
                            left: 0,
                            right: n.clientWidth || o.clientWidth,
                            width: n.clientWidth || o.clientWidth,
                            bottom: n.clientHeight || o.clientHeight,
                            height: n.clientHeight || o.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(t)
                }, IntersectionObserver.prototype._expandRectByRootMargin = function(t) {
                    var e = this._rootMarginValues.map(function(e, n) {
                            return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                        }),
                        n = {
                            top: t.top - e[0],
                            right: t.right + e[1],
                            bottom: t.bottom + e[2],
                            left: t.left - e[3]
                        };
                    return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                }, IntersectionObserver.prototype._hasCrossedThreshold = function(t, e) {
                    var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                        o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (n !== o)
                        for (var r = 0; r < this.thresholds.length; r++) {
                            var i = this.thresholds[r];
                            if (i == n || i == o || i < n != i < o) return !0
                        }
                }, IntersectionObserver.prototype._rootIsInDom = function() {
                    return !this.root || h(e, this.root)
                }, IntersectionObserver.prototype._rootContainsTarget = function(t) {
                    return h(this.root || e, t)
                }, IntersectionObserver.prototype._registerInstance = function() {
                    0 > n.indexOf(this) && n.push(this)
                }, IntersectionObserver.prototype._unregisterInstance = function() {
                    var t = n.indexOf(this); - 1 != t && n.splice(t, 1)
                };

                function o(t, e, n, o) {
                    "function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
                }

                function r(t, e, n, o) {
                    "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
                }

                function i(t) {
                    var e;
                    try {
                        e = t.getBoundingClientRect()
                    } catch (t) {}
                    return e ? (!(e.width && e.height) && (e = {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    }), e) : s()
                }

                function s() {
                    return {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function h(t, e) {
                    for (var n = e; n;) {
                        if (n == t) return !0;
                        n = c(n)
                    }
                    return !1
                }

                function c(t) {
                    var e = t.parentNode;
                    return e && 11 == e.nodeType && e.host ? e.host : e
                }
                t.IntersectionObserver = IntersectionObserver, t.IntersectionObserverEntry = IntersectionObserverEntry
            }(window, document)
        }
    }
]);
//# sourceMappingURL=a76236d61f3388b9edb0.js.map