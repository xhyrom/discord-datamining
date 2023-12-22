(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74970"], {
        428958: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return y
                }
            });
            var s = l("884691"),
                u = l("714617"),
                i = l.n(u),
                n = l("995008"),
                r = l.n(n),
                a = l("759843"),
                o = l("913144"),
                h = l("42203"),
                d = l("18494"),
                c = l("162771"),
                p = l("599110"),
                _ = l("716241"),
                f = l("939011");
            let R = (0, a.trackMaker)({
                analyticEventConfigs: p.AnalyticEventConfigs,
                dispatcher: o.default,
                TRACK_ACTION_NAME: "TRACK"
            });

            function y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableTrack: !1,
                        trackOnInitialLoad: !1
                    },
                    l = arguments.length > 2 ? arguments[2] : void 0,
                    u = s.useRef(),
                    n = s.useRef();
                s.useEffect(() => {
                    let s = !i(u.current, e);
                    s && (u.current = e);
                    let o = !i(n.current, l);
                    if (o && (n.current = l), !s && !o) return;
                    let y = {
                        ...e,
                        sequenceId: r("impression_")
                    };
                    return ! function(e) {
                        var t, l;
                        let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            {
                                name: u,
                                type: i,
                                properties: n
                            } = e;
                        if (e.type === a.ImpressionTypes.MODAL && null == e.name && (0, f.getImpressionStack)().some(e => {
                                var t;
                                return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
                            })) return;
                        (0, f.setCurrentImpression)(e);
                        let r = null !== (t = null == n ? void 0 : n.guild_id) && void 0 !== t ? t : c.default.getGuildId(),
                            o = null !== (l = null == n ? void 0 : n.channel_id) && void 0 !== l ? l : d.default.getChannelId(r),
                            y = (0, p.expandEventProperties)({
                                impression_type: i,
                                location: (0, f.getLocation)(),
                                ...(0, _.collectGuildAnalyticsMetadata)(r),
                                ...(0, _.collectChannelAnalyticsMetadata)(h.default.getChannel(o)),
                                ...n
                            });
                        if (s) {
                            (0, f.setDebugTrackedData)(null, null);
                            return
                        }
                        null != u && null != i && ((0, p.debugLogEvent)(u, y), R(u, y)), (0, f.setDebugTrackedData)(u, y)
                    }(y, t.disableTrack), () => {
                        null != y && (0, f.cleanupImpression)(y)
                    }
                }, t.trackOnInitialLoad ? [] : void 0)
            }
        },
        337575: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            }), l("808653"), l("222007"), l("781738"), l("506083"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660"), l("424973");
            var s, u = l("917351"),
                i = l.n(u),
                n = l("132710"),
                r = l.n(n),
                a = l("872173"),
                o = l("233069"),
                h = l("813006"),
                d = l("741347"),
                c = l("42203"),
                p = l("319781"),
                _ = l("923959"),
                f = l("27618"),
                R = l("697218"),
                y = l("25292"),
                E = l("651879"),
                C = l("253981"),
                g = l("447909"),
                T = l("195547"),
                m = l("375822"),
                A = l("49111");
            let U = Object.freeze({});

            function I(e, t) {
                var l, s;
                if (!t.frecencyBoosters) return {};
                let u = p.default.getFrequentlyWithoutFetchingLatest(),
                    i = u.reduce((e, t) => {
                        let {
                            id: l
                        } = t, s = p.default.getScoreWithoutFetchingLatest(l);
                        return s > e ? s : e
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
                        id: l
                    } = t, s = p.default.getScoreWithoutFetchingLatest(l);
                    if (e === m.AutocompleterResultTypes.USER && t instanceof o.PrivateChannelRecord) {
                        if (t.type === A.ChannelTypes.DM) r[l = t.getRecipientId()] = 1 + s / i;
                        else if (t.type === A.ChannelTypes.GROUP_DM) {
                            let e = t.recipients.length;
                            for (let l of t.recipients) r[l] = 1 + s / i * (1 / e)
                        }
                    } else r[l] = 1 + s / i
                }
                let a = f.default.getFriendIDs();
                for (let e of a) r[e] = (null !== (l = r[e]) && void 0 !== l ? l : 1) + .2;
                let d = c.default.getDMUserIds();
                for (let e of d) r[e] = (null !== (s = r[e]) && void 0 !== s ? s : 1) + .1;
                return r
            }
            s = class {
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
                    let l = this.options.frecencyBoosters ? a.FrecencyUserSettingsActionCreators.loadIfNecessary() : Promise.resolve();
                    l.finally(() => {
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
                    let l = I(m.AutocompleterResultTypes.TEXT_CHANNEL, this.options),
                        {
                            blacklist: s
                        } = this.options;
                    return y.default.queryChannels({
                        query: e,
                        guildId: null,
                        limit: t,
                        fuzzy: !0,
                        filter: null != s ? e => !s.has("channel:".concat(e.id)) : void 0,
                        boosters: l
                    })
                }
                queryVoiceChannels(e, t) {
                    if (!this._include(m.AutocompleterResultTypes.VOICE_CHANNEL)) return [];
                    let {
                        voiceChannelGuildFilter: l
                    } = this.options, s = I(m.AutocompleterResultTypes.VOICE_CHANNEL, this.options);
                    return y.default.queryChannels({
                        query: e,
                        guildId: l,
                        limit: t,
                        fuzzy: !0,
                        type: _.GUILD_VOCAL_CHANNELS_KEY,
                        boosters: s
                    })
                }
                queryGuilds(e, t) {
                    if (!this._include(m.AutocompleterResultTypes.GUILD)) return [];
                    let l = I(m.AutocompleterResultTypes.GUILD, this.options),
                        {
                            blacklist: s
                        } = this.options;
                    return y.default.queryGuilds({
                        query: e,
                        limit: t,
                        fuzzy: !0,
                        filter: null != s ? e => !s.has("guild:".concat(e.id)) : void 0,
                        boosters: l
                    })
                }
                queryUsers(e, t, l) {
                    let {
                        userSearchContext: s
                    } = this;
                    if (null == s || !this._include(m.AutocompleterResultTypes.USER)) return;
                    let {
                        userFilters: u
                    } = this.options;
                    void 0 !== t && E.default.requestMembers(t, e, 100), s.setLimit(l), s.setQuery(e, u, this._userBlacklist, I(m.AutocompleterResultTypes.USER, this.options))
                }
                queryGroupDMs(e, t) {
                    if (!this._include(m.AutocompleterResultTypes.GROUP_DM)) return [];
                    let {
                        blacklist: l
                    } = this.options, s = I(m.AutocompleterResultTypes.GROUP_DM, this.options);
                    return y.default.queryGroupDMs({
                        query: e,
                        limit: t,
                        fuzzy: !0,
                        filter: null != l ? e => !l.has("channel:".concat(e.id)) : void 0,
                        boosters: s
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
                    let l;
                    if (!this._include(m.AutocompleterResultTypes.LINK)) return [];
                    let s = r.sanitizeUrl(e);
                    try {
                        l = new URL(s)
                    } catch (e) {
                        return []
                    }
                    let {
                        pathname: u,
                        hostname: i = "",
                        host: n
                    } = l, a = C.default.isDiscordHostname(i) || window.location.host === n;
                    return null !== u && a && C.default.isAppRoute(u) ? [{
                        type: m.AutocompleterResultTypes.LINK,
                        record: d.default.fromPath(u),
                        score: 1
                    }] : []
                }
                constructor(e, t, l = 100, s = U) {
                    this.query = "", this.options = U, this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = [], this._userBlacklist = null, this.parseUserResults = e => {
                        let {
                            results: t
                        } = e;
                        if (this._include(m.AutocompleterResultTypes.USER)) {
                            for (let {
                                    id: e,
                                    score: l,
                                    comparator: s
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
                                    }(l),
                                    comparator: null != s ? s : void 0
                                })
                            }
                            this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults()
                        }
                    }, this.updateAllResults = () => {
                        clearTimeout(this._asyncTimeout), this.results = i([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults]).uniqBy(e => "".concat(e.type, "-").concat(e.record.id)).sort(T.default).value(), this.onResultsChange(this.results, this.query)
                    }, this.onResultsChange = e, this.setOptions(s, !0), this._limit = l, this.createSearchContext(), this.setResultTypes(t)
                }
            }
        },
        447909: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SearchContext: function() {
                    return g
                },
                default: function() {
                    return m
                }
            }), l("424973"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660"), l("222007"), l("70102"), l("854508"), l("881410");
            var s, u, i = l("917351"),
                n = l.n(i),
                r = l("748820"),
                a = l("689988"),
                o = l("233069"),
                h = l("42203"),
                d = l("26989"),
                c = l("27618"),
                p = l("697218"),
                _ = l("449008"),
                f = l("158998");

            function R(e) {
                if (null == e || c.default.isBlocked(e.id)) return null;
                let t = {
                    id: e.id,
                    username: "0" !== e.discriminator ? "".concat(e.username, "#").concat(e.discriminator) : e.username
                };
                return null != f.default.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), c.default.isFriend(e.id) && (t.isFriend = !0, t.friendNickname = c.default.getNickname(e.id)), t
            }

            function y(e, t, l) {
                null != e && (e[t] = null != l && "" !== l ? l : null)
            }

            function E(e) {
                let t = [];
                if (null == e || !(0, o.isPrivate)(e.type)) return t;
                let {
                    recipients: l = []
                } = e;
                return l.forEach(l => {
                    let s = R(p.default.getUser(l));
                    null != e && y(s, e.id), t.push(s)
                }), t
            }

            function C(e, t) {
                let l = [];
                return e.forEach(e => {
                    let s = R(e.user);
                    null != s && (y(s, t, e.nick), l.push(s))
                }), l
            }(u = s || (s = {})).UPDATE_USERS = "UPDATE_USERS", u.USER_RESULTS = "USER_RESULTS", u.QUERY_SET = "QUERY_SET", u.QUERY_CLEAR = "QUERY_CLEAR";
            class g {
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
                setQuery(e, t, l, s) {
                    null != e && (this._nextQuery = {
                        query: e,
                        filters: t,
                        blacklist: l,
                        boosters: null != s ? s : {},
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
                constructor(e, t, l = 10) {
                    this.handleMessages = e => {
                        let t = e.data;
                        null != t && "USER_RESULTS" === t.type && t.uuid === this._uuid && (!1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery())
                    }, this._worker = e, this._uuid = (0, r.v4)(), this._callback = t, this._limit = l, this._currentQuery = null, this._nextQuery = null, this._subscribed = !1, this.subscribe()
                }
            }
            class T extends a.default {
                _initialize() {
                    this.rebootWebworker()
                }
                _terminate() {
                    null != this._worker && (this._worker.terminate(), this._worker = null)
                }
                rebootWebworker() {
                    null != this._worker && (this._worker.terminate(), this._worker = null), this._worker = new Worker(new URL(l.p + l.u("76730"), l.b))
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
                        _worker: l
                    } = this;
                    if (null == l) throw Error("SearchContextManager: No webworker initialized");
                    return new g(l, e, t)
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
                            let t = R(e),
                                l = {
                                    [t.id]: t
                                };
                            Object.values(p.default.getUsers()).forEach(e => {
                                l[e.id] = R(e)
                            });
                            let s = d.default.getMutableAllGuildsAndMembers();
                            for (let e in s)
                                for (let t in s[e]) {
                                    var u, i;
                                    let n = l[t],
                                        r = null !== (i = null === (u = s[e][t]) || void 0 === u ? void 0 : u.nick) && void 0 !== i ? i : f.default.getGlobalName(n);
                                    null != n && (n[e] = null != r && "" !== r ? r : null)
                                }
                            this.updateUsers(Object.values(l))
                        }, 3e3)
                    }, this._handleConnectionOpenSupplemental = e => {
                        let {
                            guilds: t
                        } = e;
                        setTimeout(() => {
                            let e = n.flatMap(t, e => C(e.members, e.id));
                            this.updateUsers(e)
                        }, 3e3)
                    }, this._handleOverlayInitialize = e => {
                        let {
                            users: t,
                            guildMembers: l
                        } = e, s = new Map;
                        for (let e of t) s.set(e.id, R(e));
                        let u = Object.keys(l);
                        for (let e of u) {
                            let t = l[e];
                            if (null == t) continue;
                            let u = Object.keys(t);
                            for (let l of u) {
                                let u = s.get(l),
                                    i = t[l];
                                null != u && null != i && null != i.nick && (y(u, e, i.nick), s.set(l, u))
                            }
                        }
                        this.updateUsers(Array.from(s.values())), s.clear()
                    }, this._handleCurrentUserUpdate = e => {
                        let {
                            user: t
                        } = e, l = R(t);
                        null != l && this.updateUsers([l])
                    }, this._handleGuildCreate = e => {
                        let {
                            guild: t
                        } = e, {
                            members: l
                        } = t;
                        this.updateUsers(C(l, t.id))
                    }, this._handleGuildMembersChunk = e => {
                        let {
                            members: t,
                            guildId: l
                        } = e;
                        this.updateUsers(C(t, l))
                    }, this._handleGuildMemberUpdate = e => {
                        let {
                            guildId: t,
                            user: l,
                            nick: s
                        } = e, u = R(l);
                        null != u && (y(u, t, s), this.updateUsers([u]))
                    }, this._handlePassiveUpdateV1 = e => {
                        null != e.members && this.updateUsers(C(e.members, e.guildId))
                    }, this._handleRelationshipAdd = e => {
                        let t = R(e.relationship.user);
                        this.updateUsers([t])
                    }, this._handleRelationshipUpdate = e => {
                        let t = R(p.default.getUser(e.relationship.id));
                        this.updateUsers([t])
                    }, this._handleRelationshipRemove = e => {
                        let t = R(p.default.getUser(e.relationship.id));
                        this.updateUsers([t])
                    }, this._handleDMCreate = e => {
                        let {
                            channel: {
                                id: t
                            }
                        } = e, l = E(h.default.getChannel(t));
                        if (0 === l.length) return;
                        let s = R(p.default.getCurrentUser());
                        y(s, t), l.push(s), this.updateUsers(l)
                    }, this._handleDMUpdates = e => {
                        let {
                            channels: t
                        } = e;
                        for (let e of t) {
                            let t = E(h.default.getChannel(e.id));
                            if (0 === t.length) continue;
                            let l = R(p.default.getCurrentUser());
                            y(l, e.id), t.push(l), this.updateUsers(t)
                        }
                    }, this._handleRecipientChanges = e => {
                        let {
                            channelId: t,
                            user: l,
                            isMember: s
                        } = e;
                        if (!s) return;
                        let u = R(l);
                        y(u, t), this.updateUsers([u])
                    }
                }
            }
            var m = new T
        },
        108964: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                createHeaderResult: function() {
                    return u
                }
            });
            var s = l("375822");

            function u(e) {
                return {
                    type: s.AutocompleterResultTypes.HEADER,
                    record: new s.HeaderRecord(e),
                    score: 0
                }
            }
        },
        681643: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var s = l("679653"),
                u = l("42203"),
                i = l("27618"),
                n = l("697218"),
                r = l("375822"),
                a = l("49111");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.default,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    h = t.getChannel(e);
                if (null == h) return null;
                let d = (0, s.computeChannelName)(h, l, o);
                switch (h.type) {
                    case a.ChannelTypes.DM: {
                        let e = l.getUser(h.getRecipientId());
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
        940782: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return function e(t, l, u, i) {
                        let {
                            length: n
                        } = u, r = i, a = l;
                        if (0 === n) return 0;
                        if (null == r) r = a;
                        else if (r === a) return a;
                        if ((a += t === s.FindResultDirections.UP ? -1 : 1) < 0 || a >= n) return e(t, a < 0 ? n : -1, u, r);
                        let o = u[a];
                        return o.type === s.AutocompleterResultTypes.HEADER ? e(t, a, u, r) : a
                    }
                }
            });
            var s = l("375822")
        },
        123225: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
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
            var s = l("337575"),
                u = l("375822");
            l.es(u, t);
            var i = l("108964"),
                n = l("940782");
            l("195547");
            var r = s.default
        },
        116460: function(e, t, l) {
            "use strict";
            let s;
            l.r(t), l.d(t, {
                default: function() {
                    return Y
                }
            }), l("424973"), l("222007"), l("843762"), l("808653");
            var u = l("917351"),
                i = l.n(u),
                n = l("446674"),
                r = l("95410"),
                a = l("913144"),
                o = l("123225"),
                h = l("681643"),
                d = l("934306"),
                c = l("615387"),
                p = l("401690"),
                _ = l("161778"),
                f = l("271938"),
                R = l("42203"),
                y = l("474643"),
                E = l("923959"),
                C = l("26989"),
                g = l("305961"),
                T = l("957255"),
                m = l("660478"),
                A = l("18494"),
                U = l("162771"),
                I = l("282109"),
                N = l("25292"),
                S = l("449008"),
                v = l("49111"),
                L = l("782340");
            let D = "seenQSTutorial",
                M = [o.AutocompleterResultTypes.USER, o.AutocompleterResultTypes.GROUP_DM, o.AutocompleterResultTypes.TEXT_CHANNEL, o.AutocompleterResultTypes.GUILD, o.AutocompleterResultTypes.APPLICATION, o.AutocompleterResultTypes.LINK],
                O = 0,
                b = !1,
                H = !1,
                k = null,
                G = [],
                P = null,
                Q = 0,
                q = [],
                w = [];

            function x() {
                H = g.default.getGuildCount() >= 3 || i.size(R.default.getMutablePrivateChannels()) >= 20, q = []
            }

            function W(e) {
                let t = (0, h.default)(e);
                return null == t || null != k && k !== t.type ? null : t
            }

            function F(e) {
                var t;
                let {
                    query: l,
                    queryMode: u
                } = e, i = (0, d.isSplitMessagesTabAndOnMessagesTab)() ? void 0 : null !== (t = U.default.getGuildId()) && void 0 !== t ? t : void 0, n = new Set(["user:".concat(f.default.getId())]);
                null != i && n.add("guild:".concat(i)), s = null != s ? s : new o.default(K, M, null != u ? 100 : 5, {
                    frecencyBoosters: !0,
                    blacklist: n
                }), P = null, Q = l.length, k = u, s.search(l)
            }

            function K(e, t) {
                ! function(e, t) {
                    if (e.length !== t.length) return !1;
                    for (let l = 0; l < e.length; l++) {
                        let s = e[l],
                            u = t[l];
                        if (s.record.id !== u.record.id) return !1
                    }
                    return !0
                }(e = "" === (t = t.trim()).trim() ? function() {
                    var e, t;
                    let l = null !== (e = U.default.getGuildId()) && void 0 !== e ? e : void 0,
                        s = null !== (t = A.default.getChannelId()) && void 0 !== t ? t : void 0;
                    switch (k) {
                        case o.AutocompleterResultTypes.USER: {
                            let e = f.default.getId();
                            return N.default.getRecentlyTalked(s, 100).filter(t => {
                                let {
                                    record: l
                                } = t;
                                return l.id !== e
                            })
                        }
                        case o.AutocompleterResultTypes.APPLICATION:
                            return N.default.queryApplications({
                                query: "",
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.GUILD:
                            return N.default.queryGuilds({
                                query: "",
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.TEXT_CHANNEL:
                            return N.default.queryChannels({
                                query: "",
                                guildId: U.default.getGuildId(),
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.VOICE_CHANNEL:
                            return N.default.queryChannels({
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
                    for (let e = 1; e < w.length; e += 1) {
                        let t = W(w[e]);
                        if (null != t)(t.type !== o.AutocompleterResultTypes.TEXT_CHANNEL && t.type !== o.AutocompleterResultTypes.VOICE_CHANNEL || T.default.can(v.Permissions.VIEW_CHANNEL, t.record)) && n.push(t)
                    }
                    n.length > 0 && u.push((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_LAST_CHANNEL), ...n);
                    let r = function(e) {
                        let t = [];
                        return y.default.getRecentlyEditedDrafts(y.DraftType.ChannelMessage).forEach(l => {
                            let {
                                channelId: s
                            } = l;
                            if (e(s)) return;
                            let u = W(s);
                            null != u && t.push(u)
                        }), t
                    }(e => e === s || w.includes(e));
                    r.length > 0 && u.push((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_DRAFTS), ...r);
                    let a = m.default.getMentionChannelIds().filter(e => e !== s && !w.includes(e)).map(e => W(e)).filter(S.isNotNullish).reverse();
                    if (a.length > 0 && (u.push((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_MENTIONS)), u = u.concat(a)), null != l) {
                        let e = E.default.getSelectableChannelIds(l).filter(e => {
                            let t = R.default.getChannel(e);
                            return !(null == t || e === s || w.includes(e) || I.default.isChannelMuted(t.guild_id, e) || null != t.parent_id && I.default.isChannelMuted(t.guild_id, t.parent_id)) && (0, c.getHasImportantUnread)(t)
                        }).map(e => W(e)).filter(e => e);
                        Object.values(p.default.getActiveJoinedUnreadThreadsForGuild(l)).forEach(t => {
                            for (let l in t) {
                                let t = W(l);
                                null != t && e.push(t)
                            }
                        }), e.length > 0 && (u.push((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), u = u.concat(e))
                    }
                    return i(u).uniqBy(e => e.record.id).value()
                }() : e, q) && (q = e, ! function(e, t) {
                    switch (k) {
                        case o.AutocompleterResultTypes.USER: {
                            let t = g.default.getGuild(U.default.getGuildId());
                            e.unshift((0, o.createHeaderResult)(null != t ? L.default.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
                                name: t.name
                            }) : L.default.Messages.QUICKSWITCHER_QUERYMODE_USERS)), G = e;
                            break
                        }
                        case o.AutocompleterResultTypes.TEXT_CHANNEL:
                            e.unshift((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), G = e;
                            break;
                        case o.AutocompleterResultTypes.VOICE_CHANNEL:
                            e.unshift((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), G = e;
                            break;
                        case o.AutocompleterResultTypes.GUILD:
                            e.unshift((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), G = e;
                            break;
                        case o.AutocompleterResultTypes.APPLICATION:
                            e.unshift((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), G = e;
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

            function z() {
                P = null, Q = 0, q = [], null != s && (s.destroy(), s = null)
            }
            class V extends n.default.PersistedStore {
                initialize(e) {
                    var t;
                    this.waitFor(C.default, g.default, R.default), this.syncWith([_.default], () => !0), b = r.default.get(D) || !1, w = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
                }
                getState() {
                    return {
                        channelHistory: w
                    }
                }
                isOpen() {
                    return null != s
                }
                getResultTotals(e) {
                    return null == s ? 0 : null == e ? s.results.reduce((e, t) => t.type !== o.AutocompleterResultTypes.HEADER ? e + 1 : e, 0) : s.results.reduce((t, l) => l.type === e ? t + 1 : t, 0)
                }
                channelNoticePredicate(e, t) {
                    let l = Date.now() - t >= v.CHANNEL_NOTICE_SHOW_DELAY;
                    return H && l
                }
                getFrequentGuilds() {
                    return null != s ? s.queryGuilds("", 100) : null
                }
                getFrequentGuildsLength() {
                    return null != s ? s.queryGuilds("", 100).length : 0
                }
                getChannelHistory() {
                    return w
                }
                getProps() {
                    return {
                        theme: _.default.theme,
                        query: null != s ? s.query : "",
                        queryMode: k,
                        results: G,
                        selectedIndex: O,
                        seenTutorial: b,
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
                QUICKSWITCHER_HIDE: z,
                OVERLAY_SET_INPUT_LOCKED: z,
                HIDE_ACTION_SHEET_QUICK_SWITCHER: z,
                QUICKSWITCHER_SEARCH: function(e) {
                    var t, l;
                    let {
                        query: u,
                        queryMode: i
                    } = e;
                    if (null == s) return !1;
                    let n = null !== (t = U.default.getGuildId()) && void 0 !== t ? t : null;
                    if (k !== i) {
                        s.setResultTypes(null != i ? [i] : M), s.setLimit(null != i ? 100 : 5);
                        let e = null !== (l = U.default.getGuildId()) && void 0 !== l ? l : void 0;
                        i === o.AutocompleterResultTypes.USER && null != e ? s.setOptions({
                            userFilters: {
                                guild: e,
                                friends: !0
                            }
                        }, !0) : i === o.AutocompleterResultTypes.VOICE_CHANNEL ? s.setOptions({
                            voiceChannelGuildFilter: null
                        }, !0) : s.setOptions({
                            userFilters: null,
                            voiceChannelGuildFilter: void 0
                        }, !0)
                    }
                    k = i, s.search(u, k === o.AutocompleterResultTypes.USER ? n : void 0)
                },
                QUICKSWITCHER_SELECT: function(e) {
                    O = e.selectedIndex
                },
                QUICKSWITCHER_SWITCH_TO: function() {
                    if (b) return !1;
                    b = !0, r.default.set(D, !0)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t) return !1;
                    (w = w.filter(e => e !== t)).unshift(t), w.length > 4 && (w.length = 4)
                }
            });
            var Y = B
        },
        615387: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getHasImportantUnread: function() {
                    return n
                }
            }), l("446674");
            var s = l("660478"),
                u = l("282109"),
                i = l("133335");

            function n(e) {
                return s.default.hasUnread(e.id) && u.default.getChannelUnreadMode(e) === i.UnreadMode.IMPORTANT
            }
        },
        741347: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var s = l("666038");
            class u extends s.default {
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
        319781: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                MAX_NUM_SELECTED_ITEMS: function() {
                    return f
                },
                default: function() {
                    return A
                }
            }), l("424973");
            var s = l("917351"),
                u = l.n(s),
                i = l("446674"),
                n = l("913144"),
                r = l("80507"),
                a = l("374363"),
                o = l("42203"),
                h = l("305961"),
                d = l("18494"),
                c = l("162771"),
                p = l("49111"),
                _ = l("397336");
            let f = 100,
                R = new r.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
                    },
                    lookupKey: e => {
                        var t, l;
                        return null !== (l = null !== (t = h.default.getGuild(e)) && void 0 !== t ? t : o.default.getChannel(e)) && void 0 !== l ? l : o.default.getChannel(o.default.getDMFromUserId(e))
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
                    channelId: l
                } = e, s = !1;
                return l !== y && (y = null != l ? l : null, null != l && p.ID_REGEX.test(l) && (s = !0, R.track(l), T.pendingUsages.push({
                    key: l,
                    timestamp: Date.now()
                }))), t !== E && (E = null != t ? t : null, null != t && p.ID_REGEX.test(t) && (s = !0, R.track(t), T.pendingUsages.push({
                    key: t,
                    timestamp: Date.now()
                }))), s
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
                        wasSaved: l
                    } = e;
                    return t === _.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && !!l && (T.pendingUsages = [], !0)
                }
            })
        }
    }
]);
//# sourceMappingURL=74970.ad098636400bd7dcbe6c.js.map