(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26627"], {
        286021: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchGiftableEntitlements: function() {
                    return s
                },
                fetchUserEntitlements: function() {
                    return o
                },
                fetchUserEntitlementsForApplication: function() {
                    return a
                }
            });
            var i = n("454836"),
                u = n("312916"),
                r = n("413775"),
                l = n("467006");

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
        862212: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                changePaymentSource: function() {
                    return E
                },
                changeSubscriptionCurrency: function() {
                    return S
                },
                clearError: function() {
                    return d
                },
                resubscribe: function() {
                    return c
                },
                subscribe: function() {
                    return s
                }
            });
            var i = n("512722"),
                u = n.n(i),
                r = n("312916"),
                l = n("488867"),
                a = n("242677"),
                o = n("467006");
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
            async function c(t, e, n, i, s, c) {
                try {
                    let S = (0, l.getPremiumPlanItem)(t);
                    u()(S, "Expected existing premium plan");
                    let E = (0, l.getItemsWithUpsertedPremiumPlanId)(t, S.planId);
                    await a.updateSubscription(t, {
                        status: o.SubscriptionStatusTypes.ACTIVE,
                        paymentSource: i,
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
            async function S(t, e, n, i) {
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
            async function E(t, e, n, i, u) {
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

            function d() {
                r.default.dispatch({
                    type: "PREMIUM_PAYMENT_ERROR_CLEAR"
                })
            }
        },
        836394: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearPurchaseError: function() {
                    return U
                },
                fetchPurchasePreview: function() {
                    return p
                },
                fetchSKU: function() {
                    return I
                },
                fetchTestSKUsForApplication: function() {
                    return A
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
                showPurchaseConfirmationStep: function() {
                    return L
                },
                updateSKUPaymentIsGift: function() {
                    return M
                }
            });
            var i = n("454836"),
                u = n("312916"),
                r = n("253842"),
                l = n("479852"),
                a = n("421752"),
                o = n("123576"),
                s = n("474997"),
                c = n("243084"),
                S = n("743102"),
                E = n("370275"),
                d = n("28692"),
                f = n("413775"),
                _ = n("242677"),
                T = n("467006");
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
                        }), new a.default(`Failed to fetch SKU ${e}`)
                    }
                }
            }
            async function A(t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (!(c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t)) && e) throw Error("this should only be used in test mode");
                let n = (await (0, f.httpGetWithCountryCodeQuery)(T.Endpoints.APPLICATION_SKUS(t))).body;
                return u.default.dispatch({
                    type: "SKUS_FETCH_SUCCESS",
                    skus: n
                }), n
            }
            async function p(t, e, n, i) {
                let r;
                let l = {
                    payment_source_id: n,
                    gift: i?.isGift
                };
                (c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t)) && (l.test_mode = !0), u.default.dispatch({
                    type: "SKU_PURCHASE_PREVIEW_FETCH",
                    skuId: e
                });
                try {
                    r = await (0, f.httpGetWithCountryCodeQuery)({
                        url: T.Endpoints.STORE_SKU_PURCHASE(e),
                        query: l,
                        oldFormErrors: !0
                    }), u.default.dispatch({
                        type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                        skuId: e,
                        paymentSourceId: n,
                        price: r.body
                    })
                } catch (t) {
                    u.default.dispatch({
                        type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
                        skuId: e
                    })
                }
                return r
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
                        gateway_checkout_context: await (0, S.createGatewayCheckoutContext)(a),
                        load_id: N
                    };
                    if (O) t.test_mode = !0;
                    else {
                        if (null != a && (t.payment_source_id = a.id, t.payment_source_token = await (0, _.createPaymentSourceToken)(a), T.ADYEN_PAYMENT_SOURCES.has(a.type))) {
                            let e = await (0, _.popupBridgeState)(a.type);
                            t.return_url = i.default.getAPIBaseURL() + T.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(a.type, e ?? "", "success")
                        }
                        null != s && (t.expected_amount = s), null != f && (t.expected_currency = f), null != p && (t.gift_style = p), null != R && (t.recipient_id = R), null != R && (t.custom_message = U, (L?.id != null || L?.surrogates != null || M?.soundId != null) && (t.gift_info_options = {
                            emoji_id: L?.id,
                            emoji_name: L?.surrogates,
                            sound_id: M?.soundId
                        })), t.purchase_token = (0, d.getPurchaseToken)()
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
                        libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(E.isNotNullish) : [],
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
                        purchase_token: (0, d.getPurchaseToken)()
                    };
                    return {
                        ...(await i.default.post({
                            url: T.Endpoints.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                            body: t,
                            oldFormErrors: !0
                        })).body
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
        825127: function(t, e, n) {
            "use strict";

            function i(t) {
                if (null != t) {
                    if ("activitySessionId" in t) return t.activitySessionId;
                    if ("instanceId" in t) return t.instanceId;
                    if ("activity_id" in t) return t.activity_id
                }
            }
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            })
        },
        303257: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("203959"),
                u = n("262047");

            function r() {
                return (0, i.default)([u.default], () => u.default.isAuthenticated())
            }
        },
        471154: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                },
                useBlockedPaymentsConfig: function() {
                    return a
                }
            });
            var i = n("516086"),
                u = n("436618");
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
        432158: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getSubscriptionPlansLoaded: function() {
                    return S
                },
                useSubscriptionPlansLoaded: function() {
                    return c
                }
            });
            var i = n("661223"),
                u = n("841869"),
                r = n("381965"),
                l = n("643847"),
                a = n("416573"),
                o = n("171168");
            new u.default("useSubscriptionPlansLoaded");
            let s = t => {};

            function c() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS];
                return (0, i.useStateFromStores)([r.default, l.default, a.default], () => S(t, [r.default, l.default, a.default]), [t])
            }

            function S() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
                    [e, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, l.default, a.default],
                    u = e.paymentSourceIds,
                    c = e.defaultPaymentSourceId,
                    S = n.isLoadedForSKUs(t),
                    E = i.getPremiumTypeSubscription()?.paymentSourceId;
                if (null != E && !n.hasPaymentSourceForSKUIds(E, t)) return s(`subscription payment source ${E} not loaded for ${t}`), !1;
                if (null != c && !n.hasPaymentSourceForSKUIds(c, t)) return s(`default payment source ${c} not loaded for ${t}`), !1;
                for (let e of u)
                    if (!n.hasPaymentSourceForSKUIds(e, t)) return s(`payment source ${e} not loaded for ${t}`), !1;
                return s(`isLoadedForSKUs ${S}`), S
            }
        },
        213464: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("470079"),
                u = n("661223"),
                r = n("643847");

            function l() {
                let [t, e] = i.useState(void 0), [n, l] = i.useState(void 0);
                return {
                    selectedSkuId: t,
                    selectedPlan: (0, u.useStateFromStores)([r.default], () => null != n ? r.default.get(n) : null),
                    setSelectedSkuId: e,
                    setSelectedPlanId: l
                }
            }
        },
        975731: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PaymentContext: function() {
                    return G
                },
                PaymentContextProvider: function() {
                    return H
                },
                useForwardedPaymentContext: function() {
                    return B
                },
                usePaymentContext: function() {
                    return D
                }
            }), n("789020");
            var i = n("735250"),
                u = n("470079"),
                r = n("452079"),
                l = n("207561"),
                a = n("153832"),
                o = n("661223"),
                s = n("134223"),
                c = n("825127"),
                S = n("471154"),
                E = n("311063"),
                d = n("806037"),
                f = n("948985"),
                _ = n("54903"),
                T = n("984362"),
                I = n("488867"),
                A = n("281925"),
                p = n("213464"),
                C = n("354627"),
                P = n("594180"),
                N = n("675796"),
                R = n("325789"),
                U = n("847160"),
                L = n("874254"),
                M = n("116069"),
                O = n("884483"),
                F = n("551414"),
                h = n("134411"),
                m = n("33910"),
                y = n("467006"),
                g = n("171168");
            let [G, D, B] = (0, _.default)();

            function H(t) {
                let {
                    loadId: e,
                    activeSubscription: n,
                    stepConfigs: _,
                    breadcrumbs: D = [],
                    skuIDs: B,
                    isGift: H = !1,
                    children: K,
                    defaultPlanId: b,
                    purchaseType: w = y.PurchaseTypes.SUBSCRIPTION,
                    applicationId: v,
                    referralCode: Y
                } = t, W = (0, h.default)(), V = (0, S.useBlockedPaymentsConfig)(), k = (0, P.default)(), {
                    paymentSources: Z,
                    hasPaymentSources: x,
                    paymentSourceId: J,
                    setPaymentSourceId: Q,
                    hasFetchedPaymentSources: X
                } = (0, N.default)({
                    isGift: H,
                    activeSubscription: n
                }), $ = u.useRef(x), {
                    hasFetchedSubscriptionPlans: j,
                    priceOptions: q,
                    setCurrency: z,
                    currencyLoading: tt,
                    currencies: te
                } = (0, C.default)({
                    activeSubscription: n,
                    skuIDs: B,
                    paymentSourceId: J,
                    isGift: H
                }), tn = (0, M.default)(), [ti, tu] = u.useState(!1), {
                    step: tr,
                    setStep: tl,
                    steps: ta,
                    breadcrumbsData: to
                } = (0, F.default)({
                    stepConfigs: _,
                    breadcrumbs: D
                }), [ts, tc] = (0, L.default)(tr), {
                    paymentError: tS,
                    paymentAuthenticationState: tE
                } = (0, R.default)(), {
                    purchaseError: td,
                    purchaseErrorBlockRef: tf,
                    setPurchaseError: t_
                } = (0, U.default)(), tT = (0, l.useLazyValue)(() => {
                    let t = e ?? (0, a.v4)();
                    return A.default.addBreadcrumb({
                        message: `Checkout session ID: ${t}`
                    }), {
                        loadId: t,
                        startTime: Date.now()
                    }
                }), {
                    selectedSkuId: tI,
                    selectedPlan: tA,
                    setSelectedSkuId: tp,
                    setSelectedPlanId: tC
                } = (0, p.default)(), [tP, tN] = (0, o.useStateFromStoresArray)([d.default], () => [d.default.purchaseTokenAuthState, d.default.purchaseTokenHash]), [tR, tU] = (0, o.useStateFromStoresArray)([m.default], () => [m.default.browserCheckoutState, m.default.loadId]), [tL, tM] = u.useState(null), [tO, tF] = u.useState(null), [th, tm] = u.useState(null), [ty, tg] = u.useState(null), [tG, tD] = u.useState(null), [tB, tH] = u.useState(void 0), [tK, tb] = u.useState([]), tw = u.useMemo(() => null == tA || (0, I.isPremiumSubscriptionPlan)(tA.id), [tA]), tv = u.useRef(null != n ? n.planId : null);
                u.useEffect(() => {
                    null == tv.current && null != n && (tv.current = n.planId)
                }, [n]);
                let {
                    skusById: tY,
                    hasFetchedSkus: tW,
                    skuPricePreviewsById: tV
                } = (0, O.default)({
                    applicationId: v ?? g.PREMIUM_SUBSCRIPTION_APPLICATION,
                    skuIDs: B,
                    currentPaymentSourceId: J,
                    isGift: H
                }), tk = u.useMemo(() => {
                    if (null == tI) return null;
                    let t = tV[tI];
                    return null == t ? null : t[J ?? f.NO_PAYMENT_SOURCE]
                }, [tI, tV, J]), tZ = (0, E.useApplication)(v), tx = (0, T.hasFlag)(tZ?.flags ?? 0, y.ApplicationFlags.EMBEDDED) && (0, T.hasFlag)(tZ?.flags ?? 0, y.ApplicationFlags.EMBEDDED_IAP), tJ = (0, o.useStateFromStores)([s.default], () => Array.from(s.default.getSelfEmbeddedActivities().values()).find(t => {
                    let {
                        applicationId: e
                    } = t;
                    return e === v
                })), tQ = (0, c.default)(tJ), tX = tY[tI ?? ""];
                return (0, i.jsx)(G.Provider, {
                    value: {
                        stripe: W,
                        contextMetadata: tT,
                        blockedPayments: V,
                        activeSubscription: n,
                        hasFetchedSubscriptions: k,
                        hasFetchedSubscriptionPlans: j,
                        updatedSubscription: ty,
                        setUpdatedSubscription: tg,
                        subscriptionMetadataRequest: tG,
                        setSubscriptionMetadataRequest: tD,
                        hasFetchedPaymentSources: X,
                        paymentSources: Z,
                        hasPaymentSources: x,
                        paymentSourceId: J,
                        setPaymentSourceId: Q,
                        priceOptions: q,
                        setCurrency: z,
                        currencyLoading: tt,
                        currencies: te,
                        ...tn,
                        hasAcceptedTerms: ti,
                        setHasAcceptedTerms: tu,
                        step: tr,
                        setStep: tl,
                        steps: ta,
                        stepConfigs: _,
                        breadcrumbs: to,
                        purchaseState: ts,
                        setPurchaseState: tc,
                        paymentAuthenticationState: tE,
                        paymentError: tS,
                        purchaseError: td,
                        setPurchaseError: t_,
                        purchaseErrorBlockRef: tf,
                        purchaseTokenAuthState: tP,
                        purchaseTokenHash: tN,
                        browserCheckoutState: tR,
                        browserCheckoutStateLoadId: tU,
                        bodyNode: tL,
                        setBodyNode: tM,
                        footerNode: tO,
                        setFooterNode: tF,
                        modalOverlayNode: th,
                        setModalOverlayNode: tm,
                        selectedSkuId: tI,
                        selectedPlan: tA,
                        setSelectedSkuId: tp,
                        setSelectedPlanId: tC,
                        readySlideId: tB,
                        setReadySlideId: tH,
                        defaultPlanId: b,
                        isPremium: tw,
                        productLine: tX?.productLine,
                        startedPaymentFlowWithPaymentSourcesRef: $,
                        startingPremiumSubscriptionPlanIdRef: tv,
                        hasFetchedSkus: tW,
                        skusById: tY,
                        skuPricePreviewsById: tV,
                        selectedSkuPricePreview: tk,
                        application: tZ,
                        purchaseType: w,
                        isEmbeddedIAP: tx,
                        activitySessionId: tQ,
                        entitlementsGranted: tK,
                        setEntitlementsGranted: tb,
                        referralCode: Y
                    },
                    children: (0, i.jsx)(r.Elements, {
                        options: y.StripeElementsOptions,
                        stripe: W,
                        children: K
                    })
                })
            }
        },
        240971: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                COLLAPSED_PAYMENT_BREADCRUMB_STEPS: function() {
                    return E
                },
                Step: function() {
                    return u
                },
                errorToStep: function() {
                    return f
                },
                getLabelForStep: function() {
                    return d
                },
                usePurchaseStateForStep: function() {
                    return _
                }
            });
            var i, u, r = n("470079"),
                l = n("253842"),
                a = n("841869"),
                o = n("743102"),
                s = n("579766"),
                c = n("30175");
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
                throw Error(`Unexpected step: ${t}`)
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
        579766: function(t, e, n) {
            "use strict";
            var i, u;
            n.r(e), n.d(e, {
                PurchaseState: function() {
                    return i
                }
            }), (u = i || (i = {})).WAITING = "WAITING", u.PURCHASING = "PURCHASING", u.FAIL = "FAIL", u.COMPLETED = "COMPLETED"
        },
        354627: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("661223"),
                u = n("643847"),
                r = n("479358"),
                l = n("171168"),
                a = n("477815");

            function o(t) {
                let {
                    activeSubscription: e,
                    skuIDs: n,
                    paymentSourceId: o,
                    isGift: s
                } = t;
                n = n.filter(t => t !== l.PremiumSubscriptionSKUs.NONE);
                let c = (0, i.useStateFromStores)([u.default], () => {
                        let t = u.default.getPlanIdsForSkus(n).filter(t => !s || l.PREMIUM_PLANS.has(t));
                        return t.length > 0 ? u.default.get(t[0]) : null
                    }),
                    S = null == c ? [] : (0, r.getCurrencies)(c.id, o, s),
                    E = S.find(t => t === e?.currency) ?? S[0] ?? a.CurrencyCodes.USD;
                return {
                    ...(0, r.useCurrencyWithPaymentSourceChange)(E, c?.id, o, s, n),
                    currencies: S
                }
            }
        },
        594180: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("470079"),
                u = n("661223"),
                r = n("242677"),
                l = n("416573");

            function a() {
                let t = (0, u.useStateFromStores)([l.default], () => l.default.hasFetchedSubscriptions());
                return i.useEffect(() => {
                    !t && (0, r.fetchSubscriptions)()
                }, [t]), t
            }
        },
        675796: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("470079"),
                u = n("661223"),
                r = n("242677"),
                l = n("381965");

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
                })), c = (t, e, n) => t || e?.paymentSourceId == null ? n : e.paymentSourceId, [S, E] = i.useState(() => c(e, n, a));
                return i.useEffect(() => {
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
        325789: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("661223"),
                u = n("807787"),
                r = n("494317"),
                l = n("858459");

            function a() {
                let t = (0, i.useStateFromStores)([r.default], () => r.default.error),
                    [e, n] = (0, i.useStateFromStoresArray)([l.default], () => [l.default.error, l.default.isAwaitingAuthentication]);
                return {
                    paymentError: null != e ? e : t,
                    paymentAuthenticationState: n ? u.PaymentAuthenticationState.PENDING : null != e ? u.PaymentAuthenticationState.ERROR : u.PaymentAuthenticationState.NONE
                }
            }
        },
        847160: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("470079");

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
        874254: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("470079"),
                u = n("240971"),
                r = n("579766");

            function l(t) {
                let [e, n] = i.useState(r.PurchaseState.WAITING);
                return i.useEffect(() => {
                    null != t && t !== u.Step.REVIEW && e !== r.PurchaseState.WAITING && e !== r.PurchaseState.COMPLETED && n(r.PurchaseState.WAITING)
                }, [t, e, n]), [e, n]
            }
        },
        116069: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("470079"),
                u = n("50560"),
                r = n("661223"),
                l = n("579914");

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
        884483: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("470079"),
                u = n("203959"),
                r = n("836394"),
                l = n("948985"),
                a = n("474997"),
                o = n("171168");

            function s(t) {
                let {
                    applicationId: e,
                    skuIDs: n,
                    currentPaymentSourceId: s,
                    isGift: c
                } = t, S = i.useMemo(() => n.filter(t => !o.ACTIVE_PREMIUM_SKUS.includes(t)), [JSON.stringify(n)]), E = (0, u.default)([a.default], () => S.every(t => !a.default.isFetching(t) && null != a.default.get(t))), d = (0, u.useStateFromStoresObject)([a.default], () => {
                    let t = {};
                    for (let e of S) t[e] = a.default.get(e) ?? void 0;
                    return t
                }, [S]);
                i.useEffect(() => {
                    for (let t of S) !a.default.isFetching(t) && null == a.default.get(t) && (0, r.fetchSKU)(e, t)
                }, [e, S]);
                let f = (0, u.useStateFromStoresObject)([l.default], () => {
                    let t = {};
                    for (let e of S) t[e] = l.default.getPricesForSku(e) ?? void 0;
                    return t
                }, [S]);
                return i.useEffect(() => {
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
        551414: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("470079");

            function u(t) {
                let {
                    stepConfigs: e,
                    breadcrumbs: n
                } = t, [u, r] = i.useState(e[0]?.key), l = e.map(t => t.key).filter(t => null != t);
                return {
                    steps: l,
                    step: u,
                    setStep: r,
                    breadcrumbsData: e.filter(t => null != t.key && t?.options?.useBreadcrumbLabel != null).map(t => ({
                        id: t.key,
                        useBreadcrumbLabel: t.options.useBreadcrumbLabel
                    })).sort((t, e) => null != n ? n.indexOf(t.id) - n.indexOf(e.id) : 0)
                }
            }
        },
        134411: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("470079"),
                u = n("743102"),
                r = n("5336");

            function l() {
                let [t, e] = i.useState(null);
                return i.useEffect(() => {
                    (0, r.getStripe)().then(t => e(t)).catch(t => {
                        (0, u.captureBillingException)(t)
                    })
                }, []), t
            }
        },
        33910: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserCheckoutState: function() {
                    return u
                },
                default: function() {
                    return c
                }
            });
            var i, u, r = n("661223"),
                l = n("312916");
            (i = u || (u = {}))[i.UNKNOWN = 0] = "UNKNOWN", i[i.PENDING = 1] = "PENDING", i[i.DONE = 2] = "DONE";
            let a = 0,
                o = null;
            class s extends r.default.Store {
                static #t = this.displayName = "BrowserCheckoutStateStore";
                get browserCheckoutState() {
                    return a
                }
                get loadId() {
                    return o
                }
            }
            var c = new s(l.default, {
                USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function(t) {
                    a = 1, o = t.loadId
                },
                USER_PAYMENT_BROWSER_CHECKOUT_DONE: function(t) {
                    o === t.loadId && (a = 2)
                }
            })
        },
        436618: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("470079"),
                u = n("661223"),
                r = n("312916"),
                l = n("242677"),
                a = n("262047"),
                o = n("579914"),
                s = n("381965");

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
        807787: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PaymentAuthenticationState: function() {
                    return u
                },
                usePaymentAuthenticationPoller: function() {
                    return d
                },
                usePaymentStepForAuthentication: function() {
                    return E
                }
            });
            var i, u, r = n("470079"),
                l = n("661223"),
                a = n("767191"),
                o = n("242677"),
                s = n("706608"),
                c = n("240971"),
                S = n("858459");

            function E(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    u = arguments.length > 4 ? arguments[4] : void 0;
                r.useEffect(() => {
                    null != t && (1 === e && t !== c.Step.AWAITING_AUTHENTICATION ? n(c.Step.AWAITING_AUTHENTICATION) : t === c.Step.AWAITING_AUTHENTICATION && (2 === e ? n(c.Step.REVIEW) : 3 === e && (i ? null != u ? u() : n(c.Step.REVIEW) : n(c.Step.CONFIRM))))
                }, [t, e, n, i, u])
            }(i = u || (u = {}))[i.PENDING = 1] = "PENDING", i[i.ERROR = 2] = "ERROR", i[i.NONE = 3] = "NONE";

            function d(t) {
                let e = (0, l.useStateFromStores)([S.default], () => S.default.awaitingPaymentId),
                    n = (0, l.useStateFromStores)([s.default], () => s.default.isConnected()),
                    i = r.useRef(new a.Interval);
                r.useEffect(() => {
                    n || null == e || 1 !== t ? i.current.stop() : i.current.start(5e3, () => (0, o.fetchPayment)(e))
                }, [e, t, n])
            }
        },
        629781: function(t, e, n) {
            "use strict";
            let i;
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var u = n("661223"),
                r = n("312916");
            let l = {
                lastGuildDismissedTime: {}
            };
            class a extends u.default.DeviceSettingsStore {
                static #t = this.displayName = "ApplicationSubscriptionChannelNoticeStore";
                static #e = this.persistKey = "ApplicationSubscriptionChannelNoticeStore";
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
            var o = new a(r.default, {
                APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(t) {
                    let {
                        guildId: e
                    } = t;
                    i.lastGuildDismissedTime[e] = Date.now()
                }
            })
        },
        711180: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                dismissApplicationSubscriptionExpirationNotice: function() {
                    return o
                },
                fetchAllSubscriptionListingsDataForApplication: function() {
                    return l
                },
                fetchEntitlementsForGuild: function() {
                    return a
                },
                fetchSubscriptionListingForPlan: function() {
                    return s
                }
            });
            var i = n("312916"),
                u = n("714558"),
                r = n("829421");
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
                    let e = await r.getSubscriptionGroupForSubscriptionPlan(t);
                    for (let n of (i.default.dispatch({
                            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
                            groupListing: e
                        }), e.subscription_listings ?? [])) n.subscription_plans[0].id === t && await u.fetchSubscriptionPlansForSKU(n.id, void 0, void 0, !0)
                } catch (t) {}
            }
        },
        311063: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                LoadState: function() {
                    return i
                },
                default: function() {
                    return G
                },
                useActiveSubscriptionListingForApplication: function() {
                    return F
                },
                useApplication: function() {
                    return g
                },
                useEligibleApplicationSubscriptionGuilds: function() {
                    return D
                },
                useFetchEntitlementsForGuild: function() {
                    return R
                },
                useFetchListingsForApplication: function() {
                    return N
                },
                useFetchListingsForSubscriptions: function() {
                    return m
                },
                useFetchUserApplicationSubscriptionEntitlements: function() {
                    return y
                },
                useSubscriptionListingsForGroup: function() {
                    return L
                },
                useUnseenEndedApplicationSubscriptionEntitlements: function() {
                    return h
                }
            }), n("653041");
            var i, u, r = n("470079"),
                l = n("661223"),
                a = n("286021"),
                o = n("303257"),
                s = n("148934"),
                c = n("327271"),
                S = n("197905"),
                E = n("643847"),
                d = n("416573"),
                f = n("187367"),
                _ = n("474997"),
                T = n("629781"),
                I = n("711180"),
                A = n("829421"),
                p = n("897097"),
                C = n("574734"),
                P = n("467006");
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
                            let t = f.default.isFetchingForApplication(e);
                            (n && !t && !o || i) && (0, a.fetchUserEntitlements)({
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

            function F(t, e) {
                let n = (0, l.useStateFromStores)([d.default], () => d.default.getSubscriptions()),
                    {
                        subscriptionGroupListing: i,
                        guildEntitlements: u,
                        userEntitlements: a
                    } = (0, l.useStateFromStoresObject)([p.default, f.default], () => ({
                        subscriptionGroupListing: null != t ? p.default.getSubscriptionGroupListingForApplication(t) : null,
                        guildEntitlements: null != t && null != e ? p.default.getApplicationEntitlementsForGuild(t, e) : M,
                        userEntitlements: null != t ? f.default.getForApplication(t)?.values() ?? O : O
                    }), [t, e]),
                    o = r.useMemo(() => [...u, ...a], [u, a]),
                    s = i?.subscription_listings,
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
                    }, [o, s, e]);
                return {
                    activeSubscription: r.useMemo(() => {
                        if (null == n) return null;
                        let t = c?.subscription_plans[0].id;
                        for (let e of Object.values(n))
                            if (e.type === P.SubscriptionTypes.APPLICATION && e.items[0].planId === t) return e;
                        return null
                    }, [c, n]),
                    activeSubscriptionListing: c,
                    activeEntitlement: S,
                    subscriptionGroupListing: i
                }
            }

            function h(t) {
                let e = t?.id ?? P.EMPTY_STRING_SNOWFLAKE_ID,
                    {
                        entitlementsLoaded: n
                    } = R({
                        guildId: e,
                        canFetch: (0, l.useStateFromStores)([S.default], () => S.default.can(P.Permissions.ADMINISTRATOR, t))
                    }),
                    i = (0, l.useStateFromStores)([T.default], () => T.default.getLastGuildDismissedTime(e)),
                    u = (0, l.useStateFromStoresArray)([p.default], () => {
                        let t = p.default.getEntitlementsForGuild(e),
                            n = p.default.getEntitlementsForGuild(e, !1),
                            i = t.map(t => t.applicationId);
                        return n.filter(t => !i.includes(t.applicationId))
                    }),
                    a = (0, l.useStateFromStoresObject)([_.default], () => _.default.getSKUs()),
                    o = r.useMemo(() => u.filter(t => {
                        let e = a[t.skuId];
                        return null != e && e.available
                    }), [u, a]);
                return n ? o.filter(t => null != t.endsAt && t.endsAt.getTime() > Math.max(i ?? 0, Date.now() - 2592e6)) : []
            }
            let m = t => {
                    let [e, n] = r.useState(!1), i = r.useMemo(() => t.map(C.getApplicationSubscriptionPlanId), [t]), u = (0, l.useStateFromStoresArray)([E.default], () => i.filter(t => null == E.default.get(t)), [i]);
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
                } = F(e, i);
                return {
                    applicationSubscriptionListingsShown: null != e && null != n && (null == i || l) && (!u || a) && r && null != s && (0, C.hasPayableSubscriptionPlan)(s)
                }
            }

            function D(t, e) {
                let n = (0, l.useStateFromStores)([c.default], () => c.default.isLoaded()),
                    [i, u] = r.useState([]);
                return r.useEffect(() => {
                    null == e && null != t && n && (0, A.fetchEligibleApplicationSubscriptionGuilds)(t).then(t => {
                        u(t.map(t => c.default.getGuild(t)).filter(t => null != t))
                    })
                }, [t, e, n]), i
            }
        },
        829421: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchApplication: function() {
                    return c
                },
                fetchEligibleApplicationSubscriptionGuilds: function() {
                    return S
                },
                getApplicationSubscriptionGroupListingsForApplication: function() {
                    return a
                },
                getEntitlementsForGuild: function() {
                    return o
                },
                getSubscriptionGroupForSubscriptionPlan: function() {
                    return s
                }
            });
            var i = n("454836"),
                u = n("312916"),
                r = n("648519"),
                l = n("467006");
            let a = async (t, e) => (await i.default.get({
                url: l.Endpoints.APPLICATION_SUBSCRIPTION_GROUP_LISTING(t, e)
            })).body, o = async function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (await i.default.get({
                    url: l.Endpoints.GUILD_ENTITLEMENTS(t),
                    query: {
                        with_sku: !0,
                        with_application: !0,
                        exclude_deleted: e
                    }
                })).body
            }, s = async t => (await i.default.get({
                url: l.Endpoints.SUBSCRIPTION_PLAN_GROUP_LISTING(t)
            })).body;

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
            async function S(t) {
                return (await i.default.get({
                    url: l.Endpoints.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
                    query: {
                        application_id: t
                    }
                })).body
            }
        },
        897097: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FetchState: function() {
                    return u
                },
                default: function() {
                    return L
                }
            });
            var i, u, r = n("512722"),
                l = n.n(r),
                a = n("661223"),
                o = n("386695"),
                s = n("312916"),
                c = n("130867"),
                S = n("474997");

            function E(t) {
                return `subscription_listing:${t}`
            }

            function d(t) {
                return `application:${t}`
            }

            function f(t) {
                return `plan:${t}`
            }

            function _(t, e, n) {
                return `entitlement:${t}:${n}:${e}`
            }

            function T(t, e) {
                return `entitlement:${e}:${t}`
            }(i = u || (u = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let I = new o.default(t => [d(t.application_id), ...t.subscription_listings_ids.map(E)], t => t.id),
                A = new o.default(t => {
                    var e;
                    return [d(t.application_id), (e = t.subscription_plans[0].id, `plan:${e}`)]
                }, t => t.id),
                p = new o.default(t => [_(t.applicationId, t.isValid(null, S.default), t.guildId), T(t.isValid(null, S.default), t.guildId)], t => t.id),
                C = {},
                P = {};

            function N(t) {
                let e = I.values(d(t));
                return l()(e.length <= 1, "Found multiple group listings for application"), e[0]
            }

            function R(t) {
                for (let e of (I.set(t.id, t), t.subscription_listings ?? []))(function(t) {
                    A.set(t.id, t)
                })(e)
            }
            class U extends a.default.Store {
                static #t = this.displayName = "ApplicationSubscriptionStore";
                getSubscriptionGroupListingsForApplicationFetchState(t) {
                    return C[t] ?? 0
                }
                getSubscriptionGroupListing(t) {
                    return I.get(t)
                }
                getSubscriptionGroupListingForApplication(t) {
                    return N(t)
                }
                getSubscriptionGroupListingForSubscriptionListing(t) {
                    let e = I.values(E(t));
                    return l()(e.length <= 1, "Found multiple group listings for listing"), e[0]
                }
                getSubscriptionListing(t) {
                    return A.get(t)
                }
                getSubscriptionListingsForApplication(t) {
                    return A.values(d(t))
                }
                getEntitlementsForGuildFetchState(t) {
                    return P[t] ?? 0
                }
                getSubscriptionListingForPlan(t) {
                    var e;
                    let n = A.values((e = t, `plan:${e}`));
                    return l()(n.length <= 1, "Found multiple listings for plan"), n[0]
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
        574734: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getApplicationSubscriptionPlanId: function() {
                    return a
                },
                getPayableSubscriptionListing: function() {
                    return s
                },
                hasPayableSubscriptionPlan: function() {
                    return o
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
            var i = n("512722"),
                u = n.n(i),
                r = n("984362"),
                l = n("467006");

            function a(t) {
                let e = t.items;
                return u()(1 === e.length, "more than 1 subscription item for application subscription"), e[0].planId
            }

            function o(t) {
                return null != s(t)
            }

            function s(t) {
                return t.subscription_listings?.find(t => t.published && (c(t.sku_flags) || S(t.sku_flags)) && t.subscription_plans[0].price > 0)
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
        494317: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            });
            var i = n("661223"),
                u = n("312916"),
                r = n("5336");
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
            class h extends i.default.Store {
                static #t = this.displayName = "NewPaymentSourceStore";
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
            var m = new h(u.default, {
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
                        billingAddress: i
                    } = t;
                    l = e, a = n, M(i), C = E.length > 0
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
                    e?.payment_id != null ? (R = !0, N = e.payment_id) : e?.payment_source_id != null && (R = !0, U = e.payment_source_id)
                },
                RESET_PAYMENT_ID: function() {
                    R = !1, N = null
                }
            })
        },
        858459: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return C
                }
            });
            var i = n("661223"),
                u = n("312916"),
                r = n("862212"),
                l = n("836394"),
                a = n("479852"),
                o = n("743102"),
                s = n("5336"),
                c = n("467006"),
                S = n("30175");
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
                    paymentId: i
                } = e;
                if (n !== a.default.ErrorCodes.AUTHENTICATION_REQUIRED) return E = !1, !1;
                !E && (E = !0, d = i, I(i))
            }
            async function I(t) {
                if (null == t) return;
                let {
                    error: e
                } = await (0, s.authenticatePaymentIntentForPaymentId)(t);
                if (null != e) {
                    u.default.dispatch({
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
                E = !1, f = null, d = null, u.default.wait(r.clearError), u.default.wait(l.clearPurchaseError)
            }
            class p extends i.default.Store {
                static #t = this.displayName = "PaymentAuthenticationStore";
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
                    f = e, E = !1
                },
                PAYMENT_UPDATE: A,
                BILLING_PAYMENT_FETCH_SUCCESS: A
            })
        },
        806037: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PurchaseTokenAuthState: function() {
                    return u
                },
                default: function() {
                    return _
                }
            });
            var i, u, r = n("661223"),
                l = n("312916"),
                a = n("479852"),
                o = n("706608");
            (i = u || (u = {}))[i.UNKNOWN = 0] = "UNKNOWN", i[i.PENDING = 1] = "PENDING", i[i.SUCCESS = 2] = "SUCCESS", i[i.ERROR = 3] = "ERROR";
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
                static #t = this.displayName = "PurchaseTokenAuthStore";
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
        187367: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return U
                }
            });
            var i = n("392711"),
                u = n.n(i),
                r = n("661223"),
                l = n("312916"),
                a = n("130867"),
                o = n("599027"),
                s = n("585741"),
                c = n("474997");
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
                static #t = this.displayName = "EntitlementStore";
                initialize() {
                    this.syncWith([o.default], () => !0)
                }
                get(t) {
                    return S[t]
                }
                getGiftable() {
                    return u().values(E)
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
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        u = d[e];
                    if (null != u)
                        for (let e of u) {
                            let n = S[e];
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
        948985: function(t, e, n) {
            "use strict";
            let i, u;
            n.r(e), n.d(e, {
                NO_PAYMENT_SOURCE: function() {
                    return o
                },
                default: function() {
                    return M
                }
            });
            var r = n("661223"),
                l = n("312916"),
                a = n("467006");
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
                null != i && null != _ ? i(_) : null != u && u(t), i = null, u = null
            }
            class L extends r.default.Store {
                static #t = this.displayName = "SKUPaymentModalStore";
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
            var M = new L(l.default, {
                SKU_PURCHASE_MODAL_OPEN: function(t) {
                    U(), s = t.skuId, S = t.applicationId, p = t.isIAP, E = t.analyticsLocation, N = t.context, P = t.isGift, C = !0, A = !1, i = t.resolve, u = t.reject, I = null, _ = null, d = t.promotionId
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
                        price: i
                    } = t;
                    f = {
                        ...f,
                        [e]: {
                            ...f[e],
                            [null != n ? n : o]: i
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
        54903: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("735250"),
                u = n("470079");

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
        479358: function(t, e, n) {
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
            });
            var i = n("470079"),
                u = n("512722"),
                r = n.n(u),
                l = n("312916"),
                a = n("714558"),
                o = n("432158"),
                s = n("643847"),
                c = n("488867"),
                S = n("467006"),
                E = n("171168");

            function d(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...E.ACTIVE_PREMIUM_SKUS];
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
                        purchaseType: n ? S.PriceSetAssignmentPurchaseTypes.GIFT : S.PriceSetAssignmentPurchaseTypes.DEFAULT
                    };
                return i = "string" == typeof t ? s.default.get(t) : t, r()(i, "subscription plan not loaded"), null != e && s.default.hasPaymentSourceForSKUId(e, i.skuId) && (a.paymentSourceId = e), (u = (l = (0, c.experimentalGetPrices)(i.id, a)).map(t => t.currency)).length < 1 && (u = [S.CurrencyCodes.USD]), u
            }

            function _(t, e, n) {
                let i = s.default.get(t);
                return r()(null != i, "plan is undefined"), f(i, n, !1).includes(e)
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
                    (async () => {
                        await d(n, r);
                        let t = [];
                        null != e && null != s.default.get(e) && (t = f(e, n, u)), t.length > 0 ? a({
                            paymentSourceId: n,
                            currency: t[0],
                            loaded: !0
                        }) : a({
                            paymentSourceId: n,
                            loaded: !1
                        })
                    })()
                }, [n, JSON.stringify(r), e, u, c]);
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
        50560: function(t, e, n) {
            "use strict";
            var i, u;
            n.r(e), n.d(e, {
                CountryCodes: function() {
                    return i
                },
                CountryCodesSets: function() {
                    return r
                }
            }), (u = i || (i = {})).AD = "AD", u.AE = "AE", u.AF = "AF", u.AG = "AG", u.AI = "AI", u.AL = "AL", u.AM = "AM", u.AO = "AO", u.AQ = "AQ", u.AR = "AR", u.AS = "AS", u.AT = "AT", u.AU = "AU", u.AW = "AW", u.AX = "AX", u.AZ = "AZ", u.BA = "BA", u.BB = "BB", u.BD = "BD", u.BE = "BE", u.BF = "BF", u.BG = "BG", u.BH = "BH", u.BI = "BI", u.BJ = "BJ", u.BL = "BL", u.BM = "BM", u.BN = "BN", u.BO = "BO", u.BQ = "BQ", u.BR = "BR", u.BS = "BS", u.BT = "BT", u.BV = "BV", u.BW = "BW", u.BY = "BY", u.BZ = "BZ", u.CA = "CA", u.CC = "CC", u.CD = "CD", u.CF = "CF", u.CG = "CG", u.CH = "CH", u.CI = "CI", u.CK = "CK", u.CL = "CL", u.CM = "CM", u.CN = "CN", u.CO = "CO", u.CR = "CR", u.CU = "CU", u.CV = "CV", u.CW = "CW", u.CX = "CX", u.CY = "CY", u.CZ = "CZ", u.DE = "DE", u.DJ = "DJ", u.DK = "DK", u.DM = "DM", u.DO = "DO", u.DZ = "DZ", u.EC = "EC", u.EE = "EE", u.EG = "EG", u.EH = "EH", u.ER = "ER", u.ES = "ES", u.ET = "ET", u.FI = "FI", u.FJ = "FJ", u.FK = "FK", u.FM = "FM", u.FO = "FO", u.FR = "FR", u.GA = "GA", u.GB = "GB", u.GD = "GD", u.GE = "GE", u.GF = "GF", u.GG = "GG", u.GH = "GH", u.GI = "GI", u.GL = "GL", u.GM = "GM", u.GN = "GN", u.GP = "GP", u.GQ = "GQ", u.GR = "GR", u.GS = "GS", u.GT = "GT", u.GU = "GU", u.GW = "GW", u.GY = "GY", u.HK = "HK", u.HM = "HM", u.HN = "HN", u.HR = "HR", u.HT = "HT", u.HU = "HU", u.ID = "ID", u.IE = "IE", u.IL = "IL", u.IM = "IM", u.IN = "IN", u.IO = "IO", u.IQ = "IQ", u.IR = "IR", u.IS = "IS", u.IT = "IT", u.JE = "JE", u.JM = "JM", u.JO = "JO", u.JP = "JP", u.KE = "KE", u.KG = "KG", u.KH = "KH", u.KI = "KI", u.KM = "KM", u.KN = "KN", u.KP = "KP", u.KR = "KR", u.KW = "KW", u.KY = "KY", u.KZ = "KZ", u.LA = "LA", u.LB = "LB", u.LC = "LC", u.LI = "LI", u.LK = "LK", u.LR = "LR", u.LS = "LS", u.LT = "LT", u.LU = "LU", u.LV = "LV", u.LY = "LY", u.MA = "MA", u.MC = "MC", u.MD = "MD", u.ME = "ME", u.MF = "MF", u.MG = "MG", u.MH = "MH", u.MK = "MK", u.ML = "ML", u.MM = "MM", u.MN = "MN", u.MO = "MO", u.MP = "MP", u.MQ = "MQ", u.MR = "MR", u.MS = "MS", u.MT = "MT", u.MU = "MU", u.MV = "MV", u.MW = "MW", u.MX = "MX", u.MY = "MY", u.MZ = "MZ", u.NA = "NA", u.NC = "NC", u.NE = "NE", u.NF = "NF", u.NG = "NG", u.NI = "NI", u.NL = "NL", u.NO = "NO", u.NP = "NP", u.NR = "NR", u.NU = "NU", u.NZ = "NZ", u.OM = "OM", u.PA = "PA", u.PE = "PE", u.PF = "PF", u.PG = "PG", u.PH = "PH", u.PK = "PK", u.PL = "PL", u.PM = "PM", u.PN = "PN", u.PR = "PR", u.PS = "PS", u.PT = "PT", u.PW = "PW", u.PY = "PY", u.QA = "QA", u.RE = "RE", u.RO = "RO", u.RS = "RS", u.RU = "RU", u.RW = "RW", u.SA = "SA", u.SB = "SB", u.SC = "SC", u.SD = "SD", u.SE = "SE", u.SG = "SG", u.SH = "SH", u.SI = "SI", u.SJ = "SJ", u.SK = "SK", u.SL = "SL", u.SM = "SM", u.SN = "SN", u.SO = "SO", u.SR = "SR", u.SS = "SS", u.ST = "ST", u.SV = "SV", u.SX = "SX", u.SY = "SY", u.SZ = "SZ", u.TC = "TC", u.TD = "TD", u.TF = "TF", u.TG = "TG", u.TH = "TH", u.TJ = "TJ", u.TK = "TK", u.TL = "TL", u.TM = "TM", u.TN = "TN", u.TO = "TO", u.TR = "TR", u.TT = "TT", u.TV = "TV", u.TW = "TW", u.TZ = "TZ", u.UA = "UA", u.UG = "UG", u.UM = "UM", u.US = "US", u.UY = "UY", u.UZ = "UZ", u.VA = "VA", u.VC = "VC", u.VE = "VE", u.VG = "VG", u.VI = "VI", u.VN = "VN", u.VU = "VU", u.WF = "WF", u.WS = "WS", u.YE = "YE", u.YT = "YT", u.ZA = "ZA", u.ZM = "ZM", u.ZW = "ZW", u.XK = "XK", u.AC = "AC", u.AN = "AN", u.DG = "DG", u.EL = "EL", u.IC = "IC", u.MI = "MI", u.TP = "TP", u.WK = "WK";
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
//# sourceMappingURL=26627.ff922ae4d26b65deadc2.js.map