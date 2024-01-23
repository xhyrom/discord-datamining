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
                    return _
                },
                goToSKUStoreListing: function() {
                    return I
                },
                goToApplicationStoreListing: function() {
                    return E
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("84460");
            n("299285");
            var a = n("393414"),
                s = n("552712");
            n("698041");
            var u = n("167726"),
                o = n("271560"),
                c = n("49111");

            function d(e) {
                return (0, o.httpGetWithCountryCodeQuery)({
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
                    n = null != t && (u.default.inTestModeForApplication(t.applicationId) || l.default.inDevModeForApplication(t.applicationId));
                return (0, o.httpGetWithCountryCodeQuery)(n ? c.Endpoints.STORE_LISTINGS_SKU(e) : c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
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
                return (0, o.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(e)).then(e => {
                    r.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function h(e) {
                return (0, o.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
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

            function _(e) {
                return i.default.post({
                    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
                    oldFormErrors: !0
                })
            }

            function I(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, o.getStoreListingLocation)(e, t);
                (0, a.transitionTo)(n, i)
            }

            function E(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, o.getApplicationStoreListingLocation)(e, t);
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
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2.1 12a3 3 0 0 0 0 4.24l.46.46c.17.17.43.2.65.1a3 3 0 0 1 4 4c-.1.2-.08.47.08.64l.47.46a3 3 0 0 0 4.24 0l6.77-6.77a1 1 0 0 1 1.36-1.36L21.9 12a3 3 0 0 0 0-4.24l-.46-.47a.56.56 0 0 0-.65-.08 3 3 0 0 1-4-4 .56.56 0 0 0-.09-.65l-.46-.46a3 3 0 0 0-4.24 0l-1.77 1.77a1 1 0 0 1-1.36 1.36L2.1 12Zm10.01-6.3A1 1 0 1 0 10.7 7.1l.69.7a1 1 0 1 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 1 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 0 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Z",
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
            }), n("222007");
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
        692105: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                IconType: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.STORE_ASSET = 1] = "STORE_ASSET", r[r.EMOJI = 2] = "EMOJI"
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
                u = n("899604"),
                o = n("114067");
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
                        className: l(o.header, n),
                        variant: "heading-xl/extrabold",
                        id: r,
                        ...s,
                        children: t
                    })
                };

            function f() {
                return (0, i.jsx)("hr", {
                    className: o.divider
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
                        applicationId: t,
                        storeListingBenefits: n,
                        skuBenefits: r,
                        className: a,
                        ...s
                    } = e;
                    return (0, i.jsx)("div", {
                        className: l(o.benefitsContainer, a),
                        ...s,
                        children: (0, i.jsx)(u.SubscriptionListingBenefits, {
                            applicationId: t,
                            storeListingBenefits: n,
                            skuBenefits: r,
                            className: o.benefit
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
                        className: l(o.container, n),
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
                u = n("315102"),
                o = n("271560"),
                c = n("969850");
            (i = r || (r = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
            let d = {
                40: c.small,
                66: c.medium
            };
            var f = e => {
                let t, {
                    application: n,
                    size: i,
                    asset: r,
                    className: a
                } = e;
                return t = null != r ? (0, o.getAssetURL)(n.id, r, i) : u.default.getApplicationIconURL({
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
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("77078"),
                s = n("396671");

            function u(e) {
                let {
                    children: t,
                    className: n,
                    size: r = a.Button.Sizes.SMALL,
                    ...u
                } = e;
                return (0, i.jsx)(a.Button, {
                    ...u,
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
                    return _
                },
                PurchaseConfirmation: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("834897"),
                a = n("85336"),
                s = n("159149"),
                u = n("650484"),
                o = n("945330"),
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
                            children: (0, i.jsx)(o.default, {
                                className: p.closeIcon
                            })
                        })]
                    })
                },
                _ = e => {
                    let {
                        icon: t,
                        storeListingBenefits: n,
                        skuBenefits: r,
                        application: l,
                        title: a,
                        subtitle: s,
                        description: u
                    } = e;
                    return null == l ? null : (0, i.jsx)("div", {
                        className: p.confirmationContainer,
                        children: (0, i.jsxs)(c.ApplicationBenefitsModalContent, {
                            children: [(0, i.jsx)(c.ApplicationBenefitsModalIcon, {
                                application: l,
                                asset: t
                            }), (0, i.jsx)(c.ApplicationBenefitsModalHeading, {
                                children: a
                            }), (0, i.jsx)(c.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(c.ApplicationBenefitsModalDescription, {
                                title: s,
                                description: u
                            }), (0, i.jsx)(c.ApplicationBenefitsModalBenefits, {
                                applicationId: l.id,
                                storeListingBenefits: n,
                                skuBenefits: r
                            })]
                        })
                    })
                };

            function I(e) {
                let {
                    tierName: t,
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
                            tier: t
                        })
                    }), (0, i.jsx)(r.Text, {
                        className: p.confirmationSubtitle,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == l ? void 0 : l.currentPeriodEnd
                        })
                    }), (0, i.jsx)(u.PaymentPortalFooter, {
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
                SubscriptionListingBenefits: function() {
                    return d
                },
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("77078"),
                s = n("430568"),
                u = n("271560"),
                o = n("692105"),
                c = n("888266");

            function d(e) {
                let t, {
                    applicationId: n,
                    storeListingBenefits: r,
                    skuBenefits: a,
                    className: s
                } = e;
                return null != r ? t = r.map(e => (0, i.jsx)(p, {
                    applicationId: n,
                    benefit: e,
                    className: l(c.benefit, s)
                }, e.id)) : null != a && (t = a.map((e, t) => (0, i.jsx)(f, {
                    benefit: e,
                    className: l(c.benefit, s)
                }, t))), (0, i.jsx)(i.Fragment, {
                    children: t
                })
            }

            function f(e) {
                let {
                    benefit: t,
                    className: n,
                    emojiContainerClassName: r,
                    showsDescription: u = !0,
                    nameTextVariant: o = "text-md/medium",
                    nameTextColor: d = "header-primary"
                } = e;
                return (0, i.jsxs)("div", {
                    className: l(c.container, n),
                    children: [null != t.emoji && (0, i.jsx)("div", {
                        className: l(c.emojiContainer, r),
                        children: (0, i.jsx)(s.default, {
                            emojiId: t.emoji.id,
                            emojiName: t.emoji.name,
                            animated: t.emoji.animated
                        })
                    }), (0, i.jsxs)("div", {
                        className: c.infoContainer,
                        children: [(0, i.jsx)(a.Text, {
                            variant: o,
                            color: d,
                            className: c.name,
                            children: t.name
                        }), u && (0, i.jsx)(a.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: t.description
                        })]
                    })]
                })
            }

            function p(e) {
                let t, {
                    applicationId: n,
                    benefit: r,
                    className: d,
                    emojiContainerClassName: f,
                    showsDescription: p = !0,
                    nameTextVariant: h = "text-md/medium",
                    nameTextColor: S = "header-primary"
                } = e;
                if (null != r.icon) switch (r.icon.type) {
                    case o.IconType.STORE_ASSET:
                        let m = (0, u.getAssetURL)(n, r.icon.store_asset_id);
                        t = (0, i.jsx)("img", {
                            src: m,
                            alt: "",
                            className: "emoji"
                        });
                        break;
                    case o.IconType.EMOJI:
                        t = (0, i.jsx)(s.default, {
                            emojiName: r.icon.emoji
                        })
                }
                return (0, i.jsxs)("div", {
                    className: l(c.container, d),
                    children: [(0, i.jsx)("div", {
                        className: l(c.emojiContainer, f),
                        children: t
                    }), (0, i.jsxs)("div", {
                        className: c.infoContainer,
                        children: [(0, i.jsx)(a.Text, {
                            variant: h,
                            color: S,
                            className: c.name,
                            children: r.name
                        }), p && (0, i.jsx)(a.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: r.description
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
                    return C
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("627445"),
                a = n.n(l),
                s = n("446674"),
                u = n("913144"),
                o = n("775433"),
                c = n("685665"),
                d = n("598981"),
                f = n("846286"),
                p = n("697218"),
                h = n("10514"),
                S = n("650509"),
                m = n("90592"),
                _ = n("333955"),
                I = n("599733"),
                E = n("49111"),
                T = n("782340"),
                C = e => {
                    var t;
                    let n, {
                            listing: l,
                            guildId: C,
                            groupListingId: g,
                            analyticsLocation: A,
                            showBenefitsFirst: N,
                            onComplete: v,
                            forcesTransitionToGuild: b
                        } = e,
                        L = null == l ? void 0 : l.subscription_plans[0],
                        O = null == l ? void 0 : l.application_id,
                        P = null == L ? void 0 : L.id,
                        x = (null == l ? void 0 : l.published) === !0,
                        F = null == L ? void 0 : L.sku_id,
                        R = (0, s.useStateFromStores)([h.default], () => null != P ? h.default.get(P) : null),
                        y = (0, S.useApplication)(O),
                        k = (0, S.useSubscriptionListingsForGroup)(g, {
                            includeSoftDeleted: !0
                        }),
                        G = k.map(e => e.subscription_plans[0].id),
                        {
                            analyticsLocations: H
                        } = (0, c.default)(),
                        {
                            activeSubscription: M,
                            activeEntitlement: j
                        } = (0, S.useActiveSubscriptionListingForApplication)(O, C),
                        w = (0, S.useEligibleApplicationSubscriptionGuilds)(O, C),
                        D = (0, d.default)(),
                        U = null != l && (0, m.isApplicationUserSubscription)(l.sku_flags),
                        B = null != j && j.userId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                        V = null == j || B,
                        K = null == j || G.length > 1,
                        W = null != C || w.length > 0,
                        z = U && B,
                        Z = null != R && null != y && V && K && (W || U) && !z;
                    V ? W ? z && null != R && (n = T.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
                        tierName: R.name
                    })) : n = T.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = T.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(() => {
                        x && null != F && D && u.default.wait(() => {
                            (0, o.fetchSubscriptionPlansForSKU)(F)
                        })
                    }, [x, F, D]);
                    let Q = r.useCallback(() => {
                        a(null != l, "No subscription listing"), a(null != y, "No application"), a(null != L, "No subscription plan"), a(x, "Cannot purchase this unpublished plan");
                        let e = () => {
                            (0, f.openApplicationSubscriptionPaymentModal)({
                                activeSubscription: M,
                                analyticsSubscriptionType: E.SubscriptionTypes.APPLICATION,
                                analyticsLocations: H,
                                analyticsLocation: A,
                                renderHeader: (e, t, n) => (0, i.jsx)(_.PurchaseHeader, {
                                    step: n,
                                    onClose: () => t(!1)
                                }),
                                initialPlanId: L.id,
                                skuId: L.sku_id,
                                guildId: C,
                                eligibleApplicationSubscriptionGuilds: w,
                                planGroup: G,
                                listing: l,
                                application: y,
                                showBenefitsFirst: N,
                                onComplete: v,
                                forcesTransitionToGuild: b
                            })
                        };
                        !W && U ? (0, I.confirmNoSharedServerSubscribeWarningModal)({
                            application: y,
                            onConfirm: e,
                            onCancel: () => {}
                        }) : e()
                    }, [x, l, L, G, y, C, W, U, H, A, M, N, w, v, b]);
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
        635357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftContextProvider: function() {
                    return _
                },
                useGiftContext: function() {
                    return S
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("210721"),
                a = n("78345"),
                s = n("53253"),
                u = n("105097"),
                o = n("659632"),
                c = n("642906"),
                d = n("782340");
            let f = a.PremiumGiftStyles.STANDARD_BOX,
                p = void 0,
                [h, S, m] = (0, u.default)();

            function _(e) {
                let {
                    isGift: t = !1,
                    giftRecipient: n,
                    giftMessage: u,
                    children: S
                } = e, {
                    selectedSkuId: m
                } = (0, c.usePaymentContext)(), [_, I] = r.useState(n), [E, T] = r.useState(), [C, g] = r.useState(!1), A = (0, o.shouldShowCustomGiftExperience)(_), N = (0, s.useIsSeasonalGiftingActive)(), {
                    enabled: v
                } = s.default.useExperiment({
                    location: "PaymentContextProvider"
                }, {
                    autoTrackExposure: A && N
                }), [b, L] = r.useState(A ? v && N ? a.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [O, P] = r.useState(t && o.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has((0, o.getGiftExperience)(_)) ? d.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : u), [x, F] = r.useState(void 0), [R, y] = r.useState(void 0), k = (0, o.useGetGiftCode)(m, t), [G, H] = r.useState(!1), [M, j] = r.useState(!1), [w, D] = r.useState(), U = r.useCallback(e => {
                    let {
                        onSubscriptionConfirmation: t
                    } = e;
                    return j(!0), (0, l.sendGiftMessage)(_, k).then(() => {
                        j(!1), null == t || t(), H(!0)
                    }).catch(e => {
                        j(!1), D(e), H(!0)
                    })
                }, [_, k, j, H, D]);
                return (0, i.jsx)(h.Provider, {
                    value: {
                        isGift: t,
                        giftCode: k,
                        giftMessage: u,
                        giftRecipient: _,
                        setGiftRecipient: I,
                        giftRecipientError: E,
                        setGiftRecipientError: T,
                        validatingGiftRecipient: C,
                        setValidatingGiftRecipient: g,
                        soundEffect: x,
                        setSoundEffect: F,
                        emojiConfetti: R,
                        setEmojiConfetti: y,
                        customGiftMessage: O,
                        setCustomGiftMessage: P,
                        selectedGiftStyle: b,
                        setSelectedGiftStyle: L,
                        sendGiftMessage: U,
                        hasSentMessage: G,
                        isSendingMessage: M,
                        giftMessageError: w
                    },
                    children: S
                })
            }
        },
        846286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openApplicationSubscriptionPaymentModal: function() {
                    return m
                },
                openActivityApplicationPaymentModal: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                l = n.n(r),
                a = n("77078"),
                s = n("316718"),
                u = n("55620"),
                o = n("524503"),
                c = n("186211"),
                d = n("90592"),
                f = n("651057"),
                p = n("299285"),
                h = n("635357"),
                S = n("49111");

            function m(e) {
                let {
                    initialPlanId: t,
                    activeSubscription: r,
                    analyticsObject: l,
                    analyticsLocation: s,
                    analyticsLocations: u,
                    analyticsSubscriptionType: o,
                    renderHeader: c,
                    planGroup: d,
                    skuId: f,
                    guildId: p,
                    reviewWarningMessage: m,
                    listing: _,
                    application: I,
                    showBenefitsFirst: E,
                    eligibleApplicationSubscriptionGuilds: T,
                    onComplete: C,
                    forcesTransitionToGuild: g
                } = e;
                (0, a.openModalLazy)(async () => {
                    let {
                        PaymentContextProvider: e
                    } = await n.el("642906").then(n.bind(n, "642906")), a = (await n.el("452113").then(n.bind(n, "452113"))).default, {
                        getApplicationSubscriptionPaymentSteps: S
                    } = await n.el("590749").then(n.bind(n, "590749")), A = S({
                        guildId: p,
                        application: I,
                        listing: _,
                        showBenefitsFirst: E,
                        eligibleApplicationSubscriptionGuilds: T
                    });
                    return n => (0, i.jsx)(e, {
                        applicationId: I.id,
                        activeSubscription: r,
                        stepConfigs: A,
                        skuIDs: [f],
                        children: (0, i.jsx)(h.GiftContextProvider, {
                            children: (0, i.jsx)(a, {
                                ...n,
                                initialPlanId: t,
                                skuId: f,
                                analyticsLocations: u,
                                analyticsObject: l,
                                analyticsLocation: s,
                                analyticsSubscriptionType: o,
                                renderHeader: c,
                                planGroup: d,
                                reviewWarningMessage: m,
                                applicationId: I.id,
                                guildId: null != p ? p : void 0,
                                onComplete: C,
                                forcesTransitionToGuild: g
                            })
                        })
                    })
                }, {
                    onCloseRequest: S.NOOP
                })
            }
            let _ = async e => {
                let t = p.default.getApplication(e);
                if (null != t) return t;
                await f.default.fetchApplications([e], !1);
                let n = p.default.getApplication(e);
                return l(null != n, "Failed to find application with ID %s", e), n
            }, I = async e => {
                let t = c.default.getSubscriptionGroupListingForApplication(e);
                if (null != t) return t;
                let n = await (0, u.fetchAllStoreListingsForApplication)(e),
                    i = n.find(e => e.sku.type === S.SKUTypes.SUBSCRIPTION_GROUP);
                l(null != i, "Failed to find subscription store listing"), await (0, o.fetchAllSubscriptionListingsDataForApplication)(e, null == i ? void 0 : i.id);
                let r = c.default.getSubscriptionGroupListingForApplication(e);
                return l(null != r, "Failed to find subscription group listing"), r
            }, E = async (e, t) => {
                let n = await (0, s.fetchUserEntitlementsForApplication)(e),
                    i = n.find(e => e.sku_id === t);
                l(null == i, "User already has an active subscription to this SKU")
            };
            async function T(e) {
                let {
                    applicationId: t,
                    skuId: n,
                    initialPlanId: i,
                    analyticsLocationObject: r,
                    analyticsLocations: a,
                    renderHeader: s
                } = e, u = await _(t), o = await I(t), c = (0, d.getPayableSubscriptionListing)(o);
                l(null != c, "Failed to find subscription listing");
                let f = (0, d.isApplicationUserSubscription)(c.sku_flags);
                l(f, "Guild application subscriptions unsupported!"), l(c.published, "Subscription listing not published"), await E(t, n);
                let p = {
                    initialPlanId: null != i ? i : null == c ? void 0 : c.subscription_plans[0].id,
                    activeSubscription: null,
                    analyticsLocations: a,
                    analyticsLocationObject: r,
                    analyticsSubscriptionType: S.SubscriptionTypes.APPLICATION,
                    renderHeader: s,
                    planGroup: o.subscription_listings_ids,
                    skuId: n,
                    guildId: null,
                    eligibleApplicationSubscriptionGuilds: [],
                    showBenefitsFirst: !1,
                    application: u,
                    listing: c
                };
                m(p)
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
                u = n("181114"),
                o = n("376641"),
                c = n("782340"),
                d = n("198699");
            (i = r || (r = {}))[i.CONTINUE = 0] = "CONTINUE", i[i.UPGRADE = 1] = "UPGRADE", i[i.PURCHASE = 2] = "PURCHASE";
            let f = e => {
                let {
                    onBack: t,
                    backText: n,
                    primaryIcon: i,
                    primaryCTA: r,
                    primaryType: f,
                    primaryText: p,
                    primaryTooltip: h,
                    primaryDisabled: S,
                    primarySubmitting: m,
                    onPrimary: _,
                    secondaryText: I,
                    onSecondary: E
                } = e;
                return (0, l.jsxs)(a.ModalFooter, {
                    justify: s.default.Justify.BETWEEN,
                    align: s.default.Align.CENTER,
                    children: [(() => {
                        if (null == r || null == p) return null;
                        let e = 2 === r ? u.default : a.Button,
                            t = {
                                innerClassName: d.button,
                                type: f,
                                disabled: S,
                                submitting: m,
                                color: 0 === r ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
                                onClick: _
                            };
                        return null != h ? (0, l.jsx)(a.Tooltip, {
                            text: h,
                            children: n => (0, l.jsxs)(e, {
                                ...n,
                                ...t,
                                children: [null == i ? null : (0, l.jsx)(i, {
                                    className: d.primaryIcon
                                }), p]
                            })
                        }) : (0, l.jsxs)(e, {
                            ...t,
                            children: [null == i ? null : (0, l.jsx)(i, {
                                className: d.primaryIcon
                            }), p]
                        })
                    })(), null == I ? null : (0, l.jsx)(a.Button, {
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        onClick: E,
                        children: I
                    }), (0, l.jsx)(o.default, {}), null == t ? null : (0, l.jsx)(a.Button, {
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
                u = n("782340"),
                o = n("980638"),
                c = n("173791");

            function d() {
                return (0, i.jsxs)("div", {
                    className: l(o.paymentModalLockIcon, c.flex, c.alignCenter),
                    children: [(0, i.jsx)(s.default, {
                        className: o.lockIcon,
                        width: 18,
                        height: 18
                    }), (0, i.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        children: u.default.Messages.BILLING_SECURE
                    })]
                })
            }
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return i
                },
                getGiftAnimationData: function() {
                    return p
                },
                sendGiftMessage: function() {
                    return h
                }
            }), n("70102");
            var i, r, l = n("627445"),
                a = n.n(l),
                s = n("450911"),
                u = n("819689"),
                o = n("884351"),
                c = n("42203"),
                d = n("659632"),
                f = n("78345");
            (r = i || (i = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
            let p = (e, t) => {
                    let i;
                    switch (e) {
                        case f.PremiumGiftStyles.SNOWGLOBE:
                            i = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.BOX:
                            i = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.CUP:
                            i = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_STANDARD_BOX:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("158302").then(n.t.bind(n, "158302", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("610146").then(n.t.bind(n, "610146", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("294569").then(n.t.bind(n, "294569", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_CAKE:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("124416").then(n.t.bind(n, "124416", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("335900").then(n.t.bind(n, "335900", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("566748").then(n.t.bind(n, "566748", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_CHEST:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("708949").then(n.t.bind(n, "708949", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("355472").then(n.t.bind(n, "355472", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("262001").then(n.t.bind(n, "262001", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_COFFEE:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("836477").then(n.t.bind(n, "836477", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("737995").then(n.t.bind(n, "737995", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("433750").then(n.t.bind(n, "433750", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            i = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return i
                },
                h = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await s.default.openPrivateChannel(e.id).then(e => {
                            let t = c.default.getChannel(e);
                            if (a(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        i = (0, d.getGiftCodeURL)(t);
                    return u.default.sendMessage(n.id, o.default.parse(n, i), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SeasonalGiftingMarketingExperiment: function() {
                    return d
                },
                useIsSeasonalGiftingActive: function() {
                    return f
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("884691"),
                r = n("866227"),
                l = n.n(r),
                a = n("862337"),
                s = n("296892");
            let u = new Date("2024-01-04T07:59:59.000Z"),
                o = l(u),
                c = (0, s.default)({
                    id: "2023-11_seasonal_gifting",
                    label: "Seasonal Gifting 2023",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                d = (0, s.default)({
                    id: "2023-11_seasonal_gifting_marketing_2023",
                    label: "Seasonal Gifting Marketing 2023",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function f() {
                let [e, t] = i.useState(() => o.isAfter(Date.now()));
                return i.useEffect(() => {
                    let n = new a.Timeout,
                        i = () => {
                            let e = Math.min(o.diff(Date.now(), "millisecond"), 864e5);
                            null == n || n.start(e, () => {
                                o.isBefore(Date.now()) ? t(!1) : i()
                            })
                        };
                    return e && i(), () => n.stop()
                }), e
            }
            var p = c
        },
        970755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchApplicationsShelf: function() {
                    return u
                },
                fetchPrivateChannelIntegrations: function() {
                    return o
                },
                deletePrivateChannelIntegration: function() {
                    return c
                }
            }), n("70102"), n("746379");
            var i = n("981980"),
                r = n("872717"),
                l = n("913144");
            n("253981");
            var a = n("140596"),
                s = n("49111");
            n("843455"), n("782340");

            function u() {
                a.default.getApplicationsShelfFetchState() === a.FetchState.NOT_FETCHED && (l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), r.default.get(s.Endpoints.APPLICATIONS_SHELF).then(e => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: e.body.applications
                })).catch(e => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function o(e) {
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
                    return o
                }
            }), n("222007");
            var i = n("884691"),
                r = n("446674"),
                l = n("201155"),
                a = n("21121"),
                s = n("970755"),
                u = n("140596");

            function o(e) {
                let {
                    channelId: t
                } = e;
                (0, a.useInMainTabsExperiment)();
                let n = (0, l.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: o,
                        applicationsShelf: c,
                        integrationsFetchState: d,
                        applicationsShelfFetchState: f
                    } = (0, r.useStateFromStoresObject)([u.default], () => ({
                        installedIntegrations: u.default.getIntegrations(t),
                        applicationsShelf: u.default.getApplicationsShelf(),
                        integrationsFetchState: u.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: u.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((d === u.FetchState.NOT_FETCHED || d === u.FetchState.FETCH_FAILED) && (0, s.fetchPrivateChannelIntegrations)(t), (f === u.FetchState.NOT_FETCHED || f === u.FetchState.FETCH_FAILED) && (0, s.fetchApplicationsShelf)())
                }, [n, t, d, f]);
                let p = new Set(o.map(e => e.application.id)),
                    h = c.filter(e => !p.has(e.id));
                return {
                    installedIntegrations: o,
                    availableApplications: h,
                    applicationsShelf: c,
                    fetched: d !== u.FetchState.NOT_FETCHED && d !== u.FetchState.FETCHING && f !== u.FetchState.NOT_FETCHED && f !== u.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        140596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return _
                }
            }), n("222007"), n("424973");
            var i, r, l = n("446674"),
                a = n("913144"),
                s = n("653047"),
                u = n("946028");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.FETCH_FAILED = 3] = "FETCH_FAILED";
            let o = new Map,
                c = new Map,
                d = [],
                f = 0,
                p = [];
            class h extends l.default.Store {
                getIntegrations(e) {
                    var t;
                    return null !== (t = o.get(e)) && void 0 !== t ? t : p
                }
                getIntegration(e, t) {
                    var n;
                    return null === (n = o.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
                }
                getAllIntegrations() {
                    return o
                }
                getIntegrationsFetchState(e) {
                    var t;
                    return null !== (t = c.get(e)) && void 0 !== t ? t : 0
                }
                getApplicationsShelfFetchState() {
                    return f
                }
                getApplicationsShelf() {
                    return d
                }
            }

            function S(e) {
                return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
            }
            h.displayName = "PrivateChannelIntegrationStore";
            let m = new h(a.default, {
                LOGOUT() {
                    o.clear()
                },
                CONNECTION_OPEN() {
                    o.clear(), c.clear()
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || 3 !== c.get(t)) return !1;
                    c.set(t, 0)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    f = 1
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
                    let {
                        applications: t
                    } = e;
                    d = t.map(s.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), f = 2
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    f = 3
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
                    let {
                        channelId: t
                    } = e;
                    o.set(t, null), c.set(t, 1)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t,
                        integrations: n
                    } = e;
                    o.set(t, S(n.map(u.createPrivateChannelIntegration))), c.set(t, 2)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
                    let {
                        channelId: t
                    } = e;
                    c.set(t, 3)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e, n = o.get(t.channel_id);
                    if (null == n) return !1;
                    o.set(t.channel_id, S([...n, (0, u.createPrivateChannelIntegration)(t)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e, n = o.get(t.channel_id);
                    if (null == n) return !1;
                    let i = (0, u.createPrivateChannelIntegration)(t),
                        r = n.findIndex(e => e.application.id === i.application.id),
                        l = [...n]; - 1 === r ? l.push(i) : l[r] = i, o.set(i.channel_id, S(l))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t,
                        applicationId: n
                    } = e, i = o.get(t);
                    if (null == i) return !1;
                    o.set(t, i.filter(e => e.application.id !== n))
                },
                CHANNEL_DELETE(e) {
                    let {
                        channel: t
                    } = e;
                    return o.delete(t.id)
                }
            });
            var _ = m
        },
        928460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, r = n("666038"),
                l = n("560350"),
                a = n("766274");
            i = class e extends r.default {
                static createFromServer(t) {
                    let n = t.staff_notes;
                    return new e({
                        id: t.id,
                        skuId: t.sku.id,
                        summary: t.summary,
                        tagline: t.tagline,
                        flavorText: t.flavor_text,
                        description: t.description,
                        childSkuIds: null != t.child_skus ? t.child_skus.map(e => e.id) : null,
                        alternativeSkuIds: null != t.alternative_skus ? t.alternative_skus.map(e => e.id) : null,
                        carouselItems: null != t.carousel_items ? t.carousel_items.map(e => ({
                            assetId: e.asset_id,
                            youtubeVideoId: e.youtube_video_id
                        })) : null,
                        assets: null != t.assets ? t.assets.map(l.transformStoreAssetFromServer) : null,
                        staffNotes: null != n ? {
                            content: n.content,
                            user: null != n.user ? new a.default(n.user) : null
                        } : null,
                        guild: null != t.guild ? {
                            id: t.guild.id,
                            name: t.guild.name,
                            icon: t.guild.icon,
                            approximateMemberCount: t.guild.approximate_member_count,
                            approximatePresenceCount: t.guild.approximate_presence_count
                        } : null,
                        thumbnail: null != t.thumbnail ? (0, l.transformStoreAssetFromServer)(t.thumbnail) : null,
                        previewVideo: null != t.preview_video ? (0, l.transformStoreAssetFromServer)(t.preview_video) : null,
                        headerBackground: null != t.header_background ? (0, l.transformStoreAssetFromServer)(t.header_background) : null,
                        headerLogoDarkTheme: null != t.header_logo_dark_theme ? (0, l.transformStoreAssetFromServer)(t.header_logo_dark_theme) : null,
                        headerLogoLightTheme: null != t.header_logo_light_theme ? (0, l.transformStoreAssetFromServer)(t.header_logo_light_theme) : null,
                        boxArt: null != t.box_art ? (0, l.transformStoreAssetFromServer)(t.box_art) : null,
                        heroBackground: null != t.hero_background ? (0, l.transformStoreAssetFromServer)(t.hero_background) : null,
                        heroVideo: null != t.hero_video ? (0, l.transformStoreAssetFromServer)(t.hero_video) : null,
                        entitlementBranchId: t.entitlement_branch_id
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
                    return E
                }
            }), n("222007"), n("70102");
            var r = n("446674"),
                l = n("913144"),
                a = n("915639"),
                s = n("928460"),
                u = n("449008");
            let o = {},
                c = {},
                d = {},
                f = {};

            function p(e) {
                let t = e.id,
                    n = e.sku.id,
                    i = o[t],
                    r = s.default.createFromServer(e);
                !(null != i && !i.isSlimDirectoryVersion() && r.isSlimDirectoryVersion()) && (!1 === e.published ? (null == d[n] && (d[n] = new Set), d[n].add(t)) : f[n] = t, o[t] = r)
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
                o = {}, f = {}, d = {}, c = {}
            }

            function _() {
                if (i === a.default.locale) return !1;
                m(), i = a.default.locale
            }
            class I extends r.default.Store {
                initialize() {
                    this.waitFor(a.default), this.syncWith([a.default], _), i = a.default.locale
                }
                get(e) {
                    return o[e]
                }
                getForSKU(e, t) {
                    let n = f[e];
                    return null != t ? c[h(t, e)] : null != n ? o[n] : null
                }
                getUnpublishedForSKU(e) {
                    let t = d[e];
                    return null == t ? [] : Array.from(t).map(e => o[e]).filter(u.isNotNullish)
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
            I.displayName = "StoreListingStore";
            var E = new I(l.default, {
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
                USER_SETTINGS_PROTO_UPDATE: _,
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
                    return i
                },
                default: function() {
                    return d
                }
            }), n("70102");
            var i, r, l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                u = n("75196"),
                o = n("741460");
            (r = i || (i = {})).LEFT = "LEFT", r.RIGHT = "RIGHT", r.UP = "UP", r.DOWN = "DOWN", r.UP_LEFT = "UP_LEFT", r.DOWN_RIGHT = "DOWN_RIGHT";
            let c = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    direction: r,
                    foreground: a,
                    className: c,
                    title: d,
                    ...f
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(f),
                    width: t,
                    height: n,
                    className: s(c, function(e) {
                        switch (e) {
                            case "LEFT":
                                return o.left;
                            case "RIGHT":
                                return o.right;
                            case "UP":
                                return null;
                            case "DOWN":
                                return o.down;
                            case "UP_LEFT":
                                return o.upLeft;
                            case "DOWN_RIGHT":
                                return o.downRight;
                            default:
                                throw Error("Invalid Direction ".concat(e))
                        }
                    }(r)),
                    viewBox: "0 0 24 24",
                    children: [null != d ? (0, l.jsx)("title", {
                        children: d
                    }) : null, (0, l.jsx)("polygon", {
                        className: a,
                        fill: i,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                })
            };
            c.Directions = i;
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
                }, l.LockIcon, void 0, {
                    size: 24
                })
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
                }, l.TicketIcon, void 0, {
                    size: 24
                })
        },
        613676: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canInstallApplication: function() {
                    return o
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
                u = n("49111");

            function o(e, t, n) {
                return null != t || null != n
            }

            function c(e) {
                let {
                    applicationId: t,
                    customInstallUrl: n,
                    installParams: o,
                    guildId: c,
                    channelId: d,
                    disableGuildSelect: f,
                    source: p
                } = e;
                if (null != n) return a.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: t,
                    guild_id: c,
                    auth_type: "custom_url",
                    source: p,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, s.handleClick)({
                    href: n
                });
                null != o && (a.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: t,
                    guild_id: c,
                    auth_type: "in_app",
                    source: p,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, l.openOAuth2Modal)({
                    guildId: c,
                    clientId: t,
                    scopes: o.scopes,
                    channelId: d,
                    disableGuildSelect: f,
                    permissions: null != o.permissions ? r.default.deserialize(o.permissions) : void 0
                }))
            }
        }
    }
]);
//# sourceMappingURL=62768.3085d0fb5594c5f25f09.js.map