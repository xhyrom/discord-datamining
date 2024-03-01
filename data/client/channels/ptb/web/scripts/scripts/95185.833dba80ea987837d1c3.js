(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["95185"], {
        337575: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            }), s("808653"), s("222007"), s("781738"), s("506083"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("424973");
            var l, u = s("917351"),
                i = s.n(u),
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
                m = s("375822"),
                A = s("49111");
            let U = Object.freeze({});

            function I(e, t) {
                var s, l;
                if (!t.frecencyBoosters) return {};
                let u = p.default.getFrequentlyWithoutFetchingLatest(),
                    i = u.reduce((e, t) => {
                        let {
                            id: s
                        } = t, l = p.default.getScoreWithoutFetchingLatest(s);
                        return l > e ? l : e
                    }, 0),
                    n = [];
                switch (e) {
                    case m.AutocompleterResultTypes.GUILD:
                        n = u.filter(e => e instanceof h.default);
                        break;
                    case m.AutocompleterResultTypes.USER:
                        n = u.filter(e => e instanceof o.ChannelRecordBase && e.type === A.ChannelTypes.DM);
                        break;
                    case m.AutocompleterResultTypes.GROUP_DM:
                        n = u.filter(e => e instanceof o.ChannelRecordBase && e.isMultiUserDM());
                        break;
                    case m.AutocompleterResultTypes.TEXT_CHANNEL:
                        n = u.filter(e => e instanceof o.ChannelRecordBase && (0, o.isGuildSelectableChannelType)(e.type));
                        break;
                    case m.AutocompleterResultTypes.VOICE_CHANNEL:
                        n = u.filter(e => e instanceof o.ChannelRecordBase && e.isGuildVocal())
                }
                let r = {};
                for (let t of n) {
                    let {
                        id: s
                    } = t, l = p.default.getScoreWithoutFetchingLatest(s);
                    if (e === m.AutocompleterResultTypes.USER && t instanceof o.PrivateChannelRecord) {
                        if (t.type === A.ChannelTypes.DM) r[s = t.getRecipientId()] = 1 + l / i;
                        else if (t.type === A.ChannelTypes.GROUP_DM) {
                            let e = t.recipients.length;
                            for (let s of t.recipients) r[s] = 1 + l / i * (1 / e)
                        }
                    } else r[s] = 1 + l / i
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
                    this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(m.AutocompleterResultTypes.USER) ? this._userResults : [], this._groupDMResults = this._include(m.AutocompleterResultTypes.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(m.AutocompleterResultTypes.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(m.AutocompleterResultTypes.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(m.AutocompleterResultTypes.GUILD) ? this._guildResults : [], this._applicationResults = this._include(m.AutocompleterResultTypes.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(m.AutocompleterResultTypes.LINK) ? this._linkResults : []
                }
                _include(e) {
                    return null == this.resultTypes || this.resultTypes.has(e)
                }
                _isAsyncSearch() {
                    return this._include(m.AutocompleterResultTypes.USER)
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
                    if (!this._include(m.AutocompleterResultTypes.TEXT_CHANNEL)) return [];
                    let s = I(m.AutocompleterResultTypes.TEXT_CHANNEL, this.options),
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
                    if (!this._include(m.AutocompleterResultTypes.VOICE_CHANNEL)) return [];
                    let {
                        voiceChannelGuildFilter: s
                    } = this.options, l = I(m.AutocompleterResultTypes.VOICE_CHANNEL, this.options);
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
                    if (!this._include(m.AutocompleterResultTypes.GUILD)) return [];
                    let s = I(m.AutocompleterResultTypes.GUILD, this.options),
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
                    if (null == l || !this._include(m.AutocompleterResultTypes.USER)) return;
                    let {
                        userFilters: u
                    } = this.options;
                    void 0 !== t && E.default.requestMembers(t, e, 100), l.setLimit(s), l.setQuery(e, u, this._userBlacklist, I(m.AutocompleterResultTypes.USER, this.options))
                }
                queryGroupDMs(e, t) {
                    if (!this._include(m.AutocompleterResultTypes.GROUP_DM)) return [];
                    let {
                        blacklist: s
                    } = this.options, l = I(m.AutocompleterResultTypes.GROUP_DM, this.options);
                    return y.default.queryGroupDMs({
                        query: e,
                        limit: t,
                        fuzzy: !0,
                        filter: null != s ? e => !s.has("channel:".concat(e.id)) : void 0,
                        boosters: l
                    })
                }
                queryApplications(e, t) {
                    return this._include(m.AutocompleterResultTypes.APPLICATION) ? y.default.queryApplications({
                        query: e,
                        limit: t,
                        fuzzy: !0
                    }) : []
                }
                queryLink(e, t) {
                    let s;
                    if (!this._include(m.AutocompleterResultTypes.LINK)) return [];
                    let l = r.sanitizeUrl(e);
                    try {
                        s = new URL(l)
                    } catch (e) {
                        return []
                    }
                    let {
                        pathname: u,
                        hostname: i = "",
                        host: n
                    } = s, a = C.default.isDiscordHostname(i) || window.location.host === n;
                    return null !== u && a && C.default.isAppRoute(u) ? [{
                        type: m.AutocompleterResultTypes.LINK,
                        record: d.default.fromPath(u),
                        score: 1
                    }] : []
                }
                constructor(e, t, s = 100, l = U) {
                    this.query = "", this.options = U, this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = [], this._userBlacklist = null, this.parseUserResults = e => {
                        let {
                            results: t
                        } = e;
                        if (this._include(m.AutocompleterResultTypes.USER)) {
                            for (let {
                                    id: e,
                                    score: s,
                                    comparator: l
                                }
                                of(this._userResults = [], t)) {
                                let t = R.default.getUser(e);
                                null != t && this._userResults.push({
                                    type: m.AutocompleterResultTypes.USER,
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
                        clearTimeout(this._asyncTimeout), this.results = i([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults]).uniqBy(e => "".concat(e.type, "-").concat(e.record.id)).sort(T.default).value(), this.onResultsChange(this.results, this.query)
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
                    return A
                }
            }), s("424973"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("222007"), s("70102"), s("854508"), s("881410");
            var l, u, i = s("917351"),
                n = s.n(i),
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
            }(u = l || (l = {})).UPDATE_USERS = "UPDATE_USERS", u.USER_RESULTS = "USER_RESULTS", u.QUERY_SET = "QUERY_SET", u.QUERY_CLEAR = "QUERY_CLEAR";
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
            class m extends a.default {
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
                                    var u, i;
                                    let n = s[t],
                                        r = null !== (i = null === (u = l[e][t]) || void 0 === u ? void 0 : u.nick) && void 0 !== i ? i : R.default.getGlobalName(n);
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
                        let u = f.default.keys(s);
                        for (let e of u) {
                            let t = s[e];
                            if (null == t) continue;
                            let u = f.default.keys(t);
                            for (let s of u) {
                                let u = l.get(s),
                                    i = t[s];
                                null != u && null != i && null != i.nick && (E(u, e, i.nick), l.set(s, u))
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
                        } = e, u = y(s);
                        null != u && (E(u, t, l), this.updateUsers([u]))
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
                        let u = y(s);
                        E(u, t), this.updateUsers([u])
                    }
                }
            }
            var A = new m
        },
        108964: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                createHeaderResult: function() {
                    return u
                }
            });
            var l = s("375822");

            function u(e) {
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
                u = s("42203"),
                i = s("27618"),
                n = s("697218"),
                r = s("375822"),
                a = s("49111");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.default,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
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
                    return function e(t, s, u, i) {
                        let {
                            length: n
                        } = u, r = i, a = s;
                        if (0 === n) return 0;
                        if (null == r) r = a;
                        else if (r === a) return a;
                        if ((a += t === l.FindResultDirections.UP ? -1 : 1) < 0 || a >= n) return e(t, a < 0 ? n : -1, u, r);
                        let o = u[a];
                        return o.type === l.AutocompleterResultTypes.HEADER ? e(t, a, u, r) : a
                    }
                }
            });
            var l = s("375822")
        },
        123225: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                createHeaderResult: function() {
                    return i.createHeaderResult
                },
                findNextSelectedResult: function() {
                    return n.default
                },
                default: function() {
                    return r
                }
            });
            var l = s("337575"),
                u = s("375822");
            s.es(u, t);
            var i = s("108964"),
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
            var u = s("917351"),
                i = s.n(u),
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
                m = s("660478"),
                A = s("18494"),
                U = s("162771"),
                I = s("282109"),
                S = s("25292"),
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
                P = null,
                Q = 0,
                w = [],
                q = [];

            function x() {
                b = g.default.getGuildCount() >= 3 || i.size(R.default.getMutablePrivateChannels()) >= 20, w = []
            }

            function W(e) {
                let t = (0, h.default)(e);
                return null == t || null != k && k !== t.type ? null : t
            }

            function F(e) {
                var t;
                let {
                    query: s,
                    queryMode: u
                } = e, i = (0, d.isSplitMessagesTabAndOnMessagesTab)() ? void 0 : null !== (t = U.default.getGuildId()) && void 0 !== t ? t : void 0, n = new Set(["user:".concat(f.default.getId())]);
                null != i && n.add("guild:".concat(i)), l = null != l ? l : new o.default(z, M, null != u ? 100 : 5, {
                    frecencyBoosters: !0,
                    blacklist: n
                }), P = null, Q = s.length, k = u, l.search(s)
            }

            function z(e, t) {
                ! function(e, t) {
                    if (e.length !== t.length) return !1;
                    for (let s = 0; s < e.length; s++) {
                        let l = e[s],
                            u = t[s];
                        if (l.record.id !== u.record.id) return !1
                    }
                    return !0
                }(e = "" === (t = t.trim()).trim() ? function() {
                    var e, t;
                    let s = null !== (e = U.default.getGuildId()) && void 0 !== e ? e : void 0,
                        l = null !== (t = A.default.getChannelId()) && void 0 !== t ? t : void 0;
                    switch (k) {
                        case o.AutocompleterResultTypes.USER: {
                            let e = f.default.getId();
                            return S.default.getRecentlyTalked(l, 100).filter(t => {
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
                                type: E.GUILD_VOCAL_CHANNELS_KEY
                            })
                    }
                    let u = [],
                        n = [];
                    for (let e = 1; e < q.length; e += 1) {
                        let t = W(q[e]);
                        if (null != t)(t.type !== o.AutocompleterResultTypes.TEXT_CHANNEL && t.type !== o.AutocompleterResultTypes.VOICE_CHANNEL || T.default.can(L.Permissions.VIEW_CHANNEL, t.record)) && n.push(t)
                    }
                    n.length > 0 && u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_LAST_CHANNEL), ...n);
                    let r = function(e) {
                        let t = [];
                        return y.default.getRecentlyEditedDrafts(y.DraftType.ChannelMessage).forEach(s => {
                            let {
                                channelId: l
                            } = s;
                            if (e(l)) return;
                            let u = W(l);
                            null != u && t.push(u)
                        }), t
                    }(e => e === l || q.includes(e));
                    r.length > 0 && u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_DRAFTS), ...r);
                    let a = m.default.getMentionChannelIds().filter(e => e !== l && !q.includes(e)).map(e => W(e)).filter(N.isNotNullish).reverse();
                    if (a.length > 0 && (u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_MENTIONS)), u = u.concat(a)), null != s) {
                        let e = E.default.getSelectableChannelIds(s).filter(e => {
                            let t = R.default.getChannel(e);
                            return !(null == t || e === l || q.includes(e) || I.default.isChannelMuted(t.guild_id, e) || null != t.parent_id && I.default.isChannelMuted(t.guild_id, t.parent_id)) && (0, c.getHasImportantUnread)(t)
                        }).map(e => W(e)).filter(e => e);
                        Object.values(p.default.getActiveJoinedUnreadThreadsForGuild(s)).forEach(t => {
                            for (let s in t) {
                                let t = W(s);
                                null != t && e.push(t)
                            }
                        }), e.length > 0 && (u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), u = u.concat(e))
                    }
                    return i(u).uniqBy(e => e.record.id).value()
                }() : e, w) && (w = e, ! function(e, t) {
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
                    if (t !== P) P = t, Q = Math.max(t.length, Q), O = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, -1, G);
                    else {
                        let e = G[O];
                        null != e && e.type === o.AutocompleterResultTypes.HEADER && (O = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, O, G))
                    }
                    B.emitChange()
                }(e, t))
            }

            function K() {
                P = null, Q = 0, w = [], null != l && (l.destroy(), l = null)
            }
            class V extends n.default.PersistedStore {
                initialize(e) {
                    var t;
                    this.waitFor(C.default, g.default, R.default), this.syncWith([_.default], () => !0), H = r.default.get(D) || !1, q = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
                }
                getState() {
                    return {
                        channelHistory: q
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
                    return q
                }
                getProps() {
                    return {
                        theme: _.default.theme,
                        query: null != l ? l.query : "",
                        queryMode: k,
                        results: G,
                        selectedIndex: O,
                        seenTutorial: H,
                        maxQueryLength: Q
                    }
                }
            }
            V.displayName = "QuickSwitcherStore", V.persistKey = "QuickSwitcherStore";
            let B = new V(a.default, {
                CONNECTION_OPEN: x,
                CONNECTION_OPEN_SUPPLEMENTAL: x,
                QUICKSWITCHER_SHOW: F,
                SHOW_ACTION_SHEET_QUICK_SWITCHER: F,
                QUICKSWITCHER_HIDE: K,
                OVERLAY_SET_INPUT_LOCKED: K,
                HIDE_ACTION_SHEET_QUICK_SWITCHER: K,
                QUICKSWITCHER_SEARCH: function(e) {
                    var t, s;
                    let {
                        query: u,
                        queryMode: i
                    } = e;
                    if (null == l) return !1;
                    let n = null !== (t = U.default.getGuildId()) && void 0 !== t ? t : null;
                    if (k !== i) {
                        l.setResultTypes(null != i ? [i] : M), l.setLimit(null != i ? 100 : 5);
                        let e = null !== (s = U.default.getGuildId()) && void 0 !== s ? s : void 0;
                        i === o.AutocompleterResultTypes.USER && null != e ? l.setOptions({
                            userFilters: {
                                guild: e,
                                friends: !0
                            }
                        }, !0) : i === o.AutocompleterResultTypes.VOICE_CHANNEL ? l.setOptions({
                            voiceChannelGuildFilter: null
                        }, !0) : l.setOptions({
                            userFilters: null,
                            voiceChannelGuildFilter: void 0
                        }, !0)
                    }
                    k = i, l.search(u, k === o.AutocompleterResultTypes.USER ? n : void 0)
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
                    (q = q.filter(e => e !== t)).unshift(t), q.length > 4 && (q.length = 4)
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
                u = s("282109"),
                i = s("133335");

            function n(e) {
                return l.default.hasUnread(e.id) && u.default.resolveUnreadSetting(e) === i.UnreadSetting.ALL_MESSAGES
            }
        },
        741347: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var l = s("666038");
            class u extends l.default {
                static fromPath(e) {
                    return new u({
                        id: e,
                        path: e
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.path = e.path
                }
            }
            var i = u
        },
        319781: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MAX_NUM_SELECTED_ITEMS: function() {
                    return f
                },
                default: function() {
                    return A
                }
            }), s("424973");
            var l = s("917351"),
                u = s.n(l),
                i = s("446674"),
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
                R.overwriteHistory(u.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), T.pendingUsages)
            }
            let T = {
                pendingUsages: []
            };
            class m extends i.default.PersistedStore {
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
            m.displayName = "FrecencyStore", m.persistKey = "FrecencyStore";
            var A = new m(n.default, {
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
        }
    }
]);
//# sourceMappingURL=95185.833dba80ea987837d1c3.js.map