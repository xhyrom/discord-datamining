(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26230"], {
        309570: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return i
                }
            });
            var n = l("49111");

            function i(t) {
                return null != t && t.type !== n.ActivityTypes.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }
        },
        716241: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                collectGuildAnalyticsMetadata: function() {
                    return O
                },
                collectChannelAnalyticsMetadataFromId: function() {
                    return C
                },
                collectChannelAnalyticsMetadata: function() {
                    return L
                },
                collectVoiceAnalyticsMetadata: function() {
                    return M
                },
                trackWithMetadata: function() {
                    return P
                },
                getVoiceStateMetadata: function() {
                    return F
                },
                getCustomStatusMetadata: function() {
                    return U
                },
                default: function() {
                    return G
                }
            });
            var n = l("917351"),
                i = l.n(n),
                u = l("316693"),
                a = l("233069"),
                s = l("271938"),
                r = l("42203"),
                d = l("923959"),
                c = l("525065"),
                o = l("26989"),
                f = l("305961"),
                _ = l("42887"),
                E = l("957255"),
                g = l("824563"),
                v = l("945956"),
                I = l("18494"),
                p = l("162771"),
                h = l("800762"),
                S = l("599110"),
                T = l("991170"),
                y = l("761932"),
                A = l("49111"),
                m = l("724210");

            function N(t) {
                let e = 0;
                for (let l in t) e += 1;
                return e
            }

            function O(t) {
                var e;
                if (null == t) return null;
                let l = f.default.getGuild(t);
                if (null == l) return null;
                let n = s.default.getId(),
                    i = o.default.getMember(t, n),
                    u = d.default.getChannels(t),
                    a = u[d.GUILD_SELECTABLE_CHANNELS_KEY].length,
                    r = u[d.GUILD_VOCAL_CHANNELS_KEY].length,
                    _ = h.default.getVoiceStates(t);
                return {
                    guild_id: l.id,
                    guild_size_total: c.default.getMemberCount(t),
                    guild_num_channels: a + r,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: r,
                    guild_num_roles: N(l.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (e = E.default.getGuildPermissions(l)) && void 0 !== e ? e : T.default.NONE),
                    guild_is_vip: l.hasFeature(A.GuildFeatures.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: N(_)
                }
            }

            function C(t) {
                if (null == t) return null;
                let e = r.default.getChannel(t);
                return null == e ? null : L(e)
            }

            function L(t) {
                var e;
                if (null == t) return null;
                let l = !1,
                    n = t.getGuildId();
                if (null != n) {
                    let e = t => {
                        if (null == t) return !1;
                        let e = t.permissionOverwrites[n];
                        return null != e && u.default.has(e.deny, A.Permissions.VIEW_CHANNEL)
                    };
                    l = a.THREAD_CHANNEL_TYPES.has(t.type) && null != t.parent_id ? e(r.default.getChannel(t.parent_id)) : e(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != n && null !== (e = E.default.getChannelPermissions(t)) && void 0 !== e ? e : T.default.NONE),
                    channel_hidden: l
                }
            }

            function M(t) {
                if (null == t) return null;
                let e = r.default.getChannel(t);
                if (null == e) return null;
                let l = _.default.isVideoEnabled(),
                    n = v.default.getMediaSessionId();
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: n,
                    ...F(e.getGuildId(), e.id, l),
                    ...(0, y.getVoiceAnalyticsMetadataAdditional)()
                }
            }

            function P(t) {
                var e, l, n, i, u;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (S.default.isThrottled(t)) return;
                let d = !("location" in a) || a.location !== A.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                    c = "guild_id" in a ? a.guild_id : d ? p.default.getGuildId() : null,
                    o = "channel_id" in a ? a.channel_id : d ? I.default.getChannelId(c) : null,
                    f = r.default.getChannel(o);
                let _ = (e = f, l = c, null == e ? null != l ? l : null : e.isPrivate() ? null : null !== (i = null !== (n = e.getGuildId()) && void 0 !== n ? n : l) && void 0 !== i ? i : null);
                let E = {
                    ...a,
                    ...O(_),
                    ...null != c && null != o && (0, m.isStaticChannelRoute)(o) ? (u = 0, {
                        channel_static_route: o,
                        channel_hidden: !1
                    }) : L(f)
                };
                S.default.track(t, E, {
                    flush: s
                })
            }

            function F(t, e, l) {
                let n = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: l
                };
                return i(h.default.getVoiceStates(t)).filter(t => t.channelId === e).filter(t => t.userId !== s.default.getId()).forEach(t => {
                    n.voice_state_count++, (t.selfVideo || t.selfStream) && n.video_stream_count++
                }), n
            }

            function U(t, e) {
                let l = {
                    custom_status_count: 0
                };
                return i(h.default.getVoiceStates(t)).forEach(t => {
                    t.channelId === e && null != g.default.findActivity(t.userId, t => t.type === A.ActivityTypes.CUSTOM_STATUS) && l.custom_status_count++
                }), l
            }
            var G = {
                trackWithMetadata: P,
                getVoiceStateMetadata: F
            }
        },
        761932: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                getVoiceAnalyticsMetadataAdditional: function() {
                    return i
                }
            });
            var n = l("568307");

            function i() {
                let t = n.default.getCurrentGameForAnalytics();
                return {
                    game_name: null != t ? t.name : null,
                    game_id: null != t ? t.id : null
                }
            }
        },
        824563: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return P
                }
            });
            var n = l("714617"),
                i = l.n(n),
                u = l("917351"),
                a = l.n(u),
                s = l("446674"),
                r = l("913144"),
                d = l("309570"),
                c = l("271938"),
                o = l("697218"),
                f = l("49111");
            let _ = Object.freeze([]),
                E = {},
                g = {},
                v = {},
                I = {},
                p = {};

            function h(t, e) {
                let l = E[t];
                return null != l ? l[e] : null
            }
            let S = t => {
                    switch (t.type) {
                        case f.ActivityTypes.CUSTOM_STATUS:
                            return 4;
                        case f.ActivityTypes.COMPETING:
                            return 3;
                        case f.ActivityTypes.STREAMING:
                            return 2;
                        case f.ActivityTypes.PLAYING:
                            return 1;
                        default:
                            return 0
                    }
                },
                T = t => (0, d.default)(t) ? 1 : 0;

            function y(t, e) {
                var l, n, i, u, a;
                return l = t, S(e) - S(l) || (n = t, T(e) - T(n)) || (i = t, (null !== (u = e.created_at) && void 0 !== u ? u : 0) - (null !== (a = i.created_at) && void 0 !== a ? a : 0))
            }

            function A(t) {
                if (delete g[t], delete v[t], delete I[t], null == E[t]) return;
                let [e] = a.sortBy(E[t], t => -t.timestamp);
                e.status !== f.StatusTypes.OFFLINE ? (g[t] = e.status, v[t] = e.activities, null != e.clientStatus && (I[t] = e.clientStatus)) : a.every(E[t], t => t.status === f.StatusTypes.OFFLINE) && delete E[t]
            }

            function m(t) {
                let e = E[t];
                if (null == e) return;
                let l = a.maxBy(Object.values(e), t => t.timestamp);
                l.status !== f.StatusTypes.OFFLINE && (g[t] = l.status, v[t] = l.activities, null != l.clientStatus && (I[t] = l.clientStatus))
            }

            function N(t) {
                let {
                    guildId: e,
                    userId: l,
                    status: n,
                    clientStatus: u,
                    activities: a
                } = t;
                if (l === c.default.getId()) return !1;
                let s = E[l];
                if (null == s) {
                    if (n === f.StatusTypes.OFFLINE) return !1;
                    s = E[l] = {}
                }
                if (n === f.StatusTypes.OFFLINE) s[e] = {
                    status: n,
                    clientStatus: u,
                    activities: _,
                    timestamp: Date.now()
                };
                else {
                    let t = a.length > 1 ? [...a].sort(y) : a,
                        l = s[e];
                    a = null != l && i(l.activities, t) ? l.activities : t, s[e] = {
                        status: n,
                        clientStatus: u,
                        activities: a,
                        timestamp: Date.now()
                    }
                }
                return delete p[l], A(l), !0
            }

            function O(t) {
                let {
                    guildId: e,
                    userId: l,
                    status: n,
                    clientStatus: i,
                    activities: u,
                    timestamp: a
                } = t;
                if (l === c.default.getId()) return;
                let s = E[l];
                if (null == s) {
                    if (n === f.StatusTypes.OFFLINE) return;
                    s = E[l] = {}
                }
                if (n === f.StatusTypes.OFFLINE) s[e] = {
                    status: n,
                    clientStatus: i,
                    activities: _,
                    timestamp: Date.now()
                };
                else {
                    let t = u.length > 1 ? [...u].sort(y) : u;
                    s[e] = {
                        status: n,
                        clientStatus: i,
                        activities: t,
                        timestamp: a
                    }
                }
            }

            function C(t, e) {
                if (e === c.default.getId()) return !1;
                let l = E[e];
                if (null == l || null == l[t]) return !1;
                delete l[t], 0 === Object.keys(l).length && delete E[e], A(e)
            }

            function L(t) {
                for (let e of Object.keys(E)) C(t, e)
            }
            class M extends s.default.Store {
                initialize() {
                    this.waitFor(c.default)
                }
                setCurrentUserOnConnectionOpen(t, e) {
                    g[c.default.getId()] = t, v[c.default.getId()] = e
                }
                getStatus(t) {
                    var e, l;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.StatusTypes.OFFLINE,
                        u = o.default.getUser(t);
                    if (null != u && u.hasFlag(f.UserFlags.BOT_HTTP_INTERACTIONS) && (i = f.StatusTypes.UNKNOWN), null == u ? void 0 : u.isClyde()) return f.StatusTypes.ONLINE;
                    if (null == n) return null !== (e = g[t]) && void 0 !== e ? e : i;
                    let a = h(t, n);
                    return null !== (l = null == a ? void 0 : a.status) && void 0 !== l ? l : i
                }
                getActivities(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var l;
                        return null !== (l = v[t]) && void 0 !== l ? l : _
                    }
                    let n = h(t, e);
                    return null == n || null == n.activities ? _ : n.activities
                }
                getPrimaryActivity(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        l = this.getActivities(t, e);
                    return l[0]
                }
                getAllApplicationActivities(t) {
                    let e = [];
                    for (let l of Object.keys(v)) {
                        let n = v[l];
                        for (let i of n) i.application_id === t && e.push({
                            userId: l,
                            activity: i
                        })
                    }
                    return e
                }
                getApplicationActivity(t, e) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(t, t => t.application_id === e, l)
                }
                findActivity(t, e) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(t, l).find(e)
                }
                getActivityMetadata(t) {
                    return p[t]
                }
                getUserIds() {
                    return Object.keys(v)
                }
                isMobileOnline(t) {
                    let e = I[t];
                    return null != e && e[f.ClientTypes.MOBILE] === f.StatusTypes.ONLINE && e[f.ClientTypes.DESKTOP] !== f.StatusTypes.ONLINE
                }
                getState() {
                    return {
                        presencesForGuilds: E,
                        statuses: g,
                        activities: v,
                        activityMetadata: p,
                        clientStatuses: I
                    }
                }
            }
            M.displayName = "PresenceStore";
            var P = new M(r.default, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    let {
                        guilds: e,
                        presences: l
                    } = t, n = c.default.getId();
                    E = {}, p = {}, g = {
                        [n]: g[n]
                    }, v = {
                        [n]: v[n]
                    }, I = {
                        [n]: {}
                    };
                    let i = new Set,
                        u = Date.now();
                    e.forEach(t => {
                        t.presences.forEach(e => {
                            let {
                                user: l,
                                status: n,
                                clientStatus: a,
                                activities: s
                            } = e;
                            O({
                                guildId: t.id,
                                userId: l.id,
                                status: n,
                                clientStatus: a,
                                activities: s,
                                timestamp: u
                            }), i.add(l.id)
                        })
                    }), l.forEach(t => {
                        let {
                            user: e,
                            status: l,
                            clientStatus: n,
                            activities: a
                        } = t;
                        null != e && (O({
                            guildId: f.ME,
                            userId: e.id,
                            status: l,
                            clientStatus: n,
                            activities: a,
                            timestamp: u
                        }), i.add(e.id))
                    }), i.delete(n), i.forEach(m)
                },
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        presences: e
                    } = t;
                    E = e.presencesForGuilds, g = e.statuses, v = e.activities, p = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    let {
                        guild: e
                    } = t;
                    e.presences.forEach(t => {
                        let {
                            user: l,
                            status: n,
                            clientStatus: i,
                            activities: u
                        } = t;
                        N({
                            guildId: e.id,
                            userId: l.id,
                            status: n,
                            clientStatus: i,
                            activities: u
                        })
                    })
                },
                GUILD_DELETE: function(t) {
                    let {
                        guild: e
                    } = t;
                    L(e.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    let {
                        guildId: e,
                        user: l
                    } = t;
                    return C(e, l.id)
                },
                PRESENCE_UPDATES: function(t) {
                    let {
                        updates: e
                    } = t;
                    return e.map(t => {
                        let {
                            guildId: e,
                            user: l,
                            status: n,
                            clientStatus: i,
                            activities: u
                        } = t;
                        return N({
                            guildId: null != e ? e : f.ME,
                            userId: l.id,
                            status: n,
                            clientStatus: i,
                            activities: u
                        })
                    }).some(t => t)
                },
                PRESENCES_REPLACE: function(t) {
                    let {
                        presences: e
                    } = t;
                    L(f.ME), e.forEach(t => {
                        let {
                            user: e,
                            status: l,
                            clientStatus: n,
                            activities: i
                        } = t;
                        null != e && N({
                            guildId: f.ME,
                            userId: e.id,
                            status: l,
                            clientStatus: n,
                            activities: i
                        })
                    })
                },
                ACTIVITY_METADATA_UPDATE: function(t) {
                    let {
                        userId: e,
                        metadata: l
                    } = t;
                    return p[e] = l, !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    let {
                        guildId: e,
                        members: l
                    } = t;
                    l.forEach(t => {
                        null != t.presence && N({
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
                        addedMembers: l
                    } = t;
                    null == l || l.forEach(t => {
                        null != t.presence && N({
                            guildId: e,
                            userId: t.userId,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    })
                },
                SELF_PRESENCE_STORE_UPDATE: function(t) {
                    let e = c.default.getId();
                    if (g[e] === t.status && v[e] === t.activities) return !1;
                    g[e] = t.status, v[e] = t.activities, delete p[e]
                }
            })
        }
    }
]);
//# sourceMappingURL=b5304b5a0dd24ad8e6fc.js.map