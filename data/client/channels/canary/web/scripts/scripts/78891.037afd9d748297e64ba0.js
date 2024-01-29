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
                    return p
                },
                getChunkIndex: function() {
                    return N
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
                m = r("178406");
            let y = new _.default("MemberSafetySearchManager");

            function C(e) {
                return "guild_".concat(e)
            }

            function b(e) {
                return {
                    requestState: e,
                    abortController: null,
                    lastUpdated: Date.now(),
                    query: null,
                    cursor: null,
                    previousPagination: null
                }
            }(l = n || (n = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.STILL_INDEXING = 4] = "STILL_INDEXING";
            let p = (0, s.default)(e => ({}));

            function M(e, t) {
                let r = p.getState()[e];
                return null == r && (r = b(1)), r = {
                    ...r,
                    ...t
                }, p.setState(t => ({
                    ...t,
                    [e]: r
                })), r
            }

            function I(e) {
                return p.getState()[e]
            }

            function v(e) {
                let t = I(e);
                return null == t && M(e, t = b(1)), t
            }

            function U(e) {
                let t = I(e);
                null != t && M(e, {
                    requestState: 3,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function D(e) {
                var t;
                let r = C(e);
                t = r, p.setState(e => {
                    let r = {
                        ...e
                    };
                    return delete r[t], r
                })
            }

            function N(e, t) {
                return Math.floor(Math.max(e - 1, 0) / t)
            }

            function T(e) {
                let t = (0, f.getSearchChunkLimit)(e),
                    r = e.pageSize * (e.currentPage - 1),
                    n = e.pageSize * e.currentPage,
                    u = e.pageSize * (e.currentPage + 1);
                return {
                    previousPageChunkNumber: N(r, t),
                    currentPageChunkNumber: N(n, t),
                    nextPageChunkNumber: N(u, t)
                }
            }(a = u || (u = {}))[a.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", a[a.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", a[a.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", a[a.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function A(e) {
                var t, r, n, u;
                let l = m.default.getSearchStateByGuildId(e),
                    a = m.default.getPaginationStateByGuildId(e),
                    i = C(e),
                    s = v(i),
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
                                } = v(C(e)), i = t.currentPage, o = null !== (r = null == a ? void 0 : a.currentPage) && void 0 !== r ? r : 0, d = m.default.getElasticSearchPaginationByGuildId(e);
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
                            s = m.default.getElasticSearchPaginationByGuildId(e),
                            _ = (0, f.getSearchChunkLimit)(r);
                        switch (d) {
                            case 0: {
                                let t = m.default.getLastCursorTimestamp(e);
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
                let b = (t = function(e) {
                    var t, r;
                    let n = {
                            or_query: {},
                            and_query: {}
                        },
                        {
                            query: u
                        } = e;
                    if (null != (t = u) && t.length > 1) {
                        let [e, t] = (0, h.splitQuery)(u);
                        e.length > 0 && (n.and_query.usernames = {
                            or_query: e
                        }), t.length > 0 && (n.and_query.user_id = {
                            or_query: t
                        })
                    }
                    let {
                        requireUnusualDmActivity: l,
                        requireCommunicationDisabled: a,
                        requireUnusualAccountActivity: i,
                        requireUsernameQuarantined: o
                    } = e, d = {};
                    l && (d.unusual_dm_activity_until = {
                        range: {
                            gte: Date.now() - g.UNUSUAL_DM_COMPARISON_DELTA
                        }
                    }), a && (d.communication_disabled_until = {
                        range: {
                            gte: Date.now()
                        }
                    }), i && (d.unusual_account_activity = i), o && (d.automod_quarantined_username = o), Object.keys(d).length > 0 && (n.or_query.safety_signals = d);
                    let {
                        selectedRoleIds: s
                    } = e;
                    s.size > 0 && (n.and_query.role_ids = {
                        and_query: Array.from(s)
                    });
                    let {
                        selectedJoinDateOption: _
                    } = e;
                    if (null != _.afterDate) {
                        ;
                        n.and_query.guild_joined_at = {
                            range: {
                                gte: _.afterDate,
                                lte: null !== (r = _.beforeDate) && void 0 !== r ? r : void 0
                            }
                        }
                    }
                    let {
                        selectedAccountAgeOption: E
                    } = e;
                    if (null != E.afterDate) {
                        let e = n.and_query.user_id;
                        n.and_query.user_id = {
                            ...e,
                            range: {
                                gte: c.default.fromTimestamp(E.afterDate),
                                lte: null != E.beforeDate ? c.default.fromTimestamp(E.beforeDate) : void 0
                            }
                        }
                    }
                    let {
                        selectedSourceInviteCode: S
                    } = e;
                    null != S && (n.and_query.source_invite_code = {
                        or_query: [S]
                    });
                    let {
                        selectedJoinSourceType: f
                    } = e;
                    return null != f && (n.and_query.join_source_type = {
                        or_query: [f]
                    }), n
                }(l), null == (r = E) ? t : {
                    ...t,
                    ...r
                });
                if (function(e, t) {
                        let r = v(e);
                        return o(r.query, t)
                    }(i, b) && (0, d.isEqual)(_, s.cursor)) return;
                let p = function(e, t, r, n) {
                    let u = I(e);
                    if ((null == u ? void 0 : u.requestState) === 2) {
                        var l;
                        null === (l = u.abortController) || void 0 === l || l.abort()
                    }
                    return M(e, {
                        requestState: 2,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: r,
                        previousPagination: n
                    })
                }(i, b, _, a);
                try {
                    ;
                    if (y.info("Making member search request", {
                            query: p.query,
                            guildId: e
                        }), null == p.query) throw Error("Query is null");
                    await (0, R.searchGuildMembers)(e, p.query, {
                        signal: null !== (u = null === (n = p.abortController) || void 0 === n ? void 0 : n.signal) && void 0 !== u ? u : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = I(e);
                        null != t && M(e, {
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
                return p(t => {
                    var r;
                    let n = C(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === 2
                })
            }

            function q(e) {
                return p(t => {
                    var r;
                    let n = C(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === 4
                })
            }
            class P extends E.default {
                handleInitialize(e) {
                    let {
                        guildId: t
                    } = e;
                    return D(t), A(t)
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e;
                    return D(t.id)
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
                    } = e, r = C(t);
                    return U(r)
                }
                handleGuildMemberSearchStillIndexing(e) {
                    let {
                        guildId: t
                    } = e, r = C(t);
                    M(r, {
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
//# sourceMappingURL=78891.037afd9d748297e64ba0.js.map