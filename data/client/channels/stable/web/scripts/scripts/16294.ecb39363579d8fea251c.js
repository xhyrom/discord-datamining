(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["16294"], {
        853374: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("233314");
            r.es(n, t)
        },
        79547: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                SimpleDeadchatPromptExperiment: function() {
                    return n
                }
            });
            let n = (0, r("516086").createExperiment)({
                kind: "guild",
                id: "2023-08_deadchat_simple_prompt_guild",
                label: "Simple deadchat prompt",
                defaultConfig: {
                    triggerDeadchat: !1,
                    enableDeadchat: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !1
                    }
                }, {
                    id: 1,
                    label: "trigger deadchat upon connection open",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !0
                    }
                }]
            })
        },
        589823: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ACCOUNT_AGE_DATE_TOOLTIP_CONFIG: function() {
                    return s
                },
                MEMBER_JOIN_DATE_TOOLTIP_CONFIG: function() {
                    return l
                },
                MembersTableDateFormats: function() {
                    return i
                },
                formatDateRelativeTime: function() {
                    return c
                },
                getJoinedAtTimestamp: function() {
                    return _
                }
            });
            var n, i, a = r("529754"),
                u = r("30175");
            let s = {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit"
                },
                l = {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit"
                };
            (n = i || (i = {}))[n.JOINED_AT = 0] = "JOINED_AT", n[n.ACCOUNT_AGE = 1] = "ACCOUNT_AGE";
            let o = () => ({
                    seconds: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_SECONDS,
                    minutes: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MINUTES,
                    hours: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_HOURS,
                    days: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_DAYS,
                    months: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_MONTH,
                    years: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_YEAR
                }),
                d = () => ({
                    hours: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_HOURS,
                    days: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_DAYS,
                    months: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_MONTH,
                    years: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_YEAR
                }),
                c = (e, t) => {
                    var r;
                    let n = 0 === (r = t) ? o : 1 === r ? d : void 0;
                    return (0, a.default)(e, n, !1)
                },
                _ = e => (null != e ? new Date(e) : new Date).getTime()
        },
        675213: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GuildMemberSafetyMembers: function() {
                    return M
                },
                MemberSafetySecondaryIndex: function() {
                    return n
                }
            }), r("653041");
            var n, i, a = r("498607"),
                u = r.n(a),
                s = r("386695"),
                l = r("598778"),
                o = r("871831"),
                d = r("589823"),
                c = r("389634"),
                _ = r("233300"),
                h = r("763217");
            let m = Date.now();

            function E(e) {
                let t = [e.isCurrentGuildMemberByTimestamp ? "CURRENT_GUILD_MEMBER" : "NEW_GUILD_MEMBER"];
                return e.isIncludedInSearchResults && t.push("INCLUDED_IN_SEARCH_RESULTS"), t
            }

            function S(e) {
                return e.sort
            }

            function f() {
                return new s.default(E, S)
            }(i = n || (n = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", i.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", i.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
            class M {
                constructor(e) {
                    this.newMemberTimestamp = Date.now(), this.guildId = e, this._membersMap = f()
                }
                reset() {
                    this._membersMap.clear(), this._membersMap = f(), this.resetNewMemberTimestamp()
                }
                resetNewMemberTimestamp() {
                    this.newMemberTimestamp = Date.now()
                }
                enhanceNewMember(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = (0, d.getJoinedAtTimestamp)(e.joinedAt),
                        {
                            hasUnusualDmActivity: i,
                            hasUnusualAccountActivity: a,
                            sourceInviteCode: u,
                            joinSourceType: s,
                            inviterId: l,
                            integrationType: _
                        } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
                        m = o.default.getUser(e.userId);
                    return {
                        hasUnusualDmActivity: i,
                        hasUnusualAccountActivity: a,
                        sourceInviteCode: u,
                        joinSourceType: s,
                        inviterId: l,
                        integrationType: _,
                        ...e,
                        isCurrentGuildMemberByTimestamp: n <= this.newMemberTimestamp,
                        isIncludedInSearchResults: !1,
                        user: m,
                        sort: (0, h.getSortValueForMember)(e, t.selectedSort ?? c.OrderBy.ORDER_BY_UNSPECIFIED),
                        joinedAtTimestamp: n,
                        ...r
                    }
                }
                _computeMemberSupplementals(e, t) {
                    var r;
                    let {
                        sourceInviteCode: n,
                        joinSourceType: i,
                        inviterId: a,
                        integrationType: u
                    } = (0, _.getMemberSupplementalByGuildId)(this.guildId)[e] ?? {};
                    return {
                        sourceInviteCode: n ?? null,
                        joinSourceType: i ?? null,
                        inviterId: a ?? null,
                        integrationType: u ?? null,
                        hasUnusualDmActivity: null != (r = t) && new Date(r).getTime() >= m - c.UNUSUAL_DM_COMPARISON_DELTA,
                        hasUnusualAccountActivity: (0, l.isSpammer)(e)
                    }
                }
                createMember(e) {
                    return this._membersMap.set(e.userId, e)
                }
                updateMember(e, t) {
                    if (null == t) return this._membersMap.set(e.userId, e);
                    let r = {
                            ...e
                        },
                        n = {
                            ...t
                        },
                        i = !1,
                        {
                            sourceInviteCode: a,
                            hasUnusualDmActivity: s,
                            hasUnusualAccountActivity: l,
                            joinSourceType: o,
                            inviterId: d,
                            integrationType: c
                        } = this._computeMemberSupplementals(r.userId, n.unusualDMActivityUntil ?? r.unusualDMActivityUntil);
                    for (let e in r.sourceInviteCode !== a && (n.sourceInviteCode = a), r.hasUnusualDmActivity !== s && (n.hasUnusualDmActivity = s), r.hasUnusualAccountActivity !== l && (n.hasUnusualAccountActivity = l), r.joinSourceType !== o && (n.joinSourceType = o), r.inviterId !== d && (n.inviterId = d), r.integrationType !== c && (n.integrationType = c), n) {
                        let t = n[e],
                            a = r[e];
                        !u()(t, a) && (r[e] = t, i = !0)
                    }
                    return this._membersMap.set(r.userId, r) || i
                }
                removeMember(e) {
                    return this._membersMap.delete(e)
                }
                getMemberByUserId(e) {
                    return this._membersMap.get(e)
                }
                values(e) {
                    return this._membersMap.values(e, !0)
                }
                count(e) {
                    return this._membersMap.size(e)
                }
                get version() {
                    return this._membersMap.version
                }
            }
        },
        292272: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GuildMemberSafetyPageStore: function() {
                    return h
                }
            }), r("653041");
            var n = r("392711"),
                i = r("361733"),
                a = r("871831"),
                u = r("152551"),
                s = r("589823"),
                l = r("675213"),
                o = r("6794"),
                d = r("77056"),
                c = r("763217");
            let _ = 3 * u.default.Millis.SECOND;
            class h {
                constructor(e) {
                    this.lastRefreshTimestamp = 0, this.lastCursorTimestamp = Date.now(), this._lastRefreshTimer = null, this.guildId = e, this._initialized = !1, this._members = null, this._pagination = null, this._search = null
                }
                getSearchIndex() {
                    return null == this._search || this._search.hasDefaultQuery ? l.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER : l.MemberSafetySecondaryIndex.INCLUDED_IN_SEARCH_RESULTS
                }
                initialize() {
                    if (this._initialized) {
                        this.lastCursorTimestamp = Date.now();
                        return
                    }
                    this._initialized = !0, this._search = new d.GuildMemberSafetySearch(this.guildId), this._members = new l.GuildMemberSafetyMembers(this.guildId), this._pagination = new o.GuildMemberSafetyPagination(this.guildId, this._members.values(this.getSearchIndex()))
                }
                get isInitialized() {
                    return this._initialized
                }
                reset() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._initialized && (this._members?.reset(), this._pagination?.reset(), this._search?.reset(), e && this.initialize())
                }
                get searchChunkSize() {
                    return null != this._pagination && this._initialized ? (0, o.getSearchChunkLimit)(this._pagination.getPaginationState()) : 0
                }
                getMember(e) {
                    return null != this._members && this._initialized ? this._members.getMemberByUserId(e) ?? null : null
                }
                getMembersByIndex(e) {
                    return null != this._members && this._initialized ? [this._members.values(e), this._members.version] : [
                        [], 0
                    ]
                }
                countMembersByIndex(e) {
                    return null != this._members && this._initialized ? this._members.count(e) : 0
                }
                _checkUpdatesForPaginationUpdate(e, t) {
                    return null != t.isIncludedInSearchResults && t.isIncludedInSearchResults !== e.isIncludedInSearchResults || null != t.isCurrentGuildMemberByTimestamp && t.isCurrentGuildMemberByTimestamp !== e.isCurrentGuildMemberByTimestamp || !1
                }
                _getIsIncludedInSearch(e, t) {
                    if (null == this._search || this._search.hasDefaultQuery) return [!1, !1];
                    let r = {
                            ...e,
                            ...t
                        },
                        n = this._search.isMemberIncludedInSearchResults(r),
                        i = n !== e.isIncludedInSearchResults;
                    return [n, i]
                }
                updatePaginationChunks() {
                    if (null == this._pagination || null == this._members || !this._initialized) return !1;
                    let e = this._members.values(this.getSearchIndex());
                    return this._pagination.updateSortedMembers(e)
                }
                removeMember(e) {
                    if (null == this._members || !this._initialized || null == this._members.getMemberByUserId(e)) return !1;
                    let t = this._members.removeMember(e);
                    return t ? this.updatePaginationChunks() : t
                }
                _rawUpdateMember(e, t) {
                    if (null == this._members) return [!1, !1];
                    let r = !1,
                        n = this._members.getMemberByUserId(e);
                    if (null == n) {
                        r = !0;
                        let a = i.default.getTrueMember(this.guildId, e);
                        if (null == a) return [!1, !1];
                        n = this._members.enhanceNewMember(a, this.getSearchState(), t)
                    }
                    if (null == t.isIncludedInSearchResults) {
                        let [e, i] = this._getIsIncludedInSearch(n, t);
                        i && (r = !0, t.isIncludedInSearchResults = e)
                    } else t.isIncludedInSearchResults !== n.isIncludedInSearchResults && (r = !0);
                    let a = this._members.updateMember(n, t);
                    return !r && (r = this._checkUpdatesForPaginationUpdate(n, t)), [r, a]
                }
                isMemberInIndex(e) {
                    return null != this._members && !!this._initialized && this._members._membersMap.has(e)
                }
                isMemberIncludedInSearchResults(e) {
                    if (null == this._members || null == this._search || null == this._pagination || !this._initialized) return !1;
                    if (this._search.hasDefaultQuery) return this._pagination.isMemberInAnyChunk(e);
                    let t = this._members.getMemberByUserId(e);
                    if (null == t) {
                        let r = i.default.getTrueMember(this.guildId, e);
                        if (null == r) return !1;
                        t = this._members.enhanceNewMember(r, this.getSearchState())
                    } else if (t.isIncludedInSearchResults) return !0;
                    return this._search.isMemberIncludedInSearchResults(t)
                }
                updateMember(e, t) {
                    if (null == this._members || !this._initialized) return !1;
                    let [r, n] = this._rawUpdateMember(e, t);
                    return r ? this.updatePaginationChunks() : n
                }
                updateClientMembers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == this._members || !this._initialized) return !1;
                    let n = !1,
                        i = !1;
                    for (let a of e) {
                        if (null == a.joinedAt) continue;
                        let e = a;
                        if (t && (e = {
                                ...e,
                                isIncludedInSearchResults: !0
                            }), r) {
                            let t = (0, s.getJoinedAtTimestamp)(a.joinedAt);
                            e = {
                                ...e,
                                isCurrentGuildMemberByTimestamp: t <= this._members.newMemberTimestamp,
                                refreshTimestamp: this.lastRefreshTimestamp
                            }
                        }
                        let [u, l] = this._rawUpdateMember(a.userId, e);
                        n = u || n, i = l || i
                    }
                    return n ? this.updatePaginationChunks() : i
                }
                updateServerMembers(e) {
                    if (null == this._members || !this._initialized) return !1;
                    let t = !1,
                        r = !1;
                    for (let n of e) {
                        let e = i.default.getTrueMember(this.guildId, n.user.id);
                        if (null == e) continue;
                        let [a, u] = this._rawUpdateMember(n.user.id, e);
                        t = a || t, r = u || r
                    }
                    return t ? this.updatePaginationChunks() : r
                }
                updateMembersByMemberIds(e) {
                    if (null == this._members || !this._initialized) return !1;
                    let t = e.reduce((e, t) => {
                        let r = i.default.getTrueMember(this.guildId, t);
                        return null != r && e.push(r), e
                    }, []);
                    return this.updateClientMembers(t)
                }
                updateMembersSort(e) {
                    return new Promise(t => {
                        let r = (0, n.cloneDeep)(this.getMembersByIndex(l.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)[0]);
                        [...r, ...(0, n.cloneDeep)(this.getMembersByIndex(l.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)[0])].forEach(t => {
                            let r = (0, c.getSortValueForMember)(t, e),
                                n = this._search?.isMemberIncludedInSearchResults(t) ?? !1;
                            this._members?.updateMember(t, {
                                sort: r,
                                isIncludedInSearchResults: n
                            })
                        }), t()
                    })
                }
                sortMembersBySelectedSort(e) {
                    null != this._search && null != this._members && this._initialized && null != e && (this.updatePaginationState({
                        sort: e
                    }, !0), this.updateMembersSort(e).then(() => {
                        this.updatePaginationChunks()
                    }))
                }
                updateSearchedMembersByMemberIds(e) {
                    if (null == this._search || null == this._members || !this._initialized) return !1;
                    let t = e.reduce((e, t) => {
                        let r = i.default.getTrueMember(this.guildId, t);
                        return null != r && e.push(r), e
                    }, []);
                    return this.updateClientMembers(t, this._search.requiresUsernameMatch, 0 !== this.lastRefreshTimestamp)
                }
                rebuildAllMembers() {
                    if (null == this._members || !this._initialized) return !1;
                    let e = i.default.getMembers(this.guildId);
                    return this.updateClientMembers(e)
                }
                _scheduleRefresh(e) {
                    this.lastRefreshTimestamp = e, this.lastCursorTimestamp = Date.now(), null != this._lastRefreshTimer && clearTimeout(this._lastRefreshTimer), this._lastRefreshTimer = setTimeout(() => {
                        this._lastRefreshTimer = null, this.lastRefreshTimestamp = 0
                    }, _)
                }
                refreshNewMembersAndSearchResults() {
                    if (null == this._search || null == this._members || !this._initialized) return !1;
                    let e = Number(Date.now());
                    this._scheduleRefresh(e);
                    let t = (0, n.cloneDeep)(this._members.values(l.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)),
                        r = !1;
                    for (let n of t) r = this._members.updateMember(n, {
                        isCurrentGuildMemberByTimestamp: !0,
                        refreshTimestamp: e,
                        user: a.default.getUser(n.userId)
                    }) || r;
                    this._members.resetNewMemberTimestamp(), this.resetSearchState() && (r = !1);
                    let [i, u] = this.updatePaginationState({
                        currentPage: 1
                    }, !1);
                    return u && (r = !1), r && this.updatePaginationChunks(), !0
                }
                getNewMemberTimestamp() {
                    return null != this._members && this._initialized ? this._members.newMemberTimestamp : 0
                }
                updateSearchState(e) {
                    if (null == this._members || null == this._search || !this._initialized) return !1;
                    let t = !!this._search.hasDefaultQuery;
                    null != e.selectedSort && e.selectedSort !== this._search.getSearchState().selectedSort && this.sortMembersBySelectedSort(e.selectedSort);
                    let r = this._search.updateSearchState(e);
                    if (this._search.hasDefaultQuery && t) return this.updatePaginationChunks();
                    let i = (0, n.cloneDeep)(this._members.values(l.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)),
                        a = t !== this._search.hasDefaultQuery;
                    for (let e of i) {
                        if (!e.isCurrentGuildMemberByTimestamp) continue;
                        let t = this._search.isMemberIncludedInSearchResults(e);
                        t !== e.isIncludedInSearchResults && (a = !0, r = !0, this._members.updateMember(e, {
                            isIncludedInSearchResults: t
                        }))
                    }
                    return a ? (this.updatePaginationChunks(), this.updatePaginationState({
                        currentPage: 1
                    }), !0) : r
                }
                getSearchState() {
                    return null != this._search && this._initialized ? this._search.getSearchState() : (0, d.getDefaultSearchState)()
                }
                hasDefaultSearchState() {
                    return null == this._search || !this._initialized || this._search.hasDefaultQuery
                }
                resetSearchState() {
                    return !!(null != this._search && this._initialized && this._search.resetSearchState()) && this.updatePaginationChunks()
                }
                getTotalResultsCount() {
                    return null != this._search && null != this._pagination && this._initialized ? this._search.hasDefaultQuery && null != this._defaultSearchTotalResultsCount ? this._defaultSearchTotalResultsCount : this._pagination.getPaginationState().totalResultsCount : 0
                }
                updatePaginationState(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return null != this._search && null != this._pagination && this._initialized ? (t && (this.lastRefreshTimestamp = 0), this._search.hasDefaultQuery && null != e.totalResultsCount && (this._defaultSearchTotalResultsCount = e.totalResultsCount), this._pagination.updatePaginationState(e)) : [!1, !1]
                }
                clearPaginationState() {
                    this._pagination?.reset()
                }
                getPaginationState() {
                    return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, o.createDefaultMemberSafetyPaginationState)()
                }
                getPaginatedMembers() {
                    return null != this._pagination && this._initialized ? [this._pagination.paginatedMembers, this._pagination.version] : [{}, 0]
                }
                updatePaginationToken(e) {
                    return null != this._pagination && !!this._initialized && this._pagination.updatePaginationToken(e)
                }
                getElasticSearchPagination() {
                    return null != this._pagination && this._initialized ? this._pagination.getElasticSearchPagination() : null
                }
                removeRoleFromSearchState(e) {
                    let t = new Set(this.getSearchState().selectedRoleIds);
                    return t.delete(e), this.updateSearchState({
                        selectedRoleIds: t
                    })
                }
            }
        },
        6794: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GuildMemberSafetyPagination: function() {
                    return c
                },
                MAX_VISIBLE_PAGES: function() {
                    return l
                },
                PAGINATION_PAGE_SIZE_OPTIONS: function() {
                    return s
                },
                createDefaultMemberSafetyPaginationState: function() {
                    return o
                },
                getSearchChunkLimit: function() {
                    return d
                }
            }), r("653041");
            var n, i, a = r("361733"),
                u = r("389634");
            let s = [12, 25, 50, 100],
                l = 7;

            function o() {
                return {
                    pageSize: s[0],
                    currentPage: 1,
                    continuationToken: null,
                    sort: u.OrderBy.ORDER_BY_UNSPECIFIED,
                    elasticSearchCursor: null
                }
            }

            function d(e) {
                return Math.max(5 * e.pageSize, 250)
            }(i = n || (n = {}))[i.FORWARD = 1] = "FORWARD", i[i.BACKWARD = -1] = "BACKWARD";
            class c {
                constructor(e, t) {
                    this._reduceMemberIdsToPaginationChunks = (e, t, r) => {
                        let n = Math.floor(r / this._paginationState.pageSize) + 1;
                        return null == e[n] && (e[n] = []), e[n].push(t), e
                    }, this.guildId = e, this._paginationState = o(), this._version = 0;
                    let [r, n] = this._initPaginationFromRawMembers(t);
                    this._sortedMemberIds = r, this._cachedPaginationChunks = n, this._version += 1
                }
                reset() {
                    this._paginationState = o(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
                }
                isMemberOnCurrentPage(e) {
                    return (this._cachedPaginationChunks[this._paginationState.currentPage] ?? []).includes(e)
                }
                isMemberInAnyChunk(e) {
                    return this._sortedMemberIds.includes(e)
                }
                _initPaginationFromRawMembers(e) {
                    let t = [],
                        r = e.reduce((e, r, n) => (e = this._reduceMemberIdsToPaginationChunks(e, r.userId, n), t.push(r.userId), e), {});
                    return [t, r]
                }
                _buildPaginationFromMemberIds(e) {
                    return e.reduce(this._reduceMemberIdsToPaginationChunks, {})
                }
                _rebuildPaginationChunksFromStoredMembers() {
                    return this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds), this._version += 1, !0
                }
                getPaginationState() {
                    return this._paginationState
                }
                updatePaginationToken(e) {
                    return e !== this._paginationState.continuationToken && (this._paginationState = {
                        ...this._paginationState,
                        continuationToken: e
                    }, !0)
                }
                _calculateNewPageFromPageSizeChange(e, t) {
                    let {
                        currentPage: r,
                        pageSize: n
                    } = this._paginationState;
                    return e * n <= this._sortedMemberIds.length ? Math.max(Math.ceil(n / e * (t ?? r)), 1) : 1
                }
                updatePaginationState(e) {
                    let t = !1;
                    return null != e.pageSize && e.pageSize !== this._paginationState.pageSize && (t = !0, e.currentPage = this._calculateNewPageFromPageSizeChange(e.pageSize ?? this._paginationState.pageSize, e.currentPage)), this._paginationState = {
                        ...this._paginationState,
                        ...e
                    }, t && this._rebuildPaginationChunksFromStoredMembers(), [!0, t]
                }
                updateSortedMembers(e) {
                    let [t, r] = this._initPaginationFromRawMembers(e);
                    return this._sortedMemberIds = t, this._cachedPaginationChunks = r, this._version += 1, !0
                }
                updateSortedMembersByUserIds(e) {
                    return this._sortedMemberIds = e, this._rebuildPaginationChunksFromStoredMembers(), !0
                }
                _findMember(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                        r = e;
                    r < this._sortedMemberIds.length && (r = this._sortedMemberIds.length - 1), r < 0 && (r = 0);
                    let n = this._sortedMemberIds[e],
                        i = a.default.getMember(this.guildId, n);
                    for (; null == i && !((e += t) < 0) && !(e >= this._sortedMemberIds.length);) {
                        ;
                        n = this._sortedMemberIds[e], i = a.default.getMember(this.guildId, n), i?.joinedAt == null && (i = null)
                    }
                    return i
                }
                getElasticSearchPagination() {
                    return this.getPaginationState().elasticSearchCursor
                }
                get paginatedMembers() {
                    return this._cachedPaginationChunks
                }
                get version() {
                    return this._version
                }
            }
        },
        77056: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GuildMemberSafetySearch: function() {
                    return _
                },
                getDefaultSearchState: function() {
                    return o
                }
            });
            var n = r("498607"),
                i = r.n(n),
                a = r("483239"),
                u = r("658841"),
                s = r("84819"),
                l = r("64258");

            function o() {
                return {
                    query: "",
                    requireUnusualDmActivity: !1,
                    requireCommunicationDisabled: !1,
                    requireUnusualAccountActivity: !1,
                    requireUsernameQuarantined: !1,
                    selectedRoleIds: new Set,
                    selectedJoinDateOption: {
                        optionId: 0,
                        afterDate: null,
                        beforeDate: null
                    },
                    selectedAccountAgeOption: {
                        optionId: 0,
                        afterDate: null,
                        beforeDate: null
                    },
                    selectedJoinSourceType: void 0,
                    selectedSourceInviteCode: void 0,
                    selectedSort: void 0
                }
            }
            let d = Object.freeze(o());

            function c(e, t) {
                return null != e && (!!e.toLowerCase().includes(t.toLowerCase()) || !1)
            }
            class _ {
                constructor(e) {
                    this.guildId = e, this._searchState = o(), this.hasDefaultQuery = !0
                }
                get requiresUsernameMatch() {
                    return this._searchState.query.trim().length > 0
                }
                reset() {
                    this._searchState = o(), this.hasDefaultQuery = !0
                }
                updateSearchState(e) {
                    return this._searchState = {
                        ...this._searchState,
                        ...e
                    }, this.hasDefaultQuery = i()(this._searchState, d), !0
                }
                resetSearchState() {
                    return !this.hasDefaultQuery && (this._searchState = o(), this.hasDefaultQuery = !0, !0)
                }
                getSearchState() {
                    return this._searchState
                }
                isMemberIncludedInSearchResults(e) {
                    let {
                        query: t,
                        requireUnusualDmActivity: r,
                        requireCommunicationDisabled: n,
                        requireUnusualAccountActivity: i,
                        requireUsernameQuarantined: o,
                        selectedRoleIds: d,
                        selectedJoinDateOption: _,
                        selectedAccountAgeOption: h,
                        selectedSourceInviteCode: m,
                        selectedJoinSourceType: E
                    } = this._searchState;
                    if (t.length > 0 && ! function(e, t) {
                            if ("" === t.trim()) return !1;
                            let [r, n] = (0, l.splitQuery)(t);
                            for (let t of n)
                                if (e.userId === t) return !0;
                            for (let t of r)
                                if (c(e.nick, t)) return !0;
                            if (null == e.user) return !1;
                            let {
                                globalName: i,
                                username: a
                            } = e.user;
                            for (let e of r)
                                if (c(a, e)) return !0;
                            for (let e of r)
                                if (c(i, e)) return !0;
                            return !1
                        }(e, t)) return !1;
                    if (d.size > 0) {
                        var S, f;
                        if (S = e, !(0 !== (f = d).size && Array.from(f).every(e => S.roles.includes(e)))) return !1
                    }
                    if (null != _.afterDate && e.joinedAtTimestamp < _.afterDate || null != _.beforeDate && e.joinedAtTimestamp > _.beforeDate || null != h.afterDate && s.default.extractTimestamp(e.userId) < h.afterDate || null != h.beforeDate && s.default.extractTimestamp(e.userId) > h.beforeDate || null != m && e.sourceInviteCode !== m || null != E && e.joinSourceType !== E) return !1;
                    if (r || n || i || o) return !!(r && e.hasUnusualDmActivity || n && (0, u.isMemberCommunicationDisabled)(e) || i && e.hasUnusualAccountActivity || o && (0, a.hasAutomodQuarantinedProfile)(e)) || !1;
                    return !0
                }
            }
        },
        64258: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                splitQuery: function() {
                    return i
                }
            }), r("653041");
            var n = r("110531");

            function i(e) {
                let t = e.split(",").map(e => e.trim()),
                    r = [],
                    i = [];
                return t.forEach(e => {
                    (0, n.isSnowflake)(e) ? r.push(e): i.push(e)
                }), [i, r]
            }
        },
        806874: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                searchAllGuildMembers: function() {
                    return o
                }
            });
            var n = r("454836"),
                i = r("312916"),
                a = r("253842"),
                u = r("152551"),
                s = r("297801"),
                l = r("467006");
            async function o(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (d > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: c = !0,
                    signal: _
                } = r;
                try {
                    var h;
                    let a = await n.default.post({
                        url: l.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: _
                    });
                    if (a.status === s.INDEXING_RESPONSE_CODE) {
                        if (null == a.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!c) throw Error("Indexing response received but autoRetry is disabled");
                        return await i.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, a.body.retry_after * u.default.Millis.SECOND)), o(e, t, r, d + 1)
                    }
                    return {
                        type: s.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                        body: {
                            guild_id: (h = a.body).guild_id,
                            members: h.members,
                            page_result_count: h.page_result_count,
                            total_result_count: h.total_result_count
                        }
                    }
                } catch (t) {
                    let e = new a.APIError(t);
                    return {
                        type: s.GuildMemberSearchResponseType.ERROR,
                        body: e
                    }
                }
            }
        },
        389634: function(e, t, r) {
            "use strict";
            var n, i;
            r.r(t), r.d(t, {
                OrderBy: function() {
                    return n
                },
                UNUSUAL_DM_COMPARISON_DELTA: function() {
                    return a
                },
                createMemberSearchCursor: function() {
                    return u
                }
            });
            let a = 2 * r("152551").default.Millis.DAY;

            function u(e) {
                let {
                    joinedAt: t,
                    userId: r
                } = e;
                return null == t ? null : {
                    guild_joined_at: new Date(t).getTime(),
                    user_id: r
                }
            }(i = n || (n = {}))[i.ORDER_BY_UNSPECIFIED = 0] = "ORDER_BY_UNSPECIFIED", i[i.ORDER_BY_GUILD_JOINED_AT_DESC = 1] = "ORDER_BY_GUILD_JOINED_AT_DESC", i[i.ORDER_BY_GUILD_JOINED_AT_ASC = 2] = "ORDER_BY_GUILD_JOINED_AT_ASC", i[i.ORDER_BY_USER_ID_DESC = 3] = "ORDER_BY_USER_ID_DESC", i[i.ORDER_BY_USER_ID_ASC = 4] = "ORDER_BY_USER_ID_ASC"
        },
        297801: function(e, t, r) {
            "use strict";
            var n, i;
            r.r(t), r.d(t, {
                GuildMemberSearchResponseType: function() {
                    return n
                },
                INDEXING_RESPONSE_CODE: function() {
                    return a
                }
            });
            let a = 202;
            (i = n || (n = {}))[i.SUCCESSFUL_QUERY = 1] = "SUCCESSFUL_QUERY", i[i.ERROR = 2] = "ERROR"
        },
        258616: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                searchGuildMembers: function() {
                    return u
                }
            });
            var n = r("312916"),
                i = r("806874"),
                a = r("297801");
            async function u(e, t, r) {
                let u = await (0, i.searchAllGuildMembers)(e, t, r);
                if (u.type === a.GuildMemberSearchResponseType.ERROR) throw u.body;
                let {
                    body: s
                } = u;
                n.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                    guildId: e,
                    members: s.members,
                    page_result_count: s.page_result_count,
                    total_result_count: s.total_result_count
                })
            }
        },
        983299: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return G
                },
                getChunkIndex: function() {
                    return U
                },
                getChunkNumbers: function() {
                    return P
                },
                useIsMakingRequest: function() {
                    return v
                },
                useIsStillIndexing: function() {
                    return B
                },
                useMembersSearchRecordStore: function() {
                    return C
                }
            });
            var n, i, a, u, s = r("348327"),
                l = r.n(s),
                o = r("392711"),
                d = r("652874"),
                c = r("388684"),
                _ = r("435014"),
                h = r("963694"),
                m = r("370275"),
                E = r("84819"),
                S = r("6794"),
                f = r("64258"),
                M = r("389634"),
                I = r("258616"),
                g = r("490218");
            let p = new c.default("MemberSafetySearchManager");

            function b(e) {
                return `guild_${e}`
            }

            function T(e) {
                return {
                    requestState: e,
                    abortController: null,
                    lastUpdated: Date.now(),
                    query: null,
                    cursor: null,
                    previousPagination: null,
                    sort: null,
                    elasticSearchCursor: null
                }
            }(n = a || (a = {}))[n.FAILED = 0] = "FAILED", n[n.UNFETCHED = 1] = "UNFETCHED", n[n.PENDING = 2] = "PENDING", n[n.SUCCEEDED = 3] = "SUCCEEDED", n[n.STILL_INDEXING = 4] = "STILL_INDEXING";
            let C = (0, d.default)(e => ({}));

            function R(e, t) {
                let r = C.getState()[e];
                return null == r && (r = T(1)), r = {
                    ...r,
                    ...t
                }, C.setState(t => ({
                    ...t,
                    [e]: r
                })), r
            }

            function A(e) {
                return C.getState()[e]
            }

            function D(e) {
                let t = A(e);
                return null == t && R(e, t = T(1)), t
            }
            async function y(e) {
                await (0, _.sleep)(200), null != A(e) && R(e, {
                    requestState: 3,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function N(e) {
                var t;
                t = b(e), C.setState(e => {
                    let r = {
                        ...e
                    };
                    return delete r[t], r
                })
            }

            function U(e, t) {
                return Math.floor(Math.max(e - 1, 0) / t)
            }

            function P(e) {
                let t = (0, S.getSearchChunkLimit)(e),
                    r = e.pageSize * (e.currentPage - 1),
                    n = e.pageSize * e.currentPage,
                    i = e.pageSize * (e.currentPage + 1);
                return {
                    previousPageChunkNumber: U(r, t),
                    currentPageChunkNumber: U(n, t),
                    nextPageChunkNumber: U(i, t)
                }
            }(i = u || (u = {}))[i.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", i[i.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", i[i.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", i[i.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function L(e) {
                var t, r, n;
                let i = g.default.getSearchStateByGuildId(e),
                    a = g.default.getPaginationStateByGuildId(e),
                    u = b(e),
                    s = D(u),
                    [d, c] = function(e, t, r) {
                        let n = function(e, t) {
                                let {
                                    currentPageChunkNumber: r,
                                    previousPageChunkNumber: n,
                                    nextPageChunkNumber: i
                                } = P(t), {
                                    previousPagination: a
                                } = D(b(e)), u = t.currentPage, s = a?.currentPage ?? 0, l = g.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == l:
                                    case r === i && 0 === r:
                                        return 0;
                                    case r === i && r === n:
                                        return 1;
                                    case s < u && r < i:
                                        return 2;
                                    case s > u && r >= n:
                                        if (0 < r) return 3;
                                        return 0;
                                    default:
                                        return 1
                                }
                            }(e, r),
                            i = g.default.getElasticSearchPaginationByGuildId(e),
                            a = (0, S.getSearchChunkLimit)(r);
                        switch (n) {
                            case 0:
                                return [null, {
                                    limit: a
                                }];
                            case 1:
                                return [t.cursor ?? null, {
                                    limit: a,
                                    after: t.cursor ?? void 0
                                }];
                            case 2:
                                return [i?.after ?? null, {
                                    limit: a,
                                    after: i?.after ?? void 0
                                }];
                            case 3:
                                return [i?.before ?? null, {
                                    limit: a,
                                    before: i?.before ?? void 0
                                }];
                            default:
                                (0, m.assertNever)(n)
                        }
                    }(e, s, a);
                let _ = (t = function(e) {
                        var t;
                        let r = {},
                            n = {},
                            {
                                query: i
                            } = e;
                        if (null != (t = i) && t.length > 1) {
                            let [e, t] = (0, f.splitQuery)(i);
                            e.length > 0 && (r.usernames = {
                                or_query: e
                            }), t.length > 0 && (r.user_id = {
                                or_query: t
                            })
                        }
                        let {
                            requireUnusualDmActivity: a,
                            requireCommunicationDisabled: u,
                            requireUnusualAccountActivity: s,
                            requireUsernameQuarantined: l
                        } = e, o = {};
                        a && (o.unusual_dm_activity_until = {
                            range: {
                                gte: Date.now() - M.UNUSUAL_DM_COMPARISON_DELTA
                            }
                        }), u && (o.communication_disabled_until = {
                            range: {
                                gte: Date.now()
                            }
                        }), s && (o.unusual_account_activity = s), l && (o.automod_quarantined_username = l), Object.keys(o).length > 0 && (n.safety_signals = o);
                        let {
                            selectedRoleIds: d
                        } = e;
                        d.size > 0 && (r.role_ids = {
                            and_query: Array.from(d)
                        });
                        let {
                            selectedJoinDateOption: c
                        } = e;
                        null != c.afterDate && (r.guild_joined_at = {
                            range: {
                                gte: c.afterDate,
                                lte: c.beforeDate ?? void 0
                            }
                        });
                        let {
                            selectedAccountAgeOption: _
                        } = e;
                        if (null != _.afterDate) {
                            let e = r.user_id;
                            r.user_id = {
                                ...e,
                                range: {
                                    gte: E.default.fromTimestamp(_.afterDate),
                                    lte: null != _.beforeDate ? E.default.fromTimestamp(_.beforeDate) : void 0
                                }
                            }
                        }
                        let {
                            selectedSourceInviteCode: h
                        } = e;
                        null != h && (r.source_invite_code = {
                            or_query: [h]
                        });
                        let {
                            selectedJoinSourceType: m
                        } = e;
                        null != m && (r.join_source_type = {
                            or_query: [m]
                        });
                        let S = {
                                or_query: n,
                                and_query: r
                            },
                            {
                                selectedSort: I
                            } = e;
                        return null != I && (S.sort = I), S
                    }(i), null == (r = c) ? t : {
                        ...t,
                        ...r
                    }),
                    h = i.selectedSort ?? M.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC;
                if (function(e, t) {
                        let r = D(e);
                        return l()(r.query, t)
                    }(u, _) && (0, o.isEqual)(d, s.cursor)) return;
                let T = function(e, t, r, n, i) {
                    let a = A(e);
                    return a?.requestState === 2 && a.abortController?.abort(), R(e, {
                        requestState: 2,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: r,
                        previousPagination: n,
                        sort: i
                    })
                }(u, _, d, a, h);
                try {
                    if (p.info("Making member search request", {
                            query: T.query,
                            guildId: e
                        }), null == T.query) throw Error("Query is null");
                    await (0, I.searchGuildMembers)(e, T.query, {
                        signal: T.abortController?.signal ?? void 0
                    })
                } catch (e) {
                    ;
                    if (-1 === e.code) return;
                    null != A(n = u) && R(n, {
                        requestState: 0,
                        abortController: null,
                        lastUpdated: Date.now()
                    });
                    return
                }
                await y(u)
            }

            function v(e) {
                return C(t => {
                    let r = b(e);
                    return t[r]?.requestState === 2
                })
            }

            function B(e) {
                return C(t => {
                    let r = b(e);
                    return t[r]?.requestState === 4
                })
            }
            class O extends h.default {
                handleInitialize(e) {
                    let {
                        guildId: t
                    } = e;
                    return N(t), L(t)
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e;
                    return N(t.id)
                }
                handleSearchStateUpdate(e) {
                    let {
                        guildId: t
                    } = e;
                    return L(t)
                }
                handlePaginationUpdate(e) {
                    let {
                        guildId: t
                    } = e;
                    return L(t)
                }
                handleGuildMemberSearchSuccess(e) {
                    let {
                        guildId: t
                    } = e;
                    return y(b(t))
                }
                handleGuildMemberSearchStillIndexing(e) {
                    let {
                        guildId: t
                    } = e;
                    R(b(t), {
                        requestState: 4,
                        abortController: null,
                        lastUpdated: Date.now()
                    })
                }
                handleNewMemberTimestampRefresh(e) {
                    let {
                        guildId: t
                    } = e;
                    return L(t)
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        INITIALIZE_MEMBER_SAFETY_STORE: e => this.handleInitialize(e),
                        GUILD_DELETE: e => this.handleGuildDelete(e),
                        MEMBER_SAFETY_SEARCH_STATE_UPDATE: e => this.handleSearchStateUpdate(e),
                        MEMBER_SAFETY_PAGINATION_UPDATE: e => this.handlePaginationUpdate(e),
                        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e => this.handleGuildMemberSearchSuccess(e),
                        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: e => this.handleGuildMemberSearchStillIndexing(e),
                        MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: e => this.handleNewMemberTimestampRefresh(e)
                    }
                }
            }
            var G = new O
        },
        490218: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return C
                }
            }), r("653041");
            var n = r("661223"),
                i = r("312916"),
                a = r("262047"),
                u = r("361733"),
                s = r("327271"),
                l = r("871831"),
                o = r("84819"),
                d = r("292272"),
                c = r("389634"),
                _ = r("233300"),
                h = r("661395"),
                m = r("467006");
            let E = !1,
                S = {};

            function f(e) {
                return null == S[e] && (S[e] = new d.GuildMemberSafetyPageStore(e)), S[e]
            }

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                f(e).reset(t)
            }

            function I() {
                return !1
            }

            function g(e) {
                let t = !1,
                    r = f(e.guildId);
                return "GUILD_ROLE_DELETE" === e.type && (t = r.removeRoleFromSearchState(e.roleId)), r.rebuildAllMembers() || t
            }

            function p(e) {
                let {
                    guildId: t,
                    userId: r
                } = e;
                return f(t).updateMembersByMemberIds([r])
            }

            function b(e) {
                let t = !1;
                return e.guilds.forEach(e => {
                    let {
                        id: r,
                        members: n
                    } = e;
                    t = f(r).updateServerMembers(n) || t
                }), t
            }
            class T extends n.default.Store {
                static #e = this.displayName = "MemberSafetyStore";
                initialize() {
                    this.waitFor(a.default, u.default, l.default)
                }
                isInitialized(e) {
                    return f(e).isInitialized
                }
                getMembersByGuildId(e, t) {
                    return f(e).getMembersByIndex(t)
                }
                getMembersCountByGuildId(e, t) {
                    return f(e).countMembersByIndex(t)
                }
                getEstimatedMemberSearchCountByGuildId(e) {
                    let t = f(e),
                        r = t.searchChunkSize,
                        n = t.countMembersByIndex(t.getSearchIndex()),
                        i = t.getTotalResultsCount();
                    return null == i || i < r ? n : i
                }
                getKnownMemberSearchCountByGuildId(e) {
                    let t = f(e);
                    return t.countMembersByIndex(t.getSearchIndex())
                }
                getCurrentMemberSearchResultsByGuildId(e) {
                    let t = f(e);
                    return t.getMembersByIndex(t.getSearchIndex())
                }
                getSearchStateByGuildId(e) {
                    return f(e).getSearchState()
                }
                hasDefaultSearchStateByGuildId(e) {
                    return f(e).hasDefaultSearchState()
                }
                getPagedMembersByGuildId(e) {
                    return f(e).getPaginatedMembers()
                }
                getPaginationStateByGuildId(e) {
                    return f(e).getPaginationState()
                }
                getElasticSearchPaginationByGuildId(e) {
                    return f(e).getElasticSearchPagination()
                }
                getEnhancedMember(e, t) {
                    return f(e).getMember(t)
                }
                getNewMemberTimestamp(e) {
                    return f(e).getNewMemberTimestamp()
                }
                getLastRefreshTimestamp(e) {
                    return f(e).lastRefreshTimestamp
                }
                getLastCursorTimestamp(e) {
                    return f(e).lastCursorTimestamp
                }
            }
            var C = new T(i.default, {
                CONNECTION_OPEN: function(e) {
                    return E ? E = !1 : ! function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        for (let t in S) M(t, e)
                    }(!0), b(e)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    return b(e)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e;
                    if (null == t || null == s.default.getGuild(t)) return !1;
                    E = !0;
                    let n = f(t),
                        i = [];
                    for (let e of r) null == n.getMember(e.userId) && i.push(e);
                    return i.length > 0 && n.updateClientMembers(i)
                },
                CACHE_LOADED: function(e) {
                    let {
                        guildMembers: t
                    } = e, r = !1;
                    return E = !0, o.default.entries(t).forEach(e => {
                        let [t, n] = e;
                        r = f(t).updateClientMembers(Object.values(n)) || r
                    }), r
                },
                PASSIVE_UPDATE_V1: function(e) {
                    let {
                        members: t,
                        guildId: r
                    } = e;
                    return null != t && f(r).updateServerMembers(t)
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e, r = f(t.id);
                    M(t.id, r.isInitialized)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    M(t)
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e;
                    return f(t).updateServerMembers(r)
                },
                GUILD_MEMBER_ADD: I,
                GUILD_MEMBER_UPDATE: I,
                GUILD_MEMBER_UPDATE_LOCAL: function(e) {
                    let {
                        guildId: t
                    } = e, r = a.default.getId();
                    return f(t).updateMembersByMemberIds([r])
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        user: r
                    } = e;
                    return f(t).removeMember(r.id)
                },
                GUILD_ROLE_UPDATE: g,
                GUILD_ROLE_DELETE: g,
                GUILD_MEMBER_PROFILE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        guildMember: r
                    } = e;
                    return f(t).updateMembersByMemberIds([r.user.id])
                },
                GUILD_ROLE_MEMBER_REMOVE: p,
                GUILD_ROLE_MEMBER_ADD: p,
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e;
                    if (null == r || 0 === r.length) return !1;
                    let n = f(t),
                        i = r.reduce((e, t) => {
                            if (null != t.member) {
                                let r = t.member.user.id;
                                e.push(r)
                            }
                            return e
                        }, []);
                    return n.updateMembersByMemberIds(i)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        addedMembers: r
                    } = e;
                    if (null == r || 0 === r.length) return !1;
                    let n = f(t),
                        i = r.reduce((e, t) => {
                            let r = t.userId;
                            return e.push(r), e
                        }, []);
                    return n.updateMembersByMemberIds(i)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e;
                    if (null == r || 0 === r.length) return !1;
                    let n = f(t),
                        i = r.reduce((e, t) => {
                            let r = t.userId;
                            return e.push(r), e
                        }, []);
                    return n.updateMembersByMemberIds(i)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        guildId: t,
                        threads: r
                    } = e, n = Object.values(r);
                    if (0 === n.length) return !1;
                    let i = f(t),
                        a = n.reduce((e, t) => {
                            if (null != t.owner) {
                                let r = t.owner.user.id;
                                e.push(r)
                            }
                            return e
                        }, []);
                    return i.updateMembersByMemberIds(a)
                },
                INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return f(t).initialize()
                },
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return f(t).refreshNewMembersAndSearchResults()
                },
                MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
                    let {
                        guildId: t,
                        pagination: r
                    } = e, [n] = f(t).updatePaginationState(r);
                    return n
                },
                MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
                    let {
                        guildId: t,
                        continuationToken: r
                    } = e;
                    return f(t).updatePaginationToken(r)
                },
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        searchState: r
                    } = e;
                    return f(t).updateSearchState(r)
                },
                FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        memberSupplementals: r
                    } = e, n = (0, _.syncMemberSupplemental)(t, r);
                    return n && f(t).updateMembersByMemberIds(r.map(e => e.userId)), n
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
                    let t, r, {
                            guildId: n,
                            members: i,
                            total_result_count: a
                        } = e,
                        u = f(n),
                        {
                            memberIds: s,
                            memberSupplementals: l
                        } = i.reduce((e, t) => {
                            let {
                                member: r,
                                source_invite_code: n,
                                join_source_type: i,
                                inviter_id: a
                            } = t, u = r.user;
                            return e.memberIds.push(u.id), e.memberSupplementals.push({
                                userId: u.id,
                                sourceInviteCode: n,
                                joinSourceType: i,
                                inviterId: a
                            }), e
                        }, {
                            memberIds: [],
                            memberSupplementals: []
                        }),
                        o = (0, _.syncMemberSupplemental)(n, l);
                    (0, h.registerFetchedSupplementals)(n, s);
                    let d = u.updateSearchedMembersByMemberIds(s);
                    i.length > 0 && (t = i[0], r = i[i.length - 1]);
                    let [E] = u.updatePaginationState({
                        totalResultsCount: a,
                        elasticSearchCursor: {
                            before: (0, c.createMemberSearchCursor)({
                                joinedAt: t?.member?.joined_at,
                                userId: t?.member?.user.id ?? m.EMPTY_STRING_USER_ID
                            }),
                            after: (0, c.createMemberSearchCursor)({
                                joinedAt: r?.member?.joined_at,
                                userId: r?.member?.user.id ?? m.EMPTY_STRING_USER_ID
                            })
                        }
                    }, !1);
                    return o || d || E
                },
                MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function(e) {
                    let {
                        guildId: t,
                        userIds: r
                    } = e;
                    return f(t).updateMembersByMemberIds(r)
                }
            })
        },
        233300: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getMemberSupplementalByGuildId: function() {
                    return a
                },
                syncMemberSupplemental: function() {
                    return u
                }
            });
            var n = r("661395");
            let i = {};

            function a(e) {
                return null == i[e] && (i[e] = {}), i[e]
            }

            function u(e, t) {
                if (0 === t.length) return !1;
                let r = a(e);
                return t.forEach(e => {
                    let t = r[e.userId],
                        i = e.joinSourceType ?? t?.joinSourceType ?? null;
                    (null == i || i === n.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (i = n.JoinSourceType.INVITE), r[e.userId] = {
                        userId: e.userId,
                        sourceInviteCode: e.sourceInviteCode ?? t?.sourceInviteCode ?? null,
                        joinSourceType: i,
                        inviterId: e.inviterId ?? t?.inviterId ?? null,
                        integrationType: e.integrationType ?? t?.integrationType ?? null
                    }
                }), !0
            }
        },
        763217: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getSortValueForMember: function() {
                    return a
                }
            });
            var n = r("589823"),
                i = r("389634");

            function a(e, t) {
                let r = (0, n.getJoinedAtTimestamp)(e.joinedAt);
                switch (t) {
                    case i.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC:
                        return r;
                    case i.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC:
                        return -r;
                    case i.OrderBy.ORDER_BY_USER_ID_ASC:
                        return parseInt(e.userId);
                    case i.OrderBy.ORDER_BY_USER_ID_DESC:
                        return -parseInt(e.userId);
                    default:
                        return -r
                }
            }
        },
        43022: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                completeNewMemberAction: function() {
                    return p
                },
                fetchGuildHomeSettings: function() {
                    return f
                },
                fetchNewMemberActions: function() {
                    return M
                },
                getBlockForChannelDeletion: function() {
                    return b
                },
                selectHomeResourceChannel: function() {
                    return I
                },
                selectNewMemberActionChannel: function() {
                    return g
                }
            });
            var n = r("454836"),
                i = r("312916"),
                a = r("389920"),
                u = r("841708"),
                s = r("911533"),
                l = r("553766"),
                o = r("731865"),
                d = r("328470"),
                c = r("84819"),
                _ = r("844229"),
                h = r("87571"),
                m = r("426143"),
                E = r("913897"),
                S = r("467006");
            let f = async e => {
                i.default.dispatch({
                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                    guildId: e
                });
                try {
                    let t = await n.default.get({
                            url: S.Endpoints.GUILD_HOME_SETTINGS(e),
                            oldFormErrors: !0
                        }),
                        r = (0, h.settingsFromServer)(t.body);
                    return i.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                        guildId: e,
                        homeSettings: r
                    }), r
                } catch (t) {
                    i.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, M = async e => {
                if (!s.default.isFullServerPreview(e)) {
                    i.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await n.default.get({
                                url: S.Endpoints.GUILD_MEMBER_ACTIONS(e),
                                oldFormErrors: !0
                            }),
                            r = (0, h.actionsFromServer)(t.body);
                        return i.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                            guildId: e,
                            memberActions: r
                        }), r
                    } catch (t) {
                        i.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                            guildId: e
                        })
                    }
                }
            }, I = function(e, t) {
                let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (i.default.dispatch({
                        type: "SELECT_HOME_RESOURCE_CHANNEL",
                        guildId: e,
                        channelId: t
                    }), null == t) return;
                let n = o.default.getChannel(t),
                    h = _.default.getResourceForChannel(e, t);
                null != e && !s.default.isFullServerPreview(e) && null != n && null != h && d.default.track(S.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: n.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), r && (0, l.transitionToChannel)(t), a.default.jumpToMessage({
                    channelId: t,
                    messageId: c.default.castChannelIdAsMessageId(t),
                    flash: !1,
                    jumpType: u.JumpTypes.INSTANT
                })
            }, g = (e, t) => {
                i.default.dispatch({
                    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                    guildId: e,
                    channelId: t
                });
                let r = o.default.getChannel(t),
                    n = _.default.getActionForChannel(e, t);
                null != e && !s.default.isFullServerPreview(e) && null != r && null != n && d.default.track(S.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: r.id,
                    server_guide_channel_type: "member action",
                    channel_action_type: n.actionType
                }), (0, l.transitionToChannel)(t)
            }, p = (e, t) => {
                if (i.default.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: t
                    }), s.default.isFullServerPreview(e)) return;
                let r = o.default.getChannel(t),
                    a = _.default.getActionForChannel(e, t);
                if (null != r && null != a) {
                    let t = c.default.keys(m.default.getCompletedActions(e) ?? {}),
                        n = _.default.getNewMemberActions(e) ?? [];
                    d.default.track(S.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: r.guild_id,
                        channel_id: r.id,
                        channel_action_type: a.actionType,
                        has_completed_all: n.reduce((e, r) => e && t.includes(r.channelId), !0)
                    })
                }
                n.default.post({
                    url: S.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
                })
            };
            async function b(e, t) {
                if (null == e || !(0, E.canSeeOnboardingHome)(e)) return !1;
                let r = _.default.getSettings(e);
                return r === _.NO_SETTINGS && (await f(e), r = _.default.getSettings(e)), r !== _.NO_SETTINGS && null != r && (null != r.newMemberActions && null != r.newMemberActions.find(e => e.channelId === t) ? "todo" : null != r.resourceChannels && null != r.resourceChannels.find(e => e.channelId === t) && "resource")
            }
        },
        87571: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                NEW_MEMBER_ACTION_MAX: function() {
                    return h
                },
                NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
                    return _
                },
                NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
                    return c
                },
                NewMemberActionTypes: function() {
                    return i
                },
                RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
                    return S
                },
                RESOURCE_CHANNEL_MAX: function() {
                    return f
                },
                RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
                    return E
                },
                RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
                    return m
                },
                WELCOME_MESSAGE_MAX_LENGTH: function() {
                    return d
                },
                WELCOME_MESSAGE_MIN_LENGTH: function() {
                    return o
                },
                actionsFromServer: function() {
                    return b
                },
                isChannelValidForNewMemberAction: function() {
                    return D
                },
                isChannelValidForResourceChannel: function() {
                    return A
                },
                isSettingsEmpty: function() {
                    return C
                },
                isSettingsValid: function() {
                    return R
                },
                isWelcomeMessageEmpty: function() {
                    return T
                },
                newMemberActionFromServer: function() {
                    return M
                },
                resourceChannelFromServer: function() {
                    return I
                },
                settingsFromServer: function() {
                    return g
                },
                settingsToServer: function() {
                    return p
                }
            });
            var n, i, a = r("731865"),
                u = r("370275"),
                s = r("694574"),
                l = r("467006");
            let o = 7,
                d = 300,
                c = 7,
                _ = 60,
                h = 5,
                m = 1,
                E = 30,
                S = 200,
                f = 7;

            function M(e) {
                return {
                    channelId: e.channel_id,
                    actionType: e.action_type,
                    title: e.title,
                    description: e.description,
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: e.icon ?? null
                }
            }

            function I(e) {
                return {
                    channelId: e.channel_id,
                    title: e.title,
                    description: e.description ?? "",
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: e.icon ?? null
                }
            }

            function g(e) {
                if (null == e) return null;
                let {
                    welcome_message: t,
                    new_member_actions: r,
                    resource_channels: n,
                    enabled: i
                } = e, s = {
                    authorIds: t.author_ids,
                    message: t.message
                }, l = r.filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channel_id))).map(M);
                return {
                    welcomeMessage: s,
                    newMemberActions: l,
                    resourceChannels: n.filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channel_id))).map(I),
                    enabled: i
                }
            }

            function p(e, t) {
                if (null == t) return null;
                let {
                    welcomeMessage: r,
                    newMemberActions: n,
                    resourceChannels: i,
                    enabled: s
                } = t, l = {
                    author_ids: r?.authorIds ?? [],
                    message: r?.message ?? ""
                }, o = (n ?? []).filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channelId))).map(e => ({
                    channel_id: e.channelId,
                    action_type: e.actionType,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: e.emoji?.id ?? void 0,
                        name: e.emoji?.name ?? void 0,
                        animated: e.emoji?.animated ?? void 0
                    },
                    icon: e.icon ?? void 0
                }));
                return {
                    guild_id: e,
                    welcome_message: l,
                    new_member_actions: o,
                    resource_channels: (i ?? []).filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channelId))).map(e => ({
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: e.emoji?.id ?? void 0,
                            name: e.emoji?.name ?? void 0,
                            animated: e.emoji?.animated ?? void 0
                        },
                        icon: e.icon ?? void 0
                    })),
                    enabled: s
                }
            }(n = i || (i = {}))[n.VIEW = 0] = "VIEW", n[n.CHAT = 1] = "CHAT";
            let b = e => {
                if (null == e) return null;
                let t = {};
                for (let r in e.channel_actions) t[r] = e.channel_actions[r].completed;
                return t
            };

            function T(e) {
                return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
            }

            function C(e) {
                return null == e || !!T(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function R(e) {
                return null != e && (!!C(e) || e.welcomeMessage?.message != null && !(e.welcomeMessage.message.length < o) && e.welcomeMessage?.authorIds != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function A(e) {
                return e.type === l.ChannelTypes.GUILD_TEXT && !s.default.canEveryoneRole(l.Permissions.SEND_MESSAGES, e) && s.default.canEveryoneRole(l.Permissions.VIEW_CHANNEL, e)
            }

            function D(e) {
                switch (e.type) {
                    case l.ChannelTypes.GUILD_TEXT:
                    case l.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case l.ChannelTypes.GUILD_FORUM:
                    case l.ChannelTypes.GUILD_MEDIA:
                        return s.default.canEveryoneRole(l.Permissions.VIEW_CHANNEL, e);
                    default:
                        return !1
                }
            }
        },
        426143: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("661223"),
                i = r("312916");
            let a = {},
                u = {},
                s = new Set;
            class l extends n.default.Store {
                static #e = this.displayName = "GuildOnboardingMemberActionStore";
                getCompletedActions(e) {
                    return null == e ? null : u[e]
                }
                hasCompletedActionForChannel(e, t) {
                    let r = this.getCompletedActions(e);
                    return null != r && null != r[t]
                }
                getState(e) {
                    return null == e ? {} : {
                        completedActions: u[e],
                        loading: s.has(e)
                    }
                }
            }
            var o = new l(i.default, {
                GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    s.add(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        memberActions: t,
                        guildId: r
                    } = e;
                    if (null == t) {
                        u[r] = a;
                        return
                    }
                    u[r] = t, s.delete(r)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    s.delete(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                },
                COMPLETE_NEW_MEMBER_ACTION: function(e) {
                    let {
                        guildId: t,
                        channelId: r
                    } = e;
                    u = {
                        ...u,
                        [t]: {
                            ...u[t],
                            [r]: !0
                        }
                    }
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    if (null == u[t.id]) return !1;
                    delete u[t.id]
                }
            })
        },
        149298: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                },
                moveItemFromTo: function() {
                    return s
                }
            }), r("653041");
            var n = r("392711"),
                i = r.n(n);
            let a = new(r("841869")).default("DragAndDropUtils");

            function u(e) {
                let {
                    oldOrdering: t,
                    newOrdering: r,
                    idGetter: n,
                    existingPositionGetter: i,
                    ascending: u = !0
                } = e, s = r.length;
                if (t.length !== s) return a.warn("Arrays are not of the same length!", t, r), [];
                let l = t.map(n).sort().join(":"),
                    o = r.map(n).sort().join(":");
                if (l !== o) return a.warn("Object IDs in the old ordering and the new ordering are not the same.", l, o), [];
                let d = {};
                for (let e = 0; e < s; e++) d[n(t[e])] = i(t[e]);
                let c = [];
                for (let e = 0; e < s; e++) {
                    let t = n(r[e]),
                        a = d[t],
                        l = u ? e : s - 1 - e;
                    (a !== l || i(r[e]) !== l) && c.push({
                        id: t,
                        position: l
                    })
                }
                return !u && c.reverse(), c
            }

            function s(e, t, r) {
                let n = e[t],
                    i = [...e];
                return i.splice(t, 1), i.splice(r, 0, n), i
            }
            var l = {
                moveItemFromTo: s,
                calculatePositionDeltas: u,
                getPositionUpdates: function(e) {
                    let {
                        objectArray: t,
                        fromPosition: r,
                        toPosition: n,
                        idGetter: a,
                        existingPositionGetter: l,
                        ascending: o = !0
                    } = e;
                    !Array.isArray(t) && (t = i().values(t));
                    let d = s(t, r, n);
                    return u({
                        oldOrdering: t,
                        newOrdering: d,
                        idGetter: a,
                        existingPositionGetter: l,
                        ascending: o
                    })
                }
            }
        },
        689028: function(e, t, r) {
            "use strict";

            function n(e, t) {
                let [, r] = e, [, n] = t;
                return r === n
            }
            r.r(t), r.d(t, {
                isVersionEqual: function() {
                    return n
                }
            })
        },
        233314: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DoorExitIcon: function() {
                    return u
                }
            });
            var n = r("735250");
            r("470079");
            var i = r("600186"),
                a = r("11768");
            let u = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...l
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M9 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z",
                        className: s
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M2.75 3.02A3 3 0 0 1 5 2h10a3 3 0 0 1 3 3v7.64c0 .44-.55.7-.95.55a3 3 0 0 0-3.17 4.93l.02.03a.5.5 0 0 1-.35.85h-.05a.5.5 0 0 0-.5.5 2.5 2.5 0 0 1-3.68 2.2l-5.8-3.09A3 3 0 0 1 2 16V5a3 3 0 0 1 .76-1.98Zm1.3 1.95A.04.04 0 0 0 4 5v11c0 .36.2.68.49.86l5.77 3.08a.5.5 0 0 0 .74-.44V8.02a.5.5 0 0 0-.32-.46l-6.63-2.6Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15.3 16.7a1 1 0 0 1 1.4-1.4l4.3 4.29V16a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.59l-4.3-4.3Z",
                        className: s
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=16294.ecb39363579d8fea251c.js.map