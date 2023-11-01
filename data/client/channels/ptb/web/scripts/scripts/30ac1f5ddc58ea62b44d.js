(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["23777"], {
        251472: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchUserEntitlementsForApplication: function() {
                    return a
                },
                fetchUserEntitlements: function() {
                    return o
                },
                fetchGiftableEntitlements: function() {
                    return s
                }
            });
            var u = n("872717"),
                i = n("913144"),
                r = n("271560"),
                l = n("49111");

            function a(t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return i.default.wait(() => {
                    i.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: t
                    })
                }), u.default.get({
                    url: l.Endpoints.ENTITLEMENTS_FOR_APPLICATION(t),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: e
                    }
                }).then(e => (i.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: t,
                    entitlements: e.body
                }), e.body)).catch(() => {
                    i.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: t
                    })
                })
            }
            async function o(t) {
                let {
                    withSku: e = !1,
                    withApplication: n = !1,
                    entitlementType: r
                } = t;
                i.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let t = await u.default.get({
                        url: l.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: e,
                            with_application: n,
                            entitlement_type: r
                        }
                    });
                    i.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: t.body
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function s() {
                i.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let t = await (0, r.httpGetWithCountryCodeQuery)({
                        url: l.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    i.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: t.body
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        596523: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                subscribe: function() {
                    return s
                },
                resubscribe: function() {
                    return c
                },
                changeSubscriptionCurrency: function() {
                    return d
                },
                changePaymentSource: function() {
                    return E
                },
                clearError: function() {
                    return S
                }
            });
            var u = n("627445"),
                i = n.n(u),
                r = n("913144"),
                l = n("719923"),
                a = n("850068"),
                o = n("49111");
            async function s(t) {
                let {
                    planId: e,
                    currency: n,
                    paymentSource: u,
                    trialId: i,
                    code: l,
                    metadata: o,
                    referralCode: s,
                    loadId: c
                } = t;
                r.default.dispatch({
                    type: "PREMIUM_PAYMENT_SUBSCRIBE_START"
                });
                try {
                    let t = await a.createSubscription({
                        items: [{
                            planId: e,
                            quantity: 1
                        }],
                        paymentSource: u,
                        trialId: i,
                        code: l,
                        currency: n,
                        metadata: o,
                        referralCode: s,
                        loadId: c
                    });
                    return null != t.subscription && r.default.dispatch({
                        type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
                        subscription: t.subscription
                    }), t
                } catch (t) {
                    throw r.default.dispatch({
                        type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
                        error: t
                    }), t
                }
            }
            async function c(t, e, n, u, s) {
                try {
                    let c = (0, l.getPremiumPlanItem)(t);
                    i(c, "Expected existing premium plan");
                    let d = (0, l.getItemsWithUpsertedPremiumPlanId)(t, c.planId);
                    await a.updateSubscription(t, {
                        status: o.SubscriptionStatusTypes.ACTIVE,
                        paymentSource: u,
                        items: d,
                        currency: n
                    }, e, s), r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                        error: t
                    }), t
                }
            }
            async function d(t, e, n, u) {
                try {
                    await a.changeSubscriptionCurrency(t, e, n, u), r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                        error: t
                    }), t
                }
            }
            async function E(t, e, n, u, i) {
                try {
                    await a.changePaymentSource(t, e, n, u, i), r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                        error: t
                    }), t
                }
            }

            function S() {
                r.default.dispatch({
                    type: "PREMIUM_PAYMENT_ERROR_CLEAR"
                })
            }
        },
        465527: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchSKU: function() {
                    return I
                },
                fetchSKUsForApplication: function() {
                    return T
                },
                fetchPurchasePreview: function() {
                    return A
                },
                grantChannelBranchEntitlement: function() {
                    return P
                },
                purchaseSKU: function() {
                    return C
                },
                resendPaymentVerificationEmail: function() {
                    return R
                },
                clearPurchaseError: function() {
                    return O
                },
                showPurchaseConfirmationStep: function() {
                    return U
                },
                updateSKUPaymentIsGift: function() {
                    return h
                }
            });
            var u = n("872717"),
                i = n("913144"),
                r = n("448993"),
                l = n("736978"),
                a = n("333805"),
                o = n("84460"),
                s = n("552712"),
                c = n("167726"),
                d = n("745279"),
                E = n("449008"),
                S = n("224400"),
                f = n("271560"),
                _ = n("850068"),
                p = n("49111");
            async function I(t, e) {
                if (null == s.default.get(e)) {
                    i.default.dispatch({
                        type: "SKU_FETCH_START",
                        skuId: e
                    });
                    try {
                        let n = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t),
                            u = await (0, f.httpGetWithCountryCodeQuery)(n ? p.Endpoints.STORE_SKU(e) : p.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e));
                        i.default.dispatch({
                            type: "SKU_FETCH_SUCCESS",
                            sku: n ? u.body : u.body.sku
                        })
                    } catch (t) {
                        throw i.default.dispatch({
                            type: "SKU_FETCH_FAIL",
                            skuId: e
                        }), new a.default("Failed to fetch SKU ".concat(e))
                    }
                }
            }
            async function T(t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
                if (!n && e) throw Error("this should only be used in test mode");
                let u = await (0, f.httpGetWithCountryCodeQuery)(p.Endpoints.APPLICATION_SKUS(t)),
                    r = u.body;
                return i.default.dispatch({
                    type: "SKUS_FETCH_SUCCESS",
                    skus: r,
                    applicationId: t
                }), r
            }
            async function A(t, e, n) {
                let u = {
                        payment_source_id: n
                    },
                    r = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
                r && (u.test_mode = !0);
                let l = await (0, f.httpGetWithCountryCodeQuery)({
                    url: p.Endpoints.STORE_SKU_PURCHASE(e),
                    query: u,
                    oldFormErrors: !0
                });
                return i.default.dispatch({
                    type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                    skuId: e,
                    paymentSourceId: n,
                    price: l.body
                }), l
            }
            async function P(t, e, n) {
                i.default.dispatch({
                    type: "SKU_PURCHASE_START",
                    applicationId: t,
                    skuId: n
                });
                try {
                    let t = await u.default.post({
                        url: p.Endpoints.CHANNEL_ENTITLEMENT_GRANT(e),
                        oldFormErrors: !0
                    });
                    return i.default.dispatch({
                        type: "SKU_PURCHASE_SUCCESS",
                        skuId: n,
                        entitlements: t.body,
                        libraryApplications: []
                    }), t.body
                } catch (u) {
                    let e = new r.BillingError(u);
                    throw i.default.dispatch({
                        type: "SKU_PURCHASE_FAIL",
                        applicationId: t,
                        skuId: n,
                        error: e
                    }), e
                }
            }
            let N = {
                isGift: !1
            };
            async function C(t, e, n) {
                let {
                    paymentSource: a,
                    expectedAmount: s,
                    expectedCurrency: f,
                    analyticsLoadId: I,
                    isGift: T,
                    giftStyle: A,
                    subscriptionPlanId: P,
                    loadId: C,
                    recipientId: R,
                    customMessage: O,
                    emojiConfetti: U,
                    soundEffect: h
                } = {
                    ...N,
                    ...n
                };
                i.default.wait(() => {
                    i.default.dispatch({
                        type: "SKU_PURCHASE_START",
                        applicationId: t,
                        skuId: e
                    })
                });
                let F = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
                try {
                    let t = {
                        gift: T,
                        sku_subscription_plan_id: P,
                        gateway_checkout_context: await (0, d.createGatewayCheckoutContext)(a),
                        load_id: C
                    };
                    if (F) t.test_mode = !0;
                    else {
                        if (null != a && (t.payment_source_id = a.id, t.payment_source_token = await (0, _.createPaymentSourceToken)(a), p.ADYEN_PAYMENT_SOURCES.has(a.type))) {
                            let e = await (0, _.popupBridgeState)(a.type);
                            t.return_url = u.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(a.type, null != e ? e : "", "success")
                        }
                        if (null != s && (t.expected_amount = s), null != f && (t.expected_currency = f), null != A && (t.gift_style = A), null != R && (t.recipient_id = R), null != R) t.custom_message = O, ((null == U ? void 0 : U.id) != null || (null == U ? void 0 : U.surrogates) != null || (null == h ? void 0 : h.soundId) != null) && (t.gift_info_options = {
                            emoji_id: null == U ? void 0 : U.id,
                            emoji_name: null == U ? void 0 : U.surrogates,
                            sound_id: null == h ? void 0 : h.soundId
                        });
                        t.purchase_token = (0, S.getPurchaseToken)()
                    }
                    let n = await u.default.post({
                        url: p.Endpoints.STORE_SKU_PURCHASE(e),
                        body: t,
                        context: {
                            load_id: I
                        },
                        oldFormErrors: !0
                    });
                    return i.default.dispatch({
                        type: "SKU_PURCHASE_SUCCESS",
                        skuId: e,
                        libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(E.isNotNullish) : [],
                        entitlements: n.body.entitlements,
                        giftCode: n.body.gift_code
                    }), {
                        ...n.body,
                        redirectConfirmation: !1
                    }
                } catch (u) {
                    let n = u instanceof r.BillingError ? u : new r.BillingError(u);
                    if ((n.code === l.ErrorCodes.CONFIRMATION_REQUIRED || n.code === l.ErrorCodes.AUTHENTICATION_REQUIRED) && i.default.dispatch({
                            type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                            skuId: e,
                            isGift: T
                        }), n.code !== l.ErrorCodes.CONFIRMATION_REQUIRED) throw i.default.dispatch({
                        type: "SKU_PURCHASE_FAIL",
                        applicationId: t,
                        skuId: e,
                        error: n
                    }), n;
                    if (!u.body.payment_id) throw (0, _.dispatchConfirmationError)("payment id cannot be null on redirected confirmations.");
                    return (0, _.handleConfirmation)(u.body, a)
                }
            }
            async function R() {
                try {
                    let t = {
                            purchase_token: (0, S.getPurchaseToken)()
                        },
                        e = await u.default.post({
                            url: p.Endpoints.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                            body: t,
                            oldFormErrors: !0
                        });
                    return {
                        ...e.body
                    }
                } catch (t) {
                    throw t instanceof r.BillingError ? t : new r.BillingError(t)
                }
            }

            function O() {
                i.default.dispatch({
                    type: "SKU_PURCHASE_CLEAR_ERROR"
                })
            }

            function U() {
                i.default.wait(() => i.default.dispatch({
                    type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP"
                }))
            }

            function h(t) {
                i.default.dispatch({
                    type: "SKU_PURCHASE_UPDATE_IS_GIFT",
                    isGift: t
                })
            }
        },
        598981: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var u = n("65597"),
                i = n("271938");

            function r() {
                return (0, u.default)([i.default], () => i.default.isAuthenticated())
            }
        },
        479952: function(t, e, n) {
            "use strict";
            let u;
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                lastGuildDismissedTime: {}
            };
            class a extends i.default.DeviceSettingsStore {
                initialize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
                    u = t
                }
                getUserAgnosticState() {
                    return u
                }
                getLastGuildDismissedTime(t) {
                    return u.lastGuildDismissedTime[t]
                }
            }
            a.displayName = "ApplicationSubscriptionChannelNoticeStore", a.persistKey = "ApplicationSubscriptionChannelNoticeStore";
            var o = new a(r.default, {
                APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(t) {
                    let {
                        guildId: e
                    } = t;
                    u.lastGuildDismissedTime[e] = Date.now()
                }
            })
        },
        524503: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchAllSubscriptionListingsDataForApplication: function() {
                    return l
                },
                fetchEntitlementsForGuild: function() {
                    return a
                },
                dismissApplicationSubscriptionExpirationNotice: function() {
                    return o
                },
                fetchSubscriptionListingForPlan: function() {
                    return s
                }
            });
            var u = n("913144"),
                i = n("775433"),
                r = n("104449");
            async function l(t, e) {
                u.default.dispatch({
                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
                    applicationId: t
                });
                try {
                    let n = await r.getApplicationSubscriptionGroupListingsForApplication(t, e);
                    return u.default.dispatch({
                        type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                        applicationId: t,
                        groupListing: n
                    }), n
                } catch (e) {
                    u.default.dispatch({
                        type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                        applicationId: t
                    })
                }
            }
            async function a(t) {
                u.default.dispatch({
                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
                    guildId: t
                });
                try {
                    let e = await r.getEntitlementsForGuild(t);
                    u.default.dispatch({
                        type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
                        guildId: t,
                        entitlements: e
                    })
                } catch (e) {
                    u.default.dispatch({
                        type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
                        guildId: t
                    })
                }
            }

            function o(t) {
                u.default.dispatch({
                    type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
                    guildId: t
                })
            }
            async function s(t) {
                u.default.dispatch({
                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
                    planId: t
                });
                try {
                    var e;
                    let n = await r.getSubscriptionGroupForSubscriptionPlan(t);
                    u.default.dispatch({
                        type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
                        groupListing: n
                    });
                    let l = null !== (e = n.subscription_listings) && void 0 !== e ? e : [];
                    for (let e of l) e.subscription_plans[0].id === t && await i.fetchSubscriptionPlansForSKU(e.id, void 0, void 0, !0)
                } catch (t) {}
            }
        },
        650509: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                LoadState: function() {
                    return i
                },
                useFetchListingsForApplication: function() {
                    return C
                },
                useFetchEntitlementsForGuild: function() {
                    return R
                },
                useSubscriptionListingsForGroup: function() {
                    return U
                },
                useActiveSubscriptionListingForApplication: function() {
                    return m
                },
                useUnseenEndedApplicationSubscriptionEntitlements: function() {
                    return L
                },
                useFetchListingsForSubscriptions: function() {
                    return y
                },
                useFetchUserApplicationSubscriptionEntitlements: function() {
                    return g
                },
                useApplication: function() {
                    return M
                },
                default: function() {
                    return D
                },
                useEligibleApplicationSubscriptionGuilds: function() {
                    return v
                }
            });
            var u, i, r = n("884691"),
                l = n("446674"),
                a = n("251472"),
                o = n("598981"),
                s = n("299285"),
                c = n("305961"),
                d = n("957255"),
                E = n("10514"),
                S = n("521012"),
                f = n("437712"),
                _ = n("552712"),
                p = n("479952"),
                I = n("524503"),
                T = n("104449"),
                A = n("186211"),
                P = n("90592"),
                N = n("49111");
            (u = i || (i = {}))[u.NOT_LOADED = 0] = "NOT_LOADED", u[u.LOADING = 1] = "LOADING", u[u.LOADED = 2] = "LOADED", u[u.ERROR = 3] = "ERROR";
            let C = function(t, e) {
                    let {
                        refetchOnMount: n = !1
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u = (0, l.useStateFromStores)([A.default], () => null != t ? A.default.getSubscriptionGroupListingsForApplicationFetchState(t) : A.FetchState.FETCHED, [t]);
                    return r.useEffect(() => {
                        if (null == t || null == e) return;
                        let u = A.default.getSubscriptionGroupListingsForApplicationFetchState(t);
                        (n || u === A.FetchState.NOT_FETCHED) && (0, I.fetchAllSubscriptionListingsDataForApplication)(t, e)
                    }, [t, e, n]), {
                        listingsLoaded: u === A.FetchState.FETCHED
                    }
                },
                R = t => {
                    let {
                        guildId: e,
                        canFetch: n = !0,
                        forceRefetch: u = !1
                    } = t, i = (0, l.useStateFromStores)([A.default], () => null != e ? A.default.getEntitlementsForGuildFetchState(e) : null, [e]);
                    return r.useEffect(() => {
                        if (null == e || e === N.ME) return;
                        let t = A.default.getEntitlementsForGuildFetchState(e);
                        n && (t === A.FetchState.NOT_FETCHED || u) && (0, I.fetchEntitlementsForGuild)(e)
                    }, [e, n, u]), {
                        entitlementsLoaded: i === A.FetchState.FETCHED
                    }
                },
                O = t => {
                    let {
                        applicationId: e,
                        canFetch: n = !0,
                        forceRefetch: u = !1,
                        loggedIn: i
                    } = t, o = (0, l.useStateFromStores)([f.default], () => f.default.isFetchedForApplication(e), [e]);
                    return r.useEffect(() => {
                        if (i) {
                            let t = f.default.isFetchingForApplication(e),
                                i = n && !t && !o || u;
                            i && (0, a.fetchUserEntitlements)({
                                entitlementType: N.EntitlementTypes.APPLICATION_SUBSCRIPTION
                            })
                        }
                    }, [e, n, o, u, i]), {
                        entitlementsLoaded: o
                    }
                },
                U = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        includeSoftDeleted: !1
                    };
                    return (0, l.useStateFromStoresArray)([A.default], () => {
                        if (null == t) return [];
                        let n = A.default.getSubscriptionGroupListing(t);
                        if (null == n) return [];
                        let u = [];
                        for (let t of n.subscription_listings_ids) {
                            let n = A.default.getSubscriptionListing(t);
                            if (null != n)(!n.soft_deleted || e.includeSoftDeleted) && u.push(n)
                        }
                        return u
                    }, [t, e.includeSoftDeleted])
                },
                h = [],
                F = [];

            function m(t, e) {
                var n;
                let u = (0, l.useStateFromStores)([S.default], () => S.default.getSubscriptions()),
                    {
                        subscriptionGroupListing: i,
                        guildEntitlements: a,
                        userEntitlements: o
                    } = (0, l.useStateFromStoresObject)([A.default, f.default], () => {
                        var u;
                        return {
                            subscriptionGroupListing: null != t ? A.default.getSubscriptionGroupListingForApplication(t) : null,
                            guildEntitlements: null != t && null != e ? A.default.getApplicationEntitlementsForGuild(t, e) : h,
                            userEntitlements: null != t && null !== (n = null === (u = f.default.getForApplication(t)) || void 0 === u ? void 0 : u.values()) && void 0 !== n ? n : F
                        }
                    }, [t, e]),
                    s = r.useMemo(() => [...a, ...o], [a, o]),
                    c = null == i ? void 0 : i.subscription_listings,
                    {
                        activeSubscriptionListing: d,
                        activeEntitlement: E
                    } = r.useMemo(() => {
                        if (null != c) {
                            for (let t of s)
                                for (let n of c)
                                    if ((0, P.isListingActiveInGuild)(n, t, e)) return {
                                        activeSubscriptionListing: n,
                                        activeEntitlement: t
                                    }
                        }
                        return {
                            activeSubscriptionListing: null,
                            activeEntitlement: null
                        }
                    }, [s, c, e]),
                    _ = r.useMemo(() => {
                        if (null == u) return null;
                        let t = null == d ? void 0 : d.subscription_plans[0].id;
                        for (let e of Object.values(u))
                            if (e.type === N.SubscriptionTypes.APPLICATION) {
                                let n = e.items[0].planId;
                                if (n === t) return e
                            } return null
                    }, [d, u]);
                return {
                    activeSubscription: _,
                    activeSubscriptionListing: d,
                    activeEntitlement: E,
                    subscriptionGroupListing: i
                }
            }

            function L(t) {
                var e;
                let n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "",
                    u = (0, l.useStateFromStores)([d.default], () => d.default.can(N.Permissions.ADMINISTRATOR, t)),
                    {
                        entitlementsLoaded: i
                    } = R({
                        guildId: n,
                        canFetch: u
                    }),
                    a = (0, l.useStateFromStores)([p.default], () => p.default.getLastGuildDismissedTime(n)),
                    o = (0, l.useStateFromStoresArray)([A.default], () => {
                        let t = A.default.getEntitlementsForGuild(n),
                            e = A.default.getEntitlementsForGuild(n, !1),
                            u = t.map(t => t.applicationId);
                        return e.filter(t => !u.includes(t.applicationId))
                    }),
                    s = (0, l.useStateFromStores)([_.default], () => _.default.getSKUs()),
                    c = r.useMemo(() => o.filter(t => {
                        let e = s[t.skuId];
                        return null != e && e.available
                    }), [o, s]);
                return i ? c.filter(t => null != t.endsAt && t.endsAt.getTime() > Math.max(null != a ? a : 0, Date.now() - 2592e6)) : []
            }
            let y = t => {
                    let [e, n] = r.useState(!1), u = r.useMemo(() => t.map(P.getApplicationSubscriptionPlanId), [t]), i = (0, l.useStateFromStoresArray)([E.default], () => u.filter(t => null == E.default.get(t)), [u]);
                    return r.useEffect(() => {
                        i.length > 0 && (n(!0), Promise.all(i.map(t => (0, I.fetchSubscriptionListingForPlan)(t))).catch(() => {}).then(() => {
                            n(!1)
                        }))
                    }, [i]), {
                        loading: e
                    }
                },
                g = () => {
                    let [t, e] = r.useState(i.NOT_LOADED);
                    return r.useEffect(() => {
                        e(i.LOADING), (0, a.fetchUserEntitlements)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: N.EntitlementTypes.APPLICATION_SUBSCRIPTION
                        }).catch(() => {
                            e(i.ERROR)
                        }).then(() => {
                            e(i.LOADED)
                        })
                    }, []), {
                        loadState: t
                    }
                },
                M = t => {
                    let e = (0, o.default)(),
                        n = (0, l.useStateFromStores)([s.default], () => null != t ? s.default.getApplication(t) : null);
                    return null == n && null != t && e && (0, T.getApplication)(t), n
                };

            function D(t) {
                let {
                    applicationId: e,
                    groupListingId: n,
                    guildId: u
                } = t, i = (0, o.default)(), {
                    listingsLoaded: r
                } = C(e, n), {
                    entitlementsLoaded: l
                } = R({
                    guildId: u
                }), {
                    entitlementsLoaded: a
                } = O({
                    applicationId: e,
                    loggedIn: i
                }), {
                    subscriptionGroupListing: s
                } = m(e, u);
                return {
                    applicationSubscriptionListingsShown: null != e && null != n && (null == u || l) && (!i || a) && r && null != s && (0, P.hasPayableSubscriptionPlan)(s)
                }
            }

            function v(t, e) {
                let n = (0, l.useStateFromStores)([c.default], () => c.default.isLoaded()),
                    [u, i] = r.useState([]);
                return r.useEffect(() => {
                    null == e && null != t && n && (0, T.fetchEligibleApplicationSubscriptionGuilds)(t).then(t => {
                        let e = t.map(t => c.default.getGuild(t)).filter(t => null != t);
                        i(e)
                    })
                }, [t, e, n]), u
            }
        },
        104449: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getApplicationSubscriptionGroupListingsForApplication: function() {
                    return a
                },
                getEntitlementsForGuild: function() {
                    return o
                },
                getSubscriptionGroupForSubscriptionPlan: function() {
                    return s
                },
                getApplication: function() {
                    return c
                },
                fetchEligibleApplicationSubscriptionGuilds: function() {
                    return d
                }
            });
            var u = n("872717"),
                i = n("913144"),
                r = n("599417"),
                l = n("49111");
            let a = async (t, e) => {
                let n = await u.default.get({
                    url: l.Endpoints.APPLICATION_SUBSCRIPTION_GROUP_LISTING(t, e)
                });
                return n.body
            }, o = async function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = await u.default.get({
                        url: l.Endpoints.GUILD_ENTITLEMENTS(t),
                        query: {
                            with_sku: !0,
                            with_application: !0,
                            exclude_deleted: e
                        }
                    });
                return n.body
            }, s = async t => {
                let e = await u.default.get({
                    url: l.Endpoints.SUBSCRIPTION_PLAN_GROUP_LISTING(t)
                });
                return e.body
            };

            function c(t) {
                return i.default.dispatch({
                    type: "APPLICATION_FETCH",
                    applicationId: t
                }), u.default.get({
                    url: l.Endpoints.APPLICATION_PUBLIC(t)
                }).then(t => (i.default.dispatch({
                    type: "APPLICATION_FETCH_SUCCESS",
                    application: t.body
                }), t.body)).catch(e => (i.default.dispatch({
                    type: "APPLICATION_FETCH_FAIL",
                    applicationId: t
                }), Promise.reject(new r.default(e))))
            }
            async function d(t) {
                let e = await u.default.get({
                    url: l.Endpoints.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
                    query: {
                        application_id: t
                    }
                });
                return e.body
            }
        },
        186211: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return U
                }
            });
            var u, i, r = n("627445"),
                l = n.n(r),
                a = n("446674"),
                o = n("407846"),
                s = n("913144"),
                c = n("984273"),
                d = n("552712");

            function E(t) {
                return "subscription_listing:".concat(t)
            }

            function S(t) {
                return "application:".concat(t)
            }

            function f(t) {
                return "plan:".concat(t)
            }

            function _(t, e, n) {
                return "entitlement:".concat(t, ":").concat(n, ":").concat(e)
            }

            function p(t, e) {
                return "entitlement:".concat(e, ":").concat(t)
            }(u = i || (i = {}))[u.NOT_FETCHED = 0] = "NOT_FETCHED", u[u.FETCHING = 1] = "FETCHING", u[u.FETCHED = 2] = "FETCHED";
            let I = new o.default(t => [S(t.application_id), ...t.subscription_listings_ids.map(E)], t => t.id),
                T = new o.default(t => [S(t.application_id), f(t.subscription_plans[0].id)], t => t.id),
                A = new o.default(t => [_(t.applicationId, t.isValid(null, d.default), t.guildId), p(t.isValid(null, d.default), t.guildId)], t => t.id),
                P = {},
                N = {};

            function C(t) {
                let e = I.values(S(t));
                return l(e.length <= 1, "Found multiple group listings for application"), e[0]
            }

            function R(t) {
                var e;
                for (let n of (I.set(t.id, t), null !== (e = t.subscription_listings) && void 0 !== e ? e : []))(function(t) {
                    T.set(t.id, t)
                })(n)
            }
            class O extends a.default.Store {
                getSubscriptionGroupListingsForApplicationFetchState(t) {
                    var e;
                    return null !== (e = P[t]) && void 0 !== e ? e : i.NOT_FETCHED
                }
                getSubscriptionGroupListing(t) {
                    return I.get(t)
                }
                getSubscriptionGroupListingForApplication(t) {
                    return C(t)
                }
                getSubscriptionGroupListingForSubscriptionListing(t) {
                    let e = I.values(E(t));
                    return l(e.length <= 1, "Found multiple group listings for listing"), e[0]
                }
                getSubscriptionListing(t) {
                    return T.get(t)
                }
                getSubscriptionListingsForApplication(t) {
                    return T.values(S(t))
                }
                getEntitlementsForGuildFetchState(t) {
                    var e;
                    return null !== (e = N[t]) && void 0 !== e ? e : i.NOT_FETCHED
                }
                getSubscriptionListingForPlan(t) {
                    let e = T.values(f(t));
                    return l(e.length <= 1, "Found multiple listings for plan"), e[0]
                }
                getApplicationEntitlementsForGuild(t, e) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    return A.values(_(t, n, e))
                }
                getEntitlementsForGuild(t) {
                    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return A.values(p(e, t))
                }
            }
            O.displayName = "ApplicationSubscriptionStore";
            var U = new O(s.default, {
                LOGOUT: function() {
                    I.clear(), T.clear(), A.clear(), P = {}, N = {}
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(t) {
                    let {
                        applicationId: e
                    } = t;
                    P[e] = i.FETCHING;
                    let n = C(e);
                    if (null != n)
                        for (let t of n.subscription_listings_ids) T.delete(t)
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(t) {
                    let {
                        applicationId: e,
                        groupListing: n
                    } = t;
                    P[e] = i.FETCHED, R(n)
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(t) {
                    let {
                        applicationId: e
                    } = t;
                    P[e] = i.FETCHED
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
                    let {
                        guildId: e
                    } = t;
                    N[e] = i.FETCHING
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
                    let {
                        guildId: e,
                        entitlements: n
                    } = t;
                    N[e] = i.FETCHED, n.forEach(t => {
                        let e = c.default.createFromServer(t);
                        A.set(e.id, e)
                    })
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
                    let {
                        guildId: e
                    } = t;
                    N[e] = i.NOT_FETCHED
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(t) {
                    let {
                        groupListing: e
                    } = t;
                    R(e)
                }
            })
        },
        90592: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getApplicationSubscriptionPlanId: function() {
                    return a
                },
                hasPayableSubscriptionPlan: function() {
                    return o
                },
                getPayableSubscriptionListing: function() {
                    return s
                },
                isApplicationGuildSubscription: function() {
                    return c
                },
                isApplicationUserSubscription: function() {
                    return d
                },
                isListingActiveInGuild: function() {
                    return E
                }
            });
            var u = n("627445"),
                i = n.n(u),
                r = n("568734"),
                l = n("49111");

            function a(t) {
                let e = t.items;
                return i(1 === e.length, "more than 1 subscription item for application subscription"), e[0].planId
            }

            function o(t) {
                return null != s(t)
            }

            function s(t) {
                var e;
                return null === (e = t.subscription_listings) || void 0 === e ? void 0 : e.find(t => t.published && (c(t.sku_flags) || d(t.sku_flags)) && t.subscription_plans[0].price > 0)
            }

            function c(t) {
                return (0, r.hasFlag)(t, l.SKUFlags.APPLICATION_GUILD_SUBSCRIPTION)
            }

            function d(t) {
                return (0, r.hasFlag)(t, l.SKUFlags.APPLICATION_USER_SUBSCRIPTION)
            }

            function E(t, e, n) {
                return t.subscription_plans[0].sku_id === e.skuId && (c(t.sku_flags) ? null != n && e.guildId === n && n !== l.ME : !!d(t.sku_flags) && null == e.guildId)
            }
        },
        299285: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var u = n("446674"),
                i = n("913144"),
                r = n("653047");
            let l = {},
                a = {},
                o = [];

            function s(t) {
                let {
                    entitlements: e
                } = t, n = !1;
                for (let {
                        sku: t
                    }
                    of e)
                    if (null != t && null != t.application) {
                        let e = t.application;
                        l[e.id] = r.default.createFromServer(e), n = !0
                    } return n && (l = {
                    ...l
                }), n
            }
            class c extends u.default.Store {
                getApplications() {
                    return l
                }
                getGuildApplication(t, e) {
                    if (null != t) {
                        for (let n of Object.values(l))
                            if (n.guildId === t && n.type === e) return n
                    }
                }
                getGuildApplications(t) {
                    return null == t ? o : a[t]
                }
                getApplication(t) {
                    return l[t]
                }
            }
            c.displayName = "ApplicationStore";
            var d = new c(i.default, {
                APPLICATION_FETCH_SUCCESS: function(t) {
                    let {
                        application: e
                    } = t;
                    l = {
                        ...l,
                        [e.id]: r.default.createFromServer(e)
                    }
                },
                APPLICATIONS_FETCH_SUCCESS: function(t) {
                    let {
                        applications: e
                    } = t, n = {
                        ...l
                    };
                    for (let t of e) n[t.id] = r.default.createFromServer(t);
                    l = n
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: s,
                ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: s,
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(t) {
                    let {
                        integrations: e,
                        guildId: n
                    } = t, u = !1, i = [];
                    for (let {
                            application: t
                        }
                        of e) null != t && (i.push(t.id), l[t.id] = t, u = !0);
                    if (u) {
                        l = {
                            ...l
                        }, a[n] = i;
                        let t = {};
                        for (let e in a) t[e] = a[e];
                        a = t
                    }
                    return u
                },
                CONNECTION_OPEN: function() {
                    l = {}, a = {}
                }
            })
        },
        619935: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useBlockedPaymentsConfig: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var u = n("862205"),
                i = n("15733");
            let r = (0, u.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases",
                    label: "Block purchases based on country",
                    defaultConfig: {
                        paymentsBlocked: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Payments Blocked",
                        config: {
                            paymentsBlocked: !0
                        }
                    }]
                }),
                l = (0, u.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases_desktop",
                    label: "Block purchases based on country (desktop specific flags)",
                    defaultConfig: {
                        checkPaymentSource: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Check Payment Source",
                        config: {
                            checkPaymentSource: !0
                        }
                    }]
                });

            function a() {
                let {
                    paymentsBlocked: t
                } = r.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: e
                } = l.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, i.default)();
                return t || e && "RU" === n
            }
            var o = r
        },
        308592: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSubscriptionPlansLoaded: function() {
                    return c
                },
                getSubscriptionPlansLoaded: function() {
                    return d
                }
            });
            var u = n("446674"),
                i = n("605250"),
                r = n("357957"),
                l = n("10514"),
                a = n("521012"),
                o = n("646718");
            new i.default("useSubscriptionPlansLoaded");
            let s = t => {};

            function c() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS];
                return (0, u.useStateFromStores)([r.default, l.default, a.default], () => d(t, [r.default, l.default, a.default]), [t])
            }

            function d() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
                    [n, u, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, l.default, a.default],
                    c = n.paymentSourceIds,
                    d = n.defaultPaymentSourceId,
                    E = u.isLoadedForSKUs(e),
                    S = null === (t = i.getPremiumTypeSubscription()) || void 0 === t ? void 0 : t.paymentSourceId;
                if (null != S && !u.hasPaymentSourceForSKUIds(S, e)) return s("subscription payment source ".concat(S, " not loaded for ").concat(e)), !1;
                if (null != d && !u.hasPaymentSourceForSKUIds(d, e)) return s("default payment source ".concat(d, " not loaded for ").concat(e)), !1;
                for (let t of c)
                    if (!u.hasPaymentSourceForSKUIds(t, e)) return s("payment source ".concat(t, " not loaded for ").concat(e)), !1;
                return s("isLoadedForSKUs ".concat(E)), E
            }
        },
        621746: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var u = n("884691"),
                i = n("446674"),
                r = n("10514");

            function l() {
                let [t, e] = u.useState(void 0), [n, l] = u.useState(void 0), a = (0, i.useStateFromStores)([r.default], () => null != n ? r.default.get(n) : null);
                return {
                    selectedSkuId: t,
                    selectedPlan: a,
                    setSelectedSkuId: e,
                    setSelectedPlanId: l
                }
            }
        },
        642906: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PaymentContextProvider: function() {
                    return w
                },
                PaymentContext: function() {
                    return G
                },
                usePaymentContext: function() {
                    return H
                },
                useForwardedPaymentContext: function() {
                    return B
                }
            });
            var u = n("37983"),
                i = n("884691"),
                r = n("41092"),
                l = n("775560"),
                a = n("748820"),
                o = n("446674"),
                s = n("191225"),
                c = n("650509"),
                d = n("619935"),
                E = n("78345"),
                S = n("467292"),
                f = n("622839"),
                _ = n("105097"),
                p = n("568734"),
                I = n("659632"),
                T = n("719923"),
                A = n("286235"),
                P = n("621746"),
                N = n("854381"),
                C = n("237288"),
                R = n("986681"),
                O = n("702924"),
                U = n("241006"),
                h = n("284797"),
                F = n("383802"),
                m = n("334702"),
                L = n("775325"),
                y = n("403293"),
                g = n("523591"),
                M = n("49111"),
                D = n("646718");
            let v = E.PremiumGiftStyles.STANDARD_BOX,
                b = void 0,
                [G, H, B] = (0, _.default)();

            function w(t) {
                var e, n;
                let {
                    loadId: E,
                    activeSubscription: _,
                    stepConfigs: H,
                    breadcrumbs: B = [],
                    skuIDs: w,
                    isGift: K = !1,
                    giftRecipient: Y,
                    children: k,
                    defaultPlanId: W,
                    purchaseType: x = M.PurchaseTypes.SUBSCRIPTION,
                    applicationId: V,
                    referralCode: j
                } = t, Q = (0, y.default)(), Z = (0, d.useBlockedPaymentsConfig)(), q = (0, C.default)(), {
                    paymentSources: X,
                    hasPaymentSources: z,
                    paymentSourceId: J,
                    setPaymentSourceId: $,
                    hasFetchedPaymentSources: tt
                } = (0, R.default)({
                    isGift: K,
                    activeSubscription: _
                }), te = i.useRef(z), {
                    hasFetchedSubscriptionPlans: tn,
                    priceOptions: tu,
                    setCurrency: ti,
                    currencyLoading: tr,
                    currencies: tl
                } = (0, N.default)({
                    activeSubscription: _,
                    skuIDs: w,
                    paymentSourceId: J,
                    isGift: K
                }), ta = (0, F.default)(), [to, ts] = i.useState(!1), {
                    step: tc,
                    setStep: td,
                    steps: tE,
                    breadcrumbsData: tS
                } = (0, L.default)({
                    stepConfigs: H,
                    breadcrumbs: B
                }), [tf, t_] = (0, h.default)(tc), {
                    paymentError: tp,
                    paymentAuthenticationState: tI
                } = (0, O.default)(), {
                    purchaseError: tT,
                    purchaseErrorBlockRef: tA,
                    setPurchaseError: tP
                } = (0, U.default)(), tN = (0, l.useLazyValue)(() => {
                    let t = null != E ? E : (0, a.v4)();
                    return A.default.addBreadcrumb({
                        message: "Checkout session ID: ".concat(t)
                    }), {
                        loadId: t,
                        startTime: Date.now()
                    }
                }), {
                    selectedSkuId: tC,
                    selectedPlan: tR,
                    setSelectedSkuId: tO,
                    setSelectedPlanId: tU
                } = (0, P.default)(), [th, tF] = (0, o.useStateFromStoresArray)([S.default], () => [S.default.purchaseTokenAuthState, S.default.purchaseTokenHash]), [tm, tL] = (0, o.useStateFromStoresArray)([g.default], () => [g.default.browserCheckoutState, g.default.loadId]), [ty, tg] = i.useState(null), [tM, tD] = i.useState(null), [tv, tb] = i.useState(null), [tG, tH] = i.useState(null), [tB, tw] = i.useState(null), [tK, tY] = i.useState(void 0), [tk, tW] = i.useState([]), tx = i.useMemo(() => null == tR || (0, T.isPremiumSubscriptionPlan)(tR.id), [tR]), [tV, tj] = i.useState((0, I.isCustomGiftEnabled)(Y) ? v : b), tQ = i.useRef(null != _ ? _.planId : null);
                i.useEffect(() => {
                    null == tQ.current && null != _ && (tQ.current = _.planId)
                }, [_]);
                let {
                    skusById: tZ,
                    hasFetchedSkus: tq,
                    skuPricePreviewsById: tX
                } = (0, m.default)({
                    applicationId: null != V ? V : D.PREMIUM_SUBSCRIPTION_APPLICATION,
                    skuIDs: w,
                    currentPaymentSourceId: J
                }), tz = i.useMemo(() => {
                    if (null == tC) return null;
                    let t = tX[tC];
                    if (null == t) return null;
                    let e = null != J ? J : f.NO_PAYMENT_SOURCE;
                    return t[e]
                }, [tC, tX, J]), tJ = (0, c.useApplication)(V), t$ = (0, p.hasFlag)(null !== (e = null == tJ ? void 0 : tJ.flags) && void 0 !== e ? e : 0, M.ApplicationFlags.EMBEDDED) && (0, p.hasFlag)(null !== (n = null == tJ ? void 0 : tJ.flags) && void 0 !== n ? n : 0, M.ApplicationFlags.EMBEDDED_IAP), t0 = (0, o.useStateFromStores)([s.default], () => Array.from(s.default.getSelfEmbeddedActivities().values()).find(t => {
                    let {
                        application_id: e
                    } = t;
                    return V === e
                })), t1 = null != t0 ? t0.activity_id : void 0;
                return (0, u.jsx)(G.Provider, {
                    value: {
                        stripe: Q,
                        contextMetadata: tN,
                        blockedPayments: Z,
                        isGift: K,
                        giftRecipient: Y,
                        activeSubscription: _,
                        hasFetchedSubscriptions: q,
                        hasFetchedSubscriptionPlans: tn,
                        updatedSubscription: tG,
                        setUpdatedSubscription: tH,
                        subscriptionMetadataRequest: tB,
                        setSubscriptionMetadataRequest: tw,
                        hasFetchedPaymentSources: tt,
                        paymentSources: X,
                        hasPaymentSources: z,
                        paymentSourceId: J,
                        setPaymentSourceId: $,
                        priceOptions: tu,
                        setCurrency: ti,
                        currencyLoading: tr,
                        currencies: tl,
                        ...ta,
                        hasAcceptedTerms: to,
                        setHasAcceptedTerms: ts,
                        step: tc,
                        setStep: td,
                        steps: tE,
                        stepConfigs: H,
                        breadcrumbs: tS,
                        purchaseState: tf,
                        setPurchaseState: t_,
                        paymentAuthenticationState: tI,
                        paymentError: tp,
                        purchaseError: tT,
                        setPurchaseError: tP,
                        purchaseErrorBlockRef: tA,
                        purchaseTokenAuthState: th,
                        purchaseTokenHash: tF,
                        browserCheckoutState: tm,
                        browserCheckoutStateLoadId: tL,
                        bodyNode: ty,
                        setBodyNode: tg,
                        footerNode: tM,
                        setFooterNode: tD,
                        modalOverlayNode: tv,
                        setModalOverlayNode: tb,
                        selectedSkuId: tC,
                        selectedPlan: tR,
                        setSelectedSkuId: tO,
                        setSelectedPlanId: tU,
                        readySlideId: tK,
                        setReadySlideId: tY,
                        defaultPlanId: W,
                        isPremium: tx,
                        startedPaymentFlowWithPaymentSourcesRef: te,
                        startingPremiumSubscriptionPlanIdRef: tQ,
                        selectedGiftStyle: tV,
                        setSelectedGiftStyle: tj,
                        hasFetchedSkus: tq,
                        skusById: tZ,
                        skuPricePreviewsById: tX,
                        selectedSkuPricePreview: tz,
                        application: tJ,
                        purchaseType: x,
                        isEmbeddedIAP: t$,
                        activitySessionId: t1,
                        entitlementsGranted: tk,
                        setEntitlementsGranted: tW,
                        referralCode: j
                    },
                    children: (0, u.jsx)(r.Elements, {
                        options: M.StripeElementsOptions,
                        stripe: Q,
                        children: k
                    })
                })
            }
        },
        85336: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Step: function() {
                    return i
                },
                COLLAPSED_PAYMENT_BREADCRUMB_STEPS: function() {
                    return E
                },
                getLabelForStep: function() {
                    return S
                },
                errorToStep: function() {
                    return f
                },
                usePurchaseStateForStep: function() {
                    return _
                }
            });
            var u, i, r = n("884691"),
                l = n("448993"),
                a = n("605250"),
                o = n("745279"),
                s = n("286350"),
                c = n("782340");
            let d = new a.default("PaymentSteps");
            (u = i || (i = {})).PAYMENT_TYPE = "payment_type", u.CREDIT_CARD_INFORMATION = "credit_card_information", u.PAYPAL_INFORMATION = "paypal_information", u.VENMO_INFORMATION = "venmo_information", u.SOFORT_INFORMATION = "sofort_information", u.PRZELEWY24_INFORMATION = "przelewy24_information", u.EPS_INFORMATION = "eps_information", u.IDEAL_INFORMATION = "ideal_information", u.CASH_APP_INFORMATION = "cash_app_information", u.PAYMENT_REQUEST_INFORMATION = "payment_request_information", u.ADDRESS = "address", u.AWAITING_AUTHENTICATION = "awaiting_authentication", u.SKU_SELECT = "sku_select", u.PLAN_SELECT = "plan_select", u.PREMIUM_UPSELL = "premium_upsell", u.PREMIUM_GUILD_UPSELL = "premium_guild_upsell", u.REVIEW = "review", u.CONFIRM = "confirm", u.CLAIM_FREE_SKU = "claim_free_sku", u.SKU_PREVIEW = "sku_preview", u.LOADING_PAYMENT_SOURCES = "loading_payment_sources", u.SHOP = "shop", u.PROMOTION_INFO = "promotion_info", u.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth", u.BENEFITS = "benefits", u.WHAT_YOU_LOSE = "what_you_lose", u.ADD_PAYMENT_STEPS = "add_payment_steps", u.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout";
            let E = new Set([i.CREDIT_CARD_INFORMATION, i.PAYMENT_REQUEST_INFORMATION, i.PAYPAL_INFORMATION, i.VENMO_INFORMATION, i.CASH_APP_INFORMATION, i.ADDRESS, i.CLAIM_FREE_SKU, i.SKU_PREVIEW, i.PREMIUM_UPSELL, i.SOFORT_INFORMATION, i.PRZELEWY24_INFORMATION]);

            function S(t) {
                switch (t) {
                    case i.PLAN_SELECT:
                        return c.default.Messages.BILLING_STEP_SELECT_PLAN;
                    case i.PAYMENT_TYPE:
                        return c.default.Messages.BILLING_STEP_PAYMENT;
                    case i.AWAITING_PURCHASE_TOKEN_AUTH:
                    case i.REVIEW:
                        return c.default.Messages.BILLING_STEP_REVIEW;
                    case i.SHOP:
                        return c.default.Messages.BILLING_STEP_SHOP;
                    case i.ADD_PAYMENT_STEPS:
                        return c.default.Messages.BILLING_STEP_PAYMENT;
                    case i.PAYMENT_REQUEST_INFORMATION:
                        return c.default.Messages.BILLING_STEP_PAYMENT_INFO;
                    case i.CREDIT_CARD_INFORMATION:
                        return c.default.Messages.PAYMENT_SOURCE_INFORMATION;
                    case i.ADDRESS:
                        return c.default.Messages.BILLING_ADDRESS;
                    case i.PAYPAL_INFORMATION:
                        return c.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
                    case i.VENMO_INFORMATION:
                        return c.default.Messages.PAYMENT_SOURCE_VENMO_DETAILS;
                    case i.SOFORT_INFORMATION:
                        return c.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
                    case i.PRZELEWY24_INFORMATION:
                        return c.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO;
                    case i.CASH_APP_INFORMATION:
                        return c.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_DETAILS
                }
                throw Error("Unexpected step: ".concat(t))
            }

            function f(t) {
                if (null != t) {
                    if (!(t instanceof l.BillingError)) throw d.error(t), (0, o.captureBillingException)(t), Error("Unexpected error type");
                    if (t.hasCardError()) return i.CREDIT_CARD_INFORMATION;
                    if (t.hasAddressError()) return i.ADDRESS
                }
                return null
            }

            function _(t, e, n) {
                r.useEffect(() => {
                    null != t && t !== i.REVIEW && e !== s.PurchaseState.WAITING && e !== s.PurchaseState.COMPLETED && n(s.PurchaseState.WAITING)
                }, [t, e, n])
            }
        },
        286350: function(t, e, n) {
            "use strict";
            var u, i;
            n.r(e), n.d(e, {
                PurchaseState: function() {
                    return u
                }
            }), (i = u || (u = {})).WAITING = "WAITING", i.PURCHASING = "PURCHASING", i.FAIL = "FAIL", i.COMPLETED = "COMPLETED"
        },
        854381: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var u = n("446674"),
                i = n("10514"),
                r = n("713518"),
                l = n("646718"),
                a = n("843455");

            function o(t) {
                var e, n;
                let {
                    activeSubscription: o,
                    skuIDs: s,
                    paymentSourceId: c,
                    isGift: d
                } = t;
                s = s.filter(t => t !== l.PremiumSubscriptionSKUs.NONE);
                let E = (0, u.useStateFromStores)([i.default], () => {
                        let t = i.default.getPlanIdsForSkus(s).filter(t => !d || l.PREMIUM_PLANS.has(t));
                        return t.length > 0 ? i.default.get(t[0]) : null
                    }),
                    S = null == E ? [] : (0, r.getCurrencies)(E.id, c, d),
                    f = null !== (n = null !== (e = S.find(t => t === (null == o ? void 0 : o.currency))) && void 0 !== e ? e : S[0]) && void 0 !== n ? n : a.CurrencyCodes.USD;
                return {
                    ...(0, r.useCurrencyWithPaymentSourceChange)(f, null == E ? void 0 : E.id, c, d, s),
                    currencies: S
                }
            }
        },
        237288: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var u = n("884691"),
                i = n("446674"),
                r = n("850068"),
                l = n("521012");

            function a() {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.hasFetchedSubscriptions());
                return u.useEffect(() => {
                    !t && (0, r.fetchSubscriptions)()
                }, [t]), t
            }
        },
        986681: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var u = n("884691"),
                i = n("446674"),
                r = n("850068"),
                l = n("357957");

            function a(t) {
                let {
                    isGift: e,
                    activeSubscription: n
                } = t, {
                    defaultPaymentSourceId: a,
                    paymentSources: o,
                    hasFetchedPaymentSources: s
                } = (0, i.useStateFromStoresObject)([l.default], () => ({
                    defaultPaymentSourceId: l.default.defaultPaymentSourceId,
                    paymentSources: l.default.paymentSources,
                    hasFetchedPaymentSources: l.default.hasFetchedPaymentSources
                })), c = (t, e, n) => t || (null == e ? void 0 : e.paymentSourceId) == null ? n : e.paymentSourceId, [d, E] = u.useState(() => c(e, n, a));
                return u.useEffect(() => {
                    s ? E(c(e, n, a)) : (0, r.fetchPaymentSources)()
                }, [s, e, n, a]), {
                    paymentSources: o,
                    hasPaymentSources: Object.keys(o).length > 0,
                    paymentSourceId: d,
                    setPaymentSourceId: E,
                    hasFetchedPaymentSources: s
                }
            }
        },
        702924: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var u = n("446674"),
                i = n("877261"),
                r = n("926223"),
                l = n("758764");

            function a() {
                let t = (0, u.useStateFromStores)([r.default], () => r.default.error),
                    [e, n] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.error, l.default.isAwaitingAuthentication]);
                return {
                    paymentError: null != e ? e : t,
                    paymentAuthenticationState: n ? i.PaymentAuthenticationState.PENDING : null != e ? i.PaymentAuthenticationState.ERROR : i.PaymentAuthenticationState.NONE
                }
            }
        },
        241006: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var u = n("884691");

            function i() {
                let [t, e] = u.useState(null), n = u.useRef(null);
                return u.useEffect(() => {
                    null != t && null != n.current && n.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [t]), {
                    purchaseError: t,
                    setPurchaseError: e,
                    purchaseErrorBlockRef: n
                }
            }
        },
        284797: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var u = n("884691"),
                i = n("85336"),
                r = n("286350");

            function l(t) {
                let [e, n] = u.useState(r.PurchaseState.WAITING);
                return u.useEffect(() => {
                    null != t && t !== i.Step.REVIEW && e !== r.PurchaseState.WAITING && e !== r.PurchaseState.COMPLETED && n(r.PurchaseState.WAITING)
                }, [t, e, n]), [e, n]
            }
        },
        383802: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var u = n("884691"),
                i = n("976979"),
                r = n("446674"),
                l = n("160299");

            function a() {
                let [t, e] = u.useState(!1), [n, a] = u.useState(!1), o = (0, r.useStateFromStores)([l.default], () => i.CountryCodesSets.EEA_COUNTRIES.has(l.default.ipCountryCodeWithFallback));
                return {
                    hasViewedPurchaseTerms: t,
                    setHasViewedPurchaseTerms: e,
                    showWithdrawalWaiver: o,
                    hasAcceptedWithdrawalWaiver: !o || n,
                    setHasAcceptedWithdrawalWaiver: a
                }
            }
        },
        334702: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var u = n("884691"),
                i = n("65597"),
                r = n("465527"),
                l = n("622839"),
                a = n("552712"),
                o = n("646718");

            function s(t) {
                let {
                    applicationId: e,
                    skuIDs: n,
                    currentPaymentSourceId: s
                } = t, c = u.useMemo(() => n.filter(t => !o.ACTIVE_PREMIUM_SKUS.includes(t)), [n]), d = (0, i.default)([a.default], () => c.every(t => !a.default.isFetching(t) && null != a.default.get(t))), E = (0, i.useStateFromStoresObject)([a.default], () => {
                    let t = {};
                    for (let n of c) {
                        var e;
                        t[n] = null !== (e = a.default.get(n)) && void 0 !== e ? e : void 0
                    }
                    return t
                }, [c]);
                u.useEffect(() => {
                    for (let t of c) !a.default.isFetching(t) && null == a.default.get(t) && (0, r.fetchSKU)(e, t)
                }, [e, c]);
                let S = (0, i.useStateFromStoresObject)([l.default], () => {
                    let t = {};
                    for (let n of c) {
                        var e;
                        t[n] = null !== (e = l.default.getPricesForSku(n)) && void 0 !== e ? e : void 0
                    }
                    return t
                }, [c]);
                return u.useEffect(() => {
                    for (let t of c) {
                        let n = l.default.getPricesForSku(t),
                            u = null != s ? s : l.NO_PAYMENT_SOURCE;
                        (null == n || null == n[u]) && (0, r.fetchPurchasePreview)(e, t, s)
                    }
                }, [e, c, s]), {
                    hasFetchedSkus: d,
                    skusById: E,
                    skuPricePreviewsById: S
                }
            }
        },
        775325: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var u = n("884691");

            function i(t) {
                var e;
                let {
                    stepConfigs: n,
                    breadcrumbs: i
                } = t, [r, l] = u.useState(null === (e = n[0]) || void 0 === e ? void 0 : e.key), a = n.map(t => t.key).filter(t => null != t), o = n.filter(t => {
                    var e;
                    return null != t.key && (null == t ? void 0 : null === (e = t.options) || void 0 === e ? void 0 : e.useBreadcrumbLabel) != null
                }).map(t => ({
                    id: t.key,
                    useBreadcrumbLabel: t.options.useBreadcrumbLabel
                })).sort((t, e) => null != i ? i.indexOf(t.id) - i.indexOf(e.id) : 0);
                return {
                    steps: a,
                    step: r,
                    setStep: l,
                    breadcrumbsData: o
                }
            }
        },
        403293: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var u = n("884691"),
                i = n("745279"),
                r = n("520713");

            function l() {
                let [t, e] = u.useState(null);
                return u.useEffect(() => {
                    (0, r.getStripe)().then(t => e(t)).catch(t => {
                        (0, i.captureBillingException)(t)
                    })
                }, []), t
            }
        },
        523591: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserCheckoutState: function() {
                    return i
                },
                default: function() {
                    return c
                }
            });
            var u, i, r = n("446674"),
                l = n("913144");
            (u = i || (i = {}))[u.UNKNOWN = 0] = "UNKNOWN", u[u.PENDING = 1] = "PENDING", u[u.DONE = 2] = "DONE";
            let a = i.UNKNOWN,
                o = null;
            class s extends r.default.Store {
                get browserCheckoutState() {
                    return a
                }
                get loadId() {
                    return o
                }
            }
            s.displayName = "BrowserCheckoutStateStore";
            var c = new s(l.default, {
                USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function(t) {
                    a = i.PENDING, o = t.loadId
                },
                USER_PAYMENT_BROWSER_CHECKOUT_DONE: function(t) {
                    o === t.loadId && (a = i.DONE)
                }
            })
        },
        78345: function(t, e, n) {
            "use strict";
            var u, i, r, l;
            n.r(e), n.d(e, {
                PremiumHeaderThemes: function() {
                    return u
                },
                PremiumGiftStyles: function() {
                    return i
                },
                PromotionFlags: function() {
                    return a
                }
            }), (r = u || (u = {}))[r.DEFAULT = 0] = "DEFAULT", r[r.WINTER = 1] = "WINTER", (l = i || (i = {}))[l.SNOWGLOBE = 1] = "SNOWGLOBE", l[l.BOX = 2] = "BOX", l[l.CUP = 3] = "CUP", l[l.STANDARD_BOX = 4] = "STANDARD_BOX", l[l.CAKE = 5] = "CAKE", l[l.CHEST = 6] = "CHEST", l[l.COFFEE = 7] = "COFFEE";
            let a = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        15733: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var u = n("884691"),
                i = n("446674"),
                r = n("913144"),
                l = n("850068"),
                a = n("271938"),
                o = n("160299"),
                s = n("357957");

            function c() {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
                    e = (0, i.useStateFromStores)([o.default], () => o.default.ipCountryCode),
                    n = (0, i.useStateFromStores)([a.default], () => a.default.isAuthenticated());
                return u.useEffect(() => {
                    r.default.wait(() => {
                        n && !o.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && l.fetchPaymentSources()
                    })
                }, [n]), u.useEffect(() => {
                    n && !o.default.ipCountryCodeLoaded && l.fetchIpCountryCode()
                }, [e, n]), {
                    defaultBillingCountryCode: t,
                    ipCountryCode: e
                }
            }
        },
        877261: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PaymentAuthenticationState: function() {
                    return i
                },
                usePaymentStepForAuthentication: function() {
                    return E
                },
                usePaymentAuthenticationPoller: function() {
                    return S
                }
            });
            var u, i, r = n("884691"),
                l = n("446674"),
                a = n("862337"),
                o = n("850068"),
                s = n("619443"),
                c = n("85336"),
                d = n("758764");

            function E(t, e, n) {
                let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = arguments.length > 4 ? arguments[4] : void 0;
                r.useEffect(() => {
                    null != t && (e === i.PENDING && t !== c.Step.AWAITING_AUTHENTICATION ? n(c.Step.AWAITING_AUTHENTICATION) : t === c.Step.AWAITING_AUTHENTICATION && (e === i.ERROR ? n(c.Step.REVIEW) : e === i.NONE && (u ? null != l ? l() : n(c.Step.REVIEW) : n(c.Step.CONFIRM))))
                }, [t, e, n, u, l])
            }(u = i || (i = {}))[u.PENDING = 1] = "PENDING", u[u.ERROR = 2] = "ERROR", u[u.NONE = 3] = "NONE";

            function S(t) {
                let e = (0, l.useStateFromStores)([d.default], () => d.default.awaitingPaymentId),
                    n = (0, l.useStateFromStores)([s.default], () => s.default.isConnected()),
                    u = r.useRef(new a.Interval);
                r.useEffect(() => {
                    n || null == e || t !== i.PENDING ? u.current.stop() : u.current.start(5e3, () => (0, o.fetchPayment)(e))
                }, [e, t, n])
            }
        },
        926223: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return y
                }
            });
            var u = n("446674"),
                i = n("913144"),
                r = n("520713");
            let l = "",
                a = null,
                o = "",
                s = null,
                c = !1,
                d = null,
                E = "",
                S = "",
                f = "",
                _ = "",
                p = "",
                I = "",
                T = "",
                A = "",
                P = !1,
                N = null,
                C = null,
                R = null,
                O = null;

            function U() {
                s = null, l = "", a = null, o = "", c = !1, d = null, E = "US", S = "", f = "", _ = "", p = "", I = "", T = "", A = "", P = !1, N = null, C = null, R = null, O = null
            }

            function h(t) {
                S = t.name, E = t.country, _ = t.line1, p = t.line2, I = t.city, T = t.postalCode, A = t.state, f = t.email
            }

            function F() {
                N = null
            }

            function m(t) {
                let {
                    error: e
                } = t;
                N = e
            }
            class L extends u.default.Store {
                get stripePaymentMethod() {
                    return s
                }
                get popupCallbackCalled() {
                    return R
                }
                get braintreeEmail() {
                    return l
                }
                get braintreeNonce() {
                    return a
                }
                get venmoUsername() {
                    return o
                }
                get redirectedPaymentId() {
                    return C
                }
                get adyenPaymentData() {
                    return d
                }
                get redirectedPaymentSourceId() {
                    return O
                }
                getCreditCardInfo() {
                    return {
                        name: S
                    }
                }
                get isCardInfoValid() {
                    return c
                }
                getBillingAddressInfo() {
                    return {
                        name: S,
                        email: f,
                        country: E,
                        line1: _,
                        line2: p,
                        city: I,
                        postalCode: T,
                        state: A
                    }
                }
                get isBillingAddressInfoValid() {
                    return P
                }
                get error() {
                    return N
                }
            }
            L.displayName = "NewPaymentSourceStore";
            var y = new L(i.default, {
                NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function(t) {
                    let {
                        stripePaymentMethod: e
                    } = t;
                    if (null == e) {
                        U();
                        return
                    }
                    s = e;
                    let {
                        billingAddressInfo: n
                    } = r.parseStripePaymentMethod(s);
                    h(n)
                },
                NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function(t) {
                    let {
                        info: e,
                        isValid: n
                    } = t;
                    S = e.name, c = n
                },
                NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function(t) {
                    let {
                        info: e,
                        isValid: n
                    } = t;
                    null != e.name && "" !== e.name && (S = e.name), E = e.country, S = e.name, _ = e.line1, p = e.line2, I = e.city, T = e.postalCode, A = e.state, f = e.email, P = n
                },
                BRAINTREE_TOKENIZE_PAYPAL_START: function() {
                    l = "", a = null
                },
                BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function(t) {
                    let {
                        email: e,
                        nonce: n,
                        billingAddress: u
                    } = t;
                    l = e, a = n, h(u), P = E.length > 0
                },
                BRAINTREE_TOKENIZE_VENMO_START: function() {
                    o = "", a = null
                },
                BRAINTREE_TOKENIZE_VENMO_SUCCESS: function(t) {
                    let {
                        username: e,
                        nonce: n
                    } = t;
                    o = e, a = n
                },
                ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function(t) {
                    let {
                        data: e
                    } = t;
                    d = e
                },
                BILLING_PAYMENT_SOURCE_CREATE_START: F,
                MODAL_POP: F,
                NEW_PAYMENT_SOURCE_CLEAR_ERROR: F,
                BILLING_PAYMENT_SOURCE_CREATE_FAIL: m,
                STRIPE_TOKEN_FAILURE: m,
                BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: U,
                LOGOUT: U,
                BILLING_POPUP_BRIDGE_CALLBACK: function(t) {
                    let {
                        query: e
                    } = t;
                    (null == e ? void 0 : e.payment_id) != null ? (R = !0, C = e.payment_id) : (null == e ? void 0 : e.payment_source_id) != null && (R = !0, O = e.payment_source_id)
                },
                RESET_PAYMENT_ID: function() {
                    R = !1, C = null
                }
            })
        },
        758764: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return P
                }
            });
            var u = n("446674"),
                i = n("913144"),
                r = n("596523"),
                l = n("465527"),
                a = n("736978"),
                o = n("745279"),
                s = n("520713"),
                c = n("49111"),
                d = n("782340");
            let E = !1,
                S = null,
                f = null;

            function _() {
                E = !1, f = null
            }

            function p(t) {
                let {
                    error: e
                } = t, {
                    code: n,
                    paymentId: u
                } = e;
                if (n !== a.default.ErrorCodes.AUTHENTICATION_REQUIRED) return E = !1, !1;
                !E && (E = !0, S = u, I(u))
            }
            async function I(t) {
                if (null == t) return;
                let {
                    error: e
                } = await (0, s.authenticatePaymentIntentForPaymentId)(t);
                if (null != e) {
                    i.default.dispatch({
                        type: "PAYMENT_AUTHENTICATION_ERROR",
                        error: new a.default(d.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR)
                    });
                    let t = Error(e);
                    (0, o.captureBillingException)(t, {
                        extra: {
                            authenticationError: e
                        }
                    })
                }
            }

            function T(t) {
                let {
                    payment: e
                } = t;
                if (!E || e.id !== S || ![c.PaymentStatusTypes.COMPLETED, c.PaymentStatusTypes.CANCELED].includes(e.status)) return !1;
                E = !1, f = null, S = null, i.default.wait(r.clearError), i.default.wait(l.clearPurchaseError)
            }
            class A extends u.default.Store {
                get isAwaitingAuthentication() {
                    return E
                }
                get error() {
                    return f
                }
                get awaitingPaymentId() {
                    return S
                }
            }
            A.displayName = "PaymentAuthenticationStore";
            var P = new A(i.default, {
                BILLING_SUBSCRIPTION_UPDATE_START: _,
                PAYMENT_AUTHENTICATION_CLEAR_ERROR: _,
                PREMIUM_PAYMENT_ERROR_CLEAR: _,
                PREMIUM_PAYMENT_MODAL_CLOSE: _,
                PREMIUM_PAYMENT_MODAL_OPEN: _,
                PREMIUM_PAYMENT_SUBSCRIBE_START: _,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: _,
                PREMIUM_PAYMENT_UPDATE_SUCCESS: _,
                SKU_PURCHASE_MODAL_CLOSE: _,
                SKU_PURCHASE_MODAL_OPEN: _,
                SKU_PURCHASE_START: _,
                SKU_PURCHASE_SUCCESS: _,
                BILLING_SUBSCRIPTION_UPDATE_FAIL: p,
                PREMIUM_PAYMENT_SUBSCRIBE_FAIL: p,
                PREMIUM_PAYMENT_UPDATE_FAIL: p,
                SKU_PURCHASE_FAIL: p,
                GIFT_CODE_REDEEM_FAILURE: p,
                PAYMENT_AUTHENTICATION_ERROR: function(t) {
                    let {
                        error: e
                    } = t;
                    f = e, E = !1
                },
                PAYMENT_UPDATE: T,
                BILLING_PAYMENT_FETCH_SUCCESS: T
            })
        },
        467292: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PurchaseTokenAuthState: function() {
                    return i
                },
                default: function() {
                    return _
                }
            });
            var u, i, r = n("446674"),
                l = n("913144"),
                a = n("736978"),
                o = n("619443");
            (u = i || (i = {}))[u.UNKNOWN = 0] = "UNKNOWN", u[u.PENDING = 1] = "PENDING", u[u.SUCCESS = 2] = "SUCCESS", u[u.ERROR = 3] = "ERROR";
            let s = i.UNKNOWN,
                c = null,
                d = null;

            function E(t) {
                let {
                    error: e
                } = t, n = e instanceof a.default ? e : new a.default(e);
                o.default.isConnected() && n.code === a.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (s = i.PENDING)
            }

            function S() {
                s = i.UNKNOWN, c = null, d = null
            }
            class f extends r.default.Store {
                get purchaseTokenAuthState() {
                    return s
                }
                get purchaseTokenHash() {
                    return c
                }
                get expiresAt() {
                    return d
                }
            }
            f.displayName = "PurchaseTokenAuthStore";
            var _ = new f(l.default, {
                SKU_PURCHASE_FAIL: E,
                PREMIUM_PAYMENT_SUBSCRIBE_FAIL: E,
                USER_PAYMENT_CLIENT_ADD: function(t) {
                    s = i.SUCCESS, c = t.purchaseTokenHash, d = t.expiresAt
                },
                BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: S,
                BILLING_SUBSCRIPTION_UPDATE_START: S,
                PAYMENT_AUTHENTICATION_CLEAR_ERROR: S,
                PREMIUM_PAYMENT_ERROR_CLEAR: S,
                PREMIUM_PAYMENT_MODAL_CLOSE: S,
                PREMIUM_PAYMENT_MODAL_OPEN: S,
                PREMIUM_PAYMENT_SUBSCRIBE_START: S,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: S,
                PREMIUM_PAYMENT_UPDATE_SUCCESS: S,
                SKU_PURCHASE_MODAL_CLOSE: S,
                SKU_PURCHASE_MODAL_OPEN: S,
                SKU_PURCHASE_START: S,
                SKU_PURCHASE_SUCCESS: S
            })
        },
        437712: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return O
                }
            });
            var u = n("917351"),
                i = n.n(u),
                r = n("446674"),
                l = n("913144"),
                a = n("984273"),
                o = n("686470"),
                s = n("964889"),
                c = n("552712");
            let d = {},
                E = {},
                S = {},
                f = {},
                _ = !1,
                p = !1,
                I = new Set,
                T = new Set,
                A = {};

            function P(t) {
                d[t.id] = a.default.createFromServer(t), null == S[t.sku_id] && (S[t.sku_id] = new Set), null == f[t.application_id] && (f[t.application_id] = new Set), null != t.subscription_id && (null == A[t.subscription_id] && (A[t.subscription_id] = new Set), A[t.subscription_id].add(t.id)), f[t.application_id].add(t.id), S[t.sku_id].add(t.id)
            }

            function N(t) {
                E[t.id] = a.default.createFromServer(t)
            }

            function C(t) {
                return P(t.entitlement)
            }
            class R extends r.default.Store {
                initialize() {
                    this.syncWith([o.default], () => !0)
                }
                get(t) {
                    return d[t]
                }
                getGiftable() {
                    return i.values(E)
                }
                getForApplication(t) {
                    let e = f[t];
                    if (null == e) return null;
                    let n = new Set;
                    for (let t of e) n.add(d[t]);
                    return n
                }
                getForSku(t) {
                    let e = S[t];
                    if (null == e) return null;
                    let n = new Set;
                    for (let t of e) n.add(d[t]);
                    return n
                }
                get fetchingAllEntitlements() {
                    return _
                }
                get fetchedAllEntitlements() {
                    return p
                }
                get applicationIdsFetching() {
                    return I
                }
                get applicationIdsFetched() {
                    return T
                }
                isFetchingForApplication(t) {
                    return this.fetchingAllEntitlements || null != t && this.applicationIdsFetching.has(t)
                }
                isFetchedForApplication(t) {
                    return this.fetchedAllEntitlements || null != t && this.applicationIdsFetched.has(t)
                }
                getForSubscription(t) {
                    let e = A[t];
                    if (null == e) return null;
                    let n = new Set;
                    for (let t of e) n.add(d[t]);
                    return n
                }
                isEntitledToSku(t, e, n) {
                    let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        i = S[e];
                    if (null != i)
                        for (let e of i) {
                            let n = d[e];
                            if (null != n && n.isValid(t, c.default, u)) return !0
                        }
                    if (T.has(n)) return !1;
                    let r = null != u ? o.default.getLibraryApplication(n, u) : o.default.getActiveLibraryApplication(n);
                    return !!(null != r && r.sku.id === e && (0, s.isUserEntitledToLibraryApplication)(r)) || null
                }
                hasFetchedForApplicationIds(t) {
                    return t.every(t => T.has(t))
                }
            }
            R.displayName = "EntitlementStore";
            var O = new R(l.default, {
                ENTITLEMENT_FETCH_APPLICATION_START: function(t) {
                    let {
                        applicationId: e
                    } = t;
                    I.add(e)
                },
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function(t) {
                    let {
                        applicationId: e,
                        entitlements: n
                    } = t;
                    for (let t of (I.delete(e), T.add(e), n)) !0 !== t.consumed && P(t)
                },
                ENTITLEMENT_FETCH_APPLICATION_FAIL: function() {},
                ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(t) {
                    let {
                        entitlements: e
                    } = t;
                    E = {}, e.forEach(N)
                },
                SKU_PURCHASE_SUCCESS: function(t) {
                    let {
                        entitlements: e
                    } = t;
                    for (let t of e) P(t)
                },
                LIBRARY_FETCH_SUCCESS: function(t) {
                    let {
                        libraryApplications: e
                    } = t;
                    for (let t of e)
                        if (null != t.entitlements)
                            for (let e of t.entitlements) P(e)
                },
                ENTITLEMENT_CREATE: C,
                ENTITLEMENT_UPDATE: C,
                ENTITLEMENT_DELETE: function(t) {
                    return function(t) {
                        delete d[t.id];
                        let e = f[t.application_id];
                        null != e && e.delete(t.id);
                        let n = S[t.sku_id];
                        if (null != n && n.delete(t.id), null != t.subscription_id) {
                            let e = A[t.subscription_id];
                            null != e && e.delete(t.id)
                        }
                    }(t.entitlement)
                },
                LOGOUT: function() {
                    d = {}, S = {}, f = {}, _ = !1, p = !1, I = new Set, T = new Set
                },
                ENTITLEMENTS_FETCH_FOR_USER_START: function() {
                    _ = !0
                },
                ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function(t) {
                    let {
                        entitlements: e
                    } = t;
                    for (let t of (p = !0, _ = !1, e)) P(t)
                },
                ENTITLEMENTS_FETCH_FOR_USER_FAIL: function() {
                    p = !1, _ = !1
                }
            })
        },
        622839: function(t, e, n) {
            "use strict";
            let u, i;
            n.r(e), n.d(e, {
                NO_PAYMENT_SOURCE: function() {
                    return o
                },
                default: function() {
                    return U
                }
            });
            var r = n("446674"),
                l = n("913144"),
                a = n("49111");
            let o = "no_payment_source",
                s = null,
                c = null,
                d = null,
                E = null,
                S = null,
                f = {},
                _ = null,
                p = !1,
                I = null,
                T = !1,
                A = !1,
                P = !1,
                N = !1,
                C = null;

            function R(t) {
                null != u && null != _ ? u(_) : null != i && i(t), u = null, i = null
            }
            class O extends r.default.Store {
                getPricesForSku(t) {
                    return f[t]
                }
                isOpen() {
                    let t = __OVERLAY__ ? a.AppContext.OVERLAY : a.AppContext.APP;
                    return C === t && P
                }
                get isPurchasingSKU() {
                    return p
                }
                get forceConfirmationStepOnMount() {
                    return T
                }
                get error() {
                    return I
                }
                get skuId() {
                    return s
                }
                get applicationId() {
                    return d
                }
                get analyticsLocation() {
                    return E
                }
                get promotionId() {
                    return S
                }
                get isIAP() {
                    return A
                }
                get giftCode() {
                    return c
                }
                get isGift() {
                    return N
                }
            }
            O.displayName = "SKUPaymentModalStore";
            var U = new O(l.default, {
                SKU_PURCHASE_MODAL_OPEN: function(t) {
                    R(), s = t.skuId, d = t.applicationId, A = t.isIAP, E = t.analyticsLocation, C = t.context, N = t.isGift, P = !0, T = !1, u = t.resolve, i = t.reject, I = null, _ = null, S = t.promotionId
                },
                SKU_PURCHASE_MODAL_CLOSE: function(t) {
                    let {
                        error: e
                    } = t;
                    P = !1, C = null, R(e)
                },
                SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function(t) {
                    let {
                        skuId: e,
                        paymentSourceId: n,
                        price: u
                    } = t;
                    f = {
                        ...f,
                        [e]: {
                            ...f[e],
                            [null != n ? n : o]: u
                        }
                    }
                },
                SKU_PURCHASE_START: function() {
                    p = !0
                },
                SKU_PURCHASE_SUCCESS: function(t) {
                    let {
                        entitlements: e,
                        giftCode: n
                    } = t;
                    p = !1, _ = e, c = n
                },
                SKU_PURCHASE_FAIL: function(t) {
                    let {
                        error: e
                    } = t;
                    p = !1, I = e
                },
                SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function() {
                    T = !0
                },
                SKU_PURCHASE_CLEAR_ERROR: function() {
                    I = null
                },
                SKU_PURCHASE_UPDATE_IS_GIFT: function(t) {
                    N = t.isGift
                },
                OVERLAY_SET_INPUT_LOCKED: function(t) {
                    let {
                        locked: e
                    } = t;
                    if (!e || null == C) return !1;
                    P = !1, C = null, R()
                },
                GIFT_CODE_CREATE: function(t) {
                    let {
                        giftCode: e
                    } = t;
                    if (0 !== e.uses || e.sku_id !== s) return !1;
                    c = e.code
                }
            })
        },
        105097: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var u = n("37983"),
                i = n("884691");

            function r() {
                let t = i.createContext(void 0);

                function e() {
                    let e = i.useContext(t);
                    if (null == e) throw Error("Context was used outside of defined provider.");
                    return e
                }
                return [t, e, function() {
                    let n = e();
                    return function(e) {
                        let {
                            children: i
                        } = e;
                        return (0, u.jsx)(t.Provider, {
                            value: n,
                            children: i
                        })
                    }
                }]
            }
        },
        713518: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchSubscriptionPlansOnNewPaymentSource: function() {
                    return S
                },
                getCurrencies: function() {
                    return f
                },
                planHasCurrency: function() {
                    return _
                },
                useCurrencyWithPaymentSourceChange: function() {
                    return p
                }
            });
            var u = n("884691"),
                i = n("627445"),
                r = n.n(i),
                l = n("913144"),
                a = n("775433"),
                o = n("308592"),
                s = n("10514"),
                c = n("719923"),
                d = n("49111"),
                E = n("646718");

            function S(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...E.ACTIVE_PREMIUM_SKUS];
                return null == t || s.default.hasPaymentSourceForSKUIds(t, e) ? Promise.resolve() : new Promise(t => {
                    l.default.wait(async () => {
                        await (0, a.fetchSubscriptionPlansBySKUs)(e), t()
                    })
                })
            }

            function f(t, e, n) {
                let u, i = [],
                    l = [],
                    a = {
                        purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
                    };
                return r(u = "string" == typeof t ? s.default.get(t) : t, "subscription plan not loaded"), null != e && s.default.hasPaymentSourceForSKUId(e, u.skuId) && (a.paymentSourceId = e), (i = (l = (0, c.experimentalGetPrices)(u.id, a)).map(t => t.currency)).length < 1 && (i = [d.CurrencyCodes.USD]), i
            }

            function _(t, e, n) {
                let u = s.default.get(t);
                r(null != u, "plan is undefined");
                let i = f(u, n, !1);
                return i.includes(e)
            }

            function p(t, e, n, i, r) {
                let [l, a] = u.useReducer((t, e) => ({
                    ...t,
                    ...e
                }), null != n ? {
                    paymentSourceId: n,
                    currency: t,
                    loaded: !1
                } : {
                    currency: t,
                    loaded: !1
                }), c = (0, o.useSubscriptionPlansLoaded)(r);
                u.useEffect(() => {
                    let t = async () => {
                        await S(n, r);
                        let t = [];
                        null != e && null != s.default.get(e) && (t = f(e, n, i)), t.length > 0 ? a({
                            paymentSourceId: n,
                            currency: t[0],
                            loaded: !0
                        }) : a({
                            paymentSourceId: n,
                            loaded: !1
                        })
                    };
                    t()
                }, [n, JSON.stringify(r), e, i, c]);
                let d = l.paymentSourceId !== n || null == e || !c || !0 !== l.loaded;
                return {
                    hasFetchedSubscriptionPlans: c,
                    priceOptions: l,
                    setCurrency: t => {
                        a({
                            currency: t
                        })
                    },
                    currencyLoading: d
                }
            }
        }
    }
]);
//# sourceMappingURL=30ac1f5ddc58ea62b44d.js.map