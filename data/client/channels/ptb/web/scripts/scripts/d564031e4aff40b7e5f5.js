(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40894"], {
        875212: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useTriggerDebuggingAA: function() {
                    return u
                }
            });
            var n = r("862205");
            let i = (0, n.createExperiment)({
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
                return i.useExperiment({
                    location: r
                }, {
                    autoTrackExposure: t
                })
            }
        },
        473591: function(e, t, r) {
            "use strict";
            let n, i, u, l, s, a;
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var E = r("446674"),
                o = r("913144");
            let c = !1,
                _ = !1,
                d = null,
                C = {},
                S = {},
                T = {},
                I = {};

            function A() {
                n = void 0, i = void 0, u = void 0, l = void 0, s = void 0, d = null
            }
            class L extends E.default.Store {
                getSettings(e) {
                    if (null != e) return T[e]
                }
                getProfile(e) {
                    return null == e ? null : C[e]
                }
                getGeneratedPersonality() {
                    return a
                }
                getPendingPersonality() {
                    return n
                }
                getPendingNick() {
                    return i
                }
                getErrors() {
                    return d
                }
                hasPendingChanges() {
                    return void 0 !== n || void 0 !== i || void 0 !== u || void 0 !== l || void 0 !== s
                }
                getPendingUpdates() {
                    return {
                        pendingAvatar: u,
                        pendingNick: i,
                        pendingPersonality: n,
                        pendingBanner: l,
                        pendingThemeColors: s
                    }
                }
                isSavingSettings() {
                    return c
                }
                isFetchingSettings(e) {
                    var t;
                    return null === (t = I[e]) || void 0 === t ? void 0 : t.isFetching
                }
                shouldFetchSettings(e) {
                    var t, r;
                    let n = null !== (t = I[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        i = Date.now(),
                        u = i - (null !== (r = n.lastFetchTimestampMs) && void 0 !== r ? r : 0) > 36e5;
                    return !(null == n ? void 0 : n.isFetching) && u
                }
                isFetchingProfile(e) {
                    var t;
                    return null === (t = S[e]) || void 0 === t ? void 0 : t.isFetching
                }
                isEditingClydeProfile() {
                    return _
                }
            }
            L.displayName = "ClydeStore";
            var f = new L(o.default, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e, r = I[t];
                    I[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        settings: r
                    } = e;
                    I[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, T[t] = r
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, r = I[t];
                    I[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    let {
                        personality: t,
                        isGenerated: r
                    } = e;
                    n = t, r && (a = t)
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    let {
                        nick: t
                    } = e;
                    i = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    u = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    l = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    s = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    d = null, c = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    let {
                        settings: t
                    } = e;
                    c = !1, T[t.guild_id] = t, A()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    c = !1, d = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: A,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, r = S[t];
                    S[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    S[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, C[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, r = S[t];
                    S[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    C[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    _ = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    _ = !1
                }
            })
        },
        21526: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                trackCollectiblesShopOpened: function() {
                    return c
                },
                openCollectiblesShop: function() {
                    return _
                },
                closeCollectiblesShop: function() {
                    return d
                },
                fetchCollectiblesCategories: function() {
                    return C
                },
                fetchCollectiblesPurchases: function() {
                    return S
                },
                fetchCollectiblesProduct: function() {
                    return T
                },
                claimPremiumCollectiblesProduct: function() {
                    return I
                },
                setCollectiblesCategoryItemsViewed: function() {
                    return A
                }
            });
            var n = r("872717"),
                i = r("913144"),
                u = r("54239"),
                l = r("448993"),
                s = r("514296"),
                a = r("407788"),
                E = r("489134"),
                o = r("49111");
            r("853987"), r("426497"), r("775416"), r("216719");
            let c = e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_SHOP_OPEN",
                        ...e
                    })
                },
                _ = e => {
                    c(e), (0, u.pushLayer)(o.Layers.COLLECTIBLES_SHOP)
                },
                d = () => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_SHOP_CLOSE"
                    }), (0, u.popLayer)()
                },
                C = async () => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_CATEGORIES_FETCH"
                    });
                    try {
                        let e = await n.default.get(o.Endpoints.COLLECTIBLES_CATEGORIES);
                        i.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                            categories: e.body.map(s.default.fromServer)
                        })
                    } catch (e) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                            error: e
                        }), new l.APIError(e)
                    }
                }, S = async () => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_PURCHASES_FETCH"
                    });
                    try {
                        let e = await n.default.get(o.Endpoints.COLLECTIBLES_PURCHASES);
                        i.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                            purchases: e.body.map(E.default.fromServer)
                        })
                    } catch (e) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                            error: e
                        }), new l.APIError(e)
                    }
                }, T = async e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_FETCH"
                    });
                    try {
                        let t = await n.default.get(o.Endpoints.COLLECTIBLES_PRODUCTS(e));
                        i.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                            product: a.default.fromServer(t.body)
                        })
                    } catch (e) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                            error: e
                        }), new l.APIError(e)
                    }
                }, I = async e => {
                    i.default.dispatch({
                        type: "COLLECTIBLES_CLAIM",
                        skuId: e
                    });
                    try {
                        var t;
                        let r = await n.default.put({
                            url: o.Endpoints.COLLECTIBLES_CLAIM,
                            body: {
                                sku_id: e
                            }
                        });
                        i.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_SUCCESS",
                            skuId: e,
                            purchases: null === (t = r.body) || void 0 === t ? void 0 : t.map(E.default.fromServer)
                        })
                    } catch (t) {
                        throw i.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_FAILURE",
                            skuId: e,
                            error: t
                        }), new l.APIError(t)
                    }
                }, A = e => {
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
                    return d
                }
            }), r("808653");
            var n = r("635058"),
                i = r("265586"),
                u = r("446674"),
                l = r("913144"),
                s = r("853987");
            let a = new Date(2023, 8, 25),
                E = new Date(2023, 9, 5),
                o = () => ({
                    categoryItemViews: {
                        [n.CollectiblesCategorySkuId.FANTASY]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [i.CollectiblesItemType.PROFILE_EFFECT]: E
                        },
                        [n.CollectiblesCategorySkuId.ANIME]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [i.CollectiblesItemType.PROFILE_EFFECT]: E
                        },
                        [n.CollectiblesCategorySkuId.BREAKFAST]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: a,
                            [i.CollectiblesItemType.PROFILE_EFFECT]: E
                        },
                        [n.CollectiblesCategorySkuId.DISXCORE]: {
                            [i.CollectiblesItemType.AVATAR_DECORATION]: a
                        }
                    }
                }),
                c = o();
            class _ extends u.default.PersistedStore {
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
                    c = o()
                }
            }
            _.displayName = "CollectiblesPersistedStore", _.persistKey = "CollectiblesPersistedStoreV2";
            var d = new _(l.default, {
                COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
                    let {
                        categories: t,
                        itemTypes: r
                    } = e, n = new Date;
                    return t.reduce((e, t) => {
                        let {
                            skuId: i
                        } = t, u = r.reduce((e, t) => {
                            var r;
                            return (null === (r = c.categoryItemViews[i]) || void 0 === r ? void 0 : r[t]) != null ? e : (null == c.categoryItemViews[i] && (c.categoryItemViews[i] = {}), c.categoryItemViews[i][t] = n, !0)
                        }, !1);
                        return e || u
                    }, !1)
                }
            })
        },
        775416: function(e, t, r) {
            "use strict";
            let n, i, u;
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            }), r("222007");
            var l = r("917351"),
                s = r("446674"),
                a = r("913144");
            let E = new Map,
                o = E,
                c = !1;
            class _ extends s.default.Store {
                get isFetching() {
                    return c
                }
                get isClaiming() {
                    return n
                }
                get purchases() {
                    return o
                }
                get fetchError() {
                    return i
                }
                get claimError() {
                    return u
                }
                getPurchase(e) {
                    return null != e ? o.get(e) : void 0
                }
            }
            _.displayName = "CollectiblesPurchaseStore";
            var d = new _(a.default, {
                COLLECTIBLES_PURCHASES_FETCH: e => {
                    c = !0, i = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
                    0 === e.purchases.length ? o = E : !(0, l.isEqual)([...o.values()], e.purchases) && (o = new Map(e.purchases.map(e => [e.skuId, e]))), c = !1, i = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    o = E, c = !1, i = t
                },
                COLLECTIBLES_CLAIM: e => {
                    n = e.skuId, u = void 0
                },
                COLLECTIBLES_CLAIM_SUCCESS: e => {
                    null == e.purchases || 0 === e.purchases.length ? o = E : !(0, l.isEqual)([...o.values()], e.purchases) && (o = new Map(e.purchases.map(e => [e.skuId, e]))), n = void 0, u = void 0
                },
                COLLECTIBLES_CLAIM_FAILURE: e => {
                    let {
                        error: t,
                        skuId: r
                    } = e;
                    n = r, u = t
                },
                LOGOUT: e => {
                    o = E, c = !1, n = void 0, i = void 0, u = void 0
                }
            })
        },
        216719: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("446674"),
                i = r("913144");
            let u = [],
                l = u,
                s = null,
                a = e => {
                    l = u, s = null
                };
            class E extends n.default.Store {
                get analyticsLocations() {
                    return l
                }
                get analyticsSource() {
                    return s
                }
                getAnalytics() {
                    return {
                        analyticsLocations: l,
                        analyticsSource: s
                    }
                }
            }
            E.displayName = "CollectiblesShopStore";
            var o = new E(i.default, {
                COLLECTIBLES_SHOP_OPEN: e => {
                    var t, r;
                    l = null !== (t = e.analyticsLocations) && void 0 !== t ? t : u, s = null !== (r = e.analyticsSource) && void 0 !== r ? r : null
                },
                COLLECTIBLES_SHOP_CLOSE: a,
                LOGOUT: a
            })
        },
        514296: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            }), r("808653"), r("424973");
            var n, i = r("407788"),
                u = r("792382");
            n = class e extends u.default {
                static fromServer(t) {
                    let {
                        products: r,
                        logo: n,
                        ...u
                    } = t;
                    return new e({
                        ...super.fromServer(u),
                        products: r.reduce((e, t) => {
                            let r = i.default.fromServer(t);
                            return 0 === r.items.length ? e : (e.push(r), e)
                        }, []),
                        logo: n
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
                    return n
                }
            }), r("808653"), r("794252"), r("424973");
            var n, i = r("506838"),
                u = r("265586"),
                l = r("797647"),
                s = r("730297"),
                a = r("792382"),
                E = r("806410");
            n = class e extends a.default {
                static fromServer(t) {
                    var r;
                    let {
                        currency: n,
                        price: a,
                        prices: o,
                        ...c
                    } = t;
                    return new e({
                        ...super.fromServer(c),
                        currency: n,
                        price: a,
                        prices: null == (r = o) ? {} : Object.keys(r).reduce((e, t) => {
                            if (null == r) return e;
                            let n = r[t];
                            return e[t] = {
                                countryPrices: {
                                    countryCode: n.country_prices.country_code,
                                    prices: n.country_prices.prices.map(e => (0, l.getPriceFromServer)(e, !0))
                                },
                                paymentSourcePrices: {}
                            }, e
                        }, {}),
                        items: c.items.reduce((e, t) => (0, i.match)(t).with({
                            type: u.CollectiblesItemType.AVATAR_DECORATION
                        }, t => (e.push(s.default.fromServer(t)), e)).with({
                            type: u.CollectiblesItemType.PROFILE_EFFECT
                        }, t => (e.push(E.default.fromServer(t)), e)).otherwise(() => e), [])
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
                    return n
                }
            });
            var n, i = r("407788");
            n = class e extends i.default {
                static fromServer(t) {
                    let {
                        purchased_at: r,
                        purchase_type: n,
                        ...i
                    } = t;
                    return new e({
                        ...super.fromServer(i),
                        purchaseType: n,
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
                    return n
                }
            });
            var n, i = r("666038");
            n = class e extends i.default {
                static fromServer(t) {
                    let {
                        store_listing_id: r,
                        sku_id: n,
                        unpublished_at: i,
                        ...u
                    } = t, l = null != i ? new Date(i) : null;
                    return new e({
                        ...u,
                        storeListingId: r,
                        skuId: n,
                        unpublishedAt: l
                    })
                }
                constructor(e) {
                    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt
                }
            }
        },
        75015: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                UploadTypes: function() {
                    return u
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return a
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return E
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return o
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return c
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return _
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return d
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return C
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return S
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return T
                },
                BANNER_ASPECT_RATIO: function() {
                    return I
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return A
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return L
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return f
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return p
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return O
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return R
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return h
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return v
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return g
                },
                MessageTypes: function() {
                    return l
                }
            });
            var n, i, u, l, s = r("917219");
            (n = u || (u = {}))[n.AVATAR = 0] = "AVATAR", n[n.BANNER = 1] = "BANNER", n[n.GUILD_BANNER = 2] = "GUILD_BANNER", n[n.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", n[n.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", n[n.HOME_HEADER = 5] = "HOME_HEADER", n[n.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let a = 568,
                E = 2400,
                o = 848,
                c = 2400,
                _ = 1350,
                d = 2400,
                C = 960,
                S = 2400,
                T = 600,
                I = 17 / 6,
                A = 16 / 9,
                L = 2.5,
                f = 4,
                p = a / I,
                O = a / A,
                R = a / L,
                h = a / f,
                v = s.BACKGROUND_REPLACEMENT_SIZE.width / s.BACKGROUND_REPLACEMENT_SIZE.height,
                g = a / v;
            (i = l || (l = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        737403: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                maybeOpenProfilePreviewModal: function() {
                    return i
                }
            });
            var n = r("913144");

            function i(e) {
                let {
                    imageSrc: t,
                    file: r,
                    uploadType: i,
                    guildId: u,
                    isTryItOutFlow: l = !1
                } = e;
                n.default.dispatch({
                    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                    imageSrc: t,
                    file: r,
                    uploadType: i,
                    guildId: u,
                    isTryItOutFlow: l
                })
            }
        },
        453252: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MAX_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return n
                }
            });
            let n = 10485760
        },
        771325: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                handleOpenSelectImageModal: function() {
                    return C
                },
                showFileSizeErrorModal: function() {
                    return S
                },
                getPreviewAvatar: function() {
                    return T
                },
                getPreviewNickname: function() {
                    return I
                },
                getPreviewDisplayName: function() {
                    return A
                },
                isColorDark: function() {
                    return L
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("509043"),
                u = r("77078"),
                l = r("336522"),
                s = r("473591"),
                a = r("315102"),
                E = r("254490"),
                o = r("737403"),
                c = r("453252"),
                _ = r("75015"),
                d = r("782340");

            function C(e, t, i, l) {
                (0, u.openModalLazy)(async () => {
                    let {
                        default: u
                    } = await r.el("420333").then(r.bind(r, "420333")), a = s.default.isEditingClydeProfile();
                    return r => (0, n.jsx)(u, {
                        filters: l,
                        maxFileSizeBytes: c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: e === _.UploadTypes.BANNER && d.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                        onComplete: (r, n) => (0, o.maybeOpenProfilePreviewModal)({
                            imageSrc: r,
                            file: n,
                            uploadType: e,
                            guildId: t,
                            isTryItOutFlow: i
                        }),
                        uploadType: e,
                        showUpsellHeader: !a,
                        ...r
                    })
                })
            }

            function S() {
                (0, l.openUploadError)({
                    title: d.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: d.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, E.sizeString)(c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
                    })
                })
            }

            function T(e, t, r) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != e) return e;
                let {
                    size: i = 80,
                    canAnimate: u = !0
                } = n, l = null === e;
                return l && null == t ? a.default.getDefaultAvatarURL(r.id, r.discriminator) : l || (null == t ? void 0 : t.avatar) == null ? r.getAvatarURL(void 0, i, u) : r.getAvatarURL(null == t ? void 0 : t.guildId, i, u)
            }

            function I(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function A(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function L(e) {
                let t = null != e ? (0, i.getDarkness)(e) : 1;
                return t > .25
            }
        },
        106435: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("884691"),
                i = r("77078"),
                u = r("606292"),
                l = r("688318"),
                s = r("19287");

            function a(e) {
                let {
                    user: t,
                    guildId: r,
                    size: a,
                    showPending: E = !1,
                    showTryItOut: o = !1,
                    animateOnHover: c = !1,
                    avatarDecorationOverride: _,
                    avatarOverride: d
                } = e, {
                    avatarSrc: C,
                    isAvatarAnimating: S,
                    eventHandlers: T
                } = (0, s.useAnimatedAvatarSrc)({
                    user: t,
                    guildId: r,
                    size: (0, i.getAvatarSize)(a),
                    showPending: E,
                    animateOnHover: c,
                    avatarOverride: d
                }), {
                    avatarPlaceholderSrc: I,
                    avatarDecorationSrc: A,
                    eventHandlers: L
                } = (0, l.default)({
                    user: t,
                    size: (0, u.getDecorationSizeForAvatarSize)(a),
                    showPending: E,
                    animateOnHover: c,
                    avatarDecorationOverride: _,
                    showTryItOut: o
                }), f = n.useCallback(() => {
                    T.onMouseEnter(), L.onMouseEnter()
                }, [T, L]), p = n.useCallback(() => {
                    T.onMouseLeave(), L.onMouseLeave()
                }, [T, L]);
                return {
                    avatarPlaceholderSrc: I,
                    avatarDecorationSrc: A,
                    avatarSrc: C,
                    isAnimating: S,
                    eventHandlers: {
                        onMouseEnter: f,
                        onMouseLeave: p
                    }
                }
            }
        },
        19287: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useAnimatedAvatarSrc: function() {
                    return o
                }
            }), r("222007");
            var n = r("884691"),
                i = r("446674"),
                u = r("206230"),
                l = r("771325"),
                s = r("26989"),
                a = r("471671"),
                E = r("91653");

            function o(e) {
                let {
                    user: t,
                    guildId: r,
                    size: o,
                    showPending: c = !1,
                    animateOnHover: _ = !1,
                    avatarOverride: d
                } = e, [C, S] = n.useState(!1), T = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), I = (0, i.useStateFromStores)([a.default], () => a.default.isFocused()), A = I && (C || !T && !_), {
                    pendingAvatar: L
                } = (0, E.default)({}), f = (0, i.useStateFromStores)([s.default], () => null != r && null != t ? s.default.getMember(r, t.id) : null), p = n.useMemo(() => null != t ? (0, l.getPreviewAvatar)(c ? null != d ? d : L : void 0, f, t, {
                    canAnimate: A,
                    size: o
                }) : void 0, [c, L, f, t, A, o, d]), O = n.useCallback(() => S(!0), []), R = n.useCallback(() => S(!1), []);
                return {
                    avatarSrc: p,
                    isAvatarAnimating: A,
                    eventHandlers: {
                        onMouseEnter: O,
                        onMouseLeave: R
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=d564031e4aff40b7e5f5.js.map