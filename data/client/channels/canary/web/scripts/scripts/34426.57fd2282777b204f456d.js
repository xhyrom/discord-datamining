(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34426"], {
        788506: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useEmojiCategories: function() {
                    return y
                },
                trackPremiumSettingsPaneOpened: function() {
                    return j
                },
                trackEmojiSearchStart: function() {
                    return h
                },
                trackEmojiSearchResultsViewed: function() {
                    return A
                },
                trackEmojiSearchSelect: function() {
                    return M
                },
                trackEmojiSearchEmpty: function() {
                    return R
                },
                trackEmojiFocus: function() {
                    return N
                },
                trackEmojiSelect: function() {
                    return v
                },
                trackEmojiFavorited: function() {
                    return F
                },
                getAriaIdForEmojiCategory: function() {
                    return P
                },
                getStringForEmojiCategory: function() {
                    return D
                },
                allowUnicodeEmojiForIntention: function() {
                    return U
                },
                useEmojiSearchResults: function() {
                    return L
                },
                useFrequentlyUsedEmojis: function() {
                    return G
                },
                useFavoriteEmojis: function() {
                    return J
                },
                useIsFavoriteEmoji: function() {
                    return x
                },
                useEmojiInPriorityOrder: function() {
                    return k
                },
                useTrackEmojiPickerOpened: function() {
                    return b
                },
                getEmojiSubCategory: function() {
                    return w
                },
                dedupeUnicodeEmojis: function() {
                    return Y
                },
                getSearchPlaceholder: function() {
                    return W
                }
            }), i("843762"), i("424973"), i("222007"), i("808653"), i("794252"), i("781738");
            var n = i("884691");
            i("375128");
            var r = i("506838"),
                a = i("446674"),
                o = i("716241"),
                u = i("385976"),
                s = i("630400"),
                l = i("872173"),
                E = i("305961"),
                d = i("677099"),
                c = i("599110"),
                m = i("402671"),
                _ = i("577426"),
                f = i("255214"),
                I = i("352046"),
                g = i("115279"),
                O = i("49111"),
                C = i("958706"),
                T = i("13030"),
                p = i("646718"),
                S = i("782340");
            let y = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
                    (0, s.maybeFetchTopEmojisByGuild)(i);
                    let r = (0, C.isExternalEmojiAllowedForIntention)(e),
                        o = G(i),
                        l = J(i),
                        {
                            topEmojis: c,
                            newlyAddedEmojis: _
                        } = (0, I.default)(i, e),
                        {
                            allEmojis: O
                        } = (0, f.default)({
                            topEmojis: c,
                            newlyAddedEmojis: _
                        }),
                        T = (0, a.useStateFromStores)([u.default], () => u.default.getDisambiguatedEmojiContext(i), [i]),
                        p = (0, a.useStateFromStores)([E.default], () => {
                            var e;
                            return null === (e = E.default.getGuild(i)) || void 0 === e ? void 0 : e.name
                        }),
                        y = n.useMemo(() => {
                            let n = T.getGroupedCustomEmoji(),
                                a = d.default.getFlattenedGuildIds(),
                                s = [];
                            return ((r, a) => {
                                for (let o of r) {
                                    let r;
                                    if (a === g.EmojiCategoryTypes.GUILD && (r = E.default.getGuild(o)), null == r) continue;
                                    let u = null == n ? void 0 : n[r.id];
                                    if (null == u || 0 === u.length || null != t && u.every(i => m.default.isEmojiFiltered({
                                            emoji: i,
                                            channel: t,
                                            intention: e
                                        }))) continue;
                                    let l = null;
                                    a === g.EmojiCategoryTypes.GUILD && (l = {
                                        type: g.EmojiCategoryTypes.GUILD,
                                        guild: r
                                    }), null != l && (r.id === i ? s.unshift(l) : s.push(l))
                                }
                            })(a, g.EmojiCategoryTypes.GUILD), u.default.categories.reduce((t, n) => {
                                if (n === g.EmojiCategories.TOP_GUILD_EMOJI) {
                                    if (0 === O.length) return t;
                                    t.push({
                                        type: g.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                        id: n,
                                        name: S.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                            guildName: p
                                        })
                                    })
                                } else if (n === g.EmojiCategories.RECENT) {
                                    if (0 === o.length) return t;
                                    t.push({
                                        type: g.EmojiCategoryTypes.RECENT,
                                        id: n,
                                        name: S.default.Messages.EMOJI_CATEGORY_RECENT
                                    })
                                } else if (n === g.EmojiCategories.FAVORITES) {
                                    if (0 === l.length) return t;
                                    t.push({
                                        type: g.EmojiCategoryTypes.FAVORITES,
                                        id: n,
                                        name: S.default.Messages.CATEGORY_FAVORITE
                                    })
                                } else if (n === g.EmojiCategories.CUSTOM) {
                                    let e = s;
                                    !r && (e = s.filter(e => e.type === g.EmojiCategoryTypes.GUILD && e.guild.id === i)), t.push(...e)
                                } else if (U(e)) t.push({
                                    type: g.EmojiCategoryTypes.UNICODE,
                                    id: n,
                                    name: n
                                });
                                return t
                            }, [])
                        }, [T, t, i, e, O.length, p, o.length, l.length, r]);
                    return y
                },
                j = e => {
                    let t = (null == e ? void 0 : e.getGuildId()) != null;
                    c.default.track(O.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_page: t ? O.AnalyticsPages.GUILD_CHANNEL : O.AnalyticsPages.DM_CHANNEL,
                        location_section: null != e ? O.AnalyticsSections.EMOJI_PICKER_POPOUT : O.AnalyticsSections.CUSTOM_STATUS_MODAL
                    })
                },
                h = (e, t) => {
                    o.default.trackWithMetadata(O.AnalyticEvents.SEARCH_STARTED, {
                        search_type: null != t && t === C.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                        location: e
                    })
                },
                A = (e, t, i, n, r) => {
                    o.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: null != r && r === C.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                        total_results: e,
                        num_results_locked: t,
                        query: n,
                        location: i
                    })
                },
                M = (e, t, i, n, a) => {
                    var u;
                    let s = null !== (u = e.uniqueName) && void 0 !== u ? u : e.name,
                        l = (0, r.match)(n).with(C.EmojiIntention.REACTION, () => O.SearchTypes.EMOJI_REACTION).with(C.EmojiIntention.AUTO_SUGGESTION, () => O.SearchTypes.EMOJI_AUTO_SUGGESTION).otherwise(() => O.SearchTypes.EMOJI);
                    o.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        search_type: l,
                        location: t,
                        expression_guild_id: e.guildId,
                        emoji_id: e.id,
                        emoji_name: s,
                        is_custom: null != e.id,
                        is_animated: e.animated,
                        query: i,
                        index_num: a
                    })
                },
                R = (e, t) => {
                    o.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        search_type: O.SearchTypes.EMOJI,
                        query: t,
                        location: e
                    })
                },
                N = e => {
                    let {
                        emoji: t,
                        subCategory: i,
                        position: n,
                        newlyAddedHighlight: r
                    } = e;
                    o.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                        expression_section: null == i ? void 0 : i.toString(),
                        newly_added_highlight: r,
                        emoji_id: t.id,
                        emoji_name: t.name,
                        emoji_animated: t.animated,
                        emoji_position: n
                    })
                },
                v = e => {
                    var t;
                    let i, {
                        emoji: n,
                        location: r,
                        pickerIntention: a,
                        category: u,
                        subCategory: s = g.EmojiSubCategory.NONE,
                        position: l,
                        newlyAddedHighlight: E,
                        isBurstReaction: d
                    } = e;
                    switch (a) {
                        case C.EmojiIntention.REACTION:
                            i = d ? p.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : p.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            break;
                        case C.EmojiIntention.STATUS:
                            i = p.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                            break;
                        default:
                            i = p.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
                    }
                    let c = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
                    o.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: i,
                        location: r,
                        expression_id: n.id,
                        expression_name: c,
                        expression_guild_id: n.guildId,
                        is_custom: null != n.id,
                        is_animated: n.animated,
                        expression_picker_section: u,
                        expression_section: null == s ? void 0 : s.toString(),
                        emoji_position: l,
                        newly_added_highlight: E,
                        is_burst: d
                    })
                },
                F = e => {
                    var t;
                    let {
                        emoji: i,
                        location: n
                    } = e, r = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
                    o.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: n,
                        expression_type: T.ExpressionPickerViewType.EMOJI,
                        expression_id: i.id,
                        expression_name: r,
                        expression_guild_id: i.guildId,
                        is_custom: null != i.id,
                        is_animated: i.animated
                    })
                },
                P = (e, t) => {
                    if (e.type === g.EmojiCategoryTypes.GUILD) return null != t ? t.toString() : "";
                    return e.id
                },
                D = (e, t) => {
                    switch (e) {
                        case g.EmojiCategories.TOP_GUILD_EMOJI:
                            return S.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: t
                            });
                        case g.EmojiCategories.RECENT:
                            return S.default.Messages.EMOJI_CATEGORY_RECENT;
                        case g.EmojiCategories.FAVORITES:
                            return S.default.Messages.CATEGORY_FAVORITE;
                        case g.EmojiCategories.ACTIVITY:
                            return S.default.Messages.EMOJI_CATEGORY_ACTIVITY;
                        case g.EmojiCategories.FLAGS:
                            return S.default.Messages.EMOJI_CATEGORY_FLAGS;
                        case g.EmojiCategories.FOOD:
                            return S.default.Messages.EMOJI_CATEGORY_FOOD;
                        case g.EmojiCategories.NATURE:
                            return S.default.Messages.EMOJI_CATEGORY_NATURE;
                        case g.EmojiCategories.OBJECTS:
                            return S.default.Messages.EMOJI_CATEGORY_OBJECTS;
                        case g.EmojiCategories.PEOPLE:
                            return S.default.Messages.EMOJI_CATEGORY_PEOPLE;
                        case g.EmojiCategories.SYMBOLS:
                            return S.default.Messages.EMOJI_CATEGORY_SYMBOLS;
                        case g.EmojiCategories.TRAVEL:
                            return S.default.Messages.EMOJI_CATEGORY_TRAVEL;
                        case g.EmojiCategories.PREMIUM_UPSELL:
                            return S.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                        default:
                            return null != t ? t : e
                    }
                },
                U = e => e !== C.EmojiIntention.COMMUNITY_CONTENT_ONLY;

            function L(e, t, i) {
                n.useEffect(() => {
                    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let r = (0, C.isExternalEmojiAllowedForIntention)(i);
                return (0, a.useStateFromStores)([u.default], () => {
                    let n = e.replace(/^:/, "").replace(/:$/, "");
                    return "" === n ? null : u.default.searchWithoutFetchingLatest({
                        channel: t,
                        query: n,
                        count: 0,
                        intention: i,
                        includeExternalGuilds: r
                    })
                }, [t, i, e, r], a.statesWillNeverBeEqual)
            }

            function G(e) {
                return n.useEffect(() => {
                    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStoresArray)([u.default], () => u.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
            }

            function J(e) {
                return n.useEffect(() => {
                    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStoresArray)([u.default], () => u.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
            }

            function x(e, t) {
                return n.useEffect(() => {
                    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStores)([u.default], () => null != t && u.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
            }

            function k(e) {
                return n.useEffect(() => {
                    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStoresArray)([u.default], () => u.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
            }

            function b(e) {
                let t = n.useCallback(() => {
                    (0, _.default)(e)
                }, [e]);
                return n.useEffect(() => {
                    e.intention === C.EmojiIntention.REACTION && t()
                }, []), {
                    trackOnPickerOpen: t
                }
            }

            function w(e, t, i) {
                if (null == i) return g.EmojiSubCategory.NONE;
                let n = e.map(e => {
                        var t, i;
                        return null !== (i = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== i ? i : e.name
                    }),
                    r = t.map(e => e.id);
                return n.includes(i) ? g.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(i) ? g.EmojiSubCategory.NEWLY_ADDED_EMOJI : g.EmojiSubCategory.NONE
            }

            function Y(e) {
                let t = new Set,
                    i = e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)));
                return i
            }

            function W(e, t) {
                return e === C.EmojiIntention.REACTION ? t ? S.default.Messages.SEARCH_FOR_SUPER_REACTION : S.default.Messages.SEARCH_FOR_REACTION : S.default.Messages.SEARCH_FOR_EMOJI
            }
        },
        577426: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return m
                }
            }), i("808653");
            var n = i("716241"),
                r = i("385976"),
                a = i("42203"),
                o = i("18494"),
                u = i("402671"),
                s = i("255214"),
                l = i("352046"),
                E = i("49111"),
                d = i("958706"),
                c = i("13030");

            function m(e) {
                var t;
                let {
                    intention: i,
                    containerWidth: m,
                    rowSize: _,
                    isBurstReaction: f,
                    analyticsObject: I
                } = e, g = a.default.getChannel(o.default.getChannelId()), O = null == g ? void 0 : g.getGuildId(), C = r.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), T = null != g ? r.default.getDisambiguatedEmojiContext(g.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], p = C.slice(0, r.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), S = null != O ? r.default.getGuildEmoji(O) : [], y = null !== (t = r.default.getDisambiguatedEmojiContext(null == g ? void 0 : g.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}, j = Object.values(y).reduce((e, t) => e += t.length, 0), {
                    topEmojis: h,
                    newlyAddedEmojis: A
                } = (0, l.getTopAndNewlyAddedEmojis)({
                    guildId: null == g ? void 0 : g.getGuildId(),
                    pickerIntention: i
                }), {
                    visibleTopEmojis: M,
                    visibleNewlyAddedEmojis: R
                } = (0, s.getEmojiHotrail)({
                    topEmojis: h,
                    newlyAddedEmojis: A,
                    rowSize: _
                });
                n.default.trackWithMetadata(i === d.EmojiIntention.REACTION ? E.AnalyticEvents.REACTION_PICKER_OPENED : E.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                    width: m,
                    tab: c.ExpressionPickerViewType.EMOJI,
                    badged: !1,
                    num_expressions_favorites: T.length,
                    num_animated_expressions_favorites: T.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_favorites: T.filter(u.default.isCustomEmoji).length,
                    num_standard_expressions_favorites: T.filter(e => null == e.id).length,
                    num_expressions_frecent: p.length,
                    num_animated_expressions_frecent: p.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_frecent: p.filter(u.default.isCustomEmoji).length,
                    num_standard_expressions_frecent: p.filter(e => null == e.id).length,
                    num_current_guild_expressions: S.length,
                    num_custom_expressions_total: j,
                    num_expressions_top_server: M.length,
                    num_animated_expressions_top_server: M.filter(e => e.animated).length,
                    num_expressions_newly_added: R.length,
                    num_animated_expressions_newly_added: R.filter(e => e.animated).length,
                    ...i === d.EmojiIntention.REACTION && {
                        is_burst: f
                    },
                    ...null != I && {
                        location_object: I
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
                    return u
                },
                default: function() {
                    return s
                }
            });
            var n = i("65597"),
                r = i("385976"),
                a = i("958706");
            let o = [];

            function u(e) {
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

            function s(e, t) {
                return (0, n.useStateFromStoresObject)([r.default], () => u({
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
                    return u
                },
                updateNewlyAddedEmojiSeenAcknowledged: function() {
                    return s
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

            function u(e, t) {
                r.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
                }), null != e && null != t && r.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
                    guildId: e,
                    emojiId: t
                })
            }

            function s(e, t) {
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
                    return u
                }
            });
            var n = i("697218"),
                r = i("385976"),
                a = i("26430"),
                o = i("305781");

            function u(e) {
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
//# sourceMappingURL=34426.57fd2282777b204f456d.js.map