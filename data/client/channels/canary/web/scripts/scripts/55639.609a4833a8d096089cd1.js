(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55639"], {
        354087: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                DoorExitIcon: function() {
                    return u
                }
            });
            var r = i("37983");
            i("884691");
            var n = i("669491"),
                s = i("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: u = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...l
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, s.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M9 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M2.75 3.02A3 3 0 0 1 5 2h10a3 3 0 0 1 3 3v7.64c0 .44-.55.7-.95.55a3 3 0 0 0-3.17 4.93l.02.03a.5.5 0 0 1-.35.85h-.05a.5.5 0 0 0-.5.5 2.5 2.5 0 0 1-3.68 2.2l-5.8-3.09A3 3 0 0 1 2 16V5a3 3 0 0 1 .76-1.98Zm1.3 1.95A.04.04 0 0 0 4 5v11c0 .36.2.68.49.86l5.77 3.08a.5.5 0 0 0 .74-.44V8.02a.5.5 0 0 0-.32-.46l-6.63-2.6Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15.3 16.7a1 1 0 0 1 1.4-1.4l4.3 4.29V16a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.59l-4.3-4.3Z",
                        className: a
                    })]
                })
            }
        },
        493910: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                MemberSafetySecondaryIndex: function() {
                    return r
                },
                GuildMemberSafetyMembers: function() {
                    return g
                }
            }), i("424973"), i("222007");
            var r, n, s = i("969176"),
                u = i.n(s),
                a = i("407846"),
                l = i("654017"),
                h = i("26989"),
                o = i("697218"),
                d = i("490931"),
                m = i("159132");
            let c = Date.now();

            function _(e) {
                let t = !e.isCurrentGuildMemberByTimestamp,
                    i = [t ? "NEW_GUILD_MEMBER" : "CURRENT_GUILD_MEMBER"];
                return e.isIncludedInSearchResults && i.push("INCLUDED_IN_SEARCH_RESULTS"), i
            }

            function M(e) {
                return -e.joinedAtTimestamp
            }

            function f() {
                return new a.default(_, M)
            }(n = r || (r = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", n.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", n.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
            class g {
                reset() {
                    this._membersMap.clear(), this._membersMap = f(), this.resetNewMemberTimestamp()
                }
                resetNewMemberTimestamp() {
                    this.newMemberTimestamp = Date.now()
                }
                getJoinedAtTimestamp(e) {
                    let t = null != e.joinedAt ? new Date(e.joinedAt) : new Date,
                        i = t.getTime();
                    return i
                }
                enhanceNewMember(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = this.getJoinedAtTimestamp(e),
                        {
                            hasUnusualDmActivity: r,
                            hasUnusualAccountActivity: n,
                            sourceInviteCode: s,
                            joinSourceType: u,
                            inviterId: a,
                            integrationType: l
                        } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
                        h = o.default.getUser(e.userId),
                        d = {
                            hasUnusualDmActivity: r,
                            hasUnusualAccountActivity: n,
                            sourceInviteCode: s,
                            joinSourceType: u,
                            inviterId: a,
                            integrationType: l,
                            ...e,
                            isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
                            isIncludedInSearchResults: !1,
                            user: h,
                            joinedAtTimestamp: i,
                            ...t
                        };
                    return d
                }
                _computeMemberSupplementals(e, t) {
                    var i;
                    let r = (0, m.getMemberSupplementalByGuildId)(this.guildId),
                        {
                            sourceInviteCode: n,
                            joinSourceType: s,
                            inviterId: u,
                            integrationType: a
                        } = null !== (i = r[e]) && void 0 !== i ? i : {};
                    return {
                        sourceInviteCode: null != n ? n : null,
                        joinSourceType: null != s ? s : null,
                        inviterId: null != u ? u : null,
                        integrationType: null != a ? a : null,
                        hasUnusualDmActivity: function(e) {
                            if (null == e) return !1;
                            let t = new Date(e).getTime();
                            return t >= c - d.UNUSUAL_DM_COMPARISON_DELTA
                        }(t),
                        hasUnusualAccountActivity: (0, l.isSpammer)(e)
                    }
                }
                createMember(e) {
                    return this._membersMap.set(e.userId, e)
                }
                updateMember(e, t) {
                    var i;
                    if (null == t) return this._membersMap.set(e.userId, e);
                    let r = {
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
                            joinSourceType: o,
                            inviterId: d,
                            integrationType: m
                        } = this._computeMemberSupplementals(r.userId, null !== (i = n.unusualDMActivityUntil) && void 0 !== i ? i : r.unusualDMActivityUntil);
                    for (let e in r.sourceInviteCode !== a && (n.sourceInviteCode = a), r.hasUnusualDmActivity !== l && (n.hasUnusualDmActivity = l), r.hasUnusualAccountActivity !== h && (n.hasUnusualAccountActivity = h), r.joinSourceType !== o && (n.joinSourceType = o), r.inviterId !== d && (n.inviterId = d), r.integrationType !== m && (n.integrationType = m), n) {
                        let t = n[e],
                            i = r[e];
                        !u(t, i) && (r[e] = t, s = !0)
                    }
                    return this._membersMap.set(r.userId, r) || s
                }
                upsertMember(e, t) {
                    let i = this.getMemberByUserId(e);
                    if (null == i) {
                        let t = h.default.getTrueMember(this.guildId, e);
                        if (null == t) return !1;
                        i = this.enhanceNewMember(t)
                    }
                    return this.updateMember(i, t)
                }
                removeMember(e) {
                    return this._membersMap.delete(e)
                }
                syncFromGuildMemberStore(e, t) {
                    let i = h.default.getTrueMember(e, t);
                    return null == i ? this.removeMember(t) : this.upsertMember(t, i)
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
        637240: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                GuildMemberSafetyPageStore: function() {
                    return h
                }
            }), i("222007"), i("808653"), i("424973");
            var r = i("917351"),
                n = i("26989"),
                s = i("697218"),
                u = i("493910"),
                a = i("691386"),
                l = i("936763");
            class h {
                getSearchIndex() {
                    let e = null == this._search || this._search.hasDefaultQuery;
                    return e ? u.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER : u.MemberSafetySecondaryIndex.INCLUDED_IN_SEARCH_RESULTS
                }
                initialize() {
                    if (this._initialized) {
                        this.lastCursorTimestamp = Date.now();
                        return
                    }
                    this._initialized = !0, this._search = new l.GuildMemberSafetySearch(this.guildId), this._members = new u.GuildMemberSafetyMembers(this.guildId), this._pagination = new a.GuildMemberSafetyPagination(this.guildId, this._members.values(this.getSearchIndex()))
                }
                get isInitialized() {
                    return this._initialized
                }
                reset() {
                    var e, t, i;
                    let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._initialized && (null === (e = this._members) || void 0 === e || e.reset(), null === (t = this._pagination) || void 0 === t || t.reset(), null === (i = this._search) || void 0 === i || i.reset(), r && this.initialize())
                }
                get searchChunkSize() {
                    return null != this._pagination && this._initialized ? (0, a.getSearchChunkLimit)(this._pagination.getPaginationState()) : 0
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
                    let i = this._search.hasDefaultQuery;
                    if (i) return [!1, !1];
                    let r = {
                            ...e,
                            ...t
                        },
                        n = this._search.isMemberIncludedInSearchResults(r),
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
                    let i = this._members.removeMember(e);
                    return i ? this.updatePaginationChunks() : i
                }
                _rawUpdateMember(e, t) {
                    if (null == this._members) return [!1, !1];
                    let i = !1,
                        r = this._members.getMemberByUserId(e);
                    if (null == r) {
                        i = !0;
                        let s = n.default.getTrueMember(this.guildId, e);
                        if (null == s) return [!1, !1];
                        r = this._members.enhanceNewMember(s, t)
                    }
                    if (null == t.isIncludedInSearchResults) {
                        let [e, n] = this._getIsIncludedInSearch(r, t);
                        n && (i = !0, t.isIncludedInSearchResults = e)
                    } else t.isIncludedInSearchResults !== r.isIncludedInSearchResults && (i = !0);
                    let s = this._members.updateMember(r, t);
                    return !i && (i = this._checkUpdatesForPaginationUpdate(r, t)), [i, s]
                }
                isMemberInIndex(e) {
                    return null != this._members && !!this._initialized && this._members._membersMap.has(e)
                }
                isMemberIncludedInSearchResults(e) {
                    if (null == this._members || null == this._search || null == this._pagination || !this._initialized) return !1;
                    let t = this._search.hasDefaultQuery;
                    if (t) return this._pagination.isMemberInAnyChunk(e);
                    let i = this._members.getMemberByUserId(e);
                    if (null == i) {
                        let t = n.default.getTrueMember(this.guildId, e);
                        if (null == t) return !1;
                        i = this._members.enhanceNewMember(t)
                    } else if (i.isIncludedInSearchResults) return !0;
                    let r = this._search.isMemberIncludedInSearchResults(i);
                    return r
                }
                updateMember(e, t) {
                    if (null == this._members || !this._initialized) return !1;
                    let [i, r] = this._rawUpdateMember(e, t);
                    return i ? this.updatePaginationChunks() : r
                }
                updateClientMembers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == this._members || !this._initialized) return !1;
                    let r = !1,
                        n = !1;
                    for (let s of e) {
                        if (null == s.joinedAt) continue;
                        let e = s;
                        if (t && (e = {
                                ...e,
                                isIncludedInSearchResults: !0
                            }), i) {
                            let t = this._members.getJoinedAtTimestamp(s);
                            e = {
                                ...e,
                                isCurrentGuildMemberByTimestamp: t <= this._members.newMemberTimestamp,
                                refreshTimestamp: this.lastRefreshTimestamp
                            }
                        }
                        let [u, a] = this._rawUpdateMember(s.userId, e);
                        r = u || r, n = a || n
                    }
                    return r ? this.updatePaginationChunks() : n
                }
                updateServerMembers(e) {
                    if (null == this._members || !this._initialized) return !1;
                    let t = !1,
                        i = !1;
                    for (let r of e) {
                        let e = n.default.getTrueMember(this.guildId, r.user.id);
                        if (null == e) continue;
                        let [s, u] = this._rawUpdateMember(r.user.id, e);
                        t = s || t, i = u || i
                    }
                    return t ? this.updatePaginationChunks() : i
                }
                updateMembersByMemberIds(e) {
                    if (null == this._members || !this._initialized) return !1;
                    let t = e.reduce((e, t) => {
                        let i = n.default.getTrueMember(this.guildId, t);
                        return null != i && e.push(i), e
                    }, []);
                    return this.updateClientMembers(t)
                }
                updateSearchedMembersByMemberIds(e) {
                    if (null == this._search || null == this._members || !this._initialized) return !1;
                    let t = e.reduce((e, t) => {
                        let i = n.default.getTrueMember(this.guildId, t);
                        return null != i && e.push(i), e
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
                    }, 3e3)
                }
                refreshNewMembersAndSearchResults() {
                    if (null == this._search || null == this._members || !this._initialized) return !1;
                    let e = Number(Date.now());
                    this._scheduleRefresh(e);
                    let t = (0, r.cloneDeep)(this._members.values(u.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)),
                        i = !1;
                    for (let r of t) i = this._members.updateMember(r, {
                        isCurrentGuildMemberByTimestamp: !0,
                        refreshTimestamp: e,
                        user: s.default.getUser(r.userId)
                    }) || i;
                    this._members.resetNewMemberTimestamp(), this.resetSearchState() && (i = !1);
                    let [n, a] = this.updatePaginationState({
                        currentPage: 1
                    }, !1);
                    return a && (i = !1), i && this.updatePaginationChunks(), !0
                }
                getNewMemberTimestamp() {
                    return null != this._members && this._initialized ? this._members.newMemberTimestamp : 0
                }
                updateSearchState(e) {
                    if (null == this._members || null == this._search || !this._initialized) return !1;
                    let t = !!this._search.hasDefaultQuery,
                        i = this._search.updateSearchState(e);
                    if (this._search.hasDefaultQuery && t) return this.updatePaginationChunks();
                    let n = (0, r.cloneDeep)(this._members.values(u.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)),
                        s = t !== this._search.hasDefaultQuery;
                    for (let e of n) {
                        if (!e.isCurrentGuildMemberByTimestamp) continue;
                        let t = this._search.isMemberIncludedInSearchResults(e);
                        t !== e.isIncludedInSearchResults && (s = !0, i = !0, this._members.updateMember(e, {
                            isIncludedInSearchResults: t
                        }))
                    }
                    return s ? (this.updatePaginationChunks(), this.updatePaginationState({
                        currentPage: 1
                    }), !0) : i
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
                getTotalResultsCount() {
                    return null != this._search && null != this._pagination && this._initialized ? this._search.hasDefaultQuery && null != this._defaultSearchTotalResultsCount ? this._defaultSearchTotalResultsCount : this._pagination.getPaginationState().totalResultsCount : 0
                }
                updatePaginationState(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return null != this._search && null != this._pagination && this._initialized ? (t && (this.lastRefreshTimestamp = 0), this._search.hasDefaultQuery && null != e.totalResultsCount && (this._defaultSearchTotalResultsCount = e.totalResultsCount), this._pagination.updatePaginationState(e)) : [!1, !1]
                }
                getPaginationState() {
                    return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, a.createDefaultMemberSafetyPaginationState)()
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
        691386: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PAGINATION_PAGE_SIZE_OPTIONS: function() {
                    return l
                },
                MAX_VISIBLE_PAGES: function() {
                    return h
                },
                createDefaultMemberSafetyPaginationState: function() {
                    return o
                },
                getSearchChunkLimit: function() {
                    return d
                },
                GuildMemberSafetyPagination: function() {
                    return m
                }
            }), i("808653"), i("424973"), i("222007");
            var r, n, s = i("525065"),
                u = i("26989"),
                a = i("490931");
            let l = [12, 25, 50, 100],
                h = 7;

            function o() {
                return {
                    pageSize: l[0],
                    currentPage: 1,
                    continuationToken: null
                }
            }(n = r || (r = {}))[n.FORWARD = 1] = "FORWARD", n[n.BACKWARD = -1] = "BACKWARD";

            function d(e) {
                return Math.max(5 * e.pageSize, 250)
            }
            class m {
                reset() {
                    this._paginationState = o(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
                }
                isMemberOnCurrentPage(e) {
                    var t;
                    let i = null !== (t = this._cachedPaginationChunks[this._paginationState.currentPage]) && void 0 !== t ? t : [];
                    return i.includes(e)
                }
                isMemberInAnyChunk(e) {
                    return this._sortedMemberIds.includes(e)
                }
                _initPaginationFromRawMembers(e) {
                    let t = [],
                        i = e.reduce((e, i, r) => (e = this._reduceMemberIdsToPaginationChunks(e, i.userId, r), t.push(i.userId), e), {});
                    return [t, i]
                }
                _buildPaginationFromMemberIds(e) {
                    let t = e.reduce(this._reduceMemberIdsToPaginationChunks, {});
                    return t
                }
                _rebuildPaginationChunksFromStoredMembers() {
                    return this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds), this._version += 1, !0
                }
                calculateNewContinuationToken(e) {
                    var t, i, r;
                    let n = null !== (t = s.default.getMemberCount(this.guildId)) && void 0 !== t ? t : this._sortedMemberIds.length,
                        u = this._sortedMemberIds.length - 1,
                        a = this._sortedMemberIds[u],
                        l = Math.min(d(this._paginationState), u);
                    let h = null != (r = e).totalResultsCount ? r.totalResultsCount : r.currentPage * r.pageSize,
                        o = null !== (i = this._sortedMemberIds[h - 1]) && void 0 !== i ? i : a;
                    if (null == this._paginationState.continuationToken) return h < l ? this._paginationState.continuationToken : o;
                    let m = this._sortedMemberIds.findIndex(e => e === this._paginationState.continuationToken);
                    return -1 === m ? o : h > n ? a : m - h >= 0 ? this._paginationState.continuationToken : Math.ceil(h / l) > Math.ceil(m / l) ? o : this._paginationState.continuationToken
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
                        currentPage: i,
                        pageSize: r
                    } = this._paginationState, n = e * r <= this._sortedMemberIds.length;
                    return n ? Math.max(Math.ceil(r / e * (null != t ? t : i)), 1) : 1
                }
                updatePaginationState(e) {
                    let t = !1,
                        i = null != e.pageSize && e.pageSize !== this._paginationState.pageSize;
                    if (i) {
                        var r;
                        t = !0, e.currentPage = this._calculateNewPageFromPageSizeChange(null !== (r = e.pageSize) && void 0 !== r ? r : this._paginationState.pageSize, e.currentPage)
                    }
                    return this._paginationState = {
                        ...this._paginationState,
                        ...e
                    }, t && this._rebuildPaginationChunksFromStoredMembers(), [!0, t]
                }
                updateSortedMembers(e) {
                    let [t, i] = this._initPaginationFromRawMembers(e);
                    return this._sortedMemberIds = t, this._cachedPaginationChunks = i, this._version += 1, !0
                }
                updateSortedMembersByUserIds(e) {
                    return this._sortedMemberIds = e, this._rebuildPaginationChunksFromStoredMembers(), !0
                }
                _findMember(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                        i = e;
                    i < this._sortedMemberIds.length && (i = this._sortedMemberIds.length - 1), i < 0 && (i = 0);
                    let r = this._sortedMemberIds[e],
                        n = u.default.getMember(this.guildId, r);
                    for (; null == n && !((e += t) < 0) && !(e >= this._sortedMemberIds.length);) {
                        ;
                        r = this._sortedMemberIds[e], (null == (n = u.default.getMember(this.guildId, r)) ? void 0 : n.joinedAt) == null && (n = null)
                    }
                    return n
                }
                getElasticSearchPagination() {
                    let {
                        pageSize: e,
                        currentPage: t
                    } = this._paginationState, i = d(this._paginationState), r = Math.min((Math.floor(e * t / i) + 1) * (i - 1), this._sortedMemberIds.length - 1), n = this._findMember(r, -1), s = this._findMember(Math.max(r - i, 0), 1);
                    return {
                        limit: i,
                        after: (0, a.createMemberSearchCursor)(n),
                        before: (0, a.createMemberSearchCursor)(s)
                    }
                }
                get paginatedMembers() {
                    return this._cachedPaginationChunks
                }
                get version() {
                    return this._version
                }
                constructor(e, t) {
                    this._reduceMemberIdsToPaginationChunks = (e, t, i) => {
                        let r = Math.floor(i / this._paginationState.pageSize) + 1;
                        return null == e[r] && (e[r] = []), e[r].push(t), e
                    }, this.guildId = e, this._paginationState = o(), this._version = 0;
                    let [i, r] = this._initPaginationFromRawMembers(t);
                    this._sortedMemberIds = i, this._cachedPaginationChunks = r, this._version += 1
                }
            }
        },
        936763: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getDefaultSearchState: function() {
                    return d
                },
                GuildMemberSafetySearch: function() {
                    return _
                }
            }), i("222007");
            var r = i("448105"),
                n = i.n(r),
                s = i("969176"),
                u = i.n(s),
                a = i("249654"),
                l = i("681937"),
                h = i("509"),
                o = i("770115");

            function d() {
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
                    }
                }
            }
            let m = Object.freeze(d());

            function c(e, t) {
                return null != e && (!!(e.toLowerCase().includes(t.toLowerCase()) || n(e.toLowerCase(), t.toLowerCase())) || !1)
            }
            class _ {
                get requiresUsernameMatch() {
                    return this._searchState.query.trim().length > 0
                }
                reset() {
                    this._searchState = d(), this.hasDefaultQuery = !0
                }
                updateSearchState(e) {
                    return this._searchState = {
                        ...this._searchState,
                        ...e
                    }, this.hasDefaultQuery = u(this._searchState, m), !0
                }
                resetSearchState() {
                    return !this.hasDefaultQuery && (this._searchState = d(), this.hasDefaultQuery = !0, !0)
                }
                getSearchState() {
                    return this._searchState
                }
                isMemberIncludedInSearchResults(e) {
                    let {
                        query: t,
                        requireUnusualDmActivity: i,
                        requireCommunicationDisabled: r,
                        requireUnusualAccountActivity: n,
                        requireUsernameQuarantined: s,
                        selectedRoleIds: u,
                        selectedJoinDateOption: d,
                        selectedAccountAgeOption: m
                    } = this._searchState;
                    if (t.length > 0 && ! function(e, t) {
                            if ("" === t.trim()) return !1;
                            let [i, r] = (0, o.splitQuery)(t);
                            for (let t of r)
                                if (e.userId === t) return !0;
                            for (let t of i)
                                if (c(e.nick, t)) return !0;
                            if (null == e.user) return !1;
                            let {
                                globalName: n,
                                username: s
                            } = e.user;
                            for (let e of i)
                                if (c(s, e)) return !0;
                            for (let e of i)
                                if (c(n, e)) return !0;
                            return !1
                        }(e, t)) return !1;
                    if (u.size > 0) {
                        var _, M;
                        if (_ = e, !(0 !== (M = u).size && Array.from(M).every(e => _.roles.includes(e)))) return !1
                    }
                    if (null != d.afterDate && e.joinedAtTimestamp < d.afterDate || null != d.beforeDate && e.joinedAtTimestamp > d.beforeDate || null != m.afterDate && a.default.extractTimestamp(e.userId) < m.afterDate || null != m.beforeDate && a.default.extractTimestamp(e.userId) > m.beforeDate) return !1;
                    if (i || r || n || s) return !!(i && e.hasUnusualDmActivity || r && (0, h.isMemberCommunicationDisabled)(e) || n && e.hasUnusualAccountActivity || s && (0, l.hasAutomodQuarantinedProfile)(e)) || !1;
                    return !0
                }
                constructor(e) {
                    this.guildId = e, this._searchState = d(), this.hasDefaultQuery = !0
                }
            }
        },
        770115: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                splitQuery: function() {
                    return n
                }
            }), i("424973");
            var r = i("389153");

            function n(e) {
                let t = e.split(",").map(e => e.trim()),
                    i = [],
                    n = [];
                return t.forEach(e => {
                    (0, r.isSnowflake)(e) ? i.push(e): n.push(e)
                }), [n, i]
            }
        },
        490931: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                UNUSUAL_DM_COMPARISON_DELTA: function() {
                    return r
                },
                createMemberSearchCursor: function() {
                    return n
                }
            });
            let r = 1728e5;

            function n(e) {
                if (null == e || null == e.joinedAt) return null;
                let t = new Date(e.joinedAt).getTime();
                return {
                    guild_joined_at: t,
                    user_id: e.userId
                }
            }
        },
        178406: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            }), i("808653"), i("424973"), i("222007");
            var r = i("446674"),
                n = i("913144"),
                s = i("271938"),
                u = i("26989"),
                a = i("305961"),
                l = i("697218"),
                h = i("637240"),
                o = i("159132"),
                d = i("835257");
            let m = !1,
                c = {};

            function _(e) {
                return null == c[e] && (c[e] = new h.GuildMemberSafetyPageStore(e)), c[e]
            }

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = _(e);
                i.reset(t)
            }

            function f() {
                return !1
            }

            function g(e) {
                let {
                    guildId: t
                } = e, i = _(t);
                return i.rebuildAllMembers()
            }

            function b(e) {
                let {
                    guildId: t,
                    userId: i
                } = e, r = _(t);
                return r.updateMembersByMemberIds([i])
            }

            function I(e) {
                let t = !1;
                return e.guilds.forEach(e => {
                    let {
                        id: i,
                        members: r
                    } = e, n = _(i);
                    t = n.updateServerMembers(r) || t
                }), t
            }
            class p extends r.default.Store {
                initialize() {
                    this.waitFor(s.default, u.default, l.default)
                }
                isInitialized(e) {
                    let t = _(e);
                    return t.isInitialized
                }
                getMembersByGuildId(e, t) {
                    let i = _(e);
                    return i.getMembersByIndex(t)
                }
                getMembersCountByGuildId(e, t) {
                    let i = _(e);
                    return i.countMembersByIndex(t)
                }
                getEstimatedMemberSearchCountByGuildId(e) {
                    let t = _(e),
                        i = t.searchChunkSize,
                        r = t.countMembersByIndex(t.getSearchIndex()),
                        n = t.getTotalResultsCount();
                    return null == n || n < i ? r : n
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
                calculateNewContinuationToken(e, t) {
                    let i = _(e);
                    return i.calculateNewContinuationToken(t)
                }
                getEnhancedMember(e, t) {
                    let i = _(e);
                    return i.getMember(t)
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
            let S = new p(n.default, {
                CONNECTION_OPEN: function(e) {
                    return m ? m = !1 : ! function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        for (let t in c) M(t, e)
                    }(!0), I(e)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    return I(e)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == t || null == a.default.getGuild(t)) return !1;
                    m = !0;
                    let r = _(t),
                        n = [];
                    for (let e of i) {
                        let t = r.getMember(e.userId);
                        null == t && n.push(e)
                    }
                    return n.length > 0 && r.updateClientMembers(n)
                },
                CACHE_LOADED: function(e) {
                    let {
                        guildMembers: t
                    } = e, i = !1;
                    return m = !0, Object.entries(t).forEach(e => {
                        let [t, r] = e, n = _(t);
                        i = n.updateClientMembers(Object.values(r)) || i
                    }), i
                },
                PASSIVE_UPDATE_V1: function(e) {
                    let {
                        members: t,
                        guildId: i
                    } = e;
                    if (null != t) {
                        let e = _(i);
                        return e.updateServerMembers(t)
                    }
                    return !1
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e, i = _(t.id);
                    M(t.id, i.isInitialized)
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
                        members: i
                    } = e, r = _(t);
                    return r.updateServerMembers(i)
                },
                GUILD_MEMBER_ADD: f,
                GUILD_MEMBER_UPDATE: f,
                GUILD_MEMBER_UPDATE_LOCAL: function(e) {
                    let {
                        guildId: t
                    } = e, i = s.default.getId(), r = _(t);
                    return r.updateMembersByMemberIds([i])
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        user: i
                    } = e, r = _(t);
                    return r.removeMember(i.id)
                },
                GUILD_ROLE_UPDATE: g,
                GUILD_ROLE_DELETE: g,
                GUILD_MEMBER_PROFILE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        guildMember: i
                    } = e, r = _(t);
                    return r.updateMembersByMemberIds([i.user.id])
                },
                GUILD_ROLE_MEMBER_REMOVE: b,
                GUILD_ROLE_MEMBER_ADD: b,
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let r = _(t),
                        n = i.reduce((e, t) => {
                            if (null != t.member) {
                                let i = t.member.user.id;
                                e.push(i)
                            }
                            return e
                        }, []);
                    return r.updateMembersByMemberIds(n)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        addedMembers: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let r = _(t),
                        n = i.reduce((e, t) => {
                            let i = t.userId;
                            return e.push(i), e
                        }, []);
                    return r.updateMembersByMemberIds(n)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let r = _(t),
                        n = i.reduce((e, t) => {
                            let i = t.userId;
                            return e.push(i), e
                        }, []);
                    return r.updateMembersByMemberIds(n)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        guildId: t,
                        threads: i
                    } = e, r = Object.values(i);
                    if (0 === r.length) return !1;
                    let n = _(t),
                        s = r.reduce((e, t) => {
                            if (null != t.owner) {
                                let i = t.owner.user.id;
                                e.push(i)
                            }
                            return e
                        }, []);
                    return n.updateMembersByMemberIds(s)
                },
                INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
                    let {
                        guildId: t
                    } = e, i = _(t);
                    return i.initialize()
                },
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
                    let {
                        guildId: t
                    } = e, i = _(t);
                    return i.refreshNewMembersAndSearchResults()
                },
                MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
                    let {
                        guildId: t,
                        pagination: i
                    } = e, r = _(t), [n] = r.updatePaginationState(i);
                    return n
                },
                MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
                    let {
                        guildId: t,
                        continuationToken: i
                    } = e, r = _(t);
                    return r.updatePaginationToken(i)
                },
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        searchState: i
                    } = e, r = _(t);
                    return r.updateSearchState(i)
                },
                FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        memberSupplementals: i
                    } = e, r = (0, o.syncMemberSupplemental)(t, i);
                    if (r) {
                        let e = _(t);
                        e.updateMembersByMemberIds(i.map(e => e.userId))
                    }
                    return r
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: i,
                        total_result_count: r
                    } = e, n = _(t), {
                        memberIds: s,
                        memberSupplementals: u
                    } = i.reduce((e, t) => {
                        let {
                            member: i,
                            source_invite_code: r,
                            join_source_type: n,
                            inviter_id: s
                        } = t, u = i.user;
                        return e.memberIds.push(u.id), e.memberSupplementals.push({
                            userId: u.id,
                            sourceInviteCode: r,
                            joinSourceType: n,
                            inviterId: s
                        }), e
                    }, {
                        memberIds: [],
                        memberSupplementals: []
                    }), a = (0, o.syncMemberSupplemental)(t, u);
                    (0, d.registerFetchedSupplementals)(t, s);
                    let l = n.updateSearchedMembersByMemberIds(s),
                        [h] = n.updatePaginationState({
                            totalResultsCount: r
                        }, !1);
                    return a || l || h
                },
                MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function(e) {
                    let {
                        guildId: t,
                        userIds: i
                    } = e, r = _(t);
                    return r.updateMembersByMemberIds(i)
                }
            });
            var E = S
        },
        159132: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getMemberSupplementalByGuildId: function() {
                    return s
                },
                syncMemberSupplemental: function() {
                    return u
                }
            });
            var r = i("835257");
            let n = {};

            function s(e) {
                return null == n[e] && (n[e] = {}), n[e]
            }

            function u(e, t) {
                if (0 === t.length) return !1;
                let i = s(e);
                return t.forEach(e => {
                    var t, n, s, u, a, l, h, o;
                    let d = i[e.userId],
                        m = null !== (n = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == d ? void 0 : d.joinSourceType) && void 0 !== n ? n : null;
                    (null == m || m === r.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (m = r.JoinSourceType.INVITE), i[e.userId] = {
                        userId: e.userId,
                        sourceInviteCode: null !== (u = null !== (s = e.sourceInviteCode) && void 0 !== s ? s : null == d ? void 0 : d.sourceInviteCode) && void 0 !== u ? u : null,
                        joinSourceType: m,
                        inviterId: null !== (l = null !== (a = e.inviterId) && void 0 !== a ? a : null == d ? void 0 : d.inviterId) && void 0 !== l ? l : null,
                        integrationType: null !== (o = null !== (h = e.integrationType) && void 0 !== h ? h : null == d ? void 0 : d.integrationType) && void 0 !== o ? o : null
                    }
                }), !0
            }
        },
        835257: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                registerFetchedSupplementals: function() {
                    return f
                },
                JoinSourceType: function() {
                    return n
                },
                IntegrationType: function() {
                    return s
                },
                fetchMemberSupplemental: function() {
                    return b
                }
            }), i("424973");
            var r, n, s, u, a, l, h = i("872717"),
                o = i("49111");
            let d = {};

            function m(e, t) {
                return e + t
            }

            function c(e, t) {
                return t.map(t => e + t)
            }

            function _(e) {
                return e.split("-")[1]
            }(u = r || (r = {}))[u.FAILED = 0] = "FAILED", u[u.UNFETCHED = 1] = "UNFETCHED", u[u.PENDING = 2] = "PENDING", u[u.SUCCEEDED = 3] = "SUCCEEDED", u[u.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

            function M(e, t) {
                e.forEach(e => {
                    d[e] = t
                })
            }

            function f(e, t) {
                t.forEach(t => (function(e, t, i) {
                    d[e + t] = 3
                })(e, t, 3))
            }

            function g(e) {
                return {
                    userId: e.user_id,
                    sourceInviteCode: e.source_invite_code,
                    joinSourceType: e.join_source_type,
                    inviterId: e.inviter_id,
                    integrationType: e.integration_type
                }
            }
            async function b(e, t) {
                let i = c(e, t),
                    r = i.filter(e => d[e] <= 1).map(_);
                if (0 === r.length) return [];
                M(i, 2);
                try {
                    let t = await h.default.post({
                        url: o.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                        body: {
                            user_ids: r
                        }
                    });
                    if (!Array.isArray(t.body)) return M(i, 0), [];
                    let n = t.body.map(g),
                        s = [];
                    n.forEach(e => {
                        let {
                            userId: t
                        } = e;
                        return s.push(t)
                    });
                    let u = c(e, s),
                        a = r.filter(e => !s.includes(e)),
                        l = c(e, a);
                    return M(u, 3), M(l, 0), n
                } catch (e) {
                    M(i, 0)
                }
                return []
            }(a = n || (n = {}))[a.UNSPECIFIED = 0] = "UNSPECIFIED", a[a.BOT = 1] = "BOT", a[a.INTEGRATION = 2] = "INTEGRATION", a[a.DISCOVERY = 3] = "DISCOVERY", a[a.HUB = 4] = "HUB", a[a.INVITE = 5] = "INVITE", a[a.VANITY_URL = 6] = "VANITY_URL", (l = s || (s = {})).DISCORD = "discord", l.TWITCH = "twitch", l.YOUTUBE = "youtube", l.GUILD_SUBSCRIPTION = "guild_subscription"
        },
        334572: function(e, t, i) {
            "use strict";

            function r(e, t) {
                let [, i] = e, [, r] = t;
                return i === r
            }
            i.r(t), i.d(t, {
                isVersionEqual: function() {
                    return r
                }
            }), i("222007")
        }
    }
]);
//# sourceMappingURL=55639.609a4833a8d096089cd1.js.map