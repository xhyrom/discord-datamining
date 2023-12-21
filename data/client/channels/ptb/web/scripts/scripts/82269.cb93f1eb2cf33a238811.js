(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82269"], {
        480643: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                checkRecipientEligibility: function() {
                    return _
                },
                createReferralTrial: function() {
                    return o
                },
                fetchReferralsRemaining: function() {
                    return c
                },
                resolveReferralTrialOffer: function() {
                    return R
                }
            });
            var n = t("356056"),
                i = t("324415");
            t("653041");
            var u = t("454836"),
                s = t("312916"),
                a = t("389920"),
                f = t("232733"),
                l = t("467006"),
                c = function() {
                    return s.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                    }), u.default.get({
                        url: l.Endpoints.GET_REFERRALS_REMAINING,
                        oldFormErrors: !0
                    }).then(function(e) {
                        s.default.dispatch({
                            type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                            referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                            sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                        })
                    }, function() {
                        s.default.dispatch({
                            type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                        })
                    })
                },
                _ = function(e) {
                    return s.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                        recipientId: e
                    }), u.default.post({
                        url: l.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                        oldFormErrors: !0
                    }).then(function(r) {
                        s.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                            recipientId: e,
                            is_eligible: null != r.body && r.body.is_eligible
                        })
                    }, function() {
                        s.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                            recipientId: e
                        })
                    })
                };

            function o(e) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = (0, n._)(function(e) {
                    var r, t, n, c;
                    return (0, i._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, u.default.post({
                                    url: l.Endpoints.CREATE_REFERRAL(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return t = null !== (r = i.sent().body) && void 0 !== r ? r : null, s.default.dispatch({
                                    type: "BILLING_CREATE_REFERRAL_SUCCESS",
                                    userTrialOffer: t
                                }), [2, {
                                    userTrialOffer: t
                                }];
                            case 2:
                                return n = i.sent(), s.default.dispatch({
                                    type: "BILLING_CREATE_REFERRAL_FAIL"
                                }), n.body.code === l.AbortCodes.INVALID_MESSAGE_SEND_USER && null != (c = f.default.getCurrentlySelectedChannelId()) && a.default.sendClydeError(c, n.body.code), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function R(e) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = (0, n._)(function(e) {
                    var r, t, n;
                    return (0, i._)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, u.default.get({
                                    url: l.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return t = null !== (r = n.sent().body) && void 0 !== r ? r : null, s.default.dispatch({
                                    type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                                    userTrialOffer: t
                                }), [2, {
                                    userTrialOffer: t
                                }];
                            case 2:
                                return n.sent(), s.default.dispatch({
                                    type: "BILLING_REFERRAL_RESOLVE_FAIL",
                                    userTrialOfferId: e
                                }), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        141592: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return y
                }
            });
            var n = t("87627"),
                i = t("29713"),
                u = t("185223"),
                s = t("761020"),
                a = t("778455");
            t("330740"), t("996173"), t("47120"), t("357629"), t("814951");
            var f = t("751435"),
                l = t("661223"),
                c = t("312916"),
                _ = t("871831"),
                o = t("480643"),
                E = t("467006"),
                R = null,
                d = {},
                I = [],
                L = new Set,
                T = !1,
                O = new Set,
                S = new Set,
                A = {},
                p = 0,
                h = null,
                F = function() {
                    return !0
                };

            function v(e) {
                O.add(e)
            }

            function C(e) {
                e.messages.forEach(function(e) {
                    return U(e)
                })
            }

            function U(e) {
                var r, t = e.type === f.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!S.has(t) && !O.has(t)) {
                    ;
                    r = t, O.add(r), c.default.wait(function() {
                        return (0, o.resolveReferralTrialOffer)(t).catch(E.NOOP_NULL)
                    })
                }
            }
            var D = function(e) {
                (0, i._)(t, e);
                var r = (0, a._)(t);

                function t() {
                    return (0, n._)(this, t), r.apply(this, arguments)
                }
                var u = t.prototype;
                return u.initialize = function() {
                    this.waitFor(_.default), this.syncWith([_.default], F)
                }, u.checkAndFetchReferralsRemaining = function() {
                    null == R && !T && p < 5 && (null == h || h < Date.now()) && (0, o.fetchReferralsRemaining)()
                }, u.getReferralsRemaining = function() {
                    return this.checkAndFetchReferralsRemaining(), R
                }, u.getSentUserIds = function() {
                    return this.checkAndFetchReferralsRemaining(), null == I ? [] : I
                }, u.isFetchingReferralsRemaining = function() {
                    return T
                }, u.isFetchingRecipientEligibility = function(e) {
                    return L.has(e)
                }, u.getRecipientEligibility = function(e) {
                    return void 0 === d[e] && !L.has(e) && (0, o.checkRecipientEligibility)(e), d[e]
                }, u.getRelevantUserTrialOffer = function(e) {
                    return A[e]
                }, u.isResolving = function(e) {
                    return O.has(e)
                }, t
            }(l.default.Store);
            D.displayName = "ReferralTrialStore";
            var y = new D(c.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    var r, t = e.userTrialOfferId,
                        n = e.recipientId;
                    if (!T && (0, o.fetchReferralsRemaining)(), !L.has(n) && (0, o.checkRecipientEligibility)(n), !O.has(t)) {
                        ;
                        r = t, O.add(r), c.default.wait(function() {
                            return (0, o.resolveReferralTrialOffer)(t).catch(E.NOOP_NULL)
                        })
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    (0, u._)(e), T = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    var r = e.referrals_remaining,
                        t = e.sent_user_ids;
                    T = !1, R = r, I = t
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    (0, u._)(e), T = !1, p += 1, h = Date.now() + 1e3 * Math.pow(2, p)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    var r = e.recipientId;
                    L.add(r)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    var r = e.recipientId,
                        t = e.is_eligible;
                    d[r] = t, L.delete(r)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    var r = e.recipientId;
                    d[r] = !1, L.delete(r)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    var r = e.userTrialOffer;
                    (0, o.fetchReferralsRemaining)(), A[r.id] = r, I = (0, s._)(I).concat([r.user_id])
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    var r = e.userTrialOffer;
                    null != r && (O.delete(r.id), S.add(r.id), A[r.id] = r)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    var r = e.userTrialOfferId;
                    O.delete(r), S.add(r)
                },
                LOAD_MESSAGES_SUCCESS: C,
                MESSAGE_CREATE: function(e) {
                    U(e.message)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: C,
                LOGOUT: function() {
                    R = null, d = {}, I = [], L = new Set, T = !1, O = new Set, S = new Set, A = {}, p = 0, h = null
                }
            })
        },
        921011: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                usePremiumTrialOffer: function() {
                    return f
                }
            });
            var n = t("203959"),
                i = t("537022"),
                u = t("141592"),
                s = t("864451"),
                a = t("171168");

            function f(e) {
                var r, t, f, l = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    c = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    _ = (0, s.useTrialOffer)(i.default.getAnyOfUserTrialOfferId([a.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, a.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    o = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    E = (0, n.default)([u.default], function() {
                        return void 0 === e ? null : u.default.getRelevantUserTrialOffer(e)
                    });
                return null !== (f = null !== (t = null !== (r = null != E ? E : l) && void 0 !== r ? r : c) && void 0 !== t ? t : _) && void 0 !== f ? f : o
            }
        },
        864451: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                hasUserTrialOfferExpired: function() {
                    return c
                },
                useTrialOffer: function() {
                    return _
                }
            });
            var n = t("154005"),
                i = t("470079"),
                u = t("661223"),
                s = t("767191"),
                a = t("871831"),
                f = t("537022"),
                l = t("488867");

            function c(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function _(e) {
                var r = (0, u.useStateFromStores)([f.default], function() {
                        return f.default.getUserTrialOffer(e)
                    }),
                    t = (0, n._)(i.useState(c(r)), 2),
                    _ = t[0],
                    o = t[1],
                    E = (0, u.useStateFromStores)([a.default], function() {
                        return (0, l.isPremium)(a.default.getCurrentUser())
                    });
                return i.useEffect(function() {
                    if (null != r && null != r.expires_at) {
                        var e = new s.Timeout,
                            t = function() {
                                var n = null != r.expires_at ? Date.parse(r.expires_at) - Date.now() : 0;
                                null == e || e.start(n, function() {
                                    !_ && c(r) ? o(!0) : t()
                                })
                            };
                        return t(),
                            function() {
                                return e.stop()
                            }
                    }
                }, [_, r]), _ || E ? null : r
            }
        },
        537022: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return T
                }
            });
            var n = t("87627"),
                i = t("29713"),
                u = t("778455");
            t("633702"), t("266796"), t("357629"), t("996173"), t("47120"), t("69485"), t("363505"), t("462848"), t("568603"), t("128242");
            var s = t("661223"),
                a = t("312916"),
                f = t("871831"),
                l = t("488867"),
                c = t("416573"),
                _ = t("171168"),
                o = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscounts: {}
                },
                E = o;

            function R() {
                E.userTrialOffers = {}, E.userDiscounts = {}, E.userOffersLastFetchedAtDate = void 0
            }
            var d = function() {
                return !0
            };

            function I() {
                return null != c.default.getPremiumTypeSubscription() && (E.userTrialOffers = {}, E.userDiscounts = {}, !0)
            }
            var L = function(e) {
                (0, i._)(t, e);
                var r = (0, u._)(t);

                function t() {
                    return (0, n._)(this, t), r.apply(this, arguments)
                }
                var s = t.prototype;
                return s.initialize = function(e) {
                    E = null != e ? e : o, this.waitFor(f.default), this.syncWith([f.default], d), this.syncWith([c.default], I)
                }, s.getUserTrialOffer = function(e) {
                    if (null !== e) return E.userTrialOffers[e]
                }, s.getUserDiscount = function(e) {
                    if (null !== e) return E.userDiscounts[e]
                }, s.getAnyOfUserTrialOfferId = function(e) {
                    var r = !0,
                        t = !1,
                        n = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
                            var s = i.value;
                            if (null != E.userTrialOffers[s]) return s
                        }
                    } catch (e) {
                        t = !0, n = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (t) throw n
                        }
                    }
                    return null
                }, s.hasFetchedOffer = function() {
                    return null != E.userOffersLastFetchedAtDate
                }, s.shouldFetchOffer = function() {
                    var e = E.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }, s.getAlmostExpiringTrialOffers = function(e) {
                    var r = Object.values(_.SubscriptionTrials).map(function(e) {
                            return e.id
                        }),
                        t = f.default.getCurrentUser();
                    return (0, l.isPremium)(t) ? [] : Object.values(E.userTrialOffers).filter(function(t) {
                        return r.includes(t.trial_id) && null != t.expires_at && null != t.subscription_trial && e.includes(t.subscription_trial.sku_id) && Date.parse(t.expires_at) < Date.now() + _.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD
                    })
                }, s.getAcknowledgedOffers = function(e) {
                    var r = f.default.getCurrentUser();
                    return (0, l.isPremium)(r) ? [] : Object.values(E.userTrialOffers).filter(function(r) {
                        return e.includes(r.trial_id) && null != r.expires_at
                    })
                }, s.getUnacknowledgedDiscountOffers = function() {
                    var e = f.default.getCurrentUser();
                    return (0, l.isPremium)(e) ? [] : Object.values(E.userDiscounts).filter(function(e) {
                        return null == e.expires_at
                    })
                }, s.getUnacknowledgedOffers = function(e) {
                    var r = f.default.getCurrentUser();
                    return (0, l.isPremium)(r) ? [] : Object.values(E.userTrialOffers).filter(function(r) {
                        return e.includes(r.trial_id) && null == r.expires_at
                    })
                }, s.hasAnyUnexpiredOffer = function() {
                    return Object.values(E.userTrialOffers).some(function(e) {
                        return null == e.expires_at || Date.parse(e.expires_at) > Date.now()
                    })
                }, s.getState = function() {
                    return E
                }, s.forceReset = function() {
                    R()
                }, t
            }(s.default.PersistedStore);
            L.displayName = "UserOfferStore", L.persistKey = "UserOfferStore";
            var T = new L(a.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    var r = e.userTrialOffer;
                    null != r ? E.userTrialOffers[r.trial_id] = r : R(), E.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    var r = e.userTrialOffer;
                    null != r ? E.userTrialOffers[r.trial_id] = r : E.userTrialOffers = {}, E.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    var r = e.userTrialOffer,
                        t = e.userDiscount;
                    null == r && null == t && R(), null != r ? (E.userTrialOffers[r.trial_id] = r, E.userDiscounts = {}) : null != t && (E.userDiscounts[t.discount_id] = t, E.userTrialOffers = {}), E.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    var r = e.userTrialOffer,
                        t = e.userDiscount;
                    null != r ? E.userTrialOffers[r.trial_id] = r : E.userTrialOffers = {}, null != t ? E.userDiscounts[t.discount_id] = t : E.userDiscounts = {}, E.userOffersLastFetchedAtDate = Date.now()
                },
                LOGOUT: R
            })
        }
    }
]);
//# sourceMappingURL=82269.cb93f1eb2cf33a238811.js.map