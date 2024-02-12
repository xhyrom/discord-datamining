(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67690"], {
        137852: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a6ac55e775bc50ff5bff.svg"
        },
        511117: function(e, t, n) {
            "use strict";
            e.exports = n.p + "52e736e812c20d1dfda1.svg"
        },
        55620: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchAllStoreListingsForApplication: function() {
                    return d
                },
                fetchStoreListingForSku: function() {
                    return f
                },
                fetchStoreListingById: function() {
                    return p
                },
                fetchStoreListingForApplication: function() {
                    return I
                },
                matureAgree: function() {
                    return S
                },
                matureDisagree: function() {
                    return h
                },
                joinPublishedStoreListingSkuGuild: function() {
                    return _
                },
                goToSKUStoreListing: function() {
                    return T
                },
                goToApplicationStoreListing: function() {
                    return C
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("84460");
            n("299285");
            var r = n("393414"),
                s = n("552712");
            n("698041");
            var u = n("167726"),
                o = n("271560"),
                c = n("49111");

            function d(e) {
                return (0, o.httpGetWithCountryCodeQuery)({
                    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
                    query: {
                        application_id: e
                    },
                    oldFormErrors: !0
                }).then(e => (l.default.dispatch({
                    type: "STORE_LISTINGS_FETCH_SUCCESS",
                    storeListings: e.body
                }), e.body))
            }

            function f(e) {
                let t = s.default.get(e),
                    n = null != t && (u.default.inTestModeForApplication(t.applicationId) || a.default.inDevModeForApplication(t.applicationId));
                return (0, o.httpGetWithCountryCodeQuery)(n ? c.Endpoints.STORE_LISTINGS_SKU(e) : c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
                    n ? l.default.dispatch({
                        type: "STORE_LISTINGS_FETCH_SUCCESS",
                        storeListings: e.body
                    }) : l.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function p(e) {
                return (0, o.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(e)).then(e => {
                    l.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function I(e) {
                return (0, o.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
                    l.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function S() {
                l.default.dispatch({
                    type: "APPLICATION_STORE_MATURE_AGREE"
                })
            }

            function h() {
                (0, r.transitionTo)(c.Routes.APPLICATION_STORE)
            }

            function _(e) {
                return i.default.post({
                    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
                    oldFormErrors: !0
                })
            }

            function T(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, o.getStoreListingLocation)(e, t);
                (0, r.transitionTo)(n, i)
            }

            function C(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, o.getApplicationStoreListingLocation)(e, t);
                (0, r.transitionTo)(n, i)
            }
        },
        737960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("308723");

            function r(e) {
                return l.forwardRef(function(t, n) {
                    let r = l.useRef();
                    return l.useImperativeHandle(n, () => ({
                        triggerResize: () => {
                            var e;
                            null === (e = r.current) || void 0 === e || e.onResize()
                        }
                    })), (0, i.jsx)(a.default, {
                        ref: r,
                        children: n => {
                            let {
                                width: l,
                                height: a
                            } = n;
                            return (0, i.jsx)(e, {
                                ...t,
                                width: l,
                                height: a
                            })
                        }
                    })
                })
            }
        },
        618991: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("300036");
            n.es(i, t)
        },
        834897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("884691");

            function l(e) {
                let [t, n] = (0, i.useState)(() => window.matchMedia(e).matches);
                return (0, i.useEffect)(() => {
                    let t = window.matchMedia(e),
                        i = e => {
                            n(null == e ? void 0 : e.matches)
                        };
                    return i(t), t.addListener(i), () => t.removeListener(i)
                }, [e]), t
            }
        },
        612039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("884691"),
                l = n("775560"),
                a = n("862337");

            function r(e, t) {
                let [n, r] = (0, i.useState)(e), s = (0, l.useLazyValue)(() => new a.Timeout);
                (0, i.useEffect)(() => () => s.stop(), [s]);
                let u = (0, i.useCallback)(n => {
                    r(n), n !== e && s.start(t, () => r(e))
                }, [t, e, s]);
                return [n, u]
            }
        },
        302437: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("974667"),
                l = n("446674"),
                a = n("206230");

            function r() {
                return Promise.resolve()
            }

            function s(e) {
                let t = document.querySelector(e);
                null != t && t.focus()
            }

            function u(e, t) {
                let n = (0, l.useStateFromStores)([a.default], () => a.default.keyboardModeEnabled);
                return (0, i.default)({
                    id: e,
                    isEnabled: n,
                    orientation: t,
                    setFocus: s,
                    scrollToStart: r,
                    scrollToEnd: r
                })
            }
        },
        721698: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getEmbedApplication: function() {
                    return S
                },
                getApplication: function() {
                    return h
                },
                getCategories: function() {
                    return _
                },
                getSimilarApplications: function() {
                    return T
                },
                search: function() {
                    return C
                },
                getCollections: function() {
                    return E
                },
                fetchIntegrationApplicationIdsForMyGuilds: function() {
                    return A
                }
            }), n("222007");
            var i = n("981980"),
                l = n("872717"),
                a = n("913144"),
                r = n("915639"),
                s = n("349503"),
                u = n("831109"),
                o = n("810047"),
                c = n("856894"),
                d = n("388647"),
                f = n("506061"),
                p = n("49111");
            let I = new Map;
            async function S(e) {
                var t;
                let n = Date.now(),
                    r = null !== (t = I.get(e)) && void 0 !== t ? t : 0;
                if (s.default.getApplicationFetchState(e) === s.FetchState.FETCHING || s.default.isInvalidApplication(e) || n < r + 6e5) return;
                I.set(e, n), a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                    applicationId: e
                });
                let u = new i.default(1e3, 5e3),
                    o = (e, t) => 429 === e.status && !!(u.fails < 10) && (u.fail(() => {
                        t(void 0, o)
                    }), !0);
                try {
                    let t = await l.default.get({
                            url: p.Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                            backoff: u,
                            retries: 10,
                            interceptResponse: o
                        }),
                        n = t.body;
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                        application: n
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                        applicationId: e,
                        isInvalidApplication: !0
                    })
                }
            }
            async function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = Date.now(),
                    i = s.default.getApplicationFetchState(e),
                    u = s.default.getApplicationLastFetchTime(e),
                    {
                        dontRefetchMs: o
                    } = t;
                if (i !== s.FetchState.FETCHING) {
                    if (!(null != u && u + (null != o ? o : 6e5) > n)) {
                        a.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                            applicationId: e
                        });
                        try {
                            let t = await l.default.get({
                                url: p.Endpoints.APPLICATION_DIRECTORY_APPLICATION(e),
                                query: {
                                    locale: r.default.locale
                                }
                            });
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                                application: t.body
                            })
                        } catch (t) {
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                                applicationId: e,
                                isInvalidApplication: !0
                            })
                        }
                    }
                }
            }
            async function _() {
                let e = Date.now(),
                    t = u.default.getLastFetchTimeMs();
                if (null != t && t + 6e5 > e) return;
                let n = await l.default.get({
                    url: p.Endpoints.APPLICATION_DIRECTORY_CATEGORIES,
                    query: {
                        locale: r.default.locale
                    }
                });
                a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
                    categories: n.body
                })
            }
            async function T(e) {
                var t;
                let {
                    applicationId: n,
                    guildId: i,
                    options: s
                } = e, {
                    page: u
                } = null != s ? s : {}, o = Date.now(), c = d.default.getFetchState({
                    applicationId: n,
                    guildId: i
                }), {
                    lastFetchTimeMs: f
                } = null !== (t = d.default.getSimilarApplications({
                    applicationId: n,
                    guildId: i
                })) && void 0 !== t ? t : {};
                if (c !== d.FetchState.FETCHING) {
                    if (null == f || !(f + 6e5 > o)) {
                        a.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
                            applicationId: n,
                            guildId: i,
                            page: u
                        });
                        try {
                            let e = await l.default.get({
                                url: p.Endpoints.APPLICATION_DIRECTORY_SIMILAR(n),
                                query: {
                                    guild_id: i,
                                    page: u,
                                    locale: r.default.locale
                                }
                            });
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                                applicationId: n,
                                guildId: i,
                                similarApplications: e.body.applications,
                                loadId: e.body.load_id,
                                page: u,
                                totalPages: e.body.num_pages
                            })
                        } catch (e) {
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                                applicationId: n,
                                guildId: i,
                                page: u
                            })
                        }
                    }
                }
            }
            async function C(e) {
                var t;
                let {
                    query: n,
                    guildId: i,
                    options: s,
                    onSuccessCallback: u
                } = e, {
                    page: o,
                    categoryId: d
                } = null != s ? s : {}, f = Date.now(), I = c.default.getFetchState({
                    query: n,
                    guildId: i,
                    page: o,
                    categoryId: d
                }), {
                    lastFetchTimeMs: S
                } = null !== (t = c.default.getSearchResults({
                    query: n,
                    guildId: i,
                    page: o,
                    categoryId: d
                })) && void 0 !== t ? t : {};
                if (I !== c.FetchState.FETCHING) {
                    if (null == S || !(S + 6e5 > f)) {
                        a.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
                            query: n,
                            guildId: i,
                            page: o,
                            categoryId: d
                        });
                        try {
                            let e = await l.default.get({
                                url: p.Endpoints.APPLICATION_DIRECTORY_SEARCH,
                                query: {
                                    query: n,
                                    guild_id: i,
                                    page: o,
                                    category_id: d,
                                    locale: r.default.locale
                                }
                            });
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                                query: n,
                                guildId: i,
                                page: o,
                                categoryId: d,
                                result: {
                                    results: e.body.results,
                                    countsByCategory: e.body.counts_by_category,
                                    totalCount: e.body.result_count,
                                    totalPages: e.body.num_pages,
                                    type: e.body.type,
                                    loadId: e.body.load_id
                                }
                            }), null == u || u(e.body.result_count)
                        } catch (e) {
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                                query: n,
                                guildId: i,
                                page: o,
                                categoryId: d
                            })
                        }
                    }
                }
            }
            async function E() {
                let {
                    includesInactive: e = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Date.now(), n = o.default.getFetchState({
                    includesInactive: e
                }), i = o.default.getLastFetchTimeMs({
                    includesInactive: e
                });
                if (n !== o.FetchState.FETCHING) {
                    if (null == i || !(i + 6e5 > t)) {
                        a.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
                            includesInactive: e
                        });
                        try {
                            let t = await l.default.get({
                                url: p.Endpoints.APPLICATION_DIRECTORY_COLLECTIONS,
                                query: {
                                    includes_inactive: e,
                                    locale: r.default.locale
                                }
                            });
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
                                collections: t.body,
                                includesInactive: e
                            })
                        } catch (t) {
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
                                includesInactive: e
                            })
                        }
                    }
                }
            }
            async function A() {
                let e = Date.now(),
                    t = f.default.getFetchState(),
                    n = f.default.getLastFetchTimeMs(),
                    i = f.default.getNextFetchRetryTimeMs();
                if (t !== f.FetchState.FETCHING && (null == n || !(n + 864e5 > e))) {
                    if (null == i || !(e < i)) {
                        a.default.dispatch({
                            type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
                        });
                        try {
                            let e = await l.default.get({
                                url: p.Endpoints.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
                            });
                            a.default.dispatch({
                                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                                guildIdToApplicationIds: e.body
                            })
                        } catch (t) {
                            var r;
                            let e = (null == t ? void 0 : t.status) === 429;
                            a.default.dispatch({
                                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                                retryAfterSeconds: e ? null == t ? void 0 : null === (r = t.body) || void 0 === r ? void 0 : r.retry_after : void 0
                            })
                        }
                    }
                }
            }
        },
        831109: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                l = n("913144");
            let a = [],
                r = null;
            class s extends i.default.Store {
                getLastFetchTimeMs() {
                    return r
                }
                getCategories() {
                    return a
                }
            }
            s.displayName = "ApplicationDirectoryCategoriesStore";
            var u = new s(l.default, {
                APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(e) {
                    let {
                        categories: t
                    } = e;
                    a = t, r = Date.now()
                }
            })
        },
        810047: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return l
                },
                default: function() {
                    return I
                }
            });
            var i, l, a = n("917351"),
                r = n.n(a),
                s = n("446674"),
                u = n("913144");
            (i = l || (l = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
            let o = {},
                c = {},
                d = {};

            function f(e) {
                let {
                    includesInactive: t
                } = e;
                return "includes_inactive:".concat(t)
            }
            class p extends s.default.Store {
                getLastFetchTimeMs(e) {
                    let {
                        includesInactive: t
                    } = e;
                    return d[f({
                        includesInactive: t
                    })]
                }
                getFetchState(e) {
                    let {
                        includesInactive: t
                    } = e;
                    return c[f({
                        includesInactive: t
                    })]
                }
                getCollections(e) {
                    let {
                        includesInactive: t
                    } = e;
                    return o[f({
                        includesInactive: t
                    })]
                }
            }
            var I = new p(u.default, {
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function(e) {
                    let {
                        includesInactive: t
                    } = e;
                    c = {
                        ...c,
                        [f({
                            includesInactive: t
                        })]: 0
                    }
                },
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function(e) {
                    var t;
                    let {
                        collections: n,
                        includesInactive: i
                    } = e, l = f({
                        includesInactive: i
                    });
                    let a = (t = n.map(e => {
                        var t;
                        return e.application_directory_collection_items = (t = e.application_directory_collection_items, r.sortBy(t, ["position", "id"])), e
                    }), r.sortBy(t, ["position", "id"]));
                    o = {
                        ...o,
                        [l]: a
                    }, c = {
                        ...c,
                        [l]: 1
                    };
                    let s = Date.now();
                    d = {
                        ...d,
                        [l]: s
                    }
                },
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function(e) {
                    let {
                        includesInactive: t
                    } = e;
                    c = {
                        ...c,
                        [f({
                            includesInactive: t
                        })]: 2
                    }
                }
            })
        },
        856894: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return l
                },
                default: function() {
                    return p
                }
            });
            var i, l, a = n("693566"),
                r = n.n(a),
                s = n("446674"),
                u = n("913144");

            function o(e) {
                let {
                    query: t,
                    guildId: n,
                    page: i,
                    categoryId: l
                } = e;
                return "query:'".concat(t, "' guildId:").concat(n, " page:").concat(i, " categoryId:").concat(l)
            }(i = l || (l = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
            let c = new r({
                    max: 20
                }),
                d = {};
            class f extends s.default.Store {
                getSearchResults(e) {
                    let {
                        query: t,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = e, a = o({
                        query: t,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    return c.get(a)
                }
                getFetchState(e) {
                    let {
                        query: t,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = e, a = o({
                        query: t,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    return d[a]
                }
            }
            f.displayName = "ApplicationDirectorySearchStore";
            var p = new f(u.default, {
                APPLICATION_DIRECTORY_FETCH_SEARCH: function(e) {
                    let {
                        query: t,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = e, a = o({
                        query: t,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    d = {
                        ...d,
                        [a]: 0
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(e) {
                    let {
                        query: t,
                        guildId: n,
                        page: i,
                        categoryId: l,
                        result: a
                    } = e, r = o({
                        query: t,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    c.set(r, {
                        lastFetchTimeMs: Date.now(),
                        ...a
                    }), d = {
                        ...d,
                        [r]: 1
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(e) {
                    let {
                        query: t,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = e, a = o({
                        query: t,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    d = {
                        ...d,
                        [a]: 2
                    }
                }
            })
        },
        388647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return l
                },
                default: function() {
                    return p
                }
            });
            var i, l, a = n("693566"),
                r = n.n(a),
                s = n("446674"),
                u = n("913144");

            function o(e) {
                let {
                    applicationId: t,
                    guildId: n,
                    page: i
                } = e;
                return "applicationId:".concat(t, " guildId:").concat(n, " page:").concat(i)
            }(i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
            let c = new r({
                    max: 20
                }),
                d = {};
            class f extends s.default.Store {
                getSimilarApplications(e) {
                    let {
                        applicationId: t,
                        guildId: n,
                        page: i
                    } = e;
                    if (null == t) return;
                    let l = o({
                        applicationId: t,
                        guildId: n,
                        page: i
                    });
                    return c.get(l)
                }
                getFetchState(e) {
                    let {
                        applicationId: t,
                        guildId: n,
                        page: i
                    } = e;
                    if (null == t) return;
                    let l = o({
                        applicationId: t,
                        guildId: n,
                        page: i
                    });
                    return d[l]
                }
            }
            f.displayName = "ApplicationDirectorySimilarApplicationsStore";
            var p = new f(u.default, {
                APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(e) {
                    let {
                        applicationId: t,
                        guildId: n,
                        page: i
                    } = e, l = o({
                        applicationId: t,
                        guildId: n,
                        page: i
                    });
                    d = {
                        ...d,
                        [l]: 1
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function(e) {
                    let {
                        applicationId: t,
                        guildId: n,
                        similarApplications: i,
                        loadId: l,
                        page: a,
                        totalPages: r
                    } = e, s = o({
                        applicationId: t,
                        guildId: n,
                        page: a
                    });
                    c.set(s, {
                        lastFetchTimeMs: Date.now(),
                        applications: i,
                        loadId: l,
                        page: a,
                        totalPages: r
                    }), d = {
                        ...d,
                        [s]: 2
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function(e) {
                    let {
                        applicationId: t,
                        guildId: n,
                        page: i
                    } = e, l = o({
                        applicationId: t,
                        guildId: n,
                        page: i
                    });
                    d = {
                        ...d,
                        [l]: 3
                    }
                }
            })
        },
        506061: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return d
                }
            }), n("222007");
            var i, l, a = n("446674"),
                r = n("913144"),
                s = n("718517");
            (l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.ERROR = 3] = "ERROR";
            let u = {
                applicationIdToGuildIds: {},
                lastFetchTimeMs: null,
                nextFetchRetryTimeMs: null,
                fetchState: 0
            };

            function o(e) {
                let {
                    applicationId: t,
                    guildId: n
                } = e;
                null == u.applicationIdToGuildIds[t] && (u.applicationIdToGuildIds[t] = new Set), u.applicationIdToGuildIds[t].add(n), u.applicationIdToGuildIds[t] = new Set(u.applicationIdToGuildIds[t])
            }
            class c extends a.default.PersistedStore {
                initialize(e) {
                    if (null != e)
                        for (let t in u.lastFetchTimeMs = e.lastFetchTimeMs, u.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs, u.fetchState = e.fetchState, e.applicationIdToGuildIds) u.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t])
                }
                getState() {
                    return u
                }
                getGuildIdsForApplication(e) {
                    if (null != e) return u.applicationIdToGuildIds[e]
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
            c.displayName = "MyGuildApplicationsStore", c.persistKey = "MyGuildApplicationsStore";
            var d = new c(r.default, {
                LOGOUT: function() {
                    u.applicationIdToGuildIds = {}, u.lastFetchTimeMs = null, u.nextFetchRetryTimeMs = null, u.fetchState = 0
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
                    u.fetchState = 1
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(e) {
                    let {
                        guildIdToApplicationIds: t
                    } = e;
                    for (let e in u.fetchState = 2, u.lastFetchTimeMs = Date.now(), u.applicationIdToGuildIds = {}, u.nextFetchRetryTimeMs = null, t)
                        for (let n of t[e]) o({
                            applicationId: n,
                            guildId: e
                        })
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(e) {
                    let {
                        retryAfterSeconds: t
                    } = e;
                    if (u.fetchState = 3, null != t) {
                        let e = t * s.default.Millis.SECOND;
                        u.nextFetchRetryTimeMs = Date.now() + e
                    }
                },
                INTEGRATION_CREATE: function(e) {
                    let {
                        application: t,
                        guildId: n
                    } = e;
                    null != t && o({
                        applicationId: t.id,
                        guildId: n
                    })
                },
                INTEGRATION_DELETE: function(e) {
                    let {
                        applicationId: t,
                        guildId: n
                    } = e;
                    null != t && ! function(e) {
                        let {
                            applicationId: t,
                            guildId: n
                        } = e;
                        null != u.applicationIdToGuildIds[t] && (u.applicationIdToGuildIds[t].delete(n), u.applicationIdToGuildIds[t] = new Set(u.applicationIdToGuildIds[t]))
                    }({
                        applicationId: t,
                        guildId: n
                    })
                }
            })
        },
        425480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY: function() {
                    return i
                },
                RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY: function() {
                    return l
                }
            });
            let i = "(max-width: 485px)",
                l = "(max-height: 450px)"
        },
        692105: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                IconType: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.STORE_ASSET = 1] = "STORE_ASSET", l[l.EMOJI = 2] = "EMOJI"
        },
        829805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationBenefitsModalIcon: function() {
                    return c
                },
                ApplicationBenefitsModalHeading: function() {
                    return d
                },
                ApplicationBenefitsModalDivider: function() {
                    return f
                },
                ApplicationBenefitsModalDescription: function() {
                    return p
                },
                ApplicationBenefitsModalBenefits: function() {
                    return I
                },
                ApplicationBenefitsModalContent: function() {
                    return S
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                r = n("77078"),
                s = n("850644"),
                u = n("899604"),
                o = n("114067");
            let c = e => {
                    let {
                        application: t,
                        asset: n,
                        className: l,
                        ...a
                    } = e;
                    return (0, i.jsx)(s.default, {
                        application: t,
                        size: s.ApplicationIconSize.MEDIUM,
                        asset: n,
                        className: l,
                        ...a
                    })
                },
                d = e => {
                    let {
                        children: t,
                        className: n,
                        id: l,
                        ...s
                    } = e;
                    return (0, i.jsx)(r.Heading, {
                        className: a(o.header, n),
                        variant: "heading-xl/extrabold",
                        id: l,
                        ...s,
                        children: t
                    })
                };

            function f() {
                return (0, i.jsx)("hr", {
                    className: o.divider
                })
            }
            let p = e => {
                    let {
                        className: t,
                        title: n,
                        description: l,
                        ...a
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: t,
                        ...a,
                        children: [(0, i.jsx)(r.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            children: n
                        }), (0, i.jsx)(r.Heading, {
                            variant: "heading-sm/normal",
                            color: "header-secondary",
                            children: l
                        })]
                    })
                },
                I = e => {
                    let {
                        applicationId: t,
                        storeListingBenefits: n,
                        skuBenefits: l,
                        className: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("div", {
                        className: a(o.benefitsContainer, r),
                        ...s,
                        children: (0, i.jsx)(u.SubscriptionListingBenefits, {
                            applicationId: t,
                            storeListingBenefits: n,
                            skuBenefits: l,
                            className: o.benefit
                        })
                    })
                },
                S = e => {
                    let {
                        children: t,
                        className: n,
                        ...l
                    } = e;
                    return (0, i.jsx)("div", {
                        className: a(o.container, n),
                        ...l,
                        children: t
                    })
                }
        },
        850644: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationIconSize: function() {
                    return l
                },
                default: function() {
                    return f
                }
            });
            var i, l, a = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                u = n("315102"),
                o = n("271560"),
                c = n("969850");
            (i = l || (l = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
            let d = {
                40: c.small,
                66: c.medium
            };
            var f = e => {
                let t, {
                    application: n,
                    size: i,
                    asset: l,
                    className: r
                } = e;
                return t = null != l ? (0, o.getAssetURL)(n.id, l, i) : u.default.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: i
                }), (0, a.jsx)("img", {
                    alt: "",
                    src: t,
                    className: s(c.icon, d[i], r)
                })
            }
        },
        910861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                r = n("77078"),
                s = n("396671");

            function u(e) {
                let {
                    children: t,
                    className: n,
                    size: l = r.Button.Sizes.SMALL,
                    ...u
                } = e;
                return (0, i.jsx)(r.Button, {
                    ...u,
                    size: l,
                    className: a(s.button, n),
                    children: t
                })
            }
        },
        333955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PurchaseHeader: function() {
                    return h
                },
                BenefitsConfirmation: function() {
                    return _
                },
                PurchaseConfirmation: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("834897"),
                r = n("85336"),
                s = n("159149"),
                u = n("650484"),
                o = n("945330"),
                c = n("829805"),
                d = n("425480"),
                f = n("782340"),
                p = n("370184"),
                I = n("137852"),
                S = n("511117");
            let h = e => {
                    let {
                        step: t,
                        onClose: n
                    } = e, s = (0, a.default)(d.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                    return t === r.Step.CONFIRM || t === r.Step.BENEFITS ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                        className: p.headerContainer,
                        children: [!s && (0, i.jsx)("div", {
                            className: p.headerImageContainer,
                            "aria-hidden": "true",
                            children: (0, i.jsx)("img", {
                                src: S,
                                alt: "",
                                className: p.headerImage
                            })
                        }), (0, i.jsx)(l.Clickable, {
                            className: p.closeContainer,
                            onClick: () => n(),
                            "aria-label": f.default.Messages.CLOSE,
                            children: (0, i.jsx)(o.default, {
                                className: p.closeIcon
                            })
                        })]
                    })
                },
                _ = e => {
                    let {
                        icon: t,
                        storeListingBenefits: n,
                        skuBenefits: l,
                        application: a,
                        title: r,
                        subtitle: s,
                        description: u
                    } = e;
                    return null == a ? null : (0, i.jsx)("div", {
                        className: p.confirmationContainer,
                        children: (0, i.jsxs)(c.ApplicationBenefitsModalContent, {
                            children: [(0, i.jsx)(c.ApplicationBenefitsModalIcon, {
                                application: a,
                                asset: t
                            }), (0, i.jsx)(c.ApplicationBenefitsModalHeading, {
                                children: r
                            }), (0, i.jsx)(c.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(c.ApplicationBenefitsModalDescription, {
                                title: s,
                                description: u
                            }), (0, i.jsx)(c.ApplicationBenefitsModalBenefits, {
                                applicationId: a.id,
                                storeListingBenefits: n,
                                skuBenefits: l
                            })]
                        })
                    })
                };

            function T(e) {
                let {
                    tierName: t,
                    onConfirm: n,
                    subscription: a
                } = e;
                return (0, i.jsxs)("div", {
                    className: p.purchaseConfirmation,
                    children: [(0, i.jsx)("img", {
                        src: I,
                        alt: "",
                        width: 300,
                        height: 126
                    }), (0, i.jsx)(l.Heading, {
                        className: p.confirmationTitle,
                        variant: "heading-xl/extrabold",
                        color: "header-primary",
                        children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                            tier: t
                        })
                    }), (0, i.jsx)(l.Text, {
                        className: p.confirmationSubtitle,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == a ? void 0 : a.currentPeriodEnd
                        })
                    }), (0, i.jsx)(u.PaymentPortalFooter, {
                        children: (0, i.jsx)(s.default, {
                            onPrimary: n,
                            primaryCTA: s.CTAType.CONTINUE,
                            primaryText: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                        })
                    })]
                })
            }
        },
        899604: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SubscriptionListingBenefits: function() {
                    return d
                },
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                r = n("77078"),
                s = n("430568"),
                u = n("271560"),
                o = n("692105"),
                c = n("888266");

            function d(e) {
                let t, {
                    applicationId: n,
                    storeListingBenefits: l,
                    skuBenefits: r,
                    className: s
                } = e;
                return null != l ? t = l.map(e => (0, i.jsx)(p, {
                    applicationId: n,
                    benefit: e,
                    className: a(c.benefit, s)
                }, e.id)) : null != r && (t = r.map((e, t) => (0, i.jsx)(f, {
                    benefit: e,
                    className: a(c.benefit, s)
                }, t))), (0, i.jsx)(i.Fragment, {
                    children: t
                })
            }

            function f(e) {
                let {
                    benefit: t,
                    className: n,
                    emojiContainerClassName: l,
                    showsDescription: u = !0,
                    nameTextVariant: o = "text-md/medium",
                    nameTextColor: d = "header-primary"
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(c.container, n),
                    children: [null != t.emoji && (0, i.jsx)("div", {
                        className: a(c.emojiContainer, l),
                        children: (0, i.jsx)(s.default, {
                            emojiId: t.emoji.id,
                            emojiName: t.emoji.name,
                            animated: t.emoji.animated
                        })
                    }), (0, i.jsxs)("div", {
                        className: c.infoContainer,
                        children: [(0, i.jsx)(r.Text, {
                            variant: o,
                            color: d,
                            className: c.name,
                            children: t.name
                        }), u && (0, i.jsx)(r.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: t.description
                        })]
                    })]
                })
            }

            function p(e) {
                let t, {
                    applicationId: n,
                    benefit: l,
                    className: d,
                    emojiContainerClassName: f,
                    showsDescription: p = !0,
                    nameTextVariant: I = "text-md/medium",
                    nameTextColor: S = "header-primary"
                } = e;
                if (null != l.icon) switch (l.icon.type) {
                    case o.IconType.STORE_ASSET:
                        let h = (0, u.getAssetURL)(n, l.icon.store_asset_id);
                        t = (0, i.jsx)("img", {
                            src: h,
                            alt: "",
                            className: "emoji"
                        });
                        break;
                    case o.IconType.EMOJI:
                        t = (0, i.jsx)(s.default, {
                            emojiName: l.icon.emoji
                        })
                }
                return (0, i.jsxs)("div", {
                    className: a(c.container, d),
                    children: [(0, i.jsx)("div", {
                        className: a(c.emojiContainer, f),
                        children: t
                    }), (0, i.jsxs)("div", {
                        className: c.infoContainer,
                        children: [(0, i.jsx)(r.Text, {
                            variant: I,
                            color: S,
                            className: c.name,
                            children: l.name
                        }), p && (0, i.jsx)(r.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: l.description
                        })]
                    })]
                })
            }
        },
        599733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                confirmNoSharedServerSubscribeWarningModal: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078");

            function a(e) {
                let {
                    application: t,
                    onConfirm: a,
                    onCancel: r
                } = e;
                return (0, l.openModalLazy)(async () => {
                    let {
                        ConfirmNoSharedServerSubscribeWarningModal: e
                    } = await n.el("411638").then(n.bind(n, "411638"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        application: t,
                        onConfirm: a,
                        onCancel: r
                    })
                }, {
                    modalKey: "application-user-subscribe-no-shared-server-warning"
                }), Promise.resolve()
            }
        },
        153335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("627445"),
                r = n.n(a),
                s = n("446674"),
                u = n("913144"),
                o = n("775433"),
                c = n("685665"),
                d = n("598981"),
                f = n("846286"),
                p = n("697218"),
                I = n("10514"),
                S = n("650509"),
                h = n("90592"),
                _ = n("333955"),
                T = n("599733"),
                C = n("49111"),
                E = n("782340"),
                A = e => {
                    var t;
                    let n, {
                            listing: a,
                            guildId: A,
                            groupListingId: m,
                            analyticsLocation: g,
                            showBenefitsFirst: N,
                            onComplete: O,
                            forcesTransitionToGuild: R
                        } = e,
                        L = null == a ? void 0 : a.subscription_plans[0],
                        P = null == a ? void 0 : a.application_id,
                        b = null == L ? void 0 : L.id,
                        v = (null == a ? void 0 : a.published) === !0,
                        y = null == L ? void 0 : L.sku_id,
                        F = (0, s.useStateFromStores)([I.default], () => null != b ? I.default.get(b) : null),
                        D = (0, S.useApplication)(P),
                        x = (0, S.useSubscriptionListingsForGroup)(m, {
                            includeSoftDeleted: !0
                        }),
                        G = x.map(e => e.subscription_plans[0].id),
                        {
                            analyticsLocations: M
                        } = (0, c.default)(),
                        {
                            activeSubscription: w,
                            activeEntitlement: H
                        } = (0, S.useActiveSubscriptionListingForApplication)(P, A),
                        U = (0, S.useEligibleApplicationSubscriptionGuilds)(P, A),
                        k = (0, d.default)(),
                        j = null != a && (0, h.isApplicationUserSubscription)(a.sku_flags),
                        B = null != H && H.userId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                        Y = null == H || B,
                        V = null == H || G.length > 1,
                        K = null != A || U.length > 0,
                        z = j && B,
                        W = null != F && null != D && Y && V && (K || j) && !z;
                    Y ? K ? z && null != F && (n = E.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
                        tierName: F.name
                    })) : n = E.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = E.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, l.useEffect(() => {
                        v && null != y && k && u.default.wait(() => {
                            (0, o.fetchSubscriptionPlansForSKU)(y)
                        })
                    }, [v, y, k]);
                    let q = l.useCallback(() => {
                        r(null != a, "No subscription listing"), r(null != D, "No application"), r(null != L, "No subscription plan"), r(v, "Cannot purchase this unpublished plan");
                        let e = () => {
                            (0, f.openApplicationSubscriptionPaymentModal)({
                                activeSubscription: w,
                                analyticsSubscriptionType: C.SubscriptionTypes.APPLICATION,
                                analyticsLocations: M,
                                analyticsLocation: g,
                                renderHeader: (e, t, n) => (0, i.jsx)(_.PurchaseHeader, {
                                    step: n,
                                    onClose: () => t(!1)
                                }),
                                initialPlanId: L.id,
                                skuId: L.sku_id,
                                guildId: A,
                                eligibleApplicationSubscriptionGuilds: U,
                                planGroup: G,
                                listing: a,
                                application: D,
                                showBenefitsFirst: N,
                                onComplete: O,
                                forcesTransitionToGuild: R
                            })
                        };
                        !K && j ? (0, T.confirmNoSharedServerSubscribeWarningModal)({
                            application: D,
                            onConfirm: e,
                            onCancel: () => {}
                        }) : e()
                    }, [v, a, L, G, D, A, K, j, M, g, w, N, U, O, R]);
                    return {
                        openModal: q,
                        canOpenModal: W,
                        cannotOpenReason: n
                    }
                }
        },
        560350: function(e, t, n) {
            "use strict";

            function i(e) {
                return {
                    id: e.id,
                    filename: e.filename,
                    size: e.size,
                    width: e.width,
                    height: e.height,
                    mimeType: e.mime_type
                }
            }
            n.r(t), n.d(t, {
                transformStoreAssetFromServer: function() {
                    return i
                }
            })
        },
        635357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftContextProvider: function() {
                    return _
                },
                useGiftContext: function() {
                    return S
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                a = n("210721"),
                r = n("53253"),
                s = n("105097"),
                u = n("659632"),
                o = n("642906"),
                c = n("646718"),
                d = n("782340");
            let f = c.PremiumGiftStyles.STANDARD_BOX,
                p = void 0,
                [I, S, h] = (0, s.default)();

            function _(e) {
                let {
                    isGift: t = !1,
                    giftRecipient: n,
                    giftMessage: s,
                    children: S
                } = e, {
                    selectedSkuId: h
                } = (0, o.usePaymentContext)(), [_, T] = l.useState(n), [C, E] = l.useState(), [A, m] = l.useState(!1), g = (0, u.shouldShowCustomGiftExperience)(_), N = (0, r.useIsSeasonalGiftingActive)(), {
                    enabled: O
                } = r.default.useExperiment({
                    location: "PaymentContextProvider"
                }, {
                    autoTrackExposure: g && N
                }), [R, L] = l.useState(g ? O && N ? c.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [P, b] = l.useState(t && (0, u.getGiftExperience)(_) === u.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? d.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : s), [v, y] = l.useState(void 0), [F, D] = l.useState(void 0), x = (0, u.useGetGiftCode)(h, t), [G, M] = l.useState(!1), [w, H] = l.useState(!1), [U, k] = l.useState(), j = l.useCallback(e => {
                    let {
                        onSubscriptionConfirmation: t
                    } = e;
                    return H(!0), (0, a.sendGiftMessage)(_, x).then(() => {
                        H(!1), null == t || t(), M(!0)
                    }).catch(e => {
                        H(!1), k(e), M(!0)
                    })
                }, [_, x, H, M, k]);
                return (0, i.jsx)(I.Provider, {
                    value: {
                        isGift: t,
                        giftCode: x,
                        giftMessage: s,
                        giftRecipient: _,
                        setGiftRecipient: T,
                        giftRecipientError: C,
                        setGiftRecipientError: E,
                        validatingGiftRecipient: A,
                        setValidatingGiftRecipient: m,
                        soundEffect: v,
                        setSoundEffect: y,
                        emojiConfetti: F,
                        setEmojiConfetti: D,
                        customGiftMessage: P,
                        setCustomGiftMessage: b,
                        selectedGiftStyle: R,
                        setSelectedGiftStyle: L,
                        sendGiftMessage: j,
                        hasSentMessage: G,
                        isSendingMessage: w,
                        giftMessageError: U
                    },
                    children: S
                })
            }
        },
        846286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openApplicationSubscriptionPaymentModal: function() {
                    return h
                },
                openActivityApplicationPaymentModal: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("627445"),
                a = n.n(l),
                r = n("77078"),
                s = n("316718"),
                u = n("55620"),
                o = n("524503"),
                c = n("186211"),
                d = n("90592"),
                f = n("651057"),
                p = n("299285"),
                I = n("635357"),
                S = n("49111");

            function h(e) {
                let {
                    initialPlanId: t,
                    activeSubscription: l,
                    analyticsObject: a,
                    analyticsLocation: s,
                    analyticsLocations: u,
                    analyticsSubscriptionType: o,
                    renderHeader: c,
                    planGroup: d,
                    skuId: f,
                    guildId: p,
                    reviewWarningMessage: h,
                    listing: _,
                    application: T,
                    showBenefitsFirst: C,
                    eligibleApplicationSubscriptionGuilds: E,
                    onComplete: A,
                    forcesTransitionToGuild: m
                } = e;
                (0, r.openModalLazy)(async () => {
                    let {
                        PaymentContextProvider: e
                    } = await n.el("642906").then(n.bind(n, "642906")), r = (await n.el("452113").then(n.bind(n, "452113"))).default, {
                        getApplicationSubscriptionPaymentSteps: S
                    } = await n.el("590749").then(n.bind(n, "590749")), g = S({
                        guildId: p,
                        application: T,
                        listing: _,
                        showBenefitsFirst: C,
                        eligibleApplicationSubscriptionGuilds: E
                    });
                    return n => (0, i.jsx)(e, {
                        applicationId: T.id,
                        activeSubscription: l,
                        stepConfigs: g,
                        skuIDs: [f],
                        children: (0, i.jsx)(I.GiftContextProvider, {
                            children: (0, i.jsx)(r, {
                                ...n,
                                initialPlanId: t,
                                skuId: f,
                                analyticsLocations: u,
                                analyticsObject: a,
                                analyticsLocation: s,
                                analyticsSubscriptionType: o,
                                renderHeader: c,
                                planGroup: d,
                                reviewWarningMessage: h,
                                applicationId: T.id,
                                guildId: null != p ? p : void 0,
                                onComplete: A,
                                forcesTransitionToGuild: m
                            })
                        })
                    })
                }, {
                    onCloseRequest: S.NOOP
                })
            }
            let _ = async e => {
                let t = p.default.getApplication(e);
                if (null != t) return t;
                await f.default.fetchApplications([e], !1);
                let n = p.default.getApplication(e);
                return a(null != n, "Failed to find application with ID %s", e), n
            }, T = async e => {
                let t = c.default.getSubscriptionGroupListingForApplication(e);
                if (null != t) return t;
                let n = await (0, u.fetchAllStoreListingsForApplication)(e),
                    i = n.find(e => e.sku.type === S.SKUTypes.SUBSCRIPTION_GROUP);
                a(null != i, "Failed to find subscription store listing"), await (0, o.fetchAllSubscriptionListingsDataForApplication)(e, null == i ? void 0 : i.id);
                let l = c.default.getSubscriptionGroupListingForApplication(e);
                return a(null != l, "Failed to find subscription group listing"), l
            }, C = async (e, t) => {
                let n = await (0, s.fetchUserEntitlementsForApplication)(e),
                    i = n.filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
                a(null == i, "User already has an active subscription to this SKU")
            };
            async function E(e) {
                let {
                    applicationId: t,
                    skuId: n,
                    initialPlanId: i,
                    analyticsLocationObject: l,
                    analyticsLocations: r,
                    renderHeader: s
                } = e, u = await _(t), o = await T(t), c = (0, d.getPayableSubscriptionListing)(o);
                a(null != c, "Failed to find subscription listing");
                let f = (0, d.isApplicationUserSubscription)(c.sku_flags);
                a(f, "Guild application subscriptions unsupported!"), a(c.published, "Subscription listing not published"), await C(t, n);
                let p = {
                    initialPlanId: null != i ? i : null == c ? void 0 : c.subscription_plans[0].id,
                    activeSubscription: null,
                    analyticsLocations: r,
                    analyticsLocationObject: l,
                    analyticsSubscriptionType: S.SubscriptionTypes.APPLICATION,
                    renderHeader: s,
                    planGroup: o.subscription_listings_ids,
                    skuId: n,
                    guildId: null,
                    eligibleApplicationSubscriptionGuilds: [],
                    showBenefitsFirst: !1,
                    application: u,
                    listing: c
                };
                h(p)
            }
        },
        159149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CTAType: function() {
                    return l
                },
                default: function() {
                    return p
                }
            });
            var i, l, a = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("145131"),
                u = n("181114"),
                o = n("376641"),
                c = n("782340"),
                d = n("198699");
            (i = l || (l = {}))[i.CONTINUE = 0] = "CONTINUE", i[i.UPGRADE = 1] = "UPGRADE", i[i.PURCHASE = 2] = "PURCHASE";
            let f = e => {
                let {
                    onBack: t,
                    backText: n,
                    primaryIcon: i,
                    primaryCTA: l,
                    primaryType: f,
                    primaryText: p,
                    primaryTooltip: I,
                    primaryDisabled: S,
                    primarySubmitting: h,
                    onPrimary: _,
                    secondaryText: T,
                    onSecondary: C
                } = e;
                return (0, a.jsxs)(r.ModalFooter, {
                    justify: s.default.Justify.BETWEEN,
                    align: s.default.Align.CENTER,
                    children: [(() => {
                        if (null == l || null == p) return null;
                        let e = 2 === l ? u.default : r.Button,
                            t = {
                                innerClassName: d.button,
                                type: f,
                                disabled: S,
                                submitting: h,
                                color: 0 === l ? r.Button.Colors.BRAND : r.Button.Colors.GREEN,
                                onClick: _
                            };
                        return null != I ? (0, a.jsx)(r.Tooltip, {
                            text: I,
                            children: n => (0, a.jsxs)(e, {
                                ...n,
                                ...t,
                                children: [null == i ? null : (0, a.jsx)(i, {
                                    className: d.primaryIcon
                                }), p]
                            })
                        }) : (0, a.jsxs)(e, {
                            ...t,
                            children: [null == i ? null : (0, a.jsx)(i, {
                                className: d.primaryIcon
                            }), p]
                        })
                    })(), null == T ? null : (0, a.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        onClick: C,
                        children: T
                    }), (0, a.jsx)(o.default, {}), null == t ? null : (0, a.jsx)(r.Button, {
                        className: d.back,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        onClick: t,
                        children: null != n ? n : c.default.Messages.BACK
                    })]
                })
            };
            f.CTAType = l;
            var p = f
        },
        376641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                r = n("77078"),
                s = n("600785"),
                u = n("782340"),
                o = n("980638"),
                c = n("173791");

            function d() {
                return (0, i.jsxs)("div", {
                    className: a(o.paymentModalLockIcon, c.flex, c.alignCenter),
                    children: [(0, i.jsx)(s.default, {
                        className: o.lockIcon,
                        width: 18,
                        height: 18
                    }), (0, i.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        children: u.default.Messages.BILLING_SECURE
                    })]
                })
            }
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return i
                },
                getGiftAnimationData: function() {
                    return p
                },
                sendGiftMessage: function() {
                    return I
                }
            }), n("70102");
            var i, l, a = n("627445"),
                r = n.n(a),
                s = n("450911"),
                u = n("819689"),
                o = n("884351"),
                c = n("42203"),
                d = n("659632"),
                f = n("646718");
            (l = i || (i = {})).ACTION = "action", l.LOOP = "loop", l.IDLE = "idle";
            let p = (e, t) => {
                    let i;
                    switch (e) {
                        case f.PremiumGiftStyles.SNOWGLOBE:
                            i = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.BOX:
                            i = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.CUP:
                            i = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_STANDARD_BOX:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("158302").then(n.t.bind(n, "158302", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("610146").then(n.t.bind(n, "610146", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("294569").then(n.t.bind(n, "294569", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_CAKE:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("124416").then(n.t.bind(n, "124416", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("335900").then(n.t.bind(n, "335900", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("566748").then(n.t.bind(n, "566748", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_CHEST:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("708949").then(n.t.bind(n, "708949", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("355472").then(n.t.bind(n, "355472", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("262001").then(n.t.bind(n, "262001", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_COFFEE:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("836477").then(n.t.bind(n, "836477", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("737995").then(n.t.bind(n, "737995", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("433750").then(n.t.bind(n, "433750", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            i = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return i
                },
                I = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await s.default.openPrivateChannel(e.id).then(e => {
                            let t = c.default.getChannel(e);
                            if (r(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        i = (0, d.getGiftCodeURL)(t);
                    return u.default.sendMessage(n.id, o.default.parse(n, i), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SeasonalGiftingMarketingExperiment: function() {
                    return d
                },
                useIsSeasonalGiftingActive: function() {
                    return f
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("884691"),
                l = n("866227"),
                a = n.n(l),
                r = n("862337"),
                s = n("296892");
            let u = new Date("2024-01-04T07:59:59.000Z"),
                o = a(u),
                c = (0, s.default)({
                    id: "2023-11_seasonal_gifting",
                    label: "Seasonal Gifting 2023",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                d = (0, s.default)({
                    id: "2023-11_seasonal_gifting_marketing_2023",
                    label: "Seasonal Gifting Marketing 2023",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function f() {
                let [e, t] = i.useState(() => o.isAfter(Date.now()));
                return i.useEffect(() => {
                    let n = new r.Timeout,
                        i = () => {
                            let e = Math.min(o.diff(Date.now(), "millisecond"), 864e5);
                            null == n || n.start(e, () => {
                                o.isBefore(Date.now()) ? t(!1) : i()
                            })
                        };
                    return e && i(), () => n.stop()
                }), e
            }
            var p = c
        },
        928460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, l = n("666038"),
                a = n("560350"),
                r = n("766274");
            i = class e extends l.default {
                static createFromServer(t) {
                    let n = t.staff_notes;
                    return new e({
                        id: t.id,
                        skuId: t.sku.id,
                        summary: t.summary,
                        tagline: t.tagline,
                        flavorText: t.flavor_text,
                        description: t.description,
                        childSkuIds: null != t.child_skus ? t.child_skus.map(e => e.id) : null,
                        alternativeSkuIds: null != t.alternative_skus ? t.alternative_skus.map(e => e.id) : null,
                        carouselItems: null != t.carousel_items ? t.carousel_items.map(e => ({
                            assetId: e.asset_id,
                            youtubeVideoId: e.youtube_video_id
                        })) : null,
                        assets: null != t.assets ? t.assets.map(a.transformStoreAssetFromServer) : null,
                        staffNotes: null != n ? {
                            content: n.content,
                            user: null != n.user ? new r.default(n.user) : null
                        } : null,
                        guild: null != t.guild ? {
                            id: t.guild.id,
                            name: t.guild.name,
                            icon: t.guild.icon,
                            approximateMemberCount: t.guild.approximate_member_count,
                            approximatePresenceCount: t.guild.approximate_presence_count
                        } : null,
                        thumbnail: null != t.thumbnail ? (0, a.transformStoreAssetFromServer)(t.thumbnail) : null,
                        previewVideo: null != t.preview_video ? (0, a.transformStoreAssetFromServer)(t.preview_video) : null,
                        headerBackground: null != t.header_background ? (0, a.transformStoreAssetFromServer)(t.header_background) : null,
                        headerLogoDarkTheme: null != t.header_logo_dark_theme ? (0, a.transformStoreAssetFromServer)(t.header_logo_dark_theme) : null,
                        headerLogoLightTheme: null != t.header_logo_light_theme ? (0, a.transformStoreAssetFromServer)(t.header_logo_light_theme) : null,
                        boxArt: null != t.box_art ? (0, a.transformStoreAssetFromServer)(t.box_art) : null,
                        heroBackground: null != t.hero_background ? (0, a.transformStoreAssetFromServer)(t.hero_background) : null,
                        heroVideo: null != t.hero_video ? (0, a.transformStoreAssetFromServer)(t.hero_video) : null,
                        entitlementBranchId: t.entitlement_branch_id
                    })
                }
                isSlimDirectoryVersion() {
                    return null == this.description
                }
                constructor(e) {
                    super(), this.id = e.id, this.skuId = e.skuId, this.summary = e.summary, this.tagline = e.tagline, this.flavorText = e.flavorText, this.description = e.description, this.carouselItems = e.carouselItems || [], this.childSkuIds = e.childSkuIds || [], this.alternativeSkuIds = e.alternativeSkuIds || [], this.assets = e.assets || [], this.staffNotes = e.staffNotes, this.guild = e.guild, this.thumbnail = e.thumbnail || null, this.boxArt = e.boxArt || null, this.previewVideo = e.previewVideo || null, this.headerBackground = e.headerBackground || null, this.headerLogoDarkTheme = e.headerLogoDarkTheme || null, this.headerLogoLightTheme = e.headerLogoLightTheme || null, this.heroBackground = e.heroBackground || null, this.heroVideo = e.heroVideo || null, this.entitlementBranchId = e.entitlementBranchId || null
                }
            }
        },
        698041: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007"), n("70102");
            var l = n("446674"),
                a = n("913144"),
                r = n("915639"),
                s = n("928460"),
                u = n("449008");
            let o = {},
                c = {},
                d = {},
                f = {};

            function p(e) {
                let t = e.id,
                    n = e.sku.id,
                    i = o[t],
                    l = s.default.createFromServer(e);
                !(null != i && !i.isSlimDirectoryVersion() && l.isSlimDirectoryVersion()) && (!1 === e.published ? (null == d[n] && (d[n] = new Set), d[n].add(t)) : f[n] = t, o[t] = l)
            }

            function I(e, t) {
                return "".concat(e, ":").concat(t)
            }

            function S(e) {
                let {
                    storeListings: t
                } = e;
                for (let e of t) p(e)
            }

            function h() {
                o = {}, f = {}, d = {}, c = {}
            }

            function _() {
                if (i === r.default.locale) return !1;
                h(), i = r.default.locale
            }
            class T extends l.default.Store {
                initialize() {
                    this.waitFor(r.default), this.syncWith([r.default], _), i = r.default.locale
                }
                get(e) {
                    return o[e]
                }
                getForSKU(e, t) {
                    let n = f[e];
                    return null != t ? c[I(t, e)] : null != n ? o[n] : null
                }
                getUnpublishedForSKU(e) {
                    let t = d[e];
                    return null == t ? [] : Array.from(t).map(e => o[e]).filter(u.isNotNullish)
                }
                getForChannel(e, t) {
                    return c[I(e, t)]
                }
                getStoreListing(e) {
                    let {
                        storeListingId: t,
                        skuId: n,
                        channelId: i,
                        isTestMode: l
                    } = e;
                    if (l && null != n) {
                        let e = this.getUnpublishedForSKU(n);
                        if (null != e && e.length > 0) return e[0]
                    }
                    if (null != t) return this.get(t);
                    if (null != i) {
                        if (null == n) throw Error("getStoreListing with channel expects a skuId");
                        return this.getForChannel(i, n)
                    }
                    if (null != n) return this.getForSKU(n);
                    return null
                }
            }
            T.displayName = "StoreListingStore";
            var C = new T(a.default, {
                STORE_LISTINGS_FETCH_SUCCESS: S,
                APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: S,
                STORE_LISTING_FETCH_SUCCESS: function(e) {
                    let {
                        storeListing: t,
                        channelId: n
                    } = e;
                    if (null != n) {
                        let e = s.default.createFromServer(t);
                        c[I(n, e.skuId)] = e, f[e.skuId] = e.id
                    } else p(t)
                },
                USER_SETTINGS_PROTO_UPDATE: _,
                APPLICATION_STORE_CLEAR_DATA: h,
                GIFT_CODE_RESOLVE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    if (null == t.store_listing) return !1;
                    p(t.store_listing)
                }
            })
        },
        246053: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var i, l, a = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                u = n("75196"),
                o = n("741460");
            (l = i || (i = {})).LEFT = "LEFT", l.RIGHT = "RIGHT", l.UP = "UP", l.DOWN = "DOWN", l.UP_LEFT = "UP_LEFT", l.DOWN_RIGHT = "DOWN_RIGHT";
            let c = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    direction: l,
                    foreground: r,
                    className: c,
                    title: d,
                    ...f
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, u.default)(f),
                    width: t,
                    height: n,
                    className: s(c, function(e) {
                        switch (e) {
                            case "LEFT":
                                return o.left;
                            case "RIGHT":
                                return o.right;
                            case "UP":
                                return null;
                            case "DOWN":
                                return o.down;
                            case "UP_LEFT":
                                return o.upLeft;
                            case "DOWN_RIGHT":
                                return o.downRight;
                            default:
                                throw Error("Invalid Direction ".concat(e))
                        }
                    }(l)),
                    viewBox: "0 0 24 24",
                    children: [null != d ? (0, a.jsx)("title", {
                        children: d
                    }) : null, (0, a.jsx)("polygon", {
                        className: r,
                        fill: i,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                })
            };
            c.Directions = i;
            var d = c
        },
        8161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("618991"),
                r = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M23 10V4H1V10C2.1 10 3 10.9 3 12C3 13.1 2.1 14 1 14V20H23V14C21.9 14 21 13.1 21 12C21 10.9 21.9 10 23 10ZM13 16V18H11V16H9V14H13C13.27 14 13.5 13.83 13.5 13.62C13.5 12.58 8.5 13.62 8.5 10.37C8.5 9.07 9.62 8 11 8V6H13V8H15V10H11C10.73 10 10.5 10.17 10.5 10.38C10.5 11.42 15.5 10.38 15.5 13.63C15.5 14.93 14.38 16 13 16Z"
                        })
                    })
                }, a.TicketIcon, void 0, {
                    size: 24
                })
        },
        613676: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canInstallApplication: function() {
                    return o
                },
                installApplication: function() {
                    return c
                }
            });
            var i = n("394846"),
                l = n("316693"),
                a = n("33942"),
                r = n("599110"),
                s = n("128259"),
                u = n("49111");

            function o(e, t, n) {
                return null != t || null != n
            }

            function c(e) {
                let {
                    applicationId: t,
                    customInstallUrl: n,
                    installParams: o,
                    guildId: c,
                    channelId: d,
                    disableGuildSelect: f,
                    source: p
                } = e;
                if (null != n) return r.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: t,
                    guild_id: c,
                    auth_type: "custom_url",
                    source: p,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, s.handleClick)({
                    href: n
                });
                null != o && (r.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: t,
                    guild_id: c,
                    auth_type: "in_app",
                    source: p,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, a.openOAuth2Modal)({
                    guildId: c,
                    clientId: t,
                    scopes: o.scopes,
                    channelId: d,
                    disableGuildSelect: f,
                    permissions: null != o.permissions ? l.default.deserialize(o.permissions) : void 0
                }))
            }
        },
        300036: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TicketIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("82169");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M2.1 12a3 3 0 0 0 0 4.24l.46.46c.17.17.43.2.65.1a3 3 0 0 1 4 4c-.1.2-.08.47.08.64l.47.46a3 3 0 0 0 4.24 0l6.77-6.77a1 1 0 0 1 1.36-1.36L21.9 12a3 3 0 0 0 0-4.24l-.46-.47a.56.56 0 0 0-.65-.08 3 3 0 0 1-4-4 .56.56 0 0 0-.09-.65l-.46-.46a3 3 0 0 0-4.24 0l-1.77 1.77a1 1 0 0 1-1.36 1.36L2.1 12Zm10.01-6.3A1 1 0 1 0 10.7 7.1l.69.7a1 1 0 1 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 1 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 0 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=67690.949a40c153655ea7be23.js.map