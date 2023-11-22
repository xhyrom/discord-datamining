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
                    return s
                }
            }), r("222007");
            var n = r("884691"),
                o = r("446674"),
                i = r("206230"),
                u = r("91653"),
                a = r("471671"),
                l = r("315102"),
                c = r("53708"),
                s = t => {
                    let {
                        user: e,
                        size: r,
                        animateOnHover: s = !1,
                        showPending: T = !1,
                        showTryItOut: E = !1,
                        avatarDecorationOverride: _
                    } = t, [d, S] = n.useState(!1), C = (0, o.useStateFromStores)([i.default], () => i.default.useReducedMotion), I = (0, o.useStateFromStores)([a.default], () => a.default.isFocused()), {
                        pendingAvatarDecoration: A
                    } = (0, u.default)({
                        isTryItOut: E
                    }), f = I && (d || !C && !s), N = T && void 0 !== A ? A : null == e ? void 0 : e.avatarDecoration, O = n.useMemo(() => (0, l.getAvatarDecorationURL)({
                        avatarDecoration: void 0 !== _ ? _ : N,
                        canAnimate: f,
                        size: r
                    }), [N, f, r, _]), v = n.useCallback(() => S(!0), []), R = n.useCallback(() => S(!1), []);
                    return {
                        avatarPlaceholderSrc: c,
                        avatarDecorationSrc: O,
                        isAvatarDecorationAnimating: f,
                        eventHandlers: {
                            onMouseEnter: v,
                            onMouseLeave: R
                        }
                    }
                }
        },
        853987: function(t, e, r) {
            "use strict";
            let n, o;
            r.r(e), r.d(e, {
                default: function() {
                    return N
                }
            }), r("222007"), r("808653"), r("424973");
            var i = r("917351"),
                u = r("635058"),
                a = r("446674"),
                l = r("913144"),
                c = r("491232");
            let s = new Map,
                T = new Map,
                E = {},
                _ = new Map,
                d = s,
                S = T,
                C = E,
                I = _,
                A = !1;
            class f extends a.default.Store {
                get isFetching() {
                    return A
                }
                get error() {
                    return n
                }
                get lastFetched() {
                    return o
                }
                get categories() {
                    return d
                }
                get products() {
                    return S
                }
                get categorySkuIdsByProductSkuId() {
                    return C
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
                    return null != t ? this.getCategory(C[t]) : void 0
                }
                getProductsByItemType(t) {
                    return null != t && u.CollectiblesCategorySkuIdSets.ALL.has(t) ? I.get(t) : void 0
                }
            }
            f.displayName = "CollectiblesCategoryStore";
            var N = new f(l.default, {
                COLLECTIBLES_CATEGORIES_FETCH: t => {
                    A = !0, n = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: t => {
                    0 === t.categories.length ? (d = s, S = T, C = E, I = _) : !(0, i.isEqual)([...d.values()], t.categories) && (d = new Map(t.categories.map(t => [t.skuId, t])), S = new Map((0, c.getProductsFromCategories)(d).map(t => [t.skuId, t])), C = t.categories.reduce((t, e) => (e.products.forEach(r => {
                        t[r.skuId] = e.skuId
                    }), t), {}), t.categories.forEach(t => {
                        let e = t.products.reduce((t, e) => {
                            if (e.items.length > 0) {
                                var r;
                                let n = e.items[0].type;
                                t[n] = null !== (r = t[n]) && void 0 !== r ? r : [], t[n].push(e)
                            }
                            return t
                        }, {});
                        I.set(t.skuId, e)
                    })), o = Date.now(), A = !1, n = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_FAILURE: t => {
                    let {
                        error: e
                    } = t;
                    d = s, S = T, C = E, I = _, A = !1, n = e
                },
                COLLECTIBLES_PRODUCT_FETCH: t => {
                    A = !0, n = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_SUCCESS: t => {
                    S.set(t.product.skuId, t.product), A = !1, n = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_FAILURE: t => {
                    let {
                        error: e
                    } = t;
                    A = !1, n = e
                },
                LOGOUT: t => {
                    d = s, S = T, C = E, I = _, o = void 0, A = !1, n = void 0
                }
            })
        },
        491232: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                isPremiumCollectiblesCategory: function() {
                    return T
                },
                isPremiumCollectiblesPurchase: function() {
                    return E
                },
                getFormattedPriceForCollectiblesProduct: function() {
                    return _
                },
                extractPriceByPurchaseTypes: function() {
                    return d
                },
                getProductsFromCategories: function() {
                    return S
                },
                getAvatarDecorationsFromPurchases: function() {
                    return A
                },
                getAvatarDecorationsFromCategories: function() {
                    return f
                },
                getCollectiblesAssetURL: function() {
                    return N
                },
                getProfileEffectsFromPurchases: function() {
                    return O
                },
                getProfileEffectsFromCategories: function() {
                    return v
                },
                groupProfileEffects: function() {
                    return R
                },
                sortProfileEffectsByPopularity: function() {
                    return L
                },
                sortAvatarDecorationsByPopularity: function() {
                    return p
                }
            }), r("222007"), r("808653");
            var n = r("917351"),
                o = r("635058"),
                i = r("265586"),
                u = r("407063"),
                a = r("153160"),
                l = r("730297"),
                c = r("806410"),
                s = r("49111");
            let T = t => (null == t ? void 0 : t.skuId) === o.CollectiblesCategorySkuId.DISXCORE,
                E = t => (null == t ? void 0 : t.purchaseType) === s.EntitlementTypes.PREMIUM_PURCHASE,
                _ = (t, e) => {
                    let r = d(t, e ? s.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : s.PriceSetAssignmentPurchaseTypes.DEFAULT);
                    return null == r ? "" : (0, a.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
                },
                d = (t, e) => {
                    var r, n, o;
                    let i = null !== (o = t.prices[e]) && void 0 !== o ? o : null;
                    return null == i ? null : null === (n = i.countryPrices) || void 0 === n ? void 0 : null === (r = n.prices) || void 0 === r ? void 0 : r[0]
                },
                S = t => {
                    let e = (0, n.flatMap)([...t.values()], "products");
                    return (0, n.uniqBy)(e, "storeListingId")
                },
                C = (t, e) => {
                    if (e === i.CollectiblesItemType.AVATAR_DECORATION) {
                        let e = (0, n.flatMap)([...t.values()], "items").filter(l.isAvatarDecorationRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                    if (e === i.CollectiblesItemType.PROFILE_EFFECT) {
                        let e = (0, n.flatMap)([...t.values()], "items").filter(c.isProfileEffectRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                },
                I = (t, e) => {
                    let r = S(t);
                    if (e === i.CollectiblesItemType.AVATAR_DECORATION) {
                        let t = (0, n.flatMap)(r, "items").filter(l.isAvatarDecorationRecord);
                        return (0, n.uniqBy)(t, "id")
                    }
                    if (e === i.CollectiblesItemType.PROFILE_EFFECT) {
                        let t = (0, n.flatMap)(r, "items").filter(c.isProfileEffectRecord);
                        return (0, n.uniqBy)(t, "id")
                    }
                },
                A = t => C(t, i.CollectiblesItemType.AVATAR_DECORATION),
                f = t => I(t, i.CollectiblesItemType.AVATAR_DECORATION),
                N = (t, e) => {
                    var r;
                    let {
                        CDN_HOST: n,
                        API_ENDPOINT: o
                    } = window.GLOBAL_ENV, i = (0, u.getBestMediaProxySize)(e.size * (0, u.getDevicePixelRatio)()), a = null !== (r = null == e ? void 0 : e.format) && void 0 !== r ? r : "png";
                    if (null != n) return "".concat(location.protocol, "//").concat(n, "/app-assets/").concat(s.COLLECTIBLES_APPLICATION_ID, "/").concat(t, ".").concat(a, "?size=").concat(i);
                    let l = s.Endpoints.APPLICATION_ASSET(s.COLLECTIBLES_APPLICATION_ID, t, a);
                    return "".concat(location.protocol).concat(o).concat(l, "?size=").concat(i)
                },
                O = t => C(t, i.CollectiblesItemType.PROFILE_EFFECT),
                v = t => I(t, i.CollectiblesItemType.PROFILE_EFFECT),
                R = (t, e) => {
                    let r = O(e),
                        n = v(t).filter(t => {
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
                g = (t, e, r) => (t[e] = r, t),
                P = t => (e, r) => {
                    var n, o;
                    let i = null !== (n = t[e.skuId]) && void 0 !== n ? n : Number.MAX_VALUE,
                        u = null !== (o = t[r.skuId]) && void 0 !== o ? o : Number.MAX_VALUE;
                    return i - u
                },
                U = ["1146328960951668776", "1146328961417224193", "1139323093991575696", "1139323099687436419", "1139323092645183591", "1139323093551165533", "1139323101881061466", "1139323100568244355", "1139323101008642101", "1139323099251232828", "1139323095744790568", "1139323096180994169"].reduce(g, {}),
                m = ["1174460780842856588", "1174459546748600481", "1174459480348565554", "1174459415924064376", "1154896005045694555", "1144307957425778779", "1144308439720394944", "1144307629225672846", "1144308196723408958", "1144046002110738634", "1144305233707671573", "1144307257807491094", "1144056139584127058", "1144006094134456352", "1144057023726628945", "1144003752978829455", "1144056631374647458", "1144057486203158560", "1144048390594908212", "1144048977138946230", "1144057737475534889", "1144049603109470370", "1144057249392771145", "1144049316009353338", "1144049924397334651"].reduce(g, {}),
                L = t => t.sort(P(U)),
                p = t => t.sort(P(m))
        },
        170313: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return E
                }
            }), r("222007"), r("794252");
            var n = r("884691"),
                o = r("506838"),
                i = r("265586"),
                u = r("65597"),
                a = r("599110"),
                l = r("853987"),
                c = r("491232"),
                s = r("49111"),
                T = r("646718"),
                E = t => {
                    let [e, r, E] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.categories, l.default.products, l.default.categorySkuIdsByProductSkuId]);
                    return (0, n.useCallback)(n => {
                        let {
                            type: u,
                            skuId: l
                        } = n, _ = e.get(E[l]), d = r.get(l);
                        a.default.track(s.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                            feature_name: (0, o.match)(u).with(i.CollectiblesItemType.AVATAR_DECORATION, () => T.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).otherwise(() => void 0),
                            feature_tier: (0, c.isPremiumCollectiblesCategory)(_) ? T.AnalyticsPremiumFeatureTiers.FREE : T.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                            feature_selection: null == d ? void 0 : d.name,
                            location_stack: t
                        })
                    }, [e, r, E, t])
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
                a = r("790618"),
                l = r("697218"),
                c = r("783142"),
                s = t => {
                    let {
                        isTryItOut: e,
                        analyticsLocations: r
                    } = t, s = (0, o.default)([l.default], () => l.default.getCurrentUser()), T = (0, i.default)(r), {
                        pendingAvatar: E,
                        pendingAvatarDecoration: _
                    } = (0, o.useStateFromStoresObject)([a.default], () => ({
                        pendingAvatar: e ? a.default.getTryItOutAvatar() : a.default.getPendingAvatar(),
                        pendingAvatarDecoration: e ? a.default.getTryItOutAvatarDecoration() : a.default.getPendingAvatarDecoration()
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
            let n, o, i, u, a, l, c, s, T, E, _, d, S, C;
            r.r(e), r.d(e, {
                default: function() {
                    return y
                }
            });
            var I = r("265586"),
                A = r("446674"),
                f = r("913144"),
                N = r("49111");
            let O = N.FormStates.CLOSED,
                v = {},
                R = !1;

            function g() {
                O = N.FormStates.OPEN, v = {}
            }

            function P() {
                O = N.FormStates.CLOSED, v = {}
            }

            function U() {
                m(), L(), v = {}
            }

            function m() {
                n = void 0, o = void 0, i = void 0, u = void 0
            }

            function L() {
                a = void 0, l = void 0, c = void 0, s = void 0, T = void 0, u = void 0
            }

            function p() {
                _ = void 0, d = void 0, S = void 0, C = void 0, E = void 0
            }
            class F extends A.default.Store {
                getFormState() {
                    return O
                }
                getErrors() {
                    return v
                }
                showNotice() {
                    return void 0 !== n || void 0 !== a || void 0 !== l || void 0 !== c || void 0 !== s || void 0 !== T || void 0 !== i || void 0 !== u || void 0 !== o
                }
                getPendingAvatar() {
                    return n
                }
                getPendingGlobalName() {
                    return o
                }
                getPendingBanner() {
                    return a
                }
                getPendingBio() {
                    return l
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
                getPendingProfileEffectID() {
                    return u
                }
                getAllPending() {
                    return {
                        pendingAvatar: n,
                        pendingBanner: a,
                        pendingBio: l,
                        pendingPronouns: c,
                        pendingAccentColor: s,
                        pendingThemeColors: T,
                        pendingAvatarDecoration: i,
                        pendingProfileEffectID: u,
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
                getTryItOutProfileEffectID() {
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
                        tryItOutProfileEffectID: S,
                        tryItOutBanner: C
                    }
                }
                getIsDisableSubmit() {
                    return R
                }
            }
            F.displayName = "UserSettingsAccountStore";
            var y = new F(f.default, {
                USER_SETTINGS_ACCOUNT_INIT: g,
                USER_SETTINGS_MODAL_INIT: g,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: g,
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    let {
                        section: e
                    } = t;
                    return e === N.UserSettingsSections.ACCOUNT && g()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: P,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    U(), p(), P()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    O = N.FormStates.SUBMITTING, v = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (O !== N.FormStates.SUBMITTING) return !1;
                    O = N.FormStates.OPEN, v = null !== (e = t.errors) && void 0 !== e ? e : {}
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
                        profileEffectID: e
                    } = t;
                    u = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    a = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    l = e
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
                        profileEffectID: e
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
                    v = {}
                },
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: m,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: L,
                USER_SETTINGS_RESET_ALL_PENDING: U,
                USER_SETTINGS_RESET_ALL_TRY_IT_OUT: p,
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
            }), r("222007"), (o = n || (n = {})).FANTASY = "1144003461608906824", o.ANIME = "1144302037593497701", o.BREAKFAST = "1144054000099012659", o.DISXCORE = "1144058340327047249", o.HALLOWEEN = "1157410718711304313", o.FALL = "1157406994873991284", o.WINTER = "1174459301239197856";
            let i = {
                ALL: new Set(["1144003461608906824", "1144054000099012659", "1144058340327047249", "1144302037593497701", "1157406994873991284", "1157410718711304313", "1174459301239197856"])
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
//# sourceMappingURL=0f8b5b22e3a34432cdbe.js.map