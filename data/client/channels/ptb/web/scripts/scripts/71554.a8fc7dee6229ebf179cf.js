(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71554"], {
        850068: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                deletePaymentSource: function() {
                    return R
                },
                updatePaymentSource: function() {
                    return h
                },
                validatePaymentSourceBillingAddress: function() {
                    return P
                },
                createAdyenPaymentSourceToken: function() {
                    return m
                },
                createPaymentSource: function() {
                    return y
                },
                dispatchConfirmationError: function() {
                    return v
                },
                createCardToken: function() {
                    return D
                },
                confirmEPS: function() {
                    return U
                },
                confirmIdeal: function() {
                    return M
                },
                confirmPrzelewy24: function() {
                    return G
                },
                confirmSofort: function() {
                    return w
                },
                confirmCardPaymentSource: function() {
                    return B
                },
                createPaymentRequestPaymentSource: function() {
                    return b
                },
                createBraintreePaymentSource: function() {
                    return x
                },
                createStripePaymentSource: function() {
                    return F
                },
                createAdyenPrepaidPaymentSource: function() {
                    return V
                },
                createAdyenVaultablePaymentSource: function() {
                    return H
                },
                createStripePaymentSourceToken: function() {
                    return k
                },
                createPaymentSourceToken: function() {
                    return K
                },
                fetchPaymentSources: function() {
                    return Y
                },
                fetchPayment: function() {
                    return q
                },
                fetchPayments: function() {
                    return W
                },
                fetchSubscriptions: function() {
                    return Z
                },
                getPerksRelevance: function() {
                    return X
                },
                getNitroAffinity: function() {
                    return J
                },
                fetchMostRecentSubscription: function() {
                    return z
                },
                createSubscription: function() {
                    return Q
                },
                payInvoiceManually: function() {
                    return j
                },
                handleConfirmation: function() {
                    return $
                },
                redirectedPaymentSucceeded: function() {
                    return en
                },
                paymentIntentSucceeded: function() {
                    return er
                },
                cancelSubscription: function() {
                    return ea
                },
                deleteRenewalMutation: function() {
                    return eo
                },
                updateSubscription: function() {
                    return ed
                },
                resubscribeToSubscription: function() {
                    return es
                },
                upgradeSubscription: function() {
                    return eE
                },
                changeSubscriptionCurrency: function() {
                    return e_
                },
                changePaymentSource: function() {
                    return ec
                },
                clearUpdatePaymentSourceError: function() {
                    return eI
                },
                clearRemovePaymentSourceError: function() {
                    return eS
                },
                clearPaymentAuthenticationError: function() {
                    return eT
                },
                voidPendingPayment: function() {
                    return ef
                },
                refundPayment: function() {
                    return ep
                },
                popupBridgeState: function() {
                    return eN
                },
                popupBridgeCallback: function() {
                    return eC
                },
                fetchIpCountryCode: function() {
                    return eA
                },
                fetchLocalizedPromo: function() {
                    return eR
                },
                resetPaymentIntentId: function() {
                    return eh
                },
                resetSubscriptionStore: function() {
                    return eO
                },
                startBrowserCheckout: function() {
                    return eL
                }
            }), n("70102");
            var r = n("41092"),
                i = n("627445"),
                l = n.n(i),
                u = n("872717"),
                a = n("913144"),
                o = n("448993"),
                d = n("736978"),
                s = n("865146"),
                E = n("766274"),
                _ = n("160299"),
                c = n("599110"),
                I = n("745279"),
                S = n("719923"),
                T = n("224400"),
                f = n("520713"),
                p = n("49111"),
                N = n("422487"),
                C = n("843455"),
                A = n("782340");
            async function R(e) {
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_REMOVE_START"
                });
                try {
                    await u.default.delete({
                        url: p.Endpoints.BILLING_PAYMENT_SOURCE(e),
                        oldFormErrors: !0
                    }), a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS",
                        id: e
                    })
                } catch (t) {
                    let e = new o.BillingError(t);
                    throw a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL",
                        error: e
                    }), e
                }
            }
            async function h(e, t) {
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_UPDATE_START"
                });
                try {
                    let {
                        billingAddress: {
                            line1: n,
                            line2: r,
                            postalCode: i,
                            ...l
                        }
                    } = t, o = await u.default.patch({
                        url: p.Endpoints.BILLING_PAYMENT_SOURCE(e),
                        body: {
                            billing_address: {
                                ...l,
                                line_1: n,
                                line_2: r,
                                postal_code: i
                            },
                            expires_month: t.expiresMonth,
                            expires_year: t.expiresYear,
                            default: t.isDefault
                        }
                    }), d = s.default.createFromServer(o.body);
                    a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS",
                        paymentSource: d
                    })
                } catch (t) {
                    let e = (0, d.parseV8BillingAddressSkemaErrorToBillingError)(t);
                    throw a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL",
                        error: e
                    }), e
                }
            }
            async function O(e) {
                let t = await u.default.get({
                        url: p.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                        oldFormErrors: !0
                    }),
                    {
                        stripe_payment_intent_client_secret: n
                    } = t.body;
                return n
            }
            async function L(e) {
                let t = await u.default.get({
                        url: p.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                        oldFormErrors: !0
                    }),
                    {
                        stripe_payment_intent_client_secret: n,
                        stripe_payment_intent_payment_method_id: r
                    } = t.body;
                return {
                    clientSecret: n,
                    paymentMethodId: r
                }
            }
            async function g() {
                let e = await u.default.post({
                    url: p.Endpoints.BILLING_STRIPE_SETUP_INTENT_SECRET,
                    oldFormErrors: !0
                });
                return e.body.client_secret
            }
            async function P(e) {
                try {
                    let t = await u.default.post({
                        url: p.Endpoints.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
                        body: {
                            billing_address: {
                                name: e.name,
                                line_1: e.line1,
                                line_2: e.line2,
                                city: e.city,
                                state: e.state,
                                postal_code: e.postalCode,
                                country: e.country,
                                email: e.email
                            }
                        }
                    });
                    return t.body.token
                } catch (t) {
                    let e = (0, d.parseV8BillingAddressSkemaErrorToBillingError)(t);
                    throw a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: e
                    }), e
                }
            }

            function m(e) {
                var t;
                return p.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : JSON.stringify({
                    type: null !== (t = C.ADYEN_PAYMENT_SOURCES.get(e.type)) && void 0 !== t ? t : null
                })
            }
            async function y(e, t, n, r) {
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                try {
                    let i = await u.default.post({
                            url: p.Endpoints.BILLING_PAYMENT_SOURCES,
                            query: {
                                location: r.analyticsLocation
                            },
                            body: {
                                payment_gateway: e,
                                token: t,
                                billing_address: {
                                    name: n.name,
                                    line_1: n.line1,
                                    line_2: n.line2,
                                    city: n.city,
                                    state: n.state,
                                    postal_code: n.postalCode,
                                    country: n.country,
                                    email: n.email
                                },
                                billing_address_token: r.billingAddressToken,
                                bank: r.bank,
                                return_url: r.returnUrl
                            }
                        }),
                        l = s.default.createFromServer(i.body);
                    return a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS",
                        paymentSource: l
                    }), l
                } catch (t) {
                    let e = (0, d.parseV8BillingAddressSkemaErrorToBillingError)(t);
                    throw function(e, t) {
                        var n, r;
                        (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.adyen_redirect_url) && (e.fields.adyen_redirect_url = null == t ? void 0 : null === (r = t.body) || void 0 === r ? void 0 : r.adyen_redirect_url)
                    }(e, t), e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: e
                    }), e
                }
            }

            function v(e) {
                var t, n;
                let r, i, l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    u = A.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR;
                if (t = e, N.StripeErrorTypes.includes(t.type)) {
                    ;
                    let t = null != e.message ? "".concat(u, ": ").concat(e.message) : u,
                        a = {
                            failure_message: t,
                            error_type: e.type,
                            failure_code: e.code,
                            failure_sub_code: e.decline_code,
                            payment_source_type: null === (n = e.payment_method) || void 0 === n ? void 0 : n.type
                        };
                    if (i = a, "card_error" === e.type) c.default.track(p.AnalyticEvents.PAYMENT_SOURCE_CREATION_FAILED, {
                        ...a,
                        stacktrace: Error().stack
                    }), l = !1;
                    r = new o.BillingError(t)
                } else i = {
                    failure_message: (r = new o.BillingError("string" == typeof e ? u : e)).message,
                    status_code: r.code
                }, 429 === r.code && (l = !1);
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                    error: r
                });
                let d = Error("string" == typeof e ? e : r.message);
                return l && (0, I.captureBillingException)(d, {
                    extra: i
                }), d
            }
            async function D(e, t) {
                if (null == e || null == t) throw v("Stripe or elements not loaded");
                let n = t.getElement(r.CardNumberElement);
                if (null == n) throw v("Unable to load card elements from Stripe");
                let {
                    token: i,
                    error: l
                } = await e.createToken(n);
                if (null != l) throw v(l);
                if (null == i) throw v("token not available with successful stripe call");
                return i.id
            }
            async function U(e, t, n, r) {
                if (null == e) throw v("Stripe not loaded");
                if (null == t) throw v("Bank required for EPS");
                let {
                    email: i,
                    name: l,
                    line1: u,
                    line2: o,
                    city: d,
                    state: s,
                    postalCode: E,
                    country: _
                } = n;
                if (null == l) throw v("Name required for EPS");
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let c = await P(n),
                    {
                        paymentMethod: I,
                        error: S
                    } = await e.createPaymentMethod({
                        type: "eps",
                        eps: {
                            bank: t
                        },
                        billing_details: {
                            address: {
                                line1: u,
                                line2: o,
                                city: d,
                                state: s,
                                postal_code: E,
                                country: _
                            },
                            name: l,
                            email: i
                        }
                    });
                if (null != S) throw v(S);
                if (null == I) throw v("paymentMethod not available with successful stripe call");
                return y(p.PaymentGateways.STRIPE, I.id, n, {
                    billingAddressToken: c,
                    analyticsLocation: r,
                    bank: t
                })
            }
            async function M(e, t, n, r) {
                if (null == e) throw v("Stripe not loaded");
                if (null == t) throw v("Bank required for iDEAL");
                let {
                    email: i,
                    name: l,
                    line1: u,
                    line2: o,
                    city: d,
                    state: s,
                    postalCode: E,
                    country: _
                } = n;
                if (null == l) throw v("Name required for iDEAL");
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let c = await P(n),
                    {
                        paymentMethod: I,
                        error: S
                    } = await e.createPaymentMethod({
                        type: "ideal",
                        ideal: {
                            bank: t
                        },
                        billing_details: {
                            address: {
                                line1: u,
                                line2: o,
                                city: d,
                                state: s,
                                postal_code: E,
                                country: _
                            },
                            name: l,
                            email: i
                        }
                    });
                if (null != S) throw v(S);
                if (null == I) throw v("paymentMethod not available with successful stripe call");
                return y(p.PaymentGateways.STRIPE, I.id, n, {
                    billingAddressToken: c,
                    analyticsLocation: r,
                    bank: t
                })
            }
            async function G(e, t, n, r) {
                if (null == e) throw v("Stripe not loaded");
                let {
                    email: i,
                    name: l,
                    line1: u,
                    line2: o,
                    city: d,
                    state: s,
                    postalCode: E,
                    country: _
                } = n;
                if (null == i) throw v("Email required for Przelewy24");
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let c = await P(n),
                    I = t.p24Bank,
                    {
                        paymentMethod: S,
                        error: T
                    } = await e.createPaymentMethod({
                        type: "p24",
                        p24: {
                            bank: I
                        },
                        billing_details: {
                            address: {
                                line1: u,
                                line2: o,
                                city: d,
                                state: s,
                                postal_code: E,
                                country: _
                            },
                            name: l,
                            email: i
                        }
                    });
                if (null != T) throw v(T);
                if (null == S) throw v("paymentMethod not available with successful stripe call");
                return y(p.PaymentGateways.STRIPE, S.id, n, {
                    billingAddressToken: c,
                    analyticsLocation: r,
                    bank: I
                })
            }
            async function w(e, t, n) {
                if (null == e) throw v("Stripe not loaded");
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let r = await P(t),
                    {
                        email: i,
                        name: l,
                        line1: u,
                        line2: o,
                        city: d,
                        state: s,
                        postalCode: E,
                        country: _
                    } = t,
                    {
                        paymentMethod: c,
                        error: I
                    } = await e.createPaymentMethod({
                        type: "sofort",
                        sofort: {
                            country: _
                        },
                        billing_details: {
                            address: {
                                line1: u,
                                line2: o,
                                city: d,
                                state: s,
                                postal_code: E,
                                country: _
                            },
                            name: l,
                            email: i
                        }
                    });
                if (null != I) throw v(I);
                if (null == c) throw v("paymentMethod not available with successful stripe call");
                return y(p.PaymentGateways.STRIPE, c.id, t, {
                    billingAddressToken: r,
                    analyticsLocation: n
                })
            }
            async function B(e, t, n, r) {
                if (null == e || null == t) throw v("Stripe or token not loaded");
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let i = null;
                try {
                    i = await g()
                } catch (e) {
                    throw v(e)
                }
                let {
                    name: u,
                    line1: o,
                    line2: d,
                    city: s,
                    state: E,
                    postalCode: _,
                    country: c
                } = n, I = await P(n), {
                    setupIntent: S,
                    error: T
                } = await e.confirmCardSetup(i, {
                    payment_method: {
                        card: {
                            token: t
                        },
                        billing_details: {
                            address: {
                                line1: o,
                                line2: d,
                                city: s,
                                state: E,
                                postal_code: _,
                                country: c
                            },
                            name: u
                        }
                    }
                });
                if (null != T) throw v(T);
                if ((null == S ? void 0 : S.payment_method) == null) throw v("setupIntent.payment_method not available with successful stripe call");
                return l("string" == typeof S.payment_method, "setupIntent.payment_method expanded not supported"), y(p.PaymentGateways.STRIPE, S.payment_method, n, {
                    billingAddressToken: I,
                    analyticsLocation: r
                })
            }

            function b(e, t, n) {
                let {
                    token: r,
                    billingAddressInfo: i
                } = f.parseStripePaymentMethod(e);
                return y(p.PaymentGateways.STRIPE, r, null != t ? t : i, {
                    analyticsLocation: n
                })
            }

            function x(e, t, n) {
                return y(p.PaymentGateways.BRAINTREE, e, t, {
                    analyticsLocation: n
                })
            }
            async function F(e, t, n, r) {
                if (null == e) throw v("Stripe not loaded");
                let i = await P(t),
                    {
                        name: u,
                        line1: a,
                        line2: o,
                        city: d,
                        state: s,
                        postalCode: E,
                        country: _
                    } = t,
                    c = C.STRIPE_PAYMENT_SOURCES.get(n);
                l(null != c, "unsupported payment method type");
                let {
                    paymentMethod: I,
                    error: S
                } = await e.createPaymentMethod({
                    type: c,
                    billing_details: {
                        address: {
                            line1: a,
                            line2: o,
                            city: d,
                            state: s,
                            postal_code: E,
                            country: _
                        },
                        name: u
                    }
                });
                if (null != S) throw v(S);
                if (null == I) throw v("stripePaymentMethod not available with successful stripe call");
                return y(p.PaymentGateways.STRIPE, I.id, t, {
                    billingAddressToken: i,
                    analyticsLocation: r
                })
            }
            async function V(e, t, n) {
                let r = await P(e),
                    i = {
                        type: C.ADYEN_PAYMENT_SOURCES.get(t)
                    };
                return y(p.PaymentGateways.ADYEN, JSON.stringify(i), e, {
                    billingAddressToken: r,
                    analyticsLocation: n
                })
            }
            async function H(e, t, n, r) {
                var i;
                let l = await P(e),
                    s = {
                        type: C.ADYEN_PAYMENT_SOURCES.get(t),
                        ...null !== (i = null == r ? void 0 : r.paymentMethod) && void 0 !== i ? i : {}
                    },
                    E = await eN(t),
                    _ = u.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, null != E ? E : "", "success");
                try {
                    let t = await y(p.PaymentGateways.ADYEN, JSON.stringify(s), e, {
                        billingAddressToken: l,
                        analyticsLocation: n,
                        returnUrl: _
                    });
                    return {
                        paymentSource: t,
                        redirectConfirmation: !1
                    }
                } catch (t) {
                    if (t.code !== d.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: new o.BillingError("Unable to create payment source token: code: ".concat(null == t ? void 0 : t.code, " message: ").concat(null == t ? void 0 : t.message), o.BillingError.ErrorCodes.UNKNOWN)
                    }), t;
                    let e = t.fields.adyen_redirect_url;
                    if (null == e) throw v("redirect url cannot be null on a redirect for adyen.");
                    return ei(e), {
                        redirectConfirmation: !0
                    }
                }
            }
            async function k(e) {
                if (p.VAULTABLE_PAYMENT_SOURCES.has(e.type)) return null;
                let t = await f.getStripe();
                if (null == t) throw new o.BillingError("Stripe not loaded", o.BillingError.ErrorCodes.UNKNOWN);
                let {
                    email: n,
                    name: r,
                    line1: i,
                    line2: u,
                    city: a,
                    state: d,
                    postalCode: s,
                    country: E
                } = e.billingAddress, _ = {
                    billing_details: {
                        address: {
                            line1: i,
                            line2: u,
                            city: a,
                            state: d,
                            postal_code: s,
                            country: E
                        },
                        name: r
                    }
                };
                switch (e.type) {
                    case C.PaymentSourceTypes.GIROPAY:
                        _.type = "giropay";
                        break;
                    case C.PaymentSourceTypes.SOFORT:
                        _.type = "sofort", _.sofort = {
                            country: null != E ? E : ""
                        }, _.billing_details.email = n;
                        break;
                    case C.PaymentSourceTypes.BANCONTACT:
                        _.type = "bancontact";
                        break;
                    case C.PaymentSourceTypes.IDEAL:
                        if (null == e.bank) throw new o.BillingError("iDEAL missing bank information", o.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        _.type = "ideal", _.ideal = {
                            bank: e.bank
                        };
                        break;
                    case C.PaymentSourceTypes.PRZELEWY24:
                        if (null == e.bank) throw new o.BillingError("p24 missing bank information", o.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        _.type = "p24", _.p24 = {
                            bank: e.bank
                        }, _.billing_details.email = e.email;
                        break;
                    case C.PaymentSourceTypes.EPS:
                        if (null == e.bank) throw new o.BillingError("EPS missing bank information", o.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        _.type = "eps", _.eps = {
                            bank: e.bank
                        }
                }
                l(null != _.type, "unsupported payment method type");
                let {
                    paymentMethod: c,
                    error: I
                } = await t.createPaymentMethod(_);
                if (null != I || null == c) throw new o.BillingError("Unable to create payment source token: code: ".concat(null == I ? void 0 : I.code, " message: ").concat(null == I ? void 0 : I.message), o.BillingError.ErrorCodes.UNKNOWN);
                return c.id
            }

            function K(e) {
                return p.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : C.ADYEN_PAYMENT_SOURCES.has(e.type) ? m(e) : k(e)
            }
            async function Y() {
                try {
                    let e = u.default.get({
                        url: p.Endpoints.BILLING_PAYMENT_SOURCES,
                        oldFormErrors: !0
                    });
                    a.default.wait(() => a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCES_FETCH_START",
                        request: e
                    }));
                    let t = await e;
                    return a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS",
                        paymentSources: t.body
                    }), t
                } catch (e) {
                    throw a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL"
                    }), e
                }
            }
            async function q(e) {
                let t = await u.default.get({
                    url: p.Endpoints.BILLING_PAYMENT(e)
                });
                return a.default.dispatch({
                    type: "BILLING_PAYMENT_FETCH_SUCCESS",
                    payment: t.body
                }), t
            }
            async function W() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                a.default.dispatch({
                    type: "BILLING_PAYMENTS_FETCH_START"
                });
                try {
                    let n = await u.default.get({
                        url: p.Endpoints.BILLING_PAYMENTS,
                        query: {
                            limit: e,
                            before: t
                        },
                        oldFormErrors: !0
                    });
                    return a.default.dispatch({
                        type: "BILLING_PAYMENTS_FETCH_SUCCESS",
                        payments: n.body
                    }), n
                } catch (e) {
                    throw a.default.dispatch({
                        type: "BILLING_PAYMENTS_FETCH_FAIL"
                    }), e
                }
            }
            async function Z() {
                a.default.wait(() => {
                    a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_FETCH_START"
                    })
                });
                try {
                    let e = await u.default.get({
                        url: p.Endpoints.BILLING_SUBSCRIPTIONS,
                        oldFormErrors: !0
                    });
                    if (null == e.body) throw new o.BillingError("response body is null, response: ".concat(JSON.stringify(e)), e.status);
                    return a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS",
                        subscriptions: e.body
                    }), e
                } catch (e) {
                    throw a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_FETCH_FAIL"
                    }), e
                }
            }
            async function X() {
                a.default.wait(() => {
                    a.default.dispatch({
                        type: "BILLING_PERKS_RELEVANCE_FETCH_START"
                    })
                });
                try {
                    let e = await u.default.get(p.Endpoints.BILLING_PERKS_RELEVANCE);
                    a.default.dispatch({
                        type: "BILLING_PERKS_RELEVANCE_FETCH_SUCCESS",
                        res: e.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "BILLING_PERKS_RELEVANCE_FETCH_FAIL"
                    })
                }
            }
            async function J() {
                try {
                    let e = await u.default.get(p.Endpoints.BILLING_NITRO_AFFINITY);
                    a.default.dispatch({
                        type: "BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED",
                        res: e.body.map(e => new E.default(e))
                    })
                } finally {
                    a.default.dispatch({
                        type: "BILLING_NITRO_AFFINITY_FETCHED"
                    })
                }
            }
            async function z() {
                a.default.wait(() => {
                    a.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START"
                    })
                });
                try {
                    let e = await u.default.get({
                        url: p.Endpoints.BILLING_SUBSCRIPTIONS,
                        query: {
                            include_inactive: !0,
                            limit: 2,
                            exclude_unpaid_statuses: !0,
                            subscription_type: C.SubscriptionTypes.PREMIUM
                        },
                        oldFormErrors: !0
                    });
                    return e.ok ? (a.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS",
                        subscription: e.body.length > 0 ? e.body[0] : null
                    }), a.default.dispatch({
                        type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS",
                        subscription: e.body.length > 1 ? e.body[1] : null
                    })) : a.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL"
                    }), e
                } catch (e) {
                    a.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL"
                    })
                }
            }
            async function Q(e) {
                let {
                    items: t,
                    paymentSource: n,
                    trialId: r,
                    code: i,
                    currency: l,
                    metadata: s,
                    referralCode: E,
                    loadId: _
                } = e;
                a.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_START"
                }), t = (0, S.coerceExistingItemsToNewItemInterval)(t);
                let c = null;
                if (null != n && C.ADYEN_PAYMENT_SOURCES.has(n.type)) {
                    let e = await eN(n.type);
                    c = u.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
                }
                try {
                    let e = await u.default.post({
                        url: p.Endpoints.BILLING_SUBSCRIPTIONS,
                        body: {
                            items: t.map(e => {
                                let {
                                    planId: t,
                                    quantity: n
                                } = e;
                                return {
                                    plan_id: t,
                                    quantity: n
                                }
                            }),
                            payment_source_id: null != n ? n.id : null,
                            payment_source_token: null != n ? await K(n) : null,
                            trial_id: r,
                            return_url: c,
                            code: i,
                            currency: null != n ? l : C.CurrencyCodes.USD,
                            metadata: s,
                            gateway_checkout_context: await (0, I.createGatewayCheckoutContext)(n),
                            purchase_token: (0, T.getPurchaseToken)(),
                            referral_code: E,
                            load_id: _
                        },
                        oldFormErrors: !0
                    });
                    return a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                        subscription: e.body
                    }), {
                        subscription: e.body,
                        redirectConfirmation: !1
                    }
                } catch (t) {
                    let e = t instanceof o.BillingError ? t : new o.BillingError(t);
                    if (e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: e
                    }), e;
                    if (!t.body.payment_id) throw v("payment id cannot be null on redirected confirmations.");
                    return $(t.body, n)
                }
            }
            async function j(e, t, n, r) {
                let i = null;
                if (null != n && C.PREPAID_PAYMENT_SOURCES.has(n.type)) {
                    let e = await eN(n.type);
                    i = u.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
                }
                try {
                    let l = await u.default.post({
                        url: p.Endpoints.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
                        body: {
                            payment_source_id: null != n ? n.id : null,
                            payment_source_token: null != n ? await K(n) : null,
                            return_url: i,
                            currency: r
                        },
                        oldFormErrors: !0
                    });
                    return a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                        subscription: l.body
                    }), {
                        subscription: l.body,
                        redirectConfirmation: p.REDIRECTED_PAYMENT_SOURCES.has(n.type)
                    }
                } catch (t) {
                    let e = t instanceof o.BillingError ? t : new o.BillingError(t);
                    if (e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: e
                    }), e;
                    if (!t.body.payment_id) throw v("payment id cannot be null on redirected confirmations.");
                    return $(t.body, n)
                }
            }

            function $(e, t) {
                return null != t && C.ADYEN_PAYMENT_SOURCES.has(t.type) ? ee(e.adyen_redirect_url, t) : et(e.payment_id, t)
            }
            async function ee(e, t) {
                if (null == e) throw v("redirect url cannot be null on a redirect for adyen.");
                if (null == t) throw v("Payment source cannot be null on a redirect.");
                return p.REDIRECTED_PAYMENT_SOURCES.has(t.type) ? (ei(e), {
                    redirectConfirmation: !0,
                    redirectURL: e
                }) : {
                    redirectConfirmation: !1,
                    redirectURL: e
                }
            }
            async function et(e, t) {
                let n = await f.getStripe();
                if (null == t) throw v("Payment source cannot be null on a redirect.");
                let {
                    clientSecret: r,
                    paymentMethodId: i
                } = await L(e);
                if (null == n) throw v("Stripe cannot be null on a redirect.");
                if (p.REDIRECTED_PAYMENT_SOURCES.has(t.type)) {
                    let e = await eN(t.type);
                    return ei(await eu({
                        stripe: n,
                        paymentSource: t,
                        clientSecret: r,
                        state: e
                    })), {
                        redirectConfirmation: !0
                    }
                }
                return await el({
                    stripe: n,
                    clientSecret: r,
                    paymentMethodId: i,
                    paymentSource: t
                }), {
                    redirectConfirmation: !1
                }
            }
            async function en(e) {
                var t;
                let n = await q(e);
                if ((null == n ? void 0 : n.body) == null) throw v("could not fetch payment");
                let r = s.default.createFromServer(n.body.payment_source);
                if (!p.REDIRECTED_PAYMENT_SOURCES.has(r.type)) throw v("unsupported redirect payment source");
                if ((null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.status) === C.PaymentStatusTypes.FAILED) throw v("payment failed");
                return r.paymentGateway !== p.PaymentGateways.STRIPE || er(e)
            }
            async function er(e) {
                let t = await f.getStripe();
                if (null == t) throw v("Stripe has not loaded.");
                if (null == e) throw v("payment intent id cannot be null.");
                let n = await O(e),
                    {
                        paymentIntent: r,
                        error: i
                    } = await t.retrievePaymentIntent(n);
                if (null != i) throw v(i);
                if (null == r) throw v("paymentIntent not available with successful stripe call");
                if (null != r.last_payment_error) throw v("unable to retrieve payment intent ".concat(r.last_payment_error));
                return !0
            }

            function ei(e) {
                window.open(e)
            }
            async function el(e) {
                let t, {
                        stripe: n,
                        paymentSource: r,
                        paymentMethodId: i,
                        clientSecret: l
                    } = e,
                    u = {};
                if (r.type === C.PaymentSourceTypes.SEPA_DEBIT) {
                    if (null == i) throw v("On a sepa payment payment method id cannot be null");
                    u.payment_method = i, t = n.confirmSepaDebitPayment
                } else throw v("Unsupported redirected payment source type.");
                let {
                    paymentIntent: a,
                    error: o
                } = await t(l, u);
                if (null != o) throw v(o);
                if (null == a) throw v("paymentIntent not available with successful stripe call")
            }
            async function eu(e) {
                var t, n;
                let r, {
                        stripe: i,
                        paymentSource: l,
                        clientSecret: a,
                        state: o
                    } = e,
                    d = {};
                switch (l.type) {
                    case C.PaymentSourceTypes.GIROPAY:
                        d = {
                            billing_details: {
                                name: l.billingAddress.name
                            }
                        }, r = i.confirmGiropayPayment;
                        break;
                    case C.PaymentSourceTypes.BANCONTACT:
                        d = {
                            billing_details: {
                                name: l.billingAddress.name,
                                email: l.email
                            }
                        }, r = i.confirmBancontactPayment;
                        break;
                    case C.PaymentSourceTypes.SOFORT:
                        d = {
                            sofort: {
                                country: l.billingAddress.country
                            },
                            billing_details: {
                                name: l.billingAddress.name,
                                email: l.email
                            }
                        }, r = i.confirmSofortPayment;
                        break;
                    case C.PaymentSourceTypes.PRZELEWY24:
                        if (null == l.bank) throw v("PaymentSource (".concat(l.id, ") missing bank info for p24."));
                        d = {
                            p24: {
                                bank: l.bank
                            },
                            billing_details: {
                                name: l.billingAddress.name,
                                email: l.email
                            }
                        }, r = i.confirmP24Payment;
                        break;
                    case C.PaymentSourceTypes.EPS:
                        if (null == l.bank) throw v("PaymentSource (".concat(l.id, ") missing bank info for EPS."));
                        d = {
                            eps: {
                                bank: l.bank
                            },
                            billing_details: {
                                name: l.billingAddress.name
                            }
                        }, r = i.confirmEpsPayment;
                        break;
                    case C.PaymentSourceTypes.IDEAL:
                        if (null == l.bank) throw v("PaymentSource (".concat(l.id, ") missing bank info for iDEAL."));
                        d = {
                            ideal: {
                                bank: l.bank
                            },
                            billing_details: {
                                name: l.billingAddress.name
                            }
                        }, r = i.confirmIdealPayment;
                        break;
                    default:
                        throw v("Unsupported redirected payment source type.")
                }
                let {
                    paymentIntent: s,
                    error: E
                } = await r(a, {
                    payment_method: d,
                    return_url: u.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(l.type, null != o ? o : "", "success")
                }, {
                    handleActions: !1
                });
                if (null != E) throw v(E);
                if (null == s) throw v("paymentIntent not available with successful api call");
                if ((null === (n = s.next_action) || void 0 === n ? void 0 : null === (t = n.redirect_to_url) || void 0 === t ? void 0 : t.url) == null) throw v("confirm payment did not return a redirect url");
                return s.next_action.redirect_to_url.url
            }
            async function ea(e, t, n) {
                a.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_CANCEL_START"
                });
                try {
                    let r = await u.default.delete({
                        url: p.Endpoints.BILLING_SUBSCRIPTION(e),
                        query: {
                            location: n,
                            location_stack: t
                        },
                        oldFormErrors: !0
                    });
                    return a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS"
                    }), r
                } catch (t) {
                    let e = new o.BillingError(t);
                    throw a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_CANCEL_FAIL",
                        error: e
                    }), e
                }
            }

            function eo(e, t) {
                return ed(e, {
                    items: e.items
                }, t)
            }
            async function ed(e, t, n, r) {
                if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
                a.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_START"
                });
                try {
                    var i;
                    let l = {
                        status: t.status,
                        payment_source_id: null === (i = t.paymentSource) || void 0 === i ? void 0 : i.id,
                        payment_source_token: null != t.paymentSource ? await K(t.paymentSource) : null,
                        currency: t.currency,
                        gateway_checkout_context: await (0, I.createGatewayCheckoutContext)(t.paymentSource)
                    };
                    if (null != t.paymentSource && C.ADYEN_PAYMENT_SOURCES.has(t.paymentSource.type)) {
                        let e = await eN(t.paymentSource.type);
                        l.return_url = u.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, null != e ? e : "", "success")
                    }
                    null != t.items && (l.items = (0, S.coerceExistingItemsToNewItemInterval)(t.items).map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }));
                    let o = await u.default.patch({
                        url: p.Endpoints.BILLING_SUBSCRIPTION(e.id),
                        query: {
                            location: r,
                            location_stack: n
                        },
                        body: l,
                        oldFormErrors: !0
                    });
                    return a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                        subscription: o.body
                    }), {
                        subscription: o.body,
                        redirectConfirmation: !1
                    }
                } catch (n) {
                    let e = n instanceof o.BillingError ? n : new o.BillingError(n);
                    if (e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: e
                    }), e;
                    if (!n.body.payment_id) throw v("payment id cannot be null on redirected confirmations.");
                    return $(n.body, t.paymentSource)
                }
            }

            function es(e, t, n, r, i) {
                return ed(e, {
                    status: p.SubscriptionStatusTypes.ACTIVE,
                    paymentSource: n,
                    currency: r
                }, t, i)
            }

            function eE(e, t, n, r) {
                let i = (0, S.getItemsWithUpsertedPremiumPlanId)(e, t);
                return ed(e, {
                    status: p.SubscriptionStatusTypes.ACTIVE,
                    items: i
                }, n, r)
            }

            function e_(e, t, n, r) {
                return ed(e, {
                    currency: t
                }, n, r)
            }

            function ec(e, t, n, r, i) {
                return ed(e, {
                    paymentSource: t,
                    currency: n
                }, r, i)
            }

            function eI() {
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR"
                })
            }

            function eS() {
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR"
                })
            }

            function eT() {
                a.default.dispatch({
                    type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR"
                })
            }
            async function ef(e) {
                await u.default.post({
                    url: p.Endpoints.BILLING_PAYMENTS_VOID(e),
                    oldFormErrors: !0
                })
            }
            async function ep(e, t) {
                await u.default.post({
                    url: p.Endpoints.BILLING_PAYMENTS_REFUND(e),
                    body: {
                        reason: t
                    }
                })
            }
            async function eN(e) {
                let {
                    body: {
                        state: t
                    }
                } = await u.default.post({
                    url: p.Endpoints.BILLING_POPUP_BRIDGE(e),
                    oldFormErrors: !0
                });
                return a.default.dispatch({
                    type: "BILLING_POPUP_BRIDGE_STATE_UPDATE",
                    state: t,
                    paymentSourceType: e
                }), t
            }

            function eC(e) {
                let {
                    paymentSourceType: t,
                    state: n,
                    path: r,
                    query: i,
                    insecure: l
                } = e;
                return a.default.dispatch({
                    type: "BILLING_POPUP_BRIDGE_CALLBACK_START",
                    paymentSourceType: t
                }), u.default.post({
                    url: p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK(t),
                    body: {
                        state: n,
                        path: r,
                        query: i,
                        insecure: l
                    },
                    oldFormErrors: !0
                }).then(e => (a.default.dispatch({
                    type: "BILLING_POPUP_BRIDGE_CALLBACK_END",
                    paymentSourceType: t
                }), e))
            }
            async function eA() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!e && null != _.default.ipCountryCodeRequest) return _.default.ipCountryCodeRequest;
                try {
                    let e = u.default.get({
                        url: p.Endpoints.BILLING_COUNTRY_CODE
                    });
                    a.default.wait(() => a.default.dispatch({
                        type: "BILLING_IP_COUNTRY_CODE_FETCH_START",
                        request: e
                    }));
                    let t = await e,
                        n = t.body.country_code;
                    return a.default.dispatch({
                        type: "BILLING_SET_IP_COUNTRY_CODE",
                        countryCode: n
                    }), t
                } catch (e) {
                    return a.default.dispatch({
                        type: "BILLING_IP_COUNTRY_CODE_FAILURE"
                    }), e
                }
            }
            async function eR() {
                try {
                    let e = await u.default.get({
                        url: p.Endpoints.BILLING_LOCALIZED_PROMO
                    });
                    if (null != e.body.localized_pricing_promo) {
                        let t = e.body.localized_pricing_promo;
                        a.default.dispatch({
                            type: "BILLING_SET_LOCALIZED_PRICING_PROMO",
                            localizedPricingPromo: t
                        })
                    }
                    return e
                } catch (e) {
                    return a.default.dispatch({
                        type: "BILLING_LOCALIZED_PRICING_PROMO_FAILURE"
                    }), e
                }
            }

            function eh() {
                a.default.dispatch({
                    type: "RESET_PAYMENT_ID"
                })
            }

            function eO() {
                a.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_RESET"
                })
            }

            function eL(e) {
                a.default.dispatch({
                    type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED",
                    loadId: e
                })
            }
        },
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return E
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return _
                },
                fetchPremiumSubscriptionPlans: function() {
                    return c
                },
                resetSubscriptionPlanData: function() {
                    return I
                }
            }), n("222007");
            var r = n("872717"),
                i = n("913144"),
                l = n("333805"),
                u = n("160299"),
                a = n("745279"),
                o = n("850068"),
                d = n("49111"),
                s = n("646718");
            async function E(e, t, n, s, E) {
                i.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let l = {
                            url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        a = {};
                    null != t && (a.country_code = t), null != n && (a.payment_source_id = n), null != s && (a.include_unpublished = s), null != E && (a.revenue_surface = E), l.query = a, !u.default.ipCountryCodeLoaded && await (0, o.fetchIpCountryCode)();
                    let _ = await r.default.get(l);
                    i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: _.body
                    })
                } catch (t) {
                    throw i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, a.captureBillingException)(t), new l.default(t)
                }
            }

            function _(e, t) {
                return Promise.all(e.filter(e => e !== s.PremiumSubscriptionSKUs.NONE).map(e => E(e, t)))
            }

            function c(e, t, n) {
                return Promise.all(s.ACTIVE_PREMIUM_SKUS.filter(e => e !== s.PremiumSubscriptionSKUs.NONE).map(r => E(r, e, t, void 0, n)))
            }

            function I() {
                i.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M16.3 14.7a1 1 0 0 1 0-1.4l2.5-2.5a3.95 3.95 0 1 0-5.6-5.6l-2.5 2.5a1 1 0 1 1-1.4-1.4l2.5-2.5a5.95 5.95 0 1 1 8.4 8.4l-2.5 2.5a1 1 0 0 1-1.4 0ZM7.7 9.3a1 1 0 0 1 0 1.4l-2.5 2.5a3.95 3.95 0 0 0 5.6 5.6l2.5-2.5a1 1 0 1 1 1.4 1.4l-2.5 2.5a5.95 5.95 0 0 1-8.4-8.4l2.5-2.5a1 1 0 0 1 1.4 0Z",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M14.7 10.7a1 1 0 1 0-1.4-1.4l-4 4a1 1 0 0 0 1.4 1.4l4-4Z",
                        className: a
                    })]
                })
            }
        },
        769846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), (r = i || (i = {})).CHANNEL_CHAT_RESIZABLE_SIDEBAR_RESIZE_HANDLE_WIDTH = "8px", r.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE = "485px", r.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH = "224px", r.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN = "10px", r.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH = "305px", r.ACTIVITIES_HOME_HAPPENING_NOW_GAP = "16px", r.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH = "356px", r.FOLDER_ITEM_ANIMATION_DURATION = "150ms", r.FOLDER_ITEM_GUILD_ICON_SIZE = "48px", r.GUILD_TOOLTIP_ICON_SIZE = "20px", r.GUILD_TOOLTIP_ICON_SIZE_V_2 = "16px", r.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING = "2px", r.FULL_SCREEN_LAYER_ANIMATION_DURATION = "150ms", r.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP = "7px", r.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS = "76px", r.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING = "2px", r.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN = "0", r.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING = "8px", r.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE = "32px", r.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN = "8px", r.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE = "24px", r.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px", r.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px", r.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL = "360px", r.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM = "446px", r.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP = "0", r.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS = "8px", r.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT = "0", r.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM = "0", r.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT = "8px", r.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT = "30px", r.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS = "96px", r.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL = "80px", r.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING = "2px", r.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN = "12px", r.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT = "54px", r.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT = "32px", r.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS = "28px", r.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS = "32px", r.STICKERS_CONSTANTS_STICKER_DIMENSION = "160px", r.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL = "4px", r.ASPECT_STABLE_IMAGE_CONTAINER_PADDING = "20px", r.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING = "4px", r.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH = "340px", r.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH = "280px", r.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT = "120px", r.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT = "90px", r.USER_BANNER_BANNER_HEIGHT_POPOUT = "60px", r.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE = "212px", r.USER_BANNER_BANNER_HEIGHT_PROFILE = "106px", r.USER_BANNER_BANNER_HEIGHT_POMELO = "64px", r.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS = "100px", r.USER_BANNER_BANNER_HEIGHT_PANEL = "120px", r.USER_BANNER_CANCEL_MODAL_HEIGHT = "42px", r.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH = "24px", r.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE = "16px", r.ACTIVITY_SHELF_MODAL_MODAL_PADDING = "80px", r.ACTIVITY_SHELF_MODAL_MODAL_WIDTH = "496px", r.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH = "496px", r.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH = "1024px", r.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT = "720px", r.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT = "64px", r.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT = "230px", r.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT = "143px", r.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP = "16px", r.LIVE_INDICATOR_BORDER_RADIUS = "16px", r.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH = "119px", r.FOLDER_ITEM_GUILD_ICON_MARGIN = "8px", r.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE = "288px", r.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL = "225px", r.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH = "576px", r.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE = "80px", r.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE = "48px", r.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH = "1024px", r.GUILD_COUNT_SMALL_ICON_SIZE = "16px", r.GUILD_COUNT_LARGE_ICON_SIZE = "20px", r.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN = "12px", r.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE = "196px", r.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE = "40px", r.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL = "4px", r.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT = "8px", r.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE = "32px", r.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL = "8px", r.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE = "24px", r.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL = "2px", r.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING = "4px", r.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px", r.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px", r.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL = "4px", r.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE = "24px", r.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP = "0", r.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT = "0", r.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM = "8px", r.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP = "8px", r.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM = "12px", r.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT = "54px", r.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP = "16px", r.VOICE_WIDGET_TOP_MARGIN = "var(--custom-widget-bar-height) + calc(2 * var(--custom-widget-bar-padding))", r.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING = "8px", r.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE = "48px", r.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN = "8px", r.COLLECTION_GALLERY_MEDIA_BREAKPOINT = "1024px", r.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT = "600px", r.COLLECTION_GALLERY_ROW_CARD_HEIGHT = "283px", r.COLLECTION_LIST_CARD_GAP = "16px", r.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH = "520px", r.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE = "40px", r.ROLE_ICON_UPLOADER_ICON_SIZE = "24px", r.GRADIENT_PROGRESS_NOTCH_WIDTH = "8px", r.GAME_LIST_ROW_MIN_HEIGHT = "62px", r.GAME_LIST_LINKED_TO_GLOW_DURATION = "2000ms", r.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH = "320px", r.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH = "1280px", r.INTERACTION_IFRAME_MODAL_MODAL_MARGIN = "80px", r.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT = "52px", r.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE = "122px";
            var r, i, l = i
        },
        49978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("424973"), n("222007"), n("808653");
            var r, i = n("917351"),
                l = n.n(i),
                u = n("862337");
            class a {
                acknowledge(e) {
                    this._unacknowledgedRequests.delete(e), this._pendingRequests.delete(e)
                }
                flushRequests(e) {
                    if (0 === this._pendingRequests.size) return;
                    let t = [];
                    this._pendingRequests.forEach(e => {
                        !this._guildMemberExists(e) && (this._unacknowledgedRequests.add(e), this._sentRequests.add(e), t.push(e))
                    }), t.length > 0 && e(this._guildId, t), this._pendingRequests.clear()
                }
                requestUnacknowledged() {
                    return 0 !== this._unacknowledgedRequests.size && (this._unacknowledgedRequests.forEach(e => {
                        this._guildMemberExists(e) ? this._unacknowledgedRequests.delete(e) : this._pendingRequests.add(e)
                    }), 0 !== this._pendingRequests.size && void 0)
                }
                request(e) {
                    if (this._guildMemberExists(e) || this._sentRequests.has(e) || this._pendingRequests.has(e)) return !1;
                    this._pendingRequests.add(e)
                }
                constructor(e, t) {
                    this._pendingRequests = new Set, this._sentRequests = new Set, this._unacknowledgedRequests = new Set, this._guildId = e, this._guildMemberExists = n => t(e, n)
                }
            }
            r = class {
                reset() {
                    this._guildStates = {}, this._flush.cancel()
                }
                request(e, t) {
                    !1 !== this._getGuildState(e).request(t) && this._flush.delay(!1)
                }
                acknowledge(e, t) {
                    this._getGuildState(e).acknowledge(t)
                }
                flushRequests() {
                    l.forEach(this._guildStates, e => e.flushRequests(this._onChange))
                }
                requestUnacknowledged() {
                    let e = l.reduce(this._guildStates, (e, t) => !1 !== t.requestUnacknowledged() || t, !1);
                    e && this._flush.delay()
                }
                _getGuildState(e) {
                    let t = this._guildStates[e];
                    return null == t && (t = this._guildStates[e] = new a(e, this._guildMemberExists)), t
                }
                constructor(e, t) {
                    this._guildStates = {}, this._flush = new u.DelayedCall(0, () => this.flushRequests()), this._guildMemberExists = e, this._onChange = t
                }
            }
        },
        810793: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ActivityBookmarkEmbedExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-04_activity_launcher_embed",
                label: "Activity Launcher Embed",
                defaultConfig: {
                    activityBookmarkEmbedEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable the Activity Launcher Embed in chat",
                    config: {
                        activityBookmarkEmbedEnabled: !0
                    }
                }]
            })
        },
        422487: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                StripeErrorTypes: function() {
                    return l
                }
            });
            let l = ["api_connection_error", "api_error", "authentication_error", "card_error", "idempotency_error", "invalid_request_error", "rate_limit_error", "validation_error"];
            (i = r || (r = {})).CREATE = "create", i.CANCEL = "cancel", i.RESUBSCRIBE = "resubscribe", i.CHARGE = "charge"
        },
        246846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });

            function r(e, t) {
                return "".concat(e.toLowerCase().padEnd(32, "!")).concat(t.id)
            }
        },
        364480: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.replace(/[\s-~]+/g, "-").replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase()
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738")
        },
        139514: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                CodedLinkType: function() {
                    return r
                }
            }), (i = r || (r = {})).INVITE = "INVITE", i.TEMPLATE = "TEMPLATE", i.BUILD_OVERRIDE = "BUILD_OVERRIDE", i.EVENT = "EVENT", i.CHANNEL_LINK = "CHANNEL_LINK", i.APP_DIRECTORY_PROFILE = "APP_DIRECTORY_PROFILE", i.ACTIVITY_BOOKMARK = "ACTIVITY_BOOKMARK", i.EMBEDDED_ACTIVITY_INVITE = "EMBEDDED_ACTIVITY_INVITE", i.GUILD_PRODUCT = "GUILD_PRODUCT", i.SERVER_SHOP = "SERVER_SHOP", i.CLYDE_PROFILE = "CLYDE_PROFILE"
        },
        312016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                remainingPathFromDiscordHostMatch: function() {
                    return b
                },
                default: function() {
                    return x
                },
                parseURLSafely: function() {
                    return F
                },
                findCodedLink: function() {
                    return V
                }
            }), n("781738"), n("222007"), n("424973");
            var r, i, l, u, a, o, d = n("746379"),
                s = n("810793");
            n("355025");
            var E = n("9294");
            n("42793");
            var _ = n("337543"),
                c = n("655518"),
                I = n("253981"),
                S = n("139514"),
                T = n("49111");
            let f = /^\/([a-zA-Z0-9-]+)$/,
                p = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
                N = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
                C = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
                A = /^\/application-directory\/([0-9-]+)\/?$/,
                R = /^\/activities\/([0-9-]+)\/?$/,
                h = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
                O = /^\/channels\/([0-9]+)\/shop$/,
                L = /^\/clyde-profiles\/([0-9-]+)\/?$/,
                g = w(window.GLOBAL_ENV.INVITE_HOST),
                P = w(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
                m = w(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : "//canary.".concat(T.PRIMARY_DOMAIN)),
                y = w("//canary.".concat(T.PRIMARY_DOMAIN)),
                v = w("//ptb.".concat(T.PRIMARY_DOMAIN)),
                D = w("discordapp.com"),
                U = w("discord.com"),
                M = [c.default.escape(null !== (i = g.host) && void 0 !== i ? i : ""), c.default.escape(null !== (l = P.host) && void 0 !== l ? l : ""), c.default.escape(null !== (u = m.host) && void 0 !== u ? u : ""), c.default.escape(null !== (a = D.host) && void 0 !== a ? a : ""), c.default.escape(null !== (o = U.host) && void 0 !== o ? o : "")].filter(Boolean),
                G = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(M.join("|"), ")"), "g");

            function w(e) {
                if (null == e) return {
                    host: null,
                    pathPrefix: null
                };
                if (e.indexOf("/") >= 0) {
                    let t = (0, d.parse)(e, void 0, !0);
                    return {
                        host: t.host,
                        pathPrefix: t.pathname
                    }
                }
                return {
                    host: e,
                    pathPrefix: null
                }
            }

            function B(e, t) {
                var n, r, i;
                if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
                let l = null !== (r = t.pathname) && void 0 !== r ? r : "",
                    u = null !== (i = e.pathPrefix) && void 0 !== i ? i : "";
                if (!l.startsWith(u)) return null;
                let a = l.substring(u.length);
                return "" === a ? null : a
            }

            function b(e) {
                var t, n, r, i;
                return null !== (i = null !== (r = null !== (n = null !== (t = B(m, e)) && void 0 !== t ? t : B(y, e)) && void 0 !== n ? n : B(v, e)) && void 0 !== r ? r : B(D, e)) && void 0 !== i ? i : B(U, e)
            }

            function x(e) {
                if (null == e) return [];
                let t = new Set,
                    n = [];
                e = e.replace(G, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e);
                let r = e.match(I.default.URL_REGEX);
                if (null == r) return [];
                for (let e of r) {
                    var i, l, u, a;
                    if (n.length >= 10) break;
                    let r = F(e);
                    if (null == r || null == r.pathname) continue;
                    let o = B(g, r),
                        d = B(P, r),
                        c = null !== (a = null !== (u = null !== (l = null !== (i = B(m, r)) && void 0 !== i ? i : B(y, r)) && void 0 !== l ? l : B(v, r)) && void 0 !== u ? u : B(D, r)) && void 0 !== a ? a : B(U, r),
                        I = (e, r) => {
                            !t.has(r) && (t.add(r), n.push({
                                type: e,
                                code: r
                            }))
                        };
                    if ((null == o ? void 0 : o.match(f)) != null) {
                        let e = (0, E.generateInviteKeyFromUrlParams)(o.substring(1), r.search);
                        _.default.getInvite(e), I(S.CodedLinkType.INVITE, e)
                    }(null == d ? void 0 : d.match(f)) != null && I(S.CodedLinkType.TEMPLATE, d.substring(1));
                    let T = null == c ? void 0 : c.match(N);
                    if (null != T) {
                        let e = T[1].toUpperCase();
                        if (e === S.CodedLinkType.INVITE) {
                            let e = (0, E.generateInviteKeyFromUrlParams)(T[2], r.search);
                            I(S.CodedLinkType.INVITE, e)
                        } else I(e, T[2])
                    }(null == c ? void 0 : c.match(p)) != null && I(S.CodedLinkType.CHANNEL_LINK, c.replace("/channels/", ""));
                    let M = function(e) {
                        if (null == e) return null;
                        let t = e.match(C);
                        return null != t && t.length >= 4 ? {
                            guildId: t[1],
                            guildEventId: t[2],
                            recurrenceId: t[4]
                        } : null
                    }(r.pathname);
                    null != M && I(S.CodedLinkType.EVENT, "".concat(M.guildId, "-").concat(M.guildEventId) + (null != M.recurrenceId ? "-".concat(M.recurrenceId) : ""));
                    let G = null == c ? void 0 : c.match(A);
                    if (null != G) {
                        let e = G[1];
                        I(S.CodedLinkType.APP_DIRECTORY_PROFILE, e)
                    }
                    let w = null == c ? void 0 : c.match(L);
                    if (null != w) {
                        let e = w[1];
                        I(S.CodedLinkType.CLYDE_PROFILE, e)
                    }
                    let b = null == c ? void 0 : c.match(R),
                        {
                            activityBookmarkEmbedEnabled: x
                        } = s.ActivityBookmarkEmbedExperiment.getCurrentConfig({
                            location: "78afcf_1"
                        }, {
                            autoTrackExposure: !1
                        });
                    if (null != b && x) {
                        let e = b[1];
                        I(S.CodedLinkType.ACTIVITY_BOOKMARK, e)
                    }
                    let V = null == c ? void 0 : c.match(h);
                    null != V && I(S.CodedLinkType.GUILD_PRODUCT, "".concat(V[1], "-").concat(V[2]));
                    let H = null == c ? void 0 : c.match(O);
                    null != H && I(S.CodedLinkType.SERVER_SHOP, H[1])
                }
                return n
            }

            function F(e) {
                try {
                    return (0, d.parse)(e)
                } catch (e) {
                    return null
                }
            }

            function V(e) {
                return x(e)[0]
            }
        },
        223913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canStreamInChannel: function() {
                    return T
                },
                getStreamCTAString: function() {
                    return f
                },
                canWatchStream: function() {
                    return p
                },
                useCanWatchStream: function() {
                    return N
                },
                getStreamEligibleChannels: function() {
                    return C
                }
            }), n("424973"), n("222007");
            var r, i, l = n("316693"),
                u = n("446674"),
                a = n("76393"),
                o = n("923959"),
                d = n("305961"),
                s = n("957255"),
                E = n("800762"),
                _ = n("404008"),
                c = n("49111"),
                I = n("782340");
            let S = (e, t) => e.isPrivate() || t.can(l.default.combine(c.Permissions.CONNECT, c.Permissions.VIEW_CHANNEL), e);

            function T(e, t, n) {
                var r;
                let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                if (e.isPrivate()) return !0;
                let l = t.getGuild(e.getGuildId()),
                    u = null !== (r = null == l ? void 0 : l.maxStageVideoChannelUsers) && void 0 !== r ? r : 0;
                return (!e.isGuildStageVoice() || !(u <= 0)) && (!i || !!S(e, n)) && !!n.can(c.Permissions.STREAM, e) && null != l && l.afkChannelId !== e.id && !0
            }

            function f(e) {
                switch (e) {
                    case 0:
                        return I.default.Messages.CONSOLE_STREAM_UNAVAILABLE;
                    case 1:
                        return I.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
                    case 2:
                        return I.default.Messages.STREAM_NO_PERMISSION_CTA;
                    default:
                        return I.default.Messages.WATCH_STREAM
                }
            }

            function p(e, t, n, r, i) {
                let l;
                if (null == e) return [!1, 2];
                let u = t.isInChannel(e.id),
                    a = (0, _.isChannelFull)(e, t, n),
                    o = S(e, r),
                    d = null != i.getAwaitingRemoteSessionInfo() || null != i.getRemoteSessionId();
                d ? l = 0 : o || u ? a && !u && (l = 1) : l = 2;
                let s = !__OVERLAY__ && !d && (u || o && !a);
                return [s, l]
            }

            function N(e) {
                return (0, u.useStateFromStoresArray)([E.default, d.default, s.default, a.default], () => p(e, E.default, d.default, s.default, a.default))
            }

            function C(e, t, n) {
                let r = [];
                for (let {
                        channel: i
                    }
                    of e[o.GUILD_VOCAL_CHANNELS_KEY]) T(i, t, n) && r.push(i);
                return r
            }(i = r || (r = {}))[i.REMOTE_MODE = 0] = "REMOTE_MODE", i[i.CHANNEL_FULL = 1] = "CHANNEL_FULL", i[i.NO_PERMISSION = 2] = "NO_PERMISSION"
        },
        537429: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("353927");

            function i(e) {
                return e.supportsInApp(r.Features.VIDEO)
            }
        },
        398604: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StaticGuildEventIndexes: function() {
                    return E
                },
                scheduledEventSort: function() {
                    return _
                },
                isGuildScheduledEventActive: function() {
                    return m
                },
                isEventUpcoming: function() {
                    return y
                },
                isGuildEventEnded: function() {
                    return v
                },
                default: function() {
                    return U
                }
            }), n("424973"), n("222007");
            var r = n("917351"),
                i = n.n(r),
                l = n("446674"),
                u = n("407846"),
                a = n("913144"),
                o = n("271938"),
                d = n("26989"),
                s = n("745049");
            let E = {
                EVENT: "event",
                EVENT_ACTIVE: "active",
                EVENT_UPCOMING: "event-upcoming",
                GUILD_EVENT: e => "".concat(e, "-").concat(E.EVENT),
                GUILD_EVENT_ACTIVE: e => "".concat(e, "-").concat(E.EVENT_ACTIVE),
                GUILD_EVENT_UPCOMING: e => "".concat(e, "-").concat(E.EVENT_UPCOMING),
                CHANNEL_EVENT: e => "".concat(e, "-").concat(E.EVENT),
                CHANNEL_EVENT_ACTIVE: e => "".concat(e, "-").concat(E.EVENT_ACTIVE),
                CHANNEL_EVENT_UPCOMING: e => "".concat(e, "-").concat(E.EVENT_UPCOMING)
            };

            function _(e) {
                let {
                    id: t,
                    scheduled_start_time: n
                } = e, r = m(e) ? "\x00" : "\x01";
                return "".concat(r, "-").concat(new Date(n).getTime(), "-").concat(t)
            }
            let c = new u.default(e => {
                    let {
                        guild_id: t,
                        entity_id: n,
                        channel_id: r
                    } = e, i = [t];
                    return null != n && i.push(n), i.push(E.GUILD_EVENT(t)), null != r && i.push(E.CHANNEL_EVENT(r)), m(e) && (i.push(E.EVENT_ACTIVE), i.push(E.GUILD_EVENT_ACTIVE(t)), null != r && i.push(E.CHANNEL_EVENT_ACTIVE(r))), y(e) && (i.push(E.EVENT_UPCOMING), i.push(E.GUILD_EVENT_UPCOMING(t)), null != r && i.push(E.CHANNEL_EVENT_UPCOMING(r))), i
                }, _),
                I = 0,
                S = [],
                T = "SERIES",
                f = {},
                p = {};

            function N(e) {
                c.set(e.id, e), I += 1
            }

            function C(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                c.delete(e), delete f[e], t && delete p[e], I += 1
            }

            function A(e) {
                return null != e ? e : T
            }

            function R(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = e.guild_scheduled_event_id;
                null == f[r] && (f[r] = {});
                let i = A(e.guild_scheduled_event_exception_id);
                null == f[r][i] && (f[r][i] = {}), f[r][i][e.user_id] = e, t && function(e) {
                    var t, n;
                    let r = A(e.guild_scheduled_event_exception_id),
                        i = null !== (n = null === (t = p[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                        l = null != e.guild_scheduled_event_exception_id && e.response === s.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === s.GuildScheduledEventUserResponses.INTERESTED ? 1 : -1;
                    O(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + l)
                }(e), n && (I += 1)
            }

            function h(e) {
                var t, n, r, i;
                let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    u = A(e.guild_scheduled_event_exception_id),
                    a = (null === (n = f[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[u]) || void 0 === t ? void 0 : t[e.user_id]) != null,
                    d = e.user_id === o.default.getId();
                (a || !d) && (null === (i = f[e.guild_scheduled_event_id]) || void 0 === i || null === (r = i[u]) || void 0 === r || delete r[e.user_id], function(e) {
                    var t, n;
                    let r = A(e.guild_scheduled_event_exception_id),
                        i = null !== (n = null === (t = p[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                        l = null != e.guild_scheduled_event_exception_id && e.response === s.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === s.GuildScheduledEventUserResponses.INTERESTED ? -1 : 1;
                    O(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + l)
                }(e), l && (I += 1))
            }

            function O(e, t, n) {
                let r = A(t);
                null == p[e] && (p[e] = {}), p[e][r] = n
            }

            function L(e, t) {
                c.values(E.GUILD_EVENT(e)).forEach(e => C(e.id, t))
            }

            function g(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return N(t), !0
            }

            function P(e) {
                let {
                    eventException: t
                } = e, n = c.get(t.event_id);
                if (null == n) return !1;
                let r = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
                    i = [...n.guild_scheduled_event_exceptions];
                return r < 0 ? i.push(t) : i[r] = t, N({
                    ...n,
                    guild_scheduled_event_exceptions: i
                }), !0
            }

            function m(e) {
                var t;
                return null != e && (t = (null == e ? void 0 : e.status) === s.GuildScheduledEventStatus.ACTIVE, t)
            }

            function y(e) {
                return !s.GuildScheduledEventStatusDone.has(e.status)
            }

            function v(e) {
                return null != e && s.GuildScheduledEventStatusDone.has(e.status)
            }
            class D extends l.default.Store {
                getGuildScheduledEvent(e) {
                    var t;
                    return null == e ? null : null !== (t = c.get(e)) && void 0 !== t ? t : null
                }
                getGuildEventCountByIndex(e) {
                    return c.size(e)
                }
                getGuildScheduledEventsForGuild(e) {
                    return null == e ? [] : c.values(e)
                }
                getGuildScheduledEventsByIndex(e) {
                    return c.values(e)
                }
                getRsvpVersion() {
                    return I
                }
                getRsvp(e, t, n) {
                    var r, i;
                    if (null == e) return null;
                    let l = A(t);
                    return null === (i = f[e]) || void 0 === i ? void 0 : null === (r = i[l]) || void 0 === r ? void 0 : r[n]
                }
                isInterestedInEventRecurrence(e, t) {
                    let n = o.default.getId(),
                        r = this.getRsvp(e, null, n),
                        i = this.getRsvp(e, t, n),
                        l = (null == r ? void 0 : r.response) === s.GuildScheduledEventUserResponses.INTERESTED,
                        u = (null == i ? void 0 : i.response) === s.GuildScheduledEventUserResponses.INTERESTED,
                        a = (null == i ? void 0 : i.response) === s.GuildScheduledEventUserResponses.UNINTERESTED;
                    return l && !a || u
                }
                getUserCount(e, t) {
                    var n, r, i, l;
                    if (null == e) return 0;
                    let u = null !== (i = null === (n = p[e]) || void 0 === n ? void 0 : n[T]) && void 0 !== i ? i : 0;
                    if (null == t) return u;
                    let a = null !== (l = null === (r = p[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== l ? l : 0;
                    return u - a
                }
                hasUserCount(e, t) {
                    var n;
                    let r = A(t);
                    return (null === (n = p[e]) || void 0 === n ? void 0 : n[r]) != null
                }
                isActive(e) {
                    return null != e && m(c.get(e))
                }
                getActiveEventByChannel(e) {
                    if (null == e) return;
                    let t = this.getGuildScheduledEventsByIndex(E.CHANNEL_EVENT_ACTIVE(e));
                    return t[0]
                }
                getUsersForGuildEvent(e, t) {
                    var n, r;
                    if (null == e) return {};
                    let i = A(t);
                    return null !== (r = null === (n = f[e]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : {}
                }
            }
            D.displayName = "GuildScheduledEventStore";
            var U = new D(a.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        guilds: t
                    } = e;
                    return c.clear(), I = 0, f = {}, p = {}, S.forEach(N), t.forEach(e => e.guild_scheduled_events.forEach(e => N(e))), !0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return L(t.id, !1), t.guild_scheduled_events.forEach(e => N(e)), !0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return L(t.id, !0), !0
                },
                FETCH_GUILD_EVENT: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    N(t)
                },
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t,
                        guildScheduledEvents: n
                    } = e, r = c.values(E.GUILD_EVENT(t), !0).map(e => e.id), l = n.map(e => e.id);
                    for (let e of (i.difference(r, l).forEach(e => {
                            C(e)
                        }), n)) N(e);
                    return !0
                },
                GUILD_SCHEDULED_EVENT_CREATE: g,
                GUILD_SCHEDULED_EVENT_UPDATE: g,
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    return C(t.id), !0
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    var t, n;
                    let {
                        userId: r,
                        guildEventId: i,
                        guildId: l,
                        guildEventExceptionId: u,
                        response: a
                    } = e, o = A(u), s = null === (n = f[i]) || void 0 === n ? void 0 : null === (t = n[o]) || void 0 === t ? void 0 : t[r];
                    null != s && h(s, !1);
                    let E = d.default.getMember(l, r);
                    return R({
                        user_id: r,
                        guild_scheduled_event_id: i,
                        member: null != E ? E : {
                            guildId: l
                        },
                        guild_scheduled_event_exception_id: u,
                        response: a
                    }), !0
                },
                GUILD_SCHEDULED_EVENT_USER_REMOVE: function(e) {
                    let {
                        userId: t,
                        guildEventId: n,
                        guildEventExceptionId: r,
                        response: i
                    } = e;
                    h({
                        user_id: t,
                        guild_scheduled_event_id: n,
                        guild_scheduled_event_exception_id: r,
                        response: i
                    })
                },
                GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
                    let {
                        guildScheduledEventUsers: t
                    } = e;
                    return t.forEach(e => R(e, !1, !1)), I += 1, !0
                },
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
                    let {
                        guildScheduledEventUsers: t
                    } = e;
                    return t.forEach(e => R(e, !1, !1)), I += 1, !0
                },
                GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function(e) {
                    let {
                        eventId: t,
                        counts: n
                    } = e;
                    for (let e in O(t, null, n.eventCount), n.recurrenceCounts) O(t, e, n.eventCount - n.recurrenceCounts[e])
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    let {
                        invite: t
                    } = e, n = t.guild_scheduled_event;
                    return null != n && (N(n), !0)
                },
                GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: P,
                GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: P,
                GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
                    let {
                        eventException: t
                    } = e, n = c.get(t.event_id);
                    if (null == n) return !1;
                    let r = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
                    return N({
                        ...n,
                        guild_scheduled_event_exceptions: r
                    }), !0
                },
                GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function(e) {
                    let {
                        eventId: t
                    } = e, n = c.get(t);
                    return null != n && (N({
                        ...n,
                        guild_scheduled_event_exceptions: []
                    }), !0)
                },
                LOGOUT: function() {
                    return c.clear(), !0
                }
            })
        },
        89073: function(e, t, n) {
            "use strict";

            function r(e) {
                if (null == e) return !1;
                for (var t = 0; t < e.length; t++)
                    if (e[t].voiceState.selfStream) return !0;
                return !1
            }
            n.r(t), n.d(t, {
                hasStream: function() {
                    return r
                }
            })
        },
        91366: function(e, t, n) {
            "use strict";
            var r, i, l, u, a, o, d, s;
            n.r(t), n.d(t, {
                InviteTypes: function() {
                    return i
                },
                InviteTargetTypes: function() {
                    return l
                },
                InstantInviteModalPages: function() {
                    return u
                }
            }), (a = r || (r = {})).SENDING = "sending", a.SENT = "sent", a.ERROR = "error", (o = i || (i = {}))[o.GUILD = 0] = "GUILD", o[o.GROUP_DM = 1] = "GROUP_DM", o[o.FRIEND = 2] = "FRIEND", (d = l || (l = {}))[d.STREAM = 1] = "STREAM", d[d.EMBEDDED_APPLICATION = 2] = "EMBEDDED_APPLICATION", d[d.ROLE_SUBSCRIPTIONS_PURCHASE = 3] = "ROLE_SUBSCRIPTIONS_PURCHASE", (s = u || (u = {})).MAIN = "main", s.SETTINGS = "settings", s.GUEST = "guest"
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return u
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return d
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let l = "event";

            function u(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return a({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function a(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let u = r.parse(n),
                    a = (0, i.getFirstQueryStringValue)(u[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: a
                }
            }

            function d(e) {
                let [t] = e.split("?");
                return t
            }
        },
        42793: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteTypes: function() {
                    return l.InviteTypes
                },
                isGuildScheduledEventInviteEmbed: function() {
                    return u
                },
                isRoleSubscriptionInvite: function() {
                    return a
                },
                isStageInviteEmbed: function() {
                    return o
                },
                isStreamInvite: function() {
                    return d
                },
                isEmbeddedApplicationInvite: function() {
                    return s
                },
                getInviteType: function() {
                    return E
                }
            });
            var r = n("398604"),
                i = n("233069"),
                l = n("91366");

            function u(e) {
                let t = e.guild_scheduled_event;
                return null != t && (0, r.isEventUpcoming)(t)
            }

            function a(e) {
                return e.target_type === l.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE
            }

            function o(e) {
                return null != e.channel && null != e.stage_instance
            }

            function d(e) {
                return e.target_type === l.InviteTargetTypes.STREAM && null != e.target_user
            }

            function s(e) {
                return e.target_type === l.InviteTargetTypes.EMBEDDED_APPLICATION
            }

            function E(e) {
                var t, n;
                if ("number" == typeof e.type) return e.type;
                if ((t = e).type === l.InviteTypes.GROUP_DM || null != t.channel && (0, i.isMultiUserDM)(t.channel.type)) return l.InviteTypes.GROUP_DM;
                return (n = e).type === l.InviteTypes.FRIEND || null == n.guild && null != n.inviter ? l.InviteTypes.FRIEND : l.InviteTypes.GUILD
            }
        },
        361572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CHANNEL_OR_MESSAGES_URL_RE: function() {
                    return S
                },
                MEDIA_POST_URL_RE: function() {
                    return T
                },
                tryParseChannelPath: function() {
                    return f
                },
                tryParseEventDetailsPath: function() {
                    return p
                },
                canViewChannel: function() {
                    return N
                },
                isAccessibleChannelPath: function() {
                    return C
                }
            });
            var r = n("42203"),
                i = n("305961"),
                l = n("957255"),
                u = n("655518"),
                a = n("49111"),
                o = n("724210");
            let d = Array.from(o.StaticChannelRoutes).map(e => u.default.escape(e)).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)?(\\d+|").concat(d, ")?")),
                E = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)(\\d+|").concat(d, ")(?:/)(\\d+)")),
                _ = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                c = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                I = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
                S = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(a.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                T = RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function f(e) {
                if (null == e) return null;
                let t = e.match(E);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                let n = e.match(_);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                let r = e.match(s);
                if (null != r && r.length > 1) {
                    var i;
                    return {
                        guildId: r[1],
                        channelId: null !== (i = r[2]) && void 0 !== i ? i : void 0
                    }
                }
                let l = e.match(c);
                return null != l && l.length > 1 ? {
                    guildId: l[1]
                } : null
            }

            function p(e) {
                if (null == e) return null;
                let t = e.match(I);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2],
                    recurrenceId: t[3]
                } : null
            }

            function N(e) {
                return !!e.isPrivate() || l.default.can(a.Permissions.VIEW_CHANNEL, e)
            }

            function C(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                if (null == i.default.getGuild(t) && t !== a.ME) return !1;
                if (null == n) return !0;
                let l = r.default.getChannel(n);
                return null != l && N(l)
            }
        },
        711326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMediaPostEmbedCommonData: function() {
                    return _
                },
                getMediaPostEmbedChannelPath: function() {
                    return c
                },
                canUseMediaPostEmbed: function() {
                    return I
                }
            }), n("702976");
            var r = n("312016"),
                i = n("361572"),
                l = n("305961"),
                u = n("315102"),
                a = n("387111"),
                o = n("856220"),
                d = n("49111"),
                s = n("894488"),
                E = n("782340");

            function _(e) {
                var t, n, r, i, l;
                let {
                    mediaPostEmbedData: d,
                    guild: _,
                    parentChannel: c,
                    postThread: I,
                    user: S,
                    selectedGuildId: T,
                    canAccess: f = !1
                } = e;
                if (null == d) return null;
                let p = (0, o.getThumbnailImage)(d.thumbnail),
                    N = !f && d.has_media_attachment,
                    C = f ? E.default.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : E.default.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
                    A = null != S ? a.default.getName(d.guild_id, d.channel_id, S) : void 0,
                    R = null == S ? void 0 : S.getAvatarURL(null == _ ? void 0 : _.id, 40);
                (null == R || T !== d.guild_id) && (R = u.default.getGuildIconURL({
                    id: d.guild_id,
                    icon: d.guild_icon,
                    size: 40,
                    canAnimate: !1
                }));
                let h = function(e) {
                        if (null == e) return !1;
                        let {
                            height: t,
                            width: n
                        } = e;
                        return null != t && null != n && t >= n
                    }(d.thumbnail) && !N,
                    O = (null === (t = d.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (r = d.thumbnail) || void 0 === r ? void 0 : null === (n = r.filename) || void 0 === n ? void 0 : n.startsWith(s.SPOILER_ATTACHMENT_PREFIX));
                return {
                    title: null !== (i = d.title) && void 0 !== i ? i : "",
                    subtitle: d.description,
                    ctaText: C,
                    coverImage: p,
                    coverImageOverlayText: N ? E.default.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
                    parentChannelId: d.parent_channel_id,
                    threadId: d.channel_id,
                    postThread: I,
                    messageId: d.message_id,
                    canAccess: f,
                    guildId: d.guild_id,
                    guildName: null !== (l = null == _ ? void 0 : _.name) && void 0 !== l ? l : d.guild_name,
                    authorId: null == d ? void 0 : d.author_id,
                    authorName: A,
                    channelName: null == c ? void 0 : c.name,
                    avatarUrl: R,
                    shouldShowBlurredThumbnailImage: N,
                    shouldContainMediaWithBackground: h,
                    shouldSpoiler: O,
                    obscureAwaitingScan: !1,
                    flags: d.flags,
                    contentScanVersion: d.content_scan_version
                }
            }

            function c(e) {
                if (null == e) return;
                let t = (0, r.parseURLSafely)(e);
                if (null == t) return;
                let n = (0, r.remainingPathFromDiscordHostMatch)(t);
                if (null != n) return (0, i.tryParseChannelPath)(n)
            }

            function I(e, t) {
                let n = l.default.getGuild(e);
                if (null == n || null == t) return !1;
                let r = n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE) || n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
                    i = !0 === t.isMediaChannel();
                return i && r
            }
        },
        856220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_THUMBNAIL_COUNT: function() {
                    return i
                },
                getEmbedPreviewImageUrl: function() {
                    return l
                },
                getThumbnailImage: function() {
                    return u
                }
            });
            var r = n("651693");
            let i = 4;

            function l(e) {
                var t, n;
                if (null == e) return;
                let {
                    thumbnail: r,
                    image: i
                } = e;
                return null != r ? null !== (t = r.proxy_url) && void 0 !== t ? t : r.url : null != i ? null !== (n = i.proxy_url) && void 0 !== n ? n : i.url : void 0
            }

            function u(e) {
                if (null == e) return;
                let {
                    url: t,
                    proxy_url: n
                } = e;
                if (null != t && null != n) {
                    let e = (0, r.isVideoUrl)(t);
                    return e ? "".concat(n, "?format=jpeg") : n
                }
                return t
            }
        },
        488464: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Y
                }
            }), n("222007"), n("808653"), n("424973");
            var r = n("714617"),
                i = n.n(r),
                l = n("917351"),
                u = n.n(l),
                a = n("446674"),
                o = n("407846"),
                d = n("913144"),
                s = n("374014"),
                E = n("373469"),
                _ = n("271938"),
                c = n("42203"),
                I = n("305961"),
                S = n("957255"),
                T = n("27618"),
                f = n("280168"),
                p = n("697218"),
                N = n("800762"),
                C = n("316133"),
                A = n("998716"),
                R = n("325861"),
                h = n("834052");
            let O = "NO_GUILD",
                L = new o.default(e => [function(e) {
                    var t;
                    return null !== (t = e.getGuildId()) && void 0 !== t ? t : O
                }(e)], e => e.id),
                g = new Set,
                P = {};

            function m(e) {
                return L.values(null != e ? e : void 0, !0).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                })
            }

            function y(e) {
                !g.has(e) && (g.add(e), u(c.default.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
                    U(e) && L.set(e.id, e)
                }))
            }

            function v(e) {
                let t = P[e];
                if (null != t) return t;
                let n = c.default.getChannel(e);
                return null != n && n.isGuildStageVoice() ? (y(n.guild_id), U(n)) ? D(e) : null : null
            }

            function D(e) {
                let t = P[e];
                return null == t && (t = new A.default(e), P[e] = t, t.rebuild()), t
            }

            function U(e) {
                return null != e && e.isGuildStageVoice() && C.default.countVoiceStatesForChannel(e.id) > 0
            }

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m();
                return t.reduce((t, n) => {
                    let r = D(n),
                        i = e(r);
                    return i ? (! function(e, t) {
                        let n = c.default.getChannel(e);
                        null != n && n.isGuildStageVoice() ? 0 === t.size() ? w(n.id) : null == L.get(n.id) && L.set(n.id, n) : w(e)
                    }(n, r), !0) : t
                }, !1)
            }

            function G(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m();
                return M(t => t.updateParticipant(e), t)
            }

            function w(e) {
                return null != e && (delete P[e], L.delete(e), !0)
            }

            function B() {
                g.clear(), L.clear(), P = {}
            }

            function b(e, t, n) {
                if (null == n || e.has(n)) return;
                let r = c.default.getChannel(n);
                (null == r ? void 0 : r.isGuildStageVoice()) && (t.add(n), e.add(n))
            }

            function x(e) {
                let {
                    user: t
                } = e;
                return G(t.id)
            }

            function F(e) {
                let {
                    relationship: t
                } = e;
                return G(t.id)
            }

            function V(e) {
                let {
                    guild: t
                } = e;
                ! function(e) {
                    let t = L.values(e);
                    for (let e of t) L.delete(e.id), delete P[e.id];
                    g.delete(e)
                }(t.id)
            }

            function H(e) {
                let {
                    streamKey: t
                } = e, {
                    channelId: n,
                    guildId: r,
                    ownerId: i
                } = (0, s.decodeStreamKey)(t);
                return !!(null != r && g.has(r)) && G(i, [n])
            }
            let k = [];
            class K extends a.default.Store {
                initialize() {
                    this.waitFor(_.default, p.default, c.default, f.default, N.default, S.default, C.default, I.default, R.default, T.default, h.default, E.default)
                }
                getParticipantsVersion(e) {
                    var t, n;
                    return null == e ? -1 : null !== (n = null === (t = v(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
                }
                getMutableParticipants(e, t) {
                    var n, r;
                    return null == e ? k : null !== (r = null === (n = v(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== r ? r : k
                }
                getMutableRequestToSpeakParticipants(e) {
                    var t, n;
                    return null !== (n = null === (t = v(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : k
                }
                getRequestToSpeakParticipantsVersion(e) {
                    var t, n;
                    return null !== (n = null === (t = v(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
                }
                getParticipantCount(e, t) {
                    var n, r;
                    return null !== (r = null === (n = v(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== r ? r : 0
                }
                getChannels(e) {
                    return y(null != e ? e : O), L.values(null != e ? e : O)
                }
                getChannelsVersion() {
                    return L.version
                }
                getParticipant(e, t) {
                    var n, r;
                    return null !== (r = null === (n = v(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== r ? r : null
                }
            }
            K.displayName = "StageChannelParticipantStore";
            var Y = new K(d.default, {
                CONNECTION_OPEN: B,
                OVERLAY_INITIALIZE: B,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = new Set;
                    return t.reduce((e, t) => {
                        if (null == t.guildId || !g.has(t.guildId)) return e;
                        let r = new Set;
                        return (b(n, r, t.oldChannelId), b(n, r, t.channelId), 0 === r.size) ? e : G(t.userId, Array.from(r)) || e
                    }, !1)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return w(t)
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        members: t
                    } = e, n = !1;
                    for (let e of t) n = G(e.user.id) || n;
                    return n
                },
                USER_UPDATE: x,
                GUILD_MEMBER_REMOVE: x,
                GUILD_MEMBER_UPDATE: x,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = t.reduce((e, t) => {
                        if (!t.isGuildStageVoice() || !g.has(t.guild_id)) return e;
                        let n = L.get(t.id);
                        return null == n || i(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), L.set(t.id, t), e)
                    }, []);
                    return M(e => e.rebuild(), n), n.length > 0
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (g.has(t)) return M(e => e.rebuild(), m(t))
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        channelId: t,
                        guildId: n,
                        userId: r
                    } = e;
                    return !!(null != n && g.has(n)) && G(r, [t])
                },
                STREAM_CLOSE: H,
                STREAM_DELETE: H,
                RELATIONSHIP_ADD: F,
                RELATIONSHIP_REMOVE: F,
                GUILD_CREATE: V,
                GUILD_DELETE: V,
                PASSIVE_UPDATE_V1: function(e) {
                    let t = !1;
                    for (let n of m(e.guildId)) t = D(n).rebuild() || t;
                    return t
                }
            })
        },
        998716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageChannelParticipantNamedIndex: function() {
                    return r
                },
                StageChannelParticipantTypes: function() {
                    return i
                },
                default: function() {
                    return l
                }
            }), n("424973"), n("222007");
            var r, i, l, u, a, o = n("407846"),
                d = n("246846"),
                s = n("374014"),
                E = n("373469"),
                _ = n("42203"),
                c = n("124948"),
                I = n("26989"),
                S = n("27618"),
                T = n("697218"),
                f = n("800762"),
                p = n("387111"),
                N = n("325861"),
                C = n("834052"),
                A = n("808422"),
                R = n("922673"),
                h = n("49111");

            function O(e) {
                var t;
                let {
                    speaker: n,
                    role: r,
                    user: i,
                    userNick: l,
                    connectedOn: u,
                    voiceState: a,
                    type: o
                } = e, s = a.selfMute ? "\x01" : "\x00", E = a.selfVideo ? "\x00" : "\x01", _ = "".concat(null !== (t = null == r ? void 0 : r.position) && void 0 !== t ? t : 999).padStart(3, "0");
                return "".concat(n ? "\x00" : "\x01").concat("STREAM" === o ? "\x00" : "\x01").concat(s).concat(E).concat(_).concat(u).concat((0, d.default)(l, i))
            }

            function L(e) {
                let {
                    user: t,
                    voiceState: n
                } = e, r = n.requestToSpeakTimestamp;
                return null == r ? t.id : "".concat(Date.parse(r)).concat(t.id)
            }

            function g(e) {
                return e === A.RequestToSpeakStates.REQUESTED_TO_SPEAK || e === A.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }

            function P(e) {
                let {
                    speaker: t,
                    role: n,
                    rtsState: r,
                    blocked: i,
                    isFriend: l
                } = e, u = [];
                return g(r) && u.push("ALL_REQUESTED_TO_SPEAK"), r === A.RequestToSpeakStates.REQUESTED_TO_SPEAK && u.push("REQUESTED_TO_SPEAK_ONLY"), t ? u.push("SPEAKER") : (null != n ? u.push(n.id) : u.push("NO_ROLE"), u.push("AUDIENCE")), i && u.push("BLOCKED"), l && u.push("FRIEND"), u
            }(u = r || (r = {})).SPEAKER = "SPEAKER", u.AUDIENCE = "AUDIENCE", u.NO_ROLE = "NO_ROLE", u.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", u.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", u.BLOCKED = "BLOCKED", u.FRIEND = "FRIEND", u.SELECTED = "SELECTED", u.MEDIA = "MEDIA", (a = i || (i = {})).VOICE = "VOICE", a.STREAM = "STREAM", l = class {
                _getParticipantsForUser(e, t) {
                    var n, r;
                    let i;
                    let l = [],
                        u = f.default.getVoiceStateForChannel(this.channelId, e);
                    if (null == u) return l;
                    let a = T.default.getUser(e);
                    if (null == a) return null != this.guildId && C.default.isPublic(this.channelId) && c.default.requestMember(this.guildId, e), l;
                    let o = null != t ? t[0] : null,
                        d = {
                            user: a,
                            userNick: p.default.getName(this.guildId, this.channelId, a),
                            voiceState: u,
                            role: (0, R.getHighestHoistedRole)(this.guildId, e),
                            speaker: N.default.isSpeaker(e, this.channelId),
                            member: null != this.guildId ? I.default.getMember(this.guildId, e) : null,
                            blocked: S.default.getRelationships()[a.id] === h.RelationshipTypes.BLOCKED,
                            isFriend: S.default.isFriend(a.id),
                            connectedOn: null !== (n = null == o ? void 0 : o.connectedOn) && void 0 !== n ? n : Date.now()
                        },
                        _ = {
                            ...d,
                            type: "VOICE",
                            id: a.id,
                            rtsState: (0, A.getAudienceRequestToSpeakState)(u)
                        };
                    l.push(_);
                    let O = null !== (r = E.default.getStreamForUser(e, this.guildId)) && void 0 !== r ? r : E.default.getActiveStreamForUser(e, this.guildId);
                    if (null != O && O.channelId === this.channelId) {
                        let e = (0, s.encodeStreamKey)(O);
                        i = {
                            ...d,
                            id: e,
                            type: "STREAM",
                            rtsState: A.RequestToSpeakStates.NONE
                        }, l.push(i)
                    }
                    return l
                }
                updateParticipant(e) {
                    let t = this.participants[e],
                        n = this._getParticipantsForUser(e, t);
                    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
                        this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id)
                    }), n.forEach(t => {
                        this._participantsIndex.set(t.id, t), t.id === e && g(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e)
                    }), this.participants[e] = n, !0)
                }
                rebuild() {
                    let e = _.default.getChannel(this.channelId);
                    if (null == e || !e.isGuildStageVoice()) return !1;
                    let t = new Set(Object.keys(f.default.getVoiceStatesForChannel(e.id)));
                    return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), !0
                }
                get version() {
                    return this._participantsIndex.version
                }
                size(e) {
                    return this._participantsIndex.size(e)
                }
                toArray(e) {
                    return this._participantsIndex.values(e, !0)
                }
                getParticipant(e) {
                    var t;
                    return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null
                }
                get requestToSpeakVersion() {
                    return this._requestToSpeakIndex.version
                }
                getRequestToSpeakParticipants() {
                    return this._requestToSpeakIndex.values(void 0, !0)
                }
                constructor(e) {
                    var t;
                    this.participants = {}, this._participantsIndex = new o.default(P, O), this._requestToSpeakIndex = new o.default(() => [], L), this.channelId = e, this.guildId = null === (t = _.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
                }
            }
        },
        325861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007"), n("808653");
            var r, i, l = n("917351"),
                u = n.n(l),
                a = n("446674"),
                o = n("913144"),
                d = n("42203"),
                s = n("923959"),
                E = n("26989"),
                _ = n("305961"),
                c = n("697218"),
                I = n("800762"),
                S = n("991170"),
                T = n("923510"),
                f = n("808422");
            (i = r || (r = {})).SPEAKER = "speaker", i.MODERATOR = "moderator";
            let p = {},
                N = {
                    speaker: !1,
                    moderator: !1
                };

            function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                null == p[t] && (p[t] = {});
                let r = function(e, t) {
                    var n, r, i;
                    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        u = d.default.getChannel(t),
                        a = null == u ? void 0 : u.getGuildId(),
                        o = _.default.getGuild(a);
                    if (null == o || null == u || !u.isGuildStageVoice()) return N;
                    return {
                        speaker: function(e, t) {
                            let n = I.default.getVoiceStateForChannel(t, e);
                            return (0, f.getAudienceRequestToSpeakState)(n) === f.RequestToSpeakStates.ON_STAGE
                        }(e, t),
                        moderator: l ? (n = e, r = o, i = u, S.default.can({
                            permission: T.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                            user: n,
                            context: r,
                            overwrites: i.permissionOverwrites,
                            roles: r.roles
                        })) : null
                    }
                }(e, t, n);
                return p[t][e] = r, r
            }

            function A(e, t) {
                var n;
                if (null == t) return !1;
                let r = d.default.getChannel(t);
                return !!(null != r && r.isGuildStageVoice()) && (null === (n = p[t]) || void 0 === n || delete n[e], !0)
            }

            function R(e) {
                let t = s.default.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.isGuildStageVoice()
                });
                for (let {
                        channel: e
                    }
                    of t) delete p[e.id];
                return t.length > 0
            }

            function h(e) {
                let {
                    guildId: t,
                    user: n
                } = e;
                return null != n && null != t && function(e, t) {
                    for (let n in p) {
                        let r = d.default.getBasicChannel(n);
                        if (null != r) r.guild_id === t && delete p[n][e]
                    }
                    return !0
                }(n.id, t)
            }

            function O(e) {
                let {
                    guild: t
                } = e;
                for (let e in p) {
                    let n = d.default.getBasicChannel(e);
                    (null == n || n.guild_id === t.id) && delete p[e]
                }
            }
            class L extends a.default.Store {
                initialize() {
                    this.waitFor(E.default, d.default, _.default, c.default, I.default)
                }
                isSpeaker(e, t) {
                    return this.getPermissionsForUser(e, t).speaker
                }
                isModerator(e, t) {
                    var n;
                    return null !== (n = this.getPermissionsForUser(e, t, !0).moderator) && void 0 !== n && n
                }
                isAudienceMember(e, t) {
                    let n = this.getPermissionsForUser(e, t);
                    return !n.speaker && !n.moderator
                }
                getPermissionsForUser(e, t) {
                    var n;
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == e || null == t) return N;
                    let i = null === (n = p[t]) || void 0 === n ? void 0 : n[e];
                    if (null != i) return r && null == i.moderator ? C(e, t, !0) : i;
                    return C(e, t, r)
                }
            }
            L.displayName = "StageChannelRoleStore";
            var g = new L(o.default, {
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t) delete p[e.id]
                },
                CONNECTION_OPEN: function() {
                    p = {}
                },
                GUILD_MEMBER_REMOVE: h,
                GUILD_MEMBER_UPDATE: h,
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    R(t)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t;
                    let n = R(e.guildId);
                    for (let r of null !== (t = e.voiceStates) && void 0 !== t ? t : []) n = A(r.userId, r.channelId) || n;
                    return n
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return !u.isEmpty(p) && t.reduce((e, t) => {
                        let {
                            userId: n,
                            channelId: r
                        } = t;
                        return A(n, r) || e
                    }, !1)
                },
                GUILD_CREATE: O,
                GUILD_DELETE: O
            })
        },
        808422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RequestToSpeakStates: function() {
                    return i
                },
                getAudienceRequestToSpeakState: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var r, i, l = n("446674"),
                u = n("800762");

            function a(e) {
                if (null == e) return 0;
                if (e.suppress && null != e.requestToSpeakTimestamp) return 1;
                if (!e.suppress && null != e.requestToSpeakTimestamp) return 2;
                if (!e.suppress && null == e.requestToSpeakTimestamp) return 3;
                return 0
            }

            function o(e, t) {
                return (0, l.useStateFromStores)([u.default], () => {
                    if (null == e || null == t) return 0;
                    let n = u.default.getVoiceStateForChannel(t, e);
                    return a(n)
                }, [e, t])
            }(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK", r[r.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", r[r.ON_STAGE = 3] = "ON_STAGE"
        },
        922673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getHighestHoistedRole: function() {
                    return u
                }
            }), n("222007"), n("446674");
            var r = n("26989"),
                i = n("305961"),
                l = n("991170");
            let u = function(e, t) {
                let [n, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.default, r.default];
                if (null == e || null == t) return null;
                let a = n.getGuild(e);
                if (null == a) return null;
                let o = u.getMember(a.id, t);
                return null == o ? null : l.default.getHighestHoistedRole(a, o)
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("666038");
            class i extends r.default {
                static createFromServer(e, t) {
                    return new i({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var l = i
        },
        373469: function(e, t, n) {
            "use strict";
            let r, i, l, u;
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            }), n("222007"), n("424973"), n("808653");
            var a = n("446674"),
                o = n("913144"),
                d = n("76393"),
                s = n("374014"),
                E = n("223913"),
                _ = n("537429"),
                c = n("271938"),
                I = n("42203"),
                S = n("305961"),
                T = n("42887"),
                f = n("957255"),
                p = n("945956"),
                N = n("568307"),
                C = n("18494"),
                A = n("800762"),
                R = n("49111"),
                h = n("706530");
            let O = null,
                L = {},
                g = null;

            function P() {
                r = new Map, i = {}, l = {}, u = {}, L = {}
            }
            P();

            function m(e) {
                r.delete(e)
            }

            function y() {
                let e = [];
                for (let t in i) {
                    let n = i[t];
                    for (let r in n) e.push(i[t][r])
                }
                return e
            }

            function v(e) {
                let {
                    streamKey: t,
                    region: n,
                    viewerIds: i,
                    paused: u
                } = e;
                r.set(t, {
                    ...(0, s.decodeStreamKey)(t),
                    state: u ? R.ApplicationStreamStates.PAUSED : R.ApplicationStreamStates.ACTIVE
                }), l[t] = {
                    streamKey: t,
                    region: n,
                    viewerIds: i
                }
            }

            function D(e, t) {
                return e === h.StreamTypes.CALL || f.default.canWithPartialContext(R.Permissions.VIEW_CHANNEL, {
                    channelId: t
                })
            }

            function U(e) {
                let t = I.default.getChannel(e.channelId);
                return !!D(e.streamType, e.channelId) || null != t && (0, E.canWatchStream)(t, A.default, S.default, f.default, d.default)[0]
            }
            class M extends a.default.Store {
                initialize() {
                    this.syncWith([f.default], () => !0), this.waitFor(N.default, f.default)
                }
                isSelfStreamHidden(e) {
                    var t;
                    return null !== (t = L[e]) && void 0 !== t && t
                }
                getLastActiveStream() {
                    var e;
                    return (0, _.default)(T.default) ? null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null : null
                }
                getAllActiveStreams() {
                    return (0, _.default)(T.default) ? Array.from(r.values()) : []
                }
                getAllActiveStreamsForChannel(e) {
                    return (0, _.default)(T.default) ? Array.from(r.values()).filter(t => t.channelId === e) : []
                }
                getActiveStreamForStreamKey(e) {
                    var t;
                    return (0, _.default)(T.default) ? null !== (t = r.get(e)) && void 0 !== t ? t : null : null
                }
                getActiveStreamForApplicationStream(e) {
                    var t;
                    if (!(0, _.default)(T.default) || null == e) return null;
                    let n = (0, s.encodeStreamKey)(e);
                    return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
                }
                getCurrentUserActiveStream() {
                    let e = C.default.getVoiceChannelId(),
                        t = I.default.getChannel(e);
                    return null == t ? null : this.getActiveStreamForUser(c.default.getId(), t.getGuildId())
                }
                getActiveStreamForUser(e, t) {
                    var n;
                    let r = this.getStreamForUser(e, t);
                    return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find(t => t.ownerId === e)) && void 0 !== n ? n : null
                }
                getStreamerActiveStreamMetadata() {
                    var e;
                    let t = C.default.getVoiceChannelId(),
                        n = I.default.getChannel(t);
                    if (null == n) return null;
                    let r = this.getActiveStreamForUser(c.default.getId(), n.getGuildId());
                    return null == r ? null : null !== (e = u[(0, s.encodeStreamKey)(r)]) && void 0 !== e ? e : null
                }
                getAnyStreamForUser(e) {
                    var t;
                    if (!(0, _.default)(T.default)) return null;
                    let n = i[e];
                    return null == n ? null : null !== (t = Object.values(n).find(e => U(e))) && void 0 !== t ? t : null
                }
                getStreamForUser(e, t) {
                    var n;
                    if (!(0, _.default)(T.default)) return null;
                    let r = null === (n = i[e]) || void 0 === n ? void 0 : n[null != t ? t : "null"];
                    return null != r && U(r) ? r : null
                }
                getRTCStream(e) {
                    var t;
                    return (0, _.default)(T.default) ? null !== (t = l[e]) && void 0 !== t ? t : null : null
                }
                getAllApplicationStreams() {
                    return (0, _.default)(T.default) ? y().filter(e => null != e && D(e.streamType, e.channelId)) : []
                }
                getAllApplicationStreamsForChannel(e) {
                    return (0, _.default)(T.default) ? y().filter(t => null != t && t.channelId === e && D(t.streamType, t.channelId)) : []
                }
                getViewerIds(e) {
                    if (!(0, _.default)(T.default)) return [];
                    let t = null;
                    t = "string" == typeof e ? e : (0, s.encodeStreamKey)(e);
                    let n = null != t ? l[t] : null;
                    return null != n ? n.viewerIds : []
                }
                getCurrentAppIntent() {
                    return g
                }
                getState() {
                    return (0, _.default)(T.default) ? {
                        activeStreams: Array.from(r.entries()),
                        streamsByUserAndGuild: i,
                        rtcStreams: l,
                        streamerActiveStreamMetadatas: u
                    } : {
                        activeStreams: [],
                        streamsByUserAndGuild: {},
                        rtcStreams: {},
                        streamerActiveStreamMetadatas: {}
                    }
                }
            }
            M.displayName = "ApplicationStreamingStore";
            var G = new M(o.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        applicationStreamState: t
                    } = e;
                    i = t.streamsByUserAndGuild, r = new Map(t.activeStreams), l = t.rtcStreams, u = t.streamerActiveStreamMetadatas
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        var n, r, l, u, a;
                        let {
                            userId: o,
                            guildId: d,
                            channelId: s,
                            sessionId: E,
                            selfStream: _
                        } = t;
                        if (_ && null != s) {
                            ;
                            return null == i[(n = {
                                streamType: null != d ? h.StreamTypes.GUILD : h.StreamTypes.CALL,
                                ownerId: o,
                                guildId: d,
                                channelId: s
                            }).ownerId] && (i[n.ownerId] = {}), i[n.ownerId][null !== (r = n.guildId) && void 0 !== r ? r : "null"] = n, !0
                        } {
                            ;
                            let t = c.default.getSessionId();
                            if (o === c.default.getId() && E !== t && null != p.default.getChannelId()) return e;
                            return l = o, u = null != (u = d) ? u : "null", (null === (a = i[l]) || void 0 === a ? void 0 : a[u]) != null && (delete i[l][u], !0) || e
                        }
                    }, !1)
                },
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t
                    } = e, n = (0, s.decodeStreamKey)(t);
                    r.delete(t), r.set(t, {
                        ...n,
                        state: R.ApplicationStreamStates.CONNECTING
                    }), n.ownerId === c.default.getId() && (L[n.channelId] = !1)
                },
                STREAM_START: function(e) {
                    let {
                        streamType: t,
                        guildId: n,
                        channelId: i,
                        pid: l,
                        sourceName: a
                    } = e, o = (0, s.encodeStreamKey)({
                        streamType: t,
                        guildId: n,
                        channelId: i,
                        ownerId: c.default.getId()
                    }), d = null != l ? N.default.getGameForPID(l) : null;
                    u[o] = {
                        id: null == d ? void 0 : d.id,
                        pid: l,
                        sourceName: a
                    }, r.delete(o), r.set(o, {
                        streamType: t,
                        guildId: n,
                        channelId: i,
                        ownerId: c.default.getId(),
                        state: R.ApplicationStreamStates.CONNECTING
                    })
                },
                STREAM_STOP: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    u[t] = null
                },
                STREAM_CREATE: v,
                STREAM_UPDATE: v,
                STREAM_TIMED_OUT: function(e) {
                    let {
                        streamKey: t
                    } = e, n = r.get(t);
                    if (null == n) return !1;
                    r.set(t, {
                        ...n,
                        state: R.ApplicationStreamStates.FAILED
                    })
                },
                STREAM_DELETE: function(e) {
                    let {
                        streamKey: t,
                        unavailable: i,
                        reason: u
                    } = e;
                    delete l[t];
                    let a = r.get(t);
                    if (null == a) return !1;
                    let o = R.ApplicationStreamStates.ENDED;
                    if (i) o = R.ApplicationStreamStates.RECONNECTING;
                    else if (u === R.ApplicationStreamDeleteReasons.UNAUTHORIZED) o = R.ApplicationStreamStates.FAILED;
                    else if (u === R.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
                        let {
                            guildId: e
                        } = (0, s.decodeStreamKey)(t);
                        n.el("772545").then(n.bind(n, "772545")).then(t => {
                            let {
                                default: n
                            } = t;
                            n(e)
                        }), o = R.ApplicationStreamStates.ENDED
                    }
                    r.set(t, {
                        ...a,
                        state: o
                    }), o === R.ApplicationStreamStates.ENDED && O !== t && m(t)
                },
                STREAM_CLOSE: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    m(t)
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    let {
                        channelId: t,
                        selfStreamHidden: n
                    } = e, r = (0, s.isStreamKey)(O);
                    r && (null == O ? void 0 : O.includes(c.default.getId())) && !1 === L[t] && !0 === n && (O = null), L[t] = n
                },
                SET_STREAM_APP_INTENT: function(e) {
                    let {
                        intent: t
                    } = e;
                    g = t
                },
                RTC_CONNECTION_STATE: function(e) {
                    let {
                        streamKey: t,
                        state: n
                    } = e;
                    if (null == t) return !1;
                    let i = r.get(t);
                    if (null == i || i.state === R.ApplicationStreamStates.ENDED) return !1;
                    let l = i.state;
                    switch (n) {
                        case R.RTCConnectionStates.DISCONNECTED:
                            l = R.ApplicationStreamStates.RECONNECTING;
                            break;
                        case R.RTCConnectionStates.RTC_CONNECTED:
                            l = R.ApplicationStreamStates.ACTIVE
                    }
                    if (l === i.state) return !1;
                    r.set(t, {
                        ...i,
                        state: l
                    })
                },
                CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e;
                    if (O = t, Array.from(r.values()).forEach(e => {
                            (0, s.encodeStreamKey)(e) !== O && e.state === R.ApplicationStreamStates.ENDED && m((0, s.encodeStreamKey)(e))
                        }), null == t) return;
                    let i = (0, s.isStreamKey)(t);
                    i && t.includes(c.default.getId()) && (L[n] = !1)
                },
                CONNECTION_OPEN: P,
                CONNECTION_CLOSED: P,
                LOGOUT: P
            })
        },
        124948: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("917351"),
                i = n.n(r),
                l = n("446674"),
                u = n("913144"),
                a = n("49978"),
                o = n("560208"),
                d = n("42203"),
                s = n("26989");
            let E = new a.default(s.default.isMember, (e, t) => {
                u.default.dispatch({
                    type: "GUILD_MEMBERS_REQUEST",
                    guildIds: [e],
                    userIds: t
                })
            });

            function _() {
                E.reset()
            }

            function c(e, t) {
                return E.request(e, t), !1
            }

            function I(e, t) {
                return t.forEach(t => {
                    let {
                        author: n,
                        mentions: r
                    } = t;
                    null != n && c(e, n.id), null == r || r.forEach(t => c(e, t.id))
                }), !1
            }

            function S(e) {
                let {
                    channelId: t,
                    messages: n
                } = e, r = d.default.getChannel(t);
                return null != r && null != r.guild_id && I(r.guild_id, n)
            }
            class T extends l.default.Store {
                initialize() {
                    this.waitFor(d.default, s.default)
                }
                requestMember(e, t) {
                    c(e, t)
                }
            }
            T.displayName = "GuildMemberRequesterStore";
            var f = new T(u.default, {
                CONNECTION_CLOSED: _,
                CONNECTION_OPEN: _,
                CONNECTION_RESUMED: function() {
                    return E.requestUnacknowledged(), !1
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: n,
                        notFound: r
                    } = e;
                    return n.forEach(e => {
                        E.acknowledge(t, e.user.id)
                    }), null != r && r.forEach(e => E.acknowledge(t, e)), !1
                },
                SEARCH_FINISH: function(e) {
                    let {
                        guildId: t,
                        messages: n
                    } = e;
                    return null != t && I(t, i.flatten(n))
                },
                LOCAL_MESSAGES_LOADED: S,
                LOAD_MESSAGES_SUCCESS: S,
                LOAD_MESSAGES_AROUND_SUCCESS: S,
                LOAD_PINNED_MESSAGES_SUCCESS: S,
                LOAD_RECENT_MENTIONS_SUCCESS: S,
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        data: n
                    } = e, r = (0, o.getMessagesFromGuildFeedFetch)(n);
                    return I(t, r)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                l = n("9294"),
                u = n("49111");
            let a = {},
                o = {},
                d = {};

            function s(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, l.parseExtraDataFromInviteKey)(e),
                    i = a[e],
                    o = null != i ? {
                        state: u.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: u.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(o), a = {
                    ...a,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (d = {
                    ...d,
                    [o.guild.id]: e
                })
            }

            function E(e) {
                return s(e.code, t => {
                    t.state = "banned" in e && e.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class _ extends r.default.Store {
                getInvite(e) {
                    return a[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(e) {
                    return d[e]
                }
            }
            _.displayName = "InviteStore";
            var c = new _(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    a = {
                        ...a,
                        [t]: {
                            code: n.baseCode,
                            state: u.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return s(e.code, t => {
                        var n, r;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: E,
                INSTANT_INVITE_REVOKE_SUCCESS: E,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return s(e.invite.code, t => {
                        t.state = u.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => s(e.code, e => {
                        e.state = u.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return s(e.invite.code, t => {
                        var n, r;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return s(e.code, e => {
                        e.state = u.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return s(e.code, t => {
                        t.state = u.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, s(e.code, e => {
                        e.state = u.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return s(e.code, e => {
                        e.state = u.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return s(e.code, e => {
                        e.state = u.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return s(e.code, e => {
                        e.state = u.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        280168: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007"), n("702976"), n("808653");
            var r = n("446674"),
                i = n("913144"),
                l = n("991170"),
                u = n("42203"),
                a = n("42887"),
                o = n("945956"),
                d = n("18494"),
                s = n("49111"),
                E = n("353927");
            let _ = new Map,
                c = null,
                I = null,
                S = null;

            function T(e, t) {
                let n = _.get(e);
                if (null == n) return !1;
                let r = n.delete(t);
                return 0 === n.size && _.delete(e), r
            }

            function f(e, t, n) {
                var r, i, l;
                let u = null !== (l = null === (i = _.get(e)) || void 0 === i ? void 0 : null === (r = i.get(t)) || void 0 === r ? void 0 : r.flags) && void 0 !== l ? l : E.SpeakingFlags.NONE;
                return (u & n) === n
            }

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = _.get(e);
                if (null == r) return !1;
                for (let [e, {
                        flags: i
                    }] of r)
                    if ((!n || e !== c) && (i & t) === t) return !0;
                return !1
            }

            function N(e) {
                let {
                    user: t,
                    sessionId: n
                } = e;
                c = t.id, I = n, S = null
            }
            class C extends r.default.Store {
                initialize() {
                    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(o.default)
                }
                getSpeakingDuration(e, t) {
                    var n, r;
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.MediaEngineContextTypes.DEFAULT,
                        l = null === (r = _.get(i)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.since;
                    return null != l ? t - l : 0
                }
                getSpeakers() {
                    var e, t;
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
                    return Array.from(null !== (t = null === (e = _.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter(e => f(n, e, E.SpeakingFlags.VOICE))
                }
                isSpeaking(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT;
                    return f(t, e, E.SpeakingFlags.VOICE)
                }
                isPrioritySpeaker(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT;
                    return f(t, e, E.SpeakingFlags.PRIORITY)
                }
                isSoundSharing(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT;
                    return f(t, e, E.SpeakingFlags.SOUNDSHARE)
                }
                isAnyoneElseSpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
                    return p(e, E.SpeakingFlags.VOICE, !0)
                }
                isCurrentUserSpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
                    return null != c && this.isSpeaking(c, e)
                }
                isAnyonePrioritySpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
                    return p(e, E.SpeakingFlags.VOICE | E.SpeakingFlags.PRIORITY)
                }
                isCurrentUserPrioritySpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
                    return null != c && this.isPrioritySpeaker(c, e) && this.isSpeaking(c, e)
                }
            }
            C.displayName = "SpeakingStore";
            var A = new C(i.default, {
                CONNECTION_OPEN: N,
                OVERLAY_INITIALIZE: N,
                SPEAKING: function(e) {
                    let {
                        context: t,
                        userId: n,
                        speakingFlags: r
                    } = e;
                    if ((r & E.SpeakingFlags.PRIORITY) === E.SpeakingFlags.PRIORITY) {
                        let e = u.default.getChannel(d.default.getVoiceChannelId());
                        null != e && l.default.can({
                            permission: s.Permissions.PRIORITY_SPEAKER,
                            user: n,
                            context: e
                        }) ? a.default.setCanHavePriority(n, !0) : (a.default.setCanHavePriority(n, !1), r &= ~E.SpeakingFlags.PRIORITY)
                    }
                    return function(e, t, n) {
                        var r, i;
                        let l = function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT,
                                    t = _.get(e);
                                return null == t && (t = new Map, _.set(e, t)), t
                            }(e),
                            u = l.get(t),
                            a = null !== (r = null == u ? void 0 : u.flags) && void 0 !== r ? r : 0;
                        if (0 === a && 0 === n) return !1;
                        if (0 === n) l.delete(t), 0 === l.size && _.delete(e);
                        else {
                            let e = null !== (i = null == u ? void 0 : u.since) && void 0 !== i ? i : null,
                                r = (a & E.SpeakingFlags.VOICE) === E.SpeakingFlags.VOICE,
                                o = (n & E.SpeakingFlags.VOICE) === E.SpeakingFlags.VOICE;
                            r !== o && (e = o ? Date.now() : null), l.set(t, {
                                flags: n,
                                since: e
                            })
                        }
                        return !0
                    }(t, n, r)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            userId: n,
                            channelId: r,
                            sessionId: i
                        } = t, l = !1, u = S;
                        return n === c && i === I && (S = null != r ? r : null), u !== S && (l = _.delete(E.MediaEngineContextTypes.DEFAULT) || l), null == r ? l = n === c && i === I ? _.delete(E.MediaEngineContextTypes.DEFAULT) || l : T(E.MediaEngineContextTypes.DEFAULT, n) || l : n === c && i !== I ? l = _.delete(E.MediaEngineContextTypes.DEFAULT) || l : n !== c && r !== o.default.getChannelId() && (l = T(E.MediaEngineContextTypes.DEFAULT, n) || l), l || e
                    }, !1)
                },
                LOBBY_VOICE_STATE_UPDATE: function(e) {}
            })
        },
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("753809"),
                u = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("path", {
                                className: l,
                                fill: i,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, r.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, l.LinkIcon, void 0, {
                    size: 24
                })
        },
        404008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                permissionOverwritesForRoles: function() {
                    return O
                },
                permissionOverwriteForUser: function() {
                    return L
                },
                permissionOverwriteForRole: function() {
                    return g
                },
                permissionOverwritesForAnnouncement: function() {
                    return P
                },
                isChannelFull: function() {
                    return m
                },
                sanitizeGuildTextChannelName: function() {
                    return l.default
                },
                getBitrateLimit: function() {
                    return y
                },
                computeSummarizedVoiceUsers: function() {
                    return v
                },
                channelTypeString: function() {
                    return D
                },
                getMentionIconType: function() {
                    return U
                },
                previousTextChannelRouteForGuild: function() {
                    return M
                },
                getChannelPermalink: function() {
                    return G
                },
                getChannelLinkToCopy: function() {
                    return w
                }
            }), n("70102"), n("424973"), n("222007");
            var r = n("316693"),
                i = n("798609"),
                l = n("364480"),
                u = n("89073"),
                a = n("711326"),
                o = n("808422"),
                d = n("233069"),
                s = n("42203"),
                E = n("923959"),
                _ = n("957255"),
                c = n("18494"),
                I = n("316133"),
                S = n("991170"),
                T = n("49111"),
                f = n("646718"),
                p = n("782340");
            let {
                GUILD_VOICE: N,
                GUILD_CATEGORY: C,
                GUILD_STAGE_VOICE: A
            } = T.ChannelTypes;

            function R(e, t) {
                return e === t || e === C
            }

            function h(e, t, n) {
                let i = S.default.NONE;
                return ((0, d.isGuildSelectableChannelType)(t) || t === C) && (i = r.default.add(i, T.Permissions.VIEW_CHANNEL)), (R(t, N) || R(t, A)) && (i = r.default.add(i, T.Permissions.VIEW_CHANNEL), i = r.default.add(i, T.Permissions.CONNECT)), {
                    id: e,
                    type: n,
                    deny: S.default.NONE,
                    allow: i
                }
            }

            function O(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    u = [];
                if (n.length > 0 || l) {
                    var a, o, s;
                    let n;
                    u.push((a = e, o = t, s = i.PermissionOverwriteType.ROLE, n = S.default.NONE, ((0, d.isGuildSelectableChannelType)(o) || o === C) && (n = r.default.add(n, T.Permissions.VIEW_CHANNEL)), R(o, N) && (n = r.default.add(n, T.Permissions.VIEW_CHANNEL), n = r.default.add(n, T.Permissions.CONNECT)), {
                        id: a,
                        type: s,
                        allow: S.default.NONE,
                        deny: n
                    }))
                }
                return n.forEach(e => {
                    u.push(h(e, t, i.PermissionOverwriteType.ROLE))
                }), u
            }

            function L(e, t) {
                return h(e, t, i.PermissionOverwriteType.MEMBER)
            }

            function g(e, t) {
                return h(e, t, i.PermissionOverwriteType.ROLE)
            }

            function P(e) {
                return [{
                    id: e,
                    type: i.PermissionOverwriteType.ROLE,
                    deny: T.Permissions.SEND_MESSAGES,
                    allow: S.default.NONE
                }]
            }

            function m(e, t, n) {
                var r, i;
                let l = e.getGuildId(),
                    a = n.getGuild(l),
                    o = null !== (r = null == a ? void 0 : a.maxVideoChannelUsers) && void 0 !== r ? r : -1,
                    d = null !== (i = null == a ? void 0 : a.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
                    s = I.default.countVoiceStatesForChannel(e.id),
                    E = I.default.getVoiceStatesForChannel(e),
                    c = _.default.can(T.Permissions.MOVE_MEMBERS, e) && _.default.can(T.Permissions.CONNECT, e),
                    S = !1;
                S = e.type === A ? null != l && (t.hasVideo(e.id) || (0, u.hasStream)(E)) && d > 0 && s >= d : null != l && t.hasVideo(e.id) && o > 0 && s >= o + (c ? 1 : 0);
                let f = e.userLimit > 0 && s >= e.userLimit;
                return S || f && !c
            }

            function y(e, t) {
                return t.isGuildStageVoice() ? T.BITRATE_DEFAULT : null == e ? T.BITRATE_MAX : Math.max(e.hasFeature(T.GuildFeatures.VIP_REGIONS) ? f.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_3].limits.bitrate : T.BITRATE_MAX, f.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
            }

            function v(e) {
                let {
                    channels: t,
                    selectedChannelId: n,
                    selectedVoiceChannelId: r,
                    voiceStates: i
                } = e, l = function(e) {
                    let {
                        channels: t,
                        selectedChannelId: n,
                        selectedVoiceChannelId: r,
                        voiceStates: i
                    } = e, l = [];
                    return t.forEach(e => {
                        if (e.id === r || e.id === n) return;
                        let t = i[e.id];
                        null != t && (e.isGuildStageVoice() ? t.forEach(e => {
                            (0, o.getAudienceRequestToSpeakState)(e.voiceState) === o.RequestToSpeakStates.ON_STAGE && l.push(e)
                        }) : t.forEach(e => l.push(e)))
                    }), l
                }({
                    channels: t,
                    selectedChannelId: n,
                    selectedVoiceChannelId: r,
                    voiceStates: i
                });
                return l.map(e => e.user)
            }

            function D(e) {
                let {
                    type: t
                } = e;
                switch (t) {
                    case T.ChannelTypes.DM:
                        return p.default.Messages.DM;
                    case T.ChannelTypes.GROUP_DM:
                        return p.default.Messages.GROUP_DM;
                    case T.ChannelTypes.GUILD_TEXT:
                        return p.default.Messages.TEXT_CHANNEL;
                    case T.ChannelTypes.GUILD_FORUM:
                        return p.default.Messages.FORUM_CHANNEL;
                    case T.ChannelTypes.GUILD_MEDIA:
                        return p.default.Messages.MEDIA_CHANNEL;
                    case T.ChannelTypes.GUILD_VOICE:
                        return p.default.Messages.VOICE_CHANNEL;
                    case T.ChannelTypes.GUILD_STAGE_VOICE:
                        return p.default.Messages.STAGE_CHANNEL;
                    case T.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return p.default.Messages.NEWS_CHANNEL;
                    case T.ChannelTypes.GUILD_STORE:
                        return p.default.Messages.STORE_CHANNEL;
                    case T.ChannelTypes.GUILD_CATEGORY:
                        return p.default.Messages.CATEGORY;
                    default:
                        return null
                }
            }

            function U(e) {
                if (null == e) return "text";
                let t = e.isMediaChannel();
                if (e.type === T.ChannelTypes.GUILD_VOICE) return _.default.can(T.Permissions.CONNECT, e) ? "voice" : "voice-locked";
                if (e.type === T.ChannelTypes.GUILD_STAGE_VOICE) return _.default.can(T.Permissions.CONNECT, e) ? "stage" : "stage-locked";
                if (d.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
                else if (e.type === T.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
                else if (e.type === T.ChannelTypes.GUILD_MEDIA) return "media";
                else if (d.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
            }

            function M(e) {
                let t;
                let n = s.default.getChannel(c.default.getLastSelectedChannelId());
                if (null != n && n.getGuildId() === e && n.type === T.ChannelTypes.GUILD_TEXT) t = n.id;
                else {
                    let n = E.default.getDefaultChannel(e);
                    t = null != n ? n.id : null
                }
                return T.Routes.CHANNEL(e, t)
            }

            function G(e, t, n, r) {
                return "".concat(location.protocol, "//").concat(location.host).concat(T.Routes.CHANNEL(e, t, n)).concat(null == r ? "" : "?summaryId=".concat(r))
            }

            function w(e, t, n, r) {
                let i;
                let l = e.getGuildId(),
                    u = (0, a.canUseMediaPostEmbed)(l, t);
                if (null != t && u) {
                    var o, d, s, E;
                    o = l, d = t.id, s = e.id, E = e.id, i = null == o || null == d || null == s ? G(o, d, E) : "".concat(location.protocol, "//").concat(location.host).concat(T.Routes.CHANNEL_THREAD_VIEW(o, d, s, E))
                } else i = null != r ? r : G(l, e.id, n);
                return i
            }
        },
        387111: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNickname: function() {
                    return d
                },
                useName: function() {
                    return E
                },
                default: function() {
                    return _
                }
            });
            var r = n("446674"),
                i = n("42203"),
                l = n("26989"),
                u = n("27618"),
                a = n("158998"),
                o = n("782340");

            function d(e, t, n) {
                if (null == n) return null;
                if (null != e) return l.default.getNick(e, n.id);
                if (null != t) {
                    let e = i.default.getChannel(t);
                    if (null == e ? void 0 : e.isPrivate()) return u.default.getNickname(n.id)
                }
                return null
            }

            function s(e, t, n) {
                var r;
                return null == n ? o.default.Messages.UNKNOWN_USER : null !== (r = d(e, t, n)) && void 0 !== r ? r : a.default.getName(n)
            }

            function E(e, t, n) {
                return (0, r.useStateFromStores)([l.default, i.default, u.default], () => s(e, t, n))
            }
            var _ = {
                getNickname: d,
                getName: s,
                useName: E
            }
        },
        224400: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPurchaseToken: function() {
                    return u
                },
                getPurchaseTokenHash: function() {
                    return a
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("222007");
            var r = n("748820"),
                i = n("95410");
            let l = "purchase_token";

            function u() {
                let e = i.default.get(l);
                if (null != e && e.expires >= Date.now()) return e.purchaseToken;
                let t = (0, r.v4)();
                return i.default.set(l, {
                    purchaseToken: t,
                    expires: Date.now() + 5184e6
                }), t
            }
            async function a() {
                let e = new Uint8Array(u().split("").map(e => e.charCodeAt(0))),
                    t = await window.crypto.subtle.digest({
                        name: "SHA-256"
                    }, e);
                return btoa(String.fromCharCode(...new Uint8Array(t)))
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        520713: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                validateExpiry: function() {
                    return s
                },
                getStripe: function() {
                    return E
                },
                parseStripePaymentMethod: function() {
                    return _
                },
                authenticatePaymentIntentForPaymentId: function() {
                    return c
                }
            }), n("222007");
            var i, l, u = n("60979"),
                a = n("872717"),
                o = n("49111");
            (l = i || (i = {})).REQUIRES_PAYMENT_METHOD = "requires_payment_method", l.REQUIRES_CONFIRMATION = "requires_confirmation", l.REQUIRES_ACTION = "requires_action", l.PROCESSING = "processing", l.CANCELED = "canceled", l.SUCCEEDED = "succeeded";
            let d = e => {
                    let t = t => "You passed an invalid expiration date ".concat(e) + "".concat(null != t ? t : "") + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`",
                        n = e.split(/[.\-/\s]+/g);
                    2 !== n.length && t();
                    let r = n.map(e => {
                            let r = parseInt(e);
                            return isNaN(r) && t("".concat(n, " is not a number.")), r < 1 && t("".concat(r, " is less than one.")), r
                        }),
                        [i, l] = r[0] > 12 ? [r[1], r[0]] : [r[0], r[1]];
                    return i > 12 && t("Month must be a number 1-12, not ".concat(i, ".")), l < 100 && (l += 2e3), [i, l]
                },
                s = e => {
                    let t, n;
                    try {
                        [t, n] = d(e)
                    } catch (e) {
                        return !1
                    }
                    let r = new Date(n, t),
                        i = new Date;
                    return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > i
                };

            function E() {
                return null != r ? Promise.resolve(r) : (0, u.loadStripe)(o.PaymentSettings.STRIPE.KEY).then(e => (r = e, e))
            }

            function _(e) {
                var t, n, r, i, l, u, a, o;
                let {
                    billing_details: d
                } = e, s = null !== (t = d.address) && void 0 !== t ? t : {}, E = {
                    name: null !== (n = d.name) && void 0 !== n ? n : "",
                    line1: null !== (r = s.line1) && void 0 !== r ? r : "",
                    line2: null !== (i = s.line2) && void 0 !== i ? i : "",
                    city: null !== (l = s.city) && void 0 !== l ? l : "",
                    state: null !== (u = s.state) && void 0 !== u ? u : "",
                    country: null !== (a = s.country) && void 0 !== a ? a : "",
                    postalCode: null !== (o = s.postal_code) && void 0 !== o ? o : ""
                };
                return {
                    token: e.id,
                    billingAddressInfo: E
                }
            }
            async function c(e) {
                try {
                    let t = await a.default.get({
                            url: o.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                            oldFormErrors: !0
                        }),
                        {
                            stripe_payment_intent_client_secret: n
                        } = t.body,
                        r = await E();
                    if (null == r) return {
                        error: "unable to load stripe"
                    };
                    let {
                        error: i,
                        paymentIntent: l
                    } = await r.retrievePaymentIntent(n);
                    if (null != i) return {
                        error: i.message
                    };
                    if (null == l) return {
                        error: "payment intent does not exist"
                    };
                    let u = {};
                    switch ("requires_payment_method" === l.status && null != l.last_payment_error && null != l.last_payment_error.payment_method && (u.payment_method = l.last_payment_error.payment_method.id), l.status) {
                        case "requires_payment_method":
                        case "requires_confirmation":
                        case "requires_action":
                            let {
                                error: d
                            } = await r.confirmCardPayment(n, u);
                            if (null != d) return {
                                error: d.message
                            };
                            return {};
                        case "succeeded":
                        case "processing":
                            return {};
                        default:
                            return {
                                error: "Invalid Payment Intent status: ".concat(l.status)
                            }
                    }
                } catch (e) {
                    return {
                        error: e.message
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=71554.a8fc7dee6229ebf179cf.js.map