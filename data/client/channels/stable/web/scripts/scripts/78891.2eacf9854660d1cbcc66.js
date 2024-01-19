(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78891"], {
        127421: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                searchAllGuildMembers: function() {
                    return d
                }
            }), r("70102");
            var n = r("872717"),
                u = r("913144"),
                l = r("448993"),
                a = r("718517"),
                i = r("828434"),
                o = r("49111");
            async function d(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (s > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: _ = !0,
                    signal: c
                } = r;
                try {
                    var E;
                    let l = await n.default.post({
                        url: o.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: c
                    });
                    if (l.status === i.INDEXING_RESPONSE_CODE) {
                        if (null == l.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!_) throw Error("Indexing response received but autoRetry is disabled");
                        return await u.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, l.body.retry_after * a.default.Millis.SECOND)), d(e, t, r, s + 1)
                    }
                    return {
                        type: i.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                        body: {
                            guild_id: (E = l.body).guild_id,
                            members: E.members,
                            page_result_count: E.page_result_count,
                            total_result_count: E.total_result_count
                        }
                    }
                } catch (t) {
                    let e = new l.APIError(t);
                    return {
                        type: i.GuildMemberSearchResponseType.ERROR,
                        body: e
                    }
                }
            }
        },
        828434: function(e, t, r) {
            "use strict";
            var n, u;
            r.r(t), r.d(t, {
                INDEXING_RESPONSE_CODE: function() {
                    return l
                },
                GuildMemberSearchResponseType: function() {
                    return n
                }
            });
            let l = 202;
            (u = n || (n = {}))[u.SUCCESSFUL_QUERY = 1] = "SUCCESSFUL_QUERY", u[u.ERROR = 2] = "ERROR"
        },
        225982: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                searchGuildMembers: function() {
                    return a
                }
            });
            var n = r("913144"),
                u = r("127421"),
                l = r("828434");
            async function a(e, t, r) {
                let a = await (0, u.searchAllGuildMembers)(e, t, r);
                if (a.type === l.GuildMemberSearchResponseType.ERROR) throw a.body;
                let {
                    body: i
                } = a;
                n.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                    guildId: e,
                    members: i.members,
                    page_result_count: i.page_result_count,
                    total_result_count: i.total_result_count
                })
            }
        },
        804160: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useMembersSearchRecordStore: function() {
                    return M
                },
                getChunkIndex: function() {
                    return D
                },
                getChunkNumbers: function() {
                    return T
                },
                useIsMakingRequest: function() {
                    return G
                },
                useIsStillIndexing: function() {
                    return q
                },
                default: function() {
                    return w
                }
            }), r("222007"), r("70102");
            var n, u, l, a, i = r("714617"),
                o = r.n(i),
                d = r("917351"),
                s = r("308503"),
                _ = r("811022"),
                c = r("249654"),
                E = r("689988"),
                S = r("449008"),
                f = r("691386"),
                h = r("770115"),
                g = r("490931"),
                R = r("225982"),
                y = r("178406");
            let C = new _.default("MemberSafetySearchManager");

            function b(e) {
                return "guild_".concat(e)
            }

            function m(e) {
                return {
                    requestState: e,
                    abortController: null,
                    lastUpdated: Date.now(),
                    query: null,
                    cursor: null,
                    previousPagination: null
                }
            }(l = n || (n = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.STILL_INDEXING = 4] = "STILL_INDEXING";
            let M = (0, s.default)(e => ({}));

            function v(e, t) {
                let r = M.getState()[e];
                return null == r && (r = m(1)), r = {
                    ...r,
                    ...t
                }, M.setState(t => ({
                    ...t,
                    [e]: r
                })), r
            }

            function I(e) {
                return M.getState()[e]
            }

            function p(e) {
                let t = I(e);
                return null == t && v(e, t = m(1)), t
            }

            function U(e) {
                let t = I(e);
                null != t && v(e, {
                    requestState: 3,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function N(e) {
                var t;
                let r = b(e);
                t = r, M.setState(e => {
                    let r = {
                        ...e
                    };
                    return delete r[t], r
                })
            }

            function D(e, t) {
                return Math.floor(Math.max(e - 1, 0) / t)
            }

            function T(e) {
                let t = (0, f.getSearchChunkLimit)(e),
                    r = e.pageSize * (e.currentPage - 1),
                    n = e.pageSize * e.currentPage,
                    u = e.pageSize * (e.currentPage + 1);
                return {
                    previousPageChunkNumber: D(r, t),
                    currentPageChunkNumber: D(n, t),
                    nextPageChunkNumber: D(u, t)
                }
            }(a = u || (u = {}))[a.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", a[a.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", a[a.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", a[a.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function A(e) {
                var t, r, n, u;
                let l = y.default.getSearchStateByGuildId(e),
                    a = y.default.getPaginationStateByGuildId(e),
                    i = b(e),
                    s = p(i),
                    [_, E] = function(e, t, r) {
                        var n, u, l, a, i, o;
                        let d = function(e, t) {
                                var r;
                                let {
                                    currentPageChunkNumber: n,
                                    previousPageChunkNumber: u,
                                    nextPageChunkNumber: l
                                } = T(t), {
                                    previousPagination: a
                                } = p(b(e)), i = t.currentPage, o = null !== (r = null == a ? void 0 : a.currentPage) && void 0 !== r ? r : 0, d = y.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == d:
                                    case n === l && 0 === n:
                                        return 0;
                                    case n === l && n === u:
                                        return 1;
                                    case o < i && n < l:
                                        return 2;
                                    case o > i && n >= u:
                                        if (0 < n) return 3;
                                        return 0;
                                    default:
                                        return 1
                                }
                            }(e, r),
                            s = y.default.getElasticSearchPaginationByGuildId(e),
                            _ = (0, f.getSearchChunkLimit)(r);
                        switch (d) {
                            case 0: {
                                let t = y.default.getLastCursorTimestamp(e);
                                return [null, {
                                    limit: _,
                                    after: {
                                        guild_joined_at: t,
                                        user_id: c.default.fromTimestamp(t)
                                    }
                                }]
                            }
                            case 1:
                                return [null !== (n = t.cursor) && void 0 !== n ? n : null, {
                                    limit: _,
                                    after: null !== (u = t.cursor) && void 0 !== u ? u : void 0
                                }];
                            case 2:
                                return [null !== (l = null == s ? void 0 : s.after) && void 0 !== l ? l : null, {
                                    limit: _,
                                    after: null !== (a = null == s ? void 0 : s.after) && void 0 !== a ? a : void 0
                                }];
                            case 3:
                                return [null !== (i = null == s ? void 0 : s.before) && void 0 !== i ? i : null, {
                                    limit: _,
                                    before: null !== (o = null == s ? void 0 : s.before) && void 0 !== o ? o : void 0
                                }];
                            default:
                                (0, S.assertNever)(d)
                        }
                    }(e, s, a);
                let m = (t = function(e) {
                    var t, r, n;
                    let u = {
                            or_query: {},
                            and_query: {}
                        },
                        {
                            query: l
                        } = e;
                    if (null != (n = l) && n.length > 1) {
                        let [e, t] = (0, h.splitQuery)(l);
                        e.length > 0 && (u.and_query.usernames = {
                            or_query: e
                        }), t.length > 0 && (u.and_query.user_id = {
                            or_query: t
                        })
                    }
                    let {
                        requireUnusualDmActivity: a,
                        requireCommunicationDisabled: i,
                        requireUnusualAccountActivity: o,
                        requireUsernameQuarantined: d
                    } = e, s = {};
                    a && (s.unusual_dm_activity_until = {
                        range: {
                            gte: Date.now() - g.UNUSUAL_DM_COMPARISON_DELTA
                        }
                    }), i && (s.communication_disabled_until = {
                        range: {
                            gte: Date.now()
                        }
                    }), o && (s.unusual_account_activity = o), d && (s.automod_quarantined_username = d), Object.keys(s).length > 0 && (u.or_query.safety_signals = s);
                    let {
                        selectedRoleIds: _
                    } = e;
                    _.size > 0 && (u.and_query.role_ids = {
                        and_query: Array.from(_)
                    });
                    let {
                        selectedJoinDateOption: c
                    } = e;
                    null != c.afterDate && (u.and_query.guild_joined_at = {
                        range: {
                            gte: c.afterDate,
                            lte: null !== (t = c.beforeDate) && void 0 !== t ? t : void 0
                        }
                    });
                    let {
                        selectedAccountAgeOption: E
                    } = e;
                    if (null != E.afterDate) {
                        let e = u.and_query.user_id;
                        u.and_query.user_id = {
                            ...e,
                            range: {
                                gte: E.afterDate,
                                lte: null !== (r = E.beforeDate) && void 0 !== r ? r : void 0
                            }
                        }
                    }
                    let {
                        selectedSourceInviteCode: S
                    } = e;
                    null != S && (u.and_query.source_invite_code = {
                        or_query: [S]
                    });
                    let {
                        selectedJoinSourceType: f
                    } = e;
                    return null != f && (u.and_query.join_source_type = {
                        or_query: [f]
                    }), u
                }(l), null == (r = E) ? t : {
                    ...t,
                    ...r
                });
                if (function(e, t) {
                        let r = p(e);
                        return o(r.query, t)
                    }(i, m) && (0, d.isEqual)(_, s.cursor)) return;
                let M = function(e, t, r, n) {
                    let u = I(e);
                    if ((null == u ? void 0 : u.requestState) === 2) {
                        var l;
                        null === (l = u.abortController) || void 0 === l || l.abort()
                    }
                    return v(e, {
                        requestState: 2,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: r,
                        previousPagination: n
                    })
                }(i, m, _, a);
                try {
                    ;
                    if (C.info("Making member search request", {
                            query: M.query,
                            guildId: e
                        }), null == M.query) throw Error("Query is null");
                    await (0, R.searchGuildMembers)(e, M.query, {
                        signal: null !== (u = null === (n = M.abortController) || void 0 === n ? void 0 : n.signal) && void 0 !== u ? u : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = I(e);
                        null != t && v(e, {
                            requestState: 0,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(i);
                    return
                }
                U(i)
            }

            function G(e) {
                return M(t => {
                    var r;
                    let n = b(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === 2
                })
            }

            function q(e) {
                return M(t => {
                    var r;
                    let n = b(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === 4
                })
            }
            class P extends E.default {
                handleInitialize(e) {
                    let {
                        guildId: t
                    } = e;
                    return N(t), A(t)
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
                    return A(t)
                }
                handlePaginationUpdate(e) {
                    let {
                        guildId: t
                    } = e;
                    return A(t)
                }
                handleGuildMemberSearchSuccess(e) {
                    let {
                        guildId: t
                    } = e, r = b(t);
                    return U(r)
                }
                handleGuildMemberSearchStillIndexing(e) {
                    let {
                        guildId: t
                    } = e, r = b(t);
                    v(r, {
                        requestState: 4,
                        abortController: null,
                        lastUpdated: Date.now()
                    })
                }
                handleNewMemberTimestampRefresh(e) {
                    let {
                        guildId: t
                    } = e;
                    return A(t)
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
            var w = new P
        }
    }
]);
//# sourceMappingURL=78891.2eacf9854660d1cbcc66.js.map