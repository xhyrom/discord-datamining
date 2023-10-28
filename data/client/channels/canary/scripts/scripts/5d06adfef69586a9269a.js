(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22198"], {
        335189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveClydeProfile: function() {
                    return f
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
                    return S
                },
                setPendingThemeColors: function() {
                    return y
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
                    return L
                },
                startEditingClydeProfile: function() {
                    return m
                },
                doneEditingClydeProfile: function() {
                    return D
                }
            });
            var r = n("872717"),
                i = n("913144"),
                l = n("327037"),
                u = n("599110"),
                o = n("473591"),
                a = n("680894"),
                s = n("49111");
            async function f(e, t) {
                let n = await E(e, t);
                return n
            }
            async function c(e) {
                return await r.default.put({
                    url: s.Endpoints.GUILD_CLYDE_ADD_MEMBER(e),
                    oldFormErrors: !0
                })
            }
            async function d(e) {
                try {
                    let t = await r.default.post({
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
                let n = null != t.personality && o.default.getGeneratedPersonality() === o.default.getPendingPersonality();
                try {
                    var l, f;
                    let o = await r.default.patch({
                        url: s.Endpoints.GUILD_CLYDE_SETTINGS(e),
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
                        profileEffectID: void 0,
                        ...o.body.guild_member_profile
                    }), null != o.body.guild_member && i.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: o.body.guild_member,
                        guildId: e
                    }), o.body.settings;
                    return i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                        errors: null !== (f = null === (l = o.body) || void 0 === l ? void 0 : l.errors) && void 0 !== f ? f : {}
                    }), u.default.track(s.AnalyticEvents.CLYDE_AI_PROFILE_UPDATE_FAILED, {
                        guild_id: e,
                        clyde_profile_id: t.clyde_profile_id
                    }), null
                } catch (n) {
                    return i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                        errors: n.body
                    }), u.default.track(s.AnalyticEvents.CLYDE_AI_PROFILE_UPDATE_FAILED, {
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

            function S(e) {
                i.default.dispatch({
                    type: "CLYDE_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function y(e) {
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
                    (0, l.fetchProfile)(a.CLYDE_AI_USER_ID, {
                        guildId: e
                    }), i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await r.default.get({
                                url: s.Endpoints.GUILD_CLYDE_SETTINGS(e),
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
                                url: s.Endpoints.CLYDE_PROFILES(e),
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
            async function L(e) {
                try {
                    let t = await r.default.post({
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

            function m() {
                i.default.dispatch({
                    type: "CLYDE_PROFILE_EDITING_START"
                })
            }

            function D() {
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
                l = n("446674"),
                u = n("913144");
            let o = [],
                a = !1;
            let s = o,
                f = {},
                c = null,
                d = e => {
                    s = (0, i.cloneDeep)(e);
                    let t = {};
                    s.forEach(e => {
                        t[e.id] = e
                    }), f = t
                };
            class E extends l.default.Store {
                get isFetching() {
                    return a
                }
                get fetchError() {
                    return r
                }
                get profileEffects() {
                    return s
                }
                get tryItOutId() {
                    return c
                }
                getProfileEffectById(e) {
                    return f[e]
                }
            }
            E.displayName = "ProfileEffectStore";
            var _ = new E(u.default, {
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
                    return l
                },
                canUseProfileEffects: function() {
                    return u
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

            function l(e) {
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

            function u(e) {
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
            var r, i, l, u;
            n.r(t), n.d(t, {
                RestartMethod: function() {
                    return r
                },
                AnimationTypes: function() {
                    return i
                }
            }), (l = r || (r = {})).FromLoop = "fromLoop", l.FromStart = "fromStart", (u = i || (i = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.PERSISTENT = 1] = "PERSISTENT", u[u.INTERMITTENT = 2] = "INTERMITTENT"
        },
        687682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691");
            let i = 1e3 / 24;
            var l = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                    n = r.useRef(0),
                    l = r.useRef(),
                    u = r.useRef(!0),
                    o = r.useCallback(() => {
                        u.current = !1, cancelAnimationFrame(n.current)
                    }, []),
                    a = r.useCallback(r => {
                        null == l.current && (l.current = r);
                        let i = r - l.current;
                        i >= t && (l.current = r, e(i)), u.current && (n.current = requestAnimationFrame(a))
                    }, [e, t]),
                    s = r.useCallback(() => {
                        u.current = !0, l.current = void 0, n.current = requestAnimationFrame(a)
                    }, [a]);
                return r.useEffect(() => (n.current = requestAnimationFrame(a), () => cancelAnimationFrame(n.current)), []), {
                    stop: o,
                    reset: s,
                    ticking: u
                }
            }
        },
        833395: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691"),
                i = (e, t) => {
                    let [n, i] = r.useState(-1), l = r.useRef(-1);
                    return r.useEffect(() => {
                        let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
                        i(t.length), l.current = t.length
                    }, [e, l, i]), r.useEffect(() => {
                        0 === n && t()
                    }, [n, t]), {
                        pending: n,
                        pendingRef: l,
                        setPending: i
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
            let r = e => {
                var t, n;
                return e.sort((e, r) => (null !== (t = e.zIndex) && void 0 !== t ? t : 0) - (null !== (n = r.zIndex) && void 0 !== n ? n : 0))
            }
        },
        635471: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("446674"),
                a = n("206230"),
                s = n("845962"),
                f = n("662286"),
                c = n("76047"),
                d = n("859498"),
                E = n("687682"),
                _ = n("525808"),
                p = n("465523"),
                T = n("417675"),
                S = n("260742");
            let y = e => {
                    let {
                        bannerAdjustment: t = 0,
                        maxLoops: n,
                        resetOnHover: l = !1,
                        isHovering: o = !1,
                        useOpacityOnHover: a = !0,
                        autoPlay: s = !0,
                        restartMethod: f,
                        urlQueryString: p,
                        profileEffectConfig: y,
                        noBorderRadius: I = !1,
                        introDelay: C = c.ENTRY_DELAY
                    } = e, A = i.useRef(null), [L, m] = i.useState([]);
                    (0, T.default)(y);
                    let [D, R] = i.useState(0), [h, P] = i.useState(0), {
                        accessibilityLabel: g
                    } = y, [F, N] = i.useState(-C), {
                        stop: v,
                        reset: b,
                        ticking: U
                    } = (0, E.default)(e => {
                        N(t => t + e)
                    });
                    i.useEffect(() => {
                        N(-C), m((0, _.sortEffectLayers)(y.effects))
                    }, [y]), i.useEffect(() => {
                        let e = 0,
                            t = 1 / 0;
                        L.forEach(n => {
                            let r = n.start + n.duration;
                            r > e && (e = r), n.loop && n.start < t && (t = n.start)
                        }), R(t), P(e)
                    }, [P, L]);
                    let [Y, G] = i.useState(!1);
                    return i.useEffect(() => {
                        !0 !== s && !o && (v(), N(0)), !o && Y && U.current && (v(), N(0)), l && o && !U.current && (b(), y.animationType === d.AnimationTypes.PERSISTENT ? N(f === d.RestartMethod.FromStart ? 0 : D) : N(0))
                    }, [o, Y, D, l, v, b, U, y.animationType, s, f]), (0, r.jsx)("div", {
                        ref: A,
                        className: u(S.profileEffects, {
                            [S.hovered]: o && a
                        }),
                        children: (0, r.jsx)("div", {
                            className: I ? S.innerNoRadius : S.inner,
                            children: L.map((e, i) => {
                                var l, u, o, a, f, E, _, T;
                                if (!U.current) {
                                    if (y.animationType === d.AnimationTypes.PERSISTENT && 0 === i && !0 === s) {
                                        let {
                                            staticFrameSrc: n
                                        } = y;
                                        return (0, r.jsx)("img", {
                                            className: S.effect,
                                            style: {
                                                top: null !== (f = null === (o = e.position) || void 0 === o ? void 0 : o.y) && void 0 !== f ? f : 0 - t,
                                                left: null !== (E = null === (a = e.position) || void 0 === a ? void 0 : a.x) && void 0 !== E ? E : 0
                                            },
                                            src: n,
                                            alt: g
                                        }, e.src + i)
                                    }
                                    return (0, r.jsx)("img", {
                                        src: c.RESET,
                                        alt: g
                                    }, e.src + i)
                                }
                                if (F < e.start || !e.loop && F > e.duration + e.start) return (0, r.jsx)("img", {
                                    src: c.RESET,
                                    alt: g
                                }, e.src + i);
                                if (y.animationType === d.AnimationTypes.PERSISTENT && !Y && null != n && F >= h && G(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
                                    let t = e.duration + e.loopDelay,
                                        l = Math.floor((F - e.start) / t);
                                    if (F - e.start - l * t > e.duration) return y.animationType === d.AnimationTypes.INTERMITTENT && !Y && null != n && l >= n && G(!0), (0, r.jsx)("img", {
                                        src: c.RESET,
                                        alt: g
                                    }, e.src + i)
                                }
                                return (0, r.jsx)("img", {
                                    src: null != p ? "".concat(e.src, "?query=").concat(p) : e.src,
                                    className: S.effect,
                                    style: {
                                        top: (null !== (_ = null === (l = e.position) || void 0 === l ? void 0 : l.y) && void 0 !== _ ? _ : 0) - t,
                                        left: null !== (T = null === (u = e.position) || void 0 === u ? void 0 : u.x) && void 0 !== T ? T : 0
                                    },
                                    alt: g
                                }, e.src + i)
                            })
                        })
                    })
                },
                I = e => {
                    let {
                        config: t,
                        useThumbnail: n,
                        bannerAdjustment: i = 0,
                        noBorderRadius: l
                    } = e, {
                        reducedMotionSrc: u,
                        thumbnailPreviewSrc: o,
                        accessibilityLabel: a
                    } = t;
                    return (0, r.jsx)("div", {
                        className: S.profileEffects,
                        children: (0, r.jsx)("div", {
                            className: l ? S.innerNoRadius : S.inner,
                            children: (0, r.jsx)("img", {
                                src: n ? o : u,
                                className: S.effect,
                                style: {
                                    top: 0 - i
                                },
                                alt: a
                            })
                        })
                    })
                };
            var C = e => {
                var t;
                let n = (0, f.useCanUseProfileEffects)({
                        location: "WebWrappedProfileEffect"
                    }),
                    l = null != e.profileEffectID ? null === (t = s.default.getProfileEffectById(e.profileEffectID)) || void 0 === t ? void 0 : t.config : null,
                    u = (0, o.useStateFromStores)([a.default], () => a.default.useReducedMotion),
                    [c, d] = i.useState(!1);
                return n && null != l ? u || !1 === e.autoPlay && !1 === e.isHovering ? (0, r.jsx)(I, {
                    useThumbnail: e.useThumbnail,
                    config: l,
                    bannerAdjustment: e.bannerAdjustment,
                    noBorderRadius: e.noBorderRadius
                }) : c ? (0, r.jsx)(y, {
                    profileEffectConfig: l,
                    ...e
                }) : (0, r.jsx)(p.default, {
                    profileEffectConfig: l,
                    onReady: () => {
                        d(!0)
                    }
                }) : null
            }
        },
        465523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("833395"),
                l = e => {
                    let {
                        profileEffectConfig: t,
                        onReady: n
                    } = e, {
                        pendingRef: l,
                        setPending: u
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
                                u(l.current - 1), l.current = l.current - 1
                            }
                        }, e.src))
                    })
                }
        },
        417675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
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
            var l = e => {
                r.useEffect(() => {
                    i(e)
                }, [e])
            }
        }
    }
]);
//# sourceMappingURL=5d06adfef69586a9269a.js.map