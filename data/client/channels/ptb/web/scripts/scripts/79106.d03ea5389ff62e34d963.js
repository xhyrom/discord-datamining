(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["79106"], {
        850068: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                deletePaymentSource: function() {
                    return y
                },
                updatePaymentSource: function() {
                    return P
                },
                validatePaymentSourceBillingAddress: function() {
                    return m
                },
                createAdyenPaymentSourceToken: function() {
                    return h
                },
                createPaymentSource: function() {
                    return M
                },
                dispatchConfirmationError: function() {
                    return G
                },
                createCardToken: function() {
                    return D
                },
                confirmEPS: function() {
                    return U
                },
                confirmIdeal: function() {
                    return B
                },
                confirmPrzelewy24: function() {
                    return w
                },
                confirmSofort: function() {
                    return b
                },
                confirmCardPaymentSource: function() {
                    return g
                },
                createPaymentRequestPaymentSource: function() {
                    return x
                },
                createBraintreePaymentSource: function() {
                    return H
                },
                createStripePaymentSource: function() {
                    return Y
                },
                createAdyenPrepaidPaymentSource: function() {
                    return F
                },
                createAdyenVaultablePaymentSource: function() {
                    return K
                },
                createStripePaymentSourceToken: function() {
                    return v
                },
                createPaymentSourceToken: function() {
                    return k
                },
                fetchPaymentSources: function() {
                    return V
                },
                fetchPayment: function() {
                    return W
                },
                fetchPayments: function() {
                    return J
                },
                fetchSubscriptions: function() {
                    return Z
                },
                getPerksRelevance: function() {
                    return q
                },
                getNitroAffinity: function() {
                    return X
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
                    return tn
                },
                paymentIntentSucceeded: function() {
                    return tr
                },
                cancelSubscription: function() {
                    return to
                },
                deleteRenewalMutation: function() {
                    return tl
                },
                updateSubscription: function() {
                    return tE
                },
                resubscribeToSubscription: function() {
                    return tI
                },
                upgradeSubscription: function() {
                    return tu
                },
                changeSubscriptionCurrency: function() {
                    return tc
                },
                changePaymentSource: function() {
                    return ts
                },
                clearUpdatePaymentSourceError: function() {
                    return tS
                },
                clearRemovePaymentSourceError: function() {
                    return td
                },
                clearPaymentAuthenticationError: function() {
                    return tT
                },
                voidPendingPayment: function() {
                    return tp
                },
                refundPayment: function() {
                    return tN
                },
                popupBridgeState: function() {
                    return tR
                },
                popupBridgeCallback: function() {
                    return tA
                },
                fetchIpCountryCode: function() {
                    return tC
                },
                fetchLocalizedPromo: function() {
                    return ty
                },
                resetPaymentIntentId: function() {
                    return tP
                },
                resetSubscriptionStore: function() {
                    return tO
                },
                startBrowserCheckout: function() {
                    return tf
                }
            }), n("70102");
            var r = n("41092"),
                a = n("627445"),
                _ = n.n(a),
                i = n("872717"),
                o = n("913144"),
                l = n("448993"),
                E = n("736978"),
                I = n("865146"),
                u = n("766274"),
                c = n("160299"),
                s = n("599110"),
                S = n("745279"),
                d = n("719923"),
                T = n("224400"),
                p = n("520713"),
                N = n("49111"),
                R = n("422487"),
                A = n("843455"),
                C = n("782340");
            async function y(t) {
                o.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_REMOVE_START"
                });
                try {
                    await i.default.delete({
                        url: N.Endpoints.BILLING_PAYMENT_SOURCE(t),
                        oldFormErrors: !0
                    }), o.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS",
                        id: t
                    })
                } catch (e) {
                    let t = new l.BillingError(e);
                    throw o.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL",
                        error: t
                    }), t
                }
            }
            async function P(t, e) {
                o.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_UPDATE_START"
                });
                try {
                    let {
                        billingAddress: {
                            line1: n,
                            line2: r,
                            postalCode: a,
                            ..._
                        }
                    } = e, l = await i.default.patch({
                        url: N.Endpoints.BILLING_PAYMENT_SOURCE(t),
                        body: {
                            billing_address: {
                                ..._,
                                line_1: n,
                                line_2: r,
                                postal_code: a
                            },
                            expires_month: e.expiresMonth,
                            expires_year: e.expiresYear,
                            default: e.isDefault
                        }
                    }), E = I.default.createFromServer(l.body);
                    o.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS",
                        paymentSource: E
                    })
                } catch (e) {
                    let t = (0, E.parseV8BillingAddressSkemaErrorToBillingError)(e);
                    throw o.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL",
                        error: t
                    }), t
                }
            }
            async function O(t) {
                let e = await i.default.get({
                        url: N.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(t),
                        oldFormErrors: !0
                    }),
                    {
                        stripe_payment_intent_client_secret: n
                    } = e.body;
                return n
            }
            async function f(t) {
                let e = await i.default.get({
                        url: N.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(t),
                        oldFormErrors: !0
                    }),
                    {
                        stripe_payment_intent_client_secret: n,
                        stripe_payment_intent_payment_method_id: r
                    } = e.body;
                return {
                    clientSecret: n,
                    paymentMethodId: r
                }
            }
            async function L() {
                let t = await i.default.post({
                    url: N.Endpoints.BILLING_STRIPE_SETUP_INTENT_SECRET,
                    oldFormErrors: !0
                });
                return t.body.client_secret
            }
            async function m(t) {
                try {
                    let e = await i.default.post({
                        url: N.Endpoints.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
                        body: {
                            billing_address: {
                                name: t.name,
                                line_1: t.line1,
                                line_2: t.line2,
                                city: t.city,
                                state: t.state,
                                postal_code: t.postalCode,
                                country: t.country,
                                email: t.email
                            }
                        }
                    });
                    return e.body.token
                } catch (e) {
                    let t = (0, E.parseV8BillingAddressSkemaErrorToBillingError)(e);
                    throw o.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: t
                    }), t
                }
            }

            function h(t) {
                var e;
                return N.VAULTABLE_PAYMENT_SOURCES.has(t.type) ? null : JSON.stringify({
                    type: null !== (e = A.ADYEN_PAYMENT_SOURCES.get(t.type)) && void 0 !== e ? e : null
                })
            }
            async function M(t, e, n, r) {
                o.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                try {
                    let a = await i.default.post({
                            url: N.Endpoints.BILLING_PAYMENT_SOURCES,
                            query: {
                                location: r.analyticsLocation
                            },
                            body: {
                                payment_gateway: t,
                                token: e,
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
                        _ = I.default.createFromServer(a.body);
                    return o.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS",
                        paymentSource: _
                    }), _
                } catch (e) {
                    let t = (0, E.parseV8BillingAddressSkemaErrorToBillingError)(e);
                    throw function(t, e) {
                        var n, r;
                        (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.adyen_redirect_url) && (t.fields.adyen_redirect_url = null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.adyen_redirect_url)
                    }(t, e), t.code !== E.ErrorCodes.CONFIRMATION_REQUIRED && o.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: t
                    }), t
                }
            }

            function G(t) {
                var e, n;
                let r, a, _ = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = C.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR;
                if (e = t, R.StripeErrorTypes.includes(e.type)) {
                    ;
                    let e = null != t.message ? "".concat(i, ": ").concat(t.message) : i,
                        o = {
                            failure_message: e,
                            error_type: t.type,
                            failure_code: t.code,
                            failure_sub_code: t.decline_code,
                            payment_source_type: null === (n = t.payment_method) || void 0 === n ? void 0 : n.type
                        };
                    if (a = o, "card_error" === t.type) s.default.track(N.AnalyticEvents.PAYMENT_SOURCE_CREATION_FAILED, {
                        ...o,
                        stacktrace: Error().stack
                    }), _ = !1;
                    r = new l.BillingError(e)
                } else a = {
                    failure_message: (r = new l.BillingError("string" == typeof t ? i : t)).message,
                    status_code: r.code
                }, 429 === r.code && (_ = !1);
                o.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                    error: r
                });
                let E = Error("string" == typeof t ? t : r.message);
                return _ && (0, S.captureBillingException)(E, {
                    extra: a
                }), E
            }
            async function D(t, e) {
                if (null == t || null == e) throw G("Stripe or elements not loaded");
                let n = e.getElement(r.CardNumberElement);
                if (null == n) throw G("Unable to load card elements from Stripe");
                let {
                    token: a,
                    error: _
                } = await t.createToken(n);
                if (null != _) throw G(_);
                if (null == a) throw G("token not available with successful stripe call");
                return a.id
            }
            async function U(t, e, n, r) {
                if (null == t) throw G("Stripe not loaded");
                if (null == e) throw G("Bank required for EPS");
                let {
                    email: a,
                    name: _,
                    line1: i,
                    line2: l,
                    city: E,
                    state: I,
                    postalCode: u,
                    country: c
                } = n;
                if (null == _) throw G("Name required for EPS");
                o.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let s = await m(n),
                    {
                        paymentMethod: S,
                        error: d
                    } = await t.createPaymentMethod({
                        type: "eps",
                        eps: {
                            bank: e
                        },
                        billing_details: {
                            address: {
                                line1: i,
                                line2: l,
                                city: E,
                                state: I,
                                postal_code: u,
                                country: c
                            },
                            name: _,
                            email: a
                        }
                    });
                if (null != d) throw G(d);
                if (null == S) throw G("paymentMethod not available with successful stripe call");
                return M(N.PaymentGateways.STRIPE, S.id, n, {
                    billingAddressToken: s,
                    analyticsLocation: r,
                    bank: e
                })
            }
            async function B(t, e, n, r) {
                if (null == t) throw G("Stripe not loaded");
                if (null == e) throw G("Bank required for iDEAL");
                let {
                    email: a,
                    name: _,
                    line1: i,
                    line2: l,
                    city: E,
                    state: I,
                    postalCode: u,
                    country: c
                } = n;
                if (null == _) throw G("Name required for iDEAL");
                o.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let s = await m(n),
                    {
                        paymentMethod: S,
                        error: d
                    } = await t.createPaymentMethod({
                        type: "ideal",
                        ideal: {
                            bank: e
                        },
                        billing_details: {
                            address: {
                                line1: i,
                                line2: l,
                                city: E,
                                state: I,
                                postal_code: u,
                                country: c
                            },
                            name: _,
                            email: a
                        }
                    });
                if (null != d) throw G(d);
                if (null == S) throw G("paymentMethod not available with successful stripe call");
                return M(N.PaymentGateways.STRIPE, S.id, n, {
                    billingAddressToken: s,
                    analyticsLocation: r,
                    bank: e
                })
            }
            async function w(t, e, n, r) {
                if (null == t) throw G("Stripe not loaded");
                let {
                    email: a,
                    name: _,
                    line1: i,
                    line2: l,
                    city: E,
                    state: I,
                    postalCode: u,
                    country: c
                } = n;
                if (null == a) throw G("Email required for Przelewy24");
                o.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let s = await m(n),
                    S = e.p24Bank,
                    {
                        paymentMethod: d,
                        error: T
                    } = await t.createPaymentMethod({
                        type: "p24",
                        p24: {
                            bank: S
                        },
                        billing_details: {
                            address: {
                                line1: i,
                                line2: l,
                                city: E,
                                state: I,
                                postal_code: u,
                                country: c
                            },
                            name: _,
                            email: a
                        }
                    });
                if (null != T) throw G(T);
                if (null == d) throw G("paymentMethod not available with successful stripe call");
                return M(N.PaymentGateways.STRIPE, d.id, n, {
                    billingAddressToken: s,
                    analyticsLocation: r,
                    bank: S
                })
            }
            async function b(t, e, n) {
                if (null == t) throw G("Stripe not loaded");
                o.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let r = await m(e),
                    {
                        email: a,
                        name: _,
                        line1: i,
                        line2: l,
                        city: E,
                        state: I,
                        postalCode: u,
                        country: c
                    } = e,
                    {
                        paymentMethod: s,
                        error: S
                    } = await t.createPaymentMethod({
                        type: "sofort",
                        sofort: {
                            country: c
                        },
                        billing_details: {
                            address: {
                                line1: i,
                                line2: l,
                                city: E,
                                state: I,
                                postal_code: u,
                                country: c
                            },
                            name: _,
                            email: a
                        }
                    });
                if (null != S) throw G(S);
                if (null == s) throw G("paymentMethod not available with successful stripe call");
                return M(N.PaymentGateways.STRIPE, s.id, e, {
                    billingAddressToken: r,
                    analyticsLocation: n
                })
            }
            async function g(t, e, n, r) {
                if (null == t || null == e) throw G("Stripe or token not loaded");
                o.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
                });
                let a = null;
                try {
                    a = await L()
                } catch (t) {
                    throw G(t)
                }
                let {
                    name: i,
                    line1: l,
                    line2: E,
                    city: I,
                    state: u,
                    postalCode: c,
                    country: s
                } = n, S = await m(n), {
                    setupIntent: d,
                    error: T
                } = await t.confirmCardSetup(a, {
                    payment_method: {
                        card: {
                            token: e
                        },
                        billing_details: {
                            address: {
                                line1: l,
                                line2: E,
                                city: I,
                                state: u,
                                postal_code: c,
                                country: s
                            },
                            name: i
                        }
                    }
                });
                if (null != T) throw G(T);
                if ((null == d ? void 0 : d.payment_method) == null) throw G("setupIntent.payment_method not available with successful stripe call");
                return _("string" == typeof d.payment_method, "setupIntent.payment_method expanded not supported"), M(N.PaymentGateways.STRIPE, d.payment_method, n, {
                    billingAddressToken: S,
                    analyticsLocation: r
                })
            }

            function x(t, e, n) {
                let {
                    token: r,
                    billingAddressInfo: a
                } = p.parseStripePaymentMethod(t);
                return M(N.PaymentGateways.STRIPE, r, null != e ? e : a, {
                    analyticsLocation: n
                })
            }

            function H(t, e, n) {
                return M(N.PaymentGateways.BRAINTREE, t, e, {
                    analyticsLocation: n
                })
            }
            async function Y(t, e, n, r) {
                if (null == t) throw G("Stripe not loaded");
                let a = await m(e),
                    {
                        name: i,
                        line1: o,
                        line2: l,
                        city: E,
                        state: I,
                        postalCode: u,
                        country: c
                    } = e,
                    s = A.STRIPE_PAYMENT_SOURCES.get(n);
                _(null != s, "unsupported payment method type");
                let {
                    paymentMethod: S,
                    error: d
                } = await t.createPaymentMethod({
                    type: s,
                    billing_details: {
                        address: {
                            line1: o,
                            line2: l,
                            city: E,
                            state: I,
                            postal_code: u,
                            country: c
                        },
                        name: i
                    }
                });
                if (null != d) throw G(d);
                if (null == S) throw G("stripePaymentMethod not available with successful stripe call");
                return M(N.PaymentGateways.STRIPE, S.id, e, {
                    billingAddressToken: a,
                    analyticsLocation: r
                })
            }
            async function F(t, e, n) {
                let r = await m(t),
                    a = {
                        type: A.ADYEN_PAYMENT_SOURCES.get(e)
                    };
                return M(N.PaymentGateways.ADYEN, JSON.stringify(a), t, {
                    billingAddressToken: r,
                    analyticsLocation: n
                })
            }
            async function K(t, e, n, r) {
                var a;
                let _ = await m(t),
                    I = {
                        type: A.ADYEN_PAYMENT_SOURCES.get(e),
                        ...null !== (a = null == r ? void 0 : r.paymentMethod) && void 0 !== a ? a : {}
                    },
                    u = await tR(e),
                    c = i.default.getAPIBaseURL() + N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(e, null != u ? u : "", "success");
                try {
                    let e = await M(N.PaymentGateways.ADYEN, JSON.stringify(I), t, {
                        billingAddressToken: _,
                        analyticsLocation: n,
                        returnUrl: c
                    });
                    return {
                        paymentSource: e,
                        redirectConfirmation: !1
                    }
                } catch (e) {
                    if (e.code !== E.ErrorCodes.CONFIRMATION_REQUIRED) throw o.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                        error: new l.BillingError("Unable to create payment source token: code: ".concat(null == e ? void 0 : e.code, " message: ").concat(null == e ? void 0 : e.message), l.BillingError.ErrorCodes.UNKNOWN)
                    }), e;
                    let t = e.fields.adyen_redirect_url;
                    if (null == t) throw G("redirect url cannot be null on a redirect for adyen.");
                    return ta(t), {
                        redirectConfirmation: !0
                    }
                }
            }
            async function v(t) {
                if (N.VAULTABLE_PAYMENT_SOURCES.has(t.type)) return null;
                let e = await p.getStripe();
                if (null == e) throw new l.BillingError("Stripe not loaded", l.BillingError.ErrorCodes.UNKNOWN);
                let {
                    email: n,
                    name: r,
                    line1: a,
                    line2: i,
                    city: o,
                    state: E,
                    postalCode: I,
                    country: u
                } = t.billingAddress, c = {
                    billing_details: {
                        address: {
                            line1: a,
                            line2: i,
                            city: o,
                            state: E,
                            postal_code: I,
                            country: u
                        },
                        name: r
                    }
                };
                switch (t.type) {
                    case A.PaymentSourceTypes.GIROPAY:
                        c.type = "giropay";
                        break;
                    case A.PaymentSourceTypes.SOFORT:
                        c.type = "sofort", c.sofort = {
                            country: null != u ? u : ""
                        }, c.billing_details.email = n;
                        break;
                    case A.PaymentSourceTypes.BANCONTACT:
                        c.type = "bancontact";
                        break;
                    case A.PaymentSourceTypes.IDEAL:
                        if (null == t.bank) throw new l.BillingError("iDEAL missing bank information", l.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        c.type = "ideal", c.ideal = {
                            bank: t.bank
                        };
                        break;
                    case A.PaymentSourceTypes.PRZELEWY24:
                        if (null == t.bank) throw new l.BillingError("p24 missing bank information", l.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        c.type = "p24", c.p24 = {
                            bank: t.bank
                        }, c.billing_details.email = t.email;
                        break;
                    case A.PaymentSourceTypes.EPS:
                        if (null == t.bank) throw new l.BillingError("EPS missing bank information", l.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                        c.type = "eps", c.eps = {
                            bank: t.bank
                        }
                }
                _(null != c.type, "unsupported payment method type");
                let {
                    paymentMethod: s,
                    error: S
                } = await e.createPaymentMethod(c);
                if (null != S || null == s) throw new l.BillingError("Unable to create payment source token: code: ".concat(null == S ? void 0 : S.code, " message: ").concat(null == S ? void 0 : S.message), l.BillingError.ErrorCodes.UNKNOWN);
                return s.id
            }

            function k(t) {
                return N.VAULTABLE_PAYMENT_SOURCES.has(t.type) ? null : A.ADYEN_PAYMENT_SOURCES.has(t.type) ? h(t) : v(t)
            }
            async function V() {
                try {
                    let t = i.default.get({
                        url: N.Endpoints.BILLING_PAYMENT_SOURCES,
                        oldFormErrors: !0
                    });
                    o.default.wait(() => o.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCES_FETCH_START",
                        request: t
                    }));
                    let e = await t;
                    return o.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS",
                        paymentSources: e.body
                    }), e
                } catch (t) {
                    throw o.default.dispatch({
                        type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL"
                    }), t
                }
            }
            async function W(t) {
                let e = await i.default.get({
                    url: N.Endpoints.BILLING_PAYMENT(t)
                });
                return o.default.dispatch({
                    type: "BILLING_PAYMENT_FETCH_SUCCESS",
                    payment: e.body
                }), e
            }
            async function J() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                o.default.dispatch({
                    type: "BILLING_PAYMENTS_FETCH_START"
                });
                try {
                    let n = await i.default.get({
                        url: N.Endpoints.BILLING_PAYMENTS,
                        query: {
                            limit: t,
                            before: e
                        },
                        oldFormErrors: !0
                    });
                    return o.default.dispatch({
                        type: "BILLING_PAYMENTS_FETCH_SUCCESS",
                        payments: n.body
                    }), n
                } catch (t) {
                    throw o.default.dispatch({
                        type: "BILLING_PAYMENTS_FETCH_FAIL"
                    }), t
                }
            }
            async function Z() {
                o.default.wait(() => {
                    o.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_FETCH_START"
                    })
                });
                try {
                    let t = await i.default.get({
                        url: N.Endpoints.BILLING_SUBSCRIPTIONS,
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw new l.BillingError("response body is null, response: ".concat(JSON.stringify(t)), t.status);
                    return o.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS",
                        subscriptions: t.body
                    }), t
                } catch (t) {
                    throw o.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_FETCH_FAIL"
                    }), t
                }
            }
            async function q() {
                o.default.wait(() => {
                    o.default.dispatch({
                        type: "BILLING_PERKS_RELEVANCE_FETCH_START"
                    })
                });
                try {
                    let t = await i.default.get(N.Endpoints.BILLING_PERKS_RELEVANCE);
                    o.default.dispatch({
                        type: "BILLING_PERKS_RELEVANCE_FETCH_SUCCESS",
                        res: t.body
                    })
                } catch (t) {
                    o.default.dispatch({
                        type: "BILLING_PERKS_RELEVANCE_FETCH_FAIL"
                    })
                }
            }
            async function X() {
                try {
                    let t = await i.default.get(N.Endpoints.BILLING_NITRO_AFFINITY);
                    o.default.dispatch({
                        type: "BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED",
                        res: t.body.map(t => new u.default(t))
                    })
                } finally {
                    o.default.dispatch({
                        type: "BILLING_NITRO_AFFINITY_FETCHED"
                    })
                }
            }
            async function z() {
                o.default.wait(() => {
                    o.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START"
                    })
                });
                try {
                    let t = await i.default.get({
                        url: N.Endpoints.BILLING_SUBSCRIPTIONS,
                        query: {
                            include_inactive: !0,
                            limit: 2,
                            exclude_unpaid_statuses: !0,
                            subscription_type: A.SubscriptionTypes.PREMIUM
                        },
                        oldFormErrors: !0
                    });
                    return t.ok ? (o.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS",
                        subscription: t.body.length > 0 ? t.body[0] : null
                    }), o.default.dispatch({
                        type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS",
                        subscription: t.body.length > 1 ? t.body[1] : null
                    })) : o.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL"
                    }), t
                } catch (t) {
                    o.default.dispatch({
                        type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL"
                    })
                }
            }
            async function Q(t) {
                let {
                    items: e,
                    paymentSource: n,
                    trialId: r,
                    code: a,
                    currency: _,
                    metadata: I,
                    referralCode: u,
                    loadId: c
                } = t;
                o.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_START"
                }), e = (0, d.coerceExistingItemsToNewItemInterval)(e);
                let s = null;
                if (null != n && A.ADYEN_PAYMENT_SOURCES.has(n.type)) {
                    let t = await tR(n.type);
                    s = i.default.getAPIBaseURL() + N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != t ? t : "", "success")
                }
                try {
                    let t = await i.default.post({
                        url: N.Endpoints.BILLING_SUBSCRIPTIONS,
                        body: {
                            items: e.map(t => {
                                let {
                                    planId: e,
                                    quantity: n
                                } = t;
                                return {
                                    plan_id: e,
                                    quantity: n
                                }
                            }),
                            payment_source_id: null != n ? n.id : null,
                            payment_source_token: null != n ? await k(n) : null,
                            trial_id: r,
                            return_url: s,
                            code: a,
                            currency: null != n ? _ : A.CurrencyCodes.USD,
                            metadata: I,
                            gateway_checkout_context: await (0, S.createGatewayCheckoutContext)(n),
                            purchase_token: (0, T.getPurchaseToken)(),
                            referral_code: u,
                            load_id: c
                        },
                        oldFormErrors: !0
                    });
                    return o.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                        subscription: t.body
                    }), {
                        subscription: t.body,
                        redirectConfirmation: !1
                    }
                } catch (e) {
                    let t = e instanceof l.BillingError ? e : new l.BillingError(e);
                    if (t.code !== E.ErrorCodes.CONFIRMATION_REQUIRED) throw o.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: t
                    }), t;
                    if (!e.body.payment_id) throw G("payment id cannot be null on redirected confirmations.");
                    return $(e.body, n)
                }
            }
            async function j(t, e, n, r) {
                let a = null;
                if (null != n && A.PREPAID_PAYMENT_SOURCES.has(n.type)) {
                    let t = await tR(n.type);
                    a = i.default.getAPIBaseURL() + N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != t ? t : "", "success")
                }
                try {
                    let _ = await i.default.post({
                        url: N.Endpoints.BILLING_INVOICE_MANUAL_PAYMENT(t.id, e),
                        body: {
                            payment_source_id: null != n ? n.id : null,
                            payment_source_token: null != n ? await k(n) : null,
                            return_url: a,
                            currency: r
                        },
                        oldFormErrors: !0
                    });
                    return o.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                        subscription: _.body
                    }), {
                        subscription: _.body,
                        redirectConfirmation: N.REDIRECTED_PAYMENT_SOURCES.has(n.type)
                    }
                } catch (e) {
                    let t = e instanceof l.BillingError ? e : new l.BillingError(e);
                    if (t.code !== E.ErrorCodes.CONFIRMATION_REQUIRED) throw o.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: t
                    }), t;
                    if (!e.body.payment_id) throw G("payment id cannot be null on redirected confirmations.");
                    return $(e.body, n)
                }
            }

            function $(t, e) {
                return null != e && A.ADYEN_PAYMENT_SOURCES.has(e.type) ? tt(t.adyen_redirect_url, e) : te(t.payment_id, e)
            }
            async function tt(t, e) {
                if (null == t) throw G("redirect url cannot be null on a redirect for adyen.");
                if (null == e) throw G("Payment source cannot be null on a redirect.");
                return N.REDIRECTED_PAYMENT_SOURCES.has(e.type) ? (ta(t), {
                    redirectConfirmation: !0,
                    redirectURL: t
                }) : {
                    redirectConfirmation: !1,
                    redirectURL: t
                }
            }
            async function te(t, e) {
                let n = await p.getStripe();
                if (null == e) throw G("Payment source cannot be null on a redirect.");
                let {
                    clientSecret: r,
                    paymentMethodId: a
                } = await f(t);
                if (null == n) throw G("Stripe cannot be null on a redirect.");
                if (N.REDIRECTED_PAYMENT_SOURCES.has(e.type)) {
                    let t = await tR(e.type);
                    return ta(await ti({
                        stripe: n,
                        paymentSource: e,
                        clientSecret: r,
                        state: t
                    })), {
                        redirectConfirmation: !0
                    }
                }
                return await t_({
                    stripe: n,
                    clientSecret: r,
                    paymentMethodId: a,
                    paymentSource: e
                }), {
                    redirectConfirmation: !1
                }
            }
            async function tn(t) {
                var e;
                let n = await W(t);
                if ((null == n ? void 0 : n.body) == null) throw G("could not fetch payment");
                let r = I.default.createFromServer(n.body.payment_source);
                if (!N.REDIRECTED_PAYMENT_SOURCES.has(r.type)) throw G("unsupported redirect payment source");
                if ((null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.status) === A.PaymentStatusTypes.FAILED) throw G("payment failed");
                return r.paymentGateway !== N.PaymentGateways.STRIPE || tr(t)
            }
            async function tr(t) {
                let e = await p.getStripe();
                if (null == e) throw G("Stripe has not loaded.");
                if (null == t) throw G("payment intent id cannot be null.");
                let n = await O(t),
                    {
                        paymentIntent: r,
                        error: a
                    } = await e.retrievePaymentIntent(n);
                if (null != a) throw G(a);
                if (null == r) throw G("paymentIntent not available with successful stripe call");
                if (null != r.last_payment_error) throw G("unable to retrieve payment intent ".concat(r.last_payment_error));
                return !0
            }

            function ta(t) {
                window.open(t)
            }
            async function t_(t) {
                let e, {
                        stripe: n,
                        paymentSource: r,
                        paymentMethodId: a,
                        clientSecret: _
                    } = t,
                    i = {};
                if (r.type === A.PaymentSourceTypes.SEPA_DEBIT) {
                    if (null == a) throw G("On a sepa payment payment method id cannot be null");
                    i.payment_method = a, e = n.confirmSepaDebitPayment
                } else throw G("Unsupported redirected payment source type.");
                let {
                    paymentIntent: o,
                    error: l
                } = await e(_, i);
                if (null != l) throw G(l);
                if (null == o) throw G("paymentIntent not available with successful stripe call")
            }
            async function ti(t) {
                var e, n;
                let r, {
                        stripe: a,
                        paymentSource: _,
                        clientSecret: o,
                        state: l
                    } = t,
                    E = {};
                switch (_.type) {
                    case A.PaymentSourceTypes.GIROPAY:
                        E = {
                            billing_details: {
                                name: _.billingAddress.name
                            }
                        }, r = a.confirmGiropayPayment;
                        break;
                    case A.PaymentSourceTypes.BANCONTACT:
                        E = {
                            billing_details: {
                                name: _.billingAddress.name,
                                email: _.email
                            }
                        }, r = a.confirmBancontactPayment;
                        break;
                    case A.PaymentSourceTypes.SOFORT:
                        E = {
                            sofort: {
                                country: _.billingAddress.country
                            },
                            billing_details: {
                                name: _.billingAddress.name,
                                email: _.email
                            }
                        }, r = a.confirmSofortPayment;
                        break;
                    case A.PaymentSourceTypes.PRZELEWY24:
                        if (null == _.bank) throw G("PaymentSource (".concat(_.id, ") missing bank info for p24."));
                        E = {
                            p24: {
                                bank: _.bank
                            },
                            billing_details: {
                                name: _.billingAddress.name,
                                email: _.email
                            }
                        }, r = a.confirmP24Payment;
                        break;
                    case A.PaymentSourceTypes.EPS:
                        if (null == _.bank) throw G("PaymentSource (".concat(_.id, ") missing bank info for EPS."));
                        E = {
                            eps: {
                                bank: _.bank
                            },
                            billing_details: {
                                name: _.billingAddress.name
                            }
                        }, r = a.confirmEpsPayment;
                        break;
                    case A.PaymentSourceTypes.IDEAL:
                        if (null == _.bank) throw G("PaymentSource (".concat(_.id, ") missing bank info for iDEAL."));
                        E = {
                            ideal: {
                                bank: _.bank
                            },
                            billing_details: {
                                name: _.billingAddress.name
                            }
                        }, r = a.confirmIdealPayment;
                        break;
                    default:
                        throw G("Unsupported redirected payment source type.")
                }
                let {
                    paymentIntent: I,
                    error: u
                } = await r(o, {
                    payment_method: E,
                    return_url: i.default.getAPIBaseURL() + N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(_.type, null != l ? l : "", "success")
                }, {
                    handleActions: !1
                });
                if (null != u) throw G(u);
                if (null == I) throw G("paymentIntent not available with successful api call");
                if ((null === (n = I.next_action) || void 0 === n ? void 0 : null === (e = n.redirect_to_url) || void 0 === e ? void 0 : e.url) == null) throw G("confirm payment did not return a redirect url");
                return I.next_action.redirect_to_url.url
            }
            async function to(t, e, n) {
                o.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_CANCEL_START"
                });
                try {
                    let r = await i.default.delete({
                        url: N.Endpoints.BILLING_SUBSCRIPTION(t),
                        query: {
                            location: n,
                            location_stack: e
                        },
                        oldFormErrors: !0
                    });
                    return o.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS"
                    }), r
                } catch (e) {
                    let t = new l.BillingError(e);
                    throw o.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_CANCEL_FAIL",
                        error: t
                    }), t
                }
            }

            function tl(t, e) {
                return tE(t, {
                    items: t.items
                }, e)
            }
            async function tE(t, e, n, r) {
                if (null != e.paymentSource && null == e.currency) throw Error("Currency must be specified with payment source");
                o.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_UPDATE_START"
                });
                try {
                    var a;
                    let _ = {
                        status: e.status,
                        payment_source_id: null === (a = e.paymentSource) || void 0 === a ? void 0 : a.id,
                        payment_source_token: null != e.paymentSource ? await k(e.paymentSource) : null,
                        currency: e.currency,
                        gateway_checkout_context: await (0, S.createGatewayCheckoutContext)(e.paymentSource)
                    };
                    if (null != e.paymentSource && A.ADYEN_PAYMENT_SOURCES.has(e.paymentSource.type)) {
                        let t = await tR(e.paymentSource.type);
                        _.return_url = i.default.getAPIBaseURL() + N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(e.paymentSource.type, null != t ? t : "", "success")
                    }
                    null != e.items && (_.items = (0, d.coerceExistingItemsToNewItemInterval)(e.items).map(t => {
                        let {
                            planId: e,
                            ...n
                        } = t;
                        return {
                            ...n,
                            plan_id: e
                        }
                    }));
                    let l = await i.default.patch({
                        url: N.Endpoints.BILLING_SUBSCRIPTION(t.id),
                        query: {
                            location: r,
                            location_stack: n
                        },
                        body: _,
                        oldFormErrors: !0
                    });
                    return o.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                        subscription: l.body
                    }), {
                        subscription: l.body,
                        redirectConfirmation: !1
                    }
                } catch (n) {
                    let t = n instanceof l.BillingError ? n : new l.BillingError(n);
                    if (t.code !== E.ErrorCodes.CONFIRMATION_REQUIRED) throw o.default.dispatch({
                        type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                        error: t
                    }), t;
                    if (!n.body.payment_id) throw G("payment id cannot be null on redirected confirmations.");
                    return $(n.body, e.paymentSource)
                }
            }

            function tI(t, e, n, r, a) {
                return tE(t, {
                    status: N.SubscriptionStatusTypes.ACTIVE,
                    paymentSource: n,
                    currency: r
                }, e, a)
            }

            function tu(t, e, n, r) {
                let a = (0, d.getItemsWithUpsertedPremiumPlanId)(t, e);
                return tE(t, {
                    status: N.SubscriptionStatusTypes.ACTIVE,
                    items: a
                }, n, r)
            }

            function tc(t, e, n, r) {
                return tE(t, {
                    currency: e
                }, n, r)
            }

            function ts(t, e, n, r, a) {
                return tE(t, {
                    paymentSource: e,
                    currency: n
                }, r, a)
            }

            function tS() {
                o.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR"
                })
            }

            function td() {
                o.default.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR"
                })
            }

            function tT() {
                o.default.dispatch({
                    type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR"
                })
            }
            async function tp(t) {
                await i.default.post({
                    url: N.Endpoints.BILLING_PAYMENTS_VOID(t),
                    oldFormErrors: !0
                })
            }
            async function tN(t, e) {
                await i.default.post({
                    url: N.Endpoints.BILLING_PAYMENTS_REFUND(t),
                    body: {
                        reason: e
                    }
                })
            }
            async function tR(t) {
                let {
                    body: {
                        state: e
                    }
                } = await i.default.post({
                    url: N.Endpoints.BILLING_POPUP_BRIDGE(t),
                    oldFormErrors: !0
                });
                return o.default.dispatch({
                    type: "BILLING_POPUP_BRIDGE_STATE_UPDATE",
                    state: e,
                    paymentSourceType: t
                }), e
            }

            function tA(t) {
                let {
                    paymentSourceType: e,
                    state: n,
                    path: r,
                    query: a,
                    insecure: _
                } = t;
                return o.default.dispatch({
                    type: "BILLING_POPUP_BRIDGE_CALLBACK_START",
                    paymentSourceType: e
                }), i.default.post({
                    url: N.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK(e),
                    body: {
                        state: n,
                        path: r,
                        query: a,
                        insecure: _
                    },
                    oldFormErrors: !0
                }).then(t => (o.default.dispatch({
                    type: "BILLING_POPUP_BRIDGE_CALLBACK_END",
                    paymentSourceType: e
                }), t))
            }
            async function tC() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!t && null != c.default.ipCountryCodeRequest) return c.default.ipCountryCodeRequest;
                try {
                    let t = i.default.get({
                        url: N.Endpoints.BILLING_COUNTRY_CODE
                    });
                    o.default.wait(() => o.default.dispatch({
                        type: "BILLING_IP_COUNTRY_CODE_FETCH_START",
                        request: t
                    }));
                    let e = await t,
                        n = e.body.country_code;
                    return o.default.dispatch({
                        type: "BILLING_SET_IP_COUNTRY_CODE",
                        countryCode: n
                    }), e
                } catch (t) {
                    return o.default.dispatch({
                        type: "BILLING_IP_COUNTRY_CODE_FAILURE"
                    }), t
                }
            }
            async function ty() {
                try {
                    let t = await i.default.get({
                        url: N.Endpoints.BILLING_LOCALIZED_PROMO
                    });
                    if (null != t.body.localized_pricing_promo) {
                        let e = t.body.localized_pricing_promo;
                        o.default.dispatch({
                            type: "BILLING_SET_LOCALIZED_PRICING_PROMO",
                            localizedPricingPromo: e
                        })
                    }
                    return t
                } catch (t) {
                    return o.default.dispatch({
                        type: "BILLING_LOCALIZED_PRICING_PROMO_FAILURE"
                    }), t
                }
            }

            function tP() {
                o.default.dispatch({
                    type: "RESET_PAYMENT_ID"
                })
            }

            function tO() {
                o.default.dispatch({
                    type: "BILLING_SUBSCRIPTION_RESET"
                })
            }

            function tf(t) {
                o.default.dispatch({
                    type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED",
                    loadId: t
                })
            }
        },
        775433: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchSubscriptionPlansForSKU: function() {
                    return u
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return c
                },
                fetchPremiumSubscriptionPlans: function() {
                    return s
                },
                resetSubscriptionPlanData: function() {
                    return S
                }
            }), n("222007");
            var r = n("872717"),
                a = n("913144"),
                _ = n("333805"),
                i = n("160299"),
                o = n("745279"),
                l = n("850068"),
                E = n("49111"),
                I = n("646718");
            async function u(t, e, n, I, u) {
                a.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: t
                });
                try {
                    let _ = {
                            url: E.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(t),
                            oldFormErrors: !0
                        },
                        o = {};
                    null != e && (o.country_code = e), null != n && (o.payment_source_id = n), null != I && (o.include_unpublished = I), null != u && (o.revenue_surface = u), _.query = o, !i.default.ipCountryCodeLoaded && await (0, l.fetchIpCountryCode)();
                    let c = await r.default.get(_);
                    a.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: t,
                        subscriptionPlans: c.body
                    })
                } catch (e) {
                    throw a.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: t
                    }), (0, o.captureBillingException)(e), new _.default(e)
                }
            }

            function c(t, e) {
                return Promise.all(t.filter(t => t !== I.PremiumSubscriptionSKUs.NONE).map(t => u(t, e)))
            }

            function s(t, e, n) {
                return Promise.all(I.ACTIVE_PREMIUM_SKUS.filter(t => t !== I.PremiumSubscriptionSKUs.NONE).map(r => u(r, t, e, void 0, n)))
            }

            function S() {
                a.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        753809: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                LinkIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                _ = n("75196");
            let i = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, _.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M16.3 14.7a1 1 0 0 1 0-1.4l2.5-2.5a3.95 3.95 0 1 0-5.6-5.6l-2.5 2.5a1 1 0 1 1-1.4-1.4l2.5-2.5a5.95 5.95 0 1 1 8.4 8.4l-2.5 2.5a1 1 0 0 1-1.4 0ZM7.7 9.3a1 1 0 0 1 0 1.4l-2.5 2.5a3.95 3.95 0 0 0 5.6 5.6l2.5-2.5a1 1 0 1 1 1.4 1.4l-2.5 2.5a5.95 5.95 0 0 1-8.4-8.4l2.5-2.5a1 1 0 0 1 1.4 0Z",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M14.7 10.7a1 1 0 1 0-1.4-1.4l-4 4a1 1 0 0 0 1.4 1.4l4-4Z",
                        className: o
                    })]
                })
            }
        },
        769846: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            }), (r = a || (a = {})).CHANNEL_CHAT_RESIZABLE_SIDEBAR_RESIZE_HANDLE_WIDTH = "8px", r.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE = "485px", r.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH = "224px", r.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN = "10px", r.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH = "305px", r.ACTIVITIES_HOME_HAPPENING_NOW_GAP = "16px", r.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH = "356px", r.FOLDER_ITEM_ANIMATION_DURATION = "150ms", r.FOLDER_ITEM_GUILD_ICON_SIZE = "48px", r.GUILD_TOOLTIP_ICON_SIZE = "20px", r.GUILD_TOOLTIP_ICON_SIZE_V_2 = "16px", r.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING = "2px", r.FULL_SCREEN_LAYER_ANIMATION_DURATION = "150ms", r.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP = "7px", r.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS = "76px", r.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING = "2px", r.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN = "0", r.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING = "8px", r.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE = "32px", r.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN = "8px", r.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE = "24px", r.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px", r.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px", r.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL = "360px", r.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM = "446px", r.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP = "0", r.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS = "8px", r.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT = "0", r.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM = "0", r.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT = "8px", r.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT = "30px", r.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS = "96px", r.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL = "80px", r.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING = "2px", r.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN = "12px", r.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT = "54px", r.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT = "32px", r.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS = "28px", r.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS = "32px", r.STICKERS_CONSTANTS_STICKER_DIMENSION = "160px", r.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL = "4px", r.ASPECT_STABLE_IMAGE_CONTAINER_PADDING = "20px", r.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING = "4px", r.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH = "340px", r.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH = "280px", r.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT = "120px", r.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT = "90px", r.USER_BANNER_BANNER_HEIGHT_POPOUT = "60px", r.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE = "212px", r.USER_BANNER_BANNER_HEIGHT_PROFILE = "106px", r.USER_BANNER_BANNER_HEIGHT_POMELO = "64px", r.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS = "100px", r.USER_BANNER_BANNER_HEIGHT_PANEL = "120px", r.USER_BANNER_CANCEL_MODAL_HEIGHT = "42px", r.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH = "24px", r.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE = "16px", r.ACTIVITY_SHELF_MODAL_MODAL_PADDING = "80px", r.ACTIVITY_SHELF_MODAL_MODAL_WIDTH = "496px", r.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH = "496px", r.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH = "1024px", r.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT = "720px", r.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT = "64px", r.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT = "230px", r.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT = "143px", r.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP = "16px", r.LIVE_INDICATOR_BORDER_RADIUS = "16px", r.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH = "119px", r.FOLDER_ITEM_GUILD_ICON_MARGIN = "8px", r.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE = "288px", r.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL = "225px", r.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH = "576px", r.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE = "80px", r.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE = "48px", r.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH = "1024px", r.GUILD_COUNT_SMALL_ICON_SIZE = "16px", r.GUILD_COUNT_LARGE_ICON_SIZE = "20px", r.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN = "12px", r.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE = "196px", r.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE = "40px", r.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL = "4px", r.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT = "8px", r.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE = "32px", r.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL = "8px", r.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE = "24px", r.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL = "2px", r.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING = "4px", r.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px", r.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px", r.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL = "4px", r.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE = "24px", r.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP = "0", r.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT = "0", r.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM = "8px", r.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP = "8px", r.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM = "12px", r.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT = "54px", r.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP = "16px", r.VOICE_WIDGET_TOP_MARGIN = "var(--custom-widget-bar-height) + calc(2 * var(--custom-widget-bar-padding))", r.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING = "8px", r.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE = "48px", r.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN = "8px", r.COLLECTION_GALLERY_MEDIA_BREAKPOINT = "1024px", r.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT = "600px", r.COLLECTION_GALLERY_ROW_CARD_HEIGHT = "283px", r.COLLECTION_LIST_CARD_GAP = "16px", r.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH = "520px", r.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE = "40px", r.ROLE_ICON_UPLOADER_ICON_SIZE = "24px", r.GRADIENT_PROGRESS_NOTCH_WIDTH = "8px", r.GAME_LIST_ROW_MIN_HEIGHT = "62px", r.GAME_LIST_LINKED_TO_GLOW_DURATION = "2000ms", r.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH = "320px", r.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH = "1280px", r.INTERACTION_IFRAME_MODAL_MODAL_MARGIN = "80px", r.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT = "52px", r.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE = "122px";
            var r, a, _ = a
        },
        422487: function(t, e, n) {
            "use strict";
            var r, a;
            n.r(e), n.d(e, {
                StripeErrorTypes: function() {
                    return _
                }
            });
            let _ = ["api_connection_error", "api_error", "authentication_error", "card_error", "idempotency_error", "invalid_request_error", "rate_limit_error", "validation_error"];
            (a = r || (r = {})).CREATE = "create", a.CANCEL = "cancel", a.RESUBSCRIBE = "resubscribe", a.CHARGE = "charge"
        },
        522308: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var r = n("666038");
            class a extends r.default {
                static createFromServer(t, e) {
                    return new a({
                        id: t.id,
                        subscriptionId: t.subscription_id,
                        premiumGuildSubscription: null != t.premium_guild_subscription ? {
                            id: t.premium_guild_subscription.id,
                            guildId: t.premium_guild_subscription.guild_id
                        } : null,
                        canceled: t.canceled,
                        cooldownEndsAt: t.cooldown_ends_at,
                        subscription: e
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(t) {
                    super(), this.id = t.id, this.subscriptionId = t.subscriptionId, this.premiumGuildSubscription = t.premiumGuildSubscription, this.canceled = t.canceled, this.cooldownEndsAt = t.cooldownEndsAt, this.subscription = t.subscription
                }
            }
            var _ = a
        },
        83900: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                _ = n("753809"),
                i = n("75196"),
                o = (0, a.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: _,
                        ...o
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("path", {
                                className: _,
                                fill: a,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, r.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, _.LinkIcon, void 0, {
                    size: 24
                })
        },
        224400: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getPurchaseToken: function() {
                    return i
                },
                getPurchaseTokenHash: function() {
                    return o
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("222007");
            var r = n("748820"),
                a = n("95410");
            let _ = "purchase_token";

            function i() {
                let t = a.default.get(_);
                if (null != t && t.expires >= Date.now()) return t.purchaseToken;
                let e = (0, r.v4)();
                return a.default.set(_, {
                    purchaseToken: e,
                    expires: Date.now() + 5184e6
                }), e
            }
            async function o() {
                let t = new Uint8Array(i().split("").map(t => t.charCodeAt(0))),
                    e = await window.crypto.subtle.digest({
                        name: "SHA-256"
                    }, t);
                return btoa(String.fromCharCode(...new Uint8Array(e)))
            }
        },
        520713: function(t, e, n) {
            "use strict";
            let r;
            n.r(e), n.d(e, {
                validateExpiry: function() {
                    return I
                },
                getStripe: function() {
                    return u
                },
                parseStripePaymentMethod: function() {
                    return c
                },
                authenticatePaymentIntentForPaymentId: function() {
                    return s
                }
            }), n("222007");
            var a, _, i = n("60979"),
                o = n("872717"),
                l = n("49111");
            (_ = a || (a = {})).REQUIRES_PAYMENT_METHOD = "requires_payment_method", _.REQUIRES_CONFIRMATION = "requires_confirmation", _.REQUIRES_ACTION = "requires_action", _.PROCESSING = "processing", _.CANCELED = "canceled", _.SUCCEEDED = "succeeded";
            let E = t => {
                    let e = e => "You passed an invalid expiration date ".concat(t) + "".concat(null != e ? e : "") + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`",
                        n = t.split(/[.\-/\s]+/g);
                    2 !== n.length && e();
                    let r = n.map(t => {
                            let r = parseInt(t);
                            return isNaN(r) && e("".concat(n, " is not a number.")), r < 1 && e("".concat(r, " is less than one.")), r
                        }),
                        [a, _] = r[0] > 12 ? [r[1], r[0]] : [r[0], r[1]];
                    return a > 12 && e("Month must be a number 1-12, not ".concat(a, ".")), _ < 100 && (_ += 2e3), [a, _]
                },
                I = t => {
                    let e, n;
                    try {
                        [e, n] = E(t)
                    } catch (t) {
                        return !1
                    }
                    let r = new Date(n, e),
                        a = new Date;
                    return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > a
                };

            function u() {
                return null != r ? Promise.resolve(r) : (0, i.loadStripe)(l.PaymentSettings.STRIPE.KEY).then(t => (r = t, t))
            }

            function c(t) {
                var e, n, r, a, _, i, o, l;
                let {
                    billing_details: E
                } = t, I = null !== (e = E.address) && void 0 !== e ? e : {}, u = {
                    name: null !== (n = E.name) && void 0 !== n ? n : "",
                    line1: null !== (r = I.line1) && void 0 !== r ? r : "",
                    line2: null !== (a = I.line2) && void 0 !== a ? a : "",
                    city: null !== (_ = I.city) && void 0 !== _ ? _ : "",
                    state: null !== (i = I.state) && void 0 !== i ? i : "",
                    country: null !== (o = I.country) && void 0 !== o ? o : "",
                    postalCode: null !== (l = I.postal_code) && void 0 !== l ? l : ""
                };
                return {
                    token: t.id,
                    billingAddressInfo: u
                }
            }
            async function s(t) {
                try {
                    let e = await o.default.get({
                            url: l.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(t),
                            oldFormErrors: !0
                        }),
                        {
                            stripe_payment_intent_client_secret: n
                        } = e.body,
                        r = await u();
                    if (null == r) return {
                        error: "unable to load stripe"
                    };
                    let {
                        error: a,
                        paymentIntent: _
                    } = await r.retrievePaymentIntent(n);
                    if (null != a) return {
                        error: a.message
                    };
                    if (null == _) return {
                        error: "payment intent does not exist"
                    };
                    let i = {};
                    switch ("requires_payment_method" === _.status && null != _.last_payment_error && null != _.last_payment_error.payment_method && (i.payment_method = _.last_payment_error.payment_method.id), _.status) {
                        case "requires_payment_method":
                        case "requires_confirmation":
                        case "requires_action":
                            let {
                                error: E
                            } = await r.confirmCardPayment(n, i);
                            if (null != E) return {
                                error: E.message
                            };
                            return {};
                        case "succeeded":
                        case "processing":
                            return {};
                        default:
                            return {
                                error: "Invalid Payment Intent status: ".concat(_.status)
                            }
                    }
                } catch (t) {
                    return {
                        error: t.message
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=79106.d03ea5389ff62e34d963.js.map