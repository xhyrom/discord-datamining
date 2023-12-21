(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44032"], {
        168487: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return v
                }
            });
            var o, i, r = s("735250");
            s("470079");
            var n = s("803997"),
                l = s.n(n),
                a = s("996855"),
                c = s("974328"),
                d = s("108679"),
                u = s("665165"),
                f = s("30175"),
                h = s("222897");
            (o = i || (i = {})).DEFAULT = "", o.BOLD = "Bold", o.SOLID = "Solid";
            var _ = function(t) {
                var e = t.closeAction,
                    s = t.variant,
                    o = t.keybind,
                    i = t.className;
                return (0, r.jsxs)("div", {
                    className: l()(h.container, i),
                    children: [(0, r.jsx)(c.Clickable, {
                        className: l()(h.closeButton, {
                            [h.closeButtonBold]: "Bold" === s,
                            [h.closeButtonSolid]: "Solid" === s
                        }),
                        onClick: e,
                        "aria-label": f.default.Messages.CLOSE,
                        children: "Solid" === s ? (0, r.jsx)(u.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, r.jsx)(d.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), a.isMobile ? null : (0, r.jsx)("div", {
                        className: l()(h.keybind),
                        "aria-hidden": !0,
                        children: o
                    })]
                })
            };
            _.defaultProps = {
                variant: ""
            }, _.Variants = i;
            var v = _
        },
        558575: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                CircleXIcon: function() {
                    return c
                }
            });
            var o = s("21189"),
                i = s("227094"),
                r = s("261047"),
                n = s("735250");
            s("470079");
            var l = s("600186"),
                a = s("262113"),
                c = function(t) {
                    var e = t.width,
                        s = t.height,
                        c = t.secondaryColor,
                        d = void 0 === c ? "transparent" : c,
                        u = t.secondaryColorClass,
                        f = t.color,
                        h = void 0 === f ? l.default.colors.INTERACTIVE_NORMAL : f,
                        _ = t.colorClass,
                        v = (0, r._)(t, ["width", "height", "secondaryColor", "secondaryColorClass", "color", "colorClass"]);
                    return (0, n.jsxs)("svg", (0, i._)((0, o._)({}, (0, a.default)(v)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === e ? 24 : e,
                        height: void 0 === s ? 24 : s,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10",
                            fill: "string" == typeof d ? d : d.css,
                            className: void 0 === u ? "" : u
                        }), (0, n.jsx)("path", {
                            fill: "string" == typeof h ? h : h.css,
                            fillRule: "evenodd",
                            d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
                            clipRule: "evenodd",
                            className: void 0 === _ ? "" : _
                        })]
                    }))
                }
        },
        451328: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                PlusSmallIcon: function() {
                    return c
                }
            });
            var o = s("21189"),
                i = s("227094"),
                r = s("261047"),
                n = s("735250");
            s("470079");
            var l = s("600186"),
                a = s("262113"),
                c = function(t) {
                    var e = t.width,
                        s = t.height,
                        c = t.color,
                        d = void 0 === c ? l.default.colors.INTERACTIVE_NORMAL : c,
                        u = t.colorClass,
                        f = (0, r._)(t, ["width", "height", "color", "colorClass"]);
                    return (0, n.jsx)("svg", (0, i._)((0, o._)({}, (0, a.default)(f)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === e ? 24 : e,
                        height: void 0 === s ? 24 : s,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: "string" == typeof d ? d : d.css,
                            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                            className: void 0 === u ? "" : u
                        })
                    }))
                }
        },
        71132: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return o.default
                }
            });
            var o = s("491261")
        },
        217806: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return n
                }
            });
            var o = s("501769"),
                i = s("432056"),
                r = s("491261");

            function n(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = r.default.getWindow(t);
                null != s && !s.closed && (o.isPlatformEmbedded ? i.default.focus(t, e) : s.focus())
            }
        },
        981512: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                GradientCssUrls: function() {
                    return a
                },
                Gradients: function() {
                    return l
                },
                default: function() {
                    return c
                }
            }), s("814951");
            var o = s("735250"),
                i = s("470079"),
                r = s("153832"),
                n = s("600186"),
                l = Object.freeze({
                    PREMIUM_TIER_0: (0, r.v4)(),
                    PREMIUM_TIER_1: (0, r.v4)(),
                    PREMIUM_TIER_2: (0, r.v4)(),
                    PREMIUM_GUILD: (0, r.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, r.v4)()
                }),
                a = {
                    PREMIUM_TIER_0: "url(#".concat(l.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(l.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(l.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(l.PREMIUM_GUILD, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(l.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                c = i.memo(function() {
                    return (0, o.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [(0, o.jsxs)("linearGradient", {
                            id: l.PREMIUM_TIER_0,
                            children: [(0, o.jsx)("stop", {
                                offset: ".1762",
                                stopColor: n.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                            }), (0, o.jsx)("stop", {
                                offset: "0.5351",
                                stopColor: n.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                            }), (0, o.jsx)("stop", {
                                offset: "1",
                                stopColor: n.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                            })]
                        }), (0, o.jsxs)("linearGradient", {
                            id: l.PREMIUM_TIER_1,
                            children: [(0, o.jsx)("stop", {
                                stopColor: n.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                            }), (0, o.jsx)("stop", {
                                offset: "1",
                                stopColor: n.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                            })]
                        }), (0, o.jsxs)("linearGradient", {
                            id: l.PREMIUM_TIER_2,
                            children: [(0, o.jsx)("stop", {
                                stopColor: n.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                            }), (0, o.jsx)("stop", {
                                offset: "0.502368",
                                stopColor: n.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                            }), (0, o.jsx)("stop", {
                                offset: "1",
                                stopColor: n.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                            })]
                        }), (0, o.jsxs)("linearGradient", {
                            id: l.PREMIUM_GUILD,
                            children: [(0, o.jsx)("stop", {
                                stopColor: n.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                            }), (0, o.jsx)("stop", {
                                offset: "1",
                                stopColor: n.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                            })]
                        }), (0, o.jsxs)("linearGradient", {
                            id: l.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                            gradientTransform: "rotate(45)",
                            children: [(0, o.jsx)("stop", {
                                offset: "0",
                                stopColor: n.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                            }), (0, o.jsx)("stop", {
                                offset: "1",
                                stopColor: n.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                            })]
                        })]
                    })
                }, function() {
                    return !0
                })
        },
        665165: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return d
                }
            });
            var o = s("21189"),
                i = s("227094"),
                r = s("261047"),
                n = s("735250");
            s("470079");
            var l = s("336328"),
                a = s("558575"),
                c = s("262113"),
                d = (0, l.replaceIcon)(function(t) {
                    var e = t.width,
                        s = t.height,
                        l = t.color,
                        a = t.foreground,
                        d = t.backgroundColor,
                        u = (0, r._)(t, ["width", "height", "color", "foreground", "backgroundColor"]);
                    return (0, n.jsxs)("svg", (0, i._)((0, o._)({}, (0, c.default)(u)), {
                        width: void 0 === e ? 24 : e,
                        height: void 0 === s ? 24 : s,
                        viewBox: "0 0 14 14",
                        children: [null != d ? (0, n.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: d
                        }) : null, (0, n.jsx)("path", {
                            fill: void 0 === l ? "currentColor" : l,
                            className: a,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    }))
                }, a.CircleXIcon, void 0, {
                    size: 24
                })
        },
        129109: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return d
                }
            });
            var o = s("21189"),
                i = s("227094"),
                r = s("261047"),
                n = s("735250");
            s("470079");
            var l = s("336328"),
                a = s("451328"),
                c = s("262113"),
                d = (0, l.replaceIcon)(function(t) {
                    var e = t.width,
                        s = t.height,
                        l = t.color,
                        a = t.foreground,
                        d = (0, r._)(t, ["width", "height", "color", "foreground"]);
                    return (0, n.jsx)("svg", (0, i._)((0, o._)({}, (0, c.default)(d)), {
                        width: void 0 === e ? 24 : e,
                        height: void 0 === s ? 24 : s,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: void 0 === l ? "currentColor" : l,
                            className: a,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    }))
                }, a.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        455730: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return l
                }
            });
            var o = s("87627");
            s("870445"), s("996173"), s("47120"), s("357629"), s("878778");
            var i = s("699581"),
                r = s("93610"),
                n = {
                    root: null,
                    rootMargin: "0px",
                    threshold: .5
                },
                l = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
                            s = this;
                        (0, o._)(this, t), this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = function(t) {
                            t.forEach(function(t) {
                                if (null != t.isIntersecting) e = t.isIntersecting;
                                else {
                                    var e, o = s._options.threshold;
                                    e = null == o ? t.intersectionRatio > 0 : Array.isArray(o) ? o.some(function(e) {
                                        return t.intersectionRatio > e
                                    }) : t.intersectionRatio > o
                                }
                                var i = s._nodes.get(t.target);
                                if (null != i) {
                                    var r = !1;
                                    e ? !s._visibleComponents.has(i) && (s._visibleComponents.add(i), r = !0) : s._visibleComponents.has(i) && (s._visibleComponents.delete(i), r = !0), r && i.forceUpdate()
                                }
                            })
                        }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                    }
                    var e = t.prototype;
                    return e.isVisible = function(t) {
                        return null == this._observer || this._visibleComponents.has(t)
                    }, e.observe = function(t) {
                        var e = this._observer;
                        if (null != e) {
                            this.unobserve(t);
                            var s = (0, i.findDOMNode)(t);
                            (0, r.isElement)(s, HTMLElement) && (this._nodes.set(s, t), this._components.set(t, s), e.observe(s))
                        }
                    }, e.unobserve = function(t) {
                        var e = this._observer;
                        if (null != e) {
                            var s = this._components.get(t);
                            null != s && (this._nodes.delete(s), this._components.delete(t), this._visibleComponents.delete(t), e.unobserve(s))
                        }
                    }, t
                }()
        },
        934605: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return h
                }
            });
            var o = s("87627"),
                i = s("29713"),
                r = s("778455");
            s("573788"), s("996173"), s("47120"), s("357629"), s("814951"), s("411104");
            var n = s("470079"),
                l = s("153832"),
                a = s("455730"),
                c = (0, l.v4)(),
                d = new Map,
                u = new Map,
                f = function(t) {
                    (0, i._)(s, t);
                    var e = (0, r._)(s);

                    function s(t) {
                        (0, o._)(this, s), (i = e.call(this, t)).isVisible = !1;
                        var i, r = t.root,
                            n = t.rootMargin,
                            f = t.threshold;
                        r ? d.has(r) ? i.elementId = d.get(r) || "" : d.set(r, (0, l.v4)()) : i.elementId = c;
                        var h = i.getVisibilityObserverId();
                        return !u.has(h) && u.set(h, new a.default({
                            root: r,
                            rootMargin: n,
                            threshold: f
                        })), i
                    }
                    var f = s.prototype;
                    return f.componentDidMount = function() {
                        if (this.props.active) {
                            var t = this.getVisibilityObserver();
                            t.observe(this), this.isVisible = t.isVisible(this), this.props.onChange(this.isVisible)
                        }
                    }, f.componentDidUpdate = function(t) {
                        var e = this.getVisibilityObserver(),
                            s = e.isVisible(this);
                        this.props.active && s !== this.isVisible && this.props.onChange(s), !t.active && this.props.active ? e.observe(this) : t.active && !this.props.active && e.unobserve(this), this.isVisible = s
                    }, f.componentWillUnmount = function() {
                        this.getVisibilityObserver().unobserve(this)
                    }, f.getVisibilityObserverId = function() {
                        var t = this.props,
                            e = t.rootMargin,
                            s = t.threshold;
                        return "".concat(this.elementId, " ").concat(e, " ").concat(s)
                    }, f.getVisibilityObserver = function() {
                        var t = this.getVisibilityObserverId(),
                            e = u.get(t);
                        if (!e) throw Error("Visibility sensor with id ".concat(t, " not found."));
                        return e
                    }, f.render = function() {
                        return n.Children.only(this.props.children)
                    }, s
                }(n.Component);
            f.defaultProps = {
                active: !0,
                children: n.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var h = f
        },
        359516: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                VisibilityObserver: function() {
                    return o.default
                },
                VisibilitySensor: function() {
                    return i.default
                }
            }), s("858685");
            var o = s("455730"),
                i = s("934605")
        }
    }
]);
//# sourceMappingURL=44032.dafe713922d779e88473.js.map