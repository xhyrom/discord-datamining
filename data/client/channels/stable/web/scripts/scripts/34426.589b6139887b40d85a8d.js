(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34426"], {
        788506: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useEmojiCategories: function() {
                    return h
                },
                trackPremiumSettingsPaneOpened: function() {
                    return M
                },
                trackEmojiSearchStart: function() {
                    return R
                },
                trackEmojiSearchResultsViewed: function() {
                    return N
                },
                trackEmojiSearchSelect: function() {
                    return P
                },
                trackEmojiSearchEmpty: function() {
                    return v
                },
                trackEmojiFocus: function() {
                    return F
                },
                trackEmojiSelect: function() {
                    return U
                },
                trackEmojiFavorited: function() {
                    return D
                },
                getAriaIdForEmojiCategory: function() {
                    return G
                },
                getStringForEmojiCategory: function() {
                    return k
                },
                allowUnicodeEmojiForIntention: function() {
                    return J
                },
                useEmojiSearchResults: function() {
                    return x
                },
                useFrequentlyUsedEmojis: function() {
                    return b
                },
                useFavoriteEmojis: function() {
                    return w
                },
                useIsFavoriteEmoji: function() {
                    return Y
                },
                useEmojiInPriorityOrder: function() {
                    return K
                },
                useTrackEmojiPickerOpened: function() {
                    return W
                },
                getEmojiSubCategory: function() {
                    return q
                },
                dedupeUnicodeEmojis: function() {
                    return H
                },
                getSearchPlaceholder: function() {
                    return V
                }
            }), i("843762"), i("424973"), i("222007"), i("808653"), i("794252"), i("781738");
            var n = i("884691");
            i("375128");
            var r = i("506838"),
                a = i("446674"),
                o = i("716241"),
                s = i("385976"),
                u = i("858619"),
                l = i("630400"),
                E = i("252931"),
                d = i("166465"),
                c = i("872173"),
                m = i("305961"),
                _ = i("677099"),
                f = i("599110"),
                I = i("402671"),
                g = i("577426"),
                p = i("255214"),
                C = i("352046"),
                O = i("115279"),
                y = i("49111"),
                T = i("958706"),
                j = i("13030"),
                S = i("646718"),
                A = i("782340");
            let h = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
                    (0, l.maybeFetchTopEmojisByGuild)(i);
                    let r = (0, T.isExternalEmojiAllowedForIntention)(e),
                        o = b(i),
                        u = w(i),
                        c = (0, a.useStateFromStoresArray)([d.default], () => d.default.getSortedPackIds(), []),
                        {
                            topEmojis: f,
                            newlyAddedEmojis: g
                        } = (0, C.default)(i, e),
                        {
                            allEmojis: y
                        } = (0, p.default)({
                            topEmojis: f,
                            newlyAddedEmojis: g
                        }),
                        {
                            viewAndUseEnabled: j
                        } = (0, E.useInventoryGuildPacksUserExperiment)({
                            autoTrackExposure: !1
                        }),
                        S = (0, a.useStateFromStores)([s.default], () => s.default.getDisambiguatedEmojiContext(i), [i]),
                        h = (0, a.useStateFromStores)([m.default], () => {
                            var e;
                            return null === (e = m.default.getGuild(i)) || void 0 === e ? void 0 : e.name
                        }),
                        M = n.useMemo(() => {
                            let n = S.getGroupedCustomEmoji(),
                                a = _.default.getFlattenedGuildIds(),
                                l = [],
                                E = (r, a) => {
                                    for (let o of r) {
                                        let r;
                                        if (a === O.EmojiCategoryTypes.PACK ? r = d.default.getPackByPackId({
                                                packId: o
                                            }) : a === O.EmojiCategoryTypes.GUILD && (r = m.default.getGuild(o)), null == r) continue;
                                        let s = null == n ? void 0 : n[r.id];
                                        if (null == s || 0 === s.length || null != t && s.every(i => I.default.isEmojiFiltered({
                                                emoji: i,
                                                channel: t,
                                                intention: e,
                                                canViewAndUsePackEmoji: j
                                            }))) continue;
                                        let u = null;
                                        if (a === O.EmojiCategoryTypes.PACK) {
                                            let e = r;
                                            u = {
                                                type: O.EmojiCategoryTypes.PACK,
                                                pack: e,
                                                id: e.id
                                            }
                                        } else a === O.EmojiCategoryTypes.GUILD && (u = {
                                            type: O.EmojiCategoryTypes.GUILD,
                                            guild: r
                                        });
                                        null != u && (r.id === i ? l.unshift(u) : l.push(u))
                                    }
                                };
                            return E(c, O.EmojiCategoryTypes.PACK), E(a, O.EmojiCategoryTypes.GUILD), s.default.categories.reduce((t, n) => {
                                if (n === O.EmojiCategories.TOP_GUILD_EMOJI) {
                                    if (0 === y.length) return t;
                                    t.push({
                                        type: O.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                        id: n,
                                        name: A.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                            guildName: h
                                        })
                                    })
                                } else if (n === O.EmojiCategories.RECENT) {
                                    if (0 === o.length) return t;
                                    t.push({
                                        type: O.EmojiCategoryTypes.RECENT,
                                        id: n,
                                        name: A.default.Messages.EMOJI_CATEGORY_RECENT
                                    })
                                } else if (n === O.EmojiCategories.FAVORITES) {
                                    if (0 === u.length) return t;
                                    t.push({
                                        type: O.EmojiCategoryTypes.FAVORITES,
                                        id: n,
                                        name: A.default.Messages.CATEGORY_FAVORITE
                                    })
                                } else if (n === O.EmojiCategories.CUSTOM) {
                                    let e = l;
                                    !r && (e = l.filter(e => e.type === O.EmojiCategoryTypes.GUILD && e.guild.id === i)), t.push(...e)
                                } else if (J(e)) t.push({
                                    type: O.EmojiCategoryTypes.UNICODE,
                                    id: n,
                                    name: n
                                });
                                return t
                            }, [])
                        }, [S, t, i, e, y.length, h, c, o.length, u.length, r, j]);
                    return M
                },
                M = e => {
                    let t = (null == e ? void 0 : e.getGuildId()) != null;
                    f.default.track(y.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_page: t ? y.AnalyticsPages.GUILD_CHANNEL : y.AnalyticsPages.DM_CHANNEL,
                        location_section: null != e ? y.AnalyticsSections.EMOJI_PICKER_POPOUT : y.AnalyticsSections.CUSTOM_STATUS_MODAL
                    })
                },
                R = (e, t) => {
                    o.default.trackWithMetadata(y.AnalyticEvents.SEARCH_STARTED, {
                        search_type: null != t && t === T.EmojiIntention.REACTION ? y.SearchTypes.EMOJI_REACTION : y.SearchTypes.EMOJI,
                        location: e
                    })
                },
                N = (e, t, i, n, r) => {
                    o.default.trackWithMetadata(y.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: null != r && r === T.EmojiIntention.REACTION ? y.SearchTypes.EMOJI_REACTION : y.SearchTypes.EMOJI,
                        total_results: e,
                        num_results_locked: t,
                        query: n,
                        location: i
                    })
                },
                P = (e, t, i, n, a) => {
                    var s;
                    let l = null !== (s = e.uniqueName) && void 0 !== s ? s : e.name,
                        E = (0, r.match)(n).with(T.EmojiIntention.REACTION, () => y.SearchTypes.EMOJI_REACTION).with(T.EmojiIntention.AUTO_SUGGESTION, () => y.SearchTypes.EMOJI_AUTO_SUGGESTION).otherwise(() => y.SearchTypes.EMOJI);
                    o.default.trackWithMetadata(y.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        search_type: E,
                        location: t,
                        expression_guild_id: L(e),
                        expression_pack_id: e.type === u.EmojiTypes.PACK ? e.packId : void 0,
                        emoji_id: e.id,
                        emoji_name: l,
                        is_custom: null != e.id,
                        is_animated: e.animated,
                        query: i,
                        index_num: a
                    })
                },
                v = (e, t) => {
                    o.default.trackWithMetadata(y.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        search_type: y.SearchTypes.EMOJI,
                        query: t,
                        location: e
                    })
                },
                F = e => {
                    let {
                        emoji: t,
                        subCategory: i,
                        position: n,
                        newlyAddedHighlight: r
                    } = e;
                    o.default.trackWithMetadata(y.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                        expression_section: null == i ? void 0 : i.toString(),
                        newly_added_highlight: r,
                        emoji_id: t.id,
                        emoji_name: t.name,
                        emoji_animated: t.animated,
                        emoji_position: n
                    })
                },
                U = e => {
                    var t;
                    let i, {
                        emoji: n,
                        location: r,
                        pickerIntention: a,
                        category: s,
                        subCategory: l = O.EmojiSubCategory.NONE,
                        position: E,
                        newlyAddedHighlight: d,
                        isBurstReaction: c
                    } = e;
                    switch (a) {
                        case T.EmojiIntention.REACTION:
                            i = c ? S.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : S.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            break;
                        case T.EmojiIntention.STATUS:
                            i = S.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                            break;
                        default:
                            i = S.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
                    }
                    let m = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
                    o.default.trackWithMetadata(y.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: i,
                        location: r,
                        expression_id: n.id,
                        expression_name: m,
                        expression_guild_id: L(n),
                        expression_pack_id: n.type === u.EmojiTypes.PACK ? n.packId : void 0,
                        is_custom: null != n.id,
                        is_animated: n.animated,
                        expression_picker_section: s,
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
                    o.default.trackWithMetadata(y.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: n,
                        expression_type: j.ExpressionPickerViewType.EMOJI,
                        expression_id: i.id,
                        expression_name: r,
                        expression_guild_id: L(i),
                        expression_pack_id: i.type === u.EmojiTypes.PACK ? i.packId : void 0,
                        is_custom: null != i.id,
                        is_animated: i.animated
                    })
                };

            function L(e) {
                return e.type !== u.EmojiTypes.PACK ? e.guildId : void 0
            }
            let G = (e, t, i) => {
                    switch (e.type) {
                        case O.EmojiCategoryTypes.GUILD:
                            if (null != t) return t.toString();
                            return "";
                        case O.EmojiCategoryTypes.PACK:
                            if (null != i) return i.name;
                            return e.id;
                        default:
                            return e.id
                    }
                },
                k = (e, t, i) => {
                    switch (e) {
                        case O.EmojiCategories.TOP_GUILD_EMOJI:
                            return A.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: t
                            });
                        case O.EmojiCategories.RECENT:
                            return A.default.Messages.EMOJI_CATEGORY_RECENT;
                        case O.EmojiCategories.FAVORITES:
                            return A.default.Messages.CATEGORY_FAVORITE;
                        case O.EmojiCategories.ACTIVITY:
                            return A.default.Messages.EMOJI_CATEGORY_ACTIVITY;
                        case O.EmojiCategories.FLAGS:
                            return A.default.Messages.EMOJI_CATEGORY_FLAGS;
                        case O.EmojiCategories.FOOD:
                            return A.default.Messages.EMOJI_CATEGORY_FOOD;
                        case O.EmojiCategories.NATURE:
                            return A.default.Messages.EMOJI_CATEGORY_NATURE;
                        case O.EmojiCategories.OBJECTS:
                            return A.default.Messages.EMOJI_CATEGORY_OBJECTS;
                        case O.EmojiCategories.PEOPLE:
                            return A.default.Messages.EMOJI_CATEGORY_PEOPLE;
                        case O.EmojiCategories.SYMBOLS:
                            return A.default.Messages.EMOJI_CATEGORY_SYMBOLS;
                        case O.EmojiCategories.TRAVEL:
                            return A.default.Messages.EMOJI_CATEGORY_TRAVEL;
                        case O.EmojiCategories.PREMIUM_UPSELL:
                            return A.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                        default:
                            return null != i ? A.default.Messages.EMOJI_CATEGORY_PACK.format({
                                packName: i
                            }) : null != t ? t : e
                    }
                },
                J = e => e !== T.EmojiIntention.COMMUNITY_CONTENT_ONLY;

            function x(e, t, i) {
                let {
                    viewAndUseEnabled: r
                } = (0, E.useInventoryGuildPacksUserExperiment)({
                    autoTrackExposure: !1
                });
                n.useEffect(() => {
                    c.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let o = (0, T.isExternalEmojiAllowedForIntention)(i);
                return (0, a.useStateFromStores)([s.default], () => {
                    let n = e.replace(/^:/, "").replace(/:$/, "");
                    return "" === n ? null : s.default.searchWithoutFetchingLatest({
                        channel: t,
                        query: n,
                        count: 0,
                        intention: i,
                        includeExternalGuilds: o,
                        canViewAndUsePackEmoji: r
                    })
                }, [t, i, e, o, r], a.statesWillNeverBeEqual)
            }

            function b(e) {
                return n.useEffect(() => {
                    c.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
            }

            function w(e) {
                return n.useEffect(() => {
                    c.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
            }

            function Y(e, t) {
                return n.useEffect(() => {
                    c.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStores)([s.default], () => null != t && s.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
            }

            function K(e) {
                return n.useEffect(() => {
                    c.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
            }

            function W(e) {
                let t = n.useCallback(() => {
                    (0, g.default)(e)
                }, [e]);
                return n.useEffect(() => {
                    e.intention === T.EmojiIntention.REACTION && t()
                }, []), {
                    trackOnPickerOpen: t
                }
            }

            function q(e, t, i) {
                if (null == i) return O.EmojiSubCategory.NONE;
                let n = e.map(e => {
                        var t, i;
                        return null !== (i = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== i ? i : e.name
                    }),
                    r = t.map(e => e.id);
                return n.includes(i) ? O.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(i) ? O.EmojiSubCategory.NEWLY_ADDED_EMOJI : O.EmojiSubCategory.NONE
            }

            function H(e) {
                let t = new Set,
                    i = e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)));
                return i
            }

            function V(e, t) {
                return e === T.EmojiIntention.REACTION ? t ? A.default.Messages.SEARCH_FOR_SUPER_REACTION : A.default.Messages.SEARCH_FOR_REACTION : A.default.Messages.SEARCH_FOR_EMOJI
            }
        },
        577426: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            }), i("808653");
            var n = i("716241"),
                r = i("385976"),
                a = i("166465"),
                o = i("42203"),
                s = i("18494"),
                u = i("402671"),
                l = i("255214"),
                E = i("352046"),
                d = i("49111"),
                c = i("958706"),
                m = i("13030");

            function _(e) {
                var t;
                let {
                    intention: i,
                    containerWidth: _,
                    rowSize: f,
                    isBurstReaction: I,
                    analyticsObject: g
                } = e, p = o.default.getChannel(s.default.getChannelId()), C = null == p ? void 0 : p.getGuildId(), O = r.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), y = null != p ? r.default.getDisambiguatedEmojiContext(p.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], T = O.slice(0, r.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), j = null != C ? r.default.getGuildEmoji(C) : [], S = a.default.getPacksForUser().map(e => e.content.emojis).reduce((e, t) => e.concat(t), []), A = null !== (t = r.default.getDisambiguatedEmojiContext(null == p ? void 0 : p.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}, h = Object.values(A).reduce((e, t) => e += t.length, 0), {
                    topEmojis: M,
                    newlyAddedEmojis: R
                } = (0, E.getTopAndNewlyAddedEmojis)({
                    guildId: null == p ? void 0 : p.getGuildId(),
                    pickerIntention: i
                }), {
                    visibleTopEmojis: N,
                    visibleNewlyAddedEmojis: P
                } = (0, l.getEmojiHotrail)({
                    topEmojis: M,
                    newlyAddedEmojis: R,
                    rowSize: f
                });
                n.default.trackWithMetadata(i === c.EmojiIntention.REACTION ? d.AnalyticEvents.REACTION_PICKER_OPENED : d.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                    width: _,
                    tab: m.ExpressionPickerViewType.EMOJI,
                    badged: !1,
                    num_expressions_favorites: y.length,
                    num_animated_expressions_favorites: y.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_favorites: y.filter(u.default.isCustomEmoji).length,
                    num_standard_expressions_favorites: y.filter(e => null == e.id).length,
                    num_expressions_frecent: T.length,
                    num_animated_expressions_frecent: T.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_frecent: T.filter(u.default.isCustomEmoji).length,
                    num_standard_expressions_frecent: T.filter(e => null == e.id).length,
                    num_current_guild_expressions: j.length,
                    num_current_pack_expressions: S.length,
                    num_custom_expressions_total: h,
                    num_expressions_top_server: N.length,
                    num_animated_expressions_top_server: N.filter(e => e.animated).length,
                    num_expressions_newly_added: P.length,
                    num_animated_expressions_newly_added: P.filter(e => e.animated).length,
                    ...i === c.EmojiIntention.REACTION && {
                        is_burst: I
                    },
                    ...null != g && {
                        location_object: g
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
//# sourceMappingURL=34426.589b6139887b40d85a8d.js.map