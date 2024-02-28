(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65877"], {
        660097: function(e, t, r) {
            "use strict";
            e.exports = r.p + "f6c7b8245d3a54cf98b2.png"
        },
        621680: function(e, t, r) {
            "use strict";
            e.exports = r.p + "18517b33da6ed36b855b.svg"
        },
        725345: function(e, t, r) {
            "use strict";
            e.exports = r.p + "2304725db3c96705e901.svg"
        },
        673762: function(e, t, r) {
            "use strict";
            e.exports = r.p + "b21a7b48a6e973958489.svg"
        },
        788525: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5ff8ffaa3831478d2a28.svg"
        },
        331906: function(e, t, r) {
            "use strict";
            e.exports = r.p + "4ba6811c2bcb626963c6.svg"
        },
        894990: function(e, t, r) {
            "use strict";
            e.exports = r.p + "20c942338703af7dccd1.svg"
        },
        674720: function(e, t, r) {
            "use strict";
            e.exports = r.p + "d18655651bd838408129.svg"
        },
        109837: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5f5e1a58ecf11d0d8d15.svg"
        },
        504514: function(e, t, r) {
            "use strict";
            e.exports = r.p + "f5710b460ce933c9abe8.svg"
        },
        392807: function(e, t, r) {
            "use strict";
            e.exports = r.p + "f5c7b6adf73fe335fa05.svg"
        },
        291410: function(e, t, r) {
            "use strict";
            e.exports = r.p + "4fd94b2e62b94b0454d3.svg"
        },
        516083: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5b74fc90eac76055a5ad.svg"
        },
        430539: function(e, t, r) {
            "use strict";
            e.exports = r.p + "d994d2093d7d1924be78.svg"
        },
        343305: function(e, t, r) {
            "use strict";
            e.exports = r.p + "e9b67e80d0033605e8f4.svg"
        },
        167969: function(e, t, r) {
            "use strict";
            e.exports = r.p + "baa5b6db50bb89d55668.svg"
        },
        557256: function(e, t, r) {
            "use strict";
            e.exports = r.p + "abb37025036befe38e64.svg"
        },
        341048: function(e, t, r) {
            "use strict";
            e.exports = r.p + "4a1620da08f098314241.svg"
        },
        537381: function(e, t, r) {
            "use strict";
            e.exports = r.p + "ac64a4b16416154663f7.svg"
        },
        425456: function(e, t, r) {
            "use strict";
            e.exports = r.p + "3af18e66cab696affd74.svg"
        },
        945182: function(e, t, r) {
            "use strict";
            e.exports = r.p + "789cbb1aaa8190be1c18.svg"
        },
        769860: function(e, t, r) {
            "use strict";
            e.exports = r.p + "714405524ef39906bd06.png"
        },
        867250: function(e, t, r) {
            "use strict";
            e.exports = r.p + "75ad54f57ebd84babdf2.svg"
        },
        822645: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DEFAULT_FILE_UPLOAD_ICONS: function() {
                    return l
                },
                EMOJI_FILE_UPLOAD_ICONS: function() {
                    return o
                },
                FileUploadIconClassNames: function() {
                    return s
                }
            });
            var n, i, a = r("577950");
            (n = i || (i = {}))[n.IMAGE = 0] = "IMAGE", n[n.DOCUMENT = 1] = "DOCUMENT", n[n.CODE = 2] = "CODE";
            let s = {
                    0: a.image,
                    1: a.document,
                    2: a.code
                },
                l = [1, 0, 2],
                o = [0, 0, 0]
        },
        601763: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("803997"),
                a = r.n(i),
                s = r("822645"),
                l = r("577950"),
                o = function(e) {
                    let {
                        icons: t,
                        className: r
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: a()(l.icons, r),
                        children: [(0, n.jsx)("div", {
                            className: l.wrapOne,
                            children: (0, n.jsx)("div", {
                                className: a()(l.icon, l.one, s.FileUploadIconClassNames[t[0]])
                            })
                        }), (0, n.jsx)("div", {
                            className: l.wrapThree,
                            children: (0, n.jsx)("div", {
                                className: a()(l.icon, l.three, s.FileUploadIconClassNames[t[2]])
                            })
                        }), (0, n.jsx)("div", {
                            className: l.wrapTwo,
                            children: (0, n.jsx)("div", {
                                className: a()(l.icon, l.two, s.FileUploadIconClassNames[t[1]])
                            })
                        })]
                    })
                }
        },
        736587: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                UPLOAD_ERROR_MODAL_KEY: function() {
                    return _
                },
                default: function() {
                    return m
                },
                openUploadError: function() {
                    return E
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("803997"),
                a = r.n(i),
                s = r("910838"),
                l = r("916615"),
                o = r("547783"),
                u = r("508338"),
                c = r("601763"),
                d = r("822645"),
                f = r("577950");

            function m(e) {
                let {
                    title: t,
                    help: r,
                    showPremiumUpsell: i,
                    transitionState: s,
                    icons: m,
                    fileSize: _,
                    onClose: E
                } = e, I = (0, u.useUID)(), C = m ?? d.DEFAULT_FILE_UPLOAD_ICONS;
                return i ? (0, n.jsx)(o.default, {
                    transitionState: s,
                    onClose: E,
                    fileSize: _
                }) : (0, n.jsx)(l.ModalRoot, {
                    size: l.ModalSize.DYNAMIC,
                    "aria-labelledby": I,
                    transitionState: s,
                    children: (0, n.jsx)("div", {
                        className: a()(f.uploadDropModal, f.error),
                        children: (0, n.jsxs)("div", {
                            className: f.inner,
                            children: [(0, n.jsx)(c.default, {
                                icons: C
                            }), (0, n.jsx)("div", {
                                id: I,
                                className: f.title,
                                children: t
                            }), (0, n.jsx)("div", {
                                className: f.instructions,
                                children: r
                            })]
                        })
                    })
                })
            }
            let _ = "UPLOAD_ERROR_MODAL_KEY";

            function E(e) {
                (0, s.openModal)(t => (0, n.jsx)(m, {
                    ...t,
                    ...e
                }), {
                    modalKey: _
                })
            }
        },
        699340: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("654095");
            r.es(n, t)
        },
        299647: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("646510");
            r.es(n, t)
        },
        62889: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("207561"),
                i = r("566031"),
                a = r("804594");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = (0, i.diffAsUnits)(Date.now(), e),
                    o = (0, n.useForceUpdate)();
                return (0, a.default)(() => {
                    !(0 === l.days && 0 === l.hours && 0 === l.minutes && 0 === l.seconds) && !s && (o(), r?.())
                }, s ? null : t), l
            }
        },
        804594: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("470079"),
                i = r("512722"),
                a = r.n(i);

            function s(e, t) {
                let r = (0, n.useRef)(e);
                (0, n.useEffect)(() => {
                    r.current = e
                }, [e]), (0, n.useEffect)(() => {
                    if (null === t) return;
                    let e = setInterval(function() {
                        a()(null != r.current, "Missing callback"), r.current()
                    }, t);
                    return () => clearInterval(e)
                }, [t])
            }
        },
        455784: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return o
                },
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return a
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return s
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return l
                },
                insertAccessibilityLabelElements: function() {
                    return u
                }
            });
            var n = r("508338"),
                i = r("30175");
            let a = (0, n.uid)(),
                s = (0, n.uid)(),
                l = (0, n.uid)(),
                o = (0, n.uid)();

            function u() {
                [{
                    id: a,
                    text: ","
                }, {
                    id: s,
                    text: ","
                }, {
                    id: l,
                    text: i.default.Messages.REACTIONS
                }, {
                    id: o,
                    text: i.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: r
                    } = e, n = document.getElementById(t);
                    null == n && ((n = document.createElement("div")).setAttribute("id", t), n.innerText = r, n.style.display = "none", document.body.appendChild(n))
                })
            }
        },
        796538: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getDecorationSizeForAvatarSize: function() {
                    return o
                },
                openAvatarDecorationModal: function() {
                    return u
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("974328"),
                a = r("521588");
            r("495366");
            var s = r("249606"),
                l = r("467006");

            function o(e) {
                return "number" != typeof e ? (0, i.getAvatarSize)(e) * s.DECORATION_TO_AVATAR_RATIO : e * s.DECORATION_TO_AVATAR_RATIO
            }
            let u = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedDecoration: s,
                    isTryItOutFlow: o,
                    guild: u
                } = e;
                (0, i.openModalLazy)(async () => {
                    (0, a.getHistory)().location.pathname === l.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, a.transitionTo)(l.Routes.APP);
                    let {
                        default: e
                    } = await r.el("796538@1309:1342").then(r.bind(r, "314945"));
                    return r => (0, n.jsx)(e, {
                        ...r,
                        analyticsLocations: t,
                        initialSelectedDecoration: s,
                        isTryItOutFlow: o,
                        guild: u
                    })
                }, {})
            }
        },
        940213: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var n = r("470079"),
                i = r("661223"),
                a = r("329420"),
                s = r("463451"),
                l = r("361733"),
                o = r("871831"),
                u = r("470526"),
                c = r("204606"),
                d = r("660097"),
                f = e => {
                    let {
                        user: t,
                        guildId: r,
                        size: f,
                        animateOnHover: m = !1,
                        showPending: _ = !1,
                        showTryItOut: E = !1,
                        avatarDecorationOverride: I
                    } = e, [C, T] = n.useState(!1), p = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion), S = (0, i.useStateFromStores)([u.default], () => u.default.isFocused()), P = (0, i.useStateFromStores)([l.default], () => null != r && null != t ? l.default.getMember(r, t.id) : null), [R, L] = (0, i.useStateFromStoresArray)([o.default], () => [o.default.getCurrentUser()?.id, o.default.getUser(t?.id)]), O = null == P ? L?.avatarDecoration : null === P.avatarDecoration ? null : P.avatarDecoration ?? L?.avatarDecoration, {
                        pendingAvatarDecoration: g
                    } = (0, s.default)({
                        isTryItOut: E,
                        guildId: r
                    }), M = S && (C || !p && !m), h = _ && void 0 !== g && void 0 !== R && R === t?.id, A = null != r && null === g, x = h ? A ? t?.avatarDecoration : g ?? O : O ?? t?.avatarDecoration, U = n.useMemo(() => (0, c.getAvatarDecorationURL)({
                        avatarDecoration: void 0 !== I ? I : x,
                        canAnimate: M,
                        size: f
                    }), [x, M, f, I]), N = n.useCallback(() => T(!0), []);
                    return {
                        avatarPlaceholderSrc: d,
                        avatarDecorationSrc: U,
                        isAvatarDecorationAnimating: M,
                        eventHandlers: {
                            onMouseEnter: N,
                            onMouseLeave: n.useCallback(() => T(!1), [])
                        }
                    }
                }
        },
        174942: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                closeEditor: function() {
                    return l
                },
                openEditor: function() {
                    return s
                },
                resetBackgroundGradientPreset: function() {
                    return a
                },
                resetPreviewClientTheme: function() {
                    return o
                },
                updateBackgroundGradientPreset: function() {
                    return i
                }
            });
            var n = r("312916");
            let i = e => {
                    n.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: e
                    })
                },
                a = () => {
                    n.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: null
                    })
                },
                s = () => {
                    n.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_OPEN"
                    })
                },
                l = () => {
                    n.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_CLOSE"
                    })
                },
                o = () => {
                    n.default.dispatch({
                        type: "RESET_PREVIEW_CLIENT_THEME"
                    })
                }
        },
        515562: function(e, t, r) {
            "use strict";
            let n, i;
            r.r(t), r.d(t, {
                default: function() {
                    return C
                }
            });
            var a = r("392711"),
                s = r("661223"),
                l = r("312916"),
                o = r("703229"),
                u = r("547723");
            let c = new Map,
                d = new Map,
                f = c,
                m = d,
                _ = !1;
            let E = () => {
                f = c, m = d, i = void 0, _ = !1, n = void 0
            };
            class I extends s.default.Store {
                static #e = this.displayName = "CollectiblesCategoryStore";
                initialize() {
                    this.syncWith([o.default], E)
                }
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
                    return f
                }
                get products() {
                    return m
                }
                getCategory(e) {
                    return null != e ? f.get(e) : void 0
                }
                getProduct(e) {
                    return null != e ? m.get(e) : void 0
                }
                getCategoryForProduct(e) {
                    let t = this.getProduct(e);
                    return this.getCategory(t?.categorySkuId)
                }
            }
            var C = new I(l.default, {
                COLLECTIBLES_CATEGORIES_FETCH: e => {
                    _ = !0, n = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
                    0 === e.categories.length ? (f = c, m = d) : !(0, a.isEqual)([...f.values()], e.categories) && (f = new Map(e.categories.map(e => [e.skuId, e])), m = new Map((0, u.getProductsFromCategories)(f).map(e => [e.skuId, e]))), i = Date.now(), _ = !1, n = void 0
                },
                COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    f = c, m = d, _ = !1, n = t
                },
                COLLECTIBLES_PRODUCT_FETCH: e => {
                    _ = !0, n = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
                    m.set(e.product.skuId, e.product), _ = !1, n = void 0
                },
                COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    _ = !1, n = t
                },
                LOGOUT: E
            })
        },
        547723: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                extractPriceByPurchaseTypes: function() {
                    return m
                },
                getAvatarDecorations: function() {
                    return S
                },
                getCollectiblesAssetURL: function() {
                    return P
                },
                getFormattedPriceForCollectiblesProduct: function() {
                    return f
                },
                getLogoSize: function() {
                    return M
                },
                getProductsFromCategories: function() {
                    return E
                },
                getProfileEffectsFromCategories: function() {
                    return L
                },
                getProfileEffectsFromPurchases: function() {
                    return R
                },
                groupProfileEffects: function() {
                    return O
                },
                isCollectiblesGiftCode: function() {
                    return g
                },
                isFreeCollectiblesProduct: function() {
                    return _
                },
                isPremiumCollectiblesProduct: function() {
                    return c
                },
                isPremiumCollectiblesPurchase: function() {
                    return d
                }
            });
            var n = r("392711"),
                i = r("53452"),
                a = r("500833"),
                s = r("977634"),
                l = r("5595"),
                o = r("739596"),
                u = r("467006");
            let c = e => e?.premiumType != null,
                d = e => e?.purchaseType === u.EntitlementTypes.PREMIUM_PURCHASE,
                f = (e, t) => {
                    let r = m(e, t ? u.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : u.PriceSetAssignmentPurchaseTypes.DEFAULT);
                    return null == r ? "" : (0, s.formatPrice)(r?.amount, r?.currency)
                },
                m = (e, t) => {
                    let r = e.prices[t] ?? null;
                    return null == r ? null : r.countryPrices?.prices?.[0]
                },
                _ = e => m(e, u.PriceSetAssignmentPurchaseTypes.DEFAULT)?.amount === 0,
                E = e => {
                    let t = (0, n.flatMap)([...e.values()], "products");
                    return (0, n.uniqBy)(t, "storeListingId")
                },
                I = (e, t) => {
                    if (t === i.CollectiblesItemType.AVATAR_DECORATION) {
                        let t = (0, n.flatMap)([...e.values()], "items").filter(l.isAvatarDecorationRecord);
                        return (0, n.uniqBy)(t, "id")
                    }
                    if (t === i.CollectiblesItemType.PROFILE_EFFECT) {
                        let t = (0, n.flatMap)([...e.values()], "items").filter(o.isProfileEffectRecord);
                        return (0, n.uniqBy)(t, "id")
                    }
                },
                C = (e, t) => {
                    let r = E(e);
                    if (t === i.CollectiblesItemType.AVATAR_DECORATION) {
                        let e = (0, n.flatMap)(r, "items").filter(l.isAvatarDecorationRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                    if (t === i.CollectiblesItemType.PROFILE_EFFECT) {
                        let e = (0, n.flatMap)(r, "items").filter(o.isProfileEffectRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                },
                T = e => I(e, i.CollectiblesItemType.AVATAR_DECORATION),
                p = e => C(e, i.CollectiblesItemType.AVATAR_DECORATION),
                S = (e, t) => (0, n.uniqBy)([...T(e), ...p(t)], "id"),
                P = (e, t) => {
                    let {
                        CDN_HOST: r,
                        API_ENDPOINT: n
                    } = window.GLOBAL_ENV, i = (0, a.getBestMediaProxySize)(t.size * (0, a.getDevicePixelRatio)()), s = t?.format ?? "png";
                    if (null != r) return `${location.protocol}//${r}/app-assets/${u.COLLECTIBLES_APPLICATION_ID}/${e}.${s}?size=${i}`;
                    let l = u.Endpoints.APPLICATION_ASSET(u.COLLECTIBLES_APPLICATION_ID, e, s);
                    return `${location.protocol}${n}${l}?size=${i}`
                },
                R = e => I(e, i.CollectiblesItemType.PROFILE_EFFECT),
                L = e => C(e, i.CollectiblesItemType.PROFILE_EFFECT),
                O = (e, t) => {
                    let r = R(t),
                        n = L(e).filter(e => {
                            let {
                                id: t
                            } = e;
                            return !r.some(e => e.id === t)
                        });
                    return {
                        purchased: r,
                        shopPreviews: n
                    }
                },
                g = e => e.applicationId === u.COLLECTIBLES_APPLICATION_ID,
                M = e => 3.8 * e
        },
        23419: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            }), r("627341");
            var n = r("470079"),
                i = r("278074"),
                a = r("53452"),
                s = r("203959"),
                l = r("328470"),
                o = r("515562"),
                u = r("547723"),
                c = r("467006"),
                d = r("171168"),
                f = e => {
                    let t = (0, s.default)([o.default], () => o.default.products);
                    return (0, n.useCallback)(r => {
                        let {
                            type: n,
                            skuId: s
                        } = r, o = t.get(s);
                        l.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                            feature_name: (0, i.match)(n).with(a.CollectiblesItemType.AVATAR_DECORATION, () => d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).with(a.CollectiblesItemType.PROFILE_EFFECT, () => d.AnalyticsPremiumFeatureNames.PROFILE_EFFECT).otherwise(() => void 0),
                            feature_tier: (0, u.isPremiumCollectiblesProduct)(o) ? d.AnalyticsPremiumFeatureTiers.FREE : d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                            feature_selection: o?.name,
                            location_stack: e
                        })
                    }, [t, e])
                }
        },
        5595: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                },
                isAvatarDecorationRecord: function() {
                    return a
                }
            });
            var n = r("53452"),
                i = r("673992");
            let a = e => e instanceof s;
            class s extends i.default {
                constructor(e) {
                    super(e), this.type = n.CollectiblesItemType.AVATAR_DECORATION, this.asset = e.asset, this.label = e.label
                }
                static fromServer(e) {
                    return new s({
                        ...super.fromServer(e),
                        ...e
                    })
                }
            }
        },
        673992: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r("885714");
            class i extends n.default {
                constructor(e) {
                    super(), this.id = e.id, this.skuId = e.skuId
                }
                static fromServer(e) {
                    let {
                        sku_id: t,
                        ...r
                    } = e;
                    return new i({
                        ...r,
                        skuId: t
                    })
                }
            }
        },
        739596: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                },
                isProfileEffectRecord: function() {
                    return a
                }
            });
            var n = r("53452"),
                i = r("673992");
            let a = e => e instanceof s;
            class s extends i.default {
                constructor(e) {
                    super(e), this.type = n.CollectiblesItemType.PROFILE_EFFECT
                }
                static fromServer(e) {
                    return new s({
                        ...super.fromServer(e),
                        ...e
                    })
                }
            }
        },
        718408: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var n = (0, r("516086").createExperiment)({
                kind: "user",
                id: "2023-11_nitro_affinities",
                label: "Nitro Affinities",
                defaultConfig: {
                    marketingEnabled: !1,
                    planSelectionEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Nitro Affinities for Marketing Page",
                    config: {
                        marketingEnabled: !0,
                        planSelectionEnabled: !1
                    }
                }, {
                    id: 2,
                    label: "Enable Nitro Affinities for Plan Selection Page",
                    config: {
                        marketingEnabled: !1,
                        planSelectionEnabled: !0
                    }
                }, {
                    id: 3,
                    label: "Enable Nitro Affinities for Both Marketing Page and Plan Selection Page",
                    config: {
                        marketingEnabled: !0,
                        planSelectionEnabled: !0
                    }
                }]
            })
        },
        468385: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("661223"),
                i = r("312916");
            let a = {
                fetched: !1,
                affinities: []
            };
            class s extends n.default.Store {
                get hasFetched() {
                    return a.fetched
                }
                get affinities() {
                    return a.affinities
                }
            }
            var l = new s(i.default, {
                BILLING_NITRO_AFFINITY_FETCHED: function(e) {
                    let {} = e;
                    a.fetched = !0
                },
                BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
                    let {
                        res: t
                    } = e;
                    a.affinities = t
                }
            })
        },
        675609: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return a
                }
            });
            var n = r("620412"),
                i = r("467006");
            let a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                n.default.open(i.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        389280: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useActiveDiscountDuration: function() {
                    return C
                },
                useFetchChurnUserDiscountOffer: function() {
                    return p
                },
                useHasDiscountApplied: function() {
                    return I
                },
                useIsInPremiumOfferExperience: function() {
                    return E
                },
                useShouldFetchChurnOffer: function() {
                    return S
                }
            });
            var n = r("470079"),
                i = r("913527"),
                a = r.n(i),
                s = r("661223"),
                l = r("454836"),
                o = r("416573"),
                u = r("864342"),
                c = r("458565"),
                d = r("459992"),
                f = r("921011"),
                m = r("171168"),
                _ = r("467006");

            function E() {
                let e = (0, f.usePremiumTrialOffer)(),
                    t = (0, u.useHasActiveTrial)(),
                    r = (0, d.usePremiumDiscountOffer)(),
                    n = I();
                return null != e || t || null != r || n
            }
            let I = () => {
                    let e = (0, s.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
                        t = e?.metadata?.active_discount_expires_at;
                    return null != t && a()(Date.now()) <= a()(t)
                },
                C = () => {
                    let e = (0, s.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription());
                    switch (e?.metadata?.active_discount_id) {
                        case m.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID:
                            return 1;
                        case m.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID:
                        case m.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID:
                        case m.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID:
                            return 3;
                        default:
                            return
                    }
                },
                T = async () => {
                    let e = null;
                    try {
                        e = (await l.default.post({
                            url: _.Endpoints.CHURN_USER_OFFER
                        })).body.offer ?? null
                    } catch (e) {}
                    return e
                }, p = e => {
                    let [t, r] = n.useState(!1), [i, a] = n.useState(!1), [s, l] = n.useState(null);
                    if (e) return {
                        churnUserDiscountOffer: s,
                        isFetchingChurnDiscountOffer: i
                    };
                    let o = () => {
                        r(!0), a(!1)
                    };
                    return !i && !t && (a(!0), T().then(e => {
                        l(e), o()
                    }).catch(e => {
                        o()
                    })), {
                        churnUserDiscountOffer: s,
                        isFetchingChurnDiscountOffer: i
                    }
                }, S = () => {
                    let {
                        enabled: e
                    } = c.default.useExperiment({
                        location: "useShouldFetchChurnOffer"
                    }, {
                        autoTrackExposure: !1
                    }), t = (0, s.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()), r = I(), n = null !== t && t.hasPremiumNitroMonthly, i = null != t && null != t.trialId;
                    return e && n && !i && !r
                }
        },
        864342: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useCurrentPremiumTrialTier: function() {
                    return l
                },
                useHasActiveTrial: function() {
                    return s
                }
            });
            var n = r("661223"),
                i = r("871831"),
                a = r("416573");
            r("171168");
            let s = () => {
                let e = (0, n.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription());
                return e?.trialId != null
            };

            function l() {
                let e = (0, n.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
                    t = (0, n.useStateFromStores)([i.default], () => i.default.getCurrentUser());
                return e?.trialId != null ? t?.premiumType : null
            }
        },
        766873: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return C
                }
            });
            var n = r("470079"),
                i = r("203959"),
                a = r("454836"),
                s = r("312916"),
                l = r("714558"),
                o = r("871831"),
                u = r("643847"),
                c = r("952223"),
                d = r("862949"),
                f = r("171168"),
                m = r("467006");
            let _ = "nonSubscriber";
            async function E() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await a.default.get({
                        url: m.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: r
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), n = d.default.shouldFetchPremiumLikelihood();
                T(o.default.getCurrentUser(), n, t, r)
            }

            function C(e) {
                let {
                    enabled: t,
                    useExpectedValue: r
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), a = (0, i.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, i.default)([o.default], () => o.default.getCurrentUser());
                n.useEffect(() => {
                    T(s, a, t, r)
                }, [s, a, t, r])
            }

            function T(e, t, r, n) {
                null != e && !(0, c.isPremium)(e) && r && (t && E(), n && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        862949: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("661223"),
                i = r("312916");
            let a = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = a;
            class l extends n.default.Store {
                static #e = this.displayName = "UserPremiumLikelihoodStore";
                initialize() {
                    s = a
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            var o = new l(i.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    s.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    s.isFetching = !1
                },
                LOGOUT: function() {
                    s.premiumLikelihood = void 0
                }
            })
        },
        878042: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getHigherExpectedValue: function() {
                    return a
                },
                getHighestLikelihood: function() {
                    return s
                }
            });
            var n = r("766873"),
                i = r("171168");

            function a(e, t, r) {
                return null == e ? i.PremiumTypes.TIER_2 : e[i.PremiumSubscriptionSKUs.TIER_0] * t > e[i.PremiumSubscriptionSKUs.TIER_2] * r ? i.PremiumTypes.TIER_0 : i.PremiumTypes.TIER_2
            }

            function s(e) {
                if (null == e) return i.PremiumTypes.TIER_0;
                let t = e[n.NON_SUBSCRIBER_SENTINEL],
                    r = e[i.PremiumSubscriptionSKUs.TIER_0],
                    a = e[i.PremiumSubscriptionSKUs.TIER_2];
                return a > r && a > t ? i.PremiumTypes.TIER_2 : i.PremiumTypes.TIER_0
            }
        },
        544359: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var n = r("454836"),
                i = r("310057"),
                a = r("312916"),
                s = r("87727"),
                l = r("259537"),
                o = r("467006"),
                u = {
                    async fetchUserTrialOffer() {
                        try {
                            let {
                                body: e
                            } = await n.default.get({
                                url: o.Endpoints.USER_TRIAL_OFFER,
                                oldFormErrors: !0
                            });
                            null == e && (0, s.isDismissibleContentDismissed)(i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, l.removeDismissedContent)(i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), a.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS",
                                userTrialOffer: e
                            })
                        } catch (e) {
                            a.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS"
                            })
                        }
                    },
                    async acknowledgeUserTrialOffer(e) {
                        if (null == e.expires_at) try {
                            let {
                                body: t
                            } = await n.default.post({
                                url: o.Endpoints.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id)
                            });
                            a.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                                userTrialOffer: t
                            })
                        } catch (e) {
                            404 === e.status && a.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                                userTrialOffer: null
                            })
                        }
                    }
                }
        },
        892084: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                BOGOAnnouncementModalExperiment: function() {
                    return n
                }
            });
            let n = (0, r("516086").createExperiment)({
                kind: "user",
                id: "2023-06_bogo_announcement_modal",
                label: "BOGO Announcement Modal",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the BOGO announcement modal",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        958101: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var n = (0, r("516086").createExperiment)({
                kind: "user",
                id: "2023-07_bogo_marketing_materials_experiment",
                label: "BOGO Marketing Materials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable BOGO marketing materials",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        448087: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                BogoPromotionExperiment: function() {
                    return n
                },
                default: function() {
                    return a
                },
                isBogoPromotionExperimentEnabled: function() {
                    return i
                }
            });
            let n = (0, r("516086").createExperiment)({
                    kind: "user",
                    id: "2023-06_bogo_promotion_gate",
                    label: "BOGO Promotion Manager",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable BOGO Promotion Manager",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return n.getCurrentConfig({
                        location: "489551_2"
                    }, {
                        autoTrackExposure: e
                    })
                };
            var a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return n.useExperiment({
                    location: "489551_1"
                }, {
                    autoTrackExposure: e
                })
            }
        },
        458565: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var n = (0, r("516086").createExperiment)({
                kind: "user",
                id: "2024-02_churn_user_discount_offer_experiment",
                label: "Churn User Discount Offer",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 0,
                    label: "users receive no discount offer when churning",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 1,
                    label: "users receive a 1 month discout offer when churning",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "users receive a 3 month discount offer when churning",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        392874: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                EnhancedHDStreamingRoadblockVariants: function() {
                    return i
                },
                GradientVariants: function() {
                    return s
                },
                default: function() {
                    return l
                }
            });
            var n, i, a = r("516086");
            (n = i || (i = {}))[n.NONE = 0] = "NONE", n[n.VARIANT_1A = 1] = "VARIANT_1A", n[n.VARIANT_1B = 2] = "VARIANT_1B", n[n.VARIANT_2A = 3] = "VARIANT_2A", n[n.VARIANT_2B = 4] = "VARIANT_2B";
            let s = [1, 3];
            var l = (0, a.createExperiment)({
                kind: "user",
                id: "2024-01_enhanced_hd_streaming_roadblock",
                label: "Enhanced HD Streaming Roadblock",
                defaultConfig: {
                    enabled: !1,
                    variant: 0
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1A",
                    config: {
                        enabled: !0,
                        variant: 1
                    }
                }, {
                    id: 2,
                    label: "Variant 1B",
                    config: {
                        enabled: !0,
                        variant: 2
                    }
                }, {
                    id: 3,
                    label: "Variant 2A",
                    config: {
                        enabled: !0,
                        variant: 3
                    }
                }, {
                    id: 4,
                    label: "Variant 2B",
                    config: {
                        enabled: !0,
                        variant: 4
                    }
                }]
            })
        },
        986656: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var n = (0, r("516086").createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            })
        },
        404627: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var n = r("661223"),
                i = r("871831"),
                a = r("643847"),
                s = r("488867"),
                l = r("766873"),
                o = r("862949"),
                u = r("878042"),
                c = r("921011"),
                d = r("171168");

            function f(e) {
                let {
                    autoTrackExposure: t,
                    experiment: r,
                    location: f
                } = e, m = (0, n.useStateFromStores)([i.default], () => i.default.getCurrentUser()), _ = (0, c.usePremiumTrialOffer)(), E = null != _, I = null != m && (0, s.isPremium)(m);
                (0, l.useMaybeFetchPremiumLikelihood)(r);
                let {
                    enabled: C,
                    useExpectedValue: T,
                    useLikelihood: p
                } = r.useExperiment({
                    location: f ?? "1"
                }, {
                    autoTrackExposure: !I && !E && t
                }), {
                    premiumLikelihood: S,
                    fetched: P
                } = (0, n.useStateFromStoresObject)([o.default], () => {
                    let e = o.default.getState();
                    return {
                        fetched: e.fetched,
                        premiumLikelihood: e.premiumLikelihood
                    }
                }), R = (0, n.useStateFromStores)([a.default], () => a.default.isLoadedForSKUs([d.PremiumSubscriptionSKUs.TIER_0, d.PremiumSubscriptionSKUs.TIER_2])), L = !I && C && !E && (T ? !P || !R : !P), O = d.PremiumTypes.TIER_2;
                if (E) {
                    let e = _.subscription_trial;
                    e?.sku_id === d.PremiumSubscriptionSKUs.TIER_0 ? O = d.PremiumTypes.TIER_0 : e?.sku_id === d.PremiumSubscriptionSKUs.TIER_2 && (O = d.PremiumTypes.TIER_2)
                } else if (!I && !L && C) {
                    if (T) {
                        let {
                            amount: e
                        } = (0, s.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                            amount: t
                        } = (0, s.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                        O = (0, u.getHigherExpectedValue)(S, e, t)
                    } else p && (O = (0, u.getHighestLikelihood)(S))
                }
                return {
                    isLoading: L,
                    suggestedPremiumType: O
                }
            }
        },
        459992: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                discountOfferHasTier: function() {
                    return d
                },
                usePremiumDiscountOffer: function() {
                    return m
                }
            });
            var n = r("470079"),
                i = r("661223"),
                a = r("767191"),
                s = r("871831"),
                l = r("537022"),
                o = r("488867"),
                u = r("171168");

            function c(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e, t) {
                return null != e && new Set(e.discount?.plan_ids.map(e => u.SubscriptionPlanInfo[e].skuId)).has(t)
            }

            function f(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getUserDiscountOffer(e)),
                    [r, u] = n.useState(c(t)),
                    d = (0, i.useStateFromStores)([s.default], () => (0, o.isPremium)(s.default.getCurrentUser()));
                return n.useEffect(() => {
                    if (null == t || null == t.expires_at) return;
                    let e = new a.Timeout,
                        n = () => {
                            let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                            e?.start(i, () => {
                                !r && c(t) ? u(!0) : n()
                            })
                        };
                    return n(), () => e.stop()
                }, [r, t]), r || d ? null : t
            }

            function m() {
                let e = f(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID),
                    t = f(u.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID);
                return e ?? t
            }
        },
        391436: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                PromotionPreviewExperiment: function() {
                    return n
                }
            });
            let n = (0, r("516086").createExperiment)({
                kind: "user",
                id: "2021-06_preview_promotions",
                label: "Promotions Preview",
                defaultConfig: {
                    previewEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Preview Enabled",
                    config: {
                        previewEnabled: !0
                    }
                }]
            })
        },
        776500: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                bogoPromotionFromServer: function() {
                    return _
                },
                claimOutboundPromotion: function() {
                    return C
                },
                fetchClaimedOutboundPromotionCodes: function() {
                    return I
                },
                getOutboundPromotionRedemptionUrl: function() {
                    return T
                },
                getPromotionImageURL: function() {
                    return f
                },
                isOutboundPromotionRedeemableByTrialUsers: function() {
                    return P
                },
                isTrialUserEligibleToSeeOutboundPromotion: function() {
                    return R
                },
                outboundPromotionFromServer: function() {
                    return m
                },
                shouldShowOutboundPromotionNotice: function() {
                    return p
                },
                shouldShowOutboundPromotionOnPlatform: function() {
                    return S
                }
            }), r("789020");
            var n = r("454836"),
                i = r("24135"),
                a = r("703229"),
                s = r("416573"),
                l = r("984362"),
                o = r("501769"),
                u = r("7112"),
                c = r("171168"),
                d = r("467006");

            function f(e, t) {
                let r = (0, i.isThemeDark)(t) ? "logo-dark" : "logo-light",
                    n = window.GLOBAL_ENV.CDN_HOST,
                    a = "?size=256";
                return null != n ? `${location.protocol}//${n}/promotions/${e}/${r}${a}` : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}/promotions/${e}/${r}${a}`
            }

            function m(e) {
                return {
                    id: e.id,
                    startDate: e.start_date,
                    endDate: e.end_date,
                    outboundRedemptionEndDate: e.outbound_redemption_end_date,
                    outboundTitle: e.outbound_title,
                    outboundRedemptionModalBody: e.outbound_redemption_modal_body,
                    outboundRedemptionPageLink: e.outbound_redemption_page_link,
                    outboundRedemptionUrlFormat: e.outbound_redemption_url_format,
                    outboundTermsAndConditions: e.outbound_terms_and_conditions,
                    flags: e.flags
                }
            }

            function _(e) {
                return {
                    id: e.id,
                    startDate: e.start_date,
                    endDate: e.end_date
                }
            }

            function E(e) {
                return {
                    code: e.code,
                    userId: e.user_id,
                    claimedAt: e.claimed_at,
                    promotion: m(e.promotion)
                }
            }
            async function I() {
                return (await n.default.get({
                    url: d.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
                    query: {
                        locale: a.default.locale
                    },
                    oldFormErrors: !0
                })).body.map(E)
            }
            async function C(e) {
                return E((await n.default.post({
                    url: d.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e)
                })).body)
            }

            function T(e, t) {
                return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
            }

            function p() {
                let e = u.default.lastSeenOutboundPromotionStartDate,
                    t = u.default.outboundPromotions,
                    r = u.default.consumedInboundPromotionId,
                    n = t.filter(e => {
                        let {
                            id: t,
                            flags: n
                        } = e;
                        return t !== r && !(0, l.hasFlag)(n, c.PromotionFlags.SUPPRESS_NOTIFICATION)
                    }),
                    i = null == e ? n : n.filter(t => {
                        let {
                            startDate: r
                        } = t;
                        return new Date(r) > new Date(e)
                    }),
                    a = u.default.lastDismissedOutboundPromotionStartDate,
                    o = s.default.getPremiumTypeSubscription(),
                    d = o?.trialId != null ? i.filter(e => P(e)) : i;
                return 0 !== d.length && (null == a || d.some(e => {
                    let {
                        startDate: t
                    } = e;
                    return new Date(t) > new Date(a)
                }))
            }

            function S(e) {
                return !(0, o.isIOS)() || !(0, l.hasFlag)(e.flags, c.PromotionFlags.IS_BLOCKED_IOS)
            }

            function P(e) {
                return (0, l.hasFlag)(e.flags, c.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
            }

            function R(e, t) {
                return null != t[e.id] || P(e)
            }
        },
        114032: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return I
                },
                fetchActiveBogoPromotion: function() {
                    return E
                },
                fetchActiveOutboundPromotions: function() {
                    return _
                }
            });
            var n = r("454836"),
                i = r("599187"),
                a = r("312916"),
                s = r("286021"),
                l = r("703229"),
                o = r("259537"),
                u = r("391436"),
                c = r("776500"),
                d = r("7112"),
                f = r("171168"),
                m = r("467006");
            async function _() {
                if (!d.default.isFetchingActiveOutboundPromotions) try {
                    a.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH"
                    });
                    let e = u.PromotionPreviewExperiment.getCurrentConfig({
                            location: "5731cc_1"
                        }, {
                            autoTrackExposure: !1
                        }).previewEnabled ? m.Endpoints.OUTBOUND_PROMOTIONS_PREVIEW : m.Endpoints.OUTBOUND_PROMOTIONS,
                        t = (await n.default.get({
                            url: e,
                            query: {
                                locale: l.default.locale
                            },
                            oldFormErrors: !0
                        })).body,
                        r = d.default.consumedInboundPromotionId;
                    if (!d.default.hasFetchedConsumedInboundPromotionId) {
                        let e = (await (0, s.fetchUserEntitlementsForApplication)(f.PREMIUM_SUBSCRIPTION_APPLICATION, !1)).find(e => null != e.promotion_id && !0 === e.consumed);
                        r = e?.promotion_id ?? null
                    }
                    a.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                        activeOutboundPromotions: t.map(e => (0, c.outboundPromotionFromServer)(e)),
                        consumedInboundPromotionId: r
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL"
                    })
                }
            }
            async function E() {
                if (!d.default.isFetchingActiveBogoPromotion) try {
                    a.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH"
                    });
                    let e = (await n.default.get({
                        url: m.Endpoints.BOGO_PROMOTIONS,
                        query: {
                            locale: l.default.locale
                        }
                    })).body;
                    a.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                        activePromotion: (0, c.bogoPromotionFromServer)(e)
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
                    })
                }
            }
            var I = {
                fetchActiveOutboundPromotions: _,
                dismissOutboundPromotionNotice: function() {
                    a.default.dispatch({
                        type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
                    });
                    let e = d.default.lastDismissedOutboundPromotionStartDate;
                    null != e && o.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
                        t.lastDismissedOutboundPromotionStartDate = i.StringValue.create({
                            value: e
                        })
                    }, o.UserSettingsDelay.INFREQUENT_USER_ACTION)
                },
                markOutboundPromotionsSeen() {
                    a.default.dispatch({
                        type: "OUTBOUND_PROMOTIONS_SEEN"
                    })
                },
                fetchActiveBogoPromotion: E
            }
        },
        508109: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useBogoPromotion: function() {
                    return I
                },
                useOutboundPromotions: function() {
                    return _
                },
                useUnseenOutboundPromotions: function() {
                    return E
                }
            });
            var n = r("470079"),
                i = r("661223"),
                a = r("312916"),
                s = r("871831"),
                l = r("488867"),
                o = r("864342"),
                u = r("776500"),
                c = r("114032"),
                d = r("7112"),
                f = r("171168");

            function m() {
                let e = (0, i.useStateFromStoresArray)([d.default], () => d.default.outboundPromotions),
                    t = (0, i.useStateFromStores)([d.default], () => d.default.consumedInboundPromotionId);
                return n.useMemo(() => e.filter(e => {
                    let {
                        id: r
                    } = e;
                    return r !== t
                }), [e, t])
            }

            function _() {
                let e = (0, i.useStateFromStores)([d.default], () => d.default.lastFetchedActivePromotions),
                    t = m(),
                    r = (0, i.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
                    _ = (0, o.useHasActiveTrial)(),
                    [E, I] = n.useState(!1),
                    [C, T] = n.useState([]);
                n.useEffect(() => {
                    null != e && a.default.wait(() => c.default.markOutboundPromotionsSeen())
                }, [e]);
                let p = n.useCallback(e => {
                        T(t => t.some(t => {
                            let {
                                promotion: r
                            } = t;
                            return r.id === e.promotion.id
                        }) ? t : [...t, e])
                    }, []),
                    S = (0, l.isPremiumExactly)(r, f.PremiumTypes.TIER_2);
                n.useEffect(() => {
                    a.default.wait(() => {
                        S && null == e && c.default.fetchActiveOutboundPromotions()
                    })
                }, [e, S]), n.useEffect(() => {
                    a.default.wait(() => {
                        (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
                            T(e), I(!0)
                        }).catch(() => {
                            T([]), I(!0)
                        })
                    })
                }, []);
                let P = {};
                for (let {
                        code: e,
                        promotion: t
                    }
                    of C) P[t.id] = e;
                let R = new Set(t.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    })),
                    L = C.filter(e => {
                        let {
                            promotion: t
                        } = e;
                        return !R.has(t.id)
                    });
                return {
                    promotionsLoaded: E && (!S || null != e),
                    activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!_ || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, P))),
                    claimedEndedOutboundPromotions: L.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
                    claimedOutboundPromotionCodeMap: P,
                    addClaimedOutboundPromotionCode: p
                }
            }

            function E() {
                let e = (0, i.useStateFromStores)([d.default], () => d.default.lastSeenOutboundPromotionStartDate),
                    t = (0, o.useHasActiveTrial)(),
                    r = m();
                return n.useMemo(() => {
                    if (null == e) return t ? r.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : r;
                    let n = r.filter(t => {
                        let {
                            startDate: r
                        } = t;
                        return new Date(r) > new Date(e)
                    });
                    return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n
                }, [r, e, t]).filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
            }

            function I() {
                return {
                    promotion: (0, i.useStateFromStores)([d.default], () => d.default.bogoPromotion)
                }
            }
        },
        7112: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return C
                }
            });
            var n = r("661223"),
                i = r("312916"),
                a = r("991400");

            function s() {
                return {
                    hasFetchedConsumedInboundPromotionId: !1,
                    consumedInboundPromotionId: null,
                    lastSeenOutboundPromotionStartDate: null,
                    bogoPromotion: null
                }
            }
            let l = s(),
                o = !1,
                u = null,
                c = !1,
                d = null,
                f = [],
                m = null;

            function _() {
                let e = null;
                for (let t of f)(null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
                return e
            }

            function E() {
                m = a.default.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null
            }
            class I extends n.default.PersistedStore {
                static #e = this.displayName = "PromotionsStore";
                static #t = this.persistKey = "PromotionsPersistedStore";
                initialize(e) {
                    null != e && (l = e), this.waitFor(a.default), this.syncWith([a.default], E)
                }
                get outboundPromotions() {
                    return f
                }
                get lastSeenOutboundPromotionStartDate() {
                    return l.lastSeenOutboundPromotionStartDate
                }
                get lastDismissedOutboundPromotionStartDate() {
                    return m
                }
                get lastFetchedActivePromotions() {
                    return d
                }
                get isFetchingActiveOutboundPromotions() {
                    return c
                }
                get hasFetchedConsumedInboundPromotionId() {
                    return l.hasFetchedConsumedInboundPromotionId
                }
                get consumedInboundPromotionId() {
                    return l.consumedInboundPromotionId
                }
                get bogoPromotion() {
                    return l.bogoPromotion
                }
                get isFetchingActiveBogoPromotion() {
                    return o
                }
                get lastFetchedActiveBogoPromotion() {
                    return u
                }
                getState() {
                    return l
                }
            }
            var C = new I(i.default, {
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        activeOutboundPromotions: t,
                        consumedInboundPromotionId: r
                    } = e;
                    f = t, d = Date.now(), c = !1, !l.hasFetchedConsumedInboundPromotionId && (l.hasFetchedConsumedInboundPromotionId = !0, l.consumedInboundPromotionId = r)
                },
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function() {
                    c = !0
                },
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function() {
                    f = [], c = !1
                },
                ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function(e) {
                    let {
                        activePromotion: t
                    } = e;
                    l.bogoPromotion = t, u = Date.now(), o = !1
                },
                ACTIVE_BOGO_PROMOTION_FETCH: function() {
                    o = !0
                },
                ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function() {
                    l.bogoPromotion = null, o = !1
                },
                OUTBOUND_PROMOTION_NOTICE_DISMISS: function() {
                    if (0 === f.length) return !1;
                    let e = _();
                    null != e && (m = e)
                },
                OUTBOUND_PROMOTIONS_SEEN: function() {
                    if (0 === f.length) return !1;
                    let e = _();
                    null != e && (m = e, l.lastSeenOutboundPromotionStartDate = e)
                },
                LOGOUT: function() {
                    l = s(), c = !1, d = null, o = !1, u = null, f = []
                }
            })
        },
        908783: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useChurnDiscountedPrice: function() {
                    return f
                },
                useDiscountedPrice: function() {
                    return d
                }
            });
            var n = r("243770"),
                i = r("354627"),
                a = r("675796"),
                s = r("488867"),
                l = r("977634"),
                o = r("5082"),
                u = r("459992"),
                c = r("171168");
            let d = e => {
                    let {
                        paymentSourceId: t
                    } = (0, a.default)({
                        isGift: !1,
                        activeSubscription: null
                    }), r = c.SubscriptionPlanInfo[e].skuId, {
                        priceOptions: d
                    } = (0, i.default)({
                        activeSubscription: null,
                        skuIDs: [r],
                        paymentSourceId: t,
                        isGift: !1
                    }), f = (0, u.usePremiumDiscountOffer)(), [m, _] = (0, o.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: e,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !(null != f),
                        paymentSourceId: t,
                        currency: d.currency
                    }), E = m?.invoiceItems?.find(t => t.subscriptionPlanId === e)?.discounts?.find(e => e.type === n.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)?.amount, I = (0, s.getPrice)(e, !1, !1, d);
                    return (0, l.formatPrice)(I.amount - (E ?? 0), I.currency)
                },
                f = (e, t, r) => {
                    let {
                        paymentSourceId: u
                    } = (0, a.default)({
                        isGift: !1,
                        activeSubscription: null
                    }), d = c.SubscriptionPlanInfo[t].skuId, {
                        priceOptions: f
                    } = (0, i.default)({
                        activeSubscription: null,
                        skuIDs: [d],
                        paymentSourceId: u,
                        isGift: !1
                    }), [m, _] = (0, o.useSubscriptionInvoicePreview)({
                        subscriptionId: e.id,
                        items: [{
                            planId: t,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !(null != r),
                        paymentSourceId: u,
                        currency: f.currency,
                        userDiscountOfferId: r?.id
                    }), E = m?.invoiceItems?.find(e => e.subscriptionPlanId === t)?.discounts?.find(e => e.type === n.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)?.amount, I = (0, s.getPrice)(t, !1, !1, f);
                    return (0, l.formatPrice)(I.amount - (E ?? 0), I.currency)
                }
        },
        893302: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getBOGOPillCopy: function() {
                    return b
                },
                isEligibleForBOGOAnnouncementModal: function() {
                    return N
                },
                maybeFetchActiveBogoPromotion: function() {
                    return U
                },
                useIsEligibleForBogoPromotion: function() {
                    return A
                }
            });
            var n = r("913527"),
                i = r.n(n),
                a = r("203959"),
                s = r("310057"),
                l = r("242677"),
                o = r("62889"),
                u = r("471154"),
                c = r("87727"),
                d = r("703229"),
                f = r("871831"),
                m = r("416573"),
                _ = r("537022"),
                E = r("488867"),
                I = r("544359"),
                C = r("892084"),
                T = r("958101"),
                p = r("448087"),
                S = r("921011"),
                P = r("114032"),
                R = r("508109"),
                L = r("7112"),
                O = r("171168"),
                g = r("467006"),
                M = r("30175");

            function h(e) {
                let {
                    experimentEnabled: t,
                    premiumSubscription: r,
                    mostRecentSubscription: n
                } = e, a = !1, s = !1;
                if (null != n && n.status === g.SubscriptionStatusTypes.ENDED) {
                    let e = n.metadata?.ended_at != null ? i()(n.metadata.ended_at) : null,
                        t = E.getPremiumPlanItem(n)?.planId,
                        r = null != t && E.default.getPremiumType(t) === O.PremiumTypes.TIER_2;
                    s = null != e && r && e.add(10, "days").isAfter(i()())
                }
                if (null != r) {
                    let e = E.getPremiumPlanItem(r)?.planId,
                        t = null != e && E.default.getPremiumType(e) === O.PremiumTypes.TIER_2,
                        n = f.default.getCurrentUser(),
                        i = r?.trialId != null && E.default.isPremiumExactly(n, O.PremiumTypes.TIER_0);
                    a = t || i
                }
                return !t || a || s
            }

            function A() {
                let {
                    paymentsBlocked: e
                } = u.default.useExperiment({
                    location: "153d31_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    promotion: t
                } = (0, R.useBogoPromotion)(), {
                    enabled: r
                } = (0, p.default)(), {
                    mostRecentSubscription: n,
                    premiumSubscription: i
                } = (0, a.useStateFromStoresObject)([m.default], () => ({
                    mostRecentSubscription: m.default.getMostRecentPremiumTypeSubscription(),
                    premiumSubscription: m.default.getPremiumTypeSubscription()
                })), s = (0, S.usePremiumTrialOffer)(), l = new Date(t?.endDate ?? 0).valueOf();
                (0, o.default)(l, 1e3, void 0, l + 2e3 < Date.now());
                let c = !h({
                        experimentEnabled: r,
                        premiumSubscription: i,
                        mostRecentSubscription: n
                    }) && null == s && null != t && !e,
                    d = Date.now(),
                    {
                        enabled: f
                    } = T.default.useExperiment({
                        location: "153d31_2"
                    }, {
                        autoTrackExposure: c,
                        disable: !c
                    });
                return !(d > l) && f
            }
            async function x() {
                let e = f.default.getCurrentUser(),
                    t = !e?.isClaimed(),
                    {
                        paymentsBlocked: r
                    } = u.default.getCurrentConfig({
                        location: "153d31_3"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: n
                    } = (0, p.isBogoPromotionExperimentEnabled)(),
                    {
                        enabled: i
                    } = T.default.getCurrentConfig({
                        location: "153d31_4"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: a
                    } = C.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_5"
                    }, {
                        autoTrackExposure: !1
                    });
                if (t || r || !n || !a && !i) return !1;
                if (_.default.shouldFetchOffer() && await I.default.fetchUserTrialOffer(), _.default.hasFetchedOffer() && _.default.hasAnyUnexpiredOffer()) return !1;
                !m.default.hasFetchedMostRecentPremiumTypeSubscription() && f.default.getCurrentUser()?.hasHadSKU(O.PremiumSubscriptionSKUs.TIER_2) && await (0, l.fetchMostRecentSubscription)(), !m.default.hasFetchedSubscriptions() && await (0, l.fetchSubscriptions)();
                let s = m.default.getMostRecentPremiumTypeSubscription();
                return !h({
                    experimentEnabled: n,
                    premiumSubscription: m.default.getPremiumTypeSubscription(),
                    mostRecentSubscription: s
                })
            }
            async function U() {
                if (!await x()) return;
                let e = L.default.bogoPromotion;
                if (!(null != e && new Date(e.endDate).valueOf() >= Date.now())) await (0, P.fetchActiveBogoPromotion)()
            }
            async function N() {
                let e = L.default.bogoPromotion,
                    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
                    r = (0, c.isDismissibleContentDismissed)(s.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
                    n = await x(),
                    {
                        enabled: i
                    } = p.BogoPromotionExperiment.getCurrentConfig({
                        location: "153d31_6"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: a
                    } = C.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_7"
                    }, {
                        autoTrackExposure: t && i && !r && n
                    });
                return t && a && i && !r && n
            }

            function b() {
                switch (d.default.locale) {
                    case "de":
                    case "es-ES":
                    case "fr":
                    case "hr":
                    case "it":
                    case "lt":
                    case "nl":
                    case "pl":
                    case "pt-BR":
                    case "ro":
                    case "fi":
                    case "sv-SE":
                    case "tr":
                    case "cs":
                    case "el":
                    case "bg":
                    case "ru":
                    case "uk":
                    case "ja":
                    case "ko":
                        return M.default.Messages.NITRO_BADGE_TEXT;
                    default:
                        return M.default.Messages.BOGO_PILL
                }
            }
        },
        749911: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                PremiumTrialGradientBadge: function() {
                    return j
                },
                default: function() {
                    return B
                }
            });
            var n = r("735250"),
                i = r("470079"),
                a = r("803997"),
                s = r.n(a),
                l = r("512722"),
                o = r.n(l),
                u = r("913527"),
                c = r.n(u),
                d = r("661223"),
                f = r("910838"),
                m = r("24135"),
                _ = r("974328"),
                E = r("960099"),
                I = r("329420"),
                C = r("174942"),
                T = r("521588"),
                p = r("108679"),
                S = r("860767"),
                P = r("747690"),
                R = r("428037"),
                L = r("488867"),
                O = r("281925"),
                g = r("675609"),
                M = r("921011"),
                h = r("650742"),
                A = r("119014"),
                x = r("171168"),
                U = r("467006"),
                N = r("30175"),
                b = r("228743"),
                v = r("867250");

            function D(e) {
                if (null == e) return null;
                let t = c()(e),
                    r = t.diff(c()(), "h");
                if (r > 24) {
                    let e = t.diff(c()(), "d");
                    return N.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
                        numDays: e
                    })
                }
                if (r > 1) return N.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
                    numHours: r
                });
                let n = t.diff(c()(), "minutes");
                return N.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
                    numMinutes: n
                })
            }

            function y(e) {
                let {
                    className: t,
                    children: r,
                    withBottomMargin: i,
                    discountOffer: a,
                    trialOffer: l
                } = e, o = l?.expires_at ?? a?.expires_at, u = l?.subscription_trial, c = e.subscriptionTier ?? u?.sku_id ?? x.PremiumSubscriptionSKUs.TIER_2;
                return (0, n.jsxs)("div", {
                    className: s()(t, b.gradientUpsellWrapper, {
                        [b.gradientUpsellWrapperTier0]: c === x.PremiumSubscriptionSKUs.TIER_0,
                        [b.gradientUpsellWrapperTier2]: c === x.PremiumSubscriptionSKUs.TIER_2,
                        [b.gradientUpsellWrapperWithBottomMargin]: i
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: b.logo,
                        children: [(0, n.jsx)(R.default, {
                            className: b.logoIcon
                        }), c === x.PremiumSubscriptionSKUs.TIER_0 && (0, n.jsx)(P.default, {
                            className: b.logoWordmark
                        }), c === x.PremiumSubscriptionSKUs.TIER_2 && (0, n.jsx)(S.default, {
                            className: b.logoWordmark
                        })]
                    }), (0, n.jsx)(_.Text, {
                        variant: "text-md/medium",
                        className: b.copy,
                        color: "none",
                        children: r
                    }), (0, n.jsx)(A.PremiumPillWithSparkles, {
                        text: null != a ? N.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: a.discount.amount
                        }) : N.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        colorOptions: c === x.PremiumSubscriptionSKUs.TIER_0 ? A.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : A.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
                    }), (0, n.jsx)(_.Text, {
                        variant: "eyebrow",
                        className: b.countdownText,
                        children: D(o)
                    })]
                })
            }

            function F(e) {
                let {
                    className: t,
                    onClose: r,
                    subscriptionTier: a,
                    analyticsLocationObject: s,
                    trialOffer: l,
                    discountOffer: o
                } = e, [u, c] = i.useState(!1), d = null != o ? N.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                    percent: o.discount.amount
                }) : (0, L.formatTrialCtaIntervalDuration)({
                    intervalType: l?.subscription_trial?.interval,
                    intervalCount: l?.subscription_trial?.interval_count
                });
                return (0, n.jsx)(h.default, {
                    className: t,
                    subscriptionTier: a,
                    trialId: l?.trial_id,
                    submitting: u,
                    premiumModalAnalyticsLocation: s,
                    size: _.Button.Sizes.MEDIUM,
                    color: _.Button.Colors.GREEN,
                    onClick: () => {
                        c(!0)
                    },
                    onSubscribeModalClose: e => {
                        c(!1), e && r?.()
                    },
                    buttonText: d
                })
            }

            function j(e) {
                let t = M.usePremiumTrialOffer()?.subscription_trial,
                    r = t?.sku_id ?? x.PremiumSubscriptionSKUs.TIER_2;
                return (0, n.jsx)(_.Text, {
                    variant: "text-xs/bold",
                    className: s()(b.trialBadge, e.className, {
                        [b.trialBadgeGradientTier0]: r === x.PremiumSubscriptionSKUs.TIER_0,
                        [b.trialBadgeGradientTier2]: r === x.PremiumSubscriptionSKUs.TIER_2
                    }),
                    color: "none",
                    children: (0, L.formatTrialOfferIntervalDuration)({
                        intervalType: t?.interval,
                        intervalCount: t?.interval_count
                    })
                })
            }

            function k(e) {
                let {
                    subscriptionTier: t,
                    onClose: r,
                    analyticsLocationObject: i,
                    trialOffer: a,
                    discountOffer: s
                } = e;
                return (0, n.jsxs)("div", {
                    className: b.footer,
                    children: [(0, n.jsx)(_.Button, {
                        onClick: r,
                        size: _.Button.Sizes.SMALL,
                        look: _.ButtonLooks.BLANK,
                        className: b.cancelButton,
                        children: N.default.Messages.CLOSE
                    }), (0, n.jsx)(F, {
                        className: b.subscribeButton,
                        subscriptionTier: t,
                        analyticsLocationObject: i,
                        onClose: r,
                        discountOffer: s,
                        trialOffer: a
                    })]
                })
            }

            function w(e) {
                let {
                    onClose: t,
                    analyticsLocationObject: r
                } = e, i = (0, M.usePremiumTrialOffer)();
                return (0, n.jsxs)("div", {
                    className: b.tryOutUpsellContainer,
                    children: [(0, n.jsx)(A.PremiumPillWithSparkles, {
                        className: b.topRimPill,
                        text: N.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                        colorOptions: A.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                    }), (0, n.jsx)(_.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-normal",
                        children: N.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
                            onClick: g.navigateToPremiumMarketingPage
                        })
                    }), (0, n.jsx)(F, {
                        trialOffer: i,
                        className: b.subscribeButtonWide,
                        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocationObject: r,
                        onClose: t
                    }), (0, n.jsx)(_.Text, {
                        variant: "eyebrow",
                        className: b.countdownTextInSetting,
                        children: D(i?.expires_at)
                    })]
                })
            }

            function H(e) {
                let {
                    headingText: t,
                    context: r,
                    children: i,
                    trialOffer: a,
                    discountOffer: s
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(_.Heading, {
                        className: b.header,
                        variant: "heading-xl/semibold",
                        children: t
                    }), null != r && (0, n.jsx)(_.Text, {
                        className: b.context,
                        variant: "text-md/normal",
                        children: r
                    }), (0, n.jsx)(y, {
                        trialOffer: a,
                        discountOffer: s,
                        children: i
                    })]
                })
            }

            function B(e) {
                let {
                    headingText: t,
                    context: i,
                    children: a,
                    onClose: l,
                    type: u,
                    subscriptionTier: c,
                    analyticsLocationObject: S,
                    trialOffer: P,
                    discountOffer: R
                } = e, g = (0, d.useStateFromStores)([I.default], () => I.default.useReducedMotion), M = (0, E.default)();
                switch (u) {
                    case x.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(_.Clickable, {
                                className: b.upsellClose,
                                onClick: l,
                                children: (0, n.jsx)(p.default, {})
                            }), (0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)("img", {
                                    className: b.upsellImage,
                                    src: v,
                                    alt: N.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, n.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: N.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                                }), (0, n.jsx)(y, {
                                    trialOffer: P,
                                    discountOffer: R,
                                    children: N.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, L.getDisplayNameFromSku)(c),
                                        onClick: () => (0, T.transitionTo)(U.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, n.jsx)(k, {
                                subscriptionTier: c,
                                onClose: l,
                                analyticsLocationObject: {
                                    section: U.AnalyticsSections.EXPRESSION_PICKER,
                                    object: U.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: P,
                                discountOffer: R
                            })]
                        });
                    case x.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
                        return o()(null != a, "You must specify children for this upsell type"), (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)("img", {
                                    className: b.upsellImage,
                                    src: v,
                                    alt: N.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, n.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: N.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                                }), (0, n.jsx)(y, {
                                    trialOffer: P,
                                    discountOffer: R,
                                    children: N.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, L.getDisplayNameFromSku)(c),
                                        onClick: () => (0, T.transitionTo)(U.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, n.jsx)(k, {
                                subscriptionTier: c,
                                onClose: l,
                                analyticsLocationObject: {
                                    section: U.AnalyticsSections.EXPRESSION_PICKER,
                                    object: U.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: P,
                                discountOffer: R
                            })]
                        });
                    case x.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                        o()(null != a, "You must specify children for this upsell type");
                        let h = (0, m.isThemeLight)(M) ? r("537381") : r("341048");
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)("img", {
                                    alt: "",
                                    className: b.upsellImage,
                                    src: h
                                }), (0, n.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: N.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                                }), (0, n.jsx)(y, {
                                    trialOffer: P,
                                    discountOffer: R,
                                    children: N.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                        planName: (0, L.getDisplayNameFromSku)(c),
                                        onClick: () => (0, T.transitionTo)(U.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, n.jsx)(k, {
                                subscriptionTier: c,
                                onClose: l,
                                analyticsLocationObject: {
                                    section: U.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                    object: U.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: P,
                                discountOffer: R
                            })]
                        });
                    case x.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                    case x.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                    case x.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                    case x.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                        let A;
                        switch (u) {
                            case x.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                                A = N.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                                    planName: (0, L.getDisplayNameFromSku)(c),
                                    premiumMaxSize: c === x.PremiumSubscriptionSKUs.TIER_0 ? N.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : N.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                                    onClick: () => {
                                        (0, T.transitionTo)(U.Routes.APPLICATION_STORE), l?.()
                                    }
                                });
                                break;
                            case x.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                                A = N.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, L.getDisplayNameFromSku)(c),
                                    onClick: () => {
                                        (0, T.transitionTo)(U.Routes.APPLICATION_STORE), l?.()
                                    }
                                });
                                break;
                            case x.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                                A = N.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                                    onClick: () => {
                                        (0, T.transitionTo)(U.Routes.APPLICATION_STORE), l?.(), (0, f.closeAllModals)()
                                    }
                                });
                                break;
                            case x.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                                A = N.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: U.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, T.transitionTo)(U.Routes.APPLICATION_STORE), l?.()
                                    }
                                })
                        }
                        return o()(null != A, "There must be some upsell context"), (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                                className: b.contentContainer,
                                children: [(0, n.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: t
                                }), (0, n.jsx)(_.Text, {
                                    variant: "text-md/normal",
                                    children: i
                                }), (0, n.jsx)(y, {
                                    trialOffer: P,
                                    discountOffer: R,
                                    children: A
                                })]
                            })
                        });
                    case x.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
                        return (0, n.jsxs)("div", {
                            className: b.contentContainer,
                            children: [(0, n.jsx)(_.Heading, {
                                variant: "heading-xl/bold",
                                color: "header-primary",
                                children: t
                            }), (0, n.jsx)(_.Text, {
                                variant: "text-md/normal",
                                children: i
                            }), (0, n.jsx)(y, {
                                trialOffer: P,
                                discountOffer: R,
                                children: N.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, L.getDisplayNameFromSku)(c),
                                    onClick: () => (0, T.transitionTo)(U.Routes.APPLICATION_STORE)
                                })
                            }), (0, n.jsx)(F, {
                                className: b.upsellButton,
                                subscriptionTier: c,
                                analyticsLocationObject: S,
                                onClose: l,
                                trialOffer: P,
                                discountOffer: R
                            })]
                        });
                    case x.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                        return o()(null != a, "You must specify children for this upsell type"), (0, n.jsx)(y, {
                            trialOffer: P,
                            discountOffer: R,
                            children: N.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                                onClick: () => {
                                    (0, T.transitionTo)(U.Routes.APPLICATION_STORE), (0, C.closeEditor)()
                                }
                            })
                        });
                    case x.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                        return (0, n.jsxs)("div", {
                            className: s()(b.messageLengthUpsellContainer, {
                                [b.messageLengthUpsellAppearAnimation]: !g
                            }),
                            children: [(0, n.jsx)(_.Text, {
                                variant: "text-lg/bold",
                                color: "status-danger",
                                children: i
                            }), (0, n.jsx)(_.Heading, {
                                variant: "heading-lg/extrabold",
                                color: "header-primary",
                                className: b.messageLengthUpsellHeader,
                                children: N.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
                            }), (0, n.jsx)("div", {
                                className: b.divider
                            }), (0, n.jsx)(y, {
                                trialOffer: P,
                                discountOffer: R,
                                className: b.messageLengthBrandedContainer,
                                subscriptionTier: c,
                                children: N.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: U.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, T.transitionTo)(U.Routes.APPLICATION_STORE), l?.()
                                    }
                                })
                            }), (0, n.jsx)(F, {
                                subscriptionTier: c,
                                analyticsLocationObject: S,
                                onClose: l,
                                trialOffer: P,
                                discountOffer: R
                            })]
                        });
                    case x.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
                    case x.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                        return (0, n.jsx)(w, {});
                    case x.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
                    case x.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
                    case x.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
                    case x.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
                    case x.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
                    case x.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
                    case x.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
                        return (0, n.jsx)(H, {
                            trialOffer: P,
                            discountOffer: R,
                            headingText: t,
                            context: i,
                            children: a
                        });
                    default:
                        return O.default.captureMessage(`Possible mishandling of a PremiumUpsellType: ${u}`), (0, n.jsx)(H, {
                            headingText: t,
                            context: i,
                            children: a,
                            trialOffer: P,
                            discountOffer: R
                        })
                }
            }
        },
        559063: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("600186"),
                a = r("24135"),
                s = r("960099"),
                l = r("881343"),
                o = r("171168"),
                u = r("885519"),
                c = e => {
                    let {
                        isStacked: t,
                        ctaButton: r,
                        isGift: c,
                        trialOfferTier: d,
                        discountOffer: f
                    } = e, m = !c && (d === o.PremiumSubscriptionSKUs.TIER_2 || null != f), _ = (0, s.default)(), E = (0, a.isThemeLight)(_) && t ? void 0 : i.default.colors.WHITE.css;
                    return t ? c || d !== o.PremiumSubscriptionSKUs.TIER_2 && null == f ? (0, n.jsx)(n.Fragment, {
                        children: r
                    }) : (0, n.jsxs)("div", {
                        className: u.sparklesAndButton,
                        children: [(0, n.jsx)(l.SparkleGroupLeft, {
                            color: E,
                            wrapperStyle: u.leftSparkle
                        }), (0, n.jsx)("div", {
                            className: u.ctaFullWidth,
                            children: r
                        }), (0, n.jsx)(l.SparkleGroupRight, {
                            color: E,
                            wrapperStyle: u.rightSparkle
                        })]
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [r, m && (0, n.jsx)(l.ButtonSparkleGroup, {
                            tier: o.PremiumTypes.TIER_2
                        })]
                    })
                }
        },
        119014: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                PremiumPillAndSparklesColorOptions: function() {
                    return l
                },
                PremiumPillWithSparkles: function() {
                    return ea
                },
                PremiumTierCardsVariant: function() {
                    return c
                },
                Tier0Card: function() {
                    return ed
                },
                Tier2Card: function() {
                    return em
                },
                Tier2FeatureItems: function() {
                    return ef
                },
                Tier2FeatureSet: function() {
                    return u
                },
                default: function() {
                    return e_
                }
            });
            var n, i, a, s, l, o, u, c, d = r("735250");
            r("470079");
            var f = r("803997"),
                m = r.n(f),
                _ = r("913527"),
                E = r.n(_),
                I = r("661223"),
                C = r("600186"),
                T = r("24135"),
                p = r("974328"),
                S = r("960099"),
                P = r("329420"),
                R = r("495157"),
                L = r("986821"),
                O = r("431986"),
                g = r("703229"),
                M = r("871831"),
                h = r("416573"),
                A = r("446426"),
                x = r("596739"),
                U = r("150060"),
                N = r("815607"),
                b = r("7304"),
                v = r("860767"),
                D = r("747690"),
                y = r("428037"),
                F = r("433887"),
                j = r("33848"),
                k = r("262113"),
                w = r("934439"),
                H = r("488867"),
                B = r("718408"),
                G = r("468385"),
                K = r("389280"),
                V = r("459992"),
                z = r("921011"),
                W = r("908783"),
                Z = r("893302"),
                Y = r("559063"),
                $ = r("579093"),
                X = r("881343"),
                q = r("85359"),
                J = r("171168"),
                Q = r("406639"),
                ee = r("30175"),
                et = r("46049"),
                er = r("425456"),
                en = r("945182");

            function ei(e) {
                let {
                    text: t,
                    className: r,
                    colorOptions: n = 2
                } = e;
                return (0, d.jsx)("div", {
                    className: m()(r, et.freeTrialPill, {
                        [et.freeTrialPillTier0GradientFill]: 1 === n,
                        [et.freeTrialPillTier2GradientFill]: 3 === n,
                        [et.freeTrialPillTier2OldGradientFill]: 4 === n,
                        [et.lightBackgroundPill]: 5 === n
                    }),
                    children: (0, d.jsx)(p.Text, {
                        variant: "text-xs/bold",
                        className: m()(et.freeTrialPillText, {
                            [et.freeTrialPillTextInverted]: 0 !== n && 2 !== n,
                            [et.freeTrialPillTextTier0]: 0 === n,
                            [et.freeTrialPillTextTier2]: 2 === n
                        }),
                        children: t
                    })
                })
            }

            function ea(e) {
                let t, {
                    text: r,
                    className: n,
                    colorOptions: i = 2,
                    isPillOnBorder: a = !0
                } = e;
                switch (i) {
                    case 1:
                        t = C.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
                        break;
                    case 3:
                        t = `url(#${X.PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID})`;
                        break;
                    case 4:
                    case 5:
                        t = `url(#${X.PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID})`;
                        break;
                    default:
                        t = "white"
                }
                return a ? (0, d.jsxs)("div", {
                    className: m()(n, et.freeTrialPillWithSparkles),
                    children: [(0, d.jsx)(X.SparkleStar, {
                        foreground: et.sparkleStar1,
                        color: t
                    }), (0, d.jsx)(X.SparkleStar, {
                        foreground: et.sparkleStar2,
                        color: t
                    }), (0, d.jsx)(X.SparkleStar, {
                        foreground: et.sparkleStar3,
                        color: t
                    }), (0, d.jsx)(ei, {
                        text: r,
                        colorOptions: i
                    }), (0, d.jsx)(X.SparkleStar, {
                        foreground: et.sparkleStar4,
                        color: t
                    }), (0, d.jsx)(X.SparkleStar, {
                        foreground: et.sparkleStar5,
                        color: t
                    })]
                }) : (0, d.jsxs)("div", {
                    className: m()(n, et.freeTrialPillWithSparkles),
                    children: [(0, d.jsx)(ei, {
                        text: r,
                        colorOptions: i
                    }), (0, d.jsx)(X.SparkleStar, {
                        foreground: et.sparkleStar1,
                        style: {
                            marginLeft: 4,
                            marginBottom: -6
                        },
                        color: t
                    }), (0, d.jsx)(X.SparkleStar, {
                        foreground: et.sparkleStar2,
                        color: t
                    })]
                })
            }

            function es(e) {
                let {
                    width: t = 83,
                    height: r = 82,
                    ...n
                } = e;
                return (0, d.jsxs)("svg", {
                    ...(0, k.default)({
                        ...n
                    }),
                    width: t,
                    height: r,
                    viewBox: "0 0 83 82",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, d.jsx)("g", {
                        clipPath: "url(#clip0_1691_113820)",
                        children: (0, d.jsx)("path", {
                            d: "M75.6975 45.1322C75.2844 48.0717 70.2815 49.7001 69.2458 52.3302C68.0858 55.0537 70.4287 59.7129 68.6614 62.0181C66.8941 64.3233 61.7294 63.1533 59.479 64.9465C57.2438 66.6308 56.836 71.9026 54.133 72.966C51.5389 74.0448 47.5818 70.602 44.6592 70.8574C41.8456 71.1281 38.9013 75.4884 35.9617 75.0752C33.0222 74.6621 31.3938 69.6592 28.7638 68.6235C26.0402 67.4635 21.381 69.8064 19.0758 68.0391C16.7706 66.2718 17.9406 61.1071 16.1474 58.8566C14.5873 56.5279 9.31547 56.1201 8.25204 53.4171C7.17332 50.823 10.6161 46.8659 10.3607 43.9434C9.96577 41.2233 5.60554 38.279 6.01868 35.3394C6.43181 32.3999 11.4347 30.7715 12.4704 28.1414C13.6304 25.4179 11.2876 20.7587 13.0548 18.4535C14.8221 16.1483 19.9868 17.3183 22.2373 15.5251C24.4724 13.8408 24.8802 8.56898 27.5832 7.50556C30.1774 6.42683 34.1345 9.86958 37.057 9.61417C39.8706 9.34346 42.8149 4.98323 45.7545 5.39636C48.6941 5.80949 50.3224 10.8124 52.9525 11.8481C55.6761 13.0081 60.3352 10.6652 62.6404 12.4325C64.9456 14.1998 63.7756 19.3645 65.5688 21.615C67.2531 23.8501 72.5249 24.2579 73.5884 26.9609C74.6671 29.555 71.2243 33.5122 71.4797 36.4347C71.7505 39.2483 76.1107 42.1926 75.6975 45.1322Z",
                            fill: "currentColor"
                        })
                    }), (0, d.jsx)("path", {
                        d: "M30.1999 41.1212L26.9681 32.3582L23.3318 31.8471L21.6757 43.6313L24.3355 44.0051L25.5209 35.571L28.9482 44.6534L32.3488 45.1313L34.0049 33.3471L31.3451 32.9733L30.1999 41.1212ZM43.2501 41.8738C43.6191 39.2476 42.3243 37.5893 39.7655 37.2296C36.971 36.8369 34.9959 38.4305 34.6269 41.0567C34.2341 43.8513 35.9048 45.8886 38.935 46.3145C40.3996 46.5203 41.6035 46.2603 42.3119 45.862L42.5887 43.8924C41.8322 44.2668 40.8661 44.4228 39.9065 44.288C38.2567 44.0561 37.4063 43.2671 37.286 42.1686L43.0939 42.9849L43.2501 41.8738ZM39.5418 39.3098C40.5182 39.447 41.0822 40.0756 40.9668 41.1409L37.5326 40.6583C37.8069 39.6839 38.4812 39.1607 39.5418 39.3098ZM53.3558 44.7704L52.6485 39.2977L49.9214 38.9145L47.757 43.9321L47.211 38.5335L44.4838 38.1503L45.6771 47.0045L48.4043 47.3878L50.7631 42.2087L51.6534 47.8444L54.4311 48.2348L58.2208 40.0809L55.5104 39.7L53.3558 44.7704ZM61.6245 45.4004L62.7507 37.3871L60.0067 37.0015L58.8805 45.0147L61.6245 45.4004ZM59.7123 49.2345C60.6719 49.3694 61.4423 48.7738 61.5677 47.8816C61.6954 46.9725 61.1167 46.2045 60.1571 46.0696C59.1975 45.9348 58.4127 46.5112 58.2849 47.4202C58.1595 48.3125 58.7527 49.0997 59.7123 49.2345Z",
                        fill: "#5865F2"
                    }), (0, d.jsx)("path", {
                        d: "M57.6991 28.0304L61.3718 26.9774C61.3856 26.9721 61.3978 26.9632 61.4071 26.9517C61.4163 26.9401 61.4223 26.9262 61.4243 26.9116C61.4264 26.8969 61.4245 26.882 61.4188 26.8683C61.4131 26.8546 61.4038 26.8427 61.392 26.8338L58.1518 24.8093C58.1409 24.8077 58.1311 24.8019 58.1244 24.7932C58.1178 24.7844 58.1149 24.7733 58.1165 24.7625L57.0607 21.0782C57.0282 21.0109 56.9459 20.9993 56.9167 21.058L54.8864 24.3085C54.8629 24.3261 54.86 24.3466 54.8394 24.3437L51.1462 25.3939C51.1324 25.3992 51.1202 25.4081 51.1109 25.4196C51.1017 25.4312 51.0957 25.445 51.0937 25.4597C51.0916 25.4744 51.0935 25.4893 51.0992 25.503C51.1049 25.5167 51.1142 25.5286 51.126 25.5375L54.3867 27.5649C54.4073 27.5678 54.4044 27.5883 54.4221 27.6117L55.4778 31.296C55.4898 31.3604 55.5721 31.372 55.6219 31.3162L57.6522 28.0657C57.6537 28.0548 57.6595 28.045 57.6683 28.0384C57.6771 28.0318 57.6882 28.0289 57.6991 28.0304V28.0304Z",
                        fill: "#5865F2"
                    }), (0, d.jsx)("path", {
                        d: "M27.9939 54.8801L30.1446 54.2599C30.156 54.2502 30.1635 54.2367 30.1656 54.2219C30.1676 54.207 30.1642 54.1919 30.1559 54.1795L28.2594 52.9905C28.2541 52.9897 28.2493 52.9869 28.2461 52.9826C28.2429 52.9783 28.2415 52.9729 28.2422 52.9676L27.626 50.8105C27.6275 50.7998 27.6247 50.789 27.6182 50.7804C27.6118 50.7718 27.6022 50.7662 27.5915 50.7647C27.5809 50.7632 27.5701 50.766 27.5616 50.7725C27.553 50.7789 27.5473 50.7886 27.5458 50.7992L26.3589 52.7029L26.3388 52.7001L24.1881 53.3203C24.1775 53.3188 24.1667 53.3216 24.1581 53.3281C24.1495 53.3346 24.1439 53.3442 24.1424 53.3549C24.1409 53.3655 24.1437 53.3763 24.1501 53.3849C24.1566 53.3935 24.1662 53.3992 24.1768 53.4007L26.0733 54.5897C26.0786 54.5904 26.0834 54.5933 26.0866 54.5976C26.0898 54.6019 26.0912 54.6073 26.0905 54.6126L26.7067 56.7697C26.7164 56.7811 26.7299 56.7886 26.7446 56.7907C26.7594 56.7928 26.7745 56.7893 26.7869 56.7809L27.9738 54.8773C27.9738 54.8773 27.9738 54.8773 27.9939 54.8801Z",
                        fill: "#5865F2"
                    }), (0, d.jsx)("defs", {
                        children: (0, d.jsx)("clipPath", {
                            id: "clip0_1691_113820",
                            children: (0, d.jsx)("rect", {
                                width: "70.3636",
                                height: "70.3636",
                                fill: "white",
                                transform: "translate(10.915 0.5) rotate(8)"
                            })
                        })
                    })]
                })
            }

            function el(e) {
                let {
                    Icon: t,
                    text: r,
                    isNew: n = !1
                } = e;
                return (0, d.jsxs)("div", {
                    className: et.item,
                    children: [(0, d.jsx)(t, {
                        className: et.icon
                    }), (0, d.jsx)(p.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: r
                    }), n ? (0, d.jsx)(O.default, {
                        className: et.newTagItem,
                        forceUseColorForSparkles: !0,
                        shouldInheritBackgroundColor: !0,
                        shouldInheritTextColor: !0
                    }) : null]
                })
            }

            function eo(e) {
                let {
                    defaultPriceString: t,
                    subscriptionPlan: r
                } = e, n = (0, W.useDiscountedPrice)(r);
                return (0, d.jsx)(d.Fragment, {
                    children: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION.format({
                        discountedPrice: n,
                        regularPrice: t
                    })
                })
            }

            function eu(e) {
                let {
                    isGift: t,
                    premiumTier: r,
                    offerTierMatchesCard: n,
                    offerType: i,
                    showYearlyPrice: a,
                    isStacked: s,
                    isFullScreen: l
                } = e, o = (0, I.useStateFromStores)([h.default], () => h.default.getPremiumTypeSubscription()), u = (0, I.useStateFromStores)([M.default], () => M.default.getCurrentUser()), c = (0, K.useHasDiscountApplied)(), f = (0, K.useActiveDiscountDuration)(), _ = r === J.PremiumTypes.TIER_0 ? J.PremiumSubscriptionSKUs.TIER_0 : J.PremiumSubscriptionSKUs.TIER_2, C = o?.trialId != null ? u?.premiumType : c ? J.PremiumTypes.TIER_2 : null, T = (0, z.usePremiumTrialOffer)(), S = T?.subscription_trial;
                if (!t && null != C && r === C && null != o && null != o.planIdFromItems && !s) {
                    let e = null != o.trialEndsAt ? E()(o?.trialEndsAt).diff(E()(), "d") : 0,
                        t = J.SubscriptionPlanInfo[o.planIdFromItems],
                        r = H.default.formatPriceString(H.default.getDefaultPrice(t.id), t.interval);
                    return (0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(p.Heading, {
                            variant: "heading-md/normal",
                            color: "always-white",
                            className: et.trialHeader,
                            children: 0 === i ? ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                remainingTime: e,
                                price: r
                            }) : ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                                percent: 30,
                                regularPrice: r,
                                numMonths: f ?? J.DISCOUNT_DURATION_FALLBACK
                            })
                        })
                    })
                }
                if (!t && n && !s) {
                    let e = H.default.formatPriceString(H.default.getDefaultPrice(r === J.PremiumTypes.TIER_0 ? J.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : J.SubscriptionPlans.PREMIUM_MONTH_TIER_2), J.SubscriptionIntervalTypes.MONTH);
                    return (0, d.jsx)(p.Heading, {
                        variant: "heading-md/normal",
                        color: "always-white",
                        className: et.trialHeader,
                        children: 0 === i ? ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                            planName: (0, H.getTierDisplayName)(J.PREMIUM_SKU_TO_MONTHLY_PLAN[S?.sku_id ?? J.PremiumSubscriptionSKUs.NONE] ?? J.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                            duration: (0, H.formatIntervalDuration)({
                                intervalType: S?.interval ?? J.SubscriptionIntervalTypes.DAY,
                                intervalCount: S?.interval_count ?? 30,
                                capitalize: !1
                            }),
                            price: e
                        }) : (0, d.jsx)(eo, {
                            defaultPriceString: e,
                            subscriptionPlan: J.SubscriptionPlans.PREMIUM_MONTH_TIER_2
                        })
                    })
                }
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)($.default, {
                        subscriptionTier: _,
                        isGift: t,
                        className: m()(et.price, {
                            [et.priceStacked]: s && l,
                            [et.priceStackedSmallScreen]: s && !l
                        }),
                        variant: s ? "heading-lg/extrabold" : void 0
                    }), a && (0, d.jsx)($.default, {
                        subscriptionTier: _,
                        interval: J.SubscriptionIntervalTypes.YEAR,
                        isGift: t,
                        className: et.price
                    })]
                })
            }

            function ec() {
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(el, {
                        Icon: j.default,
                        text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, H.getMaxFileSizeForPremiumType)(J.PremiumTypes.TIER_0, {
                                useSpace: !1
                            })
                        })
                    }), (0, d.jsx)(el, {
                        Icon: N.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, d.jsx)(el, {
                        Icon: x.default,
                        text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                    }), (0, d.jsx)(el, {
                        Icon: y.default,
                        text: ee.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
                    })]
                })
            }

            function ed(e) {
                let {
                    showWumpus: t,
                    showBadge: r,
                    ctaButton: n,
                    showYearlyPrice: i,
                    className: a,
                    isGift: s = !1,
                    variant: l = 0,
                    isFullScreen: o
                } = e, u = (0, I.useStateFromStores)([h.default], () => h.default.getPremiumTypeSubscription()), c = (0, I.useStateFromStores)([M.default], () => M.default.getCurrentUser()), f = (0, z.usePremiumTrialOffer)(), _ = f?.subscription_trial?.sku_id, E = u?.trialId != null, C = u?.trialId != null ? c?.premiumType : null, T = null != _ || E, S = 1 === l;
                return (0, d.jsxs)("div", {
                    className: m()(et.card, a, {
                        [et.card]: !S,
                        [et.stackedCard]: S,
                        [et.withTier0Rim]: !s && T,
                        [et.withCardHover]: !s && T,
                        [et.tier0Stacked]: S,
                        [et.tier0]: !S
                    }),
                    children: [_ === J.PremiumSubscriptionSKUs.TIER_0 ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: et.topRimPill,
                            colorOptions: 0
                        }), (0, d.jsx)("div", {
                            className: et.rimGlowTier0
                        })]
                    }) : null, r && (0, d.jsx)(es, {
                        className: et.newCircleIcon
                    }), t ? (0, d.jsx)("div", {
                        className: et.wumpusImageContainer,
                        children: (0, d.jsx)(A.default, {
                            src: er,
                            mediaLayoutType: Q.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, s || _ !== J.PremiumSubscriptionSKUs.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: et.topRimPill,
                            colorOptions: 0
                        }), (0, d.jsx)("div", {
                            className: et.rimGlowTier0
                        })]
                    }), s || C !== J.PremiumTypes.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: et.topRimPill,
                            colorOptions: 0
                        }), (0, d.jsx)("div", {
                            className: et.rimGlowTier0
                        })]
                    }), (0, d.jsxs)("div", {
                        className: m()({
                            [et.body]: S && o,
                            [et.bodySmallScreen]: S && !o
                        }),
                        children: [(0, d.jsx)("div", {
                            className: m()({
                                [et.planContainer]: S && o,
                                [et.planContainerSmallScreen]: S && !o
                            }),
                            children: (0, d.jsxs)("div", {
                                className: m()({
                                    [et.subscriptionPlanInfo]: S
                                }),
                                children: [(0, d.jsx)(D.default, {
                                    className: m()({
                                        [et.title]: !S,
                                        [et.tier0Title]: !S,
                                        [et.tier0TitleStacked]: S && o,
                                        [et.tier0TitleStackedSmallScreen]: S && !o
                                    })
                                }), (0, d.jsx)(eu, {
                                    isGift: s,
                                    premiumTier: J.PremiumTypes.TIER_0,
                                    offerType: 0,
                                    offerTierMatchesCard: _ === J.PremiumSubscriptionSKUs.TIER_0,
                                    showYearlyPrice: i,
                                    isStacked: S,
                                    isFullScreen: o
                                })]
                            })
                        }), (0, d.jsxs)("div", {
                            className: m()({
                                [et.perkContainer]: S && o,
                                [et.perkContainerSmallScreen]: S && !o
                            }),
                            children: [(0, d.jsxs)("div", {
                                children: [S && (0, d.jsx)(p.Heading, {
                                    variant: "heading-xxl/extrabold",
                                    className: o ? et.stackedCardTitle : et.stackedCardTitleSmallScreen,
                                    children: ee.default.Messages.NITRO_MARKETING_JUST_THE_BASICS
                                }), (0, d.jsx)("div", {
                                    className: m()({
                                        [et.listItems]: S
                                    }),
                                    children: (0, d.jsx)(ec, {})
                                })]
                            }), S && n]
                        })]
                    }), !S && n, s || _ !== J.PremiumSubscriptionSKUs.TIER_0 ? null : (0, d.jsx)(X.ButtonSparkleGroup, {
                        tier: J.PremiumTypes.TIER_0
                    })]
                })
            }

            function ef(e) {
                let {
                    featureSet: t = 0,
                    isModal: r = !1,
                    isGift: n = !1
                } = e, i = (0, I.useStateFromStores)([g.default], () => g.default.locale), a = (0, I.useStateFromStores)([G.default], () => G.default.affinities), {
                    planSelectionEnabled: s
                } = B.default.useExperiment({
                    location: "planSelection"
                }, {
                    autoTrackExposure: !1
                }), l = r && !n && a.length > 0;
                l && B.default.trackExposure({
                    location: "planSelection"
                });
                if (1 === t) return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(el, {
                        Icon: b.default,
                        text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                            numBoosts: J.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            percentageOff: (0, w.formatPercent)(i, J.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, d.jsx)(el, {
                        Icon: j.default,
                        text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, H.getMaxFileSizeForPremiumType)(J.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, d.jsx)(el, {
                        Icon: N.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, d.jsx)(el, {
                        Icon: F.default,
                        text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, d.jsx)(el, {
                        Icon: U.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })]
                });
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(el, {
                        Icon: j.default,
                        text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, H.getMaxFileSizeForPremiumType)(J.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, d.jsx)(el, {
                        Icon: N.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, d.jsx)(el, {
                        Icon: x.default,
                        text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                    }), (0, d.jsx)(el, {
                        Icon: F.default,
                        text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, d.jsx)(el, {
                        Icon: b.default,
                        text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
                    }), (0, d.jsx)(el, {
                        Icon: U.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    }), s && l && (0, d.jsx)(q.default, {})]
                })
            }

            function em(e) {
                let t, {
                        showWumpus: r,
                        ctaButton: n,
                        showYearlyPrice: i,
                        featureSet: a = 0,
                        className: s,
                        isGift: l = !1,
                        isModal: o = !1,
                        variant: u = 0,
                        isFullScreen: c
                    } = e,
                    f = (0, I.useStateFromStores)([h.default], () => h.default.getPremiumTypeSubscription()),
                    _ = (0, I.useStateFromStores)([M.default], () => M.default.getCurrentUser()),
                    E = (0, z.usePremiumTrialOffer)(),
                    C = E?.subscription_trial?.sku_id,
                    P = f?.trialId != null ? _?.premiumType : null,
                    R = (0, K.useIsInPremiumOfferExperience)(),
                    L = (0, V.usePremiumDiscountOffer)(),
                    O = (0, K.useHasDiscountApplied)(),
                    g = null != C || null != P ? 0 : null != L || O ? 1 : null,
                    x = 1 === u,
                    U = (0, Z.useIsEligibleForBogoPromotion)(),
                    N = !l && R,
                    b = (0, Z.getBOGOPillCopy)(),
                    D = (0, T.isThemeLight)((0, S.default)()),
                    y = D && x ? 5 : 2;
                return N && !x ? t = et.rimGlowTier2 : N && x && !D && (t = et.rimGlowTier2Stacked), (0, d.jsxs)("div", {
                    className: m()(et.card, s, {
                        [et.withTier2Rim]: N && !x,
                        [et.withTier2RimStacked]: N && x,
                        [et.withCardHover]: N,
                        [et.tier2Stacked]: x,
                        [et.tier2]: !x
                    }),
                    children: [!l && null != L && (0, V.discountOfferHasTier)(L, J.PremiumSubscriptionSKUs.TIER_2) && void 0 !== L.discount.amount ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: O ? ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : ee.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                                percent: L.discount.amount
                            }),
                            className: et.topRimPill,
                            colorOptions: y
                        }), (0, d.jsx)("div", {
                            className: t
                        })]
                    }) : null, l || C !== J.PremiumSubscriptionSKUs.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: et.topRimPill,
                            colorOptions: y
                        }), (0, d.jsx)("div", {
                            className: t
                        })]
                    }), l || P !== J.PremiumTypes.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: et.topRimPill,
                            colorOptions: y
                        }), (0, d.jsx)("div", {
                            className: t
                        })]
                    }), !l && O && (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                            className: et.topRimPill,
                            colorOptions: y
                        }), (0, d.jsx)("div", {
                            className: t
                        })]
                    }), r ? (0, d.jsx)("div", {
                        className: et.wumpusImageContainer,
                        children: (0, d.jsx)(A.default, {
                            src: en,
                            mediaLayoutType: Q.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, (0, d.jsxs)("div", {
                        className: m()({
                            [et.body]: x && c,
                            [et.bodySmallScreen]: x && !c
                        }),
                        children: [(0, d.jsx)("div", {
                            className: m()({
                                [et.planContainer]: x && c,
                                [et.planContainerSmallScreen]: x && !c
                            }),
                            children: (0, d.jsxs)("div", {
                                className: m()({
                                    [et.subscriptionPlanInfo]: x
                                }),
                                children: [(0, d.jsx)(v.default, {
                                    className: m()({
                                        [et.title]: !x,
                                        [et.tier2Title]: !x,
                                        [et.tier2TitleStacked]: x && c,
                                        [et.tier2TitleStackedSmallScreen]: x && !c
                                    })
                                }), !l && C !== J.PremiumSubscriptionSKUs.TIER_2 && U && (0, d.jsx)(p.Text, {
                                    variant: "text-xs/bold",
                                    className: et.freeTrialPillInline,
                                    children: b
                                }), (0, d.jsx)(eu, {
                                    isGift: l,
                                    premiumTier: J.PremiumTypes.TIER_2,
                                    offerType: g,
                                    offerTierMatchesCard: C === J.PremiumSubscriptionSKUs.TIER_2 || (0, V.discountOfferHasTier)(L, J.PremiumSubscriptionSKUs.TIER_2),
                                    showYearlyPrice: i,
                                    isStacked: x,
                                    isFullScreen: c
                                })]
                            })
                        }), (0, d.jsxs)("div", {
                            className: m()({
                                [et.perkContainer]: x && c,
                                [et.perkContainerSmallScreen]: x && !c
                            }),
                            children: [(0, d.jsxs)("div", {
                                children: [x && (0, d.jsx)(p.Heading, {
                                    className: m()({
                                        [et.stackedCardTitle]: c,
                                        [et.stackedCardTitleSmallScreen]: !c
                                    }),
                                    variant: "heading-xxl/extrabold",
                                    children: ee.default.Messages.NITRO_MARKETING_CARDS_SUPERCHARGE_YOUR_DISCORD
                                }), (0, d.jsx)(ef, {
                                    featureSet: a,
                                    isModal: o,
                                    isGift: l
                                })]
                            }), x && (0, d.jsx)(Y.default, {
                                isStacked: x,
                                ctaButton: n,
                                isGift: l,
                                trialOfferTier: C,
                                discountOffer: L
                            })]
                        })]
                    }), !x && (0, d.jsx)(Y.default, {
                        isStacked: x,
                        ctaButton: n,
                        isGift: l,
                        trialOfferTier: C,
                        discountOffer: L
                    })]
                })
            }

            function e_(e) {
                let {
                    showWumpus: t,
                    showBadge: r,
                    tier0CTAButton: n,
                    tier2CTAButton: i,
                    className: a,
                    variant: s = 0,
                    selectedPremiumType: l,
                    isFullScreen: o
                } = e, {
                    AnalyticsLocationProvider: u
                } = (0, L.default)(R.default.PREMIUM_MARKETING_TIER_CARD), c = 1 === s, f = l === J.PremiumTypes.TIER_0, _ = (0, I.useStateFromStores)([P.default], () => P.default.useReducedMotion);
                return (0, d.jsx)(u, {
                    children: (0, d.jsxs)("div", {
                        className: m()({
                            [et.premiumCards]: !c,
                            [et.premiumCardsStackedVariant]: c && o,
                            [et.premiumCardsStackedVariantSmallScreen]: c && !o
                        }, a),
                        children: [(0, d.jsx)(ed, {
                            className: m()({
                                [et.tierCardFocused]: c && f,
                                [et.tierCardHidden]: c && !f,
                                [et.tierCardAnimation]: c && !_
                            }),
                            showWumpus: t,
                            showBadge: r,
                            ctaButton: n,
                            variant: s,
                            isFullScreen: o
                        }), (0, d.jsx)(em, {
                            className: m()({
                                [et.tierCardFocused]: c && !f,
                                [et.tierCardHidden]: c && f,
                                [et.tierCardAnimation]: c && !_
                            }),
                            showWumpus: t,
                            ctaButton: i,
                            variant: s,
                            isFullScreen: o
                        })]
                    })
                })
            }(n = l || (l = {}))[n.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", n[n.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", n[n.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", n[n.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", n[n.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", n[n.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (i = o || (o = {}))[i.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", i[i.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (a = u || (u = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.BOOSTING = 1] = "BOOSTING", (s = c || (c = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.STACKED = 1] = "STACKED"
        },
        579093: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("803997"),
                a = r.n(i),
                s = r("661223"),
                l = r("974328"),
                o = r("643847"),
                u = r("488867"),
                c = r("171168"),
                d = r("632201"),
                f = function(e) {
                    let {
                        subscriptionTier: t,
                        interval: r = c.SubscriptionIntervalTypes.MONTH,
                        className: i,
                        isGift: f = !1,
                        variant: m
                    } = e;
                    if (!(0, s.useStateFromStores)([o.default], () => o.default.isLoadedForPremiumSKUs())) return (0, n.jsx)(l.Spinner, {
                        type: l.Spinner.Type.PULSING_ELLIPSIS,
                        className: d.priceSpinner
                    });
                    let _ = o.default.getForSkuAndInterval(t, r),
                        E = null != _ ? (0, u.getFormattedPriceForPlan)(_, void 0, !1, f) : null;
                    return (0, n.jsxs)(l.Heading, {
                        color: "always-white",
                        variant: m ?? "heading-md/medium",
                        className: a()(d.pricePerInterval, i),
                        children: [(0, n.jsx)("span", {
                            className: d.price,
                            children: E
                        }), " / ", (0, u.getIntervalStringAsNoun)(r)]
                    })
                }
        },
        881343: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ButtonSparkleGroup: function() {
                    return E
                },
                PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID: function() {
                    return d
                },
                PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID: function() {
                    return f
                },
                SparkleGroupLeft: function() {
                    return m
                },
                SparkleGroupRight: function() {
                    return _
                },
                SparkleStar: function() {
                    return I
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("803997"),
                a = r.n(i),
                s = r("24135"),
                l = r("960099"),
                o = r("262113"),
                u = r("171168"),
                c = r("885519");
            let d = "premium_new_tier_2_gradient",
                f = "premium_old_tier_2_gradient",
                m = e => {
                    let {
                        width: t = 28,
                        height: r = 53,
                        color: i,
                        foreground: a,
                        wrapperStyle: s,
                        ...l
                    } = e, u = `sparkle-gradient-${Math.random().toString(36).substring(2,15)}`;
                    return (0, n.jsx)("div", {
                        className: s,
                        children: (0, n.jsxs)("svg", {
                            ...(0, o.default)({
                                ...l
                            }),
                            width: t,
                            height: r,
                            viewBox: "0 0 28 53",
                            className: a,
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, n.jsx)("defs", {
                                children: (0, n.jsxs)("linearGradient", {
                                    id: u,
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [(0, n.jsx)("stop", {
                                        stopColor: "#B473F5"
                                    }), (0, n.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#E292AA"
                                    })]
                                })
                            }), (0, n.jsx)("path", {
                                d: "M19.1626 48.3974L21.7394 49.4231C21.7943 49.4744 21.7943 49.5256 21.7394 49.5256L19.1626 50.6026L18.0112 52.9615C18.0112 53.0128 17.9564 53.0128 17.9015 52.9615L16.805 50.6026H16.7502L14.2281 49.5256C14.1733 49.5256 14.1733 49.4744 14.2281 49.4231L16.7502 48.3974H16.805L17.9015 46.0385C17.9564 45.9872 18.0112 45.9872 18.0112 46.0385L19.1626 48.3974Z",
                                fill: i ?? `url(#${u})`
                            }), (0, n.jsx)("path", {
                                d: "M26.5697 14.865C25.3611 15.6925 24.3322 16.7831 23.5512 18.0645C22.7702 19.3459 22.2549 20.7888 22.0395 22.2975L21.3147 27.5515C21.2999 27.676 21.2426 27.7905 21.1535 27.8732C21.0644 27.9558 20.9498 28.001 20.8315 28C20.7131 28.001 20.5986 27.9558 20.5095 27.8732C20.4204 27.7905 20.3631 27.676 20.3483 27.5515L19.5631 22.2975C19.3591 20.7849 18.8485 19.3373 18.0665 18.0542C17.2844 16.771 16.2495 15.683 15.0329 14.865L14.3685 14.4165C14.3092 14.3603 14.2623 14.291 14.231 14.2136C14.1997 14.1361 14.1847 14.0522 14.1873 13.968C14.1847 13.8929 14.2 13.8184 14.2316 13.7512C14.2633 13.6841 14.3104 13.6264 14.3685 13.5835L15.0329 13.135C16.2512 12.3038 17.2863 11.2039 18.068 9.91036C18.8497 8.61677 19.3597 7.15977 19.5631 5.63845L20.3483 0.44853C20.3631 0.323971 20.4204 0.209499 20.5095 0.126827C20.5986 0.044157 20.7131 -0.000967026 20.8315 1.71661e-05C20.9498 -0.000967026 21.0644 0.044157 21.1535 0.126827C21.2426 0.209499 21.2999 0.323971 21.3147 0.44853L22.0395 5.63845C22.2542 7.15601 22.7687 8.60832 23.5494 9.90022C24.3301 11.1921 25.3594 12.2945 26.5697 13.135L27.2341 13.5835C27.2999 13.6231 27.3561 13.6785 27.3981 13.7452C27.44 13.812 27.4666 13.8883 27.4757 13.968C27.467 14.0564 27.441 14.142 27.3994 14.2192C27.3578 14.2964 27.3015 14.3636 27.2341 14.4165L26.5697 14.865Z",
                                fill: i ?? `url(#${u})`
                            }), (0, n.jsx)("path", {
                                d: "M8.70724 31.8901L13.2167 30.1319C13.3127 30.044 13.3127 29.9561 13.2167 29.9561L8.70724 28.1099L6.6923 24.0659C6.6923 23.978 6.59634 23.978 6.5004 24.0659L4.58145 28.1099H4.48552L0.0719606 29.9561C-0.0239869 29.9561 -0.0239869 30.044 0.0719606 30.1319L4.48552 31.8901H4.58145L6.5004 35.9341C6.59634 36.022 6.6923 36.022 6.6923 35.9341L8.70724 31.8901Z",
                                fill: i ?? `url(#${u})`
                            })]
                        })
                    })
                },
                _ = e => {
                    let {
                        width: t = 21,
                        height: r = 22,
                        color: i,
                        wrapperStyle: a
                    } = e, s = `sparkle-gradient-${Math.random().toString(36).substring(2,15)}`;
                    return (0, n.jsx)("div", {
                        className: a,
                        children: (0, n.jsxs)("svg", {
                            width: t,
                            height: r,
                            viewBox: "0 0 21 22",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, n.jsx)("defs", {
                                children: (0, n.jsxs)("linearGradient", {
                                    id: s,
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [(0, n.jsx)("stop", {
                                        stopColor: "#B473F5"
                                    }), (0, n.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#E292AA"
                                    })]
                                })
                            }), (0, n.jsx)("path", {
                                d: "M17.8554 2.39744L20.4323 3.42308C20.4871 3.47436 20.4871 3.52563 20.4323 3.52563L17.8554 4.60256L16.7041 6.96154C16.7041 7.01282 16.6492 7.01282 16.5944 6.96154L15.4979 4.60256H15.443L12.921 3.52563C12.8662 3.52563 12.8662 3.47436 12.921 3.42308L15.443 2.39744H15.4979L16.5944 0.0384612C16.6492 -0.0128207 16.7041 -0.0128207 16.7041 0.0384612L17.8554 2.39744Z",
                                fill: i ?? `url(#${s})`
                            }), (0, n.jsx)("path", {
                                d: "M8.62582 14.7674L12.8132 16.3791C12.9023 16.4597 12.9023 16.5403 12.8132 16.5403L8.62582 18.2326L6.75481 21.9396C6.75481 22.0201 6.6657 22.0201 6.57661 21.9396L4.79473 18.2326H4.70566L0.607348 16.5403C0.518254 16.5403 0.518254 16.4597 0.607348 16.3791L4.70566 14.7674H4.79473L6.57661 11.0604C6.6657 10.9799 6.75481 10.9799 6.75481 11.0604L8.62582 14.7674Z",
                                fill: i ?? `url(#${s})`
                            })]
                        })
                    })
                };

            function E(e) {
                let {
                    tier: t = u.PremiumTypes.TIER_2
                } = e, r = (0, l.default)(), i = (0, s.isThemeLight)(r);
                return (0, n.jsxs)(n.Fragment, {
                    children: [!i && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: a()(c.rimGlowVertical, {
                                [c.rimGlowVerticalTier0]: t === u.PremiumTypes.TIER_0,
                                [c.rimGlowVerticalTier2]: t === u.PremiumTypes.TIER_2
                            })
                        }), (0, n.jsx)(I, {
                            foreground: c.buttonSparkleStar1
                        })]
                    }), (0, n.jsx)(I, {
                        foreground: c.buttonSparkleStar2
                    }), (0, n.jsx)(I, {
                        foreground: c.buttonSparkleStar3
                    }), (0, n.jsx)(I, {
                        foreground: c.buttonSparkleStar4
                    }), (0, n.jsx)(I, {
                        foreground: c.buttonSparkleStar5
                    })]
                })
            }

            function I(e) {
                let {
                    width: t = 14,
                    height: r = 13,
                    color: i = "white",
                    foreground: a,
                    ...s
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, o.default)({
                        ...s
                    }),
                    preserveAspectRatio: "none",
                    width: t,
                    height: r,
                    viewBox: "0 0 14 13",
                    className: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsxs)("defs", {
                        children: [(0, n.jsxs)("linearGradient", {
                            id: d,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, n.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#8547C6"
                            }), (0, n.jsx)("stop", {
                                offset: "50%",
                                stopColor: "#B845C1"
                            }), (0, n.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#AB5D8A"
                            })]
                        }), (0, n.jsxs)("linearGradient", {
                            id: f,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, n.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#B473F5"
                            }), (0, n.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#E292AA"
                            })]
                        })]
                    }), (0, n.jsx)("path", {
                        d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
                        fill: i
                    })]
                })
            }
        },
        85359: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return m
                }
            });
            var n = r("735250"),
                i = r("470079"),
                a = r("803997"),
                s = r.n(a),
                l = r("661223"),
                o = r("974328"),
                u = r("879046"),
                c = r("468385"),
                d = r("30175"),
                f = r("757349");

            function m() {
                let e = (0, l.useStateFromStores)([c.default], () => c.default.affinities.slice(0, 3)),
                    t = e[0],
                    {
                        avatarSrc: r,
                        eventHandlers: a
                    } = (0, u.default)({
                        user: t,
                        size: o.AvatarSizes.SIZE_24,
                        animateOnHover: !0
                    }),
                    m = e => null != e.globalName ? e.globalName : e.username,
                    _ = i.useMemo(() => e.length >= 2 ? d.default.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
                        username: m(e[0])
                    }) : 1 === e.length ? d.default.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
                        username: m(e[0])
                    }) : "", [e]);
                return 0 === e.length ? null : (0, n.jsxs)("div", {
                    className: f.container,
                    children: [(0, n.jsx)(o.Avatar, {
                        className: f.icon,
                        src: r,
                        "aria-label": t.username,
                        size: o.AvatarSizes.SIZE_24,
                        ...a
                    }), (0, n.jsx)(o.Text, {
                        className: s()(f.text),
                        variant: "text-sm/normal",
                        color: "always-white",
                        children: _
                    })]
                })
            }
        },
        547783: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return P
                }
            });
            var n = r("735250"),
                i = r("470079"),
                a = r("803997"),
                s = r.n(a),
                l = r("661223"),
                o = r("974328"),
                u = r("601763"),
                c = r("871831"),
                d = r("158619"),
                f = r("488867"),
                m = r("986656"),
                _ = r("404627"),
                E = r("624191"),
                I = r("171168"),
                C = r("467006"),
                T = r("822645"),
                p = r("30175"),
                S = r("671666");

            function P(e) {
                let t, {
                        onClose: r,
                        fileSize: a,
                        ...P
                    } = e,
                    R = null != a && I.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < a,
                    {
                        isLoading: L,
                        suggestedPremiumType: O
                    } = (0, _.default)({
                        autoTrackExposure: !R,
                        experiment: m.default,
                        location: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
                    }),
                    g = !R && O === I.PremiumTypes.TIER_0,
                    M = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
                    h = (0, n.jsx)(u.default, {
                        icons: T.DEFAULT_FILE_UPLOAD_ICONS
                    });
                t = g ? p.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, f.getPremiumTypeDisplayName)(I.PremiumTypes.TIER_0),
                    premiumMaxSize: p.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                let A = i.useMemo(() => {
                        let e = f.default.getUserMaxFileSize(M),
                            t = (0, d.formatSize)(e / 1024, {
                                useKibibytes: !0
                            }),
                            r = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (M?.premiumType) {
                            case I.PremiumTypes.TIER_0:
                                r = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case I.PremiumTypes.TIER_1:
                                r = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return r
                    }, [M]),
                    x = (0, n.jsxs)("div", {
                        className: S.body,
                        children: [(0, n.jsx)("span", {
                            children: A
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, n.jsx)(E.default, {
                    artElement: h,
                    artContainerClassName: s()(S.artContainer),
                    enableArtBoxShadow: !1,
                    type: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
                    title: p.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: x,
                    context: p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: p.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: C.AnalyticsSections.FILE_UPLOAD_POPOUT
                    },
                    onClose: r,
                    subscriptionTier: g ? I.PremiumSubscriptionSKUs.TIER_0 : I.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: L,
                    ...P
                })
            }
        },
        624191: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return L
                }
            });
            var n = r("735250"),
                i = r("470079"),
                a = r("803997"),
                s = r.n(a),
                l = r("974328"),
                o = r("495157"),
                u = r("986821"),
                c = r("620871"),
                d = r("328470"),
                f = r("488867"),
                m = r("392874"),
                _ = r("459992"),
                E = r("921011"),
                I = r("749911"),
                C = r("650742"),
                T = r("171168"),
                p = r("467006"),
                S = r("30175"),
                P = r("262109"),
                R = r("769860");

            function L(e) {
                let {
                    title: t,
                    type: r,
                    guildBoostProps: a,
                    analyticsSource: L,
                    analyticsLocation: O,
                    body: g,
                    context: M,
                    glowUp: h,
                    modalClassName: A,
                    artContainerClassName: x,
                    bodyClassName: U,
                    transitionState: N,
                    onClose: b,
                    onSubscribeClick: v,
                    onSecondaryClick: D,
                    secondaryCTA: y,
                    subscribeButtonText: F,
                    showNewBadge: j = !1,
                    enableArtBoxShadow: k = !0,
                    subscriptionTier: w = T.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: H = !1,
                    hideBackButton: B,
                    backButtonText: G,
                    ...K
                } = e, V = null != a, z = (0, E.usePremiumTrialOffer)(), W = (0, _.usePremiumDiscountOffer)(), Z = (z?.subscription_trial?.sku_id === w || (0, _.discountOfferHasTier)(W, w)) && !V, {
                    analyticsLocations: Y
                } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL), {
                    enabled: $,
                    variant: X
                } = m.default.useExperiment({
                    location: "PremiumUpsellModal"
                }, {
                    autoTrackExposure: !1
                }), q = $ && r === T.PremiumUpsellTypes.STREAM_QUALITY_UPSELL, J = q && m.GradientVariants.includes(X);
                i.useEffect(() => {
                    !H && (V ? d.default.track(p.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: `${r} - Tier ${a.boostedGuildTier}`,
                        guild_id: a.guild.id,
                        channel_id: a.channelId,
                        location: O,
                        location_stack: Y
                    }) : d.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: r,
                        source: L,
                        location: O,
                        location_stack: Y,
                        sku_id: w
                    }))
                }, [V, w, H]);
                let Q = k ? s()(P.artContainer, P.artContainerBoxShadow, x) : s()(P.artContainer, x),
                    ee = null;
                return ee = "artURL" in K ? (0, n.jsx)("img", {
                    className: P.art,
                    alt: "",
                    src: K.artURL
                }) : K.artElement, (0, n.jsxs)(l.ModalRoot, {
                    className: s()(P.root, A),
                    "aria-label": t,
                    transitionState: N,
                    children: [(0, n.jsxs)("div", {
                        className: Q,
                        children: [ee, j ? (0, n.jsx)("img", {
                            className: P.sparkleBadge,
                            alt: "",
                            src: R
                        }) : null]
                    }), q ? (0, n.jsx)(l.ModalCloseButton, {
                        onClick: b,
                        className: P.closeButton
                    }) : null, (0, n.jsx)(l.ModalContent, {
                        className: P.content,
                        children: H ? (0, n.jsx)(l.Spinner, {}) : (0, n.jsx)(n.Fragment, {
                            children: Z ? (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)(I.default, {
                                    onClose: b,
                                    type: r,
                                    subscriptionTier: z?.subscription_trial?.sku_id ?? T.PremiumSubscriptionSKUs.TIER_2,
                                    headingText: t,
                                    context: M,
                                    analyticsLocationObject: O,
                                    discountOffer: W,
                                    trialOffer: z,
                                    children: h
                                })
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(l.Heading, {
                                    className: s()(P.header, {
                                        [P.enhancedHeader]: q
                                    }),
                                    variant: "heading-xl/semibold",
                                    children: t
                                }), (0, n.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    className: s()(U),
                                    children: g
                                })]
                            })
                        })
                    }), (0, n.jsxs)(l.ModalFooter, {
                        className: s()(P.footer, {
                            [P.enhancedFooter]: q
                        }),
                        children: [(0, n.jsxs)("div", {
                            className: s()(P.primaryActions, {
                                [P.enhancedPrimaryActions]: q
                            }),
                            children: [null != y ? (0, n.jsx)(l.Button, {
                                className: s()(P.secondaryAction, {
                                    [P.enhancedSecondaryAction]: J
                                }),
                                onClick: D,
                                size: l.Button.Sizes.SMALL,
                                color: J ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: y
                            }) : null, (() => {
                                let e;
                                if (V) return (0, n.jsx)(c.default, {
                                    analyticsLocation: O,
                                    guild: a.guild,
                                    onClose: b
                                });
                                let t = q ? S.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                                return Z && (null != z ? (t = (0, f.formatTrialCtaIntervalDuration)({
                                    intervalType: z?.subscription_trial?.interval,
                                    intervalCount: z?.subscription_trial?.interval_count
                                }), e = z?.trial_id) : null != W && (t = S.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                    percent: W.discount.amount
                                }))), (0, n.jsx)(C.default, {
                                    className: s()({
                                        [P.getNitroCTA]: J
                                    }),
                                    premiumModalAnalyticsLocation: O,
                                    subscriptionTier: w,
                                    trialId: e,
                                    size: l.Button.Sizes.SMALL,
                                    color: J ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
                                    onClick: () => {
                                        v?.(), b()
                                    },
                                    buttonText: F ?? t
                                })
                            })()]
                        }), !B && !q && (0, n.jsx)(l.Button, {
                            onClick: b,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: null != G ? G : S.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        513094: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                maybeOpenProfilePreviewModal: function() {
                    return i
                }
            });
            var n = r("312916");

            function i(e) {
                let {
                    imageSrc: t,
                    file: r,
                    uploadType: i,
                    guildId: a,
                    isTryItOutFlow: s = !1
                } = e;
                n.default.dispatch({
                    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                    imageSrc: t,
                    file: r,
                    uploadType: i,
                    guildId: a,
                    isTryItOutFlow: s
                })
            }
        },
        60495: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MAX_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return n
                }
            });
            let n = 10485760
        },
        802390: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getPreviewAvatar: function() {
                    return E
                },
                getPreviewDisplayName: function() {
                    return C
                },
                getPreviewNickname: function() {
                    return I
                },
                handleOpenSelectImageModal: function() {
                    return m
                },
                isColorDark: function() {
                    return T
                },
                showFileSizeErrorModal: function() {
                    return _
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("148817"),
                a = r("974328"),
                s = r("736587"),
                l = r("204606"),
                o = r("10357"),
                u = r("513094"),
                c = r("60495"),
                d = r("274532"),
                f = r("30175");

            function m(e, t, i, s) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await r.el("802390@825:881").then(r.bind(r, "326390"));
                    return r => (0, n.jsx)(a, {
                        filters: s,
                        maxFileSizeBytes: c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: e === d.UploadTypes.BANNER && f.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                        onComplete: (r, n) => (0, u.maybeOpenProfilePreviewModal)({
                            imageSrc: r,
                            file: n,
                            uploadType: e,
                            guildId: t,
                            isTryItOutFlow: i
                        }),
                        uploadType: e,
                        showUpsellHeader: !0,
                        ...r
                    })
                })
            }

            function _() {
                (0, s.openUploadError)({
                    title: f.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: f.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, o.sizeString)(c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
                    })
                })
            }

            function E(e, t, r) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != e) return e;
                let {
                    size: i = 80,
                    canAnimate: a = !0
                } = n, s = null === e;
                return s && null == t ? l.default.getDefaultAvatarURL(r.id, r.discriminator) : s || t?.avatar == null ? r.getAvatarURL(void 0, i, a) : r.getAvatarURL(t?.guildId, i, a)
            }

            function I(e, t) {
                return "" === e ? null : e ?? t
            }

            function C(e, t) {
                return "" === e ? null : e ?? t
            }

            function T(e) {
                return (null != e ? (0, i.getDarkness)(e) : 1) > .25
            }
        },
        213952: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                thumbHashToRGBA: function() {
                    return i
                }
            }), r("653041"), r("268111"), r("941497"), r("744285"), r("492257"), r("873817");
            var n = r("788900");

            function i(e) {
                let {
                    detail: t = 1,
                    pop: r = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: i,
                    min: a,
                    max: s,
                    cos: l,
                    round: o
                } = Math, u = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & u) / 63, f = (u >> 6 & 63) / 31.5 - 1, m = (u >> 12 & 63) / 31.5 - 1, _ = u >> 23, E = c >> 15, I = s(3, E ? _ ? 5 : 7 : 7 & c), C = s(3, E ? 7 & c : _ ? 5 : 7), T = _ ? (15 & e[5]) / 15 : 1, p = (e[5] >> 4) / 15, S = _ ? 6 : 5, P = 0, R = (t, r, n) => {
                    let i = [];
                    for (let a = 0; a < r; a++)
                        for (let s = a ? 0 : 1; s * r < t * (r - a); s++) i.push(((e[S + (P >> 1)] >> ((1 & P++) << 2) & 15) / 7.5 - 1) * n);
                    return i
                }, L = R(I, C, (u >> 18 & 31) / 31 / 2), O = R(3, 3, (c >> 3 & 63) / 63 * r), g = R(3, 3, (c >> 9 & 63) / 63 * r), M = _ ? R(5, 5, p) : [], h = (0, n.thumbHashToApproximateAspectRatio)(e), A = o(h > 1 ? 32 : 32 * h), x = o(h > 1 ? 32 / h : 32), U = new Uint8Array(A * x * 4), N = [], b = [];
                for (let e = 0, r = 0; e < x; e++)
                    for (let n = 0; n < A; n++, r += 4) {
                        let o = d,
                            u = f,
                            c = m,
                            E = T;
                        for (let e = 0, t = s(I, _ ? 5 : 3); e < t; e++) N[e] = l(i / A * (n + .5) * e);
                        for (let t = 0, r = s(C, _ ? 5 : 3); t < r; t++) b[t] = l(i / x * (e + .5) * t);
                        for (let e = 0, r = 0; e < C; e++)
                            for (let n = e ? 0 : 1, i = 2 * b[e]; n * C < I * (C - e); n++, r++) !(n > t) && !(e > t) && (o += L[r] * N[n] * i);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let r = e ? 0 : 1, n = 2 * b[e]; r < 3 - e; r++, t++) {
                                let e = N[r] * n;
                                u += O[t] * e, c += g[t] * e
                            }
                        if (_)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let r = e ? 0 : 1, n = 2 * b[e]; r < 5 - e; r++, t++) E += M[t] * N[r] * n;
                        let p = o - 2 / 3 * u,
                            S = (3 * o - p + c) / 2,
                            P = S - c;
                        U[r] = s(0, 255 * a(1, S)), U[r + 1] = s(0, 255 * a(1, P)), U[r + 2] = s(0, 255 * a(1, p)), U[r + 3] = s(0, 255 * a(1, E))
                    }
                return {
                    w: A,
                    h: x,
                    rgba: U
                }
            }
        },
        463451: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var n = r("470079"),
                i = r("203959"),
                a = r("23419"),
                s = r("513462"),
                l = r("613352"),
                o = r("361733"),
                u = r("801856"),
                c = r("871831"),
                d = r("246619"),
                f = e => {
                    let {
                        isTryItOut: t,
                        analyticsLocations: r,
                        guildId: f
                    } = e, m = (0, i.default)([c.default], () => c.default.getCurrentUser()), _ = (0, i.default)([o.default], () => null != f && null != m ? o.default.getMember(f, m.id) : null), E = null != _ ? _.avatarDecoration : m?.avatarDecoration, I = (0, a.default)(r), {
                        pendingAvatar: C,
                        pendingAvatarDecoration: T,
                        pendingErrors: p
                    } = (0, i.useStateFromStoresObject)([u.default, s.default], () => ({
                        pendingAvatar: t ? u.default.getTryItOutAvatar() : null != f ? s.default.getPendingAvatar() : u.default.getPendingAvatar(),
                        pendingAvatarDecoration: t ? u.default.getTryItOutAvatarDecoration() : null != f ? s.default.getPendingAvatarDecoration() : u.default.getPendingAvatarDecoration(),
                        pendingErrors: null != f ? s.default.getErrors().avatarDecoration : u.default.getErrors().avatarDecoration
                    })), S = (0, n.useCallback)(e => (0, l.setNewPendingAvatar)(e, m?.avatar), [m?.avatar]), P = (0, n.useCallback)(e => {
                        (0, l.setNewPendingAvatarDecoration)(f, e), null != e && I(e)
                    }, [I, f]);
                    return {
                        pendingAvatar: C,
                        pendingAvatarDecoration: T,
                        setPendingAvatar: t ? d.setTryItOutAvatar : S,
                        setPendingAvatarDecoration: t ? d.setTryItOutAvatarDecoration : P,
                        savedAvatarDecoration: E,
                        pendingErrors: p
                    }
                }
        },
        879046: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("470079"),
                i = r("974328"),
                a = r("796538"),
                s = r("940213"),
                l = r("975846");

            function o(e) {
                let {
                    user: t,
                    guildId: r,
                    size: o,
                    showPending: u = !1,
                    showTryItOut: c = !1,
                    animateOnHover: d = !1,
                    avatarDecorationOverride: f,
                    avatarOverride: m
                } = e, {
                    avatarSrc: _,
                    isAvatarAnimating: E,
                    eventHandlers: I
                } = (0, l.useAnimatedAvatarSrc)({
                    user: t,
                    guildId: r,
                    size: (0, i.getAvatarSize)(o),
                    showPending: u,
                    animateOnHover: d,
                    avatarOverride: m
                }), {
                    avatarPlaceholderSrc: C,
                    avatarDecorationSrc: T,
                    eventHandlers: p
                } = (0, s.default)({
                    user: t,
                    guildId: null != r ? r : void 0,
                    size: (0, a.getDecorationSizeForAvatarSize)(o),
                    showPending: u,
                    animateOnHover: d,
                    avatarDecorationOverride: f,
                    showTryItOut: c
                }), S = n.useCallback(() => {
                    I.onMouseEnter(), p.onMouseEnter()
                }, [I, p]);
                return {
                    avatarPlaceholderSrc: C,
                    avatarDecorationSrc: T,
                    avatarSrc: _,
                    isAnimating: E,
                    eventHandlers: {
                        onMouseEnter: S,
                        onMouseLeave: n.useCallback(() => {
                            I.onMouseLeave(), p.onMouseLeave()
                        }, [I, p])
                    }
                }
            }
        },
        975846: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useAnimatedAvatarSrc: function() {
                    return c
                }
            });
            var n = r("470079"),
                i = r("661223"),
                a = r("329420"),
                s = r("802390"),
                l = r("361733"),
                o = r("470526"),
                u = r("463451");

            function c(e) {
                let {
                    user: t,
                    guildId: r,
                    size: c,
                    showPending: d = !1,
                    animateOnHover: f = !1,
                    avatarOverride: m
                } = e, [_, E] = n.useState(!1), I = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion), C = (0, i.useStateFromStores)([o.default], () => o.default.isFocused()) && (_ || !I && !f), {
                    pendingAvatar: T
                } = (0, u.default)({}), p = (0, i.useStateFromStores)([l.default], () => null != r && null != t ? l.default.getMember(r, t.id) : null), S = n.useMemo(() => null != t ? (0, s.getPreviewAvatar)(d ? m ?? T : void 0, p, t, {
                    canAnimate: C,
                    size: c
                }) : void 0, [d, T, p, t, C, c, m]), P = n.useCallback(() => E(!0), []);
                return {
                    avatarSrc: S,
                    isAvatarAnimating: C,
                    eventHandlers: {
                        onMouseEnter: P,
                        onMouseLeave: n.useCallback(() => E(!1), [])
                    }
                }
            }
        },
        446426: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return S
                }
            });
            var n = r("735250"),
                i = r("470079"),
                a = r("803997"),
                s = r.n(a),
                l = r("24135"),
                o = r("974328"),
                u = r("960099"),
                c = r("455784"),
                d = r("495366"),
                f = r("156346"),
                m = r("958649"),
                _ = r("406639"),
                E = r("467006"),
                I = r("30175"),
                C = r("347405"),
                T = r("167969"),
                p = r("557256");
            class S extends i.PureComponent {
                static #e = this.defaultProps = {
                    readyState: E.ImageReadyStates.READY,
                    zoomable: !0,
                    children: e => {
                        let {
                            src: t,
                            size: r,
                            alt: i,
                            className: a,
                            mediaLayoutType: s
                        } = e;
                        return (0, n.jsx)("img", {
                            className: a ?? void 0,
                            alt: i ?? I.default.Messages.IMAGE,
                            src: t,
                            style: R(r, s)
                        })
                    },
                    minWidth: 0,
                    minHeight: 0
                };
                render() {
                    let e;
                    let {
                        className: t,
                        imageClassName: r,
                        readyState: i,
                        src: a,
                        placeholder: l,
                        placeholderVersion: u,
                        alt: f,
                        width: T,
                        height: p,
                        maxWidth: S = T,
                        maxHeight: L = p,
                        minWidth: O,
                        minHeight: g,
                        mediaLayoutType: M,
                        limitResponsiveWidth: h = !0,
                        accessory: A,
                        zoomable: x,
                        original: U,
                        children: N,
                        renderAccessory: b,
                        onClick: v,
                        tabIndex: D,
                        useFullWidth: y = !1,
                        ...F
                    } = this.props;
                    if (1 === T && 1 === p) return null;
                    let j = (0, d.fit)({
                            width: T,
                            height: p,
                            maxWidth: S,
                            maxHeight: L,
                            minWidth: O,
                            minHeight: g
                        }),
                        k = 0 !== j.width ? j.width / j.height : 1;
                    null != a && i !== E.ImageReadyStates.ERROR ? e = N({
                        src: a,
                        size: j,
                        alt: f,
                        className: r,
                        mediaLayoutType: M
                    }) : i !== E.ImageReadyStates.LOADING && (e = (0, n.jsx)(P, {
                        size: j,
                        mediaLayoutType: M,
                        alt: f
                    })), e = (0, n.jsx)(m.ImageLoadingOverlay, {
                        readyState: i,
                        aspectRatio: k,
                        placeholder: l,
                        placeholderVersion: u,
                        placeholderStyle: R(j, M),
                        children: e
                    });
                    let w = null != b ? b() : null;
                    return w = w ?? A, (0, n.jsx)(o.FocusRing, {
                        ringTarget: this._containerRef,
                        focusTarget: this._clickableRef,
                        children: (0, n.jsxs)("div", {
                            className: s()(C.imageWrapper, {
                                [C.imageZoom]: x,
                                [C.imageWrapperBackground]: i !== E.ImageReadyStates.READY,
                                [C.clickable]: null != v
                            }, t),
                            style: function(e, t, r, n) {
                                return n === _.MediaLayoutType.MOSAIC ? {
                                    display: "block",
                                    maxHeight: "inherit",
                                    margin: "auto",
                                    width: !r && e.width <= _.MEDIA_MOSAIC_MAX_WIDTH ? e.width : "100%",
                                    height: "100%"
                                } : n === _.MediaLayoutType.RESPONSIVE ? {
                                    maxWidth: t ? e.width : void 0,
                                    width: "100%",
                                    aspectRatio: `${e.width} / ${e.height}`
                                } : e
                            }(j, h, y, M),
                            ...F,
                            children: [null != U && (0, n.jsx)("a", {
                                tabIndex: -1,
                                onClick: v,
                                "aria-hidden": !0,
                                className: C.originalLink,
                                href: U,
                                ref: this._containerRef,
                                "data-role": "img",
                                "data-safe-src": a
                            }), null != v ? (0, n.jsx)(o.Clickable, {
                                className: C.clickableWrapper,
                                tabIndex: D ?? 0,
                                onClick: v,
                                "aria-label": f ?? I.default.Messages.IMAGE,
                                "aria-describedby": c.IMAGE_OPEN_DIALOG_DESCRIPTION,
                                innerRef: this._clickableRef,
                                focusProps: {
                                    enabled: !1
                                },
                                children: e
                            }) : e, null != w ? (0, n.jsx)("div", {
                                className: C.imageAccessory,
                                children: w
                            }) : null]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._containerRef = i.createRef(), this._clickableRef = i.createRef()
                }
            }

            function P(e) {
                let {
                    size: t,
                    mediaLayoutType: r,
                    alt: i
                } = e, a = (0, u.default)();
                return (0, n.jsx)("div", {
                    className: C.imageErrorWrapper,
                    style: function(e, t) {
                        switch (t) {
                            case _.MediaLayoutType.MOSAIC:
                                return {
                                    width: "100%", height: "100%", aspectRatio: `${e.width} / ${e.height}`, display: "flex", maxHeight: "inherit"
                                };
                            case _.MediaLayoutType.RESPONSIVE:
                                return {
                                    ...L(e), display: "flex"
                                };
                            default:
                                return e
                        }
                    }(t, r),
                    children: (0, n.jsx)("img", {
                        src: (0, l.isThemeLight)(a) ? p : T,
                        className: C.imageError,
                        alt: i ?? I.default.Messages.IMAGE
                    })
                })
            }

            function R(e, t) {
                switch (t) {
                    case _.MediaLayoutType.MOSAIC:
                        return {
                            display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, f.default)() ? "calc(100% + 1px)" : "100%"
                        };
                    case _.MediaLayoutType.RESPONSIVE:
                        return L(e);
                    default:
                        return e
                }
            }

            function L(e) {
                let {
                    width: t,
                    height: r
                } = e;
                return {
                    maxWidth: t,
                    maxHeight: r,
                    width: "100%",
                    display: "block",
                    aspectRatio: `${t} / ${r}`
                }
            }
        },
        958649: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ImageLoadingOverlay: function() {
                    return _
                }
            }), r("268111"), r("941497"), r("744285"), r("492257"), r("873817"), r("642549");
            var n = r("735250"),
                i = r("470079"),
                a = r("21840"),
                s = r("788900"),
                l = r("974328"),
                o = r("213952"),
                u = r("467006"),
                c = r("347405");
            let d = {
                    from: {
                        opacity: 1
                    },
                    enter: {
                        opacity: 1
                    },
                    leave: {
                        opacity: 0
                    },
                    config: {
                        duration: 200
                    }
                },
                f = {
                    ...d,
                    config: {
                        duration: 50
                    }
                },
                m = {
                    ...d,
                    config: (e, t) => t ? {
                        duration: 800
                    } : {
                        duration: 200
                    }
                };

            function _(e) {
                let {
                    readyState: t,
                    aspectRatio: r,
                    placeholder: _,
                    placeholderVersion: E,
                    placeholderStyle: I,
                    children: C
                } = e, T = t === u.ImageReadyStates.LOADING, [p] = i.useState(() => Date.now()), [S] = i.useState(T), [P, R] = i.useState(!1), L = i.useMemo(() => {
                    if (S && 1 === E && null != _) {
                        let e = Uint8Array.from(atob(_), e => e.charCodeAt(0)),
                            t = (0, o.thumbHashToRGBA)(e, {
                                detail: 1,
                                pop: 1.1
                            });
                        return (0, s.rgbaToDataURL)(t.w, t.h, t.rgba)
                    }
                }, [S, _, E]);
                i.useEffect(() => {
                    let e = setTimeout(() => {
                        R(!0)
                    }, 2e3);
                    return () => {
                        clearTimeout(e)
                    }
                }, [S]);
                let O = t === u.ImageReadyStates.READY && Date.now() - p < 200,
                    g = (0, a.useTransition)(T && null != L, O ? f : d),
                    M = (0, a.useTransition)(T && P, m);
                return (0, n.jsxs)("div", {
                    className: c.loadingOverlay,
                    style: {
                        aspectRatio: r
                    },
                    children: [C, g((e, t) => t && (0, n.jsx)(a.animated.img, {
                        style: {
                            ...I,
                            ...e
                        },
                        className: c.imagePlaceholder,
                        src: L,
                        alt: ""
                    })), M((e, t) => t && (0, n.jsx)(a.animated.div, {
                        style: e,
                        className: c.imageLoadingOverlay,
                        children: (0, n.jsx)(l.Spinner, {
                            type: l.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                            className: c.cornerLoadingSpinner
                        })
                    }))]
                })
            }
        },
        508338: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                UID: function() {
                    return o
                },
                uid: function() {
                    return s
                },
                useUID: function() {
                    return l
                }
            });
            var n = r("97613"),
                i = r.n(n),
                a = r("207561");
            let s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(e)
                },
                l = () => (0, a.useLazyValue)(() => s()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(l())
                }
        },
        596739: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("336328"),
                a = r("699340"),
                s = r("262113"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: r = 18,
                        color: i = "currentColor",
                        ...a
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23 12C23 15.4588 21.244 18.5074 18.575 20.303C16.9546 21.4361 14.9961 22.0511 12.9077 21.9996C11.5234 21.9871 10.2063 21.6933 9.01083 21.1726L8.93992 21.1486C7.24876 20.5765 5.54476 20 3.77041 20H3.5C2.67157 20 2 19.3284 2 18.5C2 17.6716 2.67157 17 3.5 17C4.03814 17 4.40201 16.7197 4.57202 16.3248C4.83747 15.7082 4.79971 14.5414 3.86441 14.1934C3.41676 14.0268 2.72587 14 2.39244 14H1.5C0.671573 14 0 13.3284 0 12.5C0 11.6716 0.671573 11 1.5 11C2.16507 11 2.69887 10.6988 3.10938 10.1953C3.46698 9.75673 3.46834 9.09578 3.27805 8.62811C3.11182 8.21955 2.77674 7.83979 2.44976 7.55367C2.17543 7.31362 2 6.96873 2 6.50001C2 5.67158 2.67157 5.00001 3.5 5.00001C4.79441 5.00001 6.01593 4.51851 7.15231 3.88709C8.79678 2.6997 10.8167 2 13 2C18.5228 2 23 6.47715 23 12ZM15.2781 13.6032C15.7366 13.7241 16.1174 14.026 16.3144 14.4105C16.5162 14.8043 16.5223 15.2869 16.2154 15.7057C15.2355 17.0432 13.4838 17.7164 11.7684 17.264C10.0529 16.8115 8.87791 15.3665 8.70867 13.726C8.65566 13.2122 8.90615 12.7973 9.28089 12.5555C9.64684 12.3195 10.13 12.2455 10.5885 12.3664L15.2781 13.6032ZM9.20943 8.1998C8.65483 8.05353 8.08712 8.27952 7.78185 8.72337C7.56782 9.03455 7.13921 9.34399 6.64391 9.21336C6.18769 9.09304 5.83028 8.58879 6.08468 8.08437C6.72953 6.80575 8.21942 6.10768 9.6745 6.49143C11.1296 6.87519 12.0653 8.21295 11.9742 9.63762C11.9382 10.1997 11.3726 10.4605 10.9163 10.3401C10.4211 10.2095 10.2071 9.73061 10.1798 9.35578C10.1409 8.82116 9.76403 8.34606 9.20943 8.1998ZM17.6296 11.3621C17.9348 10.9182 18.5026 10.6922 19.0571 10.8385C19.6117 10.9848 19.9886 11.4599 20.0275 11.9945C20.0548 12.3693 20.2688 12.8482 20.7641 12.9788C21.2203 13.0992 21.786 12.8384 21.8219 12.2763C21.913 10.8517 20.9773 9.51389 19.5222 9.13014C18.0671 8.74638 16.5772 9.44445 15.9324 10.7231C15.678 11.2275 16.0354 11.7317 16.4916 11.8521C16.9869 11.9827 17.4155 11.6733 17.6296 11.3621Z",
                            fill: i
                        })
                    })
                }, a.SuperReactionIcon, void 0, {
                    size: 18
                })
        },
        150060: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("336328"),
                a = r("299647"),
                s = r("262113"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 25,
                        height: r = 25,
                        color: i = "currentColor",
                        ...a
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsxs)("g", {
                            clipPath: "url(#clip0_1473_119386)",
                            children: [(0, n.jsx)("path", {
                                d: "M16.001 20.5H4.00098C2.89798 20.5 2.00098 19.602 2.00098 18.5V8.5H4.00098V18.5H16.001V20.5Z",
                                fill: i
                            }), (0, n.jsx)("path", {
                                d: "M21.001 3.5H8.00098C6.89798 3.5 6.00098 4.396 6.00098 5.5V14.5C6.00098 15.602 6.89798 16.5 8.00098 16.5H21.001C22.104 16.5 23.001 15.602 23.001 14.5V5.5C23.001 4.396 22.104 3.5 21.001 3.5ZM9.00098 13.5C9.00098 11.659 10.16 10.5 12.001 10.5C10.896 10.5 10.001 9.604 10.001 8.5C10.001 7.396 10.896 6.5 12.001 6.5C13.106 6.5 14.001 7.396 14.001 8.5C14.001 9.604 13.105 10.5 12.001 10.5C13.842 10.5 15.001 11.659 15.001 13.5H9.00098ZM20.001 13.5H16.001V11.5H20.001V13.5ZM20.001 9.5H16.001V7.5H20.001V9.5Z",
                                fill: i
                            })]
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: "clip0_1473_119386",
                                children: (0, n.jsx)("rect", {
                                    width: t,
                                    height: t,
                                    fill: i,
                                    transform: "translate(0 0.5)"
                                })
                            })
                        })]
                    })
                }, a.UserSquareIcon, void 0, {
                    size: 25
                })
        },
        860767: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("262113");

            function a(e) {
                let {
                    width: t = 106,
                    height: r = 26,
                    color: a = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, i.default)(l),
                    width: t,
                    height: r,
                    viewBox: "0 0 106 26",
                    children: [(0, n.jsx)("title", {
                        children: "Nitro"
                    }), (0, n.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M98.8266537 8.64800265L97.5788372 17.0822416C97.2940433 19.0754982 95.0485266 20.0010292 92.981582 20.0010292 91.0571496 20.0010292 89.1680861 19.0754982 89.4175111 17.2605602L90.6652125 8.64800265C90.9501215 6.76162212 93.1956383 5.80077257 95.2624676 5.80077257 97.3294121 5.80077257 99.1115628 6.76162212 98.8266537 8.64800265M96.2496839.0038079646L96.2503751.0000115044248 82.8208233.0000115044248C82.4777342.0000115044248 82.1864887.251383186 82.1368341.59030354L81.4839511 5.04596726C81.4228909 5.46254248 81.7462794 5.83609115 82.167825 5.83609115L84.6202551 5.83609115C84.8670304 5.83609115 85.0355795 6.08734779 84.9386897 6.31398496 84.6326976 7.03036549 84.4097703 7.8080646 84.2859219 8.64800265L83.0381053 17.2605602C82.2182861 23.0258876 87.0301735 25.9085513 92.2687909 25.9085513 97.7574094 25.9085513 103.139115 23.0258876 103.958934 17.2605602L105.206059 8.64800265C106.009634 2.99656903 101.367679.115400885 96.2496839.0038079646M15.5778562 11.7941867L15.6467505 15.9747796C15.648133 16.0607177 15.5902986 16.1363018 15.5068881 16.1574699L15.5067729 16.1574699 14.0843013 11.1148504C14.0822275 11.1071425 14.0795777 11.0996646 14.0763519 11.0923018L9.66308376.775018584C9.55432753.520885841 9.30421123.355912389 9.0273667.355912389L4.02607753.355912389C3.68126035.355912389 3.38920838.6097 3.34151232.950576106L.00682030635 24.7668062C-.0513596718 25.1820009.271568009 25.5526735.691385514 25.5526735L5.67355018 25.5526735C6.01882818 25.5526735 6.31122578 25.2981956 6.3583458 24.9566292L7.6643423 15.4949301C7.66560958 15.4857265 7.66618562 15.4762929 7.66607042 15.4669743L7.59475674 10.6052044 7.73715368 10.5697708 9.23116943 15.6125053C9.23335838 15.6196381 9.23589295 15.6267708 9.23888836 15.6336735L13.3663258 25.1370186C13.4758885 25.3893106 13.7250831 25.5526735 14.0004299 25.5526735L19.39573 25.5526735C19.7405472 25.5526735 20.0325992 25.2988858 20.0802953 24.9580097L23.4156785 1.14177965C23.4738585.726584956 23.1509308.355912389 22.7311133.355912389L17.782935.355912389C17.438233.355912389 17.146181.609469912 17.0983698.950346018L15.5795843 11.7654257C15.578317 11.7749743 15.577741 11.784523 15.5778562 11.7941867M25.2200758 25.5526274L30.2035078 25.5526274C30.5483249 25.5526274 30.8403769 25.2989549 30.888073 24.9579637L34.222765 1.14184867C34.280945.726653982 33.9580173.355981416 33.5381998.355981416L28.5547678.355981416C28.2100659.355981416 27.9180139.609653982 27.8702026.950645133L24.5355106 24.7667602C24.4773306 25.1819549 24.8002583 25.5526274 25.2200758 25.5526274M37.588782.910862832L36.9357838 5.3664115C36.8748388 5.78298673 37.1982273 6.15665044 37.6197729 6.15665044L42.8344271 6.15665044C43.2536686 6.15665044 43.5763658 6.52628761 43.5192227 6.94102212L41.0626451 24.7682788C41.005502 25.1830133 41.3281993 25.5526504 41.7474408 25.5526504L46.8027624 25.5526504C47.1481556 25.5526504 47.4405532 25.2980575 47.4875581 24.9564912L49.9960944 6.75280973C50.0430992 6.41112832 50.3354968 6.15665044 50.68089 6.15665044L56.2874814 6.15665044C56.6305704 6.15665044 56.9217007 5.90539381 56.9714705 5.56635841L57.6249296 1.11080973C57.6859898.694234513 57.3626013.320570796 56.9409404.320570796L38.2727712.320570796C37.9296821.320570796 37.6384366.571827434 37.588782.910862832M72.9157339 9.14614425C72.7371616 10.6051354 71.5970645 12.0642416 69.6364568 12.0642416L66.6908218 12.0642416C66.2704283 12.0642416 65.9472702 11.6925336 66.0063718 11.2768788L66.6298768 6.8920823C66.6782642 6.55178142 66.9700857 6.29891416 67.3143268 6.29891416L70.4562761 6.29891416C72.3453396 6.29891416 73.0936148 7.61571062 72.9157339 9.14614425M71.1691824.355958407L61.6845787.355958407C61.3397615.355958407 61.0477096.609630973 60.9998983.950622124L57.6652063 24.7667372C57.6070263 25.1819319 57.929954 25.5526044 58.3497715 25.5526044L63.4034802 25.5526044C63.7487582 25.5526044 64.0411558 25.2981265 64.0882759 24.9565602L65.0696166 17.8430292C65.0932342 17.6723035 65.2393178 17.5450646 65.4120144 17.5450646L66.0616716 17.5450646C66.1795293 17.5450646 66.2893224 17.6050027 66.3528019 17.7041708L71.1792055 25.2345071C71.3062798 25.4327283 71.5256356 25.5526044 71.7613509 25.5526044L78.0034289 25.5526044C78.5625328 25.5526044 78.8902992 24.9242327 78.5697909 24.4667018L73.5050221 17.2370912C73.383593 17.0637195 73.4460357 16.8224717 73.6364743 16.729631 76.8698986 15.1516841 78.7475566 13.5351973 79.3665685 9.03926814 80.0787836 3.13174602 76.3728918.355958407 71.1691824.355958407"
                        })
                    })]
                })
            }
        },
        747690: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("262113");

            function a(e) {
                let {
                    width: t = 103,
                    height: r = 39,
                    color: a = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, i.default)(l),
                    width: t,
                    height: r,
                    viewBox: "0 0 103 39",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsxs)("g", {
                        fill: a,
                        className: s,
                        children: [(0, n.jsx)("path", {
                            d: "M93.9519 0.175787H81.0164C80.8563 0.175146 80.7012 0.231811 80.5799 0.335344C80.4586 0.438877 80.3792 0.582303 80.3564 0.739196L79.7272 4.99334C79.7136 5.08695 79.7205 5.18236 79.7474 5.2731C79.7744 5.36384 79.8207 5.44778 79.8833 5.51923C79.946 5.59068 80.0234 5.64796 80.1103 5.68719C80.1973 5.72642 80.2917 5.74668 80.3873 5.7466H82.7491C82.804 5.74682 82.8579 5.76039 82.9062 5.78612C82.9545 5.81185 82.9956 5.84895 83.026 5.89414C83.0564 5.93932 83.075 5.99121 83.0803 6.04522C83.0857 6.09924 83.0775 6.15372 83.0565 6.20385C82.7507 6.91629 82.5392 7.66486 82.4273 8.43095L81.2248 16.6535C80.4347 22.1651 85.0697 24.9086 90.1172 24.9086C95.404 24.9086 100.588 22.1569 101.378 16.6535L102.58 8.43095C103.354 3.03162 98.8818 0.281936 93.9519 0.175787ZM96.4272 8.42687L95.2328 16.4779C94.9585 18.3804 92.7947 19.2643 90.8041 19.2643C88.9477 19.2643 87.1304 18.3804 87.3697 16.6473L88.5722 8.42483C88.8466 6.62437 91.0104 5.70781 93.0009 5.70781C94.9915 5.70781 96.7139 6.62641 96.4333 8.42687H96.4272Z"
                        }), (0, n.jsx)("path", {
                            d: "M22.1974 0.17587H17.3644C17.2005 0.176513 17.0423 0.236066 16.9194 0.343454C16.7965 0.450842 16.7171 0.598756 16.6961 0.759692L15.213 11.2256C15.212 11.2351 15.212 11.2447 15.213 11.2542L15.279 15.3001C15.2798 15.3406 15.2669 15.3801 15.2421 15.4124C15.2174 15.4446 15.1825 15.4676 15.1429 15.4777L13.7526 10.5969V10.5744L9.43527 0.582096C9.38392 0.461509 9.29788 0.35852 9.18786 0.285933C9.07784 0.213345 8.94868 0.174361 8.81645 0.173828H3.93188C3.7689 0.176072 3.61225 0.236646 3.49091 0.344348C3.36956 0.45205 3.29173 0.599594 3.27181 0.759692L0.00648965 23.8003C-0.00675491 23.8949 0.000616673 23.9912 0.0281092 24.0828C0.0556018 24.1744 0.102579 24.2591 0.165884 24.3312C0.22919 24.4033 0.307359 24.4612 0.39514 24.501C0.482921 24.5407 0.578282 24.5614 0.674817 24.5617H5.54082C5.70386 24.5612 5.86126 24.5025 5.98405 24.3964C6.10685 24.2903 6.18678 24.1438 6.20915 23.984L7.48392 14.8286C7.48494 14.8191 7.48494 14.8095 7.48392 14.8L7.41379 10.0947L7.55405 10.0621L9.01241 14.9409C9.01126 14.9476 9.01126 14.9545 9.01241 14.9613L13.043 24.1595C13.0941 24.2803 13.1801 24.3834 13.2902 24.456C13.4003 24.5287 13.5295 24.5675 13.6618 24.5678H18.9486C19.1114 24.5674 19.2685 24.509 19.3913 24.4033C19.514 24.2976 19.5941 24.1516 19.617 23.9921L22.8678 0.937289C22.8815 0.842432 22.8743 0.745785 22.8468 0.653916C22.8193 0.562046 22.7722 0.477107 22.7086 0.404871C22.645 0.332635 22.5664 0.274794 22.4782 0.235279C22.39 0.195765 22.2943 0.175503 22.1974 0.17587Z"
                        }), (0, n.jsx)("path", {
                            d: "M32.7504 0.175781H27.8844C27.7203 0.17599 27.5619 0.23539 27.4389 0.342858C27.3159 0.450326 27.2366 0.598492 27.2161 0.759604L23.959 23.8002C23.9458 23.8948 23.9531 23.9911 23.9806 24.0827C24.0081 24.1743 24.0551 24.259 24.1184 24.3311C24.1817 24.4032 24.2599 24.4611 24.3477 24.5009C24.4354 24.5406 24.5308 24.5613 24.6273 24.5616H29.4933C29.6563 24.5613 29.8137 24.503 29.9368 24.3973C30.0599 24.2916 30.1404 24.1456 30.1637 23.9859L33.4187 0.937201C33.4323 0.842515 33.4252 0.746043 33.3978 0.654318C33.3705 0.562593 33.3235 0.477757 33.2601 0.405555C33.1968 0.333353 33.1185 0.275472 33.0305 0.235829C32.9426 0.196186 32.847 0.175708 32.7504 0.175781Z"
                        }), (0, n.jsx)("path", {
                            d: "M55.5911 0.175834H37.3854C37.2235 0.17613 37.0671 0.234031 36.9448 0.338966C36.8225 0.443901 36.7424 0.588871 36.7191 0.747409L36.0817 5.04646C36.0678 5.14131 36.0747 5.238 36.1019 5.32998C36.1291 5.42195 36.176 5.50705 36.2394 5.57948C36.3028 5.65192 36.3812 5.70999 36.4694 5.74976C36.5575 5.78952 36.6532 5.81004 36.75 5.80992H41.845C41.9414 5.80989 42.0368 5.83033 42.1246 5.86985C42.2123 5.90937 42.2905 5.96706 42.3539 6.03903C42.4172 6.111 42.4642 6.19557 42.4917 6.28705C42.5192 6.37852 42.5266 6.47477 42.5133 6.5693L40.1164 23.7961C40.1032 23.8907 40.1105 23.9869 40.138 24.0784C40.1655 24.1699 40.2125 24.2545 40.2759 24.3264C40.3392 24.3984 40.4174 24.4561 40.5052 24.4956C40.593 24.5351 40.6883 24.5556 40.7848 24.5555H45.7147C45.8777 24.5551 46.0351 24.4964 46.1579 24.3902C46.2807 24.2841 46.3607 24.1377 46.383 23.9778L48.8294 6.38762C48.8509 6.22779 48.9303 6.08112 49.0529 5.97487C49.1754 5.86861 49.3328 5.81 49.4957 5.80992H54.964C55.1257 5.81012 55.2821 5.75266 55.4044 5.64806C55.5268 5.54346 55.607 5.39873 55.6303 5.24039L56.2677 0.935212C56.2811 0.839995 56.2735 0.743042 56.2455 0.650985C56.2175 0.558928 56.1698 0.473939 56.1055 0.401832C56.0413 0.329726 55.9621 0.272202 55.8733 0.233197C55.7845 0.194191 55.6882 0.174624 55.5911 0.175834Z"
                        }), (0, n.jsx)("path", {
                            d: "M69.4981 0.175781H60.2364C60.0723 0.17599 59.9139 0.23539 59.7909 0.342858C59.6679 0.450326 59.5887 0.598491 59.5681 0.759604L56.311 23.8002C56.2978 23.8948 56.3051 23.9911 56.3326 24.0827C56.3601 24.1743 56.4071 24.259 56.4704 24.3311C56.5337 24.4032 56.6119 24.4611 56.6997 24.5009C56.7875 24.5406 56.8828 24.5613 56.9794 24.5616H61.9155C62.0785 24.5612 62.2359 24.5025 62.3587 24.3963C62.4815 24.2902 62.5614 24.1437 62.5838 23.9839L63.5409 17.1005C63.5523 17.0206 63.5923 16.9474 63.6536 16.8942C63.7149 16.841 63.7935 16.8113 63.8751 16.8106H64.5104C64.5672 16.8108 64.6231 16.8251 64.6728 16.8522C64.7225 16.8793 64.7646 16.9184 64.7951 16.9658L69.5084 24.2534C69.5693 24.3477 69.6531 24.4253 69.7523 24.4792C69.8514 24.5331 69.9626 24.5614 70.0757 24.5616H76.1711C76.2947 24.5618 76.4159 24.5283 76.5216 24.465C76.6272 24.4016 76.7133 24.3107 76.7704 24.2022C76.8274 24.0937 76.8532 23.9718 76.845 23.8498C76.8368 23.7278 76.7949 23.6104 76.7239 23.5103L71.7733 16.5146C71.7454 16.4751 71.7265 16.43 71.7178 16.3826C71.7091 16.3351 71.7109 16.2863 71.7231 16.2396C71.7352 16.1929 71.7574 16.1493 71.7882 16.1119C71.8189 16.0744 71.8575 16.044 71.9012 16.0227C75.0593 14.4958 76.893 12.9301 77.4974 8.57997C78.1988 2.86218 74.5786 0.175781 69.4981 0.175781ZM71.204 8.68407C71.0287 10.0946 69.9169 11.5072 68.0006 11.5072H65.1251C65.0285 11.5073 64.9329 11.4868 64.845 11.4472C64.757 11.4076 64.6787 11.3497 64.6154 11.2775C64.552 11.2053 64.505 11.1204 64.4777 11.0287C64.4503 10.937 64.4432 10.8405 64.4568 10.7458L65.0653 6.50188C65.0882 6.34263 65.1684 6.1969 65.2912 6.09151C65.414 5.98611 65.5711 5.92815 65.7336 5.92827H68.8009C70.6471 5.92827 71.3773 7.20206 71.204 8.68407Z"
                        }), (0, n.jsx)("path", {
                            d: "M7.17861 33.4558C7.14695 33.4798 7.12131 33.5107 7.10366 33.5461C7.086 33.5815 7.07682 33.6205 7.07682 33.6599C7.07682 33.6994 7.086 33.7383 7.10366 33.7737C7.12131 33.8091 7.14695 33.84 7.17861 33.8641C8.11097 34.5683 8.07796 35.6584 7.86344 36.332C7.38901 37.9059 6.19056 38.8592 3.99993 38.8592H0.262245C0.224761 38.859 0.187761 38.8508 0.153705 38.8353C0.11965 38.8198 0.0893196 38.7973 0.0647325 38.7693C0.0401454 38.7413 0.021865 38.7085 0.0111071 38.6729C0.000349207 38.6374 -0.00263948 38.6 0.00233983 38.5632L1.31012 29.3058C1.31907 29.2439 1.35029 29.1873 1.39805 29.1464C1.4458 29.1056 1.50688 29.0831 1.57002 29.0833H5.30358C7.18892 29.0833 8.41625 30.2019 8.09447 32.0656C7.96306 32.6209 7.63894 33.1128 7.17861 33.4558ZM4.23096 36.6872C5.73675 36.6872 5.98841 34.6847 4.50943 34.6847H3.28622C3.22289 34.685 3.16179 34.7079 3.11408 34.7491C3.06637 34.7904 3.03522 34.8472 3.02632 34.9092L2.82004 36.3912C2.81506 36.428 2.81805 36.4654 2.82881 36.5009C2.83957 36.5365 2.85785 36.5693 2.88243 36.5973C2.90702 36.6253 2.93735 36.6478 2.97141 36.6633C3.00546 36.6788 3.04246 36.687 3.07995 36.6872H4.23096ZM4.76108 32.9026C5.97397 32.9026 6.26688 31.1634 5.01067 31.1634H3.78747C3.72444 31.1637 3.66359 31.1862 3.61593 31.2271C3.56826 31.2679 3.53692 31.3242 3.52756 31.3859L3.35223 32.6107C3.3469 32.6475 3.34964 32.685 3.36027 32.7207C3.37089 32.7564 3.38916 32.7894 3.41381 32.8175C3.43847 32.8456 3.46894 32.8681 3.50316 32.8834C3.53738 32.8988 3.57454 32.9068 3.61213 32.9067L4.76108 32.9026Z"
                        }), (0, n.jsx)("path", {
                            d: "M16.7972 38.8632H14.6602C14.6002 38.8632 14.5419 38.843 14.495 38.8059C14.4482 38.7688 14.4155 38.717 14.4023 38.659L14.1074 37.1219C14.0946 37.0638 14.062 37.0117 14.015 36.9746C13.9681 36.9374 13.9097 36.9173 13.8495 36.9178H11.6011C11.5504 36.9179 11.5007 36.9326 11.4582 36.9602C11.4157 36.9877 11.3823 37.0269 11.3619 37.0729L10.6193 38.7244C10.5991 38.7705 10.5657 38.8099 10.5232 38.8374C10.4806 38.865 10.4309 38.8796 10.38 38.8795H8.29251C8.24801 38.8795 8.20424 38.8683 8.16533 38.8469C8.12643 38.8255 8.09366 38.7947 8.07013 38.7573C8.0466 38.7199 8.03308 38.6772 8.03085 38.6333C8.02861 38.5893 8.03774 38.5455 8.05736 38.5059L12.6284 29.2485C12.6496 29.2047 12.683 29.1678 12.7246 29.1421C12.7663 29.1164 12.8145 29.103 12.8635 29.1035H14.7633C14.8232 29.1032 14.8813 29.1233 14.9279 29.1605C14.9746 29.1977 15.0068 29.2497 15.0191 29.3077L17.053 38.5651C17.0586 38.6018 17.0562 38.6392 17.0459 38.6748C17.0357 38.7105 17.0179 38.7435 16.9936 38.7718C16.9694 38.8 16.9393 38.8228 16.9054 38.8385C16.8715 38.8543 16.8346 38.8627 16.7972 38.8632ZM13.4968 34.707C13.5334 34.7069 13.5696 34.6992 13.603 34.6844C13.6364 34.6697 13.6663 34.6481 13.6908 34.6212C13.7153 34.5943 13.7338 34.5625 13.7452 34.5281C13.7565 34.4937 13.7605 34.4572 13.7567 34.4212L13.4927 31.8491H13.3957L12.4407 34.3559C12.4256 34.3952 12.4205 34.4375 12.4256 34.4792C12.4308 34.5209 12.4461 34.5607 12.4702 34.5953C12.4944 34.6298 12.5266 34.658 12.5643 34.6775C12.6019 34.6969 12.6437 34.7071 12.6861 34.707H13.4968Z"
                        }), (0, n.jsx)("path", {
                            d: "M19.1384 35.9359C19.1901 35.8936 19.2563 35.8728 19.3232 35.8777C19.3901 35.8826 19.4525 35.913 19.4973 35.9624C19.7378 36.2023 20.0247 36.3919 20.3408 36.5199C20.6569 36.6479 20.9957 36.7117 21.3372 36.7075C22.0056 36.7075 22.5935 36.4727 22.6904 35.9624C22.8018 35.35 21.9375 35.0928 21.1413 34.9826C19.5922 34.7335 18.1978 33.5046 18.5464 31.6552C18.9238 29.6526 20.7081 28.9484 22.5233 28.9484C23.6455 28.9484 24.6954 29.2382 25.5225 30.2834C25.5451 30.3114 25.5616 30.3436 25.5711 30.3781C25.5805 30.4127 25.5827 30.4488 25.5775 30.4842C25.5723 30.5196 25.5598 30.5536 25.5407 30.584C25.5217 30.6144 25.4965 30.6406 25.4669 30.661L24.058 31.6266C24.0095 31.6601 23.9509 31.6766 23.8918 31.6732C23.8327 31.6699 23.7765 31.647 23.7321 31.6082C23.3125 31.2544 22.7816 31.0559 22.2304 31.0469C21.6116 31.0346 21.0712 31.2673 21.0155 31.7654C20.9453 32.3309 21.4486 32.5819 22.2015 32.7453C23.9177 33.0637 25.5927 33.7128 25.1327 36.142C24.7696 38.0486 23.0947 38.9999 20.9598 38.9999C19.8459 38.9999 18.4845 38.4773 17.7006 37.4403C17.6594 37.3867 17.6406 37.3194 17.6483 37.2525C17.656 37.1855 17.6895 37.1241 17.7419 37.081L19.1384 35.9359Z"
                        }), (0, n.jsx)("path", {
                            d: "M28.365 38.8631H26.3951C26.3577 38.8629 26.3208 38.8548 26.2868 38.8393C26.2528 38.8238 26.2226 38.8012 26.1982 38.7732C26.1737 38.7451 26.1557 38.7122 26.1452 38.6767C26.1346 38.6411 26.132 38.6038 26.1373 38.5671L27.445 29.3097C27.4536 29.2476 27.4847 29.1908 27.5325 29.1498C27.5804 29.1089 27.6417 29.0866 27.7049 29.0872H29.6749C29.7122 29.0871 29.7491 29.095 29.783 29.1102C29.817 29.1255 29.8473 29.1479 29.8717 29.1758C29.8962 29.2037 29.9143 29.2364 29.9248 29.2719C29.9353 29.3073 29.938 29.3446 29.9327 29.3811L28.6249 38.6386C28.6169 38.701 28.5859 38.7583 28.538 38.7997C28.4902 38.8411 28.4286 38.8636 28.365 38.8631Z"
                        }), (0, n.jsx)("path", {
                            d: "M37.6597 36.6687C37.6947 36.686 37.7253 36.7107 37.7495 36.7411C37.7736 36.7714 37.7906 36.8068 37.7993 36.8444C37.808 36.8821 37.8081 36.9212 37.7997 36.959C37.7912 36.9967 37.7744 37.0321 37.7505 37.0627C36.5788 38.5671 35.2381 38.9999 34.0623 38.9999C32.1213 38.9999 30.337 37.8813 30.6423 35.6582L31.1167 32.29C31.4241 30.0813 33.5446 28.9484 35.5268 28.9484C36.6799 28.9484 38.0021 29.4097 38.5921 30.9489C38.6178 31.0136 38.6167 31.0858 38.5888 31.1496C38.561 31.2135 38.5088 31.2639 38.4436 31.2898L36.748 31.9308C36.6909 31.9519 36.6281 31.9526 36.5705 31.9329C36.5129 31.9131 36.4641 31.8741 36.4324 31.8226C36.1622 31.4143 35.6485 31.2265 35.1349 31.2265C34.4233 31.2408 33.7137 31.6348 33.6147 32.29L33.1403 35.6664C33.0433 36.3033 33.6559 36.7034 34.3552 36.7034C34.6326 36.7074 34.907 36.6462 35.1559 36.5249C35.4048 36.4035 35.621 36.2254 35.7868 36.0053C35.8226 35.9552 35.8752 35.9192 35.9352 35.9039C35.9953 35.8886 36.0589 35.8948 36.1147 35.9216L37.6597 36.6687Z"
                        })]
                    })
                })
            }
        },
        33848: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("336328"),
                a = r("922047"),
                s = r("262113"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: i,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.2137 2.00088L2.27111 13.3826C1.9299 13.8168 2.00535 14.4455 2.43963 14.7867C2.61581 14.9251 2.83338 15.0004 3.05744 15.0004H7V21.0004C7 21.5527 7.44772 22.0004 8 22.0004H16C16.5523 22.0004 17 21.5527 17 21.0004V15.0004H20.9425C21.4948 15.0004 21.9425 14.5527 21.9425 14.0004C21.9425 13.7763 21.8673 13.5588 21.7289 13.3826L12.7863 2.00088C12.4451 1.56661 11.8165 1.49116 11.3822 1.83237C11.3195 1.88162 11.2629 1.93819 11.2137 2.00088Z"
                        })
                    })
                }, a.UploadIcon, void 0, {
                    size: 24
                })
        },
        406639: function(e, t, r) {
            "use strict";
            var n, i;
            r.r(t), r.d(t, {
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return s
                },
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return a
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return l
                },
                MediaLayoutType: function() {
                    return n
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return o
                }
            });
            let a = 550,
                s = 350,
                l = 40;
            (i = n || (n = {})).STATIC = "STATIC", i.RESPONSIVE = "RESPONSIVE", i.MOSAIC = "MOSAIC";
            let o = 20
        },
        654095: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                SuperReactionIcon: function() {
                    return s
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("600186"),
                a = r("11768");
            let s = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M15.4 1.53A11 11 0 0 0 1.63 15.68c1.4-1.2 3.8-.81 4.54 1.18l.26.7.7.27c2 .73 2.4 3.14 1.19 4.54A11 11 0 0 0 22.47 8.6a2.93 2.93 0 0 1-5.21-.57l-.34-.93a.05.05 0 0 0-.03-.03l-.93-.34a2.93 2.93 0 0 1-.56-5.2ZM6.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-2.79.54c.27-.43.02-.95-.43-1.09l-4.06-1.23c-.45-.14-.94.15-.96.66a3.02 3.02 0 0 0 2.05 3.06c1.29.4 2.66-.21 3.4-1.4Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof s ? s : s.css,
                        className: l
                    }), (0, n.jsx)("path", {
                        d: "M19.42 3.88c.24.22.48.46.7.7a4 4 0 0 0-.12.14c-.2-.27-.45-.51-.72-.72l.14-.12Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: l
                    }), (0, n.jsx)("path", {
                        d: "M19.09.63a.97.97 0 0 1 1.82 0l.34.93a2 2 0 0 0 1.19 1.19l.93.34a.97.97 0 0 1 0 1.82l-.93.34a2 2 0 0 0-1.19 1.19l-.34.93a.97.97 0 0 1-1.82 0l-.34-.93a2 2 0 0 0-1.19-1.19l-.93-.34a.97.97 0 0 1 0-1.82l.93-.34a2 2 0 0 0 1.19-1.19l.34-.93ZM2.7 17.55a.85.85 0 0 1 1.6 0l.26.71a2 2 0 0 0 1.18 1.18l.7.26a.85.85 0 0 1 0 1.6l-.7.26a2 2 0 0 0-1.18 1.18l-.26.7a.85.85 0 0 1-1.6 0l-.26-.7a2 2 0 0 0-1.18-1.18l-.7-.26a.85.85 0 0 1 0-1.6l.7-.26a2 2 0 0 0 1.18-1.18l.26-.7Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: l
                    })]
                })
            }
        },
        646510: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                UserSquareIcon: function() {
                    return s
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("600186"),
                a = r("11768");
            let s = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm10 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 9.83A5.83 5.83 0 0 1 11.83 12h.34A5.83 5.83 0 0 1 18 17.83c0 .65-.52 1.17-1.17 1.17h-.08a.52.52 0 0 1-.5-.4c-.22-.87-.54-1.69-.83-2.3-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.3.61-.61 1.43-.83 2.3a.52.52 0 0 1-.5.4h-.08C6.52 19 6 18.48 6 17.83Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=65877.d2067985247344bc482c.js.map