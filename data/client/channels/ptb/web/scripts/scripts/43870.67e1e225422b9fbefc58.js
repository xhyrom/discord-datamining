(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43870"], {
        53708: function(t, e, r) {
            "use strict";
            t.exports = r.p + "f6c7b8245d3a54cf98b2.png"
        },
        688318: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return T
                }
            }), r("222007");
            var n = r("884691"),
                o = r("446674"),
                i = r("206230"),
                u = r("91653"),
                l = r("697218"),
                a = r("471671"),
                c = r("315102"),
                s = r("53708"),
                T = t => {
                    let {
                        user: e,
                        size: r,
                        animateOnHover: T = !1,
                        showPending: E = !1,
                        showTryItOut: _ = !1,
                        avatarDecorationOverride: d
                    } = t, [S, C] = n.useState(!1), I = (0, o.useStateFromStores)([i.default], () => i.default.useReducedMotion), A = (0, o.useStateFromStores)([a.default], () => a.default.isFocused()), f = (0, o.useStateFromStores)([l.default], () => {
                        var t;
                        return null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id
                    }), v = (0, o.useStateFromStores)([l.default], () => {
                        var t;
                        return null === (t = l.default.getUser(null == e ? void 0 : e.id)) || void 0 === t ? void 0 : t.avatarDecoration
                    }), {
                        pendingAvatarDecoration: N
                    } = (0, u.default)({
                        isTryItOut: _
                    }), O = A && (S || !I && !T), R = E && void 0 !== N && void 0 !== f && f === (null == e ? void 0 : e.id) ? N : null != v ? v : null == e ? void 0 : e.avatarDecoration, g = n.useMemo(() => (0, c.getAvatarDecorationURL)({
                        avatarDecoration: void 0 !== d ? d : R,
                        canAnimate: O,
                        size: r
                    }), [R, O, r, d]), P = n.useCallback(() => C(!0), []), U = n.useCallback(() => C(!1), []);
                    return {
                        avatarPlaceholderSrc: s,
                        avatarDecorationSrc: g,
                        isAvatarDecorationAnimating: O,
                        eventHandlers: {
                            onMouseEnter: P,
                            onMouseLeave: U
                        }
                    }
                }
        },
        853987: function(t, e, r) {
            "use strict";
            let n, o;
            r.r(e), r.d(e, {
                default: function() {
                    return A
                }
            }), r("222007"), r("808653"), r("424973");
            var i = r("917351"),
                u = r("635058"),
                l = r("446674"),
                a = r("913144"),
                c = r("491232");
            let s = new Map,
                T = new Map,
                E = new Map,
                _ = s,
                d = T,
                S = E,
                C = !1;
            class I extends l.default.Store {
                get isFetching() {
                    return C
                }
                get error() {
                    return n
                }
                get lastFetched() {
                    return o
                }
                get categories() {
                    return _
                }
                get products() {
                    return d
                }
                get productsByItemTypeAndCategory() {
                    return S
                }
                getCategory(t) {
                    return null != t ? _.get(t) : void 0
                }
                getProduct(t) {
                    return null != t ? d.get(t) : void 0
                }
                getCategoryForProduct(t) {
                    let e = this.getProduct(t);
                    return this.getCategory(null == e ? void 0 : e.categorySkuId)
                }
                getProductsByItemType(t) {
                    return null != t && u.CollectiblesCategorySkuIdSets.ALL.has(t) ? S.get(t) : void 0
                }
            }
            I.displayName = "CollectiblesCategoryStore";
            var A = new I(a.default, {
                COLLECTIBLES_CATEGORIES_FETCH: t => {
                    C = !0, n = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: t => {
                    0 === t.categories.length ? (_ = s, d = T, S = E) : !(0, i.isEqual)([..._.values()], t.categories) && (_ = new Map(t.categories.map(t => [t.skuId, t])), d = new Map((0, c.getProductsFromCategories)(_).map(t => [t.skuId, t])), t.categories.forEach(t => {
                        let e = t.products.reduce((t, e) => {
                            if (e.items.length > 0) {
                                var r;
                                let n = e.items[0].type;
                                t[n] = null !== (r = t[n]) && void 0 !== r ? r : [], t[n].push(e)
                            }
                            return t
                        }, {});
                        S.set(t.skuId, e)
                    })), o = Date.now(), C = !1, n = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_FAILURE: t => {
                    let {
                        error: e
                    } = t;
                    _ = s, d = T, S = E, C = !1, n = e
                },
                COLLECTIBLES_PRODUCT_FETCH: t => {
                    C = !0, n = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_SUCCESS: t => {
                    d.set(t.product.skuId, t.product), C = !1, n = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_FAILURE: t => {
                    let {
                        error: e
                    } = t;
                    C = !1, n = e
                },
                LOGOUT: t => {
                    _ = s, d = T, S = E, o = void 0, C = !1, n = void 0
                }
            })
        },
        491232: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                isPremiumCollectiblesCategory: function() {
                    return T
                },
                isPremiumCollectiblesProduct: function() {
                    return E
                },
                isPremiumCollectiblesPurchase: function() {
                    return _
                },
                getFormattedPriceForCollectiblesProduct: function() {
                    return d
                },
                extractPriceByPurchaseTypes: function() {
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
                    return N
                },
                getProfileEffectsFromPurchases: function() {
                    return O
                },
                getProfileEffectsFromCategories: function() {
                    return R
                },
                groupProfileEffects: function() {
                    return g
                },
                isCollectiblesGiftCode: function() {
                    return P
                },
                sortProfileEffectsByPopularity: function() {
                    return p
                },
                sortAvatarDecorationsByPopularity: function() {
                    return y
                }
            }), r("222007"), r("808653");
            var n = r("917351"),
                o = r("635058"),
                i = r("265586"),
                u = r("407063"),
                l = r("153160"),
                a = r("730297"),
                c = r("806410"),
                s = r("49111");
            let T = t => (null == t ? void 0 : t.skuId) === o.CollectiblesCategorySkuId.DISXCORE,
                E = t => (null == t ? void 0 : t.categorySkuId) === o.CollectiblesCategorySkuId.DISXCORE,
                _ = t => (null == t ? void 0 : t.purchaseType) === s.EntitlementTypes.PREMIUM_PURCHASE,
                d = (t, e) => {
                    let r = S(t, e ? s.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : s.PriceSetAssignmentPurchaseTypes.DEFAULT);
                    return null == r ? "" : (0, l.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
                },
                S = (t, e) => {
                    var r, n, o;
                    let i = null !== (o = t.prices[e]) && void 0 !== o ? o : null;
                    return null == i ? null : null === (n = i.countryPrices) || void 0 === n ? void 0 : null === (r = n.prices) || void 0 === r ? void 0 : r[0]
                },
                C = t => {
                    let e = (0, n.flatMap)([...t.values()], "products");
                    return (0, n.uniqBy)(e, "storeListingId")
                },
                I = (t, e) => {
                    if (e === i.CollectiblesItemType.AVATAR_DECORATION) {
                        let e = (0, n.flatMap)([...t.values()], "items").filter(a.isAvatarDecorationRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                    if (e === i.CollectiblesItemType.PROFILE_EFFECT) {
                        let e = (0, n.flatMap)([...t.values()], "items").filter(c.isProfileEffectRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                },
                A = (t, e) => {
                    let r = C(t);
                    if (e === i.CollectiblesItemType.AVATAR_DECORATION) {
                        let t = (0, n.flatMap)(r, "items").filter(a.isAvatarDecorationRecord);
                        return (0, n.uniqBy)(t, "id")
                    }
                    if (e === i.CollectiblesItemType.PROFILE_EFFECT) {
                        let t = (0, n.flatMap)(r, "items").filter(c.isProfileEffectRecord);
                        return (0, n.uniqBy)(t, "id")
                    }
                },
                f = t => I(t, i.CollectiblesItemType.AVATAR_DECORATION),
                v = t => A(t, i.CollectiblesItemType.AVATAR_DECORATION),
                N = (t, e) => {
                    var r;
                    let {
                        CDN_HOST: n,
                        API_ENDPOINT: o
                    } = window.GLOBAL_ENV, i = (0, u.getBestMediaProxySize)(e.size * (0, u.getDevicePixelRatio)()), l = null !== (r = null == e ? void 0 : e.format) && void 0 !== r ? r : "png";
                    if (null != n) return "".concat(location.protocol, "//").concat(n, "/app-assets/").concat(s.COLLECTIBLES_APPLICATION_ID, "/").concat(t, ".").concat(l, "?size=").concat(i);
                    let a = s.Endpoints.APPLICATION_ASSET(s.COLLECTIBLES_APPLICATION_ID, t, l);
                    return "".concat(location.protocol).concat(o).concat(a, "?size=").concat(i)
                },
                O = t => I(t, i.CollectiblesItemType.PROFILE_EFFECT),
                R = t => A(t, i.CollectiblesItemType.PROFILE_EFFECT),
                g = (t, e) => {
                    let r = O(e),
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
                P = t => t.applicationId === s.COLLECTIBLES_APPLICATION_ID,
                U = (t, e, r) => (t[e] = r, t),
                m = t => (e, r) => {
                    var n, o;
                    let i = null !== (n = t[e.skuId]) && void 0 !== n ? n : Number.MAX_VALUE,
                        u = null !== (o = t[r.skuId]) && void 0 !== o ? o : Number.MAX_VALUE;
                    return i - u
                },
                L = ["1146328960951668776", "1146328961417224193", "1139323093991575696", "1139323099687436419", "1139323092645183591", "1139323093551165533", "1139323101881061466", "1139323100568244355", "1139323101008642101", "1139323099251232828", "1139323095744790568", "1139323096180994169"].reduce(U, {}),
                F = ["1174460780842856588", "1174459546748600481", "1174459480348565554", "1174459415924064376", "1154896005045694555", "1144307957425778779", "1144308439720394944", "1144307629225672846", "1144308196723408958", "1144046002110738634", "1144305233707671573", "1144307257807491094", "1144056139584127058", "1144006094134456352", "1144057023726628945", "1144003752978829455", "1144056631374647458", "1144057486203158560", "1144048390594908212", "1144048977138946230", "1144057737475534889", "1144049603109470370", "1144057249392771145", "1144049316009353338", "1144049924397334651"].reduce(U, {}),
                p = t => t.sort(m(L)),
                y = t => t.sort(m(F))
        },
        170313: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return E
                }
            }), r("794252");
            var n = r("884691"),
                o = r("506838"),
                i = r("265586"),
                u = r("65597"),
                l = r("599110"),
                a = r("853987"),
                c = r("491232"),
                s = r("49111"),
                T = r("646718"),
                E = t => {
                    let e = (0, u.default)([a.default], () => a.default.products);
                    return (0, n.useCallback)(r => {
                        let {
                            type: n,
                            skuId: u
                        } = r, a = e.get(u);
                        l.default.track(s.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                            feature_name: (0, o.match)(n).with(i.CollectiblesItemType.AVATAR_DECORATION, () => T.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).with(i.CollectiblesItemType.PROFILE_EFFECT, () => T.AnalyticsPremiumFeatureNames.PROFILE_EFFECT).otherwise(() => void 0),
                            feature_tier: (0, c.isPremiumCollectiblesProduct)(a) ? T.AnalyticsPremiumFeatureTiers.FREE : T.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
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
            var n, o = r("265586"),
                i = r("200410");
            let u = t => t instanceof n;
            n = class t extends i.default {
                static fromServer(e) {
                    return new t({
                        ...super.fromServer(e),
                        ...e
                    })
                }
                constructor(t) {
                    super(t), this.type = o.CollectiblesItemType.AVATAR_DECORATION, this.asset = t.asset, this.label = t.label
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
            var n, o = r("666038");
            n = class t extends o.default {
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
            var n, o = r("265586"),
                i = r("200410");
            let u = t => t instanceof n;
            n = class t extends i.default {
                static fromServer(e) {
                    return new t({
                        ...super.fromServer(e),
                        ...e
                    })
                }
                constructor(t) {
                    super(t), this.type = o.CollectiblesItemType.PROFILE_EFFECT
                }
            }
        },
        91653: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return s
                }
            });
            var n = r("884691"),
                o = r("65597"),
                i = r("170313"),
                u = r("906932"),
                l = r("790618"),
                a = r("697218"),
                c = r("783142"),
                s = t => {
                    let {
                        isTryItOut: e,
                        analyticsLocations: r
                    } = t, s = (0, o.default)([a.default], () => a.default.getCurrentUser()), T = (0, i.default)(r), {
                        pendingAvatar: E,
                        pendingAvatarDecoration: _
                    } = (0, o.useStateFromStoresObject)([l.default], () => ({
                        pendingAvatar: e ? l.default.getTryItOutAvatar() : l.default.getPendingAvatar(),
                        pendingAvatarDecoration: e ? l.default.getTryItOutAvatarDecoration() : l.default.getPendingAvatarDecoration()
                    })), d = (0, n.useCallback)(t => (0, u.setNewPendingAvatar)(t, null == s ? void 0 : s.avatar), [null == s ? void 0 : s.avatar]), S = (0, n.useCallback)(t => {
                        (0, u.setNewPendingAvatarDecoration)(t, null == s ? void 0 : s.avatarDecoration), null != t && T(t)
                    }, [null == s ? void 0 : s.avatarDecoration, T]);
                    return {
                        pendingAvatar: E,
                        pendingAvatarDecoration: _,
                        setPendingAvatar: e ? c.setTryItOutAvatar : d,
                        setPendingAvatarDecoration: e ? c.setTryItOutAvatarDecoration : S
                    }
                }
        },
        790618: function(t, e, r) {
            "use strict";
            let n, o, i, u, l, a, c, s, T, E, _, d, S, C;
            r.r(e), r.d(e, {
                default: function() {
                    return y
                }
            });
            var I = r("265586"),
                A = r("446674"),
                f = r("913144"),
                v = r("49111");
            let N = v.FormStates.CLOSED,
                O = {},
                R = !1;

            function g() {
                N = v.FormStates.OPEN, O = {}
            }

            function P() {
                N = v.FormStates.CLOSED, O = {}
            }

            function U() {
                m(), L(), O = {}
            }

            function m() {
                n = void 0, o = void 0, i = void 0, u = void 0
            }

            function L() {
                l = void 0, a = void 0, c = void 0, s = void 0, T = void 0, u = void 0
            }

            function F() {
                _ = void 0, d = void 0, S = void 0, C = void 0, E = void 0
            }
            class p extends A.default.Store {
                getFormState() {
                    return N
                }
                getErrors() {
                    return O
                }
                showNotice() {
                    return void 0 !== n || void 0 !== l || void 0 !== a || void 0 !== c || void 0 !== s || void 0 !== T || void 0 !== i || void 0 !== u || void 0 !== o
                }
                getPendingAvatar() {
                    return n
                }
                getPendingGlobalName() {
                    return o
                }
                getPendingBanner() {
                    return l
                }
                getPendingBio() {
                    return a
                }
                getPendingPronouns() {
                    return c
                }
                getPendingAccentColor() {
                    return s
                }
                getPendingThemeColors() {
                    return T
                }
                getPendingAvatarDecoration() {
                    return i
                }
                getPendingProfileEffectId() {
                    return u
                }
                getAllPending() {
                    return {
                        pendingAvatar: n,
                        pendingBanner: l,
                        pendingBio: a,
                        pendingPronouns: c,
                        pendingAccentColor: s,
                        pendingThemeColors: T,
                        pendingAvatarDecoration: i,
                        pendingProfileEffectId: u,
                        pendingGlobalName: o
                    }
                }
                getTryItOutThemeColors() {
                    return E
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
                        tryItOutThemeColors: E,
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
            p.displayName = "UserSettingsAccountStore";
            var y = new p(f.default, {
                USER_SETTINGS_ACCOUNT_INIT: g,
                USER_SETTINGS_MODAL_INIT: g,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: g,
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    let {
                        section: e
                    } = t;
                    return e === v.UserSettingsSections.ACCOUNT && g()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: P,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    U(), F(), P()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    N = v.FormStates.SUBMITTING, O = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (N !== v.FormStates.SUBMITTING) return !1;
                    N = v.FormStates.OPEN, O = null !== (e = t.errors) && void 0 !== e ? e : {}
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
                    o = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(t) {
                    let {
                        avatarDecoration: e
                    } = t;
                    i = e
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
                    c = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(t) {
                    let {
                        color: e
                    } = t;
                    s = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    T = e
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
                    E = e
                },
                USER_SETTINGS_CLEAR_ERRORS: function() {
                    O = {}
                },
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: m,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: L,
                USER_SETTINGS_RESET_ALL_PENDING: U,
                USER_SETTINGS_RESET_ALL_TRY_IT_OUT: F,
                USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
                    i = void 0
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
            var n, o;
            r.r(e), r.d(e, {
                CollectiblesCategorySkuId: function() {
                    return n
                },
                CollectiblesCategorySkuIdSets: function() {
                    return i
                }
            }), r("222007"), (o = n || (n = {})).FANTASY = "1144003461608906824", o.ANIME = "1144302037593497701", o.BREAKFAST = "1144054000099012659", o.DISXCORE = "1144058340327047249", o.HALLOWEEN = "1157410718711304313", o.FALL = "1157406994873991284", o.WINTER = "1174459301239197856", o.MONSTERS = "1179493515038818325";
            let i = {
                ALL: new Set(["1144003461608906824", "1144054000099012659", "1144058340327047249", "1144302037593497701", "1157406994873991284", "1157410718711304313", "1174459301239197856", "1179493515038818325"])
            }
        },
        265586: function(t, e, r) {
            "use strict";
            var n, o;
            r.r(e), r.d(e, {
                CollectiblesItemType: function() {
                    return n
                }
            }), (o = n || (n = {}))[o.AVATAR_DECORATION = 0] = "AVATAR_DECORATION", o[o.PROFILE_EFFECT = 1] = "PROFILE_EFFECT"
        }
    }
]);
//# sourceMappingURL=43870.67e1e225422b9fbefc58.js.map