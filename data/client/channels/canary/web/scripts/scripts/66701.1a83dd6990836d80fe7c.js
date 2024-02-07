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
                o = r("407788"),
                a = r("489134"),
                c = r("49111");
            r("853987"), r("426497"), r("775416"), r("216719");
            let d = e => {
                    let {
                        openInLayer: t = !0,
                        ...r
                    } = e;
                    l.default.dispatch({
                        type: "COLLECTIBLES_SHOP_OPEN",
                        ...r
                    }), t && (0, n.pushLayer)(c.Layers.COLLECTIBLES_SHOP)
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
                            url: c.Endpoints.COLLECTIBLES_CATEGORIES,
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
                        let e = await u.default.get(c.Endpoints.COLLECTIBLES_PURCHASES);
                        l.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                            purchases: e.body.map(a.default.fromServer)
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
                            url: c.Endpoints.COLLECTIBLES_PRODUCTS(e),
                            query: null != t ? {
                                country_code: t
                            } : {}
                        });
                        l.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                            product: o.default.fromServer(r.body)
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
                            url: c.Endpoints.COLLECTIBLES_CLAIM,
                            body: {
                                sku_id: e
                            }
                        });
                        l.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_SUCCESS",
                            skuId: e,
                            purchases: null === (t = r.body) || void 0 === t ? void 0 : t.map(a.default.fromServer)
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
                            url: c.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
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
            let o = new Date(2023, 8, 25),
                a = new Date(2023, 9, 5),
                c = () => ({
                    categoryItemViews: {
                        [u.CollectiblesCategorySkuId.FANTASY]: {
                            [l.CollectiblesItemType.AVATAR_DECORATION]: o,
                            [l.CollectiblesItemType.PROFILE_EFFECT]: a
                        },
                        [u.CollectiblesCategorySkuId.ANIME]: {
                            [l.CollectiblesItemType.AVATAR_DECORATION]: o,
                            [l.CollectiblesItemType.PROFILE_EFFECT]: a
                        },
                        [u.CollectiblesCategorySkuId.BREAKFAST]: {
                            [l.CollectiblesItemType.AVATAR_DECORATION]: o,
                            [l.CollectiblesItemType.PROFILE_EFFECT]: a
                        },
                        [u.CollectiblesCategorySkuId.DISXCORE]: {
                            [l.CollectiblesItemType.AVATAR_DECORATION]: o
                        }
                    }
                }),
                d = c();
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
                    d = c()
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
                o = r("913144");
            let a = new Map,
                c = a,
                d = !1;
            class E extends s.default.Store {
                get isFetching() {
                    return d
                }
                get isClaiming() {
                    return u
                }
                get purchases() {
                    return c
                }
                get fetchError() {
                    return l
                }
                get claimError() {
                    return n
                }
                getPurchase(e) {
                    return null != e ? c.get(e) : void 0
                }
            }
            E.displayName = "CollectiblesPurchaseStore";
            var C = new E(o.default, {
                COLLECTIBLES_PURCHASES_FETCH: e => {
                    d = !0, l = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
                    0 === e.purchases.length ? c = a : !(0, i.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, l = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    c = a, d = !1, l = t
                },
                COLLECTIBLES_CLAIM: e => {
                    u = e.skuId, n = void 0
                },
                COLLECTIBLES_CLAIM_SUCCESS: e => {
                    null == e.purchases || 0 === e.purchases.length ? c = a : !(0, i.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), u = void 0, n = void 0
                },
                COLLECTIBLES_CLAIM_FAILURE: e => {
                    let {
                        error: t,
                        skuId: r
                    } = e;
                    u = r, n = t
                },
                LOGOUT: e => {
                    c = a, d = !1, u = void 0, l = void 0, n = void 0
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
                o = null,
                a = e => {
                    s = i, o = null
                };
            class c extends l.default.Store {
                get analyticsLocations() {
                    return s
                }
                get analyticsSource() {
                    return o
                }
                get initialProductSkuId() {
                    return u
                }
                getAnalytics() {
                    return {
                        analyticsLocations: s,
                        analyticsSource: o
                    }
                }
            }
            c.displayName = "CollectiblesShopStore";
            var d = new c(n.default, {
                COLLECTIBLES_SHOP_OPEN: e => {
                    var t, r;
                    s = null !== (t = e.analyticsLocations) && void 0 !== t ? t : i, o = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, u = e.initialProductSkuId
                },
                COLLECTIBLES_SHOP_CLOSE: a,
                COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
                    e.item.skuId === u && (u = void 0)
                },
                LOGOUT: a
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
                o = r("792382"),
                a = r("806410"),
                c = r("49111");
            u = class e extends o.default {
                static fromServer(t) {
                    var r;
                    let {
                        type: u,
                        premium_type: o,
                        category_sku_id: d,
                        prices: E,
                        ...C
                    } = t;
                    return new e({
                        ...super.fromServer(C),
                        type: u,
                        premiumType: o === c.PREMIUM_TYPE_NONE ? null : o,
                        categorySkuId: d,
                        prices: null == (r = E) ? {} : Object.keys(r).reduce((e, t) => {
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
                        items: C.items.reduce((e, t) => (0, l.match)(t).with({
                            type: n.CollectiblesItemType.AVATAR_DECORATION
                        }, t => (e.push(s.default.fromServer(t)), e)).with({
                            type: n.CollectiblesItemType.PROFILE_EFFECT
                        }, t => (e.push(a.default.fromServer(t)), e)).otherwise(() => e), [])
                    })
                }
                constructor(e) {
                    super(e), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices
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
            var u, l = r("656280"),
                n = r.n(l),
                i = r("509043"),
                s = r("666038");
            let o = e => null == e ? e : {
                backgroundColors: e.background_colors.map(e => n((0, i.int2hex)(e))),
                buttonColors: e.button_colors.map(e => n((0, i.int2hex)(e))),
                confettiColors: e.confetti_colors.map(e => n((0, i.int2hex)(e)))
            };
            u = class e extends s.default {
                static fromServer(t) {
                    let {
                        store_listing_id: r,
                        sku_id: u,
                        unpublished_at: l,
                        styles: n,
                        ...i
                    } = t, s = null != l ? new Date(l) : null;
                    return new e({
                        ...i,
                        storeListingId: r,
                        skuId: u,
                        unpublishedAt: s,
                        styles: o(n)
                    })
                }
                constructor(e) {
                    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt, this.styles = e.styles
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
                o = r("521012"),
                a = r("719923"),
                c = r("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: r,
                    trialId: u,
                    code: l,
                    applyEntitlements: o = !1,
                    currency: d,
                    renewal: E,
                    metadata: C
                } = e;
                t = (0, a.coerceExistingItemsToNewItemInterval)(t);
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
                    apply_entitlements: o,
                    currency: d,
                    renewal: E,
                    metadata: C
                };
                try {
                    let e = await n.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
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
                    currency: o,
                    applyEntitlements: d = !1,
                    analyticsLocations: E,
                    analyticsLocation: C
                } = e;
                null != r && (r = (0, a.coerceExistingItemsToNewItemInterval)(r));
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
                    currency: o
                };
                try {
                    let e = await n.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
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
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return s.default.createInvoiceFromServer(u.body)
            }

            function p(e, t) {
                let {
                    preventFetch: r = !1
                } = e, [n, i] = (0, u.useState)(null), [s, a] = (0, u.useState)(null), c = (0, l.useStateFromStores)([o.default], () => o.default.getSubscriptions());
                return (0, u.useEffect)(() => {
                    let e = !1;
                    async function u() {
                        try {
                            a(null), i(null);
                            let r = await t();
                            !e && i(r)
                        } catch (t) {
                            !e && a(t)
                        }
                    }
                    return !r && u(), () => {
                        e = !0
                    }
                }, [r, t, c]), [n, s]
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
//# sourceMappingURL=66701.1a83dd6990836d80fe7c.js.map