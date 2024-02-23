(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["30791"], {
        606863: function(e, t, r) {
            "use strict";
            e.exports = r.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, t, r) {
            "use strict";
            e.exports = r.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, t, r) {
            "use strict";
            e.exports = r.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, t, r) {
            "use strict";
            e.exports = r.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, t, r) {
            "use strict";
            e.exports = r.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, t, r) {
            "use strict";
            e.exports = r.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, t, r) {
            "use strict";
            e.exports = r.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, t, r) {
            "use strict";
            e.exports = r.p + "44d5e1639bc492dc8d62.svg"
        },
        606292: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getDecorationSizeForAvatarSize: function() {
                    return a
                },
                openAvatarDecorationModal: function() {
                    return s
                }
            });
            var n = r("37983");
            r("884691");
            var u = r("77078"),
                o = r("393414");
            r("103603");
            var l = r("573135"),
                i = r("49111");

            function a(e) {
                return "number" != typeof e ? (0, u.getAvatarSize)(e) * l.DECORATION_TO_AVATAR_RATIO : e * l.DECORATION_TO_AVATAR_RATIO
            }
            let s = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedDecoration: l,
                    isTryItOutFlow: a,
                    guild: s
                } = e;
                (0, u.openModalLazy)(async () => {
                    (0, o.getHistory)().location.pathname === i.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, o.transitionTo)(i.Routes.APP);
                    let {
                        default: e
                    } = await r.el("791050").then(r.bind(r, "791050"));
                    return r => (0, n.jsx)(e, {
                        ...r,
                        analyticsLocations: t,
                        initialSelectedDecoration: l,
                        isTryItOutFlow: a,
                        guild: s
                    })
                }, {})
            }
        },
        172858: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return o
                },
                COMMON_CONFETTI_COLORS: function() {
                    return l
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return i
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return a
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return s
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return c
                }
            });
            var n = r("516555"),
                u = r("839491");
            let o = u,
                l = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                i = [r("606863"), o, r("164654"), r("540346"), r("526094"), r("367469"), r("23933"), {
                    src: r("283397"),
                    colorize: !1
                }],
                a = 28,
                s = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: a
                    }
                },
                c = new n.Environment
        },
        845962: function(e, t, r) {
            "use strict";
            let n;
            r.r(t), r.d(t, {
                default: function() {
                    return T
                }
            });
            var u = r("917351"),
                o = r("446674"),
                l = r("913144");
            let i = [],
                a = !1;
            let s = i,
                c = {},
                f = null,
                d = e => {
                    s = (0, u.cloneDeep)(e);
                    let t = {};
                    s.forEach(e => {
                        t[e.id] = e
                    }), c = t
                };
            class E extends o.default.Store {
                get isFetching() {
                    return a
                }
                get fetchError() {
                    return n
                }
                get profileEffects() {
                    return s
                }
                get tryItOutId() {
                    return f
                }
                getProfileEffectById(e) {
                    return null != e ? c[e] : void 0
                }
            }
            E.displayName = "ProfileEffectStore";
            var T = new E(l.default, {
                USER_PROFILE_EFFECTS_FETCH: () => {
                    a = !0
                },
                USER_PROFILE_EFFECTS_FETCH_SUCCESS: e => {
                    let {
                        profileEffects: t
                    } = e;
                    a = !1, d(0 === t.length ? i : t)
                },
                USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    a = !1, n = t, d(i)
                },
                PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
                    let {
                        id: t
                    } = e;
                    f = t
                },
                LOGOUT: e => {
                    a = !1, d(i), f = null
                }
            })
        },
        76047: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ENTRY_DELAY: function() {
                    return n
                },
                RESET: function() {
                    return u
                }
            });
            let n = 500,
                u = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        859498: function(e, t, r) {
            "use strict";
            var n, u, o, l;
            r.r(t), r.d(t, {
                RestartMethod: function() {
                    return n
                },
                AnimationTypes: function() {
                    return u
                }
            }), (o = n || (n = {})).FromLoop = "fromLoop", o.FromStart = "fromStart", (l = u || (u = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.PERSISTENT = 1] = "PERSISTENT", l[l.INTERMITTENT = 2] = "INTERMITTENT"
        },
        687682: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("884691");
            let u = 1e3 / 24;
            var o = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
                    r = n.useRef(0),
                    o = n.useRef(),
                    l = n.useRef(!0),
                    i = n.useCallback(() => {
                        l.current = !1, cancelAnimationFrame(r.current)
                    }, []),
                    a = n.useCallback(n => {
                        null == o.current && (o.current = n);
                        let u = n - o.current;
                        u >= t && (o.current = n, e(u)), l.current && (r.current = requestAnimationFrame(a))
                    }, [e, t]),
                    s = n.useCallback(() => {
                        l.current = !0, o.current = void 0, r.current = requestAnimationFrame(a)
                    }, [a]);
                return n.useEffect(() => (r.current = requestAnimationFrame(a), () => cancelAnimationFrame(r.current)), []), {
                    stop: i,
                    reset: s,
                    ticking: l
                }
            }
        },
        833395: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            }), r("222007"), r("808653"), r("424973");
            var n = r("884691"),
                u = (e, t) => {
                    let [r, u] = n.useState(-1), o = n.useRef(-1);
                    return n.useEffect(() => {
                        let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
                        u(t.length), o.current = t.length
                    }, [e, o, u]), n.useEffect(() => {
                        0 === r && t()
                    }, [r, t]), {
                        pending: r,
                        pendingRef: o,
                        setPending: u
                    }
                }
        },
        784410: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            }), r("222007"), r("808653");
            var n = r("884691"),
                u = r("845962"),
                o = e => {
                    let t = u.default.profileEffects,
                        [r, o] = n.useState(e),
                        [l, i] = n.useState(u.default.getProfileEffectById(e)),
                        a = t.reduce((t, r, n) => (r.id === e && (t = n), t), 0),
                        [, s] = n.useState(a),
                        c = n.useRef(a);
                    return n.useEffect(() => {
                        o(e), i(u.default.getProfileEffectById(e))
                    }, [e, t]), {
                        increment: () => {
                            let e = (c.current + 1) % t.length;
                            c.current = e, s(e), o(t[e].id), i(t[e])
                        },
                        decrement: () => {
                            let e = 0 === c.current ? t.length - 1 : c.current - 1;
                            c.current = e, s(e), o(t[e].id), i(t[e])
                        },
                        id: r,
                        preset: l
                    }
                }
        },
        525808: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                sortEffectLayers: function() {
                    return n
                }
            });
            let n = e => e.sort((e, t) => {
                var r, n;
                return (null !== (r = e.zIndex) && void 0 !== r ? r : 0) - (null !== (n = t.zIndex) && void 0 !== n ? n : 0)
            })
        },
        635471: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return I
                }
            }), r("222007");
            var n = r("37983"),
                u = r("884691"),
                o = r("414456"),
                l = r.n(o),
                i = r("446674"),
                a = r("206230"),
                s = r("471671"),
                c = r("76047"),
                f = r("859498"),
                d = r("687682"),
                E = r("525808"),
                T = r("465523"),
                A = r("417675"),
                R = r("188645"),
                m = r("484304");
            let p = e => {
                    let {
                        bannerAdjustment: t = 0,
                        maxLoops: r,
                        resetOnHover: o = !1,
                        isHovering: i = !1,
                        useOpacityOnHover: a = !0,
                        autoPlay: s = !0,
                        restartMethod: T,
                        urlQueryString: R,
                        profileEffectConfig: p,
                        noBorderRadius: v = !1,
                        introDelay: I = c.ENTRY_DELAY
                    } = e, _ = u.useRef(null), [S, h] = u.useState([]);
                    (0, A.default)(p);
                    let [O, N] = u.useState(0), [C, y] = u.useState(0), {
                        accessibilityLabel: F
                    } = p, [g, L] = u.useState(-I), {
                        stop: P,
                        reset: D,
                        ticking: x
                    } = (0, d.default)(e => {
                        L(t => t + e)
                    });
                    u.useEffect(() => {
                        L(-I), h((0, E.sortEffectLayers)(p.effects))
                    }, [p]), u.useEffect(() => {
                        let e = 0,
                            t = 1 / 0;
                        S.forEach(r => {
                            let n = r.start + r.duration;
                            n > e && (e = n), r.loop && r.start < t && (t = r.start)
                        }), N(t), y(e)
                    }, [y, S]);
                    let [M, b] = u.useState(!1);
                    return u.useEffect(() => {
                        !0 !== s && !i && (P(), L(0)), !i && M && x.current && (P(), L(0)), o && i && !x.current && (D(), p.animationType === f.AnimationTypes.PERSISTENT ? L(T === f.RestartMethod.FromStart ? 0 : O) : L(0))
                    }, [i, M, O, o, P, D, x, p.animationType, s, T]), (0, n.jsx)("div", {
                        ref: _,
                        className: l(m.profileEffects, {
                            [m.hovered]: i && a
                        }),
                        children: (0, n.jsx)("div", {
                            className: v ? m.innerNoRadius : m.inner,
                            children: S.map((e, u) => {
                                var o, l, i, a, d, E, T, A;
                                if (!x.current) {
                                    if (p.animationType === f.AnimationTypes.PERSISTENT && null != p.staticFrameSrc && 0 === u && !0 === s) {
                                        let {
                                            staticFrameSrc: r
                                        } = p;
                                        return (0, n.jsx)("img", {
                                            className: m.effect,
                                            style: {
                                                top: null !== (d = null === (i = e.position) || void 0 === i ? void 0 : i.y) && void 0 !== d ? d : 0 - t,
                                                left: null !== (E = null === (a = e.position) || void 0 === a ? void 0 : a.x) && void 0 !== E ? E : 0
                                            },
                                            src: r,
                                            alt: F
                                        }, e.src + u)
                                    }
                                    return (0, n.jsx)("img", {
                                        src: c.RESET,
                                        alt: F
                                    }, e.src + u)
                                }
                                if (g < e.start || !e.loop && g > e.duration + e.start) return (0, n.jsx)("img", {
                                    src: c.RESET,
                                    alt: F
                                }, e.src + u);
                                if (p.animationType === f.AnimationTypes.PERSISTENT && !M && null != r && g >= C && b(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
                                    let t = e.duration + e.loopDelay,
                                        o = Math.floor((g - e.start) / t);
                                    if (g - e.start - o * t > e.duration) return p.animationType === f.AnimationTypes.INTERMITTENT && !M && null != r && o >= r && b(!0), (0, n.jsx)("img", {
                                        src: c.RESET,
                                        alt: F
                                    }, e.src + u)
                                }
                                return (0, n.jsx)("img", {
                                    src: null != R ? "".concat(e.src, "?query=").concat(R) : e.src,
                                    className: m.effect,
                                    style: {
                                        top: (null !== (T = null === (o = e.position) || void 0 === o ? void 0 : o.y) && void 0 !== T ? T : 0) - t,
                                        left: null !== (A = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== A ? A : 0
                                    },
                                    alt: F
                                }, e.src + u)
                            })
                        })
                    })
                },
                v = e => {
                    let {
                        config: t,
                        useThumbnail: r,
                        bannerAdjustment: u = 0,
                        noBorderRadius: o,
                        isHovering: i = !1,
                        useOpacityOnHover: a = !0
                    } = e, {
                        reducedMotionSrc: s,
                        thumbnailPreviewSrc: c,
                        accessibilityLabel: f
                    } = t;
                    return (0, n.jsx)("div", {
                        className: l(m.profileEffects, {
                            [m.hovered]: i && a
                        }),
                        children: (0, n.jsx)("div", {
                            className: o ? m.innerNoRadius : m.inner,
                            children: (0, n.jsx)("img", {
                                src: r && !i ? c : s,
                                className: m.effect,
                                style: {
                                    top: 0 - u
                                },
                                alt: f
                            })
                        })
                    })
                };
            var I = e => {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.isFocused()),
                    r = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion),
                    [o, l] = u.useState(!1),
                    {
                        preset: c
                    } = (0, R.default)(e.profileEffectId, () => l(!1));
                return null != c && (t || e.shopPreview || c.config.animationType !== f.AnimationTypes.INTERMITTENT) ? !t && e.shopPreview || !t && c.config.animationType === f.AnimationTypes.PERSISTENT || r || !1 === e.autoPlay && !1 === e.isHovering ? (0, n.jsx)(v, {
                    useThumbnail: e.useThumbnail,
                    config: c.config,
                    bannerAdjustment: e.bannerAdjustment,
                    noBorderRadius: e.noBorderRadius,
                    isHovering: e.isHovering,
                    useOpacityOnHover: e.useOpacityOnHover
                }) : o ? (0, n.jsx)(p, {
                    profileEffectConfig: c.config,
                    ...e
                }) : (0, n.jsx)(T.default, {
                    profileEffectConfig: c.config,
                    onReady: () => {
                        l(!0)
                    }
                }) : null
            }
        },
        465523: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("37983");
            r("884691");
            var u = r("833395"),
                o = e => {
                    let {
                        profileEffectConfig: t,
                        onReady: r
                    } = e, {
                        pendingRef: o,
                        setPending: l
                    } = (0, u.default)(t.effects, r);
                    return (0, n.jsx)("div", {
                        children: t.effects.map(e => (0, n.jsx)("img", {
                            src: e.src,
                            alt: "Preload Profile Effect Asset",
                            "aria-hidden": !0,
                            style: {
                                opacity: 0,
                                position: "absolute"
                            },
                            onLoad: () => {
                                l(o.current - 1), o.current = o.current - 1
                            }
                        }, e.src))
                    })
                }
        },
        417675: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("884691");
            let u = e => {
                e.effects.forEach(e => {
                    let {
                        src: t
                    } = e, r = document.createElement("link");
                    r.rel = "prefetch", r.href = t, document.body.appendChild(r)
                })
            };
            var o = e => {
                n.useEffect(() => {
                    u(e)
                }, [e])
            }
        },
        188645: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("884691"),
                u = r("890503"),
                o = r("784410"),
                l = (e, t) => {
                    let r = (0, u.default)("profile_effect_debug_controls"),
                        {
                            id: l,
                            preset: i,
                            increment: a,
                            decrement: s
                        } = (0, o.default)(e);
                    return n.useEffect(() => {
                        if (!r) return;
                        let e = e => {
                            "ArrowUp" === e.key && (a(), e.preventDefault()), "ArrowDown" === e.key && (s(), e.preventDefault()), "r" === e.key && (null == t || t(), e.preventDefault())
                        };
                        return window.addEventListener("keydown", e), () => {
                            window.removeEventListener("keydown", e)
                        }
                    }, []), {
                        id: null != l ? l : null,
                        preset: i
                    }
                }
        },
        388491: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useProfileThemeValues: function() {
                    return E
                },
                getProfileTheme: function() {
                    return T
                },
                getValueInColorGradientByPercentage: function() {
                    return A
                },
                useAvatarBorderColor: function() {
                    return m
                },
                calculateButtonColor: function() {
                    return p
                },
                useMessageInputBorderColor: function() {
                    return v
                },
                useDividerColor: function() {
                    return I
                }
            }), r("222007");
            var n = r("884691"),
                u = r("917351"),
                o = r("509043"),
                l = r("65597"),
                i = r("669491"),
                a = r("819855"),
                s = r("206230"),
                c = r("449918"),
                f = r("172182"),
                d = r("49111");

            function E(e) {
                let t = (0, l.default)([s.default], () => s.default.saturation);
                return (0, n.useMemo)(() => null == e ? null : {
                    overlaySyncedWithUserTheme: i.default.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    overlay: i.default.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    sectionBox: i.default.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    messageInputBorder: i.default.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    dividerOpacity: e === i.default.themes.DARK ? .24 : .12,
                    noteBackgroundColor: i.default.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    profileBodyBackgroundHover: i.default.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    rolePillBackgroundColor: i.default.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    rolePillBorderColor: i.default.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    icon: i.default.colors.INTERACTIVE_NORMAL.resolve({
                        theme: e,
                        saturation: t
                    }).hsl()
                }, [e, t])
            }

            function T(e) {
                if (null == e) return null;
                let t = (0, o.getDarkness)(e);
                return t > .5 ? d.ThemeTypes.DARK : d.ThemeTypes.LIGHT
            }

            function A(e, t, r) {
                let n = r / 100,
                    u = 1 - n;
                return [Math.round(e[0] * u + t[0] * n), Math.round(e[1] * u + t[1] * n), Math.round(e[2] * u + t[2] * n)]
            }

            function R(e, t) {
                let r = (0, o.int2rgbArray)(e);
                if (null == t) return 0;
                let n = f.default.parseString(t);
                if (null == n) return 0;
                let u = [n.red, n.green, n.blue],
                    l = [r[0], r[1], r[2]],
                    i = n.alpha,
                    [a, s, c] = u.map((e, t) => Math.floor(i * e + (1 - i) * l[t]));
                return (0, o.rgb2int)("rgba(".concat(a, ", ").concat(s, ", ").concat(c, ")"))
            }

            function m(e, t, r) {
                let n = E(e);
                return null == n || null == t ? null : R(t, r ? n.overlaySyncedWithUserTheme : n.overlay)
            }
            let p = (0, u.memoize)(e => {
                let t = (0, a.getContrastingColor)(e, {
                    base: "#ffffff",
                    contrastRatio: a.WCAGContrastRatios.HighContrastText
                });
                return (0, o.hex2int)(t)
            }, e => e);

            function v(e, t) {
                let r = E(e);
                return null != r && null != t ? R(t, null == r ? void 0 : r.messageInputBorder) : null
            }

            function I(e, t) {
                let r = (0, c.useColorValue)(d.Color.WHITE_500).hex;
                return (0, a.isThemeDark)(e) ? (0, o.hex2int)(r) : null != t ? p(t) : null
            }
        },
        635058: function(e, t, r) {
            "use strict";
            var n, u;
            r.r(t), r.d(t, {
                CollectiblesCategorySkuId: function() {
                    return n
                }
            }), r("222007"), (u = n || (n = {})).FANTASY = "1144003461608906824", u.ANIME = "1144302037593497701", u.BREAKFAST = "1144054000099012659", u.DISXCORE = "1144058340327047249", u.HALLOWEEN = "1157410718711304313", u.FALL = "1157406994873991284", u.WINTER = "1174459301239197856", u.MONSTERS = "1179493515038818325", u.CYBERPUNK = "1197342727608746044", u.LUNAR_NEW_YEAR = "1202069709281828935", u.ELEMENTS = "1207046915880124426"
        }
    }
]);
//# sourceMappingURL=30791.88cd29e261bf94b04423.js.map