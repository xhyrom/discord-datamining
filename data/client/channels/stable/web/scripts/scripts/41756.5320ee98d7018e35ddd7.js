(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41756"], {
        811159: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useTriggerDebuggingAA: function() {
                    return u
                }
            });
            let s = (0, r("516086").createExperiment)({
                kind: "user",
                id: "2023-09_trigger_debugging_aa",
                label: "trigger debugging aa mobile",
                defaultConfig: {
                    inUse: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        inUse: !0
                    }
                }]
            });

            function u(e) {
                let {
                    autoTrackExposure: t = !1,
                    location: r
                } = e;
                return s.useExperiment({
                    location: r
                }, {
                    autoTrackExposure: t
                })
            }
        },
        368674: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                claimPremiumCollectiblesProduct: function() {
                    return I
                },
                closeCollectiblesShop: function() {
                    return C
                },
                fetchCollectiblesCategories: function() {
                    return p
                },
                fetchCollectiblesProduct: function() {
                    return S
                },
                fetchCollectiblesPurchases: function() {
                    return L
                },
                openCollectiblesShop: function() {
                    return d
                },
                productDetailsOpened: function() {
                    return E
                },
                setCollectiblesCategoryItemsViewed: function() {
                    return h
                },
                validateCollectiblesRecipient: function() {
                    return f
                }
            });
            var s = r("454836"),
                u = r("312916"),
                i = r("939591"),
                l = r("253842"),
                n = r("77508"),
                a = r("766336"),
                c = r("562396"),
                o = r("467006");
            r("515562"), r("181484"), r("131144"), r("610678");
            let d = e => {
                    let {
                        openInLayer: t = !0,
                        ...r
                    } = e;
                    u.default.dispatch({
                        type: "COLLECTIBLES_SHOP_OPEN",
                        ...r
                    }), t && (0, i.pushLayer)(o.Layers.COLLECTIBLES_SHOP)
                },
                C = () => {
                    u.default.dispatch({
                        type: "COLLECTIBLES_SHOP_CLOSE"
                    }), (0, i.popLayer)()
                },
                E = e => {
                    u.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
                        item: e
                    })
                },
                p = async e => {
                    u.default.dispatch({
                        type: "COLLECTIBLES_CATEGORIES_FETCH"
                    });
                    let t = {};
                    null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), null != e.countryCode && (t.countryCode = e.countryCode));
                    try {
                        let e = await s.default.get({
                            url: o.Endpoints.COLLECTIBLES_CATEGORIES,
                            query: t
                        });
                        u.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                            categories: e.body.map(n.default.fromServer)
                        })
                    } catch (e) {
                        throw u.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                            error: e
                        }), new l.APIError(e)
                    }
                }, L = async () => {
                    u.default.dispatch({
                        type: "COLLECTIBLES_PURCHASES_FETCH"
                    });
                    try {
                        let e = await s.default.get(o.Endpoints.COLLECTIBLES_PURCHASES);
                        u.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                            purchases: e.body.map(c.default.fromServer)
                        })
                    } catch (e) {
                        throw u.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                            error: e
                        }), new l.APIError(e)
                    }
                }, S = async (e, t) => {
                    u.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_FETCH"
                    });
                    try {
                        let r = await s.default.get({
                            url: o.Endpoints.COLLECTIBLES_PRODUCTS(e),
                            query: null != t ? {
                                country_code: t
                            } : {}
                        });
                        u.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                            product: a.default.fromServer(r.body)
                        })
                    } catch (e) {
                        throw u.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                            error: e
                        }), new l.APIError(e)
                    }
                }, I = async e => {
                    u.default.dispatch({
                        type: "COLLECTIBLES_CLAIM",
                        skuId: e
                    });
                    try {
                        let t = await s.default.put({
                            url: o.Endpoints.COLLECTIBLES_CLAIM,
                            body: {
                                sku_id: e
                            }
                        });
                        u.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_SUCCESS",
                            skuId: e,
                            purchases: t.body?.map(c.default.fromServer)
                        })
                    } catch (t) {
                        throw u.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_FAILURE",
                            skuId: e,
                            error: t
                        }), new l.APIError(t)
                    }
                }, f = async (e, t) => {
                    try {
                        return (await s.default.get({
                            url: o.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                            query: {
                                sku_id: t,
                                recipient_id: e
                            }
                        })).body.valid
                    } catch (e) {
                        throw new l.APIError(e)
                    }
                }, h = e => {
                    u.default.dispatch({
                        type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
                        ...e
                    })
                }
        },
        181484: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            });
            var s = r("674368"),
                u = r("53452"),
                i = r("661223"),
                l = r("312916"),
                n = r("515562");
            let a = new Date(2023, 8, 25),
                c = new Date(2023, 9, 5),
                o = () => ({
                    categoryItemViews: {
                        [s.CollectiblesCategorySkuId.FANTASY]: {
                            [u.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [u.CollectiblesItemType.PROFILE_EFFECT]: c
                        },
                        [s.CollectiblesCategorySkuId.ANIME]: {
                            [u.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [u.CollectiblesItemType.PROFILE_EFFECT]: c
                        },
                        [s.CollectiblesCategorySkuId.BREAKFAST]: {
                            [u.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [u.CollectiblesItemType.PROFILE_EFFECT]: c
                        },
                        [s.CollectiblesCategorySkuId.DISXCORE]: {
                            [u.CollectiblesItemType.AVATAR_DECORATION]: a
                        }
                    }
                }),
                d = o();
            class C extends i.default.PersistedStore {
                static #e = this.displayName = "CollectiblesPersistedStore";
                static #t = this.persistKey = "CollectiblesPersistedStoreV2";
                initialize(e) {
                    null != e && (d = e)
                }
                getState() {
                    return d
                }
                isItemViewed(e) {
                    let t = n.default.getProduct(e.skuId)?.categorySkuId;
                    return null != t && d.categoryItemViews[t]?.[e.type] != null
                }
                reset() {
                    d = o()
                }
            }
            var E = new C(l.default, {
                COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
                    let {
                        categories: t,
                        itemTypes: r
                    } = e, s = new Date;
                    return t.reduce((e, t) => {
                        let {
                            skuId: u
                        } = t, i = r.reduce((e, t) => d.categoryItemViews[u]?.[t] != null ? e : (null == d.categoryItemViews[u] && (d.categoryItemViews[u] = {}), d.categoryItemViews[u][t] = s, !0), !1);
                        return e || i
                    }, !1)
                }
            })
        },
        131144: function(e, t, r) {
            "use strict";
            let s, u, i;
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            });
            var l = r("392711"),
                n = r("661223"),
                a = r("312916");
            let c = new Map,
                o = c,
                d = !1;
            class C extends n.default.Store {
                static #e = this.displayName = "CollectiblesPurchaseStore";
                get isFetching() {
                    return d
                }
                get isClaiming() {
                    return s
                }
                get purchases() {
                    return o
                }
                get fetchError() {
                    return u
                }
                get claimError() {
                    return i
                }
                getPurchase(e) {
                    return null != e ? o.get(e) : void 0
                }
            }
            var E = new C(a.default, {
                COLLECTIBLES_PURCHASES_FETCH: e => {
                    d = !0, u = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
                    0 === e.purchases.length ? o = c : !(0, l.isEqual)([...o.values()], e.purchases) && (o = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, u = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    o = c, d = !1, u = t
                },
                COLLECTIBLES_CLAIM: e => {
                    s = e.skuId, i = void 0
                },
                COLLECTIBLES_CLAIM_SUCCESS: e => {
                    null == e.purchases || 0 === e.purchases.length ? o = c : !(0, l.isEqual)([...o.values()], e.purchases) && (o = new Map(e.purchases.map(e => [e.skuId, e]))), s = void 0, i = void 0
                },
                COLLECTIBLES_CLAIM_FAILURE: e => {
                    let {
                        error: t,
                        skuId: r
                    } = e;
                    s = r, i = t
                },
                LOGOUT: e => {
                    o = c, d = !1, s = void 0, u = void 0, i = void 0
                }
            })
        },
        610678: function(e, t, r) {
            "use strict";
            let s;
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var u = r("661223"),
                i = r("312916");
            let l = [],
                n = l,
                a = null,
                c = e => {
                    n = l, a = null
                };
            class o extends u.default.Store {
                static #e = this.displayName = "CollectiblesShopStore";
                get analyticsLocations() {
                    return n
                }
                get analyticsSource() {
                    return a
                }
                get initialProductSkuId() {
                    return s
                }
                getAnalytics() {
                    return {
                        analyticsLocations: n,
                        analyticsSource: a
                    }
                }
            }
            var d = new o(i.default, {
                COLLECTIBLES_SHOP_OPEN: e => {
                    n = e.analyticsLocations ?? l, a = e.analyticsSource ?? null, s = e.initialProductSkuId
                },
                COLLECTIBLES_SHOP_CLOSE: c,
                COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
                    e.item.skuId === s && (s = void 0)
                },
                LOGOUT: c
            })
        },
        77508: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            }), r("653041");
            var s = r("766336"),
                u = r("436019");
            class i extends u.default {
                constructor(e) {
                    super(e), this.products = e.products, this.logo = e.logo
                }
                static fromServer(e) {
                    let {
                        products: t,
                        logo: r,
                        ...u
                    } = e;
                    return new i({
                        ...super.fromServer(u),
                        products: t.reduce((e, t) => {
                            let r = s.default.fromServer(t);
                            return 0 === r.items.length ? e : (e.push(r), e)
                        }, []),
                        logo: r
                    })
                }
            }
        },
        766336: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            }), r("627341"), r("653041");
            var s = r("278074"),
                u = r("53452"),
                i = r("828031"),
                l = r("5595"),
                n = r("436019"),
                a = r("739596"),
                c = r("467006");
            class o extends n.default {
                constructor(e) {
                    super(e), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices
                }
                static fromServer(e) {
                    var t;
                    let {
                        type: r,
                        premium_type: n,
                        category_sku_id: d,
                        prices: C,
                        ...E
                    } = e;
                    return new o({
                        ...super.fromServer(E),
                        type: r,
                        premiumType: n === c.PREMIUM_TYPE_NONE ? null : n,
                        categorySkuId: d,
                        prices: null == (t = C) ? {} : Object.keys(t).reduce((e, r) => {
                            if (null == t) return e;
                            let s = t[r];
                            return e[r] = {
                                countryPrices: {
                                    countryCode: s.country_prices.country_code,
                                    prices: s.country_prices.prices.map(e => (0, i.getPriceFromServer)(e, !0))
                                },
                                paymentSourcePrices: {}
                            }, e
                        }, {}),
                        items: E.items.reduce((e, t) => (0, s.match)(t).with({
                            type: u.CollectiblesItemType.AVATAR_DECORATION
                        }, t => (e.push(l.default.fromServer(t)), e)).with({
                            type: u.CollectiblesItemType.PROFILE_EFFECT
                        }, t => (e.push(a.default.fromServer(t)), e)).otherwise(() => e), [])
                    })
                }
            }
        },
        562396: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var s = r("766336");
            class u extends s.default {
                constructor(e) {
                    super(e), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
                }
                static fromServer(e) {
                    let {
                        purchased_at: t,
                        purchase_type: r,
                        ...s
                    } = e;
                    return new u({
                        ...super.fromServer(s),
                        purchaseType: r,
                        purchasedAt: null != t ? new Date(t) : t
                    })
                }
            }
        },
        436019: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var s = r("979590"),
                u = r.n(s),
                i = r("148817"),
                l = r("885714");
            let n = e => null == e ? e : {
                backgroundColors: e.background_colors.map(e => u()((0, i.int2hex)(e))),
                buttonColors: e.button_colors.map(e => u()((0, i.int2hex)(e))),
                confettiColors: e.confetti_colors.map(e => u()((0, i.int2hex)(e)))
            };
            class a extends l.default {
                constructor(e) {
                    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt, this.styles = e.styles
                }
                static fromServer(e) {
                    let {
                        store_listing_id: t,
                        sku_id: r,
                        unpublished_at: s,
                        styles: u,
                        ...i
                    } = e, l = null != s ? new Date(s) : null;
                    return new a({
                        ...i,
                        storeListingId: t,
                        skuId: r,
                        unpublishedAt: l,
                        styles: n(u)
                    })
                }
            }
        },
        582001: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var s = r("735250");
            r("470079");
            var u = r("336328"),
                i = r("703666"),
                l = r("262113"),
                n = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: u = "currentColor",
                        foreground: i,
                        ...n
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(n),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: i,
                            fill: u,
                            id: "a",
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                        })
                    })
                }, i.LockIcon, void 0, {
                    size: 24
                })
        },
        674368: function(e, t, r) {
            "use strict";
            var s, u;
            r.r(t), r.d(t, {
                CollectiblesCategorySkuId: function() {
                    return s
                }
            }), (u = s || (s = {})).FANTASY = "1144003461608906824", u.ANIME = "1144302037593497701", u.BREAKFAST = "1144054000099012659", u.DISXCORE = "1144058340327047249", u.HALLOWEEN = "1157410718711304313", u.FALL = "1157406994873991284", u.WINTER = "1174459301239197856", u.MONSTERS = "1179493515038818325", u.CYBERPUNK = "1197342727608746044", u.LUNAR_NEW_YEAR = "1202069709281828935", u.ELEMENTS = "1207046915880124426"
        }
    }
]);
//# sourceMappingURL=41756.5320ee98d7018e35ddd7.js.map