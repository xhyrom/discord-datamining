(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["35306"], {
        401690: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return Q
                }
            });
            var l = t("917351"),
                i = t.n(l),
                d = t("249654"),
                u = t("446674"),
                r = t("913144"),
                a = t("208127"),
                o = t("233069"),
                f = t("42203"),
                s = t("305961"),
                _ = t("660478"),
                c = t("18494"),
                E = t("689275"),
                h = t("755624"),
                A = t("984674"),
                T = t("724210");
            let v = {},
                g = {},
                p = {},
                C = {},
                S = {},
                D = {},
                m = null,
                N = {};

            function U() {
                for (let e in v = {}, S = {}, g = {}, p = {}, C = {}, m = c.default.getChannelId(), N) clearTimeout(N[e]);
                N = {}, E.default.forEachGuild(e => {
                    F(e)
                }), L()
            }

            function R(e) {
                for (let n in delete v[e], delete S[e], delete g[e], delete p[e], delete C[e], F(e), p[e]) H(e, n)
            }

            function F(e) {
                let n = E.default.getThreadsForGuild(e);
                for (let e in n)
                    for (let t in n[e]) {
                        k(t);
                        let e = f.default.getChannel(t);
                        if (null == e) continue;
                        let n = h.default.joinTimestamp(t);
                        if (null != n) {
                            let t = {
                                    channel: e,
                                    joinTimestamp: n.getTime()
                                },
                                {
                                    isUnread: l,
                                    isRelevant: i,
                                    isTimedRelevant: d
                                } = J(e);
                            W(v, e, t, !1), W(S, e, i ? t : null, !1), W(g, e, l ? t : null, !1), d && y(e, !0)
                        } else {
                            W(p, e, e, !1);
                            let n = _.default.isForumPostUnread(e.id);
                            W(C, e, n ? e : null, !1)
                        }
                    }
            }

            function L() {
                for (let e in D = {}, p)
                    for (let n in p[e]) H(e, n)
            }

            function P(e) {
                let n = f.default.getBasicChannel(e);
                null != n && o.THREADED_CHANNEL_TYPES.has(n.type) && H(n.guild_id, n.id)
            }

            function H(e, n) {
                let t = f.default.getChannel(n);
                if (null == t || !t.isForumLikeChannel()) return;
                if (null == D[e] && (D[e] = {}), D[e][n] = 0, null == p[e] || null == p[e][n]) return;
                let l = s.default.getGuild(e);
                if (null == l) return;
                let i = _.default.getTrackedAckMessageId(n);
                if (null == i) {
                    let e = Date.now();
                    null != l.joinedAt && (l.joinedAt instanceof Date ? e = l.joinedAt.getTime() : "string" == typeof l.joinedAt && (e = new Date(l.joinedAt).getTime())), i = d.default.fromTimestamp(e)
                }
                for (let t in p[e][n]) n === m ? _.default.isNewForumThread(t, n, l) && D[e][n]++ : d.default.compare(t, i) > 0 && !_.default.hasOpenedThread(t) && D[e][n]++
            }

            function I(e, n, t) {
                if (null == n) return !1;
                let l = f.default.getChannel(t),
                    i = h.default.joinTimestamp(t);
                if (null != l && E.default.isActive(e, n, t)) {
                    if (null != i) {
                        let e = {
                                channel: l,
                                joinTimestamp: i.getTime()
                            },
                            {
                                isUnread: n,
                                isRelevant: t,
                                isTimedRelevant: d
                            } = J(l);
                        W(v, l, e, !0), W(S, l, t ? e : null, !0), W(g, l, n ? e : null, !0), W(p, l, null, !0), W(C, l, null, !0), y(l, d)
                    } else {
                        let e = _.default.isForumPostUnread(l.id);
                        W(v, l, null, !0), W(g, l, null, !0), W(S, l, null, !0), W(p, l, l, !0), W(C, l, e ? l : null, !0), k(l.id)
                    }
                    H(e, n)
                } else K(v, e, n, t), K(S, e, n, t), K(g, e, n, t), K(p, e, n, t), K(C, e, n, t), k(t), H(e, n)
            }

            function M(e) {
                return I(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function G(e) {
                let n = f.default.getChannel(e.id);
                return !!(null != n && E.default.isActive(e.guildId, n.parent_id, e.id)) && I(n.guild_id, n.parent_id, n.id)
            }

            function j(e) {
                let n = f.default.getChannel(e.channelId);
                if (null == n) O();
                else {
                    let {
                        guild_id: e,
                        parent_id: l
                    } = n;
                    if (!o.THREAD_CHANNEL_TYPES.has(n.type)) {
                        var t;
                        return !!(Number(null === (t = D[e]) || void 0 === t ? void 0 : t[n.id]) > 0) && (H(e, n.id), !0)
                    }
                    if (null == l) return !1;
                    if (b(v, n)) {
                        let {
                            isUnread: t,
                            isRelevant: i,
                            isTimedRelevant: d
                        } = J(n);
                        y(n, d);
                        let u = b(g, n),
                            r = b(S, n);
                        if (t === u && i === r) return !1;
                        let a = v[e][l][n.id],
                            o = t ? a : null,
                            f = i ? a : null;
                        W(g, n, o, !0), W(S, n, f, !0), H(e, l)
                    } else {
                        let e = b(C, n),
                            t = _.default.isForumPostUnread(n.id);
                        if (t === e) return !1;
                        W(C, n, t ? n : null, !0)
                    }
                }
            }

            function O() {
                for (let e in g = {}, S = {}, v)
                    for (let n in v[e])
                        for (let t in v[e][n]) {
                            let l = v[e][n][t],
                                {
                                    isUnread: i,
                                    isRelevant: d,
                                    isTimedRelevant: u
                                } = J(l.channel);
                            i && W(g, l.channel, l, !1), d && W(S, l.channel, l, !1), y(l.channel, u)
                        }
                for (let e in C = {}, p)
                    for (let n in p[e])
                        for (let t in p[e][n]) {
                            let l = p[e][n][t],
                                i = _.default.isForumPostUnread(t);
                            i && W(C, l, l, !1)
                        }
                L()
            }

            function w() {
                let e = m;
                if ((m = c.default.getChannelId()) === e) return !1;
                P(e), P(m)
            }

            function J(e) {
                let n = _.default.getMentionCount(e.id) > 0,
                    t = _.default.hasRelevantUnread(e) && (!h.default.isMuted(e.id) || n) || (0, a.isReadStateStaffExperimentEnabled)() && n,
                    l = e.hasFlag(T.ChannelFlags.PINNED),
                    i = e.isActiveThread(),
                    d = i && (0, A.default)(e) > Date.now();
                return {
                    isUnread: (i || l) && t,
                    isRelevant: d || l || t,
                    isTimedRelevant: d
                }
            }

            function y(e, n) {
                k(e.id), n && function(e) {
                    N[e.id] = setTimeout(() => {
                        let n = f.default.getChannel(e.id);
                        null != n && r.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: n
                        })
                    }, (0, A.default)(e) - Date.now() + 1)
                }(e)
            }

            function k(e) {
                e in N && (clearTimeout(N[e]), delete N[e])
            }

            function W(e, n, t, l) {
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

            function K(e, n, t, l) {
                if (null != n && null != t && null != l) B(e, n, t, l) && (e[n] = {
                    ...e[n],
                    [t]: {
                        ...e[n][t]
                    }
                }, delete e[n][t][l], i.isEmpty(e[n][t]) && delete e[n][t])
            }

            function b(e, n) {
                return B(e, n.guild_id, n.parent_id, n.id)
            }

            function B(e, n, t, l) {
                return n in e && t in e[n] && l in e[n][t]
            }
            let x = {},
                V = {},
                Y = {},
                z = {},
                Z = {};
            class q extends u.default.Store {
                initialize() {
                    this.waitFor(E.default, f.default, h.default, _.default), this.syncWith([c.default], w)
                }
                hasActiveJoinedUnreadThreads(e, n) {
                    return e in g && n in g[e]
                }
                getActiveUnjoinedThreadsForParent(e, n) {
                    var t;
                    return e in p && null !== (t = p[e][n]) && void 0 !== t ? t : z
                }
                getActiveJoinedThreadsForParent(e, n) {
                    var t;
                    return e in v && null !== (t = v[e][n]) && void 0 !== t ? t : Y
                }
                getActiveJoinedThreadsForGuild(e) {
                    var n;
                    return null !== (n = v[e]) && void 0 !== n ? n : x
                }
                getActiveJoinedUnreadThreadsForGuild(e) {
                    var n;
                    return null !== (n = g[e]) && void 0 !== n ? n : x
                }
                getActiveJoinedUnreadThreadsForParent(e, n) {
                    var t;
                    return null !== (t = this.getActiveJoinedUnreadThreadsForGuild(e)[n]) && void 0 !== t ? t : Y
                }
                getActiveJoinedRelevantThreadsForGuild(e) {
                    var n;
                    return null !== (n = S[e]) && void 0 !== n ? n : x
                }
                getActiveJoinedRelevantThreadsForParent(e, n) {
                    var t;
                    return null !== (t = this.getActiveJoinedRelevantThreadsForGuild(e)[n]) && void 0 !== t ? t : Y
                }
                getActiveUnjoinedThreadsForGuild(e) {
                    var n;
                    return null !== (n = p[e]) && void 0 !== n ? n : V
                }
                getActiveUnjoinedUnreadThreadsForGuild(e) {
                    var n;
                    return null !== (n = C[e]) && void 0 !== n ? n : x
                }
                getActiveUnjoinedUnreadThreadsForParent(e, n) {
                    var t;
                    return null !== (t = this.getActiveUnjoinedUnreadThreadsForGuild(e)[n]) && void 0 !== t ? t : Y
                }
                getNewThreadCountsForGuild(e) {
                    var n;
                    return null !== (n = D[e]) && void 0 !== n ? n : Z
                }
                computeAllActiveJoinedThreads(e) {
                    let n = [];
                    for (let t in v)
                        if (t === e || null == e)
                            for (let e in v[t])
                                for (let l in v[t][e]) n.push(v[t][e][l].channel);
                    return n
                }
                getNewThreadCount(e, n) {
                    var t, l;
                    return null !== (l = null === (t = D[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== l ? l : 0
                }
                getActiveThreadCount(e, n) {
                    var t, l, d, u;
                    let r = i.size(null !== (d = null === (t = v[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== d ? d : {}),
                        a = i.size(null !== (u = null === (l = p[e]) || void 0 === l ? void 0 : l[n]) && void 0 !== u ? u : {});
                    return r + a
                }
            }
            q.displayName = "ActiveJoinedThreadsStore";
            var Q = new q(r.default, {
                CONNECTION_OPEN: U,
                OVERLAY_INITIALIZE: U,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        guildId: n
                    } = e;
                    return R(n)
                },
                LOAD_THREADS_SUCCESS: U,
                LOAD_ARCHIVED_THREADS_SUCCESS: U,
                SEARCH_FINISH: U,
                GUILD_CREATE: function(e) {
                    let {
                        guild: n
                    } = e;
                    return R(n.id)
                },
                GUILD_DELETE: U,
                CURRENT_USER_UPDATE: U,
                THREAD_CREATE: M,
                THREAD_UPDATE: M,
                THREAD_DELETE: M,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: n
                    } = e;
                    for (let e of n)
                        if (e.isNSFW() !== function(e, n) {
                                if (null == n) return !1;
                                let t = v[e],
                                    l = null == t ? null : t[n];
                                if (null != l) {
                                    for (let e in l)
                                        if (l[e].channel.isNSFW()) return !0
                                }
                                let i = p[e],
                                    d = null == i ? null : i[n];
                                if (null != d) {
                                    for (let e in d)
                                        if (d[e].isNSFW()) return !0
                                }
                                return !1
                            }(e.guild_id, e.parent_id)) {
                            U();
                            return
                        } return !1
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: n
                    } = e, t = !1;
                    return null != n.guild_id && null != n.parent_id && (n.guild_id in v && n.parent_id in v[n.guild_id] && (delete v[n.guild_id][n.parent_id], t = !0), n.guild_id in g && n.parent_id in g[n.guild_id] && (delete g[n.guild_id][n.parent_id], t = !0), n.guild_id in S && n.parent_id in S[n.guild_id] && (Object.keys(S[n.guild_id][n.parent_id]).forEach(k), delete S[n.guild_id][n.parent_id], t = !0), n.guild_id in p && n.parent_id in p[n.guild_id] && (delete p[n.guild_id][n.parent_id], t = !0), n.guild_id in C && n.parent_id in C[n.guild_id] && (delete C[n.guild_id][n.parent_id], t = !0), t && H(n.guild_id, n.parent_id)), t
                },
                THREAD_MEMBER_UPDATE: G,
                THREAD_MEMBERS_UPDATE: G,
                LOAD_MESSAGES_SUCCESS: j,
                MESSAGE_CREATE: j,
                MESSAGE_DELETE: j,
                MESSAGE_DELETE_BULK: j,
                MESSAGE_ACK: j,
                CHANNEL_ACK: j,
                CHANNEL_LOCAL_ACK: j,
                CHANNEL_SELECT: function(e) {
                    j(e), w()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && O()
                },
                WINDOW_FOCUS: O,
                UPDATE_CHANNEL_DIMENSIONS: O,
                DRAWER_OPEN: O,
                DRAWER_CLOSE: O,
                BULK_ACK: O
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
//# sourceMappingURL=a079e993c8a728a3b00b.js.map