(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34426"], {
        564967: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
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
            var o = r
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
                    return x
                },
                allowUnicodeEmojiForIntention: function() {
                    return L
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
                    return B
                },
                getSearchPlaceholder: function() {
                    return q
                }
            }), i("843762"), i("424973"), i("222007"), i("808653"), i("781738");
            var n = i("884691");
            i("375128");
            var r = i("446674"),
                o = i("716241"),
                a = i("385976"),
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
                p = i("255214"),
                I = i("352046"),
                C = i("115279"),
                y = i("49111"),
                O = i("958706"),
                j = i("13030"),
                T = i("646718"),
                S = i("782340");
            let A = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
                    (0, u.maybeFetchTopEmojisByGuild)(i);
                    let o = (0, O.isExternalEmojiAllowedForIntention)(e),
                        s = G(i),
                        d = b(i),
                        _ = (0, r.useStateFromStoresArray)([E.default], () => E.default.getSortedPackIds(), []),
                        {
                            topEmojis: g,
                            newlyAddedEmojis: y,
                            backfillEmojis: j
                        } = (0, I.default)(i, e),
                        {
                            allEmojis: T
                        } = (0, p.default)({
                            topEmojis: g,
                            newlyAddedEmojis: y,
                            backfillEmojis: j
                        }),
                        {
                            viewAndUseEnabled: A
                        } = (0, l.useInventoryGuildPacksUserExperiment)({
                            autoTrackExposure: !1
                        }),
                        h = (0, r.useStateFromStores)([a.default], () => a.default.getDisambiguatedEmojiContext(i), [i]),
                        M = (0, r.useStateFromStores)([c.default], () => {
                            var e;
                            return null === (e = c.default.getGuild(i)) || void 0 === e ? void 0 : e.name
                        }),
                        R = n.useMemo(() => {
                            let n = h.getGroupedCustomEmoji(),
                                r = m.default.getFlattenedGuildIds(),
                                u = [],
                                l = (r, o) => {
                                    for (let a of r) {
                                        let r;
                                        if (o === C.EmojiCategoryTypes.PACK ? r = E.default.getPackByPackId({
                                                packId: a
                                            }) : o === C.EmojiCategoryTypes.GUILD && (r = c.default.getGuild(a)), null == r) continue;
                                        let s = null == n ? void 0 : n[r.id];
                                        if (null == s || 0 === s.length || null != t && s.every(i => f.default.isEmojiFiltered({
                                                emoji: i,
                                                channel: t,
                                                intention: e,
                                                canViewAndUsePackEmoji: A
                                            }))) continue;
                                        let l = null;
                                        if (o === C.EmojiCategoryTypes.PACK) {
                                            let e = r;
                                            l = {
                                                type: C.EmojiCategoryTypes.PACK,
                                                pack: e,
                                                id: e.id
                                            }
                                        } else o === C.EmojiCategoryTypes.GUILD && (l = {
                                            type: C.EmojiCategoryTypes.GUILD,
                                            guild: r
                                        });
                                        null != l && (r.id === i ? u.unshift(l) : u.push(l))
                                    }
                                };
                            return l(_, C.EmojiCategoryTypes.PACK), l(r, C.EmojiCategoryTypes.GUILD), a.default.categories.reduce((t, n) => {
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
                                    !o && (e = u.filter(e => e.type === C.EmojiCategoryTypes.GUILD && e.guild.id === i)), t.push(...e)
                                } else if (L(e)) t.push({
                                    type: C.EmojiCategoryTypes.UNICODE,
                                    id: n,
                                    name: n
                                });
                                return t
                            }, [])
                        }, [h, t, i, e, T.length, M, _, s.length, d.length, o, A]);
                    return R
                },
                h = e => {
                    let t = (null == e ? void 0 : e.getGuildId()) != null;
                    _.default.track(y.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_page: t ? y.AnalyticsPages.GUILD_CHANNEL : y.AnalyticsPages.DM_CHANNEL,
                        location_section: null != e ? y.AnalyticsSections.EMOJI_PICKER_POPOUT : y.AnalyticsSections.CUSTOM_STATUS_MODAL
                    })
                },
                M = (e, t) => {
                    o.default.trackWithMetadata(y.AnalyticEvents.SEARCH_STARTED, {
                        search_type: null != t && t === O.EmojiIntention.REACTION ? y.SearchTypes.EMOJI_REACTION : y.SearchTypes.EMOJI,
                        location: e
                    })
                },
                R = (e, t, i, n, r) => {
                    o.default.trackWithMetadata(y.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: null != r && r === O.EmojiIntention.REACTION ? y.SearchTypes.EMOJI_REACTION : y.SearchTypes.EMOJI,
                        total_results: e,
                        num_results_locked: t,
                        query: n,
                        location: i
                    })
                },
                N = (e, t, i, n) => {
                    var r;
                    let a = null !== (r = e.uniqueName) && void 0 !== r ? r : e.name;
                    o.default.trackWithMetadata(y.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        search_type: null != n && n === O.EmojiIntention.REACTION ? y.SearchTypes.EMOJI_REACTION : y.SearchTypes.EMOJI,
                        location: t,
                        expression_guild_id: D(e),
                        expression_pack_id: e.type === s.EmojiTypes.PACK ? e.packId : void 0,
                        emoji_id: e.id,
                        emoji_name: a,
                        is_custom: null != e.id,
                        is_animated: e.animated,
                        query: i
                    })
                },
                P = (e, t) => {
                    o.default.trackWithMetadata(y.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        search_type: y.SearchTypes.EMOJI,
                        query: t,
                        location: e
                    })
                },
                v = e => {
                    let {
                        emoji: t,
                        subCategory: i,
                        position: n,
                        backfillEmoji: r,
                        newlyAddedHighlight: a
                    } = e;
                    o.default.trackWithMetadata(y.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                        expression_section: null == i ? void 0 : i.toString(),
                        newly_added_highlight: a,
                        emoji_id: t.id,
                        emoji_name: t.name,
                        emoji_animated: t.animated,
                        emoji_backfilled: r,
                        emoji_position: n
                    })
                },
                k = e => {
                    var t;
                    let i, {
                        emoji: n,
                        location: r,
                        pickerIntention: a,
                        category: u,
                        subCategory: l = C.EmojiSubCategory.NONE,
                        position: E,
                        backfillEmoji: d,
                        newlyAddedHighlight: c,
                        isBurstReaction: m
                    } = e;
                    switch (a) {
                        case O.EmojiIntention.REACTION:
                            i = m ? T.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : T.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            break;
                        case O.EmojiIntention.STATUS:
                            i = T.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                            break;
                        default:
                            i = T.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
                    }
                    let _ = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
                    o.default.trackWithMetadata(y.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: i,
                        location: r,
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
                    } = e, r = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
                    o.default.trackWithMetadata(y.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: n,
                        expression_type: j.ExpressionPickerViewType.EMOJI,
                        expression_id: i.id,
                        expression_name: r,
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
                x = (e, t, i) => {
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
                L = e => e !== O.EmojiIntention.COMMUNITY_CONTENT_ONLY;

            function J(e, t, i) {
                let {
                    viewAndUseEnabled: o
                } = (0, l.useInventoryGuildPacksUserExperiment)({
                    autoTrackExposure: !1
                });
                n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let s = (0, O.isExternalEmojiAllowedForIntention)(i);
                return (0, r.useStateFromStores)([a.default], () => {
                    let n = e.replace(/^:/, "").replace(/:$/, "");
                    return "" === n ? null : a.default.searchWithoutFetchingLatest({
                        channel: t,
                        query: n,
                        count: 0,
                        intention: i,
                        includeExternalGuilds: s,
                        canViewAndUsePackEmoji: o
                    })
                }, [t, i, e, s, o], r.statesWillNeverBeEqual)
            }

            function G(e) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, r.useStateFromStoresArray)([a.default], () => a.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
            }

            function b(e) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, r.useStateFromStoresArray)([a.default], () => a.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
            }

            function w(e, t) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, r.useStateFromStores)([a.default], () => null != t && a.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
            }

            function Y(e) {
                return n.useEffect(() => {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, r.useStateFromStoresArray)([a.default], () => a.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
            }

            function W(e) {
                let t = n.useCallback(() => {
                    (0, g.default)(e)
                }, [e]);
                return n.useEffect(() => {
                    e.intention === O.EmojiIntention.REACTION && t()
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
                    r = t.map(e => e.id);
                return n.includes(i) ? C.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(i) ? C.EmojiSubCategory.NEWLY_ADDED_EMOJI : C.EmojiSubCategory.NONE
            }

            function B(e) {
                let t = new Set,
                    i = e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)));
                return i
            }

            function q(e, t) {
                return e === O.EmojiIntention.REACTION ? t ? S.default.Messages.SEARCH_FOR_SUPER_REACTION : S.default.Messages.SEARCH_FOR_REACTION : S.default.Messages.SEARCH_FOR_EMOJI
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
                o = i("166465"),
                a = i("692171"),
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
                    isBurstReaction: p,
                    analyticsObject: I
                } = e, C = s.default.getChannel(u.default.getChannelId()), y = null == C ? void 0 : C.getGuildId(), O = r.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), j = null != C ? r.default.getDisambiguatedEmojiContext(C.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], T = O.slice(0, r.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), S = null != y ? r.default.getGuildEmoji(y) : [], A = o.default.getPacksForUser().map(e => e.content.emojis).reduce((e, t) => e.concat(t), []), h = null !== (t = r.default.getDisambiguatedEmojiContext(null == C ? void 0 : C.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}, M = Object.values(h).reduce((e, t) => e += t.length, 0), {
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
                }), D = a.default.remainingBurstCurrency;
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
                        is_burst: p,
                        burst_reaction_balance: D
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
                    return o
                },
                default: function() {
                    return a
                }
            });
            var n = i("884691"),
                r = i("115279");

            function o(e) {
                let {
                    topEmojis: t,
                    newlyAddedEmojis: i,
                    backfillEmojis: n,
                    rowSize: o = r.EMOJI_ROW_SIZE
                } = e, a = t.slice(0, o - i.length), s = [];
                return a.length + i.length < o && (s = n.slice(0, o - t.length - i.length)), {
                    visibleTopEmojis: a,
                    visibleNewlyAddedEmojis: i,
                    visibleBackfillEmojis: s,
                    allEmojis: a.concat(s).concat(i)
                }
            }

            function a(e) {
                return n.useMemo(() => o(e), [e])
            }
        },
        352046: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getTopAndNewlyAddedEmojis: function() {
                    return l
                },
                default: function() {
                    return E
                }
            });
            var n = i("65597"),
                r = i("385976"),
                o = i("564967"),
                a = i("61559"),
                s = i("958706");
            let u = [];

            function l(e) {
                let {
                    emojiStoreInstance: t = r.default,
                    guildId: i,
                    pickerIntention: n,
                    shouldSeeTopEmojis: l = (0, a.getEmojiPickerDiscoveryExperimentConfig)().shouldSeeTopEmojiBar,
                    shouldSeeNewlyAddedEmoji: E = (0, a.getEmojiPickerDiscoveryExperimentConfig)().shouldSeeNewlyAddedEmoji,
                    shouldSeeBackfillEmojis: d = o.default.getCurrentConfig({
                        location: "fe926e_1"
                    }, {
                        autoTrackExposure: !1
                    }).shouldBackfillEmojis
                } = e;
                return {
                    topEmojis: n !== s.EmojiIntention.REACTION && l ? t.getTopEmoji(i) : u,
                    newlyAddedEmojis: n !== s.EmojiIntention.REACTION && E ? t.getNewlyAddedEmoji(i) : u,
                    backfillEmojis: n !== s.EmojiIntention.REACTION && l && d ? t.getBackfillTopEmojis(i) : u
                }
            }

            function E(e, t) {
                let {
                    shouldSeeNewlyAddedEmoji: i,
                    shouldSeeTopEmojiBar: s
                } = (0, a.useEmojiPickerDiscoveryExperiment)(!0), {
                    shouldBackfillEmojis: u
                } = o.default.useExperiment({
                    location: "fe926e_1"
                }, {
                    autoTrackExposure: !1
                });
                return (0, n.useStateFromStoresObject)([r.default], () => l({
                    emojiStoreInstance: r.default,
                    guildId: e,
                    pickerIntention: t,
                    shouldSeeTopEmojis: s,
                    shouldSeeNewlyAddedEmoji: i,
                    shouldSeeBackfillEmojis: u
                }), [e, t, s, i, u])
            }
        },
        305781: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchTopEmojis: function() {
                    return a
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
                o = i("49111");

            function a(e) {
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
                    return u
                }
            });
            var n = i("61559"),
                r = i("697218"),
                o = i("385976"),
                a = i("26430"),
                s = i("305781");

            function u(e) {
                if (null == e) return;
                let t = r.default.getCurrentUser();
                if (null == t) return;
                let {
                    shouldSeeTopEmojiBar: i
                } = (0, n.getEmojiPickerDiscoveryExperimentConfig)();
                if (!i) return;
                let u = o.default.getTopEmojisMetadata(e);
                if (null != u) {
                    let {
                        topEmojisTTL: e
                    } = u;
                    if (null == e || Date.now() < e) return
                }!a.default.getIsFetching(e) && (0, s.fetchTopEmojis)(e)
            }
        }
    }
]);
//# sourceMappingURL=34426.aefa163dd8b10b7ac8cc.js.map