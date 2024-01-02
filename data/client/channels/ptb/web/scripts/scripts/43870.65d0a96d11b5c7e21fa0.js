(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43870"], {
        688318: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return E
                }
            }), r("222007");
            var n = r("884691"),
                i = r("446674"),
                o = r("206230"),
                u = r("91653"),
                l = r("697218"),
                a = r("471671"),
                T = r("315102"),
                c = r("53708"),
                E = t => {
                    let {
                        user: e,
                        size: r,
                        animateOnHover: E = !1,
                        showPending: s = !1,
                        showTryItOut: _ = !1,
                        avatarDecorationOverride: d
                    } = t, [S, C] = n.useState(!1), I = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), A = (0, i.useStateFromStores)([a.default], () => a.default.isFocused()), f = (0, i.useStateFromStores)([l.default], () => {
                        var t;
                        return null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id
                    }), v = (0, i.useStateFromStores)([l.default], () => {
                        var t;
                        return null === (t = l.default.getUser(null == e ? void 0 : e.id)) || void 0 === t ? void 0 : t.avatarDecoration
                    }), {
                        pendingAvatarDecoration: O
                    } = (0, u.default)({
                        isTryItOut: _
                    }), N = A && (S || !I && !E), R = s && void 0 !== O && void 0 !== f && f === (null == e ? void 0 : e.id) ? O : null != v ? v : null == e ? void 0 : e.avatarDecoration, P = n.useMemo(() => (0, T.getAvatarDecorationURL)({
                        avatarDecoration: void 0 !== d ? d : R,
                        canAnimate: N,
                        size: r
                    }), [R, N, r, d]), g = n.useCallback(() => C(!0), []), U = n.useCallback(() => C(!1), []);
                    return {
                        avatarPlaceholderSrc: c,
                        avatarDecorationSrc: P,
                        isAvatarDecorationAnimating: N,
                        eventHandlers: {
                            onMouseEnter: g,
                            onMouseLeave: U
                        }
                    }
                }
        },
        853987: function(t, e, r) {
            "use strict";
            let n, i;
            r.r(e), r.d(e, {
                default: function() {
                    return S
                }
            }), r("222007");
            var o = r("917351"),
                u = r("446674"),
                l = r("913144"),
                a = r("491232");
            let T = new Map,
                c = new Map,
                E = T,
                s = c,
                _ = !1;
            class d extends u.default.Store {
                get isFetching() {
                    return _
                }
                get error() {
                    return n
                }
                get lastFetched() {
                    return i
                }
                get categories() {
                    return E
                }
                get products() {
                    return s
                }
                getCategory(t) {
                    return null != t ? E.get(t) : void 0
                }
                getProduct(t) {
                    return null != t ? s.get(t) : void 0
                }
                getCategoryForProduct(t) {
                    let e = this.getProduct(t);
                    return this.getCategory(null == e ? void 0 : e.categorySkuId)
                }
            }
            d.displayName = "CollectiblesCategoryStore";
            var S = new d(l.default, {
                COLLECTIBLES_CATEGORIES_FETCH: t => {
                    _ = !0, n = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: t => {
                    0 === t.categories.length ? (E = T, s = c) : !(0, o.isEqual)([...E.values()], t.categories) && (E = new Map(t.categories.map(t => [t.skuId, t])), s = new Map((0, a.getProductsFromCategories)(E).map(t => [t.skuId, t]))), i = Date.now(), _ = !1, n = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_FAILURE: t => {
                    let {
                        error: e
                    } = t;
                    E = T, s = c, _ = !1, n = e
                },
                COLLECTIBLES_PRODUCT_FETCH: t => {
                    _ = !0, n = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_SUCCESS: t => {
                    s.set(t.product.skuId, t.product), _ = !1, n = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_FAILURE: t => {
                    let {
                        error: e
                    } = t;
                    _ = !1, n = e
                },
                LOGOUT: t => {
                    E = T, s = c, i = void 0, _ = !1, n = void 0
                }
            })
        },
        491232: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                isPremiumCollectiblesProduct: function() {
                    return E
                },
                isPremiumCollectiblesPurchase: function() {
                    return s
                },
                getFormattedPriceForCollectiblesProduct: function() {
                    return _
                },
                extractPriceByPurchaseTypes: function() {
                    return d
                },
                isFreeCollectiblesProduct: function() {
                    return S
                },
                getProductsFromCategories: function() {
                    return C
                },
                getAvatarDecorationsFromPurchases: function() {
                    return f
                },
                getAvatarDecorationsFromCategories: function() {
                    return v
                },
                getCollectiblesAssetURL: function() {
                    return O
                },
                getProfileEffectsFromPurchases: function() {
                    return N
                },
                getProfileEffectsFromCategories: function() {
                    return R
                },
                groupProfileEffects: function() {
                    return P
                },
                isCollectiblesGiftCode: function() {
                    return g
                }
            }), r("222007"), r("808653");
            var n = r("917351"),
                i = r("635058"),
                o = r("265586"),
                u = r("407063"),
                l = r("153160"),
                a = r("730297"),
                T = r("806410"),
                c = r("49111");
            let E = t => (null == t ? void 0 : t.categorySkuId) === i.CollectiblesCategorySkuId.DISXCORE,
                s = t => (null == t ? void 0 : t.purchaseType) === c.EntitlementTypes.PREMIUM_PURCHASE,
                _ = (t, e) => {
                    let r = d(t, e ? c.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : c.PriceSetAssignmentPurchaseTypes.DEFAULT);
                    return null == r ? "" : (0, l.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
                },
                d = (t, e) => {
                    var r, n, i;
                    let o = null !== (i = t.prices[e]) && void 0 !== i ? i : null;
                    return null == o ? null : null === (n = o.countryPrices) || void 0 === n ? void 0 : null === (r = n.prices) || void 0 === r ? void 0 : r[0]
                },
                S = t => {
                    var e;
                    return (null === (e = d(t, c.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === e ? void 0 : e.amount) === 0
                },
                C = t => {
                    let e = (0, n.flatMap)([...t.values()], "products");
                    return (0, n.uniqBy)(e, "storeListingId")
                },
                I = (t, e) => {
                    if (e === o.CollectiblesItemType.AVATAR_DECORATION) {
                        let e = (0, n.flatMap)([...t.values()], "items").filter(a.isAvatarDecorationRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                    if (e === o.CollectiblesItemType.PROFILE_EFFECT) {
                        let e = (0, n.flatMap)([...t.values()], "items").filter(T.isProfileEffectRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                },
                A = (t, e) => {
                    let r = C(t);
                    if (e === o.CollectiblesItemType.AVATAR_DECORATION) {
                        let t = (0, n.flatMap)(r, "items").filter(a.isAvatarDecorationRecord);
                        return (0, n.uniqBy)(t, "id")
                    }
                    if (e === o.CollectiblesItemType.PROFILE_EFFECT) {
                        let t = (0, n.flatMap)(r, "items").filter(T.isProfileEffectRecord);
                        return (0, n.uniqBy)(t, "id")
                    }
                },
                f = t => I(t, o.CollectiblesItemType.AVATAR_DECORATION),
                v = t => A(t, o.CollectiblesItemType.AVATAR_DECORATION),
                O = (t, e) => {
                    var r;
                    let {
                        CDN_HOST: n,
                        API_ENDPOINT: i
                    } = window.GLOBAL_ENV, o = (0, u.getBestMediaProxySize)(e.size * (0, u.getDevicePixelRatio)()), l = null !== (r = null == e ? void 0 : e.format) && void 0 !== r ? r : "png";
                    if (null != n) return "".concat(location.protocol, "//").concat(n, "/app-assets/").concat(c.COLLECTIBLES_APPLICATION_ID, "/").concat(t, ".").concat(l, "?size=").concat(o);
                    let a = c.Endpoints.APPLICATION_ASSET(c.COLLECTIBLES_APPLICATION_ID, t, l);
                    return "".concat(location.protocol).concat(i).concat(a, "?size=").concat(o)
                },
                N = t => I(t, o.CollectiblesItemType.PROFILE_EFFECT),
                R = t => A(t, o.CollectiblesItemType.PROFILE_EFFECT),
                P = (t, e) => {
                    let r = N(e),
                        n = R(t).filter(t => {
                            let {
                                id: e
                            } = t;
                            return !r.some(t => t.id === e)
                        });
                    return {
                        purchased: r,
                        shopPreviews: n
                    }
                },
                g = t => t.applicationId === c.COLLECTIBLES_APPLICATION_ID,
                U = (t, e, r) => (t[e] = r, t);
            ["1146328960951668776", "1146328961417224193", "1139323093991575696", "1139323099687436419", "1139323092645183591", "1139323093551165533", "1139323101881061466", "1139323100568244355", "1139323101008642101", "1139323099251232828", "1139323095744790568", "1139323096180994169"].reduce(U, {}), ["1174460780842856588", "1174459546748600481", "1174459480348565554", "1174459415924064376", "1154896005045694555", "1144307957425778779", "1144308439720394944", "1144307629225672846", "1144308196723408958", "1144046002110738634", "1144305233707671573", "1144307257807491094", "1144056139584127058", "1144006094134456352", "1144057023726628945", "1144003752978829455", "1144056631374647458", "1144057486203158560", "1144048390594908212", "1144048977138946230", "1144057737475534889", "1144049603109470370", "1144057249392771145", "1144049316009353338", "1144049924397334651"].reduce(U, {})
        },
        170313: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return s
                }
            }), r("794252");
            var n = r("884691"),
                i = r("506838"),
                o = r("265586"),
                u = r("65597"),
                l = r("599110"),
                a = r("853987"),
                T = r("491232"),
                c = r("49111"),
                E = r("646718"),
                s = t => {
                    let e = (0, u.default)([a.default], () => a.default.products);
                    return (0, n.useCallback)(r => {
                        let {
                            type: n,
                            skuId: u
                        } = r, a = e.get(u);
                        l.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                            feature_name: (0, i.match)(n).with(o.CollectiblesItemType.AVATAR_DECORATION, () => E.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).with(o.CollectiblesItemType.PROFILE_EFFECT, () => E.AnalyticsPremiumFeatureNames.PROFILE_EFFECT).otherwise(() => void 0),
                            feature_tier: (0, T.isPremiumCollectiblesProduct)(a) ? E.AnalyticsPremiumFeatureTiers.FREE : E.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                            feature_selection: null == a ? void 0 : a.name,
                            location_stack: t
                        })
                    }, [e, t])
                }
        },
        730297: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                isAvatarDecorationRecord: function() {
                    return u
                },
                default: function() {
                    return n
                }
            });
            var n, i = r("265586"),
                o = r("200410");
            let u = t => t instanceof n;
            n = class t extends o.default {
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
        200410: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return n
                }
            });
            var n, i = r("666038");
            n = class t extends i.default {
                static fromServer(e) {
                    let {
                        sku_id: r,
                        ...n
                    } = e;
                    return new t({
                        ...n,
                        skuId: r
                    })
                }
                constructor(t) {
                    super(), this.id = t.id, this.skuId = t.skuId
                }
            }
        },
        806410: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                isProfileEffectRecord: function() {
                    return u
                },
                default: function() {
                    return n
                }
            });
            var n, i = r("265586"),
                o = r("200410");
            let u = t => t instanceof n;
            n = class t extends o.default {
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
        91653: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return c
                }
            });
            var n = r("884691"),
                i = r("65597"),
                o = r("170313"),
                u = r("906932"),
                l = r("790618"),
                a = r("697218"),
                T = r("783142"),
                c = t => {
                    let {
                        isTryItOut: e,
                        analyticsLocations: r
                    } = t, c = (0, i.default)([a.default], () => a.default.getCurrentUser()), E = (0, o.default)(r), {
                        pendingAvatar: s,
                        pendingAvatarDecoration: _
                    } = (0, i.useStateFromStoresObject)([l.default], () => ({
                        pendingAvatar: e ? l.default.getTryItOutAvatar() : l.default.getPendingAvatar(),
                        pendingAvatarDecoration: e ? l.default.getTryItOutAvatarDecoration() : l.default.getPendingAvatarDecoration()
                    })), d = (0, n.useCallback)(t => (0, u.setNewPendingAvatar)(t, null == c ? void 0 : c.avatar), [null == c ? void 0 : c.avatar]), S = (0, n.useCallback)(t => {
                        (0, u.setNewPendingAvatarDecoration)(t, null == c ? void 0 : c.avatarDecoration), null != t && E(t)
                    }, [null == c ? void 0 : c.avatarDecoration, E]);
                    return {
                        pendingAvatar: s,
                        pendingAvatarDecoration: _,
                        setPendingAvatar: e ? T.setTryItOutAvatar : d,
                        setPendingAvatarDecoration: e ? T.setTryItOutAvatarDecoration : S
                    }
                }
        },
        790618: function(t, e, r) {
            "use strict";
            let n, i, o, u, l, a, T, c, E, s, _, d, S, C;
            r.r(e), r.d(e, {
                default: function() {
                    return p
                }
            });
            var I = r("265586"),
                A = r("446674"),
                f = r("913144"),
                v = r("49111");
            let O = v.FormStates.CLOSED,
                N = {},
                R = !1;

            function P() {
                O = v.FormStates.OPEN, N = {}
            }

            function g() {
                O = v.FormStates.CLOSED, N = {}
            }

            function U() {
                F(), m(), N = {}
            }

            function F() {
                n = void 0, i = void 0, o = void 0, u = void 0
            }

            function m() {
                l = void 0, a = void 0, T = void 0, c = void 0, E = void 0, u = void 0
            }

            function L() {
                _ = void 0, d = void 0, S = void 0, C = void 0, s = void 0
            }
            class D extends A.default.Store {
                getFormState() {
                    return O
                }
                getErrors() {
                    return N
                }
                showNotice() {
                    return void 0 !== n || void 0 !== l || void 0 !== a || void 0 !== T || void 0 !== c || void 0 !== E || void 0 !== o || void 0 !== u || void 0 !== i
                }
                getPendingAvatar() {
                    return n
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
                    return T
                }
                getPendingAccentColor() {
                    return c
                }
                getPendingThemeColors() {
                    return E
                }
                getPendingAvatarDecoration() {
                    return o
                }
                getPendingProfileEffectId() {
                    return u
                }
                getAllPending() {
                    return {
                        pendingAvatar: n,
                        pendingBanner: l,
                        pendingBio: a,
                        pendingPronouns: T,
                        pendingAccentColor: c,
                        pendingThemeColors: E,
                        pendingAvatarDecoration: o,
                        pendingProfileEffectId: u,
                        pendingGlobalName: i
                    }
                }
                getTryItOutThemeColors() {
                    return s
                }
                getTryItOutAvatar() {
                    return _
                }
                getTryItOutAvatarDecoration() {
                    return d
                }
                getTryItOutProfileEffectId() {
                    return S
                }
                getTryItOutBanner() {
                    return C
                }
                getAllTryItOut() {
                    return {
                        tryItOutThemeColors: s,
                        tryItOutAvatar: _,
                        tryItOutAvatarDecoration: d,
                        tryItOutProfileEffectId: S,
                        tryItOutBanner: C
                    }
                }
                getIsDisableSubmit() {
                    return R
                }
            }
            D.displayName = "UserSettingsAccountStore";
            var p = new D(f.default, {
                USER_SETTINGS_ACCOUNT_INIT: P,
                USER_SETTINGS_MODAL_INIT: P,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: P,
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    let {
                        section: e
                    } = t;
                    return e === v.UserSettingsSections.ACCOUNT && P()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: g,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    U(), L(), g()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    O = v.FormStates.SUBMITTING, N = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (O !== v.FormStates.SUBMITTING) return !1;
                    O = v.FormStates.OPEN, N = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    n = e, _ = void 0
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
                    o = e
                },
                USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(t) {
                    let {
                        item: e
                    } = t;
                    (null == e ? void 0 : e.type) === I.CollectiblesItemType.PROFILE_EFFECT ? (d = null, S = null == e ? void 0 : e.id) : (S = null, d = e)
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(t) {
                    let {
                        profileEffectId: e
                    } = t;
                    u = e
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
                    T = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(t) {
                    let {
                        color: e
                    } = t;
                    c = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    E = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    _ = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(t) {
                    let {
                        avatarDecoration: e
                    } = t;
                    d = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(t) {
                    let {
                        profileEffectId: e
                    } = t;
                    S = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    C = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    s = e
                },
                USER_SETTINGS_CLEAR_ERRORS: function() {
                    N = {}
                },
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: F,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: m,
                USER_SETTINGS_RESET_ALL_PENDING: U,
                USER_SETTINGS_RESET_ALL_TRY_IT_OUT: L,
                USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
                    o = void 0
                },
                LOGOUT: function() {
                    n = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    R = e
                }
            })
        },
        635058: function(t, e, r) {
            "use strict";
            var n, i;
            r.r(e), r.d(e, {
                CollectiblesCategorySkuId: function() {
                    return n
                }
            }), r("222007"), (i = n || (n = {})).FANTASY = "1144003461608906824", i.ANIME = "1144302037593497701", i.BREAKFAST = "1144054000099012659", i.DISXCORE = "1144058340327047249", i.HALLOWEEN = "1157410718711304313", i.FALL = "1157406994873991284", i.WINTER = "1174459301239197856", i.MONSTERS = "1179493515038818325"
        },
        265586: function(t, e, r) {
            "use strict";
            var n, i;
            r.r(e), r.d(e, {
                CollectiblesItemType: function() {
                    return n
                }
            }), (i = n || (n = {}))[i.AVATAR_DECORATION = 0] = "AVATAR_DECORATION", i[i.PROFILE_EFFECT = 1] = "PROFILE_EFFECT"
        }
    }
]);
//# sourceMappingURL=43870.65d0a96d11b5c7e21fa0.js.map