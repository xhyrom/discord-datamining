(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64612"], {
        515631: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FeedItemInteractionType: function() {
                    return d
                },
                GuildFeedSectionTypes: function() {
                    return i
                },
                GuildFeedRenderMode: function() {
                    return r
                },
                COLLAPSED_SIZE_MEDIA_QUERY: function() {
                    return c
                },
                GUILD_FEED_CHANNEL_TYPES: function() {
                    return _
                },
                GuildHomeLandingSource: function() {
                    return l
                }
            }), n("222007");
            var d, i, r, l, u, s, a, E, o = n("298386");
            (u = d || (d = {})).MESSAGE_CLICKED = "message_clicked", u.MESSAGE_CHANNEL_CLICKED = "message_channel_clicked", u.REACTION_ADDED = "reaction_added", u.REACTION_REMOVED = "reaction_removed", u.THREAD_EMBED_CLICKED = "thread_embed_clicked", u.LINK_CLICKED = "link_clicked", u.IMAGE_CLICKED = "image_clicked", u.BUTTON_CLICKED = "button_clicked", u.REFERENCED_MESSAGE_CLICKED = "referenced_message_clicked", u.MESSAGED_IN_SIDEBAR = "messaged_in_sidebar", u.REPLIED_IN_SIDEBAR = "replied_in_sidebar", u.REPLIED_TO_MESSAGE = "replied_to_message", u.EXPANDED_ITEM = "expanded_item", u.VIEW_MORE_REPLIES = "view_more_replies", (s = i || (i = {})).UNREAD = "UNREAD", s.READ = "READ", s.HIGHLIGHTED = "HIGHLIGHTED", s.ALL = "ALL", (a = r || (r = {}))[a.SEGMENTED_READ = 0] = "SEGMENTED_READ", a[a.TOP = 1] = "TOP", a[a.NEW = 2] = "NEW";
            let c = "(max-width: 1300px)",
                _ = new Set([o.ChannelTypes.GUILD_TEXT, o.ChannelTypes.GUILD_ANNOUNCEMENT, o.ChannelTypes.GUILD_FORUM]);
            (E = l || (l = {})).ORGANIC = "ORGANIC", E.TIMER = "TIMER", E.HIGHLIGHTS = "HIGHLIGHTS"
        },
        185014: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_FETCH_LIMIT: function() {
                    return F
                },
                LoadingStatus: function() {
                    return d
                },
                default: function() {
                    return X
                }
            }), n("424973"), n("222007");
            var d, i, r = n("446674"),
                l = n("407846"),
                u = n("913144"),
                s = n("692038"),
                a = n("432173"),
                E = n("271938"),
                o = n("886484"),
                c = n("60036"),
                _ = n("145708"),
                I = n("2804"),
                f = n("515631"),
                m = n("724210");
            let F = 10;
            (i = d || (d = {}))[i.LOADING_FRESH_FEED = 0] = "LOADING_FRESH_FEED", i[i.LOADING_PAGE = 1] = "LOADING_PAGE", i[i.NONE = 2] = "NONE";
            let S = {
                    loading: 2,
                    error: null
                },
                T = {
                    offset: null,
                    hasMoreItems: null
                },
                g = {},
                G = {},
                A = {},
                D = {},
                M = {},
                v = {},
                p = {},
                y = {};

            function h(e) {
                let t = y[e];
                return null == t && (t = new l.default(L, R), y[e] = t), t
            }

            function R(e) {
                let {
                    featured: t,
                    sortIndex: n
                } = e;
                return "".concat(t ? "\x00" : "\x01").concat(n.toString().padStart(5, "0"))
            }

            function L(e) {
                let {
                    seen: t,
                    highlighted: n
                } = e, d = [f.GuildFeedSectionTypes.ALL];
                return n ? d.push(f.GuildFeedSectionTypes.HIGHLIGHTED) : t ? d.push(f.GuildFeedSectionTypes.READ) : d.push(f.GuildFeedSectionTypes.UNREAD), d
            }
            let N = {},
                O = {},
                U = {},
                C = {};

            function H(e, t, n) {
                var d, i;
                return null === (i = p[e]) || void 0 === i ? void 0 : null === (d = i[t]) || void 0 === d ? void 0 : d[n]
            }

            function P(e, t) {
                var n;
                return null === (n = v[e]) || void 0 === n ? void 0 : n[t]
            }

            function w(e) {
                let t = (0, c.default)(e);
                return P(t.channel_id, t.id)
            }

            function b(e, t, n) {
                if (null == e || null == t) return !1;
                let d = P(e, t);
                if (null == d) return !1;
                let i = H(d, e, t);
                if (null == i) return !1;
                let r = n(i);
                return p[d][e][t] = r, !0
            }

            function V(e, t) {
                (0, c.getAllMessagesFromFeedItem)(t).forEach(t => k(e, t))
            }

            function k(e, t) {
                var n, d;
                (null === (n = p[e]) || void 0 === n ? void 0 : n[t.channel_id]) == null && (p[e] = null !== (d = p[e]) && void 0 !== d ? d : {}, p[e][t.channel_id] = {}), p[e][t.channel_id][t.id] = t, null == v[t.channel_id] && (v[t.channel_id] = {}), v[t.channel_id][t.id] = e
            }

            function B(e, t) {
                let n = h(e),
                    d = n.values(f.GuildFeedSectionTypes.ALL);
                for (let e of d)
                    if ((0, c.getAllMessageIdsFromFeedItem)(e).has(t)) return e
            }

            function Y(e, t) {
                var n, d, i;
                let r = P(e, t);
                return null != r && (null === (d = p[r]) || void 0 === d || null === (n = d[e]) || void 0 === n || delete n[t], null === (i = v[e]) || void 0 === i || delete i[t], ! function(e, t) {
                    let n = B(e, t);
                    if (null == n) return;
                    let d = (0, I.default)(n),
                        i = h(e),
                        r = Array.from((0, c.getAllMessagesFromFeedItem)(n));
                    !(r.filter(t => H(e, t.channel_id, t.id)).length > 0) && i.delete(d)
                }(r, t), !0)
            }

            function x(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: d,
                    userId: i,
                    emoji: r
                } = e;
                if (!(0, a.shouldApplyReaction)(e)) return !1;
                let l = E.default.getId() === i;
                return b(n, d, n => {
                    let {
                        reactionType: d
                    } = e;
                    if ("MESSAGE_REACTION_ADD" !== t) return n.removeReaction(r, l, void 0, d);
                    {
                        let {
                            burst: t,
                            colors: i
                        } = e;
                        return n.addReaction(r, l, i, t, d)
                    }
                })
            }

            function K(e) {
                let {
                    channel: t
                } = e;
                return j(t)
            }

            function j(e) {
                var t;
                let n = e.guild_id;
                if (null == n) return !1;
                delete v[e.id], null === (t = p[n]) || void 0 === t || delete t[e.id]
            }
            class W extends r.default.Store {
                getLastFetchedMillis(e) {
                    return g[e]
                }
                getFeedItemsForGuild(e) {
                    let t = h(e);
                    return t.values()
                }
                getFeedItemSection(e, t) {
                    let n = h(e);
                    return n.values(t)
                }
                getItem(e, t) {
                    return h(e).get(t)
                }
                getItemForMessageId(e, t) {
                    return B(e, t)
                }
                getMessageItem(e, t) {
                    return this.getItem(e, (0, I.GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE)(t))
                }
                getLoadId(e) {
                    var t;
                    return null === (t = M[e]) || void 0 === t ? void 0 : t.load_id
                }
                getCachedMessage(e, t, n) {
                    return H(e, t, n)
                }
                getFetchStatus(e) {
                    var t;
                    return null !== (t = G[e]) && void 0 !== t ? t : S
                }
                getFeaturedItemsFetchStatus(e) {
                    var t;
                    return null !== (t = D[e]) && void 0 !== t ? t : S
                }
                getPaginationStatus(e) {
                    var t;
                    return null !== (t = A[e]) && void 0 !== t ? t : T
                }
                getIsItemHiding(e, t) {
                    var n;
                    return !!(null === (n = N[e]) || void 0 === n ? void 0 : n.has(t))
                }
                getIsItemHidden(e, t) {
                    var n;
                    return !!(null === (n = O[e]) || void 0 === n ? void 0 : n.has(t))
                }
                getIsItemFeatured(e) {
                    var t;
                    let n = (0, I.getGuildFeedItemIdFromFeatureableItem)(e),
                        {
                            guildId: d
                        } = e;
                    return !!(null === (t = U[d]) || void 0 === t ? void 0 : t.has(n))
                }
                getFeaturedItems(e) {
                    var t;
                    return Object.values(null !== (t = C[e]) && void 0 !== t ? t : [])
                }
                getFeaturedItemByMessageId(e, t) {
                    var n;
                    return Object.values(null !== (n = C[e]) && void 0 !== n ? n : []).find(e => "message" in e && e.message.id === t)
                }
            }
            W.displayName = "GuildFeedStore";
            var X = new W(u.default, {
                GUILD_FEED_FETCH_FRESH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    G[t] = {
                        loading: 0,
                        error: null
                    }, delete y[t], delete M[t], delete A[t], N[t] = new Set, O[t] = new Set, U[t] = new Set, p[t] = {}
                },
                GUILD_FEED_FETCH_PAGE_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    G[t] = {
                        loading: 1,
                        error: null
                    }
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t, n, d, i, r;
                    let {
                        guildId: l,
                        data: u
                    } = e;
                    if (g[l] = Date.now(), G[l] = {
                            loading: 2,
                            error: null
                        }, l in M && M[l].load_id !== u.load_id) return;
                    let s = null !== (i = null === (n = M[l]) || void 0 === n ? void 0 : null === (t = n.results) || void 0 === t ? void 0 : t.items) && void 0 !== i ? i : [];
                    M[l] = {
                        load_id: u.load_id,
                        results: {
                            items: s.concat(u.results.items)
                        }
                    };
                    let a = h(l),
                        E = a.values().length,
                        c = E;
                    for (let e of u.results.items) {
                        let t = (0, o.createGuildFeedItemFromServer)(e, c);
                        if (null != t) c += 1, null == a.get(t.id) && (t.featured && U[l].add(t.id), V(l, t), a.set(t.id, t))
                    }
                    let _ = null !== (r = null === (d = A[l]) || void 0 === d ? void 0 : d.offset) && void 0 !== r ? r : 0;
                    A[l] = {
                        offset: _ + F,
                        hasMoreItems: E !== a.values().length
                    }
                },
                GUILD_FEED_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t,
                        error: n
                    } = e;
                    G[t] = {
                        loading: 2,
                        error: n
                    }
                },
                GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        data: n
                    } = e;
                    D[t] = {
                        loading: 2,
                        error: null
                    };
                    let d = {};
                    for (let [e, i] of n.results.entries()) {
                        let n = (0, o.createGuildFeedItemFromServer)(i, e);
                        null != n && (0, o.isGuildFeedFeaturedItem)(n) && (n.featured && U[t].add(n.id), V(t, n), d[n.id] = n)
                    }
                    C[t] = d
                },
                GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t,
                        error: n
                    } = e;
                    D[t] = {
                        loading: 2,
                        error: n
                    }
                },
                GUILD_FEED_ITEM_REMOVE: function(e) {
                    let {
                        item: t
                    } = e;
                    (0, c.getAllMessagesFromFeedItem)(t).forEach(e => Y(e.channel_id, e.id))
                },
                GUILD_FEED_ITEM_HIDE: function(e) {
                    let {
                        item: t
                    } = e, n = (0, I.default)(t), d = w(t);
                    null != d && (!(d in N) && (N[d] = new Set), N[d].add(n))
                },
                GUILD_FEED_ITEM_UNHIDE: function(e) {
                    let {
                        item: t
                    } = e, n = (0, I.default)(t), d = w(t);
                    null != d && N[d].delete(n)
                },
                GUILD_FEED_FEATURE_ITEM: function(e) {
                    var t, n, d;
                    let {
                        featureableItem: i,
                        options: r
                    } = e, {
                        guildId: l
                    } = i, u = (0, I.getGuildFeedItemIdFromFeatureableItem)(i);
                    if (!(l in U) && (U[l] = new Set), U[l].add(u), !r.hoist) return;
                    let s = h(l),
                        a = null !== (d = s.get(u)) && void 0 !== d ? d : (0, _.createFakeGuildFeedItem)(i);
                    null != a && (null != a.message && (null === (n = p[l]) || void 0 === n ? void 0 : null === (t = n[a.message.channel_id]) || void 0 === t ? void 0 : t[a.message.id]) == null && k(l, a.message), s.delete(a.id), a.featured = !0, a.seen = !1, s.set(a.id, a))
                },
                GUILD_FEED_UNFEATURE_ITEM: function(e) {
                    var t, n, d, i;
                    let {
                        featureableItem: r
                    } = e, {
                        guildId: l
                    } = r, u = (0, I.getGuildFeedItemIdFromFeatureableItem)(r);
                    t = l, n = u, null === (d = U[t]) || void 0 === d || d.delete(n), null === (i = C[t]) || void 0 === i || delete i[n]
                },
                CHANNEL_SELECT: function() {
                    for (let e of Object.keys(N)) null == O[e] && (O[e] = new Set), O[e] = new Set([...Array.from(O[e]), ...Array.from(N[e])]), delete N[e]
                },
                CHANNEL_DELETE: K,
                THREAD_DELETE: K,
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    if (null == g[n.id]) return !1;
                    for (let e in delete g[n.id], delete M[n.id], null !== (t = p[n.id]) && void 0 !== t ? t : {}) delete v[e];
                    delete p[n.id], delete y[n.id]
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t)
                        if (null == e ? void 0 : e.hasFlag(m.ChannelFlags.GUILD_FEED_REMOVED)) return j(e)
                },
                LOGOUT: function() {
                    g = {}, M = {}, v = {}, p = {}, y = {}, N = {}, O = {}, U = {}, C = {}
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e;
                    return b(t.channel_id, t.id, e => (0, s.updateMessageRecord)(e, t))
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e;
                    return Y(n, t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, d = !1;
                    for (let e of t) d = Y(n, e) || d;
                    return d
                },
                MESSAGE_REACTION_ADD: x,
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: d
                    } = e, i = E.default.getId();
                    return b(t, n, e => e.addReactionBatch(d, i))
                },
                MESSAGE_REACTION_REMOVE: x,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e;
                    return b(t, n, e => e.set("reactions", []))
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: d
                    } = e;
                    return b(t, n, e => e.removeReactionsForEmoji(d))
                }
            })
        },
        886484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FEATURE_EXPIRES_SECONDS: function() {
                    return _
                },
                isGuildFeedFeaturedItem: function() {
                    return m
                },
                createGuildFeedItemFromServer: function() {
                    return F
                },
                isChannelAvailableInGuildFeed: function() {
                    return S
                },
                isMessageAvailableInGuildFeed: function() {
                    return T
                },
                createFeatureItemsTimeLabel: function() {
                    return g
                },
                getFeatureItemsTimes: function() {
                    return G
                },
                getSidebarMessageId: function() {
                    return A
                },
                getChannelIdForItem: function() {
                    return D
                }
            });
            var d = n("917351"),
                i = n.n(d),
                r = n("611221"),
                l = n("637612"),
                u = n("692038"),
                s = n("233069"),
                a = n("449008"),
                E = n("2804"),
                o = n("724210"),
                c = n("782340");
            let _ = {
                ONE_DAY: 86400,
                THREE_DAYS: 259200,
                SEVEN_DAYS: 604800
            };

            function I(e) {
                return {
                    entityId: e.entity_id,
                    entityType: e.entity_type,
                    guildId: e.guild_id,
                    details: {
                        actorUserId: e.details.actor_user_id,
                        expiresAt: new Date(e.details.expires_at)
                    }
                }
            }

            function f(e) {
                return null != e.featured_item || !1
            }

            function m(e) {
                return null != e.featuredItem || !1
            }

            function F(e, t) {
                var n, d, l, a, o, c, _;
                switch (e.type) {
                    case r.GuildFeedItemTypes.FORUM_POST: {
                        let i = (0, u.createMessageRecord)(e.message),
                            l = (0, s.createChannelRecordFromServer)(e.thread),
                            a = {
                                type: r.GuildFeedItemTypes.FORUM_POST,
                                id: (0, E.default)(e),
                                sortIndex: t,
                                message: i,
                                thread: l,
                                featured: null !== (n = e.featured) && void 0 !== n && n,
                                highlighted: null !== (d = e.highlighted) && void 0 !== d && d,
                                seen: e.seen,
                                unreadMention: !1
                            };
                        return f(e) && (a = {
                            ...a,
                            featuredItem: I(e.featured_item)
                        }), a
                    }
                    case r.GuildFeedItemTypes.MESSAGE:
                        let m = (0, u.createMessageRecord)(e.message),
                            F = i.map(e.reference_messages, e => (0, u.createMessageRecord)(e)),
                            S = {
                                type: r.GuildFeedItemTypes.MESSAGE,
                                id: (0, E.default)(e),
                                sortIndex: t,
                                message: m,
                                referenceMessages: F,
                                featured: null !== (l = e.featured) && void 0 !== l && l,
                                highlighted: null !== (a = e.highlighted) && void 0 !== a && a,
                                unreadMention: null !== (o = e.unread_mention) && void 0 !== o && o,
                                seen: e.seen
                            };
                        return f(e) && (S = {
                            ...S,
                            featuredItem: I(e.featured_item)
                        }), S;
                    case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        let T = e.messages.map(e => ({
                            message: (0, u.createMessageRecord)(e.message),
                            referenceMessages: e.reference_messages.map(e => (0, u.createMessageRecord)(e))
                        }));
                        return {
                            type: r.GuildFeedItemTypes.MESSAGE_BUNDLE, id: e.id, sortIndex: t, messages: T, featured: !1, highlighted: !1, unreadMention: null !== (c = e.unread_mention) && void 0 !== c && c, seen: e.seen
                        };
                    case r.GuildFeedItemTypes.CONVERSATION:
                        let g = function e(t) {
                            let n = t.messages.map(e => (0, u.createMessageRecord)(e.message));
                            return {
                                id: t.id,
                                type: t.type,
                                messages: n,
                                children: t.children.map(t => e(t))
                            }
                        }(e.root);
                        return {
                            type: r.GuildFeedItemTypes.CONVERSATION, id: e.id, sortIndex: t, root: g, featured: !1, highlighted: !1, unreadMention: null !== (_ = e.unread_mention) && void 0 !== _ && _, seen: e.seen
                        };
                    default:
                        return null
                }
            }

            function S(e) {
                return !(e.hasFlag(o.ChannelFlags.GUILD_FEED_REMOVED) || e.isNSFW()) && !0
            }

            function T(e) {
                return !!l.MessageTypesSets.AVAILABLE_IN_GUILD_FEED.has(e.type) || !1
            }
            let g = e => c.default.Messages.GUILD_FEED_FEATURE_ITEM_MENU_ITEM_TEXT.format({
                    timePeriod: e
                }),
                G = () => [{
                    value: _.ONE_DAY,
                    timePeriod: c.default.Messages.GUILD_FEED_FEATURE_ITEM_24_HOURS
                }, {
                    value: _.THREE_DAYS,
                    timePeriod: c.default.Messages.GUILD_FEED_FEATURE_ITEM_THREE_DAYS
                }, {
                    value: _.SEVEN_DAYS,
                    timePeriod: c.default.Messages.GUILD_FEED_FEATURE_ITEM_SEVEN_DAYS
                }],
                A = (e, t) => null != t && t.isThread() ? t.id : null != e && "details" in e && null != e.details && "initialMessageId" in e.details ? e.details.initialMessageId : null;

            function D(e) {
                switch (e.type) {
                    case r.GuildFeedItemTypes.MESSAGE:
                    case r.GuildFeedItemTypes.FORUM_POST:
                        return e.message.channel_id;
                    case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return e.messages[0].message.channel_id;
                    case r.GuildFeedItemTypes.CONVERSATION:
                        return e.root.messages[0].channel_id;
                    default:
                        (0, a.assertNever)(e)
                }
            }
        },
        60036: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                getAllMessagesFromFeedItem: function() {
                    return l
                },
                getAllMessageIdsFromFeedItem: function() {
                    return u
                }
            }), n("222007"), n("834022");
            var d = n("611221"),
                i = n("449008");

            function r(e) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.MESSAGE:
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return e.message;
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return e.messages[e.messages.length - 1].message;
                    case d.GuildFeedItemTypes.CONVERSATION:
                        return e.root.messages[e.root.messages.length - 1];
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function l(e) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.MESSAGE:
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return new Set([e.message]);
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return new Set(e.messages.map(e => e.message));
                    case d.GuildFeedItemTypes.CONVERSATION:
                        return new Set(function e(t) {
                            let n = t.children.map(t => e(t));
                            return [t.messages, ...n].flat()
                        }(e.root));
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function u(e) {
                return new Set(Array.from(l(e)).map(e => e.id))
            }
        },
        145708: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                createFakeGuildFeedItem: function() {
                    return s
                }
            });
            var d = n("611221"),
                i = n("430475"),
                r = n("449008"),
                l = n("2804");

            function u(e) {
                switch (e.entityType) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return {
                            entityId: e.entity.id, details: {
                                parent_channel_id: e.entity.parent_id
                            }, entityType: e.entityType, guildId: e.guildId
                        };
                    case d.GuildFeedItemTypes.MESSAGE:
                        return {
                            entityId: e.entity.id, details: {
                                channel_id: e.entity.channel_id
                            }, entityType: e.entityType, guildId: e.guildId
                        };
                    default:
                        (0, r.assertNever)(e)
                }
            }

            function s(e) {
                switch (e.entityType) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        let t = e.entity.id,
                            {
                                firstMessage: n
                            } = i.default.getMessage(t);
                        if (null == n) return null;
                        return {
                            type: d.GuildFeedItemTypes.FORUM_POST, id: (0, l.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: n, thread: e.entity, featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                        };
                    case d.GuildFeedItemTypes.MESSAGE:
                        return {
                            type: d.GuildFeedItemTypes.MESSAGE, id: (0, l.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: e.entity, referenceMessages: [], featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                        }
                }
            }
        },
        2804: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE: function() {
                    return l
                },
                default: function() {
                    return u
                },
                getGuildFeedItemIdFromFeatureableItem: function() {
                    return s
                },
                getFeedItemTypeFromId: function() {
                    return a
                }
            });
            var d = n("611221"),
                i = n("449008");
            let r = e => "".concat(d.GuildFeedItemTypes.FORUM_POST, "/").concat(e),
                l = e => "".concat(d.GuildFeedItemTypes.MESSAGE, "/").concat(e);

            function u(e) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return r(e.message.id);
                    case d.GuildFeedItemTypes.MESSAGE:
                        return l(e.message.id);
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                    case d.GuildFeedItemTypes.CONVERSATION:
                        return e.id;
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function s(e) {
                switch (e.entityType) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return r(e.entity.id);
                    case d.GuildFeedItemTypes.MESSAGE:
                        return l(e.entity.id);
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function a(e) {
                return e.split("/")[0]
            }
        }
    }
]);
//# sourceMappingURL=64612.26d2bf1afbde26a43a76.js.map