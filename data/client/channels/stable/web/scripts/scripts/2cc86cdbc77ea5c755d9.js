(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75851"], {
        179935: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchReferralsRemaining: function() {
                    return a
                },
                checkRecipientEligibility: function() {
                    return f
                },
                createReferralTrial: function() {
                    return E
                },
                resolveReferralTrialOffer: function() {
                    return _
                }
            });
            var l = r("872717"),
                i = r("913144"),
                n = r("819689"),
                u = r("18494"),
                s = r("49111");
            let a = () => (i.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), l.default.get({
                    url: s.Endpoints.GET_REFERRALS_REMAINING,
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
                f = e => (i.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), l.default.post({
                    url: s.Endpoints.CREATE_REFERRAL_PREVIEW(e),
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
            async function E(e) {
                try {
                    var t;
                    let r = await l.default.post({
                            url: s.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        n = null !== (t = r.body) && void 0 !== t ? t : null;
                    return i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: n
                    }), {
                        userTrialOffer: n
                    }
                } catch (e) {
                    if (i.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === s.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = u.default.getCurrentlySelectedChannelId();
                        null != t && n.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function _(e) {
                try {
                    var t;
                    let r = await l.default.get({
                            url: s.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        n = null !== (t = r.body) && void 0 !== t ? t : null;
                    return i.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: n
                    }), {
                        userTrialOffer: n
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
                    return p
                }
            });
            var l = r("637612"),
                i = r("446674"),
                n = r("913144"),
                u = r("697218"),
                s = r("179935"),
                a = r("49111");
            let f = null,
                E = {},
                _ = [],
                R = new Set,
                d = !1,
                c = new Set,
                o = new Set,
                I = {},
                L = 0,
                T = null,
                A = () => !0;

            function S(e) {
                c.add(e)
            }

            function O(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => F(e))
            }

            function F(e) {
                let t = e.type === l.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!o.has(t) && !c.has(t)) {
                    var r;
                    r = t, c.add(r), n.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(a.NOOP_NULL))
                }
            }
            class h extends i.default.Store {
                initialize() {
                    this.waitFor(u.default), this.syncWith([u.default], A)
                }
                checkAndFetchReferralsRemaining() {
                    null == f && !d && L < 5 && (null == T || T < Date.now()) && (0, s.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), f
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == _ ? [] : _
                }
                isFetchingReferralsRemaining() {
                    return d
                }
                isFetchingRecipientEligibility(e) {
                    return R.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === E[e] && !R.has(e) && (0, s.checkRecipientEligibility)(e), E[e]
                }
                getRelevantUserTrialOffer(e) {
                    return I[e]
                }
                isResolving(e) {
                    return c.has(e)
                }
            }
            h.displayName = "ReferralTrialStore";
            var p = new h(n.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: r
                    } = e;
                    if (!d && (0, s.fetchReferralsRemaining)(), !R.has(r) && (0, s.checkRecipientEligibility)(r), !c.has(t)) {
                        var l;
                        l = t, c.add(l), n.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(a.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    d = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: r
                    } = e;
                    d = !1, f = t, _ = r
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    d = !1, L += 1, T = Date.now() + 1e3 * Math.pow(2, L)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    R.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: r
                    } = e;
                    E[t] = r, R.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    E[t] = !1, R.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, s.fetchReferralsRemaining)(), I[t.id] = t, _ = [..._, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (c.delete(t.id), o.add(t.id), I[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    c.delete(t), o.add(t)
                },
                LOAD_MESSAGES_SUCCESS: O,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    F(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: O,
                LOGOUT: function() {
                    f = null, E = {}, _ = [], R = new Set, d = !1, c = new Set, o = new Set, I = {}, L = 0, T = null
                }
            })
        },
        917247: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                usePremiumTrialOffer: function() {
                    return a
                }
            });
            var l = r("65597"),
                i = r("340412"),
                n = r("540692"),
                u = r("833516"),
                s = r("646718");

            function a(e) {
                var t, r, a, f;
                let E = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    _ = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    R = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    d = (0, u.useTrialOffer)(i.default.getAnyOfUserTrialOfferId([s.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, s.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    c = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    o = (0, l.default)([n.default], () => void 0 === e ? null : n.default.getRelevantUserTrialOffer(e));
                return null !== (f = null !== (a = null !== (r = null !== (t = null != E ? E : o) && void 0 !== t ? t : _) && void 0 !== r ? r : R) && void 0 !== a ? a : d) && void 0 !== f ? f : c
            }
        },
        833516: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hasUserTrialOfferExpired: function() {
                    return f
                },
                useTrialOffer: function() {
                    return E
                }
            });
            var l = r("884691"),
                i = r("446674"),
                n = r("862337"),
                u = r("697218"),
                s = r("340412"),
                a = r("719923");

            function f(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function E(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.getUserTrialOffer(e)),
                    [r, E] = l.useState(f(t)),
                    _ = (0, i.useStateFromStores)([u.default], () => (0, a.isPremium)(u.default.getCurrentUser()));
                return l.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new n.Timeout,
                            l = () => {
                                let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(i, () => {
                                    !r && f(t) ? E(!0) : l()
                                })
                            };
                        return l(), () => e.stop()
                    }
                }, [r, t]), r || _ ? null : t
            }
        },
        340412: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var l = r("446674"),
                i = r("913144"),
                n = r("697218"),
                u = r("719923"),
                s = r("521012"),
                a = r("646718");
            let f = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscounts: {}
                },
                E = f;

            function _() {
                E.userTrialOffers = {}, E.userDiscounts = {}, E.userOffersLastFetchedAtDate = void 0
            }
            let R = () => !0;

            function d() {
                let e = s.default.getPremiumTypeSubscription();
                return null != e && (E.userTrialOffers = {}, E.userDiscounts = {}, !0)
            }
            class c extends l.default.PersistedStore {
                initialize(e) {
                    E = null != e ? e : f, this.waitFor(n.default), this.syncWith([n.default], R), this.syncWith([s.default], d)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return E.userTrialOffers[e]
                }
                getUserDiscount(e) {
                    if (null !== e) return E.userDiscounts[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != E.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != E.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = E.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAlmostExpiringTrialOffers(e) {
                    let t = Object.values(a.SubscriptionTrials).map(e => e.id),
                        r = n.default.getCurrentUser();
                    return (0, u.isPremium)(r) ? [] : Object.values(E.userTrialOffers).filter(r => t.includes(r.trial_id) && null != r.expires_at && null != r.subscription_trial && e.includes(r.subscription_trial.sku_id) && Date.parse(r.expires_at) < Date.now() + a.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
                }
                getAcknowledgedOffers(e) {
                    let t = n.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(E.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = n.default.getCurrentUser();
                    return (0, u.isPremium)(e) ? [] : Object.values(E.userDiscounts).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = n.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(E.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(E.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return E
                }
                forceReset() {
                    _()
                }
            }
            c.displayName = "UserOfferStore", c.persistKey = "UserOfferStore";
            var o = new c(i.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? E.userTrialOffers[t.trial_id] = t : _(), E.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    E.userTrialOffers[t.trial_id] = t, E.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: r
                    } = e;
                    null == t && null == r && _(), null != t ? (E.userTrialOffers[t.trial_id] = t, E.userDiscounts = {}) : null != r && (E.userDiscounts[r.discount_id] = r, E.userTrialOffers = {}), E.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: r
                    } = e;
                    (null != t || null != r) && (null != t && (E.userTrialOffers[t.trial_id] = t), null != r && (E.userDiscounts[r.discount_id] = r), E.userOffersLastFetchedAtDate = Date.now())
                },
                LOGOUT: _
            })
        }
    }
]);
//# sourceMappingURL=2cc86cdbc77ea5c755d9.js.map