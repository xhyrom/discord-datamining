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
                    return o
                }
            });
            var n = r("775560"),
                i = r("888400"),
                l = r("149638");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = (0, n.useForceUpdate)();
                return (0, l.default)(() => {
                    o || a(), null != r && r()
                }, o ? null : t), (0, i.diffAsUnits)(Date.now(), e)
            }
        },
        149638: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("884691"),
                i = r("627445"),
                l = r.n(i);

            function o(e, t) {
                let r = (0, n.useRef)(e);
                (0, n.useEffect)(() => {
                    r.current = e
                }, [e]), (0, n.useEffect)(() => {
                    if (null === t) return;
                    let e = setInterval(function() {
                        l(null != r.current, "Missing callback"), r.current()
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
                    return l
                },
                updateBackgroundGradientAngle: function() {
                    return o
                },
                resetBackgroundGradientAngle: function() {
                    return a
                },
                openEditor: function() {
                    return s
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
                l = () => {
                    n.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: null
                    })
                },
                o = e => {
                    n.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_ANGLE",
                        angle: e
                    })
                },
                a = () => {
                    n.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_ANGLE",
                        angle: null
                    })
                },
                s = () => {
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
                l = r("446674"),
                o = r("521012"),
                a = r("324878"),
                s = r("154889"),
                u = r("917247");

            function d() {
                let e = (0, u.usePremiumTrialOffer)(),
                    t = (0, a.useHasActiveTrial)(),
                    r = (0, s.usePremiumDiscountOffer)(),
                    n = c();
                return null != e || t || null != r || n
            }
            let c = () => {
                var e;
                let t = (0, l.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
                    r = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.nitro_likelihood_discount_expires_at;
                return null != r && i(Date.now()) <= i(r)
            }
        },
        179935: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchReferralsRemaining: function() {
                    return s
                },
                checkRecipientEligibility: function() {
                    return u
                },
                createReferralTrial: function() {
                    return d
                },
                resolveReferralTrialOffer: function() {
                    return c
                }
            });
            var n = r("872717"),
                i = r("913144"),
                l = r("819689"),
                o = r("18494"),
                a = r("49111");
            let s = () => (i.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), n.default.get({
                    url: a.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    i.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    i.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                u = e => (i.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), n.default.post({
                    url: a.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function d(e) {
                try {
                    var t;
                    let r = await n.default.post({
                            url: a.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        l = null !== (t = r.body) && void 0 !== t ? t : null;
                    return i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: l
                    }), {
                        userTrialOffer: l
                    }
                } catch (e) {
                    if (i.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === a.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = o.default.getCurrentlySelectedChannelId();
                        null != t && l.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function c(e) {
                try {
                    var t;
                    let r = await n.default.get({
                            url: a.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        l = null !== (t = r.body) && void 0 !== t ? t : null;
                    return i.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: l
                    }), {
                        userTrialOffer: l
                    }
                } catch (t) {
                    i.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_FAIL",
                        userTrialOfferId: e
                    })
                }
            }
        },
        540692: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return M
                }
            });
            var n = r("637612"),
                i = r("446674"),
                l = r("913144"),
                o = r("697218"),
                a = r("179935"),
                s = r("49111");
            let u = null,
                d = {},
                c = [],
                _ = new Set,
                E = !1,
                f = new Set,
                I = new Set,
                m = {},
                T = 0,
                R = null,
                P = () => !0;

            function p(e) {
                f.add(e)
            }

            function O(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => S(e))
            }

            function S(e) {
                let t = e.type === n.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!I.has(t) && !f.has(t)) {
                    var r;
                    r = t, f.add(r), l.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(s.NOOP_NULL))
                }
            }
            class L extends i.default.Store {
                initialize() {
                    this.waitFor(o.default), this.syncWith([o.default], P)
                }
                checkAndFetchReferralsRemaining() {
                    null == u && !E && T < 5 && (null == R || R < Date.now()) && (0, a.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), u
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == c ? [] : c
                }
                isFetchingReferralsRemaining() {
                    return E
                }
                isFetchingRecipientEligibility(e) {
                    return _.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === d[e] && !_.has(e) && (0, a.checkRecipientEligibility)(e), d[e]
                }
                getRelevantUserTrialOffer(e) {
                    return m[e]
                }
                isResolving(e) {
                    return f.has(e)
                }
            }
            L.displayName = "ReferralTrialStore";
            var M = new L(l.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: r
                    } = e;
                    if (!E && (0, a.fetchReferralsRemaining)(), !_.has(r) && (0, a.checkRecipientEligibility)(r), !f.has(t)) {
                        var n;
                        n = t, f.add(n), l.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(s.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    E = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: r
                    } = e;
                    E = !1, u = t, c = r
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    E = !1, T += 1, R = Date.now() + 1e3 * Math.pow(2, T)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    _.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: r
                    } = e;
                    d[t] = r, _.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    d[t] = !1, _.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, a.fetchReferralsRemaining)(), m[t.id] = t, c = [...c, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (f.delete(t.id), I.add(t.id), m[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    f.delete(t), I.add(t)
                },
                LOAD_MESSAGES_SUCCESS: O,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    S(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: O,
                LOGOUT: function() {
                    u = null, d = {}, c = [], _ = new Set, E = !1, f = new Set, I = new Set, m = {}, T = 0, R = null
                }
            })
        },
        982457: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("872717"),
                i = r("913144"),
                l = r("49111"),
                o = {
                    async fetchUserTrialOffer() {
                        try {
                            let {
                                body: e
                            } = await n.default.get({
                                url: l.Endpoints.USER_TRIAL_OFFER,
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
                                url: l.Endpoints.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id)
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
                    return l
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
            var l = i
        },
        935566: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                BogoPromotionExperiment: function() {
                    return i
                },
                isBogoPromotionExperimentEnabled: function() {
                    return l
                },
                default: function() {
                    return o
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
                l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return i.getCurrentConfig({
                        location: "489551_2"
                    }, {
                        autoTrackExposure: e
                    })
                };
            var o = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return i.useExperiment({
                    location: "489551_1"
                }, {
                    autoTrackExposure: e
                })
            }
        },
        917247: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                usePremiumTrialOffer: function() {
                    return s
                }
            });
            var n = r("65597"),
                i = r("340412"),
                l = r("540692"),
                o = r("833516"),
                a = r("646718");

            function s(e) {
                var t, r, s, u;
                let d = (0, o.useTrialOffer)(a.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    c = (0, o.useTrialOffer)(a.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    _ = (0, o.useTrialOffer)(a.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    E = (0, o.useTrialOffer)(i.default.getAnyOfUserTrialOfferId([a.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, a.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    f = (0, o.useTrialOffer)(a.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    I = (0, n.default)([l.default], () => void 0 === e ? null : l.default.getRelevantUserTrialOffer(e));
                return null !== (u = null !== (s = null !== (r = null !== (t = null != d ? d : I) && void 0 !== t ? t : c) && void 0 !== r ? r : _) && void 0 !== s ? s : E) && void 0 !== u ? u : f
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
                    return E
                },
                bogoPromotionFromServer: function() {
                    return f
                },
                fetchClaimedOutboundPromotionCodes: function() {
                    return m
                },
                claimOutboundPromotion: function() {
                    return T
                },
                getOutboundPromotionRedemptionUrl: function() {
                    return R
                },
                shouldShowOutboundPromotionNotice: function() {
                    return P
                },
                shouldShowOutboundPromotionOnPlatform: function() {
                    return p
                },
                isOutboundPromotionRedeemableByTrialUsers: function() {
                    return O
                },
                isTrialUserEligibleToSeeOutboundPromotion: function() {
                    return S
                }
            });
            var n = r("872717"),
                i = r("819855"),
                l = r("915639"),
                o = r("521012"),
                a = r("568734"),
                s = r("773336"),
                u = r("78345"),
                d = r("807345"),
                c = r("49111");

            function _(e, t) {
                let r = (0, i.isThemeDark)(t) ? "logo-dark" : "logo-light",
                    n = window.GLOBAL_ENV.CDN_HOST,
                    l = "?size=256";
                return null != n ? "".concat(location.protocol, "//").concat(n, "/promotions/").concat(e, "/").concat(r).concat(l) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(r).concat(l)
            }

            function E(e) {
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

            function I(e) {
                return {
                    code: e.code,
                    userId: e.user_id,
                    claimedAt: e.claimed_at,
                    promotion: E(e.promotion)
                }
            }
            async function m() {
                let e = await n.default.get({
                        url: c.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
                        query: {
                            locale: l.default.locale
                        },
                        oldFormErrors: !0
                    }),
                    t = e.body;
                return t.map(I)
            }
            async function T(e) {
                let t = await n.default.post({
                        url: c.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e)
                    }),
                    r = t.body;
                return I(r)
            }

            function R(e, t) {
                return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
            }

            function P() {
                let e = d.default.lastSeenOutboundPromotionStartDate,
                    t = d.default.outboundPromotions,
                    r = d.default.consumedInboundPromotionId,
                    n = t.filter(e => {
                        let {
                            id: t,
                            flags: n
                        } = e;
                        return t !== r && !(0, a.hasFlag)(n, u.PromotionFlags.SUPPRESS_NOTIFICATION)
                    }),
                    i = null == e ? n : n.filter(t => {
                        let {
                            startDate: r
                        } = t;
                        return new Date(r) > new Date(e)
                    }),
                    l = d.default.lastDismissedOutboundPromotionStartDate,
                    s = o.default.getPremiumTypeSubscription(),
                    c = (null == s ? void 0 : s.trialId) != null,
                    _ = c ? i.filter(e => O(e)) : i;
                return 0 !== _.length && (null == l || _.some(e => {
                    let {
                        startDate: t
                    } = e;
                    return new Date(t) > new Date(l)
                }))
            }

            function p(e) {
                return !(0, s.isIOS)() || !(0, a.hasFlag)(e.flags, u.PromotionFlags.IS_BLOCKED_IOS)
            }

            function O(e) {
                return (0, a.hasFlag)(e.flags, u.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
            }

            function S(e, t) {
                return null != t[e.id] || O(e)
            }
        },
        538620: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchActiveOutboundPromotions: function() {
                    return f
                },
                fetchActiveBogoPromotion: function() {
                    return I
                },
                default: function() {
                    return m
                }
            });
            var n = r("872717"),
                i = r("750028"),
                l = r("913144"),
                o = r("251472"),
                a = r("915639"),
                s = r("872173"),
                u = r("772465"),
                d = r("44678"),
                c = r("807345"),
                _ = r("646718"),
                E = r("49111");
            async function f() {
                if (!c.default.isFetchingActiveOutboundPromotions) try {
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH"
                    });
                    let t = u.PromotionPreviewExperiment.getCurrentConfig({
                            location: "5731cc_1"
                        }, {
                            autoTrackExposure: !1
                        }).previewEnabled ? E.Endpoints.OUTBOUND_PROMOTIONS_PREVIEW : E.Endpoints.OUTBOUND_PROMOTIONS,
                        r = await n.default.get({
                            url: t,
                            query: {
                                locale: a.default.locale
                            },
                            oldFormErrors: !0
                        }),
                        i = r.body,
                        s = c.default.consumedInboundPromotionId;
                    if (!c.default.hasFetchedConsumedInboundPromotionId) {
                        var e;
                        let t = await (0, o.fetchUserEntitlementsForApplication)(_.PREMIUM_SUBSCRIPTION_APPLICATION, !1),
                            r = t.find(e => null != e.promotion_id && !0 === e.consumed);
                        s = null !== (e = null == r ? void 0 : r.promotion_id) && void 0 !== e ? e : null
                    }
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                        activeOutboundPromotions: i.map(e => (0, d.outboundPromotionFromServer)(e)),
                        consumedInboundPromotionId: s
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL"
                    })
                }
            }
            async function I() {
                if (!c.default.isFetchingActiveBogoPromotion) try {
                    l.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH"
                    });
                    let e = await n.default.get({
                            url: E.Endpoints.BOGO_PROMOTIONS,
                            query: {
                                locale: a.default.locale
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
            var m = {
                fetchActiveOutboundPromotions: f,
                dismissOutboundPromotionNotice: function() {
                    l.default.dispatch({
                        type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
                    });
                    let e = c.default.lastDismissedOutboundPromotionStartDate;
                    null != e && s.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
                        t.lastDismissedOutboundPromotionStartDate = i.StringValue.create({
                            value: e
                        })
                    }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
                },
                markOutboundPromotionsSeen() {
                    l.default.dispatch({
                        type: "OUTBOUND_PROMOTIONS_SEEN"
                    })
                },
                fetchActiveBogoPromotion: I
            }
        },
        694540: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useOutboundPromotions: function() {
                    return f
                },
                useUnseenOutboundPromotions: function() {
                    return I
                },
                useBogoPromotion: function() {
                    return m
                }
            });
            var n = r("884691"),
                i = r("446674"),
                l = r("913144"),
                o = r("697218"),
                a = r("719923"),
                s = r("324878"),
                u = r("44678"),
                d = r("538620"),
                c = r("807345"),
                _ = r("646718");

            function E() {
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

            function f() {
                let e = (0, i.useStateFromStores)([c.default], () => c.default.lastFetchedActivePromotions),
                    t = E(),
                    r = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    f = (0, s.useHasActiveTrial)(),
                    [I, m] = n.useState(!1),
                    [T, R] = n.useState([]);
                n.useEffect(() => {
                    null != e && l.default.wait(() => d.default.markOutboundPromotionsSeen())
                }, [e]);
                let P = n.useCallback(e => {
                        R(t => t.some(t => {
                            let {
                                promotion: r
                            } = t;
                            return r.id === e.promotion.id
                        }) ? t : [...t, e])
                    }, []),
                    p = (0, a.isPremiumExactly)(r, _.PremiumTypes.TIER_2);
                n.useEffect(() => {
                    l.default.wait(() => {
                        p && null == e && d.default.fetchActiveOutboundPromotions()
                    })
                }, [e, p]), n.useEffect(() => {
                    l.default.wait(() => {
                        (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
                            R(e), m(!0)
                        }).catch(() => {
                            R([]), m(!0)
                        })
                    })
                }, []);
                let O = {};
                for (let {
                        code: e,
                        promotion: t
                    }
                    of T) O[t.id] = e;
                let S = new Set(t.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    })),
                    L = T.filter(e => {
                        let {
                            promotion: t
                        } = e;
                        return !S.has(t.id)
                    }),
                    M = I && (!p || null != e);
                return {
                    promotionsLoaded: M,
                    activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!f || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, O))),
                    claimedEndedOutboundPromotions: L.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
                    claimedOutboundPromotionCodeMap: O,
                    addClaimedOutboundPromotionCode: P
                }
            }

            function I() {
                let e = (0, i.useStateFromStores)([c.default], () => c.default.lastSeenOutboundPromotionStartDate),
                    t = (0, s.useHasActiveTrial)(),
                    r = E(),
                    l = n.useMemo(() => {
                        if (null == e) return t ? r.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : r;
                        let n = r.filter(t => {
                            let {
                                startDate: r
                            } = t;
                            return new Date(r) > new Date(e)
                        });
                        return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n
                    }, [r, e, t]);
                return l.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
            }

            function m() {
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
                    return T
                }
            });
            var n = r("446674"),
                i = r("913144"),
                l = r("374363");

            function o() {
                return {
                    hasFetchedConsumedInboundPromotionId: !1,
                    consumedInboundPromotionId: null,
                    lastSeenOutboundPromotionStartDate: null,
                    bogoPromotion: null
                }
            }
            let a = o(),
                s = !1,
                u = null,
                d = !1,
                c = null,
                _ = [],
                E = null;

            function f() {
                let e = null;
                for (let t of _)(null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
                return e
            }

            function I() {
                var e, t, r;
                E = null !== (r = null === (t = l.default.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== r ? r : null
            }
            class m extends n.default.PersistedStore {
                initialize(e) {
                    null != e && (a = e), this.waitFor(l.default), this.syncWith([l.default], I)
                }
                get outboundPromotions() {
                    return _
                }
                get lastSeenOutboundPromotionStartDate() {
                    return a.lastSeenOutboundPromotionStartDate
                }
                get lastDismissedOutboundPromotionStartDate() {
                    return E
                }
                get lastFetchedActivePromotions() {
                    return c
                }
                get isFetchingActiveOutboundPromotions() {
                    return d
                }
                get hasFetchedConsumedInboundPromotionId() {
                    return a.hasFetchedConsumedInboundPromotionId
                }
                get consumedInboundPromotionId() {
                    return a.consumedInboundPromotionId
                }
                get bogoPromotion() {
                    return a.bogoPromotion
                }
                get isFetchingActiveBogoPromotion() {
                    return s
                }
                get lastFetchedActiveBogoPromotion() {
                    return u
                }
                getState() {
                    return a
                }
            }
            m.displayName = "PromotionsStore", m.persistKey = "PromotionsPersistedStore";
            var T = new m(i.default, {
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        activeOutboundPromotions: t,
                        consumedInboundPromotionId: r
                    } = e;
                    _ = t, c = Date.now(), d = !1, !a.hasFetchedConsumedInboundPromotionId && (a.hasFetchedConsumedInboundPromotionId = !0, a.consumedInboundPromotionId = r)
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
                    a.bogoPromotion = t, u = Date.now(), s = !1
                },
                ACTIVE_BOGO_PROMOTION_FETCH: function() {
                    s = !0
                },
                ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function() {
                    a.bogoPromotion = null, s = !1
                },
                OUTBOUND_PROMOTION_NOTICE_DISMISS: function() {
                    if (0 === _.length) return !1;
                    let e = f();
                    null != e && (E = e)
                },
                OUTBOUND_PROMOTIONS_SEEN: function() {
                    if (0 === _.length) return !1;
                    let e = f();
                    null != e && (E = e, a.lastSeenOutboundPromotionStartDate = e)
                },
                LOGOUT: function() {
                    a = o(), d = !1, c = null, s = !1, u = null, _ = []
                }
            })
        },
        833516: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hasUserTrialOfferExpired: function() {
                    return u
                },
                useTrialOffer: function() {
                    return d
                }
            });
            var n = r("884691"),
                i = r("446674"),
                l = r("862337"),
                o = r("697218"),
                a = r("340412"),
                s = r("719923");

            function u(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e) {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.getUserTrialOffer(e)),
                    [r, d] = n.useState(u(t)),
                    c = (0, i.useStateFromStores)([o.default], () => (0, s.isPremium)(o.default.getCurrentUser()));
                return n.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new l.Timeout,
                            n = () => {
                                let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(i, () => {
                                    !r && u(t) ? d(!0) : n()
                                })
                            };
                        return n(), () => e.stop()
                    }
                }, [r, t]), r || c ? null : t
            }
        },
        641078: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isUserIneligibleBasedOnCurrentOrPreviousSubs: function() {
                    return g
                },
                useIsEligibleForBogoPromotion: function() {
                    return A
                },
                maybeFetchActiveBogoPromotion: function() {
                    return h
                },
                isEligibleForBOGOAnnouncementModal: function() {
                    return x
                },
                getBOGOPillCopy: function() {
                    return b
                }
            });
            var n = r("866227"),
                i = r.n(n),
                l = r("65597"),
                o = r("151426"),
                a = r("850068"),
                s = r("174727"),
                u = r("619935"),
                d = r("10641"),
                c = r("915639"),
                _ = r("697218"),
                E = r("521012"),
                f = r("340412"),
                I = r("719923"),
                m = r("982457"),
                T = r("433947"),
                R = r("705337"),
                P = r("935566"),
                p = r("917247"),
                O = r("538620"),
                S = r("694540"),
                L = r("807345"),
                M = r("646718"),
                C = r("49111"),
                U = r("782340");

            function g(e) {
                var t, r, n;
                let {
                    experimentEnabled: l,
                    premiumSubscription: o,
                    mostRecentSubscription: a
                } = e, s = !1, u = !1;
                if (null != a && a.status === C.SubscriptionStatusTypes.ENDED) {
                    let e = (null === (t = a.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i(a.metadata.ended_at) : null,
                        n = null === (r = (0, I.getPremiumPlanItem)(a)) || void 0 === r ? void 0 : r.planId,
                        l = null != n && I.default.getPremiumType(n) === M.PremiumTypes.TIER_2;
                    u = null != e && l && e.add(10, "days").isAfter(i())
                }
                if (null != o) {
                    let e = null === (n = (0, I.getPremiumPlanItem)(o)) || void 0 === n ? void 0 : n.planId,
                        t = null != e && I.default.getPremiumType(e) === M.PremiumTypes.TIER_2,
                        r = _.default.getCurrentUser(),
                        i = (null == o ? void 0 : o.trialId) != null && I.default.isPremiumExactly(r, M.PremiumTypes.TIER_0);
                    s = t || i
                }
                return !l || s || u
            }

            function A() {
                var e;
                let {
                    paymentsBlocked: t
                } = u.default.useExperiment({
                    location: "153d31_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    promotion: r
                } = (0, S.useBogoPromotion)(), {
                    enabled: n
                } = (0, P.default)(), {
                    mostRecentSubscription: i,
                    premiumSubscription: o
                } = (0, l.useStateFromStoresObject)([E.default], () => ({
                    mostRecentSubscription: E.default.getMostRecentPremiumTypeSubscription(),
                    premiumSubscription: E.default.getPremiumTypeSubscription()
                })), a = (0, p.usePremiumTrialOffer)(), d = new Date(null !== (e = null == r ? void 0 : r.endDate) && void 0 !== e ? e : 0).valueOf();
                (0, s.default)(d, 1e3, void 0, d + 2e3 < Date.now());
                let c = !g({
                        experimentEnabled: n,
                        premiumSubscription: o,
                        mostRecentSubscription: i
                    }),
                    _ = c && null == a && null != r && !t,
                    f = Date.now(),
                    {
                        enabled: I
                    } = R.default.useExperiment({
                        location: "153d31_2"
                    }, {
                        autoTrackExposure: _,
                        disable: !_
                    });
                return !(f > d) && I
            }
            async function N() {
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
                    } = (0, P.isBogoPromotionExperimentEnabled)(),
                    {
                        enabled: l
                    } = R.default.getCurrentConfig({
                        location: "153d31_4"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: o
                    } = T.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_5"
                    }, {
                        autoTrackExposure: !1
                    });
                if (r || n || !i || !o && !l) return !1;
                if (f.default.shouldFetchOffer() && await m.default.fetchUserTrialOffer(), f.default.hasFetchedOffer() && f.default.hasAnyUnexpiredOffer()) return !1;
                !E.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(M.PremiumSubscriptionSKUs.TIER_2)) && await (0, a.fetchMostRecentSubscription)(), !E.default.hasFetchedSubscriptions() && await (0, a.fetchSubscriptions)();
                let s = E.default.getMostRecentPremiumTypeSubscription(),
                    d = E.default.getPremiumTypeSubscription();
                return !g({
                    experimentEnabled: i,
                    premiumSubscription: d,
                    mostRecentSubscription: s
                })
            }
            async function h() {
                let e = await N();
                if (!e) return;
                let t = L.default.bogoPromotion;
                if (null != t) {
                    let e = new Date(t.endDate).valueOf();
                    if (e >= Date.now()) return
                }
                await (0, O.fetchActiveBogoPromotion)()
            }
            async function x() {
                let e = L.default.bogoPromotion,
                    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
                    r = (0, d.isDismissibleContentDismissed)(o.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
                    n = await N(),
                    {
                        enabled: i
                    } = P.BogoPromotionExperiment.getCurrentConfig({
                        location: "153d31_6"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: l
                    } = T.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_7"
                    }, {
                        autoTrackExposure: t && i && !r && n
                    });
                return t && l && i && !r && n
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
                    return F
                },
                PremiumTrialGradientBadge: function() {
                    return j
                },
                default: function() {
                    return H
                }
            });
            var n = r("37983"),
                i = r("884691"),
                l = r("414456"),
                o = r.n(l),
                a = r("627445"),
                s = r.n(a),
                u = r("866227"),
                d = r.n(u),
                c = r("446674"),
                _ = r("551042"),
                E = r("819855"),
                f = r("77078"),
                I = r("841098"),
                m = r("206230"),
                T = r("32531"),
                R = r("393414"),
                P = r("945330"),
                p = r("41250"),
                O = r("379863"),
                S = r("216422"),
                L = r("719923"),
                M = r("286235"),
                C = r("626301"),
                U = r("917247"),
                g = r("635956"),
                A = r("400307"),
                N = r("646718"),
                h = r("49111"),
                x = r("782340"),
                b = r("670714"),
                v = r("481927");

            function F(e) {
                if (null == e) return null;
                let t = d(e),
                    r = t.diff(d(), "h");
                if (r > 24) {
                    let e = t.diff(d(), "d");
                    return x.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
                        numDays: e
                    })
                }
                if (r > 1) return x.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
                    numHours: r
                });
                let n = t.diff(d(), "minutes");
                return x.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
                    numMinutes: n
                })
            }

            function D(e) {
                var t, r, i;
                let {
                    className: l,
                    children: a,
                    withBottomMargin: s,
                    discountOffer: u,
                    trialOffer: d
                } = e, c = null !== (t = null == d ? void 0 : d.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, _ = null == d ? void 0 : d.subscription_trial, E = null !== (i = null !== (r = e.subscriptionTier) && void 0 !== r ? r : null == _ ? void 0 : _.sku_id) && void 0 !== i ? i : N.PremiumSubscriptionSKUs.TIER_2;
                return (0, n.jsxs)("div", {
                    className: o(l, b.gradientUpsellWrapper, {
                        [b.gradientUpsellWrapperTier0]: E === N.PremiumSubscriptionSKUs.TIER_0,
                        [b.gradientUpsellWrapperTier2]: E === N.PremiumSubscriptionSKUs.TIER_2,
                        [b.gradientUpsellWrapperWithBottomMargin]: s
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: b.logo,
                        children: [(0, n.jsx)(S.default, {
                            className: b.logoIcon
                        }), E === N.PremiumSubscriptionSKUs.TIER_0 && (0, n.jsx)(O.default, {
                            className: b.logoWordmark
                        }), E === N.PremiumSubscriptionSKUs.TIER_2 && (0, n.jsx)(p.default, {
                            className: b.logoWordmark
                        })]
                    }), (0, n.jsx)(f.Text, {
                        variant: "text-md/medium",
                        className: b.copy,
                        color: "none",
                        children: a
                    }), (0, n.jsx)(A.PremiumPillWithSparkles, {
                        text: null != u ? x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: u.discount.amount
                        }) : x.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        colorOptions: E === N.PremiumSubscriptionSKUs.TIER_0 ? A.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : A.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
                    }), (0, n.jsx)(f.Text, {
                        variant: "eyebrow",
                        className: b.countdownText,
                        children: F(c)
                    })]
                })
            }

            function y(e) {
                var t, r;
                let {
                    className: l,
                    onClose: o,
                    subscriptionTier: a,
                    analyticsLocationObject: s,
                    trialOffer: u,
                    discountOffer: d
                } = e, [c, _] = i.useState(!1), E = null != d ? x.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                    percent: d.discount.amount
                }) : (0, L.formatTrialCtaIntervalDuration)({
                    intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
                    intervalCount: null == u ? void 0 : null === (r = u.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                });
                return (0, n.jsx)(g.default, {
                    className: l,
                    subscriptionTier: a,
                    trialId: null == u ? void 0 : u.trial_id,
                    submitting: c,
                    premiumModalAnalyticsLocation: s,
                    size: f.Button.Sizes.MEDIUM,
                    color: f.Button.Colors.GREEN,
                    onClick: () => {
                        _(!0)
                    },
                    onSubscribeModalClose: e => {
                        if (_(!1), e) null == o || o()
                    },
                    buttonText: E
                })
            }

            function j(e) {
                var t, r;
                let i = null === (t = (0, U.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
                    l = null !== (r = null == i ? void 0 : i.sku_id) && void 0 !== r ? r : N.PremiumSubscriptionSKUs.TIER_2;
                return (0, n.jsx)(f.Text, {
                    variant: "text-xs/bold",
                    className: o(b.trialBadge, e.className, {
                        [b.trialBadgeGradientTier0]: l === N.PremiumSubscriptionSKUs.TIER_0,
                        [b.trialBadgeGradientTier2]: l === N.PremiumSubscriptionSKUs.TIER_2
                    }),
                    color: "none",
                    children: (0, L.formatTrialOfferIntervalDuration)({
                        intervalType: null == i ? void 0 : i.interval,
                        intervalCount: null == i ? void 0 : i.interval_count
                    })
                })
            }

            function G(e) {
                let {
                    subscriptionTier: t,
                    onClose: r,
                    analyticsLocationObject: i,
                    trialOffer: l,
                    discountOffer: o
                } = e;
                return (0, n.jsxs)("div", {
                    className: b.footer,
                    children: [(0, n.jsx)(f.Button, {
                        onClick: r,
                        size: f.Button.Sizes.SMALL,
                        look: f.ButtonLooks.BLANK,
                        className: b.cancelButton,
                        children: x.default.Messages.CLOSE
                    }), (0, n.jsx)(y, {
                        className: b.subscribeButton,
                        subscriptionTier: t,
                        analyticsLocationObject: i,
                        onClose: r,
                        discountOffer: o,
                        trialOffer: l
                    })]
                })
            }

            function B(e) {
                let {
                    onClose: t,
                    analyticsLocationObject: r
                } = e, i = (0, U.usePremiumTrialOffer)();
                return (0, n.jsxs)("div", {
                    className: b.tryOutUpsellContainer,
                    children: [(0, n.jsx)(A.PremiumPillWithSparkles, {
                        className: b.topRimPill,
                        text: x.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                        colorOptions: A.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                    }), (0, n.jsx)(f.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-normal",
                        children: x.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
                            onClick: C.navigateToPremiumMarketingPage
                        })
                    }), (0, n.jsx)(y, {
                        className: b.subscribeButtonWide,
                        subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocationObject: r,
                        onClose: t
                    }), (0, n.jsx)(f.Text, {
                        variant: "eyebrow",
                        className: b.countdownTextInSetting,
                        children: F(null == i ? void 0 : i.expires_at)
                    })]
                })
            }

            function w(e) {
                let {
                    headingText: t,
                    context: r,
                    children: i,
                    trialOffer: l,
                    discountOffer: o
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(f.Heading, {
                        className: b.header,
                        variant: "heading-xl/semibold",
                        children: t
                    }), null != r && (0, n.jsx)(f.Text, {
                        className: b.context,
                        variant: "text-md/normal",
                        children: r
                    }), (0, n.jsx)(D, {
                        trialOffer: l,
                        discountOffer: o,
                        children: i
                    })]
                })
            }

            function H(e) {
                let {
                    headingText: t,
                    context: i,
                    children: l,
                    onClose: a,
                    type: u,
                    subscriptionTier: d,
                    analyticsLocationObject: p,
                    trialOffer: O,
                    discountOffer: S
                } = e, C = (0, c.useStateFromStores)([m.default], () => m.default.useReducedMotion), U = (0, I.default)();
                switch (u) {
                    case N.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(f.Clickable, {
                                className: b.upsellClose,
                                onClick: a,
                                children: (0, n.jsx)(P.default, {})
                            }), (0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)("img", {
                                    className: b.upsellImage,
                                    src: v,
                                    alt: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, n.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: x.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                                }), (0, n.jsx)(D, {
                                    trialOffer: O,
                                    discountOffer: S,
                                    children: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, L.getDisplayNameFromSku)(d),
                                        onClick: () => (0, R.transitionTo)(h.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, n.jsx)(G, {
                                subscriptionTier: d,
                                onClose: a,
                                analyticsLocationObject: {
                                    section: h.AnalyticsSections.EXPRESSION_PICKER,
                                    object: h.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: O,
                                discountOffer: S
                            })]
                        });
                    case N.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
                        return s(null != l, "You must specify children for this upsell type"), (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)("img", {
                                    className: b.upsellImage,
                                    src: v,
                                    alt: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, n.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                                }), (0, n.jsx)(D, {
                                    trialOffer: O,
                                    discountOffer: S,
                                    children: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, L.getDisplayNameFromSku)(d),
                                        onClick: () => (0, R.transitionTo)(h.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, n.jsx)(G, {
                                subscriptionTier: d,
                                onClose: a,
                                analyticsLocationObject: {
                                    section: h.AnalyticsSections.EXPRESSION_PICKER,
                                    object: h.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: O,
                                discountOffer: S
                            })]
                        });
                    case N.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                        s(null != l, "You must specify children for this upsell type");
                        let g = (0, E.isThemeLight)(U) ? r("602291") : r("609708");
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)("img", {
                                    alt: "",
                                    className: b.upsellImage,
                                    src: g
                                }), (0, n.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: x.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                                }), (0, n.jsx)(D, {
                                    trialOffer: O,
                                    discountOffer: S,
                                    children: x.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                        planName: (0, L.getDisplayNameFromSku)(d),
                                        onClick: () => (0, R.transitionTo)(h.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, n.jsx)(G, {
                                subscriptionTier: d,
                                onClose: a,
                                analyticsLocationObject: {
                                    section: h.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                    object: h.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: O,
                                discountOffer: S
                            })]
                        });
                    case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                    case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                    case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                    case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                        let A;
                        switch (u) {
                            case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                                A = x.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                                    planName: (0, L.getDisplayNameFromSku)(d),
                                    premiumMaxSize: d === N.PremiumSubscriptionSKUs.TIER_0 ? x.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : x.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                                    onClick: () => {
                                        (0, R.transitionTo)(h.Routes.APPLICATION_STORE), null == a || a()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                                A = x.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, L.getDisplayNameFromSku)(d),
                                    onClick: () => {
                                        (0, R.transitionTo)(h.Routes.APPLICATION_STORE), null == a || a()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                                A = x.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                                    onClick: () => {
                                        (0, R.transitionTo)(h.Routes.APPLICATION_STORE), null == a || a(), (0, _.closeAllModals)()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                                A = x.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: h.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, R.transitionTo)(h.Routes.APPLICATION_STORE), null == a || a()
                                    }
                                })
                        }
                        return s(null != A, "There must be some upsell context"), (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: t
                                }), (0, n.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children: i
                                }), (0, n.jsx)(D, {
                                    trialOffer: O,
                                    discountOffer: S,
                                    children: A
                                })]
                            })
                        });
                    case N.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
                        return (0, n.jsxs)("div", {
                            className: b.contentContainer,
                            children: [(0, n.jsx)(f.Heading, {
                                variant: "heading-xl/bold",
                                color: "header-primary",
                                children: t
                            }), (0, n.jsx)(f.Text, {
                                variant: "text-md/normal",
                                children: i
                            }), (0, n.jsx)(D, {
                                trialOffer: O,
                                discountOffer: S,
                                children: x.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, L.getDisplayNameFromSku)(d),
                                    onClick: () => (0, R.transitionTo)(h.Routes.APPLICATION_STORE)
                                })
                            }), (0, n.jsx)(y, {
                                className: b.upsellButton,
                                subscriptionTier: d,
                                analyticsLocationObject: p,
                                onClose: a,
                                trialOffer: O,
                                discountOffer: S
                            })]
                        });
                    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                        return s(null != l, "You must specify children for this upsell type"), (0, n.jsx)(D, {
                            trialOffer: O,
                            discountOffer: S,
                            children: x.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                                onClick: () => {
                                    (0, R.transitionTo)(h.Routes.APPLICATION_STORE), (0, T.closeEditor)()
                                }
                            })
                        });
                    case N.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                        return (0, n.jsxs)("div", {
                            className: o(b.messageLengthUpsellContainer, {
                                [b.messageLengthUpsellAppearAnimation]: !C
                            }),
                            children: [(0, n.jsx)(f.Text, {
                                variant: "text-lg/bold",
                                color: "status-danger",
                                children: i
                            }), (0, n.jsx)(f.Heading, {
                                variant: "heading-lg/extrabold",
                                color: "header-primary",
                                className: b.messageLengthUpsellHeader,
                                children: x.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
                            }), (0, n.jsx)("div", {
                                className: b.divider
                            }), (0, n.jsx)(D, {
                                trialOffer: O,
                                discountOffer: S,
                                className: b.messageLengthBrandedContainer,
                                subscriptionTier: d,
                                children: x.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: h.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, R.transitionTo)(h.Routes.APPLICATION_STORE), null == a || a()
                                    }
                                })
                            }), (0, n.jsx)(y, {
                                subscriptionTier: d,
                                analyticsLocationObject: p,
                                onClose: a,
                                trialOffer: O,
                                discountOffer: S
                            })]
                        });
                    case N.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
                    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                        return (0, n.jsx)(B, {});
                    case N.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
                    case N.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
                    case N.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
                    case N.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
                    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
                    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
                    case N.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
                        return (0, n.jsx)(w, {
                            trialOffer: O,
                            discountOffer: S,
                            headingText: t,
                            context: i,
                            children: l
                        });
                    default:
                        return M.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, n.jsx)(w, {
                            headingText: t,
                            context: i,
                            children: l,
                            trialOffer: O,
                            discountOffer: S
                        })
                }
            }
        },
        400307: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                PremiumPillAndSparklesColorOptions: function() {
                    return o
                },
                PremiumPillWithSparkles: function() {
                    return er
                },
                Tier0Card: function() {
                    return ea
                },
                Tier2FeatureSet: function() {
                    return s
                },
                Tier2FeatureItems: function() {
                    return es
                },
                Tier2Card: function() {
                    return eu
                },
                default: function() {
                    return ed
                }
            });
            var n, i, l, o, a, s, u = r("37983");
            r("884691");
            var d = r("414456"),
                c = r.n(d),
                _ = r("866227"),
                E = r.n(_),
                f = r("446674"),
                I = r("669491"),
                m = r("819855"),
                T = r("77078"),
                R = r("225664"),
                P = r("841098"),
                p = r("812204"),
                O = r("685665"),
                S = r("441413"),
                L = r("432173"),
                M = r("915639"),
                C = r("697218"),
                U = r("521012"),
                g = r("594098"),
                A = r("491614"),
                N = r("716589"),
                h = r("46829"),
                x = r("118503"),
                b = r("41250"),
                v = r("379863"),
                F = r("216422"),
                D = r("619911"),
                y = r("698015"),
                j = r("75196"),
                G = r("719923"),
                B = r("153160"),
                w = r("182650"),
                H = r("154889"),
                k = r("917247"),
                K = r("641078"),
                W = r("992118"),
                V = r("646718"),
                Y = r("719347"),
                z = r("782340"),
                X = r("205988"),
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
                    ...l
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, j.default)({
                        ...l
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
                } = e, r = (0, P.default)(), n = (0, m.isThemeLight)(r);
                return (0, u.jsxs)(u.Fragment, {
                    children: [!n && (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("div", {
                            className: c(X.rimGlowVertical, {
                                [X.rimGlowVerticalTier0]: t === V.PremiumTypes.TIER_0,
                                [X.rimGlowVerticalTier2]: t === V.PremiumTypes.TIER_2
                            })
                        }), (0, u.jsx)($, {
                            foreground: X.buttonSparkleStar1
                        })]
                    }), (0, u.jsx)($, {
                        foreground: X.buttonSparkleStar2
                    }), (0, u.jsx)($, {
                        foreground: X.buttonSparkleStar3
                    }), (0, u.jsx)($, {
                        foreground: X.buttonSparkleStar4
                    }), (0, u.jsx)($, {
                        foreground: X.buttonSparkleStar5
                    })]
                })
            }

            function et(e) {
                let {
                    text: t,
                    className: r,
                    colorOptions: n = o.PREMIUM_TIER_2_WHITE_FILL
                } = e;
                return (0, u.jsx)("div", {
                    className: c(r, X.freeTrialPill, {
                        [X.freeTrialPillTier0GradientFill]: n === o.PREMIUM_TIER_0_GRADIENT_FILL,
                        [X.freeTrialPillTier2GradientFill]: n === o.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
                        [X.freeTrialPillTier2OldGradientFill]: n === o.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                    }),
                    children: (0, u.jsx)(T.Text, {
                        variant: "text-xs/bold",
                        className: c(X.freeTrialPillText, {
                            [X.freeTrialPillTextInverted]: n !== o.PREMIUM_TIER_0_WHITE_FILL && n !== o.PREMIUM_TIER_2_WHITE_FILL,
                            [X.freeTrialPillTextTier0]: n === o.PREMIUM_TIER_0_WHITE_FILL,
                            [X.freeTrialPillTextTier2]: n === o.PREMIUM_TIER_2_WHITE_FILL
                        }),
                        children: t
                    })
                })
            }

            function er(e) {
                let t, {
                    text: r,
                    className: n,
                    colorOptions: i = o.PREMIUM_TIER_2_WHITE_FILL
                } = e;
                switch (i) {
                    case o.PREMIUM_TIER_0_GRADIENT_FILL:
                        t = I.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
                        break;
                    case o.PREMIUM_TIER_2_NEW_GRADIENT_FILL:
                        t = "url(#".concat(Q, ")");
                        break;
                    case o.PREMIUM_TIER_2_OLD_GRADIENT_FILL:
                        t = "url(#".concat(q, ")");
                        break;
                    case o.PREMIUM_TIER_0_WHITE_FILL:
                    case o.PREMIUM_TIER_2_WHITE_FILL:
                    default:
                        t = "white"
                }
                return (0, u.jsxs)("div", {
                    className: c(n, X.freeTrialPillWithSparkles),
                    children: [(0, u.jsx)($, {
                        foreground: X.sparkleStar1,
                        color: t
                    }), (0, u.jsx)($, {
                        foreground: X.sparkleStar2,
                        color: t
                    }), (0, u.jsx)($, {
                        foreground: X.sparkleStar3,
                        color: t
                    }), (0, u.jsx)(et, {
                        text: r,
                        colorOptions: i
                    }), (0, u.jsx)($, {
                        foreground: X.sparkleStar4,
                        color: t
                    }), (0, u.jsx)($, {
                        foreground: X.sparkleStar5,
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
                    ...(0, j.default)({
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
                    className: X.item,
                    children: [(0, u.jsx)(t, {
                        className: X.icon
                    }), (0, u.jsx)(T.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: r
                    }), n ? (0, u.jsx)(S.default, {
                        className: X.newTagItem,
                        forceUseColorForSparkles: !0,
                        shouldInheritBackgroundColor: !0,
                        shouldInheritTextColor: !0
                    }) : null]
                })
            }

            function el(e) {
                var t, r, n, i;
                let {
                    isGift: l,
                    premiumTier: o,
                    offerTierMatchesCard: s,
                    offerType: d,
                    showYearlyPrice: c
                } = e, _ = (0, f.useStateFromStores)([U.default], () => U.default.getPremiumTypeSubscription()), I = (0, f.useStateFromStores)([C.default], () => C.default.getCurrentUser()), m = (0, w.useHasDiscountApplied)(), R = o === V.PremiumTypes.TIER_0 ? V.PremiumSubscriptionSKUs.TIER_0 : V.PremiumSubscriptionSKUs.TIER_2, P = (null == _ ? void 0 : _.trialId) != null ? null == I ? void 0 : I.premiumType : m ? V.PremiumTypes.TIER_2 : null, p = (0, k.usePremiumTrialOffer)(), O = null == p ? void 0 : p.subscription_trial;
                if (!l && null != P && o === P && null != _ && null != _.planIdFromItems) {
                    let e = null != _.trialEndsAt ? E(null == _ ? void 0 : _.trialEndsAt).diff(E(), "d") : 0,
                        t = V.SubscriptionPlanInfo[_.planIdFromItems],
                        r = G.default.formatPriceString(G.default.getDefaultPrice(t.id), t.interval);
                    return (0, u.jsx)(u.Fragment, {
                        children: (0, u.jsx)(T.Heading, {
                            variant: "heading-md/normal",
                            color: "always-white",
                            className: X.trialHeader,
                            children: d === a.PREMIUM_TRIAL ? z.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                remainingTime: e,
                                price: r
                            }) : z.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION.format({
                                percent: 30,
                                regularPrice: r
                            })
                        })
                    })
                }
                if (!l && s) {
                    let e = G.default.formatPriceString(G.default.getDefaultPrice(o === V.PremiumTypes.TIER_0 ? V.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : V.SubscriptionPlans.PREMIUM_MONTH_TIER_2), V.SubscriptionIntervalTypes.MONTH);
                    return (0, u.jsx)(T.Heading, {
                        variant: "heading-md/normal",
                        color: "always-white",
                        className: X.trialHeader,
                        children: d === a.PREMIUM_TRIAL ? z.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                            planName: (0, G.getTierDisplayName)(null !== (r = V.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (t = null == O ? void 0 : O.sku_id) && void 0 !== t ? t : V.PremiumSubscriptionSKUs.NONE]) && void 0 !== r ? r : V.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                            duration: (0, G.formatIntervalDuration)({
                                intervalType: null !== (n = null == O ? void 0 : O.interval) && void 0 !== n ? n : V.SubscriptionIntervalTypes.DAY,
                                intervalCount: null !== (i = null == O ? void 0 : O.interval_count) && void 0 !== i ? i : 30,
                                capitalize: !1
                            }),
                            price: e
                        }) : z.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION.format({
                            discountedPrice: "$6.99",
                            regularPrice: e
                        })
                    })
                }
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(W.default, {
                        subscriptionTier: R,
                        isGift: l,
                        className: X.price
                    }), c && (0, u.jsx)(W.default, {
                        subscriptionTier: R,
                        interval: V.SubscriptionIntervalTypes.YEAR,
                        isGift: l,
                        className: X.price
                    })]
                })
            }

            function eo() {
                let {
                    enabled: e,
                    hasUnlimited: t
                } = (0, R.useBurstReactionsExperiment)();
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(ei, {
                        Icon: y.default,
                        text: z.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, G.getMaxFileSizeForPremiumType)(V.PremiumTypes.TIER_0, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(ei, {
                        Icon: h.default,
                        text: z.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), e ? (0, u.jsx)(ei, {
                        Icon: A.default,
                        text: t ? z.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED : z.default.Messages.PREMIUM_TIER_SUPER_REACTIONS_ITEM.format({
                            weeklyReactionsNumber: L.BurstRefillTierAmounts.TIER_0
                        })
                    }) : null, (0, u.jsx)(ei, {
                        Icon: F.default,
                        text: z.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
                    })]
                })
            }

            function ea(e) {
                var t;
                let {
                    showWumpus: r,
                    showBadge: n,
                    ctaButton: i,
                    showYearlyPrice: l,
                    className: s,
                    isGift: d = !1
                } = e, _ = (0, f.useStateFromStores)([U.default], () => U.default.getPremiumTypeSubscription()), E = (0, f.useStateFromStores)([C.default], () => C.default.getCurrentUser()), I = (0, k.usePremiumTrialOffer)(), m = null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id, T = (null == _ ? void 0 : _.trialId) != null, R = (null == _ ? void 0 : _.trialId) != null ? null == E ? void 0 : E.premiumType : null, P = null != m || T;
                return (0, u.jsxs)("div", {
                    className: c(X.tier0, X.card, s, {
                        [X.withTier0Rim]: !d && P,
                        [X.withCardHover]: !d && P
                    }),
                    children: [m === V.PremiumSubscriptionSKUs.TIER_0 ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: z.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: X.topRimPill,
                            colorOptions: o.PREMIUM_TIER_0_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier0
                        })]
                    }) : null, n && (0, u.jsx)(en, {
                        className: X.newCircleIcon
                    }), r ? (0, u.jsx)("div", {
                        className: X.wumpusImageContainer,
                        children: (0, u.jsx)(g.default, {
                            src: Z,
                            mediaLayoutType: Y.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, d || m !== V.PremiumSubscriptionSKUs.TIER_0 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: z.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: X.topRimPill,
                            colorOptions: o.PREMIUM_TIER_0_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier0
                        })]
                    }), d || R !== V.PremiumTypes.TIER_0 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: z.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: X.topRimPill,
                            colorOptions: o.PREMIUM_TIER_0_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier0
                        })]
                    }), (0, u.jsx)("div", {
                        children: (0, u.jsxs)("div", {
                            className: X.body,
                            children: [(0, u.jsx)("div", {
                                className: X.tier0LogoContainer,
                                children: (0, u.jsx)(v.default, {
                                    className: c(X.tier0Title, X.title)
                                })
                            }), (0, u.jsx)(el, {
                                isGift: d,
                                premiumTier: V.PremiumTypes.TIER_0,
                                offerType: a.PREMIUM_TRIAL,
                                offerTierMatchesCard: m === V.PremiumSubscriptionSKUs.TIER_0,
                                showYearlyPrice: l
                            }), (0, u.jsx)(eo, {})]
                        })
                    }), i, d || m !== V.PremiumSubscriptionSKUs.TIER_0 ? null : (0, u.jsx)(ee, {
                        tier: V.PremiumTypes.TIER_0
                    })]
                })
            }

            function es(e) {
                let {
                    featureSet: t = s.DEFAULT
                } = e, {
                    enabled: r,
                    hasUnlimited: n
                } = (0, R.useBurstReactionsExperiment)(), i = (0, f.useStateFromStores)([M.default], () => M.default.locale);
                if (t === s.BOOSTING) return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(ei, {
                        Icon: x.default,
                        text: z.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                            numBoosts: V.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            percentageOff: (0, B.formatPercent)(i, V.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, u.jsx)(ei, {
                        Icon: y.default,
                        text: z.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, G.getMaxFileSizeForPremiumType)(V.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(ei, {
                        Icon: h.default,
                        text: z.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, u.jsx)(ei, {
                        Icon: D.default,
                        text: z.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, u.jsx)(ei, {
                        Icon: N.default,
                        text: z.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })]
                });
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(ei, {
                        Icon: y.default,
                        text: z.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, G.getMaxFileSizeForPremiumType)(V.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(ei, {
                        Icon: h.default,
                        text: z.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), r ? (0, u.jsx)(ei, {
                        Icon: A.default,
                        text: n ? z.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED : z.default.Messages.PREMIUM_TIER_SUPER_REACTIONS_ITEM.format({
                            weeklyReactionsNumber: L.BurstRefillTierAmounts.TIER_2
                        })
                    }) : null, (0, u.jsx)(ei, {
                        Icon: D.default,
                        text: z.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, u.jsx)(ei, {
                        Icon: x.default,
                        text: z.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
                    }), (0, u.jsx)(ei, {
                        Icon: N.default,
                        text: z.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })]
                })
            }

            function eu(e) {
                var t, r, n;
                let {
                    showWumpus: i,
                    ctaButton: l,
                    showYearlyPrice: d,
                    featureSet: _ = s.DEFAULT,
                    className: E,
                    isGift: I = !1
                } = e, m = (0, f.useStateFromStores)([U.default], () => U.default.getPremiumTypeSubscription()), R = (0, f.useStateFromStores)([C.default], () => C.default.getCurrentUser()), P = (0, k.usePremiumTrialOffer)(), p = null == P ? void 0 : null === (t = P.subscription_trial) || void 0 === t ? void 0 : t.sku_id, O = (null == m ? void 0 : m.trialId) != null ? null == R ? void 0 : R.premiumType : null, S = (0, w.useIsInPremiumOfferExperience)(), L = (0, H.usePremiumDiscountOffer)(), M = (0, w.useHasDiscountApplied)(), A = null != p || null != O ? a.PREMIUM_TRIAL : null != L || M ? a.PREMIUM_DISCOUNT : null, N = (0, K.useIsEligibleForBogoPromotion)(), h = (0, K.getBOGOPillCopy)();
                return (0, u.jsxs)("div", {
                    className: c(X.tier2, X.card, E, {
                        [X.withTier2Rim]: !I && S,
                        [X.withCardHover]: !I && S
                    }),
                    children: [!I && null != L && (0, H.discountOfferHasTier)(L, V.PremiumSubscriptionSKUs.TIER_2) && (null === (r = L.discount) || void 0 === r ? void 0 : r.amount) !== void 0 ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: z.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                                percent: null === (n = L.discount) || void 0 === n ? void 0 : n.amount
                            }),
                            className: X.topRimPill,
                            colorOptions: o.PREMIUM_TIER_2_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier2
                        })]
                    }) : null, I || p !== V.PremiumSubscriptionSKUs.TIER_2 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: z.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: X.topRimPill,
                            colorOptions: o.PREMIUM_TIER_2_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier2
                        })]
                    }), I || O !== V.PremiumTypes.TIER_2 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: z.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: X.topRimPill,
                            colorOptions: o.PREMIUM_TIER_2_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier2
                        })]
                    }), !I && M && (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(er, {
                            text: z.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                            className: X.topRimPill,
                            colorOptions: o.PREMIUM_TIER_2_WHITE_FILL
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier2
                        })]
                    }), i ? (0, u.jsx)("div", {
                        className: X.wumpusImageContainer,
                        children: (0, u.jsx)(g.default, {
                            src: J,
                            mediaLayoutType: Y.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, (0, u.jsxs)("div", {
                        children: [(0, u.jsx)(b.default, {
                            className: c(X.tier2Title, X.title)
                        }), !I && p !== V.PremiumSubscriptionSKUs.TIER_2 && N && (0, u.jsx)(T.Text, {
                            variant: "text-xs/bold",
                            className: X.freeTrialPillInline,
                            children: h
                        }), (0, u.jsx)(el, {
                            isGift: I,
                            premiumTier: V.PremiumTypes.TIER_2,
                            offerType: A,
                            offerTierMatchesCard: p === V.PremiumSubscriptionSKUs.TIER_2 || (0, H.discountOfferHasTier)(L, V.PremiumSubscriptionSKUs.TIER_2),
                            showYearlyPrice: d
                        }), (0, u.jsx)(es, {
                            featureSet: _
                        })]
                    }), l, I || p !== V.PremiumSubscriptionSKUs.TIER_2 && null == L ? null : (0, u.jsx)(ee, {
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
                    className: l
                } = e, {
                    AnalyticsLocationProvider: o
                } = (0, O.default)(p.default.PREMIUM_MARKETING_TIER_CARD);
                return (0, u.jsx)(o, {
                    children: (0, u.jsxs)("div", {
                        className: c(X.premiumCards, l),
                        children: [(0, u.jsx)(ea, {
                            showWumpus: t,
                            showBadge: r,
                            ctaButton: n
                        }), (0, u.jsx)(eu, {
                            showWumpus: t,
                            ctaButton: i
                        })]
                    })
                })
            }(n = o || (o = {}))[n.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", n[n.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", n[n.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", n[n.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", n[n.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", (i = a || (a = {}))[i.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", i[i.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (l = s || (s = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.BOOSTING = 1] = "BOOSTING"
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
                l = r.n(i),
                o = r("446674"),
                a = r("77078"),
                s = r("10514"),
                u = r("719923"),
                d = r("646718"),
                c = r("449001"),
                _ = function(e) {
                    let {
                        subscriptionTier: t,
                        interval: r = d.SubscriptionIntervalTypes.MONTH,
                        className: i,
                        isGift: _ = !1
                    } = e, E = (0, o.useStateFromStores)([s.default], () => s.default.isLoadedForPremiumSKUs());
                    if (!E) return (0, n.jsx)(a.Spinner, {
                        type: a.Spinner.Type.PULSING_ELLIPSIS,
                        className: c.priceSpinner
                    });
                    let f = s.default.getForSkuAndInterval(t, r),
                        I = null != f ? (0, u.getFormattedPriceForPlan)(f, void 0, !1, _) : null;
                    return (0, n.jsxs)(a.Heading, {
                        color: "always-white",
                        variant: "heading-md/medium",
                        className: l(c.pricePerInterval, i),
                        children: [(0, n.jsx)("span", {
                            className: c.price,
                            children: I
                        }), " / ", (0, u.getIntervalStringAsNoun)(r)]
                    })
                }
        }
    }
]);
//# sourceMappingURL=9c1031e2598383265675.js.map