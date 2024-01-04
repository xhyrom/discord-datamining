(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78891"], {
        127421: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                searchAllGuildMembers: function() {
                    return d
                }
            }), r("70102");
            var n = r("811022"),
                u = r("872717"),
                l = r("913144"),
                a = r("448993"),
                i = r("828434"),
                o = r("49111");
            let s = new n.default("MemberSafetyElasticSearch");
            async function d(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (n > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: c = !0,
                    signal: E
                } = r;
                try {
                    var _;
                    let a = await u.default.post({
                        url: o.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: E
                    });
                    if (s.info("JANK searchAllGuildMembers", {
                            response: a
                        }), a.status === i.INDEXING_RESPONSE_CODE) {
                        if (null == a.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!c) throw Error("Indexing response received but autoRetry is disabled");
                        return await l.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, 1e3 * a.body.retry_after)), d(e, t, r, n + 1)
                    }
                    return {
                        type: i.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                        body: {
                            guild_id: (_ = a.body).guild_id,
                            members: _.members,
                            page_result_count: _.page_result_count,
                            total_result_count: _.total_result_count
                        }
                    }
                } catch (t) {
                    let e = new a.APIError(t);
                    return s.info("JANK searchAllGuildMembers error", {
                        error: e
                    }), {
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
                    return o
                }
            });
            var n = r("811022"),
                u = r("913144"),
                l = r("127421"),
                a = r("828434");
            let i = new n.default("MemberSafetyGuildMemberSearchActionCreators");
            async function o(e, t, r) {
                let n = await (0, l.searchAllGuildMembers)(e, t, r);
                if (n.type === a.GuildMemberSearchResponseType.ERROR) throw n.body;
                let {
                    body: o
                } = n;
                i.info("JANK searchGuildMembers success", {
                    body: o
                }), u.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                    guildId: e,
                    members: o.members,
                    page_result_count: o.page_result_count,
                    total_result_count: o.total_result_count
                })
            }
        },
        804160: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useMembersSearchRecordStore: function() {
                    return y
                },
                getChunkIndex: function() {
                    return A
                },
                getChunkNumbers: function() {
                    return T
                },
                useIsMakingRequest: function() {
                    return D
                },
                useIsStillIndexing: function() {
                    return w
                },
                default: function() {
                    return q
                }
            }), r("222007"), r("70102");
            var n, u, l, a, i = r("714617"),
                o = r.n(i),
                s = r("917351"),
                d = r("308503"),
                c = r("811022"),
                E = r("249654"),
                _ = r("689988"),
                S = r("449008"),
                f = r("691386"),
                h = r("770115"),
                R = r("490931"),
                m = r("225982"),
                C = r("178406");
            let g = new c.default("MemberSafetySearchManager");

            function M(e) {
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
            let y = (0, d.default)(e => ({}));

            function I(e, t) {
                let r = y.getState()[e];
                return null == r && (r = b(1)), r = {
                    ...r,
                    ...t
                }, y.setState(t => ({
                    ...t,
                    [e]: r
                })), r
            }

            function p(e) {
                return y.getState()[e]
            }

            function v(e) {
                let t = p(e);
                return null == t && I(e, t = b(1)), t
            }

            function N(e) {
                let t = p(e);
                null != t && I(e, {
                    requestState: 3,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function U(e) {
                var t;
                let r = M(e);
                t = r, y.setState(e => {
                    let r = {
                        ...e
                    };
                    return delete r[t], r
                })
            }

            function A(e, t) {
                return Math.floor(Math.max(e - 1, 0) / t)
            }

            function T(e) {
                let t = (0, f.getSearchChunkLimit)(e),
                    r = e.pageSize * (e.currentPage - 1),
                    n = e.pageSize * e.currentPage,
                    u = e.pageSize * (e.currentPage + 1);
                return {
                    previousPageChunkNumber: A(r, t),
                    currentPageChunkNumber: A(n, t),
                    nextPageChunkNumber: A(u, t)
                }
            }(a = u || (u = {}))[a.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", a[a.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", a[a.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", a[a.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function G(e) {
                var t, r, n, u;
                let l = C.default.getSearchStateByGuildId(e),
                    a = C.default.getPaginationStateByGuildId(e),
                    i = M(e),
                    d = v(i),
                    [c, _] = function(e, t, r) {
                        var n, u, l, a, i, o;
                        let s = function(e, t) {
                                var r;
                                let {
                                    currentPageChunkNumber: n,
                                    previousPageChunkNumber: u,
                                    nextPageChunkNumber: l
                                } = T(t), {
                                    previousPagination: a
                                } = v(M(e)), i = t.currentPage, o = null !== (r = null == a ? void 0 : a.currentPage) && void 0 !== r ? r : 0, s = C.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == s:
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
                            d = C.default.getElasticSearchPaginationByGuildId(e),
                            c = (0, f.getSearchChunkLimit)(r);
                        switch (s) {
                            case 0: {
                                let t = C.default.getLastCursorTimestamp(e);
                                return [null, {
                                    limit: c,
                                    after: {
                                        guild_joined_at: t,
                                        user_id: E.default.fromTimestamp(t)
                                    }
                                }]
                            }
                            case 1:
                                return [null !== (n = t.cursor) && void 0 !== n ? n : null, {
                                    limit: c,
                                    after: null !== (u = t.cursor) && void 0 !== u ? u : void 0
                                }];
                            case 2:
                                return [null !== (l = null == d ? void 0 : d.after) && void 0 !== l ? l : null, {
                                    limit: c,
                                    after: null !== (a = null == d ? void 0 : d.after) && void 0 !== a ? a : void 0
                                }];
                            case 3:
                                return [null !== (i = null == d ? void 0 : d.before) && void 0 !== i ? i : null, {
                                    limit: c,
                                    before: null !== (o = null == d ? void 0 : d.before) && void 0 !== o ? o : void 0
                                }];
                            default:
                                (0, S.assertNever)(s)
                        }
                    }(e, d, a);
                let b = (t = function(e) {
                    var t;
                    let r = {
                            or_query: {},
                            and_query: {}
                        },
                        {
                            query: n
                        } = e;
                    if (null != (t = n) && t.length > 1) {
                        let [e, t] = (0, h.splitQuery)(n);
                        e.length > 0 && (r.and_query.usernames = {
                            or_query: e
                        }), t.length > 0 && (r.and_query.user_id = {
                            or_query: t
                        })
                    }
                    let {
                        requireUnusualDmActivity: u,
                        requireCommunicationDisabled: l,
                        requireUnusualAccountActivity: a,
                        requireUsernameQuarantined: i
                    } = e, o = {};
                    u && (o.unusual_dm_activity_until = {
                        range: {
                            gte: Date.now() - R.UNUSUAL_DM_COMPARISON_DELTA
                        }
                    }), l && (o.communication_disabled_until = {
                        range: {
                            gte: Date.now()
                        }
                    }), a && (o.unusual_account_activity = a), i && (o.automod_quarantined_username = i), Object.keys(o).length > 0 && (r.or_query.safety_signals = o);
                    let {
                        selectedRoleIds: s
                    } = e;
                    return s.size > 0 && (r.and_query.role_ids = {
                        and_query: Array.from(s)
                    }), r
                }(l), null == (r = _) ? t : {
                    ...t,
                    ...r
                });
                if (function(e, t) {
                        let r = v(e);
                        return o(r.query, t)
                    }(i, b) && (0, s.isEqual)(c, d.cursor)) return;
                let y = function(e, t, r, n) {
                    let u = p(e);
                    if ((null == u ? void 0 : u.requestState) === 2) {
                        var l;
                        null === (l = u.abortController) || void 0 === l || l.abort()
                    }
                    return I(e, {
                        requestState: 2,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: r,
                        previousPagination: n
                    })
                }(i, b, c, a);
                try {
                    ;
                    if (g.info("Making member search request", {
                            query: y.query,
                            guildId: e
                        }), null == y.query) throw Error("Query is null");
                    await (0, m.searchGuildMembers)(e, y.query, {
                        signal: null !== (u = null === (n = y.abortController) || void 0 === n ? void 0 : n.signal) && void 0 !== u ? u : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = p(e);
                        null != t && I(e, {
                            requestState: 0,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(i);
                    return
                }
                N(i)
            }

            function D(e) {
                return y(t => {
                    var r;
                    let n = M(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === 2
                })
            }

            function w(e) {
                return y(t => {
                    var r;
                    let n = M(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === 4
                })
            }
            class P extends _.default {
                handleInitialize(e) {
                    let {
                        guildId: t
                    } = e;
                    return U(t), G(t)
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e;
                    return U(t.id)
                }
                handleSearchStateUpdate(e) {
                    let {
                        guildId: t
                    } = e;
                    return G(t)
                }
                handlePaginationUpdate(e) {
                    let {
                        guildId: t
                    } = e;
                    return G(t)
                }
                handleGuildMemberSearchSuccess(e) {
                    let {
                        guildId: t
                    } = e, r = M(t);
                    return N(r)
                }
                handleGuildMemberSearchStillIndexing(e) {
                    let {
                        guildId: t
                    } = e, r = M(t);
                    I(r, {
                        requestState: 4,
                        abortController: null,
                        lastUpdated: Date.now()
                    })
                }
                handleNewMemberTimestampRefresh(e) {
                    let {
                        guildId: t
                    } = e;
                    return G(t)
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
            var q = new P
        }
    }
]);
//# sourceMappingURL=78891.1b95545a60ce9b1782c5.js.map