(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["35306"], {
        401690: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return q
                }
            }), t("222007"), t("424973");
            var l = t("917351"),
                i = t.n(l),
                d = t("249654"),
                u = t("446674"),
                r = t("913144"),
                a = t("233069"),
                o = t("42203"),
                f = t("305961"),
                s = t("660478"),
                _ = t("18494"),
                c = t("689275"),
                E = t("755624"),
                h = t("984674"),
                A = t("724210");
            let T = {},
                v = {},
                g = {},
                C = {},
                p = {},
                D = {},
                S = null,
                m = {};

            function N() {
                for (let e in T = {}, p = {}, v = {}, g = {}, C = {}, S = _.default.getChannelId(), m) clearTimeout(m[e]);
                m = {}, c.default.forEachGuild(e => {
                    R(e)
                }), F()
            }

            function U(e) {
                for (let n in delete T[e], delete p[e], delete v[e], delete g[e], delete C[e], R(e), g[e]) P(e, n)
            }

            function R(e) {
                let n = c.default.getThreadsForGuild(e);
                for (let e in n)
                    for (let t in n[e]) {
                        y(t);
                        let e = o.default.getChannel(t);
                        if (null == e) continue;
                        let n = E.default.joinTimestamp(t);
                        if (null != n) {
                            let t = {
                                    channel: e,
                                    joinTimestamp: n.getTime()
                                },
                                {
                                    isUnread: l,
                                    isRelevant: i,
                                    isTimedRelevant: d
                                } = w(e);
                            k(T, e, t, !1), k(p, e, i ? t : null, !1), k(v, e, l ? t : null, !1), d && J(e, !0)
                        } else {
                            k(g, e, e, !1);
                            let n = s.default.isForumPostUnread(e.id);
                            k(C, e, n ? e : null, !1)
                        }
                    }
            }

            function F() {
                for (let e in D = {}, g)
                    for (let n in g[e]) P(e, n)
            }

            function L(e) {
                let n = o.default.getBasicChannel(e);
                null != n && a.THREADED_CHANNEL_TYPES.has(n.type) && P(n.guild_id, n.id)
            }

            function P(e, n) {
                let t = o.default.getChannel(n);
                if (null == t || !t.isForumLikeChannel()) return;
                if (null == D[e] && (D[e] = {}), D[e][n] = 0, null == g[e] || null == g[e][n]) return;
                let l = f.default.getGuild(e);
                if (null == l) return;
                let i = s.default.getTrackedAckMessageId(n);
                if (null == i) {
                    let e = Date.now();
                    null != l.joinedAt && (l.joinedAt instanceof Date ? e = l.joinedAt.getTime() : "string" == typeof l.joinedAt && (e = new Date(l.joinedAt).getTime())), i = d.default.fromTimestamp(e)
                }
                for (let t in g[e][n]) n === S ? s.default.isNewForumThread(t, n, l) && D[e][n]++ : d.default.compare(t, i) > 0 && !s.default.hasOpenedThread(t) && D[e][n]++
            }

            function H(e, n, t) {
                if (null == n) return !1;
                let l = o.default.getChannel(t),
                    i = E.default.joinTimestamp(t);
                if (null != l && c.default.isActive(e, n, t)) {
                    if (null != i) {
                        let e = {
                                channel: l,
                                joinTimestamp: i.getTime()
                            },
                            {
                                isUnread: n,
                                isRelevant: t,
                                isTimedRelevant: d
                            } = w(l);
                        k(T, l, e, !0), k(p, l, t ? e : null, !0), k(v, l, n ? e : null, !0), k(g, l, null, !0), k(C, l, null, !0), J(l, d)
                    } else {
                        let e = s.default.isForumPostUnread(l.id);
                        k(T, l, null, !0), k(v, l, null, !0), k(p, l, null, !0), k(g, l, l, !0), k(C, l, e ? l : null, !0), y(l.id)
                    }
                    P(e, n)
                } else W(T, e, n, t), W(p, e, n, t), W(v, e, n, t), W(g, e, n, t), W(C, e, n, t), y(t), P(e, n)
            }

            function I(e) {
                return H(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function M(e) {
                let n = o.default.getChannel(e.id);
                return !!(null != n && c.default.isActive(e.guildId, n.parent_id, e.id)) && H(n.guild_id, n.parent_id, n.id)
            }

            function G(e) {
                let n = o.default.getChannel(e.channelId);
                if (null == n) j();
                else {
                    let {
                        guild_id: e,
                        parent_id: l
                    } = n;
                    if (!a.THREAD_CHANNEL_TYPES.has(n.type)) {
                        var t;
                        return !!(Number(null === (t = D[e]) || void 0 === t ? void 0 : t[n.id]) > 0) && (P(e, n.id), !0)
                    }
                    if (null == l) return !1;
                    if (K(T, n)) {
                        let {
                            isUnread: t,
                            isRelevant: i,
                            isTimedRelevant: d
                        } = w(n);
                        J(n, d);
                        let u = K(v, n),
                            r = K(p, n);
                        if (t === u && i === r) return !1;
                        let a = T[e][l][n.id],
                            o = t ? a : null,
                            f = i ? a : null;
                        k(v, n, o, !0), k(p, n, f, !0), P(e, l)
                    } else {
                        let e = K(C, n),
                            t = s.default.isForumPostUnread(n.id);
                        if (t === e) return !1;
                        k(C, n, t ? n : null, !0)
                    }
                }
            }

            function j() {
                for (let e in v = {}, p = {}, T)
                    for (let n in T[e])
                        for (let t in T[e][n]) {
                            let l = T[e][n][t],
                                {
                                    isUnread: i,
                                    isRelevant: d,
                                    isTimedRelevant: u
                                } = w(l.channel);
                            i && k(v, l.channel, l, !1), d && k(p, l.channel, l, !1), J(l.channel, u)
                        }
                for (let e in C = {}, g)
                    for (let n in g[e])
                        for (let t in g[e][n]) {
                            let l = g[e][n][t],
                                i = s.default.isForumPostUnread(t);
                            i && k(C, l, l, !1)
                        }
                F()
            }

            function O() {
                let e = S;
                if ((S = _.default.getChannelId()) === e) return !1;
                L(e), L(S)
            }

            function w(e) {
                let n = s.default.getMentionCount(e.id) > 0,
                    t = s.default.hasUnread(e.id) && (!E.default.isMuted(e.id) || n),
                    l = e.hasFlag(A.ChannelFlags.PINNED),
                    i = e.isActiveThread(),
                    d = i && (0, h.default)(e) > Date.now();
                return {
                    isUnread: (i || l) && t,
                    isRelevant: d || l || t,
                    isTimedRelevant: d
                }
            }

            function J(e, n) {
                y(e.id), n && function(e) {
                    m[e.id] = setTimeout(() => {
                        let n = o.default.getChannel(e.id);
                        null != n && r.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: n
                        })
                    }, (0, h.default)(e) - Date.now() + 1)
                }(e)
            }

            function y(e) {
                e in m && (clearTimeout(m[e]), delete m[e])
            }

            function k(e, n, t, l) {
                let {
                    guild_id: d,
                    parent_id: u,
                    id: r
                } = n;
                null != d && null != u && null != r && (!(d in e) && (e[d] = {}), !(u in e[d]) && (e[d][u] = {}), l && (e[d] = {
                    ...e[d],
                    [u]: {
                        ...e[d][u]
                    }
                }), null === t ? (delete e[d][u][r], i.isEmpty(e[d][u]) && delete e[d][u]) : e[d][u][r] = t)
            }

            function W(e, n, t, l) {
                if (null != n && null != t && null != l) B(e, n, t, l) && (e[n] = {
                    ...e[n],
                    [t]: {
                        ...e[n][t]
                    }
                }, delete e[n][t][l], i.isEmpty(e[n][t]) && delete e[n][t])
            }

            function K(e, n) {
                return B(e, n.guild_id, n.parent_id, n.id)
            }

            function B(e, n, t, l) {
                return n in e && t in e[n] && l in e[n][t]
            }
            let b = {},
                V = {},
                Y = {},
                x = {},
                z = {};
            class Z extends u.default.Store {
                initialize() {
                    this.waitFor(c.default, o.default, E.default, s.default), this.syncWith([_.default], O)
                }
                hasActiveJoinedUnreadThreads(e, n) {
                    return e in v && n in v[e]
                }
                getActiveUnjoinedThreadsForParent(e, n) {
                    var t;
                    return e in g && null !== (t = g[e][n]) && void 0 !== t ? t : x
                }
                getActiveJoinedThreadsForParent(e, n) {
                    var t;
                    return e in T && null !== (t = T[e][n]) && void 0 !== t ? t : Y
                }
                getActiveJoinedThreadsForGuild(e) {
                    var n;
                    return null !== (n = T[e]) && void 0 !== n ? n : b
                }
                getActiveJoinedUnreadThreadsForGuild(e) {
                    var n;
                    return null !== (n = v[e]) && void 0 !== n ? n : b
                }
                getActiveJoinedUnreadThreadsForParent(e, n) {
                    var t;
                    return null !== (t = this.getActiveJoinedUnreadThreadsForGuild(e)[n]) && void 0 !== t ? t : Y
                }
                getActiveJoinedRelevantThreadsForGuild(e) {
                    var n;
                    return null !== (n = p[e]) && void 0 !== n ? n : b
                }
                getActiveJoinedRelevantThreadsForParent(e, n) {
                    var t;
                    return null !== (t = this.getActiveJoinedRelevantThreadsForGuild(e)[n]) && void 0 !== t ? t : Y
                }
                getActiveUnjoinedThreadsForGuild(e) {
                    var n;
                    return null !== (n = g[e]) && void 0 !== n ? n : V
                }
                getActiveUnjoinedUnreadThreadsForGuild(e) {
                    var n;
                    return null !== (n = C[e]) && void 0 !== n ? n : b
                }
                getActiveUnjoinedUnreadThreadsForParent(e, n) {
                    var t;
                    return null !== (t = this.getActiveUnjoinedUnreadThreadsForGuild(e)[n]) && void 0 !== t ? t : Y
                }
                getNewThreadCountsForGuild(e) {
                    var n;
                    return null !== (n = D[e]) && void 0 !== n ? n : z
                }
                computeAllActiveJoinedThreads(e) {
                    let n = [];
                    for (let t in T)
                        if (t === e || null == e)
                            for (let e in T[t])
                                for (let l in T[t][e]) n.push(T[t][e][l].channel);
                    return n
                }
                getNewThreadCount(e, n) {
                    var t, l;
                    return null !== (l = null === (t = D[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== l ? l : 0
                }
                getActiveThreadCount(e, n) {
                    var t, l, d, u;
                    let r = i.size(null !== (d = null === (t = T[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== d ? d : {}),
                        a = i.size(null !== (u = null === (l = g[e]) || void 0 === l ? void 0 : l[n]) && void 0 !== u ? u : {});
                    return r + a
                }
            }
            Z.displayName = "ActiveJoinedThreadsStore";
            var q = new Z(r.default, {
                CONNECTION_OPEN: N,
                OVERLAY_INITIALIZE: N,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        guildId: n
                    } = e;
                    return U(n)
                },
                LOAD_THREADS_SUCCESS: N,
                LOAD_ARCHIVED_THREADS_SUCCESS: N,
                SEARCH_FINISH: N,
                GUILD_CREATE: function(e) {
                    let {
                        guild: n
                    } = e;
                    return U(n.id)
                },
                GUILD_DELETE: N,
                CURRENT_USER_UPDATE: N,
                THREAD_CREATE: I,
                THREAD_UPDATE: I,
                THREAD_DELETE: I,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: n
                    } = e;
                    for (let e of n)
                        if (e.isNSFW() !== function(e, n) {
                                if (null == n) return !1;
                                let t = T[e],
                                    l = null == t ? null : t[n];
                                if (null != l) {
                                    for (let e in l)
                                        if (l[e].channel.isNSFW()) return !0
                                }
                                let i = g[e],
                                    d = null == i ? null : i[n];
                                if (null != d) {
                                    for (let e in d)
                                        if (d[e].isNSFW()) return !0
                                }
                                return !1
                            }(e.guild_id, e.parent_id)) {
                            N();
                            return
                        } return !1
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: n
                    } = e, t = !1;
                    return null != n.guild_id && null != n.parent_id && (n.guild_id in T && n.parent_id in T[n.guild_id] && (delete T[n.guild_id][n.parent_id], t = !0), n.guild_id in v && n.parent_id in v[n.guild_id] && (delete v[n.guild_id][n.parent_id], t = !0), n.guild_id in p && n.parent_id in p[n.guild_id] && (Object.keys(p[n.guild_id][n.parent_id]).forEach(y), delete p[n.guild_id][n.parent_id], t = !0), n.guild_id in g && n.parent_id in g[n.guild_id] && (delete g[n.guild_id][n.parent_id], t = !0), n.guild_id in C && n.parent_id in C[n.guild_id] && (delete C[n.guild_id][n.parent_id], t = !0), t && P(n.guild_id, n.parent_id)), t
                },
                THREAD_MEMBER_UPDATE: M,
                THREAD_MEMBERS_UPDATE: M,
                LOAD_MESSAGES_SUCCESS: G,
                MESSAGE_CREATE: G,
                MESSAGE_DELETE: G,
                MESSAGE_DELETE_BULK: G,
                MESSAGE_ACK: G,
                CHANNEL_ACK: G,
                CHANNEL_LOCAL_ACK: G,
                CHANNEL_SELECT: function(e) {
                    G(e), O()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && j()
                },
                WINDOW_FOCUS: j,
                UPDATE_CHANNEL_DIMENSIONS: j,
                DRAWER_OPEN: j,
                DRAWER_CLOSE: j,
                BULK_ACK: j
            })
        },
        984674: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return d
                }
            });
            var l = t("660478"),
                i = t("299039");

            function d(e) {
                if (null == e.threadMetadata) return 0;
                let n = 6e4 * e.threadMetadata.autoArchiveDuration;
                return function(e) {
                    var n;
                    if (null == e.threadMetadata) return 0;
                    let t = null !== (n = l.default.lastMessageId(e.id)) && void 0 !== n ? n : e.id,
                        d = i.default.extractTimestamp(t),
                        u = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(d, u)
                }(e) + n
            }
        }
    }
]);
//# sourceMappingURL=35306.b8cb1ccc1b838a7a51bf.js.map