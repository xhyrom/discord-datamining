(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26737"], {
        404607: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
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
                I = s("782340");
            async function c(e, t, s) {
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
            var m = {
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
                    c(() => s, I.default.Messages.FORUM_TAG_EDIT_ERROR, I.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                deleteForumTag(e, t) {
                    let s = i.default.delete({
                        url: o.Endpoints.FORUM_TAG(e, t)
                    });
                    c(() => s, I.default.Messages.FORUM_TAG_REMOVE_ERROR, I.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
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
                    return l
                },
                markForumPostItemAsSeen: function() {
                    return u
                },
                markForumPostItemAsUnseen: function() {
                    return r
                },
                default: function() {
                    return h
                }
            });
            var i = s("938237"),
                n = s("395118"),
                a = s("867965"),
                d = s("318321");

            function l(e) {
                return "".concat(n.AnalyticsFeedTypes.FORUM_CHANNEL, "_").concat(e)
            }

            function u(e, t, s) {
                (0, i.markAnalyticsFeedItemSeen)(l(e), t, s)
            }

            function r(e, t, s) {
                (0, i.markAnalyticsFeedItemUnseen)(l(e), t, s)
            }
            class h extends n.AnalyticsFeedItemSeenManager {
                constructor({
                    guildId: e,
                    channelId: t,
                    windowId: s,
                    isPaused: i
                }) {
                    super({
                        windowId: s,
                        isPaused: i,
                        id: l(t)
                    }), this.createFlushSeenItemsFunction = e => {
                        let t = this.trackedFeedItems,
                            s = this.channelId,
                            i = this.guildId,
                            n = this.sessionId,
                            d = {
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
                                isForcedFlush: d
                            } = e, l = [], u = [];
                            for (let e of Object.keys(n)) {
                                let t = n[e],
                                    s = t.computeSeenTimeDestructive(d);
                                s > 0 && (l.push(e), u.push(s))
                            }
                            0 !== l.length && (0, a.trackForumChannelSeenBatch)({
                                guildId: t,
                                channelId: s,
                                sessionId: i,
                                postIds: l,
                                additionalTimes: u
                            })
                        })(d)
                    }, this.guildId = e, this.channelId = t, this.sessionId = (0, d.getForumChannelSessionId)(t)
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
                    return a
                },
                ForceFlushType: function() {
                    return d
                },
                AnalyticsFeedItemSeenManager: function() {
                    return o
                }
            });
            var i, n, a, d, l = s("627445"),
                u = s.n(l),
                r = s("913144");
            (i = a || (a = {})).GUILD_HOME = "guild_home", i.FORUM_CHANNEL = "forum_channel", (n = d || (d = {}))[n.IMMEDIATE = 0] = "IMMEDIATE", n[n.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", n[n.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
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
                    if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4 || e === d.IMMEDIATE_WITH_COOLDOWN && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                    let t = this.createFlushSeenItemsFunction(e);
                    return null == t ? Promise.resolve() : (this._lastFlushTimeMillis = Date.now(), e === d.IMMEDIATE || e === d.IMMEDIATE_WITH_COOLDOWN) ? new Promise(async e => {
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
                        r.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), r.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), r.default.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), r.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), r.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen), r.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose), r.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onTerminate) || void 0 === e || e.call(this), this.maybeFlushSeenItems(d.IMMEDIATE)
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
                        "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(d.IMMEDIATE))
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
//# sourceMappingURL=b7a17ae0d0486a4eb097.js.map