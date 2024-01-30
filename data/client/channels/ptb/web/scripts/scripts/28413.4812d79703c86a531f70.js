(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28413"], {
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
        64905: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ACCOUNT_AGE_DATE_TOOLTIP_CONFIG: function() {
                    return a
                },
                MEMBER_JOIN_DATE_TOOLTIP_CONFIG: function() {
                    return l
                },
                MembersTableDateFormats: function() {
                    return n
                },
                formatDateRelativeTime: function() {
                    return o
                },
                getJoinedAtTimestamp: function() {
                    return m
                }
            });
            var i, n, s = r("319126"),
                u = r("782340");
            let a = {
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
            (i = n || (n = {}))[i.JOINED_AT = 0] = "JOINED_AT", i[i.ACCOUNT_AGE = 1] = "ACCOUNT_AGE";
            let d = () => ({
                    seconds: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_SECONDS,
                    minutes: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MINUTES,
                    hours: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_HOURS,
                    days: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_DAYS,
                    months: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_MONTH,
                    years: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_YEAR
                }),
                h = () => ({
                    hours: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_HOURS,
                    days: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_DAYS,
                    months: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_MONTH,
                    years: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_YEAR
                }),
                o = (e, t) => {
                    var r;
                    let i = 0 === (r = t) ? d : 1 === r ? h : void 0;
                    return (0, s.default)(e, i, !1)
                },
                m = e => {
                    let t = null != e ? new Date(e) : new Date,
                        r = t.getTime();
                    return r
                }
        },
        493910: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MemberSafetySecondaryIndex: function() {
                    return i
                },
                GuildMemberSafetyMembers: function() {
                    return g
                }
            }), r("424973"), r("222007");
            var i, n, s = r("969176"),
                u = r.n(s),
                a = r("407846"),
                l = r("654017"),
                d = r("26989"),
                h = r("697218"),
                o = r("64905"),
                m = r("490931"),
                _ = r("178406"),
                c = r("159132"),
                M = r("165958");
            let S = Date.now();

            function I(e) {
                let t = !e.isCurrentGuildMemberByTimestamp,
                    r = [t ? "NEW_GUILD_MEMBER" : "CURRENT_GUILD_MEMBER"];
                return e.isIncludedInSearchResults && r.push("INCLUDED_IN_SEARCH_RESULTS"), r
            }

            function f(e) {
                return e.sort
            }

            function E() {
                return new a.default(I, f)
            }(n = i || (i = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", n.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", n.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
            class g {
                reset() {
                    this._membersMap.clear(), this._membersMap = E(), this.resetNewMemberTimestamp()
                }
                resetNewMemberTimestamp() {
                    this.newMemberTimestamp = Date.now()
                }
                enhanceNewMember(e) {
                    var t;
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = (0, o.getJoinedAtTimestamp)(e.joinedAt),
                        {
                            hasUnusualDmActivity: n,
                            hasUnusualAccountActivity: s,
                            sourceInviteCode: u,
                            joinSourceType: a,
                            inviterId: l,
                            integrationType: d
                        } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
                        c = h.default.getUser(e.userId),
                        S = _.default.getSearchStateByGuildId(this.guildId),
                        I = {
                            hasUnusualDmActivity: n,
                            hasUnusualAccountActivity: s,
                            sourceInviteCode: u,
                            joinSourceType: a,
                            inviterId: l,
                            integrationType: d,
                            ...e,
                            isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
                            isIncludedInSearchResults: !1,
                            user: c,
                            sort: (0, M.getSortValueForMember)(e, null !== (t = S.selectedSort) && void 0 !== t ? t : m.OrderBy.ORDER_BY_UNSPECIFIED),
                            joinedAtTimestamp: i,
                            ...r
                        };
                    return I
                }
                _computeMemberSupplementals(e, t) {
                    var r;
                    let i = (0, c.getMemberSupplementalByGuildId)(this.guildId),
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
                            return t >= S - m.UNUSUAL_DM_COMPARISON_DELTA
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
                            hasUnusualAccountActivity: d,
                            joinSourceType: h,
                            inviterId: o,
                            integrationType: m
                        } = this._computeMemberSupplementals(i.userId, null !== (r = n.unusualDMActivityUntil) && void 0 !== r ? r : i.unusualDMActivityUntil);
                    for (let e in i.sourceInviteCode !== a && (n.sourceInviteCode = a), i.hasUnusualDmActivity !== l && (n.hasUnusualDmActivity = l), i.hasUnusualAccountActivity !== d && (n.hasUnusualAccountActivity = d), i.joinSourceType !== h && (n.joinSourceType = h), i.inviterId !== o && (n.inviterId = o), i.integrationType !== m && (n.integrationType = m), n) {
                        let t = n[e],
                            r = i[e];
                        !u(t, r) && (i[e] = t, s = !0)
                    }
                    return this._membersMap.set(i.userId, i) || s
                }
                upsertMember(e, t) {
                    let r = this.getMemberByUserId(e);
                    if (null == r) {
                        let t = d.default.getTrueMember(this.guildId, e);
                        if (null == t) return !1;
                        r = this.enhanceNewMember(t)
                    }
                    return this.updateMember(r, t)
                }
                removeMember(e) {
                    return this._membersMap.delete(e)
                }
                syncFromGuildMemberStore(e, t) {
                    let r = d.default.getTrueMember(e, t);
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
                    this.newMemberTimestamp = Date.now(), this.guildId = e, this._membersMap = E()
                }
            }
        },
        637240: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GuildMemberSafetyPageStore: function() {
                    return _
                }
            }), r("222007"), r("808653"), r("424973");
            var i = r("917351"),
                n = r("26989"),
                s = r("697218"),
                u = r("718517"),
                a = r("64905"),
                l = r("493910"),
                d = r("691386"),
                h = r("936763"),
                o = r("165958");
            let m = 3 * u.default.Millis.SECOND;
            class _ {
                getSearchIndex() {
                    let e = null == this._search || this._search.hasDefaultQuery;
                    return e ? l.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER : l.MemberSafetySecondaryIndex.INCLUDED_IN_SEARCH_RESULTS
                }
                initialize() {
                    if (this._initialized) {
                        this.lastCursorTimestamp = Date.now();
                        return
                    }
                    this._initialized = !0, this._search = new h.GuildMemberSafetySearch(this.guildId), this._members = new l.GuildMemberSafetyMembers(this.guildId), this._pagination = new d.GuildMemberSafetyPagination(this.guildId, this._members.values(this.getSearchIndex()))
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
                    return null != this._pagination && this._initialized ? (0, d.getSearchChunkLimit)(this._pagination.getPaginationState()) : 0
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
                            let t = (0, a.getJoinedAtTimestamp)(s.joinedAt);
                            e = {
                                ...e,
                                isCurrentGuildMemberByTimestamp: t <= this._members.newMemberTimestamp,
                                refreshTimestamp: this.lastRefreshTimestamp
                            }
                        }
                        let [u, l] = this._rawUpdateMember(s.userId, e);
                        i = u || i, n = l || n
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
                updateMembersSort(e) {
                    return new Promise(t => {
                        let r = (0, i.cloneDeep)(this.getMembersByIndex(l.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)[0]),
                            n = (0, i.cloneDeep)(this.getMembersByIndex(l.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)[0]),
                            s = [...r, ...n];
                        s.forEach(t => {
                            var r, i, n;
                            let s = (0, o.getSortValueForMember)(t, e),
                                u = null !== (n = null === (r = this._search) || void 0 === r ? void 0 : r.isMemberIncludedInSearchResults(t)) && void 0 !== n && n;
                            null === (i = this._members) || void 0 === i || i.updateMember(t, {
                                sort: s,
                                isIncludedInSearchResults: u
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
                    }, m)
                }
                refreshNewMembersAndSearchResults() {
                    if (null == this._search || null == this._members || !this._initialized) return !1;
                    let e = Number(Date.now());
                    this._scheduleRefresh(e);
                    let t = (0, i.cloneDeep)(this._members.values(l.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)),
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
                    let t = !!this._search.hasDefaultQuery;
                    null != e.selectedSort && e.selectedSort !== this._search.getSearchState().selectedSort && this.sortMembersBySelectedSort(e.selectedSort);
                    let r = this._search.updateSearchState(e);
                    if (this._search.hasDefaultQuery && t) return this.updatePaginationChunks();
                    let n = (0, i.cloneDeep)(this._members.values(l.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)),
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
                clearPaginationState() {
                    var e;
                    null === (e = this._pagination) || void 0 === e || e.reset()
                }
                getPaginationState() {
                    return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, d.createDefaultMemberSafetyPaginationState)()
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
                    return d
                },
                getSearchChunkLimit: function() {
                    return h
                },
                GuildMemberSafetyPagination: function() {
                    return o
                }
            }), r("808653"), r("424973"), r("222007");
            var i, n, s = r("26989"),
                u = r("490931");
            let a = [12, 25, 50, 100],
                l = 7;

            function d() {
                return {
                    pageSize: a[0],
                    currentPage: 1,
                    continuationToken: null,
                    sort: u.OrderBy.ORDER_BY_UNSPECIFIED,
                    elasticSearchCursor: null
                }
            }

            function h(e) {
                return Math.max(5 * e.pageSize, 250)
            }(n = i || (i = {}))[n.FORWARD = 1] = "FORWARD", n[n.BACKWARD = -1] = "BACKWARD";
            class o {
                reset() {
                    this._paginationState = d(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
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
                    return this.getPaginationState().elasticSearchCursor
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
                    }, this.guildId = e, this._paginationState = d(), this._version = 0;
                    let [r, i] = this._initPaginationFromRawMembers(t);
                    this._sortedMemberIds = r, this._cachedPaginationChunks = i, this._version += 1
                }
            }
        },
        936763: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getDefaultSearchState: function() {
                    return d
                },
                GuildMemberSafetySearch: function() {
                    return m
                }
            }), r("222007");
            var i = r("969176"),
                n = r.n(i),
                s = r("249654"),
                u = r("681937"),
                a = r("509"),
                l = r("770115");

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
                    },
                    selectedJoinSourceType: void 0,
                    selectedSourceInviteCode: void 0,
                    selectedSort: void 0
                }
            }
            let h = Object.freeze(d());

            function o(e, t) {
                return null != e && (!!e.toLowerCase().includes(t.toLowerCase()) || !1)
            }
            class m {
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
                    }, this.hasDefaultQuery = n(this._searchState, h), !0
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
                        requireUnusualDmActivity: r,
                        requireCommunicationDisabled: i,
                        requireUnusualAccountActivity: n,
                        requireUsernameQuarantined: d,
                        selectedRoleIds: h,
                        selectedJoinDateOption: m,
                        selectedAccountAgeOption: _,
                        selectedSourceInviteCode: c,
                        selectedJoinSourceType: M
                    } = this._searchState;
                    if (t.length > 0 && ! function(e, t) {
                            if ("" === t.trim()) return !1;
                            let [r, i] = (0, l.splitQuery)(t);
                            for (let t of i)
                                if (e.userId === t) return !0;
                            for (let t of r)
                                if (o(e.nick, t)) return !0;
                            if (null == e.user) return !1;
                            let {
                                globalName: n,
                                username: s
                            } = e.user;
                            for (let e of r)
                                if (o(s, e)) return !0;
                            for (let e of r)
                                if (o(n, e)) return !0;
                            return !1
                        }(e, t)) return !1;
                    if (h.size > 0) {
                        var S, I;
                        if (S = e, !(0 !== (I = h).size && Array.from(I).every(e => S.roles.includes(e)))) return !1
                    }
                    if (null != m.afterDate && e.joinedAtTimestamp < m.afterDate || null != m.beforeDate && e.joinedAtTimestamp > m.beforeDate || null != _.afterDate && s.default.extractTimestamp(e.userId) < _.afterDate || null != _.beforeDate && s.default.extractTimestamp(e.userId) > _.beforeDate || null != c && e.sourceInviteCode !== c || null != M && e.joinSourceType !== M) return !1;
                    if (r || i || n || d) return !!(r && e.hasUnusualDmActivity || i && (0, a.isMemberCommunicationDisabled)(e) || n && e.hasUnusualAccountActivity || d && (0, u.hasAutomodQuarantinedProfile)(e)) || !1;
                    return !0
                }
                constructor(e) {
                    this.guildId = e, this._searchState = d(), this.hasDefaultQuery = !0
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
                    return u
                },
                createMemberSearchCursor: function() {
                    return a
                },
                OrderBy: function() {
                    return n
                }
            });
            var i, n, s = r("718517");
            let u = 2 * s.default.Millis.DAY;

            function a(e) {
                let {
                    joinedAt: t,
                    userId: r
                } = e;
                if (null == t) return null;
                let i = new Date(t).getTime();
                return {
                    guild_joined_at: i,
                    user_id: r
                }
            }(i = n || (n = {}))[i.ORDER_BY_UNSPECIFIED = 0] = "ORDER_BY_UNSPECIFIED", i[i.ORDER_BY_GUILD_JOINED_AT_DESC = 1] = "ORDER_BY_GUILD_JOINED_AT_DESC", i[i.ORDER_BY_GUILD_JOINED_AT_ASC = 2] = "ORDER_BY_GUILD_JOINED_AT_ASC", i[i.ORDER_BY_USER_ID_DESC = 3] = "ORDER_BY_USER_ID_DESC", i[i.ORDER_BY_USER_ID_ASC = 4] = "ORDER_BY_USER_ID_ASC"
        },
        178406: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return T
                }
            }), r("808653"), r("424973"), r("222007");
            var i = r("446674"),
                n = r("913144"),
                s = r("271938"),
                u = r("26989"),
                a = r("305961"),
                l = r("697218"),
                d = r("637240"),
                h = r("490931"),
                o = r("159132"),
                m = r("835257");
            let _ = !1,
                c = {};

            function M(e) {
                return null == c[e] && (c[e] = new d.GuildMemberSafetyPageStore(e)), c[e]
            }

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = M(e);
                r.reset(t)
            }

            function I() {
                return !1
            }

            function f(e) {
                let t = !1,
                    r = M(e.guildId);
                return "GUILD_ROLE_DELETE" === e.type && (t = r.removeRoleFromSearchState(e.roleId)), r.rebuildAllMembers() || t
            }

            function E(e) {
                let {
                    guildId: t,
                    userId: r
                } = e, i = M(t);
                return i.updateMembersByMemberIds([r])
            }

            function g(e) {
                let t = !1;
                return e.guilds.forEach(e => {
                    let {
                        id: r,
                        members: i
                    } = e, n = M(r);
                    t = n.updateServerMembers(i) || t
                }), t
            }
            class b extends i.default.Store {
                initialize() {
                    this.waitFor(s.default, u.default, l.default)
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
                        r = t.searchChunkSize,
                        i = t.countMembersByIndex(t.getSearchIndex()),
                        n = t.getTotalResultsCount();
                    return null == n || n < r ? i : n
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
            b.displayName = "MemberSafetyStore";
            let p = new b(n.default, {
                CONNECTION_OPEN: function(e) {
                    return _ ? _ = !1 : ! function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        for (let t in c) S(t, e)
                    }(!0), g(e)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    return g(e)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    let {
                        guildId: t,
                        members: r
                    } = e;
                    if (null == t || null == a.default.getGuild(t)) return !1;
                    _ = !0;
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
                    return _ = !0, Object.entries(t).forEach(e => {
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
                GUILD_MEMBER_ADD: I,
                GUILD_MEMBER_UPDATE: I,
                GUILD_MEMBER_UPDATE_LOCAL: function(e) {
                    let {
                        guildId: t
                    } = e, r = s.default.getId(), i = M(t);
                    return i.updateMembersByMemberIds([r])
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        user: r
                    } = e, i = M(t);
                    return i.removeMember(r.id)
                },
                GUILD_ROLE_UPDATE: f,
                GUILD_ROLE_DELETE: f,
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
                    let i = M(t),
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
                    let i = M(t),
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
                    let n = M(t),
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
                    } = e, i = (0, o.syncMemberSupplemental)(t, r);
                    if (i) {
                        let e = M(t);
                        e.updateMembersByMemberIds(r.map(e => e.userId))
                    }
                    return i
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
                    var t, r, i, n, s, u;
                    let a, l;
                    let {
                        guildId: d,
                        members: _,
                        total_result_count: c
                    } = e, S = M(d), {
                        memberIds: I,
                        memberSupplementals: f
                    } = _.reduce((e, t) => {
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
                    }), E = (0, o.syncMemberSupplemental)(d, f);
                    (0, m.registerFetchedSupplementals)(d, I);
                    let g = S.updateSearchedMembersByMemberIds(I);
                    _.length > 0 && (a = _[0], l = _[_.length - 1]);
                    let [b] = S.updatePaginationState({
                        totalResultsCount: c,
                        elasticSearchCursor: {
                            before: (0, h.createMemberSearchCursor)({
                                joinedAt: null == a ? void 0 : null === (t = a.member) || void 0 === t ? void 0 : t.joined_at,
                                userId: null !== (s = null == a ? void 0 : null === (r = a.member) || void 0 === r ? void 0 : r.user.id) && void 0 !== s ? s : ""
                            }),
                            after: (0, h.createMemberSearchCursor)({
                                joinedAt: null == l ? void 0 : null === (i = l.member) || void 0 === i ? void 0 : i.joined_at,
                                userId: null !== (u = null == l ? void 0 : null === (n = l.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== u ? u : ""
                            })
                        }
                    }, !1);
                    return E || g || b
                },
                MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function(e) {
                    let {
                        guildId: t,
                        userIds: r
                    } = e, i = M(t);
                    return i.updateMembersByMemberIds(r)
                }
            });
            var T = p
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
                    var t, n, s, u, a, l, d, h;
                    let o = r[e.userId],
                        m = null !== (n = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == o ? void 0 : o.joinSourceType) && void 0 !== n ? n : null;
                    (null == m || m === i.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (m = i.JoinSourceType.INVITE), r[e.userId] = {
                        userId: e.userId,
                        sourceInviteCode: null !== (u = null !== (s = e.sourceInviteCode) && void 0 !== s ? s : null == o ? void 0 : o.sourceInviteCode) && void 0 !== u ? u : null,
                        joinSourceType: m,
                        inviterId: null !== (l = null !== (a = e.inviterId) && void 0 !== a ? a : null == o ? void 0 : o.inviterId) && void 0 !== l ? l : null,
                        integrationType: null !== (h = null !== (d = e.integrationType) && void 0 !== d ? d : null == o ? void 0 : o.integrationType) && void 0 !== h ? h : null
                    }
                }), !0
            }
        },
        165958: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getSortValueForMember: function() {
                    return s
                }
            });
            var i = r("64905"),
                n = r("490931");

            function s(e, t) {
                let r = (0, i.getJoinedAtTimestamp)(e.joinedAt);
                switch (t) {
                    case n.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC:
                        return r;
                    case n.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC:
                        return -r;
                    case n.OrderBy.ORDER_BY_USER_ID_ASC:
                        return parseInt(e.userId);
                    case n.OrderBy.ORDER_BY_USER_ID_DESC:
                        return -parseInt(e.userId);
                    default:
                        return -r
                }
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
//# sourceMappingURL=28413.4812d79703c86a531f70.js.map