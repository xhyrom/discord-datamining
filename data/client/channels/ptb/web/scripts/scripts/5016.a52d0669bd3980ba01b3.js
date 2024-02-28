(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5016"], {
        998262: function(e, t, s) {
            "use strict";
            s.r(t);
            var l = s("67511");
            s.es(l, t)
        },
        183529: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            }), s("653041"), s("216116"), s("78328"), s("815648");
            var l = s("392711"),
                i = s.n(l),
                u = s("302454"),
                n = s.n(u),
                r = s("259537"),
                a = s("775822"),
                o = s("421219"),
                h = s("405127"),
                d = s("731865"),
                c = s("677239"),
                p = s("610043"),
                _ = s("606929"),
                f = s("871831"),
                R = s("604293"),
                C = s("497160"),
                y = s("366230"),
                E = s("428521"),
                g = s("555083"),
                T = s("221281"),
                m = s("467006");
            let A = Object.freeze({});

            function U(e, t) {
                if (!t.frecencyBoosters) return {};
                let s = c.default.getFrequentlyWithoutFetchingLatest(),
                    l = s.reduce((e, t) => {
                        let {
                            id: s
                        } = t, l = c.default.getScoreWithoutFetchingLatest(s);
                        return l > e ? l : e
                    }, 0),
                    i = [];
                switch (e) {
                    case T.AutocompleterResultTypes.GUILD:
                        i = s.filter(e => e instanceof o.default);
                        break;
                    case T.AutocompleterResultTypes.USER:
                        i = s.filter(e => e instanceof a.ChannelRecordBase && e.type === m.ChannelTypes.DM);
                        break;
                    case T.AutocompleterResultTypes.GROUP_DM:
                        i = s.filter(e => e instanceof a.ChannelRecordBase && e.isMultiUserDM());
                        break;
                    case T.AutocompleterResultTypes.TEXT_CHANNEL:
                        i = s.filter(e => e instanceof a.ChannelRecordBase && (0, a.isGuildSelectableChannelType)(e.type));
                        break;
                    case T.AutocompleterResultTypes.VOICE_CHANNEL:
                        i = s.filter(e => e instanceof a.ChannelRecordBase && e.isGuildVocal())
                }
                let u = {};
                for (let t of i) {
                    let {
                        id: s
                    } = t, i = c.default.getScoreWithoutFetchingLatest(s);
                    if (e === T.AutocompleterResultTypes.USER && t instanceof a.PrivateChannelRecord) {
                        if (t.type === m.ChannelTypes.DM) u[s = t.getRecipientId()] = 1 + i / l;
                        else if (t.type === m.ChannelTypes.GROUP_DM) {
                            let e = t.recipients.length;
                            for (let s of t.recipients) u[s] = 1 + i / l * (1 / e)
                        }
                    } else u[s] = 1 + i / l
                }
                for (let e of _.default.getFriendIDs()) u[e] = (u[e] ?? 1) + .2;
                for (let e of d.default.getDMUserIds()) u[e] = (u[e] ?? 1) + .1;
                return u
            }
            class I {
                constructor(e, t, s = 100, l = A) {
                    this.query = "", this.options = A, this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = [], this._userBlacklist = null, this.parseUserResults = e => {
                        let {
                            results: t
                        } = e;
                        if (this._include(T.AutocompleterResultTypes.USER)) {
                            for (let {
                                    id: e,
                                    score: s,
                                    comparator: l
                                }
                                of(this._userResults = [], t)) {
                                let t = f.default.getUser(e);
                                null != t && this._userResults.push({
                                    type: T.AutocompleterResultTypes.USER,
                                    record: t,
                                    score: function() {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                            t = arguments.length > 1 ? arguments[1] : void 0;
                                        return 1e3 * e * (t ?? 1)
                                    }(s),
                                    comparator: l ?? void 0
                                })
                            }
                            this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults()
                        }
                    }, this.updateAllResults = () => {
                        clearTimeout(this._asyncTimeout), this.results = i()([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults]).uniqBy(e => `${e.type}-${e.record.id}`).sort(g.default).value(), this.onResultsChange(this.results, this.query)
                    }, this.onResultsChange = e, this.setOptions(l, !0), this._limit = s, this.createSearchContext(), this.setResultTypes(t)
                }
                createSearchContext() {
                    null == this.userSearchContext && (this.userSearchContext = E.default.getSearchContext(this.parseUserResults, this._limit))
                }
                setLimit(e) {
                    let {
                        userSearchContext: t
                    } = this;
                    this._limit = e, null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit)
                }
                setResultTypes(e) {
                    this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(T.AutocompleterResultTypes.USER) ? this._userResults : [], this._groupDMResults = this._include(T.AutocompleterResultTypes.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(T.AutocompleterResultTypes.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(T.AutocompleterResultTypes.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(T.AutocompleterResultTypes.GUILD) ? this._guildResults : [], this._applicationResults = this._include(T.AutocompleterResultTypes.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(T.AutocompleterResultTypes.LINK) ? this._linkResults : []
                }
                _include(e) {
                    return null == this.resultTypes || this.resultTypes.has(e)
                }
                _isAsyncSearch() {
                    return this._include(T.AutocompleterResultTypes.USER)
                }
                setOptions(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t ? this.options = {
                        ...this.options,
                        ...e
                    } : this.options = e, null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map(e => e.startsWith("user:") ? e.replace("user:", "") : "").filter(e => "" !== e) : this._userBlacklist = null
                }
                search(e, t) {
                    if (this.query = e, "" === e.trim()) {
                        this.clear(), this.updateAllResults();
                        return
                    }(this.options.frecencyBoosters ? r.FrecencyUserSettingsActionCreators.loadIfNecessary() : Promise.resolve()).finally(() => {
                        this.queryUsers(e, t, this._limit), this._groupDMResults = this.queryGroupDMs(e, this._limit), this._textChannelResults = this.queryTextChannels(e, this._limit), this._voiceChannelResults = this.queryVoiceChannels(e, this._limit), this._guildResults = this.queryGuilds(e, this._limit), this._applicationResults = this.queryApplications(e, this._limit), this._linkResults = this.queryLink(e, this._limit), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), this._asyncTimeout = setTimeout(this.updateAllResults, 300)) : this.updateAllResults()
                    })
                }
                clear() {
                    let {
                        userSearchContext: e
                    } = this;
                    null != e && e.clearQuery(), this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = []
                }
                clean() {
                    this.clear(), this.destroy(), this.query = "", this.updateAllResults()
                }
                pause() {
                    this.userSearchContext?.unsubscribe?.()
                }
                resume() {
                    this.userSearchContext?.subscribe?.()
                }
                destroy() {
                    let {
                        userSearchContext: e
                    } = this;
                    null != e && (e.destroy(), this.userSearchContext = null)
                }
                queryTextChannels(e, t) {
                    if (!this._include(T.AutocompleterResultTypes.TEXT_CHANNEL)) return [];
                    let s = U(T.AutocompleterResultTypes.TEXT_CHANNEL, this.options),
                        {
                            blacklist: l
                        } = this.options;
                    return R.default.queryChannels({
                        query: e,
                        guildId: null,
                        limit: t,
                        fuzzy: !0,
                        filter: null != l ? e => !l.has(`channel:${e.id}`) : void 0,
                        boosters: s
                    })
                }
                queryVoiceChannels(e, t) {
                    if (!this._include(T.AutocompleterResultTypes.VOICE_CHANNEL)) return [];
                    let {
                        voiceChannelGuildFilter: s
                    } = this.options, l = U(T.AutocompleterResultTypes.VOICE_CHANNEL, this.options);
                    return R.default.queryChannels({
                        query: e,
                        guildId: s,
                        limit: t,
                        fuzzy: !0,
                        type: p.GUILD_VOCAL_CHANNELS_KEY,
                        boosters: l
                    })
                }
                queryGuilds(e, t) {
                    if (!this._include(T.AutocompleterResultTypes.GUILD)) return [];
                    let s = U(T.AutocompleterResultTypes.GUILD, this.options),
                        {
                            blacklist: l
                        } = this.options;
                    return R.default.queryGuilds({
                        query: e,
                        limit: t,
                        fuzzy: !0,
                        filter: null != l ? e => !l.has(`guild:${e.id}`) : void 0,
                        boosters: s
                    })
                }
                queryUsers(e, t, s) {
                    let {
                        userSearchContext: l
                    } = this;
                    if (null == l || !this._include(T.AutocompleterResultTypes.USER)) return;
                    let {
                        userFilters: i
                    } = this.options;
                    void 0 !== t && C.default.requestMembers(t, e, 100), l.setLimit(s), l.setQuery(e, i, this._userBlacklist, U(T.AutocompleterResultTypes.USER, this.options))
                }
                queryGroupDMs(e, t) {
                    if (!this._include(T.AutocompleterResultTypes.GROUP_DM)) return [];
                    let {
                        blacklist: s
                    } = this.options, l = U(T.AutocompleterResultTypes.GROUP_DM, this.options);
                    return R.default.queryGroupDMs({
                        query: e,
                        limit: t,
                        fuzzy: !0,
                        filter: null != s ? e => !s.has(`channel:${e.id}`) : void 0,
                        boosters: l
                    })
                }
                queryApplications(e, t) {
                    return this._include(T.AutocompleterResultTypes.APPLICATION) ? R.default.queryApplications({
                        query: e,
                        limit: t,
                        fuzzy: !0
                    }) : []
                }
                queryLink(e, t) {
                    let s;
                    if (!this._include(T.AutocompleterResultTypes.LINK)) return [];
                    let l = n().sanitizeUrl(e);
                    try {
                        s = new URL(l)
                    } catch (e) {
                        return []
                    }
                    let {
                        pathname: i,
                        hostname: u = "",
                        host: r
                    } = s, a = y.default.isDiscordHostname(u) || window.location.host === r;
                    return null !== i && a && y.default.isAppRoute(i) ? [{
                        type: T.AutocompleterResultTypes.LINK,
                        record: h.default.fromPath(i),
                        score: 1
                    }] : []
                }
            }
        },
        428521: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SearchContext: function() {
                    return T
                },
                default: function() {
                    return A
                }
            }), s("653041"), s("216116"), s("78328"), s("815648");
            var l, i, u = s("392711"),
                n = s.n(u),
                r = s("153832"),
                a = s("963694"),
                o = s("775822"),
                h = s("731865"),
                d = s("361733"),
                c = s("606929"),
                p = s("871831"),
                _ = s("370275"),
                f = s("84819"),
                R = s("439823");

            function C(e) {
                if (null == e || c.default.isBlocked(e.id)) return null;
                let t = {
                    id: e.id,
                    username: "0" !== e.discriminator ? `${e.username}#${e.discriminator}` : e.username
                };
                return null != R.default.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), c.default.isFriend(e.id) && (t.isFriend = !0, t.friendNickname = c.default.getNickname(e.id)), t
            }

            function y(e, t, s) {
                null != e && (e[t] = null != s && "" !== s ? s : null)
            }

            function E(e) {
                let t = [];
                if (null == e || !(0, o.isPrivate)(e.type)) return t;
                let {
                    recipients: s = []
                } = e;
                return s.forEach(s => {
                    let l = C(p.default.getUser(s));
                    null != e && y(l, e.id), t.push(l)
                }), t
            }

            function g(e, t) {
                let s = [];
                return e.forEach(e => {
                    let l = C(e.user);
                    null != l && (y(l, t, e.nick), s.push(l))
                }), s
            }(i = l || (l = {})).UPDATE_USERS = "UPDATE_USERS", i.USER_RESULTS = "USER_RESULTS", i.QUERY_SET = "QUERY_SET", i.QUERY_CLEAR = "QUERY_CLEAR";
            class T {
                constructor(e, t, s = 10) {
                    this.handleMessages = e => {
                        let t = e.data;
                        null != t && "USER_RESULTS" === t.type && t.uuid === this._uuid && (!1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery())
                    }, this._worker = e, this._uuid = (0, r.v4)(), this._callback = t, this._limit = s, this._currentQuery = null, this._nextQuery = null, this._subscribed = !1, this.subscribe()
                }
                setLimit(e) {
                    this._limit = e, null != this._nextQuery && (this._nextQuery.limit = e)
                }
                subscribe() {
                    null != this._worker && !this._subscribed && (this._worker.addEventListener("message", this.handleMessages, !1), this._subscribed = !0, this._setNextQuery())
                }
                unsubscribe() {
                    null != this._worker && this._subscribed && (this._worker.removeEventListener("message", this.handleMessages, !1), this._subscribed = !1)
                }
                destroy() {
                    this.clearQuery(), this.unsubscribe()
                }
                clearQuery() {
                    this._currentQuery = !1, this._nextQuery = null, null != this._worker && this._subscribed && this._worker.postMessage({
                        uuid: this._uuid,
                        type: "QUERY_CLEAR"
                    })
                }
                setQuery(e, t, s, l) {
                    null != e && (this._nextQuery = {
                        query: e,
                        filters: t,
                        blacklist: s,
                        boosters: l ?? {},
                        limit: this._limit
                    }, this._setNextQuery())
                }
                _setNextQuery() {
                    (null == this._currentQuery || !1 === this._currentQuery) && null != this._nextQuery && (null != this._worker && this._subscribed ? (this._currentQuery = this._nextQuery, this._nextQuery = null, this._worker.postMessage({
                        uuid: this._uuid,
                        type: "QUERY_SET",
                        payload: this._currentQuery
                    })) : !this._subscribed && this.subscribe())
                }
            }
            class m extends a.default {
                _initialize() {
                    this.rebootWebworker()
                }
                _terminate() {
                    null != this._worker && (this._worker.terminate(), this._worker = null)
                }
                rebootWebworker() {
                    null != this._worker && (this._worker.terminate(), this._worker = null), this._worker = new Worker(new URL(s.p + s.u("45563"), s.b))
                }
                updateUsers(e) {
                    let {
                        _worker: t
                    } = this;
                    null != t && (e = e.filter(_.isNotNullish), t.postMessage({
                        type: "UPDATE_USERS",
                        payload: e
                    }))
                }
                getSearchContext(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    this.initialize();
                    let {
                        _worker: s
                    } = this;
                    if (null == s) throw Error("SearchContextManager: No webworker initialized");
                    return new T(s, e, t)
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        LOGOUT: () => this._handleLogout(),
                        POST_CONNECTION_OPEN: () => this._handleConnectionOpen(),
                        CONNECTION_OPEN_SUPPLEMENTAL: e => this._handleConnectionOpenSupplemental(e),
                        OVERLAY_INITIALIZE: e => this._handleOverlayInitialize(e),
                        CURRENT_USER_UPDATE: e => this._handleCurrentUserUpdate(e),
                        GUILD_CREATE: e => this._handleGuildCreate(e),
                        GUILD_MEMBERS_CHUNK: e => this._handleGuildMembersChunk(e),
                        GUILD_MEMBER_ADD: e => this._handleGuildMemberUpdate(e),
                        GUILD_MEMBER_UPDATE: e => this._handleGuildMemberUpdate(e),
                        RELATIONSHIP_ADD: e => this._handleRelationshipAdd(e),
                        RELATIONSHIP_UPDATE: e => this._handleRelationshipUpdate(e),
                        RELATIONSHIP_REMOVE: e => this._handleRelationshipRemove(e),
                        CHANNEL_CREATE: e => this._handleDMCreate(e),
                        CHANNEL_UPDATES: e => this._handleDMUpdates(e),
                        CHANNEL_RECIPIENT_ADD: e => this._handleRecipientChanges(e),
                        PASSIVE_UPDATE_V1: e => this._handlePassiveUpdateV1(e)
                    }, this._handleLogout = () => {
                        this.rebootWebworker()
                    }, this._handleConnectionOpen = () => {
                        setTimeout(() => {
                            let e = p.default.getCurrentUser();
                            if (null == e) return;
                            let t = C(e),
                                s = {
                                    [t.id]: t
                                };
                            Object.values(p.default.getUsers()).forEach(e => {
                                s[e.id] = C(e)
                            });
                            let l = d.default.getMutableAllGuildsAndMembers();
                            for (let e in l)
                                for (let t in l[e]) {
                                    let i = s[t],
                                        u = l[e][t]?.nick ?? R.default.getGlobalName(i);
                                    null != i && (i[e] = null != u && "" !== u ? u : null)
                                }
                            this.updateUsers(Object.values(s))
                        }, 3e3)
                    }, this._handleConnectionOpenSupplemental = e => {
                        let {
                            guilds: t
                        } = e;
                        setTimeout(() => {
                            let e = n().flatMap(t, e => g(e.members, e.id));
                            this.updateUsers(e)
                        }, 3e3)
                    }, this._handleOverlayInitialize = e => {
                        let {
                            users: t,
                            guildMembers: s
                        } = e, l = new Map;
                        for (let e of t) l.set(e.id, C(e));
                        for (let e of f.default.keys(s)) {
                            let t = s[e];
                            if (null != t)
                                for (let s of f.default.keys(t)) {
                                    let i = l.get(s),
                                        u = t[s];
                                    null != i && null != u && null != u.nick && (y(i, e, u.nick), l.set(s, i))
                                }
                        }
                        this.updateUsers(Array.from(l.values())), l.clear()
                    }, this._handleCurrentUserUpdate = e => {
                        let {
                            user: t
                        } = e, s = C(t);
                        null != s && this.updateUsers([s])
                    }, this._handleGuildCreate = e => {
                        let {
                            guild: t
                        } = e, {
                            members: s
                        } = t;
                        this.updateUsers(g(s, t.id))
                    }, this._handleGuildMembersChunk = e => {
                        let {
                            members: t,
                            guildId: s
                        } = e;
                        this.updateUsers(g(t, s))
                    }, this._handleGuildMemberUpdate = e => {
                        let {
                            guildId: t,
                            user: s,
                            nick: l
                        } = e, i = C(s);
                        null != i && (y(i, t, l), this.updateUsers([i]))
                    }, this._handlePassiveUpdateV1 = e => {
                        null != e.members && this.updateUsers(g(e.members, e.guildId))
                    }, this._handleRelationshipAdd = e => {
                        let t = C(e.relationship.user);
                        this.updateUsers([t])
                    }, this._handleRelationshipUpdate = e => {
                        let t = C(p.default.getUser(e.relationship.id));
                        this.updateUsers([t])
                    }, this._handleRelationshipRemove = e => {
                        let t = C(p.default.getUser(e.relationship.id));
                        this.updateUsers([t])
                    }, this._handleDMCreate = e => {
                        let {
                            channel: {
                                id: t
                            }
                        } = e, s = E(h.default.getChannel(t));
                        if (0 === s.length) return;
                        let l = C(p.default.getCurrentUser());
                        y(l, t), s.push(l), this.updateUsers(s)
                    }, this._handleDMUpdates = e => {
                        let {
                            channels: t
                        } = e;
                        for (let e of t) {
                            let t = E(h.default.getChannel(e.id));
                            if (0 === t.length) continue;
                            let s = C(p.default.getCurrentUser());
                            y(s, e.id), t.push(s), this.updateUsers(t)
                        }
                    }, this._handleRecipientChanges = e => {
                        let {
                            channelId: t,
                            user: s,
                            isMember: l
                        } = e;
                        if (!l) return;
                        let i = C(s);
                        y(i, t), this.updateUsers([i])
                    }
                }
            }
            var A = new m
        },
        454509: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                createHeaderResult: function() {
                    return i
                }
            });
            var l = s("221281");

            function i(e) {
                return {
                    type: l.AutocompleterResultTypes.HEADER,
                    record: new l.HeaderRecord(e),
                    score: 0
                }
            }
        },
        101003: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var l = s("741312"),
                i = s("731865"),
                u = s("606929"),
                n = s("871831"),
                r = s("221281"),
                a = s("467006");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.default,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.default,
                    h = t.getChannel(e);
                if (null == h) return null;
                let d = (0, l.computeChannelName)(h, s, o);
                switch (h.type) {
                    case a.ChannelTypes.DM: {
                        let e = s.getUser(h.getRecipientId());
                        if (null == e) return null;
                        return {
                            type: r.AutocompleterResultTypes.USER,
                            record: e,
                            score: 0,
                            comparator: d
                        }
                    }
                    case a.ChannelTypes.GROUP_DM:
                        return {
                            type: r.AutocompleterResultTypes.GROUP_DM, record: h, score: 0, comparator: d
                        };
                    case a.ChannelTypes.GUILD_VOICE:
                    case a.ChannelTypes.GUILD_STAGE_VOICE:
                        return {
                            type: r.AutocompleterResultTypes.VOICE_CHANNEL, record: h, score: 0, comparator: d
                        };
                    default:
                        return {
                            type: r.AutocompleterResultTypes.TEXT_CHANNEL, record: h, score: 0, comparator: d
                        }
                }
            }
        },
        162900: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return function e(t, s, i, u) {
                        let {
                            length: n
                        } = i, r = u, a = s;
                        if (0 === n) return 0;
                        if (null == r) r = a;
                        else if (r === a) return a;
                        return (a += t === l.FindResultDirections.UP ? -1 : 1) < 0 || a >= n ? e(t, a < 0 ? n : -1, i, r) : i[a].type === l.AutocompleterResultTypes.HEADER ? e(t, a, i, r) : a
                    }
                }
            });
            var l = s("221281")
        },
        929451: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                createHeaderResult: function() {
                    return u.createHeaderResult
                },
                default: function() {
                    return r
                },
                findNextSelectedResult: function() {
                    return n.default
                }
            });
            var l = s("183529"),
                i = s("221281");
            s.es(i, t);
            var u = s("454509"),
                n = s("162900");
            s("555083");
            var r = l.default
        },
        359916: function(e, t, s) {
            "use strict";
            let l;
            s.r(t), s.d(t, {
                default: function() {
                    return Y
                }
            }), s("653041"), s("733860");
            var i = s("392711"),
                u = s.n(i),
                n = s("661223"),
                r = s("986329"),
                a = s("312916"),
                o = s("929451"),
                h = s("101003"),
                d = s("655864"),
                c = s("806790"),
                p = s("786649"),
                _ = s("293377"),
                f = s("262047"),
                R = s("731865"),
                C = s("911388"),
                y = s("610043"),
                E = s("361733"),
                g = s("327271"),
                T = s("197905"),
                m = s("417223"),
                A = s("232733"),
                U = s("632706"),
                I = s("301309"),
                S = s("604293"),
                N = s("370275"),
                L = s("467006"),
                M = s("30175");
            let D = "seenQSTutorial",
                H = [o.AutocompleterResultTypes.USER, o.AutocompleterResultTypes.GROUP_DM, o.AutocompleterResultTypes.TEXT_CHANNEL, o.AutocompleterResultTypes.GUILD, o.AutocompleterResultTypes.APPLICATION, o.AutocompleterResultTypes.LINK],
                v = 0,
                O = !1,
                b = !1,
                k = null,
                G = [],
                w = null,
                P = 0,
                Q = [],
                x = [];

            function q() {
                b = g.default.getGuildCount() >= 3 || u().size(R.default.getMutablePrivateChannels()) >= 20, Q = []
            }

            function W(e) {
                let t = (0, h.default)(e);
                return null == t || null != k && k !== t.type ? null : t
            }

            function V(e) {
                let {
                    query: t,
                    queryMode: s
                } = e, i = (0, d.isSplitMessagesTabAndOnMessagesTab)() ? void 0 : U.default.getGuildId() ?? void 0, u = new Set([`user:${f.default.getId()}`]);
                null != i && u.add(`guild:${i}`), l = l ?? new o.default(F, H, null != s ? 100 : 5, {
                    frecencyBoosters: !0,
                    blacklist: u
                }), w = null, P = t.length, k = s, l.search(t)
            }

            function F(e, t) {
                ! function(e, t) {
                    if (e.length !== t.length) return !1;
                    for (let s = 0; s < e.length; s++) {
                        let l = e[s],
                            i = t[s];
                        if (l.record.id !== i.record.id) return !1
                    }
                    return !0
                }(e = "" === (t = t.trim()).trim() ? function() {
                    let e = U.default.getGuildId() ?? void 0,
                        t = A.default.getChannelId() ?? void 0;
                    switch (k) {
                        case o.AutocompleterResultTypes.USER: {
                            let e = f.default.getId();
                            return S.default.getRecentlyTalked(t, 100).filter(t => {
                                let {
                                    record: s
                                } = t;
                                return s.id !== e
                            })
                        }
                        case o.AutocompleterResultTypes.APPLICATION:
                            return S.default.queryApplications({
                                query: "",
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.GUILD:
                            return S.default.queryGuilds({
                                query: "",
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.TEXT_CHANNEL:
                            return S.default.queryChannels({
                                query: "",
                                guildId: U.default.getGuildId(),
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.VOICE_CHANNEL:
                            return S.default.queryChannels({
                                query: "",
                                guildId: U.default.getGuildId(),
                                limit: 100,
                                fuzzy: !0,
                                filter: () => !0,
                                type: y.GUILD_VOCAL_CHANNELS_KEY
                            })
                    }
                    let s = [],
                        l = [];
                    for (let e = 1; e < x.length; e += 1) {
                        let t = W(x[e]);
                        if (null != t)(t.type !== o.AutocompleterResultTypes.TEXT_CHANNEL && t.type !== o.AutocompleterResultTypes.VOICE_CHANNEL || T.default.can(L.Permissions.VIEW_CHANNEL, t.record)) && l.push(t)
                    }
                    l.length > 0 && s.push((0, o.createHeaderResult)(M.default.Messages.QUICKSWITCHER_LAST_CHANNEL), ...l);
                    let i = function(e) {
                        let t = [];
                        return C.default.getRecentlyEditedDrafts(C.DraftType.ChannelMessage).forEach(s => {
                            let {
                                channelId: l
                            } = s;
                            if (e(l)) return;
                            let i = W(l);
                            null != i && t.push(i)
                        }), t
                    }(e => e === t || x.includes(e));
                    i.length > 0 && s.push((0, o.createHeaderResult)(M.default.Messages.QUICKSWITCHER_DRAFTS), ...i);
                    let n = m.default.getMentionChannelIds().filter(e => e !== t && !x.includes(e)).map(e => W(e)).filter(N.isNotNullish).reverse();
                    if (n.length > 0 && (s.push((0, o.createHeaderResult)(M.default.Messages.QUICKSWITCHER_MENTIONS)), s = s.concat(n)), null != e) {
                        let l = y.default.getSelectableChannelIds(e).filter(e => {
                            let s = R.default.getChannel(e);
                            return !(null == s || e === t || x.includes(e) || I.default.isChannelMuted(s.guild_id, e) || null != s.parent_id && I.default.isChannelMuted(s.guild_id, s.parent_id)) && (0, c.getHasImportantUnread)(s)
                        }).map(e => W(e)).filter(e => e);
                        Object.values(p.default.getActiveJoinedUnreadThreadsForGuild(e)).forEach(e => {
                            for (let t in e) {
                                let e = W(t);
                                null != e && l.push(e)
                            }
                        }), l.length > 0 && (s.push((0, o.createHeaderResult)(M.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), s = s.concat(l))
                    }
                    return u()(s).uniqBy(e => e.record.id).value()
                }() : e, Q) && (Q = e, ! function(e, t) {
                    switch (k) {
                        case o.AutocompleterResultTypes.USER: {
                            let t = g.default.getGuild(U.default.getGuildId());
                            e.unshift((0, o.createHeaderResult)(null != t ? M.default.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
                                name: t.name
                            }) : M.default.Messages.QUICKSWITCHER_QUERYMODE_USERS)), G = e;
                            break
                        }
                        case o.AutocompleterResultTypes.TEXT_CHANNEL:
                            e.unshift((0, o.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), G = e;
                            break;
                        case o.AutocompleterResultTypes.VOICE_CHANNEL:
                            e.unshift((0, o.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), G = e;
                            break;
                        case o.AutocompleterResultTypes.GUILD:
                            e.unshift((0, o.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), G = e;
                            break;
                        case o.AutocompleterResultTypes.APPLICATION:
                            e.unshift((0, o.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), G = e;
                            break;
                        default:
                            G = e
                    }
                    if (t !== w) w = t, P = Math.max(t.length, P), v = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, -1, G);
                    else {
                        let e = G[v];
                        null != e && e.type === o.AutocompleterResultTypes.HEADER && (v = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, v, G))
                    }
                    B.emitChange()
                }(e, t))
            }

            function z() {
                w = null, P = 0, Q = [], null != l && (l.destroy(), l = null)
            }
            class K extends n.default.PersistedStore {
                static #e = this.displayName = "QuickSwitcherStore";
                static #t = this.persistKey = "QuickSwitcherStore";
                initialize(e) {
                    this.waitFor(E.default, g.default, R.default), this.syncWith([_.default], () => !0), O = r.default.get(D) || !1, x = e?.channelHistory ?? []
                }
                getState() {
                    return {
                        channelHistory: x
                    }
                }
                isOpen() {
                    return null != l
                }
                getResultTotals(e) {
                    return null == l ? 0 : null == e ? l.results.reduce((e, t) => t.type !== o.AutocompleterResultTypes.HEADER ? e + 1 : e, 0) : l.results.reduce((t, s) => s.type === e ? t + 1 : t, 0)
                }
                channelNoticePredicate(e, t) {
                    let s = Date.now() - t >= L.CHANNEL_NOTICE_SHOW_DELAY;
                    return b && s
                }
                getFrequentGuilds() {
                    return null != l ? l.queryGuilds("", 100) : null
                }
                getFrequentGuildsLength() {
                    return null != l ? l.queryGuilds("", 100).length : 0
                }
                getChannelHistory() {
                    return x
                }
                getProps() {
                    return {
                        theme: _.default.theme,
                        query: null != l ? l.query : "",
                        queryMode: k,
                        results: G,
                        selectedIndex: v,
                        seenTutorial: O,
                        maxQueryLength: P
                    }
                }
            }
            let B = new K(a.default, {
                CONNECTION_OPEN: q,
                CONNECTION_OPEN_SUPPLEMENTAL: q,
                QUICKSWITCHER_SHOW: V,
                SHOW_ACTION_SHEET_QUICK_SWITCHER: V,
                QUICKSWITCHER_HIDE: z,
                OVERLAY_SET_INPUT_LOCKED: z,
                HIDE_ACTION_SHEET_QUICK_SWITCHER: z,
                QUICKSWITCHER_SEARCH: function(e) {
                    let {
                        query: t,
                        queryMode: s
                    } = e;
                    if (null == l) return !1;
                    let i = U.default.getGuildId() ?? null;
                    if (k !== s) {
                        l.setResultTypes(null != s ? [s] : H), l.setLimit(null != s ? 100 : 5);
                        let e = U.default.getGuildId() ?? void 0;
                        s === o.AutocompleterResultTypes.USER && null != e ? l.setOptions({
                            userFilters: {
                                guild: e,
                                friends: !0
                            }
                        }, !0) : s === o.AutocompleterResultTypes.VOICE_CHANNEL ? l.setOptions({
                            voiceChannelGuildFilter: null
                        }, !0) : l.setOptions({
                            userFilters: null,
                            voiceChannelGuildFilter: void 0
                        }, !0)
                    }
                    k = s, l.search(t, k === o.AutocompleterResultTypes.USER ? i : void 0)
                },
                QUICKSWITCHER_SELECT: function(e) {
                    v = e.selectedIndex
                },
                QUICKSWITCHER_SWITCH_TO: function() {
                    if (O) return !1;
                    O = !0, r.default.set(D, !0)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t) return !1;
                    (x = x.filter(e => e !== t)).unshift(t), x.length > 4 && (x.length = 4)
                }
            });
            var Y = B
        },
        806790: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getHasImportantUnread: function() {
                    return n
                }
            }), s("661223");
            var l = s("417223"),
                i = s("301309"),
                u = s("587361");

            function n(e) {
                return l.default.hasUnread(e.id) && i.default.resolveUnreadSetting(e) === u.UnreadSetting.ALL_MESSAGES
            }
        },
        405127: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var l = s("885714");
            class i extends l.default {
                static fromPath(e) {
                    return new i({
                        id: e,
                        path: e
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.path = e.path
                }
            }
            var u = i
        },
        677239: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MAX_NUM_SELECTED_ITEMS: function() {
                    return f
                },
                default: function() {
                    return A
                }
            }), s("653041");
            var l = s("392711"),
                i = s.n(l),
                u = s("661223"),
                n = s("312916"),
                r = s("580905"),
                a = s("991400"),
                o = s("731865"),
                h = s("327271"),
                d = s("232733"),
                c = s("632706"),
                p = s("467006"),
                _ = s("746835");
            let f = 100,
                R = new r.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
                    },
                    lookupKey: e => h.default.getGuild(e) ?? o.default.getChannel(e) ?? o.default.getChannel(o.default.getDMFromUserId(e)),
                    afterCompute: () => {},
                    numFrequentlyItems: f,
                    maxSamples: 10
                }),
                C = null,
                y = null;

            function E(e) {
                let {
                    guildId: t,
                    channelId: s
                } = e, l = !1;
                return s !== C && (C = s ?? null, null != s && p.ID_REGEX.test(s) && (l = !0, R.track(s), T.pendingUsages.push({
                    key: s,
                    timestamp: Date.now()
                }))), t !== y && (y = t ?? null, null != t && p.ID_REGEX.test(t) && (l = !0, R.track(t), T.pendingUsages.push({
                    key: t,
                    timestamp: Date.now()
                }))), l
            }

            function g() {
                let e = a.default.frecencyWithoutFetchingLatest.guildAndChannelFrecency?.guildAndChannels;
                if (null == e) return !1;
                R.overwriteHistory(i().mapValues(e, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), T.pendingUsages)
            }
            let T = {
                pendingUsages: []
            };
            class m extends u.default.PersistedStore {
                static #e = this.displayName = "FrecencyStore";
                static #t = this.persistKey = "FrecencyStore";
                initialize(e) {
                    this.waitFor(c.default, d.default), null != e && (e.pendingUsages = e.pendingUsages.filter(e => null != e && p.ID_REGEX.test(e.key)), T = e), this.syncWith([a.default], g)
                }
                getState() {
                    return T
                }
                hasPendingUsage() {
                    return T.pendingUsages.length > 0
                }
                get frecencyWithoutFetchingLatest() {
                    return R
                }
                getFrequentlyWithoutFetchingLatest() {
                    return R.frequently
                }
                getScoreWithoutFetchingLatest(e) {
                    return R.getFrecency(e) ?? 0
                }
                getScoreForDMWithoutFetchingLatest(e) {
                    let t = o.default.getDMFromUserId(e);
                    return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
                }
                getMaxScore() {
                    return 10 * f
                }
                getBonusScore() {
                    return 100
                }
            }
            var A = new m(n.default, {
                CHANNEL_SELECT: E,
                VOICE_CHANNEL_SELECT: E,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: s
                    } = e;
                    return t === _.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && !!s && (T.pendingUsages = [], !0)
                }
            })
        },
        733679: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var l = s("735250"),
                i = s("470079"),
                u = s("803997"),
                n = s.n(u),
                r = s("974328"),
                a = s("413856");

            function o(e) {
                let {
                    children: t,
                    "aria-label": s,
                    className: u,
                    position: o
                } = e, h = i.useRef(null), d = s ?? ("string" == typeof t && t);
                return (0, l.jsx)(r.Tooltip, {
                    position: o ?? "top",
                    delay: 500,
                    text: t,
                    "aria-label": d,
                    children: s => {
                        let {
                            onMouseEnter: i,
                            onMouseLeave: r
                        } = s;
                        return (0, l.jsx)("div", {
                            className: n()(u, a.overflow),
                            ref: h,
                            "aria-hidden": e["aria-hidden"],
                            onMouseEnter: () => {
                                let {
                                    current: e
                                } = h;
                                null != e && e.offsetWidth < e.scrollWidth && i?.()
                            },
                            onMouseLeave: r,
                            children: t
                        })
                    }
                })
            }
        },
        857363: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var l = s("735250");
            s("470079");
            var i = s("336328"),
                u = s("998262"),
                n = s("262113"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: i = "currentColor",
                        foreground: u,
                        ...r
                    } = e;
                    return 16 === t || 16 === s ? (0, l.jsx)("svg", {
                        ...(0, n.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 16 16",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, l.jsx)("svg", {
                        ...(0, n.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, u.SettingsIcon, void 0, {
                    size: 24
                })
        },
        67511: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SettingsIcon: function() {
                    return n
                }
            });
            var l = s("735250");
            s("470079");
            var i = s("600186"),
                u = s("11768");
            let n = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: n = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=5016.a52d0669bd3980ba01b3.js.map