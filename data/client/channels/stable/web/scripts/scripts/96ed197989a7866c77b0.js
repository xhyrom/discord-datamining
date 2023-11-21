(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4867"], {
        53708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        875212: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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

            function u(e) {
                let {
                    autoTrackExposure: t = !1,
                    location: n
                } = e;
                return i.useExperiment({
                    location: n
                }, {
                    autoTrackExposure: t
                })
            }
        },
        688318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
                _ = e => {
                    let {
                        user: t,
                        size: n,
                        animateOnHover: _ = !1,
                        showPending: s = !1,
                        showTryItOut: c = !1,
                        avatarDecorationOverride: T
                    } = e, [d, S] = r.useState(!1), A = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), I = (0, i.useStateFromStores)([l.default], () => l.default.isFocused()), {
                        pendingAvatarDecoration: f
                    } = (0, o.default)({
                        isTryItOut: c
                    }), C = I && (d || !A && !_), R = s && void 0 !== f ? f : null == t ? void 0 : t.avatarDecoration, N = r.useMemo(() => (0, a.getAvatarDecorationURL)({
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
        473591: function(e, t, n) {
            "use strict";
            let r, i, u, o, l, a;
            n.r(t), n.d(t, {
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
                getSettings(e) {
                    if (null != e) return A[e]
                }
                getProfile(e) {
                    return null == e ? null : d[e]
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
                isFetchingSettings(e) {
                    var t;
                    return null === (t = I[e]) || void 0 === t ? void 0 : t.isFetching
                }
                shouldFetchSettings(e) {
                    var t, n;
                    let r = null !== (t = I[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        i = Date.now(),
                        u = i - (null !== (n = r.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == r ? void 0 : r.isFetching) && u
                }
                isFetchingProfile(e) {
                    var t;
                    return null === (t = S[e]) || void 0 === t ? void 0 : t.isFetching
                }
                isEditingClydeProfile() {
                    return c
                }
            }
            C.displayName = "ClydeStore";
            var R = new C(_.default, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e, n = I[t];
                    I[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        settings: n
                    } = e;
                    I[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, A[t] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, n = I[t];
                    I[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    let {
                        personality: t,
                        isGenerated: n
                    } = e;
                    r = t, n && (a = t)
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
                    o = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    l = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    T = null, s = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    let {
                        settings: t
                    } = e;
                    s = !1, A[t.guild_id] = t, f()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    s = !1, T = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: f,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = S[t];
                    S[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    S[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, d[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = S[t];
                    S[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    d[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    c = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    c = !1
                }
            })
        },
        853987: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
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
                getCategory(e) {
                    return null != e ? d.get(e) : void 0
                }
                getProduct(e) {
                    return null != e ? S.get(e) : void 0
                }
                getCategoryForProduct(e) {
                    return null != e ? this.getCategory(A[e]) : void 0
                }
                getProductsByItemType(e) {
                    return null != e && o.CollectiblesCategorySkuIdSets.ALL.has(e) ? I.get(e) : void 0
                }
            }
            C.displayName = "CollectiblesCategoryStore";
            var R = new C(a.default, {
                COLLECTIBLES_CATEGORIES_FETCH: e => {
                    f = !0, r = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
                    0 === e.categories.length ? (d = _, S = s, A = c, I = T) : !(0, u.isEqual)([...d.values()], e.categories) && (d = new Map(e.categories.map(e => [e.skuId, e])), S = new Map((0, E.getProductsFromCategories)(d).map(e => [e.skuId, e])), A = e.categories.reduce((e, t) => (t.products.forEach(n => {
                        e[n.skuId] = t.skuId
                    }), e), {}), e.categories.forEach(e => {
                        let t = e.products.reduce((e, t) => {
                            if (t.items.length > 0) {
                                var n;
                                let r = t.items[0].type;
                                e[r] = null !== (n = e[r]) && void 0 !== n ? n : [], e[r].push(t)
                            }
                            return e
                        }, {});
                        I.set(e.skuId, t)
                    })), i = Date.now(), f = !1, r = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    d = _, S = s, A = c, I = T, f = !1, r = t
                },
                COLLECTIBLES_PRODUCT_FETCH: e => {
                    f = !0, r = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
                    S.set(e.product.skuId, e.product), f = !1, r = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    f = !1, r = t
                },
                LOGOUT: e => {
                    d = _, S = s, A = c, I = T, i = void 0, f = !1, r = void 0
                }
            })
        },
        491232: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
                }
            }), n("222007");
            var r = n("917351"),
                i = n("635058"),
                u = n("265586"),
                o = n("407063"),
                l = n("153160"),
                a = n("730297"),
                E = n("806410"),
                _ = n("49111");
            let s = e => (null == e ? void 0 : e.skuId) === i.CollectiblesCategorySkuId.DISXCORE,
                c = e => (null == e ? void 0 : e.purchaseType) === _.EntitlementTypes.PREMIUM_PURCHASE,
                T = (e, t) => {
                    let n = d(e, t ? _.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : _.PriceSetAssignmentPurchaseTypes.DEFAULT);
                    return null == n ? "" : (0, l.formatPrice)(null == n ? void 0 : n.amount, null == n ? void 0 : n.currency)
                },
                d = (e, t) => {
                    var n, r, i;
                    let u = null !== (i = e.prices[t]) && void 0 !== i ? i : null;
                    return null == u ? null : null === (r = u.countryPrices) || void 0 === r ? void 0 : null === (n = r.prices) || void 0 === n ? void 0 : n[0]
                },
                S = e => {
                    let t = (0, r.flatMap)([...e.values()], "products");
                    return (0, r.uniqBy)(t, "storeListingId")
                },
                A = (e, t) => {
                    if (t === u.CollectiblesItemType.AVATAR_DECORATION) {
                        let t = (0, r.flatMap)([...e.values()], "items").filter(a.isAvatarDecorationRecord);
                        return (0, r.uniqBy)(t, "id")
                    }
                    if (t === u.CollectiblesItemType.PROFILE_EFFECT) {
                        let t = (0, r.flatMap)([...e.values()], "items").filter(E.isProfileEffectRecord);
                        return (0, r.uniqBy)(t, "id")
                    }
                },
                I = (e, t) => {
                    let n = S(e);
                    if (t === u.CollectiblesItemType.AVATAR_DECORATION) {
                        let e = (0, r.flatMap)(n, "items").filter(a.isAvatarDecorationRecord);
                        return (0, r.uniqBy)(e, "id")
                    }
                    if (t === u.CollectiblesItemType.PROFILE_EFFECT) {
                        let e = (0, r.flatMap)(n, "items").filter(E.isProfileEffectRecord);
                        return (0, r.uniqBy)(e, "id")
                    }
                },
                f = e => A(e, u.CollectiblesItemType.AVATAR_DECORATION),
                C = e => I(e, u.CollectiblesItemType.AVATAR_DECORATION),
                R = (e, t) => {
                    var n;
                    let {
                        CDN_HOST: r,
                        API_ENDPOINT: i
                    } = window.GLOBAL_ENV, u = (0, o.getBestMediaProxySize)(t.size * (0, o.getDevicePixelRatio)()), l = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : "png";
                    if (null != r) return "".concat(location.protocol, "//").concat(r, "/app-assets/").concat(_.COLLECTIBLES_APPLICATION_ID, "/").concat(e, ".").concat(l, "?size=").concat(u);
                    let a = _.Endpoints.APPLICATION_ASSET(_.COLLECTIBLES_APPLICATION_ID, e, l);
                    return "".concat(location.protocol).concat(i).concat(a, "?size=").concat(u)
                },
                N = e => A(e, u.CollectiblesItemType.PROFILE_EFFECT),
                O = e => I(e, u.CollectiblesItemType.PROFILE_EFFECT),
                v = (e, t) => {
                    let n = N(t),
                        r = O(e).filter(e => {
                            let {
                                id: t
                            } = e;
                            return !n.some(e => e.id === t)
                        });
                    return {
                        purchased: n,
                        shopPreviews: r
                    }
                }
        },
        170313: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
                c = e => {
                    let [t, n, c] = (0, o.useStateFromStoresArray)([a.default], () => [a.default.categories, a.default.products, a.default.categorySkuIdsByProductSkuId]);
                    return (0, r.useCallback)(r => {
                        let {
                            type: o,
                            skuId: a
                        } = r, T = t.get(c[a]), d = n.get(a);
                        l.default.track(_.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                            feature_name: (0, i.match)(o).with(u.CollectiblesItemType.AVATAR_DECORATION, () => s.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).otherwise(() => void 0),
                            feature_tier: (0, E.isPremiumCollectiblesCategory)(T) ? s.AnalyticsPremiumFeatureTiers.FREE : s.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                            feature_selection: null == d ? void 0 : d.name,
                            location_stack: e
                        })
                    }, [t, n, c, e])
                }
        },
        730297: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isAvatarDecorationRecord: function() {
                    return o
                },
                default: function() {
                    return r
                }
            });
            var r, i = n("265586"),
                u = n("200410");
            let o = e => e instanceof r;
            r = class e extends u.default {
                static fromServer(t) {
                    return new e({
                        ...super.fromServer(t),
                        ...t
                    })
                }
                constructor(e) {
                    super(e), this.type = i.CollectiblesItemType.AVATAR_DECORATION, this.asset = e.asset, this.label = e.label
                }
            }
        },
        200410: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("666038");
            r = class e extends i.default {
                static fromServer(t) {
                    let {
                        sku_id: n,
                        ...r
                    } = t;
                    return new e({
                        ...r,
                        skuId: n
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.skuId = e.skuId
                }
            }
        },
        806410: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isProfileEffectRecord: function() {
                    return o
                },
                default: function() {
                    return r
                }
            });
            var r, i = n("265586"),
                u = n("200410");
            let o = e => e instanceof r;
            r = class e extends u.default {
                static fromServer(t) {
                    return new e({
                        ...super.fromServer(t),
                        ...t
                    })
                }
                constructor(e) {
                    super(e), this.type = i.CollectiblesItemType.PROFILE_EFFECT
                }
            }
        },
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
        737403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeOpenProfilePreviewModal: function() {
                    return i
                }
            });
            var r = n("913144");

            function i(e) {
                let {
                    imageSrc: t,
                    file: n,
                    uploadType: i,
                    guildId: u,
                    isTryItOutFlow: o = !1
                } = e;
                r.default.dispatch({
                    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                    imageSrc: t,
                    file: n,
                    uploadType: i,
                    guildId: u,
                    isTryItOutFlow: o
                })
            }
        },
        453252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return r
                }
            });
            let r = 10485760
        },
        771325: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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

            function d(e, t, i, o) {
                (0, u.openModalLazy)(async () => {
                    let {
                        default: u
                    } = await n.el("420333").then(n.bind(n, "420333")), a = l.default.isEditingClydeProfile();
                    return n => (0, r.jsx)(u, {
                        filters: o,
                        maxFileSizeBytes: s.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: e === c.UploadTypes.BANNER && T.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                        onComplete: (n, r) => (0, _.maybeOpenProfilePreviewModal)({
                            imageSrc: n,
                            file: r,
                            uploadType: e,
                            guildId: t,
                            isTryItOutFlow: i
                        }),
                        uploadType: e,
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

            function A(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != e) return e;
                let {
                    size: i = 80,
                    canAnimate: u = !0
                } = r, o = null === e;
                return o && null == t ? a.default.getDefaultAvatarURL(n.id, n.discriminator) : o || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, i, u) : n.getAvatarURL(null == t ? void 0 : t.guildId, i, u)
            }

            function I(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function f(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function C(e) {
                let t = null != e ? (0, i.getDarkness)(e) : 1;
                return t > .25
            }
        },
        91653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
                _ = e => {
                    let {
                        isTryItOut: t,
                        analyticsLocations: n
                    } = e, _ = (0, i.default)([a.default], () => a.default.getCurrentUser()), s = (0, u.default)(n), {
                        pendingAvatar: c,
                        pendingAvatarDecoration: T
                    } = (0, i.useStateFromStoresObject)([l.default], () => ({
                        pendingAvatar: t ? l.default.getTryItOutAvatar() : l.default.getPendingAvatar(),
                        pendingAvatarDecoration: t ? l.default.getTryItOutAvatarDecoration() : l.default.getPendingAvatarDecoration()
                    })), d = (0, r.useCallback)(e => (0, o.setNewPendingAvatar)(e, null == _ ? void 0 : _.avatar), [null == _ ? void 0 : _.avatar]), S = (0, r.useCallback)(e => {
                        (0, o.setNewPendingAvatarDecoration)(e, null == _ ? void 0 : _.avatarDecoration), null != e && s(e)
                    }, [null == _ ? void 0 : _.avatarDecoration, s]);
                    return {
                        pendingAvatar: c,
                        pendingAvatarDecoration: T,
                        setPendingAvatar: t ? E.setTryItOutAvatar : d,
                        setPendingAvatarDecoration: t ? E.setTryItOutAvatarDecoration : S
                    }
                }
        },
        106435: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("77078"),
                u = n("606292"),
                o = n("688318"),
                l = n("19287");

            function a(e) {
                let {
                    user: t,
                    guildId: n,
                    size: a,
                    showPending: E = !1,
                    showTryItOut: _ = !1,
                    animateOnHover: s = !1,
                    avatarDecorationOverride: c,
                    avatarOverride: T
                } = e, {
                    avatarSrc: d,
                    isAvatarAnimating: S,
                    eventHandlers: A
                } = (0, l.useAnimatedAvatarSrc)({
                    user: t,
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
                    user: t,
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
        19287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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

            function _(e) {
                let {
                    user: t,
                    guildId: n,
                    size: _,
                    showPending: s = !1,
                    animateOnHover: c = !1,
                    avatarOverride: T
                } = e, [d, S] = r.useState(!1), A = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), I = (0, i.useStateFromStores)([a.default], () => a.default.isFocused()), f = I && (d || !A && !c), {
                    pendingAvatar: C
                } = (0, E.default)({}), R = (0, i.useStateFromStores)([l.default], () => null != n && null != t ? l.default.getMember(n, t.id) : null), N = r.useMemo(() => null != t ? (0, o.getPreviewAvatar)(s ? null != T ? T : C : void 0, R, t, {
                    canAnimate: f,
                    size: _
                }) : void 0, [s, C, R, t, f, _, T]), O = r.useCallback(() => S(!0), []), v = r.useCallback(() => S(!1), []);
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
        790618: function(e, t, n) {
            "use strict";
            let r, i, u, o, l, a, E, _, s, c, T, d, S, A;
            n.r(t), n.d(t, {
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
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    let {
                        section: t
                    } = e;
                    return t === R.UserSettingsSections.ACCOUNT && g()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: D,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    L(), F(), D()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    N = R.FormStates.SUBMITTING, O = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (N !== R.FormStates.SUBMITTING) return !1;
                    N = R.FormStates.OPEN, O = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    r = t, T = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
                    let {
                        globalName: t
                    } = e;
                    i = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
                    let {
                        avatarDecoration: t
                    } = e;
                    u = t
                },
                USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(e) {
                    let {
                        item: t
                    } = e;
                    (null == t ? void 0 : t.type) === I.CollectiblesItemType.PROFILE_EFFECT ? (d = null, S = null == t ? void 0 : t.id) : (S = null, d = t)
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
                    let {
                        profileEffectID: t
                    } = e;
                    o = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    l = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    a = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    E = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(e) {
                    let {
                        color: t
                    } = e;
                    _ = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    s = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    T = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
                    let {
                        avatarDecoration: t
                    } = e;
                    d = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
                    let {
                        profileEffectID: t
                    } = e;
                    S = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    A = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    c = t
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
                USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    v = t
                }
            })
        },
        635058: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
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
        265586: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                CollectiblesItemType: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.AVATAR_DECORATION = 0] = "AVATAR_DECORATION", i[i.PROFILE_EFFECT = 1] = "PROFILE_EFFECT"
        }
    }
]);
//# sourceMappingURL=96ed197989a7866c77b0.js.map