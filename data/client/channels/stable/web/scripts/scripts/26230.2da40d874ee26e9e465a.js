(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26230"], {
        309570: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var l = n("49111");

            function u(t) {
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
                    return D
                },
                getCustomStatusMetadata: function() {
                    return G
                },
                default: function() {
                    return P
                }
            });
            var l = n("917351"),
                u = n.n(l),
                i = n("316693"),
                a = n("233069"),
                s = n("271938"),
                r = n("42203"),
                c = n("923959"),
                d = n("525065"),
                o = n("26989"),
                f = n("305961"),
                _ = n("42887"),
                S = n("957255"),
                g = n("824563"),
                E = n("945956"),
                v = n("18494"),
                p = n("162771"),
                T = n("800762"),
                A = n("599110"),
                I = n("991170"),
                h = n("761932"),
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
                    u = o.default.getMember(t, l),
                    i = c.default.getChannels(t),
                    a = i[c.GUILD_SELECTABLE_CHANNELS_KEY].length,
                    r = i[c.GUILD_VOCAL_CHANNELS_KEY].length,
                    _ = T.default.getVoiceStates(t);
                return {
                    guild_id: n.id,
                    guild_size_total: d.default.getMemberCount(t),
                    guild_num_channels: a + r,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: r,
                    guild_num_roles: N(n.roles),
                    guild_member_num_roles: null != u ? u.roles.length : 0,
                    guild_member_perms: String(null !== (e = S.default.getGuildPermissions(n)) && void 0 !== e ? e : I.default.NONE),
                    guild_is_vip: n.hasFeature(y.GuildFeatures.VIP_REGIONS),
                    is_member: null != u,
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
                        return null != e && i.default.has(e.deny, y.Permissions.VIEW_CHANNEL)
                    };
                    n = a.THREAD_CHANNEL_TYPES.has(t.type) && null != t.parent_id ? e(r.default.getChannel(t.parent_id)) : e(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != l && null !== (e = S.default.getChannelPermissions(t)) && void 0 !== e ? e : I.default.NONE),
                    channel_hidden: n
                }
            }

            function M(t) {
                if (null == t) return null;
                let e = r.default.getChannel(t);
                if (null == e) return null;
                let n = _.default.isVideoEnabled(),
                    l = E.default.getMediaSessionId();
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: l,
                    ...D(e.getGuildId(), e.id, n),
                    ...(0, h.getVoiceAnalyticsMetadataAdditional)()
                }
            }

            function U(t) {
                var e, n, l, u, i;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (A.default.isThrottled(t)) return;
                let c = !("location" in a) || a.location !== y.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                    d = "guild_id" in a ? a.guild_id : c ? p.default.getGuildId() : null,
                    o = "channel_id" in a ? a.channel_id : c ? v.default.getChannelId(d) : null,
                    f = r.default.getChannel(o);
                let _ = (e = f, n = d, null == e ? null != n ? n : null : e.isPrivate() ? null : null !== (u = null !== (l = e.getGuildId()) && void 0 !== l ? l : n) && void 0 !== u ? u : null);
                let S = {
                    ...a,
                    ...C(_),
                    ...null != d && null != o && (0, m.isStaticChannelRoute)(o) ? (i = 0, {
                        channel_static_route: o,
                        channel_hidden: !1
                    }) : L(f)
                };
                A.default.track(t, S, {
                    flush: s
                })
            }

            function D(t, e, n) {
                let l = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                return u(T.default.getVoiceStates(t)).filter(t => t.channelId === e).filter(t => t.userId !== s.default.getId()).forEach(t => {
                    l.voice_state_count++, (t.selfVideo || t.selfStream) && l.video_stream_count++
                }), l
            }

            function G(t, e) {
                let n = {
                    custom_status_count: 0
                };
                return u(T.default.getVoiceStates(t)).forEach(t => {
                    t.channelId === e && null != g.default.findActivity(t.userId, t => t.type === y.ActivityTypes.CUSTOM_STATUS) && n.custom_status_count++
                }), n
            }
            var P = {
                trackWithMetadata: U,
                getVoiceStateMetadata: D
            }
        },
        761932: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getVoiceAnalyticsMetadataAdditional: function() {
                    return u
                }
            });
            var l = n("568307");

            function u() {
                let t = l.default.getCurrentGameForAnalytics();
                return {
                    game_name: null != t ? t.name : null,
                    game_id: null != t ? t.id : null
                }
            }
        },
        32346: function(t, e, n) {
            "use strict";
            let l, u;
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("917351"),
                a = n.n(i),
                s = n("446674"),
                r = n("913144"),
                c = n("49111");
            let d = o();

            function o() {
                return {
                    recentCustomStatuses: [],
                    currentDefaultStatus: null
                }
            }
            class f extends s.default.PersistedStore {
                initialize(t) {
                    d = {
                        ...o(),
                        ...null != t ? t : {}
                    }
                }
                getState() {
                    return d
                }
                getCurrentHangStatus() {
                    return l
                }
                getCustomHangStatus() {
                    return u
                }
                getRecentCustomStatuses() {
                    return d.recentCustomStatuses
                }
                getCurrentDefaultStatus() {
                    return d.currentDefaultStatus
                }
                getHangStatusActivity() {
                    return null == l ? null : {
                        type: c.ActivityTypes.HANG_STATUS,
                        name: "Hang Status",
                        state: l,
                        details: null == u ? void 0 : u.status,
                        emoji: null == u ? void 0 : u.emoji
                    }
                }
            }
            f.displayName = "HangStatusStore", f.persistKey = "HangStatusStore";
            var _ = new f(r.default, {
                LOGOUT: function() {
                    d = o()
                },
                UPDATE_HANG_STATUS: function(t) {
                    let {
                        status: e,
                        saveAsDefault: n
                    } = t;
                    l = e, u = null, n && (d.currentDefaultStatus = {
                        status: e,
                        customHangStatus: u,
                        expiresAt: Date.now() + 288e5
                    })
                },
                UPDATE_HANG_STATUS_CUSTOM: function(t) {
                    let {
                        status: e,
                        emoji: n,
                        saveAsDefault: i
                    } = t;
                    l = c.HangStatusTypes.CUSTOM, u = {
                        status: e,
                        emoji: n
                    };
                    let s = [...d.recentCustomStatuses],
                        r = s.findIndex(t => t.status === e && a.isEqual(t.emoji, n)); - 1 !== r ? s.splice(r, 1) : 7 === s.length && s.splice(6, 1), d.recentCustomStatuses = [u, ...s], i && (d.currentDefaultStatus = {
                        status: l,
                        customHangStatus: u,
                        expiresAt: Date.now() + 288e5
                    })
                },
                CLEAR_HANG_STATUS: function(t) {
                    let {
                        saveAsDefault: e
                    } = t;
                    l = null, u = null, e && (d.currentDefaultStatus = {
                        status: null,
                        customHangStatus: null,
                        expiresAt: Date.now() + 288e5
                    })
                }
            })
        },
        824563: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return D
                }
            }), n("222007"), n("424973");
            var l = n("714617"),
                u = n.n(l),
                i = n("917351"),
                a = n.n(i),
                s = n("446674"),
                r = n("913144"),
                c = n("309570"),
                d = n("32346"),
                o = n("271938"),
                f = n("697218"),
                _ = n("49111");
            let S = Object.freeze([]),
                g = {},
                E = {},
                v = {},
                p = {},
                T = {};

            function A(t, e) {
                let n = g[t];
                return null != n ? n[e] : null
            }
            let I = t => {
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
                h = t => (0, c.default)(t) ? 1 : 0;

            function y(t, e) {
                var n, l, u, i, a;
                return n = t, I(e) - I(n) || (l = t, h(e) - h(l)) || (u = t, (null !== (i = e.created_at) && void 0 !== i ? i : 0) - (null !== (a = u.created_at) && void 0 !== a ? a : 0))
            }

            function m(t) {
                if (delete E[t], delete v[t], delete p[t], null == g[t]) return;
                let [e] = a.sortBy(g[t], t => -t.timestamp);
                e.status !== _.StatusTypes.OFFLINE ? (E[t] = e.status, v[t] = e.activities, null != e.clientStatus && (p[t] = e.clientStatus)) : a.every(g[t], t => t.status === _.StatusTypes.OFFLINE) && delete g[t]
            }

            function N(t) {
                let e = g[t];
                if (null == e) return;
                let n = a.maxBy(Object.values(e), t => t.timestamp);
                n.status !== _.StatusTypes.OFFLINE && (E[t] = n.status, v[t] = n.activities, null != n.clientStatus && (p[t] = n.clientStatus))
            }

            function C(t) {
                let {
                    guildId: e,
                    userId: n,
                    status: l,
                    clientStatus: i,
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
                    clientStatus: i,
                    activities: S,
                    timestamp: Date.now()
                };
                else {
                    let t = a.length > 1 ? [...a].sort(y) : a,
                        n = s[e];
                    a = null != n && u(n.activities, t) ? n.activities : t, s[e] = {
                        status: l,
                        clientStatus: i,
                        activities: a,
                        timestamp: Date.now()
                    }
                }
                return delete T[n], m(n), !0
            }

            function O(t) {
                let {
                    guildId: e,
                    userId: n,
                    status: l,
                    clientStatus: u,
                    activities: i,
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
                    clientStatus: u,
                    activities: S,
                    timestamp: Date.now()
                };
                else {
                    let t = i.length > 1 ? [...i].sort(y) : i;
                    s[e] = {
                        status: l,
                        clientStatus: u,
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
                    this.waitFor(o.default, d.default)
                }
                setCurrentUserOnConnectionOpen(t, e) {
                    E[o.default.getId()] = t, v[o.default.getId()] = e
                }
                getStatus(t) {
                    var e, n;
                    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.StatusTypes.OFFLINE,
                        i = f.default.getUser(t);
                    if (null != i && i.hasFlag(_.UserFlags.BOT_HTTP_INTERACTIONS) && (u = _.StatusTypes.UNKNOWN), null == i ? void 0 : i.isClyde()) return _.StatusTypes.ONLINE;
                    if (null == l) return null !== (e = E[t]) && void 0 !== e ? e : u;
                    let a = A(t, l);
                    return null !== (n = null == a ? void 0 : a.status) && void 0 !== n ? n : u
                }
                getActivities(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = v[t]) && void 0 !== n ? n : S
                    }
                    let l = A(t, e);
                    return null == l || null == l.activities ? S : l.activities
                }
                getPrimaryActivity(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(t, e).filter(t => t.type !== _.ActivityTypes.HANG_STATUS);
                    return n[0]
                }
                getAllApplicationActivities(t) {
                    let e = [];
                    for (let n of Object.keys(v)) {
                        let l = v[n];
                        for (let u of l) u.application_id === t && e.push({
                            userId: n,
                            activity: u
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
                    return T[t]
                }
                getUserIds() {
                    return Object.keys(v)
                }
                isMobileOnline(t) {
                    let e = p[t];
                    return null != e && e[_.ClientTypes.MOBILE] === _.StatusTypes.ONLINE && e[_.ClientTypes.DESKTOP] !== _.StatusTypes.ONLINE
                }
                getState() {
                    return {
                        presencesForGuilds: g,
                        statuses: E,
                        activities: v,
                        activityMetadata: T,
                        clientStatuses: p
                    }
                }
            }
            U.displayName = "PresenceStore";
            var D = new U(r.default, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    let {
                        guilds: e,
                        presences: n
                    } = t, l = o.default.getId();
                    g = {}, T = {}, E = {
                        [l]: E[l]
                    }, v = {
                        [l]: v[l]
                    }, p = {
                        [l]: {}
                    };
                    let u = new Set,
                        i = Date.now();
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
                                timestamp: i
                            }), u.add(n.id)
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
                            timestamp: i
                        }), u.add(e.id))
                    }), u.delete(l), u.forEach(N)
                },
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        presences: e
                    } = t;
                    g = e.presencesForGuilds, E = e.statuses, v = e.activities, T = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    let {
                        guild: e
                    } = t;
                    e.presences.forEach(t => {
                        let {
                            user: n,
                            status: l,
                            clientStatus: u,
                            activities: i
                        } = t;
                        C({
                            guildId: e.id,
                            userId: n.id,
                            status: l,
                            clientStatus: u,
                            activities: i
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
                            clientStatus: u,
                            activities: i
                        } = t;
                        return C({
                            guildId: null != e ? e : _.ME,
                            userId: n.id,
                            status: l,
                            clientStatus: u,
                            activities: i
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
                            activities: u
                        } = t;
                        null != e && C({
                            guildId: _.ME,
                            userId: e.id,
                            status: n,
                            clientStatus: l,
                            activities: u
                        })
                    })
                },
                ACTIVITY_METADATA_UPDATE: function(t) {
                    let {
                        userId: e,
                        metadata: n
                    } = t;
                    return T[e] = n, !1
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
                    if (E[e] === t.status && v[e] === t.activities) return !1;
                    E[e] = t.status, v[e] = t.activities, delete T[e]
                }
            })
        }
    }
]);
//# sourceMappingURL=26230.2da40d874ee26e9e465a.js.map