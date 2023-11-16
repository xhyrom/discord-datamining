(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["59310"], {
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
            var i = n("872717"),
                u = n("913144"),
                r = n("271560"),
                l = n("49111");

            function a(t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return u.default.wait(() => {
                    u.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: t
                    })
                }), i.default.get({
                    url: l.Endpoints.ENTITLEMENTS_FOR_APPLICATION(t),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: e
                    }
                }).then(e => (u.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: t,
                    entitlements: e.body
                }), e.body)).catch(() => {
                    u.default.dispatch({
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
                u.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let t = await i.default.get({
                        url: l.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: e,
                            with_application: n,
                            entitlement_type: r
                        }
                    });
                    u.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: t.body
                    })
                } catch (t) {
                    u.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function s() {
                u.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let t = await (0, r.httpGetWithCountryCodeQuery)({
                        url: l.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    u.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: t.body
                    })
                } catch (t) {
                    u.default.dispatch({
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
                    return S
                },
                clearError: function() {
                    return E
                }
            });
            var i = n("627445"),
                u = n.n(i),
                r = n("913144"),
                l = n("719923"),
                a = n("850068"),
                o = n("49111");
            async function s(t) {
                let {
                    planId: e,
                    currency: n,
                    paymentSource: i,
                    trialId: u,
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
                        paymentSource: i,
                        trialId: u,
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
            async function c(t, e, n, i, s) {
                try {
                    let c = (0, l.getPremiumPlanItem)(t);
                    u(c, "Expected existing premium plan");
                    let d = (0, l.getItemsWithUpsertedPremiumPlanId)(t, c.planId);
                    await a.updateSubscription(t, {
                        status: o.SubscriptionStatusTypes.ACTIVE,
                        paymentSource: i,
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
            async function d(t, e, n, i) {
                try {
                    await a.changeSubscriptionCurrency(t, e, n, i), r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                        error: t
                    }), t
                }
            }
            async function S(t, e, n, i, u) {
                try {
                    await a.changePaymentSource(t, e, n, i, u), r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                        error: t
                    }), t
                }
            }

            function E() {
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
                    return A
                },
                fetchPurchasePreview: function() {
                    return p
                },
                grantChannelBranchEntitlement: function() {
                    return C
                },
                purchaseSKU: function() {
                    return N
                },
                resendPaymentVerificationEmail: function() {
                    return R
                },
                clearPurchaseError: function() {
                    return U
                },
                showPurchaseConfirmationStep: function() {
                    return L
                },
                updateSKUPaymentIsGift: function() {
                    return M
                }
            }), n("70102");
            var i = n("872717"),
                u = n("913144"),
                r = n("448993"),
                l = n("736978"),
                a = n("333805"),
                o = n("84460"),
                s = n("552712"),
                c = n("167726"),
                d = n("745279"),
                S = n("449008"),
                E = n("224400"),
                f = n("271560"),
                _ = n("850068"),
                T = n("49111");
            async function I(t, e) {
                if (null == s.default.get(e)) {
                    u.default.dispatch({
                        type: "SKU_FETCH_START",
                        skuId: e
                    });
                    try {
                        let n = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t),
                            i = await (0, f.httpGetWithCountryCodeQuery)(n ? T.Endpoints.STORE_SKU(e) : T.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e));
                        u.default.dispatch({
                            type: "SKU_FETCH_SUCCESS",
                            sku: n ? i.body : i.body.sku
                        })
                    } catch (t) {
                        throw u.default.dispatch({
                            type: "SKU_FETCH_FAIL",
                            skuId: e
                        }), new a.default("Failed to fetch SKU ".concat(e))
                    }
                }
            }
            async function A(t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
                if (!n && e) throw Error("this should only be used in test mode");
                let i = await (0, f.httpGetWithCountryCodeQuery)(T.Endpoints.APPLICATION_SKUS(t)),
                    r = i.body;
                return u.default.dispatch({
                    type: "SKUS_FETCH_SUCCESS",
                    skus: r,
                    applicationId: t
                }), r
            }
            async function p(t, e, n) {
                let i = {
                        payment_source_id: n
                    },
                    r = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
                r && (i.test_mode = !0);
                let l = await (0, f.httpGetWithCountryCodeQuery)({
                    url: T.Endpoints.STORE_SKU_PURCHASE(e),
                    query: i,
                    oldFormErrors: !0
                });
                return u.default.dispatch({
                    type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                    skuId: e,
                    paymentSourceId: n,
                    price: l.body
                }), l
            }
            async function C(t, e, n) {
                u.default.dispatch({
                    type: "SKU_PURCHASE_START",
                    applicationId: t,
                    skuId: n
                });
                try {
                    let t = await i.default.post({
                        url: T.Endpoints.CHANNEL_ENTITLEMENT_GRANT(e),
                        oldFormErrors: !0
                    });
                    return u.default.dispatch({
                        type: "SKU_PURCHASE_SUCCESS",
                        skuId: n,
                        entitlements: t.body,
                        libraryApplications: []
                    }), t.body
                } catch (i) {
                    let e = new r.BillingError(i);
                    throw u.default.dispatch({
                        type: "SKU_PURCHASE_FAIL",
                        applicationId: t,
                        skuId: n,
                        error: e
                    }), e
                }
            }
            let P = {
                isGift: !1
            };
            async function N(t, e, n) {
                let {
                    paymentSource: a,
                    expectedAmount: s,
                    expectedCurrency: f,
                    analyticsLoadId: I,
                    isGift: A,
                    giftStyle: p,
                    subscriptionPlanId: C,
                    loadId: N,
                    recipientId: R,
                    customMessage: U,
                    emojiConfetti: L,
                    soundEffect: M
                } = {
                    ...P,
                    ...n
                };
                u.default.wait(() => {
                    u.default.dispatch({
                        type: "SKU_PURCHASE_START",
                        applicationId: t,
                        skuId: e
                    })
                });
                let O = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
                try {
                    let t = {
                        gift: A,
                        sku_subscription_plan_id: C,
                        gateway_checkout_context: await (0, d.createGatewayCheckoutContext)(a),
                        load_id: N
                    };
                    if (O) t.test_mode = !0;
                    else {
                        if (null != a && (t.payment_source_id = a.id, t.payment_source_token = await (0, _.createPaymentSourceToken)(a), T.ADYEN_PAYMENT_SOURCES.has(a.type))) {
                            let e = await (0, _.popupBridgeState)(a.type);
                            t.return_url = i.default.getAPIBaseURL() + T.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(a.type, null != e ? e : "", "success")
                        }
                        null != s && (t.expected_amount = s), null != f && (t.expected_currency = f), null != p && (t.gift_style = p), null != R && (t.recipient_id = R), null != R && (t.custom_message = U, ((null == L ? void 0 : L.id) != null || (null == L ? void 0 : L.surrogates) != null || (null == M ? void 0 : M.soundId) != null) && (t.gift_info_options = {
                            emoji_id: null == L ? void 0 : L.id,
                            emoji_name: null == L ? void 0 : L.surrogates,
                            sound_id: null == M ? void 0 : M.soundId
                        })), t.purchase_token = (0, E.getPurchaseToken)()
                    }
                    let n = await i.default.post({
                        url: T.Endpoints.STORE_SKU_PURCHASE(e),
                        body: t,
                        context: {
                            load_id: I
                        },
                        oldFormErrors: !0
                    });
                    return u.default.dispatch({
                        type: "SKU_PURCHASE_SUCCESS",
                        skuId: e,
                        libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(S.isNotNullish) : [],
                        entitlements: n.body.entitlements,
                        giftCode: n.body.gift_code
                    }), {
                        ...n.body,
                        redirectConfirmation: !1
                    }
                } catch (i) {
                    let n = i instanceof r.BillingError ? i : new r.BillingError(i);
                    if ((n.code === l.ErrorCodes.CONFIRMATION_REQUIRED || n.code === l.ErrorCodes.AUTHENTICATION_REQUIRED) && u.default.dispatch({
                            type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                            skuId: e,
                            isGift: A
                        }), n.code !== l.ErrorCodes.CONFIRMATION_REQUIRED) throw u.default.dispatch({
                        type: "SKU_PURCHASE_FAIL",
                        applicationId: t,
                        skuId: e,
                        error: n
                    }), n;
                    if (!i.body.payment_id) throw (0, _.dispatchConfirmationError)("payment id cannot be null on redirected confirmations.");
                    return (0, _.handleConfirmation)(i.body, a)
                }
            }
            async function R() {
                try {
                    let t = {
                            purchase_token: (0, E.getPurchaseToken)()
                        },
                        e = await i.default.post({
                            url: T.Endpoints.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
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

            function U() {
                u.default.dispatch({
                    type: "SKU_PURCHASE_CLEAR_ERROR"
                })
            }

            function L() {
                u.default.wait(() => u.default.dispatch({
                    type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP"
                }))
            }

            function M(t) {
                u.default.dispatch({
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
            var i = n("65597"),
                u = n("271938");

            function r() {
                return (0, i.default)([u.default], () => u.default.isAuthenticated())
            }
        },
        479952: function(t, e, n) {
            "use strict";
            let i;
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var u = n("446674"),
                r = n("913144");
            let l = {
                lastGuildDismissedTime: {}
            };
            class a extends u.default.DeviceSettingsStore {
                initialize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
                    i = t
                }
                getUserAgnosticState() {
                    return i
                }
                getLastGuildDismissedTime(t) {
                    return i.lastGuildDismissedTime[t]
                }
            }
            a.displayName = "ApplicationSubscriptionChannelNoticeStore", a.persistKey = "ApplicationSubscriptionChannelNoticeStore";
            var o = new a(r.default, {
                APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(t) {
                    let {
                        guildId: e
                    } = t;
                    i.lastGuildDismissedTime[e] = Date.now()
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
            }), n("222007");
            var i = n("913144"),
                u = n("775433"),
                r = n("104449");
            async function l(t, e) {
                i.default.dispatch({
                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
                    applicationId: t
                });
                try {
                    let n = await r.getApplicationSubscriptionGroupListingsForApplication(t, e);
                    return i.default.dispatch({
                        type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                        applicationId: t,
                        groupListing: n
                    }), n
                } catch (e) {
                    i.default.dispatch({
                        type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                        applicationId: t
                    })
                }
            }
            async function a(t) {
                i.default.dispatch({
                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
                    guildId: t
                });
                try {
                    let e = await r.getEntitlementsForGuild(t);
                    i.default.dispatch({
                        type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
                        guildId: t,
                        entitlements: e
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
                        guildId: t
                    })
                }
            }

            function o(t) {
                i.default.dispatch({
                    type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
                    guildId: t
                })
            }
            async function s(t) {
                i.default.dispatch({
                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
                    planId: t
                });
                try {
                    var e;
                    let n = await r.getSubscriptionGroupForSubscriptionPlan(t);
                    i.default.dispatch({
                        type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
                        groupListing: n
                    });
                    let l = null !== (e = n.subscription_listings) && void 0 !== e ? e : [];
                    for (let e of l) e.subscription_plans[0].id === t && await u.fetchSubscriptionPlansForSKU(e.id, void 0, void 0, !0)
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
                    return N
                },
                useFetchEntitlementsForGuild: function() {
                    return R
                },
                useSubscriptionListingsForGroup: function() {
                    return L
                },
                useActiveSubscriptionListingForApplication: function() {
                    return h
                },
                useUnseenEndedApplicationSubscriptionEntitlements: function() {
                    return F
                },
                useFetchListingsForSubscriptions: function() {
                    return m
                },
                useFetchUserApplicationSubscriptionEntitlements: function() {
                    return y
                },
                useApplication: function() {
                    return g
                },
                default: function() {
                    return G
                },
                useEligibleApplicationSubscriptionGuilds: function() {
                    return D
                }
            }), n("424973"), n("222007");
            var i, u, r = n("884691"),
                l = n("446674"),
                a = n("251472"),
                o = n("598981"),
                s = n("299285"),
                c = n("305961"),
                d = n("957255"),
                S = n("10514"),
                E = n("521012"),
                f = n("437712"),
                _ = n("552712"),
                T = n("479952"),
                I = n("524503"),
                A = n("104449"),
                p = n("186211"),
                C = n("90592"),
                P = n("49111");
            (u = i || (i = {}))[u.NOT_LOADED = 0] = "NOT_LOADED", u[u.LOADING = 1] = "LOADING", u[u.LOADED = 2] = "LOADED", u[u.ERROR = 3] = "ERROR";
            let N = function(t, e) {
                    let {
                        refetchOnMount: n = !1
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = (0, l.useStateFromStores)([p.default], () => null != t ? p.default.getSubscriptionGroupListingsForApplicationFetchState(t) : p.FetchState.FETCHED, [t]);
                    return r.useEffect(() => {
                        if (null == t || null == e) return;
                        let i = p.default.getSubscriptionGroupListingsForApplicationFetchState(t);
                        (n || i === p.FetchState.NOT_FETCHED) && (0, I.fetchAllSubscriptionListingsDataForApplication)(t, e)
                    }, [t, e, n]), {
                        listingsLoaded: i === p.FetchState.FETCHED
                    }
                },
                R = t => {
                    let {
                        guildId: e,
                        canFetch: n = !0,
                        forceRefetch: i = !1
                    } = t, u = (0, l.useStateFromStores)([p.default], () => null != e ? p.default.getEntitlementsForGuildFetchState(e) : null, [e]);
                    return r.useEffect(() => {
                        if (null == e || e === P.ME) return;
                        let t = p.default.getEntitlementsForGuildFetchState(e);
                        n && (t === p.FetchState.NOT_FETCHED || i) && (0, I.fetchEntitlementsForGuild)(e)
                    }, [e, n, i]), {
                        entitlementsLoaded: u === p.FetchState.FETCHED
                    }
                },
                U = t => {
                    let {
                        applicationId: e,
                        canFetch: n = !0,
                        forceRefetch: i = !1,
                        loggedIn: u
                    } = t, o = (0, l.useStateFromStores)([f.default], () => f.default.isFetchedForApplication(e), [e]);
                    return r.useEffect(() => {
                        if (u) {
                            let t = f.default.isFetchingForApplication(e),
                                u = n && !t && !o || i;
                            u && (0, a.fetchUserEntitlements)({
                                entitlementType: P.EntitlementTypes.APPLICATION_SUBSCRIPTION
                            })
                        }
                    }, [e, n, o, i, u]), {
                        entitlementsLoaded: o
                    }
                },
                L = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        includeSoftDeleted: !1
                    };
                    return (0, l.useStateFromStoresArray)([p.default], () => {
                        if (null == t) return [];
                        let n = p.default.getSubscriptionGroupListing(t);
                        if (null == n) return [];
                        let i = [];
                        for (let t of n.subscription_listings_ids) {
                            let n = p.default.getSubscriptionListing(t);
                            if (null != n)(!n.soft_deleted || e.includeSoftDeleted) && i.push(n)
                        }
                        return i
                    }, [t, e.includeSoftDeleted])
                },
                M = [],
                O = [];

            function h(t, e) {
                let n = (0, l.useStateFromStores)([E.default], () => E.default.getSubscriptions()),
                    {
                        subscriptionGroupListing: i,
                        guildEntitlements: u,
                        userEntitlements: a
                    } = (0, l.useStateFromStoresObject)([p.default, f.default], () => {
                        var n, i;
                        return {
                            subscriptionGroupListing: null != t ? p.default.getSubscriptionGroupListingForApplication(t) : null,
                            guildEntitlements: null != t && null != e ? p.default.getApplicationEntitlementsForGuild(t, e) : M,
                            userEntitlements: null != t && null !== (i = null === (n = f.default.getForApplication(t)) || void 0 === n ? void 0 : n.values()) && void 0 !== i ? i : O
                        }
                    }, [t, e]),
                    o = r.useMemo(() => [...u, ...a], [u, a]),
                    s = null == i ? void 0 : i.subscription_listings,
                    {
                        activeSubscriptionListing: c,
                        activeEntitlement: d
                    } = r.useMemo(() => {
                        if (null != s) {
                            for (let t of o)
                                for (let n of s)
                                    if ((0, C.isListingActiveInGuild)(n, t, e)) return {
                                        activeSubscriptionListing: n,
                                        activeEntitlement: t
                                    }
                        }
                        return {
                            activeSubscriptionListing: null,
                            activeEntitlement: null
                        }
                    }, [o, s, e]),
                    S = r.useMemo(() => {
                        if (null == n) return null;
                        let t = null == c ? void 0 : c.subscription_plans[0].id;
                        for (let e of Object.values(n))
                            if (e.type === P.SubscriptionTypes.APPLICATION) {
                                let n = e.items[0].planId;
                                if (n === t) return e
                            } return null
                    }, [c, n]);
                return {
                    activeSubscription: S,
                    activeSubscriptionListing: c,
                    activeEntitlement: d,
                    subscriptionGroupListing: i
                }
            }

            function F(t) {
                var e;
                let n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "",
                    i = (0, l.useStateFromStores)([d.default], () => d.default.can(P.Permissions.ADMINISTRATOR, t)),
                    {
                        entitlementsLoaded: u
                    } = R({
                        guildId: n,
                        canFetch: i
                    }),
                    a = (0, l.useStateFromStores)([T.default], () => T.default.getLastGuildDismissedTime(n)),
                    o = (0, l.useStateFromStoresArray)([p.default], () => {
                        let t = p.default.getEntitlementsForGuild(n),
                            e = p.default.getEntitlementsForGuild(n, !1),
                            i = t.map(t => t.applicationId);
                        return e.filter(t => !i.includes(t.applicationId))
                    }),
                    s = (0, l.useStateFromStores)([_.default], () => _.default.getSKUs()),
                    c = r.useMemo(() => o.filter(t => {
                        let e = s[t.skuId];
                        return null != e && e.available
                    }), [o, s]);
                return u ? c.filter(t => null != t.endsAt && t.endsAt.getTime() > Math.max(null != a ? a : 0, Date.now() - 2592e6)) : []
            }
            let m = t => {
                    let [e, n] = r.useState(!1), i = r.useMemo(() => t.map(C.getApplicationSubscriptionPlanId), [t]), u = (0, l.useStateFromStoresArray)([S.default], () => i.filter(t => null == S.default.get(t)), [i]);
                    return r.useEffect(() => {
                        u.length > 0 && (n(!0), Promise.all(u.map(t => (0, I.fetchSubscriptionListingForPlan)(t))).catch(() => {}).then(() => {
                            n(!1)
                        }))
                    }, [u]), {
                        loading: e
                    }
                },
                y = () => {
                    let [t, e] = r.useState(0);
                    return r.useEffect(() => {
                        e(1), (0, a.fetchUserEntitlements)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: P.EntitlementTypes.APPLICATION_SUBSCRIPTION
                        }).catch(() => {
                            e(3)
                        }).then(() => {
                            e(2)
                        })
                    }, []), {
                        loadState: t
                    }
                },
                g = t => {
                    let e = (0, o.default)(),
                        n = (0, l.useStateFromStores)([s.default], () => null != t ? s.default.getApplication(t) : null, [t]),
                        i = null != n;
                    return r.useEffect(() => {
                        !i && null != t && e && (0, A.fetchApplication)(t)
                    }, [i, t, e]), n
                };

            function G(t) {
                let {
                    applicationId: e,
                    groupListingId: n,
                    guildId: i
                } = t, u = (0, o.default)(), {
                    listingsLoaded: r
                } = N(e, n), {
                    entitlementsLoaded: l
                } = R({
                    guildId: i
                }), {
                    entitlementsLoaded: a
                } = U({
                    applicationId: e,
                    loggedIn: u
                }), {
                    subscriptionGroupListing: s
                } = h(e, i);
                return {
                    applicationSubscriptionListingsShown: null != e && null != n && (null == i || l) && (!u || a) && r && null != s && (0, C.hasPayableSubscriptionPlan)(s)
                }
            }

            function D(t, e) {
                let n = (0, l.useStateFromStores)([c.default], () => c.default.isLoaded()),
                    [i, u] = r.useState([]);
                return r.useEffect(() => {
                    null == e && null != t && n && (0, A.fetchEligibleApplicationSubscriptionGuilds)(t).then(t => {
                        let e = t.map(t => c.default.getGuild(t)).filter(t => null != t);
                        u(e)
                    })
                }, [t, e, n]), i
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
                fetchApplication: function() {
                    return c
                },
                fetchEligibleApplicationSubscriptionGuilds: function() {
                    return d
                }
            });
            var i = n("872717"),
                u = n("913144"),
                r = n("599417"),
                l = n("49111");
            let a = async (t, e) => {
                let n = await i.default.get({
                    url: l.Endpoints.APPLICATION_SUBSCRIPTION_GROUP_LISTING(t, e)
                });
                return n.body
            }, o = async function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = await i.default.get({
                        url: l.Endpoints.GUILD_ENTITLEMENTS(t),
                        query: {
                            with_sku: !0,
                            with_application: !0,
                            exclude_deleted: e
                        }
                    });
                return n.body
            }, s = async t => {
                let e = await i.default.get({
                    url: l.Endpoints.SUBSCRIPTION_PLAN_GROUP_LISTING(t)
                });
                return e.body
            };

            function c(t) {
                return u.default.dispatch({
                    type: "APPLICATION_FETCH",
                    applicationId: t
                }), i.default.get({
                    url: l.Endpoints.APPLICATION_PUBLIC(t)
                }).then(t => (u.default.dispatch({
                    type: "APPLICATION_FETCH_SUCCESS",
                    application: t.body
                }), t.body)).catch(e => (u.default.dispatch({
                    type: "APPLICATION_FETCH_FAIL",
                    applicationId: t
                }), Promise.reject(new r.default(e))))
            }
            async function d(t) {
                let e = await i.default.get({
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
                    return L
                }
            }), n("222007");
            var i, u, r = n("627445"),
                l = n.n(r),
                a = n("446674"),
                o = n("407846"),
                s = n("913144"),
                c = n("984273"),
                d = n("552712");

            function S(t) {
                return "subscription_listing:".concat(t)
            }

            function E(t) {
                return "application:".concat(t)
            }

            function f(t) {
                return "plan:".concat(t)
            }

            function _(t, e, n) {
                return "entitlement:".concat(t, ":").concat(n, ":").concat(e)
            }

            function T(t, e) {
                return "entitlement:".concat(e, ":").concat(t)
            }(u = i || (i = {}))[u.NOT_FETCHED = 0] = "NOT_FETCHED", u[u.FETCHING = 1] = "FETCHING", u[u.FETCHED = 2] = "FETCHED";
            let I = new o.default(t => [E(t.application_id), ...t.subscription_listings_ids.map(S)], t => t.id),
                A = new o.default(t => [E(t.application_id), f(t.subscription_plans[0].id)], t => t.id),
                p = new o.default(t => [_(t.applicationId, t.isValid(null, d.default), t.guildId), T(t.isValid(null, d.default), t.guildId)], t => t.id),
                C = {},
                P = {};

            function N(t) {
                let e = I.values(E(t));
                return l(e.length <= 1, "Found multiple group listings for application"), e[0]
            }

            function R(t) {
                var e;
                for (let n of (I.set(t.id, t), null !== (e = t.subscription_listings) && void 0 !== e ? e : []))(function(t) {
                    A.set(t.id, t)
                })(n)
            }
            class U extends a.default.Store {
                getSubscriptionGroupListingsForApplicationFetchState(t) {
                    var e;
                    return null !== (e = C[t]) && void 0 !== e ? e : 0
                }
                getSubscriptionGroupListing(t) {
                    return I.get(t)
                }
                getSubscriptionGroupListingForApplication(t) {
                    return N(t)
                }
                getSubscriptionGroupListingForSubscriptionListing(t) {
                    let e = I.values(S(t));
                    return l(e.length <= 1, "Found multiple group listings for listing"), e[0]
                }
                getSubscriptionListing(t) {
                    return A.get(t)
                }
                getSubscriptionListingsForApplication(t) {
                    return A.values(E(t))
                }
                getEntitlementsForGuildFetchState(t) {
                    var e;
                    return null !== (e = P[t]) && void 0 !== e ? e : 0
                }
                getSubscriptionListingForPlan(t) {
                    let e = A.values(f(t));
                    return l(e.length <= 1, "Found multiple listings for plan"), e[0]
                }
                getApplicationEntitlementsForGuild(t, e) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    return p.values(_(t, n, e))
                }
                getEntitlementsForGuild(t) {
                    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return p.values(T(e, t))
                }
            }
            U.displayName = "ApplicationSubscriptionStore";
            var L = new U(s.default, {
                LOGOUT: function() {
                    I.clear(), A.clear(), p.clear(), C = {}, P = {}
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(t) {
                    let {
                        applicationId: e
                    } = t;
                    C[e] = 1;
                    let n = N(e);
                    if (null != n)
                        for (let t of n.subscription_listings_ids) A.delete(t)
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(t) {
                    let {
                        applicationId: e,
                        groupListing: n
                    } = t;
                    C[e] = 2, R(n)
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(t) {
                    let {
                        applicationId: e
                    } = t;
                    C[e] = 2
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
                    let {
                        guildId: e
                    } = t;
                    P[e] = 1
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
                    let {
                        guildId: e,
                        entitlements: n
                    } = t;
                    P[e] = 2, n.forEach(t => {
                        let e = c.default.createFromServer(t);
                        p.set(e.id, e)
                    })
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
                    let {
                        guildId: e
                    } = t;
                    P[e] = 0
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
                    return S
                }
            });
            var i = n("627445"),
                u = n.n(i),
                r = n("568734"),
                l = n("49111");

            function a(t) {
                let e = t.items;
                return u(1 === e.length, "more than 1 subscription item for application subscription"), e[0].planId
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

            function S(t, e, n) {
                return t.subscription_plans[0].sku_id === e.skuId && (c(t.sku_flags) ? null != n && e.guildId === n && n !== l.ME : !!d(t.sku_flags) && null == e.guildId)
            }
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
            var i = n("862205"),
                u = n("15733");
            let r = (0, i.createExperiment)({
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
                l = (0, i.createExperiment)({
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
                } = (0, u.default)();
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
            }), n("222007");
            var i = n("446674"),
                u = n("605250"),
                r = n("357957"),
                l = n("10514"),
                a = n("521012"),
                o = n("646718");
            new u.default("useSubscriptionPlansLoaded");
            let s = t => {};

            function c() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS];
                return (0, i.useStateFromStores)([r.default, l.default, a.default], () => d(t, [r.default, l.default, a.default]), [t])
            }

            function d() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
                    [n, i, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, l.default, a.default],
                    c = n.paymentSourceIds,
                    d = n.defaultPaymentSourceId,
                    S = i.isLoadedForSKUs(e),
                    E = null === (t = u.getPremiumTypeSubscription()) || void 0 === t ? void 0 : t.paymentSourceId;
                if (null != E && !i.hasPaymentSourceForSKUIds(E, e)) return s("subscription payment source ".concat(E, " not loaded for ").concat(e)), !1;
                if (null != d && !i.hasPaymentSourceForSKUIds(d, e)) return s("default payment source ".concat(d, " not loaded for ").concat(e)), !1;
                for (let t of c)
                    if (!i.hasPaymentSourceForSKUIds(t, e)) return s("payment source ".concat(t, " not loaded for ").concat(e)), !1;
                return s("isLoadedForSKUs ".concat(S)), S
            }
        },
        621746: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("884691"),
                u = n("446674"),
                r = n("10514");

            function l() {
                let [t, e] = i.useState(void 0), [n, l] = i.useState(void 0), a = (0, u.useStateFromStores)([r.default], () => null != n ? r.default.get(n) : null);
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
                    return H
                },
                usePaymentContext: function() {
                    return b
                },
                useForwardedPaymentContext: function() {
                    return K
                }
            }), n("222007"), n("702976");
            var i = n("37983"),
                u = n("884691"),
                r = n("41092"),
                l = n("775560"),
                a = n("748820"),
                o = n("446674"),
                s = n("191225"),
                c = n("650509"),
                d = n("619935"),
                S = n("78345"),
                E = n("53253"),
                f = n("467292"),
                _ = n("622839"),
                T = n("105097"),
                I = n("568734"),
                A = n("659632"),
                p = n("719923"),
                C = n("286235"),
                P = n("621746"),
                N = n("854381"),
                R = n("237288"),
                U = n("986681"),
                L = n("702924"),
                M = n("241006"),
                O = n("284797"),
                h = n("383802"),
                F = n("334702"),
                m = n("775325"),
                y = n("403293"),
                g = n("523591"),
                G = n("49111"),
                D = n("646718");
            let B = S.PremiumGiftStyles.STANDARD_BOX,
                v = void 0,
                [H, b, K] = (0, T.default)();

            function w(t) {
                var e, n;
                let {
                    loadId: T,
                    activeSubscription: b,
                    stepConfigs: K,
                    breadcrumbs: w = [],
                    skuIDs: Y,
                    isGift: W = !1,
                    giftRecipient: k,
                    children: V,
                    defaultPlanId: x,
                    purchaseType: Z = G.PurchaseTypes.SUBSCRIPTION,
                    applicationId: J,
                    referralCode: Q
                } = t, X = (0, y.default)(), j = (0, d.useBlockedPaymentsConfig)(), q = (0, R.default)(), {
                    paymentSources: z,
                    hasPaymentSources: $,
                    paymentSourceId: tt,
                    setPaymentSourceId: te,
                    hasFetchedPaymentSources: tn
                } = (0, U.default)({
                    isGift: W,
                    activeSubscription: b
                }), ti = u.useRef($), {
                    hasFetchedSubscriptionPlans: tu,
                    priceOptions: tr,
                    setCurrency: tl,
                    currencyLoading: ta,
                    currencies: to
                } = (0, N.default)({
                    activeSubscription: b,
                    skuIDs: Y,
                    paymentSourceId: tt,
                    isGift: W
                }), ts = (0, h.default)(), [tc, td] = u.useState(!1), {
                    step: tS,
                    setStep: tE,
                    steps: tf,
                    breadcrumbsData: t_
                } = (0, m.default)({
                    stepConfigs: K,
                    breadcrumbs: w
                }), [tT, tI] = (0, O.default)(tS), {
                    paymentError: tA,
                    paymentAuthenticationState: tp
                } = (0, L.default)(), {
                    purchaseError: tC,
                    purchaseErrorBlockRef: tP,
                    setPurchaseError: tN
                } = (0, M.default)(), tR = (0, l.useLazyValue)(() => {
                    let t = null != T ? T : (0, a.v4)();
                    return C.default.addBreadcrumb({
                        message: "Checkout session ID: ".concat(t)
                    }), {
                        loadId: t,
                        startTime: Date.now()
                    }
                }), {
                    selectedSkuId: tU,
                    selectedPlan: tL,
                    setSelectedSkuId: tM,
                    setSelectedPlanId: tO
                } = (0, P.default)(), [th, tF] = (0, o.useStateFromStoresArray)([f.default], () => [f.default.purchaseTokenAuthState, f.default.purchaseTokenHash]), [tm, ty] = (0, o.useStateFromStoresArray)([g.default], () => [g.default.browserCheckoutState, g.default.loadId]), [tg, tG] = u.useState(null), [tD, tB] = u.useState(null), [tv, tH] = u.useState(null), [tb, tK] = u.useState(null), [tw, tY] = u.useState(null), [tW, tk] = u.useState(void 0), [tV, tx] = u.useState([]), tZ = u.useMemo(() => null == tL || (0, p.isPremiumSubscriptionPlan)(tL.id), [tL]), tJ = (0, A.shouldShowCustomGiftExperience)(k), tQ = (0, E.useIsSeasonalGiftingActive)(), {
                    enabled: tX
                } = E.default.useExperiment({
                    location: "PaymentContextProvider"
                }, {
                    autoTrackExposure: tJ && tQ
                }), [tj, tq] = u.useState(tJ ? tX && tQ ? S.PremiumGiftStyles.SEASONAL_STANDARD_BOX : B : v), tz = u.useRef(null != b ? b.planId : null);
                u.useEffect(() => {
                    null == tz.current && null != b && (tz.current = b.planId)
                }, [b]);
                let {
                    skusById: t$,
                    hasFetchedSkus: t0,
                    skuPricePreviewsById: t1
                } = (0, F.default)({
                    applicationId: null != J ? J : D.PREMIUM_SUBSCRIPTION_APPLICATION,
                    skuIDs: Y,
                    currentPaymentSourceId: tt
                }), t2 = u.useMemo(() => {
                    if (null == tU) return null;
                    let t = t1[tU];
                    if (null == t) return null;
                    let e = null != tt ? tt : _.NO_PAYMENT_SOURCE;
                    return t[e]
                }, [tU, t1, tt]), t4 = (0, c.useApplication)(J), t7 = (0, I.hasFlag)(null !== (e = null == t4 ? void 0 : t4.flags) && void 0 !== e ? e : 0, G.ApplicationFlags.EMBEDDED) && (0, I.hasFlag)(null !== (n = null == t4 ? void 0 : t4.flags) && void 0 !== n ? n : 0, G.ApplicationFlags.EMBEDDED_IAP), t6 = (0, o.useStateFromStores)([s.default], () => Array.from(s.default.getSelfEmbeddedActivities().values()).find(t => {
                    let {
                        application_id: e
                    } = t;
                    return J === e
                })), t9 = null != t6 ? t6.activity_id : void 0;
                return (0, i.jsx)(H.Provider, {
                    value: {
                        stripe: X,
                        contextMetadata: tR,
                        blockedPayments: j,
                        isGift: W,
                        giftRecipient: k,
                        activeSubscription: b,
                        hasFetchedSubscriptions: q,
                        hasFetchedSubscriptionPlans: tu,
                        updatedSubscription: tb,
                        setUpdatedSubscription: tK,
                        subscriptionMetadataRequest: tw,
                        setSubscriptionMetadataRequest: tY,
                        hasFetchedPaymentSources: tn,
                        paymentSources: z,
                        hasPaymentSources: $,
                        paymentSourceId: tt,
                        setPaymentSourceId: te,
                        priceOptions: tr,
                        setCurrency: tl,
                        currencyLoading: ta,
                        currencies: to,
                        ...ts,
                        hasAcceptedTerms: tc,
                        setHasAcceptedTerms: td,
                        step: tS,
                        setStep: tE,
                        steps: tf,
                        stepConfigs: K,
                        breadcrumbs: t_,
                        purchaseState: tT,
                        setPurchaseState: tI,
                        paymentAuthenticationState: tp,
                        paymentError: tA,
                        purchaseError: tC,
                        setPurchaseError: tN,
                        purchaseErrorBlockRef: tP,
                        purchaseTokenAuthState: th,
                        purchaseTokenHash: tF,
                        browserCheckoutState: tm,
                        browserCheckoutStateLoadId: ty,
                        bodyNode: tg,
                        setBodyNode: tG,
                        footerNode: tD,
                        setFooterNode: tB,
                        modalOverlayNode: tv,
                        setModalOverlayNode: tH,
                        selectedSkuId: tU,
                        selectedPlan: tL,
                        setSelectedSkuId: tM,
                        setSelectedPlanId: tO,
                        readySlideId: tW,
                        setReadySlideId: tk,
                        defaultPlanId: x,
                        isPremium: tZ,
                        startedPaymentFlowWithPaymentSourcesRef: ti,
                        startingPremiumSubscriptionPlanIdRef: tz,
                        selectedGiftStyle: tj,
                        setSelectedGiftStyle: tq,
                        hasFetchedSkus: t0,
                        skusById: t$,
                        skuPricePreviewsById: t1,
                        selectedSkuPricePreview: t2,
                        application: t4,
                        purchaseType: Z,
                        isEmbeddedIAP: t7,
                        activitySessionId: t9,
                        entitlementsGranted: tV,
                        setEntitlementsGranted: tx,
                        referralCode: Q
                    },
                    children: (0, i.jsx)(r.Elements, {
                        options: G.StripeElementsOptions,
                        stripe: X,
                        children: V
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
                    return S
                },
                getLabelForStep: function() {
                    return E
                },
                errorToStep: function() {
                    return f
                },
                usePurchaseStateForStep: function() {
                    return _
                }
            }), n("222007"), n("70102");
            var i, u, r = n("884691"),
                l = n("448993"),
                a = n("605250"),
                o = n("745279"),
                s = n("286350"),
                c = n("782340");
            let d = new a.default("PaymentSteps");
            (u = i || (i = {})).PAYMENT_TYPE = "payment_type", u.CREDIT_CARD_INFORMATION = "credit_card_information", u.PAYPAL_INFORMATION = "paypal_information", u.VENMO_INFORMATION = "venmo_information", u.SOFORT_INFORMATION = "sofort_information", u.PRZELEWY24_INFORMATION = "przelewy24_information", u.EPS_INFORMATION = "eps_information", u.IDEAL_INFORMATION = "ideal_information", u.CASH_APP_INFORMATION = "cash_app_information", u.PAYMENT_REQUEST_INFORMATION = "payment_request_information", u.ADDRESS = "address", u.AWAITING_AUTHENTICATION = "awaiting_authentication", u.SKU_SELECT = "sku_select", u.PLAN_SELECT = "plan_select", u.PREMIUM_UPSELL = "premium_upsell", u.PREMIUM_GUILD_UPSELL = "premium_guild_upsell", u.REVIEW = "review", u.CONFIRM = "confirm", u.CLAIM_FREE_SKU = "claim_free_sku", u.SKU_PREVIEW = "sku_preview", u.LOADING_PAYMENT_SOURCES = "loading_payment_sources", u.SHOP = "shop", u.PROMOTION_INFO = "promotion_info", u.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth", u.BENEFITS = "benefits", u.WHAT_YOU_LOSE = "what_you_lose", u.ADD_PAYMENT_STEPS = "add_payment_steps", u.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout";
            let S = new Set(["credit_card_information", "payment_request_information", "paypal_information", "venmo_information", "cash_app_information", "address", "claim_free_sku", "sku_preview", "premium_upsell", "sofort_information", "przelewy24_information"]);

            function E(t) {
                switch (t) {
                    case "plan_select":
                        return c.default.Messages.BILLING_STEP_SELECT_PLAN;
                    case "payment_type":
                    case "add_payment_steps":
                        return c.default.Messages.BILLING_STEP_PAYMENT;
                    case "awaiting_purchase_token_auth":
                    case "review":
                        return c.default.Messages.BILLING_STEP_REVIEW;
                    case "shop":
                        return c.default.Messages.BILLING_STEP_SHOP;
                    case "payment_request_information":
                        return c.default.Messages.BILLING_STEP_PAYMENT_INFO;
                    case "credit_card_information":
                        return c.default.Messages.PAYMENT_SOURCE_INFORMATION;
                    case "address":
                        return c.default.Messages.BILLING_ADDRESS;
                    case "paypal_information":
                        return c.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
                    case "venmo_information":
                        return c.default.Messages.PAYMENT_SOURCE_VENMO_DETAILS;
                    case "sofort_information":
                        return c.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
                    case "przelewy24_information":
                        return c.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO;
                    case "cash_app_information":
                        return c.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_DETAILS
                }
                throw Error("Unexpected step: ".concat(t))
            }

            function f(t) {
                if (null != t) {
                    if (!(t instanceof l.BillingError)) throw d.error(t), (0, o.captureBillingException)(t), Error("Unexpected error type");
                    if (t.hasCardError()) return "credit_card_information";
                    if (t.hasAddressError()) return "address"
                }
                return null
            }

            function _(t, e, n) {
                r.useEffect(() => {
                    null != t && "review" !== t && e !== s.PurchaseState.WAITING && e !== s.PurchaseState.COMPLETED && n(s.PurchaseState.WAITING)
                }, [t, e, n])
            }
        },
        286350: function(t, e, n) {
            "use strict";
            var i, u;
            n.r(e), n.d(e, {
                PurchaseState: function() {
                    return i
                }
            }), (u = i || (i = {})).WAITING = "WAITING", u.PURCHASING = "PURCHASING", u.FAIL = "FAIL", u.COMPLETED = "COMPLETED"
        },
        854381: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                u = n("10514"),
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
                let S = (0, i.useStateFromStores)([u.default], () => {
                        let t = u.default.getPlanIdsForSkus(s).filter(t => !d || l.PREMIUM_PLANS.has(t));
                        return t.length > 0 ? u.default.get(t[0]) : null
                    }),
                    E = null == S ? [] : (0, r.getCurrencies)(S.id, c, d),
                    f = null !== (n = null !== (e = E.find(t => t === (null == o ? void 0 : o.currency))) && void 0 !== e ? e : E[0]) && void 0 !== n ? n : a.CurrencyCodes.USD;
                return {
                    ...(0, r.useCurrencyWithPaymentSourceChange)(f, null == S ? void 0 : S.id, c, d, s),
                    currencies: E
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
            var i = n("884691"),
                u = n("446674"),
                r = n("850068"),
                l = n("521012");

            function a() {
                let t = (0, u.useStateFromStores)([l.default], () => l.default.hasFetchedSubscriptions());
                return i.useEffect(() => {
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
            }), n("222007");
            var i = n("884691"),
                u = n("446674"),
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
                } = (0, u.useStateFromStoresObject)([l.default], () => ({
                    defaultPaymentSourceId: l.default.defaultPaymentSourceId,
                    paymentSources: l.default.paymentSources,
                    hasFetchedPaymentSources: l.default.hasFetchedPaymentSources
                })), c = (t, e, n) => t || (null == e ? void 0 : e.paymentSourceId) == null ? n : e.paymentSourceId, [d, S] = i.useState(() => c(e, n, a));
                return i.useEffect(() => {
                    s ? S(c(e, n, a)) : (0, r.fetchPaymentSources)()
                }, [s, e, n, a]), {
                    paymentSources: o,
                    hasPaymentSources: Object.keys(o).length > 0,
                    paymentSourceId: d,
                    setPaymentSourceId: S,
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
            }), n("222007");
            var i = n("446674"),
                u = n("877261"),
                r = n("926223"),
                l = n("758764");

            function a() {
                let t = (0, i.useStateFromStores)([r.default], () => r.default.error),
                    [e, n] = (0, i.useStateFromStoresArray)([l.default], () => [l.default.error, l.default.isAwaitingAuthentication]);
                return {
                    paymentError: null != e ? e : t,
                    paymentAuthenticationState: n ? u.PaymentAuthenticationState.PENDING : null != e ? u.PaymentAuthenticationState.ERROR : u.PaymentAuthenticationState.NONE
                }
            }
        },
        241006: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            }), n("222007");
            var i = n("884691");

            function u() {
                let [t, e] = i.useState(null), n = i.useRef(null);
                return i.useEffect(() => {
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
            }), n("222007");
            var i = n("884691"),
                u = n("85336"),
                r = n("286350");

            function l(t) {
                let [e, n] = i.useState(r.PurchaseState.WAITING);
                return i.useEffect(() => {
                    null != t && t !== u.Step.REVIEW && e !== r.PurchaseState.WAITING && e !== r.PurchaseState.COMPLETED && n(r.PurchaseState.WAITING)
                }, [t, e, n]), [e, n]
            }
        },
        383802: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            }), n("222007");
            var i = n("884691"),
                u = n("976979"),
                r = n("446674"),
                l = n("160299");

            function a() {
                let [t, e] = i.useState(!1), [n, a] = i.useState(!1), o = (0, r.useStateFromStores)([l.default], () => u.CountryCodesSets.EEA_COUNTRIES.has(l.default.ipCountryCodeWithFallback));
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
            }), n("222007");
            var i = n("884691"),
                u = n("65597"),
                r = n("465527"),
                l = n("622839"),
                a = n("552712"),
                o = n("646718");

            function s(t) {
                let {
                    applicationId: e,
                    skuIDs: n,
                    currentPaymentSourceId: s
                } = t, c = i.useMemo(() => n.filter(t => !o.ACTIVE_PREMIUM_SKUS.includes(t)), [n]), d = (0, u.default)([a.default], () => c.every(t => !a.default.isFetching(t) && null != a.default.get(t))), S = (0, u.useStateFromStoresObject)([a.default], () => {
                    let t = {};
                    for (let n of c) {
                        var e;
                        t[n] = null !== (e = a.default.get(n)) && void 0 !== e ? e : void 0
                    }
                    return t
                }, [c]);
                i.useEffect(() => {
                    for (let t of c) !a.default.isFetching(t) && null == a.default.get(t) && (0, r.fetchSKU)(e, t)
                }, [e, c]);
                let E = (0, u.useStateFromStoresObject)([l.default], () => {
                    let t = {};
                    for (let n of c) {
                        var e;
                        t[n] = null !== (e = l.default.getPricesForSku(n)) && void 0 !== e ? e : void 0
                    }
                    return t
                }, [c]);
                return i.useEffect(() => {
                    for (let t of c) {
                        let n = l.default.getPricesForSku(t),
                            i = null != s ? s : l.NO_PAYMENT_SOURCE;
                        (null == n || null == n[i]) && (0, r.fetchPurchasePreview)(e, t, s)
                    }
                }, [e, c, s]), {
                    hasFetchedSkus: d,
                    skusById: S,
                    skuPricePreviewsById: E
                }
            }
        },
        775325: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            }), n("222007");
            var i = n("884691");

            function u(t) {
                var e;
                let {
                    stepConfigs: n,
                    breadcrumbs: u
                } = t, [r, l] = i.useState(null === (e = n[0]) || void 0 === e ? void 0 : e.key), a = n.map(t => t.key).filter(t => null != t), o = n.filter(t => {
                    var e;
                    return null != t.key && (null == t ? void 0 : null === (e = t.options) || void 0 === e ? void 0 : e.useBreadcrumbLabel) != null
                }).map(t => ({
                    id: t.key,
                    useBreadcrumbLabel: t.options.useBreadcrumbLabel
                })).sort((t, e) => null != u ? u.indexOf(t.id) - u.indexOf(e.id) : 0);
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
            }), n("222007");
            var i = n("884691"),
                u = n("745279"),
                r = n("520713");

            function l() {
                let [t, e] = i.useState(null);
                return i.useEffect(() => {
                    (0, r.getStripe)().then(t => e(t)).catch(t => {
                        (0, u.captureBillingException)(t)
                    })
                }, []), t
            }
        },
        523591: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserCheckoutState: function() {
                    return u
                },
                default: function() {
                    return c
                }
            });
            var i, u, r = n("446674"),
                l = n("913144");
            (i = u || (u = {}))[i.UNKNOWN = 0] = "UNKNOWN", i[i.PENDING = 1] = "PENDING", i[i.DONE = 2] = "DONE";
            let a = 0,
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
                    a = 1, o = t.loadId
                },
                USER_PAYMENT_BROWSER_CHECKOUT_DONE: function(t) {
                    o === t.loadId && (a = 2)
                }
            })
        },
        53253: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SeasonalGiftingMarketingExperiment: function() {
                    return d
                },
                useIsSeasonalGiftingActive: function() {
                    return S
                },
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("884691"),
                u = n("866227"),
                r = n.n(u),
                l = n("862337"),
                a = n("296892");
            let o = new Date("2024-01-01T07:59:59.000Z"),
                s = r(o),
                c = (0, a.default)({
                    id: "2023-11_seasonal_gifting",
                    label: "Seasonal Gifting 2023",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                d = (0, a.default)({
                    id: "2023-11_seasonal_gifting_marketing_2023",
                    label: "Seasonal Gifting Marketing 2023",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function S() {
                let [t, e] = i.useState(() => s.isAfter(Date.now()));
                return i.useEffect(() => {
                    let n = new l.Timeout,
                        i = () => {
                            let t = s.diff(Date.now(), "millisecond");
                            null == n || n.start(t, () => {
                                s.isBefore(Date.now()) ? e(!1) : i()
                            })
                        };
                    return t && i(), () => n.stop()
                }), t
            }
            var E = c
        },
        15733: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                u = n("446674"),
                r = n("913144"),
                l = n("850068"),
                a = n("271938"),
                o = n("160299"),
                s = n("357957");

            function c() {
                let t = (0, u.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
                    e = (0, u.useStateFromStores)([o.default], () => o.default.ipCountryCode),
                    n = (0, u.useStateFromStores)([a.default], () => a.default.isAuthenticated());
                return i.useEffect(() => {
                    r.default.wait(() => {
                        n && !o.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && l.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
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
                    return u
                },
                usePaymentStepForAuthentication: function() {
                    return S
                },
                usePaymentAuthenticationPoller: function() {
                    return E
                }
            });
            var i, u, r = n("884691"),
                l = n("446674"),
                a = n("862337"),
                o = n("850068"),
                s = n("619443"),
                c = n("85336"),
                d = n("758764");

            function S(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    u = arguments.length > 4 ? arguments[4] : void 0;
                r.useEffect(() => {
                    null != t && (1 === e && t !== c.Step.AWAITING_AUTHENTICATION ? n(c.Step.AWAITING_AUTHENTICATION) : t === c.Step.AWAITING_AUTHENTICATION && (2 === e ? n(c.Step.REVIEW) : 3 === e && (i ? null != u ? u() : n(c.Step.REVIEW) : n(c.Step.CONFIRM))))
                }, [t, e, n, i, u])
            }(i = u || (u = {}))[i.PENDING = 1] = "PENDING", i[i.ERROR = 2] = "ERROR", i[i.NONE = 3] = "NONE";

            function E(t) {
                let e = (0, l.useStateFromStores)([d.default], () => d.default.awaitingPaymentId),
                    n = (0, l.useStateFromStores)([s.default], () => s.default.isConnected()),
                    i = r.useRef(new a.Interval);
                r.useEffect(() => {
                    n || null == e || 1 !== t ? i.current.stop() : i.current.start(5e3, () => (0, o.fetchPayment)(e))
                }, [e, t, n])
            }
        },
        926223: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            });
            var i = n("446674"),
                u = n("913144"),
                r = n("520713");
            let l = "",
                a = null,
                o = "",
                s = null,
                c = !1,
                d = null,
                S = "",
                E = "",
                f = "",
                _ = "",
                T = "",
                I = "",
                A = "",
                p = "",
                C = !1,
                P = null,
                N = null,
                R = null,
                U = null;

            function L() {
                s = null, l = "", a = null, o = "", c = !1, d = null, S = "US", E = "", f = "", _ = "", T = "", I = "", A = "", p = "", C = !1, P = null, N = null, R = null, U = null
            }

            function M(t) {
                E = t.name, S = t.country, _ = t.line1, T = t.line2, I = t.city, A = t.postalCode, p = t.state, f = t.email
            }

            function O() {
                P = null
            }

            function h(t) {
                let {
                    error: e
                } = t;
                P = e
            }
            class F extends i.default.Store {
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
                    return N
                }
                get adyenPaymentData() {
                    return d
                }
                get redirectedPaymentSourceId() {
                    return U
                }
                getCreditCardInfo() {
                    return {
                        name: E
                    }
                }
                get isCardInfoValid() {
                    return c
                }
                getBillingAddressInfo() {
                    return {
                        name: E,
                        email: f,
                        country: S,
                        line1: _,
                        line2: T,
                        city: I,
                        postalCode: A,
                        state: p
                    }
                }
                get isBillingAddressInfoValid() {
                    return C
                }
                get error() {
                    return P
                }
            }
            F.displayName = "NewPaymentSourceStore";
            var m = new F(u.default, {
                NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function(t) {
                    let {
                        stripePaymentMethod: e
                    } = t;
                    if (null == e) {
                        L();
                        return
                    }
                    s = e;
                    let {
                        billingAddressInfo: n
                    } = r.parseStripePaymentMethod(s);
                    M(n)
                },
                NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function(t) {
                    let {
                        info: e,
                        isValid: n
                    } = t;
                    E = e.name, c = n
                },
                NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function(t) {
                    let {
                        info: e,
                        isValid: n
                    } = t;
                    null != e.name && "" !== e.name && (E = e.name), S = e.country, E = e.name, _ = e.line1, T = e.line2, I = e.city, A = e.postalCode, p = e.state, f = e.email, C = n
                },
                BRAINTREE_TOKENIZE_PAYPAL_START: function() {
                    l = "", a = null
                },
                BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function(t) {
                    let {
                        email: e,
                        nonce: n,
                        billingAddress: i
                    } = t;
                    l = e, a = n, M(i), C = S.length > 0
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
                BILLING_PAYMENT_SOURCE_CREATE_START: O,
                MODAL_POP: O,
                NEW_PAYMENT_SOURCE_CLEAR_ERROR: O,
                BILLING_PAYMENT_SOURCE_CREATE_FAIL: h,
                STRIPE_TOKEN_FAILURE: h,
                BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: L,
                LOGOUT: L,
                BILLING_POPUP_BRIDGE_CALLBACK: function(t) {
                    let {
                        query: e
                    } = t;
                    (null == e ? void 0 : e.payment_id) != null ? (R = !0, N = e.payment_id) : (null == e ? void 0 : e.payment_source_id) != null && (R = !0, U = e.payment_source_id)
                },
                RESET_PAYMENT_ID: function() {
                    R = !1, N = null
                }
            })
        },
        758764: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return C
                }
            }), n("70102");
            var i = n("446674"),
                u = n("913144"),
                r = n("596523"),
                l = n("465527"),
                a = n("736978"),
                o = n("745279"),
                s = n("520713"),
                c = n("49111"),
                d = n("782340");
            let S = !1,
                E = null,
                f = null;

            function _() {
                S = !1, f = null
            }

            function T(t) {
                let {
                    error: e
                } = t, {
                    code: n,
                    paymentId: i
                } = e;
                if (n !== a.default.ErrorCodes.AUTHENTICATION_REQUIRED) return S = !1, !1;
                !S && (S = !0, E = i, I(i))
            }
            async function I(t) {
                if (null == t) return;
                let {
                    error: e
                } = await (0, s.authenticatePaymentIntentForPaymentId)(t);
                if (null != e) {
                    u.default.dispatch({
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

            function A(t) {
                let {
                    payment: e
                } = t;
                if (!S || e.id !== E || ![c.PaymentStatusTypes.COMPLETED, c.PaymentStatusTypes.CANCELED].includes(e.status)) return !1;
                S = !1, f = null, E = null, u.default.wait(r.clearError), u.default.wait(l.clearPurchaseError)
            }
            class p extends i.default.Store {
                get isAwaitingAuthentication() {
                    return S
                }
                get error() {
                    return f
                }
                get awaitingPaymentId() {
                    return E
                }
            }
            p.displayName = "PaymentAuthenticationStore";
            var C = new p(u.default, {
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
                BILLING_SUBSCRIPTION_UPDATE_FAIL: T,
                PREMIUM_PAYMENT_SUBSCRIBE_FAIL: T,
                PREMIUM_PAYMENT_UPDATE_FAIL: T,
                SKU_PURCHASE_FAIL: T,
                GIFT_CODE_REDEEM_FAILURE: T,
                PAYMENT_AUTHENTICATION_ERROR: function(t) {
                    let {
                        error: e
                    } = t;
                    f = e, S = !1
                },
                PAYMENT_UPDATE: A,
                BILLING_PAYMENT_FETCH_SUCCESS: A
            })
        },
        467292: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PurchaseTokenAuthState: function() {
                    return u
                },
                default: function() {
                    return _
                }
            });
            var i, u, r = n("446674"),
                l = n("913144"),
                a = n("736978"),
                o = n("619443");
            (i = u || (u = {}))[i.UNKNOWN = 0] = "UNKNOWN", i[i.PENDING = 1] = "PENDING", i[i.SUCCESS = 2] = "SUCCESS", i[i.ERROR = 3] = "ERROR";
            let s = 0,
                c = null,
                d = null;

            function S(t) {
                let {
                    error: e
                } = t, n = e instanceof a.default ? e : new a.default(e);
                o.default.isConnected() && n.code === a.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (s = 1)
            }

            function E() {
                s = 0, c = null, d = null
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
                SKU_PURCHASE_FAIL: S,
                PREMIUM_PAYMENT_SUBSCRIBE_FAIL: S,
                USER_PAYMENT_CLIENT_ADD: function(t) {
                    s = 2, c = t.purchaseTokenHash, d = t.expiresAt
                },
                BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: E,
                BILLING_SUBSCRIPTION_UPDATE_START: E,
                PAYMENT_AUTHENTICATION_CLEAR_ERROR: E,
                PREMIUM_PAYMENT_ERROR_CLEAR: E,
                PREMIUM_PAYMENT_MODAL_CLOSE: E,
                PREMIUM_PAYMENT_MODAL_OPEN: E,
                PREMIUM_PAYMENT_SUBSCRIBE_START: E,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: E,
                PREMIUM_PAYMENT_UPDATE_SUCCESS: E,
                SKU_PURCHASE_MODAL_CLOSE: E,
                SKU_PURCHASE_MODAL_OPEN: E,
                SKU_PURCHASE_START: E,
                SKU_PURCHASE_SUCCESS: E
            })
        },
        437712: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return U
                }
            }), n("222007");
            var i = n("917351"),
                u = n.n(i),
                r = n("446674"),
                l = n("913144"),
                a = n("984273"),
                o = n("686470"),
                s = n("964889"),
                c = n("552712");
            let d = {},
                S = {},
                E = {},
                f = {},
                _ = !1,
                T = !1,
                I = new Set,
                A = new Set,
                p = {};

            function C(t) {
                d[t.id] = a.default.createFromServer(t), null == E[t.sku_id] && (E[t.sku_id] = new Set), null == f[t.application_id] && (f[t.application_id] = new Set), null != t.subscription_id && (null == p[t.subscription_id] && (p[t.subscription_id] = new Set), p[t.subscription_id].add(t.id)), f[t.application_id].add(t.id), E[t.sku_id].add(t.id)
            }

            function P(t) {
                S[t.id] = a.default.createFromServer(t)
            }

            function N(t) {
                return C(t.entitlement)
            }
            class R extends r.default.Store {
                initialize() {
                    this.syncWith([o.default], () => !0)
                }
                get(t) {
                    return d[t]
                }
                getGiftable() {
                    return u.values(S)
                }
                getForApplication(t) {
                    let e = f[t];
                    if (null == e) return null;
                    let n = new Set;
                    for (let t of e) n.add(d[t]);
                    return n
                }
                getForSku(t) {
                    let e = E[t];
                    if (null == e) return null;
                    let n = new Set;
                    for (let t of e) n.add(d[t]);
                    return n
                }
                get fetchingAllEntitlements() {
                    return _
                }
                get fetchedAllEntitlements() {
                    return T
                }
                get applicationIdsFetching() {
                    return I
                }
                get applicationIdsFetched() {
                    return A
                }
                isFetchingForApplication(t) {
                    return this.fetchingAllEntitlements || null != t && this.applicationIdsFetching.has(t)
                }
                isFetchedForApplication(t) {
                    return this.fetchedAllEntitlements || null != t && this.applicationIdsFetched.has(t)
                }
                getForSubscription(t) {
                    let e = p[t];
                    if (null == e) return null;
                    let n = new Set;
                    for (let t of e) n.add(d[t]);
                    return n
                }
                isEntitledToSku(t, e, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        u = E[e];
                    if (null != u)
                        for (let e of u) {
                            let n = d[e];
                            if (null != n && n.isValid(t, c.default, i)) return !0
                        }
                    if (A.has(n)) return !1;
                    let r = null != i ? o.default.getLibraryApplication(n, i) : o.default.getActiveLibraryApplication(n);
                    return !!(null != r && r.sku.id === e && (0, s.isUserEntitledToLibraryApplication)(r)) || null
                }
                hasFetchedForApplicationIds(t) {
                    return t.every(t => A.has(t))
                }
            }
            R.displayName = "EntitlementStore";
            var U = new R(l.default, {
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
                    for (let t of (I.delete(e), A.add(e), n)) !0 !== t.consumed && C(t)
                },
                ENTITLEMENT_FETCH_APPLICATION_FAIL: function() {},
                ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(t) {
                    let {
                        entitlements: e
                    } = t;
                    S = {}, e.forEach(P)
                },
                SKU_PURCHASE_SUCCESS: function(t) {
                    let {
                        entitlements: e
                    } = t;
                    for (let t of e) C(t)
                },
                LIBRARY_FETCH_SUCCESS: function(t) {
                    let {
                        libraryApplications: e
                    } = t;
                    for (let t of e)
                        if (null != t.entitlements)
                            for (let e of t.entitlements) C(e)
                },
                ENTITLEMENT_CREATE: N,
                ENTITLEMENT_UPDATE: N,
                ENTITLEMENT_DELETE: function(t) {
                    return function(t) {
                        delete d[t.id];
                        let e = f[t.application_id];
                        null != e && e.delete(t.id);
                        let n = E[t.sku_id];
                        if (null != n && n.delete(t.id), null != t.subscription_id) {
                            let e = p[t.subscription_id];
                            null != e && e.delete(t.id)
                        }
                    }(t.entitlement)
                },
                LOGOUT: function() {
                    d = {}, E = {}, f = {}, _ = !1, T = !1, I = new Set, A = new Set
                },
                ENTITLEMENTS_FETCH_FOR_USER_START: function() {
                    _ = !0
                },
                ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function(t) {
                    let {
                        entitlements: e
                    } = t;
                    for (let t of (T = !0, _ = !1, e)) C(t)
                },
                ENTITLEMENTS_FETCH_FOR_USER_FAIL: function() {
                    T = !1, _ = !1
                }
            })
        },
        622839: function(t, e, n) {
            "use strict";
            let i, u;
            n.r(e), n.d(e, {
                NO_PAYMENT_SOURCE: function() {
                    return o
                },
                default: function() {
                    return L
                }
            });
            var r = n("446674"),
                l = n("913144"),
                a = n("49111");
            let o = "no_payment_source",
                s = null,
                c = null,
                d = null,
                S = null,
                E = null,
                f = {},
                _ = null,
                T = !1,
                I = null,
                A = !1,
                p = !1,
                C = !1,
                P = !1,
                N = null;

            function R(t) {
                null != i && null != _ ? i(_) : null != u && u(t), i = null, u = null
            }
            class U extends r.default.Store {
                getPricesForSku(t) {
                    return f[t]
                }
                isOpen() {
                    let t = __OVERLAY__ ? a.AppContext.OVERLAY : a.AppContext.APP;
                    return N === t && C
                }
                get isPurchasingSKU() {
                    return T
                }
                get forceConfirmationStepOnMount() {
                    return A
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
                    return S
                }
                get promotionId() {
                    return E
                }
                get isIAP() {
                    return p
                }
                get giftCode() {
                    return c
                }
                get isGift() {
                    return P
                }
            }
            U.displayName = "SKUPaymentModalStore";
            var L = new U(l.default, {
                SKU_PURCHASE_MODAL_OPEN: function(t) {
                    R(), s = t.skuId, d = t.applicationId, p = t.isIAP, S = t.analyticsLocation, N = t.context, P = t.isGift, C = !0, A = !1, i = t.resolve, u = t.reject, I = null, _ = null, E = t.promotionId
                },
                SKU_PURCHASE_MODAL_CLOSE: function(t) {
                    let {
                        error: e
                    } = t;
                    C = !1, N = null, R(e)
                },
                SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function(t) {
                    let {
                        skuId: e,
                        paymentSourceId: n,
                        price: i
                    } = t;
                    f = {
                        ...f,
                        [e]: {
                            ...f[e],
                            [null != n ? n : o]: i
                        }
                    }
                },
                SKU_PURCHASE_START: function() {
                    T = !0
                },
                SKU_PURCHASE_SUCCESS: function(t) {
                    let {
                        entitlements: e,
                        giftCode: n
                    } = t;
                    T = !1, _ = e, c = n
                },
                SKU_PURCHASE_FAIL: function(t) {
                    let {
                        error: e
                    } = t;
                    T = !1, I = e
                },
                SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function() {
                    A = !0
                },
                SKU_PURCHASE_CLEAR_ERROR: function() {
                    I = null
                },
                SKU_PURCHASE_UPDATE_IS_GIFT: function(t) {
                    P = t.isGift
                },
                OVERLAY_SET_INPUT_LOCKED: function(t) {
                    let {
                        locked: e
                    } = t;
                    if (!e || null == N) return !1;
                    C = !1, N = null, R()
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
        461380: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("414456"),
                r = n.n(u),
                l = n("384737"),
                a = n("448052"),
                o = n("748802"),
                s = n("260792"),
                c = n("77078"),
                d = n("75196"),
                S = n("4177");
            let E = {
                    UP: S.directionUp,
                    RIGHT: S.directionRight,
                    DOWN: S.directionDown,
                    LEFT: S.directionLeft
                },
                f = t => {
                    let {
                        direction: e = E.DOWN,
                        width: n = 24,
                        height: u = 24,
                        color: f = "currentColor",
                        transition: _ = S.transition,
                        className: T,
                        foreground: I,
                        expanded: A,
                        ...p
                    } = t, {
                        enabled: C
                    } = (0, c.useRedesignIconContext)(), P = e;
                    if (!0 === A ? P = E.DOWN : !1 === A && (P = E.RIGHT), C) {
                        let t = {
                            [E.UP]: s.ChevronSmallUpIcon,
                            [E.DOWN]: l.ChevronSmallDownIcon,
                            [E.LEFT]: a.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [P];
                        return (0, i.jsx)(t, {
                            ...p,
                            className: T,
                            width: n,
                            height: u,
                            color: f,
                            colorClass: I
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: r(T, _, P),
                        width: n,
                        height: u,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(p),
                        children: (0, i.jsx)("path", {
                            className: I,
                            fill: "none",
                            stroke: f,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            f.Directions = E;
            var _ = f
        },
        105097: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("70102");
            var i = n("37983"),
                u = n("884691");

            function r() {
                let t = u.createContext(void 0);

                function e() {
                    let e = u.useContext(t);
                    if (null == e) throw Error("Context was used outside of defined provider.");
                    return e
                }
                return [t, e, function() {
                    let n = e();
                    return function(e) {
                        let {
                            children: u
                        } = e;
                        return (0, i.jsx)(t.Provider, {
                            value: n,
                            children: u
                        })
                    }
                }]
            }
        },
        713518: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchSubscriptionPlansOnNewPaymentSource: function() {
                    return E
                },
                getCurrencies: function() {
                    return f
                },
                planHasCurrency: function() {
                    return _
                },
                useCurrencyWithPaymentSourceChange: function() {
                    return T
                }
            }), n("222007");
            var i = n("884691"),
                u = n("627445"),
                r = n.n(u),
                l = n("913144"),
                a = n("775433"),
                o = n("308592"),
                s = n("10514"),
                c = n("719923"),
                d = n("49111"),
                S = n("646718");

            function E(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...S.ACTIVE_PREMIUM_SKUS];
                return null == t || s.default.hasPaymentSourceForSKUIds(t, e) ? Promise.resolve() : new Promise(t => {
                    l.default.wait(async () => {
                        await (0, a.fetchSubscriptionPlansBySKUs)(e), t()
                    })
                })
            }

            function f(t, e, n) {
                let i, u = [],
                    l = [],
                    a = {
                        purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
                    };
                return r(i = "string" == typeof t ? s.default.get(t) : t, "subscription plan not loaded"), null != e && s.default.hasPaymentSourceForSKUId(e, i.skuId) && (a.paymentSourceId = e), (u = (l = (0, c.experimentalGetPrices)(i.id, a)).map(t => t.currency)).length < 1 && (u = [d.CurrencyCodes.USD]), u
            }

            function _(t, e, n) {
                let i = s.default.get(t);
                r(null != i, "plan is undefined");
                let u = f(i, n, !1);
                return u.includes(e)
            }

            function T(t, e, n, u, r) {
                let [l, a] = i.useReducer((t, e) => ({
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
                i.useEffect(() => {
                    let t = async () => {
                        await E(n, r);
                        let t = [];
                        null != e && null != s.default.get(e) && (t = f(e, n, u)), t.length > 0 ? a({
                            paymentSourceId: n,
                            currency: t[0],
                            loaded: !0
                        }) : a({
                            paymentSourceId: n,
                            loaded: !1
                        })
                    };
                    t()
                }, [n, JSON.stringify(r), e, u, c]);
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
        },
        976979: function(t, e, n) {
            "use strict";
            var i, u;
            n.r(e), n.d(e, {
                CountryCodes: function() {
                    return i
                },
                CountryCodesSets: function() {
                    return r
                }
            }), n("222007"), (u = i || (i = {})).AD = "AD", u.AE = "AE", u.AF = "AF", u.AG = "AG", u.AI = "AI", u.AL = "AL", u.AM = "AM", u.AO = "AO", u.AQ = "AQ", u.AR = "AR", u.AS = "AS", u.AT = "AT", u.AU = "AU", u.AW = "AW", u.AX = "AX", u.AZ = "AZ", u.BA = "BA", u.BB = "BB", u.BD = "BD", u.BE = "BE", u.BF = "BF", u.BG = "BG", u.BH = "BH", u.BI = "BI", u.BJ = "BJ", u.BL = "BL", u.BM = "BM", u.BN = "BN", u.BO = "BO", u.BQ = "BQ", u.BR = "BR", u.BS = "BS", u.BT = "BT", u.BV = "BV", u.BW = "BW", u.BY = "BY", u.BZ = "BZ", u.CA = "CA", u.CC = "CC", u.CD = "CD", u.CF = "CF", u.CG = "CG", u.CH = "CH", u.CI = "CI", u.CK = "CK", u.CL = "CL", u.CM = "CM", u.CN = "CN", u.CO = "CO", u.CR = "CR", u.CU = "CU", u.CV = "CV", u.CW = "CW", u.CX = "CX", u.CY = "CY", u.CZ = "CZ", u.DE = "DE", u.DJ = "DJ", u.DK = "DK", u.DM = "DM", u.DO = "DO", u.DZ = "DZ", u.EC = "EC", u.EE = "EE", u.EG = "EG", u.EH = "EH", u.ER = "ER", u.ES = "ES", u.ET = "ET", u.FI = "FI", u.FJ = "FJ", u.FK = "FK", u.FM = "FM", u.FO = "FO", u.FR = "FR", u.GA = "GA", u.GB = "GB", u.GD = "GD", u.GE = "GE", u.GF = "GF", u.GG = "GG", u.GH = "GH", u.GI = "GI", u.GL = "GL", u.GM = "GM", u.GN = "GN", u.GP = "GP", u.GQ = "GQ", u.GR = "GR", u.GS = "GS", u.GT = "GT", u.GU = "GU", u.GW = "GW", u.GY = "GY", u.HK = "HK", u.HM = "HM", u.HN = "HN", u.HR = "HR", u.HT = "HT", u.HU = "HU", u.ID = "ID", u.IE = "IE", u.IL = "IL", u.IM = "IM", u.IN = "IN", u.IO = "IO", u.IQ = "IQ", u.IR = "IR", u.IS = "IS", u.IT = "IT", u.JE = "JE", u.JM = "JM", u.JO = "JO", u.JP = "JP", u.KE = "KE", u.KG = "KG", u.KH = "KH", u.KI = "KI", u.KM = "KM", u.KN = "KN", u.KP = "KP", u.KR = "KR", u.KW = "KW", u.KY = "KY", u.KZ = "KZ", u.LA = "LA", u.LB = "LB", u.LC = "LC", u.LI = "LI", u.LK = "LK", u.LR = "LR", u.LS = "LS", u.LT = "LT", u.LU = "LU", u.LV = "LV", u.LY = "LY", u.MA = "MA", u.MC = "MC", u.MD = "MD", u.ME = "ME", u.MF = "MF", u.MG = "MG", u.MH = "MH", u.MK = "MK", u.ML = "ML", u.MM = "MM", u.MN = "MN", u.MO = "MO", u.MP = "MP", u.MQ = "MQ", u.MR = "MR", u.MS = "MS", u.MT = "MT", u.MU = "MU", u.MV = "MV", u.MW = "MW", u.MX = "MX", u.MY = "MY", u.MZ = "MZ", u.NA = "NA", u.NC = "NC", u.NE = "NE", u.NF = "NF", u.NG = "NG", u.NI = "NI", u.NL = "NL", u.NO = "NO", u.NP = "NP", u.NR = "NR", u.NU = "NU", u.NZ = "NZ", u.OM = "OM", u.PA = "PA", u.PE = "PE", u.PF = "PF", u.PG = "PG", u.PH = "PH", u.PK = "PK", u.PL = "PL", u.PM = "PM", u.PN = "PN", u.PR = "PR", u.PS = "PS", u.PT = "PT", u.PW = "PW", u.PY = "PY", u.QA = "QA", u.RE = "RE", u.RO = "RO", u.RS = "RS", u.RU = "RU", u.RW = "RW", u.SA = "SA", u.SB = "SB", u.SC = "SC", u.SD = "SD", u.SE = "SE", u.SG = "SG", u.SH = "SH", u.SI = "SI", u.SJ = "SJ", u.SK = "SK", u.SL = "SL", u.SM = "SM", u.SN = "SN", u.SO = "SO", u.SR = "SR", u.SS = "SS", u.ST = "ST", u.SV = "SV", u.SX = "SX", u.SY = "SY", u.SZ = "SZ", u.TC = "TC", u.TD = "TD", u.TF = "TF", u.TG = "TG", u.TH = "TH", u.TJ = "TJ", u.TK = "TK", u.TL = "TL", u.TM = "TM", u.TN = "TN", u.TO = "TO", u.TR = "TR", u.TT = "TT", u.TV = "TV", u.TW = "TW", u.TZ = "TZ", u.UA = "UA", u.UG = "UG", u.UM = "UM", u.US = "US", u.UY = "UY", u.UZ = "UZ", u.VA = "VA", u.VC = "VC", u.VE = "VE", u.VG = "VG", u.VI = "VI", u.VN = "VN", u.VU = "VU", u.WF = "WF", u.WS = "WS", u.YE = "YE", u.YT = "YT", u.ZA = "ZA", u.ZM = "ZM", u.ZW = "ZW", u.XK = "XK", u.AC = "AC", u.AN = "AN", u.DG = "DG", u.EL = "EL", u.IC = "IC", u.MI = "MI", u.TP = "TP", u.WK = "WK";
            let r = {
                NON_STANDARD_CODES: new Set(["AC", "AN", "DG", "EL", "IC", "MI", "TP", "WK", "XK"]),
                ALL: new Set(["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "EL", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WK", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]),
                US_TERRITORIES: new Set(["AS", "GU", "MP", "PR", "VI"]),
                FRANCE_AND_FRENCH_REGION: new Set(["FR", "GF", "GP", "MQ", "NC", "PF", "PM", "RE", "TF", "WF", "YT"]),
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                VAT_COUNTRIES: new Set(["AT", "AU", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                TAX_DOMESTIC: new Set(["CA", "GB", "US"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                DSA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                WITHOUT_POSTAL_CODES: new Set(["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"]),
                TAX_EXCLUSIVE: new Set(["CA", "US"]),
                TAX_ADDRESS_REQUIRE_POSTAL_CODE: new Set(["CA", "US"]),
                NITRO_TAX_EXCLUSIVE_EXPERIMENT_COUNTRIES: new Set(["US"]),
                NITRO_TAX_EXCLUSIVE_EXPERIMENT_STATES: new Set(["TN", "WI"])
            }
        }
    }
]);
//# sourceMappingURL=5b67aca2ff6d61a81bac.js.map