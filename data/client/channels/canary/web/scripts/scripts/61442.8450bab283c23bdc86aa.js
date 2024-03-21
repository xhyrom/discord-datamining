(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["61442"], {
        540105: function(e, t, i) {
            "use strict";
            e.exports = i.p + "abb68ef84648ccf3be81.svg"
        },
        202909: function(e, t, i) {
            "use strict";
            i.r(t);
            var r = i("804830");
            i.es(r, t)
        },
        876726: function(e, t, i) {
            "use strict";
            i.r(t);
            var r = i("849638");
            i.es(r, t)
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
            var r, n, s, a;
            i.r(t), i.d(t, {
                InspectedExpressionChangeSource: function() {
                    return r
                },
                PickerContextMenuDataTypes: function() {
                    return n
                }
            }), (s = r || (r = {}))[s.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", s[s.MOUSE_EVENT = 1] = "MOUSE_EVENT", (a = n || (n = {})).EMOJI = "emoji", a.STICKER = "sticker", a.PACK_ICON = "pack-icon"
        },
        716849: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return m
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return p
                }
            });
            var r = i("884691"),
                n = i("65597"),
                s = i("872717"),
                a = i("913144"),
                l = i("775433"),
                u = i("697218"),
                c = i("10514"),
                d = i("764364"),
                o = i("719923"),
                f = i("676572"),
                S = i("646718"),
                h = i("49111");
            let m = "nonSubscriber";
            async function E() {
                try {
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await s.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [m]: e.non_subscriber,
                                [S.PremiumSubscriptionSKUs.TIER_0]: e[S.PremiumSubscriptionSKUs.TIER_0],
                                [S.PremiumSubscriptionSKUs.TIER_2]: e[S.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: i
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = f.default.shouldFetchPremiumLikelihood(), n = u.default.getCurrentUser();
                k(n, r, t, i)
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: i
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), s = (0, n.default)([f.default], () => f.default.shouldFetchPremiumLikelihood()), a = (0, n.default)([u.default], () => u.default.getCurrentUser());
                r.useEffect(() => {
                    k(a, s, t, i)
                }, [a, s, t, i])
            }

            function k(e, t, i, r) {
                null != e && !(0, d.isPremium)(e) && i && (t && E(), r && (!c.default.isLoadedForSKU((0, o.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_0)) && !c.default.isFetchingForSKU((0, o.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_0)) && (0, l.fetchSubscriptionPlansForSKU)((0, o.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_0)), !c.default.isLoadedForSKU((0, o.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_2)) && !c.default.isFetchingForSKU((0, o.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_2)) && (0, l.fetchSubscriptionPlansForSKU)((0, o.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_2))))
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
                a = s;
            class l extends r.default.Store {
                initialize() {
                    a = s
                }
                getState() {
                    return a
                }
                shouldFetchPremiumLikelihood() {
                    return !a.isFetching && !a.fetched
                }
            }
            l.displayName = "UserPremiumLikelihoodStore";
            var u = new l(n.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    a.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    a.isFetching = !1
                },
                LOGOUT: function() {
                    a.premiumLikelihood = void 0
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
        467094: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchStickerPack: function() {
                    return k
                },
                fetchStickerPacks: function() {
                    return C
                },
                fetchSticker: function() {
                    return g
                },
                fetchGuildStickers: function() {
                    return v
                },
                deleteGuildSticker: function() {
                    return y
                },
                createGuildSticker: function() {
                    return _
                },
                updateGuildSticker: function() {
                    return R
                },
                addStickerPreview: function() {
                    return T
                },
                clearStickerPreview: function() {
                    return L
                },
                favoriteSticker: function() {
                    return A
                },
                unfavoriteSticker: function() {
                    return P
                }
            }), i("424973");
            var r = i("917351"),
                n = i.n(r),
                s = i("872717"),
                a = i("913144"),
                l = i("404118"),
                u = i("619443"),
                c = i("915639"),
                d = i("872173"),
                o = i("766274"),
                f = i("341542"),
                S = i("697218"),
                h = i("271560"),
                m = i("364685"),
                E = i("49111"),
                I = i("397336"),
                p = i("782340");
            let k = async (e, t) => {
                let {
                    body: i
                } = await (0, h.httpGetWithCountryCodeQuery)(E.Endpoints.STICKER_PACK(e));
                return a.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: i,
                    ingestStickers: t
                }), i
            }, C = async function() {
                let {
                    locale: e = c.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (m.default.isFetchingStickerPacks || m.default.hasLoadedStickerPacks) return;
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
                    url: E.Endpoints.STICKER_PACKS,
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
                    url: E.Endpoints.STICKER(e)
                });
                a.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, v = async e => {
                let {
                    body: t
                } = await s.default.get({
                    url: E.Endpoints.GUILD_STICKER_PACKS(e)
                });
                a.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new o.default(e.user)
                    } : e)
                })
            }, y = async e => {
                await s.default.delete({
                    url: E.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, _ = async (e, t) => {
                let i = await s.default.post({
                    url: E.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return a.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...i.body,
                        user: S.default.getCurrentUser()
                    }
                }), i.body
            }, R = async (e, t, i) => {
                let r = await s.default.patch({
                    url: E.Endpoints.GUILD_STICKER(e, t),
                    body: i
                });
                return r.body
            };

            function T(e, t, i) {
                a.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: i
                })
            }

            function L(e, t) {
                a.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function x(e) {
                return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != m.default.getStickerById(e))
            }

            function A(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = x(t.stickerIds), n.size(t.stickerIds) >= I.MAX_FAVORITES) ? (l.default.show({
                    title: p.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: p.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: I.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), I.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function P(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = x(t.stickerIds)
                }, I.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        256860: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useFetchStickerPack: function() {
                    return v
                },
                useShouldAnimateSticker: function() {
                    return y
                },
                useStickersGrid: function() {
                    return _
                },
                useHasSendableSticker: function() {
                    return R
                },
                useFetchStickerPacks: function() {
                    return T
                },
                useFavoriteStickerIds: function() {
                    return A
                },
                useFavoriteStickers: function() {
                    return P
                },
                useLatestFrecentStickers: function() {
                    return U
                },
                useStickerForRenderableSticker: function() {
                    return N
                },
                useFilteredStickerPackCategories: function() {
                    return F
                }
            }), i("424973"), i("222007"), i("843762");
            var r = i("884691"),
                n = i("446674"),
                s = i("817963"),
                a = i("845579"),
                l = i("42507"),
                u = i("305961"),
                c = i("162771"),
                d = i("677099"),
                o = i("697218"),
                f = i("427459"),
                S = i("991170"),
                h = i("866353"),
                m = i("467094"),
                E = i("865372"),
                I = i("364685"),
                p = i("161585"),
                k = i("24373"),
                C = i("49111"),
                g = i("782340");
            let v = e => {
                    T();
                    let t = (0, n.useStateFromStores)([I.default], () => I.default.hasLoadedStickerPacks);
                    r.useEffect(() => {
                        t && null == I.default.getStickerPack(e) && (0, m.fetchStickerPack)(e)
                    }, [e, t])
                },
                y = e => {
                    let t = a.AnimateStickers.useSetting();
                    return (0, k.shouldAnimateSticker)(t, e)
                },
                _ = e => {
                    let {
                        collapsedStickersCategories: t,
                        filteredStickers: i,
                        listPaddingRight: n = 0,
                        listWidth: a = 0,
                        stickerNodeMargin: l = 0,
                        stickerNodeWidth: d,
                        stickersCategories: o
                    } = e;
                    return r.useMemo(() => {
                        let e = Math.floor((a - n + l) / (d + l)),
                            r = Math.floor(Math.max(l, (a - n - d * e) / (e - 1))),
                            S = [],
                            h = [],
                            m = [],
                            E = 0,
                            I = 0,
                            C = 0;
                        if (0 !== a) {
                            let r = function(t, i) {
                                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    n = (0, k.isGuildSticker)(t[0]) ? u.default.getGuild(t[0].guild_id) : void 0,
                                    {
                                        canCreateExpressions: a
                                    } = (0, s.getManageResourcePermissions)(n),
                                    l = c.default.getGuildId(),
                                    d = o.findIndex(e => e.type === p.StickerCategoryTypes.FAVORITE),
                                    v = o.findIndex(e => e.type === p.StickerCategoryTypes.RECENT),
                                    y = t.length;
                                null != n && l === n.id && a && t.length < (0, f.getTotalStickerCountForTier)(n.premiumTier) && y++;
                                let _ = Math.ceil(y / e);
                                h[I] = r ? 0 : _;
                                for (let s = 0; s < _; s++) {
                                    let a = s * e,
                                        l = a + e,
                                        u = t.slice(a, l).map((e, t) => ({
                                            type: p.StickerGridItemTypes.STICKER,
                                            sticker: e,
                                            packId: (0, k.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                                            gridSectionIndex: I,
                                            rowIndex: E,
                                            columnIndex: t,
                                            visibleRowIndex: C,
                                            category: i
                                        }));
                                    I > v && I > d && null != n && y > t.length && u.push({
                                        type: p.StickerGridItemTypes.CREATE_STICKER,
                                        guild_id: n.id,
                                        name: g.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                        gridSectionIndex: I,
                                        rowIndex: E,
                                        columnIndex: u.length,
                                        visibleRowIndex: C
                                    }), !r && (C++, m.push(u), S.push(u.length)), E++
                                }
                                I++
                            };
                            if (null == i)
                                for (let e of o) e.stickers.length > 0 ? (E++, r(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === p.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (h[I] = 0, I++);
                            else i.sendable.length > 0 && r(i.sendable, p.StickerCategoryTypes.SEARCH_RESULTS), i.sendableWithPremium.length > 0 && r(i.sendableWithPremium, p.StickerCategoryTypes.SEARCH_RESULTS)
                        }
                        return {
                            rowCount: E,
                            rowCountBySection: h,
                            stickersGrid: m,
                            gutterWidth: r,
                            columnCounts: S
                        }
                    }, [t, i, n, a, l, d, o])
                },
                R = e => {
                    let t = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                    return (0, n.useStateFromStores)([I.default], () => {
                        let i = I.default.getAllStickersIterator();
                        for (let r of i)
                            if ((0, h.isSendableSticker)(r, t, e)) return !0;
                        return !1
                    }, [t, e])
                },
                T = () => {
                    r.useEffect(() => {
                        (0, m.fetchStickerPacks)()
                    }, [])
                },
                L = e => {
                    let t = (0, n.useStateFromStores)([I.default], () => I.default.getAllGuildStickers()),
                        i = (0, n.useStateFromStoresArray)([d.default, u.default], () => {
                            let e = d.default.getFlattenedGuildIds(),
                                t = [];
                            return e.forEach(e => {
                                let i = u.default.getGuild(e);
                                null != i && t.push(i)
                            }), t
                        }, []),
                        a = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                    return r.useMemo(() => {
                        let r = [];
                        for (let {
                                name: e,
                                id: n
                            }
                            of i) {
                            let i = t.get(n);
                            null != i && 0 !== i.length && r.push({
                                type: p.StickerCategoryTypes.GUILD,
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
                                type: p.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                                id: t.id,
                                name: t.name,
                                stickers: []
                            }), null != a && !S.can({
                                permission: C.Permissions.USE_EXTERNAL_EMOJIS,
                                user: a,
                                context: e
                            }) && (r = r.filter(t => t.id === e.getGuildId()))
                        }
                        return r
                    }, [t, i, a, e])
                },
                x = [];

            function A() {
                var e, t;
                let i = (0, l.useFrecencySettings)();
                return null !== (t = null === (e = i.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : x
            }

            function P() {
                let e = A(),
                    t = (0, n.useStateFromStoresArray)([I.default], () => e.map(e => I.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
                return t
            }

            function U() {
                let e = function() {
                        var e, t;
                        let i = (0, l.useFrecencySettings)(),
                            r = x;
                        return (null == i ? void 0 : null === (e = i.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (r = Object.keys(null == i ? void 0 : null === (t = i.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), r
                    }(),
                    t = (0, n.useStateFromStoresArray)([I.default], () => e.map(e => I.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
                return t
            }
            let M = e => {
                    let t = P(),
                        {
                            packs: i,
                            frequentlyUsedStickers: s
                        } = (0, n.useStateFromStoresObject)([I.default, E.default], () => ({
                            packs: I.default.getPremiumPacks(),
                            frequentlyUsedStickers: E.default.stickerFrecencyWithoutFetchingLatest.frequently
                        }), []),
                        a = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                        l = L(e);
                    return r.useMemo(() => {
                        var r;
                        let n = i.map(k.createStickerPackCategory),
                            u = {
                                type: p.StickerCategoryTypes.FAVORITE,
                                id: p.StickerCategoryTypes.FAVORITE,
                                name: g.default.Messages.CATEGORY_FAVORITE,
                                stickers: t
                            },
                            c = {
                                type: p.StickerCategoryTypes.RECENT,
                                id: p.StickerCategoryTypes.RECENT,
                                name: g.default.Messages.STICKER_CATEGORY_RECENT,
                                stickers: null !== (r = null == s ? void 0 : s.filter(t => {
                                    if ((0, k.isGuildSticker)(t)) {
                                        var r, n;
                                        return null !== (n = null === (r = I.default.getStickersByGuildId(t.guild_id)) || void 0 === r ? void 0 : r.some(e => e.id === t.id)) && void 0 !== n && n && (0, h.getStickerSendability)(t, a, e) !== h.StickerSendability.NONSENDABLE
                                    }
                                    if ((0, k.isStandardSticker)(t)) return i.some(e => e.id === t.pack_id)
                                })) && void 0 !== r ? r : []
                            };
                        return [u, c, ...l, ...n]
                    }, [i, t, s, l, a, e])
                },
                N = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = (0, n.useStateFromStores)([I.default], () => I.default.getStickerById(e.id)),
                        [s, a] = r.useState(!0),
                        [l, u] = r.useState(!1),
                        c = (0, k.isGuildSticker)(e) || (0, k.isStandardSticker)(e);
                    return (r.useEffect(() => {
                        let r = async () => {
                            if (t && !c && null == i && s && !l) {
                                a(!1);
                                try {
                                    await (0, m.fetchSticker)(e.id)
                                } catch {}
                                u(!0)
                            }
                        };
                        r()
                    }, [t]), c) ? [e, l] : [null != i ? i : null, l]
                },
                F = e => {
                    let t = M(e);
                    return r.useMemo(() => t.filter(e => e.type === p.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
                }
        },
        41170: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getStickerAltText: function() {
                    return L
                },
                default: function() {
                    return N
                }
            }), i("222007");
            var r = i("37983"),
                n = i("884691"),
                s = i("414456"),
                a = i.n(s),
                l = i("627445"),
                u = i.n(l),
                c = i("146606"),
                d = i("446674"),
                o = i("290381"),
                f = i("77078"),
                S = i("206230"),
                h = i("407063"),
                m = i("54560"),
                E = i("983782"),
                I = i("866190"),
                p = i("256860"),
                k = i("161585"),
                C = i("24373"),
                g = i("782340"),
                v = i("419664");
            let y = e => e.preventDefault(),
                _ = {
                    tension: 1100,
                    friction: 40
                },
                R = {
                    tension: 1600,
                    friction: 60
                };

            function T(e, t) {
                return n.cloneElement(e, {
                    "data-type": "sticker",
                    "data-id": t
                })
            }

            function L(e) {
                let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
                return g.default.Messages.STICKER_A11Y_LABEL.format({
                    stickerName: t
                })
            }
            let x = e => {
                    let {
                        children: t,
                        hasError: i,
                        isLoading: n,
                        maskAsset: s,
                        size: l,
                        withLoadingIndicator: u = !0
                    } = e, c = l >= 33;
                    return (0, r.jsxs)("div", {
                        className: a(v.assetWrapper, {
                            [v.assetWrapperMasked]: i || s
                        }),
                        style: {
                            height: l,
                            width: l
                        },
                        children: [i ? (0, r.jsxs)("div", {
                            className: v.error,
                            children: [(0, r.jsx)(m.default, {
                                className: v.errorIcon
                            }), c && (0, r.jsx)(f.Text, {
                                className: v.errorText,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: g.default.Messages.STICKER_ASSET_LOAD_ERROR
                            })]
                        }) : t, u && n && (0, r.jsx)("div", {
                            className: v.loadingIndicator
                        })]
                    })
                },
                A = e => {
                    let {
                        shouldAnimate: t,
                        size: s,
                        sticker: a,
                        fileUri: l,
                        assetData: c,
                        isFocused: d,
                        className: o,
                        maskAsset: f,
                        positionRef: S,
                        withLoadingIndicator: m,
                        onError: E
                    } = e, I = n.useRef(null), p = n.useRef(null), [k, y] = n.useState(!0), [_, R] = n.useState(!1), A = n.useRef(!1);
                    A.current = t && d;
                    let P = null == l ? (0, C.getStickerAssetUrl)(a) : l;
                    return (u(null != P, "Unable to determine sticker asset URL. Sticker ID: ".concat(a.id)), n.useEffect(() => {
                        if (null == I.current || null == P) return;
                        let e = Math.min(2, (0, h.getDevicePixelRatio)());
                        I.current.width = s * e, I.current.height = s * e;
                        let t = !1,
                            r = async () => {
                                let {
                                    default: e
                                } = await i.el("619596").then(i.bind(i, "619596"));
                                null != I.current && (p.current = new e({
                                    canvas: I.current,
                                    animationId: a.id,
                                    assetUrl: P,
                                    assetData: c,
                                    onInitialDraw: () => {
                                        !t && y(!1)
                                    },
                                    onError: () => {
                                        !t && (y(!1), R(!0), null == E || E())
                                    }
                                }), A.current && p.current.setState(!0))
                            };
                        return r(), () => {
                            var e;
                            null === (e = p.current) || void 0 === e || e.drop(), p.current = null, t = !0
                        }
                    }, [P, s, a.id, c, E]), n.useEffect(() => {
                        var e;
                        let i;
                        !t && (i = 0), null === (e = p.current) || void 0 === e || e.setState(t && d, i)
                    }, [a, t, d]), null == P) ? null : (0, r.jsx)("div", {
                        role: "img",
                        className: o,
                        "aria-label": _ ? g.default.Messages.ERROR_LOADING_STICKER : L(a),
                        ref: S,
                        children: (0, r.jsx)(x, {
                            hasError: _,
                            isLoading: k,
                            maskAsset: f,
                            size: s,
                            withLoadingIndicator: m,
                            children: T((0, r.jsx)("canvas", {
                                className: v.lottieCanvas,
                                ref: I
                            }), a.id)
                        })
                    })
                },
                P = e => {
                    let {
                        shouldAnimate: t,
                        sticker: i,
                        isFocused: s,
                        size: l,
                        className: u,
                        maskAsset: c,
                        positionRef: d,
                        withLoadingIndicator: f,
                        fileUri: S
                    } = e, [h, m] = n.useState(!1), [E, I] = n.useState(!0), [p, k] = n.useState(!1), g = n.useRef(null), _ = n.useRef(null), R = null != S ? S : (0, C.getStickerAssetUrl)(i, {
                        isPreview: !t || !h || !s,
                        size: l
                    }), A = n.useCallback(() => {
                        I(!1)
                    }, []), P = n.useCallback(() => {
                        k(!0)
                    }, []);
                    return (n.useEffect(() => {
                        if (null != g.current) {
                            let {
                                isVisible: e
                            } = g.current;
                            m(e)
                        }
                    }, []), n.useLayoutEffect(() => {
                        var e;
                        (null === (e = _.current) || void 0 === e ? void 0 : e.complete) === !0 && I(!1)
                    }, []), null == R) ? null : (0, r.jsx)(o.VisibilitySensor, {
                        ref: g,
                        onChange: m,
                        threshold: .7,
                        children: (0, r.jsx)("div", {
                            className: a(u, v.pngImageWrapper),
                            ref: d,
                            children: (0, r.jsx)(x, {
                                hasError: p,
                                isLoading: E,
                                maskAsset: c,
                                size: l,
                                withLoadingIndicator: f,
                                children: T((0, r.jsx)("img", {
                                    className: v.pngImage,
                                    alt: L(i),
                                    src: R,
                                    draggable: !1,
                                    onError: P,
                                    onLoad: A,
                                    onContextMenu: y,
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
                        isInteracting: a,
                        positionRef: l,
                        size: u,
                        sticker: o
                    } = e, h = (0, d.useStateFromStores)([S.default], () => S.default.useReducedMotion), m = n.useRef(null), I = {
                        transform: "scale(".concat(h ? 1 : 1 / i, ")"),
                        opacity: 0
                    }, p = (0, c.useTransition)(a, {
                        ref: m,
                        from: I,
                        enter: {
                            transform: "scale(1)",
                            opacity: 1
                        },
                        leave: I,
                        config: _
                    }), k = n.useRef(null), C = (0, c.useSpring)({
                        ref: k,
                        transform: a || h ? "translateY(0)" : "translateY(-25px)",
                        opacity: a ? 1 : 0,
                        config: R
                    });
                    return (0, c.useChain)(a ? [m, k] : [k, m], a ? [0, .0625] : [0, 0]), p((e, n) => n && (0, r.jsx)(E.AppReferencePositionLayer, {
                        className: v.positionedLayer,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        reference: l,
                        children: () => (0, r.jsxs)("div", {
                            className: v.overlayWrapper,
                            children: [(0, r.jsx)(c.animated.div, {
                                className: v.overlayStickerWrapper,
                                style: e,
                                children: (0, r.jsx)(M, {
                                    className: v.overlaySticker,
                                    disableAnimation: t,
                                    enlargeOnInteraction: !1,
                                    isInteracting: a,
                                    maskAsset: !1,
                                    sticker: o,
                                    size: Math.round(u * i),
                                    withLoadingIndicator: !1
                                })
                            }), s && (0, r.jsx)(c.animated.div, {
                                className: v.overlayLabelWrapper,
                                style: C,
                                children: (0, r.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    className: v.overlayLabel,
                                    children: o.name
                                })
                            })]
                        })
                    }))
                },
                M = e => {
                    let {
                        isInteracting: t = !1,
                        disableAnimation: i = !1,
                        enlargeOnInteraction: s = !1,
                        enlargeWithName: a = !0,
                        enlargeScaleFactor: l = 1.55,
                        maskAsset: u = !1,
                        size: c,
                        sticker: d,
                        className: o,
                        withLoadingIndicator: f,
                        assetData: S,
                        fileUri: h,
                        onError: m
                    } = e, E = (0, I.useIsWindowFocused)(), C = (0, p.useShouldAnimateSticker)(t) && !i, g = n.useRef(null);
                    if (null == d) return null;
                    let v = d.format_type === k.StickerFormat.LOTTIE ? A : P;
                    return (0, r.jsxs)(n.Fragment, {
                        children: [(0, r.jsx)(v, {
                            shouldAnimate: C,
                            isFocused: E,
                            size: c,
                            sticker: d,
                            className: o,
                            maskAsset: u,
                            positionRef: g,
                            withLoadingIndicator: f,
                            assetData: S,
                            fileUri: h,
                            onError: m
                        }), s && (0, r.jsx)(U, {
                            disableAnimation: i,
                            enlargeScaleFactor: l,
                            enlargeWithName: a,
                            isInteracting: t,
                            positionRef: g,
                            size: c,
                            sticker: d
                        })]
                    }, "".concat(d.id, ",").concat(c))
                };
            var N = M
        },
        591522: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("45029"),
                s = i("440162"),
                a = e => {
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
                    return T
                }
            });
            var r = i("37983"),
                n = i("884691"),
                s = i("414456"),
                a = i.n(s),
                l = i("917351"),
                u = i("617258"),
                c = i("77078"),
                d = i("272030"),
                o = i("997289"),
                f = i("246511"),
                S = i("151185"),
                h = i("599110"),
                m = i("866353"),
                E = i("161585"),
                I = i("24373"),
                p = i("41170"),
                k = i("591522"),
                C = i("49111"),
                g = i("782340"),
                v = i("677930");
            let y = (0, u.cssValueToNumber)(v.stickerPickerPreviewDimensions),
                _ = (0, u.cssValueToNumber)(v.stickerPickerPreviewPadding),
                R = n.memo(function(e) {
                    let {
                        isDisplayingIndividualStickers: t = !1,
                        preferAnimation: s = !0,
                        getStickerItemProps: u,
                        getStickerRowProps: R,
                        gutterWidth: T,
                        inspectedStickerPosition: L,
                        isScrolling: x,
                        isUsingKeyboardNavigation: A,
                        onInspect: P,
                        onSelect: U,
                        rowIndex: M,
                        stickerClassName: N,
                        stickerDescriptors: F,
                        stickerPadding: b = _,
                        stickerSize: w = y,
                        ownedStickerPacks: K,
                        enlargeOnInteraction: O = !1,
                        channel: j,
                        currentUser: G,
                        checkSendability: D = !0
                    } = e, {
                        location: H
                    } = (0, o.useAnalyticsContext)(), V = w + 2 * b, B = n.useMemo(() => ({
                        gridColumnGap: T,
                        gridTemplateColumns: "repeat(auto-fill, ".concat(V, "px)"),
                        height: V,
                        paddingRight: t ? void 0 : V
                    }), [t, T, V]), z = n.useMemo(() => ({
                        width: w,
                        height: w,
                        padding: b
                    }), [b, w]);
                    return (0, r.jsx)("div", {
                        className: v.row,
                        style: B,
                        ...null == R ? void 0 : R(M),
                        children: F.map(e => {
                            var o;
                            let y = e.visibleRowIndex === (null == L ? void 0 : L.rowIndex) && e.columnIndex === (null == L ? void 0 : L.columnIndex),
                                _ = e.type === E.StickerGridItemTypes.STICKER && O && y,
                                R = (0, l.throttle)(() => {
                                    (null == x ? void 0 : x.current) !== !0 && (null == A ? void 0 : A.current) !== !0 && !y && (null == P || P(e))
                                }, 250),
                                {
                                    ref: T,
                                    tabIndex: F,
                                    onFocus: b,
                                    ...V
                                } = null !== (o = null == u ? void 0 : u(e.columnIndex, M)) && void 0 !== o ? o : {};
                            switch (e.type) {
                                case E.StickerGridItemTypes.CREATE_STICKER:
                                    return (0, r.jsx)("div", {
                                        ...V,
                                        children: (0, r.jsxs)(c.Clickable, {
                                            "aria-label": e.name,
                                            className: a(v.createSticker, N, {
                                                [v.createInspected]: y
                                            }),
                                            innerRef: T,
                                            tabIndex: F,
                                            onFocus: null != b ? b : R,
                                            onMouseMove: R,
                                            onClick: () => {
                                                e.type === E.StickerGridItemTypes.CREATE_STICKER && (h.default.track(C.AnalyticEvents.OPEN_MODAL, {
                                                    type: C.AnalyticsSections.CREATE_STICKER_MODAL,
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
                                            style: z,
                                            children: [!O && (0, r.jsx)("div", {
                                                className: v.inspectedIndicator
                                            }), (0, r.jsx)("div", {
                                                className: v.iconWrapper,
                                                children: (0, r.jsx)(S.default, {
                                                    className: v.icon
                                                })
                                            }), (0, r.jsx)(c.Text, {
                                                color: "interactive-active",
                                                variant: "text-xs/normal",
                                                children: g.default.Messages.STICKER_PICKER_CREATE_STICKER
                                            })]
                                        })
                                    }, e.guild_id);
                                case E.StickerGridItemTypes.STICKER: {
                                    let l = t && null != K && (0, I.isStandardSticker)(e.sticker) && !K.has(e.sticker.pack_id);
                                    return (0, n.createElement)("div", {
                                        ...V,
                                        key: e.sticker.id
                                    }, (0, r.jsxs)(c.Clickable, {
                                        className: a(v.sticker, N, {
                                            [v.stickerInspected]: y
                                        }),
                                        innerRef: T,
                                        tabIndex: F,
                                        onFocus: null != b ? b : R,
                                        onMouseMove: R,
                                        onClick: t => {
                                            (null == x ? void 0 : x.current) !== !0 && (null == A ? void 0 : A.current) !== !0 && (null == U || U(e, t))
                                        },
                                        onContextMenu: e => {
                                            (0, d.openContextMenuLazy)(e, async () => {
                                                let {
                                                    default: e
                                                } = await i.el("367343").then(i.bind(i, "367343"));
                                                return t => (0, r.jsx)(e, {
                                                    ...t
                                                })
                                            })
                                        },
                                        style: z,
                                        "data-type": f.PickerContextMenuDataTypes.STICKER,
                                        "data-id": e.sticker.id,
                                        children: [(0, r.jsx)(c.HiddenVisually, {
                                            children: (0, p.getStickerAltText)(e.sticker)
                                        }), (0, r.jsxs)("div", {
                                            "aria-hidden": !0,
                                            children: [!O && (0, r.jsx)("div", {
                                                className: v.inspectedIndicator
                                            }), (0, r.jsx)(p.default, {
                                                className: a(v.stickerNode, {
                                                    [v.stickerNodeDimmed]: O && !y && null != L && -1 !== L.rowIndex && -1 !== L.columnIndex,
                                                    [v.stickerNodeHidden]: _,
                                                    [v.stickerUnsendable]: D && !(0, m.isSendableSticker)(e.sticker, G, j)
                                                }),
                                                disableAnimation: !y && !s,
                                                enlargeOnInteraction: O,
                                                isInteracting: y,
                                                maskAsset: y,
                                                sticker: e.sticker,
                                                size: w
                                            }), l ? (0, r.jsx)(k.default, {
                                                size: 20
                                            }) : null]
                                        })]
                                    }))
                                }
                            }
                        })
                    })
                });
            var T = R
        },
        113270: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("77078"),
                s = i("599110"),
                a = i("49111");

            function l(e) {
                s.default.track(a.AnalyticEvents.OPEN_MODAL, {
                    type: a.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
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
                    return l
                }
            });
            var r = i("884691"),
                n = i("446674"),
                s = i("872173"),
                a = i("374363");

            function l() {
                return r.useEffect(() => {
                    s.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, n.useStateFromStores)([a.default], () => a.default.frecencyWithoutFetchingLatest)
            }
        },
        216422: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("469563"),
                s = i("202909"),
                a = i("75196"),
                l = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: n = "currentColor",
                        viewBox: s = "0 0 24 24",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: i,
                        viewBox: s,
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, s.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        132755: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("469563"),
                s = i("876726"),
                a = i("75196"),
                l = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: i = 16,
                        color: n = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: i,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            className: s,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: n
                        })
                    })
                }, s.PlayIcon, void 0, {
                    size: 16
                })
        },
        54560: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("469563"),
                s = i("441888"),
                a = i("75196"),
                l = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: i = 20,
                        color: n = "currentColor",
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        width: t,
                        height: i,
                        ...(0, a.default)(s),
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
        804830: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                NitroWheelIcon: function() {
                    return a
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("669491"),
                s = i("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: l
                    })]
                })
            }
        },
        849638: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PlayIcon: function() {
                    return a
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("669491"),
                s = i("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
                        className: l
                    })
                })
            }
        },
        597285: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                StickerSadIcon: function() {
                    return a
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("669491"),
                s = i("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 3.83a1 1 0 0 0 1.39-.27 3.5 3.5 0 0 1 5.82 0 1 1 0 0 0 1.66-1.12 5.5 5.5 0 0 0-9.14 0 1 1 0 0 0 .27 1.4Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                        className: l
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=61442.8450bab283c23bdc86aa.js.map