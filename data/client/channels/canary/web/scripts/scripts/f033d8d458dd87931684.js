(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62768"], {
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
                    return f
                },
                fetchStoreListingById: function() {
                    return p
                },
                fetchStoreListingForApplication: function() {
                    return h
                },
                matureAgree: function() {
                    return S
                },
                matureDisagree: function() {
                    return m
                },
                joinPublishedStoreListingSkuGuild: function() {
                    return I
                },
                goToSKUStoreListing: function() {
                    return _
                },
                goToApplicationStoreListing: function() {
                    return g
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("84460");
            n("299285");
            var a = n("393414"),
                s = n("552712");
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

            function f(e) {
                let t = s.default.get(e),
                    n = null != t && (o.default.inTestModeForApplication(t.applicationId) || l.default.inDevModeForApplication(t.applicationId));
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

            function p(e) {
                return (0, u.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(e)).then(e => {
                    r.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function h(e) {
                return (0, u.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
                    r.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function S() {
                r.default.dispatch({
                    type: "APPLICATION_STORE_MATURE_AGREE"
                })
            }

            function m() {
                (0, a.transitionTo)(c.Routes.APPLICATION_STORE)
            }

            function I(e) {
                return i.default.post({
                    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
                    oldFormErrors: !0
                })
            }

            function _(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, u.getStoreListingLocation)(e, t);
                (0, a.transitionTo)(n, i)
            }

            function g(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, u.getApplicationStoreListingLocation)(e, t);
                (0, a.transitionTo)(n, i)
            }
        },
        737960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("308723");

            function a(e) {
                return r.forwardRef(function(t, n) {
                    let a = r.useRef();
                    return r.useImperativeHandle(n, () => ({
                        triggerResize: () => {
                            var e;
                            null === (e = a.current) || void 0 === e || e.onResize()
                        }
                    })), (0, i.jsx)(l.default, {
                        ref: a,
                        children: n => {
                            let {
                                width: r,
                                height: l
                            } = n;
                            return (0, i.jsx)(e, {
                                ...t,
                                width: r,
                                height: l
                            })
                        }
                    })
                })
            }
        },
        618991: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TicketIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2.1 12a3 3 0 0 0 0 4.243l.463.462c.168.168.429.19.643.088a3 3 0 0 1 4.001 4.001c-.102.214-.08.475.088.643l.462.462a3 3 0 0 0 4.243 0l6.773-6.773a1 1 0 0 1 1.353-1.353L21.899 12a3 3 0 0 0 0-4.243l-.462-.462c-.168-.168-.429-.19-.643-.088a3 3 0 0 1-4.002-4.001c.103-.214.08-.475-.087-.643l-.462-.463A3 3 0 0 0 12 2.1l-1.774 1.774a1 1 0 0 1-1.352 1.353L2.1 12Zm10.013-6.3A1 1 0 1 0 10.7 7.112l.687.688a1 1 0 1 0 1.415-1.414l-.688-.688Zm2.75 2.75a1 1 0 1 0-1.414 1.413l.687.688a1 1 0 0 0 1.415-1.414l-.688-.688Zm2.75 2.75a1 1 0 0 0-1.414 1.413l.687.688a1 1 0 0 0 1.415-1.414l-.688-.688Z",
                        clipRule: "evenodd",
                        className: s
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
                    return f
                },
                ApplicationBenefitsModalDescription: function() {
                    return p
                },
                ApplicationBenefitsModalBenefits: function() {
                    return h
                },
                ApplicationBenefitsModalContent: function() {
                    return S
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("77078"),
                s = n("850644"),
                o = n("899604"),
                u = n("114067");
            let c = e => {
                    let {
                        application: t,
                        asset: n,
                        className: r,
                        ...l
                    } = e;
                    return (0, i.jsx)(s.default, {
                        application: t,
                        size: s.ApplicationIconSize.MEDIUM,
                        asset: n,
                        className: r,
                        ...l
                    })
                },
                d = e => {
                    let {
                        children: t,
                        className: n,
                        id: r,
                        ...s
                    } = e;
                    return (0, i.jsx)(a.Heading, {
                        className: l(u.header, n),
                        variant: "heading-xl/extrabold",
                        id: r,
                        ...s,
                        children: t
                    })
                };

            function f() {
                return (0, i.jsx)("hr", {
                    className: u.divider
                })
            }
            let p = e => {
                    let {
                        className: t,
                        title: n,
                        description: r,
                        ...l
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: t,
                        ...l,
                        children: [(0, i.jsx)(a.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            children: n
                        }), (0, i.jsx)(a.Heading, {
                            variant: "heading-sm/normal",
                            color: "header-secondary",
                            children: r
                        })]
                    })
                },
                h = e => {
                    let {
                        benefits: t,
                        className: n,
                        ...r
                    } = e;
                    return (0, i.jsx)("div", {
                        className: l(u.benefitsContainer, n),
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
                S = e => {
                    let {
                        children: t,
                        className: n,
                        ...r
                    } = e;
                    return (0, i.jsx)("div", {
                        className: l(u.container, n),
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
                    return f
                }
            });
            var i, r, l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                o = n("315102"),
                u = n("271560"),
                c = n("969850");
            (i = r || (r = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
            let d = {
                [r.SMALL]: c.small,
                [r.MEDIUM]: c.medium
            };
            var f = e => {
                let t, {
                    application: n,
                    size: i,
                    asset: r,
                    className: a
                } = e;
                return t = null != r ? (0, u.getAssetURL)(n.id, r, i) : o.default.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: i
                }), (0, l.jsx)("img", {
                    alt: "",
                    src: t,
                    className: s(c.icon, d[i], a)
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
                l = n.n(r),
                a = n("77078"),
                s = n("396671");

            function o(e) {
                let {
                    children: t,
                    className: n,
                    size: r = a.Button.Sizes.SMALL,
                    ...o
                } = e;
                return (0, i.jsx)(a.Button, {
                    ...o,
                    size: r,
                    className: l(s.button, n),
                    children: t
                })
            }
        },
        333955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PurchaseHeader: function() {
                    return m
                },
                BenefitsConfirmation: function() {
                    return I
                },
                PurchaseConfirmation: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("834897"),
                a = n("85336"),
                s = n("159149"),
                o = n("650484"),
                u = n("945330"),
                c = n("829805"),
                d = n("425480"),
                f = n("782340"),
                p = n("370184"),
                h = n("137852"),
                S = n("511117");
            let m = e => {
                    let {
                        step: t,
                        onClose: n
                    } = e, s = (0, l.default)(d.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                    return t === a.Step.CONFIRM || t === a.Step.BENEFITS ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                        className: p.headerContainer,
                        children: [!s && (0, i.jsx)("div", {
                            className: p.headerImageContainer,
                            "aria-hidden": "true",
                            children: (0, i.jsx)("img", {
                                src: S,
                                alt: "",
                                className: p.headerImage
                            })
                        }), (0, i.jsx)(r.Clickable, {
                            className: p.closeContainer,
                            onClick: () => n(),
                            "aria-label": f.default.Messages.CLOSE,
                            children: (0, i.jsx)(u.default, {
                                className: p.closeIcon
                            })
                        })]
                    })
                },
                I = e => {
                    let {
                        listing: t,
                        application: n,
                        title: r,
                        subtitle: l,
                        description: a
                    } = e;
                    return null == n ? null : (0, i.jsx)("div", {
                        className: p.confirmationContainer,
                        children: (0, i.jsxs)(c.ApplicationBenefitsModalContent, {
                            children: [(0, i.jsx)(c.ApplicationBenefitsModalIcon, {
                                application: n,
                                asset: t.image_asset
                            }), (0, i.jsx)(c.ApplicationBenefitsModalHeading, {
                                children: r
                            }), (0, i.jsx)(c.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(c.ApplicationBenefitsModalDescription, {
                                title: l,
                                description: a
                            }), (0, i.jsx)(c.ApplicationBenefitsModalBenefits, {
                                benefits: t.sku_benefits.benefits
                            })]
                        })
                    })
                };

            function _(e) {
                let {
                    listing: t,
                    onConfirm: n,
                    subscription: l
                } = e;
                return (0, i.jsxs)("div", {
                    className: p.purchaseConfirmation,
                    children: [(0, i.jsx)("img", {
                        src: h,
                        alt: "",
                        width: 300,
                        height: 126
                    }), (0, i.jsx)(r.Heading, {
                        className: p.confirmationTitle,
                        variant: "heading-xl/extrabold",
                        color: "header-primary",
                        children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                            tier: t.name
                        })
                    }), (0, i.jsx)(r.Text, {
                        className: p.confirmationSubtitle,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == l ? void 0 : l.currentPeriodEnd
                        })
                    }), (0, i.jsx)(o.PaymentPortalFooter, {
                        children: (0, i.jsx)(s.default, {
                            onPrimary: n,
                            primaryCTA: s.CTAType.CONTINUE,
                            primaryText: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
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
                l = n.n(r),
                a = n("77078"),
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
                    className: l(o.container, n),
                    children: [null != t.emoji && (0, i.jsx)("div", {
                        className: l(o.emojiContainer, r),
                        children: (0, i.jsx)(s.default, {
                            emojiId: t.emoji.id,
                            emojiName: t.emoji.name,
                            animated: t.emoji.animated
                        })
                    }), (0, i.jsxs)("div", {
                        className: o.infoContainer,
                        children: [(0, i.jsx)(a.Text, {
                            variant: c,
                            color: d,
                            className: o.name,
                            children: t.name
                        }), u && (0, i.jsx)(a.Text, {
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078");

            function l(e) {
                let {
                    application: t,
                    onConfirm: l,
                    onCancel: a
                } = e;
                return (0, r.openModalLazy)(async () => {
                    let {
                        ConfirmNoSharedServerSubscribeWarningModal: e
                    } = await n.el("411638").then(n.bind(n, "411638"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        application: t,
                        onConfirm: l,
                        onCancel: a
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
                    return T
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("627445"),
                a = n.n(l),
                s = n("446674"),
                o = n("913144"),
                u = n("775433"),
                c = n("685665"),
                d = n("598981"),
                f = n("846286"),
                p = n("697218"),
                h = n("10514"),
                S = n("650509"),
                m = n("90592"),
                I = n("333955"),
                _ = n("599733"),
                g = n("49111"),
                C = n("782340"),
                T = e => {
                    var t;
                    let n, {
                            listing: l,
                            guildId: T,
                            groupListingId: E,
                            analyticsLocation: A,
                            showBenefitsFirst: v,
                            onComplete: N,
                            forcesTransitionToGuild: L
                        } = e,
                        b = null == l ? void 0 : l.subscription_plans[0],
                        x = null == l ? void 0 : l.application_id,
                        y = null == b ? void 0 : b.id,
                        F = (null == l ? void 0 : l.published) === !0,
                        O = null == b ? void 0 : b.sku_id,
                        P = (0, s.useStateFromStores)([h.default], () => null != y ? h.default.get(y) : null),
                        R = (0, S.useApplication)(x),
                        M = (0, S.useSubscriptionListingsForGroup)(E, {
                            includeSoftDeleted: !0
                        }),
                        U = M.map(e => e.subscription_plans[0].id),
                        {
                            analyticsLocations: j
                        } = (0, c.default)(),
                        {
                            activeSubscription: H,
                            activeEntitlement: k
                        } = (0, S.useActiveSubscriptionListingForApplication)(x, T),
                        w = (0, S.useEligibleApplicationSubscriptionGuilds)(x, T),
                        D = (0, d.default)(),
                        B = null != l && (0, m.isApplicationUserSubscription)(l.sku_flags),
                        G = null != k && k.userId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                        V = null == k || G,
                        K = null == k || U.length > 1,
                        W = null != T || w.length > 0,
                        z = B && G,
                        Z = null != P && null != R && V && K && (W || B) && !z;
                    V ? W ? z && null != P && (n = C.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
                        tierName: P.name
                    })) : n = C.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = C.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(() => {
                        F && null != O && D && o.default.wait(() => {
                            (0, u.fetchSubscriptionPlansForSKU)(O)
                        })
                    }, [F, O, D]);
                    let Q = r.useCallback(() => {
                        a(null != l, "No subscription listing"), a(null != R, "No application"), a(null != b, "No subscription plan"), a(F, "Cannot purchase this unpublished plan");
                        let e = () => {
                            (0, f.openApplicationSubscriptionPaymentModal)({
                                activeSubscription: H,
                                analyticsSubscriptionType: g.SubscriptionTypes.APPLICATION,
                                analyticsLocations: j,
                                analyticsLocation: A,
                                renderHeader: (e, t, n) => (0, i.jsx)(I.PurchaseHeader, {
                                    step: n,
                                    onClose: () => t(!1)
                                }),
                                initialPlanId: b.id,
                                skuId: b.sku_id,
                                guildId: T,
                                eligibleApplicationSubscriptionGuilds: w,
                                planGroup: U,
                                listing: l,
                                application: R,
                                showBenefitsFirst: v,
                                onComplete: N,
                                forcesTransitionToGuild: L
                            })
                        };
                        !W && B ? (0, _.confirmNoSharedServerSubscribeWarningModal)({
                            application: R,
                            onConfirm: e,
                            onCancel: () => {}
                        }) : e()
                    }, [F, l, b, U, R, T, W, B, j, A, H, v, w, N, L]);
                    return {
                        openModal: Q,
                        canOpenModal: Z,
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
                    return a
                }
            });
            var i = n("65597"),
                r = n("42203"),
                l = n("337026");

            function a(e) {
                let t = (0, i.default)([r.default], () => r.default.getChannel(e)),
                    {
                        enabled: n
                    } = l.default.useExperiment({
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
                    return S
                },
                openActivityApplicationPaymentModal: function() {
                    return g
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                l = n.n(r),
                a = n("77078"),
                s = n("251472"),
                o = n("823411"),
                u = n("55620"),
                c = n("524503"),
                d = n("186211"),
                f = n("90592"),
                p = n("299285"),
                h = n("49111");

            function S(e) {
                let {
                    initialPlanId: t,
                    activeSubscription: r,
                    analyticsObject: l,
                    analyticsLocation: s,
                    analyticsLocations: o,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: d,
                    skuId: f,
                    guildId: p,
                    reviewWarningMessage: S,
                    listing: m,
                    application: I,
                    showBenefitsFirst: _,
                    eligibleApplicationSubscriptionGuilds: g,
                    onComplete: C,
                    forcesTransitionToGuild: T
                } = e;
                (0, a.openModalLazy)(async () => {
                    let {
                        PaymentContextProvider: e
                    } = await n.el("642906").then(n.bind(n, "642906")), a = (await n.el("452113").then(n.bind(n, "452113"))).default, {
                        getApplicationSubscriptionPaymentSteps: h
                    } = await n.el("590749").then(n.bind(n, "590749")), E = h({
                        guildId: p,
                        application: I,
                        listing: m,
                        showBenefitsFirst: _,
                        eligibleApplicationSubscriptionGuilds: g
                    });
                    return n => (0, i.jsx)(e, {
                        applicationId: I.id,
                        activeSubscription: r,
                        stepConfigs: E,
                        skuIDs: [f],
                        children: (0, i.jsx)(a, {
                            ...n,
                            initialPlanId: t,
                            skuId: f,
                            analyticsLocations: o,
                            analyticsObject: l,
                            analyticsLocation: s,
                            analyticsSubscriptionType: u,
                            renderHeader: c,
                            planGroup: d,
                            reviewWarningMessage: S,
                            applicationId: I.id,
                            guildId: null != p ? p : void 0,
                            onComplete: C,
                            forcesTransitionToGuild: T
                        })
                    })
                }, {
                    onCloseRequest: h.NOOP
                })
            }
            let m = async e => {
                let t = p.default.getApplication(e);
                if (null != t) return t;
                await o.default.fetchApplications([e], !1);
                let n = p.default.getApplication(e);
                return l(null != n, "Failed to find application with ID %s", e), n
            }, I = async e => {
                let t = d.default.getSubscriptionGroupListingForApplication(e);
                if (null != t) return t;
                let n = await (0, u.fetchAllStoreListingsForApplication)(e),
                    i = n.find(e => e.sku.type === h.SKUTypes.SUBSCRIPTION_GROUP);
                l(null != i, "Failed to find subscription store listing"), await (0, c.fetchAllSubscriptionListingsDataForApplication)(e, null == i ? void 0 : i.id);
                let r = d.default.getSubscriptionGroupListingForApplication(e);
                return l(null != r, "Failed to find subscription group listing"), r
            }, _ = async (e, t) => {
                let n = await (0, s.fetchUserEntitlementsForApplication)(e),
                    i = n.find(e => e.sku_id === t);
                l(null == i, "User already has an active subscription to this SKU")
            };
            async function g(e) {
                let {
                    applicationId: t,
                    skuId: n,
                    initialPlanId: i,
                    analyticsLocationObject: r,
                    analyticsLocations: a,
                    renderHeader: s
                } = e, o = await m(t), u = await I(t), c = (0, f.getPayableSubscriptionListing)(u);
                l(null != c, "Failed to find subscription listing");
                let d = (0, f.isApplicationUserSubscription)(c.sku_flags);
                l(d, "Guild application subscriptions unsupported!"), l(c.published, "Subscription listing not published"), await _(t, n);
                let p = {
                    initialPlanId: null != i ? i : null == c ? void 0 : c.subscription_plans[0].id,
                    activeSubscription: null,
                    analyticsLocations: a,
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
                S(p)
            }
        },
        159149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CTAType: function() {
                    return r
                },
                default: function() {
                    return p
                }
            });
            var i, r, l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("145131"),
                o = n("181114"),
                u = n("376641"),
                c = n("782340"),
                d = n("198699");
            (i = r || (r = {}))[i.CONTINUE = 0] = "CONTINUE", i[i.UPGRADE = 1] = "UPGRADE", i[i.PURCHASE = 2] = "PURCHASE";
            let f = e => {
                let {
                    onBack: t,
                    backText: n,
                    primaryIcon: i,
                    primaryCTA: f,
                    primaryType: p,
                    primaryText: h,
                    primaryTooltip: S,
                    primaryDisabled: m,
                    primarySubmitting: I,
                    onPrimary: _,
                    secondaryText: g,
                    onSecondary: C
                } = e;
                return (0, l.jsxs)(a.ModalFooter, {
                    justify: s.default.Justify.BETWEEN,
                    align: s.default.Align.CENTER,
                    children: [(() => {
                        if (null == f || null == h) return null;
                        let e = f === r.PURCHASE ? o.default : a.Button,
                            t = {
                                innerClassName: d.button,
                                type: p,
                                disabled: m,
                                submitting: I,
                                color: f === r.CONTINUE ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
                                onClick: _
                            };
                        return null != S ? (0, l.jsx)(a.Tooltip, {
                            text: S,
                            children: n => (0, l.jsxs)(e, {
                                ...n,
                                ...t,
                                children: [null == i ? null : (0, l.jsx)(i, {
                                    className: d.primaryIcon
                                }), h]
                            })
                        }) : (0, l.jsxs)(e, {
                            ...t,
                            children: [null == i ? null : (0, l.jsx)(i, {
                                className: d.primaryIcon
                            }), h]
                        })
                    })(), null == g ? null : (0, l.jsx)(a.Button, {
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        onClick: C,
                        children: g
                    }), (0, l.jsx)(u.default, {}), null == t ? null : (0, l.jsx)(a.Button, {
                        className: d.back,
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        onClick: t,
                        children: null != n ? n : c.default.Messages.BACK
                    })]
                })
            };
            f.CTAType = r;
            var p = f
        },
        376641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("77078"),
                s = n("600785"),
                o = n("782340"),
                u = n("980638"),
                c = n("173791");

            function d() {
                return (0, i.jsxs)("div", {
                    className: l(u.paymentModalLockIcon, c.flex, c.alignCenter),
                    children: [(0, i.jsx)(s.default, {
                        className: u.lockIcon,
                        width: 18,
                        height: 18
                    }), (0, i.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        children: o.default.Messages.BILLING_SECURE
                    })]
                })
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
                l = n("913144");
            n("253981");
            var a = n("140596"),
                s = n("49111");
            n("843455"), n("782340");

            function o() {
                a.default.getApplicationsShelfFetchState() === a.FetchState.NOT_FETCHED && (l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), r.default.get(s.Endpoints.APPLICATIONS_SHELF).then(e => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: e.body.applications
                })).catch(e => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function u(e) {
                let t = new i.default(1e3, 5e3);
                l.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                }), r.default.get({
                    url: s.Endpoints.CHANNEL_INTEGRATIONS(e),
                    backoff: t,
                    retries: 10
                }).then(t => {
                    l.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: t.body
                    })
                }).catch(() => {
                    l.default.dispatch({
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
                l = n("201155"),
                a = n("21121"),
                s = n("970755"),
                o = n("140596");

            function u(e) {
                let {
                    channelId: t
                } = e;
                (0, a.useInMainTabsExperiment)();
                let n = (0, l.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: u,
                        applicationsShelf: c,
                        integrationsFetchState: d,
                        applicationsShelfFetchState: f
                    } = (0, r.useStateFromStoresObject)([o.default], () => ({
                        installedIntegrations: o.default.getIntegrations(t),
                        applicationsShelf: o.default.getApplicationsShelf(),
                        integrationsFetchState: o.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((d === o.FetchState.NOT_FETCHED || d === o.FetchState.FETCH_FAILED) && (0, s.fetchPrivateChannelIntegrations)(t), (f === o.FetchState.NOT_FETCHED || f === o.FetchState.FETCH_FAILED) && (0, s.fetchApplicationsShelf)())
                }, [n, t, d, f]);
                let p = new Set(u.map(e => e.application.id)),
                    h = c.filter(e => !p.has(e.id));
                return {
                    installedIntegrations: u,
                    availableApplications: h,
                    applicationsShelf: c,
                    fetched: d !== o.FetchState.NOT_FETCHED && d !== o.FetchState.FETCHING && f !== o.FetchState.NOT_FETCHED && f !== o.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        928460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("666038"),
                r = n("560350"),
                l = n("766274");
            class a extends i.default {
                static createFromServer(e) {
                    let t = e.staff_notes;
                    return new a({
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
                            user: null != t.user ? new l.default(t.user) : null
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
                    return g
                }
            });
            var r = n("446674"),
                l = n("913144"),
                a = n("915639"),
                s = n("928460"),
                o = n("449008");
            let u = {},
                c = {},
                d = {},
                f = {};

            function p(e) {
                let t = e.id,
                    n = e.sku.id,
                    i = u[t],
                    r = s.default.createFromServer(e);
                !(null != i && !i.isSlimDirectoryVersion() && r.isSlimDirectoryVersion()) && (!1 === e.published ? (null == d[n] && (d[n] = new Set), d[n].add(t)) : f[n] = t, u[t] = r)
            }

            function h(e, t) {
                return "".concat(e, ":").concat(t)
            }

            function S(e) {
                let {
                    storeListings: t
                } = e;
                for (let e of t) p(e)
            }

            function m() {
                u = {}, f = {}, d = {}, c = {}
            }

            function I() {
                if (i === a.default.locale) return !1;
                m(), i = a.default.locale
            }
            class _ extends r.default.Store {
                initialize() {
                    this.waitFor(a.default), this.syncWith([a.default], I), i = a.default.locale
                }
                get(e) {
                    return u[e]
                }
                getForSKU(e, t) {
                    let n = f[e];
                    return null != t ? c[h(t, e)] : null != n ? u[n] : null
                }
                getUnpublishedForSKU(e) {
                    let t = d[e];
                    return null == t ? [] : Array.from(t).map(e => u[e]).filter(o.isNotNullish)
                }
                getForChannel(e, t) {
                    return c[h(e, t)]
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
            _.displayName = "StoreListingStore";
            var g = new _(l.default, {
                STORE_LISTINGS_FETCH_SUCCESS: S,
                APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: S,
                STORE_LISTING_FETCH_SUCCESS: function(e) {
                    let {
                        storeListing: t,
                        channelId: n
                    } = e;
                    if (null != n) {
                        let e = s.default.createFromServer(t);
                        c[h(n, e.skuId)] = e, f[e.skuId] = e.id
                    } else p(t)
                },
                USER_SETTINGS_PROTO_UPDATE: I,
                APPLICATION_STORE_CLEAR_DATA: m,
                GIFT_CODE_RESOLVE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    if (null == t.store_listing) return !1;
                    p(t.store_listing)
                }
            })
        },
        275623: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("164538");

            function s(e) {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, i.jsx)("div", {
                    className: l(a.gifTag, t),
                    ...n
                })
            }
        },
        246053: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Directions: function() {
                    return r
                },
                default: function() {
                    return d
                }
            });
            var i, r, l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                o = n("75196"),
                u = n("741460");
            (i = r || (r = {})).LEFT = "LEFT", i.RIGHT = "RIGHT", i.UP = "UP", i.DOWN = "DOWN", i.UP_LEFT = "UP_LEFT", i.DOWN_RIGHT = "DOWN_RIGHT";
            let c = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    direction: a,
                    foreground: c,
                    className: d,
                    title: f,
                    ...p
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, o.default)(p),
                    width: t,
                    height: n,
                    className: s(d, function(e) {
                        switch (e) {
                            case r.LEFT:
                                return u.left;
                            case r.RIGHT:
                                return u.right;
                            case r.UP:
                                return null;
                            case r.DOWN:
                                return u.down;
                            case r.UP_LEFT:
                                return u.upLeft;
                            case r.DOWN_RIGHT:
                                return u.downRight;
                            default:
                                throw Error("Invalid Direction ".concat(e))
                        }
                    }(a)),
                    viewBox: "0 0 24 24",
                    children: [null != f ? (0, l.jsx)("title", {
                        children: f
                    }) : null, (0, l.jsx)("polygon", {
                        className: c,
                        fill: i,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                })
            };
            c.Directions = r;
            var d = c
        },
        600785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("434657"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            id: "a",
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                        })
                    })
                }, l.LockIcon)
        },
        8161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("618991"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M23 10V4H1V10C2.1 10 3 10.9 3 12C3 13.1 2.1 14 1 14V20H23V14C21.9 14 21 13.1 21 12C21 10.9 21.9 10 23 10ZM13 16V18H11V16H9V14H13C13.27 14 13.5 13.83 13.5 13.62C13.5 12.58 8.5 13.62 8.5 10.37C8.5 9.07 9.62 8 11 8V6H13V8H15V10H11C10.73 10 10.5 10.17 10.5 10.38C10.5 11.42 15.5 10.38 15.5 13.63C15.5 14.93 14.38 16 13 16Z"
                        })
                    })
                }, l.TicketIcon)
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
                l = n("33942"),
                a = n("599110"),
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
                    disableGuildSelect: f,
                    source: p
                } = e;
                if (null != n) return a.default.track(o.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: t,
                    guild_id: c,
                    auth_type: "custom_url",
                    source: p,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, s.handleClick)({
                    href: n
                });
                null != u && (a.default.track(o.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: t,
                    guild_id: c,
                    auth_type: "in_app",
                    source: p,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, l.openOAuth2Modal)({
                    guildId: c,
                    clientId: t,
                    scopes: u.scopes,
                    channelId: d,
                    disableGuildSelect: f,
                    permissions: null != u.permissions ? r.default.deserialize(u.permissions) : void 0
                }))
            }
        }
    }
]);
//# sourceMappingURL=f033d8d458dd87931684.js.map