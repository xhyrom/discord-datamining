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
                    return l
                },
                COLLAPSED_SIZE_MEDIA_QUERY: function() {
                    return c
                },
                GUILD_FEED_CHANNEL_TYPES: function() {
                    return _
                },
                GuildHomeLandingSource: function() {
                    return r
                }
            }), n("222007");
            var d, i, l, r, u, s, a, E, o = n("298386");
            (u = d || (d = {})).MESSAGE_CLICKED = "message_clicked", u.MESSAGE_CHANNEL_CLICKED = "message_channel_clicked", u.REACTION_ADDED = "reaction_added", u.REACTION_REMOVED = "reaction_removed", u.THREAD_EMBED_CLICKED = "thread_embed_clicked", u.LINK_CLICKED = "link_clicked", u.IMAGE_CLICKED = "image_clicked", u.BUTTON_CLICKED = "button_clicked", u.REFERENCED_MESSAGE_CLICKED = "referenced_message_clicked", u.MESSAGED_IN_SIDEBAR = "messaged_in_sidebar", u.REPLIED_IN_SIDEBAR = "replied_in_sidebar", u.REPLIED_TO_MESSAGE = "replied_to_message", u.EXPANDED_ITEM = "expanded_item", u.VIEW_MORE_REPLIES = "view_more_replies", (s = i || (i = {})).UNREAD = "UNREAD", s.READ = "READ", s.HIGHLIGHTED = "HIGHLIGHTED", s.ALL = "ALL", (a = l || (l = {}))[a.SEGMENTED_READ = 0] = "SEGMENTED_READ", a[a.TOP = 1] = "TOP", a[a.NEW = 2] = "NEW";
            let c = "(max-width: 1300px)",
                _ = new Set([o.ChannelTypes.GUILD_TEXT, o.ChannelTypes.GUILD_ANNOUNCEMENT, o.ChannelTypes.GUILD_FORUM]);
            (E = r || (r = {})).ORGANIC = "ORGANIC", E.TIMER = "TIMER", E.HIGHLIGHTS = "HIGHLIGHTS"
        },
        185014: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_FETCH_LIMIT: function() {
                    return S
                },
                LoadingStatus: function() {
                    return d
                },
                default: function() {
                    return J
                }
            }), n("424973"), n("222007");
            var d, i, l = n("446674"),
                r = n("407846"),
                u = n("913144"),
                s = n("692038"),
                a = n("432173"),
                E = n("271938"),
                o = n("299039"),
                c = n("886484"),
                _ = n("60036"),
                I = n("145708"),
                f = n("2804"),
                m = n("515631"),
                F = n("724210");
            let S = 10;
            (i = d || (d = {}))[i.LOADING_FRESH_FEED = 0] = "LOADING_FRESH_FEED", i[i.LOADING_PAGE = 1] = "LOADING_PAGE", i[i.NONE = 2] = "NONE";
            let T = {
                    loading: 2,
                    error: null
                },
                g = {
                    offset: null,
                    hasMoreItems: null
                },
                G = {},
                A = {},
                D = {},
                M = {},
                p = {},
                v = {},
                h = {},
                y = {};

            function R(e) {
                let t = y[e];
                return null == t && (t = new r.default(N, L), y[e] = t), t
            }

            function L(e) {
                let {
                    featured: t,
                    sortIndex: n
                } = e;
                return "".concat(t ? "\x00" : "\x01").concat(n.toString().padStart(5, "0"))
            }

            function N(e) {
                let {
                    seen: t,
                    highlighted: n
                } = e, d = [m.GuildFeedSectionTypes.ALL];
                return n ? d.push(m.GuildFeedSectionTypes.HIGHLIGHTED) : t ? d.push(m.GuildFeedSectionTypes.READ) : d.push(m.GuildFeedSectionTypes.UNREAD), d
            }
            let O = {},
                U = {},
                C = {},
                H = {};

            function P(e, t, n) {
                var d, i;
                return null === (i = h[e]) || void 0 === i ? void 0 : null === (d = i[t]) || void 0 === d ? void 0 : d[n]
            }

            function w(e, t) {
                var n;
                return null === (n = v[e]) || void 0 === n ? void 0 : n[t]
            }

            function b(e) {
                let t = (0, _.default)(e);
                return w(t.channel_id, t.id)
            }

            function V(e, t, n) {
                if (null == e || null == t) return !1;
                let d = w(e, t);
                if (null == d) return !1;
                let i = P(d, e, t);
                if (null == i) return !1;
                let l = n(i);
                return h[d][e][t] = l, !0
            }

            function k(e, t) {
                (0, _.getAllMessagesFromFeedItem)(t).forEach(t => B(e, t))
            }

            function B(e, t) {
                var n, d;
                (null === (n = h[e]) || void 0 === n ? void 0 : n[t.channel_id]) == null && (h[e] = null !== (d = h[e]) && void 0 !== d ? d : {}, h[e][t.channel_id] = {}), h[e][t.channel_id][t.id] = t, null == v[t.channel_id] && (v[t.channel_id] = {}), v[t.channel_id][t.id] = e
            }

            function Y(e, t) {
                let n = R(e),
                    d = n.values(m.GuildFeedSectionTypes.ALL);
                for (let e of d)
                    if ((0, _.getAllMessageIdsFromFeedItem)(e).has(t)) return e
            }

            function x(e, t) {
                var n, d, i;
                let l = w(e, t);
                return null != l && (null === (d = h[l]) || void 0 === d || null === (n = d[e]) || void 0 === n || delete n[t], null === (i = v[e]) || void 0 === i || delete i[t], ! function(e, t) {
                    let n = Y(e, t);
                    if (null == n) return;
                    let d = (0, f.default)(n),
                        i = R(e),
                        l = Array.from((0, _.getAllMessagesFromFeedItem)(n));
                    !(l.filter(t => P(e, t.channel_id, t.id)).length > 0) && i.delete(d)
                }(l, t), !0)
            }

            function K(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: d,
                    userId: i,
                    emoji: l
                } = e;
                if (!(0, a.shouldApplyReaction)(e)) return !1;
                let r = E.default.getId() === i;
                return V(n, d, n => {
                    let {
                        reactionType: d
                    } = e;
                    return "MESSAGE_REACTION_ADD" === t ? n.addReaction(l, r, e.colors, d) : n.removeReaction(l, r, d)
                })
            }

            function W(e) {
                let {
                    channel: t
                } = e;
                return X(t)
            }

            function X(e) {
                var t;
                let n = e.guild_id;
                if (null == n) return !1;
                delete v[e.id], null === (t = h[n]) || void 0 === t || delete t[e.id]
            }
            class j extends l.default.Store {
                getLastFetchedMillis(e) {
                    return G[e]
                }
                getFeedItemsForGuild(e) {
                    let t = R(e);
                    return t.values()
                }
                getFeedItemSection(e, t) {
                    let n = R(e);
                    return n.values(t)
                }
                getItem(e, t) {
                    return R(e).get(t)
                }
                getItemForMessageId(e, t) {
                    return Y(e, t)
                }
                getMessageItem(e, t) {
                    return this.getItem(e, (0, f.GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE)(t))
                }
                getLoadId(e) {
                    var t;
                    return null === (t = p[e]) || void 0 === t ? void 0 : t.load_id
                }
                getCachedMessage(e, t, n) {
                    return P(e, t, n)
                }
                getFetchStatus(e) {
                    var t;
                    return null !== (t = A[e]) && void 0 !== t ? t : T
                }
                getFeaturedItemsFetchStatus(e) {
                    var t;
                    return null !== (t = M[e]) && void 0 !== t ? t : T
                }
                getPaginationStatus(e) {
                    var t;
                    return null !== (t = D[e]) && void 0 !== t ? t : g
                }
                getIsItemHiding(e, t) {
                    var n;
                    return !!(null === (n = O[e]) || void 0 === n ? void 0 : n.has(t))
                }
                getIsItemHidden(e, t) {
                    var n;
                    return !!(null === (n = U[e]) || void 0 === n ? void 0 : n.has(t))
                }
                getIsItemFeatured(e) {
                    var t;
                    let n = (0, f.getGuildFeedItemIdFromFeatureableItem)(e),
                        {
                            guildId: d
                        } = e;
                    return !!(null === (t = C[d]) || void 0 === t ? void 0 : t.has(n))
                }
                getFeaturedItems(e) {
                    var t;
                    return Object.values(null !== (t = H[e]) && void 0 !== t ? t : [])
                }
                getFeaturedItemByMessageId(e, t) {
                    var n;
                    return Object.values(null !== (n = H[e]) && void 0 !== n ? n : []).find(e => "message" in e && e.message.id === t)
                }
            }
            j.displayName = "GuildFeedStore";
            var J = new j(u.default, {
                GUILD_FEED_FETCH_FRESH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    A[t] = {
                        loading: 0,
                        error: null
                    }, delete y[t], delete p[t], delete D[t], O[t] = new Set, U[t] = new Set, C[t] = new Set, h[t] = {}
                },
                GUILD_FEED_FETCH_PAGE_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    A[t] = {
                        loading: 1,
                        error: null
                    }
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t, n, d, i, l;
                    let {
                        guildId: r,
                        data: u
                    } = e;
                    if (G[r] = Date.now(), A[r] = {
                            loading: 2,
                            error: null
                        }, r in p && p[r].load_id !== u.load_id) return;
                    let s = null !== (i = null === (n = p[r]) || void 0 === n ? void 0 : null === (t = n.results) || void 0 === t ? void 0 : t.items) && void 0 !== i ? i : [];
                    p[r] = {
                        load_id: u.load_id,
                        results: {
                            items: s.concat(u.results.items)
                        }
                    };
                    let a = R(r),
                        E = a.values().length,
                        o = E;
                    for (let e of u.results.items) {
                        let t = (0, c.createGuildFeedItemFromServer)(e, o);
                        if (null != t) o += 1, null == a.get(t.id) && (t.featured && C[r].add(t.id), k(r, t), a.set(t.id, t))
                    }
                    let _ = null !== (l = null === (d = D[r]) || void 0 === d ? void 0 : d.offset) && void 0 !== l ? l : 0;
                    D[r] = {
                        offset: _ + S,
                        hasMoreItems: E !== a.values().length
                    }
                },
                GUILD_FEED_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t,
                        error: n
                    } = e;
                    A[t] = {
                        loading: 2,
                        error: n
                    }
                },
                GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        data: n
                    } = e;
                    M[t] = {
                        loading: 2,
                        error: null
                    };
                    let d = {};
                    for (let [e, i] of n.results.entries()) {
                        let n = (0, c.createGuildFeedItemFromServer)(i, e);
                        null != n && (0, c.isGuildFeedFeaturedItem)(n) && (n.featured && C[t].add(n.id), k(t, n), d[n.id] = n)
                    }
                    H[t] = d
                },
                GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t,
                        error: n
                    } = e;
                    M[t] = {
                        loading: 2,
                        error: n
                    }
                },
                GUILD_FEED_ITEM_REMOVE: function(e) {
                    let {
                        item: t
                    } = e;
                    (0, _.getAllMessagesFromFeedItem)(t).forEach(e => x(e.channel_id, e.id))
                },
                GUILD_FEED_ITEM_HIDE: function(e) {
                    let {
                        item: t
                    } = e, n = (0, f.default)(t), d = b(t);
                    null != d && (!(d in O) && (O[d] = new Set), O[d].add(n))
                },
                GUILD_FEED_ITEM_UNHIDE: function(e) {
                    let {
                        item: t
                    } = e, n = (0, f.default)(t), d = b(t);
                    null != d && O[d].delete(n)
                },
                GUILD_FEED_FEATURE_ITEM: function(e) {
                    var t, n, d;
                    let {
                        featureableItem: i,
                        options: l
                    } = e, {
                        guildId: r
                    } = i, u = (0, f.getGuildFeedItemIdFromFeatureableItem)(i);
                    if (!(r in C) && (C[r] = new Set), C[r].add(u), !l.hoist) return;
                    let s = R(r),
                        a = null !== (d = s.get(u)) && void 0 !== d ? d : (0, I.createFakeGuildFeedItem)(i);
                    null != a && (null != a.message && (null === (n = h[r]) || void 0 === n ? void 0 : null === (t = n[a.message.channel_id]) || void 0 === t ? void 0 : t[a.message.id]) == null && B(r, a.message), s.delete(a.id), a.featured = !0, a.seen = !1, s.set(a.id, a))
                },
                GUILD_FEED_UNFEATURE_ITEM: function(e) {
                    var t, n, d, i;
                    let {
                        featureableItem: l
                    } = e, {
                        guildId: r
                    } = l, u = (0, f.getGuildFeedItemIdFromFeatureableItem)(l);
                    t = r, n = u, null === (d = C[t]) || void 0 === d || d.delete(n), null === (i = H[t]) || void 0 === i || delete i[n]
                },
                CHANNEL_SELECT: function() {
                    for (let e of o.default.keys(O)) null == U[e] && (U[e] = new Set), U[e] = new Set([...Array.from(U[e]), ...Array.from(O[e])]), delete O[e]
                },
                CHANNEL_DELETE: W,
                THREAD_DELETE: W,
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    if (null == G[n.id]) return !1;
                    for (let e in delete G[n.id], delete p[n.id], null !== (t = h[n.id]) && void 0 !== t ? t : {}) delete v[e];
                    delete h[n.id], delete y[n.id]
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t)
                        if (null == e ? void 0 : e.hasFlag(F.ChannelFlags.GUILD_FEED_REMOVED)) return X(e)
                },
                LOGOUT: function() {
                    G = {}, p = {}, v = {}, h = {}, y = {}, O = {}, U = {}, C = {}, H = {}
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e;
                    return V(t.channel_id, t.id, e => (0, s.updateMessageRecord)(e, t))
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e;
                    return x(n, t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, d = !1;
                    for (let e of t) d = x(n, e) || d;
                    return d
                },
                MESSAGE_REACTION_ADD: K,
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: d
                    } = e, i = E.default.getId();
                    return V(t, n, e => e.addReactionBatch(d, i))
                },
                MESSAGE_REACTION_REMOVE: K,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e;
                    return V(t, n, e => e.set("reactions", []))
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: d
                    } = e;
                    return V(t, n, e => e.removeReactionsForEmoji(d))
                }
            })
        },
        886484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FEATURE_EXPIRES_SECONDS: function() {
                    return I
                },
                isGuildFeedFeaturedItem: function() {
                    return F
                },
                createGuildFeedItemFromServer: function() {
                    return S
                },
                isChannelAvailableInGuildFeed: function() {
                    return T
                },
                isMessageAvailableInGuildFeed: function() {
                    return g
                },
                createFeatureItemsTimeLabel: function() {
                    return G
                },
                getFeatureItemsTimes: function() {
                    return A
                },
                getSidebarMessageId: function() {
                    return D
                },
                getChannelIdForItem: function() {
                    return M
                }
            });
            var d = n("917351"),
                i = n.n(d),
                l = n("611221"),
                r = n("637612"),
                u = n("692038"),
                s = n("233069"),
                a = n("449008"),
                E = n("299039"),
                o = n("2804"),
                c = n("724210"),
                _ = n("782340");
            let I = {
                ONE_DAY: 86400,
                THREE_DAYS: 259200,
                SEVEN_DAYS: 604800
            };

            function f(e) {
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

            function m(e) {
                return null != e.featured_item || !1
            }

            function F(e) {
                return null != e.featuredItem || !1
            }

            function S(e, t) {
                var n, d, r, a, E, c, _;
                switch (e.type) {
                    case l.GuildFeedItemTypes.FORUM_POST: {
                        let i = (0, u.createMessageRecord)(e.message),
                            r = (0, s.createChannelRecordFromServer)(e.thread),
                            a = {
                                type: l.GuildFeedItemTypes.FORUM_POST,
                                id: (0, o.default)(e),
                                sortIndex: t,
                                message: i,
                                thread: r,
                                featured: null !== (n = e.featured) && void 0 !== n && n,
                                highlighted: null !== (d = e.highlighted) && void 0 !== d && d,
                                seen: e.seen,
                                unreadMention: !1
                            };
                        return m(e) && (a = {
                            ...a,
                            featuredItem: f(e.featured_item)
                        }), a
                    }
                    case l.GuildFeedItemTypes.MESSAGE:
                        let I = (0, u.createMessageRecord)(e.message),
                            F = i.map(e.reference_messages, e => (0, u.createMessageRecord)(e)),
                            S = {
                                type: l.GuildFeedItemTypes.MESSAGE,
                                id: (0, o.default)(e),
                                sortIndex: t,
                                message: I,
                                referenceMessages: F,
                                featured: null !== (r = e.featured) && void 0 !== r && r,
                                highlighted: null !== (a = e.highlighted) && void 0 !== a && a,
                                unreadMention: null !== (E = e.unread_mention) && void 0 !== E && E,
                                seen: e.seen
                            };
                        return m(e) && (S = {
                            ...S,
                            featuredItem: f(e.featured_item)
                        }), S;
                    case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        let T = e.messages.map(e => ({
                            message: (0, u.createMessageRecord)(e.message),
                            referenceMessages: e.reference_messages.map(e => (0, u.createMessageRecord)(e))
                        }));
                        return {
                            type: l.GuildFeedItemTypes.MESSAGE_BUNDLE, id: e.id, sortIndex: t, messages: T, featured: !1, highlighted: !1, unreadMention: null !== (c = e.unread_mention) && void 0 !== c && c, seen: e.seen
                        };
                    case l.GuildFeedItemTypes.CONVERSATION:
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
                            type: l.GuildFeedItemTypes.CONVERSATION, id: e.id, sortIndex: t, root: g, featured: !1, highlighted: !1, unreadMention: null !== (_ = e.unread_mention) && void 0 !== _ && _, seen: e.seen
                        };
                    default:
                        return null
                }
            }

            function T(e) {
                return !(e.hasFlag(c.ChannelFlags.GUILD_FEED_REMOVED) || e.isNSFW()) && !0
            }

            function g(e) {
                return !!r.MessageTypesSets.AVAILABLE_IN_GUILD_FEED.has(e.type) || !1
            }
            let G = e => _.default.Messages.GUILD_FEED_FEATURE_ITEM_MENU_ITEM_TEXT.format({
                    timePeriod: e
                }),
                A = () => [{
                    value: I.ONE_DAY,
                    timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_24_HOURS
                }, {
                    value: I.THREE_DAYS,
                    timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_THREE_DAYS
                }, {
                    value: I.SEVEN_DAYS,
                    timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_SEVEN_DAYS
                }],
                D = (e, t) => null != t && t.isThread() ? E.default.castChannelIdAsMessageId(t.id) : null != e && "details" in e && null != e.details && "initialMessageId" in e.details ? e.details.initialMessageId : null;

            function M(e) {
                switch (e.type) {
                    case l.GuildFeedItemTypes.MESSAGE:
                    case l.GuildFeedItemTypes.FORUM_POST:
                        return e.message.channel_id;
                    case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return e.messages[0].message.channel_id;
                    case l.GuildFeedItemTypes.CONVERSATION:
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
                    return l
                },
                getAllMessagesFromFeedItem: function() {
                    return r
                },
                getAllMessageIdsFromFeedItem: function() {
                    return u
                }
            }), n("222007"), n("834022");
            var d = n("611221"),
                i = n("449008");

            function l(e) {
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

            function r(e) {
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
                return new Set(Array.from(r(e)).map(e => e.id))
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
                l = n("449008"),
                r = n("2804");

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
                        (0, l.assertNever)(e)
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
                            type: d.GuildFeedItemTypes.FORUM_POST, id: (0, r.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: n, thread: e.entity, featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                        };
                    case d.GuildFeedItemTypes.MESSAGE:
                        return {
                            type: d.GuildFeedItemTypes.MESSAGE, id: (0, r.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: e.entity, referenceMessages: [], featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                        }
                }
            }
        },
        2804: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE: function() {
                    return u
                },
                default: function() {
                    return s
                },
                getGuildFeedItemIdFromFeatureableItem: function() {
                    return a
                },
                getFeedItemTypeFromId: function() {
                    return E
                }
            });
            var d = n("611221"),
                i = n("449008"),
                l = n("299039");
            let r = e => "".concat(d.GuildFeedItemTypes.FORUM_POST, "/").concat(e),
                u = e => "".concat(d.GuildFeedItemTypes.MESSAGE, "/").concat(e);

            function s(e) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return r(l.default.castMessageIdAsChannelId(e.message.id));
                    case d.GuildFeedItemTypes.MESSAGE:
                        return u(e.message.id);
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                    case d.GuildFeedItemTypes.CONVERSATION:
                        return e.id;
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function a(e) {
                switch (e.entityType) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return r(e.entity.id);
                    case d.GuildFeedItemTypes.MESSAGE:
                        return u(e.entity.id);
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function E(e) {
                return e.split("/")[0]
            }
        }
    }
]);
//# sourceMappingURL=64612.9a1ddaa5961bd1fdc234.js.map