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
            var o = r("77078"),
                u = r("393414");
            r("103603");
            var l = r("573135"),
                i = r("49111");

            function a(e) {
                return "number" != typeof e ? (0, o.getAvatarSize)(e) * l.DECORATION_TO_AVATAR_RATIO : e * l.DECORATION_TO_AVATAR_RATIO
            }
            let s = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedDecoration: l,
                    isTryItOutFlow: a,
                    guild: s
                } = e;
                (0, o.openModalLazy)(async () => {
                    (0, u.getHistory)().location.pathname === i.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, u.transitionTo)(i.Routes.APP);
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
                    return u
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
                o = r("839491");
            let u = o,
                l = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                i = [r("606863"), u, r("164654"), r("540346"), r("526094"), r("367469"), r("23933"), {
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
        76047: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ENTRY_DELAY: function() {
                    return n
                },
                RESET: function() {
                    return o
                }
            });
            let n = 500,
                o = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        859498: function(e, t, r) {
            "use strict";
            var n, o, u, l;
            r.r(t), r.d(t, {
                RestartMethod: function() {
                    return n
                },
                AnimationTypes: function() {
                    return o
                }
            }), (u = n || (n = {})).FromLoop = "fromLoop", u.FromStart = "fromStart", (l = o || (o = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.PERSISTENT = 1] = "PERSISTENT", l[l.INTERMITTENT = 2] = "INTERMITTENT"
        },
        687682: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var n = r("884691");
            let o = 1e3 / 24;
            var u = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                    r = n.useRef(0),
                    u = n.useRef(),
                    l = n.useRef(!0),
                    i = n.useCallback(() => {
                        l.current = !1, cancelAnimationFrame(r.current)
                    }, []),
                    a = n.useCallback(n => {
                        null == u.current && (u.current = n);
                        let o = n - u.current;
                        o >= t && (u.current = n, e(o)), l.current && (r.current = requestAnimationFrame(a))
                    }, [e, t]),
                    s = n.useCallback(() => {
                        l.current = !0, u.current = void 0, r.current = requestAnimationFrame(a)
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
                    return o
                }
            }), r("222007"), r("808653"), r("424973");
            var n = r("884691"),
                o = (e, t) => {
                    let [r, o] = n.useState(-1), u = n.useRef(-1);
                    return n.useEffect(() => {
                        let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
                        o(t.length), u.current = t.length
                    }, [e, u, o]), n.useEffect(() => {
                        0 === r && t()
                    }, [r, t]), {
                        pending: r,
                        pendingRef: u,
                        setPending: o
                    }
                }
        },
        784410: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            }), r("222007"), r("808653");
            var n = r("884691"),
                o = r("845962"),
                u = r("501768"),
                l = e => {
                    let [t, r] = n.useState(e), [l, i] = n.useState(o.default.getProfileEffectById(e)), a = null == o.default.getProfileEffectById(e) && null != e, s = n.useMemo(() => (0, u.getOrFetchProfileEffects)(a), [a]), c = s.reduce((t, r, n) => (r.id === e && (t = n), t), 0), [, f] = n.useState(c), d = n.useRef(c);
                    return n.useEffect(() => {
                        r(e), i(o.default.getProfileEffectById(e))
                    }, [e, s]), {
                        increment: () => {
                            let e = (d.current + 1) % s.length;
                            d.current = e, f(e), r(s[e].id), i(s[e])
                        },
                        decrement: () => {
                            let e = 0 === d.current ? s.length - 1 : d.current - 1;
                            d.current = e, f(e), r(s[e].id), i(s[e])
                        },
                        id: t,
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
                o = r("884691"),
                u = r("414456"),
                l = r.n(u),
                i = r("446674"),
                a = r("206230"),
                s = r("471671"),
                c = r("76047"),
                f = r("859498"),
                d = r("687682"),
                E = r("525808"),
                T = r("465523"),
                A = r("417675"),
                m = r("188645"),
                p = r("484304");
            let R = e => {
                    let {
                        bannerAdjustment: t = 0,
                        maxLoops: r,
                        resetOnHover: u = !1,
                        isHovering: i = !1,
                        useOpacityOnHover: a = !0,
                        autoPlay: s = !0,
                        restartMethod: T,
                        urlQueryString: m,
                        profileEffectConfig: R,
                        noBorderRadius: v = !1,
                        introDelay: I = c.ENTRY_DELAY
                    } = e, N = o.useRef(null), [h, S] = o.useState([]);
                    (0, A.default)(R);
                    let [O, _] = o.useState(0), [y, g] = o.useState(0), {
                        accessibilityLabel: C
                    } = R, [F, D] = o.useState(-I), {
                        stop: L,
                        reset: P,
                        ticking: x
                    } = (0, d.default)(e => {
                        D(t => t + e)
                    });
                    o.useEffect(() => {
                        D(-I), S((0, E.sortEffectLayers)(R.effects))
                    }, [R]), o.useEffect(() => {
                        let e = 0,
                            t = 1 / 0;
                        h.forEach(r => {
                            let n = r.start + r.duration;
                            n > e && (e = n), r.loop && r.start < t && (t = r.start)
                        }), _(t), g(e)
                    }, [g, h]);
                    let [M, b] = o.useState(!1);
                    return o.useEffect(() => {
                        !0 !== s && !i && (L(), D(0)), !i && M && x.current && (L(), D(0)), u && i && !x.current && (P(), R.animationType === f.AnimationTypes.PERSISTENT ? D(T === f.RestartMethod.FromStart ? 0 : O) : D(0))
                    }, [i, M, O, u, L, P, x, R.animationType, s, T]), (0, n.jsx)("div", {
                        ref: N,
                        className: l(p.profileEffects, {
                            [p.hovered]: i && a
                        }),
                        children: (0, n.jsx)("div", {
                            className: v ? p.innerNoRadius : p.inner,
                            children: h.map((e, o) => {
                                var u, l, i, a, d, E, T, A;
                                if (!x.current) {
                                    if (R.animationType === f.AnimationTypes.PERSISTENT && null != R.staticFrameSrc && 0 === o && !0 === s) {
                                        let {
                                            staticFrameSrc: r
                                        } = R;
                                        return (0, n.jsx)("img", {
                                            className: p.effect,
                                            style: {
                                                top: null !== (d = null === (i = e.position) || void 0 === i ? void 0 : i.y) && void 0 !== d ? d : 0 - t,
                                                left: null !== (E = null === (a = e.position) || void 0 === a ? void 0 : a.x) && void 0 !== E ? E : 0
                                            },
                                            src: r,
                                            alt: C
                                        }, e.src + o)
                                    }
                                    return (0, n.jsx)("img", {
                                        src: c.RESET,
                                        alt: C
                                    }, e.src + o)
                                }
                                if (F < e.start || !e.loop && F > e.duration + e.start) return (0, n.jsx)("img", {
                                    src: c.RESET,
                                    alt: C
                                }, e.src + o);
                                if (R.animationType === f.AnimationTypes.PERSISTENT && !M && null != r && F >= y && b(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
                                    let t = e.duration + e.loopDelay,
                                        u = Math.floor((F - e.start) / t);
                                    if (F - e.start - u * t > e.duration) return R.animationType === f.AnimationTypes.INTERMITTENT && !M && null != r && u >= r && b(!0), (0, n.jsx)("img", {
                                        src: c.RESET,
                                        alt: C
                                    }, e.src + o)
                                }
                                return (0, n.jsx)("img", {
                                    src: null != m ? "".concat(e.src, "?query=").concat(m) : e.src,
                                    className: p.effect,
                                    style: {
                                        top: (null !== (T = null === (u = e.position) || void 0 === u ? void 0 : u.y) && void 0 !== T ? T : 0) - t,
                                        left: null !== (A = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== A ? A : 0
                                    },
                                    alt: C
                                }, e.src + o)
                            })
                        })
                    })
                },
                v = e => {
                    let {
                        config: t,
                        useThumbnail: r,
                        bannerAdjustment: o = 0,
                        noBorderRadius: u,
                        isHovering: i = !1,
                        useOpacityOnHover: a = !0
                    } = e, {
                        reducedMotionSrc: s,
                        thumbnailPreviewSrc: c,
                        accessibilityLabel: f
                    } = t;
                    return (0, n.jsx)("div", {
                        className: l(p.profileEffects, {
                            [p.hovered]: i && a
                        }),
                        children: (0, n.jsx)("div", {
                            className: u ? p.innerNoRadius : p.inner,
                            children: (0, n.jsx)("img", {
                                src: r && !i ? c : s,
                                className: p.effect,
                                style: {
                                    top: 0 - o
                                },
                                alt: f
                            })
                        })
                    })
                };
            var I = e => {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.isFocused()),
                    r = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion),
                    [u, l] = o.useState(!1),
                    {
                        preset: c
                    } = (0, m.default)(e.profileEffectId, () => l(!1));
                return null != c && (t || e.shopPreview || c.config.animationType !== f.AnimationTypes.INTERMITTENT) ? !t && e.shopPreview || !t && c.config.animationType === f.AnimationTypes.PERSISTENT || r || !1 === e.autoPlay && !1 === e.isHovering ? (0, n.jsx)(v, {
                    useThumbnail: e.useThumbnail,
                    config: c.config,
                    bannerAdjustment: e.bannerAdjustment,
                    noBorderRadius: e.noBorderRadius,
                    isHovering: e.isHovering,
                    useOpacityOnHover: e.useOpacityOnHover
                }) : u ? (0, n.jsx)(R, {
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
                    return u
                }
            });
            var n = r("37983");
            r("884691");
            var o = r("833395"),
                u = e => {
                    let {
                        profileEffectConfig: t,
                        onReady: r
                    } = e, {
                        pendingRef: u,
                        setPending: l
                    } = (0, o.default)(t.effects, r);
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
                                l(u.current - 1), u.current = u.current - 1
                            }
                        }, e.src))
                    })
                }
        },
        417675: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var n = r("884691");
            let o = e => {
                e.effects.forEach(e => {
                    let {
                        src: t
                    } = e, r = document.createElement("link");
                    r.rel = "prefetch", r.href = t, document.body.appendChild(r)
                })
            };
            var u = e => {
                n.useEffect(() => {
                    o(e)
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
                o = r("890503"),
                u = r("784410"),
                l = (e, t) => {
                    let r = (0, o.default)("profile_effect_debug_controls"),
                        {
                            id: l,
                            preset: i,
                            increment: a,
                            decrement: s
                        } = (0, u.default)(e);
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
                    return p
                },
                calculateButtonColor: function() {
                    return R
                },
                useMessageInputBorderColor: function() {
                    return v
                },
                useDividerColor: function() {
                    return I
                }
            }), r("222007");
            var n = r("884691"),
                o = r("917351"),
                u = r("509043"),
                l = r("65597"),
                i = r("669491"),
                a = r("819855"),
                s = r("206230"),
                c = r("449918"),
                f = r("172182"),
                d = r("49111");

            function E(e) {
                let t = (0, l.useStateFromStores)([s.default], () => s.default.saturation);
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
                let t = (0, u.getDarkness)(e);
                return t > .5 ? d.ThemeTypes.DARK : d.ThemeTypes.LIGHT
            }

            function A(e, t, r) {
                let n = r / 100,
                    o = 1 - n;
                return [Math.round(e[0] * o + t[0] * n), Math.round(e[1] * o + t[1] * n), Math.round(e[2] * o + t[2] * n)]
            }

            function m(e, t) {
                let r = (0, u.int2rgbArray)(e);
                if (null == t) return 0;
                let n = f.default.parseString(t);
                if (null == n) return 0;
                let o = [n.red, n.green, n.blue],
                    l = [r[0], r[1], r[2]],
                    i = n.alpha,
                    [a, s, c] = o.map((e, t) => Math.floor(i * e + (1 - i) * l[t]));
                return (0, u.rgb2int)("rgba(".concat(a, ", ").concat(s, ", ").concat(c, ")"))
            }

            function p(e, t, r) {
                let n = E(e);
                return null == n || null == t ? null : m(t, r ? n.overlaySyncedWithUserTheme : n.overlay)
            }
            let R = (0, o.memoize)(e => {
                let t = (0, a.getContrastingColor)(e, {
                    base: "#ffffff",
                    contrastRatio: a.WCAGContrastRatios.HighContrastText
                });
                return (0, u.hex2int)(t)
            }, e => e);

            function v(e, t) {
                let r = E(e);
                return null != r && null != t ? m(t, null == r ? void 0 : r.messageInputBorder) : null
            }

            function I(e, t) {
                let r = (0, c.useColorValue)(d.Color.WHITE_500).hex;
                return (0, a.isThemeDark)(e) ? (0, u.hex2int)(r) : null != t ? R(t) : null
            }
        },
        635058: function(e, t, r) {
            "use strict";
            var n, o;
            r.r(t), r.d(t, {
                CollectiblesCategorySkuId: function() {
                    return n
                }
            }), r("222007"), (o = n || (n = {})).FANTASY = "1144003461608906824", o.ANIME = "1144302037593497701", o.BREAKFAST = "1144054000099012659", o.DISXCORE = "1144058340327047249", o.HALLOWEEN = "1157410718711304313", o.FALL = "1157406994873991284", o.WINTER = "1174459301239197856", o.MONSTERS = "1179493515038818325", o.CYBERPUNK = "1197342727608746044", o.LUNAR_NEW_YEAR = "1202069709281828935", o.ELEMENTS = "1207046915880124426", o.ANIME_V2 = "1212565175790473246", o.SPECIAL_EVENTS = "1217175518781243583", o.SPRINGTOONS = "1217622942175727736", o.SHY = "1220513972189663413"
        }
    }
]);
//# sourceMappingURL=30791.be8d5bc5a807748f4701.js.map