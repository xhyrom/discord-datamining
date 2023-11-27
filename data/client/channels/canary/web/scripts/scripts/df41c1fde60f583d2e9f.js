(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["17744"], {
        618017: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                canEditClydeAIProfile: function() {
                    return o
                }
            });
            var l = r("957255"),
                i = r("49111");

            function o(e) {
                return null != e && l.default.can(i.Permissions.USE_CLYDE_AI, e)
            }
        },
        190045: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var l = r("37983");
            r("884691");
            var i = r("77078"),
                o = r("599110"),
                n = r("49111");

            function s(e) {
                o.default.track(n.AnalyticEvents.OPEN_MODAL, {
                    type: "Edit Clyde Profile",
                    location_page: "Profile Popout",
                    guild_id: e
                }), (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await r.el("485261").then(r.bind(r, "485261"));
                    return r => (0, l.jsx)(t, {
                        ...r,
                        guildId: e
                    })
                })
            }
        },
        21526: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                openCollectiblesShop: function() {
                    return c
                },
                closeCollectiblesShop: function() {
                    return f
                },
                productDetailsOpened: function() {
                    return E
                },
                fetchCollectiblesCategories: function() {
                    return p
                },
                fetchCollectiblesPurchases: function() {
                    return P
                },
                fetchCollectiblesProduct: function() {
                    return T
                },
                claimPremiumCollectiblesProduct: function() {
                    return _
                },
                setCollectiblesCategoryItemsViewed: function() {
                    return C
                }
            });
            var l = r("872717"),
                i = r("913144"),
                o = r("54239"),
                n = r("448993"),
                s = r("514296"),
                a = r("407788"),
                u = r("489134"),
                d = r("49111");
            r("853987"), r("426497"), r("775416"), r("216719");
            let c = e => {
                    let {
                        openInLayer: t = !0,
                        ...r
                    } = e;
                    i.default.dispatch({
                        type: "COLLECTIBLES_SHOP_OPEN",
                        ...r
                    }), t && (0, o.pushLayer)(d.Layers.COLLECTIBLES_SHOP)
                },
                f = () => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_SHOP_CLOSE"
                    }), (0, o.popLayer)()
                },
                E = e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
                        item: e
                    })
                },
                p = async () => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_CATEGORIES_FETCH"
                    });
                    try {
                        let e = await l.default.get(d.Endpoints.COLLECTIBLES_CATEGORIES);
                        i.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                            categories: e.body.map(s.default.fromServer)
                        })
                    } catch (e) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                            error: e
                        }), new n.APIError(e)
                    }
                }, P = async () => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_PURCHASES_FETCH"
                    });
                    try {
                        let e = await l.default.get(d.Endpoints.COLLECTIBLES_PURCHASES);
                        i.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                            purchases: e.body.map(u.default.fromServer)
                        })
                    } catch (e) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                            error: e
                        }), new n.APIError(e)
                    }
                }, T = async e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_FETCH"
                    });
                    try {
                        let t = await l.default.get(d.Endpoints.COLLECTIBLES_PRODUCTS(e));
                        i.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                            product: a.default.fromServer(t.body)
                        })
                    } catch (e) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                            error: e
                        }), new n.APIError(e)
                    }
                }, _ = async e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_CLAIM",
                        skuId: e
                    });
                    try {
                        var t;
                        let r = await l.default.put({
                            url: d.Endpoints.COLLECTIBLES_CLAIM,
                            body: {
                                sku_id: e
                            }
                        });
                        i.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_SUCCESS",
                            skuId: e,
                            purchases: null === (t = r.body) || void 0 === t ? void 0 : t.map(u.default.fromServer)
                        })
                    } catch (t) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_FAILURE",
                            skuId: e,
                            error: t
                        }), new n.APIError(t)
                    }
                }, C = e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
                        ...e
                    })
                }
        },
        426497: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            }), r("808653");
            var l = r("635058"),
                i = r("265586"),
                o = r("446674"),
                n = r("913144"),
                s = r("853987");
            let a = new Date(2023, 8, 25),
                u = new Date(2023, 9, 5),
                d = () => ({
                    categoryItemViews: {
                        [l.CollectiblesCategorySkuId.FANTASY]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [i.CollectiblesItemType.PROFILE_EFFECT]: u
                        },
                        [l.CollectiblesCategorySkuId.ANIME]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [i.CollectiblesItemType.PROFILE_EFFECT]: u
                        },
                        [l.CollectiblesCategorySkuId.BREAKFAST]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [i.CollectiblesItemType.PROFILE_EFFECT]: u
                        },
                        [l.CollectiblesCategorySkuId.DISXCORE]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: a
                        }
                    }
                }),
                c = d();
            class f extends o.default.PersistedStore {
                initialize(e) {
                    null != e && (c = e)
                }
                getState() {
                    return c
                }
                isItemViewed(e) {
                    var t;
                    let r = s.default.getCategoryForProduct(e.skuId);
                    return null != r && (null === (t = c.categoryItemViews[r.skuId]) || void 0 === t ? void 0 : t[e.type]) != null
                }
                reset() {
                    c = d()
                }
            }
            f.displayName = "CollectiblesPersistedStore", f.persistKey = "CollectiblesPersistedStoreV2";
            var E = new f(n.default, {
                COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
                    let {
                        categories: t,
                        itemTypes: r
                    } = e, l = new Date;
                    return t.reduce((e, t) => {
                        let {
                            skuId: i
                        } = t, o = r.reduce((e, t) => {
                            var r;
                            return (null === (r = c.categoryItemViews[i]) || void 0 === r ? void 0 : r[t]) != null ? e : (null == c.categoryItemViews[i] && (c.categoryItemViews[i] = {}), c.categoryItemViews[i][t] = l, !0)
                        }, !1);
                        return e || o
                    }, !1)
                }
            })
        },
        775416: function(e, t, r) {
            "use strict";
            let l, i, o;
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            }), r("222007");
            var n = r("917351"),
                s = r("446674"),
                a = r("913144");
            let u = new Map,
                d = u,
                c = !1;
            class f extends s.default.Store {
                get isFetching() {
                    return c
                }
                get isClaiming() {
                    return l
                }
                get purchases() {
                    return d
                }
                get fetchError() {
                    return i
                }
                get claimError() {
                    return o
                }
                getPurchase(e) {
                    return null != e ? d.get(e) : void 0
                }
            }
            f.displayName = "CollectiblesPurchaseStore";
            var E = new f(a.default, {
                COLLECTIBLES_PURCHASES_FETCH: e => {
                    c = !0, i = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
                    0 === e.purchases.length ? d = u : !(0, n.isEqual)([...d.values()], e.purchases) && (d = new Map(e.purchases.map(e => [e.skuId, e]))), c = !1, i = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    d = u, c = !1, i = t
                },
                COLLECTIBLES_CLAIM: e => {
                    l = e.skuId, o = void 0
                },
                COLLECTIBLES_CLAIM_SUCCESS: e => {
                    null == e.purchases || 0 === e.purchases.length ? d = u : !(0, n.isEqual)([...d.values()], e.purchases) && (d = new Map(e.purchases.map(e => [e.skuId, e]))), l = void 0, o = void 0
                },
                COLLECTIBLES_CLAIM_FAILURE: e => {
                    let {
                        error: t,
                        skuId: r
                    } = e;
                    l = r, o = t
                },
                LOGOUT: e => {
                    d = u, c = !1, l = void 0, i = void 0, o = void 0
                }
            })
        },
        805172: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var l = r("862205");
            let i = (0, l.createExperiment)({
                kind: "user",
                id: "2023-10_collectibles_shop_for_all",
                label: "Collectibles Shop For All",
                defaultConfig: {
                    shopForAllEnabled: !1,
                    marketingEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables Collectibles Shop For All",
                    config: {
                        shopForAllEnabled: !0,
                        marketingEnabled: !1
                    }
                }, {
                    id: 2,
                    label: "Enables Collectibles Shop For All with in-app DCF marketing",
                    config: {
                        shopForAllEnabled: !0,
                        marketingEnabled: !0
                    }
                }]
            });
            var o = e => {
                let {
                    location: t,
                    autoTrackExposure: r = !0,
                    trackExposureOptions: l = {}
                } = e;
                return i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: r,
                    trackExposureOptions: l
                })
            }
        },
        216719: function(e, t, r) {
            "use strict";
            let l;
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var i = r("446674"),
                o = r("913144");
            let n = [],
                s = n,
                a = null,
                u = e => {
                    s = n, a = null
                };
            class d extends i.default.Store {
                get analyticsLocations() {
                    return s
                }
                get analyticsSource() {
                    return a
                }
                get initialProductSkuId() {
                    return l
                }
                getAnalytics() {
                    return {
                        analyticsLocations: s,
                        analyticsSource: a
                    }
                }
            }
            d.displayName = "CollectiblesShopStore";
            var c = new d(o.default, {
                COLLECTIBLES_SHOP_OPEN: e => {
                    var t, r;
                    s = null !== (t = e.analyticsLocations) && void 0 !== t ? t : n, a = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, l = e.initialProductSkuId
                },
                COLLECTIBLES_SHOP_CLOSE: u,
                COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
                    e.item.skuId === l && (l = void 0)
                },
                LOGOUT: u
            })
        },
        514296: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            }), r("808653"), r("424973");
            var l, i = r("407788"),
                o = r("792382");
            l = class e extends o.default {
                static fromServer(t) {
                    let {
                        products: r,
                        logo: l,
                        ...o
                    } = t;
                    return new e({
                        ...super.fromServer(o),
                        products: r.reduce((e, t) => {
                            let r = i.default.fromServer(t);
                            return 0 === r.items.length ? e : (e.push(r), e)
                        }, []),
                        logo: l
                    })
                }
                constructor(e) {
                    super(e), this.products = e.products, this.logo = e.logo
                }
            }
        },
        407788: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            }), r("808653"), r("794252"), r("424973");
            var l, i = r("506838"),
                o = r("265586"),
                n = r("797647"),
                s = r("730297"),
                a = r("792382"),
                u = r("806410");
            l = class e extends a.default {
                static fromServer(t) {
                    var r;
                    let {
                        currency: l,
                        price: a,
                        prices: d,
                        ...c
                    } = t;
                    return new e({
                        ...super.fromServer(c),
                        currency: l,
                        price: a,
                        prices: null == (r = d) ? {} : Object.keys(r).reduce((e, t) => {
                            if (null == r) return e;
                            let l = r[t];
                            return e[t] = {
                                countryPrices: {
                                    countryCode: l.country_prices.country_code,
                                    prices: l.country_prices.prices.map(e => (0, n.getPriceFromServer)(e, !0))
                                },
                                paymentSourcePrices: {}
                            }, e
                        }, {}),
                        items: c.items.reduce((e, t) => (0, i.match)(t).with({
                            type: o.CollectiblesItemType.AVATAR_DECORATION
                        }, t => (e.push(s.default.fromServer(t)), e)).with({
                            type: o.CollectiblesItemType.PROFILE_EFFECT
                        }, t => (e.push(u.default.fromServer(t)), e)).otherwise(() => e), [])
                    })
                }
                constructor(e) {
                    super(e), this.currency = e.currency, this.price = e.price, this.prices = e.prices, this.summary = e.summary, this.items = e.items
                }
            }
        },
        489134: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var l, i = r("407788");
            l = class e extends i.default {
                static fromServer(t) {
                    let {
                        purchased_at: r,
                        purchase_type: l,
                        ...i
                    } = t;
                    return new e({
                        ...super.fromServer(i),
                        purchaseType: l,
                        purchasedAt: null != r ? new Date(r) : r
                    })
                }
                constructor(e) {
                    super(e), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
                }
            }
        },
        792382: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var l, i = r("666038");
            l = class e extends i.default {
                static fromServer(t) {
                    let {
                        store_listing_id: r,
                        sku_id: l,
                        unpublished_at: i,
                        ...o
                    } = t, n = null != i ? new Date(i) : null;
                    return new e({
                        ...o,
                        storeListingId: r,
                        skuId: l,
                        unpublishedAt: n
                    })
                }
                constructor(e) {
                    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt
                }
            }
        },
        335031: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var l = r("884691"),
                i = r("656280"),
                o = r.n(i),
                n = r("509043"),
                s = r("446674"),
                a = r("206230"),
                u = e => {
                    let t = (0, s.useStateFromStores)([a.default], () => a.default.desaturateUserColors ? a.default.saturation : 1),
                        r = (0, l.useMemo)(() => {
                            let {
                                h: r,
                                s: l,
                                l: i
                            } = o((0, n.int2hex)(e)).toHsl(), s = o({
                                h: r,
                                s: l * t,
                                l: i
                            });
                            return {
                                hex: s.toHexString(),
                                hsl: s.toHslString()
                            }
                        }, [e, t]);
                    return r
                }
        },
        528438: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            }), r("222007");
            var l = r("509043"),
                i = r("462274"),
                o = r("449918"),
                n = r("49111");

            function s(e, t) {
                var r, s;
                let {
                    pendingThemeColors: a,
                    isPreview: u
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = null == e ? void 0 : e.getAvatarURL(null == t ? void 0 : t.guildId, 80), c = (0, o.useColorValue)(n.Color.PRIMARY_530).hex, [f, E] = (0, i.useAvatarColors)(d, c, !1);
                if (!(null == t ? void 0 : t.canEditThemes) && !u) return [null, null];
                let p = null == t ? void 0 : t.getPreviewThemeColors(a),
                    P = null !== (r = null == p ? void 0 : p[0]) && void 0 !== r ? r : (0, l.hex2int)(f),
                    T = null !== (s = null == p ? void 0 : p[1]) && void 0 !== s ? s : (0, l.hex2int)(E);
                return [P, T]
            }
        },
        289918: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return J
                }
            }), r("222007");
            var l, i, o = r("37983"),
                n = r("884691"),
                s = r("414456"),
                a = r.n(s),
                u = r("509043"),
                d = r("446674"),
                c = r("669491"),
                f = r("77078"),
                E = r("79112"),
                p = r("812204"),
                P = r("685665"),
                T = r("462274"),
                _ = r("618017"),
                C = r("190045"),
                O = r("335031"),
                S = r("252063"),
                h = r("38766"),
                L = r("845579"),
                I = r("271938"),
                y = r("42203"),
                m = r("305961"),
                U = r("18494"),
                A = r("697218"),
                v = r("471671"),
                g = r("275623"),
                R = r("945330"),
                N = r("474571"),
                b = r("216422"),
                B = r("987772"),
                M = r("956089"),
                D = r("599110"),
                w = r("315102"),
                F = r("719923"),
                H = r("713135"),
                x = r("581295"),
                k = r("878569"),
                G = r("236100"),
                j = r("590456"),
                W = r("49111"),
                z = r("646718"),
                V = r("782340"),
                Y = r("220817");
            (i = l || (l = {}))[i.SHOULD_LOAD = 0] = "SHOULD_LOAD", i[i.LOADING = 1] = "LOADING", i[i.COMPLETE = 2] = "COMPLETE";
            let X = {
                    [j.UserProfileTypes.POPOUT]: 18,
                    [j.UserProfileTypes.MODAL]: 24,
                    [j.UserProfileTypes.SETTINGS]: 0,
                    [j.UserProfileTypes.PANEL]: 18,
                    [j.UserProfileTypes.POMELO_POPOUT]: 18,
                    [j.UserProfileTypes.CANCEL_MODAL]: 0
                },
                Z = {
                    [j.UserProfileTypes.MODAL]: W.AnalyticsPages.USER_PROFILE,
                    [j.UserProfileTypes.POPOUT]: W.AnalyticsPages.USER_POPOUT,
                    [j.UserProfileTypes.SETTINGS]: W.AnalyticsPages.USER_POPOUT,
                    [j.UserProfileTypes.PANEL]: W.AnalyticsPages.DM_CHANNEL,
                    [j.UserProfileTypes.POMELO_POPOUT]: W.AnalyticsPages.POMELO_POPOUT,
                    [j.UserProfileTypes.CANCEL_MODAL]: W.AnalyticsPages.USER_POPOUT
                };

            function K(e) {
                let {
                    type: t,
                    shown: l,
                    onClick: i
                } = e, s = (0, d.useStateFromStores)([A.default], () => {
                    let e = A.default.getCurrentUser();
                    return F.default.canUsePremiumProfileCustomization(e)
                }), u = n.useRef(!1), {
                    analyticsLocations: c
                } = (0, P.default)(p.default.BADGE);
                return n.useEffect(() => {
                    l && !u.current && (u.current = !0, D.default.track(W.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: z.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                        location: {
                            page: Z[t],
                            section: W.AnalyticsSections.NITRO_BANNER,
                            object: W.AnalyticsObjects.NITRO_BADGE
                        },
                        location_stack: c
                    }))
                }, [c, l, t]), (0, o.jsx)(f.Tooltip, {
                    tooltipContentClassName: Y.premiumIconTooltipContent,
                    text: s ? V.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : V.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
                    children: e => (0, o.jsx)(f.Clickable, {
                        ...e,
                        onClick: s ? void 0 : () => {
                            var e;
                            e = c, (0, f.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await r.el("292890").then(r.bind(r, "292890"));
                                return r => {
                                    let {
                                        onClose: l,
                                        ...i
                                    } = r;
                                    return (0, o.jsx)(t, {
                                        analyticsLocations: e,
                                        title: V.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                        description: V.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                            onAndMoreWithPremiumClick: () => {
                                                l(), E.default.open(W.UserSettingsSections.PREMIUM, null, {
                                                    analyticsLocations: e
                                                })
                                            }
                                        }),
                                        onClose: l,
                                        ...i
                                    })
                                }
                            }), null == i || i()
                        },
                        className: a(Y.premiumIconWrapper, {
                            [Y.visible]: l,
                            [Y.clickable]: !s
                        }),
                        children: (0, o.jsx)(M.TextBadge, {
                            color: "rgba(32, 34, 37, 0.8)",
                            text: (0, o.jsx)(b.default, {
                                width: 16,
                                height: 16,
                                className: Y.premiumIcon
                            })
                        })
                    })
                })
            }

            function q(e) {
                let {
                    darkenOnHover: t,
                    profileType: r,
                    profileLabel: l,
                    icon: i,
                    ...n
                } = e, s = X[r], a = "pencil" === i ? B.default : N.default;
                return (0, o.jsx)(f.Clickable, {
                    ...n,
                    "aria-label": l,
                    className: t ? Y.pencilContainerDark : Y.pencilContainer,
                    children: (0, o.jsx)(f.Tooltip, {
                        text: l,
                        children: e => (0, o.jsx)(a, {
                            ...e,
                            width: s,
                            height: s,
                            className: Y.editIcon
                        })
                    })
                })
            }

            function J(e) {
                var t, r, l;
                let {
                    user: i,
                    displayProfile: s,
                    bannerSrc: E,
                    onClose: p,
                    guildId: P,
                    profileType: A = j.UserProfileTypes.POPOUT,
                    isHovering: N,
                    animateOnHover: b,
                    allowEdit: B = !0,
                    showPremiumBadgeUpsell: M = !0,
                    hasProfileEffect: D = !1
                } = e, [X, Z] = n.useState((null == s ? void 0 : s.banner) == null ? 2 : 0), J = (0, d.useStateFromStores)([m.default], () => m.default.getGuild(P)), Q = (0, d.useStateFromStores)([I.default], () => I.default.getId()), $ = Q === i.id && B || i.isClyde() && null != J && (0, _.canEditClydeAIProfile)(J), ee = F.default.isPremiumAtLeast(null == s ? void 0 : s.premiumType, z.PremiumTypes.TIER_2), [et, er] = n.useState(!1), el = (0, d.useStateFromStores)([v.default], () => v.default.isFocused()), ei = L.GifAutoPlay.getSetting(), eo = (0, f.useToken)(c.default.unsafe_rawColors.PRIMARY_800).hex(), en = (0, f.getAvatarSize)(f.AvatarSizes.SIZE_80), es = (0, u.hex2int)((0, T.default)(i.getAvatarURL(P, en), eo, !1)), ea = (0, O.default)(null !== (t = null == s ? void 0 : s.primaryColor) && void 0 !== t ? t : es).hsl, eu = (0, k.getUserBannerSize)(A), ed = null != E ? E : null == s ? void 0 : s.getBannerURL({
                    size: eu,
                    canAnimate: b || !ei ? et : el
                }), ec = null != ed, ef = (0, d.useStateFromStores)([H.default], () => H.default.getUserProfile(i.id)), eE = y.default.getChannel(U.default.getChannelId()), {
                    appsInGDMEnabled: ep,
                    availableApplications: eP
                } = (0, S.usePrivateChannelIntegrationState)({
                    channelId: null !== (r = null == eE ? void 0 : eE.id) && void 0 !== r ? r : ""
                }), eT = null == ef ? void 0 : ef.application, e_ = ep && null != eP.find(e => e.id === (null == eT ? void 0 : eT.id));
                (0, n.useEffect)(() => {
                    if (ec && (ee || i.isClyde()) && 0 === X) {
                        Z(1);
                        let e = new Image;
                        e.src = ed, e.onload = () => Z(2)
                    }
                }, [i, ec, ee, ed, X]), n.useEffect(() => {
                    if (ei || !ee) return;
                    let e = null != E ? E : null == s ? void 0 : s.getBannerURL({
                        size: eu,
                        canAnimate: !0
                    });
                    if (null == e) return;
                    let t = new Image;
                    t.src = e
                }, [ei, ee, E, s, eu]);
                let eC = (0, h.default)({
                    analyticsLocation: {
                        page: W.AnalyticsPages.USER_POPOUT,
                        section: W.AnalyticsSections.PROFILE_POPOUT
                    }
                });
                return (0, o.jsx)(x.default, {
                    isPremium: ee,
                    hasThemeColors: null !== (l = null == s ? void 0 : s.canEditThemes) && void 0 !== l && l,
                    profileType: A,
                    hasBanner: ec,
                    hasProfileEffect: D,
                    children: (0, o.jsxs)("div", {
                        className: a(Y.banner, (0, k.getUserBannerStyles)({
                            profileType: A,
                            user: {
                                hasBanner: ec,
                                isPremium: ee,
                                hasProfileEffect: D
                            }
                        }), {
                            [Y.reducedMotion]: !ei
                        }),
                        onMouseMove: () => er(!0),
                        onMouseLeave: () => er(!1),
                        style: {
                            backgroundImage: ec && ee ? "url(".concat(ed, ")") : void 0,
                            backgroundColor: 2 !== X ? c.default.unsafe_rawColors.PRIMARY_800.css : ea
                        },
                        children: [$ ? null != J || i.isClyde() ? null != J && i.isClyde() && (0, _.canEditClydeAIProfile)(J) ? (0, o.jsx)(q, {
                            profileType: A,
                            profileLabel: V.default.Messages.CLYDE_SETTINGS,
                            icon: "gear",
                            onClick: () => {
                                null == p || p(), (0, C.default)(J.id)
                            }
                        }) : null == J ? null : (0, o.jsx)(f.Popout, {
                            spacing: 6,
                            position: "bottom",
                            renderPopout: e => {
                                let {
                                    closePopout: t
                                } = e;
                                return (0, o.jsx)(G.default, {
                                    onClose: t,
                                    onSelect: p,
                                    guild: J
                                })
                            },
                            children: e => (0, o.jsx)(q, {
                                darkenOnHover: D && N,
                                profileLabel: V.default.Messages.EDIT_PROFILE,
                                icon: "pencil",
                                ...e,
                                profileType: A
                            })
                        }) : (0, o.jsx)(q, {
                            darkenOnHover: D && N,
                            profileType: A,
                            profileLabel: V.default.Messages.EDIT_PROFILE,
                            icon: "pencil",
                            onClick: () => {
                                null == p || p(), eC()
                            }
                        }) : (() => {
                            let e = M && ec && A !== j.UserProfileTypes.SETTINGS;
                            return e ? (0, o.jsx)(K, {
                                type: A,
                                shown: void 0 === N ? et : N,
                                onClick: p
                            }) : null
                        })(), e_ ? A !== j.UserProfileTypes.MODAL ? null : (0, o.jsx)(f.Clickable, {
                            onClick: p,
                            "aria-label": V.default.Messages.BACK,
                            className: Y.pencilContainer,
                            children: (0, o.jsx)(f.Tooltip, {
                                text: V.default.Messages.BACK,
                                children: e => (0, o.jsx)(R.default, {
                                    ...e,
                                    className: Y.closeIcon,
                                    color: "white"
                                })
                            })
                        }) : null, !ei && (0, w.isAnimatedImageURL)(ed) && (0, o.jsx)(g.default, {
                            className: Y.gifTag
                        })]
                    })
                })
            }
        },
        581295: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return P
                }
            }), r("70102"), r("794252");
            var l = r("37983");
            r("884691");
            var i = r("506838"),
                o = r("769846"),
                n = r("77078"),
                s = r("606292"),
                a = r("476765"),
                u = r("159885"),
                d = r("878569"),
                c = r("590456"),
                f = r("573135"),
                E = r("423713");
            let p = {
                [c.UserProfileTypes.POPOUT]: n.AvatarSizes.SIZE_80,
                [c.UserProfileTypes.MODAL]: n.AvatarSizes.SIZE_120,
                [c.UserProfileTypes.SETTINGS]: n.AvatarSizes.SIZE_80,
                [c.UserProfileTypes.PANEL]: n.AvatarSizes.SIZE_80,
                [c.UserProfileTypes.POMELO_POPOUT]: n.AvatarSizes.SIZE_80,
                [c.UserProfileTypes.CANCEL_MODAL]: n.AvatarSizes.SIZE_56
            };

            function P(e) {
                let {
                    children: t,
                    profileType: r,
                    isPremium: P,
                    hasThemeColors: T,
                    hasBanner: _,
                    forProfileEffectModal: C,
                    hasProfileEffect: O = !1
                } = e, S = p[r], h = (0, a.useUID)(), L = function(e) {
                    let {
                        profileType: t,
                        avatarSize: r,
                        hasBanner: l,
                        isPremium: a,
                        hasThemeColors: E,
                        hasProfileEffect: p
                    } = e, P = f.AvatarDecorationBorderSizes[r];
                    if (null == P) throw Error("Unsupported avatar size for banner mask");
                    let T = (0, s.getDecorationSizeForAvatarSize)(r),
                        {
                            size: _,
                            stroke: C
                        } = (0, n.getAvatarSpecs)(r),
                        O = {
                            avatarSize: _,
                            avatarBorderSize: C,
                            avatarDecorationSize: T,
                            avatarDecorationBorderSize: P,
                            avatarDecorationOffsetY: -(T + 2 * P) / 2,
                            bannerHeight: (0, d.getUserBannerHeight)({
                                profileType: t,
                                user: {
                                    hasBanner: l,
                                    isPremium: a,
                                    hasProfileEffect: p
                                }
                            })
                        };
                    return (0, i.match)(t).with(c.UserProfileTypes.POPOUT, () => {
                        let e = E ? (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
                        return {
                            ...O,
                            bannerWidth: (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(c.UserProfileTypes.MODAL, () => ({
                        ...O,
                        bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.MODAL),
                        offsetX: 14,
                        offsetY: 5,
                        avatarDecorationOffsetX: 2
                    })).with(c.UserProfileTypes.SETTINGS, () => ({
                        ...O,
                        bannerWidth: 660,
                        offsetX: 16,
                        offsetY: -22,
                        avatarDecorationOffsetX: 8
                    })).with(c.UserProfileTypes.PANEL, () => {
                        let e = (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
                        return {
                            ...O,
                            bannerWidth: (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(c.UserProfileTypes.POMELO_POPOUT, () => ({
                        ...O,
                        bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.POMELO_POPOUT),
                        offsetX: 20,
                        offsetY: -20,
                        avatarDecorationOffsetX: 10
                    })).with(c.UserProfileTypes.CANCEL_MODAL, () => ({
                        ...O,
                        bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.CANCEL_MODAL),
                        offsetX: 8,
                        offsetY: 2,
                        avatarDecorationOffsetX: 8
                    })).exhaustive()
                }({
                    profileType: r,
                    avatarSize: S,
                    hasBanner: _,
                    isPremium: P,
                    hasThemeColors: T,
                    hasProfileEffect: O
                });
                C && (L.bannerWidth = (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
                let I = L.avatarSize / 2 + L.avatarBorderSize,
                    y = L.bannerHeight - L.offsetY;
                return (0, l.jsxs)("svg", {
                    className: E.bannerSVGWrapper,
                    viewBox: "0 0 ".concat(L.bannerWidth, " ").concat(L.bannerHeight),
                    style: {
                        minWidth: L.bannerWidth,
                        minHeight: L.bannerHeight
                    },
                    children: [(0, l.jsxs)("mask", {
                        id: h,
                        children: [(0, l.jsx)("rect", {
                            fill: "white",
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%"
                        }), (0, l.jsx)("circle", {
                            fill: "black",
                            cx: L.offsetX + I,
                            cy: y,
                            r: I
                        })]
                    }), (0, l.jsx)("foreignObject", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "visible",
                        mask: "url(#".concat(h, ")"),
                        children: t
                    })]
                })
            }
        },
        878569: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                buildGetPremiumUserBannerStyles: function() {
                    return a
                },
                getUserBannerStyles: function() {
                    return u
                },
                getUserBannerHeight: function() {
                    return d
                },
                getUserBannerSize: function() {
                    return f
                }
            }), r("794252");
            var l = r("506838"),
                i = r("617258"),
                o = r("769846"),
                n = r("590456"),
                s = r("220817");
            let a = e => t => {
                    if (t.hasBanner && t.isPremium || t.hasProfileEffect) return e.premiumUserWithBanner;
                    if (t.isPremium) {
                        var r;
                        return null !== (r = e.premiumUserWithoutBanner) && void 0 !== r ? r : e.default
                    }
                    return e.default
                },
                u = e => {
                    let {
                        profileType: t,
                        user: r
                    } = e;
                    return (0, l.match)(t).with(n.UserProfileTypes.POPOUT, n.UserProfileTypes.POMELO_POPOUT, () => {
                        let e = a({
                            premiumUserWithBanner: s.popoutBannerPremium,
                            premiumUserWithoutBanner: s.popoutNoBannerPremium,
                            default: s.popoutBanner
                        });
                        return e(r)
                    }).with(n.UserProfileTypes.MODAL, () => {
                        let e = a({
                            premiumUserWithBanner: s.profileBannerPremium,
                            premiumUserWithoutBanner: s.profileBanner,
                            default: s.profileBanner
                        });
                        return e(r)
                    }).with(n.UserProfileTypes.SETTINGS, () => s.settingsBanner).with(n.UserProfileTypes.PANEL, () => s.panelBanner).with(n.UserProfileTypes.CANCEL_MODAL, () => s.cancelModalBanner).exhaustive()
                },
                d = e => {
                    let {
                        profileType: t,
                        user: r
                    } = e, s = (0, l.match)(t).with(n.UserProfileTypes.POPOUT, () => {
                        let e = a({
                            premiumUserWithBanner: o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
                            premiumUserWithoutBanner: o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
                            default: o.default.USER_BANNER_BANNER_HEIGHT_POPOUT
                        });
                        return e(r)
                    }).with(n.UserProfileTypes.MODAL, () => {
                        let e = a({
                            premiumUserWithBanner: o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
                            premiumUserWithoutBanner: o.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
                            default: o.default.USER_BANNER_BANNER_HEIGHT_PROFILE
                        });
                        return e(r)
                    }).with(n.UserProfileTypes.POMELO_POPOUT, () => o.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(n.UserProfileTypes.SETTINGS, () => o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(n.UserProfileTypes.PANEL, () => o.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(n.UserProfileTypes.CANCEL_MODAL, () => o.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
                    return (0, i.cssValueToNumber)(s)
                },
                c = Object.freeze({
                    [n.UserProfileTypes.POPOUT]: 480,
                    [n.UserProfileTypes.PANEL]: 480,
                    [n.UserProfileTypes.MODAL]: 600,
                    [n.UserProfileTypes.SETTINGS]: 600,
                    [n.UserProfileTypes.POMELO_POPOUT]: 432,
                    [n.UserProfileTypes.CANCEL_MODAL]: 172
                }),
                f = e => c[e]
        },
        430312: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                UserProfileContext: function() {
                    return E
                },
                default: function() {
                    return P
                }
            }), r("794252");
            var l = r("37983"),
                i = r("884691"),
                o = r("414456"),
                n = r.n(o),
                s = r("506838"),
                a = r("217513"),
                u = r("906889"),
                d = r("590456"),
                c = r("200932"),
                f = r("677055");
            let E = i.createContext({
                profileType: null,
                profileTheme: null
            });

            function p(e) {
                var t, r;
                let {
                    user: o,
                    guildId: p,
                    profileType: P,
                    className: T,
                    pendingThemeColors: _,
                    useDefaultClientTheme: C,
                    children: O,
                    forceShowPremium: S = !1,
                    showOutOfBoundaryComponents: h = !1
                } = e, L = i.useRef(null), I = (0, a.default)(o.id, p), {
                    profileTheme: y
                } = (0, u.default)(o, I, {
                    themeElementRef: L,
                    pendingThemeColors: _,
                    isPreview: S,
                    useDefaultClientTheme: C
                }), m = (null == I ? void 0 : I.canEditThemes) || S, U = i.useMemo(() => ({
                    profileType: P,
                    profileTheme: y
                }), [P, y]);
                return (0, l.jsx)("div", {
                    ref: L,
                    className: n((t = P, (0, s.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutOuter).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOuter).with(d.UserProfileTypes.PANEL, () => f.userPanelOuter).with(d.UserProfileTypes.CARD, () => f.userCardOuter).exhaustive()), m ? f.userProfileOuterThemed : f.userProfileOuterUnthemed, c.profileColors, h ? f.showOutOfBoundaryComponents : void 0, "theme-".concat(y), T),
                    children: (0, l.jsx)("div", {
                        className: n((r = P, (0, s.match)(r).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutInner).with(d.UserProfileTypes.MODAL, () => f.userProfileModalInner).with(d.UserProfileTypes.PANEL, () => f.userPanelInner).with(d.UserProfileTypes.CARD, () => f.userCardInner).exhaustive()), function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                r = arguments.length > 2 ? arguments[2] : void 0;
                            return (0, s.match)({
                                profileType: r,
                                canUsePremiumProfileCustomization: e,
                                hasBanner: t
                            }).with({
                                profileType: d.UserProfileTypes.PANEL
                            }, () => f.userPanelInnerThemed).with({
                                canUsePremiumProfileCustomization: !0,
                                hasBanner: !0
                            }, () => f.userProfileInnerThemedWithBanner).with({
                                canUsePremiumProfileCustomization: !0
                            }, () => f.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => f.userProfileInnerThemedNonPremium)
                        }((null == I ? void 0 : I.canUsePremiumProfileCustomization) || S, (null == I ? void 0 : I.banner) != null, P)),
                        children: (0, l.jsx)(E.Provider, {
                            value: U,
                            children: O
                        })
                    })
                })
            }
            p.Inner = function(e) {
                var t;
                let {
                    className: r,
                    children: o
                } = e, {
                    profileType: a
                } = i.useContext(E);
                return (0, l.jsx)("div", {
                    className: n((t = a, (0, s.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, () => f.userPopoutOverlayBackground).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOverlayBackground).with(d.UserProfileTypes.PANEL, () => f.userPanelOverlayBackground).otherwise(() => f.overlayBackground)), r),
                    children: o
                })
            };
            var P = p
        },
        236100: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var l = r("37983");
            r("884691");
            var i = r("77078"),
                o = r("38766"),
                n = r("49111"),
                s = r("782340"),
                a = r("364547");
            let u = {
                    page: n.AnalyticsPages.GUILD_CHANNEL,
                    section: n.AnalyticsSections.PROFILE_POPOUT,
                    object: n.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
                },
                d = {
                    page: n.AnalyticsPages.USER_POPOUT,
                    section: n.AnalyticsSections.PROFILE_POPOUT
                };

            function c(e) {
                let {
                    onSelect: t,
                    onClose: r,
                    guild: n
                } = e, c = (0, o.default)({
                    guild: n,
                    analyticsLocation: u
                }), f = (0, o.default)({
                    analyticsLocation: d
                });
                return (0, l.jsxs)(i.Menu, {
                    className: a.popoutMenu,
                    onSelect: t,
                    navId: "edit-profile-popout",
                    onClose: r,
                    "aria-label": s.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
                    children: [(0, l.jsx)(i.MenuItem, {
                        id: "edit-server-profile",
                        label: s.default.Messages.CHANGE_IDENTITY,
                        subtext: s.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                        action: () => c()
                    }), (0, l.jsx)(i.MenuItem, {
                        id: "edit-default-profile",
                        label: s.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                        subtext: s.default.Messages.USER_PROFILE_MENU_HELP,
                        action: () => f()
                    })]
                })
            }
        },
        906889: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            }), r("222007");
            var l = r("884691"),
                i = r("509043"),
                o = r("446674"),
                n = r("841098"),
                s = r("206230"),
                a = r("388491"),
                u = r("528438");
            let d = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

            function c(e, t, r) {
                var l;
                null == e || null === (l = e.current) || void 0 === l || l.style.setProperty(t, null != r ? r : null)
            }

            function f(e, t) {
                let {
                    themeElementRef: r,
                    pendingThemeColors: f,
                    isPreview: E,
                    useDefaultClientTheme: p
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [P, T] = (0, u.default)(e, t, {
                    pendingThemeColors: f,
                    isPreview: E
                }), [_, C, O] = (0, o.useStateFromStoresArray)([s.default], () => [s.default.desaturateUserColors, s.default.saturation, s.default.syncProfileThemeWithUserTheme]), S = (0, n.default)(), h = l.useCallback(() => O || p ? S : (0, a.getProfileTheme)(P), [p, O, S, P]), [L, I] = l.useState(h()), y = (0, a.useProfileThemeValues)(L), m = (0, a.useDividerColor)(L, P), U = (0, a.useMessageInputBorderColor)(L, T), A = l.useCallback((e, t) => (0, i.int2hsl)(e, _, null, t), [_]);
                l.useEffect(() => {
                    I(h())
                }, [P, O, S, p, h]);
                let v = (0, a.useAvatarBorderColor)(L, P, O),
                    g = null != v ? (0, i.int2hsl)(v, !1, _ ? C : null) : null,
                    R = e => d.forEach(t => {
                        e.style.removeProperty(t)
                    });
                return l.useEffect(() => {
                    if (null != P && null != T && null != L && null != v && null != m && null != U) {
                        let e = O && L !== S ? null == y ? void 0 : y.overlaySyncedWithUserTheme : null == y ? void 0 : y.overlay;
                        c(r, "--profile-gradient-primary-color", A(P)), c(r, "--profile-gradient-secondary-color", A(T)), c(r, "--profile-gradient-button-color", A((0, a.calculateButtonColor)(P))), c(r, "--profile-gradient-overlay-color", e), c(r, "--profile-body-background-color", null == y ? void 0 : y.sectionBox), c(r, "--profile-body-background-hover", null == y ? void 0 : y.profileBodyBackgroundHover), c(r, "--profile-body-divider-color", A(m, null == y ? void 0 : y.dividerOpacity)), c(r, "--profile-avatar-border-color", A(v)), c(r, "--profile-message-input-border-color", A(U)), c(r, "--profile-note-background-color", null == y ? void 0 : y.noteBackgroundColor), c(r, "--profile-role-pill-background-color", null == y ? void 0 : y.rolePillBackgroundColor), c(r, "--profile-role-pill-border-color", null == y ? void 0 : y.rolePillBorderColor)
                    } else(null == r ? void 0 : r.current) != null && R(null == r ? void 0 : r.current)
                }, [P, T, v, L, S, r, A, O, m, null == y ? void 0 : y.overlaySyncedWithUserTheme, null == y ? void 0 : y.overlay, null == y ? void 0 : y.sectionBox, null == y ? void 0 : y.profileBodyBackgroundHover, null == y ? void 0 : y.dividerOpacity, null == y ? void 0 : y.noteBackgroundColor, null == y ? void 0 : y.rolePillBackgroundColor, null == y ? void 0 : y.rolePillBorderColor, U]), {
                    profileTheme: null != L ? L : S,
                    primaryProfileColor: P,
                    avatarBorderColor: g
                }
            }
        }
    }
]);
//# sourceMappingURL=df41c1fde60f583d2e9f.js.map