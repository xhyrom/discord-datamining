(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["23398"], {
        824986: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PremiumTutorialTooltips: function() {
                    return r
                },
                default: function() {
                    return f
                }
            });
            var n, r, l = i("446674"),
                o = i("913144"),
                u = i("521012"),
                s = i("565785"),
                a = i("646718");
            (n = r || (r = {})).FILE_UPLOAD = "file_upload", n.STICKER_PICKER = "sticker_picker", n.EMOJI_PICKER = "emoji_picker", n.BOOSTING_FLOW = "boosting_flow";
            let d = {
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

            function c() {
                d = {
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

            function m() {
                let e = new Date;
                e.setDate(e.getDate() + 14), d.tutorialExpirationTime = e.getTime()
            }
            class E extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (d = e), d.isPersistentHelperHidden = !1, d.canPlayWowMoment = !1, d.isFetchingWowMomentMedia = !1, d.wowMomentWumpusMediaUrl = null, d.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return d
                }
                get isPersistentCoachmarkCollapsed() {
                    return d.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(e) {
                    return null == d.hasFlowStartEventBeenEmitted[e] && (d.hasFlowStartEventBeenEmitted[e] = !1), d.hasFlowStartEventBeenEmitted[e]
                }
                get canPlayWowMoment() {
                    return d.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return d.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return d.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return d.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return d.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return d.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return d.tutorialExpirationTime
                }
            }
            E.displayName = "PremiumTutorialStore", E.persistKey = "PremiumTutorialStore", E.migrations = [e => {
                var t;
                return {
                    ...e,
                    hasFlowStartEventBeenEmitted: null !== (t = e.hasFlowStartEventBeenEmitted) && void 0 !== t ? t : {}
                }
            }];
            var f = new E(o.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    d.isPersistentCoachmarkCollapsed = !d.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: i
                    } = e;
                    d.hasFlowStartEventBeenEmitted[t] = i
                },
                LOGOUT: function() {
                    c()
                },
                RESET_PREMIUM_TUTORIAL_STORE: c,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    d.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    let {
                        value: t
                    } = e;
                    d.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    d.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t,
                        helperMedia: i
                    } = e;
                    d.wowMomentWumpusMediaUrl = t, d.wowMomentHelperMediaUrl = i, d.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    let {
                        value: t
                    } = e;
                    d.navigatedFromHelper = t
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
                    i && null != t.items.find(e => a.PREMIUM_TIER_2_PLANS.has(e.plan_id)) && m()
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
                    i && (null == t ? void 0 : t.sku_id) === a.PremiumSubscriptionSKUs.TIER_2 && null == u.default.getPremiumSubscription(!1) && null == d.tutorialExpirationTime && m()
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
                    return v
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
                s = i("374363"),
                a = i("697218"),
                d = i("521012"),
                c = i("719923"),
                m = i("324878"),
                E = i("824986"),
                f = i("694768"),
                T = i("565785"),
                p = i("646718");
            let S = () => {
                    let e = (0, r.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
                        t = (0, u.useIsDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, m.isEligibleTrialSub)(e) && !t
                },
                M = () => {
                    let e = (0, m.useHasActiveTrial)(),
                        t = (0, u.useIsDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        i = (0, r.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
                        s = (0, c.isPremiumExactly)(i, p.PremiumTypes.TIER_2),
                        E = (0, r.useStateFromStores)([d.default], () => d.default.hasFetchedPreviousPremiumTypeSubscription()),
                        f = (0, r.useStateFromStores)([d.default], () => d.default.getPreviousPremiumTypeSubscription()),
                        T = !e && s;
                    n.useEffect(() => {
                        T && !E && !t && (0, o.fetchMostRecentSubscription)()
                    }, [T, E, t]);
                    let S = T && E && null == f;
                    return S && !t
                };

            function _(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = S() && t,
                    {
                        enabled: n
                    } = f.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: i,
                        disable: !i
                    }),
                    l = (0, r.useStateFromStores)([E.default], () => E.default.tutorialExpirationTime),
                    o = new Date().getTime(),
                    u = (0, r.useStateFromStores)([d.default], () => {
                        var e, t, i;
                        return null !== (i = null === (t = d.default.getPremiumSubscription()) || void 0 === t ? void 0 : null === (e = t.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== i ? i : 0
                    }),
                    s = M() && t,
                    a = T.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: s && o - u < 18e5,
                        disable: !s
                    }).enabled && null != l && l > o;
                return n || a
            }
            let P = () => {
                    let e = d.default.getPremiumTypeSubscription(),
                        t = (0, u.isDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, m.isEligibleTrialSub)(e) && !t
                },
                C = () => {
                    let e = (0, m.hasActiveTrial)(),
                        t = (0, u.isDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        i = a.default.getCurrentUser(),
                        n = (0, c.isPremiumExactly)(i, p.PremiumTypes.TIER_2),
                        r = d.default.hasFetchedPreviousPremiumTypeSubscription(),
                        s = d.default.getPreviousPremiumTypeSubscription();
                    return !r && n && !t && (0, o.fetchMostRecentSubscription)(), !t && !e && n && r && null == s
                },
                v = function(e) {
                    var t, i, n;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        l = P() && r,
                        {
                            enabled: o
                        } = f.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !l,
                            autoTrackExposure: l
                        }),
                        u = new Date().getTime(),
                        s = E.default.tutorialExpirationTime,
                        a = null !== (n = null === (i = d.default.getPremiumSubscription()) || void 0 === i ? void 0 : null === (t = i.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== n ? n : 0,
                        c = C() && r,
                        m = T.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !c,
                            autoTrackExposure: c && u - a < 18e5
                        }).enabled && null != s && s > u;
                    return o || m
                },
                I = [];

            function R() {
                return p.PremiumTutorialStepOrder.filter(e => (0, u.isDismissibleContentDismissed)(e))
            }

            function g() {
                return function(e, t) {
                    let i = _("useMemoizedValueSyncedWithDismissibleContents"),
                        l = (0, r.useStateFromStores)([s.default], () => {
                            var e;
                            return null === (e = s.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                        });
                    return n.useMemo(() => i ? e() : t, [i, t, e, l])
                }(R, I)
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
                l = i("125094"),
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
                }, l.ScreenArrowIcon)
        },
        708169: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                FullScreenLayers: function() {
                    return v
                },
                useFullScreenLayerStore: function() {
                    return M
                },
                openFullScreenLayer: function() {
                    return I
                },
                closeFullScreenLayer: function() {
                    return R
                }
            }), i("222007");
            var n, r, l = i("37983"),
                o = i("884691"),
                u = i("995008"),
                s = i.n(u),
                a = i("324134"),
                d = i("308503"),
                c = i("769846"),
                m = i("77078"),
                E = i("485328"),
                f = i("159885"),
                T = i("983782"),
                p = i("275495");
            let S = (0, f.cssValueToNumber)(c.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            (r = n || (n = {}))[r.ENTERING = 1] = "ENTERING", r[r.ENTERED = 2] = "ENTERED", r[r.EXITING = 3] = "EXITING", r[r.EXITED = 4] = "EXITED";
            let M = (0, d.default)(e => ({
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
                            transitionState: null != t ? t.transitionState : 3,
                            closeLayer: () => R(t.key)
                        })]
                    })
                })
            }
            let P = {
                    enter: p.enter,
                    enterActive: p.enterActive,
                    enterDone: p.enterDone,
                    exit: p.exit,
                    exitActive: p.exitActive,
                    exitDone: p.exitDone
                },
                C = {
                    enter: p.enterReducedMotion,
                    enterActive: p.enterActiveReducedMotion,
                    enterDone: p.enterDoneReducedMotion,
                    exit: p.exitReducedMotion,
                    exitActive: p.exitActiveReducedMotion,
                    exitDone: p.exitDoneReducedMotion
                };

            function v() {
                let {
                    reducedMotion: e
                } = o.useContext(m.AccessibilityPreferencesContext), t = e.enabled, i = t ? C : P, n = M(e => e.fullScreenLayers);
                return (0, l.jsx)(a.TransitionGroup, {
                    children: n.map(e => (0, l.jsx)(a.CSSTransition, {
                        classNames: i,
                        timeout: S,
                        onEntered: () => {
                            M.setState({
                                fullScreenLayers: n.map(t => t.key === e.key ? {
                                    ...t,
                                    transitionState: 2
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

            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    {
                        layerKey: i,
                        Layer: n
                    } = t,
                    r = null != i ? i : s();
                return M.setState(t => ({
                    fullScreenLayers: [...t.fullScreenLayers, {
                        key: r,
                        transitionState: 1,
                        LayerComponent: null != n ? n : T.default,
                        render: e
                    }]
                })), r
            }

            function R(e) {
                M.setState(t => ({
                    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
                }))
            }
        }
    }
]);
//# sourceMappingURL=b6a1e409cff0050bceac.js.map