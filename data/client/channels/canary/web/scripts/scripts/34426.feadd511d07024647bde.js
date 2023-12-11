(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34426"], {
        564967: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("862205");
            let a = (0, n.createExperiment)({
                kind: "user",
                id: "2023-01_emoji_discovery_backfill",
                label: "Emoji Hotrail Backfill",
                defaultConfig: {
                    shouldBackfillEmojis: !1
                },
                treatments: [{
                    id: 1,
                    label: "Backfills Hotrail With Emojis",
                    config: {
                        shouldBackfillEmojis: !0
                    }
                }]
            });
            var r = a
        },
        788506: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useEmojiCategories: function() {
                    return A
                },
                trackPremiumSettingsPaneOpened: function() {
                    return h
                },
                trackEmojiSearchStart: function() {
                    return M
                },
                trackEmojiSearchResultsViewed: function() {
                    return R
                },
                trackEmojiSearchSelect: function() {
                    return N
                },
                trackEmojiSearchEmpty: function() {
                    return P
                },
                trackEmojiFocus: function() {
                    return v
                },
                trackEmojiSelect: function() {
                    return k
                },
                trackEmojiFavorited: function() {
                    return F
                },
                getAriaIdForEmojiCategory: function() {
                    return U
                },
                getStringForEmojiCategory: function() {
                    return L
                },
                allowUnicodeEmojiForIntention: function() {
                    return x
                },
                useEmojiSearchResults: function() {
                    return J
                },
                useFrequentlyUsedEmojis: function() {
                    return G
                },
                useFavoriteEmojis: function() {
                    return b
                },
                useIsFavoriteEmoji: function() {
                    return w
                },
                useEmojiInPriorityOrder: function() {
                    return Y
                },
                useTrackEmojiPickerOpened: function() {
                    return W
                },
                getEmojiSubCategory: function() {
                    return K
                },
                dedupeUnicodeEmojis: function() {
                    return q
                },
                getSearchPlaceholder: function() {
                    return B
                }
            }), i("843762"), i("424973"), i("222007"), i("808653"), i("781738");
            var n = i("884691");
            i("375128");
            var a = i("446674"),
                r = i("716241"),
                o = i("385976"),
                s = i("858619"),
                u = i("630400"),
                l = i("252931"),
                E = i("166465"),
                d = i("872173"),
                c = i("305961"),
                m = i("677099"),
                _ = i("599110"),
                f = i("402671"),
                g = i("577426"),
                I = i("255214"),
                p = i("352046"),
                C = i("115279"),
                O = i("49111"),
                y = i("958706"),
                j = i("13030"),
                T = i("646718"),
                S = i("782340");
            let A = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
                    (0, u.maybeFetchTopEmojisByGuild)(i);
                    let r = (0, y.isExternalEmojiAllowedForIntention)(e),
                        s = G(i),
                        d = b(i),
                        _ = (0, a.useStateFromStoresArray)([E.default], () => E.default.getSortedPackIds(), []),
                        {
                            topEmojis: g,
                            newlyAddedEmojis: O,
                            backfillEmojis: j
                        } = (0, p.default)(i, e),
                        {
                            allEmojis: T
                        } = (0, I.default)({
                            topEmojis: g,
                            newlyAddedEmojis: O,
                            backfillEmojis: j
                        }),
                        {
                            viewAndUseEnabled: A
                        } = (0, l.useInventoryGuildPacksUserExperiment)({
                            autoTrackExposure: !1
                        }),
                        h = (0, a.useStateFromStores)([o.default], () => o.default.getDisambiguatedEmojiContext(i), [i]),
                        M = (0, a.useStateFromStores)([c.default], () => {
                            var e;
                            return null === (e = c.default.getGuild(i)) || void 0 === e ? void 0 : e.name
                        }),
                        R = n.useMemo(() => {
                            let n = h.getGroupedCustomEmoji(),
                                a = m.default.getFlattenedGuildIds(),
                                u = [],
                                l = (a, r) => {
                                    for (let o of a) {
                                        let a;
                                        if (r === C.EmojiCategoryTypes.PACK ? a = E.default.getPackByPackId({
                                                packId: o
                                            }) : r === C.EmojiCategoryTypes.GUILD && (a = c.default.getGuild(o)), null == a) continue;
                                        let s = null == n ? void 0 : n[a.id];
                                        if (null == s || 0 === s.length || null != t && s.every(i => f.default.isEmojiFiltered({
                                                emoji: i,
                                                channel: t,
                                                intention: e,
                                                canViewAndUsePackEmoji: A
                                            }))) continue;
                                        let l = null;
                                        if (r === C.EmojiCategoryTypes.PACK) {
                                            let e = a;
                                            l = {
                                                type: C.EmojiCategoryTypes.PACK,
                                                pack: e,
                                                id: e.id
                                            }
                                        } else r === C.EmojiCategoryTypes.GUILD && (l = {
                                            type: C.EmojiCategoryTypes.GUILD,
                                            guild: a
                                        });
                                        null != l && (a.id === i ? u.unshift(l) : u.push(l))
                                    }
                                };
                            return l(_, C.EmojiCategoryTypes.PACK), l(a, C.EmojiCategoryTypes.GUILD), o.default.categories.reduce((t, n) => {
                                if (n === C.EmojiCategories.TOP_GUILD_EMOJI) {
                                    if (0 === T.length) return t;
                                    t.push({
                                        type: C.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                        id: n,
                                        name: S.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                            guildName: M
                                        })
                                    })
                                } else if (n === C.EmojiCategories.RECENT) {
                                    if (0 === s.length) return t;
                                    t.push({
                                        type: C.EmojiCategoryTypes.RECENT,
                                        id: n,
                                        name: S.default.Messages.EMOJI_CATEGORY_RECENT
                                    })
                                } else if (n === C.EmojiCategories.FAVORITES) {
                                    if (0 === d.length) return t;
                                    t.push({
                                        type: C.EmojiCategoryTypes.FAVORITES,
                                        id: n,
                                        name: S.default.Messages.CATEGORY_FAVORITE
                                    })
                                } else if (n === C.EmojiCategories.CUSTOM) {
                                    let e = u;
                                    !r && (e = u.filter(e => e.type === C.EmojiCategoryTypes.GUILD && e.guild.id === i)), t.push(...e)
                                } else if (x(e)) t.push({
                                    type: C.EmojiCategoryTypes.UNICODE,
                                    id: n,
                                    name: n
                                });
                                return t
                            }, [])
                        }, [h, t, i, e, T.length, M, _, s.length, d.length, r, A]);
                    return R
                },
                h = e => {
                    let t = (null == e ? void 0 : e.getGuildId()) != null;
                    _.default.track(O.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_page: t ? O.AnalyticsPages.GUILD_CHANNEL : O.AnalyticsPages.DM_CHANNEL,
                        location_section: null != e ? O.AnalyticsSections.EMOJI_PICKER_POPOUT : O.AnalyticsSections.CUSTOM_STATUS_MODAL
                    })
                },
                M = (e, t) => {
                    r.default.trackWithMetadata(O.AnalyticEvents.SEARCH_STARTED, {
                        search_type: null != t && t === y.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                        location: e
                    })
                },
                R = (e, t, i, n, a) => {
                    r.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: null != a && a === y.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                        total_results: e,
                        num_results_locked: t,
                        query: n,
                        location: i
                    })
                },
                N = (e, t, i, n) => {
                    var a;
                    let o = null !== (a = e.uniqueName) && void 0 !== a ? a : e.name;
                    r.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        search_type: null != n && n === y.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                        location: t,
                        expression_guild_id: D(e),
                        expression_pack_id: e.type === s.EmojiTypes.PACK ? e.packId : void 0,
                        emoji_id: e.id,
                        emoji_name: o,
                        is_custom: null != e.id,
                        is_animated: e.animated,
                        query: i
                    })
                },
                P = (e, t) => {
                    r.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        search_type: O.SearchTypes.EMOJI,
                        query: t,
                        location: e
                    })
                },
                v = e => {
                    let {
                        emoji: t,
                        subCategory: i,
                        position: n,
                        backfillEmoji: a,
                        newlyAddedHighlight: o
                    } = e;
                    r.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                        expression_section: null == i ? void 0 : i.toString(),
                        newly_added_highlight: o,
                        emoji_id: t.id,
                        emoji_name: t.name,
                        emoji_animated: t.animated,
                        emoji_backfilled: a,
                        emoji_position: n
                    })
                },
                k = e => {
                    var t;
                    let i, {
                        emoji: n,
                        location: a,
                        pickerIntention: o,
                        category: u,
                        subCategory: l = C.EmojiSubCategory.NONE,
                        position: E,
                        backfillEmoji: d,
                        newlyAddedHighlight: c,
                        isBurstReaction: m
                    } = e;
                    switch (o) {
                        case y.EmojiIntention.REACTION:
                            i = m ? T.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : T.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            break;
                        case y.EmojiIntention.STATUS:
                            i = T.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                            break;
                        default:
                            i = T.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
                    }
                    let _ = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
                    r.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: i,
                        location: a,
                        expression_id: n.id,
                        expression_name: _,
                        expression_guild_id: D(n),
                        expression_pack_id: n.type === s.EmojiTypes.PACK ? n.packId : void 0,
                        is_custom: null != n.id,
                        is_animated: n.animated,
                        expression_picker_section: u,
                        expression_section: null == l ? void 0 : l.toString(),
                        emoji_position: E,
                        emoji_backfilled: d,
                        newly_added_highlight: c,
                        is_burst: m
                    })
                },
                F = e => {
                    var t;
                    let {
                        emoji: i,
                        location: n
                    } = e, a = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
                    r.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: n,
                        expression_type: j.ExpressionPickerViewType.EMOJI,
                        expression_id: i.id,
                        expression_name: a,
                        expression_guild_id: D(i),
                        expression_pack_id: i.type === s.EmojiTypes.PACK ? i.packId : void 0,
                        is_custom: null != i.id,
                        is_animated: i.animated
                    })
                };

            function D(e) {
                return e.type !== s.EmojiTypes.PACK ? e.guildId : void 0
            }
            let U = (e, t, i) => {
                    switch (e.type) {
                        case C.EmojiCategoryTypes.GUILD:
                            if (null != t) return t.toString();
                            return "";
                        case C.EmojiCategoryTypes.PACK:
                            if (null != i) return i.name;
                            return e.id;
                        default:
                            return e.id
                    }
                },
                L = (e, t, i) => {
                    switch (e) {
                        case C.EmojiCategories.TOP_GUILD_EMOJI:
                            return S.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: t
                            });
                        case C.EmojiCategories.RECENT:
                            return S.default.Messages.EMOJI_CATEGORY_RECENT;
                        case C.EmojiCategories.FAVORITES:
                            return S.default.Messages.CATEGORY_FAVORITE;
                        case C.EmojiCategories.ACTIVITY:
                            return S.default.Messages.EMOJI_CATEGORY_ACTIVITY;
                        case C.EmojiCategories.FLAGS:
                            return S.default.Messages.EMOJI_CATEGORY_FLAGS;
                        case C.EmojiCategories.FOOD:
                            return S.default.Messages.EMOJI_CATEGORY_FOOD;
                        case C.EmojiCategories.NATURE:
                            return S.default.Messages.EMOJI_CATEGORY_NATURE;
                        case C.EmojiCategories.OBJECTS:
                            return S.default.Messages.EMOJI_CATEGORY_OBJECTS;
                        case C.EmojiCategories.PEOPLE:
                            return S.default.Messages.EMOJI_CATEGORY_PEOPLE;
                        case C.EmojiCategories.SYMBOLS:
                            return S.default.Messages.EMOJI_CATEGORY_SYMBOLS;
                        case C.EmojiCategories.TRAVEL:
                            return S.default.Messages.EMOJI_CATEGORY_TRAVEL;
                        case C.EmojiCategories.PREMIUM_UPSELL:
                            return S.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                        default:
                            return null != i ? S.default.Messages.EMOJI_CATEGORY_PACK.format({
                                packName: i
                            }) : null != t ? t : e
                    }
                },
                x = e => e !== y.EmojiIntention.COMMUNITY_CONTENT_ONLY;

            function J(e, t, i) {
                let {
                    viewAndUseEnabled: r
                } = (0, l.useInventoryGuildPacksUserExperiment)({
                    autoTrackExposure: !1
                });
                n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let s = (0, y.isExternalEmojiAllowedForIntention)(i);
                return (0, a.useStateFromStores)([o.default], () => {
                    let n = e.replace(/^:/, "").replace(/:$/, "");
                    return "" === n ? null : o.default.searchWithoutFetchingLatest({
                        channel: t,
                        query: n,
                        count: 0,
                        intention: i,
                        includeExternalGuilds: s,
                        canViewAndUsePackEmoji: r
                    })
                }, [t, i, e, s, r], a.statesWillNeverBeEqual)
            }

            function G(e) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
            }

            function b(e) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
            }

            function w(e, t) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStores)([o.default], () => null != t && o.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
            }

            function Y(e) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
            }

            function W(e) {
                let t = n.useCallback(() => {
                    (0, g.default)(e)
                }, [e]);
                return n.useEffect(() => {
                    e.intention === y.EmojiIntention.REACTION && t()
                }, []), {
                    trackOnPickerOpen: t
                }
            }

            function K(e, t, i) {
                if (null == i) return C.EmojiSubCategory.NONE;
                let n = e.map(e => {
                        var t, i;
                        return null !== (i = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== i ? i : e.name
                    }),
                    a = t.map(e => e.id);
                return n.includes(i) ? C.EmojiSubCategory.TOP_GUILD_EMOJI : a.includes(i) ? C.EmojiSubCategory.NEWLY_ADDED_EMOJI : C.EmojiSubCategory.NONE
            }

            function q(e) {
                let t = new Set,
                    i = e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)));
                return i
            }

            function B(e, t) {
                return e === y.EmojiIntention.REACTION ? t ? S.default.Messages.SEARCH_FOR_SUPER_REACTION : S.default.Messages.SEARCH_FOR_REACTION : S.default.Messages.SEARCH_FOR_EMOJI
            }
        },
        577426: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            }), i("808653");
            var n = i("716241"),
                a = i("385976"),
                r = i("166465"),
                o = i("692171"),
                s = i("42203"),
                u = i("18494"),
                l = i("402671"),
                E = i("255214"),
                d = i("352046"),
                c = i("49111"),
                m = i("958706"),
                _ = i("13030");

            function f(e) {
                var t;
                let {
                    intention: i,
                    containerWidth: f,
                    rowSize: g,
                    isBurstReaction: I,
                    analyticsObject: p
                } = e, C = s.default.getChannel(u.default.getChannelId()), O = null == C ? void 0 : C.getGuildId(), y = a.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), j = null != C ? a.default.getDisambiguatedEmojiContext(C.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], T = y.slice(0, a.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), S = null != O ? a.default.getGuildEmoji(O) : [], A = r.default.getPacksForUser().map(e => e.content.emojis).reduce((e, t) => e.concat(t), []), h = null !== (t = a.default.getDisambiguatedEmojiContext(null == C ? void 0 : C.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}, M = Object.values(h).reduce((e, t) => e += t.length, 0), {
                    topEmojis: R,
                    newlyAddedEmojis: N,
                    backfillEmojis: P
                } = (0, d.getTopAndNewlyAddedEmojis)({
                    guildId: null == C ? void 0 : C.getGuildId(),
                    pickerIntention: i
                }), {
                    visibleTopEmojis: v,
                    visibleNewlyAddedEmojis: k,
                    visibleBackfillEmojis: F
                } = (0, E.getEmojiHotrail)({
                    topEmojis: R,
                    newlyAddedEmojis: N,
                    backfillEmojis: P,
                    rowSize: g
                }), D = o.default.remainingBurstCurrency;
                n.default.trackWithMetadata(i === m.EmojiIntention.REACTION ? c.AnalyticEvents.REACTION_PICKER_OPENED : c.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                    width: f,
                    tab: _.ExpressionPickerViewType.EMOJI,
                    badged: !1,
                    num_expressions_favorites: j.length,
                    num_animated_expressions_favorites: j.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_favorites: j.filter(l.default.isCustomEmoji).length,
                    num_standard_expressions_favorites: j.filter(e => null == e.id).length,
                    num_expressions_frecent: T.length,
                    num_animated_expressions_frecent: T.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_frecent: T.filter(l.default.isCustomEmoji).length,
                    num_standard_expressions_frecent: T.filter(e => null == e.id).length,
                    num_current_guild_expressions: S.length,
                    num_current_pack_expressions: A.length,
                    num_custom_expressions_total: M,
                    num_expressions_top_server: v.length,
                    num_animated_expressions_top_server: v.filter(e => e.animated).length,
                    num_expressions_newly_added: k.length,
                    num_animated_expressions_newly_added: k.filter(e => e.animated).length,
                    num_expressions_backfilled: F.length,
                    num_animated_expressions_backfilled: F.filter(e => e.animated).length,
                    ...i === m.EmojiIntention.REACTION && {
                        is_burst: I,
                        burst_reaction_balance: D
                    },
                    ...null != p && {
                        location_object: p
                    }
                })
            }
        },
        255214: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getEmojiHotrail: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var n = i("884691"),
                a = i("115279");

            function r(e) {
                let {
                    topEmojis: t,
                    newlyAddedEmojis: i,
                    backfillEmojis: n,
                    rowSize: r = a.EMOJI_ROW_SIZE
                } = e, o = t.slice(0, r - i.length), s = [];
                return o.length + i.length < r && (s = n.slice(0, r - t.length - i.length)), {
                    visibleTopEmojis: o,
                    visibleNewlyAddedEmojis: i,
                    visibleBackfillEmojis: s,
                    allEmojis: o.concat(s).concat(i)
                }
            }

            function o(e) {
                return n.useMemo(() => r(e), [e])
            }
        },
        352046: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getTopAndNewlyAddedEmojis: function() {
                    return u
                },
                default: function() {
                    return l
                }
            });
            var n = i("65597"),
                a = i("385976"),
                r = i("564967"),
                o = i("958706");
            let s = [];

            function u(e) {
                let {
                    emojiStoreInstance: t = a.default,
                    guildId: i,
                    pickerIntention: n,
                    shouldSeeBackfillEmojis: u = r.default.getCurrentConfig({
                        location: "fe926e_1"
                    }, {
                        autoTrackExposure: !1
                    }).shouldBackfillEmojis
                } = e;
                return {
                    topEmojis: n !== o.EmojiIntention.REACTION ? t.getTopEmoji(i) : s,
                    newlyAddedEmojis: n !== o.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(i) : s,
                    backfillEmojis: n !== o.EmojiIntention.REACTION && u ? t.getBackfillTopEmojis(i) : s
                }
            }

            function l(e, t) {
                let {
                    shouldBackfillEmojis: i
                } = r.default.useExperiment({
                    location: "fe926e_1"
                }, {
                    autoTrackExposure: !1
                });
                return (0, n.useStateFromStoresObject)([a.default], () => u({
                    emojiStoreInstance: a.default,
                    guildId: e,
                    pickerIntention: t,
                    shouldSeeBackfillEmojis: i
                }), [e, t, i])
            }
        },
        305781: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchTopEmojis: function() {
                    return o
                },
                updateNewlyAddedLastSeen: function() {
                    return s
                },
                updateNewlyAddedEmojiSeenAcknowledged: function() {
                    return u
                }
            });
            var n = i("872717"),
                a = i("913144"),
                r = i("49111");

            function o(e) {
                a.default.dispatch({
                    type: "TOP_EMOJIS_FETCH",
                    guildId: e
                }), n.default.get({
                    url: r.Endpoints.TOP_EMOJIS_FOR_GUILD(e),
                    oldFormErrors: !0
                }).then(t => a.default.dispatch({
                    type: "TOP_EMOJIS_FETCH_SUCCESS",
                    guildId: e,
                    topEmojisMetadata: t.body.items.map(e => ({
                        emojiId: e.emoji_id,
                        rank: e.emoji_rank
                    })).sort((e, t) => e.rank - t.rank)
                }), () => a.default.dispatch({
                    type: "TOP_EMOJIS_FETCH_FAILURE",
                    guildId: e
                }))
            }

            function s(e, t) {
                a.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
                }), null != e && null != t && a.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
                    guildId: e,
                    emojiId: t
                })
            }

            function u(e, t) {
                null != e && null != t && a.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",
                    guildId: e,
                    emojiId: t
                })
            }
        },
        630400: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                maybeFetchTopEmojisByGuild: function() {
                    return s
                }
            });
            var n = i("697218"),
                a = i("385976"),
                r = i("26430"),
                o = i("305781");

            function s(e) {
                if (null == e) return;
                let t = n.default.getCurrentUser();
                if (null == t) return;
                let i = a.default.getTopEmojisMetadata(e);
                if (null != i) {
                    let {
                        topEmojisTTL: e
                    } = i;
                    if (null == e || Date.now() < e) return
                }!r.default.getIsFetching(e) && (0, o.fetchTopEmojis)(e)
            }
        }
    }
]);
//# sourceMappingURL=34426.feadd511d07024647bde.js.map