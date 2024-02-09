(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34426"], {
        788506: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useCategoryNitroLockedStates: function() {
                    return h
                },
                useEmojiCategories: function() {
                    return A
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
                    return v
                },
                trackEmojiSearchEmpty: function() {
                    return D
                },
                trackEmojiFocus: function() {
                    return F
                },
                trackEmojiSelect: function() {
                    return P
                },
                trackEmojiFavorited: function() {
                    return L
                },
                getAriaIdForEmojiCategory: function() {
                    return U
                },
                getStringForEmojiCategory: function() {
                    return G
                },
                allowUnicodeEmojiForIntention: function() {
                    return J
                },
                useEmojiSearchResults: function() {
                    return k
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
                    return W
                },
                getEmojiSubCategory: function() {
                    return q
                },
                dedupeUnicodeEmojis: function() {
                    return H
                },
                getSearchPlaceholder: function() {
                    return K
                }
            }), i("843762"), i("424973"), i("222007"), i("808653"), i("794252"), i("781738");
            var n = i("884691"),
                o = i("917351"),
                r = i("506838"),
                u = i("446674"),
                a = i("716241"),
                s = i("385976"),
                l = i("630400"),
                E = i("872173"),
                d = i("305961"),
                c = i("677099"),
                m = i("599110"),
                _ = i("718517"),
                f = i("402671"),
                g = i("577426"),
                I = i("255214"),
                O = i("352046"),
                C = i("115279"),
                p = i("49111"),
                y = i("958706"),
                T = i("13030"),
                S = i("646718"),
                j = i("782340");
            let h = function(e, t, i) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null == t ? void 0 : t.getGuildId(),
                        o = (0, u.useStateFromStores)([s.default], () => s.default.getDisambiguatedEmojiContext(n), [n]),
                        r = o.getGroupedCustomEmoji();
                    return i.map(i => {
                        if (i.type === C.EmojiCategoryTypes.GUILD) {
                            let n = null == r ? void 0 : r[i.guild.id];
                            return null != n && 0 !== n.length && f.default.isEmojiCategoryNitroLocked({
                                categoryEmojis: n,
                                channel: t,
                                intention: e
                            })
                        }
                        if (i.type === C.EmojiCategoryTypes.PREMIUM_UPSELL) return !0;
                        return !1
                    })
                },
                A = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
                    (0, l.maybeFetchTopEmojisByGuild)(i);
                    let o = (0, y.isExternalEmojiAllowedForIntention)(e),
                        r = x(i),
                        a = b(i),
                        {
                            topEmojis: E,
                            newlyAddedEmojis: m
                        } = (0, O.default)(i, e),
                        {
                            allEmojis: _
                        } = (0, I.default)({
                            topEmojis: E,
                            newlyAddedEmojis: m
                        }),
                        g = (0, u.useStateFromStores)([s.default], () => s.default.getDisambiguatedEmojiContext(i), [i]),
                        p = (0, u.useStateFromStores)([d.default], () => {
                            var e;
                            return null === (e = d.default.getGuild(i)) || void 0 === e ? void 0 : e.name
                        }),
                        T = n.useMemo(() => {
                            let n = g.getGroupedCustomEmoji(),
                                u = c.default.getFlattenedGuildIds(),
                                l = [];
                            return ((o, r) => {
                                for (let u of o) {
                                    let o;
                                    if (r === C.EmojiCategoryTypes.GUILD && (o = d.default.getGuild(u)), null == o) continue;
                                    let a = null == n ? void 0 : n[o.id];
                                    if (null == a || 0 === a.length || null != t && a.every(i => f.default.isEmojiFiltered({
                                            emoji: i,
                                            channel: t,
                                            intention: e
                                        }))) continue;
                                    let s = null;
                                    r === C.EmojiCategoryTypes.GUILD && (s = {
                                        type: C.EmojiCategoryTypes.GUILD,
                                        guild: o
                                    }), null != s && (o.id === i ? l.unshift(s) : l.push(s))
                                }
                            })(u, C.EmojiCategoryTypes.GUILD), s.default.categories.reduce((t, n) => {
                                if (n === C.EmojiCategories.TOP_GUILD_EMOJI) {
                                    if (0 === _.length) return t;
                                    t.push({
                                        type: C.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                        id: n,
                                        name: j.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                            guildName: p
                                        })
                                    })
                                } else if (n === C.EmojiCategories.RECENT) {
                                    if (0 === r.length) return t;
                                    t.push({
                                        type: C.EmojiCategoryTypes.RECENT,
                                        id: n,
                                        name: j.default.Messages.EMOJI_CATEGORY_RECENT
                                    })
                                } else if (n === C.EmojiCategories.FAVORITES) {
                                    if (0 === a.length) return t;
                                    t.push({
                                        type: C.EmojiCategoryTypes.FAVORITES,
                                        id: n,
                                        name: j.default.Messages.CATEGORY_FAVORITE
                                    })
                                } else if (n === C.EmojiCategories.CUSTOM) {
                                    let e = l;
                                    !o && (e = l.filter(e => e.type === C.EmojiCategoryTypes.GUILD && e.guild.id === i)), t.push(...e)
                                } else if (J(e)) t.push({
                                    type: C.EmojiCategoryTypes.UNICODE,
                                    id: n,
                                    name: n
                                });
                                return t
                            }, [])
                        }, [g, t, i, e, _.length, p, r.length, a.length, o]);
                    return T
                },
                M = e => {
                    let t = (null == e ? void 0 : e.getGuildId()) != null;
                    m.default.track(p.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_page: t ? p.AnalyticsPages.GUILD_CHANNEL : p.AnalyticsPages.DM_CHANNEL,
                        location_section: null != e ? p.AnalyticsSections.EMOJI_PICKER_POPOUT : p.AnalyticsSections.CUSTOM_STATUS_MODAL
                    })
                },
                R = (e, t) => {
                    a.default.trackWithMetadata(p.AnalyticEvents.SEARCH_STARTED, {
                        search_type: null != t && t === y.EmojiIntention.REACTION ? p.SearchTypes.EMOJI_REACTION : p.SearchTypes.EMOJI,
                        location: e
                    })
                },
                N = (e, t, i, n, o) => {
                    a.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: null != o && o === y.EmojiIntention.REACTION ? p.SearchTypes.EMOJI_REACTION : p.SearchTypes.EMOJI,
                        total_results: e,
                        num_results_locked: t,
                        query: n,
                        location: i
                    })
                },
                v = e => {
                    var t, i, n;
                    let {
                        emoji: o,
                        emojiSuggestions: u,
                        searchQuery: s,
                        isLocked: l,
                        location: E,
                        intention: d,
                        index: c
                    } = e, m = null !== (n = o.uniqueName) && void 0 !== n ? n : o.name, _ = (0, r.match)(d).with(y.EmojiIntention.REACTION, () => p.SearchTypes.EMOJI_REACTION).with(y.EmojiIntention.AUTO_SUGGESTION, () => p.SearchTypes.EMOJI_AUTO_SUGGESTION).otherwise(() => p.SearchTypes.EMOJI);
                    a.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        search_type: _,
                        location: E,
                        expression_guild_id: o.guildId,
                        emoji_id: o.id,
                        emoji_name: m,
                        is_custom: null != o.id,
                        is_animated: o.animated,
                        is_locked: l,
                        query: s,
                        index_num: c,
                        load_id: null == u ? void 0 : u.loadId,
                        total_results: null == u ? void 0 : null === (t = u.results) || void 0 === t ? void 0 : t.length,
                        emoji_suggestion_ids: null == u ? void 0 : null === (i = u.results) || void 0 === i ? void 0 : i.map(e => {
                            let {
                                emoji: t
                            } = e;
                            return t.id
                        }).filter(e => null != e)
                    })
                },
                D = (e, t) => {
                    a.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        search_type: p.SearchTypes.EMOJI,
                        query: t,
                        location: e
                    })
                },
                F = e => {
                    let {
                        emoji: t,
                        subCategory: i,
                        position: n,
                        newlyAddedHighlight: o
                    } = e;
                    a.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                        expression_section: null == i ? void 0 : i.toString(),
                        newly_added_highlight: o,
                        emoji_id: t.id,
                        emoji_name: t.name,
                        emoji_animated: t.animated,
                        emoji_position: n
                    })
                },
                P = e => {
                    var t;
                    let i, {
                        emoji: n,
                        location: o,
                        pickerIntention: r,
                        category: u,
                        subCategory: s = C.EmojiSubCategory.NONE,
                        position: l,
                        newlyAddedHighlight: E,
                        isBurstReaction: d
                    } = e;
                    switch (r) {
                        case y.EmojiIntention.REACTION:
                            i = d ? S.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : S.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            break;
                        case y.EmojiIntention.STATUS:
                            i = S.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                            break;
                        default:
                            i = S.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
                    }
                    let c = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
                    a.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: i,
                        location: o,
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
                L = e => {
                    var t;
                    let {
                        emoji: i,
                        location: n
                    } = e, o = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
                    a.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: n,
                        expression_type: T.ExpressionPickerViewType.EMOJI,
                        expression_id: i.id,
                        expression_name: o,
                        expression_guild_id: i.guildId,
                        is_custom: null != i.id,
                        is_animated: i.animated
                    })
                };
            (0, o.throttle)(e => {
                let {
                    emojiSuggestions: t,
                    analyticsLocation: i
                } = e;
                a.default.trackWithMetadata(p.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
                    suggestion_type: p.AutoCompleteResultTypes.EMOJI,
                    suggestion_quantity: t.results.length,
                    custom_quantity: t.results.filter(e => {
                        let {
                            emoji: t
                        } = e;
                        return null != t.id
                    }).length,
                    load_id: t.loadId,
                    location: i
                })
            }, _.default.Millis.HALF_SECOND, {
                leading: !1,
                trailing: !0
            });
            let U = (e, t) => {
                    if (e.type === C.EmojiCategoryTypes.GUILD) return null != t ? t.toString() : "";
                    return e.id
                },
                G = (e, t) => {
                    switch (e) {
                        case C.EmojiCategories.TOP_GUILD_EMOJI:
                            return j.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: t
                            });
                        case C.EmojiCategories.RECENT:
                            return j.default.Messages.EMOJI_CATEGORY_RECENT;
                        case C.EmojiCategories.FAVORITES:
                            return j.default.Messages.CATEGORY_FAVORITE;
                        case C.EmojiCategories.ACTIVITY:
                            return j.default.Messages.EMOJI_CATEGORY_ACTIVITY;
                        case C.EmojiCategories.FLAGS:
                            return j.default.Messages.EMOJI_CATEGORY_FLAGS;
                        case C.EmojiCategories.FOOD:
                            return j.default.Messages.EMOJI_CATEGORY_FOOD;
                        case C.EmojiCategories.NATURE:
                            return j.default.Messages.EMOJI_CATEGORY_NATURE;
                        case C.EmojiCategories.OBJECTS:
                            return j.default.Messages.EMOJI_CATEGORY_OBJECTS;
                        case C.EmojiCategories.PEOPLE:
                            return j.default.Messages.EMOJI_CATEGORY_PEOPLE;
                        case C.EmojiCategories.SYMBOLS:
                            return j.default.Messages.EMOJI_CATEGORY_SYMBOLS;
                        case C.EmojiCategories.TRAVEL:
                            return j.default.Messages.EMOJI_CATEGORY_TRAVEL;
                        case C.EmojiCategories.PREMIUM_UPSELL:
                            return j.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                        default:
                            return null != t ? t : e
                    }
                },
                J = e => e !== y.EmojiIntention.COMMUNITY_CONTENT_ONLY;

            function k(e, t, i) {
                n.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let o = (0, y.isExternalEmojiAllowedForIntention)(i);
                return (0, u.useStateFromStores)([s.default], () => {
                    let n = e.replace(/^:/, "").replace(/:$/, "");
                    return "" === n ? null : s.default.searchWithoutFetchingLatest({
                        channel: t,
                        query: n,
                        count: 0,
                        intention: i,
                        includeExternalGuilds: o
                    })
                }, [t, i, e, o], u.statesWillNeverBeEqual)
            }

            function x(e) {
                return n.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
            }

            function b(e) {
                return n.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
            }

            function w(e, t) {
                return n.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStores)([s.default], () => null != t && s.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
            }

            function Y(e) {
                return n.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
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

            function q(e, t, i) {
                if (null == i) return C.EmojiSubCategory.NONE;
                let n = e.map(e => {
                        var t, i;
                        return null !== (i = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== i ? i : e.name
                    }),
                    o = t.map(e => e.id);
                return n.includes(i) ? C.EmojiSubCategory.TOP_GUILD_EMOJI : o.includes(i) ? C.EmojiSubCategory.NEWLY_ADDED_EMOJI : C.EmojiSubCategory.NONE
            }

            function H(e) {
                let t = new Set,
                    i = e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)));
                return i
            }

            function K(e, t) {
                return e === y.EmojiIntention.REACTION ? t ? j.default.Messages.SEARCH_FOR_SUPER_REACTION : j.default.Messages.SEARCH_FOR_REACTION : j.default.Messages.SEARCH_FOR_EMOJI
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
                o = i("385976"),
                r = i("42203"),
                u = i("18494"),
                a = i("402671"),
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
                    analyticsObject: g
                } = e, I = r.default.getChannel(u.default.getChannelId()), O = null == I ? void 0 : I.getGuildId(), C = o.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), p = null != I ? o.default.getDisambiguatedEmojiContext(I.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], y = C.slice(0, o.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), T = null != O ? o.default.getGuildEmoji(O) : [], S = null !== (t = o.default.getDisambiguatedEmojiContext(null == I ? void 0 : I.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}, j = Object.values(S).reduce((e, t) => e += t.length, 0), {
                    topEmojis: h,
                    newlyAddedEmojis: A
                } = (0, l.getTopAndNewlyAddedEmojis)({
                    guildId: null == I ? void 0 : I.getGuildId(),
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
                    num_expressions_favorites: p.length,
                    num_animated_expressions_favorites: p.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_favorites: p.filter(a.default.isCustomEmoji).length,
                    num_standard_expressions_favorites: p.filter(e => null == e.id).length,
                    num_expressions_frecent: y.length,
                    num_animated_expressions_frecent: y.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_frecent: y.filter(a.default.isCustomEmoji).length,
                    num_standard_expressions_frecent: y.filter(e => null == e.id).length,
                    num_current_guild_expressions: T.length,
                    num_custom_expressions_total: j,
                    num_expressions_top_server: M.length,
                    num_animated_expressions_top_server: M.filter(e => e.animated).length,
                    num_expressions_newly_added: R.length,
                    num_animated_expressions_newly_added: R.filter(e => e.animated).length,
                    ...i === d.EmojiIntention.REACTION && {
                        is_burst: f
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
                    return r
                },
                default: function() {
                    return u
                }
            });
            var n = i("884691"),
                o = i("115279");

            function r(e) {
                let {
                    topEmojis: t,
                    newlyAddedEmojis: i,
                    rowSize: n = o.EMOJI_ROW_SIZE
                } = e, r = t.slice(0, n - i.length);
                return {
                    visibleTopEmojis: r,
                    visibleNewlyAddedEmojis: i,
                    allEmojis: r.concat(i)
                }
            }

            function u(e) {
                return n.useMemo(() => r(e), [e])
            }
        },
        352046: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getTopAndNewlyAddedEmojis: function() {
                    return a
                },
                default: function() {
                    return s
                }
            });
            var n = i("65597"),
                o = i("385976"),
                r = i("958706");
            let u = [];

            function a(e) {
                let {
                    emojiStoreInstance: t = o.default,
                    guildId: i,
                    pickerIntention: n
                } = e;
                return {
                    topEmojis: n !== r.EmojiIntention.REACTION ? t.getTopEmoji(i) : u,
                    newlyAddedEmojis: n !== r.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(i) : u
                }
            }

            function s(e, t) {
                return (0, n.useStateFromStoresObject)([o.default], () => a({
                    emojiStoreInstance: o.default,
                    guildId: e,
                    pickerIntention: t
                }), [e, t])
            }
        },
        305781: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchTopEmojis: function() {
                    return u
                },
                updateNewlyAddedLastSeen: function() {
                    return a
                },
                updateNewlyAddedEmojiSeenAcknowledged: function() {
                    return s
                }
            });
            var n = i("872717"),
                o = i("913144"),
                r = i("49111");

            function u(e) {
                o.default.dispatch({
                    type: "TOP_EMOJIS_FETCH",
                    guildId: e
                }), n.default.get({
                    url: r.Endpoints.TOP_EMOJIS_FOR_GUILD(e),
                    oldFormErrors: !0
                }).then(t => o.default.dispatch({
                    type: "TOP_EMOJIS_FETCH_SUCCESS",
                    guildId: e,
                    topEmojisMetadata: t.body.items.map(e => ({
                        emojiId: e.emoji_id,
                        rank: e.emoji_rank
                    })).sort((e, t) => e.rank - t.rank)
                }), () => o.default.dispatch({
                    type: "TOP_EMOJIS_FETCH_FAILURE",
                    guildId: e
                }))
            }

            function a(e, t) {
                o.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
                }), null != e && null != t && o.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
                    guildId: e,
                    emojiId: t
                })
            }

            function s(e, t) {
                null != e && null != t && o.default.dispatch({
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
                    return a
                }
            });
            var n = i("697218"),
                o = i("385976"),
                r = i("26430"),
                u = i("305781");

            function a(e) {
                if (null == e) return;
                let t = n.default.getCurrentUser();
                if (null == t) return;
                let i = o.default.getTopEmojisMetadata(e);
                if (null != i) {
                    let {
                        topEmojisTTL: e
                    } = i;
                    if (null == e || Date.now() < e) return
                }!r.default.getIsFetching(e) && (0, u.fetchTopEmojis)(e)
            }
        }
    }
]);
//# sourceMappingURL=34426.6ccd8fcfe7c3993a5ee6.js.map