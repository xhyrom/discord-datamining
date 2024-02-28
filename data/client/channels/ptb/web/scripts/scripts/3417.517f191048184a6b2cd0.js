(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3417"], {
        119334: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                preloadForumThreads: function() {
                    return G
                },
                useFirstForumPostMessage: function() {
                    return T
                },
                useMostRecentForumMessage: function() {
                    return h
                }
            });
            var r = n("392711"),
                s = n.n(r),
                i = n("661223"),
                u = n("454836"),
                d = n("312916"),
                l = n("731865"),
                a = n("84819"),
                E = n("500125"),
                c = n("491538"),
                o = n("789117"),
                _ = n("938110"),
                f = n("467006");
            class I {
                constructor(e) {
                    this._set = {}, this._defaultValueFunc = e
                }
                get(e) {
                    return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
                }
                delete(e) {
                    delete this._set[e]
                }
                hasNext() {
                    return !s().isEmpty(this._set)
                }
                next() {
                    return a.default.keys(this._set)[0]
                }
            }
            let m = new class e {
                    constructor() {
                        this.requested = new I(() => new Set)
                    }
                    request(e, t) {
                        this.requested.get(e).add(t)
                    }
                    hasRequested(e, t) {
                        return this.requested.get(e).has(t)
                    }
                    finishRequesting(e, t) {
                        let n = this.requested.get(e);
                        t.forEach(e => n.delete(e)), m.compact(e)
                    }
                    getRequested(e) {
                        return this.requested.get(e)
                    }
                    getNextBatch(e, t) {
                        return Array.from(this.requested.get(e)).slice(0, t)
                    }
                    hasNext() {
                        return this.requested.hasNext()
                    }
                    next() {
                        return this.requested.next()
                    }
                    compact(e) {
                        0 === this.requested.get(e).size && this.requested.delete(e)
                    }
                },
                g = null;

            function S(e, t) {
                if ((0, c.isForumActivityExperimentEnabled)(e)) {
                    let {
                        loaded: e,
                        message: n
                    } = _.default.getMessageState(t);
                    return !e && null == n
                }
                return !1
            }

            function F(e, t) {
                return !e && null == t
            }

            function T(e) {
                var t, n;
                let {
                    loaded: r,
                    firstMessage: s
                } = (0, i.useStateFromStoresObject)([o.default], () => o.default.getMessage(e.id)), u = (0, i.useStateFromStores)([l.default], () => l.default.getChannel(e.parent_id));
                if (null != u && (t = r, n = s, !t && null == n)) M(u, e.id);
                return {
                    loaded: r,
                    firstMessage: s
                }
            }

            function h(e, t) {
                let {
                    loaded: n,
                    message: r
                } = (0, i.useStateFromStoresObject)([_.default], () => _.default.getMessageState(t.id));
                return null != e && S(t.guild_id, t.id) && M(e, t.id), {
                    loaded: n,
                    mostRecentMessage: r
                }
            }

            function A(e, t) {
                let n = !1;
                t.forEach(t => {
                    var r, s;
                    let {
                        loaded: i,
                        firstMessage: u
                    } = o.default.getMessage(t);
                    if (r = i, s = u, !r && null == s || S(e.guild_id, t)) m.request(e.id, t), n = !0
                }), n && null == g && (g = setTimeout(D, 0))
            }

            function G(e) {
                A(e, (0, E.computeThreadIdsSnapshot)(e.id).slice(0, 10))
            }

            function M(e, t) {
                if (m.hasRequested(e.id, t)) return;
                let n = (0, E.computeThreadIdsSnapshot)(e.id),
                    r = n.findIndex(e => e === t),
                    s = n.slice(r, r + 5).filter(t => !m.hasRequested(e.id, t));
                A(e, s)
            }
            async function D() {
                try {
                    for (; m.hasNext();) await p(m.next())
                } finally {
                    g = null
                }
            }
            async function p(e) {
                let t = m.getNextBatch(e, 10);
                try {
                    if (0 === t.length) return;
                    let n = l.default.getChannel(e)?.guild_id;
                    if (null == n) return;
                    let {
                        body: {
                            threads: r
                        }
                    } = await u.default.post({
                        url: f.Endpoints.FORUM_POSTS(e),
                        body: {
                            thread_ids: t
                        }
                    });
                    d.default.dispatch({
                        type: "LOAD_FORUM_POSTS",
                        guildId: n,
                        threads: r
                    })
                } catch (e) {} finally {
                    m.finishRequesting(e, t)
                }
            }
        },
        938110: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("661223"),
                s = n("312916"),
                i = n("822534"),
                u = n("731865"),
                d = n("871831"),
                l = n("370275"),
                a = n("84819");
            let E = {};

            function c(e) {
                let t = u.default.getChannel(e?.channel_id);
                if (null == t || !t.isForumPost()) return !1;
                let n = E[t.id];
                return a.default.compare(e?.id, n?.message?.id) > -1
            }

            function o(e, t) {
                let n = null == t ? null : (0, i.createMessageRecord)(t);
                return E[e] = {
                    loaded: !0,
                    message: n
                }, !0
            }

            function _(e) {
                return E[e]
            }

            function f(e) {
                return E[e]?.message
            }

            function I(e) {
                let {
                    threads: t,
                    mostRecentMessages: n
                } = e;
                t.forEach(e => o(e.id, null)), n?.filter(l.isNotNullish).forEach(e => {
                    o(e.channel_id, e)
                })
            }
            class m extends r.default.Store {
                static #e = this.displayName = "ForumPostRecentMessageStore";
                initialize() {
                    this.waitFor(u.default, d.default)
                }
                getMessageState(e) {
                    return !(e in E) && (E[e] = {
                        loaded: !1,
                        message: null
                    }), E[e]
                }
            }
            var g = new m(s.default, {
                CONNECTION_OPEN: function() {
                    E = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || !c(e.message)) return !1;
                    e.message.channel_id === a.default.castMessageIdAsChannelId(e.message.id) ? o(e.message.channel_id, null) : o(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
                    ! function(e, t) {
                        let n = function(e) {
                                return E[e]
                            }(e),
                            r = f(e);
                        null != n && null != r && (E[e] = {
                            ...n,
                            message: (0, i.updateMessageRecord)(r, t)
                        })
                    }(e.message.channel_id, e.message)
                },
                MESSAGE_DELETE: function(e) {
                    return function(e, t) {
                        let n = f(e);
                        return n?.id === t && (delete E[e], !0)
                    }(e.channelId, e.id)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) o(e, t[e].most_recent_message)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: I,
                LOAD_THREADS_SUCCESS: I
            })
        },
        891839: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COLLAPSED_SIZE_MEDIA_QUERY: function() {
                    return o
                },
                FeedItemInteractionType: function() {
                    return d
                },
                GUILD_FEED_CHANNEL_TYPES: function() {
                    return _
                },
                GuildFeedRenderMode: function() {
                    return a
                },
                GuildFeedSectionTypes: function() {
                    return l
                },
                GuildHomeLandingSource: function() {
                    return E
                }
            });
            var r, s, i, u, d, l, a, E, c = n("499953");
            (r = d || (d = {})).MESSAGE_CLICKED = "message_clicked", r.MESSAGE_CHANNEL_CLICKED = "message_channel_clicked", r.REACTION_ADDED = "reaction_added", r.REACTION_REMOVED = "reaction_removed", r.THREAD_EMBED_CLICKED = "thread_embed_clicked", r.LINK_CLICKED = "link_clicked", r.IMAGE_CLICKED = "image_clicked", r.BUTTON_CLICKED = "button_clicked", r.REFERENCED_MESSAGE_CLICKED = "referenced_message_clicked", r.MESSAGED_IN_SIDEBAR = "messaged_in_sidebar", r.REPLIED_IN_SIDEBAR = "replied_in_sidebar", r.REPLIED_TO_MESSAGE = "replied_to_message", r.EXPANDED_ITEM = "expanded_item", r.VIEW_MORE_REPLIES = "view_more_replies", (s = l || (l = {})).UNREAD = "UNREAD", s.READ = "READ", s.HIGHLIGHTED = "HIGHLIGHTED", s.ALL = "ALL", (i = a || (a = {}))[i.SEGMENTED_READ = 0] = "SEGMENTED_READ", i[i.TOP = 1] = "TOP", i[i.NEW = 2] = "NEW";
            let o = "(max-width: 1300px)",
                _ = new Set([c.ChannelTypes.GUILD_TEXT, c.ChannelTypes.GUILD_ANNOUNCEMENT, c.ChannelTypes.GUILD_FORUM]);
            (u = E || (E = {})).ORGANIC = "ORGANIC", u.TIMER = "TIMER", u.HIGHLIGHTS = "HIGHLIGHTS"
        },
        362648: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_FETCH_LIMIT: function() {
                    return S
                },
                LoadingStatus: function() {
                    return r
                },
                default: function() {
                    return W
                }
            }), n("653041");
            var r, s, i = n("661223"),
                u = n("386695"),
                d = n("312916"),
                l = n("822534"),
                a = n("894302"),
                E = n("262047"),
                c = n("84819"),
                o = n("574737"),
                _ = n("270673"),
                f = n("399689"),
                I = n("619071"),
                m = n("891839"),
                g = n("551835");
            let S = 10;
            (s = r || (r = {}))[s.LOADING_FRESH_FEED = 0] = "LOADING_FRESH_FEED", s[s.LOADING_PAGE = 1] = "LOADING_PAGE", s[s.NONE = 2] = "NONE";
            let F = {
                    loading: 2,
                    error: null
                },
                T = {
                    offset: null,
                    hasMoreItems: null
                },
                h = {},
                A = {},
                G = {},
                M = {},
                D = {},
                p = {},
                y = {},
                R = {};

            function N(e) {
                let t = R[e];
                return null == t && (t = new u.default(O, L), R[e] = t), t
            }

            function L(e) {
                let {
                    featured: t,
                    sortIndex: n
                } = e;
                return `${t?"\x00":"\x01"}${n.toString().padStart(5,"0")}`
            }

            function O(e) {
                let {
                    seen: t,
                    highlighted: n
                } = e, r = [m.GuildFeedSectionTypes.ALL];
                return n ? r.push(m.GuildFeedSectionTypes.HIGHLIGHTED) : t ? r.push(m.GuildFeedSectionTypes.READ) : r.push(m.GuildFeedSectionTypes.UNREAD), r
            }
            let U = {},
                C = {},
                v = {},
                H = {};

            function P(e, t, n) {
                return y[e]?.[t]?.[n]
            }

            function w(e, t) {
                return p[e]?.[t]
            }

            function b(e) {
                var t, n;
                let r = (0, _.default)(e);
                return t = r.channel_id, n = r.id, p[t]?.[n]
            }

            function x(e, t, n) {
                var r, s, i, u, d;
                if (null == e || null == t) return !1;
                let l = (r = e, s = t, p[r]?.[s]);
                if (null == l) return !1;
                let a = (i = l, u = e, d = t, y[i]?.[u]?.[d]);
                if (null == a) return !1;
                let E = n(a);
                return y[l][e][t] = E, !0
            }

            function V(e, t) {
                (0, _.getAllMessagesFromFeedItem)(t).forEach(t => q(e, t))
            }

            function q(e, t) {
                y[e]?.[t.channel_id] == null && (y[e] = y[e] ?? {}, y[e][t.channel_id] = {}), y[e][t.channel_id][t.id] = t, null == p[t.channel_id] && (p[t.channel_id] = {}), p[t.channel_id][t.id] = e
            }

            function k(e, t) {
                for (let n of N(e).values(m.GuildFeedSectionTypes.ALL))
                    if ((0, _.getAllMessageIdsFromFeedItem)(n).has(t)) return n
            }

            function B(e, t) {
                var n, r;
                let s = (n = e, r = t, p[n]?.[r]);
                return null != s && (delete y[s]?.[e]?.[t], delete p[e]?.[t], ! function(e, t) {
                    let n = k(e, t);
                    if (null == n) return;
                    let r = (0, I.default)(n),
                        s = N(e);
                    !(Array.from((0, _.getAllMessagesFromFeedItem)(n)).filter(t => {
                        var n, r, s;
                        return n = e, r = t.channel_id, s = t.id, y[n]?.[r]?.[s]
                    }).length > 0) && s.delete(r)
                }(s, t), !0)
            }

            function Y(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: r,
                    userId: s,
                    emoji: i
                } = e;
                if (!(0, a.shouldApplyReaction)(e)) return !1;
                let u = E.default.getId() === s;
                return x(n, r, n => {
                    let {
                        reactionType: r
                    } = e;
                    return "MESSAGE_REACTION_ADD" === t ? n.addReaction(i, u, e.colors, r) : n.removeReaction(i, u, r)
                })
            }

            function K(e) {
                let {
                    channel: t
                } = e;
                return $(t)
            }

            function $(e) {
                let t = e.guild_id;
                if (null == t) return !1;
                delete p[e.id], delete y[t]?.[e.id]
            }
            class j extends i.default.Store {
                static #e = this.displayName = "GuildFeedStore";
                getLastFetchedMillis(e) {
                    return h[e]
                }
                getFeedItemsForGuild(e) {
                    return N(e).values()
                }
                getFeedItemSection(e, t) {
                    return N(e).values(t)
                }
                getItem(e, t) {
                    return N(e).get(t)
                }
                getItemForMessageId(e, t) {
                    return k(e, t)
                }
                getMessageItem(e, t) {
                    return this.getItem(e, (0, I.GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE)(t))
                }
                getLoadId(e) {
                    return D[e]?.load_id
                }
                getCachedMessage(e, t, n) {
                    var r, s, i;
                    return r = e, s = t, i = n, y[r]?.[s]?.[i]
                }
                getFetchStatus(e) {
                    return A[e] ?? F
                }
                getFeaturedItemsFetchStatus(e) {
                    return M[e] ?? F
                }
                getPaginationStatus(e) {
                    return G[e] ?? T
                }
                getIsItemHiding(e, t) {
                    return !!U[e]?.has(t)
                }
                getIsItemHidden(e, t) {
                    return !!C[e]?.has(t)
                }
                getIsItemFeatured(e) {
                    let t = (0, I.getGuildFeedItemIdFromFeatureableItem)(e),
                        {
                            guildId: n
                        } = e;
                    return !!v[n]?.has(t)
                }
                getFeaturedItems(e) {
                    return Object.values(H[e] ?? [])
                }
                getFeaturedItemByMessageId(e, t) {
                    return Object.values(H[e] ?? []).find(e => "message" in e && e.message.id === t)
                }
            }
            var W = new j(d.default, {
                GUILD_FEED_FETCH_FRESH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    A[t] = {
                        loading: 0,
                        error: null
                    }, delete R[t], delete D[t], delete G[t], U[t] = new Set, C[t] = new Set, v[t] = new Set, y[t] = {}
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
                    let {
                        guildId: t,
                        data: n
                    } = e;
                    if (h[t] = Date.now(), A[t] = {
                            loading: 2,
                            error: null
                        }, t in D && D[t].load_id !== n.load_id) return;
                    let r = D[t]?.results?.items ?? [];
                    D[t] = {
                        load_id: n.load_id,
                        results: {
                            items: r.concat(n.results.items)
                        }
                    };
                    let s = N(t),
                        i = s.values().length,
                        u = i;
                    for (let e of n.results.items) {
                        let n = (0, o.createGuildFeedItemFromServer)(e, u);
                        if (null != n) u += 1, null == s.get(n.id) && (n.featured && v[t].add(n.id), V(t, n), s.set(n.id, n))
                    }
                    let d = G[t]?.offset ?? 0;
                    G[t] = {
                        offset: d + S,
                        hasMoreItems: i !== s.values().length
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
                    let r = {};
                    for (let [e, s] of n.results.entries()) {
                        let n = (0, o.createGuildFeedItemFromServer)(s, e);
                        null != n && (0, o.isGuildFeedFeaturedItem)(n) && (n.featured && v[t].add(n.id), V(t, n), r[n.id] = n)
                    }
                    H[t] = r
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
                    (0, _.getAllMessagesFromFeedItem)(t).forEach(e => B(e.channel_id, e.id))
                },
                GUILD_FEED_ITEM_HIDE: function(e) {
                    let {
                        item: t
                    } = e, n = (0, I.default)(t), r = b(t);
                    null != r && (!(r in U) && (U[r] = new Set), U[r].add(n))
                },
                GUILD_FEED_ITEM_UNHIDE: function(e) {
                    let {
                        item: t
                    } = e, n = (0, I.default)(t), r = b(t);
                    null != r && U[r].delete(n)
                },
                GUILD_FEED_FEATURE_ITEM: function(e) {
                    let {
                        featureableItem: t,
                        options: n
                    } = e, {
                        guildId: r
                    } = t, s = (0, I.getGuildFeedItemIdFromFeatureableItem)(t);
                    if (!(r in v) && (v[r] = new Set), v[r].add(s), !n.hoist) return;
                    let i = N(r),
                        u = i.get(s) ?? (0, f.createFakeGuildFeedItem)(t);
                    null != u && (null != u.message && y[r]?.[u.message.channel_id]?.[u.message.id] == null && q(r, u.message), i.delete(u.id), u.featured = !0, u.seen = !1, i.set(u.id, u))
                },
                GUILD_FEED_UNFEATURE_ITEM: function(e) {
                    var t, n;
                    let {
                        featureableItem: r
                    } = e, {
                        guildId: s
                    } = r, i = (0, I.getGuildFeedItemIdFromFeatureableItem)(r);
                    t = s, n = i, v[t]?.delete(n), delete H[t]?.[n]
                },
                CHANNEL_SELECT: function() {
                    for (let e of c.default.keys(U)) null == C[e] && (C[e] = new Set), C[e] = new Set([...Array.from(C[e]), ...Array.from(U[e])]), delete U[e]
                },
                CHANNEL_DELETE: K,
                THREAD_DELETE: K,
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    if (null == h[t.id]) return !1;
                    for (let e in delete h[t.id], delete D[t.id], y[t.id] ?? {}) delete p[e];
                    delete y[t.id], delete R[t.id]
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t)
                        if (e?.hasFlag(g.ChannelFlags.GUILD_FEED_REMOVED)) return $(e)
                },
                LOGOUT: function() {
                    h = {}, D = {}, p = {}, y = {}, R = {}, U = {}, C = {}, v = {}, H = {}
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e;
                    return x(t.channel_id, t.id, e => (0, l.updateMessageRecord)(e, t))
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e;
                    return B(n, t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, r = !1;
                    for (let e of t) r = B(n, e) || r;
                    return r
                },
                MESSAGE_REACTION_ADD: Y,
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: r
                    } = e, s = E.default.getId();
                    return x(t, n, e => e.addReactionBatch(r, s))
                },
                MESSAGE_REACTION_REMOVE: Y,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e;
                    return x(t, n, e => e.set("reactions", []))
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: r
                    } = e;
                    return x(t, n, e => e.removeReactionsForEmoji(r))
                }
            })
        },
        574737: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FEATURE_EXPIRES_SECONDS: function() {
                    return f
                },
                createFeatureItemsTimeLabel: function() {
                    return h
                },
                createGuildFeedItemFromServer: function() {
                    return S
                },
                getChannelIdForItem: function() {
                    return M
                },
                getFeatureItemsTimes: function() {
                    return A
                },
                getSidebarMessageId: function() {
                    return G
                },
                isChannelAvailableInGuildFeed: function() {
                    return F
                },
                isGuildFeedFeaturedItem: function() {
                    return g
                },
                isMessageAvailableInGuildFeed: function() {
                    return T
                }
            });
            var r = n("392711"),
                s = n.n(r),
                i = n("833956"),
                u = n("751435"),
                d = n("822534"),
                l = n("775822"),
                a = n("370275"),
                E = n("84819"),
                c = n("619071"),
                o = n("551835"),
                _ = n("30175");
            let f = {
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

            function m(e) {
                return null != e.featured_item || !1
            }

            function g(e) {
                return null != e.featuredItem || !1
            }

            function S(e, t) {
                switch (e.type) {
                    case i.GuildFeedItemTypes.FORUM_POST: {
                        let n = (0, d.createMessageRecord)(e.message),
                            r = (0, l.createChannelRecordFromServer)(e.thread),
                            s = {
                                type: i.GuildFeedItemTypes.FORUM_POST,
                                id: (0, c.default)(e),
                                sortIndex: t,
                                message: n,
                                thread: r,
                                featured: e.featured ?? !1,
                                highlighted: e.highlighted ?? !1,
                                seen: e.seen,
                                unreadMention: !1
                            };
                        return m(e) && (s = {
                            ...s,
                            featuredItem: I(e.featured_item)
                        }), s
                    }
                    case i.GuildFeedItemTypes.MESSAGE:
                        let n = (0, d.createMessageRecord)(e.message),
                            r = s().map(e.reference_messages, e => (0, d.createMessageRecord)(e)),
                            u = {
                                type: i.GuildFeedItemTypes.MESSAGE,
                                id: (0, c.default)(e),
                                sortIndex: t,
                                message: n,
                                referenceMessages: r,
                                featured: e.featured ?? !1,
                                highlighted: e.highlighted ?? !1,
                                unreadMention: e.unread_mention ?? !1,
                                seen: e.seen
                            };
                        return m(e) && (u = {
                            ...u,
                            featuredItem: I(e.featured_item)
                        }), u;
                    case i.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        let a = e.messages.map(e => ({
                            message: (0, d.createMessageRecord)(e.message),
                            referenceMessages: e.reference_messages.map(e => (0, d.createMessageRecord)(e))
                        }));
                        return {
                            type: i.GuildFeedItemTypes.MESSAGE_BUNDLE, id: e.id, sortIndex: t, messages: a, featured: !1, highlighted: !1, unreadMention: e.unread_mention ?? !1, seen: e.seen
                        };
                    case i.GuildFeedItemTypes.CONVERSATION:
                        let E = function e(t) {
                            let n = t.messages.map(e => (0, d.createMessageRecord)(e.message));
                            return {
                                id: t.id,
                                type: t.type,
                                messages: n,
                                children: t.children.map(t => e(t))
                            }
                        }(e.root);
                        return {
                            type: i.GuildFeedItemTypes.CONVERSATION, id: e.id, sortIndex: t, root: E, featured: !1, highlighted: !1, unreadMention: e.unread_mention ?? !1, seen: e.seen
                        };
                    default:
                        return null
                }
            }

            function F(e) {
                return !(e.hasFlag(o.ChannelFlags.GUILD_FEED_REMOVED) || e.isNSFW()) && !0
            }

            function T(e) {
                return !!u.MessageTypesSets.AVAILABLE_IN_GUILD_FEED.has(e.type) || !1
            }
            let h = e => _.default.Messages.GUILD_FEED_FEATURE_ITEM_MENU_ITEM_TEXT.format({
                    timePeriod: e
                }),
                A = () => [{
                    value: f.ONE_DAY,
                    timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_24_HOURS
                }, {
                    value: f.THREE_DAYS,
                    timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_THREE_DAYS
                }, {
                    value: f.SEVEN_DAYS,
                    timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_SEVEN_DAYS
                }],
                G = (e, t) => null != t && t.isThread() ? E.default.castChannelIdAsMessageId(t.id) : null != e && "details" in e && null != e.details && "initialMessageId" in e.details ? e.details.initialMessageId : null;

            function M(e) {
                switch (e.type) {
                    case i.GuildFeedItemTypes.MESSAGE:
                    case i.GuildFeedItemTypes.FORUM_POST:
                        return e.message.channel_id;
                    case i.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return e.messages[0].message.channel_id;
                    case i.GuildFeedItemTypes.CONVERSATION:
                        return e.root.messages[0].channel_id;
                    default:
                        (0, a.assertNever)(e)
                }
            }
        },
        270673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                },
                getAllMessageIdsFromFeedItem: function() {
                    return d
                },
                getAllMessagesFromFeedItem: function() {
                    return u
                }
            });
            var r = n("833956"),
                s = n("370275");

            function i(e) {
                switch (e.type) {
                    case r.GuildFeedItemTypes.MESSAGE:
                    case r.GuildFeedItemTypes.FORUM_POST:
                        return e.message;
                    case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return e.messages[e.messages.length - 1].message;
                    case r.GuildFeedItemTypes.CONVERSATION:
                        return e.root.messages[e.root.messages.length - 1];
                    default:
                        (0, s.assertNever)(e)
                }
            }

            function u(e) {
                switch (e.type) {
                    case r.GuildFeedItemTypes.MESSAGE:
                    case r.GuildFeedItemTypes.FORUM_POST:
                        return new Set([e.message]);
                    case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return new Set(e.messages.map(e => e.message));
                    case r.GuildFeedItemTypes.CONVERSATION:
                        return new Set(function e(t) {
                            let n = t.children.map(t => e(t));
                            return [t.messages, ...n].flat()
                        }(e.root));
                    default:
                        (0, s.assertNever)(e)
                }
            }

            function d(e) {
                return new Set(Array.from(u(e)).map(e => e.id))
            }
        },
        399689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createFakeGuildFeedItem: function() {
                    return l
                },
                default: function() {
                    return d
                }
            });
            var r = n("833956"),
                s = n("789117"),
                i = n("370275"),
                u = n("619071");

            function d(e) {
                switch (e.entityType) {
                    case r.GuildFeedItemTypes.FORUM_POST:
                        return {
                            entityId: e.entity.id, details: {
                                parent_channel_id: e.entity.parent_id
                            }, entityType: e.entityType, guildId: e.guildId
                        };
                    case r.GuildFeedItemTypes.MESSAGE:
                        return {
                            entityId: e.entity.id, details: {
                                channel_id: e.entity.channel_id
                            }, entityType: e.entityType, guildId: e.guildId
                        };
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function l(e) {
                switch (e.entityType) {
                    case r.GuildFeedItemTypes.FORUM_POST:
                        let t = e.entity.id,
                            {
                                firstMessage: n
                            } = s.default.getMessage(t);
                        if (null == n) return null;
                        return {
                            type: r.GuildFeedItemTypes.FORUM_POST, id: (0, u.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: n, thread: e.entity, featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                        };
                    case r.GuildFeedItemTypes.MESSAGE:
                        return {
                            type: r.GuildFeedItemTypes.MESSAGE, id: (0, u.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: e.entity, referenceMessages: [], featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                        }
                }
            }
        },
        619071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE: function() {
                    return d
                },
                default: function() {
                    return l
                },
                getFeedItemTypeFromId: function() {
                    return E
                },
                getGuildFeedItemIdFromFeatureableItem: function() {
                    return a
                }
            });
            var r = n("833956"),
                s = n("370275"),
                i = n("84819");
            let u = e => `${r.GuildFeedItemTypes.FORUM_POST}/${e}`,
                d = e => `${r.GuildFeedItemTypes.MESSAGE}/${e}`;

            function l(e) {
                switch (e.type) {
                    case r.GuildFeedItemTypes.FORUM_POST:
                        return u(i.default.castMessageIdAsChannelId(e.message.id));
                    case r.GuildFeedItemTypes.MESSAGE:
                        return d(e.message.id);
                    case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                    case r.GuildFeedItemTypes.CONVERSATION:
                        return e.id;
                    default:
                        (0, s.assertNever)(e)
                }
            }

            function a(e) {
                switch (e.entityType) {
                    case r.GuildFeedItemTypes.FORUM_POST:
                        return u(e.entity.id);
                    case r.GuildFeedItemTypes.MESSAGE:
                        return d(e.entity.id);
                    default:
                        (0, s.assertNever)(e)
                }
            }

            function E(e) {
                return e.split("/")[0]
            }
        }
    }
]);
//# sourceMappingURL=3417.517f191048184a6b2cd0.js.map