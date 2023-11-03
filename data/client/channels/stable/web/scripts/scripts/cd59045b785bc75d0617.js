(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99346"], {
        41092: function(e, t, n) {
            var r, o;
            e = n.nmd(e), r = this, o = function(e, t) {
                "use strict";

                function n(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, r)
                    }
                    return n
                }

                function r(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? n(Object(r), !0).forEach(function(t) {
                            a(e, t, r[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        })
                    }
                    return e
                }

                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function a(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function i(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var n, r, o = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                        if (null != o) {
                            var a = [],
                                i = !0,
                                c = !1;
                            try {
                                for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                            } catch (e) {
                                c = !0, r = e
                            } finally {
                                try {
                                    !i && null != o.return && o.return()
                                } finally {
                                    if (c) throw r
                                }
                            }
                            return a
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return c(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                        }
                    }(e, t) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }
                t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;

                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function u() {}

                function s() {}
                s.resetWarningCache = u;
                var l, f = function() {
                    function e(e, t, n, r, o, a) {
                        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
                            var i = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw i.name = "Invariant Violation", i
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: s,
                        resetWarningCache: u
                    };
                    return n.PropTypes = n, n
                };
                var p = (function(e) {
                        e.exports = f()
                    }(l = {
                        exports: {}
                    }, l.exports), l.exports),
                    d = function(e) {
                        var n = t.useRef(e);
                        return t.useEffect(function() {
                            n.current = e
                        }, [e]), n.current
                    },
                    m = function(e) {
                        return null !== e && "object" === o(e)
                    },
                    y = "[object Object]",
                    h = function e(t, n) {
                        if (!m(t) || !m(n)) return t === n;
                        var r = Array.isArray(t);
                        if (r !== Array.isArray(n)) return !1;
                        var o = Object.prototype.toString.call(t) === y;
                        if (o !== (Object.prototype.toString.call(n) === y)) return !1;
                        if (!o && !r) return t === n;
                        var a = Object.keys(t),
                            i = Object.keys(n);
                        if (a.length !== i.length) return !1;
                        for (var c = {}, u = 0; u < a.length; u += 1) c[a[u]] = !0;
                        for (var s = 0; s < i.length; s += 1) c[i[s]] = !0;
                        var l = Object.keys(c);
                        return l.length === a.length && l.every(function(r) {
                            return e(t[r], n[r])
                        })
                    },
                    v = function(e, t, n) {
                        return m(e) ? Object.keys(e).reduce(function(o, i) {
                            var c = !m(t) || !h(e[i], t[i]);
                            return n.includes(i) ? (c && console.warn("Unsupported prop change: options.".concat(i, " is not a mutable property.")), o) : c ? r(r({}, o || {}), {}, a({}, i, e[i])) : o
                        }, null) : null
                    },
                    g = function(e) {
                        var t;
                        if (null === e || m(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
                        throw Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
                    },
                    b = function(e) {
                        if (m(t = e) && "function" == typeof t.then) return {
                            tag: "async",
                            stripePromise: Promise.resolve(e).then(g)
                        };
                        var t, n = g(e);
                        return null === n ? {
                            tag: "empty"
                        } : {
                            tag: "sync",
                            stripe: n
                        }
                    },
                    E = t.createContext(null);
                E.displayName = "ElementsContext";
                var S = function(e, t) {
                        if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                        return e
                    },
                    C = t.createContext(null);
                C.displayName = "CartElementContext";
                var w = function(e, t) {
                        if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                        return e
                    },
                    j = function(e) {
                        var n = e.stripe,
                            r = e.options,
                            o = e.children,
                            a = t.useMemo(function() {
                                return b(n)
                            }, [n]),
                            c = i(t.useState(null), 2),
                            u = c[0],
                            s = c[1],
                            l = i(t.useState(null), 2),
                            f = l[0],
                            p = l[1],
                            m = i(t.useState(function() {
                                return {
                                    stripe: "sync" === a.tag ? a.stripe : null,
                                    elements: "sync" === a.tag ? a.stripe.elements(r) : null
                                }
                            }), 2),
                            y = m[0],
                            h = m[1];
                        t.useEffect(function() {
                            var e = !0,
                                t = function(e) {
                                    h(function(t) {
                                        return t.stripe ? t : {
                                            stripe: e,
                                            elements: e.elements(r)
                                        }
                                    })
                                };
                            return "async" !== a.tag || y.stripe ? "sync" === a.tag && !y.stripe && t(a.stripe) : a.stripePromise.then(function(n) {
                                    n && e && t(n)
                                }),
                                function() {
                                    e = !1
                                }
                        }, [a, y, r]);
                        var g = d(n);
                        t.useEffect(function() {
                            null !== g && g !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
                        }, [g, n]);
                        var S = d(r);
                        return t.useEffect(function() {
                            if (y.elements) {
                                var e = v(r, S, ["clientSecret", "fonts"]);
                                e && y.elements.update(e)
                            }
                        }, [r, S, y.elements]), t.useEffect(function() {
                            var e = y.stripe;
                            e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
                                name: "react-stripe-js",
                                version: "2.1.2"
                            }), e.registerAppInfo({
                                name: "react-stripe-js",
                                version: "2.1.2",
                                url: "https://stripe.com/docs/stripe-js/react"
                            }))
                        }, [y.stripe]), t.createElement(E.Provider, {
                            value: y
                        }, t.createElement(C.Provider, {
                            value: {
                                cart: u,
                                setCart: s,
                                cartState: f,
                                setCartState: p
                            }
                        }, o))
                    };
                j.propTypes = {
                    stripe: p.any,
                    options: p.object
                };
                var k = function(e) {
                        return S(t.useContext(E), e)
                    },
                    O = function(e) {
                        return w(t.useContext(C), e)
                    },
                    x = function(e) {
                        return (0, e.children)(k("mounts <ElementsConsumer>"))
                    };
                x.propTypes = {
                    children: p.func.isRequired
                };
                var P = function(e, n, r) {
                        var o = !!r,
                            a = t.useRef(r);
                        t.useEffect(function() {
                            a.current = r
                        }, [r]), t.useEffect(function() {
                            if (!o || !e) return function() {};
                            var t = function() {
                                a.current && a.current.apply(a, arguments)
                            };
                            return e.on(n, t),
                                function() {
                                    e.off(n, t)
                                }
                        }, [o, n, e, a])
                    },
                    A = function(e, n) {
                        var r, o = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
                            a = n ? function(e) {
                                k("mounts <".concat(o, ">")), O("mounts <".concat(o, ">"));
                                var n = e.id,
                                    r = e.className;
                                return t.createElement("div", {
                                    id: n,
                                    className: r
                                })
                            } : function(n) {
                                var r, a = n.id,
                                    c = n.className,
                                    u = n.options,
                                    s = void 0 === u ? {} : u,
                                    l = n.onBlur,
                                    f = n.onFocus,
                                    p = n.onReady,
                                    m = n.onChange,
                                    y = n.onEscape,
                                    h = n.onClick,
                                    g = n.onLoadError,
                                    b = n.onLoaderStart,
                                    E = n.onNetworksChange,
                                    S = n.onCheckout,
                                    C = n.onLineItemClick,
                                    w = n.onConfirm,
                                    j = n.onCancel,
                                    x = n.onShippingAddressChange,
                                    A = n.onShippingRateChange,
                                    T = k("mounts <".concat(o, ">")).elements,
                                    _ = i(t.useState(null), 2),
                                    R = _[0],
                                    B = _[1],
                                    L = t.useRef(null),
                                    M = t.useRef(null),
                                    I = O("mounts <".concat(o, ">")),
                                    N = I.setCart,
                                    W = I.setCartState;
                                P(R, "blur", l), P(R, "focus", f), P(R, "escape", y), P(R, "click", h), P(R, "loaderror", g), P(R, "loaderstart", b), P(R, "networkschange", E), P(R, "lineitemclick", C), P(R, "confirm", w), P(R, "cancel", j), P(R, "shippingaddresschange", x), P(R, "shippingratechange", A), "cart" === e ? r = function(e) {
                                    W(e), p && p(e)
                                } : p && (r = "expressCheckout" === e ? p : function() {
                                    p(R)
                                }), P(R, "ready", r), P(R, "change", "cart" === e ? function(e) {
                                    W(e), m && m(e)
                                } : m), P(R, "checkout", "cart" === e ? function(e) {
                                    W(e), S && S(e)
                                } : S), t.useLayoutEffect(function() {
                                    if (null === L.current && T && null !== M.current) {
                                        var t = T.create(e, s);
                                        "cart" === e && N && N(t), L.current = t, B(t), t.mount(M.current)
                                    }
                                }, [T, s, N]);
                                var F = d(s);
                                return t.useEffect(function() {
                                    if (L.current) {
                                        var e = v(s, F, ["paymentRequest"]);
                                        e && L.current.update(e)
                                    }
                                }, [s, F]), t.useLayoutEffect(function() {
                                    return function() {
                                        if (L.current && "function" == typeof L.current.destroy) try {
                                            L.current.destroy(), L.current = null
                                        } catch (e) {}
                                    }
                                }, []), t.createElement("div", {
                                    id: a,
                                    className: c,
                                    ref: M
                                })
                            };
                        return a.propTypes = {
                            id: p.string,
                            className: p.string,
                            onChange: p.func,
                            onBlur: p.func,
                            onFocus: p.func,
                            onReady: p.func,
                            onEscape: p.func,
                            onClick: p.func,
                            onLoadError: p.func,
                            onLoaderStart: p.func,
                            onNetworksChange: p.func,
                            onCheckout: p.func,
                            onLineItemClick: p.func,
                            onConfirm: p.func,
                            onCancel: p.func,
                            onShippingAddressChange: p.func,
                            onShippingRateChange: p.func,
                            options: p.object
                        }, a.displayName = o, a.__elementType = e, a
                    },
                    T = "undefined" == typeof window,
                    _ = A("auBankAccount", T),
                    R = A("card", T),
                    B = A("cardNumber", T),
                    L = A("cardExpiry", T),
                    M = A("cardCvc", T),
                    I = A("fpxBank", T),
                    N = A("iban", T),
                    W = A("idealBank", T),
                    F = A("p24Bank", T),
                    D = A("epsBank", T),
                    q = A("payment", T),
                    U = A("expressCheckout", T),
                    Y = A("paymentRequestButton", T),
                    $ = A("linkAuthentication", T),
                    H = A("address", T),
                    J = A("shippingAddress", T),
                    V = A("cart", T),
                    z = A("paymentMethodMessaging", T),
                    G = A("affirmMessage", T),
                    K = A("afterpayClearpayMessage", T);
                e.AddressElement = H, e.AffirmMessageElement = G, e.AfterpayClearpayMessageElement = K, e.AuBankAccountElement = _, e.CardCvcElement = M, e.CardElement = R, e.CardExpiryElement = L, e.CardNumberElement = B, e.CartElement = V, e.Elements = j, e.ElementsConsumer = x, e.EpsBankElement = D, e.ExpressCheckoutElement = U, e.FpxBankElement = I, e.IbanElement = N, e.IdealBankElement = W, e.LinkAuthenticationElement = $, e.P24BankElement = F, e.PaymentElement = q, e.PaymentMethodMessagingElement = z, e.PaymentRequestButtonElement = Y, e.ShippingAddressElement = J, e.useCartElement = function() {
                    return O("calls useCartElement()").cart
                }, e.useCartElementState = function() {
                    return O("calls useCartElementState()").cartState
                }, e.useElements = function() {
                    return k("calls useElements()").elements
                }, e.useStripe = function() {
                    return k("calls useStripe()").stripe
                }, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, "object" == typeof t && void 0 !== e ? o(t, n("884691")) : "function" == typeof define && define.amd ? define(["exports", "react"], o) : o((r = r || self).ReactStripe = {}, r.React)
        },
        190369: function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, a = "https://js.stripe.com/v3",
                i = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                c = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
                u = function() {
                    for (var e = document.querySelectorAll('script[src^="'.concat(a, '"]')), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (i.test(n.src)) return n
                    }
                    return null
                },
                s = function(e) {
                    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                        n = document.createElement("script");
                    n.src = "".concat(a).concat(t);
                    var r = document.head || document.body;
                    if (!r) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                    return r.appendChild(n), n
                },
                l = function(e, t) {
                    e && e._registerWrapper && e._registerWrapper({
                        name: "stripe-js",
                        version: "2.0.0",
                        startTime: t
                    })
                },
                f = null,
                p = function(e, t, n) {
                    if (null === e) return null;
                    var r = e.apply(void 0, t);
                    return l(r, n), r
                },
                d = function(e) {
                    var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
                    if (null === e || "object" !== r(e)) throw Error(t);
                    if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
                    throw Error(t)
                },
                m = !1,
                y = function() {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    m = !0;
                    var a = Date.now();
                    return (e = o, null !== f ? f : f = new Promise(function(t, n) {
                        if ("undefined" == typeof window || "undefined" == typeof document) {
                            t(null);
                            return
                        }
                        if (window.Stripe && e && console.warn(c), window.Stripe) {
                            t(window.Stripe);
                            return
                        }
                        try {
                            var r = u();
                            r && e ? console.warn(c) : !r && (r = s(e)), r.addEventListener("load", function() {
                                window.Stripe ? t(window.Stripe) : n(Error("Stripe.js not available"))
                            }), r.addEventListener("error", function() {
                                n(Error("Failed to load Stripe.js"))
                            })
                        } catch (e) {
                            n(e);
                            return
                        }
                    })).then(function(e) {
                        return p(e, n, a)
                    })
                };
            y.setLoadParameters = function(e) {
                if (!(m && o && Object.keys(d(e)).reduce(function(t, n) {
                        var r;
                        return t && e[n] === (null === (r = o) || void 0 === r ? void 0 : r[n])
                    }, !0))) {
                    if (m) throw Error("You cannot change load parameters after calling loadStripe");
                    o = d(e)
                }
            }, t.loadStripe = y
        },
        60979: function(e, t, n) {
            e.exports = n("190369")
        },
        483366: function(e, t, n) {
            var r = n("285162"),
                o = n("271388"),
                a = n("16282"),
                i = Math.max,
                c = Math.min;
            e.exports = function(e, t, n) {
                var u, s, l, f, p, d, m = 0,
                    y = !1,
                    h = !1,
                    v = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function g(t) {
                    var n = u,
                        r = s;
                    return u = s = void 0, m = t, f = e.apply(r, n)
                }
                t = a(t) || 0, r(n) && (y = !!n.leading, l = (h = "maxWait" in n) ? i(a(n.maxWait) || 0, t) : l, v = "trailing" in n ? !!n.trailing : v);

                function b(e) {
                    var n = e - d,
                        r = e - m;
                    return void 0 === d || n >= t || n < 0 || h && r >= l
                }

                function E() {
                    var e, n, r, a, i = o();
                    if (b(i)) return S(i);
                    p = setTimeout(E, (n = (e = i) - d, r = e - m, a = t - n, h ? c(a, l - r) : a))
                }

                function S(e) {
                    return (p = void 0, v && u) ? g(e) : (u = s = void 0, f)
                }

                function C() {
                    var e, n = o(),
                        r = b(n);
                    if (u = arguments, s = this, d = n, r) {
                        if (void 0 === p) {
                            ;
                            return m = e = d, p = setTimeout(E, t), y ? g(e) : f
                        }
                        if (h) return clearTimeout(p), p = setTimeout(E, t), g(d)
                    }
                    return void 0 === p && (p = setTimeout(E, t)), f
                }
                return C.cancel = function() {
                    void 0 !== p && clearTimeout(p), m = 0, u = d = s = p = void 0
                }, C.flush = function() {
                    return void 0 === p ? f : S(o())
                }, C
            }
        },
        271388: function(e, t, n) {
            var r = n("690516");
            e.exports = function() {
                return r.Date.now()
            }
        }
    }
]);
//# sourceMappingURL=cd59045b785bc75d0617.js.map