(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["79417"], {
        850068: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                deletePaymentSource: function() {
                    return T
                },
                updatePaymentSource: function() {
                    return P
                },
                validatePaymentSourceBillingAddress: function() {
                    return h
                },
                createAdyenPaymentSourceToken: function() {
                    return O
                },
                createPaymentSource: function() {
                    return U
                },
                dispatchConfirmationError: function() {
                    return B
                },
                createCardToken: function() {
                    return D
                },
                confirmEPS: function() {
                    return b
                },
                confirmIdeal: function() {
                    return w
                },
                confirmPrzelewy24: function() {
                    return g
                },
                confirmSofort: function() {
                    return M
                },
                confirmCardPaymentSource: function() {
                    return G
                },
                createPaymentRequestPaymentSource: function() {
                    return F
                },
                createBraintreePaymentSource: function() {
                    return Y
                },
                createStripePaymentSource: function() {
                    return v
                },
                createAdyenPrepaidPaymentSource: function() {
                    return k
                },
                createAdyenVaultablePaymentSource: function() {
                    return V
                },
                createStripePaymentSourceToken: function() {
                    return H
                },
                createPaymentSourceToken: function() {
                    return K
                },
                fetchPaymentSources: function() {
                    return x
                },
                fetchPayment: function() {
                    return q
                },
                fetchPayments: function() {
                    return W
                },
                fetchSubscriptions: function() {
                    return Q
                },
                getPerksRelevance: function() {
                    return X
                },
                getNitroAffinity: function() {
                    return Z
                },
                fetchMostRecentSubscription: function() {
                    return z
                },
                createSubscription: function() {
                    return J
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
                    return el
                },
                deleteRenewalMutation: function() {
                    return eu
                },
                updateSubscription: function() {
                    return es
                },
                resubscribeToSubscription: function() {
                    return ed
                },
                upgradeSubscription: function() {
                    return ec
                },
                changeSubscriptionCurrency: function() {
                    return e_
                },
                changePaymentSource: function() {
                    return eE
                },
                clearUpdatePaymentSourceError: function() {
                    return eI
                },
                clearRemovePaymentSourceError: function() {
                    return ep
                },
                clearPaymentAuthenticationError: function() {
                    return ey
                },
                voidPendingPayment: function() {
                    return ef
                },
                refundPayment: function() {
                    return eS
                },
                popupBridgeState: function() {
                    return eR
                },
                popupBridgeCallback: function() {
                    return eN
                },
                fetchIpCountryCode: function() {
                    return eA
                },
                fetchLocalizedPromo: function() {
                    return eT
                },
                resetPaymentIntentId: function() {
                    return eP
                },
                resetSubscriptionStore: function() {
                    return em
                },
                startBrowserCheckout: function() {
                    return eL
                }
            }), n("70102");
            var r = n("41092"),
                a = n("627445"),
                i = n.n(a),
                o = n("872717"),
                l = n("913144"),
                u = n("448993"),
                s = n("736978"),
                d = n("865146"),
                c = n("766274"),
                _ = n("160299"),
                E = n("599110"),
                I = n("745279"),
                p = n("719923"),
                y = n("224400"),
                f = n("520713"),
                S = n("49111"),
                R = n("422487"),
                N = n("843455"),
                A = n("782340");
            async function T(e) {
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_REMOVE_START"
                });
                try {
                    await o.default.delete({
                        url: S.Endpoints.BILLING_PAYMENT_SOURCE(e),
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
            async function P(e, t) {
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
                        url: S.Endpoints.BILLING_PAYMENT_SOURCE(e),
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
                    }), s = d.default.createFromServer(u.body);
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
            async function m(e) {
                let t = await o.default.get({
                        url: S.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                        oldFormErrors: !0
                    }),
                    {
                        stripe_payment_intent_client_secret: n
                    } = t.body;
                return n
            }
            async function L(e) {
                let t = await o.default.get({
                        url: S.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
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
            async function C() {
                let e = await o.default.post({
                    url: S.Endpoints.BILLING_STRIPE_SETUP_INTENT_SECRET,
                    oldFormErrors: !0
                });
                return e.body.client_secret
            }
            async function h(e) {
                try {
                    let t = await o.default.post({
                        url: S.Endpoints.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
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

            function O(e) {
                var t;
                return S.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : JSON.stringify({
                    type: null !== (t = N.ADYEN_PAYMENT_SOURCES.get(e.type)) && void 0 !== t ? t : null
                })
            }
            async function U(e, t, n, r) {
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                try {
                    let a = await o.default.post({
                            url: S.Endpoints.BILLING_PAYMENT_SOURCES,
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
                        i = d.default.createFromServer(a.body);
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

            function B(e) {
                var t, n;
                let r, a, i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    o = A.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR;
                if (t = e, R.StripeErrorTypes.includes(t.type)) {
                    ;
                    let t = null != e.message ? "".concat(o, ": ").concat(e.message) : o,
                        l = {
                            failure_message: t,
                            error_type: e.type,
                            failure_code: e.code,
                            failure_sub_code: e.decline_code,
                            payment_source_type: null === (n = e.payment_method) || void 0 === n ? void 0 : n.type
                        };
                    if (a = l, "card_error" === e.type) E.default.track(S.AnalyticEvents.PAYMENT_SOURCE_CREATION_FAILED, {
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
                return i && (0, I.captureBillingException)(s, {
                    extra: a
                }), s
            }
            async function D(e, t) {
                if (null == e || null == t) throw B("Stripe or elements not loaded");
                let n = t.getElement(r.CardNumberElement);
                if (null == n) throw B("Unable to load card elements from Stripe");
                let {
                    token: a,
                    error: i
                } = await e.createToken(n);
                if (null != i) throw B(i);
                if (null == a) throw B("token not available with successful stripe call");
                return a.id
            }
            async function b(e, t, n, r) {
                if (null == e) throw B("Stripe not loaded");
                if (null == t) throw B("Bank required for EPS");
                let {
                    email: a,
                    name: i,
                    line1: o,
                    line2: u,
                    city: s,
                    state: d,
                    postalCode: c,
                    country: _
                } = n;
                if (null == i) throw B("Name required for EPS");
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let E = await h(n),
                    {
                        paymentMethod: I,
                        error: p
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
                                state: d,
                                postal_code: c,
                                country: _
                            },
                            name: i,
                            email: a
                        }
                    });
                if (null != p) throw B(p);
                if (null == I) throw B("paymentMethod not available with successful stripe call");
                return U(S.PaymentGateways.STRIPE, I.id, n, {
                    billingAddressToken: E,
                    analyticsLocation: r,
                    bank: t
                })
            }
            async function w(e, t, n, r) {
                if (null == e) throw B("Stripe not loaded");
                if (null == t) throw B("Bank required for iDEAL");
                let {
                    email: a,
                    name: i,
                    line1: o,
                    line2: u,
                    city: s,
                    state: d,
                    postalCode: c,
                    country: _
                } = n;
                if (null == i) throw B("Name required for iDEAL");
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let E = await h(n),
                    {
                        paymentMethod: I,
                        error: p
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
                                state: d,
                                postal_code: c,
                                country: _
                            },
                            name: i,
                            email: a
                        }
                    });
                if (null != p) throw B(p);
                if (null == I) throw B("paymentMethod not available with successful stripe call");
                return U(S.PaymentGateways.STRIPE, I.id, n, {
                    billingAddressToken: E,
                    analyticsLocation: r,
                    bank: t
                })
            }
            async function g(e, t, n, r) {
                if (null == e) throw B("Stripe not loaded");
                let {
                    email: a,
                    name: i,
                    line1: o,
                    line2: u,
                    city: s,
                    state: d,
                    postalCode: c,
                    country: _
                } = n;
                if (null == a) throw B("Email required for Przelewy24");
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let E = await h(n),
                    I = t.p24Bank,
                    {
                        paymentMethod: p,
                        error: y
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
                                state: d,
                                postal_code: c,
                                country: _
                            },
                            name: i,
                            email: a
                        }
                    });
                if (null != y) throw B(y);
                if (null == p) throw B("paymentMethod not available with successful stripe call");
                return U(S.PaymentGateways.STRIPE, p.id, n, {
                    billingAddressToken: E,
                    analyticsLocation: r,
                    bank: I
                })
            }
            async function M(e, t, n) {
                if (null == e) throw B("Stripe not loaded");
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let r = await h(t),
                    {
                        email: a,
                        name: i,
                        line1: o,
                        line2: u,
                        city: s,
                        state: d,
                        postalCode: c,
                        country: _
                    } = t,
                    {
                        paymentMethod: E,
                        error: I
                    } = await e.createPaymentMethod({
                        type: "sofort",
                        sofort: {
                            country: _
                        },
                        billing_details: {
                            address: {
                                line1: o,
                                line2: u,
                                city: s,
                                state: d,
                                postal_code: c,
                                country: _
                            },
                            name: i,
                            email: a
                        }
                    });
                if (null != I) throw B(I);
                if (null == E) throw B("paymentMethod not available with successful stripe call");
                return U(S.PaymentGateways.STRIPE, E.id, t, {
                    billingAddressToken: r,
                    analyticsLocation: n
                })
            }
            async function G(e, t, n, r) {
                if (null == e || null == t) throw B("Stripe or token not loaded");
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let a = null;
                try {
                    a = await C()
                } catch (e) {
                    throw B(e)
                }
                let {
                    name: o,
                    line1: u,
                    line2: s,
                    city: d,
                    state: c,
                    postalCode: _,
                    country: E
                } = n, I = await h(n), {
                    setupIntent: p,
                    error: y
                } = await e.confirmCardSetup(a, {
                    payment_method: {
                        card: {
                            token: t
                        },
                        billing_details: {
                            address: {
                                line1: u,
                                line2: s,
                                city: d,
                                state: c,
                                postal_code: _,
                                country: E
                            },
                            name: o
                        }
                    }
                });
                if (null != y) throw B(y);
                if ((null == p ? void 0 : p.payment_method) == null) throw B("setupIntent.payment_method not available with successful stripe call");
                return i("string" == typeof p.payment_method, "setupIntent.payment_method expanded not supported"), U(S.PaymentGateways.STRIPE, p.payment_method, n, {
                    billingAddressToken: I,
                    analyticsLocation: r
                })
            }

            function F(e, t, n) {
                let {
                    token: r,
                    billingAddressInfo: a
                } = f.parseStripePaymentMethod(e);
                return U(S.PaymentGateways.STRIPE, r, null != t ? t : a, {
                    analyticsLocation: n
                })
            }

            function Y(e, t, n) {
                return U(S.PaymentGateways.BRAINTREE, e, t, {
                    analyticsLocation: n
                })
            }
            async function v(e, t, n, r) {
                if (null == e) throw B("Stripe not loaded");
                let a = await h(t),
                    {
                        name: o,
                        line1: l,
                        line2: u,
                        city: s,
                        state: d,
                        postalCode: c,
                        country: _
                    } = t,
                    E = N.STRIPE_PAYMENT_SOURCES.get(n);
                i(null != E, "unsupported payment method type");
                let {
                    paymentMethod: I,
                    error: p
                } = await e.createPaymentMethod({
                    type: E,
                    billing_details: {
                        address: {
                            line1: l,
                            line2: u,
                            city: s,
                            state: d,
                            postal_code: c,
                            country: _
                        },
                        name: o
                    }
                });
                if (null != p) throw B(p);
                if (null == I) throw B("stripePaymentMethod not available with successful stripe call");
                return U(S.PaymentGateways.STRIPE, I.id, t, {
                    billingAddressToken: a,
                    analyticsLocation: r
                })
            }
            async function k(e, t, n) {
                let r = await h(e),
                    a = {
                        type: N.ADYEN_PAYMENT_SOURCES.get(t)
                    };
                return U(S.PaymentGateways.ADYEN, JSON.stringify(a), e, {
                    billingAddressToken: r,
                    analyticsLocation: n
                })
            }
            async function V(e, t, n, r) {
                var a;
                let i = await h(e),
                    d = {
                        type: N.ADYEN_PAYMENT_SOURCES.get(t),
                        ...null !== (a = null == r ? void 0 : r.paymentMethod) && void 0 !== a ? a : {}
                    },
                    c = await eR(t),
                    _ = o.default.getAPIBaseURL() + S.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, null != c ? c : "", "success");
                try {
                    let t = await U(S.PaymentGateways.ADYEN, JSON.stringify(d), e, {
                        billingAddressToken: i,
                        analyticsLocation: n,
                        returnUrl: _
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
                    if (null == e) throw B("redirect url cannot be null on a redirect for adyen.");
                    return ea(e), {
                        redirectConfirmation: !0
                    }
                }
            }
            async function H(e) {
                if (S.VAULTABLE_PAYMENT_SOURCES.has(e.type)) return null;
                let t = await f.getStripe();
                if (null == t) throw new u.BillingError("Stripe not loaded", u.BillingError.ErrorCodes.UNKNOWN);
                let {
                    email: n,
                    name: r,
                    line1: a,
                    line2: o,
                    city: l,
                    state: s,
                    postalCode: d,
                    country: c
                } = e.billingAddress, _ = {
                    billing_details: {
                        address: {
                            line1: a,
                            line2: o,
                            city: l,
                            state: s,
                            postal_code: d,
                            country: c
                        },
                        name: r
                    }
                };
                switch (e.type) {
                    case N.PaymentSourceTypes.GIROPAY:
                        _.type = "giropay";
                        break;
                    case N.PaymentSourceTypes.SOFORT:
                        _.type = "sofort", _.sofort = {
                            country: null != c ? c : ""
                        }, _.billing_details.email = n;
                        break;
                    case N.PaymentSourceTypes.BANCONTACT:
                        _.type = "bancontact";
                        break;
                    case N.PaymentSourceTypes.IDEAL:
                        if (null == e.bank) throw new u.BillingError("iDEAL missing bank information", u.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        _.type = "ideal", _.ideal = {
                            bank: e.bank
                        };
                        break;
                    case N.PaymentSourceTypes.PRZELEWY24:
                        if (null == e.bank) throw new u.BillingError("p24 missing bank information", u.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        _.type = "p24", _.p24 = {
                            bank: e.bank
                        }, _.billing_details.email = e.email;
                        break;
                    case N.PaymentSourceTypes.EPS:
                        if (null == e.bank) throw new u.BillingError("EPS missing bank information", u.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        _.type = "eps", _.eps = {
                            bank: e.bank
                        }
                }
                i(null != _.type, "unsupported payment method type");
                let {
                    paymentMethod: E,
                    error: I
                } = await t.createPaymentMethod(_);
                if (null != I || null == E) throw new u.BillingError("Unable to create payment source token: code: ".concat(null == I ? void 0 : I.code, " message: ").concat(null == I ? void 0 : I.message), u.BillingError.ErrorCodes.UNKNOWN);
                return E.id
            }

            function K(e) {
                return S.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : N.ADYEN_PAYMENT_SOURCES.has(e.type) ? O(e) : H(e)
            }
            async function x() {
                try {
                    let e = o.default.get({
                        url: S.Endpoints.BILLING_PAYMENT_SOURCES,
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
            async function q(e) {
                let t = await o.default.get({
                    url: S.Endpoints.BILLING_PAYMENT(e)
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
                        url: S.Endpoints.BILLING_PAYMENTS,
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
                        url: S.Endpoints.BILLING_SUBSCRIPTIONS,
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
            async function X() {
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "BILLING_PERKS_RELEVANCE_FETCH_START"
                    })
                });
                try {
                    let e = await o.default.get(S.Endpoints.BILLING_PERKS_RELEVANCE);
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
            async function Z() {
                try {
                    let e = await o.default.get(S.Endpoints.BILLING_NITRO_AFFINITY);
                    l.default.dispatch({
                        type: "BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED",
                        res: e.body.map(e => new c.default(e))
                    })
                } finally {
                    l.default.dispatch({
                        type: "BILLING_NITRO_AFFINITY_FETCHED"
                    })
                }
            }
            async function z() {
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START"
                    })
                });
                try {
                    let e = await o.default.get({
                        url: S.Endpoints.BILLING_SUBSCRIPTIONS,
                        query: {
                            include_inactive: !0,
                            limit: 2,
                            exclude_unpaid_statuses: !0,
                            subscription_type: N.SubscriptionTypes.PREMIUM
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
            async function J(e) {
                let {
                    items: t,
                    paymentSource: n,
                    trialId: r,
                    code: a,
                    currency: i,
                    metadata: d,
                    referralCode: c,
                    loadId: _
                } = e;
                l.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_START"
                }), t = (0, p.coerceExistingItemsToNewItemInterval)(t);
                let E = null;
                if (null != n && N.ADYEN_PAYMENT_SOURCES.has(n.type)) {
                    let e = await eR(n.type);
                    E = o.default.getAPIBaseURL() + S.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
                }
                try {
                    let e = await o.default.post({
                        url: S.Endpoints.BILLING_SUBSCRIPTIONS,
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
                            return_url: E,
                            code: a,
                            currency: null != n ? i : N.CurrencyCodes.USD,
                            metadata: d,
                            gateway_checkout_context: await (0, I.createGatewayCheckoutContext)(n),
                            purchase_token: (0, y.getPurchaseToken)(),
                            referral_code: c,
                            load_id: _
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
                    if (!t.body.payment_id) throw B("payment id cannot be null on redirected confirmations.");
                    return $(t.body, n)
                }
            }
            async function j(e, t, n, r) {
                let a = null;
                if (null != n && N.PREPAID_PAYMENT_SOURCES.has(n.type)) {
                    let e = await eR(n.type);
                    a = o.default.getAPIBaseURL() + S.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
                }
                try {
                    let i = await o.default.post({
                        url: S.Endpoints.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
                        body: {
                            payment_source_id: null != n ? n.id : null,
                            payment_source_token: null != n ? await K(n) : null,
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
                        redirectConfirmation: S.REDIRECTED_PAYMENT_SOURCES.has(n.type)
                    }
                } catch (t) {
                    let e = t instanceof u.BillingError ? t : new u.BillingError(t);
                    if (e.code !== s.ErrorCodes.CONFIRMATION_REQUIRED) throw l.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: e
                    }), e;
                    if (!t.body.payment_id) throw B("payment id cannot be null on redirected confirmations.");
                    return $(t.body, n)
                }
            }

            function $(e, t) {
                return null != t && N.ADYEN_PAYMENT_SOURCES.has(t.type) ? ee(e.adyen_redirect_url, t) : et(e.payment_id, t)
            }
            async function ee(e, t) {
                if (null == e) throw B("redirect url cannot be null on a redirect for adyen.");
                if (null == t) throw B("Payment source cannot be null on a redirect.");
                return S.REDIRECTED_PAYMENT_SOURCES.has(t.type) ? (ea(e), {
                    redirectConfirmation: !0,
                    redirectURL: e
                }) : {
                    redirectConfirmation: !1,
                    redirectURL: e
                }
            }
            async function et(e, t) {
                let n = await f.getStripe();
                if (null == t) throw B("Payment source cannot be null on a redirect.");
                let {
                    clientSecret: r,
                    paymentMethodId: a
                } = await L(e);
                if (null == n) throw B("Stripe cannot be null on a redirect.");
                if (S.REDIRECTED_PAYMENT_SOURCES.has(t.type)) {
                    let e = await eR(t.type);
                    return ea(await eo({
                        stripe: n,
                        paymentSource: t,
                        clientSecret: r,
                        state: e
                    })), {
                        redirectConfirmation: !0
                    }
                }
                return await ei({
                    stripe: n,
                    clientSecret: r,
                    paymentMethodId: a,
                    paymentSource: t
                }), {
                    redirectConfirmation: !1
                }
            }
            async function en(e) {
                var t;
                let n = await q(e);
                if ((null == n ? void 0 : n.body) == null) throw B("could not fetch payment");
                let r = d.default.createFromServer(n.body.payment_source);
                if (!S.REDIRECTED_PAYMENT_SOURCES.has(r.type)) throw B("unsupported redirect payment source");
                if ((null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.status) === N.PaymentStatusTypes.FAILED) throw B("payment failed");
                return r.paymentGateway !== S.PaymentGateways.STRIPE || er(e)
            }
            async function er(e) {
                let t = await f.getStripe();
                if (null == t) throw B("Stripe has not loaded.");
                if (null == e) throw B("payment intent id cannot be null.");
                let n = await m(e),
                    {
                        paymentIntent: r,
                        error: a
                    } = await t.retrievePaymentIntent(n);
                if (null != a) throw B(a);
                if (null == r) throw B("paymentIntent not available with successful stripe call");
                if (null != r.last_payment_error) throw B("unable to retrieve payment intent ".concat(r.last_payment_error));
                return !0
            }

            function ea(e) {
                window.open(e)
            }
            async function ei(e) {
                let t, {
                        stripe: n,
                        paymentSource: r,
                        paymentMethodId: a,
                        clientSecret: i
                    } = e,
                    o = {};
                if (r.type === N.PaymentSourceTypes.SEPA_DEBIT) {
                    if (null == a) throw B("On a sepa payment payment method id cannot be null");
                    o.payment_method = a, t = n.confirmSepaDebitPayment
                } else throw B("Unsupported redirected payment source type.");
                let {
                    paymentIntent: l,
                    error: u
                } = await t(i, o);
                if (null != u) throw B(u);
                if (null == l) throw B("paymentIntent not available with successful stripe call")
            }
            async function eo(e) {
                var t, n;
                let r, {
                        stripe: a,
                        paymentSource: i,
                        clientSecret: l,
                        state: u
                    } = e,
                    s = {};
                switch (i.type) {
                    case N.PaymentSourceTypes.GIROPAY:
                        s = {
                            billing_details: {
                                name: i.billingAddress.name
                            }
                        }, r = a.confirmGiropayPayment;
                        break;
                    case N.PaymentSourceTypes.BANCONTACT:
                        s = {
                            billing_details: {
                                name: i.billingAddress.name,
                                email: i.email
                            }
                        }, r = a.confirmBancontactPayment;
                        break;
                    case N.PaymentSourceTypes.SOFORT:
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
                    case N.PaymentSourceTypes.PRZELEWY24:
                        if (null == i.bank) throw B("PaymentSource (".concat(i.id, ") missing bank info for p24."));
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
                    case N.PaymentSourceTypes.EPS:
                        if (null == i.bank) throw B("PaymentSource (".concat(i.id, ") missing bank info for EPS."));
                        s = {
                            eps: {
                                bank: i.bank
                            },
                            billing_details: {
                                name: i.billingAddress.name
                            }
                        }, r = a.confirmEpsPayment;
                        break;
                    case N.PaymentSourceTypes.IDEAL:
                        if (null == i.bank) throw B("PaymentSource (".concat(i.id, ") missing bank info for iDEAL."));
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
                        throw B("Unsupported redirected payment source type.")
                }
                let {
                    paymentIntent: d,
                    error: c
                } = await r(l, {
                    payment_method: s,
                    return_url: o.default.getAPIBaseURL() + S.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(i.type, null != u ? u : "", "success")
                }, {
                    handleActions: !1
                });
                if (null != c) throw B(c);
                if (null == d) throw B("paymentIntent not available with successful api call");
                if ((null === (n = d.next_action) || void 0 === n ? void 0 : null === (t = n.redirect_to_url) || void 0 === t ? void 0 : t.url) == null) throw B("confirm payment did not return a redirect url");
                return d.next_action.redirect_to_url.url
            }
            async function el(e, t, n) {
                l.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_CANCEL_START"
                });
                try {
                    let r = await o.default.delete({
                        url: S.Endpoints.BILLING_SUBSCRIPTION(e),
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

            function eu(e, t) {
                return es(e, {
                    items: e.items
                }, t)
            }
            async function es(e, t, n, r) {
                if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
                l.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_START"
                });
                try {
                    var a;
                    let i = {
                        status: t.status,
                        payment_source_id: null === (a = t.paymentSource) || void 0 === a ? void 0 : a.id,
                        payment_source_token: null != t.paymentSource ? await K(t.paymentSource) : null,
                        currency: t.currency,
                        gateway_checkout_context: await (0, I.createGatewayCheckoutContext)(t.paymentSource)
                    };
                    if (null != t.paymentSource && N.ADYEN_PAYMENT_SOURCES.has(t.paymentSource.type)) {
                        let e = await eR(t.paymentSource.type);
                        i.return_url = o.default.getAPIBaseURL() + S.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, null != e ? e : "", "success")
                    }
                    null != t.items && (i.items = (0, p.coerceExistingItemsToNewItemInterval)(t.items).map(e => {
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
                        url: S.Endpoints.BILLING_SUBSCRIPTION(e.id),
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
                    if (!n.body.payment_id) throw B("payment id cannot be null on redirected confirmations.");
                    return $(n.body, t.paymentSource)
                }
            }

            function ed(e, t, n, r, a) {
                return es(e, {
                    status: S.SubscriptionStatusTypes.ACTIVE,
                    paymentSource: n,
                    currency: r
                }, t, a)
            }

            function ec(e, t, n, r) {
                let a = (0, p.getItemsWithUpsertedPremiumPlanId)(e, t);
                return es(e, {
                    status: S.SubscriptionStatusTypes.ACTIVE,
                    items: a
                }, n, r)
            }

            function e_(e, t, n, r) {
                return es(e, {
                    currency: t
                }, n, r)
            }

            function eE(e, t, n, r, a) {
                return es(e, {
                    paymentSource: t,
                    currency: n
                }, r, a)
            }

            function eI() {
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR"
                })
            }

            function ep() {
                l.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR"
                })
            }

            function ey() {
                l.default.dispatch({
                    type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR"
                })
            }
            async function ef(e) {
                await o.default.post({
                    url: S.Endpoints.BILLING_PAYMENTS_VOID(e),
                    oldFormErrors: !0
                })
            }
            async function eS(e, t) {
                await o.default.post({
                    url: S.Endpoints.BILLING_PAYMENTS_REFUND(e),
                    body: {
                        reason: t
                    }
                })
            }
            async function eR(e) {
                let {
                    body: {
                        state: t
                    }
                } = await o.default.post({
                    url: S.Endpoints.BILLING_POPUP_BRIDGE(e),
                    oldFormErrors: !0
                });
                return l.default.dispatch({
                    type: "BILLING_POPUP_BRIDGE_STATE_UPDATE",
                    state: t,
                    paymentSourceType: e
                }), t
            }

            function eN(e) {
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
                    url: S.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK(t),
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
            async function eA() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!e && null != _.default.ipCountryCodeRequest) return _.default.ipCountryCodeRequest;
                try {
                    let e = o.default.get({
                        url: S.Endpoints.BILLING_COUNTRY_CODE
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
            async function eT() {
                try {
                    let e = await o.default.get({
                        url: S.Endpoints.BILLING_LOCALIZED_PROMO
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

            function eP() {
                l.default.dispatch({
                    type: "RESET_PAYMENT_ID"
                })
            }

            function em() {
                l.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_RESET"
                })
            }

            function eL(e) {
                l.default.dispatch({
                    type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED",
                    loadId: e
                })
            }
        },
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return c
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return _
                },
                fetchPremiumSubscriptionPlans: function() {
                    return E
                },
                resetSubscriptionPlanData: function() {
                    return I
                }
            }), n("222007");
            var r = n("872717"),
                a = n("913144"),
                i = n("333805"),
                o = n("160299"),
                l = n("745279"),
                u = n("850068"),
                s = n("49111"),
                d = n("646718");
            async function c(e, t, n, d, c) {
                a.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let i = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        l = {};
                    null != t && (l.country_code = t), null != n && (l.payment_source_id = n), null != d && (l.include_unpublished = d), null != c && (l.revenue_surface = c), i.query = l, !o.default.ipCountryCodeLoaded && await (0, u.fetchIpCountryCode)();
                    let _ = await r.default.get(i);
                    a.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: _.body
                    })
                } catch (t) {
                    throw a.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, l.captureBillingException)(t), new i.default(t)
                }
            }

            function _(e, t) {
                return Promise.all(e.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(e => c(e, t)))
            }

            function E(e, t, n) {
                return Promise.all(d.ACTIVE_PREMIUM_SKUS.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(r => c(r, e, t, void 0, n)))
            }

            function I() {
                a.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
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
                    return r
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return A
                },
                default: function() {
                    return P
                }
            }), n("222007");
            var r, a, i, o, l, u, s, d, c = n("486196"),
                _ = n("614247"),
                E = n("821879"),
                I = n("333805"),
                p = n("782340");
            (l = r || (r = {}))[l.UNKNOWN = 0] = "UNKNOWN", l[l.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", l[l.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", l[l.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", l[l.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", l[l.INVALID_PLAN = 100005] = "INVALID_PLAN", l[l.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", l[l.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", l[l.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", l[l.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", l[l.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", l[l.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", l[l.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", l[l.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", l[l.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", l[l.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", l[l.CARD_DECLINED = 100054] = "CARD_DECLINED", l[l.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", l[l.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", l[l.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", l[l.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", l[l.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", l[l.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", (u = a || (a = {})).CARD_NUMBER = "cardNumber", u.CARD_CVC = "cvc", u.CARD_EXPIRATION_DATE = "expirationDate", u.CARD_NAME = "name", u.ADDRESS_NAME = "name", u.ADDRESS_LINE_1 = "line1", u.ADDRESS_LINE_2 = "line2", u.ADDRESS_CITY = "city", u.ADDRESS_STATE = "state", u.ADDRESS_POSTAL_CODE = "postalCode", u.ADDRESS_COUNTRY = "country", (s = i || (i = {})).ADDRESS_LINE_1 = "address_line1", s.ADDRESS_LINE_2 = "address_line2", s.ADDRESS_CITY = "address_city", s.ADDRESS_STATE = "address_state", s.ADDRESS_ZIP = "address_zip", s.ADDRESS_COUNTRY = "address_country", s.CARD_NUMBER = "number", s.CARD_EXPIRATION_DATE = "exp", s.CARD_EXPIRATION_MONTH = "exp_month", s.CARD_EXPIRATION_YEAR = "exp_year";
            let y = Object.freeze({
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
            (d = o || (o = {})).CARD = "card", d.ADDRESS = "address";
            let S = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                R = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                N = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function A(e) {
                var t, n, r, a, i;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === c.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : null === (r = a.errors) || void 0 === r ? void 0 : r.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (i = e.body) || void 0 === i ? void 0 : i.errors) != null && (e.body = (0, _.default)(e.body.errors))
                }
                return new T(e)
            }
            class T extends I.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, E.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(R) : this._isInFieldSet(S)
                }
                hasAddressError() {
                    return this._isInFieldSet(N)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = p.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = p.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = p.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = p.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = p.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = p.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = p.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = p.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = y[n] || f[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            T.ErrorCodes = r, T.Fields = a, T.Sections = o, T.CARD_ERRORS = S, T.ADDRESS_ERRORS = N;
            var P = T
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
                        case 1:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case 2:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case 3:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case 4:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
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
        917219: function(e, t, n) {
            "use strict";
            var r, a, i, o;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return r
                },
                DefaultVideoBackground: function() {
                    return a
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return l
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return u
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return s
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return c
                }
            }), n("808653"), (i = r || (r = {}))[i.BACKGROUND = 0] = "BACKGROUND", (o = a || (a = {}))[o.OPTION_1 = 0] = "OPTION_1", o[o.OPTION_2 = 1] = "OPTION_2", o[o.OPTION_3 = 2] = "OPTION_3", o[o.OPTION_4 = 3] = "OPTION_4", o[o.OPTION_7 = 7] = "OPTION_7", o[o.OPTION_8 = 8] = "OPTION_8", o[o.OPTION_9 = 9] = "OPTION_9", o[o.OPTION_10 = 10] = "OPTION_10";
            let l = [7, 8, 9, 10],
                u = [7, 8, 9, 10, 0, 1, 2, 3].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                s = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                c = 10485760
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
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("222007");
            var r = n("748820"),
                a = n("95410");
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
                    return d
                },
                getStripe: function() {
                    return c
                },
                parseStripePaymentMethod: function() {
                    return _
                },
                authenticatePaymentIntentForPaymentId: function() {
                    return E
                }
            }), n("222007");
            var a, i, o = n("60979"),
                l = n("872717"),
                u = n("49111");
            (i = a || (a = {})).REQUIRES_PAYMENT_METHOD = "requires_payment_method", i.REQUIRES_CONFIRMATION = "requires_confirmation", i.REQUIRES_ACTION = "requires_action", i.PROCESSING = "processing", i.CANCELED = "canceled", i.SUCCEEDED = "succeeded";
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
                d = e => {
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

            function c() {
                return null != r ? Promise.resolve(r) : (0, o.loadStripe)(u.PaymentSettings.STRIPE.KEY).then(e => (r = e, e))
            }

            function _(e) {
                var t, n, r, a, i, o, l, u;
                let {
                    billing_details: s
                } = e, d = null !== (t = s.address) && void 0 !== t ? t : {}, c = {
                    name: null !== (n = s.name) && void 0 !== n ? n : "",
                    line1: null !== (r = d.line1) && void 0 !== r ? r : "",
                    line2: null !== (a = d.line2) && void 0 !== a ? a : "",
                    city: null !== (i = d.city) && void 0 !== i ? i : "",
                    state: null !== (o = d.state) && void 0 !== o ? o : "",
                    country: null !== (l = d.country) && void 0 !== l ? l : "",
                    postalCode: null !== (u = d.postal_code) && void 0 !== u ? u : ""
                };
                return {
                    token: e.id,
                    billingAddressInfo: c
                }
            }
            async function E(e) {
                try {
                    let t = await l.default.get({
                            url: u.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                            oldFormErrors: !0
                        }),
                        {
                            stripe_payment_intent_client_secret: n
                        } = t.body,
                        r = await c();
                    if (null == r) return {
                        error: "unable to load stripe"
                    };
                    let {
                        error: a,
                        paymentIntent: i
                    } = await r.retrievePaymentIntent(n);
                    if (null != a) return {
                        error: a.message
                    };
                    if (null == i) return {
                        error: "payment intent does not exist"
                    };
                    let o = {};
                    switch ("requires_payment_method" === i.status && null != i.last_payment_error && null != i.last_payment_error.payment_method && (o.payment_method = i.last_payment_error.payment_method.id), i.status) {
                        case "requires_payment_method":
                        case "requires_confirmation":
                        case "requires_action":
                            let {
                                error: s
                            } = await r.confirmCardPayment(n, o);
                            if (null != s) return {
                                error: s.message
                            };
                            return {};
                        case "succeeded":
                        case "processing":
                            return {};
                        default:
                            return {
                                error: "Invalid Payment Intent status: ".concat(i.status)
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
//# sourceMappingURL=79417.40e5966eb87d1ff2ee44.js.map