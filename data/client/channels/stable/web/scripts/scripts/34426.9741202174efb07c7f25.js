(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34426"], {
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
                    return F
                },
                trackEmojiFavorited: function() {
                    return D
                },
                getAriaIdForEmojiCategory: function() {
                    return L
                },
                getStringForEmojiCategory: function() {
                    return k
                },
                allowUnicodeEmojiForIntention: function() {
                    return J
                },
                useEmojiSearchResults: function() {
                    return G
                },
                useFrequentlyUsedEmojis: function() {
                    return x
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
                    return K
                },
                getEmojiSubCategory: function() {
                    return W
                },
                dedupeUnicodeEmojis: function() {
                    return q
                },
                getSearchPlaceholder: function() {
                    return H
                }
            }), i("843762"), i("424973"), i("222007"), i("808653"), i("781738");
            var n = i("884691");
            i("375128");
            var r = i("446674"),
                a = i("716241"),
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
                C = i("352046"),
                p = i("115279"),
                O = i("49111"),
                y = i("958706"),
                T = i("13030"),
                j = i("646718"),
                S = i("782340");
            let A = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
                    (0, u.maybeFetchTopEmojisByGuild)(i);
                    let a = (0, y.isExternalEmojiAllowedForIntention)(e),
                        s = x(i),
                        d = b(i),
                        _ = (0, r.useStateFromStoresArray)([E.default], () => E.default.getSortedPackIds(), []),
                        {
                            topEmojis: g,
                            newlyAddedEmojis: O
                        } = (0, C.default)(i, e),
                        {
                            allEmojis: T
                        } = (0, I.default)({
                            topEmojis: g,
                            newlyAddedEmojis: O
                        }),
                        {
                            viewAndUseEnabled: j
                        } = (0, l.useInventoryGuildPacksUserExperiment)({
                            autoTrackExposure: !1
                        }),
                        A = (0, r.useStateFromStores)([o.default], () => o.default.getDisambiguatedEmojiContext(i), [i]),
                        h = (0, r.useStateFromStores)([c.default], () => {
                            var e;
                            return null === (e = c.default.getGuild(i)) || void 0 === e ? void 0 : e.name
                        }),
                        M = n.useMemo(() => {
                            let n = A.getGroupedCustomEmoji(),
                                r = m.default.getFlattenedGuildIds(),
                                u = [],
                                l = (r, a) => {
                                    for (let o of r) {
                                        let r;
                                        if (a === p.EmojiCategoryTypes.PACK ? r = E.default.getPackByPackId({
                                                packId: o
                                            }) : a === p.EmojiCategoryTypes.GUILD && (r = c.default.getGuild(o)), null == r) continue;
                                        let s = null == n ? void 0 : n[r.id];
                                        if (null == s || 0 === s.length || null != t && s.every(i => f.default.isEmojiFiltered({
                                                emoji: i,
                                                channel: t,
                                                intention: e,
                                                canViewAndUsePackEmoji: j
                                            }))) continue;
                                        let l = null;
                                        if (a === p.EmojiCategoryTypes.PACK) {
                                            let e = r;
                                            l = {
                                                type: p.EmojiCategoryTypes.PACK,
                                                pack: e,
                                                id: e.id
                                            }
                                        } else a === p.EmojiCategoryTypes.GUILD && (l = {
                                            type: p.EmojiCategoryTypes.GUILD,
                                            guild: r
                                        });
                                        null != l && (r.id === i ? u.unshift(l) : u.push(l))
                                    }
                                };
                            return l(_, p.EmojiCategoryTypes.PACK), l(r, p.EmojiCategoryTypes.GUILD), o.default.categories.reduce((t, n) => {
                                if (n === p.EmojiCategories.TOP_GUILD_EMOJI) {
                                    if (0 === T.length) return t;
                                    t.push({
                                        type: p.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                        id: n,
                                        name: S.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                            guildName: h
                                        })
                                    })
                                } else if (n === p.EmojiCategories.RECENT) {
                                    if (0 === s.length) return t;
                                    t.push({
                                        type: p.EmojiCategoryTypes.RECENT,
                                        id: n,
                                        name: S.default.Messages.EMOJI_CATEGORY_RECENT
                                    })
                                } else if (n === p.EmojiCategories.FAVORITES) {
                                    if (0 === d.length) return t;
                                    t.push({
                                        type: p.EmojiCategoryTypes.FAVORITES,
                                        id: n,
                                        name: S.default.Messages.CATEGORY_FAVORITE
                                    })
                                } else if (n === p.EmojiCategories.CUSTOM) {
                                    let e = u;
                                    !a && (e = u.filter(e => e.type === p.EmojiCategoryTypes.GUILD && e.guild.id === i)), t.push(...e)
                                } else if (J(e)) t.push({
                                    type: p.EmojiCategoryTypes.UNICODE,
                                    id: n,
                                    name: n
                                });
                                return t
                            }, [])
                        }, [A, t, i, e, T.length, h, _, s.length, d.length, a, j]);
                    return M
                },
                h = e => {
                    let t = (null == e ? void 0 : e.getGuildId()) != null;
                    _.default.track(O.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_page: t ? O.AnalyticsPages.GUILD_CHANNEL : O.AnalyticsPages.DM_CHANNEL,
                        location_section: null != e ? O.AnalyticsSections.EMOJI_PICKER_POPOUT : O.AnalyticsSections.CUSTOM_STATUS_MODAL
                    })
                },
                M = (e, t) => {
                    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_STARTED, {
                        search_type: null != t && t === y.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                        location: e
                    })
                },
                R = (e, t, i, n, r) => {
                    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: null != r && r === y.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                        total_results: e,
                        num_results_locked: t,
                        query: n,
                        location: i
                    })
                },
                N = (e, t, i, n) => {
                    var r;
                    let o = null !== (r = e.uniqueName) && void 0 !== r ? r : e.name;
                    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        search_type: null != n && n === y.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                        location: t,
                        expression_guild_id: U(e),
                        expression_pack_id: e.type === s.EmojiTypes.PACK ? e.packId : void 0,
                        emoji_id: e.id,
                        emoji_name: o,
                        is_custom: null != e.id,
                        is_animated: e.animated,
                        query: i
                    })
                },
                P = (e, t) => {
                    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_EMPTY, {
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
                        newlyAddedHighlight: r
                    } = e;
                    a.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                        expression_section: null == i ? void 0 : i.toString(),
                        newly_added_highlight: r,
                        emoji_id: t.id,
                        emoji_name: t.name,
                        emoji_animated: t.animated,
                        emoji_position: n
                    })
                },
                F = e => {
                    var t;
                    let i, {
                        emoji: n,
                        location: r,
                        pickerIntention: o,
                        category: u,
                        subCategory: l = p.EmojiSubCategory.NONE,
                        position: E,
                        newlyAddedHighlight: d,
                        isBurstReaction: c
                    } = e;
                    switch (o) {
                        case y.EmojiIntention.REACTION:
                            i = c ? j.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : j.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            break;
                        case y.EmojiIntention.STATUS:
                            i = j.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                            break;
                        default:
                            i = j.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
                    }
                    let m = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
                    a.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: i,
                        location: r,
                        expression_id: n.id,
                        expression_name: m,
                        expression_guild_id: U(n),
                        expression_pack_id: n.type === s.EmojiTypes.PACK ? n.packId : void 0,
                        is_custom: null != n.id,
                        is_animated: n.animated,
                        expression_picker_section: u,
                        expression_section: null == l ? void 0 : l.toString(),
                        emoji_position: E,
                        newly_added_highlight: d,
                        is_burst: c
                    })
                },
                D = e => {
                    var t;
                    let {
                        emoji: i,
                        location: n
                    } = e, r = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
                    a.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: n,
                        expression_type: T.ExpressionPickerViewType.EMOJI,
                        expression_id: i.id,
                        expression_name: r,
                        expression_guild_id: U(i),
                        expression_pack_id: i.type === s.EmojiTypes.PACK ? i.packId : void 0,
                        is_custom: null != i.id,
                        is_animated: i.animated
                    })
                };

            function U(e) {
                return e.type !== s.EmojiTypes.PACK ? e.guildId : void 0
            }
            let L = (e, t, i) => {
                    switch (e.type) {
                        case p.EmojiCategoryTypes.GUILD:
                            if (null != t) return t.toString();
                            return "";
                        case p.EmojiCategoryTypes.PACK:
                            if (null != i) return i.name;
                            return e.id;
                        default:
                            return e.id
                    }
                },
                k = (e, t, i) => {
                    switch (e) {
                        case p.EmojiCategories.TOP_GUILD_EMOJI:
                            return S.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: t
                            });
                        case p.EmojiCategories.RECENT:
                            return S.default.Messages.EMOJI_CATEGORY_RECENT;
                        case p.EmojiCategories.FAVORITES:
                            return S.default.Messages.CATEGORY_FAVORITE;
                        case p.EmojiCategories.ACTIVITY:
                            return S.default.Messages.EMOJI_CATEGORY_ACTIVITY;
                        case p.EmojiCategories.FLAGS:
                            return S.default.Messages.EMOJI_CATEGORY_FLAGS;
                        case p.EmojiCategories.FOOD:
                            return S.default.Messages.EMOJI_CATEGORY_FOOD;
                        case p.EmojiCategories.NATURE:
                            return S.default.Messages.EMOJI_CATEGORY_NATURE;
                        case p.EmojiCategories.OBJECTS:
                            return S.default.Messages.EMOJI_CATEGORY_OBJECTS;
                        case p.EmojiCategories.PEOPLE:
                            return S.default.Messages.EMOJI_CATEGORY_PEOPLE;
                        case p.EmojiCategories.SYMBOLS:
                            return S.default.Messages.EMOJI_CATEGORY_SYMBOLS;
                        case p.EmojiCategories.TRAVEL:
                            return S.default.Messages.EMOJI_CATEGORY_TRAVEL;
                        case p.EmojiCategories.PREMIUM_UPSELL:
                            return S.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                        default:
                            return null != i ? S.default.Messages.EMOJI_CATEGORY_PACK.format({
                                packName: i
                            }) : null != t ? t : e
                    }
                },
                J = e => e !== y.EmojiIntention.COMMUNITY_CONTENT_ONLY;

            function G(e, t, i) {
                let {
                    viewAndUseEnabled: a
                } = (0, l.useInventoryGuildPacksUserExperiment)({
                    autoTrackExposure: !1
                });
                n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let s = (0, y.isExternalEmojiAllowedForIntention)(i);
                return (0, r.useStateFromStores)([o.default], () => {
                    let n = e.replace(/^:/, "").replace(/:$/, "");
                    return "" === n ? null : o.default.searchWithoutFetchingLatest({
                        channel: t,
                        query: n,
                        count: 0,
                        intention: i,
                        includeExternalGuilds: s,
                        canViewAndUsePackEmoji: a
                    })
                }, [t, i, e, s, a], r.statesWillNeverBeEqual)
            }

            function x(e) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, r.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
            }

            function b(e) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, r.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
            }

            function w(e, t) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, r.useStateFromStores)([o.default], () => null != t && o.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
            }

            function Y(e) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, r.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
            }

            function K(e) {
                let t = n.useCallback(() => {
                    (0, g.default)(e)
                }, [e]);
                return n.useEffect(() => {
                    e.intention === y.EmojiIntention.REACTION && t()
                }, []), {
                    trackOnPickerOpen: t
                }
            }

            function W(e, t, i) {
                if (null == i) return p.EmojiSubCategory.NONE;
                let n = e.map(e => {
                        var t, i;
                        return null !== (i = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== i ? i : e.name
                    }),
                    r = t.map(e => e.id);
                return n.includes(i) ? p.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(i) ? p.EmojiSubCategory.NEWLY_ADDED_EMOJI : p.EmojiSubCategory.NONE
            }

            function q(e) {
                let t = new Set,
                    i = e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)));
                return i
            }

            function H(e, t) {
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
                r = i("385976"),
                a = i("166465"),
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
                    analyticsObject: C
                } = e, p = s.default.getChannel(u.default.getChannelId()), O = null == p ? void 0 : p.getGuildId(), y = r.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), T = null != p ? r.default.getDisambiguatedEmojiContext(p.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], j = y.slice(0, r.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), S = null != O ? r.default.getGuildEmoji(O) : [], A = a.default.getPacksForUser().map(e => e.content.emojis).reduce((e, t) => e.concat(t), []), h = null !== (t = r.default.getDisambiguatedEmojiContext(null == p ? void 0 : p.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}, M = Object.values(h).reduce((e, t) => e += t.length, 0), {
                    topEmojis: R,
                    newlyAddedEmojis: N
                } = (0, d.getTopAndNewlyAddedEmojis)({
                    guildId: null == p ? void 0 : p.getGuildId(),
                    pickerIntention: i
                }), {
                    visibleTopEmojis: P,
                    visibleNewlyAddedEmojis: v
                } = (0, E.getEmojiHotrail)({
                    topEmojis: R,
                    newlyAddedEmojis: N,
                    rowSize: g
                }), F = o.default.remainingBurstCurrency;
                n.default.trackWithMetadata(i === m.EmojiIntention.REACTION ? c.AnalyticEvents.REACTION_PICKER_OPENED : c.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                    width: f,
                    tab: _.ExpressionPickerViewType.EMOJI,
                    badged: !1,
                    num_expressions_favorites: T.length,
                    num_animated_expressions_favorites: T.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_favorites: T.filter(l.default.isCustomEmoji).length,
                    num_standard_expressions_favorites: T.filter(e => null == e.id).length,
                    num_expressions_frecent: j.length,
                    num_animated_expressions_frecent: j.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_frecent: j.filter(l.default.isCustomEmoji).length,
                    num_standard_expressions_frecent: j.filter(e => null == e.id).length,
                    num_current_guild_expressions: S.length,
                    num_current_pack_expressions: A.length,
                    num_custom_expressions_total: M,
                    num_expressions_top_server: P.length,
                    num_animated_expressions_top_server: P.filter(e => e.animated).length,
                    num_expressions_newly_added: v.length,
                    num_animated_expressions_newly_added: v.filter(e => e.animated).length,
                    ...i === m.EmojiIntention.REACTION && {
                        is_burst: I,
                        burst_reaction_balance: F
                    },
                    ...null != C && {
                        location_object: C
                    }
                })
            }
        },
        255214: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getEmojiHotrail: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var n = i("884691"),
                r = i("115279");

            function a(e) {
                let {
                    topEmojis: t,
                    newlyAddedEmojis: i,
                    rowSize: n = r.EMOJI_ROW_SIZE
                } = e, a = t.slice(0, n - i.length);
                return {
                    visibleTopEmojis: a,
                    visibleNewlyAddedEmojis: i,
                    allEmojis: a.concat(i)
                }
            }

            function o(e) {
                return n.useMemo(() => a(e), [e])
            }
        },
        352046: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getTopAndNewlyAddedEmojis: function() {
                    return s
                },
                default: function() {
                    return u
                }
            });
            var n = i("65597"),
                r = i("385976"),
                a = i("958706");
            let o = [];

            function s(e) {
                let {
                    emojiStoreInstance: t = r.default,
                    guildId: i,
                    pickerIntention: n
                } = e;
                return {
                    topEmojis: n !== a.EmojiIntention.REACTION ? t.getTopEmoji(i) : o,
                    newlyAddedEmojis: n !== a.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(i) : o
                }
            }

            function u(e, t) {
                return (0, n.useStateFromStoresObject)([r.default], () => s({
                    emojiStoreInstance: r.default,
                    guildId: e,
                    pickerIntention: t
                }), [e, t])
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
                r = i("913144"),
                a = i("49111");

            function o(e) {
                r.default.dispatch({
                    type: "TOP_EMOJIS_FETCH",
                    guildId: e
                }), n.default.get({
                    url: a.Endpoints.TOP_EMOJIS_FOR_GUILD(e),
                    oldFormErrors: !0
                }).then(t => r.default.dispatch({
                    type: "TOP_EMOJIS_FETCH_SUCCESS",
                    guildId: e,
                    topEmojisMetadata: t.body.items.map(e => ({
                        emojiId: e.emoji_id,
                        rank: e.emoji_rank
                    })).sort((e, t) => e.rank - t.rank)
                }), () => r.default.dispatch({
                    type: "TOP_EMOJIS_FETCH_FAILURE",
                    guildId: e
                }))
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
                }), null != e && null != t && r.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
                    guildId: e,
                    emojiId: t
                })
            }

            function u(e, t) {
                null != e && null != t && r.default.dispatch({
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
                r = i("385976"),
                a = i("26430"),
                o = i("305781");

            function s(e) {
                if (null == e) return;
                let t = n.default.getCurrentUser();
                if (null == t) return;
                let i = r.default.getTopEmojisMetadata(e);
                if (null != i) {
                    let {
                        topEmojisTTL: e
                    } = i;
                    if (null == e || Date.now() < e) return
                }!a.default.getIsFetching(e) && (0, o.fetchTopEmojis)(e)
            }
        }
    }
]);
//# sourceMappingURL=34426.9741202174efb07c7f25.js.map