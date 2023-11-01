(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["29870"], {
        217145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalUserEnabled: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-07_iframe_modal",
                label: "iFrame Modal",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrameModal",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l() {
                return r.getCurrentConfig({
                    location: "5c0a70_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        429682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalForGuildEnabled: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-08_iframe_modal_guild",
                label: "iFrame Modal guild experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrame Modal Guild",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                return r.getCurrentConfig({
                    guildId: null != e ? e : "",
                    location: "2d360b_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        988878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("217145"),
                r = n("429682");

            function l(e) {
                return (0, i.isIFrameModalUserEnabled)() || (0, r.isIFrameModalForGuildEnabled)(e)
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("446674"),
                a = n("913144"),
                u = n("798609"),
                o = n("42203"),
                s = n("3765");
            let d = {},
                E = {},
                c = {};

            function m(e) {
                delete d[e];
                let t = c[e];
                null != t && delete E[t], delete c[e]
            }
            class f extends l.default.Store {
                getInteraction(e) {
                    let t = E[e.id];
                    return null != t ? d[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(d)) {
                        let i = c[t];
                        null != i && (e[i] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = E[e];
                    return (null == n || null == d[n] || d[n].state === s.InteractionState.FAILED) && (null == d[t] || d[t].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return r
                }
                getIFrameModalKey() {
                    return i
                }
            }
            f.displayName = "InteractionStore";
            var T = new f(a.default, {
                LOGOUT: function() {
                    d = {}, E = {}, c = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: i,
                        onCreate: r,
                        onCancel: l,
                        onSuccess: a,
                        onFailure: u
                    } = e;
                    null != n && (E[n] = t, c[t] = n), d[t] = {
                        state: s.InteractionState.QUEUED,
                        data: i,
                        onCreate: r,
                        onCancel: l,
                        onSuccess: a,
                        onFailure: u
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: i
                    } = e;
                    if (null == n) return !1;
                    let r = d[n];
                    if (null == r || r.state !== s.InteractionState.QUEUED) return !1;
                    r.state = s.InteractionState.CREATED, null === (t = r.onCreate) || void 0 === t || t.call(r, i)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let i = d[n];
                    if (null == i) return !1;
                    null === (t = i.onSuccess) || void 0 === t || t.call(i), m(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: i,
                        errorMessage: r
                    } = e;
                    if (null == n) return !1;
                    let l = d[n];
                    if (null == l) return !1;
                    null === (t = l.onFailure) || void 0 === t || t.call(l, i, r), l.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? m(n) : d[n] = {
                        ...l,
                        state: s.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: r
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = d[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), m(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = o.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(d)) t.state === s.InteractionState.FAILED && m(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    r = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, r = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    i = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.QUEUED = 0] = "QUEUED", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED"
        },
        824986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumTutorialTooltips: function() {
                    return l
                },
                default: function() {
                    return T
                }
            });
            var i, r, l, a = n("446674"),
                u = n("913144"),
                o = n("521012"),
                s = n("565785"),
                d = n("646718");
            (i = l || (l = {})).FILE_UPLOAD = "file_upload", i.STICKER_PICKER = "sticker_picker", i.EMOJI_PICKER = "emoji_picker", i.BOOSTING_FLOW = "boosting_flow";
            let E = {
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
                E = {
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
                e.setDate(e.getDate() + 14), E.tutorialExpirationTime = e.getTime()
            }
            class f extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (E = e), E.isPersistentHelperHidden = !1, E.canPlayWowMoment = !1, E.isFetchingWowMomentMedia = !1, E.wowMomentWumpusMediaUrl = null, E.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return E
                }
                get isPersistentCoachmarkCollapsed() {
                    return E.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(e) {
                    return null == E.hasFlowStartEventBeenEmitted[e] && (E.hasFlowStartEventBeenEmitted[e] = !1), E.hasFlowStartEventBeenEmitted[e]
                }
                get canPlayWowMoment() {
                    return E.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return E.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return E.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return E.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return E.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return E.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return E.tutorialExpirationTime
                }
            }
            f.displayName = "PremiumTutorialStore", f.persistKey = "PremiumTutorialStore", f.migrations = [e => ({
                ...e,
                hasFlowStartEventBeenEmitted: null !== (r = e.hasFlowStartEventBeenEmitted) && void 0 !== r ? r : {}
            })];
            var T = new f(u.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    E.isPersistentCoachmarkCollapsed = !E.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: n
                    } = e;
                    E.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    c()
                },
                RESET_PREMIUM_TUTORIAL_STORE: c,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    E.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    let {
                        value: t
                    } = e;
                    E.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    E.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t,
                        helperMedia: n
                    } = e;
                    E.wowMomentWumpusMediaUrl = t, E.wowMomentHelperMediaUrl = n, E.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    let {
                        value: t
                    } = e;
                    E.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && null != t.items.find(e => d.PREMIUM_TIER_2_PLANS.has(e.plan_id)) && m()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        entitlement: t
                    } = e, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && (null == t ? void 0 : t.sku_id) === d.PremiumSubscriptionSKUs.TIER_2 && null == o.default.getPremiumSubscription(!1) && null == E.tutorialExpirationTime && m()
                }
            })
        },
        694768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
        565785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
        921228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsPremiumTutorialEnabled: function() {
                    return p
                },
                isPremiumTutorialEnabled: function() {
                    return P
                },
                useAllDismissedPremiumTutorialSteps: function() {
                    return v
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("151426"),
                a = n("850068"),
                u = n("10641"),
                o = n("374363"),
                s = n("697218"),
                d = n("521012"),
                E = n("719923"),
                c = n("324878"),
                m = n("824986"),
                f = n("694768"),
                T = n("565785"),
                M = n("646718");
            let _ = () => {
                    let e = (0, r.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
                        t = (0, u.useIsDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, c.isEligibleTrialSub)(e) && !t
                },
                I = () => {
                    let e = (0, c.useHasActiveTrial)(),
                        t = (0, u.useIsDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
                        o = (0, E.isPremiumExactly)(n, M.PremiumTypes.TIER_2),
                        m = (0, r.useStateFromStores)([d.default], () => d.default.hasFetchedPreviousPremiumTypeSubscription()),
                        f = (0, r.useStateFromStores)([d.default], () => d.default.getPreviousPremiumTypeSubscription()),
                        T = !e && o;
                    i.useEffect(() => {
                        T && !m && !t && (0, a.fetchMostRecentSubscription)()
                    }, [T, m, t]);
                    let _ = T && m && null == f;
                    return _ && !t
                };

            function p(e) {
                var t;
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = _() && n,
                    {
                        enabled: l
                    } = f.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: i,
                        disable: !i
                    }),
                    a = (0, r.useStateFromStores)([m.default], () => m.default.tutorialExpirationTime),
                    u = new Date().getTime(),
                    o = (0, r.useStateFromStores)([d.default], () => {
                        var e, n;
                        return null !== (t = null === (n = d.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (e = n.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== t ? t : 0
                    }),
                    s = I() && n,
                    E = T.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: s && u - o < 18e5,
                        disable: !s
                    }).enabled && null != a && a > u;
                return l || E
            }
            let S = () => {
                    let e = d.default.getPremiumTypeSubscription(),
                        t = (0, u.isDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, c.isEligibleTrialSub)(e) && !t
                },
                C = () => {
                    let e = (0, c.hasActiveTrial)(),
                        t = (0, u.isDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = s.default.getCurrentUser(),
                        i = (0, E.isPremiumExactly)(n, M.PremiumTypes.TIER_2),
                        r = d.default.hasFetchedPreviousPremiumTypeSubscription(),
                        o = d.default.getPreviousPremiumTypeSubscription();
                    return !r && i && !t && (0, a.fetchMostRecentSubscription)(), !t && !e && i && r && null == o
                },
                P = function(e) {
                    var t, n, i;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        l = S() && r,
                        {
                            enabled: a
                        } = f.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !l,
                            autoTrackExposure: l
                        }),
                        u = new Date().getTime(),
                        o = m.default.tutorialExpirationTime,
                        s = null !== (i = null === (n = d.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (t = n.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== i ? i : 0,
                        E = C() && r,
                        c = T.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !E,
                            autoTrackExposure: E && u - s < 18e5
                        }).enabled && null != o && o > u;
                    return a || c
                },
                g = [];

            function b() {
                return M.PremiumTutorialStepOrder.filter(e => (0, u.isDismissibleContentDismissed)(e))
            }

            function v() {
                return function(e, t) {
                    let n = p("useMemoizedValueSyncedWithDismissibleContents"),
                        l = (0, r.useStateFromStores)([o.default], () => {
                            var e;
                            return null === (e = o.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                        });
                    return i.useMemo(() => n ? e() : t, [n, t, e, l])
                }(b, g)
            }
        }
    }
]);
//# sourceMappingURL=b8afb0fb11d2adb75c57.js.map