(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["2153"], {
        493910: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MemberSafetySecondaryIndex: function() {
                    return n
                },
                GuildMemberSafetyMembers: function() {
                    return S
                }
            });
            var i, n, a = r("969176"),
                u = r.n(a),
                s = r("407846"),
                l = r("26989"),
                o = r("697218"),
                h = r("490931"),
                d = r("159132");
            let m = Date.now();

            function c(e) {
                let t = [e.isCurrentGuildMemberByTimestamp ? n.CURRENT_GUILD_MEMBER : n.NEW_GUILD_MEMBER];
                return e.isIncludedInSearchResults && t.push(n.INCLUDED_IN_SEARCH_RESULTS), t
            }

            function _(e) {
                return -e.joinedAtTimestamp
            }

            function M() {
                return new s.default(c, _)
            }(i = n || (n = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", i.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", i.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
            class S {
                reset() {
                    this._membersMap.clear(), this._membersMap = M(), this.resetNewMemberTimestamp()
                }
                resetNewMemberTimestamp() {
                    this.newMemberTimestamp = Date.now() + 2e3
                }
                enhanceNewMember(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = null != e.joinedAt ? new Date(e.joinedAt) : new Date,
                        i = r.getTime(),
                        {
                            hasUnusualDmActivity: n,
                            sourceInviteCode: a,
                            joinSourceType: u,
                            inviterId: s
                        } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
                        l = {
                            hasUnusualDmActivity: n,
                            sourceInviteCode: a,
                            joinSourceType: u,
                            inviterId: s,
                            ...e,
                            isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
                            isIncludedInSearchResults: !1,
                            user: o.default.getUser(e.userId),
                            joinedAtTimestamp: i,
                            ...t
                        };
                    return l
                }
                _computeMemberSupplementals(e, t) {
                    var r;
                    let i = (0, d.getMemberSupplementalByGuildId)(this.guildId),
                        {
                            sourceInviteCode: n,
                            joinSourceType: a,
                            inviterId: u
                        } = null !== (r = i[e]) && void 0 !== r ? r : {};
                    return {
                        sourceInviteCode: null != n ? n : null,
                        joinSourceType: null != a ? a : null,
                        inviterId: null != u ? u : null,
                        hasUnusualDmActivity: function(e) {
                            if (null == e) return !1;
                            let t = new Date(e).getTime();
                            return t >= m - h.UNUSUAL_DM_COMPARISON_DELTA
                        }(t)
                    }
                }
                createMember(e) {
                    return this._membersMap.set(e.userId, e)
                }
                updateMember(e, t) {
                    var r;
                    if (null == t) return this._membersMap.set(e.userId, e);
                    let i = {
                            ...e
                        },
                        n = {
                            ...t
                        },
                        a = !1,
                        {
                            sourceInviteCode: s,
                            hasUnusualDmActivity: l,
                            joinSourceType: o,
                            inviterId: h
                        } = this._computeMemberSupplementals(i.userId, null !== (r = n.unusualDMActivityUntil) && void 0 !== r ? r : i.unusualDMActivityUntil);
                    for (let e in i.sourceInviteCode !== s && (n.sourceInviteCode = s), i.hasUnusualDmActivity !== l && (n.hasUnusualDmActivity = l), i.joinSourceType !== o && (n.joinSourceType = o), i.inviterId !== h && (n.inviterId = h), n) {
                        let t = n[e],
                            r = i[e];
                        !u(t, r) && (i[e] = t, a = !0)
                    }
                    return this._membersMap.set(i.userId, i) || a
                }
                upsertMember(e, t) {
                    let r = this.getMemberByUserId(e);
                    if (null == r) {
                        let t = l.default.getTrueMember(this.guildId, e);
                        if (null == t) return !1;
                        r = this.enhanceNewMember(t)
                    }
                    return this.updateMember(r, t)
                }
                removeMember(e) {
                    return this._membersMap.delete(e)
                }
                syncFromGuildMemberStore(e, t) {
                    let r = l.default.getTrueMember(e, t);
                    return null == r ? this.removeMember(t) : this.upsertMember(t, r)
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
                constructor(e) {
                    this.newMemberTimestamp = Date.now() + 2e3, this.guildId = e, this._membersMap = M()
                }
            }
        },
        637240: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GuildMemberSafetyPageStore: function() {
                    return o
                }
            });
            var i = r("917351"),
                n = r("26989"),
                a = r("697218"),
                u = r("493910"),
                s = r("691386"),
                l = r("936763");
            class o {
                getSearchIndex() {
                    let e = null == this._search || this._search.hasDefaultQuery;
                    return e ? u.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER : u.MemberSafetySecondaryIndex.INCLUDED_IN_SEARCH_RESULTS
                }
                initialize() {
                    if (this._initialized) {
                        this.lastCursorTimestamp = Date.now();
                        return
                    }
                    this._initialized = !0, this._search = new l.GuildMemberSafetySearch(this.guildId), this._members = new u.GuildMemberSafetyMembers(this.guildId);
                    let e = n.default.getMemberIds(this.guildId);
                    for (let t of e) this._members.syncFromGuildMemberStore(this.guildId, t);
                    this._pagination = new s.GuildMemberSafetyPagination(this.guildId, this._members.values(this.getSearchIndex()))
                }
                get isInitialized() {
                    return this._initialized
                }
                reset() {
                    var e, t, r;
                    let i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._initialized && (null === (e = this._members) || void 0 === e || e.reset(), null === (t = this._pagination) || void 0 === t || t.reset(), null === (r = this._search) || void 0 === r || r.reset(), i && this.initialize())
                }
                get searchChunkSize() {
                    return null != this._pagination && this._initialized ? this._pagination.searchChunkSize : 0
                }
                getMember(e) {
                    var t;
                    return null != this._members && this._initialized ? null !== (t = this._members.getMemberByUserId(e)) && void 0 !== t ? t : null : null
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
                    if (null == this._search) return [!1, !1];
                    let r = this._search.hasDefaultQuery;
                    if (r) return [!1, !1];
                    let i = {
                            ...e,
                            ...t
                        },
                        n = this._search.isMemberIncludedInSearchResults(i),
                        a = n !== e.isIncludedInSearchResults;
                    return [n, a]
                }
                updatePaginationChunks() {
                    if (null == this._pagination || null == this._members || !this._initialized) return !1;
                    let e = this._members.values(this.getSearchIndex());
                    return this._pagination.updateSortedMembers(e)
                }
                removeMember(e) {
                    if (null == this._members || !this._initialized) return !1;
                    let t = this._members.getMemberByUserId(e);
                    if (null == t) return !1;
                    let r = this._members.removeMember(e);
                    return r ? this.updatePaginationChunks() : r
                }
                _rawUpdateMember(e, t) {
                    if (null == this._members) return [!1, !1];
                    let r = !1,
                        i = this._members.getMemberByUserId(e);
                    if (null == i) {
                        r = !0;
                        let a = n.default.getTrueMember(this.guildId, e);
                        if (null == a) return [!1, !1];
                        i = this._members.enhanceNewMember(a, t)
                    }
                    if (null == t.isIncludedInSearchResults) {
                        let [e, n] = this._getIsIncludedInSearch(i, t);
                        n && (r = !0, t.isIncludedInSearchResults = e)
                    } else t.isIncludedInSearchResults !== i.isIncludedInSearchResults && (r = !0);
                    let a = this._members.updateMember(i, t);
                    return !r && (r = this._checkUpdatesForPaginationUpdate(i, t)), [r, a]
                }
                updateMember(e, t) {
                    if (null == this._members || !this._initialized) return !1;
                    let [r, i] = this._rawUpdateMember(e, t);
                    return r ? this.updatePaginationChunks() : i
                }
                updateClientMembers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (null == this._members || !this._initialized) return !1;
                    let r = !1,
                        i = !1;
                    for (let n of e) {
                        let [e, a] = this._rawUpdateMember(n.userId, t ? {
                            ...n,
                            isIncludedInSearchResults: !0
                        } : n);
                        r = e || r, i = a || i
                    }
                    return r ? this.updatePaginationChunks() : i
                }
                updateServerMembers(e) {
                    if (null == this._members || !this._initialized) return !1;
                    let t = !1,
                        r = !1;
                    for (let i of e) {
                        let e = n.default.getTrueMember(this.guildId, i.user.id);
                        if (null == e) continue;
                        let [a, u] = this._rawUpdateMember(i.user.id, e);
                        t = a || t, r = u || r
                    }
                    return t ? this.updatePaginationChunks() : r
                }
                updateMembersByMemberIds(e) {
                    if (null == this._members || !this._initialized) return !1;
                    let t = e.reduce((e, t) => {
                        let r = n.default.getTrueMember(this.guildId, t);
                        return null != r && e.push(r), e
                    }, []);
                    return this.updateClientMembers(t)
                }
                updateSearchedMembersByMemberIds(e) {
                    if (null == this._search || null == this._members || !this._initialized) return !1;
                    let t = e.reduce((e, t) => {
                        let r = n.default.getTrueMember(this.guildId, t);
                        return null != r && e.push(r), e
                    }, []);
                    return this.updateClientMembers(t, this._search.requiresUsernameMatch)
                }
                rebuildAllMembers() {
                    if (null == this._members || !this._initialized) return !1;
                    let e = n.default.getMembers(this.guildId);
                    return this.updateClientMembers(e)
                }
                _scheduleRefresh(e) {
                    this.lastRefreshTimestamp = e, this.lastCursorTimestamp = Date.now(), null != this._lastRefreshTimer && clearTimeout(this._lastRefreshTimer), this._lastRefreshTimer = setTimeout(() => {
                        this._lastRefreshTimer = null, this.lastRefreshTimestamp = 0
                    }, 3e3)
                }
                refreshNewMembersAndSearchResults() {
                    if (null == this._search || null == this._members || !this._initialized) return !1;
                    let e = Number(Date.now()),
                        t = (0, i.cloneDeep)(this._members.values(u.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)),
                        r = !1;
                    for (let i of t) r = this._members.updateMember(i, {
                        isCurrentGuildMemberByTimestamp: !0,
                        refreshTimestamp: e,
                        user: a.default.getUser(i.userId)
                    }) || r;
                    this._members.resetNewMemberTimestamp(), this.resetSearchState() && (r = !1);
                    let [n, s] = this.updatePaginationState({
                        currentPage: 1
                    });
                    return s && (r = !1), this._scheduleRefresh(e), r && this.updatePaginationChunks(), !0
                }
                getNewMemberTimestamp() {
                    return null != this._members && this._initialized ? this._members.newMemberTimestamp : 0
                }
                updateSearchState(e) {
                    if (null == this._members || null == this._search || !this._initialized) return !1;
                    let t = !!this._search.hasDefaultQuery,
                        r = this._search.updateSearchState(e);
                    if (this._search.hasDefaultQuery && t) return this.updatePaginationChunks();
                    let n = (0, i.cloneDeep)(this._members.values(u.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)),
                        a = t !== this._search.hasDefaultQuery;
                    for (let e of n) {
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
                    return null != this._search && this._initialized ? this._search.getSearchState() : (0, l.getDefaultSearchState)()
                }
                hasDefaultSearchState() {
                    return null == this._search || !this._initialized || this._search.hasDefaultQuery
                }
                resetSearchState() {
                    if (null == this._search || !this._initialized) return !1;
                    let e = this._search.resetSearchState();
                    return !!e && this.updatePaginationChunks()
                }
                updatePaginationState(e) {
                    return null != this._pagination && this._initialized ? (this.lastRefreshTimestamp = 0, this._pagination.updatePaginationState(e)) : [!1, !1]
                }
                getPaginationState() {
                    return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, s.createDefaultMemberSafetyPaginationState)()
                }
                getPaginatedMembers() {
                    return null != this._pagination && this._initialized ? [this._pagination.paginatedMembers, this._pagination.version] : [{}, 0]
                }
                calculateNewContinuationToken(e) {
                    return null != this._pagination && this._initialized ? this._pagination.calculateNewContinuationToken(e) : null
                }
                updatePaginationToken(e) {
                    return null != this._pagination && !!this._initialized && this._pagination.updatePaginationToken(e)
                }
                getElasticSearchPagination() {
                    return null != this._pagination && this._initialized ? this._pagination.getElasticSearchPagination() : null
                }
                constructor(e) {
                    this.lastRefreshTimestamp = 0, this.lastCursorTimestamp = Date.now(), this._lastRefreshTimer = null, this.guildId = e, this._initialized = !1, this._members = null, this._pagination = null, this._search = null
                }
            }
        },
        691386: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DEFAULT_SEARCH_CHUNK_LIMIT: function() {
                    return l
                },
                PAGINATION_PAGE_SIZE_OPTIONS: function() {
                    return o
                },
                createDefaultMemberSafetyPaginationState: function() {
                    return h
                },
                GuildMemberSafetyPagination: function() {
                    return d
                }
            });
            var i, n, a = r("525065"),
                u = r("26989"),
                s = r("490931");
            let l = 250,
                o = [12, 25, 50, 100];

            function h() {
                return {
                    pageSize: o[0],
                    currentPage: 1,
                    continuationToken: null
                }
            }(i = n || (n = {}))[i.FORWARD = 1] = "FORWARD", i[i.BACKWARD = -1] = "BACKWARD";
            class d {
                reset() {
                    this._paginationState = h(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
                }
                _initPaginationFromRawMembers(e) {
                    let t = [],
                        r = e.reduce((e, r, i) => (e = this._reduceMemberIdsToPaginationChunks(e, r.userId, i), t.push(r.userId), e), {});
                    return [t, r]
                }
                _buildPaginationFromMemberIds(e) {
                    let t = e.reduce(this._reduceMemberIdsToPaginationChunks, {});
                    return t
                }
                _rebuildPaginationChunksFromStoredMembers() {
                    return this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds), this._version += 1, !0
                }
                calculateNewContinuationToken(e) {
                    var t, r, i;
                    let n = null !== (t = a.default.getMemberCount(this.guildId)) && void 0 !== t ? t : this._sortedMemberIds.length,
                        u = this._sortedMemberIds.length - 1,
                        s = this._sortedMemberIds[u],
                        l = Math.min(this.searchChunkSize, u);
                    let o = null != (i = e).totalResultsCount ? i.totalResultsCount : i.currentPage * i.pageSize,
                        h = null !== (r = this._sortedMemberIds[o - 1]) && void 0 !== r ? r : s;
                    if (null == this._paginationState.continuationToken) return o < l ? this._paginationState.continuationToken : h;
                    let d = this._sortedMemberIds.findIndex(e => e === this._paginationState.continuationToken);
                    return -1 === d ? h : o > n ? s : d - o >= 0 ? this._paginationState.continuationToken : Math.ceil(o / l) > Math.ceil(d / l) ? h : this._paginationState.continuationToken
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
                        pageSize: i
                    } = this._paginationState, n = e * i <= this._sortedMemberIds.length;
                    return n ? Math.max(Math.ceil(i / e * (null != t ? t : r)), 1) : 1
                }
                updatePaginationState(e) {
                    let t = !1,
                        r = null != e.pageSize && e.pageSize !== this._paginationState.pageSize;
                    if (r) {
                        var i;
                        t = !0, e.currentPage = this._calculateNewPageFromPageSizeChange(null !== (i = e.pageSize) && void 0 !== i ? i : this._paginationState.pageSize, e.currentPage)
                    }
                    return this._paginationState = {
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
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.BACKWARD,
                        r = e;
                    r < this._sortedMemberIds.length && (r = this._sortedMemberIds.length - 1), r < 0 && (r = 0);
                    let i = this._sortedMemberIds[e],
                        a = u.default.getMember(this.guildId, i);
                    for (; null == a;) {
                        var s;
                        if ((e += t) < 0 || e >= this._sortedMemberIds.length) break;
                        i = this._sortedMemberIds[e], (null === (s = a = u.default.getMember(this.guildId, i)) || void 0 === s ? void 0 : s.joinedAt) == null && (a = null)
                    }
                    return a
                }
                getElasticSearchPagination() {
                    let {
                        pageSize: e,
                        currentPage: t
                    } = this._paginationState, r = this.searchChunkSize, i = Math.floor(e * t / this.searchChunkSize) + 1, a = this.searchChunkSize - 1, u = Math.min(i * a, this._sortedMemberIds.length - 1), l = this._findMember(u, n.BACKWARD), o = Math.max(u - this.searchChunkSize, 0), h = this._findMember(o, n.FORWARD);
                    return {
                        limit: r,
                        after: (0, s.createMemberSearchCursor)(l),
                        before: (0, s.createMemberSearchCursor)(h)
                    }
                }
                get paginatedMembers() {
                    return this._cachedPaginationChunks
                }
                get version() {
                    return this._version
                }
                constructor(e, t) {
                    this.searchChunkSize = l, this._reduceMemberIdsToPaginationChunks = (e, t, r) => {
                        let i = Math.floor(r / this._paginationState.pageSize) + 1;
                        return null == e[i] && (e[i] = []), e[i].push(t), e
                    }, this.guildId = e, this._paginationState = h(), this._version = 0;
                    let [r, i] = this._initPaginationFromRawMembers(t);
                    this._sortedMemberIds = r, this._cachedPaginationChunks = i, this._version += 1
                }
            }
        },
        936763: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getDefaultSearchState: function() {
                    return o
                },
                GuildMemberSafetySearch: function() {
                    return m
                }
            });
            var i = r("448105"),
                n = r.n(i),
                a = r("969176"),
                u = r.n(a),
                s = r("509"),
                l = r("770115");

            function o() {
                return {
                    query: "",
                    requireUnusualDmActivity: !1,
                    requireCommunicationDisabled: !1,
                    selectedRoleIds: new Set
                }
            }
            let h = Object.freeze(o());

            function d(e, t) {
                return null != e && (!!(e.toLowerCase().includes(t.toLowerCase()) || n(e.toLowerCase(), t.toLowerCase())) || !1)
            }
            class m {
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
                    }, this.hasDefaultQuery = u(this._searchState, h), !0
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
                        requireCommunicationDisabled: i,
                        selectedRoleIds: n
                    } = this._searchState;
                    if (t.length > 0 && ! function(e, t) {
                            if ("" === t.trim()) return !1;
                            let [r, i] = (0, l.splitQuery)(t);
                            for (let t of i)
                                if (e.userId === t) return !0;
                            for (let t of r)
                                if (d(e.nick, t)) return !0;
                            if (null == e.user) return !1;
                            let {
                                globalName: n,
                                username: a
                            } = e.user;
                            for (let e of r)
                                if (d(a, e)) return !0;
                            for (let e of r)
                                if (d(n, e)) return !0;
                            return !1
                        }(e, t)) return !1;
                    if (n.size > 0) {
                        var a, u;
                        if (a = e, !(0 !== (u = n).size && Array.from(u).every(e => a.roles.includes(e)))) return !1
                    }
                    if (r || i) return !!(r && e.hasUnusualDmActivity || i && (0, s.isMemberCommunicationDisabled)(e)) || !1;
                    return !0
                }
                constructor(e) {
                    this.guildId = e, this._searchState = o(), this.hasDefaultQuery = !0
                }
            }
        },
        770115: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                splitQuery: function() {
                    return n
                }
            });
            var i = r("389153");

            function n(e) {
                let t = e.split(",").map(e => e.trim()),
                    r = [],
                    n = [];
                return t.forEach(e => {
                    (0, i.isSnowflake)(e) ? r.push(e): n.push(e)
                }), [n, r]
            }
        },
        490931: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                UNUSUAL_DM_COMPARISON_DELTA: function() {
                    return i
                },
                createMemberSearchCursor: function() {
                    return n
                }
            });
            let i = 1728e5;

            function n(e) {
                if (null == e || null == e.joinedAt) return null;
                let t = new Date(e.joinedAt).getTime();
                return {
                    guild_joined_at: t,
                    user_id: e.userId
                }
            }
        },
        178406: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return T
                }
            });
            var i = r("446674"),
                n = r("913144"),
                a = r("271938"),
                u = r("26989"),
                s = r("305961"),
                l = r("697218"),
                o = r("449008"),
                h = r("637240"),
                d = r("159132"),
                m = r("835257");
            let c = !1,
                _ = {};

            function M(e) {
                return null == _[e] && (_[e] = new h.GuildMemberSafetyPageStore(e)), _[e]
            }

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = M(e);
                r.reset(t)
            }

            function f(e) {
                let {
                    guildId: t,
                    user: r
                } = e, i = M(t);
                return i.updateMembersByMemberIds([r.id])
            }

            function b(e) {
                let {
                    guildId: t
                } = e, r = M(t);
                return r.rebuildAllMembers()
            }

            function E(e) {
                let {
                    guildId: t,
                    userId: r
                } = e, i = M(t);
                return i.updateMembersByMemberIds([r])
            }

            function p(e) {
                let t = !1;
                return e.guilds.forEach(e => {
                    let {
                        id: r,
                        members: i
                    } = e, n = M(r);
                    t = n.updateServerMembers(i) || t
                }), t
            }
            class I extends i.default.Store {
                initialize() {
                    this.waitFor(a.default, u.default, l.default)
                }
                isInitialized(e) {
                    let t = M(e);
                    return t.isInitialized
                }
                getMembersByGuildId(e, t) {
                    let r = M(e);
                    return r.getMembersByIndex(t)
                }
                getMembersCountByGuildId(e, t) {
                    let r = M(e);
                    return r.countMembersByIndex(t)
                }
                getEstimatedMemberSearchCountByGuildId(e) {
                    let t = M(e),
                        r = t.getPaginationState(),
                        i = t.searchChunkSize,
                        n = t.countMembersByIndex(t.getSearchIndex());
                    return null == r.totalResultsCount || r.totalResultsCount < i ? n : r.totalResultsCount
                }
                getKnownMemberSearchCountByGuildId(e) {
                    let t = M(e);
                    return t.countMembersByIndex(t.getSearchIndex())
                }
                getCurrentMemberSearchResultsByGuildId(e) {
                    let t = M(e);
                    return t.getMembersByIndex(t.getSearchIndex())
                }
                getSearchStateByGuildId(e) {
                    let t = M(e);
                    return t.getSearchState()
                }
                hasDefaultSearchStateByGuildId(e) {
                    let t = M(e);
                    return t.hasDefaultSearchState()
                }
                getPagedMembersByGuildId(e) {
                    let t = M(e);
                    return t.getPaginatedMembers()
                }
                getPaginationStateByGuildId(e) {
                    let t = M(e);
                    return t.getPaginationState()
                }
                getElasticSearchPaginationByGuildId(e) {
                    let t = M(e);
                    return t.getElasticSearchPagination()
                }
                calculateNewContinuationToken(e, t) {
                    let r = M(e);
                    return r.calculateNewContinuationToken(t)
                }
                getEnhancedMember(e, t) {
                    let r = M(e);
                    return r.getMember(t)
                }
                getNewMemberTimestamp(e) {
                    let t = M(e);
                    return t.getNewMemberTimestamp()
                }
                getLastRefreshTimestamp(e) {
                    let t = M(e);
                    return t.lastRefreshTimestamp
                }
                getLastCursorTimestamp(e) {
                    let t = M(e);
                    return t.lastCursorTimestamp
                }
            }
            I.displayName = "MemberSafetyStore";
            let g = new I(n.default, {
                CONNECTION_OPEN: function(e) {
                    return c ? c = !1 : ! function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        for (let t in _) S(t, e)
                    }(!0), p(e)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    return p(e)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e;
                    if (null == t || null == s.default.getGuild(t)) return !1;
                    c = !0;
                    let i = M(t),
                        n = [];
                    for (let e of r) {
                        let t = i.getMember(e.userId);
                        null == t && n.push(e)
                    }
                    return n.length > 0 && i.updateClientMembers(n)
                },
                CACHE_LOADED: function(e) {
                    let {
                        guildMembers: t
                    } = e, r = !1;
                    return c = !0, Object.entries(t).forEach(e => {
                        let [t, i] = e, n = M(t);
                        r = n.updateClientMembers(Object.values(i)) || r
                    }), r
                },
                PASSIVE_UPDATE_V1: function(e) {
                    let {
                        members: t,
                        guildId: r
                    } = e;
                    if (null != t) {
                        let e = M(r);
                        return e.updateServerMembers(t)
                    }
                    return !1
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e, r = M(t.id);
                    S(t.id, r.isInitialized)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    S(t)
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e, i = M(t);
                    return i.updateServerMembers(r)
                },
                GUILD_MEMBER_ADD: f,
                GUILD_MEMBER_UPDATE: f,
                GUILD_MEMBER_UPDATE_LOCAL: function(e) {
                    let {
                        guildId: t
                    } = e, r = a.default.getId(), i = M(t);
                    return i.updateMembersByMemberIds([r])
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        user: r
                    } = e, i = M(t);
                    return i.removeMember(r.id)
                },
                GUILD_ROLE_UPDATE: b,
                GUILD_ROLE_DELETE: b,
                GUILD_MEMBER_PROFILE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        guildMember: r
                    } = e, i = M(t);
                    return i.updateMembersByMemberIds([r.user.id])
                },
                GUILD_ROLE_MEMBER_REMOVE: E,
                GUILD_ROLE_MEMBER_ADD: E,
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e;
                    if (null == r || 0 === r.length) return !1;
                    let i = M(t),
                        n = r.map(e => {
                            var t;
                            return null === (t = e.member) || void 0 === t ? void 0 : t.user.id
                        }).filter(o.isNotNullish);
                    return i.updateMembersByMemberIds(n)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        addedMembers: r
                    } = e;
                    if (null == r || 0 === r.length) return !1;
                    let i = M(t),
                        n = r.map(e => e.userId);
                    return i.updateMembersByMemberIds(n)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e;
                    if (null == r || 0 === r.length) return !1;
                    let i = M(t),
                        n = r.map(e => e.userId);
                    return i.updateMembersByMemberIds(n)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        guildId: t,
                        threads: r
                    } = e, i = Object.values(r);
                    if (0 === i.length) return !1;
                    let n = M(t),
                        a = i.map(e => {
                            var t;
                            return null === (t = e.owner) || void 0 === t ? void 0 : t.user.id
                        }).filter(o.isNotNullish);
                    return n.updateMembersByMemberIds(a)
                },
                INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
                    let {
                        guildId: t
                    } = e, r = M(t);
                    return r.initialize()
                },
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
                    let {
                        guildId: t
                    } = e, r = M(t);
                    return r.refreshNewMembersAndSearchResults()
                },
                MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
                    let {
                        guildId: t,
                        pagination: r
                    } = e, i = M(t), [n] = i.updatePaginationState(r);
                    return n
                },
                MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
                    let {
                        guildId: t,
                        continuationToken: r
                    } = e, i = M(t);
                    return i.updatePaginationToken(r)
                },
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        searchState: r
                    } = e, i = M(t);
                    return i.updateSearchState(r)
                },
                FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        memberSupplementals: r
                    } = e, i = (0, d.syncMemberSupplemental)(t, r);
                    if (i) {
                        let e = M(t);
                        e.updateMembersByMemberIds(r.map(e => e.userId))
                    }
                    return i
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: r,
                        total_result_count: i
                    } = e, n = M(t), {
                        memberIds: a,
                        memberSupplementals: u
                    } = r.reduce((e, t) => {
                        let {
                            member: r,
                            source_invite_code: i,
                            join_source_type: n,
                            inviter_id: a
                        } = t, u = r.user;
                        return e.memberIds.push(u.id), e.memberSupplementals.push({
                            userId: u.id,
                            sourceInviteCode: i,
                            joinSourceType: n,
                            inviterId: a
                        }), e
                    }, {
                        memberIds: [],
                        memberSupplementals: []
                    }), s = (0, d.syncMemberSupplemental)(t, u);
                    (0, m.registerFetchedSupplementals)(t, a);
                    let l = n.updateSearchedMembersByMemberIds(a),
                        [o] = n.updatePaginationState({
                            totalResultsCount: i
                        });
                    return s || l || o
                }
            });
            var T = g
        },
        645266: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                initializeMemberSafetyStore: function() {
                    return m
                },
                refreshMemberSafetyTimestamp: function() {
                    return c
                },
                updateMemberSafetyTablePagination: function() {
                    return _
                },
                requestNewPaginationChunk: function() {
                    return M
                },
                updateSearchState: function() {
                    return S
                },
                getMemberSupplemental: function() {
                    return f
                },
                goToMemberSafetyDashboard: function() {
                    return b
                }
            });
            var i = r("592407"),
                n = r("393414"),
                a = r("305961"),
                u = r("536999"),
                s = r("466818"),
                l = r("95429"),
                o = r("447038"),
                h = r("49111"),
                d = r("724210");
            async function m(e) {
                let t = (0, u.isInMembersSearchV2Experiment)(e, {
                    autoTrackExposure: !0
                });
                return t ? await (0, o.initializeMemberSafetyStoreV2)(e) : await (0, l.initializeMemberSafetyStoreV1)(e)
            }

            function c(e) {
                let t = (0, u.isInMembersSearchV2Experiment)(e);
                return t ? (0, o.refreshMemberSafetyTimestampV2)(e) : (0, l.refreshMemberSafetyTimestampV1)(e)
            }

            function _(e, t) {
                let r = (0, u.isInMembersSearchV2Experiment)(e);
                return r ? (0, o.updateMemberSafetyTablePaginationV2)(e, t) : (0, l.updateMemberSafetyTablePaginationV1)(e, t)
            }

            function M(e, t) {
                let r = (0, u.isInMembersSearchV2Experiment)(e);
                return r ? (0, o.requestNewPaginationChunkV2)(e, t) : (0, l.requestNewPaginationChunkV1)(e, t)
            }

            function S(e, t) {
                let r = (0, u.isInMembersSearchV2Experiment)(e);
                return r ? (0, o.updateSearchStateV2)(e, t) : (0, l.updateSearchStateV1)(e, t)
            }

            function f(e, t) {
                let r = (0, u.isInMembersSearchV2Experiment)(e);
                return r ? (0, o.getMemberSupplementalV2)(e, t) : (0, l.getMemberSupplementalV1)(e, t)
            }

            function b(e) {
                let t = (0, s.canAccessMemberSafetyPageWithExperiment)(e),
                    r = a.default.getGuild(e);
                return !!t && null != r && (r.hasFeature(h.GuildFeatures.COMMUNITY) || r.hasFeature(h.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, n.transitionTo)(h.Routes.CHANNEL(e, d.StaticChannelRoute.MEMBER_SAFETY)), !0) : (i.default.open(r.id, h.GuildSettingsSections.MEMBERS), !0))
            }
        },
        95429: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                initializeMemberSafetyStoreV1: function() {
                    return l
                },
                refreshMemberSafetyTimestampV1: function() {
                    return o
                },
                updateMemberSafetyTablePaginationV1: function() {
                    return h
                },
                requestNewPaginationChunkV1: function() {
                    return d
                },
                updateSearchStateV1: function() {
                    return m
                },
                getMemberSupplementalV1: function() {
                    return c
                }
            });
            var i = r("913144"),
                n = r("851387"),
                a = r("525065"),
                u = r("178406"),
                s = r("835257");
            async function l(e) {
                let t = u.default.isInitialized(e);
                if (t) n.default.searchRecentMembers(e);
                else {
                    var r;
                    await i.default.dispatch({
                        type: "INITIALIZE_MEMBER_SAFETY_STORE",
                        guildId: e
                    }), n.default.searchRecentMembers(e);
                    let t = null !== (r = a.default.getMemberCount(e)) && void 0 !== r ? r : 0;
                    t > 1e3 && n.default.requestMembers(e, "", 3e3)
                }
            }

            function o(e) {
                i.default.dispatch({
                    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
                    guildId: e
                })
            }

            function h(e, t) {
                let {
                    continuationToken: r,
                    ...n
                } = t;
                i.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
                    guildId: e,
                    pagination: n
                })
            }
            async function d(e, t) {
                var r, a;
                let {
                    query: u,
                    continuationToken: s
                } = t;
                r = e, a = s, i.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE",
                    guildId: r,
                    continuationToken: a
                }), await n.default.searchRecentMembers(e, {
                    query: u,
                    continuationToken: null != s ? s : void 0
                })
            }
            async function m(e, t) {
                await i.default.dispatch({
                    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
                    guildId: e,
                    searchState: t
                })
            }
            async function c(e, t) {
                let r = await (0, s.fetchMemberSupplemental)(e, t);
                return 0 === r.length ? [] : (await i.default.dispatch({
                    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
                    guildId: e,
                    memberSupplementals: r
                }), r)
            }
        },
        447038: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                initializeMemberSafetyStoreV2: function() {
                    return s
                },
                refreshMemberSafetyTimestampV2: function() {
                    return l
                },
                updateMemberSafetyTablePaginationV2: function() {
                    return o
                },
                requestNewPaginationChunkV2: function() {
                    return h
                },
                updateSearchStateV2: function() {
                    return d
                },
                getMemberSupplementalV2: function() {
                    return m
                }
            });
            var i = r("811022"),
                n = r("913144"),
                a = r("835257");
            let u = new i.default("MemberSafetyStoreActionCreatorsV2");
            async function s(e) {
                await n.default.dispatch({
                    type: "INITIALIZE_MEMBER_SAFETY_STORE",
                    guildId: e
                })
            }

            function l(e) {
                u.info("JANK refreshMemberSafetyTimestampV2", {
                    guildId: e
                }), n.default.dispatch({
                    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
                    guildId: e
                })
            }

            function o(e, t) {
                let {
                    continuationToken: r,
                    ...i
                } = t;
                u.info("JANK updateMemberSafetyTablePaginationV2", {
                    guildId: e,
                    pagination: i
                }), n.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
                    guildId: e,
                    pagination: i
                })
            }
            async function h(e, t) {
                var r, i;
                let {
                    continuationToken: a
                } = t;
                u.info("JANK requestNewPaginationChunkV2", {
                    guildId: e,
                    continuationToken: a
                }), r = e, i = a, u.info("JANK updateMemberSafetyTablePaginationTokenV2", {
                    guildId: r,
                    continuationToken: i
                }), n.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE",
                    guildId: r,
                    continuationToken: i
                }), await Promise.resolve()
            }
            async function d(e, t) {
                u.info("JANK updateSearchStateV2", {
                    guildId: e,
                    searchState: t
                }), await n.default.dispatch({
                    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
                    guildId: e,
                    searchState: t
                })
            }
            async function m(e, t) {
                let r = await (0, a.fetchMemberSupplemental)(e, t);
                return 0 === r.length ? [] : (await n.default.dispatch({
                    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
                    guildId: e,
                    memberSupplementals: r
                }), r)
            }
        },
        159132: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getMemberSupplementalByGuildId: function() {
                    return a
                },
                syncMemberSupplemental: function() {
                    return u
                }
            });
            var i = r("835257");
            let n = {};

            function a(e) {
                return null == n[e] && (n[e] = {}), n[e]
            }

            function u(e, t) {
                if (0 === t.length) return !1;
                let r = a(e);
                return t.forEach(e => {
                    var t, n, a, u, s, l;
                    let o = r[e.userId],
                        h = null !== (n = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == o ? void 0 : o.joinSourceType) && void 0 !== n ? n : null;
                    (null == h || h === i.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (h = i.JoinSourceType.INVITE), r[e.userId] = {
                        userId: e.userId,
                        sourceInviteCode: null !== (u = null !== (a = e.sourceInviteCode) && void 0 !== a ? a : null == o ? void 0 : o.sourceInviteCode) && void 0 !== u ? u : null,
                        joinSourceType: h,
                        inviterId: null !== (l = null !== (s = e.inviterId) && void 0 !== s ? s : null == o ? void 0 : o.inviterId) && void 0 !== l ? l : null
                    }
                }), !0
            }
        },
        835257: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                JoinSourceType: function() {
                    return u
                },
                registerFetchedSupplementals: function() {
                    return m
                },
                fetchMemberSupplemental: function() {
                    return _
                }
            });
            var i, n, a, u, s = r("872717"),
                l = r("49111");
            (i = a || (a = {}))[i.FAILED = 0] = "FAILED", i[i.UNFETCHED = 1] = "UNFETCHED", i[i.PENDING = 2] = "PENDING", i[i.SUCCEEDED = 3] = "SUCCEEDED", (n = u || (u = {}))[n.UNSPECIFIED = 0] = "UNSPECIFIED", n[n.BOT = 1] = "BOT", n[n.INTEGRATION = 2] = "INTEGRATION", n[n.DISCOVERY = 3] = "DISCOVERY", n[n.HUB = 4] = "HUB", n[n.INVITE = 5] = "INVITE", n[n.VANITY_URL = 6] = "VANITY_URL";
            let o = {};

            function h(e, t) {
                return e + t
            }

            function d(e, t, r) {
                o[e + t] = r
            }

            function m(e, t) {
                t.forEach(t => d(e, t, a.SUCCEEDED))
            }

            function c(e) {
                return {
                    userId: e.user_id,
                    sourceInviteCode: e.source_invite_code,
                    joinSourceType: e.join_source_type,
                    inviterId: e.inviter_id
                }
            }
            async function _(e, t) {
                let r = t.filter(t => (function(e, t) {
                    let r = e + t;
                    return null == o[r] && (o[r] = a.UNFETCHED), o[r]
                })(e, t) <= a.UNFETCHED);
                if (0 === r.length) return [];
                r.forEach(t => d(e, t, a.PENDING));
                try {
                    let t = await s.default.post({
                        url: l.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                        body: {
                            user_ids: r
                        }
                    });
                    if (!Array.isArray(t.body)) return [];
                    let i = t.body.map(c);
                    return i.forEach(t => {
                        let {
                            userId: r
                        } = t;
                        return d(e, r, a.SUCCEEDED)
                    }), i
                } catch (t) {
                    r.forEach(t => d(e, t, a.FAILED))
                }
                return []
            }
        },
        334572: function(e, t, r) {
            "use strict";

            function i(e, t) {
                let [, r] = e, [, i] = t;
                return r === i
            }
            r.r(t), r.d(t, {
                isVersionEqual: function() {
                    return i
                }
            })
        }
    }
]);
//# sourceMappingURL=1946bd42a4ce9838ea0c.js.map