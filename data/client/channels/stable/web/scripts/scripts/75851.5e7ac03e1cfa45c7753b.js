(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75851"], {
        179935: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchReferralsRemaining: function() {
                    return f
                },
                checkRecipientEligibility: function() {
                    return a
                },
                createReferralTrial: function() {
                    return _
                },
                resolveReferralTrialOffer: function() {
                    return E
                }
            });
            var l = r("872717"),
                i = r("913144"),
                n = r("819689"),
                s = r("18494"),
                u = r("49111");
            let f = () => (i.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), l.HTTP.get({
                    url: u.Endpoints.GET_REFERRALS_REMAINING,
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
                a = e => (i.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), l.HTTP.post({
                    url: u.Endpoints.CREATE_REFERRAL_PREVIEW(e),
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
            async function _(e) {
                try {
                    var t;
                    let r = await l.HTTP.post({
                            url: u.Endpoints.CREATE_REFERRAL(e),
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
                        }), e.body.code === u.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = s.default.getCurrentlySelectedChannelId();
                        null != t && n.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function E(e) {
                try {
                    var t;
                    let r = await l.HTTP.get({
                            url: u.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
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
            }), r("222007");
            var l = r("637612"),
                i = r("446674"),
                n = r("913144"),
                s = r("697218"),
                u = r("179935"),
                f = r("49111");
            let a = null,
                _ = {},
                E = [],
                R = new Set,
                d = !1,
                c = new Set,
                o = new Set,
                I = {},
                L = 0,
                O = null,
                T = () => !0;

            function A(e) {
                c.add(e)
            }

            function S(e) {
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
                    r = t, c.add(r), n.default.wait(() => (0, u.resolveReferralTrialOffer)(t).catch(f.NOOP_NULL))
                }
            }
            class h extends i.default.Store {
                initialize() {
                    this.waitFor(s.default), this.syncWith([s.default], T)
                }
                checkAndFetchReferralsRemaining() {
                    null == a && !d && L < 5 && (null == O || O < Date.now()) && (0, u.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), a
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == E ? [] : E
                }
                isFetchingReferralsRemaining() {
                    return d
                }
                isFetchingRecipientEligibility(e) {
                    return R.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === _[e] && !R.has(e) && (0, u.checkRecipientEligibility)(e), _[e]
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
                    if (!d && (0, u.fetchReferralsRemaining)(), !R.has(r) && (0, u.checkRecipientEligibility)(r), !c.has(t)) {
                        var l;
                        l = t, c.add(l), n.default.wait(() => (0, u.resolveReferralTrialOffer)(t).catch(f.NOOP_NULL))
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
                    d = !1, a = t, E = r
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    d = !1, L += 1, O = Date.now() + 1e3 * Math.pow(2, L)
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
                    _[t] = r, R.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    _[t] = !1, R.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, u.fetchReferralsRemaining)(), I[t.id] = t, E = [...E, t.user_id]
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
                LOAD_MESSAGES_SUCCESS: S,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    F(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: S,
                LOGOUT: function() {
                    a = null, _ = {}, E = [], R = new Set, d = !1, c = new Set, o = new Set, I = {}, L = 0, O = null
                }
            })
        },
        917247: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                usePremiumTrialOffer: function() {
                    return f
                }
            });
            var l = r("65597"),
                i = r("340412"),
                n = r("540692"),
                s = r("833516"),
                u = r("646718");

            function f(e) {
                var t, r, f;
                let a = (0, s.useTrialOffer)(u.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    _ = (0, s.useTrialOffer)(u.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    E = (0, s.useTrialOffer)(i.default.getAnyOfUserTrialOfferId([u.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, u.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, u.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, u.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    R = (0, s.useTrialOffer)(u.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    d = (0, l.default)([n.default], () => void 0 === e ? null : n.default.getRelevantUserTrialOffer(e));
                return null !== (f = null !== (r = null !== (t = null != d ? d : a) && void 0 !== t ? t : _) && void 0 !== r ? r : E) && void 0 !== f ? f : R
            }
        },
        833516: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hasUserTrialOfferExpired: function() {
                    return a
                },
                useTrialOffer: function() {
                    return _
                }
            }), r("222007");
            var l = r("884691"),
                i = r("446674"),
                n = r("862337"),
                s = r("697218"),
                u = r("340412"),
                f = r("719923");

            function a(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function _(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.getUserTrialOffer(e)),
                    [r, _] = l.useState(a(t)),
                    E = (0, i.useStateFromStores)([s.default], () => (0, f.isPremium)(s.default.getCurrentUser()));
                return l.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new n.Timeout,
                            l = () => {
                                let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(i, () => {
                                    !r && a(t) ? _(!0) : l()
                                })
                            };
                        return l(), () => e.stop()
                    }
                }, [r, t]), r || E ? null : t
            }
        },
        340412: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            }), r("222007");
            var l = r("446674"),
                i = r("913144"),
                n = r("697218"),
                s = r("719923"),
                u = r("521012"),
                f = r("646718");
            let a = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscountOffers: {},
                    userDiscounts: void 0
                },
                _ = a;

            function E() {
                _.userTrialOffers = {}, _.userDiscountOffers = {}, _.userOffersLastFetchedAtDate = void 0
            }
            let R = () => !0;

            function d() {
                let e = u.default.getPremiumTypeSubscription();
                return null != e && (_.userTrialOffers = {}, _.userDiscountOffers = {}, !0)
            }
            class c extends l.default.PersistedStore {
                initialize(e) {
                    _ = null != e ? e : a, this.waitFor(n.default), this.syncWith([n.default], R), this.syncWith([u.default], d)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return _.userTrialOffers[e]
                }
                getUserDiscountOffer(e) {
                    if (null !== e) return _.userDiscountOffers[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != _.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != _.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = _.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAlmostExpiringTrialOffers(e) {
                    let t = Object.values(f.SubscriptionTrials).map(e => e.id),
                        r = n.default.getCurrentUser();
                    return (0, s.isPremium)(r) ? [] : Object.values(_.userTrialOffers).filter(r => t.includes(r.trial_id) && null != r.expires_at && null != r.subscription_trial && e.includes(r.subscription_trial.sku_id) && Date.parse(r.expires_at) < Date.now() + f.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
                }
                getAcknowledgedOffers(e) {
                    let t = n.default.getCurrentUser();
                    return (0, s.isPremium)(t) ? [] : Object.values(_.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    var e;
                    let t = n.default.getCurrentUser();
                    return (0, s.isPremium)(t) ? [] : Object.values(null !== (e = _.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = n.default.getCurrentUser();
                    return (0, s.isPremium)(t) ? [] : Object.values(_.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(_.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return _
                }
                forceReset() {
                    E()
                }
            }
            c.displayName = "UserOfferStore", c.persistKey = "UserOfferStore", c.migrations = [e => {
                let t = null == e ? void 0 : e.userDiscounts;
                if (null != t) return {
                    ...e,
                    userDiscountOffers: t
                }
            }];
            var o = new c(i.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? _.userTrialOffers[t.trial_id] = t : E(), _.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? _.userTrialOffers[t.trial_id] = t : _.userTrialOffers = {}, _.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: r,
                        userDiscountOffer: l
                    } = e;
                    null == t && null == r && null == l && E(), null != t ? (_.userTrialOffers[t.trial_id] = t, _.userDiscountOffers = {}) : null != r ? (_.userDiscountOffers[r.discount_id] = r, _.userTrialOffers = {}) : null != l && (_.userDiscountOffers[l.discount_id] = l, _.userTrialOffers = {}), _.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: r,
                        userDiscountOffer: l
                    } = e;
                    null != t ? _.userTrialOffers[t.trial_id] = t : _.userTrialOffers = {}, null != r ? _.userDiscountOffers[r.discount_id] = r : null != l ? _.userDiscountOffers[l.discount_id] = l : _.userDiscountOffers = {}, _.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_FAIL: function() {
                    E(), _.userOffersLastFetchedAtDate = Date.now()
                },
                LOGOUT: E
            })
        }
    }
]);
//# sourceMappingURL=75851.5e7ac03e1cfa45c7753b.js.map