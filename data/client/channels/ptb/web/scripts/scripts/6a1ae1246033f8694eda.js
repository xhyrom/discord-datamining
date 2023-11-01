(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53509"], {
        713810: function(e, t, d) {
            "use strict";
            d.r(t), d.d(t, {
                sendFeedShownAnalytics: function() {
                    return A
                },
                fetchGuildFeed: function() {
                    return G
                },
                markGuildFeedItemAsSeen: function() {
                    return U
                },
                markGuildFeedItemAsUnseen: function() {
                    return M
                },
                removeItemFromGuildFeed: function() {
                    return R
                },
                hideItemFromGuildFeed: function() {
                    return L
                },
                fetchGuildFeedFeaturedItems: function() {
                    return k
                },
                featureGuildFeedItem: function() {
                    return w
                },
                unfeatureGuildFeedItem: function() {
                    return C
                },
                unhideItemFromGuildFeed: function() {
                    return H
                },
                setFeedItemPreference: function() {
                    return N
                },
                trackFeedItemInteracted: function() {
                    return b
                }
            });
            var n = d("917351"),
                i = d.n(n),
                l = d("611221"),
                a = d("801110"),
                u = d("885167"),
                s = d("872717"),
                r = d("913144"),
                E = d("599417"),
                o = d("887446"),
                _ = d("27618"),
                f = d("938237"),
                c = d("395118"),
                I = d("599110"),
                F = d("449008"),
                h = d("350928"),
                m = d("185014"),
                p = d("60036"),
                D = d("145708"),
                S = d("2804"),
                y = d("515631"),
                g = d("49111");

            function T(e, t) {
                return t.map(t => m.default.getItem(e, t)).filter(e => {
                    let t = null == e ? null : (0, p.default)(e);
                    return null != t && !_.default.isBlocked(t.author.id)
                }).filter(F.isNotNullish).map(e => (0, S.default)(e))
            }

            function A(e) {
                I.default.track(g.AnalyticEvents.FEED_SHOWN, {
                    guild_id: e,
                    load_id: m.default.getLoadId(e),
                    home_session_id: o.default.getHomeSessionId(e)
                })
            }
            async function G(e) {
                let {
                    guildId: t,
                    refresh: d,
                    flushSeenItems: n,
                    highlightedItemData: a,
                    limit: u
                } = e, _ = Date.now(), f = d ? 0 : m.default.getPaginationStatus(t).offset, c = null == f || 0 === f;
                r.default.dispatch({
                    type: c ? "GUILD_FEED_FETCH_FRESH_START" : "GUILD_FEED_FETCH_PAGE_START",
                    guildId: t
                });
                let F = o.default.getHomeSessionId(t);
                try {
                    await (null == n ? void 0 : n());
                    let e = {
                            limit: null != u ? u : m.GUILD_FEED_FETCH_LIMIT,
                            offset: c ? 0 : f,
                            load_id: c ? null : m.default.getLoadId(t),
                            ...null != a && c && {
                                highlight_channel_id: a.channelId,
                                highlight_message_id: a.messageId
                            }
                        },
                        d = await s.default.get({
                            url: g.Endpoints.GUILD_FEED(t),
                            query: e
                        }),
                        E = d.body,
                        h = m.default.getFeedItemSection(t, y.GuildFeedSectionTypes.READ).map(e => e.id),
                        p = m.default.getFeedItemSection(t, y.GuildFeedSectionTypes.UNREAD).map(e => e.id),
                        D = m.default.getFeedItemsForGuild(t).filter(e => e.featured).map(e => e.id);
                    await r.default.dispatch({
                        type: "GUILD_FEED_FETCH_SUCCESS",
                        guildId: t,
                        data: E,
                        fresh: c
                    });
                    let S = m.default.getFeedItemSection(t, y.GuildFeedSectionTypes.READ).map(e => e.id),
                        A = m.default.getFeedItemSection(t, y.GuildFeedSectionTypes.UNREAD).map(e => e.id),
                        G = m.default.getFeedItemsForGuild(t).filter(e => e.featured).map(e => e.id),
                        U = Date.now() - _,
                        M = (null != f ? f : 0) / m.GUILD_FEED_FETCH_LIMIT;
                    ! function(e) {
                        let {
                            guildId: t,
                            loadTime: d,
                            startHomeSessionId: n,
                            page: i,
                            newUnreadFeedItemIds: l,
                            newReadFeedItemIds: a,
                            newFeaturedItemIds: u
                        } = e;
                        I.default.track(g.AnalyticEvents.FEED_LOADED, {
                            guild_id: t,
                            load_id: m.default.getLoadId(t),
                            unread_feed_item_ids: T(t, l),
                            read_feed_item_ids: T(t, a),
                            load_time_millis: d,
                            home_session_id: o.default.getHomeSessionId(t),
                            start_home_session_id: n,
                            featured_item_ids: T(t, u),
                            page: i
                        })
                    }({
                        guildId: t,
                        loadTime: U,
                        startHomeSessionId: F,
                        page: M,
                        newReadFeedItemIds: i.difference(S, h),
                        newUnreadFeedItemIds: i.difference(A, p),
                        newFeaturedItemIds: i.difference(G, D)
                    }), ! function(e, t) {
                        let d = t.results.items.filter(e => e.type === l.GuildFeedItemTypes.FORUM_POST);
                        d.length > 0 && r.default.dispatch({
                            type: "LOAD_THREADS_SUCCESS",
                            threads: d.map(e => e.thread),
                            firstMessages: d.map(e => e.message),
                            guildId: e
                        })
                    }(t, E)
                } catch (e) {
                    throw r.default.dispatch({
                        type: "GUILD_FEED_FETCH_FAILURE",
                        guildId: t,
                        error: new E.default(e)
                    }), e
                }
            }

            function U(e, t, d) {
                (0, f.markAnalyticsFeedItemSeen)((0, h.getGuildFeedSeenManagerId)(e), t, d)
            }

            function M(e, t, d) {
                (0, f.markAnalyticsFeedItemUnseen)((0, h.getGuildFeedSeenManagerId)(e), t, d)
            }
            async function R(e) {
                let t = (0, p.default)(e),
                    d = await s.default.post({
                        url: g.Endpoints.GUILD_FEED_MESSAGE_REMOVE(t.channel_id, t.id)
                    });
                return r.default.dispatch({
                    type: "GUILD_FEED_ITEM_REMOVE",
                    item: e
                }), d
            }
            async function L(e, t) {
                let d = (0, p.default)(e),
                    n = await s.default.put({
                        url: g.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(t),
                        body: {
                            channel_id: d.channel_id,
                            message_id: d.id,
                            load_id: m.default.getLoadId(t),
                            preference: u.GuildFeedPreferenceOptions.HIDDEN,
                            entity_type: a.GuildFeedPreferenceEntityTypes.MESSAGE
                        }
                    });
                return r.default.dispatch({
                    type: "GUILD_FEED_ITEM_HIDE",
                    item: e
                }), n
            }
            async function k(e) {
                try {
                    let t = await s.default.get({
                            url: g.Endpoints.GUILD_FEED_FEATURE_ITEM(e)
                        }),
                        d = t.body;
                    r.default.dispatch({
                        type: "GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS",
                        guildId: e,
                        data: d
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE",
                        guildId: e,
                        error: new E.default(t)
                    }), t
                }
            }
            async function w(e, t, d) {
                let {
                    entityId: n,
                    details: i,
                    guildId: l,
                    entityType: a
                } = (0, D.default)(e);
                try {
                    let u = await s.default.put({
                        url: g.Endpoints.GUILD_FEED_FEATURE_ITEM(l),
                        body: {
                            entity_id: n,
                            entity_type: a,
                            expires_at: t,
                            details: i
                        }
                    });
                    return r.default.dispatch({
                        type: "GUILD_FEED_FEATURE_ITEM",
                        featureableItem: e,
                        options: d
                    }), u
                } catch (e) {
                    throw e
                }
            }
            async function C(e) {
                let {
                    entityId: t,
                    guildId: d,
                    entityType: n
                } = (0, D.default)(e);
                try {
                    let i = await s.default.delete({
                        url: g.Endpoints.GUILD_FEED_FEATURE_ITEM(d),
                        body: {
                            entity_id: t,
                            entity_type: n
                        }
                    });
                    return r.default.dispatch({
                        type: "GUILD_FEED_UNFEATURE_ITEM",
                        featureableItem: e
                    }), i
                } catch (e) {
                    throw e
                }
            }
            async function H(e, t) {
                let d = (0, p.default)(e),
                    n = await s.default.delete({
                        url: g.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(t),
                        body: {
                            channel_id: d.channel_id,
                            message_id: d.id,
                            load_id: m.default.getLoadId(t),
                            entity_type: a.GuildFeedPreferenceEntityTypes.MESSAGE
                        }
                    });
                return r.default.dispatch({
                    type: "GUILD_FEED_ITEM_UNHIDE",
                    item: e
                }), n
            }
            async function N(e, t) {
                let d = await s.default.put({
                    url: g.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(e),
                    body: {
                        ...t,
                        load_id: m.default.getLoadId(e),
                        preference: u.GuildFeedPreferenceOptions.DEMOTED
                    }
                });
                return d
            }

            function b(e) {
                let t = e.guild_id;
                null != t && ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
                    (0, f.flushAnalyticsFeedItems)((0, h.getGuildFeedSeenManagerId)(e), t)
                }(t), I.default.track(g.AnalyticEvents.FEED_ITEM_INTERACTED, e)
            }
        },
        350928: function(e, t, d) {
            "use strict";
            d.r(t), d.d(t, {
                getGuildFeedSeenManagerId: function() {
                    return I
                },
                default: function() {
                    return F
                }
            });
            var n = d("872717"),
                i = d("913144"),
                l = d("263024"),
                a = d("660478"),
                u = d("395118"),
                s = d("599110"),
                r = d("449008"),
                E = d("299039"),
                o = d("645600"),
                _ = d("185014"),
                f = d("60036"),
                c = d("49111");

            function I(e) {
                return "".concat(u.AnalyticsFeedTypes.GUILD_HOME, "_").concat(e)
            }
            class F extends u.AnalyticsFeedItemSeenManager {
                constructor({
                    loadId: e,
                    homeSessionId: t,
                    guildId: d,
                    windowId: u,
                    isPaused: F
                }) {
                    super({
                        windowId: u,
                        isPaused: F,
                        id: I(d)
                    }), this.onInitialize = () => {
                        i.default.subscribe("GUILD_FEED_ITEM_READ_ACK", this.handleReadAck)
                    }, this.onTerminate = () => {
                        i.default.unsubscribe("GUILD_FEED_ITEM_READ_ACK", this.handleReadAck)
                    }, this.onFeedItemSeen = (e, t) => {
                        t && (this.pendingReadAcks[e] = setTimeout(() => {
                            this.ackItemAsRead(e)
                        }, 3e3), this.feedItemSnapshots[e] = _.default.getItem(this.guildId, e))
                    }, this.onFeedItemUnseen = (e, t) => {
                        if (e in this.pendingReadAcks) {
                            let t = this.pendingReadAcks[e];
                            clearTimeout(t), delete this.pendingReadAcks[e]
                        }
                    }, this.createFlushSeenItemsFunction = e => {
                        let t = this.guildId,
                            d = this.loadId,
                            i = this.trackedFeedItems,
                            l = this.homeSessionId,
                            a = this.feedItemSnapshots;
                        if (null == d || null == l) return;
                        let u = {
                            guildId: t,
                            loadId: d,
                            trackedFeedItems: i,
                            feedItemSnapshots: a,
                            isForcedFlush: null != e,
                            homeSessionId: l
                        };
                        return () => (function(e) {
                            let {
                                guildId: t,
                                loadId: d,
                                homeSessionId: i,
                                trackedFeedItems: l,
                                feedItemSnapshots: a,
                                isForcedFlush: u
                            } = e, E = {};
                            for (let e of Object.keys(l)) {
                                let t = l[e],
                                    d = t.computeSeenTimeDestructive(u);
                                d > 0 && (E[e] = {
                                    additionalSeenTimeMillis: d
                                })
                            }
                            if (0 === Object.keys(E).length) return Promise.resolve();
                            let o = [],
                                _ = [],
                                I = [];
                            for (let e of Object.keys(E)) o.push(e), _.push(E[e].additionalSeenTimeMillis), E[e].additionalSeenTimeMillis >= 1e3 && I.push(e);
                            s.default.track(c.AnalyticEvents.FEED_ITEM_SEEN_BATCH, {
                                guild_id: t,
                                load_id: d,
                                feed_item_ids: o,
                                additional_seen_time_millis: _,
                                home_session_id: i
                            });
                            let F = I.map(e => a[e]).filter(r.isNotNullish).map(f.default).map(e => e.id);
                            return 0 === F.length ? Promise.resolve() : n.default.post({
                                url: c.Endpoints.GUILD_FEED_MARK_SEEN(t),
                                body: {
                                    item_ids: F
                                }
                            })
                        })(u)
                    }, this.ackItemAsRead = e => {
                        delete this.pendingReadAcks[e], !o.default.isItemSeen(this.guildId, e) && i.default.dispatch({
                            type: "GUILD_FEED_ITEM_READ_ACK",
                            guildId: this.guildId,
                            itemId: e
                        })
                    }, this.handleReadAck = async e => {
                        let {
                            guildId: t,
                            itemId: d
                        } = e;
                        if (this.guildId !== t) return;
                        let i = _.default.getItem(t, d);
                        if (null == i || !i.unreadMention || i.seen) return;
                        let u = (0, f.default)(i),
                            s = u.channel_id;
                        await l.default.unarchiveThreadIfNecessary(s);
                        let r = a.default.getMentionCount(s),
                            o = a.default.ackMessageId(s);
                        if (null == o) return;
                        let I = 0;
                        for (let e of (0, f.getAllMessagesFromFeedItem)(i)) e.mentioned && E.default.compare(e.id, o) > 0 && (I += 1);
                        0 !== I && n.default.post({
                            url: c.Endpoints.MESSAGE_ACK(s, o),
                            body: {
                                manual: !0,
                                mention_count: r - I
                            }
                        })
                    }, this.guildId = d, this.loadId = e, this.homeSessionId = t, this.pendingReadAcks = {}, this.feedItemSnapshots = {}, this.lastFlushTimeMillis = Date.now()
                }
            }
        },
        645600: function(e, t, d) {
            "use strict";
            d.r(t), d.d(t, {
                default: function() {
                    return u
                }
            });
            var n = d("446674"),
                i = d("913144");
            let l = {};
            class a extends n.default.Store {
                isItemSeen(e, t) {
                    let d = l[e];
                    return null != d && d.has(t)
                }
            }
            a.displayName = "GuildFeedSeenStore";
            var u = new a(i.default, {
                GUILD_FEED_ITEM_READ_ACK: function(e) {
                    let {
                        guildId: t,
                        itemId: d
                    } = e;
                    null == l[t] && (l[t] = new Set);
                    let n = l[t];
                    n.add(d)
                }
            })
        }
    }
]);
//# sourceMappingURL=6a1ae1246033f8694eda.js.map