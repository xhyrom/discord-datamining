(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22198"], {
        335189: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                saveClydeProfile: function() {
                    return d
                },
                addClydeGuildMember: function() {
                    return c
                },
                generatePersonality: function() {
                    return f
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
                    return A
                },
                fetchClydeProfile: function() {
                    return C
                },
                createClydeProfile: function() {
                    return m
                },
                startEditingClydeProfile: function() {
                    return L
                },
                doneEditingClydeProfile: function() {
                    return h
                }
            });
            var n = r("872717"),
                i = r("913144"),
                u = r("327037"),
                l = r("599110"),
                o = r("473591"),
                a = r("680894"),
                s = r("49111");
            async function d(e, t) {
                let r = await E(e, t);
                return r
            }
            async function c(e) {
                return await n.default.put({
                    url: s.Endpoints.GUILD_CLYDE_ADD_MEMBER(e),
                    oldFormErrors: !0
                })
            }
            async function f(e) {
                try {
                    let t = await n.default.post({
                        url: s.Endpoints.CLYDE_PROFILES_GENERATE_PERSONALITY,
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
                let r = null != t.personality && o.default.getGeneratedPersonality() === o.default.getPendingPersonality();
                try {
                    var u, d;
                    let o = await n.default.patch({
                        url: s.Endpoints.GUILD_CLYDE_SETTINGS(e),
                        oldFormErrors: !0,
                        body: {
                            ...t,
                            personality_preset: r ? "generated" : "custom"
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
                        errors: null !== (d = null === (u = o.body) || void 0 === u ? void 0 : u.errors) && void 0 !== d ? d : {}
                    }), l.default.track(s.AnalyticEvents.CLYDE_AI_PROFILE_UPDATE_FAILED, {
                        guild_id: e,
                        clyde_profile_id: t.clyde_profile_id
                    }), null
                } catch (r) {
                    return i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                        errors: r.body
                    }), l.default.track(s.AnalyticEvents.CLYDE_AI_PROFILE_UPDATE_FAILED, {
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
            async function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t || o.default.shouldFetchSettings(e)) {
                    (0, u.fetchProfile)(a.CLYDE_AI_USER_ID, {
                        guildId: e
                    }), i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await n.default.get({
                                url: s.Endpoints.GUILD_CLYDE_SETTINGS(e),
                                oldFormErrors: !0
                            }),
                            r = t.body;
                        i.default.dispatch({
                            type: "CLYDE_GUILD_SETTINGS_FETCH_SUCCESS",
                            guildId: r.guild_id,
                            settings: r
                        })
                    } catch (t) {
                        i.default.dispatch({
                            type: "CLYDE_GUILD_SETTINGS_FETCH_FAIL",
                            guildId: e
                        })
                    }
                }
            }
            async function C(e) {
                if (null == o.default.getProfile(e)) {
                    i.default.dispatch({
                        type: "CLYDE_PROFILE_FETCH_START",
                        clydeProfileId: e
                    });
                    try {
                        let t = await n.default.get({
                                url: s.Endpoints.CLYDE_PROFILES(e),
                                oldFormErrors: !0
                            }),
                            r = t.body;
                        i.default.dispatch({
                            type: "CLYDE_PROFILE_FETCH_SUCCESS",
                            profile: r
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
                    let t = await n.default.post({
                        url: s.Endpoints.CLYDE_PROFILES_CREATE(e),
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

            function h() {
                i.default.dispatch({
                    type: "CLYDE_PROFILE_EDITING_END"
                })
            }
        },
        845962: function(e, t, r) {
            "use strict";
            let n;
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            });
            var i = r("917351"),
                u = r("446674"),
                l = r("913144");
            let o = [],
                a = !1;
            let s = o,
                d = {},
                c = null,
                f = e => {
                    s = (0, i.cloneDeep)(e);
                    let t = {};
                    s.forEach(e => {
                        t[e.id] = e
                    }), d = t
                };
            class E extends u.default.Store {
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
                    return c
                }
                getProfileEffectById(e) {
                    return null != e ? d[e] : void 0
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
                    a = !1, f(0 === t.length ? o : t)
                },
                USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    a = !1, n = t, f(o)
                },
                PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
                    let {
                        id: t
                    } = e;
                    c = t
                },
                LOGOUT: e => {
                    a = !1, f(o), c = null
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
                    return i
                }
            });
            let n = 500,
                i = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        859498: function(e, t, r) {
            "use strict";
            var n, i, u, l;
            r.r(t), r.d(t, {
                RestartMethod: function() {
                    return n
                },
                AnimationTypes: function() {
                    return i
                }
            }), (u = n || (n = {})).FromLoop = "fromLoop", u.FromStart = "fromStart", (l = i || (i = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.PERSISTENT = 1] = "PERSISTENT", l[l.INTERMITTENT = 2] = "INTERMITTENT"
        },
        687682: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var n = r("884691");
            let i = 1e3 / 24;
            var u = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                    r = n.useRef(0),
                    u = n.useRef(),
                    l = n.useRef(!0),
                    o = n.useCallback(() => {
                        l.current = !1, cancelAnimationFrame(r.current)
                    }, []),
                    a = n.useCallback(n => {
                        null == u.current && (u.current = n);
                        let i = n - u.current;
                        i >= t && (u.current = n, e(i)), l.current && (r.current = requestAnimationFrame(a))
                    }, [e, t]),
                    s = n.useCallback(() => {
                        l.current = !0, u.current = void 0, r.current = requestAnimationFrame(a)
                    }, [a]);
                return n.useEffect(() => (r.current = requestAnimationFrame(a), () => cancelAnimationFrame(r.current)), []), {
                    stop: o,
                    reset: s,
                    ticking: l
                }
            }
        },
        833395: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            }), r("222007"), r("808653"), r("424973");
            var n = r("884691"),
                i = (e, t) => {
                    let [r, i] = n.useState(-1), u = n.useRef(-1);
                    return n.useEffect(() => {
                        let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
                        i(t.length), u.current = t.length
                    }, [e, u, i]), n.useEffect(() => {
                        0 === r && t()
                    }, [r, t]), {
                        pending: r,
                        pendingRef: u,
                        setPending: i
                    }
                }
        },
        784410: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            }), r("222007"), r("808653");
            var n = r("884691"),
                i = r("845962"),
                u = e => {
                    let t = i.default.profileEffects,
                        [r, u] = n.useState(e),
                        [l, o] = n.useState(i.default.getProfileEffectById(e)),
                        a = t.reduce((t, r, n) => (r.id === e && (t = n), t), 0),
                        [, s] = n.useState(a),
                        d = n.useRef(a);
                    return n.useEffect(() => {
                        u(e), o(i.default.getProfileEffectById(e))
                    }, [e]), {
                        increment: () => {
                            let e = (d.current + 1) % t.length;
                            d.current = e, s(e), u(t[e].id), o(t[e])
                        },
                        decrement: () => {
                            let e = 0 === d.current ? t.length - 1 : d.current - 1;
                            d.current = e, s(e), u(t[e].id), o(t[e])
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
                    return A
                }
            }), r("222007");
            var n = r("37983"),
                i = r("884691"),
                u = r("414456"),
                l = r.n(u),
                o = r("446674"),
                a = r("206230"),
                s = r("471671"),
                d = r("76047"),
                c = r("859498"),
                f = r("687682"),
                E = r("525808"),
                _ = r("465523"),
                p = r("417675"),
                T = r("188645"),
                y = r("260742");
            let S = e => {
                    let {
                        bannerAdjustment: t = 0,
                        maxLoops: r,
                        resetOnHover: u = !1,
                        isHovering: o = !1,
                        useOpacityOnHover: a = !0,
                        autoPlay: s = !0,
                        restartMethod: _,
                        urlQueryString: T,
                        profileEffectConfig: S,
                        noBorderRadius: I = !1,
                        introDelay: A = d.ENTRY_DELAY
                    } = e, C = i.useRef(null), [m, L] = i.useState([]);
                    (0, p.default)(S);
                    let [h, D] = i.useState(0), [R, g] = i.useState(0), {
                        accessibilityLabel: v
                    } = S, [P, F] = i.useState(-A), {
                        stop: N,
                        reset: Y,
                        ticking: b
                    } = (0, f.default)(e => {
                        F(t => t + e)
                    });
                    i.useEffect(() => {
                        F(-A), L((0, E.sortEffectLayers)(S.effects))
                    }, [S]), i.useEffect(() => {
                        let e = 0,
                            t = 1 / 0;
                        m.forEach(r => {
                            let n = r.start + r.duration;
                            n > e && (e = n), r.loop && r.start < t && (t = r.start)
                        }), D(t), g(e)
                    }, [g, m]);
                    let [G, U] = i.useState(!1);
                    return i.useEffect(() => {
                        !0 !== s && !o && (N(), F(0)), !o && G && b.current && (N(), F(0)), u && o && !b.current && (Y(), S.animationType === c.AnimationTypes.PERSISTENT ? F(_ === c.RestartMethod.FromStart ? 0 : h) : F(0))
                    }, [o, G, h, u, N, Y, b, S.animationType, s, _]), (0, n.jsx)("div", {
                        ref: C,
                        className: l(y.profileEffects, {
                            [y.hovered]: o && a
                        }),
                        children: (0, n.jsx)("div", {
                            className: I ? y.innerNoRadius : y.inner,
                            children: m.map((e, i) => {
                                var u, l, o, a, f, E, _, p;
                                if (!b.current) {
                                    if (S.animationType === c.AnimationTypes.PERSISTENT && null != S.staticFrameSrc && 0 === i && !0 === s) {
                                        let {
                                            staticFrameSrc: r
                                        } = S;
                                        return (0, n.jsx)("img", {
                                            className: y.effect,
                                            style: {
                                                top: null !== (f = null === (o = e.position) || void 0 === o ? void 0 : o.y) && void 0 !== f ? f : 0 - t,
                                                left: null !== (E = null === (a = e.position) || void 0 === a ? void 0 : a.x) && void 0 !== E ? E : 0
                                            },
                                            src: r,
                                            alt: v
                                        }, e.src + i)
                                    }
                                    return (0, n.jsx)("img", {
                                        src: d.RESET,
                                        alt: v
                                    }, e.src + i)
                                }
                                if (P < e.start || !e.loop && P > e.duration + e.start) return (0, n.jsx)("img", {
                                    src: d.RESET,
                                    alt: v
                                }, e.src + i);
                                if (S.animationType === c.AnimationTypes.PERSISTENT && !G && null != r && P >= R && U(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
                                    let t = e.duration + e.loopDelay,
                                        u = Math.floor((P - e.start) / t);
                                    if (P - e.start - u * t > e.duration) return S.animationType === c.AnimationTypes.INTERMITTENT && !G && null != r && u >= r && U(!0), (0, n.jsx)("img", {
                                        src: d.RESET,
                                        alt: v
                                    }, e.src + i)
                                }
                                return (0, n.jsx)("img", {
                                    src: null != T ? "".concat(e.src, "?query=").concat(T) : e.src,
                                    className: y.effect,
                                    style: {
                                        top: (null !== (_ = null === (u = e.position) || void 0 === u ? void 0 : u.y) && void 0 !== _ ? _ : 0) - t,
                                        left: null !== (p = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== p ? p : 0
                                    },
                                    alt: v
                                }, e.src + i)
                            })
                        })
                    })
                },
                I = e => {
                    let {
                        config: t,
                        useThumbnail: r,
                        bannerAdjustment: i = 0,
                        noBorderRadius: u,
                        isHovering: o = !1,
                        useOpacityOnHover: a = !0
                    } = e, {
                        reducedMotionSrc: s,
                        thumbnailPreviewSrc: d,
                        accessibilityLabel: c
                    } = t;
                    return (0, n.jsx)("div", {
                        className: l(y.profileEffects, {
                            [y.hovered]: o && a
                        }),
                        children: (0, n.jsx)("div", {
                            className: u ? y.innerNoRadius : y.inner,
                            children: (0, n.jsx)("img", {
                                src: r && !o ? d : s,
                                className: y.effect,
                                style: {
                                    top: 0 - i
                                },
                                alt: c
                            })
                        })
                    })
                };
            var A = e => {
                let t = (0, o.useStateFromStores)([s.default], () => s.default.isFocused()),
                    r = (0, o.useStateFromStores)([a.default], () => a.default.useReducedMotion),
                    [u, l] = i.useState(!1),
                    {
                        preset: d
                    } = (0, T.default)(e.profileEffectId, () => l(!1));
                return null != d && (t || e.shopPreview || d.config.animationType !== c.AnimationTypes.INTERMITTENT) ? !t && e.shopPreview || !t && d.config.animationType === c.AnimationTypes.PERSISTENT || r || !1 === e.autoPlay && !1 === e.isHovering ? (0, n.jsx)(I, {
                    useThumbnail: e.useThumbnail,
                    config: d.config,
                    bannerAdjustment: e.bannerAdjustment,
                    noBorderRadius: e.noBorderRadius,
                    isHovering: e.isHovering,
                    useOpacityOnHover: e.useOpacityOnHover
                }) : u ? (0, n.jsx)(S, {
                    profileEffectConfig: d.config,
                    ...e
                }) : (0, n.jsx)(_.default, {
                    profileEffectConfig: d.config,
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
            var i = r("833395"),
                u = e => {
                    let {
                        profileEffectConfig: t,
                        onReady: r
                    } = e, {
                        pendingRef: u,
                        setPending: l
                    } = (0, i.default)(t.effects, r);
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
            let i = e => {
                e.effects.forEach(e => {
                    let {
                        src: t
                    } = e, r = document.createElement("link");
                    r.rel = "prefetch", r.href = t, document.body.appendChild(r)
                })
            };
            var u = e => {
                n.useEffect(() => {
                    i(e)
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
                i = r("890503"),
                u = r("784410"),
                l = (e, t) => {
                    let r = (0, i.default)("profile_effect_debug_controls"),
                        {
                            id: l,
                            preset: o,
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
                        preset: o
                    }
                }
        }
    }
]);
//# sourceMappingURL=22198.18946cfba71a0683afcd.js.map