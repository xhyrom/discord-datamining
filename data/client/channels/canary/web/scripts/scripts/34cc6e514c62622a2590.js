(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20639"], {
        583367: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                fetchAppliedGuildBoostsForGuild: function() {
                    return d
                },
                fetchGuildBoostSlots: function() {
                    return c
                },
                applyToGuild: function() {
                    return _
                },
                unapplyFromGuild: function() {
                    return S
                },
                cancelGuildBoostSlot: function() {
                    return f
                },
                uncancelGuildBoostSlot: function() {
                    return p
                }
            });
            var r = l("872717"),
                n = l("913144"),
                a = l("448993"),
                u = l("783111"),
                i = l("522308"),
                o = l("521012"),
                s = l("49111");
            async function d(t) {
                let e = await r.default.get({
                        url: s.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(t),
                        oldFormErrors: !0
                    }),
                    l = e.body.map(t => u.default.createFromServer(t));
                return n.default.dispatch({
                    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                    guildId: t,
                    appliedBoosts: l
                }), l
            }
            async function c() {
                let t = await r.default.get({
                        url: s.Endpoints.USER_GUILD_BOOST_SLOTS,
                        oldFormErrors: !0
                    }),
                    e = t.body.map(t => i.default.createFromServer(t, o.default.getSubscriptionById(t.subscription_id)));
                return n.default.dispatch({
                    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
                    guildBoostSlots: e
                }), e
            }
            async function _(t, e) {
                n.default.dispatch({
                    type: "GUILD_APPLY_BOOST_START"
                });
                try {
                    let l = await r.default.put({
                            url: s.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(t),
                            body: {
                                user_premium_guild_subscription_slot_ids: e
                            },
                            oldFormErrors: !0
                        }),
                        a = Array.isArray(l.body) ? l.body.map(u.default.createFromServer) : [u.default.createFromServer(l.body)];
                    return n.default.dispatch({
                        type: "GUILD_APPLY_BOOST_SUCCESS",
                        appliedGuildBoost: a
                    }), c(), a
                } catch (e) {
                    let t = new a.AppliedGuildBoostError(e);
                    throw n.default.dispatch({
                        type: "GUILD_APPLY_BOOST_FAIL",
                        error: t
                    }), t
                }
            }
            async function S(t, e) {
                n.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_START"
                });
                try {
                    await r.default.delete({
                        url: s.Endpoints.APPLIED_GUILD_BOOST(t, e),
                        oldFormErrors: !0
                    }), c()
                } catch (e) {
                    let t = new a.AppliedGuildBoostError(e);
                    throw n.default.dispatch({
                        type: "GUILD_UNAPPLY_BOOST_FAIL",
                        error: t
                    }), t
                }
                n.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
                    boostId: e
                })
            }
            async function f(t) {
                let e = await r.default.post({
                        url: s.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(t),
                        oldFormErrors: !0
                    }),
                    l = i.default.createFromServer(e.body, o.default.getSubscriptionById(e.body.subscription_id));
                return n.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: l
                }), l
            }
            async function p(t) {
                let e = await r.default.post({
                        url: s.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(t),
                        oldFormErrors: !0
                    }),
                    l = i.default.createFromServer(e.body, o.default.getSubscriptionById(e.body.subscription_id));
                return n.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: l
                }), l
            }
        },
        441413: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                StretchedSparkleStar: function() {
                    return c
                },
                default: function() {
                    return _
                }
            });
            var r = l("37983");
            l("884691");
            var n = l("414456"),
                a = l.n(n),
                u = l("75196"),
                i = l("956089"),
                o = l("125835"),
                s = l("782340"),
                d = l("159163");

            function c(t) {
                return (0, r.jsx)("svg", {
                    ...(0, u.default)({
                        ...t
                    }),
                    width: "25",
                    height: "48",
                    viewBox: "0 0 25 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M22.6014 22.1003C20.4432 20.6855 18.6067 18.8326 17.2112 16.6618C15.8157 14.4911 14.8925 12.0511 14.5014 9.50028L13.2014 0.700277C13.1553 0.497624 13.0404 0.317179 12.8764 0.189581C12.7123 0.0619821 12.5092 -0.00490199 12.3014 0.000279992C12.1055 -0.00125605 11.9158 0.0691675 11.7683 0.198194C11.6209 0.327221 11.5259 0.505874 11.5014 0.700277L10.1014 9.50028C9.74796 12.0629 8.8402 14.5177 7.44131 16.6938C6.04242 18.8698 4.18605 20.7148 2.00143 22.1003L0.901394 22.8003C0.770775 22.8872 0.665162 23.0067 0.594998 23.1471C0.524833 23.2874 0.49259 23.4436 0.501431 23.6003C0.49259 23.7569 0.524833 23.9132 0.594998 24.0535C0.665162 24.1938 0.770775 24.3134 0.901394 24.4003L2.00143 25.1003C4.18605 26.4857 6.04242 28.3307 7.44131 30.5068C8.8402 32.6828 9.74796 35.1376 10.1014 37.7003L11.5014 46.4003C11.5014 46.6125 11.5857 46.8159 11.7357 46.966C11.8858 47.116 12.0892 47.2003 12.3014 47.2003C12.5238 47.2017 12.7388 47.1207 12.9049 46.973C13.0711 46.8252 13.1767 46.6212 13.2014 46.4003L14.5014 37.7003C14.8925 35.1495 15.8157 32.7095 17.2112 30.5387C18.6067 28.368 20.4432 26.5151 22.6014 25.1003L23.8014 24.4003C24.0329 24.1951 24.1761 23.9085 24.2014 23.6003C24.1761 23.292 24.0329 23.0054 23.8014 22.8003L22.6014 22.1003Z",
                        fill: "currentColor"
                    })
                })
            }

            function _(t) {
                let {
                    className: e,
                    forceUseColorForSparkles: l = !1,
                    shouldInheritTextColor: n = !1,
                    shouldInheritBackgroundColor: u = !1
                } = t;
                return (0, r.jsx)(o.default, {
                    className: e,
                    forceUseColor: l,
                    children: (0, r.jsx)(i.TextBadge, {
                        disableColor: !0,
                        className: a(d.tag, {
                            [d.inheritTextColor]: n,
                            [d.inheritBackgroundColor]: u
                        }),
                        text: s.default.Messages.NEW
                    })
                })
            }
        },
        125835: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return o
                }
            });
            var r = l("37983");
            l("884691");
            var n = l("414456"),
                a = l.n(n),
                u = l("642032"),
                i = l("767964");

            function o(t) {
                let {
                    className: e,
                    children: l,
                    forceUseColor: n = !1,
                    hideStars: o
                } = t;
                return (0, r.jsxs)("span", {
                    className: a(i.container, e, {
                        [i.containerColored]: n
                    }),
                    children: [l, o ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(u.default, {
                            foreground: i.sparkleStarTopRight
                        }), (0, r.jsx)(u.default, {
                            foreground: i.sparkleStarRight
                        }), (0, r.jsx)(u.default, {
                            foreground: i.sparkleStarBottomLeft
                        })]
                    })]
                })
            }
        },
        617917: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return I
                }
            });
            var r = l("37983"),
                n = l("884691"),
                a = l("414456"),
                u = l.n(a),
                i = l("77078"),
                o = l("244201"),
                s = l("685665"),
                d = l("181114"),
                c = l("427459"),
                _ = l("954296"),
                S = l("49111"),
                f = l("782340"),
                p = l("500924"),
                I = t => {
                    let {
                        analyticsLocation: e,
                        analyticsSourceLocation: l,
                        guild: a,
                        buttonText: I,
                        targetBoostedGuildTier: L,
                        onClose: E = () => {},
                        closeLayer: T = () => {},
                        pauseAnimation: y = !1,
                        applicationId: A,
                        handleSubscribeModalClose: m,
                        withHighlight: O = !1,
                        ...C
                    } = t, {
                        analyticsLocations: U
                    } = (0, s.default)(), P = (0, o.useAppContext)(), h = P === S.AppContext.POPOUT, [M, D] = n.useState(!1), g = null != L ? Math.max((0, c.getNumberOfAppliedBoostsNeededForTier)(a, L), 1) : 1, G = (0, c.generateBlockGuildSubscriptionPurchasesNode)(), R = async () => {
                        D(!0), await (0, _.addAppliedGuildBoosts)({
                            analyticsLocations: U,
                            analyticsLocation: e,
                            analyticsSourceLocation: l,
                            guild: a,
                            numberOfBoostsToAdd: g,
                            onClose: E,
                            closeLayer: T,
                            inPopout: h,
                            applicationId: A,
                            handleSubscribeModalClose: m
                        }), D(!1)
                    };
                    return null != G ? (0, r.jsx)(i.Tooltip, {
                        text: G,
                        "aria-label": !1,
                        children: t => (0, r.jsx)(d.default, {
                            ...t,
                            disabled: !0,
                            size: i.Button.Sizes.SMALL,
                            pauseAnimation: y,
                            ...C,
                            children: null != I ? I : f.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                        })
                    }) : (0, r.jsx)(d.default, {
                        size: i.Button.Sizes.SMALL,
                        ...C,
                        className: u(C.className, {
                            [p.buttonHighlighted]: O
                        }),
                        submitting: M,
                        onClick: R,
                        pauseAnimation: y,
                        children: null != I ? I : f.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                    })
                }
        },
        954296: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                addAppliedGuildBoosts: function() {
                    return p
                }
            });
            var r = l("37983");
            l("884691");
            var n = l("77078"),
                a = l("850068"),
                u = l("583367"),
                i = l("775433"),
                o = l("697218"),
                s = l("625634"),
                d = l("10514"),
                c = l("599110"),
                _ = l("427459"),
                S = l("163732"),
                f = l("49111");
            async function p(t) {
                let {
                    analyticsLocations: e,
                    analyticsLocation: p,
                    analyticsSourceLocation: I,
                    numberOfBoostsToAdd: L,
                    onClose: E,
                    closeLayer: T,
                    onSubscriptionConfirmation: y,
                    guild: A,
                    handleSubscribeModalClose: m,
                    disablePremiumUpsell: O,
                    inPopout: C,
                    applicationId: U
                } = t, P = C ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT, h = o.default.getCurrentUser();
                if (null == h) return;
                if (!h.verified) {
                    (0, n.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await l.el("899917").then(l.bind(l, "899917"));
                        return e => {
                            let {
                                onClose: l,
                                ...n
                            } = e;
                            return (0, r.jsx)(t, {
                                ...n,
                                onClose: l
                            })
                        }
                    }, {
                        contextKey: P
                    });
                    return
                }
                let M = [];
                !d.default.isLoadedForPremiumSKUs() && M.push((0, i.fetchPremiumSubscriptionPlans)()), !s.default.hasFetched && (M.push(a.fetchSubscriptions()), M.push((0, u.fetchGuildBoostSlots)())), M.length > 0 && await Promise.allSettled(M);
                let D = (0, _.getAvailableGuildBoostSlots)(s.default.boostSlots),
                    g = D.length,
                    G = t => {
                        null == E || E(), null == m || m(t)
                    };
                if (g > 0 && (null == L || g >= L)) {
                    let t;
                    1 === g ? t = D.slice(0, 1) : null != L && (t = D.slice(0, L));
                    let e = await (0, n.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("247760").then(l.bind(l, "247760"));
                        return l => {
                            let {
                                onClose: n,
                                ...a
                            } = l;
                            return (0, r.jsx)(e, {
                                ...a,
                                onClose: t => {
                                    n(), G(t)
                                },
                                selectedGuild: A,
                                locationSection: f.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                guildBoostSlots: t
                            })
                        }
                    }, {
                        onCloseRequest: () => {
                            null != e && (0, n.closeModal)(e), G(!1)
                        },
                        contextKey: P
                    })
                } else(0, S.default)({
                    analyticsLocations: e,
                    analyticsLocation: p,
                    analyticsSourceLocation: I,
                    guildId: A.id,
                    closeLayer: () => {
                        null == E || E(), null == T || T(), c.default.track(f.AnalyticEvents.MODAL_DISMISSED, {
                            type: f.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_section: p.section
                        })
                    },
                    totalNumberOfSlotsToAssign: null != L ? L : 1,
                    onCloseModal: G,
                    disablePremiumUpsell: O,
                    onSubscriptionConfirmation: y,
                    inPopout: C,
                    applicationId: U
                })
            }
        },
        163732: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return S
                }
            });
            var r = l("37983");
            l("884691");
            var n = l("77078"),
                a = l("404118"),
                u = l("850068"),
                i = l("775433"),
                o = l("521012"),
                s = l("599110"),
                d = l("719923"),
                c = l("49111"),
                _ = l("782340");
            async function S(t) {
                let {
                    analyticsLocations: e,
                    analyticsLocation: S,
                    analyticsSourceLocation: f,
                    guildId: p,
                    closeLayer: I,
                    onCloseModal: L,
                    totalNumberOfSlotsToAssign: E = 1,
                    disablePremiumUpsell: T,
                    onSubscriptionConfirmation: y,
                    inPopout: A,
                    applicationId: m
                } = t, O = A ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT, C = o.default.getPremiumTypeSubscription();
                if (null != C && C.isPurchasedExternally && null != C.paymentGateway) {
                    null != I && I(), a.default.show({
                        title: _.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[C.paymentGateway]
                        }),
                        body: _.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[C.paymentGateway],
                            subscriptionManagementLink: (0, d.getExternalSubscriptionMethodUrl)(C.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        })
                    });
                    return
                }
                Promise.all([(0, u.fetchPaymentSources)(), (0, i.fetchPremiumSubscriptionPlans)()]);
                let U = await (0, n.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await l.el("860634").then(l.bind(l, "860634"));
                    return l => {
                        let {
                            transitionState: n,
                            onClose: a
                        } = l;
                        return (0, r.jsx)(t, {
                            transitionState: n,
                            onClose: t => {
                                a(), null == L || L(t)
                            },
                            analyticsLocations: e,
                            analyticsLocation: S,
                            analyticsSourceLocation: null != f ? f : S,
                            guildId: p,
                            totalNumberOfSlotsToAssign: E,
                            closeGuildPerksModal: I,
                            disablePremiumUpsell: T,
                            onSubscriptionConfirmation: y,
                            applicationId: m
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        s.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
                            type: c.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
                            location: S
                        })
                    },
                    onCloseRequest: () => {
                        null != U && (0, n.closeModal)(U), null == L || L(!1)
                    },
                    contextKey: O
                })
            }
        },
        324878: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                useHasActiveTrial: function() {
                    return i
                },
                hasActiveTrial: function() {
                    return o
                },
                isEligibleTrialSub: function() {
                    return s
                },
                useCurrentPremiumTrialTier: function() {
                    return d
                }
            });
            var r = l("446674"),
                n = l("697218"),
                a = l("521012"),
                u = l("646718");
            let i = () => {
                    let t = (0, r.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription());
                    return (null == t ? void 0 : t.trialId) != null
                },
                o = () => {
                    var t;
                    return (null === (t = a.default.getPremiumTypeSubscription()) || void 0 === t ? void 0 : t.trialId) != null
                },
                s = t => (null == t ? void 0 : t.trialId) != null && (t.trialId === u.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID || t.trialId === u.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID || t.trialId === u.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID || t.trialId === u.PREMIUM_TIER_2_REFERRAL_TRIAL_ID);

            function d() {
                let t = (0, r.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
                    e = (0, r.useStateFromStores)([n.default], () => n.default.getCurrentUser());
                return (null == t ? void 0 : t.trialId) != null ? null == e ? void 0 : e.premiumType : null
            }
        },
        783111: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return a
                }
            });
            var r = l("666038");
            class n extends r.default {
                static createFromServer(t) {
                    return new n({
                        id: t.id,
                        guildId: t.guild_id,
                        userId: null != t.user ? t.user.id : t.user_id,
                        user: t.user,
                        ended: t.ended,
                        endsAt: null != t.ends_at && "" !== t.ends_at ? new Date(t.ends_at) : null
                    })
                }
                constructor(t) {
                    super(), this.id = t.id, this.guildId = t.guildId, this.userId = t.userId, this.user = t.user, this.ended = t.ended, this.endsAt = null != t.endsAt ? t.endsAt : null
                }
            }
            var a = n
        }
    }
]);
//# sourceMappingURL=34cc6e514c62622a2590.js.map