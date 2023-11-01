(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["23398"], {
        265614: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ScreenIcon: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("669491"),
                l = i("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
                        className: u
                    })
                })
            }
        },
        824986: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PremiumTutorialTooltips: function() {
                    return l
                },
                default: function() {
                    return T
                }
            });
            var n, r, l, o = i("446674"),
                u = i("913144"),
                a = i("521012"),
                s = i("565785"),
                d = i("646718");
            (n = l || (l = {})).FILE_UPLOAD = "file_upload", n.STICKER_PICKER = "sticker_picker", n.EMOJI_PICKER = "emoji_picker", n.BOOSTING_FLOW = "boosting_flow";
            let c = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function m() {
                c = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function E() {
                let e = new Date;
                e.setDate(e.getDate() + 14), c.tutorialExpirationTime = e.getTime()
            }
            class f extends o.default.PersistedStore {
                initialize(e) {
                    null != e && (c = e), c.isPersistentHelperHidden = !1, c.canPlayWowMoment = !1, c.isFetchingWowMomentMedia = !1, c.wowMomentWumpusMediaUrl = null, c.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return c
                }
                get isPersistentCoachmarkCollapsed() {
                    return c.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(e) {
                    return null == c.hasFlowStartEventBeenEmitted[e] && (c.hasFlowStartEventBeenEmitted[e] = !1), c.hasFlowStartEventBeenEmitted[e]
                }
                get canPlayWowMoment() {
                    return c.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return c.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return c.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return c.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return c.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return c.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return c.tutorialExpirationTime
                }
            }
            f.displayName = "PremiumTutorialStore", f.persistKey = "PremiumTutorialStore", f.migrations = [e => ({
                ...e,
                hasFlowStartEventBeenEmitted: null !== (r = e.hasFlowStartEventBeenEmitted) && void 0 !== r ? r : {}
            })];
            var T = new f(u.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    c.isPersistentCoachmarkCollapsed = !c.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: i
                    } = e;
                    c.hasFlowStartEventBeenEmitted[t] = i
                },
                LOGOUT: function() {
                    m()
                },
                RESET_PREMIUM_TUTORIAL_STORE: m,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    c.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    let {
                        value: t
                    } = e;
                    c.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    c.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t,
                        helperMedia: i
                    } = e;
                    c.wowMomentWumpusMediaUrl = t, c.wowMomentHelperMediaUrl = i, c.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    let {
                        value: t
                    } = e;
                    c.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e, {
                        enabled: i
                    } = s.default.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    i && null != t.items.find(e => d.PREMIUM_TIER_2_PLANS.has(e.plan_id)) && E()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        entitlement: t
                    } = e, {
                        enabled: i
                    } = s.default.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    i && (null == t ? void 0 : t.sku_id) === d.PremiumSubscriptionSKUs.TIER_2 && null == a.default.getPremiumSubscription(!1) && null == c.tutorialExpirationTime && E()
                }
            })
        },
        694768: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = r
        },
        565785: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = r
        },
        921228: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useIsPremiumTutorialEnabled: function() {
                    return _
                },
                isPremiumTutorialEnabled: function() {
                    return I
                },
                useAllDismissedPremiumTutorialSteps: function() {
                    return g
                }
            });
            var n = i("884691"),
                r = i("446674"),
                l = i("151426"),
                o = i("850068"),
                u = i("10641"),
                a = i("374363"),
                s = i("697218"),
                d = i("521012"),
                c = i("719923"),
                m = i("324878"),
                E = i("824986"),
                f = i("694768"),
                T = i("565785"),
                p = i("646718");
            let M = () => {
                    let e = (0, r.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
                        t = (0, u.useIsDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, m.isEligibleTrialSub)(e) && !t
                },
                S = () => {
                    let e = (0, m.useHasActiveTrial)(),
                        t = (0, u.useIsDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        i = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
                        a = (0, c.isPremiumExactly)(i, p.PremiumTypes.TIER_2),
                        E = (0, r.useStateFromStores)([d.default], () => d.default.hasFetchedPreviousPremiumTypeSubscription()),
                        f = (0, r.useStateFromStores)([d.default], () => d.default.getPreviousPremiumTypeSubscription()),
                        T = !e && a;
                    n.useEffect(() => {
                        T && !E && !t && (0, o.fetchMostRecentSubscription)()
                    }, [T, E, t]);
                    let M = T && E && null == f;
                    return M && !t
                };

            function _(e) {
                var t;
                let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = M() && i,
                    {
                        enabled: l
                    } = f.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: n,
                        disable: !n
                    }),
                    o = (0, r.useStateFromStores)([E.default], () => E.default.tutorialExpirationTime),
                    u = new Date().getTime(),
                    a = (0, r.useStateFromStores)([d.default], () => {
                        var e, i;
                        return null !== (t = null === (i = d.default.getPremiumSubscription()) || void 0 === i ? void 0 : null === (e = i.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== t ? t : 0
                    }),
                    s = S() && i,
                    c = T.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: s && u - a < 18e5,
                        disable: !s
                    }).enabled && null != o && o > u;
                return l || c
            }
            let v = () => {
                    let e = d.default.getPremiumTypeSubscription(),
                        t = (0, u.isDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, m.isEligibleTrialSub)(e) && !t
                },
                P = () => {
                    let e = (0, m.hasActiveTrial)(),
                        t = (0, u.isDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        i = s.default.getCurrentUser(),
                        n = (0, c.isPremiumExactly)(i, p.PremiumTypes.TIER_2),
                        r = d.default.hasFetchedPreviousPremiumTypeSubscription(),
                        a = d.default.getPreviousPremiumTypeSubscription();
                    return !r && n && !t && (0, o.fetchMostRecentSubscription)(), !t && !e && n && r && null == a
                },
                I = function(e) {
                    var t, i, n;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        l = v() && r,
                        {
                            enabled: o
                        } = f.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !l,
                            autoTrackExposure: l
                        }),
                        u = new Date().getTime(),
                        a = E.default.tutorialExpirationTime,
                        s = null !== (n = null === (i = d.default.getPremiumSubscription()) || void 0 === i ? void 0 : null === (t = i.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== n ? n : 0,
                        c = P() && r,
                        m = T.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !c,
                            autoTrackExposure: c && u - s < 18e5
                        }).enabled && null != a && a > u;
                    return o || m
                },
                C = [];

            function R() {
                return p.PremiumTutorialStepOrder.filter(e => (0, u.isDismissibleContentDismissed)(e))
            }

            function g() {
                return function(e, t) {
                    let i = _("useMemoizedValueSyncedWithDismissibleContents"),
                        l = (0, r.useStateFromStores)([a.default], () => {
                            var e;
                            return null === (e = a.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                        });
                    return n.useMemo(() => i ? e() : t, [i, t, e, l])
                }(R, C)
            }
        },
        394832: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("469563"),
                l = i("265614"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: r = "currentColor",
                        className: l,
                        foreground: o
                    } = e;
                    return (0, n.jsx)("svg", {
                        className: l,
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            className: o,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                        })
                    })
                }, l.ScreenIcon)
        },
        708169: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                FullScreenLayers: function() {
                    return I
                },
                useFullScreenLayerStore: function() {
                    return S
                },
                openFullScreenLayer: function() {
                    return C
                },
                closeFullScreenLayer: function() {
                    return R
                }
            });
            var n, r, l = i("37983"),
                o = i("884691"),
                u = i("995008"),
                a = i.n(u),
                s = i("324134"),
                d = i("308503"),
                c = i("769846"),
                m = i("77078"),
                E = i("485328"),
                f = i("159885"),
                T = i("983782"),
                p = i("275495");
            let M = (0, f.cssValueToNumber)(c.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            (n = r || (r = {}))[n.ENTERING = 1] = "ENTERING", n[n.ENTERED = 2] = "ENTERED", n[n.EXITING = 3] = "EXITING", n[n.EXITED = 4] = "EXITED";
            let S = (0, d.default)(e => ({
                fullScreenLayers: [],
                addLayer: t => e(e => {
                    let {
                        fullScreenLayers: i
                    } = e;
                    return {
                        fullScreenLayers: [...i, t]
                    }
                })
            }));

            function _(e) {
                let {
                    item: t
                } = e, i = o.useRef(null);
                return (0, m.useFocusLock)(i), o.useEffect(() => (E.default.disable(), E.default.enableTemp(function(e) {
                    return {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action() {
                                R(e)
                            }
                        }
                    }
                }(t.key)), () => {
                    E.default.disableTemp()
                }), [t.key]), (0, l.jsx)(t.LayerComponent, {
                    children: (0, l.jsxs)("div", {
                        className: p.root,
                        ref: i,
                        children: [(0, l.jsx)("div", {
                            className: p.drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : r.EXITING,
                            closeLayer: () => R(t.key)
                        })]
                    })
                })
            }
            let v = {
                    enter: p.enter,
                    enterActive: p.enterActive,
                    enterDone: p.enterDone,
                    exit: p.exit,
                    exitActive: p.exitActive,
                    exitDone: p.exitDone
                },
                P = {
                    enter: p.enterReducedMotion,
                    enterActive: p.enterActiveReducedMotion,
                    enterDone: p.enterDoneReducedMotion,
                    exit: p.exitReducedMotion,
                    exitActive: p.exitActiveReducedMotion,
                    exitDone: p.exitDoneReducedMotion
                };

            function I() {
                let {
                    reducedMotion: e
                } = o.useContext(m.AccessibilityPreferencesContext), t = e.enabled, i = t ? P : v, n = S(e => e.fullScreenLayers);
                return (0, l.jsx)(s.TransitionGroup, {
                    children: n.map(e => (0, l.jsx)(s.CSSTransition, {
                        classNames: i,
                        timeout: M,
                        onEntered: () => {
                            S.setState({
                                fullScreenLayers: n.map(t => t.key === e.key ? {
                                    ...t,
                                    transitionState: r.ENTERED
                                } : t)
                            })
                        },
                        unmountOnExit: !0,
                        children: (0, l.jsx)(_, {
                            item: e
                        })
                    }, e.key))
                })
            }

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    {
                        layerKey: i,
                        Layer: n
                    } = t,
                    l = null != i ? i : a();
                return S.setState(t => ({
                    fullScreenLayers: [...t.fullScreenLayers, {
                        key: l,
                        transitionState: r.ENTERING,
                        LayerComponent: null != n ? n : T.default,
                        render: e
                    }]
                })), l
            }

            function R(e) {
                S.setState(t => ({
                    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
                }))
            }
        }
    }
]);
//# sourceMappingURL=cfea62243daa1fb6cd64.js.map