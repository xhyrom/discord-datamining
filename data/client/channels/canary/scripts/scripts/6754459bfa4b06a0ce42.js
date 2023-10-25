(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5692"], {
        861435: function(t, e, i) {
            "use strict";
            var n = {
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
                o = "function" == typeof Object.getOwnPropertySymbols;
            t.exports = function(t, e, i) {
                if ("string" != typeof e) {
                    var s = Object.getOwnPropertyNames(e);
                    o && (s = s.concat(Object.getOwnPropertySymbols(e)));
                    for (var h = 0; h < s.length; ++h)
                        if (!n[s[h]] && !r[s[h]] && (!i || !i[s[h]])) try {
                            t[s[h]] = e[s[h]]
                        } catch (t) {}
                }
                return t
            }
        },
        639073: function(t, e, i) {
            ! function(t, e) {
                "use strict";
                if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) {
                    !("isIntersecting" in t.IntersectionObserverEntry.prototype) && Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                    return
                }
                var i = [];

                function n(t) {
                    this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || c(), this.isIntersecting = !!t.intersectionRect;
                    var e = this.boundingClientRect,
                        i = e.width * e.height,
                        n = this.intersectionRect,
                        r = n.width * n.height;
                    i ? this.intersectionRatio = r / i : this.intersectionRatio = this.isIntersecting ? 1 : 0
                }

                function r(t, e) {
                    var i = e || {};
                    if ("function" != typeof t) throw Error("callback must be a function");
                    if (i.root && 1 != i.root.nodeType) throw Error("root must be an Element");
                    this._checkForIntersections = function(t, e) {
                        var i = null;
                        return function() {
                            !i && (i = setTimeout(function() {
                                t(), i = null
                            }, e))
                        }
                    }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
                        return t.value + t.unit
                    }).join(" ")
                }
                r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function(t) {
                    if (!this._observationTargets.some(function(e) {
                            return e.element == t
                        })) {
                        if (!(t && 1 == t.nodeType)) throw Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: t,
                            entry: null
                        }), this._monitorIntersections(), this._checkForIntersections()
                    }
                }, r.prototype.unobserve = function(t) {
                    this._observationTargets = this._observationTargets.filter(function(e) {
                        return e.element != t
                    }), !this._observationTargets.length && (this._unmonitorIntersections(), this._unregisterInstance())
                }, r.prototype.disconnect = function() {
                    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                }, r.prototype.takeRecords = function() {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [], t
                }, r.prototype._initThresholds = function(t) {
                    var e = t || [0];
                    return !Array.isArray(e) && (e = [e]), e.sort().filter(function(t, e, i) {
                        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== i[e - 1]
                    })
                }, r.prototype._parseRootMargin = function(t) {
                    var e = (t || "0px").split(/\s+/).map(function(t) {
                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!e) throw Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(e[1]),
                            unit: e[2]
                        }
                    });
                    return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                }, r.prototype._monitorIntersections = function() {
                    !this._monitoringIntersections && (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(t, "resize", this._checkForIntersections, !0), o(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }, r.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                }, r.prototype._checkForIntersections = function() {
                    var e = this._rootIsInDom(),
                        i = e ? this._getRootRect() : c();
                    this._observationTargets.forEach(function(r) {
                        var o = r.element,
                            s = h(o),
                            c = this._rootContainsTarget(o),
                            a = r.entry,
                            u = e && c && this._computeTargetAndRootIntersection(o, i),
                            l = r.entry = new n({
                                time: function() {
                                    return t.performance && performance.now && performance.now()
                                }(),
                                target: o,
                                boundingClientRect: s,
                                rootBounds: i,
                                intersectionRect: u
                            });
                        a ? e && c ? this._hasCrossedThreshold(a, l) && this._queuedEntries.push(l) : a && a.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
                    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }, r.prototype._computeTargetAndRootIntersection = function(i, n) {
                    if ("none" != t.getComputedStyle(i).display) {
                        for (var r = h(i), o = u(i), s = !1; !s;) {
                            var c = null,
                                a = 1 == o.nodeType ? t.getComputedStyle(o) : {};
                            if ("none" == a.display) return;
                            if (o == this.root || o == e ? (s = !0, c = n) : o != e.body && o != e.documentElement && "visible" != a.overflow && (c = h(o)), c && !(r = function(t, e) {
                                    var i = Math.max(t.top, e.top),
                                        n = Math.min(t.bottom, e.bottom),
                                        r = Math.max(t.left, e.left),
                                        o = Math.min(t.right, e.right),
                                        s = o - r,
                                        h = n - i;
                                    return s >= 0 && h >= 0 && {
                                        top: i,
                                        bottom: n,
                                        left: r,
                                        right: o,
                                        width: s,
                                        height: h
                                    }
                                }(c, r))) break;
                            o = u(o)
                        }
                        return r
                    }
                }, r.prototype._getRootRect = function() {
                    var t;
                    if (this.root) t = h(this.root);
                    else {
                        var i = e.documentElement,
                            n = e.body;
                        t = {
                            top: 0,
                            left: 0,
                            right: i.clientWidth || n.clientWidth,
                            width: i.clientWidth || n.clientWidth,
                            bottom: i.clientHeight || n.clientHeight,
                            height: i.clientHeight || n.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(t)
                }, r.prototype._expandRectByRootMargin = function(t) {
                    var e = this._rootMarginValues.map(function(e, i) {
                            return "px" == e.unit ? e.value : e.value * (i % 2 ? t.width : t.height) / 100
                        }),
                        i = {
                            top: t.top - e[0],
                            right: t.right + e[1],
                            bottom: t.bottom + e[2],
                            left: t.left - e[3]
                        };
                    return i.width = i.right - i.left, i.height = i.bottom - i.top, i
                }, r.prototype._hasCrossedThreshold = function(t, e) {
                    var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                        n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (i !== n)
                        for (var r = 0; r < this.thresholds.length; r++) {
                            var o = this.thresholds[r];
                            if (o == i || o == n || o < i != o < n) return !0
                        }
                }, r.prototype._rootIsInDom = function() {
                    return !this.root || a(e, this.root)
                }, r.prototype._rootContainsTarget = function(t) {
                    return a(this.root || e, t)
                }, r.prototype._registerInstance = function() {
                    0 > i.indexOf(this) && i.push(this)
                }, r.prototype._unregisterInstance = function() {
                    var t = i.indexOf(this); - 1 != t && i.splice(t, 1)
                };

                function o(t, e, i, n) {
                    "function" == typeof t.addEventListener ? t.addEventListener(e, i, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, i)
                }

                function s(t, e, i, n) {
                    "function" == typeof t.removeEventListener ? t.removeEventListener(e, i, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, i)
                }

                function h(t) {
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
                    }), e) : c()
                }

                function c() {
                    return {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function a(t, e) {
                    for (var i = e; i;) {
                        if (i == t) return !0;
                        i = u(i)
                    }
                    return !1
                }

                function u(t) {
                    var e = t.parentNode;
                    return e && 11 == e.nodeType && e.host ? e.host : e
                }
                t.IntersectionObserver = r, t.IntersectionObserverEntry = n
            }(window, document)
        },
        471553: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var n = i("865768"),
                r = i("117064");
            let o = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class s {
                isVisible(t) {
                    return null == this._observer || this._visibleComponents.has(t)
                }
                observe(t) {
                    let e = this._observer;
                    if (null == e) return;
                    this.unobserve(t);
                    let i = (0, n.findDOMNode)(t);
                    (0, r.isElement)(i, HTMLElement) && (this._nodes.set(i, t), this._components.set(t, i), e.observe(i))
                }
                unobserve(t) {
                    let e = this._observer;
                    if (null == e) return;
                    let i = this._components.get(t);
                    null != i && (this._nodes.delete(i), this._components.delete(t), this._visibleComponents.delete(t), e.unobserve(i))
                }
                constructor(t = o) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = t => {
                        t.forEach(t => {
                            let e;
                            if (null != t.isIntersecting) e = t.isIntersecting;
                            else {
                                let {
                                    threshold: i
                                } = this._options;
                                e = null == i ? t.intersectionRatio > 0 : Array.isArray(i) ? i.some(e => t.intersectionRatio > e) : t.intersectionRatio > i
                            }
                            let i = this._nodes.get(t.target);
                            if (null != i) {
                                let t = !1;
                                e ? !this._visibleComponents.has(i) && (this._visibleComponents.add(i), t = !0) : this._visibleComponents.has(i) && (this._visibleComponents.delete(i), t = !0), t && i.forceUpdate()
                            }
                        })
                    }, this._options = t, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, t))
                }
            }
        },
        435289: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return u
                }
            });
            var n = i("773670"),
                r = i("462567"),
                o = i("471553");
            let s = (0, r.v4)(),
                h = new Map,
                c = new Map;
            class a extends n.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let t = this.getVisibilityObserver();
                        t.observe(this), this.isVisible = t.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(t) {
                    let e = this.getVisibilityObserver(),
                        i = e.isVisible(this);
                    this.props.active && i !== this.isVisible && this.props.onChange(i), !t.active && this.props.active ? e.observe(this) : t.active && !this.props.active && e.unobserve(this), this.isVisible = i
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: t,
                        threshold: e
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(t, " ").concat(e)
                }
                getVisibilityObserver() {
                    let t = this.getVisibilityObserverId(),
                        e = c.get(t);
                    if (!e) throw Error("Visibility sensor with id ".concat(t, " not found."));
                    return e
                }
                render() {
                    return n.Children.only(this.props.children)
                }
                constructor(t) {
                    super(t), this.isVisible = !1;
                    let {
                        root: e,
                        rootMargin: i,
                        threshold: n
                    } = t;
                    e ? h.has(e) ? this.elementId = h.get(e) || "" : h.set(e, (0, r.v4)()) : this.elementId = s;
                    let a = this.getVisibilityObserverId();
                    !c.has(a) && c.set(a, new o.default({
                        root: e,
                        rootMargin: i,
                        threshold: n
                    }))
                }
            }
            a.defaultProps = {
                active: !0,
                children: n.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var u = a
        },
        710934: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                VisibilityObserver: function() {
                    return n.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), i("639073");
            var n = i("471553"),
                r = i("435289")
        }
    }
]);
//# sourceMappingURL=6754459bfa4b06a0ce42.js.map