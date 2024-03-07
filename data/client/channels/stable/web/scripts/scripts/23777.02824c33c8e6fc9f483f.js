(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["23777"], {
        316718: function(t, e, n) {
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
                resume: function() {
                    return S
                },
                changeSubscriptionCurrency: function() {
                    return E
                },
                changePaymentSource: function() {
                    return d
                },
                clearError: function() {
                    return f
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
            async function c(t, e, n, u, s, c) {
                try {
                    let S = (0, l.getPremiumPlanItem)(t);
                    i(S, "Expected existing premium plan");
                    let E = (0, l.getItemsWithUpsertedPremiumPlanId)(t, S.planId);
                    await a.updateSubscription(t, {
                        status: o.SubscriptionStatusTypes.ACTIVE,
                        paymentSource: u,
                        items: E,
                        currency: n
                    }, e, s, c), r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                        error: t
                    }), t
                }
            }
            async function S(t, e, n) {
                try {
                    await a.updateSubscription(t, {
                        status: o.SubscriptionStatusTypes.ACTIVE
                    }, e, n)
                } catch (t) {
                    throw t
                }
            }
            async function E(t, e, n, u) {
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
            async function d(t, e, n, u, i) {
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

            function f() {
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
                fetchTestSKUsForApplication: function() {
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
            var u = n("872717"),
                i = n("913144"),
                r = n("448993"),
                l = n("736978"),
                a = n("333805"),
                o = n("84460"),
                s = n("552712"),
                c = n("167726"),
                S = n("745279"),
                E = n("449008"),
                d = n("224400"),
                f = n("271560"),
                _ = n("850068"),
                T = n("49111");
            async function I(t, e) {
                if (null == s.default.get(e)) {
                    i.default.dispatch({
                        type: "SKU_FETCH_START",
                        skuId: e
                    });
                    try {
                        let n = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t),
                            u = await (0, f.httpGetWithCountryCodeQuery)(n ? T.Endpoints.STORE_SKU(e) : T.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e));
                        i.default.dispatch({
                            type: "SKU_FETCH_SUCCESS",
                            sku: n ? u.body : u.body.sku
                        }), !n && i.default.dispatch({
                            type: "STORE_LISTING_FETCH_SUCCESS",
                            storeListing: u.body
                        })
                    } catch (t) {
                        throw i.default.dispatch({
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
                let u = await (0, f.httpGetWithCountryCodeQuery)(T.Endpoints.APPLICATION_SKUS(t)),
                    r = u.body;
                return i.default.dispatch({
                    type: "SKUS_FETCH_SUCCESS",
                    skus: r
                }), r
            }
            async function p(t, e, n, u) {
                let r;
                let l = {
                        payment_source_id: n,
                        gift: null == u ? void 0 : u.isGift
                    },
                    a = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
                a && (l.test_mode = !0), i.default.dispatch({
                    type: "SKU_PURCHASE_PREVIEW_FETCH",
                    skuId: e
                });
                try {
                    r = await (0, f.httpGetWithCountryCodeQuery)({
                        url: T.Endpoints.STORE_SKU_PURCHASE(e),
                        query: l,
                        oldFormErrors: !0
                    }), i.default.dispatch({
                        type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                        skuId: e,
                        paymentSourceId: n,
                        price: r.body
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
                        skuId: e
                    })
                }
                return r
            }
            async function C(t, e, n) {
                i.default.dispatch({
                    type: "SKU_PURCHASE_START",
                    applicationId: t,
                    skuId: n
                });
                try {
                    let t = await u.default.post({
                        url: T.Endpoints.CHANNEL_ENTITLEMENT_GRANT(e),
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
                    giftInfoOptions: p,
                    subscriptionPlanId: C,
                    loadId: N,
                    countryCode: R
                } = {
                    ...P,
                    ...n
                };
                i.default.wait(() => {
                    i.default.dispatch({
                        type: "SKU_PURCHASE_START",
                        applicationId: t,
                        skuId: e
                    })
                });
                let U = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
                try {
                    let t = {
                        gift: A,
                        sku_subscription_plan_id: C,
                        gateway_checkout_context: await (0, S.createGatewayCheckoutContext)(a),
                        load_id: N
                    };
                    if (U) t.test_mode = !0;
                    else {
                        if (null != a && (t.payment_source_id = a.id, t.payment_source_token = await (0, _.createPaymentSourceToken)(a), T.ADYEN_PAYMENT_SOURCES.has(a.type))) {
                            let e = await (0, _.popupBridgeState)(a.type);
                            t.return_url = u.default.getAPIBaseURL() + T.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(a.type, null != e ? e : "", "success")
                        }
                        null != s && (t.expected_amount = s), null != f && (t.expected_currency = f), t.gift_info_options = p, null != R && (t.country_code = R), t.purchase_token = (0, d.getPurchaseToken)()
                    }
                    let n = await u.default.post({
                        url: T.Endpoints.STORE_SKU_PURCHASE(e),
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
                            isGift: A
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
                            purchase_token: (0, d.getPurchaseToken)()
                        },
                        e = await u.default.post({
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
                i.default.dispatch({
                    type: "SKU_PURCHASE_CLEAR_ERROR"
                })
            }

            function L() {
                i.default.wait(() => i.default.dispatch({
                    type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP"
                }))
            }

            function M(t) {
                i.default.dispatch({
                    type: "SKU_PURCHASE_UPDATE_IS_GIFT",
                    isGift: t
                })
            }
        },
        837707: function(t, e, n) {
            "use strict";

            function u(t) {
                if (null != t) {
                    if ("activitySessionId" in t) return t.activitySessionId;
                    if ("instanceId" in t) return t.instanceId;
                    if ("activity_id" in t) return t.activity_id
                }
            }
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            })
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
                    return S
                }
            }), n("222007");
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
                return (0, u.useStateFromStores)([r.default, l.default, a.default], () => S(t, [r.default, l.default, a.default]), [t])
            }

            function S() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
                    [n, u, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, l.default, a.default],
                    c = n.paymentSourceIds,
                    S = n.defaultPaymentSourceId,
                    E = u.isLoadedForSKUs(e),
                    d = null === (t = i.getPremiumTypeSubscription()) || void 0 === t ? void 0 : t.paymentSourceId;
                if (null != d && !u.hasPaymentSourceForSKUIds(d, e)) return s("subscription payment source ".concat(d, " not loaded for ").concat(e)), !1;
                if (null != S && !u.hasPaymentSourceForSKUIds(S, e)) return s("default payment source ".concat(S, " not loaded for ").concat(e)), !1;
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
            }), n("222007");
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
                    return H
                },
                PaymentContext: function() {
                    return G
                },
                usePaymentContext: function() {
                    return D
                },
                useForwardedPaymentContext: function() {
                    return B
                }
            }), n("222007"), n("702976");
            var u = n("37983"),
                i = n("884691"),
                r = n("41092"),
                l = n("775560"),
                a = n("748820"),
                o = n("446674"),
                s = n("191225"),
                c = n("837707"),
                S = n("619935"),
                E = n("991254"),
                d = n("467292"),
                f = n("622839"),
                _ = n("105097"),
                T = n("568734"),
                I = n("719923"),
                A = n("286235"),
                p = n("621746"),
                C = n("854381"),
                P = n("237288"),
                N = n("986681"),
                R = n("702924"),
                U = n("241006"),
                L = n("284797"),
                M = n("383802"),
                O = n("334702"),
                F = n("775325"),
                h = n("403293"),
                m = n("523591"),
                y = n("49111"),
                g = n("646718");
            let [G, D, B] = (0, _.default)();

            function H(t) {
                var e, n;
                let {
                    loadId: _,
                    activeSubscription: D,
                    stepConfigs: B,
                    breadcrumbs: H = [],
                    skuIDs: K,
                    isGift: b = !1,
                    children: v,
                    defaultPlanId: w,
                    purchaseType: Y = y.PurchaseTypes.SUBSCRIPTION,
                    applicationId: W,
                    referralCode: V
                } = t, k = (0, h.default)(), Z = (0, S.useBlockedPaymentsConfig)(), x = (0, P.default)(), {
                    paymentSources: J,
                    hasPaymentSources: Q,
                    paymentSourceId: X,
                    setPaymentSourceId: j,
                    hasFetchedPaymentSources: q
                } = (0, N.default)({
                    isGift: b,
                    activeSubscription: D
                }), z = i.useRef(Q), {
                    hasFetchedSubscriptionPlans: $,
                    priceOptions: tt,
                    setCurrency: te,
                    currencyLoading: tn,
                    currencies: tu
                } = (0, C.default)({
                    activeSubscription: D,
                    skuIDs: K,
                    paymentSourceId: X,
                    isGift: b
                }), ti = (0, M.default)(), [tr, tl] = i.useState(!1), {
                    step: ta,
                    setStep: to,
                    steps: ts,
                    breadcrumbsData: tc
                } = (0, F.default)({
                    stepConfigs: B,
                    breadcrumbs: H
                }), [tS, tE] = (0, L.default)(ta), {
                    paymentError: td,
                    paymentAuthenticationState: tf
                } = (0, R.default)(), {
                    purchaseError: t_,
                    purchaseErrorBlockRef: tT,
                    setPurchaseError: tI
                } = (0, U.default)(), tA = (0, l.useLazyValue)(() => {
                    let t = null != _ ? _ : (0, a.v4)();
                    return A.default.addBreadcrumb({
                        message: "Checkout session ID: ".concat(t)
                    }), {
                        loadId: t,
                        startTime: Date.now()
                    }
                }), {
                    selectedSkuId: tp,
                    selectedPlan: tC,
                    setSelectedSkuId: tP,
                    setSelectedPlanId: tN
                } = (0, p.default)(), [tR, tU] = (0, o.useStateFromStoresArray)([d.default], () => [d.default.purchaseTokenAuthState, d.default.purchaseTokenHash]), [tL, tM] = (0, o.useStateFromStoresArray)([m.default], () => [m.default.browserCheckoutState, m.default.loadId]), [tO, tF] = i.useState(null), [th, tm] = i.useState(null), [ty, tg] = i.useState(null), [tG, tD] = i.useState(null), [tB, tH] = i.useState(null), [tK, tb] = i.useState(void 0), [tv, tw] = i.useState([]), tY = i.useMemo(() => null == tC || (0, I.isPremiumSubscriptionPlan)(tC.id), [tC]), tW = i.useRef(null != D ? D.planId : null);
                i.useEffect(() => {
                    null == tW.current && null != D && (tW.current = D.planId)
                }, [D]);
                let {
                    skusById: tV,
                    hasFetchedSkus: tk,
                    skuPricePreviewsById: tZ
                } = (0, O.default)({
                    applicationId: null != W ? W : g.PREMIUM_SUBSCRIPTION_APPLICATION,
                    skuIDs: K,
                    currentPaymentSourceId: X,
                    isGift: b
                }), tx = i.useMemo(() => {
                    if (null == tp) return null;
                    let t = tZ[tp];
                    if (null == t) return null;
                    let e = null != X ? X : f.NO_PAYMENT_SOURCE;
                    return t[e]
                }, [tp, tZ, X]), tJ = (0, E.useApplication)(W), tQ = (0, T.hasFlag)(null !== (e = null == tJ ? void 0 : tJ.flags) && void 0 !== e ? e : 0, y.ApplicationFlags.EMBEDDED) && (0, T.hasFlag)(null !== (n = null == tJ ? void 0 : tJ.flags) && void 0 !== n ? n : 0, y.ApplicationFlags.EMBEDDED_IAP), tX = (0, o.useStateFromStores)([s.default], () => Array.from(s.default.getSelfEmbeddedActivities().values()).find(t => {
                    let {
                        applicationId: e
                    } = t;
                    return e === W
                })), tj = (0, c.default)(tX), tq = tV[null != tp ? tp : ""];
                return (0, u.jsx)(G.Provider, {
                    value: {
                        stripe: k,
                        contextMetadata: tA,
                        blockedPayments: Z,
                        activeSubscription: D,
                        hasFetchedSubscriptions: x,
                        hasFetchedSubscriptionPlans: $,
                        updatedSubscription: tG,
                        setUpdatedSubscription: tD,
                        subscriptionMetadataRequest: tB,
                        setSubscriptionMetadataRequest: tH,
                        hasFetchedPaymentSources: q,
                        paymentSources: J,
                        hasPaymentSources: Q,
                        paymentSourceId: X,
                        setPaymentSourceId: j,
                        priceOptions: tt,
                        setCurrency: te,
                        currencyLoading: tn,
                        currencies: tu,
                        ...ti,
                        hasAcceptedTerms: tr,
                        setHasAcceptedTerms: tl,
                        step: ta,
                        setStep: to,
                        steps: ts,
                        stepConfigs: B,
                        breadcrumbs: tc,
                        purchaseState: tS,
                        setPurchaseState: tE,
                        paymentAuthenticationState: tf,
                        paymentError: td,
                        purchaseError: t_,
                        setPurchaseError: tI,
                        purchaseErrorBlockRef: tT,
                        purchaseTokenAuthState: tR,
                        purchaseTokenHash: tU,
                        browserCheckoutState: tL,
                        browserCheckoutStateLoadId: tM,
                        bodyNode: tO,
                        setBodyNode: tF,
                        footerNode: th,
                        setFooterNode: tm,
                        modalOverlayNode: ty,
                        setModalOverlayNode: tg,
                        selectedSkuId: tp,
                        selectedPlan: tC,
                        setSelectedSkuId: tP,
                        setSelectedPlanId: tN,
                        readySlideId: tK,
                        setReadySlideId: tb,
                        defaultPlanId: w,
                        isPremium: tY,
                        productLine: null == tq ? void 0 : tq.productLine,
                        startedPaymentFlowWithPaymentSourcesRef: z,
                        startingPremiumSubscriptionPlanIdRef: tW,
                        hasFetchedSkus: tk,
                        skusById: tV,
                        skuPricePreviewsById: tZ,
                        selectedSkuPricePreview: tx,
                        application: tJ,
                        purchaseType: Y,
                        isEmbeddedIAP: tQ,
                        activitySessionId: tj,
                        entitlementsGranted: tv,
                        setEntitlementsGranted: tw,
                        referralCode: V
                    },
                    children: (0, u.jsx)(r.Elements, {
                        options: y.StripeElementsOptions,
                        stripe: k,
                        children: v
                    })
                })
            }
        },
        85336: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Step: function() {
                    return u
                },
                COLLAPSED_PAYMENT_BREADCRUMB_STEPS: function() {
                    return E
                },
                getLabelForStep: function() {
                    return d
                },
                errorToStep: function() {
                    return f
                },
                usePurchaseStateForStep: function() {
                    return _
                }
            }), n("222007"), n("70102");
            var u, i, r = n("884691"),
                l = n("448993"),
                a = n("605250"),
                o = n("745279"),
                s = n("286350"),
                c = n("782340");
            let S = new a.default("PaymentSteps");
            (i = u || (u = {})).PAYMENT_TYPE = "payment_type", i.CREDIT_CARD_INFORMATION = "credit_card_information", i.PAYPAL_INFORMATION = "paypal_information", i.VENMO_INFORMATION = "venmo_information", i.SOFORT_INFORMATION = "sofort_information", i.PRZELEWY24_INFORMATION = "przelewy24_information", i.EPS_INFORMATION = "eps_information", i.IDEAL_INFORMATION = "ideal_information", i.CASH_APP_INFORMATION = "cash_app_information", i.PAYMENT_REQUEST_INFORMATION = "payment_request_information", i.ADDRESS = "address", i.AWAITING_AUTHENTICATION = "awaiting_authentication", i.SKU_SELECT = "sku_select", i.PLAN_SELECT = "plan_select", i.PREMIUM_UPSELL = "premium_upsell", i.PREMIUM_GUILD_UPSELL = "premium_guild_upsell", i.REVIEW = "review", i.CONFIRM = "confirm", i.CLAIM_FREE_SKU = "claim_free_sku", i.SKU_PREVIEW = "sku_preview", i.LOADING_PAYMENT_SOURCES = "loading_payment_sources", i.SHOP = "shop", i.PROMOTION_INFO = "promotion_info", i.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth", i.BENEFITS = "benefits", i.WHAT_YOU_LOSE = "what_you_lose", i.ADD_PAYMENT_STEPS = "add_payment_steps", i.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout", i.GIFT_CUSTOMIZATION = "gift_customization";
            let E = new Set(["credit_card_information", "payment_request_information", "paypal_information", "venmo_information", "cash_app_information", "address", "claim_free_sku", "sku_preview", "premium_upsell", "sofort_information", "przelewy24_information"]);

            function d(t) {
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
                        return c.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_DETAILS;
                    case "gift_customization":
                        return c.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER
                }
                throw Error("Unexpected step: ".concat(t))
            }

            function f(t) {
                if (null != t) {
                    if (!(t instanceof l.BillingError)) throw S.error(t), (0, o.captureBillingException)(t), Error("Unexpected error type");
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
                    isGift: S
                } = t;
                s = s.filter(t => t !== l.PremiumSubscriptionSKUs.NONE);
                let E = (0, u.useStateFromStores)([i.default], () => {
                        let t = i.default.getPlanIdsForSkus(s).filter(t => !S || l.PREMIUM_PLANS.has(t));
                        return t.length > 0 ? i.default.get(t[0]) : null
                    }),
                    d = null == E ? [] : (0, r.getCurrencies)(E.id, c, S),
                    f = null !== (n = null !== (e = d.find(t => t === (null == o ? void 0 : o.currency))) && void 0 !== e ? e : d[0]) && void 0 !== n ? n : a.CurrencyCodes.USD;
                return {
                    ...(0, r.useCurrencyWithPaymentSourceChange)(f, null == E ? void 0 : E.id, c, S, s),
                    currencies: d
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
            }), n("222007");
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
                })), c = (t, e, n) => t || (null == e ? void 0 : e.paymentSourceId) == null ? n : e.paymentSourceId, [S, E] = u.useState(() => c(e, n, a));
                return u.useEffect(() => {
                    s ? E(c(e, n, a)) : (0, r.fetchPaymentSources)()
                }, [s, e, n, a]), {
                    paymentSources: o,
                    hasPaymentSources: Object.keys(o).length > 0,
                    paymentSourceId: S,
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
            }), n("222007");
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
            }), n("222007");
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
            }), n("222007");
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
            }), n("222007");
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
            }), n("222007");
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
                    currentPaymentSourceId: s,
                    isGift: c
                } = t, S = u.useMemo(() => n.filter(t => !o.ACTIVE_PREMIUM_SKUS.includes(t)), [JSON.stringify(n)]), E = (0, i.default)([a.default], () => S.every(t => !a.default.isFetching(t) && null != a.default.get(t))), d = (0, i.useStateFromStoresObject)([a.default], () => {
                    let t = {};
                    for (let n of S) {
                        var e;
                        t[n] = null !== (e = a.default.get(n)) && void 0 !== e ? e : void 0
                    }
                    return t
                }, [S]);
                u.useEffect(() => {
                    for (let t of S) !a.default.isFetching(t) && null == a.default.get(t) && (0, r.fetchSKU)(e, t)
                }, [e, S]);
                let f = (0, i.useStateFromStoresObject)([l.default], () => {
                    let t = {};
                    for (let n of S) {
                        var e;
                        t[n] = null !== (e = l.default.getPricesForSku(n)) && void 0 !== e ? e : void 0
                    }
                    return t
                }, [S]);
                return u.useEffect(() => {
                    for (let t of S) !l.default.isFetchingSKU(t) && (0, r.fetchPurchasePreview)(e, t, s, {
                        isGift: c
                    })
                }, [e, S, s, c]), {
                    hasFetchedSkus: E,
                    skusById: d,
                    skuPricePreviewsById: f
                }
            }
        },
        775325: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            }), n("222007");
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
            }), n("222007");
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
                    return d
                }
            });
            var u, i, r = n("884691"),
                l = n("446674"),
                a = n("862337"),
                o = n("850068"),
                s = n("619443"),
                c = n("85336"),
                S = n("758764");

            function E(t, e, n) {
                let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = arguments.length > 4 ? arguments[4] : void 0;
                r.useEffect(() => {
                    null != t && (1 === e && t !== c.Step.AWAITING_AUTHENTICATION ? n(c.Step.AWAITING_AUTHENTICATION) : t === c.Step.AWAITING_AUTHENTICATION && (2 === e ? n(c.Step.REVIEW) : 3 === e && (u ? null != i ? i() : n(c.Step.REVIEW) : n(c.Step.CONFIRM))))
                }, [t, e, n, u, i])
            }(u = i || (i = {}))[u.PENDING = 1] = "PENDING", u[u.ERROR = 2] = "ERROR", u[u.NONE = 3] = "NONE";

            function d(t) {
                let e = (0, l.useStateFromStores)([S.default], () => S.default.awaitingPaymentId),
                    n = (0, l.useStateFromStores)([s.default], () => s.default.isConnected()),
                    u = r.useRef(new a.Interval);
                r.useEffect(() => {
                    n || null == e || 1 !== t ? u.current.stop() : u.current.start(5e3, () => (0, o.fetchPayment)(e))
                }, [e, t, n])
            }
        },
        602960: function(t, e, n) {
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
        927078: function(t, e, n) {
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
            var u = n("913144"),
                i = n("775433"),
                r = n("739295");
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
        991254: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                LoadState: function() {
                    return u
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
                    return F
                },
                useUnseenEndedApplicationSubscriptionEntitlements: function() {
                    return h
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
            var u, i, r = n("884691"),
                l = n("446674"),
                a = n("316718"),
                o = n("598981"),
                s = n("299285"),
                c = n("305961"),
                S = n("957255"),
                E = n("10514"),
                d = n("521012"),
                f = n("437712"),
                _ = n("552712"),
                T = n("602960"),
                I = n("927078"),
                A = n("739295"),
                p = n("248933"),
                C = n("129408"),
                P = n("49111");
            (i = u || (u = {}))[i.NOT_LOADED = 0] = "NOT_LOADED", i[i.LOADING = 1] = "LOADING", i[i.LOADED = 2] = "LOADED", i[i.ERROR = 3] = "ERROR";
            let N = function(t, e) {
                    let {
                        refetchOnMount: n = !1
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u = (0, l.useStateFromStores)([p.default], () => null != t ? p.default.getSubscriptionGroupListingsForApplicationFetchState(t) : p.FetchState.FETCHED, [t]);
                    return r.useEffect(() => {
                        if (null == t || null == e) return;
                        let u = p.default.getSubscriptionGroupListingsForApplicationFetchState(t);
                        (n || u === p.FetchState.NOT_FETCHED) && (0, I.fetchAllSubscriptionListingsDataForApplication)(t, e)
                    }, [t, e, n]), {
                        listingsLoaded: u === p.FetchState.FETCHED
                    }
                },
                R = t => {
                    let {
                        guildId: e,
                        canFetch: n = !0,
                        forceRefetch: u = !1
                    } = t, i = (0, l.useStateFromStores)([p.default], () => null != e ? p.default.getEntitlementsForGuildFetchState(e) : null, [e]);
                    return r.useEffect(() => {
                        if (null == e || e === P.ME) return;
                        let t = p.default.getEntitlementsForGuildFetchState(e);
                        n && (t === p.FetchState.NOT_FETCHED || u) && (0, I.fetchEntitlementsForGuild)(e)
                    }, [e, n, u]), {
                        entitlementsLoaded: i === p.FetchState.FETCHED
                    }
                },
                U = t => {
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
                                entitlementType: P.EntitlementTypes.APPLICATION_SUBSCRIPTION
                            })
                        }
                    }, [e, n, o, u, i]), {
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
                        let u = [];
                        for (let t of n.subscription_listings_ids) {
                            let n = p.default.getSubscriptionListing(t);
                            if (null != n)(!n.soft_deleted || e.includeSoftDeleted) && u.push(n)
                        }
                        return u
                    }, [t, e.includeSoftDeleted])
                },
                M = [],
                O = [];

            function F(t, e) {
                let n = (0, l.useStateFromStores)([d.default], () => d.default.getSubscriptions()),
                    {
                        subscriptionGroupListing: u,
                        guildEntitlements: i,
                        userEntitlements: a
                    } = (0, l.useStateFromStoresObject)([p.default, f.default], () => {
                        var n, u;
                        return {
                            subscriptionGroupListing: null != t ? p.default.getSubscriptionGroupListingForApplication(t) : null,
                            guildEntitlements: null != t && null != e ? p.default.getApplicationEntitlementsForGuild(t, e) : M,
                            userEntitlements: null != t && null !== (u = null === (n = f.default.getForApplication(t)) || void 0 === n ? void 0 : n.values()) && void 0 !== u ? u : O
                        }
                    }, [t, e]),
                    o = r.useMemo(() => [...i, ...a], [i, a]),
                    s = null == u ? void 0 : u.subscription_listings,
                    {
                        activeSubscriptionListing: c,
                        activeEntitlement: S
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
                    E = r.useMemo(() => {
                        if (null == n) return null;
                        let t = null == c ? void 0 : c.subscription_plans[0].id;
                        for (let e of Object.values(n))
                            if (e.type === P.SubscriptionTypes.APPLICATION) {
                                let n = e.items[0].planId;
                                if (n === t) return e
                            } return null
                    }, [c, n]);
                return {
                    activeSubscription: E,
                    activeSubscriptionListing: c,
                    activeEntitlement: S,
                    subscriptionGroupListing: u
                }
            }

            function h(t) {
                var e;
                let n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : P.EMPTY_STRING_SNOWFLAKE_ID,
                    u = (0, l.useStateFromStores)([S.default], () => S.default.can(P.Permissions.ADMINISTRATOR, t)),
                    {
                        entitlementsLoaded: i
                    } = R({
                        guildId: n,
                        canFetch: u
                    }),
                    a = (0, l.useStateFromStores)([T.default], () => T.default.getLastGuildDismissedTime(n)),
                    o = (0, l.useStateFromStoresArray)([p.default], () => {
                        let t = p.default.getEntitlementsForGuild(n),
                            e = p.default.getEntitlementsForGuild(n, !1),
                            u = t.map(t => t.applicationId);
                        return e.filter(t => !u.includes(t.applicationId))
                    }),
                    s = (0, l.useStateFromStoresObject)([_.default], () => _.default.getSKUs()),
                    c = r.useMemo(() => o.filter(t => {
                        let e = s[t.skuId];
                        return null != e && e.available
                    }), [o, s]);
                return i ? c.filter(t => null != t.endsAt && t.endsAt.getTime() > Math.max(null != a ? a : 0, Date.now() - 2592e6)) : []
            }
            let m = t => {
                    let [e, n] = r.useState(!1), u = r.useMemo(() => t.map(C.getApplicationSubscriptionPlanId), [t]), i = (0, l.useStateFromStoresArray)([E.default], () => u.filter(t => null == E.default.get(t)), [u]);
                    return r.useEffect(() => {
                        i.length > 0 && (n(!0), Promise.all(i.map(t => (0, I.fetchSubscriptionListingForPlan)(t))).catch(() => {}).then(() => {
                            n(!1)
                        }))
                    }, [i]), {
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
                        u = null != n;
                    return r.useEffect(() => {
                        !u && null != t && e && (0, A.fetchApplication)(t)
                    }, [u, t, e]), n
                };

            function G(t) {
                let {
                    applicationId: e,
                    groupListingId: n,
                    guildId: u
                } = t, i = (0, o.default)(), {
                    listingsLoaded: r
                } = N(e, n), {
                    entitlementsLoaded: l
                } = R({
                    guildId: u
                }), {
                    entitlementsLoaded: a
                } = U({
                    applicationId: e,
                    loggedIn: i
                }), {
                    subscriptionGroupListing: s
                } = F(e, u);
                return {
                    applicationSubscriptionListingsShown: null != e && null != n && (null == u || l) && (!i || a) && r && null != s && (0, C.hasPayableSubscriptionPlan)(s)
                }
            }

            function D(t, e) {
                let n = (0, l.useStateFromStores)([c.default], () => c.default.isLoaded()),
                    [u, i] = r.useState([]);
                return r.useEffect(() => {
                    null == e && null != t && n && (0, A.fetchEligibleApplicationSubscriptionGuilds)(t).then(t => {
                        let e = t.map(t => c.default.getGuild(t)).filter(t => null != t);
                        i(e)
                    })
                }, [t, e, n]), u
            }
        },
        739295: function(t, e, n) {
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
                    return S
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
            async function S(t) {
                let e = await u.default.get({
                    url: l.Endpoints.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
                    query: {
                        application_id: t
                    }
                });
                return e.body
            }
        },
        248933: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FetchState: function() {
                    return u
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var u, i, r = n("627445"),
                l = n.n(r),
                a = n("446674"),
                o = n("407846"),
                s = n("913144"),
                c = n("984273"),
                S = n("552712");

            function E(t) {
                return "subscription_listing:".concat(t)
            }

            function d(t) {
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
            }(i = u || (u = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let I = new o.default(t => [d(t.application_id), ...t.subscription_listings_ids.map(E)], t => t.id),
                A = new o.default(t => [d(t.application_id), f(t.subscription_plans[0].id)], t => t.id),
                p = new o.default(t => [_(t.applicationId, t.isValid(null, S.default), t.guildId), T(t.isValid(null, S.default), t.guildId)], t => t.id),
                C = {},
                P = {};

            function N(t) {
                let e = I.values(d(t));
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
                    let e = I.values(E(t));
                    return l(e.length <= 1, "Found multiple group listings for listing"), e[0]
                }
                getSubscriptionListing(t) {
                    return A.get(t)
                }
                getSubscriptionListingsForApplication(t) {
                    return A.values(d(t))
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
        129408: function(t, e, n) {
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
                    return S
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
                return null === (e = t.subscription_listings) || void 0 === e ? void 0 : e.find(t => t.published && (c(t.sku_flags) || S(t.sku_flags)) && t.subscription_plans[0].price > 0)
            }

            function c(t) {
                return (0, r.hasFlag)(t, l.SKUFlags.APPLICATION_GUILD_SUBSCRIPTION)
            }

            function S(t) {
                return (0, r.hasFlag)(t, l.SKUFlags.APPLICATION_USER_SUBSCRIPTION)
            }

            function E(t, e, n) {
                return t.subscription_plans[0].sku_id === e.skuId && (c(t.sku_flags) ? null != n && e.guildId === n && n !== l.ME : !!S(t.sku_flags) && null == e.guildId)
            }
        },
        926223: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return m
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
                S = null,
                E = "",
                d = "",
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
                s = null, l = "", a = null, o = "", c = !1, S = null, E = "US", d = "", f = "", _ = "", T = "", I = "", A = "", p = "", C = !1, P = null, N = null, R = null, U = null
            }

            function M(t) {
                d = t.name, E = t.country, _ = t.line1, T = t.line2, I = t.city, A = t.postalCode, p = t.state, f = t.email
            }

            function O() {
                P = null
            }

            function F(t) {
                let {
                    error: e
                } = t;
                P = e
            }
            class h extends u.default.Store {
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
                    return S
                }
                get redirectedPaymentSourceId() {
                    return U
                }
                getCreditCardInfo() {
                    return {
                        name: d
                    }
                }
                get isCardInfoValid() {
                    return c
                }
                getBillingAddressInfo() {
                    return {
                        name: d,
                        email: f,
                        country: E,
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
            h.displayName = "NewPaymentSourceStore";
            var m = new h(i.default, {
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
                    d = e.name, c = n
                },
                NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function(t) {
                    let {
                        info: e,
                        isValid: n
                    } = t;
                    null != e.name && "" !== e.name && (d = e.name), E = e.country, d = e.name, _ = e.line1, T = e.line2, I = e.city, A = e.postalCode, p = e.state, f = e.email, C = n
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
                    l = e, a = n, M(u), C = E.length > 0
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
                    S = e
                },
                BILLING_PAYMENT_SOURCE_CREATE_START: O,
                MODAL_POP: O,
                NEW_PAYMENT_SOURCE_CLEAR_ERROR: O,
                BILLING_PAYMENT_SOURCE_CREATE_FAIL: F,
                STRIPE_TOKEN_FAILURE: F,
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
            var u = n("446674"),
                i = n("913144"),
                r = n("596523"),
                l = n("465527"),
                a = n("736978"),
                o = n("745279"),
                s = n("520713"),
                c = n("49111"),
                S = n("782340");
            let E = !1,
                d = null,
                f = null;

            function _() {
                E = !1, f = null
            }

            function T(t) {
                let {
                    error: e
                } = t, {
                    code: n,
                    paymentId: u
                } = e;
                if (n !== a.default.ErrorCodes.AUTHENTICATION_REQUIRED) return E = !1, !1;
                !E && (E = !0, d = u, I(u))
            }
            async function I(t) {
                if (null == t) return;
                let {
                    error: e
                } = await (0, s.authenticatePaymentIntentForPaymentId)(t);
                if (null != e) {
                    i.default.dispatch({
                        type: "PAYMENT_AUTHENTICATION_ERROR",
                        error: new a.default(S.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR)
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
                if (!E || e.id !== d || ![c.PaymentStatusTypes.COMPLETED, c.PaymentStatusTypes.CANCELED].includes(e.status)) return !1;
                E = !1, f = null, d = null, i.default.wait(r.clearError), i.default.wait(l.clearPurchaseError)
            }
            class p extends u.default.Store {
                get isAwaitingAuthentication() {
                    return E
                }
                get error() {
                    return f
                }
                get awaitingPaymentId() {
                    return d
                }
            }
            p.displayName = "PaymentAuthenticationStore";
            var C = new p(i.default, {
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
                    f = e, E = !1
                },
                PAYMENT_UPDATE: A,
                BILLING_PAYMENT_FETCH_SUCCESS: A
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
            let s = 0,
                c = null,
                S = null;

            function E(t) {
                let {
                    error: e
                } = t, n = e instanceof a.default ? e : new a.default(e);
                o.default.isConnected() && n.code === a.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (s = 1)
            }

            function d() {
                s = 0, c = null, S = null
            }
            class f extends r.default.Store {
                get purchaseTokenAuthState() {
                    return s
                }
                get purchaseTokenHash() {
                    return c
                }
                get expiresAt() {
                    return S
                }
            }
            f.displayName = "PurchaseTokenAuthStore";
            var _ = new f(l.default, {
                SKU_PURCHASE_FAIL: E,
                PREMIUM_PAYMENT_SUBSCRIBE_FAIL: E,
                USER_PAYMENT_CLIENT_ADD: function(t) {
                    s = 2, c = t.purchaseTokenHash, S = t.expiresAt
                },
                BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: d,
                BILLING_SUBSCRIPTION_UPDATE_START: d,
                PAYMENT_AUTHENTICATION_CLEAR_ERROR: d,
                PREMIUM_PAYMENT_ERROR_CLEAR: d,
                PREMIUM_PAYMENT_MODAL_CLOSE: d,
                PREMIUM_PAYMENT_MODAL_OPEN: d,
                PREMIUM_PAYMENT_SUBSCRIBE_START: d,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: d,
                PREMIUM_PAYMENT_UPDATE_SUCCESS: d,
                SKU_PURCHASE_MODAL_CLOSE: d,
                SKU_PURCHASE_MODAL_OPEN: d,
                SKU_PURCHASE_START: d,
                SKU_PURCHASE_SUCCESS: d
            })
        },
        437712: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return U
                }
            }), n("222007");
            var u = n("917351"),
                i = n.n(u),
                r = n("446674"),
                l = n("913144"),
                a = n("984273"),
                o = n("686470"),
                s = n("964889"),
                c = n("552712");
            let S = {},
                E = {},
                d = {},
                f = {},
                _ = !1,
                T = !1,
                I = new Set,
                A = new Set,
                p = {};

            function C(t) {
                S[t.id] = a.default.createFromServer(t), null == d[t.sku_id] && (d[t.sku_id] = new Set), null == f[t.application_id] && (f[t.application_id] = new Set), null != t.subscription_id && (null == p[t.subscription_id] && (p[t.subscription_id] = new Set), p[t.subscription_id].add(t.id)), f[t.application_id].add(t.id), d[t.sku_id].add(t.id)
            }

            function P(t) {
                E[t.id] = a.default.createFromServer(t)
            }

            function N(t) {
                return C(t.entitlement)
            }
            class R extends r.default.Store {
                initialize() {
                    this.syncWith([o.default], () => !0)
                }
                get(t) {
                    return S[t]
                }
                getGiftable() {
                    return i.values(E)
                }
                getForApplication(t) {
                    let e = f[t];
                    if (null == e) return null;
                    let n = new Set;
                    for (let t of e) n.add(S[t]);
                    return n
                }
                getForSku(t) {
                    let e = d[t];
                    if (null == e) return null;
                    let n = new Set;
                    for (let t of e) n.add(S[t]);
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
                    for (let t of e) n.add(S[t]);
                    return n
                }
                isEntitledToSku(t, e, n) {
                    let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        i = d[e];
                    if (null != i)
                        for (let e of i) {
                            let n = S[e];
                            if (null != n && n.isValid(t, c.default, u)) return !0
                        }
                    if (A.has(n)) return !1;
                    let r = null != u ? o.default.getLibraryApplication(n, u) : o.default.getActiveLibraryApplication(n);
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
                    E = {}, e.forEach(P)
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
                        delete S[t.id];
                        let e = f[t.application_id];
                        null != e && e.delete(t.id);
                        let n = d[t.sku_id];
                        if (null != n && n.delete(t.id), null != t.subscription_id) {
                            let e = p[t.subscription_id];
                            null != e && e.delete(t.id)
                        }
                    }(t.entitlement)
                },
                LOGOUT: function() {
                    S = {}, d = {}, f = {}, _ = !1, T = !1, I = new Set, A = new Set
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
            let u, i;
            n.r(e), n.d(e, {
                NO_PAYMENT_SOURCE: function() {
                    return o
                },
                default: function() {
                    return M
                }
            }), n("222007");
            var r = n("446674"),
                l = n("913144"),
                a = n("49111");
            let o = "no_payment_source",
                s = null,
                c = null,
                S = null,
                E = null,
                d = null,
                f = {},
                _ = null,
                T = !1,
                I = null,
                A = !1,
                p = !1,
                C = !1,
                P = !1,
                N = null,
                R = new Set;

            function U(t) {
                null != u && null != _ ? u(_) : null != i && i(t), u = null, i = null
            }
            class L extends r.default.Store {
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
                    return S
                }
                get analyticsLocation() {
                    return E
                }
                get promotionId() {
                    return d
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
                isFetchingSKU(t) {
                    return R.has(t)
                }
            }
            L.displayName = "SKUPaymentModalStore";
            var M = new L(l.default, {
                SKU_PURCHASE_MODAL_OPEN: function(t) {
                    U(), s = t.skuId, S = t.applicationId, p = t.isIAP, E = t.analyticsLocation, N = t.context, P = t.isGift, C = !0, A = !1, u = t.resolve, i = t.reject, I = null, _ = null, d = t.promotionId
                },
                SKU_PURCHASE_MODAL_CLOSE: function(t) {
                    let {
                        error: e
                    } = t;
                    C = !1, N = null, U(e)
                },
                SKU_PURCHASE_PREVIEW_FETCH: function(t) {
                    let {
                        skuId: e
                    } = t;
                    R.add(e)
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
                    }, R.delete(e)
                },
                SKU_PURCHASE_PREVIEW_FETCH_FAILURE: function(t) {
                    let {
                        skuId: e
                    } = t;
                    R.delete(e)
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
                    C = !1, N = null, U()
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
            }), n("70102");
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
                    return d
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
            var u = n("884691"),
                i = n("627445"),
                r = n.n(i),
                l = n("913144"),
                a = n("775433"),
                o = n("308592"),
                s = n("10514"),
                c = n("719923"),
                S = n("49111"),
                E = n("646718");

            function d(t) {
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
                        purchaseType: n ? S.PriceSetAssignmentPurchaseTypes.GIFT : S.PriceSetAssignmentPurchaseTypes.DEFAULT
                    };
                return r(u = "string" == typeof t ? s.default.get(t) : t, "subscription plan not loaded"), null != e && s.default.hasPaymentSourceForSKUId(e, u.skuId) && (a.paymentSourceId = e), (i = (l = (0, c.experimentalGetPrices)(u.id, a)).map(t => t.currency)).length < 1 && (i = [S.CurrencyCodes.USD]), i
            }

            function _(t, e, n) {
                let u = s.default.get(t);
                r(null != u, "plan is undefined");
                let i = f(u, n, !1);
                return i.includes(e)
            }

            function T(t, e, n, i, r) {
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
                        await d(n, r);
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
                let S = l.paymentSourceId !== n || null == e || !c || !0 !== l.loaded;
                return {
                    hasFetchedSubscriptionPlans: c,
                    priceOptions: l,
                    setCurrency: t => {
                        a({
                            currency: t
                        })
                    },
                    currencyLoading: S
                }
            }
        },
        976979: function(t, e, n) {
            "use strict";
            var u, i;
            n.r(e), n.d(e, {
                CountryCodes: function() {
                    return u
                },
                CountryCodesSets: function() {
                    return r
                }
            }), n("222007"), (i = u || (u = {})).AD = "AD", i.AE = "AE", i.AF = "AF", i.AG = "AG", i.AI = "AI", i.AL = "AL", i.AM = "AM", i.AO = "AO", i.AQ = "AQ", i.AR = "AR", i.AS = "AS", i.AT = "AT", i.AU = "AU", i.AW = "AW", i.AX = "AX", i.AZ = "AZ", i.BA = "BA", i.BB = "BB", i.BD = "BD", i.BE = "BE", i.BF = "BF", i.BG = "BG", i.BH = "BH", i.BI = "BI", i.BJ = "BJ", i.BL = "BL", i.BM = "BM", i.BN = "BN", i.BO = "BO", i.BQ = "BQ", i.BR = "BR", i.BS = "BS", i.BT = "BT", i.BV = "BV", i.BW = "BW", i.BY = "BY", i.BZ = "BZ", i.CA = "CA", i.CC = "CC", i.CD = "CD", i.CF = "CF", i.CG = "CG", i.CH = "CH", i.CI = "CI", i.CK = "CK", i.CL = "CL", i.CM = "CM", i.CN = "CN", i.CO = "CO", i.CR = "CR", i.CU = "CU", i.CV = "CV", i.CW = "CW", i.CX = "CX", i.CY = "CY", i.CZ = "CZ", i.DE = "DE", i.DJ = "DJ", i.DK = "DK", i.DM = "DM", i.DO = "DO", i.DZ = "DZ", i.EC = "EC", i.EE = "EE", i.EG = "EG", i.EH = "EH", i.ER = "ER", i.ES = "ES", i.ET = "ET", i.FI = "FI", i.FJ = "FJ", i.FK = "FK", i.FM = "FM", i.FO = "FO", i.FR = "FR", i.GA = "GA", i.GB = "GB", i.GD = "GD", i.GE = "GE", i.GF = "GF", i.GG = "GG", i.GH = "GH", i.GI = "GI", i.GL = "GL", i.GM = "GM", i.GN = "GN", i.GP = "GP", i.GQ = "GQ", i.GR = "GR", i.GS = "GS", i.GT = "GT", i.GU = "GU", i.GW = "GW", i.GY = "GY", i.HK = "HK", i.HM = "HM", i.HN = "HN", i.HR = "HR", i.HT = "HT", i.HU = "HU", i.ID = "ID", i.IE = "IE", i.IL = "IL", i.IM = "IM", i.IN = "IN", i.IO = "IO", i.IQ = "IQ", i.IR = "IR", i.IS = "IS", i.IT = "IT", i.JE = "JE", i.JM = "JM", i.JO = "JO", i.JP = "JP", i.KE = "KE", i.KG = "KG", i.KH = "KH", i.KI = "KI", i.KM = "KM", i.KN = "KN", i.KP = "KP", i.KR = "KR", i.KW = "KW", i.KY = "KY", i.KZ = "KZ", i.LA = "LA", i.LB = "LB", i.LC = "LC", i.LI = "LI", i.LK = "LK", i.LR = "LR", i.LS = "LS", i.LT = "LT", i.LU = "LU", i.LV = "LV", i.LY = "LY", i.MA = "MA", i.MC = "MC", i.MD = "MD", i.ME = "ME", i.MF = "MF", i.MG = "MG", i.MH = "MH", i.MK = "MK", i.ML = "ML", i.MM = "MM", i.MN = "MN", i.MO = "MO", i.MP = "MP", i.MQ = "MQ", i.MR = "MR", i.MS = "MS", i.MT = "MT", i.MU = "MU", i.MV = "MV", i.MW = "MW", i.MX = "MX", i.MY = "MY", i.MZ = "MZ", i.NA = "NA", i.NC = "NC", i.NE = "NE", i.NF = "NF", i.NG = "NG", i.NI = "NI", i.NL = "NL", i.NO = "NO", i.NP = "NP", i.NR = "NR", i.NU = "NU", i.NZ = "NZ", i.OM = "OM", i.PA = "PA", i.PE = "PE", i.PF = "PF", i.PG = "PG", i.PH = "PH", i.PK = "PK", i.PL = "PL", i.PM = "PM", i.PN = "PN", i.PR = "PR", i.PS = "PS", i.PT = "PT", i.PW = "PW", i.PY = "PY", i.QA = "QA", i.RE = "RE", i.RO = "RO", i.RS = "RS", i.RU = "RU", i.RW = "RW", i.SA = "SA", i.SB = "SB", i.SC = "SC", i.SD = "SD", i.SE = "SE", i.SG = "SG", i.SH = "SH", i.SI = "SI", i.SJ = "SJ", i.SK = "SK", i.SL = "SL", i.SM = "SM", i.SN = "SN", i.SO = "SO", i.SR = "SR", i.SS = "SS", i.ST = "ST", i.SV = "SV", i.SX = "SX", i.SY = "SY", i.SZ = "SZ", i.TC = "TC", i.TD = "TD", i.TF = "TF", i.TG = "TG", i.TH = "TH", i.TJ = "TJ", i.TK = "TK", i.TL = "TL", i.TM = "TM", i.TN = "TN", i.TO = "TO", i.TR = "TR", i.TT = "TT", i.TV = "TV", i.TW = "TW", i.TZ = "TZ", i.UA = "UA", i.UG = "UG", i.UM = "UM", i.US = "US", i.UY = "UY", i.UZ = "UZ", i.VA = "VA", i.VC = "VC", i.VE = "VE", i.VG = "VG", i.VI = "VI", i.VN = "VN", i.VU = "VU", i.WF = "WF", i.WS = "WS", i.YE = "YE", i.YT = "YT", i.ZA = "ZA", i.ZM = "ZM", i.ZW = "ZW", i.XK = "XK", i.AC = "AC", i.AN = "AN", i.DG = "DG", i.EL = "EL", i.IC = "IC", i.MI = "MI", i.TP = "TP", i.WK = "WK";
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
                NITRO_TAX_EXCLUSIVE_EXPERIMENT_STATES: new Set(["TN", "WI"]),
                NITRO_TAX_EXCLUSIVE_PHASE_1_STATES: new Set(["IL", "NC", "NY", "OH", "PA", "TX", "VA", "WA"]),
                NITRO_TAX_EXCLUSIVE_PHASE_2_STATES: new Set(["AL", "AR", "AZ", "CO", "CT", "DC", "HI", "IA", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "ND", "NE", "NH", "NJ", "NM", "OK", "RI", "SC", "SD", "UT", "VT", "WV", "WY"])
            }
        }
    }
]);
//# sourceMappingURL=23777.02824c33c8e6fc9f483f.js.map