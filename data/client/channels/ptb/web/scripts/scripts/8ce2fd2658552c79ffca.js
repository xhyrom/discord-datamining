(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43820"], {
        354087: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                DoorExitIcon: function() {
                    return u
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("669491"),
                a = i("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...l
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(l),
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M9 12C9.55228 12 10 12.4477 10 13V15C10 15.5523 9.55228 16 9 16C8.44772 16 8 15.5523 8 15V13C8 12.4477 8.44772 12 9 12Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: s
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2.75026 3.01535C3.29851 2.3942 4.10384 2 5 2H15C16.6569 2 18 3.34315 18 5V12.6445C18 13.0769 17.4528 13.3388 17.0476 13.1881C15.9816 12.7917 14.7355 13.0219 13.8787 13.8787C12.7071 15.0503 12.7071 16.9497 13.8787 18.1213L13.9038 18.1464C14.2188 18.4614 13.9957 19 13.5503 19H13.4998C13.2237 19 13 19.2237 13 19.4998C13 21.3872 10.9886 22.5939 9.32334 21.7055L3.52933 18.6147C3.51922 18.6094 3.5092 18.6038 3.49927 18.598C2.60518 18.0808 2 17.1117 2 16V5C2 4.23985 2.28402 3.5436 2.75026 3.01535ZM4.05096 4.96617C4.02656 4.95663 4 4.9738 4 5V16C4 16.3638 4.19381 16.6836 4.48843 16.8596L10.2647 19.9409C10.5977 20.1186 11 19.8772 11 19.4998V8.02415C11 7.81827 10.8738 7.63343 10.682 7.55847L4.05096 4.96617Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: s
                    }), (0, n.jsx)("path", {
                        d: "M15.2934 16.7076C14.9029 16.3171 14.9024 15.6834 15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929L21 19.5858V16C21 15.4477 21.4477 15 22 15C22.5523 15 23 15.4477 23 16V22C23 22.5523 22.5523 23 22 23H16C15.4477 23 15 22.5523 15 22C15 21.4477 15.4477 21 16 21H19.5858L15.2934 16.7076Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: s
                    })]
                })
            }
        },
        493910: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                MemberSafetySecondaryIndex: function() {
                    return n
                },
                GuildMemberSafetyMembers: function() {
                    return S
                }
            }), i("424973"), i("222007");
            var n, r, a = i("969176"),
                u = i.n(a),
                s = i("407846"),
                l = i("654017"),
                o = i("26989"),
                d = i("697218"),
                h = i("490931"),
                m = i("159132");
            let c = Date.now();

            function _(e) {
                let t = [e.isCurrentGuildMemberByTimestamp ? "CURRENT_GUILD_MEMBER" : "NEW_GUILD_MEMBER"];
                return e.isIncludedInSearchResults && t.push("INCLUDED_IN_SEARCH_RESULTS"), t
            }

            function M(e) {
                return -e.joinedAtTimestamp
            }

            function f() {
                return new s.default(_, M)
            }(r = n || (n = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", r.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", r.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
            class S {
                reset() {
                    this._membersMap.clear(), this._membersMap = f(), this.resetNewMemberTimestamp()
                }
                resetNewMemberTimestamp() {
                    this.newMemberTimestamp = Date.now() + 2e3
                }
                enhanceNewMember(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = null != e.joinedAt ? new Date(e.joinedAt) : new Date,
                        n = i.getTime(),
                        {
                            hasUnusualDmActivity: r,
                            hasSpammerUserFlag: a,
                            sourceInviteCode: u,
                            joinSourceType: s,
                            inviterId: l,
                            integrationType: o
                        } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
                        h = d.default.getUser(e.userId),
                        m = {
                            hasUnusualDmActivity: r,
                            hasSpammerUserFlag: a,
                            sourceInviteCode: u,
                            joinSourceType: s,
                            inviterId: l,
                            integrationType: o,
                            ...e,
                            isCurrentGuildMemberByTimestamp: n <= this.newMemberTimestamp,
                            isIncludedInSearchResults: !1,
                            user: h,
                            joinedAtTimestamp: n,
                            ...t
                        };
                    return m
                }
                _computeMemberSupplementals(e, t) {
                    var i;
                    let n = (0, m.getMemberSupplementalByGuildId)(this.guildId),
                        {
                            sourceInviteCode: r,
                            joinSourceType: a,
                            inviterId: u,
                            integrationType: s
                        } = null !== (i = n[e]) && void 0 !== i ? i : {};
                    return {
                        sourceInviteCode: null != r ? r : null,
                        joinSourceType: null != a ? a : null,
                        inviterId: null != u ? u : null,
                        integrationType: null != s ? s : null,
                        hasUnusualDmActivity: function(e) {
                            if (null == e) return !1;
                            let t = new Date(e).getTime();
                            return t >= c - h.UNUSUAL_DM_COMPARISON_DELTA
                        }(t),
                        hasSpammerUserFlag: (0, l.isSpammer)(e)
                    }
                }
                createMember(e) {
                    return this._membersMap.set(e.userId, e)
                }
                updateMember(e, t) {
                    var i;
                    if (null == t) return this._membersMap.set(e.userId, e);
                    let n = {
                            ...e
                        },
                        r = {
                            ...t
                        },
                        a = !1,
                        {
                            sourceInviteCode: s,
                            hasUnusualDmActivity: l,
                            hasSpammerUserFlag: o,
                            joinSourceType: d,
                            inviterId: h,
                            integrationType: m
                        } = this._computeMemberSupplementals(n.userId, null !== (i = r.unusualDMActivityUntil) && void 0 !== i ? i : n.unusualDMActivityUntil);
                    for (let e in n.sourceInviteCode !== s && (r.sourceInviteCode = s), n.hasUnusualDmActivity !== l && (r.hasUnusualDmActivity = l), n.hasSpammerUserFlag !== o && (r.hasSpammerUserFlag = o), n.joinSourceType !== d && (r.joinSourceType = d), n.inviterId !== h && (r.inviterId = h), n.integrationType !== m && (r.integrationType = m), r) {
                        let t = r[e],
                            i = n[e];
                        !u(t, i) && (n[e] = t, a = !0)
                    }
                    return this._membersMap.set(n.userId, n) || a
                }
                upsertMember(e, t) {
                    let i = this.getMemberByUserId(e);
                    if (null == i) {
                        let t = o.default.getTrueMember(this.guildId, e);
                        if (null == t) return !1;
                        i = this.enhanceNewMember(t)
                    }
                    return this.updateMember(i, t)
                }
                removeMember(e) {
                    return this._membersMap.delete(e)
                }
                syncFromGuildMemberStore(e, t) {
                    let i = o.default.getTrueMember(e, t);
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
                    this.newMemberTimestamp = Date.now() + 2e3, this.guildId = e, this._membersMap = f()
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
            var n = i("917351"),
                r = i("26989"),
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
                    let e = r.default.getMemberIds(this.guildId);
                    for (let t of e) this._members.syncFromGuildMemberStore(this.guildId, t);
                    this._pagination = new s.GuildMemberSafetyPagination(this.guildId, this._members.values(this.getSearchIndex()))
                }
                get isInitialized() {
                    return this._initialized
                }
                reset() {
                    var e, t, i;
                    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._initialized && (null === (e = this._members) || void 0 === e || e.reset(), null === (t = this._pagination) || void 0 === t || t.reset(), null === (i = this._search) || void 0 === i || i.reset(), n && this.initialize())
                }
                get searchChunkSize() {
                    return null != this._pagination && this._initialized ? (0, s.getSearchChunkLimit)(this._pagination.getPaginationState()) : 0
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
                    let n = {
                            ...e,
                            ...t
                        },
                        r = this._search.isMemberIncludedInSearchResults(n),
                        a = r !== e.isIncludedInSearchResults;
                    return [r, a]
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
                        n = this._members.getMemberByUserId(e);
                    if (null == n) {
                        i = !0;
                        let a = r.default.getTrueMember(this.guildId, e);
                        if (null == a) return [!1, !1];
                        n = this._members.enhanceNewMember(a, t)
                    }
                    if (null == t.isIncludedInSearchResults) {
                        let [e, r] = this._getIsIncludedInSearch(n, t);
                        r && (i = !0, t.isIncludedInSearchResults = e)
                    } else t.isIncludedInSearchResults !== n.isIncludedInSearchResults && (i = !0);
                    let a = this._members.updateMember(n, t);
                    return !i && (i = this._checkUpdatesForPaginationUpdate(n, t)), [i, a]
                }
                updateMember(e, t) {
                    if (null == this._members || !this._initialized) return !1;
                    let [i, n] = this._rawUpdateMember(e, t);
                    return i ? this.updatePaginationChunks() : n
                }
                updateClientMembers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (null == this._members || !this._initialized) return !1;
                    let i = !1,
                        n = !1;
                    for (let r of e) {
                        let [e, a] = this._rawUpdateMember(r.userId, t ? {
                            ...r,
                            isIncludedInSearchResults: !0
                        } : r);
                        i = e || i, n = a || n
                    }
                    return i ? this.updatePaginationChunks() : n
                }
                updateServerMembers(e) {
                    if (null == this._members || !this._initialized) return !1;
                    let t = !1,
                        i = !1;
                    for (let n of e) {
                        let e = r.default.getTrueMember(this.guildId, n.user.id);
                        if (null == e) continue;
                        let [a, u] = this._rawUpdateMember(n.user.id, e);
                        t = a || t, i = u || i
                    }
                    return t ? this.updatePaginationChunks() : i
                }
                updateMembersByMemberIds(e) {
                    if (null == this._members || !this._initialized) return !1;
                    let t = e.reduce((e, t) => {
                        let i = r.default.getTrueMember(this.guildId, t);
                        return null != i && e.push(i), e
                    }, []);
                    return this.updateClientMembers(t)
                }
                updateSearchedMembersByMemberIds(e) {
                    if (null == this._search || null == this._members || !this._initialized) return !1;
                    let t = e.reduce((e, t) => {
                        let i = r.default.getTrueMember(this.guildId, t);
                        return null != i && e.push(i), e
                    }, []);
                    return this.updateClientMembers(t, this._search.requiresUsernameMatch)
                }
                rebuildAllMembers() {
                    if (null == this._members || !this._initialized) return !1;
                    let e = r.default.getMembers(this.guildId);
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
                        t = (0, n.cloneDeep)(this._members.values(u.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)),
                        i = !1;
                    for (let n of t) i = this._members.updateMember(n, {
                        isCurrentGuildMemberByTimestamp: !0,
                        refreshTimestamp: e,
                        user: a.default.getUser(n.userId)
                    }) || i;
                    this._members.resetNewMemberTimestamp(), this.resetSearchState() && (i = !1);
                    let [r, s] = this.updatePaginationState({
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
                    let r = (0, n.cloneDeep)(this._members.values(u.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)),
                        a = t !== this._search.hasDefaultQuery;
                    for (let e of r) {
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
                PAGINATION_PAGE_SIZE_OPTIONS: function() {
                    return l
                },
                MAX_VISIBLE_PAGES: function() {
                    return o
                },
                createDefaultMemberSafetyPaginationState: function() {
                    return d
                },
                getSearchChunkLimit: function() {
                    return h
                },
                GuildMemberSafetyPagination: function() {
                    return m
                }
            }), i("808653"), i("424973"), i("222007");
            var n, r, a = i("525065"),
                u = i("26989"),
                s = i("490931");
            let l = [12, 25, 50, 100],
                o = 7;

            function d() {
                return {
                    pageSize: l[0],
                    currentPage: 1,
                    continuationToken: null
                }
            }(r = n || (n = {}))[r.FORWARD = 1] = "FORWARD", r[r.BACKWARD = -1] = "BACKWARD";

            function h(e) {
                return Math.max(5 * e.pageSize, 250)
            }
            class m {
                reset() {
                    this._paginationState = d(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
                }
                _initPaginationFromRawMembers(e) {
                    let t = [],
                        i = e.reduce((e, i, n) => (e = this._reduceMemberIdsToPaginationChunks(e, i.userId, n), t.push(i.userId), e), {});
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
                    var t, i, n;
                    let r = null !== (t = a.default.getMemberCount(this.guildId)) && void 0 !== t ? t : this._sortedMemberIds.length,
                        u = this._sortedMemberIds.length - 1,
                        s = this._sortedMemberIds[u],
                        l = Math.min(h(this._paginationState), u);
                    let o = null != (n = e).totalResultsCount ? n.totalResultsCount : n.currentPage * n.pageSize,
                        d = null !== (i = this._sortedMemberIds[o - 1]) && void 0 !== i ? i : s;
                    if (null == this._paginationState.continuationToken) return o < l ? this._paginationState.continuationToken : d;
                    let m = this._sortedMemberIds.findIndex(e => e === this._paginationState.continuationToken);
                    return -1 === m ? d : o > r ? s : m - o >= 0 ? this._paginationState.continuationToken : Math.ceil(o / l) > Math.ceil(m / l) ? d : this._paginationState.continuationToken
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
                        pageSize: n
                    } = this._paginationState, r = e * n <= this._sortedMemberIds.length;
                    return r ? Math.max(Math.ceil(n / e * (null != t ? t : i)), 1) : 1
                }
                updatePaginationState(e) {
                    let t = !1,
                        i = null != e.pageSize && e.pageSize !== this._paginationState.pageSize;
                    if (i) {
                        var n;
                        t = !0, e.currentPage = this._calculateNewPageFromPageSizeChange(null !== (n = e.pageSize) && void 0 !== n ? n : this._paginationState.pageSize, e.currentPage)
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
                    let n = this._sortedMemberIds[e],
                        r = u.default.getMember(this.guildId, n);
                    for (; null == r && !((e += t) < 0) && !(e >= this._sortedMemberIds.length);) {
                        ;
                        n = this._sortedMemberIds[e], (null == (r = u.default.getMember(this.guildId, n)) ? void 0 : r.joinedAt) == null && (r = null)
                    }
                    return r
                }
                getElasticSearchPagination() {
                    let {
                        pageSize: e,
                        currentPage: t
                    } = this._paginationState, i = h(this._paginationState), n = Math.min((Math.floor(e * t / i) + 1) * (i - 1), this._sortedMemberIds.length - 1), r = this._findMember(n, -1), a = this._findMember(Math.max(n - i, 0), 1);
                    return {
                        limit: i,
                        after: (0, s.createMemberSearchCursor)(r),
                        before: (0, s.createMemberSearchCursor)(a)
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
                        let n = Math.floor(i / this._paginationState.pageSize) + 1;
                        return null == e[n] && (e[n] = []), e[n].push(t), e
                    }, this.guildId = e, this._paginationState = d(), this._version = 0;
                    let [i, n] = this._initPaginationFromRawMembers(t);
                    this._sortedMemberIds = i, this._cachedPaginationChunks = n, this._version += 1
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
            var n = i("448105"),
                r = i.n(n),
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
                return null != e && (!!(e.toLowerCase().includes(t.toLowerCase()) || r(e.toLowerCase(), t.toLowerCase())) || !1)
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
                        requireCommunicationDisabled: n,
                        selectedRoleIds: r
                    } = this._searchState;
                    if (t.length > 0 && ! function(e, t) {
                            if ("" === t.trim()) return !1;
                            let [i, n] = (0, l.splitQuery)(t);
                            for (let t of n)
                                if (e.userId === t) return !0;
                            for (let t of i)
                                if (h(e.nick, t)) return !0;
                            if (null == e.user) return !1;
                            let {
                                globalName: r,
                                username: a
                            } = e.user;
                            for (let e of i)
                                if (h(a, e)) return !0;
                            for (let e of i)
                                if (h(r, e)) return !0;
                            return !1
                        }(e, t)) return !1;
                    if (r.size > 0) {
                        var a, u;
                        if (a = e, !(0 !== (u = r).size && Array.from(u).every(e => a.roles.includes(e)))) return !1
                    }
                    if (i || n) return !!(i && e.hasUnusualDmActivity || n && (0, s.isMemberCommunicationDisabled)(e)) || !1;
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
                    return r
                }
            }), i("424973");
            var n = i("389153");

            function r(e) {
                let t = e.split(",").map(e => e.trim()),
                    i = [],
                    r = [];
                return t.forEach(e => {
                    (0, n.isSnowflake)(e) ? i.push(e): r.push(e)
                }), [r, i]
            }
        },
        490931: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                UNUSUAL_DM_COMPARISON_DELTA: function() {
                    return n
                },
                createMemberSearchCursor: function() {
                    return r
                }
            });
            let n = 1728e5;

            function r(e) {
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
            var n = i("446674"),
                r = i("913144"),
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
                } = e, n = M(t);
                return n.updateMembersByMemberIds([i.id])
            }

            function p(e) {
                let {
                    guildId: t
                } = e, i = M(t);
                return i.rebuildAllMembers()
            }

            function b(e) {
                let {
                    guildId: t,
                    userId: i
                } = e, n = M(t);
                return n.updateMembersByMemberIds([i])
            }

            function E(e) {
                let t = !1;
                return e.guilds.forEach(e => {
                    let {
                        id: i,
                        members: n
                    } = e, r = M(i);
                    t = r.updateServerMembers(n) || t
                }), t
            }
            class g extends n.default.Store {
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
                        n = t.searchChunkSize,
                        r = t.countMembersByIndex(t.getSearchIndex());
                    return null == i.totalResultsCount || i.totalResultsCount < n ? r : i.totalResultsCount
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
            g.displayName = "MemberSafetyStore";
            let I = new g(r.default, {
                CONNECTION_OPEN: function(e) {
                    return c ? c = !1 : ! function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        for (let t in _) f(t, e)
                    }(!0), E(e)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    return E(e)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == t || null == s.default.getGuild(t)) return !1;
                    c = !0;
                    let n = M(t),
                        r = [];
                    for (let e of i) {
                        let t = n.getMember(e.userId);
                        null == t && r.push(e)
                    }
                    return r.length > 0 && n.updateClientMembers(r)
                },
                CACHE_LOADED: function(e) {
                    let {
                        guildMembers: t
                    } = e, i = !1;
                    return c = !0, Object.entries(t).forEach(e => {
                        let [t, n] = e, r = M(t);
                        i = r.updateClientMembers(Object.values(n)) || i
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
                    } = e, n = M(t);
                    return n.updateServerMembers(i)
                },
                GUILD_MEMBER_ADD: S,
                GUILD_MEMBER_UPDATE: S,
                GUILD_MEMBER_UPDATE_LOCAL: function(e) {
                    let {
                        guildId: t
                    } = e, i = a.default.getId(), n = M(t);
                    return n.updateMembersByMemberIds([i])
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        user: i
                    } = e, n = M(t);
                    return n.removeMember(i.id)
                },
                GUILD_ROLE_UPDATE: p,
                GUILD_ROLE_DELETE: p,
                GUILD_MEMBER_PROFILE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        guildMember: i
                    } = e, n = M(t);
                    return n.updateMembersByMemberIds([i.user.id])
                },
                GUILD_ROLE_MEMBER_REMOVE: b,
                GUILD_ROLE_MEMBER_ADD: b,
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let n = M(t),
                        r = i.map(e => {
                            var t;
                            return null === (t = e.member) || void 0 === t ? void 0 : t.user.id
                        }).filter(o.isNotNullish);
                    return n.updateMembersByMemberIds(r)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        addedMembers: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let n = M(t),
                        r = i.map(e => e.userId);
                    return n.updateMembersByMemberIds(r)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let n = M(t),
                        r = i.map(e => e.userId);
                    return n.updateMembersByMemberIds(r)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        guildId: t,
                        threads: i
                    } = e, n = Object.values(i);
                    if (0 === n.length) return !1;
                    let r = M(t),
                        a = n.map(e => {
                            var t;
                            return null === (t = e.owner) || void 0 === t ? void 0 : t.user.id
                        }).filter(o.isNotNullish);
                    return r.updateMembersByMemberIds(a)
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
                    } = e, n = M(t), [r] = n.updatePaginationState(i);
                    return r
                },
                MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
                    let {
                        guildId: t,
                        continuationToken: i
                    } = e, n = M(t);
                    return n.updatePaginationToken(i)
                },
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        searchState: i
                    } = e, n = M(t);
                    return n.updateSearchState(i)
                },
                FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        memberSupplementals: i
                    } = e, n = (0, h.syncMemberSupplemental)(t, i);
                    if (n) {
                        let e = M(t);
                        e.updateMembersByMemberIds(i.map(e => e.userId))
                    }
                    return n
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: i,
                        total_result_count: n
                    } = e, r = M(t), {
                        memberIds: a,
                        memberSupplementals: u
                    } = i.reduce((e, t) => {
                        let {
                            member: i,
                            source_invite_code: n,
                            join_source_type: r,
                            inviter_id: a
                        } = t, u = i.user;
                        return e.memberIds.push(u.id), e.memberSupplementals.push({
                            userId: u.id,
                            sourceInviteCode: n,
                            joinSourceType: r,
                            inviterId: a
                        }), e
                    }, {
                        memberIds: [],
                        memberSupplementals: []
                    }), s = (0, h.syncMemberSupplemental)(t, u);
                    (0, m.registerFetchedSupplementals)(t, a);
                    let l = r.updateSearchedMembersByMemberIds(a),
                        [o] = r.updatePaginationState({
                            totalResultsCount: n
                        });
                    return s || l || o
                }
            });
            var T = I
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
                    return b
                }
            });
            var n = i("812204"),
                r = i("592407"),
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
                    location: n.default.MEMBER_SAFETY_PAGE
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

            function b(e) {
                let t = (0, l.canAccessMemberSafetyPage)(e),
                    i = u.default.getGuild(e);
                return !!t && null != i && (i.hasFeature(h.GuildFeatures.COMMUNITY) || i.hasFeature(h.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, a.transitionTo)(h.Routes.CHANNEL(e, m.StaticChannelRoute.MEMBER_SAFETY)), !0) : (r.default.open(i.id, h.GuildSettingsSections.MEMBERS), !0))
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
            var n = i("913144"),
                r = i("851387"),
                a = i("525065"),
                u = i("178406"),
                s = i("835257");
            async function l(e) {
                let t = u.default.isInitialized(e);
                if (t) r.default.searchRecentMembers(e);
                else {
                    var i;
                    await n.default.dispatch({
                        type: "INITIALIZE_MEMBER_SAFETY_STORE",
                        guildId: e
                    }), r.default.searchRecentMembers(e);
                    let t = null !== (i = a.default.getMemberCount(e)) && void 0 !== i ? i : 0;
                    t > 1e3 && r.default.requestMembers(e, "", 3e3)
                }
            }

            function o(e) {
                n.default.dispatch({
                    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
                    guildId: e
                })
            }

            function d(e, t) {
                let {
                    continuationToken: i,
                    ...r
                } = t;
                n.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
                    guildId: e,
                    pagination: r
                })
            }
            async function h(e, t) {
                var i, a;
                let {
                    query: u,
                    continuationToken: s
                } = t;
                i = e, a = s, n.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE",
                    guildId: i,
                    continuationToken: a
                }), await r.default.searchRecentMembers(e, {
                    query: u,
                    continuationToken: null != s ? s : void 0
                })
            }
            async function m(e, t) {
                await n.default.dispatch({
                    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
                    guildId: e,
                    searchState: t
                })
            }
            async function c(e, t) {
                let i = await (0, s.fetchMemberSupplemental)(e, t);
                return 0 === i.length ? [] : (await n.default.dispatch({
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
            var n = i("811022"),
                r = i("913144"),
                a = i("835257");
            let u = new n.default("MemberSafetyStoreActionCreatorsV2");
            async function s(e) {
                await r.default.dispatch({
                    type: "INITIALIZE_MEMBER_SAFETY_STORE",
                    guildId: e
                })
            }

            function l(e) {
                u.info("JANK refreshMemberSafetyTimestampV2", {
                    guildId: e
                }), r.default.dispatch({
                    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
                    guildId: e
                })
            }

            function o(e, t) {
                let {
                    continuationToken: i,
                    ...n
                } = t;
                u.info("JANK updateMemberSafetyTablePaginationV2", {
                    guildId: e,
                    pagination: n
                }), r.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
                    guildId: e,
                    pagination: n
                })
            }
            async function d(e, t) {
                var i, n;
                let {
                    continuationToken: a
                } = t;
                u.info("JANK requestNewPaginationChunkV2", {
                    guildId: e,
                    continuationToken: a
                }), i = e, n = a, u.info("JANK updateMemberSafetyTablePaginationTokenV2", {
                    guildId: i,
                    continuationToken: n
                }), r.default.dispatch({
                    type: "MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE",
                    guildId: i,
                    continuationToken: n
                }), await Promise.resolve()
            }
            async function h(e, t) {
                u.info("JANK updateSearchStateV2", {
                    guildId: e,
                    searchState: t
                }), await r.default.dispatch({
                    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
                    guildId: e,
                    searchState: t
                })
            }
            async function m(e, t) {
                let i = await (0, a.fetchMemberSupplemental)(e, t);
                return 0 === i.length ? [] : (await r.default.dispatch({
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
            var n = i("835257");
            let r = {};

            function a(e) {
                return null == r[e] && (r[e] = {}), r[e]
            }

            function u(e, t) {
                if (0 === t.length) return !1;
                let i = a(e);
                return t.forEach(e => {
                    var t, r, a, u, s, l, o, d;
                    let h = i[e.userId],
                        m = null !== (r = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == h ? void 0 : h.joinSourceType) && void 0 !== r ? r : null;
                    (null == m || m === n.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (m = n.JoinSourceType.INVITE), i[e.userId] = {
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
            var n, r, a, u, s, l, o = i("872717"),
                d = i("49111");
            (n = u || (u = {}))[n.FAILED = 0] = "FAILED", n[n.UNFETCHED = 1] = "UNFETCHED", n[n.PENDING = 2] = "PENDING", n[n.SUCCEEDED = 3] = "SUCCEEDED", (r = s || (s = {}))[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.BOT = 1] = "BOT", r[r.INTEGRATION = 2] = "INTEGRATION", r[r.DISCOVERY = 3] = "DISCOVERY", r[r.HUB = 4] = "HUB", r[r.INVITE = 5] = "INVITE", r[r.VANITY_URL = 6] = "VANITY_URL", (a = l || (l = {})).DISCORD = "discord", a.TWITCH = "twitch", a.YOUTUBE = "youtube", a.GUILD_SUBSCRIPTION = "guild_subscription";
            let h = {};

            function m(e, t) {
                return e + t
            }

            function c(e, t, i) {
                h[e + t] = i
            }

            function _(e, t) {
                t.forEach(t => c(e, t, 3))
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
                let i = t.filter(t => 1 >= function(e, t) {
                    let i = e + t;
                    return null == h[i] && (h[i] = 1), h[i]
                }(e, t));
                if (0 === i.length) return [];
                i.forEach(t => c(e, t, 2));
                try {
                    let t = await o.default.post({
                        url: d.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                        body: {
                            user_ids: i
                        }
                    });
                    if (!Array.isArray(t.body)) return [];
                    let n = t.body.map(M);
                    return n.forEach(t => {
                        let {
                            userId: i
                        } = t;
                        return c(e, i, 3)
                    }), n
                } catch (t) {
                    i.forEach(t => c(e, t, 0))
                }
                return []
            }
        },
        334572: function(e, t, i) {
            "use strict";

            function n(e, t) {
                let [, i] = e, [, n] = t;
                return i === n
            }
            i.r(t), i.d(t, {
                isVersionEqual: function() {
                    return n
                }
            }), i("222007")
        }
    }
]);
//# sourceMappingURL=8ce2fd2658552c79ffca.js.map