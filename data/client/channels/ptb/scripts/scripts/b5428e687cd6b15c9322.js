(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64970"], {
        850068: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                deletePaymentSource: function() {
                    return N
                },
                updatePaymentSource: function() {
                    return T
                },
                validatePaymentSourceBillingAddress: function() {
                    return m
                },
                createAdyenPaymentSourceToken: function() {
                    return h
                },
                createPaymentSource: function() {
                    return D
                },
                dispatchConfirmationError: function() {
                    return O
                },
                createCardToken: function() {
                    return U
                },
                confirmEPS: function() {
                    return B
                },
                confirmIdeal: function() {
                    return b
                },
                confirmPrzelewy24: function() {
                    return w
                },
                confirmSofort: function() {
                    return g
                },
                confirmCardPaymentSource: function() {
                    return M
                },
                createPaymentRequestPaymentSource: function() {
                    return G
                },
                createBraintreePaymentSource: function() {
                    return Y
                },
                createStripePaymentSource: function() {
                    return v
                },
                createAdyenPrepaidPaymentSource: function() {
                    return F
                },
                createAdyenVaultablePaymentSource: function() {
                    return k
                },
                createStripePaymentSourceToken: function() {
                    return V
                },
                createPaymentSourceToken: function() {
                    return H
                },
                fetchPaymentSources: function() {
                    return K
                },
                fetchPayment: function() {
                    return x
                },
                fetchPayments: function() {
                    return W
                },
                fetchSubscriptions: function() {
                    return Q
                },
                getPerksRelevance: function() {
                    return q
                },
                fetchMostRecentSubscription: function() {
                    return X
                },
                createSubscription: function() {
                    return Z
                },
                payInvoiceManually: function() {
                    return z
                },
                handleConfirmation: function() {
                    return J
                },
                redirectedPaymentSucceeded: function() {
                    return ee
                },
                paymentIntentSucceeded: function() {
                    return et
                },
                cancelSubscription: function() {
                    return ei
                },
                deleteRenewalMutation: function() {
                    return eo
                },
                updateSubscription: function() {
                    return el
                },
                resubscribeToSubscription: function() {
                    return eu
                },
                upgradeSubscription: function() {
                    return es
                },
                changeSubscriptionCurrency: function() {
                    return e_
                },
                changePaymentSource: function() {
                    return ed
                },
                clearUpdatePaymentSourceError: function() {
                    return eE
                },
                clearRemovePaymentSourceError: function() {
                    return ec
                },
                clearPaymentAuthenticationError: function() {
                    return eI
                },
                voidPendingPayment: function() {
                    return eS
                },
                refundPayment: function() {
                    return eR
                },
                popupBridgeState: function() {
                    return ep
                },
                popupBridgeCallback: function() {
                    return ey
                },
                fetchIpCountryCode: function() {
                    return ef
                },
                fetchLocalizedPromo: function() {
                    return eA
                },
                resetPaymentIntentId: function() {
                    return eN
                },
                resetSubscriptionStore: function() {
                    return eT
                },
                startBrowserCheckout: function() {
                    return eC
                }
            });
            var r = n("75777"),
                a = n("161179"),
                i = n.n(a),
                o = n("990746"),
                l = n("913144"),
                u = n("448993"),
                s = n("736978"),
                _ = n("865146"),
                d = n("160299"),
                E = n("599110"),
                c = n("745279"),
                I = n("719923"),
                S = n("224400"),
                R = n("520713"),
                p = n("49111"),
                y = n("422487"),
                f = n("809924"),
                A = n("782340");
            async function N(e) {
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_REMOVE_START"
                });
                try {
                    await o.default.delete({
                        url: p.Endpoints.BILLING_PAYMENT_SOURCE(e),
                        oldFormErrors: !0
                    }), l.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS",
                        id: e
                    })
                } catch (t) {
                    let e = new u.BillingError(t);
                    throw l.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL",
                        error: e
                    }), e
                }
            }
            async function T(e, t) {
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_UPDATE_START"
                });
                try {
                    let {
                        billingAddress: {
                            line1: n,
                            line2: r,
                            postalCode: a,
                            ...i
                        }
                    } = t, u = await o.default.patch({
                        url: p.Endpoints.BILLING_PAYMENT_SOURCE(e),
                        body: {
                            billing_address: {
                                ...i,
                                line_1: n,
                                line_2: r,
                                postal_code: a
                            },
                            expires_month: t.expiresMonth,
                            expires_year: t.expiresYear,
                            default: t.isDefault
                        }
                    }), s = _.default.createFromServer(u.body);
                    l.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS",
                        paymentSource: s
                    })
                } catch (t) {
                    let e = (0, s.parseV8BillingAddressSkemaErrorToBillingError)(t);
                    throw l.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL",
                        error: e
                    }), e
                }
            }
            async function C(e) {
                let t = await o.default.get({
                        url: p.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                        oldFormErrors: !0
                    }),
                    {
                        stripe_payment_intent_client_secret: n
                    } = t.body;
                return n
            }
            async function L(e) {
                let t = await o.default.get({
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
            async function P() {
                let e = await o.default.post({
                    url: p.Endpoints.BILLING_STRIPE_SETUP_INTENT_SECRET,
                    oldFormErrors: !0
                });
                return e.body.client_secret
            }
            async function m(e) {
                try {
                    let t = await o.default.post({
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
                    let e = (0, s.parseV8BillingAddressSkemaErrorToBillingError)(t);
                    throw l.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: e
                    }), e
                }
            }

            function h(e) {
                var t;
                return p.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : JSON.stringify({
                    type: null !== (t = f.ADYEN_PAYMENT_SOURCES.get(e.type)) && void 0 !== t ? t : null
                })
            }
            async function D(e, t, n, r) {
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                try {
                    let a = await o.default.post({
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
                        i = _.default.createFromServer(a.body);
                    return l.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS",
                        paymentSource: i
                    }), i
                } catch (t) {
                    let e = (0, s.parseV8BillingAddressSkemaErrorToBillingError)(t);
                    throw function(e, t) {
                        var n, r;
                        (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.adyen_redirect_url) && (e.fields.adyen_redirect_url = null == t ? void 0 : null === (r = t.body) || void 0 === r ? void 0 : r.adyen_redirect_url)
                    }(e, t), e.code !== s.ErrorCodes.CONFIRMATION_REQUIRED && l.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: e
                    }), e
                }
            }

            function O(e) {
                var t, n;
                let r, a, i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    o = A.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR;
                if (t = e, y.StripeErrorTypes.includes(t.type)) {
                    ;
                    let t = null != e.message ? "".concat(o, ": ").concat(e.message) : o,
                        l = {
                            failure_message: t,
                            error_type: e.type,
                            failure_code: e.code,
                            failure_sub_code: e.decline_code,
                            payment_source_type: null === (n = e.payment_method) || void 0 === n ? void 0 : n.type
                        };
                    if (a = l, "card_error" === e.type) E.default.track(p.AnalyticEvents.PAYMENT_SOURCE_CREATION_FAILED, {
                        ...l,
                        stacktrace: Error().stack
                    }), i = !1;
                    r = new u.BillingError(t)
                } else a = {
                    failure_message: (r = new u.BillingError("string" == typeof e ? o : e)).message,
                    status_code: r.code
                }, 429 === r.code && (i = !1);
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                    error: r
                });
                let s = Error("string" == typeof e ? e : r.message);
                return i && (0, c.captureBillingException)(s, {
                    extra: a
                }), s
            }
            async function U(e, t) {
                if (null == e || null == t) throw O("Stripe or elements not loaded");
                let n = t.getElement(r.CardNumberElement);
                if (null == n) throw O("Unable to load card elements from Stripe");
                let {
                    token: a,
                    error: i
                } = await e.createToken(n);
                if (null != i) throw O(i);
                if (null == a) throw O("token not available with successful stripe call");
                return a.id
            }
            async function B(e, t, n, r) {
                if (null == e) throw O("Stripe not loaded");
                if (null == t) throw O("Bank required for EPS");
                let {
                    email: a,
                    name: i,
                    line1: o,
                    line2: u,
                    city: s,
                    state: _,
                    postalCode: d,
                    country: E
                } = n;
                if (null == i) throw O("Name required for EPS");
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let c = await m(n),
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
                                line1: o,
                                line2: u,
                                city: s,
                                state: _,
                                postal_code: d,
                                country: E
                            },
                            name: i,
                            email: a
                        }
                    });
                if (null != S) throw O(S);
                if (null == I) throw O("paymentMethod not available with successful stripe call");
                return D(p.PaymentGateways.STRIPE, I.id, n, {
                    billingAddressToken: c,
                    analyticsLocation: r,
                    bank: t
                })
            }
            async function b(e, t, n, r) {
                if (null == e) throw O("Stripe not loaded");
                if (null == t) throw O("Bank required for iDEAL");
                let {
                    email: a,
                    name: i,
                    line1: o,
                    line2: u,
                    city: s,
                    state: _,
                    postalCode: d,
                    country: E
                } = n;
                if (null == i) throw O("Name required for iDEAL");
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let c = await m(n),
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
                                line1: o,
                                line2: u,
                                city: s,
                                state: _,
                                postal_code: d,
                                country: E
                            },
                            name: i,
                            email: a
                        }
                    });
                if (null != S) throw O(S);
                if (null == I) throw O("paymentMethod not available with successful stripe call");
                return D(p.PaymentGateways.STRIPE, I.id, n, {
                    billingAddressToken: c,
                    analyticsLocation: r,
                    bank: t
                })
            }
            async function w(e, t, n, r) {
                if (null == e) throw O("Stripe not loaded");
                let {
                    email: a,
                    name: i,
                    line1: o,
                    line2: u,
                    city: s,
                    state: _,
                    postalCode: d,
                    country: E
                } = n;
                if (null == a) throw O("Email required for Przelewy24");
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let c = await m(n),
                    I = t.p24Bank,
                    {
                        paymentMethod: S,
                        error: R
                    } = await e.createPaymentMethod({
                        type: "p24",
                        p24: {
                            bank: I
                        },
                        billing_details: {
                            address: {
                                line1: o,
                                line2: u,
                                city: s,
                                state: _,
                                postal_code: d,
                                country: E
                            },
                            name: i,
                            email: a
                        }
                    });
                if (null != R) throw O(R);
                if (null == S) throw O("paymentMethod not available with successful stripe call");
                return D(p.PaymentGateways.STRIPE, S.id, n, {
                    billingAddressToken: c,
                    analyticsLocation: r,
                    bank: I
                })
            }
            async function g(e, t, n) {
                if (null == e) throw O("Stripe not loaded");
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let r = await m(t),
                    {
                        email: a,
                        name: i,
                        line1: o,
                        line2: u,
                        city: s,
                        state: _,
                        postalCode: d,
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
                                line1: o,
                                line2: u,
                                city: s,
                                state: _,
                                postal_code: d,
                                country: E
                            },
                            name: i,
                            email: a
                        }
                    });
                if (null != I) throw O(I);
                if (null == c) throw O("paymentMethod not available with successful stripe call");
                return D(p.PaymentGateways.STRIPE, c.id, t, {
                    billingAddressToken: r,
                    analyticsLocation: n
                })
            }
            async function M(e, t, n, r) {
                if (null == e || null == t) throw O("Stripe or token not loaded");
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let a = null;
                try {
                    a = await P()
                } catch (e) {
                    throw O(e)
                }
                let {
                    name: o,
                    line1: u,
                    line2: s,
                    city: _,
                    state: d,
                    postalCode: E,
                    country: c
                } = n, I = await m(n), {
                    setupIntent: S,
                    error: R
                } = await e.confirmCardSetup(a, {
                    payment_method: {
                        card: {
                            token: t
                        },
                        billing_details: {
                            address: {
                                line1: u,
                                line2: s,
                                city: _,
                                state: d,
                                postal_code: E,
                                country: c
                            },
                            name: o
                        }
                    }
                });
                if (null != R) throw O(R);
                if ((null == S ? void 0 : S.payment_method) == null) throw O("setupIntent.payment_method not available with successful stripe call");
                return i("string" == typeof S.payment_method, "setupIntent.payment_method expanded not supported"), D(p.PaymentGateways.STRIPE, S.payment_method, n, {
                    billingAddressToken: I,
                    analyticsLocation: r
                })
            }

            function G(e, t, n) {
                let {
                    token: r,
                    billingAddressInfo: a
                } = R.parseStripePaymentMethod(e);
                return D(p.PaymentGateways.STRIPE, r, null != t ? t : a, {
                    analyticsLocation: n
                })
            }

            function Y(e, t, n) {
                return D(p.PaymentGateways.BRAINTREE, e, t, {
                    analyticsLocation: n
                })
            }
            async function v(e, t, n, r) {
                if (null == e) throw O("Stripe not loaded");
                let a = await m(t),
                    {
                        name: o,
                        line1: l,
                        line2: u,
                        city: s,
                        state: _,
                        postalCode: d,
                        country: E
                    } = t,
                    c = f.STRIPE_PAYMENT_SOURCES.get(n);
                i(null != c, "unsupported payment method type");
                let {
                    paymentMethod: I,
                    error: S
                } = await e.createPaymentMethod({
                    type: c,
                    billing_details: {
                        address: {
                            line1: l,
                            line2: u,
                            city: s,
                            state: _,
                            postal_code: d,
                            country: E
                        },
                        name: o
                    }
                });
                if (null != S) throw O(S);
                if (null == I) throw O("stripePaymentMethod not available with successful stripe call");
                return D(p.PaymentGateways.STRIPE, I.id, t, {
                    billingAddressToken: a,
                    analyticsLocation: r
                })
            }
            async function F(e, t, n) {
                let r = await m(e),
                    a = {
                        type: f.ADYEN_PAYMENT_SOURCES.get(t)
                    };
                return D(p.PaymentGateways.ADYEN, JSON.stringify(a), e, {
                    billingAddressToken: r,
                    analyticsLocation: n
                })
            }
            async function k(e, t, n, r) {
                var a;
                let i = await m(e),
                    _ = {
                        type: f.ADYEN_PAYMENT_SOURCES.get(t),
                        ...null !== (a = null == r ? void 0 : r.paymentMethod) && void 0 !== a ? a : {}
                    },
                    d = await ep(t),
                    E = o.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, null != d ? d : "", "success");
                try {
                    let t = await D(p.PaymentGateways.ADYEN, JSON.stringify(_), e, {
                        billingAddressToken: i,
                        analyticsLocation: n,
                        returnUrl: E
                    });
                    return {
                        paymentSource: t,
                        redirectConfirmation: !1
                    }
                } catch (t) {
                    if (t.code !== s.ErrorCodes.CONFIRMATION_REQUIRED) throw l.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: new u.BillingError("Unable to create payment source token: code: ".concat(null == t ? void 0 : t.code, " message: ").concat(null == t ? void 0 : t.message), u.BillingError.ErrorCodes.UNKNOWN)
                    }), t;
                    let e = t.fields.adyen_redirect_url;
                    if (null == e) throw O("redirect url cannot be null on a redirect for adyen.");
                    return en(e), {
                        redirectConfirmation: !0
                    }
                }
            }
            async function V(e) {
                if (p.VAULTABLE_PAYMENT_SOURCES.has(e.type)) return null;
                let t = await R.getStripe();
                if (null == t) throw new u.BillingError("Stripe not loaded", u.BillingError.ErrorCodes.UNKNOWN);
                let {
                    email: n,
                    name: r,
                    line1: a,
                    line2: o,
                    city: l,
                    state: s,
                    postalCode: _,
                    country: d
                } = e.billingAddress, E = {
                    billing_details: {
                        address: {
                            line1: a,
                            line2: o,
                            city: l,
                            state: s,
                            postal_code: _,
                            country: d
                        },
                        name: r
                    }
                };
                switch (e.type) {
                    case f.PaymentSourceTypes.GIROPAY:
                        E.type = "giropay";
                        break;
                    case f.PaymentSourceTypes.SOFORT:
                        E.type = "sofort", E.sofort = {
                            country: null != d ? d : ""
                        }, E.billing_details.email = n;
                        break;
                    case f.PaymentSourceTypes.BANCONTACT:
                        E.type = "bancontact";
                        break;
                    case f.PaymentSourceTypes.IDEAL:
                        if (null == e.bank) throw new u.BillingError("iDEAL missing bank information", u.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        E.type = "ideal", E.ideal = {
                            bank: e.bank
                        };
                        break;
                    case f.PaymentSourceTypes.PRZELEWY24:
                        if (null == e.bank) throw new u.BillingError("p24 missing bank information", u.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        E.type = "p24", E.p24 = {
                            bank: e.bank
                        }, E.billing_details.email = e.email;
                        break;
                    case f.PaymentSourceTypes.EPS:
                        if (null == e.bank) throw new u.BillingError("EPS missing bank information", u.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        E.type = "eps", E.eps = {
                            bank: e.bank
                        }
                }
                i(null != E.type, "unsupported payment method type");
                let {
                    paymentMethod: c,
                    error: I
                } = await t.createPaymentMethod(E);
                if (null != I || null == c) throw new u.BillingError("Unable to create payment source token: code: ".concat(null == I ? void 0 : I.code, " message: ").concat(null == I ? void 0 : I.message), u.BillingError.ErrorCodes.UNKNOWN);
                return c.id
            }

            function H(e) {
                return p.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : f.ADYEN_PAYMENT_SOURCES.has(e.type) ? h(e) : V(e)
            }
            async function K() {
                try {
                    let e = o.default.get({
                        url: p.Endpoints.BILLING_PAYMENT_SOURCES,
                        oldFormErrors: !0
                    });
                    l.default.wait(() => l.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCES_FETCH_START",
                        request: e
                    }));
                    let t = await e;
                    return l.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS",
                        paymentSources: t.body
                    }), t
                } catch (e) {
                    throw l.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL"
                    }), e
                }
            }
            async function x(e) {
                let t = await o.default.get({
                    url: p.Endpoints.BILLING_PAYMENT(e)
                });
                return l.default.dispatch({
                    type: "BILLING_PAYMENT_FETCH_SUCCESS",
                    payment: t.body
                }), t
            }
            async function W() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                l.default.dispatch({
                    type: "BILLING_PAYMENTS_FETCH_START"
                });
                try {
                    let n = await o.default.get({
                        url: p.Endpoints.BILLING_PAYMENTS,
                        query: {
                            limit: e,
                            before: t
                        },
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "BILLING_PAYMENTS_FETCH_SUCCESS",
                        payments: n.body
                    }), n
                } catch (e) {
                    throw l.default.dispatch({
                        type: "BILLING_PAYMENTS_FETCH_FAIL"
                    }), e
                }
            }
            async function Q() {
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_FETCH_START"
                    })
                });
                try {
                    let e = await o.default.get({
                        url: p.Endpoints.BILLING_SUBSCRIPTIONS,
                        oldFormErrors: !0
                    });
                    if (null == e.body) throw new u.BillingError("response body is null, response: ".concat(JSON.stringify(e)), e.status);
                    return l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS",
                        subscriptions: e.body
                    }), e
                } catch (e) {
                    throw l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_FETCH_FAIL"
                    }), e
                }
            }
            async function q() {
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "BILLING_PERKS_RELEVANCE_FETCH_START"
                    })
                });
                try {
                    let e = await o.default.get(p.Endpoints.BILLING_PERKS_RELEVANCE);
                    l.default.dispatch({
                        type: "BILLING_PERKS_RELEVANCE_FETCH_SUCCESS",
                        res: e.body
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "BILLING_PERKS_RELEVANCE_FETCH_FAIL"
                    })
                }
            }
            async function X() {
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START"
                    })
                });
                try {
                    let e = await o.default.get({
                        url: p.Endpoints.BILLING_SUBSCRIPTIONS,
                        query: {
                            include_inactive: !0,
                            limit: 2,
                            exclude_unpaid_statuses: !0,
                            subscription_type: f.SubscriptionTypes.PREMIUM
                        },
                        oldFormErrors: !0
                    });
                    return e.ok ? (l.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS",
                        subscription: e.body.length > 0 ? e.body[0] : null
                    }), l.default.dispatch({
                        type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS",
                        subscription: e.body.length > 1 ? e.body[1] : null
                    })) : l.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL"
                    }), e
                } catch (e) {
                    l.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL"
                    })
                }
            }
            async function Z(e) {
                let {
                    items: t,
                    paymentSource: n,
                    trialId: r,
                    code: a,
                    currency: i,
                    metadata: _,
                    referralCode: d,
                    loadId: E
                } = e;
                l.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_START"
                }), t = (0, I.coerceExistingItemsToNewItemInterval)(t);
                let R = null;
                if (null != n && f.ADYEN_PAYMENT_SOURCES.has(n.type)) {
                    let e = await ep(n.type);
                    R = o.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
                }
                try {
                    let e = await o.default.post({
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
                            payment_source_token: null != n ? await H(n) : null,
                            trial_id: r,
                            return_url: R,
                            code: a,
                            currency: null != n ? i : f.CurrencyCodes.USD,
                            metadata: _,
                            gateway_checkout_context: await (0, c.createGatewayCheckoutContext)(n),
                            purchase_token: (0, S.getPurchaseToken)(),
                            referral_code: d,
                            load_id: E
                        },
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                        subscription: e.body
                    }), {
                        subscription: e.body,
                        redirectConfirmation: !1
                    }
                } catch (t) {
                    let e = t instanceof u.BillingError ? t : new u.BillingError(t);
                    if (e.code !== s.ErrorCodes.CONFIRMATION_REQUIRED) throw l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: e
                    }), e;
                    if (!t.body.payment_id) throw O("payment id cannot be null on redirected confirmations.");
                    return J(t.body, n)
                }
            }
            async function z(e, t, n, r) {
                let a = null;
                if (null != n && f.PREPAID_PAYMENT_SOURCES.has(n.type)) {
                    let e = await ep(n.type);
                    a = o.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
                }
                try {
                    let i = await o.default.post({
                        url: p.Endpoints.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
                        body: {
                            payment_source_id: null != n ? n.id : null,
                            payment_source_token: null != n ? await H(n) : null,
                            return_url: a,
                            currency: r
                        },
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                        subscription: i.body
                    }), {
                        subscription: i.body,
                        redirectConfirmation: p.REDIRECTED_PAYMENT_SOURCES.has(n.type)
                    }
                } catch (t) {
                    let e = t instanceof u.BillingError ? t : new u.BillingError(t);
                    if (e.code !== s.ErrorCodes.CONFIRMATION_REQUIRED) throw l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: e
                    }), e;
                    if (!t.body.payment_id) throw O("payment id cannot be null on redirected confirmations.");
                    return J(t.body, n)
                }
            }

            function J(e, t) {
                return null != t && f.ADYEN_PAYMENT_SOURCES.has(t.type) ? j(e.adyen_redirect_url, t) : $(e.payment_id, t)
            }
            async function j(e, t) {
                if (null == e) throw O("redirect url cannot be null on a redirect for adyen.");
                if (null == t) throw O("Payment source cannot be null on a redirect.");
                return p.REDIRECTED_PAYMENT_SOURCES.has(t.type) ? (en(e), {
                    redirectConfirmation: !0,
                    redirectURL: e
                }) : {
                    redirectConfirmation: !1,
                    redirectURL: e
                }
            }
            async function $(e, t) {
                let n = await R.getStripe();
                if (null == t) throw O("Payment source cannot be null on a redirect.");
                let {
                    clientSecret: r,
                    paymentMethodId: a
                } = await L(e);
                if (null == n) throw O("Stripe cannot be null on a redirect.");
                if (p.REDIRECTED_PAYMENT_SOURCES.has(t.type)) {
                    let e = await ep(t.type);
                    return en(await ea({
                        stripe: n,
                        paymentSource: t,
                        clientSecret: r,
                        state: e
                    })), {
                        redirectConfirmation: !0
                    }
                }
                return await er({
                    stripe: n,
                    clientSecret: r,
                    paymentMethodId: a,
                    paymentSource: t
                }), {
                    redirectConfirmation: !1
                }
            }
            async function ee(e) {
                var t;
                let n = await x(e);
                if ((null == n ? void 0 : n.body) == null) throw O("could not fetch payment");
                let r = _.default.createFromServer(n.body.payment_source);
                if (!p.REDIRECTED_PAYMENT_SOURCES.has(r.type)) throw O("unsupported redirect payment source");
                if ((null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.status) === f.PaymentStatusTypes.FAILED) throw O("payment failed");
                return r.paymentGateway !== p.PaymentGateways.STRIPE || et(e)
            }
            async function et(e) {
                let t = await R.getStripe();
                if (null == t) throw O("Stripe has not loaded.");
                if (null == e) throw O("payment intent id cannot be null.");
                let n = await C(e),
                    {
                        paymentIntent: r,
                        error: a
                    } = await t.retrievePaymentIntent(n);
                if (null != a) throw O(a);
                if (null == r) throw O("paymentIntent not available with successful stripe call");
                if (null != r.last_payment_error) throw O("unable to retrieve payment intent ".concat(r.last_payment_error));
                return !0
            }

            function en(e) {
                window.open(e)
            }
            async function er(e) {
                let t, {
                        stripe: n,
                        paymentSource: r,
                        paymentMethodId: a,
                        clientSecret: i
                    } = e,
                    o = {};
                if (r.type === f.PaymentSourceTypes.SEPA_DEBIT) {
                    if (null == a) throw O("On a sepa payment payment method id cannot be null");
                    o.payment_method = a, t = n.confirmSepaDebitPayment
                } else throw O("Unsupported redirected payment source type.");
                let {
                    paymentIntent: l,
                    error: u
                } = await t(i, o);
                if (null != u) throw O(u);
                if (null == l) throw O("paymentIntent not available with successful stripe call")
            }
            async function ea(e) {
                var t, n;
                let r, {
                        stripe: a,
                        paymentSource: i,
                        clientSecret: l,
                        state: u
                    } = e,
                    s = {};
                switch (i.type) {
                    case f.PaymentSourceTypes.GIROPAY:
                        s = {
                            billing_details: {
                                name: i.billingAddress.name
                            }
                        }, r = a.confirmGiropayPayment;
                        break;
                    case f.PaymentSourceTypes.BANCONTACT:
                        s = {
                            billing_details: {
                                name: i.billingAddress.name,
                                email: i.email
                            }
                        }, r = a.confirmBancontactPayment;
                        break;
                    case f.PaymentSourceTypes.SOFORT:
                        s = {
                            sofort: {
                                country: i.billingAddress.country
                            },
                            billing_details: {
                                name: i.billingAddress.name,
                                email: i.email
                            }
                        }, r = a.confirmSofortPayment;
                        break;
                    case f.PaymentSourceTypes.PRZELEWY24:
                        if (null == i.bank) throw O("PaymentSource (".concat(i.id, ") missing bank info for p24."));
                        s = {
                            p24: {
                                bank: i.bank
                            },
                            billing_details: {
                                name: i.billingAddress.name,
                                email: i.email
                            }
                        }, r = a.confirmP24Payment;
                        break;
                    case f.PaymentSourceTypes.EPS:
                        if (null == i.bank) throw O("PaymentSource (".concat(i.id, ") missing bank info for EPS."));
                        s = {
                            eps: {
                                bank: i.bank
                            },
                            billing_details: {
                                name: i.billingAddress.name
                            }
                        }, r = a.confirmEpsPayment;
                        break;
                    case f.PaymentSourceTypes.IDEAL:
                        if (null == i.bank) throw O("PaymentSource (".concat(i.id, ") missing bank info for iDEAL."));
                        s = {
                            ideal: {
                                bank: i.bank
                            },
                            billing_details: {
                                name: i.billingAddress.name
                            }
                        }, r = a.confirmIdealPayment;
                        break;
                    default:
                        throw O("Unsupported redirected payment source type.")
                }
                let {
                    paymentIntent: _,
                    error: d
                } = await r(l, {
                    payment_method: s,
                    return_url: o.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(i.type, null != u ? u : "", "success")
                }, {
                    handleActions: !1
                });
                if (null != d) throw O(d);
                if (null == _) throw O("paymentIntent not available with successful api call");
                if ((null === (n = _.next_action) || void 0 === n ? void 0 : null === (t = n.redirect_to_url) || void 0 === t ? void 0 : t.url) == null) throw O("confirm payment did not return a redirect url");
                return _.next_action.redirect_to_url.url
            }
            async function ei(e, t, n) {
                l.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_CANCEL_START"
                });
                try {
                    let r = await o.default.delete({
                        url: p.Endpoints.BILLING_SUBSCRIPTION(e),
                        query: {
                            location: n,
                            location_stack: t
                        },
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS"
                    }), r
                } catch (t) {
                    let e = new u.BillingError(t);
                    throw l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_CANCEL_FAIL",
                        error: e
                    }), e
                }
            }

            function eo(e, t) {
                return el(e, {
                    items: e.items
                }, t)
            }
            async function el(e, t, n, r) {
                if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
                l.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_START"
                });
                try {
                    var a;
                    let i = {
                        status: t.status,
                        payment_source_id: null === (a = t.paymentSource) || void 0 === a ? void 0 : a.id,
                        payment_source_token: null != t.paymentSource ? await H(t.paymentSource) : null,
                        currency: t.currency,
                        gateway_checkout_context: await (0, c.createGatewayCheckoutContext)(t.paymentSource)
                    };
                    if (null != t.paymentSource && f.ADYEN_PAYMENT_SOURCES.has(t.paymentSource.type)) {
                        let e = await ep(t.paymentSource.type);
                        i.return_url = o.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, null != e ? e : "", "success")
                    }
                    null != t.items && (i.items = (0, I.coerceExistingItemsToNewItemInterval)(t.items).map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }));
                    let u = await o.default.patch({
                        url: p.Endpoints.BILLING_SUBSCRIPTION(e.id),
                        query: {
                            location: r,
                            location_stack: n
                        },
                        body: i,
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                        subscription: u.body
                    }), {
                        subscription: u.body,
                        redirectConfirmation: !1
                    }
                } catch (n) {
                    let e = n instanceof u.BillingError ? n : new u.BillingError(n);
                    if (e.code !== s.ErrorCodes.CONFIRMATION_REQUIRED) throw l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: e
                    }), e;
                    if (!n.body.payment_id) throw O("payment id cannot be null on redirected confirmations.");
                    return J(n.body, t.paymentSource)
                }
            }

            function eu(e, t, n, r, a) {
                return el(e, {
                    status: p.SubscriptionStatusTypes.ACTIVE,
                    paymentSource: n,
                    currency: r
                }, t, a)
            }

            function es(e, t, n, r) {
                let a = (0, I.getItemsWithUpsertedPremiumPlanId)(e, t);
                return el(e, {
                    status: p.SubscriptionStatusTypes.ACTIVE,
                    items: a
                }, n, r)
            }

            function e_(e, t, n, r) {
                return el(e, {
                    currency: t
                }, n, r)
            }

            function ed(e, t, n, r, a) {
                return el(e, {
                    paymentSource: t,
                    currency: n
                }, r, a)
            }

            function eE() {
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR"
                })
            }

            function ec() {
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR"
                })
            }

            function eI() {
                l.default.dispatch({
                    type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR"
                })
            }
            async function eS(e) {
                await o.default.post({
                    url: p.Endpoints.BILLING_PAYMENTS_VOID(e),
                    oldFormErrors: !0
                })
            }
            async function eR(e, t) {
                await o.default.post({
                    url: p.Endpoints.BILLING_PAYMENTS_REFUND(e),
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
                } = await o.default.post({
                    url: p.Endpoints.BILLING_POPUP_BRIDGE(e),
                    oldFormErrors: !0
                });
                return l.default.dispatch({
                    type: "BILLING_POPUP_BRIDGE_STATE_UPDATE",
                    state: t,
                    paymentSourceType: e
                }), t
            }

            function ey(e) {
                let {
                    paymentSourceType: t,
                    state: n,
                    path: r,
                    query: a,
                    insecure: i
                } = e;
                return l.default.dispatch({
                    type: "BILLING_POPUP_BRIDGE_CALLBACK_START",
                    paymentSourceType: t
                }), o.default.post({
                    url: p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK(t),
                    body: {
                        state: n,
                        path: r,
                        query: a,
                        insecure: i
                    },
                    oldFormErrors: !0
                }).then(e => (l.default.dispatch({
                    type: "BILLING_POPUP_BRIDGE_CALLBACK_END",
                    paymentSourceType: t
                }), e))
            }
            async function ef() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!e && null != d.default.ipCountryCodeRequest) return d.default.ipCountryCodeRequest;
                try {
                    let e = o.default.get({
                        url: p.Endpoints.BILLING_COUNTRY_CODE
                    });
                    l.default.wait(() => l.default.dispatch({
                        type: "BILLING_IP_COUNTRY_CODE_FETCH_START",
                        request: e
                    }));
                    let t = await e,
                        n = t.body.country_code;
                    return l.default.dispatch({
                        type: "BILLING_SET_IP_COUNTRY_CODE",
                        countryCode: n
                    }), t
                } catch (e) {
                    return l.default.dispatch({
                        type: "BILLING_IP_COUNTRY_CODE_FAILURE"
                    }), e
                }
            }
            async function eA() {
                try {
                    let e = await o.default.get({
                        url: p.Endpoints.BILLING_LOCALIZED_PROMO
                    });
                    if (null != e.body.localized_pricing_promo) {
                        let t = e.body.localized_pricing_promo;
                        l.default.dispatch({
                            type: "BILLING_SET_LOCALIZED_PRICING_PROMO",
                            localizedPricingPromo: t
                        })
                    }
                    return e
                } catch (e) {
                    return l.default.dispatch({
                        type: "BILLING_LOCALIZED_PRICING_PROMO_FAILURE"
                    }), e
                }
            }

            function eN() {
                l.default.dispatch({
                    type: "RESET_PAYMENT_ID"
                })
            }

            function eT() {
                l.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_RESET"
                })
            }

            function eC(e) {
                l.default.dispatch({
                    type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED",
                    loadId: e
                })
            }
        },
        79489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("888400"),
                a = n("333805"),
                i = n("782340");
            class o extends a.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        n = (0, r.diffAsUnits)(0, 1e3 * t);
                    return (0, r.unitsAsStrings)(n, {
                        days: i.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: i.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: i.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var l = o
        },
        736978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorCodes: function() {
                    return l
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return N
                },
                default: function() {
                    return C
                }
            });
            var r, a, i, o, l, u, s, _, d = n("367502"),
                E = n("10134"),
                c = n("821879"),
                I = n("333805"),
                S = n("782340");
            (r = l || (l = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", r[r.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", r[r.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", r[r.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", r[r.INVALID_PLAN = 100005] = "INVALID_PLAN", r[r.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", r[r.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", r[r.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", r[r.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", r[r.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", r[r.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", r[r.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", r[r.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", r[r.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", r[r.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", r[r.CARD_DECLINED = 100054] = "CARD_DECLINED", r[r.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", r[r.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", r[r.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", r[r.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", r[r.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", (a = u || (u = {})).CARD_NUMBER = "cardNumber", a.CARD_CVC = "cvc", a.CARD_EXPIRATION_DATE = "expirationDate", a.CARD_NAME = "name", a.ADDRESS_NAME = "name", a.ADDRESS_LINE_1 = "line1", a.ADDRESS_LINE_2 = "line2", a.ADDRESS_CITY = "city", a.ADDRESS_STATE = "state", a.ADDRESS_POSTAL_CODE = "postalCode", a.ADDRESS_COUNTRY = "country", (i = s || (s = {})).ADDRESS_LINE_1 = "address_line1", i.ADDRESS_LINE_2 = "address_line2", i.ADDRESS_CITY = "address_city", i.ADDRESS_STATE = "address_state", i.ADDRESS_ZIP = "address_zip", i.ADDRESS_COUNTRY = "address_country", i.CARD_NUMBER = "number", i.CARD_EXPIRATION_DATE = "exp", i.CARD_EXPIRATION_MONTH = "exp_month", i.CARD_EXPIRATION_YEAR = "exp_year";
            let R = Object.freeze({
                    [s.ADDRESS_LINE_1]: u.ADDRESS_LINE_1,
                    [s.ADDRESS_LINE_2]: u.ADDRESS_LINE_2,
                    [s.ADDRESS_CITY]: u.ADDRESS_CITY,
                    [s.ADDRESS_STATE]: u.ADDRESS_STATE,
                    [s.ADDRESS_ZIP]: u.ADDRESS_POSTAL_CODE,
                    [s.ADDRESS_COUNTRY]: u.ADDRESS_COUNTRY,
                    [s.CARD_NUMBER]: u.CARD_NUMBER,
                    [s.CARD_EXPIRATION_DATE]: u.CARD_EXPIRATION_DATE,
                    [s.CARD_EXPIRATION_MONTH]: u.CARD_EXPIRATION_DATE,
                    [s.CARD_EXPIRATION_YEAR]: u.CARD_EXPIRATION_DATE
                }),
                p = Object.freeze({
                    line_1: u.ADDRESS_LINE_1,
                    line_2: u.ADDRESS_LINE_2,
                    postal_code: u.ADDRESS_POSTAL_CODE
                });
            (o = _ || (_ = {})).CARD = "card", o.ADDRESS = "address";
            let y = new Set([u.CARD_NUMBER, u.CARD_CVC, u.CARD_EXPIRATION_DATE, u.CARD_NAME]),
                f = new Set([u.CARD_NUMBER, u.CARD_CVC, u.CARD_EXPIRATION_DATE, u.CARD_NAME, u.ADDRESS_POSTAL_CODE, u.ADDRESS_COUNTRY, u.ADDRESS_LINE_1, u.ADDRESS_CITY, u.ADDRESS_STATE]),
                A = new Set([u.ADDRESS_NAME, u.ADDRESS_LINE_1, u.ADDRESS_LINE_2, u.ADDRESS_CITY, u.ADDRESS_STATE, u.ADDRESS_POSTAL_CODE, u.ADDRESS_COUNTRY]);

            function N(e) {
                var t, n, r, a, i;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === d.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : null === (r = a.errors) || void 0 === r ? void 0 : r.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (i = e.body) || void 0 === i ? void 0 : i.errors) != null && (e.body = (0, E.default)(e.body.errors))
                }
                return new T(e)
            }
            class T extends I.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, c.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(f) : this._isInFieldSet(y)
                }
                hasAddressError() {
                    return this._isInFieldSet(A)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, this.code === l.NEGATIVE_INVOICE_AMOUNT ? this.message = S.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : this.code === l.INVALID_PAYMENT_SOURCE ? this.message = S.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : this.code === l.UNKNOWN_PAYMENT_SOURCE ? this.message = S.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : this.code === l.SUBSCRIPTION_RENEWAL_IN_PROGRESS ? this.message = S.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 429 === this.status ? this.message = S.default.Messages.BILLING_ERROR_RATE_LIMIT : this.code === l.UNKNOWN ? this.message = S.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = S.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = R[n] || p[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            T.ErrorCodes = l, T.Fields = u, T.Sections = _, T.CARD_ERRORS = y, T.ADDRESS_ERRORS = A;
            var C = T
        },
        852766: function(e, t, n) {
            "use strict";
            n.r(t), n("736978")
        },
        927367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadErrorCodes: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var r, a, i = n("782340");
            (r = a || (a = {}))[r.GENERAL = 0] = "GENERAL", r[r.NO_FILE = 1] = "NO_FILE", r[r.PROGRESS = 2] = "PROGRESS", r[r.UPLOAD = 3] = "UPLOAD", r[r.READ = 4] = "READ";
            var o = class e {
                get displayMessage() {
                    switch (this.code) {
                        case a.NO_FILE:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case a.PROGRESS:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case a.UPLOAD:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case a.READ:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                        case a.GENERAL:
                        default:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
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
                    return a.default
                },
                BillingError: function() {
                    return i.default
                },
                AppliedGuildBoostError: function() {
                    return o.default
                },
                UploadVoiceDebugLogsError: function() {
                    return l.default
                },
                UploadErrorCodes: function() {
                    return l.UploadErrorCodes
                }
            });
            var r = n("333805"),
                a = n("599417"),
                i = n("736978");
            n("852766"), n("846071");
            var o = n("79489"),
                l = n("927367")
        },
        422487: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                StripeErrorTypes: function() {
                    return i
                }
            });
            let i = ["api_connection_error", "api_error", "authentication_error", "card_error", "idempotency_error", "invalid_request_error", "rate_limit_error", "validation_error"];
            (a = r || (r = {})).CREATE = "create", a.CANCEL = "cancel", a.RESUBSCRIBE = "resubscribe", a.CHARGE = "charge"
        },
        821879: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                reducedPaymentInfoExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
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

            function i() {
                let {
                    autoTrackExposure: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    autoTrackExposure: !0
                }, t = a.getCurrentConfig({
                    location: "2b69fe_1"
                }, {
                    autoTrackExposure: e
                });
                return t
            }
        },
        224400: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPurchaseToken: function() {
                    return o
                },
                getPurchaseTokenHash: function() {
                    return l
                }
            });
            var r = n("462567"),
                a = n("173333");
            let i = "purchase_token";

            function o() {
                let e = a.default.get(i);
                if (null != e && e.expires >= Date.now()) return e.purchaseToken;
                let t = (0, r.v4)();
                return a.default.set(i, {
                    purchaseToken: t,
                    expires: Date.now() + 5184e6
                }), t
            }
            async function l() {
                let e = new Uint8Array(o().split("").map(e => e.charCodeAt(0))),
                    t = await window.crypto.subtle.digest({
                        name: "SHA-256"
                    }, e);
                return btoa(String.fromCharCode(...new Uint8Array(t)))
            }
        },
        520713: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                validateExpiry: function() {
                    return _
                },
                getStripe: function() {
                    return d
                },
                parseStripePaymentMethod: function() {
                    return E
                },
                authenticatePaymentIntentForPaymentId: function() {
                    return c
                }
            });
            var a, i, o = n("294157"),
                l = n("990746"),
                u = n("49111");
            (a = i || (i = {})).REQUIRES_PAYMENT_METHOD = "requires_payment_method", a.REQUIRES_CONFIRMATION = "requires_confirmation", a.REQUIRES_ACTION = "requires_action", a.PROCESSING = "processing", a.CANCELED = "canceled", a.SUCCEEDED = "succeeded";
            let s = e => {
                    let t = t => "You passed an invalid expiration date ".concat(e) + "".concat(null != t ? t : "") + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`",
                        n = e.split(/[.\-/\s]+/g);
                    2 !== n.length && t();
                    let r = n.map(e => {
                            let r = parseInt(e);
                            return isNaN(r) && t("".concat(n, " is not a number.")), r < 1 && t("".concat(r, " is less than one.")), r
                        }),
                        [a, i] = r[0] > 12 ? [r[1], r[0]] : [r[0], r[1]];
                    return a > 12 && t("Month must be a number 1-12, not ".concat(a, ".")), i < 100 && (i += 2e3), [a, i]
                },
                _ = e => {
                    let t, n;
                    try {
                        [t, n] = s(e)
                    } catch (e) {
                        return !1
                    }
                    let r = new Date(n, t),
                        a = new Date;
                    return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > a
                };

            function d() {
                return null != r ? Promise.resolve(r) : (0, o.loadStripe)(u.PaymentSettings.STRIPE.KEY).then(e => (r = e, e))
            }

            function E(e) {
                var t, n, r, a, i, o, l, u;
                let {
                    billing_details: s
                } = e, _ = null !== (t = s.address) && void 0 !== t ? t : {}, d = {
                    name: null !== (n = s.name) && void 0 !== n ? n : "",
                    line1: null !== (r = _.line1) && void 0 !== r ? r : "",
                    line2: null !== (a = _.line2) && void 0 !== a ? a : "",
                    city: null !== (i = _.city) && void 0 !== i ? i : "",
                    state: null !== (o = _.state) && void 0 !== o ? o : "",
                    country: null !== (l = _.country) && void 0 !== l ? l : "",
                    postalCode: null !== (u = _.postal_code) && void 0 !== u ? u : ""
                };
                return {
                    token: e.id,
                    billingAddressInfo: d
                }
            }
            async function c(e) {
                try {
                    let t = await l.default.get({
                            url: u.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                            oldFormErrors: !0
                        }),
                        {
                            stripe_payment_intent_client_secret: n
                        } = t.body,
                        r = await d();
                    if (null == r) return {
                        error: "unable to load stripe"
                    };
                    let {
                        error: a,
                        paymentIntent: o
                    } = await r.retrievePaymentIntent(n);
                    if (null != a) return {
                        error: a.message
                    };
                    if (null == o) return {
                        error: "payment intent does not exist"
                    };
                    let s = {};
                    switch (o.status === i.REQUIRES_PAYMENT_METHOD && null != o.last_payment_error && null != o.last_payment_error.payment_method && (s.payment_method = o.last_payment_error.payment_method.id), o.status) {
                        case i.REQUIRES_PAYMENT_METHOD:
                        case i.REQUIRES_CONFIRMATION:
                        case i.REQUIRES_ACTION:
                            let {
                                error: _
                            } = await r.confirmCardPayment(n, s);
                            if (null != _) return {
                                error: _.message
                            };
                            return {};
                        case i.SUCCEEDED:
                        case i.PROCESSING:
                            return {};
                        case i.CANCELED:
                        default:
                            return {
                                error: "Invalid Payment Intent status: ".concat(o.status)
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
//# sourceMappingURL=b5428e687cd6b15c9322.js.map