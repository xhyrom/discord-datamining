(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83746"], {
        5082: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getItemUnitPriceWithDiscount: function() {
                    return L
                },
                updateSubscriptionInvoicePreview: function() {
                    return _
                },
                useGetSubscriptionInvoice: function() {
                    return I
                },
                useSubscriptionInvoicePreview: function() {
                    return R
                }
            });
            var i = r("470079"),
                n = r("661223"),
                l = r("454836"),
                u = r("253842"),
                s = r("139270"),
                a = r("416573"),
                f = r("488867"),
                c = r("467006");
            async function E(e) {
                let {
                    items: t,
                    paymentSourceId: r,
                    trialId: i,
                    code: n,
                    applyEntitlements: a = !1,
                    currency: E,
                    renewal: _,
                    metadata: o
                } = e, d = {
                    items: (t = (0, f.coerceExistingItemsToNewItemInterval)(t)).map(e => {
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
                    trial_id: i,
                    code: n,
                    apply_entitlements: a,
                    currency: E,
                    renewal: _,
                    metadata: o
                };
                try {
                    let e = await l.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: d,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new u.BillingError(e)
                }
            }
            async function _(e) {
                let {
                    subscriptionId: t,
                    items: r,
                    paymentSourceId: i,
                    renewal: n,
                    currency: a,
                    applyEntitlements: E = !1,
                    analyticsLocations: _,
                    analyticsLocation: o,
                    userDiscountOfferId: d
                } = e;
                null != r && (r = (0, f.coerceExistingItemsToNewItemInterval)(r));
                let R = {
                    items: r?.map(e => {
                        let {
                            planId: t,
                            ...r
                        } = e;
                        return {
                            ...r,
                            plan_id: t
                        }
                    }),
                    payment_source_id: i,
                    renewal: n,
                    apply_entitlements: E,
                    currency: a,
                    userDiscountOfferId: d
                };
                try {
                    let e = await l.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: o,
                            location_stack: _
                        },
                        body: R,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new u.BillingError(e)
                }
            }
            async function o(e) {
                let {
                    subscriptionId: t,
                    preventFetch: r
                } = e;
                if (r) return null;
                let i = await l.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return s.default.createInvoiceFromServer(i.body)
            }

            function d(e, t) {
                let {
                    preventFetch: r = !1
                } = e, [l, u] = (0, i.useState)(null), [s, f] = (0, i.useState)(null), c = (0, n.useStateFromStores)([a.default], () => a.default.getSubscriptions());
                return (0, i.useEffect)(() => {
                    let e = !1;
                    async function i() {
                        try {
                            f(null), u(null);
                            let r = await t();
                            !e && u(r)
                        } catch (t) {
                            !e && f(t)
                        }
                    }
                    return !r && i(), () => {
                        e = !0
                    }
                }, [r, t, c]), [l, s]
            }

            function R(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...r
                    } = e;
                    e = r
                }
                let t = (0, i.useCallback)(() => "subscriptionId" in e ? _(e) : "items" in e ? E(e) : null, [JSON.stringify(e)]);
                return d(e, t)
            }

            function I(e) {
                let t = (0, i.useCallback)(() => o(e), [JSON.stringify(e)]);
                return d(e, t)
            }

            function L(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(r => {
                    let i = r.amount / e.quantity;
                    t -= i
                }), t
            }
        },
        480643: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                checkRecipientEligibility: function() {
                    return f
                },
                createReferralTrial: function() {
                    return c
                },
                fetchReferralsRemaining: function() {
                    return a
                },
                resolveReferralTrialOffer: function() {
                    return E
                }
            });
            var i = r("454836"),
                n = r("312916"),
                l = r("389920"),
                u = r("232733"),
                s = r("467006");
            let a = () => (n.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), i.default.get({
                    url: s.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    n.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    n.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                f = e => (n.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), i.default.post({
                    url: s.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    n.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    n.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function c(e) {
                try {
                    let t = (await i.default.post({
                        url: s.Endpoints.CREATE_REFERRAL(e),
                        oldFormErrors: !0
                    })).body ?? null;
                    return n.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: t
                    }), {
                        userTrialOffer: t
                    }
                } catch (e) {
                    if (n.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === s.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = u.default.getCurrentlySelectedChannelId();
                        null != t && l.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function E(e) {
                try {
                    let t = (await i.default.get({
                        url: s.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                        oldFormErrors: !0
                    })).body ?? null;
                    return n.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: t
                    }), {
                        userTrialOffer: t
                    }
                } catch (t) {
                    n.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_FAIL",
                        userTrialOfferId: e
                    })
                }
            }
        },
        141592: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            });
            var i = r("751435"),
                n = r("661223"),
                l = r("312916"),
                u = r("871831"),
                s = r("480643"),
                a = r("467006");
            let f = null,
                c = {},
                E = [],
                _ = new Set,
                o = !1,
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
                let t = e.type === i.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!R.has(t) && !d.has(t)) {
                    var r;
                    r = t, d.add(r), l.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(a.NOOP_NULL))
                }
            }
            class F extends n.default.Store {
                static #e = this.displayName = "ReferralTrialStore";
                initialize() {
                    this.waitFor(u.default), this.syncWith([u.default], O)
                }
                checkAndFetchReferralsRemaining() {
                    null == f && !o && L < 5 && (null == S || S < Date.now()) && (0, s.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), f
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == E ? [] : E
                }
                isFetchingReferralsRemaining() {
                    return o
                }
                isFetchingRecipientEligibility(e) {
                    return _.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === c[e] && !_.has(e) && (0, s.checkRecipientEligibility)(e), c[e]
                }
                getRelevantUserTrialOffer(e) {
                    return I[e]
                }
                isResolving(e) {
                    return d.has(e)
                }
            }
            var h = new F(l.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: r
                    } = e;
                    if (!o && (0, s.fetchReferralsRemaining)(), !_.has(r) && (0, s.checkRecipientEligibility)(r), !d.has(t)) {
                        var i;
                        i = t, d.add(i), l.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(a.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    o = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: r
                    } = e;
                    o = !1, f = t, E = r
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    o = !1, L += 1, S = Date.now() + 1e3 * Math.pow(2, L)
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
                    c[t] = r, _.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    c[t] = !1, _.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, s.fetchReferralsRemaining)(), I[t.id] = t, E = [...E, t.user_id]
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
                    f = null, c = {}, E = [], _ = new Set, o = !1, d = new Set, R = new Set, I = {}, L = 0, S = null
                }
            })
        },
        921011: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                usePremiumTrialOffer: function() {
                    return a
                }
            });
            var i = r("203959"),
                n = r("537022"),
                l = r("141592"),
                u = r("864451"),
                s = r("171168");

            function a(e) {
                let t = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    r = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    a = (0, u.useTrialOffer)(n.default.getAnyOfUserTrialOfferId([s.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, s.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    f = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_AUTH3_TRIAL_ID);
                return (0, i.default)([l.default], () => void 0 === e ? null : l.default.getRelevantUserTrialOffer(e)) ?? t ?? r ?? a ?? f
            }
        },
        864451: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hasUserTrialOfferExpired: function() {
                    return f
                },
                useTrialOffer: function() {
                    return c
                }
            });
            var i = r("470079"),
                n = r("661223"),
                l = r("767191"),
                u = r("871831"),
                s = r("537022"),
                a = r("488867");

            function f(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function c(e) {
                let t = (0, n.useStateFromStores)([s.default], () => s.default.getUserTrialOffer(e)),
                    [r, c] = i.useState(f(t)),
                    E = (0, n.useStateFromStores)([u.default], () => (0, a.isPremium)(u.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new l.Timeout,
                            i = () => {
                                let n = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                e?.start(n, () => {
                                    !r && f(t) ? c(!0) : i()
                                })
                            };
                        return i(), () => e.stop()
                    }
                }, [r, t]), r || E ? null : t
            }
        },
        537022: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return R
                }
            });
            var i = r("661223"),
                n = r("312916"),
                l = r("871831"),
                u = r("488867"),
                s = r("416573"),
                a = r("171168");
            let f = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscountOffers: {},
                    userDiscounts: void 0
                },
                c = f;

            function E() {
                c.userTrialOffers = {}, c.userDiscountOffers = {}, c.userOffersLastFetchedAtDate = void 0
            }
            let _ = () => !0;

            function o() {
                return null != s.default.getPremiumTypeSubscription() && (c.userTrialOffers = {}, c.userDiscountOffers = {}, !0)
            }
            class d extends i.default.PersistedStore {
                static #e = this.displayName = "UserOfferStore";
                static #t = this.persistKey = "UserOfferStore";
                static #r = this.migrations = [e => {
                    let t = e?.userDiscounts;
                    if (null != t) return {
                        ...e,
                        userDiscountOffers: t
                    }
                }];
                initialize(e) {
                    c = e ?? f, this.waitFor(l.default), this.syncWith([l.default], _), this.syncWith([s.default], o)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return c.userTrialOffers[e]
                }
                getUserDiscountOffer(e) {
                    if (null !== e) return c.userDiscountOffers[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != c.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != c.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = c.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAlmostExpiringTrialOffers(e) {
                    let t = Object.values(a.SubscriptionTrials).map(e => e.id),
                        r = l.default.getCurrentUser();
                    return (0, u.isPremium)(r) ? [] : Object.values(c.userTrialOffers).filter(r => t.includes(r.trial_id) && null != r.expires_at && null != r.subscription_trial && e.includes(r.subscription_trial.sku_id) && Date.parse(r.expires_at) < Date.now() + a.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
                }
                getAcknowledgedOffers(e) {
                    let t = l.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(c.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = l.default.getCurrentUser();
                    return (0, u.isPremium)(e) ? [] : Object.values(c.userDiscountOffers ?? {}).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = l.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(c.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(c.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return c
                }
                forceReset() {
                    E()
                }
            }
            var R = new d(n.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? c.userTrialOffers[t.trial_id] = t : E(), c.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? c.userTrialOffers[t.trial_id] = t : c.userTrialOffers = {}, c.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: r,
                        userDiscountOffer: i
                    } = e;
                    null == t && null == r && null == i && E(), null != t ? (c.userTrialOffers[t.trial_id] = t, c.userDiscountOffers = {}) : null != r ? (c.userDiscountOffers[r.discount_id] = r, c.userTrialOffers = {}) : null != i && (c.userDiscountOffers[i.discount_id] = i, c.userTrialOffers = {}), c.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: r,
                        userDiscountOffer: i
                    } = e;
                    null != t ? c.userTrialOffers[t.trial_id] = t : c.userTrialOffers = {}, null != r ? c.userDiscountOffers[r.discount_id] = r : null != i ? c.userDiscountOffers[i.discount_id] = i : c.userDiscountOffers = {}, c.userOffersLastFetchedAtDate = Date.now()
                },
                LOGOUT: E
            })
        }
    }
]);
//# sourceMappingURL=83746.411468e16f07046d524f.js.map