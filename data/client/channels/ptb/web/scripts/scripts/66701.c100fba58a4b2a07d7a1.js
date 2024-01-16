(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66701"], {
        21526: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                openCollectiblesShop: function() {
                    return d
                },
                closeCollectiblesShop: function() {
                    return E
                },
                productDetailsOpened: function() {
                    return C
                },
                fetchCollectiblesCategories: function() {
                    return p
                },
                fetchCollectiblesPurchases: function() {
                    return I
                },
                fetchCollectiblesProduct: function() {
                    return S
                },
                claimPremiumCollectiblesProduct: function() {
                    return L
                },
                validateCollectiblesRecipient: function() {
                    return f
                },
                setCollectiblesCategoryItemsViewed: function() {
                    return y
                }
            });
            var u = r("872717"),
                l = r("913144"),
                n = r("54239"),
                i = r("448993"),
                s = r("514296"),
                a = r("407788"),
                c = r("489134"),
                o = r("49111");
            r("853987"), r("426497"), r("775416"), r("216719");
            let d = e => {
                    let {
                        openInLayer: t = !0,
                        ...r
                    } = e;
                    l.default.dispatch({
                        type: "COLLECTIBLES_SHOP_OPEN",
                        ...r
                    }), t && (0, n.pushLayer)(o.Layers.COLLECTIBLES_SHOP)
                },
                E = () => {
                    l.default.dispatch({
                        type: "COLLECTIBLES_SHOP_CLOSE"
                    }), (0, n.popLayer)()
                },
                C = e => {
                    l.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
                        item: e
                    })
                },
                p = async e => {
                    l.default.dispatch({
                        type: "COLLECTIBLES_CATEGORIES_FETCH"
                    });
                    try {
                        let t = await u.default.get({
                            url: o.Endpoints.COLLECTIBLES_CATEGORIES,
                            query: null != e ? {
                                country_code: e
                            } : {}
                        });
                        l.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                            categories: t.body.map(s.default.fromServer)
                        })
                    } catch (e) {
                        throw l.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                            error: e
                        }), new i.APIError(e)
                    }
                }, I = async () => {
                    l.default.dispatch({
                        type: "COLLECTIBLES_PURCHASES_FETCH"
                    });
                    try {
                        let e = await u.default.get(o.Endpoints.COLLECTIBLES_PURCHASES);
                        l.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                            purchases: e.body.map(c.default.fromServer)
                        })
                    } catch (e) {
                        throw l.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                            error: e
                        }), new i.APIError(e)
                    }
                }, S = async (e, t) => {
                    l.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_FETCH"
                    });
                    try {
                        let r = await u.default.get({
                            url: o.Endpoints.COLLECTIBLES_PRODUCTS(e),
                            query: null != t ? {
                                country_code: t
                            } : {}
                        });
                        l.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                            product: a.default.fromServer(r.body)
                        })
                    } catch (e) {
                        throw l.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                            error: e
                        }), new i.APIError(e)
                    }
                }, L = async e => {
                    l.default.dispatch({
                        type: "COLLECTIBLES_CLAIM",
                        skuId: e
                    });
                    try {
                        var t;
                        let r = await u.default.put({
                            url: o.Endpoints.COLLECTIBLES_CLAIM,
                            body: {
                                sku_id: e
                            }
                        });
                        l.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_SUCCESS",
                            skuId: e,
                            purchases: null === (t = r.body) || void 0 === t ? void 0 : t.map(c.default.fromServer)
                        })
                    } catch (t) {
                        throw l.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_FAILURE",
                            skuId: e,
                            error: t
                        }), new i.APIError(t)
                    }
                }, f = async (e, t) => {
                    try {
                        let r = await u.default.get({
                            url: o.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                            query: {
                                sku_id: t,
                                recipient_id: e
                            }
                        });
                        return r.body.valid
                    } catch (e) {
                        throw new i.APIError(e)
                    }
                }, y = e => {
                    l.default.dispatch({
                        type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
                        ...e
                    })
                }
        },
        426497: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return C
                }
            }), r("808653");
            var u = r("635058"),
                l = r("265586"),
                n = r("446674"),
                i = r("913144"),
                s = r("853987");
            let a = new Date(2023, 8, 25),
                c = new Date(2023, 9, 5),
                o = () => ({
                    categoryItemViews: {
                        [u.CollectiblesCategorySkuId.FANTASY]: {
                            [l.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [l.CollectiblesItemType.PROFILE_EFFECT]: c
                        },
                        [u.CollectiblesCategorySkuId.ANIME]: {
                            [l.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [l.CollectiblesItemType.PROFILE_EFFECT]: c
                        },
                        [u.CollectiblesCategorySkuId.BREAKFAST]: {
                            [l.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [l.CollectiblesItemType.PROFILE_EFFECT]: c
                        },
                        [u.CollectiblesCategorySkuId.DISXCORE]: {
                            [l.CollectiblesItemType.AVATAR_DECORATION]: a
                        }
                    }
                }),
                d = o();
            class E extends n.default.PersistedStore {
                initialize(e) {
                    null != e && (d = e)
                }
                getState() {
                    return d
                }
                isItemViewed(e) {
                    var t, r;
                    let u = null === (t = s.default.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
                    return null != u && (null === (r = d.categoryItemViews[u]) || void 0 === r ? void 0 : r[e.type]) != null
                }
                reset() {
                    d = o()
                }
            }
            E.displayName = "CollectiblesPersistedStore", E.persistKey = "CollectiblesPersistedStoreV2";
            var C = new E(i.default, {
                COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
                    let {
                        categories: t,
                        itemTypes: r
                    } = e, u = new Date;
                    return t.reduce((e, t) => {
                        let {
                            skuId: l
                        } = t, n = r.reduce((e, t) => {
                            var r;
                            return (null === (r = d.categoryItemViews[l]) || void 0 === r ? void 0 : r[t]) != null ? e : (null == d.categoryItemViews[l] && (d.categoryItemViews[l] = {}), d.categoryItemViews[l][t] = u, !0)
                        }, !1);
                        return e || n
                    }, !1)
                }
            })
        },
        775416: function(e, t, r) {
            "use strict";
            let u, l, n;
            r.r(t), r.d(t, {
                default: function() {
                    return C
                }
            }), r("222007");
            var i = r("917351"),
                s = r("446674"),
                a = r("913144");
            let c = new Map,
                o = c,
                d = !1;
            class E extends s.default.Store {
                get isFetching() {
                    return d
                }
                get isClaiming() {
                    return u
                }
                get purchases() {
                    return o
                }
                get fetchError() {
                    return l
                }
                get claimError() {
                    return n
                }
                getPurchase(e) {
                    return null != e ? o.get(e) : void 0
                }
            }
            E.displayName = "CollectiblesPurchaseStore";
            var C = new E(a.default, {
                COLLECTIBLES_PURCHASES_FETCH: e => {
                    d = !0, l = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
                    0 === e.purchases.length ? o = c : !(0, i.isEqual)([...o.values()], e.purchases) && (o = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, l = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    o = c, d = !1, l = t
                },
                COLLECTIBLES_CLAIM: e => {
                    u = e.skuId, n = void 0
                },
                COLLECTIBLES_CLAIM_SUCCESS: e => {
                    null == e.purchases || 0 === e.purchases.length ? o = c : !(0, i.isEqual)([...o.values()], e.purchases) && (o = new Map(e.purchases.map(e => [e.skuId, e]))), u = void 0, n = void 0
                },
                COLLECTIBLES_CLAIM_FAILURE: e => {
                    let {
                        error: t,
                        skuId: r
                    } = e;
                    u = r, n = t
                },
                LOGOUT: e => {
                    o = c, d = !1, u = void 0, l = void 0, n = void 0
                }
            })
        },
        216719: function(e, t, r) {
            "use strict";
            let u;
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var l = r("446674"),
                n = r("913144");
            let i = [],
                s = i,
                a = null,
                c = e => {
                    s = i, a = null
                };
            class o extends l.default.Store {
                get analyticsLocations() {
                    return s
                }
                get analyticsSource() {
                    return a
                }
                get initialProductSkuId() {
                    return u
                }
                getAnalytics() {
                    return {
                        analyticsLocations: s,
                        analyticsSource: a
                    }
                }
            }
            o.displayName = "CollectiblesShopStore";
            var d = new o(n.default, {
                COLLECTIBLES_SHOP_OPEN: e => {
                    var t, r;
                    s = null !== (t = e.analyticsLocations) && void 0 !== t ? t : i, a = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, u = e.initialProductSkuId
                },
                COLLECTIBLES_SHOP_CLOSE: c,
                COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
                    e.item.skuId === u && (u = void 0)
                },
                LOGOUT: c
            })
        },
        514296: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            }), r("808653"), r("424973");
            var u, l = r("407788"),
                n = r("792382");
            u = class e extends n.default {
                static fromServer(t) {
                    let {
                        products: r,
                        logo: u,
                        ...n
                    } = t;
                    return new e({
                        ...super.fromServer(n),
                        products: r.reduce((e, t) => {
                            let r = l.default.fromServer(t);
                            return 0 === r.items.length ? e : (e.push(r), e)
                        }, []),
                        logo: u
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
                    return u
                }
            }), r("808653"), r("794252"), r("424973");
            var u, l = r("506838"),
                n = r("265586"),
                i = r("797647"),
                s = r("730297"),
                a = r("792382"),
                c = r("806410");
            u = class e extends a.default {
                static fromServer(t) {
                    var r;
                    let {
                        type: u,
                        category_sku_id: a,
                        prices: o,
                        ...d
                    } = t;
                    return new e({
                        ...super.fromServer(d),
                        type: u,
                        categorySkuId: a,
                        prices: null == (r = o) ? {} : Object.keys(r).reduce((e, t) => {
                            if (null == r) return e;
                            let u = r[t];
                            return e[t] = {
                                countryPrices: {
                                    countryCode: u.country_prices.country_code,
                                    prices: u.country_prices.prices.map(e => (0, i.getPriceFromServer)(e, !0))
                                },
                                paymentSourcePrices: {}
                            }, e
                        }, {}),
                        items: d.items.reduce((e, t) => (0, l.match)(t).with({
                            type: n.CollectiblesItemType.AVATAR_DECORATION
                        }, t => (e.push(s.default.fromServer(t)), e)).with({
                            type: n.CollectiblesItemType.PROFILE_EFFECT
                        }, t => (e.push(c.default.fromServer(t)), e)).otherwise(() => e), [])
                    })
                }
                constructor(e) {
                    super(e), this.summary = e.summary, this.type = e.type, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices
                }
            }
        },
        489134: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var u, l = r("407788");
            u = class e extends l.default {
                static fromServer(t) {
                    let {
                        purchased_at: r,
                        purchase_type: u,
                        ...l
                    } = t;
                    return new e({
                        ...super.fromServer(l),
                        purchaseType: u,
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
                    return u
                }
            });
            var u, l = r("666038");
            u = class e extends l.default {
                static fromServer(t) {
                    let {
                        store_listing_id: r,
                        sku_id: u,
                        unpublished_at: l,
                        ...n
                    } = t, i = null != l ? new Date(l) : null;
                    return new e({
                        ...n,
                        storeListingId: r,
                        skuId: u,
                        unpublishedAt: i
                    })
                }
                constructor(e) {
                    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt
                }
            }
        },
        809071: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return E
                },
                useSubscriptionInvoicePreview: function() {
                    return I
                },
                useGetSubscriptionInvoice: function() {
                    return S
                },
                getItemUnitPriceWithDiscount: function() {
                    return L
                }
            }), r("222007");
            var u = r("884691"),
                l = r("446674"),
                n = r("872717"),
                i = r("448993"),
                s = r("195358"),
                a = r("521012"),
                c = r("719923"),
                o = r("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: r,
                    trialId: u,
                    code: l,
                    applyEntitlements: a = !1,
                    currency: d,
                    renewal: E,
                    metadata: C
                } = e;
                t = (0, c.coerceExistingItemsToNewItemInterval)(t);
                let p = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...r
                        } = e;
                        return {
                            ...r,
                            plan_id: t
                        }
                    }),
                    payment_source_id: r,
                    trial_id: u,
                    code: l,
                    apply_entitlements: a,
                    currency: d,
                    renewal: E,
                    metadata: C
                };
                try {
                    let e = await n.default.post({
                        url: o.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: p,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new i.BillingError(e)
                }
            }
            async function E(e) {
                let {
                    subscriptionId: t,
                    items: r,
                    paymentSourceId: u,
                    renewal: l,
                    currency: a,
                    applyEntitlements: d = !1,
                    analyticsLocations: E,
                    analyticsLocation: C
                } = e;
                null != r && (r = (0, c.coerceExistingItemsToNewItemInterval)(r));
                let p = {
                    items: null == r ? void 0 : r.map(e => {
                        let {
                            planId: t,
                            ...r
                        } = e;
                        return {
                            ...r,
                            plan_id: t
                        }
                    }),
                    payment_source_id: u,
                    renewal: l,
                    apply_entitlements: d,
                    currency: a
                };
                try {
                    let e = await n.default.patch({
                        url: o.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: C,
                            location_stack: E
                        },
                        body: p,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new i.BillingError(e)
                }
            }
            async function C(e) {
                let {
                    subscriptionId: t,
                    preventFetch: r
                } = e;
                if (r) return null;
                let u = await n.default.get({
                    url: o.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return s.default.createInvoiceFromServer(u.body)
            }

            function p(e, t) {
                let {
                    preventFetch: r = !1
                } = e, [n, i] = (0, u.useState)(null), [s, c] = (0, u.useState)(null), o = (0, l.useStateFromStores)([a.default], () => a.default.getSubscriptions());
                return (0, u.useEffect)(() => {
                    let e = !1;
                    async function u() {
                        try {
                            c(null), i(null);
                            let r = await t();
                            !e && i(r)
                        } catch (t) {
                            !e && c(t)
                        }
                    }
                    return !r && u(), () => {
                        e = !0
                    }
                }, [r, t, o]), [n, s]
            }

            function I(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...r
                    } = e;
                    e = r
                }
                let t = (0, u.useCallback)(() => "subscriptionId" in e ? E(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return p(e, t)
            }

            function S(e) {
                let t = (0, u.useCallback)(() => C(e), [JSON.stringify(e)]);
                return p(e, t)
            }

            function L(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(r => {
                    let u = r.amount / e.quantity;
                    t -= u
                }), t
            }
        }
    }
]);
//# sourceMappingURL=66701.c100fba58a4b2a07d7a1.js.map