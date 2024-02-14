(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34426"], {
        788506: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useCategoryNitroLockedStates: function() {
                    return M
                },
                useEmojiCategories: function() {
                    return R
                },
                trackPremiumSettingsPaneOpened: function() {
                    return N
                },
                trackEmojiSearchStart: function() {
                    return v
                },
                trackEmojiSearchResultsViewed: function() {
                    return F
                },
                trackEmojiSearchSelect: function() {
                    return D
                },
                trackEmojiSearchEmpty: function() {
                    return P
                },
                trackEmojiFocus: function() {
                    return U
                },
                trackEmojiSelect: function() {
                    return L
                },
                trackEmojiFavorited: function() {
                    return G
                },
                getAriaIdForEmojiCategory: function() {
                    return J
                },
                getStringForEmojiCategory: function() {
                    return k
                },
                allowUnicodeEmojiForIntention: function() {
                    return x
                },
                useEmojiSearchResults: function() {
                    return b
                },
                useFrequentlyUsedEmojis: function() {
                    return w
                },
                useFavoriteEmojis: function() {
                    return Y
                },
                useIsFavoriteEmoji: function() {
                    return W
                },
                useEmojiInPriorityOrder: function() {
                    return q
                },
                useTrackEmojiPickerOpened: function() {
                    return H
                },
                getEmojiSubCategory: function() {
                    return K
                },
                dedupeUnicodeEmojis: function() {
                    return V
                },
                getSearchPlaceholder: function() {
                    return B
                }
            }), i("843762"), i("424973"), i("222007"), i("808653"), i("794252"), i("781738");
            var n = i("884691"),
                r = i("917351"),
                o = i("506838"),
                u = i("446674"),
                a = i("716241"),
                s = i("385976"),
                l = i("630400"),
                E = i("872173"),
                d = i("305961"),
                c = i("677099"),
                m = i("697218"),
                _ = i("599110"),
                f = i("718517"),
                g = i("402671"),
                I = i("764364");
            i("299039");
            var O = i("577426"),
                C = i("255214"),
                p = i("352046"),
                y = i("115279"),
                S = i("49111"),
                T = i("958706"),
                j = i("13030"),
                h = i("646718"),
                A = i("782340");
            let M = function(e, t, i) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null == t ? void 0 : t.getGuildId(),
                        o = (0, u.useStateFromStores)([s.default], () => s.default.getDisambiguatedEmojiContext(r), [r]),
                        a = o.getGroupedCustomEmoji(),
                        l = (0, u.useStateFromStores)([m.default], () => m.default.getCurrentUser()),
                        E = (0, I.isPremium)(l),
                        d = n.useMemo(() => i.map(i => {
                            if (E) return !1;
                            if (i.type === y.EmojiCategoryTypes.GUILD) {
                                let n = null == a ? void 0 : a[i.guild.id];
                                return null != n && 0 !== n.length && g.default.isEmojiCategoryNitroLocked({
                                    categoryEmojis: n,
                                    channel: t,
                                    intention: e
                                })
                            }
                            if (i.type === y.EmojiCategoryTypes.PREMIUM_UPSELL) return !0;
                            return !1
                        }), [i, t, a, e, E]);
                    return d
                },
                R = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
                    (0, l.maybeFetchTopEmojisByGuild)(i);
                    let r = (0, T.isExternalEmojiAllowedForIntention)(e),
                        o = w(i),
                        a = Y(i),
                        {
                            topEmojis: E,
                            newlyAddedEmojis: m
                        } = (0, p.default)(i, e),
                        {
                            allEmojis: _
                        } = (0, C.default)({
                            topEmojis: E,
                            newlyAddedEmojis: m
                        }),
                        f = (0, u.useStateFromStores)([s.default], () => s.default.getDisambiguatedEmojiContext(i), [i]),
                        I = (0, u.useStateFromStores)([d.default], () => {
                            var e;
                            return null === (e = d.default.getGuild(i)) || void 0 === e ? void 0 : e.name
                        }),
                        O = n.useMemo(() => {
                            let n = f.getGroupedCustomEmoji(),
                                u = c.default.getFlattenedGuildIds(),
                                l = [];
                            return ((r, o) => {
                                for (let u of r) {
                                    let r;
                                    if (o === y.EmojiCategoryTypes.GUILD && (r = d.default.getGuild(u)), null == r) continue;
                                    let a = null == n ? void 0 : n[r.id];
                                    if (null == a || 0 === a.length || null != t && a.every(i => g.default.isEmojiFiltered({
                                            emoji: i,
                                            channel: t,
                                            intention: e
                                        }))) continue;
                                    let s = null;
                                    o === y.EmojiCategoryTypes.GUILD && (s = {
                                        type: y.EmojiCategoryTypes.GUILD,
                                        guild: r
                                    }), null != s && (r.id === i ? l.unshift(s) : l.push(s))
                                }
                            })(u, y.EmojiCategoryTypes.GUILD), s.default.categories.reduce((t, n) => {
                                if (n === y.EmojiCategories.TOP_GUILD_EMOJI) {
                                    if (0 === _.length) return t;
                                    t.push({
                                        type: y.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                        id: n,
                                        name: A.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                            guildName: I
                                        })
                                    })
                                } else if (n === y.EmojiCategories.RECENT) {
                                    if (0 === o.length) return t;
                                    t.push({
                                        type: y.EmojiCategoryTypes.RECENT,
                                        id: n,
                                        name: A.default.Messages.EMOJI_CATEGORY_RECENT
                                    })
                                } else if (n === y.EmojiCategories.FAVORITES) {
                                    if (0 === a.length) return t;
                                    t.push({
                                        type: y.EmojiCategoryTypes.FAVORITES,
                                        id: n,
                                        name: A.default.Messages.CATEGORY_FAVORITE
                                    })
                                } else if (n === y.EmojiCategories.CUSTOM) {
                                    let e = l;
                                    !r && (e = l.filter(e => e.type === y.EmojiCategoryTypes.GUILD && e.guild.id === i)), t.push(...e)
                                } else if (x(e)) t.push({
                                    type: y.EmojiCategoryTypes.UNICODE,
                                    id: n,
                                    name: n
                                });
                                return t
                            }, [])
                        }, [f, t, i, e, _.length, I, o.length, a.length, r]);
                    return O
                },
                N = e => {
                    let t = (null == e ? void 0 : e.getGuildId()) != null;
                    _.default.track(S.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_page: t ? S.AnalyticsPages.GUILD_CHANNEL : S.AnalyticsPages.DM_CHANNEL,
                        location_section: null != e ? S.AnalyticsSections.EMOJI_PICKER_POPOUT : S.AnalyticsSections.CUSTOM_STATUS_MODAL
                    })
                },
                v = (e, t) => {
                    a.default.trackWithMetadata(S.AnalyticEvents.SEARCH_STARTED, {
                        search_type: null != t && t === T.EmojiIntention.REACTION ? S.SearchTypes.EMOJI_REACTION : S.SearchTypes.EMOJI,
                        location: e
                    })
                },
                F = (e, t, i, n, r) => {
                    a.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: null != r && r === T.EmojiIntention.REACTION ? S.SearchTypes.EMOJI_REACTION : S.SearchTypes.EMOJI,
                        total_results: e,
                        num_results_locked: t,
                        query: n,
                        location: i
                    })
                },
                D = e => {
                    var t, i, n;
                    let {
                        emoji: r,
                        emojiSuggestions: u,
                        searchQuery: s,
                        isLocked: l,
                        location: E,
                        intention: d,
                        index: c
                    } = e, m = null !== (n = r.uniqueName) && void 0 !== n ? n : r.name, _ = (0, o.match)(d).with(T.EmojiIntention.REACTION, () => S.SearchTypes.EMOJI_REACTION).with(T.EmojiIntention.AUTO_SUGGESTION, () => S.SearchTypes.EMOJI_AUTO_SUGGESTION).otherwise(() => S.SearchTypes.EMOJI);
                    a.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        search_type: _,
                        location: E,
                        expression_guild_id: r.guildId,
                        emoji_id: r.id,
                        emoji_name: m,
                        is_custom: null != r.id,
                        is_animated: r.animated,
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
                P = (e, t) => {
                    a.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        search_type: S.SearchTypes.EMOJI,
                        query: t,
                        location: e
                    })
                },
                U = e => {
                    let {
                        emoji: t,
                        subCategory: i,
                        position: n,
                        newlyAddedHighlight: r
                    } = e;
                    a.default.trackWithMetadata(S.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                        expression_section: null == i ? void 0 : i.toString(),
                        newly_added_highlight: r,
                        emoji_id: t.id,
                        emoji_name: t.name,
                        emoji_animated: t.animated,
                        emoji_position: n
                    })
                },
                L = e => {
                    var t;
                    let i, {
                        emoji: n,
                        location: r,
                        pickerIntention: o,
                        category: u,
                        subCategory: s = y.EmojiSubCategory.NONE,
                        position: l,
                        newlyAddedHighlight: E,
                        isBurstReaction: d
                    } = e;
                    switch (o) {
                        case T.EmojiIntention.REACTION:
                            i = d ? h.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : h.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            break;
                        case T.EmojiIntention.STATUS:
                            i = h.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                            break;
                        default:
                            i = h.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
                    }
                    let c = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
                    a.default.trackWithMetadata(S.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
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
                G = e => {
                    var t;
                    let {
                        emoji: i,
                        location: n
                    } = e, r = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
                    a.default.trackWithMetadata(S.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: n,
                        expression_type: j.ExpressionPickerViewType.EMOJI,
                        expression_id: i.id,
                        expression_name: r,
                        expression_guild_id: i.guildId,
                        is_custom: null != i.id,
                        is_animated: i.animated
                    })
                };
            (0, r.throttle)(e => {
                let {
                    emojiSuggestions: t,
                    analyticsLocation: i
                } = e;
                a.default.trackWithMetadata(S.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
                    suggestion_type: S.AutoCompleteResultTypes.EMOJI,
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
            }, f.default.Millis.HALF_SECOND, {
                leading: !1,
                trailing: !0
            });
            let J = (e, t) => {
                    if (e.type === y.EmojiCategoryTypes.GUILD) return null != t ? t.toString() : "";
                    return e.id
                },
                k = (e, t) => {
                    switch (e) {
                        case y.EmojiCategories.TOP_GUILD_EMOJI:
                            return A.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: t
                            });
                        case y.EmojiCategories.RECENT:
                            return A.default.Messages.EMOJI_CATEGORY_RECENT;
                        case y.EmojiCategories.FAVORITES:
                            return A.default.Messages.CATEGORY_FAVORITE;
                        case y.EmojiCategories.ACTIVITY:
                            return A.default.Messages.EMOJI_CATEGORY_ACTIVITY;
                        case y.EmojiCategories.FLAGS:
                            return A.default.Messages.EMOJI_CATEGORY_FLAGS;
                        case y.EmojiCategories.FOOD:
                            return A.default.Messages.EMOJI_CATEGORY_FOOD;
                        case y.EmojiCategories.NATURE:
                            return A.default.Messages.EMOJI_CATEGORY_NATURE;
                        case y.EmojiCategories.OBJECTS:
                            return A.default.Messages.EMOJI_CATEGORY_OBJECTS;
                        case y.EmojiCategories.PEOPLE:
                            return A.default.Messages.EMOJI_CATEGORY_PEOPLE;
                        case y.EmojiCategories.SYMBOLS:
                            return A.default.Messages.EMOJI_CATEGORY_SYMBOLS;
                        case y.EmojiCategories.TRAVEL:
                            return A.default.Messages.EMOJI_CATEGORY_TRAVEL;
                        case y.EmojiCategories.PREMIUM_UPSELL:
                            return A.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                        default:
                            return null != t ? t : e
                    }
                },
                x = e => e !== T.EmojiIntention.COMMUNITY_CONTENT_ONLY;

            function b(e, t, i) {
                n.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let r = (0, T.isExternalEmojiAllowedForIntention)(i);
                return (0, u.useStateFromStores)([s.default], () => {
                    let n = e.replace(/^:/, "").replace(/:$/, "");
                    return "" === n ? null : s.default.searchWithoutFetchingLatest({
                        channel: t,
                        query: n,
                        count: 0,
                        intention: i,
                        includeExternalGuilds: r
                    })
                }, [t, i, e, r], u.statesWillNeverBeEqual)
            }

            function w(e) {
                return n.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
            }

            function Y(e) {
                return n.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
            }

            function W(e, t) {
                return n.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStores)([s.default], () => null != t && s.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
            }

            function q(e) {
                return n.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStoresArray)([s.default], () => s.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
            }

            function H(e) {
                let t = n.useCallback(() => {
                    (0, O.default)(e)
                }, [e]);
                return n.useEffect(() => {
                    e.intention === T.EmojiIntention.REACTION && t()
                }, []), {
                    trackOnPickerOpen: t
                }
            }

            function K(e, t, i) {
                if (null == i) return y.EmojiSubCategory.NONE;
                let n = e.map(e => {
                        var t, i;
                        return null !== (i = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== i ? i : e.name
                    }),
                    r = t.map(e => e.id);
                return n.includes(i) ? y.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(i) ? y.EmojiSubCategory.NEWLY_ADDED_EMOJI : y.EmojiSubCategory.NONE
            }

            function V(e) {
                let t = new Set,
                    i = e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)));
                return i
            }

            function B(e, t) {
                return e === T.EmojiIntention.REACTION ? t ? A.default.Messages.SEARCH_FOR_SUPER_REACTION : A.default.Messages.SEARCH_FOR_REACTION : A.default.Messages.SEARCH_FOR_EMOJI
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
                o = i("42203"),
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
                } = e, I = o.default.getChannel(u.default.getChannelId()), O = null == I ? void 0 : I.getGuildId(), C = r.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), p = null != I ? r.default.getDisambiguatedEmojiContext(I.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], y = C.slice(0, r.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), S = null != O ? r.default.getGuildEmoji(O) : [], T = null !== (t = r.default.getDisambiguatedEmojiContext(null == I ? void 0 : I.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}, j = Object.values(T).reduce((e, t) => e += t.length, 0), {
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
                    num_current_guild_expressions: S.length,
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
                    return o
                },
                default: function() {
                    return u
                }
            });
            var n = i("884691"),
                r = i("115279");

            function o(e) {
                let {
                    topEmojis: t,
                    newlyAddedEmojis: i,
                    rowSize: n = r.EMOJI_ROW_SIZE
                } = e, o = t.slice(0, n - i.length);
                return {
                    visibleTopEmojis: o,
                    visibleNewlyAddedEmojis: i,
                    allEmojis: o.concat(i)
                }
            }

            function u(e) {
                return n.useMemo(() => o(e), [e])
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
                r = i("385976"),
                o = i("958706");
            let u = [];

            function a(e) {
                let {
                    emojiStoreInstance: t = r.default,
                    guildId: i,
                    pickerIntention: n
                } = e;
                return {
                    topEmojis: n !== o.EmojiIntention.REACTION ? t.getTopEmoji(i) : u,
                    newlyAddedEmojis: n !== o.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(i) : u
                }
            }

            function s(e, t) {
                return (0, n.useStateFromStoresObject)([r.default], () => a({
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
                r = i("913144"),
                o = i("49111");

            function u(e) {
                r.default.dispatch({
                    type: "TOP_EMOJIS_FETCH",
                    guildId: e
                }), n.default.get({
                    url: o.Endpoints.TOP_EMOJIS_FOR_GUILD(e),
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

            function a(e, t) {
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
                    return a
                }
            });
            var n = i("697218"),
                r = i("385976"),
                o = i("26430"),
                u = i("305781");

            function a(e) {
                if (null == e) return;
                let t = n.default.getCurrentUser();
                if (null == t) return;
                let i = r.default.getTopEmojisMetadata(e);
                if (null != i) {
                    let {
                        topEmojisTTL: e
                    } = i;
                    if (null == e || Date.now() < e) return
                }!o.default.getIsFetching(e) && (0, u.fetchTopEmojis)(e)
            }
        }
    }
]);
//# sourceMappingURL=34426.13b837c1d54aa323779b.js.map