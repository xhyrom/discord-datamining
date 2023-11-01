(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["95121"], {
        609708: function(e, t, r) {
            "use strict";
            e.exports = r.p + "4a1620da08f098314241.svg"
        },
        602291: function(e, t, r) {
            "use strict";
            e.exports = r.p + "ac64a4b16416154663f7.svg"
        },
        939784: function(e, t, r) {
            "use strict";
            e.exports = r.p + "3af18e66cab696affd74.svg"
        },
        769015: function(e, t, r) {
            "use strict";
            e.exports = r.p + "789cbb1aaa8190be1c18.svg"
        },
        481927: function(e, t, r) {
            "use strict";
            e.exports = r.p + "75ad54f57ebd84babdf2.svg"
        },
        174727: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("775560"),
                i = r("888400"),
                o = r("149638");

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = (0, n.useForceUpdate)();
                return (0, o.default)(() => {
                    l || s(), null != r && r()
                }, l ? null : t), (0, i.diffAsUnits)(Date.now(), e)
            }
        },
        149638: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("884691"),
                i = r("627445"),
                o = r.n(i);

            function l(e, t) {
                let r = (0, n.useRef)(e);
                (0, n.useEffect)(() => {
                    r.current = e
                }, [e]), (0, n.useEffect)(() => {
                    if (null === t) return;
                    let e = setInterval(function() {
                        o(null != r.current, "Missing callback"), r.current()
                    }, t);
                    return () => clearInterval(e)
                }, [t])
            }
        },
        32531: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                updateBackgroundGradientPreset: function() {
                    return i
                },
                resetBackgroundGradientPreset: function() {
                    return o
                },
                updateBackgroundGradientAngle: function() {
                    return l
                },
                resetBackgroundGradientAngle: function() {
                    return s
                },
                openEditor: function() {
                    return a
                },
                closeEditor: function() {
                    return u
                },
                resetPreviewClientTheme: function() {
                    return d
                }
            });
            var n = r("913144");
            let i = e => {
                    n.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: e
                    })
                },
                o = () => {
                    n.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: null
                    })
                },
                l = e => {
                    n.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_ANGLE",
                        angle: e
                    })
                },
                s = () => {
                    n.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_ANGLE",
                        angle: null
                    })
                },
                a = () => {
                    n.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_OPEN"
                    })
                },
                u = () => {
                    n.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_CLOSE"
                    })
                },
                d = () => {
                    n.default.dispatch({
                        type: "RESET_PREVIEW_CLIENT_THEME"
                    })
                }
        },
        182650: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useIsInPremiumOfferExperience: function() {
                    return d
                },
                useHasDiscountApplied: function() {
                    return c
                }
            });
            var n = r("866227"),
                i = r.n(n),
                o = r("446674"),
                l = r("521012"),
                s = r("324878"),
                a = r("154889"),
                u = r("917247");

            function d() {
                let e = (0, u.usePremiumTrialOffer)(),
                    t = (0, s.useHasActiveTrial)(),
                    r = (0, a.usePremiumDiscountOffer)(),
                    n = c();
                return null != e || t || null != r || n
            }
            let c = () => {
                var e;
                let t = (0, o.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
                    r = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.nitro_likelihood_discount_expires_at;
                return null != r && i(Date.now()) <= i(r)
            }
        },
        982457: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("872717"),
                i = r("913144"),
                o = r("49111"),
                l = {
                    async fetchUserTrialOffer() {
                        try {
                            let {
                                body: e
                            } = await n.default.get({
                                url: o.Endpoints.USER_TRIAL_OFFER,
                                oldFormErrors: !0
                            });
                            i.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS",
                                userTrialOffer: e
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS"
                            })
                        }
                    },
                    async acknowledgeUserTrialOffer(e) {
                        if (null == e.expires_at) try {
                            let {
                                body: t
                            } = await n.default.post({
                                url: o.Endpoints.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id)
                            });
                            i.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                                userTrialOffer: t
                            })
                        } catch (e) {}
                    }
                }
        },
        433947: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                BOGOAnnouncementModalExperiment: function() {
                    return i
                }
            });
            var n = r("862205");
            let i = (0, n.createExperiment)({
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
        705337: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("862205");
            let i = (0, n.createExperiment)({
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
            var o = i
        },
        935566: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                BogoPromotionExperiment: function() {
                    return i
                },
                isBogoPromotionExperimentEnabled: function() {
                    return o
                },
                default: function() {
                    return l
                }
            });
            var n = r("862205");
            let i = (0, n.createExperiment)({
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
                o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return i.getCurrentConfig({
                        location: "489551_2"
                    }, {
                        autoTrackExposure: e
                    })
                };
            var l = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return i.useExperiment({
                    location: "489551_1"
                }, {
                    autoTrackExposure: e
                })
            }
        },
        772465: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                PromotionPreviewExperiment: function() {
                    return i
                }
            });
            var n = r("862205");
            let i = (0, n.createExperiment)({
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
        44678: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getPromotionImageURL: function() {
                    return _
                },
                outboundPromotionFromServer: function() {
                    return m
                },
                bogoPromotionFromServer: function() {
                    return E
                },
                fetchClaimedOutboundPromotionCodes: function() {
                    return f
                },
                claimOutboundPromotion: function() {
                    return I
                },
                getOutboundPromotionRedemptionUrl: function() {
                    return P
                },
                shouldShowOutboundPromotionNotice: function() {
                    return R
                },
                shouldShowOutboundPromotionOnPlatform: function() {
                    return p
                },
                isOutboundPromotionRedeemableByTrialUsers: function() {
                    return O
                },
                isTrialUserEligibleToSeeOutboundPromotion: function() {
                    return M
                }
            });
            var n = r("872717"),
                i = r("819855"),
                o = r("915639"),
                l = r("521012"),
                s = r("568734"),
                a = r("773336"),
                u = r("78345"),
                d = r("807345"),
                c = r("49111");

            function _(e, t) {
                let r = (0, i.isThemeDark)(t) ? "logo-dark" : "logo-light",
                    n = window.GLOBAL_ENV.CDN_HOST,
                    o = "?size=256";
                return null != n ? "".concat(location.protocol, "//").concat(n, "/promotions/").concat(e, "/").concat(r).concat(o) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(r).concat(o)
            }

            function m(e) {
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

            function E(e) {
                return {
                    id: e.id,
                    startDate: e.start_date,
                    endDate: e.end_date
                }
            }

            function T(e) {
                return {
                    code: e.code,
                    userId: e.user_id,
                    claimedAt: e.claimed_at,
                    promotion: m(e.promotion)
                }
            }
            async function f() {
                let e = await n.default.get({
                        url: c.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
                        query: {
                            locale: o.default.locale
                        },
                        oldFormErrors: !0
                    }),
                    t = e.body;
                return t.map(T)
            }
            async function I(e) {
                let t = await n.default.post({
                        url: c.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e)
                    }),
                    r = t.body;
                return T(r)
            }

            function P(e, t) {
                return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
            }

            function R() {
                let e = d.default.lastSeenOutboundPromotionStartDate,
                    t = d.default.outboundPromotions,
                    r = d.default.consumedInboundPromotionId,
                    n = t.filter(e => {
                        let {
                            id: t,
                            flags: n
                        } = e;
                        return t !== r && !(0, s.hasFlag)(n, u.PromotionFlags.SUPPRESS_NOTIFICATION)
                    }),
                    i = null == e ? n : n.filter(t => {
                        let {
                            startDate: r
                        } = t;
                        return new Date(r) > new Date(e)
                    }),
                    o = d.default.lastDismissedOutboundPromotionStartDate,
                    a = l.default.getPremiumTypeSubscription(),
                    c = (null == a ? void 0 : a.trialId) != null,
                    _ = c ? i.filter(e => O(e)) : i;
                return 0 !== _.length && (null == o || _.some(e => {
                    let {
                        startDate: t
                    } = e;
                    return new Date(t) > new Date(o)
                }))
            }

            function p(e) {
                return !(0, a.isIOS)() || !(0, s.hasFlag)(e.flags, u.PromotionFlags.IS_BLOCKED_IOS)
            }

            function O(e) {
                return (0, s.hasFlag)(e.flags, u.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
            }

            function M(e, t) {
                return null != t[e.id] || O(e)
            }
        },
        538620: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchActiveOutboundPromotions: function() {
                    return E
                },
                fetchActiveBogoPromotion: function() {
                    return T
                },
                default: function() {
                    return f
                }
            });
            var n = r("872717"),
                i = r("750028"),
                o = r("913144"),
                l = r("251472"),
                s = r("915639"),
                a = r("872173"),
                u = r("772465"),
                d = r("44678"),
                c = r("807345"),
                _ = r("646718"),
                m = r("49111");
            async function E() {
                if (!c.default.isFetchingActiveOutboundPromotions) try {
                    o.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH"
                    });
                    let t = u.PromotionPreviewExperiment.getCurrentConfig({
                            location: "5731cc_1"
                        }, {
                            autoTrackExposure: !1
                        }).previewEnabled ? m.Endpoints.OUTBOUND_PROMOTIONS_PREVIEW : m.Endpoints.OUTBOUND_PROMOTIONS,
                        r = await n.default.get({
                            url: t,
                            query: {
                                locale: s.default.locale
                            },
                            oldFormErrors: !0
                        }),
                        i = r.body,
                        a = c.default.consumedInboundPromotionId;
                    if (!c.default.hasFetchedConsumedInboundPromotionId) {
                        var e;
                        let t = await (0, l.fetchUserEntitlementsForApplication)(_.PREMIUM_SUBSCRIPTION_APPLICATION, !1),
                            r = t.find(e => null != e.promotion_id && !0 === e.consumed);
                        a = null !== (e = null == r ? void 0 : r.promotion_id) && void 0 !== e ? e : null
                    }
                    o.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                        activeOutboundPromotions: i.map(e => (0, d.outboundPromotionFromServer)(e)),
                        consumedInboundPromotionId: a
                    })
                } catch (e) {
                    o.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL"
                    })
                }
            }
            async function T() {
                if (!c.default.isFetchingActiveBogoPromotion) try {
                    o.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH"
                    });
                    let e = await n.default.get({
                            url: m.Endpoints.BOGO_PROMOTIONS,
                            query: {
                                locale: s.default.locale
                            }
                        }),
                        t = e.body;
                    o.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                        activePromotion: (0, d.bogoPromotionFromServer)(t)
                    })
                } catch (e) {
                    o.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
                    })
                }
            }
            var f = {
                fetchActiveOutboundPromotions: E,
                dismissOutboundPromotionNotice: function() {
                    o.default.dispatch({
                        type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
                    });
                    let e = c.default.lastDismissedOutboundPromotionStartDate;
                    null != e && a.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
                        t.lastDismissedOutboundPromotionStartDate = i.StringValue.create({
                            value: e
                        })
                    }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
                },
                markOutboundPromotionsSeen() {
                    o.default.dispatch({
                        type: "OUTBOUND_PROMOTIONS_SEEN"
                    })
                },
                fetchActiveBogoPromotion: T
            }
        },
        694540: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useOutboundPromotions: function() {
                    return E
                },
                useUnseenOutboundPromotions: function() {
                    return T
                },
                useBogoPromotion: function() {
                    return f
                }
            });
            var n = r("884691"),
                i = r("446674"),
                o = r("913144"),
                l = r("697218"),
                s = r("719923"),
                a = r("324878"),
                u = r("44678"),
                d = r("538620"),
                c = r("807345"),
                _ = r("646718");

            function m() {
                let e = (0, i.useStateFromStoresArray)([c.default], () => c.default.outboundPromotions),
                    t = (0, i.useStateFromStores)([c.default], () => c.default.consumedInboundPromotionId),
                    r = n.useMemo(() => e.filter(e => {
                        let {
                            id: r
                        } = e;
                        return r !== t
                    }), [e, t]);
                return r
            }

            function E() {
                let e = (0, i.useStateFromStores)([c.default], () => c.default.lastFetchedActivePromotions),
                    t = m(),
                    r = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser()),
                    E = (0, a.useHasActiveTrial)(),
                    [T, f] = n.useState(!1),
                    [I, P] = n.useState([]);
                n.useEffect(() => {
                    null != e && o.default.wait(() => d.default.markOutboundPromotionsSeen())
                }, [e]);
                let R = n.useCallback(e => {
                        P(t => t.some(t => {
                            let {
                                promotion: r
                            } = t;
                            return r.id === e.promotion.id
                        }) ? t : [...t, e])
                    }, []),
                    p = (0, s.isPremiumExactly)(r, _.PremiumTypes.TIER_2);
                n.useEffect(() => {
                    o.default.wait(() => {
                        p && null == e && d.default.fetchActiveOutboundPromotions()
                    })
                }, [e, p]), n.useEffect(() => {
                    o.default.wait(() => {
                        (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
                            P(e), f(!0)
                        }).catch(() => {
                            P([]), f(!0)
                        })
                    })
                }, []);
                let O = {};
                for (let {
                        code: e,
                        promotion: t
                    }
                    of I) O[t.id] = e;
                let M = new Set(t.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    })),
                    S = I.filter(e => {
                        let {
                            promotion: t
                        } = e;
                        return !M.has(t.id)
                    }),
                    C = T && (!p || null != e);
                return {
                    promotionsLoaded: C,
                    activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!E || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, O))),
                    claimedEndedOutboundPromotions: S.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
                    claimedOutboundPromotionCodeMap: O,
                    addClaimedOutboundPromotionCode: R
                }
            }

            function T() {
                let e = (0, i.useStateFromStores)([c.default], () => c.default.lastSeenOutboundPromotionStartDate),
                    t = (0, a.useHasActiveTrial)(),
                    r = m(),
                    o = n.useMemo(() => {
                        if (null == e) return t ? r.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : r;
                        let n = r.filter(t => {
                            let {
                                startDate: r
                            } = t;
                            return new Date(r) > new Date(e)
                        });
                        return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n
                    }, [r, e, t]);
                return o.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
            }

            function f() {
                let e = (0, i.useStateFromStores)([c.default], () => c.default.bogoPromotion);
                return {
                    promotion: e
                }
            }
        },
        807345: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return I
                }
            });
            var n = r("446674"),
                i = r("913144"),
                o = r("374363");

            function l() {
                return {
                    hasFetchedConsumedInboundPromotionId: !1,
                    consumedInboundPromotionId: null,
                    lastSeenOutboundPromotionStartDate: null,
                    bogoPromotion: null
                }
            }
            let s = l(),
                a = !1,
                u = null,
                d = !1,
                c = null,
                _ = [],
                m = null;

            function E() {
                let e = null;
                for (let t of _)(null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
                return e
            }

            function T() {
                var e, t, r;
                m = null !== (r = null === (t = o.default.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== r ? r : null
            }
            class f extends n.default.PersistedStore {
                initialize(e) {
                    null != e && (s = e), this.waitFor(o.default), this.syncWith([o.default], T)
                }
                get outboundPromotions() {
                    return _
                }
                get lastSeenOutboundPromotionStartDate() {
                    return s.lastSeenOutboundPromotionStartDate
                }
                get lastDismissedOutboundPromotionStartDate() {
                    return m
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
                    return a
                }
                get lastFetchedActiveBogoPromotion() {
                    return u
                }
                getState() {
                    return s
                }
            }
            f.displayName = "PromotionsStore", f.persistKey = "PromotionsPersistedStore";
            var I = new f(i.default, {
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        activeOutboundPromotions: t,
                        consumedInboundPromotionId: r
                    } = e;
                    _ = t, c = Date.now(), d = !1, !s.hasFetchedConsumedInboundPromotionId && (s.hasFetchedConsumedInboundPromotionId = !0, s.consumedInboundPromotionId = r)
                },
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function() {
                    d = !0
                },
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function() {
                    _ = [], d = !1
                },
                ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function(e) {
                    let {
                        activePromotion: t
                    } = e;
                    s.bogoPromotion = t, u = Date.now(), a = !1
                },
                ACTIVE_BOGO_PROMOTION_FETCH: function() {
                    a = !0
                },
                ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function() {
                    s.bogoPromotion = null, a = !1
                },
                OUTBOUND_PROMOTION_NOTICE_DISMISS: function() {
                    if (0 === _.length) return !1;
                    let e = E();
                    null != e && (m = e)
                },
                OUTBOUND_PROMOTIONS_SEEN: function() {
                    if (0 === _.length) return !1;
                    let e = E();
                    null != e && (m = e, s.lastSeenOutboundPromotionStartDate = e)
                },
                LOGOUT: function() {
                    s = l(), d = !1, c = null, a = !1, u = null, _ = []
                }
            })
        },
        641078: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isUserIneligibleBasedOnCurrentOrPreviousSubs: function() {
                    return g
                },
                useIsEligibleForBogoPromotion: function() {
                    return N
                },
                maybeFetchActiveBogoPromotion: function() {
                    return h
                },
                isEligibleForBOGOAnnouncementModal: function() {
                    return A
                },
                getBOGOPillCopy: function() {
                    return b
                }
            });
            var n = r("866227"),
                i = r.n(n),
                o = r("65597"),
                l = r("151426"),
                s = r("850068"),
                a = r("174727"),
                u = r("619935"),
                d = r("10641"),
                c = r("915639"),
                _ = r("697218"),
                m = r("521012"),
                E = r("340412"),
                T = r("719923"),
                f = r("982457"),
                I = r("433947"),
                P = r("705337"),
                R = r("935566"),
                p = r("917247"),
                O = r("538620"),
                M = r("694540"),
                S = r("807345"),
                C = r("646718"),
                L = r("49111"),
                U = r("782340");

            function g(e) {
                var t, r, n;
                let {
                    experimentEnabled: o,
                    premiumSubscription: l,
                    mostRecentSubscription: s
                } = e, a = !1, u = !1;
                if (null != s && s.status === L.SubscriptionStatusTypes.ENDED) {
                    let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i(s.metadata.ended_at) : null,
                        n = null === (r = (0, T.getPremiumPlanItem)(s)) || void 0 === r ? void 0 : r.planId,
                        o = null != n && T.default.getPremiumType(n) === C.PremiumTypes.TIER_2;
                    u = null != e && o && e.add(10, "days").isAfter(i())
                }
                if (null != l) {
                    let e = null === (n = (0, T.getPremiumPlanItem)(l)) || void 0 === n ? void 0 : n.planId,
                        t = null != e && T.default.getPremiumType(e) === C.PremiumTypes.TIER_2,
                        r = _.default.getCurrentUser(),
                        i = (null == l ? void 0 : l.trialId) != null && T.default.isPremiumExactly(r, C.PremiumTypes.TIER_0);
                    a = t || i
                }
                return !o || a || u
            }

            function N() {
                var e;
                let {
                    paymentsBlocked: t
                } = u.default.useExperiment({
                    location: "153d31_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    promotion: r
                } = (0, M.useBogoPromotion)(), {
                    enabled: n
                } = (0, R.default)(), {
                    mostRecentSubscription: i,
                    premiumSubscription: l
                } = (0, o.useStateFromStoresObject)([m.default], () => ({
                    mostRecentSubscription: m.default.getMostRecentPremiumTypeSubscription(),
                    premiumSubscription: m.default.getPremiumTypeSubscription()
                })), s = (0, p.usePremiumTrialOffer)(), d = new Date(null !== (e = null == r ? void 0 : r.endDate) && void 0 !== e ? e : 0).valueOf();
                (0, a.default)(d, 1e3, void 0, d + 2e3 < Date.now());
                let c = !g({
                        experimentEnabled: n,
                        premiumSubscription: l,
                        mostRecentSubscription: i
                    }),
                    _ = c && null == s && null != r && !t,
                    E = Date.now(),
                    {
                        enabled: T
                    } = P.default.useExperiment({
                        location: "153d31_2"
                    }, {
                        autoTrackExposure: _,
                        disable: !_
                    });
                return !(E > d) && T
            }
            async function x() {
                var e;
                let t = _.default.getCurrentUser(),
                    r = !(null == t ? void 0 : t.isClaimed()),
                    {
                        paymentsBlocked: n
                    } = u.default.getCurrentConfig({
                        location: "153d31_3"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: i
                    } = (0, R.isBogoPromotionExperimentEnabled)(),
                    {
                        enabled: o
                    } = P.default.getCurrentConfig({
                        location: "153d31_4"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: l
                    } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_5"
                    }, {
                        autoTrackExposure: !1
                    });
                if (r || n || !i || !l && !o) return !1;
                if (E.default.shouldFetchOffer() && await f.default.fetchUserTrialOffer(), E.default.hasFetchedOffer() && E.default.hasAnyUnexpiredOffer()) return !1;
                !m.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(C.PremiumSubscriptionSKUs.TIER_2)) && await (0, s.fetchMostRecentSubscription)(), !m.default.hasFetchedSubscriptions() && await (0, s.fetchSubscriptions)();
                let a = m.default.getMostRecentPremiumTypeSubscription(),
                    d = m.default.getPremiumTypeSubscription();
                return !g({
                    experimentEnabled: i,
                    premiumSubscription: d,
                    mostRecentSubscription: a
                })
            }
            async function h() {
                let e = await x();
                if (!e) return;
                let t = S.default.bogoPromotion;
                if (null != t) {
                    let e = new Date(t.endDate).valueOf();
                    if (e >= Date.now()) return
                }
                await (0, O.fetchActiveBogoPromotion)()
            }
            async function A() {
                let e = S.default.bogoPromotion,
                    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
                    r = (0, d.isDismissibleContentDismissed)(l.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
                    n = await x(),
                    {
                        enabled: i
                    } = R.BogoPromotionExperiment.getCurrentConfig({
                        location: "153d31_6"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: o
                    } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_7"
                    }, {
                        autoTrackExposure: t && i && !r && n
                    });
                return t && o && i && !r && n
            }

            function b() {
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
                        return U.default.Messages.NITRO_BADGE_TEXT;
                    default:
                        return U.default.Messages.BOGO_PILL
                }
            }
        },
        956597: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getOfferEndsText: function() {
                    return D
                },
                PremiumTrialGradientBadge: function() {
                    return y
                },
                default: function() {
                    return H
                }
            });
            var n = r("37983"),
                i = r("884691"),
                o = r("414456"),
                l = r.n(o),
                s = r("627445"),
                a = r.n(s),
                u = r("866227"),
                d = r.n(u),
                c = r("446674"),
                _ = r("551042"),
                m = r("819855"),
                E = r("77078"),
                T = r("841098"),
                f = r("206230"),
                I = r("32531"),
                P = r("393414"),
                R = r("945330"),
                p = r("41250"),
                O = r("379863"),
                M = r("216422"),
                S = r("719923"),
                C = r("286235"),
                L = r("626301"),
                U = r("917247"),
                g = r("635956"),
                N = r("400307"),
                x = r("646718"),
                h = r("49111"),
                A = r("782340"),
                b = r("670714"),
                v = r("481927");

            function D(e) {
                if (null == e) return null;
                let t = d(e),
                    r = t.diff(d(), "h");
                if (r > 24) {
                    let e = t.diff(d(), "d");
                    return A.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
                        numDays: e
                    })
                }
                if (r > 1) return A.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
                    numHours: r
                });
                let n = t.diff(d(), "minutes");
                return A.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
                    numMinutes: n
                })
            }

            function F(e) {
                var t, r, i;
                let {
                    className: o,
                    children: s,
                    withBottomMargin: a,
                    discountOffer: u,
                    trialOffer: d
                } = e, c = null !== (t = null == d ? void 0 : d.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, _ = null == d ? void 0 : d.subscription_trial, m = null !== (i = null !== (r = e.subscriptionTier) && void 0 !== r ? r : null == _ ? void 0 : _.sku_id) && void 0 !== i ? i : x.PremiumSubscriptionSKUs.TIER_2;
                return (0, n.jsxs)("div", {
                    className: l(o, b.gradientUpsellWrapper, {
                        [b.gradientUpsellWrapperTier0]: m === x.PremiumSubscriptionSKUs.TIER_0,
                        [b.gradientUpsellWrapperTier2]: m === x.PremiumSubscriptionSKUs.TIER_2,
                        [b.gradientUpsellWrapperWithBottomMargin]: a
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: b.logo,
                        children: [(0, n.jsx)(M.default, {
                            className: b.logoIcon
                        }), m === x.PremiumSubscriptionSKUs.TIER_0 && (0, n.jsx)(O.default, {
                            className: b.logoWordmark
                        }), m === x.PremiumSubscriptionSKUs.TIER_2 && (0, n.jsx)(p.default, {
                            className: b.logoWordmark
                        })]
                    }), (0, n.jsx)(E.Text, {
                        variant: "text-md/medium",
                        className: b.copy,
                        color: "none",
                        children: s
                    }), (0, n.jsx)(N.PremiumPillWithSparkles, {
                        text: null != u ? A.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: u.discount.amount
                        }) : A.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        colorOptions: m === x.PremiumSubscriptionSKUs.TIER_0 ? N.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : N.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
                    }), (0, n.jsx)(E.Text, {
                        variant: "eyebrow",
                        className: b.countdownText,
                        children: D(c)
                    })]
                })
            }

            function j(e) {
                var t, r;
                let {
                    className: o,
                    onClose: l,
                    subscriptionTier: s,
                    analyticsLocationObject: a,
                    trialOffer: u,
                    discountOffer: d
                } = e, [c, _] = i.useState(!1), m = null != d ? A.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                    percent: d.discount.amount
                }) : (0, S.formatTrialCtaIntervalDuration)({
                    intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
                    intervalCount: null == u ? void 0 : null === (r = u.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                });
                return (0, n.jsx)(g.default, {
                    className: o,
                    subscriptionTier: s,
                    trialId: null == u ? void 0 : u.trial_id,
                    submitting: c,
                    premiumModalAnalyticsLocation: a,
                    size: E.Button.Sizes.MEDIUM,
                    color: E.Button.Colors.GREEN,
                    onClick: () => {
                        _(!0)
                    },
                    onSubscribeModalClose: e => {
                        if (_(!1), e) null == l || l()
                    },
                    buttonText: m
                })
            }

            function y(e) {
                var t, r;
                let i = null === (t = (0, U.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
                    o = null !== (r = null == i ? void 0 : i.sku_id) && void 0 !== r ? r : x.PremiumSubscriptionSKUs.TIER_2;
                return (0, n.jsx)(E.Text, {
                    variant: "text-xs/bold",
                    className: l(b.trialBadge, e.className, {
                        [b.trialBadgeGradientTier0]: o === x.PremiumSubscriptionSKUs.TIER_0,
                        [b.trialBadgeGradientTier2]: o === x.PremiumSubscriptionSKUs.TIER_2
                    }),
                    color: "none",
                    children: (0, S.formatTrialOfferIntervalDuration)({
                        intervalType: null == i ? void 0 : i.interval,
                        intervalCount: null == i ? void 0 : i.interval_count
                    })
                })
            }

            function B(e) {
                let {
                    subscriptionTier: t,
                    onClose: r,
                    analyticsLocationObject: i,
                    trialOffer: o,
                    discountOffer: l
                } = e;
                return (0, n.jsxs)("div", {
                    className: b.footer,
                    children: [(0, n.jsx)(E.Button, {
                        onClick: r,
                        size: E.Button.Sizes.SMALL,
                        look: E.ButtonLooks.BLANK,
                        className: b.cancelButton,
                        children: A.default.Messages.CLOSE
                    }), (0, n.jsx)(j, {
                        className: b.subscribeButton,
                        subscriptionTier: t,
                        analyticsLocationObject: i,
                        onClose: r,
                        discountOffer: l,
                        trialOffer: o
                    })]
                })
            }

            function G(e) {
                let {
                    onClose: t,
                    analyticsLocationObject: r
                } = e, i = (0, U.usePremiumTrialOffer)();
                return (0, n.jsxs)("div", {
                    className: b.tryOutUpsellContainer,
                    children: [(0, n.jsx)(N.PremiumPillWithSparkles, {
                        className: b.topRimPill,
                        text: A.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                        colorOptions: N.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                    }), (0, n.jsx)(E.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-normal",
                        children: A.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
                            onClick: L.navigateToPremiumMarketingPage
                        })
                    }), (0, n.jsx)(j, {
                        className: b.subscribeButtonWide,
                        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocationObject: r,
                        onClose: t
                    }), (0, n.jsx)(E.Text, {
                        variant: "eyebrow",
                        className: b.countdownTextInSetting,
                        children: D(null == i ? void 0 : i.expires_at)
                    })]
                })
            }

            function w(e) {
                let {
                    headingText: t,
                    context: r,
                    children: i,
                    trialOffer: o,
                    discountOffer: l
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(E.Heading, {
                        className: b.header,
                        variant: "heading-xl/semibold",
                        children: t
                    }), null != r && (0, n.jsx)(E.Text, {
                        className: b.context,
                        variant: "text-md/normal",
                        children: r
                    }), (0, n.jsx)(F, {
                        trialOffer: o,
                        discountOffer: l,
                        children: i
                    })]
                })
            }

            function H(e) {
                let {
                    headingText: t,
                    context: i,
                    children: o,
                    onClose: s,
                    type: u,
                    subscriptionTier: d,
                    analyticsLocationObject: p,
                    trialOffer: O,
                    discountOffer: M
                } = e, L = (0, c.useStateFromStores)([f.default], () => f.default.useReducedMotion), U = (0, T.default)();
                switch (u) {
                    case x.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(E.Clickable, {
                                className: b.upsellClose,
                                onClick: s,
                                children: (0, n.jsx)(R.default, {})
                            }), (0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)("img", {
                                    className: b.upsellImage,
                                    src: v,
                                    alt: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, n.jsx)(E.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: A.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                                }), (0, n.jsx)(F, {
                                    trialOffer: O,
                                    discountOffer: M,
                                    children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, S.getDisplayNameFromSku)(d),
                                        onClick: () => (0, P.transitionTo)(h.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, n.jsx)(B, {
                                subscriptionTier: d,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: h.AnalyticsSections.EXPRESSION_PICKER,
                                    object: h.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: O,
                                discountOffer: M
                            })]
                        });
                    case x.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
                        return a(null != o, "You must specify children for this upsell type"), (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)("img", {
                                    className: b.upsellImage,
                                    src: v,
                                    alt: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, n.jsx)(E.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                                }), (0, n.jsx)(F, {
                                    trialOffer: O,
                                    discountOffer: M,
                                    children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, S.getDisplayNameFromSku)(d),
                                        onClick: () => (0, P.transitionTo)(h.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, n.jsx)(B, {
                                subscriptionTier: d,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: h.AnalyticsSections.EXPRESSION_PICKER,
                                    object: h.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: O,
                                discountOffer: M
                            })]
                        });
                    case x.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                        a(null != o, "You must specify children for this upsell type");
                        let g = (0, m.isThemeLight)(U) ? r("602291") : r("609708");
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)("img", {
                                    alt: "",
                                    className: b.upsellImage,
                                    src: g
                                }), (0, n.jsx)(E.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: A.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                                }), (0, n.jsx)(F, {
                                    trialOffer: O,
                                    discountOffer: M,
                                    children: A.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                        planName: (0, S.getDisplayNameFromSku)(d),
                                        onClick: () => (0, P.transitionTo)(h.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, n.jsx)(B, {
                                subscriptionTier: d,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: h.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                    object: h.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: O,
                                discountOffer: M
                            })]
                        });
                    case x.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                    case x.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                    case x.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                    case x.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                        let N;
                        switch (u) {
                            case x.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                                N = A.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                                    planName: (0, S.getDisplayNameFromSku)(d),
                                    premiumMaxSize: d === x.PremiumSubscriptionSKUs.TIER_0 ? A.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : A.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                                    onClick: () => {
                                        (0, P.transitionTo)(h.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                });
                                break;
                            case x.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                                N = A.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, S.getDisplayNameFromSku)(d),
                                    onClick: () => {
                                        (0, P.transitionTo)(h.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                });
                                break;
                            case x.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                                N = A.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                                    onClick: () => {
                                        (0, P.transitionTo)(h.Routes.APPLICATION_STORE), null == s || s(), (0, _.closeAllModals)()
                                    }
                                });
                                break;
                            case x.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                                N = A.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: h.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, P.transitionTo)(h.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                })
                        }
                        return a(null != N, "There must be some upsell context"), (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)(E.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: t
                                }), (0, n.jsx)(E.Text, {
                                    variant: "text-md/normal",
                                    children: i
                                }), (0, n.jsx)(F, {
                                    trialOffer: O,
                                    discountOffer: M,
                                    children: N
                                })]
                            })
                        });
                    case x.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
                        return (0, n.jsxs)("div", {
                            className: b.contentContainer,
                            children: [(0, n.jsx)(E.Heading, {
                                variant: "heading-xl/bold",
                                color: "header-primary",
                                children: t
                            }), (0, n.jsx)(E.Text, {
                                variant: "text-md/normal",
                                children: i
                            }), (0, n.jsx)(F, {
                                trialOffer: O,
                                discountOffer: M,
                                children: A.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, S.getDisplayNameFromSku)(d),
                                    onClick: () => (0, P.transitionTo)(h.Routes.APPLICATION_STORE)
                                })
                            }), (0, n.jsx)(j, {
                                className: b.upsellButton,
                                subscriptionTier: d,
                                analyticsLocationObject: p,
                                onClose: s,
                                trialOffer: O,
                                discountOffer: M
                            })]
                        });
                    case x.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                        return a(null != o, "You must specify children for this upsell type"), (0, n.jsx)(F, {
                            trialOffer: O,
                            discountOffer: M,
                            children: A.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                                onClick: () => {
                                    (0, P.transitionTo)(h.Routes.APPLICATION_STORE), (0, I.closeEditor)()
                                }
                            })
                        });
                    case x.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                        return (0, n.jsxs)("div", {
                            className: l(b.messageLengthUpsellContainer, {
                                [b.messageLengthUpsellAppearAnimation]: !L
                            }),
                            children: [(0, n.jsx)(E.Text, {
                                variant: "text-lg/bold",
                                color: "status-danger",
                                children: i
                            }), (0, n.jsx)(E.Heading, {
                                variant: "heading-lg/extrabold",
                                color: "header-primary",
                                className: b.messageLengthUpsellHeader,
                                children: A.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
                            }), (0, n.jsx)("div", {
                                className: b.divider
                            }), (0, n.jsx)(F, {
                                trialOffer: O,
                                discountOffer: M,
                                className: b.messageLengthBrandedContainer,
                                subscriptionTier: d,
                                children: A.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: h.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, P.transitionTo)(h.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                })
                            }), (0, n.jsx)(j, {
                                subscriptionTier: d,
                                analyticsLocationObject: p,
                                onClose: s,
                                trialOffer: O,
                                discountOffer: M
                            })]
                        });
                    case x.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
                    case x.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                        return (0, n.jsx)(G, {});
                    case x.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
                    case x.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
                    case x.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
                    case x.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
                    case x.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
                    case x.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
                    case x.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
                        return (0, n.jsx)(w, {
                            trialOffer: O,
                            discountOffer: M,
                            headingText: t,
                            context: i,
                            children: o
                        });
                    default:
                        return C.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, n.jsx)(w, {
                            headingText: t,
                            context: i,
                            children: o,
                            trialOffer: O,
                            discountOffer: M
                        })
                }
            }
        },
        400307: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                PremiumPillAndSparklesColorOptions: function() {
                    return l
                },
                PremiumPillWithSparkles: function() {
                    return er
                },
                Tier0Card: function() {
                    return es
                },
                Tier2FeatureSet: function() {
                    return a
                },
                Tier2FeatureItems: function() {
                    return ea
                },
                Tier2Card: function() {
                    return eu
                },
                default: function() {
                    return ed
                }
            });
            var n, i, o, l, s, a, u = r("37983");
            r("884691");
            var d = r("414456"),
                c = r.n(d),
                _ = r("866227"),
                m = r.n(_),
                E = r("446674"),
                T = r("669491"),
                f = r("819855"),
                I = r("77078"),
                P = r("225664"),
                R = r("841098"),
                p = r("812204"),
                O = r("685665"),
                M = r("441413"),
                S = r("432173"),
                C = r("915639"),
                L = r("697218"),
                U = r("521012"),
                g = r("594098"),
                N = r("491614"),
                x = r("716589"),
                h = r("46829"),
                A = r("118503"),
                b = r("41250"),
                v = r("379863"),
                D = r("216422"),
                F = r("619911"),
                j = r("698015"),
                y = r("75196"),
                B = r("719923"),
                G = r("153160"),
                w = r("182650"),
                H = r("154889"),
                k = r("917247"),
                K = r("641078"),
                W = r("992118"),
                V = r("646718"),
                Y = r("719347"),
                X = r("782340"),
                z = r("205988"),
                Z = r("939784"),
                J = r("769015");
            let Q = "premium_new_tier_2_gradient",
                q = "premium_old_tier_2_gradient";

            function $(e) {
                let {
                    width: t = 14,
                    height: r = 13,
                    color: n = "white",
                    foreground: i,
                    ...o
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, y.default)({
                        ...o
                    }),
                    preserveAspectRatio: "none",
                    width: t,
                    height: r,
                    viewBox: "0 0 14 13",
                    className: i,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, u.jsxs)("defs", {
                        children: [(0, u.jsxs)("linearGradient", {
                            id: Q,
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
                            id: q,
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
                        fill: n
                    })]
                })
            }

            function ee(e) {
                let {
                    tier: t = V.PremiumTypes.TIER_2
                } = e, r = (0, R.default)(), n = (0, f.isThemeLight)(r);
                return (0, u.jsxs)(u.Fragment, {
                    children: [!n && (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("div", {
                            className: c(z.rimGlowVertical, {
                                [z.rimGlowVerticalTier0]: t === V.PremiumTypes.TIER_0,
                                [z.rimGlowVerticalTier2]: t === V.PremiumTypes.TIER_2
                            })
                        }), (0, u.jsx)($, {
                            foreground: z.buttonSparkleStar1
                        })]
                    }), (0, u.jsx)($, {
                        foreground: z.buttonSparkleStar2
                    }), (0, u.jsx)($, {
                        foreground: z.buttonSparkleStar3
                    }), (0, u.jsx)($, {
                        foreground: z.buttonSparkleStar4
                    }), (0, u.jsx)($, {
                        foreground: z.buttonSparkleStar5
                    })]
                })
            }

            function et(e) {
                let {
                    text: t,
                    className: r,
                    colorOptions: n = l.PREMIUM_TIER_2_WHITE_FILL
                } = e;
                return (0, u.jsx)("div", {
                    className: c(r, z.freeTrialPill, {
                        [z.freeTrialPillTier0GradientFill]: n === l.PREMIUM_TIER_0_GRADIENT_FILL,
                        [z.freeTrialPillTier2GradientFill]: n === l.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
                        [z.freeTrialPillTier2OldGradientFill]: n === l.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                    children: (0, u.jsx)(I.Text, {
                        variant: "text-xs/bold",
                        className: c(z.freeTrialPillText, {
                            [z.freeTrialPillTextInverted]: n !== l.PREMIUM_TIER_0_WHITE_FILL && n !== l.PREMIUM_TIER_2_WHITE_FILL,
                            [z.freeTrialPillTextTier0]: n === l.PREMIUM_TIER_0_WHITE_FILL,
                            [z.freeTrialPillTextTier2]: n === l.PREMIUM_TIER_2_WHITE_FILL
                        }),
                        children: t
                    })
                })
            }

            function er(e) {
                let t, {
                    text: r,
                    className: n,
                    colorOptions: i = l.PREMIUM_TIER_2_WHITE_FILL
                } = e;
                switch (i) {
                    case l.PREMIUM_TIER_0_GRADIENT_FILL:
                        t = T.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
                        break;
                    case l.PREMIUM_TIER_2_NEW_GRADIENT_FILL:
                        t = "url(#".concat(Q, ")");
                        break;
                    case l.PREMIUM_TIER_2_OLD_GRADIENT_FILL:
                        t = "url(#".concat(q, ")");
                        break;
                    case l.PREMIUM_TIER_0_WHITE_FILL:
                    case l.PREMIUM_TIER_2_WHITE_FILL:
                    default:
                        t = "white"
                }
                return (0, u.jsxs)("div", {
                    className: c(n, z.freeTrialPillWithSparkles),
                    children: [(0, u.jsx)($, {
                        foreground: z.sparkleStar1,
                        color: t
                    }), (0, u.jsx)($, {
                        foreground: z.sparkleStar2,
                        color: t
                    }), (0, u.jsx)($, {
                        foreground: z.sparkleStar3,
                        color: t
                    }), (0, u.jsx)(et, {
                        text: r,
                        colorOptions: i
                    }), (0, u.jsx)($, {
                        foreground: z.sparkleStar4,
                        color: t
                    }), (0, u.jsx)($, {
                        foreground: z.sparkleStar5,
                        color: t
                    })]
                })
            }

            function en(e) {
                let {
                    width: t = 83,
                    height: r = 82,
                    ...n
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, y.default)({
                        ...n
                    }),
                    width: t,
                    height: r,
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

            function ei(e) {
                let {
                    Icon: t,
                    text: r,
                    isNew: n = !1
                } = e;
                return (0, u.jsxs)("div", {
                    className: z.item,
                    children: [(0, u.jsx)(t, {
                        className: z.icon
                    }), (0, u.jsx)(I.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: r
                    }), n ? (0, u.jsx)(M.default, {
                        className: z.newTagItem,
                        forceUseColorForSparkles: !0,
                        shouldInheritBackgroundColor: !0,
                        shouldInheritTextColor: !0
                    }) : null]
                })
            }

            function eo(e) {
                var t, r, n, i;
                let {
                    isGift: o,
                    premiumTier: l,
                    offerTierMatchesCard: a,
                    offerType: d,
                    showYearlyPrice: c
                } = e, _ = (0, E.useStateFromStores)([U.default], () => U.default.getPremiumTypeSubscription()), T = (0, E.useStateFromStores)([L.default], () => L.default.getCurrentUser()), f = (0, w.useHasDiscountApplied)(), P = l === V.PremiumTypes.TIER_0 ? V.PremiumSubscriptionSKUs.TIER_0 : V.PremiumSubscriptionSKUs.TIER_2, R = (null == _ ? void 0 : _.trialId) != null ? null == T ? void 0 : T.premiumType : f ? V.PremiumTypes.TIER_2 : null, p = (0, k.usePremiumTrialOffer)(), O = null == p ? void 0 : p.subscription_trial;
                if (!o && null != R && l === R && null != _ && null != _.planIdFromItems) {
                    let e = null != _.trialEndsAt ? m(null == _ ? void 0 : _.trialEndsAt).diff(m(), "d") : 0,
                        t = V.SubscriptionPlanInfo[_.planIdFromItems],
                        r = B.default.formatPriceString(B.default.getDefaultPrice(t.id), t.interval);
                    return (0, u.jsx)(u.Fragment, {
                        children: (0, u.jsx)(I.Heading, {
                            variant: "heading-md/normal",
                            color: "always-white",
                            className: z.trialHeader,
                            children: d === s.PREMIUM_TRIAL ? X.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                remainingTime: e,
                                price: r
                            }) : X.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION.format({
                                percent: 30,
                                regularPrice: r
                            })
                        })
                    })
                }
                if (!o && a) {
                    let e = B.default.formatPriceString(B.default.getDefaultPrice(l === V.PremiumTypes.TIER_0 ? V.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : V.SubscriptionPlans.PREMIUM_MONTH_TIER_2), V.SubscriptionIntervalTypes.MONTH);
                    return (0, u.jsx)(I.Heading, {
                        variant: "heading-md/normal",
                        color: "always-white",
                        className: z.trialHeader,
                        children: d === s.PREMIUM_TRIAL ? X.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                            planName: (0, B.getTierDisplayName)(null !== (r = V.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (t = null == O ? void 0 : O.sku_id) && void 0 !== t ? t : V.PremiumSubscriptionSKUs.NONE]) && void 0 !== r ? r : V.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                            duration: (0, B.formatIntervalDuration)({
                                intervalType: null !== (n = null == O ? void 0 : O.interval) && void 0 !== n ? n : V.SubscriptionIntervalTypes.DAY,
                                intervalCount: null !== (i = null == O ? void 0 : O.interval_count) && void 0 !== i ? i : 30,
                                capitalize: !1
                            }),
                            price: e
                        }) : X.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION.format({
                            discountedPrice: "$6.99",
                            regularPrice: e
                        })
                    })
                }
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(W.default, {
                        subscriptionTier: P,
                        isGift: o,
                        className: z.price
                    }), c && (0, u.jsx)(W.default, {
                        subscriptionTier: P,
                        interval: V.SubscriptionIntervalTypes.YEAR,
                        isGift: o,
                        className: z.price
                    })]
                })
            }

            function el() {
                let {
                    enabled: e,
                    hasUnlimited: t
                } = (0, P.useBurstReactionsExperiment)();
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(ei, {
                        Icon: j.default,
                        text: X.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, B.getMaxFileSizeForPremiumType)(V.PremiumTypes.TIER_0, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(ei, {
                        Icon: h.default,
                        text: X.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), e ? (0, u.jsx)(ei, {
                        Icon: N.default,
                        text: t ? X.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED : X.default.Messages.PREMIUM_TIER_SUPER_REACTIONS_ITEM.format({
                            weeklyReactionsNumber: S.BurstRefillTierAmounts.TIER_0
                        })
                    }) : null, (0, u.jsx)(ei, {
                        Icon: D.default,
                        text: X.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
                    })]
                })
            }

            function es(e) {
                var t;
                let {
                    showWumpus: r,
                    showBadge: n,
                    ctaButton: i,
                    showYearlyPrice: o,
                    className: a,
                    isGift: d = !1
                } = e, _ = (0, E.useStateFromStores)([U.default], () => U.default.getPremiumTypeSubscription()), m = (0, E.useStateFromStores)([L.default], () => L.default.getCurrentUser()), T = (0, k.usePremiumTrialOffer)(), f = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id, I = (null == _ ? void 0 : _.trialId) != null, P = (null == _ ? void 0 : _.trialId) != null ? null == m ? void 0 : m.premiumType : null, R = null != f || I;
                return (0, u.jsxs)("div", {
                    className: c(z.tier0, z.card, a, {
                        [z.withTier0Rim]: !d && R,
                        [z.withCardHover]: !d && R
                    }),
                    children: [f === V.PremiumSubscriptionSKUs.TIER_0 ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: X.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: z.topRimPill,
                            colorOptions: l.PREMIUM_TIER_0_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: z.rimGlowTier0
                        })]
                    }) : null, n && (0, u.jsx)(en, {
                        className: z.newCircleIcon
                    }), r ? (0, u.jsx)("div", {
                        className: z.wumpusImageContainer,
                        children: (0, u.jsx)(g.default, {
                            src: Z,
                            mediaLayoutType: Y.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, d || f !== V.PremiumSubscriptionSKUs.TIER_0 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: X.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: z.topRimPill,
                            colorOptions: l.PREMIUM_TIER_0_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: z.rimGlowTier0
                        })]
                    }), d || P !== V.PremiumTypes.TIER_0 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: X.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: z.topRimPill,
                            colorOptions: l.PREMIUM_TIER_0_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: z.rimGlowTier0
                        })]
                    }), (0, u.jsx)("div", {
                        children: (0, u.jsxs)("div", {
                            className: z.body,
                            children: [(0, u.jsx)("div", {
                                className: z.tier0LogoContainer,
                                children: (0, u.jsx)(v.default, {
                                    className: c(z.tier0Title, z.title)
                                })
                            }), (0, u.jsx)(eo, {
                                isGift: d,
                                premiumTier: V.PremiumTypes.TIER_0,
                                offerType: s.PREMIUM_TRIAL,
                                offerTierMatchesCard: f === V.PremiumSubscriptionSKUs.TIER_0,
                                showYearlyPrice: o
                            }), (0, u.jsx)(el, {})]
                        })
                    }), i, d || f !== V.PremiumSubscriptionSKUs.TIER_0 ? null : (0, u.jsx)(ee, {
                        tier: V.PremiumTypes.TIER_0
                    })]
                })
            }

            function ea(e) {
                let {
                    featureSet: t = a.DEFAULT
                } = e, {
                    enabled: r,
                    hasUnlimited: n
                } = (0, P.useBurstReactionsExperiment)(), i = (0, E.useStateFromStores)([C.default], () => C.default.locale);
                if (t === a.BOOSTING) return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(ei, {
                        Icon: A.default,
                        text: X.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                            numBoosts: V.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            percentageOff: (0, G.formatPercent)(i, V.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, u.jsx)(ei, {
                        Icon: j.default,
                        text: X.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, B.getMaxFileSizeForPremiumType)(V.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(ei, {
                        Icon: h.default,
                        text: X.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, u.jsx)(ei, {
                        Icon: F.default,
                        text: X.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, u.jsx)(ei, {
                        Icon: x.default,
                        text: X.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })]
                });
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(ei, {
                        Icon: j.default,
                        text: X.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, B.getMaxFileSizeForPremiumType)(V.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(ei, {
                        Icon: h.default,
                        text: X.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), r ? (0, u.jsx)(ei, {
                        Icon: N.default,
                        text: n ? X.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED : X.default.Messages.PREMIUM_TIER_SUPER_REACTIONS_ITEM.format({
                            weeklyReactionsNumber: S.BurstRefillTierAmounts.TIER_2
                        })
                    }) : null, (0, u.jsx)(ei, {
                        Icon: F.default,
                        text: X.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, u.jsx)(ei, {
                        Icon: A.default,
                        text: X.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
                    }), (0, u.jsx)(ei, {
                        Icon: x.default,
                        text: X.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })]
                })
            }

            function eu(e) {
                var t, r, n;
                let {
                    showWumpus: i,
                    ctaButton: o,
                    showYearlyPrice: d,
                    featureSet: _ = a.DEFAULT,
                    className: m,
                    isGift: T = !1
                } = e, f = (0, E.useStateFromStores)([U.default], () => U.default.getPremiumTypeSubscription()), P = (0, E.useStateFromStores)([L.default], () => L.default.getCurrentUser()), R = (0, k.usePremiumTrialOffer)(), p = null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id, O = (null == f ? void 0 : f.trialId) != null ? null == P ? void 0 : P.premiumType : null, M = (0, w.useIsInPremiumOfferExperience)(), S = (0, H.usePremiumDiscountOffer)(), C = (0, w.useHasDiscountApplied)(), N = null != p || null != O ? s.PREMIUM_TRIAL : null != S || C ? s.PREMIUM_DISCOUNT : null, x = (0, K.useIsEligibleForBogoPromotion)(), h = (0, K.getBOGOPillCopy)();
                return (0, u.jsxs)("div", {
                    className: c(z.tier2, z.card, m, {
                        [z.withTier2Rim]: !T && M,
                        [z.withCardHover]: !T && M
                    }),
                    children: [!T && null != S && (0, H.discountOfferHasTier)(S, V.PremiumSubscriptionSKUs.TIER_2) && (null === (r = S.discount) || void 0 === r ? void 0 : r.amount) !== void 0 ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: X.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                                percent: null === (n = S.discount) || void 0 === n ? void 0 : n.amount
                            }),
                            className: z.topRimPill,
                            colorOptions: l.PREMIUM_TIER_2_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: z.rimGlowTier2
                        })]
                    }) : null, T || p !== V.PremiumSubscriptionSKUs.TIER_2 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: X.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: z.topRimPill,
                            colorOptions: l.PREMIUM_TIER_2_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: z.rimGlowTier2
                        })]
                    }), T || O !== V.PremiumTypes.TIER_2 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: X.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: z.topRimPill,
                            colorOptions: l.PREMIUM_TIER_2_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: z.rimGlowTier2
                        })]
                    }), !T && C && (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: X.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                            className: z.topRimPill,
                            colorOptions: l.PREMIUM_TIER_2_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: z.rimGlowTier2
                        })]
                    }), i ? (0, u.jsx)("div", {
                        className: z.wumpusImageContainer,
                        children: (0, u.jsx)(g.default, {
                            src: J,
                            mediaLayoutType: Y.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, (0, u.jsxs)("div", {
                        children: [(0, u.jsx)(b.default, {
                            className: c(z.tier2Title, z.title)
                        }), !T && p !== V.PremiumSubscriptionSKUs.TIER_2 && x && (0, u.jsx)(I.Text, {
                            variant: "text-xs/bold",
                            className: z.freeTrialPillInline,
                            children: h
                        }), (0, u.jsx)(eo, {
                            isGift: T,
                            premiumTier: V.PremiumTypes.TIER_2,
                            offerType: N,
                            offerTierMatchesCard: p === V.PremiumSubscriptionSKUs.TIER_2 || (0, H.discountOfferHasTier)(S, V.PremiumSubscriptionSKUs.TIER_2),
                            showYearlyPrice: d
                        }), (0, u.jsx)(ea, {
                            featureSet: _
                        })]
                    }), o, T || p !== V.PremiumSubscriptionSKUs.TIER_2 && null == S ? null : (0, u.jsx)(ee, {
                        tier: V.PremiumTypes.TIER_2
                    })]
                })
            }

            function ed(e) {
                let {
                    showWumpus: t,
                    showBadge: r,
                    tier0CTAButton: n,
                    tier2CTAButton: i,
                    className: o
                } = e, {
                    AnalyticsLocationProvider: l
                } = (0, O.default)(p.default.PREMIUM_MARKETING_TIER_CARD);
                return (0, u.jsx)(l, {
                    children: (0, u.jsxs)("div", {
                        className: c(z.premiumCards, o),
                        children: [(0, u.jsx)(es, {
                            showWumpus: t,
                            showBadge: r,
                            ctaButton: n
                        }), (0, u.jsx)(eu, {
                            showWumpus: t,
                            ctaButton: i
                        })]
                    })
                })
            }(n = l || (l = {}))[n.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", n[n.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", n[n.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", n[n.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", n[n.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", (i = s || (s = {}))[i.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", i[i.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (o = a || (a = {}))[o.DEFAULT = 0] = "DEFAULT", o[o.BOOSTING = 1] = "BOOSTING"
        },
        992118: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("414456"),
                o = r.n(i),
                l = r("446674"),
                s = r("77078"),
                a = r("10514"),
                u = r("719923"),
                d = r("646718"),
                c = r("449001"),
                _ = function(e) {
                    let {
                        subscriptionTier: t,
                        interval: r = d.SubscriptionIntervalTypes.MONTH,
                        className: i,
                        isGift: _ = !1
                    } = e, m = (0, l.useStateFromStores)([a.default], () => a.default.isLoadedForPremiumSKUs());
                    if (!m) return (0, n.jsx)(s.Spinner, {
                        type: s.Spinner.Type.PULSING_ELLIPSIS,
                        className: c.priceSpinner
                    });
                    let E = a.default.getForSkuAndInterval(t, r),
                        T = null != E ? (0, u.getFormattedPriceForPlan)(E, void 0, !1, _) : null;
                    return (0, n.jsxs)(s.Heading, {
                        color: "always-white",
                        variant: "heading-md/medium",
                        className: o(c.pricePerInterval, i),
                        children: [(0, n.jsx)("span", {
                            className: c.price,
                            children: T
                        }), " / ", (0, u.getIntervalStringAsNoun)(r)]
                    })
                }
        }
    }
]);
//# sourceMappingURL=2944ab9640bfed6106ea.js.map