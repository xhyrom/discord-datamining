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
                    return m
                },
                fetchProfile: function() {
                    return p
                },
                fetchMutualFriends: function() {
                    return S
                }
            });
            var s = i("161179"),
                a = i.n(s),
                n = i("307391"),
                r = i("990746"),
                l = i("913144"),
                d = i("766274"),
                o = i("697218"),
                u = i("49111");
            let c = new n.default("UserProfileModalActionCreators");

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
                }), new d.default(e.body)))
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
                let i = o.default.getCurrentUser();
                a(null != i, "setFlag: user cannot be undefined");
                let s = t ? i.flags | e : i.flags & ~e;
                return r.default.patch({
                    url: u.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: s
                    }
                })
            }

            function m(e) {
                let t = o.default.getUser(e);
                return null != t ? Promise.resolve(t) : r.default.get({
                    url: u.Endpoints.USER(e),
                    oldFormErrors: !0
                }).then(t => (l.default.dispatch({
                    type: "USER_UPDATE",
                    user: t.body
                }), o.default.getUser(e)))
            }
            async function p(e) {
                let {
                    friendToken: t,
                    withMutualGuilds: i,
                    withMutualFriendsCount: s,
                    guildId: a,
                    connectionsRoleId: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = arguments.length > 2 ? arguments[2] : void 0;
                l.default.dispatch({
                    type: "USER_PROFILE_FETCH_START",
                    userId: e
                });
                try {
                    let o = await r.default.get({
                        url: u.Endpoints.USER_PROFILE(e),
                        query: {
                            friend_token: t,
                            with_mutual_guilds: i,
                            with_mutual_friends_count: s,
                            guild_id: a,
                            connections_role_id: n
                        },
                        oldFormErrors: !0
                    });
                    return null == d || d(o.body, a), l.default.dispatch({
                        type: "USER_UPDATE",
                        user: o.body.user
                    }), l.default.dispatch({
                        type: "USER_PROFILE_FETCH_SUCCESS",
                        ...o.body
                    }), null != a && null != o.body.guild_member && l.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildId: a,
                        guildMember: o.body.guild_member
                    }), o.body
                } catch (t) {
                    throw null != t && (null == t ? void 0 : t.body) != null && c.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), l.default.dispatch({
                        type: "USER_PROFILE_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }
            async function S(e) {
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
                    return n
                }
            });
            var s = i("376929"),
                a = i.n(s);
            class n {
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
                    if (t) this.dirty = !a(i, this.getInitialState());
                    else
                        for (let e of Object.keys(i)) this.dirty = this.dirty || !a(this.state[e], i[e]);
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

            function s(e, t, i) {
                let s;
                let a = [],
                    n = function() {
                        for (var r = arguments.length, l = Array(r), d = 0; d < r; d++) l[d] = arguments[d];
                        let o = Date.now();
                        for (null != s && (clearTimeout(s), s = null); a.length > 0 && a[0] <= o;) a.shift();
                        a.length < e ? (a.push(o + t), i(...l)) : s = setTimeout(() => n(...l), a[0] - o)
                    };
                return n
            }
            i.r(t), i.d(t, {
                default: function() {
                    return s
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
            var s = i("376556"),
                a = i("49111"),
                n = i("450484");

            function r(e) {
                return null != e && e.type === a.ActivityTypes.LISTENING && e.name === s.default.get(a.PlatformTypes.SPOTIFY).name && null != e.party && null != e.party.id && (0, n.isSpotifyParty)(e.party.id)
            }
        },
        939398: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getDesktopSourceMetadata: function() {
                    return o
                },
                trackWithOverlayMetadata: function() {
                    return u
                }
            });
            var s = i("42887"),
                a = i("568307"),
                n = i("703370"),
                r = i("599110"),
                l = i("716241"),
                d = i("49111");

            function o() {
                let e, t, i, n, r;
                let l = s.default.getGoLiveSource();
                if (null != l && (e = l.quality.resolution, t = l.quality.frameRate, null != l.desktopSource)) {
                    var d, o;
                    i = l.desktopSource.soundshareSession;
                    let e = null != l.desktopSource.sourcePid ? a.default.getGameForPID(l.desktopSource.sourcePid) : null;
                    n = null !== (d = null == e ? void 0 : e.name) && void 0 !== d ? d : null, r = null !== (o = null == e ? void 0 : e.id) && void 0 !== o ? o : null
                }
                return {
                    video_input_resolution: e,
                    video_input_frame_rate: t,
                    soundshare_session: i,
                    share_game_name: n,
                    share_game_id: r
                }
            }

            function u(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = n.default.getGame();
                switch (t = {
                        ...t,
                        overlay_game_name: null != s ? s.name : "Unknown Game",
                        overlay_app_id: null != s ? s.id : null
                    }, e) {
                    case d.AnalyticEvents.VOICE_CHANNEL_SELECTED:
                    case d.AnalyticEvents.SETTINGS_PANE_VIEWED:
                    case d.AnalyticEvents.GUILD_VIEWED:
                    case d.AnalyticEvents.CHANNEL_OPENED:
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
            var s = i("605250"),
                a = i("305961"),
                n = i("802493");
            let r = new s.default("GuildVersions");
            var l = new class e {
                getCommittedVersions() {
                    try {
                        var e, t;
                        let i = null === (t = n.default.versions()) || void 0 === t ? void 0 : null === (e = t.getManySyncUnsafe()) || void 0 === e ? void 0 : e.map(e => [e.id, e.version]);
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
                    for (let i of e.guilds) "unavailable" !== i.data_mode && this.updateWith(i.id, [i]), null == a.default.getGuild(i.id) && this.remove(i.id, t);
                    this.commit(t)
                }
                handleConnectionOpen(e, t) {
                    for (let t of (this.reset(), e.guilds)) this.updateWith(t.id, [t]);
                    this.commit(t)
                }
                handleGuildCreate(e, t) {
                    var i;
                    let s = e.guild,
                        a = e.guild.id;
                    this.updateWith(a, [s]), this.updateWith(a, s.emojis), this.updateWith(a, s.stickers), this.updateWith(a, s.channels), this.updateWith(a, null === (i = s.channelUpdates) || void 0 === i ? void 0 : i.writes), this.updateWith(a, Array.isArray(s.roles) ? s.roles : Object.values(s.roles)), this.commit(t)
                }
                handleGuildUpdate(e, t) {
                    let i = e.guild,
                        s = e.guild.id;
                    this.updateWith(s, [i]), this.updateWith(s, i.emojis), this.updateWith(s, i.stickers), this.updateWith(s, Array.isArray(i.roles) ? i.roles : Object.values(i.roles)), this.commit(t)
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
                    this.reset(), n.default.versionsTransaction(e).delete()
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
                        var i, s;
                        let a = Math.max(null !== (i = this.committed.get(e)) && void 0 !== i ? i : 0, null !== (s = this.pending.get(e)) && void 0 !== s ? s : 0),
                            n = this.computeLatestVersion(a, t);
                        n > a && this.pending.set(e, n)
                    }
                }
                computeLatestVersion(e, t) {
                    let i = e;
                    for (let e of t) {
                        var s;
                        i = Math.max(i, null !== (s = e.version) && void 0 !== s ? s : 0)
                    }
                    return i
                }
                commit(e) {
                    if (this.pending.size > 0 && 0 === this.pauseTokens.size) {
                        let t = n.default.versionsTransaction(e);
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
                    return d
                }
            });
            var s = i("605250"),
                a = i("802493"),
                n = i("723939");
            let r = "version",
                l = new s.default("KvCacheVersion");
            var d = new class e {
                async okAsync(e) {
                    let t = await a.default.cache(e).get(r);
                    return null == t ? null : 3 === t
                }
                okSync(e) {
                    try {
                        let t = a.default.cache(e).getSyncUnsafe(r);
                        return null == t ? null : 3 === t
                    } catch (e) {
                        return l.log("couldn't read version from database: ".concat(e.message)), !1
                    }
                }
                handleClearGuildCache(e) {
                    a.default.cacheTransaction(e).delete(r), a.default.cacheTransaction(e).delete("CacheStore.Nonce"), n.default.replaceDisableAllDatabases("CLEAR_GUILD_CACHE (via KvCacheVersion)")
                }
                handleWrite(e) {
                    a.default.cacheTransaction(e).put("hello", "\uD83D\uDC4B"), a.default.cacheTransaction(e).put(r, 3)
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
                    return a
                }
            });
            let s = new Set;

            function a() {
                return s.size
            }
        },
        837374: function(e, t, i) {
            "use strict";
            var s, a;

            function n(e) {
                let {
                    sessionId: t,
                    userId: i,
                    applicationId: s,
                    channelId: a,
                    streamKey: n
                } = e;
                return {
                    session_id: t,
                    user_id: i,
                    application_id: s,
                    channel_id: a,
                    stream_key: n
                }
            }

            function r(e, t, i) {
                let {
                    session_id: s,
                    application_id: a,
                    channel_id: n,
                    stream_key: r
                } = e;
                return {
                    sessionId: s,
                    userId: t,
                    applicationId: a,
                    channelId: n,
                    streamKey: r,
                    source: i
                }
            }
            i.r(t), i.d(t, {
                BroadcastSourceType: function() {
                    return s
                },
                broadcastToServer: function() {
                    return n
                },
                broadcastFromServer: function() {
                    return r
                }
            }), (a = s || (s = {}))[a.GLOBAL = 0] = "GLOBAL", a[a.GUILD = 1] = "GUILD"
        },
        548578: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                MAX_CACHE_AGE_MS: function() {
                    return s
                },
                CACHE_VERSION: function() {
                    return a
                },
                getDefaultState: function() {
                    return n
                }
            });
            let s = 2592e6,
                a = "stable-50";

            function n() {
                return {
                    nonce: "",
                    useGuildVersions: !1,
                    highestLastMessageId: "0",
                    readStateVersion: 0,
                    userGuildSettingsVersion: -1,
                    userSettingsVersion: -1,
                    version: a,
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
                    return P
                }
            });
            var s, a, n, r = i("498225"),
                l = i("173333"),
                d = i("913144"),
                o = i("105059"),
                u = i("605250"),
                c = i("271938"),
                _ = i("42203"),
                h = i("162771"),
                E = i("299039"),
                m = i("91131"),
                p = i("70754"),
                S = i("548578");
            let f = new u.default("ClientStateStore"),
                T = m.initialState.nonce,
                g = m.initialState.useGuildVersions,
                I = m.initialState.highestLastMessageId,
                C = m.initialState.readStateVersion,
                A = m.initialState.userGuildSettingsVersion,
                y = null !== (s = m.initialState.userSettingsVersion) && void 0 !== s ? s : -1,
                N = m.initialState.cacheCreationDate,
                D = m.initialState.apiCodeVersion,
                R = null !== (a = m.initialState.privateChannelsVersion) && void 0 !== a ? a : "0",
                v = new Set(null !== (n = m.initialState.guildIdsRequiringDeletedIdsSync) && void 0 !== n ? n : []),
                b = m.initialState.lastSelectedGuildId,
                O = !1;

            function L(e) {
                null != e && 1 === E.default.compare(e, I) && (I = e)
            }

            function U() {
                I = "0", C = 0, A = -1, y = -1, R = "0", m.clear(), D = 0, v.clear()
            }
            class k extends r.default.Store {
                initialize() {
                    this.waitFor(c.default), this.syncWith([h.default], () => {
                        if (!O) return !1;
                        b = h.default.getGuildId()
                    })
                }
                persist(e) {
                    f.verbose("writing ClientStateStore (nonce: ".concat(e, ")")), null == N && (N = Date.now()), T = e, m.persist(c.default.getId(), {
                        nonce: e,
                        version: S.CACHE_VERSION,
                        useGuildVersions: g,
                        highestLastMessageId: I,
                        readStateVersion: C,
                        userGuildSettingsVersion: A,
                        userSettingsVersion: y,
                        cacheCreationDate: N,
                        privateChannelsVersion: R,
                        apiCodeVersion: D,
                        guildIdsRequiringDeletedIdsSync: Array.from(v),
                        lastSelectedGuildId: b
                    }), l.default.remove("GuildIdsRequiringDeletedIdsSync")
                }
                clear() {
                    U()
                }
                getClientState() {
                    let e = g && (0, p.isCacheEnabled)() ? Object.fromEntries(o.default.getCommittedVersions()) : {};
                    return {
                        knownGuildVersions: e,
                        highestLastMessageId: I,
                        readStateVersion: C,
                        userGuildSettingsVersion: A,
                        userSettingsVersion: y,
                        privateChannelsVersion: R,
                        apiCodeVersion: D,
                        lastSelectedGuildId: b
                    }
                }
                getGuildIdsRequiringDeletedIdsSync() {
                    return v
                }
                getSavedNonce() {
                    return T
                }
            }
            k.displayName = "ClientStateStore";
            var P = new k(d.default, {
                BACKGROUND_SYNC: function(e) {
                    for (let t of e.guilds) "partial" === t.data_mode && t.unableToSyncDeletes && v.add(t.id);
                    null != e.apiCodeVersion && (D = e.apiCodeVersion)
                },
                CONNECTION_OPEN: function(e) {
                    var t, i, s, a, n, r;
                    let {
                        guilds: l,
                        readState: d,
                        userGuildSettings: o,
                        userSettingsProto: u,
                        apiCodeVersion: c
                    } = e;
                    for (let e of (C = d.version, A = o.version, y = null !== (i = null == u ? void 0 : null === (t = u.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== i ? i : -1, D = c, O = !0, g = !0, l)) e.unableToSyncDeletes && v.add(e.id), e.unableToSyncDeletes && v.add(e.id), null === (s = e.channels) || void 0 === s || s.forEach(e => L(e.lastMessageId)), null === (n = e.channelUpdates) || void 0 === n || null === (a = n.writes) || void 0 === a || a.forEach(e => L(e.lastMessageId)), null === (r = e.channelTimestampUpdates) || void 0 === r || r.forEach(e => L(e.last_message_id))
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
                            channel_id: s
                        },
                        isPushNotification: a,
                        optimistic: n
                    } = e;
                    !a && !n && (L(i), (null === (t = _.default.getChannel(s)) || void 0 === t ? void 0 : t.isPrivate()) && 1 === E.default.compare(i, R) && (R = i))
                },
                GUILD_CREATE: function(e) {
                    var t, i, s, a;
                    let {
                        guild: n
                    } = e;
                    !n.unavailable && (n.unableToSyncDeletes && v.add(n.id), null === (t = n.channels) || void 0 === t || t.forEach(e => L(e.lastMessageId)), null === (s = n.channelUpdates) || void 0 === s || null === (i = s.writes) || void 0 === i || i.forEach(e => L(e.lastMessageId)), null === (a = n.channelTimestampUpdates) || void 0 === a || a.forEach(e => L(e.last_message_id)), n.unableToSyncDeletes && v.add(n.id))
                },
                CLEAR_GUILD_CACHE: U,
                CLEAR_CACHES: U,
                LOGOUT: U,
                LOGIN: U,
                MESSAGE_ACK: function(e) {
                    let {
                        version: t,
                        ...i
                    } = e;
                    null != t ? C = t : f.log("Received null read states version", i)
                },
                CHANNEL_PINS_ACK: function(e) {
                    let {
                        version: t,
                        ...i
                    } = e;
                    null != t ? C = t : f.log("Received null read states version", i)
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e;
                    for (let e of t) null != e.version && e.version > A && (A = e.version)
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
                    return d
                },
                clear: function() {
                    return o
                }
            });
            var s = i("173333"),
                a = i("548578");
            let n = "ClientStateStore",
                r = (0, a.getDefaultState)();
            r.version === a.CACHE_VERSION && null != r.cacheCreationDate && r.cacheCreationDate + a.MAX_CACHE_AGE_MS > Date.now() || (r = (0, a.getDefaultState)());
            let l = r;

            function d(e, t) {
                s.default.set(n, t)
            }

            function o() {
                s.default.remove(n)
            }
        },
        70754: function(e, t, i) {
            "use strict";

            function s() {
                return !1
            }
            i.r(t), i.d(t, {
                isCacheEnabled: function() {
                    return s
                }
            })
        },
        56947: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                areClipsEnabled: function() {
                    return d
                },
                useEnableClips: function() {
                    return o
                },
                useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock: function() {
                    return u
                },
                useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark: function() {
                    return c
                }
            });
            var s = i("862205"),
                a = i("584687"),
                n = i("18346");
            let r = (0, s.createExperiment)({
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
                l = (0, s.createExperiment)({
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

            function d() {
                if (!(0, n.default)()) return !1;
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
                } = a.default.getCurrentConfig({
                    location: "areClipsEnabled"
                }, {
                    autoTrackExposure: !1
                });
                return e || t || i
            }

            function o() {
                let e = (0, n.default)(),
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
                        enableDecoupledGameClipping: s
                    } = a.default.useExperiment({
                        location: "useEnableClips"
                    }, {
                        autoTrackExposure: !1
                    });
                return (i || t || s) && e
            }
            let u = e => {
                    let {
                        autoTrackExposure: t
                    } = e, i = (0, n.default)(), {
                        enablePremiumEarlyAccessGoLiveRoadblock: s
                    } = l.useExperiment({
                        location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
                    }, {
                        autoTrackExposure: t && i
                    });
                    return !!i && s
                },
                c = e => {
                    let {
                        autoTrackExposure: t
                    } = e, i = (0, n.default)(), {
                        enablePremiumEarlyAccessAnnouncementCoachmark: s
                    } = l.useExperiment({
                        location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
                    }, {
                        autoTrackExposure: t && i
                    });
                    return !!i && s
                }
        },
        18346: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var s = i("42887"),
                a = i("773336"),
                n = i("860604");

            function r() {
                return a.isDesktop() && s.default.getMediaEngine().supports(n.Features.CLIPS)
            }
        },
        225772: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var s = i("385976"),
                a = i("867805"),
                n = i("49111");

            function r(e) {
                let t = null;
                if (null != e.emojiId && "0" !== e.emojiId) {
                    let i = s.default.getUsableCustomEmojiById(e.emojiId);
                    t = null != i ? {
                        id: i.id,
                        name: i.name,
                        animated: i.animated
                    } : null
                } else if (null != e.emojiName && "" !== e.emojiName) {
                    let i = a.default.getByName(a.default.convertSurrogateToName(e.emojiName, !1));
                    t = null != i ? {
                        id: null,
                        name: i.surrogates,
                        animated: !1
                    } : null
                }
                let i = Number(e.expiresAtMs);
                return {
                    name: "Custom Status",
                    type: n.ActivityTypes.CUSTOM_STATUS,
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
                    return a
                }
            });
            var s = i("913144");
            class a {
                static flush(e, t) {
                    for (let i of a.batchers) null != i.action && (null == e || i.shouldFlush(e, t)) && i.flush()
                }
                flush() {
                    let {
                        action: e
                    } = this;
                    this.action = null, null != e && s.default.dispatch(e).catch(t => this.socket.resetSocketOnError(t, e.type))
                }
                constructor(e, t, i) {
                    this.socket = e, this.action = null, this.shouldFlush = i, this.add = e => {
                        this.action = t(this.action, e)
                    }, a.batchers.push(this)
                }
            }
            a.batchers = []
        },
        265912: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var s = 16381
        },
        799600: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            });
            var s = i("427964"),
                a = i.n(s),
                n = i("605250"),
                r = i("197881");
            let {
                NativeModules: l
            } = {}, d = [];
            class o {
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
            d.push(class extends o {
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
                    let s = this._onDataReady;
                    if (null === s) throw Error("Cannot feed unless a data ready callback is registered.");
                    if (e instanceof ArrayBuffer) {
                        let s = new DataView(e),
                            a = s.byteLength >= 4 && 65535 === s.getUint32(s.byteLength - 4, !1);
                        i.push(e, !!a && t.Z_SYNC_FLUSH)
                    } else throw Error("Expected array buffer, but got " + typeof e)
                }
                close() {
                    null != this._inflate && (this._inflate.onEnd = null, this._inflate.chunks = []), this._inflate = null
                }
                handleFlushEnd(e) {
                    let t;
                    let i = this._pako,
                        s = this._inflate;
                    if (null == s) {
                        new(0, n.default)("GatewayCompressionHandler").error("flush end happened on closed compression adapter");
                        return
                    }
                    if (e !== i.Z_OK) throw Error("zlib error, ".concat(e, ", ").concat(s.strm.msg));
                    let {
                        chunks: a
                    } = s, r = a.length;
                    if (this._gatewayEncoding.wantsString()) t = r > 1 ? a.join("") : a[0];
                    else if (r > 1) {
                        let e = 0;
                        for (let t = 0; t < r; t++) e += a[t].length;
                        let i = new Uint8Array(e),
                            s = 0;
                        for (let e = 0; e < r; e++) {
                            let t = a[e];
                            i.set(t, s), s += t.length
                        }
                        t = i
                    } else t = a[0];
                    a.length = 0, null != this._onDataReady && this._onDataReady(t)
                }
                constructor(e) {
                    super(e), this._pako = i("988211");
                    let t = this._pako,
                        s = this._inflate = new t.Inflate({
                            chunkSize: 65536,
                            to: this._gatewayEncoding.wantsString() ? "string" : ""
                        });
                    s.onEnd = this.handleFlushEnd.bind(this)
                }
            }), d.push(class extends o {
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
                    super(...e), this._pako = i("988211")
                }
            }), d.push(class extends o {
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
            class u extends o {
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
            d.push(u);
            let c = a.find(d, e => e.canUse());
            r.ProcessArgs.isDiscordGatewayPlaintextSet() && (c = u);
            var _ = c
        },
        619443: function(e, t, i) {
            "use strict";
            let s;
            i.r(t), i.d(t, {
                default: function() {
                    return G
                }
            });
            var a = i("427964"),
                n = i.n(a),
                r = i("498225"),
                l = i("913144"),
                d = i("723939"),
                o = i("605250"),
                u = i("374014"),
                c = i("374363"),
                _ = i("271938"),
                h = i("950104"),
                E = i("42203"),
                m = i("260320"),
                p = i("42887"),
                S = i("590401"),
                f = i("18494"),
                T = i("101125"),
                g = i("205817"),
                I = i("447214"),
                C = i("518916"),
                A = i("571420"),
                y = i("399010"),
                N = i("49111"),
                D = i("397336");
            (0, C.setDispatchSocketMessageFunction)(y.default);
            let R = new o.default("ConnectionStore");
            let v = 0,
                b = null;

            function O() {
                C.localVoiceState.update()
            }

            function L() {
                return C.localVoiceState.update(), C.localLobbyVoiceStates.update(), !1
            }

            function U() {
                return C.localPresenceState.update(), !1
            }

            function k() {
                return C.localLobbyVoiceStates.update(), !1
            }

            function P(e) {
                C.socket.isSessionEstablished() && C.socket.streamDelete(e)
            }
            class M extends r.default.Store {
                initialize() {
                    this.waitFor(_.default, f.default, E.default, h.default, m.default, c.default), this.syncWith([p.default], L), this.syncWith([T.default], U)
                }
                getSocket() {
                    return C.socket
                }
                isTryingToConnect() {
                    return !C.socket.isClosed()
                }
                isConnected() {
                    return C.socket.isSessionEstablished()
                }
                isConnectedOrOverlay() {
                    return C.socket.isSessionEstablished() || __OVERLAY__
                }
                lastTimeConnectedChanged() {
                    return v
                }
            }
            M.displayName = "GatewayConnectionStore";
            var G = new M(l.default, {
                START_SESSION: function() {
                    return C.socket.isClosed() ? (R.verbose("Socket is reconnecting because of starting new session"), C.socket.connect()) : (R.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
                },
                LOGIN_SUCCESS: function() {
                    return R.verbose("session refresh dispatched", {
                        isEstablished: C.socket.isSessionEstablished()
                    }), !!C.socket.isSessionEstablished() && (C.socket.close(), C.socket.connect())
                },
                LOGOUT: function(e) {
                    e.isSwitchingAccount && C.localPresenceState.handleAccountSwitch(), R.verbose("Closing socket because of logout"), C.socket.close()
                },
                CLEAR_CACHES: function(e) {
                    return C.socket.close(), C.socket.clearDispatchQueue(), C.socket.connect(), !1
                },
                CONNECTION_OPEN: function(e) {
                    v = Date.now(), b = e.sessionId, C.localPresenceState.handleConnectionOpen();
                    let t = {},
                        i = f.default.getVoiceChannelId();
                    if (null != i) {
                        let e = E.default.getChannel(i);
                        null != e && (t = {
                            guildId: e.getGuildId(),
                            channelId: i
                        })
                    }
                    C.localVoiceState.update(t, !0), C.localLobbyVoiceStates.update({}, !0)
                },
                CONNECTION_CLOSED: function() {
                    R.verbose("connection closed dispatched"), v = Date.now()
                },
                RTC_CONNECTION_STATE: function(e) {
                    if (e.state !== N.RTCConnectionStates.DISCONNECTED) return !1;
                    e.willReconnect && (null != e.streamKey ? C.socket.streamPing(e.streamKey) : C.socket.voiceServerPing())
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    return C.localVoiceState.update({
                        guildId: e.guildId,
                        channelId: e.channelId
                    }), !1
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        if (_.default.getId() !== t.userId) return e;
                        if (t.sessionId === b) C.localVoiceState.setState({
                            guildId: t.guildId,
                            channelId: t.channelId
                        });
                        else {
                            if (t.guildId !== C.localVoiceState.guildId) return e;
                            C.localVoiceState.setState({
                                guildId: null,
                                channelId: null
                            })
                        }
                        return !0
                    }, !1)
                },
                GUILD_DELETE: function(e) {
                    e.guild.id === C.localVoiceState.guildId && C.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    t.id === C.localVoiceState.channelId && C.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                CALL_DELETE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    t === C.localVoiceState.channelId && C.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                APP_STATE_UPDATE: function(e) {
                    return e.state === N.AppStates.ACTIVE && null != s && (A.setIsPaused(!1), _.default.isAuthenticated() && C.socket.resetBackoff("App state is active")), s = e, !1
                },
                GUILD_MEMBERS_REQUEST: function(e) {
                    return C.socket.isSessionEstablished() && ("userIds" in e ? n(e.userIds).chunk(100).forEach(t => {
                        C.socket.requestGuildMembers(e.guildIds, {
                            userIds: t,
                            presences: !!e.presences
                        })
                    }) : C.socket.requestGuildMembers(e.guildIds, {
                        query: e.query,
                        limit: e.limit,
                        presences: !!e.presences
                    })), !1
                },
                GUILD_SEARCH_RECENT_MEMBERS: function(e) {
                    let {
                        guildId: t,
                        query: i,
                        continuationToken: s
                    } = e;
                    C.socket.isSessionEstablished() && C.socket.searchRecentMembers(t, {
                        query: i,
                        continuationToken: s
                    })
                },
                GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
                    let {
                        guildId: t,
                        subscriptions: i
                    } = e;
                    return C.socket.isSessionEstablished() && C.socket.updateGuildSubscriptions(t, i), !1
                },
                CALL_CONNECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return C.socket.isSessionEstablished() && C.socket.callConnect(t), !1
                },
                CALL_CONNECT_MULTIPLE: function(e) {
                    let {
                        channelIds: t
                    } = e;
                    return C.socket.isSessionEstablished() && t.forEach(e => {
                        C.socket.callConnect(e)
                    }), !1
                },
                LOBBY_CONNECT: function(e) {
                    let {
                        lobbyId: t,
                        lobbySecret: i
                    } = e;
                    return C.socket.isSessionEstablished() && C.socket.lobbyConnect(t, i), !1
                },
                LOBBY_DISCONNECT: function(e) {
                    let {
                        lobbyId: t
                    } = e;
                    return C.socket.isSessionEstablished() && C.socket.lobbyDisconnect(t), C.localLobbyVoiceStates.update(), !1
                },
                LOBBY_VOICE_CONNECT: k,
                LOBBY_VOICE_DISCONNECT: k,
                RPC_APP_DISCONNECTED: k,
                STREAM_CREATE: O,
                STREAM_START: function(e) {
                    let {
                        streamType: t,
                        guildId: i,
                        channelId: s
                    } = e;
                    if (C.socket.isSessionEstablished()) {
                        var a, n;
                        let e = null != i ? null === (a = E.default.getChannel(s)) || void 0 === a ? void 0 : a.rtcRegion : null === (n = h.default.getCall(s)) || void 0 === n ? void 0 : n.region;
                        C.socket.streamCreate(t, i, s, null != e ? e : S.default.getPreferredRegion())
                    }
                    return !1
                },
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t,
                        allowMultiple: i
                    } = e;
                    return C.socket.isSessionEstablished() && (i || ! function() {
                        let e = function() {
                            return g.default.getAllActiveStreamKeys().find(e => (0, u.decodeStreamKey)(e).ownerId === _.default.getId())
                        }();
                        g.default.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => P(e))
                    }(), C.socket.streamWatch(t)), !1
                },
                STREAM_STOP: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    return P(t), O(), !1
                },
                STREAM_SET_PAUSED: function(e) {
                    let {
                        streamKey: t,
                        paused: i
                    } = e;
                    C.socket.isSessionEstablished() && C.socket.streamSetPaused(t, i)
                },
                PUSH_NOTIFICATION_CLICK: function() {
                    return C.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
                },
                EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
                    var t, i;
                    let {
                        channelId: s,
                        applicationId: a
                    } = e, n = null !== (i = null === (t = E.default.getChannel(s)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== i ? i : null;
                    C.socket.embeddedActivityClose(n, s, a)
                },
                REQUEST_FORUM_UNREADS: function(e) {
                    let {
                        guildId: t,
                        channelId: i,
                        threads: s
                    } = e;
                    C.socket.requestForumUnreads(t, i, s)
                },
                REQUEST_SOUNDBOARD_SOUNDS: function(e) {
                    let {
                        guildIds: t
                    } = e;
                    C.socket.requestSoundboardSounds(t)
                },
                REMOTE_COMMAND: function(e) {
                    let {
                        sessionId: t,
                        payload: i
                    } = e;
                    return C.socket.isSessionEstablished() && C.socket.remoteCommand(t, i), !1
                },
                RESET_CONNECTION: function(e) {
                    C.socket.connectionState !== I.ConnectionState.WILL_RECONNECT && (e.badCache ? (d.default.replaceDisableAllDatabases("RESET_CONNECTION"), C.socket.resetSocketOnError(Error("Guild data was missing from store (via RESET_CONNECTION)"), "RESET_CONNECTION_DATA_MISSING")) : C.socket.resetSocketOnError(Error("Connection reset requested (via RESET_CONNECTION)"), "RESET_CONNECTION"))
                },
                RTC_SPEED_TEST_START_TEST: function() {
                    return C.socket.isSessionEstablished() && C.socket.speedTestCreate(S.default.getPreferredRegion()), !1
                },
                RTC_SPEED_TEST_STOP_TEST: function() {
                    return C.socket.isSessionEstablished() && C.socket.speedTestDelete(), !1
                },
                CLIPS_SETTINGS_UPDATE: O,
                RUNNING_GAMES_CHANGE: O,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t;
                    e.settings.type === D.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && O()
                }
            })
        },
        705215: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var s = i("197881"),
                a = i("338580");
            let n = (0, a.getErlpackEncoding)();
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
            let l = void 0 !== n ? n : r;
            s.ProcessArgs.isDiscordGatewayPlaintextSet() && (l = r);
            var d = l
        },
        338580: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getErlpackEncoding: function() {
                    return r
                }
            });
            var s = i("605250"),
                a = i("773336"),
                n = i("50885");

            function r() {
                if (a.isPlatformEmbedded) {
                    let e;
                    try {
                        e = n.default.requireModule("discord_erlpack")
                    } catch (t) {
                        try {
                            e = n.default.requireModule("erlpack")
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
                                throw new(0, s.default)("GatewayEncodingErlpackEncoding").error("Error unpacking", {
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
                    return a
                },
                default: function() {
                    return w
                }
            });
            var s, a, n = i("161179"),
                r = i.n(n),
                l = i("988211"),
                d = i("435653"),
                o = i("379279"),
                u = i("538732"),
                c = i("498225"),
                _ = i("990746"),
                h = i("913144"),
                E = i("288206"),
                m = i("605250"),
                p = i("155084"),
                S = i("410912"),
                f = i("313915"),
                T = i("599110"),
                g = i("922932"),
                I = i("773336"),
                C = i("286235"),
                A = i("265912"),
                y = i("799600"),
                N = i("705215"),
                D = i("342797"),
                R = i("340115"),
                v = i("289362"),
                b = i("571420"),
                O = i("797785"),
                L = i("49111");
            let U = new m.default("GatewaySocket"),
                k = new N.default;

            function P() {}(s = a || (a = {})).CLOSED = "CLOSED", s.WILL_RECONNECT = "WILL_RECONNECT", s.CONNECTING = "CONNECTING", s.IDENTIFYING = "IDENTIFYING", s.RESUMING = "RESUMING", s.SESSION_ESTABLISHED = "SESSION_ESTABLISHED";

            function M(e) {
                return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
            }
            let G = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
            class w extends R.default {
                get connectionState() {
                    return this.connectionState_
                }
                set connectionState(e) {
                    U.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
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
                    null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && U.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
                }
                _connect() {
                    var e, t;
                    let i;
                    if (!this.willReconnect()) {
                        U.verbose("Skipping _connect because willReconnect is false");
                        return
                    }
                    if (b.getIsPaused()) {
                        U.info("Skipping _connect because socket is paused");
                        return
                    }
                    this.connectionState = a.CONNECTING, this.nextReconnectIsImmediate = !1;
                    let s = this.compressionHandler.getAlgorithm(),
                        n = k.getName(),
                        r = this._getGatewayUrl(),
                        l = window.GLOBAL_ENV.API_VERSION;
                    o.default.mark("\uD83C\uDF10", "Socket._connect"), U.info("[CONNECT] ".concat(r, ", ") + "encoding: ".concat(n, ", ") + "version: ".concat(l, ", ") + "compression: ".concat(null != s ? s : "none")), null !== this.webSocket && (U.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
                        let e = Date.now() - this.connectionStartTime;
                        this._handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
                    }, 3e4);
                    let d = new URL(r);
                    d.searchParams.append("encoding", n), d.searchParams.append("v", l.toString()), null != s && d.searchParams.append("compress", s);
                    ! function(e) {
                        let t, {
                                gatewayURL: i,
                                newCallback: s,
                                onOpen: a,
                                onMessage: n,
                                onError: r,
                                onClose: l
                            } = e,
                            d = window._ws,
                            o = !1,
                            u = !1,
                            c = null,
                            _ = null;
                        if (window._ws = null, null != d) {
                            if (t = d.ws, d.state.gateway !== i) U.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(d.state.gateway, " !== ").concat(i)), t.close(1e3), t = null;
                            else {
                                var h;
                                let e = {
                                    ...d.state
                                };
                                null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? {
                                    ...e,
                                    data: e.data.substring(0, 100)
                                } : e)), U.log("[FAST CONNECT] successfully took over websocket, state:", {
                                    ...e,
                                    messages: null === (h = e.messages) || void 0 === h ? void 0 : h.length
                                }), o = d.state.open, u = d.state.identify, c = d.state.messages, _ = d.state.clientState
                            }
                        }
                        null == t && ((t = (0, O.default)(i)).binaryType = "arraybuffer"), s(t), o && a(u, _), null != c && c.forEach(n), t.onopen = () => a(u, _), t.onmessage = n, t.onclose = l, t.onerror = r
                    }({
                        gatewayURL: d.toString(),
                        newCallback: e => {
                            this.webSocket = e, this.compressionHandler.bindWebSocket(e)
                        },
                        onOpen: (e, t) => {
                            o.default.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
                            let i = Date.now() - this.connectionStartTime;
                            U.info("[CONNECTED] ".concat(d.toString(), " in ").concat(i, " ms")), this.isFastConnect = e, this.lastIdentifyClientState = t, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
                        },
                        onMessage: (e = this.compressionHandler, t = (e, t) => {
                            let i = Date.now(),
                                {
                                    op: s,
                                    s: a,
                                    t: n,
                                    d: r
                                } = k.unpack(e);
                            s !== R.Opcode.DISPATCH && o.default.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(s, " ").concat(R.Opcode[s]));
                            let l = Date.now() - i;
                            switch ("READY" === n ? S.default.parseReady.set(i, l) : "READY_SUPPLEMENTAL" === n ? S.default.parseReadySupplemental.set(i, l) : l > 10 && o.default.mark("\uD83C\uDF10", "Parse " + n, l), null != a && (this.seq = a), s) {
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
                                    this._handleDispatch(r, n, "READY" === n ? {
                                        compressed_byte_size: t,
                                        uncompressed_byte_size: M(e),
                                        compression_algorithm: this.compressionHandler.getAlgorithm(),
                                        packing_algorithm: k.getName(),
                                        unpack_duration_ms: l
                                    } : null);
                                    break;
                                default:
                                    U.info("Unhandled op ".concat(s))
                            }
                        }, i = 0, e.dataReady(e => {
                            try {
                                return t(e, i)
                            } finally {
                                i = 0
                            }
                        }), t => {
                            let s = t.data;
                            i += M(s), e.feed(s)
                        }),
                        onError: () => {
                            this.setResumeUrl(null), g.default.flushDNSCache(), this._handleClose(!1, 0, "An error with the websocket occurred")
                        },
                        onClose: e => {
                            let {
                                wasClean: t,
                                code: i,
                                reason: s
                            } = e;
                            return this._handleClose(t, i, s)
                        }
                    })
                }
                _handleHello(e) {
                    let t = this.heartbeatInterval = e.heartbeat_interval,
                        i = Date.now() - this.connectionStartTime;
                    U.verbose("[HELLO] via ".concat((0, D.getConnectionPath)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(i, " ms")), this._startHeartbeater()
                }
                _handleReconnect() {
                    U.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = a.WILL_RECONNECT, this._connect()
                }
                _handleInvalidSession(e) {
                    U.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
                }
                _handleDispatch(e, t, i) {
                    let s = performance.now();
                    if (this.connectionState === a.RESUMING) {
                        let e = s - this.resumeAnalytics.lastUpdateTime;
                        0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = s, this.resumeAnalytics.numEvents += 1, c.default.Emitter.pause(150)
                    }
                    this.isDeferringDispatches ? this.queuedDispatches.push({
                        data: e,
                        type: t,
                        compressionAnalytics: i
                    }) : this._handleDispatchWithoutQueueing(e, t, i), this.connectionState === a.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - s)
                }
                _handleDispatchWithoutQueueing(e, t, i) {
                    if ("READY" === t) return this._handleReady(e, i);
                    if ("READY_SUPPLEMENTAL" === t) {
                        c.default.Emitter.resume();
                        let e = Date.now() - this.connectionStartTime;
                        U.info("[READY_SUPPLEMENTAL] took ".concat(e, "ms")), this.connectionState = a.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0
                    } else if ("RESUMED" === t) {
                        c.default.Emitter.resume();
                        let t = Date.now() - this.connectionStartTime;
                        U.info("[RESUMED] took ".concat(t, "ms, replayed ").concat(this.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq)), U.verbose((0, D.getConnectionPath)(e)), (0, D.logResumeAnalytics)(this.resumeAnalytics), this.resumeAnalytics = (0, D.createResumeAnalytics)(), this.connectionState = a.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0
                    }
                    return this._handleGenericDispatch(e, t)
                }
                _getGatewayUrl() {
                    return null != this.resumeUrl ? this.resumeUrl : G
                }
                _handleReady(e, t) {
                    let i = Date.now();
                    c.default.Emitter.resume();
                    let s = Date.now() - this.connectionStartTime,
                        n = e.session_id;
                    this.sessionId = n;
                    let r = (0, D.getConnectionPath)(e);
                    o.default.setServerTrace(r), U.info("[READY] took ".concat(s, "ms, as ").concat(n)), U.verbose("".concat(r)), this.connectionState = a.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0;
                    let l = (0, D.getReadyPayloadByteSizeAnalytics)(e);
                    this._handleGenericDispatch(e, "READY"), (0, D.logReadyPayloadReceived)(this, e, i, t, l), this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0, this.setResumeUrl(e.resume_gateway_url)
                }
                _handleGenericDispatch(e, t) {
                    f.default.isLoggingGatewayEvents && U.verbose("<~", t, e);
                    try {
                        this.emit("dispatch", t, e)
                    } catch (e) {
                        this.resetSocketOnError(e, t)
                    }
                }
                _handleHeartbeatAck(e) {
                    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, U.verbose("Expedited heartbeat succeeded"))
                }
                _handleHeartbeatTimeout() {
                    this._cleanup(e => e.close(4e3)), this.connectionState = a.WILL_RECONNECT;
                    let e = this.gatewayBackoff.fail(() => this._connect());
                    U.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
                }
                _handleClose(e, t, i) {
                    if (e = e || !1, this._cleanup(), this.emit("close", {
                            code: t,
                            reason: i
                        }), 4004 === t) return this.connectionState = a.CLOSED, U.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, i);
                    if (this._tryDetectInvalidIOSToken(t, i, e), this.connectionState = a.WILL_RECONNECT, this.nextReconnectIsImmediate) U.warn("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(i, ") retrying immediately.")), this._connect();
                    else {
                        let s = this.gatewayBackoff.fail(() => this._connect());
                        U.warn("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(i, ") retrying in ").concat((s / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, i)
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
                        401 === t && (this.connectionState = a.CLOSED, U.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(i, 4004, "invalid token manually detected")), T.default.track(L.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                            api_status_code: t
                        })
                    }))
                }
                _reset(e, t, i) {
                    this.sessionId = null, this.seq = 0, U.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(i, ")")), this.emit("disconnect", {
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
                    if (this.webSocket = null, null != t) t.onopen = P, t.onmessage = P, t.onerror = P, t.onclose = P, null == e || e(t);
                    this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = new y.default(k)
                }
                _doResume() {
                    var e;
                    this.connectionState = a.RESUMING, this.resumeAnalytics = (0, D.createResumeAnalytics)(Date.now() - this.connectionStartTime), U.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(R.Opcode.RESUME, {
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
                    this.connectionState = a.IDENTIFYING, this.identifyStartTime = Date.now();
                    let {
                        token: t,
                        properties: i = {},
                        presence: s
                    } = e;
                    this.token = t, U.verbose("[IDENTIFY]");
                    let n = {
                            token: t,
                            capabilities: A.default,
                            properties: i,
                            presence: s,
                            compress: this.compressionHandler.usesLegacyCompression(),
                            client_state: (0, v.toGatewayClientState)(E.default.getClientState())
                        },
                        r = JSON.stringify(n);
                    this.identifyUncompressedByteSize = r.length, this.identifyCompressedByteSize = l.deflate(r).length, this.lastIdentifyClientState = n.client_state, this.identifyCount += 1, this.send(R.Opcode.IDENTIFY, n, !1)
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
                    this.token = t, this.connectionState = a.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, U.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
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
                    return U
                }
                willReconnect() {
                    return this.connectionState === a.WILL_RECONNECT
                }
                isClosed() {
                    return this.connectionState === a.CLOSED
                }
                isSessionEstablished() {
                    return this.connectionState === a.SESSION_ESTABLISHED || this.connectionState === a.RESUMING
                }
                isConnected() {
                    return this.connectionState === a.IDENTIFYING || this.connectionState === a.RESUMING || this.connectionState === a.SESSION_ESTABLISHED
                }
                connect() {
                    return this.isClosed() ? (U.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = a.WILL_RECONNECT, this._connect(), !0) : (U.error("Cannot start a new connection, connection state is not closed"), !1)
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
                    U.error("resetSocketOnError", e.stack);
                    let s = null != e.message && e.message.indexOf("Guild data was missing from store") >= 0;
                    p.default.increment({
                        name: u.MetricEvents.SOCKET_CRASHED,
                        tags: ["action:".concat(t)]
                    }, !0), i.sentry = i.sentry && !s, i.immediate = i.immediate || s, i.sentry && C.default.captureException(e, {
                        tags: {
                            socketCrashedAction: t
                        }
                    }), this._cleanup(e => e.close()), this._reset(!0, 1e3, "Resetting socket due to error."), this.clearDispatchQueue(), this.connectionState = a.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel(), 0 === this.dispatchExceptionBackoff._fails && i.immediate ? (U.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), this.didForceClearGuildHashes = !0, h.default.dispatch({
                        type: "CLEAR_GUILD_CACHE"
                    }), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 12e4)
                }
                close() {
                    if (this.isClosed()) {
                        U.verbose("close() called, but socket is already closed.");
                        return
                    }
                    U.info("Closing connection, current state is ".concat(this.connectionState)), this._cleanup(e => e.close()), this.connectionState = a.CLOSED, setImmediate(() => {
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
                        s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    if (!this.isClosed()) {
                        if (this.isConnected()) {
                            U.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
                                this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this._handleHeartbeatTimeout()
                            }, e);
                            return
                        }
                        i ? this.resetBackoff(t, s) : U.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
                    }
                }
                resetBackoff() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    U.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && this.connectionState !== a.SESSION_ESTABLISHED && this._handleClose(!0, 0, e)
                }
                constructor() {
                    super(), this.dispatchExceptionBackoff = new d.default(1e3, 6e4), this.dispatchSuccessTimer = 0, this.resumeAnalytics = (0, D.createResumeAnalytics)(), this.didForceClearGuildHashes = !1, this.identifyUncompressedByteSize = 0, this.identifyCompressedByteSize = 0, this.isDeferringDispatches = !0, this.queuedDispatches = [], this.analytics = {}, this.identifyCount = 0, this.resumeUrl = null, this.lastIdentifyClientState = null, this.iosGoingAwayEventCount = 0, this.send = (e, t, i) => {
                        f.default.isLoggingGatewayEvents && U.verbose("~>", e, t);
                        let s = k.pack({
                            op: e,
                            d: t
                        });
                        if (!i || this.isSessionEstablished()) try {
                            null != this.webSocket ? this.webSocket.send(s) : U.warn("Attempted to send without a websocket that exists. Opcode: ".concat(e))
                        } catch (e) {} else U.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
                    }, this.gatewayBackoff = new d.default(1e3, 6e4), this.connectionState_ = a.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = new y.default(k), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
                }
            }
        },
        342797: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                logReadyPayloadReceived: function() {
                    return d
                },
                getConnectionPath: function() {
                    return o
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
            var s = i("379279");
            i("287727");
            var a = i("410912"),
                n = i("697218"),
                r = i("599110"),
                l = i("49111");

            function d(e, t, i, n, d) {
                var o, u, c;
                let _ = function(e) {
                    let {
                        _trace: t
                    } = e, i = {};
                    try {
                        let e = JSON.parse(t);
                        null != e[0] && "" !== e[0] && e[0].startsWith("gateway-") && (i.identify_total_server_duration_ms = Math.floor(e[1].micros / 1e3)),
                            function e(t, i) {
                                if (null != t && t.length > 0)
                                    for (let s = 0; s < t.length; s += 2) {
                                        let a = t[s],
                                            n = t[s + 1];
                                        i(a, n.micros), e(n.calls, i)
                                    }
                            }(e, (e, t) => {
                                "start_session" === e ? i.identify_api_duration_ms = Math.floor(t / 1e3) : "guilds_connect" === e && (i.identify_guilds_duration_ms = Math.floor(t / 1e3))
                            })
                    } catch (e) {}
                    return i
                }(t);
                s.default.addDetail("payload_size(kb)", Math.round(n.uncompressed_byte_size / 1024)), s.default.addDetail("server_time(ms)", null !== (o = _.identify_total_server_duration_ms) && void 0 !== o ? o : 0);
                let h = {
                    ...n,
                    ..._,
                    ... function(e) {
                        let {
                            guilds: t
                        } = e, i = 0, s = 0;
                        return t.forEach(e => {
                            if (e.unavailable) return;
                            let t = "partial" === e.data_mode ? e.partial_updates.channels : e.channels;
                            null != t && null != t.forEach && t.forEach(e => {
                                s++, e.type === l.ChannelTypes.GUILD_CATEGORY && i++
                            })
                        }), {
                            num_guilds: t.length,
                            num_guild_channels: s,
                            num_guild_category_channels: i
                        }
                    }(t),
                    ...d,
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
                a.default.attachReadyPayloadProperties(h), r.default.track(l.AnalyticEvents.READY_PAYLOAD_RECEIVED, h, {
                    logEventProperties: !0
                })
            }

            function o(e) {
                try {
                    var t;
                    let i = function(e) {
                        if (null == e) return null;
                        let t = JSON.parse(e);
                        return function e(t, i) {
                            if (null == t) return "";
                            let s = "";
                            for (let a = 0; a < t.length; a += 2) s += "\n".concat(i).concat(t[a], ": ").concat(t[a + 1].micros / 1e3) + e(t[a + 1].calls, i + "|  ");
                            return s
                        }(t, "")
                    }(null === (t = e._trace) || void 0 === t ? void 0 : t[0]);
                    if (null != i) return i
                } catch (e) {}
                return null != e._trace ? e._trace.join(" -> ") : "???"
            }

            function u(e) {
                var t, i;
                let s = Date.now(),
                    {
                        guilds: a,
                        merged_presences: n,
                        merged_members: r,
                        read_state: l,
                        private_channels: d,
                        user_guild_settings: o,
                        user_settings: u,
                        user_settings_proto: c,
                        experiments: _,
                        guild_experiments: h,
                        relationships: E,
                        users: m,
                        ...p
                    } = e,
                    S = [],
                    f = [],
                    T = [],
                    g = [],
                    I = [],
                    C = [],
                    A = [],
                    y = [];
                return a.forEach(e => {
                    var t;
                    if (e.unavailable) return;
                    let {
                        features: i,
                        ...s
                    } = null !== (t = e.properties) && void 0 !== t ? t : {}, {
                        threads: a,
                        guild_scheduled_events: n,
                        ...r
                    } = e;
                    S.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels), f.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles), T.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis), g.push(a), I.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers), C.push(i), A.push(n), y.push(r, s)
                }), {
                    presences_size: JSON.stringify(null !== (t = null == n ? void 0 : n.friends) && void 0 !== t ? t : []).length,
                    users_size: JSON.stringify(m).length,
                    read_states_size: JSON.stringify(l).length,
                    private_channels_size: JSON.stringify(d).length,
                    user_settings_size: JSON.stringify(null != u ? u : "").length + (null != c ? c : "").length,
                    experiments_size: JSON.stringify(null != _ ? _ : []).length + JSON.stringify(null != h ? h : []).length,
                    user_guild_settings_size: JSON.stringify(o).length,
                    relationships_size: JSON.stringify(E).length,
                    remaining_data_size: JSON.stringify(null != p ? p : {}).length,
                    guild_channels_size: JSON.stringify(S).length,
                    guild_members_size: JSON.stringify(null != r ? r : []).length,
                    guild_presences_size: JSON.stringify(null !== (i = null == n ? void 0 : n.guilds) && void 0 !== i ? i : []).length,
                    guild_roles_size: JSON.stringify(f).length,
                    guild_emojis_size: JSON.stringify(T).length,
                    guild_threads_size: JSON.stringify(g).length,
                    guild_stickers_size: JSON.stringify(I).length,
                    guild_events_size: JSON.stringify(A).length,
                    guild_features_size: JSON.stringify(C).length,
                    guild_remaining_data_size: JSON.stringify(y).length,
                    size_metrics_duration_ms: Date.now() - s
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
                !(!(null === (t = n.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && .5 > Math.random()) && r.default.track(l.AnalyticEvents.CONNECTION_RESUMED, {
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
                    return a
                },
                default: function() {
                    return l
                }
            });
            var s, a, n = i("813361"),
                r = i("590401");
            (s = a || (a = {}))[s.DISPATCH = 0] = "DISPATCH", s[s.HEARTBEAT = 1] = "HEARTBEAT", s[s.IDENTIFY = 2] = "IDENTIFY", s[s.PRESENCE_UPDATE = 3] = "PRESENCE_UPDATE", s[s.VOICE_STATE_UPDATE = 4] = "VOICE_STATE_UPDATE", s[s.VOICE_SERVER_PING = 5] = "VOICE_SERVER_PING", s[s.RESUME = 6] = "RESUME", s[s.RECONNECT = 7] = "RECONNECT", s[s.REQUEST_GUILD_MEMBERS = 8] = "REQUEST_GUILD_MEMBERS", s[s.INVALID_SESSION = 9] = "INVALID_SESSION", s[s.HELLO = 10] = "HELLO", s[s.HEARTBEAT_ACK = 11] = "HEARTBEAT_ACK", s[s.CALL_CONNECT = 13] = "CALL_CONNECT", s[s.GUILD_SUBSCRIPTIONS = 14] = "GUILD_SUBSCRIPTIONS", s[s.LOBBY_CONNECT = 15] = "LOBBY_CONNECT", s[s.LOBBY_DISCONNECT = 16] = "LOBBY_DISCONNECT", s[s.LOBBY_VOICE_STATES_UPDATE = 17] = "LOBBY_VOICE_STATES_UPDATE", s[s.STREAM_CREATE = 18] = "STREAM_CREATE", s[s.STREAM_DELETE = 19] = "STREAM_DELETE", s[s.STREAM_WATCH = 20] = "STREAM_WATCH", s[s.STREAM_PING = 21] = "STREAM_PING", s[s.STREAM_SET_PAUSED = 22] = "STREAM_SET_PAUSED", s[s.REQUEST_GUILD_APPLICATION_COMMANDS = 24] = "REQUEST_GUILD_APPLICATION_COMMANDS", s[s.EMBEDDED_ACTIVITY_LAUNCH = 25] = "EMBEDDED_ACTIVITY_LAUNCH", s[s.EMBEDDED_ACTIVITY_CLOSE = 26] = "EMBEDDED_ACTIVITY_CLOSE", s[s.EMBEDDED_ACTIVITY_UPDATE = 27] = "EMBEDDED_ACTIVITY_UPDATE", s[s.REQUEST_FORUM_UNREADS = 28] = "REQUEST_FORUM_UNREADS", s[s.REMOTE_COMMAND = 29] = "REMOTE_COMMAND", s[s.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30] = "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH", s[s.REQUEST_SOUNDBOARD_SOUNDS = 31] = "REQUEST_SOUNDBOARD_SOUNDS", s[s.SPEED_TEST_CREATE = 32] = "SPEED_TEST_CREATE", s[s.SPEED_TEST_DELETE = 33] = "SPEED_TEST_DELETE", s[s.REQUEST_LAST_MESSAGES = 34] = "REQUEST_LAST_MESSAGES", s[s.SEARCH_RECENT_MEMBERS = 35] = "SEARCH_RECENT_MEMBERS";
            class l extends n.EventEmitter {
                presenceUpdate(e, t, i, s, n) {
                    this.send(a.PRESENCE_UPDATE, {
                        status: e,
                        since: t,
                        activities: i,
                        afk: s,
                        broadcast: n
                    })
                }
                voiceStateUpdate(e) {
                    let {
                        guildId: t = null,
                        channelId: i = null,
                        selfMute: s = !1,
                        selfDeaf: n = !1,
                        selfVideo: l = !1,
                        preferredRegion: d = null,
                        videoStreamParameters: o = null,
                        flags: u = 0
                    } = e, c = {
                        guild_id: t,
                        channel_id: i,
                        self_mute: s,
                        self_deaf: n,
                        self_video: l,
                        flags: u
                    };
                    if (null != i && r.default.shouldIncludePreferredRegion() && (c.preferred_region = d), null != o) c.tracks = null == o ? void 0 : o.map(e => ({
                        type: e.type,
                        rid: e.rid,
                        quality: e.quality
                    }));
                    this.send(a.VOICE_STATE_UPDATE, c)
                }
                voiceServerPing() {
                    this.send(a.VOICE_SERVER_PING, null)
                }
                embeddedActivityClose(e, t, i) {
                    this.send(a.EMBEDDED_ACTIVITY_CLOSE, {
                        guild_id: null != e ? e : "0",
                        channel_id: t,
                        application_id: i
                    })
                }
                requestGuildMembers(e, t) {
                    let {
                        query: i,
                        limit: s,
                        userIds: n,
                        presences: r
                    } = t;
                    this.send(a.REQUEST_GUILD_MEMBERS, {
                        guild_id: e,
                        query: i,
                        limit: s,
                        user_ids: n,
                        presences: r
                    })
                }
                searchRecentMembers(e, t) {
                    let {
                        query: i,
                        continuationToken: s
                    } = t;
                    this.send(a.SEARCH_RECENT_MEMBERS, {
                        guild_id: e,
                        query: null != i ? i : "",
                        continuation_token: null != s ? s : null
                    })
                }
                updateGuildSubscriptions(e, t) {
                    this.send(a.GUILD_SUBSCRIPTIONS, {
                        guild_id: e,
                        ...t
                    })
                }
                callConnect(e) {
                    this.send(a.CALL_CONNECT, {
                        channel_id: e
                    })
                }
                lobbyConnect(e, t) {
                    this.send(a.LOBBY_CONNECT, {
                        lobby_id: e,
                        lobby_secret: t
                    })
                }
                lobbyDisconnect(e) {
                    this.send(a.LOBBY_DISCONNECT, {
                        lobby_id: e
                    })
                }
                lobbyVoiceStatesUpdate(e) {
                    this.send(a.LOBBY_VOICE_STATES_UPDATE, e.map(e => ({
                        lobby_id: e.lobbyId,
                        self_mute: e.selfMute,
                        self_deaf: e.selfDeaf
                    })))
                }
                streamCreate(e, t, i) {
                    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    this.send(a.STREAM_CREATE, {
                        type: e,
                        guild_id: t,
                        channel_id: i,
                        preferred_region: s
                    })
                }
                streamWatch(e) {
                    this.send(a.STREAM_WATCH, {
                        stream_key: e
                    })
                }
                streamPing(e) {
                    this.send(a.STREAM_PING, {
                        stream_key: e
                    })
                }
                streamDelete(e) {
                    this.send(a.STREAM_DELETE, {
                        stream_key: e
                    })
                }
                streamSetPaused(e, t) {
                    this.send(a.STREAM_SET_PAUSED, {
                        stream_key: e,
                        paused: t
                    })
                }
                speedTestCreate() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.send(a.SPEED_TEST_CREATE, {
                        preferred_region: e
                    })
                }
                speedTestDelete() {
                    this.send(a.SPEED_TEST_DELETE, null)
                }
                requestForumUnreads(e, t, i) {
                    this.send(a.REQUEST_FORUM_UNREADS, {
                        guild_id: e,
                        channel_id: t,
                        threads: i.map(e => ({
                            thread_id: e.threadId,
                            ack_message_id: e.ackMessageId
                        }))
                    })
                }
                requestSoundboardSounds(e) {
                    this.send(a.REQUEST_SOUNDBOARD_SOUNDS, {
                        guild_ids: e
                    })
                }
                requestLastMessages(e, t) {
                    this.send(a.REQUEST_LAST_MESSAGES, {
                        guild_id: e,
                        channel_ids: t
                    })
                }
                getDeletedEntityIdsNotMatchingHash(e, t, i, s, n) {
                    this.send(a.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, {
                        guild_id: e,
                        channel_ids_hash: t,
                        role_ids_hash: i,
                        emoji_ids_hash: s,
                        sticker_ids_hash: n
                    })
                }
                remoteCommand(e, t) {
                    this.send(a.REMOTE_COMMAND, {
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
                    return S
                },
                localPresenceState: function() {
                    return f
                },
                localVoiceState: function() {
                    return T
                },
                localLobbyVoiceStates: function() {
                    return g
                },
                setDispatchSocketMessageFunction: function() {
                    return C
                }
            });
            var s = i("380260"),
                a = i("913144"),
                n = i("49671"),
                r = i("605250"),
                l = i("271938"),
                d = i("599110"),
                o = i("35468"),
                u = i("773336"),
                c = i("509065"),
                _ = i("447214"),
                h = i("413196"),
                E = i("764867"),
                m = i("292892");
            let p = new r.default("ConnectionStore"),
                S = new _.default,
                f = new E.default(S),
                T = new m.default(S),
                g = new h.default(S),
                I = null;

            function C(e) {
                I = e
            }
            S.handleIdentify = () => {
                let e = l.default.getToken();
                return (p.verbose("handleIdentify called", {
                    hasToken: null != e
                }), null == e) ? null : {
                    token: e,
                    properties: d.default.getSuperProperties(),
                    presence: f.getState()
                }
            }, (0, u.isDesktop)() && n.default.remotePowerMonitor.on("resume", () => {
                S.expeditedHeartbeat(5e3, "power monitor resumed")
            }), o.default.addOfflineCallback(() => {
                S.networkStateChange(15e3, "network detected offline.", !1)
            }), o.default.addOnlineCallback(() => {
                S.networkStateChange(5e3, "network detected online.")
            }), S.on("disconnect", e => {
                let {
                    code: t,
                    reason: i
                } = e;
                a.default.dispatch({
                    type: "CONNECTION_CLOSED",
                    code: t,
                    reason: i
                })
            }), S.on("close", e => {
                let {
                    code: t,
                    reason: i
                } = e;
                a.default.dispatch({
                    type: "CONNECTION_INTERRUPTED",
                    code: t,
                    reason: i
                })
            });
            let A = [],
                y = null,
                N = 33,
                D = new Set(["READY", "INITIAL_GUILD"]);

            function R() {
                y = null;
                let e = Date.now(),
                    t = A.slice();
                if (A.length = 0, null == I) throw Error("setDispatchSocketMessageFunction needs to be called first!");
                let i = "none";
                try {
                    s.default.Emitter.batched(() => {
                        t.forEach(e => {
                            let [t, s] = e;
                            i = t, I(t, s)
                        }), c.default.flush()
                    })
                } catch (e) {
                    S.resetSocketOnError(e, i)
                }
                let a = Date.now() - e;
                a > 100 ? (p.log("Dispatched ".concat(t.length, " messages in ").concat(a, "ms")), N = 250) : N = 33
            }
            S.on("dispatch", (e, t) => {
                A.push([e, t]), D.has(e) ? (null != y && clearTimeout(y), R()) : null == y && (y = setTimeout(R, N))
            })
        },
        289362: function(e, t, i) {
            "use strict";

            function s(e) {
                let {
                    knownGuildVersions: t,
                    highestLastMessageId: i,
                    readStateVersion: s,
                    userGuildSettingsVersion: a,
                    userSettingsVersion: n,
                    privateChannelsVersion: r,
                    apiCodeVersion: l,
                    lastSelectedGuildId: d
                } = e, o = null == d || isNaN(Number(d)) ? void 0 : d;
                return {
                    guild_versions: t,
                    highest_last_message_id: i,
                    read_state_version: s,
                    user_guild_settings_version: a,
                    user_settings_version: n,
                    private_channels_version: r,
                    api_code_version: l,
                    initial_guild_id: o
                }
            }
            i.r(t), i.d(t, {
                toGatewayClientState: function() {
                    return s
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
            var s = i("201876"),
                a = i("260320"),
                n = i("42887");
            class r extends s.default {
                getInitialState() {
                    return this.getNextState()
                }
                getNextState() {
                    let e = a.default.getLobbiesWithVoice();
                    return e.length > 0 && (this._hadLobbyVoiceStates = !0), {
                        lobbies: e.map(e => ({
                            lobbyId: e.id,
                            selfMute: n.default.isSelfMute(e.application_id),
                            selfDeaf: n.default.isSelfDeaf(e.application_id)
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
            var s = i("201876"),
                a = i("661736"),
                n = i("101125");
            class r extends s.default {
                getInitialState() {
                    return n.default.getLocalPresence()
                }
                getNextState() {
                    return n.default.getLocalPresence()
                }
                shouldCommit() {
                    return this.socket.isSessionEstablished()
                }
                emitPresenceUpdate(e) {
                    let {
                        status: t,
                        since: i,
                        activities: s,
                        afk: a,
                        broadcast: n
                    } = e;
                    this.socket.presenceUpdate(t, i, s, a, n)
                }
                handleConnectionOpen() {
                    let e = !this.switchingAccounts;
                    this.update({}, e), this.switchingAccounts = !1
                }
                handleAccountSwitch() {
                    this.switchingAccounts = !0, this.reset(), this.emitPresenceUpdate(this.getState())
                }
                constructor(e) {
                    super(), this.socket = e, this.switchingAccounts = !1, this.didCommit = (0, a.default)(5, 2e4, this.emitPresenceUpdate.bind(this))
                }
            }
        },
        292892: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return m
                }
            });
            var s = i("201876"),
                a = i("56947"),
                n = i("386045"),
                r = i("584687"),
                l = i("845579"),
                d = i("373469"),
                o = i("42203"),
                u = i("42887"),
                c = i("590401"),
                _ = i("568307"),
                h = i("568734"),
                E = i("49111");
            class m extends s.default {
                get guildId() {
                    return this.getState().guildId
                }
                get channelId() {
                    return this.getState().channelId
                }
                computeVoiceFlags() {
                    var e, t, i;
                    let s = 0,
                        o = l.ClipsAllowVoiceRecording.getSetting();
                    s = (0, h.setFlag)(s, E.VoiceFlags.ALLOW_VOICE_RECORDING, o);
                    let u = n.default.getSettings().clipsEnabled && (0, a.areClipsEnabled)() && ((null === (e = d.default.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === E.ApplicationStreamStates.ACTIVE || (null === (t = d.default.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === E.ApplicationStreamStates.PAUSED),
                        {
                            enableDecoupledGameClipping: c
                        } = r.default.getCurrentConfig({
                            location: "computeVoiceFlags"
                        }),
                        m = n.default.getSettings().decoupledClipsEnabled && (null === (i = _.default.getVisibleGame()) || void 0 === i ? void 0 : i.windowHandle) != null && c;
                    return s = (0, h.setFlag)(s, E.VoiceFlags.CLIPS_ENABLED, u || m)
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
                        channelId: s,
                        selfMute: a,
                        selfDeaf: n,
                        selfVideo: r,
                        preferredRegion: l,
                        videoStreamParameters: d,
                        flags: u = 0
                    } = e;
                    r && (null === (t = o.default.getChannel(s)) || void 0 === t ? void 0 : t.type) === E.ChannelTypes.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
                        guildId: i,
                        channelId: s,
                        selfMute: a,
                        selfDeaf: n,
                        selfVideo: r,
                        preferredRegion: l,
                        videoStreamParameters: d,
                        flags: u
                    }) : this.socket.voiceStateUpdate({
                        guildId: i,
                        channelId: s,
                        selfMute: a,
                        selfDeaf: n,
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
                    return a
                },
                setIsPaused: function() {
                    return n
                }
            });
            let s = !1;

            function a() {
                return s
            }

            function n(e) {
                s = e
            }
        },
        797785: function(e, t, i) {
            "use strict";

            function s(e, t) {
                return new WebSocket(e, t)
            }
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            })
        },
        399010: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return P
                }
            });
            var s = i("427964"),
                a = i.n(s);
            i("431201");
            var n = i("498225"),
                r = i("913144"),
                l = i("851387"),
                d = i("775433"),
                o = i("327037"),
                u = i("605250"),
                c = i("871336"),
                _ = i("25932"),
                h = i("410912"),
                E = i("116949"),
                m = i("233069"),
                p = i("522308"),
                S = i("766274"),
                f = i("42203"),
                T = i("26989"),
                g = i("778588"),
                I = i("260320"),
                C = i("697218"),
                A = i("800762"),
                y = i("10514"),
                N = i("521012"),
                D = i("224400"),
                R = i("390946"),
                v = i("509065"),
                b = i("518916");
            let O = new u.default("ConnectionStore"),
                L = new v.default(b.socket, (e, t) => {
                    var i;
                    e = null != e ? e : {
                        type: "CHANNEL_UPDATES",
                        channels: []
                    };
                    let s = (0, m.createChannelRecordFromServer)(t),
                        a = f.default.getChannel(t.id),
                        n = null == a ? void 0 : a.merge({
                            ...s,
                            recipients: a.recipients,
                            bitrate: null !== (i = s.bitrate) && void 0 !== i ? i : a.bitrate
                        });
                    return e.channels.push(null != n ? n : s), e
                }, e => "CHANNEL_UPDATE" !== e),
                U = new v.default(b.socket, (e, t) => ((e = null == e ? {
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
                k = new v.default(b.socket, (e, t) => ((e = null == e ? {
                    type: "PRESENCE_UPDATES",
                    updates: []
                } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e);

            function P(e, t) {
                var s, r, u, T, I, k, P;
                switch (v.default.flush(e, t), e) {
                    case "INITIAL_GUILD":
                        h.default.initialGuild.measure(() => {
                            n.default.Emitter.batched(() => {
                                let e = R.hydrateInitialGuild(t, b.socket.identifyStartTime);
                                if (null != C.default.getCurrentUser()) {
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
                                    }), O.log("Dispatched INITIAL_GUILD ".concat(t.id))
                                }
                            })
                        });
                        break;
                    case "READY_SUPPLEMENTAL":
                        h.default.readySupplemental.measure(() => {
                            n.default.Emitter.batched(() => {
                                var e, i;
                                t = h.default.hydrateReadySupplemental.measure(() => R.hydrateReadySupplementalPayload(t, b.socket.identifyStartTime));
                                let s = e => e.map(e => ({
                                        user: e.user,
                                        status: e.status,
                                        clientStatus: e.client_status,
                                        activities: e.activities,
                                        broadcast: e.broadcast
                                    })),
                                    a = t.guilds.filter(e => !0 !== e.unavailable);
                                a.forEach(e => {
                                    e.presences = s(e.presences || [])
                                });
                                let n = t.presences ? s(t.presences) : [],
                                    r = (null !== (e = t.lazy_private_channels) && void 0 !== e ? e : []).map(e => (0, m.createChannelRecordFromServer)(e)),
                                    l = null !== (i = t.game_invites) && void 0 !== i ? i : [];
                                h.default.dispatchReadySupplemental.measure(() => {
                                    M({
                                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                                        guilds: a,
                                        presences: n,
                                        lazyPrivateChannels: r,
                                        gameInvites: l
                                    })
                                });
                                let d = [];
                                a.forEach(e => {
                                    e.voice_states.forEach(t => {
                                        var i;
                                        d.push({
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
                                    voiceStates: d,
                                    initial: !0
                                }), b.localVoiceState.update(), b.localLobbyVoiceStates.update({}, !0)
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
                            n.default.Emitter.batched(() => {
                                t = h.default.hydrateReady.measure(() => R.hydrateReadyPayloadPrioritized(t, b.socket.identifyStartTime));
                                let e = t.private_channels.map(e => (0, m.createChannelRecordFromServer)(e)),
                                    i = t.guilds.filter(e => e.unavailable).map(e => e.id),
                                    s = t.guilds.filter(e => !0 !== e.unavailable);
                                s.forEach(e => {
                                    e.presences = []
                                });
                                let a = null == t.user_settings_proto ? void 0 : (0, E.b64ToPreloadedUserSettingsProto)(t.user_settings_proto);
                                h.default.dispatchReady.measure(() => {
                                    var n;
                                    M({
                                        type: "CONNECTION_OPEN",
                                        sessionId: t.session_id,
                                        authSessionIdHash: t.auth_session_id_hash,
                                        user: t.user,
                                        users: t.users,
                                        guilds: s,
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
                                        sessions: B(t.sessions || []),
                                        pendingPayments: t.pending_payments,
                                        countryCode: null !== (n = t.country_code) && void 0 !== n ? n : void 0,
                                        guildJoinRequests: t.guild_join_requests || [],
                                        userSettingsProto: a,
                                        apiCodeVersion: t.api_code_version,
                                        auth: t.auth
                                    })
                                }), null != t.auth_token && M({
                                    type: "UPDATE_TOKEN",
                                    token: t.auth_token,
                                    userId: t.user.id
                                }), b.localPresenceState.update(), b.localVoiceState.update(), b.localLobbyVoiceStates.update(), V()
                            })
                        });
                        break;
                    case "RESUMED":
                        b.localPresenceState.forceUpdate(), b.localVoiceState.forceUpdate(), b.localLobbyVoiceStates.forceUpdate(), V(), M({
                            type: "CONNECTION_RESUMED"
                        });
                        break;
                    case "TYPING_START":
                        null != t.member && G(t.guild_id, t.member.user, t.member), M({
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
                        w(t), null != t.author && M({
                            type: "MESSAGE_CREATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            message: t,
                            optimistic: !1,
                            isPushNotification: !1
                        });
                        break;
                    case "MESSAGE_UPDATE":
                        w(t), M({
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
                            channel: (0, m.createChannelRecordFromServer)(t)
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
                            ...s
                        } = t;
                        M({
                            type: e,
                            isNewlyCreated: i,
                            channel: (0, m.createChannelRecordFromServer)(s)
                        });
                        break
                    }
                    case "THREAD_LIST_SYNC":
                        M({
                            type: "THREAD_LIST_SYNC",
                            guildId: t.guild_id,
                            threads: t.threads.map(e => {
                                let t = f.default.getChannel(e.parent_id);
                                return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, m.createChannelRecordFromServer)(e)
                            }),
                            mostRecentMessages: t.most_recent_messages,
                            members: t.members ? a.map(t.members, _.default) : void 0,
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
                            addedMembers: null === (s = t.added_members) || void 0 === s ? void 0 : s.map(e => ({
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
                        U.add(t);
                        break;
                    case "CHANNEL_RECIPIENT_ADD":
                    case "CHANNEL_RECIPIENT_REMOVE":
                        let z = f.default.getBasicChannel(t.channel_id);
                        M({
                            type: e,
                            channelId: t.channel_id,
                            user: t.user,
                            nick: t.nick,
                            isMember: null != z
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
                        n.default.Emitter.batched(() => {
                            M({
                                type: "GUILD_MEMBERS_CHUNK",
                                guildId: t.guild_id,
                                members: t.members,
                                notFound: t.not_found
                            }), null != t.presences && t.presences.forEach(e => {
                                let {
                                    user: i,
                                    status: s,
                                    client_status: a,
                                    activities: n,
                                    broadcast: r
                                } = e;
                                return H({
                                    guildId: t.guild_id,
                                    user: i,
                                    status: s,
                                    activities: n,
                                    clientStatus: a,
                                    broadcast: r
                                })
                            }), v.default.flush()
                        });
                        break;
                    case "THREAD_MEMBER_LIST_UPDATE":
                        n.default.Emitter.batched(() => {
                            M({
                                type: "THREAD_MEMBER_LIST_UPDATE",
                                guildId: t.guild_id,
                                threadId: t.thread_id,
                                members: t.members
                            }), null != t.presences && t.presences.forEach(e => {
                                let {
                                    user: i,
                                    status: s,
                                    client_status: a,
                                    activities: n,
                                    broadcast: r
                                } = e;
                                return H({
                                    guildId: t.guild_id,
                                    user: i,
                                    status: s,
                                    activities: n,
                                    clientStatus: a,
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
                        let x = (0, E.b64ToProtoWithType)(t.settings.type, t.settings.proto);
                        if (null == x) break;
                        if ("string" == typeof x) throw console.error("Invalid proto: |".concat(x, "| |").concat(t.settings.proto, "|")), console.error({
                            parsed: x,
                            wire: t.settings.proto,
                            type: t.settings.type
                        }), Error("UserSettingsProto must not be a string");
                        M({
                            type: "USER_SETTINGS_PROTO_UPDATE",
                            settings: {
                                proto: x,
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
                            sessions: B(t)
                        });
                        break;
                    case "VOICE_STATE_UPDATE":
                        null != t.member && G(t.guild_id, t.member.user, t.member), M({
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
                                oldChannelId: A.default.getUserVoiceChannelId(t.guild_id, t.user_id)
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
                        let F = t.voice_states;
                        null != F && M({
                            type: "VOICE_STATE_UPDATES",
                            voiceStates: F.map(e => ({
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
                        g.default.hasLayers() && (i("850068").fetchPaymentSources(), d.fetchSubscriptionPlansBySKUs(y.default.getFetchedSKUIDs()));
                        break;
                    case "USER_SUBSCRIPTIONS_UPDATE":
                        o.fetchCurrentUser(), g.default.hasLayers() && i("850068").fetchSubscriptions();
                        break;
                    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE":
                        M({
                            type: "GUILD_BOOST_SLOT_CREATE",
                            guildBoostSlot: p.default.createFromServer(t, N.default.getSubscriptionById(t.subscription_id))
                        });
                        break;
                    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE":
                        M({
                            type: "GUILD_BOOST_SLOT_UPDATE",
                            guildBoostSlot: p.default.createFromServer(t, N.default.getSubscriptionById(t.subscription_id))
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
                        n.default.Emitter.batched(() => {
                            let e = e => {
                                if (null == e.member) return;
                                let {
                                    member: i
                                } = e;
                                if (G(t.guild_id, i.user, i), null == i.presence) return;
                                let {
                                    presence: s
                                } = i;
                                H({
                                    guildId: t.guild_id,
                                    user: s.user,
                                    status: s.status,
                                    activities: s.activities,
                                    clientStatus: s.client_status,
                                    broadcast: s.broadcast
                                })
                            };
                            t.ops.forEach(t => {
                                let {
                                    op: i,
                                    items: s,
                                    item: a
                                } = t;
                                switch (i) {
                                    case "SYNC":
                                        s.forEach(e);
                                        break;
                                    case "UPDATE":
                                    case "INSERT":
                                        e(a)
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
                                user: new S.default(t.user),
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
                                user: new S.default(t.user),
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
                            voiceStates: null === (k = t.voice_states) || void 0 === k ? void 0 : k.map(e => ({
                                channelId: e.channel_id,
                                deaf: e.deaf || !1,
                                mute: e.mute || !1,
                                requestToSpeakTimestamp: null !== (P = e.request_to_speak_timestamp) && void 0 !== P ? P : null,
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
                r.default.dispatch(e).catch(t => b.socket.resetSocketOnError(t, e.type))
            }

            function G(e, t, i) {
                let {
                    roles: s,
                    nick: n,
                    avatar: r,
                    flags: l,
                    premium_since: d,
                    pending: o,
                    joined_at: u,
                    communication_disabled_until: c,
                    unusual_dm_activity_until: _
                } = i, h = T.default.getMember(e, t.id);
                (!(null != h && h.nick === n && h.avatar === r && a.isEqual(h.roles, s)) || h.premiumSince !== d || h.isPending !== o || h.joinedAt !== u || h.communicationDisabledUntil !== c || h.flags !== l || h.unusualDMActivityUntil !== _) && M({
                    type: "GUILD_MEMBER_ADD",
                    guildId: e,
                    user: t,
                    roles: s,
                    nick: n,
                    avatar: r,
                    premiumSince: d,
                    isPending: o,
                    joinedAt: u,
                    communicationDisabledUntil: c,
                    unusualDMActivityUntil: _,
                    flags: l
                })
            }

            function w(e) {
                let {
                    member: t,
                    mentions: i,
                    author: s,
                    guild_id: a
                } = e;
                null != t && G(a, s, t), null != i && i.forEach(e => {
                    if (null != e.member) {
                        let {
                            member: t
                        } = e;
                        delete e.member, G(a, e, t)
                    }
                })
            }

            function B(e) {
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

            function V() {
                b.socket.isSessionEstablished() && I.default.getPendingLobbies().forEach(e => {
                    b.socket.lobbyConnect(e.id, e.secret)
                })
            }

            function H(e) {
                let {
                    guildId: t,
                    user: i,
                    status: s,
                    activities: a,
                    clientStatus: n,
                    broadcast: r
                } = e;
                k.add({
                    guildId: t,
                    user: i,
                    status: s,
                    clientStatus: n,
                    activities: a,
                    broadcast: r
                })
            }
        },
        583702: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                StreamRTCAnalyticsContext: function() {
                    return A
                },
                default: function() {
                    return y
                }
            });
            var s = i("427964"),
                a = i.n(s),
                n = i("913144"),
                r = i("997722"),
                l = i("422791"),
                d = i("56947"),
                o = i("386045"),
                u = i("808122"),
                c = i("845579"),
                _ = i("271938"),
                h = i("42203"),
                E = i("985365"),
                m = i("945956"),
                p = i("590401"),
                S = i("599110"),
                f = i("104478"),
                T = i("374014"),
                g = i("196383"),
                I = i("49111"),
                C = i("860604");
            class A {
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
                    actionContext: s,
                    numViewers: a,
                    isBroadcast: n = !1
                }) {
                    this.streamRegion = e, this.streamApplication = t, this.streamSourceType = i, this.actionContext = s, this.maxViewers = a, this.isBroadcast = n
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
                            duration: s,
                            avg_bitrate: a,
                            avg_fps: n,
                            avg_resolution: r
                        } = this.isOwner ? t.getOutboundStats()[0] : null !== (i = t.getInboundStats(e)) && void 0 !== i ? i : {};
                        return {
                            duration: s,
                            avg_bitrate: a,
                            avg_fps: n,
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
                        n.default.wait(() => n.default.dispatch({
                            type: "RTC_CONNECTION_STATE",
                            state: e,
                            ...t,
                            ...i,
                            streamKey: this._streamKey
                        }))
                    }), this.on(l.RTCConnectionEvent.Video, (t, i, s, a, n) => {
                        let r = (0, T.decodeStreamKey)(this._streamKey);
                        r.guildId === t && r.channelId === i && r.ownerId === s && (null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), e = !0), this._updateVideoStreamId(a, n))
                    }), this.on(l.RTCConnectionEvent.VideoSourceQualityChanged, (e, t, i, s, a, r) => {
                        n.default.wait(() => n.default.dispatch({
                            type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                            guildId: e,
                            channelId: t,
                            senderUserId: i,
                            maxResolution: s,
                            maxFrameRate: a,
                            context: r
                        }))
                    })
                }
                _getStreamAnalyticsProperties() {
                    let {
                        streamRegion: e,
                        streamApplication: t,
                        streamSourceType: i,
                        actionContext: s,
                        isBroadcast: a
                    } = this.analyticsContext, {
                        ownerId: n,
                        guildId: r
                    } = this._streamContext, l = p.default.getRegion(m.default.getHostname()), d = c.BroadcastAutoBroadcast.getSetting();
                    return {
                        channel_id: this.channelId,
                        rtc_connection_id: this.getRTCConnectionId(),
                        media_session_id: this.getMediaSessionId(),
                        parent_media_session_id: this.parentMediaSessionId,
                        sender_user_id: n,
                        context: C.MediaEngineContextTypes.STREAM,
                        guild_id: r,
                        stream_region: e,
                        stream_source_type: i,
                        guild_region: l,
                        participant_type: this.isOwner ? "streamer" : "receiver",
                        share_application_name: null != t ? t.name : null,
                        share_application_id: null != t ? t.id : null,
                        share_application_executable: null != t ? t.exe : null,
                        video_layout: this._videoStreamStats.getLayout(),
                        client_event_source: s,
                        is_broadcast: a,
                        auto_broadcast_enabled: this.isOwner ? d : null
                    }
                }
                _trackVideoStartStats() {
                    let e = this.isOwner ? (0, g.default)() : null;
                    S.default.track(I.AnalyticEvents.VIDEO_STREAM_STARTED, {
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
                            ownerId: s
                        } = this._streamContext,
                        a = null,
                        n = null,
                        r = null,
                        l = this._videoQuality;
                    null != l && (a = this.isOwner ? l.getOutboundStats()[0] : l.getInboundStats(s), n = l.getNetworkStats(), r = this.isOwner ? l.getCodecUsageStats("streamer", this.userId) : l.getCodecUsageStats("receiver", s));
                    let c = (0, d.areClipsEnabled)(),
                        _ = o.default.getSettings(),
                        E = this.isOwner ? {
                            clips_enabled: _.clipsEnabled && c,
                            clips_buffer_length: _.clipsLength
                        } : {},
                        m = this.isOwner ? {
                            bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
                        } : {};
                    S.default.track(I.AnalyticEvents.VIDEO_STREAM_ENDED, {
                        ...a,
                        ...r,
                        ...n,
                        ...this._videoStreamStats.getStats(),
                        ...this._soundshareStats.getStats(),
                        ...this._getStreamAnalyticsProperties(),
                        ...E,
                        ...m,
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
                    initialLayout: s,
                    analyticsContext: r,
                    isStreamer: l,
                    parentMediaSessionId: d
                }) {
                    let o = (0, T.decodeStreamKey)(t),
                        {
                            guildId: u,
                            channelId: c
                        } = o;
                    super({
                        userId: _.default.getId(),
                        sessionId: e,
                        guildId: u,
                        channelId: c,
                        context: C.MediaEngineContextTypes.STREAM,
                        rtcServerId: i,
                        parentMediaSessionId: d
                    }), this._streamContext = o, this._streamKey = t, this._isStreamer = l, this._videoStreamStats = new f.default(s, this.isOwner), this.analyticsContext = r, this._updateVideoStreamId = a.debounce((e, t) => {
                        let {
                            guildId: i,
                            channelId: s,
                            ownerId: a
                        } = (0, T.decodeStreamKey)(this._streamKey);
                        n.default.wait(() => n.default.dispatch({
                            type: "RTC_CONNECTION_VIDEO",
                            guildId: i,
                            channelId: s,
                            userId: a,
                            streamId: e,
                            rtcServerId: t,
                            context: C.MediaEngineContextTypes.STREAM
                        }))
                    }, 200), this._videoStreamStats.start(), this._initializeEvents()
                }
            }
        },
        104478: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var s = i("931010"),
                a = i("638800"),
                n = i("268491"),
                r = i("49111");

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return null != e ? Math.round(e) : t
            }
            class d {
                start() {
                    let {
                        resolution: e,
                        fps: t
                    } = n.default.getState();
                    this._targetResolution = e, this._targetFPS = t, this._statInterval.start(1e3, this._sampleStats), this._lastLayoutChanged = (0, s.now)()
                }
                stop() {
                    this._statInterval.stop(), this._streamEnd = (0, s.now)(), this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1e3)
                }
                layoutChange(e) {
                    if (e === this._lastLayout || null != this._streamEnd) return;
                    let t = (0, s.now)();
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
                        } = n.default.getState();
                        this._streamSettingsChanged = e !== this._targetResolution || t !== this._targetFPS
                    }, this._isSender = t, this._statInterval = new a.Interval, this._lastLayout = e, this._layoutBuckets = {}
                }
            }
        },
        582415: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getStreamerActivity: function() {
                    return n
                },
                getStreamerApplication: function() {
                    return r
                }
            });
            var s = i("49111");

            function a(e) {
                return e.type === s.ActivityTypes.PLAYING
            }

            function n(e, t) {
                var i;
                return null != e ? (i = e.ownerId, t.findActivity(i, a)) : null
            }

            function r(e, t) {
                if (null == e) return null;
                let i = n(e, t);
                return null == i ? null : {
                    id: i.application_id,
                    name: i.name
                }
            }
        },
        196383: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var s = i("939398").getDesktopSourceMetadata
        },
        871336: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var s, a, n, r, l = i("666038"),
                d = i("858619"),
                o = i("315102");
            (s = n || (n = {}))[s.GUILD = 0] = "GUILD", s[s.USER = 1] = "USER", (a = r || (r = {}))[a.DEFAULT = 48] = "DEFAULT";
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
                            type: n.GUILD
                        },
                        emojiById: {}
                    };
                    return e.content.emojis.forEach(i => {
                        let s = {
                            animated: i.animated,
                            available: i.available,
                            id: i.id,
                            name: i.name,
                            require_colons: i.require_colons,
                            url: o.default.getEmojiURL({
                                id: i.id,
                                animated: i.animated,
                                size: r.DEFAULT
                            }),
                            allNamesString: ":".concat(i.name, ":"),
                            type: d.EmojiTypes.PACK,
                            packId: e.id
                        };
                        t.emojiById[i.id] = s, t.content.emojis.push(s)
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
            var s = i("990746"),
                a = i("773336"),
                n = i("827032"),
                r = i("49111");
            let l = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var d = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: i,
                            tags: s
                        } = e,
                        r = {
                            name: i,
                            tags: (0, n.getGlobalTagsArray)()
                        };
                    null != s && s.forEach(e => {
                        r.tags.push(e)
                    });
                    let d = function() {
                        if ((0, a.isWeb)()) return "web";
                        {
                            let e = (0, a.getPlatformName)();
                            return l.has(e) ? e : null
                        }
                    }();
                    null !== d && r.tags.push("platform:".concat(d)), this._metrics.push(r), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        s.default.post({
                            url: r.Endpoints.METRICS,
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
            var s = i("376929"),
                a = i.n(s),
                n = i("498225"),
                r = i("913144"),
                l = i("77173");
            let d = [l.default],
                o = [];

            function u() {
                let e = [];
                for (let t of d) {
                    let i = t.getActivity();
                    null != i && e.push(i)
                }
                return !a(e, o) && (o = e, !0)
            }
            class c extends n.default.Store {
                initialize() {
                    this.syncWith(d, u)
                }
                getActivities() {
                    return o
                }
            }
            c.displayName = "FirstPartyRichPresenceStore";
            var _ = new c(r.default)
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
            var s = i("271938"),
                a = i("42203"),
                n = i("305961"),
                r = i("325861"),
                l = i("837979"),
                d = i("49111");
            let o = "stage:";

            function u(e, t) {
                let i = 0,
                    a = s.default.getId(),
                    l = r.default.isSpeaker(a, e.id);
                l && (i |= 1);
                let u = n.default.getGuild(e.getGuildId());
                null != u && (u.hasFeature(d.GuildFeatures.PARTNERED) && (i |= 2), u.hasFeature(d.GuildFeatures.VERIFIED) && (i |= 4));
                let c = i.toString(16);
                return "".concat(o).concat(e.guild_id, ":").concat(e.id, ":").concat(c, ":").concat(t.id)
            }

            function c(e) {
                if (null == e || null == e.party) return;
                let {
                    id: t,
                    size: i
                } = e.party;
                try {
                    if (null == t || !t.startsWith(o)) return;
                    let [, e, s, a, n] = t.split(":"), r = parseInt(a, 16);
                    return {
                        guildId: e,
                        channelId: s,
                        size: i,
                        userIsSpeaker: (1 & r) != 0,
                        guildIsPartnered: (2 & r) != 0,
                        guildIsVerified: (4 & r) != 0,
                        stageInstanceId: n
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
                } = t, s = a.default.getChannel(i);
                return null != s
            }
        },
        77173: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return C
                }
            });
            var s = i("376929"),
                a = i.n(s),
                n = i("498225"),
                r = i("913144"),
                l = i("42203"),
                d = i("305961"),
                o = i("945956"),
                u = i("18494"),
                c = i("991170"),
                _ = i("488464"),
                h = i("998716"),
                E = i("118033"),
                m = i("834052"),
                p = i("819450"),
                S = i("837979"),
                f = i("49111");
            let T = null;

            function g() {
                let e = function() {
                    var e, t, i, s, a, n, r, o;
                    let g = u.default.getVoiceChannelId();
                    if (null == g) return null;
                    let I = m.default.getStageInstanceByChannel(g);
                    if (null == I) return null;
                    let C = l.default.getChannel(g);
                    if (null == C || !c.default.canEveryone(f.Permissions.VIEW_CHANNEL, C)) return null;
                    let A = d.default.getGuild(C.getGuildId());
                    if (null == A || !A.hasFeature(f.GuildFeatures.DISCOVERABLE)) return null;
                    let y = (0, E.packStageChannelPartyId)(C, I),
                        N = (null === (t = T) || void 0 === t ? void 0 : null === (e = t.party) || void 0 === e ? void 0 : e.id) === y ? T : null,
                        D = _.default.getMutableParticipants(C.id, h.StageChannelParticipantNamedIndex.SPEAKER),
                        R = D.filter(e => e.type === h.StageChannelParticipantTypes.STREAM).length,
                        v = D.length - R,
                        b = _.default.getParticipantCount(g) - R,
                        O = (null == N ? void 0 : null === (i = N.party) || void 0 === i ? void 0 : i.size) != null ? N.party.size[1] : 0;
                    return {
                        application_id: S.STAGE_APPLICATION_ID,
                        name: null !== (n = null !== (a = I.topic) && void 0 !== a ? a : C.topic) && void 0 !== n ? n : C.name,
                        type: (0, p.getStageHasMedia)(C.id) ? f.ActivityTypes.WATCHING : f.ActivityTypes.LISTENING,
                        timestamps: {
                            start: null !== (r = null == N ? void 0 : null === (s = N.timestamps) || void 0 === s ? void 0 : s.start) && void 0 !== r ? r : new Date().getTime()
                        },
                        assets: {
                            small_image: null !== (o = A.icon) && void 0 !== o ? o : void 0,
                            small_text: A.name
                        },
                        party: {
                            id: y,
                            size: [v, Math.max(b, O)]
                        }
                    }
                }();
                return !a(e, T) && (T = e, !0)
            }
            class I extends n.default.Store {
                initialize() {
                    this.waitFor(l.default, u.default, m.default, o.default)
                }
                getActivity() {
                    return T
                }
            }
            I.displayName = "StageChannelSelfRichPresenceStore";
            var C = new I(r.default, {
                CONNECTION_OPEN: g,
                STAGE_INSTANCE_CREATE: g,
                STAGE_INSTANCE_UPDATE: g,
                STAGE_INSTANCE_DELETE: g,
                VOICE_CHANNEL_SELECT: g,
                RTC_CONNECTION_STATE: function(e) {
                    var t, i, s, a;
                    let {
                        state: n
                    } = e, r = null !== (a = null === (s = T) || void 0 === s ? void 0 : null === (i = s.party) || void 0 === i ? void 0 : null === (t = i.size) || void 0 === t ? void 0 : t[1]) && void 0 !== a ? a : 0;
                    return n === f.RTCConnectionStates.RTC_CONNECTED && !(r > 0) && g()
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
            var s, a, n, r;
            i.r(t), i.d(t, {
                MAX_STAGE_TOPIC_LENGTH: function() {
                    return l
                },
                STAGE_APPLICATION_ID: function() {
                    return d
                },
                STAGE_INVITE_STATE_KEY: function() {
                    return o
                },
                STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY: function() {
                    return u
                },
                RequestToSpeakPermissionStates: function() {
                    return s
                },
                StartStageSteps: function() {
                    return a
                }
            }), i("701909"), i("49111"), i("782340");
            let l = 240,
                d = "834488117758001152",
                o = "stage-invite",
                u = "stage-channel-audience-notice-shown";
            (n = s || (s = {}))[n.EVERYONE = 1] = "EVERYONE", n[n.NO_ONE = 2] = "NO_ONE", n[n.ROLES = 3] = "ROLES", (r = a || (a = {}))[r.GUILD_SELECTION = 0] = "GUILD_SELECTION", r[r.STAGE_CHANNEL_SETTINGS = 1] = "STAGE_CHANNEL_SETTINGS", r[r.PUBLIC_STAGE_PREVIEW = 2] = "PUBLIC_STAGE_PREVIEW"
        },
        410912: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            });
            var s = i("379279"),
                a = i("926274");
            let n = () => {};
            i.g.__timingFunction = () => performance.now();
            let r = null == i.g.__getTotalRequireTime ? () => 0 : () => i.g.__getTotalRequireTime();

            function l(e, t) {
                if (0 === t || null == t) return null;
                let i = t - e;
                return i < 0 || i > 1e6 ? null : i
            }
            class d {
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
                    0 === this.start_ && this.recordStart_(), s.default.mark(this.emoji, "Start ".concat(this.name)), n()
                }
                recordStart_() {
                    this.start_ = Date.now(), this.startNumImports = a.size(), this.startImportTime = r()
                }
                recordEnd() {
                    0 === this.end_ && 0 !== this.start_ ? (this.recordEnd_(), s.default.mark(this.emoji, "Finish ".concat(this.name), this.end_ - this.start_)) : s.default.mark(this.emoji, "Finish ".concat(this.name)), n()
                }
                recordEnd_() {
                    this.end_ = Date.now(), this.endNumImports = a.size(), this.endImportTime = r()
                }
                set(e, t) {
                    0 === this.start_ && (this.start_ = e, this.end_ = e + t, this.endNumImports = a.size(), this.endImportTime = r()), s.default.mark(this.emoji, this.name, t), n()
                }
                serializeStart(e) {
                    return l(e, this.start_)
                }
                serializeEnd(e) {
                    return l(e, this.end_)
                }
                measure(e) {
                    if (this.start_ > 0) return s.default.time(this.emoji, this.name, e);
                    this.recordStart_();
                    let t = s.default.time(this.emoji, this.name, e);
                    return this.recordEnd_(), n(), t
                }
                async measureAsync(e) {
                    if (this.start_ > 0) return s.default.timeAsync(this.emoji, this.name, e);
                    this.recordStart_();
                    let t = await s.default.timeAsync(this.emoji, this.name, e);
                    return this.recordEnd_(), n(), t
                }
                async measureAsyncWithoutNesting(e) {
                    if (this.start_ > 0) return s.default.timeAsync(this.emoji, this.name, e);
                    this.recordStart_();
                    let t = Date.now();
                    s.default.mark(this.emoji, "Start ".concat(this.name));
                    let i = await e();
                    return s.default.mark(this.emoji, "Finish ".concat(this.name), Date.now() - t), this.recordEnd_(), n(), i
                }
                constructor(e, t) {
                    this.emoji = e, this.name = t, this.start_ = 0, this.startNumImports = 0, this.startImportTime = 0, this.end_ = 0, this.endNumImports = 0, this.endImportTime = 0
                }
            }
            class o {
                get time() {
                    return this.time_
                }
                record() {
                    0 === this.time_ ? (this.time_ = Date.now(), this.numImports = a.size(), this.importTime = r(), s.default.mark(this.emoji, this.name)) : !this.onlyOnce && s.default.mark(this.emoji, this.name), n()
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
                    this.loadIndex = new d("❗", "Load index.tsx"), this.loadFastConnectNativeModule = new d("\uD83D\uDCBE", "Load fast_connect native module"), this.beginFastConnect = new d("\uD83C\uDF10", "Fast Connect IDENTIFY"), this.loadImports = new d("\uD83C\uDFC3", "Load Imports"), this.init = new d("\uD83C\uDFC3", "Initial Initialization"), this.loadStorage = new d("\uD83D\uDCBE", "Load Storage"), this.parseStorage = new d("\uD83D\uDCBE", "Parse Storage"), this.loadMiniCache = new d("\uD83D\uDCBE", "Load Mini Cache"), this.fetchInitialGuildCache = new d("\uD83D\uDCBE", "Fetch Initial Guild Cache"), this.loadCachedMessages = new d("\uD83D\uDCBE", "Load Cached Messages"), this.renderApp = new o("\uD83C\uDFA8", "First React Render"), this.renderAppEffect = new o("\uD83C\uDFA8", "First React Render useEffect"), this.renderMessages = new o("\uD83C\uDFA8", "React Render Messages", !0), this.renderMessagesWithCache = new o("\uD83C\uDFA8", "React Render Cached Messages", !0), this.firstRowGenerator = new d("\uD83C\uDFA8", "RowGenerator.generate()"), this.renderLatestMessages = new o("\uD83C\uDFA8", "React Render Latest Messages"), this.initialGuild = new d("\uD83C\uDF10", "Initial Guild"), this.loadLazyCache = new d("\uD83D\uDCBE", "Load Lazy Cache"), this.fetchLazyCache = new d("\uD83D\uDCBE", "Fetch Lazy Cache"), this.parseLazyCache = new d("\uD83D\uDCBE", "Parse Lazy Cache"), this.fetchStaleChannels = new d("\uD83D\uDCBE", "Fetch Stale Channels"), this.deserializeCache = new d("\uD83D\uDCBE", "Deserialize Cache"), this.dispatchLazyCache = new d("\uD83D\uDCBE", "Dispatch Lazy Cache"), this.parseReady = new d("\uD83C\uDF10", "Parse READY"), this.ready = new d("\uD83C\uDF10", "READY"), this.hydrateReady = new d("\uD83C\uDF10", "Hydrate READY"), this.dispatchReady = new d("\uD83C\uDF10", "Dispatch READY"), this.parseReadySupplemental = new d("\uD83C\uDF10", "Parse READY Supplemental"), this.readySupplemental = new d("\uD83C\uDF10", "READY Supplemental"), this.hydrateReadySupplemental = new d("\uD83C\uDF10", "Hydrate READY Supplemental"), this.dispatchReadySupplemental = new d("\uD83C\uDF10", "Dispatch READY Supplemental"), this.fetchMessages = new d("\uD83C\uDF10", "Fetch messages"), this.dispatchMessages = new d("\uD83C\uDF10", "Dispatch messages"), this.imports = {
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
                    n = () => {
                        !0 === e() && (n = () => !1)
                    }
                }
                setCacheInfo(e) {
                    this.cacheInfo = e
                }
                setInterstitial(e) {
                    this.interstitial = e, n()
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
                recordMessageRender(e, t, s, a) {
                    let {
                        default: n
                    } = i("500947");
                    if (!this.renderLatestMessages.hasData()) {
                        if (this.renderMessages.record(), t.length > 0 && this.renderMessagesWithCache.record(), s) {
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
                                let i = this.cachedMessageIds.sort(n.compare).reverse()[0],
                                    s = t.sort(n.compare).reverse()[0];
                                this.messageCacheAgeSeconds = Math.floor((n.extractTimestamp(s) - n.extractTimestamp(i)) / 1e3);
                                let l = t.filter(e => {
                                    var t;
                                    return null === (t = this.cachedMessageIds) || void 0 === t ? void 0 : t.includes(e)
                                }).length;
                                this.messageCacheCount = null !== (r = this.cachedChannelCounts.get(e)) && void 0 !== r ? r : null, this.messageCacheHavingCount = l, this.messageCacheMissingCount = t.length - l, this.messageRenderFullCount = t.length, this.messageRenderCachedCount = this.cachedMessageIds.length, this.messageRenderHasMoreAfter = a
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
                    var t, a, n, r, l, d, o;
                    let u = this.getStartTime(e),
                        c = i("427964"),
                        _ = c(s.default.logGroups[0].logs).filter(e => e.log.startsWith("Require ")).map(e => null !== (o = e.delta) && void 0 !== o ? o : 0).sum();
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
                        cache_num_private_channels: null === (a = this.cacheInfo) || void 0 === a ? void 0 : a.privateChannels,
                        cache_num_basic_channels: null === (n = this.cacheInfo) || void 0 === n ? void 0 : n.basicChannels,
                        cache_num_basic_channels_stale: null === (r = this.cacheInfo) || void 0 === r ? void 0 : r.basicChannelsStale,
                        cache_num_full_channels: null === (l = this.cacheInfo) || void 0 === l ? void 0 : l.fullChannels,
                        cache_num_full_channel_guilds: null === (d = this.cacheInfo) || void 0 === d ? void 0 : d.fullChannelGuilds,
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
            var s = i("498225"),
                a = i("913144"),
                n = i("686298"),
                r = i("860604");
            let l = n.ApplicationStreamPresets.PRESET_VIDEO,
                d = n.ApplicationStreamResolutions.RESOLUTION_720,
                o = n.ApplicationStreamFPS.FPS_30;
            class u extends s.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t;
                        l = null !== (t = e.preset) && void 0 !== t ? t : n.ApplicationStreamPresets.PRESET_VIDEO, d = e.resolution, o = e.fps
                    }
                }
                getState() {
                    return {
                        preset: l,
                        resolution: d,
                        fps: o
                    }
                }
            }
            u.displayName = "ApplicationStreamingSettingsStore", u.persistKey = "ApplicationStreamingSettingStore";
            var c = new u(a.default, {
                MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
                    let {
                        settings: t
                    } = e;
                    if ((null == t ? void 0 : t.context) === r.MediaEngineContextTypes.STREAM) {
                        if ((null == t ? void 0 : t.qualityOptions) == null || (null == t ? void 0 : t.qualityOptions.resolution) == null || (null == t ? void 0 : t.qualityOptions.frameRate) == null) return !1;
                        d = t.qualityOptions.resolution, o = t.qualityOptions.frameRate
                    }
                },
                STREAM_UPDATE_SETTINGS: function(e) {
                    let {
                        preset: t,
                        resolution: i,
                        frameRate: s
                    } = e, a = !1;
                    return null != t && (l = t, a = !0), null != i && (d = i, a = !0), null != s && (o = s, a = !0), a
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
            var s = i("376929"),
                a = i.n(s),
                n = i("498225"),
                r = i("990746"),
                l = i("913144"),
                d = i("619340"),
                o = i("376556"),
                u = i("550368"),
                c = i("47319"),
                _ = i("102985"),
                h = i("49111");
            let E = e => "https://youtube.com/watch?v=".concat(e),
                m = /live_user_(.*)-\{width\}/,
                p = null,
                S = 0,
                f = null,
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
            async function C(e, t) {
                let i = g[e];
                if (null != i) return i;
                let {
                    body: {
                        data: s
                    }
                } = await I("/games", {
                    id: e
                }, t), a = s[0].name;
                return g[e] = a, a
            }
            let A = new class e {
                start() {
                    !this._started && (this._started = !0, c.default.isFetching() ? d.default.fetch() : this._check())
                }
                stop() {
                    this._started = !1, f = null, S = 0, null != this._nextCheck && clearTimeout(this._nextCheck), l.default.dispatch({
                        type: "STREAMING_UPDATE",
                        stream: null
                    })
                }
                async _checkTwitch(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
                    try {
                        var i, s, a, n, r;
                        let {
                            body: {
                                data: l
                            }
                        } = await I("/streams", {
                            user_id: e.id,
                            first: 1
                        }, t), d = l[0];
                        if (null == d || "live" !== d.type) throw Error("no stream");
                        let {
                            thumbnail_url: c,
                            game_id: _,
                            title: E
                        } = d, p = {
                            large_image: null != c && null !== (s = (0, u.getAssetFromImageURL)(h.PlatformTypes.TWITCH, c)) && void 0 !== s ? s : void 0
                        }, S = await C(_, t), f = o.default.get(h.PlatformTypes.TWITCH);
                        let T = null !== (n = c, a = null === (r = m.exec(n)) || void 0 === r ? void 0 : r[1]) && void 0 !== a ? a : e.name;
                        return {
                            url: null === (i = f.getPlatformUserUrl) || void 0 === i ? void 0 : i.call(f, {
                                id: e.id,
                                name: T
                            }),
                            name: f.name,
                            assets: p,
                            details: E,
                            state: S
                        }
                    } catch (i) {
                        if (401 === i.status && null == t) return d.default.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
                        return null
                    }
                }
                async _checkYouTube(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (f = null, e.revoked || T.has(e.id)) return null;
                    try {
                        var i;
                        let {
                            body: {
                                items: s
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
                        if (s.length < 1) throw Error("no stream");
                        let {
                            id: a,
                            snippet: {
                                title: n,
                                thumbnails: l
                            }
                        } = s[0], d = {
                            large_image: null !== (i = (0, u.getAssetFromImageURL)(h.PlatformTypes.YOUTUBE, l.high.url)) && void 0 !== i ? i : void 0
                        };
                        return f = {
                            url: E(a),
                            name: o.default.get(h.PlatformTypes.YOUTUBE).name,
                            details: n,
                            assets: d
                        }
                    } catch (i) {
                        if (401 === i.status && null == t) return d.default.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
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
                    S <= i && (t.push(h.PlatformTypes.YOUTUBE), S = i + 3e5);
                    let s = e.filter(e => t.includes(e.type)).map(e => e.type === h.PlatformTypes.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e));
                    Promise.allSettled(s).then(e => {
                        if (this._started) {
                            var t;
                            let i = null === (t = e.find(e => "fulfilled" === e.status && null != e.value)) || void 0 === t ? void 0 : t.value;
                            null == i && null != f && (i = f), l.default.dispatch({
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
                _.default.enabled ? A.start() : A.stop()
            }
            class N extends n.default.Store {
                initialize() {
                    y(), this.waitFor(c.default), this.syncWith([_.default], y)
                }
                getStream() {
                    return p
                }
            }
            N.displayName = "ExternalStreamingStore";
            var D = new N(l.default, {
                STREAMING_UPDATE: function(e) {
                    var t;
                    if (a(e.stream, p)) return !1;
                    p = null !== (t = e.stream) && void 0 !== t ? t : null
                },
                USER_CONNECTIONS_UPDATE: () => A._check()
            })
        },
        260320: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                LobbyError: function() {
                    return d
                },
                default: function() {
                    return E
                }
            });
            var s = i("427964"),
                a = i.n(s),
                n = i("498225"),
                r = i("913144"),
                l = i("49111");
            class d {
                constructor(e) {
                    this.code = e
                }
            }
            let o = {},
                u = {};

            function c(e, t) {
                if (null == u[e]) return null;
                let {
                    socketId: i,
                    timeout: s,
                    resolve: a,
                    reject: n
                } = u[e];
                return delete u[e], null != s && clearTimeout(s), null != a && null != n && t(a, n), i
            }

            function _(e) {
                let {
                    lobbyId: t,
                    member: {
                        user: i,
                        metadata: s
                    }
                } = e, a = o[t];
                if (null == a) return !1;
                let n = a.members.find(e => e.user.id === i.id);
                null != n ? (n.user = i, n.metadata = s) : a.members.push({
                    user: i,
                    metadata: s
                })
            }
            class h extends n.default.Store {
                getLobbies() {
                    return o
                }
                getLobbiesWithVoice() {
                    return a.filter(o, e => e.voice)
                }
                getLobby(e) {
                    return o[e]
                }
                getPendingLobbies() {
                    return a.map(u, (e, t) => {
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
                    o = {}
                },
                OVERLAY_INITIALIZE: function(e) {
                    o = e.lobbies
                },
                LOBBY_CONNECT: function(e) {
                    let {
                        socketId: t,
                        lobbyId: i,
                        lobbySecret: s,
                        resolve: a,
                        reject: n
                    } = e;
                    if (null != u[i] || null != o[i]) {
                        null != n && n(new d(l.LobbyErrors.ALREADY_CONNECTING));
                        return
                    }
                    u[i] = {
                        socketId: t,
                        secret: s,
                        resolve: a,
                        reject: n,
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
                    c(t, (e, t) => t(new d(l.LobbyErrors.NO_ERROR)))
                },
                LOBBY_CREATE: function(e) {
                    let {
                        lobby: t
                    } = e, i = c(t.id, e => e(t));
                    null != i && (o[t.id] = {
                        socketId: i,
                        voice: !1,
                        ...o[t.id],
                        ...t
                    })
                },
                LOBBY_UPDATE: function(e) {
                    let {
                        lobby: t
                    } = e, i = o[t.id];
                    null != i && (o[t.id] = {
                        ...i,
                        ...t
                    })
                },
                LOBBY_DELETE: function(e) {
                    let {
                        lobbyId: t,
                        reason: i
                    } = e;
                    delete o[t], c(t, (e, t) => t(new d(i)))
                },
                LOBBY_MEMBER_CONNECT: _,
                LOBBY_MEMBER_UPDATE: _,
                LOBBY_MEMBER_DISCONNECT: function(e) {
                    let {
                        lobbyId: t,
                        member: {
                            user: i
                        }
                    } = e, s = o[t];
                    if (null == s) return !1;
                    s.members = s.members.filter(e => e.user.id !== i.id)
                },
                LOBBY_VOICE_CONNECT: function(e) {
                    let {
                        lobbyId: t
                    } = e, i = o[t];
                    if (null == i) return !1;
                    i.voice = !0
                },
                LOBBY_VOICE_DISCONNECT: function(e) {
                    let {
                        lobbyId: t
                    } = e, i = o[t];
                    if (null == i) return !1;
                    i.voice = !1
                },
                RPC_APP_DISCONNECTED: function(e) {
                    let {
                        socketId: t
                    } = e;
                    a.forEach(o, e => {
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
            var s = i("376929"),
                a = i.n(s),
                n = i("427964"),
                r = i.n(n),
                l = i("498225"),
                d = i("913144"),
                o = i("191225"),
                u = i("225772"),
                c = i("925880"),
                _ = i("662285"),
                h = i("845579"),
                E = i("374363"),
                m = i("373469"),
                p = i("848872"),
                S = i("546463"),
                f = i("568307"),
                T = i("49111"),
                g = i("782340");
            let I = [],
                C = {};

            function A() {
                let e = [],
                    t = h.CustomStatusSetting.getSetting();
                null != t && ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, u.default)(t));
                let i = c.default.getActivities();
                e.push(...i);
                let s = p.default.getStream();
                null != s && e.push({
                    type: T.ActivityTypes.STREAMING,
                    ...s
                });
                let n = new Set,
                    l = new Set;
                r.forEach(C, t => {
                    null != t.application_id && (n.add(t.name), l.add(t.application_id), e.push(t))
                }), o.default.getSelfEmbeddedActivities().forEach(t => {
                    var i;
                    let {
                        application_id: s
                    } = t;
                    if (l.has(s)) return;
                    let a = null === (i = S.default.getGame(s)) || void 0 === i ? void 0 : i.name;
                    e.push({
                        type: T.ActivityTypes.PLAYING,
                        name: null != a ? a : g.default.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
                        application_id: s,
                        flags: T.ActivityFlags.EMBEDDED
                    })
                });
                let d = f.default.getVisibleGame(),
                    E = null != d && null != d.name && n.has(d.name),
                    A = null != d && d.isLauncher,
                    y = m.default.getCurrentUserActiveStream();
                null != d && null != d.name && !(E || A && !(null != y)) && e.push({
                    type: T.ActivityTypes.PLAYING,
                    name: d.name,
                    application_id: d.id,
                    timestamps: {
                        start: d.start
                    }
                });
                let N = _.default.getActivity();
                null != N && e.push({
                    type: T.ActivityTypes.LISTENING,
                    ...N
                }), !a(I, e) && (I = e)
            }
            class y extends l.default.Store {
                initialize() {
                    this.waitFor(f.default, o.default, p.default, m.default, _.default, E.default), this.syncWith([c.default], () => A())
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
                    return C
                }
            }
            y.displayName = "LocalActivityStore";
            var N = new y(d.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        localActivities: t
                    } = e;
                    C = {
                        ...t
                    }, A()
                },
                START_SESSION: function() {
                    C = {}, A()
                },
                LOCAL_ACTIVITY_UPDATE: function(e) {
                    let {
                        socketId: t,
                        activity: i
                    } = e;
                    if (a(C[t], i)) return !1;
                    null != i ? C[t] = i : delete C[t], A()
                },
                RPC_APP_DISCONNECTED: function(e) {
                    let {
                        socketId: t
                    } = e;
                    delete C[t], A()
                },
                RUNNING_GAMES_CHANGE: A,
                LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: A,
                SPOTIFY_PLAYER_STATE: A,
                SPOTIFY_PLAYER_PLAY: A,
                STREAMING_UPDATE: A,
                USER_CONNECTIONS_UPDATE: A,
                STREAM_START: A,
                STREAM_STOP: A,
                USER_SETTINGS_PROTO_UPDATE: A,
                EMBEDDED_ACTIVITY_OPEN: A,
                EMBEDDED_ACTIVITY_CLOSE: A
            })
        },
        101125: function(e, t, i) {
            "use strict";
            let s, a;
            i.r(t), i.d(t, {
                default: function() {
                    return z
                }
            });
            var n = i("376929"),
                r = i.n(n),
                l = i("427964"),
                d = i.n(l),
                o = i("498225"),
                u = i("913144"),
                c = i("429928"),
                _ = i("837374"),
                h = i("662285"),
                E = i("845579"),
                m = i("374363"),
                p = i("233069"),
                S = i("964889"),
                f = i("271938"),
                T = i("546463"),
                g = i("603699"),
                I = i("686470"),
                C = i("52028"),
                A = i("824563"),
                y = i("235660"),
                N = i("49111");
            let D = !1,
                R = N.StatusTypes.ONLINE,
                v = N.StatusTypes.UNKNOWN,
                b = 0,
                O = [],
                L = !1,
                U = !0,
                k = Object.freeze([]),
                P = [];

            function M(e) {
                return (0, S.shouldShareApplicationActivity)(e, I.default)
            }

            function G(e) {
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

            function w() {
                var e;
                b = null !== (e = g.default.getIdleSince()) && void 0 !== e ? e : 0, L = g.default.isAFK(), U ? (R = v, B()) : R = D ? N.StatusTypes.INVISIBLE : E.StatusSetting.getSetting(), R === N.StatusTypes.ONLINE && b > 0 && (R = N.StatusTypes.IDLE);
                let t = !1,
                    i = U || R === N.StatusTypes.INVISIBLE ? [] : C.default.getActivities().filter(G);
                !r(O, i) && (O = i, t = !0);
                let s = y.default.getRemoteActivities();
                if (k !== s && (k = s, t = !0), t) {
                    let e = O.find(e => e.type === N.ActivityTypes.CUSTOM_STATUS),
                        t = O.filter(e => e.type !== N.ActivityTypes.CUSTOM_STATUS);
                    P = t.length > 0 ? O : null != e ? [e, ...d(k).filter(e => e.type !== N.ActivityTypes.CUSTOM_STATUS).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()] : d.uniqBy(k, e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
                }
            }

            function B() {
                s = void 0, a = void 0
            }

            function V() {
                U = !1, v = N.StatusTypes.UNKNOWN, w(), A.default.setCurrentUserOnConnectionOpen(R, P)
            }
            class H extends o.default.Store {
                initialize() {
                    this.waitFor(g.default, m.default, C.default, y.default, I.default, T.default), this.syncWith([C.default], w)
                }
                getLocalPresence() {
                    return {
                        status: R,
                        since: b,
                        activities: O,
                        afk: L,
                        broadcast: a
                    }
                }
                getStatus() {
                    return R
                }
                getActivities() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return e ? P : O
                }
                getPrimaryActivity() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return e ? P[0] : O[0]
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
                    return s
                }
            }
            H.displayName = "SelfPresenceStore";
            var z = new H(u.default, {
                START_SESSION: w,
                CONNECTION_OPEN: V,
                CONNECTION_OPEN_SUPPLEMENTAL: V,
                OVERLAY_INITIALIZE: V,
                CONNECTION_CLOSED: w,
                IDLE: w,
                AFK: w,
                RUNNING_GAMES_CHANGE: w,
                STREAMING_UPDATE: w,
                USER_SETTINGS_PROTO_UPDATE: w,
                LOCAL_ACTIVITY_UPDATE: w,
                SPOTIFY_PLAYER_STATE: w,
                SPOTIFY_PLAYER_PLAY: w,
                USER_CONNECTIONS_UPDATE: w,
                SESSIONS_REPLACE: w,
                RPC_APP_DISCONNECTED: w,
                LIBRARY_FETCH_SUCCESS: w,
                LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: w,
                LOGOUT: function() {
                    U = !0, v = R, w()
                },
                EMBEDDED_ACTIVITY_CLOSE: w,
                EMBEDDED_ACTIVITY_OPEN: w,
                FORCE_INVISIBLE: function(e) {
                    return D = e.invisible, w()
                },
                WINDOW_FOCUS: function() {
                    return D = !1, w()
                },
                BROADCAST_START: function(e) {
                    s = e.broadcast, a = (0, _.broadcastToServer)(e.broadcast)
                },
                BROADCAST_STOP: B,
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    t instanceof p.ChannelRecordBase && (null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.ownerId) === f.default.getId() && (s = void 0, a = void 0)
                }
            })
        },
        205817: function(e, t, i) {
            "use strict";
            let s, a;
            i.r(t), i.d(t, {
                default: function() {
                    return w
                }
            });
            var n = i("161179"),
                r = i.n(n),
                l = i("427964"),
                d = i.n(l),
                o = i("498225"),
                u = i("335990"),
                c = i("913144"),
                _ = i("583702"),
                h = i("374014"),
                E = i("582415"),
                m = i("537429"),
                p = i("773336"),
                S = i("373469"),
                f = i("271938"),
                T = i("42203"),
                g = i("42887"),
                I = i("824563"),
                C = i("945956"),
                A = i("568307"),
                y = i("49111"),
                N = i("860604");
            let D = {},
                R = {},
                v = {},
                b = {},
                O = y.StreamLayouts.THEATRE,
                L = {},
                U = [];

            function k() {
                d.forEach(L, (e, t) => {
                    e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete L[t]
                })
            }

            function P(e) {
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
            class G extends o.default.Store {
                getActiveStreamKey() {
                    return (0, m.default)(g.default) ? a : null
                }
                getAllActiveStreamKeys() {
                    return Object.keys(L)
                }
                getRTCConnection(e) {
                    return L[e]
                }
                getStatsHistory(e, t, i) {
                    if (!(0, m.default)(g.default) || null == t) return null;
                    if (i) {
                        let i = S.default.getActiveStreamForUser(t, e);
                        if (null == i || 0 === S.default.getViewerIds(i).length) return null
                    }
                    return U.map(e => i ? function(e) {
                        var t, i, s, a, n;
                        let r = e.find(e => "video" === e.type);
                        return null != r && "video" === r.type ? {
                            type: "streamer",
                            packetsSentOrReceived: null !== (i = r.packetsSent) && void 0 !== i ? i : 0,
                            packetsLost: null !== (s = r.packetsLost) && void 0 !== s ? s : 0,
                            frameRate: null !== (a = r.frameRateEncode) && void 0 !== a ? a : 0,
                            resolution: null !== (n = null === (t = r.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== n ? n : 0,
                            bitrate: 0
                        } : null
                    }(e.rtp.outbound) : function(e) {
                        var t, i, s, a, n, r;
                        if (null == e) return null;
                        let l = e.find(e => "video" === e.type);
                        return null != l && "video" === l.type ? {
                            type: "spectator",
                            packetsSentOrReceived: null !== (i = l.packetsReceived) && void 0 !== i ? i : 0,
                            packetsLost: null !== (s = l.packetsLost) && void 0 !== s ? s : 0,
                            frameRate: null !== (a = l.frameRateDecode) && void 0 !== a ? a : 0,
                            bitrate: null !== (n = l.bitrate) && void 0 !== n ? n : 0,
                            resolution: null !== (r = null === (t = l.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== r ? r : 0
                        } : null
                    }(e.rtp.inbound[t]))
                }
                getQuality() {
                    if (!(0, m.default)(g.default)) return y.RTCConnectionQuality.UNKNOWN;
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
                    return b[e]
                }
            }
            G.displayName = "StreamRTCConnectionStore";
            var w = new G(c.default, !g.default.isSupported() || __OVERLAY__ ? {} : {
                CONNECTION_OPEN: function(e) {
                    s = e.sessionId, a = null, k()
                },
                CONNECTION_CLOSED: function() {
                    s = null, a = null, k()
                },
                RTC_CONNECTION_STATE: M,
                RTC_CONNECTION_PING: M,
                RTC_CONNECTION_LOSS_RATE: M,
                RTC_CONNECTION_UPDATE_ID: function(e) {
                    return d.some(L, t => t === e.connection)
                },
                STREAM_START: function(e) {
                    let {
                        streamType: t,
                        guildId: i,
                        channelId: s,
                        appContext: a,
                        pid: n,
                        sourceId: r
                    } = e, l = (0, h.encodeStreamKey)({
                        streamType: t,
                        guildId: i,
                        channelId: s,
                        ownerId: f.default.getId()
                    });
                    if (D[l] = a, d.forEach(L, e => {
                            let {
                                analyticsContext: t
                            } = e;
                            t.setActionContext(a)
                        }), b[l] = r, v[l] = n, null != n) {
                        let e = A.default.getGameForPID(n);
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
                    D[i] = t, d.forEach(L, e => {
                        let {
                            analyticsContext: i
                        } = e;
                        i.setActionContext(t)
                    }), b[i] = null, v[i] = null
                },
                STREAM_CREATE: function(e) {
                    let {
                        streamKey: t,
                        rtcServerId: i,
                        region: n,
                        viewerIds: l
                    } = e;
                    a = t;
                    let d = L[t];
                    if (null == d && null != i) {
                        var o, c, m;
                        null == v[t] && (R[t] = null);
                        let e = (0, h.decodeStreamKey)(t);
                        null == R[t] && null == b[t] && (R[t] = (0, E.getStreamerApplication)(e, I.default));
                        let a = T.default.getChannel(e.channelId),
                            u = null != a && a.isBroadcastChannel(),
                            S = new _.StreamRTCAnalyticsContext({
                                streamRegion: n,
                                streamApplication: R[t],
                                streamSourceType: function(e) {
                                    var t, i, s;
                                    if (null == e) return "unknown";
                                    if (p.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === "Chrome") {
                                        if (e.startsWith("web-contents-media-stream:")) return "tab";
                                        if (e.startsWith("window:")) return "window";
                                        else if (e.startsWith("screen:")) return "screen"
                                    } else if ((null === (i = platform) || void 0 === i ? void 0 : i.name) === "Firefox") return "" !== e ? "window" : "screen";
                                    else if ((null === (s = platform) || void 0 === s ? void 0 : s.name) === "Safari") return "window";
                                    return "unknown"
                                }(b[t]),
                                actionContext: D[t],
                                numViewers: null != l ? l.length : 0,
                                isBroadcast: u
                            });
                        o = t, c = i, m = S, r(null != s, "Creating RTCConnection without session."), d = new _.default({
                            sessionId: s,
                            streamKey: o,
                            serverId: c,
                            initialLayout: O,
                            analyticsContext: m,
                            isStreamer: null != R[o],
                            parentMediaSessionId: C.default.getMediaSessionId()
                        }), L[t] = d
                    }
                    U = [], g.default.getMediaEngine().on(u.MediaEngineEvent.ConnectionStats, P)
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
                        paused: s
                    } = e, a = L[t];
                    if (null == a) return !1;
                    null != i && a.analyticsContext.trackViewerCount(i.length), a.streamUpdate(s)
                },
                STREAM_DELETE: function(e) {
                    let {
                        streamKey: t
                    } = e, i = L[t];
                    if (null == i) return !1;
                    t === a && (a = null, g.default.getMediaEngine().off(u.MediaEngineEvent.ConnectionStats, P)), i.destroy("stream-end"), delete L[t]
                },
                STREAM_STATS_UPDATE: function(e) {
                    let {
                        stats: t
                    } = e;
                    if (null == t) return !1;
                    U.push(t), U.length > 30 && U.shift()
                },
                STREAM_LAYOUT_UPDATE: function(e) {
                    let {
                        layout: t
                    } = e;
                    O = t, Object.values(L).forEach(e => e.layoutChange(t))
                }
            })
        },
        703370: function(e, t, i) {
            "use strict";
            let s;
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            });
            var a = i("498225"),
                n = i("913144"),
                r = i("653047"),
                l = i("546463"),
                d = i("568307"),
                o = i("988268");

            function u(e) {
                let t = {
                    os: e.os,
                    name: e.name
                };
                return null != e.arguments && (t.arguments = e.arguments), null != e.isLauncher && (t.is_launcher = e.isLauncher), t
            }
            class c extends a.default.Store {
                getGameForPID(e) {
                    var t;
                    if (__OVERLAY__ || null == e) return null;
                    let i = null === (t = d.default.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
                    return l.default.getGameByName(i)
                }
                getGame() {
                    return __OVERLAY__ ? s : null
                }
                getGameAsJSON(e) {
                    let t = this.getGameForPID(e);
                    return null == t ? null : {
                        id: t.id,
                        name: t.name,
                        description: t.description,
                        type: o.ApplicationTypes.GAME,
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
            var _ = new c(n.default, {
                OVERLAY_INITIALIZE: function(e) {
                    s = null != e.currentGame ? new r.default(e.currentGame) : null
                }
            })
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
            var s = i("161179"),
                a = i.n(s),
                n = i("427964"),
                r = i.n(n),
                l = i("802493"),
                d = i("105059"),
                o = i("849365"),
                u = i("860255"),
                c = i("723939"),
                _ = i("70754"),
                h = i("605250"),
                E = i("385976"),
                m = i("364685"),
                p = i("233069"),
                S = i("305961"),
                f = i("660478"),
                T = i("665618");
            let g = new h.default("ReadyPayloadUtils"),
                I = {},
                C = null,
                A = {};

            function y(e, t) {
                var i;
                let {
                    guilds: s,
                    merged_members: a,
                    merged_presences: n,
                    ...r
                } = e, l = v(A, null == n ? void 0 : n.friends), d = null !== (i = null == s ? void 0 : s.map((e, t) => {
                    let i = v(A, null == n ? void 0 : n.guilds[t]),
                        s = v(A, null == a ? void 0 : a[t]);
                    return {
                        ...e,
                        unavailable: void 0 === e.voice_states,
                        presences: i,
                        members: s
                    }
                })) && void 0 !== i ? i : [], o = D(t, s, e => ({
                    id: e.id,
                    members: e.members,
                    presences: e.presences,
                    embedded_activities: e.embedded_activities,
                    voice_states: e.voice_states,
                    unavailable: !1
                }));
                return null != o && d.push(o), A = {}, {
                    ...r,
                    presences: l,
                    guilds: d
                }
            }

            function N(e, t) {
                var i;
                let {
                    users: s,
                    relationships: n,
                    private_channels: h,
                    merged_members: p,
                    guilds: g,
                    ...C
                } = e;
                (function() {
                    ! function() {
                        let e = l.default.database();
                        null != e && !1 === o.default.okSync(e) && c.default.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok")
                    }(), I = {};
                    let e = Object.values(S.default.getGuilds()),
                        t = E.default.getGuilds(),
                        i = m.default.getRawStickersByGuild(),
                        s = f.default.getReadStatesByChannel(),
                        a = (0, _.isCacheEnabled)() ? d.default.getCommittedVersions() : new Map,
                        n = (0, _.isCacheEnabled)() ? u.default.getGuildIdsSync() : new Set;
                    for (let l of e) {
                        var r, h, p;
                        a.has(l.id) && n.has(l.id) && (I[l.id] = {
                            properties: T.toServer(l),
                            roles: l.roles,
                            emojis: null !== (h = null === (r = t[l.id]) || void 0 === r ? void 0 : r.rawEmojis) && void 0 !== h ? h : null,
                            stickers: null !== (p = i.get(l.id)) && void 0 !== p ? p : null,
                            readStates: s
                        })
                    }
                })(), A = r.keyBy(s, e => e.id);
                let y = v(A, n);
                null == h || h.forEach(e => {
                    let t = e.recipient_ids;
                    null != t && (e.recipients = t.map(e => (a(null != A[e], "Missing user in compressed ready payload"), A[e]))), delete e.recipient_ids
                });
                let N = null !== (i = null == g ? void 0 : g.map((e, t) => !0 === e.unavailable ? e : (e.members = v(A, null == p ? void 0 : p[t]), O(e)))) && void 0 !== i ? i : [],
                    R = D(t, g, e => O(e));
                return null != R && N.push(R), {
                    ...C,
                    users: s,
                    presences: [],
                    relationships: y,
                    guilds: N,
                    private_channels: null != h ? h : []
                }
            }

            function D(e, t, i) {
                return null == C || C.identifyTime !== e || null != t && t.some(e => e.id === C.guild.id) ? null : i(C.guild)
            }

            function R(e, t) {
                var i, s, a;
                let n = S.default.getGuild(e.id),
                    r = L(e, null == n ? void 0 : {
                        properties: T.toServer(n),
                        roles: n.roles,
                        emojis: null !== (s = null === (i = E.default.getGuilds()[n.id]) || void 0 === i ? void 0 : i.rawEmojis) && void 0 !== s ? s : null,
                        stickers: null !== (a = m.default.getRawStickersByGuild().get(n.id)) && void 0 !== a ? a : null,
                        readStates: {}
                    });
                return C = {
                    guild: e,
                    identifyTime: t
                }, r
            }

            function v(e, t) {
                let i = [];
                return null == t || t.forEach(t => {
                    if (null == t) return;
                    let s = t.user_id;
                    null != s && (a(null != e[s], "Missing user[".concat(s, "] in compressed ready payload")), t.user = e[s]), delete t.user_id, i.push(t)
                }), i
            }

            function b(e) {
                let t = I[e];
                return delete I[e], t
            }

            function O(e) {
                var t, i, s, a, n, r, l, d, o, u, c, _;
                let h = b(e.id);
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
                    threads: null !== (a = null === (s = e.threads) || void 0 === s ? void 0 : s.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== a ? a : [],
                    threadMessages: U(e.threads),
                    channels: e.channels.map(t => (t.guild_id = e.id, (0, p.createChannelRecordFromServer)(t, e.id))),
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
                        writes: null !== (n = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== n ? n : [],
                        deletes: null !== (r = e.partial_updates.deleted_channel_ids) && void 0 !== r ? r : []
                    },
                    channelTimestampUpdates: e.channel_updates,
                    emojis: null == h.emojis ? null : k(h.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
                    emojiUpdates: {
                        writes: null !== (l = e.partial_updates.emojis) && void 0 !== l ? l : [],
                        deletes: null !== (d = e.partial_updates.deleted_emoji_ids) && void 0 !== d ? d : []
                    },
                    guild_scheduled_events: e.guild_scheduled_events,
                    joined_at: e.joined_at,
                    lastMessages: e.last_messages,
                    member_count: e.member_count,
                    members: e.members,
                    premium_subscription_count: e.premium_subscription_count,
                    properties: null !== (o = e.properties) && void 0 !== o ? o : h.properties,
                    roles: T.filterRoleDeletes(e.id, h.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
                    stage_instances: e.stage_instances,
                    stickers: null == h.stickers ? null : k(h.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
                    stickerUpdates: {
                        writes: null !== (u = e.partial_updates.stickers) && void 0 !== u ? u : [],
                        deletes: null !== (c = e.partial_updates.deleted_sticker_ids) && void 0 !== c ? c : []
                    },
                    unableToSyncDeletes: e.unable_to_sync_deletes,
                    threads: null !== (_ = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== _ ? _ : [],
                    threadMessages: U(e.threads),
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                }
            }

            function L(e, t) {
                var i, s, a, n, r, l, d, o, u, c, _, h;
                if (null == t && (t = b(e.id)), "partial" !== e.data_mode) return {
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
                    threads: null !== (n = null === (a = e.threads) || void 0 === a ? void 0 : a.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== n ? n : [],
                    threadMessages: U(e.threads),
                    channels: e.channels.map(t => (t.guild_id = e.id, (0, p.createChannelRecordFromServer)(t, e.id))),
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
                        writes: null !== (r = null === (i = e.partial_updates.channels) || void 0 === i ? void 0 : i.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== r ? r : [],
                        deletes: null !== (l = e.partial_updates.deleted_channel_ids) && void 0 !== l ? l : []
                    },
                    channelTimestampUpdates: e.channel_updates,
                    embedded_activities: e.embedded_activities,
                    emojis: null == t.emojis ? null : k(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
                    emojiUpdates: {
                        writes: null !== (d = e.partial_updates.emojis) && void 0 !== d ? d : [],
                        deletes: null !== (o = e.partial_updates.deleted_emoji_ids) && void 0 !== o ? o : []
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
                    stickers: null == t.stickers ? null : k(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
                    stickerUpdates: {
                        writes: null !== (c = e.partial_updates.stickers) && void 0 !== c ? c : [],
                        deletes: null !== (_ = e.partial_updates.deleted_sticker_ids) && void 0 !== _ ? _ : []
                    },
                    unableToSyncDeletes: e.unable_to_sync_deletes,
                    threads: null !== (h = null === (s = e.threads) || void 0 === s ? void 0 : s.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== h ? h : [],
                    threadMessages: U(e.threads),
                    voice_states: e.voice_states,
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                }
            }

            function U(e) {
                let t = [];
                if (null != e)
                    for (let i of e) null != i.most_recent_message && t.push(i.most_recent_message);
                return t
            }

            function k(e, t, i) {
                t = null != t ? t : [];
                let s = new Set((null != i ? i : []).concat(t.map(e => e.id)));
                return e.filter(e => !s.has(e.id)).concat(t)
            }
        }
    }
]);
//# sourceMappingURL=fd28d9cb45cef90bb628.js.map