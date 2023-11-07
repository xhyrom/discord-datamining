(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43820"], {
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
                a = i("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: u = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...l
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M9 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z",
                        className: s
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M2.75 3.015A2.995 2.995 0 0 1 5 2h10a3 3 0 0 1 3 3v7.645c0 .432-.547.694-.952.543a3 3 0 0 0-3.17 4.933l.026.025a.5.5 0 0 1-.354.854h-.05a.5.5 0 0 0-.5.5c0 1.887-2.011 3.094-3.677 2.206L3.53 18.614A3 3 0 0 1 2 16V5c.001-.76.285-1.456.751-1.985Zm1.301 1.951A.037.037 0 0 0 4 5v11a1 1 0 0 0 .488.86l5.777 3.08A.5.5 0 0 0 11 19.5V8.024a.5.5 0 0 0-.318-.466L4.051 4.966Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15.293 16.708a1 1 0 0 1 1.414-1.415L21 19.586V16a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.586l-4.293-4.292Z",
                        className: s
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
                    return f
                }
            }), i("424973"), i("222007");
            var r, n, a = i("969176"),
                u = i.n(a),
                s = i("407846"),
                l = i("26989"),
                o = i("697218"),
                d = i("490931"),
                h = i("159132");
            let m = Date.now();

            function c(e) {
                let t = [e.isCurrentGuildMemberByTimestamp ? r.CURRENT_GUILD_MEMBER : r.NEW_GUILD_MEMBER];
                return e.isIncludedInSearchResults && t.push(r.INCLUDED_IN_SEARCH_RESULTS), t
            }

            function _(e) {
                return -e.joinedAtTimestamp
            }

            function M() {
                return new s.default(c, _)
            }(n = r || (r = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", n.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", n.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
            class f {
                reset() {
                    this._membersMap.clear(), this._membersMap = M(), this.resetNewMemberTimestamp()
                }
                resetNewMemberTimestamp() {
                    this.newMemberTimestamp = Date.now() + 2e3
                }
                enhanceNewMember(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = null != e.joinedAt ? new Date(e.joinedAt) : new Date,
                        r = i.getTime(),
                        {
                            hasUnusualDmActivity: n,
                            sourceInviteCode: a,
                            joinSourceType: u,
                            inviterId: s,
                            integrationType: l
                        } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
                        d = {
                            hasUnusualDmActivity: n,
                            sourceInviteCode: a,
                            joinSourceType: u,
                            inviterId: s,
                            integrationType: l,
                            ...e,
                            isCurrentGuildMemberByTimestamp: r <= this.newMemberTimestamp,
                            isIncludedInSearchResults: !1,
                            user: o.default.getUser(e.userId),
                            joinedAtTimestamp: r,
                            ...t
                        };
                    return d
                }
                _computeMemberSupplementals(e, t) {
                    var i;
                    let r = (0, h.getMemberSupplementalByGuildId)(this.guildId),
                        {
                            sourceInviteCode: n,
                            joinSourceType: a,
                            inviterId: u,
                            integrationType: s
                        } = null !== (i = r[e]) && void 0 !== i ? i : {};
                    return {
                        sourceInviteCode: null != n ? n : null,
                        joinSourceType: null != a ? a : null,
                        inviterId: null != u ? u : null,
                        integrationType: null != s ? s : null,
                        hasUnusualDmActivity: function(e) {
                            if (null == e) return !1;
                            let t = new Date(e).getTime();
                            return t >= m - d.UNUSUAL_DM_COMPARISON_DELTA
                        }(t)
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
                        a = !1,
                        {
                            sourceInviteCode: s,
                            hasUnusualDmActivity: l,
                            joinSourceType: o,
                            inviterId: d,
                            integrationType: h
                        } = this._computeMemberSupplementals(r.userId, null !== (i = n.unusualDMActivityUntil) && void 0 !== i ? i : r.unusualDMActivityUntil);
                    for (let e in r.sourceInviteCode !== s && (n.sourceInviteCode = s), r.hasUnusualDmActivity !== l && (n.hasUnusualDmActivity = l), r.joinSourceType !== o && (n.joinSourceType = o), r.inviterId !== d && (n.inviterId = d), r.integrationType !== h && (n.integrationType = h), n) {
                        let t = n[e],
                            i = r[e];
                        !u(t, i) && (r[e] = t, a = !0)
                    }
                    return this._membersMap.set(r.userId, r) || a
                }
                upsertMember(e, t) {
                    let i = this.getMemberByUserId(e);
                    if (null == i) {
                        let t = l.default.getTrueMember(this.guildId, e);
                        if (null == t) return !1;
                        i = this.enhanceNewMember(t)
                    }
                    return this.updateMember(i, t)
                }
                removeMember(e) {
                    return this._membersMap.delete(e)
                }
                syncFromGuildMemberStore(e, t) {
                    let i = l.default.getTrueMember(e, t);
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
                    this.newMemberTimestamp = Date.now() + 2e3, this.guildId = e, this._membersMap = M()
                }
            }
        },
        637240: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                GuildMemberSafetyPageStore: function() {
                    return o
                }
            }), i("222007"), i("808653"), i("424973");
            var r = i("917351"),
                n = i("26989"),
                a = i("697218"),
                u = i("493910"),
                s = i("691386"),
                l = i("936763");
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
                    var e, t, i;
                    let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._initialized && (null === (e = this._members) || void 0 === e || e.reset(), null === (t = this._pagination) || void 0 === t || t.reset(), null === (i = this._search) || void 0 === i || i.reset(), r && this.initialize())
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
                    let i = this._search.hasDefaultQuery;
                    if (i) return [!1, !1];
                    let r = {
                            ...e,
                            ...t
                        },
                        n = this._search.isMemberIncludedInSearchResults(r),
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
                    let i = this._members.removeMember(e);
                    return i ? this.updatePaginationChunks() : i
                }
                _rawUpdateMember(e, t) {
                    if (null == this._members) return [!1, !1];
                    let i = !1,
                        r = this._members.getMemberByUserId(e);
                    if (null == r) {
                        i = !0;
                        let a = n.default.getTrueMember(this.guildId, e);
                        if (null == a) return [!1, !1];
                        r = this._members.enhanceNewMember(a, t)
                    }
                    if (null == t.isIncludedInSearchResults) {
                        let [e, n] = this._getIsIncludedInSearch(r, t);
                        n && (i = !0, t.isIncludedInSearchResults = e)
                    } else t.isIncludedInSearchResults !== r.isIncludedInSearchResults && (i = !0);
                    let a = this._members.updateMember(r, t);
                    return !i && (i = this._checkUpdatesForPaginationUpdate(r, t)), [i, a]
                }
                updateMember(e, t) {
                    if (null == this._members || !this._initialized) return !1;
                    let [i, r] = this._rawUpdateMember(e, t);
                    return i ? this.updatePaginationChunks() : r
                }
                updateClientMembers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (null == this._members || !this._initialized) return !1;
                    let i = !1,
                        r = !1;
                    for (let n of e) {
                        let [e, a] = this._rawUpdateMember(n.userId, t ? {
                            ...n,
                            isIncludedInSearchResults: !0
                        } : n);
                        i = e || i, r = a || r
                    }
                    return i ? this.updatePaginationChunks() : r
                }
                updateServerMembers(e) {
                    if (null == this._members || !this._initialized) return !1;
                    let t = !1,
                        i = !1;
                    for (let r of e) {
                        let e = n.default.getTrueMember(this.guildId, r.user.id);
                        if (null == e) continue;
                        let [a, u] = this._rawUpdateMember(r.user.id, e);
                        t = a || t, i = u || i
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
                        t = (0, r.cloneDeep)(this._members.values(u.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)),
                        i = !1;
                    for (let r of t) i = this._members.updateMember(r, {
                        isCurrentGuildMemberByTimestamp: !0,
                        refreshTimestamp: e,
                        user: a.default.getUser(r.userId)
                    }) || i;
                    this._members.resetNewMemberTimestamp(), this.resetSearchState() && (i = !1);
                    let [n, s] = this.updatePaginationState({
                        currentPage: 1
                    });
                    return s && (i = !1), this._scheduleRefresh(e), i && this.updatePaginationChunks(), !0
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
                        a = t !== this._search.hasDefaultQuery;
                    for (let e of n) {
                        if (!e.isCurrentGuildMemberByTimestamp) continue;
                        let t = this._search.isMemberIncludedInSearchResults(e);
                        t !== e.isIncludedInSearchResults && (a = !0, i = !0, this._members.updateMember(e, {
                            isIncludedInSearchResults: t
                        }))
                    }
                    return a ? (this.updatePaginationChunks(), this.updatePaginationState({
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
        691386: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                DEFAULT_SEARCH_CHUNK_LIMIT: function() {
                    return l
                },
                PAGINATION_PAGE_SIZE_OPTIONS: function() {
                    return o
                },
                createDefaultMemberSafetyPaginationState: function() {
                    return d
                },
                GuildMemberSafetyPagination: function() {
                    return h
                }
            }), i("808653"), i("424973"), i("222007");
            var r, n, a = i("525065"),
                u = i("26989"),
                s = i("490931");
            let l = 250,
                o = [12, 25, 50, 100];

            function d() {
                return {
                    pageSize: o[0],
                    currentPage: 1,
                    continuationToken: null
                }
            }(n = r || (r = {}))[n.FORWARD = 1] = "FORWARD", n[n.BACKWARD = -1] = "BACKWARD";
            class h {
                reset() {
                    this._paginationState = d(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
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
                    let n = null !== (t = a.default.getMemberCount(this.guildId)) && void 0 !== t ? t : this._sortedMemberIds.length,
                        u = this._sortedMemberIds.length - 1,
                        s = this._sortedMemberIds[u],
                        l = Math.min(this.searchChunkSize, u);
                    let o = null != (r = e).totalResultsCount ? r.totalResultsCount : r.currentPage * r.pageSize,
                        d = null !== (i = this._sortedMemberIds[o - 1]) && void 0 !== i ? i : s;
                    if (null == this._paginationState.continuationToken) return o < l ? this._paginationState.continuationToken : d;
                    let h = this._sortedMemberIds.findIndex(e => e === this._paginationState.continuationToken);
                    return -1 === h ? d : o > n ? s : h - o >= 0 ? this._paginationState.continuationToken : Math.ceil(o / l) > Math.ceil(h / l) ? d : this._paginationState.continuationToken
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
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.BACKWARD,
                        i = e;
                    i < this._sortedMemberIds.length && (i = this._sortedMemberIds.length - 1), i < 0 && (i = 0);
                    let n = this._sortedMemberIds[e],
                        a = u.default.getMember(this.guildId, n);
                    for (; null == a;) {
                        var s;
                        if ((e += t) < 0 || e >= this._sortedMemberIds.length) break;
                        n = this._sortedMemberIds[e], (null === (s = a = u.default.getMember(this.guildId, n)) || void 0 === s ? void 0 : s.joinedAt) == null && (a = null)
                    }
                    return a
                }
                getElasticSearchPagination() {
                    let {
                        pageSize: e,
                        currentPage: t
                    } = this._paginationState, i = this.searchChunkSize, n = Math.floor(e * t / this.searchChunkSize) + 1, a = this.searchChunkSize - 1, u = Math.min(n * a, this._sortedMemberIds.length - 1), l = this._findMember(u, r.BACKWARD), o = Math.max(u - this.searchChunkSize, 0), d = this._findMember(o, r.FORWARD);
                    return {
                        limit: i,
                        after: (0, s.createMemberSearchCursor)(l),
                        before: (0, s.createMemberSearchCursor)(d)
                    }
                }
                get paginatedMembers() {
                    return this._cachedPaginationChunks
                }
                get version() {
                    return this._version
                }
                constructor(e, t) {
                    this.searchChunkSize = l, this._reduceMemberIdsToPaginationChunks = (e, t, i) => {
                        let r = Math.floor(i / this._paginationState.pageSize) + 1;
                        return null == e[r] && (e[r] = []), e[r].push(t), e
                    }, this.guildId = e, this._paginationState = d(), this._version = 0;
                    let [i, r] = this._initPaginationFromRawMembers(t);
                    this._sortedMemberIds = i, this._cachedPaginationChunks = r, this._version += 1
                }
            }
        },
        936763: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getDefaultSearchState: function() {
                    return o
                },
                GuildMemberSafetySearch: function() {
                    return m
                }
            }), i("222007");
            var r = i("448105"),
                n = i.n(r),
                a = i("969176"),
                u = i.n(a),
                s = i("509"),
                l = i("770115");

            function o() {
                return {
                    query: "",
                    requireUnusualDmActivity: !1,
                    requireCommunicationDisabled: !1,
                    selectedRoleIds: new Set
                }
            }
            let d = Object.freeze(o());

            function h(e, t) {
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
                    }, this.hasDefaultQuery = u(this._searchState, d), !0
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
                        requireUnusualDmActivity: i,
                        requireCommunicationDisabled: r,
                        selectedRoleIds: n
                    } = this._searchState;
                    if (t.length > 0 && ! function(e, t) {
                            if ("" === t.trim()) return !1;
                            let [i, r] = (0, l.splitQuery)(t);
                            for (let t of r)
                                if (e.userId === t) return !0;
                            for (let t of i)
                                if (h(e.nick, t)) return !0;
                            if (null == e.user) return !1;
                            let {
                                globalName: n,
                                username: a
                            } = e.user;
                            for (let e of i)
                                if (h(a, e)) return !0;
                            for (let e of i)
                                if (h(n, e)) return !0;
                            return !1
                        }(e, t)) return !1;
                    if (n.size > 0) {
                        var a, u;
                        if (a = e, !(0 !== (u = n).size && Array.from(u).every(e => a.roles.includes(e)))) return !1
                    }
                    if (i || r) return !!(i && e.hasUnusualDmActivity || r && (0, s.isMemberCommunicationDisabled)(e)) || !1;
                    return !0
                }
                constructor(e) {
                    this.guildId = e, this._searchState = o(), this.hasDefaultQuery = !0
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
                    return T
                }
            }), i("222007"), i("424973"), i("808653");
            var r = i("446674"),
                n = i("913144"),
                a = i("271938"),
                u = i("26989"),
                s = i("305961"),
                l = i("697218"),
                o = i("449008"),
                d = i("637240"),
                h = i("159132"),
                m = i("835257");
            let c = !1,
                _ = {};

            function M(e) {
                return null == _[e] && (_[e] = new d.GuildMemberSafetyPageStore(e)), _[e]
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = M(e);
                i.reset(t)
            }

            function S(e) {
                let {
                    guildId: t,
                    user: i
                } = e, r = M(t);
                return r.updateMembersByMemberIds([i.id])
            }

            function p(e) {
                let {
                    guildId: t
                } = e, i = M(t);
                return i.rebuildAllMembers()
            }

            function E(e) {
                let {
                    guildId: t,
                    userId: i
                } = e, r = M(t);
                return r.updateMembersByMemberIds([i])
            }

            function b(e) {
                let t = !1;
                return e.guilds.forEach(e => {
                    let {
                        id: i,
                        members: r
                    } = e, n = M(i);
                    t = n.updateServerMembers(r) || t
                }), t
            }
            class I extends r.default.Store {
                initialize() {
                    this.waitFor(a.default, u.default, l.default)
                }
                isInitialized(e) {
                    let t = M(e);
                    return t.isInitialized
                }
                getMembersByGuildId(e, t) {
                    let i = M(e);
                    return i.getMembersByIndex(t)
                }
                getMembersCountByGuildId(e, t) {
                    let i = M(e);
                    return i.countMembersByIndex(t)
                }
                getEstimatedMemberSearchCountByGuildId(e) {
                    let t = M(e),
                        i = t.getPaginationState(),
                        r = t.searchChunkSize,
                        n = t.countMembersByIndex(t.getSearchIndex());
                    return null == i.totalResultsCount || i.totalResultsCount < r ? n : i.totalResultsCount
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
                    let i = M(e);
                    return i.calculateNewContinuationToken(t)
                }
                getEnhancedMember(e, t) {
                    let i = M(e);
                    return i.getMember(t)
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
                        for (let t in _) f(t, e)
                    }(!0), b(e)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    return b(e)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == t || null == s.default.getGuild(t)) return !1;
                    c = !0;
                    let r = M(t),
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
                    return c = !0, Object.entries(t).forEach(e => {
                        let [t, r] = e, n = M(t);
                        i = n.updateClientMembers(Object.values(r)) || i
                    }), i
                },
                PASSIVE_UPDATE_V1: function(e) {
                    let {
                        members: t,
                        guildId: i
                    } = e;
                    if (null != t) {
                        let e = M(i);
                        return e.updateServerMembers(t)
                    }
                    return !1
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e, i = M(t.id);
                    f(t.id, i.isInitialized)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    f(t)
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e, r = M(t);
                    return r.updateServerMembers(i)
                },
                GUILD_MEMBER_ADD: S,
                GUILD_MEMBER_UPDATE: S,
                GUILD_MEMBER_UPDATE_LOCAL: function(e) {
                    let {
                        guildId: t
                    } = e, i = a.default.getId(), r = M(t);
                    return r.updateMembersByMemberIds([i])
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        user: i
                    } = e, r = M(t);
                    return r.removeMember(i.id)
                },
                GUILD_ROLE_UPDATE: p,
                GUILD_ROLE_DELETE: p,
                GUILD_MEMBER_PROFILE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        guildMember: i
                    } = e, r = M(t);
                    return r.updateMembersByMemberIds([i.user.id])
                },
                GUILD_ROLE_MEMBER_REMOVE: E,
                GUILD_ROLE_MEMBER_ADD: E,
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let r = M(t),
                        n = i.map(e => {
                            var t;
                            return null === (t = e.member) || void 0 === t ? void 0 : t.user.id
                        }).filter(o.isNotNullish);
                    return r.updateMembersByMemberIds(n)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        addedMembers: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let r = M(t),
                        n = i.map(e => e.userId);
                    return r.updateMembersByMemberIds(n)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let r = M(t),
                        n = i.map(e => e.userId);
                    return r.updateMembersByMemberIds(n)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        guildId: t,
                        threads: i
                    } = e, r = Object.values(i);
                    if (0 === r.length) return !1;
                    let n = M(t),
                        a = r.map(e => {
                            var t;
                            return null === (t = e.owner) || void 0 === t ? void 0 : t.user.id
                        }).filter(o.isNotNullish);
                    return n.updateMembersByMemberIds(a)
                },
                INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
                    let {
                        guildId: t
                    } = e, i = M(t);
                    return i.initialize()
                },
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
                    let {
                        guildId: t
                    } = e, i = M(t);
                    return i.refreshNewMembersAndSearchResults()
                },
                MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
                    let {
                        guildId: t,
                        pagination: i
                    } = e, r = M(t), [n] = r.updatePaginationState(i);
                    return n
                },
                MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
                    let {
                        guildId: t,
                        continuationToken: i
                    } = e, r = M(t);
                    return r.updatePaginationToken(i)
                },
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        searchState: i
                    } = e, r = M(t);
                    return r.updateSearchState(i)
                },
                FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        memberSupplementals: i
                    } = e, r = (0, h.syncMemberSupplemental)(t, i);
                    if (r) {
                        let e = M(t);
                        e.updateMembersByMemberIds(i.map(e => e.userId))
                    }
                    return r
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: i,
                        total_result_count: r
                    } = e, n = M(t), {
                        memberIds: a,
                        memberSupplementals: u
                    } = i.reduce((e, t) => {
                        let {
                            member: i,
                            source_invite_code: r,
                            join_source_type: n,
                            inviter_id: a
                        } = t, u = i.user;
                        return e.memberIds.push(u.id), e.memberSupplementals.push({
                            userId: u.id,
                            sourceInviteCode: r,
                            joinSourceType: n,
                            inviterId: a
                        }), e
                    }, {
                        memberIds: [],
                        memberSupplementals: []
                    }), s = (0, h.syncMemberSupplemental)(t, u);
                    (0, m.registerFetchedSupplementals)(t, a);
                    let l = n.updateSearchedMembersByMemberIds(a),
                        [o] = n.updatePaginationState({
                            totalResultsCount: r
                        });
                    return s || l || o
                }
            });
            var T = g
        },
        645266: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                initializeMemberSafetyStore: function() {
                    return c
                },
                refreshMemberSafetyTimestamp: function() {
                    return _
                },
                updateMemberSafetyTablePagination: function() {
                    return M
                },
                requestNewPaginationChunk: function() {
                    return f
                },
                updateSearchState: function() {
                    return S
                },
                getMemberSupplemental: function() {
                    return p
                },
                goToMemberSafetyDashboard: function() {
                    return E
                }
            });
            var r = i("812204"),
                n = i("592407"),
                a = i("393414"),
                u = i("305961"),
                s = i("536999"),
                l = i("466818"),
                o = i("95429"),
                d = i("447038"),
                h = i("49111"),
                m = i("724210");
            async function c(e) {
                let t = (0, s.isInMembersSearchV2Experiment)(e, {
                    autoTrackExposure: !0,
                    location: r.default.MEMBER_SAFETY_PAGE
                });
                return t ? await (0, d.initializeMemberSafetyStoreV2)(e) : await (0, o.initializeMemberSafetyStoreV1)(e)
            }

            function _(e) {
                let t = (0, s.isInMembersSearchV2Experiment)(e);
                return t ? (0, d.refreshMemberSafetyTimestampV2)(e) : (0, o.refreshMemberSafetyTimestampV1)(e)
            }

            function M(e, t) {
                let i = (0, s.isInMembersSearchV2Experiment)(e);
                return i ? (0, d.updateMemberSafetyTablePaginationV2)(e, t) : (0, o.updateMemberSafetyTablePaginationV1)(e, t)
            }

            function f(e, t) {
                let i = (0, s.isInMembersSearchV2Experiment)(e);
                return i ? (0, d.requestNewPaginationChunkV2)(e, t) : (0, o.requestNewPaginationChunkV1)(e, t)
            }

            function S(e, t) {
                let i = (0, s.isInMembersSearchV2Experiment)(e);
                return i ? (0, d.updateSearchStateV2)(e, t) : (0, o.updateSearchStateV1)(e, t)
            }

            function p(e, t) {
                let i = (0, s.isInMembersSearchV2Experiment)(e);
                return i ? (0, d.getMemberSupplementalV2)(e, t) : (0, o.getMemberSupplementalV1)(e, t)
            }

            function E(e) {
                let t = (0, l.canAccessMemberSafetyPage)(e),
                    i = u.default.getGuild(e);
                return !!t && null != i && (i.hasFeature(h.GuildFeatures.COMMUNITY) || i.hasFeature(h.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, a.transitionTo)(h.Routes.CHANNEL(e, m.StaticChannelRoute.MEMBER_SAFETY)), !0) : (n.default.open(i.id, h.GuildSettingsSections.MEMBERS), !0))
            }
        },
        95429: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                initializeMemberSafetyStoreV1: function() {
                    return l
                },
                refreshMemberSafetyTimestampV1: function() {
                    return o
                },
                updateMemberSafetyTablePaginationV1: function() {
                    return d
                },
                requestNewPaginationChunkV1: function() {
                    return h
                },
                updateSearchStateV1: function() {
                    return m
                },
                getMemberSupplementalV1: function() {
                    return c
                }
            });
            var r = i("913144"),
                n = i("851387"),
                a = i("525065"),
                u = i("178406"),
                s = i("835257");
            async function l(e) {
                let t = u.default.isInitialized(e);
                if (t) n.default.searchRecentMembers(e);
                else {
                    var i;
                    await r.default.dispatch({
                        type: "INITIALIZE_MEMBER_SAFETY_STORE",
                        guildId: e
                    }), n.default.searchRecentMembers(e);
                    let t = null !== (i = a.default.getMemberCount(e)) && void 0 !== i ? i : 0;
                    t > 1e3 && n.default.requestMembers(e, "", 3e3)
                }
            }

            function o(e) {
                r.default.dispatch({
                    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
                    guildId: e
                })
            }

            function d(e, t) {
                let {
                    continuationToken: i,
                    ...n
                } = t;
                r.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
                    guildId: e,
                    pagination: n
                })
            }
            async function h(e, t) {
                var i, a;
                let {
                    query: u,
                    continuationToken: s
                } = t;
                i = e, a = s, r.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE",
                    guildId: i,
                    continuationToken: a
                }), await n.default.searchRecentMembers(e, {
                    query: u,
                    continuationToken: null != s ? s : void 0
                })
            }
            async function m(e, t) {
                await r.default.dispatch({
                    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
                    guildId: e,
                    searchState: t
                })
            }
            async function c(e, t) {
                let i = await (0, s.fetchMemberSupplemental)(e, t);
                return 0 === i.length ? [] : (await r.default.dispatch({
                    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
                    guildId: e,
                    memberSupplementals: i
                }), i)
            }
        },
        447038: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
                    return d
                },
                updateSearchStateV2: function() {
                    return h
                },
                getMemberSupplementalV2: function() {
                    return m
                }
            });
            var r = i("811022"),
                n = i("913144"),
                a = i("835257");
            let u = new r.default("MemberSafetyStoreActionCreatorsV2");
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
                    continuationToken: i,
                    ...r
                } = t;
                u.info("JANK updateMemberSafetyTablePaginationV2", {
                    guildId: e,
                    pagination: r
                }), n.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
                    guildId: e,
                    pagination: r
                })
            }
            async function d(e, t) {
                var i, r;
                let {
                    continuationToken: a
                } = t;
                u.info("JANK requestNewPaginationChunkV2", {
                    guildId: e,
                    continuationToken: a
                }), i = e, r = a, u.info("JANK updateMemberSafetyTablePaginationTokenV2", {
                    guildId: i,
                    continuationToken: r
                }), n.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE",
                    guildId: i,
                    continuationToken: r
                }), await Promise.resolve()
            }
            async function h(e, t) {
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
                let i = await (0, a.fetchMemberSupplemental)(e, t);
                return 0 === i.length ? [] : (await n.default.dispatch({
                    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
                    guildId: e,
                    memberSupplementals: i
                }), i)
            }
        },
        159132: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getMemberSupplementalByGuildId: function() {
                    return a
                },
                syncMemberSupplemental: function() {
                    return u
                }
            });
            var r = i("835257");
            let n = {};

            function a(e) {
                return null == n[e] && (n[e] = {}), n[e]
            }

            function u(e, t) {
                if (0 === t.length) return !1;
                let i = a(e);
                return t.forEach(e => {
                    var t, n, a, u, s, l, o, d;
                    let h = i[e.userId],
                        m = null !== (n = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == h ? void 0 : h.joinSourceType) && void 0 !== n ? n : null;
                    (null == m || m === r.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (m = r.JoinSourceType.INVITE), i[e.userId] = {
                        userId: e.userId,
                        sourceInviteCode: null !== (u = null !== (a = e.sourceInviteCode) && void 0 !== a ? a : null == h ? void 0 : h.sourceInviteCode) && void 0 !== u ? u : null,
                        joinSourceType: m,
                        inviterId: null !== (l = null !== (s = e.inviterId) && void 0 !== s ? s : null == h ? void 0 : h.inviterId) && void 0 !== l ? l : null,
                        integrationType: null !== (d = null !== (o = e.integrationType) && void 0 !== o ? o : null == h ? void 0 : h.integrationType) && void 0 !== d ? d : null
                    }
                }), !0
            }
        },
        835257: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                JoinSourceType: function() {
                    return s
                },
                IntegrationType: function() {
                    return l
                },
                registerFetchedSupplementals: function() {
                    return _
                },
                fetchMemberSupplemental: function() {
                    return f
                }
            });
            var r, n, a, u, s, l, o = i("872717"),
                d = i("49111");
            (r = u || (u = {}))[r.FAILED = 0] = "FAILED", r[r.UNFETCHED = 1] = "UNFETCHED", r[r.PENDING = 2] = "PENDING", r[r.SUCCEEDED = 3] = "SUCCEEDED", (n = s || (s = {}))[n.UNSPECIFIED = 0] = "UNSPECIFIED", n[n.BOT = 1] = "BOT", n[n.INTEGRATION = 2] = "INTEGRATION", n[n.DISCOVERY = 3] = "DISCOVERY", n[n.HUB = 4] = "HUB", n[n.INVITE = 5] = "INVITE", n[n.VANITY_URL = 6] = "VANITY_URL", (a = l || (l = {})).DISCORD = "discord", a.TWITCH = "twitch", a.YOUTUBE = "youtube", a.GUILD_SUBSCRIPTION = "guild_subscription";
            let h = {};

            function m(e, t) {
                return e + t
            }

            function c(e, t, i) {
                h[e + t] = i
            }

            function _(e, t) {
                t.forEach(t => c(e, t, u.SUCCEEDED))
            }

            function M(e) {
                return {
                    userId: e.user_id,
                    sourceInviteCode: e.source_invite_code,
                    joinSourceType: e.join_source_type,
                    inviterId: e.inviter_id,
                    integrationType: e.integration_type
                }
            }
            async function f(e, t) {
                let i = t.filter(t => (function(e, t) {
                    let i = e + t;
                    return null == h[i] && (h[i] = u.UNFETCHED), h[i]
                })(e, t) <= u.UNFETCHED);
                if (0 === i.length) return [];
                i.forEach(t => c(e, t, u.PENDING));
                try {
                    let t = await o.default.post({
                        url: d.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                        body: {
                            user_ids: i
                        }
                    });
                    if (!Array.isArray(t.body)) return [];
                    let r = t.body.map(M);
                    return r.forEach(t => {
                        let {
                            userId: i
                        } = t;
                        return c(e, i, u.SUCCEEDED)
                    }), r
                } catch (t) {
                    i.forEach(t => c(e, t, u.FAILED))
                }
                return []
            }
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
//# sourceMappingURL=863c8d5089a184979277.js.map