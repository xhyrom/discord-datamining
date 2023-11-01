(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36973"], {
        32974: function(e, t, n) {
            "use strict";
            e.exports = n.p + "72b9b5356f57edb2ba51.svg"
        },
        137852: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a6ac55e775bc50ff5bff.svg"
        },
        511117: function(e, t, n) {
            "use strict";
            e.exports = n.p + "52e736e812c20d1dfda1.svg"
        },
        55620: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchAllStoreListingsForApplication: function() {
                    return d
                },
                fetchStoreListingForSku: function() {
                    return p
                },
                fetchStoreListingById: function() {
                    return f
                },
                fetchStoreListingForApplication: function() {
                    return S
                },
                matureAgree: function() {
                    return h
                },
                matureDisagree: function() {
                    return _
                },
                joinPublishedStoreListingSkuGuild: function() {
                    return I
                },
                goToSKUStoreListing: function() {
                    return E
                },
                goToApplicationStoreListing: function() {
                    return m
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("84460"),
                l = n("393414");
            n("546463");
            var s = n("552712");
            n("698041");
            var o = n("167726"),
                u = n("271560"),
                c = n("49111");

            function d(e) {
                return (0, u.httpGetWithCountryCodeQuery)({
                    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
                    query: {
                        application_id: e
                    },
                    oldFormErrors: !0
                }).then(e => (r.default.dispatch({
                    type: "STORE_LISTINGS_FETCH_SUCCESS",
                    storeListings: e.body
                }), e.body))
            }

            function p(e) {
                let t = s.default.get(e),
                    n = null != t && (o.default.inTestModeForApplication(t.applicationId) || a.default.inDevModeForApplication(t.applicationId));
                return (0, u.httpGetWithCountryCodeQuery)(n ? c.Endpoints.STORE_LISTINGS_SKU(e) : c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
                    n ? r.default.dispatch({
                        type: "STORE_LISTINGS_FETCH_SUCCESS",
                        storeListings: e.body
                    }) : r.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function f(e) {
                return (0, u.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(e)).then(e => {
                    r.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function S(e) {
                return (0, u.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
                    r.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function h() {
                r.default.dispatch({
                    type: "APPLICATION_STORE_MATURE_AGREE"
                })
            }

            function _() {
                (0, l.transitionTo)(c.Routes.APPLICATION_STORE)
            }

            function I(e) {
                return i.default.post({
                    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
                    oldFormErrors: !0
                })
            }

            function E(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, u.getStoreListingLocation)(e, t);
                (0, l.transitionTo)(n, i)
            }

            function m(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, u.getApplicationStoreListingLocation)(e, t);
                (0, l.transitionTo)(n, i)
            }
        },
        737960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("308723");

            function l(e) {
                return r.forwardRef(function(t, n) {
                    let l = r.useRef();
                    return r.useImperativeHandle(n, () => ({
                        triggerResize: () => {
                            var e;
                            null === (e = l.current) || void 0 === e || e.onResize()
                        }
                    })), (0, i.jsx)(a.default, {
                        ref: l,
                        children: n => {
                            let {
                                width: r,
                                height: a
                            } = n;
                            return (0, i.jsx)(e, {
                                ...t,
                                width: r,
                                height: a
                            })
                        }
                    })
                })
            }
        },
        834897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(() => window.matchMedia(e).matches);
                return (0, i.useEffect)(() => {
                    let t = window.matchMedia(e),
                        i = e => {
                            n(null == e ? void 0 : e.matches)
                        };
                    return i(t), t.addListener(i), () => t.removeListener(i)
                }, [e]), t
            }
        },
        425480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY: function() {
                    return i
                },
                RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY: function() {
                    return r
                }
            });
            let i = "(max-width: 485px)",
                r = "(max-height: 450px)"
        },
        829805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationBenefitsModalIcon: function() {
                    return c
                },
                ApplicationBenefitsModalHeading: function() {
                    return d
                },
                ApplicationBenefitsModalDivider: function() {
                    return p
                },
                ApplicationBenefitsModalDescription: function() {
                    return f
                },
                ApplicationBenefitsModalBenefits: function() {
                    return S
                },
                ApplicationBenefitsModalContent: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("77078"),
                s = n("850644"),
                o = n("899604"),
                u = n("114067");
            let c = e => {
                    let {
                        application: t,
                        asset: n,
                        className: r,
                        ...a
                    } = e;
                    return (0, i.jsx)(s.default, {
                        application: t,
                        size: s.ApplicationIconSize.MEDIUM,
                        asset: n,
                        className: r,
                        ...a
                    })
                },
                d = e => {
                    let {
                        children: t,
                        className: n,
                        id: r,
                        ...s
                    } = e;
                    return (0, i.jsx)(l.Heading, {
                        className: a(u.header, n),
                        variant: "heading-xl/extrabold",
                        id: r,
                        ...s,
                        children: t
                    })
                };

            function p() {
                return (0, i.jsx)("hr", {
                    className: u.divider
                })
            }
            let f = e => {
                    let {
                        className: t,
                        title: n,
                        description: r,
                        ...a
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: t,
                        ...a,
                        children: [(0, i.jsx)(l.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            children: n
                        }), (0, i.jsx)(l.Heading, {
                            variant: "heading-sm/normal",
                            color: "header-secondary",
                            children: r
                        })]
                    })
                },
                S = e => {
                    let {
                        benefits: t,
                        className: n,
                        ...r
                    } = e;
                    return (0, i.jsx)("div", {
                        className: a(u.benefitsContainer, n),
                        ...r,
                        children: t.map(e => {
                            var t, n;
                            return (0, i.jsx)(o.default, {
                                className: u.benefit,
                                benefit: e
                            }, "".concat(e.ref_type, "-").concat(null === (t = e.emoji) || void 0 === t ? void 0 : t.id, "-").concat(null === (n = e.emoji) || void 0 === n ? void 0 : n.name))
                        })
                    })
                },
                h = e => {
                    let {
                        children: t,
                        className: n,
                        ...r
                    } = e;
                    return (0, i.jsx)("div", {
                        className: a(u.container, n),
                        ...r,
                        children: t
                    })
                }
        },
        850644: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationIconSize: function() {
                    return r
                },
                default: function() {
                    return p
                }
            });
            var i, r, a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                o = n("315102"),
                u = n("271560"),
                c = n("969850");
            (i = r || (r = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
            let d = {
                [r.SMALL]: c.small,
                [r.MEDIUM]: c.medium
            };
            var p = e => {
                let t, {
                    application: n,
                    size: i,
                    asset: r,
                    className: l
                } = e;
                return t = null != r ? (0, u.getAssetURL)(n.id, r, i) : o.default.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: i
                }), (0, a.jsx)("img", {
                    alt: "",
                    src: t,
                    className: s(c.icon, d[i], l)
                })
            }
        },
        910861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("77078"),
                s = n("396671");

            function o(e) {
                let {
                    children: t,
                    className: n,
                    size: r = l.Button.Sizes.SMALL,
                    ...o
                } = e;
                return (0, i.jsx)(l.Button, {
                    ...o,
                    size: r,
                    className: a(s.button, n),
                    children: t
                })
            }
        },
        333955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PurchaseHeader: function() {
                    return _
                },
                BenefitsConfirmation: function() {
                    return I
                },
                PurchaseConfirmation: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("834897"),
                l = n("85336"),
                s = n("159149"),
                o = n("650484"),
                u = n("945330"),
                c = n("829805"),
                d = n("425480"),
                p = n("782340"),
                f = n("370184"),
                S = n("137852"),
                h = n("511117");
            let _ = e => {
                    let {
                        step: t,
                        onClose: n
                    } = e, s = (0, a.default)(d.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                    return t === l.Step.CONFIRM || t === l.Step.BENEFITS ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                        className: f.headerContainer,
                        children: [!s && (0, i.jsx)("div", {
                            className: f.headerImageContainer,
                            "aria-hidden": "true",
                            children: (0, i.jsx)("img", {
                                src: h,
                                alt: "",
                                className: f.headerImage
                            })
                        }), (0, i.jsx)(r.Clickable, {
                            className: f.closeContainer,
                            onClick: () => n(),
                            "aria-label": p.default.Messages.CLOSE,
                            children: (0, i.jsx)(u.default, {
                                className: f.closeIcon
                            })
                        })]
                    })
                },
                I = e => {
                    let {
                        listing: t,
                        application: n,
                        title: r,
                        subtitle: a,
                        description: l
                    } = e;
                    return null == n ? null : (0, i.jsx)("div", {
                        className: f.confirmationContainer,
                        children: (0, i.jsxs)(c.ApplicationBenefitsModalContent, {
                            children: [(0, i.jsx)(c.ApplicationBenefitsModalIcon, {
                                application: n,
                                asset: t.image_asset
                            }), (0, i.jsx)(c.ApplicationBenefitsModalHeading, {
                                children: r
                            }), (0, i.jsx)(c.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(c.ApplicationBenefitsModalDescription, {
                                title: a,
                                description: l
                            }), (0, i.jsx)(c.ApplicationBenefitsModalBenefits, {
                                benefits: t.sku_benefits.benefits
                            })]
                        })
                    })
                };

            function E(e) {
                let {
                    listing: t,
                    onConfirm: n,
                    subscription: a
                } = e;
                return (0, i.jsxs)("div", {
                    className: f.purchaseConfirmation,
                    children: [(0, i.jsx)("img", {
                        src: S,
                        alt: "",
                        width: 300,
                        height: 126
                    }), (0, i.jsx)(r.Heading, {
                        className: f.confirmationTitle,
                        variant: "heading-xl/extrabold",
                        color: "header-primary",
                        children: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                            tier: t.name
                        })
                    }), (0, i.jsx)(r.Text, {
                        className: f.confirmationSubtitle,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == a ? void 0 : a.currentPeriodEnd
                        })
                    }), (0, i.jsx)(o.PaymentPortalFooter, {
                        children: (0, i.jsx)(s.default, {
                            onPrimary: n,
                            primaryCTA: s.CTAType.CONTINUE,
                            primaryText: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                        })
                    })]
                })
            }
        },
        899604: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("77078"),
                s = n("430568"),
                o = n("888266");

            function u(e) {
                let {
                    benefit: t,
                    className: n,
                    emojiContainerClassName: r,
                    showsDescription: u = !0,
                    nameTextVariant: c = "text-md/medium",
                    nameTextColor: d = "header-primary"
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(o.container, n),
                    children: [null != t.emoji && (0, i.jsx)("div", {
                        className: a(o.emojiContainer, r),
                        children: (0, i.jsx)(s.default, {
                            emojiId: t.emoji.id,
                            emojiName: t.emoji.name,
                            animated: t.emoji.animated
                        })
                    }), (0, i.jsxs)("div", {
                        className: o.infoContainer,
                        children: [(0, i.jsx)(l.Text, {
                            variant: c,
                            color: d,
                            className: o.name,
                            children: t.name
                        }), u && (0, i.jsx)(l.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: t.description
                        })]
                    })]
                })
            }
        },
        599733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                confirmNoSharedServerSubscribeWarningModal: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078");

            function a(e) {
                let {
                    application: t,
                    onConfirm: a,
                    onCancel: l
                } = e;
                return (0, r.openModalLazy)(async () => {
                    let {
                        ConfirmNoSharedServerSubscribeWarningModal: e
                    } = await n.el("411638").then(n.bind(n, "411638"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        application: t,
                        onConfirm: a,
                        onCancel: l
                    })
                }, {
                    modalKey: "application-user-subscribe-no-shared-server-warning"
                }), Promise.resolve()
            }
        },
        153335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("627445"),
                l = n.n(a),
                s = n("446674"),
                o = n("913144"),
                u = n("775433"),
                c = n("685665"),
                d = n("598981"),
                p = n("846286"),
                f = n("697218"),
                S = n("10514"),
                h = n("650509"),
                _ = n("90592"),
                I = n("333955"),
                E = n("599733"),
                m = n("49111"),
                T = n("782340"),
                A = e => {
                    var t;
                    let n, {
                            listing: a,
                            guildId: A,
                            groupListingId: g,
                            analyticsLocation: C,
                            showBenefitsFirst: N,
                            onComplete: v,
                            forcesTransitionToGuild: L
                        } = e,
                        F = null == a ? void 0 : a.subscription_plans[0],
                        b = null == a ? void 0 : a.application_id,
                        O = null == F ? void 0 : F.id,
                        P = (null == a ? void 0 : a.published) === !0,
                        y = null == F ? void 0 : F.sku_id,
                        H = (0, s.useStateFromStores)([S.default], () => null != O ? S.default.get(O) : null),
                        R = (0, h.useApplication)(b),
                        x = (0, h.useSubscriptionListingsForGroup)(g, {
                            includeSoftDeleted: !0
                        }),
                        D = x.map(e => e.subscription_plans[0].id),
                        {
                            analyticsLocations: M
                        } = (0, c.default)(),
                        {
                            activeSubscription: U,
                            activeEntitlement: G
                        } = (0, h.useActiveSubscriptionListingForApplication)(b, A),
                        k = (0, h.useEligibleApplicationSubscriptionGuilds)(b, A),
                        j = (0, d.default)(),
                        w = null != a && (0, _.isApplicationUserSubscription)(a.sku_flags),
                        B = null != G && G.userId === (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                        V = null == G || B,
                        K = null == G || D.length > 1,
                        z = null != A || k.length > 0,
                        W = w && B,
                        Q = null != H && null != R && V && K && (z || w) && !W;
                    V ? z ? W && null != H && (n = T.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
                        tierName: H.name
                    })) : n = T.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = T.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(() => {
                        P && null != y && j && o.default.wait(() => {
                            (0, u.fetchSubscriptionPlansForSKU)(y)
                        })
                    }, [P, y, j]);
                    let Y = r.useCallback(() => {
                        l(null != a, "No subscription listing"), l(null != R, "No application"), l(null != F, "No subscription plan"), l(P, "Cannot purchase this unpublished plan");
                        let e = () => {
                            (0, p.openApplicationSubscriptionPaymentModal)({
                                activeSubscription: U,
                                analyticsSubscriptionType: m.SubscriptionTypes.APPLICATION,
                                analyticsLocations: M,
                                analyticsLocation: C,
                                renderHeader: (e, t, n) => (0, i.jsx)(I.PurchaseHeader, {
                                    step: n,
                                    onClose: () => t(!1)
                                }),
                                initialPlanId: F.id,
                                skuId: F.sku_id,
                                guildId: A,
                                eligibleApplicationSubscriptionGuilds: k,
                                planGroup: D,
                                listing: a,
                                application: R,
                                showBenefitsFirst: N,
                                onComplete: v,
                                forcesTransitionToGuild: L
                            })
                        };
                        !z && w ? (0, E.confirmNoSharedServerSubscribeWarningModal)({
                            application: R,
                            onConfirm: e,
                            onCancel: () => {}
                        }) : e()
                    }, [P, a, F, D, R, A, z, w, M, C, U, N, k, v, L]);
                    return {
                        openModal: Y,
                        canOpenModal: Q,
                        cannotOpenReason: n
                    }
                }
        },
        337026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        201155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowApplicationInGDM: function() {
                    return l
                }
            });
            var i = n("65597"),
                r = n("42203"),
                a = n("337026");

            function l(e) {
                let t = (0, i.default)([r.default], () => r.default.getChannel(e)),
                    {
                        enabled: n
                    } = a.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(e) {
                    return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
                }(t)
            }
        },
        560350: function(e, t, n) {
            "use strict";

            function i(e) {
                return {
                    id: e.id,
                    filename: e.filename,
                    size: e.size,
                    width: e.width,
                    height: e.height,
                    mimeType: e.mime_type
                }
            }
            n.r(t), n.d(t, {
                transformStoreAssetFromServer: function() {
                    return i
                }
            })
        },
        846286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openApplicationSubscriptionPaymentModal: function() {
                    return _
                },
                openActivityApplicationPaymentModal: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                a = n.n(r),
                l = n("77078"),
                s = n("251472"),
                o = n("823411"),
                u = n("55620"),
                c = n("524503"),
                d = n("186211"),
                p = n("90592"),
                f = n("299285"),
                S = n("546463"),
                h = n("49111");

            function _(e) {
                let {
                    initialPlanId: t,
                    activeSubscription: r,
                    analyticsObject: a,
                    analyticsLocation: s,
                    analyticsLocations: o,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: d,
                    skuId: p,
                    guildId: f,
                    reviewWarningMessage: S,
                    listing: _,
                    application: I,
                    showBenefitsFirst: E,
                    eligibleApplicationSubscriptionGuilds: m,
                    onComplete: T,
                    forcesTransitionToGuild: A
                } = e;
                (0, l.openModalLazy)(async () => {
                    let {
                        PaymentContextProvider: e
                    } = await n.el("642906").then(n.bind(n, "642906")), l = (await n.el("452113").then(n.bind(n, "452113"))).default, {
                        getApplicationSubscriptionPaymentSteps: h
                    } = await n.el("590749").then(n.bind(n, "590749")), g = h({
                        guildId: f,
                        application: I,
                        listing: _,
                        showBenefitsFirst: E,
                        eligibleApplicationSubscriptionGuilds: m
                    });
                    return n => (0, i.jsx)(e, {
                        applicationId: I.id,
                        activeSubscription: r,
                        stepConfigs: g,
                        skuIDs: [p],
                        children: (0, i.jsx)(l, {
                            ...n,
                            initialPlanId: t,
                            skuId: p,
                            analyticsLocations: o,
                            analyticsObject: a,
                            analyticsLocation: s,
                            analyticsSubscriptionType: u,
                            renderHeader: c,
                            planGroup: d,
                            reviewWarningMessage: S,
                            applicationId: I.id,
                            guildId: null != f ? f : void 0,
                            onComplete: T,
                            forcesTransitionToGuild: A
                        })
                    })
                }, {
                    onCloseRequest: h.NOOP
                })
            }
            let I = async e => {
                var t;
                let n = f.default.getApplication(e);
                if (null != n) return n;
                await o.default.fetchApplications([e], !1);
                let i = null !== (t = f.default.getApplication(e)) && void 0 !== t ? t : S.default.getGame(e);
                return a(null != i, "Failed to find application with ID %s", e), i
            }, E = async e => {
                let t = d.default.getSubscriptionGroupListingForApplication(e);
                if (null != t) return t;
                let n = await (0, u.fetchAllStoreListingsForApplication)(e),
                    i = n.find(e => e.sku.type === h.SKUTypes.SUBSCRIPTION_GROUP);
                a(null != i, "Failed to find subscription store listing"), await (0, c.fetchAllSubscriptionListingsDataForApplication)(e, null == i ? void 0 : i.id);
                let r = d.default.getSubscriptionGroupListingForApplication(e);
                return a(null != r, "Failed to find subscription group listing"), r
            }, m = async (e, t) => {
                let n = await (0, s.fetchUserEntitlementsForApplication)(e),
                    i = n.find(e => e.sku_id === t);
                a(null == i, "User already has an active subscription to this SKU")
            };
            async function T(e) {
                let {
                    applicationId: t,
                    skuId: n,
                    initialPlanId: i,
                    analyticsLocationObject: r,
                    analyticsLocations: l,
                    renderHeader: s
                } = e, o = await I(t), u = await E(t), c = (0, p.getPayableSubscriptionListing)(u);
                a(null != c, "Failed to find subscription listing");
                let d = (0, p.isApplicationUserSubscription)(c.sku_flags);
                a(d, "Guild application subscriptions unsupported!"), a(c.published, "Subscription listing not published"), await m(t, n);
                let f = {
                    initialPlanId: null != i ? i : null == c ? void 0 : c.subscription_plans[0].id,
                    activeSubscription: null,
                    analyticsLocations: l,
                    analyticsLocationObject: r,
                    analyticsSubscriptionType: h.SubscriptionTypes.APPLICATION,
                    renderHeader: s,
                    planGroup: u.subscription_listings_ids,
                    skuId: n,
                    guildId: null,
                    eligibleApplicationSubscriptionGuilds: [],
                    showBenefitsFirst: !1,
                    application: o,
                    listing: c
                };
                _(f)
            }
        },
        970755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchApplicationsShelf: function() {
                    return o
                },
                fetchPrivateChannelIntegrations: function() {
                    return u
                },
                deletePrivateChannelIntegration: function() {
                    return c
                }
            }), n("746379");
            var i = n("981980"),
                r = n("872717"),
                a = n("913144");
            n("253981");
            var l = n("140596"),
                s = n("49111");
            n("843455"), n("782340");

            function o() {
                l.default.getApplicationsShelfFetchState() === l.FetchState.NOT_FETCHED && (a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), r.default.get(s.Endpoints.APPLICATIONS_SHELF).then(e => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: e.body.applications
                })).catch(e => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function u(e) {
                let t = new i.default(1e3, 5e3);
                a.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                }), r.default.get({
                    url: s.Endpoints.CHANNEL_INTEGRATIONS(e),
                    backoff: t,
                    retries: 10
                }).then(t => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: t.body
                    })
                }).catch(() => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: e
                    })
                })
            }

            function c(e, t) {
                return r.default.delete(s.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
                    var t;
                    if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
                })
            }
        },
        252063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePrivateChannelIntegrationState: function() {
                    return u
                }
            });
            var i = n("884691"),
                r = n("446674"),
                a = n("201155"),
                l = n("21121"),
                s = n("970755"),
                o = n("140596");

            function u(e) {
                let {
                    channelId: t
                } = e;
                (0, l.useInMainTabsExperiment)();
                let n = (0, a.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: u,
                        applicationsShelf: c,
                        integrationsFetchState: d,
                        applicationsShelfFetchState: p
                    } = (0, r.useStateFromStoresObject)([o.default], () => ({
                        installedIntegrations: o.default.getIntegrations(t),
                        applicationsShelf: o.default.getApplicationsShelf(),
                        integrationsFetchState: o.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((d === o.FetchState.NOT_FETCHED || d === o.FetchState.FETCH_FAILED) && (0, s.fetchPrivateChannelIntegrations)(t), (p === o.FetchState.NOT_FETCHED || p === o.FetchState.FETCH_FAILED) && (0, s.fetchApplicationsShelf)())
                }, [n, t, d, p]);
                let f = new Set(u.map(e => e.application.id)),
                    S = c.filter(e => !f.has(e.id));
                return {
                    installedIntegrations: u,
                    availableApplications: S,
                    applicationsShelf: c,
                    fetched: d !== o.FetchState.NOT_FETCHED && d !== o.FetchState.FETCHING && p !== o.FetchState.NOT_FETCHED && p !== o.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        140596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return r
                },
                default: function() {
                    return I
                }
            });
            var i, r, a = n("446674"),
                l = n("913144"),
                s = n("653047"),
                o = n("946028");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.FETCH_FAILED = 3] = "FETCH_FAILED";
            let u = new Map,
                c = new Map,
                d = [],
                p = r.NOT_FETCHED,
                f = [];
            class S extends a.default.Store {
                getIntegrations(e) {
                    var t;
                    return null !== (t = u.get(e)) && void 0 !== t ? t : f
                }
                getIntegration(e, t) {
                    var n;
                    return null === (n = u.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
                }
                getAllIntegrations() {
                    return u
                }
                getIntegrationsFetchState(e) {
                    var t;
                    return null !== (t = c.get(e)) && void 0 !== t ? t : r.NOT_FETCHED
                }
                getApplicationsShelfFetchState() {
                    return p
                }
                getApplicationsShelf() {
                    return d
                }
            }

            function h(e) {
                return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
            }
            S.displayName = "PrivateChannelIntegrationStore";
            let _ = new S(l.default, {
                LOGOUT() {
                    u.clear()
                },
                CONNECTION_OPEN() {
                    u.clear(), c.clear()
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || c.get(t) !== r.FETCH_FAILED) return !1;
                    c.set(t, r.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    p = r.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
                    let {
                        applications: t
                    } = e;
                    d = t.map(s.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), p = r.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    p = r.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
                    let {
                        channelId: t
                    } = e;
                    u.set(t, null), c.set(t, r.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t,
                        integrations: n
                    } = e;
                    u.set(t, h(n.map(o.createPrivateChannelIntegration))), c.set(t, r.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
                    let {
                        channelId: t
                    } = e;
                    c.set(t, r.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e, n = u.get(t.channel_id);
                    if (null == n) return !1;
                    u.set(t.channel_id, h([...n, (0, o.createPrivateChannelIntegration)(t)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e, n = u.get(t.channel_id);
                    if (null == n) return !1;
                    let i = (0, o.createPrivateChannelIntegration)(t),
                        r = n.findIndex(e => e.application.id === i.application.id),
                        a = [...n]; - 1 === r ? a.push(i) : a[r] = i, u.set(i.channel_id, h(a))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t,
                        applicationId: n
                    } = e, i = u.get(t);
                    if (null == i) return !1;
                    u.set(t, i.filter(e => e.application.id !== n))
                },
                CHANNEL_DELETE(e) {
                    let {
                        channel: t
                    } = e;
                    return u.delete(t.id)
                }
            });
            var I = _
        },
        928460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("666038"),
                r = n("560350"),
                a = n("766274");
            class l extends i.default {
                static createFromServer(e) {
                    let t = e.staff_notes;
                    return new l({
                        id: e.id,
                        skuId: e.sku.id,
                        summary: e.summary,
                        tagline: e.tagline,
                        flavorText: e.flavor_text,
                        description: e.description,
                        childSkuIds: null != e.child_skus ? e.child_skus.map(e => e.id) : null,
                        alternativeSkuIds: null != e.alternative_skus ? e.alternative_skus.map(e => e.id) : null,
                        carouselItems: null != e.carousel_items ? e.carousel_items.map(e => ({
                            assetId: e.asset_id,
                            youtubeVideoId: e.youtube_video_id
                        })) : null,
                        assets: null != e.assets ? e.assets.map(r.transformStoreAssetFromServer) : null,
                        staffNotes: null != t ? {
                            content: t.content,
                            user: null != t.user ? new a.default(t.user) : null
                        } : null,
                        guild: null != e.guild ? {
                            id: e.guild.id,
                            name: e.guild.name,
                            icon: e.guild.icon,
                            approximateMemberCount: e.guild.approximate_member_count,
                            approximatePresenceCount: e.guild.approximate_presence_count
                        } : null,
                        thumbnail: null != e.thumbnail ? (0, r.transformStoreAssetFromServer)(e.thumbnail) : null,
                        previewVideo: null != e.preview_video ? (0, r.transformStoreAssetFromServer)(e.preview_video) : null,
                        headerBackground: null != e.header_background ? (0, r.transformStoreAssetFromServer)(e.header_background) : null,
                        headerLogoDarkTheme: null != e.header_logo_dark_theme ? (0, r.transformStoreAssetFromServer)(e.header_logo_dark_theme) : null,
                        headerLogoLightTheme: null != e.header_logo_light_theme ? (0, r.transformStoreAssetFromServer)(e.header_logo_light_theme) : null,
                        boxArt: null != e.box_art ? (0, r.transformStoreAssetFromServer)(e.box_art) : null,
                        heroBackground: null != e.hero_background ? (0, r.transformStoreAssetFromServer)(e.hero_background) : null,
                        heroVideo: null != e.hero_video ? (0, r.transformStoreAssetFromServer)(e.hero_video) : null,
                        entitlementBranchId: e.entitlement_branch_id
                    })
                }
                isSlimDirectoryVersion() {
                    return null == this.description
                }
                constructor(e) {
                    super(), this.id = e.id, this.skuId = e.skuId, this.summary = e.summary, this.tagline = e.tagline, this.flavorText = e.flavorText, this.description = e.description, this.carouselItems = e.carouselItems || [], this.childSkuIds = e.childSkuIds || [], this.alternativeSkuIds = e.alternativeSkuIds || [], this.assets = e.assets || [], this.staffNotes = e.staffNotes, this.guild = e.guild, this.thumbnail = e.thumbnail || null, this.boxArt = e.boxArt || null, this.previewVideo = e.previewVideo || null, this.headerBackground = e.headerBackground || null, this.headerLogoDarkTheme = e.headerLogoDarkTheme || null, this.headerLogoLightTheme = e.headerLogoLightTheme || null, this.heroBackground = e.heroBackground || null, this.heroVideo = e.heroVideo || null, this.entitlementBranchId = e.entitlementBranchId || null
                }
            }
        },
        698041: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("446674"),
                a = n("913144"),
                l = n("915639"),
                s = n("928460"),
                o = n("449008");
            let u = {},
                c = {},
                d = {},
                p = {};

            function f(e) {
                let t = e.id,
                    n = e.sku.id,
                    i = u[t],
                    r = s.default.createFromServer(e);
                !(null != i && !i.isSlimDirectoryVersion() && r.isSlimDirectoryVersion()) && (!1 === e.published ? (null == d[n] && (d[n] = new Set), d[n].add(t)) : p[n] = t, u[t] = r)
            }

            function S(e, t) {
                return "".concat(e, ":").concat(t)
            }

            function h(e) {
                let {
                    storeListings: t
                } = e;
                for (let e of t) f(e)
            }

            function _() {
                u = {}, p = {}, d = {}, c = {}
            }

            function I() {
                if (i === l.default.locale) return !1;
                _(), i = l.default.locale
            }
            class E extends r.default.Store {
                initialize() {
                    this.waitFor(l.default), this.syncWith([l.default], I), i = l.default.locale
                }
                get(e) {
                    return u[e]
                }
                getForSKU(e, t) {
                    let n = p[e];
                    return null != t ? c[S(t, e)] : null != n ? u[n] : null
                }
                getUnpublishedForSKU(e) {
                    let t = d[e];
                    return null == t ? [] : Array.from(t).map(e => u[e]).filter(o.isNotNullish)
                }
                getForChannel(e, t) {
                    return c[S(e, t)]
                }
                getStoreListing(e) {
                    let {
                        storeListingId: t,
                        skuId: n,
                        channelId: i,
                        isTestMode: r
                    } = e;
                    if (r && null != n) {
                        let e = this.getUnpublishedForSKU(n);
                        if (null != e && e.length > 0) return e[0]
                    }
                    if (null != t) return this.get(t);
                    if (null != i) {
                        if (null == n) throw Error("getStoreListing with channel expects a skuId");
                        return this.getForChannel(i, n)
                    }
                    if (null != n) return this.getForSKU(n);
                    return null
                }
            }
            E.displayName = "StoreListingStore";
            var m = new E(a.default, {
                STORE_LISTINGS_FETCH_SUCCESS: h,
                APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: h,
                STORE_LISTING_FETCH_SUCCESS: function(e) {
                    let {
                        storeListing: t,
                        channelId: n
                    } = e;
                    if (null != n) {
                        let e = s.default.createFromServer(t);
                        c[S(n, e.skuId)] = e, p[e.skuId] = e.id
                    } else f(t)
                },
                USER_SETTINGS_PROTO_UPDATE: I,
                APPLICATION_STORE_CLEAR_DATA: _,
                GIFT_CODE_RESOLVE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    if (null == t.store_listing) return !1;
                    f(t.store_listing)
                }
            })
        },
        613676: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canInstallApplication: function() {
                    return u
                },
                installApplication: function() {
                    return c
                }
            });
            var i = n("394846"),
                r = n("316693"),
                a = n("33942"),
                l = n("599110"),
                s = n("128259"),
                o = n("49111");

            function u(e, t, n) {
                return null != t || null != n
            }

            function c(e) {
                let {
                    applicationId: t,
                    customInstallUrl: n,
                    installParams: u,
                    guildId: c,
                    channelId: d,
                    disableGuildSelect: p,
                    source: f
                } = e;
                if (null != n) return l.default.track(o.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: t,
                    guild_id: c,
                    auth_type: "custom_url",
                    source: f,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, s.handleClick)({
                    href: n
                });
                null != u && (l.default.track(o.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: t,
                    guild_id: c,
                    auth_type: "in_app",
                    source: f,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, a.openOAuth2Modal)({
                    guildId: c,
                    clientId: t,
                    scopes: u.scopes,
                    channelId: d,
                    disableGuildSelect: p,
                    permissions: null != u.permissions ? r.default.deserialize(u.permissions) : void 0
                }))
            }
        }
    }
]);
//# sourceMappingURL=e4197a9e24b8955069ef.js.map