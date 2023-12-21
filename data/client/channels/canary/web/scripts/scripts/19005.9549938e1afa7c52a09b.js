(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19005"], {
        813138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return l
                }
            });
            var i = n("21189"),
                r = n("227094"),
                o = n("261047"),
                u = n("735250");
            n("470079");
            var s = n("600186"),
                a = n("262113"),
                l = function(e) {
                    var t = e.width,
                        n = e.height,
                        l = e.color,
                        c = void 0 === l ? s.default.colors.INTERACTIVE_NORMAL : l,
                        E = e.colorClass,
                        d = void 0 === E ? "" : E,
                        _ = (0, o._)(e, ["width", "height", "color", "colorClass"]);
                    return (0, u.jsxs)("svg", (0, r._)((0, i._)({}, (0, a.default)(_)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0, u.jsx)("path", {
                            fill: "string" == typeof c ? c : c.css,
                            d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                            className: d
                        }), (0, u.jsx)("path", {
                            fill: "string" == typeof c ? c : c.css,
                            fillRule: "evenodd",
                            d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                            clipRule: "evenodd",
                            className: d
                        }), (0, u.jsx)("path", {
                            fill: "string" == typeof c ? c : c.css,
                            d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                            className: d
                        })]
                    }))
                }
        },
        569264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                allowUnicodeEmojiForIntention: function() {
                    return F
                },
                dedupeUnicodeEmojis: function() {
                    return Y
                },
                getAriaIdForEmojiCategory: function() {
                    return b
                },
                getEmojiSubCategory: function() {
                    return K
                },
                getSearchPlaceholder: function() {
                    return W
                },
                getStringForEmojiCategory: function() {
                    return x
                },
                trackEmojiFavorited: function() {
                    return U
                },
                trackEmojiFocus: function() {
                    return L
                },
                trackEmojiSearchEmpty: function() {
                    return P
                },
                trackEmojiSearchResultsViewed: function() {
                    return h
                },
                trackEmojiSearchSelect: function() {
                    return v
                },
                trackEmojiSearchStart: function() {
                    return j
                },
                trackEmojiSelect: function() {
                    return D
                },
                trackPremiumSettingsPaneOpened: function() {
                    return M
                },
                useEmojiCategories: function() {
                    return N
                },
                useEmojiInPriorityOrder: function() {
                    return J
                },
                useEmojiSearchResults: function() {
                    return H
                },
                useFavoriteEmojis: function() {
                    return B
                },
                useFrequentlyUsedEmojis: function() {
                    return k
                },
                useIsFavoriteEmoji: function() {
                    return w
                },
                useTrackEmojiPickerOpened: function() {
                    return V
                }
            });
            var i = n("761020");
            n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("733860"), n("653041"), n("724458"), n("462848"), n("293114"), n("757143"), n("301563"), n("330740"), n("849202"), n("814951"), n("363505"), n("568603"), n("128242");
            var r = n("470079");
            n("423650");
            var o = n("661223"),
                u = n("244180"),
                s = n("353118"),
                a = n("679024"),
                l = n("689456"),
                c = n("557253"),
                E = n("792241"),
                d = n("259537"),
                _ = n("327271"),
                f = n("880315"),
                m = n("328470"),
                I = n("659300"),
                T = n("802582"),
                C = n("455472"),
                p = n("810824"),
                A = n("540019"),
                O = n("467006"),
                g = n("308439"),
                S = n("38852"),
                y = n("171168"),
                R = n("30175"),
                N = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
                    (0, l.maybeFetchTopEmojisByGuild)(n);
                    var u = (0, g.isExternalEmojiAllowedForIntention)(e),
                        a = k(n),
                        d = B(n),
                        m = (0, o.useStateFromStoresArray)([E.default], function() {
                            return E.default.getSortedPackIds()
                        }, []),
                        T = (0, p.default)(n, e),
                        O = T.topEmojis,
                        S = T.newlyAddedEmojis,
                        y = (0, C.default)({
                            topEmojis: O,
                            newlyAddedEmojis: S
                        }).allEmojis,
                        N = (0, c.useInventoryGuildPacksUserExperiment)({
                            autoTrackExposure: !1
                        }).viewAndUseEnabled,
                        M = (0, o.useStateFromStores)([s.default], function() {
                            return s.default.getDisambiguatedEmojiContext(n)
                        }, [n]),
                        j = (0, o.useStateFromStores)([_.default], function() {
                            var e;
                            return null === (e = _.default.getGuild(n)) || void 0 === e ? void 0 : e.name
                        });
                    return r.useMemo(function() {
                        var r = M.getGroupedCustomEmoji(),
                            o = f.default.getFlattenedGuildIds(),
                            l = [],
                            c = function(i, o) {
                                var u = !0,
                                    s = !1,
                                    a = void 0;
                                try {
                                    for (var c, d = i[Symbol.iterator](); !(u = (c = d.next()).done); u = !0) {
                                        var f = c.value,
                                            m = void 0;
                                        if (o === A.EmojiCategoryTypes.PACK ? m = E.default.getPackByPackId({
                                                packId: f
                                            }) : o === A.EmojiCategoryTypes.GUILD && (m = _.default.getGuild(f)), null != m) {
                                            var T = null == r ? void 0 : r[m.id];
                                            if (!(null == T || 0 === T.length || null != t && T.every(function(n) {
                                                    return I.default.isEmojiFiltered({
                                                        emoji: n,
                                                        channel: t,
                                                        intention: e,
                                                        canViewAndUsePackEmoji: N
                                                    })
                                                }))) {
                                                var C = null;
                                                if (o === A.EmojiCategoryTypes.PACK) {
                                                    var p = m;
                                                    C = {
                                                        type: A.EmojiCategoryTypes.PACK,
                                                        pack: p,
                                                        id: p.id
                                                    }
                                                } else o === A.EmojiCategoryTypes.GUILD && (C = {
                                                    type: A.EmojiCategoryTypes.GUILD,
                                                    guild: m
                                                });
                                                null != C && (m.id === n ? l.unshift(C) : l.push(C))
                                            }
                                        }
                                    }
                                } catch (e) {
                                    s = !0, a = e
                                } finally {
                                    try {
                                        !u && null != d.return && d.return()
                                    } finally {
                                        if (s) throw a
                                    }
                                }
                            };
                        return c(m, A.EmojiCategoryTypes.PACK), c(o, A.EmojiCategoryTypes.GUILD), s.default.categories.reduce(function(t, r) {
                            if (r === A.EmojiCategories.TOP_GUILD_EMOJI) {
                                if (0 === y.length) return t;
                                t.push({
                                    type: A.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                    id: r,
                                    name: R.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                        guildName: j
                                    })
                                })
                            } else if (r === A.EmojiCategories.RECENT) {
                                if (0 === a.length) return t;
                                t.push({
                                    type: A.EmojiCategoryTypes.RECENT,
                                    id: r,
                                    name: R.default.Messages.EMOJI_CATEGORY_RECENT
                                })
                            } else if (r === A.EmojiCategories.FAVORITES) {
                                if (0 === d.length) return t;
                                t.push({
                                    type: A.EmojiCategoryTypes.FAVORITES,
                                    id: r,
                                    name: R.default.Messages.CATEGORY_FAVORITE
                                })
                            } else if (r === A.EmojiCategories.CUSTOM) {
                                var o = l;
                                !u && (o = l.filter(function(e) {
                                    return e.type === A.EmojiCategoryTypes.GUILD && e.guild.id === n
                                })), t.push.apply(t, (0, i._)(o))
                            } else if (F(e)) t.push({
                                type: A.EmojiCategoryTypes.UNICODE,
                                id: r,
                                name: r
                            });
                            return t
                        }, [])
                    }, [M, t, n, e, y.length, j, m, a.length, d.length, u, N])
                },
                M = function(e) {
                    var t = (null == e ? void 0 : e.getGuildId()) != null;
                    m.default.track(O.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_page: t ? O.AnalyticsPages.GUILD_CHANNEL : O.AnalyticsPages.DM_CHANNEL,
                        location_section: null != e ? O.AnalyticsSections.EMOJI_PICKER_POPOUT : O.AnalyticsSections.CUSTOM_STATUS_MODAL
                    })
                },
                j = function(e, t) {
                    u.default.trackWithMetadata(O.AnalyticEvents.SEARCH_STARTED, {
                        search_type: null != t && t === g.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                        location: e
                    })
                },
                h = function(e, t, n, i, r) {
                    u.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: null != r && r === g.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                        total_results: e,
                        num_results_locked: t,
                        query: i,
                        location: n
                    })
                },
                v = function(e, t, n, i) {
                    var r, o = null !== (r = e.uniqueName) && void 0 !== r ? r : e.name;
                    u.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        search_type: null != i && i === g.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
                        location: t,
                        expression_guild_id: G(e),
                        expression_pack_id: e.type === a.EmojiTypes.PACK ? e.packId : void 0,
                        emoji_id: e.id,
                        emoji_name: o,
                        is_custom: null != e.id,
                        is_animated: e.animated,
                        query: n
                    })
                },
                P = function(e, t) {
                    u.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        search_type: O.SearchTypes.EMOJI,
                        query: t,
                        location: e
                    })
                },
                L = function(e) {
                    var t = e.emoji,
                        n = e.subCategory,
                        i = e.position,
                        r = e.newlyAddedHighlight;
                    u.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                        expression_section: null == n ? void 0 : n.toString(),
                        newly_added_highlight: r,
                        emoji_id: t.id,
                        emoji_name: t.name,
                        emoji_animated: t.animated,
                        emoji_position: i
                    })
                },
                D = function(e) {
                    var t, n, i = e.emoji,
                        r = e.location,
                        o = e.pickerIntention,
                        s = e.category,
                        l = e.subCategory,
                        c = void 0 === l ? A.EmojiSubCategory.NONE : l,
                        E = e.position,
                        d = e.newlyAddedHighlight,
                        _ = e.isBurstReaction;
                    switch (o) {
                        case g.EmojiIntention.REACTION:
                            t = _ ? y.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : y.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            break;
                        case g.EmojiIntention.STATUS:
                            t = y.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                            break;
                        default:
                            t = y.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
                    }
                    var f = null !== (n = i.uniqueName) && void 0 !== n ? n : i.name;
                    u.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: t,
                        location: r,
                        expression_id: i.id,
                        expression_name: f,
                        expression_guild_id: G(i),
                        expression_pack_id: i.type === a.EmojiTypes.PACK ? i.packId : void 0,
                        is_custom: null != i.id,
                        is_animated: i.animated,
                        expression_picker_section: s,
                        expression_section: null == c ? void 0 : c.toString(),
                        emoji_position: E,
                        newly_added_highlight: d,
                        is_burst: _
                    })
                },
                U = function(e) {
                    var t, n = e.emoji,
                        i = e.location,
                        r = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
                    u.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: i,
                        expression_type: S.ExpressionPickerViewType.EMOJI,
                        expression_id: n.id,
                        expression_name: r,
                        expression_guild_id: G(n),
                        expression_pack_id: n.type === a.EmojiTypes.PACK ? n.packId : void 0,
                        is_custom: null != n.id,
                        is_animated: n.animated
                    })
                };

            function G(e) {
                return e.type !== a.EmojiTypes.PACK ? e.guildId : void 0
            }
            var b = function(e, t, n) {
                    switch (e.type) {
                        case A.EmojiCategoryTypes.GUILD:
                            if (null != t) return t.toString();
                            return "";
                        case A.EmojiCategoryTypes.PACK:
                            if (null != n) return n.name;
                            return e.id;
                        default:
                            return e.id
                    }
                },
                x = function(e, t, n) {
                    switch (e) {
                        case A.EmojiCategories.TOP_GUILD_EMOJI:
                            return R.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: t
                            });
                        case A.EmojiCategories.RECENT:
                            return R.default.Messages.EMOJI_CATEGORY_RECENT;
                        case A.EmojiCategories.FAVORITES:
                            return R.default.Messages.CATEGORY_FAVORITE;
                        case A.EmojiCategories.ACTIVITY:
                            return R.default.Messages.EMOJI_CATEGORY_ACTIVITY;
                        case A.EmojiCategories.FLAGS:
                            return R.default.Messages.EMOJI_CATEGORY_FLAGS;
                        case A.EmojiCategories.FOOD:
                            return R.default.Messages.EMOJI_CATEGORY_FOOD;
                        case A.EmojiCategories.NATURE:
                            return R.default.Messages.EMOJI_CATEGORY_NATURE;
                        case A.EmojiCategories.OBJECTS:
                            return R.default.Messages.EMOJI_CATEGORY_OBJECTS;
                        case A.EmojiCategories.PEOPLE:
                            return R.default.Messages.EMOJI_CATEGORY_PEOPLE;
                        case A.EmojiCategories.SYMBOLS:
                            return R.default.Messages.EMOJI_CATEGORY_SYMBOLS;
                        case A.EmojiCategories.TRAVEL:
                            return R.default.Messages.EMOJI_CATEGORY_TRAVEL;
                        case A.EmojiCategories.PREMIUM_UPSELL:
                            return R.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                        default:
                            return null != n ? R.default.Messages.EMOJI_CATEGORY_PACK.format({
                                packName: n
                            }) : null != t ? t : e
                    }
                },
                F = function(e) {
                    return e !== g.EmojiIntention.COMMUNITY_CONTENT_ONLY
                };

            function H(e, t, n) {
                var i = (0, c.useInventoryGuildPacksUserExperiment)({
                    autoTrackExposure: !1
                }).viewAndUseEnabled;
                r.useEffect(function() {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                var u = (0, g.isExternalEmojiAllowedForIntention)(n);
                return (0, o.useStateFromStores)([s.default], function() {
                    var r = e.replace(/^:/, "").replace(/:$/, "");
                    return "" === r ? null : s.default.searchWithoutFetchingLatest({
                        channel: t,
                        query: r,
                        count: 0,
                        intention: n,
                        includeExternalGuilds: u,
                        canViewAndUsePackEmoji: i
                    })
                }, [t, n, e, u, i], o.statesWillNeverBeEqual)
            }

            function k(e) {
                return r.useEffect(function() {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, o.useStateFromStoresArray)([s.default], function() {
                    return s.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest()
                })
            }

            function B(e) {
                return r.useEffect(function() {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, o.useStateFromStoresArray)([s.default], function() {
                    return s.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest
                })
            }

            function w(e, t) {
                return r.useEffect(function() {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, o.useStateFromStores)([s.default], function() {
                    return null != t && s.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t)
                })
            }

            function J(e) {
                return r.useEffect(function() {
                    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, o.useStateFromStoresArray)([s.default], function() {
                    return s.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest()
                })
            }

            function V(e) {
                var t = r.useCallback(function() {
                    (0, T.default)(e)
                }, [e]);
                return r.useEffect(function() {
                    e.intention === g.EmojiIntention.REACTION && t()
                }, []), {
                    trackOnPickerOpen: t
                }
            }

            function K(e, t, n) {
                if (null == n) return A.EmojiSubCategory.NONE;
                var i = e.map(function(e) {
                        var t, n;
                        return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name
                    }),
                    r = t.map(function(e) {
                        return e.id
                    });
                return i.includes(n) ? A.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(n) ? A.EmojiSubCategory.NEWLY_ADDED_EMOJI : A.EmojiSubCategory.NONE
            }

            function Y(e) {
                var t = new Set;
                return e.filter(function(e) {
                    return null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0))
                })
            }

            function W(e, t) {
                return e === g.EmojiIntention.REACTION ? t ? R.default.Messages.SEARCH_FOR_SUPER_REACTION : R.default.Messages.SEARCH_FOR_REACTION : R.default.Messages.SEARCH_FOR_EMOJI
            }
        },
        802582: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("21189");
            n("849202"), n("363505"), n("724458"), n("357629"), n("814951"), n("69485"), n("462848");
            var r = n("244180"),
                o = n("353118"),
                u = n("792241"),
                s = n("731865"),
                a = n("232733"),
                l = n("659300"),
                c = n("455472"),
                E = n("810824"),
                d = n("467006"),
                _ = n("308439"),
                f = n("38852");

            function m(e) {
                var t, n = e.intention,
                    m = e.containerWidth,
                    I = e.rowSize,
                    T = e.isBurstReaction,
                    C = e.analyticsObject,
                    p = s.default.getChannel(a.default.getChannelId()),
                    A = null == p ? void 0 : p.getGuildId(),
                    O = o.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
                    g = null != p ? o.default.getDisambiguatedEmojiContext(p.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
                    S = O.slice(0, o.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems),
                    y = null != A ? o.default.getGuildEmoji(A) : [],
                    R = u.default.getPacksForUser().map(function(e) {
                        return e.content.emojis
                    }).reduce(function(e, t) {
                        return e.concat(t)
                    }, []),
                    N = Object.values(null !== (t = o.default.getDisambiguatedEmojiContext(null == p ? void 0 : p.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce(function(e, t) {
                        return e += t.length
                    }, 0),
                    M = (0, E.getTopAndNewlyAddedEmojis)({
                        guildId: null == p ? void 0 : p.getGuildId(),
                        pickerIntention: n
                    }),
                    j = M.topEmojis,
                    h = M.newlyAddedEmojis,
                    v = (0, c.getEmojiHotrail)({
                        topEmojis: j,
                        newlyAddedEmojis: h,
                        rowSize: I
                    }),
                    P = v.visibleTopEmojis,
                    L = v.visibleNewlyAddedEmojis;
                r.default.trackWithMetadata(n === _.EmojiIntention.REACTION ? d.AnalyticEvents.REACTION_PICKER_OPENED : d.AnalyticEvents.EXPRESSION_PICKER_OPENED, (0, i._)({
                    width: m,
                    tab: f.ExpressionPickerViewType.EMOJI,
                    badged: !1,
                    num_expressions_favorites: g.length,
                    num_animated_expressions_favorites: g.filter(function(e) {
                        return null == e ? void 0 : e.animated
                    }).length,
                    num_custom_expressions_favorites: g.filter(l.default.isCustomEmoji).length,
                    num_standard_expressions_favorites: g.filter(function(e) {
                        return null == e.id
                    }).length,
                    num_expressions_frecent: S.length,
                    num_animated_expressions_frecent: S.filter(function(e) {
                        return null == e ? void 0 : e.animated
                    }).length,
                    num_custom_expressions_frecent: S.filter(l.default.isCustomEmoji).length,
                    num_standard_expressions_frecent: S.filter(function(e) {
                        return null == e.id
                    }).length,
                    num_current_guild_expressions: y.length,
                    num_current_pack_expressions: R.length,
                    num_custom_expressions_total: N,
                    num_expressions_top_server: P.length,
                    num_animated_expressions_top_server: P.filter(function(e) {
                        return e.animated
                    }).length,
                    num_expressions_newly_added: L.length,
                    num_animated_expressions_newly_added: L.filter(function(e) {
                        return e.animated
                    }).length
                }, n === _.EmojiIntention.REACTION && {
                    is_burst: T
                }, null != C && {
                    location_object: C
                }))
            }
        },
        455472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                getEmojiHotrail: function() {
                    return o
                }
            }), n("849202"), n("814951");
            var i = n("470079"),
                r = n("540019");

            function o(e) {
                var t = e.topEmojis,
                    n = e.newlyAddedEmojis,
                    i = e.rowSize,
                    o = void 0 === i ? r.EMOJI_ROW_SIZE : i,
                    u = t.slice(0, o - n.length);
                return {
                    visibleTopEmojis: u,
                    visibleNewlyAddedEmojis: n,
                    allEmojis: u.concat(n)
                }
            }

            function u(e) {
                return i.useMemo(function() {
                    return o(e)
                }, [e])
            }
        },
        810824: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                },
                getTopAndNewlyAddedEmojis: function() {
                    return s
                }
            });
            var i = n("203959"),
                r = n("353118"),
                o = n("308439"),
                u = [];

            function s(e) {
                var t = e.emojiStoreInstance,
                    n = void 0 === t ? r.default : t,
                    i = e.guildId,
                    s = e.pickerIntention;
                return {
                    topEmojis: s !== o.EmojiIntention.REACTION ? n.getTopEmoji(i) : u,
                    newlyAddedEmojis: s !== o.EmojiIntention.REACTION ? n.getNewlyAddedEmoji(i) : u
                }
            }

            function a(e, t) {
                return (0, i.useStateFromStoresObject)([r.default], function() {
                    return s({
                        emojiStoreInstance: r.default,
                        guildId: e,
                        pickerIntention: t
                    })
                }, [e, t])
            }
        },
        778898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchTopEmojis: function() {
                    return u
                },
                updateNewlyAddedEmojiSeenAcknowledged: function() {
                    return a
                },
                updateNewlyAddedLastSeen: function() {
                    return s
                }
            }), n("363505"), n("230036");
            var i = n("454836"),
                r = n("312916"),
                o = n("467006");

            function u(e) {
                r.default.dispatch({
                    type: "TOP_EMOJIS_FETCH",
                    guildId: e
                }), i.default.get({
                    url: o.Endpoints.TOP_EMOJIS_FOR_GUILD(e),
                    oldFormErrors: !0
                }).then(function(t) {
                    return r.default.dispatch({
                        type: "TOP_EMOJIS_FETCH_SUCCESS",
                        guildId: e,
                        topEmojisMetadata: t.body.items.map(function(e) {
                            return {
                                emojiId: e.emoji_id,
                                rank: e.emoji_rank
                            }
                        }).sort(function(e, t) {
                            return e.rank - t.rank
                        })
                    })
                }, function() {
                    return r.default.dispatch({
                        type: "TOP_EMOJIS_FETCH_FAILURE",
                        guildId: e
                    })
                })
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

            function a(e, t) {
                null != e && null != t && r.default.dispatch({
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
                    return s
                }
            });
            var i = n("871831"),
                r = n("353118"),
                o = n("84053"),
                u = n("778898");

            function s(e) {
                if (null != e && null != i.default.getCurrentUser()) {
                    var t = r.default.getTopEmojisMetadata(e);
                    if (null != t) {
                        var n = t.topEmojisTTL;
                        if (null == n || Date.now() < n) return
                    }!o.default.getIsFetching(e) && (0, u.fetchTopEmojis)(e)
                }
            }
        },
        274532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BANNER_ASPECT_RATIO: function() {
                    return T
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return a
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return C
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return d
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return E
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return A
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return I
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return m
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return O
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return g
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return y
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return S
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return N
                },
                MessageTypes: function() {
                    return u
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return p
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return f
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return _
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return l
                },
                UploadTypes: function() {
                    return o
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return R
                }
            });
            var i, r, o, u, s = n("442802");
            (i = o || (o = {}))[i.AVATAR = 0] = "AVATAR", i[i.BANNER = 1] = "BANNER", i[i.GUILD_BANNER = 2] = "GUILD_BANNER", i[i.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", i[i.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", i[i.HOME_HEADER = 5] = "HOME_HEADER", i[i.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            var a = 568,
                l = 2400,
                c = 848,
                E = 2400,
                d = 1350,
                _ = 2400,
                f = 960,
                m = 2400,
                I = 600,
                T = 17 / 6,
                C = 16 / 9,
                p = 2.5,
                A = 4,
                O = 568 / (17 / 6),
                g = 568 / (16 / 9),
                S = 227.2,
                y = 142,
                R = s.BACKGROUND_REPLACEMENT_SIZE.width / s.BACKGROUND_REPLACEMENT_SIZE.height,
                N = a / R;
            (r = u || (u = {}))[r.CROP_GIF_START = 0] = "CROP_GIF_START", r[r.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", r[r.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        650742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i = n("356056"),
                r = n("21189"),
                o = n("227094"),
                u = n("261047"),
                s = n("324415");
            n("191489"), n("357629"), n("568603"), n("128242");
            var a = n("735250");
            n("470079");
            var l = n("803997"),
                c = n.n(l),
                E = n("661223"),
                d = n("974328"),
                _ = n("620412"),
                f = n("986821"),
                m = n("569264"),
                I = n("663698"),
                T = n("521588"),
                C = n("828031"),
                p = n("871831"),
                A = n("416573"),
                O = n("470526"),
                g = n("416912"),
                S = n("985053"),
                y = n("428037"),
                R = n("488867"),
                N = n("171168"),
                M = n("467006"),
                j = n("30175"),
                h = n("422715"),
                v = function(e) {
                    var t = e.isGift,
                        l = e.subscriptionTier,
                        v = e.onClick,
                        P = e.size,
                        L = e.className,
                        D = e.trialId,
                        U = e.isTrialCTA,
                        G = e.buttonText,
                        b = e.buttonTextClassName,
                        x = e.postSuccessGuild,
                        F = e.onSubscribeModalClose,
                        H = e.premiumModalAnalyticsLocation,
                        k = e.showIcon,
                        B = void 0 === k || k,
                        w = e.disableShine,
                        J = e.applicationId,
                        V = e.giftMessage,
                        K = e.overrideDisabledButtonText,
                        Y = e.shinyButtonClassName,
                        W = (0, u._)(e, ["isGift", "subscriptionTier", "onClick", "size", "className", "trialId", "isTrialCTA", "buttonText", "buttonTextClassName", "postSuccessGuild", "onSubscribeModalClose", "premiumModalAnalyticsLocation", "showIcon", "disableShine", "applicationId", "giftMessage", "overrideDisabledButtonText", "shinyButtonClassName"]),
                        X = (0, E.useStateFromStores)([p.default], function() {
                            return p.default.getCurrentUser()
                        }),
                        q = (0, E.useStateFromStores)([O.default], function() {
                            return O.default.isFocused()
                        }),
                        Z = (0, E.useStateFromStores)([A.default], function() {
                            return A.default.getPremiumTypeSubscription()
                        }),
                        z = (0, f.default)().analyticsLocations,
                        $ = function(e) {
                            if (e.preventDefault(), null == X) {
                                (0, T.transitionTo)(M.Routes.LOGIN);
                                return
                            }
                            if (null == v || v(e), (null == Z ? void 0 : Z.status) === M.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                                (0, m.trackPremiumSettingsPaneOpened)(), _.default.open(M.UserSettingsSections.PREMIUM), null == F || F(!1);
                                return
                            }! function(e) {
                                var t = e.isClaimed,
                                    l = e.isVerified,
                                    c = e.isGift,
                                    E = e.subscriptionTier,
                                    _ = e.trialId,
                                    f = e.postSuccessGuild,
                                    m = e.onSubscribeModalClose,
                                    T = e.analyticsLocations,
                                    C = e.premiumModalAnalyticsLocation,
                                    p = e.applicationId,
                                    A = e.giftMessage;
                                if (!t) {
                                    (0, d.openModalLazy)((0, i._)(function() {
                                        var e;
                                        return (0, s._)(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, n.el("650742@3041:3074").then(n.bind(n, "325418"))];
                                                case 1:
                                                    return e = t.sent().default, [2, function(t) {
                                                        var n = t.onClose,
                                                            i = (0, u._)(t, ["onClose"]);
                                                        return (0, a.jsx)(e, (0, o._)((0, r._)({}, i), {
                                                            onClose: n
                                                        }))
                                                    }]
                                            }
                                        })
                                    }));
                                    return
                                }
                                if (!l) {
                                    (0, d.openModalLazy)((0, i._)(function() {
                                        var e;
                                        return (0, s._)(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, n.el("650742@4195:4227").then(n.bind(n, "159082"))];
                                                case 1:
                                                    return e = t.sent().default, [2, function(t) {
                                                        var n = t.onClose,
                                                            i = (0, u._)(t, ["onClose"]);
                                                        return (0, a.jsx)(e, (0, o._)((0, r._)({}, i), {
                                                            onClose: n
                                                        }))
                                                    }]
                                            }
                                        })
                                    }));
                                    return
                                }
                                var O = M.AnalyticsObjectTypes.BUY;
                                null != _ ? O = M.AnalyticsObjectTypes.TRIAL : c && (O = M.AnalyticsObjectTypes.GIFT), (0, I.default)({
                                    isGift: c,
                                    initialPlanId: null,
                                    subscriptionTier: E,
                                    analyticsLocations: T,
                                    analyticsObject: (0, r._)({
                                        object: M.AnalyticsObjects.BUTTON_CTA,
                                        objectType: O
                                    }, C),
                                    trialId: _,
                                    postSuccessGuild: f,
                                    onClose: m,
                                    applicationId: p,
                                    giftMessage: A
                                })
                            }({
                                isClaimed: X.isClaimed(),
                                isVerified: X.verified,
                                isGift: t,
                                subscriptionTier: l,
                                trialId: D,
                                postSuccessGuild: x,
                                onSubscribeModalClose: F,
                                analyticsLocations: z,
                                premiumModalAnalyticsLocation: H,
                                applicationId: J,
                                giftMessage: V
                            })
                        };
                    if (U) return (0, a.jsxs)(d.Button, (0, o._)((0, r._)({
                        size: P,
                        className: L,
                        innerClassName: h.premiumSubscribeButton,
                        look: d.Button.Looks.INVERTED,
                        onClick: $
                    }, W), {
                        children: [B && (0, a.jsx)(y.default, {
                            className: h.premiumIcon
                        }), (0, a.jsx)("span", {
                            className: c()(h.buttonText, b),
                            children: null != G ? G : j.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    }));
                    if (t) return (0, a.jsxs)(d.Button, (0, o._)((0, r._)({
                        size: P,
                        className: L,
                        innerClassName: h.giftButton,
                        color: d.Button.Colors.PRIMARY,
                        onClick: $
                    }, W), {
                        children: [(0, a.jsx)(S.default, {
                            className: h.giftIcon
                        }), (0, a.jsx)("span", {
                            className: c()(h.buttonText, b),
                            children: null != G ? G : j.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    }));
                    var Q = j.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        ee = null != Z ? (0, R.getPremiumPlanItem)(Z) : null,
                        et = null != ee ? R.default.getPremiumType(ee.planId) : null == X ? void 0 : X.premiumType,
                        en = l === N.PremiumSubscriptionSKUs.TIER_2 && null != et && [N.PremiumTypes.TIER_0, N.PremiumTypes.TIER_1].includes(et);
                    en && (Q = j.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    var ei = null != Z && Z.status !== M.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, C.isNoneSubscription)(Z.planId) && !en,
                        er = ei ? null != K ? K : function(e) {
                            var t = e.ctaSubscriptionSkuId,
                                n = e.currentPremiumType,
                                i = null,
                                r = null;
                            if (null != t && t !== N.PremiumSubscriptionSKUs.LEGACY && t !== N.PremiumSubscriptionSKUs.TIER_0 && t !== N.PremiumSubscriptionSKUs.TIER_1 && t !== N.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: r
                            };
                            var o = null != t ? N.PremiumSubscriptionSKUToPremiumType[t] : null,
                                u = null != o ? N.PremiumTypeOrder[o] : null,
                                s = null != n ? N.PremiumTypeOrder[n] : null;
                            return null != s && null != u && u < s ? (i = j.default.Messages.APPLICATION_STORE_GET_PREMIUM, r = j.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != o && null != n && o === n ? (i = j.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = j.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == o && null != n && n === N.PremiumTypes.TIER_2 && (r = j.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: r
                            }
                        }({
                            ctaSubscriptionSkuId: l,
                            currentPremiumType: et
                        }) : null;

                    function eo(e) {
                        var t, n;
                        return (0, a.jsxs)(g.default, (0, o._)((0, r._)({
                            disabled: ei,
                            onClick: $,
                            innerClassName: h.premiumSubscribeButton,
                            color: l === N.PremiumSubscriptionSKUs.TIER_1 ? d.Button.Colors.PRIMARY : d.Button.Colors.GREEN,
                            size: P,
                            className: Y,
                            wrapperClassName: L,
                            pauseAnimation: !q || w
                        }, W, e), {
                            children: [B && (0, a.jsx)(y.default, {
                                className: h.premiumIcon
                            }), (0, a.jsx)("span", {
                                className: c()(h.buttonText, b),
                                children: null !== (n = null !== (t = null == er ? void 0 : er.disabledButtonText) && void 0 !== t ? t : G) && void 0 !== n ? n : Q
                            })]
                        }))
                    }
                    return (null == er ? void 0 : er.disabledButtonTooltipText) != null ? (0, a.jsx)(d.Tooltip, {
                        text: er.disabledButtonTooltipText,
                        children: eo
                    }) : eo()
                }
        },
        428037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("21189"),
                r = n("227094"),
                o = n("261047"),
                u = n("735250");
            n("470079");
            var s = n("336328"),
                a = n("813138"),
                l = n("262113"),
                c = (0, s.replaceIcon)(function(e) {
                    var t = e.width,
                        n = e.height,
                        s = e.color,
                        a = e.viewBox,
                        c = e.foreground,
                        E = (0, o._)(e, ["width", "height", "color", "viewBox", "foreground"]);
                    return (0, u.jsx)("svg", (0, r._)((0, i._)({}, (0, l.default)(E)), {
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        viewBox: void 0 === a ? "0 0 24 24" : a,
                        children: (0, u.jsx)("path", {
                            className: c,
                            fill: void 0 === s ? "currentColor" : s,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    }))
                }, a.NitroWheelIcon, void 0, {
                    size: 24
                })
        }
    }
]);
//# sourceMappingURL=19005.9549938e1afa7c52a09b.js.map