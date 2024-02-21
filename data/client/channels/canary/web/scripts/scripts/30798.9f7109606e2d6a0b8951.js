(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["30798"], {
        540105: function(e, t, r) {
            "use strict";
            e.exports = r.p + "abb68ef84648ccf3be81.svg"
        },
        441888: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("597285");
            r.es(n, t)
        },
        997289: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useAnalyticsContext: function() {
                    return s
                }
            });
            var n = r("884691"),
                i = r("599110");
            let s = () => n.useContext(i.AnalyticsContext)
        },
        246511: function(e, t, r) {
            "use strict";
            var n, i, s, l;
            r.r(t), r.d(t, {
                InspectedExpressionChangeSource: function() {
                    return n
                },
                PickerContextMenuDataTypes: function() {
                    return i
                }
            }), (s = n || (n = {}))[s.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", s[s.MOUSE_EVENT = 1] = "MOUSE_EVENT", (l = i || (i = {})).EMOJI = "emoji", l.STICKER = "sticker", l.PACK_ICON = "pack-icon"
        },
        650484: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return k
                },
                PaymentPortalBody: function() {
                    return p
                },
                PaymentPortalFooter: function() {
                    return y
                }
            });
            var n = r("37983"),
                i = r("884691"),
                s = r("414456"),
                l = r.n(s),
                a = r("627445"),
                u = r.n(a),
                c = r("817736"),
                d = r.n(c),
                o = r("77078"),
                f = r("642906"),
                S = r("304006");

            function k(e) {
                var t, r, s, a, c, d;
                let {
                    header: k,
                    isLargeModal: p,
                    stepProps: y
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: r,
                        ...n
                    } = e;
                    return {
                        header: t,
                        isLargeModal: r,
                        stepProps: n
                    }
                }(e), {
                    step: m,
                    stepConfigs: E,
                    setBodyNode: h,
                    setFooterNode: I,
                    setModalOverlayNode: v,
                    setReadySlideId: g
                } = (0, f.usePaymentContext)(), C = E.find(e => e.key === m);
                i.useEffect(() => {
                    v(null)
                }, [m, v]), u(null != C, "Unknown step for current payment flow.");
                let T = null !== (c = null == C ? void 0 : null === (t = C.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== c && c,
                    R = null == C ? void 0 : null === (r = C.options) || void 0 === r ? void 0 : r.bodyClassName,
                    x = void 0 !== p && p ? S.sliderBodyLarge : null == C ? void 0 : null === (s = C.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
                return (0, n.jsxs)(n.Fragment, {
                    children: [null === (d = null == C ? void 0 : null === (a = C.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === d || d ? k : null, C.renderStep(y), null == m || T ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(o.ModalContent, {
                            className: l(S.body, R),
                            children: (0, n.jsx)(o.Slides, {
                                activeSlide: m,
                                centered: !1,
                                onSlideReady: e => g(e),
                                children: E.filter(e => null != e.key).map(e => (0, n.jsx)(o.Slide, {
                                    id: e.key,
                                    children: (0, n.jsx)("form", {
                                        className: l(S.sliderBody, x),
                                        ref: e => h(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, n.jsx)("div", {
                            ref: e => I(e)
                        }), (0, n.jsx)("div", {
                            ref: e => v(e)
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: r
                } = (0, f.usePaymentContext)();
                return null == r ? null : d.createPortal(t, r)
            }

            function y(e) {
                let {
                    children: t
                } = e, {
                    footerNode: r
                } = (0, f.usePaymentContext)();
                return null == r ? null : d.createPortal(t, r)
            }
        },
        467094: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchStickerPack: function() {
                    return h
                },
                fetchStickerPacks: function() {
                    return I
                },
                fetchSticker: function() {
                    return v
                },
                fetchGuildStickers: function() {
                    return g
                },
                deleteGuildSticker: function() {
                    return C
                },
                createGuildSticker: function() {
                    return T
                },
                updateGuildSticker: function() {
                    return R
                },
                addStickerPreview: function() {
                    return x
                },
                clearStickerPreview: function() {
                    return _
                },
                favoriteSticker: function() {
                    return N
                },
                unfavoriteSticker: function() {
                    return L
                }
            }), r("424973");
            var n = r("917351"),
                i = r.n(n),
                s = r("872717"),
                l = r("913144"),
                a = r("404118"),
                u = r("619443"),
                c = r("915639"),
                d = r("872173"),
                o = r("766274"),
                f = r("341542"),
                S = r("697218"),
                k = r("271560"),
                p = r("364685"),
                y = r("49111"),
                m = r("397336"),
                E = r("782340");
            let h = async (e, t) => {
                let {
                    body: r
                } = await (0, k.httpGetWithCountryCodeQuery)(y.Endpoints.STICKER_PACK(e));
                return l.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: r,
                    ingestStickers: t
                }), r
            }, I = async function() {
                let {
                    locale: e = c.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (p.default.isFetchingStickerPacks || p.default.hasLoadedStickerPacks) return;
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "STICKER_PACKS_FETCH_START"
                    })
                });
                let {
                    body: {
                        sticker_packs: t
                    }
                } = await s.default.get({
                    url: y.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                l.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, v = async e => {
                let {
                    body: t
                } = await s.default.get({
                    url: y.Endpoints.STICKER(e)
                });
                l.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, g = async e => {
                let {
                    body: t
                } = await s.default.get({
                    url: y.Endpoints.GUILD_STICKER_PACKS(e)
                });
                l.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new o.default(e.user)
                    } : e)
                })
            }, C = async e => {
                await s.default.delete({
                    url: y.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, T = async (e, t) => {
                let r = await s.default.post({
                    url: y.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return l.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...r.body,
                        user: S.default.getCurrentUser()
                    }
                }), r.body
            }, R = async (e, t, r) => {
                let n = await s.default.patch({
                    url: y.Endpoints.GUILD_STICKER(e, t),
                    body: r
                });
                return n.body
            };

            function x(e, t, r) {
                l.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: r
                })
            }

            function _(e, t) {
                l.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function A(e) {
                return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != p.default.getStickerById(e))
            }

            function N(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = A(t.stickerIds), i.size(t.stickerIds) >= m.MAX_FAVORITES) ? (a.default.show({
                    title: E.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: E.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: m.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), m.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function L(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = A(t.stickerIds)
                }, m.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        256860: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useFetchStickerPack: function() {
                    return g
                },
                useShouldAnimateSticker: function() {
                    return C
                },
                useStickersGrid: function() {
                    return T
                },
                useHasSendableSticker: function() {
                    return R
                },
                useFetchStickerPacks: function() {
                    return x
                },
                useFavoriteStickerIds: function() {
                    return N
                },
                useFavoriteStickers: function() {
                    return L
                },
                useLatestFrecentStickers: function() {
                    return P
                },
                useStickerForRenderableSticker: function() {
                    return F
                },
                useFilteredStickerPackCategories: function() {
                    return j
                }
            }), r("424973"), r("222007"), r("843762");
            var n = r("884691"),
                i = r("446674"),
                s = r("817963"),
                l = r("845579"),
                a = r("42507"),
                u = r("305961"),
                c = r("162771"),
                d = r("677099"),
                o = r("697218"),
                f = r("427459"),
                S = r("991170"),
                k = r("866353"),
                p = r("467094"),
                y = r("865372"),
                m = r("364685"),
                E = r("161585"),
                h = r("24373"),
                I = r("49111"),
                v = r("782340");
            let g = e => {
                    x();
                    let t = (0, i.useStateFromStores)([m.default], () => m.default.hasLoadedStickerPacks);
                    n.useEffect(() => {
                        t && null == m.default.getStickerPack(e) && (0, p.fetchStickerPack)(e)
                    }, [e, t])
                },
                C = e => {
                    let t = l.AnimateStickers.useSetting();
                    return (0, h.shouldAnimateSticker)(t, e)
                },
                T = e => {
                    let {
                        collapsedStickersCategories: t,
                        filteredStickers: r,
                        listPaddingRight: i = 0,
                        listWidth: l = 0,
                        stickerNodeMargin: a = 0,
                        stickerNodeWidth: d,
                        stickersCategories: o
                    } = e;
                    return n.useMemo(() => {
                        let e = Math.floor((l - i + a) / (d + a)),
                            n = Math.floor(Math.max(a, (l - i - d * e) / (e - 1))),
                            S = [],
                            k = [],
                            p = [],
                            y = 0,
                            m = 0,
                            I = 0;
                        if (0 !== l) {
                            let n = function(t, r) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    i = (0, h.isGuildSticker)(t[0]) ? u.default.getGuild(t[0].guild_id) : void 0,
                                    {
                                        canCreateExpressions: l
                                    } = (0, s.getManageResourcePermissions)(i),
                                    a = c.default.getGuildId(),
                                    d = o.findIndex(e => e.type === E.StickerCategoryTypes.FAVORITE),
                                    g = o.findIndex(e => e.type === E.StickerCategoryTypes.RECENT),
                                    C = t.length;
                                null != i && a === i.id && l && t.length < (0, f.getTotalStickerCountForTier)(i.premiumTier) && C++;
                                let T = Math.ceil(C / e);
                                k[m] = n ? 0 : T;
                                for (let s = 0; s < T; s++) {
                                    let l = s * e,
                                        a = l + e,
                                        u = t.slice(l, a).map((e, t) => ({
                                            type: E.StickerGridItemTypes.STICKER,
                                            sticker: e,
                                            packId: (0, h.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                                            gridSectionIndex: m,
                                            rowIndex: y,
                                            columnIndex: t,
                                            visibleRowIndex: I,
                                            category: r
                                        }));
                                    m > g && m > d && null != i && C > t.length && u.push({
                                        type: E.StickerGridItemTypes.CREATE_STICKER,
                                        guild_id: i.id,
                                        name: v.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                        gridSectionIndex: m,
                                        rowIndex: y,
                                        columnIndex: u.length,
                                        visibleRowIndex: I
                                    }), !n && (I++, p.push(u), S.push(u.length)), y++
                                }
                                m++
                            };
                            if (null == r)
                                for (let e of o) e.stickers.length > 0 ? (y++, n(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === E.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (k[m] = 0, m++);
                            else r.sendable.length > 0 && n(r.sendable, E.StickerCategoryTypes.SEARCH_RESULTS), r.sendableWithPremium.length > 0 && n(r.sendableWithPremium, E.StickerCategoryTypes.SEARCH_RESULTS)
                        }
                        return {
                            rowCount: y,
                            rowCountBySection: k,
                            stickersGrid: p,
                            gutterWidth: n,
                            columnCounts: S
                        }
                    }, [t, r, i, l, a, d, o])
                },
                R = e => {
                    let t = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                    return (0, i.useStateFromStores)([m.default], () => {
                        let r = m.default.getAllStickersIterator();
                        for (let n of r)
                            if ((0, k.isSendableSticker)(n, t, e)) return !0;
                        return !1
                    }, [t, e])
                },
                x = () => {
                    n.useEffect(() => {
                        (0, p.fetchStickerPacks)()
                    }, [])
                },
                _ = e => {
                    let t = (0, i.useStateFromStores)([m.default], () => m.default.getAllGuildStickers()),
                        r = (0, i.useStateFromStoresArray)([d.default, u.default], () => {
                            let e = d.default.getFlattenedGuildIds(),
                                t = [];
                            return e.forEach(e => {
                                let r = u.default.getGuild(e);
                                null != r && t.push(r)
                            }), t
                        }, []),
                        l = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                    return n.useMemo(() => {
                        let n = [];
                        for (let {
                                name: e,
                                id: i
                            }
                            of r) {
                            let r = t.get(i);
                            null != r && 0 !== r.length && n.push({
                                type: E.StickerCategoryTypes.GUILD,
                                id: i,
                                name: e,
                                stickers: r
                            })
                        }
                        if ((null == e ? void 0 : e.getGuildId()) != null) {
                            let t = u.default.getGuild(e.getGuildId()),
                                {
                                    canManageAllExpressions: r
                                } = (0, s.getManageResourcePermissions)(t),
                                i = n.findIndex(t => t.id === e.getGuildId());
                            i >= 1 ? n.unshift(n.splice(i, 1)[0]) : -1 === i && null != t && r && n.unshift({
                                type: E.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                                id: t.id,
                                name: t.name,
                                stickers: []
                            }), null != l && !S.default.can({
                                permission: I.Permissions.USE_EXTERNAL_EMOJIS,
                                user: l,
                                context: e
                            }) && (n = n.filter(t => t.id === e.getGuildId()))
                        }
                        return n
                    }, [t, r, l, e])
                },
                A = [];

            function N() {
                var e, t;
                let r = (0, a.useFrecencySettings)();
                return null !== (t = null === (e = r.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : A
            }

            function L() {
                let e = N(),
                    t = (0, i.useStateFromStoresArray)([m.default], () => e.map(e => m.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
                return t
            }

            function P() {
                let e = function() {
                        var e, t;
                        let r = (0, a.useFrecencySettings)(),
                            n = A;
                        return (null == r ? void 0 : null === (e = r.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (n = Object.keys(null == r ? void 0 : null === (t = r.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), n
                    }(),
                    t = (0, i.useStateFromStoresArray)([m.default], () => e.map(e => m.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
                return t
            }
            let M = e => {
                    let t = L(),
                        {
                            packs: r,
                            frequentlyUsedStickers: s
                        } = (0, i.useStateFromStoresObject)([m.default, y.default], () => ({
                            packs: m.default.getPremiumPacks(),
                            frequentlyUsedStickers: y.default.stickerFrecencyWithoutFetchingLatest.frequently
                        }), []),
                        l = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                        a = _(e);
                    return n.useMemo(() => {
                        var n;
                        let i = r.map(h.createStickerPackCategory),
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
                                stickers: null !== (n = null == s ? void 0 : s.filter(t => {
                                    if ((0, h.isGuildSticker)(t)) {
                                        var n, i;
                                        return null !== (i = null === (n = m.default.getStickersByGuildId(t.guild_id)) || void 0 === n ? void 0 : n.some(e => e.id === t.id)) && void 0 !== i && i && (0, k.getStickerSendability)(t, l, e) !== k.StickerSendability.NONSENDABLE
                                    }
                                    if ((0, h.isStandardSticker)(t)) return r.some(e => e.id === t.pack_id)
                                })) && void 0 !== n ? n : []
                            };
                        return [u, c, ...a, ...i]
                    }, [r, t, s, a, l, e])
                },
                F = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = (0, i.useStateFromStores)([m.default], () => m.default.getStickerById(e.id)),
                        [s, l] = n.useState(!0),
                        [a, u] = n.useState(!1),
                        c = (0, h.isGuildSticker)(e) || (0, h.isStandardSticker)(e);
                    return (n.useEffect(() => {
                        let n = async () => {
                            if (t && !c && null == r && s && !a) {
                                l(!1);
                                try {
                                    await (0, p.fetchSticker)(e.id)
                                } catch {}
                                u(!0)
                            }
                        };
                        n()
                    }, [t]), c) ? [e, a] : [null != r ? r : null, a]
                },
                j = e => {
                    let t = M(e);
                    return n.useMemo(() => t.filter(e => e.type === E.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
                }
        },
        41170: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getStickerAltText: function() {
                    return _
                },
                default: function() {
                    return F
                }
            }), r("222007");
            var n = r("37983"),
                i = r("884691"),
                s = r("414456"),
                l = r.n(s),
                a = r("627445"),
                u = r.n(a),
                c = r("907002"),
                d = r("446674"),
                o = r("290381"),
                f = r("77078"),
                S = r("206230"),
                k = r("407063"),
                p = r("54560"),
                y = r("983782"),
                m = r("866190"),
                E = r("256860"),
                h = r("161585"),
                I = r("24373"),
                v = r("782340"),
                g = r("419664");
            let C = e => e.preventDefault(),
                T = {
                    tension: 1100,
                    friction: 40
                },
                R = {
                    tension: 1600,
                    friction: 60
                };

            function x(e, t) {
                return i.cloneElement(e, {
                    "data-type": "sticker",
                    "data-id": t
                })
            }

            function _(e) {
                let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
                return v.default.Messages.STICKER_A11Y_LABEL.format({
                    stickerName: t
                })
            }
            let A = e => {
                    let {
                        children: t,
                        hasError: r,
                        isLoading: i,
                        maskAsset: s,
                        size: a,
                        withLoadingIndicator: u = !0
                    } = e, c = a >= 33;
                    return (0, n.jsxs)("div", {
                        className: l(g.assetWrapper, {
                            [g.assetWrapperMasked]: r || s
                        }),
                        style: {
                            height: a,
                            width: a
                        },
                        children: [r ? (0, n.jsxs)("div", {
                            className: g.error,
                            children: [(0, n.jsx)(p.default, {
                                className: g.errorIcon
                            }), c && (0, n.jsx)(f.Text, {
                                className: g.errorText,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: v.default.Messages.STICKER_ASSET_LOAD_ERROR
                            })]
                        }) : t, u && i && (0, n.jsx)("div", {
                            className: g.loadingIndicator
                        })]
                    })
                },
                N = e => {
                    let {
                        shouldAnimate: t,
                        size: s,
                        sticker: l,
                        fileUri: a,
                        assetData: c,
                        isFocused: d,
                        className: o,
                        maskAsset: f,
                        positionRef: S,
                        withLoadingIndicator: p,
                        onError: y
                    } = e, m = i.useRef(null), E = i.useRef(null), [h, C] = i.useState(!0), [T, R] = i.useState(!1), N = i.useRef(!1);
                    N.current = t && d;
                    let L = null == a ? (0, I.getStickerAssetUrl)(l) : a;
                    return (u(null != L, "Unable to determine sticker asset URL. Sticker ID: ".concat(l.id)), i.useEffect(() => {
                        if (null == m.current || null == L) return;
                        let e = Math.min(2, (0, k.getDevicePixelRatio)());
                        m.current.width = s * e, m.current.height = s * e;
                        let t = !1,
                            n = async () => {
                                let {
                                    default: e
                                } = await r.el("619596").then(r.bind(r, "619596"));
                                null != m.current && (E.current = new e({
                                    canvas: m.current,
                                    animationId: l.id,
                                    assetUrl: L,
                                    assetData: c,
                                    onInitialDraw: () => {
                                        !t && C(!1)
                                    },
                                    onError: () => {
                                        !t && (C(!1), R(!0), null == y || y())
                                    }
                                }), N.current && E.current.setState(!0))
                            };
                        return n(), () => {
                            var e;
                            null === (e = E.current) || void 0 === e || e.drop(), E.current = null, t = !0
                        }
                    }, [L, s, l.id, c, y]), i.useEffect(() => {
                        var e;
                        let r;
                        !t && (r = 0), null === (e = E.current) || void 0 === e || e.setState(t && d, r)
                    }, [l, t, d]), null == L) ? null : (0, n.jsx)("div", {
                        role: "img",
                        className: o,
                        "aria-label": T ? v.default.Messages.ERROR_LOADING_STICKER : _(l),
                        ref: S,
                        children: (0, n.jsx)(A, {
                            hasError: T,
                            isLoading: h,
                            maskAsset: f,
                            size: s,
                            withLoadingIndicator: p,
                            children: x((0, n.jsx)("canvas", {
                                className: g.lottieCanvas,
                                ref: m
                            }), l.id)
                        })
                    })
                },
                L = e => {
                    let {
                        shouldAnimate: t,
                        sticker: r,
                        isFocused: s,
                        size: a,
                        className: u,
                        maskAsset: c,
                        positionRef: d,
                        withLoadingIndicator: f,
                        fileUri: S
                    } = e, [k, p] = i.useState(!1), [y, m] = i.useState(!0), [E, h] = i.useState(!1), v = i.useRef(null), T = i.useRef(null), R = null != S ? S : (0, I.getStickerAssetUrl)(r, {
                        isPreview: !t || !k || !s,
                        size: a
                    }), N = i.useCallback(() => {
                        m(!1)
                    }, []), L = i.useCallback(() => {
                        h(!0)
                    }, []);
                    return (i.useEffect(() => {
                        if (null != v.current) {
                            let {
                                isVisible: e
                            } = v.current;
                            p(e)
                        }
                    }, []), i.useLayoutEffect(() => {
                        var e;
                        (null === (e = T.current) || void 0 === e ? void 0 : e.complete) === !0 && m(!1)
                    }, []), null == R) ? null : (0, n.jsx)(o.VisibilitySensor, {
                        ref: v,
                        onChange: p,
                        threshold: .7,
                        children: (0, n.jsx)("div", {
                            className: l(u, g.pngImageWrapper),
                            ref: d,
                            children: (0, n.jsx)(A, {
                                hasError: E,
                                isLoading: y,
                                maskAsset: c,
                                size: a,
                                withLoadingIndicator: f,
                                children: x((0, n.jsx)("img", {
                                    className: g.pngImage,
                                    alt: _(r),
                                    src: R,
                                    draggable: !1,
                                    onError: L,
                                    onLoad: N,
                                    onContextMenu: C,
                                    ref: T
                                }), r.id)
                            })
                        })
                    })
                },
                P = e => {
                    let {
                        disableAnimation: t,
                        enlargeScaleFactor: r,
                        enlargeWithName: s,
                        isInteracting: l,
                        positionRef: a,
                        size: u,
                        sticker: o
                    } = e, k = (0, d.useStateFromStores)([S.default], () => S.default.useReducedMotion), p = i.useRef(null), m = {
                        transform: "scale(".concat(k ? 1 : 1 / r, ")"),
                        opacity: 0
                    }, E = (0, c.useTransition)(l, {
                        ref: p,
                        from: m,
                        enter: {
                            transform: "scale(1)",
                            opacity: 1
                        },
                        leave: m,
                        config: T
                    }), h = i.useRef(null), I = (0, c.useSpring)({
                        ref: h,
                        transform: l || k ? "translateY(0)" : "translateY(-25px)",
                        opacity: l ? 1 : 0,
                        config: R
                    });
                    return (0, c.useChain)(l ? [p, h] : [h, p], l ? [0, .0625] : [0, 0]), E((e, i) => i && (0, n.jsx)(y.AppReferencePositionLayer, {
                        className: g.positionedLayer,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        reference: a,
                        children: () => (0, n.jsxs)("div", {
                            className: g.overlayWrapper,
                            children: [(0, n.jsx)(c.animated.div, {
                                className: g.overlayStickerWrapper,
                                style: e,
                                children: (0, n.jsx)(M, {
                                    className: g.overlaySticker,
                                    disableAnimation: t,
                                    enlargeOnInteraction: !1,
                                    isInteracting: l,
                                    maskAsset: !1,
                                    sticker: o,
                                    size: Math.round(u * r),
                                    withLoadingIndicator: !1
                                })
                            }), s && (0, n.jsx)(c.animated.div, {
                                className: g.overlayLabelWrapper,
                                style: I,
                                children: (0, n.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    className: g.overlayLabel,
                                    children: o.name
                                })
                            })]
                        })
                    }))
                },
                M = e => {
                    let {
                        isInteracting: t = !1,
                        disableAnimation: r = !1,
                        enlargeOnInteraction: s = !1,
                        enlargeWithName: l = !0,
                        enlargeScaleFactor: a = 1.55,
                        maskAsset: u = !1,
                        size: c,
                        sticker: d,
                        className: o,
                        withLoadingIndicator: f,
                        assetData: S,
                        fileUri: k,
                        onError: p
                    } = e, y = (0, m.useIsWindowFocused)(), I = (0, E.useShouldAnimateSticker)(t) && !r, v = i.useRef(null);
                    if (null == d) return null;
                    let g = d.format_type === h.StickerFormat.LOTTIE ? N : L;
                    return (0, n.jsxs)(i.Fragment, {
                        children: [(0, n.jsx)(g, {
                            shouldAnimate: I,
                            isFocused: y,
                            size: c,
                            sticker: d,
                            className: o,
                            maskAsset: u,
                            positionRef: v,
                            withLoadingIndicator: f,
                            assetData: S,
                            fileUri: k,
                            onError: p
                        }), s && (0, n.jsx)(P, {
                            disableAnimation: r,
                            enlargeScaleFactor: a,
                            enlargeWithName: l,
                            isInteracting: t,
                            positionRef: v,
                            size: c,
                            sticker: d
                        })]
                    }, "".concat(d.id, ",").concat(c))
                };
            var F = M
        },
        591522: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("45029"),
                s = r("440162"),
                l = e => {
                    let {
                        size: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: s.unownedStickerLockContainer,
                        style: {
                            width: t,
                            height: t
                        },
                        children: (0, n.jsx)(i.default, {
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
                    return x
                }
            });
            var n = r("37983"),
                i = r("884691"),
                s = r("414456"),
                l = r.n(s),
                a = r("917351"),
                u = r("617258"),
                c = r("77078"),
                d = r("272030"),
                o = r("997289"),
                f = r("246511"),
                S = r("151185"),
                k = r("599110"),
                p = r("866353"),
                y = r("161585"),
                m = r("24373"),
                E = r("41170"),
                h = r("591522"),
                I = r("49111"),
                v = r("782340"),
                g = r("677930");
            let C = (0, u.cssValueToNumber)(g.stickerPickerPreviewDimensions),
                T = (0, u.cssValueToNumber)(g.stickerPickerPreviewPadding),
                R = i.memo(function(e) {
                    let {
                        isDisplayingIndividualStickers: t = !1,
                        preferAnimation: s = !0,
                        getStickerItemProps: u,
                        getStickerRowProps: R,
                        gutterWidth: x,
                        inspectedStickerPosition: _,
                        isScrolling: A,
                        isUsingKeyboardNavigation: N,
                        onInspect: L,
                        onSelect: P,
                        rowIndex: M,
                        stickerClassName: F,
                        stickerDescriptors: j,
                        stickerPadding: b = T,
                        stickerSize: w = C,
                        ownedStickerPacks: U,
                        enlargeOnInteraction: G = !1,
                        channel: K,
                        currentUser: O,
                        checkSendability: D = !0
                    } = e, {
                        location: V
                    } = (0, o.useAnalyticsContext)(), z = w + 2 * b, H = i.useMemo(() => ({
                        gridColumnGap: x,
                        gridTemplateColumns: "repeat(auto-fill, ".concat(z, "px)"),
                        height: z,
                        paddingRight: t ? void 0 : z
                    }), [t, x, z]), W = i.useMemo(() => ({
                        width: w,
                        height: w,
                        padding: b
                    }), [b, w]);
                    return (0, n.jsx)("div", {
                        className: g.row,
                        style: H,
                        ...null == R ? void 0 : R(M),
                        children: j.map(e => {
                            var o;
                            let C = e.visibleRowIndex === (null == _ ? void 0 : _.rowIndex) && e.columnIndex === (null == _ ? void 0 : _.columnIndex),
                                T = e.type === y.StickerGridItemTypes.STICKER && G && C,
                                R = (0, a.throttle)(() => {
                                    (null == A ? void 0 : A.current) !== !0 && (null == N ? void 0 : N.current) !== !0 && !C && (null == L || L(e))
                                }, 250),
                                {
                                    ref: x,
                                    tabIndex: j,
                                    onFocus: b,
                                    ...z
                                } = null !== (o = null == u ? void 0 : u(e.columnIndex, M)) && void 0 !== o ? o : {};
                            switch (e.type) {
                                case y.StickerGridItemTypes.CREATE_STICKER:
                                    return (0, n.jsx)("div", {
                                        ...z,
                                        children: (0, n.jsxs)(c.Clickable, {
                                            "aria-label": e.name,
                                            className: l(g.createSticker, F, {
                                                [g.createInspected]: C
                                            }),
                                            innerRef: x,
                                            tabIndex: j,
                                            onFocus: null != b ? b : R,
                                            onMouseMove: R,
                                            onClick: () => {
                                                e.type === y.StickerGridItemTypes.CREATE_STICKER && (k.default.track(I.AnalyticEvents.OPEN_MODAL, {
                                                    type: I.AnalyticsSections.CREATE_STICKER_MODAL,
                                                    location: V
                                                }), (0, c.openModalLazy)(async () => {
                                                    let {
                                                        default: t
                                                    } = await r.el("54666").then(r.bind(r, "54666"));
                                                    return r => (0, n.jsx)(t, {
                                                        guildId: e.guild_id,
                                                        ...r
                                                    })
                                                }))
                                            },
                                            style: W,
                                            children: [!G && (0, n.jsx)("div", {
                                                className: g.inspectedIndicator
                                            }), (0, n.jsx)("div", {
                                                className: g.iconWrapper,
                                                children: (0, n.jsx)(S.default, {
                                                    className: g.icon
                                                })
                                            }), (0, n.jsx)(c.Text, {
                                                color: "interactive-active",
                                                variant: "text-xs/normal",
                                                children: v.default.Messages.STICKER_PICKER_CREATE_STICKER
                                            })]
                                        })
                                    }, e.guild_id);
                                case y.StickerGridItemTypes.STICKER: {
                                    let a = t && null != U && (0, m.isStandardSticker)(e.sticker) && !U.has(e.sticker.pack_id);
                                    return (0, i.createElement)("div", {
                                        ...z,
                                        key: e.sticker.id
                                    }, (0, n.jsxs)(c.Clickable, {
                                        className: l(g.sticker, F, {
                                            [g.stickerInspected]: C
                                        }),
                                        innerRef: x,
                                        tabIndex: j,
                                        onFocus: null != b ? b : R,
                                        onMouseMove: R,
                                        onClick: t => {
                                            (null == A ? void 0 : A.current) !== !0 && (null == N ? void 0 : N.current) !== !0 && (null == P || P(e, t))
                                        },
                                        onContextMenu: e => {
                                            (0, d.openContextMenuLazy)(e, async () => {
                                                let {
                                                    default: e
                                                } = await r.el("367343").then(r.bind(r, "367343"));
                                                return t => (0, n.jsx)(e, {
                                                    ...t
                                                })
                                            })
                                        },
                                        style: W,
                                        "data-type": f.PickerContextMenuDataTypes.STICKER,
                                        "data-id": e.sticker.id,
                                        children: [(0, n.jsx)(c.HiddenVisually, {
                                            children: (0, E.getStickerAltText)(e.sticker)
                                        }), (0, n.jsxs)("div", {
                                            "aria-hidden": !0,
                                            children: [!G && (0, n.jsx)("div", {
                                                className: g.inspectedIndicator
                                            }), (0, n.jsx)(E.default, {
                                                className: l(g.stickerNode, {
                                                    [g.stickerNodeDimmed]: G && !C && null != _ && -1 !== _.rowIndex && -1 !== _.columnIndex,
                                                    [g.stickerNodeHidden]: T,
                                                    [g.stickerUnsendable]: D && !(0, p.isSendableSticker)(e.sticker, O, K)
                                                }),
                                                disableAnimation: !C && !s,
                                                enlargeOnInteraction: G,
                                                isInteracting: C,
                                                maskAsset: C,
                                                sticker: e.sticker,
                                                size: w
                                            }), a ? (0, n.jsx)(h.default, {
                                                size: 20
                                            }) : null]
                                        })]
                                    }))
                                }
                            }
                        })
                    })
                });
            var x = R
        },
        113270: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("77078"),
                s = r("599110"),
                l = r("49111");

            function a(e) {
                s.default.track(l.AnalyticEvents.OPEN_MODAL, {
                    type: l.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e
                }), (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await r.el("122846").then(r.bind(r, "122846"));
                    return t => (0, n.jsx)(e, {
                        ...t
                    })
                })
            }
        },
        42507: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useFrecencySettings: function() {
                    return a
                }
            });
            var n = r("884691"),
                i = r("446674"),
                s = r("872173"),
                l = r("374363");

            function a() {
                return n.useEffect(() => {
                    s.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, i.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
            }
        },
        54560: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("469563"),
                s = r("441888"),
                l = r("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: r = 20,
                        color: i = "currentColor",
                        ...s
                    } = e;
                    return (0, n.jsx)("svg", {
                        width: t,
                        height: r,
                        ...(0, l.default)(s),
                        viewBox: "0 0 20 20",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 .663v4.739A2.594 2.594 0 0014.6 8h4.74a.656.656 0 00.466-1.12L13.121.196A.654.654 0 0012 .663zm2.576 9.365A4.608 4.608 0 019.97 5.422V.058H1.994A2 2 0 000 2.052v15.952a2 2 0 001.994 1.994h15.952a2 2 0 001.994-1.994v-7.976h-5.364zM8 15.553a2 2 0 113.999 0h1.333a3.333 3.333 0 10-6.666 0h1.334zM2.716 13.5L2 12.784 2.784 12l.716.716.716-.716.784.784-.716.716.716.716-.784.784-.716-.716-.716.716L2 14.216l.716-.716zM15 12.784l.716.716-.716.716.784.784.716-.716.716.716.784-.784-.716-.716.716-.716-.784-.784-.716.716-.716-.716-.784.784z",
                            fill: i
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
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("669491"),
                s = r("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 3.83a1 1 0 0 0 1.39-.27 3.5 3.5 0 0 1 5.82 0 1 1 0 0 0 1.66-1.12 5.5 5.5 0 0 0-9.14 0 1 1 0 0 0 .27 1.4Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                        className: a
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=30798.9f7109606e2d6a0b8951.js.map