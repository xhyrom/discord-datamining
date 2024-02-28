(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78891"], {
        127421: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                searchAllGuildMembers: function() {
                    return s
                }
            }), r("70102");
            var n = r("872717"),
                u = r("913144"),
                l = r("448993"),
                a = r("718517"),
                i = r("828434"),
                o = r("49111");
            async function s(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (d > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: c = !0,
                    signal: _
                } = r;
                try {
                    var E;
                    let l = await n.default.post({
                        url: o.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: _
                    });
                    if (l.status === i.INDEXING_RESPONSE_CODE) {
                        if (null == l.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!c) throw Error("Indexing response received but autoRetry is disabled");
                        return await u.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, l.body.retry_after * a.default.Millis.SECOND)), s(e, t, r, d + 1)
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
                    return T
                },
                getChunkNumbers: function() {
                    return A
                },
                useIsMakingRequest: function() {
                    return w
                },
                useIsStillIndexing: function() {
                    return P
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
                _ = r("398183"),
                E = r("689988"),
                S = r("449008"),
                f = r("299039"),
                h = r("691386"),
                R = r("770115"),
                g = r("490931"),
                C = r("225982"),
                b = r("178406");
            let m = new c.default("MemberSafetySearchManager");

            function I(e) {
                return "guild_".concat(e)
            }

            function M(e) {
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
            }(l = n || (n = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.STILL_INDEXING = 4] = "STILL_INDEXING";
            let p = (0, d.default)(e => ({}));

            function v(e, t) {
                let r = p.getState()[e];
                return null == r && (r = M(1)), r = {
                    ...r,
                    ...t
                }, p.setState(t => ({
                    ...t,
                    [e]: r
                })), r
            }

            function y(e) {
                return p.getState()[e]
            }

            function D(e) {
                let t = y(e);
                return null == t && v(e, t = M(1)), t
            }
            async function U(e) {
                await (0, _.sleep)(200);
                let t = y(e);
                null != t && v(e, {
                    requestState: 3,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function N(e) {
                var t;
                let r = I(e);
                t = r, p.setState(e => {
                    let r = {
                        ...e
                    };
                    return delete r[t], r
                })
            }

            function T(e, t) {
                return Math.floor(Math.max(e - 1, 0) / t)
            }

            function A(e) {
                let t = (0, h.getSearchChunkLimit)(e),
                    r = e.pageSize * (e.currentPage - 1),
                    n = e.pageSize * e.currentPage,
                    u = e.pageSize * (e.currentPage + 1);
                return {
                    previousPageChunkNumber: T(r, t),
                    currentPageChunkNumber: T(n, t),
                    nextPageChunkNumber: T(u, t)
                }
            }(a = u || (u = {}))[a.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", a[a.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", a[a.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", a[a.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function G(e) {
                var t, r, n, u, l;
                let a = b.default.getSearchStateByGuildId(e),
                    i = b.default.getPaginationStateByGuildId(e),
                    d = I(e),
                    c = D(d),
                    [_, E] = function(e, t, r) {
                        var n, u, l, a, i, o;
                        let s = function(e, t) {
                                var r;
                                let {
                                    currentPageChunkNumber: n,
                                    previousPageChunkNumber: u,
                                    nextPageChunkNumber: l
                                } = A(t), {
                                    previousPagination: a
                                } = D(I(e)), i = t.currentPage, o = null !== (r = null == a ? void 0 : a.currentPage) && void 0 !== r ? r : 0, s = b.default.getElasticSearchPaginationByGuildId(e);
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
                            d = b.default.getElasticSearchPaginationByGuildId(e),
                            c = (0, h.getSearchChunkLimit)(r);
                        switch (s) {
                            case 0:
                                return [null, {
                                    limit: c
                                }];
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
                    }(e, c, i);
                let M = (u = function(e) {
                        var t, r;
                        let n = {},
                            u = {},
                            {
                                query: l
                            } = e;
                        if (null != (t = l) && t.length > 1) {
                            let [e, t] = (0, R.splitQuery)(l);
                            e.length > 0 && (n.usernames = {
                                or_query: e
                            }), t.length > 0 && (n.user_id = {
                                or_query: t
                            })
                        }
                        let {
                            requireUnusualDmActivity: a,
                            requireCommunicationDisabled: i,
                            requireUnusualAccountActivity: o,
                            requireUsernameQuarantined: s
                        } = e, d = {};
                        a && (d.unusual_dm_activity_until = {
                            range: {
                                gte: Date.now() - g.UNUSUAL_DM_COMPARISON_DELTA
                            }
                        }), i && (d.communication_disabled_until = {
                            range: {
                                gte: Date.now()
                            }
                        }), o && (d.unusual_account_activity = o), s && (d.automod_quarantined_username = s), Object.keys(d).length > 0 && (u.safety_signals = d);
                        let {
                            selectedRoleIds: c
                        } = e;
                        c.size > 0 && (n.role_ids = {
                            and_query: Array.from(c)
                        });
                        let {
                            selectedJoinDateOption: _
                        } = e;
                        if (null != _.afterDate) {
                            ;
                            n.guild_joined_at = {
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
                            let e = n.user_id;
                            n.user_id = {
                                ...e,
                                range: {
                                    gte: f.default.fromTimestamp(E.afterDate),
                                    lte: null != E.beforeDate ? f.default.fromTimestamp(E.beforeDate) : void 0
                                }
                            }
                        }
                        let {
                            selectedSourceInviteCode: S
                        } = e;
                        null != S && (n.source_invite_code = {
                            or_query: [S]
                        });
                        let {
                            selectedJoinSourceType: h
                        } = e;
                        null != h && (n.join_source_type = {
                            or_query: [h]
                        });
                        let C = {
                                or_query: u,
                                and_query: n
                            },
                            {
                                selectedSort: b
                            } = e;
                        return null != b && (C.sort = b), C
                    }(a), null == (l = E) ? u : {
                        ...u,
                        ...l
                    }),
                    p = null !== (t = a.selectedSort) && void 0 !== t ? t : g.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC;
                if (function(e, t) {
                        let r = D(e);
                        return o(r.query, t)
                    }(d, M) && (0, s.isEqual)(_, c.cursor)) return;
                let N = function(e, t, r, n, u) {
                    let l = y(e);
                    if ((null == l ? void 0 : l.requestState) === 2) {
                        var a;
                        null === (a = l.abortController) || void 0 === a || a.abort()
                    }
                    return v(e, {
                        requestState: 2,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: r,
                        previousPagination: n,
                        sort: u
                    })
                }(d, M, _, i, p);
                try {
                    if (m.info("Making member search request", {
                            query: N.query,
                            guildId: e
                        }), null == N.query) throw Error("Query is null");
                    await (0, C.searchGuildMembers)(e, N.query, {
                        signal: null !== (n = null === (r = N.abortController) || void 0 === r ? void 0 : r.signal) && void 0 !== n ? n : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = y(e);
                        null != t && v(e, {
                            requestState: 0,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(d);
                    return
                }
                await U(d)
            }

            function w(e) {
                return p(t => {
                    var r;
                    let n = I(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === 2
                })
            }

            function P(e) {
                return p(t => {
                    var r;
                    let n = I(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === 4
                })
            }
            class L extends E.default {
                handleInitialize(e) {
                    let {
                        guildId: t
                    } = e;
                    return N(t), G(t)
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
                    } = e, r = I(t);
                    return U(r)
                }
                handleGuildMemberSearchStillIndexing(e) {
                    let {
                        guildId: t
                    } = e, r = I(t);
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
            var q = new L
        }
    }
]);
//# sourceMappingURL=78891.ce18a4638e53d286858d.js.map