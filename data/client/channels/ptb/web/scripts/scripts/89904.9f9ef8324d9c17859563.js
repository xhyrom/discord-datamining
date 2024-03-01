(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89904"], {
        809071: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return E
                },
                useSubscriptionInvoicePreview: function() {
                    return R
                },
                useGetSubscriptionInvoice: function() {
                    return I
                },
                getItemUnitPriceWithDiscount: function() {
                    return L
                }
            }), r("222007");
            var n = r("884691"),
                i = r("446674"),
                l = r("872717"),
                u = r("448993"),
                s = r("195358"),
                a = r("521012"),
                f = r("719923"),
                o = r("49111");
            async function _(e) {
                let {
                    items: t,
                    paymentSourceId: r,
                    trialId: n,
                    code: i,
                    applyEntitlements: a = !1,
                    currency: _,
                    renewal: E,
                    metadata: c
                } = e;
                t = (0, f.coerceExistingItemsToNewItemInterval)(t);
                let d = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...r
                        } = e;
                        return {
                            ...r,
                            plan_id: t
                        }
                    }),
                    payment_source_id: r,
                    trial_id: n,
                    code: i,
                    apply_entitlements: a,
                    currency: _,
                    renewal: E,
                    metadata: c
                };
                try {
                    let e = await l.default.post({
                        url: o.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: d,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new u.BillingError(e)
                }
            }
            async function E(e) {
                let {
                    subscriptionId: t,
                    items: r,
                    paymentSourceId: n,
                    renewal: i,
                    currency: a,
                    applyEntitlements: _ = !1,
                    analyticsLocations: E,
                    analyticsLocation: c,
                    userDiscountOfferId: d
                } = e;
                null != r && (r = (0, f.coerceExistingItemsToNewItemInterval)(r));
                let R = {
                    items: null == r ? void 0 : r.map(e => {
                        let {
                            planId: t,
                            ...r
                        } = e;
                        return {
                            ...r,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    renewal: i,
                    apply_entitlements: _,
                    currency: a,
                    user_discount_offer_id: d
                };
                try {
                    let e = await l.default.patch({
                        url: o.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: c,
                            location_stack: E
                        },
                        body: R,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new u.BillingError(e)
                }
            }
            async function c(e) {
                let {
                    subscriptionId: t,
                    preventFetch: r
                } = e;
                if (r) return null;
                let n = await l.default.get({
                    url: o.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return s.default.createInvoiceFromServer(n.body)
            }

            function d(e, t) {
                let {
                    preventFetch: r = !1
                } = e, [l, u] = (0, n.useState)(null), [s, f] = (0, n.useState)(null), o = (0, i.useStateFromStores)([a.default], () => a.default.getSubscriptions());
                return (0, n.useEffect)(() => {
                    let e = !1;
                    async function n() {
                        try {
                            f(null), u(null);
                            let r = await t();
                            !e && u(r)
                        } catch (t) {
                            !e && f(t)
                        }
                    }
                    return !r && n(), () => {
                        e = !0
                    }
                }, [r, t, o]), [l, s]
            }

            function R(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...r
                    } = e;
                    e = r
                }
                let t = (0, n.useCallback)(() => "subscriptionId" in e ? E(e) : "items" in e ? _(e) : null, [JSON.stringify(e)]);
                return d(e, t)
            }

            function I(e) {
                let t = (0, n.useCallback)(() => c(e), [JSON.stringify(e)]);
                return d(e, t)
            }

            function L(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(r => {
                    let n = r.amount / e.quantity;
                    t -= n
                }), t
            }
        },
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
                    return o
                },
                resolveReferralTrialOffer: function() {
                    return _
                }
            });
            var n = r("872717"),
                i = r("913144"),
                l = r("819689"),
                u = r("18494"),
                s = r("49111");
            let a = () => (i.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), n.default.get({
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
                }), n.default.post({
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
            async function o(e) {
                try {
                    var t;
                    let r = await n.default.post({
                            url: s.Endpoints.CREATE_REFERRAL(e),
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
                        }), e.body.code === s.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = u.default.getCurrentlySelectedChannelId();
                        null != t && l.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function _(e) {
                try {
                    var t;
                    let r = await n.default.get({
                            url: s.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
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
                    return h
                }
            }), r("222007");
            var n = r("637612"),
                i = r("446674"),
                l = r("913144"),
                u = r("697218"),
                s = r("179935"),
                a = r("49111");
            let f = null,
                o = {},
                _ = [],
                E = new Set,
                c = !1,
                d = new Set,
                R = new Set,
                I = {},
                L = 0,
                S = null,
                O = () => !0;

            function T(e) {
                d.add(e)
            }

            function A(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => p(e))
            }

            function p(e) {
                let t = e.type === n.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!R.has(t) && !d.has(t)) {
                    var r;
                    r = t, d.add(r), l.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(a.NOOP_NULL))
                }
            }
            class F extends i.default.Store {
                initialize() {
                    this.waitFor(u.default), this.syncWith([u.default], O)
                }
                checkAndFetchReferralsRemaining() {
                    null == f && !c && L < 5 && (null == S || S < Date.now()) && (0, s.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), f
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == _ ? [] : _
                }
                isFetchingReferralsRemaining() {
                    return c
                }
                isFetchingRecipientEligibility(e) {
                    return E.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === o[e] && !E.has(e) && (0, s.checkRecipientEligibility)(e), o[e]
                }
                getRelevantUserTrialOffer(e) {
                    return I[e]
                }
                isResolving(e) {
                    return d.has(e)
                }
            }
            F.displayName = "ReferralTrialStore";
            var h = new F(l.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: r
                    } = e;
                    if (!c && (0, s.fetchReferralsRemaining)(), !E.has(r) && (0, s.checkRecipientEligibility)(r), !d.has(t)) {
                        var n;
                        n = t, d.add(n), l.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(a.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    c = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: r
                    } = e;
                    c = !1, f = t, _ = r
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    c = !1, L += 1, S = Date.now() + 1e3 * Math.pow(2, L)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    E.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: r
                    } = e;
                    o[t] = r, E.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    o[t] = !1, E.delete(t)
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
                    null != t && (d.delete(t.id), R.add(t.id), I[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    d.delete(t), R.add(t)
                },
                LOAD_MESSAGES_SUCCESS: A,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    p(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: A,
                LOGOUT: function() {
                    f = null, o = {}, _ = [], E = new Set, c = !1, d = new Set, R = new Set, I = {}, L = 0, S = null
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
            var n = r("65597"),
                i = r("340412"),
                l = r("540692"),
                u = r("833516"),
                s = r("646718");

            function a(e) {
                var t, r, a;
                let f = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    o = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    _ = (0, u.useTrialOffer)(i.default.getAnyOfUserTrialOfferId([s.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, s.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    E = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    c = (0, n.default)([l.default], () => void 0 === e ? null : l.default.getRelevantUserTrialOffer(e));
                return null !== (a = null !== (r = null !== (t = null != c ? c : f) && void 0 !== t ? t : o) && void 0 !== r ? r : _) && void 0 !== a ? a : E
            }
        },
        833516: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hasUserTrialOfferExpired: function() {
                    return f
                },
                useTrialOffer: function() {
                    return o
                }
            }), r("222007");
            var n = r("884691"),
                i = r("446674"),
                l = r("862337"),
                u = r("697218"),
                s = r("340412"),
                a = r("719923");

            function f(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function o(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.getUserTrialOffer(e)),
                    [r, o] = n.useState(f(t)),
                    _ = (0, i.useStateFromStores)([u.default], () => (0, a.isPremium)(u.default.getCurrentUser()));
                return n.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new l.Timeout,
                            n = () => {
                                let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(i, () => {
                                    !r && f(t) ? o(!0) : n()
                                })
                            };
                        return n(), () => e.stop()
                    }
                }, [r, t]), r || _ ? null : t
            }
        },
        340412: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return R
                }
            }), r("222007");
            var n = r("446674"),
                i = r("913144"),
                l = r("697218"),
                u = r("719923"),
                s = r("521012"),
                a = r("646718");
            let f = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscountOffers: {},
                    userDiscounts: void 0
                },
                o = f;

            function _() {
                o.userTrialOffers = {}, o.userDiscountOffers = {}, o.userOffersLastFetchedAtDate = void 0
            }
            let E = () => !0;

            function c() {
                let e = s.default.getPremiumTypeSubscription();
                return null != e && (o.userTrialOffers = {}, o.userDiscountOffers = {}, !0)
            }
            class d extends n.default.PersistedStore {
                initialize(e) {
                    o = null != e ? e : f, this.waitFor(l.default), this.syncWith([l.default], E), this.syncWith([s.default], c)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return o.userTrialOffers[e]
                }
                getUserDiscountOffer(e) {
                    if (null !== e) return o.userDiscountOffers[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != o.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != o.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = o.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAlmostExpiringTrialOffers(e) {
                    let t = Object.values(a.SubscriptionTrials).map(e => e.id),
                        r = l.default.getCurrentUser();
                    return (0, u.isPremium)(r) ? [] : Object.values(o.userTrialOffers).filter(r => t.includes(r.trial_id) && null != r.expires_at && null != r.subscription_trial && e.includes(r.subscription_trial.sku_id) && Date.parse(r.expires_at) < Date.now() + a.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
                }
                getAcknowledgedOffers(e) {
                    let t = l.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    var e;
                    let t = l.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(null !== (e = o.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = l.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(o.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return o
                }
                forceReset() {
                    _()
                }
            }
            d.displayName = "UserOfferStore", d.persistKey = "UserOfferStore", d.migrations = [e => {
                let t = null == e ? void 0 : e.userDiscounts;
                if (null != t) return {
                    ...e,
                    userDiscountOffers: t
                }
            }];
            var R = new d(i.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? o.userTrialOffers[t.trial_id] = t : _(), o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? o.userTrialOffers[t.trial_id] = t : o.userTrialOffers = {}, o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: r,
                        userDiscountOffer: n
                    } = e;
                    null == t && null == r && null == n && _(), null != t ? (o.userTrialOffers[t.trial_id] = t, o.userDiscountOffers = {}) : null != r ? (o.userDiscountOffers[r.discount_id] = r, o.userTrialOffers = {}) : null != n && (o.userDiscountOffers[n.discount_id] = n, o.userTrialOffers = {}), o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: r,
                        userDiscountOffer: n
                    } = e;
                    null != t ? o.userTrialOffers[t.trial_id] = t : o.userTrialOffers = {}, null != r ? o.userDiscountOffers[r.discount_id] = r : null != n ? o.userDiscountOffers[n.discount_id] = n : o.userDiscountOffers = {}, o.userOffersLastFetchedAtDate = Date.now()
                },
                LOGOUT: _
            })
        }
    }
]);
//# sourceMappingURL=89904.9f9ef8324d9c17859563.js.map