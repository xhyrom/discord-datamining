(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3417"], {
        119334: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                preloadForumThreads: function() {
                    return A
                },
                useFirstForumPostMessage: function() {
                    return T
                },
                useMostRecentForumMessage: function() {
                    return y
                }
            });
            var r = n("356056"),
                i = n("87627"),
                u = n("324415");
            n("330740"), n("996173"), n("47120"), n("357629"), n("849202"), n("462848"), n("653041");
            var a = n("392711"),
                d = n.n(a),
                s = n("661223"),
                l = n("454836"),
                o = n("312916"),
                c = n("731865"),
                f = n("500125"),
                E = n("491538"),
                _ = n("789117"),
                I = n("938110"),
                m = n("467006"),
                g = function() {
                    function e(t) {
                        (0, i._)(this, e), this._set = {}, this._defaultValueFunc = t
                    }
                    var t = e.prototype;
                    return t.get = function(e) {
                        return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
                    }, t.delete = function(e) {
                        delete this._set[e]
                    }, t.hasNext = function() {
                        return !d().isEmpty(this._set)
                    }, t.next = function() {
                        return Object.keys(this._set)[0]
                    }, e
                }(),
                v = new(function() {
                    function e() {
                        (0, i._)(this, e), this.requested = new g(function() {
                            return new Set
                        })
                    }
                    var t = e.prototype;
                    return t.request = function(e, t) {
                        this.requested.get(e).add(t)
                    }, t.hasRequested = function(e, t) {
                        return this.requested.get(e).has(t)
                    }, t.finishRequesting = function(e, t) {
                        var n = this.requested.get(e);
                        t.forEach(function(e) {
                            return n.delete(e)
                        }), v.compact(e)
                    }, t.getRequested = function(e) {
                        return this.requested.get(e)
                    }, t.getNextBatch = function(e, t) {
                        return Array.from(this.requested.get(e)).slice(0, t)
                    }, t.hasNext = function() {
                        return this.requested.hasNext()
                    }, t.next = function() {
                        return this.requested.next()
                    }, t.compact = function(e) {
                        0 === this.requested.get(e).size && this.requested.delete(e)
                    }, e
                }()),
                h = null;

            function S(e, t) {
                if ((0, E.isForumActivityExperimentEnabled)(e)) {
                    var n = I.default.getMessageState(t),
                        r = n.loaded,
                        i = n.message;
                    return !r && null == i
                }
                return !1
            }

            function F(e, t) {
                return !e && null == t
            }

            function T(e) {
                var t, n, r = (0, s.useStateFromStoresObject)([_.default], function() {
                        return _.default.getMessage(e.id)
                    }),
                    i = r.loaded,
                    u = r.firstMessage,
                    a = (0, s.useStateFromStores)([c.default], function() {
                        return c.default.getChannel(e.parent_id)
                    });
                if (null != a && (t = i, n = u, !t && null == n)) G(a, e.id);
                return {
                    loaded: i,
                    firstMessage: u
                }
            }

            function y(e, t) {
                var n = (0, s.useStateFromStoresObject)([I.default], function() {
                        return I.default.getMessageState(t.id)
                    }),
                    r = n.loaded,
                    i = n.message;
                return null != e && S(t.guild_id, t.id) && G(e, t.id), {
                    loaded: r,
                    mostRecentMessage: i
                }
            }

            function p(e, t) {
                var n = !1;
                t.forEach(function(t) {
                    var r, i, u = _.default.getMessage(t),
                        a = u.loaded,
                        d = u.firstMessage;
                    if (r = a, i = d, !r && null == i || S(e.guild_id, t)) v.request(e.id, t), n = !0
                }), n && null == h && (h = setTimeout(M, 0))
            }

            function A(e) {
                p(e, (0, f.computeThreadIdsSnapshot)(e.id).slice(0, 10))
            }

            function G(e, t) {
                if (!v.hasRequested(e.id, t)) {
                    var n = (0, f.computeThreadIdsSnapshot)(e.id),
                        r = n.findIndex(function(e) {
                            return e === t
                        }),
                        i = n.slice(r, r + 5).filter(function(t) {
                            return !v.hasRequested(e.id, t)
                        });
                    p(e, i)
                }
            }

            function M() {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = (0, r._)(function() {
                    return (0, u._)(this, function(e) {
                        switch (e.label) {
                            case 0:
                                e.trys.push([0, , 4, 5]), e.label = 1;
                            case 1:
                                if (!v.hasNext()) return [3, 3];
                                return [4, function(e) {
                                    return R.apply(this, arguments)
                                }(v.next())];
                            case 2:
                                return e.sent(), [3, 1];
                            case 3:
                                return [3, 5];
                            case 4:
                                return h = null, [7];
                            case 5:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function R() {
                return (R = (0, r._)(function(e) {
                    var t, n, r, i, a;
                    return (0, u._)(this, function(u) {
                        switch (u.label) {
                            case 0:
                                t = v.getNextBatch(e, 10), u.label = 1;
                            case 1:
                                if (u.trys.push([1, 3, 4, 5]), 0 === t.length || null == (r = null === (n = c.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id)) return [2];
                                return [4, l.default.post({
                                    url: m.Endpoints.FORUM_POSTS(e),
                                    body: {
                                        thread_ids: t
                                    }
                                })];
                            case 2:
                                return i = u.sent().body.threads, o.default.dispatch({
                                    type: "LOAD_FORUM_POSTS",
                                    guildId: r,
                                    threads: i
                                }), [3, 5];
                            case 3:
                                return u.sent(), [3, 5];
                            case 4:
                                return v.finishRequesting(e, t), [7];
                            case 5:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        938110: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("87627"),
                i = n("29713"),
                u = n("21189"),
                a = n("227094"),
                d = n("778455");
            n("357629"), n("462848");
            var s = n("661223"),
                l = n("312916"),
                o = n("822534"),
                c = n("731865"),
                f = n("871831"),
                E = n("370275"),
                _ = n("84819"),
                I = {};

            function m(e) {
                var t, n = c.default.getChannel(null == e ? void 0 : e.channel_id);
                if (null == n || !n.isForumPost()) return !1;
                var r = I[n.id];
                return _.default.compare(null == e ? void 0 : e.id, null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.id) > -1
            }

            function g(e, t) {
                var n = null == t ? null : (0, o.createMessageRecord)(t);
                return I[e] = {
                    loaded: !0,
                    message: n
                }, !0
            }

            function v(e) {
                return I[e]
            }

            function h(e) {
                var t;
                return null === (t = I[e]) || void 0 === t ? void 0 : t.message
            }

            function S(e) {
                var t = e.threads,
                    n = e.mostRecentMessages;
                t.forEach(function(e) {
                    return g(e.id, null)
                }), null == n || n.filter(E.isNotNullish).forEach(function(e) {
                    g(e.channel_id, e)
                })
            }
            var F = function(e) {
                (0, i._)(n, e);
                var t = (0, d._)(n);

                function n() {
                    return (0, r._)(this, n), t.apply(this, arguments)
                }
                var u = n.prototype;
                return u.initialize = function() {
                    this.waitFor(c.default, f.default)
                }, u.getMessageState = function(e) {
                    return !(e in I) && (I[e] = {
                        loaded: !1,
                        message: null
                    }), I[e]
                }, n
            }(s.default.Store);
            F.displayName = "ForumPostRecentMessageStore";
            var T = new F(l.default, {
                CONNECTION_OPEN: function() {
                    I = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || !m(e.message)) return !1;
                    e.message.channel_id === e.message.id ? g(e.message.channel_id, null) : g(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    var t, n, r, i;
                    if (!m(e.message) || e.message.channel_id === e.message.id) return !1;
                    t = e.message.channel_id, n = e.message, r = function(e) {
                        return I[e]
                    }(t), i = h(t), null == r || null == i || (I[t] = (0, a._)((0, u._)({}, r), {
                        message: (0, o.updateMessageRecord)(i, n)
                    }))
                },
                MESSAGE_DELETE: function(e) {
                    var t, n, r;
                    return t = e.channelId, n = e.id, (null == (r = h(t)) ? void 0 : r.id) === n && (delete I[t], !0)
                },
                LOAD_FORUM_POSTS: function(e) {
                    var t = e.threads;
                    for (var n in t) g(n, t[n].most_recent_message)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: S,
                LOAD_THREADS_SUCCESS: S
            })
        },
        891839: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COLLAPSED_SIZE_MEDIA_QUERY: function() {
                    return f
                },
                FeedItemInteractionType: function() {
                    return r
                },
                GUILD_FEED_CHANNEL_TYPES: function() {
                    return E
                },
                GuildFeedRenderMode: function() {
                    return u
                },
                GuildFeedSectionTypes: function() {
                    return i
                },
                GuildHomeLandingSource: function() {
                    return a
                }
            }), n("330740"), n("996173"), n("47120"), n("357629");
            var r, i, u, a, d, s, l, o, c = n("499953");
            (d = r || (r = {})).MESSAGE_CLICKED = "message_clicked", d.MESSAGE_CHANNEL_CLICKED = "message_channel_clicked", d.REACTION_ADDED = "reaction_added", d.REACTION_REMOVED = "reaction_removed", d.THREAD_EMBED_CLICKED = "thread_embed_clicked", d.LINK_CLICKED = "link_clicked", d.IMAGE_CLICKED = "image_clicked", d.BUTTON_CLICKED = "button_clicked", d.REFERENCED_MESSAGE_CLICKED = "referenced_message_clicked", d.MESSAGED_IN_SIDEBAR = "messaged_in_sidebar", d.REPLIED_IN_SIDEBAR = "replied_in_sidebar", d.REPLIED_TO_MESSAGE = "replied_to_message", d.EXPANDED_ITEM = "expanded_item", d.VIEW_MORE_REPLIES = "view_more_replies", (s = i || (i = {})).UNREAD = "UNREAD", s.READ = "READ", s.HIGHLIGHTED = "HIGHLIGHTED", s.ALL = "ALL", (l = u || (u = {}))[l.SEGMENTED_READ = 0] = "SEGMENTED_READ", l[l.TOP = 1] = "TOP", l[l.NEW = 2] = "NEW";
            var f = "(max-width: 1300px)",
                E = new Set([c.ChannelTypes.GUILD_TEXT, c.ChannelTypes.GUILD_ANNOUNCEMENT, c.ChannelTypes.GUILD_FORUM]);
            (o = a || (a = {})).ORGANIC = "ORGANIC", o.TIMER = "TIMER", o.HIGHLIGHTS = "HIGHLIGHTS"
        },
        362648: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_FETCH_LIMIT: function() {
                    return T
                },
                LoadingStatus: function() {
                    return i
                },
                default: function() {
                    return Z
                }
            });
            var r, i, u = n("87627"),
                a = n("29713"),
                d = n("154005"),
                s = n("761020"),
                l = n("778455");
            n("814951"), n("357629"), n("293114"), n("737846"), n("653041"), n("996173"), n("47120"), n("633702"), n("266796"), n("330740"), n("462848"), n("69485");
            var o = n("661223"),
                c = n("386695"),
                f = n("312916"),
                E = n("822534"),
                _ = n("894302"),
                I = n("262047"),
                m = n("574737"),
                g = n("270673"),
                v = n("399689"),
                h = n("619071"),
                S = n("891839"),
                F = n("551835"),
                T = 10;
            (r = i || (i = {}))[r.LOADING_FRESH_FEED = 0] = "LOADING_FRESH_FEED", r[r.LOADING_PAGE = 1] = "LOADING_PAGE", r[r.NONE = 2] = "NONE";
            var y = {
                    loading: 2,
                    error: null
                },
                p = {
                    offset: null,
                    hasMoreItems: null
                },
                A = {},
                G = {},
                M = {},
                D = {},
                R = {},
                N = {},
                L = {},
                O = {};

            function U(e) {
                var t = O[e];
                return null == t && (t = new c.default(H, C), O[e] = t), t
            }

            function C(e) {
                var t = e.featured,
                    n = e.sortIndex;
                return "".concat(t ? "\x00" : "\x01").concat(n.toString().padStart(5, "0"))
            }

            function H(e) {
                var t = e.seen,
                    n = e.highlighted,
                    r = [S.GuildFeedSectionTypes.ALL];
                return n ? r.push(S.GuildFeedSectionTypes.HIGHLIGHTED) : t ? r.push(S.GuildFeedSectionTypes.READ) : r.push(S.GuildFeedSectionTypes.UNREAD), r
            }
            var w = {},
                P = {},
                b = {},
                x = {};

            function V(e, t, n) {
                var r, i;
                return null === (i = L[e]) || void 0 === i ? void 0 : null === (r = i[t]) || void 0 === r ? void 0 : r[n]
            }

            function q(e, t) {
                var n;
                return null === (n = N[e]) || void 0 === n ? void 0 : n[t]
            }

            function k(e) {
                var t = (0, g.default)(e);
                return q(t.channel_id, t.id)
            }

            function B(e, t, n) {
                if (null == e || null == t) return !1;
                var r = q(e, t);
                if (null == r) return !1;
                var i = V(r, e, t);
                if (null == i) return !1;
                var u = n(i);
                return L[r][e][t] = u, !0
            }

            function Y(e, t) {
                (0, g.getAllMessagesFromFeedItem)(t).forEach(function(t) {
                    return j(e, t)
                })
            }

            function j(e, t) {
                var n, r;
                (null === (n = L[e]) || void 0 === n ? void 0 : n[t.channel_id]) == null && (L[e] = null !== (r = L[e]) && void 0 !== r ? r : {}, L[e][t.channel_id] = {}), L[e][t.channel_id][t.id] = t, null == N[t.channel_id] && (N[t.channel_id] = {}), N[t.channel_id][t.id] = e
            }

            function K(e, t) {
                var n = U(e).values(S.GuildFeedSectionTypes.ALL),
                    r = !0,
                    i = !1,
                    u = void 0;
                try {
                    for (var a, d = n[Symbol.iterator](); !(r = (a = d.next()).done); r = !0) {
                        var s = a.value;
                        if ((0, g.getAllMessageIdsFromFeedItem)(s).has(t)) return s
                    }
                } catch (e) {
                    i = !0, u = e
                } finally {
                    try {
                        !r && null != d.return && d.return()
                    } finally {
                        if (i) throw u
                    }
                }
            }

            function W(e, t) {
                var n, r, i, u = q(e, t);
                return null != u && (null === (r = L[u]) || void 0 === r || null === (n = r[e]) || void 0 === n || delete n[t], null === (i = N[e]) || void 0 === i || delete i[t], ! function(e, t) {
                    var n = K(e, t);
                    if (null != n) {
                        var r = (0, h.default)(n),
                            i = U(e);
                        !(Array.from((0, g.getAllMessagesFromFeedItem)(n)).filter(function(t) {
                            return V(e, t.channel_id, t.id)
                        }).length > 0) && i.delete(r)
                    }
                }(u, t), !0)
            }

            function X(e) {
                var t = e.type,
                    n = e.channelId,
                    r = e.messageId,
                    i = e.userId,
                    u = e.emoji;
                if (!(0, _.shouldApplyReaction)(e)) return !1;
                var a = I.default.getId() === i;
                return B(n, r, function(n) {
                    var r = e.reactionType;
                    if ("MESSAGE_REACTION_ADD" !== t) return n.removeReaction(u, a, void 0, r);
                    var i = e.burst,
                        d = e.colors;
                    return n.addReaction(u, a, d, i, r)
                })
            }

            function z(e) {
                return J(e.channel)
            }

            function J(e) {
                var t, n = e.guild_id;
                if (null == n) return !1;
                delete N[e.id], null === (t = L[n]) || void 0 === t || delete t[e.id]
            }
            var Q = function(e) {
                (0, a._)(n, e);
                var t = (0, l._)(n);

                function n() {
                    return (0, u._)(this, n), t.apply(this, arguments)
                }
                var r = n.prototype;
                return r.getLastFetchedMillis = function(e) {
                    return A[e]
                }, r.getFeedItemsForGuild = function(e) {
                    return U(e).values()
                }, r.getFeedItemSection = function(e, t) {
                    return U(e).values(t)
                }, r.getItem = function(e, t) {
                    return U(e).get(t)
                }, r.getItemForMessageId = function(e, t) {
                    return K(e, t)
                }, r.getMessageItem = function(e, t) {
                    return this.getItem(e, (0, h.GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE)(t))
                }, r.getLoadId = function(e) {
                    var t;
                    return null === (t = R[e]) || void 0 === t ? void 0 : t.load_id
                }, r.getCachedMessage = function(e, t, n) {
                    return V(e, t, n)
                }, r.getFetchStatus = function(e) {
                    var t;
                    return null !== (t = G[e]) && void 0 !== t ? t : y
                }, r.getFeaturedItemsFetchStatus = function(e) {
                    var t;
                    return null !== (t = D[e]) && void 0 !== t ? t : y
                }, r.getPaginationStatus = function(e) {
                    var t;
                    return null !== (t = M[e]) && void 0 !== t ? t : p
                }, r.getIsItemHiding = function(e, t) {
                    var n;
                    return !!(null === (n = w[e]) || void 0 === n ? void 0 : n.has(t))
                }, r.getIsItemHidden = function(e, t) {
                    var n;
                    return !!(null === (n = P[e]) || void 0 === n ? void 0 : n.has(t))
                }, r.getIsItemFeatured = function(e) {
                    var t, n = (0, h.getGuildFeedItemIdFromFeatureableItem)(e);
                    return !!(null === (t = b[e.guildId]) || void 0 === t ? void 0 : t.has(n))
                }, r.getFeaturedItems = function(e) {
                    var t;
                    return Object.values(null !== (t = x[e]) && void 0 !== t ? t : [])
                }, r.getFeaturedItemByMessageId = function(e, t) {
                    var n;
                    return Object.values(null !== (n = x[e]) && void 0 !== n ? n : []).find(function(e) {
                        return "message" in e && e.message.id === t
                    })
                }, n
            }(o.default.Store);
            Q.displayName = "GuildFeedStore";
            var Z = new Q(f.default, {
                GUILD_FEED_FETCH_FRESH_START: function(e) {
                    var t = e.guildId;
                    G[t] = {
                        loading: 0,
                        error: null
                    }, delete O[t], delete R[t], delete M[t], w[t] = new Set, P[t] = new Set, b[t] = new Set, L[t] = {}
                },
                GUILD_FEED_FETCH_PAGE_START: function(e) {
                    G[e.guildId] = {
                        loading: 1,
                        error: null
                    }
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t, n = e.guildId,
                        r = e.data;
                    if (A[n] = Date.now(), G[n] = {
                            loading: 2,
                            error: null
                        }, !(n in R) || R[n].load_id === r.load_id) {
                        var i = null !== (_ = null === (f = R[n]) || void 0 === f ? void 0 : null === (c = f.results) || void 0 === c ? void 0 : c.items) && void 0 !== _ ? _ : [];
                        R[n] = {
                            load_id: r.load_id,
                            results: {
                                items: i.concat(r.results.items)
                            }
                        };
                        var u = U(n),
                            a = u.values().length,
                            d = a,
                            s = !0,
                            l = !1,
                            o = void 0;
                        try {
                            for (var c, f, E, _, I, g = r.results.items[Symbol.iterator](); !(s = (I = g.next()).done); s = !0) {
                                var v = I.value,
                                    h = (0, m.createGuildFeedItemFromServer)(v, d);
                                if (null != h) d += 1, null == u.get(h.id) && (h.featured && b[n].add(h.id), Y(n, h), u.set(h.id, h))
                            }
                        } catch (e) {
                            l = !0, o = e
                        } finally {
                            try {
                                !s && null != g.return && g.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        var S = null !== (t = null === (E = M[n]) || void 0 === E ? void 0 : E.offset) && void 0 !== t ? t : 0;
                        M[n] = {
                            offset: S + T,
                            hasMoreItems: a !== u.values().length
                        }
                    }
                },
                GUILD_FEED_FETCH_FAILURE: function(e) {
                    var t = e.guildId,
                        n = e.error;
                    G[t] = {
                        loading: 2,
                        error: n
                    }
                },
                GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.data;
                    D[t] = {
                        loading: 2,
                        error: null
                    };
                    var r = {},
                        i = !0,
                        u = !1,
                        a = void 0;
                    try {
                        for (var s, l = n.results.entries()[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                            var o = (0, d._)(s.value, 2),
                                c = o[0],
                                f = o[1],
                                E = (0, m.createGuildFeedItemFromServer)(f, c);
                            null != E && (0, m.isGuildFeedFeaturedItem)(E) && (E.featured && b[t].add(E.id), Y(t, E), r[E.id] = E)
                        }
                    } catch (e) {
                        u = !0, a = e
                    } finally {
                        try {
                            !i && null != l.return && l.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                    x[t] = r
                },
                GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE: function(e) {
                    var t = e.guildId,
                        n = e.error;
                    D[t] = {
                        loading: 2,
                        error: n
                    }
                },
                GUILD_FEED_ITEM_REMOVE: function(e) {
                    var t = e.item;
                    (0, g.getAllMessagesFromFeedItem)(t).forEach(function(e) {
                        return W(e.channel_id, e.id)
                    })
                },
                GUILD_FEED_ITEM_HIDE: function(e) {
                    var t = e.item,
                        n = (0, h.default)(t),
                        r = k(t);
                    null != r && (!(r in w) && (w[r] = new Set), w[r].add(n))
                },
                GUILD_FEED_ITEM_UNHIDE: function(e) {
                    var t = e.item,
                        n = (0, h.default)(t),
                        r = k(t);
                    null != r && w[r].delete(n)
                },
                GUILD_FEED_FEATURE_ITEM: function(e) {
                    var t, n, r, i = e.featureableItem,
                        u = e.options,
                        a = i.guildId,
                        d = (0, h.getGuildFeedItemIdFromFeatureableItem)(i);
                    if (!(a in b) && (b[a] = new Set), b[a].add(d), !!u.hoist) {
                        var s = U(a),
                            l = null !== (r = s.get(d)) && void 0 !== r ? r : (0, v.createFakeGuildFeedItem)(i);
                        null != l && (null != l.message && (null === (n = L[a]) || void 0 === n ? void 0 : null === (t = n[l.message.channel_id]) || void 0 === t ? void 0 : t[l.message.id]) == null && j(a, l.message), s.delete(l.id), l.featured = !0, l.seen = !1, s.set(l.id, l))
                    }
                },
                GUILD_FEED_UNFEATURE_ITEM: function(e) {
                    var t, n, r, i, u = e.featureableItem,
                        a = u.guildId,
                        d = (0, h.getGuildFeedItemIdFromFeatureableItem)(u);
                    t = a, n = d, null === (r = b[t]) || void 0 === r || r.delete(n), null === (i = x[t]) || void 0 === i || delete i[n]
                },
                CHANNEL_SELECT: function() {
                    var e = !0,
                        t = !1,
                        n = void 0;
                    try {
                        for (var r, i = Object.keys(w)[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                            var u = r.value;
                            null == P[u] && (P[u] = new Set), P[u] = new Set((0, s._)(Array.from(P[u])).concat((0, s._)(Array.from(w[u])))), delete w[u]
                        }
                    } catch (e) {
                        t = !0, n = e
                    } finally {
                        try {
                            !e && null != i.return && i.return()
                        } finally {
                            if (t) throw n
                        }
                    }
                },
                CHANNEL_DELETE: z,
                THREAD_DELETE: z,
                GUILD_DELETE: function(e) {
                    var t, n = e.guild;
                    if (null == A[n.id]) return !1;
                    for (var r in delete A[n.id], delete R[n.id], null !== (t = L[n.id]) && void 0 !== t ? t : {}) delete N[r];
                    delete L[n.id], delete O[n.id]
                },
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                            var d = u.value;
                            if (null == d ? void 0 : d.hasFlag(F.ChannelFlags.GUILD_FEED_REMOVED)) return J(d)
                        }
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                },
                LOGOUT: function() {
                    A = {}, R = {}, N = {}, L = {}, O = {}, w = {}, P = {}, b = {}, x = {}
                },
                MESSAGE_UPDATE: function(e) {
                    var t = e.message;
                    return B(t.channel_id, t.id, function(e) {
                        return (0, E.updateMessageRecord)(e, t)
                    })
                },
                MESSAGE_DELETE: function(e) {
                    var t = e.id;
                    return W(e.channelId, t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    var t = e.ids,
                        n = e.channelId,
                        r = !1,
                        i = !0,
                        u = !1,
                        a = void 0;
                    try {
                        for (var d, s = t[Symbol.iterator](); !(i = (d = s.next()).done); i = !0) {
                            var l = d.value;
                            r = W(n, l) || r
                        }
                    } catch (e) {
                        u = !0, a = e
                    } finally {
                        try {
                            !i && null != s.return && s.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                    return r
                },
                MESSAGE_REACTION_ADD: X,
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.reactions,
                        i = I.default.getId();
                    return B(t, n, function(e) {
                        return e.addReactionBatch(r, i)
                    })
                },
                MESSAGE_REACTION_REMOVE: X,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    return B(e.channelId, e.messageId, function(e) {
                        return e.set("reactions", [])
                    })
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.emoji;
                    return B(t, n, function(e) {
                        return e.removeReactionsForEmoji(r)
                    })
                }
            })
        },
        574737: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FEATURE_EXPIRES_SECONDS: function() {
                    return I
                },
                createFeatureItemsTimeLabel: function() {
                    return T
                },
                createGuildFeedItemFromServer: function() {
                    return h
                },
                getChannelIdForItem: function() {
                    return A
                },
                getFeatureItemsTimes: function() {
                    return y
                },
                getSidebarMessageId: function() {
                    return p
                },
                isChannelAvailableInGuildFeed: function() {
                    return S
                },
                isGuildFeedFeaturedItem: function() {
                    return v
                },
                isMessageAvailableInGuildFeed: function() {
                    return F
                }
            });
            var r = n("21189"),
                i = n("227094");
            n("363505");
            var u = n("392711"),
                a = n.n(u),
                d = n("833956"),
                s = n("751435"),
                l = n("822534"),
                o = n("775822"),
                c = n("370275"),
                f = n("619071"),
                E = n("551835"),
                _ = n("30175"),
                I = {
                    ONE_DAY: 86400,
                    THREE_DAYS: 259200,
                    SEVEN_DAYS: 604800
                };

            function m(e) {
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

            function g(e) {
                return null != e.featured_item || !1
            }

            function v(e) {
                return null != e.featuredItem || !1
            }

            function h(e, t) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        var n, u, s = (0, l.createMessageRecord)(e.message),
                            c = (0, o.createChannelRecordFromServer)(e.thread),
                            E = {
                                type: d.GuildFeedItemTypes.FORUM_POST,
                                id: (0, f.default)(e),
                                sortIndex: t,
                                message: s,
                                thread: c,
                                featured: null !== (n = e.featured) && void 0 !== n && n,
                                highlighted: null !== (u = e.highlighted) && void 0 !== u && u,
                                seen: e.seen,
                                unreadMention: !1
                            };
                        return g(e) && (E = (0, i._)((0, r._)({}, E), {
                            featuredItem: m(e.featured_item)
                        })), E;
                    case d.GuildFeedItemTypes.MESSAGE:
                        var _, I, v, h = (0, l.createMessageRecord)(e.message),
                            S = a().map(e.reference_messages, function(e) {
                                return (0, l.createMessageRecord)(e)
                            }),
                            F = {
                                type: d.GuildFeedItemTypes.MESSAGE,
                                id: (0, f.default)(e),
                                sortIndex: t,
                                message: h,
                                referenceMessages: S,
                                featured: null !== (_ = e.featured) && void 0 !== _ && _,
                                highlighted: null !== (I = e.highlighted) && void 0 !== I && I,
                                unreadMention: null !== (v = e.unread_mention) && void 0 !== v && v,
                                seen: e.seen
                            };
                        return g(e) && (F = (0, i._)((0, r._)({}, F), {
                            featuredItem: m(e.featured_item)
                        })), F;
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        var T, y = e.messages.map(function(e) {
                            return {
                                message: (0, l.createMessageRecord)(e.message),
                                referenceMessages: e.reference_messages.map(function(e) {
                                    return (0, l.createMessageRecord)(e)
                                })
                            }
                        });
                        return {
                            type: d.GuildFeedItemTypes.MESSAGE_BUNDLE, id: e.id, sortIndex: t, messages: y, featured: !1, highlighted: !1, unreadMention: null !== (T = e.unread_mention) && void 0 !== T && T, seen: e.seen
                        };
                    case d.GuildFeedItemTypes.CONVERSATION:
                        var p, A = function e(t) {
                            var n = t.messages.map(function(e) {
                                return (0, l.createMessageRecord)(e.message)
                            });
                            return {
                                id: t.id,
                                type: t.type,
                                messages: n,
                                children: t.children.map(function(t) {
                                    return e(t)
                                })
                            }
                        }(e.root);
                        return {
                            type: d.GuildFeedItemTypes.CONVERSATION, id: e.id, sortIndex: t, root: A, featured: !1, highlighted: !1, unreadMention: null !== (p = e.unread_mention) && void 0 !== p && p, seen: e.seen
                        };
                    default:
                        return null
                }
            }

            function S(e) {
                return !(e.hasFlag(E.ChannelFlags.GUILD_FEED_REMOVED) || e.isNSFW()) && !0
            }

            function F(e) {
                return !!s.MessageTypesSets.AVAILABLE_IN_GUILD_FEED.has(e.type) || !1
            }
            var T = function(e) {
                    return _.default.Messages.GUILD_FEED_FEATURE_ITEM_MENU_ITEM_TEXT.format({
                        timePeriod: e
                    })
                },
                y = function() {
                    return [{
                        value: I.ONE_DAY,
                        timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_24_HOURS
                    }, {
                        value: I.THREE_DAYS,
                        timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_THREE_DAYS
                    }, {
                        value: I.SEVEN_DAYS,
                        timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_SEVEN_DAYS
                    }]
                },
                p = function(e, t) {
                    return null != t && t.isThread() ? t.id : null != e && "details" in e && null != e.details && "initialMessageId" in e.details ? e.details.initialMessageId : null
                };

            function A(e) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.MESSAGE:
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return e.message.channel_id;
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return e.messages[0].message.channel_id;
                    case d.GuildFeedItemTypes.CONVERSATION:
                        return e.root.messages[0].channel_id;
                    default:
                        (0, c.assertNever)(e)
                }
            }
        },
        270673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                },
                getAllMessageIdsFromFeedItem: function() {
                    return s
                },
                getAllMessagesFromFeedItem: function() {
                    return d
                }
            });
            var r = n("761020");
            n("363505"), n("814951"), n("86693"), n("536091"), n("330740"), n("996173"), n("47120"), n("357629");
            var i = n("833956"),
                u = n("370275");

            function a(e) {
                switch (e.type) {
                    case i.GuildFeedItemTypes.MESSAGE:
                    case i.GuildFeedItemTypes.FORUM_POST:
                        return e.message;
                    case i.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return e.messages[e.messages.length - 1].message;
                    case i.GuildFeedItemTypes.CONVERSATION:
                        return e.root.messages[e.root.messages.length - 1];
                    default:
                        (0, u.assertNever)(e)
                }
            }

            function d(e) {
                switch (e.type) {
                    case i.GuildFeedItemTypes.MESSAGE:
                    case i.GuildFeedItemTypes.FORUM_POST:
                        return new Set([e.message]);
                    case i.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return new Set(e.messages.map(function(e) {
                            return e.message
                        }));
                    case i.GuildFeedItemTypes.CONVERSATION:
                        return new Set(function e(t) {
                            var n = t.children.map(function(t) {
                                return e(t)
                            });
                            return [t.messages].concat((0, r._)(n)).flat()
                        }(e.root));
                    default:
                        (0, u.assertNever)(e)
                }
            }

            function s(e) {
                return new Set(Array.from(d(e)).map(function(e) {
                    return e.id
                }))
            }
        },
        399689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createFakeGuildFeedItem: function() {
                    return s
                },
                default: function() {
                    return d
                }
            });
            var r = n("833956"),
                i = n("789117"),
                u = n("370275"),
                a = n("619071");

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
                        (0, u.assertNever)(e)
                }
            }

            function s(e) {
                switch (e.entityType) {
                    case r.GuildFeedItemTypes.FORUM_POST:
                        var t = e.entity.id,
                            n = i.default.getMessage(t).firstMessage;
                        if (null == n) return null;
                        return {
                            type: r.GuildFeedItemTypes.FORUM_POST, id: (0, a.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: n, thread: e.entity, featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                        };
                    case r.GuildFeedItemTypes.MESSAGE:
                        return {
                            type: r.GuildFeedItemTypes.MESSAGE, id: (0, a.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: e.entity, referenceMessages: [], featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                        }
                }
            }
        },
        619071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE: function() {
                    return a
                },
                default: function() {
                    return d
                },
                getFeedItemTypeFromId: function() {
                    return l
                },
                getGuildFeedItemIdFromFeatureableItem: function() {
                    return s
                }
            }), n("814951"), n("917168"), n("301563");
            var r = n("833956"),
                i = n("370275"),
                u = function(e) {
                    return "".concat(r.GuildFeedItemTypes.FORUM_POST, "/").concat(e)
                },
                a = function(e) {
                    return "".concat(r.GuildFeedItemTypes.MESSAGE, "/").concat(e)
                };

            function d(e) {
                switch (e.type) {
                    case r.GuildFeedItemTypes.FORUM_POST:
                        return u(e.message.id);
                    case r.GuildFeedItemTypes.MESSAGE:
                        return a(e.message.id);
                    case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                    case r.GuildFeedItemTypes.CONVERSATION:
                        return e.id;
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function s(e) {
                switch (e.entityType) {
                    case r.GuildFeedItemTypes.FORUM_POST:
                        return u(e.entity.id);
                    case r.GuildFeedItemTypes.MESSAGE:
                        return a(e.entity.id);
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function l(e) {
                return e.split("/")[0]
            }
        }
    }
]);
//# sourceMappingURL=3417.f7ccfa4e470e8a5a0e93.js.map