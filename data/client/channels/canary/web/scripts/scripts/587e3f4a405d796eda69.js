(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26737"], {
        404607: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var i = s("872717"),
                n = s("913144"),
                a = s("404118"),
                d = s("263024"),
                l = s("938237"),
                u = s("395118"),
                r = s("250850"),
                h = s("867965"),
                o = s("49111"),
                c = s("782340");
            async function m(e, t, s) {
                try {
                    return await e()
                } catch (e) {
                    var i;
                    (null === (i = e.body) || void 0 === i ? void 0 : i.code) === o.AbortCodes.NON_MODERATED_TAG_REQUIRED && a.default.show({
                        title: t,
                        body: s
                    })
                }
            }
            var I = {
                resort(e) {
                    n.default.dispatch({
                        type: "RESORT_THREADS",
                        channelId: e
                    })
                },
                createForumTag: (e, t) => i.default.post({
                    url: o.Endpoints.FORUM_TAGS(t),
                    body: {
                        name: e.name,
                        emoji_id: e.emojiId,
                        emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                        moderated: e.moderated
                    }
                }),
                updateForumTag(e, t) {
                    let s = i.default.put({
                        url: o.Endpoints.FORUM_TAG(t, e.id),
                        body: {
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: null == e.emojiId ? e.emojiName : void 0,
                            moderated: e.moderated
                        }
                    });
                    m(() => s, c.default.Messages.FORUM_TAG_EDIT_ERROR, c.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                deleteForumTag(e, t) {
                    let s = i.default.delete({
                        url: o.Endpoints.FORUM_TAG(e, t)
                    });
                    m(() => s, c.default.Messages.FORUM_TAG_REMOVE_ERROR, c.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                updateForumPostTags: async (e, t) => (await d.default.unarchiveThreadIfNecessary(e), i.default.patch({
                    url: o.Endpoints.CHANNEL(e),
                    body: {
                        applied_tags: t
                    }
                })),
                hideAdminOnboarding(e, t) {
                    n.default.dispatch({
                        type: "ADMIN_ONBOARDING_GUIDE_HIDE",
                        channelId: e,
                        hide: t
                    })
                },
                markPostAsSeen(e, t, s) {
                    (0, l.markAnalyticsFeedItemSeen)((0, r.getForumPostSeenManagerId)(e), t, s)
                },
                markPostAsUnseen(e, t, s) {
                    (0, l.markAnalyticsFeedItemUnseen)((0, r.getForumPostSeenManagerId)(e), t, s)
                },
                flushSeenItems(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
                    (0, l.flushAnalyticsFeedItems)((0, r.getForumPostSeenManagerId)(e), t)
                },
                async searchForumPosts(e, t, s, i) {
                    n.default.dispatch({
                        type: "FORUM_SEARCH_START",
                        channelId: t
                    });
                    try {
                        let a = await d.default.searchThreads(e, t, s, i);
                        (0, h.trackForumSearched)({
                            guildId: e,
                            channelId: t,
                            numSearchResults: a.length
                        }), n.default.dispatch({
                            type: "FORUM_SEARCH_SUCCESS",
                            channelId: t,
                            threadIds: a
                        })
                    } catch {
                        n.default.dispatch({
                            type: "FORUM_SEARCH_FAILURE",
                            channelId: t
                        })
                    }
                },
                updateForumSearchQuery(e, t) {
                    n.default.dispatch({
                        type: "FORUM_SEARCH_QUERY_UPDATED",
                        channelId: e,
                        query: t
                    })
                },
                clearForumSearch(e) {
                    n.default.dispatch({
                        type: "FORUM_SEARCH_CLEAR",
                        channelId: e
                    })
                }
            }
        },
        250850: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getForumPostSeenManagerId: function() {
                    return u
                },
                markForumPostItemAsSeen: function() {
                    return r
                },
                markForumPostItemAsUnseen: function() {
                    return h
                },
                default: function() {
                    return i
                }
            }), s("424973"), s("222007");
            var i, n = s("938237"),
                a = s("395118"),
                d = s("867965"),
                l = s("318321");

            function u(e) {
                return "".concat(a.AnalyticsFeedTypes.FORUM_CHANNEL, "_").concat(e)
            }

            function r(e, t, s) {
                (0, n.markAnalyticsFeedItemSeen)(u(e), t, s)
            }

            function h(e, t, s) {
                (0, n.markAnalyticsFeedItemUnseen)(u(e), t, s)
            }
            i = class extends a.AnalyticsFeedItemSeenManager {
                constructor({
                    guildId: e,
                    channelId: t,
                    windowId: s,
                    isPaused: i
                }) {
                    super({
                        windowId: s,
                        isPaused: i,
                        id: u(t)
                    }), this.createFlushSeenItemsFunction = e => {
                        let t = this.trackedFeedItems,
                            s = this.channelId,
                            i = this.guildId,
                            n = this.sessionId,
                            a = {
                                guildId: i,
                                channelId: s,
                                sessionId: n,
                                trackedFeedItems: t,
                                isForcedFlush: null != e
                            };
                        return () => (function(e) {
                            let {
                                guildId: t,
                                channelId: s,
                                sessionId: i,
                                trackedFeedItems: n,
                                isForcedFlush: a
                            } = e, l = [], u = [];
                            for (let e of Object.keys(n)) {
                                let t = n[e],
                                    s = t.computeSeenTimeDestructive(a);
                                s > 0 && (l.push(e), u.push(s))
                            }
                            0 !== l.length && (0, d.trackForumChannelSeenBatch)({
                                guildId: t,
                                channelId: s,
                                sessionId: i,
                                postIds: l,
                                additionalTimes: u
                            })
                        })(a)
                    }, this.guildId = e, this.channelId = t, this.sessionId = (0, l.getForumChannelSessionId)(t)
                }
            }
        },
        938237: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                markAnalyticsFeedItemSeen: function() {
                    return n
                },
                markAnalyticsFeedItemUnseen: function() {
                    return a
                },
                flushAnalyticsFeedItems: function() {
                    return d
                }
            });
            var i = s("913144");

            function n(e, t, s) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: s
                })
            }

            function a(e, t, s) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: s
                })
            }

            function d(e, t) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_FLUSH",
                    id: e,
                    force: t
                })
            }
        },
        395118: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                AnalyticsFeedTypes: function() {
                    return i
                },
                ForceFlushType: function() {
                    return n
                },
                AnalyticsFeedItemSeenManager: function() {
                    return o
                }
            }), s("424973"), s("222007");
            var i, n, a, d, l = s("627445"),
                u = s.n(l),
                r = s("913144");
            (a = i || (i = {})).GUILD_HOME = "guild_home", a.FORUM_CHANNEL = "forum_channel", (d = n || (n = {}))[d.IMMEDIATE = 0] = "IMMEDIATE", d[d.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", d[d.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
            class h {
                maybeMarkSeen(e) {
                    let t = this.seenIntervals[this.seenIntervals.length - 1];
                    return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({
                        startTimeMillis: e
                    }), !0)
                }
                maybeMarkUnseen(e) {
                    let t = this.seenIntervals[this.seenIntervals.length - 1];
                    return null != t && null == t.endTimeMillis && (t.endTimeMillis = e, !0)
                }
                isVisible() {
                    let e = this.seenIntervals[this.seenIntervals.length - 1];
                    return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null
                }
                computeSeenTimeDestructive(e) {
                    let t = 0,
                        s = [];
                    for (let i of this.seenIntervals) {
                        if (null != i.endTimeMillis) {
                            t += i.endTimeMillis - i.startTimeMillis;
                            continue
                        }
                        if (e) {
                            let e = Date.now();
                            t += e - i.startTimeMillis, s.push({
                                startTimeMillis: e
                            });
                            continue
                        }
                        s.push(i)
                    }
                    return u(s.length < 2, "there should only be a single left over data"), this.seenIntervals = s, Math.round(t)
                }
                constructor() {
                    this.seenIntervals = []
                }
            }
            class o {
                maybeFlushSeenItems(e) {
                    if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4 || 1 === e && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                    let t = this.createFlushSeenItemsFunction(e);
                    return null == t ? Promise.resolve() : (this._lastFlushTimeMillis = Date.now(), 0 === e || 1 === e) ? new Promise(async e => {
                        await t(), e()
                    }) : new Promise(e => {
                        setTimeout(async () => {
                            await t(), e()
                        }, 100)
                    })
                }
                constructor({
                    id: e,
                    windowId: t,
                    isPaused: s
                }) {
                    this.initialize = () => {
                        var e;
                        r.default.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), r.default.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), r.default.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), r.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), r.default.subscribe("DRAWER_OPEN", this.handleDrawerOpen), r.default.subscribe("DRAWER_CLOSE", this.handleDrawerClose), r.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onInitialize) || void 0 === e || e.call(this)
                    }, this.terminate = () => {
                        var e;
                        r.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), r.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), r.default.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), r.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), r.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen), r.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose), r.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onTerminate) || void 0 === e || e.call(this), this.maybeFlushSeenItems(0)
                    }, this.handleFeedItemFlush = e => {
                        let {
                            id: t,
                            force: s
                        } = e;
                        this._id === t && this.maybeFlushSeenItems(s)
                    }, this.handleFeedItemSeen = e => {
                        var t;
                        let s = e.id,
                            i = e.timestampMillis,
                            n = e.feedItemId;
                        if (s !== this._id) return;
                        if (this._paused) {
                            this._pausedFeedItemIds.add(n);
                            return
                        }
                        let a = this.getTrackedFeedItem(n),
                            d = a.maybeMarkSeen(i);
                        null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, n, d)
                    }, this.handleFeedItemUnseen = e => {
                        var t;
                        let s = e.id,
                            i = e.timestampMillis,
                            n = e.feedItemId;
                        if (s !== this._id) return;
                        this._paused && this._pausedFeedItemIds.delete(n);
                        let a = this.getTrackedFeedItem(n),
                            d = a.maybeMarkUnseen(i);
                        null === (t = this.onFeedItemUnseen) || void 0 === t || t.call(this, n, d), this.maybeFlushSeenItems()
                    }, this.getTrackedFeedItem = e => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new h), this.trackedFeedItems[e]), this.getVisibleFeedItemIds = () => {
                        let e = Object.keys(this.trackedFeedItems);
                        return new Set(e.filter(e => {
                            var t;
                            return null === (t = this.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                        }))
                    }, this.handleDrawerClose = () => {
                        this._isReactNavigationFocused && this.resume()
                    }, this.handleDrawerOpen = () => {
                        this._isReactNavigationFocused && this.pause()
                    }, this.handleAppStateUpdate = e => {
                        let {
                            state: t
                        } = e;
                        "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0))
                    }, this.clearPausedFeedItemIds = () => {
                        this._pausedFeedItemIds = new Set, this._paused = !1
                    }, this.pause = () => {
                        if (this._paused) return;
                        let e = this.getVisibleFeedItemIds();
                        e.forEach(e => {
                            this.handleFeedItemUnseen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: "ANALYTICS_FEED_ITEM_UNSEEN"
                            })
                        }), this._paused = !0, this._pausedFeedItemIds = e
                    }, this.resume = () => {
                        this._paused && (this._paused = !1, this._pausedFeedItemIds.forEach(e => {
                            this.handleFeedItemSeen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: "ANALYTICS_FEED_ITEM_SEEN"
                            })
                        }), this.clearPausedFeedItemIds())
                    }, this.handleReactNavigationFocus = (e, t) => {
                        this._isReactNavigationFocused = e, this._isReactNavigationFocused && !t ? this.resume() : this.pause()
                    }, this.handleWindowFocus = e => {
                        this._windowId === e.windowId && (e.focused ? this.resume() : this.pause())
                    }, this.trackedFeedItems = {}, this._id = e, this._windowId = t, this._pausedFeedItemIds = new Set, this._paused = null != s && s, this._isReactNavigationFocused = !0, this._lastFlushTimeMillis = Date.now()
                }
            }
        }
    }
]);
//# sourceMappingURL=587e3f4a405d796eda69.js.map