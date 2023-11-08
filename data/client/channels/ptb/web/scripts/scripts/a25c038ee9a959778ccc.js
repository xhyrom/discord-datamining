(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["14701"], {
        890450: function(t, e, n) {
            "use strict";
            t.exports = n.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(t, e, n) {
            "use strict";
            t.exports = n.p + "a826e445dff97cf15335.svg"
        },
        164654: function(t, e, n) {
            "use strict";
            t.exports = n.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(t, e, n) {
            "use strict";
            t.exports = n.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(t, e, n) {
            "use strict";
            t.exports = n.p + "7442b576347c1d02886f.svg"
        },
        367469: function(t, e, n) {
            "use strict";
            t.exports = n.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(t, e, n) {
            "use strict";
            t.exports = n.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(t, e, n) {
            "use strict";
            t.exports = n.p + "44d5e1639bc492dc8d62.svg"
        },
        671306: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ScreenXIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("75196");
            let s = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm6.293.293a1 1 0 0 1 1.414 0L12 7.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 9l2.293 2.293a1 1 0 0 1-1.414 1.414L12 10.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 9 8.293 6.707a1 1 0 0 1 0-1.414Z",
                        clipRule: "evenodd",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 19.5a.5.5 0 0 0 .5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2Z",
                        className: u
                    })]
                })
            }
        },
        721698: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getEmbedApplication: function() {
                    return f
                },
                getApplication: function() {
                    return E
                },
                getCategories: function() {
                    return _
                },
                getSimilarApplications: function() {
                    return p
                },
                search: function() {
                    return h
                },
                getCollections: function() {
                    return A
                },
                fetchIntegrationApplicationIdsForMyGuilds: function() {
                    return S
                }
            }), n("222007");
            var i = n("981980"),
                l = n("872717"),
                a = n("913144"),
                s = n("915639"),
                u = n("349503"),
                c = n("831109"),
                r = n("810047"),
                d = n("856894"),
                o = n("388647"),
                I = n("506061"),
                T = n("49111");
            let C = new Map;
            async function f(t) {
                var e;
                let n = Date.now(),
                    s = null !== (e = C.get(t)) && void 0 !== e ? e : 0;
                if (u.default.getApplicationFetchState(t) === u.FetchState.FETCHING || u.default.isInvalidApplication(t) || n < s + 6e5) return;
                C.set(t, n), a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                    applicationId: t
                });
                let c = new i.default(1e3, 5e3),
                    r = (t, e) => 429 === t.status && !!(c.fails < 10) && (c.fail(() => {
                        e(void 0, r)
                    }), !0);
                try {
                    let e = await l.default.get({
                            url: T.Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(t),
                            backoff: c,
                            retries: 10,
                            interceptResponse: r
                        }),
                        n = e.body;
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                        application: n
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                        applicationId: t,
                        isInvalidApplication: !0
                    })
                }
            }
            async function E(t) {
                let e = Date.now(),
                    n = u.default.getApplicationFetchState(t),
                    i = u.default.getApplicationLastFetchTime(t);
                if (n !== u.FetchState.FETCHING) {
                    if (null == i || !(i + 6e5 > e)) {
                        a.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                            applicationId: t
                        });
                        try {
                            let e = await l.default.get({
                                url: T.Endpoints.APPLICATION_DIRECTORY_APPLICATION(t),
                                query: {
                                    locale: s.default.locale
                                }
                            });
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                                application: e.body
                            })
                        } catch (e) {
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                                applicationId: t,
                                isInvalidApplication: !0
                            })
                        }
                    }
                }
            }
            async function _() {
                let t = Date.now(),
                    e = c.default.getLastFetchTimeMs();
                if (null != e && e + 6e5 > t) return;
                let n = await l.default.get({
                    url: T.Endpoints.APPLICATION_DIRECTORY_CATEGORIES,
                    query: {
                        locale: s.default.locale
                    }
                });
                a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
                    categories: n.body
                })
            }
            async function p(t) {
                var e;
                let {
                    applicationId: n,
                    guildId: i,
                    options: u
                } = t, {
                    page: c
                } = null != u ? u : {}, r = Date.now(), d = o.default.getFetchState({
                    applicationId: n,
                    guildId: i
                }), {
                    lastFetchTimeMs: I
                } = null !== (e = o.default.getSimilarApplications({
                    applicationId: n,
                    guildId: i
                })) && void 0 !== e ? e : {};
                if (d !== o.FetchState.FETCHING) {
                    if (null == I || !(I + 6e5 > r)) {
                        a.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
                            applicationId: n,
                            guildId: i,
                            page: c
                        });
                        try {
                            let t = await l.default.get({
                                url: T.Endpoints.APPLICATION_DIRECTORY_SIMILAR(n),
                                query: {
                                    guild_id: i,
                                    page: c,
                                    locale: s.default.locale
                                }
                            });
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                                applicationId: n,
                                guildId: i,
                                similarApplications: t.body.applications,
                                loadId: t.body.load_id,
                                page: c,
                                totalPages: t.body.num_pages
                            })
                        } catch (t) {
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                                applicationId: n,
                                guildId: i,
                                page: c
                            })
                        }
                    }
                }
            }
            async function h(t) {
                var e;
                let {
                    query: n,
                    guildId: i,
                    options: u,
                    onSuccessCallback: c
                } = t, {
                    page: r,
                    categoryId: o
                } = null != u ? u : {}, I = Date.now(), C = d.default.getFetchState({
                    query: n,
                    guildId: i,
                    page: r,
                    categoryId: o
                }), {
                    lastFetchTimeMs: f
                } = null !== (e = d.default.getSearchResults({
                    query: n,
                    guildId: i,
                    page: r,
                    categoryId: o
                })) && void 0 !== e ? e : {};
                if (C !== d.FetchState.FETCHING) {
                    if (null == f || !(f + 6e5 > I)) {
                        a.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
                            query: n,
                            guildId: i,
                            page: r,
                            categoryId: o
                        });
                        try {
                            let t = await l.default.get({
                                url: T.Endpoints.APPLICATION_DIRECTORY_SEARCH,
                                query: {
                                    query: n,
                                    guild_id: i,
                                    page: r,
                                    category_id: o,
                                    locale: s.default.locale
                                }
                            });
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                                query: n,
                                guildId: i,
                                page: r,
                                categoryId: o,
                                result: {
                                    results: t.body.results,
                                    countsByCategory: t.body.counts_by_category,
                                    totalCount: t.body.result_count,
                                    totalPages: t.body.num_pages,
                                    type: t.body.type,
                                    loadId: t.body.load_id
                                }
                            }), null == c || c(t.body.result_count)
                        } catch (t) {
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                                query: n,
                                guildId: i,
                                page: r,
                                categoryId: o
                            })
                        }
                    }
                }
            }
            async function A() {
                let {
                    includesInactive: t = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = Date.now(), n = r.default.getFetchState({
                    includesInactive: t
                }), i = r.default.getLastFetchTimeMs({
                    includesInactive: t
                });
                if (n !== r.FetchState.FETCHING) {
                    if (null == i || !(i + 6e5 > e)) {
                        a.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
                            includesInactive: t
                        });
                        try {
                            let e = await l.default.get({
                                url: T.Endpoints.APPLICATION_DIRECTORY_COLLECTIONS,
                                query: {
                                    includes_inactive: t,
                                    locale: s.default.locale
                                }
                            });
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
                                collections: e.body,
                                includesInactive: t
                            })
                        } catch (e) {
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
                                includesInactive: t
                            })
                        }
                    }
                }
            }
            async function S() {
                let t = Date.now(),
                    e = I.default.getFetchState(),
                    n = I.default.getLastFetchTimeMs(),
                    i = I.default.getNextFetchRetryTimeMs();
                if (e !== I.FetchState.FETCHING && (null == n || !(n + 864e5 > t))) {
                    if (null == i || !(t < i)) {
                        a.default.dispatch({
                            type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
                        });
                        try {
                            let t = await l.default.get({
                                url: T.Endpoints.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
                            });
                            a.default.dispatch({
                                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                                guildIdToApplicationIds: t.body
                            })
                        } catch (e) {
                            var s;
                            let t = (null == e ? void 0 : e.status) === 429;
                            a.default.dispatch({
                                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                                retryAfterSeconds: t ? null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.retry_after : void 0
                            })
                        }
                    }
                }
            }
        },
        831109: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                l = n("913144");
            let a = [],
                s = null;
            class u extends i.default.Store {
                getLastFetchTimeMs() {
                    return s
                }
                getCategories() {
                    return a
                }
            }
            u.displayName = "ApplicationDirectoryCategoriesStore";
            var c = new u(l.default, {
                APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(t) {
                    let {
                        categories: e
                    } = t;
                    a = e, s = Date.now()
                }
            })
        },
        810047: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FetchState: function() {
                    return l
                },
                default: function() {
                    return C
                }
            });
            var i, l, a = n("917351"),
                s = n.n(a),
                u = n("446674"),
                c = n("913144");
            (i = l || (l = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
            let r = {},
                d = {},
                o = {};

            function I(t) {
                let {
                    includesInactive: e
                } = t;
                return "includes_inactive:".concat(e)
            }
            class T extends u.default.Store {
                getLastFetchTimeMs(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return o[I({
                        includesInactive: e
                    })]
                }
                getFetchState(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return d[I({
                        includesInactive: e
                    })]
                }
                getCollections(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return r[I({
                        includesInactive: e
                    })]
                }
            }
            var C = new T(c.default, {
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function(t) {
                    let {
                        includesInactive: e
                    } = t;
                    d = {
                        ...d,
                        [I({
                            includesInactive: e
                        })]: 0
                    }
                },
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function(t) {
                    var e;
                    let {
                        collections: n,
                        includesInactive: i
                    } = t, l = I({
                        includesInactive: i
                    });
                    let a = (e = n.map(t => {
                        var e;
                        return t.application_directory_collection_items = (e = t.application_directory_collection_items, s.sortBy(e, ["position", "id"])), t
                    }), s.sortBy(e, ["position", "id"]));
                    r = {
                        ...r,
                        [l]: a
                    }, d = {
                        ...d,
                        [l]: 1
                    };
                    let u = Date.now();
                    o = {
                        ...o,
                        [l]: u
                    }
                },
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function(t) {
                    let {
                        includesInactive: e
                    } = t;
                    d = {
                        ...d,
                        [I({
                            includesInactive: e
                        })]: 2
                    }
                }
            })
        },
        856894: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FetchState: function() {
                    return l
                },
                default: function() {
                    return T
                }
            });
            var i, l, a = n("693566"),
                s = n.n(a),
                u = n("446674"),
                c = n("913144");

            function r(t) {
                let {
                    query: e,
                    guildId: n,
                    page: i,
                    categoryId: l
                } = t;
                return "query:'".concat(e, "' guildId:").concat(n, " page:").concat(i, " categoryId:").concat(l)
            }(i = l || (l = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
            let d = new s({
                    max: 20
                }),
                o = {};
            class I extends u.default.Store {
                getSearchResults(t) {
                    let {
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = t, a = r({
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    return d.get(a)
                }
                getFetchState(t) {
                    let {
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = t, a = r({
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    return o[a]
                }
            }
            I.displayName = "ApplicationDirectorySearchStore";
            var T = new I(c.default, {
                APPLICATION_DIRECTORY_FETCH_SEARCH: function(t) {
                    let {
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = t, a = r({
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    o = {
                        ...o,
                        [a]: 0
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(t) {
                    let {
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l,
                        result: a
                    } = t, s = r({
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    d.set(s, {
                        lastFetchTimeMs: Date.now(),
                        ...a
                    }), o = {
                        ...o,
                        [s]: 1
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(t) {
                    let {
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = t, a = r({
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    o = {
                        ...o,
                        [a]: 2
                    }
                }
            })
        },
        388647: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FetchState: function() {
                    return l
                },
                default: function() {
                    return T
                }
            });
            var i, l, a = n("693566"),
                s = n.n(a),
                u = n("446674"),
                c = n("913144");

            function r(t) {
                let {
                    applicationId: e,
                    guildId: n,
                    page: i
                } = t;
                return "applicationId:".concat(e, " guildId:").concat(n, " page:").concat(i)
            }(i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
            let d = new s({
                    max: 20
                }),
                o = {};
            class I extends u.default.Store {
                getSimilarApplications(t) {
                    let {
                        applicationId: e,
                        guildId: n,
                        page: i
                    } = t;
                    if (null == e) return;
                    let l = r({
                        applicationId: e,
                        guildId: n,
                        page: i
                    });
                    return d.get(l)
                }
                getFetchState(t) {
                    let {
                        applicationId: e,
                        guildId: n,
                        page: i
                    } = t;
                    if (null == e) return;
                    let l = r({
                        applicationId: e,
                        guildId: n,
                        page: i
                    });
                    return o[l]
                }
            }
            I.displayName = "ApplicationDirectorySimilarApplicationsStore";
            var T = new I(c.default, {
                APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(t) {
                    let {
                        applicationId: e,
                        guildId: n,
                        page: i
                    } = t, l = r({
                        applicationId: e,
                        guildId: n,
                        page: i
                    });
                    o = {
                        ...o,
                        [l]: 1
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function(t) {
                    let {
                        applicationId: e,
                        guildId: n,
                        similarApplications: i,
                        loadId: l,
                        page: a,
                        totalPages: s
                    } = t, u = r({
                        applicationId: e,
                        guildId: n,
                        page: a
                    });
                    d.set(u, {
                        lastFetchTimeMs: Date.now(),
                        applications: i,
                        loadId: l,
                        page: a,
                        totalPages: s
                    }), o = {
                        ...o,
                        [u]: 2
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function(t) {
                    let {
                        applicationId: e,
                        guildId: n,
                        page: i
                    } = t, l = r({
                        applicationId: e,
                        guildId: n,
                        page: i
                    });
                    o = {
                        ...o,
                        [l]: 3
                    }
                }
            })
        },
        506061: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return d
                }
            }), n("222007");
            var i, l, a = n("446674"),
                s = n("913144");
            (l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.ERROR = 3] = "ERROR";
            let u = {
                applicationIdToGuildIds: {},
                lastFetchTimeMs: null,
                nextFetchRetryTimeMs: null,
                fetchState: 0
            };

            function c(t) {
                let {
                    applicationId: e,
                    guildId: n
                } = t;
                null == u.applicationIdToGuildIds[e] && (u.applicationIdToGuildIds[e] = new Set), u.applicationIdToGuildIds[e].add(n), u.applicationIdToGuildIds[e] = new Set(u.applicationIdToGuildIds[e])
            }
            class r extends a.default.PersistedStore {
                initialize(t) {
                    if (null != t)
                        for (let e in u.lastFetchTimeMs = t.lastFetchTimeMs, u.nextFetchRetryTimeMs = t.nextFetchRetryTimeMs, u.fetchState = t.fetchState, t.applicationIdToGuildIds) u.applicationIdToGuildIds[e] = new Set(t.applicationIdToGuildIds[e])
                }
                getState() {
                    return u
                }
                getGuildIdsForApplication(t) {
                    if (null != t) return u.applicationIdToGuildIds[t]
                }
                getLastFetchTimeMs() {
                    return u.lastFetchTimeMs
                }
                getNextFetchRetryTimeMs() {
                    return u.nextFetchRetryTimeMs
                }
                getFetchState() {
                    return u.fetchState
                }
            }
            r.displayName = "MyGuildApplicationsStore", r.persistKey = "MyGuildApplicationsStore";
            var d = new r(s.default, {
                LOGOUT: function() {
                    u.applicationIdToGuildIds = {}, u.lastFetchTimeMs = null, u.nextFetchRetryTimeMs = null, u.fetchState = 0
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
                    u.fetchState = 1
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(t) {
                    let {
                        guildIdToApplicationIds: e
                    } = t;
                    for (let t in u.fetchState = 2, u.lastFetchTimeMs = Date.now(), u.applicationIdToGuildIds = {}, u.nextFetchRetryTimeMs = null, e)
                        for (let n of e[t]) c({
                            applicationId: n,
                            guildId: t
                        })
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(t) {
                    let {
                        retryAfterSeconds: e
                    } = t;
                    u.fetchState = 3, null != e && (u.nextFetchRetryTimeMs = Date.now() + 1e3 * e)
                },
                INTEGRATION_CREATE: function(t) {
                    let {
                        application: e,
                        guildId: n
                    } = t;
                    null != e && c({
                        applicationId: e.id,
                        guildId: n
                    })
                },
                INTEGRATION_DELETE: function(t) {
                    let {
                        applicationId: e,
                        guildId: n
                    } = t;
                    null != e && ! function(t) {
                        let {
                            applicationId: e,
                            guildId: n
                        } = t;
                        null != u.applicationIdToGuildIds[e] && (u.applicationIdToGuildIds[e].delete(n), u.applicationIdToGuildIds[e] = new Set(u.applicationIdToGuildIds[e]))
                    }({
                        applicationId: e,
                        guildId: n
                    })
                }
            })
        },
        388142: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                initiateChannelPrompts: function() {
                    return I
                },
                forcePrompt: function() {
                    return T
                },
                sendGamingStatsMessage: function() {
                    return C
                },
                updateGamingStats: function() {
                    return f
                }
            });
            var i = n("872717"),
                l = n("295426"),
                a = n("819689"),
                s = n("529805"),
                u = n("42203"),
                c = n("474643"),
                r = n("377253"),
                d = n("659500"),
                o = n("49111");

            function I(t) {
                i.default.post({
                    url: o.Endpoints.INITIATE_CHANNEL_PROMPTS,
                    body: {
                        guild_ids: t
                    }
                })
            }

            function T(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
                i.default.post({
                    url: o.Endpoints.FORCE_SEND_PROMPT(t),
                    body: {
                        prompt_type: e
                    }
                })
            }
            async function C(t, e, n) {
                await i.default.post({
                    url: o.Endpoints.SEND_GAMING_STATS(e),
                    body: {
                        message_reference: {
                            guild_id: t,
                            channel_id: e,
                            message_id: n
                        }
                    }
                }), E(e)
            }
            async function f(t) {
                let e = await i.default.patch({
                    url: o.Endpoints.UPDATE_GAMING_STATS(t.channel_id, t.id)
                });
                if (null != e.text && "" !== e.text) {
                    let n = u.default.getChannel(t.channel_id);
                    null != n && ((0, s.createPendingReply)({
                        channel: n,
                        message: t,
                        shouldMention: !1,
                        showMentionToggle: !1
                    }), E(n.id)), l.default.saveDraft(t.channel_id, e.text, c.DraftType.ChannelMessage)
                }
            }

            function E(t) {
                let e = r.default.getMessages(t);
                e.hasMoreAfter ? a.default.jumpToPresent(t, o.MAX_MESSAGES_PER_CHANNEL) : d.ComponentDispatch.dispatch(o.ComponentActions.SCROLLTO_PRESENT)
            }
        },
        172858: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                DUCK_CONFETTI_SPRITE: function() {
                    return a
                },
                COMMON_CONFETTI_COLORS: function() {
                    return s
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return u
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return c
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return r
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return d
                }
            });
            var i = n("516555"),
                l = n("839491");
            let a = l,
                s = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                u = [n("890450"), a, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                c = 28,
                r = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: c
                    }
                },
                d = new i.Environment
        },
        933326: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("689988"),
                l = n("21121"),
                a = n("162771"),
                s = n("398604"),
                u = n("322224");
            let c = {},
                r = new Set,
                d = async t => {
                    let e = s.default.getGuildScheduledEventsForGuild(t);
                    if (0 !== e.length) {
                        if (!r.has(t)) try {
                            await u.default.getGuildEventsForCurrentUser(t), r.add(t)
                        } catch (t) {}
                    }
                };
            class o extends i.default {
                async getGuildEventUserCounts(t) {
                    if (!(null != c && Date.now() - c[t] < 18e5)) {
                        c[t] = Date.now();
                        try {
                            await u.default.fetchGuildEventsForGuild(t, !0)
                        } catch (t) {}
                    }
                }
                getGuildEventUsers(t, e) {
                    return u.default.fetchUsersForGuildEvent(t, e)
                }
                getGuildEventsForCurrentUser(t) {
                    return d(t)
                }
                handleConnectionOpen() {
                    r.clear(), c = {};
                    let t = (0, l.isInMainTabsExperiment)(),
                        e = a.default.getLastSelectedGuildId();
                    t && null != e && this.getGuildEventUserCounts(e)
                }
                handleGuildUnavailable(t) {
                    let {
                        guildId: e
                    } = t;
                    r.delete(e), delete c[e]
                }
                handleGuildDelete(t) {
                    let {
                        guild: e
                    } = t, n = e.id;
                    r.delete(n), delete c[n]
                }
                handleInviteResolveSuccess(t) {
                    var e;
                    let {
                        invite: n
                    } = t, i = n.guild_scheduled_event, l = null === (e = n.guild) || void 0 === e ? void 0 : e.id;
                    null != i && null != l && d(l)
                }
                handleChannelSelect(t) {
                    let {
                        guildId: e
                    } = t;
                    null != e && this.getGuildEventUserCounts(e)
                }
                constructor(...t) {
                    super(...t), this.actions = {
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                        GUILD_DELETE: t => this.handleGuildDelete(t),
                        GUILD_UNAVAILABLE: t => this.handleGuildUnavailable(t),
                        INVITE_RESOLVE_SUCCESS: t => this.handleInviteResolveSuccess(t),
                        CHANNEL_SELECT: t => this.handleChannelSelect(t)
                    }
                }
            }
            var I = new o
        },
        596512: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("222007"), n("424973");
            var i = n("693566"),
                l = n.n(i),
                a = n("689988"),
                s = n("599110"),
                u = n("49111");
            class c extends a.default {
                handleMessageBecameVisible(t) {
                    let {
                        messageId: e
                    } = t;
                    if (null != this.currentlyVisibleMessageTimers[e] || this.viewsInCurrentChannel.has(e)) return;
                    let n = this.recentViewTimes.get(e);
                    if (null != n && Date.now() - n < 6e4) return;
                    let i = setTimeout(() => {
                        delete this.currentlyVisibleMessageTimers[e], this.viewsInCurrentChannel.add(e), this.recentViewTimes.set(e, Date.now()), this.bufferViewTrack(t)
                    }, 1e3);
                    this.currentlyVisibleMessageTimers[e] = i
                }
                handleMessageLostVisibility(t) {
                    let e = this.currentlyVisibleMessageTimers[t];
                    null != e && (clearTimeout(e), delete this.currentlyVisibleMessageTimers[t])
                }
                handleMessageListVisibilityChange(t) {
                    for (let e of t) this.handleMessageBecameVisible(e);
                    let e = new Set(t.map(t => t.messageId));
                    for (let t of Object.keys(this.currentlyVisibleMessageTimers)) !e.has(t) && this.handleMessageLostVisibility(t)
                }
                handleChannelSelect() {
                    for (let t of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(t);
                    this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
                }
                drainBuffer() {
                    for (let t of this.batchBuffer) s.default.track(u.AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, {
                        message_id: t.messageId,
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        source_channel_id: t.sourceChannelId,
                        source_guild_id: t.sourceGuildId
                    });
                    this.batchBuffer = [], null != this.batchTimerId && (clearTimeout(this.batchTimerId), this.batchTimerId = null)
                }
                bufferViewTrack(t) {
                    this.batchBuffer.length >= 10 && this.drainBuffer(), this.batchBuffer.push(t), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), 2e3))
                }
                constructor(...t) {
                    super(...t), this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel = new Set, this.recentViewTimes = new l({
                        max: 500,
                        maxAge: 6e4
                    }), this.batchBuffer = [], this.batchTimerId = null, this.actions = {
                        CHANNEL_SELECT: () => this.handleChannelSelect()
                    }
                }
            }
            var r = new c
        },
        985622: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("671306"),
                s = n("75196"),
                u = (0, l.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM14.5483 6L16 7.45174L13.4466 9.99485L16 12.5483L14.5483 14L12.0051 11.4466L9.45174 14L8 12.5483L10.5534 9.99485L8 7.45174L9.45174 6L12.0051 8.55341L14.5483 6Z",
                            fill: l
                        })
                    })
                }, a.ScreenXIcon)
        }
    }
]);
//# sourceMappingURL=a25c038ee9a959778ccc.js.map