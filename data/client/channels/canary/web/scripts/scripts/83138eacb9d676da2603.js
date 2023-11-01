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
            });
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
                    } = t, [d, S] = n.useState(!1), I = (0, o.useStateFromStores)([i.default], () => i.default.useReducedMotion), C = (0, o.useStateFromStores)([a.default], () => a.default.isFocused()), {
                        pendingAvatarDecoration: f
                    } = (0, u.default)({
                        isTryItOut: E
                    }), A = C && (d || !I && !s), N = T && void 0 !== f ? f : null == e ? void 0 : e.avatarDecoration, v = n.useMemo(() => (0, l.getAvatarDecorationURL)({
                        avatarDecoration: void 0 !== _ ? _ : N,
                        canAnimate: A,
                        size: r
                    }), [N, A, r, _]), O = n.useCallback(() => S(!0), []), R = n.useCallback(() => S(!1), []);
                    return {
                        avatarPlaceholderSrc: c,
                        avatarDecorationSrc: v,
                        isAvatarDecorationAnimating: A,
                        eventHandlers: {
                            onMouseEnter: O,
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
            });
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
                I = E,
                C = _,
                f = !1;
            class A extends a.default.Store {
                get isFetching() {
                    return f
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
                    return I
                }
                get productsByItemTypeAndCategory() {
                    return C
                }
                getCategory(t) {
                    return null != t ? d.get(t) : void 0
                }
                getProduct(t) {
                    return null != t ? S.get(t) : void 0
                }
                getCategoryForProduct(t) {
                    return null != t ? this.getCategory(I[t]) : void 0
                }
                getProductsByItemType(t) {
                    return null != t && u.CollectiblesCategorySkuIdSets.ALL.has(t) ? C.get(t) : void 0
                }
            }
            A.displayName = "CollectiblesCategoryStore";
            var N = new A(l.default, {
                COLLECTIBLES_CATEGORIES_FETCH: t => {
                    f = !0, n = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: t => {
                    0 === t.categories.length ? (d = s, S = T, I = E, C = _) : !(0, i.isEqual)([...d.values()], t.categories) && (d = new Map(t.categories.map(t => [t.skuId, t])), S = new Map((0, c.getProductsFromCategories)(d).map(t => [t.skuId, t])), I = t.categories.reduce((t, e) => (e.products.forEach(r => {
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
                        C.set(t.skuId, e)
                    })), o = Date.now(), f = !1, n = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_FAILURE: t => {
                    let {
                        error: e
                    } = t;
                    d = s, S = T, I = E, C = _, f = !1, n = e
                },
                LOGOUT: t => {
                    d = s, S = T, I = E, C = _, o = void 0, f = !1, n = void 0
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
                getAvatarDecorationsFromCategories: function() {
                    return f
                },
                getCollectiblesAssetURL: function() {
                    return A
                },
                groupProfileEffects: function() {
                    return O
                }
            });
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
                I = (t, e) => {
                    if (e === i.CollectiblesItemType.AVATAR_DECORATION) {
                        let e = (0, n.flatMap)([...t.values()], "items").filter(l.isAvatarDecorationRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                    if (e === i.CollectiblesItemType.PROFILE_EFFECT) {
                        let e = (0, n.flatMap)([...t.values()], "items").filter(c.isProfileEffectRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                },
                C = (t, e) => {
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
                f = t => C(t, i.CollectiblesItemType.AVATAR_DECORATION),
                A = (t, e) => {
                    var r;
                    let {
                        CDN_HOST: n,
                        API_ENDPOINT: o
                    } = window.GLOBAL_ENV, i = (0, u.getBestMediaProxySize)(e.size * (0, u.getDevicePixelRatio)()), a = null !== (r = null == e ? void 0 : e.format) && void 0 !== r ? r : "png";
                    if (null != n) return "".concat(location.protocol, "//").concat(n, "/app-assets/").concat(s.COLLECTIBLES_APPLICATION_ID, "/").concat(t, ".").concat(a, "?size=").concat(i);
                    let l = s.Endpoints.APPLICATION_ASSET(s.COLLECTIBLES_APPLICATION_ID, t, a);
                    return "".concat(location.protocol).concat(o).concat(l, "?size=").concat(i)
                },
                N = t => I(t, i.CollectiblesItemType.PROFILE_EFFECT),
                v = t => C(t, i.CollectiblesItemType.PROFILE_EFFECT),
                O = (t, e) => {
                    let r = N(e),
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
                }
        },
        170313: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return E
                }
            });
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
                    return i
                },
                default: function() {
                    return u
                }
            });
            var n = r("265586"),
                o = r("200410");
            let i = t => t instanceof u;
            class u extends o.default {
                static fromServer(t) {
                    return new u({
                        ...super.fromServer(t),
                        ...t
                    })
                }
                constructor(t) {
                    super(t), this.type = n.CollectiblesItemType.AVATAR_DECORATION, this.asset = t.asset, this.label = t.label
                }
            }
        },
        200410: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return o
                }
            });
            var n = r("666038");
            class o extends n.default {
                static fromServer(t) {
                    let {
                        sku_id: e,
                        ...r
                    } = t;
                    return new o({
                        ...r,
                        skuId: e
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
                    return i
                },
                default: function() {
                    return u
                }
            });
            var n = r("265586"),
                o = r("200410");
            let i = t => t instanceof u;
            class u extends o.default {
                static fromServer(t) {
                    return new u({
                        ...super.fromServer(t),
                        ...t
                    })
                }
                constructor(t) {
                    super(t), this.type = n.CollectiblesItemType.PROFILE_EFFECT
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
            let n, o, i, u, a, l, c, s, T, E, _, d, S, I;
            r.r(e), r.d(e, {
                default: function() {
                    return D
                }
            });
            var C = r("446674"),
                f = r("913144"),
                A = r("49111");
            let N = A.FormStates.CLOSED,
                v = {},
                O = !1;

            function R() {
                N = A.FormStates.OPEN, v = {}
            }

            function g() {
                N = A.FormStates.CLOSED, v = {}
            }

            function P() {
                U(), m(), v = {}
            }

            function U() {
                n = void 0, o = void 0, i = void 0, u = void 0
            }

            function m() {
                a = void 0, l = void 0, c = void 0, s = void 0, T = void 0, u = void 0
            }

            function p() {
                _ = void 0, d = void 0, S = void 0, I = void 0, E = void 0
            }
            class y extends C.default.Store {
                getFormState() {
                    return N
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
                    return I
                }
                getAllTryItOut() {
                    return {
                        tryItOutThemeColors: E,
                        tryItOutAvatar: _,
                        tryItOutAvatarDecoration: d,
                        tryItOutProfileEffectID: S,
                        tryItOutBanner: I
                    }
                }
                getIsDisableSubmit() {
                    return O
                }
            }
            y.displayName = "UserSettingsAccountStore";
            var D = new y(f.default, {
                USER_SETTINGS_ACCOUNT_INIT: R,
                USER_SETTINGS_MODAL_INIT: R,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: R,
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    let {
                        section: e
                    } = t;
                    return e === A.UserSettingsSections.ACCOUNT && R()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: g,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    P(), p(), g()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    N = A.FormStates.SUBMITTING, v = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (N !== A.FormStates.SUBMITTING) return !1;
                    N = A.FormStates.OPEN, v = null !== (e = t.errors) && void 0 !== e ? e : {}
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
                    I = e
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
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: U,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: m,
                USER_SETTINGS_RESET_ALL_PENDING: P,
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
                    O = e
                }
            })
        }
    }
]);
//# sourceMappingURL=83138eacb9d676da2603.js.map