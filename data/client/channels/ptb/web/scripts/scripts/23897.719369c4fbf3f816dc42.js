(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["23897"], {
        606292: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getDecorationSizeForAvatarSize: function() {
                    return u
                },
                openAvatarDecorationModal: function() {
                    return s
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("77078"),
                i = r("393414");
            r("103603");
            var l = r("573135"),
                o = r("49111");

            function u(e) {
                return "number" != typeof e ? (0, n.getAvatarSize)(e) * l.DECORATION_TO_AVATAR_RATIO : e * l.DECORATION_TO_AVATAR_RATIO
            }
            let s = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedDecoration: l,
                    isTryItOutFlow: u,
                    guild: s
                } = e;
                (0, n.openModalLazy)(async () => {
                    (0, i.getHistory)().location.pathname === o.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, i.transitionTo)(o.Routes.APP);
                    let {
                        default: e
                    } = await r.el("791050").then(r.bind(r, "791050"));
                    return r => (0, a.jsx)(e, {
                        ...r,
                        analyticsLocations: t,
                        initialSelectedDecoration: l,
                        isTryItOutFlow: u,
                        guild: s
                    })
                }, {})
            }
        },
        688318: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            }), r("222007");
            var a = r("884691"),
                n = r("446674"),
                i = r("206230"),
                l = r("91653"),
                o = r("26989"),
                u = r("697218"),
                s = r("471671"),
                c = r("315102"),
                d = r("53708"),
                f = e => {
                    var t;
                    let {
                        user: r,
                        guildId: f,
                        size: v,
                        animateOnHover: A = !1,
                        showPending: C = !1,
                        showTryItOut: E = !1,
                        avatarDecorationOverride: T
                    } = e, [g, I] = a.useState(!1), m = (0, n.useStateFromStores)([i.default], () => i.default.useReducedMotion), P = (0, n.useStateFromStores)([s.default], () => s.default.isFocused()), p = (0, n.useStateFromStores)([o.default], () => null != f && null != r ? o.default.getMember(f, r.id) : null), [O, _] = (0, n.useStateFromStoresArray)([u.default], () => {
                        var e;
                        return [null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, u.default.getUser(null == r ? void 0 : r.id)]
                    }), F = null == p ? null == _ ? void 0 : _.avatarDecoration : null === p.avatarDecoration ? null : null !== (t = p.avatarDecoration) && void 0 !== t ? t : null == _ ? void 0 : _.avatarDecoration, {
                        pendingAvatarDecoration: R
                    } = (0, l.default)({
                        isTryItOut: E,
                        guildId: f
                    }), L = P && (g || !m && !A), y = C ? null != f && null === R ? null == r ? void 0 : r.avatarDecoration : void 0 !== O && O === (null == r ? void 0 : r.id) ? null != R ? R : F : null != F ? F : null == r ? void 0 : r.avatarDecoration : void 0, S = a.useMemo(() => (0, c.getAvatarDecorationURL)({
                        avatarDecoration: void 0 !== T ? T : y,
                        canAnimate: L,
                        size: v
                    }), [y, L, v, T]), D = a.useCallback(() => I(!0), []), b = a.useCallback(() => I(!1), []);
                    return {
                        avatarPlaceholderSrc: d,
                        avatarDecorationSrc: S,
                        isAvatarDecorationAnimating: L,
                        eventHandlers: {
                            onMouseEnter: D,
                            onMouseLeave: b
                        }
                    }
                }
        },
        853987: function(e, t, r) {
            "use strict";
            let a, n;
            r.r(t), r.d(t, {
                default: function() {
                    return T
                }
            }), r("222007");
            var i = r("917351"),
                l = r("446674"),
                o = r("913144"),
                u = r("915639"),
                s = r("491232");
            let c = new Map,
                d = new Map,
                f = c,
                v = d,
                A = !1;
            let C = () => {
                f = c, v = d, n = void 0, A = !1, a = void 0
            };
            class E extends l.default.Store {
                initialize() {
                    this.syncWith([u.default], C)
                }
                get isFetching() {
                    return A
                }
                get error() {
                    return a
                }
                get lastFetched() {
                    return n
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
            E.displayName = "CollectiblesCategoryStore";
            var T = new E(o.default, {
                COLLECTIBLES_CATEGORIES_FETCH: e => {
                    A = !0, a = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
                    0 === e.categories.length ? (f = c, v = d) : !(0, i.isEqual)([...f.values()], e.categories) && (f = new Map(e.categories.map(e => [e.skuId, e])), v = new Map((0, s.getProductsFromCategories)(f).map(e => [e.skuId, e]))), n = Date.now(), A = !1, a = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    f = c, v = d, A = !1, a = t
                },
                COLLECTIBLES_PRODUCT_FETCH: e => {
                    A = !0, a = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
                    v.set(e.product.skuId, e.product), A = !1, a = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    A = !1, a = t
                },
                LOGOUT: C
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
                    return A
                },
                getProductsFromCategories: function() {
                    return C
                },
                getAvatarDecorationsFromPurchases: function() {
                    return g
                },
                getAvatarDecorationsFromCategories: function() {
                    return I
                },
                getCollectiblesAssetURL: function() {
                    return m
                },
                getProfileEffectsFromPurchases: function() {
                    return P
                },
                getProfileEffectsFromCategories: function() {
                    return p
                },
                groupProfileEffects: function() {
                    return O
                },
                isCollectiblesGiftCode: function() {
                    return _
                },
                getLogoSize: function() {
                    return F
                }
            }), r("222007");
            var a = r("917351"),
                n = r("265586"),
                i = r("407063"),
                l = r("153160"),
                o = r("730297"),
                u = r("806410"),
                s = r("49111");
            let c = e => (null == e ? void 0 : e.premiumType) != null,
                d = e => (null == e ? void 0 : e.purchaseType) === s.EntitlementTypes.PREMIUM_PURCHASE,
                f = (e, t) => {
                    let r = v(e, t ? s.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : s.PriceSetAssignmentPurchaseTypes.DEFAULT);
                    return null == r ? "" : (0, l.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
                },
                v = (e, t) => {
                    var r, a, n;
                    let i = null !== (n = e.prices[t]) && void 0 !== n ? n : null;
                    return null == i ? null : null === (a = i.countryPrices) || void 0 === a ? void 0 : null === (r = a.prices) || void 0 === r ? void 0 : r[0]
                },
                A = e => {
                    var t;
                    return (null === (t = v(e, s.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0
                },
                C = e => {
                    let t = (0, a.flatMap)([...e.values()], "products");
                    return (0, a.uniqBy)(t, "storeListingId")
                },
                E = (e, t) => {
                    if (t === n.CollectiblesItemType.AVATAR_DECORATION) {
                        let t = (0, a.flatMap)([...e.values()], "items").filter(o.isAvatarDecorationRecord);
                        return (0, a.uniqBy)(t, "id")
                    }
                    if (t === n.CollectiblesItemType.PROFILE_EFFECT) {
                        let t = (0, a.flatMap)([...e.values()], "items").filter(u.isProfileEffectRecord);
                        return (0, a.uniqBy)(t, "id")
                    }
                },
                T = (e, t) => {
                    let r = C(e);
                    if (t === n.CollectiblesItemType.AVATAR_DECORATION) {
                        let e = (0, a.flatMap)(r, "items").filter(o.isAvatarDecorationRecord);
                        return (0, a.uniqBy)(e, "id")
                    }
                    if (t === n.CollectiblesItemType.PROFILE_EFFECT) {
                        let e = (0, a.flatMap)(r, "items").filter(u.isProfileEffectRecord);
                        return (0, a.uniqBy)(e, "id")
                    }
                },
                g = e => E(e, n.CollectiblesItemType.AVATAR_DECORATION),
                I = e => T(e, n.CollectiblesItemType.AVATAR_DECORATION),
                m = (e, t) => {
                    var r;
                    let {
                        CDN_HOST: a,
                        API_ENDPOINT: n
                    } = window.GLOBAL_ENV, l = (0, i.getBestMediaProxySize)(t.size * (0, i.getDevicePixelRatio)()), o = null !== (r = null == t ? void 0 : t.format) && void 0 !== r ? r : "png";
                    if (null != a) return "".concat(location.protocol, "//").concat(a, "/app-assets/").concat(s.COLLECTIBLES_APPLICATION_ID, "/").concat(e, ".").concat(o, "?size=").concat(l);
                    let u = s.Endpoints.APPLICATION_ASSET(s.COLLECTIBLES_APPLICATION_ID, e, o);
                    return "".concat(location.protocol).concat(n).concat(u, "?size=").concat(l)
                },
                P = e => E(e, n.CollectiblesItemType.PROFILE_EFFECT),
                p = e => T(e, n.CollectiblesItemType.PROFILE_EFFECT),
                O = (e, t) => {
                    let r = P(t),
                        a = p(e).filter(e => {
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
                _ = e => e.applicationId === s.COLLECTIBLES_APPLICATION_ID,
                F = e => 3.8 * e
        },
        170313: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            }), r("794252");
            var a = r("884691"),
                n = r("506838"),
                i = r("265586"),
                l = r("65597"),
                o = r("599110"),
                u = r("853987"),
                s = r("491232"),
                c = r("49111"),
                d = r("646718"),
                f = e => {
                    let t = (0, l.default)([u.default], () => u.default.products);
                    return (0, a.useCallback)(r => {
                        let {
                            type: a,
                            skuId: l
                        } = r, u = t.get(l);
                        o.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                            feature_name: (0, n.match)(a).with(i.CollectiblesItemType.AVATAR_DECORATION, () => d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).with(i.CollectiblesItemType.PROFILE_EFFECT, () => d.AnalyticsPremiumFeatureNames.PROFILE_EFFECT).otherwise(() => void 0),
                            feature_tier: (0, s.isPremiumCollectiblesProduct)(u) ? d.AnalyticsPremiumFeatureTiers.FREE : d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                            feature_selection: null == u ? void 0 : u.name,
                            location_stack: e
                        })
                    }, [t, e])
                }
        },
        730297: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isAvatarDecorationRecord: function() {
                    return l
                },
                default: function() {
                    return a
                }
            });
            var a, n = r("265586"),
                i = r("200410");
            let l = e => e instanceof a;
            a = class e extends i.default {
                static fromServer(t) {
                    return new e({
                        ...super.fromServer(t),
                        ...t
                    })
                }
                constructor(e) {
                    super(e), this.type = n.CollectiblesItemType.AVATAR_DECORATION, this.asset = e.asset, this.label = e.label
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
            var a, n = r("666038");
            a = class e extends n.default {
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
                    return l
                },
                default: function() {
                    return a
                }
            });
            var a, n = r("265586"),
                i = r("200410");
            let l = e => e instanceof a;
            a = class e extends i.default {
                static fromServer(t) {
                    return new e({
                        ...super.fromServer(t),
                        ...t
                    })
                }
                constructor(e) {
                    super(e), this.type = n.CollectiblesItemType.PROFILE_EFFECT
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
                n = r("65597"),
                i = r("170313"),
                l = r("424562"),
                o = r("906932"),
                u = r("26989"),
                s = r("790618"),
                c = r("697218"),
                d = r("783142"),
                f = e => {
                    let {
                        isTryItOut: t,
                        analyticsLocations: r,
                        guildId: f
                    } = e, v = (0, n.default)([c.default], () => c.default.getCurrentUser()), A = (0, n.default)([u.default], () => null != f && null != v ? u.default.getMember(f, v.id) : null), C = null != A ? A.avatarDecoration : null == v ? void 0 : v.avatarDecoration, E = (0, i.default)(r), {
                        pendingAvatar: T,
                        pendingAvatarDecoration: g,
                        pendingErrors: I
                    } = (0, n.useStateFromStoresObject)([s.default, l.default], () => ({
                        pendingAvatar: t ? s.default.getTryItOutAvatar() : null != f ? l.default.getPendingAvatar() : s.default.getPendingAvatar(),
                        pendingAvatarDecoration: t ? s.default.getTryItOutAvatarDecoration() : null != f ? l.default.getPendingAvatarDecoration() : s.default.getPendingAvatarDecoration(),
                        pendingErrors: null != f ? l.default.getErrors().avatarDecoration : s.default.getErrors().avatarDecoration
                    })), m = (0, a.useCallback)(e => (0, o.setNewPendingAvatar)(e, null == v ? void 0 : v.avatar), [null == v ? void 0 : v.avatar]), P = (0, a.useCallback)(e => {
                        (0, o.setNewPendingAvatarDecoration)(f, e), null != e && E(e)
                    }, [E, f]);
                    return {
                        pendingAvatar: T,
                        pendingAvatarDecoration: g,
                        setPendingAvatar: t ? d.setTryItOutAvatar : m,
                        setPendingAvatarDecoration: t ? d.setTryItOutAvatarDecoration : P,
                        savedAvatarDecoration: C,
                        pendingErrors: I
                    }
                }
        }
    }
]);
//# sourceMappingURL=23897.719369c4fbf3f816dc42.js.map