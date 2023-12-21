(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["61967"], {
        266254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var s = n("356056"),
                a = n("324415");
            n("653041");
            var i = n("454836"),
                u = n("312916"),
                r = n("992888"),
                d = n("267951"),
                l = n("96206"),
                o = n("113647"),
                c = n("423917"),
                m = n("613085"),
                I = n("467006"),
                h = n("30175");

            function _(e, t, n) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = (0, s._)(function(e, t, n) {
                    var s;
                    return (0, a._)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, e()];
                            case 1:
                                return [2, a.sent()];
                            case 2:
                                return (null === (s = a.sent().body) || void 0 === s ? void 0 : s.code) === I.AbortCodes.NON_MODERATED_TAG_REQUIRED && r.default.show({
                                    title: t,
                                    body: n
                                }), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
            var F = {
                resort(e) {
                    u.default.dispatch({
                        type: "RESORT_THREADS",
                        channelId: e
                    })
                },
                createForumTag: (e, t) => i.default.post({
                    url: I.Endpoints.FORUM_TAGS(t),
                    body: {
                        name: e.name,
                        emoji_id: e.emojiId,
                        emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                        moderated: e.moderated
                    }
                }),
                updateForumTag(e, t) {
                    var n = i.default.put({
                        url: I.Endpoints.FORUM_TAG(t, e.id),
                        body: {
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: null == e.emojiId ? e.emojiName : void 0,
                            moderated: e.moderated
                        }
                    });
                    _(function() {
                        return n
                    }, h.default.Messages.FORUM_TAG_EDIT_ERROR, h.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                deleteForumTag(e, t) {
                    var n = i.default.delete({
                        url: I.Endpoints.FORUM_TAG(e, t)
                    });
                    _(function() {
                        return n
                    }, h.default.Messages.FORUM_TAG_REMOVE_ERROR, h.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                updateForumPostTags: (e, t) => (0, s._)(function() {
                    return (0, a._)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, d.default.unarchiveThreadIfNecessary(e)];
                            case 1:
                                return n.sent(), [2, i.default.patch({
                                    url: I.Endpoints.CHANNEL(e),
                                    body: {
                                        applied_tags: t
                                    }
                                })]
                        }
                    })
                })(),
                hideAdminOnboarding(e, t) {
                    u.default.dispatch({
                        type: "ADMIN_ONBOARDING_GUIDE_HIDE",
                        channelId: e,
                        hide: t
                    })
                },
                markPostAsSeen(e, t, n) {
                    (0, l.markAnalyticsFeedItemSeen)((0, c.getForumPostSeenManagerId)(e), t, n)
                },
                markPostAsUnseen(e, t, n) {
                    (0, l.markAnalyticsFeedItemUnseen)((0, c.getForumPostSeenManagerId)(e), t, n)
                },
                flushSeenItems(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
                    (0, l.flushAnalyticsFeedItems)((0, c.getForumPostSeenManagerId)(e), t)
                },
                searchForumPosts: (e, t, n, i) => (0, s._)(function() {
                    var s, r;
                    return (0, a._)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                u.default.dispatch({
                                    type: "FORUM_SEARCH_START",
                                    channelId: t
                                }), a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, d.default.searchThreads(e, t, n, i)];
                            case 2:
                                return s = a.sent(), (0, m.trackForumSearched)({
                                    guildId: e,
                                    channelId: t,
                                    numSearchResults: s.length
                                }), u.default.dispatch({
                                    type: "FORUM_SEARCH_SUCCESS",
                                    channelId: t,
                                    threadIds: s
                                }), [3, 4];
                            case 3:
                                return a.sent(), u.default.dispatch({
                                    type: "FORUM_SEARCH_FAILURE",
                                    channelId: t
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })(),
                updateForumSearchQuery(e, t) {
                    u.default.dispatch({
                        type: "FORUM_SEARCH_QUERY_UPDATED",
                        channelId: e,
                        query: t
                    })
                },
                clearForumSearch(e) {
                    u.default.dispatch({
                        type: "FORUM_SEARCH_CLEAR",
                        channelId: e
                    })
                }
            }
        },
        423917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                },
                getForumPostSeenManagerId: function() {
                    return o
                },
                markForumPostItemAsSeen: function() {
                    return c
                },
                markForumPostItemAsUnseen: function() {
                    return m
                }
            });
            var s = n("87627"),
                a = n("29713"),
                i = n("778455");
            n("814951"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("653041");
            var u = n("96206"),
                r = n("113647"),
                d = n("613085"),
                l = n("181103");

            function o(e) {
                return "".concat(r.AnalyticsFeedTypes.FORUM_CHANNEL, "_").concat(e)
            }

            function c(e, t, n) {
                (0, u.markAnalyticsFeedItemSeen)(o(e), t, n)
            }

            function m(e, t, n) {
                (0, u.markAnalyticsFeedItemUnseen)(o(e), t, n)
            }
            var I = function(e) {
                (0, a._)(n, e);
                var t = (0, i._)(n);

                function n(e) {
                    var a, i = e.guildId,
                        u = e.channelId,
                        r = e.windowId,
                        c = e.isPaused;
                    return (0, s._)(this, n), (a = t.call(this, {
                        windowId: r,
                        isPaused: c,
                        id: o(u)
                    })).createFlushSeenItemsFunction = function(e) {
                        var t = a.trackedFeedItems,
                            n = a.channelId,
                            s = a.guildId,
                            i = {
                                guildId: s,
                                channelId: n,
                                sessionId: a.sessionId,
                                trackedFeedItems: t,
                                isForcedFlush: null != e
                            };
                        return function() {
                            return function(e) {
                                var t = e.guildId,
                                    n = e.channelId,
                                    s = e.sessionId,
                                    a = e.trackedFeedItems,
                                    i = e.isForcedFlush,
                                    u = [],
                                    r = [],
                                    l = !0,
                                    o = !1,
                                    c = void 0;
                                try {
                                    for (var m, I = Object.keys(a)[Symbol.iterator](); !(l = (m = I.next()).done); l = !0) {
                                        var h = m.value,
                                            _ = a[h].computeSeenTimeDestructive(i);
                                        _ > 0 && (u.push(h), r.push(_))
                                    }
                                } catch (e) {
                                    o = !0, c = e
                                } finally {
                                    try {
                                        !l && null != I.return && I.return()
                                    } finally {
                                        if (o) throw c
                                    }
                                }
                                0 !== u.length && (0, d.trackForumChannelSeenBatch)({
                                    guildId: t,
                                    channelId: n,
                                    sessionId: s,
                                    postIds: u,
                                    additionalTimes: r
                                })
                            }(i)
                        }
                    }, a.guildId = i, a.channelId = u, a.sessionId = (0, l.getForumChannelSessionId)(u), a
                }
                return n
            }(r.AnalyticsFeedItemSeenManager)
        },
        96206: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                flushAnalyticsFeedItems: function() {
                    return u
                },
                markAnalyticsFeedItemSeen: function() {
                    return a
                },
                markAnalyticsFeedItemUnseen: function() {
                    return i
                }
            });
            var s = n("312916");

            function a(e, t, n) {
                s.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function i(e, t, n) {
                s.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function u(e, t) {
                s.default.dispatch({
                    type: "ANALYTICS_FEED_FLUSH",
                    id: e,
                    force: t
                })
            }
        },
        113647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsFeedItemSeenManager: function() {
                    return h
                },
                AnalyticsFeedTypes: function() {
                    return i
                },
                ForceFlushType: function() {
                    return u
                }
            });
            var s, a, i, u, r = n("356056"),
                d = n("87627"),
                l = n("324415");
            n("653041"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("330740"), n("462848"), n("191489");
            var o = n("512722"),
                c = n.n(o),
                m = n("312916");
            (s = i || (i = {})).GUILD_HOME = "guild_home", s.FORUM_CHANNEL = "forum_channel", (a = u || (u = {}))[a.IMMEDIATE = 0] = "IMMEDIATE", a[a.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", a[a.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
            var I = function() {
                    function e() {
                        (0, d._)(this, e), this.seenIntervals = []
                    }
                    var t = e.prototype;
                    return t.maybeMarkSeen = function(e) {
                        var t = this.seenIntervals[this.seenIntervals.length - 1];
                        return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({
                            startTimeMillis: e
                        }), !0)
                    }, t.maybeMarkUnseen = function(e) {
                        var t = this.seenIntervals[this.seenIntervals.length - 1];
                        return null != t && null == t.endTimeMillis && (t.endTimeMillis = e, !0)
                    }, t.isVisible = function() {
                        var e = this.seenIntervals[this.seenIntervals.length - 1];
                        return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null
                    }, t.computeSeenTimeDestructive = function(e) {
                        var t = 0,
                            n = [],
                            s = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (var u, r = this.seenIntervals[Symbol.iterator](); !(s = (u = r.next()).done); s = !0) {
                                var d = u.value;
                                if (null != d.endTimeMillis) {
                                    t += d.endTimeMillis - d.startTimeMillis;
                                    continue
                                }
                                if (e) {
                                    var l = Date.now();
                                    t += l - d.startTimeMillis, n.push({
                                        startTimeMillis: l
                                    });
                                    continue
                                }
                                n.push(d)
                            }
                        } catch (e) {
                            a = !0, i = e
                        } finally {
                            try {
                                !s && null != r.return && r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return c()(n.length < 2, "there should only be a single left over data"), this.seenIntervals = n, Math.round(t)
                    }, e
                }(),
                h = function() {
                    function e(t) {
                        var n = t.id,
                            s = t.windowId,
                            a = t.isPaused,
                            i = this;
                        (0, d._)(this, e), this.initialize = function() {
                            var e;
                            m.default.subscribe("ANALYTICS_FEED_ITEM_SEEN", i.handleFeedItemSeen), m.default.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", i.handleFeedItemUnseen), m.default.subscribe("ANALYTICS_FEED_FLUSH", i.handleFeedItemFlush), m.default.subscribe("APP_STATE_UPDATE", i.handleAppStateUpdate), m.default.subscribe("DRAWER_OPEN", i.handleDrawerOpen), m.default.subscribe("DRAWER_CLOSE", i.handleDrawerClose), m.default.subscribe("WINDOW_FOCUS", i.handleWindowFocus), null === (e = i.onInitialize) || void 0 === e || e.call(i)
                        }, this.terminate = function() {
                            var e;
                            m.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", i.handleFeedItemSeen), m.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", i.handleFeedItemUnseen), m.default.unsubscribe("ANALYTICS_FEED_FLUSH", i.handleFeedItemFlush), m.default.unsubscribe("APP_STATE_UPDATE", i.handleAppStateUpdate), m.default.unsubscribe("DRAWER_OPEN", i.handleDrawerOpen), m.default.unsubscribe("DRAWER_CLOSE", i.handleDrawerClose), m.default.unsubscribe("WINDOW_FOCUS", i.handleWindowFocus), null === (e = i.onTerminate) || void 0 === e || e.call(i), i.maybeFlushSeenItems(0)
                        }, this.handleFeedItemFlush = function(e) {
                            var t = e.id,
                                n = e.force;
                            i._id === t && i.maybeFlushSeenItems(n)
                        }, this.handleFeedItemSeen = function(e) {
                            var t, n = e.id,
                                s = e.timestampMillis,
                                a = e.feedItemId;
                            if (n === i._id) {
                                if (i._paused) {
                                    i._pausedFeedItemIds.add(a);
                                    return
                                }
                                var u = i.getTrackedFeedItem(a).maybeMarkSeen(s);
                                null === (t = i.onFeedItemSeen) || void 0 === t || t.call(i, a, u)
                            }
                        }, this.handleFeedItemUnseen = function(e) {
                            var t, n = e.id,
                                s = e.timestampMillis,
                                a = e.feedItemId;
                            if (n === i._id) {
                                i._paused && i._pausedFeedItemIds.delete(a);
                                var u = i.getTrackedFeedItem(a).maybeMarkUnseen(s);
                                null === (t = i.onFeedItemUnseen) || void 0 === t || t.call(i, a, u), i.maybeFlushSeenItems()
                            }
                        }, this.getTrackedFeedItem = function(e) {
                            return null == i.trackedFeedItems[e] && (i.trackedFeedItems[e] = new I), i.trackedFeedItems[e]
                        }, this.getVisibleFeedItemIds = function() {
                            var e = Object.keys(i.trackedFeedItems);
                            return new Set(e.filter(function(e) {
                                var t;
                                return null === (t = i.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                            }))
                        }, this.handleDrawerClose = function() {
                            i._isReactNavigationFocused && i.resume()
                        }, this.handleDrawerOpen = function() {
                            i._isReactNavigationFocused && i.pause()
                        }, this.handleAppStateUpdate = function(e) {
                            var t = e.state;
                            "active" === t && i._isReactNavigationFocused && i.resume(), "background" === t && (i._isReactNavigationFocused && i.pause(), i.maybeFlushSeenItems(0))
                        }, this.clearPausedFeedItemIds = function() {
                            i._pausedFeedItemIds = new Set, i._paused = !1
                        }, this.pause = function() {
                            if (!i._paused) {
                                var e = i.getVisibleFeedItemIds();
                                e.forEach(function(e) {
                                    i.handleFeedItemUnseen({
                                        id: i._id,
                                        feedItemId: e,
                                        timestampMillis: Date.now(),
                                        type: "ANALYTICS_FEED_ITEM_UNSEEN"
                                    })
                                }), i._paused = !0, i._pausedFeedItemIds = e
                            }
                        }, this.resume = function() {
                            i._paused && (i._paused = !1, i._pausedFeedItemIds.forEach(function(e) {
                                i.handleFeedItemSeen({
                                    id: i._id,
                                    feedItemId: e,
                                    timestampMillis: Date.now(),
                                    type: "ANALYTICS_FEED_ITEM_SEEN"
                                })
                            }), i.clearPausedFeedItemIds())
                        }, this.handleReactNavigationFocus = function(e, t) {
                            i._isReactNavigationFocused = e, i._isReactNavigationFocused && !t ? i.resume() : i.pause()
                        }, this.handleWindowFocus = function(e) {
                            i._windowId === e.windowId && (e.focused ? i.resume() : i.pause())
                        }, this.trackedFeedItems = {}, this._id = n, this._windowId = s, this._pausedFeedItemIds = new Set, this._paused = null != a && a, this._isReactNavigationFocused = !0, this._lastFlushTimeMillis = Date.now()
                    }
                    return e.prototype.maybeFlushSeenItems = function(e) {
                        if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4 || 1 === e && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                        var t, n = this.createFlushSeenItemsFunction(e);
                        if (null == n) return Promise.resolve();
                        if (this._lastFlushTimeMillis = Date.now(), 0 === e || 1 === e) {
                            ;
                            return new Promise((t = (0, r._)(function(e) {
                                return (0, l._)(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, n()];
                                        case 1:
                                            return t.sent(), e(), [2]
                                    }
                                })
                            }), function(e) {
                                return t.apply(this, arguments)
                            }))
                        }
                        return new Promise(function(e) {
                            setTimeout((0, r._)(function() {
                                return (0, l._)(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, n()];
                                        case 1:
                                            return t.sent(), e(), [2]
                                    }
                                })
                            }), 100)
                        })
                    }, e
                }()
        }
    }
]);
//# sourceMappingURL=61967.1f3748d95ef700502992.js.map