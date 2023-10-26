(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48059"], {
        539826: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AccessibilityAnnouncer: function() {
                    return r
                }
            });
            var i = n("837877");
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
            var i = n("773670");
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
                    return l
                }
            });
            var i = n("920040"),
                r = n("773670");
            let o = r.createContext(!1);

            function l(e) {
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
                    return h
                },
                ButtonColors: function() {
                    return g
                },
                ButtonBorderColors: function() {
                    return S
                },
                ButtonHovers: function() {
                    return v
                },
                ButtonSizes: function() {
                    return m
                },
                getButtonStyle: function() {
                    return E
                },
                Button: function() {
                    return p
                },
                ButtonLink: function() {
                    return A
                }
            });
            var i = n("920040"),
                r = n("773670"),
                o = n("575482"),
                l = n.n(o),
                s = n("716984"),
                u = n("539826"),
                a = n("718776"),
                c = n("242670"),
                d = n("782340"),
                f = n("298746");
            let h = {
                    FILLED: f.lookFilled,
                    INVERTED: f.lookInverted,
                    OUTLINED: f.lookOutlined,
                    LINK: f.lookLink,
                    BLANK: f.lookBlank
                },
                g = {
                    BRAND: f.colorBrand,
                    RED: f.colorRed,
                    GREEN: f.colorGreen,
                    YELLOW: f.colorYellow,
                    PRIMARY: f.colorPrimary,
                    LINK: f.colorLink,
                    WHITE: f.colorWhite,
                    BLACK: f.colorBlack,
                    TRANSPARENT: f.colorTransparent,
                    BRAND_NEW: f.colorBrandNew,
                    CUSTOM: ""
                },
                S = {
                    BRAND: f.borderBrand,
                    RED: f.borderRed,
                    GREEN: f.borderGreen,
                    YELLOW: f.borderYellow,
                    PRIMARY: f.borderPrimary,
                    LINK: f.borderLink,
                    WHITE: f.borderWhite,
                    BLACK: f.borderBlack,
                    TRANSPARENT: f.borderTransparent,
                    BRAND_NEW: f.borderBrandNew
                },
                v = {
                    DEFAULT: "",
                    BRAND: f.hoverBrand,
                    RED: f.hoverRed,
                    GREEN: f.hoverGreen,
                    YELLOW: f.hoverYellow,
                    PRIMARY: f.hoverPrimary,
                    LINK: f.hoverLink,
                    WHITE: f.hoverWhite,
                    BLACK: f.hoverBlack,
                    TRANSPARENT: f.hoverTransparent
                },
                m = {
                    NONE: "",
                    TINY: f.sizeTiny,
                    SMALL: f.sizeSmall,
                    MEDIUM: f.sizeMedium,
                    LARGE: f.sizeLarge,
                    XLARGE: f.sizeXlarge,
                    MIN: f.sizeMin,
                    MAX: f.sizeMax,
                    ICON: f.sizeIcon
                };

            function E() {
                let {
                    look: e = h.FILLED,
                    color: t = g.BRAND,
                    borderColor: n,
                    hover: i,
                    size: r = m.MEDIUM,
                    fullWidth: o = !1,
                    grow: s = !0,
                    submitting: u = !1,
                    disabled: a = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return l(f.button, e, t, n, i, r, {
                    [f.fullWidth]: o,
                    [f.grow]: s,
                    [f.hasHover]: null != i && i !== v.DEFAULT,
                    [f.submitting]: u && !a
                })
            }

            function p(e) {
                let {
                    look: t = h.FILLED,
                    color: n = g.BRAND,
                    borderColor: o,
                    hover: s,
                    size: S = m.MEDIUM,
                    fullWidth: v = !1,
                    grow: p = !0,
                    disabled: A = !1,
                    submitting: T = !1,
                    type: I = "button",
                    style: C,
                    wrapperClassName: y,
                    className: _,
                    innerClassName: N,
                    onClick: R,
                    onDoubleClick: O,
                    onMouseDown: L,
                    onMouseUp: D,
                    onMouseEnter: P,
                    onMouseLeave: M,
                    onKeyDown: b,
                    children: F,
                    rel: w,
                    buttonRef: U,
                    focusProps: x,
                    "aria-label": B,
                    submittingStartedLabel: k,
                    submittingFinishedLabel: G,
                    ...H
                } = e, V = A || T, W = V && (null != P || null != M), z = W ? null : y, j = function(e, t) {
                    var n, i, r, o;
                    let l = null == e ? void 0 : e.offset;
                    return t === h.LINK || t === h.BLANK ? l : null == l ? -2 : "number" == typeof l ? l + 2 : {
                        top: (null !== (n = l.top) && void 0 !== n ? n : 0) - 2,
                        right: (null !== (i = l.right) && void 0 !== i ? i : 0) - 2,
                        bottom: (null !== (r = l.bottom) && void 0 !== r ? r : 0) - 2,
                        left: (null !== (o = l.left) && void 0 !== o ? o : 0) - 2
                    }
                }(x, t), Y = r.useRef(!1);
                r.useEffect(() => {
                    !0 === T && (Y.current = !0, u.AccessibilityAnnouncer.announce(null != k ? k : d.default.Messages.A11Y_LOADING_STARTED)), !1 === T && !0 === Y.current && u.AccessibilityAnnouncer.announce(null != G ? G : d.default.Messages.A11Y_LOADING_FINISHED)
                }, [T, k, G]);
                let Z = (0, i.jsx)(a.FocusRing, {
                    ...x,
                    offset: j,
                    children: (0, i.jsxs)("button", {
                        ...V ? null : H,
                        "aria-label": B,
                        "aria-busy": !!T || void 0,
                        ref: U,
                        onClick: V ? e => e.preventDefault() : R,
                        onDoubleClick: V ? e => e.preventDefault() : O,
                        onMouseUp: A ? void 0 : D,
                        onMouseDown: A ? void 0 : L,
                        onMouseEnter: P,
                        onMouseLeave: M,
                        onKeyDown: A ? void 0 : b,
                        type: I,
                        disabled: A,
                        style: C,
                        rel: w,
                        className: l(_, E({
                            look: t,
                            color: n,
                            borderColor: o,
                            hover: s,
                            size: S,
                            fullWidth: v,
                            grow: p,
                            submitting: T,
                            disabled: A
                        }), z),
                        children: [T && !A ? (0, i.jsx)(c.Spinner, {
                            type: c.Spinner.Type.PULSING_ELLIPSIS,
                            className: f.spinner,
                            itemClassName: f.spinnerItem
                        }) : null, (0, i.jsx)("div", {
                            className: l(f.contents, N),
                            children: F
                        })]
                    })
                });
                return W ? (0, i.jsxs)("span", {
                    className: l(f.disabledButtonWrapper, y, S, {
                        [f.grow]: p,
                        [f.fullWidth]: v
                    }),
                    children: [Z, (0, i.jsx)("span", {
                        onMouseEnter: P,
                        onMouseLeave: M,
                        className: f.disabledButtonOverlay
                    })]
                }) : Z
            }

            function A(e) {
                let {
                    look: t = h.FILLED,
                    color: n = g.BRAND,
                    borderColor: r,
                    hover: o,
                    size: u = m.MEDIUM,
                    fullWidth: a = !1,
                    grow: c = !0,
                    style: d,
                    className: S,
                    innerClassName: E,
                    to: p,
                    onClick: A,
                    onMouseDown: T,
                    onMouseUp: I,
                    children: C,
                    rel: y,
                    ..._
                } = e;
                return (0, i.jsx)(s.Link, {
                    ..._,
                    to: p,
                    onClick: A,
                    onMouseUp: I,
                    onMouseDown: T,
                    style: d,
                    rel: y,
                    className: l(S, f.button, t, n, r, o, u, {
                        [f.fullWidth]: a,
                        [f.grow]: c,
                        [f.hasHover]: null != o && o !== v.DEFAULT
                    }),
                    children: (0, i.jsx)("span", {
                        className: l(f.contents, E),
                        children: C
                    })
                })
            }
            p.Looks = h, p.Colors = g, p.BorderColors = S, p.Hovers = v, p.Sizes = m, p.Link = A
        },
        390534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WCAGContrastRatios: function() {
                    return o
                },
                getContrastingColor: function() {
                    return l
                }
            });
            var i = n("287533"),
                r = n.n(i);
            let o = {
                NonText: 3,
                Text: 4.5,
                HighContrastText: 7
            };

            function l(e) {
                var t, n, i;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = null !== (t = l.contrastRatio) && void 0 !== t ? t : o.NonText,
                    u = null !== (n = l.tolerance) && void 0 !== n ? n : 3,
                    a = r(null !== (i = l.base) && void 0 !== i ? i : e),
                    c = r(e),
                    d = a.luminance(),
                    f = c,
                    h = s + u,
                    g = r.contrast(a, c),
                    S = 100;
                for (; S-- > 0;) {
                    let e = g < s,
                        t = g > h;
                    if (!e && !t) break;
                    let n = f.luminance(),
                        i = n > d;
                    f = t && i || e && !i ? f.darken() : f.brighten(), g = r.contrast(a, f)
                }
                return function(e) {
                    let [t, n, i, r] = e.rgba();
                    return "rgba(".concat(t, ", ").concat(n, ", ").concat(i, ", ").concat(r, ")")
                }(f)
            }
        },
        130969: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DialogContext: function() {
                    return a
                },
                Dialog: function() {
                    return c
                }
            });
            var i = n("920040"),
                r = n("773670"),
                o = n("311720"),
                l = n("718776"),
                s = n("860226"),
                u = n("542489");
            let a = r.createContext(void 0),
                c = r.forwardRef(function(e, t) {
                    let {
                        children: n,
                        impressionType: c,
                        impression: d,
                        disableTrack: f,
                        returnRef: h,
                        ...g
                    } = e, S = r.useRef(null);
                    (0, o.useFocusLock)(S, {
                        returnRef: h
                    });
                    let v = r.useContext(u.default);
                    return v({
                        type: c,
                        name: null == d ? void 0 : d.impressionName,
                        properties: null == d ? void 0 : d.impressionProperties
                    }, {
                        disableTrack: f
                    }), r.useImperativeHandle(t, () => S.current), (0, i.jsx)(a.Provider, {
                        value: !0,
                        children: (0, i.jsx)("div", {
                            ...g,
                            ref: S,
                            role: "dialog",
                            tabIndex: -1,
                            "aria-modal": !0,
                            children: (0, i.jsx)(s.HeadingLevel, {
                                forceLevel: 1,
                                children: (0, i.jsx)(l.FocusRingScope, {
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
                    return a
                },
                FocusLock: function() {
                    return c
                }
            });
            var i, r = n("773670"),
                o = n("363423"),
                l = n("498225"),
                s = n("206230");
            let u = null !== (i = document.getElementById("app-mount")) && void 0 !== i ? i : document;

            function a(e) {
                var t, n;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, l.useStateFromStores)([s.default], () => s.default.keyboardModeEnabled),
                    c = r.useRef(!1);
                return c.current = !a && (null === (t = i.returnRef) || void 0 === t ? void 0 : t.current) == null, (0, o.default)(e, {
                    ...i,
                    disableReturnRef: c,
                    attachTo: null !== (n = i.attachTo) && void 0 !== n ? n : u,
                    returnRef: i.returnRef
                })
            }

            function c(e) {
                return a(e.containerRef), e.children
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
            var i = n("514559")
        },
        860226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HeadingLevel: function() {
                    return o
                },
                H: function() {
                    return l
                },
                usePrivateHeadingLevel: function() {
                    return u
                }
            });
            var i = n("920040"),
                r = n("773670");

            function o(e) {
                let {
                    component: t,
                    children: n,
                    forceLevel: o
                } = e, l = r.useContext(s), [u, a] = r.useState(null != t), c = 1, d = 1;
                null != o ? null != t ? (c = o, d = o + 1) : d = o : null != t ? (c = l.level, d = l.level + 1) : d = l.level + (u ? 1 : 0);
                let f = r.useCallback(() => (a(!0), c), [c]),
                    h = r.useCallback(() => (a(!0), d), [d]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [null != t ? (0, i.jsx)(s.Provider, {
                        value: {
                            level: c,
                            getLevelAndMarkUsed: f
                        },
                        children: t
                    }) : null, (0, i.jsx)(s.Provider, {
                        value: {
                            level: d,
                            getLevelAndMarkUsed: h
                        },
                        children: n
                    })]
                })
            }

            function l(e) {
                let t = u(),
                    n = "h".concat(Math.min(t, 6));
                return (0, i.jsx)(n, {
                    ...t > 6 ? {
                        "data-excessive-heading-level": t
                    } : {},
                    ...e
                })
            }
            let s = r.createContext({
                getLevelAndMarkUsed: () => 2,
                level: 2
            });

            function u() {
                let {
                    getLevelAndMarkUsed: e
                } = r.useContext(s);
                return e()
            }
            s.displayName = "HeadingLevelContext"
        },
        433600: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ListThin: function() {
                    return a
                },
                ListAuto: function() {
                    return c
                },
                ListNone: function() {
                    return d
                }
            });
            var i, r, o, l = n("436961"),
                s = n("73643"),
                u = n("394325");
            let a = (0, s.createListScroller)(u.thin, u.fade, u.customTheme, null !== (i = window.ResizeObserver) && void 0 !== i ? i : l.ResizeObserver),
                c = (0, s.createListScroller)(u.auto, u.fade, u.customTheme, null !== (r = window.ResizeObserver) && void 0 !== r ? r : l.ResizeObserver),
                d = (0, s.createListScroller)(u.none, u.fade, u.customTheme, null !== (o = window.ResizeObserver) && void 0 !== o ? o : l.ResizeObserver)
        },
        73643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createListScroller: function() {
                    return f
                }
            });
            var i = n("920040"),
                r = n("773670"),
                o = n("575482"),
                l = n.n(o),
                s = n("998153"),
                u = n.n(s),
                a = n("718776"),
                c = n("462977"),
                d = n("394325");

            function f(e, t, n, o) {
                let s = (0, c.getScrollbarSpecs)(e),
                    f = new Map,
                    h = new o(e => {
                        e.forEach(e => {
                            var t;
                            let {
                                target: n
                            } = e;
                            null === (t = f.get(n)) || void 0 === t || t(e)
                        })
                    });
                return r.forwardRef(function(o, g) {
                    let {
                        className: S,
                        onScroll: v,
                        onResize: m = null,
                        onContentResize: E = null,
                        dir: p = "ltr",
                        sections: A,
                        sectionHeight: T,
                        rowHeight: I,
                        footerHeight: C = 0,
                        sidebarHeight: y,
                        listHeaderHeight: _ = 0,
                        renderSection: N,
                        renderRow: R,
                        renderFooter: O,
                        renderSidebar: L,
                        renderListHeader: D,
                        wrapSection: P,
                        getAnchorId: M,
                        paddingTop: b,
                        paddingBottom: F,
                        fade: w = !1,
                        customTheme: U = !1,
                        chunkSize: x,
                        style: B,
                        innerId: k,
                        innerRole: G,
                        innerAriaLabel: H,
                        innerAriaMultiselectable: V,
                        innerAriaOrientation: W,
                        innerClassName: z,
                        innerTag: j = "div",
                        ...Y
                    } = o, Z = r.useRef(null), K = r.useRef(null), [X, q] = r.useState(!1), {
                        scrollerRef: J,
                        scrollerState: Q,
                        getScrollerState: $
                    } = (0, c.useCachedScrollerState)();
                    (0, c.usePaddingFixes)({
                        scrollerRef: J,
                        className: S,
                        specs: s,
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
                        anchor: el
                    } = (0, c.useVirtualizedState)({
                        sections: A,
                        sectionHeight: T,
                        rowHeight: I,
                        footerHeight: C,
                        sidebarHeight: y,
                        listHeaderHeight: _,
                        paddingTop: b,
                        paddingBottom: F,
                        chunkSize: x,
                        getScrollerState: $,
                        getAnchorId: M
                    }), es = (0, c.useScrollSpring)(J), eu = r.useRef(m), ea = r.useRef(E);
                    r.useLayoutEffect(() => {
                        eu.current = m, ea.current = E
                    });
                    let ec = r.useCallback(function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                            if (e > Q.current.dirty && (Q.current.dirty = e), 2 === e) {
                                var t;
                                null === (t = eu.current) || void 0 === t || t.call(eu)
                            }
                            eo(e)
                        }, [eo, Q]),
                        ed = r.useCallback(() => ec(), [ec]);
                    (0, c.useResizeObserverSubscription)({
                        ref: J,
                        onUpdate: ed,
                        key: "container",
                        resizeObserver: h,
                        listenerMap: f
                    }), (0, c.useResizeObserverSubscription)({
                        ref: K,
                        onUpdate: () => {
                            var e;
                            return null === (e = ea.current) || void 0 === e ? void 0 : e.call(ea)
                        },
                        key: "content",
                        resizeObserver: h,
                        listenerMap: f
                    });
                    let ef = function(e) {
                            let t = r.useRef(e);
                            return r.useEffect(() => void(t.current = e), [e]), r.useCallback(() => t.current, [])
                        }(en),
                        eh = function(e) {
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
                        }(A);
                    r.useImperativeHandle(g, () => ({
                        getScrollerNode: () => J.current,
                        getScrollerState: $,
                        getItems: ef,
                        getSectionRowFromIndex: eh,
                        ...(0, c.getAnimatedListScrollHelpers)(J, $, er, es)
                    }), [J, $, eh, ef, er, es]);
                    let eg = r.useCallback(e => {
                        ec(1), null == Z.current ? q(!0) : clearTimeout(Z.current), Z.current = setTimeout(() => {
                            Z.current = null, q(!1)
                        }, 200), null != v && v(e)
                    }, [v, ec]);
                    return r.useLayoutEffect(() => {
                        2 !== Q.current.dirty && (Q.current.dirty = 2)
                    }, [en, N, R, O, P, et, ee, Q]), (0, c.useVirtualizedAnchor)({
                        scrollerRef: J,
                        anchor: el,
                        getScrollerState: $,
                        listComputer: er,
                        getAnchorId: M,
                        totalHeight: et
                    }), (0, i.jsxs)("div", {
                        ref: J,
                        onScroll: eg,
                        className: l(S, {
                            [e]: !0,
                            [t]: w,
                            [n]: U,
                            [d.scrolling]: X
                        }),
                        style: (0, c.getMergedOrientationStyles)(B),
                        ...Y,
                        children: [r.useMemo(() => (0, i.jsx)(j, {
                            id: k,
                            role: G,
                            "aria-label": H,
                            "aria-multiselectable": V,
                            "aria-orientation": W,
                            style: {
                                height: et
                            },
                            className: l(d.content, z),
                            ref: K,
                            children: (0, i.jsx)(a.FocusRingScope, {
                                containerRef: K,
                                children: function(e) {
                                    let {
                                        renderSection: t,
                                        renderRow: n,
                                        renderFooter: r,
                                        renderListHeader: o,
                                        wrapSection: l,
                                        items: s,
                                        spacerTop: a
                                    } = e, c = [(0, i.jsx)("div", {
                                        "aria-hidden": !0,
                                        style: {
                                            height: a
                                        }
                                    }, "---list-spacer-top")], d = [], f = 0;
                                    if (s.forEach(e => {
                                            var i;
                                            switch (e.section !== f && d.length > 0 && (c.push(null != l ? l(f, d) : d), d = []), f = null !== (i = e.section) && void 0 !== i ? i : 0, e.type) {
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
                                        var h;
                                        c.push(null !== (h = null == l ? void 0 : l(f, d)) && void 0 !== h ? h : d)
                                    }
                                    return u(c)
                                }({
                                    items: en,
                                    renderListHeader: D,
                                    renderSection: N,
                                    renderRow: R,
                                    renderFooter: O,
                                    wrapSection: P,
                                    spacerTop: ee
                                })
                            })
                        }), [k, G, H, V, W, z, j, et, en, N, R, O, D, P, ee]), r.useMemo(() => (function(e) {
                            let {
                                renderSidebar: t,
                                sidebarHeight: n,
                                isSidebarVisible: i,
                                isListVisible: r
                            } = e;
                            return null == n || null == t ? null : t(r, i)
                        })({
                            isSidebarVisible: ei,
                            renderSidebar: L,
                            sidebarHeight: y,
                            isListVisible: 0 !== en.length
                        }), [ei, L, y, en.length])]
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
                    return f
                },
                useModalsStore: function() {
                    return h
                },
                openModalLazy: function() {
                    return g
                },
                openModal: function() {
                    return S
                },
                closeModal: function() {
                    return v
                },
                updateModal: function() {
                    return m
                },
                hasAnyModalOpenSelector: function() {
                    return E
                },
                hasAnyModalOpen: function() {
                    return p
                },
                useHasAnyModalOpen: function() {
                    return A
                },
                useIsModalAtTop: function() {
                    return T
                },
                closeAllModals: function() {
                    return I
                },
                hasModalOpenSelector: function() {
                    return C
                },
                hasModalOpen: function() {
                    return y
                }
            });
            var i = n("552473"),
                r = n.n(i),
                o = n("710835"),
                l = n("244201"),
                s = n("625611"),
                u = n("49111");
            let a = n("362149").default,
                c = [s.DEFAULT_MODAL_CONTEXT, s.POPOUT_MODAL_CONTEXT];

            function d() {
                let e = (0, l.getCurrentlyInteractingAppContext)();
                return null != e ? f(e) : s.DEFAULT_MODAL_CONTEXT
            }

            function f(e) {
                return e === u.AppContext.POPOUT ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT
            }
            let h = (0, o.default)(e => ({
                [s.DEFAULT_MODAL_CONTEXT]: [],
                [s.POPOUT_MODAL_CONTEXT]: []
            }));
            async function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        contextKey: n = d(),
                        ...i
                    } = t,
                    o = null != t.modalKey ? t.modalKey : r(),
                    l = !1,
                    s = setTimeout(() => {
                        l = !0, S(a, {
                            ...i,
                            modalKey: o
                        }, n)
                    }, 300),
                    u = await e();
                return clearTimeout(s), l ? y(o, n) && m(o, u, i.onCloseRequest, i.onCloseCallback, n) : S(u, {
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
                        Layer: l,
                        onCloseRequest: s,
                        onCloseCallback: u
                    } = t,
                    a = null != i ? i : r();
                return h.setState(t => {
                    let i = t[n];
                    return void 0 !== i && i.some(e => {
                        let {
                            key: t
                        } = e;
                        return t === a
                    }) ? t : {
                        ...t,
                        [n]: [...i, {
                            key: a,
                            Layer: l,
                            render: e,
                            onCloseRequest: null != s ? s : () => v(a, n),
                            onCloseCallback: u,
                            instant: o
                        }]
                    }
                }), a
            }

            function v(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d(),
                    n = h.getState()[t],
                    i = null != n ? n.find(t => {
                        let {
                            key: n
                        } = t;
                        return n === e
                    }) : null;
                h.setState(n => void 0 === n[t] ? n : {
                    ...n,
                    [t]: n[t].filter(t => {
                        let {
                            key: n
                        } = t;
                        return n !== e
                    })
                }), null != i && null != i.onCloseCallback && i.onCloseCallback()
            }

            function m(e, t, n, i) {
                let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d();
                h.setState(o => void 0 === o[r] ? o : {
                    ...o,
                    [r]: o[r].map(o => o.key === e ? {
                        ...o,
                        render: t,
                        onCloseRequest: null == n ? () => v(e, r) : n,
                        onCloseCallback: i
                    } : o)
                })
            }

            function E(e) {
                for (let t of c) {
                    let n = e[t];
                    if (null != n && n.length > 0) return !0
                }
                return !1
            }

            function p() {
                return E(h.getState())
            }

            function A() {
                let e = h();
                return E(e)
            }

            function T(e) {
                var t, n;
                let {
                    default: i,
                    popout: r
                } = h();
                return r.length > 0 ? (null === (t = r.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = i.at(-1)) || void 0 === n ? void 0 : n.key) === e
            }

            function I() {
                let e = h.getState();
                for (let t in e)
                    for (let n of e[t]) v(n.key, t)
            }

            function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.DEFAULT_MODAL_CONTEXT,
                    i = e[n];
                return null != i && i.some(e => e.key === t)
            }

            function y(e, t) {
                return C(h.getState(), e, t)
            }
        },
        516256: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ModalSize: function() {
                    return r
                },
                ModalRoot: function() {
                    return R
                },
                ModalHeader: function() {
                    return O
                },
                ModalContent: function() {
                    return L
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
            var i, r, o = n("920040"),
                l = n("773670"),
                s = n("575482"),
                u = n.n(s),
                a = n("623829"),
                c = n("64379"),
                d = n("28926"),
                f = n("413197"),
                h = n("271841"),
                g = n("130969"),
                S = n("311720"),
                v = n("718776"),
                m = n("860226"),
                E = n("433600"),
                p = n("446662"),
                A = n("145131"),
                T = n("945330"),
                I = n("625611"),
                C = n("809924"),
                y = n("782340"),
                _ = n("219961");
            (i = r || (r = {})).SMALL = "small", i.MEDIUM = "medium", i.LARGE = "large", i.DYNAMIC = "dynamic";
            let N = Object.freeze({
                [r.SMALL]: _.small,
                [r.MEDIUM]: _.medium,
                [r.LARGE]: _.large,
                [r.DYNAMIC]: null
            });

            function R(e) {
                var t;
                let {
                    transitionState: n,
                    children: i,
                    size: s = r.SMALL,
                    role: h = "dialog",
                    className: m,
                    fullscreenOnMobile: E = !0,
                    hideShadow: p = !1,
                    onAnimationEnd: A = C.NOOP,
                    returnRef: T,
                    ...y
                } = e, R = n === I.ModalTransitionState.ENTERING || n === I.ModalTransitionState.ENTERED, {
                    reducedMotion: O
                } = l.useContext(f.AccessibilityPreferencesContext), L = (0, a.useSpring)({
                    opacity: R ? 1 : 0,
                    transform: R || O.enabled ? "scale(1)" : "scale(0.7)",
                    config: {
                        duration: R ? 300 : 100,
                        easing: R ? d.default.Easing.inOut(d.default.Easing.back()) : d.default.Easing.quad,
                        clamp: !0
                    },
                    onRest: A
                }), D = l.createRef();
                (0, S.useFocusLock)(D, {
                    returnRef: T
                });
                let P = l.useRef(null),
                    M = null != y["aria-label"],
                    b = null != y["aria-labelledby"],
                    F = l.useId(),
                    w = null !== (t = y["aria-labelledby"]) && void 0 !== t ? t : F,
                    U = l.useMemo(() => ({
                        headerId: w,
                        headerIdIsManaged: b
                    }), [w, b]);
                return (0, o.jsx)(I.ModalContentContext.Provider, {
                    value: U,
                    children: (0, o.jsx)(g.Dialog, {
                        className: _.focusLock,
                        role: h,
                        returnRef: T,
                        impressionType: c.ImpressionTypes.MODAL,
                        "aria-labelledby": M ? void 0 : U.headerId,
                        ...y,
                        children: (0, o.jsx)(a.animated.div, {
                            className: u(m, _.root, N[s], {
                                [_.fullscreenOnMobile]: E,
                                [_.rootWithShadow]: !p
                            }),
                            ref: P,
                            style: L,
                            children: (0, o.jsx)(v.FocusRingScope, {
                                containerRef: P,
                                children: i
                            })
                        })
                    })
                })
            }

            function O(e) {
                var t, n, i, r, s;
                let {
                    headerId: a,
                    headerIdIsManaged: c
                } = l.useContext(I.ModalContentContext);
                return (0, o.jsx)(A.default, {
                    grow: 0,
                    shrink: 0,
                    direction: null !== (t = e.direction) && void 0 !== t ? t : A.default.Direction.HORIZONTAL,
                    justify: null !== (n = e.justify) && void 0 !== n ? n : A.default.Justify.START,
                    align: null !== (i = e.align) && void 0 !== i ? i : A.default.Align.CENTER,
                    wrap: null !== (r = e.wrap) && void 0 !== r ? r : A.default.Wrap.NO_WRAP,
                    className: u(_.header, e.className, {
                        [_.separator]: null === (s = e.separator) || void 0 === s || s
                    }),
                    id: c ? void 0 : a,
                    children: e.children
                })
            }

            function L(e) {
                let {
                    className: t,
                    children: n,
                    scrollerRef: i,
                    scrollbarType: r,
                    ...l
                } = e, s = function(e) {
                    switch (null != e ? e : "thin") {
                        case "auto":
                            return p.AdvancedScrollerAuto;
                        case "none":
                            return p.AdvancedScrollerNone;
                        default:
                            return p.AdvancedScrollerThin
                    }
                }(r);
                return (0, o.jsx)(s, {
                    className: u(_.content, t),
                    ref: i,
                    ...l,
                    children: (0, o.jsx)(m.HeadingLevel, {
                        children: n
                    })
                })
            }

            function D(e) {
                var t, n, i, r, l;
                return (0, o.jsx)(A.default, {
                    grow: 0,
                    shrink: 0,
                    direction: null !== (t = e.direction) && void 0 !== t ? t : A.default.Direction.HORIZONTAL_REVERSE,
                    justify: null !== (n = e.justify) && void 0 !== n ? n : A.default.Justify.START,
                    align: null !== (i = e.align) && void 0 !== i ? i : A.default.Align.STRETCH,
                    wrap: null !== (r = e.wrap) && void 0 !== r ? r : A.default.Wrap.NO_WRAP,
                    className: u(_.footer, e.className, {
                        [_.footerSeparator]: null === (l = e.separator) || void 0 === l || l
                    }),
                    children: (0, o.jsx)(m.HeadingLevel, {
                        children: e.children
                    })
                })
            }

            function P(e) {
                return (0, o.jsx)(h.Button, {
                    focusProps: e.focusProps,
                    "aria-label": y.default.Messages.CLOSE,
                    look: h.Button.Looks.BLANK,
                    size: h.Button.Sizes.NONE,
                    onClick: e.onClick,
                    innerClassName: u({
                        [_.closeWithCircleBackground]: e.withCircleBackground
                    }),
                    className: u(e.className, {
                        [_.hideOnFullscreen]: e.hideOnFullscreen,
                        [_.close]: !e.withCircleBackground
                    }),
                    children: (0, o.jsx)(T.default, {
                        width: 24,
                        height: 24,
                        className: _.closeIcon
                    })
                })
            }

            function M(e) {
                let {
                    className: t,
                    scrollerRef: n,
                    ...i
                } = e;
                return (0, o.jsx)(E.ListThin, {
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
                    return l
                },
                DEFAULT_MODAL_CONTEXT: function() {
                    return s
                },
                POPOUT_MODAL_CONTEXT: function() {
                    return u
                },
                ModalContentContext: function() {
                    return a
                }
            });
            var i, r, o = n("773670");
            (i = r || (r = {}))[i.ENTERING = 0] = "ENTERING", i[i.ENTERED = 1] = "ENTERED", i[i.EXITING = 2] = "EXITING", i[i.EXITED = 3] = "EXITED", i[i.HIDDEN = 4] = "HIDDEN";
            let l = 300,
                s = "default",
                u = "popout",
                a = o.createContext({
                    headerId: void 0,
                    headerIdIsManaged: !1
                })
        },
        362149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("242670"),
                o = n("516256"),
                l = n("782340"),
                s = n("219961");

            function u(e) {
                return (0, i.jsx)(o.ModalRoot, {
                    ...e,
                    "aria-label": l.default.Messages.LOADING,
                    size: o.ModalSize.SMALL,
                    children: (0, i.jsx)("div", {
                        className: s.spinnerContainer,
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
                    return l
                },
                AdvancedScrollerAuto: function() {
                    return s
                }
            });
            var i = n("858850"),
                r = n("394325");
            let o = (0, i.createAdvancedScroller)(r.none, r.fade, r.customTheme),
                l = (0, i.createAdvancedScroller)(r.thin, r.fade, r.customTheme),
                s = (0, i.createAdvancedScroller)(r.auto, r.fade, r.customTheme)
        },
        858850: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createAdvancedScroller: function() {
                    return a
                }
            });
            var i = n("920040"),
                r = n("773670"),
                o = n("575482"),
                l = n.n(o),
                s = n("718776"),
                u = n("462977");

            function a(e, t, n) {
                let o = (0, u.getScrollbarSpecs)(e);
                return r.forwardRef(function(a, c) {
                    let {
                        children: d,
                        className: f,
                        dir: h = "ltr",
                        orientation: g = "vertical",
                        fade: S = !1,
                        customTheme: v = !1,
                        paddingFix: m = !0,
                        style: E,
                        ...p
                    } = a, {
                        scrollerRef: A,
                        getScrollerState: T
                    } = (0, u.useUncachedScrollerState)(), I = (0, u.useScrollSpring)(A, g);
                    r.useImperativeHandle(c, () => ({
                        getScrollerNode: () => A.current,
                        getScrollerState: T,
                        ...(0, u.getAnimatedScrollHelpers)(A, T, I, g)
                    }), [A, T, g, I]);
                    let C = (0, u.usePaddingFixes)({
                        paddingFix: m,
                        orientation: g,
                        dir: h,
                        className: f,
                        scrollerRef: A,
                        specs: o
                    });
                    return (0, i.jsx)("div", {
                        ref: A,
                        className: l(f, {
                            [e]: !0,
                            [t]: S,
                            [n]: v
                        }),
                        style: (0, u.getMergedOrientationStyles)(E, g),
                        dir: h,
                        ...p,
                        children: (0, i.jsxs)(s.FocusRingScope, {
                            containerRef: A,
                            children: [d, C]
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
            });
            var r = class e {
                mergeProps(e) {
                    let {
                        sectionHeight: t,
                        rowHeight: n,
                        footerHeight: i,
                        listHeaderHeight: r,
                        paddingTop: o,
                        paddingBottom: l,
                        sections: s,
                        getAnchorId: u
                    } = e;
                    this.sections = s, this.sectionHeight = t, this.rowHeight = n, this.footerHeight = i, this.listHeaderHeight = r, this.uniform = "number" == typeof n, this.paddingTop = o, this.paddingBottom = l, this.getAnchorId = null != u ? u : this.getAnchorId
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
                        l = 0,
                        s = [],
                        u = o => (r = n, (n += o) < e) ? (i += o, !1) : !(r > t) && !0;
                    u(this.getListHeaderHeight()) && s.push({
                        type: "header",
                        section: -1,
                        offsetTop: r
                    });
                    for (let e = 0; e < this.sections.length; e++) {
                        let t = this.sections[e];
                        if (0 !== t) {
                            if (u(this.getHeightForSection(e)) && s.push({
                                    type: "section",
                                    section: e,
                                    listIndex: l,
                                    offsetTop: r,
                                    anchorId: this.getAnchorId(e)
                                }), l += 1, this.uniform) {
                                let n = this.getHeightForRow(e, 0);
                                for (let i = 0; i < t; i++) u(n) && s.push({
                                    type: "row",
                                    section: e,
                                    listIndex: l,
                                    row: i,
                                    rowIndex: o,
                                    offsetTop: r,
                                    anchorId: this.getAnchorId(e, i)
                                }), o += 1, l += 1
                            } else
                                for (let n = 0; n < t; n++) u(this.getHeightForRow(e, n)) && s.push({
                                    type: "row",
                                    section: e,
                                    listIndex: l,
                                    row: n,
                                    rowIndex: o,
                                    offsetTop: r,
                                    anchorId: this.getAnchorId(e, n)
                                }), o += 1, l += 1;
                            u(this.getHeightForFooter(e)) && s.push({
                                type: "footer",
                                section: e,
                                offsetTop: r
                            })
                        }
                    }
                    return {
                        spacerTop: i,
                        totalHeight: n + this.paddingBottom,
                        items: s
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
                            let l = this.getHeightForRow(r, 0);
                            r === e && null != t ? (i += l * t, o = !0) : i += l * n
                        } else
                            for (let l = 0; l < n; l++)
                                if (r < e || r === e && null != t && l < t) i += this.getHeightForRow(r, l);
                                else if (r === e && null != t && l === t) {
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
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            let i = 1 / 240;
            class r {
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
                        r = -this.friction * e,
                        o = (n + r) / this.mass;
                    return Math.abs(e += o * i) > this.maxVelocity && (e = this.maxVelocity * (e > 0 ? 1 : -1)), {
                        from: t += e * i,
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
                    mass: r = 1,
                    threshold: o = .001,
                    clamp: l = !1,
                    maxVelocity: s = 1 / 0,
                    getNodeWindow: u = () => window
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
                        var t, n, r, o;
                        if (null == this.last) {
                            this.last = e, this.nextTick = null !== (n = null === (t = this.nodeWindow) || void 0 === t ? void 0 : t.requestAnimationFrame(this.update)) && void 0 !== n ? n : -1;
                            return
                        }
                        for (this.accumulator = Math.min((e - this.last) / 1e3 + this.accumulator, 2); this.accumulator > i;) {
                            this.accumulator -= i;
                            let {
                                vel: e,
                                from: t,
                                accel: n
                            } = this.getUpdates(this.vel, this.from);
                            if (this.vel = e, this.clamp && (t === this.target || t < this.target && this.from > this.target || t > this.target && this.from < this.target) || Math.abs(n * i) < this.threshold) {
                                this.stop(this.target);
                                return
                            }
                            this.from = t
                        }
                        let {
                            from: l
                        } = this;
                        if (this.accumulator > 0) {
                            let {
                                from: e
                            } = this.getUpdates(this.vel, l), t = (e - l) * (this.accumulator / i);
                            l += t
                        }
                        this.callback(l, this.abort), this.animating && (this.last = e, this.nextTick = null !== (o = null === (r = this.nodeWindow) || void 0 === r ? void 0 : r.requestAnimationFrame(this.update)) && void 0 !== o ? o : -1)
                    }, this.callback = e, this.from = 0, this.tension = t, this.friction = n, this.mass = r, this.maxVelocity = s, this.threshold = o, this.clamp = l, this.getNodeWindow = u
                }
            }
        },
        87430: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMasonryListSectionHeaderKey: function() {
                    return r
                },
                getMasonryListSectionIndex: function() {
                    return o
                },
                default: function() {
                    return s
                }
            });
            let i = e => "__section__".concat(e),
                r = e => "__section_header__".concat(e),
                o = e => parseInt(e.replace(/^__section__/, ""), 10),
                l = () => 0;
            class s {
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
                        getItemHeight: l = this.getItemHeight,
                        getSectionHeight: s = this.getSectionHeight,
                        bufferWidth: u = this.bufferWidth,
                        padding: a = this.padding,
                        paddingVertical: c = this.paddingVertical,
                        paddingHorizontal: d = this.paddingHorizontal,
                        sectionGutter: f = this.sectionGutter,
                        dir: h = this.dir
                    } = e;
                    (this.sections !== t || this.columns !== n || this.itemGutter !== i || this.removeEdgeItemGutters !== r || this.getItemKey !== o || this.getSectionHeight !== s || this.getItemHeight !== l || this.bufferWidth !== u || this.padding !== a || this.paddingVertical !== c || this.paddingHorizontal !== d || this.sectionGutter !== f || this.dir !== h) && (this.needsFullCompute = !0, this.sections = t, this.columns = n, this.itemGutter = i, this.getItemKey = o, this.getSectionHeight = s, this.getItemHeight = l, this.bufferWidth = u, this.padding = a, this.paddingVertical = c, this.paddingHorizontal = d, this.sectionGutter = f, this.dir = h)
                }
                computeFullCoords() {
                    if (!this.needsFullCompute) return;
                    let {
                        columns: e,
                        getItemKey: t,
                        getItemHeight: n,
                        itemGutter: o,
                        getSectionHeight: l,
                        bufferWidth: s,
                        removeEdgeItemGutters: u
                    } = this, a = "rtl" === this.dir ? "right" : "left";
                    this.coordsMap = {}, this.gridData = {
                        boundaries: [],
                        coordinates: {}
                    }, this.currentRow = 0, this.lastColumnIndex = 0;
                    let c = this.getPaddingHorizontal(),
                        d = this.getPaddingVertical();
                    this.columnHeights = Array(e).fill(d), this.columnWidth = (s - 2 * c - o * (e - 1) - (u ? o : 0)) / e, this.itemGrid = [];
                    let f = 0;
                    for (; f < this.sections.length;) {
                        this.gridData.boundaries[f] = this.currentRow, this.currentRow = 0, this.lastColumnIndex = 0;
                        let s = this.sections[f],
                            u = 0,
                            d = l(f),
                            S = this.getMaxColumnHeight(this.columnHeights);
                        f > 0 && (S = S - o + this.getSectionGutter());
                        let v = d > 0 ? d + o : 0;
                        for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = S + v;
                        for (; u < s;) {
                            var h, g;
                            let e = t(f, u);
                            if (null == e) {
                                u++;
                                continue
                            }
                            let [i, r] = (g = this.columnHeights).reduce((e, t, n) => t < e[0] ? [t, n] : e, [g[0], 0]);
                            r < this.lastColumnIndex && this.currentRow++, this.lastColumnIndex = r;
                            let l = n(f, u, this.columnWidth),
                                s = {
                                    position: "absolute",
                                    [a]: this.columnWidth * r + o * (r + 1) - o,
                                    width: this.columnWidth,
                                    top: i - S,
                                    height: l
                                },
                                c = {
                                    section: f,
                                    row: this.currentRow,
                                    column: r
                                };
                            this.coordsMap[e] = s, this.gridData.coordinates[e] = c, this.columnHeights[r] = i + l + o, this.itemGrid[r] = null !== (h = this.itemGrid[r]) && void 0 !== h ? h : [], this.itemGrid[r].push(e), u++
                        }
                        d > 0 && (this.coordsMap[r(f)] = {
                            position: "sticky",
                            [a]: 0,
                            width: this.columnWidth * e + o * e,
                            top: 0,
                            height: d
                        }), this.coordsMap[i(f)] = {
                            position: "absolute",
                            [a]: c,
                            width: this.columnWidth * e + o * (e - 1),
                            top: S,
                            height: this.getMaxColumnHeight(this.columnHeights) - S - o
                        }, f++
                    }
                    this.columnHeights = this.columnHeights.map(e => e - o + d), this.totalHeight = this.getMaxColumnHeight(), this.visibleSections = {}, this.needsFullCompute = !1
                }
                computeVisibleSections(e, t) {
                    this.computeFullCoords();
                    let {
                        getItemKey: n,
                        coordsMap: r
                    } = this;
                    this.visibleSections = {};
                    let o = 0;
                    for (; o < this.sections.length;) {
                        let l = this.sections[o],
                            s = i(o),
                            u = r[s];
                        if (null == u) {
                            o++;
                            continue
                        }
                        let {
                            top: a
                        } = u, c = a + u.height;
                        if (a > t) break;
                        if (c < e) {
                            o++;
                            continue
                        }
                        let d = 0,
                            f = 1;
                        for (c < t && c > e && (d = l - 1, f = -1), this.visibleSections[s] = []; d >= 0 && d < l;) {
                            let i = n(o, d),
                                l = null != i ? r[i] : null;
                            if (null == i || null == l) {
                                d += f;
                                continue
                            }
                            let {
                                top: u,
                                height: c
                            } = l;
                            u + a > e - c && u + a < t && (-1 === f ? this.visibleSections[s].unshift([i, o, d]) : this.visibleSections[s].push([i, o, d])), d += f
                        }
                        if (a < e && c > t) break;
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
            });
            var i = n("903083");

            function r(e, t, n, r) {
                let o = (0, i.default)(e, t, r),
                    l = (e, t) => n.computeScrollPosition(e, t);
                return {
                    ...o,
                    getScrollPosition: l,
                    isItemVisible(e, n) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            [r, o] = l(e, n),
                            s = t();
                        return i ? r >= s.scrollTop && r + o <= s.scrollTop + s.offsetHeight : r + o >= s.scrollTop && r <= s.scrollTop + s.offsetHeight
                    },
                    scrollToIndex(e) {
                        let {
                            section: t,
                            row: n,
                            animate: i,
                            callback: r,
                            padding: s = 0
                        } = e, [u, a] = l(t, n);
                        o.scrollIntoViewRect({
                            start: u,
                            end: u + a,
                            padding: s,
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
            var i = n("117064");

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
                    l = e => {
                        let {
                            to: i,
                            animate: l,
                            callback: s
                        } = e, {
                            scrollPosition: u,
                            scrollSize: a,
                            offsetSize: c
                        } = r(t(), o);
                        n.to({
                            to: function(e, t, n) {
                                let i = t - n + 1;
                                return e >= i - 1 ? i : Math.max(0, e)
                            }(i, a, c),
                            from: u,
                            animate: l,
                            callback: s
                        })
                    },
                    s = e => {
                        let {
                            start: n,
                            end: i,
                            padding: s = 0,
                            animate: u,
                            callback: a
                        } = e, {
                            scrollPosition: c,
                            offsetSize: d
                        } = r(t(), o);
                        n -= s, i += s, n >= c && i <= c + d ? null != a && a() : n < c ? l({
                            to: n,
                            animate: u,
                            callback: a
                        }) : l({
                            to: i - d,
                            animate: u,
                            callback: a
                        })
                    };
                return {
                    spring: n,
                    scrollTo: l,
                    mergeTo: n.mergeTo,
                    scrollIntoViewRect: s,
                    scrollIntoViewNode(t) {
                        let {
                            node: n,
                            padding: r = 0,
                            animate: l = !1,
                            callback: u
                        } = t, {
                            current: a
                        } = e;
                        if (null == a) return;
                        let {
                            offset: c,
                            offsetSize: d
                        } = function(e, t, n) {
                            let r = "horizontal" === t ? e.offsetWidth : e.offsetHeight,
                                o = "horizontal" === t ? e.offsetLeft : e.offsetTop,
                                l = e.offsetParent;
                            for (; null != l && l !== n;)(0, i.isElement)(l, HTMLElement) ? (o += "horizontal" === t ? l.offsetLeft : l.offsetTop, l = l.offsetParent) : l = l.parentNode;
                            return {
                                offset: o,
                                offsetSize: r
                            }
                        }(n, o, a);
                        s({
                            start: c,
                            end: c + d,
                            padding: r,
                            animate: l,
                            callback: u
                        })
                    },
                    scrollPageUp() {
                        let {
                            animate: e = !1,
                            callback: n
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                            scrollPosition: i,
                            offsetSize: s
                        } = r(t(), o);
                        l({
                            to: i - .9 * s,
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
                            offsetSize: s
                        } = r(t(), o);
                        l({
                            to: i + .9 * s,
                            animate: e,
                            callback: n
                        })
                    },
                    scrollToTop() {
                        let {
                            animate: e = !1,
                            callback: t
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        l({
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
                        l({
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
                    return l
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

            function l(e) {
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
            });
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
                    return l.default
                },
                useResizeObserverSubscription: function() {
                    return s.default
                },
                useUncachedScrollerState: function() {
                    return u.default
                },
                useVirtualizedMasonryState: function() {
                    return a.default
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
                    return f.default
                },
                getMasonryListSectionHeaderKey: function() {
                    return f.getMasonryListSectionHeaderKey
                },
                getMasonryListSectionIndex: function() {
                    return f.getMasonryListSectionIndex
                },
                getMergedOrientationStyles: function() {
                    return h.default
                },
                useScrollSpring: function() {
                    return g.default
                },
                getScrollbarSpecs: function() {
                    return S.default
                }
            });
            var i = n("903083"),
                r = n("431182"),
                o = n("828426");
            n("644141");
            var l = n("378242"),
                s = n("674424");
            n("17182");
            var u = n("358198"),
                a = n("232000"),
                c = n("238806"),
                d = n("253233"),
                f = n("87430");
            n("336688");
            var h = n("84372"),
                g = n("595604"),
                S = n("436648")
        },
        828426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("773670");
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
                                offsetHeight: l,
                                offsetWidth: s
                            } = n;
                            t.current = {
                                scrollTop: e,
                                scrollLeft: i,
                                scrollHeight: r,
                                scrollWidth: o,
                                offsetHeight: l,
                                offsetWidth: s,
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
            });
            var i = n("773670"),
                r = n("865768");

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
            var i = n("920040"),
                r = n("773670");

            function o(e) {
                let {
                    paddingFix: t = !0,
                    orientation: n = "vertical",
                    dir: o,
                    className: l,
                    scrollerRef: s,
                    specs: u
                } = e, a = (0, r.useRef)(null);
                return (0, r.useLayoutEffect)(() => {
                    var e;
                    let {
                        current: i
                    } = s;
                    if (null == i || "auto" === n || !t) return;
                    let r = null === (e = i.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
                    if (null == r) return;
                    i.style.paddingTop = "", i.style.paddingBottom = "", i.style.paddingLeft = "", i.style.paddingRight = "";
                    let l = r.getComputedStyle(i);
                    if ("vertical" === n) {
                        if ("rtl" === o) {
                            let e = parseInt(l.getPropertyValue("padding-left"), 10);
                            i.style.paddingLeft = "".concat(Math.max(0, e - u.width), "px"), i.style.paddingRight = ""
                        } else {
                            let e = parseInt(l.getPropertyValue("padding-right"), 10);
                            i.style.paddingRight = "".concat(Math.max(0, e - u.width), "px"), i.style.paddingLeft = ""
                        }
                        let {
                            current: e
                        } = a;
                        null != e && (e.style.height = l.getPropertyValue("padding-bottom"))
                    } else {
                        let e = parseInt(l.getPropertyValue("padding-bottom"), 10);
                        i.style.paddingBottom = "".concat(Math.max(0, e - u.height), "px");
                        let {
                            current: t
                        } = a;
                        null != t && (t.style.width = l.getPropertyValue("padding-left"))
                    }
                }, [n, o, l, s, t, u]), (0, r.useMemo)(() => {
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
                        ref: a
                    }) : null
                }, [n])
            }
        },
        674424: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("773670"),
                r = n("865768");
            let o = Object.freeze({
                box: "border-box"
            });

            function l(e) {
                let {
                    ref: t,
                    onUpdate: n,
                    resizeObserver: l,
                    listenerMap: s,
                    key: u
                } = e;
                (0, i.useLayoutEffect)(() => {
                    let {
                        current: e
                    } = t;
                    return null != e && (s.set(e, e => {
                        (0, r.flushSync)(() => {
                            n(e, u)
                        })
                    }), l.observe(e, o)), () => {
                        null != e && (l.unobserve(e), s.delete(e))
                    }
                }, [n, l, t, s, u])
            }
        },
        17182: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("773670");

            function r(e, t, n) {
                return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1]
            }
            let o = [0, 0];

            function l(e) {
                let {
                    chunkSize: t,
                    getScrollerState: n,
                    forceUpdate: l
                } = e, {
                    dirty: s,
                    scrollTop: u,
                    offsetHeight: a
                } = n();
                (0, i.useLayoutEffect)(() => {
                    s > 0 && l()
                }, [s, l]);
                let c = (0, i.useRef)(o);
                c.current = r(u, a, t);
                let [d, f] = c.current, h = (0, i.useCallback)(e => {
                    let {
                        dirty: i,
                        scrollTop: o,
                        offsetHeight: s
                    } = n();
                    if (i > 0) return;
                    let [u, a] = r(o, s, t);
                    u !== c.current[0] ? l() : 2 === e && a !== c.current[1] && l()
                }, [l, t, n]);
                return {
                    forceUpdateOnChunkChange: h,
                    chunkStart: d,
                    chunkEnd: f,
                    dirty: s
                }
            }
        },
        595604: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("773670"),
                r = n("336688");

            function o(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
                    [o] = (0, i.useState)(() => new r.default({
                        tension: 200,
                        friction: 35,
                        mass: 2,
                        clamp: !0,
                        callback: (t, i) => {
                            let {
                                current: r
                            } = e;
                            if (null == r) return i();
                            "horizontal" === n ? r.scrollLeft = t : r.scrollTop = t
                        },
                        getNodeWindow: () => {
                            var n, i;
                            return null !== (t = null === (i = e.current) || void 0 === i ? void 0 : null === (n = i.ownerDocument) || void 0 === n ? void 0 : n.defaultView) && void 0 !== t ? t : null
                        }
                    }));
                return o
            }
        },
        358198: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("773670");
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
                                offsetWidth: l
                            } = t;
                            return {
                                scrollTop: e,
                                scrollLeft: n,
                                scrollHeight: i,
                                scrollWidth: r,
                                offsetHeight: o,
                                offsetWidth: l,
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
                    return u
                }
            });
            var i = n("773670"),
                r = n("87430"),
                o = n("644141"),
                l = n("17182");
            let s = Object.freeze({
                coordsMap: {},
                visibleSections: {},
                totalHeight: 0,
                gridData: {
                    boundaries: [],
                    coordinates: {}
                }
            });

            function u(e) {
                let {
                    sections: t,
                    columns: n,
                    getItemKey: u,
                    getItemHeight: a,
                    getSectionHeight: c,
                    chunkSize: d = 250,
                    getScrollerState: f,
                    itemGutter: h,
                    removeEdgeItemGutters: g,
                    sectionGutter: S,
                    padding: v,
                    paddingVertical: m,
                    paddingHorizontal: E,
                    dir: p
                } = e, A = (0, o.default)(), T = (0, i.useRef)(s), [I] = (0, i.useState)(() => new r.default), C = f(), {
                    offsetWidth: y
                } = C, {
                    dirty: _,
                    chunkStart: N,
                    chunkEnd: R,
                    forceUpdateOnChunkChange: O
                } = (0, l.default)({
                    chunkSize: d,
                    getScrollerState: f,
                    forceUpdate: A
                });
                return T.current = (0, i.useMemo)(() => _ > 0 ? T.current : (I.mergeProps({
                    sections: t,
                    columns: n,
                    getItemKey: u,
                    getItemHeight: a,
                    getSectionHeight: c,
                    bufferWidth: y,
                    itemGutter: h,
                    removeEdgeItemGutters: g,
                    sectionGutter: S,
                    padding: v,
                    paddingVertical: m,
                    paddingHorizontal: E,
                    dir: p
                }), I.computeVisibleSections(Math.max(0, N * d), R * d), I.getState()), [_, I, t, n, u, a, c, N, R, d, h, g, S, v, m, E, y, p]), {
                    ...T.current,
                    masonryComputer: I,
                    forceUpdateOnChunkChange: O,
                    forceUpdate: A
                }
            }
        },
        238806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                useVirtualizedAnchor: function() {
                    return a
                }
            });
            var i = n("773670"),
                r = n("253233"),
                o = n("644141"),
                l = n("17182");
            let s = Object.freeze({
                spacerTop: 0,
                totalHeight: 0,
                items: [],
                isSidebarVisible: !1
            });

            function u(e) {
                let {
                    sections: t,
                    sectionHeight: n,
                    rowHeight: u,
                    footerHeight: a,
                    sidebarHeight: c,
                    listHeaderHeight: d,
                    chunkSize: f = 256,
                    paddingTop: h = 0,
                    paddingBottom: g = 0,
                    getScrollerState: S,
                    getAnchorId: v
                } = e, m = (0, o.default)(), E = (0, i.useRef)(s), [p] = (0, i.useState)(() => new r.default), {
                    dirty: A,
                    chunkStart: T,
                    chunkEnd: I,
                    forceUpdateOnChunkChange: C
                } = (0, l.default)({
                    chunkSize: f,
                    getScrollerState: S,
                    forceUpdate: m
                }), {
                    items: y
                } = E.current, _ = null, {
                    scrollTop: N
                } = S();
                for (let e of y) {
                    if (0 === N) break;
                    if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
                    let t = "row" === e.type ? e.row : void 0;
                    if (e.offsetTop >= N) {
                        _ = {
                            id: e.anchorId,
                            section: e.section,
                            row: t,
                            scrollOffset: e.offsetTop - N
                        };
                        break
                    }
                }
                let R = (0, i.useMemo)(() => {
                        let e = Math.max(0, T * f);
                        return null != c && e < c
                    }, [f, T, c]),
                    O = (0, i.useMemo)(() => A > 0 ? E.current : (p.mergeProps({
                        sectionHeight: n,
                        rowHeight: u,
                        footerHeight: a,
                        listHeaderHeight: d,
                        paddingBottom: g,
                        paddingTop: h,
                        sections: t,
                        getAnchorId: v
                    }), p.compute(Math.max(0, T * f), I * f)), [A, T, I, n, u, a, d, g, h, t, p, f, v]);
                return (0, i.useLayoutEffect)(() => void(E.current = O)), {
                    ...O,
                    listComputer: p,
                    forceUpdateOnChunkChange: C,
                    anchor: _,
                    isSidebarVisible: R
                }
            }

            function a(e) {
                let {
                    scrollerRef: t,
                    anchor: n,
                    getScrollerState: r,
                    listComputer: o,
                    getAnchorId: l,
                    totalHeight: s
                } = e;
                (0, i.useLayoutEffect)(() => {
                    let {
                        current: e
                    } = t, {
                        scrollTop: i
                    } = r();
                    if (null == n || null == n.row || null == e || null == l || 0 === i) return;
                    let s = t => {
                        if (t < 0 || t >= o.sections[n.section]) return !1;
                        let r = l(n.section, n.row);
                        if (r !== n.id) return !1;
                        let [s] = o.computeScrollPosition(n.section, t), u = s - n.scrollOffset;
                        return i !== u && (e.scrollTop = u), !0
                    };
                    if (!s(n.row)) !s(n.row - 1) && s(n.row + 1)
                }, [s])
            }
        },
        242670: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SpinnerTypes: function() {
                    return r
                },
                Spinner: function() {
                    return f
                }
            });
            var i, r, o = n("920040"),
                l = n("773670"),
                s = n("575482"),
                u = n.n(s),
                a = n("413197"),
                c = n("782340"),
                d = n("152852");
            (i = r || (r = {})).WANDERING_CUBES = "wanderingCubes", i.CHASING_DOTS = "chasingDots", i.PULSING_ELLIPSIS = "pulsingEllipsis", i.SPINNING_CIRCLE = "spinningCircle", i.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple", i.LOW_MOTION = "lowMotion";

            function f(e) {
                let {
                    type: t = r.WANDERING_CUBES,
                    animated: n = !0,
                    className: i,
                    itemClassName: s,
                    "aria-label": f,
                    ...h
                } = e, {
                    reducedMotion: g
                } = l.useContext(a.AccessibilityPreferencesContext), S = g.enabled ? function(e) {
                    switch (e) {
                        case r.WANDERING_CUBES:
                        case r.CHASING_DOTS:
                            return r.LOW_MOTION;
                        default:
                            return e
                    }
                }(t) : t;
                if (f = null != f ? f : c.default.Messages.LOADING, S === r.SPINNING_CIRCLE || S === r.SPINNING_CIRCLE_SIMPLE) return (0, o.jsx)("div", {
                    className: u(d.spinner, d[S], i, {
                        [d.stopAnimation]: !n
                    }),
                    role: "img",
                    "aria-label": f,
                    ...h,
                    children: (0, o.jsx)("div", {
                        className: d.spinningCircleInner,
                        children: (0, o.jsxs)("svg", {
                            className: d.circular,
                            viewBox: "25 25 50 50",
                            children: [S === r.SPINNING_CIRCLE && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("circle", {
                                    className: u(d.path, d.path3, s),
                                    cx: "50",
                                    cy: "50",
                                    r: "20"
                                }), (0, o.jsx)("circle", {
                                    className: u(d.path, d.path2, s),
                                    cx: "50",
                                    cy: "50",
                                    r: "20"
                                })]
                            }), (0, o.jsx)("circle", {
                                className: u(d.path, s),
                                cx: "50",
                                cy: "50",
                                r: "20"
                            })]
                        })
                    })
                });
                let v = u(d.item, s);
                return (0, o.jsx)("span", {
                    className: u(d.spinner, i, {
                        [d.stopAnimation]: !n
                    }),
                    role: "img",
                    "aria-label": f,
                    ...h,
                    children: (0, o.jsxs)("span", {
                        className: u(d.inner, d[S]),
                        children: [(0, o.jsx)("span", {
                            className: v
                        }), (0, o.jsx)("span", {
                            className: v
                        }), S === r.PULSING_ELLIPSIS || S === r.LOW_MOTION ? (0, o.jsx)("span", {
                            className: v
                        }) : null]
                    })
                })
            }
            f.Type = r
        },
        36763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ThemeContextFlags: function() {
                    return r
                },
                setThemeFlag: function() {
                    return u
                },
                RootThemeContextProvider: function() {
                    return d
                },
                ThemeContextProvider: function() {
                    return f
                },
                DisableCustomTheme: function() {
                    return h
                },
                useThemeContext: function() {
                    return g
                },
                UseThemeContext: function() {
                    return S
                }
            });
            var i, r, o = n("920040"),
                l = n("773670"),
                s = n("809924");

            function u(e, t) {
                return e | t
            }

            function a(e) {
                let t = JSON.stringify(e);
                return {
                    ...e,
                    key: t
                }
            }(i = r || (r = {}))[i.MOBILE_LEGACY_AMOLED_MODE_ENABLED = 1] = "MOBILE_LEGACY_AMOLED_MODE_ENABLED", i[i.MOBILE_REDESIGN_ENABLED = 2] = "MOBILE_REDESIGN_ENABLED";
            let c = l.createContext({
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
                    theme: n = s.ThemeTypes.DARK,
                    primaryColor: i = null,
                    secondaryColor: r = null,
                    gradient: u = null,
                    flags: d = 0
                } = e, f = l.useMemo(() => a({
                    theme: n,
                    primaryColor: i,
                    secondaryColor: r,
                    gradient: u,
                    flags: d
                }), [n, d, i, r, u]);
                return (0, o.jsx)(c.Provider, {
                    value: f,
                    children: t
                })
            }

            function f(e) {
                let {
                    children: t,
                    theme: n,
                    primaryColor: i,
                    secondaryColor: r,
                    gradient: s,
                    flags: u
                } = e, d = l.useContext(c), f = l.useMemo(() => a({
                    theme: null != n ? n : d.theme,
                    primaryColor: null != i ? i : d.primaryColor,
                    secondaryColor: null != r ? r : d.secondaryColor,
                    gradient: null != s ? s : d.gradient,
                    flags: null != u ? u : d.flags
                }), [n, u, i, r, d, s]);
                return (0, o.jsx)(c.Provider, {
                    value: f,
                    children: t
                })
            }

            function h(e) {
                let t = g(),
                    n = l.useMemo(() => a({
                        ...t,
                        primaryColor: null,
                        secondaryColor: null
                    }), [t]);
                return (0, o.jsx)(c.Provider, {
                    value: n,
                    children: e.children
                })
            }

            function g() {
                let e = l.useContext(c);
                if (null == e) throw Error("useThemeContext must be used within a ThemeContext.Provider");
                return e
            }

            function S(e) {
                let {
                    children: t
                } = e, n = g();
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
            var i = n("809924");

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
                    return l.isThemeDark
                },
                isThemeLight: function() {
                    return l.isThemeLight
                },
                getContrastingColor: function() {
                    return s.getContrastingColor
                },
                WCAGContrastRatios: function() {
                    return s.WCAGContrastRatios
                }
            });
            var i = n("539826");
            n("413197");
            var r = n("209613");
            n("247716");
            var o = n("36763"),
                l = n("755854"),
                s = n("390534")
        },
        206230: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("498225"),
                r = n("173333"),
                o = n("819855"),
                l = n("913144"),
                s = n("845579"),
                u = n("374363"),
                a = n("922932"),
                c = n("49111"),
                d = n("894488");
            let f = {
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
                h = f,
                g = {
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
                    this.waitFor(u.default), isNaN((h = {
                        ...f,
                        ...null != e ? e : null
                    }).fontSize) && (h.fontSize = c.Accessibility.FONT_SIZE_DEFAULT), 0 > d.MESSAGE_GROUP_SPACING.indexOf(null != h.messageGroupSpacing ? h.messageGroupSpacing : -1) && (h.messageGroupSpacing = null)
                }
                get fontScale() {
                    return h.fontSize / c.Accessibility.FONT_SIZE_DEFAULT * 100
                }
                get fontSize() {
                    return h.fontSize
                }
                get isFontScaledUp() {
                    return h.fontSize > c.Accessibility.FONT_SIZE_DEFAULT
                }
                get isFontScaledDown() {
                    return h.fontSize < c.Accessibility.FONT_SIZE_DEFAULT
                }
                get fontScaleClass() {
                    var e;
                    let t = null !== (e = g[this.fontSize]) && void 0 !== e ? e : "";
                    return this.isFontScaledUp ? "a11y-font-scaled-up ".concat(t) : this.isFontScaledDown ? "a11y-font-scaled-down ".concat(t) : "".concat(t)
                }
                get zoom() {
                    return h.zoom
                }
                get isZoomedIn() {
                    return h.zoom > c.Accessibility.ZOOM_DEFAULT
                }
                get isZoomedOut() {
                    return h.zoom < c.Accessibility.ZOOM_DEFAULT
                }
                get keyboardModeEnabled() {
                    return h.keyboardModeEnabled
                }
                get colorblindMode() {
                    return h.colorblindMode
                }
                get lowContrastMode() {
                    return h.lowContrastMode
                }
                get saturation() {
                    return h.saturation
                }
                get desaturateUserColors() {
                    return h.desaturateUserColors
                }
                get forcedColorsModalSeen() {
                    return h.forcedColorsModalSeen
                }
                get keyboardNavigationExplainerModalSeen() {
                    return h.keyboardNavigationExplainerModalSeen
                }
                get messageGroupSpacing() {
                    return null != h.messageGroupSpacing ? h.messageGroupSpacing : s.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING
                }
                get isMessageGroupSpacingIncreased() {
                    let e = s.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING;
                    return this.messageGroupSpacing > e
                }
                get isMessageGroupSpacingDecreased() {
                    let e = s.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING;
                    return this.messageGroupSpacing < e
                }
                get isSubmitButtonEnabled() {
                    return h.submitButtonEnabled
                }
                get syncProfileThemeWithUserTheme() {
                    return h.syncProfileThemeWithUserTheme
                }
                get systemPrefersReducedMotion() {
                    return h.systemPrefersReducedMotion
                }
                get rawPrefersReducedMotion() {
                    return h.prefersReducedMotion
                }
                get useReducedMotion() {
                    switch (h.prefersReducedMotion) {
                        case "no-preference":
                            return !1;
                        case "reduce":
                            return !0;
                        default:
                            return "reduce" === h.systemPrefersReducedMotion
                    }
                }
                get systemForcedColors() {
                    return h.systemForcedColors
                }
                get syncForcedColors() {
                    return h.syncForcedColors
                }
                get useForcedColors() {
                    return !!h.syncForcedColors && "active" === h.systemForcedColors || !1
                }
                get systemPrefersContrast() {
                    return h.systemPrefersContrast
                }
                get systemPrefersCrossfades() {
                    return h.systemPrefersCrossfades
                }
                get alwaysShowLinkDecorations() {
                    return h.alwaysShowLinkDecorations
                }
                get roleStyle() {
                    return h.roleStyle
                }
                getUserAgnosticState() {
                    return h
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
            let v = new S(l.default, {
                ACCESSIBILITY_SET_FONT_SIZE: function(e) {
                    var t;
                    let n = (t = e.fontSize, c.Accessibility.FONT_SIZES.indexOf(t) >= 0 ? t : c.Accessibility.FONT_SIZE_DEFAULT);
                    if (n > c.Accessibility.FONT_SIZE_MAX || n < c.Accessibility.FONT_SIZE_MIN || h.fontSize === n) return !1;
                    (h = {
                        ...h
                    }).fontSize = n
                },
                ACCESSIBILITY_SET_ZOOM: function(e) {
                    if (e.zoom < c.Accessibility.ZOOM_MIN || e.zoom > c.Accessibility.ZOOM_MAX || h.zoom === e.zoom) return !1;
                    (h = {
                        ...h
                    }).zoom = e.zoom, a.default.setZoomFactor(h.zoom)
                },
                ACCESSIBILITY_RESET_TO_DEFAULT: function() {
                    let e = h.fontSize !== c.Accessibility.FONT_SIZE_DEFAULT,
                        t = h.zoom !== c.Accessibility.ZOOM_DEFAULT;
                    if (!e && !t) return !1;
                    (h = {
                        ...h
                    }).fontSize !== c.Accessibility.FONT_SIZE_DEFAULT && (h.fontSize = c.Accessibility.FONT_SIZE_DEFAULT), h.zoom !== c.Accessibility.ZOOM_DEFAULT && (h.zoom = c.Accessibility.ZOOM_DEFAULT, a.default.setZoomFactor(h.zoom))
                },
                ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function() {
                    if (h.keyboardModeEnabled) return !1;
                    (h = {
                        ...h
                    }).keyboardModeEnabled = !0
                },
                ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function() {
                    if (!h.keyboardModeEnabled) return !1;
                    (h = {
                        ...h
                    }).keyboardModeEnabled = !1
                },
                ACCESSIBILITY_COLORBLIND_TOGGLE: function() {
                    (h = {
                        ...h
                    }).colorblindMode = !h.colorblindMode
                },
                ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function() {
                    (h = {
                        ...h
                    }).lowContrastMode = !h.lowContrastMode
                },
                ACCESSIBILITY_SET_SATURATION: function(e) {
                    (h = {
                        ...h
                    }).saturation = e.saturation
                },
                ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function() {
                    (h = {
                        ...h
                    }).desaturateUserColors = !h.desaturateUserColors
                },
                ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
                    var t;
                    return h = {
                        ...h,
                        systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : "none"
                    }, !0
                },
                ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function(e) {
                    if (h.systemPrefersContrast === e.systemPrefersContrast) return !1;
                    h = {
                        ...h,
                        systemPrefersContrast: e.systemPrefersContrast
                    }
                },
                ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function(e) {
                    if (h.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
                    h = {
                        ...h,
                        systemPrefersReducedMotion: e.systemPrefersReducedMotion
                    }
                },
                ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function(e) {
                    if (h.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
                    h = {
                        ...h,
                        systemPrefersCrossfades: e.systemPrefersCrossfades
                    }
                },
                ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function(e) {
                    if (h.prefersReducedMotion === e.prefersReducedMotion) return !1;
                    h = {
                        ...h,
                        prefersReducedMotion: e.prefersReducedMotion
                    }
                },
                ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function(e) {
                    h.syncForcedColors = e.syncForcedColors
                },
                ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function(e) {
                    h = {
                        ...h,
                        alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
                    }
                },
                ACCESSIBILITY_SET_ROLE_STYLE: function(e) {
                    h.roleStyle = e.roleStyle
                },
                ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function() {
                    h.forcedColorsModalSeen = !0
                },
                KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function() {
                    h = {
                        ...h,
                        keyboardNavigationExplainerModalSeen: !0
                    }
                },
                ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function(e) {
                    let {
                        messageGroupSpacing: t
                    } = e;
                    h = {
                        ...h,
                        messageGroupSpacing: t
                    }
                },
                ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function() {
                    (h = {
                        ...h
                    }).submitButtonEnabled = !h.submitButtonEnabled
                },
                ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function() {
                    (h = {
                        ...h
                    }).syncProfileThemeWithUserTheme = !h.syncProfileThemeWithUserTheme
                }
            });
            var m = v
        },
        357626: function(e, t, n) {
            "use strict";
            var i, r, o, l, s, u, a, c;
            n.r(t), n.d(t, {
                ChannelListLayoutSettings: function() {
                    return r
                },
                MessagePreviewSettings: function() {
                    return l
                }
            }), (s = i || (i = {})).COZY = "cozy", s.COMPACT = "compact", s.MINIMAL = "minimal", (u = r || (r = {})).HYBRID = "hybrid", u.COZY = "cozy", u.COMPACT = "compact", u.MINIMAL = "minimal", (a = o || (o = {})).UNREADS = "unreads", a.ALL = "all", a.NONE = "none", (c = l || (l = {})).DEFAULT = "default", c.ALL = "all", c.UNREADS = "unreads", c.NONE = "none"
        },
        894488: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_GROUP_SPACING: function() {
                    return u
                },
                DEFAULT_COZY_SPACING: function() {
                    return a
                },
                DEFAULT_COMPACT_SPACING: function() {
                    return c
                },
                DEFAULT_POPOUTS: function() {
                    return d
                },
                MESSAGE_PADDING: function() {
                    return f
                },
                PLACEHOLDER_BUFFER: function() {
                    return h
                },
                NEW_MESSAGE_BAR_BUFFER: function() {
                    return g
                },
                NEW_MESSAGE_BAR_BUFFER_LARGE: function() {
                    return S
                },
                NEW_MESSAGE_BAR_ID: function() {
                    return v
                },
                SPOILER_ATTACHMENT_PREFIX: function() {
                    return m
                },
                FileUploadErrorTypes: function() {
                    return o
                },
                DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE: function() {
                    return E
                },
                isChannelStreamMessage: function() {
                    return p
                }
            });
            var i, r, o, l, s = n("49111");
            let u = [0, 4, 8, 16, 24],
                a = 16,
                c = 0,
                d = Object.freeze({
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
                f = 16,
                h = 16,
                g = 32,
                S = 64,
                v = "---new-messages-bar",
                m = "SPOILER_";
            (i = o || (o = {})).ERROR_SOURCE_UNKNOWN = "ERROR_SOURCE_UNKNOWN", i.PRECOMPRESSION_SUM_TOO_LARGE = "PRECOMPRESSION_SUM_TOO_LARGE", i.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", i.POSTCOMPRESSION_SUM_TOO_LARGE = "POSTCOMPRESSION_SUM_TOO_LARGE", i.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", i.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR = "UPLOAD_MESSAGE_ATTACHMENT_MAX_SIZE_ERROR", (r = l || (l = {})).SYSTEM_DM_TAG_SYSTEM_TYPE = "a", r.BOT_TAG_SERVER_TYPE = "b", r.AI_TAG_TYPE = "c", r.BOT_TAG_BOT_TYPE = "d", r.REMIXING_TYPE = "e";
            let E = 209715200;

            function p(e) {
                return e.type === s.ChannelStreamTypes.MESSAGE
            }
        },
        560241: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                STICKER_PICKER_TAB_PANEL_ID: function() {
                    return o
                },
                STICKER_PICKER_TAB_ID: function() {
                    return l
                },
                GRID_NAVIGATOR_ID: function() {
                    return s
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return u
                },
                DEFAULT_STICKER_DIMENSIONS: function() {
                    return a
                },
                STICKER_APPLICATION_ID: function() {
                    return c
                },
                EMPTY_STATE_STICKERS: function() {
                    return d
                },
                MAX_STICKER_FILE_SIZE: function() {
                    return f
                },
                STAFF_MAX_STICKER_FILE_SIZE: function() {
                    return h
                },
                StickerAnimationSettings: function() {
                    return i
                }
            });
            let o = "sticker-picker-tab-panel",
                l = "sticker-picker-tab",
                s = "sticker-picker-grid",
                u = -1,
                a = 160,
                c = "710982414301790216",
                d = ["781323769960202280", "809209266556764241", "818597810047680532", "819129296374595614"],
                f = 524288,
                h = 1572864;
            (r = i || (i = {}))[r.ALWAYS_ANIMATE = 0] = "ALWAYS_ANIMATE", r[r.ANIMATE_ON_INTERACTION = 1] = "ANIMATE_ON_INTERACTION", r[r.NEVER_ANIMATE = 2] = "NEVER_ANIMATE"
        },
        568456: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DMSafetyCoachmarkActions: function() {
                    return l
                },
                DmSpamFilterTypes: function() {
                    return s
                },
                ExplicitContentFilterTypes: function() {
                    return u
                },
                ExplicitContentFilterToDmSpamFilterV2: function() {
                    return c
                }
            });
            var i, r, o, l, s, u, a = n("975162");
            (i = l || (l = {}))[i.VIEW = 0] = "VIEW", i[i.DISMISS = 1] = "DISMISS", i[i.CHANGE_SETTING = 2] = "CHANGE_SETTING", (r = s || (s = {}))[r.DISABLED = 0] = "DISABLED", r[r.NON_FRIENDS = 1] = "NON_FRIENDS", r[r.FRIENDS_AND_NON_FRIENDS = 2] = "FRIENDS_AND_NON_FRIENDS", (o = u || (u = {}))[o.DISABLED = 0] = "DISABLED", o[o.NON_FRIENDS = 1] = "NON_FRIENDS", o[o.FRIENDS_AND_NON_FRIENDS = 2] = "FRIENDS_AND_NON_FRIENDS";
            let c = new Map([
                [u.DISABLED, a.DmSpamFilterV2.DISABLED],
                [u.NON_FRIENDS, a.DmSpamFilterV2.NON_FRIENDS],
                [u.FRIENDS_AND_NON_FRIENDS, a.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS]
            ])
        },
        737292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("427964"),
                r = n.n(i),
                o = n("498225"),
                l = n("173333"),
                s = n("913144"),
                u = n("49111");
            let a = {};
            class c extends o.default.PersistedStore {
                initialize(e) {
                    a = null != e ? e : {}
                }
                getState() {
                    return a
                }
                shouldSync(e) {
                    var t;
                    return (null === (t = a[e]) || void 0 === t ? void 0 : t.shouldSync) !== !1
                }
                getTextSettings() {
                    var e;
                    return null === (e = a.text) || void 0 === e ? void 0 : e.settings
                }
                getAppearanceSettings() {
                    var e;
                    return null === (e = a.appearance) || void 0 === e ? void 0 : e.settings
                }
            }
            c.displayName = "SelectivelySyncedUserSettingsStore", c.persistKey = "SelectivelySyncedUserSettingsStore", c.migrations = [() => {
                var e, t;
                let n = null !== (e = l.default.get("UserSettingsSync")) && void 0 !== e ? e : {},
                    i = null !== (t = l.default.get("UserSettingsStore")) && void 0 !== t ? t : {};
                l.default.remove("UserSettingsSync");
                let o = {};
                return !1 === n[u.UserSettingsSections.TEXT] && (o.text = {
                    shouldSync: !1,
                    settings: r.pick(i, ["inlineAttachmentMedia", "inlineEmbedMedia", "renderEmbeds", "renderReactions", "animateEmoji", "animateStickers", "gifAutoPlay"])
                }), !1 === n[u.UserSettingsSections.APPEARANCE] && (o.appearance = {
                    shouldSync: !1,
                    settings: r.pick(i, ["theme", "clientThemeSettings", "developerMode"])
                }), o
            }];
            var d = new c(s.default, {
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
                            delete a[e];
                            continue
                        }!1 === i && (a[e] = {
                            shouldSync: i,
                            settings: {}
                        });
                        if ((null === (n = a[e]) || void 0 === n ? void 0 : n.shouldSync) === !1)
                            for (let t in r) a[e].settings[t] = r[t]
                    }
                },
                LOGOUT: function() {
                    a = {}
                }
            })
        },
        281473: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                defineProtoSetting: function() {
                    return a
                },
                wrapSettingWithSelectiveSyncing: function() {
                    return c
                },
                wrapSettingWithOverride: function() {
                    return d
                }
            });
            var i = n("498225"),
                r = n("913144"),
                o = n("737292"),
                l = n("872173"),
                s = n("374363"),
                u = n("397336");

            function a(e, t, n, r) {
                let o = () => {
                    var i;
                    return n(null === (i = s.default.settings[e]) || void 0 === i ? void 0 : i[t])
                };
                return {
                    getSetting: o,
                    updateSetting: f(o, n => l.PreloadedUserSettingsActionCreators.updateAsync(e, e => {
                        e[t] = r(n, e[t])
                    }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)),
                    useSetting: () => (0, i.useStateFromStores)([s.default], o)
                }
            }

            function c(e, t, n) {
                let l = () => {
                    var i;
                    let r = o.default.getState()[t];
                    return null !== (i = null == r ? void 0 : r.settings[n]) && void 0 !== i ? i : e.getSetting()
                };
                return {
                    getSetting: l,
                    useSetting: () => {
                        let r = e.useSetting(),
                            l = (0, i.useStateFromStores)([o.default], () => {
                                let e = o.default.getState()[t];
                                return null == e ? void 0 : e.settings[n]
                            });
                        return null != l ? l : r
                    },
                    updateSetting: f(l, i => o.default.shouldSync(t) ? e.updateSetting(i) : (r.default.dispatch({
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
                var o;
                let l = () => null !== (o = n()) && void 0 !== o ? o : e.getSetting();
                return {
                    getSetting: l,
                    useSetting: () => {
                        let t = e.useSetting(),
                            n = i();
                        return null != n ? n : t
                    },
                    updateSetting: f(l, n => (r.default.dispatch({
                        type: "USER_SETTINGS_OVERRIDE_CLEAR",
                        settings: [t]
                    }), e.updateSetting(n)))
                }
            }

            function f(e, t) {
                return function(n) {
                    return "function" == typeof n ? t(n(e())) : t(n)
                }
            }
        },
        845579: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UseLegacyChatInput: function() {
                    return er
                },
                UseRichChatInput: function() {
                    return eo
                },
                ExpressionSuggestionsEnabled: function() {
                    return el
                },
                IncludeStickersInAutocomplete: function() {
                    return es
                },
                RenderSpoilers: function() {
                    return eu
                },
                UseThreadSidebar: function() {
                    return ea
                },
                EmojiPickerCollapsedSections: function() {
                    return ed
                },
                StickerPickerCollapsedSections: function() {
                    return ef
                },
                SoundboardPickerCollapsedSections: function() {
                    return eh
                },
                ViewImageDescriptions: function() {
                    return eg
                },
                ShowCommandSuggestions: function() {
                    return eS
                },
                AlwaysPreviewVideo: function() {
                    return ev
                },
                NotifyFriendsOnGoLive: function() {
                    return em
                },
                NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET: function() {
                    return eE
                },
                NotificationCenterAckedBeforeId: function() {
                    return ep
                },
                EnableBurstReactionNotifications: function() {
                    return eA
                },
                InstallShortcutDesktop: function() {
                    return eT
                },
                InstallShortcutStartMenu: function() {
                    return eI
                },
                AllowActivityPartyPrivacyFriends: function() {
                    return eC
                },
                AllowActivityPartyPrivacyVoiceChannel: function() {
                    return ey
                },
                MessageRequestRestrictedGuildIds: function() {
                    return eN
                },
                MessageRequestRestrictedDefault: function() {
                    return eR
                },
                NonSpamRetrainingOptIn: function() {
                    return eO
                },
                DefaultGuildsRestricted: function() {
                    return eL
                },
                RestrictedGuildIds: function() {
                    return eD
                },
                FriendSourceFlagsSetting: function() {
                    return eP
                },
                RtcPanelShowVoiceStates: function() {
                    return eM
                },
                ConvertEmoticons: function() {
                    return eb
                },
                MessageDisplayCompact: function() {
                    return eF
                },
                SoundboardSettings: function() {
                    return ew
                },
                DropsOptedOut: function() {
                    return eU
                },
                AfkTimeout: function() {
                    return ex
                },
                ViewNsfwGuilds: function() {
                    return eB
                },
                ViewNsfwCommands: function() {
                    return ek
                },
                DisableGamesTab: function() {
                    return eG
                },
                EnableTTSCommand: function() {
                    return eH
                },
                ExplicitContentFilter: function() {
                    return eV
                },
                DmSpamFilterV2: function() {
                    return eW
                },
                ShowCurrentGame: function() {
                    return ez
                },
                StatusSetting: function() {
                    return eY
                },
                CustomStatusSetting: function() {
                    return eZ
                },
                BroadcastAllowFriends: function() {
                    return eX
                },
                BroadcastAllowedGuildIds: function() {
                    return eq
                },
                BroadcastAllowedUserIds: function() {
                    return eJ
                },
                BroadcastAutoBroadcast: function() {
                    return eQ
                },
                ClipsAllowVoiceRecording: function() {
                    return e$
                },
                InlineAttachmentMedia: function() {
                    return e0
                },
                InlineEmbedMedia: function() {
                    return e1
                },
                RenderEmbeds: function() {
                    return e2
                },
                RenderReactions: function() {
                    return e3
                },
                TimezoneOffset: function() {
                    return e7
                },
                DeveloperMode: function() {
                    return e8
                },
                ClientThemeSettings: function() {
                    return e5
                },
                GifAutoPlay: function() {
                    return e9
                },
                AnimateEmoji: function() {
                    return te
                },
                AnimateStickers: function() {
                    return tt
                },
                ActivityRestrictedGuilds: function() {
                    return ti
                },
                ActivityJoiningRestrictedGuilds: function() {
                    return to
                },
                DefaultGuildsActivityRestricted: function() {
                    return tl
                },
                DisableHomeAutoNav: function() {
                    return ts
                },
                FamilyCenterEnabled: function() {
                    return tu
                },
                LegacyUsernameDisabled: function() {
                    return ta
                },
                ExplicitContentSettings: function() {
                    return tc
                }
            });
            var i, r, o, l, s, u, a, c, d, f, h, g, S, v, m, E, p, A, T, I, C, y, _, N, R, O, L, D, P, M, b, F, w, U, x, B, k, G, H, V, W, z, j, Y, Z, K, X = n("498225"),
                q = n("975162"),
                J = n("360687"),
                Q = n("357626"),
                $ = n("281473"),
                ee = n("186709"),
                et = n("568456"),
                en = n("49111"),
                ei = n("560241");
            let er = (0, $.defineProtoSetting)("textAndImages", "useLegacyChatInput", e => null !== (i = null == e ? void 0 : e.value) && void 0 !== i && i, e => J.BoolValue.create({
                    value: e
                })),
                eo = (0, $.defineProtoSetting)("textAndImages", "useRichChatInput", e => null === (r = null == e ? void 0 : e.value) || void 0 === r || r, e => J.BoolValue.create({
                    value: e
                })),
                el = (0, $.defineProtoSetting)("textAndImages", "expressionSuggestionsEnabled", e => null === (o = null == e ? void 0 : e.value) || void 0 === o || o, e => J.BoolValue.create({
                    value: e
                })),
                es = (0, $.defineProtoSetting)("textAndImages", "includeStickersInAutocomplete", e => null !== (l = null == e ? void 0 : e.value) && void 0 !== l && l, e => J.BoolValue.create({
                    value: e
                })),
                eu = (0, $.defineProtoSetting)("textAndImages", "renderSpoilers", e => null !== (s = null == e ? void 0 : e.value) && void 0 !== s ? s : en.SpoilerRenderSetting.ON_CLICK, e => J.StringValue.create({
                    value: e
                })),
                ea = (0, $.defineProtoSetting)("textAndImages", "useThreadSidebar", e => null === (u = null == e ? void 0 : e.value) || void 0 === u || u, e => J.BoolValue.create({
                    value: e
                }));
            (0, $.defineProtoSetting)("notifications", "showInAppNotifications", e => null === (a = null == e ? void 0 : e.value) || void 0 === a || a, e => J.BoolValue.create({
                value: e
            }));
            let ec = [],
                ed = (0, $.defineProtoSetting)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : ec, e => e),
                ef = (0, $.defineProtoSetting)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : ec, e => e),
                eh = (0, $.defineProtoSetting)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : ec, e => e),
                eg = (0, $.defineProtoSetting)("textAndImages", "viewImageDescriptions", e => null !== (c = null == e ? void 0 : e.value) && void 0 !== c && c, e => J.BoolValue.create({
                    value: e
                })),
                eS = (0, $.defineProtoSetting)("textAndImages", "showCommandSuggestions", e => null === (d = null == e ? void 0 : e.value) || void 0 === d || d, e => J.BoolValue.create({
                    value: e
                })),
                ev = (0, $.defineProtoSetting)("voiceAndVideo", "alwaysPreviewVideo", e => null !== (f = null == e ? void 0 : e.value) && void 0 !== f && f, e => J.BoolValue.create({
                    value: e
                })),
                em = (0, $.defineProtoSetting)("notifications", "notifyFriendsOnGoLive", e => null == e ? void 0 : e.value, e => J.BoolValue.create({
                    value: e
                })),
                eE = "0",
                ep = (0, $.defineProtoSetting)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : eE, e => e),
                eA = (0, $.defineProtoSetting)("notifications", "enableBurstReactionNotifications", e => null === (h = null == e ? void 0 : e.value) || void 0 === h || h, e => J.BoolValue.create({
                    value: e
                })),
                eT = (0, $.defineProtoSetting)("gameLibrary", "installShortcutDesktop", e => null !== (g = null == e ? void 0 : e.value) && void 0 !== g && g, e => J.BoolValue.create({
                    value: e
                })),
                eI = (0, $.defineProtoSetting)("gameLibrary", "installShortcutStartMenu", e => null === (S = null == e ? void 0 : e.value) || void 0 === S || S, e => J.BoolValue.create({
                    value: e
                })),
                eC = (0, $.defineProtoSetting)("privacy", "allowActivityPartyPrivacyFriends", e => null === (v = null == e ? void 0 : e.value) || void 0 === v || v, e => J.BoolValue.create({
                    value: e
                })),
                ey = (0, $.defineProtoSetting)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => null === (m = null == e ? void 0 : e.value) || void 0 === m || m, e => J.BoolValue.create({
                    value: e
                })),
                e_ = [],
                eN = (0, $.defineProtoSetting)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : e_, e => e),
                eR = (0, $.defineProtoSetting)("privacy", "defaultMessageRequestRestricted", e => null !== (E = null == e ? void 0 : e.value) && void 0 !== E && E, e => J.BoolValue.create({
                    value: e
                })),
                eO = (0, $.defineProtoSetting)("privacy", "nonSpamRetrainingOptIn", e => null == e ? void 0 : e.value, e => null == e ? void 0 : J.BoolValue.create({
                    value: e
                }));
            (0, $.defineProtoSetting)("privacy", "contactSyncEnabled", e => null !== (p = null == e ? void 0 : e.value) && void 0 !== p && p, e => J.BoolValue.create({
                value: e
            }));
            let eL = (0, $.defineProtoSetting)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
                eD = (0, $.defineProtoSetting)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
            (0, $.defineProtoSetting)("privacy", "friendDiscoveryFlags", e => null !== (A = null == e ? void 0 : e.value) && void 0 !== A ? A : 0, e => J.UInt32Value.create({
                value: e
            }));
            let eP = (0, $.defineProtoSetting)("privacy", "friendSourceFlags", e => null !== (T = null == e ? void 0 : e.value) && void 0 !== T ? T : en.AllFriendSourceFlags, e => J.UInt32Value.create({
                    value: e
                })),
                eM = (0, $.defineProtoSetting)("debug", "rtcPanelShowVoiceStates", e => null !== (I = null == e ? void 0 : e.value) && void 0 !== I && I, e => J.BoolValue.create({
                    value: e
                })),
                eb = (0, $.defineProtoSetting)("textAndImages", "convertEmoticons", e => null === (C = null == e ? void 0 : e.value) || void 0 === C || C, e => J.BoolValue.create({
                    value: e
                })),
                eF = (0, $.defineProtoSetting)("textAndImages", "messageDisplayCompact", e => null !== (y = null == e ? void 0 : e.value) && void 0 !== y && y, e => J.BoolValue.create({
                    value: e
                })),
                ew = (0, $.defineProtoSetting)("voiceAndVideo", "soundboardSettings", e => e, e => e);
            (0, $.defineProtoSetting)("voiceAndVideo", "streamNotificationsEnabled", e => null === (_ = null == e ? void 0 : e.value) || void 0 === _ || _, e => J.BoolValue.create({
                value: e
            }));
            let eU = (0, $.defineProtoSetting)("privacy", "dropsOptedOut", e => null !== (N = null == e ? void 0 : e.value) && void 0 !== N && N, e => J.BoolValue.create({
                value: e
            }));
            (0, $.defineProtoSetting)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => null === (R = null == e ? void 0 : e.value) || void 0 === R || R, e => J.BoolValue.create({
                value: e
            }));
            let ex = (0, $.defineProtoSetting)("voiceAndVideo", "afkTimeout", e => null !== (O = null == e ? void 0 : e.value) && void 0 !== O ? O : 600, e => J.UInt32Value.create({
                    value: e
                })),
                eB = (0, $.defineProtoSetting)("textAndImages", "viewNsfwGuilds", e => null !== (L = null == e ? void 0 : e.value) && void 0 !== L && L, e => J.BoolValue.create({
                    value: e
                })),
                ek = (0, $.defineProtoSetting)("textAndImages", "viewNsfwCommands", e => null !== (D = null == e ? void 0 : e.value) && void 0 !== D && D, e => J.BoolValue.create({
                    value: e
                }));
            (0, $.defineProtoSetting)("privacy", "detectPlatformAccounts", e => null === (P = null == e ? void 0 : e.value) || void 0 === P || P, e => J.BoolValue.create({
                value: e
            }));
            let eG = (0, $.defineProtoSetting)("gameLibrary", "disableGamesTab", e => null !== (M = null == e ? void 0 : e.value) && void 0 !== M && M, e => J.BoolValue.create({
                    value: e
                })),
                eH = (0, $.defineProtoSetting)("textAndImages", "enableTtsCommand", e => null === (b = null == e ? void 0 : e.value) || void 0 === b || b, e => J.BoolValue.create({
                    value: e
                })),
                eV = (0, $.defineProtoSetting)("textAndImages", "explicitContentFilter", e => null !== (F = null == e ? void 0 : e.value) && void 0 !== F ? F : et.ExplicitContentFilterTypes.NON_FRIENDS, e => J.UInt32Value.create({
                    value: e
                }));
            (0, $.defineProtoSetting)("textAndImages", "dmSpamFilter", e => null !== (w = null == e ? void 0 : e.value) && void 0 !== w ? w : et.DmSpamFilterTypes.NON_FRIENDS, e => J.UInt32Value.create({
                value: e
            }));
            let eW = (0, $.defineProtoSetting)("textAndImages", "dmSpamFilterV2", e => null != e ? e : q.DmSpamFilterV2.DEFAULT_UNSET, e => e),
                ez = (0, $.defineProtoSetting)("status", "showCurrentGame", e => null === (U = null == e ? void 0 : e.value) || void 0 === U || U, e => J.BoolValue.create({
                    value: e
                })),
                ej = new Set(Object.values(en.StatusTypes)),
                eY = (0, $.defineProtoSetting)("status", "status", e => null != e && ej.has(e.value) ? e.value : en.StatusTypes.UNKNOWN, e => J.StringValue.create({
                    value: e
                })),
                eZ = (0, $.defineProtoSetting)("status", "customStatus", e => e, e => e),
                eK = [],
                eX = (0, $.defineProtoSetting)("broadcast", "allowFriends", e => null == e ? void 0 : e.value, e => J.BoolValue.create({
                    value: e
                })),
                eq = (0, $.defineProtoSetting)("broadcast", "allowedGuildIds", e => null != e ? e : eK, e => e),
                eJ = (0, $.defineProtoSetting)("broadcast", "allowedUserIds", e => null != e ? e : eK, e => e),
                eQ = (0, $.defineProtoSetting)("broadcast", "autoBroadcast", e => null !== (x = null == e ? void 0 : e.value) && void 0 !== x && x, e => J.BoolValue.create({
                    value: e
                })),
                e$ = (0, $.defineProtoSetting)("clips", "allowVoiceRecording", e => null === (B = null == e ? void 0 : e.value) || void 0 === B || B, e => J.BoolValue.create({
                    value: e
                })),
                e0 = (0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "inlineAttachmentMedia", e => null === (k = null == e ? void 0 : e.value) || void 0 === k || k, e => J.BoolValue.create({
                    value: e
                })), "text", "inlineAttachmentMedia"),
                e1 = (0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "inlineEmbedMedia", e => null === (G = null == e ? void 0 : e.value) || void 0 === G || G, e => J.BoolValue.create({
                    value: e
                })), "text", "inlineEmbedMedia"),
                e2 = (0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "renderEmbeds", e => null === (H = null == e ? void 0 : e.value) || void 0 === H || H, e => J.BoolValue.create({
                    value: e
                })), "text", "renderEmbeds"),
                e3 = (0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "renderReactions", e => null === (V = null == e ? void 0 : e.value) || void 0 === V || V, e => J.BoolValue.create({
                    value: e
                })), "text", "renderReactions"),
                e7 = (0, $.defineProtoSetting)("localization", "timezoneOffset", e => null !== (W = null == e ? void 0 : e.value) && void 0 !== W ? W : null, e => J.Int32Value.create({
                    value: null != e ? e : 0
                }));
            (0, $.defineProtoSetting)("appearance", "mobileRedesignDisabled", e => null != e && e, e => e);
            let e4 = new Set([Q.ChannelListLayoutSettings.HYBRID, Q.ChannelListLayoutSettings.COZY, Q.ChannelListLayoutSettings.COMPACT, Q.ChannelListLayoutSettings.MINIMAL]);
            (0, $.defineProtoSetting)("appearance", "channelListLayout", e => null != e && e4.has(e.value) ? e.value : Q.ChannelListLayoutSettings.HYBRID, e => J.StringValue.create({
                value: e
            }));
            let e6 = new Set([Q.MessagePreviewSettings.DEFAULT, Q.MessagePreviewSettings.ALL, Q.MessagePreviewSettings.UNREADS, Q.MessagePreviewSettings.NONE]);
            (0, $.defineProtoSetting)("appearance", "messagePreviews", e => null != e && e6.has(e.value) ? e.value : Q.MessagePreviewSettings.DEFAULT, e => J.StringValue.create({
                value: e
            }));
            let e8 = (0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
                e5 = (0, $.defineProtoSetting)("appearance", "clientThemeSettings", e => {
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
                        backgroundGradientPresetId: null != t ? J.UInt32Value.create({
                            value: t
                        }) : void 0,
                        backgroundGradientAngle: null != n ? J.FloatValue.create({
                            value: n
                        }) : void 0
                    }
                }),
                e9 = (0, $.wrapSettingWithOverride)((0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "gifAutoPlay", e => null === (z = null == e ? void 0 : e.value) || void 0 === z || z, e => J.BoolValue.create({
                    value: e
                })), "text", "gifAutoPlay"), "gifAutoPlay", () => {
                    var e;
                    return null === (e = ee.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
                }, () => (0, X.useStateFromStores)([ee.default], () => {
                    var e;
                    return null === (e = ee.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
                })),
                te = (0, $.wrapSettingWithOverride)((0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "animateEmoji", e => null === (j = null == e ? void 0 : e.value) || void 0 === j || j, e => J.BoolValue.create({
                    value: e
                })), "text", "animateEmoji"), "animateEmoji", () => {
                    var e;
                    return null === (e = ee.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
                }, () => (0, X.useStateFromStores)([ee.default], () => {
                    var e;
                    return null === (e = ee.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
                })),
                tt = (0, $.wrapSettingWithOverride)((0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "animateStickers", e => null !== (Y = null == e ? void 0 : e.value) && void 0 !== Y ? Y : ei.StickerAnimationSettings.ALWAYS_ANIMATE, e => J.UInt32Value.create({
                    value: e
                })), "text", "animateStickers"), "animateStickers", () => {
                    var e;
                    return null === (e = ee.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
                }, () => (0, X.useStateFromStores)([ee.default], () => {
                    var e;
                    return null === (e = ee.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
                })),
                tn = [],
                ti = (0, $.defineProtoSetting)("privacy", "activityRestrictedGuildIds", e => null != e ? e : tn, e => e),
                tr = [],
                to = (0, $.defineProtoSetting)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : tr, e => e),
                tl = (0, $.defineProtoSetting)("privacy", "defaultGuildsActivityRestricted", e => e === q.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS, e => !0 === e ? q.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS : q.GuildActivityStatusRestrictionDefault.OFF),
                ts = (0, $.defineProtoSetting)("communities", "disableHomeAutoNav", e => null !== (Z = null == e ? void 0 : e.value) && void 0 !== Z && Z, e => J.BoolValue.create({
                    value: e
                })),
                tu = (0, $.defineProtoSetting)("privacy", "familyCenterEnabledV2", e => null == e ? void 0 : e.value, e => J.BoolValue.create({
                    value: e
                })),
                ta = (0, $.defineProtoSetting)("privacy", "hideLegacyUsername", e => null !== (K = null == e ? void 0 : e.value) && void 0 !== K && K, e => J.BoolValue.create({
                    value: e
                })),
                tc = (0, $.defineProtoSetting)("textAndImages", "explicitContentSettings", e => {
                    let {
                        explicitContentGuilds: t,
                        explicitContentFriendDm: n,
                        explicitContentNonFriendDm: i
                    } = null != e ? e : {};
                    return {
                        explicitContentGuilds: null != t ? t : q.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                        explicitContentFriendDm: null != n ? n : q.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                        explicitContentNonFriendDm: null != i ? i : q.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION
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
                    return f
                }
            });
            var i = n("498225"),
                r = n("173333"),
                o = n("913144"),
                l = n("374363");
            let s = {},
                u = {};

            function a() {
                var e, t, n, i, r, o;
                let s = l.default.settings;
                return {
                    gifAutoPlay: null === (t = s.textAndImages) || void 0 === t ? void 0 : null === (e = t.gifAutoPlay) || void 0 === e ? void 0 : e.value,
                    animateEmoji: null === (i = s.textAndImages) || void 0 === i ? void 0 : null === (n = i.animateEmoji) || void 0 === n ? void 0 : n.value,
                    animateStickers: null === (o = s.textAndImages) || void 0 === o ? void 0 : null === (r = o.animateStickers) || void 0 === r ? void 0 : r.value
                }
            }

            function c() {
                return u = a(), !1
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    s = null != e ? e : {}, this.syncWith([l.default], c)
                }
                getState() {
                    return s
                }
                getAppliedOverrideReasonKey(e) {
                    var t;
                    return null === (t = s[e]) || void 0 === t ? void 0 : t.reasonKey
                }
                getOverride(e) {
                    return s[e]
                }
            }
            d.displayName = "UserSettingsOverridesStore", d.persistKey = "UserSettingsOverridesStore", d.migrations = [() => {
                var e;
                let t = null !== (e = r.default.get("UserSettingsStoreOverrides")) && void 0 !== e ? e : {};
                return r.default.remove("UserSettingsStoreOverrides"), t
            }];
            var f = new d(o.default, {
                USER_SETTINGS_PROTO_UPDATE: function() {
                    let e = a(),
                        t = !1;
                    for (let n in e) e[n] !== u[n] && (delete s[n], t = !0);
                    return t
                },
                USER_SETTINGS_OVERRIDE_APPLY: function(e) {
                    let {
                        settings: t
                    } = e;
                    s = {
                        ...s,
                        ...t
                    }
                },
                USER_SETTINGS_OVERRIDE_CLEAR: function(e) {
                    let {
                        settings: t
                    } = e;
                    for (let e of t) delete s[e]
                },
                LOGOUT: function() {
                    s = {}
                },
                LOGIN_SUCCESS: function() {
                    s = {}
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
                    return A
                },
                FrecencyUserSettingsActionCreators: function() {
                    return T
                },
                UserSettingsActionCreatorsByType: function() {
                    return I
                },
                updateUserGuildSettings: function() {
                    return C
                },
                updateUserChannelSettings: function() {
                    return y
                },
                addDismissedContent: function() {
                    return _
                },
                removeDismissedContent: function() {
                    return N
                },
                clearDismissedContents: function() {
                    return R
                },
                checkAllDismissedContents: function() {
                    return O
                }
            });
            var i = n("161179"),
                r = n.n(i),
                o = n("307391"),
                l = n("990746"),
                s = n("652666"),
                u = n("975162"),
                a = n("173333"),
                c = n("913144"),
                d = n("674268"),
                f = n("275877"),
                h = n("374363"),
                g = n("116949"),
                S = n("397336"),
                v = n("49111");
            let m = "UserSettingsProtoLastWriteTimes",
                E = Date.now();
            c.default.subscribe("CONNECTION_OPEN", () => {
                Date.now()
            }), c.default.subscribe("CONNECTION_CLOSED", () => {
                Date.now()
            }), "undefined" != typeof document && (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {}));
            class p {
                getEditInfo() {
                    return h.default.getFullState()[this.type]
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
                        l = null != o ? r.fromBinary(r.toBinary(o), g.BINARY_READ_OPTIONS) : r.create(),
                        s = t(l);
                    if (!1 === s) return;
                    let u = this.ProtoClass.create();
                    u[e] = l, __OVERLAY__ ? c.default.dispatch({
                        type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
                        settings: {
                            type: this.type,
                            proto: u
                        },
                        delaySeconds: n,
                        jitter: n === S.UserSettingsDelay.AUTOMATED || n === S.UserSettingsDelay.DAILY,
                        partial: !0,
                        resetEditInfo: !1,
                        local: !0
                    }) : (this.logger.log("Updating ".concat(String(e), " with delay ").concat(n)), this.markDirty(u, {
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
                    let l = null !== (n = t.delaySeconds) && void 0 !== n ? n : 0;
                    if (null != o.timeout && l < i.timeoutDelay && !i.rateLimited && (clearTimeout(o.timeout), o.timeout = void 0), null == o.timeout) {
                        let e = 1e3 * l;
                        t.jitter && (e += Math.floor(Math.random() * Math.min(e, 3e4))), this.logger.log("Scheduling save from markDirty"), o.timeout = setTimeout(this.persistChanges, e), o.timeoutDelay = l
                    }
                    null != t.cleanup && (o.cleanupFuncs = [...i.cleanupFuncs, ...t.cleanup]), null == i.protoToSave ? o.protoToSave = e : o.protoToSave = (0, g.mergeTopLevelFields)(this.ProtoClass, i.protoToSave, e), this.dispatchChanges(o)
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
                    let t = null !== (e = a.default.get(m)) && void 0 !== e ? e : {};
                    t[this.type] = Date.now(), a.default.set(m, t)
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
                            } = await l.default.get({
                                url: v.Endpoints.USER_SETTINGS_PROTO(this.type)
                            }), n = (0, g.b64ToProto)(this.ProtoClass, t);
                            if (null == n) {
                                this.dispatchChanges({
                                    loading: !1,
                                    loaded: !0
                                });
                                return
                            }
                            let i = f.default[this.type],
                                {
                                    proto: r,
                                    isDirty: o,
                                    cleanupFuncs: s
                                } = (0, g.runMigrations)(n, i);
                            return c.default.dispatch({
                                type: "USER_SETTINGS_PROTO_UPDATE",
                                settings: {
                                    type: this.type,
                                    proto: n
                                },
                                resetEditInfo: o || e,
                                local: !1
                            }), o && this.markDirtyFromMigration(r, s), n
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
                        let t = (0, g.protoToB64)(this.ProtoClass, e.protoToSave);
                        if (null == t || "" === t) {
                            this.logger.log("Not persisting proto because there is nothing to change");
                            return
                        }
                        try {
                            this.saveLastSendTime();
                            let {
                                body: n
                            } = await l.default.patch({
                                url: v.Endpoints.USER_SETTINGS_PROTO(this.type),
                                body: {
                                    settings: t,
                                    required_data_version: e.offlineEditDataVersion
                                }
                            });
                            n.out_of_date && this.logger.log("Proto was out of date, discarding changes"), this.getEditInfo().editInfo.cleanupFuncs.forEach(e => e());
                            let i = (0, g.b64ToProto)(this.ProtoClass, n.settings);
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
                            } else if (400 === e.status && (null === (n = e.body) || void 0 === n ? void 0 : n.code) === v.AbortCodes.INVALID_USER_SETTINGS_DATA) throw this.logger.log("Reloading do to invalid data"), this.loadIfNecessary(!0), e;
                            else throw this.logger.log("Unknown user settings error"), e
                        }
                    }, this.logger = new o.default(this.ProtoClass.typeName)
                }
            }
            let A = new p(u.PreloadedUserSettings, S.UserSettingsTypes.PRELOADED_USER_SETTINGS),
                T = new p(s.FrecencyUserSettings, S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                I = {
                    [S.UserSettingsTypes.PRELOADED_USER_SETTINGS]: A,
                    [S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: T
                };

            function C(e, t, n) {
                return A.updateAsync("guilds", n => (0, g.mutateUserGuildSettingsInternal)(n, e, t), n)
            }

            function y(e, t, n, i) {
                return C(e, e => (0, g.mutateUserChannelSettingsInternal)(e, t, n), i)
            }

            function _(e) {
                return A.updateAsync("userContent", t => {
                    if ((0, d.hasBit)(t.dismissedContents, e)) return !1;
                    t.dismissedContents = (0, d.addBit)(t.dismissedContents, e)
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function N(e) {
                return A.updateAsync("userContent", t => {
                    if (!(0, d.hasBit)(t.dismissedContents, e)) return !1;
                    t.dismissedContents = (0, d.removeBit)(t.dismissedContents, e)
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function R() {
                return A.updateAsync("userContent", e => {
                    e.dismissedContents = new Uint8Array
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function O() {
                return A.updateAsync("userContent", e => {
                    let t = new Uint8Array;
                    for (let e of Object.keys(u.DismissibleContent)) t = (0, d.addBit)(t, u.DismissibleContent[e]);
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
            var i = n("920040"),
                r = n("773670"),
                o = n("575482"),
                l = n.n(o),
                s = n("688728"),
                u = n("705562");
            let a = {
                    VERTICAL: u.vertical,
                    HORIZONTAL: s.horizontal,
                    HORIZONTAL_REVERSE: s.horizontalReverse
                },
                c = {
                    START: u.justifyStart,
                    END: u.justifyEnd,
                    CENTER: u.justifyCenter,
                    BETWEEN: u.justifyBetween,
                    AROUND: u.justifyAround
                },
                d = {
                    START: u.alignStart,
                    END: u.alignEnd,
                    CENTER: u.alignCenter,
                    STRETCH: u.alignStretch,
                    BASELINE: u.alignBaseline
                },
                f = {
                    NO_WRAP: u.noWrap,
                    WRAP: u.wrap,
                    WRAP_REVERSE: u.wrapReverse
                },
                h = e => {
                    let {
                        children: t,
                        className: n,
                        shrink: o,
                        grow: u,
                        basis: a,
                        style: c,
                        wrap: d = !1,
                        ...f
                    } = e;
                    n = null != n ? n : s.flexChild;
                    let h = {
                        className: n,
                        style: {
                            flexGrow: u,
                            flexShrink: o,
                            flexBasis: a,
                            ...c
                        },
                        ...f
                    };
                    if (!d && "string" != typeof t && 1 === r.Children.count(t)) {
                        let e = r.Children.only(t);
                        return h.style = {
                            ...h.style,
                            ...e.props.style
                        }, h.className = l(e.props.className, n), r.cloneElement(e, h)
                    }
                    return (0, i.jsx)("div", {
                        ...h,
                        children: t
                    })
                };
            h.defaultProps = {
                shrink: 1,
                grow: 1,
                basis: "auto",
                wrap: !1
            };
            let g = e => {
                let {
                    children: t,
                    className: n,
                    direction: r = a.HORIZONTAL,
                    justify: o = c.START,
                    align: u = d.STRETCH,
                    wrap: h = f.NO_WRAP,
                    shrink: g,
                    grow: S,
                    basis: v,
                    style: m,
                    ...E
                } = e;
                return (0, i.jsx)("div", {
                    style: {
                        flexShrink: g,
                        flexGrow: S,
                        flexBasis: v,
                        ...m
                    },
                    className: l(s.flex, r, o, u, h, n),
                    ...E,
                    children: t
                })
            };
            g.defaultProps = {
                shrink: 1,
                grow: 1,
                basis: "auto"
            }, g.Child = h, g.Direction = a, g.Align = d, g.Justify = c, g.Wrap = f;
            var S = g
        },
        542489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("773670");
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
            var i = n("920040");
            n("773670");
            var r = n("75196");

            function o(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = "currentColor",
                    foreground: l,
                    className: s,
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    className: s,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: o,
                        className: l,
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
            });

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
        }
    }
]);
//# sourceMappingURL=9dba2f8f1ec8e4087c9c.js.map