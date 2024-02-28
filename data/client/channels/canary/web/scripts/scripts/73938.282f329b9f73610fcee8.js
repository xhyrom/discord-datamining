(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73938"], {
        378898: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                applyToGuild: function() {
                    return I
                },
                cancelGuildBoostSlot: function() {
                    return E
                },
                fetchAppliedGuildBoostsForGuild: function() {
                    return _
                },
                fetchGuildBoostSlots: function() {
                    return d
                },
                unapplyFromGuild: function() {
                    return T
                },
                uncancelGuildBoostSlot: function() {
                    return c
                }
            });
            var s = i("454836"),
                n = i("312916"),
                r = i("253842"),
                o = i("879385"),
                l = i("319030"),
                u = i("416573"),
                a = i("467006");
            async function _(e) {
                let t = (await s.default.get({
                    url: a.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                    oldFormErrors: !0
                })).body.map(e => o.default.createFromServer(e));
                return n.default.dispatch({
                    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                    guildId: e,
                    appliedBoosts: t
                }), t
            }
            async function d() {
                let e = (await s.default.get({
                    url: a.Endpoints.USER_GUILD_BOOST_SLOTS,
                    oldFormErrors: !0
                })).body.map(e => l.default.createFromServer(e, u.default.getSubscriptionById(e.subscription_id)));
                return n.default.dispatch({
                    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
                    guildBoostSlots: e
                }), e
            }
            async function I(e, t) {
                n.default.dispatch({
                    type: "GUILD_APPLY_BOOST_START"
                });
                try {
                    let i = await s.default.put({
                            url: a.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                            body: {
                                user_premium_guild_subscription_slot_ids: t
                            },
                            oldFormErrors: !0
                        }),
                        r = Array.isArray(i.body) ? i.body.map(o.default.createFromServer) : [o.default.createFromServer(i.body)];
                    return n.default.dispatch({
                        type: "GUILD_APPLY_BOOST_SUCCESS",
                        appliedGuildBoost: r
                    }), d(), r
                } catch (t) {
                    let e = new r.AppliedGuildBoostError(t);
                    throw n.default.dispatch({
                        type: "GUILD_APPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
            }
            async function T(e, t) {
                n.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_START"
                });
                try {
                    await s.default.delete({
                        url: a.Endpoints.APPLIED_GUILD_BOOST(e, t),
                        oldFormErrors: !0
                    }), d()
                } catch (t) {
                    let e = new r.AppliedGuildBoostError(t);
                    throw n.default.dispatch({
                        type: "GUILD_UNAPPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
                n.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
                    boostId: t
                })
            }
            async function E(e) {
                let t = await s.default.post({
                        url: a.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
                        oldFormErrors: !0
                    }),
                    i = l.default.createFromServer(t.body, u.default.getSubscriptionById(t.body.subscription_id));
                return n.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: i
                }), i
            }
            async function c(e) {
                let t = await s.default.post({
                        url: a.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
                        oldFormErrors: !0
                    }),
                    i = l.default.createFromServer(t.body, u.default.getSubscriptionById(t.body.subscription_id));
                return n.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: i
                }), i
            }
        },
        760157: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                clearCardInfo: function() {
                    return o
                },
                clearError: function() {
                    return u
                },
                updateAddressInfo: function() {
                    return l
                },
                updateCardInfo: function() {
                    return r
                },
                updateStripePaymentRequest: function() {
                    return n
                }
            });
            var s = i("312916");

            function n(e) {
                s.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                s.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                s.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function l(e, t) {
                s.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function u() {
                s.default.wait(() => s.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        759478: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return n
                }
            });
            var s = i("312916");

            function n() {
                s.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        218547: function(e, t, i) {
            "use strict";
            i.r(t);
            var s = i("32394");
            i.es(s, t)
        },
        762510: function(e, t, i) {
            "use strict";
            i.r(t);
            var s = i("545224");
            i.es(s, t)
        },
        922047: function(e, t, i) {
            "use strict";
            i.r(t);
            var s = i("718208");
            i.es(s, t)
        },
        553521: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var s = i("470079");

            function n(e) {
                let [t, i] = (0, s.useState)(!1), n = (0, s.useRef)(e.current);
                return (0, s.useEffect)(() => {
                    n.current = e.current
                }, [e]), (0, s.useEffect)(() => {
                    let e = n.current;
                    if (null == e) return;
                    let t = () => i(!0),
                        s = () => i(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", s), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", s)
                    }
                }, [n]), t
            }
        },
        431986: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                StretchedSparkleStar: function() {
                    return d
                },
                default: function() {
                    return I
                }
            });
            var s = i("735250");
            i("470079");
            var n = i("803997"),
                r = i.n(n),
                o = i("262113"),
                l = i("299193"),
                u = i("772906"),
                a = i("30175"),
                _ = i("994264");

            function d(e) {
                return (0, s.jsx)("svg", {
                    ...(0, o.default)({
                        ...e
                    }),
                    width: "25",
                    height: "48",
                    viewBox: "0 0 25 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        d: "M22.6014 22.1003C20.4432 20.6855 18.6067 18.8326 17.2112 16.6618C15.8157 14.4911 14.8925 12.0511 14.5014 9.50028L13.2014 0.700277C13.1553 0.497624 13.0404 0.317179 12.8764 0.189581C12.7123 0.0619821 12.5092 -0.00490199 12.3014 0.000279992C12.1055 -0.00125605 11.9158 0.0691675 11.7683 0.198194C11.6209 0.327221 11.5259 0.505874 11.5014 0.700277L10.1014 9.50028C9.74796 12.0629 8.8402 14.5177 7.44131 16.6938C6.04242 18.8698 4.18605 20.7148 2.00143 22.1003L0.901394 22.8003C0.770775 22.8872 0.665162 23.0067 0.594998 23.1471C0.524833 23.2874 0.49259 23.4436 0.501431 23.6003C0.49259 23.7569 0.524833 23.9132 0.594998 24.0535C0.665162 24.1938 0.770775 24.3134 0.901394 24.4003L2.00143 25.1003C4.18605 26.4857 6.04242 28.3307 7.44131 30.5068C8.8402 32.6828 9.74796 35.1376 10.1014 37.7003L11.5014 46.4003C11.5014 46.6125 11.5857 46.8159 11.7357 46.966C11.8858 47.116 12.0892 47.2003 12.3014 47.2003C12.5238 47.2017 12.7388 47.1207 12.9049 46.973C13.0711 46.8252 13.1767 46.6212 13.2014 46.4003L14.5014 37.7003C14.8925 35.1495 15.8157 32.7095 17.2112 30.5387C18.6067 28.368 20.4432 26.5151 22.6014 25.1003L23.8014 24.4003C24.0329 24.1951 24.1761 23.9085 24.2014 23.6003C24.1761 23.292 24.0329 23.0054 23.8014 22.8003L22.6014 22.1003Z",
                        fill: "currentColor"
                    })
                })
            }

            function I(e) {
                let {
                    className: t,
                    forceUseColorForSparkles: i = !1,
                    shouldInheritTextColor: n = !1,
                    shouldInheritBackgroundColor: o = !1
                } = e;
                return (0, s.jsx)(u.default, {
                    className: t,
                    forceUseColor: i,
                    children: (0, s.jsx)(l.TextBadge, {
                        disableColor: !0,
                        className: r()(_.tag, {
                            [_.inheritTextColor]: n,
                            [_.inheritBackgroundColor]: o
                        }),
                        text: a.default.Messages.NEW
                    })
                })
            }
        },
        772906: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var s = i("735250");
            i("470079");
            var n = i("803997"),
                r = i.n(n),
                o = i("636858"),
                l = i("43675");

            function u(e) {
                let {
                    className: t,
                    children: i,
                    forceUseColor: n = !1,
                    hideStars: u
                } = e;
                return (0, s.jsxs)("span", {
                    className: r()(l.container, t, {
                        [l.containerColored]: n
                    }),
                    children: [i, u ? null : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(o.default, {
                            foreground: l.sparkleStarTopRight
                        }), (0, s.jsx)(o.default, {
                            foreground: l.sparkleStarRight
                        }), (0, s.jsx)(o.default, {
                            foreground: l.sparkleStarBottomLeft
                        })]
                    })]
                })
            }
        },
        620871: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return S
                }
            });
            var s = i("735250"),
                n = i("470079"),
                r = i("803997"),
                o = i.n(r),
                l = i("974328"),
                u = i("777084"),
                a = i("986821"),
                _ = i("416912"),
                d = i("965981"),
                I = i("772918"),
                T = i("467006"),
                E = i("30175"),
                c = i("156875"),
                S = e => {
                    let {
                        analyticsLocation: t,
                        analyticsSourceLocation: i,
                        guild: r,
                        buttonText: S,
                        targetBoostedGuildTier: f,
                        onClose: R = () => {},
                        closeLayer: G = () => {},
                        pauseAnimation: U = !1,
                        applicationId: M,
                        handleSubscribeModalClose: L,
                        withHighlight: D = !1,
                        ...N
                    } = e, {
                        analyticsLocations: P
                    } = (0, a.default)(), C = (0, u.useAppContext)() === T.AppContext.POPOUT, [O, A] = n.useState(!1), p = null != f ? Math.max((0, d.getNumberOfAppliedBoostsNeededForTier)(r, f), 1) : 1, B = (0, d.generateBlockGuildSubscriptionPurchasesNode)(), m = async () => {
                        A(!0), await (0, I.addAppliedGuildBoosts)({
                            analyticsLocations: P,
                            analyticsLocation: t,
                            analyticsSourceLocation: i,
                            guild: r,
                            numberOfBoostsToAdd: p,
                            onClose: R,
                            closeLayer: G,
                            inPopout: C,
                            applicationId: M,
                            handleSubscribeModalClose: L
                        }), A(!1)
                    };
                    return null != B ? (0, s.jsx)(l.Tooltip, {
                        text: B,
                        "aria-label": !1,
                        children: e => (0, s.jsx)(_.default, {
                            ...e,
                            disabled: !0,
                            size: l.Button.Sizes.SMALL,
                            pauseAnimation: U,
                            ...N,
                            children: S ?? E.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                        })
                    }) : (0, s.jsx)(_.default, {
                        size: l.Button.Sizes.SMALL,
                        ...N,
                        className: o()(N.className, {
                            [c.buttonHighlighted]: D
                        }),
                        submitting: O,
                        onClick: m,
                        pauseAnimation: U,
                        children: S ?? E.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                    })
                }
        },
        772918: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                addAppliedGuildBoosts: function() {
                    return c
                }
            }), i("653041");
            var s = i("735250");
            i("470079");
            var n = i("974328"),
                r = i("242677"),
                o = i("378898"),
                l = i("714558"),
                u = i("871831"),
                a = i("433735"),
                _ = i("643847"),
                d = i("328470"),
                I = i("965981"),
                T = i("130063"),
                E = i("467006");
            async function c(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: c,
                    analyticsSourceLocation: S,
                    numberOfBoostsToAdd: f,
                    onClose: R,
                    closeLayer: G,
                    onSubscriptionConfirmation: U,
                    guild: M,
                    handleSubscribeModalClose: L,
                    disablePremiumUpsell: D,
                    inPopout: N,
                    applicationId: P
                } = e, C = N ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT, O = u.default.getCurrentUser();
                if (null == O) return;
                if (!O.verified) {
                    (0, n.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await i.el("772918@1547:1602").then(i.bind(i, "159082"));
                        return t => {
                            let {
                                onClose: i,
                                ...n
                            } = t;
                            return (0, s.jsx)(e, {
                                ...n,
                                onClose: i
                            })
                        }
                    }, {
                        contextKey: C
                    });
                    return
                }
                let A = [];
                !_.default.isLoadedForPremiumSKUs() && A.push((0, l.fetchPremiumSubscriptionPlans)()), !a.default.hasFetched && (A.push(r.fetchSubscriptions()), A.push((0, o.fetchGuildBoostSlots)())), A.length > 0 && await Promise.allSettled(A);
                let p = (0, I.getAvailableGuildBoostSlots)(a.default.boostSlots),
                    B = p.length,
                    m = e => {
                        R?.(), L?.(e)
                    };
                if (B > 0 && (null == f || B >= f)) {
                    let e;
                    1 === B ? e = p.slice(0, 1) : null != f && (e = p.slice(0, f));
                    let t = await (0, n.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await i.el("772918@3343:3375").then(i.bind(i, "590160"));
                        return i => {
                            let {
                                onClose: n,
                                ...r
                            } = i;
                            return (0, s.jsx)(t, {
                                ...r,
                                onClose: e => {
                                    n(), m(e)
                                },
                                selectedGuild: M,
                                locationSection: E.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                guildBoostSlots: e
                            })
                        }
                    }, {
                        onCloseRequest: () => {
                            null != t && (0, n.closeModal)(t), m(!1)
                        },
                        contextKey: C
                    })
                } else(0, T.default)({
                    analyticsLocations: t,
                    analyticsLocation: c,
                    analyticsSourceLocation: S,
                    guildId: M.id,
                    closeLayer: () => {
                        R?.(), G?.(), d.default.track(E.AnalyticEvents.MODAL_DISMISSED, {
                            type: E.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_section: c.section
                        })
                    },
                    totalNumberOfSlotsToAssign: f ?? 1,
                    onCloseModal: m,
                    disablePremiumUpsell: D,
                    onSubscriptionConfirmation: U,
                    inPopout: N,
                    applicationId: P
                })
            }
        },
        130063: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return T
                }
            });
            var s = i("735250");
            i("470079");
            var n = i("974328"),
                r = i("992888"),
                o = i("242677"),
                l = i("714558"),
                u = i("416573"),
                a = i("328470"),
                _ = i("488867"),
                d = i("467006"),
                I = i("30175");
            async function T(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: T,
                    analyticsSourceLocation: E,
                    guildId: c,
                    closeLayer: S,
                    onCloseModal: f,
                    totalNumberOfSlotsToAssign: R = 1,
                    disablePremiumUpsell: G,
                    onSubscriptionConfirmation: U,
                    inPopout: M,
                    applicationId: L
                } = e, D = M ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT, N = u.default.getPremiumTypeSubscription();
                if (null != N && N.isPurchasedExternally && null != N.paymentGateway) {
                    null != S && S(), r.default.show({
                        title: I.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                            paymentGatewayName: d.PaymentGatewayToFriendlyName[N.paymentGateway]
                        }),
                        body: I.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                            paymentGatewayName: d.PaymentGatewayToFriendlyName[N.paymentGateway],
                            subscriptionManagementLink: (0, _.getExternalSubscriptionMethodUrl)(N.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        })
                    });
                    return
                }
                Promise.all([(0, o.fetchPaymentSources)(), (0, l.fetchPremiumSubscriptionPlans)()]);
                let P = await (0, n.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("130063@2443:2478").then(i.bind(i, "31786"));
                    return i => {
                        let {
                            transitionState: n,
                            onClose: r
                        } = i;
                        return (0, s.jsx)(e, {
                            transitionState: n,
                            onClose: e => {
                                r(), f?.(e)
                            },
                            analyticsLocations: t,
                            analyticsLocation: T,
                            analyticsSourceLocation: E ?? T,
                            guildId: c,
                            totalNumberOfSlotsToAssign: R,
                            closeGuildPerksModal: S,
                            disablePremiumUpsell: G,
                            onSubscriptionConfirmation: U,
                            applicationId: L
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        a.default.track(d.AnalyticEvents.MODAL_DISMISSED, {
                            type: d.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
                            location: T
                        })
                    },
                    onCloseRequest: () => {
                        null != P && (0, n.closeModal)(P), f?.(!1)
                    },
                    contextKey: D
                })
            }
        },
        663698: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var s = i("735250");
            i("470079");
            var n = i("153832"),
                r = i("974328"),
                o = i("760157"),
                l = i("759478"),
                u = i("306620"),
                a = i("871831"),
                _ = i("328470"),
                d = i("845649"),
                I = i("488867"),
                T = i("467006"),
                E = i("171168");

            function c(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: c,
                    onClose: S,
                    onComplete: f,
                    onSubscriptionConfirmation: R,
                    analyticsLocations: G,
                    analyticsObject: U,
                    analyticsLocation: M,
                    analyticsSourceLocation: L,
                    isGift: D = !1,
                    giftMessage: N,
                    subscriptionTier: P,
                    trialId: C,
                    postSuccessGuild: O,
                    openInvoiceId: A,
                    applicationId: p,
                    referralTrialOfferId: B,
                    giftRecipient: m,
                    returnRef: g,
                    subscription: h
                } = e ?? {}, y = !1, v = (0, n.v4)(), b = a.default.getCurrentUser(), w = (0, I.isPremiumExactly)(b, E.PremiumTypes.TIER_2);
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("663698@1603:1634").then(i.bind(i, "64181"));
                    return i => {
                        let {
                            onClose: n,
                            ...r
                        } = i;
                        return (0, s.jsx)(e, {
                            ...r,
                            loadId: v,
                            subscriptionTier: P,
                            skuId: P,
                            isGift: D,
                            giftMessage: N,
                            giftRecipient: m,
                            initialPlanId: t,
                            followupSKUInfo: c,
                            onClose: (e, t) => {
                                n(), S?.(e), e && (R?.(), !D && null != t && t === E.PremiumSubscriptionSKUs.TIER_2 && !w && d.ComponentDispatch.dispatch(T.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                y = !0, f?.(), !D && (0, u.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: R,
                            analyticsLocations: G,
                            analyticsObject: U,
                            analyticsLocation: M,
                            analyticsSourceLocation: L,
                            trialId: C,
                            postSuccessGuild: O,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: A,
                            applicationId: p,
                            referralTrialOfferId: B,
                            returnRef: g,
                            subscription: h
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && _.default.track(T.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: v,
                            payment_type: T.PurchaseTypeToAnalyticsPaymentType[T.PurchaseTypes.SUBSCRIPTION],
                            location: M ?? U,
                            source: L,
                            subscription_type: T.SubscriptionTypes.PREMIUM,
                            is_gift: D,
                            eligible_for_trial: null != C,
                            application_id: p,
                            location_stack: G
                        }), (0, o.clearError)(), (0, l.clearPurchaseTokenAuthState)(), S?.(y), y && R?.()
                    }
                })
            }
        },
        306620: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                setCanPlayWowMoment: function() {
                    return n
                }
            });
            var s = i("312916");
            let n = e => {
                s.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: e
                })
            }
        },
        879385: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var s = i("885714");
            class n extends s.default {
                static createFromServer(e) {
                    return new n({
                        id: e.id,
                        guildId: e.guild_id,
                        userId: null != e.user ? e.user.id : e.user_id,
                        user: e.user,
                        ended: e.ended,
                        endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.guildId = e.guildId, this.userId = e.userId, this.user = e.user, this.ended = e.ended, this.endsAt = null != e.endsAt ? e.endsAt : null
                }
            }
            var r = n
        },
        433735: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var s = i("661223"),
                n = i("312916"),
                r = i("416573");
            let o = !1,
                l = {};

            function u(e) {
                let {
                    guildBoostSlot: t
                } = e;
                l = {
                    ...l,
                    [t.id]: t
                }
            }

            function a() {
                let e = {};
                for (let t of Object.values(l)) e[t.id] = t, t.subscription = r.default.getSubscriptionById(t.subscriptionId);
                l = e
            }
            class _ extends s.default.Store {
                static #e = this.displayName = "GuildBoostSlotStore";
                initialize() {
                    this.syncWith([r.default], a)
                }
                get hasFetched() {
                    return o
                }
                get boostSlots() {
                    return l
                }
                getGuildBoostSlot(e) {
                    return l[e]
                }
            }
            var d = new _(n.default, {
                GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildBoostSlots: t
                    } = e;
                    l = {}, t.forEach(e => {
                        l[e.id] = e
                    }), o = !0
                },
                GUILD_BOOST_SLOT_UPDATE_SUCCESS: u,
                GUILD_BOOST_SLOT_CREATE: u,
                GUILD_BOOST_SLOT_UPDATE: u,
                LOGOUT: function() {
                    l = {}, o = !1
                }
            })
        },
        416912: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                Shine: function() {
                    return S
                },
                ShineSizes: function() {
                    return n
                },
                default: function() {
                    return R
                }
            });
            var s, n, r = i("735250"),
                o = i("470079"),
                l = i("803997"),
                u = i.n(l),
                a = i("414112"),
                _ = i("974328"),
                d = i("553521"),
                I = i("164323"),
                T = i("556233");
            (s = n || (n = {})).DEFAULT = "default", s.SMALL = "small";
            let E = {
                    default: T.shineDefault,
                    small: T.shineSmall
                },
                c = {
                    default: T.shineInnerDefault,
                    small: T.shineInnerSmall
                };
            class S extends o.PureComponent {
                static #e = this.defaultProps = {
                    shineSize: "default"
                };
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: i,
                        ...s
                    } = this.props;
                    return (0, r.jsx)(a.default.div, {
                        ...s,
                        className: u()(T.shineContainer, e, {
                            [T.shinePaused]: i
                        }),
                        children: (0, r.jsx)(I.default, {
                            align: I.default.Align.CENTER,
                            justify: I.default.Justify.CENTER,
                            className: E[t],
                            children: (0, r.jsx)("div", {
                                className: c[t]
                            })
                        })
                    })
                }
            }
            let f = e => {
                let {
                    children: t,
                    className: i,
                    disabled: s,
                    submitting: n,
                    pauseAnimation: l,
                    shineSize: a = "default",
                    shinePaused: I,
                    buttonShineClassName: E,
                    onlyShineOnHover: c,
                    ...f
                } = e, R = o.createRef(), G = (0, d.default)(R), U = !s && !n && !0 !== l && (!c || G);
                return (0, r.jsxs)(_.Button, {
                    buttonRef: R,
                    ...f,
                    className: u()(T.shinyButton, i),
                    disabled: s,
                    submitting: n,
                    children: [t, U ? (0, r.jsx)(S, {
                        shinePaused: I,
                        className: u()(T.buttonShine, c ? T.onlyShineOnHover : void 0, E),
                        shineSize: a
                    }) : null]
                })
            };
            f.ShineSizes = n;
            var R = f
        },
        815607: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var s = i("735250");
            i("470079");
            var n = i("336328"),
                r = i("762510"),
                o = i("262113"),
                l = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: n = "currentColor",
                        foreground: r,
                        ...l
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: n,
                            className: r,
                            d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8 6C9.104 6 10 6.896 10 8C10 9.105 9.104 10 8 10C6.896 10 6 9.105 6 8C6 6.896 6.896 6 8 6ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14ZM16 10C14.896 10 14 9.105 14 8C14 6.896 14.896 6 16 6C17.104 6 18 6.896 18 8C18 9.105 17.104 10 16 10Z"
                        })
                    })
                }, r.ReactionIcon, void 0, {
                    size: 24
                })
        },
        985053: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var s = i("735250");
            i("470079");
            var n = i("336328"),
                r = i("218547"),
                o = i("262113"),
                l = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: n = "currentColor",
                        foreground: r,
                        ...l
                    } = e;
                    return (0, s.jsx)("svg", {
                        width: t,
                        height: i,
                        ...(0, o.default)(l),
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: n,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, r.GiftIcon, void 0, {
                    size: 24
                })
        },
        7304: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var s = i("735250");
            i("470079");
            var n = i("262113");

            function r(e) {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: r = "currentColor",
                    foreground: o,
                    ...l
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, n.default)(l),
                    width: t,
                    height: i,
                    viewBox: "0 0 8 12",
                    children: [(0, s.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: r,
                        className: o
                    }), (0, s.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: r,
                        className: o
                    })]
                })
            }
        },
        636858: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var s = i("735250");
            i("470079");
            var n = i("262113");

            function r(e) {
                let {
                    width: t = 14,
                    height: i = 13,
                    color: r = "currentColor",
                    foreground: o,
                    ...l
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, n.default)({
                        ...l
                    }),
                    width: t,
                    height: i,
                    viewBox: `0 0 ${t} ${i}`,
                    className: o,
                    fill: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
                        fill: "currentColor"
                    })
                })
            }
        },
        965981: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PerkIcons: function() {
                    return n
                },
                appliedGuildBoostsRequiredForPerks: function() {
                    return h
                },
                boostedGuildTierToAnalyticsObjectType: function() {
                    return C
                },
                generateBlockGuildSubscriptionPurchasesNode: function() {
                    return m
                },
                getAppliedGuildBoostsRequired: function() {
                    return y
                },
                getAvailableGuildBoostSlots: function() {
                    return B
                },
                getAvailableSoundboardSoundCount: function() {
                    return x
                },
                getAvailableStickerSlotCount: function() {
                    return w
                },
                getGracePeriodEndingDate: function() {
                    return b
                },
                getGuildTierFromAppliedBoostCount: function() {
                    return O
                },
                getIncrementalSoundboardSoundCountForTier: function() {
                    return M
                },
                getIncrementalStickerCountForTier: function() {
                    return G
                },
                getNextTier: function() {
                    return f
                },
                getNumberOfAppliedBoostsNeededForTier: function() {
                    return K
                },
                getShortenedTierName: function() {
                    return N
                },
                getTierName: function() {
                    return D
                },
                getTiers: function() {
                    return L
                },
                getTotalSoundboardSoundCountForTier: function() {
                    return U
                },
                getTotalStickerCountForTier: function() {
                    return R
                },
                isGuildBoostSlotCanceled: function() {
                    return F
                },
                isGuildBoostedAtLeast: function() {
                    return A
                },
                isInGracePeriod: function() {
                    return g
                },
                isTierUnlocked: function() {
                    return p
                },
                minimumRequiredTierForGuildFeature: function() {
                    return P
                }
            });
            var s, n, r = i("392711"),
                o = i.n(r);
            i("913527");
            var l = i("433735"),
                u = i("416573"),
                a = i("158619"),
                _ = i("370275"),
                d = i("312630"),
                I = i("488867"),
                T = i("467006"),
                E = i("171168"),
                c = i("30175");
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
            }), (s = n || (n = {}))[s.EMOJI = 1] = "EMOJI", s[s.AUDIO = 2] = "AUDIO", s[s.ANIMATED = 3] = "ANIMATED", s[s.CUSTOMIZATION = 4] = "CUSTOMIZATION", s[s.UPLOAD = 5] = "UPLOAD", s[s.VANITY = 6] = "VANITY", s[s.STREAM = 7] = "STREAM", s[s.STICKER = 8] = "STICKER", s[s.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", s[s.STAGE_VIDEO = 12] = "STAGE_VIDEO", s[s.SOUNDBOARD = 13] = "SOUNDBOARD";
            let S = [T.BoostedGuildTiers.NONE, T.BoostedGuildTiers.TIER_1, T.BoostedGuildTiers.TIER_2, T.BoostedGuildTiers.TIER_3],
                f = (e, t) => e === T.BoostedGuildTiers.NONE ? T.BoostedGuildTiers.TIER_1 : v(t).find(t => t.tier === e)?.nextTier,
                R = e => E.TotalStickerCountsByTier[e],
                G = e => E.IncrementalStickerCountsByTier[e],
                U = e => E.TotalSoundboardSoundCountsByTier[e],
                M = e => {
                    if (e === T.BoostedGuildTiers.NONE) return E.TotalSoundboardSoundCountsByTier[e];
                    let t = S[S.indexOf(e) - 1];
                    return E.TotalSoundboardSoundCountsByTier[e] - E.TotalSoundboardSoundCountsByTier[t]
                },
                L = e => [{
                    tier: T.BoostedGuildTiers.TIER_1,
                    title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
                    perks: [{
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_1].limits.emoji - E.BoostedGuildFeatures[T.BoostedGuildTiers.NONE].limits.emoji,
                            total: E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_1].limits.emoji
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                        icon: 1
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: G(T.BoostedGuildTiers.TIER_1),
                            total: R(T.BoostedGuildTiers.TIER_1)
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                        icon: 8
                    }, {
                        title: c.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: M(T.BoostedGuildTiers.TIER_1),
                            totalSoundCount: U(T.BoostedGuildTiers.TIER_1)
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                        icon: 13
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                        icon: 2
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                        icon: 3
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                        icon: 4
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                        icon: 7
                    }].filter(_.isNotNullish)
                }, {
                    tier: T.BoostedGuildTiers.TIER_2,
                    title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
                    perks: [{
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_2].limits.emoji - E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_1].limits.emoji,
                            total: E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_2].limits.emoji
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                        icon: 1
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: G(T.BoostedGuildTiers.TIER_2),
                            total: R(T.BoostedGuildTiers.TIER_2)
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                        icon: 8
                    }, {
                        title: c.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: M(T.BoostedGuildTiers.TIER_2),
                            totalSoundCount: U(T.BoostedGuildTiers.TIER_2)
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                        icon: 13
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                        icon: 2
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                        icon: 4
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                            fileSize: (0, a.formatSize)(E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_2].limits.fileSize / 1024, {
                                useKibibytes: !0
                            })
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                        icon: 5
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                        icon: 7
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                        icon: 11
                    }, e ? {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: T.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: T.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                        }),
                        icon: 12
                    } : null].filter(_.isNotNullish)
                }, {
                    tier: T.BoostedGuildTiers.TIER_3,
                    title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
                    perks: [{
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_3].limits.emoji - E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_2].limits.emoji,
                            total: E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_3].limits.emoji
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                        icon: 1
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: G(T.BoostedGuildTiers.TIER_3),
                            total: R(T.BoostedGuildTiers.TIER_3)
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                        icon: 8
                    }, {
                        title: c.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: M(T.BoostedGuildTiers.TIER_3),
                            totalSoundCount: U(T.BoostedGuildTiers.TIER_3)
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                        icon: 13
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                        icon: 2
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
                            helpdeskArticle: d.default.getArticleURL(T.HelpdeskArticles.GUILD_VANITY_URL)
                        }),
                        icon: 6
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                            fileSize: (0, a.formatSize)(E.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_3].limits.fileSize / 1024, {
                                useKibibytes: !0
                            })
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                        icon: 5
                    }, {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                        icon: 3
                    }, e ? {
                        title: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: T.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                        }),
                        description: c.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: T.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                        }),
                        icon: 12
                    } : null].filter(_.isNotNullish)
                }];

            function D(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        useLevels: i = !0
                    } = t;
                switch (e) {
                    case T.BoostedGuildTiers.NONE:
                        return i ? c.default.Messages.PREMIUM_GUILD_TIER_0 : c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
                    case T.BoostedGuildTiers.TIER_1:
                        return c.default.Messages.PREMIUM_GUILD_TIER_1;
                    case T.BoostedGuildTiers.TIER_2:
                        return c.default.Messages.PREMIUM_GUILD_TIER_2;
                    case T.BoostedGuildTiers.TIER_3:
                        return c.default.Messages.PREMIUM_GUILD_TIER_3;
                    default:
                        throw Error("Not a valid tier type")
                }
            }

            function N(e) {
                switch (e) {
                    case T.BoostedGuildTiers.NONE:
                        return c.default.Messages.PREMIUM_GUILD_TIER_0;
                    case T.BoostedGuildTiers.TIER_1:
                        return c.default.Messages.PREMIUM_GUILD_TIER_1_SHORT;
                    case T.BoostedGuildTiers.TIER_2:
                        return c.default.Messages.PREMIUM_GUILD_TIER_2_SHORT;
                    case T.BoostedGuildTiers.TIER_3:
                        return c.default.Messages.PREMIUM_GUILD_TIER_3_SHORT;
                    default:
                        throw Error("Not a valid tier type")
                }
            }
            let P = o().memoize(e => (0, E.BoostedGuildFeatures)[T.BoostedGuildTiers.TIER_1].features.includes(e) ? T.BoostedGuildTiers.TIER_1 : (0, E.BoostedGuildFeatures)[T.BoostedGuildTiers.TIER_2].features.includes(e) ? T.BoostedGuildTiers.TIER_2 : (0, E.BoostedGuildFeatures)[T.BoostedGuildTiers.TIER_3].features.includes(e) ? T.BoostedGuildTiers.TIER_3 : null),
                C = e => {
                    if (e === T.BoostedGuildTiers.NONE) return T.AnalyticsObjectTypes.NONE;
                    if (e === T.BoostedGuildTiers.TIER_1) return T.AnalyticsObjectTypes.TIER_1;
                    if (e === T.BoostedGuildTiers.TIER_2) return T.AnalyticsObjectTypes.TIER_2;
                    else if (e === T.BoostedGuildTiers.TIER_3) return T.AnalyticsObjectTypes.TIER_3;
                    return null
                };

            function O(e, t) {
                for (let i of v(t))
                    if (e >= i.amount) return i.tier;
                return T.BoostedGuildTiers.NONE
            }

            function A(e, t) {
                return null == t || null != e && e >= t
            }

            function p(e, t) {
                return A(e.premiumTier, t)
            }

            function B(e) {
                return o().values(e).filter(e => e.isAvailable())
            }

            function m() {
                let e = u.default.getPremiumTypeSubscription(),
                    {
                        numAvailableGuildBoostSlots: t,
                        numCanceledGuildBoostSlots: i
                    } = Object.values(l.default.boostSlots).reduce((e, t) => (F(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
                        numAvailableGuildBoostSlots: 0,
                        numCanceledGuildBoostSlots: 0
                    });
                if (null == e || t > 0) return null;
                if (e.status === T.SubscriptionStatusTypes.PAST_DUE) return c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
                if (e.status === T.SubscriptionStatusTypes.ACCOUNT_HOLD) return c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
                if (i > 0) return c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
                if (null == e.renewalMutations) return null;
                let s = I.getNumPremiumGuildSubscriptions(e.renewalMutations.additionalPlans);
                return I.getNumPremiumGuildSubscriptions(e.additionalPlans) > s ? c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
            }

            function g(e, t) {
                return h(e, t) > 0
            }

            function h(e, t) {
                let i = O(e.length, t),
                    s = y(t)[i],
                    n = e.filter(e => null != e.endsAt);
                return s - (e.length - n.length)
            }

            function y(e) {
                return T.AppliedGuildBoostsRequiredForBoostedGuildTier
            }

            function v(e) {
                let t = y(e);
                return [{
                    tier: T.BoostedGuildTiers.TIER_3,
                    amount: t[T.BoostedGuildTiers.TIER_3],
                    nextTier: null
                }, {
                    tier: T.BoostedGuildTiers.TIER_2,
                    amount: t[T.BoostedGuildTiers.TIER_2],
                    nextTier: T.BoostedGuildTiers.TIER_3
                }, {
                    tier: T.BoostedGuildTiers.TIER_1,
                    amount: t[T.BoostedGuildTiers.TIER_1],
                    nextTier: T.BoostedGuildTiers.TIER_2
                }]
            }

            function b(e, t) {
                let i = h(e, t);
                if (i > 0) {
                    let t = e.sort((e, t) => null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1).filter(e => null != e.endsAt);
                    return t[t.length - i].endsAt
                }
                return null
            }

            function w(e, t) {
                let i = G(t),
                    s = S.indexOf(t);
                if (-1 === s) return 0;
                let n = S[s - 1],
                    r = null != n ? R(n) : 0,
                    o = R(t);
                return Math.max(0, i - e.slice(r, o).length)
            }

            function x(e, t) {
                return -1 === S.indexOf(t) ? 0 : Math.max(0, U(t) - e.length)
            }

            function K(e, t) {
                let i = e.premiumSubscriberCount;
                return Math.max(0, y(e.id)[t] - i)
            }

            function F(e) {
                return e.subscription?.status === T.SubscriptionStatusTypes.CANCELED || e.canceled
            }
        },
        32394: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                GiftIcon: function() {
                    return o
                }
            });
            var s = i("735250");
            i("470079");
            var n = i("600186"),
                r = i("11768");
            let o = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: o = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: l
                    })]
                })
            }
        },
        545224: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ReactionIcon: function() {
                    return o
                }
            });
            var s = i("735250");
            i("470079");
            var n = i("600186"),
                r = i("11768");
            let o = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: o = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        718208: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                UploadIcon: function() {
                    return o
                }
            });
            var s = i("735250");
            i("470079");
            var n = i("600186"),
                r = i("11768");
            let o = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: o = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
                        className: l
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=73938.282f329b9f73610fcee8.js.map