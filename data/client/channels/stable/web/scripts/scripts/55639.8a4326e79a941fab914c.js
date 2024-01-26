(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55639"], {
        354087: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DoorExitIcon: function() {
                    return u
                }
            });
            var i = r("37983");
            r("884691");
            var n = r("669491"),
                s = r("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: u = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...l
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M9 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M2.75 3.02A3 3 0 0 1 5 2h10a3 3 0 0 1 3 3v7.64c0 .44-.55.7-.95.55a3 3 0 0 0-3.17 4.93l.02.03a.5.5 0 0 1-.35.85h-.05a.5.5 0 0 0-.5.5 2.5 2.5 0 0 1-3.68 2.2l-5.8-3.09A3 3 0 0 1 2 16V5a3 3 0 0 1 .76-1.98Zm1.3 1.95A.04.04 0 0 0 4 5v11c0 .36.2.68.49.86l5.77 3.08a.5.5 0 0 0 .74-.44V8.02a.5.5 0 0 0-.32-.46l-6.63-2.6Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15.3 16.7a1 1 0 0 1 1.4-1.4l4.3 4.29V16a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.59l-4.3-4.3Z",
                        className: a
                    })]
                })
            }
        },
        493910: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MemberSafetySecondaryIndex: function() {
                    return i
                },
                GuildMemberSafetyMembers: function() {
                    return b
                }
            }), r("424973"), r("222007");
            var i, n, s = r("969176"),
                u = r.n(s),
                a = r("407846"),
                l = r("654017"),
                h = r("26989"),
                d = r("697218"),
                o = r("490931"),
                m = r("159132");
            let c = Date.now();

            function _(e) {
                let t = !e.isCurrentGuildMemberByTimestamp,
                    r = [t ? "NEW_GUILD_MEMBER" : "CURRENT_GUILD_MEMBER"];
                return e.isIncludedInSearchResults && r.push("INCLUDED_IN_SEARCH_RESULTS"), r
            }

            function M(e) {
                return -e.joinedAtTimestamp
            }

            function f() {
                return new a.default(_, M)
            }(n = i || (i = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", n.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", n.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
            class b {
                reset() {
                    this._membersMap.clear(), this._membersMap = f(), this.resetNewMemberTimestamp()
                }
                resetNewMemberTimestamp() {
                    this.newMemberTimestamp = Date.now()
                }
                getJoinedAtTimestamp(e) {
                    let t = null != e.joinedAt ? new Date(e.joinedAt) : new Date,
                        r = t.getTime();
                    return r
                }
                enhanceNewMember(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = this.getJoinedAtTimestamp(e),
                        {
                            hasUnusualDmActivity: i,
                            hasUnusualAccountActivity: n,
                            sourceInviteCode: s,
                            joinSourceType: u,
                            inviterId: a,
                            integrationType: l
                        } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
                        h = d.default.getUser(e.userId),
                        o = {
                            hasUnusualDmActivity: i,
                            hasUnusualAccountActivity: n,
                            sourceInviteCode: s,
                            joinSourceType: u,
                            inviterId: a,
                            integrationType: l,
                            ...e,
                            isCurrentGuildMemberByTimestamp: r <= this.newMemberTimestamp,
                            isIncludedInSearchResults: !1,
                            user: h,
                            joinedAtTimestamp: r,
                            ...t
                        };
                    return o
                }
                _computeMemberSupplementals(e, t) {
                    var r;
                    let i = (0, m.getMemberSupplementalByGuildId)(this.guildId),
                        {
                            sourceInviteCode: n,
                            joinSourceType: s,
                            inviterId: u,
                            integrationType: a
                        } = null !== (r = i[e]) && void 0 !== r ? r : {};
                    return {
                        sourceInviteCode: null != n ? n : null,
                        joinSourceType: null != s ? s : null,
                        inviterId: null != u ? u : null,
                        integrationType: null != a ? a : null,
                        hasUnusualDmActivity: function(e) {
                            if (null == e) return !1;
                            let t = new Date(e).getTime();
                            return t >= c - o.UNUSUAL_DM_COMPARISON_DELTA
                        }(t),
                        hasUnusualAccountActivity: (0, l.isSpammer)(e)
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
                        s = !1,
                        {
                            sourceInviteCode: a,
                            hasUnusualDmActivity: l,
                            hasUnusualAccountActivity: h,
                            joinSourceType: d,
                            inviterId: o,
                            integrationType: m
                        } = this._computeMemberSupplementals(i.userId, null !== (r = n.unusualDMActivityUntil) && void 0 !== r ? r : i.unusualDMActivityUntil);
                    for (let e in i.sourceInviteCode !== a && (n.sourceInviteCode = a), i.hasUnusualDmActivity !== l && (n.hasUnusualDmActivity = l), i.hasUnusualAccountActivity !== h && (n.hasUnusualAccountActivity = h), i.joinSourceType !== d && (n.joinSourceType = d), i.inviterId !== o && (n.inviterId = o), i.integrationType !== m && (n.integrationType = m), n) {
                        let t = n[e],
                            r = i[e];
                        !u(t, r) && (i[e] = t, s = !0)
                    }
                    return this._membersMap.set(i.userId, i) || s
                }
                upsertMember(e, t) {
                    let r = this.getMemberByUserId(e);
                    if (null == r) {
                        let t = h.default.getTrueMember(this.guildId, e);
                        if (null == t) return !1;
                        r = this.enhanceNewMember(t)
                    }
                    return this.updateMember(r, t)
                }
                removeMember(e) {
                    return this._membersMap.delete(e)
                }
                syncFromGuildMemberStore(e, t) {
                    let r = h.default.getTrueMember(e, t);
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
                    this.newMemberTimestamp = Date.now(), this.guildId = e, this._membersMap = f()
                }
            }
        },
        637240: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GuildMemberSafetyPageStore: function() {
                    return o
                }
            }), r("222007"), r("808653"), r("424973");
            var i = r("917351"),
                n = r("26989"),
                s = r("697218"),
                u = r("718517"),
                a = r("493910"),
                l = r("691386"),
                h = r("936763");
            let d = 3 * u.default.Millis.SECOND;
            class o {
                getSearchIndex() {
                    let e = null == this._search || this._search.hasDefaultQuery;
                    return e ? a.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER : a.MemberSafetySecondaryIndex.INCLUDED_IN_SEARCH_RESULTS
                }
                initialize() {
                    if (this._initialized) {
                        this.lastCursorTimestamp = Date.now();
                        return
                    }
                    this._initialized = !0, this._search = new h.GuildMemberSafetySearch(this.guildId), this._members = new a.GuildMemberSafetyMembers(this.guildId), this._pagination = new l.GuildMemberSafetyPagination(this.guildId, this._members.values(this.getSearchIndex()))
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
                    return null != this._pagination && this._initialized ? (0, l.getSearchChunkLimit)(this._pagination.getPaginationState()) : 0
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
                        s = n !== e.isIncludedInSearchResults;
                    return [n, s]
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
                        let s = n.default.getTrueMember(this.guildId, e);
                        if (null == s) return [!1, !1];
                        i = this._members.enhanceNewMember(s, t)
                    }
                    if (null == t.isIncludedInSearchResults) {
                        let [e, n] = this._getIsIncludedInSearch(i, t);
                        n && (r = !0, t.isIncludedInSearchResults = e)
                    } else t.isIncludedInSearchResults !== i.isIncludedInSearchResults && (r = !0);
                    let s = this._members.updateMember(i, t);
                    return !r && (r = this._checkUpdatesForPaginationUpdate(i, t)), [r, s]
                }
                isMemberInIndex(e) {
                    return null != this._members && !!this._initialized && this._members._membersMap.has(e)
                }
                isMemberIncludedInSearchResults(e) {
                    if (null == this._members || null == this._search || null == this._pagination || !this._initialized) return !1;
                    let t = this._search.hasDefaultQuery;
                    if (t) return this._pagination.isMemberInAnyChunk(e);
                    let r = this._members.getMemberByUserId(e);
                    if (null == r) {
                        let t = n.default.getTrueMember(this.guildId, e);
                        if (null == t) return !1;
                        r = this._members.enhanceNewMember(t)
                    } else if (r.isIncludedInSearchResults) return !0;
                    let i = this._search.isMemberIncludedInSearchResults(r);
                    return i
                }
                updateMember(e, t) {
                    if (null == this._members || !this._initialized) return !1;
                    let [r, i] = this._rawUpdateMember(e, t);
                    return r ? this.updatePaginationChunks() : i
                }
                updateClientMembers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == this._members || !this._initialized) return !1;
                    let i = !1,
                        n = !1;
                    for (let s of e) {
                        if (null == s.joinedAt) continue;
                        let e = s;
                        if (t && (e = {
                                ...e,
                                isIncludedInSearchResults: !0
                            }), r) {
                            let t = this._members.getJoinedAtTimestamp(s);
                            e = {
                                ...e,
                                isCurrentGuildMemberByTimestamp: t <= this._members.newMemberTimestamp,
                                refreshTimestamp: this.lastRefreshTimestamp
                            }
                        }
                        let [u, a] = this._rawUpdateMember(s.userId, e);
                        i = u || i, n = a || n
                    }
                    return i ? this.updatePaginationChunks() : n
                }
                updateServerMembers(e) {
                    if (null == this._members || !this._initialized) return !1;
                    let t = !1,
                        r = !1;
                    for (let i of e) {
                        let e = n.default.getTrueMember(this.guildId, i.user.id);
                        if (null == e) continue;
                        let [s, u] = this._rawUpdateMember(i.user.id, e);
                        t = s || t, r = u || r
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
                    return this.updateClientMembers(t, this._search.requiresUsernameMatch, 0 !== this.lastRefreshTimestamp)
                }
                rebuildAllMembers() {
                    if (null == this._members || !this._initialized) return !1;
                    let e = n.default.getMembers(this.guildId);
                    return this.updateClientMembers(e)
                }
                _scheduleRefresh(e) {
                    this.lastRefreshTimestamp = e, this.lastCursorTimestamp = Date.now(), null != this._lastRefreshTimer && clearTimeout(this._lastRefreshTimer), this._lastRefreshTimer = setTimeout(() => {
                        this._lastRefreshTimer = null, this.lastRefreshTimestamp = 0
                    }, d)
                }
                refreshNewMembersAndSearchResults() {
                    if (null == this._search || null == this._members || !this._initialized) return !1;
                    let e = Number(Date.now());
                    this._scheduleRefresh(e);
                    let t = (0, i.cloneDeep)(this._members.values(a.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)),
                        r = !1;
                    for (let i of t) r = this._members.updateMember(i, {
                        isCurrentGuildMemberByTimestamp: !0,
                        refreshTimestamp: e,
                        user: s.default.getUser(i.userId)
                    }) || r;
                    this._members.resetNewMemberTimestamp(), this.resetSearchState() && (r = !1);
                    let [n, u] = this.updatePaginationState({
                        currentPage: 1
                    }, !1);
                    return u && (r = !1), r && this.updatePaginationChunks(), !0
                }
                getNewMemberTimestamp() {
                    return null != this._members && this._initialized ? this._members.newMemberTimestamp : 0
                }
                updateSearchState(e) {
                    if (null == this._members || null == this._search || !this._initialized) return !1;
                    let t = !!this._search.hasDefaultQuery,
                        r = this._search.updateSearchState(e);
                    if (this._search.hasDefaultQuery && t) return this.updatePaginationChunks();
                    let n = (0, i.cloneDeep)(this._members.values(a.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)),
                        s = t !== this._search.hasDefaultQuery;
                    for (let e of n) {
                        if (!e.isCurrentGuildMemberByTimestamp) continue;
                        let t = this._search.isMemberIncludedInSearchResults(e);
                        t !== e.isIncludedInSearchResults && (s = !0, r = !0, this._members.updateMember(e, {
                            isIncludedInSearchResults: t
                        }))
                    }
                    return s ? (this.updatePaginationChunks(), this.updatePaginationState({
                        currentPage: 1
                    }), !0) : r
                }
                getSearchState() {
                    return null != this._search && this._initialized ? this._search.getSearchState() : (0, h.getDefaultSearchState)()
                }
                hasDefaultSearchState() {
                    return null == this._search || !this._initialized || this._search.hasDefaultQuery
                }
                resetSearchState() {
                    if (null == this._search || !this._initialized) return !1;
                    let e = this._search.resetSearchState();
                    return !!e && this.updatePaginationChunks()
                }
                getTotalResultsCount() {
                    return null != this._search && null != this._pagination && this._initialized ? this._search.hasDefaultQuery && null != this._defaultSearchTotalResultsCount ? this._defaultSearchTotalResultsCount : this._pagination.getPaginationState().totalResultsCount : 0
                }
                updatePaginationState(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return null != this._search && null != this._pagination && this._initialized ? (t && (this.lastRefreshTimestamp = 0), this._search.hasDefaultQuery && null != e.totalResultsCount && (this._defaultSearchTotalResultsCount = e.totalResultsCount), this._pagination.updatePaginationState(e)) : [!1, !1]
                }
                getPaginationState() {
                    return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, l.createDefaultMemberSafetyPaginationState)()
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
                constructor(e) {
                    this.lastRefreshTimestamp = 0, this.lastCursorTimestamp = Date.now(), this._lastRefreshTimer = null, this.guildId = e, this._initialized = !1, this._members = null, this._pagination = null, this._search = null
                }
            }
        },
        691386: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                PAGINATION_PAGE_SIZE_OPTIONS: function() {
                    return a
                },
                MAX_VISIBLE_PAGES: function() {
                    return l
                },
                createDefaultMemberSafetyPaginationState: function() {
                    return h
                },
                getSearchChunkLimit: function() {
                    return d
                },
                GuildMemberSafetyPagination: function() {
                    return o
                }
            }), r("808653"), r("424973"), r("222007");
            var i, n, s = r("26989"),
                u = r("490931");
            let a = [12, 25, 50, 100],
                l = 7;

            function h() {
                return {
                    pageSize: a[0],
                    currentPage: 1,
                    continuationToken: null
                }
            }

            function d(e) {
                return Math.max(5 * e.pageSize, 250)
            }(n = i || (i = {}))[n.FORWARD = 1] = "FORWARD", n[n.BACKWARD = -1] = "BACKWARD";
            class o {
                reset() {
                    this._paginationState = h(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
                }
                isMemberOnCurrentPage(e) {
                    var t;
                    let r = null !== (t = this._cachedPaginationChunks[this._paginationState.currentPage]) && void 0 !== t ? t : [];
                    return r.includes(e)
                }
                isMemberInAnyChunk(e) {
                    return this._sortedMemberIds.includes(e)
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
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                        r = e;
                    r < this._sortedMemberIds.length && (r = this._sortedMemberIds.length - 1), r < 0 && (r = 0);
                    let i = this._sortedMemberIds[e],
                        n = s.default.getMember(this.guildId, i);
                    for (; null == n && !((e += t) < 0) && !(e >= this._sortedMemberIds.length);) {
                        ;
                        i = this._sortedMemberIds[e], (null == (n = s.default.getMember(this.guildId, i)) ? void 0 : n.joinedAt) == null && (n = null)
                    }
                    return n
                }
                getElasticSearchPagination() {
                    let {
                        pageSize: e,
                        currentPage: t
                    } = this._paginationState, r = d(this._paginationState), i = Math.min((Math.floor(e * t / r) + 1) * (r - 1), this._sortedMemberIds.length - 1), n = this._findMember(i, -1), s = this._findMember(Math.max(i - r, 0), 1);
                    return {
                        limit: r,
                        after: (0, u.createMemberSearchCursor)(n),
                        before: (0, u.createMemberSearchCursor)(s)
                    }
                }
                get paginatedMembers() {
                    return this._cachedPaginationChunks
                }
                get version() {
                    return this._version
                }
                constructor(e, t) {
                    this._reduceMemberIdsToPaginationChunks = (e, t, r) => {
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
                    return _
                }
            }), r("222007");
            var i = r("448105"),
                n = r.n(i),
                s = r("969176"),
                u = r.n(s),
                a = r("249654"),
                l = r("681937"),
                h = r("509"),
                d = r("770115");

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
                    selectedSourceInviteCode: void 0
                }
            }
            let m = Object.freeze(o());

            function c(e, t) {
                return null != e && (!!(e.toLowerCase().includes(t.toLowerCase()) || n(e.toLowerCase(), t.toLowerCase())) || !1)
            }
            class _ {
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
                    }, this.hasDefaultQuery = u(this._searchState, m), !0
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
                        requireUnusualAccountActivity: n,
                        requireUsernameQuarantined: s,
                        selectedRoleIds: u,
                        selectedJoinDateOption: o,
                        selectedAccountAgeOption: m,
                        selectedSourceInviteCode: _,
                        selectedJoinSourceType: M
                    } = this._searchState;
                    if (t.length > 0 && ! function(e, t) {
                            if ("" === t.trim()) return !1;
                            let [r, i] = (0, d.splitQuery)(t);
                            for (let t of i)
                                if (e.userId === t) return !0;
                            for (let t of r)
                                if (c(e.nick, t)) return !0;
                            if (null == e.user) return !1;
                            let {
                                globalName: n,
                                username: s
                            } = e.user;
                            for (let e of r)
                                if (c(s, e)) return !0;
                            for (let e of r)
                                if (c(n, e)) return !0;
                            return !1
                        }(e, t)) return !1;
                    if (u.size > 0) {
                        var f, b;
                        if (f = e, !(0 !== (b = u).size && Array.from(b).every(e => f.roles.includes(e)))) return !1
                    }
                    if (null != o.afterDate && e.joinedAtTimestamp < o.afterDate || null != o.beforeDate && e.joinedAtTimestamp > o.beforeDate || null != m.afterDate && a.default.extractTimestamp(e.userId) < m.afterDate || null != m.beforeDate && a.default.extractTimestamp(e.userId) > m.beforeDate || null != _ && e.sourceInviteCode !== _ || null != M && e.joinSourceType !== M) return !1;
                    if (r || i || n || s) return !!(r && e.hasUnusualDmActivity || i && (0, h.isMemberCommunicationDisabled)(e) || n && e.hasUnusualAccountActivity || s && (0, l.hasAutomodQuarantinedProfile)(e)) || !1;
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
            }), r("424973");
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
                    return n
                },
                createMemberSearchCursor: function() {
                    return s
                }
            });
            var i = r("718517");
            let n = 2 * i.default.Millis.DAY;

            function s(e) {
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
                    return E
                }
            }), r("808653"), r("424973"), r("222007");
            var i = r("446674"),
                n = r("913144"),
                s = r("271938"),
                u = r("26989"),
                a = r("305961"),
                l = r("697218"),
                h = r("637240"),
                d = r("159132"),
                o = r("835257");
            let m = !1,
                c = {};

            function _(e) {
                return null == c[e] && (c[e] = new h.GuildMemberSafetyPageStore(e)), c[e]
            }

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = _(e);
                r.reset(t)
            }

            function f() {
                return !1
            }

            function b(e) {
                let t = !1,
                    r = _(e.guildId);
                return "GUILD_ROLE_DELETE" === e.type && (t = r.removeRoleFromSearchState(e.roleId)), r.rebuildAllMembers() || t
            }

            function g(e) {
                let {
                    guildId: t,
                    userId: r
                } = e, i = _(t);
                return i.updateMembersByMemberIds([r])
            }

            function S(e) {
                let t = !1;
                return e.guilds.forEach(e => {
                    let {
                        id: r,
                        members: i
                    } = e, n = _(r);
                    t = n.updateServerMembers(i) || t
                }), t
            }
            class p extends i.default.Store {
                initialize() {
                    this.waitFor(s.default, u.default, l.default)
                }
                isInitialized(e) {
                    let t = _(e);
                    return t.isInitialized
                }
                getMembersByGuildId(e, t) {
                    let r = _(e);
                    return r.getMembersByIndex(t)
                }
                getMembersCountByGuildId(e, t) {
                    let r = _(e);
                    return r.countMembersByIndex(t)
                }
                getEstimatedMemberSearchCountByGuildId(e) {
                    let t = _(e),
                        r = t.searchChunkSize,
                        i = t.countMembersByIndex(t.getSearchIndex()),
                        n = t.getTotalResultsCount();
                    return null == n || n < r ? i : n
                }
                getKnownMemberSearchCountByGuildId(e) {
                    let t = _(e);
                    return t.countMembersByIndex(t.getSearchIndex())
                }
                getCurrentMemberSearchResultsByGuildId(e) {
                    let t = _(e);
                    return t.getMembersByIndex(t.getSearchIndex())
                }
                getSearchStateByGuildId(e) {
                    let t = _(e);
                    return t.getSearchState()
                }
                hasDefaultSearchStateByGuildId(e) {
                    let t = _(e);
                    return t.hasDefaultSearchState()
                }
                getPagedMembersByGuildId(e) {
                    let t = _(e);
                    return t.getPaginatedMembers()
                }
                getPaginationStateByGuildId(e) {
                    let t = _(e);
                    return t.getPaginationState()
                }
                getElasticSearchPaginationByGuildId(e) {
                    let t = _(e);
                    return t.getElasticSearchPagination()
                }
                getEnhancedMember(e, t) {
                    let r = _(e);
                    return r.getMember(t)
                }
                getNewMemberTimestamp(e) {
                    let t = _(e);
                    return t.getNewMemberTimestamp()
                }
                getLastRefreshTimestamp(e) {
                    let t = _(e);
                    return t.lastRefreshTimestamp
                }
                getLastCursorTimestamp(e) {
                    let t = _(e);
                    return t.lastCursorTimestamp
                }
            }
            p.displayName = "MemberSafetyStore";
            let I = new p(n.default, {
                CONNECTION_OPEN: function(e) {
                    return m ? m = !1 : ! function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        for (let t in c) M(t, e)
                    }(!0), S(e)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    return S(e)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e;
                    if (null == t || null == a.default.getGuild(t)) return !1;
                    m = !0;
                    let i = _(t),
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
                    return m = !0, Object.entries(t).forEach(e => {
                        let [t, i] = e, n = _(t);
                        r = n.updateClientMembers(Object.values(i)) || r
                    }), r
                },
                PASSIVE_UPDATE_V1: function(e) {
                    let {
                        members: t,
                        guildId: r
                    } = e;
                    if (null != t) {
                        let e = _(r);
                        return e.updateServerMembers(t)
                    }
                    return !1
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e, r = _(t.id);
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
                    } = e, i = _(t);
                    return i.updateServerMembers(r)
                },
                GUILD_MEMBER_ADD: f,
                GUILD_MEMBER_UPDATE: f,
                GUILD_MEMBER_UPDATE_LOCAL: function(e) {
                    let {
                        guildId: t
                    } = e, r = s.default.getId(), i = _(t);
                    return i.updateMembersByMemberIds([r])
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        user: r
                    } = e, i = _(t);
                    return i.removeMember(r.id)
                },
                GUILD_ROLE_UPDATE: b,
                GUILD_ROLE_DELETE: b,
                GUILD_MEMBER_PROFILE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        guildMember: r
                    } = e, i = _(t);
                    return i.updateMembersByMemberIds([r.user.id])
                },
                GUILD_ROLE_MEMBER_REMOVE: g,
                GUILD_ROLE_MEMBER_ADD: g,
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e;
                    if (null == r || 0 === r.length) return !1;
                    let i = _(t),
                        n = r.reduce((e, t) => {
                            if (null != t.member) {
                                let r = t.member.user.id;
                                e.push(r)
                            }
                            return e
                        }, []);
                    return i.updateMembersByMemberIds(n)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        addedMembers: r
                    } = e;
                    if (null == r || 0 === r.length) return !1;
                    let i = _(t),
                        n = r.reduce((e, t) => {
                            let r = t.userId;
                            return e.push(r), e
                        }, []);
                    return i.updateMembersByMemberIds(n)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e;
                    if (null == r || 0 === r.length) return !1;
                    let i = _(t),
                        n = r.reduce((e, t) => {
                            let r = t.userId;
                            return e.push(r), e
                        }, []);
                    return i.updateMembersByMemberIds(n)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        guildId: t,
                        threads: r
                    } = e, i = Object.values(r);
                    if (0 === i.length) return !1;
                    let n = _(t),
                        s = i.reduce((e, t) => {
                            if (null != t.owner) {
                                let r = t.owner.user.id;
                                e.push(r)
                            }
                            return e
                        }, []);
                    return n.updateMembersByMemberIds(s)
                },
                INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
                    let {
                        guildId: t
                    } = e, r = _(t);
                    return r.initialize()
                },
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
                    let {
                        guildId: t
                    } = e, r = _(t);
                    return r.refreshNewMembersAndSearchResults()
                },
                MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
                    let {
                        guildId: t,
                        pagination: r
                    } = e, i = _(t), [n] = i.updatePaginationState(r);
                    return n
                },
                MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
                    let {
                        guildId: t,
                        continuationToken: r
                    } = e, i = _(t);
                    return i.updatePaginationToken(r)
                },
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        searchState: r
                    } = e, i = _(t);
                    return i.updateSearchState(r)
                },
                FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        memberSupplementals: r
                    } = e, i = (0, d.syncMemberSupplemental)(t, r);
                    if (i) {
                        let e = _(t);
                        e.updateMembersByMemberIds(r.map(e => e.userId))
                    }
                    return i
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: r,
                        total_result_count: i
                    } = e, n = _(t), {
                        memberIds: s,
                        memberSupplementals: u
                    } = r.reduce((e, t) => {
                        let {
                            member: r,
                            source_invite_code: i,
                            join_source_type: n,
                            inviter_id: s
                        } = t, u = r.user;
                        return e.memberIds.push(u.id), e.memberSupplementals.push({
                            userId: u.id,
                            sourceInviteCode: i,
                            joinSourceType: n,
                            inviterId: s
                        }), e
                    }, {
                        memberIds: [],
                        memberSupplementals: []
                    }), a = (0, d.syncMemberSupplemental)(t, u);
                    (0, o.registerFetchedSupplementals)(t, s);
                    let l = n.updateSearchedMembersByMemberIds(s),
                        [h] = n.updatePaginationState({
                            totalResultsCount: i
                        }, !1);
                    return a || l || h
                },
                MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function(e) {
                    let {
                        guildId: t,
                        userIds: r
                    } = e, i = _(t);
                    return i.updateMembersByMemberIds(r)
                }
            });
            var E = I
        },
        159132: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getMemberSupplementalByGuildId: function() {
                    return s
                },
                syncMemberSupplemental: function() {
                    return u
                }
            });
            var i = r("835257");
            let n = {};

            function s(e) {
                return null == n[e] && (n[e] = {}), n[e]
            }

            function u(e, t) {
                if (0 === t.length) return !1;
                let r = s(e);
                return t.forEach(e => {
                    var t, n, s, u, a, l, h, d;
                    let o = r[e.userId],
                        m = null !== (n = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == o ? void 0 : o.joinSourceType) && void 0 !== n ? n : null;
                    (null == m || m === i.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (m = i.JoinSourceType.INVITE), r[e.userId] = {
                        userId: e.userId,
                        sourceInviteCode: null !== (u = null !== (s = e.sourceInviteCode) && void 0 !== s ? s : null == o ? void 0 : o.sourceInviteCode) && void 0 !== u ? u : null,
                        joinSourceType: m,
                        inviterId: null !== (l = null !== (a = e.inviterId) && void 0 !== a ? a : null == o ? void 0 : o.inviterId) && void 0 !== l ? l : null,
                        integrationType: null !== (d = null !== (h = e.integrationType) && void 0 !== h ? h : null == o ? void 0 : o.integrationType) && void 0 !== d ? d : null
                    }
                }), !0
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
            }), r("222007")
        }
    }
]);
//# sourceMappingURL=55639.8a4326e79a941fab914c.js.map