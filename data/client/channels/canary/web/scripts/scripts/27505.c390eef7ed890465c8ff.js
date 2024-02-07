(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27505"], {
        540105: function(e, t, i) {
            "use strict";
            e.exports = i.p + "abb68ef84648ccf3be81.svg"
        },
        441888: function(e, t, i) {
            "use strict";
            i.r(t);
            var r = i("597285");
            i.es(r, t)
        },
        997289: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useAnalyticsContext: function() {
                    return s
                }
            });
            var r = i("884691"),
                n = i("599110");
            let s = () => r.useContext(n.AnalyticsContext)
        },
        246511: function(e, t, i) {
            "use strict";
            var r, n, s, l;
            i.r(t), i.d(t, {
                InspectedExpressionChangeSource: function() {
                    return r
                },
                PickerContextMenuDataTypes: function() {
                    return n
                }
            }), (s = r || (r = {}))[s.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", s[s.MOUSE_EVENT = 1] = "MOUSE_EVENT", (l = n || (n = {})).EMOJI = "emoji", l.STICKER = "sticker", l.PACK_ICON = "pack-icon"
        },
        716849: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return m
                },
                maybeFetchPremiumLikelihood: function() {
                    return k
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return p
                }
            });
            var r = i("884691"),
                n = i("65597"),
                s = i("872717"),
                l = i("913144"),
                a = i("775433"),
                u = i("697218"),
                c = i("10514"),
                o = i("764364"),
                d = i("676572"),
                f = i("646718"),
                S = i("49111");
            let m = "nonSubscriber";
            async function h() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await s.default.get({
                        url: S.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [m]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function k(e) {
                let {
                    enabled: t,
                    useExpectedValue: i
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = d.default.shouldFetchPremiumLikelihood(), n = u.default.getCurrentUser();
                E(n, r, t, i)
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: i
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), s = (0, n.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), l = (0, n.default)([u.default], () => u.default.getCurrentUser());
                r.useEffect(() => {
                    E(l, s, t, i)
                }, [l, s, t, i])
            }

            function E(e, t, i, r) {
                null != e && !(0, o.isPremium)(e) && i && (t && h(), r && (!c.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !c.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !c.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !c.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var r = i("446674"),
                n = i("913144");
            let s = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = s;
            class a extends r.default.Store {
                initialize() {
                    l = s
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var u = new a(n.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    l.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    l.isFetching = !1
                },
                LOGOUT: function() {
                    l.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var r = i("862205");
            let n = (0, r.createExperiment)({
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
            });
            var s = n
        },
        256860: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useFetchStickerPack: function() {
                    return y
                },
                useShouldAnimateSticker: function() {
                    return R
                },
                useStickersGrid: function() {
                    return _
                },
                useHasSendableSticker: function() {
                    return T
                },
                useFetchStickerPacks: function() {
                    return C
                },
                useFavoriteStickerIds: function() {
                    return M
                },
                useFavoriteStickers: function() {
                    return N
                },
                useLatestFrecentStickers: function() {
                    return U
                },
                useStickerForRenderableSticker: function() {
                    return F
                },
                useFilteredStickerPackCategories: function() {
                    return P
                }
            }), i("424973"), i("222007"), i("843762");
            var r = i("884691"),
                n = i("446674"),
                s = i("817963"),
                l = i("845579"),
                a = i("42507"),
                u = i("305961"),
                c = i("162771"),
                o = i("677099"),
                d = i("697218"),
                f = i("427459"),
                S = i("991170"),
                m = i("866353"),
                h = i("467094"),
                k = i("865372"),
                p = i("364685"),
                E = i("161585"),
                I = i("24373"),
                g = i("49111"),
                v = i("782340");
            let y = e => {
                    C();
                    let t = (0, n.useStateFromStores)([p.default], () => p.default.hasLoadedStickerPacks);
                    r.useEffect(() => {
                        t && null == p.default.getStickerPack(e) && (0, h.fetchStickerPack)(e)
                    }, [e, t])
                },
                R = e => {
                    let t = l.AnimateStickers.useSetting();
                    return (0, I.shouldAnimateSticker)(t, e)
                },
                _ = e => {
                    let {
                        collapsedStickersCategories: t,
                        filteredStickers: i,
                        listPaddingRight: n = 0,
                        listWidth: l = 0,
                        stickerNodeMargin: a = 0,
                        stickerNodeWidth: o,
                        stickersCategories: d
                    } = e;
                    return r.useMemo(() => {
                        let e = Math.floor((l - n + a) / (o + a)),
                            r = Math.floor(Math.max(a, (l - n - o * e) / (e - 1))),
                            S = [],
                            m = [],
                            h = [],
                            k = 0,
                            p = 0,
                            g = 0;
                        if (0 !== l) {
                            let r = function(t, i) {
                                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    n = (0, I.isGuildSticker)(t[0]) ? u.default.getGuild(t[0].guild_id) : void 0,
                                    {
                                        canCreateExpressions: l
                                    } = (0, s.getManageResourcePermissions)(n),
                                    a = c.default.getGuildId(),
                                    o = d.findIndex(e => e.type === E.StickerCategoryTypes.FAVORITE),
                                    y = d.findIndex(e => e.type === E.StickerCategoryTypes.RECENT),
                                    R = t.length;
                                null != n && a === n.id && l && t.length < (0, f.getTotalStickerCountForTier)(n.premiumTier) && R++;
                                let _ = Math.ceil(R / e);
                                m[p] = r ? 0 : _;
                                for (let s = 0; s < _; s++) {
                                    let l = s * e,
                                        a = l + e,
                                        u = t.slice(l, a).map((e, t) => ({
                                            type: E.StickerGridItemTypes.STICKER,
                                            sticker: e,
                                            packId: (0, I.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                                            gridSectionIndex: p,
                                            rowIndex: k,
                                            columnIndex: t,
                                            visibleRowIndex: g,
                                            category: i
                                        }));
                                    p > y && p > o && null != n && R > t.length && u.push({
                                        type: E.StickerGridItemTypes.CREATE_STICKER,
                                        guild_id: n.id,
                                        name: v.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                        gridSectionIndex: p,
                                        rowIndex: k,
                                        columnIndex: u.length,
                                        visibleRowIndex: g
                                    }), !r && (g++, h.push(u), S.push(u.length)), k++
                                }
                                p++
                            };
                            if (null == i)
                                for (let e of d) e.stickers.length > 0 ? (k++, r(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === E.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (m[p] = 0, p++);
                            else i.sendable.length > 0 && r(i.sendable, E.StickerCategoryTypes.SEARCH_RESULTS), i.sendableWithPremium.length > 0 && r(i.sendableWithPremium, E.StickerCategoryTypes.SEARCH_RESULTS)
                        }
                        return {
                            rowCount: k,
                            rowCountBySection: m,
                            stickersGrid: h,
                            gutterWidth: r,
                            columnCounts: S
                        }
                    }, [t, i, n, l, a, o, d])
                },
                T = e => {
                    let t = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser());
                    return (0, n.useStateFromStores)([p.default], () => {
                        let i = p.default.getAllStickersIterator();
                        for (let r of i)
                            if ((0, m.isSendableSticker)(r, t, e)) return !0;
                        return !1
                    }, [t, e])
                },
                C = () => {
                    r.useEffect(() => {
                        (0, h.fetchStickerPacks)()
                    }, [])
                },
                x = e => {
                    let t = (0, n.useStateFromStores)([p.default], () => p.default.getAllGuildStickers()),
                        i = (0, n.useStateFromStoresArray)([o.default, u.default], () => {
                            let e = o.default.getFlattenedGuildIds(),
                                t = [];
                            return e.forEach(e => {
                                let i = u.default.getGuild(e);
                                null != i && t.push(i)
                            }), t
                        }, []),
                        l = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser());
                    return r.useMemo(() => {
                        let r = [];
                        for (let {
                                name: e,
                                id: n
                            }
                            of i) {
                            let i = t.get(n);
                            null != i && 0 !== i.length && r.push({
                                type: E.StickerCategoryTypes.GUILD,
                                id: n,
                                name: e,
                                stickers: i
                            })
                        }
                        if ((null == e ? void 0 : e.getGuildId()) != null) {
                            let t = u.default.getGuild(e.getGuildId()),
                                {
                                    canManageAllExpressions: i
                                } = (0, s.getManageResourcePermissions)(t),
                                n = r.findIndex(t => t.id === e.getGuildId());
                            n >= 1 ? r.unshift(r.splice(n, 1)[0]) : -1 === n && null != t && i && r.unshift({
                                type: E.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                                id: t.id,
                                name: t.name,
                                stickers: []
                            }), null != l && !S.default.can({
                                permission: g.Permissions.USE_EXTERNAL_EMOJIS,
                                user: l,
                                context: e
                            }) && (r = r.filter(t => t.id === e.getGuildId()))
                        }
                        return r
                    }, [t, i, l, e])
                },
                L = [];

            function M() {
                var e, t;
                let i = (0, a.useFrecencySettings)();
                return null !== (t = null === (e = i.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : L
            }

            function N() {
                let e = M(),
                    t = (0, n.useStateFromStoresArray)([p.default], () => e.map(e => p.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
                return t
            }

            function U() {
                let e = function() {
                        var e, t;
                        let i = (0, a.useFrecencySettings)(),
                            r = L;
                        return (null == i ? void 0 : null === (e = i.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (r = Object.keys(null == i ? void 0 : null === (t = i.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), r
                    }(),
                    t = (0, n.useStateFromStoresArray)([p.default], () => e.map(e => p.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
                return t
            }
            let A = e => {
                    let t = N(),
                        {
                            packs: i,
                            frequentlyUsedStickers: s
                        } = (0, n.useStateFromStoresObject)([p.default, k.default], () => ({
                            packs: p.default.getPremiumPacks(),
                            frequentlyUsedStickers: k.default.stickerFrecencyWithoutFetchingLatest.frequently
                        }), []),
                        l = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
                        a = x(e);
                    return r.useMemo(() => {
                        var r;
                        let n = i.map(I.createStickerPackCategory),
                            u = {
                                type: E.StickerCategoryTypes.FAVORITE,
                                id: E.StickerCategoryTypes.FAVORITE,
                                name: v.default.Messages.CATEGORY_FAVORITE,
                                stickers: t
                            },
                            c = {
                                type: E.StickerCategoryTypes.RECENT,
                                id: E.StickerCategoryTypes.RECENT,
                                name: v.default.Messages.STICKER_CATEGORY_RECENT,
                                stickers: null !== (r = null == s ? void 0 : s.filter(t => {
                                    if ((0, I.isGuildSticker)(t)) {
                                        var r, n;
                                        return null !== (n = null === (r = p.default.getStickersByGuildId(t.guild_id)) || void 0 === r ? void 0 : r.some(e => e.id === t.id)) && void 0 !== n && n && (0, m.getStickerSendability)(t, l, e) !== m.StickerSendability.NONSENDABLE
                                    }
                                    if ((0, I.isStandardSticker)(t)) return i.some(e => e.id === t.pack_id)
                                })) && void 0 !== r ? r : []
                            };
                        return [u, c, ...a, ...n]
                    }, [i, t, s, a, l, e])
                },
                F = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = (0, n.useStateFromStores)([p.default], () => p.default.getStickerById(e.id)),
                        [s, l] = r.useState(!0),
                        [a, u] = r.useState(!1),
                        c = (0, I.isGuildSticker)(e) || (0, I.isStandardSticker)(e);
                    return (r.useEffect(() => {
                        let r = async () => {
                            if (t && !c && null == i && s && !a) {
                                l(!1);
                                try {
                                    await (0, h.fetchSticker)(e.id)
                                } catch {}
                                u(!0)
                            }
                        };
                        r()
                    }, [t]), c) ? [e, a] : [null != i ? i : null, a]
                },
                P = e => {
                    let t = A(e);
                    return r.useMemo(() => t.filter(e => e.type === E.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
                }
        },
        41170: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getStickerAltText: function() {
                    return x
                },
                default: function() {
                    return F
                }
            }), i("222007");
            var r = i("37983"),
                n = i("884691"),
                s = i("414456"),
                l = i.n(s),
                a = i("627445"),
                u = i.n(a),
                c = i("907002"),
                o = i("446674"),
                d = i("290381"),
                f = i("77078"),
                S = i("206230"),
                m = i("407063"),
                h = i("54560"),
                k = i("983782"),
                p = i("866190"),
                E = i("256860"),
                I = i("161585"),
                g = i("24373"),
                v = i("782340"),
                y = i("787309");
            let R = e => e.preventDefault(),
                _ = {
                    tension: 1100,
                    friction: 40
                },
                T = {
                    tension: 1600,
                    friction: 60
                };

            function C(e, t) {
                return n.cloneElement(e, {
                    "data-type": "sticker",
                    "data-id": t
                })
            }

            function x(e) {
                let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
                return v.default.Messages.STICKER_A11Y_LABEL.format({
                    stickerName: t
                })
            }
            let L = e => {
                    let {
                        children: t,
                        hasError: i,
                        isLoading: n,
                        maskAsset: s,
                        size: a,
                        withLoadingIndicator: u = !0
                    } = e, c = a >= 33;
                    return (0, r.jsxs)("div", {
                        className: l(y.assetWrapper, {
                            [y.assetWrapperMasked]: i || s
                        }),
                        style: {
                            height: a,
                            width: a
                        },
                        children: [i ? (0, r.jsxs)("div", {
                            className: y.error,
                            children: [(0, r.jsx)(h.default, {
                                className: y.errorIcon
                            }), c && (0, r.jsx)(f.Text, {
                                className: y.errorText,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: v.default.Messages.STICKER_ASSET_LOAD_ERROR
                            })]
                        }) : t, u && n && (0, r.jsx)("div", {
                            className: y.loadingIndicator
                        })]
                    })
                },
                M = e => {
                    let {
                        shouldAnimate: t,
                        size: s,
                        sticker: l,
                        fileUri: a,
                        assetData: c,
                        isFocused: o,
                        className: d,
                        maskAsset: f,
                        positionRef: S,
                        withLoadingIndicator: h,
                        onError: k
                    } = e, p = n.useRef(null), E = n.useRef(null), [I, R] = n.useState(!0), [_, T] = n.useState(!1), M = n.useRef(!1);
                    M.current = t && o;
                    let N = null == a ? (0, g.getStickerAssetUrl)(l) : a;
                    return (u(null != N, "Unable to determine sticker asset URL. Sticker ID: ".concat(l.id)), n.useEffect(() => {
                        if (null == p.current || null == N) return;
                        let e = Math.min(2, (0, m.getDevicePixelRatio)());
                        p.current.width = s * e, p.current.height = s * e;
                        let t = !1,
                            r = async () => {
                                let {
                                    default: e
                                } = await i.el("619596").then(i.bind(i, "619596"));
                                null != p.current && (E.current = new e({
                                    canvas: p.current,
                                    animationId: l.id,
                                    assetUrl: N,
                                    assetData: c,
                                    onInitialDraw: () => {
                                        !t && R(!1)
                                    },
                                    onError: () => {
                                        !t && (R(!1), T(!0), null == k || k())
                                    }
                                }), M.current && E.current.setState(!0))
                            };
                        return r(), () => {
                            var e;
                            null === (e = E.current) || void 0 === e || e.drop(), E.current = null, t = !0
                        }
                    }, [N, s, l.id, c, k]), n.useEffect(() => {
                        var e;
                        let i;
                        !t && (i = 0), null === (e = E.current) || void 0 === e || e.setState(t && o, i)
                    }, [l, t, o]), null == N) ? null : (0, r.jsx)("div", {
                        role: "img",
                        className: d,
                        "aria-label": _ ? v.default.Messages.ERROR_LOADING_STICKER : x(l),
                        ref: S,
                        children: (0, r.jsx)(L, {
                            hasError: _,
                            isLoading: I,
                            maskAsset: f,
                            size: s,
                            withLoadingIndicator: h,
                            children: C((0, r.jsx)("canvas", {
                                className: y.lottieCanvas,
                                ref: p
                            }), l.id)
                        })
                    })
                },
                N = e => {
                    let {
                        shouldAnimate: t,
                        sticker: i,
                        isFocused: s,
                        size: a,
                        className: u,
                        maskAsset: c,
                        positionRef: o,
                        withLoadingIndicator: f,
                        fileUri: S
                    } = e, [m, h] = n.useState(!1), [k, p] = n.useState(!0), [E, I] = n.useState(!1), v = n.useRef(null), _ = n.useRef(null), T = null != S ? S : (0, g.getStickerAssetUrl)(i, {
                        isPreview: !t || !m || !s,
                        size: a
                    }), M = n.useCallback(() => {
                        p(!1)
                    }, []), N = n.useCallback(() => {
                        I(!0)
                    }, []);
                    return (n.useEffect(() => {
                        if (null != v.current) {
                            let {
                                isVisible: e
                            } = v.current;
                            h(e)
                        }
                    }, []), n.useLayoutEffect(() => {
                        var e;
                        (null === (e = _.current) || void 0 === e ? void 0 : e.complete) === !0 && p(!1)
                    }, []), null == T) ? null : (0, r.jsx)(d.VisibilitySensor, {
                        ref: v,
                        onChange: h,
                        threshold: .7,
                        children: (0, r.jsx)("div", {
                            className: l(u, y.pngImageWrapper),
                            ref: o,
                            children: (0, r.jsx)(L, {
                                hasError: E,
                                isLoading: k,
                                maskAsset: c,
                                size: a,
                                withLoadingIndicator: f,
                                children: C((0, r.jsx)("img", {
                                    className: y.pngImage,
                                    alt: x(i),
                                    src: T,
                                    draggable: !1,
                                    onError: N,
                                    onLoad: M,
                                    onContextMenu: R,
                                    ref: _
                                }), i.id)
                            })
                        })
                    })
                },
                U = e => {
                    let {
                        disableAnimation: t,
                        enlargeScaleFactor: i,
                        enlargeWithName: s,
                        isInteracting: l,
                        positionRef: a,
                        size: u,
                        sticker: d
                    } = e, m = (0, o.useStateFromStores)([S.default], () => S.default.useReducedMotion), h = n.useRef(null), p = {
                        transform: "scale(".concat(m ? 1 : 1 / i, ")"),
                        opacity: 0
                    }, E = (0, c.useTransition)(l, {
                        ref: h,
                        from: p,
                        enter: {
                            transform: "scale(1)",
                            opacity: 1
                        },
                        leave: p,
                        config: _
                    }), I = n.useRef(null), g = (0, c.useSpring)({
                        ref: I,
                        transform: l || m ? "translateY(0)" : "translateY(-25px)",
                        opacity: l ? 1 : 0,
                        config: T
                    });
                    return (0, c.useChain)(l ? [h, I] : [I, h], l ? [0, .0625] : [0, 0]), E((e, n) => n && (0, r.jsx)(k.AppReferencePositionLayer, {
                        className: y.positionedLayer,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        reference: a,
                        children: () => (0, r.jsxs)("div", {
                            className: y.overlayWrapper,
                            children: [(0, r.jsx)(c.animated.div, {
                                className: y.overlayStickerWrapper,
                                style: e,
                                children: (0, r.jsx)(A, {
                                    className: y.overlaySticker,
                                    disableAnimation: t,
                                    enlargeOnInteraction: !1,
                                    isInteracting: l,
                                    maskAsset: !1,
                                    sticker: d,
                                    size: Math.round(u * i),
                                    withLoadingIndicator: !1
                                })
                            }), s && (0, r.jsx)(c.animated.div, {
                                className: y.overlayLabelWrapper,
                                style: g,
                                children: (0, r.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    className: y.overlayLabel,
                                    children: d.name
                                })
                            })]
                        })
                    }))
                },
                A = e => {
                    let {
                        isInteracting: t = !1,
                        disableAnimation: i = !1,
                        enlargeOnInteraction: s = !1,
                        enlargeWithName: l = !0,
                        enlargeScaleFactor: a = 1.55,
                        maskAsset: u = !1,
                        size: c,
                        sticker: o,
                        className: d,
                        withLoadingIndicator: f,
                        assetData: S,
                        fileUri: m,
                        onError: h
                    } = e, k = (0, p.useIsWindowFocused)(), g = (0, E.useShouldAnimateSticker)(t) && !i, v = n.useRef(null);
                    if (null == o) return null;
                    let y = o.format_type === I.StickerFormat.LOTTIE ? M : N;
                    return (0, r.jsxs)(n.Fragment, {
                        children: [(0, r.jsx)(y, {
                            shouldAnimate: g,
                            isFocused: k,
                            size: c,
                            sticker: o,
                            className: d,
                            maskAsset: u,
                            positionRef: v,
                            withLoadingIndicator: f,
                            assetData: S,
                            fileUri: m,
                            onError: h
                        }), s && (0, r.jsx)(U, {
                            disableAnimation: i,
                            enlargeScaleFactor: a,
                            enlargeWithName: l,
                            isInteracting: t,
                            positionRef: v,
                            size: c,
                            sticker: o
                        })]
                    }, "".concat(o.id, ",").concat(c))
                };
            var F = A
        },
        591522: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("45029"),
                s = i("826079"),
                l = e => {
                    let {
                        size: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: s.unownedStickerLockContainer,
                        style: {
                            width: t,
                            height: t
                        },
                        children: (0, r.jsx)(n.default, {
                            width: 12,
                            height: 12,
                            className: s.unownedStickerLockIcon
                        })
                    })
                }
        },
        77162: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return C
                }
            });
            var r = i("37983"),
                n = i("884691"),
                s = i("414456"),
                l = i.n(s),
                a = i("917351"),
                u = i("617258"),
                c = i("77078"),
                o = i("272030"),
                d = i("997289"),
                f = i("246511"),
                S = i("151185"),
                m = i("599110"),
                h = i("866353"),
                k = i("161585"),
                p = i("24373"),
                E = i("41170"),
                I = i("591522"),
                g = i("49111"),
                v = i("782340"),
                y = i("267005");
            let R = (0, u.cssValueToNumber)(y.stickerPickerPreviewDimensions),
                _ = (0, u.cssValueToNumber)(y.stickerPickerPreviewPadding),
                T = n.memo(function(e) {
                    let {
                        isDisplayingIndividualStickers: t = !1,
                        preferAnimation: s = !0,
                        getStickerItemProps: u,
                        getStickerRowProps: T,
                        gutterWidth: C,
                        inspectedStickerPosition: x,
                        isScrolling: L,
                        isUsingKeyboardNavigation: M,
                        onInspect: N,
                        onSelect: U,
                        rowIndex: A,
                        stickerClassName: F,
                        stickerDescriptors: P,
                        stickerPadding: b = _,
                        stickerSize: O = R,
                        ownedStickerPacks: j,
                        enlargeOnInteraction: K = !1,
                        channel: w,
                        currentUser: G,
                        checkSendability: D = !0
                    } = e, {
                        location: H
                    } = (0, d.useAnalyticsContext)(), V = O + 2 * b, z = n.useMemo(() => ({
                        gridColumnGap: C,
                        gridTemplateColumns: "repeat(auto-fill, ".concat(V, "px)"),
                        height: V,
                        paddingRight: t ? void 0 : V
                    }), [t, C, V]), B = n.useMemo(() => ({
                        width: O,
                        height: O,
                        padding: b
                    }), [b, O]);
                    return (0, r.jsx)("div", {
                        className: y.row,
                        style: z,
                        ...null == T ? void 0 : T(A),
                        children: P.map(e => {
                            var d;
                            let R = e.visibleRowIndex === (null == x ? void 0 : x.rowIndex) && e.columnIndex === (null == x ? void 0 : x.columnIndex),
                                _ = e.type === k.StickerGridItemTypes.STICKER && K && R,
                                T = (0, a.throttle)(() => {
                                    (null == L ? void 0 : L.current) !== !0 && (null == M ? void 0 : M.current) !== !0 && !R && (null == N || N(e))
                                }, 250),
                                {
                                    ref: C,
                                    tabIndex: P,
                                    onFocus: b,
                                    ...V
                                } = null !== (d = null == u ? void 0 : u(e.columnIndex, A)) && void 0 !== d ? d : {};
                            switch (e.type) {
                                case k.StickerGridItemTypes.CREATE_STICKER:
                                    return (0, r.jsx)("div", {
                                        ...V,
                                        children: (0, r.jsxs)(c.Clickable, {
                                            "aria-label": e.name,
                                            className: l(y.createSticker, F, {
                                                [y.createInspected]: R
                                            }),
                                            innerRef: C,
                                            tabIndex: P,
                                            onFocus: null != b ? b : T,
                                            onMouseMove: T,
                                            onClick: () => {
                                                e.type === k.StickerGridItemTypes.CREATE_STICKER && (m.default.track(g.AnalyticEvents.OPEN_MODAL, {
                                                    type: g.AnalyticsSections.CREATE_STICKER_MODAL,
                                                    location: H
                                                }), (0, c.openModalLazy)(async () => {
                                                    let {
                                                        default: t
                                                    } = await i.el("54666").then(i.bind(i, "54666"));
                                                    return i => (0, r.jsx)(t, {
                                                        guildId: e.guild_id,
                                                        ...i
                                                    })
                                                }))
                                            },
                                            style: B,
                                            children: [!K && (0, r.jsx)("div", {
                                                className: y.inspectedIndicator
                                            }), (0, r.jsx)("div", {
                                                className: y.iconWrapper,
                                                children: (0, r.jsx)(S.default, {
                                                    className: y.icon
                                                })
                                            }), (0, r.jsx)(c.Text, {
                                                color: "interactive-active",
                                                variant: "text-xs/normal",
                                                children: v.default.Messages.STICKER_PICKER_CREATE_STICKER
                                            })]
                                        })
                                    }, e.guild_id);
                                case k.StickerGridItemTypes.STICKER: {
                                    let a = t && null != j && (0, p.isStandardSticker)(e.sticker) && !j.has(e.sticker.pack_id);
                                    return (0, n.createElement)("div", {
                                        ...V,
                                        key: e.sticker.id
                                    }, (0, r.jsxs)(c.Clickable, {
                                        className: l(y.sticker, F, {
                                            [y.stickerInspected]: R
                                        }),
                                        innerRef: C,
                                        tabIndex: P,
                                        onFocus: null != b ? b : T,
                                        onMouseMove: T,
                                        onClick: t => {
                                            (null == L ? void 0 : L.current) !== !0 && (null == M ? void 0 : M.current) !== !0 && (null == U || U(e, t))
                                        },
                                        onContextMenu: e => {
                                            (0, o.openContextMenuLazy)(e, async () => {
                                                let {
                                                    default: e
                                                } = await i.el("367343").then(i.bind(i, "367343"));
                                                return t => (0, r.jsx)(e, {
                                                    ...t
                                                })
                                            })
                                        },
                                        style: B,
                                        "data-type": f.PickerContextMenuDataTypes.STICKER,
                                        "data-id": e.sticker.id,
                                        children: [(0, r.jsx)(c.HiddenVisually, {
                                            children: (0, E.getStickerAltText)(e.sticker)
                                        }), (0, r.jsxs)("div", {
                                            "aria-hidden": !0,
                                            children: [!K && (0, r.jsx)("div", {
                                                className: y.inspectedIndicator
                                            }), (0, r.jsx)(E.default, {
                                                className: l(y.stickerNode, {
                                                    [y.stickerNodeDimmed]: K && !R && null != x && -1 !== x.rowIndex && -1 !== x.columnIndex,
                                                    [y.stickerNodeHidden]: _,
                                                    [y.stickerUnsendable]: D && !(0, h.isSendableSticker)(e.sticker, G, w)
                                                }),
                                                disableAnimation: !R && !s,
                                                enlargeOnInteraction: K,
                                                isInteracting: R,
                                                maskAsset: R,
                                                sticker: e.sticker,
                                                size: O
                                            }), a ? (0, r.jsx)(I.default, {
                                                size: 20
                                            }) : null]
                                        })]
                                    }))
                                }
                            }
                        })
                    })
                });
            var C = T
        },
        113270: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("77078"),
                s = i("599110"),
                l = i("49111");

            function a(e) {
                s.default.track(l.AnalyticEvents.OPEN_MODAL, {
                    type: l.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e
                }), (0, n.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("122846").then(i.bind(i, "122846"));
                    return t => (0, r.jsx)(e, {
                        ...t
                    })
                })
            }
        },
        42507: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useFrecencySettings: function() {
                    return a
                }
            });
            var r = i("884691"),
                n = i("446674"),
                s = i("872173"),
                l = i("374363");

            function a() {
                return r.useEffect(() => {
                    s.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, n.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
            }
        },
        54560: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("469563"),
                s = i("441888"),
                l = i("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: i = 20,
                        color: n = "currentColor",
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        width: t,
                        height: i,
                        ...(0, l.default)(s),
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 .663v4.739A2.594 2.594 0 0014.6 8h4.74a.656.656 0 00.466-1.12L13.121.196A.654.654 0 0012 .663zm2.576 9.365A4.608 4.608 0 019.97 5.422V.058H1.994A2 2 0 000 2.052v15.952a2 2 0 001.994 1.994h15.952a2 2 0 001.994-1.994v-7.976h-5.364zM8 15.553a2 2 0 113.999 0h1.333a3.333 3.333 0 10-6.666 0h1.334zM2.716 13.5L2 12.784 2.784 12l.716.716.716-.716.784.784-.716.716.716.716-.784.784-.716-.716-.716.716L2 14.216l.716-.716zM15 12.784l.716.716-.716.716.784.784.716-.716.716.716.784-.784-.716-.716.716-.716-.784-.784-.716.716-.716-.716-.784.784z",
                            fill: n
                        })
                    })
                }, s.StickerSadIcon, void 0, {
                    size: 20
                })
        },
        597285: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                StickerSadIcon: function() {
                    return l
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("669491"),
                s = i("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: l = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 3.83a1 1 0 0 0 1.39-.27 3.5 3.5 0 0 1 5.82 0 1 1 0 0 0 1.66-1.12 5.5 5.5 0 0 0-9.14 0 1 1 0 0 0 .27 1.4Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                        className: a
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=27505.c390eef7ed890465c8ff.js.map