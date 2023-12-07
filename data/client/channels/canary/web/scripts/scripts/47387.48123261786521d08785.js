(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47387"], {
        609708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4a1620da08f098314241.svg"
        },
        602291: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ac64a4b16416154663f7.svg"
        },
        939784: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3af18e66cab696affd74.svg"
        },
        769015: function(e, t, n) {
            "use strict";
            e.exports = n.p + "789cbb1aaa8190be1c18.svg"
        },
        393828: function(e, t, n) {
            "use strict";
            e.exports = n.p + "714405524ef39906bd06.png"
        },
        481927: function(e, t, n) {
            "use strict";
            e.exports = n.p + "75ad54f57ebd84babdf2.svg"
        },
        527382: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FileUploadIconClassNames: function() {
                    return a
                },
                DEFAULT_FILE_UPLOAD_ICONS: function() {
                    return s
                },
                EMOJI_FILE_UPLOAD_ICONS: function() {
                    return o
                }
            });
            var i, r, l = n("831839");
            (i = r || (r = {}))[i.IMAGE = 0] = "IMAGE", i[i.DOCUMENT = 1] = "DOCUMENT", i[i.CODE = 2] = "CODE";
            let a = {
                    0: l.image,
                    1: l.document,
                    2: l.code
                },
                s = [1, 0, 2],
                o = [0, 0, 0]
        },
        109036: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("527382"),
                s = n("831839"),
                o = function(e) {
                    let {
                        icons: t,
                        className: n
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: l(s.icons, n),
                        children: [(0, i.jsx)("div", {
                            className: s.wrapOne,
                            children: (0, i.jsx)("div", {
                                className: l(s.icon, s.one, a.FileUploadIconClassNames[t[0]])
                            })
                        }), (0, i.jsx)("div", {
                            className: s.wrapThree,
                            children: (0, i.jsx)("div", {
                                className: l(s.icon, s.three, a.FileUploadIconClassNames[t[2]])
                            })
                        }), (0, i.jsx)("div", {
                            className: s.wrapTwo,
                            children: (0, i.jsx)("div", {
                                className: l(s.icon, s.two, a.FileUploadIconClassNames[t[1]])
                            })
                        })]
                    })
                }
        },
        336522: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                UPLOAD_ERROR_MODAL_KEY: function() {
                    return f
                },
                openUploadError: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("551042"),
                s = n("516256"),
                o = n("202664"),
                u = n("476765"),
                d = n("109036"),
                c = n("527382"),
                m = n("831839");

            function _(e) {
                let {
                    title: t,
                    help: n,
                    showPremiumUpsell: r,
                    transitionState: a,
                    icons: _,
                    fileSize: f,
                    onClose: E
                } = e, T = (0, u.useUID)(), I = null != _ ? _ : c.DEFAULT_FILE_UPLOAD_ICONS;
                return r ? (0, i.jsx)(o.default, {
                    transitionState: a,
                    onClose: E,
                    fileSize: f
                }) : (0, i.jsx)(s.ModalRoot, {
                    size: s.ModalSize.DYNAMIC,
                    "aria-labelledby": T,
                    transitionState: a,
                    children: (0, i.jsx)("div", {
                        className: l(m.uploadDropModal, m.error),
                        children: (0, i.jsxs)("div", {
                            className: m.inner,
                            children: [(0, i.jsx)(d.default, {
                                icons: I
                            }), (0, i.jsx)("div", {
                                id: T,
                                className: m.title,
                                children: t
                            }), (0, i.jsx)("div", {
                                className: m.instructions,
                                children: n
                            })]
                        })
                    })
                })
            }
            let f = "UPLOAD_ERROR_MODAL_KEY";

            function E(e) {
                (0, a.openModal)(t => (0, i.jsx)(_, {
                    ...t,
                    ...e
                }), {
                    modalKey: f
                })
            }
        },
        856567: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SuperReactionIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M15.4 1.53A11 11 0 0 0 1.63 15.68c1.4-1.2 3.8-.81 4.54 1.18l.26.7.7.27c2 .73 2.4 3.14 1.19 4.54A11 11 0 0 0 22.47 8.6a2.93 2.93 0 0 1-5.21-.57l-.34-.93a.05.05 0 0 0-.03-.03l-.93-.34a2.93 2.93 0 0 1-.56-5.2ZM6.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-2.79.54c.27-.43.02-.95-.43-1.09l-4.06-1.23c-.45-.14-.94.15-.96.66a3.02 3.02 0 0 0 2.05 3.06c1.29.4 2.66-.21 3.4-1.4Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    }), (0, i.jsx)("path", {
                        d: "M19.42 3.88c.24.22.48.46.7.7a4 4 0 0 0-.12.14c-.2-.27-.45-.51-.72-.72l.14-.12Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    }), (0, i.jsx)("path", {
                        d: "M19.09.63a.97.97 0 0 1 1.82 0l.34.93a2 2 0 0 0 1.19 1.19l.93.34a.97.97 0 0 1 0 1.82l-.93.34a2 2 0 0 0-1.19 1.19l-.34.93a.97.97 0 0 1-1.82 0l-.34-.93a2 2 0 0 0-1.19-1.19l-.93-.34a.97.97 0 0 1 0-1.82l.93-.34a2 2 0 0 0 1.19-1.19l.34-.93ZM2.7 17.55a.85.85 0 0 1 1.6 0l.26.71a2 2 0 0 0 1.18 1.18l.7.26a.85.85 0 0 1 0 1.6l-.7.26a2 2 0 0 0-1.18 1.18l-.26.7a.85.85 0 0 1-1.6 0l-.26-.7a2 2 0 0 0-1.18-1.18l-.7-.26a.85.85 0 0 1 0-1.6l.7-.26a2 2 0 0 0 1.18-1.18l.26-.7Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    })]
                })
            }
        },
        361019: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserSquareIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm10 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 9.83A5.83 5.83 0 0 1 11.83 12h.34A5.83 5.83 0 0 1 18 17.83c0 .65-.52 1.17-1.17 1.17h-.08a.52.52 0 0 1-.5-.4c-.22-.87-.54-1.69-.83-2.3-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.3.61-.61 1.43-.83 2.3a.52.52 0 0 1-.5.4h-.08C6.52 19 6 18.48 6 17.83Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        174727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("775560"),
                r = n("888400"),
                l = n("149638");

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = (0, r.diffAsUnits)(Date.now(), e),
                    o = (0, i.useForceUpdate)();
                return (0, l.default)(() => {
                    let e = 0 === s.days && 0 === s.hours && 0 === s.minutes && 0 === s.seconds;
                    !e && !a && (o(), null == n || n())
                }, a ? null : t), s
            }
        },
        149638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("627445"),
                l = n.n(r);

            function a(e, t) {
                let n = (0, i.useRef)(e);
                (0, i.useEffect)(() => {
                    n.current = e
                }, [e]), (0, i.useEffect)(() => {
                    if (null === t) return;
                    let e = setInterval(function() {
                        l(null != n.current, "Missing callback"), n.current()
                    }, t);
                    return () => clearInterval(e)
                }, [t])
            }
        },
        32531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateBackgroundGradientPreset: function() {
                    return r
                },
                resetBackgroundGradientPreset: function() {
                    return l
                },
                updateBackgroundGradientAngle: function() {
                    return a
                },
                resetBackgroundGradientAngle: function() {
                    return s
                },
                openEditor: function() {
                    return o
                },
                closeEditor: function() {
                    return u
                },
                resetPreviewClientTheme: function() {
                    return d
                }
            });
            var i = n("913144");
            let r = e => {
                    i.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: e
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: null
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_ANGLE",
                        angle: e
                    })
                },
                s = () => {
                    i.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_ANGLE",
                        angle: null
                    })
                },
                o = () => {
                    i.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_OPEN"
                    })
                },
                u = () => {
                    i.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_CLOSE"
                    })
                },
                d = () => {
                    i.default.dispatch({
                        type: "RESET_PREVIEW_CLIENT_THEME"
                    })
                }
        },
        473591: function(e, t, n) {
            "use strict";
            let i, r, l, a, s, o;
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var u = n("446674"),
                d = n("913144");
            let c = !1,
                m = !1,
                _ = null,
                f = {},
                E = {},
                T = {},
                I = {};

            function p() {
                i = void 0, r = void 0, l = void 0, a = void 0, s = void 0, _ = null
            }
            class P extends u.default.Store {
                getSettings(e) {
                    if (null != e) return T[e]
                }
                getProfile(e) {
                    return null == e ? null : f[e]
                }
                getGeneratedPersonality() {
                    return o
                }
                getPendingPersonality() {
                    return i
                }
                getPendingNick() {
                    return r
                }
                getErrors() {
                    return _
                }
                hasPendingChanges() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== a || void 0 !== s
                }
                getPendingUpdates() {
                    return {
                        pendingAvatar: l,
                        pendingNick: r,
                        pendingPersonality: i,
                        pendingBanner: a,
                        pendingThemeColors: s
                    }
                }
                isSavingSettings() {
                    return c
                }
                isFetchingSettings(e) {
                    var t;
                    return null === (t = I[e]) || void 0 === t ? void 0 : t.isFetching
                }
                shouldFetchSettings(e) {
                    var t, n;
                    let i = null !== (t = I[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        r = Date.now(),
                        l = r - (null !== (n = i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == i ? void 0 : i.isFetching) && l
                }
                isFetchingProfile(e) {
                    var t;
                    return null === (t = E[e]) || void 0 === t ? void 0 : t.isFetching
                }
                isEditingClydeProfile() {
                    return m
                }
            }
            P.displayName = "ClydeStore";
            var S = new P(d.default, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e, n = I[t];
                    I[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        settings: n
                    } = e;
                    I[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, T[t] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, n = I[t];
                    I[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    let {
                        personality: t,
                        isGenerated: n
                    } = e;
                    i = t, n && (o = t)
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    let {
                        nick: t
                    } = e;
                    r = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    l = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    a = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    s = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    _ = null, c = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    let {
                        settings: t
                    } = e;
                    c = !1, T[t.guild_id] = t, p()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    c = !1, _ = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: p,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = E[t];
                    E[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    E[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, f[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = E[t];
                    E[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    f[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    m = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    m = !1
                }
            })
        },
        309318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-11_nitro_affinities",
                label: "Nitro Affinities",
                defaultConfig: {
                    marketingEnabled: !1,
                    planSelectionEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Nitro Affinities for Marketing Page",
                    config: {
                        marketingEnabled: !0,
                        planSelectionEnabled: !1
                    }
                }, {
                    id: 2,
                    label: "Enable Nitro Affinities for Plan Selection Page",
                    config: {
                        marketingEnabled: !1,
                        planSelectionEnabled: !0
                    }
                }, {
                    id: 3,
                    label: "Enable Nitro Affinities for Both Marketing Page and Plan Selection Page",
                    config: {
                        marketingEnabled: !0,
                        planSelectionEnabled: !0
                    }
                }]
            })
        },
        446488: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                fetched: !1,
                affinities: []
            };
            class a extends i.default.Store {
                get hasFetched() {
                    return l.fetched
                }
                get affinities() {
                    return l.affinities
                }
            }
            var s = new a(r.default, {
                BILLING_NITRO_AFFINITY_FETCHED: function(e) {
                    let {} = e;
                    l.fetched = !0
                },
                BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
                    let {
                        res: t
                    } = e;
                    l.affinities = t
                }
            })
        },
        182650: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsInPremiumOfferExperience: function() {
                    return d
                },
                useHasDiscountApplied: function() {
                    return c
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("446674"),
                a = n("521012"),
                s = n("324878"),
                o = n("154889"),
                u = n("917247");

            function d() {
                let e = (0, u.usePremiumTrialOffer)(),
                    t = (0, s.useHasActiveTrial)(),
                    n = (0, o.usePremiumDiscountOffer)(),
                    i = c();
                return null != e || t || null != n || i
            }
            let c = () => {
                var e;
                let t = (0, l.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
                    n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.nitro_likelihood_discount_expires_at;
                return null != n && r(Date.now()) <= r(n)
            }
        },
        942377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getHigherExpectedValue: function() {
                    return l
                },
                getHighestLikelihood: function() {
                    return a
                }
            });
            var i = n("716849"),
                r = n("646718");

            function l(e, t, n) {
                return null == e ? r.PremiumTypes.TIER_2 : e[r.PremiumSubscriptionSKUs.TIER_0] * t > e[r.PremiumSubscriptionSKUs.TIER_2] * n ? r.PremiumTypes.TIER_0 : r.PremiumTypes.TIER_2
            }

            function a(e) {
                if (null == e) return r.PremiumTypes.TIER_0;
                let t = e[i.NON_SUBSCRIBER_SENTINEL],
                    n = e[r.PremiumSubscriptionSKUs.TIER_0],
                    l = e[r.PremiumSubscriptionSKUs.TIER_2];
                return l > n && l > t ? r.PremiumTypes.TIER_2 : r.PremiumTypes.TIER_0
            }
        },
        982457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("49111"),
                a = {
                    async fetchUserTrialOffer() {
                        try {
                            let {
                                body: e
                            } = await i.default.get({
                                url: l.Endpoints.USER_TRIAL_OFFER,
                                oldFormErrors: !0
                            });
                            r.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS",
                                userTrialOffer: e
                            })
                        } catch (e) {
                            r.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS"
                            })
                        }
                    },
                    async acknowledgeUserTrialOffer(e) {
                        if (null == e.expires_at) try {
                            let {
                                body: t
                            } = await i.default.post({
                                url: l.Endpoints.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id)
                            });
                            r.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                                userTrialOffer: t
                            })
                        } catch (e) {
                            404 === e.status && r.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                                userTrialOffer: null
                            })
                        }
                    }
                }
        },
        433947: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BOGOAnnouncementModalExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-06_bogo_announcement_modal",
                label: "BOGO Announcement Modal",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the BOGO announcement modal",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        705337: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-07_bogo_marketing_materials_experiment",
                label: "BOGO Marketing Materials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable BOGO marketing materials",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = r
        },
        935566: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BogoPromotionExperiment: function() {
                    return r
                },
                isBogoPromotionExperimentEnabled: function() {
                    return l
                },
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-06_bogo_promotion_gate",
                    label: "BOGO Promotion Manager",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable BOGO Promotion Manager",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return r.getCurrentConfig({
                        location: "489551_2"
                    }, {
                        autoTrackExposure: e
                    })
                };
            var a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return r.useExperiment({
                    location: "489551_1"
                }, {
                    autoTrackExposure: e
                })
            }
        },
        843647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("446674"),
                r = n("697218"),
                l = n("10514"),
                a = n("719923"),
                s = n("716849"),
                o = n("676572"),
                u = n("942377"),
                d = n("917247"),
                c = n("646718");

            function m(e) {
                let {
                    autoTrackExposure: t,
                    experiment: n,
                    location: m
                } = e, _ = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()), f = (0, d.usePremiumTrialOffer)(), E = null != f, T = null != _ && (0, a.isPremium)(_);
                (0, s.useMaybeFetchPremiumLikelihood)(n);
                let {
                    enabled: I,
                    useExpectedValue: p,
                    useLikelihood: P
                } = n.useExperiment({
                    location: null != m ? m : "1"
                }, {
                    autoTrackExposure: !T && !E && t
                }), {
                    premiumLikelihood: S,
                    fetched: R
                } = (0, i.useStateFromStoresObject)([o.default], () => {
                    let e = o.default.getState();
                    return {
                        fetched: e.fetched,
                        premiumLikelihood: e.premiumLikelihood
                    }
                }), O = (0, i.useStateFromStores)([l.default], () => l.default.isLoadedForSKUs([c.PremiumSubscriptionSKUs.TIER_0, c.PremiumSubscriptionSKUs.TIER_2])), C = !T && I && !E && (p ? !R || !O : !R), M = c.PremiumTypes.TIER_2;
                if (E) {
                    let e = f.subscription_trial;
                    (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_0 ? M = c.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_2 && (M = c.PremiumTypes.TIER_2)
                } else if (!T && !C && I) {
                    if (p) {
                        let {
                            amount: e
                        } = (0, a.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                            amount: t
                        } = (0, a.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                        M = (0, u.getHigherExpectedValue)(S, e, t)
                    } else P && (M = (0, u.getHighestLikelihood)(S))
                }
                return {
                    isLoading: C,
                    suggestedPremiumType: M
                }
            }
        },
        772465: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PromotionPreviewExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2021-06_preview_promotions",
                label: "Promotions Preview",
                defaultConfig: {
                    previewEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Preview Enabled",
                    config: {
                        previewEnabled: !0
                    }
                }]
            })
        },
        44678: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPromotionImageURL: function() {
                    return m
                },
                outboundPromotionFromServer: function() {
                    return _
                },
                bogoPromotionFromServer: function() {
                    return f
                },
                fetchClaimedOutboundPromotionCodes: function() {
                    return T
                },
                claimOutboundPromotion: function() {
                    return I
                },
                getOutboundPromotionRedemptionUrl: function() {
                    return p
                },
                shouldShowOutboundPromotionNotice: function() {
                    return P
                },
                shouldShowOutboundPromotionOnPlatform: function() {
                    return S
                },
                isOutboundPromotionRedeemableByTrialUsers: function() {
                    return R
                },
                isTrialUserEligibleToSeeOutboundPromotion: function() {
                    return O
                }
            }), n("702976"), n("781738");
            var i = n("872717"),
                r = n("819855"),
                l = n("915639"),
                a = n("521012"),
                s = n("568734"),
                o = n("773336"),
                u = n("78345"),
                d = n("807345"),
                c = n("49111");

            function m(e, t) {
                let n = (0, r.isThemeDark)(t) ? "logo-dark" : "logo-light",
                    i = window.GLOBAL_ENV.CDN_HOST,
                    l = "?size=256";
                return null != i ? "".concat(location.protocol, "//").concat(i, "/promotions/").concat(e, "/").concat(n).concat(l) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(l)
            }

            function _(e) {
                return {
                    id: e.id,
                    startDate: e.start_date,
                    endDate: e.end_date,
                    outboundTitle: e.outbound_title,
                    outboundRedemptionModalBody: e.outbound_redemption_modal_body,
                    outboundRedemptionPageLink: e.outbound_redemption_page_link,
                    outboundRedemptionUrlFormat: e.outbound_redemption_url_format,
                    outboundTermsAndConditions: e.outbound_terms_and_conditions,
                    flags: e.flags
                }
            }

            function f(e) {
                return {
                    id: e.id,
                    startDate: e.start_date,
                    endDate: e.end_date
                }
            }

            function E(e) {
                return {
                    code: e.code,
                    userId: e.user_id,
                    claimedAt: e.claimed_at,
                    promotion: _(e.promotion)
                }
            }
            async function T() {
                let e = await i.default.get({
                        url: c.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
                        query: {
                            locale: l.default.locale
                        },
                        oldFormErrors: !0
                    }),
                    t = e.body;
                return t.map(E)
            }
            async function I(e) {
                let t = await i.default.post({
                        url: c.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e)
                    }),
                    n = t.body;
                return E(n)
            }

            function p(e, t) {
                return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
            }

            function P() {
                let e = d.default.lastSeenOutboundPromotionStartDate,
                    t = d.default.outboundPromotions,
                    n = d.default.consumedInboundPromotionId,
                    i = t.filter(e => {
                        let {
                            id: t,
                            flags: i
                        } = e;
                        return t !== n && !(0, s.hasFlag)(i, u.PromotionFlags.SUPPRESS_NOTIFICATION)
                    }),
                    r = null == e ? i : i.filter(t => {
                        let {
                            startDate: n
                        } = t;
                        return new Date(n) > new Date(e)
                    }),
                    l = d.default.lastDismissedOutboundPromotionStartDate,
                    o = a.default.getPremiumTypeSubscription(),
                    c = (null == o ? void 0 : o.trialId) != null,
                    m = c ? r.filter(e => R(e)) : r;
                return 0 !== m.length && (null == l || m.some(e => {
                    let {
                        startDate: t
                    } = e;
                    return new Date(t) > new Date(l)
                }))
            }

            function S(e) {
                return !(0, o.isIOS)() || !(0, s.hasFlag)(e.flags, u.PromotionFlags.IS_BLOCKED_IOS)
            }

            function R(e) {
                return (0, s.hasFlag)(e.flags, u.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
            }

            function O(e, t) {
                return null != t[e.id] || R(e)
            }
        },
        538620: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchActiveOutboundPromotions: function() {
                    return f
                },
                fetchActiveBogoPromotion: function() {
                    return E
                },
                default: function() {
                    return T
                }
            });
            var i = n("872717"),
                r = n("750028"),
                l = n("913144"),
                a = n("316718"),
                s = n("915639"),
                o = n("872173"),
                u = n("772465"),
                d = n("44678"),
                c = n("807345"),
                m = n("646718"),
                _ = n("49111");
            async function f() {
                if (!c.default.isFetchingActiveOutboundPromotions) try {
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH"
                    });
                    let t = u.PromotionPreviewExperiment.getCurrentConfig({
                            location: "5731cc_1"
                        }, {
                            autoTrackExposure: !1
                        }).previewEnabled ? _.Endpoints.OUTBOUND_PROMOTIONS_PREVIEW : _.Endpoints.OUTBOUND_PROMOTIONS,
                        n = await i.default.get({
                            url: t,
                            query: {
                                locale: s.default.locale
                            },
                            oldFormErrors: !0
                        }),
                        r = n.body,
                        o = c.default.consumedInboundPromotionId;
                    if (!c.default.hasFetchedConsumedInboundPromotionId) {
                        var e;
                        let t = await (0, a.fetchUserEntitlementsForApplication)(m.PREMIUM_SUBSCRIPTION_APPLICATION, !1),
                            n = t.find(e => null != e.promotion_id && !0 === e.consumed);
                        o = null !== (e = null == n ? void 0 : n.promotion_id) && void 0 !== e ? e : null
                    }
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                        activeOutboundPromotions: r.map(e => (0, d.outboundPromotionFromServer)(e)),
                        consumedInboundPromotionId: o
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL"
                    })
                }
            }
            async function E() {
                if (!c.default.isFetchingActiveBogoPromotion) try {
                    l.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH"
                    });
                    let e = await i.default.get({
                            url: _.Endpoints.BOGO_PROMOTIONS,
                            query: {
                                locale: s.default.locale
                            }
                        }),
                        t = e.body;
                    l.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                        activePromotion: (0, d.bogoPromotionFromServer)(t)
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
                    })
                }
            }
            var T = {
                fetchActiveOutboundPromotions: f,
                dismissOutboundPromotionNotice: function() {
                    l.default.dispatch({
                        type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
                    });
                    let e = c.default.lastDismissedOutboundPromotionStartDate;
                    null != e && o.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
                        t.lastDismissedOutboundPromotionStartDate = r.StringValue.create({
                            value: e
                        })
                    }, o.UserSettingsDelay.INFREQUENT_USER_ACTION)
                },
                markOutboundPromotionsSeen() {
                    l.default.dispatch({
                        type: "OUTBOUND_PROMOTIONS_SEEN"
                    })
                },
                fetchActiveBogoPromotion: E
            }
        },
        694540: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOutboundPromotions: function() {
                    return f
                },
                useUnseenOutboundPromotions: function() {
                    return E
                },
                useBogoPromotion: function() {
                    return T
                }
            }), n("222007");
            var i = n("884691"),
                r = n("446674"),
                l = n("913144"),
                a = n("697218"),
                s = n("719923"),
                o = n("324878"),
                u = n("44678"),
                d = n("538620"),
                c = n("807345"),
                m = n("646718");

            function _() {
                let e = (0, r.useStateFromStoresArray)([c.default], () => c.default.outboundPromotions),
                    t = (0, r.useStateFromStores)([c.default], () => c.default.consumedInboundPromotionId),
                    n = i.useMemo(() => e.filter(e => {
                        let {
                            id: n
                        } = e;
                        return n !== t
                    }), [e, t]);
                return n
            }

            function f() {
                let e = (0, r.useStateFromStores)([c.default], () => c.default.lastFetchedActivePromotions),
                    t = _(),
                    n = (0, r.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
                    f = (0, o.useHasActiveTrial)(),
                    [E, T] = i.useState(!1),
                    [I, p] = i.useState([]);
                i.useEffect(() => {
                    null != e && l.default.wait(() => d.default.markOutboundPromotionsSeen())
                }, [e]);
                let P = i.useCallback(e => {
                        p(t => t.some(t => {
                            let {
                                promotion: n
                            } = t;
                            return n.id === e.promotion.id
                        }) ? t : [...t, e])
                    }, []),
                    S = (0, s.isPremiumExactly)(n, m.PremiumTypes.TIER_2);
                i.useEffect(() => {
                    l.default.wait(() => {
                        S && null == e && d.default.fetchActiveOutboundPromotions()
                    })
                }, [e, S]), i.useEffect(() => {
                    l.default.wait(() => {
                        (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
                            p(e), T(!0)
                        }).catch(() => {
                            p([]), T(!0)
                        })
                    })
                }, []);
                let R = {};
                for (let {
                        code: e,
                        promotion: t
                    }
                    of I) R[t.id] = e;
                let O = new Set(t.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    })),
                    C = I.filter(e => {
                        let {
                            promotion: t
                        } = e;
                        return !O.has(t.id)
                    }),
                    M = E && (!S || null != e);
                return {
                    promotionsLoaded: M,
                    activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!f || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, R))),
                    claimedEndedOutboundPromotions: C.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
                    claimedOutboundPromotionCodeMap: R,
                    addClaimedOutboundPromotionCode: P
                }
            }

            function E() {
                let e = (0, r.useStateFromStores)([c.default], () => c.default.lastSeenOutboundPromotionStartDate),
                    t = (0, o.useHasActiveTrial)(),
                    n = _(),
                    l = i.useMemo(() => {
                        if (null == e) return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n;
                        let i = n.filter(t => {
                            let {
                                startDate: n
                            } = t;
                            return new Date(n) > new Date(e)
                        });
                        return t ? i.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : i
                    }, [n, e, t]);
                return l.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
            }

            function T() {
                let e = (0, r.useStateFromStores)([c.default], () => c.default.bogoPromotion);
                return {
                    promotion: e
                }
            }
        },
        807345: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("446674"),
                r = n("913144"),
                l = n("374363");

            function a() {
                return {
                    hasFetchedConsumedInboundPromotionId: !1,
                    consumedInboundPromotionId: null,
                    lastSeenOutboundPromotionStartDate: null,
                    bogoPromotion: null
                }
            }
            let s = a(),
                o = !1,
                u = null,
                d = !1,
                c = null,
                m = [],
                _ = null;

            function f() {
                let e = null;
                for (let t of m)(null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
                return e
            }

            function E() {
                var e, t, n;
                _ = null !== (n = null === (t = l.default.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null
            }
            class T extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (s = e), this.waitFor(l.default), this.syncWith([l.default], E)
                }
                get outboundPromotions() {
                    return m
                }
                get lastSeenOutboundPromotionStartDate() {
                    return s.lastSeenOutboundPromotionStartDate
                }
                get lastDismissedOutboundPromotionStartDate() {
                    return _
                }
                get lastFetchedActivePromotions() {
                    return c
                }
                get isFetchingActiveOutboundPromotions() {
                    return d
                }
                get hasFetchedConsumedInboundPromotionId() {
                    return s.hasFetchedConsumedInboundPromotionId
                }
                get consumedInboundPromotionId() {
                    return s.consumedInboundPromotionId
                }
                get bogoPromotion() {
                    return s.bogoPromotion
                }
                get isFetchingActiveBogoPromotion() {
                    return o
                }
                get lastFetchedActiveBogoPromotion() {
                    return u
                }
                getState() {
                    return s
                }
            }
            T.displayName = "PromotionsStore", T.persistKey = "PromotionsPersistedStore";
            var I = new T(r.default, {
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        activeOutboundPromotions: t,
                        consumedInboundPromotionId: n
                    } = e;
                    m = t, c = Date.now(), d = !1, !s.hasFetchedConsumedInboundPromotionId && (s.hasFetchedConsumedInboundPromotionId = !0, s.consumedInboundPromotionId = n)
                },
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function() {
                    d = !0
                },
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function() {
                    m = [], d = !1
                },
                ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function(e) {
                    let {
                        activePromotion: t
                    } = e;
                    s.bogoPromotion = t, u = Date.now(), o = !1
                },
                ACTIVE_BOGO_PROMOTION_FETCH: function() {
                    o = !0
                },
                ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function() {
                    s.bogoPromotion = null, o = !1
                },
                OUTBOUND_PROMOTION_NOTICE_DISMISS: function() {
                    if (0 === m.length) return !1;
                    let e = f();
                    null != e && (_ = e)
                },
                OUTBOUND_PROMOTIONS_SEEN: function() {
                    if (0 === m.length) return !1;
                    let e = f();
                    null != e && (_ = e, s.lastSeenOutboundPromotionStartDate = e)
                },
                LOGOUT: function() {
                    s = a(), d = !1, c = null, o = !1, u = null, m = []
                }
            })
        },
        641078: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsEligibleForBogoPromotion: function() {
                    return h
                },
                maybeFetchActiveBogoPromotion: function() {
                    return v
                },
                isEligibleForBOGOAnnouncementModal: function() {
                    return x
                },
                getBOGOPillCopy: function() {
                    return A
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("65597"),
                a = n("151426"),
                s = n("850068"),
                o = n("174727"),
                u = n("619935"),
                d = n("10641"),
                c = n("915639"),
                m = n("697218"),
                _ = n("521012"),
                f = n("340412"),
                E = n("719923"),
                T = n("982457"),
                I = n("433947"),
                p = n("705337"),
                P = n("935566"),
                S = n("917247"),
                R = n("538620"),
                O = n("694540"),
                C = n("807345"),
                M = n("646718"),
                g = n("49111"),
                L = n("782340");

            function U(e) {
                var t, n, i;
                let {
                    experimentEnabled: l,
                    premiumSubscription: a,
                    mostRecentSubscription: s
                } = e, o = !1, u = !1;
                if (null != s && s.status === g.SubscriptionStatusTypes.ENDED) {
                    let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? r(s.metadata.ended_at) : null,
                        i = null === (n = (0, E.getPremiumPlanItem)(s)) || void 0 === n ? void 0 : n.planId,
                        l = null != i && E.default.getPremiumType(i) === M.PremiumTypes.TIER_2;
                    u = null != e && l && e.add(10, "days").isAfter(r())
                }
                if (null != a) {
                    let e = null === (i = (0, E.getPremiumPlanItem)(a)) || void 0 === i ? void 0 : i.planId,
                        t = null != e && E.default.getPremiumType(e) === M.PremiumTypes.TIER_2,
                        n = m.default.getCurrentUser(),
                        r = (null == a ? void 0 : a.trialId) != null && E.default.isPremiumExactly(n, M.PremiumTypes.TIER_0);
                    o = t || r
                }
                return !l || o || u
            }

            function h() {
                var e;
                let {
                    paymentsBlocked: t
                } = u.default.useExperiment({
                    location: "153d31_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    promotion: n
                } = (0, O.useBogoPromotion)(), {
                    enabled: i
                } = (0, P.default)(), {
                    mostRecentSubscription: r,
                    premiumSubscription: a
                } = (0, l.useStateFromStoresObject)([_.default], () => ({
                    mostRecentSubscription: _.default.getMostRecentPremiumTypeSubscription(),
                    premiumSubscription: _.default.getPremiumTypeSubscription()
                })), s = (0, S.usePremiumTrialOffer)(), d = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
                (0, o.default)(d, 1e3, void 0, d + 2e3 < Date.now());
                let c = !U({
                        experimentEnabled: i,
                        premiumSubscription: a,
                        mostRecentSubscription: r
                    }),
                    m = c && null == s && null != n && !t,
                    f = Date.now(),
                    {
                        enabled: E
                    } = p.default.useExperiment({
                        location: "153d31_2"
                    }, {
                        autoTrackExposure: m,
                        disable: !m
                    });
                return !(f > d) && E
            }
            async function N() {
                var e;
                let t = m.default.getCurrentUser(),
                    n = !(null == t ? void 0 : t.isClaimed()),
                    {
                        paymentsBlocked: i
                    } = u.default.getCurrentConfig({
                        location: "153d31_3"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: r
                    } = (0, P.isBogoPromotionExperimentEnabled)(),
                    {
                        enabled: l
                    } = p.default.getCurrentConfig({
                        location: "153d31_4"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: a
                    } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_5"
                    }, {
                        autoTrackExposure: !1
                    });
                if (n || i || !r || !a && !l) return !1;
                if (f.default.shouldFetchOffer() && await T.default.fetchUserTrialOffer(), f.default.hasFetchedOffer() && f.default.hasAnyUnexpiredOffer()) return !1;
                !_.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(M.PremiumSubscriptionSKUs.TIER_2)) && await (0, s.fetchMostRecentSubscription)(), !_.default.hasFetchedSubscriptions() && await (0, s.fetchSubscriptions)();
                let o = _.default.getMostRecentPremiumTypeSubscription(),
                    d = _.default.getPremiumTypeSubscription();
                return !U({
                    experimentEnabled: r,
                    premiumSubscription: d,
                    mostRecentSubscription: o
                })
            }
            async function v() {
                let e = await N();
                if (!e) return;
                let t = C.default.bogoPromotion;
                if (null != t) {
                    let e = new Date(t.endDate).valueOf();
                    if (e >= Date.now()) return
                }
                await (0, R.fetchActiveBogoPromotion)()
            }
            async function x() {
                let e = C.default.bogoPromotion,
                    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
                    n = (0, d.isDismissibleContentDismissed)(a.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
                    i = await N(),
                    {
                        enabled: r
                    } = P.BogoPromotionExperiment.getCurrentConfig({
                        location: "153d31_6"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: l
                    } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_7"
                    }, {
                        autoTrackExposure: t && r && !n && i
                    });
                return t && l && r && !n && i
            }

            function A() {
                let e = c.default.locale;
                switch (e) {
                    case "de":
                    case "es-ES":
                    case "fr":
                    case "hr":
                    case "it":
                    case "lt":
                    case "nl":
                    case "pl":
                    case "pt-BR":
                    case "ro":
                    case "fi":
                    case "sv-SE":
                    case "tr":
                    case "cs":
                    case "el":
                    case "bg":
                    case "ru":
                    case "uk":
                    case "ja":
                    case "ko":
                        return L.default.Messages.NITRO_BADGE_TEXT;
                    default:
                        return L.default.Messages.BOGO_PILL
                }
            }
        },
        956597: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getOfferEndsText: function() {
                    return D
                },
                PremiumTrialGradientBadge: function() {
                    return y
                },
                default: function() {
                    return H
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("627445"),
                o = n.n(s),
                u = n("866227"),
                d = n.n(u),
                c = n("446674"),
                m = n("551042"),
                _ = n("819855"),
                f = n("77078"),
                E = n("841098"),
                T = n("206230"),
                I = n("32531"),
                p = n("393414"),
                P = n("945330"),
                S = n("41250"),
                R = n("379863"),
                O = n("216422"),
                C = n("719923"),
                M = n("286235"),
                g = n("626301"),
                L = n("917247"),
                U = n("635956"),
                h = n("400307"),
                N = n("646718"),
                v = n("49111"),
                x = n("782340"),
                A = n("670714"),
                b = n("481927");

            function D(e) {
                if (null == e) return null;
                let t = d(e),
                    n = t.diff(d(), "h");
                if (n > 24) {
                    let e = t.diff(d(), "d");
                    return x.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
                        numDays: e
                    })
                }
                if (n > 1) return x.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
                    numHours: n
                });
                let i = t.diff(d(), "minutes");
                return x.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
                    numMinutes: i
                })
            }

            function F(e) {
                var t, n, r;
                let {
                    className: l,
                    children: s,
                    withBottomMargin: o,
                    discountOffer: u,
                    trialOffer: d
                } = e, c = null !== (t = null == d ? void 0 : d.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, m = null == d ? void 0 : d.subscription_trial, _ = null !== (r = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == m ? void 0 : m.sku_id) && void 0 !== r ? r : N.PremiumSubscriptionSKUs.TIER_2;
                return (0, i.jsxs)("div", {
                    className: a(l, A.gradientUpsellWrapper, {
                        [A.gradientUpsellWrapperTier0]: _ === N.PremiumSubscriptionSKUs.TIER_0,
                        [A.gradientUpsellWrapperTier2]: _ === N.PremiumSubscriptionSKUs.TIER_2,
                        [A.gradientUpsellWrapperWithBottomMargin]: o
                    }),
                    children: [(0, i.jsxs)("div", {
                        className: A.logo,
                        children: [(0, i.jsx)(O.default, {
                            className: A.logoIcon
                        }), _ === N.PremiumSubscriptionSKUs.TIER_0 && (0, i.jsx)(R.default, {
                            className: A.logoWordmark
                        }), _ === N.PremiumSubscriptionSKUs.TIER_2 && (0, i.jsx)(S.default, {
                            className: A.logoWordmark
                        })]
                    }), (0, i.jsx)(f.Text, {
                        variant: "text-md/medium",
                        className: A.copy,
                        color: "none",
                        children: s
                    }), (0, i.jsx)(h.PremiumPillWithSparkles, {
                        text: null != u ? x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: u.discount.amount
                        }) : x.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        colorOptions: _ === N.PremiumSubscriptionSKUs.TIER_0 ? h.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : h.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
                    }), (0, i.jsx)(f.Text, {
                        variant: "eyebrow",
                        className: A.countdownText,
                        children: D(c)
                    })]
                })
            }

            function j(e) {
                var t, n;
                let {
                    className: l,
                    onClose: a,
                    subscriptionTier: s,
                    analyticsLocationObject: o,
                    trialOffer: u,
                    discountOffer: d
                } = e, [c, m] = r.useState(!1), _ = null != d ? x.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                    percent: d.discount.amount
                }) : (0, C.formatTrialCtaIntervalDuration)({
                    intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
                    intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                });
                return (0, i.jsx)(U.default, {
                    className: l,
                    subscriptionTier: s,
                    trialId: null == u ? void 0 : u.trial_id,
                    submitting: c,
                    premiumModalAnalyticsLocation: o,
                    size: f.Button.Sizes.MEDIUM,
                    color: f.Button.Colors.GREEN,
                    onClick: () => {
                        m(!0)
                    },
                    onSubscribeModalClose: e => {
                        m(!1), e && (null == a || a())
                    },
                    buttonText: _
                })
            }

            function y(e) {
                var t, n;
                let r = null === (t = (0, L.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
                    l = null !== (n = null == r ? void 0 : r.sku_id) && void 0 !== n ? n : N.PremiumSubscriptionSKUs.TIER_2;
                return (0, i.jsx)(f.Text, {
                    variant: "text-xs/bold",
                    className: a(A.trialBadge, e.className, {
                        [A.trialBadgeGradientTier0]: l === N.PremiumSubscriptionSKUs.TIER_0,
                        [A.trialBadgeGradientTier2]: l === N.PremiumSubscriptionSKUs.TIER_2
                    }),
                    color: "none",
                    children: (0, C.formatTrialOfferIntervalDuration)({
                        intervalType: null == r ? void 0 : r.interval,
                        intervalCount: null == r ? void 0 : r.interval_count
                    })
                })
            }

            function w(e) {
                let {
                    subscriptionTier: t,
                    onClose: n,
                    analyticsLocationObject: r,
                    trialOffer: l,
                    discountOffer: a
                } = e;
                return (0, i.jsxs)("div", {
                    className: A.footer,
                    children: [(0, i.jsx)(f.Button, {
                        onClick: n,
                        size: f.Button.Sizes.SMALL,
                        look: f.ButtonLooks.BLANK,
                        className: A.cancelButton,
                        children: x.default.Messages.CLOSE
                    }), (0, i.jsx)(j, {
                        className: A.subscribeButton,
                        subscriptionTier: t,
                        analyticsLocationObject: r,
                        onClose: n,
                        discountOffer: a,
                        trialOffer: l
                    })]
                })
            }

            function B(e) {
                let {
                    onClose: t,
                    analyticsLocationObject: n
                } = e, r = (0, L.usePremiumTrialOffer)();
                return (0, i.jsxs)("div", {
                    className: A.tryOutUpsellContainer,
                    children: [(0, i.jsx)(h.PremiumPillWithSparkles, {
                        className: A.topRimPill,
                        text: x.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                        colorOptions: h.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                    }), (0, i.jsx)(f.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-normal",
                        children: x.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
                            onClick: g.navigateToPremiumMarketingPage
                        })
                    }), (0, i.jsx)(j, {
                        trialOffer: r,
                        className: A.subscribeButtonWide,
                        subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocationObject: n,
                        onClose: t
                    }), (0, i.jsx)(f.Text, {
                        variant: "eyebrow",
                        className: A.countdownTextInSetting,
                        children: D(null == r ? void 0 : r.expires_at)
                    })]
                })
            }

            function G(e) {
                let {
                    headingText: t,
                    context: n,
                    children: r,
                    trialOffer: l,
                    discountOffer: a
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(f.Heading, {
                        className: A.header,
                        variant: "heading-xl/semibold",
                        children: t
                    }), null != n && (0, i.jsx)(f.Text, {
                        className: A.context,
                        variant: "text-md/normal",
                        children: n
                    }), (0, i.jsx)(F, {
                        trialOffer: l,
                        discountOffer: a,
                        children: r
                    })]
                })
            }

            function H(e) {
                let {
                    headingText: t,
                    context: r,
                    children: l,
                    onClose: s,
                    type: u,
                    subscriptionTier: d,
                    analyticsLocationObject: S,
                    trialOffer: R,
                    discountOffer: O
                } = e, g = (0, c.useStateFromStores)([T.default], () => T.default.useReducedMotion), L = (0, E.default)();
                switch (u) {
                    case N.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(f.Clickable, {
                                className: A.upsellClose,
                                onClick: s,
                                children: (0, i.jsx)(P.default, {})
                            }), (0, i.jsxs)("div", {
                                className: A.contentContainer,
                                children: [(0, i.jsx)("img", {
                                    className: A.upsellImage,
                                    src: b,
                                    alt: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, i.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: x.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                                }), (0, i.jsx)(F, {
                                    trialOffer: R,
                                    discountOffer: O,
                                    children: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, C.getDisplayNameFromSku)(d),
                                        onClick: () => (0, p.transitionTo)(v.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, i.jsx)(w, {
                                subscriptionTier: d,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: v.AnalyticsSections.EXPRESSION_PICKER,
                                    object: v.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: R,
                                discountOffer: O
                            })]
                        });
                    case N.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
                        return o(null != l, "You must specify children for this upsell type"), (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: A.contentContainer,
                                children: [(0, i.jsx)("img", {
                                    className: A.upsellImage,
                                    src: b,
                                    alt: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, i.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                                }), (0, i.jsx)(F, {
                                    trialOffer: R,
                                    discountOffer: O,
                                    children: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, C.getDisplayNameFromSku)(d),
                                        onClick: () => (0, p.transitionTo)(v.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, i.jsx)(w, {
                                subscriptionTier: d,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: v.AnalyticsSections.EXPRESSION_PICKER,
                                    object: v.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: R,
                                discountOffer: O
                            })]
                        });
                    case N.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                        o(null != l, "You must specify children for this upsell type");
                        let U = (0, _.isThemeLight)(L) ? n("602291") : n("609708");
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: A.contentContainer,
                                children: [(0, i.jsx)("img", {
                                    alt: "",
                                    className: A.upsellImage,
                                    src: U
                                }), (0, i.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: x.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                                }), (0, i.jsx)(F, {
                                    trialOffer: R,
                                    discountOffer: O,
                                    children: x.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                        planName: (0, C.getDisplayNameFromSku)(d),
                                        onClick: () => (0, p.transitionTo)(v.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, i.jsx)(w, {
                                subscriptionTier: d,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: v.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                    object: v.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: R,
                                discountOffer: O
                            })]
                        });
                    case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                    case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                    case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                    case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                        let h;
                        switch (u) {
                            case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                                h = x.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                                    planName: (0, C.getDisplayNameFromSku)(d),
                                    premiumMaxSize: d === N.PremiumSubscriptionSKUs.TIER_0 ? x.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : x.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                                    onClick: () => {
                                        (0, p.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                                h = x.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, C.getDisplayNameFromSku)(d),
                                    onClick: () => {
                                        (0, p.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                                h = x.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                                    onClick: () => {
                                        (0, p.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s(), (0, m.closeAllModals)()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                                h = x.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: v.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, p.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                })
                        }
                        return o(null != h, "There must be some upsell context"), (0, i.jsx)(i.Fragment, {
                            children: (0, i.jsxs)("div", {
                                className: A.contentContainer,
                                children: [(0, i.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: t
                                }), (0, i.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children: r
                                }), (0, i.jsx)(F, {
                                    trialOffer: R,
                                    discountOffer: O,
                                    children: h
                                })]
                            })
                        });
                    case N.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
                        return (0, i.jsxs)("div", {
                            className: A.contentContainer,
                            children: [(0, i.jsx)(f.Heading, {
                                variant: "heading-xl/bold",
                                color: "header-primary",
                                children: t
                            }), (0, i.jsx)(f.Text, {
                                variant: "text-md/normal",
                                children: r
                            }), (0, i.jsx)(F, {
                                trialOffer: R,
                                discountOffer: O,
                                children: x.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, C.getDisplayNameFromSku)(d),
                                    onClick: () => (0, p.transitionTo)(v.Routes.APPLICATION_STORE)
                                })
                            }), (0, i.jsx)(j, {
                                className: A.upsellButton,
                                subscriptionTier: d,
                                analyticsLocationObject: S,
                                onClose: s,
                                trialOffer: R,
                                discountOffer: O
                            })]
                        });
                    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                        return o(null != l, "You must specify children for this upsell type"), (0, i.jsx)(F, {
                            trialOffer: R,
                            discountOffer: O,
                            children: x.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                                onClick: () => {
                                    (0, p.transitionTo)(v.Routes.APPLICATION_STORE), (0, I.closeEditor)()
                                }
                            })
                        });
                    case N.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                        return (0, i.jsxs)("div", {
                            className: a(A.messageLengthUpsellContainer, {
                                [A.messageLengthUpsellAppearAnimation]: !g
                            }),
                            children: [(0, i.jsx)(f.Text, {
                                variant: "text-lg/bold",
                                color: "status-danger",
                                children: r
                            }), (0, i.jsx)(f.Heading, {
                                variant: "heading-lg/extrabold",
                                color: "header-primary",
                                className: A.messageLengthUpsellHeader,
                                children: x.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
                            }), (0, i.jsx)("div", {
                                className: A.divider
                            }), (0, i.jsx)(F, {
                                trialOffer: R,
                                discountOffer: O,
                                className: A.messageLengthBrandedContainer,
                                subscriptionTier: d,
                                children: x.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: v.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, p.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                })
                            }), (0, i.jsx)(j, {
                                subscriptionTier: d,
                                analyticsLocationObject: S,
                                onClose: s,
                                trialOffer: R,
                                discountOffer: O
                            })]
                        });
                    case N.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
                    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                        return (0, i.jsx)(B, {});
                    case N.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
                    case N.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
                    case N.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
                    case N.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
                    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
                    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
                    case N.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
                        return (0, i.jsx)(G, {
                            trialOffer: R,
                            discountOffer: O,
                            headingText: t,
                            context: r,
                            children: l
                        });
                    default:
                        return M.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, i.jsx)(G, {
                            headingText: t,
                            context: r,
                            children: l,
                            trialOffer: R,
                            discountOffer: O
                        })
                }
            }
        },
        400307: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPillAndSparklesColorOptions: function() {
                    return a
                },
                PremiumPillWithSparkles: function() {
                    return el
                },
                Tier0Card: function() {
                    return ed
                },
                Tier2FeatureSet: function() {
                    return o
                },
                Tier2FeatureItems: function() {
                    return ec
                },
                Tier2Card: function() {
                    return em
                },
                default: function() {
                    return e_
                }
            });
            var i, r, l, a, s, o, u = n("37983");
            n("884691");
            var d = n("414456"),
                c = n.n(d),
                m = n("866227"),
                _ = n.n(m),
                f = n("446674"),
                E = n("669491"),
                T = n("819855"),
                I = n("77078"),
                p = n("225664"),
                P = n("841098"),
                S = n("812204"),
                R = n("685665"),
                O = n("441413"),
                C = n("432173"),
                M = n("915639"),
                g = n("697218"),
                L = n("521012"),
                U = n("594098"),
                h = n("491614"),
                N = n("716589"),
                v = n("46829"),
                x = n("118503"),
                A = n("41250"),
                b = n("379863"),
                D = n("216422"),
                F = n("619911"),
                j = n("698015"),
                y = n("75196"),
                w = n("719923"),
                B = n("153160"),
                G = n("309318"),
                H = n("446488"),
                k = n("182650"),
                K = n("154889"),
                V = n("917247"),
                Y = n("641078"),
                z = n("992118"),
                Z = n("332291"),
                W = n("646718"),
                X = n("719347"),
                J = n("782340"),
                q = n("205988"),
                Q = n("939784"),
                $ = n("769015");
            let ee = "premium_new_tier_2_gradient",
                et = "premium_old_tier_2_gradient";

            function en(e) {
                let {
                    width: t = 14,
                    height: n = 13,
                    color: i = "white",
                    foreground: r,
                    ...l
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, y.default)({
                        ...l
                    }),
                    preserveAspectRatio: "none",
                    width: t,
                    height: n,
                    viewBox: "0 0 14 13",
                    className: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, u.jsxs)("defs", {
                        children: [(0, u.jsxs)("linearGradient", {
                            id: ee,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, u.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#8547C6"
                            }), (0, u.jsx)("stop", {
                                offset: "50%",
                                stopColor: "#B845C1"
                            }), (0, u.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#AB5D8A"
                            })]
                        }), (0, u.jsxs)("linearGradient", {
                            id: et,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, u.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#B473F5"
                            }), (0, u.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#E292AA"
                            })]
                        })]
                    }), (0, u.jsx)("path", {
                        d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
                        fill: i
                    })]
                })
            }

            function ei(e) {
                let {
                    tier: t = W.PremiumTypes.TIER_2
                } = e, n = (0, P.default)(), i = (0, T.isThemeLight)(n);
                return (0, u.jsxs)(u.Fragment, {
                    children: [!i && (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("div", {
                            className: c(q.rimGlowVertical, {
                                [q.rimGlowVerticalTier0]: t === W.PremiumTypes.TIER_0,
                                [q.rimGlowVerticalTier2]: t === W.PremiumTypes.TIER_2
                            })
                        }), (0, u.jsx)(en, {
                            foreground: q.buttonSparkleStar1
                        })]
                    }), (0, u.jsx)(en, {
                        foreground: q.buttonSparkleStar2
                    }), (0, u.jsx)(en, {
                        foreground: q.buttonSparkleStar3
                    }), (0, u.jsx)(en, {
                        foreground: q.buttonSparkleStar4
                    }), (0, u.jsx)(en, {
                        foreground: q.buttonSparkleStar5
                    })]
                })
            }

            function er(e) {
                let {
                    text: t,
                    className: n,
                    colorOptions: i = 2
                } = e;
                return (0, u.jsx)("div", {
                    className: c(n, q.freeTrialPill, {
                        [q.freeTrialPillTier0GradientFill]: 1 === i,
                        [q.freeTrialPillTier2GradientFill]: 3 === i,
                        [q.freeTrialPillTier2OldGradientFill]: 4 === i
                    }),
                    children: (0, u.jsx)(I.Text, {
                        variant: "text-xs/bold",
                        className: c(q.freeTrialPillText, {
                            [q.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
                            [q.freeTrialPillTextTier0]: 0 === i,
                            [q.freeTrialPillTextTier2]: 2 === i
                        }),
                        children: t
                    })
                })
            }

            function el(e) {
                let t, {
                    text: n,
                    className: i,
                    colorOptions: r = 2
                } = e;
                switch (r) {
                    case 1:
                        t = E.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
                        break;
                    case 3:
                        t = "url(#".concat(ee, ")");
                        break;
                    case 4:
                        t = "url(#".concat(et, ")");
                        break;
                    default:
                        t = "white"
                }
                return (0, u.jsxs)("div", {
                    className: c(i, q.freeTrialPillWithSparkles),
                    children: [(0, u.jsx)(en, {
                        foreground: q.sparkleStar1,
                        color: t
                    }), (0, u.jsx)(en, {
                        foreground: q.sparkleStar2,
                        color: t
                    }), (0, u.jsx)(en, {
                        foreground: q.sparkleStar3,
                        color: t
                    }), (0, u.jsx)(er, {
                        text: n,
                        colorOptions: r
                    }), (0, u.jsx)(en, {
                        foreground: q.sparkleStar4,
                        color: t
                    }), (0, u.jsx)(en, {
                        foreground: q.sparkleStar5,
                        color: t
                    })]
                })
            }

            function ea(e) {
                let {
                    width: t = 83,
                    height: n = 82,
                    ...i
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, y.default)({
                        ...i
                    }),
                    width: t,
                    height: n,
                    viewBox: "0 0 83 82",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, u.jsx)("g", {
                        clipPath: "url(#clip0_1691_113820)",
                        children: (0, u.jsx)("path", {
                            d: "M75.6975 45.1322C75.2844 48.0717 70.2815 49.7001 69.2458 52.3302C68.0858 55.0537 70.4287 59.7129 68.6614 62.0181C66.8941 64.3233 61.7294 63.1533 59.479 64.9465C57.2438 66.6308 56.836 71.9026 54.133 72.966C51.5389 74.0448 47.5818 70.602 44.6592 70.8574C41.8456 71.1281 38.9013 75.4884 35.9617 75.0752C33.0222 74.6621 31.3938 69.6592 28.7638 68.6235C26.0402 67.4635 21.381 69.8064 19.0758 68.0391C16.7706 66.2718 17.9406 61.1071 16.1474 58.8566C14.5873 56.5279 9.31547 56.1201 8.25204 53.4171C7.17332 50.823 10.6161 46.8659 10.3607 43.9434C9.96577 41.2233 5.60554 38.279 6.01868 35.3394C6.43181 32.3999 11.4347 30.7715 12.4704 28.1414C13.6304 25.4179 11.2876 20.7587 13.0548 18.4535C14.8221 16.1483 19.9868 17.3183 22.2373 15.5251C24.4724 13.8408 24.8802 8.56898 27.5832 7.50556C30.1774 6.42683 34.1345 9.86958 37.057 9.61417C39.8706 9.34346 42.8149 4.98323 45.7545 5.39636C48.6941 5.80949 50.3224 10.8124 52.9525 11.8481C55.6761 13.0081 60.3352 10.6652 62.6404 12.4325C64.9456 14.1998 63.7756 19.3645 65.5688 21.615C67.2531 23.8501 72.5249 24.2579 73.5884 26.9609C74.6671 29.555 71.2243 33.5122 71.4797 36.4347C71.7505 39.2483 76.1107 42.1926 75.6975 45.1322Z",
                            fill: "currentColor"
                        })
                    }), (0, u.jsx)("path", {
                        d: "M30.1999 41.1212L26.9681 32.3582L23.3318 31.8471L21.6757 43.6313L24.3355 44.0051L25.5209 35.571L28.9482 44.6534L32.3488 45.1313L34.0049 33.3471L31.3451 32.9733L30.1999 41.1212ZM43.2501 41.8738C43.6191 39.2476 42.3243 37.5893 39.7655 37.2296C36.971 36.8369 34.9959 38.4305 34.6269 41.0567C34.2341 43.8513 35.9048 45.8886 38.935 46.3145C40.3996 46.5203 41.6035 46.2603 42.3119 45.862L42.5887 43.8924C41.8322 44.2668 40.8661 44.4228 39.9065 44.288C38.2567 44.0561 37.4063 43.2671 37.286 42.1686L43.0939 42.9849L43.2501 41.8738ZM39.5418 39.3098C40.5182 39.447 41.0822 40.0756 40.9668 41.1409L37.5326 40.6583C37.8069 39.6839 38.4812 39.1607 39.5418 39.3098ZM53.3558 44.7704L52.6485 39.2977L49.9214 38.9145L47.757 43.9321L47.211 38.5335L44.4838 38.1503L45.6771 47.0045L48.4043 47.3878L50.7631 42.2087L51.6534 47.8444L54.4311 48.2348L58.2208 40.0809L55.5104 39.7L53.3558 44.7704ZM61.6245 45.4004L62.7507 37.3871L60.0067 37.0015L58.8805 45.0147L61.6245 45.4004ZM59.7123 49.2345C60.6719 49.3694 61.4423 48.7738 61.5677 47.8816C61.6954 46.9725 61.1167 46.2045 60.1571 46.0696C59.1975 45.9348 58.4127 46.5112 58.2849 47.4202C58.1595 48.3125 58.7527 49.0997 59.7123 49.2345Z",
                        fill: "#5865F2"
                    }), (0, u.jsx)("path", {
                        d: "M57.6991 28.0304L61.3718 26.9774C61.3856 26.9721 61.3978 26.9632 61.4071 26.9517C61.4163 26.9401 61.4223 26.9262 61.4243 26.9116C61.4264 26.8969 61.4245 26.882 61.4188 26.8683C61.4131 26.8546 61.4038 26.8427 61.392 26.8338L58.1518 24.8093C58.1409 24.8077 58.1311 24.8019 58.1244 24.7932C58.1178 24.7844 58.1149 24.7733 58.1165 24.7625L57.0607 21.0782C57.0282 21.0109 56.9459 20.9993 56.9167 21.058L54.8864 24.3085C54.8629 24.3261 54.86 24.3466 54.8394 24.3437L51.1462 25.3939C51.1324 25.3992 51.1202 25.4081 51.1109 25.4196C51.1017 25.4312 51.0957 25.445 51.0937 25.4597C51.0916 25.4744 51.0935 25.4893 51.0992 25.503C51.1049 25.5167 51.1142 25.5286 51.126 25.5375L54.3867 27.5649C54.4073 27.5678 54.4044 27.5883 54.4221 27.6117L55.4778 31.296C55.4898 31.3604 55.5721 31.372 55.6219 31.3162L57.6522 28.0657C57.6537 28.0548 57.6595 28.045 57.6683 28.0384C57.6771 28.0318 57.6882 28.0289 57.6991 28.0304V28.0304Z",
                        fill: "#5865F2"
                    }), (0, u.jsx)("path", {
                        d: "M27.9939 54.8801L30.1446 54.2599C30.156 54.2502 30.1635 54.2367 30.1656 54.2219C30.1676 54.207 30.1642 54.1919 30.1559 54.1795L28.2594 52.9905C28.2541 52.9897 28.2493 52.9869 28.2461 52.9826C28.2429 52.9783 28.2415 52.9729 28.2422 52.9676L27.626 50.8105C27.6275 50.7998 27.6247 50.789 27.6182 50.7804C27.6118 50.7718 27.6022 50.7662 27.5915 50.7647C27.5809 50.7632 27.5701 50.766 27.5616 50.7725C27.553 50.7789 27.5473 50.7886 27.5458 50.7992L26.3589 52.7029L26.3388 52.7001L24.1881 53.3203C24.1775 53.3188 24.1667 53.3216 24.1581 53.3281C24.1495 53.3346 24.1439 53.3442 24.1424 53.3549C24.1409 53.3655 24.1437 53.3763 24.1501 53.3849C24.1566 53.3935 24.1662 53.3992 24.1768 53.4007L26.0733 54.5897C26.0786 54.5904 26.0834 54.5933 26.0866 54.5976C26.0898 54.6019 26.0912 54.6073 26.0905 54.6126L26.7067 56.7697C26.7164 56.7811 26.7299 56.7886 26.7446 56.7907C26.7594 56.7928 26.7745 56.7893 26.7869 56.7809L27.9738 54.8773C27.9738 54.8773 27.9738 54.8773 27.9939 54.8801Z",
                        fill: "#5865F2"
                    }), (0, u.jsx)("defs", {
                        children: (0, u.jsx)("clipPath", {
                            id: "clip0_1691_113820",
                            children: (0, u.jsx)("rect", {
                                width: "70.3636",
                                height: "70.3636",
                                fill: "white",
                                transform: "translate(10.915 0.5) rotate(8)"
                            })
                        })
                    })]
                })
            }

            function es(e) {
                let {
                    Icon: t,
                    text: n,
                    isNew: i = !1
                } = e;
                return (0, u.jsxs)("div", {
                    className: q.item,
                    children: [(0, u.jsx)(t, {
                        className: q.icon
                    }), (0, u.jsx)(I.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: n
                    }), i ? (0, u.jsx)(O.default, {
                        className: q.newTagItem,
                        forceUseColorForSparkles: !0,
                        shouldInheritBackgroundColor: !0,
                        shouldInheritTextColor: !0
                    }) : null]
                })
            }

            function eo(e) {
                let {
                    isGift: t,
                    premiumTier: n,
                    offerTierMatchesCard: i,
                    offerType: r,
                    showYearlyPrice: l
                } = e, a = (0, f.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), s = (0, f.useStateFromStores)([g.default], () => g.default.getCurrentUser()), o = (0, k.useHasDiscountApplied)(), d = n === W.PremiumTypes.TIER_0 ? W.PremiumSubscriptionSKUs.TIER_0 : W.PremiumSubscriptionSKUs.TIER_2, c = (null == a ? void 0 : a.trialId) != null ? null == s ? void 0 : s.premiumType : o ? W.PremiumTypes.TIER_2 : null, m = (0, V.usePremiumTrialOffer)(), E = null == m ? void 0 : m.subscription_trial;
                if (!t && null != c && n === c && null != a && null != a.planIdFromItems) {
                    let e = null != a.trialEndsAt ? _(null == a ? void 0 : a.trialEndsAt).diff(_(), "d") : 0,
                        t = W.SubscriptionPlanInfo[a.planIdFromItems],
                        n = w.default.formatPriceString(w.default.getDefaultPrice(t.id), t.interval);
                    return (0, u.jsx)(u.Fragment, {
                        children: (0, u.jsx)(I.Heading, {
                            variant: "heading-md/normal",
                            color: "always-white",
                            className: q.trialHeader,
                            children: 0 === r ? J.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                remainingTime: e,
                                price: n
                            }) : J.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION.format({
                                percent: 30,
                                regularPrice: n
                            })
                        })
                    })
                }
                if (!t && i) {
                    var T, p, P, S;
                    let e = w.default.formatPriceString(w.default.getDefaultPrice(n === W.PremiumTypes.TIER_0 ? W.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : W.SubscriptionPlans.PREMIUM_MONTH_TIER_2), W.SubscriptionIntervalTypes.MONTH);
                    return (0, u.jsx)(I.Heading, {
                        variant: "heading-md/normal",
                        color: "always-white",
                        className: q.trialHeader,
                        children: 0 === r ? J.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                            planName: (0, w.getTierDisplayName)(null !== (p = W.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (T = null == E ? void 0 : E.sku_id) && void 0 !== T ? T : W.PremiumSubscriptionSKUs.NONE]) && void 0 !== p ? p : W.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                            duration: (0, w.formatIntervalDuration)({
                                intervalType: null !== (P = null == E ? void 0 : E.interval) && void 0 !== P ? P : W.SubscriptionIntervalTypes.DAY,
                                intervalCount: null !== (S = null == E ? void 0 : E.interval_count) && void 0 !== S ? S : 30,
                                capitalize: !1
                            }),
                            price: e
                        }) : J.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION.format({
                            discountedPrice: "$6.99",
                            regularPrice: e
                        })
                    })
                }
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(z.default, {
                        subscriptionTier: d,
                        isGift: t,
                        className: q.price
                    }), l && (0, u.jsx)(z.default, {
                        subscriptionTier: d,
                        interval: W.SubscriptionIntervalTypes.YEAR,
                        isGift: t,
                        className: q.price
                    })]
                })
            }

            function eu() {
                let {
                    enabled: e,
                    hasUnlimited: t
                } = (0, p.useBurstReactionsExperiment)();
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(es, {
                        Icon: j.default,
                        text: J.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(W.PremiumTypes.TIER_0, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(es, {
                        Icon: v.default,
                        text: J.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), e ? (0, u.jsx)(es, {
                        Icon: h.default,
                        text: t ? J.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED : J.default.Messages.PREMIUM_TIER_SUPER_REACTIONS_ITEM.format({
                            weeklyReactionsNumber: C.BurstRefillTierAmounts.TIER_0
                        })
                    }) : null, (0, u.jsx)(es, {
                        Icon: D.default,
                        text: J.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
                    })]
                })
            }

            function ed(e) {
                var t;
                let {
                    showWumpus: n,
                    showBadge: i,
                    ctaButton: r,
                    showYearlyPrice: l,
                    className: a,
                    isGift: s = !1
                } = e, o = (0, f.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), d = (0, f.useStateFromStores)([g.default], () => g.default.getCurrentUser()), m = (0, V.usePremiumTrialOffer)(), _ = null == m ? void 0 : null === (t = m.subscription_trial) || void 0 === t ? void 0 : t.sku_id, E = (null == o ? void 0 : o.trialId) != null, T = (null == o ? void 0 : o.trialId) != null ? null == d ? void 0 : d.premiumType : null, I = null != _ || E;
                return (0, u.jsxs)("div", {
                    className: c(q.tier0, q.card, a, {
                        [q.withTier0Rim]: !s && I,
                        [q.withCardHover]: !s && I
                    }),
                    children: [_ === W.PremiumSubscriptionSKUs.TIER_0 ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(el, {
                            text: J.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: q.topRimPill,
                            colorOptions: 0
                        }), (0, u.jsx)("div", {
                            className: q.rimGlowTier0
                        })]
                    }) : null, i && (0, u.jsx)(ea, {
                        className: q.newCircleIcon
                    }), n ? (0, u.jsx)("div", {
                        className: q.wumpusImageContainer,
                        children: (0, u.jsx)(U.default, {
                            src: Q,
                            mediaLayoutType: X.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, s || _ !== W.PremiumSubscriptionSKUs.TIER_0 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(el, {
                            text: J.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: q.topRimPill,
                            colorOptions: 0
                        }), (0, u.jsx)("div", {
                            className: q.rimGlowTier0
                        })]
                    }), s || T !== W.PremiumTypes.TIER_0 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(el, {
                            text: J.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: q.topRimPill,
                            colorOptions: 0
                        }), (0, u.jsx)("div", {
                            className: q.rimGlowTier0
                        })]
                    }), (0, u.jsx)("div", {
                        children: (0, u.jsxs)("div", {
                            className: q.body,
                            children: [(0, u.jsx)("div", {
                                className: q.tier0LogoContainer,
                                children: (0, u.jsx)(b.default, {
                                    className: c(q.tier0Title, q.title)
                                })
                            }), (0, u.jsx)(eo, {
                                isGift: s,
                                premiumTier: W.PremiumTypes.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: _ === W.PremiumSubscriptionSKUs.TIER_0,
                                showYearlyPrice: l
                            }), (0, u.jsx)(eu, {})]
                        })
                    }), r, s || _ !== W.PremiumSubscriptionSKUs.TIER_0 ? null : (0, u.jsx)(ei, {
                        tier: W.PremiumTypes.TIER_0
                    })]
                })
            }

            function ec(e) {
                let {
                    featureSet: t = 0,
                    isModal: n = !1,
                    isGift: i = !1
                } = e, {
                    enabled: r,
                    hasUnlimited: l
                } = (0, p.useBurstReactionsExperiment)(), a = (0, f.useStateFromStores)([M.default], () => M.default.locale), s = (0, f.useStateFromStores)([H.default], () => H.default.affinities), {
                    planSelectionEnabled: o
                } = G.default.useExperiment({
                    location: "planSelection"
                }, {
                    autoTrackExposure: !1
                }), d = n && !i && s.length > 0;
                d && G.default.trackExposure({
                    location: "planSelection"
                });
                if (1 === t) return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(es, {
                        Icon: x.default,
                        text: J.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                            numBoosts: W.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            percentageOff: (0, B.formatPercent)(a, W.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, u.jsx)(es, {
                        Icon: j.default,
                        text: J.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(W.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(es, {
                        Icon: v.default,
                        text: J.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, u.jsx)(es, {
                        Icon: F.default,
                        text: J.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, u.jsx)(es, {
                        Icon: N.default,
                        text: J.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })]
                });
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(es, {
                        Icon: j.default,
                        text: J.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(W.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(es, {
                        Icon: v.default,
                        text: J.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), r ? (0, u.jsx)(es, {
                        Icon: h.default,
                        text: l ? J.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED : J.default.Messages.PREMIUM_TIER_SUPER_REACTIONS_ITEM.format({
                            weeklyReactionsNumber: C.BurstRefillTierAmounts.TIER_2
                        })
                    }) : null, (0, u.jsx)(es, {
                        Icon: F.default,
                        text: J.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, u.jsx)(es, {
                        Icon: x.default,
                        text: J.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
                    }), (0, u.jsx)(es, {
                        Icon: N.default,
                        text: J.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    }), o && d && (0, u.jsx)(Z.default, {})]
                })
            }

            function em(e) {
                var t, n, i;
                let {
                    showWumpus: r,
                    ctaButton: l,
                    showYearlyPrice: a,
                    featureSet: s = 0,
                    className: o,
                    isGift: d = !1,
                    isModal: m = !1
                } = e, _ = (0, f.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), E = (0, f.useStateFromStores)([g.default], () => g.default.getCurrentUser()), T = (0, V.usePremiumTrialOffer)(), p = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id, P = (null == _ ? void 0 : _.trialId) != null ? null == E ? void 0 : E.premiumType : null, S = (0, k.useIsInPremiumOfferExperience)(), R = (0, K.usePremiumDiscountOffer)(), O = (0, k.useHasDiscountApplied)(), C = null != p || null != P ? 0 : null != R || O ? 1 : null, M = (0, Y.useIsEligibleForBogoPromotion)(), h = (0, Y.getBOGOPillCopy)();
                return (0, u.jsxs)("div", {
                    className: c(q.tier2, q.card, o, {
                        [q.withTier2Rim]: !d && S,
                        [q.withCardHover]: !d && S
                    }),
                    children: [!d && null != R && (0, K.discountOfferHasTier)(R, W.PremiumSubscriptionSKUs.TIER_2) && (null === (n = R.discount) || void 0 === n ? void 0 : n.amount) !== void 0 ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(el, {
                            text: J.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                                percent: null === (i = R.discount) || void 0 === i ? void 0 : i.amount
                            }),
                            className: q.topRimPill,
                            colorOptions: 2
                        }), (0, u.jsx)("div", {
                            className: q.rimGlowTier2
                        })]
                    }) : null, d || p !== W.PremiumSubscriptionSKUs.TIER_2 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(el, {
                            text: J.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: q.topRimPill,
                            colorOptions: 2
                        }), (0, u.jsx)("div", {
                            className: q.rimGlowTier2
                        })]
                    }), d || P !== W.PremiumTypes.TIER_2 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(el, {
                            text: J.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: q.topRimPill,
                            colorOptions: 2
                        }), (0, u.jsx)("div", {
                            className: q.rimGlowTier2
                        })]
                    }), !d && O && (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(el, {
                            text: J.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                            className: q.topRimPill,
                            colorOptions: 2
                        }), (0, u.jsx)("div", {
                            className: q.rimGlowTier2
                        })]
                    }), r ? (0, u.jsx)("div", {
                        className: q.wumpusImageContainer,
                        children: (0, u.jsx)(U.default, {
                            src: $,
                            mediaLayoutType: X.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, (0, u.jsxs)("div", {
                        children: [(0, u.jsx)(A.default, {
                            className: c(q.tier2Title, q.title)
                        }), !d && p !== W.PremiumSubscriptionSKUs.TIER_2 && M && (0, u.jsx)(I.Text, {
                            variant: "text-xs/bold",
                            className: q.freeTrialPillInline,
                            children: h
                        }), (0, u.jsx)(eo, {
                            isGift: d,
                            premiumTier: W.PremiumTypes.TIER_2,
                            offerType: C,
                            offerTierMatchesCard: p === W.PremiumSubscriptionSKUs.TIER_2 || (0, K.discountOfferHasTier)(R, W.PremiumSubscriptionSKUs.TIER_2),
                            showYearlyPrice: a
                        }), (0, u.jsx)(ec, {
                            featureSet: s,
                            isModal: m,
                            isGift: d
                        })]
                    }), l, d || p !== W.PremiumSubscriptionSKUs.TIER_2 && null == R ? null : (0, u.jsx)(ei, {
                        tier: W.PremiumTypes.TIER_2
                    })]
                })
            }

            function e_(e) {
                let {
                    showWumpus: t,
                    showBadge: n,
                    tier0CTAButton: i,
                    tier2CTAButton: r,
                    className: l
                } = e, {
                    AnalyticsLocationProvider: a
                } = (0, R.default)(S.default.PREMIUM_MARKETING_TIER_CARD);
                return (0, u.jsx)(a, {
                    children: (0, u.jsxs)("div", {
                        className: c(q.premiumCards, l),
                        children: [(0, u.jsx)(ed, {
                            showWumpus: t,
                            showBadge: n,
                            ctaButton: i
                        }), (0, u.jsx)(em, {
                            showWumpus: t,
                            ctaButton: r
                        })]
                    })
                })
            }(i = a || (a = {}))[i.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", i[i.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", i[i.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", i[i.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", (r = s || (s = {}))[r.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", r[r.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (l = o || (o = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.BOOSTING = 1] = "BOOSTING"
        },
        992118: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("446674"),
                s = n("77078"),
                o = n("10514"),
                u = n("719923"),
                d = n("646718"),
                c = n("449001"),
                m = function(e) {
                    let {
                        subscriptionTier: t,
                        interval: n = d.SubscriptionIntervalTypes.MONTH,
                        className: r,
                        isGift: m = !1
                    } = e, _ = (0, a.useStateFromStores)([o.default], () => o.default.isLoadedForPremiumSKUs());
                    if (!_) return (0, i.jsx)(s.Spinner, {
                        type: s.Spinner.Type.PULSING_ELLIPSIS,
                        className: c.priceSpinner
                    });
                    let f = o.default.getForSkuAndInterval(t, n),
                        E = null != f ? (0, u.getFormattedPriceForPlan)(f, void 0, !1, m) : null;
                    return (0, i.jsxs)(s.Heading, {
                        color: "always-white",
                        variant: "heading-md/medium",
                        className: l(c.pricePerInterval, r),
                        children: [(0, i.jsx)("span", {
                            className: c.price,
                            children: E
                        }), " / ", (0, u.getIntervalStringAsNoun)(n)]
                    })
                }
        },
        332291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("446674"),
                o = n("77078"),
                u = n("106435"),
                d = n("446488"),
                c = n("782340"),
                m = n("760068");

            function _() {
                let e = (0, s.useStateFromStores)([d.default], () => d.default.affinities.slice(0, 3)),
                    t = e[0],
                    {
                        avatarSrc: n,
                        eventHandlers: l
                    } = (0, u.default)({
                        user: t,
                        size: o.AvatarSizes.SIZE_24,
                        animateOnHover: !0
                    }),
                    _ = e => null != e.globalName ? e.globalName : e.username,
                    f = r.useMemo(() => e.length >= 2 ? c.default.Messages.AFFINITIES_MARKETING_HEADER_3.format({
                        username: _(e[0])
                    }) : 1 === e.length ? c.default.Messages.AFFINITIES_MARKETING_HEADER_1.format({
                        username: _(e[0])
                    }) : "", [e]);
                return 0 === e.length ? null : (0, i.jsxs)("div", {
                    className: m.container,
                    children: [(0, i.jsx)(o.Avatar, {
                        className: m.icon,
                        src: n,
                        "aria-label": t.username,
                        size: o.AvatarSizes.SIZE_24,
                        ...l
                    }), (0, i.jsx)(o.Text, {
                        className: a(m.text),
                        variant: "text-sm/normal",
                        color: "always-white",
                        children: f
                    })]
                })
            }
        },
        202664: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("446674"),
                o = n("77078"),
                u = n("109036"),
                d = n("697218"),
                c = n("993105"),
                m = n("719923"),
                _ = n("552917"),
                f = n("843647"),
                E = n("789946"),
                T = n("646718"),
                I = n("49111"),
                p = n("527382"),
                P = n("782340"),
                S = n("74230");

            function R(e) {
                let t, {
                        onClose: n,
                        fileSize: l,
                        ...R
                    } = e,
                    O = null != l && T.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < l,
                    {
                        isLoading: C,
                        suggestedPremiumType: M
                    } = (0, f.default)({
                        autoTrackExposure: !O,
                        experiment: _.default,
                        location: T.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
                    }),
                    g = !O && M === T.PremiumTypes.TIER_0,
                    L = (0, s.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
                    U = (0, i.jsx)(u.default, {
                        icons: p.DEFAULT_FILE_UPLOAD_ICONS
                    });
                t = g ? P.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, m.getPremiumTypeDisplayName)(T.PremiumTypes.TIER_0),
                    premiumMaxSize: P.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                let h = r.useMemo(() => {
                        let e = m.default.getUserMaxFileSize(L),
                            t = (0, c.formatSize)(e / 1024, {
                                useKibibytes: !0
                            }),
                            n = P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (null == L ? void 0 : L.premiumType) {
                            case T.PremiumTypes.TIER_0:
                                n = P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case T.PremiumTypes.TIER_1:
                                n = P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return n
                    }, [L]),
                    N = (0, i.jsxs)("div", {
                        className: S.body,
                        children: [(0, i.jsx)("span", {
                            children: h
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, i.jsx)(E.default, {
                    artElement: U,
                    artContainerClassName: a(S.artContainer),
                    enableArtBoxShadow: !1,
                    type: T.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
                    title: P.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: N,
                    context: P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: P.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: I.AnalyticsSections.FILE_UPLOAD_POPOUT
                    },
                    onClose: n,
                    subscriptionTier: g ? T.PremiumSubscriptionSKUs.TIER_0 : T.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: C,
                    ...R
                })
            }
        },
        789946: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("77078"),
                o = n("812204"),
                u = n("685665"),
                d = n("617917"),
                c = n("599110"),
                m = n("719923"),
                _ = n("154889"),
                f = n("917247"),
                E = n("956597"),
                T = n("635956"),
                I = n("646718"),
                p = n("49111"),
                P = n("782340"),
                S = n("857513"),
                R = n("393828");

            function O(e) {
                var t, n, l;
                let {
                    title: O,
                    type: C,
                    guildBoostProps: M,
                    analyticsSource: g,
                    analyticsLocation: L,
                    body: U,
                    context: h,
                    glowUp: N,
                    modalClassName: v,
                    artContainerClassName: x,
                    bodyClassName: A,
                    transitionState: b,
                    onClose: D,
                    onSubscribeClick: F,
                    onSecondaryClick: j,
                    secondaryCTA: y,
                    subscribeButtonText: w,
                    showNewBadge: B = !1,
                    enableArtBoxShadow: G = !0,
                    subscriptionTier: H = I.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: k = !1,
                    hideBackButton: K,
                    backButtonText: V,
                    ...Y
                } = e, z = null != M, Z = (0, f.usePremiumTrialOffer)(), W = (0, _.usePremiumDiscountOffer)(), X = ((null == Z ? void 0 : null === (t = Z.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H || (0, _.discountOfferHasTier)(W, H)) && !z, {
                    analyticsLocations: J
                } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL);
                r.useEffect(() => {
                    !k && (z ? c.default.track(p.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(C, " - Tier ").concat(M.boostedGuildTier),
                        guild_id: M.guild.id,
                        channel_id: M.channelId,
                        location: L,
                        location_stack: J
                    }) : c.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: C,
                        source: g,
                        location_stack: J,
                        sku_id: H
                    }))
                }, [z, H, k]);
                let q = G ? a(S.artContainer, S.artContainerBoxShadow, x) : a(S.artContainer, x),
                    Q = null;
                return Q = "artURL" in Y ? (0, i.jsx)("img", {
                    className: S.art,
                    alt: "",
                    src: Y.artURL
                }) : Y.artElement, (0, i.jsxs)(s.ModalRoot, {
                    className: a(S.root, v),
                    "aria-label": O,
                    transitionState: b,
                    children: [(0, i.jsxs)("div", {
                        className: q,
                        children: [Q, B ? (0, i.jsx)("img", {
                            className: S.sparkleBadge,
                            alt: "",
                            src: R
                        }) : null]
                    }), (0, i.jsx)(s.ModalContent, {
                        className: S.content,
                        children: k ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsx)(i.Fragment, {
                            children: X ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(E.default, {
                                    onClose: D,
                                    type: C,
                                    subscriptionTier: null !== (l = null == Z ? void 0 : null === (n = Z.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== l ? l : I.PremiumSubscriptionSKUs.TIER_2,
                                    headingText: O,
                                    context: h,
                                    analyticsLocationObject: L,
                                    discountOffer: W,
                                    trialOffer: Z,
                                    children: N
                                })
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(s.Heading, {
                                    className: S.header,
                                    variant: "heading-xl/semibold",
                                    children: O
                                }), (0, i.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    className: a(A),
                                    children: U
                                })]
                            })
                        })
                    }), (0, i.jsxs)(s.ModalFooter, {
                        className: S.footer,
                        children: [(0, i.jsxs)("div", {
                            className: S.primaryActions,
                            children: [null != y ? (0, i.jsx)(s.Button, {
                                className: S.secondaryAction,
                                onClick: j,
                                size: s.Button.Sizes.SMALL,
                                color: s.Button.Colors.PRIMARY,
                                look: s.Button.Looks.LINK,
                                children: y
                            }) : null, (() => {
                                let e, t;
                                if (z) return (0, i.jsx)(d.default, {
                                    analyticsLocation: L,
                                    guild: M.guild,
                                    onClose: D
                                });
                                if (X) {
                                    if (null != Z) {
                                        var n, r;
                                        e = (0, m.formatTrialCtaIntervalDuration)({
                                            intervalType: null == Z ? void 0 : null === (n = Z.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                            intervalCount: null == Z ? void 0 : null === (r = Z.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                                        }), t = null == Z ? void 0 : Z.trial_id
                                    } else null != W && (e = P.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                        percent: W.discount.amount
                                    }))
                                }
                                return (0, i.jsx)(T.default, {
                                    premiumModalAnalyticsLocation: L,
                                    subscriptionTier: H,
                                    trialId: t,
                                    size: s.Button.Sizes.SMALL,
                                    color: s.Button.Colors.GREEN,
                                    onClick: () => {
                                        null == F || F(), D()
                                    },
                                    buttonText: null != w ? w : e
                                })
                            })()]
                        }), !K && (0, i.jsx)(s.Button, {
                            onClick: D,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            children: null != V ? V : P.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        737403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeOpenProfilePreviewModal: function() {
                    return r
                }
            });
            var i = n("913144");

            function r(e) {
                let {
                    imageSrc: t,
                    file: n,
                    uploadType: r,
                    guildId: l,
                    isTryItOutFlow: a = !1
                } = e;
                i.default.dispatch({
                    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                    imageSrc: t,
                    file: n,
                    uploadType: r,
                    guildId: l,
                    isTryItOutFlow: a
                })
            }
        },
        453252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return i
                }
            });
            let i = 10485760
        },
        771325: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handleOpenSelectImageModal: function() {
                    return f
                },
                showFileSizeErrorModal: function() {
                    return E
                },
                getPreviewAvatar: function() {
                    return T
                },
                getPreviewNickname: function() {
                    return I
                },
                getPreviewDisplayName: function() {
                    return p
                },
                isColorDark: function() {
                    return P
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("509043"),
                l = n("77078"),
                a = n("336522"),
                s = n("473591"),
                o = n("315102"),
                u = n("254490"),
                d = n("737403"),
                c = n("453252"),
                m = n("75015"),
                _ = n("782340");

            function f(e, t, r, a) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: l
                    } = await n.el("420333").then(n.bind(n, "420333")), o = s.default.isEditingClydeProfile();
                    return n => (0, i.jsx)(l, {
                        filters: a,
                        maxFileSizeBytes: c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: e === m.UploadTypes.BANNER && _.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                        onComplete: (n, i) => (0, d.maybeOpenProfilePreviewModal)({
                            imageSrc: n,
                            file: i,
                            uploadType: e,
                            guildId: t,
                            isTryItOutFlow: r
                        }),
                        uploadType: e,
                        showUpsellHeader: !o,
                        ...n
                    })
                })
            }

            function E() {
                (0, a.openUploadError)({
                    title: _.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: _.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, u.sizeString)(c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
                    })
                })
            }

            function T(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != e) return e;
                let {
                    size: r = 80,
                    canAnimate: l = !0
                } = i, a = null === e;
                return a && null == t ? o.default.getDefaultAvatarURL(n.id, n.discriminator) : a || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, r, l) : n.getAvatarURL(null == t ? void 0 : t.guildId, r, l)
            }

            function I(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function p(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function P(e) {
                let t = null != e ? (0, r.getDarkness)(e) : 1;
                return t > .25
            }
        },
        106435: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("77078"),
                l = n("606292"),
                a = n("688318"),
                s = n("19287");

            function o(e) {
                let {
                    user: t,
                    guildId: n,
                    size: o,
                    showPending: u = !1,
                    showTryItOut: d = !1,
                    animateOnHover: c = !1,
                    avatarDecorationOverride: m,
                    avatarOverride: _
                } = e, {
                    avatarSrc: f,
                    isAvatarAnimating: E,
                    eventHandlers: T
                } = (0, s.useAnimatedAvatarSrc)({
                    user: t,
                    guildId: n,
                    size: (0, r.getAvatarSize)(o),
                    showPending: u,
                    animateOnHover: c,
                    avatarOverride: _
                }), {
                    avatarPlaceholderSrc: I,
                    avatarDecorationSrc: p,
                    eventHandlers: P
                } = (0, a.default)({
                    user: t,
                    size: (0, l.getDecorationSizeForAvatarSize)(o),
                    showPending: u,
                    animateOnHover: c,
                    avatarDecorationOverride: m,
                    showTryItOut: d
                }), S = i.useCallback(() => {
                    T.onMouseEnter(), P.onMouseEnter()
                }, [T, P]), R = i.useCallback(() => {
                    T.onMouseLeave(), P.onMouseLeave()
                }, [T, P]);
                return {
                    avatarPlaceholderSrc: I,
                    avatarDecorationSrc: p,
                    avatarSrc: f,
                    isAnimating: E,
                    eventHandlers: {
                        onMouseEnter: S,
                        onMouseLeave: R
                    }
                }
            }
        },
        19287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnimatedAvatarSrc: function() {
                    return d
                }
            }), n("222007");
            var i = n("884691"),
                r = n("446674"),
                l = n("206230"),
                a = n("771325"),
                s = n("26989"),
                o = n("471671"),
                u = n("91653");

            function d(e) {
                let {
                    user: t,
                    guildId: n,
                    size: d,
                    showPending: c = !1,
                    animateOnHover: m = !1,
                    avatarOverride: _
                } = e, [f, E] = i.useState(!1), T = (0, r.useStateFromStores)([l.default], () => l.default.useReducedMotion), I = (0, r.useStateFromStores)([o.default], () => o.default.isFocused()), p = I && (f || !T && !m), {
                    pendingAvatar: P
                } = (0, u.default)({}), S = (0, r.useStateFromStores)([s.default], () => null != n && null != t ? s.default.getMember(n, t.id) : null), R = i.useMemo(() => null != t ? (0, a.getPreviewAvatar)(c ? null != _ ? _ : P : void 0, S, t, {
                    canAnimate: p,
                    size: d
                }) : void 0, [c, P, S, t, p, d, _]), O = i.useCallback(() => E(!0), []), C = i.useCallback(() => E(!1), []);
                return {
                    avatarSrc: R,
                    isAvatarAnimating: p,
                    eventHandlers: {
                        onMouseEnter: O,
                        onMouseLeave: C
                    }
                }
            }
        },
        491614: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("856567"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: n = 18,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23 12C23 15.4588 21.244 18.5074 18.575 20.303C16.9546 21.4361 14.9961 22.0511 12.9077 21.9996C11.5234 21.9871 10.2063 21.6933 9.01083 21.1726L8.93992 21.1486C7.24876 20.5765 5.54476 20 3.77041 20H3.5C2.67157 20 2 19.3284 2 18.5C2 17.6716 2.67157 17 3.5 17C4.03814 17 4.40201 16.7197 4.57202 16.3248C4.83747 15.7082 4.79971 14.5414 3.86441 14.1934C3.41676 14.0268 2.72587 14 2.39244 14H1.5C0.671573 14 0 13.3284 0 12.5C0 11.6716 0.671573 11 1.5 11C2.16507 11 2.69887 10.6988 3.10938 10.1953C3.46698 9.75673 3.46834 9.09578 3.27805 8.62811C3.11182 8.21955 2.77674 7.83979 2.44976 7.55367C2.17543 7.31362 2 6.96873 2 6.50001C2 5.67158 2.67157 5.00001 3.5 5.00001C4.79441 5.00001 6.01593 4.51851 7.15231 3.88709C8.79678 2.6997 10.8167 2 13 2C18.5228 2 23 6.47715 23 12ZM15.2781 13.6032C15.7366 13.7241 16.1174 14.026 16.3144 14.4105C16.5162 14.8043 16.5223 15.2869 16.2154 15.7057C15.2355 17.0432 13.4838 17.7164 11.7684 17.264C10.0529 16.8115 8.87791 15.3665 8.70867 13.726C8.65566 13.2122 8.90615 12.7973 9.28089 12.5555C9.64684 12.3195 10.13 12.2455 10.5885 12.3664L15.2781 13.6032ZM9.20943 8.1998C8.65483 8.05353 8.08712 8.27952 7.78185 8.72337C7.56782 9.03455 7.13921 9.34399 6.64391 9.21336C6.18769 9.09304 5.83028 8.58879 6.08468 8.08437C6.72953 6.80575 8.21942 6.10768 9.6745 6.49143C11.1296 6.87519 12.0653 8.21295 11.9742 9.63762C11.9382 10.1997 11.3726 10.4605 10.9163 10.3401C10.4211 10.2095 10.2071 9.73061 10.1798 9.35578C10.1409 8.82116 9.76403 8.34606 9.20943 8.1998ZM17.6296 11.3621C17.9348 10.9182 18.5026 10.6922 19.0571 10.8385C19.6117 10.9848 19.9886 11.4599 20.0275 11.9945C20.0548 12.3693 20.2688 12.8482 20.7641 12.9788C21.2203 13.0992 21.786 12.8384 21.8219 12.2763C21.913 10.8517 20.9773 9.51389 19.5222 9.13014C18.0671 8.74638 16.5772 9.44445 15.9324 10.7231C15.678 11.2275 16.0354 11.7317 16.4916 11.8521C16.9869 11.9827 17.4155 11.6733 17.6296 11.3621Z",
                            fill: r
                        })
                    })
                }, l.SuperReactionIcon, void 0, {
                    size: 18
                })
        },
        716589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("361019"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 25,
                        height: n = 25,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsxs)("g", {
                            clipPath: "url(#clip0_1473_119386)",
                            children: [(0, i.jsx)("path", {
                                d: "M16.001 20.5H4.00098C2.89798 20.5 2.00098 19.602 2.00098 18.5V8.5H4.00098V18.5H16.001V20.5Z",
                                fill: r
                            }), (0, i.jsx)("path", {
                                d: "M21.001 3.5H8.00098C6.89798 3.5 6.00098 4.396 6.00098 5.5V14.5C6.00098 15.602 6.89798 16.5 8.00098 16.5H21.001C22.104 16.5 23.001 15.602 23.001 14.5V5.5C23.001 4.396 22.104 3.5 21.001 3.5ZM9.00098 13.5C9.00098 11.659 10.16 10.5 12.001 10.5C10.896 10.5 10.001 9.604 10.001 8.5C10.001 7.396 10.896 6.5 12.001 6.5C13.106 6.5 14.001 7.396 14.001 8.5C14.001 9.604 13.105 10.5 12.001 10.5C13.842 10.5 15.001 11.659 15.001 13.5H9.00098ZM20.001 13.5H16.001V11.5H20.001V13.5ZM20.001 9.5H16.001V7.5H20.001V9.5Z",
                                fill: r
                            })]
                        }), (0, i.jsx)("defs", {
                            children: (0, i.jsx)("clipPath", {
                                id: "clip0_1473_119386",
                                children: (0, i.jsx)("rect", {
                                    width: t,
                                    height: t,
                                    fill: r,
                                    transform: "translate(0 0.5)"
                                })
                            })
                        })]
                    })
                }, l.UserSquareIcon, void 0, {
                    size: 25
                })
        },
        619911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("125094"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: l,
                            fill: r
                        }), (0, i.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: l,
                            fill: r
                        })]
                    })
                }, l.ScreenArrowIcon, void 0, {
                    size: 24
                })
        },
        698015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("596256"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.2137 2.00088L2.27111 13.3826C1.9299 13.8168 2.00535 14.4455 2.43963 14.7867C2.61581 14.9251 2.83338 15.0004 3.05744 15.0004H7V21.0004C7 21.5527 7.44772 22.0004 8 22.0004H16C16.5523 22.0004 17 21.5527 17 21.0004V15.0004H20.9425C21.4948 15.0004 21.9425 14.5527 21.9425 14.0004C21.9425 13.7763 21.8673 13.5588 21.7289 13.3826L12.7863 2.00088C12.4451 1.56661 11.8165 1.49116 11.3822 1.83237C11.3195 1.88162 11.2629 1.93819 11.2137 2.00088Z"
                        })
                    })
                }, l.UploadIcon, void 0, {
                    size: 24
                })
        }
    }
]);
//# sourceMappingURL=47387.48123261786521d08785.js.map