(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73938"], {
        378898: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                applyToGuild: function() {
                    return f
                },
                cancelGuildBoostSlot: function() {
                    return U
                },
                fetchAppliedGuildBoostsForGuild: function() {
                    return c
                },
                fetchGuildBoostSlots: function() {
                    return T
                },
                unapplyFromGuild: function() {
                    return R
                },
                uncancelGuildBoostSlot: function() {
                    return L
                }
            });
            var n = i("356056"),
                o = i("324415");
            i("363505"), i("653041");
            var r = i("454836"),
                s = i("312916"),
                u = i("253842"),
                l = i("879385"),
                a = i("319030"),
                d = i("416573"),
                _ = i("467006");

            function c(e) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = (0, n._)(function(e) {
                    var t;
                    return (0, o._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, r.default.get({
                                    url: _.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return t = i.sent().body.map(function(e) {
                                    return l.default.createFromServer(e)
                                }), s.default.dispatch({
                                    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                                    guildId: e,
                                    appliedBoosts: t
                                }), [2, t]
                        }
                    })
                })).apply(this, arguments)
            }

            function T() {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = (0, n._)(function() {
                    var e;
                    return (0, o._)(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, r.default.get({
                                    url: _.Endpoints.USER_GUILD_BOOST_SLOTS,
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return e = t.sent().body.map(function(e) {
                                    return a.default.createFromServer(e, d.default.getSubscriptionById(e.subscription_id))
                                }), s.default.dispatch({
                                    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
                                    guildBoostSlots: e
                                }), [2, e]
                        }
                    })
                })).apply(this, arguments)
            }

            function f(e, t) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = (0, n._)(function(e, t) {
                    var i, n, a, d;
                    return (0, o._)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                s.default.dispatch({
                                    type: "GUILD_APPLY_BOOST_START"
                                }), o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]), [4, r.default.put({
                                    url: _.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                                    body: {
                                        user_premium_guild_subscription_slot_ids: t
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                return n = Array.isArray((i = o.sent()).body) ? i.body.map(l.default.createFromServer) : [l.default.createFromServer(i.body)], s.default.dispatch({
                                    type: "GUILD_APPLY_BOOST_SUCCESS",
                                    appliedGuildBoost: n
                                }), T(), [2, n];
                            case 3:
                                throw a = o.sent(), d = new u.AppliedGuildBoostError(a), s.default.dispatch({
                                    type: "GUILD_APPLY_BOOST_FAIL",
                                    error: d
                                }), d;
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function R(e, t) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = (0, n._)(function(e, t) {
                    var i, n;
                    return (0, o._)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                s.default.dispatch({
                                    type: "GUILD_UNAPPLY_BOOST_START"
                                }), o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]), [4, r.default.delete({
                                    url: _.Endpoints.APPLIED_GUILD_BOOST(e, t),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                return o.sent(), T(), [3, 4];
                            case 3:
                                throw i = o.sent(), n = new u.AppliedGuildBoostError(i), s.default.dispatch({
                                    type: "GUILD_UNAPPLY_BOOST_FAIL",
                                    error: n
                                }), n;
                            case 4:
                                return s.default.dispatch({
                                    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
                                    boostId: t
                                }), [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function U(e) {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = (0, n._)(function(e) {
                    var t, i;
                    return (0, o._)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, r.default.post({
                                    url: _.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return t = n.sent(), i = a.default.createFromServer(t.body, d.default.getSubscriptionById(t.body.subscription_id)), s.default.dispatch({
                                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                                    guildBoostSlot: i
                                }), [2, i]
                        }
                    })
                })).apply(this, arguments)
            }

            function L(e) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = (0, n._)(function(e) {
                    var t, i;
                    return (0, o._)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, r.default.post({
                                    url: _.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return t = n.sent(), i = a.default.createFromServer(t.body, d.default.getSubscriptionById(t.body.subscription_id)), s.default.dispatch({
                                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                                    guildBoostSlot: i
                                }), [2, i]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        760157: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                clearCardInfo: function() {
                    return s
                },
                clearError: function() {
                    return l
                },
                updateAddressInfo: function() {
                    return u
                },
                updateCardInfo: function() {
                    return r
                },
                updateStripePaymentRequest: function() {
                    return o
                }
            });
            var n = i("312916");

            function o(e) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function u(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
                n.default.wait(function() {
                    return n.default.dispatch({
                        type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                    })
                })
            }
        },
        759478: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return o
                }
            });
            var n = i("312916");

            function o() {
                n.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        218547: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                GiftIcon: function() {
                    return a
                }
            });
            var n = i("21189"),
                o = i("227094"),
                r = i("261047"),
                s = i("735250");
            i("470079");
            var u = i("600186"),
                l = i("262113"),
                a = function(e) {
                    var t = e.width,
                        i = e.height,
                        a = e.color,
                        d = void 0 === a ? u.default.colors.INTERACTIVE_NORMAL : a,
                        _ = e.colorClass,
                        c = void 0 === _ ? "" : _,
                        I = (0, r._)(e, ["width", "height", "color", "colorClass"]);
                    return (0, s.jsxs)("svg", (0, o._)((0, n._)({}, (0, l.default)(I)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === t ? 24 : t,
                        height: void 0 === i ? 24 : i,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0, s.jsx)("path", {
                            fill: "string" == typeof d ? d : d.css,
                            fillRule: "evenodd",
                            d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                            clipRule: "evenodd",
                            className: c
                        }), (0, s.jsx)("path", {
                            fill: "string" == typeof d ? d : d.css,
                            d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                            className: c
                        })]
                    }))
                }
        },
        762510: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ReactionIcon: function() {
                    return a
                }
            });
            var n = i("21189"),
                o = i("227094"),
                r = i("261047"),
                s = i("735250");
            i("470079");
            var u = i("600186"),
                l = i("262113"),
                a = function(e) {
                    var t = e.width,
                        i = e.height,
                        a = e.color,
                        d = void 0 === a ? u.default.colors.INTERACTIVE_NORMAL : a,
                        _ = e.colorClass,
                        c = (0, r._)(e, ["width", "height", "color", "colorClass"]);
                    return (0, s.jsx)("svg", (0, o._)((0, n._)({}, (0, l.default)(c)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === t ? 24 : t,
                        height: void 0 === i ? 24 : i,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: "string" == typeof d ? d : d.css,
                            fillRule: "evenodd",
                            d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z",
                            clipRule: "evenodd",
                            className: void 0 === _ ? "" : _
                        })
                    }))
                }
        },
        922047: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                UploadIcon: function() {
                    return a
                }
            });
            var n = i("21189"),
                o = i("227094"),
                r = i("261047"),
                s = i("735250");
            i("470079");
            var u = i("600186"),
                l = i("262113"),
                a = function(e) {
                    var t = e.width,
                        i = e.height,
                        a = e.color,
                        d = void 0 === a ? u.default.colors.INTERACTIVE_NORMAL : a,
                        _ = e.colorClass,
                        c = (0, r._)(e, ["width", "height", "color", "colorClass"]);
                    return (0, s.jsx)("svg", (0, o._)((0, n._)({}, (0, l.default)(c)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === t ? 24 : t,
                        height: void 0 === i ? 24 : i,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: "string" == typeof d ? d : d.css,
                            d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
                            className: void 0 === _ ? "" : _
                        })
                    }))
                }
        },
        553521: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("154005"),
                o = i("470079");

            function r(e) {
                var t = (0, n._)((0, o.useState)(!1), 2),
                    i = t[0],
                    r = t[1],
                    s = (0, o.useRef)(e.current);
                return (0, o.useEffect)(function() {
                    s.current = e.current
                }, [e]), (0, o.useEffect)(function() {
                    var e = s.current;
                    if (null != e) {
                        var t = function() {
                                return r(!0)
                            },
                            i = function() {
                                return r(!1)
                            };
                        return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i),
                            function() {
                                e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                            }
                    }
                }, [s]), i
            }
        },
        431986: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                StretchedSparkleStar: function() {
                    return I
                },
                default: function() {
                    return T
                }
            });
            var n = i("21189"),
                o = i("227094"),
                r = i("735250");
            i("470079");
            var s = i("803997"),
                u = i.n(s),
                l = i("262113"),
                a = i("299193"),
                d = i("772906"),
                _ = i("30175"),
                c = i("830477");

            function I(e) {
                return (0, r.jsx)("svg", (0, o._)((0, n._)({}, (0, l.default)((0, n._)({}, e))), {
                    width: "25",
                    height: "48",
                    viewBox: "0 0 25 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M22.6014 22.1003C20.4432 20.6855 18.6067 18.8326 17.2112 16.6618C15.8157 14.4911 14.8925 12.0511 14.5014 9.50028L13.2014 0.700277C13.1553 0.497624 13.0404 0.317179 12.8764 0.189581C12.7123 0.0619821 12.5092 -0.00490199 12.3014 0.000279992C12.1055 -0.00125605 11.9158 0.0691675 11.7683 0.198194C11.6209 0.327221 11.5259 0.505874 11.5014 0.700277L10.1014 9.50028C9.74796 12.0629 8.8402 14.5177 7.44131 16.6938C6.04242 18.8698 4.18605 20.7148 2.00143 22.1003L0.901394 22.8003C0.770775 22.8872 0.665162 23.0067 0.594998 23.1471C0.524833 23.2874 0.49259 23.4436 0.501431 23.6003C0.49259 23.7569 0.524833 23.9132 0.594998 24.0535C0.665162 24.1938 0.770775 24.3134 0.901394 24.4003L2.00143 25.1003C4.18605 26.4857 6.04242 28.3307 7.44131 30.5068C8.8402 32.6828 9.74796 35.1376 10.1014 37.7003L11.5014 46.4003C11.5014 46.6125 11.5857 46.8159 11.7357 46.966C11.8858 47.116 12.0892 47.2003 12.3014 47.2003C12.5238 47.2017 12.7388 47.1207 12.9049 46.973C13.0711 46.8252 13.1767 46.6212 13.2014 46.4003L14.5014 37.7003C14.8925 35.1495 15.8157 32.7095 17.2112 30.5387C18.6067 28.368 20.4432 26.5151 22.6014 25.1003L23.8014 24.4003C24.0329 24.1951 24.1761 23.9085 24.2014 23.6003C24.1761 23.292 24.0329 23.0054 23.8014 22.8003L22.6014 22.1003Z",
                        fill: "currentColor"
                    })
                }))
            }

            function T(e) {
                var t = e.className,
                    i = e.forceUseColorForSparkles,
                    n = e.shouldInheritTextColor,
                    o = e.shouldInheritBackgroundColor;
                return (0, r.jsx)(d.default, {
                    className: t,
                    forceUseColor: void 0 !== i && i,
                    children: (0, r.jsx)(a.TextBadge, {
                        disableColor: !0,
                        className: u()(c.tag, {
                            [c.inheritTextColor]: void 0 !== n && n,
                            [c.inheritBackgroundColor]: void 0 !== o && o
                        }),
                        text: _.default.Messages.NEW
                    })
                })
            }
        },
        772906: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("735250");
            i("470079");
            var o = i("803997"),
                r = i.n(o),
                s = i("636858"),
                u = i("895182");

            function l(e) {
                var t = e.className,
                    i = e.children,
                    o = e.forceUseColor,
                    l = e.hideStars;
                return (0, n.jsxs)("span", {
                    className: r()(u.container, t, {
                        [u.containerColored]: void 0 !== o && o
                    }),
                    children: [i, l ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(s.default, {
                            foreground: u.sparkleStarTopRight
                        }), (0, n.jsx)(s.default, {
                            foreground: u.sparkleStarRight
                        }), (0, n.jsx)(s.default, {
                            foreground: u.sparkleStarBottomLeft
                        })]
                    })]
                })
            }
        },
        620871: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return L
                }
            });
            var n = i("356056"),
                o = i("21189"),
                r = i("227094"),
                s = i("261047"),
                u = i("154005"),
                l = i("324415"),
                a = i("735250"),
                d = i("470079"),
                _ = i("803997"),
                c = i.n(_),
                I = i("974328"),
                T = i("777084"),
                E = i("986821"),
                f = i("416912"),
                S = i("965981"),
                R = i("772918"),
                G = i("467006"),
                U = i("30175"),
                M = i("868789"),
                L = function(e) {
                    var t, i = e.analyticsLocation,
                        _ = e.analyticsSourceLocation,
                        L = e.guild,
                        p = e.buttonText,
                        h = e.targetBoostedGuildTier,
                        C = e.onClose,
                        N = void 0 === C ? function() {} : C,
                        P = e.closeLayer,
                        D = void 0 === P ? function() {} : P,
                        O = e.pauseAnimation,
                        A = void 0 !== O && O,
                        m = e.applicationId,
                        v = e.handleSubscribeModalClose,
                        g = e.withHighlight,
                        B = (0, s._)(e, ["analyticsLocation", "analyticsSourceLocation", "guild", "buttonText", "targetBoostedGuildTier", "onClose", "closeLayer", "pauseAnimation", "applicationId", "handleSubscribeModalClose", "withHighlight"]),
                        y = (0, E.default)().analyticsLocations,
                        b = (0, T.useAppContext)() === G.AppContext.POPOUT,
                        w = (0, u._)(d.useState(!1), 2),
                        x = w[0],
                        K = w[1],
                        F = null != h ? Math.max((0, S.getNumberOfAppliedBoostsNeededForTier)(L, h), 1) : 1,
                        j = (0, S.generateBlockGuildSubscriptionPurchasesNode)();
                    var H = (t = (0, n._)(function() {
                        return (0, l._)(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return K(!0), [4, (0, R.addAppliedGuildBoosts)({
                                        analyticsLocations: y,
                                        analyticsLocation: i,
                                        analyticsSourceLocation: _,
                                        guild: L,
                                        numberOfBoostsToAdd: F,
                                        onClose: N,
                                        closeLayer: D,
                                        inPopout: b,
                                        applicationId: m,
                                        handleSubscribeModalClose: v
                                    })];
                                case 1:
                                    return e.sent(), K(!1), [2]
                            }
                        })
                    }), function() {
                        return t.apply(this, arguments)
                    });
                    return null != j ? (0, a.jsx)(I.Tooltip, {
                        text: j,
                        "aria-label": !1,
                        children: function(e) {
                            return (0, a.jsx)(f.default, (0, r._)((0, o._)((0, r._)((0, o._)({}, e), {
                                disabled: !0,
                                size: I.Button.Sizes.SMALL,
                                pauseAnimation: A
                            }), B), {
                                children: null != p ? p : U.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                            }))
                        }
                    }) : (0, a.jsx)(f.default, (0, r._)((0, o._)({
                        size: I.Button.Sizes.SMALL
                    }, B), {
                        className: c()(B.className, {
                            [M.buttonHighlighted]: void 0 !== g && g
                        }),
                        submitting: x,
                        onClick: H,
                        pauseAnimation: A,
                        children: null != p ? p : U.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                    }))
                }
        },
        772918: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                addAppliedGuildBoosts: function() {
                    return U
                }
            });
            var n = i("356056"),
                o = i("21189"),
                r = i("227094"),
                s = i("261047"),
                u = i("324415");
            i("191489"), i("357629"), i("653041"), i("998459"), i("996173"), i("47120"), i("849202");
            var l = i("735250");
            i("470079");
            var a = i("974328"),
                d = i("242677"),
                _ = i("378898"),
                c = i("714558"),
                I = i("871831"),
                T = i("433735"),
                E = i("643847"),
                f = i("328470"),
                S = i("965981"),
                R = i("130063"),
                G = i("467006");

            function U(e) {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = (0, n._)(function(e) {
                    var t, U, M, L, p, h, C, N, P, D, O, A, m, v, g, B, y, b, w, x, K;
                    return (0, u._)(this, function(F) {
                        switch (F.label) {
                            case 0:
                                if (t = e.analyticsLocations, U = e.analyticsLocation, M = e.analyticsSourceLocation, L = e.numberOfBoostsToAdd, p = e.onClose, h = e.closeLayer, C = e.onSubscriptionConfirmation, N = e.guild, P = e.handleSubscribeModalClose, D = e.disablePremiumUpsell, O = e.inPopout, A = e.applicationId, m = O ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT, null == (v = I.default.getCurrentUser())) return [2];
                                if (!v.verified) return (0, a.openModalLazy)((0, n._)(function() {
                                    var e;
                                    return (0, u._)(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, i.el("772918@3611:3666").then(i.bind(i, "159082"))];
                                            case 1:
                                                return e = t.sent().default, [2, function(t) {
                                                    var i = t.onClose,
                                                        n = (0, s._)(t, ["onClose"]);
                                                    return (0, l.jsx)(e, (0, r._)((0, o._)({}, n), {
                                                        onClose: i
                                                    }))
                                                }]
                                        }
                                    })
                                }), {
                                    contextKey: m
                                }), [2];
                                if (g = [], !E.default.isLoadedForPremiumSKUs() && g.push((0, c.fetchPremiumSubscriptionPlans)()), !T.default.hasFetched && (g.push(d.fetchSubscriptions()), g.push((0, _.fetchGuildBoostSlots)())), !(g.length > 0)) return [3, 2];
                                return [4, Promise.allSettled(g)];
                            case 1:
                                F.sent(), F.label = 2;
                            case 2:
                                if (y = (B = (0, S.getAvailableGuildBoostSlots)(T.default.boostSlots)).length, b = function(e) {
                                        null == p || p(), null == P || P(e)
                                    }, w = function() {
                                        null == p || p(), null == h || h(), f.default.track(G.AnalyticEvents.MODAL_DISMISSED, {
                                            type: G.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                            location_section: U.section
                                        })
                                    }, !(y > 0 && (null == L || y >= L))) return [3, 4];
                                return 1 === y ? x = B.slice(0, 1) : null != L && (x = B.slice(0, L)), [4, (0, a.openModalLazy)((0, n._)(function() {
                                    var e;
                                    return (0, u._)(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, i.el("772918@7617:7649").then(i.bind(i, "590160"))];
                                            case 1:
                                                return e = t.sent().default, [2, function(t) {
                                                    var i = t.onClose,
                                                        n = (0, s._)(t, ["onClose"]);
                                                    return (0, l.jsx)(e, (0, r._)((0, o._)({}, n), {
                                                        onClose: function(e) {
                                                            i(), b(e)
                                                        },
                                                        selectedGuild: N,
                                                        locationSection: G.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                                        guildBoostSlots: x
                                                    }))
                                                }]
                                        }
                                    })
                                }), {
                                    onCloseRequest: function() {
                                        null != K && (0, a.closeModal)(K), b(!1)
                                    },
                                    contextKey: m
                                })];
                            case 3:
                                return K = F.sent(), [3, 5];
                            case 4:
                                (0, R.default)({
                                    analyticsLocations: t,
                                    analyticsLocation: U,
                                    analyticsSourceLocation: M,
                                    guildId: N.id,
                                    closeLayer: w,
                                    totalNumberOfSlotsToAssign: null != L ? L : 1,
                                    onCloseModal: b,
                                    disablePremiumUpsell: D,
                                    onSubscriptionConfirmation: C,
                                    inPopout: O,
                                    applicationId: A
                                }), F.label = 5;
                            case 5:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        130063: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            });
            var n = i("356056"),
                o = i("324415");
            i("191489"), i("357629"), i("996173"), i("47120");
            var r = i("735250");
            i("470079");
            var s = i("974328"),
                u = i("992888"),
                l = i("242677"),
                a = i("714558"),
                d = i("416573"),
                _ = i("328470"),
                c = i("488867"),
                I = i("467006"),
                T = i("30175");

            function E(e) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = (0, n._)(function(e) {
                    var t, E, f, S, R, G, U, M, L, p, h, C, N, P, D, O;
                    return (0, o._)(this, function(A) {
                        switch (A.label) {
                            case 0:
                                if (t = e.analyticsLocations, E = e.analyticsLocation, f = e.analyticsSourceLocation, S = e.guildId, R = e.closeLayer, G = e.onCloseModal, M = void 0 === (U = e.totalNumberOfSlotsToAssign) ? 1 : U, L = e.disablePremiumUpsell, p = e.onSubscriptionConfirmation, h = e.inPopout, C = e.applicationId, N = h ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT, null != (P = d.default.getPremiumTypeSubscription()) && P.isPurchasedExternally && null != P.paymentGateway) return null != R && R(), u.default.show({
                                    title: T.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                                        paymentGatewayName: I.PaymentGatewayToFriendlyName[P.paymentGateway]
                                    }),
                                    body: T.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                                        paymentGatewayName: I.PaymentGatewayToFriendlyName[P.paymentGateway],
                                        subscriptionManagementLink: (0, c.getExternalSubscriptionMethodUrl)(P.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                                    })
                                }), [2];
                                return Promise.all([(0, l.fetchPaymentSources)(), (0, a.fetchPremiumSubscriptionPlans)()]), D = function() {
                                    _.default.track(I.AnalyticEvents.MODAL_DISMISSED, {
                                        type: I.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
                                        location: E
                                    })
                                }, [4, (0, s.openModalLazy)((0, n._)(function() {
                                    var e;
                                    return (0, o._)(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return [4, i.el("130063@4611:4646").then(i.bind(i, "31786"))];
                                            case 1:
                                                return e = n.sent().default, [2, function(i) {
                                                    var n = i.transitionState,
                                                        o = i.onClose;
                                                    return (0, r.jsx)(e, {
                                                        transitionState: n,
                                                        onClose: function(e) {
                                                            o(), null == G || G(e)
                                                        },
                                                        analyticsLocations: t,
                                                        analyticsLocation: E,
                                                        analyticsSourceLocation: null != f ? f : E,
                                                        guildId: S,
                                                        totalNumberOfSlotsToAssign: M,
                                                        closeGuildPerksModal: R,
                                                        disablePremiumUpsell: L,
                                                        onSubscriptionConfirmation: p,
                                                        applicationId: C
                                                    })
                                                }]
                                        }
                                    })
                                }), {
                                    onCloseCallback: D,
                                    onCloseRequest: function() {
                                        null != O && (0, s.closeModal)(O), null == G || G(!1)
                                    },
                                    contextKey: N
                                })];
                            case 1:
                                return O = A.sent(), [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        663698: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return U
                }
            });
            var n = i("356056"),
                o = i("21189"),
                r = i("227094"),
                s = i("261047"),
                u = i("324415");
            i("191489"), i("357629");
            var l = i("735250");
            i("470079");
            var a = i("153832"),
                d = i("974328"),
                _ = i("760157"),
                c = i("759478"),
                I = i("306620"),
                T = i("871831"),
                E = i("328470"),
                f = i("845649"),
                S = i("488867"),
                R = i("467006"),
                G = i("171168");

            function U(e) {
                var t = null != e ? e : {},
                    U = t.initialPlanId,
                    M = t.followupSKUInfo,
                    L = t.onClose,
                    p = t.onComplete,
                    h = t.onSubscriptionConfirmation,
                    C = t.analyticsLocations,
                    N = t.analyticsObject,
                    P = t.analyticsLocation,
                    D = t.analyticsSourceLocation,
                    O = t.isGift,
                    A = void 0 !== O && O,
                    m = t.giftMessage,
                    v = t.subscriptionTier,
                    g = t.trialId,
                    B = t.postSuccessGuild,
                    y = t.openInvoiceId,
                    b = t.applicationId,
                    w = t.referralTrialOfferId,
                    x = t.giftRecipient,
                    K = t.returnRef,
                    F = t.subscription,
                    j = !1,
                    H = (0, a.v4)(),
                    V = T.default.getCurrentUser(),
                    k = (0, S.isPremiumExactly)(V, G.PremiumTypes.TIER_2);
                (0, d.openModalLazy)((0, n._)(function() {
                    var e;
                    return (0, u._)(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, i.el("663698@2806:2837").then(i.bind(i, "64181"))];
                            case 1:
                                return e = t.sent().default, [2, function(t) {
                                    var i = t.onClose,
                                        n = (0, s._)(t, ["onClose"]);
                                    return (0, l.jsx)(e, (0, r._)((0, o._)({}, n), {
                                        loadId: H,
                                        subscriptionTier: v,
                                        skuId: v,
                                        isGift: A,
                                        giftMessage: m,
                                        giftRecipient: x,
                                        initialPlanId: U,
                                        followupSKUInfo: M,
                                        onClose: function(e, t) {
                                            i(), null == L || L(e), e && (null == h || h(), !A && null != t && t === G.PremiumSubscriptionSKUs.TIER_2 && !k && f.ComponentDispatch.dispatch(R.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                                        },
                                        onComplete: function() {
                                            j = !0, null == p || p(), !A && (0, I.setCanPlayWowMoment)(!0)
                                        },
                                        onSubscriptionConfirmation: h,
                                        analyticsLocations: C,
                                        analyticsObject: N,
                                        analyticsLocation: P,
                                        analyticsSourceLocation: D,
                                        trialId: g,
                                        postSuccessGuild: B,
                                        planGroup: G.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                                        openInvoiceId: y,
                                        applicationId: b,
                                        referralTrialOfferId: w,
                                        returnRef: K,
                                        subscription: F
                                    }))
                                }]
                        }
                    })
                }), {
                    modalKey: "payment-modal",
                    onCloseCallback: function() {
                        !j && E.default.track(R.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: H,
                            payment_type: R.PurchaseTypeToAnalyticsPaymentType[R.PurchaseTypes.SUBSCRIPTION],
                            location: null != P ? P : N,
                            source: D,
                            subscription_type: R.SubscriptionTypes.PREMIUM,
                            is_gift: A,
                            eligible_for_trial: null != g,
                            application_id: b,
                            location_stack: C
                        }), (0, _.clearError)(), (0, c.clearPurchaseTokenAuthState)(), null == L || L(j), j && (null == h || h())
                    },
                    onCloseRequest: R.NOOP
                })
            }
        },
        306620: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                setCanPlayWowMoment: function() {
                    return o
                }
            });
            var n = i("312916"),
                o = function(e) {
                    n.default.dispatch({
                        type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                }
        },
        879385: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("87627"),
                o = i("29713"),
                r = i("778455"),
                s = function(e) {
                    (0, o._)(i, e);
                    var t = (0, r._)(i);

                    function i(e) {
                        var o;
                        return (0, n._)(this, i), (o = t.call(this)).id = e.id, o.guildId = e.guildId, o.userId = e.userId, o.user = e.user, o.ended = e.ended, o.endsAt = null != e.endsAt ? e.endsAt : null, o
                    }
                    return i.createFromServer = function(e) {
                        return new i({
                            id: e.id,
                            guildId: e.guild_id,
                            userId: null != e.user ? e.user.id : e.user_id,
                            user: e.user,
                            ended: e.ended,
                            endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null
                        })
                    }, i
                }(i("885714").default)
        },
        433735: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return S
                }
            });
            var n = i("87627"),
                o = i("200344"),
                r = i("29713"),
                s = i("21189"),
                u = i("227094"),
                l = i("778455");
            i("357629"), i("69485"), i("633702"), i("266796"), i("996173"), i("47120");
            var a = i("661223"),
                d = i("312916"),
                _ = i("416573"),
                c = !1,
                I = {};

            function T(e) {
                var t = e.guildBoostSlot;
                I = (0, u._)((0, s._)({}, I), {
                    [t.id]: t
                })
            }

            function E() {
                var e = {},
                    t = !0,
                    i = !1,
                    n = void 0;
                try {
                    for (var o, r = Object.values(I)[Symbol.iterator](); !(t = (o = r.next()).done); t = !0) {
                        var s = o.value;
                        e[s.id] = s, s.subscription = _.default.getSubscriptionById(s.subscriptionId)
                    }
                } catch (e) {
                    i = !0, n = e
                } finally {
                    try {
                        !t && null != r.return && r.return()
                    } finally {
                        if (i) throw n
                    }
                }
                I = e
            }
            var f = function(e) {
                (0, r._)(i, e);
                var t = (0, l._)(i);

                function i() {
                    return (0, n._)(this, i), t.apply(this, arguments)
                }
                var s = i.prototype;
                return s.initialize = function() {
                    this.syncWith([_.default], E)
                }, s.getGuildBoostSlot = function(e) {
                    return I[e]
                }, (0, o._)(i, [{
                    key: "hasFetched",
                    get: function() {
                        return c
                    }
                }, {
                    key: "boostSlots",
                    get: function() {
                        return I
                    }
                }]), i
            }(a.default.Store);
            f.displayName = "GuildBoostSlotStore";
            var S = new f(d.default, {
                GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
                    var t = e.guildBoostSlots;
                    I = {}, t.forEach(function(e) {
                        I[e.id] = e
                    }), c = !0
                },
                GUILD_BOOST_SLOT_UPDATE_SUCCESS: T,
                GUILD_BOOST_SLOT_CREATE: T,
                GUILD_BOOST_SLOT_UPDATE: T,
                LOGOUT: function() {
                    I = {}, c = !1
                }
            })
        },
        416912: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                Shine: function() {
                    return L
                },
                default: function() {
                    return h
                }
            });
            var n, o, r = i("87627"),
                s = i("29713"),
                u = i("21189"),
                l = i("227094"),
                a = i("261047"),
                d = i("778455"),
                _ = i("735250"),
                c = i("470079"),
                I = i("803997"),
                T = i.n(I),
                E = i("414112"),
                f = i("974328"),
                S = i("553521"),
                R = i("164323"),
                G = i("699179");
            (n = o || (o = {})).DEFAULT = "default", n.SMALL = "small";
            var U = {
                    default: G.shineDefault,
                    small: G.shineSmall
                },
                M = {
                    default: G.shineInnerDefault,
                    small: G.shineInnerSmall
                },
                L = function(e) {
                    (0, s._)(i, e);
                    var t = (0, d._)(i);

                    function i() {
                        return (0, r._)(this, i), t.apply(this, arguments)
                    }
                    return i.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            i = e.shineSize,
                            n = e.shinePaused,
                            o = (0, a._)(e, ["className", "shineSize", "shinePaused"]);
                        return (0, _.jsx)(E.default.div, (0, l._)((0, u._)({}, o), {
                            className: T()(G.shineContainer, t, {
                                [G.shinePaused]: n
                            }),
                            children: (0, _.jsx)(R.default, {
                                align: R.default.Align.CENTER,
                                justify: R.default.Justify.CENTER,
                                className: U[i],
                                children: (0, _.jsx)("div", {
                                    className: M[i]
                                })
                            })
                        }))
                    }, i
                }(c.PureComponent);
            L.defaultProps = {
                shineSize: "default"
            };
            var p = function(e) {
                var t = e.children,
                    i = e.className,
                    n = e.disabled,
                    o = e.submitting,
                    r = e.pauseAnimation,
                    s = e.shineSize,
                    d = e.shinePaused,
                    I = e.buttonShineClassName,
                    E = e.onlyShineOnHover,
                    R = (0, a._)(e, ["children", "className", "disabled", "submitting", "pauseAnimation", "shineSize", "shinePaused", "buttonShineClassName", "onlyShineOnHover"]),
                    U = c.createRef(),
                    M = (0, S.default)(U),
                    p = !n && !o && !0 !== r && (!E || M);
                return (0, _.jsxs)(f.Button, (0, l._)((0, u._)({
                    buttonRef: U
                }, R), {
                    className: T()(G.shinyButton, i),
                    disabled: n,
                    submitting: o,
                    children: [t, p ? (0, _.jsx)(L, {
                        shinePaused: d,
                        className: T()(G.buttonShine, E ? G.onlyShineOnHover : void 0, I),
                        shineSize: void 0 === s ? "default" : s
                    }) : null]
                }))
            };
            p.ShineSizes = o;
            var h = p
        },
        815607: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("21189"),
                o = i("227094"),
                r = i("261047"),
                s = i("735250");
            i("470079");
            var u = i("336328"),
                l = i("762510"),
                a = i("262113"),
                d = (0, u.replaceIcon)(function(e) {
                    var t = e.width,
                        i = e.height,
                        u = e.color,
                        l = e.foreground,
                        d = (0, r._)(e, ["width", "height", "color", "foreground"]);
                    return (0, s.jsx)("svg", (0, o._)((0, n._)({}, (0, a.default)(d)), {
                        width: void 0 === t ? 24 : t,
                        height: void 0 === i ? 24 : i,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: void 0 === u ? "currentColor" : u,
                            className: l,
                            d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8 6C9.104 6 10 6.896 10 8C10 9.105 9.104 10 8 10C6.896 10 6 9.105 6 8C6 6.896 6.896 6 8 6ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14ZM16 10C14.896 10 14 9.105 14 8C14 6.896 14.896 6 16 6C17.104 6 18 6.896 18 8C18 9.105 17.104 10 16 10Z"
                        })
                    }))
                }, l.ReactionIcon, void 0, {
                    size: 24
                })
        },
        985053: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("21189"),
                o = i("227094"),
                r = i("261047"),
                s = i("735250");
            i("470079");
            var u = i("336328"),
                l = i("218547"),
                a = i("262113"),
                d = (0, u.replaceIcon)(function(e) {
                    var t = e.width,
                        i = e.height,
                        u = e.color,
                        l = e.foreground,
                        d = (0, r._)(e, ["width", "height", "color", "foreground"]);
                    return (0, s.jsx)("svg", (0, o._)((0, n._)({
                        width: void 0 === t ? 24 : t,
                        height: void 0 === i ? 24 : i
                    }, (0, a.default)(d)), {
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: void 0 === u ? "currentColor" : u,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    }))
                }, l.GiftIcon, void 0, {
                    size: 24
                })
        },
        7304: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("21189"),
                o = i("227094"),
                r = i("261047"),
                s = i("735250");
            i("470079");
            var u = i("262113");

            function l(e) {
                var t = e.width,
                    i = e.height,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    d = e.foreground,
                    _ = (0, r._)(e, ["width", "height", "color", "foreground"]);
                return (0, s.jsxs)("svg", (0, o._)((0, n._)({}, (0, u.default)(_)), {
                    width: void 0 === t ? 24 : t,
                    height: void 0 === i ? 24 : i,
                    viewBox: "0 0 8 12",
                    children: [(0, s.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: a,
                        className: d
                    }), (0, s.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: a,
                        className: d
                    })]
                }))
            }
        },
        636858: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("21189"),
                o = i("227094"),
                r = i("261047");
            i("814951");
            var s = i("735250");
            i("470079");
            var u = i("262113");

            function l(e) {
                var t = e.width,
                    i = void 0 === t ? 14 : t,
                    l = e.height,
                    a = void 0 === l ? 13 : l,
                    d = e.color,
                    _ = e.foreground,
                    c = (0, r._)(e, ["width", "height", "color", "foreground"]);
                return (0, s.jsx)("svg", (0, o._)((0, n._)({}, (0, u.default)((0, n._)({}, c))), {
                    width: i,
                    height: a,
                    viewBox: "0 0 ".concat(i, " ").concat(a),
                    className: _,
                    fill: void 0 === d ? "currentColor" : d,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
                        fill: "currentColor"
                    })
                }))
            }
        },
        965981: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PerkIcons: function() {
                    return n
                },
                appliedGuildBoostsRequiredForPerks: function() {
                    return w
                },
                boostedGuildTierToAnalyticsObjectType: function() {
                    return D
                },
                generateBlockGuildSubscriptionPurchasesNode: function() {
                    return y
                },
                getAppliedGuildBoostMonths: function() {
                    return m
                },
                getAppliedGuildBoostsRequired: function() {
                    return x
                },
                getAvailableGuildBoostSlots: function() {
                    return B
                },
                getAvailableSoundboardSoundCount: function() {
                    return H
                },
                getAvailableStickerSlotCount: function() {
                    return j
                },
                getGracePeriodEndingDate: function() {
                    return F
                },
                getGuildTierFromAppliedBoostCount: function() {
                    return O
                },
                getIncrementalSoundboardSoundCountForTier: function() {
                    return p
                },
                getIncrementalStickerCountForTier: function() {
                    return M
                },
                getNextGuildTierFromAppliedBoostCount: function() {
                    return A
                },
                getNextTier: function() {
                    return G
                },
                getNumberOfAppliedBoostsNeededForTier: function() {
                    return V
                },
                getShortenedTierName: function() {
                    return N
                },
                getTierName: function() {
                    return C
                },
                getTiers: function() {
                    return h
                },
                getTotalSoundboardSoundCountForTier: function() {
                    return L
                },
                getTotalStickerCountForTier: function() {
                    return U
                },
                isGuildBoostSlotCanceled: function() {
                    return k
                },
                isGuildBoostedAtLeast: function() {
                    return v
                },
                isInGracePeriod: function() {
                    return b
                },
                isTierUnlocked: function() {
                    return g
                },
                minimumRequiredTierForGuildFeature: function() {
                    return P
                }
            }), i("357629"), i("462848"), i("411104"), i("568603"), i("128242"), i("633702"), i("266796"), i("996173"), i("47120"), i("69485"), i("724458"), i("230036"), i("849202");
            var n, o, r = i("392711"),
                s = i.n(r),
                u = i("913527"),
                l = i.n(u),
                a = i("433735"),
                d = i("416573"),
                _ = i("158619"),
                c = i("370275"),
                I = i("312630"),
                T = i("488867"),
                E = i("467006"),
                f = i("171168"),
                S = i("30175");
            Object.freeze({
                1: 1,
                2: 2,
                3: 3,
                4: 6,
                5: 9,
                6: 12,
                7: 15,
                8: 18,
                9: 24
            }), (o = n || (n = {}))[o.EMOJI = 1] = "EMOJI", o[o.AUDIO = 2] = "AUDIO", o[o.ANIMATED = 3] = "ANIMATED", o[o.CUSTOMIZATION = 4] = "CUSTOMIZATION", o[o.UPLOAD = 5] = "UPLOAD", o[o.VANITY = 6] = "VANITY", o[o.STREAM = 7] = "STREAM", o[o.STICKER = 8] = "STICKER", o[o.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", o[o.STAGE_VIDEO = 12] = "STAGE_VIDEO", o[o.SOUNDBOARD = 13] = "SOUNDBOARD";
            var R = [E.BoostedGuildTiers.NONE, E.BoostedGuildTiers.TIER_1, E.BoostedGuildTiers.TIER_2, E.BoostedGuildTiers.TIER_3],
                G = function(e, t) {
                    var i;
                    return e === E.BoostedGuildTiers.NONE ? E.BoostedGuildTiers.TIER_1 : null === (i = K(t).find(function(t) {
                        return t.tier === e
                    })) || void 0 === i ? void 0 : i.nextTier
                },
                U = function(e) {
                    return f.TotalStickerCountsByTier[e]
                },
                M = function(e) {
                    return f.IncrementalStickerCountsByTier[e]
                },
                L = function(e) {
                    return f.TotalSoundboardSoundCountsByTier[e]
                },
                p = function(e) {
                    if (e === E.BoostedGuildTiers.NONE) return f.TotalSoundboardSoundCountsByTier[e];
                    var t = R[R.indexOf(e) - 1];
                    return f.TotalSoundboardSoundCountsByTier[e] - f.TotalSoundboardSoundCountsByTier[t]
                },
                h = function(e) {
                    return [{
                        tier: E.BoostedGuildTiers.TIER_1,
                        title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
                        perks: [{
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                                adding: f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.emoji - f.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.emoji,
                                total: f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.emoji
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                            icon: 1
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                                adding: M(E.BoostedGuildTiers.TIER_1),
                                total: U(E.BoostedGuildTiers.TIER_1)
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                            icon: 8
                        }, {
                            title: S.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                                soundCount: p(E.BoostedGuildTiers.TIER_1),
                                totalSoundCount: L(E.BoostedGuildTiers.TIER_1)
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                            icon: 13
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                                bitrate: f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                            icon: 2
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                            icon: 3
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                            icon: 4
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                            icon: 7
                        }].filter(c.isNotNullish)
                    }, {
                        tier: E.BoostedGuildTiers.TIER_2,
                        title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
                        perks: [{
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                                adding: f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.emoji - f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.emoji,
                                total: f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.emoji
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                            icon: 1
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                                adding: M(E.BoostedGuildTiers.TIER_2),
                                total: U(E.BoostedGuildTiers.TIER_2)
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                            icon: 8
                        }, {
                            title: S.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                                soundCount: p(E.BoostedGuildTiers.TIER_2),
                                totalSoundCount: L(E.BoostedGuildTiers.TIER_2)
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                            icon: 13
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                                bitrate: f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                            icon: 2
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                            icon: 4
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                                fileSize: (0, _.formatSize)(f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.fileSize / 1024, {
                                    useKibibytes: !0
                                })
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                            icon: 5
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                            icon: 7
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                            icon: 11
                        }, e ? {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                            }),
                            icon: 12
                        } : null].filter(c.isNotNullish)
                    }, {
                        tier: E.BoostedGuildTiers.TIER_3,
                        title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
                        perks: [{
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                                adding: f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.emoji - f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.emoji,
                                total: f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.emoji
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                            icon: 1
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                                adding: M(E.BoostedGuildTiers.TIER_3),
                                total: U(E.BoostedGuildTiers.TIER_3)
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                            icon: 8
                        }, {
                            title: S.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                                soundCount: p(E.BoostedGuildTiers.TIER_3),
                                totalSoundCount: L(E.BoostedGuildTiers.TIER_3)
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                            icon: 13
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                                bitrate: f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                            icon: 2
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
                                helpdeskArticle: I.default.getArticleURL(E.HelpdeskArticles.GUILD_VANITY_URL)
                            }),
                            icon: 6
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                                fileSize: (0, _.formatSize)(f.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.fileSize / 1024, {
                                    useKibibytes: !0
                                })
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                            icon: 5
                        }, {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                            icon: 3
                        }, e ? {
                            title: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                            }),
                            description: S.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                            }),
                            icon: 12
                        } : null].filter(c.isNotNullish)
                    }]
                };

            function C(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = t.useLevels;
                switch (e) {
                    case E.BoostedGuildTiers.NONE:
                        return void 0 === i || i ? S.default.Messages.PREMIUM_GUILD_TIER_0 : S.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
                    case E.BoostedGuildTiers.TIER_1:
                        return S.default.Messages.PREMIUM_GUILD_TIER_1;
                    case E.BoostedGuildTiers.TIER_2:
                        return S.default.Messages.PREMIUM_GUILD_TIER_2;
                    case E.BoostedGuildTiers.TIER_3:
                        return S.default.Messages.PREMIUM_GUILD_TIER_3;
                    default:
                        throw Error("Not a valid tier type")
                }
            }

            function N(e) {
                switch (e) {
                    case E.BoostedGuildTiers.NONE:
                        return S.default.Messages.PREMIUM_GUILD_TIER_0;
                    case E.BoostedGuildTiers.TIER_1:
                        return S.default.Messages.PREMIUM_GUILD_TIER_1_SHORT;
                    case E.BoostedGuildTiers.TIER_2:
                        return S.default.Messages.PREMIUM_GUILD_TIER_2_SHORT;
                    case E.BoostedGuildTiers.TIER_3:
                        return S.default.Messages.PREMIUM_GUILD_TIER_3_SHORT;
                    default:
                        throw Error("Not a valid tier type")
                }
            }
            var P = s().memoize(function(e) {
                    return (0, f.BoostedGuildFeatures)[E.BoostedGuildTiers.TIER_1].features.includes(e) ? E.BoostedGuildTiers.TIER_1 : (0, f.BoostedGuildFeatures)[E.BoostedGuildTiers.TIER_2].features.includes(e) ? E.BoostedGuildTiers.TIER_2 : (0, f.BoostedGuildFeatures)[E.BoostedGuildTiers.TIER_3].features.includes(e) ? E.BoostedGuildTiers.TIER_3 : null
                }),
                D = function(e) {
                    if (e === E.BoostedGuildTiers.NONE) return E.AnalyticsObjectTypes.NONE;
                    if (e === E.BoostedGuildTiers.TIER_1) return E.AnalyticsObjectTypes.TIER_1;
                    if (e === E.BoostedGuildTiers.TIER_2) return E.AnalyticsObjectTypes.TIER_2;
                    else if (e === E.BoostedGuildTiers.TIER_3) return E.AnalyticsObjectTypes.TIER_3;
                    return null
                };

            function O(e, t) {
                var i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var r, s = K(t)[Symbol.iterator](); !(i = (r = s.next()).done); i = !0) {
                        var u = r.value;
                        if (e >= u.amount) return u.tier
                    }
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        !i && null != s.return && s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return E.BoostedGuildTiers.NONE
            }

            function A(e, t) {
                var i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var r, s = K(t)[Symbol.iterator](); !(i = (r = s.next()).done); i = !0) {
                        var u = r.value;
                        if (e >= u.amount) return u.nextTier
                    }
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        !i && null != s.return && s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return E.BoostedGuildTiers.TIER_1
            }

            function m(e) {
                var t;
                return null !== (t = l()().diff(l()(e), "months")) && void 0 !== t ? t : 1
            }

            function v(e, t) {
                return null == t || null != e && e >= t
            }

            function g(e, t) {
                return v(e.premiumTier, t)
            }

            function B(e) {
                return s().values(e).filter(function(e) {
                    return e.isAvailable()
                })
            }

            function y() {
                var e = d.default.getPremiumTypeSubscription(),
                    t = Object.values(a.default.boostSlots).reduce(function(e, t) {
                        return k(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e
                    }, {
                        numAvailableGuildBoostSlots: 0,
                        numCanceledGuildBoostSlots: 0
                    }),
                    i = t.numAvailableGuildBoostSlots,
                    n = t.numCanceledGuildBoostSlots;
                if (null == e || i > 0) return null;
                if (e.status === E.SubscriptionStatusTypes.PAST_DUE) return S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
                if (e.status === E.SubscriptionStatusTypes.ACCOUNT_HOLD) return S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
                if (n > 0) return S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
                if (null == e.renewalMutations) return null;
                var o = T.getNumPremiumGuildSubscriptions(e.renewalMutations.additionalPlans);
                return T.getNumPremiumGuildSubscriptions(e.additionalPlans) > o ? S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
            }

            function b(e, t) {
                return w(e, t) > 0
            }

            function w(e, t) {
                var i = O(e.length, t),
                    n = x(t)[i],
                    o = e.filter(function(e) {
                        return null != e.endsAt
                    });
                return n - (e.length - o.length)
            }

            function x(e) {
                return E.AppliedGuildBoostsRequiredForBoostedGuildTier
            }

            function K(e) {
                var t = x(e);
                return [{
                    tier: E.BoostedGuildTiers.TIER_3,
                    amount: t[E.BoostedGuildTiers.TIER_3],
                    nextTier: null
                }, {
                    tier: E.BoostedGuildTiers.TIER_2,
                    amount: t[E.BoostedGuildTiers.TIER_2],
                    nextTier: E.BoostedGuildTiers.TIER_3
                }, {
                    tier: E.BoostedGuildTiers.TIER_1,
                    amount: t[E.BoostedGuildTiers.TIER_1],
                    nextTier: E.BoostedGuildTiers.TIER_2
                }]
            }

            function F(e, t) {
                var i = w(e, t);
                if (i > 0) {
                    var n = e.sort(function(e, t) {
                        return null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1
                    }).filter(function(e) {
                        return null != e.endsAt
                    });
                    return n[n.length - i].endsAt
                }
                return null
            }

            function j(e, t) {
                var i = M(t),
                    n = R.indexOf(t);
                if (-1 === n) return 0;
                var o = R[n - 1],
                    r = null != o ? U(o) : 0,
                    s = U(t);
                return Math.max(0, i - e.slice(r, s).length)
            }

            function H(e, t) {
                return -1 === R.indexOf(t) ? 0 : Math.max(0, L(t) - e.length)
            }

            function V(e, t) {
                var i = e.premiumSubscriberCount;
                return Math.max(0, x(e.id)[t] - i)
            }

            function k(e) {
                var t;
                return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === E.SubscriptionStatusTypes.CANCELED || e.canceled
            }
        }
    }
]);
//# sourceMappingURL=73938.8ba769f84fb72952e8d9.js.map