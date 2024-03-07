(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83257"], {
        337575: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            }), s("808653"), s("222007"), s("781738"), s("506083"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("424973");
            var l, i = s("917351"),
                u = s.n(i),
                n = s("404828"),
                r = s.n(n),
                a = s("872173"),
                o = s("233069"),
                h = s("813006"),
                d = s("741347"),
                c = s("42203"),
                p = s("319781"),
                _ = s("923959"),
                f = s("27618"),
                R = s("697218"),
                y = s("25292"),
                E = s("651879"),
                C = s("253981"),
                g = s("447909"),
                T = s("195547"),
                A = s("375822"),
                m = s("49111");
            let U = Object.freeze({});

            function S(e, t) {
                var s, l;
                if (!t.frecencyBoosters) return {};
                let i = p.default.getFrequentlyWithoutFetchingLatest(),
                    u = i.reduce((e, t) => {
                        let {
                            id: s
                        } = t, l = p.default.getScoreWithoutFetchingLatest(s);
                        return l > e ? l : e
                    }, 0),
                    n = [];
                switch (e) {
                    case A.AutocompleterResultTypes.GUILD:
                        n = i.filter(e => e instanceof h.default);
                        break;
                    case A.AutocompleterResultTypes.USER:
                        n = i.filter(e => e instanceof o.ChannelRecordBase && e.type === m.ChannelTypes.DM);
                        break;
                    case A.AutocompleterResultTypes.GROUP_DM:
                        n = i.filter(e => e instanceof o.ChannelRecordBase && e.isMultiUserDM());
                        break;
                    case A.AutocompleterResultTypes.TEXT_CHANNEL:
                        n = i.filter(e => e instanceof o.ChannelRecordBase && (0, o.isGuildSelectableChannelType)(e.type));
                        break;
                    case A.AutocompleterResultTypes.VOICE_CHANNEL:
                        n = i.filter(e => e instanceof o.ChannelRecordBase && e.isGuildVocal())
                }
                let r = {};
                for (let t of n) {
                    let {
                        id: s
                    } = t, l = p.default.getScoreWithoutFetchingLatest(s);
                    if (e === A.AutocompleterResultTypes.USER && t instanceof o.PrivateChannelRecord) {
                        if (t.type === m.ChannelTypes.DM) r[s = t.getRecipientId()] = 1 + l / u;
                        else if (t.type === m.ChannelTypes.GROUP_DM) {
                            let e = t.recipients.length;
                            for (let s of t.recipients) r[s] = 1 + l / u * (1 / e)
                        }
                    } else r[s] = 1 + l / u
                }
                let a = f.default.getFriendIDs();
                for (let e of a) r[e] = (null !== (s = r[e]) && void 0 !== s ? s : 1) + .2;
                let d = c.default.getDMUserIds();
                for (let e of d) r[e] = (null !== (l = r[e]) && void 0 !== l ? l : 1) + .1;
                return r
            }
            l = class {
                createSearchContext() {
                    null == this.userSearchContext && (this.userSearchContext = g.default.getSearchContext(this.parseUserResults, this._limit))
                }
                setLimit(e) {
                    let {
                        userSearchContext: t
                    } = this;
                    this._limit = e, null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit)
                }
                setResultTypes(e) {
                    this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(A.AutocompleterResultTypes.USER) ? this._userResults : [], this._groupDMResults = this._include(A.AutocompleterResultTypes.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(A.AutocompleterResultTypes.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(A.AutocompleterResultTypes.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(A.AutocompleterResultTypes.GUILD) ? this._guildResults : [], this._applicationResults = this._include(A.AutocompleterResultTypes.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(A.AutocompleterResultTypes.LINK) ? this._linkResults : []
                }
                _include(e) {
                    return null == this.resultTypes || this.resultTypes.has(e)
                }
                _isAsyncSearch() {
                    return this._include(A.AutocompleterResultTypes.USER)
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
                    }
                    let s = this.options.frecencyBoosters ? a.FrecencyUserSettingsActionCreators.loadIfNecessary() : Promise.resolve();
                    s.finally(() => {
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
                    var e, t;
                    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t)
                }
                resume() {
                    var e, t;
                    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t)
                }
                destroy() {
                    let {
                        userSearchContext: e
                    } = this;
                    null != e && (e.destroy(), this.userSearchContext = null)
                }
                queryTextChannels(e, t) {
                    if (!this._include(A.AutocompleterResultTypes.TEXT_CHANNEL)) return [];
                    let s = S(A.AutocompleterResultTypes.TEXT_CHANNEL, this.options),
                        {
                            blacklist: l
                        } = this.options;
                    return y.default.queryChannels({
                        query: e,
                        guildId: null,
                        limit: t,
                        fuzzy: !0,
                        filter: null != l ? e => !l.has("channel:".concat(e.id)) : void 0,
                        boosters: s
                    })
                }
                queryVoiceChannels(e, t) {
                    if (!this._include(A.AutocompleterResultTypes.VOICE_CHANNEL)) return [];
                    let {
                        voiceChannelGuildFilter: s
                    } = this.options, l = S(A.AutocompleterResultTypes.VOICE_CHANNEL, this.options);
                    return y.default.queryChannels({
                        query: e,
                        guildId: s,
                        limit: t,
                        fuzzy: !0,
                        type: _.GUILD_VOCAL_CHANNELS_KEY,
                        boosters: l
                    })
                }
                queryGuilds(e, t) {
                    if (!this._include(A.AutocompleterResultTypes.GUILD)) return [];
                    let s = S(A.AutocompleterResultTypes.GUILD, this.options),
                        {
                            blacklist: l
                        } = this.options;
                    return y.default.queryGuilds({
                        query: e,
                        limit: t,
                        fuzzy: !0,
                        filter: null != l ? e => !l.has("guild:".concat(e.id)) : void 0,
                        boosters: s
                    })
                }
                queryUsers(e, t, s) {
                    let {
                        userSearchContext: l
                    } = this;
                    if (null == l || !this._include(A.AutocompleterResultTypes.USER)) return;
                    let {
                        userFilters: i
                    } = this.options;
                    void 0 !== t && E.default.requestMembers(t, e, 100), l.setLimit(s), l.setQuery(e, i, this._userBlacklist, S(A.AutocompleterResultTypes.USER, this.options))
                }
                queryGroupDMs(e, t) {
                    if (!this._include(A.AutocompleterResultTypes.GROUP_DM)) return [];
                    let {
                        blacklist: s
                    } = this.options, l = S(A.AutocompleterResultTypes.GROUP_DM, this.options);
                    return y.default.queryGroupDMs({
                        query: e,
                        limit: t,
                        fuzzy: !0,
                        filter: null != s ? e => !s.has("channel:".concat(e.id)) : void 0,
                        boosters: l
                    })
                }
                queryApplications(e, t) {
                    return this._include(A.AutocompleterResultTypes.APPLICATION) ? y.default.queryApplications({
                        query: e,
                        limit: t,
                        fuzzy: !0
                    }) : []
                }
                queryLink(e, t) {
                    let s;
                    if (!this._include(A.AutocompleterResultTypes.LINK)) return [];
                    let l = r.sanitizeUrl(e);
                    try {
                        s = new URL(l)
                    } catch (e) {
                        return []
                    }
                    let {
                        pathname: i,
                        hostname: u = "",
                        host: n
                    } = s, a = C.default.isDiscordHostname(u) || window.location.host === n;
                    return null !== i && a && C.default.isAppRoute(i) ? [{
                        type: A.AutocompleterResultTypes.LINK,
                        record: d.default.fromPath(i),
                        score: 1
                    }] : []
                }
                constructor(e, t, s = 100, l = U) {
                    this.query = "", this.options = U, this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = [], this._userBlacklist = null, this.parseUserResults = e => {
                        let {
                            results: t
                        } = e;
                        if (this._include(A.AutocompleterResultTypes.USER)) {
                            for (let {
                                    id: e,
                                    score: s,
                                    comparator: l
                                }
                                of(this._userResults = [], t)) {
                                let t = R.default.getUser(e);
                                null != t && this._userResults.push({
                                    type: A.AutocompleterResultTypes.USER,
                                    record: t,
                                    score: function() {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                            t = arguments.length > 1 ? arguments[1] : void 0;
                                        return 1e3 * e * (null != t ? t : 1)
                                    }(s),
                                    comparator: null != l ? l : void 0
                                })
                            }
                            this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults()
                        }
                    }, this.updateAllResults = () => {
                        clearTimeout(this._asyncTimeout), this.results = u([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults]).uniqBy(e => "".concat(e.type, "-").concat(e.record.id)).sort(T.default).value(), this.onResultsChange(this.results, this.query)
                    }, this.onResultsChange = e, this.setOptions(l, !0), this._limit = s, this.createSearchContext(), this.setResultTypes(t)
                }
            }
        },
        447909: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SearchContext: function() {
                    return T
                },
                default: function() {
                    return m
                }
            }), s("424973"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("222007"), s("70102"), s("854508"), s("881410");
            var l, i, u = s("917351"),
                n = s.n(u),
                r = s("748820"),
                a = s("689988"),
                o = s("233069"),
                h = s("42203"),
                d = s("26989"),
                c = s("27618"),
                p = s("697218"),
                _ = s("449008"),
                f = s("299039"),
                R = s("158998");

            function y(e) {
                if (null == e || c.default.isBlocked(e.id)) return null;
                let t = {
                    id: e.id,
                    username: "0" !== e.discriminator ? "".concat(e.username, "#").concat(e.discriminator) : e.username
                };
                return null != R.default.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), c.default.isFriend(e.id) && (t.isFriend = !0, t.friendNickname = c.default.getNickname(e.id)), t
            }

            function E(e, t, s) {
                null != e && (e[t] = null != s && "" !== s ? s : null)
            }

            function C(e) {
                let t = [];
                if (null == e || !(0, o.isPrivate)(e.type)) return t;
                let {
                    recipients: s = []
                } = e;
                return s.forEach(s => {
                    let l = y(p.default.getUser(s));
                    null != e && E(l, e.id), t.push(l)
                }), t
            }

            function g(e, t) {
                let s = [];
                return e.forEach(e => {
                    let l = y(e.user);
                    null != l && (E(l, t, e.nick), s.push(l))
                }), s
            }(i = l || (l = {})).UPDATE_USERS = "UPDATE_USERS", i.USER_RESULTS = "USER_RESULTS", i.QUERY_SET = "QUERY_SET", i.QUERY_CLEAR = "QUERY_CLEAR";
            class T {
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
                        boosters: null != l ? l : {},
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
                constructor(e, t, s = 10) {
                    this.handleMessages = e => {
                        let t = e.data;
                        null != t && "USER_RESULTS" === t.type && t.uuid === this._uuid && (!1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery())
                    }, this._worker = e, this._uuid = (0, r.v4)(), this._callback = t, this._limit = s, this._currentQuery = null, this._nextQuery = null, this._subscribed = !1, this.subscribe()
                }
            }
            class A extends a.default {
                _initialize() {
                    this.rebootWebworker()
                }
                _terminate() {
                    null != this._worker && (this._worker.terminate(), this._worker = null)
                }
                rebootWebworker() {
                    null != this._worker && (this._worker.terminate(), this._worker = null), this._worker = new Worker(new URL(s.p + s.u("76730"), s.b))
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
                            let t = y(e),
                                s = {
                                    [t.id]: t
                                };
                            Object.values(p.default.getUsers()).forEach(e => {
                                s[e.id] = y(e)
                            });
                            let l = d.default.getMutableAllGuildsAndMembers();
                            for (let e in l)
                                for (let t in l[e]) {
                                    var i, u;
                                    let n = s[t],
                                        r = null !== (u = null === (i = l[e][t]) || void 0 === i ? void 0 : i.nick) && void 0 !== u ? u : R.default.getGlobalName(n);
                                    null != n && (n[e] = null != r && "" !== r ? r : null)
                                }
                            this.updateUsers(Object.values(s))
                        }, 3e3)
                    }, this._handleConnectionOpenSupplemental = e => {
                        let {
                            guilds: t
                        } = e;
                        setTimeout(() => {
                            let e = n.flatMap(t, e => g(e.members, e.id));
                            this.updateUsers(e)
                        }, 3e3)
                    }, this._handleOverlayInitialize = e => {
                        let {
                            users: t,
                            guildMembers: s
                        } = e, l = new Map;
                        for (let e of t) l.set(e.id, y(e));
                        let i = f.default.keys(s);
                        for (let e of i) {
                            let t = s[e];
                            if (null == t) continue;
                            let i = f.default.keys(t);
                            for (let s of i) {
                                let i = l.get(s),
                                    u = t[s];
                                null != i && null != u && null != u.nick && (E(i, e, u.nick), l.set(s, i))
                            }
                        }
                        this.updateUsers(Array.from(l.values())), l.clear()
                    }, this._handleCurrentUserUpdate = e => {
                        let {
                            user: t
                        } = e, s = y(t);
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
                        } = e, i = y(s);
                        null != i && (E(i, t, l), this.updateUsers([i]))
                    }, this._handlePassiveUpdateV1 = e => {
                        null != e.members && this.updateUsers(g(e.members, e.guildId))
                    }, this._handleRelationshipAdd = e => {
                        let t = y(e.relationship.user);
                        this.updateUsers([t])
                    }, this._handleRelationshipUpdate = e => {
                        let t = y(p.default.getUser(e.relationship.id));
                        this.updateUsers([t])
                    }, this._handleRelationshipRemove = e => {
                        let t = y(p.default.getUser(e.relationship.id));
                        this.updateUsers([t])
                    }, this._handleDMCreate = e => {
                        let {
                            channel: {
                                id: t
                            }
                        } = e, s = C(h.default.getChannel(t));
                        if (0 === s.length) return;
                        let l = y(p.default.getCurrentUser());
                        E(l, t), s.push(l), this.updateUsers(s)
                    }, this._handleDMUpdates = e => {
                        let {
                            channels: t
                        } = e;
                        for (let e of t) {
                            let t = C(h.default.getChannel(e.id));
                            if (0 === t.length) continue;
                            let s = y(p.default.getCurrentUser());
                            E(s, e.id), t.push(s), this.updateUsers(t)
                        }
                    }, this._handleRecipientChanges = e => {
                        let {
                            channelId: t,
                            user: s,
                            isMember: l
                        } = e;
                        if (!l) return;
                        let i = y(s);
                        E(i, t), this.updateUsers([i])
                    }
                }
            }
            var m = new A
        },
        108964: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                createHeaderResult: function() {
                    return i
                }
            });
            var l = s("375822");

            function i(e) {
                return {
                    type: l.AutocompleterResultTypes.HEADER,
                    record: new l.HeaderRecord(e),
                    score: 0
                }
            }
        },
        681643: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var l = s("679653"),
                i = s("42203"),
                u = s("27618"),
                n = s("697218"),
                r = s("375822"),
                a = s("49111");

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
        940782: function(e, t, s) {
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
                        if ((a += t === l.FindResultDirections.UP ? -1 : 1) < 0 || a >= n) return e(t, a < 0 ? n : -1, i, r);
                        let o = i[a];
                        return o.type === l.AutocompleterResultTypes.HEADER ? e(t, a, i, r) : a
                    }
                }
            });
            var l = s("375822")
        },
        123225: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                createHeaderResult: function() {
                    return u.createHeaderResult
                },
                findNextSelectedResult: function() {
                    return n.default
                },
                default: function() {
                    return r
                }
            });
            var l = s("337575"),
                i = s("375822");
            s.es(i, t);
            var u = s("108964"),
                n = s("940782");
            s("195547");
            var r = l.default
        },
        116460: function(e, t, s) {
            "use strict";
            let l;
            s.r(t), s.d(t, {
                default: function() {
                    return Y
                }
            }), s("424973"), s("222007"), s("843762"), s("808653");
            var i = s("917351"),
                u = s.n(i),
                n = s("446674"),
                r = s("95410"),
                a = s("913144"),
                o = s("123225"),
                h = s("681643"),
                d = s("934306"),
                c = s("615387"),
                p = s("401690"),
                _ = s("161778"),
                f = s("271938"),
                R = s("42203"),
                y = s("474643"),
                E = s("923959"),
                C = s("26989"),
                g = s("305961"),
                T = s("957255"),
                A = s("660478"),
                m = s("18494"),
                U = s("162771"),
                S = s("282109"),
                I = s("25292"),
                N = s("449008"),
                L = s("49111"),
                v = s("782340");
            let D = "seenQSTutorial",
                M = [o.AutocompleterResultTypes.USER, o.AutocompleterResultTypes.GROUP_DM, o.AutocompleterResultTypes.TEXT_CHANNEL, o.AutocompleterResultTypes.GUILD, o.AutocompleterResultTypes.APPLICATION, o.AutocompleterResultTypes.LINK],
                O = 0,
                H = !1,
                b = !1,
                k = null,
                G = [],
                w = null,
                P = 0,
                Q = [],
                F = [];

            function q() {
                b = g.default.getGuildCount() >= 3 || u.size(R.default.getMutablePrivateChannels()) >= 20, Q = []
            }

            function x(e) {
                let t = (0, h.default)(e);
                return null == t || null != k && k !== t.type ? null : t
            }

            function W(e) {
                var t;
                let {
                    query: s,
                    queryMode: i
                } = e, u = (0, d.isSplitMessagesTabAndOnMessagesTab)() ? void 0 : null !== (t = U.default.getGuildId()) && void 0 !== t ? t : void 0, n = new Set(["user:".concat(f.default.getId())]);
                null != u && n.add("guild:".concat(u)), l = null != l ? l : new o.default(z, M, null != i ? 100 : 5, {
                    frecencyBoosters: !0,
                    blacklist: n
                }), w = null, P = s.length, k = i, l.search(s)
            }

            function z(e, t) {
                ! function(e, t) {
                    if (e.length !== t.length) return !1;
                    for (let s = 0; s < e.length; s++) {
                        let l = e[s],
                            i = t[s];
                        if (l.record.id !== i.record.id) return !1
                    }
                    return !0
                }(e = "" === (t = t.trim()).trim() ? function() {
                    var e, t;
                    let s = null !== (e = U.default.getGuildId()) && void 0 !== e ? e : void 0,
                        l = null !== (t = m.default.getChannelId()) && void 0 !== t ? t : void 0;
                    switch (k) {
                        case o.AutocompleterResultTypes.USER: {
                            let e = f.default.getId();
                            return I.default.getRecentlyTalked(l, 100).filter(t => {
                                let {
                                    record: s
                                } = t;
                                return s.id !== e
                            })
                        }
                        case o.AutocompleterResultTypes.APPLICATION:
                            return I.default.queryApplications({
                                query: "",
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.GUILD:
                            return I.default.queryGuilds({
                                query: "",
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.TEXT_CHANNEL:
                            return I.default.queryChannels({
                                query: "",
                                guildId: U.default.getGuildId(),
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.VOICE_CHANNEL:
                            return I.default.queryChannels({
                                query: "",
                                guildId: U.default.getGuildId(),
                                limit: 100,
                                fuzzy: !0,
                                filter: () => !0,
                                type: E.GUILD_VOCAL_CHANNELS_KEY
                            })
                    }
                    let i = [],
                        n = [];
                    for (let e = 1; e < F.length; e += 1) {
                        let t = x(F[e]);
                        if (null != t)(t.type !== o.AutocompleterResultTypes.TEXT_CHANNEL && t.type !== o.AutocompleterResultTypes.VOICE_CHANNEL || T.default.can(L.Permissions.VIEW_CHANNEL, t.record)) && n.push(t)
                    }
                    n.length > 0 && i.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_LAST_CHANNEL), ...n);
                    let r = function(e) {
                        let t = [];
                        return y.default.getRecentlyEditedDrafts(y.DraftType.ChannelMessage).forEach(s => {
                            let {
                                channelId: l
                            } = s;
                            if (e(l)) return;
                            let i = x(l);
                            null != i && t.push(i)
                        }), t
                    }(e => e === l || F.includes(e));
                    r.length > 0 && i.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_DRAFTS), ...r);
                    let a = A.default.getMentionChannelIds().filter(e => e !== l && !F.includes(e)).map(e => x(e)).filter(N.isNotNullish).reverse();
                    if (a.length > 0 && (i.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_MENTIONS)), i = i.concat(a)), null != s) {
                        let e = E.default.getSelectableChannelIds(s).filter(e => {
                            let t = R.default.getChannel(e);
                            return !(null == t || e === l || F.includes(e) || S.default.isChannelMuted(t.guild_id, e) || null != t.parent_id && S.default.isChannelMuted(t.guild_id, t.parent_id)) && (0, c.getHasImportantUnread)(t)
                        }).map(e => x(e)).filter(e => e);
                        Object.values(p.default.getActiveJoinedUnreadThreadsForGuild(s)).forEach(t => {
                            for (let s in t) {
                                let t = x(s);
                                null != t && e.push(t)
                            }
                        }), e.length > 0 && (i.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), i = i.concat(e))
                    }
                    return u(i).uniqBy(e => e.record.id).value()
                }() : e, Q) && (Q = e, ! function(e, t) {
                    switch (k) {
                        case o.AutocompleterResultTypes.USER: {
                            let t = g.default.getGuild(U.default.getGuildId());
                            e.unshift((0, o.createHeaderResult)(null != t ? v.default.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
                                name: t.name
                            }) : v.default.Messages.QUICKSWITCHER_QUERYMODE_USERS)), G = e;
                            break
                        }
                        case o.AutocompleterResultTypes.TEXT_CHANNEL:
                            e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), G = e;
                            break;
                        case o.AutocompleterResultTypes.VOICE_CHANNEL:
                            e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), G = e;
                            break;
                        case o.AutocompleterResultTypes.GUILD:
                            e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), G = e;
                            break;
                        case o.AutocompleterResultTypes.APPLICATION:
                            e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), G = e;
                            break;
                        default:
                            G = e
                    }
                    if (t !== w) w = t, P = Math.max(t.length, P), O = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, -1, G);
                    else {
                        let e = G[O];
                        null != e && e.type === o.AutocompleterResultTypes.HEADER && (O = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, O, G))
                    }
                    B.emitChange()
                }(e, t))
            }

            function K() {
                w = null, P = 0, Q = [], null != l && (l.destroy(), l = null)
            }
            class V extends n.default.PersistedStore {
                initialize(e) {
                    var t;
                    this.waitFor(C.default, g.default, R.default), this.syncWith([_.default], () => !0), H = r.default.get(D) || !1, F = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
                }
                getState() {
                    return {
                        channelHistory: F
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
                    return F
                }
                getProps() {
                    return {
                        theme: _.default.theme,
                        query: null != l ? l.query : "",
                        queryMode: k,
                        results: G,
                        selectedIndex: O,
                        seenTutorial: H,
                        maxQueryLength: P
                    }
                }
            }
            V.displayName = "QuickSwitcherStore", V.persistKey = "QuickSwitcherStore";
            let B = new V(a.default, {
                CONNECTION_OPEN: q,
                CONNECTION_OPEN_SUPPLEMENTAL: q,
                QUICKSWITCHER_SHOW: W,
                SHOW_ACTION_SHEET_QUICK_SWITCHER: W,
                QUICKSWITCHER_HIDE: K,
                OVERLAY_SET_INPUT_LOCKED: K,
                HIDE_ACTION_SHEET_QUICK_SWITCHER: K,
                QUICKSWITCHER_SEARCH: function(e) {
                    var t, s;
                    let {
                        query: i,
                        queryMode: u
                    } = e;
                    if (null == l) return !1;
                    let n = null !== (t = U.default.getGuildId()) && void 0 !== t ? t : null;
                    if (k !== u) {
                        l.setResultTypes(null != u ? [u] : M), l.setLimit(null != u ? 100 : 5);
                        let e = null !== (s = U.default.getGuildId()) && void 0 !== s ? s : void 0;
                        u === o.AutocompleterResultTypes.USER && null != e ? l.setOptions({
                            userFilters: {
                                guild: e,
                                friends: !0
                            }
                        }, !0) : u === o.AutocompleterResultTypes.VOICE_CHANNEL ? l.setOptions({
                            voiceChannelGuildFilter: null
                        }, !0) : l.setOptions({
                            userFilters: null,
                            voiceChannelGuildFilter: void 0
                        }, !0)
                    }
                    k = u, l.search(i, k === o.AutocompleterResultTypes.USER ? n : void 0)
                },
                QUICKSWITCHER_SELECT: function(e) {
                    O = e.selectedIndex
                },
                QUICKSWITCHER_SWITCH_TO: function() {
                    if (H) return !1;
                    H = !0, r.default.set(D, !0)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t) return !1;
                    (F = F.filter(e => e !== t)).unshift(t), F.length > 4 && (F.length = 4)
                }
            });
            var Y = B
        },
        615387: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getHasImportantUnread: function() {
                    return n
                }
            }), s("446674");
            var l = s("660478"),
                i = s("282109"),
                u = s("133335");

            function n(e) {
                return l.default.hasUnread(e.id) && i.default.resolveUnreadSetting(e) === u.UnreadSetting.ALL_MESSAGES
            }
        },
        741347: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var l = s("666038");
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
        319781: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MAX_NUM_SELECTED_ITEMS: function() {
                    return f
                },
                default: function() {
                    return m
                }
            }), s("424973");
            var l = s("917351"),
                i = s.n(l),
                u = s("446674"),
                n = s("913144"),
                r = s("80507"),
                a = s("374363"),
                o = s("42203"),
                h = s("305961"),
                d = s("18494"),
                c = s("162771"),
                p = s("49111"),
                _ = s("397336");
            let f = 100,
                R = new r.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
                    },
                    lookupKey: e => {
                        var t, s;
                        return null !== (s = null !== (t = h.default.getGuild(e)) && void 0 !== t ? t : o.default.getChannel(e)) && void 0 !== s ? s : o.default.getChannel(o.default.getDMFromUserId(e))
                    },
                    afterCompute: () => {},
                    numFrequentlyItems: f,
                    maxSamples: 10
                }),
                y = null,
                E = null;

            function C(e) {
                let {
                    guildId: t,
                    channelId: s
                } = e, l = !1;
                return s !== y && (y = null != s ? s : null, null != s && p.ID_REGEX.test(s) && (l = !0, R.track(s), T.pendingUsages.push({
                    key: s,
                    timestamp: Date.now()
                }))), t !== E && (E = null != t ? t : null, null != t && p.ID_REGEX.test(t) && (l = !0, R.track(t), T.pendingUsages.push({
                    key: t,
                    timestamp: Date.now()
                }))), l
            }

            function g() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
                if (null == t) return !1;
                R.overwriteHistory(i.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), T.pendingUsages)
            }
            let T = {
                pendingUsages: []
            };
            class A extends u.default.PersistedStore {
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
                    var t;
                    return null !== (t = R.getFrecency(e)) && void 0 !== t ? t : 0
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
            A.displayName = "FrecencyStore", A.persistKey = "FrecencyStore";
            var m = new A(n.default, {
                CHANNEL_SELECT: C,
                VOICE_CHANNEL_SELECT: C,
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
        843823: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            }), s("222007");
            var l = s("446674"),
                i = s("913144"),
                u = s("27618");
            let n = !1,
                r = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                a = Object.freeze({
                    userAffinitiesMap: new Map,
                    affinityUserIds: new Set
                }),
                o = {
                    ...r
                },
                h = {
                    ...a
                };

            function d() {
                let e = new Map(o.userAffinities.filter(e => {
                        let {
                            user_id: t
                        } = e;
                        return !u.default.isBlocked(t)
                    }).map(e => [e.user_id, e])),
                    t = new Set(e.keys());
                h = {
                    userAffinitiesMap: e,
                    affinityUserIds: t
                }
            }
            class c extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (o.userAffinities = e.userAffinities, o.lastFetched = e.lastFetched, d()), this.syncWith([u.default], d)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return n
                }
                getState() {
                    return o
                }
                getUserAffinities() {
                    return o.userAffinities
                }
                getUserAffinity(e) {
                    return h.userAffinitiesMap.get(e)
                }
                getUserAffinitiesUserIds() {
                    return h.affinityUserIds
                }
            }
            c.displayName = "UserAffinitiesStore", c.persistKey = "UserAffinitiesStore", c.migrations = [e => null];
            var p = new c(i.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: s
                    } = e;
                    o.userAffinities = null !== (t = s.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), d(), n = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    n = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    n = !1
                },
                LOGOUT: function() {
                    o = {
                        ...r
                    }, h = {
                        ...a
                    }
                }
            })
        }
    }
]);
//# sourceMappingURL=83257.49b66b6b236e1a8153f9.js.map