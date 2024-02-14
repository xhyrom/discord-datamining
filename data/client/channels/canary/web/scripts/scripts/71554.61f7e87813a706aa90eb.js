(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71554"], {
        850068: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                deletePaymentSource: function() {
                    return C
                },
                updatePaymentSource: function() {
                    return L
                },
                validatePaymentSourceBillingAddress: function() {
                    return g
                },
                createAdyenPaymentSourceToken: function() {
                    return m
                },
                createPaymentSource: function() {
                    return y
                },
                dispatchConfirmationError: function() {
                    return D
                },
                createCardToken: function() {
                    return v
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
                    return B
                },
                confirmCardPaymentSource: function() {
                    return w
                },
                createPaymentRequestPaymentSource: function() {
                    return b
                },
                createBraintreePaymentSource: function() {
                    return F
                },
                createStripePaymentSource: function() {
                    return V
                },
                createAdyenPrepaidPaymentSource: function() {
                    return x
                },
                createAdyenVaultablePaymentSource: function() {
                    return H
                },
                createStripePaymentSourceToken: function() {
                    return k
                },
                createPaymentSourceToken: function() {
                    return Y
                },
                fetchPaymentSources: function() {
                    return K
                },
                fetchPayment: function() {
                    return W
                },
                fetchPayments: function() {
                    return q
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
                    return es
                },
                resubscribeToSubscription: function() {
                    return ed
                },
                upgradeSubscription: function() {
                    return e_
                },
                changeSubscriptionCurrency: function() {
                    return eE
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
                    return eN
                },
                popupBridgeState: function() {
                    return ep
                },
                popupBridgeCallback: function() {
                    return eA
                },
                fetchIpCountryCode: function() {
                    return eR
                },
                fetchLocalizedPromo: function() {
                    return eC
                },
                resetPaymentIntentId: function() {
                    return eL
                },
                resetSubscriptionStore: function() {
                    return eO
                },
                startBrowserCheckout: function() {
                    return eh
                }
            }), n("70102");
            var r = n("41092"),
                i = n("627445"),
                l = n.n(i),
                u = n("872717"),
                a = n("913144"),
                o = n("448993"),
                s = n("736978"),
                d = n("865146"),
                _ = n("766274"),
                E = n("160299"),
                c = n("599110"),
                I = n("745279"),
                S = n("719923"),
                T = n("224400"),
                f = n("520713"),
                N = n("49111"),
                p = n("422487"),
                A = n("843455"),
                R = n("782340");
            async function C(e) {
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_REMOVE_START"
                });
                try {
                    await u.default.delete({
                        url: N.Endpoints.BILLING_PAYMENT_SOURCE(e),
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
            async function L(e, t) {
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
                        url: N.Endpoints.BILLING_PAYMENT_SOURCE(e),
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
                    }), s = d.default.createFromServer(o.body);
                    a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS",
                        paymentSource: s
                    })
                } catch (t) {
                    let e = (0, s.parseV8BillingAddressSkemaErrorToBillingError)(t);
                    throw a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL",
                        error: e
                    }), e
                }
            }
            async function O(e) {
                let t = await u.default.get({
                        url: N.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                        oldFormErrors: !0
                    }),
                    {
                        stripe_payment_intent_client_secret: n
                    } = t.body;
                return n
            }
            async function h(e) {
                let t = await u.default.get({
                        url: N.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
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
            async function P() {
                let e = await u.default.post({
                    url: N.Endpoints.BILLING_STRIPE_SETUP_INTENT_SECRET,
                    oldFormErrors: !0
                });
                return e.body.client_secret
            }
            async function g(e) {
                try {
                    let t = await u.default.post({
                        url: N.Endpoints.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
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
                    let e = (0, s.parseV8BillingAddressSkemaErrorToBillingError)(t);
                    throw a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: e
                    }), e
                }
            }

            function m(e) {
                var t;
                return N.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : JSON.stringify({
                    type: null !== (t = A.ADYEN_PAYMENT_SOURCES.get(e.type)) && void 0 !== t ? t : null
                })
            }
            async function y(e, t, n, r) {
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                try {
                    let i = await u.default.post({
                            url: N.Endpoints.BILLING_PAYMENT_SOURCES,
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
                        l = d.default.createFromServer(i.body);
                    return a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS",
                        paymentSource: l
                    }), l
                } catch (t) {
                    let e = (0, s.parseV8BillingAddressSkemaErrorToBillingError)(t);
                    throw function(e, t) {
                        var n, r;
                        (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.adyen_redirect_url) && (e.fields.adyen_redirect_url = null == t ? void 0 : null === (r = t.body) || void 0 === r ? void 0 : r.adyen_redirect_url)
                    }(e, t), e.code !== s.ErrorCodes.CONFIRMATION_REQUIRED && a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: e
                    }), e
                }
            }

            function D(e) {
                var t, n;
                let r, i, l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    u = R.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR;
                if (t = e, p.StripeErrorTypes.includes(t.type)) {
                    ;
                    let t = null != e.message ? "".concat(u, ": ").concat(e.message) : u,
                        a = {
                            failure_message: t,
                            error_type: e.type,
                            failure_code: e.code,
                            failure_sub_code: e.decline_code,
                            payment_source_type: null === (n = e.payment_method) || void 0 === n ? void 0 : n.type
                        };
                    if (i = a, "card_error" === e.type) c.default.track(N.AnalyticEvents.PAYMENT_SOURCE_CREATION_FAILED, {
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
                let s = Error("string" == typeof e ? e : r.message);
                return l && (0, I.captureBillingException)(s, {
                    extra: i
                }), s
            }
            async function v(e, t) {
                if (null == e || null == t) throw D("Stripe or elements not loaded");
                let n = t.getElement(r.CardNumberElement);
                if (null == n) throw D("Unable to load card elements from Stripe");
                let {
                    token: i,
                    error: l
                } = await e.createToken(n);
                if (null != l) throw D(l);
                if (null == i) throw D("token not available with successful stripe call");
                return i.id
            }
            async function U(e, t, n, r) {
                if (null == e) throw D("Stripe not loaded");
                if (null == t) throw D("Bank required for EPS");
                let {
                    email: i,
                    name: l,
                    line1: u,
                    line2: o,
                    city: s,
                    state: d,
                    postalCode: _,
                    country: E
                } = n;
                if (null == l) throw D("Name required for EPS");
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let c = await g(n),
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
                                city: s,
                                state: d,
                                postal_code: _,
                                country: E
                            },
                            name: l,
                            email: i
                        }
                    });
                if (null != S) throw D(S);
                if (null == I) throw D("paymentMethod not available with successful stripe call");
                return y(N.PaymentGateways.STRIPE, I.id, n, {
                    billingAddressToken: c,
                    analyticsLocation: r,
                    bank: t
                })
            }
            async function M(e, t, n, r) {
                if (null == e) throw D("Stripe not loaded");
                if (null == t) throw D("Bank required for iDEAL");
                let {
                    email: i,
                    name: l,
                    line1: u,
                    line2: o,
                    city: s,
                    state: d,
                    postalCode: _,
                    country: E
                } = n;
                if (null == l) throw D("Name required for iDEAL");
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let c = await g(n),
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
                                city: s,
                                state: d,
                                postal_code: _,
                                country: E
                            },
                            name: l,
                            email: i
                        }
                    });
                if (null != S) throw D(S);
                if (null == I) throw D("paymentMethod not available with successful stripe call");
                return y(N.PaymentGateways.STRIPE, I.id, n, {
                    billingAddressToken: c,
                    analyticsLocation: r,
                    bank: t
                })
            }
            async function G(e, t, n, r) {
                if (null == e) throw D("Stripe not loaded");
                let {
                    email: i,
                    name: l,
                    line1: u,
                    line2: o,
                    city: s,
                    state: d,
                    postalCode: _,
                    country: E
                } = n;
                if (null == i) throw D("Email required for Przelewy24");
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let c = await g(n),
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
                                city: s,
                                state: d,
                                postal_code: _,
                                country: E
                            },
                            name: l,
                            email: i
                        }
                    });
                if (null != T) throw D(T);
                if (null == S) throw D("paymentMethod not available with successful stripe call");
                return y(N.PaymentGateways.STRIPE, S.id, n, {
                    billingAddressToken: c,
                    analyticsLocation: r,
                    bank: I
                })
            }
            async function B(e, t, n) {
                if (null == e) throw D("Stripe not loaded");
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let r = await g(t),
                    {
                        email: i,
                        name: l,
                        line1: u,
                        line2: o,
                        city: s,
                        state: d,
                        postalCode: _,
                        country: E
                    } = t,
                    {
                        paymentMethod: c,
                        error: I
                    } = await e.createPaymentMethod({
                        type: "sofort",
                        sofort: {
                            country: E
                        },
                        billing_details: {
                            address: {
                                line1: u,
                                line2: o,
                                city: s,
                                state: d,
                                postal_code: _,
                                country: E
                            },
                            name: l,
                            email: i
                        }
                    });
                if (null != I) throw D(I);
                if (null == c) throw D("paymentMethod not available with successful stripe call");
                return y(N.PaymentGateways.STRIPE, c.id, t, {
                    billingAddressToken: r,
                    analyticsLocation: n
                })
            }
            async function w(e, t, n, r) {
                if (null == e || null == t) throw D("Stripe or token not loaded");
                a.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let i = null;
                try {
                    i = await P()
                } catch (e) {
                    throw D(e)
                }
                let {
                    name: u,
                    line1: o,
                    line2: s,
                    city: d,
                    state: _,
                    postalCode: E,
                    country: c
                } = n, I = await g(n), {
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
                                line2: s,
                                city: d,
                                state: _,
                                postal_code: E,
                                country: c
                            },
                            name: u
                        }
                    }
                });
                if (null != T) throw D(T);
                if ((null == S ? void 0 : S.payment_method) == null) throw D("setupIntent.payment_method not available with successful stripe call");
                return l("string" == typeof S.payment_method, "setupIntent.payment_method expanded not supported"), y(N.PaymentGateways.STRIPE, S.payment_method, n, {
                    billingAddressToken: I,
                    analyticsLocation: r
                })
            }

            function b(e, t, n) {
                let {
                    token: r,
                    billingAddressInfo: i
                } = f.parseStripePaymentMethod(e);
                return y(N.PaymentGateways.STRIPE, r, null != t ? t : i, {
                    analyticsLocation: n
                })
            }

            function F(e, t, n) {
                return y(N.PaymentGateways.BRAINTREE, e, t, {
                    analyticsLocation: n
                })
            }
            async function V(e, t, n, r) {
                if (null == e) throw D("Stripe not loaded");
                let i = await g(t),
                    {
                        name: u,
                        line1: a,
                        line2: o,
                        city: s,
                        state: d,
                        postalCode: _,
                        country: E
                    } = t,
                    c = A.STRIPE_PAYMENT_SOURCES.get(n);
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
                            city: s,
                            state: d,
                            postal_code: _,
                            country: E
                        },
                        name: u
                    }
                });
                if (null != S) throw D(S);
                if (null == I) throw D("stripePaymentMethod not available with successful stripe call");
                return y(N.PaymentGateways.STRIPE, I.id, t, {
                    billingAddressToken: i,
                    analyticsLocation: r
                })
            }
            async function x(e, t, n) {
                let r = await g(e),
                    i = {
                        type: A.ADYEN_PAYMENT_SOURCES.get(t)
                    };
                return y(N.PaymentGateways.ADYEN, JSON.stringify(i), e, {
                    billingAddressToken: r,
                    analyticsLocation: n
                })
            }
            async function H(e, t, n, r) {
                var i;
                let l = await g(e),
                    d = {
                        type: A.ADYEN_PAYMENT_SOURCES.get(t),
                        ...null !== (i = null == r ? void 0 : r.paymentMethod) && void 0 !== i ? i : {}
                    },
                    _ = await ep(t),
                    E = u.default.getAPIBaseURL() + N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, null != _ ? _ : "", "success");
                try {
                    let t = await y(N.PaymentGateways.ADYEN, JSON.stringify(d), e, {
                        billingAddressToken: l,
                        analyticsLocation: n,
                        returnUrl: E
                    });
                    return {
                        paymentSource: t,
                        redirectConfirmation: !1
                    }
                } catch (t) {
                    if (t.code !== s.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: new o.BillingError("Unable to create payment source token: code: ".concat(null == t ? void 0 : t.code, " message: ").concat(null == t ? void 0 : t.message), o.BillingError.ErrorCodes.UNKNOWN)
                    }), t;
                    let e = t.fields.adyen_redirect_url;
                    if (null == e) throw D("redirect url cannot be null on a redirect for adyen.");
                    return ei(e), {
                        redirectConfirmation: !0
                    }
                }
            }
            async function k(e) {
                if (N.VAULTABLE_PAYMENT_SOURCES.has(e.type)) return null;
                let t = await f.getStripe();
                if (null == t) throw new o.BillingError("Stripe not loaded", o.BillingError.ErrorCodes.UNKNOWN);
                let {
                    email: n,
                    name: r,
                    line1: i,
                    line2: u,
                    city: a,
                    state: s,
                    postalCode: d,
                    country: _
                } = e.billingAddress, E = {
                    billing_details: {
                        address: {
                            line1: i,
                            line2: u,
                            city: a,
                            state: s,
                            postal_code: d,
                            country: _
                        },
                        name: r
                    }
                };
                switch (e.type) {
                    case A.PaymentSourceTypes.GIROPAY:
                        E.type = "giropay";
                        break;
                    case A.PaymentSourceTypes.SOFORT:
                        E.type = "sofort", E.sofort = {
                            country: null != _ ? _ : ""
                        }, E.billing_details.email = n;
                        break;
                    case A.PaymentSourceTypes.BANCONTACT:
                        E.type = "bancontact";
                        break;
                    case A.PaymentSourceTypes.IDEAL:
                        if (null == e.bank) throw new o.BillingError("iDEAL missing bank information", o.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        E.type = "ideal", E.ideal = {
                            bank: e.bank
                        };
                        break;
                    case A.PaymentSourceTypes.PRZELEWY24:
                        if (null == e.bank) throw new o.BillingError("p24 missing bank information", o.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        E.type = "p24", E.p24 = {
                            bank: e.bank
                        }, E.billing_details.email = e.email;
                        break;
                    case A.PaymentSourceTypes.EPS:
                        if (null == e.bank) throw new o.BillingError("EPS missing bank information", o.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        E.type = "eps", E.eps = {
                            bank: e.bank
                        }
                }
                l(null != E.type, "unsupported payment method type");
                let {
                    paymentMethod: c,
                    error: I
                } = await t.createPaymentMethod(E);
                if (null != I || null == c) throw new o.BillingError("Unable to create payment source token: code: ".concat(null == I ? void 0 : I.code, " message: ").concat(null == I ? void 0 : I.message), o.BillingError.ErrorCodes.UNKNOWN);
                return c.id
            }

            function Y(e) {
                return N.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : A.ADYEN_PAYMENT_SOURCES.has(e.type) ? m(e) : k(e)
            }
            async function K() {
                try {
                    let e = u.default.get({
                        url: N.Endpoints.BILLING_PAYMENT_SOURCES,
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
            async function W(e) {
                let t = await u.default.get({
                    url: N.Endpoints.BILLING_PAYMENT(e)
                });
                return a.default.dispatch({
                    type: "BILLING_PAYMENT_FETCH_SUCCESS",
                    payment: t.body
                }), t
            }
            async function q() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                a.default.dispatch({
                    type: "BILLING_PAYMENTS_FETCH_START"
                });
                try {
                    let n = await u.default.get({
                        url: N.Endpoints.BILLING_PAYMENTS,
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
                        url: N.Endpoints.BILLING_SUBSCRIPTIONS,
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
                    let e = await u.default.get(N.Endpoints.BILLING_PERKS_RELEVANCE);
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
                    let e = await u.default.get(N.Endpoints.BILLING_NITRO_AFFINITY);
                    a.default.dispatch({
                        type: "BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED",
                        res: e.body.map(e => new _.default(e))
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
                        url: N.Endpoints.BILLING_SUBSCRIPTIONS,
                        query: {
                            include_inactive: !0,
                            limit: 2,
                            exclude_unpaid_statuses: !0,
                            subscription_type: A.SubscriptionTypes.PREMIUM
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
                    metadata: d,
                    referralCode: _,
                    loadId: E
                } = e;
                a.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_START"
                }), t = (0, S.coerceExistingItemsToNewItemInterval)(t);
                let c = null;
                if (null != n && A.ADYEN_PAYMENT_SOURCES.has(n.type)) {
                    let e = await ep(n.type);
                    c = u.default.getAPIBaseURL() + N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
                }
                try {
                    let e = await u.default.post({
                        url: N.Endpoints.BILLING_SUBSCRIPTIONS,
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
                            payment_source_token: null != n ? await Y(n) : null,
                            trial_id: r,
                            return_url: c,
                            code: i,
                            currency: null != n ? l : A.CurrencyCodes.USD,
                            metadata: d,
                            gateway_checkout_context: await (0, I.createGatewayCheckoutContext)(n),
                            purchase_token: (0, T.getPurchaseToken)(),
                            referral_code: _,
                            load_id: E
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
                    if (e.code !== s.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: e
                    }), e;
                    if (!t.body.payment_id) throw D("payment id cannot be null on redirected confirmations.");
                    return $(t.body, n)
                }
            }
            async function j(e, t, n, r) {
                let i = null;
                if (null != n && A.PREPAID_PAYMENT_SOURCES.has(n.type)) {
                    let e = await ep(n.type);
                    i = u.default.getAPIBaseURL() + N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
                }
                try {
                    let l = await u.default.post({
                        url: N.Endpoints.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
                        body: {
                            payment_source_id: null != n ? n.id : null,
                            payment_source_token: null != n ? await Y(n) : null,
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
                        redirectConfirmation: N.REDIRECTED_PAYMENT_SOURCES.has(n.type)
                    }
                } catch (t) {
                    let e = t instanceof o.BillingError ? t : new o.BillingError(t);
                    if (e.code !== s.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: e
                    }), e;
                    if (!t.body.payment_id) throw D("payment id cannot be null on redirected confirmations.");
                    return $(t.body, n)
                }
            }

            function $(e, t) {
                return null != t && A.ADYEN_PAYMENT_SOURCES.has(t.type) ? ee(e.adyen_redirect_url, t) : et(e.payment_id, t)
            }
            async function ee(e, t) {
                if (null == e) throw D("redirect url cannot be null on a redirect for adyen.");
                if (null == t) throw D("Payment source cannot be null on a redirect.");
                return N.REDIRECTED_PAYMENT_SOURCES.has(t.type) ? (ei(e), {
                    redirectConfirmation: !0,
                    redirectURL: e
                }) : {
                    redirectConfirmation: !1,
                    redirectURL: e
                }
            }
            async function et(e, t) {
                let n = await f.getStripe();
                if (null == t) throw D("Payment source cannot be null on a redirect.");
                let {
                    clientSecret: r,
                    paymentMethodId: i
                } = await h(e);
                if (null == n) throw D("Stripe cannot be null on a redirect.");
                if (N.REDIRECTED_PAYMENT_SOURCES.has(t.type)) {
                    let e = await ep(t.type);
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
                let n = await W(e);
                if ((null == n ? void 0 : n.body) == null) throw D("could not fetch payment");
                let r = d.default.createFromServer(n.body.payment_source);
                if (!N.REDIRECTED_PAYMENT_SOURCES.has(r.type)) throw D("unsupported redirect payment source");
                if ((null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.status) === A.PaymentStatusTypes.FAILED) throw D("payment failed");
                return r.paymentGateway !== N.PaymentGateways.STRIPE || er(e)
            }
            async function er(e) {
                let t = await f.getStripe();
                if (null == t) throw D("Stripe has not loaded.");
                if (null == e) throw D("payment intent id cannot be null.");
                let n = await O(e),
                    {
                        paymentIntent: r,
                        error: i
                    } = await t.retrievePaymentIntent(n);
                if (null != i) throw D(i);
                if (null == r) throw D("paymentIntent not available with successful stripe call");
                if (null != r.last_payment_error) throw D("unable to retrieve payment intent ".concat(r.last_payment_error));
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
                if (r.type === A.PaymentSourceTypes.SEPA_DEBIT) {
                    if (null == i) throw D("On a sepa payment payment method id cannot be null");
                    u.payment_method = i, t = n.confirmSepaDebitPayment
                } else throw D("Unsupported redirected payment source type.");
                let {
                    paymentIntent: a,
                    error: o
                } = await t(l, u);
                if (null != o) throw D(o);
                if (null == a) throw D("paymentIntent not available with successful stripe call")
            }
            async function eu(e) {
                var t, n;
                let r, {
                        stripe: i,
                        paymentSource: l,
                        clientSecret: a,
                        state: o
                    } = e,
                    s = {};
                switch (l.type) {
                    case A.PaymentSourceTypes.GIROPAY:
                        s = {
                            billing_details: {
                                name: l.billingAddress.name
                            }
                        }, r = i.confirmGiropayPayment;
                        break;
                    case A.PaymentSourceTypes.BANCONTACT:
                        s = {
                            billing_details: {
                                name: l.billingAddress.name,
                                email: l.email
                            }
                        }, r = i.confirmBancontactPayment;
                        break;
                    case A.PaymentSourceTypes.SOFORT:
                        s = {
                            sofort: {
                                country: l.billingAddress.country
                            },
                            billing_details: {
                                name: l.billingAddress.name,
                                email: l.email
                            }
                        }, r = i.confirmSofortPayment;
                        break;
                    case A.PaymentSourceTypes.PRZELEWY24:
                        if (null == l.bank) throw D("PaymentSource (".concat(l.id, ") missing bank info for p24."));
                        s = {
                            p24: {
                                bank: l.bank
                            },
                            billing_details: {
                                name: l.billingAddress.name,
                                email: l.email
                            }
                        }, r = i.confirmP24Payment;
                        break;
                    case A.PaymentSourceTypes.EPS:
                        if (null == l.bank) throw D("PaymentSource (".concat(l.id, ") missing bank info for EPS."));
                        s = {
                            eps: {
                                bank: l.bank
                            },
                            billing_details: {
                                name: l.billingAddress.name
                            }
                        }, r = i.confirmEpsPayment;
                        break;
                    case A.PaymentSourceTypes.IDEAL:
                        if (null == l.bank) throw D("PaymentSource (".concat(l.id, ") missing bank info for iDEAL."));
                        s = {
                            ideal: {
                                bank: l.bank
                            },
                            billing_details: {
                                name: l.billingAddress.name
                            }
                        }, r = i.confirmIdealPayment;
                        break;
                    default:
                        throw D("Unsupported redirected payment source type.")
                }
                let {
                    paymentIntent: d,
                    error: _
                } = await r(a, {
                    payment_method: s,
                    return_url: u.default.getAPIBaseURL() + N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(l.type, null != o ? o : "", "success")
                }, {
                    handleActions: !1
                });
                if (null != _) throw D(_);
                if (null == d) throw D("paymentIntent not available with successful api call");
                if ((null === (n = d.next_action) || void 0 === n ? void 0 : null === (t = n.redirect_to_url) || void 0 === t ? void 0 : t.url) == null) throw D("confirm payment did not return a redirect url");
                return d.next_action.redirect_to_url.url
            }
            async function ea(e, t, n) {
                a.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_CANCEL_START"
                });
                try {
                    let r = await u.default.delete({
                        url: N.Endpoints.BILLING_SUBSCRIPTION(e),
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
                return es(e, {
                    items: e.items
                }, t)
            }
            async function es(e, t, n, r, i) {
                if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
                a.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_START"
                });
                try {
                    var l;
                    let o = {
                        status: t.status,
                        payment_source_id: null === (l = t.paymentSource) || void 0 === l ? void 0 : l.id,
                        payment_source_token: null != t.paymentSource ? await Y(t.paymentSource) : null,
                        currency: t.currency,
                        gateway_checkout_context: await (0, I.createGatewayCheckoutContext)(t.paymentSource),
                        load_id: i
                    };
                    if (null != t.paymentSource && A.ADYEN_PAYMENT_SOURCES.has(t.paymentSource.type)) {
                        let e = await ep(t.paymentSource.type);
                        o.return_url = u.default.getAPIBaseURL() + N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, null != e ? e : "", "success")
                    }
                    null != t.items && (o.items = (0, S.coerceExistingItemsToNewItemInterval)(t.items).map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }));
                    let s = await u.default.patch({
                        url: N.Endpoints.BILLING_SUBSCRIPTION(e.id),
                        query: {
                            location: r,
                            location_stack: n
                        },
                        body: o,
                        oldFormErrors: !0
                    });
                    return a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                        subscription: s.body
                    }), {
                        subscription: s.body,
                        redirectConfirmation: !1
                    }
                } catch (n) {
                    let e = n instanceof o.BillingError ? n : new o.BillingError(n);
                    if (e.code !== s.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: e
                    }), e;
                    if (!n.body.payment_id) throw D("payment id cannot be null on redirected confirmations.");
                    return $(n.body, t.paymentSource)
                }
            }

            function ed(e, t, n, r, i) {
                return es(e, {
                    status: N.SubscriptionStatusTypes.ACTIVE,
                    paymentSource: n,
                    currency: r
                }, t, i)
            }

            function e_(e, t, n, r) {
                let i = (0, S.getItemsWithUpsertedPremiumPlanId)(e, t);
                return es(e, {
                    status: N.SubscriptionStatusTypes.ACTIVE,
                    items: i
                }, n, r)
            }

            function eE(e, t, n, r) {
                return es(e, {
                    currency: t
                }, n, r)
            }

            function ec(e, t, n, r, i) {
                return es(e, {
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
                    url: N.Endpoints.BILLING_PAYMENTS_VOID(e),
                    oldFormErrors: !0
                })
            }
            async function eN(e, t) {
                await u.default.post({
                    url: N.Endpoints.BILLING_PAYMENTS_REFUND(e),
                    body: {
                        reason: t
                    }
                })
            }
            async function ep(e) {
                let {
                    body: {
                        state: t
                    }
                } = await u.default.post({
                    url: N.Endpoints.BILLING_POPUP_BRIDGE(e),
                    oldFormErrors: !0
                });
                return a.default.dispatch({
                    type: "BILLING_POPUP_BRIDGE_STATE_UPDATE",
                    state: t,
                    paymentSourceType: e
                }), t
            }

            function eA(e) {
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
                    url: N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK(t),
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
            async function eR() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!e && null != E.default.ipCountryCodeRequest) return E.default.ipCountryCodeRequest;
                try {
                    let e = u.default.get({
                        url: N.Endpoints.BILLING_COUNTRY_CODE
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
            async function eC() {
                try {
                    let e = await u.default.get({
                        url: N.Endpoints.BILLING_LOCALIZED_PROMO
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

            function eL() {
                a.default.dispatch({
                    type: "RESET_PAYMENT_ID"
                })
            }

            function eO() {
                a.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_RESET"
                })
            }

            function eh(e) {
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
                    return _
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
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
                s = n("49111"),
                d = n("646718");
            async function _(e, t, n, d, _) {
                i.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let l = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        a = {};
                    null != t && (a.country_code = t), null != n && (a.payment_source_id = n), null != d && (a.include_unpublished = d), null != _ && (a.revenue_surface = _), l.query = a, !u.default.ipCountryCodeLoaded && await (0, o.fetchIpCountryCode)();
                    let E = await r.default.get(l);
                    i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, a.captureBillingException)(t), new l.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(e => _(e, t)))
            }

            function c(e, t, n) {
                return Promise.all(d.ACTIVE_PREMIUM_SKUS.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(r => _(r, e, t, void 0, n)))
            }

            function I() {
                i.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("920039");
            n.es(r, t)
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
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                l = n("49111"),
                u = n("782340");
            r = class extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? u.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : u.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        54545: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("888400"),
                i = n("718517"),
                l = n("333805"),
                u = n("782340");
            class a extends l.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        n = (0, r.diffAsUnits)(0, t * i.default.Millis.SECOND);
                    return (0, r.unitsAsStrings)(n, {
                        days: u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var o = a
        },
        736978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorCodes: function() {
                    return r
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return R
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var r, i, l, u, a, o, s, d, _ = n("486196"),
                E = n("614247"),
                c = n("821879"),
                I = n("333805"),
                S = n("782340");
            (a = r || (r = {}))[a.UNKNOWN = 0] = "UNKNOWN", a[a.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", a[a.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", a[a.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", a[a.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", a[a.INVALID_PLAN = 100005] = "INVALID_PLAN", a[a.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", a[a.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", a[a.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", a[a.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", a[a.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", a[a.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", a[a.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", a[a.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", a[a.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", a[a.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", a[a.CARD_DECLINED = 100054] = "CARD_DECLINED", a[a.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", a[a.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", a[a.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", a[a.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", a[a.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", a[a.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", a[a.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", a[a.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", a[a.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", a[a.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", a[a.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (o = i || (i = {})).CARD_NUMBER = "cardNumber", o.CARD_CVC = "cvc", o.CARD_EXPIRATION_DATE = "expirationDate", o.CARD_NAME = "name", o.ADDRESS_NAME = "name", o.ADDRESS_LINE_1 = "line1", o.ADDRESS_LINE_2 = "line2", o.ADDRESS_CITY = "city", o.ADDRESS_STATE = "state", o.ADDRESS_POSTAL_CODE = "postalCode", o.ADDRESS_COUNTRY = "country", (s = l || (l = {})).ADDRESS_LINE_1 = "address_line1", s.ADDRESS_LINE_2 = "address_line2", s.ADDRESS_CITY = "address_city", s.ADDRESS_STATE = "address_state", s.ADDRESS_ZIP = "address_zip", s.ADDRESS_COUNTRY = "address_country", s.CARD_NUMBER = "number", s.CARD_EXPIRATION_DATE = "exp", s.CARD_EXPIRATION_MONTH = "exp_month", s.CARD_EXPIRATION_YEAR = "exp_year";
            let T = Object.freeze({
                    address_line1: "line1",
                    address_line2: "line2",
                    address_city: "city",
                    address_state: "state",
                    address_zip: "postalCode",
                    address_country: "country",
                    number: "cardNumber",
                    exp: "expirationDate",
                    exp_month: "expirationDate",
                    exp_year: "expirationDate"
                }),
                f = Object.freeze({
                    line_1: "line1",
                    line_2: "line2",
                    postal_code: "postalCode"
                });
            (d = u || (u = {})).CARD = "card", d.ADDRESS = "address";
            let N = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                p = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                A = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function R(e) {
                var t, n, r, i, l;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === _.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : null === (r = i.errors) || void 0 === r ? void 0 : r.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (l = e.body) || void 0 === l ? void 0 : l.errors) != null && (e.body = (0, E.default)(e.body.errors))
                }
                return new C(e)
            }
            class C extends I.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, c.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(p) : this._isInFieldSet(N)
                }
                hasAddressError() {
                    return this._isInFieldSet(A)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = S.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = S.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = S.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = S.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = S.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = S.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = S.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = S.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = T[n] || f[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            C.ErrorCodes = r, C.Fields = i, C.Sections = u, C.CARD_ERRORS = N, C.ADDRESS_ERRORS = A;
            var L = C
        },
        852766: function(e, t, n) {
            "use strict";
            n.r(t), n("736978")
        },
        927367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadErrorCodes: function() {
                    return i
                },
                default: function() {
                    return u
                }
            });
            var r, i, l = n("782340");
            (r = i || (i = {}))[r.GENERAL = 0] = "GENERAL", r[r.NO_FILE = 1] = "NO_FILE", r[r.PROGRESS = 2] = "PROGRESS", r[r.UPLOAD = 3] = "UPLOAD", r[r.READ = 4] = "READ";
            var u = class e {
                get displayMessage() {
                    switch (this.code) {
                        case 1:
                            return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case 2:
                            return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case 3:
                            return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case 4:
                            return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                        default:
                            return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
                    }
                }
                constructor(e) {
                    this.code = e
                }
            }
        },
        448993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                V6OrEarlierAPIError: function() {
                    return r.default
                },
                APIError: function() {
                    return i.default
                },
                BillingError: function() {
                    return l.default
                },
                AppliedGuildBoostError: function() {
                    return u.default
                },
                UploadVoiceDebugLogsError: function() {
                    return a.default
                },
                UploadErrorCodes: function() {
                    return a.UploadErrorCodes
                }
            });
            var r = n("333805"),
                i = n("599417"),
                l = n("736978");
            n("852766"), n("846071");
            var u = n("54545"),
                a = n("927367")
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
            }), (i = r || (r = {})).INVITE = "INVITE", i.TEMPLATE = "TEMPLATE", i.BUILD_OVERRIDE = "BUILD_OVERRIDE", i.MANUAL_BUILD_OVERRIDE = "MANUAL_BUILD_OVERRIDE", i.EVENT = "EVENT", i.CHANNEL_LINK = "CHANNEL_LINK", i.APP_DIRECTORY_PROFILE = "APP_DIRECTORY_PROFILE", i.ACTIVITY_BOOKMARK = "ACTIVITY_BOOKMARK", i.EMBEDDED_ACTIVITY_INVITE = "EMBEDDED_ACTIVITY_INVITE", i.GUILD_PRODUCT = "GUILD_PRODUCT", i.SERVER_SHOP = "SERVER_SHOP", i.CLYDE_PROFILE = "CLYDE_PROFILE"
        },
        312016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                remainingPathFromDiscordHostMatch: function() {
                    return F
                },
                default: function() {
                    return V
                },
                parseURLSafely: function() {
                    return x
                },
                findCodedLink: function() {
                    return H
                }
            }), n("781738"), n("222007"), n("424973");
            var r, i, l, u, a, o, s = n("746379"),
                d = n("810793");
            n("355025");
            var _ = n("9294");
            n("42793");
            var E = n("337543"),
                c = n("655518"),
                I = n("253981"),
                S = n("139514"),
                T = n("49111");
            let f = /^\/([a-zA-Z0-9-]+)$/,
                N = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
                p = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
                A = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
                R = /^\/application-directory\/([0-9-]+)\/?$/,
                C = /^\/activities\/([0-9-]+)\/?$/,
                L = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
                O = /^\/channels\/([0-9]+)\/shop$/,
                h = /^\/clyde-profiles\/([0-9-]+)\/?$/,
                P = /^dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+$/i,
                g = w(window.GLOBAL_ENV.INVITE_HOST),
                m = w(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
                y = w(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : "//canary.".concat(T.PRIMARY_DOMAIN)),
                D = w("//canary.".concat(T.PRIMARY_DOMAIN)),
                v = w("//ptb.".concat(T.PRIMARY_DOMAIN)),
                U = w("discordapp.com"),
                M = w("discord.com"),
                G = [c.default.escape(null !== (i = g.host) && void 0 !== i ? i : ""), c.default.escape(null !== (l = m.host) && void 0 !== l ? l : ""), c.default.escape(null !== (u = y.host) && void 0 !== u ? u : ""), c.default.escape(null !== (a = U.host) && void 0 !== a ? a : ""), c.default.escape(null !== (o = M.host) && void 0 !== o ? o : "")].filter(Boolean),
                B = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(G.join("|"), ")"), "g");

            function w(e) {
                if (null == e) return {
                    host: null,
                    pathPrefix: null
                };
                if (e.indexOf("/") >= 0) {
                    let t = (0, s.parse)(e, void 0, !0);
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

            function b(e, t) {
                var n, r, i;
                if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
                let l = null !== (r = t.pathname) && void 0 !== r ? r : "",
                    u = null !== (i = e.pathPrefix) && void 0 !== i ? i : "";
                if (!l.startsWith(u)) return null;
                let a = l.substring(u.length);
                return "" === a ? null : a
            }

            function F(e) {
                var t, n, r, i;
                return null !== (i = null !== (r = null !== (n = null !== (t = b(y, e)) && void 0 !== t ? t : b(D, e)) && void 0 !== n ? n : b(v, e)) && void 0 !== r ? r : b(U, e)) && void 0 !== i ? i : b(M, e)
            }

            function V(e) {
                if (null == e) return [];
                let t = new Set,
                    n = [],
                    r = (e = e.replace(B, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e)).match(I.default.URL_REGEX),
                    i = e.match(P);
                if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
                for (let e of r) {
                    var l, u, a, o;
                    if (n.length >= 10) break;
                    let r = x(e);
                    if (null == r || null == r.pathname) continue;
                    let i = b(g, r),
                        s = b(m, r),
                        c = null !== (o = null !== (a = null !== (u = null !== (l = b(y, r)) && void 0 !== l ? l : b(D, r)) && void 0 !== u ? u : b(v, r)) && void 0 !== a ? a : b(U, r)) && void 0 !== o ? o : b(M, r),
                        I = (e, r) => {
                            !t.has(r) && (t.add(r), n.push({
                                type: e,
                                code: r
                            }))
                        };
                    if ((null == i ? void 0 : i.match(f)) != null) {
                        let e = (0, _.generateInviteKeyFromUrlParams)(i.substring(1), r.search);
                        E.default.getInvite(e), I(S.CodedLinkType.INVITE, e)
                    }(null == s ? void 0 : s.match(f)) != null && I(S.CodedLinkType.TEMPLATE, s.substring(1));
                    let T = null == c ? void 0 : c.match(p);
                    if (null != T) {
                        let e = T[1].toUpperCase();
                        if (e === S.CodedLinkType.INVITE) {
                            let e = (0, _.generateInviteKeyFromUrlParams)(T[2], r.search);
                            I(S.CodedLinkType.INVITE, e)
                        } else I(e, T[2])
                    }(null == c ? void 0 : c.match(N)) != null && I(S.CodedLinkType.CHANNEL_LINK, c.replace("/channels/", ""));
                    let P = function(e) {
                        if (null == e) return null;
                        let t = e.match(A);
                        return null != t && t.length >= 4 ? {
                            guildId: t[1],
                            guildEventId: t[2],
                            recurrenceId: t[4]
                        } : null
                    }(r.pathname);
                    null != P && I(S.CodedLinkType.EVENT, "".concat(P.guildId, "-").concat(P.guildEventId) + (null != P.recurrenceId ? "-".concat(P.recurrenceId) : ""));
                    let G = null == c ? void 0 : c.match(R);
                    if (null != G) {
                        let e = G[1];
                        I(S.CodedLinkType.APP_DIRECTORY_PROFILE, e)
                    }
                    let B = null == c ? void 0 : c.match(h);
                    if (null != B) {
                        let e = B[1];
                        I(S.CodedLinkType.CLYDE_PROFILE, e)
                    }
                    let w = null == c ? void 0 : c.match(C),
                        {
                            activityBookmarkEmbedEnabled: F
                        } = d.ActivityBookmarkEmbedExperiment.getCurrentConfig({
                            location: "78afcf_1"
                        }, {
                            autoTrackExposure: !1
                        });
                    if (null != w && F) {
                        let e = w[1];
                        I(S.CodedLinkType.ACTIVITY_BOOKMARK, e)
                    }
                    let V = null == c ? void 0 : c.match(L);
                    null != V && I(S.CodedLinkType.GUILD_PRODUCT, "".concat(V[1], "-").concat(V[2]));
                    let H = null == c ? void 0 : c.match(O);
                    null != H && I(S.CodedLinkType.SERVER_SHOP, H[1])
                }
                return n
            }

            function x(e) {
                try {
                    return (0, s.parse)(e)
                } catch (e) {
                    return null
                }
            }

            function H(e) {
                return V(e)[0]
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
                    return N
                },
                useCanWatchStream: function() {
                    return p
                },
                getStreamEligibleChannels: function() {
                    return A
                }
            }), n("424973"), n("222007");
            var r, i, l = n("316693"),
                u = n("446674"),
                a = n("76393"),
                o = n("923959"),
                s = n("305961"),
                d = n("957255"),
                _ = n("800762"),
                E = n("404008"),
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

            function N(e, t, n, r, i) {
                let l;
                if (null == e) return [!1, 2];
                let u = t.isInChannel(e.id),
                    a = (0, E.isChannelFull)(e, t, n),
                    o = S(e, r),
                    s = null != i.getAwaitingRemoteSessionInfo() || null != i.getRemoteSessionId();
                s ? l = 0 : o || u ? a && !u && (l = 1) : l = 2;
                let d = !__OVERLAY__ && !s && (u || o && !a);
                return [d, l]
            }

            function p(e) {
                return (0, u.useStateFromStoresArray)([_.default, s.default, d.default, a.default], () => N(e, _.default, s.default, d.default, a.default))
            }

            function A(e, t, n) {
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
                    return _
                },
                scheduledEventSort: function() {
                    return E
                },
                isGuildScheduledEventActive: function() {
                    return m
                },
                isEventUpcoming: function() {
                    return y
                },
                isGuildEventEnded: function() {
                    return D
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
                s = n("26989"),
                d = n("745049");
            let _ = {
                EVENT: "event",
                EVENT_ACTIVE: "active",
                EVENT_UPCOMING: "event-upcoming",
                GUILD_EVENT: e => "".concat(e, "-").concat(_.EVENT),
                GUILD_EVENT_ACTIVE: e => "".concat(e, "-").concat(_.EVENT_ACTIVE),
                GUILD_EVENT_UPCOMING: e => "".concat(e, "-").concat(_.EVENT_UPCOMING),
                CHANNEL_EVENT: e => "".concat(e, "-").concat(_.EVENT),
                CHANNEL_EVENT_ACTIVE: e => "".concat(e, "-").concat(_.EVENT_ACTIVE),
                CHANNEL_EVENT_UPCOMING: e => "".concat(e, "-").concat(_.EVENT_UPCOMING)
            };

            function E(e) {
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
                    return null != n && i.push(n), i.push(_.GUILD_EVENT(t)), null != r && i.push(_.CHANNEL_EVENT(r)), m(e) && (i.push(_.EVENT_ACTIVE), i.push(_.GUILD_EVENT_ACTIVE(t)), null != r && i.push(_.CHANNEL_EVENT_ACTIVE(r))), y(e) && (i.push(_.EVENT_UPCOMING), i.push(_.GUILD_EVENT_UPCOMING(t)), null != r && i.push(_.CHANNEL_EVENT_UPCOMING(r))), i
                }, E),
                I = 0,
                S = [],
                T = "SERIES",
                f = {},
                N = {};

            function p(e) {
                c.set(e.id, e), I += 1
            }

            function A(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                c.delete(e), delete f[e], t && delete N[e], I += 1
            }

            function R(e) {
                return null != e ? e : T
            }

            function C(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = e.guild_scheduled_event_id;
                null == f[r] && (f[r] = {});
                let i = R(e.guild_scheduled_event_exception_id);
                null == f[r][i] && (f[r][i] = {}), f[r][i][e.user_id] = e, t && function(e) {
                    var t, n;
                    let r = R(e.guild_scheduled_event_exception_id),
                        i = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                        l = null != e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.INTERESTED ? 1 : -1;
                    O(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + l)
                }(e), n && (I += 1)
            }

            function L(e) {
                var t, n, r, i;
                let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    u = R(e.guild_scheduled_event_exception_id),
                    a = (null === (n = f[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[u]) || void 0 === t ? void 0 : t[e.user_id]) != null,
                    s = e.user_id === o.default.getId();
                (a || !s) && (null === (i = f[e.guild_scheduled_event_id]) || void 0 === i || null === (r = i[u]) || void 0 === r || delete r[e.user_id], function(e) {
                    var t, n;
                    let r = R(e.guild_scheduled_event_exception_id),
                        i = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                        l = null != e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.INTERESTED ? -1 : 1;
                    O(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + l)
                }(e), l && (I += 1))
            }

            function O(e, t, n) {
                let r = R(t);
                null == N[e] && (N[e] = {}), N[e][r] = n
            }

            function h(e, t) {
                c.values(_.GUILD_EVENT(e)).forEach(e => A(e.id, t))
            }

            function P(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return p(t), !0
            }

            function g(e) {
                let {
                    eventException: t
                } = e, n = c.get(t.event_id);
                if (null == n) return !1;
                let r = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
                    i = [...n.guild_scheduled_event_exceptions];
                return r < 0 ? i.push(t) : i[r] = t, p({
                    ...n,
                    guild_scheduled_event_exceptions: i
                }), !0
            }

            function m(e) {
                var t;
                return null != e && (t = (null == e ? void 0 : e.status) === d.GuildScheduledEventStatus.ACTIVE, t)
            }

            function y(e) {
                return !d.GuildScheduledEventStatusDone.has(e.status)
            }

            function D(e) {
                return null != e && d.GuildScheduledEventStatusDone.has(e.status)
            }
            class v extends l.default.Store {
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
                    let l = R(t);
                    return null === (i = f[e]) || void 0 === i ? void 0 : null === (r = i[l]) || void 0 === r ? void 0 : r[n]
                }
                isInterestedInEventRecurrence(e, t) {
                    let n = o.default.getId(),
                        r = this.getRsvp(e, null, n),
                        i = this.getRsvp(e, t, n),
                        l = (null == r ? void 0 : r.response) === d.GuildScheduledEventUserResponses.INTERESTED,
                        u = (null == i ? void 0 : i.response) === d.GuildScheduledEventUserResponses.INTERESTED,
                        a = (null == i ? void 0 : i.response) === d.GuildScheduledEventUserResponses.UNINTERESTED;
                    return l && !a || u
                }
                getUserCount(e, t) {
                    var n, r, i, l;
                    if (null == e) return 0;
                    let u = null !== (i = null === (n = N[e]) || void 0 === n ? void 0 : n[T]) && void 0 !== i ? i : 0;
                    if (null == t) return u;
                    let a = null !== (l = null === (r = N[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== l ? l : 0;
                    return u - a
                }
                hasUserCount(e, t) {
                    var n;
                    let r = R(t);
                    return (null === (n = N[e]) || void 0 === n ? void 0 : n[r]) != null
                }
                isActive(e) {
                    return null != e && m(c.get(e))
                }
                getActiveEventByChannel(e) {
                    if (null == e) return;
                    let t = this.getGuildScheduledEventsByIndex(_.CHANNEL_EVENT_ACTIVE(e));
                    return t[0]
                }
                getUsersForGuildEvent(e, t) {
                    var n, r;
                    if (null == e) return {};
                    let i = R(t);
                    return null !== (r = null === (n = f[e]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : {}
                }
            }
            v.displayName = "GuildScheduledEventStore";
            var U = new v(a.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        guilds: t
                    } = e;
                    return c.clear(), I = 0, f = {}, N = {}, S.forEach(p), t.forEach(e => e.guild_scheduled_events.forEach(e => p(e))), !0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return h(t.id, !1), t.guild_scheduled_events.forEach(e => p(e)), !0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return h(t.id, !0), !0
                },
                FETCH_GUILD_EVENT: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    p(t)
                },
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t,
                        guildScheduledEvents: n
                    } = e, r = c.values(_.GUILD_EVENT(t), !0).map(e => e.id), l = n.map(e => e.id);
                    for (let e of (i.difference(r, l).forEach(e => {
                            A(e)
                        }), n)) p(e);
                    return !0
                },
                GUILD_SCHEDULED_EVENT_CREATE: P,
                GUILD_SCHEDULED_EVENT_UPDATE: P,
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    return A(t.id), !0
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    var t, n;
                    let {
                        userId: r,
                        guildEventId: i,
                        guildId: l,
                        guildEventExceptionId: u,
                        response: a
                    } = e, o = R(u), d = null === (n = f[i]) || void 0 === n ? void 0 : null === (t = n[o]) || void 0 === t ? void 0 : t[r];
                    null != d && L(d, !1);
                    let _ = s.default.getMember(l, r);
                    return C({
                        user_id: r,
                        guild_scheduled_event_id: i,
                        member: null != _ ? _ : {
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
                    L({
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
                    return t.forEach(e => C(e, !1, !1)), I += 1, !0
                },
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
                    let {
                        guildScheduledEventUsers: t
                    } = e;
                    return t.forEach(e => C(e, !1, !1)), I += 1, !0
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
                    return null != n && (p(n), !0)
                },
                GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: g,
                GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: g,
                GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
                    let {
                        eventException: t
                    } = e, n = c.get(t.event_id);
                    if (null == n) return !1;
                    let r = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
                    return p({
                        ...n,
                        guild_scheduled_event_exceptions: r
                    }), !0
                },
                GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function(e) {
                    let {
                        eventId: t
                    } = e, n = c.get(t);
                    return null != n && (p({
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
            var r, i, l, u, a, o, s, d;
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
            }), (a = r || (r = {})).SENDING = "sending", a.SENT = "sent", a.ERROR = "error", (o = i || (i = {}))[o.GUILD = 0] = "GUILD", o[o.GROUP_DM = 1] = "GROUP_DM", o[o.FRIEND = 2] = "FRIEND", (s = l || (l = {}))[s.STREAM = 1] = "STREAM", s[s.EMBEDDED_APPLICATION = 2] = "EMBEDDED_APPLICATION", s[s.ROLE_SUBSCRIPTIONS_PURCHASE = 3] = "ROLE_SUBSCRIPTIONS_PURCHASE", (d = u || (u = {})).MAIN = "main", d.SETTINGS = "settings", d.GUEST = "guest"
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
                    return s
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

            function s(e) {
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
                    return s
                },
                isEmbeddedApplicationInvite: function() {
                    return d
                },
                getInviteType: function() {
                    return _
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

            function s(e) {
                return e.target_type === l.InviteTargetTypes.STREAM && null != e.target_user
            }

            function d(e) {
                return e.target_type === l.InviteTargetTypes.EMBEDDED_APPLICATION
            }

            function _(e) {
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
                    return N
                },
                canViewChannel: function() {
                    return p
                },
                isAccessibleChannelPath: function() {
                    return A
                }
            });
            var r = n("42203"),
                i = n("305961"),
                l = n("957255"),
                u = n("655518"),
                a = n("49111"),
                o = n("724210");
            let s = Array.from(o.StaticChannelRoutes).map(e => u.default.escape(e)).join("|"),
                d = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)?(\\d+|").concat(s, ")?")),
                _ = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)(\\d+|").concat(s, ")(?:/)(\\d+)")),
                E = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                c = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                I = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
                S = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(a.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                T = RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function f(e) {
                if (null == e) return null;
                let t = e.match(_);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                let n = e.match(E);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                let r = e.match(d);
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

            function N(e) {
                if (null == e) return null;
                let t = e.match(I);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2],
                    recurrenceId: t[3]
                } : null
            }

            function p(e) {
                return !!e.isPrivate() || l.default.can(a.Permissions.VIEW_CHANNEL, e)
            }

            function A(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                if (null == i.default.getGuild(t) && t !== a.ME) return !1;
                if (null == n) return !0;
                let l = r.default.getChannel(n);
                return null != l && p(l)
            }
        },
        711326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMediaPostEmbedCommonData: function() {
                    return E
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
                s = n("49111"),
                d = n("894488"),
                _ = n("782340");

            function E(e) {
                var t, n, r, i, l;
                let {
                    mediaPostEmbedData: s,
                    guild: E,
                    parentChannel: c,
                    postThread: I,
                    user: S,
                    selectedGuildId: T,
                    canAccess: f = !1
                } = e;
                if (null == s) return null;
                let N = (0, o.getThumbnailImage)(s.thumbnail),
                    p = !f && s.has_media_attachment,
                    A = f ? _.default.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : _.default.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
                    R = null != S ? a.default.getName(s.guild_id, s.channel_id, S) : void 0,
                    C = null == S ? void 0 : S.getAvatarURL(null == E ? void 0 : E.id, 40);
                (null == C || T !== s.guild_id) && (C = u.default.getGuildIconURL({
                    id: s.guild_id,
                    icon: s.guild_icon,
                    size: 40,
                    canAnimate: !1
                }));
                let L = function(e) {
                        if (null == e) return !1;
                        let {
                            height: t,
                            width: n
                        } = e;
                        return null != t && null != n && t >= n
                    }(s.thumbnail) && !p,
                    O = (null === (t = s.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (r = s.thumbnail) || void 0 === r ? void 0 : null === (n = r.filename) || void 0 === n ? void 0 : n.startsWith(d.SPOILER_ATTACHMENT_PREFIX));
                return {
                    title: null !== (i = s.title) && void 0 !== i ? i : "",
                    subtitle: s.description,
                    ctaText: A,
                    coverImage: N,
                    coverImageOverlayText: p ? _.default.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
                    parentChannelId: s.parent_channel_id,
                    threadId: s.channel_id,
                    postThread: I,
                    messageId: s.message_id,
                    canAccess: f,
                    guildId: s.guild_id,
                    guildName: null !== (l = null == E ? void 0 : E.name) && void 0 !== l ? l : s.guild_name,
                    authorId: null == s ? void 0 : s.author_id,
                    authorName: R,
                    channelName: null == c ? void 0 : c.name,
                    avatarUrl: C,
                    shouldShowBlurredThumbnailImage: p,
                    shouldContainMediaWithBackground: L,
                    shouldSpoiler: O,
                    obscureAwaitingScan: !1,
                    flags: s.flags,
                    contentScanVersion: s.content_scan_version
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
                let r = n.hasFeature(s.GuildFeatures.CREATOR_MONETIZABLE) || n.hasFeature(s.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
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
        821879: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                reducedPaymentInfoExperiment: function() {
                    return l
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                id: "2023-06_reduced_payment_method_address_info",
                label: "Reduced Payment Method Address Info",
                kind: "user",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Simplify address form",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Partial address in card form",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function l() {
                let {
                    autoTrackExposure: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    autoTrackExposure: !0
                }, t = i.getCurrentConfig({
                    location: "2b69fe_1"
                }, {
                    autoTrackExposure: e
                });
                return t
            }
        },
        488464: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return K
                }
            }), n("222007"), n("808653"), n("424973");
            var r = n("714617"),
                i = n.n(r),
                l = n("917351"),
                u = n.n(l),
                a = n("446674"),
                o = n("407846"),
                s = n("913144"),
                d = n("374014"),
                _ = n("373469"),
                E = n("271938"),
                c = n("42203"),
                I = n("305961"),
                S = n("957255"),
                T = n("27618"),
                f = n("280168"),
                N = n("697218"),
                p = n("800762"),
                A = n("316133"),
                R = n("998716"),
                C = n("325861"),
                L = n("834052"),
                O = n("49111");
            let h = new o.default(e => [function(e) {
                    var t;
                    return null !== (t = e.getGuildId()) && void 0 !== t ? t : O.NO_GUILD_STRING_GUILD_ID
                }(e)], e => e.id),
                P = new Set,
                g = {};

            function m(e) {
                return h.values(null != e ? e : void 0, !0).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                })
            }

            function y(e) {
                !P.has(e) && (P.add(e), u(c.default.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
                    U(e) && h.set(e.id, e)
                }))
            }

            function D(e) {
                let t = g[e];
                if (null != t) return t;
                let n = c.default.getChannel(e);
                return null != n && n.isGuildStageVoice() ? (y(n.guild_id), U(n)) ? v(e) : null : null
            }

            function v(e) {
                let t = g[e];
                return null == t && (t = new R.default(e), g[e] = t, t.rebuild()), t
            }

            function U(e) {
                return null != e && e.isGuildStageVoice() && A.default.countVoiceStatesForChannel(e.id) > 0
            }

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m();
                return t.reduce((t, n) => {
                    let r = v(n),
                        i = e(r);
                    return i ? (! function(e, t) {
                        let n = c.default.getChannel(e);
                        null != n && n.isGuildStageVoice() ? 0 === t.size() ? B(n.id) : null == h.get(n.id) && h.set(n.id, n) : B(e)
                    }(n, r), !0) : t
                }, !1)
            }

            function G(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m();
                return M(t => t.updateParticipant(e), t)
            }

            function B(e) {
                return null != e && (delete g[e], h.delete(e), !0)
            }

            function w() {
                P.clear(), h.clear(), g = {}
            }

            function b(e, t, n) {
                if (null == n || e.has(n)) return;
                let r = c.default.getChannel(n);
                (null == r ? void 0 : r.isGuildStageVoice()) && (t.add(n), e.add(n))
            }

            function F(e) {
                let {
                    user: t
                } = e;
                return G(t.id)
            }

            function V(e) {
                let {
                    relationship: t
                } = e;
                return G(t.id)
            }

            function x(e) {
                let {
                    guild: t
                } = e;
                ! function(e) {
                    let t = h.values(e);
                    for (let e of t) h.delete(e.id), delete g[e.id];
                    P.delete(e)
                }(t.id)
            }

            function H(e) {
                let {
                    streamKey: t
                } = e, {
                    channelId: n,
                    guildId: r,
                    ownerId: i
                } = (0, d.decodeStreamKey)(t);
                return !!(null != r && P.has(r)) && G(i, [n])
            }
            let k = [];
            class Y extends a.default.Store {
                initialize() {
                    this.waitFor(E.default, N.default, c.default, f.default, p.default, S.default, A.default, I.default, C.default, T.default, L.default, _.default)
                }
                getParticipantsVersion(e) {
                    var t, n;
                    return null == e ? -1 : null !== (n = null === (t = D(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
                }
                getMutableParticipants(e, t) {
                    var n, r;
                    return null == e ? k : null !== (r = null === (n = D(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== r ? r : k
                }
                getMutableRequestToSpeakParticipants(e) {
                    var t, n;
                    return null !== (n = null === (t = D(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : k
                }
                getRequestToSpeakParticipantsVersion(e) {
                    var t, n;
                    return null !== (n = null === (t = D(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
                }
                getParticipantCount(e, t) {
                    var n, r;
                    return null !== (r = null === (n = D(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== r ? r : 0
                }
                getChannels(e) {
                    return y(null != e ? e : O.NO_GUILD_STRING_GUILD_ID), h.values(null != e ? e : O.NO_GUILD_STRING_GUILD_ID)
                }
                getChannelsVersion() {
                    return h.version
                }
                getParticipant(e, t) {
                    var n, r;
                    return null !== (r = null === (n = D(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== r ? r : null
                }
            }
            Y.displayName = "StageChannelParticipantStore";
            var K = new Y(s.default, {
                CONNECTION_OPEN: w,
                OVERLAY_INITIALIZE: w,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = new Set;
                    return t.reduce((e, t) => {
                        if (null == t.guildId || !P.has(t.guildId)) return e;
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
                    return B(t)
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        members: t
                    } = e, n = !1;
                    for (let e of t) n = G(e.user.id) || n;
                    return n
                },
                USER_UPDATE: F,
                GUILD_MEMBER_REMOVE: F,
                GUILD_MEMBER_UPDATE: F,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = t.reduce((e, t) => {
                        if (!t.isGuildStageVoice() || !P.has(t.guild_id)) return e;
                        let n = h.get(t.id);
                        return null == n || i(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), h.set(t.id, t), e)
                    }, []);
                    return M(e => e.rebuild(), n), n.length > 0
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (P.has(t)) return M(e => e.rebuild(), m(t))
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        channelId: t,
                        guildId: n,
                        userId: r
                    } = e;
                    return !!(null != n && P.has(n)) && G(r, [t])
                },
                STREAM_CLOSE: H,
                STREAM_DELETE: H,
                RELATIONSHIP_ADD: V,
                RELATIONSHIP_REMOVE: V,
                GUILD_CREATE: x,
                GUILD_DELETE: x,
                PASSIVE_UPDATE_V1: function(e) {
                    let t = !1;
                    for (let n of m(e.guildId)) t = v(n).rebuild() || t;
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
                s = n("246846"),
                d = n("374014"),
                _ = n("373469"),
                E = n("42203"),
                c = n("124948"),
                I = n("26989"),
                S = n("27618"),
                T = n("697218"),
                f = n("800762"),
                N = n("387111"),
                p = n("325861"),
                A = n("834052"),
                R = n("808422"),
                C = n("922673"),
                L = n("49111");

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
                } = e, d = a.selfMute ? "\x01" : "\x00", _ = a.selfVideo ? "\x00" : "\x01", E = "".concat(null !== (t = null == r ? void 0 : r.position) && void 0 !== t ? t : 999).padStart(3, "0");
                return "".concat(n ? "\x00" : "\x01").concat("STREAM" === o ? "\x00" : "\x01").concat(d).concat(_).concat(E).concat(u).concat((0, s.default)(l, i))
            }

            function h(e) {
                let {
                    user: t,
                    voiceState: n
                } = e, r = n.requestToSpeakTimestamp;
                return null == r ? t.id : "".concat(Date.parse(r)).concat(t.id)
            }

            function P(e) {
                return e === R.RequestToSpeakStates.REQUESTED_TO_SPEAK || e === R.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }

            function g(e) {
                let {
                    speaker: t,
                    role: n,
                    rtsState: r,
                    blocked: i,
                    isFriend: l
                } = e, u = [];
                return P(r) && u.push("ALL_REQUESTED_TO_SPEAK"), r === R.RequestToSpeakStates.REQUESTED_TO_SPEAK && u.push("REQUESTED_TO_SPEAK_ONLY"), t ? u.push("SPEAKER") : (null != n ? u.push(n.id) : u.push("NO_ROLE"), u.push("AUDIENCE")), i && u.push("BLOCKED"), l && u.push("FRIEND"), u
            }(u = r || (r = {})).SPEAKER = "SPEAKER", u.AUDIENCE = "AUDIENCE", u.NO_ROLE = "NO_ROLE", u.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", u.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", u.BLOCKED = "BLOCKED", u.FRIEND = "FRIEND", u.SELECTED = "SELECTED", u.MEDIA = "MEDIA", (a = i || (i = {})).VOICE = "VOICE", a.STREAM = "STREAM", l = class {
                _getParticipantsForUser(e, t) {
                    var n, r;
                    let i;
                    let l = [],
                        u = f.default.getVoiceStateForChannel(this.channelId, e);
                    if (null == u) return l;
                    let a = T.default.getUser(e);
                    if (null == a) return null != this.guildId && A.default.isPublic(this.channelId) && c.default.requestMember(this.guildId, e), l;
                    let o = null != t ? t[0] : null,
                        s = {
                            user: a,
                            userNick: N.default.getName(this.guildId, this.channelId, a),
                            voiceState: u,
                            role: (0, C.getHighestHoistedRole)(this.guildId, e),
                            speaker: p.default.isSpeaker(e, this.channelId),
                            member: null != this.guildId ? I.default.getMember(this.guildId, e) : null,
                            blocked: S.default.getRelationships()[a.id] === L.RelationshipTypes.BLOCKED,
                            isFriend: S.default.isFriend(a.id),
                            connectedOn: null !== (n = null == o ? void 0 : o.connectedOn) && void 0 !== n ? n : Date.now()
                        },
                        E = {
                            ...s,
                            type: "VOICE",
                            id: a.id,
                            rtsState: (0, R.getAudienceRequestToSpeakState)(u)
                        };
                    l.push(E);
                    let O = null !== (r = _.default.getStreamForUser(e, this.guildId)) && void 0 !== r ? r : _.default.getActiveStreamForUser(e, this.guildId);
                    if (null != O && O.channelId === this.channelId) {
                        let e = (0, d.encodeStreamKey)(O);
                        i = {
                            ...s,
                            id: e,
                            type: "STREAM",
                            rtsState: R.RequestToSpeakStates.NONE
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
                        this._participantsIndex.set(t.id, t), t.id === e && P(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e)
                    }), this.participants[e] = n, !0)
                }
                rebuild() {
                    let e = E.default.getChannel(this.channelId);
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
                    this.participants = {}, this._participantsIndex = new o.default(g, O), this._requestToSpeakIndex = new o.default(() => [], h), this.channelId = e, this.guildId = null === (t = E.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
                }
            }
        },
        325861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            }), n("222007"), n("808653");
            var r, i, l = n("917351"),
                u = n.n(l),
                a = n("446674"),
                o = n("913144"),
                s = n("42203"),
                d = n("923959"),
                _ = n("26989"),
                E = n("305961"),
                c = n("697218"),
                I = n("800762"),
                S = n("991170"),
                T = n("923510"),
                f = n("808422");
            (i = r || (r = {})).SPEAKER = "speaker", i.MODERATOR = "moderator";
            let N = {},
                p = {
                    speaker: !1,
                    moderator: !1
                };

            function A(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                null == N[t] && (N[t] = {});
                let r = function(e, t) {
                    var n, r, i;
                    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        u = s.default.getChannel(t),
                        a = null == u ? void 0 : u.getGuildId(),
                        o = E.default.getGuild(a);
                    if (null == o || null == u || !u.isGuildStageVoice()) return p;
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
                return N[t][e] = r, r
            }

            function R(e, t) {
                var n;
                if (null == t) return !1;
                let r = s.default.getChannel(t);
                return !!(null != r && r.isGuildStageVoice()) && (null === (n = N[t]) || void 0 === n || delete n[e], !0)
            }

            function C(e) {
                let t = d.default.getChannels(e)[d.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.isGuildStageVoice()
                });
                for (let {
                        channel: e
                    }
                    of t) delete N[e.id];
                return t.length > 0
            }

            function L(e) {
                let {
                    guildId: t,
                    user: n
                } = e;
                return null != n && null != t && function(e, t) {
                    for (let n in N) {
                        let r = s.default.getBasicChannel(n);
                        if (null != r) r.guild_id === t && delete N[n][e]
                    }
                    return !0
                }(n.id, t)
            }

            function O(e) {
                let {
                    guild: t
                } = e;
                for (let e in N) {
                    let n = s.default.getBasicChannel(e);
                    (null == n || n.guild_id === t.id) && delete N[e]
                }
            }
            class h extends a.default.Store {
                initialize() {
                    this.waitFor(_.default, s.default, E.default, c.default, I.default)
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
                    if (null == e || null == t) return p;
                    let i = null === (n = N[t]) || void 0 === n ? void 0 : n[e];
                    if (null != i) return r && null == i.moderator ? A(e, t, !0) : i;
                    return A(e, t, r)
                }
            }
            h.displayName = "StageChannelRoleStore";
            var P = new h(o.default, {
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t) delete N[e.id]
                },
                CONNECTION_OPEN: function() {
                    N = {}
                },
                GUILD_MEMBER_REMOVE: L,
                GUILD_MEMBER_UPDATE: L,
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    C(t)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t;
                    let n = C(e.guildId);
                    for (let r of null !== (t = e.voiceStates) && void 0 !== t ? t : []) n = R(r.userId, r.channelId) || n;
                    return n
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return !u.isEmpty(N) && t.reduce((e, t) => {
                        let {
                            userId: n,
                            channelId: r
                        } = t;
                        return R(n, r) || e
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
                s = n("76393"),
                d = n("374014"),
                _ = n("223913"),
                E = n("537429"),
                c = n("271938"),
                I = n("42203"),
                S = n("305961"),
                T = n("42887"),
                f = n("957255"),
                N = n("945956"),
                p = n("568307"),
                A = n("18494"),
                R = n("800762"),
                C = n("49111"),
                L = n("706530");
            let O = null,
                h = {},
                P = null;

            function g() {
                r = new Map, i = {}, l = {}, u = {}, h = {}
            }
            g();

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

            function D(e) {
                let {
                    streamKey: t,
                    region: n,
                    viewerIds: i,
                    paused: u
                } = e;
                r.set(t, {
                    ...(0, d.decodeStreamKey)(t),
                    state: u ? C.ApplicationStreamStates.PAUSED : C.ApplicationStreamStates.ACTIVE
                }), l[t] = {
                    streamKey: t,
                    region: n,
                    viewerIds: i
                }
            }

            function v(e, t) {
                return e === L.StreamTypes.CALL || f.default.canWithPartialContext(C.Permissions.VIEW_CHANNEL, {
                    channelId: t
                })
            }

            function U(e) {
                let t = I.default.getChannel(e.channelId);
                return !!v(e.streamType, e.channelId) || null != t && (0, _.canWatchStream)(t, R.default, S.default, f.default, s.default)[0]
            }
            class M extends a.default.Store {
                initialize() {
                    this.syncWith([f.default], () => !0), this.waitFor(p.default, f.default)
                }
                isSelfStreamHidden(e) {
                    var t;
                    return null !== (t = h[e]) && void 0 !== t && t
                }
                getLastActiveStream() {
                    var e;
                    return (0, E.default)(T.default) ? null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null : null
                }
                getAllActiveStreams() {
                    return (0, E.default)(T.default) ? Array.from(r.values()) : []
                }
                getAllActiveStreamsForChannel(e) {
                    return (0, E.default)(T.default) ? Array.from(r.values()).filter(t => t.channelId === e) : []
                }
                getActiveStreamForStreamKey(e) {
                    var t;
                    return (0, E.default)(T.default) ? null !== (t = r.get(e)) && void 0 !== t ? t : null : null
                }
                getActiveStreamForApplicationStream(e) {
                    var t;
                    if (!(0, E.default)(T.default) || null == e) return null;
                    let n = (0, d.encodeStreamKey)(e);
                    return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
                }
                getCurrentUserActiveStream() {
                    let e = A.default.getVoiceChannelId(),
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
                    let t = A.default.getVoiceChannelId(),
                        n = I.default.getChannel(t);
                    if (null == n) return null;
                    let r = this.getActiveStreamForUser(c.default.getId(), n.getGuildId());
                    return null == r ? null : null !== (e = u[(0, d.encodeStreamKey)(r)]) && void 0 !== e ? e : null
                }
                getAnyStreamForUser(e) {
                    var t;
                    if (!(0, E.default)(T.default)) return null;
                    let n = i[e];
                    return null == n ? null : null !== (t = Object.values(n).find(e => U(e))) && void 0 !== t ? t : null
                }
                getStreamForUser(e, t) {
                    var n;
                    if (!(0, E.default)(T.default)) return null;
                    let r = null === (n = i[e]) || void 0 === n ? void 0 : n[null != t ? t : C.NULL_STRING_GUILD_ID];
                    return null != r && U(r) ? r : null
                }
                getRTCStream(e) {
                    var t;
                    return (0, E.default)(T.default) ? null !== (t = l[e]) && void 0 !== t ? t : null : null
                }
                getAllApplicationStreams() {
                    return (0, E.default)(T.default) ? y().filter(e => null != e && v(e.streamType, e.channelId)) : []
                }
                getAllApplicationStreamsForChannel(e) {
                    return (0, E.default)(T.default) ? y().filter(t => null != t && t.channelId === e && v(t.streamType, t.channelId)) : []
                }
                getViewerIds(e) {
                    if (!(0, E.default)(T.default)) return [];
                    let t = null;
                    t = "string" == typeof e ? e : (0, d.encodeStreamKey)(e);
                    let n = null != t ? l[t] : null;
                    return null != n ? n.viewerIds : []
                }
                getCurrentAppIntent() {
                    return P
                }
                getState() {
                    return (0, E.default)(T.default) ? {
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
                        let {
                            userId: n,
                            guildId: r,
                            channelId: l,
                            sessionId: u,
                            selfStream: a
                        } = t;
                        if (a && null != l) {
                            var o, s;
                            return null == i[(o = {
                                streamType: null != r ? L.StreamTypes.GUILD : L.StreamTypes.CALL,
                                ownerId: n,
                                guildId: r,
                                channelId: l
                            }).ownerId] && (i[o.ownerId] = {}), i[o.ownerId][null !== (s = o.guildId) && void 0 !== s ? s : C.NULL_STRING_GUILD_ID] = o, !0
                        } {
                            let t = c.default.getSessionId();
                            return n === c.default.getId() && u !== t && null != N.default.getChannelId() ? e : function(e, t) {
                                var n;
                                let r = null != t ? t : C.NULL_STRING_GUILD_ID;
                                return (null === (n = i[e]) || void 0 === n ? void 0 : n[r]) != null && (delete i[e][r], !0)
                            }(n, r) || e
                        }
                    }, !1)
                },
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t
                    } = e, n = (0, d.decodeStreamKey)(t);
                    r.delete(t), r.set(t, {
                        ...n,
                        state: C.ApplicationStreamStates.CONNECTING
                    }), n.ownerId === c.default.getId() && (h[n.channelId] = !1)
                },
                STREAM_START: function(e) {
                    let {
                        streamType: t,
                        guildId: n,
                        channelId: i,
                        pid: l,
                        sourceName: a
                    } = e, o = (0, d.encodeStreamKey)({
                        streamType: t,
                        guildId: n,
                        channelId: i,
                        ownerId: c.default.getId()
                    }), s = null != l ? p.default.getGameForPID(l) : null;
                    u[o] = {
                        id: null == s ? void 0 : s.id,
                        pid: l,
                        sourceName: a
                    }, r.delete(o), r.set(o, {
                        streamType: t,
                        guildId: n,
                        channelId: i,
                        ownerId: c.default.getId(),
                        state: C.ApplicationStreamStates.CONNECTING
                    })
                },
                STREAM_STOP: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    u[t] = null
                },
                STREAM_CREATE: D,
                STREAM_UPDATE: D,
                STREAM_TIMED_OUT: function(e) {
                    let {
                        streamKey: t
                    } = e, n = r.get(t);
                    if (null == n) return !1;
                    r.set(t, {
                        ...n,
                        state: C.ApplicationStreamStates.FAILED
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
                    let o = C.ApplicationStreamStates.ENDED;
                    if (i) o = C.ApplicationStreamStates.RECONNECTING;
                    else if (u === C.ApplicationStreamDeleteReasons.UNAUTHORIZED) o = C.ApplicationStreamStates.FAILED;
                    else if (u === C.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
                        let {
                            guildId: e
                        } = (0, d.decodeStreamKey)(t);
                        n.el("772545").then(n.bind(n, "772545")).then(t => {
                            let {
                                default: n
                            } = t;
                            n(e)
                        }), o = C.ApplicationStreamStates.ENDED
                    }
                    r.set(t, {
                        ...a,
                        state: o
                    }), o === C.ApplicationStreamStates.ENDED && O !== t && m(t)
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
                    } = e, r = (0, d.isStreamKey)(O);
                    r && (null == O ? void 0 : O.includes(c.default.getId())) && !1 === h[t] && !0 === n && (O = null), h[t] = n
                },
                SET_STREAM_APP_INTENT: function(e) {
                    let {
                        intent: t
                    } = e;
                    P = t
                },
                RTC_CONNECTION_STATE: function(e) {
                    let {
                        streamKey: t,
                        state: n
                    } = e;
                    if (null == t) return !1;
                    let i = r.get(t);
                    if (null == i || i.state === C.ApplicationStreamStates.ENDED) return !1;
                    let l = i.state;
                    switch (n) {
                        case C.RTCConnectionStates.DISCONNECTED:
                            l = C.ApplicationStreamStates.RECONNECTING;
                            break;
                        case C.RTCConnectionStates.RTC_CONNECTED:
                            l = C.ApplicationStreamStates.ACTIVE
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
                            (0, d.encodeStreamKey)(e) !== O && e.state === C.ApplicationStreamStates.ENDED && m((0, d.encodeStreamKey)(e))
                        }), null == t) return;
                    let i = (0, d.isStreamKey)(t);
                    i && t.includes(c.default.getId()) && (h[n] = !1)
                },
                CONNECTION_OPEN: g,
                CONNECTION_CLOSED: g,
                LOGOUT: g
            })
        },
        124948: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var r = n("917351"),
                i = n.n(r),
                l = n("446674"),
                u = n("913144"),
                a = n("49978"),
                o = n("560208"),
                s = n("42203"),
                d = n("26989");
            let _ = new a.default(d.default.isMember, (e, t) => {
                u.default.dispatch({
                    type: "GUILD_MEMBERS_REQUEST",
                    guildIds: [e],
                    userIds: t
                })
            });

            function E() {
                _.reset()
            }

            function c(e, t) {
                return _.request(e, t), !1
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
                } = e, r = s.default.getChannel(t);
                return null != r && null != r.guild_id && I(r.guild_id, n)
            }

            function T(e) {
                let {
                    guildId: t,
                    messages: n
                } = e;
                return null != t && I(t, i.flatten(n))
            }
            class f extends l.default.Store {
                initialize() {
                    this.waitFor(s.default, d.default)
                }
                requestMember(e, t) {
                    c(e, t)
                }
            }
            f.displayName = "GuildMemberRequesterStore";
            var N = new f(u.default, {
                CONNECTION_CLOSED: E,
                CONNECTION_OPEN: E,
                CONNECTION_RESUMED: function() {
                    return _.requestUnacknowledged(), !1
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: n,
                        notFound: r
                    } = e;
                    return n.forEach(e => {
                        _.acknowledge(t, e.user.id)
                    }), null != r && r.forEach(e => _.acknowledge(t, e)), !1
                },
                SEARCH_FINISH: T,
                MOD_VIEW_SEARCH_FINISH: T,
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
                s = {};

            function d(e, t) {
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
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [o.guild.id]: e
                })
            }

            function _(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class E extends r.default.Store {
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
                    return s[e]
                }
            }
            E.displayName = "InviteStore";
            var c = new E(i.default, {
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
                    return d(e.code, t => {
                        var n, r;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: _,
                INSTANT_INVITE_REVOKE_SUCCESS: _,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = u.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = u.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, r;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = u.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, d(e.code, e => {
                        e.state = u.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        280168: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007"), n("702976"), n("808653");
            var r = n("446674"),
                i = n("913144"),
                l = n("991170"),
                u = n("42203"),
                a = n("42887"),
                o = n("945956"),
                s = n("18494"),
                d = n("49111"),
                _ = n("353927");
            let E = new Map,
                c = null,
                I = null,
                S = null;

            function T(e, t) {
                let n = E.get(e);
                if (null == n) return !1;
                let r = n.delete(t);
                return 0 === n.size && E.delete(e), r
            }

            function f(e, t, n) {
                var r, i, l;
                let u = null !== (l = null === (i = E.get(e)) || void 0 === i ? void 0 : null === (r = i.get(t)) || void 0 === r ? void 0 : r.flags) && void 0 !== l ? l : _.SpeakingFlags.NONE;
                return (u & n) === n
            }

            function N(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = E.get(e);
                if (null == r) return !1;
                for (let [e, {
                        flags: i
                    }] of r)
                    if ((!n || e !== c) && (i & t) === t) return !0;
                return !1
            }

            function p(e) {
                let {
                    user: t,
                    sessionId: n
                } = e;
                c = t.id, I = n, S = null
            }
            class A extends r.default.Store {
                initialize() {
                    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(o.default)
                }
                getSpeakingDuration(e, t) {
                    var n, r;
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.MediaEngineContextTypes.DEFAULT,
                        l = null === (r = E.get(i)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.since;
                    return null != l ? t - l : 0
                }
                getSpeakers() {
                    var e, t;
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.MediaEngineContextTypes.DEFAULT;
                    return Array.from(null !== (t = null === (e = E.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter(e => f(n, e, _.SpeakingFlags.VOICE))
                }
                isSpeaking(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.MediaEngineContextTypes.DEFAULT;
                    return f(t, e, _.SpeakingFlags.VOICE)
                }
                isPrioritySpeaker(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.MediaEngineContextTypes.DEFAULT;
                    return f(t, e, _.SpeakingFlags.PRIORITY)
                }
                isSoundSharing(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.MediaEngineContextTypes.DEFAULT;
                    return f(t, e, _.SpeakingFlags.SOUNDSHARE)
                }
                isAnyoneElseSpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.MediaEngineContextTypes.DEFAULT;
                    return N(e, _.SpeakingFlags.VOICE, !0)
                }
                isCurrentUserSpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.MediaEngineContextTypes.DEFAULT;
                    return null != c && this.isSpeaking(c, e)
                }
                isAnyonePrioritySpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.MediaEngineContextTypes.DEFAULT;
                    return N(e, _.SpeakingFlags.VOICE | _.SpeakingFlags.PRIORITY)
                }
                isCurrentUserPrioritySpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.MediaEngineContextTypes.DEFAULT;
                    return null != c && this.isPrioritySpeaker(c, e) && this.isSpeaking(c, e)
                }
            }
            A.displayName = "SpeakingStore";
            var R = new A(i.default, {
                CONNECTION_OPEN: p,
                OVERLAY_INITIALIZE: p,
                SPEAKING: function(e) {
                    let {
                        context: t,
                        userId: n,
                        speakingFlags: r
                    } = e;
                    if ((r & _.SpeakingFlags.PRIORITY) === _.SpeakingFlags.PRIORITY) {
                        let e = u.default.getChannel(s.default.getVoiceChannelId());
                        null != e && l.default.can({
                            permission: d.Permissions.PRIORITY_SPEAKER,
                            user: n,
                            context: e
                        }) ? a.default.setCanHavePriority(n, !0) : (a.default.setCanHavePriority(n, !1), r &= ~_.SpeakingFlags.PRIORITY)
                    }
                    return function(e, t, n) {
                        var r, i;
                        let l = function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.MediaEngineContextTypes.DEFAULT,
                                    t = E.get(e);
                                return null == t && (t = new Map, E.set(e, t)), t
                            }(e),
                            u = l.get(t),
                            a = null !== (r = null == u ? void 0 : u.flags) && void 0 !== r ? r : 0;
                        if (0 === a && 0 === n) return !1;
                        if (0 === n) l.delete(t), 0 === l.size && E.delete(e);
                        else {
                            let e = null !== (i = null == u ? void 0 : u.since) && void 0 !== i ? i : null,
                                r = (a & _.SpeakingFlags.VOICE) === _.SpeakingFlags.VOICE,
                                o = (n & _.SpeakingFlags.VOICE) === _.SpeakingFlags.VOICE;
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
                        return n === c && i === I && (S = null != r ? r : null), u !== S && (l = E.delete(_.MediaEngineContextTypes.DEFAULT) || l), null == r ? l = n === c && i === I ? E.delete(_.MediaEngineContextTypes.DEFAULT) || l : T(_.MediaEngineContextTypes.DEFAULT, n) || l : n === c && i !== I ? l = E.delete(_.MediaEngineContextTypes.DEFAULT) || l : n !== c && r !== o.default.getChannelId() && (l = T(_.MediaEngineContextTypes.DEFAULT, n) || l), l || e
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
                    return h
                },
                permissionOverwriteForRole: function() {
                    return P
                },
                permissionOverwritesForAnnouncement: function() {
                    return g
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
                    return D
                },
                channelTypeString: function() {
                    return v
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
                    return B
                }
            }), n("70102"), n("424973"), n("222007");
            var r = n("316693"),
                i = n("798609"),
                l = n("364480"),
                u = n("89073"),
                a = n("711326"),
                o = n("808422"),
                s = n("233069"),
                d = n("42203"),
                _ = n("923959"),
                E = n("957255"),
                c = n("18494"),
                I = n("316133"),
                S = n("991170"),
                T = n("49111"),
                f = n("646718"),
                N = n("782340");
            let {
                GUILD_VOICE: p,
                GUILD_CATEGORY: A,
                GUILD_STAGE_VOICE: R
            } = T.ChannelTypes;

            function C(e, t) {
                return e === t || e === A
            }

            function L(e, t, n) {
                let i = S.default.NONE;
                return ((0, s.isGuildSelectableChannelType)(t) || t === A) && (i = r.default.add(i, T.Permissions.VIEW_CHANNEL)), (C(t, p) || C(t, R)) && (i = r.default.add(i, T.Permissions.VIEW_CHANNEL), i = r.default.add(i, T.Permissions.CONNECT)), {
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
                    var a, o, d;
                    let n;
                    u.push((a = e, o = t, d = i.PermissionOverwriteType.ROLE, n = S.default.NONE, ((0, s.isGuildSelectableChannelType)(o) || o === A) && (n = r.default.add(n, T.Permissions.VIEW_CHANNEL)), C(o, p) && (n = r.default.add(n, T.Permissions.VIEW_CHANNEL), n = r.default.add(n, T.Permissions.CONNECT)), {
                        id: a,
                        type: d,
                        allow: S.default.NONE,
                        deny: n
                    }))
                }
                return n.forEach(e => {
                    u.push(L(e, t, i.PermissionOverwriteType.ROLE))
                }), u
            }

            function h(e, t) {
                return L(e, t, i.PermissionOverwriteType.MEMBER)
            }

            function P(e, t) {
                return L(e, t, i.PermissionOverwriteType.ROLE)
            }

            function g(e) {
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
                    s = null !== (i = null == a ? void 0 : a.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
                    d = I.default.countVoiceStatesForChannel(e.id),
                    _ = I.default.getVoiceStatesForChannel(e),
                    c = E.default.can(T.Permissions.MOVE_MEMBERS, e) && E.default.can(T.Permissions.CONNECT, e),
                    S = !1;
                S = e.type === R ? null != l && (t.hasVideo(e.id) || (0, u.hasStream)(_)) && s > 0 && d >= s : null != l && t.hasVideo(e.id) && o > 0 && d >= o + (c ? 1 : 0);
                let f = e.userLimit > 0 && d >= e.userLimit;
                return S || f && !c
            }

            function y(e, t) {
                return t.isGuildStageVoice() ? T.BITRATE_DEFAULT : null == e ? T.BITRATE_MAX : Math.max(e.hasFeature(T.GuildFeatures.VIP_REGIONS) ? f.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_3].limits.bitrate : T.BITRATE_MAX, f.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
            }

            function D(e) {
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

            function v(e) {
                let {
                    type: t
                } = e;
                switch (t) {
                    case T.ChannelTypes.DM:
                        return N.default.Messages.DM;
                    case T.ChannelTypes.GROUP_DM:
                        return N.default.Messages.GROUP_DM;
                    case T.ChannelTypes.GUILD_TEXT:
                        return N.default.Messages.TEXT_CHANNEL;
                    case T.ChannelTypes.GUILD_FORUM:
                        return N.default.Messages.FORUM_CHANNEL;
                    case T.ChannelTypes.GUILD_MEDIA:
                        return N.default.Messages.MEDIA_CHANNEL;
                    case T.ChannelTypes.GUILD_VOICE:
                        return N.default.Messages.VOICE_CHANNEL;
                    case T.ChannelTypes.GUILD_STAGE_VOICE:
                        return N.default.Messages.STAGE_CHANNEL;
                    case T.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return N.default.Messages.NEWS_CHANNEL;
                    case T.ChannelTypes.GUILD_STORE:
                        return N.default.Messages.STORE_CHANNEL;
                    case T.ChannelTypes.GUILD_CATEGORY:
                        return N.default.Messages.CATEGORY;
                    default:
                        return null
                }
            }

            function U(e) {
                if (null == e) return "text";
                let t = e.isMediaChannel();
                if (e.type === T.ChannelTypes.GUILD_VOICE) return E.default.can(T.Permissions.CONNECT, e) ? "voice" : "voice-locked";
                if (e.type === T.ChannelTypes.GUILD_STAGE_VOICE) return E.default.can(T.Permissions.CONNECT, e) ? "stage" : "stage-locked";
                if (s.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
                else if (e.type === T.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
                else if (e.type === T.ChannelTypes.GUILD_MEDIA) return "media";
                else if (s.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
            }

            function M(e) {
                let t;
                let n = d.default.getChannel(c.default.getLastSelectedChannelId());
                if (null != n && n.getGuildId() === e && n.type === T.ChannelTypes.GUILD_TEXT) t = n.id;
                else {
                    let n = _.default.getDefaultChannel(e);
                    t = null != n ? n.id : null
                }
                return T.Routes.CHANNEL(e, t)
            }

            function G(e, t, n, r) {
                return "".concat(location.protocol, "//").concat(location.host).concat(T.Routes.CHANNEL(e, t, n)).concat(null == r ? "" : "?summaryId=".concat(r))
            }

            function B(e, t, n, r) {
                let i;
                let l = e.getGuildId(),
                    u = (0, a.canUseMediaPostEmbed)(l, t);
                if (null != t && u) {
                    var o, s, d, _;
                    o = l, s = t.id, d = e.id, _ = e.id, i = null == o || null == s || null == d ? G(o, s, _) : "".concat(location.protocol, "//").concat(location.host).concat(T.Routes.CHANNEL_THREAD_VIEW(o, s, d, _))
                } else i = null != r ? r : G(l, e.id, n);
                return i
            }
        },
        387111: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNickname: function() {
                    return s
                },
                useName: function() {
                    return _
                },
                default: function() {
                    return E
                }
            });
            var r = n("446674"),
                i = n("42203"),
                l = n("26989"),
                u = n("27618"),
                a = n("158998"),
                o = n("782340");

            function s(e, t, n) {
                if (null == n) return null;
                if (null != e) return l.default.getNick(e, n.id);
                if (null != t) {
                    let e = i.default.getChannel(t);
                    if (null == e ? void 0 : e.isPrivate()) return u.default.getNickname(n.id)
                }
                return null
            }

            function d(e, t, n) {
                var r;
                return null == n ? o.default.Messages.UNKNOWN_USER : null !== (r = s(e, t, n)) && void 0 !== r ? r : a.default.getName(n)
            }

            function _(e, t, n) {
                return (0, r.useStateFromStores)([l.default, i.default, u.default], () => d(e, t, n))
            }
            var E = {
                getNickname: s,
                getName: d,
                useName: _
            }
        },
        224400: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPurchaseToken: function() {
                    return o
                },
                getPurchaseTokenHash: function() {
                    return s
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("222007");
            var r = n("748820"),
                i = n("95410"),
                l = n("718517");
            let u = "purchase_token",
                a = 60 * l.default.Millis.DAY;

            function o() {
                let e = i.default.get(u);
                if (null != e && e.expires >= Date.now()) return e.purchaseToken;
                let t = (0, r.v4)();
                return i.default.set(u, {
                    purchaseToken: t,
                    expires: Date.now() + a
                }), t
            }
            async function s() {
                let e = new Uint8Array(o().split("").map(e => e.charCodeAt(0))),
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
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738");
            var r = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        520713: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                validateExpiry: function() {
                    return d
                },
                getStripe: function() {
                    return _
                },
                parseStripePaymentMethod: function() {
                    return E
                },
                authenticatePaymentIntentForPaymentId: function() {
                    return c
                }
            }), n("222007");
            var i, l, u = n("60979"),
                a = n("872717"),
                o = n("49111");
            (l = i || (i = {})).REQUIRES_PAYMENT_METHOD = "requires_payment_method", l.REQUIRES_CONFIRMATION = "requires_confirmation", l.REQUIRES_ACTION = "requires_action", l.PROCESSING = "processing", l.CANCELED = "canceled", l.SUCCEEDED = "succeeded";
            let s = e => {
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
                d = e => {
                    let t, n;
                    try {
                        [t, n] = s(e)
                    } catch (e) {
                        return !1
                    }
                    let r = new Date(n, t),
                        i = new Date;
                    return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > i
                };

            function _() {
                return null != r ? Promise.resolve(r) : (0, u.loadStripe)(o.PaymentSettings.STRIPE.KEY).then(e => (r = e, e))
            }

            function E(e) {
                var t, n, r, i, l, u, a, o;
                let {
                    billing_details: s
                } = e, d = null !== (t = s.address) && void 0 !== t ? t : {}, _ = {
                    name: null !== (n = s.name) && void 0 !== n ? n : "",
                    line1: null !== (r = d.line1) && void 0 !== r ? r : "",
                    line2: null !== (i = d.line2) && void 0 !== i ? i : "",
                    city: null !== (l = d.city) && void 0 !== l ? l : "",
                    state: null !== (u = d.state) && void 0 !== u ? u : "",
                    country: null !== (a = d.country) && void 0 !== a ? a : "",
                    postalCode: null !== (o = d.postal_code) && void 0 !== o ? o : ""
                };
                return {
                    token: e.id,
                    billingAddressInfo: _
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
                        r = await _();
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
                                error: s
                            } = await r.confirmCardPayment(n, u);
                            if (null != s) return {
                                error: s.message
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
        },
        920039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("82169");
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
        }
    }
]);
//# sourceMappingURL=71554.61f7e87813a706aa90eb.js.map