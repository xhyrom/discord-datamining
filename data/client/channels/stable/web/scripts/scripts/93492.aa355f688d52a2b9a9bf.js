(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93492"], {
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
                    return f
                },
                unapplyFromGuild: function() {
                    return _
                },
                cancelGuildBoostSlot: function() {
                    return p
                },
                uncancelGuildBoostSlot: function() {
                    return S
                }
            });
            var n = l("872717"),
                r = l("913144"),
                a = l("448993"),
                s = l("783111"),
                o = l("522308"),
                i = l("521012"),
                u = l("49111");
            async function d(t) {
                let e = await n.default.get({
                        url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(t),
                        oldFormErrors: !0
                    }),
                    l = e.body.map(t => s.default.createFromServer(t));
                return r.default.dispatch({
                    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                    guildId: t,
                    appliedBoosts: l
                }), l
            }
            async function c() {
                let t = await n.default.get({
                        url: u.Endpoints.USER_GUILD_BOOST_SLOTS,
                        oldFormErrors: !0
                    }),
                    e = t.body.map(t => o.default.createFromServer(t, i.default.getSubscriptionById(t.subscription_id)));
                return r.default.dispatch({
                    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
                    guildBoostSlots: e
                }), e
            }
            async function f(t, e) {
                r.default.dispatch({
                    type: "GUILD_APPLY_BOOST_START"
                });
                try {
                    let l = await n.default.put({
                            url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(t),
                            body: {
                                user_premium_guild_subscription_slot_ids: e
                            },
                            oldFormErrors: !0
                        }),
                        a = Array.isArray(l.body) ? l.body.map(s.default.createFromServer) : [s.default.createFromServer(l.body)];
                    return r.default.dispatch({
                        type: "GUILD_APPLY_BOOST_SUCCESS",
                        appliedGuildBoost: a
                    }), c(), a
                } catch (e) {
                    let t = new a.AppliedGuildBoostError(e);
                    throw r.default.dispatch({
                        type: "GUILD_APPLY_BOOST_FAIL",
                        error: t
                    }), t
                }
            }
            async function _(t, e) {
                r.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_START"
                });
                try {
                    await n.default.delete({
                        url: u.Endpoints.APPLIED_GUILD_BOOST(t, e),
                        oldFormErrors: !0
                    }), c()
                } catch (e) {
                    let t = new a.AppliedGuildBoostError(e);
                    throw r.default.dispatch({
                        type: "GUILD_UNAPPLY_BOOST_FAIL",
                        error: t
                    }), t
                }
                r.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
                    boostId: e
                })
            }
            async function p(t) {
                let e = await n.default.post({
                        url: u.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(t),
                        oldFormErrors: !0
                    }),
                    l = o.default.createFromServer(e.body, i.default.getSubscriptionById(e.body.subscription_id));
                return r.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: l
                }), l
            }
            async function S(t) {
                let e = await n.default.post({
                        url: u.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(t),
                        oldFormErrors: !0
                    }),
                    l = o.default.createFromServer(e.body, i.default.getSubscriptionById(e.body.subscription_id));
                return r.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: l
                }), l
            }
        },
        906069: function(t, e, l) {
            "use strict";
            l.r(e);
            var n = l("436418");
            l.es(n, e)
        },
        596256: function(t, e, l) {
            "use strict";
            l.r(e);
            var n = l("814121");
            l.es(n, e)
        },
        441413: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                StretchedSparkleStar: function() {
                    return c
                },
                default: function() {
                    return f
                }
            });
            var n = l("37983");
            l("884691");
            var r = l("414456"),
                a = l.n(r),
                s = l("75196"),
                o = l("956089"),
                i = l("125835"),
                u = l("782340"),
                d = l("389341");

            function c(t) {
                return (0, n.jsx)("svg", {
                    ...(0, s.default)({
                        ...t
                    }),
                    width: "25",
                    height: "48",
                    viewBox: "0 0 25 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        d: "M22.6014 22.1003C20.4432 20.6855 18.6067 18.8326 17.2112 16.6618C15.8157 14.4911 14.8925 12.0511 14.5014 9.50028L13.2014 0.700277C13.1553 0.497624 13.0404 0.317179 12.8764 0.189581C12.7123 0.0619821 12.5092 -0.00490199 12.3014 0.000279992C12.1055 -0.00125605 11.9158 0.0691675 11.7683 0.198194C11.6209 0.327221 11.5259 0.505874 11.5014 0.700277L10.1014 9.50028C9.74796 12.0629 8.8402 14.5177 7.44131 16.6938C6.04242 18.8698 4.18605 20.7148 2.00143 22.1003L0.901394 22.8003C0.770775 22.8872 0.665162 23.0067 0.594998 23.1471C0.524833 23.2874 0.49259 23.4436 0.501431 23.6003C0.49259 23.7569 0.524833 23.9132 0.594998 24.0535C0.665162 24.1938 0.770775 24.3134 0.901394 24.4003L2.00143 25.1003C4.18605 26.4857 6.04242 28.3307 7.44131 30.5068C8.8402 32.6828 9.74796 35.1376 10.1014 37.7003L11.5014 46.4003C11.5014 46.6125 11.5857 46.8159 11.7357 46.966C11.8858 47.116 12.0892 47.2003 12.3014 47.2003C12.5238 47.2017 12.7388 47.1207 12.9049 46.973C13.0711 46.8252 13.1767 46.6212 13.2014 46.4003L14.5014 37.7003C14.8925 35.1495 15.8157 32.7095 17.2112 30.5387C18.6067 28.368 20.4432 26.5151 22.6014 25.1003L23.8014 24.4003C24.0329 24.1951 24.1761 23.9085 24.2014 23.6003C24.1761 23.292 24.0329 23.0054 23.8014 22.8003L22.6014 22.1003Z",
                        fill: "currentColor"
                    })
                })
            }

            function f(t) {
                let {
                    className: e,
                    forceUseColorForSparkles: l = !1,
                    shouldInheritTextColor: r = !1,
                    shouldInheritBackgroundColor: s = !1
                } = t;
                return (0, n.jsx)(i.default, {
                    className: e,
                    forceUseColor: l,
                    children: (0, n.jsx)(o.TextBadge, {
                        disableColor: !0,
                        className: a(d.tag, {
                            [d.inheritTextColor]: r,
                            [d.inheritBackgroundColor]: s
                        }),
                        text: u.default.Messages.NEW
                    })
                })
            }
        },
        125835: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var r = l("414456"),
                a = l.n(r),
                s = l("642032"),
                o = l("625948");

            function i(t) {
                let {
                    className: e,
                    children: l,
                    forceUseColor: r = !1,
                    hideStars: i
                } = t;
                return (0, n.jsxs)("span", {
                    className: a(o.container, e, {
                        [o.containerColored]: r
                    }),
                    children: [l, i ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(s.default, {
                            foreground: o.sparkleStarTopRight
                        }), (0, n.jsx)(s.default, {
                            foreground: o.sparkleStarRight
                        }), (0, n.jsx)(s.default, {
                            foreground: o.sparkleStarBottomLeft
                        })]
                    })]
                })
            }
        },
        617917: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return L
                }
            }), l("222007");
            var n = l("37983"),
                r = l("884691"),
                a = l("414456"),
                s = l.n(a),
                o = l("77078"),
                i = l("244201"),
                u = l("685665"),
                d = l("181114"),
                c = l("427459"),
                f = l("954296"),
                _ = l("49111"),
                p = l("782340"),
                S = l("921756"),
                L = t => {
                    let {
                        analyticsLocation: e,
                        analyticsSourceLocation: l,
                        guild: a,
                        buttonText: L,
                        targetBoostedGuildTier: C,
                        onClose: h = () => {},
                        closeLayer: y = () => {},
                        pauseAnimation: E = !1,
                        applicationId: m,
                        handleSubscribeModalClose: O,
                        withHighlight: A = !1,
                        ...T
                    } = t, {
                        analyticsLocations: I
                    } = (0, u.default)(), g = (0, i.useAppContext)(), U = g === _.AppContext.POPOUT, [M, P] = r.useState(!1), w = null != C ? Math.max((0, c.getNumberOfAppliedBoostsNeededForTier)(a, C), 1) : 1, B = (0, c.generateBlockGuildSubscriptionPurchasesNode)(), v = async () => {
                        P(!0), await (0, f.addAppliedGuildBoosts)({
                            analyticsLocations: I,
                            analyticsLocation: e,
                            analyticsSourceLocation: l,
                            guild: a,
                            numberOfBoostsToAdd: w,
                            onClose: h,
                            closeLayer: y,
                            inPopout: U,
                            applicationId: m,
                            handleSubscribeModalClose: O
                        }), P(!1)
                    };
                    return null != B ? (0, n.jsx)(o.Tooltip, {
                        text: B,
                        "aria-label": !1,
                        children: t => (0, n.jsx)(d.default, {
                            ...t,
                            disabled: !0,
                            size: o.Button.Sizes.SMALL,
                            pauseAnimation: E,
                            ...T,
                            children: null != L ? L : p.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                        })
                    }) : (0, n.jsx)(d.default, {
                        size: o.Button.Sizes.SMALL,
                        ...T,
                        className: s(T.className, {
                            [S.buttonHighlighted]: A
                        }),
                        submitting: M,
                        onClick: v,
                        pauseAnimation: E,
                        children: null != L ? L : p.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                    })
                }
        },
        954296: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                addAppliedGuildBoosts: function() {
                    return S
                }
            }), l("424973"), l("462568"), l("222007");
            var n = l("37983");
            l("884691");
            var r = l("77078"),
                a = l("850068"),
                s = l("583367"),
                o = l("775433"),
                i = l("697218"),
                u = l("625634"),
                d = l("10514"),
                c = l("599110"),
                f = l("427459"),
                _ = l("163732"),
                p = l("49111");
            async function S(t) {
                let {
                    analyticsLocations: e,
                    analyticsLocation: S,
                    analyticsSourceLocation: L,
                    numberOfBoostsToAdd: C,
                    onClose: h,
                    closeLayer: y,
                    onSubscriptionConfirmation: E,
                    guild: m,
                    handleSubscribeModalClose: O,
                    disablePremiumUpsell: A,
                    inPopout: T,
                    applicationId: I
                } = t, g = T ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, U = i.default.getCurrentUser();
                if (null == U) return;
                if (!U.verified) {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await l.el("899917").then(l.bind(l, "899917"));
                        return e => {
                            let {
                                onClose: l,
                                ...r
                            } = e;
                            return (0, n.jsx)(t, {
                                ...r,
                                onClose: l
                            })
                        }
                    }, {
                        contextKey: g
                    });
                    return
                }
                let M = [];
                !d.default.isLoadedForPremiumSKUs() && M.push((0, o.fetchPremiumSubscriptionPlans)()), !u.default.hasFetched && (M.push(a.fetchSubscriptions()), M.push((0, s.fetchGuildBoostSlots)())), M.length > 0 && await Promise.allSettled(M);
                let P = (0, f.getAvailableGuildBoostSlots)(u.default.boostSlots),
                    w = P.length,
                    B = t => {
                        null == h || h(), null == O || O(t)
                    };
                if (w > 0 && (null == C || w >= C)) {
                    let t;
                    1 === w ? t = P.slice(0, 1) : null != C && (t = P.slice(0, C));
                    let e = await (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("247760").then(l.bind(l, "247760"));
                        return l => {
                            let {
                                onClose: r,
                                ...a
                            } = l;
                            return (0, n.jsx)(e, {
                                ...a,
                                onClose: t => {
                                    r(), B(t)
                                },
                                selectedGuild: m,
                                locationSection: p.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                guildBoostSlots: t
                            })
                        }
                    }, {
                        onCloseRequest: () => {
                            null != e && (0, r.closeModal)(e), B(!1)
                        },
                        contextKey: g
                    })
                } else(0, _.default)({
                    analyticsLocations: e,
                    analyticsLocation: S,
                    analyticsSourceLocation: L,
                    guildId: m.id,
                    closeLayer: () => {
                        null == h || h(), null == y || y(), c.default.track(p.AnalyticEvents.MODAL_DISMISSED, {
                            type: p.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_section: S.section
                        })
                    },
                    totalNumberOfSlotsToAssign: null != C ? C : 1,
                    onCloseModal: B,
                    disablePremiumUpsell: A,
                    onSubscriptionConfirmation: E,
                    inPopout: T,
                    applicationId: I
                })
            }
        },
        163732: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return _
                }
            }), l("222007");
            var n = l("37983");
            l("884691");
            var r = l("77078"),
                a = l("404118"),
                s = l("850068"),
                o = l("775433"),
                i = l("521012"),
                u = l("599110"),
                d = l("719923"),
                c = l("49111"),
                f = l("782340");
            async function _(t) {
                let {
                    analyticsLocations: e,
                    analyticsLocation: _,
                    analyticsSourceLocation: p,
                    guildId: S,
                    closeLayer: L,
                    onCloseModal: C,
                    totalNumberOfSlotsToAssign: h = 1,
                    disablePremiumUpsell: y,
                    onSubscriptionConfirmation: E,
                    inPopout: m,
                    applicationId: O
                } = t, A = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, T = i.default.getPremiumTypeSubscription();
                if (null != T && T.isPurchasedExternally && null != T.paymentGateway) {
                    null != L && L(), a.default.show({
                        title: f.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[T.paymentGateway]
                        }),
                        body: f.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[T.paymentGateway],
                            subscriptionManagementLink: (0, d.getExternalSubscriptionMethodUrl)(T.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        })
                    });
                    return
                }
                Promise.all([(0, s.fetchPaymentSources)(), (0, o.fetchPremiumSubscriptionPlans)()]);
                let I = await (0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await l.el("860634").then(l.bind(l, "860634"));
                    return l => {
                        let {
                            transitionState: r,
                            onClose: a
                        } = l;
                        return (0, n.jsx)(t, {
                            transitionState: r,
                            onClose: t => {
                                a(), null == C || C(t)
                            },
                            analyticsLocations: e,
                            analyticsLocation: _,
                            analyticsSourceLocation: null != p ? p : _,
                            guildId: S,
                            totalNumberOfSlotsToAssign: h,
                            closeGuildPerksModal: L,
                            disablePremiumUpsell: y,
                            onSubscriptionConfirmation: E,
                            applicationId: O
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        u.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
                            type: c.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
                            location: _
                        })
                    },
                    onCloseRequest: () => {
                        null != I && (0, r.closeModal)(I), null == C || C(!1)
                    },
                    contextKey: A
                })
            }
        },
        783111: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return a
                }
            });
            var n = l("666038");
            class r extends n.default {
                static createFromServer(t) {
                    return new r({
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
            var a = r
        },
        46829: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var r = l("469563"),
                a = l("906069"),
                s = l("75196"),
                o = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: l = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...o
                    } = t;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: e,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: r,
                            className: a,
                            d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8 6C9.104 6 10 6.896 10 8C10 9.105 9.104 10 8 10C6.896 10 6 9.105 6 8C6 6.896 6.896 6 8 6ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14ZM16 10C14.896 10 14 9.105 14 8C14 6.896 14.896 6 16 6C17.104 6 18 6.896 18 8C18 9.105 17.104 10 16 10Z"
                        })
                    })
                }, a.ReactionIcon, void 0, {
                    size: 24
                })
        },
        118503: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return a
                }
            });
            var n = l("37983");
            l("884691");
            var r = l("75196");

            function a(t) {
                let {
                    width: e = 24,
                    height: l = 24,
                    color: a = "currentColor",
                    foreground: s,
                    ...o
                } = t;
                return (0, n.jsxs)("svg", {
                    ...(0, r.default)(o),
                    width: e,
                    height: l,
                    viewBox: "0 0 8 12",
                    children: [(0, n.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: a,
                        className: s
                    }), (0, n.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: a,
                        className: s
                    })]
                })
            }
        },
        642032: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return a
                }
            });
            var n = l("37983");
            l("884691");
            var r = l("75196");

            function a(t) {
                let {
                    width: e = 14,
                    height: l = 13,
                    color: a = "currentColor",
                    foreground: s,
                    ...o
                } = t;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)({
                        ...o
                    }),
                    width: e,
                    height: l,
                    viewBox: "0 0 ".concat(e, " ").concat(l),
                    className: s,
                    fill: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
                        fill: "currentColor"
                    })
                })
            }
        },
        436418: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                ReactionIcon: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var r = l("669491"),
                a = l("82169");
            let s = t => {
                let {
                    width: e = 24,
                    height: l = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = t;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        814121: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                UploadIcon: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var r = l("669491"),
                a = l("82169");
            let s = t => {
                let {
                    width: e = 24,
                    height: l = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = t;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
                        className: o
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=93492.aa355f688d52a2b9a9bf.js.map