(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22198"], {
        335189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveClydeProfile: function() {
                    return s
                },
                addClydeGuildMember: function() {
                    return c
                },
                generatePersonality: function() {
                    return d
                },
                setPendingPersonality: function() {
                    return _
                },
                setPendingNick: function() {
                    return p
                },
                setPendingAvatar: function() {
                    return T
                },
                setPendingBanner: function() {
                    return y
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingChanges: function() {
                    return I
                },
                fetchClydeSettings: function() {
                    return C
                },
                fetchClydeProfile: function() {
                    return A
                },
                createClydeProfile: function() {
                    return m
                },
                startEditingClydeProfile: function() {
                    return L
                },
                doneEditingClydeProfile: function() {
                    return g
                }
            });
            var r = n("872717"),
                i = n("913144"),
                u = n("327037"),
                l = n("599110"),
                o = n("473591"),
                a = n("680894"),
                f = n("49111");
            async function s(e, t) {
                let n = await E(e, t);
                return n
            }
            async function c(e) {
                return await r.default.put({
                    url: f.Endpoints.GUILD_CLYDE_ADD_MEMBER(e),
                    oldFormErrors: !0
                })
            }
            async function d(e) {
                try {
                    let t = await r.default.post({
                        url: f.Endpoints.CLYDE_PROFILES_GENERATE_PERSONALITY,
                        oldFormErrors: !0,
                        body: {
                            personality: e
                        }
                    });
                    if (t.ok) return t.body.personality;
                    return null
                } catch (e) {
                    return null
                }
            }
            async function E(e, t) {
                i.default.dispatch({
                    type: "CLYDE_GUILD_SETTINGS_SAVE_START"
                });
                let n = null != t.personality && o.default.getGeneratedPersonality() === o.default.getPendingPersonality();
                try {
                    var u, s;
                    let o = await r.default.patch({
                        url: f.Endpoints.GUILD_CLYDE_SETTINGS(e),
                        oldFormErrors: !0,
                        body: {
                            ...t,
                            personality_preset: n ? "generated" : "custom"
                        }
                    });
                    if (o.ok) return i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_SAVE_SUCCESS",
                        settings: o.body.settings
                    }), null != o.body.guild_member_profile && i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_SUCCESS",
                        userId: a.CLYDE_AI_USER_ID,
                        profileEffectId: void 0,
                        ...o.body.guild_member_profile
                    }), null != o.body.guild_member && i.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: o.body.guild_member,
                        guildId: e
                    }), o.body.settings;
                    return i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                        errors: null !== (s = null === (u = o.body) || void 0 === u ? void 0 : u.errors) && void 0 !== s ? s : {}
                    }), l.default.track(f.AnalyticEvents.CLYDE_AI_PROFILE_UPDATE_FAILED, {
                        guild_id: e,
                        clyde_profile_id: t.clyde_profile_id
                    }), null
                } catch (n) {
                    return i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                        errors: n.body
                    }), l.default.track(f.AnalyticEvents.CLYDE_AI_PROFILE_UPDATE_FAILED, {
                        guild_id: e,
                        clyde_profile_id: t.clyde_profile_id
                    }), null
                }
            }

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                i.default.dispatch({
                    type: "CLYDE_SET_PENDING_PERSONALITY",
                    personality: e,
                    isGenerated: t
                })
            }

            function p(e) {
                i.default.dispatch({
                    type: "CLYDE_SET_PENDING_NICK",
                    nick: null != e ? e : ""
                })
            }

            function T(e) {
                i.default.dispatch({
                    type: "CLYDE_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function y(e) {
                i.default.dispatch({
                    type: "CLYDE_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function S(e) {
                i.default.dispatch({
                    type: "CLYDE_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function I() {
                i.default.dispatch({
                    type: "CLYDE_RESET_PENDING_CHANGES"
                })
            }
            async function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t || o.default.shouldFetchSettings(e)) {
                    (0, u.fetchProfile)(a.CLYDE_AI_USER_ID, {
                        guildId: e
                    }), i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await r.default.get({
                                url: f.Endpoints.GUILD_CLYDE_SETTINGS(e),
                                oldFormErrors: !0
                            }),
                            n = t.body;
                        i.default.dispatch({
                            type: "CLYDE_GUILD_SETTINGS_FETCH_SUCCESS",
                            guildId: n.guild_id,
                            settings: n
                        })
                    } catch (t) {
                        i.default.dispatch({
                            type: "CLYDE_GUILD_SETTINGS_FETCH_FAIL",
                            guildId: e
                        })
                    }
                }
            }
            async function A(e) {
                if (null == o.default.getProfile(e)) {
                    i.default.dispatch({
                        type: "CLYDE_PROFILE_FETCH_START",
                        clydeProfileId: e
                    });
                    try {
                        let t = await r.default.get({
                                url: f.Endpoints.CLYDE_PROFILES(e),
                                oldFormErrors: !0
                            }),
                            n = t.body;
                        i.default.dispatch({
                            type: "CLYDE_PROFILE_FETCH_SUCCESS",
                            profile: n
                        })
                    } catch (t) {
                        i.default.dispatch({
                            type: "CLYDE_PROFILE_FETCH_FAIL",
                            clydeProfileId: e
                        })
                    }
                }
            }
            async function m(e) {
                try {
                    let t = await r.default.post({
                        url: f.Endpoints.CLYDE_PROFILES_CREATE(e),
                        oldFormErrors: !0
                    });
                    return t.ok && i.default.dispatch({
                        type: "CLYDE_PROFILE_CREATE_SUCCESS",
                        profile: t.body
                    }), t.body
                } catch (e) {
                    return null
                }
            }

            function L() {
                i.default.dispatch({
                    type: "CLYDE_PROFILE_EDITING_START"
                })
            }

            function g() {
                i.default.dispatch({
                    type: "CLYDE_PROFILE_EDITING_END"
                })
            }
        },
        845962: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("917351"),
                u = n("446674"),
                l = n("913144");
            let o = [],
                a = !1;
            let f = o,
                s = {},
                c = null,
                d = e => {
                    f = (0, i.cloneDeep)(e);
                    let t = {};
                    f.forEach(e => {
                        t[e.id] = e
                    }), s = t
                };
            class E extends u.default.Store {
                get isFetching() {
                    return a
                }
                get fetchError() {
                    return r
                }
                get profileEffects() {
                    return f
                }
                get tryItOutId() {
                    return c
                }
                getProfileEffectById(e) {
                    return null != e ? s[e] : void 0
                }
            }
            E.displayName = "ProfileEffectStore";
            var _ = new E(l.default, {
                USER_PROFILE_EFFECTS_FETCH: () => {
                    a = !0
                },
                USER_PROFILE_EFFECTS_FETCH_SUCCESS: e => {
                    let {
                        profileEffects: t
                    } = e;
                    a = !1, d(0 === t.length ? o : t)
                },
                USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    a = !1, r = t, d(o)
                },
                PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
                    let {
                        id: t
                    } = e;
                    c = t
                },
                LOGOUT: e => {
                    a = !1, d(o), c = null
                }
            })
        },
        662286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanUseProfileEffects: function() {
                    return u
                },
                canUseProfileEffects: function() {
                    return l
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-08_profile_effects",
                label: "Profile Effects User Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables profile effects and shop",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function u(e) {
                let {
                    location: t,
                    trackExposureOptions: n = {},
                    autoTrackExposure: r = !0
                } = e;
                return i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: r,
                    trackExposureOptions: n
                }).enabled
            }

            function l(e) {
                let {
                    location: t,
                    trackExposureOptions: n = {},
                    autoTrackExposure: r = !0
                } = e;
                return i.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: r,
                    trackExposureOptions: n
                }).enabled
            }
        },
        76047: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ENTRY_DELAY: function() {
                    return r
                },
                RESET: function() {
                    return i
                }
            });
            let r = 500,
                i = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        859498: function(e, t, n) {
            "use strict";
            var r, i, u, l;
            n.r(t), n.d(t, {
                RestartMethod: function() {
                    return r
                },
                AnimationTypes: function() {
                    return i
                }
            }), (u = r || (r = {})).FromLoop = "fromLoop", u.FromStart = "fromStart", (l = i || (i = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.PERSISTENT = 1] = "PERSISTENT", l[l.INTERMITTENT = 2] = "INTERMITTENT"
        },
        687682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");
            let i = 1e3 / 24;
            var u = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                    n = r.useRef(0),
                    u = r.useRef(),
                    l = r.useRef(!0),
                    o = r.useCallback(() => {
                        l.current = !1, cancelAnimationFrame(n.current)
                    }, []),
                    a = r.useCallback(r => {
                        null == u.current && (u.current = r);
                        let i = r - u.current;
                        i >= t && (u.current = r, e(i)), l.current && (n.current = requestAnimationFrame(a))
                    }, [e, t]),
                    f = r.useCallback(() => {
                        l.current = !0, u.current = void 0, n.current = requestAnimationFrame(a)
                    }, [a]);
                return r.useEffect(() => (n.current = requestAnimationFrame(a), () => cancelAnimationFrame(n.current)), []), {
                    stop: o,
                    reset: f,
                    ticking: l
                }
            }
        },
        833395: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007"), n("808653"), n("424973");
            var r = n("884691"),
                i = (e, t) => {
                    let [n, i] = r.useState(-1), u = r.useRef(-1);
                    return r.useEffect(() => {
                        let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
                        i(t.length), u.current = t.length
                    }, [e, u, i]), r.useEffect(() => {
                        0 === n && t()
                    }, [n, t]), {
                        pending: n,
                        pendingRef: u,
                        setPending: i
                    }
                }
        },
        784410: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007"), n("808653");
            var r = n("884691"),
                i = n("845962"),
                u = e => {
                    let t = i.default.profileEffects,
                        [n, u] = r.useState(e),
                        [l, o] = r.useState(i.default.getProfileEffectById(e)),
                        a = t.reduce((t, n, r) => (n.id === e && (t = r), t), 0),
                        [, f] = r.useState(a),
                        s = r.useRef(a);
                    return r.useEffect(() => {
                        u(e), o(i.default.getProfileEffectById(e))
                    }, [e]), {
                        increment: () => {
                            let e = (s.current + 1) % t.length;
                            s.current = e, f(e), u(t[e].id), o(t[e])
                        },
                        decrement: () => {
                            let e = 0 === s.current ? t.length - 1 : s.current - 1;
                            s.current = e, f(e), u(t[e].id), o(t[e])
                        },
                        id: n,
                        preset: l
                    }
                }
        },
        525808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                sortEffectLayers: function() {
                    return r
                }
            });
            let r = e => e.sort((e, t) => {
                var n, r;
                return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (r = t.zIndex) && void 0 !== r ? r : 0)
            })
        },
        635471: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                u = n("414456"),
                l = n.n(u),
                o = n("446674"),
                a = n("206230"),
                f = n("471671"),
                s = n("662286"),
                c = n("76047"),
                d = n("859498"),
                E = n("687682"),
                _ = n("525808"),
                p = n("465523"),
                T = n("417675"),
                y = n("188645"),
                S = n("260742");
            let I = e => {
                    let {
                        bannerAdjustment: t = 0,
                        maxLoops: n,
                        resetOnHover: u = !1,
                        isHovering: o = !1,
                        useOpacityOnHover: a = !0,
                        autoPlay: f = !0,
                        restartMethod: s,
                        urlQueryString: p,
                        profileEffectConfig: y,
                        noBorderRadius: I = !1,
                        introDelay: C = c.ENTRY_DELAY
                    } = e, A = i.useRef(null), [m, L] = i.useState([]);
                    (0, T.default)(y);
                    let [g, D] = i.useState(0), [R, h] = i.useState(0), {
                        accessibilityLabel: P
                    } = y, [v, F] = i.useState(-C), {
                        stop: N,
                        reset: b,
                        ticking: U
                    } = (0, E.default)(e => {
                        F(t => t + e)
                    });
                    i.useEffect(() => {
                        F(-C), L((0, _.sortEffectLayers)(y.effects))
                    }, [y]), i.useEffect(() => {
                        let e = 0,
                            t = 1 / 0;
                        m.forEach(n => {
                            let r = n.start + n.duration;
                            r > e && (e = r), n.loop && n.start < t && (t = n.start)
                        }), D(t), h(e)
                    }, [h, m]);
                    let [Y, G] = i.useState(!1);
                    return i.useEffect(() => {
                        !0 !== f && !o && (N(), F(0)), !o && Y && U.current && (N(), F(0)), u && o && !U.current && (b(), y.animationType === d.AnimationTypes.PERSISTENT ? F(s === d.RestartMethod.FromStart ? 0 : g) : F(0))
                    }, [o, Y, g, u, N, b, U, y.animationType, f, s]), (0, r.jsx)("div", {
                        ref: A,
                        className: l(S.profileEffects, {
                            [S.hovered]: o && a
                        }),
                        children: (0, r.jsx)("div", {
                            className: I ? S.innerNoRadius : S.inner,
                            children: m.map((e, i) => {
                                var u, l, o, a, s, E, _, T;
                                if (!U.current) {
                                    if (y.animationType === d.AnimationTypes.PERSISTENT && null != y.staticFrameSrc && 0 === i && !0 === f) {
                                        let {
                                            staticFrameSrc: n
                                        } = y;
                                        return (0, r.jsx)("img", {
                                            className: S.effect,
                                            style: {
                                                top: null !== (s = null === (o = e.position) || void 0 === o ? void 0 : o.y) && void 0 !== s ? s : 0 - t,
                                                left: null !== (E = null === (a = e.position) || void 0 === a ? void 0 : a.x) && void 0 !== E ? E : 0
                                            },
                                            src: n,
                                            alt: P
                                        }, e.src + i)
                                    }
                                    return (0, r.jsx)("img", {
                                        src: c.RESET,
                                        alt: P
                                    }, e.src + i)
                                }
                                if (v < e.start || !e.loop && v > e.duration + e.start) return (0, r.jsx)("img", {
                                    src: c.RESET,
                                    alt: P
                                }, e.src + i);
                                if (y.animationType === d.AnimationTypes.PERSISTENT && !Y && null != n && v >= R && G(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
                                    let t = e.duration + e.loopDelay,
                                        u = Math.floor((v - e.start) / t);
                                    if (v - e.start - u * t > e.duration) return y.animationType === d.AnimationTypes.INTERMITTENT && !Y && null != n && u >= n && G(!0), (0, r.jsx)("img", {
                                        src: c.RESET,
                                        alt: P
                                    }, e.src + i)
                                }
                                return (0, r.jsx)("img", {
                                    src: null != p ? "".concat(e.src, "?query=").concat(p) : e.src,
                                    className: S.effect,
                                    style: {
                                        top: (null !== (_ = null === (u = e.position) || void 0 === u ? void 0 : u.y) && void 0 !== _ ? _ : 0) - t,
                                        left: null !== (T = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== T ? T : 0
                                    },
                                    alt: P
                                }, e.src + i)
                            })
                        })
                    })
                },
                C = e => {
                    let {
                        config: t,
                        useThumbnail: n,
                        bannerAdjustment: i = 0,
                        noBorderRadius: u,
                        isHovering: o = !1,
                        useOpacityOnHover: a = !0
                    } = e, {
                        reducedMotionSrc: f,
                        thumbnailPreviewSrc: s,
                        accessibilityLabel: c
                    } = t;
                    return (0, r.jsx)("div", {
                        className: l(S.profileEffects, {
                            [S.hovered]: o && a
                        }),
                        children: (0, r.jsx)("div", {
                            className: u ? S.innerNoRadius : S.inner,
                            children: (0, r.jsx)("img", {
                                src: n ? s : f,
                                className: S.effect,
                                style: {
                                    top: 0 - i
                                },
                                alt: c
                            })
                        })
                    })
                };
            var A = e => {
                let t = (0, s.useCanUseProfileEffects)({
                        location: "WebWrappedProfileEffect"
                    }),
                    n = (0, o.useStateFromStores)([f.default], () => f.default.isFocused()),
                    u = (0, o.useStateFromStores)([a.default], () => a.default.useReducedMotion),
                    [l, c] = i.useState(!1),
                    {
                        preset: E
                    } = (0, y.default)(e.profileEffectId, () => c(!1));
                return t && null != E && (n || E.config.animationType === d.AnimationTypes.PERSISTENT) ? !n && E.config.animationType === d.AnimationTypes.PERSISTENT || u || !1 === e.autoPlay && !1 === e.isHovering ? (0, r.jsx)(C, {
                    useThumbnail: e.useThumbnail,
                    config: E.config,
                    bannerAdjustment: e.bannerAdjustment,
                    noBorderRadius: e.noBorderRadius,
                    isHovering: e.isHovering,
                    useOpacityOnHover: e.useOpacityOnHover
                }) : l ? (0, r.jsx)(I, {
                    profileEffectConfig: E.config,
                    ...e
                }) : (0, r.jsx)(p.default, {
                    profileEffectConfig: E.config,
                    onReady: () => {
                        c(!0)
                    }
                }) : null
            }
        },
        465523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("833395"),
                u = e => {
                    let {
                        profileEffectConfig: t,
                        onReady: n
                    } = e, {
                        pendingRef: u,
                        setPending: l
                    } = (0, i.default)(t.effects, n);
                    return (0, r.jsx)("div", {
                        children: t.effects.map(e => (0, r.jsx)("img", {
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
        417675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");
            let i = e => {
                e.effects.forEach(e => {
                    let {
                        src: t
                    } = e, n = document.createElement("link");
                    n.rel = "prefetch", n.href = t, document.body.appendChild(n)
                })
            };
            var u = e => {
                r.useEffect(() => {
                    i(e)
                }, [e])
            }
        },
        188645: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691"),
                i = n("890503"),
                u = n("784410"),
                l = (e, t) => {
                    let n = (0, i.default)("profile_effect_debug_controls"),
                        {
                            id: l,
                            preset: o,
                            increment: a,
                            decrement: f
                        } = (0, u.default)(e);
                    return r.useEffect(() => {
                        if (!n) return;
                        let e = e => {
                            "ArrowUp" === e.key && (a(), e.preventDefault()), "ArrowDown" === e.key && (f(), e.preventDefault()), "r" === e.key && (null == t || t(), e.preventDefault())
                        };
                        return window.addEventListener("keydown", e), () => {
                            window.removeEventListener("keydown", e)
                        }
                    }, []), {
                        id: null != l ? l : null,
                        preset: o
                    }
                }
        }
    }
]);
//# sourceMappingURL=22198.18a0a0fea30b37bf372b.js.map