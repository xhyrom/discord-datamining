(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43870"], {
        688318: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            }), r("222007");
            var a = r("884691"),
                l = r("446674"),
                n = r("206230"),
                i = r("91653"),
                u = r("26989"),
                o = r("697218"),
                s = r("471671"),
                c = r("315102"),
                d = r("53708"),
                f = e => {
                    var t;
                    let {
                        user: r,
                        guildId: f,
                        size: v,
                        animateOnHover: C = !1,
                        showPending: E = !1,
                        showTryItOut: A = !1,
                        avatarDecorationOverride: T
                    } = e, [g, m] = a.useState(!1), I = (0, l.useStateFromStores)([n.default], () => n.default.useReducedMotion), P = (0, l.useStateFromStores)([s.default], () => s.default.isFocused()), p = (0, l.useStateFromStores)([u.default], () => null != f && null != r ? u.default.getMember(f, r.id) : null), [F, _] = (0, l.useStateFromStoresArray)([o.default], () => {
                        var e;
                        return [null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, o.default.getUser(null == r ? void 0 : r.id)]
                    }), O = null == p ? null == _ ? void 0 : _.avatarDecoration : null === p.avatarDecoration ? null : null !== (t = p.avatarDecoration) && void 0 !== t ? t : null == _ ? void 0 : _.avatarDecoration, {
                        pendingAvatarDecoration: y
                    } = (0, i.default)({
                        isTryItOut: A,
                        guildId: f
                    }), L = P && (g || !I && !C), R = E && void 0 !== y && void 0 !== F && F === (null == r ? void 0 : r.id), S = null != f && null === y, D = R ? S ? null == r ? void 0 : r.avatarDecoration : null != y ? y : O : null != O ? O : null == r ? void 0 : r.avatarDecoration, b = a.useMemo(() => (0, c.getAvatarDecorationURL)({
                        avatarDecoration: void 0 !== T ? T : D,
                        canAnimate: L,
                        size: v
                    }), [D, L, v, T]), h = a.useCallback(() => m(!0), []), M = a.useCallback(() => m(!1), []);
                    return {
                        avatarPlaceholderSrc: d,
                        avatarDecorationSrc: b,
                        isAvatarDecorationAnimating: L,
                        eventHandlers: {
                            onMouseEnter: h,
                            onMouseLeave: M
                        }
                    }
                }
        },
        853987: function(e, t, r) {
            "use strict";
            let a, l;
            r.r(t), r.d(t, {
                default: function() {
                    return T
                }
            }), r("222007");
            var n = r("917351"),
                i = r("446674"),
                u = r("913144"),
                o = r("915639"),
                s = r("491232");
            let c = new Map,
                d = new Map,
                f = c,
                v = d,
                C = !1;
            let E = () => {
                f = c, v = d, l = void 0, C = !1, a = void 0
            };
            class A extends i.default.Store {
                initialize() {
                    this.syncWith([o.default], E)
                }
                get isFetching() {
                    return C
                }
                get error() {
                    return a
                }
                get lastFetched() {
                    return l
                }
                get categories() {
                    return f
                }
                get products() {
                    return v
                }
                getCategory(e) {
                    return null != e ? f.get(e) : void 0
                }
                getProduct(e) {
                    return null != e ? v.get(e) : void 0
                }
                getCategoryForProduct(e) {
                    let t = this.getProduct(e);
                    return this.getCategory(null == t ? void 0 : t.categorySkuId)
                }
            }
            A.displayName = "CollectiblesCategoryStore";
            var T = new A(u.default, {
                COLLECTIBLES_CATEGORIES_FETCH: e => {
                    C = !0, a = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
                    0 === e.categories.length ? (f = c, v = d) : !(0, n.isEqual)([...f.values()], e.categories) && (f = new Map(e.categories.map(e => [e.skuId, e])), v = new Map((0, s.getProductsFromCategories)(f).map(e => [e.skuId, e]))), l = Date.now(), C = !1, a = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    f = c, v = d, C = !1, a = t
                },
                COLLECTIBLES_PRODUCT_FETCH: e => {
                    C = !0, a = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
                    v.set(e.product.skuId, e.product), C = !1, a = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    C = !1, a = t
                },
                LOGOUT: E
            })
        },
        491232: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isPremiumCollectiblesProduct: function() {
                    return c
                },
                isPremiumCollectiblesPurchase: function() {
                    return d
                },
                getFormattedPriceForCollectiblesProduct: function() {
                    return f
                },
                extractPriceByPurchaseTypes: function() {
                    return v
                },
                isFreeCollectiblesProduct: function() {
                    return C
                },
                getProductsFromCategories: function() {
                    return E
                },
                getAvatarDecorations: function() {
                    return I
                },
                getCollectiblesAssetURL: function() {
                    return P
                },
                getProfileEffectsFromPurchases: function() {
                    return p
                },
                getProfileEffectsFromCategories: function() {
                    return F
                },
                groupProfileEffects: function() {
                    return _
                },
                isCollectiblesGiftCode: function() {
                    return O
                },
                getLogoSize: function() {
                    return y
                }
            }), r("222007");
            var a = r("917351"),
                l = r("265586"),
                n = r("407063"),
                i = r("153160"),
                u = r("730297"),
                o = r("806410"),
                s = r("49111");
            let c = e => (null == e ? void 0 : e.premiumType) != null,
                d = e => (null == e ? void 0 : e.purchaseType) === s.EntitlementTypes.PREMIUM_PURCHASE,
                f = (e, t) => {
                    let r = v(e, t ? s.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : s.PriceSetAssignmentPurchaseTypes.DEFAULT);
                    return null == r ? "" : (0, i.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
                },
                v = (e, t) => {
                    var r, a, l;
                    let n = null !== (l = e.prices[t]) && void 0 !== l ? l : null;
                    return null == n ? null : null === (a = n.countryPrices) || void 0 === a ? void 0 : null === (r = a.prices) || void 0 === r ? void 0 : r[0]
                },
                C = e => {
                    var t;
                    return (null === (t = v(e, s.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0
                },
                E = e => {
                    let t = (0, a.flatMap)([...e.values()], "products");
                    return (0, a.uniqBy)(t, "storeListingId")
                },
                A = (e, t) => {
                    if (t === l.CollectiblesItemType.AVATAR_DECORATION) {
                        let t = (0, a.flatMap)([...e.values()], "items").filter(u.isAvatarDecorationRecord);
                        return (0, a.uniqBy)(t, "id")
                    }
                    if (t === l.CollectiblesItemType.PROFILE_EFFECT) {
                        let t = (0, a.flatMap)([...e.values()], "items").filter(o.isProfileEffectRecord);
                        return (0, a.uniqBy)(t, "id")
                    }
                },
                T = (e, t) => {
                    let r = E(e);
                    if (t === l.CollectiblesItemType.AVATAR_DECORATION) {
                        let e = (0, a.flatMap)(r, "items").filter(u.isAvatarDecorationRecord);
                        return (0, a.uniqBy)(e, "id")
                    }
                    if (t === l.CollectiblesItemType.PROFILE_EFFECT) {
                        let e = (0, a.flatMap)(r, "items").filter(o.isProfileEffectRecord);
                        return (0, a.uniqBy)(e, "id")
                    }
                },
                g = e => A(e, l.CollectiblesItemType.AVATAR_DECORATION),
                m = e => T(e, l.CollectiblesItemType.AVATAR_DECORATION),
                I = (e, t) => (0, a.uniqBy)([...g(e), ...m(t)], "id"),
                P = (e, t) => {
                    var r;
                    let {
                        CDN_HOST: a,
                        API_ENDPOINT: l
                    } = window.GLOBAL_ENV, i = (0, n.getBestMediaProxySize)(t.size * (0, n.getDevicePixelRatio)()), u = null !== (r = null == t ? void 0 : t.format) && void 0 !== r ? r : "png";
                    if (null != a) return "".concat(location.protocol, "//").concat(a, "/app-assets/").concat(s.COLLECTIBLES_APPLICATION_ID, "/").concat(e, ".").concat(u, "?size=").concat(i);
                    let o = s.Endpoints.APPLICATION_ASSET(s.COLLECTIBLES_APPLICATION_ID, e, u);
                    return "".concat(location.protocol).concat(l).concat(o, "?size=").concat(i)
                },
                p = e => A(e, l.CollectiblesItemType.PROFILE_EFFECT),
                F = e => T(e, l.CollectiblesItemType.PROFILE_EFFECT),
                _ = (e, t) => {
                    let r = p(t),
                        a = F(e).filter(e => {
                            let {
                                id: t
                            } = e;
                            return !r.some(e => e.id === t)
                        });
                    return {
                        purchased: r,
                        shopPreviews: a
                    }
                },
                O = e => e.applicationId === s.COLLECTIBLES_APPLICATION_ID,
                y = e => 3.8 * e
        },
        170313: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            }), r("794252");
            var a = r("884691"),
                l = r("506838"),
                n = r("265586"),
                i = r("65597"),
                u = r("599110"),
                o = r("853987"),
                s = r("491232"),
                c = r("49111"),
                d = r("646718"),
                f = e => {
                    let t = (0, i.default)([o.default], () => o.default.products);
                    return (0, a.useCallback)(r => {
                        let {
                            type: a,
                            skuId: i
                        } = r, o = t.get(i);
                        u.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                            feature_name: (0, l.match)(a).with(n.CollectiblesItemType.AVATAR_DECORATION, () => d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).with(n.CollectiblesItemType.PROFILE_EFFECT, () => d.AnalyticsPremiumFeatureNames.PROFILE_EFFECT).otherwise(() => void 0),
                            feature_tier: (0, s.isPremiumCollectiblesProduct)(o) ? d.AnalyticsPremiumFeatureTiers.FREE : d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                            feature_selection: null == o ? void 0 : o.name,
                            location_stack: e
                        })
                    }, [t, e])
                }
        },
        730297: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isAvatarDecorationRecord: function() {
                    return i
                },
                default: function() {
                    return a
                }
            });
            var a, l = r("265586"),
                n = r("200410");
            let i = e => e instanceof a;
            a = class e extends n.default {
                static fromServer(t) {
                    return new e({
                        ...super.fromServer(t),
                        ...t
                    })
                }
                constructor(e) {
                    super(e), this.type = l.CollectiblesItemType.AVATAR_DECORATION, this.asset = e.asset, this.label = e.label
                }
            }
        },
        200410: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a, l = r("666038");
            a = class e extends l.default {
                static fromServer(t) {
                    let {
                        sku_id: r,
                        ...a
                    } = t;
                    return new e({
                        ...a,
                        skuId: r
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.skuId = e.skuId
                }
            }
        },
        806410: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isProfileEffectRecord: function() {
                    return i
                },
                default: function() {
                    return a
                }
            });
            var a, l = r("265586"),
                n = r("200410");
            let i = e => e instanceof a;
            a = class e extends n.default {
                static fromServer(t) {
                    return new e({
                        ...super.fromServer(t),
                        ...t
                    })
                }
                constructor(e) {
                    super(e), this.type = l.CollectiblesItemType.PROFILE_EFFECT
                }
            }
        },
        91653: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var a = r("884691"),
                l = r("65597"),
                n = r("170313"),
                i = r("424562"),
                u = r("906932"),
                o = r("26989"),
                s = r("790618"),
                c = r("697218"),
                d = r("783142"),
                f = e => {
                    let {
                        isTryItOut: t,
                        analyticsLocations: r,
                        guildId: f
                    } = e, v = (0, l.default)([c.default], () => c.default.getCurrentUser()), C = (0, l.default)([o.default], () => null != f && null != v ? o.default.getMember(f, v.id) : null), E = null != C ? C.avatarDecoration : null == v ? void 0 : v.avatarDecoration, A = (0, n.default)(r), {
                        pendingAvatar: T,
                        pendingAvatarDecoration: g,
                        pendingErrors: m
                    } = (0, l.useStateFromStoresObject)([s.default, i.default], () => ({
                        pendingAvatar: t ? s.default.getTryItOutAvatar() : null != f ? i.default.getPendingAvatar() : s.default.getPendingAvatar(),
                        pendingAvatarDecoration: t ? s.default.getTryItOutAvatarDecoration() : null != f ? i.default.getPendingAvatarDecoration() : s.default.getPendingAvatarDecoration(),
                        pendingErrors: null != f ? i.default.getErrors().avatarDecoration : s.default.getErrors().avatarDecoration
                    })), I = (0, a.useCallback)(e => (0, u.setNewPendingAvatar)(e, null == v ? void 0 : v.avatar), [null == v ? void 0 : v.avatar]), P = (0, a.useCallback)(e => {
                        (0, u.setNewPendingAvatarDecoration)(f, e), null != e && A(e)
                    }, [A, f]);
                    return {
                        pendingAvatar: T,
                        pendingAvatarDecoration: g,
                        setPendingAvatar: t ? d.setTryItOutAvatar : I,
                        setPendingAvatarDecoration: t ? d.setTryItOutAvatarDecoration : P,
                        savedAvatarDecoration: E,
                        pendingErrors: m
                    }
                }
        }
    }
]);
//# sourceMappingURL=43870.4a63d430baa0c834c3f9.js.map