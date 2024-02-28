(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19005"], {
        813138: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("94731");
            n.es(i, t)
        },
        569264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                allowUnicodeEmojiForIntention: function() {
                    return v
                },
                dedupeUnicodeEmojis: function() {
                    return K
                },
                getAriaIdForEmojiCategory: function() {
                    return H
                },
                getEmojiSubCategory: function() {
                    return W
                },
                getSearchPlaceholder: function() {
                    return X
                },
                getStringForEmojiCategory: function() {
                    return b
                },
                trackEmojiFavorited: function() {
                    return x
                },
                trackEmojiFocus: function() {
                    return G
                },
                trackEmojiSearchEmpty: function() {
                    return U
                },
                trackEmojiSearchResultsViewed: function() {
                    return P
                },
                trackEmojiSearchSelect: function() {
                    return D
                },
                trackEmojiSearchStart: function() {
                    return L
                },
                trackEmojiSelect: function() {
                    return F
                },
                trackPremiumSettingsPaneOpened: function() {
                    return h
                },
                useCategoryNitroLockedStates: function() {
                    return y
                },
                useEmojiCategories: function() {
                    return j
                },
                useEmojiInPriorityOrder: function() {
                    return V
                },
                useEmojiSearchResults: function() {
                    return B
                },
                useFavoriteEmojis: function() {
                    return k
                },
                useFrequentlyUsedEmojis: function() {
                    return J
                },
                useIsFavoriteEmoji: function() {
                    return w
                },
                useTrackEmojiPickerOpened: function() {
                    return Y
                }
            }), n("733860"), n("653041"), n("627341");
            var i = n("470079"),
                s = n("392711"),
                r = n("278074"),
                u = n("661223"),
                a = n("244180"),
                o = n("353118"),
                l = n("689456"),
                E = n("259537"),
                d = n("327271"),
                _ = n("880315"),
                c = n("871831"),
                m = n("328470"),
                f = n("152551"),
                I = n("659300"),
                T = n("952223");
            n("84819");
            var C = n("802582"),
                A = n("455472"),
                O = n("810824"),
                g = n("540019"),
                p = n("467006"),
                S = n("308439"),
                R = n("38852"),
                N = n("171168"),
                M = n("30175");
            let y = function(e, t, n) {
                    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t?.getGuildId(),
                        r = (0, u.useStateFromStores)([o.default], () => o.default.getDisambiguatedEmojiContext(s), [s]).getGroupedCustomEmoji(),
                        a = (0, u.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
                        l = (0, T.isPremium)(a);
                    return i.useMemo(() => n.map(n => {
                        if (l) return !1;
                        if (n.type === g.EmojiCategoryTypes.GUILD) {
                            let i = r?.[n.guild.id];
                            return null != i && 0 !== i.length && I.default.isEmojiCategoryNitroLocked({
                                categoryEmojis: i,
                                channel: t,
                                intention: e
                            })
                        }
                        if (n.type === g.EmojiCategoryTypes.PREMIUM_UPSELL) return !0;
                        return !1
                    }), [n, t, r, e, l])
                },
                j = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t?.getGuildId();
                    (0, l.maybeFetchTopEmojisByGuild)(n);
                    let s = (0, S.isExternalEmojiAllowedForIntention)(e),
                        r = J(n),
                        a = k(n),
                        {
                            topEmojis: E,
                            newlyAddedEmojis: c
                        } = (0, O.default)(n, e),
                        {
                            allEmojis: m
                        } = (0, A.default)({
                            topEmojis: E,
                            newlyAddedEmojis: c
                        }),
                        f = (0, u.useStateFromStores)([o.default], () => o.default.getDisambiguatedEmojiContext(n), [n]),
                        T = (0, u.useStateFromStores)([d.default], () => d.default.getGuild(n)?.name);
                    return i.useMemo(() => {
                        let i = f.getGroupedCustomEmoji(),
                            u = _.default.getFlattenedGuildIds(),
                            l = [];
                        return ((s, r) => {
                            for (let u of s) {
                                let s;
                                if (r === g.EmojiCategoryTypes.GUILD && (s = d.default.getGuild(u)), null == s) continue;
                                let a = i?.[s.id];
                                if (null == a || 0 === a.length || null != t && a.every(n => I.default.isEmojiFiltered({
                                        emoji: n,
                                        channel: t,
                                        intention: e
                                    }))) continue;
                                let o = null;
                                r === g.EmojiCategoryTypes.GUILD && (o = {
                                    type: g.EmojiCategoryTypes.GUILD,
                                    guild: s
                                }), null != o && (s.id === n ? l.unshift(o) : l.push(o))
                            }
                        })(u, g.EmojiCategoryTypes.GUILD), o.default.categories.reduce((t, i) => {
                            if (i === g.EmojiCategories.TOP_GUILD_EMOJI) {
                                if (0 === m.length) return t;
                                t.push({
                                    type: g.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                    id: i,
                                    name: M.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                        guildName: T
                                    })
                                })
                            } else if (i === g.EmojiCategories.RECENT) {
                                if (0 === r.length) return t;
                                t.push({
                                    type: g.EmojiCategoryTypes.RECENT,
                                    id: i,
                                    name: M.default.Messages.EMOJI_CATEGORY_RECENT
                                })
                            } else if (i === g.EmojiCategories.FAVORITES) {
                                if (0 === a.length) return t;
                                t.push({
                                    type: g.EmojiCategoryTypes.FAVORITES,
                                    id: i,
                                    name: M.default.Messages.CATEGORY_FAVORITE
                                })
                            } else if (i === g.EmojiCategories.CUSTOM) {
                                let e = l;
                                !s && (e = l.filter(e => e.type === g.EmojiCategoryTypes.GUILD && e.guild.id === n)), t.push(...e)
                            } else if (v(e)) t.push({
                                type: g.EmojiCategoryTypes.UNICODE,
                                id: i,
                                name: i
                            });
                            return t
                        }, [])
                    }, [f, t, n, e, m.length, T, r.length, a.length, s])
                },
                h = e => {
                    let t = e?.getGuildId() != null;
                    m.default.track(p.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_page: t ? p.AnalyticsPages.GUILD_CHANNEL : p.AnalyticsPages.DM_CHANNEL,
                        location_section: null != e ? p.AnalyticsSections.EMOJI_PICKER_POPOUT : p.AnalyticsSections.CUSTOM_STATUS_MODAL
                    })
                },
                L = (e, t) => {
                    a.default.trackWithMetadata(p.AnalyticEvents.SEARCH_STARTED, {
                        search_type: null != t && t === S.EmojiIntention.REACTION ? p.SearchTypes.EMOJI_REACTION : p.SearchTypes.EMOJI,
                        location: e
                    })
                },
                P = (e, t, n, i, s) => {
                    a.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: null != s && s === S.EmojiIntention.REACTION ? p.SearchTypes.EMOJI_REACTION : p.SearchTypes.EMOJI,
                        total_results: e,
                        num_results_locked: t,
                        query: i,
                        location: n
                    })
                },
                D = e => {
                    let {
                        emoji: t,
                        emojiSuggestions: n,
                        searchQuery: i,
                        isLocked: s,
                        location: u,
                        intention: o,
                        index: l
                    } = e, E = t.uniqueName ?? t.name, d = (0, r.match)(o).with(S.EmojiIntention.REACTION, () => p.SearchTypes.EMOJI_REACTION).with(S.EmojiIntention.AUTO_SUGGESTION, () => p.SearchTypes.EMOJI_AUTO_SUGGESTION).otherwise(() => p.SearchTypes.EMOJI);
                    a.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        search_type: d,
                        location: u,
                        expression_guild_id: t.guildId,
                        emoji_id: t.id,
                        emoji_name: E,
                        is_custom: null != t.id,
                        is_animated: t.animated,
                        is_locked: s,
                        query: i,
                        index_num: l,
                        load_id: n?.loadId,
                        total_results: n?.results?.length,
                        emoji_suggestion_ids: n?.results?.map(e => {
                            let {
                                emoji: t
                            } = e;
                            return t.id
                        }).filter(e => null != e)
                    })
                },
                U = (e, t) => {
                    a.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        search_type: p.SearchTypes.EMOJI,
                        query: t,
                        location: e
                    })
                },
                G = e => {
                    let {
                        emoji: t,
                        subCategory: n,
                        position: i,
                        newlyAddedHighlight: s
                    } = e;
                    a.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                        expression_section: n?.toString(),
                        newly_added_highlight: s,
                        emoji_id: t.id,
                        emoji_name: t.name,
                        emoji_animated: t.animated,
                        emoji_position: i
                    })
                },
                F = e => {
                    let t, {
                        emoji: n,
                        location: i,
                        pickerIntention: s,
                        category: r,
                        subCategory: u = g.EmojiSubCategory.NONE,
                        position: o,
                        newlyAddedHighlight: l,
                        isBurstReaction: E
                    } = e;
                    switch (s) {
                        case S.EmojiIntention.REACTION:
                            t = E ? N.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : N.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            break;
                        case S.EmojiIntention.STATUS:
                            t = N.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                            break;
                        default:
                            t = N.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
                    }
                    let d = n.uniqueName ?? n.name;
                    a.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: t,
                        location: i,
                        expression_id: n.id,
                        expression_name: d,
                        expression_guild_id: n.guildId,
                        is_custom: null != n.id,
                        is_animated: n.animated,
                        expression_picker_section: r,
                        expression_section: u?.toString(),
                        emoji_position: o,
                        newly_added_highlight: l,
                        is_burst: E
                    })
                },
                x = e => {
                    let {
                        emoji: t,
                        location: n
                    } = e, i = t.uniqueName ?? t.name;
                    a.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: n,
                        expression_type: R.ExpressionPickerViewType.EMOJI,
                        expression_id: t.id,
                        expression_name: i,
                        expression_guild_id: t.guildId,
                        is_custom: null != t.id,
                        is_animated: t.animated
                    })
                };
            (0, s.throttle)(e => {
                let {
                    emojiSuggestions: t,
                    analyticsLocation: n
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
                    location: n
                })
            }, f.default.Millis.HALF_SECOND, {
                leading: !1,
                trailing: !0
            });
            let H = (e, t) => {
                    if (e.type === g.EmojiCategoryTypes.GUILD) return null != t ? t.toString() : "";
                    return e.id
                },
                b = (e, t) => {
                    switch (e) {
                        case g.EmojiCategories.TOP_GUILD_EMOJI:
                            return M.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: t
                            });
                        case g.EmojiCategories.RECENT:
                            return M.default.Messages.EMOJI_CATEGORY_RECENT;
                        case g.EmojiCategories.FAVORITES:
                            return M.default.Messages.CATEGORY_FAVORITE;
                        case g.EmojiCategories.ACTIVITY:
                            return M.default.Messages.EMOJI_CATEGORY_ACTIVITY;
                        case g.EmojiCategories.FLAGS:
                            return M.default.Messages.EMOJI_CATEGORY_FLAGS;
                        case g.EmojiCategories.FOOD:
                            return M.default.Messages.EMOJI_CATEGORY_FOOD;
                        case g.EmojiCategories.NATURE:
                            return M.default.Messages.EMOJI_CATEGORY_NATURE;
                        case g.EmojiCategories.OBJECTS:
                            return M.default.Messages.EMOJI_CATEGORY_OBJECTS;
                        case g.EmojiCategories.PEOPLE:
                            return M.default.Messages.EMOJI_CATEGORY_PEOPLE;
                        case g.EmojiCategories.SYMBOLS:
                            return M.default.Messages.EMOJI_CATEGORY_SYMBOLS;
                        case g.EmojiCategories.TRAVEL:
                            return M.default.Messages.EMOJI_CATEGORY_TRAVEL;
                        case g.EmojiCategories.PREMIUM_UPSELL:
                            return M.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                        default:
                            return t ?? e
                    }
                },
                v = e => e !== S.EmojiIntention.COMMUNITY_CONTENT_ONLY;

            function B(e, t, n) {
                i.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let s = (0, S.isExternalEmojiAllowedForIntention)(n);
                return (0, u.useStateFromStores)([o.default], () => {
                    let i = e.replace(/^:/, "").replace(/:$/, "");
                    return "" === i ? null : o.default.searchWithoutFetchingLatest({
                        channel: t,
                        query: i,
                        count: 0,
                        intention: n,
                        includeExternalGuilds: s
                    })
                }, [t, n, e, s], u.statesWillNeverBeEqual)
            }

            function J(e) {
                return i.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
            }

            function k(e) {
                return i.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
            }

            function w(e, t) {
                return i.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStores)([o.default], () => null != t && o.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
            }

            function V(e) {
                return i.useEffect(() => {
                    E.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
            }

            function Y(e) {
                let t = i.useCallback(() => {
                    (0, C.default)(e)
                }, [e]);
                return i.useEffect(() => {
                    e.intention === S.EmojiIntention.REACTION && t()
                }, []), {
                    trackOnPickerOpen: t
                }
            }

            function W(e, t, n) {
                if (null == n) return g.EmojiSubCategory.NONE;
                let i = e.map(e => e.id ?? e.uniqueName ?? e.name),
                    s = t.map(e => e.id);
                return i.includes(n) ? g.EmojiSubCategory.TOP_GUILD_EMOJI : s.includes(n) ? g.EmojiSubCategory.NEWLY_ADDED_EMOJI : g.EmojiSubCategory.NONE
            }

            function K(e) {
                let t = new Set;
                return e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)))
            }

            function X(e, t) {
                return e === S.EmojiIntention.REACTION ? t ? M.default.Messages.SEARCH_FOR_SUPER_REACTION : M.default.Messages.SEARCH_FOR_REACTION : M.default.Messages.SEARCH_FOR_EMOJI
            }
        },
        802582: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("244180"),
                s = n("353118"),
                r = n("731865"),
                u = n("232733"),
                a = n("659300"),
                o = n("455472"),
                l = n("810824"),
                E = n("467006"),
                d = n("308439"),
                _ = n("38852");

            function c(e) {
                let {
                    intention: t,
                    containerWidth: n,
                    rowSize: c,
                    isBurstReaction: m,
                    analyticsObject: f
                } = e, I = r.default.getChannel(u.default.getChannelId()), T = I?.getGuildId(), C = s.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), A = null != I ? s.default.getDisambiguatedEmojiContext(I.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], O = C.slice(0, s.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), g = null != T ? s.default.getGuildEmoji(T) : [], p = Object.values(s.default.getDisambiguatedEmojiContext(I?.getGuildId()).groupedCustomEmojis ?? {}).reduce((e, t) => e += t.length, 0), {
                    topEmojis: S,
                    newlyAddedEmojis: R
                } = (0, l.getTopAndNewlyAddedEmojis)({
                    guildId: I?.getGuildId(),
                    pickerIntention: t
                }), {
                    visibleTopEmojis: N,
                    visibleNewlyAddedEmojis: M
                } = (0, o.getEmojiHotrail)({
                    topEmojis: S,
                    newlyAddedEmojis: R,
                    rowSize: c
                });
                i.default.trackWithMetadata(t === d.EmojiIntention.REACTION ? E.AnalyticEvents.REACTION_PICKER_OPENED : E.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                    width: n,
                    tab: _.ExpressionPickerViewType.EMOJI,
                    badged: !1,
                    num_expressions_favorites: A.length,
                    num_animated_expressions_favorites: A.filter(e => e?.animated).length,
                    num_custom_expressions_favorites: A.filter(a.default.isCustomEmoji).length,
                    num_standard_expressions_favorites: A.filter(e => null == e.id).length,
                    num_expressions_frecent: O.length,
                    num_animated_expressions_frecent: O.filter(e => e?.animated).length,
                    num_custom_expressions_frecent: O.filter(a.default.isCustomEmoji).length,
                    num_standard_expressions_frecent: O.filter(e => null == e.id).length,
                    num_current_guild_expressions: g.length,
                    num_custom_expressions_total: p,
                    num_expressions_top_server: N.length,
                    num_animated_expressions_top_server: N.filter(e => e.animated).length,
                    num_expressions_newly_added: M.length,
                    num_animated_expressions_newly_added: M.filter(e => e.animated).length,
                    ...t === d.EmojiIntention.REACTION && {
                        is_burst: m
                    },
                    ...null != f && {
                        location_object: f
                    }
                })
            }
        },
        455472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                getEmojiHotrail: function() {
                    return r
                }
            });
            var i = n("470079"),
                s = n("540019");

            function r(e) {
                let {
                    topEmojis: t,
                    newlyAddedEmojis: n,
                    rowSize: i = s.EMOJI_ROW_SIZE
                } = e, r = t.slice(0, i - n.length);
                return {
                    visibleTopEmojis: r,
                    visibleNewlyAddedEmojis: n,
                    allEmojis: r.concat(n)
                }
            }

            function u(e) {
                return i.useMemo(() => r(e), [e])
            }
        },
        810824: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getTopAndNewlyAddedEmojis: function() {
                    return a
                }
            });
            var i = n("203959"),
                s = n("353118"),
                r = n("308439");
            let u = [];

            function a(e) {
                let {
                    emojiStoreInstance: t = s.default,
                    guildId: n,
                    pickerIntention: i
                } = e;
                return {
                    topEmojis: i !== r.EmojiIntention.REACTION ? t.getTopEmoji(n) : u,
                    newlyAddedEmojis: i !== r.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(n) : u
                }
            }

            function o(e, t) {
                return (0, i.useStateFromStoresObject)([s.default], () => a({
                    emojiStoreInstance: s.default,
                    guildId: e,
                    pickerIntention: t
                }), [e, t])
            }
        },
        778898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchTopEmojis: function() {
                    return u
                },
                updateNewlyAddedEmojiSeenAcknowledged: function() {
                    return o
                },
                updateNewlyAddedLastSeen: function() {
                    return a
                }
            });
            var i = n("454836"),
                s = n("312916"),
                r = n("467006");

            function u(e) {
                s.default.dispatch({
                    type: "TOP_EMOJIS_FETCH",
                    guildId: e
                }), i.default.get({
                    url: r.Endpoints.TOP_EMOJIS_FOR_GUILD(e),
                    oldFormErrors: !0
                }).then(t => s.default.dispatch({
                    type: "TOP_EMOJIS_FETCH_SUCCESS",
                    guildId: e,
                    topEmojisMetadata: t.body.items.map(e => ({
                        emojiId: e.emoji_id,
                        rank: e.emoji_rank
                    })).sort((e, t) => e.rank - t.rank)
                }), () => s.default.dispatch({
                    type: "TOP_EMOJIS_FETCH_FAILURE",
                    guildId: e
                }))
            }

            function a(e, t) {
                s.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
                }), null != e && null != t && s.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
                    guildId: e,
                    emojiId: t
                })
            }

            function o(e, t) {
                null != e && null != t && s.default.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",
                    guildId: e,
                    emojiId: t
                })
            }
        },
        689456: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeFetchTopEmojisByGuild: function() {
                    return a
                }
            });
            var i = n("871831"),
                s = n("353118"),
                r = n("84053"),
                u = n("778898");

            function a(e) {
                if (null == e || null == i.default.getCurrentUser()) return;
                let t = s.default.getTopEmojisMetadata(e);
                if (null != t) {
                    let {
                        topEmojisTTL: e
                    } = t;
                    if (null == e || Date.now() < e) return
                }!r.default.getIsFetching(e) && (0, u.fetchTopEmojis)(e)
            }
        },
        274532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BANNER_ASPECT_RATIO: function() {
                    return T
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return o
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return C
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return _
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return O
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return I
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return f
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return g
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return p
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return R
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return S
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return M
                },
                MessageTypes: function() {
                    return u
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return A
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return m
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return c
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return E
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return l
                },
                UploadTypes: function() {
                    return r
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return N
                }
            });
            var i, s, r, u, a = n("442802");
            (i = r || (r = {}))[i.AVATAR = 0] = "AVATAR", i[i.BANNER = 1] = "BANNER", i[i.GUILD_BANNER = 2] = "GUILD_BANNER", i[i.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", i[i.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", i[i.HOME_HEADER = 5] = "HOME_HEADER", i[i.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let o = 568,
                l = 2400,
                E = 848,
                d = 2400,
                _ = 1350,
                c = 2400,
                m = 960,
                f = 2400,
                I = 600,
                T = 17 / 6,
                C = 16 / 9,
                A = 2.5,
                O = 4,
                g = 568 / (17 / 6),
                p = 568 / (16 / 9),
                S = 227.2,
                R = 142,
                N = a.BACKGROUND_REPLACEMENT_SIZE.width / a.BACKGROUND_REPLACEMENT_SIZE.height,
                M = o / N;
            (s = u || (u = {}))[s.CROP_GIF_START = 0] = "CROP_GIF_START", s[s.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", s[s.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        650742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("735250");
            n("470079");
            var s = n("803997"),
                r = n.n(s),
                u = n("661223"),
                a = n("974328"),
                o = n("620412"),
                l = n("986821"),
                E = n("569264"),
                d = n("663698"),
                _ = n("521588"),
                c = n("828031"),
                m = n("871831"),
                f = n("416573"),
                I = n("470526"),
                T = n("416912"),
                C = n("985053"),
                A = n("428037"),
                O = n("488867"),
                g = n("171168"),
                p = n("467006"),
                S = n("30175"),
                R = n("27179"),
                N = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: s,
                        onClick: N,
                        size: M,
                        className: y,
                        trialId: j,
                        isTrialCTA: h,
                        buttonText: L,
                        buttonTextClassName: P,
                        iconClassName: D,
                        postSuccessGuild: U,
                        onSubscribeModalClose: G,
                        premiumModalAnalyticsLocation: F,
                        showIcon: x = !0,
                        disableShine: H,
                        applicationId: b,
                        giftMessage: v,
                        overrideDisabledButtonText: B,
                        shinyButtonClassName: J,
                        ...k
                    } = e, w = (0, u.useStateFromStores)([m.default], () => m.default.getCurrentUser()), V = (0, u.useStateFromStores)([I.default], () => I.default.isFocused()), Y = (0, u.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()), {
                        analyticsLocations: W
                    } = (0, l.default)(), K = e => {
                        if (e.preventDefault(), null == w) {
                            (0, _.transitionTo)(p.Routes.LOGIN);
                            return
                        }
                        if (N?.(e), Y?.status === p.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, E.trackPremiumSettingsPaneOpened)(), o.default.open(p.UserSettingsSections.PREMIUM), G?.(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: s,
                                isGift: r,
                                subscriptionTier: u,
                                trialId: o,
                                postSuccessGuild: l,
                                onSubscribeModalClose: E,
                                analyticsLocations: _,
                                premiumModalAnalyticsLocation: c,
                                applicationId: m,
                                giftMessage: f
                            } = e;
                            if (!t) {
                                (0, a.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("650742@2004:2037").then(n.bind(n, "325418"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...s
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...s,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!s) {
                                (0, a.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("650742@2436:2468").then(n.bind(n, "159082"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...s
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...s,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let I = p.AnalyticsObjectTypes.BUY;
                            null != o ? I = p.AnalyticsObjectTypes.TRIAL : r && (I = p.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: r,
                                initialPlanId: null,
                                subscriptionTier: u,
                                analyticsLocations: _,
                                analyticsObject: {
                                    object: p.AnalyticsObjects.BUTTON_CTA,
                                    objectType: I,
                                    ...c
                                },
                                trialId: o,
                                postSuccessGuild: l,
                                onClose: E,
                                applicationId: m,
                                giftMessage: f
                            })
                        }({
                            isClaimed: w.isClaimed(),
                            isVerified: w.verified,
                            isGift: t,
                            subscriptionTier: s,
                            trialId: j,
                            postSuccessGuild: U,
                            onSubscribeModalClose: G,
                            analyticsLocations: W,
                            premiumModalAnalyticsLocation: F,
                            applicationId: b,
                            giftMessage: v
                        })
                    };
                    if (h) return (0, i.jsxs)(a.Button, {
                        size: M,
                        className: y,
                        innerClassName: R.premiumSubscribeButton,
                        look: a.Button.Looks.INVERTED,
                        onClick: K,
                        ...k,
                        children: [x && (0, i.jsx)(A.default, {
                            className: R.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: r()(R.buttonText, P),
                            children: L ?? S.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(a.Button, {
                        size: M,
                        className: y,
                        innerClassName: R.giftButton,
                        color: a.Button.Colors.PRIMARY,
                        onClick: K,
                        ...k,
                        children: [(0, i.jsx)(C.default, {
                            className: R.giftIcon
                        }), (0, i.jsx)("span", {
                            className: r()(R.buttonText, P),
                            children: L ?? S.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let X = S.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        q = null != Y ? (0, O.getPremiumPlanItem)(Y) : null,
                        Z = null != q ? O.default.getPremiumType(q.planId) : w?.premiumType,
                        z = s === g.PremiumSubscriptionSKUs.TIER_2 && null != Z && [g.PremiumTypes.TIER_0, g.PremiumTypes.TIER_1].includes(Z);
                    z && (X = S.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let $ = null != Y && Y.status !== p.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, c.isNoneSubscription)(Y.planId) && !z,
                        Q = $ ? B ?? function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, s = null;
                            if (null != t && t !== g.PremiumSubscriptionSKUs.LEGACY && t !== g.PremiumSubscriptionSKUs.TIER_0 && t !== g.PremiumSubscriptionSKUs.TIER_1 && t !== g.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: s
                            };
                            let r = null != t ? g.PremiumSubscriptionSKUToPremiumType[t] : null,
                                u = null != r ? g.PremiumTypeOrder[r] : null,
                                a = null != n ? g.PremiumTypeOrder[n] : null;
                            return null != a && null != u && u < a ? (i = S.default.Messages.APPLICATION_STORE_GET_PREMIUM, s = S.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != r && null != n && r === n ? (i = S.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, s = S.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == r && null != n && n === g.PremiumTypes.TIER_2 && (s = S.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: s
                            }
                        }({
                            ctaSubscriptionSkuId: s,
                            currentPremiumType: Z
                        }) : null;

                    function ee(e) {
                        return (0, i.jsxs)(T.default, {
                            disabled: $,
                            onClick: K,
                            innerClassName: R.premiumSubscribeButton,
                            color: s === g.PremiumSubscriptionSKUs.TIER_1 ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                            size: M,
                            className: J,
                            wrapperClassName: y,
                            pauseAnimation: !V || H,
                            ...k,
                            ...e,
                            children: [x && (0, i.jsx)(A.default, {
                                className: r()(R.premiumIcon, D)
                            }), (0, i.jsx)("span", {
                                className: r()(R.buttonText, P),
                                children: Q?.disabledButtonText ?? L ?? X
                            })]
                        })
                    }
                    return Q?.disabledButtonTooltipText != null ? (0, i.jsx)(a.Tooltip, {
                        text: Q.disabledButtonTooltipText,
                        children: ee
                    }) : ee()
                }
        },
        428037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("735250");
            n("470079");
            var s = n("336328"),
                r = n("813138"),
                u = n("262113"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        viewBox: r = "0 0 24 24",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: r,
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, r.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        94731: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return u
                }
            });
            var i = n("735250");
            n("470079");
            var s = n("600186"),
                r = n("11768");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: a
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=19005.e21e3d20a946a0bcd08e.js.map