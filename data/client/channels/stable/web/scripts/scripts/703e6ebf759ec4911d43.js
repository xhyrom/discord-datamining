(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26230"], {
        309570: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var l = n("49111");

            function i(t) {
                return null != t && t.type !== l.ActivityTypes.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }
        },
        716241: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                collectGuildAnalyticsMetadata: function() {
                    return C
                },
                collectChannelAnalyticsMetadataFromId: function() {
                    return O
                },
                collectChannelAnalyticsMetadata: function() {
                    return L
                },
                collectVoiceAnalyticsMetadata: function() {
                    return M
                },
                trackWithMetadata: function() {
                    return U
                },
                getVoiceStateMetadata: function() {
                    return P
                },
                getCustomStatusMetadata: function() {
                    return G
                },
                default: function() {
                    return F
                }
            });
            var l = n("917351"),
                i = n.n(l),
                u = n("316693"),
                a = n("233069"),
                s = n("271938"),
                r = n("42203"),
                d = n("923959"),
                c = n("525065"),
                o = n("26989"),
                f = n("305961"),
                _ = n("42887"),
                E = n("957255"),
                g = n("824563"),
                v = n("945956"),
                S = n("18494"),
                p = n("162771"),
                I = n("800762"),
                T = n("599110"),
                h = n("991170"),
                A = n("761932"),
                y = n("49111"),
                m = n("724210");

            function N(t) {
                let e = 0;
                for (let n in t) e += 1;
                return e
            }

            function C(t) {
                var e;
                if (null == t) return null;
                let n = f.default.getGuild(t);
                if (null == n) return null;
                let l = s.default.getId(),
                    i = o.default.getMember(t, l),
                    u = d.default.getChannels(t),
                    a = u[d.GUILD_SELECTABLE_CHANNELS_KEY].length,
                    r = u[d.GUILD_VOCAL_CHANNELS_KEY].length,
                    _ = I.default.getVoiceStates(t);
                return {
                    guild_id: n.id,
                    guild_size_total: c.default.getMemberCount(t),
                    guild_num_channels: a + r,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: r,
                    guild_num_roles: N(n.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (e = E.default.getGuildPermissions(n)) && void 0 !== e ? e : h.default.NONE),
                    guild_is_vip: n.hasFeature(y.GuildFeatures.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: N(_)
                }
            }

            function O(t) {
                if (null == t) return null;
                let e = r.default.getChannel(t);
                return null == e ? null : L(e)
            }

            function L(t) {
                var e;
                if (null == t) return null;
                let n = !1,
                    l = t.getGuildId();
                if (null != l) {
                    let e = t => {
                        if (null == t) return !1;
                        let e = t.permissionOverwrites[l];
                        return null != e && u.default.has(e.deny, y.Permissions.VIEW_CHANNEL)
                    };
                    n = a.THREAD_CHANNEL_TYPES.has(t.type) && null != t.parent_id ? e(r.default.getChannel(t.parent_id)) : e(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != l && null !== (e = E.default.getChannelPermissions(t)) && void 0 !== e ? e : h.default.NONE),
                    channel_hidden: n
                }
            }

            function M(t) {
                if (null == t) return null;
                let e = r.default.getChannel(t);
                if (null == e) return null;
                let n = _.default.isVideoEnabled(),
                    l = v.default.getMediaSessionId();
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: l,
                    ...P(e.getGuildId(), e.id, n),
                    ...(0, A.getVoiceAnalyticsMetadataAdditional)()
                }
            }

            function U(t) {
                var e, n, l, i, u;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (T.default.isThrottled(t)) return;
                let d = !("location" in a) || a.location !== y.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                    c = "guild_id" in a ? a.guild_id : d ? p.default.getGuildId() : null,
                    o = "channel_id" in a ? a.channel_id : d ? S.default.getChannelId(c) : null,
                    f = r.default.getChannel(o);
                let _ = (e = f, n = c, null == e ? null != n ? n : null : e.isPrivate() ? null : null !== (i = null !== (l = e.getGuildId()) && void 0 !== l ? l : n) && void 0 !== i ? i : null);
                let E = {
                    ...a,
                    ...C(_),
                    ...null != c && null != o && (0, m.isStaticChannelRoute)(o) ? (u = 0, {
                        channel_static_route: o,
                        channel_hidden: !1
                    }) : L(f)
                };
                T.default.track(t, E, {
                    flush: s
                })
            }

            function P(t, e, n) {
                let l = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                return i(I.default.getVoiceStates(t)).filter(t => t.channelId === e).filter(t => t.userId !== s.default.getId()).forEach(t => {
                    l.voice_state_count++, (t.selfVideo || t.selfStream) && l.video_stream_count++
                }), l
            }

            function G(t, e) {
                let n = {
                    custom_status_count: 0
                };
                return i(I.default.getVoiceStates(t)).forEach(t => {
                    t.channelId === e && null != g.default.findActivity(t.userId, t => t.type === y.ActivityTypes.CUSTOM_STATUS) && n.custom_status_count++
                }), n
            }
            var F = {
                trackWithMetadata: U,
                getVoiceStateMetadata: P
            }
        },
        761932: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getVoiceAnalyticsMetadataAdditional: function() {
                    return i
                }
            });
            var l = n("568307");

            function i() {
                let t = l.default.getCurrentGameForAnalytics();
                return {
                    game_name: null != t ? t.name : null,
                    game_id: null != t ? t.id : null
                }
            }
        },
        32346: function(t, e, n) {
            "use strict";
            let l, i, u;
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var a = n("446674"),
                s = n("913144"),
                r = n("843455");
            class d extends a.default.Store {
                getCurrentHangStatus() {
                    return l
                }
                getCustomHangStatus() {
                    return i
                }
                getCustomHangStatusEmoji() {
                    return u
                }
            }
            d.displayName = "HangStatusStore";
            var c = new d(s.default, {
                UPDATE_HANG_STATUS: function(t) {
                    let {
                        status: e
                    } = t;
                    l = e, i = null, u = null
                },
                UPDATE_HANG_STATUS_CUSTOM: function(t) {
                    let {
                        status: e,
                        emoji: n
                    } = t;
                    l = r.HangStatusTypes.CUSTOM, i = e, u = n
                },
                CLEAR_HANG_STATUS: function() {
                    l = null, i = null, u = null
                }
            })
        },
        824563: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return P
                }
            }), n("222007"), n("424973");
            var l = n("714617"),
                i = n.n(l),
                u = n("917351"),
                a = n.n(u),
                s = n("446674"),
                r = n("913144"),
                d = n("309570"),
                c = n("32346"),
                o = n("271938"),
                f = n("697218"),
                _ = n("49111");
            let E = Object.freeze([]),
                g = {},
                v = {},
                S = {},
                p = {},
                I = {};

            function T(t, e) {
                let n = g[t];
                return null != n ? n[e] : null
            }
            let h = t => {
                    switch (t.type) {
                        case _.ActivityTypes.CUSTOM_STATUS:
                            return 4;
                        case _.ActivityTypes.COMPETING:
                            return 3;
                        case _.ActivityTypes.STREAMING:
                            return 2;
                        case _.ActivityTypes.PLAYING:
                            return 1;
                        default:
                            return 0
                    }
                },
                A = t => (0, d.default)(t) ? 1 : 0;

            function y(t, e) {
                var n, l, i, u, a;
                return n = t, h(e) - h(n) || (l = t, A(e) - A(l)) || (i = t, (null !== (u = e.created_at) && void 0 !== u ? u : 0) - (null !== (a = i.created_at) && void 0 !== a ? a : 0))
            }

            function m(t) {
                if (delete v[t], delete S[t], delete p[t], null == g[t]) return;
                let [e] = a.sortBy(g[t], t => -t.timestamp);
                e.status !== _.StatusTypes.OFFLINE ? (v[t] = e.status, S[t] = e.activities, null != e.clientStatus && (p[t] = e.clientStatus)) : a.every(g[t], t => t.status === _.StatusTypes.OFFLINE) && delete g[t]
            }

            function N(t) {
                let e = g[t];
                if (null == e) return;
                let n = a.maxBy(Object.values(e), t => t.timestamp);
                n.status !== _.StatusTypes.OFFLINE && (v[t] = n.status, S[t] = n.activities, null != n.clientStatus && (p[t] = n.clientStatus))
            }

            function C(t) {
                let {
                    guildId: e,
                    userId: n,
                    status: l,
                    clientStatus: u,
                    activities: a
                } = t;
                if (n === o.default.getId()) return !1;
                let s = g[n];
                if (null == s) {
                    if (l === _.StatusTypes.OFFLINE) return !1;
                    s = g[n] = {}
                }
                if (l === _.StatusTypes.OFFLINE) s[e] = {
                    status: l,
                    clientStatus: u,
                    activities: E,
                    timestamp: Date.now()
                };
                else {
                    let t = a.length > 1 ? [...a].sort(y) : a,
                        n = s[e];
                    a = null != n && i(n.activities, t) ? n.activities : t, s[e] = {
                        status: l,
                        clientStatus: u,
                        activities: a,
                        timestamp: Date.now()
                    }
                }
                return delete I[n], m(n), !0
            }

            function O(t) {
                let {
                    guildId: e,
                    userId: n,
                    status: l,
                    clientStatus: i,
                    activities: u,
                    timestamp: a
                } = t;
                if (n === o.default.getId()) return;
                let s = g[n];
                if (null == s) {
                    if (l === _.StatusTypes.OFFLINE) return;
                    s = g[n] = {}
                }
                if (l === _.StatusTypes.OFFLINE) s[e] = {
                    status: l,
                    clientStatus: i,
                    activities: E,
                    timestamp: Date.now()
                };
                else {
                    let t = u.length > 1 ? [...u].sort(y) : u;
                    s[e] = {
                        status: l,
                        clientStatus: i,
                        activities: t,
                        timestamp: a
                    }
                }
            }

            function L(t, e) {
                if (e === o.default.getId()) return !1;
                let n = g[e];
                if (null == n || null == n[t]) return !1;
                delete n[t], 0 === Object.keys(n).length && delete g[e], m(e)
            }

            function M(t) {
                for (let e of Object.keys(g)) L(t, e)
            }
            class U extends s.default.Store {
                initialize() {
                    this.waitFor(o.default, c.default)
                }
                setCurrentUserOnConnectionOpen(t, e) {
                    v[o.default.getId()] = t, S[o.default.getId()] = e
                }
                getStatus(t) {
                    var e, n;
                    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.StatusTypes.OFFLINE,
                        u = f.default.getUser(t);
                    if (null != u && u.hasFlag(_.UserFlags.BOT_HTTP_INTERACTIONS) && (i = _.StatusTypes.UNKNOWN), null == u ? void 0 : u.isClyde()) return _.StatusTypes.ONLINE;
                    if (null == l) return null !== (e = v[t]) && void 0 !== e ? e : i;
                    let a = T(t, l);
                    return null !== (n = null == a ? void 0 : a.status) && void 0 !== n ? n : i
                }
                getActivities(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = S[t]) && void 0 !== n ? n : E
                    }
                    let l = T(t, e);
                    return null == l || null == l.activities ? E : l.activities
                }
                getPrimaryActivity(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(t, e);
                    return n[0]
                }
                getAllApplicationActivities(t) {
                    let e = [];
                    for (let n of Object.keys(S)) {
                        let l = S[n];
                        for (let i of l) i.application_id === t && e.push({
                            userId: n,
                            activity: i
                        })
                    }
                    return e
                }
                getApplicationActivity(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(t, t => t.application_id === e, n)
                }
                findActivity(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(t, n).find(e)
                }
                getActivityMetadata(t) {
                    return I[t]
                }
                getUserIds() {
                    return Object.keys(S)
                }
                isMobileOnline(t) {
                    let e = p[t];
                    return null != e && e[_.ClientTypes.MOBILE] === _.StatusTypes.ONLINE && e[_.ClientTypes.DESKTOP] !== _.StatusTypes.ONLINE
                }
                getState() {
                    return {
                        presencesForGuilds: g,
                        statuses: v,
                        activities: S,
                        activityMetadata: I,
                        clientStatuses: p
                    }
                }
            }
            U.displayName = "PresenceStore";
            var P = new U(r.default, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    let {
                        guilds: e,
                        presences: n
                    } = t, l = o.default.getId();
                    g = {}, I = {}, v = {
                        [l]: v[l]
                    }, S = {
                        [l]: S[l]
                    }, p = {
                        [l]: {}
                    };
                    let i = new Set,
                        u = Date.now();
                    e.forEach(t => {
                        t.presences.forEach(e => {
                            let {
                                user: n,
                                status: l,
                                clientStatus: a,
                                activities: s
                            } = e;
                            O({
                                guildId: t.id,
                                userId: n.id,
                                status: l,
                                clientStatus: a,
                                activities: s,
                                timestamp: u
                            }), i.add(n.id)
                        })
                    }), n.forEach(t => {
                        let {
                            user: e,
                            status: n,
                            clientStatus: l,
                            activities: a
                        } = t;
                        null != e && (O({
                            guildId: _.ME,
                            userId: e.id,
                            status: n,
                            clientStatus: l,
                            activities: a,
                            timestamp: u
                        }), i.add(e.id))
                    }), i.delete(l), i.forEach(N)
                },
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        presences: e
                    } = t;
                    g = e.presencesForGuilds, v = e.statuses, S = e.activities, I = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    let {
                        guild: e
                    } = t;
                    e.presences.forEach(t => {
                        let {
                            user: n,
                            status: l,
                            clientStatus: i,
                            activities: u
                        } = t;
                        C({
                            guildId: e.id,
                            userId: n.id,
                            status: l,
                            clientStatus: i,
                            activities: u
                        })
                    })
                },
                GUILD_DELETE: function(t) {
                    let {
                        guild: e
                    } = t;
                    M(e.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    let {
                        guildId: e,
                        user: n
                    } = t;
                    return L(e, n.id)
                },
                PRESENCE_UPDATES: function(t) {
                    let {
                        updates: e
                    } = t;
                    return e.map(t => {
                        let {
                            guildId: e,
                            user: n,
                            status: l,
                            clientStatus: i,
                            activities: u
                        } = t;
                        return C({
                            guildId: null != e ? e : _.ME,
                            userId: n.id,
                            status: l,
                            clientStatus: i,
                            activities: u
                        })
                    }).some(t => t)
                },
                PRESENCES_REPLACE: function(t) {
                    let {
                        presences: e
                    } = t;
                    M(_.ME), e.forEach(t => {
                        let {
                            user: e,
                            status: n,
                            clientStatus: l,
                            activities: i
                        } = t;
                        null != e && C({
                            guildId: _.ME,
                            userId: e.id,
                            status: n,
                            clientStatus: l,
                            activities: i
                        })
                    })
                },
                ACTIVITY_METADATA_UPDATE: function(t) {
                    let {
                        userId: e,
                        metadata: n
                    } = t;
                    return I[e] = n, !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    let {
                        guildId: e,
                        members: n
                    } = t;
                    n.forEach(t => {
                        null != t.presence && C({
                            guildId: e,
                            userId: t.user_id,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    })
                },
                THREAD_MEMBERS_UPDATE: function(t) {
                    let {
                        guildId: e,
                        addedMembers: n
                    } = t;
                    null == n || n.forEach(t => {
                        null != t.presence && C({
                            guildId: e,
                            userId: t.userId,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    })
                },
                SELF_PRESENCE_STORE_UPDATE: function(t) {
                    let e = o.default.getId();
                    if (v[e] === t.status && S[e] === t.activities) return !1;
                    v[e] = t.status, S[e] = t.activities, delete I[e]
                }
            })
        }
    }
]);
//# sourceMappingURL=703e6ebf759ec4911d43.js.map