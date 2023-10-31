(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9976"], {
        327037: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchCurrentUser: function() {
                    return _
                },
                acceptAgreements: function() {
                    return h
                },
                setFlag: function() {
                    return E
                },
                getUser: function() {
                    return p
                },
                fetchProfile: function() {
                    return m
                },
                fetchMutualFriends: function() {
                    return f
                }
            });
            var n = i("627445"),
                s = i.n(n),
                a = i("811022"),
                r = i("872717"),
                l = i("913144"),
                o = i("766274"),
                d = i("697218"),
                u = i("49111");
            let c = new a.default("UserProfileModalActionCreators");

            function _() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        withAnalyticsToken: t = !1
                    } = e;
                return r.default.get({
                    url: u.Endpoints.ME,
                    query: {
                        with_analytics_token: t
                    },
                    oldFormErrors: !0
                }).then(e => (l.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: e.body,
                    analyticsToken: t ? e.body.analytics_token : void 0
                }), new o.default(e.body)))
            }

            function h() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.patch({
                    url: u.Endpoints.USER_AGREEMENTS,
                    body: {
                        terms: e,
                        privacy: t
                    },
                    oldFormErrors: !0
                }).then(() => !0, () => !1)
            }

            function E(e, t) {
                let i = d.default.getCurrentUser();
                s(null != i, "setFlag: user cannot be undefined");
                let n = t ? i.flags | e : i.flags & ~e;
                return r.default.patch({
                    url: u.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: n
                    }
                })
            }

            function p(e) {
                let t = d.default.getUser(e);
                return null != t ? Promise.resolve(t) : r.default.get({
                    url: u.Endpoints.USER(e),
                    oldFormErrors: !0
                }).then(t => (l.default.dispatch({
                    type: "USER_UPDATE",
                    user: t.body
                }), d.default.getUser(e)))
            }
            async function m(e) {
                let {
                    friendToken: t,
                    withMutualGuilds: i,
                    withMutualFriendsCount: n,
                    guildId: s,
                    connectionsRoleId: a
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0;
                l.default.dispatch({
                    type: "USER_PROFILE_FETCH_START",
                    userId: e
                });
                try {
                    let d = await r.default.get({
                        url: u.Endpoints.USER_PROFILE(e),
                        query: {
                            friend_token: t,
                            with_mutual_guilds: i,
                            with_mutual_friends_count: n,
                            guild_id: s,
                            connections_role_id: a
                        },
                        oldFormErrors: !0
                    });
                    return null == o || o(d.body, s), l.default.dispatch({
                        type: "USER_UPDATE",
                        user: d.body.user
                    }), l.default.dispatch({
                        type: "USER_PROFILE_FETCH_SUCCESS",
                        ...d.body
                    }), null != s && null != d.body.guild_member && l.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildId: s,
                        guildMember: d.body.guild_member
                    }), d.body
                } catch (t) {
                    throw null != t && (null == t ? void 0 : t.body) != null && c.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), l.default.dispatch({
                        type: "USER_PROFILE_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }
            async function f(e) {
                l.default.dispatch({
                    type: "MUTUAL_FRIENDS_FETCH_START",
                    userId: e
                });
                try {
                    let t = await r.default.get({
                        url: u.Endpoints.USER_RELATIONSHIPS(e),
                        oldFormErrors: !0
                    });
                    l.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                        userId: e,
                        mutualFriends: t.body
                    })
                } catch (t) {
                    throw (null == t ? void 0 : t.body) != null && c.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message)), l.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }
        },
        201876: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("714617"),
                s = i.n(n);
            class a {
                shouldCommit() {
                    return !0
                }
                setState(e) {
                    this.state = {
                        ...this.state,
                        ...e
                    }
                }
                getState() {
                    return this.state
                }
                reset() {
                    this.dirty = !1, this.state = this.getInitialState()
                }
                update() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = this.getNextState({
                            ...this.state,
                            ...e
                        });
                    if (t) this.dirty = !s(i, this.getInitialState());
                    else
                        for (let e of Object.keys(i)) this.dirty = this.dirty || !s(this.state[e], i[e]);
                    return this.state = i, !!(this.dirty && this.shouldCommit()) && (this.dirty = !1, this.didCommit(this.state), !0)
                }
                forceUpdate() {
                    this.dirty = !1, this.didCommit(this.state)
                }
                constructor() {
                    this.dirty = !1, this.state = this.getInitialState()
                }
            }
        },
        661736: function(e, t, i) {
            "use strict";

            function n(e, t, i) {
                let n;
                let s = [],
                    a = function() {
                        for (var r = arguments.length, l = Array(r), o = 0; o < r; o++) l[o] = arguments[o];
                        let d = Date.now();
                        for (null != n && (clearTimeout(n), n = null); s.length > 0 && s[0] <= d;) s.shift();
                        s.length < e ? (s.push(d + t), i(...l)) : n = setTimeout(() => a(...l), s[0] - d)
                    };
                return a
            }
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            })
        },
        429928: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("376556"),
                s = i("49111"),
                a = i("450484");

            function r(e) {
                return null != e && e.type === s.ActivityTypes.LISTENING && e.name === n.default.get(s.PlatformTypes.SPOTIFY).name && null != e.party && null != e.party.id && (0, a.isSpotifyParty)(e.party.id)
            }
        },
        823704: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("913144");

            function s() {
                n.default.dispatch({
                    type: "ACTIVITY_SYNC_STOP"
                })
            }
        },
        939398: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getDesktopSourceMetadata: function() {
                    return d
                },
                trackWithOverlayMetadata: function() {
                    return u
                }
            });
            var n = i("42887"),
                s = i("568307"),
                a = i("703370"),
                r = i("599110"),
                l = i("716241"),
                o = i("49111");

            function d() {
                let e, t, i, a, r;
                let l = n.default.getGoLiveSource();
                if (null != l && (e = l.quality.resolution, t = l.quality.frameRate, null != l.desktopSource)) {
                    var o, d;
                    i = l.desktopSource.soundshareSession;
                    let e = null != l.desktopSource.sourcePid ? s.default.getGameForPID(l.desktopSource.sourcePid) : null;
                    a = null !== (o = null == e ? void 0 : e.name) && void 0 !== o ? o : null, r = null !== (d = null == e ? void 0 : e.id) && void 0 !== d ? d : null
                }
                return {
                    video_input_resolution: e,
                    video_input_frame_rate: t,
                    soundshare_session: i,
                    share_game_name: a,
                    share_game_id: r
                }
            }

            function u(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = a.default.getGame();
                switch (t = {
                        ...t,
                        overlay_game_name: null != n ? n.name : "Unknown Game",
                        overlay_app_id: null != n ? n.id : null
                    }, e) {
                    case o.AnalyticEvents.VOICE_CHANNEL_SELECTED:
                    case o.AnalyticEvents.SETTINGS_PANE_VIEWED:
                    case o.AnalyticEvents.GUILD_VIEWED:
                    case o.AnalyticEvents.CHANNEL_OPENED:
                        return (0, l.trackWithMetadata)(e, t, i);
                    default:
                        return r.default.track(e, t, {
                            flush: i
                        })
                }
            }
        },
        105059: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("605250"),
                s = i("305961"),
                a = i("802493");
            let r = new n.default("GuildVersions");
            var l = new class e {
                getCommittedVersions() {
                    try {
                        var e, t;
                        let i = null === (t = a.default.versions()) || void 0 === t ? void 0 : null === (e = t.getManySyncUnsafe()) || void 0 === e ? void 0 : e.map(e => [e.id, e.version]);
                        return new Map(null != i ? i : [])
                    } catch (e) {
                        return r.warn("couldn't load guild versions", e), new Map
                    }
                }
                pause(e) {
                    let t = Symbol(e);
                    return this.pauseTokens.add(t), t
                }
                resume(e, t) {
                    this.pauseTokens.delete(e) && 0 === this.pauseTokens.size && this.commit(t)
                }
                remove(e, t) {
                    this.deleteWith(e), this.commit(t)
                }
                handleBackgroundSync(e, t) {
                    for (let i of e.guilds) "unavailable" !== i.data_mode && this.updateWith(i.id, [i]), null == s.default.getGuild(i.id) && this.remove(i.id, t);
                    this.commit(t)
                }
                handleConnectionOpen(e, t) {
                    for (let t of (this.reset(), e.guilds)) this.updateWith(t.id, [t]);
                    this.commit(t)
                }
                handleGuildCreate(e, t) {
                    var i;
                    let n = e.guild,
                        s = e.guild.id;
                    this.updateWith(s, [n]), this.updateWith(s, n.emojis), this.updateWith(s, n.stickers), this.updateWith(s, n.channels), this.updateWith(s, null === (i = n.channelUpdates) || void 0 === i ? void 0 : i.writes), this.updateWith(s, Array.isArray(n.roles) ? n.roles : Object.values(n.roles)), this.commit(t)
                }
                handleGuildUpdate(e, t) {
                    let i = e.guild,
                        n = e.guild.id;
                    this.updateWith(n, [i]), this.updateWith(n, i.emojis), this.updateWith(n, i.stickers), this.updateWith(n, Array.isArray(i.roles) ? i.roles : Object.values(i.roles)), this.commit(t)
                }
                handleGuildDelete(e, t) {
                    this.deleteWith(e.guild.id), this.commit(t)
                }
                handleGuildRoleChange(e, t) {
                    this.updateWith(e.guildId, [e.role]), this.commit(t)
                }
                handleGuildRoleDelete(e, t) {
                    this.updateWith(e.guildId, [{
                        version: e.version
                    }]), this.commit(t)
                }
                handleGuildEmojisUpdate(e, t) {
                    this.updateWith(e.guildId, e.emojis), this.commit(t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.updateWith(e.guildId, e.stickers), this.commit(t)
                }
                handleChannelCreate(e, t) {
                    null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t)
                }
                handleChannelUpdates(e, t) {
                    for (let t of e.channels) null != t.guild_id && this.updateWith(t.guild_id, [t]);
                    this.commit(t)
                }
                handleChannelDelete(e, t) {
                    null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t)
                }
                handleClearGuildCache(e) {
                    this.reset(), a.default.versionsTransaction(e).delete()
                }
                handleReset() {
                    this.reset()
                }
                reset() {
                    this.committed = new Map, this.pending = new Map, this.pauseTokens = new Set
                }
                deleteWith(e) {
                    this.pending.set(e, null)
                }
                updateWith(e, t) {
                    if (null != t) {
                        var i, n;
                        let s = Math.max(null !== (i = this.committed.get(e)) && void 0 !== i ? i : 0, null !== (n = this.pending.get(e)) && void 0 !== n ? n : 0),
                            a = this.computeLatestVersion(s, t);
                        a > s && this.pending.set(e, a)
                    }
                }
                computeLatestVersion(e, t) {
                    let i = e;
                    for (let e of t) {
                        var n;
                        i = Math.max(i, null !== (n = e.version) && void 0 !== n ? n : 0)
                    }
                    return i
                }
                commit(e) {
                    if (this.pending.size > 0 && 0 === this.pauseTokens.size) {
                        let t = a.default.versionsTransaction(e);
                        for (let [e, i] of this.pending) null != i ? (t.put({
                            id: e,
                            version: i
                        }), this.committed.set(e, i)) : (t.delete(e), this.committed.delete(e));
                        this.pending.clear()
                    }
                }
                constructor() {
                    this.pending = new Map, this.committed = new Map, this.pauseTokens = new Set, this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
                        CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
                        CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
                        GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
                        GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
                        GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        849365: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("605250"),
                s = i("802493"),
                a = i("723939");
            let r = "version",
                l = new n.default("KvCacheVersion");
            var o = new class e {
                async okAsync(e) {
                    let t = await s.default.cache(e).get(r);
                    return null == t ? null : 3 === t
                }
                okSync(e) {
                    try {
                        let t = s.default.cache(e).getSyncUnsafe(r);
                        return null == t ? null : 3 === t
                    } catch (e) {
                        return l.log("couldn't read version from database: ".concat(e.message)), !1
                    }
                }
                handleClearGuildCache(e) {
                    s.default.cacheTransaction(e).delete(r), s.default.cacheTransaction(e).delete("CacheStore.Nonce"), a.default.replaceDisableAllDatabases("CLEAR_GUILD_CACHE (via KvCacheVersion)")
                }
                handleWrite(e) {
                    s.default.cacheTransaction(e).put("hello", "\uD83D\uDC4B"), s.default.cacheTransaction(e).put(r, 3)
                }
                handleReset() {}
                constructor() {
                    this.actions = {
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleWrite(t),
                        WRITE_CACHES: (e, t) => this.handleWrite(t)
                    }
                }
            }
        },
        926274: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                size: function() {
                    return s
                }
            });
            let n = new Set;

            function s() {
                return n.size
            }
        },
        837374: function(e, t, i) {
            "use strict";
            var n, s;

            function a(e) {
                let {
                    sessionId: t,
                    userId: i,
                    applicationId: n,
                    channelId: s,
                    streamKey: a
                } = e;
                return {
                    session_id: t,
                    user_id: i,
                    application_id: n,
                    channel_id: s,
                    stream_key: a
                }
            }

            function r(e, t, i) {
                let {
                    session_id: n,
                    application_id: s,
                    channel_id: a,
                    stream_key: r
                } = e;
                return {
                    sessionId: n,
                    userId: t,
                    applicationId: s,
                    channelId: a,
                    streamKey: r,
                    source: i
                }
            }
            i.r(t), i.d(t, {
                BroadcastSourceType: function() {
                    return n
                },
                broadcastToServer: function() {
                    return a
                },
                broadcastFromServer: function() {
                    return r
                }
            }), (s = n || (n = {}))[s.GLOBAL = 0] = "GLOBAL", s[s.GUILD = 1] = "GUILD"
        },
        548578: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                MAX_CACHE_AGE_MS: function() {
                    return n
                },
                CACHE_VERSION: function() {
                    return s
                },
                getDefaultState: function() {
                    return a
                }
            });
            let n = 2592e6,
                s = "stable-50";

            function a() {
                return {
                    nonce: "",
                    useGuildVersions: !1,
                    highestLastMessageId: "0",
                    readStateVersion: 0,
                    userGuildSettingsVersion: -1,
                    userSettingsVersion: -1,
                    version: s,
                    cacheCreationDate: null,
                    privateChannelsVersion: "0",
                    apiCodeVersion: 0,
                    guildIdsRequiringDeletedIdsSync: [],
                    lastSelectedGuildId: null
                }
            }
        },
        288206: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return k
                }
            });
            var n, s, a, r = i("446674"),
                l = i("95410"),
                o = i("913144"),
                d = i("105059"),
                u = i("605250"),
                c = i("271938"),
                _ = i("42203"),
                h = i("162771"),
                E = i("299039"),
                p = i("91131"),
                m = i("70754"),
                f = i("548578");
            let S = new u.default("ClientStateStore"),
                T = p.initialState.nonce,
                g = p.initialState.useGuildVersions,
                I = p.initialState.highestLastMessageId,
                A = p.initialState.readStateVersion,
                C = p.initialState.userGuildSettingsVersion,
                y = null !== (n = p.initialState.userSettingsVersion) && void 0 !== n ? n : -1,
                N = p.initialState.cacheCreationDate,
                D = p.initialState.apiCodeVersion,
                R = null !== (s = p.initialState.privateChannelsVersion) && void 0 !== s ? s : "0",
                v = new Set(null !== (a = p.initialState.guildIdsRequiringDeletedIdsSync) && void 0 !== a ? a : []),
                O = p.initialState.lastSelectedGuildId,
                b = !1;

            function L(e) {
                null != e && 1 === E.default.compare(e, I) && (I = e)
            }

            function P() {
                I = "0", A = 0, C = -1, y = -1, R = "0", p.clear(), D = 0, v.clear()
            }
            class U extends r.default.Store {
                initialize() {
                    this.waitFor(c.default), this.syncWith([h.default], () => {
                        if (!b) return !1;
                        O = h.default.getGuildId()
                    })
                }
                persist(e) {
                    S.verbose("writing ClientStateStore (nonce: ".concat(e, ")")), null == N && (N = Date.now()), T = e, p.persist(c.default.getId(), {
                        nonce: e,
                        version: f.CACHE_VERSION,
                        useGuildVersions: g,
                        highestLastMessageId: I,
                        readStateVersion: A,
                        userGuildSettingsVersion: C,
                        userSettingsVersion: y,
                        cacheCreationDate: N,
                        privateChannelsVersion: R,
                        apiCodeVersion: D,
                        guildIdsRequiringDeletedIdsSync: Array.from(v),
                        lastSelectedGuildId: O
                    }), l.default.remove("GuildIdsRequiringDeletedIdsSync")
                }
                clear() {
                    P()
                }
                getClientState() {
                    let e = g && (0, m.isCacheEnabled)() ? Object.fromEntries(d.default.getCommittedVersions()) : {};
                    return {
                        knownGuildVersions: e,
                        highestLastMessageId: I,
                        readStateVersion: A,
                        userGuildSettingsVersion: C,
                        userSettingsVersion: y,
                        privateChannelsVersion: R,
                        apiCodeVersion: D,
                        lastSelectedGuildId: O
                    }
                }
                getGuildIdsRequiringDeletedIdsSync() {
                    return v
                }
                getSavedNonce() {
                    return T
                }
            }
            U.displayName = "ClientStateStore";
            var k = new U(o.default, {
                BACKGROUND_SYNC: function(e) {
                    for (let t of e.guilds) "partial" === t.data_mode && t.unableToSyncDeletes && v.add(t.id);
                    null != e.apiCodeVersion && (D = e.apiCodeVersion)
                },
                CONNECTION_OPEN: function(e) {
                    var t, i, n, s, a, r;
                    let {
                        guilds: l,
                        readState: o,
                        userGuildSettings: d,
                        userSettingsProto: u,
                        apiCodeVersion: c
                    } = e;
                    for (let e of (A = o.version, C = d.version, y = null !== (i = null == u ? void 0 : null === (t = u.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== i ? i : -1, D = c, b = !0, g = !0, l)) e.unableToSyncDeletes && v.add(e.id), e.unableToSyncDeletes && v.add(e.id), null === (n = e.channels) || void 0 === n || n.forEach(e => L(e.lastMessageId)), null === (a = e.channelUpdates) || void 0 === a || null === (s = a.writes) || void 0 === s || s.forEach(e => L(e.lastMessageId)), null === (r = e.channelTimestampUpdates) || void 0 === r || r.forEach(e => L(e.last_message_id))
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function() {
                    let e = _.default.getMutablePrivateChannels();
                    for (let t in e) {
                        1 === E.default.compare(t, R) && (R = t);
                        let i = e[t].lastMessageId;
                        null != i && 1 === E.default.compare(i, R) && (R = i)
                    }
                },
                DELETED_ENTITY_IDS: function(e) {
                    v.delete(e.guild_id)
                },
                MESSAGE_CREATE: function(e) {
                    var t;
                    let {
                        message: {
                            id: i,
                            channel_id: n
                        },
                        isPushNotification: s,
                        optimistic: a
                    } = e;
                    !s && !a && (L(i), (null === (t = _.default.getChannel(n)) || void 0 === t ? void 0 : t.isPrivate()) && 1 === E.default.compare(i, R) && (R = i))
                },
                GUILD_CREATE: function(e) {
                    var t, i, n, s;
                    let {
                        guild: a
                    } = e;
                    !a.unavailable && (a.unableToSyncDeletes && v.add(a.id), null === (t = a.channels) || void 0 === t || t.forEach(e => L(e.lastMessageId)), null === (n = a.channelUpdates) || void 0 === n || null === (i = n.writes) || void 0 === i || i.forEach(e => L(e.lastMessageId)), null === (s = a.channelTimestampUpdates) || void 0 === s || s.forEach(e => L(e.last_message_id)), a.unableToSyncDeletes && v.add(a.id))
                },
                CLEAR_GUILD_CACHE: P,
                CLEAR_CACHES: P,
                LOGOUT: P,
                LOGIN: P,
                MESSAGE_ACK: function(e) {
                    let {
                        version: t,
                        ...i
                    } = e;
                    null != t ? A = t : S.log("Received null read states version", i)
                },
                CHANNEL_PINS_ACK: function(e) {
                    let {
                        version: t,
                        ...i
                    } = e;
                    null != t ? A = t : S.log("Received null read states version", i)
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e;
                    for (let e of t) null != e.version && e.version > C && (C = e.version)
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e;
                    if (null != t.proto.versions) {
                        var i;
                        y = null !== (i = t.proto.versions.dataVersion) && void 0 !== i ? i : -1
                    }
                }
            })
        },
        91131: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                initialState: function() {
                    return l
                },
                persist: function() {
                    return o
                },
                clear: function() {
                    return d
                }
            });
            var n = i("95410"),
                s = i("548578");
            let a = "ClientStateStore",
                r = (0, s.getDefaultState)();
            r.version === s.CACHE_VERSION && null != r.cacheCreationDate && r.cacheCreationDate + s.MAX_CACHE_AGE_MS > Date.now() || (r = (0, s.getDefaultState)());
            let l = r;

            function o(e, t) {
                n.default.set(a, t)
            }

            function d() {
                n.default.remove(a)
            }
        },
        70754: function(e, t, i) {
            "use strict";

            function n() {
                return !1
            }
            i.r(t), i.d(t, {
                isCacheEnabled: function() {
                    return n
                }
            })
        },
        56947: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                areClipsEnabled: function() {
                    return o
                },
                useEnableClips: function() {
                    return d
                },
                useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock: function() {
                    return u
                },
                useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark: function() {
                    return c
                }
            });
            var n = i("862205"),
                s = i("584687"),
                a = i("18346");
            let r = (0, n.createExperiment)({
                    kind: "user",
                    id: "2022-11_clips_experiment",
                    label: "Clips Experiment",
                    defaultConfig: {
                        enableClips: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Clips without upsells",
                        config: {
                            enableClips: !0
                        }
                    }, {
                        id: 2,
                        label: "Clips with upsells",
                        config: {
                            enableClips: !0
                        }
                    }]
                }),
                l = (0, n.createExperiment)({
                    kind: "user",
                    id: "2023-09_clips_nitro_early_access",
                    label: "Clips (Nitro EA)",
                    defaultConfig: {
                        enableClips: !1,
                        enablePremiumEarlyAccessAnnouncementCoachmark: !1,
                        enablePremiumEarlyAccessGoLiveRoadblock: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Clips Nitro EA Upsells Visible",
                        config: {
                            enableClips: !1,
                            enablePremiumEarlyAccessAnnouncementCoachmark: !0,
                            enablePremiumEarlyAccessGoLiveRoadblock: !0
                        }
                    }, {
                        id: 2,
                        label: "Clips Enabled (Nitro)",
                        config: {
                            enableClips: !0,
                            enablePremiumEarlyAccessAnnouncementCoachmark: !0,
                            enablePremiumEarlyAccessGoLiveRoadblock: !1
                        }
                    }]
                });

            function o() {
                if (!(0, a.default)()) return !1;
                let {
                    enableClips: e
                } = l.getCurrentConfig({
                    location: "areClipsEnabled"
                }, {
                    autoTrackExposure: !1
                }), {
                    enableClips: t
                } = r.getCurrentConfig({
                    location: "areClipsEnabled"
                }, {
                    autoTrackExposure: !1
                }), {
                    enableDecoupledGameClipping: i
                } = s.default.getCurrentConfig({
                    location: "areClipsEnabled"
                }, {
                    autoTrackExposure: !1
                });
                return e || t || i
            }

            function d() {
                let e = (0, a.default)(),
                    {
                        enableClips: t
                    } = l.useExperiment({
                        location: "useEnableClips"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enableClips: i
                    } = r.useExperiment({
                        location: "useEnableClips"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enableDecoupledGameClipping: n
                    } = s.default.useExperiment({
                        location: "useEnableClips"
                    }, {
                        autoTrackExposure: !1
                    });
                return (i || t || n) && e
            }
            let u = e => {
                    let {
                        autoTrackExposure: t
                    } = e, i = (0, a.default)(), {
                        enablePremiumEarlyAccessGoLiveRoadblock: n
                    } = l.useExperiment({
                        location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
                    }, {
                        autoTrackExposure: t && i
                    });
                    return !!i && n
                },
                c = e => {
                    let {
                        autoTrackExposure: t
                    } = e, i = (0, a.default)(), {
                        enablePremiumEarlyAccessAnnouncementCoachmark: n
                    } = l.useExperiment({
                        location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
                    }, {
                        autoTrackExposure: t && i
                    });
                    return !!i && n
                }
        },
        18346: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("42887"),
                s = i("773336"),
                a = i("353927");

            function r() {
                return s.isDesktop() && n.default.getMediaEngine().supports(a.Features.CLIPS)
            }
        },
        225772: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("385976"),
                s = i("867805"),
                a = i("49111");

            function r(e) {
                let t = null;
                if (null != e.emojiId && "0" !== e.emojiId) {
                    let i = n.default.getUsableCustomEmojiById(e.emojiId);
                    t = null != i ? {
                        id: i.id,
                        name: i.name,
                        animated: i.animated
                    } : null
                } else if (null != e.emojiName && "" !== e.emojiName) {
                    let i = s.default.getByName(s.default.convertSurrogateToName(e.emojiName, !1));
                    t = null != i ? {
                        id: null,
                        name: i.surrogates,
                        animated: !1
                    } : null
                }
                let i = Number(e.expiresAtMs);
                return {
                    name: "Custom Status",
                    type: a.ActivityTypes.CUSTOM_STATUS,
                    state: e.text.length > 0 ? e.text : void 0,
                    timestamps: i > 0 ? {
                        end: i
                    } : void 0,
                    emoji: t
                }
            }
        },
        509065: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("913144");
            class s {
                static flush(e, t) {
                    for (let i of s.batchers) null != i.action && (null == e || i.shouldFlush(e, t)) && i.flush()
                }
                flush() {
                    let {
                        action: e
                    } = this;
                    this.action = null, null != e && n.default.dispatch(e).catch(t => this.socket.resetSocketOnError(t, e.type))
                }
                constructor(e, t, i) {
                    this.socket = e, this.action = null, this.shouldFlush = i, this.add = e => {
                        this.action = t(this.action, e)
                    }, s.batchers.push(this)
                }
            }
            s.batchers = []
        },
        265912: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var n = 16381
        },
        799600: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            });
            var n = i("917351"),
                s = i.n(n),
                a = i("605250"),
                r = i("197881");
            let {
                NativeModules: l
            } = {}, o = [];
            class d {
                static canUse() {
                    return !1
                }
                bindWebSocket(e) {}
                feed(e) {}
                dataReady(e) {
                    this._onDataReady = e
                }
                constructor(e) {
                    this._onDataReady = null, this._gatewayEncoding = e
                }
            }
            o.push(class extends d {
                static canUse() {
                    return void 0 !== window.Uint8Array
                }
                getAlgorithm() {
                    return "zlib-stream"
                }
                usesLegacyCompression() {
                    return !1
                }
                feed(e) {
                    let t = this._pako,
                        i = this._inflate;
                    if (null == i) throw Error("Trying to feed to closed compression adapter");
                    let n = this._onDataReady;
                    if (null === n) throw Error("Cannot feed unless a data ready callback is registered.");
                    if (e instanceof ArrayBuffer) {
                        let n = new DataView(e),
                            s = n.byteLength >= 4 && 65535 === n.getUint32(n.byteLength - 4, !1);
                        i.push(e, !!s && t.Z_SYNC_FLUSH)
                    } else throw Error("Expected array buffer, but got " + typeof e)
                }
                close() {
                    null != this._inflate && (this._inflate.onEnd = null, this._inflate.chunks = []), this._inflate = null
                }
                handleFlushEnd(e) {
                    let t;
                    let i = this._pako,
                        n = this._inflate;
                    if (null == n) {
                        new(0, a.default)("GatewayCompressionHandler").error("flush end happened on closed compression adapter");
                        return
                    }
                    if (e !== i.Z_OK) throw Error("zlib error, ".concat(e, ", ").concat(n.strm.msg));
                    let {
                        chunks: s
                    } = n, r = s.length;
                    if (this._gatewayEncoding.wantsString()) t = r > 1 ? s.join("") : s[0];
                    else if (r > 1) {
                        let e = 0;
                        for (let t = 0; t < r; t++) e += s[t].length;
                        let i = new Uint8Array(e),
                            n = 0;
                        for (let e = 0; e < r; e++) {
                            let t = s[e];
                            i.set(t, n), n += t.length
                        }
                        t = i
                    } else t = s[0];
                    s.length = 0, null != this._onDataReady && this._onDataReady(t)
                }
                constructor(e) {
                    super(e), this._pako = i("181905");
                    let t = this._pako,
                        n = this._inflate = new t.Inflate({
                            chunkSize: 65536,
                            to: this._gatewayEncoding.wantsString() ? "string" : ""
                        });
                    n.onEnd = this.handleFlushEnd.bind(this)
                }
            }), o.push(class extends d {
                static canUse() {
                    return !0
                }
                getAlgorithm() {
                    return null
                }
                usesLegacyCompression() {
                    return !0
                }
                feed(e) {
                    let t = this._pako;
                    if (e instanceof ArrayBuffer && this._gatewayEncoding.wantsString() && (e = t.inflate(e, {
                            to: "string"
                        })), null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
                    this._onDataReady(e)
                }
                close() {}
                constructor(...e) {
                    super(...e), this._pako = i("181905")
                }
            }), o.push(class extends d {
                static canUse() {
                    return !1
                }
                bindWebSocket(e) {
                    this.close(), this._socketId = e._socketId, l.DCDCompressionManager.enableZlibStreamSupport(this._socketId)
                }
                getAlgorithm() {
                    return "zlib-stream"
                }
                usesLegacyCompression() {
                    return !1
                }
                feed(e) {
                    if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
                    null !== e && this._onDataReady(e)
                }
                close() {
                    let e = this._socketId;
                    this._socketId = null, null !== e && l.DCDCompressionManager.disableZlibStreamSupport(e)
                }
                constructor(e) {
                    super(e), this._socketId = null
                }
            });
            class u extends d {
                static canUse() {
                    return !0
                }
                getAlgorithm() {
                    return null
                }
                usesLegacyCompression() {
                    return !1
                }
                feed(e) {
                    if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
                    this._onDataReady(e)
                }
                close() {}
            }
            o.push(u);
            let c = s.find(o, e => e.canUse());
            r.ProcessArgs.isDiscordGatewayPlaintextSet() && (c = u);
            var _ = c
        },
        619443: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return M
                }
            });
            var n = i("917351"),
                s = i.n(n),
                a = i("446674"),
                r = i("913144"),
                l = i("723939"),
                o = i("605250"),
                d = i("374014"),
                u = i("374363"),
                c = i("271938"),
                _ = i("950104"),
                h = i("42203"),
                E = i("260320"),
                p = i("42887"),
                m = i("590401"),
                f = i("18494"),
                S = i("101125"),
                T = i("336727"),
                g = i("447214"),
                I = i("518916"),
                A = i("571420"),
                C = i("399010"),
                y = i("49111"),
                N = i("397336");
            (0, I.setDispatchSocketMessageFunction)(C.default);
            let D = new o.default("ConnectionStore"),
                R = 0,
                v = null;

            function O() {
                I.localVoiceState.update()
            }

            function b() {
                return I.localVoiceState.update(), I.localLobbyVoiceStates.update(), !1
            }

            function L() {
                return I.localPresenceState.update(), !1
            }

            function P() {
                return I.localLobbyVoiceStates.update(), !1
            }

            function U(e) {
                I.socket.isSessionEstablished() && I.socket.streamDelete(e)
            }
            class k extends a.default.Store {
                initialize() {
                    this.waitFor(c.default, f.default, h.default, _.default, E.default, u.default), this.syncWith([p.default], b), this.syncWith([S.default], L)
                }
                getSocket() {
                    return I.socket
                }
                isTryingToConnect() {
                    return !I.socket.isClosed()
                }
                isConnected() {
                    return I.socket.isSessionEstablished()
                }
                isConnectedOrOverlay() {
                    return I.socket.isSessionEstablished() || __OVERLAY__
                }
                lastTimeConnectedChanged() {
                    return R
                }
            }
            k.displayName = "GatewayConnectionStore";
            var M = new k(r.default, {
                START_SESSION: function() {
                    return I.socket.isClosed() ? (D.verbose("Socket is reconnecting because of starting new session"), I.socket.connect()) : (D.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
                },
                LOGIN_SUCCESS: function() {
                    return D.verbose("session refresh dispatched", {
                        isEstablished: I.socket.isSessionEstablished()
                    }), !!I.socket.isSessionEstablished() && (I.socket.close(), I.socket.connect())
                },
                LOGOUT: function(e) {
                    e.isSwitchingAccount && I.localPresenceState.handleAccountSwitch(), D.verbose("Closing socket because of logout"), I.socket.close()
                },
                CLEAR_CACHES: function(e) {
                    return I.socket.close(), I.socket.clearDispatchQueue(), I.socket.connect(), !1
                },
                CONNECTION_OPEN: function(e) {
                    R = Date.now(), v = e.sessionId, I.localPresenceState.handleConnectionOpen();
                    let t = {},
                        i = f.default.getVoiceChannelId();
                    if (null != i) {
                        let e = h.default.getChannel(i);
                        null != e && (t = {
                            guildId: e.getGuildId(),
                            channelId: i
                        })
                    }
                    I.localVoiceState.update(t, !0), I.localLobbyVoiceStates.update({}, !0)
                },
                CONNECTION_CLOSED: function() {
                    D.verbose("connection closed dispatched"), R = Date.now()
                },
                RTC_CONNECTION_STATE: function(e) {
                    if (e.state !== y.RTCConnectionStates.DISCONNECTED) return !1;
                    e.willReconnect && (null != e.streamKey ? I.socket.streamPing(e.streamKey) : I.socket.voiceServerPing())
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    return I.localVoiceState.update({
                        guildId: e.guildId,
                        channelId: e.channelId
                    }), !1
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        if (c.default.getId() !== t.userId) return e;
                        if (t.sessionId === v) I.localVoiceState.setState({
                            guildId: t.guildId,
                            channelId: t.channelId
                        });
                        else {
                            if (t.guildId !== I.localVoiceState.guildId) return e;
                            I.localVoiceState.setState({
                                guildId: null,
                                channelId: null
                            })
                        }
                        return !0
                    }, !1)
                },
                GUILD_DELETE: function(e) {
                    e.guild.id === I.localVoiceState.guildId && I.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    t.id === I.localVoiceState.channelId && I.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                CALL_DELETE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    t === I.localVoiceState.channelId && I.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                APP_STATE_UPDATE: function(e) {
                    return e.state === y.AppStates.ACTIVE && (A.setIsPaused(!1), c.default.isAuthenticated() && I.socket.resetBackoff("App state is active")), !1
                },
                GUILD_MEMBERS_REQUEST: function(e) {
                    return I.socket.isSessionEstablished() && ("userIds" in e ? s(e.userIds).chunk(100).forEach(t => {
                        I.socket.requestGuildMembers(e.guildIds, {
                            userIds: t,
                            presences: !!e.presences
                        })
                    }) : I.socket.requestGuildMembers(e.guildIds, {
                        query: e.query,
                        limit: e.limit,
                        presences: !!e.presences
                    })), !1
                },
                GUILD_SEARCH_RECENT_MEMBERS: function(e) {
                    let {
                        guildId: t,
                        query: i,
                        continuationToken: n
                    } = e;
                    I.socket.isSessionEstablished() && I.socket.searchRecentMembers(t, {
                        query: i,
                        continuationToken: n
                    })
                },
                GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
                    let {
                        guildId: t,
                        subscriptions: i
                    } = e;
                    return I.socket.isSessionEstablished() && I.socket.updateGuildSubscriptions(t, i), !1
                },
                CALL_CONNECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return I.socket.isSessionEstablished() && I.socket.callConnect(t), !1
                },
                CALL_CONNECT_MULTIPLE: function(e) {
                    let {
                        channelIds: t
                    } = e;
                    return I.socket.isSessionEstablished() && t.forEach(e => {
                        I.socket.callConnect(e)
                    }), !1
                },
                LOBBY_CONNECT: function(e) {
                    let {
                        lobbyId: t,
                        lobbySecret: i
                    } = e;
                    return I.socket.isSessionEstablished() && I.socket.lobbyConnect(t, i), !1
                },
                LOBBY_DISCONNECT: function(e) {
                    let {
                        lobbyId: t
                    } = e;
                    return I.socket.isSessionEstablished() && I.socket.lobbyDisconnect(t), I.localLobbyVoiceStates.update(), !1
                },
                LOBBY_VOICE_CONNECT: P,
                LOBBY_VOICE_DISCONNECT: P,
                RPC_APP_DISCONNECTED: P,
                STREAM_CREATE: O,
                STREAM_START: function(e) {
                    let {
                        streamType: t,
                        guildId: i,
                        channelId: n
                    } = e;
                    if (I.socket.isSessionEstablished()) {
                        var s, a;
                        let e = null != i ? null === (s = h.default.getChannel(n)) || void 0 === s ? void 0 : s.rtcRegion : null === (a = _.default.getCall(n)) || void 0 === a ? void 0 : a.region;
                        I.socket.streamCreate(t, i, n, null != e ? e : m.default.getPreferredRegion())
                    }
                    return !1
                },
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t,
                        allowMultiple: i
                    } = e;
                    return I.socket.isSessionEstablished() && (i || ! function() {
                        let e = function() {
                            return T.default.getAllActiveStreamKeys().find(e => (0, d.decodeStreamKey)(e).ownerId === c.default.getId())
                        }();
                        T.default.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => U(e))
                    }(), I.socket.streamWatch(t)), !1
                },
                STREAM_STOP: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    return U(t), O(), !1
                },
                STREAM_SET_PAUSED: function(e) {
                    let {
                        streamKey: t,
                        paused: i
                    } = e;
                    I.socket.isSessionEstablished() && I.socket.streamSetPaused(t, i)
                },
                PUSH_NOTIFICATION_CLICK: function() {
                    return I.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
                },
                EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
                    var t, i;
                    let {
                        channelId: n,
                        applicationId: s
                    } = e, a = null !== (i = null === (t = h.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== i ? i : null;
                    I.socket.embeddedActivityClose(a, n, s)
                },
                REQUEST_FORUM_UNREADS: function(e) {
                    let {
                        guildId: t,
                        channelId: i,
                        threads: n
                    } = e;
                    I.socket.requestForumUnreads(t, i, n)
                },
                REQUEST_SOUNDBOARD_SOUNDS: function(e) {
                    let {
                        guildIds: t
                    } = e;
                    I.socket.requestSoundboardSounds(t)
                },
                REMOTE_COMMAND: function(e) {
                    let {
                        sessionId: t,
                        payload: i
                    } = e;
                    return I.socket.isSessionEstablished() && I.socket.remoteCommand(t, i), !1
                },
                RESET_CONNECTION: function(e) {
                    I.socket.connectionState !== g.ConnectionState.WILL_RECONNECT && (e.badCache ? (l.default.replaceDisableAllDatabases("RESET_CONNECTION"), I.socket.resetSocketOnError(Error("Guild data was missing from store (via RESET_CONNECTION)"), "RESET_CONNECTION_DATA_MISSING")) : I.socket.resetSocketOnError(Error("Connection reset requested (via RESET_CONNECTION)"), "RESET_CONNECTION"))
                },
                RTC_SPEED_TEST_START_TEST: function() {
                    return I.socket.isSessionEstablished() && I.socket.speedTestCreate(m.default.getPreferredRegion()), !1
                },
                RTC_SPEED_TEST_STOP_TEST: function() {
                    return I.socket.isSessionEstablished() && I.socket.speedTestDelete(), !1
                },
                CLIPS_SETTINGS_UPDATE: O,
                RUNNING_GAMES_CHANGE: O,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t;
                    e.settings.type === N.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && O()
                }
            })
        },
        705215: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("197881"),
                s = i("338580");
            let a = (0, s.getErlpackEncoding)();
            class r {
                pack(e) {
                    return JSON.stringify(e)
                }
                unpack(e) {
                    if ("string" != typeof e) throw Error("Expected a string to be passed to JSONEncoding.unpack, got ".concat(null == e ? null : typeof e));
                    return JSON.parse(e)
                }
                getName() {
                    return "json"
                }
                wantsString() {
                    return !0
                }
            }
            let l = void 0 !== a ? a : r;
            n.ProcessArgs.isDiscordGatewayPlaintextSet() && (l = r);
            var o = l
        },
        338580: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getErlpackEncoding: function() {
                    return r
                }
            });
            var n = i("605250"),
                s = i("773336"),
                a = i("50885");

            function r() {
                if (s.isPlatformEmbedded) {
                    let e;
                    try {
                        e = a.default.requireModule("discord_erlpack")
                    } catch (t) {
                        try {
                            e = a.default.requireModule("erlpack")
                        } catch (e) {}
                    }
                    if (null != e) return class {
                        static canUse() {
                            return null != e
                        }
                        pack(t) {
                            return e.pack(t).buffer
                        }
                        unpack(t) {
                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                            try {
                                return e.unpack(t)
                            } catch (e) {
                                throw new(0, n.default)("GatewayEncodingErlpackEncoding").error("Error unpacking", {
                                    erlpackUnpackError: e,
                                    erlpackDataPreview: null != t ? Array.from(t.slice(0, 32)) : null,
                                    erlpackDataLength: null != t ? t.length : null
                                }), e
                            }
                        }
                        getName() {
                            return "etf"
                        }
                        wantsString() {
                            return !1
                        }
                    }
                }
            }
        },
        447214: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ConnectionState: function() {
                    return s
                },
                default: function() {
                    return G
                }
            });
            var n, s, a = i("627445"),
                r = i.n(a),
                l = i("181905"),
                o = i("981980"),
                d = i("102053"),
                u = i("432710"),
                c = i("446674"),
                _ = i("872717"),
                h = i("913144"),
                E = i("288206"),
                p = i("605250"),
                m = i("155084"),
                f = i("410912"),
                S = i("313915"),
                T = i("599110"),
                g = i("922932"),
                I = i("773336"),
                A = i("286235"),
                C = i("265912"),
                y = i("799600"),
                N = i("705215"),
                D = i("342797"),
                R = i("340115"),
                v = i("289362"),
                O = i("571420"),
                b = i("797785"),
                L = i("49111");
            let P = new p.default("GatewaySocket"),
                U = new N.default;

            function k() {}(n = s || (s = {})).CLOSED = "CLOSED", n.WILL_RECONNECT = "WILL_RECONNECT", n.CONNECTING = "CONNECTING", n.IDENTIFYING = "IDENTIFYING", n.RESUMING = "RESUMING", n.SESSION_ESTABLISHED = "SESSION_ESTABLISHED";

            function M(e) {
                return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
            }
            let w = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
            class G extends R.default {
                get connectionState() {
                    return this.connectionState_
                }
                set connectionState(e) {
                    P.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
                }
                hasQueuedDispatches() {
                    return this.queuedDispatches.length > 0
                }
                processFirstQueuedDispatch(e) {
                    if (!this.hasQueuedDispatches()) return !1;
                    for (; this.queuedDispatches.length > 0 && e.has(this.queuedDispatches[0].type);) {
                        let {
                            data: e,
                            type: t,
                            compressionAnalytics: i
                        } = this.queuedDispatches.shift();
                        this._handleDispatchWithoutQueueing(e, t, i)
                    }
                    return !0
                }
                processDispatchQueue() {
                    if (this.isDeferringDispatches = !1, this.hasQueuedDispatches()) {
                        for (let {
                                data: e,
                                type: t,
                                compressionAnalytics: i
                            }
                            of this.queuedDispatches) this._handleDispatchWithoutQueueing(e, t, i);
                        this.queuedDispatches.length = 0
                    }
                }
                clearDispatchQueue() {
                    this.isDeferringDispatches = !1, this.queuedDispatches.length = 0
                }
                addAnalytics(e) {
                    this.analytics = {
                        ...this.analytics,
                        ...e
                    }
                }
                setResumeUrl(e) {
                    null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && P.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
                }
                _connect() {
                    var e, t;
                    let i;
                    if (!this.willReconnect()) {
                        P.verbose("Skipping _connect because willReconnect is false");
                        return
                    }
                    if (O.getIsPaused()) {
                        P.info("Skipping _connect because socket is paused");
                        return
                    }
                    this.connectionState = s.CONNECTING, this.nextReconnectIsImmediate = !1;
                    let n = this.compressionHandler.getAlgorithm(),
                        a = U.getName(),
                        r = this._getGatewayUrl(),
                        l = window.GLOBAL_ENV.API_VERSION;
                    d.default.mark("\uD83C\uDF10", "Socket._connect"), P.info("[CONNECT] ".concat(r, ", ") + "encoding: ".concat(a, ", ") + "version: ".concat(l, ", ") + "compression: ".concat(null != n ? n : "none")), null !== this.webSocket && (P.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
                        let e = Date.now() - this.connectionStartTime;
                        this._handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
                    }, 3e4);
                    let o = new URL(r);
                    o.searchParams.append("encoding", a), o.searchParams.append("v", l.toString()), null != n && o.searchParams.append("compress", n);
                    ! function(e) {
                        let t, {
                                gatewayURL: i,
                                newCallback: n,
                                onOpen: s,
                                onMessage: a,
                                onError: r,
                                onClose: l
                            } = e,
                            o = window._ws,
                            d = !1,
                            u = !1,
                            c = null,
                            _ = null;
                        if (window._ws = null, null != o) {
                            if (t = o.ws, o.state.gateway !== i) P.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(o.state.gateway, " !== ").concat(i)), t.close(1e3), t = null;
                            else {
                                var h;
                                let e = {
                                    ...o.state
                                };
                                null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? {
                                    ...e,
                                    data: e.data.substring(0, 100)
                                } : e)), P.log("[FAST CONNECT] successfully took over websocket, state:", {
                                    ...e,
                                    messages: null === (h = e.messages) || void 0 === h ? void 0 : h.length
                                }), d = o.state.open, u = o.state.identify, c = o.state.messages, _ = o.state.clientState
                            }
                        }
                        null == t && ((t = (0, b.default)(i)).binaryType = "arraybuffer"), n(t), d && s(u, _), null != c && c.forEach(a), t.onopen = () => s(u, _), t.onmessage = a, t.onclose = l, t.onerror = r
                    }({
                        gatewayURL: o.toString(),
                        newCallback: e => {
                            this.webSocket = e, this.compressionHandler.bindWebSocket(e)
                        },
                        onOpen: (e, t) => {
                            d.default.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
                            let i = Date.now() - this.connectionStartTime;
                            P.info("[CONNECTED] ".concat(o.toString(), " in ").concat(i, " ms")), this.isFastConnect = e, this.lastIdentifyClientState = t, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
                        },
                        onMessage: (e = this.compressionHandler, t = (e, t) => {
                            let i = Date.now(),
                                {
                                    op: n,
                                    s: s,
                                    t: a,
                                    d: r
                                } = U.unpack(e);
                            n !== R.Opcode.DISPATCH && d.default.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(n, " ").concat(R.Opcode[n]));
                            let l = Date.now() - i;
                            switch ("READY" === a ? f.default.parseReady.set(i, l) : "READY_SUPPLEMENTAL" === a ? f.default.parseReadySupplemental.set(i, l) : l > 10 && d.default.mark("\uD83C\uDF10", "Parse " + a, l), null != s && (this.seq = s), n) {
                                case R.Opcode.HELLO:
                                    this._clearHelloTimeout(), this._handleHello(r);
                                    break;
                                case R.Opcode.RECONNECT:
                                    this._handleReconnect();
                                    break;
                                case R.Opcode.INVALID_SESSION:
                                    this._handleInvalidSession(r);
                                    break;
                                case R.Opcode.HEARTBEAT:
                                    this._sendHeartbeat();
                                    break;
                                case R.Opcode.HEARTBEAT_ACK:
                                    this._handleHeartbeatAck(r);
                                    break;
                                case R.Opcode.DISPATCH:
                                    this._handleDispatch(r, a, "READY" === a ? {
                                        compressed_byte_size: t,
                                        uncompressed_byte_size: M(e),
                                        compression_algorithm: this.compressionHandler.getAlgorithm(),
                                        packing_algorithm: U.getName(),
                                        unpack_duration_ms: l
                                    } : null);
                                    break;
                                default:
                                    P.info("Unhandled op ".concat(n))
                            }
                        }, i = 0, e.dataReady(e => {
                            try {
                                return t(e, i)
                            } finally {
                                i = 0
                            }
                        }), t => {
                            let n = t.data;
                            i += M(n), e.feed(n)
                        }),
                        onError: () => {
                            this.setResumeUrl(null), g.default.flushDNSCache(), this._handleClose(!1, 0, "An error with the websocket occurred")
                        },
                        onClose: e => {
                            let {
                                wasClean: t,
                                code: i,
                                reason: n
                            } = e;
                            return this._handleClose(t, i, n)
                        }
                    })
                }
                _handleHello(e) {
                    let t = this.heartbeatInterval = e.heartbeat_interval,
                        i = Date.now() - this.connectionStartTime;
                    P.verbose("[HELLO] via ".concat((0, D.getConnectionPath)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(i, " ms")), this._startHeartbeater()
                }
                _handleReconnect() {
                    P.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = s.WILL_RECONNECT, this._connect()
                }
                _handleInvalidSession(e) {
                    P.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
                }
                _handleDispatch(e, t, i) {
                    let n = performance.now();
                    if (this.connectionState === s.RESUMING) {
                        let e = n - this.resumeAnalytics.lastUpdateTime;
                        0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = n, this.resumeAnalytics.numEvents += 1, c.default.Emitter.pause(150)
                    }
                    this.isDeferringDispatches ? this.queuedDispatches.push({
                        data: e,
                        type: t,
                        compressionAnalytics: i
                    }) : this._handleDispatchWithoutQueueing(e, t, i), this.connectionState === s.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - n)
                }
                _handleDispatchWithoutQueueing(e, t, i) {
                    if ("READY" === t) return this._handleReady(e, i);
                    if ("READY_SUPPLEMENTAL" === t) {
                        c.default.Emitter.resume();
                        let e = Date.now() - this.connectionStartTime;
                        P.info("[READY_SUPPLEMENTAL] took ".concat(e, "ms")), this.connectionState = s.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0
                    } else if ("RESUMED" === t) {
                        c.default.Emitter.resume();
                        let t = Date.now() - this.connectionStartTime;
                        P.info("[RESUMED] took ".concat(t, "ms, replayed ").concat(this.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq)), P.verbose((0, D.getConnectionPath)(e)), (0, D.logResumeAnalytics)(this.resumeAnalytics), this.resumeAnalytics = (0, D.createResumeAnalytics)(), this.connectionState = s.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0
                    }
                    return this._handleGenericDispatch(e, t)
                }
                _getGatewayUrl() {
                    return null != this.resumeUrl ? this.resumeUrl : w
                }
                _handleReady(e, t) {
                    let i = Date.now();
                    c.default.Emitter.resume();
                    let n = Date.now() - this.connectionStartTime,
                        a = e.session_id;
                    this.sessionId = a;
                    let r = (0, D.getConnectionPath)(e);
                    d.default.setServerTrace(r), P.info("[READY] took ".concat(n, "ms, as ").concat(a)), P.verbose("".concat(r)), this.connectionState = s.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0;
                    let l = (0, D.getReadyPayloadByteSizeAnalytics)(e);
                    this._handleGenericDispatch(e, "READY"), (0, D.logReadyPayloadReceived)(this, e, i, t, l), this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0, this.setResumeUrl(e.resume_gateway_url)
                }
                _handleGenericDispatch(e, t) {
                    S.default.isLoggingGatewayEvents && P.verbose("<~", t, e);
                    try {
                        this.emit("dispatch", t, e)
                    } catch (e) {
                        this.resetSocketOnError(e, t)
                    }
                }
                _handleHeartbeatAck(e) {
                    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, P.verbose("Expedited heartbeat succeeded"))
                }
                _handleHeartbeatTimeout() {
                    this._cleanup(e => e.close(4e3)), this.connectionState = s.WILL_RECONNECT;
                    let e = this.gatewayBackoff.fail(() => this._connect());
                    P.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
                }
                _handleClose(e, t, i) {
                    if (e = e || !1, this._cleanup(), this.emit("close", {
                            code: t,
                            reason: i
                        }), 4004 === t) return this.connectionState = s.CLOSED, P.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, i);
                    if (this._tryDetectInvalidIOSToken(t, i, e), this.connectionState = s.WILL_RECONNECT, this.nextReconnectIsImmediate) P.warn("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(i, ") retrying immediately.")), this._connect();
                    else {
                        let n = this.gatewayBackoff.fail(() => this._connect());
                        P.warn("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(i, ") retrying in ").concat((n / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, i)
                    }
                }
                _tryDetectInvalidIOSToken(e, t, i) {
                    (0, I.isIOS)() && null != this.token && 1001 === e && "Stream end encountered" === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && _.default.get({
                        url: L.Endpoints.ME,
                        headers: {
                            authorization: this.token
                        }
                    }).then(e => {
                        let {
                            status: t
                        } = e;
                        T.default.track(L.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                            api_status_code: t
                        })
                    }, e => {
                        let {
                            status: t
                        } = e;
                        401 === t && (this.connectionState = s.CLOSED, P.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(i, 4004, "invalid token manually detected")), T.default.track(L.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                            api_status_code: t
                        })
                    }))
                }
                _reset(e, t, i) {
                    this.sessionId = null, this.seq = 0, P.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(i, ")")), this.emit("disconnect", {
                        wasClean: e,
                        code: t,
                        reason: i
                    })
                }
                _startHeartbeater() {
                    let {
                        heartbeatInterval: e
                    } = this;
                    r(null != e, "GatewaySocket: Heartbeat interval should never null here."), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null);
                    let t = () => {
                        this.heartbeatAck ? (this.heartbeatAck = !1, this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout()
                    };
                    this.initialHeartbeatTimeout = setTimeout(() => {
                        this.initialHeartbeatTimeout = null, this.heartbeatAck = !0, this.heartbeater = setInterval(t, e), t()
                    }, Math.floor(Math.random() * e))
                }
                _stopHeartbeater() {
                    null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), this.initialHeartbeatTimeout = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null)
                }
                _clearHelloTimeout() {
                    null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null)
                }
                _cleanup(e) {
                    c.default.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
                    let t = this.webSocket;
                    if (this.webSocket = null, null != t) t.onopen = k, t.onmessage = k, t.onerror = k, t.onclose = k, null == e || e(t);
                    this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = new y.default(U)
                }
                _doResume() {
                    var e;
                    this.connectionState = s.RESUMING, this.resumeAnalytics = (0, D.createResumeAnalytics)(Date.now() - this.connectionStartTime), P.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(R.Opcode.RESUME, {
                        token: this.token,
                        session_id: this.sessionId,
                        seq: this.seq
                    }, !1)
                }
                _doIdentify() {
                    this.seq = 0, this.sessionId = null;
                    let e = this.handleIdentify();
                    if (null === e) {
                        this._handleClose(!0, 4004, "No connection info provided");
                        return
                    }
                    this.connectionState = s.IDENTIFYING, this.identifyStartTime = Date.now();
                    let {
                        token: t,
                        properties: i = {},
                        presence: n
                    } = e;
                    this.token = t, P.verbose("[IDENTIFY]");
                    let a = {
                            token: t,
                            capabilities: C.default,
                            properties: i,
                            presence: n,
                            compress: this.compressionHandler.usesLegacyCompression(),
                            client_state: (0, v.toGatewayClientState)(E.default.getClientState())
                        },
                        r = JSON.stringify(a);
                    this.identifyUncompressedByteSize = r.length, this.identifyCompressedByteSize = l.deflate(r).length, this.lastIdentifyClientState = a.client_state, this.identifyCount += 1, this.send(R.Opcode.IDENTIFY, a, !1)
                }
                _doFastConnectIdentify() {
                    this.seq = 0, this.sessionId = null;
                    let e = this.handleIdentify();
                    if (null === e) {
                        this._handleClose(!0, 4004, "No connection info provided");
                        return
                    }
                    let {
                        token: t
                    } = e;
                    this.token = t, this.connectionState = s.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, P.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
                }
                _doResumeOrIdentify() {
                    let e = Date.now(),
                        t = null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= 18e4);
                    t ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime()
                }
                _updateLastHeartbeatAckTime() {
                    this.lastHeartbeatAckTime = Date.now()
                }
                _sendHeartbeat() {
                    this.send(R.Opcode.HEARTBEAT, this.seq, !1)
                }
                getLogger() {
                    return P
                }
                willReconnect() {
                    return this.connectionState === s.WILL_RECONNECT
                }
                isClosed() {
                    return this.connectionState === s.CLOSED
                }
                isSessionEstablished() {
                    return this.connectionState === s.SESSION_ESTABLISHED || this.connectionState === s.RESUMING
                }
                isConnected() {
                    return this.connectionState === s.IDENTIFYING || this.connectionState === s.RESUMING || this.connectionState === s.SESSION_ESTABLISHED
                }
                connect() {
                    return this.isClosed() ? (P.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = s.WILL_RECONNECT, this._connect(), !0) : (P.error("Cannot start a new connection, connection state is not closed"), !1)
                }
                getIdentifyInitialGuildId() {
                    var e;
                    return null === (e = this.lastIdentifyClientState) || void 0 === e ? void 0 : e.initial_guild_id
                }
                resetSocketOnError(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        sentry: !0,
                        immediate: !1
                    };
                    P.error("resetSocketOnError", e.stack);
                    let n = null != e.message && e.message.indexOf("Guild data was missing from store") >= 0;
                    m.default.increment({
                        name: u.MetricEvents.SOCKET_CRASHED,
                        tags: ["action:".concat(t)]
                    }, !0), i.sentry = i.sentry && !n, i.immediate = i.immediate || n, i.sentry && A.default.captureException(e, {
                        tags: {
                            socketCrashedAction: t
                        }
                    }), this._cleanup(e => e.close()), this._reset(!0, 1e3, "Resetting socket due to error."), this.clearDispatchQueue(), this.connectionState = s.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel(), 0 === this.dispatchExceptionBackoff._fails && i.immediate ? (P.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), this.didForceClearGuildHashes = !0, h.default.dispatch({
                        type: "CLEAR_GUILD_CACHE"
                    }), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 12e4)
                }
                close() {
                    if (this.isClosed()) {
                        P.verbose("close() called, but socket is already closed.");
                        return
                    }
                    P.info("Closing connection, current state is ".concat(this.connectionState)), this._cleanup(e => e.close()), this.connectionState = s.CLOSED, setImmediate(() => {
                        this._reset(!0, 1e3, "Disconnect requested by user")
                    })
                }
                networkStateChange(e, t) {
                    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    this.expeditedHeartbeat(e, t, i, !1)
                }
                expeditedHeartbeat(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    if (!this.isClosed()) {
                        if (this.isConnected()) {
                            P.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
                                this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this._handleHeartbeatTimeout()
                            }, e);
                            return
                        }
                        i ? this.resetBackoff(t, n) : P.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
                    }
                }
                resetBackoff() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    P.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && this.connectionState !== s.SESSION_ESTABLISHED && this._handleClose(!0, 0, e)
                }
                constructor() {
                    super(), this.dispatchExceptionBackoff = new o.default(1e3, 6e4), this.dispatchSuccessTimer = 0, this.resumeAnalytics = (0, D.createResumeAnalytics)(), this.didForceClearGuildHashes = !1, this.identifyUncompressedByteSize = 0, this.identifyCompressedByteSize = 0, this.isDeferringDispatches = !0, this.queuedDispatches = [], this.analytics = {}, this.identifyCount = 0, this.resumeUrl = null, this.lastIdentifyClientState = null, this.iosGoingAwayEventCount = 0, this.send = (e, t, i) => {
                        S.default.isLoggingGatewayEvents && P.verbose("~>", e, t);
                        let n = U.pack({
                            op: e,
                            d: t
                        });
                        if (!i || this.isSessionEstablished()) try {
                            null != this.webSocket ? this.webSocket.send(n) : P.warn("Attempted to send without a websocket that exists. Opcode: ".concat(e))
                        } catch (e) {} else P.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
                    }, this.gatewayBackoff = new o.default(1e3, 6e4), this.connectionState_ = s.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = new y.default(U), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
                }
            }
        },
        342797: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                logReadyPayloadReceived: function() {
                    return o
                },
                getConnectionPath: function() {
                    return d
                },
                getReadyPayloadByteSizeAnalytics: function() {
                    return u
                },
                createResumeAnalytics: function() {
                    return c
                },
                logResumeAnalytics: function() {
                    return _
                }
            });
            var n = i("102053");
            i("704744");
            var s = i("410912"),
                a = i("697218"),
                r = i("599110"),
                l = i("49111");

            function o(e, t, i, a, o) {
                var d, u, c;
                let _ = function(e) {
                    let {
                        _trace: t
                    } = e, i = {};
                    try {
                        let e = JSON.parse(t);
                        null != e[0] && "" !== e[0] && e[0].startsWith("gateway-") && (i.identify_total_server_duration_ms = Math.floor(e[1].micros / 1e3)),
                            function e(t, i) {
                                if (null != t && t.length > 0)
                                    for (let n = 0; n < t.length; n += 2) {
                                        let s = t[n],
                                            a = t[n + 1];
                                        i(s, a.micros), e(a.calls, i)
                                    }
                            }(e, (e, t) => {
                                "start_session" === e ? i.identify_api_duration_ms = Math.floor(t / 1e3) : "guilds_connect" === e && (i.identify_guilds_duration_ms = Math.floor(t / 1e3))
                            })
                    } catch (e) {}
                    return i
                }(t);
                n.default.addDetail("payload_size(kb)", Math.round(a.uncompressed_byte_size / 1024)), n.default.addDetail("server_time(ms)", null !== (d = _.identify_total_server_duration_ms) && void 0 !== d ? d : 0);
                let h = {
                    ...a,
                    ..._,
                    ... function(e) {
                        let {
                            guilds: t
                        } = e, i = 0, n = 0;
                        return t.forEach(e => {
                            if (e.unavailable) return;
                            let t = "partial" === e.data_mode ? e.partial_updates.channels : e.channels;
                            null != t && null != t.forEach && t.forEach(e => {
                                n++, e.type === l.ChannelTypes.GUILD_CATEGORY && i++
                            })
                        }), {
                            num_guilds: t.length,
                            num_guild_channels: n,
                            num_guild_category_channels: i
                        }
                    }(t),
                    ...o,
                    duration_ms_since_identify_start: i - e.identifyStartTime,
                    duration_ms_since_connection_start: i - e.connectionStartTime,
                    duration_ms_since_emit_start: Date.now() - i,
                    is_reconnect: e.hasConnectedOnce,
                    is_fast_connect: e.isFastConnect,
                    did_force_clear_guild_hashes: e.didForceClearGuildHashes,
                    identify_uncompressed_byte_size: e.identifyUncompressedByteSize,
                    identify_compressed_byte_size: e.identifyCompressedByteSize,
                    had_cache_at_startup: null !== (u = e.analytics.hadCacheAtStartup) && void 0 !== u && u,
                    used_cache_at_startup: null !== (c = e.analytics.usedCacheAtStartup) && void 0 !== c && c
                };
                s.default.attachReadyPayloadProperties(h), r.default.track(l.AnalyticEvents.READY_PAYLOAD_RECEIVED, h, {
                    logEventProperties: !0
                })
            }

            function d(e) {
                try {
                    var t;
                    let i = function(e) {
                        if (null == e) return null;
                        let t = JSON.parse(e);
                        return function e(t, i) {
                            if (null == t) return "";
                            let n = "";
                            for (let s = 0; s < t.length; s += 2) n += "\n".concat(i).concat(t[s], ": ").concat(t[s + 1].micros / 1e3) + e(t[s + 1].calls, i + "|  ");
                            return n
                        }(t, "")
                    }(null === (t = e._trace) || void 0 === t ? void 0 : t[0]);
                    if (null != i) return i
                } catch (e) {}
                return null != e._trace ? e._trace.join(" -> ") : "???"
            }

            function u(e) {
                var t, i;
                let n = Date.now(),
                    {
                        guilds: s,
                        merged_presences: a,
                        merged_members: r,
                        read_state: l,
                        private_channels: o,
                        user_guild_settings: d,
                        user_settings: u,
                        user_settings_proto: c,
                        experiments: _,
                        guild_experiments: h,
                        relationships: E,
                        users: p,
                        ...m
                    } = e,
                    f = [],
                    S = [],
                    T = [],
                    g = [],
                    I = [],
                    A = [],
                    C = [],
                    y = [];
                return s.forEach(e => {
                    var t;
                    if (e.unavailable) return;
                    let {
                        features: i,
                        ...n
                    } = null !== (t = e.properties) && void 0 !== t ? t : {}, {
                        threads: s,
                        guild_scheduled_events: a,
                        ...r
                    } = e;
                    f.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels), S.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles), T.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis), g.push(s), I.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers), A.push(i), C.push(a), y.push(r, n)
                }), {
                    presences_size: JSON.stringify(null !== (t = null == a ? void 0 : a.friends) && void 0 !== t ? t : []).length,
                    users_size: JSON.stringify(p).length,
                    read_states_size: JSON.stringify(l).length,
                    private_channels_size: JSON.stringify(o).length,
                    user_settings_size: JSON.stringify(null != u ? u : "").length + (null != c ? c : "").length,
                    experiments_size: JSON.stringify(null != _ ? _ : []).length + JSON.stringify(null != h ? h : []).length,
                    user_guild_settings_size: JSON.stringify(d).length,
                    relationships_size: JSON.stringify(E).length,
                    remaining_data_size: JSON.stringify(null != m ? m : {}).length,
                    guild_channels_size: JSON.stringify(f).length,
                    guild_members_size: JSON.stringify(null != r ? r : []).length,
                    guild_presences_size: JSON.stringify(null !== (i = null == a ? void 0 : a.guilds) && void 0 !== i ? i : []).length,
                    guild_roles_size: JSON.stringify(S).length,
                    guild_emojis_size: JSON.stringify(T).length,
                    guild_threads_size: JSON.stringify(g).length,
                    guild_stickers_size: JSON.stringify(I).length,
                    guild_events_size: JSON.stringify(C).length,
                    guild_features_size: JSON.stringify(A).length,
                    guild_remaining_data_size: JSON.stringify(y).length,
                    size_metrics_duration_ms: Date.now() - n
                }
            }

            function c(e) {
                return {
                    connectTime: null != e ? e : 0,
                    numEvents: 0,
                    largestWaitTime: 0,
                    dispatchTime: 0,
                    totalWaitTime: 0,
                    initialWaitTime: 0,
                    startTime: performance.now(),
                    lastUpdateTime: performance.now()
                }
            }

            function _(e) {
                var t;
                !(!(null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && .5 > Math.random()) && r.default.track(l.AnalyticEvents.CONNECTION_RESUMED, {
                    connect_time_ms: e.connectTime,
                    resume_time_ms: Math.floor(performance.now() - e.startTime),
                    num_events: e.numEvents,
                    largest_wait_time_ms: Math.floor(e.largestWaitTime),
                    initial_wait_time_ms: Math.floor(e.initialWaitTime),
                    total_wait_time_ms: Math.floor(e.totalWaitTime),
                    total_dispatch_time_ms: Math.floor(e.dispatchTime)
                }, {
                    logEventProperties: !0
                })
            }
        },
        340115: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                Opcode: function() {
                    return s
                },
                default: function() {
                    return l
                }
            });
            var n, s, a = i("44170"),
                r = i("590401");
            (n = s || (s = {}))[n.DISPATCH = 0] = "DISPATCH", n[n.HEARTBEAT = 1] = "HEARTBEAT", n[n.IDENTIFY = 2] = "IDENTIFY", n[n.PRESENCE_UPDATE = 3] = "PRESENCE_UPDATE", n[n.VOICE_STATE_UPDATE = 4] = "VOICE_STATE_UPDATE", n[n.VOICE_SERVER_PING = 5] = "VOICE_SERVER_PING", n[n.RESUME = 6] = "RESUME", n[n.RECONNECT = 7] = "RECONNECT", n[n.REQUEST_GUILD_MEMBERS = 8] = "REQUEST_GUILD_MEMBERS", n[n.INVALID_SESSION = 9] = "INVALID_SESSION", n[n.HELLO = 10] = "HELLO", n[n.HEARTBEAT_ACK = 11] = "HEARTBEAT_ACK", n[n.CALL_CONNECT = 13] = "CALL_CONNECT", n[n.GUILD_SUBSCRIPTIONS = 14] = "GUILD_SUBSCRIPTIONS", n[n.LOBBY_CONNECT = 15] = "LOBBY_CONNECT", n[n.LOBBY_DISCONNECT = 16] = "LOBBY_DISCONNECT", n[n.LOBBY_VOICE_STATES_UPDATE = 17] = "LOBBY_VOICE_STATES_UPDATE", n[n.STREAM_CREATE = 18] = "STREAM_CREATE", n[n.STREAM_DELETE = 19] = "STREAM_DELETE", n[n.STREAM_WATCH = 20] = "STREAM_WATCH", n[n.STREAM_PING = 21] = "STREAM_PING", n[n.STREAM_SET_PAUSED = 22] = "STREAM_SET_PAUSED", n[n.REQUEST_GUILD_APPLICATION_COMMANDS = 24] = "REQUEST_GUILD_APPLICATION_COMMANDS", n[n.EMBEDDED_ACTIVITY_LAUNCH = 25] = "EMBEDDED_ACTIVITY_LAUNCH", n[n.EMBEDDED_ACTIVITY_CLOSE = 26] = "EMBEDDED_ACTIVITY_CLOSE", n[n.EMBEDDED_ACTIVITY_UPDATE = 27] = "EMBEDDED_ACTIVITY_UPDATE", n[n.REQUEST_FORUM_UNREADS = 28] = "REQUEST_FORUM_UNREADS", n[n.REMOTE_COMMAND = 29] = "REMOTE_COMMAND", n[n.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30] = "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH", n[n.REQUEST_SOUNDBOARD_SOUNDS = 31] = "REQUEST_SOUNDBOARD_SOUNDS", n[n.SPEED_TEST_CREATE = 32] = "SPEED_TEST_CREATE", n[n.SPEED_TEST_DELETE = 33] = "SPEED_TEST_DELETE", n[n.REQUEST_LAST_MESSAGES = 34] = "REQUEST_LAST_MESSAGES", n[n.SEARCH_RECENT_MEMBERS = 35] = "SEARCH_RECENT_MEMBERS";
            class l extends a.EventEmitter {
                presenceUpdate(e, t, i, n, a) {
                    this.send(s.PRESENCE_UPDATE, {
                        status: e,
                        since: t,
                        activities: i,
                        afk: n,
                        broadcast: a
                    })
                }
                voiceStateUpdate(e) {
                    let {
                        guildId: t = null,
                        channelId: i = null,
                        selfMute: n = !1,
                        selfDeaf: a = !1,
                        selfVideo: l = !1,
                        preferredRegion: o = null,
                        videoStreamParameters: d = null,
                        flags: u = 0
                    } = e, c = {
                        guild_id: t,
                        channel_id: i,
                        self_mute: n,
                        self_deaf: a,
                        self_video: l,
                        flags: u
                    };
                    if (null != i && r.default.shouldIncludePreferredRegion() && (c.preferred_region = o), null != d) c.tracks = null == d ? void 0 : d.map(e => ({
                        type: e.type,
                        rid: e.rid,
                        quality: e.quality
                    }));
                    this.send(s.VOICE_STATE_UPDATE, c)
                }
                voiceServerPing() {
                    this.send(s.VOICE_SERVER_PING, null)
                }
                embeddedActivityClose(e, t, i) {
                    this.send(s.EMBEDDED_ACTIVITY_CLOSE, {
                        guild_id: null != e ? e : "0",
                        channel_id: t,
                        application_id: i
                    })
                }
                requestGuildMembers(e, t) {
                    let {
                        query: i,
                        limit: n,
                        userIds: a,
                        presences: r
                    } = t;
                    this.send(s.REQUEST_GUILD_MEMBERS, {
                        guild_id: e,
                        query: i,
                        limit: n,
                        user_ids: a,
                        presences: r
                    })
                }
                searchRecentMembers(e, t) {
                    let {
                        query: i,
                        continuationToken: n
                    } = t;
                    this.send(s.SEARCH_RECENT_MEMBERS, {
                        guild_id: e,
                        query: null != i ? i : "",
                        continuation_token: null != n ? n : null
                    })
                }
                updateGuildSubscriptions(e, t) {
                    this.send(s.GUILD_SUBSCRIPTIONS, {
                        guild_id: e,
                        ...t
                    })
                }
                callConnect(e) {
                    this.send(s.CALL_CONNECT, {
                        channel_id: e
                    })
                }
                lobbyConnect(e, t) {
                    this.send(s.LOBBY_CONNECT, {
                        lobby_id: e,
                        lobby_secret: t
                    })
                }
                lobbyDisconnect(e) {
                    this.send(s.LOBBY_DISCONNECT, {
                        lobby_id: e
                    })
                }
                lobbyVoiceStatesUpdate(e) {
                    this.send(s.LOBBY_VOICE_STATES_UPDATE, e.map(e => ({
                        lobby_id: e.lobbyId,
                        self_mute: e.selfMute,
                        self_deaf: e.selfDeaf
                    })))
                }
                streamCreate(e, t, i) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    this.send(s.STREAM_CREATE, {
                        type: e,
                        guild_id: t,
                        channel_id: i,
                        preferred_region: n
                    })
                }
                streamWatch(e) {
                    this.send(s.STREAM_WATCH, {
                        stream_key: e
                    })
                }
                streamPing(e) {
                    this.send(s.STREAM_PING, {
                        stream_key: e
                    })
                }
                streamDelete(e) {
                    this.send(s.STREAM_DELETE, {
                        stream_key: e
                    })
                }
                streamSetPaused(e, t) {
                    this.send(s.STREAM_SET_PAUSED, {
                        stream_key: e,
                        paused: t
                    })
                }
                speedTestCreate() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.send(s.SPEED_TEST_CREATE, {
                        preferred_region: e
                    })
                }
                speedTestDelete() {
                    this.send(s.SPEED_TEST_DELETE, null)
                }
                requestForumUnreads(e, t, i) {
                    this.send(s.REQUEST_FORUM_UNREADS, {
                        guild_id: e,
                        channel_id: t,
                        threads: i.map(e => ({
                            thread_id: e.threadId,
                            ack_message_id: e.ackMessageId
                        }))
                    })
                }
                requestSoundboardSounds(e) {
                    this.send(s.REQUEST_SOUNDBOARD_SOUNDS, {
                        guild_ids: e
                    })
                }
                requestLastMessages(e, t) {
                    this.send(s.REQUEST_LAST_MESSAGES, {
                        guild_id: e,
                        channel_ids: t
                    })
                }
                getDeletedEntityIdsNotMatchingHash(e, t, i, n, a) {
                    this.send(s.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, {
                        guild_id: e,
                        channel_ids_hash: t,
                        role_ids_hash: i,
                        emoji_ids_hash: n,
                        sticker_ids_hash: a
                    })
                }
                remoteCommand(e, t) {
                    this.send(s.REMOTE_COMMAND, {
                        target_session_id: e,
                        payload: t
                    })
                }
            }
        },
        518916: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                socket: function() {
                    return f
                },
                localPresenceState: function() {
                    return S
                },
                localVoiceState: function() {
                    return T
                },
                localLobbyVoiceStates: function() {
                    return g
                },
                setDispatchSocketMessageFunction: function() {
                    return A
                }
            });
            var n = i("35092"),
                s = i("913144"),
                a = i("49671"),
                r = i("605250"),
                l = i("271938"),
                o = i("599110"),
                d = i("35468"),
                u = i("773336"),
                c = i("509065"),
                _ = i("447214"),
                h = i("413196"),
                E = i("764867"),
                p = i("292892");
            let m = new r.default("ConnectionStore"),
                f = new _.default,
                S = new E.default(f),
                T = new p.default(f),
                g = new h.default(f),
                I = null;

            function A(e) {
                I = e
            }
            f.handleIdentify = () => {
                let e = l.default.getToken();
                return (m.verbose("handleIdentify called", {
                    hasToken: null != e
                }), null == e) ? null : {
                    token: e,
                    properties: o.default.getSuperProperties(),
                    presence: S.getState()
                }
            }, (0, u.isDesktop)() && a.default.remotePowerMonitor.on("resume", () => {
                f.expeditedHeartbeat(5e3, "power monitor resumed")
            }), d.default.addOfflineCallback(() => {
                f.networkStateChange(15e3, "network detected offline.", !1)
            }), d.default.addOnlineCallback(() => {
                f.networkStateChange(5e3, "network detected online.")
            }), f.on("disconnect", e => {
                let {
                    code: t,
                    reason: i
                } = e;
                s.default.dispatch({
                    type: "CONNECTION_CLOSED",
                    code: t,
                    reason: i
                })
            }), f.on("close", e => {
                let {
                    code: t,
                    reason: i
                } = e;
                s.default.dispatch({
                    type: "CONNECTION_INTERRUPTED",
                    code: t,
                    reason: i
                })
            });
            let C = [],
                y = null,
                N = 33,
                D = new Set(["READY", "INITIAL_GUILD"]);

            function R() {
                y = null;
                let e = Date.now(),
                    t = C.slice();
                if (C.length = 0, null == I) throw Error("setDispatchSocketMessageFunction needs to be called first!");
                let i = "none";
                try {
                    n.default.Emitter.batched(() => {
                        t.forEach(e => {
                            let [t, n] = e;
                            i = t, I(t, n)
                        }), c.default.flush()
                    })
                } catch (e) {
                    f.resetSocketOnError(e, i)
                }
                let s = Date.now() - e;
                s > 100 ? (m.log("Dispatched ".concat(t.length, " messages in ").concat(s, "ms")), N = 250) : N = 33
            }
            f.on("dispatch", (e, t) => {
                C.push([e, t]), D.has(e) ? (null != y && clearTimeout(y), R()) : null == y && (y = setTimeout(R, N))
            })
        },
        289362: function(e, t, i) {
            "use strict";

            function n(e) {
                let {
                    knownGuildVersions: t,
                    highestLastMessageId: i,
                    readStateVersion: n,
                    userGuildSettingsVersion: s,
                    userSettingsVersion: a,
                    privateChannelsVersion: r,
                    apiCodeVersion: l,
                    lastSelectedGuildId: o
                } = e, d = null == o || isNaN(Number(o)) ? void 0 : o;
                return {
                    guild_versions: t,
                    highest_last_message_id: i,
                    read_state_version: n,
                    user_guild_settings_version: s,
                    user_settings_version: a,
                    private_channels_version: r,
                    api_code_version: l,
                    initial_guild_id: d
                }
            }
            i.r(t), i.d(t, {
                toGatewayClientState: function() {
                    return n
                }
            })
        },
        413196: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("201876"),
                s = i("260320"),
                a = i("42887");
            class r extends n.default {
                getInitialState() {
                    return this.getNextState()
                }
                getNextState() {
                    let e = s.default.getLobbiesWithVoice();
                    return e.length > 0 && (this._hadLobbyVoiceStates = !0), {
                        lobbies: e.map(e => ({
                            lobbyId: e.id,
                            selfMute: a.default.isSelfMute(e.application_id),
                            selfDeaf: a.default.isSelfDeaf(e.application_id)
                        }))
                    }
                }
                shouldCommit() {
                    return this._hadLobbyVoiceStates && this.socket.isSessionEstablished()
                }
                didCommit(e) {
                    let {
                        lobbies: t
                    } = e;
                    this.socket.lobbyVoiceStatesUpdate(t)
                }
                forceUpdate() {
                    this._hadLobbyVoiceStates && super.forceUpdate()
                }
                constructor(e) {
                    super(), this.socket = e, this._hadLobbyVoiceStates = !1
                }
            }
        },
        764867: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("201876"),
                s = i("661736"),
                a = i("101125");
            class r extends n.default {
                getInitialState() {
                    return a.default.getLocalPresence()
                }
                getNextState() {
                    return a.default.getLocalPresence()
                }
                shouldCommit() {
                    return this.socket.isSessionEstablished()
                }
                emitPresenceUpdate(e) {
                    let {
                        status: t,
                        since: i,
                        activities: n,
                        afk: s,
                        broadcast: a
                    } = e;
                    this.socket.presenceUpdate(t, i, n, s, a)
                }
                handleConnectionOpen() {
                    let e = !this.switchingAccounts;
                    this.update({}, e), this.switchingAccounts = !1
                }
                handleAccountSwitch() {
                    this.switchingAccounts = !0, this.reset(), this.emitPresenceUpdate(this.getState())
                }
                constructor(e) {
                    super(), this.socket = e, this.switchingAccounts = !1, this.didCommit = (0, s.default)(5, 2e4, this.emitPresenceUpdate.bind(this))
                }
            }
        },
        292892: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return p
                }
            });
            var n = i("201876"),
                s = i("56947"),
                a = i("386045"),
                r = i("584687"),
                l = i("845579"),
                o = i("373469"),
                d = i("42203"),
                u = i("42887"),
                c = i("590401"),
                _ = i("568307"),
                h = i("568734"),
                E = i("49111");
            class p extends n.default {
                get guildId() {
                    return this.getState().guildId
                }
                get channelId() {
                    return this.getState().channelId
                }
                computeVoiceFlags() {
                    var e, t, i;
                    let n = 0,
                        d = l.ClipsAllowVoiceRecording.getSetting();
                    n = (0, h.setFlag)(n, E.VoiceFlags.ALLOW_VOICE_RECORDING, d);
                    let u = a.default.getSettings().clipsEnabled && (0, s.areClipsEnabled)() && ((null === (e = o.default.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === E.ApplicationStreamStates.ACTIVE || (null === (t = o.default.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === E.ApplicationStreamStates.PAUSED),
                        {
                            enableDecoupledGameClipping: c
                        } = r.default.getCurrentConfig({
                            location: "computeVoiceFlags"
                        }),
                        p = a.default.getSettings().decoupledClipsEnabled && (null === (i = _.default.getVisibleGame()) || void 0 === i ? void 0 : i.windowHandle) != null && c;
                    return n = (0, h.setFlag)(n, E.VoiceFlags.CLIPS_ENABLED, u || p)
                }
                getInitialState() {
                    return {
                        guildId: null,
                        channelId: null,
                        selfMute: u.default.isSelfMute(),
                        selfDeaf: u.default.isSelfDeaf(),
                        selfVideo: u.default.isVideoEnabled(),
                        preferredRegion: null,
                        videoStreamParameters: null,
                        flags: 0
                    }
                }
                getNextState(e) {
                    let {
                        guildId: t,
                        channelId: i
                    } = e;
                    return {
                        guildId: t,
                        channelId: i,
                        selfMute: u.default.isSelfMute(),
                        selfDeaf: u.default.isSelfDeaf(),
                        selfVideo: u.default.isVideoEnabled(),
                        preferredRegion: c.default.getPreferredRegion(),
                        videoStreamParameters: u.default.getVideoStreamParameters(),
                        flags: this.computeVoiceFlags()
                    }
                }
                shouldCommit() {
                    return this.socket.isSessionEstablished()
                }
                didCommit(e) {
                    var t;
                    let {
                        guildId: i,
                        channelId: n,
                        selfMute: s,
                        selfDeaf: a,
                        selfVideo: r,
                        preferredRegion: l,
                        videoStreamParameters: o,
                        flags: u = 0
                    } = e;
                    r && (null === (t = d.default.getChannel(n)) || void 0 === t ? void 0 : t.type) === E.ChannelTypes.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
                        guildId: i,
                        channelId: n,
                        selfMute: s,
                        selfDeaf: a,
                        selfVideo: r,
                        preferredRegion: l,
                        videoStreamParameters: o,
                        flags: u
                    }) : this.socket.voiceStateUpdate({
                        guildId: i,
                        channelId: n,
                        selfMute: s,
                        selfDeaf: a,
                        selfVideo: r,
                        preferredRegion: l,
                        flags: u
                    })
                }
                constructor(e) {
                    super(), this.socket = e
                }
            }
        },
        571420: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getIsPaused: function() {
                    return s
                },
                setIsPaused: function() {
                    return a
                }
            });
            let n = !1;

            function s() {
                return n
            }

            function a(e) {
                n = e
            }
        },
        797785: function(e, t, i) {
            "use strict";

            function n(e, t) {
                return new WebSocket(e, t)
            }
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            })
        },
        399010: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return k
                }
            });
            var n = i("917351"),
                s = i.n(n);
            i("576863");
            var a = i("446674"),
                r = i("913144"),
                l = i("851387"),
                o = i("775433"),
                d = i("327037"),
                u = i("605250"),
                c = i("871336"),
                _ = i("25932"),
                h = i("410912"),
                E = i("116949"),
                p = i("233069"),
                m = i("522308"),
                f = i("766274"),
                S = i("42203"),
                T = i("26989"),
                g = i("778588"),
                I = i("260320"),
                A = i("697218"),
                C = i("800762"),
                y = i("10514"),
                N = i("521012"),
                D = i("224400"),
                R = i("390946"),
                v = i("509065"),
                O = i("518916");
            let b = new u.default("ConnectionStore"),
                L = new v.default(O.socket, (e, t) => {
                    var i;
                    e = null != e ? e : {
                        type: "CHANNEL_UPDATES",
                        channels: []
                    };
                    let n = (0, p.createChannelRecordFromServer)(t),
                        s = S.default.getChannel(t.id),
                        a = null == s ? void 0 : s.merge({
                            ...n,
                            recipients: s.recipients,
                            bitrate: null !== (i = n.bitrate) && void 0 !== i ? i : s.bitrate
                        });
                    return e.channels.push(null != a ? a : n), e
                }, e => "CHANNEL_UPDATE" !== e),
                P = new v.default(O.socket, (e, t) => ((e = null == e ? {
                    type: "SOUNDBOARD_SOUNDS_RECEIVED",
                    updates: []
                } : e).updates.push({
                    guildId: t.guild_id,
                    sounds: t.soundboard_sounds.map(e => ({
                        name: e.name,
                        soundId: e.sound_id,
                        emojiName: e.emoji_name,
                        emojiId: e.emoji_id,
                        userId: e.user_id,
                        volume: e.volume,
                        available: e.available,
                        guildId: t.guild_id
                    }))
                }), e), e => "SOUNDBOARD_SOUNDS" !== e),
                U = new v.default(O.socket, (e, t) => ((e = null == e ? {
                    type: "PRESENCE_UPDATES",
                    updates: []
                } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e);

            function k(e, t) {
                var n, r, u, T, I, U, k;
                switch (v.default.flush(e, t), e) {
                    case "INITIAL_GUILD":
                        h.default.initialGuild.measure(() => {
                            a.default.Emitter.batched(() => {
                                let e = R.hydrateInitialGuild(t, O.socket.identifyStartTime);
                                if (null != A.default.getCurrentUser()) {
                                    var i;
                                    M({
                                        type: "GUILD_CREATE",
                                        guild: e
                                    }), M({
                                        type: "VOICE_STATE_UPDATES",
                                        voiceStates: e.voice_states.map(t => ({
                                            userId: t.user_id,
                                            guildId: e.id,
                                            sessionId: t.session_id,
                                            channelId: t.channel_id,
                                            mute: t.mute,
                                            deaf: t.deaf,
                                            selfMute: t.self_mute,
                                            selfDeaf: t.self_deaf,
                                            selfVideo: t.self_video || !1,
                                            suppress: t.suppress,
                                            selfStream: t.self_stream || !1,
                                            requestToSpeakTimestamp: null !== (i = t.request_to_speak_timestamp) && void 0 !== i ? i : null
                                        }))
                                    }), b.log("Dispatched INITIAL_GUILD ".concat(t.id))
                                }
                            })
                        });
                        break;
                    case "READY_SUPPLEMENTAL":
                        h.default.readySupplemental.measure(() => {
                            a.default.Emitter.batched(() => {
                                var e, i;
                                t = h.default.hydrateReadySupplemental.measure(() => R.hydrateReadySupplementalPayload(t, O.socket.identifyStartTime));
                                let n = e => e.map(e => ({
                                        user: e.user,
                                        status: e.status,
                                        clientStatus: e.client_status,
                                        activities: e.activities,
                                        broadcast: e.broadcast
                                    })),
                                    s = t.guilds.filter(e => !0 !== e.unavailable);
                                s.forEach(e => {
                                    e.presences = n(e.presences || [])
                                });
                                let a = t.presences ? n(t.presences) : [],
                                    r = (null !== (e = t.lazy_private_channels) && void 0 !== e ? e : []).map(e => (0, p.createChannelRecordFromServer)(e)),
                                    l = null !== (i = t.game_invites) && void 0 !== i ? i : [];
                                h.default.dispatchReadySupplemental.measure(() => {
                                    M({
                                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                                        guilds: s,
                                        presences: a,
                                        lazyPrivateChannels: r,
                                        gameInvites: l
                                    })
                                });
                                let o = [];
                                s.forEach(e => {
                                    e.voice_states.forEach(t => {
                                        var i;
                                        o.push({
                                            userId: t.user_id,
                                            guildId: e.id,
                                            sessionId: t.session_id,
                                            channelId: t.channel_id,
                                            mute: t.mute,
                                            deaf: t.deaf,
                                            selfMute: t.self_mute,
                                            selfDeaf: t.self_deaf,
                                            selfVideo: t.self_video || !1,
                                            suppress: t.suppress,
                                            selfStream: t.self_stream || !1,
                                            requestToSpeakTimestamp: null !== (i = t.request_to_speak_timestamp) && void 0 !== i ? i : null
                                        })
                                    })
                                }), M({
                                    type: "VOICE_STATE_UPDATES",
                                    voiceStates: o,
                                    initial: !0
                                }), O.localVoiceState.update(), O.localLobbyVoiceStates.update({}, !0)
                            })
                        }), setTimeout(() => M({
                            type: "POST_CONNECTION_OPEN"
                        }), 2e3);
                        break;
                    case "READY":
                        if (t.user.bot) {
                            M({
                                type: "LOGOUT"
                            });
                            return
                        }
                        h.default.ready.measure(() => {
                            a.default.Emitter.batched(() => {
                                t = h.default.hydrateReady.measure(() => R.hydrateReadyPayloadPrioritized(t, O.socket.identifyStartTime));
                                let e = t.private_channels.map(e => (0, p.createChannelRecordFromServer)(e)),
                                    i = t.guilds.filter(e => e.unavailable).map(e => e.id),
                                    n = t.guilds.filter(e => !0 !== e.unavailable);
                                n.forEach(e => {
                                    e.presences = []
                                });
                                let s = null == t.user_settings_proto ? void 0 : (0, E.b64ToPreloadedUserSettingsProto)(t.user_settings_proto);
                                h.default.dispatchReady.measure(() => {
                                    var a;
                                    M({
                                        type: "CONNECTION_OPEN",
                                        sessionId: t.session_id,
                                        authSessionIdHash: t.auth_session_id_hash,
                                        user: t.user,
                                        users: t.users,
                                        guilds: n,
                                        initialPrivateChannels: e,
                                        unavailableGuilds: i,
                                        readState: t.read_state,
                                        userGuildSettings: t.user_guild_settings,
                                        tutorial: t.tutorial,
                                        relationships: t.relationships,
                                        friendSuggestionCount: t.friend_suggestion_count,
                                        presences: t.presences,
                                        analyticsToken: t.analytics_token,
                                        experiments: t.experiments,
                                        connectedAccounts: t.connected_accounts,
                                        guildExperiments: t.guild_experiments,
                                        requiredAction: t.required_action,
                                        consents: t.consents,
                                        sessions: V(t.sessions || []),
                                        pendingPayments: t.pending_payments,
                                        countryCode: null !== (a = t.country_code) && void 0 !== a ? a : void 0,
                                        guildJoinRequests: t.guild_join_requests || [],
                                        userSettingsProto: s,
                                        apiCodeVersion: t.api_code_version,
                                        auth: t.auth
                                    })
                                }), null != t.auth_token && M({
                                    type: "UPDATE_TOKEN",
                                    token: t.auth_token,
                                    userId: t.user.id
                                }), O.localPresenceState.update(), O.localVoiceState.update(), O.localLobbyVoiceStates.update(), B()
                            })
                        });
                        break;
                    case "RESUMED":
                        O.localPresenceState.forceUpdate(), O.localVoiceState.forceUpdate(), O.localLobbyVoiceStates.forceUpdate(), B(), M({
                            type: "CONNECTION_RESUMED"
                        });
                        break;
                    case "TYPING_START":
                        null != t.member && w(t.guild_id, t.member.user, t.member), M({
                            type: "TYPING_START",
                            channelId: t.channel_id,
                            userId: t.user_id
                        });
                        break;
                    case "ACTIVITY_START":
                        M({
                            type: "ACTIVITY_START",
                            userId: t.user_id,
                            activity: t.activity
                        });
                        break;
                    case "ACTIVITY_USER_ACTION":
                        M({
                            type: "ACTIVITY_USER_ACTION",
                            actionType: t.action_type,
                            user: t.user,
                            applicationId: t.application_id,
                            channelId: t.channel_id,
                            messageId: t.message_id
                        });
                        break;
                    case "MESSAGE_CREATE":
                        G(t), null != t.author && M({
                            type: "MESSAGE_CREATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            message: t,
                            optimistic: !1,
                            isPushNotification: !1
                        });
                        break;
                    case "MESSAGE_UPDATE":
                        G(t), M({
                            type: "MESSAGE_UPDATE",
                            guildId: t.guild_id,
                            message: t
                        });
                        break;
                    case "MESSAGE_DELETE":
                        M({
                            type: "MESSAGE_DELETE",
                            guildId: t.guild_id,
                            id: t.id,
                            channelId: t.channel_id
                        });
                        break;
                    case "MESSAGE_DELETE_BULK":
                        M({
                            type: "MESSAGE_DELETE_BULK",
                            guildId: t.guild_id,
                            ids: t.ids,
                            channelId: t.channel_id
                        });
                        break;
                    case "MESSAGE_ACK":
                        M({
                            type: "MESSAGE_ACK",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            manual: t.manual,
                            newMentionCount: t.mention_count,
                            version: t.version
                        });
                        break;
                    case "GUILD_FEATURE_ACK":
                        M({
                            type: "GUILD_FEATURE_ACK",
                            id: t.resource_id,
                            ackType: t.ack_type,
                            ackedId: t.entity_id
                        });
                        break;
                    case "USER_NON_CHANNEL_ACK":
                        M({
                            type: "USER_NON_CHANNEL_ACK",
                            ackType: t.ack_type,
                            ackedId: t.entity_id
                        });
                        break;
                    case "CHANNEL_PINS_ACK":
                        M({
                            type: "CHANNEL_PINS_ACK",
                            channelId: t.channel_id,
                            timestamp: t.timestamp,
                            version: t.version
                        });
                        break;
                    case "CHANNEL_PINS_UPDATE":
                        M({
                            type: "CHANNEL_PINS_UPDATE",
                            channelId: t.channel_id,
                            lastPinTimestamp: t.last_pin_timestamp
                        });
                        break;
                    case "CHANNEL_CREATE":
                    case "CHANNEL_DELETE":
                        M({
                            type: e,
                            channel: (0, p.createChannelRecordFromServer)(t)
                        });
                        break;
                    case "VOICE_CHANNEL_STATUS_UPDATE":
                        M({
                            type: e,
                            id: t.id,
                            status: t.status
                        });
                        break;
                    case "CHANNEL_UPDATE":
                        L.add(t);
                        break;
                    case "THREAD_CREATE":
                    case "THREAD_UPDATE":
                    case "THREAD_DELETE": {
                        let {
                            newly_created: i,
                            ...n
                        } = t;
                        M({
                            type: e,
                            isNewlyCreated: i,
                            channel: (0, p.createChannelRecordFromServer)(n)
                        });
                        break
                    }
                    case "THREAD_LIST_SYNC":
                        M({
                            type: "THREAD_LIST_SYNC",
                            guildId: t.guild_id,
                            threads: t.threads.map(e => {
                                let t = S.default.getChannel(e.parent_id);
                                return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, p.createChannelRecordFromServer)(e)
                            }),
                            mostRecentMessages: t.most_recent_messages,
                            members: t.members ? s.map(t.members, _.default) : void 0,
                            channelIds: t.channel_ids
                        });
                        break;
                    case "THREAD_MEMBER_UPDATE":
                        M({
                            type: "THREAD_MEMBER_UPDATE",
                            id: t.id,
                            guildId: t.guild_id,
                            userId: t.user_id,
                            flags: t.flags,
                            muted: t.muted,
                            muteConfig: t.mute_config,
                            joinTimestamp: t.join_timestamp
                        });
                        break;
                    case "THREAD_MEMBERS_UPDATE":
                        M({
                            type: "THREAD_MEMBERS_UPDATE",
                            id: t.id,
                            guildId: t.guild_id,
                            memberCount: t.member_count,
                            addedMembers: null === (n = t.added_members) || void 0 === n ? void 0 : n.map(e => ({
                                id: e.id,
                                guildId: t.guild_id,
                                userId: e.user_id,
                                flags: e.flags,
                                joinTimestamp: e.join_timestamp
                            })),
                            removedMemberIds: t.removed_member_ids,
                            memberIdsPreview: t.member_ids_preview
                        });
                        break;
                    case "FORUM_UNREADS":
                        if (t.permission_denied) break;
                        M({
                            type: "FORUM_UNREADS",
                            channelId: t.channel_id,
                            threads: t.threads.map(e => ({
                                threadId: e.thread_id,
                                missing: e.missing,
                                count: e.count
                            }))
                        });
                        break;
                    case "SOUNDBOARD_SOUNDS":
                        P.add(t);
                        break;
                    case "CHANNEL_RECIPIENT_ADD":
                    case "CHANNEL_RECIPIENT_REMOVE":
                        let F = S.default.getBasicChannel(t.channel_id);
                        M({
                            type: e,
                            channelId: t.channel_id,
                            user: t.user,
                            nick: t.nick,
                            isMember: null != F
                        });
                        break;
                    case "GUILD_CREATE":
                        if (t.unavailable) M({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        else {
                            let e = R.hydratePreviouslyUnavailableGuild(t);
                            l.default.createGuild(e), M({
                                type: "VOICE_STATE_UPDATES",
                                voiceStates: e.voice_states.map(t => ({
                                    userId: t.user_id,
                                    guildId: e.id,
                                    sessionId: t.session_id,
                                    channelId: t.channel_id,
                                    mute: t.mute,
                                    deaf: t.deaf,
                                    selfMute: t.self_mute,
                                    selfDeaf: t.self_deaf,
                                    selfVideo: t.self_video || !1,
                                    suppress: t.suppress,
                                    selfStream: t.self_stream || !1,
                                    requestToSpeakTimestamp: null !== (r = t.request_to_speak_timestamp) && void 0 !== r ? r : null
                                }))
                            })
                        }
                        break;
                    case "GUILD_UPDATE":
                        M({
                            type: "GUILD_UPDATE",
                            guild: t
                        }), t.unavailable && M({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        break;
                    case "GUILD_DELETE":
                        M({
                            type: "GUILD_DELETE",
                            guild: t
                        }), t.unavailable && M({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        break;
                    case "GUILD_MEMBERS_CHUNK":
                        a.default.Emitter.batched(() => {
                            M({
                                type: "GUILD_MEMBERS_CHUNK",
                                guildId: t.guild_id,
                                members: t.members,
                                notFound: t.not_found
                            }), null != t.presences && t.presences.forEach(e => {
                                let {
                                    user: i,
                                    status: n,
                                    client_status: s,
                                    activities: a,
                                    broadcast: r
                                } = e;
                                return H({
                                    guildId: t.guild_id,
                                    user: i,
                                    status: n,
                                    activities: a,
                                    clientStatus: s,
                                    broadcast: r
                                })
                            }), v.default.flush()
                        });
                        break;
                    case "THREAD_MEMBER_LIST_UPDATE":
                        a.default.Emitter.batched(() => {
                            M({
                                type: "THREAD_MEMBER_LIST_UPDATE",
                                guildId: t.guild_id,
                                threadId: t.thread_id,
                                members: t.members
                            }), null != t.presences && t.presences.forEach(e => {
                                let {
                                    user: i,
                                    status: n,
                                    client_status: s,
                                    activities: a,
                                    broadcast: r
                                } = e;
                                return H({
                                    guildId: t.guild_id,
                                    user: i,
                                    status: n,
                                    activities: a,
                                    clientStatus: s,
                                    broadcast: r
                                })
                            }), v.default.flush()
                        });
                        break;
                    case "GUILD_BAN_ADD":
                    case "GUILD_BAN_REMOVE":
                    case "GUILD_MEMBER_ADD":
                    case "GUILD_MEMBER_UPDATE":
                    case "GUILD_MEMBER_REMOVE":
                        M({
                            type: e,
                            guildId: t.guild_id,
                            user: t.user,
                            avatar: t.avatar,
                            roles: t.roles,
                            nick: t.nick,
                            premiumSince: t.premium_since,
                            isPending: t.pending,
                            joinedAt: t.joined_at,
                            communicationDisabledUntil: t.communication_disabled_until,
                            unusualDMActivityUntil: t.unusual_dm_activity_until,
                            flags: t.flags
                        });
                        break;
                    case "GUILD_ROLE_CREATE":
                    case "GUILD_ROLE_UPDATE":
                        M({
                            type: e,
                            guildId: t.guild_id,
                            role: t.role
                        });
                        break;
                    case "GUILD_ROLE_DELETE":
                        M({
                            type: "GUILD_ROLE_DELETE",
                            guildId: t.guild_id,
                            roleId: t.role_id,
                            version: t.version
                        });
                        break;
                    case "GUILD_EMOJIS_UPDATE":
                        M({
                            type: "GUILD_EMOJIS_UPDATE",
                            guildId: t.guild_id,
                            emojis: t.emojis
                        });
                        break;
                    case "GUILD_STICKERS_UPDATE":
                        M({
                            type: "GUILD_STICKERS_UPDATE",
                            guildId: t.guild_id,
                            stickers: t.stickers
                        });
                        break;
                    case "GUILD_INTEGRATIONS_UPDATE":
                        M({
                            type: "GUILD_INTEGRATIONS_UPDATE",
                            guildId: t.guild_id
                        });
                        break;
                    case "INTEGRATION_CREATE":
                        M({
                            type: "INTEGRATION_CREATE",
                            application: t.application,
                            guildId: t.guild_id
                        });
                        break;
                    case "INTEGRATION_DELETE":
                        M({
                            type: "INTEGRATION_DELETE",
                            applicationId: t.application_id,
                            guildId: t.guild_id
                        });
                        break;
                    case "USER_UPDATE":
                        M({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        break;
                    case "USER_SETTINGS_PROTO_UPDATE":
                        let z = (0, E.b64ToProtoWithType)(t.settings.type, t.settings.proto);
                        if (null == z) break;
                        if ("string" == typeof z) throw console.error("Invalid proto: |".concat(z, "| |").concat(t.settings.proto, "|")), console.error({
                            parsed: z,
                            wire: t.settings.proto,
                            type: t.settings.type
                        }), Error("UserSettingsProto must not be a string");
                        M({
                            type: "USER_SETTINGS_PROTO_UPDATE",
                            settings: {
                                proto: z,
                                type: t.settings.type
                            },
                            partial: t.partial
                        });
                        break;
                    case "USER_GUILD_SETTINGS_UPDATE":
                        M({
                            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
                            userGuildSettings: [t]
                        });
                        break;
                    case "USER_CONNECTIONS_UPDATE":
                        M({
                            type: "USER_CONNECTIONS_UPDATE"
                        });
                        break;
                    case "USER_REQUIRED_ACTION_UPDATE":
                        M({
                            type: "USER_REQUIRED_ACTION_UPDATE",
                            requiredAction: t.required_action
                        });
                        break;
                    case "USER_NOTE_UPDATE":
                        M({
                            type: "USER_NOTE_UPDATE",
                            ...t
                        });
                        break;
                    case "RELATIONSHIP_ADD":
                        M({
                            type: "RELATIONSHIP_ADD",
                            relationship: {
                                id: t.id,
                                type: t.type,
                                user: t.user,
                                since: t.since,
                                nickname: t.nickname
                            },
                            shouldNotify: !0 === t.should_notify
                        });
                        break;
                    case "RELATIONSHIP_REMOVE":
                        M({
                            type: "RELATIONSHIP_REMOVE",
                            relationship: t
                        });
                        break;
                    case "RELATIONSHIP_UPDATE":
                        M({
                            type: "RELATIONSHIP_UPDATE",
                            relationship: t
                        });
                        break;
                    case "PRESENCE_UPDATE":
                        H({
                            guildId: t.guild_id,
                            user: t.user,
                            status: t.status,
                            activities: t.activities,
                            clientStatus: t.client_status,
                            broadcast: t.broadcast
                        });
                        break;
                    case "PRESENCES_REPLACE":
                        M({
                            type: "PRESENCES_REPLACE",
                            presences: t
                        });
                        break;
                    case "SESSIONS_REPLACE":
                        M({
                            type: "SESSIONS_REPLACE",
                            sessions: V(t)
                        });
                        break;
                    case "VOICE_STATE_UPDATE":
                        null != t.member && w(t.guild_id, t.member.user, t.member), M({
                            type: "VOICE_STATE_UPDATES",
                            voiceStates: [{
                                userId: t.user_id,
                                guildId: t.guild_id,
                                sessionId: t.session_id,
                                channelId: t.channel_id,
                                mute: t.mute,
                                deaf: t.deaf,
                                selfMute: t.self_mute,
                                selfDeaf: t.self_deaf,
                                selfVideo: t.self_video || !1,
                                suppress: t.suppress,
                                selfStream: t.self_stream || !1,
                                requestToSpeakTimestamp: null !== (u = t.request_to_speak_timestamp) && void 0 !== u ? u : null,
                                oldChannelId: C.default.getUserVoiceChannelId(t.guild_id, t.user_id)
                            }]
                        });
                        break;
                    case "LOBBY_VOICE_STATE_UPDATE":
                        M({
                            type: "LOBBY_VOICE_STATE_UPDATE",
                            userId: t.user_id,
                            lobbyId: t.lobby_id,
                            sessionId: t.session_id,
                            channelId: t.channel_id,
                            mute: t.mute,
                            deaf: t.deaf,
                            selfMute: t.self_mute,
                            selfDeaf: t.self_deaf
                        });
                        break;
                    case "VOICE_SERVER_UPDATE":
                        M({
                            type: "VOICE_SERVER_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "LOBBY_VOICE_SERVER_UPDATE":
                        M({
                            type: "LOBBY_VOICE_SERVER_UPDATE",
                            lobbyId: t.lobby_id,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "CALL_CREATE":
                        M({
                            type: "CALL_CREATE",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            embeddedActivities: t.embedded_activities,
                            region: t.region,
                            ringing: t.ringing
                        });
                        let Y = t.voice_states;
                        null != Y && M({
                            type: "VOICE_STATE_UPDATES",
                            voiceStates: Y.map(e => ({
                                userId: e.user_id,
                                guildId: null,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf,
                                selfVideo: e.self_video || !1,
                                suppress: e.suppress,
                                selfStream: e.self_stream || !1,
                                requestToSpeakTimestamp: null !== (T = e.request_to_speak_timestamp) && void 0 !== T ? T : null
                            }))
                        });
                        break;
                    case "CALL_UPDATE":
                        M({
                            type: "CALL_UPDATE",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            region: t.region,
                            ringing: t.ringing
                        });
                        break;
                    case "CALL_DELETE":
                        M({
                            type: "CALL_DELETE",
                            channelId: t.channel_id,
                            unavailable: t.unavailable
                        });
                        break;
                    case "OAUTH2_TOKEN_REVOKE":
                        M({
                            type: "OAUTH2_TOKEN_REVOKE",
                            accessToken: t.access_token
                        });
                        break;
                    case "RECENT_MENTION_DELETE":
                        M({
                            type: "RECENT_MENTION_DELETE",
                            id: t.message_id
                        });
                        break;
                    case "FRIEND_SUGGESTION_CREATE":
                        M({
                            type: "FRIEND_SUGGESTION_CREATE",
                            suggestion: t
                        });
                        break;
                    case "FRIEND_SUGGESTION_DELETE":
                        M({
                            type: "FRIEND_SUGGESTION_DELETE",
                            suggestedUserId: t.suggested_user_id
                        });
                        break;
                    case "WEBHOOKS_UPDATE":
                        M({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id
                        });
                        break;
                    case "BURST_CREDIT_BALANCE_UPDATE":
                        M({
                            type: "BURST_CREDITS_SET",
                            amount: t.amount,
                            wasReplenishedToday: t.replenished_today,
                            nextReplenishAt: new Date(t.next_replenish_at)
                        });
                        break;
                    case "MESSAGE_REACTION_ADD":
                    case "MESSAGE_REACTION_REMOVE":
                        M({
                            type: e,
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            userId: t.user_id,
                            emoji: t.emoji,
                            burst: t.burst,
                            colors: t.burst_colors,
                            messageAuthorId: t.message_author_id
                        });
                        break;
                    case "MESSAGE_REACTION_REMOVE_ALL":
                        M({
                            type: "MESSAGE_REACTION_REMOVE_ALL",
                            channelId: t.channel_id,
                            messageId: t.message_id
                        });
                        break;
                    case "MESSAGE_REACTION_REMOVE_EMOJI":
                        M({
                            type: "MESSAGE_REACTION_REMOVE_EMOJI",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            emoji: t.emoji
                        });
                        break;
                    case "MESSAGE_REACTION_ADD_MANY":
                        M({
                            type: "MESSAGE_REACTION_ADD_MANY",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            reactions: t.reactions
                        });
                        break;
                    case "PAYMENT_UPDATE":
                        M({
                            type: "PAYMENT_UPDATE",
                            payment: t
                        });
                        break;
                    case "ENTITLEMENT_CREATE":
                    case "ENTITLEMENT_UPDATE":
                    case "ENTITLEMENT_DELETE":
                        M({
                            type: e,
                            entitlement: t
                        });
                        break;
                    case "USER_PAYMENT_SOURCES_UPDATE":
                        g.default.hasLayers() && (i("850068").fetchPaymentSources(), o.fetchSubscriptionPlansBySKUs(y.default.getFetchedSKUIDs()));
                        break;
                    case "USER_SUBSCRIPTIONS_UPDATE":
                        d.fetchCurrentUser(), g.default.hasLayers() && i("850068").fetchSubscriptions();
                        break;
                    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE":
                        M({
                            type: "GUILD_BOOST_SLOT_CREATE",
                            guildBoostSlot: m.default.createFromServer(t, N.default.getSubscriptionById(t.subscription_id))
                        });
                        break;
                    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE":
                        M({
                            type: "GUILD_BOOST_SLOT_UPDATE",
                            guildBoostSlot: m.default.createFromServer(t, N.default.getSubscriptionById(t.subscription_id))
                        });
                        break;
                    case "BILLING_POPUP_BRIDGE_CALLBACK":
                        M({
                            type: "BILLING_POPUP_BRIDGE_CALLBACK",
                            paymentSourceType: t.payment_source_type,
                            state: t.state,
                            path: t.path,
                            query: t.query
                        });
                        break;
                    case "USER_PAYMENT_BROWSER_CHECKOUT_DONE":
                        M({
                            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
                            loadId: t.load_id
                        });
                        break;
                    case "USER_PAYMENT_CLIENT_ADD":
                        (0, D.getPurchaseTokenHash)().then(e => {
                            let i = t.purchase_token_hash;
                            i === e && M({
                                type: "USER_PAYMENT_CLIENT_ADD",
                                purchaseTokenHash: i,
                                expiresAt: t.expires_at
                            })
                        });
                        break;
                    case "GUILD_MEMBER_LIST_UPDATE":
                        a.default.Emitter.batched(() => {
                            let e = e => {
                                if (null == e.member) return;
                                let {
                                    member: i
                                } = e;
                                if (w(t.guild_id, i.user, i), null == i.presence) return;
                                let {
                                    presence: n
                                } = i;
                                H({
                                    guildId: t.guild_id,
                                    user: n.user,
                                    status: n.status,
                                    activities: n.activities,
                                    clientStatus: n.client_status,
                                    broadcast: n.broadcast
                                })
                            };
                            t.ops.forEach(t => {
                                let {
                                    op: i,
                                    items: n,
                                    item: s
                                } = t;
                                switch (i) {
                                    case "SYNC":
                                        n.forEach(e);
                                        break;
                                    case "UPDATE":
                                    case "INSERT":
                                        e(s)
                                }
                            }), v.default.flush(), M({
                                type: "GUILD_MEMBER_LIST_UPDATE",
                                guildId: t.guild_id,
                                id: t.id,
                                ops: t.ops,
                                groups: t.groups,
                                memberCount: t.member_count
                            })
                        });
                        break;
                    case "LOBBY_CREATE":
                        M({
                            type: "LOBBY_CREATE",
                            lobby: t
                        }), t.voice_states.forEach(e => {
                            M({
                                type: "LOBBY_VOICE_STATE_UPDATE",
                                lobbyId: t.id,
                                userId: e.user_id,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf
                            })
                        });
                        break;
                    case "LOBBY_UPDATE":
                        M({
                            type: "LOBBY_UPDATE",
                            lobby: t
                        });
                        break;
                    case "LOBBY_DELETE":
                        M({
                            type: "LOBBY_DELETE",
                            lobbyId: t.id,
                            reason: t.reason
                        });
                        break;
                    case "LOBBY_MEMBER_CONNECT":
                    case "LOBBY_MEMBER_UPDATE":
                    case "LOBBY_MEMBER_DISCONNECT":
                        M({
                            type: e,
                            lobbyId: t.lobby_id,
                            member: t.member
                        });
                        break;
                    case "LOBBY_MESSAGE":
                        M({
                            type: "LOBBY_MESSAGE",
                            lobbyId: t.lobby_id,
                            senderId: t.sender_id,
                            data: t.data
                        });
                        break;
                    case "GIFT_CODE_UPDATE":
                        M({
                            type: "GIFT_CODE_UPDATE",
                            uses: t.uses,
                            code: t.code
                        });
                        break;
                    case "GIFT_CODE_CREATE":
                        M({
                            type: "GIFT_CODE_CREATE",
                            giftCode: t
                        });
                        break;
                    case "USER_ACHIEVEMENT_UPDATE":
                        M({
                            type: "USER_ACHIEVEMENT_UPDATE",
                            userAchievement: t
                        });
                        break;
                    case "LIBRARY_APPLICATION_UPDATE":
                        M({
                            type: "LIBRARY_APPLICATION_UPDATE",
                            libraryApplication: t
                        });
                        break;
                    case "STREAM_CREATE":
                        M({
                            type: "STREAM_CREATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            rtcServerId: t.rtc_server_id,
                            paused: t.paused
                        });
                        break;
                    case "STREAM_SERVER_UPDATE":
                        M({
                            type: "STREAM_SERVER_UPDATE",
                            streamKey: t.stream_key,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "STREAM_UPDATE":
                        M({
                            type: "STREAM_UPDATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            paused: t.paused
                        });
                        break;
                    case "STREAM_DELETE":
                        M({
                            type: "STREAM_DELETE",
                            streamKey: t.stream_key,
                            unavailable: t.unavailable,
                            reason: t.reason
                        });
                        break;
                    case "GENERIC_PUSH_NOTIFICATION_SENT":
                        M({
                            type: "GENERIC_PUSH_NOTIFICATION_SENT",
                            title: t.title,
                            body: t.body,
                            trackingType: t.tracking_type,
                            icon: t.icon,
                            route: t.route,
                            tag: t.tag
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEM_CREATE":
                        M({
                            type: "NOTIFICATION_CENTER_ITEM_CREATE",
                            item: t
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEM_DELETE":
                        M({
                            type: "NOTIFICATION_CENTER_ITEM_DELETE",
                            id: t.id
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEMS_ACK":
                        M({
                            type: "NOTIFICATION_CENTER_ITEMS_ACK",
                            ids: [t.id],
                            optimistic: !1
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEM_COMPLETED":
                        M({
                            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
                            item_enum: t.item_enum
                        });
                        break;
                    case "APPLICATION_COMMAND_PERMISSIONS_UPDATE":
                        M({
                            type: e,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_APPLICATION_COMMAND_INDEX_UPDATE":
                        M({
                            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
                            guildId: t.guild_id,
                            applicationCommandCounts: t.application_command_counts,
                            version: t.version
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_CREATE":
                        M({
                            type: "GUILD_JOIN_REQUEST_CREATE",
                            request: t.request,
                            status: t.status,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_UPDATE":
                        M({
                            type: "GUILD_JOIN_REQUEST_UPDATE",
                            request: t.request,
                            status: t.status,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_DELETE":
                        M({
                            type: "GUILD_JOIN_REQUEST_DELETE",
                            id: t.id,
                            userId: t.user_id,
                            guildId: t.guild_id
                        });
                        break;
                    case "INTERACTION_CREATE":
                        M({
                            type: "INTERACTION_CREATE",
                            interactionId: t.id,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_SUCCESS":
                        M({
                            type: "INTERACTION_SUCCESS",
                            interactionId: t.id,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_FAILURE":
                        M({
                            type: "INTERACTION_FAILURE",
                            nonce: t.nonce
                        });
                        break;
                    case "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE":
                        M({
                            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
                            choices: t.choices,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_MODAL_CREATE":
                        M({
                            type: "INTERACTION_MODAL_CREATE",
                            id: t.id,
                            channelId: t.channel_id,
                            customId: t.custom_id,
                            application: t.application,
                            title: t.title,
                            components: t.components,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_IFRAME_MODAL_CREATE":
                        M({
                            type: "INTERACTION_IFRAME_MODAL_CREATE",
                            id: t.id,
                            channelId: t.channel_id,
                            customId: t.custom_id,
                            application: t.application,
                            title: t.title,
                            iframePath: t.iframe_path,
                            modalSize: t.modal_size,
                            nonce: t.nonce
                        });
                        break;
                    case "STAGE_INSTANCE_CREATE":
                        M({
                            type: "STAGE_INSTANCE_CREATE",
                            instance: t
                        });
                        break;
                    case "STAGE_INSTANCE_UPDATE":
                        M({
                            type: "STAGE_INSTANCE_UPDATE",
                            instance: t
                        });
                        break;
                    case "STAGE_INSTANCE_DELETE":
                        M({
                            type: "STAGE_INSTANCE_DELETE",
                            instance: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_CREATE":
                        M({
                            type: "GUILD_SCHEDULED_EVENT_CREATE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_UPDATE":
                        M({
                            type: "GUILD_SCHEDULED_EVENT_UPDATE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_DELETE":
                        M({
                            type: "GUILD_SCHEDULED_EVENT_DELETE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE":
                        M({
                            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
                            eventException: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE":
                        M({
                            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
                            eventException: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE":
                        M({
                            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
                            eventException: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_USER_ADD":
                        M({
                            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                            userId: t.user_id,
                            guildId: t.guild_id,
                            guildEventId: t.guild_scheduled_event_id
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_USER_REMOVE":
                        M({
                            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                            userId: t.user_id,
                            guildId: t.guild_id,
                            guildEventId: t.guild_scheduled_event_id
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_CREATE":
                        M({
                            type: "GUILD_DIRECTORY_ENTRY_CREATE",
                            channelId: t.directory_channel_id,
                            entry: t
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_UPDATE":
                        M({
                            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
                            channelId: t.directory_channel_id,
                            entry: t
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_DELETE":
                        M({
                            type: "GUILD_DIRECTORY_ENTRY_DELETE",
                            channelId: t.directory_channel_id,
                            guildId: t.entity_id
                        });
                        break;
                    case "AUTO_MODERATION_MENTION_RAID_DETECTION":
                        M({
                            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
                            guildId: t.guild_id,
                            decisionId: t.decision_id,
                            suspiciousMentionActivityUntil: t.suspicious_mention_activity_until
                        });
                        break;
                    case "VOICE_CHANNEL_EFFECT_SEND":
                        M({
                            type: "VOICE_CHANNEL_EFFECT_SEND",
                            emoji: t.emoji,
                            channelId: t.channel_id,
                            userId: t.user_id,
                            animationType: t.animation_type,
                            animationId: t.animation_id,
                            soundId: t.sound_id,
                            soundVolume: t.sound_volume,
                            points: t.points,
                            streamerId: t.streamer_id,
                            lineId: t.line_id,
                            emojiHose: t.emoji_hose
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUND_CREATE":
                        M({
                            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
                            sound: {
                                guildId: t.guild_id,
                                name: t.name,
                                soundId: t.sound_id,
                                user: new f.default(t.user),
                                userId: t.user_id,
                                volume: t.volume,
                                emojiId: t.emoji_id,
                                emojiName: t.emoji_name,
                                available: t.available
                            }
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUND_UPDATE":
                        M({
                            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
                            sound: {
                                guildId: t.guild_id,
                                name: t.name,
                                soundId: t.sound_id,
                                user: new f.default(t.user),
                                userId: t.user_id,
                                volume: t.volume,
                                emojiId: t.emoji_id,
                                emojiName: t.emoji_name,
                                available: t.available
                            }
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUND_DELETE":
                        M({
                            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
                            guildId: t.guild_id,
                            soundId: t.sound_id
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUNDS_UPDATE":
                        M({
                            type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
                            guildId: t.guild_id,
                            soundboardSounds: t.soundboard_sounds.map(e => ({
                                name: e.name,
                                soundId: e.sound_id,
                                emojiName: e.emoji_name,
                                emojiId: e.emoji_id,
                                userId: e.user_id,
                                volume: e.volume,
                                available: e.available,
                                guildId: t.guild_id
                            }))
                        });
                        break;
                    case "EMBEDDED_ACTIVITY_UPDATE":
                        M({
                            type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            embeddedActivity: t.embedded_activity,
                            connections: t.connections,
                            updateCode: t.update_code
                        });
                        break;
                    case "AUTH_SESSION_CHANGE":
                        M({
                            type: "AUTH_SESSION_CHANGE",
                            authSessionIdHash: t.auth_session_id_hash
                        });
                        break;
                    case "USER_CONNECTIONS_LINK_CALLBACK":
                        M({
                            type: "USER_CONNECTIONS_LINK_CALLBACK",
                            provider: t.provider,
                            callbackCode: t.callback_code,
                            callbackState: t.callback_state
                        });
                        break;
                    case "DELETED_ENTITY_IDS":
                        M({
                            type: "DELETED_ENTITY_IDS",
                            ...t
                        });
                        break;
                    case "CONSOLE_COMMAND_UPDATE":
                        M({
                            type: "CONSOLE_COMMAND_UPDATE",
                            id: t.id,
                            result: t.result,
                            error: t.error
                        });
                        break;
                    case "PASSIVE_UPDATE_V1":
                        M({
                            type: "PASSIVE_UPDATE_V1",
                            guildId: t.guild_id,
                            members: t.members,
                            channels: null === (I = t.channels) || void 0 === I ? void 0 : I.map(e => ({
                                id: e.id,
                                lastMessageId: e.last_message_id,
                                lastPinTimestamp: e.last_pin_timestamp
                            })),
                            voiceStates: null === (U = t.voice_states) || void 0 === U ? void 0 : U.map(e => ({
                                channelId: e.channel_id,
                                deaf: e.deaf || !1,
                                mute: e.mute || !1,
                                requestToSpeakTimestamp: null !== (k = e.request_to_speak_timestamp) && void 0 !== k ? k : null,
                                selfDeaf: e.self_deaf || !1,
                                selfMute: e.self_mute || !1,
                                selfStream: e.self_stream || !1,
                                selfVideo: e.self_video || !1,
                                sessionId: e.session_id,
                                suppress: e.suppress,
                                userId: e.user_id
                            }))
                        });
                        break;
                    case "PRIVATE_CHANNEL_INTEGRATION_CREATE":
                        M({
                            type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
                            integration: t
                        });
                        break;
                    case "PRIVATE_CHANNEL_INTEGRATION_UPDATE":
                        M({
                            type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
                            integration: t
                        });
                        break;
                    case "PRIVATE_CHANNEL_INTEGRATION_DELETE":
                        M({
                            type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
                            channelId: t.channel_id,
                            applicationId: t.application_id
                        });
                        break;
                    case "CREATOR_MONETIZATION_RESTRICTIONS_UPDATE":
                        M({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                            guildId: t.guild_id,
                            restrictions: t.restrictions
                        });
                        break;
                    case "BILLING_REFERRAL_TRIAL_OFFER_UPDATE":
                        M({
                            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
                            userTrialOfferId: t.user_trial_offer_id,
                            recipientId: t.recipient_id
                        });
                        break;
                    case "SPEED_TEST_CREATE":
                        M({
                            type: "SPEED_TEST_CREATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            rtcServerId: t.rtc_server_id,
                            paused: t.paused
                        });
                        break;
                    case "SPEED_TEST_SERVER_UPDATE":
                        M({
                            type: "SPEED_TEST_SERVER_UPDATE",
                            streamKey: t.stream_key,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "SPEED_TEST_UPDATE":
                        M({
                            type: "SPEED_TEST_UPDATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            paused: t.paused
                        });
                        break;
                    case "SPEED_TEST_DELETE":
                        M({
                            type: "SPEED_TEST_DELETE",
                            streamKey: t.stream_key,
                            unavailable: t.unavailable,
                            reason: t.reason
                        });
                        break;
                    case "LAST_MESSAGES":
                        M({
                            type: "MESSAGE_PREVIEWS_LOADED",
                            guildId: t.guild_id,
                            messages: t.messages
                        });
                        break;
                    case "AUTHENTICATOR_UPDATE":
                        M({
                            type: "AUTHENTICATOR_UPDATE",
                            credential: t
                        });
                        break;
                    case "AUTHENTICATOR_CREATE":
                        M({
                            type: "AUTHENTICATOR_CREATE",
                            credential: t
                        });
                        break;
                    case "AUTHENTICATOR_DELETE":
                        M({
                            type: "AUTHENTICATOR_DELETE",
                            credential: t
                        });
                        break;
                    case "INVENTORY_PACK_UPDATE":
                        M({
                            type: "INVENTORY_PACK_UPDATE",
                            pack: c.default.fromServer(t)
                        });
                        break;
                    case "INVENTORY_PACK_DELETE":
                        M({
                            type: "INVENTORY_PACK_DELETE",
                            pack: c.default.fromServer(t)
                        });
                        break;
                    case "GAME_INVITE_CREATE":
                        M({
                            type: "GAME_INVITE_CREATE",
                            gameInvite: t
                        });
                        break;
                    case "GAME_INVITE_DELETE":
                        M({
                            type: "GAME_INVITE_DELETE",
                            inviteId: t.invite_id
                        })
                }
            }

            function M(e) {
                r.default.dispatch(e).catch(t => O.socket.resetSocketOnError(t, e.type))
            }

            function w(e, t, i) {
                let {
                    roles: n,
                    nick: a,
                    avatar: r,
                    flags: l,
                    premium_since: o,
                    pending: d,
                    joined_at: u,
                    communication_disabled_until: c,
                    unusual_dm_activity_until: _
                } = i, h = T.default.getMember(e, t.id);
                (!(null != h && h.nick === a && h.avatar === r && s.isEqual(h.roles, n)) || h.premiumSince !== o || h.isPending !== d || h.joinedAt !== u || h.communicationDisabledUntil !== c || h.flags !== l || h.unusualDMActivityUntil !== _) && M({
                    type: "GUILD_MEMBER_ADD",
                    guildId: e,
                    user: t,
                    roles: n,
                    nick: a,
                    avatar: r,
                    premiumSince: o,
                    isPending: d,
                    joinedAt: u,
                    communicationDisabledUntil: c,
                    unusualDMActivityUntil: _,
                    flags: l
                })
            }

            function G(e) {
                let {
                    member: t,
                    mentions: i,
                    author: n,
                    guild_id: s
                } = e;
                null != t && w(s, n, t), null != i && i.forEach(e => {
                    if (null != e.member) {
                        let {
                            member: t
                        } = e;
                        delete e.member, w(s, e, t)
                    }
                })
            }

            function V(e) {
                return e.map(e => ({
                    sessionId: e.session_id,
                    lastModified: e.last_modified,
                    status: e.status,
                    activities: e.activities,
                    active: !!e.active,
                    clientInfo: e.client_info,
                    broadcast: e.broadcast
                }))
            }

            function B() {
                O.socket.isSessionEstablished() && I.default.getPendingLobbies().forEach(e => {
                    O.socket.lobbyConnect(e.id, e.secret)
                })
            }

            function H(e) {
                let {
                    guildId: t,
                    user: i,
                    status: n,
                    activities: s,
                    clientStatus: a,
                    broadcast: r
                } = e;
                U.add({
                    guildId: t,
                    user: i,
                    status: n,
                    clientStatus: a,
                    activities: s,
                    broadcast: r
                })
            }
        },
        583702: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                StreamRTCAnalyticsContext: function() {
                    return C
                },
                default: function() {
                    return y
                }
            });
            var n = i("917351"),
                s = i.n(n),
                a = i("913144"),
                r = i("997722"),
                l = i("422791"),
                o = i("56947"),
                d = i("386045"),
                u = i("808122"),
                c = i("845579"),
                _ = i("271938"),
                h = i("42203"),
                E = i("985365"),
                p = i("945956"),
                m = i("590401"),
                f = i("599110"),
                S = i("104478"),
                T = i("374014"),
                g = i("796887"),
                I = i("49111"),
                A = i("353927");
            class C {
                setActionContext(e) {
                    this.actionContext = e
                }
                trackViewerCount(e) {
                    this.maxViewers = Math.max(e, this.maxViewers)
                }
                constructor({
                    streamRegion: e,
                    streamApplication: t,
                    streamSourceType: i,
                    actionContext: n,
                    numViewers: s,
                    isBroadcast: a = !1
                }) {
                    this.streamRegion = e, this.streamApplication = t, this.streamSourceType = i, this.actionContext = n, this.maxViewers = s, this.isBroadcast = a
                }
            }
            class y extends r.default {
                get isOwner() {
                    let {
                        ownerId: e
                    } = this._streamContext;
                    return _.default.getId() === e
                }
                destroy(e) {
                    this._videoStreamStats.stop(), this._trackVideoEndStats(e), this._updateVideoStreamId.cancel(), this._updateVideoStreamId(null, null), this._updateVideoStreamId.flush(), super.destroy()
                }
                streamUpdate(e) {
                    let t = this._videoQuality;
                    null != t && (e ? t.pause() : t.resume())
                }
                layoutChange(e) {
                    this._videoStreamStats.layoutChange(e)
                }
                getVideoStats() {
                    let {
                        ownerId: e
                    } = this._streamContext, t = this._videoQuality;
                    if (null != t) {
                        var i;
                        let {
                            duration: n,
                            avg_bitrate: s,
                            avg_fps: a,
                            avg_resolution: r
                        } = this.isOwner ? t.getOutboundStats()[0] : null !== (i = t.getInboundStats(e)) && void 0 !== i ? i : {};
                        return {
                            duration: n,
                            avg_bitrate: s,
                            avg_fps: a,
                            avg_resolution: r
                        }
                    }
                    return null
                }
                getRegion() {
                    return this.analyticsContext.streamRegion
                }
                getMaxViewers() {
                    return this.analyticsContext.maxViewers
                }
                _initializeEvents() {
                    let e = !1;
                    this.on(l.RTCConnectionEvent.State, (e, t, i) => {
                        a.default.wait(() => a.default.dispatch({
                            type: "RTC_CONNECTION_STATE",
                            state: e,
                            ...t,
                            ...i,
                            streamKey: this._streamKey
                        }))
                    }), this.on(l.RTCConnectionEvent.Video, (t, i, n, s, a) => {
                        let r = (0, T.decodeStreamKey)(this._streamKey);
                        r.guildId === t && r.channelId === i && r.ownerId === n && (null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), e = !0), this._updateVideoStreamId(s, a))
                    }), this.on(l.RTCConnectionEvent.VideoSourceQualityChanged, (e, t, i, n, s, r) => {
                        a.default.wait(() => a.default.dispatch({
                            type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                            guildId: e,
                            channelId: t,
                            senderUserId: i,
                            maxResolution: n,
                            maxFrameRate: s,
                            context: r
                        }))
                    })
                }
                _getStreamAnalyticsProperties() {
                    let {
                        streamRegion: e,
                        streamApplication: t,
                        streamSourceType: i,
                        actionContext: n,
                        isBroadcast: s
                    } = this.analyticsContext, {
                        ownerId: a,
                        guildId: r
                    } = this._streamContext, l = m.default.getRegion(p.default.getHostname()), o = c.BroadcastAutoBroadcast.getSetting();
                    return {
                        channel_id: this.channelId,
                        rtc_connection_id: this.getRTCConnectionId(),
                        media_session_id: this.getMediaSessionId(),
                        parent_media_session_id: this.parentMediaSessionId,
                        sender_user_id: a,
                        context: A.MediaEngineContextTypes.STREAM,
                        guild_id: r,
                        stream_region: e,
                        stream_source_type: i,
                        guild_region: l,
                        participant_type: this.isOwner ? "streamer" : "receiver",
                        share_application_name: null != t ? t.name : null,
                        share_application_id: null != t ? t.id : null,
                        share_application_executable: null != t ? t.exe : null,
                        video_layout: this._videoStreamStats.getLayout(),
                        client_event_source: n,
                        is_broadcast: s,
                        auto_broadcast_enabled: this.isOwner ? o : null
                    }
                }
                _trackVideoStartStats() {
                    let e = this.isOwner ? (0, g.default)() : null;
                    f.default.track(I.AnalyticEvents.VIDEO_STREAM_STARTED, {
                        ...this._getStreamAnalyticsProperties(),
                        ...e,
                        connection_type: E.default.getType(),
                        effective_connection_speed: E.default.getEffectiveConnectionSpeed(),
                        service_provider: E.default.getServiceProvider()
                    })
                }
                _trackVideoEndStats(e) {
                    let t = h.default.getChannel(this.channelId),
                        i = null != t ? t.type : null,
                        {
                            ownerId: n
                        } = this._streamContext,
                        s = null,
                        a = null,
                        r = null,
                        l = this._videoQuality;
                    null != l && (s = this.isOwner ? l.getOutboundStats()[0] : l.getInboundStats(n), a = l.getNetworkStats(), r = this.isOwner ? l.getCodecUsageStats("streamer", this.userId) : l.getCodecUsageStats("receiver", n));
                    let c = (0, o.areClipsEnabled)(),
                        _ = d.default.getSettings(),
                        E = this.isOwner ? {
                            clips_enabled: _.clipsEnabled && c,
                            clips_buffer_length: _.clipsLength
                        } : {},
                        p = this.isOwner ? {
                            bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
                        } : {};
                    f.default.track(I.AnalyticEvents.VIDEO_STREAM_ENDED, {
                        ...s,
                        ...r,
                        ...a,
                        ...this._videoStreamStats.getStats(),
                        ...this._soundshareStats.getStats(),
                        ...this._getStreamAnalyticsProperties(),
                        ...E,
                        ...p,
                        channel_type: i,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        device_performance_class: this.isOwner ? (0, u.getMediaPerformanceClass)() : null
                    })
                }
                _getExtraConnectionOptions() {
                    return {
                        streamUserId: (0, T.decodeStreamKey)(this._streamKey).ownerId
                    }
                }
                constructor({
                    sessionId: e,
                    streamKey: t,
                    serverId: i,
                    initialLayout: n,
                    analyticsContext: r,
                    isStreamer: l,
                    parentMediaSessionId: o
                }) {
                    let d = (0, T.decodeStreamKey)(t),
                        {
                            guildId: u,
                            channelId: c
                        } = d;
                    super({
                        userId: _.default.getId(),
                        sessionId: e,
                        guildId: u,
                        channelId: c,
                        context: A.MediaEngineContextTypes.STREAM,
                        rtcServerId: i,
                        parentMediaSessionId: o
                    }), this._streamContext = d, this._streamKey = t, this._isStreamer = l, this._videoStreamStats = new S.default(n, this.isOwner), this.analyticsContext = r, this._updateVideoStreamId = s.debounce((e, t) => {
                        let {
                            guildId: i,
                            channelId: n,
                            ownerId: s
                        } = (0, T.decodeStreamKey)(this._streamKey);
                        a.default.wait(() => a.default.dispatch({
                            type: "RTC_CONNECTION_VIDEO",
                            guildId: i,
                            channelId: n,
                            userId: s,
                            streamId: e,
                            rtcServerId: t,
                            context: A.MediaEngineContextTypes.STREAM
                        }))
                    }, 200), this._videoStreamStats.start(), this._initializeEvents()
                }
            }
        },
        104478: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("398183"),
                s = i("862337"),
                a = i("268491"),
                r = i("49111");

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return null != e ? Math.round(e) : t
            }
            class o {
                start() {
                    let {
                        resolution: e,
                        fps: t
                    } = a.default.getState();
                    this._targetResolution = e, this._targetFPS = t, this._statInterval.start(1e3, this._sampleStats), this._lastLayoutChanged = (0, n.now)()
                }
                stop() {
                    this._statInterval.stop(), this._streamEnd = (0, n.now)(), this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1e3)
                }
                layoutChange(e) {
                    if (e === this._lastLayout || null != this._streamEnd) return;
                    let t = (0, n.now)();
                    this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1e3), this._layoutChanges++, this._lastLayout = e, this._lastLayoutChanged = t
                }
                getLayout() {
                    return this._lastLayout
                }
                getStats() {
                    let e = {
                        num_layout_changes: this._layoutChanges,
                        duration_layout_fullscreen: l(this._layoutBuckets[r.StreamLayouts.FULL_SCREEN]),
                        duration_layout_theatre: l(this._layoutBuckets[r.StreamLayouts.THEATRE]),
                        duration_layout_pip: l(this._layoutBuckets[r.StreamLayouts.PIP]),
                        duration_layout_popout: l(this._layoutBuckets[r.StreamLayouts.POPOUT]),
                        duration_layout_portrait: l(this._layoutBuckets[r.StreamLayouts.PORTRAIT]),
                        duration_layout_landscape: l(this._layoutBuckets[r.StreamLayouts.LANDSCAPE]),
                        duration_layout_minimized: l(this._layoutBuckets[r.StreamLayouts.MINIMIZED])
                    };
                    return this._isSender ? {
                        ...e,
                        target_fps: this._targetFPS,
                        target_resolution_height: this._targetResolution,
                        stream_settings_changed: this._streamSettingsChanged
                    } : e
                }
                constructor(e, t) {
                    this._targetResolution = 0, this._targetFPS = 0, this._streamSettingsChanged = !1, this._lastLayoutChanged = 0, this._layoutChanges = 0, this._incrementLayout = (e, t) => {
                        null == this._layoutBuckets[e] && (this._layoutBuckets[e] = 0), this._layoutBuckets[e] += t
                    }, this._sampleStats = () => {
                        let {
                            resolution: e,
                            fps: t
                        } = a.default.getState();
                        this._streamSettingsChanged = e !== this._targetResolution || t !== this._targetFPS
                    }, this._isSender = t, this._statInterval = new s.Interval, this._lastLayout = e, this._layoutBuckets = {}
                }
            }
        },
        582415: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getStreamerActivity: function() {
                    return a
                },
                getStreamerApplication: function() {
                    return r
                }
            });
            var n = i("49111");

            function s(e) {
                return e.type === n.ActivityTypes.PLAYING
            }

            function a(e, t) {
                var i;
                return null != e ? (i = e.ownerId, t.findActivity(i, s)) : null
            }

            function r(e, t) {
                if (null == e) return null;
                let i = a(e, t);
                return null == i ? null : {
                    id: i.application_id,
                    name: i.name
                }
            }
        },
        796887: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var n = i("939398").getDesktopSourceMetadata
        },
        871336: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n, s, a, r, l = i("666038"),
                o = i("858619"),
                d = i("315102");
            (n = a || (a = {}))[n.GUILD = 0] = "GUILD", n[n.USER = 1] = "USER", (s = r || (r = {}))[s.DEFAULT = 48] = "DEFAULT";
            class u extends l.default {
                static fromServer(e) {
                    let t = {
                        id: e.id,
                        name: e.name,
                        icon: e.icon,
                        content: {
                            emojis: []
                        },
                        author: {
                            id: e.id,
                            type: a.GUILD
                        },
                        emojiById: {}
                    };
                    return e.content.emojis.forEach(i => {
                        let n = {
                            animated: i.animated,
                            available: i.available,
                            id: i.id,
                            name: i.name,
                            require_colons: i.require_colons,
                            url: d.default.getEmojiURL({
                                id: i.id,
                                animated: i.animated,
                                size: r.DEFAULT
                            }),
                            allNamesString: ":".concat(i.name, ":"),
                            type: o.EmojiTypes.PACK,
                            packId: e.id
                        };
                        t.emojiById[i.id] = n, t.content.emojis.push(n)
                    }), new u(t)
                }
                constructor(e) {
                    super(), this.id = e.id, this.name = e.name, this.icon = e.icon, this.author = e.author, this.content = e.content, this.emojiById = e.emojiById
                }
            }
        },
        155084: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("615361"),
                s = i("872717"),
                a = i("773336"),
                r = i("827032"),
                l = i("49111");
            let o = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var d = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: i,
                            tags: s
                        } = e,
                        l = {
                            name: i,
                            tags: (0, r.getGlobalTagsArray)()
                        };
                    null != s && s.forEach(e => {
                        l.tags.push(e)
                    });
                    let d = function() {
                        if ((0, a.isWeb)()) return "web";
                        {
                            let e = (0, a.getPlatformName)();
                            return o.has(e) ? e : null
                        }
                    }();
                    null != d && l.tags.push("platform:".concat(d));
                    let u = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return n.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != u && l.tags.push("release_channel:".concat(u)), this._metrics.push(l), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        s.default.post({
                            url: l.Endpoints.METRICS,
                            body: {
                                metrics: e
                            },
                            retries: 1
                        }).catch(t => {
                            this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e])
                        })
                    }
                    this._metrics = []
                }
                constructor() {
                    this._metrics = [], this._intervalId = setInterval(() => {
                        this._flush()
                    }, 12e4)
                }
            }
        },
        925880: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            });
            var n = i("714617"),
                s = i.n(n),
                a = i("446674"),
                r = i("913144"),
                l = i("77173");
            let o = [l.default],
                d = [];

            function u() {
                let e = [];
                for (let t of o) {
                    let i = t.getActivity();
                    null != i && e.push(i)
                }
                return !s(e, d) && (d = e, !0)
            }
            class c extends a.default.Store {
                initialize() {
                    this.syncWith(o, u)
                }
                getActivities() {
                    return d
                }
            }
            c.displayName = "FirstPartyRichPresenceStore";
            var _ = new c(r.default)
        },
        613691: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                SpotifyAPI: function() {
                    return _
                },
                getAccessToken: function() {
                    return h
                },
                subscribePlayerStateNotifications: function() {
                    return function e(t, i, n) {
                        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                        return _.put(t, i, {
                            url: d.SpotifyEndpoints.NOTIFICATIONS_PLAYER,
                            query: {
                                connection_id: n
                            }
                        }).catch(r => a <= 0 ? Promise.reject(r) : (0, s.timeoutPromise)(5e3).then(() => e(t, i, n, a - 1)))
                    }
                },
                getProfile: function() {
                    return E
                },
                getDevices: function() {
                    return p
                },
                play: function() {
                    return m
                },
                pause: function() {
                    return f
                },
                fetchIsSpotifyProtocolRegistered: function() {
                    return S
                },
                setActiveDevice: function() {
                    return T
                }
            });
            var n = i("872717"),
                s = i("862337"),
                a = i("913144"),
                r = i("269180"),
                l = i("773336"),
                o = i("155815"),
                d = i("450484"),
                u = i("49111");

            function c(e, t, i, n) {
                let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
                return e(n = {
                    ...n,
                    headers: {
                        authorization: "Bearer ".concat(i)
                    }
                }).then(e => 202 === e.status ? Promise.reject(e) : e).catch(i => {
                    let r = !0 !== n.onlyRetryOnAuthorizationErrors && 202 === i.status;
                    return (401 === i.status || r) && a > 0 ? (202 === i.status ? (0, s.timeoutPromise)(5e3) : Promise.resolve()).then(() => h(t)).then(i => {
                        let {
                            body: {
                                access_token: s
                            }
                        } = i;
                        return c(e, t, s, n, a - 1)
                    }).then(e => new Promise(t => setImmediate(() => t(e)))) : Promise.reject(i)
                })
            }
            let _ = {
                get: c.bind(null, n.default.get),
                put: c.bind(null, n.default.put)
            };

            function h(e) {
                return n.default.get({
                    url: u.Endpoints.CONNECTION_ACCESS_TOKEN(u.PlatformTypes.SPOTIFY, e),
                    oldFormErrors: !0
                }).catch(t => {
                    if (401 === t.status) a.default.dispatch({
                        type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
                        accountId: e
                    });
                    else if (429 === t.status) {
                        let i = 1e3 * t.headers["retry-after"],
                            n = isNaN(i) || 0 === i ? 5e3 : i;
                        return (0, s.timeoutPromise)(n).then(() => h(e))
                    }
                    return Promise.reject(t)
                }).then(t => {
                    let {
                        access_token: i
                    } = t.body;
                    return a.default.dispatch({
                        type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
                        accountId: e,
                        accessToken: i
                    }), t
                })
            }

            function E(e, t) {
                return _.get(e, t, {
                    url: d.SpotifyEndpoints.PROFILE
                }).then(t => (a.default.dispatch({
                    type: "SPOTIFY_PROFILE_UPDATE",
                    accountId: e,
                    isPremium: "premium" === t.body.product
                }), t))
            }

            function p(e, t) {
                return _.get(e, t, {
                    url: d.SpotifyEndpoints.PLAYER_DEVICES
                }).then(t => (t.body && a.default.dispatch({
                    type: "SPOTIFY_SET_DEVICES",
                    accountId: e,
                    devices: t.body.devices
                }), t))
            }

            function m(e, t, i) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = d.SpotifyEndpoints.PLAYER_OPEN(d.SpotifyResourceTypes.TRACK, i, !1),
                    {
                        deviceId: r,
                        position: l,
                        contextUri: o,
                        repeat: u
                    } = n;
                return _.put(e, t, {
                    url: d.SpotifyEndpoints.PLAYER_PLAY,
                    query: {
                        device_id: r
                    },
                    body: {
                        context_uri: null != o ? o : void 0,
                        uris: null == o ? [s] : void 0,
                        offset: null != o ? {
                            uri: s
                        } : void 0,
                        position_ms: null != l ? l : 0
                    }
                }).then(i => null == u ? i : _.put(e, t, {
                    url: d.SpotifyEndpoints.PLAYER_REPEAT,
                    query: {
                        device_id: r,
                        state: u ? "context" : "off"
                    }
                })).then(e => (a.default.dispatch({
                    type: "SPOTIFY_PLAYER_PLAY",
                    id: i,
                    position: null != l ? l : 0
                }), e))
            }

            function f(e, t) {
                return _.put(e, t, {
                    url: d.SpotifyEndpoints.PLAYER_PAUSE
                }).then(e => (a.default.dispatch({
                    type: "SPOTIFY_PLAYER_PAUSE"
                }), e))
            }

            function S() {
                !o.default.isProtocolRegistered() && (0, l.isDesktop)() && r.default.isProtocolRegistered(d.SPOTIFY_APP_PROTOCOL).then(e => {
                    a.default.dispatch({
                        type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
                        isRegistered: e
                    })
                })
            }

            function T(e, t) {
                a.default.dispatch({
                    type: "SPOTIFY_SET_ACTIVE_DEVICE",
                    accountId: e,
                    deviceId: t
                })
            }
        },
        155815: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("446674"),
                s = i("913144");
            let a = !1;
            class r extends n.default.Store {
                isProtocolRegistered() {
                    return a
                }
            }
            r.displayName = "SpotifyProtocolStore";
            var l = new r(s.default, {
                SPOTIFY_SET_PROTOCOL_REGISTERED: function(e) {
                    let {
                        isRegistered: t
                    } = e;
                    a = t
                }
            })
        },
        662285: function(e, t, i) {
            "use strict";
            let n, s, a;
            i.r(t), i.d(t, {
                default: function() {
                    return ed
                }
            });
            var r, l, o = i("917351"),
                d = i.n(o),
                u = i("981980"),
                c = i("446674"),
                _ = i("233736"),
                h = i("862337"),
                E = i("913144"),
                p = i("899633"),
                m = i("376556"),
                f = i("823704"),
                S = i("605250"),
                T = i("271938"),
                g = i("47319"),
                I = i("603699"),
                A = i("824563"),
                C = i("568307"),
                y = i("280168"),
                N = i("800762"),
                D = i("599110"),
                R = i("550368"),
                v = i("613691"),
                O = i("450484"),
                b = i("49111");
            let L = m.default.get(b.PlatformTypes.SPOTIFY),
                P = "hm://pusher/v1/connections/";
            (r = l || (l = {})).PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED", r.DEVICE_STATE_CHANGED = "DEVICE_STATE_CHANGED";
            let U = {
                    MESSAGE: "message",
                    PING: "ping",
                    PONG: "pong"
                },
                k = {
                    SINGLE: "single"
                },
                M = new S.default("Spotify"),
                w = new h.Timeout,
                G = new h.Timeout,
                V = new h.Timeout,
                B = new h.Timeout,
                H = new h.Timeout,
                F = {},
                z = {},
                Y = {},
                x = !1,
                W = null;

            function j() {
                for (let e in F) {
                    let t = F[e];
                    if (!t.connected || null == z[e]) continue;
                    let i = z[e].find(e => e.is_active);
                    if (null != i) return {
                        socket: t,
                        device: i
                    }
                }
            }

            function K(e) {
                E.default.dispatch({
                    type: "SPOTIFY_PLAYER_STATE",
                    accountId: e,
                    track: null,
                    volumePercent: 0,
                    isPlaying: !1,
                    repeat: !1,
                    position: 0,
                    context: null
                })
            }

            function q(e) {
                return A.default.findActivity(e, e => null != e.party && null != e.party.id && (0, O.isSpotifyParty)(e.party.id))
            }
            let Q = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
            class J {
                get connected() {
                    return null != this.socket && Q.has(this.socket.readyState)
                }
                connect() {
                    !this.connected && !this._requestedConnect && (M.info("WS Connecting"), this._requestedDisconnect = !1, this._requestedConnect = !0, er(this.accountId, this.accessToken).then(() => {
                        this._requestedConnect = !1, this.socket = new WebSocket("".concat("wss://dealer.spotify.com/?access_token=").concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
                    }).catch(e => {
                        M.error(e), this._requestedConnect = !1, this.handleClose()
                    }))
                }
                disconnect() {
                    this._requestedDisconnect = !0, this.backoff.cancel();
                    try {
                        var e;
                        null === (e = this.socket) || void 0 === e || e.close()
                    } catch (e) {}
                }
                ping() {
                    var e;
                    this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({
                        type: U.PING
                    })))
                }
                handleOpen() {
                    M.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(3e4, () => this.ping()), (0, v.getProfile)(this.accountId, this.accessToken), (0, v.getDevices)(this.accountId, this.accessToken)
                }
                handleMessage(e) {
                    let {
                        data: t
                    } = e;
                    if ("string" != typeof t) return;
                    let {
                        type: i,
                        uri: n,
                        payloads: s
                    } = JSON.parse(t);
                    switch (i) {
                        case U.MESSAGE:
                            if ("string" == typeof n && n.startsWith(P)) this.connectionId = decodeURIComponent(n.split(P)[1]), (0, v.subscribePlayerStateNotifications)(this.accountId, this.accessToken, this.connectionId);
                            else if (Array.isArray(s)) {
                                for (let {
                                        events: e
                                    }
                                    of s)
                                    if (null != e)
                                        for (let t of e) this.handleEvent(t)
                            }
                        case U.PONG:
                    }
                }
                handleClose() {
                    if (this.pingInterval.stop(), !this._requestedDisconnect) try {
                        let e = this.backoff.fail(() => {
                            !this._requestedDisconnect && this.connect()
                        });
                        M.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"))
                    } catch (e) {}
                }
                handleEvent(e) {
                    let {
                        type: t,
                        event: i
                    } = e;
                    switch (t) {
                        case l.PLAYER_STATE_CHANGED:
                            null != i && null != i.state && ea(this.accountId, this.accessToken, i.state);
                            break;
                        case l.DEVICE_STATE_CHANGED:
                            this.handleDeviceStateChange()
                    }
                }
                constructor(e, t) {
                    this._requestedDisconnect = !1, this._requestedConnect = !1, this.handleDeviceStateChange = d.throttle(() => {
                        (0, v.getDevices)(this.accountId, this.accessToken), er(this.accountId, this.accessToken)
                    }, 3e3), this.accountId = e, this.accessToken = t, this.pingInterval = new h.Interval, this.backoff = new u.default(void 0, 6e4), this.connect()
                }
            }

            function X(e, t) {
                e in F ? (F[e].accessToken = t, M.info("Updated account access token: ".concat(e))) : (F[e] = new J(e, t), M.info("Added account: ".concat(e)))
            }

            function Z(e) {
                if (!(e in F)) return;
                F[e].disconnect(), delete F[e];
                let t = Y[e];
                null != t && null != n && t.track.id === n.track.id && (n = null), delete Y[e], M.info("Removed account: ".concat(e))
            }

            function $(e, t) {
                for (let i of z[e]) i.is_active = i.id === t
            }

            function ee(e, t, i) {
                let n = j();
                if (null == n) return !1;
                let {
                    socket: a,
                    device: r
                } = n, {
                    sync_id: l,
                    party: o,
                    timestamps: d
                } = t;
                if (null == l || null == o || null == o.id || !(0, O.isSpotifyParty)(o.id)) return !1;
                let u = null != d && null != d.start ? d.start : Date.now(),
                    c = Math.max(0, Date.now() - u),
                    _ = !1,
                    h = Y[a.accountId];
                null != h && !1 === h.repeat && (_ = null), (0, v.play)(a.accountId, a.accessToken, l, {
                    position: +c,
                    deviceId: r.id,
                    repeat: _
                }), s = {
                    userId: e,
                    partyId: o.id,
                    trackId: l,
                    startTime: u
                };
                let E = "presence change";
                i && (E = "started", D.default.track(b.AnalyticEvents.SPOTIFY_LISTEN_ALONG_STARTED, {
                    party_id: o.id,
                    other_user_id: e
                })), M.info("Listen along ".concat(E, ": ").concat(a.accountId, " to ").concat(e, " playing ").concat(l, " on ").concat(r.name))
            }

            function et() {
                D.default.track(b.AnalyticEvents.SPOTIFY_LISTEN_ALONG_ENDED, {
                    party_id: null != s ? s.partyId : null,
                    other_user_id: null != s ? s.userId : null
                });
                let e = null != s ? s.trackId : null;
                s = null, M.info("Listen along stopped");
                let t = j();
                if (null == t) return;
                let {
                    socket: i
                } = t, n = Y[i.accountId];
                null != n && n.track.id === e && (0, v.pause)(i.accountId, i.accessToken)
            }

            function ei() {
                let e = Object.keys(F),
                    t = g.default.getAccounts().filter(e => {
                        let {
                            type: t
                        } = e;
                        return t === b.PlatformTypes.SPOTIFY
                    });
                if (null == t) return !1;
                let i = t.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                });
                for (let t of e) !i.includes(t) && Z(t);
                let s = !1;
                for (let i of t)
                    if (null != n && n.account.id === i.id && (n.account = i, s = !0), !e.includes(i.id)) {
                        if (null != i.accessToken) {
                            X(i.id, i.accessToken);
                            continue
                        }(0, v.getAccessToken)(i.id)
                    } return s
            }

            function en() {
                if (null == n) return;
                let e = j();
                if (null == e) return;
                let {
                    socket: t
                } = e;
                x = !0, (0, v.pause)(t.accountId, t.accessToken), D.default.track(b.AnalyticEvents.SPOTIFY_AUTO_PAUSED), M.info("Playback auto paused")
            }

            function es(e) {
                if (e === T.default.getId()) {
                    let t = N.default.isCurrentClientInVoiceChannel(),
                        i = (0, p.getIsSpeaking)({
                            userId: e,
                            checkSoundSharing: !0,
                            checkSoundboardSounds: !1
                        });
                    t && i && null != n ? (w.start(3e4, en, !1), G.stop()) : G.start(100, () => w.stop(), !1)
                }
                return !1
            }

            function ea(e, t, i) {
                let n, s, {
                    device: a,
                    progress_ms: r,
                    is_playing: l,
                    repeat_state: o,
                    item: d,
                    context: u
                } = i;
                if (null != d && d.type === O.SpotifyResourceTypes.TRACK) {
                    let e = d.id;
                    null != d.linked_from && null != d.linked_from.id && (e = d.linked_from.id), n = {
                        id: e,
                        name: d.name,
                        duration: d.duration_ms,
                        album: {
                            id: d.album.id,
                            name: d.album.name,
                            image: d.album.images[0]
                        },
                        artists: d.artists,
                        isLocal: d.is_local || !1
                    }
                }
                if (null != a && !0 !== a.is_active && (a = {
                        ...a,
                        is_active: !0
                    }), null != u && [O.SpotifyResourceTypes.PLAYLIST, O.SpotifyResourceTypes.ALBUM].includes(u.type)) {
                    let i = eo.getPlayerState(e);
                    s = null != i && null != i.context && i.context.uri === u.uri ? Promise.resolve(i.context) : u.type === O.SpotifyResourceTypes.ALBUM ? Promise.resolve(u) : v.SpotifyAPI.get(e, t, {
                        url: u.href
                    }).then(e => {
                        let {
                            body: t
                        } = e;
                        return t
                    }).catch(e => {
                        if (e && 404 === e.status) return null;
                        throw e
                    })
                } else s = Promise.resolve(void 0);
                return s.then(t => {
                    null != t && t.type === O.SpotifyResourceTypes.PLAYLIST && !t.public && (t = null), E.default.dispatch({
                        type: "SPOTIFY_PLAYER_STATE",
                        accountId: e,
                        track: n,
                        volumePercent: null != a ? a.volume_percent : 0,
                        isPlaying: l,
                        repeat: "off" !== o,
                        position: r,
                        context: t,
                        device: a
                    })
                })
            }

            function er(e, t) {
                return v.SpotifyAPI.get(e, t, {
                    url: O.SpotifyEndpoints.PLAYER,
                    onlyRetryOnAuthorizationErrors: !0
                }).then(i => {
                    let n = i.body;
                    null != n ? ea(e, t, n).then(() => i) : K(e)
                }).catch(() => K(e))
            }
            class el extends c.default.Store {
                initialize() {
                    this.waitFor(g.default, y.default), this.syncWith([A.default], () => (function() {
                        if (null == s) return !1;
                        let e = j();
                        if (null == e) return !1;
                        let {
                            userId: t
                        } = s, i = q(t);
                        if (null == i) return V.start(3e5, () => {
                            null != s && s.userId === t && (0, f.default)()
                        }), !1;
                        V.stop();
                        let {
                            sync_id: n,
                            timestamps: a,
                            party: r
                        } = i, l = null != n && s.trackId !== n, o = null != a && s.startTime !== a.start;
                        return l || o ? ee(t, i, !1) : null != r && r.id !== s.partyId && (s.partyId = r.id, !0)
                    })()), (0, v.fetchIsSpotifyProtocolRegistered)()
                }
                hasConnectedAccount() {
                    return Object.keys(F).length > 0
                }
                getActiveSocketAndDevice() {
                    return j()
                }
                getPlayableComputerDevices() {
                    let e = [];
                    for (let t in F) {
                        let i = F[t];
                        if (!i.connected || null == z[t]) continue;
                        let n = z[t].find(e => !e.is_restricted && "Computer" === e.type);
                        null != n && e.push({
                            socket: i,
                            device: n
                        })
                    }
                    return e
                }
                canPlay(e) {
                    let {
                        sync_id: t,
                        party: i
                    } = e;
                    return null != j() && null != t && null != i && null != i.id && (0, O.isSpotifyParty)(i.id)
                }
                getSyncingWith() {
                    return s
                }
                wasAutoPaused() {
                    return x
                }
                getLastPlayedTrackId() {
                    return a
                }
                getTrack() {
                    return null != n ? n.track : null
                }
                getPlayerState(e) {
                    return Y[e]
                }
                shouldShowActivity() {
                    return null != n && n.account.showActivity && !I.default.isIdle()
                }
                getActivity() {
                    let e, t, i;
                    if (null == n) return null != s ? q(s.userId) : null;
                    let {
                        track: {
                            artists: a,
                            album: r,
                            name: l,
                            id: o,
                            duration: d,
                            isLocal: u
                        },
                        startTime: c,
                        context: _
                    } = n, h = a.slice(0, 5);
                    a.length > 0 && (e = h.map(e => {
                        let {
                            name: t
                        } = e;
                        return t.replace(/;/g, "")
                    }).join("; "));
                    let E = {},
                        p = null != r.image ? (0, R.getAssetFromImageURL)(b.PlatformTypes.SPOTIFY, r.image.url) : null;
                    null != r.image && null != p && (E.large_image = p), "single" !== r.type && (E.large_text = r.name), null != _ && (t = _.uri), i = null != s && null != s.partyId ? s.partyId : "".concat(O.SPOTIFY_PARTY_PREFIX).concat(T.default.getId());
                    let m = l.length > 128 ? l.substring(0, 125) + "..." : l,
                        f = {
                            name: L.name,
                            assets: E,
                            details: m,
                            state: e,
                            timestamps: {
                                start: c,
                                end: c + d
                            },
                            party: {
                                id: i
                            }
                        };
                    return !u && (f.sync_id = o, f.flags = b.ActivityFlags.PLAY | b.ActivityFlags.SYNC, f.metadata = {
                        context_uri: t,
                        album_id: r.id,
                        artist_ids: h.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })
                    }), f
                }
            }
            el.displayName = "SpotifyStore";
            let eo = new el(E.default, {
                USER_CONNECTIONS_UPDATE: ei,
                CONNECTION_OPEN: ei,
                SPOTIFY_ACCOUNT_ACCESS_TOKEN: function(e) {
                    let {
                        accountId: t,
                        accessToken: i
                    } = e;
                    return X(t, i), !1
                },
                SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function(e) {
                    let {
                        accountId: t
                    } = e;
                    Z(t)
                },
                SPOTIFY_PROFILE_UPDATE: function(e) {
                    let {
                        accountId: t,
                        isPremium: i
                    } = e, n = F[t];
                    if (null == n) return !1;
                    n.isPremium = i, M.info("Profile updated for ".concat(t, ": isPremium = ").concat(i))
                },
                SPOTIFY_PLAYER_STATE: function(e) {
                    var t, i;
                    let {
                        accountId: a,
                        isPlaying: r,
                        repeat: l,
                        track: o,
                        position: u,
                        device: c,
                        context: h
                    } = e, E = !1;
                    if (null != c) {
                        if (null != z[a]) {
                            let e = z[a].find(e => {
                                let {
                                    id: t
                                } = e;
                                return t === c.id
                            });
                            null == e ? (z[a].push(c), E = !0) : !(0, _.default)(e, c) && (Object.assign(e, c), E = !0), $(a, c.id)
                        } else z[a] = [c], E = !0
                    }
                    r ? null === (i = W) || void 0 === i || i.start(3e4, en) : (o = null, null === (t = W) || void 0 === t || t.stop());
                    let p = g.default.getAccount(a, b.PlatformTypes.SPOTIFY);
                    if (null == p) return E;
                    let m = Y[a],
                        S = null != o ? {
                            account: p,
                            track: o,
                            startTime: function(e, t) {
                                let i = Date.now(),
                                    n = null != e ? e.startTime : 0,
                                    s = i - t;
                                return Math.abs(s - n) > 1500 ? s : n
                            }(m, u),
                            context: h,
                            repeat: l
                        } : null,
                        I = null != c && null != s && 0 === u && !r;
                    !I && (Y[a] = S);
                    let A = n;
                    if (n = d.values(Y).find(e => null != e), es(T.default.getId()), null == o || I ? B.stop() : B.start(o.duration - u + 5e3, () => K(p.id)), null != s && (!r && u > 0 || null == c || null != S && s.trackId !== S.track.id) ? (M.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(5e3, "ms")), H.start(5e3, () => {
                            M.info("Stopping listening along"), (0, f.default)(), K(p.id)
                        })) : H.isStarted() && (M.info("Listen along stop cancelled as playback of track resumed"), H.stop()), A === n || null == m && null == S || null != m && null != S && m.track.id === S.track.id && m.startTime === S.startTime) return E;
                    null != o && D.default.track(b.AnalyticEvents.ACTIVITY_UPDATED, {
                        party_platform: b.PlatformTypes.SPOTIFY,
                        track_id: o.id,
                        has_images: !0
                    })
                },
                SPOTIFY_PLAYER_PLAY: function(e) {
                    let {
                        id: t
                    } = e;
                    a = t
                },
                ACTIVITY_PLAY: function(e) {
                    let t, {
                            activity: i,
                            metadata: n
                        } = e,
                        a = j();
                    if (null == a) return !1;
                    let {
                        socket: r,
                        device: l
                    } = a, {
                        sync_id: o,
                        party: d
                    } = i;
                    if (null == o || null == d || null == d.id || !(0, O.isSpotifyParty)(d.id)) return !1;
                    null != n && (t = n.context_uri), null != s && et(), (0, v.play)(r.accountId, r.accessToken, o, {
                        contextUri: t,
                        deviceId: l.id
                    }), M.info("Play started: ".concat(r.accountId, " playing ").concat(o, " on ").concat(l.name))
                },
                ACTIVITY_SYNC: function(e) {
                    let {
                        activity: t,
                        userId: i
                    } = e;
                    return ee(i, t, !0)
                },
                ACTIVITY_SYNC_STOP: et,
                SPOTIFY_SET_DEVICES: function(e) {
                    let {
                        accountId: t,
                        devices: i
                    } = e;
                    z[t] = i, M.info("Devices updated for ".concat(t, ":"), i)
                },
                SPOTIFY_SET_ACTIVE_DEVICE: function(e) {
                    let {
                        accountId: t,
                        deviceId: i
                    } = e;
                    $(t, i)
                },
                SPEAKING: function(e) {
                    let {
                        userId: t
                    } = e;
                    return es(t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            userId: i
                        } = t;
                        return es(i) || e
                    }, !1)
                },
                MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
                    var t;
                    let {
                        settings: i
                    } = e;
                    if ((null == i ? void 0 : i.desktopSettings) != null) {
                        null === (t = W) || void 0 === t || t.stop();
                        let {
                            sourceId: e,
                            sound: n
                        } = null == i ? void 0 : i.desktopSettings, s = null != e && C.default.getObservedAppNameForWindow(e) === L.name;
                        s && n ? (W = new h.Interval).start(3e4, en) : W = null
                    }
                }
            });
            var ed = eo
        },
        118033: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                packStageChannelPartyId: function() {
                    return u
                },
                unpackStageChannelParty: function() {
                    return c
                },
                isStageActivity: function() {
                    return _
                },
                shouldShowActivity: function() {
                    return h
                }
            });
            var n = i("271938"),
                s = i("42203"),
                a = i("305961"),
                r = i("325861"),
                l = i("837979"),
                o = i("49111");
            let d = "stage:";

            function u(e, t) {
                let i = 0,
                    s = n.default.getId(),
                    l = r.default.isSpeaker(s, e.id);
                l && (i |= 1);
                let u = a.default.getGuild(e.getGuildId());
                null != u && (u.hasFeature(o.GuildFeatures.PARTNERED) && (i |= 2), u.hasFeature(o.GuildFeatures.VERIFIED) && (i |= 4));
                let c = i.toString(16);
                return "".concat(d).concat(e.guild_id, ":").concat(e.id, ":").concat(c, ":").concat(t.id)
            }

            function c(e) {
                if (null == e || null == e.party) return;
                let {
                    id: t,
                    size: i
                } = e.party;
                try {
                    if (null == t || !t.startsWith(d)) return;
                    let [, e, n, s, a] = t.split(":"), r = parseInt(s, 16);
                    return {
                        guildId: e,
                        channelId: n,
                        size: i,
                        userIsSpeaker: (1 & r) != 0,
                        guildIsPartnered: (2 & r) != 0,
                        guildIsVerified: (4 & r) != 0,
                        stageInstanceId: a
                    }
                } catch (e) {
                    return null
                }
            }

            function _(e) {
                return (null == e ? void 0 : e.application_id) === l.STAGE_APPLICATION_ID
            }

            function h(e) {
                let t = c(e);
                if (null == t) return !1;
                let {
                    channelId: i
                } = t, n = s.default.getChannel(i);
                return null != n
            }
        },
        77173: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return A
                }
            });
            var n = i("714617"),
                s = i.n(n),
                a = i("446674"),
                r = i("913144"),
                l = i("42203"),
                o = i("305961"),
                d = i("945956"),
                u = i("18494"),
                c = i("991170"),
                _ = i("488464"),
                h = i("998716"),
                E = i("118033"),
                p = i("834052"),
                m = i("819450"),
                f = i("837979"),
                S = i("49111");
            let T = null;

            function g() {
                let e = function() {
                    var e, t, i, n, s, a, r, d;
                    let g = u.default.getVoiceChannelId();
                    if (null == g) return null;
                    let I = p.default.getStageInstanceByChannel(g);
                    if (null == I) return null;
                    let A = l.default.getChannel(g);
                    if (null == A || !c.default.canEveryone(S.Permissions.VIEW_CHANNEL, A)) return null;
                    let C = o.default.getGuild(A.getGuildId());
                    if (null == C || !C.hasFeature(S.GuildFeatures.DISCOVERABLE)) return null;
                    let y = (0, E.packStageChannelPartyId)(A, I),
                        N = (null === (t = T) || void 0 === t ? void 0 : null === (e = t.party) || void 0 === e ? void 0 : e.id) === y ? T : null,
                        D = _.default.getMutableParticipants(A.id, h.StageChannelParticipantNamedIndex.SPEAKER),
                        R = D.filter(e => e.type === h.StageChannelParticipantTypes.STREAM).length,
                        v = D.length - R,
                        O = _.default.getParticipantCount(g) - R,
                        b = (null == N ? void 0 : null === (i = N.party) || void 0 === i ? void 0 : i.size) != null ? N.party.size[1] : 0;
                    return {
                        application_id: f.STAGE_APPLICATION_ID,
                        name: null !== (a = null !== (s = I.topic) && void 0 !== s ? s : A.topic) && void 0 !== a ? a : A.name,
                        type: (0, m.getStageHasMedia)(A.id) ? S.ActivityTypes.WATCHING : S.ActivityTypes.LISTENING,
                        timestamps: {
                            start: null !== (r = null == N ? void 0 : null === (n = N.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== r ? r : new Date().getTime()
                        },
                        assets: {
                            small_image: null !== (d = C.icon) && void 0 !== d ? d : void 0,
                            small_text: C.name
                        },
                        party: {
                            id: y,
                            size: [v, Math.max(O, b)]
                        }
                    }
                }();
                return !s(e, T) && (T = e, !0)
            }
            class I extends a.default.Store {
                initialize() {
                    this.waitFor(l.default, u.default, p.default, d.default)
                }
                getActivity() {
                    return T
                }
            }
            I.displayName = "StageChannelSelfRichPresenceStore";
            var A = new I(r.default, {
                CONNECTION_OPEN: g,
                STAGE_INSTANCE_CREATE: g,
                STAGE_INSTANCE_UPDATE: g,
                STAGE_INSTANCE_DELETE: g,
                VOICE_CHANNEL_SELECT: g,
                RTC_CONNECTION_STATE: function(e) {
                    var t, i, n, s;
                    let {
                        state: a
                    } = e, r = null !== (s = null === (n = T) || void 0 === n ? void 0 : null === (i = n.party) || void 0 === i ? void 0 : null === (t = i.size) || void 0 === t ? void 0 : t[1]) && void 0 !== s ? s : 0;
                    return a === S.RTCConnectionStates.RTC_CONNECTED && !(r > 0) && g()
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    if (null == T) return;
                    let i = (0, E.unpackStageChannelParty)(T);
                    null != i && null != t.find(e => e.channelId === i.channelId) && g()
                }
            })
        },
        837979: function(e, t, i) {
            "use strict";
            var n, s, a, r;
            i.r(t), i.d(t, {
                MAX_STAGE_TOPIC_LENGTH: function() {
                    return l
                },
                STAGE_APPLICATION_ID: function() {
                    return o
                },
                STAGE_INVITE_STATE_KEY: function() {
                    return d
                },
                STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY: function() {
                    return u
                },
                RequestToSpeakPermissionStates: function() {
                    return n
                },
                StartStageSteps: function() {
                    return s
                }
            }), i("701909"), i("49111"), i("782340");
            let l = 240,
                o = "834488117758001152",
                d = "stage-invite",
                u = "stage-channel-audience-notice-shown";
            (a = n || (n = {}))[a.EVERYONE = 1] = "EVERYONE", a[a.NO_ONE = 2] = "NO_ONE", a[a.ROLES = 3] = "ROLES", (r = s || (s = {}))[r.GUILD_SELECTION = 0] = "GUILD_SELECTION", r[r.STAGE_CHANNEL_SETTINGS = 1] = "STAGE_CHANNEL_SETTINGS", r[r.PUBLIC_STAGE_PREVIEW = 2] = "PUBLIC_STAGE_PREVIEW"
        },
        410912: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            });
            var n = i("102053"),
                s = i("926274");
            let a = () => {};
            i.g.__timingFunction = () => performance.now();
            let r = null == i.g.__getTotalRequireTime ? () => 0 : () => i.g.__getTotalRequireTime();

            function l(e, t) {
                if (0 === t || null == t) return null;
                let i = t - e;
                return i < 0 || i > 1e6 ? null : i
            }
            class o {
                get start() {
                    return this.start_
                }
                get end() {
                    return this.end_
                }
                hasStart() {
                    return this.start_ > 0
                }
                hasData() {
                    return this.end_ > 0
                }
                recordStart() {
                    0 === this.start_ && this.recordStart_(), n.default.mark(this.emoji, "Start ".concat(this.name)), a()
                }
                recordStart_() {
                    this.start_ = Date.now(), this.startNumImports = s.size(), this.startImportTime = r()
                }
                recordEnd() {
                    0 === this.end_ && 0 !== this.start_ ? (this.recordEnd_(), n.default.mark(this.emoji, "Finish ".concat(this.name), this.end_ - this.start_)) : n.default.mark(this.emoji, "Finish ".concat(this.name)), a()
                }
                recordEnd_() {
                    this.end_ = Date.now(), this.endNumImports = s.size(), this.endImportTime = r()
                }
                set(e, t) {
                    0 === this.start_ && (this.start_ = e, this.end_ = e + t, this.endNumImports = s.size(), this.endImportTime = r()), n.default.mark(this.emoji, this.name, t), a()
                }
                serializeStart(e) {
                    return l(e, this.start_)
                }
                serializeEnd(e) {
                    return l(e, this.end_)
                }
                measure(e) {
                    if (this.start_ > 0) return n.default.time(this.emoji, this.name, e);
                    this.recordStart_();
                    let t = n.default.time(this.emoji, this.name, e);
                    return this.recordEnd_(), a(), t
                }
                async measureAsync(e) {
                    if (this.start_ > 0) return n.default.timeAsync(this.emoji, this.name, e);
                    this.recordStart_();
                    let t = await n.default.timeAsync(this.emoji, this.name, e);
                    return this.recordEnd_(), a(), t
                }
                async measureAsyncWithoutNesting(e) {
                    if (this.start_ > 0) return n.default.timeAsync(this.emoji, this.name, e);
                    this.recordStart_();
                    let t = Date.now();
                    n.default.mark(this.emoji, "Start ".concat(this.name));
                    let i = await e();
                    return n.default.mark(this.emoji, "Finish ".concat(this.name), Date.now() - t), this.recordEnd_(), a(), i
                }
                constructor(e, t) {
                    this.emoji = e, this.name = t, this.start_ = 0, this.startNumImports = 0, this.startImportTime = 0, this.end_ = 0, this.endNumImports = 0, this.endImportTime = 0
                }
            }
            class d {
                get time() {
                    return this.time_
                }
                record() {
                    0 === this.time_ ? (this.time_ = Date.now(), this.numImports = s.size(), this.importTime = r(), n.default.mark(this.emoji, this.name)) : !this.onlyOnce && n.default.mark(this.emoji, this.name), a()
                }
                hasData() {
                    return this.time_ > 0
                }
                serialize(e) {
                    return l(e, this.time_)
                }
                constructor(e, t, i = !1) {
                    this.emoji = e, this.name = t, this.onlyOnce = i, this.time_ = 0, this.numImports = null, this.importTime = 0
                }
            }
            class u {
                get time() {
                    return this.time_
                }
                record() {
                    0 === this.time_ && (this.time_ = r())
                }
                constructor() {
                    this.time_ = 0
                }
            }
            class c {
                constructor() {
                    this.loadIndex = new o("❗", "Load index.tsx"), this.loadFastConnectNativeModule = new o("\uD83D\uDCBE", "Load fast_connect native module"), this.beginFastConnect = new o("\uD83C\uDF10", "Fast Connect IDENTIFY"), this.loadImports = new o("\uD83C\uDFC3", "Load Imports"), this.init = new o("\uD83C\uDFC3", "Initial Initialization"), this.loadStorage = new o("\uD83D\uDCBE", "Load Storage"), this.parseStorage = new o("\uD83D\uDCBE", "Parse Storage"), this.loadMiniCache = new o("\uD83D\uDCBE", "Load Mini Cache"), this.fetchInitialGuildCache = new o("\uD83D\uDCBE", "Fetch Initial Guild Cache"), this.loadCachedMessages = new o("\uD83D\uDCBE", "Load Cached Messages"), this.renderApp = new d("\uD83C\uDFA8", "First React Render"), this.renderAppEffect = new d("\uD83C\uDFA8", "First React Render useEffect"), this.renderMessages = new d("\uD83C\uDFA8", "React Render Messages", !0), this.renderMessagesWithCache = new d("\uD83C\uDFA8", "React Render Cached Messages", !0), this.firstRowGenerator = new o("\uD83C\uDFA8", "RowGenerator.generate()"), this.renderLatestMessages = new d("\uD83C\uDFA8", "React Render Latest Messages"), this.initialGuild = new o("\uD83C\uDF10", "Initial Guild"), this.loadLazyCache = new o("\uD83D\uDCBE", "Load Lazy Cache"), this.fetchLazyCache = new o("\uD83D\uDCBE", "Fetch Lazy Cache"), this.parseLazyCache = new o("\uD83D\uDCBE", "Parse Lazy Cache"), this.fetchStaleChannels = new o("\uD83D\uDCBE", "Fetch Stale Channels"), this.deserializeCache = new o("\uD83D\uDCBE", "Deserialize Cache"), this.dispatchLazyCache = new o("\uD83D\uDCBE", "Dispatch Lazy Cache"), this.parseReady = new o("\uD83C\uDF10", "Parse READY"), this.ready = new o("\uD83C\uDF10", "READY"), this.hydrateReady = new o("\uD83C\uDF10", "Hydrate READY"), this.dispatchReady = new o("\uD83C\uDF10", "Dispatch READY"), this.parseReadySupplemental = new o("\uD83C\uDF10", "Parse READY Supplemental"), this.readySupplemental = new o("\uD83C\uDF10", "READY Supplemental"), this.hydrateReadySupplemental = new o("\uD83C\uDF10", "Hydrate READY Supplemental"), this.dispatchReadySupplemental = new o("\uD83C\uDF10", "Dispatch READY Supplemental"), this.fetchMessages = new o("\uD83C\uDF10", "Fetch messages"), this.dispatchMessages = new o("\uD83C\uDF10", "Dispatch messages"), this.imports = {
                        polyfillsEnd: new u,
                        sentryEnd: new u,
                        appStateChangeStart: new u,
                        appStateChangeEnd: new u,
                        loadMiniCacheStart: new u,
                        loadStorageStart: new u,
                        loadStorageEnd: new u
                    }
                }
            }
            var _ = new class e extends c {
                setTTICallback(e) {
                    a = () => {
                        !0 === e() && (a = () => !1)
                    }
                }
                setCacheInfo(e) {
                    this.cacheInfo = e
                }
                setInterstitial(e) {
                    this.interstitial = e, a()
                }
                addLocalMessages(e, t) {
                    for (this.cachedChannelCounts.set(e, t); this.cachedChannelCounts.size > 100;) {
                        let e = this.cachedChannelCounts.keys();
                        this.cachedChannelCounts.delete(e.next().value)
                    }
                }
                attachReadyPayloadProperties(e) {
                    this.readyProperties = e
                }
                appStateChanged(e) {
                    "active" === e && (null == this.firstAppActiveTime && (this.firstAppActiveTime = Date.now()), this.wasEverActive = !0), null == this.readyProperties.num_guilds && (this.didBackgroundApp = this.didBackgroundApp || "active" !== e)
                }
                recordRender(e, t) {
                    this.renderMessages.record(), (t || e > 0) && this.renderMessagesWithCache.record(), t && this.renderLatestMessages.record()
                }
                recordMessageRender(e, t, n, s) {
                    let {
                        default: a
                    } = i("249654");
                    if (!this.renderLatestMessages.hasData()) {
                        if (this.renderMessages.record(), t.length > 0 && this.renderMessagesWithCache.record(), n) {
                            if (this.renderLatestMessages.record(), null == this.cachedChannelId) {
                                this.messageCacheMissingReason = "no-cache";
                                return
                            }
                            if (this.cachedChannelId !== e) {
                                this.messageCacheMissingReason = "channel-changed";
                                return
                            }
                            if (null == this.cachedMessageIds || 0 === this.cachedMessageIds.length) {
                                this.messageCacheMissingReason = "no-cache";
                                return
                            }
                            if (0 === t.length) {
                                this.messageCacheMissingReason = "channel-empty";
                                return
                            }
                            if (e === this.cachedChannelId) {
                                var r;
                                let i = this.cachedMessageIds.sort(a.compare).reverse()[0],
                                    n = t.sort(a.compare).reverse()[0];
                                this.messageCacheAgeSeconds = Math.floor((a.extractTimestamp(n) - a.extractTimestamp(i)) / 1e3);
                                let l = t.filter(e => {
                                    var t;
                                    return null === (t = this.cachedMessageIds) || void 0 === t ? void 0 : t.includes(e)
                                }).length;
                                this.messageCacheCount = null !== (r = this.cachedChannelCounts.get(e)) && void 0 !== r ? r : null, this.messageCacheHavingCount = l, this.messageCacheMissingCount = t.length - l, this.messageRenderFullCount = t.length, this.messageRenderCachedCount = this.cachedMessageIds.length, this.messageRenderHasMoreAfter = s
                            }
                        } else(null == this.cachedChannelId || e === this.cachedChannelId) && (this.cachedChannelId = e, this.cachedMessageIds = t, t.length > 0 && (this.messageCacheMissingReason = null))
                    }
                }
                getStartTime(e) {
                    return this.extraProperties.headless_task_ran && null != this.firstAppActiveTime ? this.firstAppActiveTime : null == e || e <= 0 ? this.loadIndex.start : e
                }
                processNativeLogs(e, t) {
                    let i = this.getStartTime(t);
                    for (let t of e) switch (t.label) {
                        case "Finish MainApplication.initialize()":
                            this.extraProperties.time_main_application_initialize_end = l(i, t.timestamp);
                            break;
                        case "GET_REACT_INSTANCE_MANAGER_START":
                            this.extraProperties.time_get_react_instance_manager_start = l(i, t.timestamp);
                            break;
                        case "GET_REACT_INSTANCE_MANAGER_END":
                            this.extraProperties.time_get_react_instance_manager_end = l(i, t.timestamp);
                            break;
                        case "PROCESS_PACKAGES_START":
                            this.extraProperties.time_process_packages_start = l(i, t.timestamp);
                            break;
                        case "PROCESS_PACKAGES_END":
                            this.extraProperties.time_process_packages_end = l(i, t.timestamp);
                            break;
                        case "CREATE_CATALYST_INSTANCE_START":
                            this.extraProperties.time_create_catalyst_instance_start = l(i, t.timestamp);
                            break;
                        case "CREATE_CATALYST_INSTANCE_END":
                            this.extraProperties.time_create_catalyst_instance_end = l(i, t.timestamp);
                            break;
                        case "CREATE_UI_MANAGER_MODULE_START":
                            this.extraProperties.time_create_ui_manager_module_start = l(i, t.timestamp);
                            break;
                        case "CREATE_UI_MANAGER_MODULE_END":
                            this.extraProperties.time_create_ui_manager_module_end = l(i, t.timestamp);
                            break;
                        case "REACT_BRIDGE_LOADING_START":
                            this.extraProperties.time_react_bridge_loading_start = l(i, t.timestamp);
                            break;
                        case "REACT_BRIDGE_LOADING_END":
                            this.extraProperties.time_react_bridge_loading_end = l(i, t.timestamp);
                            break;
                        case "CacheStorage Init Start":
                            this.extraProperties.time_init_native_storage_start = l(i, t.timestamp);
                            break;
                        case "CacheStorage Init End":
                            this.extraProperties.time_init_native_storage_end = l(i, t.timestamp);
                            break;
                        case "ChatModule.updateRows() Start":
                            if (null != this.extraProperties.time_first_native_message_render_start) continue;
                            this.extraProperties.time_first_native_message_render_start = l(i, t.timestamp);
                            break;
                        case "ChatModule.updateRows() Finish":
                            if (null != this.extraProperties.time_first_native_message_render_end) continue;
                            this.extraProperties.time_first_native_message_render_end = l(i, t.timestamp)
                    }
                }
                serializeTTITracker(e) {
                    var t, s, a, r, l, o, d;
                    let u = this.getStartTime(e),
                        c = i("917351"),
                        _ = c(n.default.logGroups[0].logs).filter(e => e.log.startsWith("Require ")).map(e => null !== (d = e.delta) && void 0 !== d ? d : 0).sum();
                    return {
                        ...this.extraProperties,
                        time_load_index_start: this.loadIndex.serializeStart(u),
                        time_load_index_end: this.loadIndex.serializeEnd(u),
                        time_begin_fast_connect_start: this.beginFastConnect.serializeStart(u),
                        time_begin_fast_connect_end: this.beginFastConnect.serializeEnd(u),
                        time_load_imports_start: this.loadImports.serializeStart(u),
                        time_load_imports_end: this.loadImports.serializeEnd(u),
                        time_init_start: this.init.serializeStart(u),
                        time_init_end: this.init.serializeEnd(u),
                        time_load_storage_start: this.loadStorage.serializeStart(u),
                        time_load_storage_end: this.loadStorage.serializeEnd(u),
                        time_parse_storage_start: this.parseStorage.serializeStart(u),
                        time_parse_storage_end: this.parseStorage.serializeEnd(u),
                        time_load_mini_cache_start: this.loadMiniCache.serializeStart(u),
                        time_load_mini_cache_end: this.loadMiniCache.serializeEnd(u),
                        time_fetch_initial_guild_start: this.fetchInitialGuildCache.serializeStart(u),
                        time_fetch_initial_guild_end: this.fetchInitialGuildCache.serializeEnd(u),
                        time_load_cached_messages_start: this.loadCachedMessages.serializeStart(u),
                        time_load_cached_messages_end: this.loadCachedMessages.serializeEnd(u),
                        time_render_app_start: this.renderApp.serialize(u),
                        time_render_app_effect_start: this.renderAppEffect.serialize(u),
                        time_render_messages_end: this.renderMessages.serialize(u),
                        time_render_messages_with_cache_end: this.renderMessagesWithCache.serialize(u),
                        time_render_latest_messages_end: this.renderLatestMessages.serialize(u),
                        time_first_row_generator_start: this.firstRowGenerator.serializeStart(u),
                        time_first_row_generator_end: this.firstRowGenerator.serializeEnd(u),
                        time_initial_guild_start: this.initialGuild.serializeStart(u),
                        time_initial_guild_end: this.initialGuild.serializeEnd(u),
                        time_load_lazy_cache_start: this.loadLazyCache.serializeStart(u),
                        time_load_lazy_cache_end: this.loadLazyCache.serializeEnd(u),
                        time_fetch_lazy_cache_start: this.fetchLazyCache.serializeStart(u),
                        time_fetch_lazy_cache_end: this.fetchLazyCache.serializeEnd(u),
                        time_parse_lazy_cache_start: this.parseLazyCache.serializeStart(u),
                        time_parse_lazy_cache_end: this.parseLazyCache.serializeEnd(u),
                        time_fetch_stale_channels_start: this.fetchStaleChannels.serializeStart(u),
                        time_fetch_stale_channels_end: this.fetchStaleChannels.serializeEnd(u),
                        time_deserialize_cache_start: this.deserializeCache.serializeStart(u),
                        time_deserialize_cache_end: this.deserializeCache.serializeEnd(u),
                        time_dispatch_lazy_cache_start: this.dispatchLazyCache.serializeStart(u),
                        time_dispatch_lazy_cache_end: this.dispatchLazyCache.serializeEnd(u),
                        time_parse_ready_start: this.parseReady.serializeStart(u),
                        time_parse_ready_end: this.parseReady.serializeEnd(u),
                        time_ready_start: this.ready.serializeStart(u),
                        time_ready_end: this.ready.serializeEnd(u),
                        time_hydrate_ready_start: this.hydrateReady.serializeStart(u),
                        time_hydrate_ready_end: this.hydrateReady.serializeEnd(u),
                        time_dispatch_ready_start: this.dispatchReady.serializeStart(u),
                        time_dispatch_ready_end: this.dispatchReady.serializeEnd(u),
                        time_parse_ready_supplemental_start: this.parseReadySupplemental.serializeStart(u),
                        time_parse_ready_supplemental_end: this.parseReadySupplemental.serializeEnd(u),
                        time_ready_supplemental_start: this.readySupplemental.serializeStart(u),
                        time_ready_supplemental_end: this.readySupplemental.serializeEnd(u),
                        time_hydrate_ready_supplemental_start: this.hydrateReadySupplemental.serializeStart(u),
                        time_hydrate_ready_supplemental_end: this.hydrateReadySupplemental.serializeEnd(u),
                        time_dispatch_ready_supplemental_start: this.dispatchReadySupplemental.serializeStart(u),
                        time_dispatch_ready_supplemental_end: this.dispatchReadySupplemental.serializeEnd(u),
                        time_fetch_messages_start: this.fetchMessages.serializeStart(u),
                        time_fetch_messages_end: this.fetchMessages.serializeEnd(u),
                        time_dispatch_messages_start: this.dispatchMessages.serializeStart(u),
                        time_dispatch_messages_end: this.dispatchMessages.serializeEnd(u),
                        time_load_fast_connect_native_module_start: this.loadFastConnectNativeModule.serializeStart(u),
                        time_load_fast_connect_native_module_end: this.loadFastConnectNativeModule.serializeEnd(u),
                        identify_total_server_duration_ms: this.readyProperties.identify_total_server_duration_ms,
                        identify_api_duration_ms: this.readyProperties.identify_api_duration_ms,
                        identify_guilds_duration_ms: this.readyProperties.identify_guilds_duration_ms,
                        ready_compressed_byte_size: this.readyProperties.compressed_byte_size,
                        ready_uncompressed_byte_size: this.readyProperties.uncompressed_byte_size,
                        identify_compressed_byte_size: this.readyProperties.identify_compressed_byte_size,
                        identify_uncompressed_byte_size: this.readyProperties.identify_uncompressed_byte_size,
                        ready_compression_algorithm: this.readyProperties.compression_algorithm,
                        ready_packing_algorithm: this.readyProperties.packing_algorithm,
                        ready_unpack_duration_ms: this.readyProperties.unpack_duration_ms,
                        is_reconnect: this.readyProperties.is_reconnect,
                        is_fast_connect: this.readyProperties.is_fast_connect,
                        did_force_clear_guild_hashes: this.readyProperties.did_force_clear_guild_hashes,
                        num_guilds: this.readyProperties.num_guilds,
                        num_changed_guild_channels: this.readyProperties.num_guild_channels,
                        ready_presences_size: this.readyProperties.presences_size,
                        ready_users_size: this.readyProperties.users_size,
                        ready_read_states_size: this.readyProperties.read_states_size,
                        ready_private_channels_size: this.readyProperties.private_channels_size,
                        ready_user_guild_settings_size: this.readyProperties.user_guild_settings_size,
                        ready_relationships_size: this.readyProperties.relationships_size,
                        ready_experiments_size: this.readyProperties.experiments_size,
                        ready_user_settings_size: this.readyProperties.user_settings_size,
                        ready_remaining_data_size: this.readyProperties.remaining_data_size,
                        ready_guild_channels_size: this.readyProperties.guild_channels_size,
                        ready_guild_members_size: this.readyProperties.guild_members_size,
                        ready_guild_presences_size: this.readyProperties.guild_presences_size,
                        ready_guild_roles_size: this.readyProperties.guild_roles_size,
                        ready_guild_emojis_size: this.readyProperties.guild_emojis_size,
                        ready_guild_remaining_data_size: this.readyProperties.guild_remaining_data_size,
                        ready_guild_threads_size: this.readyProperties.guild_threads_size,
                        ready_guild_stickers_size: this.readyProperties.guild_stickers_size,
                        ready_guild_events_size: this.readyProperties.guild_events_size,
                        ready_guild_features_size: this.readyProperties.guild_features_size,
                        ready_size_metrics_duration_ms: this.readyProperties.size_metrics_duration_ms,
                        had_cache_at_startup: this.readyProperties.had_cache_at_startup,
                        used_cache_at_startup: this.readyProperties.used_cache_at_startup,
                        was_authenticated: this.wasAuthenticated,
                        did_background_app: this.didBackgroundApp,
                        interstitial: this.interstitial,
                        message_cache_missing_reason: this.messageCacheMissingReason,
                        message_cache_age_seconds: this.messageCacheAgeSeconds,
                        message_cache_count: this.messageCacheCount,
                        message_cache_having_count: this.messageCacheHavingCount,
                        message_cache_missing_count: this.messageCacheMissingCount,
                        message_render_full_count: this.messageRenderFullCount,
                        message_render_cached_count: this.messageRenderCachedCount,
                        message_render_has_more_after: this.messageRenderHasMoreAfter,
                        duration_major_js_imports: this.loadImports.end - this.loadIndex.start + _,
                        cache_num_guilds: null === (t = this.cacheInfo) || void 0 === t ? void 0 : t.guilds,
                        cache_num_private_channels: null === (s = this.cacheInfo) || void 0 === s ? void 0 : s.privateChannels,
                        cache_num_basic_channels: null === (a = this.cacheInfo) || void 0 === a ? void 0 : a.basicChannels,
                        cache_num_basic_channels_stale: null === (r = this.cacheInfo) || void 0 === r ? void 0 : r.basicChannelsStale,
                        cache_num_full_channels: null === (l = this.cacheInfo) || void 0 === l ? void 0 : l.fullChannels,
                        cache_num_full_channel_guilds: null === (o = this.cacheInfo) || void 0 === o ? void 0 : o.fullChannelGuilds,
                        num_imports_at_load_index_end: this.loadIndex.endNumImports,
                        num_imports_at_init_end: this.init.endNumImports,
                        num_imports_at_load_mini_cache_end: this.loadMiniCache.endNumImports,
                        num_imports_at_render_app_start: this.renderApp.numImports,
                        num_imports_at_render_app_effect_start: this.renderAppEffect.numImports,
                        num_imports_at_render_messages_end: this.renderMessages.numImports,
                        num_imports_at_render_messages_with_cache_end: this.renderMessagesWithCache.numImports,
                        num_imports_at_render_latest_messages_end: this.renderLatestMessages.numImports,
                        num_imports_at_load_lazy_cache_start: this.loadLazyCache.startNumImports,
                        num_imports_at_load_lazy_cache_end: this.loadLazyCache.endNumImports,
                        num_imports_at_ready_start: this.ready.startNumImports,
                        num_imports_at_ready_end: this.ready.endNumImports,
                        num_imports_at_ready_supplemental_start: this.readySupplemental.startNumImports,
                        num_imports_at_ready_supplemental_end: this.readySupplemental.endNumImports,
                        duration_imports_at_load_index_start: Math.ceil(this.loadIndex.startImportTime),
                        duration_imports_at_load_index_end: Math.ceil(this.loadIndex.endImportTime),
                        duration_imports_at_init_end: Math.ceil(this.init.endImportTime),
                        duration_imports_at_load_mini_cache_end: Math.ceil(this.loadMiniCache.endImportTime),
                        duration_imports_at_render_app_start: Math.ceil(this.renderApp.importTime),
                        duration_imports_at_render_app_effect_start: Math.ceil(this.renderAppEffect.importTime),
                        duration_imports_at_render_messages_end: Math.ceil(this.renderMessages.importTime),
                        duration_imports_at_render_messages_with_cache_end: Math.ceil(this.renderMessagesWithCache.importTime),
                        duration_imports_at_render_latest_messages_end: Math.ceil(this.renderLatestMessages.importTime),
                        duration_imports_at_load_lazy_cache_start: Math.ceil(this.loadLazyCache.startImportTime),
                        duration_imports_at_load_lazy_cache_end: Math.ceil(this.loadLazyCache.endImportTime),
                        duration_imports_at_ready_start: Math.ceil(this.ready.startImportTime),
                        duration_imports_at_ready_end: Math.ceil(this.ready.endImportTime),
                        duration_imports_at_ready_supplemental_start: Math.ceil(this.readySupplemental.startImportTime),
                        duration_imports_at_ready_supplemental_end: Math.ceil(this.readySupplemental.endImportTime),
                        duration_imports_at_polyfills_end: Math.ceil(this.imports.polyfillsEnd.time),
                        duration_imports_at_sentry_end: Math.ceil(this.imports.sentryEnd.time),
                        duration_imports_at_fast_connect_start: Math.ceil(this.beginFastConnect.startImportTime),
                        duration_imports_at_fast_connect_end: Math.ceil(this.beginFastConnect.endImportTime),
                        duration_imports_at_app_state_change_start: Math.ceil(this.imports.appStateChangeStart.time),
                        duration_imports_at_app_state_change_end: Math.ceil(this.imports.appStateChangeEnd.time),
                        duration_imports_at_load_mini_cache_start: Math.ceil(this.imports.loadMiniCacheStart.time),
                        duration_imports_at_load_storage_start: Math.ceil(this.imports.loadStorageStart.time),
                        duration_imports_at_load_storage_end: Math.ceil(this.imports.loadStorageEnd.time)
                    }
                }
                constructor(...e) {
                    super(...e), this.readyProperties = {}, this.didBackgroundApp = !1, this.wasEverActive = !1, this.wasAuthenticated = !1, this.interstitial = null, this.cachedChannelCounts = new Map, this.cachedChannelId = null, this.cachedMessageIds = null, this.messageCacheMissingReason = "never-loaded", this.messageCacheAgeSeconds = null, this.messageCacheCount = null, this.messageCacheHavingCount = null, this.messageCacheMissingCount = null, this.messageRenderFullCount = null, this.messageRenderCachedCount = null, this.messageRenderHasMoreAfter = null, this.firstAppActiveTime = null, this.cacheInfo = null, this.extraProperties = {}
                }
            }
        },
        268491: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var n = i("446674"),
                s = i("913144"),
                a = i("686298"),
                r = i("353927");
            let l = a.ApplicationStreamPresets.PRESET_VIDEO,
                o = a.ApplicationStreamResolutions.RESOLUTION_720,
                d = a.ApplicationStreamFPS.FPS_30;
            class u extends n.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t;
                        l = null !== (t = e.preset) && void 0 !== t ? t : a.ApplicationStreamPresets.PRESET_VIDEO, o = e.resolution, d = e.fps
                    }
                }
                getState() {
                    return {
                        preset: l,
                        resolution: o,
                        fps: d
                    }
                }
            }
            u.displayName = "ApplicationStreamingSettingsStore", u.persistKey = "ApplicationStreamingSettingStore";
            var c = new u(s.default, {
                MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
                    let {
                        settings: t
                    } = e;
                    if ((null == t ? void 0 : t.context) === r.MediaEngineContextTypes.STREAM) {
                        if ((null == t ? void 0 : t.qualityOptions) == null || (null == t ? void 0 : t.qualityOptions.resolution) == null || (null == t ? void 0 : t.qualityOptions.frameRate) == null) return !1;
                        o = t.qualityOptions.resolution, d = t.qualityOptions.frameRate
                    }
                },
                STREAM_UPDATE_SETTINGS: function(e) {
                    let {
                        preset: t,
                        resolution: i,
                        frameRate: n
                    } = e, s = !1;
                    return null != t && (l = t, s = !0), null != i && (o = i, s = !0), null != n && (d = n, s = !0), s
                }
            })
        },
        848872: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return D
                }
            });
            var n = i("714617"),
                s = i.n(n),
                a = i("446674"),
                r = i("872717"),
                l = i("913144"),
                o = i("619340"),
                d = i("376556"),
                u = i("550368"),
                c = i("47319"),
                _ = i("102985"),
                h = i("49111");
            let E = e => "https://youtube.com/watch?v=".concat(e),
                p = /live_user_(.*)-\{width\}/,
                m = null,
                f = 0,
                S = null,
                T = new Set,
                g = {};

            function I(e, t, i) {
                return r.default.get({
                    url: "".concat("https://api.twitch.tv/helix").concat(e),
                    query: t,
                    headers: {
                        "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s",
                        Authorization: "Bearer ".concat(i)
                    }
                })
            }
            async function A(e, t) {
                let i = g[e];
                if (null != i) return i;
                let {
                    body: {
                        data: n
                    }
                } = await I("/games", {
                    id: e
                }, t), s = n[0].name;
                return g[e] = s, s
            }
            let C = new class e {
                start() {
                    !this._started && (this._started = !0, c.default.isFetching() ? o.default.fetch() : this._check())
                }
                stop() {
                    this._started = !1, S = null, f = 0, null != this._nextCheck && clearTimeout(this._nextCheck), l.default.dispatch({
                        type: "STREAMING_UPDATE",
                        stream: null
                    })
                }
                async _checkTwitch(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
                    try {
                        var i, n, s, a, r;
                        let {
                            body: {
                                data: l
                            }
                        } = await I("/streams", {
                            user_id: e.id,
                            first: 1
                        }, t), o = l[0];
                        if (null == o || "live" !== o.type) throw Error("no stream");
                        let {
                            thumbnail_url: c,
                            game_id: _,
                            title: E
                        } = o, m = {
                            large_image: null != c && null !== (n = (0, u.getAssetFromImageURL)(h.PlatformTypes.TWITCH, c)) && void 0 !== n ? n : void 0
                        }, f = await A(_, t), S = d.default.get(h.PlatformTypes.TWITCH);
                        let T = null !== (a = c, s = null === (r = p.exec(a)) || void 0 === r ? void 0 : r[1]) && void 0 !== s ? s : e.name;
                        return {
                            url: null === (i = S.getPlatformUserUrl) || void 0 === i ? void 0 : i.call(S, {
                                id: e.id,
                                name: T
                            }),
                            name: S.name,
                            assets: m,
                            details: E,
                            state: f
                        }
                    } catch (i) {
                        if (401 === i.status && null == t) return o.default.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
                        return null
                    }
                }
                async _checkYouTube(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (S = null, e.revoked || T.has(e.id)) return null;
                    try {
                        var i;
                        let {
                            body: {
                                items: n
                            }
                        } = await r.default.get({
                            url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
                            query: {
                                part: "id,snippet",
                                broadcastStatus: "active",
                                broadcastType: "all"
                            },
                            headers: {
                                Authorization: "Bearer ".concat(null != t ? t : e.accessToken)
                            },
                            oldFormErrors: !0
                        });
                        if (n.length < 1) throw Error("no stream");
                        let {
                            id: s,
                            snippet: {
                                title: a,
                                thumbnails: l
                            }
                        } = n[0], o = {
                            large_image: null !== (i = (0, u.getAssetFromImageURL)(h.PlatformTypes.YOUTUBE, l.high.url)) && void 0 !== i ? i : void 0
                        };
                        return S = {
                            url: E(s),
                            name: d.default.get(h.PlatformTypes.YOUTUBE).name,
                            details: a,
                            assets: o
                        }
                    } catch (i) {
                        if (401 === i.status && null == t) return o.default.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
                        return 403 === i.status && T.add(e.id), null
                    }
                }
                _check() {
                    if (!this._started) return;
                    let e = c.default.getAccounts();
                    if (null == e) return;
                    null != this._nextCheck && clearTimeout(this._nextCheck);
                    let t = [h.PlatformTypes.TWITCH],
                        i = Date.now();
                    f <= i && (t.push(h.PlatformTypes.YOUTUBE), f = i + 3e5);
                    let n = e.filter(e => t.includes(e.type)).map(e => e.type === h.PlatformTypes.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e));
                    Promise.allSettled(n).then(e => {
                        if (this._started) {
                            var t;
                            let i = null === (t = e.find(e => "fulfilled" === e.status && null != e.value)) || void 0 === t ? void 0 : t.value;
                            null == i && null != S && (i = S), l.default.dispatch({
                                type: "STREAMING_UPDATE",
                                stream: i
                            })
                        }
                        this._scheduleCheck()
                    })
                }
                _scheduleCheck() {
                    this._started && (this._nextCheck = setTimeout(() => this._check(), 6e4))
                }
                constructor() {
                    this._started = !1
                }
            };

            function y() {
                _.default.enabled ? C.start() : C.stop()
            }
            class N extends a.default.Store {
                initialize() {
                    y(), this.waitFor(c.default), this.syncWith([_.default], y)
                }
                getStream() {
                    return m
                }
            }
            N.displayName = "ExternalStreamingStore";
            var D = new N(l.default, {
                STREAMING_UPDATE: function(e) {
                    var t;
                    if (s(e.stream, m)) return !1;
                    m = null !== (t = e.stream) && void 0 !== t ? t : null
                },
                USER_CONNECTIONS_UPDATE: () => C._check()
            })
        },
        260320: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                LobbyError: function() {
                    return o
                },
                default: function() {
                    return E
                }
            });
            var n = i("917351"),
                s = i.n(n),
                a = i("446674"),
                r = i("913144"),
                l = i("49111");
            class o {
                constructor(e) {
                    this.code = e
                }
            }
            let d = {},
                u = {};

            function c(e, t) {
                if (null == u[e]) return null;
                let {
                    socketId: i,
                    timeout: n,
                    resolve: s,
                    reject: a
                } = u[e];
                return delete u[e], null != n && clearTimeout(n), null != s && null != a && t(s, a), i
            }

            function _(e) {
                let {
                    lobbyId: t,
                    member: {
                        user: i,
                        metadata: n
                    }
                } = e, s = d[t];
                if (null == s) return !1;
                let a = s.members.find(e => e.user.id === i.id);
                null != a ? (a.user = i, a.metadata = n) : s.members.push({
                    user: i,
                    metadata: n
                })
            }
            class h extends a.default.Store {
                getLobbies() {
                    return d
                }
                getLobbiesWithVoice() {
                    return s.filter(d, e => e.voice)
                }
                getLobby(e) {
                    return d[e]
                }
                getPendingLobbies() {
                    return s.map(u, (e, t) => {
                        let {
                            secret: i
                        } = e;
                        return {
                            id: t,
                            secret: i
                        }
                    })
                }
            }
            h.displayName = "LobbyStore";
            var E = new h(r.default, {
                CONNECTION_OPEN: function() {
                    d = {}
                },
                OVERLAY_INITIALIZE: function(e) {
                    d = e.lobbies
                },
                LOBBY_CONNECT: function(e) {
                    let {
                        socketId: t,
                        lobbyId: i,
                        lobbySecret: n,
                        resolve: s,
                        reject: a
                    } = e;
                    if (null != u[i] || null != d[i]) {
                        null != a && a(new o(l.LobbyErrors.ALREADY_CONNECTING));
                        return
                    }
                    u[i] = {
                        socketId: t,
                        secret: n,
                        resolve: s,
                        reject: a,
                        timeout: __OVERLAY__ ? null : setTimeout(() => {
                            r.default.dispatch({
                                type: "LOBBY_DELETE",
                                lobbyId: i,
                                reason: l.LobbyErrors.SERVICE_UNAVAILABLE
                            })
                        }, 15e3)
                    }
                },
                LOBBY_DISCONNECT: function(e) {
                    let {
                        lobbyId: t
                    } = e;
                    c(t, (e, t) => t(new o(l.LobbyErrors.NO_ERROR)))
                },
                LOBBY_CREATE: function(e) {
                    let {
                        lobby: t
                    } = e, i = c(t.id, e => e(t));
                    null != i && (d[t.id] = {
                        socketId: i,
                        voice: !1,
                        ...d[t.id],
                        ...t
                    })
                },
                LOBBY_UPDATE: function(e) {
                    let {
                        lobby: t
                    } = e, i = d[t.id];
                    null != i && (d[t.id] = {
                        ...i,
                        ...t
                    })
                },
                LOBBY_DELETE: function(e) {
                    let {
                        lobbyId: t,
                        reason: i
                    } = e;
                    delete d[t], c(t, (e, t) => t(new o(i)))
                },
                LOBBY_MEMBER_CONNECT: _,
                LOBBY_MEMBER_UPDATE: _,
                LOBBY_MEMBER_DISCONNECT: function(e) {
                    let {
                        lobbyId: t,
                        member: {
                            user: i
                        }
                    } = e, n = d[t];
                    if (null == n) return !1;
                    n.members = n.members.filter(e => e.user.id !== i.id)
                },
                LOBBY_VOICE_CONNECT: function(e) {
                    let {
                        lobbyId: t
                    } = e, i = d[t];
                    if (null == i) return !1;
                    i.voice = !0
                },
                LOBBY_VOICE_DISCONNECT: function(e) {
                    let {
                        lobbyId: t
                    } = e, i = d[t];
                    if (null == i) return !1;
                    i.voice = !1
                },
                RPC_APP_DISCONNECTED: function(e) {
                    let {
                        socketId: t
                    } = e;
                    s.forEach(d, e => {
                        e.socketId === t && r.default.dispatch({
                            type: "LOBBY_DISCONNECT",
                            lobbyId: e.id
                        })
                    })
                }
            })
        },
        52028: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return N
                }
            });
            var n = i("714617"),
                s = i.n(n),
                a = i("917351"),
                r = i.n(a),
                l = i("446674"),
                o = i("913144"),
                d = i("191225"),
                u = i("225772"),
                c = i("925880"),
                _ = i("662285"),
                h = i("845579"),
                E = i("374363"),
                p = i("373469"),
                m = i("848872"),
                f = i("546463"),
                S = i("568307"),
                T = i("49111"),
                g = i("782340");
            let I = [],
                A = {};

            function C() {
                let e = [],
                    t = h.CustomStatusSetting.getSetting();
                null != t && ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, u.default)(t));
                let i = c.default.getActivities();
                e.push(...i);
                let n = m.default.getStream();
                null != n && e.push({
                    type: T.ActivityTypes.STREAMING,
                    ...n
                });
                let a = new Set,
                    l = new Set;
                r.forEach(A, t => {
                    null != t.application_id && (a.add(t.name), l.add(t.application_id), e.push(t))
                }), d.default.getSelfEmbeddedActivities().forEach(t => {
                    var i;
                    let {
                        application_id: n
                    } = t;
                    if (l.has(n)) return;
                    let s = null === (i = f.default.getGame(n)) || void 0 === i ? void 0 : i.name;
                    e.push({
                        type: T.ActivityTypes.PLAYING,
                        name: null != s ? s : g.default.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
                        application_id: n,
                        flags: T.ActivityFlags.EMBEDDED
                    })
                });
                let o = S.default.getVisibleGame(),
                    E = null != o && null != o.name && a.has(o.name),
                    C = null != o && o.isLauncher,
                    y = p.default.getCurrentUserActiveStream();
                null != o && null != o.name && !(E || C && !(null != y)) && e.push({
                    type: T.ActivityTypes.PLAYING,
                    name: o.name,
                    application_id: o.id,
                    timestamps: {
                        start: o.start
                    }
                });
                let N = _.default.getActivity();
                null != N && e.push({
                    type: T.ActivityTypes.LISTENING,
                    ...N
                }), !s(I, e) && (I = e)
            }
            class y extends l.default.Store {
                initialize() {
                    this.waitFor(S.default, d.default, m.default, p.default, _.default, E.default), this.syncWith([c.default], () => C())
                }
                getActivities() {
                    return I
                }
                getPrimaryActivity() {
                    return I[0]
                }
                getApplicationActivity(e) {
                    return this.findActivity(t => t.application_id === e)
                }
                getCustomStatusActivity() {
                    return this.findActivity(e => e.type === T.ActivityTypes.CUSTOM_STATUS)
                }
                findActivity(e) {
                    return I.find(e)
                }
                getApplicationActivities() {
                    return A
                }
            }
            y.displayName = "LocalActivityStore";
            var N = new y(o.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        localActivities: t
                    } = e;
                    A = {
                        ...t
                    }, C()
                },
                START_SESSION: function() {
                    A = {}, C()
                },
                LOCAL_ACTIVITY_UPDATE: function(e) {
                    let {
                        socketId: t,
                        activity: i
                    } = e;
                    if (s(A[t], i)) return !1;
                    null != i ? A[t] = i : delete A[t], C()
                },
                RPC_APP_DISCONNECTED: function(e) {
                    let {
                        socketId: t
                    } = e;
                    delete A[t], C()
                },
                RUNNING_GAMES_CHANGE: C,
                LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: C,
                SPOTIFY_PLAYER_STATE: C,
                SPOTIFY_PLAYER_PLAY: C,
                STREAMING_UPDATE: C,
                USER_CONNECTIONS_UPDATE: C,
                STREAM_START: C,
                STREAM_STOP: C,
                USER_SETTINGS_PROTO_UPDATE: C,
                EMBEDDED_ACTIVITY_OPEN: C,
                EMBEDDED_ACTIVITY_CLOSE: C
            })
        },
        101125: function(e, t, i) {
            "use strict";
            let n, s;
            i.r(t), i.d(t, {
                default: function() {
                    return F
                }
            });
            var a = i("714617"),
                r = i.n(a),
                l = i("917351"),
                o = i.n(l),
                d = i("446674"),
                u = i("913144"),
                c = i("429928"),
                _ = i("837374"),
                h = i("662285"),
                E = i("845579"),
                p = i("374363"),
                m = i("233069"),
                f = i("964889"),
                S = i("271938"),
                T = i("546463"),
                g = i("603699"),
                I = i("686470"),
                A = i("52028"),
                C = i("824563"),
                y = i("235660"),
                N = i("49111");
            let D = !1,
                R = N.StatusTypes.ONLINE,
                v = N.StatusTypes.UNKNOWN,
                O = 0,
                b = [],
                L = !1,
                P = !0,
                U = Object.freeze([]),
                k = [];

            function M(e) {
                return (0, f.shouldShareApplicationActivity)(e, I.default)
            }

            function w(e) {
                switch (e.type) {
                    case N.ActivityTypes.LISTENING:
                        if ((0, c.default)(e)) return h.default.shouldShowActivity();
                        if (null != e.application_id) return M(e.application_id);
                        return !1;
                    case N.ActivityTypes.PLAYING:
                        return null != e.application_id ? M(e.application_id) : function(e) {
                            let t = T.default.getGameByName(e);
                            return null != t ? M(t.id) : E.ShowCurrentGame.getSetting()
                        }(e.name);
                    case N.ActivityTypes.STREAMING:
                    case N.ActivityTypes.WATCHING:
                    default:
                        return null == e.application_id || M(e.application_id)
                }
            }

            function G() {
                var e;
                O = null !== (e = g.default.getIdleSince()) && void 0 !== e ? e : 0, L = g.default.isAFK(), P ? (R = v, V()) : R = D ? N.StatusTypes.INVISIBLE : E.StatusSetting.getSetting(), R === N.StatusTypes.ONLINE && O > 0 && (R = N.StatusTypes.IDLE);
                let t = !1,
                    i = P || R === N.StatusTypes.INVISIBLE ? [] : A.default.getActivities().filter(w);
                !r(b, i) && (b = i, t = !0);
                let n = y.default.getRemoteActivities();
                if (U !== n && (U = n, t = !0), t) {
                    let e = b.find(e => e.type === N.ActivityTypes.CUSTOM_STATUS),
                        t = b.filter(e => e.type !== N.ActivityTypes.CUSTOM_STATUS);
                    k = t.length > 0 ? b : null != e ? [e, ...o(U).filter(e => e.type !== N.ActivityTypes.CUSTOM_STATUS).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()] : o.uniqBy(U, e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
                }
            }

            function V() {
                n = void 0, s = void 0
            }

            function B() {
                P = !1, v = N.StatusTypes.UNKNOWN, G(), C.default.setCurrentUserOnConnectionOpen(R, k)
            }
            class H extends d.default.Store {
                initialize() {
                    this.waitFor(g.default, p.default, A.default, y.default, I.default, T.default), this.syncWith([A.default], G)
                }
                getLocalPresence() {
                    return {
                        status: R,
                        since: O,
                        activities: b,
                        afk: L,
                        broadcast: s
                    }
                }
                getStatus() {
                    return R
                }
                getActivities() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return e ? k : b
                }
                getPrimaryActivity() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return e ? k[0] : b[0]
                }
                getApplicationActivity(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return this.findActivity(t => t.application_id === e, t)
                }
                findActivity(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return this.getActivities(t).find(e)
                }
                getBroadcast() {
                    return n
                }
            }
            H.displayName = "SelfPresenceStore";
            var F = new H(u.default, {
                START_SESSION: G,
                CONNECTION_OPEN: B,
                CONNECTION_OPEN_SUPPLEMENTAL: B,
                OVERLAY_INITIALIZE: B,
                CONNECTION_CLOSED: G,
                IDLE: G,
                AFK: G,
                RUNNING_GAMES_CHANGE: G,
                STREAMING_UPDATE: G,
                USER_SETTINGS_PROTO_UPDATE: G,
                LOCAL_ACTIVITY_UPDATE: G,
                SPOTIFY_PLAYER_STATE: G,
                SPOTIFY_PLAYER_PLAY: G,
                USER_CONNECTIONS_UPDATE: G,
                SESSIONS_REPLACE: G,
                RPC_APP_DISCONNECTED: G,
                LIBRARY_FETCH_SUCCESS: G,
                LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: G,
                LOGOUT: function() {
                    P = !0, v = R, G()
                },
                EMBEDDED_ACTIVITY_CLOSE: G,
                EMBEDDED_ACTIVITY_OPEN: G,
                FORCE_INVISIBLE: function(e) {
                    return D = e.invisible, G()
                },
                WINDOW_FOCUS: function() {
                    return D = !1, G()
                },
                BROADCAST_START: function(e) {
                    n = e.broadcast, s = (0, _.broadcastToServer)(e.broadcast)
                },
                BROADCAST_STOP: V,
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    t instanceof m.ChannelRecordBase && (null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.ownerId) === S.default.getId() && (n = void 0, s = void 0)
                }
            })
        },
        336727: function(e, t, i) {
            "use strict";
            let n, s;
            i.r(t), i.d(t, {
                default: function() {
                    return G
                }
            });
            var a = i("627445"),
                r = i.n(a),
                l = i("917351"),
                o = i.n(l),
                d = i("446674"),
                u = i("773364"),
                c = i("913144"),
                _ = i("583702"),
                h = i("374014"),
                E = i("582415"),
                p = i("537429"),
                m = i("773336"),
                f = i("373469"),
                S = i("271938"),
                T = i("42203"),
                g = i("42887"),
                I = i("824563"),
                A = i("945956"),
                C = i("568307"),
                y = i("49111"),
                N = i("353927");
            let D = {},
                R = {},
                v = {},
                O = {},
                b = y.StreamLayouts.THEATRE,
                L = {},
                P = [];

            function U() {
                o.forEach(L, (e, t) => {
                    e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete L[t]
                })
            }

            function k(e) {
                e.filter(e => {
                    let {
                        connection: t
                    } = e;
                    return t.context === N.MediaEngineContextTypes.STREAM
                }).forEach(e => {
                    let {
                        stats: t
                    } = e;
                    c.default.dispatch({
                        type: "STREAM_STATS_UPDATE",
                        stats: t
                    })
                })
            }

            function M() {
                return !0
            }
            class w extends d.default.Store {
                getActiveStreamKey() {
                    return (0, p.default)(g.default) ? s : null
                }
                getAllActiveStreamKeys() {
                    return Object.keys(L)
                }
                getRTCConnection(e) {
                    return L[e]
                }
                getStatsHistory(e, t, i) {
                    if (!(0, p.default)(g.default) || null == t) return null;
                    if (i) {
                        let i = f.default.getActiveStreamForUser(t, e);
                        if (null == i || 0 === f.default.getViewerIds(i).length) return null
                    }
                    return P.map(e => i ? function(e) {
                        var t, i, n, s, a;
                        let r = e.find(e => "video" === e.type);
                        return null != r && "video" === r.type ? {
                            type: "streamer",
                            packetsSentOrReceived: null !== (i = r.packetsSent) && void 0 !== i ? i : 0,
                            packetsLost: null !== (n = r.packetsLost) && void 0 !== n ? n : 0,
                            frameRate: null !== (s = r.frameRateEncode) && void 0 !== s ? s : 0,
                            resolution: null !== (a = null === (t = r.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0,
                            bitrate: 0
                        } : null
                    }(e.rtp.outbound) : function(e) {
                        var t, i, n, s, a, r;
                        if (null == e) return null;
                        let l = e.find(e => "video" === e.type);
                        return null != l && "video" === l.type ? {
                            type: "spectator",
                            packetsSentOrReceived: null !== (i = l.packetsReceived) && void 0 !== i ? i : 0,
                            packetsLost: null !== (n = l.packetsLost) && void 0 !== n ? n : 0,
                            frameRate: null !== (s = l.frameRateDecode) && void 0 !== s ? s : 0,
                            bitrate: null !== (a = l.bitrate) && void 0 !== a ? a : 0,
                            resolution: null !== (r = null === (t = l.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== r ? r : 0
                        } : null
                    }(e.rtp.inbound[t]))
                }
                getQuality() {
                    if (!(0, p.default)(g.default)) return y.RTCConnectionQuality.UNKNOWN;
                    let e = this.getActiveStreamKey(),
                        t = null != e ? L[e] : null;
                    return null != t ? t.quality : y.RTCConnectionQuality.UNKNOWN
                }
                getMediaSessionId(e) {
                    if (null == e) return null;
                    let t = L[e];
                    if (null != t) return null != t ? t.getMediaSessionId() : null
                }
                getRtcConnectionId(e) {
                    if (null == e) return null;
                    let t = L[e];
                    if (null != t) return null != t ? t.getRTCConnectionId() : null
                }
                getVideoStats(e) {
                    if (null == e) return null;
                    let t = L[e];
                    return null != t ? t.getVideoStats() : null
                }
                getHostname(e) {
                    if (null == e) return "";
                    let t = L[e];
                    return null != t ? null != t.hostname ? t.hostname : "" : ""
                }
                getRegion(e) {
                    if (null == e) return null;
                    let t = L[e];
                    return null != t ? t.getRegion() : null
                }
                getMaxViewers(e) {
                    if (null == e) return null;
                    let t = L[e];
                    return null != t ? t.getMaxViewers() : null
                }
                getStreamSourceId(e) {
                    return O[e]
                }
            }
            w.displayName = "StreamRTCConnectionStore";
            var G = new w(c.default, !g.default.isSupported() || __OVERLAY__ ? {} : {
                CONNECTION_OPEN: function(e) {
                    n = e.sessionId, s = null, U()
                },
                CONNECTION_CLOSED: function() {
                    n = null, s = null, U()
                },
                RTC_CONNECTION_STATE: M,
                RTC_CONNECTION_PING: M,
                RTC_CONNECTION_LOSS_RATE: M,
                RTC_CONNECTION_UPDATE_ID: function(e) {
                    return o.some(L, t => t === e.connection)
                },
                STREAM_START: function(e) {
                    let {
                        streamType: t,
                        guildId: i,
                        channelId: n,
                        appContext: s,
                        pid: a,
                        sourceId: r
                    } = e, l = (0, h.encodeStreamKey)({
                        streamType: t,
                        guildId: i,
                        channelId: n,
                        ownerId: S.default.getId()
                    });
                    if (D[l] = s, o.forEach(L, e => {
                            let {
                                analyticsContext: t
                            } = e;
                            t.setActionContext(s)
                        }), O[l] = r, v[l] = a, null != a) {
                        let e = C.default.getGameForPID(a);
                        null != e && (R[l] = {
                            name: e.name,
                            id: e.id,
                            exe: e.exeName
                        })
                    }
                },
                STREAM_STOP: function(e) {
                    let {
                        appContext: t,
                        streamKey: i
                    } = e;
                    D[i] = t, o.forEach(L, e => {
                        let {
                            analyticsContext: i
                        } = e;
                        i.setActionContext(t)
                    }), O[i] = null, v[i] = null
                },
                STREAM_CREATE: function(e) {
                    let {
                        streamKey: t,
                        rtcServerId: i,
                        region: a,
                        viewerIds: l
                    } = e;
                    s = t;
                    let o = L[t];
                    if (null == o && null != i) {
                        var d, c, p;
                        null == v[t] && (R[t] = null);
                        let e = (0, h.decodeStreamKey)(t);
                        null == R[t] && null == O[t] && (R[t] = (0, E.getStreamerApplication)(e, I.default));
                        let s = T.default.getChannel(e.channelId),
                            u = null != s && s.isBroadcastChannel(),
                            f = new _.StreamRTCAnalyticsContext({
                                streamRegion: a,
                                streamApplication: R[t],
                                streamSourceType: function(e) {
                                    var t, i, n;
                                    if (null == e) return "unknown";
                                    if (m.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === "Chrome") {
                                        if (e.startsWith("web-contents-media-stream:")) return "tab";
                                        if (e.startsWith("window:")) return "window";
                                        else if (e.startsWith("screen:")) return "screen"
                                    } else if ((null === (i = platform) || void 0 === i ? void 0 : i.name) === "Firefox") return "" !== e ? "window" : "screen";
                                    else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === "Safari") return "window";
                                    return "unknown"
                                }(O[t]),
                                actionContext: D[t],
                                numViewers: null != l ? l.length : 0,
                                isBroadcast: u
                            });
                        d = t, c = i, p = f, r(null != n, "Creating RTCConnection without session."), o = new _.default({
                            sessionId: n,
                            streamKey: d,
                            serverId: c,
                            initialLayout: b,
                            analyticsContext: p,
                            isStreamer: null != R[d],
                            parentMediaSessionId: A.default.getMediaSessionId()
                        }), L[t] = o
                    }
                    P = [], g.default.getMediaEngine().on(u.MediaEngineEvent.ConnectionStats, k)
                },
                STREAM_SERVER_UPDATE: function(e) {
                    let t = L[e.streamKey];
                    if (null == t) return !1;
                    t.connect(e.endpoint, e.token)
                },
                STREAM_UPDATE: function(e) {
                    let {
                        streamKey: t,
                        viewerIds: i,
                        paused: n
                    } = e, s = L[t];
                    if (null == s) return !1;
                    null != i && s.analyticsContext.trackViewerCount(i.length), s.streamUpdate(n)
                },
                STREAM_DELETE: function(e) {
                    let {
                        streamKey: t
                    } = e, i = L[t];
                    if (null == i) return !1;
                    t === s && (s = null, g.default.getMediaEngine().off(u.MediaEngineEvent.ConnectionStats, k)), i.destroy("stream-end"), delete L[t]
                },
                STREAM_STATS_UPDATE: function(e) {
                    let {
                        stats: t
                    } = e;
                    if (null == t) return !1;
                    P.push(t), P.length > 30 && P.shift()
                },
                STREAM_LAYOUT_UPDATE: function(e) {
                    let {
                        layout: t
                    } = e;
                    b = t, Object.values(L).forEach(e => e.layoutChange(t))
                }
            })
        },
        703370: function(e, t, i) {
            "use strict";
            let n;
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            });
            var s = i("446674"),
                a = i("913144"),
                r = i("653047"),
                l = i("546463"),
                o = i("568307"),
                d = i("988268");

            function u(e) {
                let t = {
                    os: e.os,
                    name: e.name
                };
                return null != e.arguments && (t.arguments = e.arguments), null != e.isLauncher && (t.is_launcher = e.isLauncher), t
            }
            class c extends s.default.Store {
                getGameForPID(e) {
                    var t;
                    if (__OVERLAY__ || null == e) return null;
                    let i = null === (t = o.default.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
                    return l.default.getGameByName(i)
                }
                getGame() {
                    return __OVERLAY__ ? n : null
                }
                getGameAsJSON(e) {
                    let t = this.getGameForPID(e);
                    return null == t ? null : {
                        id: t.id,
                        name: t.name,
                        description: t.description,
                        type: d.ApplicationTypes.GAME,
                        icon: t.icon,
                        splash: t.splash,
                        overlay: t.overlay,
                        overlay_warn: t.overlayWarn,
                        aliases: [...t.aliases],
                        publishers: [...t.publishers],
                        developers: [...t.developers],
                        third_party_skus: [...t.thirdPartySkus],
                        executables: t.executables.map(u),
                        hashes: [...t.hashes],
                        tags: [...t.tags]
                    }
                }
            }
            c.displayName = "OverlayRunningGameStore";
            var _ = new c(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    n = null != e.currentGame ? new r.default(e.currentGame) : null
                }
            })
        },
        550368: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getAssetFromImageURL: function() {
                    return I
                },
                getAssetImage: function() {
                    return A
                },
                getAssets: function() {
                    return C
                },
                fetchAssetIds: function() {
                    return R
                },
                getAssetIds: function() {
                    return v
                }
            });
            var n = i("627445"),
                s = i.n(n),
                a = i("917351"),
                r = i.n(a),
                l = i("872717"),
                o = i("913144"),
                d = i("605250"),
                u = i("407063"),
                c = i("49111");
            let _ = "https://i.scdn.co/image/",
                h = (e, t, i) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(t, "x").concat(i, ".jpg"),
                E = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
                p = e => "https://i.ytimg.com/vi/".concat(e, "/hqdefault_live.jpg"),
                m = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
                f = {
                    [c.PlatformTypes.SPOTIFY]: {
                        deserialize: e => "".concat(_).concat(encodeURIComponent(e)),
                        serialize: e => e.split(_)[1]
                    },
                    [c.PlatformTypes.TWITCH]: {
                        deserialize: (e, t) => h(encodeURIComponent(e), t[0], t[1]),
                        serialize: e => {
                            let t = e.match(E);
                            return null != t ? t[1] : null
                        }
                    },
                    [c.PlatformTypes.YOUTUBE]: {
                        deserialize: e => p(encodeURIComponent(e)),
                        serialize: e => {
                            let t = e.match(m);
                            return null != t ? t[1] : null
                        }
                    },
                    mp: {
                        deserialize: e => (s(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured"), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
                        serialize: e => e
                    }
                },
                S = {},
                T = {};
            async function g(e) {
                let {
                    body: t
                } = await l.default.get({
                    url: c.Endpoints.APPLICATION_ASSETS(e),
                    oldFormErrors: !0
                });
                return S[e] = {
                    assets: r.keyBy(t, "name"),
                    lastUpdated: Date.now()
                }
            }

            function I(e, t) {
                let i = f[e].serialize(t);
                return i ? "".concat(e, ":").concat(i.toString()) : null
            }

            function A(e, t, i) {
                if (null != t && t.includes(":")) {
                    let [e, n] = t.split(":");
                    if (e === c.PlatformTypes.TWITCH) {
                        if (null == i || "number" == typeof i) {
                            new(0, d.default)("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
                            return
                        }
                        return f[c.PlatformTypes.TWITCH].deserialize(n, i)
                    }
                    return Object.prototype.hasOwnProperty.call(f, e) ? f[e].deserialize(n) : void 0
                }
                if (null == e || null == t) return;
                let n = "number" == typeof i ? "?size=".concat((0, u.getBestMediaProxySize)(i)) : "";
                return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".png").concat(n) : "".concat(l.default.getAPIBaseURL(), "/applications/").concat(e, "/app-assets/").concat(t, ".png").concat(n)
            }
            async function C(e) {
                let {
                    assets: t
                } = await
                function(e) {
                    var t;
                    let i = S[e];
                    return null == i || (t = i.lastUpdated, Date.now() - t > 36e5) ? g(e) : Promise.resolve(i)
                }(e);
                return t
            }
            async function y(e, t) {
                let i = t.filter(e => null != e && !Object.prototype.hasOwnProperty.call(T, e) && null == T[e]);
                if (0 === i.length) return;
                let {
                    body: n
                } = await l.default.post({
                    url: c.Endpoints.APPLICATION_EXTERNAL_ASSETS(e),
                    body: {
                        urls: i
                    },
                    oldFormErrors: !0
                });
                for (let {
                        url: e,
                        external_asset_path: t
                    }
                    of n) T[e] = t
            }

            function N(e, t) {
                let i = 0,
                    n = e.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
                if (n.length > 0)
                    for (let n = 0; n < e.length; n++) {
                        let s = e[n];
                        if (null == s) continue;
                        let a = Object.prototype.hasOwnProperty.call(T, s) ? T[s] : void 0;
                        null != a && (t[n] = I("mp", a), i++)
                    }
                return i === e.length
            }

            function D(e, t, i, n) {
                let s = !1;
                for (let a = 0; a < e.length; a++) {
                    let r = e[a];
                    if (null == r || null != t[a]) continue;
                    let l = Object.prototype.hasOwnProperty.call(i, r) && i[r];
                    if (!l) {
                        if (null == n || n <= 0) {
                            t[a] = null;
                            continue
                        }
                        s = !0
                    }
                    t[a] = l.id
                }
                return s
            }
            async function R(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                o.default.dispatch({
                    type: "APPLICATION_ASSETS_FETCH",
                    applicationId: e
                });
                let n = [],
                    s = t.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
                s.length > 0 && await y(e, s);
                let a = N(t, n);
                if (a) return o.default.dispatch({
                    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
                    applicationId: e
                }), n;
                let r = await C(e),
                    l = D(t, n, r, i);
                return l ? g(e).then(() => R(e, t, i - 1)) : (o.default.dispatch({
                    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
                    applicationId: e
                }), n)
            }

            function v(e, t) {
                var i;
                let n = [],
                    s = N(t, n);
                if (s) return n;
                let a = null === (i = S[e]) || void 0 === i ? void 0 : i.assets;
                return null == a ? n : (D(t, n, a), n)
            }
        },
        390946: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                hydrateReadySupplementalPayload: function() {
                    return y
                },
                hydrateReadyPayloadPrioritized: function() {
                    return N
                },
                hydrateInitialGuild: function() {
                    return R
                },
                hydratePreviouslyUnavailableGuild: function() {
                    return L
                }
            });
            var n = i("627445"),
                s = i.n(n),
                a = i("917351"),
                r = i.n(a),
                l = i("802493"),
                o = i("105059"),
                d = i("849365"),
                u = i("860255"),
                c = i("723939"),
                _ = i("70754"),
                h = i("605250"),
                E = i("385976"),
                p = i("364685"),
                m = i("233069"),
                f = i("305961"),
                S = i("660478"),
                T = i("665618");
            let g = new h.default("ReadyPayloadUtils"),
                I = {},
                A = null,
                C = {};

            function y(e, t) {
                var i;
                let {
                    guilds: n,
                    merged_members: s,
                    merged_presences: a,
                    ...r
                } = e, l = v(C, null == a ? void 0 : a.friends), o = null !== (i = null == n ? void 0 : n.map((e, t) => {
                    let i = v(C, null == a ? void 0 : a.guilds[t]),
                        n = v(C, null == s ? void 0 : s[t]);
                    return {
                        ...e,
                        unavailable: void 0 === e.voice_states,
                        presences: i,
                        members: n
                    }
                })) && void 0 !== i ? i : [], d = D(t, n, e => ({
                    id: e.id,
                    members: e.members,
                    presences: e.presences,
                    embedded_activities: e.embedded_activities,
                    voice_states: e.voice_states,
                    unavailable: !1
                }));
                return null != d && o.push(d), C = {}, {
                    ...r,
                    presences: l,
                    guilds: o
                }
            }

            function N(e, t) {
                var i;
                let {
                    users: n,
                    relationships: a,
                    private_channels: h,
                    merged_members: m,
                    guilds: g,
                    ...A
                } = e;
                (function() {
                    ! function() {
                        let e = l.default.database();
                        null != e && !1 === d.default.okSync(e) && c.default.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok")
                    }(), I = {};
                    let e = Object.values(f.default.getGuilds()),
                        t = E.default.getGuilds(),
                        i = p.default.getRawStickersByGuild(),
                        n = S.default.getReadStatesByChannel(),
                        s = (0, _.isCacheEnabled)() ? o.default.getCommittedVersions() : new Map,
                        a = (0, _.isCacheEnabled)() ? u.default.getGuildIdsSync() : new Set;
                    for (let l of e) {
                        var r, h, m;
                        s.has(l.id) && a.has(l.id) && (I[l.id] = {
                            properties: T.toServer(l),
                            roles: l.roles,
                            emojis: null !== (h = null === (r = t[l.id]) || void 0 === r ? void 0 : r.rawEmojis) && void 0 !== h ? h : null,
                            stickers: null !== (m = i.get(l.id)) && void 0 !== m ? m : null,
                            readStates: n
                        })
                    }
                })(), C = r.keyBy(n, e => e.id);
                let y = v(C, a);
                null == h || h.forEach(e => {
                    let t = e.recipient_ids;
                    null != t && (e.recipients = t.map(e => (s(null != C[e], "Missing user in compressed ready payload"), C[e]))), delete e.recipient_ids
                });
                let N = null !== (i = null == g ? void 0 : g.map((e, t) => !0 === e.unavailable ? e : (e.members = v(C, null == m ? void 0 : m[t]), b(e)))) && void 0 !== i ? i : [],
                    R = D(t, g, e => b(e));
                return null != R && N.push(R), {
                    ...A,
                    users: n,
                    presences: [],
                    relationships: y,
                    guilds: N,
                    private_channels: null != h ? h : []
                }
            }

            function D(e, t, i) {
                return null == A || A.identifyTime !== e || null != t && t.some(e => e.id === A.guild.id) ? null : i(A.guild)
            }

            function R(e, t) {
                var i, n, s;
                let a = f.default.getGuild(e.id),
                    r = L(e, null == a ? void 0 : {
                        properties: T.toServer(a),
                        roles: a.roles,
                        emojis: null !== (n = null === (i = E.default.getGuilds()[a.id]) || void 0 === i ? void 0 : i.rawEmojis) && void 0 !== n ? n : null,
                        stickers: null !== (s = p.default.getRawStickersByGuild().get(a.id)) && void 0 !== s ? s : null,
                        readStates: {}
                    });
                return A = {
                    guild: e,
                    identifyTime: t
                }, r
            }

            function v(e, t) {
                let i = [];
                return null == t || t.forEach(t => {
                    if (null == t) return;
                    let n = t.user_id;
                    null != n && (s(null != e[n], "Missing user[".concat(n, "] in compressed ready payload")), t.user = e[n]), delete t.user_id, i.push(t)
                }), i
            }

            function O(e) {
                let t = I[e];
                return delete I[e], t
            }

            function b(e) {
                var t, i, n, s, a, r, l, o, d, u, c, _;
                let h = O(e.id);
                if ("partial" !== e.data_mode) return {
                    id: e.id,
                    dataMode: e.data_mode,
                    application_command_counts: e.application_command_counts,
                    emojis: e.emojis,
                    guild_scheduled_events: e.guild_scheduled_events,
                    joined_at: e.joined_at,
                    lastMessages: e.last_messages,
                    member_count: e.member_count,
                    members: e.members,
                    premium_subscription_count: e.premium_subscription_count,
                    properties: e.properties,
                    roles: e.roles,
                    stage_instances: e.stage_instances,
                    stickers: e.stickers,
                    threads: null !== (s = null === (n = e.threads) || void 0 === n ? void 0 : n.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== s ? s : [],
                    threadMessages: P(e.threads),
                    channels: e.channels.map(t => (t.guild_id = e.id, (0, m.createChannelRecordFromServer)(t, e.id))),
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                };
                if (null == h) throw g.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: ready)")), Error("Guild data was missing from store, but hash was still available.");
                return {
                    id: e.id,
                    dataMode: e.data_mode,
                    application_command_counts: e.application_command_counts,
                    channels: null,
                    channelUpdates: {
                        writes: null !== (a = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== a ? a : [],
                        deletes: null !== (r = e.partial_updates.deleted_channel_ids) && void 0 !== r ? r : []
                    },
                    channelTimestampUpdates: e.channel_updates,
                    emojis: null == h.emojis ? null : U(h.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
                    emojiUpdates: {
                        writes: null !== (l = e.partial_updates.emojis) && void 0 !== l ? l : [],
                        deletes: null !== (o = e.partial_updates.deleted_emoji_ids) && void 0 !== o ? o : []
                    },
                    guild_scheduled_events: e.guild_scheduled_events,
                    joined_at: e.joined_at,
                    lastMessages: e.last_messages,
                    member_count: e.member_count,
                    members: e.members,
                    premium_subscription_count: e.premium_subscription_count,
                    properties: null !== (d = e.properties) && void 0 !== d ? d : h.properties,
                    roles: T.filterRoleDeletes(e.id, h.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
                    stage_instances: e.stage_instances,
                    stickers: null == h.stickers ? null : U(h.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
                    stickerUpdates: {
                        writes: null !== (u = e.partial_updates.stickers) && void 0 !== u ? u : [],
                        deletes: null !== (c = e.partial_updates.deleted_sticker_ids) && void 0 !== c ? c : []
                    },
                    unableToSyncDeletes: e.unable_to_sync_deletes,
                    threads: null !== (_ = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== _ ? _ : [],
                    threadMessages: P(e.threads),
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                }
            }

            function L(e, t) {
                var i, n, s, a, r, l, o, d, u, c, _, h;
                if (null == t && (t = O(e.id)), "partial" !== e.data_mode) return {
                    id: e.id,
                    application_command_counts: e.application_command_counts,
                    emojis: e.emojis,
                    guild_scheduled_events: e.guild_scheduled_events,
                    joined_at: e.joined_at,
                    lastMessages: e.last_messages,
                    member_count: e.member_count,
                    members: e.members,
                    premium_subscription_count: e.premium_subscription_count,
                    properties: e.properties,
                    roles: e.roles,
                    stage_instances: e.stage_instances,
                    stickers: e.stickers,
                    threads: null !== (a = null === (s = e.threads) || void 0 === s ? void 0 : s.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== a ? a : [],
                    threadMessages: P(e.threads),
                    channels: e.channels.map(t => (t.guild_id = e.id, (0, m.createChannelRecordFromServer)(t, e.id))),
                    presences: e.presences,
                    embedded_activities: e.embedded_activities,
                    voice_states: e.voice_states,
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                };
                if (null == t) throw g.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: post_ready)")), Error("Guild data was missing from store, but hash was still available.");
                return {
                    id: e.id,
                    application_command_counts: e.application_command_counts,
                    channels: null,
                    channelUpdates: {
                        writes: null !== (r = null === (i = e.partial_updates.channels) || void 0 === i ? void 0 : i.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== r ? r : [],
                        deletes: null !== (l = e.partial_updates.deleted_channel_ids) && void 0 !== l ? l : []
                    },
                    channelTimestampUpdates: e.channel_updates,
                    embedded_activities: e.embedded_activities,
                    emojis: null == t.emojis ? null : U(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
                    emojiUpdates: {
                        writes: null !== (o = e.partial_updates.emojis) && void 0 !== o ? o : [],
                        deletes: null !== (d = e.partial_updates.deleted_emoji_ids) && void 0 !== d ? d : []
                    },
                    guild_scheduled_events: e.guild_scheduled_events,
                    joined_at: e.joined_at,
                    lastMessages: e.last_messages,
                    member_count: e.member_count,
                    members: e.members,
                    premium_subscription_count: e.premium_subscription_count,
                    presences: e.presences,
                    properties: null !== (u = e.properties) && void 0 !== u ? u : t.properties,
                    roles: T.filterRoleDeletes(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
                    stage_instances: e.stage_instances,
                    stickers: null == t.stickers ? null : U(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
                    stickerUpdates: {
                        writes: null !== (c = e.partial_updates.stickers) && void 0 !== c ? c : [],
                        deletes: null !== (_ = e.partial_updates.deleted_sticker_ids) && void 0 !== _ ? _ : []
                    },
                    unableToSyncDeletes: e.unable_to_sync_deletes,
                    threads: null !== (h = null === (n = e.threads) || void 0 === n ? void 0 : n.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== h ? h : [],
                    threadMessages: P(e.threads),
                    voice_states: e.voice_states,
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                }
            }

            function P(e) {
                let t = [];
                if (null != e)
                    for (let i of e) null != i.most_recent_message && t.push(i.most_recent_message);
                return t
            }

            function U(e, t, i) {
                t = null != t ? t : [];
                let n = new Set((null != i ? i : []).concat(t.map(e => e.id)));
                return e.filter(e => !n.has(e.id)).concat(t)
            }
        },
        432710: function(e, t, i) {
            "use strict";
            var n, s;
            i.r(t), i.d(t, {
                MetricEvents: function() {
                    return n
                }
            }), (s = n || (n = {})).APP_CRASHED = "app_crashed", s.SOCKET_CRASHED = "socket_crashed", s.MESSAGE_REQUEST_VIEW = "message_request_view", s.SPAM_MESSAGE_REQUEST_VIEW = "spam_message_request_view", s.SPAM_MESSAGE_REQUEST_ERROR_VIEW = "spam_message_request_error_view", s.FAMILY_CENTER_VIEW = "family_center_view", s.SAFETY_HUB_VIEW = "safety_hub_view", s.MESSAGE_REQUEST_COUNT_DRIFT = "message_request_count_drift", s.FORUM_CHANNEL_GRID_AUTO_ENABLED = "forum_channel_grid_auto_enabled", s.REMIX_FONT_LOADING_ERROR = "remix_font_loading_error", s.AFK_NOT_IDLE = "afk_not_idle", s.CAPTCHA_EVENT = "captcha_event", s.OTA_CHECK_ATTEMPT = "OtaCheckAttempt", s.OTA_ASSET_DOWNLOAD_ATTEMPT = "OtaAssetDownloadAttempt", s.OTA_UPDATE_CHECK = "ota_update_check", s.OTA_ASSET_DOWNLOAD = "ota_asset_download"
        },
        615361: function(e, t, i) {
            "use strict";
            var n, s;
            i.r(t), i.d(t, {
                ReleaseChannelsSets: function() {
                    return a
                }
            }), (s = n || (n = {})).STABLE = "stable", s.BETA = "beta", s.ALPHA = "alpha", s.PTB = "ptb", s.CANARY = "canary", s.STAGING = "staging", s.DEVELOPMENT = "development";
            let a = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        },
        576863: function(e, t, i) {
            "use strict";
            i.r(t), i("102053")
        }
    }
]);
//# sourceMappingURL=99ce1195e0a9ed2dfb3f.js.map