(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4867"], {
        53708: function(t, e, n) {
            "use strict";
            t.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        875212: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useTriggerDebuggingAA: function() {
                    return u
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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

            function u(t) {
                let {
                    autoTrackExposure: e = !1,
                    location: n
                } = t;
                return i.useExperiment({
                    location: n
                }, {
                    autoTrackExposure: e
                })
            }
        },
        688318: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                u = n("206230"),
                o = n("91653"),
                l = n("471671"),
                a = n("315102"),
                E = n("53708"),
                _ = t => {
                    let {
                        user: e,
                        size: n,
                        animateOnHover: _ = !1,
                        showPending: s = !1,
                        showTryItOut: c = !1,
                        avatarDecorationOverride: T
                    } = t, [d, S] = r.useState(!1), A = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), I = (0, i.useStateFromStores)([l.default], () => l.default.isFocused()), {
                        pendingAvatarDecoration: f
                    } = (0, o.default)({
                        isTryItOut: c
                    }), C = I && (d || !A && !_), R = s && void 0 !== f ? f : null == e ? void 0 : e.avatarDecoration, N = r.useMemo(() => (0, a.getAvatarDecorationURL)({
                        avatarDecoration: void 0 !== T ? T : R,
                        canAnimate: C,
                        size: n
                    }), [R, C, n, T]), O = r.useCallback(() => S(!0), []), v = r.useCallback(() => S(!1), []);
                    return {
                        avatarPlaceholderSrc: E,
                        avatarDecorationSrc: N,
                        isAvatarDecorationAnimating: C,
                        eventHandlers: {
                            onMouseEnter: O,
                            onMouseLeave: v
                        }
                    }
                }
        },
        473591: function(t, e, n) {
            "use strict";
            let r, i, u, o, l, a;
            n.r(e), n.d(e, {
                default: function() {
                    return R
                }
            });
            var E = n("446674"),
                _ = n("913144");
            let s = !1,
                c = !1,
                T = null,
                d = {},
                S = {},
                A = {},
                I = {};

            function f() {
                r = void 0, i = void 0, u = void 0, o = void 0, l = void 0, T = null
            }
            class C extends E.default.Store {
                getSettings(t) {
                    if (null != t) return A[t]
                }
                getProfile(t) {
                    return null == t ? null : d[t]
                }
                getGeneratedPersonality() {
                    return a
                }
                getPendingPersonality() {
                    return r
                }
                getPendingNick() {
                    return i
                }
                getErrors() {
                    return T
                }
                hasPendingChanges() {
                    return void 0 !== r || void 0 !== i || void 0 !== u || void 0 !== o || void 0 !== l
                }
                getPendingUpdates() {
                    return {
                        pendingAvatar: u,
                        pendingNick: i,
                        pendingPersonality: r,
                        pendingBanner: o,
                        pendingThemeColors: l
                    }
                }
                isSavingSettings() {
                    return s
                }
                isFetchingSettings(t) {
                    var e;
                    return null === (e = I[t]) || void 0 === e ? void 0 : e.isFetching
                }
                shouldFetchSettings(t) {
                    var e, n;
                    let r = null !== (e = I[t]) && void 0 !== e ? e : {
                            isFetching: !1
                        },
                        i = Date.now(),
                        u = i - (null !== (n = r.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == r ? void 0 : r.isFetching) && u
                }
                isFetchingProfile(t) {
                    var e;
                    return null === (e = S[t]) || void 0 === e ? void 0 : e.isFetching
                }
                isEditingClydeProfile() {
                    return c
                }
            }
            C.displayName = "ClydeStore";
            var R = new C(_.default, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(t) {
                    let {
                        guildId: e
                    } = t, n = I[e];
                    I[e] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(t) {
                    let {
                        guildId: e,
                        settings: n
                    } = t;
                    I[e] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, A[e] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(t) {
                    let {
                        guildId: e
                    } = t, n = I[e];
                    I[e] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(t) {
                    let {
                        personality: e,
                        isGenerated: n
                    } = t;
                    r = e, n && (a = e)
                },
                CLYDE_SET_PENDING_NICK: function(t) {
                    let {
                        nick: e
                    } = t;
                    i = e
                },
                CLYDE_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    u = e
                },
                CLYDE_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    o = e
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    l = e
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    T = null, s = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(t) {
                    let {
                        settings: e
                    } = t;
                    s = !1, A[e.guild_id] = e, f()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(t) {
                    s = !1, T = t.errors
                },
                CLYDE_RESET_PENDING_CHANGES: f,
                CLYDE_PROFILE_FETCH_START: function(t) {
                    let {
                        clydeProfileId: e
                    } = t, n = S[e];
                    S[e] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(t) {
                    let {
                        profile: e
                    } = t;
                    S[e.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, d[e.clyde_profile_id] = e
                },
                CLYDE_PROFILE_FETCH_FAIL: function(t) {
                    let {
                        clydeProfileId: e
                    } = t, n = S[e];
                    S[e] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(t) {
                    let {
                        profile: e
                    } = t;
                    d[e.clyde_profile_id] = e
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    c = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    c = !1
                }
            })
        },
        853987: function(t, e, n) {
            "use strict";
            let r, i;
            n.r(e), n.d(e, {
                default: function() {
                    return R
                }
            }), n("222007"), n("808653"), n("424973");
            var u = n("917351"),
                o = n("635058"),
                l = n("446674"),
                a = n("913144"),
                E = n("491232");
            let _ = new Map,
                s = new Map,
                c = {},
                T = new Map,
                d = _,
                S = s,
                A = c,
                I = T,
                f = !1;
            class C extends l.default.Store {
                get isFetching() {
                    return f
                }
                get error() {
                    return r
                }
                get lastFetched() {
                    return i
                }
                get categories() {
                    return d
                }
                get products() {
                    return S
                }
                get categorySkuIdsByProductSkuId() {
                    return A
                }
                get productsByItemTypeAndCategory() {
                    return I
                }
                getCategory(t) {
                    return null != t ? d.get(t) : void 0
                }
                getProduct(t) {
                    return null != t ? S.get(t) : void 0
                }
                getCategoryForProduct(t) {
                    return null != t ? this.getCategory(A[t]) : void 0
                }
                getProductsByItemType(t) {
                    return null != t && o.CollectiblesCategorySkuIdSets.ALL.has(t) ? I.get(t) : void 0
                }
            }
            C.displayName = "CollectiblesCategoryStore";
            var R = new C(a.default, {
                COLLECTIBLES_CATEGORIES_FETCH: t => {
                    f = !0, r = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: t => {
                    0 === t.categories.length ? (d = _, S = s, A = c, I = T) : !(0, u.isEqual)([...d.values()], t.categories) && (d = new Map(t.categories.map(t => [t.skuId, t])), S = new Map((0, E.getProductsFromCategories)(d).map(t => [t.skuId, t])), A = t.categories.reduce((t, e) => (e.products.forEach(n => {
                        t[n.skuId] = e.skuId
                    }), t), {}), t.categories.forEach(t => {
                        let e = t.products.reduce((t, e) => {
                            if (e.items.length > 0) {
                                var n;
                                let r = e.items[0].type;
                                t[r] = null !== (n = t[r]) && void 0 !== n ? n : [], t[r].push(e)
                            }
                            return t
                        }, {});
                        I.set(t.skuId, e)
                    })), i = Date.now(), f = !1, r = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_FAILURE: t => {
                    let {
                        error: e
                    } = t;
                    d = _, S = s, A = c, I = T, f = !1, r = e
                },
                COLLECTIBLES_PRODUCT_FETCH: t => {
                    f = !0, r = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_SUCCESS: t => {
                    S.set(t.product.skuId, t.product), f = !1, r = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_FAILURE: t => {
                    let {
                        error: e
                    } = t;
                    f = !1, r = e
                },
                LOGOUT: t => {
                    d = _, S = s, A = c, I = T, i = void 0, f = !1, r = void 0
                }
            })
        },
        491232: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isPremiumCollectiblesCategory: function() {
                    return s
                },
                isPremiumCollectiblesPurchase: function() {
                    return c
                },
                getFormattedPriceForCollectiblesProduct: function() {
                    return T
                },
                extractPriceByPurchaseTypes: function() {
                    return d
                },
                getProductsFromCategories: function() {
                    return S
                },
                getAvatarDecorationsFromPurchases: function() {
                    return f
                },
                getAvatarDecorationsFromCategories: function() {
                    return C
                },
                getCollectiblesAssetURL: function() {
                    return R
                },
                getProfileEffectsFromPurchases: function() {
                    return N
                },
                getProfileEffectsFromCategories: function() {
                    return O
                },
                groupProfileEffects: function() {
                    return v
                },
                sortProfileEffectsByPopularity: function() {
                    return U
                },
                sortAvatarDecorationsByPopularity: function() {
                    return F
                }
            }), n("222007"), n("808653");
            var r = n("917351"),
                i = n("635058"),
                u = n("265586"),
                o = n("407063"),
                l = n("153160"),
                a = n("730297"),
                E = n("806410"),
                _ = n("49111");
            let s = t => (null == t ? void 0 : t.skuId) === i.CollectiblesCategorySkuId.DISXCORE,
                c = t => (null == t ? void 0 : t.purchaseType) === _.EntitlementTypes.PREMIUM_PURCHASE,
                T = (t, e) => {
                    let n = d(t, e ? _.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : _.PriceSetAssignmentPurchaseTypes.DEFAULT);
                    return null == n ? "" : (0, l.formatPrice)(null == n ? void 0 : n.amount, null == n ? void 0 : n.currency)
                },
                d = (t, e) => {
                    var n, r, i;
                    let u = null !== (i = t.prices[e]) && void 0 !== i ? i : null;
                    return null == u ? null : null === (r = u.countryPrices) || void 0 === r ? void 0 : null === (n = r.prices) || void 0 === n ? void 0 : n[0]
                },
                S = t => {
                    let e = (0, r.flatMap)([...t.values()], "products");
                    return (0, r.uniqBy)(e, "storeListingId")
                },
                A = (t, e) => {
                    if (e === u.CollectiblesItemType.AVATAR_DECORATION) {
                        let e = (0, r.flatMap)([...t.values()], "items").filter(a.isAvatarDecorationRecord);
                        return (0, r.uniqBy)(e, "id")
                    }
                    if (e === u.CollectiblesItemType.PROFILE_EFFECT) {
                        let e = (0, r.flatMap)([...t.values()], "items").filter(E.isProfileEffectRecord);
                        return (0, r.uniqBy)(e, "id")
                    }
                },
                I = (t, e) => {
                    let n = S(t);
                    if (e === u.CollectiblesItemType.AVATAR_DECORATION) {
                        let t = (0, r.flatMap)(n, "items").filter(a.isAvatarDecorationRecord);
                        return (0, r.uniqBy)(t, "id")
                    }
                    if (e === u.CollectiblesItemType.PROFILE_EFFECT) {
                        let t = (0, r.flatMap)(n, "items").filter(E.isProfileEffectRecord);
                        return (0, r.uniqBy)(t, "id")
                    }
                },
                f = t => A(t, u.CollectiblesItemType.AVATAR_DECORATION),
                C = t => I(t, u.CollectiblesItemType.AVATAR_DECORATION),
                R = (t, e) => {
                    var n;
                    let {
                        CDN_HOST: r,
                        API_ENDPOINT: i
                    } = window.GLOBAL_ENV, u = (0, o.getBestMediaProxySize)(e.size * (0, o.getDevicePixelRatio)()), l = null !== (n = null == e ? void 0 : e.format) && void 0 !== n ? n : "png";
                    if (null != r) return "".concat(location.protocol, "//").concat(r, "/app-assets/").concat(_.COLLECTIBLES_APPLICATION_ID, "/").concat(t, ".").concat(l, "?size=").concat(u);
                    let a = _.Endpoints.APPLICATION_ASSET(_.COLLECTIBLES_APPLICATION_ID, t, l);
                    return "".concat(location.protocol).concat(i).concat(a, "?size=").concat(u)
                },
                N = t => A(t, u.CollectiblesItemType.PROFILE_EFFECT),
                O = t => I(t, u.CollectiblesItemType.PROFILE_EFFECT),
                v = (t, e) => {
                    let n = N(e),
                        r = O(t).filter(t => {
                            let {
                                id: e
                            } = t;
                            return !n.some(t => t.id === e)
                        });
                    return {
                        purchased: n,
                        shopPreviews: r
                    }
                },
                g = (t, e, n) => (t[e] = n, t),
                D = t => (e, n) => {
                    var r, i;
                    let u = null !== (r = t[e.skuId]) && void 0 !== r ? r : Number.MAX_VALUE,
                        o = null !== (i = t[n.skuId]) && void 0 !== i ? i : Number.MAX_VALUE;
                    return u - o
                },
                L = ["1146328960951668776", "1146328961417224193", "1139323093991575696", "1139323099687436419", "1139323092645183591", "1139323093551165533", "1139323101881061466", "1139323100568244355", "1139323101008642101", "1139323099251232828", "1139323095744790568", "1139323096180994169"].reduce(g, {}),
                P = ["1174460780842856588", "1174459546748600481", "1174459480348565554", "1174459415924064376", "1154896005045694555", "1144307957425778779", "1144308439720394944", "1144307629225672846", "1144308196723408958", "1144046002110738634", "1144305233707671573", "1144307257807491094", "1144056139584127058", "1144006094134456352", "1144057023726628945", "1144003752978829455", "1144056631374647458", "1144057486203158560", "1144048390594908212", "1144048977138946230", "1144057737475534889", "1144049603109470370", "1144057249392771145", "1144049316009353338", "1144049924397334651"].reduce(g, {}),
                U = t => t.sort(D(L)),
                F = t => t.sort(D(P))
        },
        170313: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            }), n("222007"), n("794252");
            var r = n("884691"),
                i = n("506838"),
                u = n("265586"),
                o = n("65597"),
                l = n("599110"),
                a = n("853987"),
                E = n("491232"),
                _ = n("49111"),
                s = n("646718"),
                c = t => {
                    let [e, n, c] = (0, o.useStateFromStoresArray)([a.default], () => [a.default.categories, a.default.products, a.default.categorySkuIdsByProductSkuId]);
                    return (0, r.useCallback)(r => {
                        let {
                            type: o,
                            skuId: a
                        } = r, T = e.get(c[a]), d = n.get(a);
                        l.default.track(_.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                            feature_name: (0, i.match)(o).with(u.CollectiblesItemType.AVATAR_DECORATION, () => s.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).otherwise(() => void 0),
                            feature_tier: (0, E.isPremiumCollectiblesCategory)(T) ? s.AnalyticsPremiumFeatureTiers.FREE : s.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                            feature_selection: null == d ? void 0 : d.name,
                            location_stack: t
                        })
                    }, [e, n, c, t])
                }
        },
        730297: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isAvatarDecorationRecord: function() {
                    return o
                },
                default: function() {
                    return r
                }
            });
            var r, i = n("265586"),
                u = n("200410");
            let o = t => t instanceof r;
            r = class t extends u.default {
                static fromServer(e) {
                    return new t({
                        ...super.fromServer(e),
                        ...e
                    })
                }
                constructor(t) {
                    super(t), this.type = i.CollectiblesItemType.AVATAR_DECORATION, this.asset = t.asset, this.label = t.label
                }
            }
        },
        200410: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r, i = n("666038");
            r = class t extends i.default {
                static fromServer(e) {
                    let {
                        sku_id: n,
                        ...r
                    } = e;
                    return new t({
                        ...r,
                        skuId: n
                    })
                }
                constructor(t) {
                    super(), this.id = t.id, this.skuId = t.skuId
                }
            }
        },
        806410: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isProfileEffectRecord: function() {
                    return o
                },
                default: function() {
                    return r
                }
            });
            var r, i = n("265586"),
                u = n("200410");
            let o = t => t instanceof r;
            r = class t extends u.default {
                static fromServer(e) {
                    return new t({
                        ...super.fromServer(e),
                        ...e
                    })
                }
                constructor(t) {
                    super(t), this.type = i.CollectiblesItemType.PROFILE_EFFECT
                }
            }
        },
        75015: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
                    return _
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return s
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return T
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return d
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return S
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return A
                },
                BANNER_ASPECT_RATIO: function() {
                    return I
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return f
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return C
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return R
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return N
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return O
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return v
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return g
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return D
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return L
                },
                MessageTypes: function() {
                    return o
                }
            });
            var r, i, u, o, l = n("917219");
            (r = u || (u = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let a = 568,
                E = 2400,
                _ = 848,
                s = 2400,
                c = 1350,
                T = 2400,
                d = 960,
                S = 2400,
                A = 600,
                I = 17 / 6,
                f = 16 / 9,
                C = 2.5,
                R = 4,
                N = a / I,
                O = a / f,
                v = a / C,
                g = a / R,
                D = l.BACKGROUND_REPLACEMENT_SIZE.width / l.BACKGROUND_REPLACEMENT_SIZE.height,
                L = a / D;
            (i = o || (o = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        737403: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                maybeOpenProfilePreviewModal: function() {
                    return i
                }
            });
            var r = n("913144");

            function i(t) {
                let {
                    imageSrc: e,
                    file: n,
                    uploadType: i,
                    guildId: u,
                    isTryItOutFlow: o = !1
                } = t;
                r.default.dispatch({
                    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                    imageSrc: e,
                    file: n,
                    uploadType: i,
                    guildId: u,
                    isTryItOutFlow: o
                })
            }
        },
        453252: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                MAX_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return r
                }
            });
            let r = 10485760
        },
        771325: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                handleOpenSelectImageModal: function() {
                    return d
                },
                showFileSizeErrorModal: function() {
                    return S
                },
                getPreviewAvatar: function() {
                    return A
                },
                getPreviewNickname: function() {
                    return I
                },
                getPreviewDisplayName: function() {
                    return f
                },
                isColorDark: function() {
                    return C
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("509043"),
                u = n("77078"),
                o = n("336522"),
                l = n("473591"),
                a = n("315102"),
                E = n("254490"),
                _ = n("737403"),
                s = n("453252"),
                c = n("75015"),
                T = n("782340");

            function d(t, e, i, o) {
                (0, u.openModalLazy)(async () => {
                    let {
                        default: u
                    } = await n.el("420333").then(n.bind(n, "420333")), a = l.default.isEditingClydeProfile();
                    return n => (0, r.jsx)(u, {
                        filters: o,
                        maxFileSizeBytes: s.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: t === c.UploadTypes.BANNER && T.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                        onComplete: (n, r) => (0, _.maybeOpenProfilePreviewModal)({
                            imageSrc: n,
                            file: r,
                            uploadType: t,
                            guildId: e,
                            isTryItOutFlow: i
                        }),
                        uploadType: t,
                        showUpsellHeader: !a,
                        ...n
                    })
                })
            }

            function S() {
                (0, o.openUploadError)({
                    title: T.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: T.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, E.sizeString)(s.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
                    })
                })
            }

            function A(t, e, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != t) return t;
                let {
                    size: i = 80,
                    canAnimate: u = !0
                } = r, o = null === t;
                return o && null == e ? a.default.getDefaultAvatarURL(n.id, n.discriminator) : o || (null == e ? void 0 : e.avatar) == null ? n.getAvatarURL(void 0, i, u) : n.getAvatarURL(null == e ? void 0 : e.guildId, i, u)
            }

            function I(t, e) {
                return "" === t ? null : null != t ? t : e
            }

            function f(t, e) {
                return "" === t ? null : null != t ? t : e
            }

            function C(t) {
                let e = null != t ? (0, i.getDarkness)(t) : 1;
                return e > .25
            }
        },
        91653: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var r = n("884691"),
                i = n("65597"),
                u = n("170313"),
                o = n("906932"),
                l = n("790618"),
                a = n("697218"),
                E = n("783142"),
                _ = t => {
                    let {
                        isTryItOut: e,
                        analyticsLocations: n
                    } = t, _ = (0, i.default)([a.default], () => a.default.getCurrentUser()), s = (0, u.default)(n), {
                        pendingAvatar: c,
                        pendingAvatarDecoration: T
                    } = (0, i.useStateFromStoresObject)([l.default], () => ({
                        pendingAvatar: e ? l.default.getTryItOutAvatar() : l.default.getPendingAvatar(),
                        pendingAvatarDecoration: e ? l.default.getTryItOutAvatarDecoration() : l.default.getPendingAvatarDecoration()
                    })), d = (0, r.useCallback)(t => (0, o.setNewPendingAvatar)(t, null == _ ? void 0 : _.avatar), [null == _ ? void 0 : _.avatar]), S = (0, r.useCallback)(t => {
                        (0, o.setNewPendingAvatarDecoration)(t, null == _ ? void 0 : _.avatarDecoration), null != t && s(t)
                    }, [null == _ ? void 0 : _.avatarDecoration, s]);
                    return {
                        pendingAvatar: c,
                        pendingAvatarDecoration: T,
                        setPendingAvatar: e ? E.setTryItOutAvatar : d,
                        setPendingAvatarDecoration: e ? E.setTryItOutAvatarDecoration : S
                    }
                }
        },
        106435: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("77078"),
                u = n("606292"),
                o = n("688318"),
                l = n("19287");

            function a(t) {
                let {
                    user: e,
                    guildId: n,
                    size: a,
                    showPending: E = !1,
                    showTryItOut: _ = !1,
                    animateOnHover: s = !1,
                    avatarDecorationOverride: c,
                    avatarOverride: T
                } = t, {
                    avatarSrc: d,
                    isAvatarAnimating: S,
                    eventHandlers: A
                } = (0, l.useAnimatedAvatarSrc)({
                    user: e,
                    guildId: n,
                    size: (0, i.getAvatarSize)(a),
                    showPending: E,
                    animateOnHover: s,
                    avatarOverride: T
                }), {
                    avatarPlaceholderSrc: I,
                    avatarDecorationSrc: f,
                    eventHandlers: C
                } = (0, o.default)({
                    user: e,
                    size: (0, u.getDecorationSizeForAvatarSize)(a),
                    showPending: E,
                    animateOnHover: s,
                    avatarDecorationOverride: c,
                    showTryItOut: _
                }), R = r.useCallback(() => {
                    A.onMouseEnter(), C.onMouseEnter()
                }, [A, C]), N = r.useCallback(() => {
                    A.onMouseLeave(), C.onMouseLeave()
                }, [A, C]);
                return {
                    avatarPlaceholderSrc: I,
                    avatarDecorationSrc: f,
                    avatarSrc: d,
                    isAnimating: S,
                    eventHandlers: {
                        onMouseEnter: R,
                        onMouseLeave: N
                    }
                }
            }
        },
        19287: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useAnimatedAvatarSrc: function() {
                    return _
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                u = n("206230"),
                o = n("771325"),
                l = n("26989"),
                a = n("471671"),
                E = n("91653");

            function _(t) {
                let {
                    user: e,
                    guildId: n,
                    size: _,
                    showPending: s = !1,
                    animateOnHover: c = !1,
                    avatarOverride: T
                } = t, [d, S] = r.useState(!1), A = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), I = (0, i.useStateFromStores)([a.default], () => a.default.isFocused()), f = I && (d || !A && !c), {
                    pendingAvatar: C
                } = (0, E.default)({}), R = (0, i.useStateFromStores)([l.default], () => null != n && null != e ? l.default.getMember(n, e.id) : null), N = r.useMemo(() => null != e ? (0, o.getPreviewAvatar)(s ? null != T ? T : C : void 0, R, e, {
                    canAnimate: f,
                    size: _
                }) : void 0, [s, C, R, e, f, _, T]), O = r.useCallback(() => S(!0), []), v = r.useCallback(() => S(!1), []);
                return {
                    avatarSrc: N,
                    isAvatarAnimating: f,
                    eventHandlers: {
                        onMouseEnter: O,
                        onMouseLeave: v
                    }
                }
            }
        },
        790618: function(t, e, n) {
            "use strict";
            let r, i, u, o, l, a, E, _, s, c, T, d, S, A;
            n.r(e), n.d(e, {
                default: function() {
                    return G
                }
            });
            var I = n("265586"),
                f = n("446674"),
                C = n("913144"),
                R = n("49111");
            let N = R.FormStates.CLOSED,
                O = {},
                v = !1;

            function g() {
                N = R.FormStates.OPEN, O = {}
            }

            function D() {
                N = R.FormStates.CLOSED, O = {}
            }

            function L() {
                P(), U(), O = {}
            }

            function P() {
                r = void 0, i = void 0, u = void 0, o = void 0
            }

            function U() {
                l = void 0, a = void 0, E = void 0, _ = void 0, s = void 0, o = void 0
            }

            function F() {
                T = void 0, d = void 0, S = void 0, A = void 0, c = void 0
            }
            class m extends f.default.Store {
                getFormState() {
                    return N
                }
                getErrors() {
                    return O
                }
                showNotice() {
                    return void 0 !== r || void 0 !== l || void 0 !== a || void 0 !== E || void 0 !== _ || void 0 !== s || void 0 !== u || void 0 !== o || void 0 !== i
                }
                getPendingAvatar() {
                    return r
                }
                getPendingGlobalName() {
                    return i
                }
                getPendingBanner() {
                    return l
                }
                getPendingBio() {
                    return a
                }
                getPendingPronouns() {
                    return E
                }
                getPendingAccentColor() {
                    return _
                }
                getPendingThemeColors() {
                    return s
                }
                getPendingAvatarDecoration() {
                    return u
                }
                getPendingProfileEffectID() {
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: r,
                        pendingBanner: l,
                        pendingBio: a,
                        pendingPronouns: E,
                        pendingAccentColor: _,
                        pendingThemeColors: s,
                        pendingAvatarDecoration: u,
                        pendingProfileEffectID: o,
                        pendingGlobalName: i
                    }
                }
                getTryItOutThemeColors() {
                    return c
                }
                getTryItOutAvatar() {
                    return T
                }
                getTryItOutAvatarDecoration() {
                    return d
                }
                getTryItOutProfileEffectID() {
                    return S
                }
                getTryItOutBanner() {
                    return A
                }
                getAllTryItOut() {
                    return {
                        tryItOutThemeColors: c,
                        tryItOutAvatar: T,
                        tryItOutAvatarDecoration: d,
                        tryItOutProfileEffectID: S,
                        tryItOutBanner: A
                    }
                }
                getIsDisableSubmit() {
                    return v
                }
            }
            m.displayName = "UserSettingsAccountStore";
            var G = new m(C.default, {
                USER_SETTINGS_ACCOUNT_INIT: g,
                USER_SETTINGS_MODAL_INIT: g,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: g,
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    let {
                        section: e
                    } = t;
                    return e === R.UserSettingsSections.ACCOUNT && g()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: D,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    L(), F(), D()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    N = R.FormStates.SUBMITTING, O = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (N !== R.FormStates.SUBMITTING) return !1;
                    N = R.FormStates.OPEN, O = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    r = e, T = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(t) {
                    let {
                        globalName: e
                    } = t;
                    i = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(t) {
                    let {
                        avatarDecoration: e
                    } = t;
                    u = e
                },
                USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(t) {
                    let {
                        item: e
                    } = t;
                    (null == e ? void 0 : e.type) === I.CollectiblesItemType.PROFILE_EFFECT ? (d = null, S = null == e ? void 0 : e.id) : (S = null, d = e)
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(t) {
                    let {
                        profileEffectID: e
                    } = t;
                    o = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    l = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    a = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    E = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(t) {
                    let {
                        color: e
                    } = t;
                    _ = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    s = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    T = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(t) {
                    let {
                        avatarDecoration: e
                    } = t;
                    d = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(t) {
                    let {
                        profileEffectID: e
                    } = t;
                    S = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    A = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    c = e
                },
                USER_SETTINGS_CLEAR_ERRORS: function() {
                    O = {}
                },
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: P,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: U,
                USER_SETTINGS_RESET_ALL_PENDING: L,
                USER_SETTINGS_RESET_ALL_TRY_IT_OUT: F,
                USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
                    u = void 0
                },
                LOGOUT: function() {
                    r = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    v = e
                }
            })
        },
        635058: function(t, e, n) {
            "use strict";
            var r, i;
            n.r(e), n.d(e, {
                CollectiblesCategorySkuId: function() {
                    return r
                },
                CollectiblesCategorySkuIdSets: function() {
                    return u
                }
            }), n("222007"), (i = r || (r = {})).FANTASY = "1144003461608906824", i.ANIME = "1144302037593497701", i.BREAKFAST = "1144054000099012659", i.DISXCORE = "1144058340327047249", i.HALLOWEEN = "1157410718711304313", i.FALL = "1157406994873991284", i.WINTER = "1174459301239197856";
            let u = {
                ALL: new Set(["1144003461608906824", "1144054000099012659", "1144058340327047249", "1144302037593497701", "1157406994873991284", "1157410718711304313", "1174459301239197856"])
            }
        },
        265586: function(t, e, n) {
            "use strict";
            var r, i;
            n.r(e), n.d(e, {
                CollectiblesItemType: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.AVATAR_DECORATION = 0] = "AVATAR_DECORATION", i[i.PROFILE_EFFECT = 1] = "PROFILE_EFFECT"
        }
    }
]);
//# sourceMappingURL=779806ead22854edb242.js.map