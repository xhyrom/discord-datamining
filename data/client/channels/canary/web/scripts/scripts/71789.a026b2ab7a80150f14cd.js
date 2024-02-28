(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71789"], {
        567998: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("606151");
            n.es(i, e)
        },
        997962: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("838767");
            n.es(i, e)
        },
        991949: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("730599");
            n.es(i, e)
        },
        886623: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearHotspotOverride: function() {
                    return l
                },
                hideHotspot: function() {
                    return o
                },
                setHotspotOverride: function() {
                    return s
                }
            });
            var i = n("312916"),
                r = n("328470"),
                a = n("467006");

            function o(t) {
                r.default.track(a.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: t
                }), i.default.wait(() => {
                    i.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: t
                    })
                })
            }

            function s(t, e) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: t,
                    enabled: e
                })
            }

            function l(t) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: t
                })
            }
        },
        483801: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("661223"),
                r = n("312916"),
                a = n("878001"),
                o = n("328426");
            let s = new Set,
                l = {};
            class c extends i.default.PersistedStore {
                static #t = this.displayName = "HotspotStore";
                static #e = this.persistKey = "hotspots";
                static #n = this.migrations = [t => ({
                    hiddenHotspots: t ?? [],
                    hotspotOverrides: {}
                })];
                initialize(t) {
                    null != t && (Array.isArray(t.hiddenHotspots) && (s = new Set(t.hiddenHotspots)), null != t.hotspotOverrides && (l = t.hotspotOverrides))
                }
                hasHotspot(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !e && l[t];
                    return !(o.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !s.has(t))
                }
                hasHiddenHotspot(t) {
                    return s.has(t)
                }
                getHotspotOverride(t) {
                    return l[t]
                }
                getState() {
                    return {
                        hiddenHotspots: s,
                        hotspotOverrides: l
                    }
                }
            }
            var u = new c(r.default, {
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        hiddenHotspots: e
                    } = t;
                    s = new Set(e)
                },
                HOTSPOT_HIDE: function(t) {
                    let {
                        location: e
                    } = t;
                    if (s.has(e)) return !1;
                    s.add(e)
                },
                HOTSPOT_OVERRIDE_SET: function(t) {
                    let {
                        location: e,
                        enabled: n
                    } = t;
                    l[e] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(t) {
                    let {
                        location: e
                    } = t;
                    if (null == l[e]) return !1;
                    delete l[e]
                }
            })
        },
        853041: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("735250");
            n("470079");
            var r = n("336328"),
                a = n("997962"),
                o = n("262113"),
                s = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            children: (0, i.jsx)("path", {
                                d: "M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z",
                                className: a,
                                fill: r
                            })
                        })
                    })
                }, a.HeadphonesIcon, void 0, {
                    size: 24
                })
        },
        334450: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("735250");
            n("470079");
            var r = n("336328"),
                a = n("991949"),
                o = n("262113"),
                s = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: a,
                            fill: r
                        })
                    })
                }, a.PencilIcon, void 0, {
                    size: 16
                })
        },
        928028: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("735250");
            n("470079");
            var r = n("336328"),
                a = n("567998"),
                o = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: a,
                        foreground: o
                    } = t;
                    return (0, i.jsx)("svg", {
                        className: a,
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, a.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        599463: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                AnalyticsContexts: function() {
                    return r
                },
                MINIMUM_MEMBER_COUNT: function() {
                    return p
                },
                getDiscoverableGuild: function() {
                    return O
                },
                makeDiscoverableGuild: function() {
                    return g
                },
                startLurking: function() {
                    return E
                },
                trackDiscoveryExited: function() {
                    return I
                },
                trackDiscoveryViewed: function() {
                    return C
                },
                trackGuildJoinClicked: function() {
                    return R
                },
                trackSearchClosed: function() {
                    return y
                },
                trackSearchResultsViewed: function() {
                    return m
                },
                trackSearchStarted: function() {
                    return D
                },
                trackTagSearchStarted: function() {
                    return S
                },
                viewGuild: function() {
                    return v
                }
            });
            var i, r, a = n("664751"),
                o = n("454836"),
                s = n("181123"),
                l = n("172056"),
                c = n("521588"),
                u = n("497994"),
                d = n("362753"),
                f = n("327271"),
                h = n("328470"),
                _ = n("467006");
            (i = r || (r = {})).SEARCH = "Search", i.RECOMMENDED = "Recommended", i.POPULAR = "Popular", i.RECOMMENDED_E3 = "Recommended - E3", i.HEADER = "Header";
            let p = ">200";
            async function E(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        channelId: i,
                        onSuccess: r,
                        joinSource: a,
                        loadId: o,
                        setsHistorySnapshot: d = !0
                    } = n,
                    h = (0, c.getHistory)();
                d && l.default.setHistorySnapshot({
                    ...h
                });
                let _ = f.default.getGuild(t),
                    p = {
                        state: {
                            analyticsSource: e
                        }
                    };
                null != _ && null != _.joinedAt ? (0, u.transitionToGuild)(t, p) : (await s.default.joinGuild(t, {
                    lurker: !0,
                    source: a,
                    loadId: o,
                    lurkLocation: e?.page
                }), await s.default.transitionToGuildSync(t, {
                    ...p,
                    welcomeModalChannelId: i,
                    search: h.location.search
                }, i)), r?.()
            }
            async function v(t) {
                let e, {
                    loadId: n,
                    guildId: i,
                    index: a,
                    analyticsContext: o,
                    categoryId: s
                } = t;
                "string" == typeof o && o in r && (e = o);
                let l = {
                    page: _.AnalyticsPages.GUILD_DISCOVERY,
                    object: _.AnalyticsObjects.CARD,
                    section: e
                };
                await E(i, l, {
                        loadId: n
                    }),
                    function(t) {
                        let {
                            loadId: e,
                            guildId: n,
                            index: i,
                            analyticsContext: r,
                            categoryId: a
                        } = t, o = {
                            page: _.AnalyticsPages.GUILD_DISCOVERY,
                            section: r
                        };
                        "string" != typeof r && null != r.location && (o = r.location), h.default.track(_.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                            location: o,
                            guild_id: n,
                            load_id: e,
                            card_index: i,
                            location_object: _.AnalyticsObjects.CARD,
                            category_id: a
                        })
                    }({
                        loadId: n,
                        guildId: i,
                        index: a,
                        analyticsContext: o,
                        categoryId: s
                    })
            }

            function g(t) {
                return {
                    id: t.id,
                    name: t.name,
                    description: t.description,
                    splash: t.splash,
                    banner: t.banner,
                    icon: t.icon,
                    features: new Set(t.features),
                    presenceCount: t.approximate_presence_count,
                    memberCount: t.approximate_member_count,
                    premiumSubscriptionCount: t.premium_subscription_count,
                    preferredLocale: t.preferred_locale,
                    discoverySplash: t.discovery_splash,
                    emojis: t.emojis,
                    emojiCount: t.emoji_count,
                    stickers: t.stickers,
                    stickerCount: t.sticker_count,
                    keywords: t.keywords
                }
            }

            function C(t) {
                let {
                    loadId: e,
                    gamesYouPlayGuilds: n,
                    allGuilds: i,
                    categoryId: r,
                    recommendationsSource: a = null
                } = t, o = n.length, s = i.length;
                h.default.track(_.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
                    load_id: e,
                    num_guilds: o + s,
                    num_guilds_recommended: o,
                    num_guilds_popular: s,
                    recommended_guild_ids: n.map(t => t.id),
                    category_id: r,
                    recommendations_source: a
                })
            }

            function I(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                h.default.track(_.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
                    load_id: t,
                    guild_ids_viewed: e,
                    recommendations_source: n
                })
            }

            function y(t) {
                h.default.track(_.AnalyticEvents.SEARCH_CLOSED, {
                    load_id: t
                })
            }

            function D(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                h.default.track(_.AnalyticEvents.SEARCH_STARTED, {
                    search_type: _.SearchTypes.GUILD_DISCOVERY,
                    load_id: t,
                    location: n.location,
                    category_id: e
                })
            }

            function S(t, e, n, i) {
                h.default.track(_.AnalyticEvents.SEARCH_STARTED, {
                    search_type: _.SearchTypes.GUILD_DISCOVERY_TAG,
                    load_id: t,
                    location: {
                        page: _.AnalyticsPages.GUILD_DISCOVERY,
                        section: n
                    },
                    category_id: e,
                    guild_id: i
                })
            }

            function m(t) {
                let {
                    loadId: e,
                    searchId: n,
                    query: i,
                    guildResults: r,
                    analyticsContext: a,
                    categoryId: o,
                    isTagSearch: s
                } = t;
                h.default.track(_.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    search_type: s ? _.SearchTypes.GUILD_DISCOVERY_TAG : _.SearchTypes.GUILD_DISCOVERY,
                    load_id: e,
                    search_id: n,
                    total_results: void 0 !== r ? r.length : null,
                    guild_ids: void 0 !== r ? r.map(t => t.id) : null,
                    query: i,
                    location: a.location,
                    category_id: o
                })
            }

            function R(t) {
                let e = l.default.getLoadId(t);
                h.default.track(_.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
                    guild_id: t,
                    load_id: e,
                    guild_size: d.default.getMemberCount(t)
                })
            }
            async function O(t) {
                try {
                    let e = await o.default.get({
                            url: _.Endpoints.GUILD_DISCOVERY,
                            query: a.stringify({
                                guild_ids: t
                            }),
                            oldFormErrors: !0
                        }),
                        n = e.body?.guilds?.[0];
                    if (null == n) return n;
                    return g(n)
                } catch (t) {
                    return null
                }
            }
        },
        606151: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CirclePlusIcon: function() {
                    return o
                }
            });
            var i = n("735250");
            n("470079");
            var r = n("600186"),
                a = n("11768");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: s = "",
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: c = "",
                    ...u
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof o ? o : o.css,
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: c
                    })]
                })
            }
        },
        838767: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                HeadphonesIcon: function() {
                    return o
                }
            });
            var i = n("735250");
            n("470079");
            var r = n("600186"),
                a = n("11768");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...l
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M12 3a9 9 0 0 0-8.95 10h1.87a5 5 0 0 1 4.1 2.13l1.37 1.97a3.1 3.1 0 0 1-.17 3.78 2.85 2.85 0 0 1-3.55.74 11 11 0 1 1 10.66 0c-1.27.71-2.73.23-3.55-.74a3.1 3.1 0 0 1-.17-3.78l1.38-1.97a5 5 0 0 1 4.1-2.13h1.86A9 9 0 0 0 12 3Z",
                        className: s
                    })
                })
            }
        },
        730599: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PencilIcon: function() {
                    return o
                }
            });
            var i = n("735250");
            n("470079");
            var r = n("600186"),
                a = n("11768");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...l
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z",
                        className: s
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=71789.a026b2ab7a80150f14cd.js.map