(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73040"], {
        786649: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return en
                }
            });
            var t = i("87627"),
                l = i("29713"),
                u = i("21189"),
                a = i("227094"),
                d = i("778455");
            i("633702"), i("266796"), i("357629"), i("996173"), i("47120"), i("653041");
            var r = i("392711"),
                o = i.n(r),
                _ = i("323419"),
                s = i("661223"),
                f = i("312916"),
                g = i("775822"),
                c = i("731865"),
                v = i("327271"),
                h = i("417223"),
                E = i("232733"),
                m = i("408109"),
                T = i("972942"),
                p = i("652731"),
                A = i("551835"),
                N = {},
                S = {},
                C = {},
                D = {},
                U = {},
                R = {},
                F = null,
                I = {};

            function M() {
                for (var e in N = {}, U = {}, S = {}, C = {}, D = {}, F = E.default.getChannelId(), I) clearTimeout(I[e]);
                I = {}, m.default.forEachGuild(function(e) {
                    L(e)
                }), G()
            }

            function y(e) {
                for (var n in delete N[e], delete U[e], delete S[e], delete C[e], delete D[e], L(e), C[e]) O(e, n)
            }

            function L(e) {
                var n = m.default.getThreadsForGuild(e);
                for (var i in n)
                    for (var t in n[i]) {
                        B(t);
                        var l = c.default.getChannel(t);
                        if (null != l) {
                            var u = T.default.joinTimestamp(t);
                            if (null != u) {
                                var a = {
                                        channel: l,
                                        joinTimestamp: u.getTime()
                                    },
                                    d = J(l),
                                    r = d.isUnread,
                                    o = d.isRelevant,
                                    _ = d.isTimedRelevant;
                                K(N, l, a, !1), K(U, l, o ? a : null, !1), K(S, l, r ? a : null, !1), _ && V(l, !0)
                            } else {
                                K(C, l, l, !1);
                                var s = h.default.isForumPostUnread(l.id);
                                K(D, l, s ? l : null, !1)
                            }
                        }
                    }
            }

            function G() {
                for (var e in R = {}, C)
                    for (var n in C[e]) O(e, n)
            }

            function H(e) {
                var n = c.default.getBasicChannel(e);
                null != n && g.THREADED_CHANNEL_TYPES.has(n.type) && O(n.guild_id, n.id)
            }

            function O(e, n) {
                var i = c.default.getChannel(n);
                if (null == i || !i.isForumLikeChannel()) return;
                if (null == R[e] && (R[e] = {}), R[e][n] = 0, null != C[e] && null != C[e][n]) {
                    var t = v.default.getGuild(e);
                    if (null != t) {
                        var l = h.default.getTrackedAckMessageId(n);
                        if (null == l) {
                            var u = Date.now();
                            null != t.joinedAt && (t.joinedAt instanceof Date ? u = t.joinedAt.getTime() : "string" == typeof t.joinedAt && (u = new Date(t.joinedAt).getTime())), l = _.default.fromTimestamp(u)
                        }
                        for (var a in C[e][n]) n === F ? h.default.isNewForumThread(a, n, t) && R[e][n]++ : _.default.compare(a, l) > 0 && !h.default.hasOpenedThread(a) && R[e][n]++
                    }
                }
            }

            function P(e, n, i) {
                if (null == n) return !1;
                var t = c.default.getChannel(i),
                    l = T.default.joinTimestamp(i);
                if (null != t && m.default.isActive(e, n, i)) {
                    if (null != l) {
                        var u = {
                                channel: t,
                                joinTimestamp: l.getTime()
                            },
                            a = J(t),
                            d = a.isUnread,
                            r = a.isRelevant,
                            o = a.isTimedRelevant;
                        K(N, t, u, !0), K(U, t, r ? u : null, !0), K(S, t, d ? u : null, !0), K(C, t, null, !0), K(D, t, null, !0), V(t, o)
                    } else {
                        var _ = h.default.isForumPostUnread(t.id);
                        K(N, t, null, !0), K(S, t, null, !0), K(U, t, null, !0), K(C, t, t, !0), K(D, t, _ ? t : null, !0), B(t.id)
                    }
                    O(e, n)
                } else Y(N, e, n, i), Y(U, e, n, i), Y(S, e, n, i), Y(C, e, n, i), Y(D, e, n, i), B(i), O(e, n)
            }

            function w(e) {
                return P(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function b(e) {
                var n = c.default.getChannel(e.id);
                return !!(null != n && m.default.isActive(e.guildId, n.parent_id, e.id)) && P(n.guild_id, n.parent_id, n.id)
            }

            function j(e) {
                var n = c.default.getChannel(e.channelId);
                if (null == n) W();
                else {
                    var i, t = n.guild_id,
                        l = n.parent_id;
                    if (!g.THREAD_CHANNEL_TYPES.has(n.type)) return !!(Number(null === (i = R[t]) || void 0 === i ? void 0 : i[n.id]) > 0) && (O(t, n.id), !0);
                    if (null == l) return !1;
                    if (z(N, n)) {
                        var u = J(n),
                            a = u.isUnread,
                            d = u.isRelevant;
                        V(n, u.isTimedRelevant);
                        var r = z(S, n),
                            o = z(U, n);
                        if (a === r && d === o) return !1;
                        var _ = N[t][l][n.id],
                            s = a ? _ : null,
                            f = d ? _ : null;
                        K(S, n, s, !0), K(U, n, f, !0), O(t, l)
                    } else {
                        var v = z(D, n),
                            E = h.default.isForumPostUnread(n.id);
                        if (E === v) return !1;
                        K(D, n, E ? n : null, !0)
                    }
                }
            }

            function W() {
                for (var e in S = {}, U = {}, N)
                    for (var n in N[e])
                        for (var i in N[e][n]) {
                            var t = N[e][n][i],
                                l = J(t.channel),
                                u = l.isUnread,
                                a = l.isRelevant,
                                d = l.isTimedRelevant;
                            u && K(S, t.channel, t, !1), a && K(U, t.channel, t, !1), V(t.channel, d)
                        }
                for (var r in D = {}, C)
                    for (var o in C[r])
                        for (var _ in C[r][o]) {
                            var s = C[r][o][_];
                            h.default.isForumPostUnread(_) && K(D, s, s, !1)
                        }
                G()
            }

            function k() {
                var e = F;
                if ((F = E.default.getChannelId()) === e) return !1;
                H(e), H(F)
            }

            function J(e) {
                var n = h.default.getMentionCount(e.id) > 0,
                    i = h.default.hasUnread(e.id) && (!T.default.isMuted(e.id) || n),
                    t = e.hasFlag(A.ChannelFlags.PINNED),
                    l = e.isActiveThread(),
                    u = l && (0, p.default)(e) > Date.now();
                return {
                    isUnread: (l || t) && i,
                    isRelevant: u || t || i,
                    isTimedRelevant: u
                }
            }

            function V(e, n) {
                B(e.id), n && function(e) {
                    I[e.id] = setTimeout(function() {
                        var n = c.default.getChannel(e.id);
                        null != n && f.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: n
                        })
                    }, (0, p.default)(e) - Date.now() + 1)
                }(e)
            }

            function B(e) {
                e in I && (clearTimeout(I[e]), delete I[e])
            }

            function K(e, n, i, t) {
                var l = n.guild_id,
                    d = n.parent_id,
                    r = n.id;
                null != l && null != d && null != r && (!(l in e) && (e[l] = {}), !(d in e[l]) && (e[l][d] = {}), t && (e[l] = (0, a._)((0, u._)({}, e[l]), {
                    [d]: (0, u._)({}, e[l][d])
                })), null === i ? (delete e[l][d][r], o().isEmpty(e[l][d]) && delete e[l][d]) : e[l][d][r] = i)
            }

            function Y(e, n, i, t) {
                if (null != n && null != i && null != t) x(e, n, i, t) && (e[n] = (0, a._)((0, u._)({}, e[n]), {
                    [i]: (0, u._)({}, e[n][i])
                }), delete e[n][i][t], o().isEmpty(e[n][i]) && delete e[n][i])
            }

            function z(e, n) {
                return x(e, n.guild_id, n.parent_id, n.id)
            }

            function x(e, n, i, t) {
                return n in e && i in e[n] && t in e[n][i]
            }
            var Z = {},
                q = {},
                Q = {},
                X = {},
                $ = {},
                ee = function(e) {
                    (0, l._)(i, e);
                    var n = (0, d._)(i);

                    function i() {
                        return (0, t._)(this, i), n.apply(this, arguments)
                    }
                    var u = i.prototype;
                    return u.initialize = function() {
                        this.waitFor(m.default, c.default, T.default, h.default), this.syncWith([E.default], k)
                    }, u.hasActiveJoinedUnreadThreads = function(e, n) {
                        return e in S && n in S[e]
                    }, u.getActiveUnjoinedThreadsForParent = function(e, n) {
                        var i;
                        return e in C && null !== (i = C[e][n]) && void 0 !== i ? i : X
                    }, u.getActiveJoinedThreadsForParent = function(e, n) {
                        var i;
                        return e in N && null !== (i = N[e][n]) && void 0 !== i ? i : Q
                    }, u.getActiveJoinedThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = N[e]) && void 0 !== n ? n : Z
                    }, u.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = S[e]) && void 0 !== n ? n : Z
                    }, u.getActiveJoinedUnreadThreadsForParent = function(e, n) {
                        var i;
                        return null !== (i = this.getActiveJoinedUnreadThreadsForGuild(e)[n]) && void 0 !== i ? i : Q
                    }, u.getActiveJoinedRelevantThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = U[e]) && void 0 !== n ? n : Z
                    }, u.getActiveJoinedRelevantThreadsForParent = function(e, n) {
                        var i;
                        return null !== (i = this.getActiveJoinedRelevantThreadsForGuild(e)[n]) && void 0 !== i ? i : Q
                    }, u.getActiveUnjoinedThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = C[e]) && void 0 !== n ? n : q
                    }, u.getActiveUnjoinedUnreadThreadsForGuild = function(e) {
                        var n;
                        return null !== (n = D[e]) && void 0 !== n ? n : Z
                    }, u.getActiveUnjoinedUnreadThreadsForParent = function(e, n) {
                        var i;
                        return null !== (i = this.getActiveUnjoinedUnreadThreadsForGuild(e)[n]) && void 0 !== i ? i : Q
                    }, u.getNewThreadCountsForGuild = function(e) {
                        var n;
                        return null !== (n = R[e]) && void 0 !== n ? n : $
                    }, u.computeAllActiveJoinedThreads = function(e) {
                        var n = [];
                        for (var i in N)
                            if (i === e || null == e)
                                for (var t in N[i])
                                    for (var l in N[i][t]) n.push(N[i][t][l].channel);
                        return n
                    }, u.getNewThreadCount = function(e, n) {
                        var i, t;
                        return null !== (t = null === (i = R[e]) || void 0 === i ? void 0 : i[n]) && void 0 !== t ? t : 0
                    }, u.getActiveThreadCount = function(e, n) {
                        var i, t, l, u;
                        return o().size(null !== (l = null === (i = N[e]) || void 0 === i ? void 0 : i[n]) && void 0 !== l ? l : {}) + o().size(null !== (u = null === (t = C[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== u ? u : {})
                    }, i
                }(s.default.Store);
            ee.displayName = "ActiveJoinedThreadsStore";
            var en = new ee(f.default, {
                CONNECTION_OPEN: M,
                OVERLAY_INITIALIZE: M,
                THREAD_LIST_SYNC: function(e) {
                    return y(e.guildId)
                },
                LOAD_THREADS_SUCCESS: M,
                LOAD_ARCHIVED_THREADS_SUCCESS: M,
                SEARCH_FINISH: M,
                GUILD_CREATE: function(e) {
                    return y(e.guild.id)
                },
                GUILD_DELETE: M,
                CURRENT_USER_UPDATE: M,
                THREAD_CREATE: w,
                THREAD_UPDATE: w,
                THREAD_DELETE: w,
                CHANNEL_UPDATES: function(e) {
                    var n = e.channels,
                        i = !0,
                        t = !1,
                        l = void 0;
                    try {
                        for (var u, a = n[Symbol.iterator](); !(i = (u = a.next()).done); i = !0) {
                            var d = u.value;
                            if (d.isNSFW() !== function(e, n) {
                                    if (null == n) return !1;
                                    var i = N[e],
                                        t = null == i ? null : i[n];
                                    if (null != t) {
                                        for (var l in t)
                                            if (t[l].channel.isNSFW()) return !0
                                    }
                                    var u = C[e],
                                        a = null == u ? null : u[n];
                                    if (null != a) {
                                        for (var d in a)
                                            if (a[d].isNSFW()) return !0
                                    }
                                    return !1
                                }(d.guild_id, d.parent_id)) {
                                M();
                                return
                            }
                        }
                    } catch (e) {
                        t = !0, l = e
                    } finally {
                        try {
                            !i && null != a.return && a.return()
                        } finally {
                            if (t) throw l
                        }
                    }
                    return !1
                },
                CHANNEL_DELETE: function(e) {
                    var n = e.channel,
                        i = !1;
                    return null != n.guild_id && null != n.parent_id && (n.guild_id in N && n.parent_id in N[n.guild_id] && (delete N[n.guild_id][n.parent_id], i = !0), n.guild_id in S && n.parent_id in S[n.guild_id] && (delete S[n.guild_id][n.parent_id], i = !0), n.guild_id in U && n.parent_id in U[n.guild_id] && (Object.keys(U[n.guild_id][n.parent_id]).forEach(B), delete U[n.guild_id][n.parent_id], i = !0), n.guild_id in C && n.parent_id in C[n.guild_id] && (delete C[n.guild_id][n.parent_id], i = !0), n.guild_id in D && n.parent_id in D[n.guild_id] && (delete D[n.guild_id][n.parent_id], i = !0), i && O(n.guild_id, n.parent_id)), i
                },
                THREAD_MEMBER_UPDATE: b,
                THREAD_MEMBERS_UPDATE: b,
                LOAD_MESSAGES_SUCCESS: j,
                MESSAGE_CREATE: j,
                MESSAGE_DELETE: j,
                MESSAGE_DELETE_BULK: j,
                MESSAGE_ACK: j,
                CHANNEL_ACK: j,
                CHANNEL_LOCAL_ACK: j,
                CHANNEL_SELECT: function(e) {
                    j(e), k()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && W()
                },
                WINDOW_FOCUS: W,
                UPDATE_CHANNEL_DIMENSIONS: W,
                DRAWER_OPEN: W,
                DRAWER_CLOSE: W,
                BULK_ACK: W
            })
        },
        652731: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return u
                }
            });
            var t = i("417223"),
                l = i("84819");

            function u(e) {
                if (null == e.threadMetadata) return 0;
                var n = 6e4 * e.threadMetadata.autoArchiveDuration;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var n, i = null !== (n = t.default.lastMessageId(e.id)) && void 0 !== n ? n : e.id;
                    return Math.max(l.default.extractTimestamp(i), null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0)
                }(e) + n
            }
        },
        514363: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                MessageNotificationSettings: function() {
                    return g
                },
                getCurrentChannelSettings: function() {
                    return p
                },
                getCurrentGuildSettings: function() {
                    return m
                },
                getManyCurrentChannelSettings: function() {
                    return A
                },
                getManyCurrentGuildSettings: function() {
                    return T
                },
                muteConfigToTimestamp: function() {
                    return h
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return E
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return c
                }
            });
            var t, l, u = i("21189"),
                a = i("227094");
            i("789020"), i("573788"), i("996173"), i("47120"), i("357629");
            var d = i("244180"),
                r = i("731865"),
                o = i("301309"),
                _ = i("984362"),
                s = i("467006"),
                f = i("746835");
            (t = l || (l = {})).GUILD = "guild", t.CHANNEL = "channel";
            var g = Object.freeze({
                [s.UserNotificationSettings.ALL_MESSAGES]: "All",
                [s.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                [s.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                [s.UserNotificationSettings.NULL]: null
            });

            function c(e, n, i, t) {
                var l, r, o = function(e) {
                        var n, i, t, l, u, a, d, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = null != r.mute_config && null != r.mute_config.end_time ? new Date(r.mute_config.end_time).getTime() : e.guild_muted_until,
                            _ = null != r.message_notifications ? g[r.message_notifications] : e.guild_message_notification_settings;
                        return {
                            guild_muted_until: o,
                            guild_flags: null !== (n = r.flags) && void 0 !== n ? n : e.guild_flags,
                            guild_is_muted: null !== (i = r.muted) && void 0 !== i ? i : e.guild_is_muted,
                            guild_message_notification_settings: _,
                            guild_suppress_roles: null !== (t = r.suppress_roles) && void 0 !== t ? t : e.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (l = r.mobile_push) && void 0 !== l ? l : e.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (u = r.notify_highlights) && void 0 !== u ? u : e.guild_notify_highlights,
                            guild_suppress_everyone: null !== (a = r.suppress_everyone) && void 0 !== a ? a : e.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (d = r.mute_scheduled_events) && void 0 !== d ? d : e.guild_scheduled_events_muted
                        }
                    },
                    c = o(i),
                    h = o(m(e), n),
                    E = v(c, h, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    T = null !== (l = E("guild_flags")) && void 0 !== l ? l : 0,
                    p = (null !== (r = h.guild_flags) && void 0 !== r ? r : 0) ^ T,
                    A = 0 === (0, _.removeFlags)(p, f.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, f.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                d.default.trackWithMetadata(s.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, (0, a._)((0, u._)({}, h), {
                    location: t,
                    guild_id: e,
                    update_type: "guild",
                    guild_flags_old: E("guild_flags"),
                    guild_is_muted_old: E("guild_is_muted"),
                    guild_suppress_roles_old: E("guild_suppress_roles"),
                    guild_notify_highlights_old: E("guild_notify_highlights"),
                    guild_suppress_everyone_old: E("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: E("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: E("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: E("guild_message_notification_settings"),
                    is_opt_in_only_change: A
                }))
            }

            function v(e, n, i) {
                return function(t) {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === i) return e[t] !== n[t] ? e[t] : void 0
                }
            }

            function h(e) {
                return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
            }

            function E(e, n, i, t, l) {
                var o, c, E = function(n) {
                        var i, t, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            u = null !== (i = l.muted) && void 0 !== i ? i : null == n ? void 0 : n.channel_is_muted,
                            a = null != l.message_notifications ? g[l.message_notifications] : null == n ? void 0 : n.channel_message_notification_settings,
                            d = null == e ? null : !0 === u || null != a;
                        return {
                            channel_is_muted: u,
                            channel_is_overridden: d,
                            channel_flags: null !== (t = l.flags) && void 0 !== t ? t : null == n ? void 0 : n.channel_flags,
                            channel_message_notification_settings: a,
                            channel_muted_until: h(l.mute_config)
                        }
                    },
                    m = E(t),
                    T = E(p(e, n), i),
                    A = v(m, T, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    N = r.default.getChannel(n),
                    S = null !== (o = A("channel_flags")) && void 0 !== o ? o : 0,
                    C = (null !== (c = T.channel_flags) && void 0 !== c ? c : 0) ^ S,
                    D = 0 === (0, _.removeFlags)(C, f.ChannelNotificationSettingsFlags.FAVORITED, f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                d.default.trackWithMetadata(s.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, (0, a._)((0, u._)({}, T), {
                    location: l,
                    guild_id: e,
                    channel_id: n,
                    update_type: "channel",
                    parent_id: null != N ? N.parent_id : null,
                    channel_flags_old: A("channel_flags"),
                    channel_is_muted_old: A("channel_is_muted"),
                    channel_muted_until_old: A("channel_muted_until"),
                    channel_is_overridden_old: A("channel_is_overridden"),
                    channel_message_notification_settings_old: A("channel_message_notification_settings"),
                    is_opt_in_only_change: D
                }))
            }

            function m(e) {
                var n = o.default.isMuted(e),
                    i = o.default.getMuteConfig(e);
                return {
                    guild_suppress_everyone: o.default.isSuppressEveryoneEnabled(e),
                    guild_suppress_roles: o.default.isSuppressRolesEnabled(e),
                    guild_scheduled_events_muted: o.default.isMuteScheduledEventsEnabled(e),
                    guild_is_muted: n,
                    guild_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
                    guild_receive_mobile_push: o.default.isMobilePushEnabled(e),
                    guild_message_notification_settings: g[o.default.getMessageNotifications(e)],
                    guild_notify_highlights: o.default.getNotifyHighlights(e),
                    guild_flags: o.default.getGuildFlags(e)
                }
            }

            function T(e) {
                var n = new Map;
                return e.forEach(function(e) {
                    return n.set(e, m(e))
                }), n
            }

            function p(e, n) {
                var i = o.default.isChannelMuted(e, n),
                    t = o.default.getChannelMuteConfig(e, n);
                return {
                    channel_is_muted: i,
                    channel_muted_until: null != t && null != t.end_time ? new Date(t.end_time).getTime() : null,
                    channel_message_notification_settings: g[o.default.getChannelMessageNotifications(e, n)],
                    channel_flags: o.default.getChannelIdFlags(e, n)
                }
            }

            function A(e, n) {
                var i = new Map;
                return n.forEach(function(n) {
                    return i.set(n, p(e, n))
                }), i
            }
        }
    }
]);
//# sourceMappingURL=73040.5a91b18891a111691982.js.map