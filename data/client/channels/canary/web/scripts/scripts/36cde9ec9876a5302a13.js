(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48059"], {
        458960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("424973");
            var i = n("122717"),
                r = n("52296"),
                o = n.n(r),
                s = n("773179"),
                l = n.n(s),
                a = n("512298"),
                u = n.n(a);

            function c(e) {
                let t = Object.keys(e)[0];
                return "".concat(t, "(").concat(e[t], ")")
            }
            let d = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;

            function _(e) {
                let t = e.match(d);
                return null != t && (e = "rgba(".concat(0 | t[1], ", ").concat(0 | t[2], ", ").concat(0 | t[3], ", ").concat(t[4], ")")), e
            }
            i.inject.ApplyAnimatedValues(function(e, t, n) {
                if (e.setNativeProps) e.setNativeProps(t);
                else {
                    if (!e.nodeType || void 0 === e.setAttribute) return !1;
                    var i;
                    u.setValueForStyles(e, ((i = t.style) && (i.transform && (i.transform = i.WebkitTransform = i.MozTransform = i.transform.map(c).join(" ")), i.color && (i.color = _(i.color)), i.backgroundColor && (i.backgroundColor = _(i.backgroundColor))), i), n._reactInternalInstance)
                }
            }, e => e);

            function f(e, t, n) {
                return void 0 !== t && void 0 != n ? l.random(t, n) : e
            }
            var E = {
                ...i,
                Easing: o,
                accelerate: function(e) {
                    return e.transform = e.transform || [], e.transform.push({
                        translateZ: 0
                    }), e
                },
                animate: function e(t, n) {
                    let r;
                    let {
                        toValueMin: o,
                        toValueMax: s,
                        tension: l = 0,
                        friction: a = 0,
                        loop: u,
                        reverse: c,
                        invert: d,
                        callback: _,
                        type: E = "spring",
                        shouldLoop: S,
                        durationMin: g,
                        durationMax: h,
                        ...m
                    } = n, p = t._value, I = f(n.duration, g, h), T = f(n.toValue, o, s), v = i[E](t, {
                        ...m,
                        toValue: T,
                        tension: l,
                        friction: a,
                        duration: I
                    }), A = v;
                    if (c || d) {
                        let e = f(n.duration, g, h);
                        r = i[E](t, {
                            ...m,
                            toValue: c ? p : -T,
                            tension: l,
                            friction: a,
                            duration: e
                        }), A = i.sequence([v, r])
                    }
                    u ? A.start(() => {
                        (!S || S && S()) && (_ ? _(e.bind(null, t, n)) : e(t, n))
                    }) : A.start(_)
                },
                interpolate: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    return e.interpolate({
                        inputRange: [0, 1],
                        outputRange: n
                    })
                },
                Extrapolate: {
                    CLAMP: "clamp"
                },
                div: i.createAnimatedComponent("div"),
                span: i.createAnimatedComponent("span"),
                img: i.createAnimatedComponent("img"),
                a: i.createAnimatedComponent("a"),
                form: i.createAnimatedComponent("form"),
                ul: i.createAnimatedComponent("ul"),
                li: i.createAnimatedComponent("li"),
                g: i.createAnimatedComponent("g"),
                use: i.createAnimatedComponent("use"),
                path: i.createAnimatedComponent("path"),
                section: i.createAnimatedComponent("section"),
                video: i.createAnimatedComponent("video")
            }
        },
        539826: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AccessibilityAnnouncer: function() {
                    return r
                }
            });
            var i = n("750787");
            let r = {
                announce: i.announce,
                clearAnnouncements: i.clearAnnouncer
            }
        },
        209613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LOW_SATURATION_THRESHOLD: function() {
                    return i
                }
            });
            let i = .4
        },
        413197: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AccessibilityPreferencesContext: function() {
                    return r
                }
            });
            var i = n("884691");
            let r = i.createContext({
                reducedMotion: {
                    enabled: !1,
                    rawValue: "no-preference"
                },
                prefersCrossfades: !1,
                forcedColors: {
                    enabled: !1,
                    rawValue: "none"
                },
                alwaysShowLinkDecorations: !1
            })
        },
        247716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockInteractionsContext: function() {
                    return o
                },
                BlockInteractions: function() {
                    return s
                }
            });
            var i = n("37983"),
                r = n("884691");
            let o = r.createContext(!1);

            function s(e) {
                let {
                    children: t
                } = e;
                return (0, i.jsx)(o.Provider, {
                    value: !0,
                    children: t
                })
            }
        },
        271841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ButtonLooks: function() {
                    return f
                },
                ButtonColors: function() {
                    return E
                },
                ButtonBorderColors: function() {
                    return S
                },
                ButtonHovers: function() {
                    return g
                },
                ButtonSizes: function() {
                    return h
                },
                getButtonStyle: function() {
                    return m
                },
                Button: function() {
                    return p
                },
                ButtonLink: function() {
                    return I
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                s = n.n(o),
                l = n("90915"),
                a = n("539826"),
                u = n("718776"),
                c = n("242670"),
                d = n("782340"),
                _ = n("213372");
            let f = {
                    FILLED: _.lookFilled,
                    INVERTED: _.lookInverted,
                    OUTLINED: _.lookOutlined,
                    LINK: _.lookLink,
                    BLANK: _.lookBlank
                },
                E = {
                    BRAND: _.colorBrand,
                    RED: _.colorRed,
                    GREEN: _.colorGreen,
                    YELLOW: _.colorYellow,
                    PRIMARY: _.colorPrimary,
                    LINK: _.colorLink,
                    WHITE: _.colorWhite,
                    BLACK: _.colorBlack,
                    TRANSPARENT: _.colorTransparent,
                    BRAND_NEW: _.colorBrandNew,
                    CUSTOM: ""
                },
                S = {
                    BRAND: _.borderBrand,
                    RED: _.borderRed,
                    GREEN: _.borderGreen,
                    YELLOW: _.borderYellow,
                    PRIMARY: _.borderPrimary,
                    LINK: _.borderLink,
                    WHITE: _.borderWhite,
                    BLACK: _.borderBlack,
                    TRANSPARENT: _.borderTransparent,
                    BRAND_NEW: _.borderBrandNew
                },
                g = {
                    DEFAULT: "",
                    BRAND: _.hoverBrand,
                    RED: _.hoverRed,
                    GREEN: _.hoverGreen,
                    YELLOW: _.hoverYellow,
                    PRIMARY: _.hoverPrimary,
                    LINK: _.hoverLink,
                    WHITE: _.hoverWhite,
                    BLACK: _.hoverBlack,
                    TRANSPARENT: _.hoverTransparent
                },
                h = {
                    NONE: "",
                    TINY: _.sizeTiny,
                    SMALL: _.sizeSmall,
                    MEDIUM: _.sizeMedium,
                    LARGE: _.sizeLarge,
                    XLARGE: _.sizeXlarge,
                    MIN: _.sizeMin,
                    MAX: _.sizeMax,
                    ICON: _.sizeIcon
                };

            function m() {
                let {
                    look: e = f.FILLED,
                    color: t = E.BRAND,
                    borderColor: n,
                    hover: i,
                    size: r = h.MEDIUM,
                    fullWidth: o = !1,
                    grow: l = !0,
                    submitting: a = !1,
                    disabled: u = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return s(_.button, e, t, n, i, r, {
                    [_.fullWidth]: o,
                    [_.grow]: l,
                    [_.hasHover]: null != i && i !== g.DEFAULT,
                    [_.submitting]: a && !u
                })
            }

            function p(e) {
                let {
                    look: t = f.FILLED,
                    color: n = E.BRAND,
                    borderColor: o,
                    hover: l,
                    size: S = h.MEDIUM,
                    fullWidth: g = !1,
                    grow: p = !0,
                    disabled: I = !1,
                    submitting: T = !1,
                    type: v = "button",
                    style: A,
                    wrapperClassName: N,
                    className: C,
                    innerClassName: R,
                    onClick: O,
                    onDoubleClick: L,
                    onMouseDown: y,
                    onMouseUp: D,
                    onMouseEnter: P,
                    onMouseLeave: M,
                    onKeyDown: U,
                    children: w,
                    rel: b,
                    buttonRef: G,
                    focusProps: F,
                    "aria-label": k,
                    submittingStartedLabel: B,
                    submittingFinishedLabel: x,
                    ...H
                } = e, V = I || T, W = V && (null != P || null != M), Y = function(e, t) {
                    var n, i, r, o;
                    let s = null == e ? void 0 : e.offset;
                    if (t === f.LINK || t === f.BLANK) return s;
                    if (null == s) return -2;
                    if ("number" == typeof s) return s + 2;
                    return {
                        top: (null !== (n = s.top) && void 0 !== n ? n : 0) - 2,
                        right: (null !== (i = s.right) && void 0 !== i ? i : 0) - 2,
                        bottom: (null !== (r = s.bottom) && void 0 !== r ? r : 0) - 2,
                        left: (null !== (o = s.left) && void 0 !== o ? o : 0) - 2
                    }
                }(F, t), z = r.useRef(!1);
                r.useEffect(() => {
                    !0 === T && (z.current = !0, a.AccessibilityAnnouncer.announce(null != B ? B : d.default.Messages.A11Y_LOADING_STARTED)), !1 === T && !0 === z.current && a.AccessibilityAnnouncer.announce(null != x ? x : d.default.Messages.A11Y_LOADING_FINISHED)
                }, [T, B, x]);
                let j = (0, i.jsx)(u.FocusRing, {
                    ...F,
                    offset: Y,
                    children: (0, i.jsxs)("button", {
                        ...V ? null : H,
                        "aria-label": k,
                        "aria-busy": !!T || void 0,
                        ref: G,
                        onClick: V ? e => e.preventDefault() : O,
                        onDoubleClick: V ? e => e.preventDefault() : L,
                        onMouseUp: I ? void 0 : D,
                        onMouseDown: I ? void 0 : y,
                        onMouseEnter: P,
                        onMouseLeave: M,
                        onKeyDown: I ? void 0 : U,
                        type: v,
                        disabled: I,
                        style: A,
                        rel: b,
                        className: s(C, m({
                            look: t,
                            color: n,
                            borderColor: o,
                            hover: l,
                            size: S,
                            fullWidth: g,
                            grow: p,
                            submitting: T,
                            disabled: I
                        }), W ? null : N),
                        children: [T && !I ? (0, i.jsx)(c.Spinner, {
                            type: c.Spinner.Type.PULSING_ELLIPSIS,
                            className: _.spinner,
                            itemClassName: _.spinnerItem
                        }) : null, (0, i.jsx)("div", {
                            className: s(_.contents, R),
                            children: w
                        })]
                    })
                });
                return W ? (0, i.jsxs)("span", {
                    className: s(_.disabledButtonWrapper, N, S, {
                        [_.grow]: p,
                        [_.fullWidth]: g
                    }),
                    children: [j, (0, i.jsx)("span", {
                        onMouseEnter: P,
                        onMouseLeave: M,
                        className: _.disabledButtonOverlay
                    })]
                }) : j
            }

            function I(e) {
                let {
                    look: t = f.FILLED,
                    color: n = E.BRAND,
                    borderColor: r,
                    hover: o,
                    size: a = h.MEDIUM,
                    fullWidth: u = !1,
                    grow: c = !0,
                    style: d,
                    className: S,
                    innerClassName: m,
                    to: p,
                    onClick: I,
                    onMouseDown: T,
                    onMouseUp: v,
                    children: A,
                    rel: N,
                    ...C
                } = e;
                return (0, i.jsx)(l.Link, {
                    ...C,
                    to: p,
                    onClick: I,
                    onMouseUp: v,
                    onMouseDown: T,
                    style: d,
                    rel: N,
                    className: s(S, _.button, t, n, r, o, a, {
                        [_.fullWidth]: u,
                        [_.grow]: c,
                        [_.hasHover]: null != o && o !== g.DEFAULT
                    }),
                    children: (0, i.jsx)("span", {
                        className: s(_.contents, m),
                        children: A
                    })
                })
            }
            p.Looks = f, p.Colors = E, p.BorderColors = S, p.Hovers = g, p.Sizes = h, p.Link = I
        },
        390534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WCAGContrastRatios: function() {
                    return o
                },
                getContrastingColor: function() {
                    return s
                }
            }), n("222007"), n("70102");
            var i = n("10371"),
                r = n.n(i);
            let o = {
                NonText: 3,
                Text: 4.5,
                HighContrastText: 7
            };

            function s(e) {
                var t, n, i;
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = null !== (t = s.contrastRatio) && void 0 !== t ? t : o.NonText,
                    a = null !== (n = s.tolerance) && void 0 !== n ? n : 3,
                    u = r(null !== (i = s.base) && void 0 !== i ? i : e),
                    c = r(e),
                    d = u.luminance(),
                    _ = c,
                    f = l + a,
                    E = r.contrast(u, c),
                    S = 100;
                for (; S-- > 0;) {
                    let e = E < l,
                        t = E > f;
                    if (!e && !t) break;
                    let n = _.luminance(),
                        i = n > d;
                    _ = t && i || e && !i ? _.darken() : _.brighten(), E = r.contrast(u, _)
                }
                return function(e) {
                    let [t, n, i, r] = e.rgba();
                    return "rgba(".concat(t, ", ").concat(n, ", ").concat(i, ", ").concat(r, ")")
                }(_)
            }
        },
        130969: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DialogContext: function() {
                    return u
                },
                Dialog: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("311720"),
                s = n("718776"),
                l = n("860226"),
                a = n("542489");
            let u = r.createContext(void 0),
                c = r.forwardRef(function(e, t) {
                    let {
                        children: n,
                        impressionType: c,
                        impression: d,
                        disableTrack: _,
                        returnRef: f,
                        ...E
                    } = e, S = r.useRef(null);
                    (0, o.useFocusLock)(S, {
                        returnRef: f
                    });
                    let g = r.useContext(a.default);
                    return g({
                        type: c,
                        name: null == d ? void 0 : d.impressionName,
                        properties: null == d ? void 0 : d.impressionProperties
                    }, {
                        disableTrack: _
                    }), r.useImperativeHandle(t, () => S.current), (0, i.jsx)(u.Provider, {
                        value: !0,
                        children: (0, i.jsx)("div", {
                            ...E,
                            ref: S,
                            role: "dialog",
                            tabIndex: -1,
                            "aria-modal": !0,
                            children: (0, i.jsx)(l.HeadingLevel, {
                                forceLevel: 1,
                                children: (0, i.jsx)(s.FocusRingScope, {
                                    containerRef: S,
                                    children: n
                                })
                            })
                        })
                    })
                })
        },
        311720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFocusLock: function() {
                    return u
                },
                FocusLock: function() {
                    return c
                }
            });
            var i, r = n("884691"),
                o = n("965955"),
                s = n("446674"),
                l = n("206230");
            let a = null !== (i = document.getElementById("app-mount")) && void 0 !== i ? i : document;

            function u(e) {
                var t, n;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    u = (0, s.useStateFromStores)([l.default], () => l.default.keyboardModeEnabled),
                    c = r.useRef(!1);
                return c.current = !u && (null === (t = i.returnRef) || void 0 === t ? void 0 : t.current) == null, (0, o.default)(e, {
                    ...i,
                    disableReturnRef: c,
                    attachTo: null !== (n = i.attachTo) && void 0 !== n ? n : a,
                    returnRef: i.returnRef
                })
            }

            function c(e) {
                return u(e.containerRef), e.children
            }
        },
        718776: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FocusRing: function() {
                    return i.FocusRing
                },
                FocusRingScope: function() {
                    return i.FocusRingScope
                }
            });
            var i = n("15542")
        },
        860226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HeadingLevel: function() {
                    return o
                },
                H: function() {
                    return s
                },
                usePrivateHeadingLevel: function() {
                    return a
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691");

            function o(e) {
                let {
                    component: t,
                    children: n,
                    forceLevel: o
                } = e, s = r.useContext(l), [a, u] = r.useState(null != t), c = 1, d = 1;
                null != o ? null != t ? (c = o, d = o + 1) : d = o : null != t ? (c = s.level, d = s.level + 1) : d = s.level + (a ? 1 : 0);
                let _ = r.useCallback(() => (u(!0), c), [c]),
                    f = r.useCallback(() => (u(!0), d), [d]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [null != t ? (0, i.jsx)(l.Provider, {
                        value: {
                            level: c,
                            getLevelAndMarkUsed: _
                        },
                        children: t
                    }) : null, (0, i.jsx)(l.Provider, {
                        value: {
                            level: d,
                            getLevelAndMarkUsed: f
                        },
                        children: n
                    })]
                })
            }

            function s(e) {
                let t = a(),
                    n = "h".concat(Math.min(t, 6));
                return (0, i.jsx)(n, {
                    ...t > 6 ? {
                        "data-excessive-heading-level": t
                    } : {},
                    ...e
                })
            }
            let l = r.createContext({
                getLevelAndMarkUsed: () => 2,
                level: 2
            });

            function a() {
                let {
                    getLevelAndMarkUsed: e
                } = r.useContext(l);
                return e()
            }
            l.displayName = "HeadingLevelContext"
        },
        433600: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ListThin: function() {
                    return u
                },
                ListAuto: function() {
                    return c
                },
                ListNone: function() {
                    return d
                }
            });
            var i, r, o, s = n("405665"),
                l = n("73643"),
                a = n("517614");
            let u = (0, l.createListScroller)(a.thin, a.fade, a.customTheme, null !== (i = window.ResizeObserver) && void 0 !== i ? i : s.ResizeObserver),
                c = (0, l.createListScroller)(a.auto, a.fade, a.customTheme, null !== (r = window.ResizeObserver) && void 0 !== r ? r : s.ResizeObserver),
                d = (0, l.createListScroller)(a.none, a.fade, a.customTheme, null !== (o = window.ResizeObserver) && void 0 !== o ? o : s.ResizeObserver)
        },
        73643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createListScroller: function() {
                    return _
                }
            }), n("424973"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                s = n.n(o),
                l = n("345570"),
                a = n.n(l),
                u = n("718776"),
                c = n("462977"),
                d = n("517614");

            function _(e, t, n, o) {
                let l = (0, c.getScrollbarSpecs)(e),
                    _ = new Map,
                    f = new o(e => {
                        e.forEach(e => {
                            var t;
                            let {
                                target: n
                            } = e;
                            null === (t = _.get(n)) || void 0 === t || t(e)
                        })
                    });
                return r.forwardRef(function(o, E) {
                    let {
                        className: S,
                        onScroll: g,
                        onResize: h = null,
                        onContentResize: m = null,
                        dir: p = "ltr",
                        sections: I,
                        sectionHeight: T,
                        rowHeight: v,
                        footerHeight: A = 0,
                        sidebarHeight: N,
                        listHeaderHeight: C = 0,
                        renderSection: R,
                        renderRow: O,
                        renderFooter: L,
                        renderSidebar: y,
                        renderListHeader: D,
                        wrapSection: P,
                        getAnchorId: M,
                        paddingTop: U,
                        paddingBottom: w,
                        fade: b = !1,
                        customTheme: G = !1,
                        chunkSize: F,
                        style: k,
                        innerId: B,
                        innerRole: x,
                        innerAriaLabel: H,
                        innerAriaMultiselectable: V,
                        innerAriaOrientation: W,
                        innerClassName: Y,
                        innerTag: z = "div",
                        ...j
                    } = o, K = r.useRef(null), Z = r.useRef(null), [X, q] = r.useState(!1), {
                        scrollerRef: J,
                        scrollerState: Q,
                        getScrollerState: $
                    } = (0, c.useCachedScrollerState)();
                    (0, c.usePaddingFixes)({
                        scrollerRef: J,
                        className: S,
                        specs: l,
                        orientation: "vertical",
                        dir: p
                    });
                    let {
                        spacerTop: ee,
                        totalHeight: et,
                        items: en,
                        isSidebarVisible: ei,
                        listComputer: er,
                        forceUpdateOnChunkChange: eo,
                        anchor: es
                    } = (0, c.useVirtualizedState)({
                        sections: I,
                        sectionHeight: T,
                        rowHeight: v,
                        footerHeight: A,
                        sidebarHeight: N,
                        listHeaderHeight: C,
                        paddingTop: U,
                        paddingBottom: w,
                        chunkSize: F,
                        getScrollerState: $,
                        getAnchorId: M
                    }), el = (0, c.useScrollSpring)(J), ea = r.useRef(h), eu = r.useRef(m);
                    r.useLayoutEffect(() => {
                        ea.current = h, eu.current = m
                    });
                    let ec = r.useCallback(function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                            if (e > Q.current.dirty && (Q.current.dirty = e), 2 === e) {
                                var t;
                                null === (t = ea.current) || void 0 === t || t.call(ea)
                            }
                            eo(e)
                        }, [eo, Q]),
                        ed = r.useCallback(() => ec(), [ec]);
                    (0, c.useResizeObserverSubscription)({
                        ref: J,
                        onUpdate: ed,
                        key: "container",
                        resizeObserver: f,
                        listenerMap: _
                    }), (0, c.useResizeObserverSubscription)({
                        ref: Z,
                        onUpdate: () => {
                            var e;
                            return null === (e = eu.current) || void 0 === e ? void 0 : e.call(eu)
                        },
                        key: "content",
                        resizeObserver: f,
                        listenerMap: _
                    });
                    let e_ = function(e) {
                            let t = r.useRef(e);
                            return r.useEffect(() => void(t.current = e), [e]), r.useCallback(() => t.current, [])
                        }(en),
                        ef = function(e) {
                            let t = r.useRef(e);
                            return r.useEffect(() => void(t.current = e), [e]), r.useCallback(e => {
                                let {
                                    current: n
                                } = t, i = 0;
                                for (let t = 0; t < n.length; t++) {
                                    let r = n[t];
                                    if (i <= e && i + r >= e) {
                                        let n = e - i;
                                        return [t, n]
                                    }
                                    i += r
                                }
                                return [0, 0]
                            }, [])
                        }(I);
                    r.useImperativeHandle(E, () => ({
                        getScrollerNode: () => J.current,
                        getScrollerState: $,
                        getItems: e_,
                        getSectionRowFromIndex: ef,
                        ...(0, c.getAnimatedListScrollHelpers)(J, $, er, el)
                    }), [J, $, ef, e_, er, el]);
                    let eE = r.useCallback(e => {
                        ec(1), null == K.current ? q(!0) : clearTimeout(K.current), K.current = setTimeout(() => {
                            K.current = null, q(!1)
                        }, 200), null != g && g(e)
                    }, [g, ec]);
                    return r.useLayoutEffect(() => {
                        2 !== Q.current.dirty && (Q.current.dirty = 2)
                    }, [en, R, O, L, P, et, ee, Q]), (0, c.useVirtualizedAnchor)({
                        scrollerRef: J,
                        anchor: es,
                        getScrollerState: $,
                        listComputer: er,
                        getAnchorId: M,
                        totalHeight: et
                    }), (0, i.jsxs)("div", {
                        ref: J,
                        onScroll: eE,
                        className: s(S, {
                            [e]: !0,
                            [t]: b,
                            [n]: G,
                            [d.scrolling]: X
                        }),
                        style: (0, c.getMergedOrientationStyles)(k),
                        ...j,
                        children: [r.useMemo(() => (0, i.jsx)(z, {
                            id: B,
                            role: x,
                            "aria-label": H,
                            "aria-multiselectable": V,
                            "aria-orientation": W,
                            style: {
                                height: et
                            },
                            className: s(d.content, Y),
                            ref: Z,
                            children: (0, i.jsx)(u.FocusRingScope, {
                                containerRef: Z,
                                children: function(e) {
                                    let {
                                        renderSection: t,
                                        renderRow: n,
                                        renderFooter: r,
                                        renderListHeader: o,
                                        wrapSection: s,
                                        items: l,
                                        spacerTop: u
                                    } = e, c = [(0, i.jsx)("div", {
                                        "aria-hidden": !0,
                                        style: {
                                            height: u
                                        }
                                    }, "---list-spacer-top")], d = [], _ = 0;
                                    if (l.forEach(e => {
                                            var i;
                                            switch (e.section !== _ && d.length > 0 && (c.push(null != s ? s(_, d) : d), d = []), _ = null !== (i = e.section) && void 0 !== i ? i : 0, e.type) {
                                                case "section":
                                                    null != t && d.push(t(e));
                                                    break;
                                                case "row":
                                                    d.push(n(e));
                                                    break;
                                                case "footer":
                                                    null != r && d.push(r(e));
                                                    break;
                                                case "header":
                                                    null != o && d.push(o())
                                            }
                                        }), d.length > 0) {
                                        var f;
                                        c.push(null !== (f = null == s ? void 0 : s(_, d)) && void 0 !== f ? f : d)
                                    }
                                    return a(c)
                                }({
                                    items: en,
                                    renderListHeader: D,
                                    renderSection: R,
                                    renderRow: O,
                                    renderFooter: L,
                                    wrapSection: P,
                                    spacerTop: ee
                                })
                            })
                        }), [B, x, H, V, W, Y, z, et, en, R, O, L, D, P, ee]), r.useMemo(() => (function(e) {
                            let {
                                renderSidebar: t,
                                sidebarHeight: n,
                                isSidebarVisible: i,
                                isListVisible: r
                            } = e;
                            return null == n || null == t ? null : t(r, i)
                        })({
                            isSidebarVisible: ei,
                            renderSidebar: y,
                            sidebarHeight: N,
                            isListVisible: 0 !== en.length
                        }), [ei, y, N, en.length])]
                    })
                })
            }
        },
        551042: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractingModalContext: function() {
                    return d
                },
                modalContextFromAppContext: function() {
                    return _
                },
                useModalsStore: function() {
                    return f
                },
                openModalLazy: function() {
                    return E
                },
                openModal: function() {
                    return S
                },
                closeModal: function() {
                    return g
                },
                updateModal: function() {
                    return h
                },
                hasAnyModalOpenSelector: function() {
                    return m
                },
                hasAnyModalOpen: function() {
                    return p
                },
                useHasAnyModalOpen: function() {
                    return I
                },
                useIsModalAtTop: function() {
                    return T
                },
                closeAllModals: function() {
                    return v
                },
                hasModalOpenSelector: function() {
                    return A
                },
                hasModalOpen: function() {
                    return N
                }
            }), n("70102"), n("222007"), n("106442"), n("175143");
            var i = n("995008"),
                r = n.n(i),
                o = n("308503"),
                s = n("244201"),
                l = n("625611"),
                a = n("49111");
            let u = n("362149").default,
                c = [l.DEFAULT_MODAL_CONTEXT, l.POPOUT_MODAL_CONTEXT];

            function d() {
                let e = (0, s.getCurrentlyInteractingAppContext)();
                return null != e ? _(e) : l.DEFAULT_MODAL_CONTEXT
            }

            function _(e) {
                return e === a.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT
            }
            let f = (0, o.default)(e => ({
                [l.DEFAULT_MODAL_CONTEXT]: [],
                [l.POPOUT_MODAL_CONTEXT]: []
            }));
            async function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        contextKey: n = d(),
                        ...i
                    } = t,
                    o = null != t.modalKey ? t.modalKey : r(),
                    s = !1,
                    l = setTimeout(() => {
                        s = !0, S(u, {
                            ...i,
                            modalKey: o
                        }, n)
                    }, 300),
                    a = await e();
                return clearTimeout(l), s ? N(o, n) && h(o, a, i.onCloseRequest, i.onCloseCallback, n) : S(a, {
                    ...i,
                    modalKey: o
                }, n), o
            }

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d(),
                    {
                        modalKey: i,
                        instant: o,
                        Layer: s,
                        onCloseRequest: l,
                        onCloseCallback: a
                    } = t,
                    u = null != i ? i : r();
                return f.setState(t => {
                    let i = t[n];
                    return void 0 !== i && i.some(e => {
                        let {
                            key: t
                        } = e;
                        return t === u
                    }) ? t : {
                        ...t,
                        [n]: [...i, {
                            key: u,
                            Layer: s,
                            render: e,
                            onCloseRequest: null != l ? l : () => g(u, n),
                            onCloseCallback: a,
                            instant: o
                        }]
                    }
                }), u
            }

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d(),
                    n = f.getState()[t],
                    i = null != n ? n.find(t => {
                        let {
                            key: n
                        } = t;
                        return n === e
                    }) : null;
                f.setState(n => void 0 === n[t] ? n : {
                    ...n,
                    [t]: n[t].filter(t => {
                        let {
                            key: n
                        } = t;
                        return n !== e
                    })
                }), null != i && null != i.onCloseCallback && i.onCloseCallback()
            }

            function h(e, t, n, i) {
                let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d();
                f.setState(o => void 0 === o[r] ? o : {
                    ...o,
                    [r]: o[r].map(o => o.key === e ? {
                        ...o,
                        render: t,
                        onCloseRequest: null == n ? () => g(e, r) : n,
                        onCloseCallback: i
                    } : o)
                })
            }

            function m(e) {
                for (let t of c) {
                    let n = e[t];
                    if (null != n && n.length > 0) return !0
                }
                return !1
            }

            function p() {
                return m(f.getState())
            }

            function I() {
                let e = f();
                return m(e)
            }

            function T(e) {
                var t, n;
                let {
                    default: i,
                    popout: r
                } = f();
                return r.length > 0 ? (null === (t = r.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = i.at(-1)) || void 0 === n ? void 0 : n.key) === e
            }

            function v() {
                let e = f.getState();
                for (let t in e)
                    for (let n of e[t]) g(n.key, t)
            }

            function A(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.DEFAULT_MODAL_CONTEXT,
                    i = e[n];
                return null != i && i.some(e => e.key === t)
            }

            function N(e, t) {
                return A(f.getState(), e, t)
            }
        },
        516256: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ModalSize: function() {
                    return r
                },
                ModalRoot: function() {
                    return O
                },
                ModalHeader: function() {
                    return L
                },
                ModalContent: function() {
                    return y
                },
                ModalFooter: function() {
                    return D
                },
                ModalCloseButton: function() {
                    return P
                },
                ModalListContent: function() {
                    return M
                }
            });
            var i, r, o = n("37983"),
                s = n("884691"),
                l = n("414456"),
                a = n.n(l),
                u = n("301165"),
                c = n("759843"),
                d = n("458960"),
                _ = n("413197"),
                f = n("271841"),
                E = n("130969"),
                S = n("311720"),
                g = n("718776"),
                h = n("860226"),
                m = n("433600"),
                p = n("446662"),
                I = n("145131"),
                T = n("945330"),
                v = n("625611"),
                A = n("843455"),
                N = n("782340"),
                C = n("760021");
            (i = r || (r = {})).SMALL = "small", i.MEDIUM = "medium", i.LARGE = "large", i.DYNAMIC = "dynamic";
            let R = Object.freeze({
                small: C.small,
                medium: C.medium,
                large: C.large,
                dynamic: null
            });

            function O(e) {
                var t;
                let {
                    transitionState: n,
                    children: i,
                    size: r = "small",
                    role: l = "dialog",
                    className: f,
                    fullscreenOnMobile: h = !0,
                    hideShadow: m = !1,
                    onAnimationEnd: p = A.NOOP,
                    returnRef: I,
                    ...T
                } = e, N = n === v.ModalTransitionState.ENTERING || n === v.ModalTransitionState.ENTERED, {
                    reducedMotion: O
                } = s.useContext(_.AccessibilityPreferencesContext), L = (0, u.useSpring)({
                    opacity: N ? 1 : 0,
                    transform: N || O.enabled ? "scale(1)" : "scale(0.7)",
                    config: {
                        duration: N ? 300 : 100,
                        easing: N ? d.default.Easing.inOut(d.default.Easing.back()) : d.default.Easing.quad,
                        clamp: !0
                    },
                    onRest: p
                }), y = s.createRef();
                (0, S.useFocusLock)(y, {
                    returnRef: I
                });
                let D = s.useRef(null),
                    P = null != T["aria-label"],
                    M = null != T["aria-labelledby"],
                    U = s.useId(),
                    w = null !== (t = T["aria-labelledby"]) && void 0 !== t ? t : U,
                    b = s.useMemo(() => ({
                        headerId: w,
                        headerIdIsManaged: M
                    }), [w, M]);
                return (0, o.jsx)(v.ModalContentContext.Provider, {
                    value: b,
                    children: (0, o.jsx)(E.Dialog, {
                        className: C.focusLock,
                        role: l,
                        returnRef: I,
                        impressionType: c.ImpressionTypes.MODAL,
                        "aria-labelledby": P ? void 0 : b.headerId,
                        ...T,
                        children: (0, o.jsx)(u.animated.div, {
                            className: a(f, C.root, R[r], {
                                [C.fullscreenOnMobile]: h,
                                [C.rootWithShadow]: !m
                            }),
                            ref: D,
                            style: L,
                            children: (0, o.jsx)(g.FocusRingScope, {
                                containerRef: D,
                                children: i
                            })
                        })
                    })
                })
            }

            function L(e) {
                var t, n, i, r, l;
                let {
                    headerId: u,
                    headerIdIsManaged: c
                } = s.useContext(v.ModalContentContext);
                return (0, o.jsx)(I.default, {
                    grow: 0,
                    shrink: 0,
                    direction: null !== (t = e.direction) && void 0 !== t ? t : I.default.Direction.HORIZONTAL,
                    justify: null !== (n = e.justify) && void 0 !== n ? n : I.default.Justify.START,
                    align: null !== (i = e.align) && void 0 !== i ? i : I.default.Align.CENTER,
                    wrap: null !== (r = e.wrap) && void 0 !== r ? r : I.default.Wrap.NO_WRAP,
                    className: a(C.header, e.className, {
                        [C.separator]: null === (l = e.separator) || void 0 === l || l
                    }),
                    id: c ? void 0 : u,
                    children: e.children
                })
            }

            function y(e) {
                let {
                    className: t,
                    children: n,
                    scrollerRef: i,
                    scrollbarType: r,
                    ...s
                } = e, l = function(e) {
                    switch (null != e ? e : "thin") {
                        case "auto":
                            return p.AdvancedScrollerAuto;
                        case "none":
                            return p.AdvancedScrollerNone;
                        default:
                            return p.AdvancedScrollerThin
                    }
                }(r);
                return (0, o.jsx)(l, {
                    className: a(C.content, t),
                    ref: i,
                    ...s,
                    children: (0, o.jsx)(h.HeadingLevel, {
                        children: n
                    })
                })
            }

            function D(e) {
                var t, n, i, r, s;
                return (0, o.jsx)(I.default, {
                    grow: 0,
                    shrink: 0,
                    direction: null !== (t = e.direction) && void 0 !== t ? t : I.default.Direction.HORIZONTAL_REVERSE,
                    justify: null !== (n = e.justify) && void 0 !== n ? n : I.default.Justify.START,
                    align: null !== (i = e.align) && void 0 !== i ? i : I.default.Align.STRETCH,
                    wrap: null !== (r = e.wrap) && void 0 !== r ? r : I.default.Wrap.NO_WRAP,
                    className: a(C.footer, e.className, {
                        [C.footerSeparator]: null === (s = e.separator) || void 0 === s || s
                    }),
                    children: (0, o.jsx)(h.HeadingLevel, {
                        children: e.children
                    })
                })
            }

            function P(e) {
                return (0, o.jsx)(f.Button, {
                    focusProps: e.focusProps,
                    "aria-label": N.default.Messages.CLOSE,
                    look: f.Button.Looks.BLANK,
                    size: f.Button.Sizes.NONE,
                    onClick: e.onClick,
                    innerClassName: a({
                        [C.closeWithCircleBackground]: e.withCircleBackground
                    }),
                    className: a(e.className, {
                        [C.hideOnFullscreen]: e.hideOnFullscreen,
                        [C.close]: !e.withCircleBackground
                    }),
                    children: (0, o.jsx)(T.default, {
                        width: 24,
                        height: 24,
                        className: C.closeIcon
                    })
                })
            }

            function M(e) {
                let {
                    className: t,
                    scrollerRef: n,
                    ...i
                } = e;
                return (0, o.jsx)(m.ListThin, {
                    className: t,
                    ref: n,
                    ...i
                })
            }
        },
        625611: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ModalTransitionState: function() {
                    return r
                },
                TRANSITION_DURATION: function() {
                    return s
                },
                DEFAULT_MODAL_CONTEXT: function() {
                    return l
                },
                POPOUT_MODAL_CONTEXT: function() {
                    return a
                },
                ModalContentContext: function() {
                    return u
                }
            });
            var i, r, o = n("884691");
            (i = r || (r = {}))[i.ENTERING = 0] = "ENTERING", i[i.ENTERED = 1] = "ENTERED", i[i.EXITING = 2] = "EXITING", i[i.EXITED = 3] = "EXITED", i[i.HIDDEN = 4] = "HIDDEN";
            let s = 300,
                l = "default",
                a = "popout",
                u = o.createContext({
                    headerId: void 0,
                    headerIdIsManaged: !1
                })
        },
        362149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("242670"),
                o = n("516256"),
                s = n("782340"),
                l = n("760021");

            function a(e) {
                return (0, i.jsx)(o.ModalRoot, {
                    ...e,
                    "aria-label": s.default.Messages.LOADING,
                    size: o.ModalSize.SMALL,
                    children: (0, i.jsx)("div", {
                        className: l.spinnerContainer,
                        children: (0, i.jsx)(r.Spinner, {})
                    })
                })
            }
        },
        446662: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AdvancedScrollerNone: function() {
                    return o
                },
                AdvancedScrollerThin: function() {
                    return s
                },
                AdvancedScrollerAuto: function() {
                    return l
                }
            });
            var i = n("858850"),
                r = n("517614");
            let o = (0, i.createAdvancedScroller)(r.none, r.fade, r.customTheme),
                s = (0, i.createAdvancedScroller)(r.thin, r.fade, r.customTheme),
                l = (0, i.createAdvancedScroller)(r.auto, r.fade, r.customTheme)
        },
        858850: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createAdvancedScroller: function() {
                    return u
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                s = n.n(o),
                l = n("718776"),
                a = n("462977");

            function u(e, t, n) {
                let o = (0, a.getScrollbarSpecs)(e);
                return r.forwardRef(function(u, c) {
                    let {
                        children: d,
                        className: _,
                        dir: f = "ltr",
                        orientation: E = "vertical",
                        fade: S = !1,
                        customTheme: g = !1,
                        paddingFix: h = !0,
                        style: m,
                        ...p
                    } = u, {
                        scrollerRef: I,
                        getScrollerState: T
                    } = (0, a.useUncachedScrollerState)(), v = (0, a.useScrollSpring)(I, E);
                    r.useImperativeHandle(c, () => ({
                        getScrollerNode: () => I.current,
                        getScrollerState: T,
                        ...(0, a.getAnimatedScrollHelpers)(I, T, v, E)
                    }), [I, T, E, v]);
                    let A = (0, a.usePaddingFixes)({
                        paddingFix: h,
                        orientation: E,
                        dir: f,
                        className: _,
                        scrollerRef: I,
                        specs: o
                    });
                    return (0, i.jsx)("div", {
                        ref: I,
                        className: s(_, {
                            [e]: !0,
                            [t]: S,
                            [n]: g
                        }),
                        style: (0, a.getMergedOrientationStyles)(m, E),
                        dir: f,
                        ...p,
                        children: (0, i.jsxs)(l.FocusRingScope, {
                            containerRef: I,
                            children: [d, A]
                        })
                    })
                })
            }
        },
        253233: function(e, t, n) {
            "use strict";

            function i(e) {
                return "row" === e.type
            }
            n.r(t), n.d(t, {
                isListItemRow: function() {
                    return i
                },
                default: function() {
                    return r
                }
            }), n("424973");
            var r = class e {
                mergeProps(e) {
                    let {
                        sectionHeight: t,
                        rowHeight: n,
                        footerHeight: i,
                        listHeaderHeight: r,
                        paddingTop: o,
                        paddingBottom: s,
                        sections: l,
                        getAnchorId: a
                    } = e;
                    this.sections = l, this.sectionHeight = t, this.rowHeight = n, this.footerHeight = i, this.listHeaderHeight = r, this.uniform = "number" == typeof n, this.paddingTop = o, this.paddingBottom = s, this.getAnchorId = null != a ? a : this.getAnchorId
                }
                getHeight() {
                    let e = this.paddingTop + this.getListHeaderHeight(),
                        {
                            length: t
                        } = this.sections;
                    for (let n = 0; n < t; n++) {
                        if (e += this.getHeightForSection(n), this.uniform) e += this.sections[n] * this.getHeightForRow(n, 0);
                        else
                            for (let t = 0; t < this.sections[n]; t++) e += this.getHeightForRow(n, t);
                        e += this.getHeightForFooter(n)
                    }
                    return e + this.paddingBottom
                }
                getHeightForSection(e) {
                    let {
                        sectionHeight: t
                    } = this;
                    return "number" == typeof t ? t : t(e)
                }
                getHeightForRow(e, t) {
                    let {
                        rowHeight: n
                    } = this;
                    return "number" == typeof n ? n : n(e, t)
                }
                getHeightForFooter(e) {
                    let {
                        footerHeight: t
                    } = this;
                    return null == t ? 0 : "number" == typeof t ? t : t(e)
                }
                getListHeaderHeight() {
                    let {
                        listHeaderHeight: e
                    } = this;
                    return null == e ? 0 : "number" == typeof e ? e : e()
                }
                compute(e, t) {
                    let n = this.paddingTop,
                        i = n,
                        r = n,
                        o = 0,
                        s = 0,
                        l = [],
                        a = o => (r = n, (n += o) < e) ? (i += o, !1) : !(r > t) && !0;
                    a(this.getListHeaderHeight()) && l.push({
                        type: "header",
                        section: -1,
                        offsetTop: r
                    });
                    for (let e = 0; e < this.sections.length; e++) {
                        let t = this.sections[e];
                        if (0 !== t) {
                            if (a(this.getHeightForSection(e)) && l.push({
                                    type: "section",
                                    section: e,
                                    listIndex: s,
                                    offsetTop: r,
                                    anchorId: this.getAnchorId(e)
                                }), s += 1, this.uniform) {
                                let n = this.getHeightForRow(e, 0);
                                for (let i = 0; i < t; i++) a(n) && l.push({
                                    type: "row",
                                    section: e,
                                    listIndex: s,
                                    row: i,
                                    rowIndex: o,
                                    offsetTop: r,
                                    anchorId: this.getAnchorId(e, i)
                                }), o += 1, s += 1
                            } else
                                for (let n = 0; n < t; n++) a(this.getHeightForRow(e, n)) && l.push({
                                    type: "row",
                                    section: e,
                                    listIndex: s,
                                    row: n,
                                    rowIndex: o,
                                    offsetTop: r,
                                    anchorId: this.getAnchorId(e, n)
                                }), o += 1, s += 1;
                            a(this.getHeightForFooter(e)) && l.push({
                                type: "footer",
                                section: e,
                                offsetTop: r
                            })
                        }
                    }
                    return {
                        spacerTop: i,
                        totalHeight: n + this.paddingBottom,
                        items: l
                    }
                }
                computeScrollPosition(e, t) {
                    let {
                        paddingTop: n
                    } = this, i = n + this.getListHeaderHeight(), r = 0, o = !1;
                    for (; r <= e;) {
                        let n = this.sections[r];
                        if (r === e && null == t) {
                            o = !0;
                            break
                        }
                        if (0 === n) {
                            r += 1;
                            continue
                        }
                        if (i += this.getHeightForSection(r), this.uniform) {
                            let s = this.getHeightForRow(r, 0);
                            r === e && null != t ? (i += s * t, o = !0) : i += s * n
                        } else
                            for (let s = 0; s < n; s++)
                                if (r < e || r === e && null != t && s < t) i += this.getHeightForRow(r, s);
                                else if (r === e && null != t && s === t) {
                            o = !0;
                            break
                        }!o && (i += this.getHeightForFooter(r)), r += 1
                    }
                    return [i, null != t ? this.getHeightForRow(e, t) : this.getHeightForSection(r)]
                }
                constructor() {
                    this.sectionHeight = 0, this.rowHeight = 0, this.footerHeight = 0, this.listHeaderHeight = 0, this.uniform = !1, this.paddingBottom = 0, this.paddingTop = 0, this.sections = [], this.getAnchorId = () => void 0
                }
            }
        },
        336688: function(e, t, n) {
            "use strict";
            var i;
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("424973");
            let r = 1 / 240;
            i = class {
                to(e) {
                    let {
                        to: t,
                        from: n,
                        animate: i = !1,
                        callback: r
                    } = e;
                    if (this.target = t, null != r && this.callbacks.push(r), null != n && (this.from = n), !i) {
                        this.stop(t);
                        return
                    }
                    return this.animating ? this : (this.start(), this)
                }
                cancel() {
                    return this.stop(this.from), this
                }
                start() {
                    var e, t;
                    this.animating = !0, this.vel = 0, this.last = null, this.nodeWindow = this.getNodeWindow(), this.nextTick = null !== (t = null === (e = this.nodeWindow) || void 0 === e ? void 0 : e.requestAnimationFrame(this.update)) && void 0 !== t ? t : -1
                }
                getUpdates(e, t) {
                    let n = -this.tension * (t - this.target),
                        i = -this.friction * e,
                        o = (n + i) / this.mass;
                    return Math.abs(e += o * r) > this.maxVelocity && (e = this.maxVelocity * (e > 0 ? 1 : -1)), {
                        from: t += e * r,
                        vel: e,
                        accel: o
                    }
                }
                stop(e) {
                    var t;
                    null === (t = this.nodeWindow) || void 0 === t || t.cancelAnimationFrame(this.nextTick), this.animating = !1, this.accumulator = 0, null != e && (this.target = this.from = e, this.callback(e, this.abort)), this.callbacks.length > 0 && (this.callbacks.forEach(e => e()), this.callbacks.length = 0)
                }
                constructor({
                    callback: e,
                    tension: t = 160,
                    friction: n = 22,
                    mass: i = 1,
                    threshold: o = .001,
                    clamp: s = !1,
                    maxVelocity: l = 1 / 0,
                    getNodeWindow: a = () => window
                }) {
                    this.accumulator = 0, this.from = 0, this.target = 0, this.vel = 0, this.animating = !1, this.last = null, this.nextTick = -1, this.nodeWindow = null, this.callbacks = [], this.mergeTo = e => {
                        let {
                            to: t,
                            callback: n
                        } = e;
                        !this.animating && (null != n && this.callbacks.push(n), this.stop(t));
                        let i = t - this.from;
                        this.from = t, this.target = this.target + i, this.callback(this.from, this.abort), null != n && n()
                    }, this.abort = () => {
                        this.animating = !1
                    }, this.update = e => {
                        var t, n, i, o;
                        if (null == this.last) {
                            this.last = e, this.nextTick = null !== (n = null === (t = this.nodeWindow) || void 0 === t ? void 0 : t.requestAnimationFrame(this.update)) && void 0 !== n ? n : -1;
                            return
                        }
                        for (this.accumulator = Math.min((e - this.last) / 1e3 + this.accumulator, 2); this.accumulator > r;) {
                            this.accumulator -= r;
                            let {
                                vel: e,
                                from: t,
                                accel: n
                            } = this.getUpdates(this.vel, this.from);
                            if (this.vel = e, this.clamp && (t === this.target || t < this.target && this.from > this.target || t > this.target && this.from < this.target) || Math.abs(n * r) < this.threshold) {
                                this.stop(this.target);
                                return
                            }
                            this.from = t
                        }
                        let {
                            from: s
                        } = this;
                        if (this.accumulator > 0) {
                            let {
                                from: e
                            } = this.getUpdates(this.vel, s), t = (e - s) * (this.accumulator / r);
                            s += t
                        }
                        this.callback(s, this.abort), this.animating && (this.last = e, this.nextTick = null !== (o = null === (i = this.nodeWindow) || void 0 === i ? void 0 : i.requestAnimationFrame(this.update)) && void 0 !== o ? o : -1)
                    }, this.callback = e, this.from = 0, this.tension = t, this.friction = n, this.mass = i, this.maxVelocity = l, this.threshold = o, this.clamp = s, this.getNodeWindow = a
                }
            }
        },
        87430: function(e, t, n) {
            "use strict";
            var i;
            n.r(t), n.d(t, {
                getMasonryListSectionHeaderKey: function() {
                    return o
                },
                getMasonryListSectionIndex: function() {
                    return s
                },
                default: function() {
                    return i
                }
            }), n("781738"), n("808653"), n("222007"), n("424973"), n("843762"), n("70102");
            let r = e => "__section__".concat(e),
                o = e => "__section_header__".concat(e),
                s = e => parseInt(e.replace(/^__section__/, ""), 10),
                l = () => 0;
            i = class {
                getPadding() {
                    return null != this.padding ? this.padding : this.itemGutter
                }
                getPaddingVertical() {
                    return null != this.paddingVertical ? this.paddingVertical : this.getPadding()
                }
                getPaddingHorizontal() {
                    return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding()
                }
                getSectionGutter() {
                    return null != this.sectionGutter ? this.sectionGutter : this.itemGutter
                }
                mergeProps(e) {
                    let {
                        sections: t = this.sections,
                        columns: n = this.columns,
                        itemGutter: i = this.itemGutter,
                        removeEdgeItemGutters: r = this.removeEdgeItemGutters,
                        getItemKey: o = this.getItemKey,
                        getItemHeight: s = this.getItemHeight,
                        getSectionHeight: l = this.getSectionHeight,
                        bufferWidth: a = this.bufferWidth,
                        padding: u = this.padding,
                        paddingVertical: c = this.paddingVertical,
                        paddingHorizontal: d = this.paddingHorizontal,
                        sectionGutter: _ = this.sectionGutter,
                        dir: f = this.dir
                    } = e;
                    (this.sections !== t || this.columns !== n || this.itemGutter !== i || this.removeEdgeItemGutters !== r || this.getItemKey !== o || this.getSectionHeight !== l || this.getItemHeight !== s || this.bufferWidth !== a || this.padding !== u || this.paddingVertical !== c || this.paddingHorizontal !== d || this.sectionGutter !== _ || this.dir !== f) && (this.needsFullCompute = !0, this.sections = t, this.columns = n, this.itemGutter = i, this.getItemKey = o, this.getSectionHeight = l, this.getItemHeight = s, this.bufferWidth = a, this.padding = u, this.paddingVertical = c, this.paddingHorizontal = d, this.sectionGutter = _, this.dir = f)
                }
                computeFullCoords() {
                    if (!this.needsFullCompute) return;
                    let {
                        columns: e,
                        getItemKey: t,
                        getItemHeight: n,
                        itemGutter: i,
                        getSectionHeight: s,
                        bufferWidth: l,
                        removeEdgeItemGutters: a
                    } = this, u = "rtl" === this.dir ? "right" : "left";
                    this.coordsMap = {}, this.gridData = {
                        boundaries: [],
                        coordinates: {}
                    }, this.currentRow = 0, this.lastColumnIndex = 0;
                    let c = this.getPaddingHorizontal(),
                        d = this.getPaddingVertical();
                    this.columnHeights = Array(e).fill(d), this.columnWidth = (l - 2 * c - i * (e - 1) - (a ? i : 0)) / e, this.itemGrid = [];
                    let _ = 0;
                    for (; _ < this.sections.length;) {
                        this.gridData.boundaries[_] = this.currentRow, this.currentRow = 0, this.lastColumnIndex = 0;
                        let l = this.sections[_],
                            a = 0,
                            d = s(_),
                            S = this.getMaxColumnHeight(this.columnHeights);
                        _ > 0 && (S = S - i + this.getSectionGutter());
                        let g = d > 0 ? d + i : 0;
                        for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = S + g;
                        for (; a < l;) {
                            var f, E;
                            let e = t(_, a);
                            if (null == e) {
                                a++;
                                continue
                            }
                            let [r, o] = (E = this.columnHeights).reduce((e, t, n) => t < e[0] ? [t, n] : e, [E[0], 0]);
                            o < this.lastColumnIndex && this.currentRow++, this.lastColumnIndex = o;
                            let s = n(_, a, this.columnWidth),
                                l = {
                                    position: "absolute",
                                    [u]: this.columnWidth * o + i * (o + 1) - i,
                                    width: this.columnWidth,
                                    top: r - S,
                                    height: s
                                },
                                c = {
                                    section: _,
                                    row: this.currentRow,
                                    column: o
                                };
                            this.coordsMap[e] = l, this.gridData.coordinates[e] = c, this.columnHeights[o] = r + s + i, this.itemGrid[o] = null !== (f = this.itemGrid[o]) && void 0 !== f ? f : [], this.itemGrid[o].push(e), a++
                        }
                        d > 0 && (this.coordsMap[o(_)] = {
                            position: "sticky",
                            [u]: 0,
                            width: this.columnWidth * e + i * e,
                            top: 0,
                            height: d
                        }), this.coordsMap[r(_)] = {
                            position: "absolute",
                            [u]: c,
                            width: this.columnWidth * e + i * (e - 1),
                            top: S,
                            height: this.getMaxColumnHeight(this.columnHeights) - S - i
                        }, _++
                    }
                    this.columnHeights = this.columnHeights.map(e => e - i + d), this.totalHeight = this.getMaxColumnHeight(), this.visibleSections = {}, this.needsFullCompute = !1
                }
                computeVisibleSections(e, t) {
                    this.computeFullCoords();
                    let {
                        getItemKey: n,
                        coordsMap: i
                    } = this;
                    this.visibleSections = {};
                    let o = 0;
                    for (; o < this.sections.length;) {
                        let s = this.sections[o],
                            l = r(o),
                            a = i[l];
                        if (null == a) {
                            o++;
                            continue
                        }
                        let {
                            top: u
                        } = a, c = u + a.height;
                        if (u > t) break;
                        if (c < e) {
                            o++;
                            continue
                        }
                        let d = 0,
                            _ = 1;
                        for (c < t && c > e && (d = s - 1, _ = -1), this.visibleSections[l] = []; d >= 0 && d < s;) {
                            let r = n(o, d),
                                s = null != r ? i[r] : null;
                            if (null == r || null == s) {
                                d += _;
                                continue
                            }
                            let {
                                top: a,
                                height: c
                            } = s;
                            a + u > e - c && a + u < t && (-1 === _ ? this.visibleSections[l].unshift([r, o, d]) : this.visibleSections[l].push([r, o, d])), d += _
                        }
                        if (u < e && c > t) break;
                        o++
                    }
                }
                getMaxColumnHeight() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
                    return e.reduce((e, t) => Math.max(e, t), 0)
                }
                getState() {
                    return {
                        coordsMap: this.coordsMap,
                        gridData: this.gridData,
                        visibleSections: this.visibleSections,
                        totalHeight: this.totalHeight
                    }
                }
                constructor() {
                    this.visibleSections = {}, this.gridData = {
                        coordinates: {},
                        boundaries: []
                    }, this.coordsMap = {}, this.columnHeights = [], this.columnWidth = 0, this.totalHeight = 0, this.itemGrid = [], this.currentRow = 0, this.lastColumnIndex = 0, this.needsFullCompute = !0, this.bufferWidth = 0, this.sections = [], this.columns = 0, this.itemGutter = 0, this.removeEdgeItemGutters = !1, this.sectionGutter = null, this.padding = null, this.paddingVertical = null, this.paddingHorizontal = null, this.dir = "ltr", this.getItemKey = () => {
                        throw Error("MasonryListComputer: getItemKey has not been implemented")
                    }, this.getItemHeight = () => {
                        throw Error("MasonryListComputer: getItemHeight has not been implemented")
                    }, this.getSectionHeight = l
                }
            }
        },
        431182: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("903083");

            function r(e, t, n, r) {
                let o = (0, i.default)(e, t, r),
                    s = (e, t) => n.computeScrollPosition(e, t);
                return {
                    ...o,
                    getScrollPosition: s,
                    isItemVisible(e, n) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            [r, o] = s(e, n),
                            l = t();
                        return i ? r >= l.scrollTop && r + o <= l.scrollTop + l.offsetHeight : r + o >= l.scrollTop && r <= l.scrollTop + l.offsetHeight
                    },
                    scrollToIndex(e) {
                        let {
                            section: t,
                            row: n,
                            animate: i,
                            callback: r,
                            padding: l = 0
                        } = e, [a, u] = s(t, n);
                        o.scrollIntoViewRect({
                            start: a,
                            end: a + u,
                            padding: l,
                            animate: i,
                            callback: r
                        })
                    }
                }
            }
        },
        903083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("118810");

            function r(e, t) {
                if ("horizontal" === t) {
                    let {
                        scrollLeft: t,
                        scrollWidth: n,
                        offsetWidth: i
                    } = e;
                    return {
                        scrollPosition: t,
                        scrollSize: n,
                        offsetSize: i
                    }
                }
                let {
                    scrollTop: n,
                    scrollHeight: i,
                    offsetHeight: r
                } = e;
                return {
                    scrollPosition: n,
                    scrollSize: i,
                    offsetSize: r
                }
            }

            function o(e, t, n) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vertical",
                    s = e => {
                        let {
                            to: i,
                            animate: s,
                            callback: l
                        } = e, {
                            scrollPosition: a,
                            scrollSize: u,
                            offsetSize: c
                        } = r(t(), o);
                        n.to({
                            to: function(e, t, n) {
                                let i = t - n + 1;
                                return e >= i - 1 ? i : Math.max(0, e)
                            }(i, u, c),
                            from: a,
                            animate: s,
                            callback: l
                        })
                    },
                    l = e => {
                        let {
                            start: n,
                            end: i,
                            padding: l = 0,
                            animate: a,
                            callback: u
                        } = e, {
                            scrollPosition: c,
                            offsetSize: d
                        } = r(t(), o);
                        n -= l, i += l, n >= c && i <= c + d ? null != u && u() : n < c ? s({
                            to: n,
                            animate: a,
                            callback: u
                        }) : s({
                            to: i - d,
                            animate: a,
                            callback: u
                        })
                    };
                return {
                    spring: n,
                    scrollTo: s,
                    mergeTo: n.mergeTo,
                    scrollIntoViewRect: l,
                    scrollIntoViewNode(t) {
                        let {
                            node: n,
                            padding: r = 0,
                            animate: s = !1,
                            callback: a
                        } = t, {
                            current: u
                        } = e;
                        if (null == u) return;
                        let {
                            offset: c,
                            offsetSize: d
                        } = function(e, t, n) {
                            let r = "horizontal" === t ? e.offsetWidth : e.offsetHeight,
                                o = "horizontal" === t ? e.offsetLeft : e.offsetTop,
                                s = e.offsetParent;
                            for (; null != s && s !== n;)(0, i.isElement)(s, HTMLElement) ? (o += "horizontal" === t ? s.offsetLeft : s.offsetTop, s = s.offsetParent) : s = s.parentNode;
                            return {
                                offset: o,
                                offsetSize: r
                            }
                        }(n, o, u);
                        l({
                            start: c,
                            end: c + d,
                            padding: r,
                            animate: s,
                            callback: a
                        })
                    },
                    scrollPageUp() {
                        let {
                            animate: e = !1,
                            callback: n
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                            scrollPosition: i,
                            offsetSize: l
                        } = r(t(), o);
                        s({
                            to: i - .9 * l,
                            animate: e,
                            callback: n
                        })
                    },
                    scrollPageDown() {
                        let {
                            animate: e = !1,
                            callback: n
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                            scrollPosition: i,
                            offsetSize: l
                        } = r(t(), o);
                        s({
                            to: i + .9 * l,
                            animate: e,
                            callback: n
                        })
                    },
                    scrollToTop() {
                        let {
                            animate: e = !1,
                            callback: t
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        s({
                            to: 0,
                            animate: e,
                            callback: t
                        })
                    },
                    scrollToBottom() {
                        let {
                            animate: e = !1,
                            callback: t
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        s({
                            to: Number.MAX_SAFE_INTEGER,
                            animate: e,
                            callback: t
                        })
                    },
                    isScrolledToTop: () => 0 === r(t(), o).scrollPosition,
                    isScrolledToBottom() {
                        let {
                            scrollPosition: e,
                            scrollSize: n,
                            offsetSize: i
                        } = r(t(), o);
                        return e >= n - i
                    }
                }
            }
        },
        84372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            let i = Object.freeze({
                    overflowY: "scroll",
                    overflowX: "hidden"
                }),
                r = Object.freeze({
                    overflowX: "scroll",
                    overflowY: "hidden"
                }),
                o = Object.freeze({
                    overflow: "auto"
                });

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
                    n = "vertical" === t ? i : "horizontal" === t ? r : o;
                return null != e ? {
                    ...n,
                    ...e
                } : n
            }
        },
        436648: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            let i = [
                    ["position", "absolute"],
                    ["top", "-100px"],
                    ["left", "-100px"],
                    ["width", "100px"],
                    ["height", "100px"],
                    ["overflow", "scroll"]
                ],
                r = [
                    ["width", "200px"],
                    ["height", "200px"]
                ];

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = document.createElement("div"),
                    n = document.createElement("div");
                for (let [e, n] of i) t.style[e] = n;
                for (let [e, t] of r) n.style[e] = t;
                t.appendChild(n), document.body.appendChild(t), t.className = e;
                let o = {
                    width: t.offsetWidth - t.clientWidth,
                    height: t.offsetHeight - t.clientHeight
                };
                return document.body.removeChild(t), o
            }
        },
        462977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getAnimatedScrollHelpers: function() {
                    return i.default
                },
                getAnimatedListScrollHelpers: function() {
                    return r.default
                },
                useCachedScrollerState: function() {
                    return o.default
                },
                usePaddingFixes: function() {
                    return s.default
                },
                useResizeObserverSubscription: function() {
                    return l.default
                },
                useUncachedScrollerState: function() {
                    return a.default
                },
                useVirtualizedMasonryState: function() {
                    return u.default
                },
                useVirtualizedState: function() {
                    return c.default
                },
                useVirtualizedAnchor: function() {
                    return c.useVirtualizedAnchor
                },
                ListComputer: function() {
                    return d.default
                },
                isListItemRow: function() {
                    return d.isListItemRow
                },
                MasonryListComputer: function() {
                    return _.default
                },
                getMasonryListSectionHeaderKey: function() {
                    return _.getMasonryListSectionHeaderKey
                },
                getMasonryListSectionIndex: function() {
                    return _.getMasonryListSectionIndex
                },
                getMergedOrientationStyles: function() {
                    return f.default
                },
                useScrollSpring: function() {
                    return E.default
                },
                getScrollbarSpecs: function() {
                    return S.default
                }
            });
            var i = n("903083"),
                r = n("431182"),
                o = n("828426");
            n("644141");
            var s = n("378242"),
                l = n("674424");
            n("17182");
            var a = n("358198"),
                u = n("232000"),
                c = n("238806"),
                d = n("253233"),
                _ = n("87430");
            n("336688");
            var f = n("84372"),
                E = n("595604"),
                S = n("436648")
        },
        828426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let r = Object.freeze({
                scrollTop: 0,
                scrollLeft: 0,
                scrollHeight: 0,
                scrollWidth: 0,
                offsetHeight: 0,
                offsetWidth: 0,
                dirty: 2
            });

            function o() {
                let e = (0, i.useRef)(null),
                    t = (0, i.useRef)(r),
                    n = (0, i.useCallback)(() => {
                        let {
                            current: n
                        } = e, {
                            dirty: i
                        } = t.current;
                        if (null == n || 0 === i) return t.current;
                        if (1 === i) {
                            let {
                                scrollTop: e,
                                scrollLeft: i
                            } = n;
                            t.current = {
                                ...t.current,
                                scrollTop: e,
                                scrollLeft: i,
                                dirty: 0
                            }
                        } else {
                            let {
                                scrollTop: e,
                                scrollLeft: i,
                                scrollHeight: r,
                                scrollWidth: o,
                                offsetHeight: s,
                                offsetWidth: l
                            } = n;
                            t.current = {
                                scrollTop: e,
                                scrollLeft: i,
                                scrollHeight: r,
                                scrollWidth: o,
                                offsetHeight: s,
                                offsetWidth: l,
                                dirty: 0
                            }
                        }
                        return t.current
                    }, []);
                return {
                    scrollerRef: e,
                    scrollerState: t,
                    getScrollerState: n
                }
            }
        },
        644141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var i = n("884691"),
                r = n("817736");

            function o() {
                let [, e] = (0, i.useState)(0);
                return (0, i.useCallback)(() => (0, r.flushSync)(() => e(e => e + 1)), [])
            }
        },
        378242: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983"),
                r = n("884691");

            function o(e) {
                let {
                    paddingFix: t = !0,
                    orientation: n = "vertical",
                    dir: o,
                    className: s,
                    scrollerRef: l,
                    specs: a
                } = e, u = (0, r.useRef)(null);
                return (0, r.useLayoutEffect)(() => {
                    var e;
                    let {
                        current: i
                    } = l;
                    if (null == i || "auto" === n || !t) return;
                    let r = null === (e = i.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
                    if (null == r) return;
                    i.style.paddingTop = "", i.style.paddingBottom = "", i.style.paddingLeft = "", i.style.paddingRight = "";
                    let s = r.getComputedStyle(i);
                    if ("vertical" === n) {
                        if ("rtl" === o) {
                            let e = parseInt(s.getPropertyValue("padding-left"), 10);
                            i.style.paddingLeft = "".concat(Math.max(0, e - a.width), "px"), i.style.paddingRight = ""
                        } else {
                            let e = parseInt(s.getPropertyValue("padding-right"), 10);
                            i.style.paddingRight = "".concat(Math.max(0, e - a.width), "px"), i.style.paddingLeft = ""
                        }
                        let {
                            current: e
                        } = u;
                        null != e && (e.style.height = s.getPropertyValue("padding-bottom"))
                    } else {
                        let e = parseInt(s.getPropertyValue("padding-bottom"), 10);
                        i.style.paddingBottom = "".concat(Math.max(0, e - a.height), "px");
                        let {
                            current: t
                        } = u;
                        null != t && (t.style.width = s.getPropertyValue("padding-left"))
                    }
                }, [n, o, s, l, t, a]), (0, r.useMemo)(() => {
                    var e;
                    return "auto" !== n ? (0, i.jsx)("div", {
                        "aria-hidden": !0,
                        style: {
                            position: "vertical" === (e = n) ? "absolute" : "relative",
                            pointerEvents: "none",
                            minHeight: "vertical" === e ? 0 : 1,
                            minWidth: "horizontal" === e ? 0 : 1,
                            flex: "0 0 auto"
                        },
                        ref: u
                    }) : null
                }, [n])
            }
        },
        674424: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("817736");
            let o = Object.freeze({
                box: "border-box"
            });

            function s(e) {
                let {
                    ref: t,
                    onUpdate: n,
                    resizeObserver: s,
                    listenerMap: l,
                    key: a
                } = e;
                (0, i.useLayoutEffect)(() => {
                    let {
                        current: e
                    } = t;
                    return null != e && (l.set(e, e => {
                        (0, r.flushSync)(() => {
                            n(e, a)
                        })
                    }), s.observe(e, o)), () => {
                        null != e && (s.unobserve(e), l.delete(e))
                    }
                }, [n, s, t, l, a])
            }
        },
        17182: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var i = n("884691");

            function r(e, t, n) {
                return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1]
            }
            let o = [0, 0];

            function s(e) {
                let {
                    chunkSize: t,
                    getScrollerState: n,
                    forceUpdate: s
                } = e, {
                    dirty: l,
                    scrollTop: a,
                    offsetHeight: u
                } = n();
                (0, i.useLayoutEffect)(() => {
                    l > 0 && s()
                }, [l, s]);
                let c = (0, i.useRef)(o);
                c.current = r(a, u, t);
                let [d, _] = c.current, f = (0, i.useCallback)(e => {
                    let {
                        dirty: i,
                        scrollTop: o,
                        offsetHeight: l
                    } = n();
                    if (i > 0) return;
                    let [a, u] = r(o, l, t);
                    a !== c.current[0] ? s() : 2 === e && u !== c.current[1] && s()
                }, [s, t, n]);
                return {
                    forceUpdateOnChunkChange: f,
                    chunkStart: d,
                    chunkEnd: _,
                    dirty: l
                }
            }
        },
        595604: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var i = n("884691"),
                r = n("336688");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
                    [n] = (0, i.useState)(() => new r.default({
                        tension: 200,
                        friction: 35,
                        mass: 2,
                        clamp: !0,
                        callback: (n, i) => {
                            let {
                                current: r
                            } = e;
                            if (null == r) return i();
                            "horizontal" === t ? r.scrollLeft = n : r.scrollTop = n
                        },
                        getNodeWindow: () => {
                            var t, n, i;
                            return null !== (i = null === (n = e.current) || void 0 === n ? void 0 : null === (t = n.ownerDocument) || void 0 === t ? void 0 : t.defaultView) && void 0 !== i ? i : null
                        }
                    }));
                return n
            }
        },
        358198: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let r = Object.freeze({
                scrollTop: 0,
                scrollLeft: 0,
                scrollHeight: 0,
                scrollWidth: 0,
                offsetHeight: 0,
                offsetWidth: 0,
                dirty: 0
            });

            function o() {
                let e = (0, i.useRef)(null),
                    t = (0, i.useCallback)(() => {
                        let {
                            current: t
                        } = e;
                        if (null != t) {
                            let {
                                scrollTop: e,
                                scrollLeft: n,
                                scrollHeight: i,
                                scrollWidth: r,
                                offsetHeight: o,
                                offsetWidth: s
                            } = t;
                            return {
                                scrollTop: e,
                                scrollLeft: n,
                                scrollHeight: i,
                                scrollWidth: r,
                                offsetHeight: o,
                                offsetWidth: s,
                                dirty: 0
                            }
                        }
                        return r
                    }, []);
                return {
                    scrollerRef: e,
                    getScrollerState: t
                }
            }
        },
        232e3: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var i = n("884691"),
                r = n("87430"),
                o = n("644141"),
                s = n("17182");
            let l = Object.freeze({
                coordsMap: {},
                visibleSections: {},
                totalHeight: 0,
                gridData: {
                    boundaries: [],
                    coordinates: {}
                }
            });

            function a(e) {
                let {
                    sections: t,
                    columns: n,
                    getItemKey: a,
                    getItemHeight: u,
                    getSectionHeight: c,
                    chunkSize: d = 250,
                    getScrollerState: _,
                    itemGutter: f,
                    removeEdgeItemGutters: E,
                    sectionGutter: S,
                    padding: g,
                    paddingVertical: h,
                    paddingHorizontal: m,
                    dir: p
                } = e, I = (0, o.default)(), T = (0, i.useRef)(l), [v] = (0, i.useState)(() => new r.default), A = _(), {
                    offsetWidth: N
                } = A, {
                    dirty: C,
                    chunkStart: R,
                    chunkEnd: O,
                    forceUpdateOnChunkChange: L
                } = (0, s.default)({
                    chunkSize: d,
                    getScrollerState: _,
                    forceUpdate: I
                });
                return T.current = (0, i.useMemo)(() => C > 0 ? T.current : (v.mergeProps({
                    sections: t,
                    columns: n,
                    getItemKey: a,
                    getItemHeight: u,
                    getSectionHeight: c,
                    bufferWidth: N,
                    itemGutter: f,
                    removeEdgeItemGutters: E,
                    sectionGutter: S,
                    padding: g,
                    paddingVertical: h,
                    paddingHorizontal: m,
                    dir: p
                }), v.computeVisibleSections(Math.max(0, R * d), O * d), v.getState()), [C, v, t, n, a, u, c, R, O, d, f, E, S, g, h, m, N, p]), {
                    ...T.current,
                    masonryComputer: v,
                    forceUpdateOnChunkChange: L,
                    forceUpdate: I
                }
            }
        },
        238806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                },
                useVirtualizedAnchor: function() {
                    return u
                }
            }), n("70102"), n("222007");
            var i = n("884691"),
                r = n("253233"),
                o = n("644141"),
                s = n("17182");
            let l = Object.freeze({
                spacerTop: 0,
                totalHeight: 0,
                items: [],
                isSidebarVisible: !1
            });

            function a(e) {
                let {
                    sections: t,
                    sectionHeight: n,
                    rowHeight: a,
                    footerHeight: u,
                    sidebarHeight: c,
                    listHeaderHeight: d,
                    chunkSize: _ = 256,
                    paddingTop: f = 0,
                    paddingBottom: E = 0,
                    getScrollerState: S,
                    getAnchorId: g
                } = e, h = (0, o.default)(), m = (0, i.useRef)(l), [p] = (0, i.useState)(() => new r.default), {
                    dirty: I,
                    chunkStart: T,
                    chunkEnd: v,
                    forceUpdateOnChunkChange: A
                } = (0, s.default)({
                    chunkSize: _,
                    getScrollerState: S,
                    forceUpdate: h
                }), {
                    items: N
                } = m.current, C = null, {
                    scrollTop: R
                } = S();
                for (let e of N) {
                    if (0 === R) break;
                    if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
                    let t = "row" === e.type ? e.row : void 0;
                    if (e.offsetTop >= R) {
                        C = {
                            id: e.anchorId,
                            section: e.section,
                            row: t,
                            scrollOffset: e.offsetTop - R
                        };
                        break
                    }
                }
                let O = (0, i.useMemo)(() => {
                        let e = Math.max(0, T * _);
                        return null != c && e < c
                    }, [_, T, c]),
                    L = (0, i.useMemo)(() => I > 0 ? m.current : (p.mergeProps({
                        sectionHeight: n,
                        rowHeight: a,
                        footerHeight: u,
                        listHeaderHeight: d,
                        paddingBottom: E,
                        paddingTop: f,
                        sections: t,
                        getAnchorId: g
                    }), p.compute(Math.max(0, T * _), v * _)), [I, T, v, n, a, u, d, E, f, t, p, _, g]);
                return (0, i.useLayoutEffect)(() => void(m.current = L)), {
                    ...L,
                    listComputer: p,
                    forceUpdateOnChunkChange: A,
                    anchor: C,
                    isSidebarVisible: O
                }
            }

            function u(e) {
                let {
                    scrollerRef: t,
                    anchor: n,
                    getScrollerState: r,
                    listComputer: o,
                    getAnchorId: s,
                    totalHeight: l
                } = e;
                (0, i.useLayoutEffect)(() => {
                    let {
                        current: e
                    } = t, {
                        scrollTop: i
                    } = r();
                    if (null == n || null == n.row || null == e || null == s || 0 === i) return;
                    let l = t => {
                        if (t < 0 || t >= o.sections[n.section]) return !1;
                        let r = s(n.section, n.row);
                        if (r !== n.id) return !1;
                        let [l] = o.computeScrollPosition(n.section, t), a = l - n.scrollOffset;
                        return i !== a && (e.scrollTop = a), !0
                    };
                    if (!l(n.row)) !l(n.row - 1) && l(n.row + 1)
                }, [l])
            }
        },
        242670: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SpinnerTypes: function() {
                    return r
                },
                Spinner: function() {
                    return _
                }
            });
            var i, r, o = n("37983"),
                s = n("884691"),
                l = n("414456"),
                a = n.n(l),
                u = n("413197"),
                c = n("782340"),
                d = n("830306");
            (i = r || (r = {})).WANDERING_CUBES = "wanderingCubes", i.CHASING_DOTS = "chasingDots", i.PULSING_ELLIPSIS = "pulsingEllipsis", i.SPINNING_CIRCLE = "spinningCircle", i.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple", i.LOW_MOTION = "lowMotion";

            function _(e) {
                let {
                    type: t = "wanderingCubes",
                    animated: n = !0,
                    className: i,
                    itemClassName: r,
                    "aria-label": l,
                    ..._
                } = e, {
                    reducedMotion: f
                } = s.useContext(u.AccessibilityPreferencesContext), E = f.enabled ? function(e) {
                    switch (e) {
                        case "wanderingCubes":
                        case "chasingDots":
                            return "lowMotion";
                        default:
                            return e
                    }
                }(t) : t;
                if (l = null != l ? l : c.default.Messages.LOADING, "spinningCircle" === E || "spinningCircleSimple" === E) return (0, o.jsx)("div", {
                    className: a(d.spinner, d[E], i, {
                        [d.stopAnimation]: !n
                    }),
                    role: "img",
                    "aria-label": l,
                    ..._,
                    children: (0, o.jsx)("div", {
                        className: d.spinningCircleInner,
                        children: (0, o.jsxs)("svg", {
                            className: d.circular,
                            viewBox: "25 25 50 50",
                            children: ["spinningCircle" === E && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("circle", {
                                    className: a(d.path, d.path3, r),
                                    cx: "50",
                                    cy: "50",
                                    r: "20"
                                }), (0, o.jsx)("circle", {
                                    className: a(d.path, d.path2, r),
                                    cx: "50",
                                    cy: "50",
                                    r: "20"
                                })]
                            }), (0, o.jsx)("circle", {
                                className: a(d.path, r),
                                cx: "50",
                                cy: "50",
                                r: "20"
                            })]
                        })
                    })
                });
                let S = a(d.item, r);
                return (0, o.jsx)("span", {
                    className: a(d.spinner, i, {
                        [d.stopAnimation]: !n
                    }),
                    role: "img",
                    "aria-label": l,
                    ..._,
                    children: (0, o.jsxs)("span", {
                        className: a(d.inner, d[E]),
                        children: [(0, o.jsx)("span", {
                            className: S
                        }), (0, o.jsx)("span", {
                            className: S
                        }), "pulsingEllipsis" === E || "lowMotion" === E ? (0, o.jsx)("span", {
                            className: S
                        }) : null]
                    })
                })
            }
            _.Type = r
        },
        36763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ThemeContextFlags: function() {
                    return i
                },
                setThemeFlag: function() {
                    return a
                },
                RootThemeContextProvider: function() {
                    return d
                },
                ThemeContextProvider: function() {
                    return _
                },
                DisableCustomTheme: function() {
                    return f
                },
                useThemeContext: function() {
                    return E
                },
                UseThemeContext: function() {
                    return S
                }
            }), n("702976"), n("70102");
            var i, r, o = n("37983"),
                s = n("884691"),
                l = n("843455");

            function a(e, t) {
                return e | t
            }

            function u(e) {
                let t = JSON.stringify(e);
                return {
                    ...e,
                    key: t
                }
            }(r = i || (i = {}))[r.MOBILE_LEGACY_AMOLED_MODE_ENABLED = 1] = "MOBILE_LEGACY_AMOLED_MODE_ENABLED", r[r.MOBILE_REDESIGN_ENABLED = 2] = "MOBILE_REDESIGN_ENABLED", r[r.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4] = "MOBILE_DARK_GRADIENT_THEME_ENABLED", r[r.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8] = "MOBILE_LIGHT_GRADIENT_THEME_ENABLED";
            let c = s.createContext({
                theme: "light",
                primaryColor: null,
                secondaryColor: null,
                gradient: null,
                key: "light-false-null-null-null",
                flags: 0
            });

            function d(e) {
                let {
                    children: t,
                    theme: n = l.ThemeTypes.DARK,
                    primaryColor: i = null,
                    secondaryColor: r = null,
                    gradient: a = null,
                    flags: d = 0
                } = e, _ = s.useMemo(() => u({
                    theme: n,
                    primaryColor: i,
                    secondaryColor: r,
                    gradient: a,
                    flags: d
                }), [n, d, i, r, a]);
                return (0, o.jsx)(c.Provider, {
                    value: _,
                    children: t
                })
            }

            function _(e) {
                let {
                    children: t,
                    theme: n,
                    primaryColor: i,
                    secondaryColor: r,
                    gradient: l,
                    flags: a
                } = e, d = s.useContext(c), _ = s.useMemo(() => u({
                    theme: null != n ? n : d.theme,
                    primaryColor: null != i ? i : d.primaryColor,
                    secondaryColor: null != r ? r : d.secondaryColor,
                    gradient: null != l ? l : d.gradient,
                    flags: null != a ? a : d.flags
                }), [n, a, i, r, d, l]);
                return (0, o.jsx)(c.Provider, {
                    value: _,
                    children: t
                })
            }

            function f(e) {
                let t = E(),
                    n = s.useMemo(() => u({
                        ...t,
                        primaryColor: null,
                        secondaryColor: null
                    }), [t]);
                return (0, o.jsx)(c.Provider, {
                    value: n,
                    children: e.children
                })
            }

            function E() {
                let e = s.useContext(c);
                if (null == e) throw Error("useThemeContext must be used within a ThemeContext.Provider");
                return e
            }

            function S(e) {
                let {
                    children: t
                } = e, n = E();
                return (0, o.jsx)(o.Fragment, {
                    children: t(n)
                })
            }
        },
        755854: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isThemeLight: function() {
                    return r
                },
                isThemeDark: function() {
                    return o
                }
            });
            var i = n("843455");

            function r(e) {
                return e === i.ThemeTypes.LIGHT
            }

            function o(e) {
                switch (e) {
                    case i.ThemeTypes.DARK:
                    case i.ThemeTypes.AMOLED:
                    case i.ThemeTypes.DARKER:
                        return !0;
                    default:
                        return !1
                }
            }
        },
        819855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AccessibilityAnnouncer: function() {
                    return i.AccessibilityAnnouncer
                },
                LOW_SATURATION_THRESHOLD: function() {
                    return r.LOW_SATURATION_THRESHOLD
                },
                RootThemeContextProvider: function() {
                    return o.RootThemeContextProvider
                },
                useThemeContext: function() {
                    return o.useThemeContext
                },
                ThemeContextFlags: function() {
                    return o.ThemeContextFlags
                },
                setThemeFlag: function() {
                    return o.setThemeFlag
                },
                isThemeDark: function() {
                    return s.isThemeDark
                },
                isThemeLight: function() {
                    return s.isThemeLight
                },
                getContrastingColor: function() {
                    return l.getContrastingColor
                },
                WCAGContrastRatios: function() {
                    return l.WCAGContrastRatios
                }
            });
            var i = n("539826");
            n("413197");
            var r = n("209613");
            n("247716");
            var o = n("36763"),
                s = n("755854"),
                l = n("390534")
        },
        206230: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("446674"),
                r = n("95410"),
                o = n("819855"),
                s = n("913144"),
                l = n("845579"),
                a = n("374363"),
                u = n("922932"),
                c = n("49111"),
                d = n("894488");
            let _ = {
                    fontSize: c.Accessibility.FONT_SIZE_DEFAULT,
                    zoom: c.Accessibility.ZOOM_DEFAULT,
                    keyboardModeEnabled: !1,
                    colorblindMode: !1,
                    lowContrastMode: !1,
                    saturation: 1,
                    desaturateUserColors: !1,
                    forcedColorsModalSeen: !1,
                    keyboardNavigationExplainerModalSeen: !1,
                    messageGroupSpacing: null,
                    systemPrefersReducedMotion: "no-preference",
                    systemPrefersCrossfades: !1,
                    prefersReducedMotion: "auto",
                    systemForcedColors: "none",
                    syncForcedColors: !0,
                    systemPrefersContrast: "no-preference",
                    alwaysShowLinkDecorations: !1,
                    roleStyle: "username",
                    submitButtonEnabled: !1,
                    syncProfileThemeWithUserTheme: !1
                },
                f = _,
                E = {
                    12: "font-size-12",
                    14: "font-size-14",
                    15: "font-size-15",
                    16: "font-size-16",
                    18: "font-size-18",
                    20: "font-size-20",
                    24: "font-size-24"
                };
            class S extends i.default.DeviceSettingsStore {
                initialize(e) {
                    this.waitFor(a.default), isNaN((f = {
                        ..._,
                        ...null != e ? e : null
                    }).fontSize) && (f.fontSize = c.Accessibility.FONT_SIZE_DEFAULT), 0 > d.MESSAGE_GROUP_SPACING.indexOf(null != f.messageGroupSpacing ? f.messageGroupSpacing : -1) && (f.messageGroupSpacing = null)
                }
                get fontScale() {
                    return f.fontSize / c.Accessibility.FONT_SIZE_DEFAULT * 100
                }
                get fontSize() {
                    return f.fontSize
                }
                get isFontScaledUp() {
                    return f.fontSize > c.Accessibility.FONT_SIZE_DEFAULT
                }
                get isFontScaledDown() {
                    return f.fontSize < c.Accessibility.FONT_SIZE_DEFAULT
                }
                get fontScaleClass() {
                    var e;
                    let t = null !== (e = E[this.fontSize]) && void 0 !== e ? e : "";
                    return this.isFontScaledUp ? "a11y-font-scaled-up ".concat(t) : this.isFontScaledDown ? "a11y-font-scaled-down ".concat(t) : "".concat(t)
                }
                get zoom() {
                    return f.zoom
                }
                get isZoomedIn() {
                    return f.zoom > c.Accessibility.ZOOM_DEFAULT
                }
                get isZoomedOut() {
                    return f.zoom < c.Accessibility.ZOOM_DEFAULT
                }
                get keyboardModeEnabled() {
                    return f.keyboardModeEnabled
                }
                get colorblindMode() {
                    return f.colorblindMode
                }
                get lowContrastMode() {
                    return f.lowContrastMode
                }
                get saturation() {
                    return f.saturation
                }
                get desaturateUserColors() {
                    return f.desaturateUserColors
                }
                get forcedColorsModalSeen() {
                    return f.forcedColorsModalSeen
                }
                get keyboardNavigationExplainerModalSeen() {
                    return f.keyboardNavigationExplainerModalSeen
                }
                get messageGroupSpacing() {
                    return null != f.messageGroupSpacing ? f.messageGroupSpacing : l.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING
                }
                get isMessageGroupSpacingIncreased() {
                    let e = l.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING;
                    return this.messageGroupSpacing > e
                }
                get isMessageGroupSpacingDecreased() {
                    let e = l.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING;
                    return this.messageGroupSpacing < e
                }
                get isSubmitButtonEnabled() {
                    return f.submitButtonEnabled
                }
                get syncProfileThemeWithUserTheme() {
                    return f.syncProfileThemeWithUserTheme
                }
                get systemPrefersReducedMotion() {
                    return f.systemPrefersReducedMotion
                }
                get rawPrefersReducedMotion() {
                    return f.prefersReducedMotion
                }
                get useReducedMotion() {
                    switch (f.prefersReducedMotion) {
                        case "no-preference":
                            return !1;
                        case "reduce":
                            return !0;
                        default:
                            return "reduce" === f.systemPrefersReducedMotion
                    }
                }
                get systemForcedColors() {
                    return f.systemForcedColors
                }
                get syncForcedColors() {
                    return f.syncForcedColors
                }
                get useForcedColors() {
                    return !!f.syncForcedColors && "active" === f.systemForcedColors || !1
                }
                get systemPrefersContrast() {
                    return f.systemPrefersContrast
                }
                get systemPrefersCrossfades() {
                    return f.systemPrefersCrossfades
                }
                get alwaysShowLinkDecorations() {
                    return f.alwaysShowLinkDecorations
                }
                get roleStyle() {
                    return f.roleStyle
                }
                getUserAgnosticState() {
                    return f
                }
            }
            S.displayName = "AccessibilityStore", S.persistKey = "AccessibilityStore", S.migrations = [() => {
                let e = {
                        FONT_SCALE: "a11yFontScale",
                        ZOOM: "a11yZoom",
                        COLORBLIND_MODE: "a11yColorblindMode"
                    },
                    t = r.default.get(e.FONT_SCALE) || 100,
                    n = r.default.get(e.ZOOM) || c.Accessibility.ZOOM_DEFAULT,
                    i = r.default.get(e.COLORBLIND_MODE) || !1;
                return r.default.remove(e.FONT_SCALE), r.default.remove(e.ZOOM), r.default.remove(e.COLORBLIND_MODE), {
                    fontScale: t,
                    zoom: n,
                    colorblindMode: i,
                    keyboardModeEnabled: !1
                }
            }, e => {
                let {
                    fontScale: t,
                    ...n
                } = e, i = 16;
                switch (t) {
                    case 82:
                        i = 12;
                        break;
                    case 92:
                        i = 15;
                        break;
                    case 100:
                        i = 16;
                        break;
                    case 110:
                        i = 18;
                        break;
                    case 125:
                        i = 20;
                        break;
                    case 150:
                        i = 24
                }
                return {
                    ...n,
                    fontSize: i
                }
            }, e => ({
                ...e,
                darkSidebar: !1
            }), e => ({
                ...e,
                messageGroupSpacing: null
            }), e => ({
                ...e,
                systemPrefersReducedMotion: "no-preference",
                prefersReducedMotion: "auto"
            }), e => ({
                ...e,
                alwaysShowLinkDecorations: e.saturation <= o.LOW_SATURATION_THRESHOLD
            })];
            let g = new S(s.default, {
                ACCESSIBILITY_SET_FONT_SIZE: function(e) {
                    var t;
                    let n = (t = e.fontSize, c.Accessibility.FONT_SIZES.indexOf(t) >= 0 ? t : c.Accessibility.FONT_SIZE_DEFAULT);
                    if (n > c.Accessibility.FONT_SIZE_MAX || n < c.Accessibility.FONT_SIZE_MIN || f.fontSize === n) return !1;
                    (f = {
                        ...f
                    }).fontSize = n
                },
                ACCESSIBILITY_SET_ZOOM: function(e) {
                    if (e.zoom < c.Accessibility.ZOOM_MIN || e.zoom > c.Accessibility.ZOOM_MAX || f.zoom === e.zoom) return !1;
                    (f = {
                        ...f
                    }).zoom = e.zoom, u.default.setZoomFactor(f.zoom)
                },
                ACCESSIBILITY_RESET_TO_DEFAULT: function() {
                    let e = f.fontSize !== c.Accessibility.FONT_SIZE_DEFAULT,
                        t = f.zoom !== c.Accessibility.ZOOM_DEFAULT;
                    if (!e && !t) return !1;
                    (f = {
                        ...f
                    }).fontSize !== c.Accessibility.FONT_SIZE_DEFAULT && (f.fontSize = c.Accessibility.FONT_SIZE_DEFAULT), f.zoom !== c.Accessibility.ZOOM_DEFAULT && (f.zoom = c.Accessibility.ZOOM_DEFAULT, u.default.setZoomFactor(f.zoom))
                },
                ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function() {
                    if (f.keyboardModeEnabled) return !1;
                    (f = {
                        ...f
                    }).keyboardModeEnabled = !0
                },
                ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function() {
                    if (!f.keyboardModeEnabled) return !1;
                    (f = {
                        ...f
                    }).keyboardModeEnabled = !1
                },
                ACCESSIBILITY_COLORBLIND_TOGGLE: function() {
                    (f = {
                        ...f
                    }).colorblindMode = !f.colorblindMode
                },
                ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function() {
                    (f = {
                        ...f
                    }).lowContrastMode = !f.lowContrastMode
                },
                ACCESSIBILITY_SET_SATURATION: function(e) {
                    (f = {
                        ...f
                    }).saturation = e.saturation
                },
                ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function() {
                    (f = {
                        ...f
                    }).desaturateUserColors = !f.desaturateUserColors
                },
                ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
                    var t;
                    return f = {
                        ...f,
                        systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : "none"
                    }, !0
                },
                ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function(e) {
                    if (f.systemPrefersContrast === e.systemPrefersContrast) return !1;
                    f = {
                        ...f,
                        systemPrefersContrast: e.systemPrefersContrast
                    }
                },
                ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function(e) {
                    if (f.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
                    f = {
                        ...f,
                        systemPrefersReducedMotion: e.systemPrefersReducedMotion
                    }
                },
                ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function(e) {
                    if (f.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
                    f = {
                        ...f,
                        systemPrefersCrossfades: e.systemPrefersCrossfades
                    }
                },
                ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function(e) {
                    if (f.prefersReducedMotion === e.prefersReducedMotion) return !1;
                    f = {
                        ...f,
                        prefersReducedMotion: e.prefersReducedMotion
                    }
                },
                ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function(e) {
                    f.syncForcedColors = e.syncForcedColors
                },
                ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function(e) {
                    f = {
                        ...f,
                        alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
                    }
                },
                ACCESSIBILITY_SET_ROLE_STYLE: function(e) {
                    f.roleStyle = e.roleStyle
                },
                ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function() {
                    f.forcedColorsModalSeen = !0
                },
                KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function() {
                    f = {
                        ...f,
                        keyboardNavigationExplainerModalSeen: !0
                    }
                },
                ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function(e) {
                    let {
                        messageGroupSpacing: t
                    } = e;
                    f = {
                        ...f,
                        messageGroupSpacing: t
                    }
                },
                ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function() {
                    (f = {
                        ...f
                    }).submitButtonEnabled = !f.submitButtonEnabled
                },
                ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function() {
                    (f = {
                        ...f
                    }).syncProfileThemeWithUserTheme = !f.syncProfileThemeWithUserTheme
                }
            });
            var h = g
        },
        357626: function(e, t, n) {
            "use strict";
            var i, r, o, s;
            n.r(t), n.d(t, {
                ChannelListLayoutTypes: function() {
                    return i
                },
                MessagePreviewTypes: function() {
                    return r
                }
            }), (o = i || (i = {})).COZY = "cozy", o.COMPACT = "compact", o.MINIMAL = "minimal", (s = r || (r = {})).ALL = "all", s.UNREADS = "unreads", s.NONE = "none"
        },
        894488: function(e, t, n) {
            "use strict";
            var i, r, o, s;
            n.r(t), n.d(t, {
                MESSAGE_GROUP_SPACING: function() {
                    return l
                },
                DEFAULT_COZY_SPACING: function() {
                    return a
                },
                DEFAULT_COMPACT_SPACING: function() {
                    return u
                },
                DEFAULT_POPOUTS: function() {
                    return c
                },
                MESSAGE_PADDING: function() {
                    return d
                },
                PLACEHOLDER_BUFFER: function() {
                    return _
                },
                NEW_MESSAGE_BAR_BUFFER: function() {
                    return f
                },
                NEW_MESSAGE_BAR_BUFFER_LARGE: function() {
                    return E
                },
                NEW_MESSAGE_BAR_ID: function() {
                    return S
                },
                SPOILER_ATTACHMENT_PREFIX: function() {
                    return g
                },
                FileUploadErrorTypes: function() {
                    return i
                },
                DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE: function() {
                    return h
                }
            }), n("49111");
            let l = [0, 4, 8, 16, 24],
                a = 16,
                u = 0,
                c = Object.freeze({
                    referencedAvatarProfile: !1,
                    referencedUsernameProfile: !1,
                    interactionAvatarProfile: !1,
                    interactionUsernameProfile: !1,
                    interactionData: !1,
                    avatarProfile: !1,
                    usernameProfile: !1,
                    emojiPicker: !1,
                    emojiBurstPicker: !1,
                    moreUtilities: !1,
                    contextMenu: !1
                }),
                d = 16,
                _ = 16,
                f = 32,
                E = 64,
                S = "---new-messages-bar",
                g = "SPOILER_";
            (o = i || (i = {})).ERROR_SOURCE_UNKNOWN = "ERROR_SOURCE_UNKNOWN", o.PRECOMPRESSION_SUM_TOO_LARGE = "PRECOMPRESSION_SUM_TOO_LARGE", o.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", o.POSTCOMPRESSION_SUM_TOO_LARGE = "POSTCOMPRESSION_SUM_TOO_LARGE", o.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", o.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR = "UPLOAD_MESSAGE_ATTACHMENT_MAX_SIZE_ERROR", (s = r || (r = {})).SYSTEM_DM_TAG_SYSTEM_TYPE = "a", s.BOT_TAG_SERVER_TYPE = "b", s.AI_TAG_TYPE = "c", s.BOT_TAG_BOT_TYPE = "d", s.REMIXING_TYPE = "e";
            let h = 209715200
        },
        560241: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                STICKER_PICKER_TAB_PANEL_ID: function() {
                    return o
                },
                STICKER_PICKER_TAB_ID: function() {
                    return s
                },
                GRID_NAVIGATOR_ID: function() {
                    return l
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return a
                },
                DEFAULT_STICKER_DIMENSIONS: function() {
                    return u
                },
                STICKER_APPLICATION_ID: function() {
                    return c
                },
                EMPTY_STATE_STICKERS: function() {
                    return d
                },
                MAX_STICKER_FILE_SIZE: function() {
                    return _
                },
                STAFF_MAX_STICKER_FILE_SIZE: function() {
                    return f
                },
                StickerAnimationSettings: function() {
                    return i
                }
            });
            let o = "sticker-picker-tab-panel",
                s = "sticker-picker-tab",
                l = "sticker-picker-grid",
                a = -1,
                u = 160,
                c = "710982414301790216",
                d = ["781323769960202280", "809209266556764241", "818597810047680532", "819129296374595614"],
                _ = 524288,
                f = 1572864;
            (r = i || (i = {}))[r.ALWAYS_ANIMATE = 0] = "ALWAYS_ANIMATE", r[r.ANIMATE_ON_INTERACTION = 1] = "ANIMATE_ON_INTERACTION", r[r.NEVER_ANIMATE = 2] = "NEVER_ANIMATE"
        },
        568456: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DMSafetyCoachmarkActions: function() {
                    return i
                },
                DmSpamFilterTypes: function() {
                    return r
                },
                ExplicitContentFilterTypes: function() {
                    return o
                },
                ExplicitContentFilterToDmSpamFilterV2: function() {
                    return c
                }
            }), n("222007");
            var i, r, o, s, l, a, u = n("151426");
            (s = i || (i = {}))[s.VIEW = 0] = "VIEW", s[s.DISMISS = 1] = "DISMISS", s[s.CHANGE_SETTING = 2] = "CHANGE_SETTING", (l = r || (r = {}))[l.DISABLED = 0] = "DISABLED", l[l.NON_FRIENDS = 1] = "NON_FRIENDS", l[l.FRIENDS_AND_NON_FRIENDS = 2] = "FRIENDS_AND_NON_FRIENDS", (a = o || (o = {}))[a.DISABLED = 0] = "DISABLED", a[a.NON_FRIENDS = 1] = "NON_FRIENDS", a[a.FRIENDS_AND_NON_FRIENDS = 2] = "FRIENDS_AND_NON_FRIENDS";
            let c = new Map([
                [0, u.DmSpamFilterV2.DISABLED],
                [1, u.DmSpamFilterV2.NON_FRIENDS],
                [2, u.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS]
            ])
        },
        737292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("917351"),
                r = n.n(i),
                o = n("446674"),
                s = n("95410"),
                l = n("913144"),
                a = n("49111");
            let u = {};
            class c extends o.default.PersistedStore {
                initialize(e) {
                    u = null != e ? e : {}
                }
                getState() {
                    return u
                }
                shouldSync(e) {
                    var t;
                    return (null === (t = u[e]) || void 0 === t ? void 0 : t.shouldSync) !== !1
                }
                getTextSettings() {
                    var e;
                    return null === (e = u.text) || void 0 === e ? void 0 : e.settings
                }
                getAppearanceSettings() {
                    var e;
                    return null === (e = u.appearance) || void 0 === e ? void 0 : e.settings
                }
            }
            c.displayName = "SelectivelySyncedUserSettingsStore", c.persistKey = "SelectivelySyncedUserSettingsStore", c.migrations = [() => {
                var e, t;
                let n = null !== (e = s.default.get("UserSettingsSync")) && void 0 !== e ? e : {},
                    i = null !== (t = s.default.get("UserSettingsStore")) && void 0 !== t ? t : {};
                s.default.remove("UserSettingsSync");
                let o = {};
                return !1 === n[a.UserSettingsSections.TEXT] && (o.text = {
                    shouldSync: !1,
                    settings: r.pick(i, ["inlineAttachmentMedia", "inlineEmbedMedia", "renderEmbeds", "renderReactions", "animateEmoji", "animateStickers", "gifAutoPlay"])
                }), !1 === n[a.UserSettingsSections.APPEARANCE] && (o.appearance = {
                    shouldSync: !1,
                    settings: r.pick(i, ["theme", "clientThemeSettings", "developerMode"])
                }), o
            }];
            var d = new c(l.default, {
                SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function(e) {
                    let {
                        changes: t
                    } = e;
                    for (let e in t) {
                        var n;
                        let {
                            shouldSync: i,
                            settings: r
                        } = t[e];
                        if (!0 === i) {
                            delete u[e];
                            continue
                        }!1 === i && (u[e] = {
                            shouldSync: i,
                            settings: {}
                        });
                        if ((null === (n = u[e]) || void 0 === n ? void 0 : n.shouldSync) === !1)
                            for (let t in r) u[e].settings[t] = r[t]
                    }
                },
                LOGOUT: function() {
                    u = {}
                }
            })
        },
        281473: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                defineProtoSetting: function() {
                    return u
                },
                wrapSettingWithSelectiveSyncing: function() {
                    return c
                },
                wrapSettingWithOverride: function() {
                    return d
                }
            });
            var i = n("446674"),
                r = n("913144"),
                o = n("737292"),
                s = n("872173"),
                l = n("374363"),
                a = n("397336");

            function u(e, t, n, r) {
                let o = () => {
                    var i;
                    return n(null === (i = l.default.settings[e]) || void 0 === i ? void 0 : i[t])
                };
                return {
                    getSetting: o,
                    updateSetting: _(o, n => s.PreloadedUserSettingsActionCreators.updateAsync(e, e => {
                        e[t] = r(n, e[t])
                    }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)),
                    useSetting: () => (0, i.useStateFromStores)([l.default], o)
                }
            }

            function c(e, t, n) {
                let s = () => {
                    var i;
                    let r = o.default.getState()[t];
                    return null !== (i = null == r ? void 0 : r.settings[n]) && void 0 !== i ? i : e.getSetting()
                };
                return {
                    getSetting: s,
                    useSetting: () => {
                        let r = e.useSetting(),
                            s = (0, i.useStateFromStores)([o.default], () => {
                                let e = o.default.getState()[t];
                                return null == e ? void 0 : e.settings[n]
                            });
                        return null != s ? s : r
                    },
                    updateSetting: _(s, i => o.default.shouldSync(t) ? e.updateSetting(i) : (r.default.dispatch({
                        type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                        changes: {
                            [t]: {
                                settings: {
                                    [n]: i
                                }
                            }
                        }
                    }), Promise.resolve()))
                }
            }

            function d(e, t, n, i) {
                let o = () => {
                    var t;
                    return null !== (t = n()) && void 0 !== t ? t : e.getSetting()
                };
                return {
                    getSetting: o,
                    useSetting: () => {
                        let t = e.useSetting(),
                            n = i();
                        return null != n ? n : t
                    },
                    updateSetting: _(o, n => (r.default.dispatch({
                        type: "USER_SETTINGS_OVERRIDE_CLEAR",
                        settings: [t]
                    }), e.updateSetting(n)))
                }
            }

            function _(e, t) {
                return function(n) {
                    return "function" == typeof n ? t(n(e())) : t(n)
                }
            }
        },
        845579: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UseLegacyChatInput: function() {
                    return _
                },
                UseRichChatInput: function() {
                    return f
                },
                ExpressionSuggestionsEnabled: function() {
                    return E
                },
                IncludeStickersInAutocomplete: function() {
                    return S
                },
                RenderSpoilers: function() {
                    return g
                },
                UseThreadSidebar: function() {
                    return h
                },
                EmojiPickerCollapsedSections: function() {
                    return p
                },
                StickerPickerCollapsedSections: function() {
                    return I
                },
                SoundboardPickerCollapsedSections: function() {
                    return T
                },
                ViewImageDescriptions: function() {
                    return v
                },
                ShowCommandSuggestions: function() {
                    return A
                },
                AlwaysPreviewVideo: function() {
                    return N
                },
                NotifyFriendsOnGoLive: function() {
                    return C
                },
                NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET: function() {
                    return R
                },
                NotificationCenterAckedBeforeId: function() {
                    return O
                },
                EnableBurstReactionNotifications: function() {
                    return L
                },
                InstallShortcutDesktop: function() {
                    return y
                },
                InstallShortcutStartMenu: function() {
                    return D
                },
                AllowActivityPartyPrivacyFriends: function() {
                    return P
                },
                AllowActivityPartyPrivacyVoiceChannel: function() {
                    return M
                },
                MessageRequestRestrictedGuildIds: function() {
                    return w
                },
                MessageRequestRestrictedDefault: function() {
                    return b
                },
                NonSpamRetrainingOptIn: function() {
                    return G
                },
                DefaultGuildsRestricted: function() {
                    return F
                },
                RestrictedGuildIds: function() {
                    return k
                },
                FriendSourceFlagsSetting: function() {
                    return B
                },
                RtcPanelShowVoiceStates: function() {
                    return x
                },
                ConvertEmoticons: function() {
                    return H
                },
                MessageDisplayCompact: function() {
                    return V
                },
                SoundboardSettings: function() {
                    return W
                },
                DropsOptedOut: function() {
                    return Y
                },
                AfkTimeout: function() {
                    return z
                },
                ViewNsfwGuilds: function() {
                    return j
                },
                ViewNsfwCommands: function() {
                    return K
                },
                DisableGamesTab: function() {
                    return Z
                },
                EnableTTSCommand: function() {
                    return X
                },
                ExplicitContentFilter: function() {
                    return q
                },
                DmSpamFilterV2: function() {
                    return J
                },
                ShowCurrentGame: function() {
                    return Q
                },
                StatusSetting: function() {
                    return ee
                },
                CustomStatusSetting: function() {
                    return et
                },
                BroadcastAllowFriends: function() {
                    return ei
                },
                BroadcastAllowedGuildIds: function() {
                    return er
                },
                BroadcastAllowedUserIds: function() {
                    return eo
                },
                BroadcastAutoBroadcast: function() {
                    return es
                },
                ClipsAllowVoiceRecording: function() {
                    return el
                },
                InlineAttachmentMedia: function() {
                    return ea
                },
                InlineEmbedMedia: function() {
                    return eu
                },
                RenderEmbeds: function() {
                    return ec
                },
                RenderReactions: function() {
                    return ed
                },
                TimezoneOffset: function() {
                    return e_
                },
                DeveloperMode: function() {
                    return eS
                },
                ClientThemeSettings: function() {
                    return eg
                },
                GifAutoPlay: function() {
                    return eh
                },
                AnimateEmoji: function() {
                    return em
                },
                AnimateStickers: function() {
                    return ep
                },
                ActivityRestrictedGuilds: function() {
                    return eT
                },
                ActivityJoiningRestrictedGuilds: function() {
                    return eA
                },
                DefaultGuildsActivityRestricted: function() {
                    return eN
                },
                DisableHomeAutoNav: function() {
                    return eC
                },
                FamilyCenterEnabled: function() {
                    return eR
                },
                LegacyUsernameDisabled: function() {
                    return eO
                },
                ExplicitContentSettings: function() {
                    return eL
                }
            }), n("222007");
            var i = n("446674"),
                r = n("151426"),
                o = n("750028"),
                s = n("357626"),
                l = n("281473"),
                a = n("186709"),
                u = n("568456"),
                c = n("49111"),
                d = n("560241");
            let _ = (0, l.defineProtoSetting)("textAndImages", "useLegacyChatInput", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                f = (0, l.defineProtoSetting)("textAndImages", "useRichChatInput", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                E = (0, l.defineProtoSetting)("textAndImages", "expressionSuggestionsEnabled", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                S = (0, l.defineProtoSetting)("textAndImages", "includeStickersInAutocomplete", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                g = (0, l.defineProtoSetting)("textAndImages", "renderSpoilers", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.SpoilerRenderSetting.ON_CLICK
                }, e => o.StringValue.create({
                    value: e
                })),
                h = (0, l.defineProtoSetting)("textAndImages", "useThreadSidebar", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                }));
            (0, l.defineProtoSetting)("notifications", "showInAppNotifications", e => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
            }, e => o.BoolValue.create({
                value: e
            }));
            let m = [],
                p = (0, l.defineProtoSetting)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : m, e => e),
                I = (0, l.defineProtoSetting)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : m, e => e),
                T = (0, l.defineProtoSetting)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : m, e => e),
                v = (0, l.defineProtoSetting)("textAndImages", "viewImageDescriptions", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                A = (0, l.defineProtoSetting)("textAndImages", "showCommandSuggestions", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                N = (0, l.defineProtoSetting)("voiceAndVideo", "alwaysPreviewVideo", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                C = (0, l.defineProtoSetting)("notifications", "notifyFriendsOnGoLive", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
                    value: e
                })),
                R = "0",
                O = (0, l.defineProtoSetting)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : R, e => e),
                L = (0, l.defineProtoSetting)("notifications", "enableBurstReactionNotifications", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                y = (0, l.defineProtoSetting)("gameLibrary", "installShortcutDesktop", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                D = (0, l.defineProtoSetting)("gameLibrary", "installShortcutStartMenu", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                P = (0, l.defineProtoSetting)("privacy", "allowActivityPartyPrivacyFriends", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                M = (0, l.defineProtoSetting)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                U = [],
                w = (0, l.defineProtoSetting)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : U, e => e),
                b = (0, l.defineProtoSetting)("privacy", "defaultMessageRequestRestricted", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                G = (0, l.defineProtoSetting)("privacy", "nonSpamRetrainingOptIn", e => null == e ? void 0 : e.value, e => null == e ? void 0 : o.BoolValue.create({
                    value: e
                }));
            (0, l.defineProtoSetting)("privacy", "contactSyncEnabled", e => {
                var t;
                return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
            }, e => o.BoolValue.create({
                value: e
            }));
            let F = (0, l.defineProtoSetting)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
                k = (0, l.defineProtoSetting)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
            (0, l.defineProtoSetting)("privacy", "friendDiscoveryFlags", e => {
                var t;
                return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0
            }, e => o.UInt32Value.create({
                value: e
            }));
            let B = (0, l.defineProtoSetting)("privacy", "friendSourceFlags", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.AllFriendSourceFlags
                }, e => o.UInt32Value.create({
                    value: e
                })),
                x = (0, l.defineProtoSetting)("debug", "rtcPanelShowVoiceStates", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                H = (0, l.defineProtoSetting)("textAndImages", "convertEmoticons", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                V = (0, l.defineProtoSetting)("textAndImages", "messageDisplayCompact", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                W = (0, l.defineProtoSetting)("voiceAndVideo", "soundboardSettings", e => e, e => e);
            (0, l.defineProtoSetting)("voiceAndVideo", "streamNotificationsEnabled", e => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
            }, e => o.BoolValue.create({
                value: e
            }));
            let Y = (0, l.defineProtoSetting)("privacy", "dropsOptedOut", e => {
                var t;
                return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
            }, e => o.BoolValue.create({
                value: e
            }));
            (0, l.defineProtoSetting)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
            }, e => o.BoolValue.create({
                value: e
            }));
            let z = (0, l.defineProtoSetting)("voiceAndVideo", "afkTimeout", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600
                }, e => o.UInt32Value.create({
                    value: e
                })),
                j = (0, l.defineProtoSetting)("textAndImages", "viewNsfwGuilds", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                K = (0, l.defineProtoSetting)("textAndImages", "viewNsfwCommands", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                }));
            (0, l.defineProtoSetting)("privacy", "detectPlatformAccounts", e => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
            }, e => o.BoolValue.create({
                value: e
            }));
            let Z = (0, l.defineProtoSetting)("gameLibrary", "disableGamesTab", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                X = (0, l.defineProtoSetting)("textAndImages", "enableTtsCommand", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                q = (0, l.defineProtoSetting)("textAndImages", "explicitContentFilter", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.ExplicitContentFilterTypes.NON_FRIENDS
                }, e => o.UInt32Value.create({
                    value: e
                }));
            (0, l.defineProtoSetting)("textAndImages", "dmSpamFilter", e => {
                var t;
                return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.DmSpamFilterTypes.NON_FRIENDS
            }, e => o.UInt32Value.create({
                value: e
            }));
            let J = (0, l.defineProtoSetting)("textAndImages", "dmSpamFilterV2", e => null != e ? e : r.DmSpamFilterV2.DEFAULT_UNSET, e => e),
                Q = (0, l.defineProtoSetting)("status", "showCurrentGame", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                $ = new Set(Object.values(c.StatusTypes)),
                ee = (0, l.defineProtoSetting)("status", "status", e => null != e && $.has(e.value) ? e.value : c.StatusTypes.UNKNOWN, e => o.StringValue.create({
                    value: e
                })),
                et = (0, l.defineProtoSetting)("status", "customStatus", e => e, e => e),
                en = [],
                ei = (0, l.defineProtoSetting)("broadcast", "allowFriends", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
                    value: e
                })),
                er = (0, l.defineProtoSetting)("broadcast", "allowedGuildIds", e => null != e ? e : en, e => e),
                eo = (0, l.defineProtoSetting)("broadcast", "allowedUserIds", e => null != e ? e : en, e => e),
                es = (0, l.defineProtoSetting)("broadcast", "autoBroadcast", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                el = (0, l.defineProtoSetting)("clips", "allowVoiceRecording", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                ea = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "inlineAttachmentMedia", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "inlineAttachmentMedia"),
                eu = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "inlineEmbedMedia", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "inlineEmbedMedia"),
                ec = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "renderEmbeds", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "renderEmbeds"),
                ed = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "renderReactions", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "renderReactions"),
                e_ = (0, l.defineProtoSetting)("localization", "timezoneOffset", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null
                }, e => o.Int32Value.create({
                    value: null != e ? e : 0
                }));
            (0, l.defineProtoSetting)("appearance", "mobileRedesignDisabled", e => null != e && e, e => e);
            let ef = new Set([s.ChannelListLayoutTypes.COZY, s.ChannelListLayoutTypes.COMPACT]);
            (0, l.defineProtoSetting)("appearance", "channelListLayout", e => null != e && ef.has(e.value) ? e.value : s.ChannelListLayoutTypes.COZY, e => o.StringValue.create({
                value: e
            }));
            let eE = new Set([s.MessagePreviewTypes.ALL, s.MessagePreviewTypes.UNREADS, s.MessagePreviewTypes.NONE]);
            (0, l.defineProtoSetting)("appearance", "messagePreviews", e => null != e && eE.has(e.value) ? e.value : s.MessagePreviewTypes.ALL, e => o.StringValue.create({
                value: e
            }));
            let eS = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
                eg = (0, l.defineProtoSetting)("appearance", "clientThemeSettings", e => {
                    let {
                        backgroundGradientPresetId: t,
                        backgroundGradientAngle: n
                    } = null != e ? e : {};
                    return {
                        backgroundGradientPresetId: null == t ? void 0 : t.value,
                        backgroundGradientAngle: null == n ? void 0 : n.value
                    }
                }, e => {
                    let {
                        backgroundGradientPresetId: t,
                        backgroundGradientAngle: n
                    } = e;
                    return {
                        backgroundGradientPresetId: null != t ? o.UInt32Value.create({
                            value: t
                        }) : void 0,
                        backgroundGradientAngle: null != n ? o.FloatValue.create({
                            value: n
                        }) : void 0
                    }
                }),
                eh = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "gifAutoPlay", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "gifAutoPlay"), "gifAutoPlay", () => {
                    var e;
                    return null === (e = a.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
                }, () => (0, i.useStateFromStores)([a.default], () => {
                    var e;
                    return null === (e = a.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
                })),
                em = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "animateEmoji", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "animateEmoji"), "animateEmoji", () => {
                    var e;
                    return null === (e = a.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
                }, () => (0, i.useStateFromStores)([a.default], () => {
                    var e;
                    return null === (e = a.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
                })),
                ep = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "animateStickers", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.StickerAnimationSettings.ALWAYS_ANIMATE
                }, e => o.UInt32Value.create({
                    value: e
                })), "text", "animateStickers"), "animateStickers", () => {
                    var e;
                    return null === (e = a.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
                }, () => (0, i.useStateFromStores)([a.default], () => {
                    var e;
                    return null === (e = a.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
                })),
                eI = [],
                eT = (0, l.defineProtoSetting)("privacy", "activityRestrictedGuildIds", e => null != e ? e : eI, e => e),
                ev = [],
                eA = (0, l.defineProtoSetting)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : ev, e => e),
                eN = (0, l.defineProtoSetting)("privacy", "defaultGuildsActivityRestricted", e => e === r.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS, e => !0 === e ? r.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS : r.GuildActivityStatusRestrictionDefault.OFF),
                eC = (0, l.defineProtoSetting)("communities", "disableHomeAutoNav", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                eR = (0, l.defineProtoSetting)("privacy", "familyCenterEnabledV2", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
                    value: e
                })),
                eO = (0, l.defineProtoSetting)("privacy", "hideLegacyUsername", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                eL = (0, l.defineProtoSetting)("textAndImages", "explicitContentSettings", e => {
                    let {
                        explicitContentGuilds: t,
                        explicitContentFriendDm: n,
                        explicitContentNonFriendDm: i
                    } = null != e ? e : {};
                    return {
                        explicitContentGuilds: null != t ? t : r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                        explicitContentFriendDm: null != n ? n : r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                        explicitContentNonFriendDm: null != i ? i : r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION
                    }
                }, e => {
                    let {
                        explicitContentGuilds: t,
                        explicitContentFriendDm: n,
                        explicitContentNonFriendDm: i
                    } = e;
                    return {
                        explicitContentGuilds: null != t ? t : void 0,
                        explicitContentFriendDm: null != n ? n : void 0,
                        explicitContentNonFriendDm: null != i ? i : void 0
                    }
                })
        },
        186709: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("446674"),
                r = n("95410"),
                o = n("913144"),
                s = n("374363");
            let l = {},
                a = {};

            function u() {
                var e, t, n, i, r, o;
                let l = s.default.settings;
                return {
                    gifAutoPlay: null === (t = l.textAndImages) || void 0 === t ? void 0 : null === (e = t.gifAutoPlay) || void 0 === e ? void 0 : e.value,
                    animateEmoji: null === (i = l.textAndImages) || void 0 === i ? void 0 : null === (n = i.animateEmoji) || void 0 === n ? void 0 : n.value,
                    animateStickers: null === (o = l.textAndImages) || void 0 === o ? void 0 : null === (r = o.animateStickers) || void 0 === r ? void 0 : r.value
                }
            }

            function c() {
                return a = u(), !1
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    l = null != e ? e : {}, this.syncWith([s.default], c)
                }
                getState() {
                    return l
                }
                getAppliedOverrideReasonKey(e) {
                    var t;
                    return null === (t = l[e]) || void 0 === t ? void 0 : t.reasonKey
                }
                getOverride(e) {
                    return l[e]
                }
            }
            d.displayName = "UserSettingsOverridesStore", d.persistKey = "UserSettingsOverridesStore", d.migrations = [() => {
                var e;
                let t = null !== (e = r.default.get("UserSettingsStoreOverrides")) && void 0 !== e ? e : {};
                return r.default.remove("UserSettingsStoreOverrides"), t
            }];
            var _ = new d(o.default, {
                USER_SETTINGS_PROTO_UPDATE: function() {
                    let e = u(),
                        t = !1;
                    for (let n in e) e[n] !== a[n] && (delete l[n], t = !0);
                    return t
                },
                USER_SETTINGS_OVERRIDE_APPLY: function(e) {
                    let {
                        settings: t
                    } = e;
                    l = {
                        ...l,
                        ...t
                    }
                },
                USER_SETTINGS_OVERRIDE_CLEAR: function(e) {
                    let {
                        settings: t
                    } = e;
                    for (let e of t) delete l[e]
                },
                LOGOUT: function() {
                    l = {}
                },
                LOGIN_SUCCESS: function() {
                    l = {}
                }
            })
        },
        872173: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserSettingsDelay: function() {
                    return S.UserSettingsDelay
                },
                PreloadedUserSettingsActionCreators: function() {
                    return I
                },
                FrecencyUserSettingsActionCreators: function() {
                    return T
                },
                UserSettingsActionCreatorsByType: function() {
                    return v
                },
                updateUserGuildSettings: function() {
                    return A
                },
                updateUserChannelSettings: function() {
                    return N
                },
                addDismissedContent: function() {
                    return C
                },
                removeDismissedContent: function() {
                    return R
                },
                clearDismissedContents: function() {
                    return O
                },
                checkAllDismissedContents: function() {
                    return L
                }
            }), n("70102"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var i = n("627445"),
                r = n.n(i),
                o = n("811022"),
                s = n("872717"),
                l = n("713349"),
                a = n("151426"),
                u = n("95410"),
                c = n("913144"),
                d = n("674268"),
                _ = n("275877"),
                f = n("374363"),
                E = n("116949"),
                S = n("397336"),
                g = n("49111");
            let h = "UserSettingsProtoLastWriteTimes",
                m = Date.now();
            c.default.subscribe("CONNECTION_OPEN", () => {
                Date.now()
            }), c.default.subscribe("CONNECTION_CLOSED", () => {
                Date.now()
            }), "undefined" != typeof document && (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {}));
            class p {
                getEditInfo() {
                    return f.default.getFullState()[this.type]
                }
                getCurrentValue() {
                    return this.getEditInfo().proto
                }
                async updateAsync(e, t, n) {
                    await this.loadIfNecessary();
                    let i = this.ProtoClass.fields.find(t => t.localName === e);
                    if (null == i) throw Error("Unknown proto field name ".concat(String(e)));
                    let r = i.T(),
                        o = this.getCurrentValue()[e],
                        s = null != o ? r.fromBinary(r.toBinary(o), E.BINARY_READ_OPTIONS) : r.create(),
                        l = t(s);
                    if (!1 === l) return;
                    let a = this.ProtoClass.create();
                    a[e] = s, __OVERLAY__ ? c.default.dispatch({
                        type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
                        settings: {
                            type: this.type,
                            proto: a
                        },
                        delaySeconds: n,
                        jitter: n === S.UserSettingsDelay.AUTOMATED || n === S.UserSettingsDelay.DAILY,
                        partial: !0,
                        resetEditInfo: !1,
                        local: !0
                    }) : (this.logger.log("Updating ".concat(String(e), " with delay ").concat(n)), this.markDirty(a, {
                        delaySeconds: n,
                        jitter: n === S.UserSettingsDelay.AUTOMATED || n === S.UserSettingsDelay.DAILY
                    }))
                }
                markDirty(e, t) {
                    var n;
                    r(!__OVERLAY__, "this cannot run in the overlay");
                    let {
                        editInfo: i
                    } = this.getEditInfo(), o = {
                        timeout: i.timeout
                    };
                    if (!i.loaded) throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
                    !1 !== t.dispatch && c.default.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: {
                            type: this.type,
                            proto: e
                        },
                        partial: !0,
                        local: !0
                    });
                    let s = null !== (n = t.delaySeconds) && void 0 !== n ? n : 0;
                    if (null != o.timeout && s < i.timeoutDelay && !i.rateLimited && (clearTimeout(o.timeout), o.timeout = void 0), null == o.timeout) {
                        let e = 1e3 * s;
                        t.jitter && (e += Math.floor(Math.random() * Math.min(e, 3e4))), this.logger.log("Scheduling save from markDirty"), o.timeout = setTimeout(this.persistChanges, e), o.timeoutDelay = s
                    }
                    null != t.cleanup && (o.cleanupFuncs = [...i.cleanupFuncs, ...t.cleanup]), null == i.protoToSave ? o.protoToSave = e : o.protoToSave = (0, E.mergeTopLevelFields)(this.ProtoClass, i.protoToSave, e), this.dispatchChanges(o)
                }
                dispatchChanges(e) {
                    c.default.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
                        settings: {
                            changes: e,
                            type: this.type
                        }
                    })
                }
                saveLastSendTime() {
                    var e;
                    let t = null !== (e = u.default.get(h)) && void 0 !== e ? e : {};
                    t[this.type] = Date.now(), u.default.set(h, t)
                }
                async loadIfNecessary(e) {
                    if (__OVERLAY__) {
                        c.default.dispatch({
                            type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
                            settingsType: this.type
                        });
                        return
                    }
                    let {
                        editInfo: t
                    } = this.getEditInfo();
                    if (e || !t.loaded && !t.loading) {
                        this.logger.log("Loading proto"), this.dispatchChanges({
                            loading: !0
                        });
                        try {
                            let {
                                body: {
                                    settings: t
                                }
                            } = await s.default.get({
                                url: g.Endpoints.USER_SETTINGS_PROTO(this.type)
                            }), n = (0, E.b64ToProto)(this.ProtoClass, t);
                            if (null == n) {
                                this.dispatchChanges({
                                    loading: !1,
                                    loaded: !0
                                });
                                return
                            }
                            let i = _.default[this.type],
                                {
                                    proto: r,
                                    isDirty: o,
                                    cleanupFuncs: l
                                } = (0, E.runMigrations)(n, i);
                            return c.default.dispatch({
                                type: "USER_SETTINGS_PROTO_UPDATE",
                                settings: {
                                    type: this.type,
                                    proto: n
                                },
                                resetEditInfo: o || e,
                                local: !1
                            }), o && this.markDirtyFromMigration(r, l), n
                        } catch (e) {
                            throw this.dispatchChanges({
                                loading: !1
                            }), e
                        }
                    }
                }
                markDirtyFromMigration(e, t) {
                    r(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Marking dirty due to migrates"), r(null == this.getEditInfo().editInfo.offlineEditDataVersion, "offline changes are not supported with migrations"), this.markDirty(e, {
                        cleanup: t,
                        dispatch: !1,
                        delaySeconds: S.UserSettingsDelay.AUTOMATED,
                        jitter: !0
                    })
                }
                markDirtyIfHasPendingChange(e) {
                    let t = this.beforeSendCallbacks.some(e => {
                        let {
                            hasChanges: t
                        } = e;
                        return t()
                    });
                    t && this.markDirty(this.ProtoClass.create(), {
                        dispatch: !1,
                        delaySeconds: 0,
                        cleanup: e
                    })
                }
                scheduleSaveFromOfflineEdit() {
                    r(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
                    let {
                        editInfo: e
                    } = this.getEditInfo();
                    r(null != e.protoToSave, "protoToSave cannot be null"), r(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"), r(null == e.timeout, "timeout must not be set already");
                    let t = 5e3 + Math.floor(5e3 * Math.random()),
                        n = setTimeout(this.persistChanges, t);
                    this.dispatchChanges({
                        timeout: n,
                        timeoutDelay: t
                    })
                }
                constructor(e, t) {
                    this.ProtoClass = e, this.type = t, this.beforeSendCallbacks = [], this.lastSendTime = 0, this.persistChanges = async () => {
                        r(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto");
                        let {
                            editInfo: e
                        } = this.getEditInfo();
                        if (null == e.protoToSave) {
                            this.logger.log("Not persisting proto because the proto was null");
                            return
                        }
                        this.beforeSendCallbacks.forEach(t => {
                            let {
                                processProto: n
                            } = t;
                            return n(e.protoToSave)
                        });
                        let t = (0, E.protoToB64)(this.ProtoClass, e.protoToSave);
                        if (null == t || "" === t) {
                            this.logger.log("Not persisting proto because there is nothing to change");
                            return
                        }
                        try {
                            this.saveLastSendTime();
                            let {
                                body: n
                            } = await s.default.patch({
                                url: g.Endpoints.USER_SETTINGS_PROTO(this.type),
                                body: {
                                    settings: t,
                                    required_data_version: e.offlineEditDataVersion
                                }
                            });
                            n.out_of_date && this.logger.log("Proto was out of date, discarding changes"), this.getEditInfo().editInfo.cleanupFuncs.forEach(e => e());
                            let i = (0, E.b64ToProto)(this.ProtoClass, n.settings);
                            if (null == i) return;
                            c.default.dispatch({
                                type: "USER_SETTINGS_PROTO_UPDATE",
                                settings: {
                                    proto: i,
                                    type: this.type
                                },
                                resetEditInfo: !0,
                                wasSaved: !0,
                                local: !1
                            })
                        } catch (e) {
                            var n, i;
                            if (429 === e.status) {
                                this.logger.log("Rate limited, scheduling retry");
                                let t = setTimeout(this.persistChanges, Math.min(3e4, (null !== (i = e.body.retry_after) && void 0 !== i ? i : 60) * 1e3));
                                this.dispatchChanges({
                                    rateLimited: !0,
                                    timeout: t
                                })
                            } else if (400 === e.status && (null === (n = e.body) || void 0 === n ? void 0 : n.code) === g.AbortCodes.INVALID_USER_SETTINGS_DATA) throw this.logger.log("Reloading do to invalid data"), this.loadIfNecessary(!0), e;
                            else throw this.logger.log("Unknown user settings error"), e
                        }
                    }, this.logger = new o.default(this.ProtoClass.typeName)
                }
            }
            let I = new p(a.PreloadedUserSettings, S.UserSettingsTypes.PRELOADED_USER_SETTINGS),
                T = new p(l.FrecencyUserSettings, S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                v = {
                    [S.UserSettingsTypes.PRELOADED_USER_SETTINGS]: I,
                    [S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: T
                };

            function A(e, t, n) {
                return I.updateAsync("guilds", n => (0, E.mutateUserGuildSettingsInternal)(n, e, t), n)
            }

            function N(e, t, n, i) {
                return A(e, e => (0, E.mutateUserChannelSettingsInternal)(e, t, n), i)
            }

            function C(e) {
                return I.updateAsync("userContent", t => {
                    if ((0, d.hasBit)(t.dismissedContents, e)) return !1;
                    t.dismissedContents = (0, d.addBit)(t.dismissedContents, e)
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function R(e) {
                return I.updateAsync("userContent", t => {
                    if (!(0, d.hasBit)(t.dismissedContents, e)) return !1;
                    t.dismissedContents = (0, d.removeBit)(t.dismissedContents, e)
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function O() {
                return I.updateAsync("userContent", e => {
                    e.dismissedContents = new Uint8Array
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function L() {
                return I.updateAsync("userContent", e => {
                    let t = new Uint8Array;
                    for (let e of Object.keys(a.DismissibleContent)) t = (0, d.addBit)(t, a.DismissibleContent[e]);
                    e.dismissedContents = t
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        145131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                s = n.n(o),
                l = n("971792"),
                a = n("173791");
            let u = {
                    VERTICAL: a.vertical,
                    HORIZONTAL: l.horizontal,
                    HORIZONTAL_REVERSE: l.horizontalReverse
                },
                c = {
                    START: a.justifyStart,
                    END: a.justifyEnd,
                    CENTER: a.justifyCenter,
                    BETWEEN: a.justifyBetween,
                    AROUND: a.justifyAround
                },
                d = {
                    START: a.alignStart,
                    END: a.alignEnd,
                    CENTER: a.alignCenter,
                    STRETCH: a.alignStretch,
                    BASELINE: a.alignBaseline
                },
                _ = {
                    NO_WRAP: a.noWrap,
                    WRAP: a.wrap,
                    WRAP_REVERSE: a.wrapReverse
                },
                f = e => {
                    let {
                        children: t,
                        className: n,
                        shrink: o,
                        grow: a,
                        basis: u,
                        style: c,
                        wrap: d = !1,
                        ..._
                    } = e;
                    n = null != n ? n : l.flexChild;
                    let f = {
                        className: n,
                        style: {
                            flexGrow: a,
                            flexShrink: o,
                            flexBasis: u,
                            ...c
                        },
                        ..._
                    };
                    if (!d && "string" != typeof t && 1 === r.Children.count(t)) {
                        let e = r.Children.only(t);
                        return f.style = {
                            ...f.style,
                            ...e.props.style
                        }, f.className = s(e.props.className, n), r.cloneElement(e, f)
                    }
                    return (0, i.jsx)("div", {
                        ...f,
                        children: t
                    })
                };
            f.defaultProps = {
                shrink: 1,
                grow: 1,
                basis: "auto",
                wrap: !1
            };
            let E = e => {
                let {
                    children: t,
                    className: n,
                    direction: r = u.HORIZONTAL,
                    justify: o = c.START,
                    align: a = d.STRETCH,
                    wrap: f = _.NO_WRAP,
                    shrink: E,
                    grow: S,
                    basis: g,
                    style: h,
                    ...m
                } = e;
                return (0, i.jsx)("div", {
                    style: {
                        flexShrink: E,
                        flexGrow: S,
                        flexBasis: g,
                        ...h
                    },
                    className: s(l.flex, r, o, a, f, n),
                    ...m,
                    children: t
                })
            };
            E.defaultProps = {
                shrink: 1,
                grow: 1,
                basis: "auto"
            }, E.Child = f, E.Direction = u, E.Align = d, E.Justify = c, E.Wrap = _;
            var S = E
        },
        542489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let r = i.createContext((e, t, n) => {
                console.warn("AnalyticsTrackImpressionContext function unimplemented")
            });
            var o = r
        },
        945330: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196");

            function o(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = "currentColor",
                    foreground: s,
                    className: l,
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(a),
                    className: l,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: o,
                        className: s,
                        d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
                    })
                })
            }
        },
        75196: function(e, t, n) {
            "use strict";

            function i(e) {
                var t, n;
                let i = null != e["aria-label"];
                return e["aria-hidden"] = null !== (t = e["aria-hidden"]) && void 0 !== t ? t : !i, e.role = null !== (n = e.role) && void 0 !== n ? n : "img", e
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            })
        },
        922932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("50885"),
                r = {
                    flushDNSCache() {
                        i.default.flushDNSCache()
                    },
                    flushCookies: () => i.default.flushCookies(),
                    setApplicationBackgroundColor(e) {
                        i.default.setApplicationBackgroundColor(e)
                    },
                    setZoomFactor: e => i.default.setZoomFactor(e),
                    focus(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        i.default.focus(e, t)
                    },
                    submitLiveCrashReport: e => i.default.submitLiveCrashReport(e),
                    getPidFromDesktopSource: e => i.default.getPidFromDesktopSource(e),
                    getAudioPid: e => i.default.getAudioPid(e),
                    generateSessionFromPid: e => i.default.generateSessionFromPid(e)
                }
        },
        674268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasBit: function() {
                    return i
                },
                addBit: function() {
                    return r
                },
                removeBit: function() {
                    return o
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");

            function i(e, t) {
                if (0 === e.length) return !1;
                let n = e[Math.floor(t / 8)];
                return (n & 1 << t % 8) != 0
            }

            function r(e, t) {
                let n = Math.floor(t / 8);
                if (e.length <= n) {
                    let t = new Uint8Array(n + 1);
                    t.set(e, 0), e = t
                }
                return e[n] |= 1 << t % 8, e
            }

            function o(e, t) {
                if (i(e, t)) {
                    let n = Math.floor(t / 8),
                        i = t % 8;
                    e[n] &= ~(1 << i)
                }
                return e
            }
        },
        33112: function(e, t, n) {
            "use strict";
            var i, r, o, s;
            n.r(t), n.d(t, {
                ImpressionNames: function() {
                    return i
                },
                NetworkActionNames: function() {
                    return r
                }
            }), (o = i || (i = {})).ACTIVITIES = "impression_activities", o.ACTIVITIES_HAPPENING_NOW = "impression_activities_happening_now", o.ACTIVITY_BOOKMARK_SHARE_MODAL = "impression_activity_bookmark_share_modal", o.ACTIVITY_BOOSTING_UPSELL = "impression_activity_boosting_upsell", o.ACTIVITY_DETAILS = "impression_activity_details", o.ACTIVITY_NITRO_UPSELL = "impression_activity_nitro_upsell", o.ACTIVITY_SHARE_MOMENT_MODAL = "impression_activity_share_moment_modal", o.ACTIVITY_SHELF = "impression_activity_shelf", o.ACTIVITY_SHELF_SELECT_CHANNEL = "impression_activity_shelf_select_channel", o.APPLICATION_LIBRARY = "impression_application_library", o.APPLICATION_STORE = "impression_application_store", o.AVATAR_UPLOAD = "impression_avatar_upload", o.CHANNEL_ADD_INFO = "impression_channel_add_info", o.CHANNEL_ADD_MEMBERS = "impression_channel_add_members", o.CHANNEL_CALL_VIDEO_GRID = "impression_channel_call_video_grid", o.CHANNEL_CALL_VIDEO_GRID_VIEW = "impression_channel_call_video_grid_view", o.CHANNEL_VIEWED = "impression_channel_viewed", o.CLIP_EDITOR_VIEWED = "impression_clip_editor_viewed", o.CLIP_GALLERY_VIEWED = "impression_clip_gallery_viewed", o.CLYDE_AI_PROFILE_EMBED_VIEWED = "impression_clyde_ai_profile_embed_viewed", o.CONTACT_SYNC_INPUT_NAME = "impression_contact_sync_input_name", o.CONTACT_SYNC_START = "impression_contact_sync_start", o.CONTACT_SYNC_SUGGESTIONS = "impression_contact_sync_suggestions", o.CREATOR_PROMO_PAGE_GUILD_HEADER_UPSELL = "impression_creator_promo_page_guild_header_upsell", o.DIRECTORY_ADD_GUILD_CONFIRMATION = "impression_directory_add_guild_confirmation", o.DISCOVERABILITY = "impression_discoverability", o.DROPS_QUEST_COMPLETION = "impression_drops_quest_completion", o.DROPS_QUEST_ENROLLMENT = "impression_drops_quest_enrollment", o.EMBEDDED_ACTIVITY_HAPPENING_NOW = "impression_embedded_activity_happening_now", o.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING = "impression_enable_creator_monetization_accept_terms_landing", o.ENABLE_CREATOR_MONETIZATION_CREATE_REQUEST_LANDING = "impression_enable_creator_monetization_create_request_landing", o.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL = "impression_enable_creator_monetization_guild_header_upsell", o.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING = "impression_enable_creator_monetization_waitlist_landing", o.FRIENDS = "impression_friends", o.GAME_CONSOLE_DEVICE_LIST = "impression_game_console_device_list", o.GDM_SETTINGS_INVITES = "impression_gdm_settings_invites", o.GUILD_ADD_ACCEPT_INVITE = "impression_guild_add_accept_invite", o.GUILD_ADD_CHANNEL_PROMPT = "impression_guild_add_channel_prompt", o.GUILD_ADD_CUSTOMIZE = "impression_guild_add_customize", o.GUILD_ADD_GUILD_INVITE = "impression_guild_add_guild_invite", o.GUILD_ADD_INTENT_SELECTION = "impression_guild_add_intent_selection", o.GUILD_ADD_JOIN = "impression_guild_add_join", o.GUILD_CREATE_MODAL_JOIN = "impression_guild_create_modal_join", o.GUILD_ADD_LANDING = "impression_guild_add_landing", o.GUILD_CHANNEL = "impression_guild_channel", o.GUILD_DISCOVERY = "impression_guild_discovery", o.GUILD_INVITE = "impression_guild_invite", o.GUILD_INVITE_LINK_SETTINGS = "impression_guild_invite_link_settings", o.GUILD_INVITE_SEARCH = "impression_guild_invite_search", o.GUILD_MEMBER_VERIFICATION = "impression_guild_member_verification", o.GUILD_PERMANENT_LINKS_UPSELL = "impression_guild_permanent_links_upsell", o.GUILD_PRODUCT_LISTING_EMBED = "impression_guild_product_listing_embed", o.GUILD_PRODUCT_LISTING_INFO_MODAL = "impression_guild_product_listing_info_modal", o.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS = "impression_guild_role_subscription_store_page_guild_settings", o.GUILD_SETTINGS_ANALYTICS = "impression_guild_settings_analytics", o.GUILD_SETTINGS_AUDIT_LOG = "impression_guild_settings_audit_log", o.GUILD_SETTINGS_AUDIT_LOG_V2 = "impression_guild_settings_audit_log_v2", o.GUILD_SETTINGS_BANS = "impression_guild_settings_bans", o.GUILD_SETTINGS_BOOST_STATUS = "impression_guild_settings_boost_status", o.GUILD_SETTINGS_CHANNELS = "impression_guild_settings_channels", o.GUILD_SETTINGS_CLYDE = "impression_guild_settings_clyde", o.GUILD_SETTINGS_COMMUNITY_OVERVIEW = "impression_guild_settings_community_overview", o.GUILD_SETTINGS_COMMUNITY_WELCOME = "impression_guild_settings_community_welcome", o.GUILD_SETTINGS_DISCOVERY = "impression_guild_settings_discovery", o.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE = "impression_guild_settings_discovery_landing_page", o.GUILD_SETTINGS_EMOJI = "impression_guild_settings_emoji", o.GUILD_SETTINGS_ENABLE_COMMUNITY = "impression_guild_settings_enable_community", o.GUILD_SETTINGS_INTEGRATION = "impression_guild_settings_integration", o.GUILD_SETTINGS_INVITES = "impression_guild_settings_invites", o.GUILD_SETTINGS_LANDING = "impression_guild_settings_landing", o.GUILD_SETTINGS_MEMBER_VERIFICATION = "impression_guild_settings_member_verification", o.GUILD_SETTINGS_MEMBERS = "impression_guild_settings_members", o.GUILD_SETTINGS_MODERATION = "impression_guild_settings_moderation", o.GUILD_SETTINGS_OVERVIEW = "impression_guild_settings_overview", o.GUILD_SETTINGS_PARTNER = "impression_guild_settings_partner", o.GUILD_SETTINGS_ROLES = "impression_guild_settings_roles", o.GUILD_SETTINGS_SAFETY = "impression_guild_settings_safety", o.GUILD_SETTINGS_SECURITY = "impression_guild_settings_security", o.GUILD_SETTINGS_SOUNDBOARD = "impression_guild_settings_soundboard", o.GUILD_SETTINGS_STICKERS = "impression_guild_settings_stickers", o.GUILD_SETTINGS_TEMPLATE = "impression_guild_settings_template", o.GUILD_SETTINGS_VANITY_URL = "impression_guild_settings_vanity_url", o.GUILD_SETTINGS_WEBHOOKS = "impression_guild_settings_webhooks", o.GUILD_SETTINGS_WIDGET = "impression_guild_settings_widget", o.GUILD_SHOP_EMBED = "impression_guild_shop_embed", o.GUILD_SHOP_PAGE = "impression_guild_shop_page", o.GUILD_SHOP_UPSELL = "impression_guild_shop_upsell", o.GUILD_TRANSFER_OWNERSHIP = "impression_guild_transfer_ownership", o.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE = "impression_guild_transfer_ownership_confirm_email_code", o.GUILD_TRANSFER_OWNERSHIP_CONFIRM_SMS_CODE = "impression_guild_transfer_ownership_confirm_sms_code", o.HOTSPOT = "impression_hotspot", o.HUB_CREATE_GUILD_CUSTOMIZE = "impression_hub_create_guild_customize", o.HUB_CREATE_GUILD_TEMPLATE = "impression_hub_create_guild_template", o.HUB_EMAIL_SIGNUP = "impression_hub_email_signup", o.HUB_EMAIL_VERIFICATION_PAGE = "impression_hub_email_verification_page", o.HUB_EXISTING_GUILD_CHOOSE = "impression_hub_existing_guild_choose", o.HUB_EXISTING_GUILD_CUSTOMIZE = "impression_hub_existing_guild_customize", o.HUB_WAITLIST_SIGNUP = "impression_hub_waitlist_signup", o.INVITE_ACCEPT = "impression_invite_accept", o.LOCALIZED_PRICING_UPSELL_VIEWED = "impression_localized_pricing_upsell_viewed", o.MULTI_ACCOUNT_SWITCH_LANDING = "impression_multi_account_switch_landing", o.NEW_USER_INTENT_START = "impression_new_user_intent_start", o.NOTIFICATION_CENTER_LANDING = "impression_notification_center_landing", o.POMELO_LANDING = "impression_pomelo_landing", o.PREMIUM_GUILD_SUBSCRIPTION_MARKETING_PAGE = "impression_premium_guild_subscription_marketing_page", o.PREMIUM_MARKETING_SURFACE = "impression_premium_marketing_surface", o.PUSH_NOTIFICATION_PREPROMPT = "impression_push_notification_preprompt", o.PUSH_NOTIFICATION_REACTIVATION_PROMPT = "impression_push_notification_reactivation_prompt", o.REQUEST_REVIEW_MODAL = "impression_request_review_modal", o.ROLE_CREATE_ADD_MEMBERS = "impression_role_create_add_members", o.ROLE_CREATE_DISPLAY = "impression_role_create_display", o.ROLE_CREATE_PERMISSIONS = "impression_role_create_permissions", o.ROLE_SUBSCRIPTION_EMOJI_UPSELL = "impression_role_subscription_emoji_upsell", o.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING = "impression_role_subscription_initial_setup_modal_landing", o.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP = "impression_role_subscription_initial_setup_modal_tier_step", o.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR = "impression_role_subscription_listing_template_selector", o.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE = "impression_role_subscription_listing_upsell_error_page", o.SHELF_ACTIVITY_DETAILS = "impression_shelf_activity_details", o.SNOWSGIVING = "impression_snowsgiving", o.SOUNDBOARD_POPOUT = "impression_soundboard_popout", o.STAGE_DISCOVERY = "impression_stage_discovery", o.URF_CONFIRM_EMAIL_CODE = "impression_urf_confirm_email_code", o.URF_ENTER_EMAIL = "impression_urf_enter_email", o.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL = "impression_user_account_email_change_enter_email", o.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE = "impression_user_account_email_change_send_code", o.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE = "impression_user_account_email_change_verify_code", o.USER_ACCOUNT_EMAIL_RESEND_VERIFICATION_EMAIL = "impression_user_account_email_resend_verification_email", o.USER_ACCOUNT_PASSWORD_VERIFY = "impression_user_account_password_verify", o.USER_ACTION_REQUIRED = "impression_user_action_required", o.USER_ADD_PHONE = "impression_user_add_phone", o.USER_AGE_GATE = "impression_user_age_gate", o.USER_AGE_GATE_UNDERAGE = "impression_user_age_gate_underage", o.USER_CLYDE_AI_CONSENT_MODAL = "impression_user_clyde_ai_consent_modal", o.USER_LOGIN = "impression_user_login", o.USER_PASSWORDLESS_CODE_ENTRY = "impression_user_passwordless_code_entry", o.USER_PASSWORDLESS_INTRO = "impression_user_passwordless_intro", o.USER_REGISTER_ACCOUNT_INFORMATION = "impression_user_register_account_information", o.USER_REGISTER_IDENTITY = "impression_user_register_identity", o.USER_REGISTRATION = "impression_user_registration", o.USER_SETTINGS_CONNECTIONS = "impression_user_settings_connections", o.USER_VERIFICATION_MODAL = "impression_user_verification_modal", o.USER_VERIFY_PASSWORD = "impression_user_verify_password", o.USER_VERIFY_PHONE = "impression_user_verify_phone", o.USER_WELCOME = "impression_user_welcome", o.VIEW_PANEL_DEVTOOLS = "impression_view_panel_devtools", (s = r || (r = {})).APPLE_JWT_TOKEN_CREATE = "network_action_apple_jwt_token_create", s.AUTH_SESSIONS_LOGGED_OUT = "network_action_auth_sessions_logged_out", s.AUTHORIZE_IP = "network_action_authorize_ip", s.AUTHORIZE_PAYMENT = "network_action_authorize_payment", s.BUG_REPORT_SUBMIT = "network_action_bug_report_submit", s.CHANNEL_CREATE = "network_action_channel_create", s.DIRECTORY_GUILD_ENTRY_CREATE = "network_action_directory_guild_entry_create", s.DIRECTORY_GUILD_ENTRY_DELETE = "network_action_directory_guild_entry_delete", s.EMAIL_SETTINGS_FETCH = "network_action_email_settings_fetch", s.EMAIL_SETTINGS_UPDATE = "network_action_email_settings_update", s.EMBEDDED_ACTIVITIES_FETCH_SHELF = "network_action_embedded_activities_fetch_shelf", s.EMBEDDED_ACTIVITIES_LAUNCH = "network_action_embedded_activities_launch", s.FORGOT_PASSWORD = "network_action_forgot_password", s.GUILD_CREATE = "network_action_guild_create", s.GUILD_TRANSFER_OWNERSHIP = "network_action_guild_transfer_ownership", s.GUILD_TRANSFER_OWNERSHIP_SEND_CODE = "network_action_guild_transfer_ownership_send_code", s.HUB_EMAIL_VERIFY = "network_action_hub_email_verify", s.HUB_EMAIL_VERIFY_SEND = "network_action_hub_email_verify_send", s.HUB_WAITLIST_SIGNUP = "network_action_hub_waitlist_signup", s.INVITE_RESOLVE = "network_action_invite_resolve", s.INVITE_REVOKE = "network_action_invite_revoke", s.LOGIN_REQUEST_SMS_TOKEN = "network_action_login_request_sms_token", s.NCMEC_REPORT_CLOSE = "network_action_ncmec_report_close", s.NCMEC_REPORTABLE_CONTENT_CREATE = "network_action_ncmec_reportable_content_create", s.NOTIFICATION_CENTER_ITEM_DELETE = "network_action_notification_center_item_delete", s.NOTIFICATION_CENTER_PAGE_FETCH = "network_action_notification_center_page_fetch", s.POMELO_ATTEMPT = "network_action_pomelo_attempt", s.POMELO_CREATE = "network_action_pomelo_create", s.STREAM_NOTIFY = "network_action_stream_notify", s.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE = "network_action_user_account_email_change_send_code", s.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE = "network_action_user_account_email_change_verify_code", s.USER_BULK_RELATIONSHIPS_UPDATE = "network_action_user_bulk_relationships_update", s.USER_CLYDE_AI_CONSENT_UPDATED = "network_action_user_clyde_ai_consent_updated", s.USER_COMMUNICATION_DISABLED_UPDATE = "network_action_user_communication_disabled_update", s.USER_CONNECTIONS_UPDATE = "network_action_user_connections_update", s.USER_CONTACTS_SYNC = "network_action_user_contacts_sync", s.USER_LOGIN = "network_action_user_login", s.USER_LOGIN_MFA = "network_action_user_login_mfa", s.USER_LOGIN_MFA_SMS = "network_action_user_login_mfa_sms", s.USER_LOGOUT = "network_action_user_logout", s.USER_PASSWORDLESS_INFO_FETCH = "network_action_user_passwordless_info_fetch", s.USER_PASSWORDLESS_LOGIN_CODE = "network_action_user_passwordless_login_code", s.USER_REGISTER = "network_action_user_register", s.USER_REGISTER_DEVICE_TOKEN = "network_action_user_register_device_token", s.USER_REGISTER_PHONE = "network_action_user_register_phone", s.USER_RESET_PASSWORD = "network_action_user_reset_password", s.USER_SETTINGS_UPDATE = "network_action_user_settings_update", s.USER_SURVEY_FETCH = "network_action_user_survey_fetch", s.USER_UNREGISTER_DEVICE_TOKEN = "network_action_user_unregister_device_token", s.USER_VERIFY = "network_action_user_verify", s.USER_VERIFY_PHONE = "network_action_user_verify_phone", s.USER_VERIFY_RESEND = "network_action_user_verify_resend"
        },
        375492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (e, t) => function(n, i, r) {
                return new Promise(o => {
                    var s;
                    e.dispatch({
                        type: t,
                        event: n,
                        properties: i,
                        flush: null !== (s = null == r ? void 0 : r.flush) && void 0 !== s && s,
                        fingerprint: null == r ? void 0 : r.fingerprint,
                        resolve: o
                    })
                })
            }
        },
        615582: function(e, t, n) {
            "use strict";
            let i, r, o;
            n.r(t), n.d(t, {
                AnalyticsActionHandlers: function() {
                    return S
                },
                analyticsTrackingStoreMaker: function() {
                    return h
                }
            }), n("860677"), n("843762"), n("222007"), n("424973"), n("704744");
            var s, l = n("391679"),
                a = n("446674"),
                u = n("872717"),
                c = n("166745"),
                d = n("976255");
            let _ = 1500,
                f = null !== (s = window.requestIdleCallback) && void 0 !== s ? s : e => setImmediate(() => e()),
                E = new c.default,
                S = {
                    handleConnectionOpen: () => {},
                    handleConnectionClosed: () => {},
                    handleFingerprint: () => {},
                    handleTrack: () => {}
                },
                g = [],
                h = e => {
                    let {
                        dispatcher: t,
                        actionHandler: n,
                        getFingerprint: s,
                        TRACKING_URL: c,
                        drainTimeoutOverride: h,
                        waitFor: m
                    } = e;
                    _ = null != h ? h : 1500;

                    function p() {
                        return 0 !== g.length && (null != r ? null != i : null != s())
                    }

                    function I() {
                        null == o && p() && (o = f(T, {
                            timeout: _
                        }))
                    }

                    function T() {
                        if (o = null, !p()) return;
                        let e = g.slice();
                        g = [];
                        let t = v(e);
                        t.then(() => {
                            e.forEach(e => {
                                var t;
                                null === (t = e.resolve) || void 0 === t || t.call(e)
                            })
                        }, t => {
                            g.unshift(...e);
                            let {
                                message: n
                            } = t.body || t;
                            console.warn("[AnalyticsTrackingStore] Track:", n)
                        })
                    }

                    function v(e) {
                        let t = Date.now(),
                            n = e.map(e => ({
                                ...e,
                                properties: {
                                    ...e.properties,
                                    client_send_timestamp: t
                                }
                            }));
                        return u.default.post({
                            url: c,
                            body: {
                                token: i,
                                events: n
                            },
                            retries: 3
                        })
                    }
                    S.handleConnectionOpen = function(e) {
                        let {
                            analyticsToken: t,
                            user: n
                        } = e;
                        return null != t && (i = t), null != n.id && (r = n.id), I(), !1
                    }, S.handleConnectionClosed = function() {
                        return T(), i = null, r = null, !1
                    }, S.handleFingerprint = function() {
                        return T(), !1
                    }, S.handleTrack = function(e) {
                        let {
                            event: t,
                            properties: n,
                            flush: i,
                            fingerprint: o,
                            resolve: a
                        } = e;
                        return (0, d.getSession)().then(e => {
                            let u = {
                                    type: t,
                                    fingerprint: o,
                                    properties: {
                                        client_track_timestamp: Date.now(),
                                        client_heartbeat_session_id: null == e ? void 0 : e.uuid,
                                        ...n
                                    },
                                    resolve: a
                                },
                                c = function(e) {
                                    if (null != r) return r;
                                    let t = e.fingerprint || s();
                                    return null != t ? (0, l.extractId)(t) : null
                                }(u);
                            null != c && (u.properties.client_uuid = E.generate(c)), g.push(u), g.length > 1e4 && (g = g.slice(-1e4)), i ? T() : I()
                        }), !1
                    };
                    class A extends a.default.Store {
                        initialize() {
                            null != m && this.waitFor(...m)
                        }
                        constructor(...e) {
                            super(...e), this.submitEventsImmediately = v
                        }
                    }
                    return A.displayName = "AnalyticsTrackingStore", new A(t, n)
                }
        },
        759843: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                analyticsTrackingStoreMaker: function() {
                    return m.analyticsTrackingStoreMaker
                },
                AnalyticsActionHandlers: function() {
                    return m.AnalyticsActionHandlers
                },
                ImpressionTypes: function() {
                    return p.ImpressionTypes
                },
                ImpressionGroups: function() {
                    return p.ImpressionGroups
                },
                ImpressionNames: function() {
                    return S.ImpressionNames
                },
                NetworkActionNames: function() {
                    return S.NetworkActionNames
                },
                getCampaignParams: function() {
                    return O
                },
                trackMaker: function() {
                    return P
                },
                default: function() {
                    return M
                }
            }), n("781738"), n("222007");
            var o, s = n("714617"),
                l = n.n(s),
                a = n("627445"),
                u = n.n(a),
                c = n("383536"),
                d = n.n(c),
                _ = n("429030"),
                f = n("95410"),
                E = n("444095"),
                S = n("33112"),
                g = n("375492"),
                h = n("612481"),
                m = n("615582"),
                p = n("660516");
            let I = "deviceProperties",
                T = "referralProperties",
                v = {},
                A = {},
                N = window.DiscordNative;
            if (null != N) {
                let e;
                let t = N.remoteApp.getVersion(),
                    n = N.process.platform,
                    r = N.os.release,
                    s = N.os.arch,
                    l = N.os.appArch,
                    a = N.remoteApp.getReleaseChannel(),
                    u = (0, _.getSystemLocale)();
                switch (n) {
                    case "win32":
                        e = "Windows";
                        break;
                    case "darwin":
                        e = "Mac OS X";
                        break;
                    case "linux":
                        e = "Linux";
                        break;
                    default:
                        e = n
                }
                if (i = {
                        os: e,
                        browser: "Discord Client",
                        release_channel: a || "unknown",
                        client_version: t,
                        os_version: r,
                        os_arch: s,
                        app_arch: l,
                        system_locale: u
                    }, (null === (o = d.name) || void 0 === o ? void 0 : o.toLocaleLowerCase()) === "electron" && (i.browser_user_agent = d.ua || "", i.browser_version = d.version || ""), "linux" === n) {
                    let e = N.crashReporter.getMetadata();
                    i.window_manager = e.wm, i.distro = e.distro
                }
            }
            let C = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");

            function R(e, t) {
                if (null == e) return "";
                t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                let n = new RegExp("[\\?&]".concat(t, "=([^&#]*)")),
                    i = n.exec(e);
                return null === i || "string" != typeof i[1] && i[1].length ? "" : decodeURIComponent(i[1]).replace(/\+/g, " ")
            }

            function O(e) {
                let t = {};
                return C.forEach(n => {
                    let i = R(e, n);
                    i.length > 0 && (t[n] = i)
                }), t
            }

            function L() {
                let e = {};
                return e.referrer = document.referrer, e.referring_domain = function() {
                    let e = document.referrer.split("/");
                    return e.length >= 3 ? e[2] : ""
                }(), e = {
                    ...e,
                    ...O(window.location.href),
                    ... function() {
                        let e = {},
                            t = document.referrer,
                            n = function() {
                                let e = document.referrer;
                                if (0 === e.search("https?://(.*)google.([^/?]*)")) return "google";
                                if (0 === e.search("https?://(.*)bing.com")) return "bing";
                                if (0 === e.search("https?://(.*)yahoo.com")) return "yahoo";
                                else if (0 === e.search("https?://(.*)duckduckgo.com")) return "duckduckgo";
                                else return null
                            }();
                        if (null != n) {
                            e.search_engine = n;
                            let i = R(t, "yahoo" !== n ? "q" : "p");
                            i.length > 0 && (e.mp_keyword = i)
                        }
                        return e
                    }()
                }
            }

            function y(e) {
                return null != v[e] && v[e] > Date.now()
            }
            if (null == i) try {
                let e, t, n;
                e = f.default.get(I), null == e && (e = function() {
                    let e = {},
                        t = function() {
                            let {
                                userAgent: e
                            } = window.navigator;
                            if (/Windows/i.test(e)) return /Phone/.test(e) ? "Windows Mobile" : "Windows";
                            if (/(iPhone|iPad|iPod)/.test(e)) return "iOS";
                            if (/Android/.test(e)) return "Android";
                            else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                            else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "iOS" : "Mac OS X";
                            else if (/Linux/i.test(e)) return "Linux";
                            else return ""
                        }();
                    return e.os = t, e.browser = function() {
                        let {
                            userAgent: e,
                            vendor: t = ""
                        } = window.navigator, {
                            opera: n
                        } = window;
                        if (n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
                        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                        if (/FBIOS/.test(e)) return "Facebook Mobile";
                        else if (/CriOS/.test(e)) return "Chrome iOS";
                        else if (/Apple/.test(t)) return /Mobile/.test(e) || null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "Mobile Safari" : "Safari";
                        else if (/Android/.test(e)) return /Chrome/.test(e) ? "Android Chrome" : "Android Mobile";
                        else if (/Edge/.test(e)) return "Edge";
                        else if (/Chrome/.test(e)) return "Chrome";
                        else if (/Konqueror/.test(e)) return "Konqueror";
                        else if (/Firefox/.test(e)) return "Firefox";
                        else if (/MSIE|Trident\//.test(e)) return "Internet Explorer";
                        else if (/Gecko/.test(e)) return "Mozilla";
                        else return ""
                    }(), e.device = function() {
                        let {
                            userAgent: e
                        } = window.navigator;
                        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                        if (/Windows Phone/i.test(e)) return "Windows Phone";
                        if (/Android/.test(e)) return "Android";
                        else if (/iPhone/.test(e)) return "iPhone";
                        else if (/iPad/.test(e)) return "iPad";
                        else return ""
                    }(), e.system_locale = (0, _.getSystemLocale)(), e
                }(), f.default.set(I, e)), t = f.default.get(T), null == t && (t = L(), f.default.set(T, t)), n = E.default.get(T), null == n && (n = function(e, t) {
                    let n = {};
                    return Object.keys(e).map(i => n["".concat(i).concat(t)] = e[i]), n
                }(L(), "_current"), E.default.set(T, n)), i = {
                    ...e,
                    ... function() {
                        var e, t;
                        let n = {
                            browser_user_agent: window.navigator.userAgent || "",
                            browser_version: d.version || ""
                        };
                        return {
                            ...n,
                            os_version: null !== (t = null == d ? void 0 : null === (e = d.os) || void 0 === e ? void 0 : e.version) && void 0 !== t ? t : ""
                        }
                    }(),
                    ...t,
                    ...n
                }
            } catch (e) {
                i = {}
            }

            function D(e) {
                i = {
                    ...i,
                    ...e
                }, r = (0, h.default)(i)
            }
            D(function() {
                var e, t, n;
                let i = {},
                    r = window.GLOBAL_ENV.RELEASE_CHANNEL;
                r && (i.release_channel = r.split("-")[0]);
                let o = parseInt((n = "249313", "249313"), 10);
                !isNaN(o) && (i.client_build_number = o);
                let s = null == N ? void 0 : null === (e = (t = N.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t);
                return !isNaN(s) && (i.native_build_number = s), i.client_event_source = function() {
                    try {
                        if (__OVERLAY__) return "OVERLAY"
                    } catch (e) {}
                    return null
                }(), i
            }());
            let P = e => {
                let {
                    analyticEventConfigs: t,
                    dispatcher: i,
                    TRACK_ACTION_NAME: r
                } = e, o = (0, g.default)(i, r);
                return function(e, i) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
                    let s = null != i ? i : {},
                        a = t[e];
                    if (null != a) {
                        if ("throttlePeriod" in a) {
                            let t = [e, ...a.throttleKeys(s)].join("_");
                            if (y(t)) return Promise.resolve();
                            if (a.deduplicate) {
                                let e = A[t];
                                if (l(e, s)) return Promise.resolve();
                                A[t] = s
                            }
                            v[t] = Date.now() + a.throttlePeriod
                        } else if ("throttlePercent" in a) {
                            if (Math.random() > a.throttlePercent) return Promise.resolve()
                        } else u(!1, "Unsupported analytics event config: ".concat(a))
                    }
                    return o(e, i, r)
                }
            };
            var M = {
                isThrottled: y,
                encodeProperties: h.default,
                getSuperProperties: () => i,
                getSuperPropertiesBase64: () => r,
                extendSuperProperties: D
            }
        },
        660516: function(e, t, n) {
            "use strict";
            var i, r, o, s;
            n.r(t), n.d(t, {
                ImpressionGroups: function() {
                    return i
                },
                ImpressionTypes: function() {
                    return r
                }
            }), (o = i || (i = {})).CHANNEL_ADD_FLOW = "channel_add_flow", o.CONTACT_SYNC_FLOW = "contact_sync_flow", o.DIRECTORY_GUILD_ADD_FLOW = "directory_guild_add_flow", o.GUILD_ADD_FLOW = "guild_add_flow", o.GUILD_ADD_NUF = "guild_add_nuf", o.USER_VERIFICATION_MODAL_FLOW = "user_verification_modal_flow", o.GUILD_TRANSFER_OWNERSHIP_FLOW = "guild_transfer_ownership_flow", o.ROLE_ADD_FLOW = "role_add_flow", o.USER_ACCOUNT_EMAIL_CHANGE_FLOW = "user_account_email_change_flow", o.USER_LOGIN_FLOW = "user_login_flow", o.USER_REGISTRATION_FLOW = "user_registration_flow", o.ACTIVITY_SHELF_FLOW = "activity_shelf_flow", o.POMELO_FLOW = "pomelo_flow", (s = r || (r = {})).PAGE = "page", s.MODAL = "modal", s.POPOUT = "popout", s.MENU = "menu", s.PANE = "pane", s.VIEW = "view", s.HALFSHEET = "halfsheet"
        },
        612481: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446825").Buffer;

            function r(e) {
                try {
                    return i.from(JSON.stringify(e)).toString("base64")
                } catch (e) {
                    return null
                }
            }
        },
        391679: function(e, t, n) {
            "use strict";

            function i(e) {
                return e.split(".")[0]
            }

            function r(e) {
                return null == e ? null : i(e)
            }
            n.r(t), n.d(t, {
                extractId: function() {
                    return i
                },
                maybeExtractId: function() {
                    return r
                }
            })
        },
        166745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, r = n("552442"),
                o = n.n(r),
                s = n("446825");

            function l(e) {
                return 0 | e.mod(4294967296).toJSNumber()
            }

            function a(e) {
                return 0 | e.shiftRight(32).toJSNumber()
            }
            i = class {
                generate(e) {
                    let t = o(e),
                        n = 0 | this._sequenceNumber++,
                        i = new s.Buffer(24);
                    return i.writeInt32LE(l(t), 0, !0), i.writeInt32LE(a(t), 4, !0), i.writeInt32LE(this._randomPrefix, 8, !0), i.writeInt32LE(l(this._creationTime), 12, !0), i.writeInt32LE(a(this._creationTime), 16, !0), i.writeInt32LE(n, 20, !0), i.toString("base64")
                }
                constructor() {
                    this._randomPrefix = 0 | Math.floor(4294967296 * Math.random()), this._creationTime = o(Date.now()), this._sequenceNumber = 0
                }
            }
        },
        976255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setSessionExtendingEnabled: function() {
                    return c
                },
                getSession: function() {
                    return d
                },
                timestampOrZero: function() {
                    return f
                }
            });
            var i = n("748820"),
                r = n("95410");
            let o = "LATEST_SESSION_TIMESTAMP",
                s = "LATEST_SESSION_UUID",
                l = "LATEST_SESSION_INITIALIZED_TIMESTAMP",
                a = Promise.resolve(),
                u = !1;

            function c(e) {
                u = e
            }

            function d() {
                let e = a.then(async () => {
                    let e = await _();
                    if (null == e || function(e) {
                            let t = 18e5 + e.lastUsed - Date.now();
                            return t <= 0
                        }(e)) {
                        if (!u) return null;
                        let t = {
                            uuid: (0, i.v4)(),
                            initialized: Date.now(),
                            lastUsed: Date.now()
                        };
                        r.default.set(s, t.uuid), r.default.set(l, t.initialized.toString()), r.default.set(o, Date.now().toString()), e = t
                    } else u && r.default.set(o, Date.now().toString());
                    return e
                });
                return a = e
            }
            async function _() {
                let e = await r.default.getAfterRefresh(s),
                    t = await r.default.getAfterRefresh(l).then(f),
                    n = await r.default.getAfterRefresh(o).then(f);
                return null != e && null != t ? {
                    uuid: e,
                    initialized: t,
                    lastUsed: n
                } : null
            }

            function f(e) {
                return null != e ? Number(e) : 0
            }
        },
        444095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = n("434596").impl
        },
        434596: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                sessionStorageTest: function() {
                    return o
                },
                impl: function() {
                    return s
                }
            });
            var r = n("419243");
            try {
                i = window.sessionStorage
            } catch (e) {}
            try {
                delete window.sessionStorage
            } catch (e) {}

            function o() {
                let e = "test";
                try {
                    return i.setItem(e, e), i.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }
            let s = o() ? new class e {
                get(e, t) {
                    let n = i.getItem(e);
                    if (null != n) try {
                        n = JSON.parse(n)
                    } catch (e) {
                        n = t
                    } else n = t;
                    return n
                }
                set(e, t) {
                    i.setItem(e, JSON.stringify(t))
                }
                remove(e) {
                    i.removeItem(e)
                }
                clear() {
                    i.clear()
                }
            } : new r.ObjectStorage
        }
    }
]);
//# sourceMappingURL=36cde9ec9876a5302a13.js.map