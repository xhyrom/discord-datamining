(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74143"], {
        540105: function(e, t, r) {
            "use strict";
            e.exports = r.p + "abb68ef84648ccf3be81.svg"
        },
        441888: function(e, t, r) {
            "use strict";
            r.r(t);
            var i = r("597285");
            r.es(i, t)
        },
        997289: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useAnalyticsContext: function() {
                    return s
                }
            });
            var i = r("884691"),
                n = r("599110");
            let s = () => i.useContext(n.AnalyticsContext)
        },
        246511: function(e, t, r) {
            "use strict";
            var i, n, s, a;
            r.r(t), r.d(t, {
                InspectedExpressionChangeSource: function() {
                    return i
                },
                PickerContextMenuDataTypes: function() {
                    return n
                }
            }), (s = i || (i = {}))[s.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", s[s.MOUSE_EVENT = 1] = "MOUSE_EVENT", (a = n || (n = {})).EMOJI = "emoji", a.STICKER = "sticker", a.PACK_ICON = "pack-icon"
        },
        467094: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchStickerPack: function() {
                    return m
                },
                fetchStickerPacks: function() {
                    return y
                },
                fetchSticker: function() {
                    return g
                },
                fetchGuildStickers: function() {
                    return C
                },
                deleteGuildSticker: function() {
                    return v
                },
                createGuildSticker: function() {
                    return T
                },
                updateGuildSticker: function() {
                    return R
                },
                addStickerPreview: function() {
                    return _
                },
                clearStickerPreview: function() {
                    return A
                },
                favoriteSticker: function() {
                    return L
                },
                unfavoriteSticker: function() {
                    return N
                }
            }), r("424973");
            var i = r("917351"),
                n = r.n(i),
                s = r("872717"),
                a = r("913144"),
                l = r("404118"),
                c = r("619443"),
                u = r("915639"),
                d = r("872173"),
                o = r("766274"),
                f = r("341542"),
                S = r("697218"),
                k = r("271560"),
                E = r("364685"),
                p = r("49111"),
                I = r("397336"),
                h = r("782340");
            let m = async (e, t) => {
                let {
                    body: r
                } = await (0, k.httpGetWithCountryCodeQuery)(p.Endpoints.STICKER_PACK(e));
                return a.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: r,
                    ingestStickers: t
                }), r
            }, y = async function() {
                let {
                    locale: e = u.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (E.default.isFetchingStickerPacks || E.default.hasLoadedStickerPacks) return;
                a.default.wait(() => {
                    a.default.dispatch({
                        type: "STICKER_PACKS_FETCH_START"
                    })
                });
                let {
                    body: {
                        sticker_packs: t
                    }
                } = await s.default.get({
                    url: p.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                a.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, g = async e => {
                let {
                    body: t
                } = await s.default.get({
                    url: p.Endpoints.STICKER(e)
                });
                a.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, C = async e => {
                let {
                    body: t
                } = await s.default.get({
                    url: p.Endpoints.GUILD_STICKER_PACKS(e)
                });
                a.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new o.default(e.user)
                    } : e)
                })
            }, v = async e => {
                await s.default.delete({
                    url: p.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, T = async (e, t) => {
                let r = await s.default.post({
                    url: p.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return a.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...r.body,
                        user: S.default.getCurrentUser()
                    }
                }), r.body
            }, R = async (e, t, r) => {
                let i = await s.default.patch({
                    url: p.Endpoints.GUILD_STICKER(e, t),
                    body: r
                });
                return i.body
            };

            function _(e, t, r) {
                a.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: r
                })
            }

            function A(e, t) {
                a.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function x(e) {
                return f.default.totalUnavailableGuilds > 0 || !c.default.isConnected() ? e : e.filter(e => null != E.default.getStickerById(e))
            }

            function L(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = x(t.stickerIds), n.size(t.stickerIds) >= I.MAX_FAVORITES) ? (l.default.show({
                    title: h.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: h.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: I.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), I.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function N(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = x(t.stickerIds)
                }, I.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        256860: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useFetchStickerPack: function() {
                    return C
                },
                useShouldAnimateSticker: function() {
                    return v
                },
                useStickersGrid: function() {
                    return T
                },
                useHasSendableSticker: function() {
                    return R
                },
                useFetchStickerPacks: function() {
                    return _
                },
                useFavoriteStickerIds: function() {
                    return L
                },
                useFavoriteStickers: function() {
                    return N
                },
                useLatestFrecentStickers: function() {
                    return M
                },
                useStickerForRenderableSticker: function() {
                    return P
                },
                useFilteredStickerPackCategories: function() {
                    return w
                }
            }), r("424973"), r("222007"), r("843762");
            var i = r("884691"),
                n = r("446674"),
                s = r("817963"),
                a = r("845579"),
                l = r("42507"),
                c = r("305961"),
                u = r("162771"),
                d = r("677099"),
                o = r("697218"),
                f = r("427459"),
                S = r("991170"),
                k = r("866353"),
                E = r("467094"),
                p = r("865372"),
                I = r("364685"),
                h = r("161585"),
                m = r("24373"),
                y = r("49111"),
                g = r("782340");
            let C = e => {
                    _();
                    let t = (0, n.useStateFromStores)([I.default], () => I.default.hasLoadedStickerPacks);
                    i.useEffect(() => {
                        t && null == I.default.getStickerPack(e) && (0, E.fetchStickerPack)(e)
                    }, [e, t])
                },
                v = e => {
                    let t = a.AnimateStickers.useSetting();
                    return (0, m.shouldAnimateSticker)(t, e)
                },
                T = e => {
                    let {
                        collapsedStickersCategories: t,
                        filteredStickers: r,
                        listPaddingRight: n = 0,
                        listWidth: a = 0,
                        stickerNodeMargin: l = 0,
                        stickerNodeWidth: d,
                        stickersCategories: o
                    } = e;
                    return i.useMemo(() => {
                        let e = Math.floor((a - n + l) / (d + l)),
                            i = Math.floor(Math.max(l, (a - n - d * e) / (e - 1))),
                            S = [],
                            k = [],
                            E = [],
                            p = 0,
                            I = 0,
                            y = 0;
                        if (0 !== a) {
                            let i = function(t, r) {
                                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    n = (0, m.isGuildSticker)(t[0]) ? c.default.getGuild(t[0].guild_id) : void 0,
                                    {
                                        canCreateExpressions: a
                                    } = (0, s.getManageResourcePermissions)(n),
                                    l = u.default.getGuildId(),
                                    d = o.findIndex(e => e.type === h.StickerCategoryTypes.FAVORITE),
                                    C = o.findIndex(e => e.type === h.StickerCategoryTypes.RECENT),
                                    v = t.length;
                                null != n && l === n.id && a && t.length < (0, f.getTotalStickerCountForTier)(n.premiumTier) && v++;
                                let T = Math.ceil(v / e);
                                k[I] = i ? 0 : T;
                                for (let s = 0; s < T; s++) {
                                    let a = s * e,
                                        l = a + e,
                                        c = t.slice(a, l).map((e, t) => ({
                                            type: h.StickerGridItemTypes.STICKER,
                                            sticker: e,
                                            packId: (0, m.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                                            gridSectionIndex: I,
                                            rowIndex: p,
                                            columnIndex: t,
                                            visibleRowIndex: y,
                                            category: r
                                        }));
                                    I > C && I > d && null != n && v > t.length && c.push({
                                        type: h.StickerGridItemTypes.CREATE_STICKER,
                                        guild_id: n.id,
                                        name: g.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                        gridSectionIndex: I,
                                        rowIndex: p,
                                        columnIndex: c.length,
                                        visibleRowIndex: y
                                    }), !i && (y++, E.push(c), S.push(c.length)), p++
                                }
                                I++
                            };
                            if (null == r)
                                for (let e of o) e.stickers.length > 0 ? (p++, i(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === h.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (k[I] = 0, I++);
                            else r.sendable.length > 0 && i(r.sendable, h.StickerCategoryTypes.SEARCH_RESULTS), r.sendableWithPremium.length > 0 && i(r.sendableWithPremium, h.StickerCategoryTypes.SEARCH_RESULTS)
                        }
                        return {
                            rowCount: p,
                            rowCountBySection: k,
                            stickersGrid: E,
                            gutterWidth: i,
                            columnCounts: S
                        }
                    }, [t, r, n, a, l, d, o])
                },
                R = e => {
                    let t = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                    return (0, n.useStateFromStores)([I.default], () => {
                        let r = I.default.getAllStickersIterator();
                        for (let i of r)
                            if ((0, k.isSendableSticker)(i, t, e)) return !0;
                        return !1
                    }, [t, e])
                },
                _ = () => {
                    i.useEffect(() => {
                        (0, E.fetchStickerPacks)()
                    }, [])
                },
                A = e => {
                    let t = (0, n.useStateFromStores)([I.default], () => I.default.getAllGuildStickers()),
                        r = (0, n.useStateFromStoresArray)([d.default, c.default], () => {
                            let e = d.default.getFlattenedGuildIds(),
                                t = [];
                            return e.forEach(e => {
                                let r = c.default.getGuild(e);
                                null != r && t.push(r)
                            }), t
                        }, []),
                        a = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                    return i.useMemo(() => {
                        let i = [];
                        for (let {
                                name: e,
                                id: n
                            }
                            of r) {
                            let r = t.get(n);
                            null != r && 0 !== r.length && i.push({
                                type: h.StickerCategoryTypes.GUILD,
                                id: n,
                                name: e,
                                stickers: r
                            })
                        }
                        if ((null == e ? void 0 : e.getGuildId()) != null) {
                            let t = c.default.getGuild(e.getGuildId()),
                                {
                                    canManageAllExpressions: r
                                } = (0, s.getManageResourcePermissions)(t),
                                n = i.findIndex(t => t.id === e.getGuildId());
                            n >= 1 ? i.unshift(i.splice(n, 1)[0]) : -1 === n && null != t && r && i.unshift({
                                type: h.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                                id: t.id,
                                name: t.name,
                                stickers: []
                            }), null != a && !S.default.can({
                                permission: y.Permissions.USE_EXTERNAL_EMOJIS,
                                user: a,
                                context: e
                            }) && (i = i.filter(t => t.id === e.getGuildId()))
                        }
                        return i
                    }, [t, r, a, e])
                },
                x = [];

            function L() {
                var e, t;
                let r = (0, l.useFrecencySettings)();
                return null !== (t = null === (e = r.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : x
            }

            function N() {
                let e = L(),
                    t = (0, n.useStateFromStoresArray)([I.default], () => e.map(e => I.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
                return t
            }

            function M() {
                let e = function() {
                        var e, t;
                        let r = (0, l.useFrecencySettings)(),
                            i = x;
                        return (null == r ? void 0 : null === (e = r.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (i = Object.keys(null == r ? void 0 : null === (t = r.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), i
                    }(),
                    t = (0, n.useStateFromStoresArray)([I.default], () => e.map(e => I.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
                return t
            }
            let F = e => {
                    let t = N(),
                        {
                            packs: r,
                            frequentlyUsedStickers: s
                        } = (0, n.useStateFromStoresObject)([I.default, p.default], () => ({
                            packs: I.default.getPremiumPacks(),
                            frequentlyUsedStickers: p.default.stickerFrecencyWithoutFetchingLatest.frequently
                        }), []),
                        a = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                        l = A(e);
                    return i.useMemo(() => {
                        var i;
                        let n = r.map(m.createStickerPackCategory),
                            c = {
                                type: h.StickerCategoryTypes.FAVORITE,
                                id: h.StickerCategoryTypes.FAVORITE,
                                name: g.default.Messages.CATEGORY_FAVORITE,
                                stickers: t
                            },
                            u = {
                                type: h.StickerCategoryTypes.RECENT,
                                id: h.StickerCategoryTypes.RECENT,
                                name: g.default.Messages.STICKER_CATEGORY_RECENT,
                                stickers: null !== (i = null == s ? void 0 : s.filter(t => {
                                    if ((0, m.isGuildSticker)(t)) {
                                        var i, n;
                                        return null !== (n = null === (i = I.default.getStickersByGuildId(t.guild_id)) || void 0 === i ? void 0 : i.some(e => e.id === t.id)) && void 0 !== n && n && (0, k.getStickerSendability)(t, a, e) !== k.StickerSendability.NONSENDABLE
                                    }
                                    if ((0, m.isStandardSticker)(t)) return r.some(e => e.id === t.pack_id)
                                })) && void 0 !== i ? i : []
                            };
                        return [c, u, ...l, ...n]
                    }, [r, t, s, l, a, e])
                },
                P = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = (0, n.useStateFromStores)([I.default], () => I.default.getStickerById(e.id)),
                        [s, a] = i.useState(!0),
                        [l, c] = i.useState(!1),
                        u = (0, m.isGuildSticker)(e) || (0, m.isStandardSticker)(e);
                    return (i.useEffect(() => {
                        let i = async () => {
                            if (t && !u && null == r && s && !l) {
                                a(!1);
                                try {
                                    await (0, E.fetchSticker)(e.id)
                                } catch {}
                                c(!0)
                            }
                        };
                        i()
                    }, [t]), u) ? [e, l] : [null != r ? r : null, l]
                },
                w = e => {
                    let t = F(e);
                    return i.useMemo(() => t.filter(e => e.type === h.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
                }
        },
        41170: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getStickerAltText: function() {
                    return A
                },
                default: function() {
                    return P
                }
            }), r("222007");
            var i = r("37983"),
                n = r("884691"),
                s = r("414456"),
                a = r.n(s),
                l = r("627445"),
                c = r.n(l),
                u = r("146606"),
                d = r("446674"),
                o = r("290381"),
                f = r("77078"),
                S = r("206230"),
                k = r("407063"),
                E = r("54560"),
                p = r("983782"),
                I = r("866190"),
                h = r("256860"),
                m = r("161585"),
                y = r("24373"),
                g = r("782340"),
                C = r("419664");
            let v = e => e.preventDefault(),
                T = {
                    tension: 1100,
                    friction: 40
                },
                R = {
                    tension: 1600,
                    friction: 60
                };

            function _(e, t) {
                return n.cloneElement(e, {
                    "data-type": "sticker",
                    "data-id": t
                })
            }

            function A(e) {
                let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
                return g.default.Messages.STICKER_A11Y_LABEL.format({
                    stickerName: t
                })
            }
            let x = e => {
                    let {
                        children: t,
                        hasError: r,
                        isLoading: n,
                        maskAsset: s,
                        size: l,
                        withLoadingIndicator: c = !0
                    } = e, u = l >= 33;
                    return (0, i.jsxs)("div", {
                        className: a(C.assetWrapper, {
                            [C.assetWrapperMasked]: r || s
                        }),
                        style: {
                            height: l,
                            width: l
                        },
                        children: [r ? (0, i.jsxs)("div", {
                            className: C.error,
                            children: [(0, i.jsx)(E.default, {
                                className: C.errorIcon
                            }), u && (0, i.jsx)(f.Text, {
                                className: C.errorText,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: g.default.Messages.STICKER_ASSET_LOAD_ERROR
                            })]
                        }) : t, c && n && (0, i.jsx)("div", {
                            className: C.loadingIndicator
                        })]
                    })
                },
                L = e => {
                    let {
                        shouldAnimate: t,
                        size: s,
                        sticker: a,
                        fileUri: l,
                        assetData: u,
                        isFocused: d,
                        className: o,
                        maskAsset: f,
                        positionRef: S,
                        withLoadingIndicator: E,
                        onError: p
                    } = e, I = n.useRef(null), h = n.useRef(null), [m, v] = n.useState(!0), [T, R] = n.useState(!1), L = n.useRef(!1);
                    L.current = t && d;
                    let N = null == l ? (0, y.getStickerAssetUrl)(a) : l;
                    return (c(null != N, "Unable to determine sticker asset URL. Sticker ID: ".concat(a.id)), n.useEffect(() => {
                        if (null == I.current || null == N) return;
                        let e = Math.min(2, (0, k.getDevicePixelRatio)());
                        I.current.width = s * e, I.current.height = s * e;
                        let t = !1,
                            i = async () => {
                                let {
                                    default: e
                                } = await r.el("619596").then(r.bind(r, "619596"));
                                null != I.current && (h.current = new e({
                                    canvas: I.current,
                                    animationId: a.id,
                                    assetUrl: N,
                                    assetData: u,
                                    onInitialDraw: () => {
                                        !t && v(!1)
                                    },
                                    onError: () => {
                                        !t && (v(!1), R(!0), null == p || p())
                                    }
                                }), L.current && h.current.setState(!0))
                            };
                        return i(), () => {
                            var e;
                            null === (e = h.current) || void 0 === e || e.drop(), h.current = null, t = !0
                        }
                    }, [N, s, a.id, u, p]), n.useEffect(() => {
                        var e;
                        let r;
                        !t && (r = 0), null === (e = h.current) || void 0 === e || e.setState(t && d, r)
                    }, [a, t, d]), null == N) ? null : (0, i.jsx)("div", {
                        role: "img",
                        className: o,
                        "aria-label": T ? g.default.Messages.ERROR_LOADING_STICKER : A(a),
                        ref: S,
                        children: (0, i.jsx)(x, {
                            hasError: T,
                            isLoading: m,
                            maskAsset: f,
                            size: s,
                            withLoadingIndicator: E,
                            children: _((0, i.jsx)("canvas", {
                                className: C.lottieCanvas,
                                ref: I
                            }), a.id)
                        })
                    })
                },
                N = e => {
                    let {
                        shouldAnimate: t,
                        sticker: r,
                        isFocused: s,
                        size: l,
                        className: c,
                        maskAsset: u,
                        positionRef: d,
                        withLoadingIndicator: f,
                        fileUri: S
                    } = e, [k, E] = n.useState(!1), [p, I] = n.useState(!0), [h, m] = n.useState(!1), g = n.useRef(null), T = n.useRef(null), R = null != S ? S : (0, y.getStickerAssetUrl)(r, {
                        isPreview: !t || !k || !s,
                        size: l
                    }), L = n.useCallback(() => {
                        I(!1)
                    }, []), N = n.useCallback(() => {
                        m(!0)
                    }, []);
                    return (n.useEffect(() => {
                        if (null != g.current) {
                            let {
                                isVisible: e
                            } = g.current;
                            E(e)
                        }
                    }, []), n.useLayoutEffect(() => {
                        var e;
                        (null === (e = T.current) || void 0 === e ? void 0 : e.complete) === !0 && I(!1)
                    }, []), null == R) ? null : (0, i.jsx)(o.VisibilitySensor, {
                        ref: g,
                        onChange: E,
                        threshold: .7,
                        children: (0, i.jsx)("div", {
                            className: a(c, C.pngImageWrapper),
                            ref: d,
                            children: (0, i.jsx)(x, {
                                hasError: h,
                                isLoading: p,
                                maskAsset: u,
                                size: l,
                                withLoadingIndicator: f,
                                children: _((0, i.jsx)("img", {
                                    className: C.pngImage,
                                    alt: A(r),
                                    src: R,
                                    draggable: !1,
                                    onError: N,
                                    onLoad: L,
                                    onContextMenu: v,
                                    ref: T
                                }), r.id)
                            })
                        })
                    })
                },
                M = e => {
                    let {
                        disableAnimation: t,
                        enlargeScaleFactor: r,
                        enlargeWithName: s,
                        isInteracting: a,
                        positionRef: l,
                        size: c,
                        sticker: o
                    } = e, k = (0, d.useStateFromStores)([S.default], () => S.default.useReducedMotion), E = n.useRef(null), I = {
                        transform: "scale(".concat(k ? 1 : 1 / r, ")"),
                        opacity: 0
                    }, h = (0, u.useTransition)(a, {
                        ref: E,
                        from: I,
                        enter: {
                            transform: "scale(1)",
                            opacity: 1
                        },
                        leave: I,
                        config: T
                    }), m = n.useRef(null), y = (0, u.useSpring)({
                        ref: m,
                        transform: a || k ? "translateY(0)" : "translateY(-25px)",
                        opacity: a ? 1 : 0,
                        config: R
                    });
                    return (0, u.useChain)(a ? [E, m] : [m, E], a ? [0, .0625] : [0, 0]), h((e, n) => n && (0, i.jsx)(p.AppReferencePositionLayer, {
                        className: C.positionedLayer,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        reference: l,
                        children: () => (0, i.jsxs)("div", {
                            className: C.overlayWrapper,
                            children: [(0, i.jsx)(u.animated.div, {
                                className: C.overlayStickerWrapper,
                                style: e,
                                children: (0, i.jsx)(F, {
                                    className: C.overlaySticker,
                                    disableAnimation: t,
                                    enlargeOnInteraction: !1,
                                    isInteracting: a,
                                    maskAsset: !1,
                                    sticker: o,
                                    size: Math.round(c * r),
                                    withLoadingIndicator: !1
                                })
                            }), s && (0, i.jsx)(u.animated.div, {
                                className: C.overlayLabelWrapper,
                                style: y,
                                children: (0, i.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    className: C.overlayLabel,
                                    children: o.name
                                })
                            })]
                        })
                    }))
                },
                F = e => {
                    let {
                        isInteracting: t = !1,
                        disableAnimation: r = !1,
                        enlargeOnInteraction: s = !1,
                        enlargeWithName: a = !0,
                        enlargeScaleFactor: l = 1.55,
                        maskAsset: c = !1,
                        size: u,
                        sticker: d,
                        className: o,
                        withLoadingIndicator: f,
                        assetData: S,
                        fileUri: k,
                        onError: E
                    } = e, p = (0, I.useIsWindowFocused)(), y = (0, h.useShouldAnimateSticker)(t) && !r, g = n.useRef(null);
                    if (null == d) return null;
                    let C = d.format_type === m.StickerFormat.LOTTIE ? L : N;
                    return (0, i.jsxs)(n.Fragment, {
                        children: [(0, i.jsx)(C, {
                            shouldAnimate: y,
                            isFocused: p,
                            size: u,
                            sticker: d,
                            className: o,
                            maskAsset: c,
                            positionRef: g,
                            withLoadingIndicator: f,
                            assetData: S,
                            fileUri: k,
                            onError: E
                        }), s && (0, i.jsx)(M, {
                            disableAnimation: r,
                            enlargeScaleFactor: l,
                            enlargeWithName: a,
                            isInteracting: t,
                            positionRef: g,
                            size: u,
                            sticker: d
                        })]
                    }, "".concat(d.id, ",").concat(u))
                };
            var P = F
        },
        591522: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var i = r("37983");
            r("884691");
            var n = r("45029"),
                s = r("440162"),
                a = e => {
                    let {
                        size: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: s.unownedStickerLockContainer,
                        style: {
                            width: t,
                            height: t
                        },
                        children: (0, i.jsx)(n.default, {
                            width: 12,
                            height: 12,
                            className: s.unownedStickerLockIcon
                        })
                    })
                }
        },
        77162: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            });
            var i = r("37983"),
                n = r("884691"),
                s = r("414456"),
                a = r.n(s),
                l = r("917351"),
                c = r("617258"),
                u = r("77078"),
                d = r("272030"),
                o = r("997289"),
                f = r("246511"),
                S = r("151185"),
                k = r("599110"),
                E = r("866353"),
                p = r("161585"),
                I = r("24373"),
                h = r("41170"),
                m = r("591522"),
                y = r("49111"),
                g = r("782340"),
                C = r("677930");
            let v = (0, c.cssValueToNumber)(C.stickerPickerPreviewDimensions),
                T = (0, c.cssValueToNumber)(C.stickerPickerPreviewPadding),
                R = n.memo(function(e) {
                    let {
                        isDisplayingIndividualStickers: t = !1,
                        preferAnimation: s = !0,
                        getStickerItemProps: c,
                        getStickerRowProps: R,
                        gutterWidth: _,
                        inspectedStickerPosition: A,
                        isScrolling: x,
                        isUsingKeyboardNavigation: L,
                        onInspect: N,
                        onSelect: M,
                        rowIndex: F,
                        stickerClassName: P,
                        stickerDescriptors: w,
                        stickerPadding: b = T,
                        stickerSize: j = v,
                        ownedStickerPacks: U,
                        enlargeOnInteraction: G = !1,
                        channel: K,
                        currentUser: O,
                        checkSendability: D = !0
                    } = e, {
                        location: V
                    } = (0, o.useAnalyticsContext)(), z = j + 2 * b, W = n.useMemo(() => ({
                        gridColumnGap: _,
                        gridTemplateColumns: "repeat(auto-fill, ".concat(z, "px)"),
                        height: z,
                        paddingRight: t ? void 0 : z
                    }), [t, _, z]), H = n.useMemo(() => ({
                        width: j,
                        height: j,
                        padding: b
                    }), [b, j]);
                    return (0, i.jsx)("div", {
                        className: C.row,
                        style: W,
                        ...null == R ? void 0 : R(F),
                        children: w.map(e => {
                            var o;
                            let v = e.visibleRowIndex === (null == A ? void 0 : A.rowIndex) && e.columnIndex === (null == A ? void 0 : A.columnIndex),
                                T = e.type === p.StickerGridItemTypes.STICKER && G && v,
                                R = (0, l.throttle)(() => {
                                    (null == x ? void 0 : x.current) !== !0 && (null == L ? void 0 : L.current) !== !0 && !v && (null == N || N(e))
                                }, 250),
                                {
                                    ref: _,
                                    tabIndex: w,
                                    onFocus: b,
                                    ...z
                                } = null !== (o = null == c ? void 0 : c(e.columnIndex, F)) && void 0 !== o ? o : {};
                            switch (e.type) {
                                case p.StickerGridItemTypes.CREATE_STICKER:
                                    return (0, i.jsx)("div", {
                                        ...z,
                                        children: (0, i.jsxs)(u.Clickable, {
                                            "aria-label": e.name,
                                            className: a(C.createSticker, P, {
                                                [C.createInspected]: v
                                            }),
                                            innerRef: _,
                                            tabIndex: w,
                                            onFocus: null != b ? b : R,
                                            onMouseMove: R,
                                            onClick: () => {
                                                e.type === p.StickerGridItemTypes.CREATE_STICKER && (k.default.track(y.AnalyticEvents.OPEN_MODAL, {
                                                    type: y.AnalyticsSections.CREATE_STICKER_MODAL,
                                                    location: V
                                                }), (0, u.openModalLazy)(async () => {
                                                    let {
                                                        default: t
                                                    } = await r.el("54666").then(r.bind(r, "54666"));
                                                    return r => (0, i.jsx)(t, {
                                                        guildId: e.guild_id,
                                                        ...r
                                                    })
                                                }))
                                            },
                                            style: H,
                                            children: [!G && (0, i.jsx)("div", {
                                                className: C.inspectedIndicator
                                            }), (0, i.jsx)("div", {
                                                className: C.iconWrapper,
                                                children: (0, i.jsx)(S.default, {
                                                    className: C.icon
                                                })
                                            }), (0, i.jsx)(u.Text, {
                                                color: "interactive-active",
                                                variant: "text-xs/normal",
                                                children: g.default.Messages.STICKER_PICKER_CREATE_STICKER
                                            })]
                                        })
                                    }, e.guild_id);
                                case p.StickerGridItemTypes.STICKER: {
                                    let l = t && null != U && (0, I.isStandardSticker)(e.sticker) && !U.has(e.sticker.pack_id);
                                    return (0, n.createElement)("div", {
                                        ...z,
                                        key: e.sticker.id
                                    }, (0, i.jsxs)(u.Clickable, {
                                        className: a(C.sticker, P, {
                                            [C.stickerInspected]: v
                                        }),
                                        innerRef: _,
                                        tabIndex: w,
                                        onFocus: null != b ? b : R,
                                        onMouseMove: R,
                                        onClick: t => {
                                            (null == x ? void 0 : x.current) !== !0 && (null == L ? void 0 : L.current) !== !0 && (null == M || M(e, t))
                                        },
                                        onContextMenu: e => {
                                            (0, d.openContextMenuLazy)(e, async () => {
                                                let {
                                                    default: e
                                                } = await r.el("367343").then(r.bind(r, "367343"));
                                                return t => (0, i.jsx)(e, {
                                                    ...t
                                                })
                                            })
                                        },
                                        style: H,
                                        "data-type": f.PickerContextMenuDataTypes.STICKER,
                                        "data-id": e.sticker.id,
                                        children: [(0, i.jsx)(u.HiddenVisually, {
                                            children: (0, h.getStickerAltText)(e.sticker)
                                        }), (0, i.jsxs)("div", {
                                            "aria-hidden": !0,
                                            children: [!G && (0, i.jsx)("div", {
                                                className: C.inspectedIndicator
                                            }), (0, i.jsx)(h.default, {
                                                className: a(C.stickerNode, {
                                                    [C.stickerNodeDimmed]: G && !v && null != A && -1 !== A.rowIndex && -1 !== A.columnIndex,
                                                    [C.stickerNodeHidden]: T,
                                                    [C.stickerUnsendable]: D && !(0, E.isSendableSticker)(e.sticker, O, K)
                                                }),
                                                disableAnimation: !v && !s,
                                                enlargeOnInteraction: G,
                                                isInteracting: v,
                                                maskAsset: v,
                                                sticker: e.sticker,
                                                size: j
                                            }), l ? (0, i.jsx)(m.default, {
                                                size: 20
                                            }) : null]
                                        })]
                                    }))
                                }
                            }
                        })
                    })
                });
            var _ = R
        },
        113270: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var i = r("37983");
            r("884691");
            var n = r("77078"),
                s = r("599110"),
                a = r("49111");

            function l(e) {
                s.default.track(a.AnalyticEvents.OPEN_MODAL, {
                    type: a.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e
                }), (0, n.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await r.el("122846").then(r.bind(r, "122846"));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                })
            }
        },
        42507: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useFrecencySettings: function() {
                    return l
                }
            });
            var i = r("884691"),
                n = r("446674"),
                s = r("872173"),
                a = r("374363");

            function l() {
                return i.useEffect(() => {
                    s.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, n.useStateFromStores)([a.default], () => a.default.frecencyWithoutFetchingLatest)
            }
        },
        54560: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var i = r("37983");
            r("884691");
            var n = r("469563"),
                s = r("441888"),
                a = r("75196"),
                l = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: r = 20,
                        color: n = "currentColor",
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: r,
                        ...(0, a.default)(s),
                        viewBox: "0 0 20 20",
                        children: (0, i.jsx)("path", {
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
        597285: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                StickerSadIcon: function() {
                    return a
                }
            });
            var i = r("37983");
            r("884691");
            var n = r("669491"),
                s = r("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 3.83a1 1 0 0 0 1.39-.27 3.5 3.5 0 0 1 5.82 0 1 1 0 0 0 1.66-1.12 5.5 5.5 0 0 0-9.14 0 1 1 0 0 0 .27 1.4Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                        className: l
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=74143.add8186e42632e2d99aa.js.map