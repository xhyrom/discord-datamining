(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["17744"], {
        618017: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                canEditClydeAIProfile: function() {
                    return o
                }
            });
            var l = t("957255"),
                i = t("49111");

            function o(e) {
                return null != e && l.default.can(i.Permissions.USE_CLYDE_AI, e)
            }
        },
        190045: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return s
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("77078"),
                o = t("599110"),
                n = t("49111");

            function s(e) {
                o.default.track(n.AnalyticEvents.OPEN_MODAL, {
                    type: "Edit Clyde Profile",
                    location_page: "Profile Popout",
                    guild_id: e
                }), (0, i.openModalLazy)(async () => {
                    let {
                        default: r
                    } = await t.el("485261").then(t.bind(t, "485261"));
                    return t => (0, l.jsx)(r, {
                        ...t,
                        guildId: e
                    })
                })
            }
        },
        21526: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                trackCollectiblesShopOpened: function() {
                    return d
                },
                openCollectiblesShop: function() {
                    return f
                },
                closeCollectiblesShop: function() {
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
            var l = t("872717"),
                i = t("913144"),
                o = t("54239"),
                n = t("448993"),
                s = t("514296"),
                a = t("407788"),
                u = t("489134"),
                c = t("49111");
            t("853987"), t("426497"), t("775416"), t("216719");
            let d = e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_SHOP_OPEN",
                        ...e
                    })
                },
                f = e => {
                    d(e), (0, o.pushLayer)(c.Layers.COLLECTIBLES_SHOP)
                },
                E = () => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_SHOP_CLOSE"
                    }), (0, o.popLayer)()
                },
                p = async () => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_CATEGORIES_FETCH"
                    });
                    try {
                        let e = await l.default.get(c.Endpoints.COLLECTIBLES_CATEGORIES);
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
                        let e = await l.default.get(c.Endpoints.COLLECTIBLES_PURCHASES);
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
                        let r = await l.default.get(c.Endpoints.COLLECTIBLES_PRODUCTS(e));
                        i.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                            product: a.default.fromServer(r.body)
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
                        var r;
                        let t = await l.default.put({
                            url: c.Endpoints.COLLECTIBLES_CLAIM,
                            body: {
                                sku_id: e
                            }
                        });
                        i.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_SUCCESS",
                            skuId: e,
                            purchases: null === (r = t.body) || void 0 === r ? void 0 : r.map(u.default.fromServer)
                        })
                    } catch (r) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_FAILURE",
                            skuId: e,
                            error: r
                        }), new n.APIError(r)
                    }
                }, C = e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
                        ...e
                    })
                }
        },
        426497: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return E
                }
            }), t("808653");
            var l = t("635058"),
                i = t("265586"),
                o = t("446674"),
                n = t("913144"),
                s = t("853987");
            let a = new Date(2023, 8, 25),
                u = new Date(2023, 9, 5),
                c = () => ({
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
                d = c();
            class f extends o.default.PersistedStore {
                initialize(e) {
                    null != e && (d = e)
                }
                getState() {
                    return d
                }
                isItemViewed(e) {
                    var r;
                    let t = s.default.getCategoryForProduct(e.skuId);
                    return null != t && (null === (r = d.categoryItemViews[t.skuId]) || void 0 === r ? void 0 : r[e.type]) != null
                }
                reset() {
                    d = c()
                }
            }
            f.displayName = "CollectiblesPersistedStore", f.persistKey = "CollectiblesPersistedStoreV2";
            var E = new f(n.default, {
                COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
                    let {
                        categories: r,
                        itemTypes: t
                    } = e, l = new Date;
                    return r.reduce((e, r) => {
                        let {
                            skuId: i
                        } = r, o = t.reduce((e, r) => {
                            var t;
                            return (null === (t = d.categoryItemViews[i]) || void 0 === t ? void 0 : t[r]) != null ? e : (null == d.categoryItemViews[i] && (d.categoryItemViews[i] = {}), d.categoryItemViews[i][r] = l, !0)
                        }, !1);
                        return e || o
                    }, !1)
                }
            })
        },
        775416: function(e, r, t) {
            "use strict";
            let l, i, o;
            t.r(r), t.d(r, {
                default: function() {
                    return E
                }
            }), t("222007");
            var n = t("917351"),
                s = t("446674"),
                a = t("913144");
            let u = new Map,
                c = u,
                d = !1;
            class f extends s.default.Store {
                get isFetching() {
                    return d
                }
                get isClaiming() {
                    return l
                }
                get purchases() {
                    return c
                }
                get fetchError() {
                    return i
                }
                get claimError() {
                    return o
                }
                getPurchase(e) {
                    return null != e ? c.get(e) : void 0
                }
            }
            f.displayName = "CollectiblesPurchaseStore";
            var E = new f(a.default, {
                COLLECTIBLES_PURCHASES_FETCH: e => {
                    d = !0, i = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
                    0 === e.purchases.length ? c = u : !(0, n.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, i = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
                    let {
                        error: r
                    } = e;
                    c = u, d = !1, i = r
                },
                COLLECTIBLES_CLAIM: e => {
                    l = e.skuId, o = void 0
                },
                COLLECTIBLES_CLAIM_SUCCESS: e => {
                    null == e.purchases || 0 === e.purchases.length ? c = u : !(0, n.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), l = void 0, o = void 0
                },
                COLLECTIBLES_CLAIM_FAILURE: e => {
                    let {
                        error: r,
                        skuId: t
                    } = e;
                    l = t, o = r
                },
                LOGOUT: e => {
                    c = u, d = !1, l = void 0, i = void 0, o = void 0
                }
            })
        },
        805172: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return o
                }
            });
            var l = t("862205");
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
                    location: r,
                    autoTrackExposure: t = !0,
                    trackExposureOptions: l = {}
                } = e;
                return i.useExperiment({
                    location: r
                }, {
                    autoTrackExposure: t,
                    trackExposureOptions: l
                })
            }
        },
        216719: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return c
                }
            });
            var l = t("446674"),
                i = t("913144");
            let o = [],
                n = o,
                s = null,
                a = e => {
                    n = o, s = null
                };
            class u extends l.default.Store {
                get analyticsLocations() {
                    return n
                }
                get analyticsSource() {
                    return s
                }
                getAnalytics() {
                    return {
                        analyticsLocations: n,
                        analyticsSource: s
                    }
                }
            }
            u.displayName = "CollectiblesShopStore";
            var c = new u(i.default, {
                COLLECTIBLES_SHOP_OPEN: e => {
                    var r, t;
                    n = null !== (r = e.analyticsLocations) && void 0 !== r ? r : o, s = null !== (t = e.analyticsSource) && void 0 !== t ? t : null
                },
                COLLECTIBLES_SHOP_CLOSE: a,
                LOGOUT: a
            })
        },
        514296: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return l
                }
            }), t("808653"), t("424973");
            var l, i = t("407788"),
                o = t("792382");
            l = class e extends o.default {
                static fromServer(r) {
                    let {
                        products: t,
                        logo: l,
                        ...o
                    } = r;
                    return new e({
                        ...super.fromServer(o),
                        products: t.reduce((e, r) => {
                            let t = i.default.fromServer(r);
                            return 0 === t.items.length ? e : (e.push(t), e)
                        }, []),
                        logo: l
                    })
                }
                constructor(e) {
                    super(e), this.products = e.products, this.logo = e.logo
                }
            }
        },
        407788: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return l
                }
            }), t("808653"), t("794252"), t("424973");
            var l, i = t("506838"),
                o = t("265586"),
                n = t("797647"),
                s = t("730297"),
                a = t("792382"),
                u = t("806410");
            l = class e extends a.default {
                static fromServer(r) {
                    var t;
                    let {
                        currency: l,
                        price: a,
                        prices: c,
                        ...d
                    } = r;
                    return new e({
                        ...super.fromServer(d),
                        currency: l,
                        price: a,
                        prices: null == (t = c) ? {} : Object.keys(t).reduce((e, r) => {
                            if (null == t) return e;
                            let l = t[r];
                            return e[r] = {
                                countryPrices: {
                                    countryCode: l.country_prices.country_code,
                                    prices: l.country_prices.prices.map(e => (0, n.getPriceFromServer)(e, !0))
                                },
                                paymentSourcePrices: {}
                            }, e
                        }, {}),
                        items: d.items.reduce((e, r) => (0, i.match)(r).with({
                            type: o.CollectiblesItemType.AVATAR_DECORATION
                        }, r => (e.push(s.default.fromServer(r)), e)).with({
                            type: o.CollectiblesItemType.PROFILE_EFFECT
                        }, r => (e.push(u.default.fromServer(r)), e)).otherwise(() => e), [])
                    })
                }
                constructor(e) {
                    super(e), this.currency = e.currency, this.price = e.price, this.prices = e.prices, this.summary = e.summary, this.items = e.items
                }
            }
        },
        489134: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return l
                }
            });
            var l, i = t("407788");
            l = class e extends i.default {
                static fromServer(r) {
                    let {
                        purchased_at: t,
                        purchase_type: l,
                        ...i
                    } = r;
                    return new e({
                        ...super.fromServer(i),
                        purchaseType: l,
                        purchasedAt: null != t ? new Date(t) : t
                    })
                }
                constructor(e) {
                    super(e), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
                }
            }
        },
        792382: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return l
                }
            });
            var l, i = t("666038");
            l = class e extends i.default {
                static fromServer(r) {
                    let {
                        store_listing_id: t,
                        sku_id: l,
                        unpublished_at: i,
                        ...o
                    } = r, n = null != i ? new Date(i) : null;
                    return new e({
                        ...o,
                        storeListingId: t,
                        skuId: l,
                        unpublishedAt: n
                    })
                }
                constructor(e) {
                    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt
                }
            }
        },
        335031: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return u
                }
            });
            var l = t("884691"),
                i = t("656280"),
                o = t.n(i),
                n = t("509043"),
                s = t("446674"),
                a = t("206230"),
                u = e => {
                    let r = (0, s.useStateFromStores)([a.default], () => a.default.desaturateUserColors ? a.default.saturation : 1),
                        t = (0, l.useMemo)(() => {
                            let {
                                h: t,
                                s: l,
                                l: i
                            } = o((0, n.int2hex)(e)).toHsl(), s = o({
                                h: t,
                                s: l * r,
                                l: i
                            });
                            return {
                                hex: s.toHexString(),
                                hsl: s.toHslString()
                            }
                        }, [e, r]);
                    return t
                }
        },
        528438: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return s
                }
            }), t("222007");
            var l = t("509043"),
                i = t("462274"),
                o = t("449918"),
                n = t("49111");

            function s(e, r) {
                var t, s;
                let {
                    pendingThemeColors: a,
                    isPreview: u
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, c = null == e ? void 0 : e.getAvatarURL(null == r ? void 0 : r.guildId, 80), d = (0, o.useColorValue)(n.Color.PRIMARY_530).hex, [f, E] = (0, i.useAvatarColors)(c, d, !1);
                if (!(null == r ? void 0 : r.canEditThemes) && !u) return [null, null];
                let p = null == r ? void 0 : r.getPreviewThemeColors(a),
                    P = null !== (t = null == p ? void 0 : p[0]) && void 0 !== t ? t : (0, l.hex2int)(f),
                    T = null !== (s = null == p ? void 0 : p[1]) && void 0 !== s ? s : (0, l.hex2int)(E);
                return [P, T]
            }
        },
        289918: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return J
                }
            }), t("222007");
            var l, i, o = t("37983"),
                n = t("884691"),
                s = t("414456"),
                a = t.n(s),
                u = t("509043"),
                c = t("446674"),
                d = t("669491"),
                f = t("77078"),
                E = t("79112"),
                p = t("812204"),
                P = t("685665"),
                T = t("462274"),
                _ = t("618017"),
                C = t("190045"),
                O = t("335031"),
                S = t("252063"),
                h = t("38766"),
                L = t("845579"),
                I = t("271938"),
                y = t("42203"),
                m = t("305961"),
                U = t("18494"),
                A = t("697218"),
                v = t("471671"),
                g = t("275623"),
                R = t("945330"),
                N = t("474571"),
                b = t("216422"),
                B = t("987772"),
                M = t("956089"),
                D = t("599110"),
                w = t("315102"),
                F = t("719923"),
                H = t("713135"),
                x = t("581295"),
                k = t("878569"),
                G = t("236100"),
                j = t("590456"),
                W = t("49111"),
                z = t("646718"),
                V = t("782340"),
                Y = t("220817");
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
                    type: r,
                    shown: l,
                    onClick: i
                } = e, s = (0, c.useStateFromStores)([A.default], () => {
                    let e = A.default.getCurrentUser();
                    return F.default.canUsePremiumProfileCustomization(e)
                }), u = n.useRef(!1), {
                    analyticsLocations: d
                } = (0, P.default)(p.default.BADGE);
                return n.useEffect(() => {
                    l && !u.current && (u.current = !0, D.default.track(W.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: z.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                        location: {
                            page: Z[r],
                            section: W.AnalyticsSections.NITRO_BANNER,
                            object: W.AnalyticsObjects.NITRO_BADGE
                        },
                        location_stack: d
                    }))
                }, [d, l, r]), (0, o.jsx)(f.Tooltip, {
                    tooltipContentClassName: Y.premiumIconTooltipContent,
                    text: s ? V.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : V.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
                    children: e => (0, o.jsx)(f.Clickable, {
                        ...e,
                        onClick: s ? void 0 : () => {
                            var e;
                            e = d, (0, f.openModalLazy)(async () => {
                                let {
                                    default: r
                                } = await t.el("292890").then(t.bind(t, "292890"));
                                return t => {
                                    let {
                                        onClose: l,
                                        ...i
                                    } = t;
                                    return (0, o.jsx)(r, {
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
                    darkenOnHover: r,
                    profileType: t,
                    profileLabel: l,
                    icon: i,
                    ...n
                } = e, s = X[t], a = "pencil" === i ? B.default : N.default;
                return (0, o.jsx)(f.Clickable, {
                    ...n,
                    "aria-label": l,
                    className: r ? Y.pencilContainerDark : Y.pencilContainer,
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
                var r, t, l;
                let {
                    user: i,
                    displayProfile: s,
                    bannerSrc: E,
                    onClose: p,
                    guildId: P,
                    profileType: A = j.UserProfileTypes.POPOUT,
                    allowEdit: N = !0,
                    showPremiumBadgeUpsell: b = !0,
                    isHovering: B,
                    animateOnHover: M
                } = e, [D, X] = n.useState((null == s ? void 0 : s.banner) == null ? 2 : 0), Z = (0, c.useStateFromStores)([m.default], () => m.default.getGuild(P)), J = (0, c.useStateFromStores)([I.default], () => I.default.getId()), Q = J === i.id && N || i.isClyde() && null != Z && (0, _.canEditClydeAIProfile)(Z), $ = F.default.isPremiumAtLeast(null == s ? void 0 : s.premiumType, z.PremiumTypes.TIER_2), [ee, er] = n.useState(!1), et = (0, c.useStateFromStores)([v.default], () => v.default.isFocused()), el = L.GifAutoPlay.getSetting(), ei = (0, f.useToken)(d.default.unsafe_rawColors.PRIMARY_800).hex(), eo = (0, f.getAvatarSize)(f.AvatarSizes.SIZE_80), en = (0, u.hex2int)((0, T.default)(i.getAvatarURL(P, eo), ei, !1)), es = (0, O.default)(null !== (r = null == s ? void 0 : s.primaryColor) && void 0 !== r ? r : en).hsl, ea = (0, k.getUserBannerSize)(A), eu = null != E ? E : null == s ? void 0 : s.getBannerURL({
                    size: ea,
                    canAnimate: M || !el ? ee : et
                }), ec = null != eu, ed = (0, c.useStateFromStores)([H.default], () => H.default.getUserProfile(i.id)), ef = y.default.getChannel(U.default.getChannelId()), {
                    appsInGDMEnabled: eE,
                    availableApplications: ep
                } = (0, S.usePrivateChannelIntegrationState)({
                    channelId: null !== (t = null == ef ? void 0 : ef.id) && void 0 !== t ? t : ""
                }), eP = null == ed ? void 0 : ed.application, eT = eE && null != ep.find(e => e.id === (null == eP ? void 0 : eP.id));
                if (ec && ($ || i.isClyde()) && 0 === D) {
                    X(1);
                    let e = new Image;
                    e.src = eu, e.onload = () => X(2)
                }
                n.useEffect(() => {
                    if (el || !$) return;
                    let e = null != E ? E : null == s ? void 0 : s.getBannerURL({
                        size: ea,
                        canAnimate: !0
                    });
                    if (null == e) return;
                    let r = new Image;
                    r.src = e
                }, [el, $, E, s, ea]);
                let e_ = (0, h.default)({
                        analyticsLocation: {
                            page: W.AnalyticsPages.USER_POPOUT,
                            section: W.AnalyticsSections.PROFILE_POPOUT
                        }
                    }),
                    eC = (null == s ? void 0 : s.profileEffectID) != null;
                return (0, o.jsx)(x.default, {
                    isPremium: $,
                    hasThemeColors: null !== (l = null == s ? void 0 : s.canEditThemes) && void 0 !== l && l,
                    profileType: A,
                    hasBanner: ec,
                    hasProfileEffect: eC,
                    children: (0, o.jsxs)("div", {
                        className: a(Y.banner, (0, k.getUserBannerStyles)({
                            profileType: A,
                            user: {
                                hasBanner: ec,
                                isPremium: $,
                                hasProfileEffect: eC
                            }
                        }), {
                            [Y.reducedMotion]: !el
                        }),
                        onMouseMove: () => er(!0),
                        onMouseLeave: () => er(!1),
                        style: {
                            backgroundImage: ec && $ ? "url(".concat(eu, ")") : void 0,
                            backgroundColor: 2 !== D ? d.default.unsafe_rawColors.PRIMARY_800.css : es
                        },
                        children: [Q ? null != Z || i.isClyde() ? null != Z && i.isClyde() && (0, _.canEditClydeAIProfile)(Z) ? (0, o.jsx)(q, {
                            profileType: A,
                            profileLabel: V.default.Messages.CLYDE_SETTINGS,
                            icon: "gear",
                            onClick: () => {
                                null == p || p(), (0, C.default)(Z.id)
                            }
                        }) : null == Z ? null : (0, o.jsx)(f.Popout, {
                            spacing: 6,
                            position: "bottom",
                            renderPopout: e => {
                                let {
                                    closePopout: r
                                } = e;
                                return (0, o.jsx)(G.default, {
                                    onClose: r,
                                    onSelect: p,
                                    guild: Z
                                })
                            },
                            children: e => (0, o.jsx)(q, {
                                darkenOnHover: eC && B,
                                profileLabel: V.default.Messages.EDIT_PROFILE,
                                icon: "pencil",
                                ...e,
                                profileType: A
                            })
                        }) : (0, o.jsx)(q, {
                            darkenOnHover: eC && B,
                            profileType: A,
                            profileLabel: V.default.Messages.EDIT_PROFILE,
                            icon: "pencil",
                            onClick: () => {
                                null == p || p(), e_()
                            }
                        }) : (() => {
                            let e = b && ec && A !== j.UserProfileTypes.SETTINGS;
                            return e ? (0, o.jsx)(K, {
                                type: A,
                                shown: void 0 === B ? ee : B,
                                onClick: p
                            }) : null
                        })(), eT ? A !== j.UserProfileTypes.MODAL ? null : (0, o.jsx)(f.Clickable, {
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
                        }) : null, !el && (0, w.isAnimatedImageURL)(eu) && (0, o.jsx)(g.default, {
                            className: Y.gifTag
                        })]
                    })
                })
            }
        },
        581295: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return P
                }
            }), t("70102"), t("794252");
            var l = t("37983");
            t("884691");
            var i = t("506838"),
                o = t("769846"),
                n = t("77078"),
                s = t("606292"),
                a = t("476765"),
                u = t("159885"),
                c = t("878569"),
                d = t("590456"),
                f = t("573135"),
                E = t("423713");
            let p = {
                [d.UserProfileTypes.POPOUT]: n.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.MODAL]: n.AvatarSizes.SIZE_120,
                [d.UserProfileTypes.SETTINGS]: n.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.PANEL]: n.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.POMELO_POPOUT]: n.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.CANCEL_MODAL]: n.AvatarSizes.SIZE_56
            };

            function P(e) {
                let {
                    children: r,
                    profileType: t,
                    isPremium: P,
                    hasThemeColors: T,
                    hasBanner: _,
                    forProfileEffectModal: C,
                    hasProfileEffect: O = !1
                } = e, S = p[t], h = (0, a.useUID)(), L = function(e) {
                    let {
                        profileType: r,
                        avatarSize: t,
                        hasBanner: l,
                        isPremium: a,
                        hasThemeColors: E,
                        hasProfileEffect: p
                    } = e, P = f.AvatarDecorationBorderSizes[t];
                    if (null == P) throw Error("Unsupported avatar size for banner mask");
                    let T = (0, s.getDecorationSizeForAvatarSize)(t),
                        {
                            size: _,
                            stroke: C
                        } = (0, n.getAvatarSpecs)(t),
                        O = {
                            avatarSize: _,
                            avatarBorderSize: C,
                            avatarDecorationSize: T,
                            avatarDecorationBorderSize: P,
                            avatarDecorationOffsetY: -(T + 2 * P) / 2,
                            bannerHeight: (0, c.getUserBannerHeight)({
                                profileType: r,
                                user: {
                                    hasBanner: l,
                                    isPremium: a,
                                    hasProfileEffect: p
                                }
                            })
                        };
                    return (0, i.match)(r).with(d.UserProfileTypes.POPOUT, () => {
                        let e = E ? (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
                        return {
                            ...O,
                            bannerWidth: (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(d.UserProfileTypes.MODAL, () => ({
                        ...O,
                        bannerWidth: (0, c.getUserBannerSize)(d.UserProfileTypes.MODAL),
                        offsetX: 14,
                        offsetY: 5,
                        avatarDecorationOffsetX: 2
                    })).with(d.UserProfileTypes.SETTINGS, () => ({
                        ...O,
                        bannerWidth: 660,
                        offsetX: 16,
                        offsetY: -22,
                        avatarDecorationOffsetX: 8
                    })).with(d.UserProfileTypes.PANEL, () => {
                        let e = (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
                        return {
                            ...O,
                            bannerWidth: (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(d.UserProfileTypes.POMELO_POPOUT, () => ({
                        ...O,
                        bannerWidth: (0, c.getUserBannerSize)(d.UserProfileTypes.POMELO_POPOUT),
                        offsetX: 20,
                        offsetY: -20,
                        avatarDecorationOffsetX: 10
                    })).with(d.UserProfileTypes.CANCEL_MODAL, () => ({
                        ...O,
                        bannerWidth: (0, c.getUserBannerSize)(d.UserProfileTypes.CANCEL_MODAL),
                        offsetX: 8,
                        offsetY: 2,
                        avatarDecorationOffsetX: 8
                    })).exhaustive()
                }({
                    profileType: t,
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
                        children: r
                    })]
                })
            }
        },
        878569: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                buildGetPremiumUserBannerStyles: function() {
                    return a
                },
                getUserBannerStyles: function() {
                    return u
                },
                getUserBannerHeight: function() {
                    return c
                },
                getUserBannerSize: function() {
                    return f
                }
            }), t("794252");
            var l = t("506838"),
                i = t("617258"),
                o = t("769846"),
                n = t("590456"),
                s = t("220817");
            let a = e => r => {
                    if (r.hasBanner && r.isPremium || r.hasProfileEffect) return e.premiumUserWithBanner;
                    if (r.isPremium) {
                        var t;
                        return null !== (t = e.premiumUserWithoutBanner) && void 0 !== t ? t : e.default
                    }
                    return e.default
                },
                u = e => {
                    let {
                        profileType: r,
                        user: t
                    } = e;
                    return (0, l.match)(r).with(n.UserProfileTypes.POPOUT, n.UserProfileTypes.POMELO_POPOUT, () => {
                        let e = a({
                            premiumUserWithBanner: s.popoutBannerPremium,
                            premiumUserWithoutBanner: s.popoutNoBannerPremium,
                            default: s.popoutBanner
                        });
                        return e(t)
                    }).with(n.UserProfileTypes.MODAL, () => {
                        let e = a({
                            premiumUserWithBanner: s.profileBannerPremium,
                            premiumUserWithoutBanner: s.profileBanner,
                            default: s.profileBanner
                        });
                        return e(t)
                    }).with(n.UserProfileTypes.SETTINGS, () => s.settingsBanner).with(n.UserProfileTypes.PANEL, () => s.panelBanner).with(n.UserProfileTypes.CANCEL_MODAL, () => s.cancelModalBanner).exhaustive()
                },
                c = e => {
                    let {
                        profileType: r,
                        user: t
                    } = e, s = (0, l.match)(r).with(n.UserProfileTypes.POPOUT, () => {
                        let e = a({
                            premiumUserWithBanner: o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
                            premiumUserWithoutBanner: o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
                            default: o.default.USER_BANNER_BANNER_HEIGHT_POPOUT
                        });
                        return e(t)
                    }).with(n.UserProfileTypes.MODAL, () => {
                        let e = a({
                            premiumUserWithBanner: o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
                            premiumUserWithoutBanner: o.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
                            default: o.default.USER_BANNER_BANNER_HEIGHT_PROFILE
                        });
                        return e(t)
                    }).with(n.UserProfileTypes.POMELO_POPOUT, () => o.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(n.UserProfileTypes.SETTINGS, () => o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(n.UserProfileTypes.PANEL, () => o.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(n.UserProfileTypes.CANCEL_MODAL, () => o.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
                    return (0, i.cssValueToNumber)(s)
                },
                d = Object.freeze({
                    [n.UserProfileTypes.POPOUT]: 480,
                    [n.UserProfileTypes.PANEL]: 480,
                    [n.UserProfileTypes.MODAL]: 600,
                    [n.UserProfileTypes.SETTINGS]: 600,
                    [n.UserProfileTypes.POMELO_POPOUT]: 432,
                    [n.UserProfileTypes.CANCEL_MODAL]: 172
                }),
                f = e => d[e]
        },
        430312: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                UserProfileContext: function() {
                    return E
                },
                default: function() {
                    return P
                }
            }), t("794252");
            var l = t("37983"),
                i = t("884691"),
                o = t("414456"),
                n = t.n(o),
                s = t("506838"),
                a = t("217513"),
                u = t("906889"),
                c = t("590456"),
                d = t("200932"),
                f = t("677055");
            let E = i.createContext({
                profileType: null,
                profileTheme: null
            });

            function p(e) {
                var r, t;
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
                    className: n((r = P, (0, s.match)(r).with(c.UserProfileTypes.POPOUT, c.UserProfileTypes.SETTINGS, c.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutOuter).with(c.UserProfileTypes.MODAL, () => f.userProfileModalOuter).with(c.UserProfileTypes.PANEL, () => f.userPanelOuter).with(c.UserProfileTypes.CARD, () => f.userCardOuter).exhaustive()), m ? f.userProfileOuterThemed : f.userProfileOuterUnthemed, d.profileColors, h ? f.showOutOfBoundaryComponents : void 0, "theme-".concat(y), T),
                    children: (0, l.jsx)("div", {
                        className: n((t = P, (0, s.match)(t).with(c.UserProfileTypes.POPOUT, c.UserProfileTypes.SETTINGS, c.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutInner).with(c.UserProfileTypes.MODAL, () => f.userProfileModalInner).with(c.UserProfileTypes.PANEL, () => f.userPanelInner).with(c.UserProfileTypes.CARD, () => f.userCardInner).exhaustive()), function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                t = arguments.length > 2 ? arguments[2] : void 0;
                            return (0, s.match)({
                                profileType: t,
                                canUsePremiumProfileCustomization: e,
                                hasBanner: r
                            }).with({
                                profileType: c.UserProfileTypes.PANEL
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
                var r;
                let {
                    className: t,
                    children: o
                } = e, {
                    profileType: a
                } = i.useContext(E);
                return (0, l.jsx)("div", {
                    className: n((r = a, (0, s.match)(r).with(c.UserProfileTypes.POPOUT, c.UserProfileTypes.SETTINGS, () => f.userPopoutOverlayBackground).with(c.UserProfileTypes.MODAL, () => f.userProfileModalOverlayBackground).with(c.UserProfileTypes.PANEL, () => f.userPanelOverlayBackground).otherwise(() => f.overlayBackground)), t),
                    children: o
                })
            };
            var P = p
        },
        236100: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return d
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("77078"),
                o = t("38766"),
                n = t("49111"),
                s = t("782340"),
                a = t("364547");
            let u = {
                    page: n.AnalyticsPages.GUILD_CHANNEL,
                    section: n.AnalyticsSections.PROFILE_POPOUT,
                    object: n.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
                },
                c = {
                    page: n.AnalyticsPages.USER_POPOUT,
                    section: n.AnalyticsSections.PROFILE_POPOUT
                };

            function d(e) {
                let {
                    onSelect: r,
                    onClose: t,
                    guild: n
                } = e, d = (0, o.default)({
                    guild: n,
                    analyticsLocation: u
                }), f = (0, o.default)({
                    analyticsLocation: c
                });
                return (0, l.jsxs)(i.Menu, {
                    className: a.popoutMenu,
                    onSelect: r,
                    navId: "edit-profile-popout",
                    onClose: t,
                    "aria-label": s.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
                    children: [(0, l.jsx)(i.MenuItem, {
                        id: "edit-server-profile",
                        label: s.default.Messages.CHANGE_IDENTITY,
                        subtext: s.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                        action: () => d()
                    }), (0, l.jsx)(i.MenuItem, {
                        id: "edit-default-profile",
                        label: s.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                        subtext: s.default.Messages.USER_PROFILE_MENU_HELP,
                        action: () => f()
                    })]
                })
            }
        },
        906889: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return f
                }
            }), t("222007");
            var l = t("884691"),
                i = t("509043"),
                o = t("446674"),
                n = t("841098"),
                s = t("206230"),
                a = t("388491"),
                u = t("528438");
            let c = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

            function d(e, r, t) {
                var l;
                null == e || null === (l = e.current) || void 0 === l || l.style.setProperty(r, null != t ? t : null)
            }

            function f(e, r) {
                let {
                    themeElementRef: t,
                    pendingThemeColors: f,
                    isPreview: E,
                    useDefaultClientTheme: p
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [P, T] = (0, u.default)(e, r, {
                    pendingThemeColors: f,
                    isPreview: E
                }), [_, C, O] = (0, o.useStateFromStoresArray)([s.default], () => [s.default.desaturateUserColors, s.default.saturation, s.default.syncProfileThemeWithUserTheme]), S = (0, n.default)(), h = l.useCallback(() => O || p ? S : (0, a.getProfileTheme)(P), [p, O, S, P]), [L, I] = l.useState(h()), y = (0, a.useProfileThemeValues)(L), m = (0, a.useDividerColor)(L, P), U = (0, a.useMessageInputBorderColor)(L, T), A = l.useCallback((e, r) => (0, i.int2hsl)(e, _, null, r), [_]);
                l.useEffect(() => {
                    I(h())
                }, [P, O, S, p, h]);
                let v = (0, a.useAvatarBorderColor)(L, P, O),
                    g = null != v ? (0, i.int2hsl)(v, !1, _ ? C : null) : null,
                    R = e => c.forEach(r => {
                        e.style.removeProperty(r)
                    });
                return l.useEffect(() => {
                    if (null != P && null != T && null != L && null != v && null != m && null != U) {
                        let e = O && L !== S ? null == y ? void 0 : y.overlaySyncedWithUserTheme : null == y ? void 0 : y.overlay;
                        d(t, "--profile-gradient-primary-color", A(P)), d(t, "--profile-gradient-secondary-color", A(T)), d(t, "--profile-gradient-button-color", A((0, a.calculateButtonColor)(P))), d(t, "--profile-gradient-overlay-color", e), d(t, "--profile-body-background-color", null == y ? void 0 : y.sectionBox), d(t, "--profile-body-background-hover", null == y ? void 0 : y.profileBodyBackgroundHover), d(t, "--profile-body-divider-color", A(m, null == y ? void 0 : y.dividerOpacity)), d(t, "--profile-avatar-border-color", A(v)), d(t, "--profile-message-input-border-color", A(U)), d(t, "--profile-note-background-color", null == y ? void 0 : y.noteBackgroundColor), d(t, "--profile-role-pill-background-color", null == y ? void 0 : y.rolePillBackgroundColor), d(t, "--profile-role-pill-border-color", null == y ? void 0 : y.rolePillBorderColor)
                    } else(null == t ? void 0 : t.current) != null && R(null == t ? void 0 : t.current)
                }, [P, T, v, L, S, t, A, O, m, null == y ? void 0 : y.overlaySyncedWithUserTheme, null == y ? void 0 : y.overlay, null == y ? void 0 : y.sectionBox, null == y ? void 0 : y.profileBodyBackgroundHover, null == y ? void 0 : y.dividerOpacity, null == y ? void 0 : y.noteBackgroundColor, null == y ? void 0 : y.rolePillBackgroundColor, null == y ? void 0 : y.rolePillBorderColor, U]), {
                    profileTheme: null != L ? L : S,
                    primaryProfileColor: P,
                    avatarBorderColor: g
                }
            }
        }
    }
]);
//# sourceMappingURL=e8e1ba7fd0c70d6ccb52.js.map