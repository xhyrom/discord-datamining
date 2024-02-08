(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84664"], {
        32974: function(t, e, n) {
            "use strict";
            t.exports = n.p + "72b9b5356f57edb2ba51.svg"
        },
        137852: function(t, e, n) {
            "use strict";
            t.exports = n.p + "a6ac55e775bc50ff5bff.svg"
        },
        511117: function(t, e, n) {
            "use strict";
            t.exports = n.p + "52e736e812c20d1dfda1.svg"
        },
        55620: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
                    return T
                },
                joinPublishedStoreListingSkuGuild: function() {
                    return h
                },
                goToSKUStoreListing: function() {
                    return _
                },
                goToApplicationStoreListing: function() {
                    return E
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("84460");
            n("299285");
            var r = n("393414"),
                u = n("552712");
            n("698041");
            var s = n("167726"),
                o = n("271560"),
                c = n("49111");

            function d(t) {
                return (0, o.httpGetWithCountryCodeQuery)({
                    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
                    query: {
                        application_id: t
                    },
                    oldFormErrors: !0
                }).then(t => (l.default.dispatch({
                    type: "STORE_LISTINGS_FETCH_SUCCESS",
                    storeListings: t.body
                }), t.body))
            }

            function f(t) {
                let e = u.default.get(t),
                    n = null != e && (s.default.inTestModeForApplication(e.applicationId) || a.default.inDevModeForApplication(e.applicationId));
                return (0, o.httpGetWithCountryCodeQuery)(n ? c.Endpoints.STORE_LISTINGS_SKU(t) : c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(t)).then(t => {
                    n ? l.default.dispatch({
                        type: "STORE_LISTINGS_FETCH_SUCCESS",
                        storeListings: t.body
                    }) : l.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: t.body
                    })
                })
            }

            function p(t) {
                return (0, o.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(t)).then(t => {
                    l.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: t.body
                    })
                })
            }

            function I(t) {
                return (0, o.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(t)).then(t => {
                    l.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: t.body
                    })
                })
            }

            function S() {
                l.default.dispatch({
                    type: "APPLICATION_STORE_MATURE_AGREE"
                })
            }

            function T() {
                (0, r.transitionTo)(c.Routes.APPLICATION_STORE)
            }

            function h(t) {
                return i.default.post({
                    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(t),
                    oldFormErrors: !0
                })
            }

            function _(t, e) {
                let {
                    pathname: n,
                    ...i
                } = (0, o.getStoreListingLocation)(t, e);
                (0, r.transitionTo)(n, i)
            }

            function E(t, e) {
                let {
                    pathname: n,
                    ...i
                } = (0, o.getApplicationStoreListingLocation)(t, e);
                (0, r.transitionTo)(n, i)
            }
        },
        737960: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("308723");

            function r(t) {
                return l.forwardRef(function(e, n) {
                    let r = l.useRef();
                    return l.useImperativeHandle(n, () => ({
                        triggerResize: () => {
                            var t;
                            null === (t = r.current) || void 0 === t || t.onResize()
                        }
                    })), (0, i.jsx)(a.default, {
                        ref: r,
                        children: n => {
                            let {
                                width: l,
                                height: a
                            } = n;
                            return (0, i.jsx)(t, {
                                ...e,
                                width: l,
                                height: a
                            })
                        }
                    })
                })
            }
        },
        618991: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("300036");
            n.es(i, e)
        },
        834897: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("884691");

            function l(t) {
                let [e, n] = (0, i.useState)(() => window.matchMedia(t).matches);
                return (0, i.useEffect)(() => {
                    let e = window.matchMedia(t),
                        i = t => {
                            n(null == t ? void 0 : t.matches)
                        };
                    return i(e), e.addListener(i), () => e.removeListener(i)
                }, [t]), e
            }
        },
        612039: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("884691"),
                l = n("775560"),
                a = n("862337");

            function r(t, e) {
                let [n, r] = (0, i.useState)(t), u = (0, l.useLazyValue)(() => new a.Timeout);
                (0, i.useEffect)(() => () => u.stop(), [u]);
                let s = (0, i.useCallback)(n => {
                    r(n), n !== t && u.start(e, () => r(t))
                }, [e, t, u]);
                return [n, s]
            }
        },
        302437: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("974667"),
                l = n("446674"),
                a = n("206230");

            function r() {
                return Promise.resolve()
            }

            function u(t) {
                let e = document.querySelector(t);
                null != e && e.focus()
            }

            function s(t, e) {
                let n = (0, l.useStateFromStores)([a.default], () => a.default.keyboardModeEnabled);
                return (0, i.default)({
                    id: t,
                    isEnabled: n,
                    orientation: e,
                    setFocus: u,
                    scrollToStart: r,
                    scrollToEnd: r
                })
            }
        },
        721698: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getEmbedApplication: function() {
                    return S
                },
                getApplication: function() {
                    return T
                },
                getCategories: function() {
                    return h
                },
                getSimilarApplications: function() {
                    return _
                },
                search: function() {
                    return E
                },
                getCollections: function() {
                    return C
                },
                fetchIntegrationApplicationIdsForMyGuilds: function() {
                    return A
                }
            }), n("222007");
            var i = n("981980"),
                l = n("872717"),
                a = n("913144"),
                r = n("915639"),
                u = n("349503"),
                s = n("831109"),
                o = n("810047"),
                c = n("856894"),
                d = n("388647"),
                f = n("506061"),
                p = n("49111");
            let I = new Map;
            async function S(t) {
                var e;
                let n = Date.now(),
                    r = null !== (e = I.get(t)) && void 0 !== e ? e : 0;
                if (u.default.getApplicationFetchState(t) === u.FetchState.FETCHING || u.default.isInvalidApplication(t) || n < r + 6e5) return;
                I.set(t, n), a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                    applicationId: t
                });
                let s = new i.default(1e3, 5e3),
                    o = (t, e) => 429 === t.status && !!(s.fails < 10) && (s.fail(() => {
                        e(void 0, o)
                    }), !0);
                try {
                    let e = await l.default.get({
                            url: p.Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(t),
                            backoff: s,
                            retries: 10,
                            interceptResponse: o
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
            async function T(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = Date.now(),
                    i = u.default.getApplicationFetchState(t),
                    s = u.default.getApplicationLastFetchTime(t),
                    {
                        dontRefetchMs: o
                    } = e;
                if (i !== u.FetchState.FETCHING) {
                    if (!(null != s && s + (null != o ? o : 6e5) > n)) {
                        a.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                            applicationId: t
                        });
                        try {
                            let e = await l.default.get({
                                url: p.Endpoints.APPLICATION_DIRECTORY_APPLICATION(t),
                                query: {
                                    locale: r.default.locale
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
            async function h() {
                let t = Date.now(),
                    e = s.default.getLastFetchTimeMs();
                if (null != e && e + 6e5 > t) return;
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
            async function _(t) {
                var e;
                let {
                    applicationId: n,
                    guildId: i,
                    options: u
                } = t, {
                    page: s
                } = null != u ? u : {}, o = Date.now(), c = d.default.getFetchState({
                    applicationId: n,
                    guildId: i
                }), {
                    lastFetchTimeMs: f
                } = null !== (e = d.default.getSimilarApplications({
                    applicationId: n,
                    guildId: i
                })) && void 0 !== e ? e : {};
                if (c !== d.FetchState.FETCHING) {
                    if (null == f || !(f + 6e5 > o)) {
                        a.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
                            applicationId: n,
                            guildId: i,
                            page: s
                        });
                        try {
                            let t = await l.default.get({
                                url: p.Endpoints.APPLICATION_DIRECTORY_SIMILAR(n),
                                query: {
                                    guild_id: i,
                                    page: s,
                                    locale: r.default.locale
                                }
                            });
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                                applicationId: n,
                                guildId: i,
                                similarApplications: t.body.applications,
                                loadId: t.body.load_id,
                                page: s,
                                totalPages: t.body.num_pages
                            })
                        } catch (t) {
                            a.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                                applicationId: n,
                                guildId: i,
                                page: s
                            })
                        }
                    }
                }
            }
            async function E(t) {
                var e;
                let {
                    query: n,
                    guildId: i,
                    options: u,
                    onSuccessCallback: s
                } = t, {
                    page: o,
                    categoryId: d
                } = null != u ? u : {}, f = Date.now(), I = c.default.getFetchState({
                    query: n,
                    guildId: i,
                    page: o,
                    categoryId: d
                }), {
                    lastFetchTimeMs: S
                } = null !== (e = c.default.getSearchResults({
                    query: n,
                    guildId: i,
                    page: o,
                    categoryId: d
                })) && void 0 !== e ? e : {};
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
                            let t = await l.default.get({
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
                                    results: t.body.results,
                                    countsByCategory: t.body.counts_by_category,
                                    totalCount: t.body.result_count,
                                    totalPages: t.body.num_pages,
                                    type: t.body.type,
                                    loadId: t.body.load_id
                                }
                            }), null == s || s(t.body.result_count)
                        } catch (t) {
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
            async function C() {
                let {
                    includesInactive: t = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = Date.now(), n = o.default.getFetchState({
                    includesInactive: t
                }), i = o.default.getLastFetchTimeMs({
                    includesInactive: t
                });
                if (n !== o.FetchState.FETCHING) {
                    if (null == i || !(i + 6e5 > e)) {
                        a.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
                            includesInactive: t
                        });
                        try {
                            let e = await l.default.get({
                                url: p.Endpoints.APPLICATION_DIRECTORY_COLLECTIONS,
                                query: {
                                    includes_inactive: t,
                                    locale: r.default.locale
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
            async function A() {
                let t = Date.now(),
                    e = f.default.getFetchState(),
                    n = f.default.getLastFetchTimeMs(),
                    i = f.default.getNextFetchRetryTimeMs();
                if (e !== f.FetchState.FETCHING && (null == n || !(n + 864e5 > t))) {
                    if (null == i || !(t < i)) {
                        a.default.dispatch({
                            type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
                        });
                        try {
                            let t = await l.default.get({
                                url: p.Endpoints.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
                            });
                            a.default.dispatch({
                                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                                guildIdToApplicationIds: t.body
                            })
                        } catch (e) {
                            var r;
                            let t = (null == e ? void 0 : e.status) === 429;
                            a.default.dispatch({
                                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                                retryAfterSeconds: t ? null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.retry_after : void 0
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
                    return s
                }
            });
            var i = n("446674"),
                l = n("913144");
            let a = [],
                r = null;
            class u extends i.default.Store {
                getLastFetchTimeMs() {
                    return r
                }
                getCategories() {
                    return a
                }
            }
            u.displayName = "ApplicationDirectoryCategoriesStore";
            var s = new u(l.default, {
                APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(t) {
                    let {
                        categories: e
                    } = t;
                    a = e, r = Date.now()
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
                    return I
                }
            });
            var i, l, a = n("917351"),
                r = n.n(a),
                u = n("446674"),
                s = n("913144");
            (i = l || (l = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
            let o = {},
                c = {},
                d = {};

            function f(t) {
                let {
                    includesInactive: e
                } = t;
                return "includes_inactive:".concat(e)
            }
            class p extends u.default.Store {
                getLastFetchTimeMs(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return d[f({
                        includesInactive: e
                    })]
                }
                getFetchState(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return c[f({
                        includesInactive: e
                    })]
                }
                getCollections(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return o[f({
                        includesInactive: e
                    })]
                }
            }
            var I = new p(s.default, {
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function(t) {
                    let {
                        includesInactive: e
                    } = t;
                    c = {
                        ...c,
                        [f({
                            includesInactive: e
                        })]: 0
                    }
                },
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function(t) {
                    var e;
                    let {
                        collections: n,
                        includesInactive: i
                    } = t, l = f({
                        includesInactive: i
                    });
                    let a = (e = n.map(t => {
                        var e;
                        return t.application_directory_collection_items = (e = t.application_directory_collection_items, r.sortBy(e, ["position", "id"])), t
                    }), r.sortBy(e, ["position", "id"]));
                    o = {
                        ...o,
                        [l]: a
                    }, c = {
                        ...c,
                        [l]: 1
                    };
                    let u = Date.now();
                    d = {
                        ...d,
                        [l]: u
                    }
                },
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function(t) {
                    let {
                        includesInactive: e
                    } = t;
                    c = {
                        ...c,
                        [f({
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
                    return p
                }
            });
            var i, l, a = n("693566"),
                r = n.n(a),
                u = n("446674"),
                s = n("913144");

            function o(t) {
                let {
                    query: e,
                    guildId: n,
                    page: i,
                    categoryId: l
                } = t;
                return "query:'".concat(e, "' guildId:").concat(n, " page:").concat(i, " categoryId:").concat(l)
            }(i = l || (l = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
            let c = new r({
                    max: 20
                }),
                d = {};
            class f extends u.default.Store {
                getSearchResults(t) {
                    let {
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = t, a = o({
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    return c.get(a)
                }
                getFetchState(t) {
                    let {
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = t, a = o({
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    return d[a]
                }
            }
            f.displayName = "ApplicationDirectorySearchStore";
            var p = new f(s.default, {
                APPLICATION_DIRECTORY_FETCH_SEARCH: function(t) {
                    let {
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = t, a = o({
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    });
                    d = {
                        ...d,
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
                    } = t, r = o({
                        query: e,
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
                APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(t) {
                    let {
                        query: e,
                        guildId: n,
                        page: i,
                        categoryId: l
                    } = t, a = o({
                        query: e,
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
        388647: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FetchState: function() {
                    return l
                },
                default: function() {
                    return p
                }
            });
            var i, l, a = n("693566"),
                r = n.n(a),
                u = n("446674"),
                s = n("913144");

            function o(t) {
                let {
                    applicationId: e,
                    guildId: n,
                    page: i
                } = t;
                return "applicationId:".concat(e, " guildId:").concat(n, " page:").concat(i)
            }(i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
            let c = new r({
                    max: 20
                }),
                d = {};
            class f extends u.default.Store {
                getSimilarApplications(t) {
                    let {
                        applicationId: e,
                        guildId: n,
                        page: i
                    } = t;
                    if (null == e) return;
                    let l = o({
                        applicationId: e,
                        guildId: n,
                        page: i
                    });
                    return c.get(l)
                }
                getFetchState(t) {
                    let {
                        applicationId: e,
                        guildId: n,
                        page: i
                    } = t;
                    if (null == e) return;
                    let l = o({
                        applicationId: e,
                        guildId: n,
                        page: i
                    });
                    return d[l]
                }
            }
            f.displayName = "ApplicationDirectorySimilarApplicationsStore";
            var p = new f(s.default, {
                APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(t) {
                    let {
                        applicationId: e,
                        guildId: n,
                        page: i
                    } = t, l = o({
                        applicationId: e,
                        guildId: n,
                        page: i
                    });
                    d = {
                        ...d,
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
                        totalPages: r
                    } = t, u = o({
                        applicationId: e,
                        guildId: n,
                        page: a
                    });
                    c.set(u, {
                        lastFetchTimeMs: Date.now(),
                        applications: i,
                        loadId: l,
                        page: a,
                        totalPages: r
                    }), d = {
                        ...d,
                        [u]: 2
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function(t) {
                    let {
                        applicationId: e,
                        guildId: n,
                        page: i
                    } = t, l = o({
                        applicationId: e,
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
                r = n("913144"),
                u = n("718517");
            (l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.ERROR = 3] = "ERROR";
            let s = {
                applicationIdToGuildIds: {},
                lastFetchTimeMs: null,
                nextFetchRetryTimeMs: null,
                fetchState: 0
            };

            function o(t) {
                let {
                    applicationId: e,
                    guildId: n
                } = t;
                null == s.applicationIdToGuildIds[e] && (s.applicationIdToGuildIds[e] = new Set), s.applicationIdToGuildIds[e].add(n), s.applicationIdToGuildIds[e] = new Set(s.applicationIdToGuildIds[e])
            }
            class c extends a.default.PersistedStore {
                initialize(t) {
                    if (null != t)
                        for (let e in s.lastFetchTimeMs = t.lastFetchTimeMs, s.nextFetchRetryTimeMs = t.nextFetchRetryTimeMs, s.fetchState = t.fetchState, t.applicationIdToGuildIds) s.applicationIdToGuildIds[e] = new Set(t.applicationIdToGuildIds[e])
                }
                getState() {
                    return s
                }
                getGuildIdsForApplication(t) {
                    if (null != t) return s.applicationIdToGuildIds[t]
                }
                getLastFetchTimeMs() {
                    return s.lastFetchTimeMs
                }
                getNextFetchRetryTimeMs() {
                    return s.nextFetchRetryTimeMs
                }
                getFetchState() {
                    return s.fetchState
                }
            }
            c.displayName = "MyGuildApplicationsStore", c.persistKey = "MyGuildApplicationsStore";
            var d = new c(r.default, {
                LOGOUT: function() {
                    s.applicationIdToGuildIds = {}, s.lastFetchTimeMs = null, s.nextFetchRetryTimeMs = null, s.fetchState = 0
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
                    s.fetchState = 1
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(t) {
                    let {
                        guildIdToApplicationIds: e
                    } = t;
                    for (let t in s.fetchState = 2, s.lastFetchTimeMs = Date.now(), s.applicationIdToGuildIds = {}, s.nextFetchRetryTimeMs = null, e)
                        for (let n of e[t]) o({
                            applicationId: n,
                            guildId: t
                        })
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(t) {
                    let {
                        retryAfterSeconds: e
                    } = t;
                    if (s.fetchState = 3, null != e) {
                        let t = e * u.default.Millis.SECOND;
                        s.nextFetchRetryTimeMs = Date.now() + t
                    }
                },
                INTEGRATION_CREATE: function(t) {
                    let {
                        application: e,
                        guildId: n
                    } = t;
                    null != e && o({
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
                        null != s.applicationIdToGuildIds[e] && (s.applicationIdToGuildIds[e].delete(n), s.applicationIdToGuildIds[e] = new Set(s.applicationIdToGuildIds[e]))
                    }({
                        applicationId: e,
                        guildId: n
                    })
                }
            })
        },
        425480: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
        692105: function(t, e, n) {
            "use strict";
            var i, l;
            n.r(e), n.d(e, {
                IconType: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.STORE_ASSET = 1] = "STORE_ASSET", l[l.EMOJI = 2] = "EMOJI"
        },
        829805: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
                u = n("850644"),
                s = n("899604"),
                o = n("114067");
            let c = t => {
                    let {
                        application: e,
                        asset: n,
                        className: l,
                        ...a
                    } = t;
                    return (0, i.jsx)(u.default, {
                        application: e,
                        size: u.ApplicationIconSize.MEDIUM,
                        asset: n,
                        className: l,
                        ...a
                    })
                },
                d = t => {
                    let {
                        children: e,
                        className: n,
                        id: l,
                        ...u
                    } = t;
                    return (0, i.jsx)(r.Heading, {
                        className: a(o.header, n),
                        variant: "heading-xl/extrabold",
                        id: l,
                        ...u,
                        children: e
                    })
                };

            function f() {
                return (0, i.jsx)("hr", {
                    className: o.divider
                })
            }
            let p = t => {
                    let {
                        className: e,
                        title: n,
                        description: l,
                        ...a
                    } = t;
                    return (0, i.jsxs)("div", {
                        className: e,
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
                I = t => {
                    let {
                        applicationId: e,
                        storeListingBenefits: n,
                        skuBenefits: l,
                        className: r,
                        ...u
                    } = t;
                    return (0, i.jsx)("div", {
                        className: a(o.benefitsContainer, r),
                        ...u,
                        children: (0, i.jsx)(s.SubscriptionListingBenefits, {
                            applicationId: e,
                            storeListingBenefits: n,
                            skuBenefits: l,
                            className: o.benefit
                        })
                    })
                },
                S = t => {
                    let {
                        children: e,
                        className: n,
                        ...l
                    } = t;
                    return (0, i.jsx)("div", {
                        className: a(o.container, n),
                        ...l,
                        children: e
                    })
                }
        },
        850644: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
                u = n.n(r),
                s = n("315102"),
                o = n("271560"),
                c = n("969850");
            (i = l || (l = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
            let d = {
                40: c.small,
                66: c.medium
            };
            var f = t => {
                let e, {
                    application: n,
                    size: i,
                    asset: l,
                    className: r
                } = t;
                return e = null != l ? (0, o.getAssetURL)(n.id, l, i) : s.default.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: i
                }), (0, a.jsx)("img", {
                    alt: "",
                    src: e,
                    className: u(c.icon, d[i], r)
                })
            }
        },
        910861: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                r = n("77078"),
                u = n("396671");

            function s(t) {
                let {
                    children: e,
                    className: n,
                    size: l = r.Button.Sizes.SMALL,
                    ...s
                } = t;
                return (0, i.jsx)(r.Button, {
                    ...s,
                    size: l,
                    className: a(u.button, n),
                    children: e
                })
            }
        },
        333955: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PurchaseHeader: function() {
                    return T
                },
                BenefitsConfirmation: function() {
                    return h
                },
                PurchaseConfirmation: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("834897"),
                r = n("85336"),
                u = n("159149"),
                s = n("650484"),
                o = n("945330"),
                c = n("829805"),
                d = n("425480"),
                f = n("782340"),
                p = n("370184"),
                I = n("137852"),
                S = n("511117");
            let T = t => {
                    let {
                        step: e,
                        onClose: n
                    } = t, u = (0, a.default)(d.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                    return e === r.Step.CONFIRM || e === r.Step.BENEFITS ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                        className: p.headerContainer,
                        children: [!u && (0, i.jsx)("div", {
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
                h = t => {
                    let {
                        icon: e,
                        storeListingBenefits: n,
                        skuBenefits: l,
                        application: a,
                        title: r,
                        subtitle: u,
                        description: s
                    } = t;
                    return null == a ? null : (0, i.jsx)("div", {
                        className: p.confirmationContainer,
                        children: (0, i.jsxs)(c.ApplicationBenefitsModalContent, {
                            children: [(0, i.jsx)(c.ApplicationBenefitsModalIcon, {
                                application: a,
                                asset: e
                            }), (0, i.jsx)(c.ApplicationBenefitsModalHeading, {
                                children: r
                            }), (0, i.jsx)(c.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(c.ApplicationBenefitsModalDescription, {
                                title: u,
                                description: s
                            }), (0, i.jsx)(c.ApplicationBenefitsModalBenefits, {
                                applicationId: a.id,
                                storeListingBenefits: n,
                                skuBenefits: l
                            })]
                        })
                    })
                };

            function _(t) {
                let {
                    tierName: e,
                    onConfirm: n,
                    subscription: a
                } = t;
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
                            tier: e
                        })
                    }), (0, i.jsx)(l.Text, {
                        className: p.confirmationSubtitle,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == a ? void 0 : a.currentPeriodEnd
                        })
                    }), (0, i.jsx)(s.PaymentPortalFooter, {
                        children: (0, i.jsx)(u.default, {
                            onPrimary: n,
                            primaryCTA: u.CTAType.CONTINUE,
                            primaryText: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                        })
                    })]
                })
            }
        },
        899604: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
                u = n("430568"),
                s = n("271560"),
                o = n("692105"),
                c = n("888266");

            function d(t) {
                let e, {
                    applicationId: n,
                    storeListingBenefits: l,
                    skuBenefits: r,
                    className: u
                } = t;
                return null != l ? e = l.map(t => (0, i.jsx)(p, {
                    applicationId: n,
                    benefit: t,
                    className: a(c.benefit, u)
                }, t.id)) : null != r && (e = r.map((t, e) => (0, i.jsx)(f, {
                    benefit: t,
                    className: a(c.benefit, u)
                }, e))), (0, i.jsx)(i.Fragment, {
                    children: e
                })
            }

            function f(t) {
                let {
                    benefit: e,
                    className: n,
                    emojiContainerClassName: l,
                    showsDescription: s = !0,
                    nameTextVariant: o = "text-md/medium",
                    nameTextColor: d = "header-primary"
                } = t;
                return (0, i.jsxs)("div", {
                    className: a(c.container, n),
                    children: [null != e.emoji && (0, i.jsx)("div", {
                        className: a(c.emojiContainer, l),
                        children: (0, i.jsx)(u.default, {
                            emojiId: e.emoji.id,
                            emojiName: e.emoji.name,
                            animated: e.emoji.animated
                        })
                    }), (0, i.jsxs)("div", {
                        className: c.infoContainer,
                        children: [(0, i.jsx)(r.Text, {
                            variant: o,
                            color: d,
                            className: c.name,
                            children: e.name
                        }), s && (0, i.jsx)(r.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: e.description
                        })]
                    })]
                })
            }

            function p(t) {
                let e, {
                    applicationId: n,
                    benefit: l,
                    className: d,
                    emojiContainerClassName: f,
                    showsDescription: p = !0,
                    nameTextVariant: I = "text-md/medium",
                    nameTextColor: S = "header-primary"
                } = t;
                if (null != l.icon) switch (l.icon.type) {
                    case o.IconType.STORE_ASSET:
                        let T = (0, s.getAssetURL)(n, l.icon.store_asset_id);
                        e = (0, i.jsx)("img", {
                            src: T,
                            alt: "",
                            className: "emoji"
                        });
                        break;
                    case o.IconType.EMOJI:
                        e = (0, i.jsx)(u.default, {
                            emojiName: l.icon.emoji
                        })
                }
                return (0, i.jsxs)("div", {
                    className: a(c.container, d),
                    children: [(0, i.jsx)("div", {
                        className: a(c.emojiContainer, f),
                        children: e
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
        599733: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                confirmNoSharedServerSubscribeWarningModal: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078");

            function a(t) {
                let {
                    application: e,
                    onConfirm: a,
                    onCancel: r
                } = t;
                return (0, l.openModalLazy)(async () => {
                    let {
                        ConfirmNoSharedServerSubscribeWarningModal: t
                    } = await n.el("411638").then(n.bind(n, "411638"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        application: e,
                        onConfirm: a,
                        onCancel: r
                    })
                }, {
                    modalKey: "application-user-subscribe-no-shared-server-warning"
                }), Promise.resolve()
            }
        },
        153335: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return A
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("627445"),
                r = n.n(a),
                u = n("446674"),
                s = n("913144"),
                o = n("775433"),
                c = n("685665"),
                d = n("598981"),
                f = n("846286"),
                p = n("697218"),
                I = n("10514"),
                S = n("650509"),
                T = n("90592"),
                h = n("333955"),
                _ = n("599733"),
                E = n("49111"),
                C = n("782340"),
                A = t => {
                    var e;
                    let n, {
                            listing: a,
                            guildId: A,
                            groupListingId: m,
                            analyticsLocation: N,
                            showBenefitsFirst: g,
                            onComplete: L,
                            forcesTransitionToGuild: O
                        } = t,
                        R = null == a ? void 0 : a.subscription_plans[0],
                        F = null == a ? void 0 : a.application_id,
                        P = null == R ? void 0 : R.id,
                        v = (null == a ? void 0 : a.published) === !0,
                        b = null == R ? void 0 : R.sku_id,
                        y = (0, u.useStateFromStores)([I.default], () => null != P ? I.default.get(P) : null),
                        D = (0, S.useApplication)(F),
                        H = (0, S.useSubscriptionListingsForGroup)(m, {
                            includeSoftDeleted: !0
                        }),
                        G = H.map(t => t.subscription_plans[0].id),
                        {
                            analyticsLocations: x
                        } = (0, c.default)(),
                        {
                            activeSubscription: M,
                            activeEntitlement: w
                        } = (0, S.useActiveSubscriptionListingForApplication)(F, A),
                        U = (0, S.useEligibleApplicationSubscriptionGuilds)(F, A),
                        k = (0, d.default)(),
                        j = null != a && (0, T.isApplicationUserSubscription)(a.sku_flags),
                        B = null != w && w.userId === (null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id),
                        Y = null == w || B,
                        V = null == w || G.length > 1,
                        K = null != A || U.length > 0,
                        z = j && B,
                        W = null != y && null != D && Y && V && (K || j) && !z;
                    Y ? K ? z && null != y && (n = C.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
                        tierName: y.name
                    })) : n = C.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = C.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, l.useEffect(() => {
                        v && null != b && k && s.default.wait(() => {
                            (0, o.fetchSubscriptionPlansForSKU)(b)
                        })
                    }, [v, b, k]);
                    let Z = l.useCallback(() => {
                        r(null != a, "No subscription listing"), r(null != D, "No application"), r(null != R, "No subscription plan"), r(v, "Cannot purchase this unpublished plan");
                        let t = () => {
                            (0, f.openApplicationSubscriptionPaymentModal)({
                                activeSubscription: M,
                                analyticsSubscriptionType: E.SubscriptionTypes.APPLICATION,
                                analyticsLocations: x,
                                analyticsLocation: N,
                                renderHeader: (t, e, n) => (0, i.jsx)(h.PurchaseHeader, {
                                    step: n,
                                    onClose: () => e(!1)
                                }),
                                initialPlanId: R.id,
                                skuId: R.sku_id,
                                guildId: A,
                                eligibleApplicationSubscriptionGuilds: U,
                                planGroup: G,
                                listing: a,
                                application: D,
                                showBenefitsFirst: g,
                                onComplete: L,
                                forcesTransitionToGuild: O
                            })
                        };
                        !K && j ? (0, _.confirmNoSharedServerSubscribeWarningModal)({
                            application: D,
                            onConfirm: t,
                            onCancel: () => {}
                        }) : t()
                    }, [v, a, R, G, D, A, K, j, x, N, M, g, U, L, O]);
                    return {
                        openModal: Z,
                        canOpenModal: W,
                        cannotOpenReason: n
                    }
                }
        },
        337026: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        201155: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useShowApplicationInGDM: function() {
                    return r
                }
            });
            var i = n("65597"),
                l = n("42203"),
                a = n("337026");

            function r(t) {
                let e = (0, i.default)([l.default], () => l.default.getChannel(t)),
                    {
                        enabled: n
                    } = a.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(t) {
                    return null != t && (!!t.isMultiUserDM() || !!t.isDM() && !t.isSystemDM() && null == t.rawRecipients.find(t => t.bot))
                }(e)
            }
        },
        560350: function(t, e, n) {
            "use strict";

            function i(t) {
                return {
                    id: t.id,
                    filename: t.filename,
                    size: t.size,
                    width: t.width,
                    height: t.height,
                    mimeType: t.mime_type
                }
            }
            n.r(e), n.d(e, {
                transformStoreAssetFromServer: function() {
                    return i
                }
            })
        },
        635357: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                GiftContextProvider: function() {
                    return h
                },
                useGiftContext: function() {
                    return S
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                a = n("210721"),
                r = n("53253"),
                u = n("105097"),
                s = n("659632"),
                o = n("642906"),
                c = n("646718"),
                d = n("782340");
            let f = c.PremiumGiftStyles.STANDARD_BOX,
                p = void 0,
                [I, S, T] = (0, u.default)();

            function h(t) {
                let {
                    isGift: e = !1,
                    giftRecipient: n,
                    giftMessage: u,
                    children: S
                } = t, {
                    selectedSkuId: T
                } = (0, o.usePaymentContext)(), [h, _] = l.useState(n), [E, C] = l.useState(), [A, m] = l.useState(!1), N = (0, s.shouldShowCustomGiftExperience)(h), g = (0, r.useIsSeasonalGiftingActive)(), {
                    enabled: L
                } = r.default.useExperiment({
                    location: "PaymentContextProvider"
                }, {
                    autoTrackExposure: N && g
                }), [O, R] = l.useState(N ? L && g ? c.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [F, P] = l.useState(e && s.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has((0, s.getGiftExperience)(h)) ? d.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : u), [v, b] = l.useState(void 0), [y, D] = l.useState(void 0), H = (0, s.useGetGiftCode)(T, e), [G, x] = l.useState(!1), [M, w] = l.useState(!1), [U, k] = l.useState(), j = l.useCallback(t => {
                    let {
                        onSubscriptionConfirmation: e
                    } = t;
                    return w(!0), (0, a.sendGiftMessage)(h, H).then(() => {
                        w(!1), null == e || e(), x(!0)
                    }).catch(t => {
                        w(!1), k(t), x(!0)
                    })
                }, [h, H, w, x, k]);
                return (0, i.jsx)(I.Provider, {
                    value: {
                        isGift: e,
                        giftCode: H,
                        giftMessage: u,
                        giftRecipient: h,
                        setGiftRecipient: _,
                        giftRecipientError: E,
                        setGiftRecipientError: C,
                        validatingGiftRecipient: A,
                        setValidatingGiftRecipient: m,
                        soundEffect: v,
                        setSoundEffect: b,
                        emojiConfetti: y,
                        setEmojiConfetti: D,
                        customGiftMessage: F,
                        setCustomGiftMessage: P,
                        selectedGiftStyle: O,
                        setSelectedGiftStyle: R,
                        sendGiftMessage: j,
                        hasSentMessage: G,
                        isSendingMessage: M,
                        giftMessageError: U
                    },
                    children: S
                })
            }
        },
        846286: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                openApplicationSubscriptionPaymentModal: function() {
                    return T
                },
                openActivityApplicationPaymentModal: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("627445"),
                a = n.n(l),
                r = n("77078"),
                u = n("316718"),
                s = n("55620"),
                o = n("524503"),
                c = n("186211"),
                d = n("90592"),
                f = n("651057"),
                p = n("299285"),
                I = n("635357"),
                S = n("49111");

            function T(t) {
                let {
                    initialPlanId: e,
                    activeSubscription: l,
                    analyticsObject: a,
                    analyticsLocation: u,
                    analyticsLocations: s,
                    analyticsSubscriptionType: o,
                    renderHeader: c,
                    planGroup: d,
                    skuId: f,
                    guildId: p,
                    reviewWarningMessage: T,
                    listing: h,
                    application: _,
                    showBenefitsFirst: E,
                    eligibleApplicationSubscriptionGuilds: C,
                    onComplete: A,
                    forcesTransitionToGuild: m
                } = t;
                (0, r.openModalLazy)(async () => {
                    let {
                        PaymentContextProvider: t
                    } = await n.el("642906").then(n.bind(n, "642906")), r = (await n.el("452113").then(n.bind(n, "452113"))).default, {
                        getApplicationSubscriptionPaymentSteps: S
                    } = await n.el("590749").then(n.bind(n, "590749")), N = S({
                        guildId: p,
                        application: _,
                        listing: h,
                        showBenefitsFirst: E,
                        eligibleApplicationSubscriptionGuilds: C
                    });
                    return n => (0, i.jsx)(t, {
                        applicationId: _.id,
                        activeSubscription: l,
                        stepConfigs: N,
                        skuIDs: [f],
                        children: (0, i.jsx)(I.GiftContextProvider, {
                            children: (0, i.jsx)(r, {
                                ...n,
                                initialPlanId: e,
                                skuId: f,
                                analyticsLocations: s,
                                analyticsObject: a,
                                analyticsLocation: u,
                                analyticsSubscriptionType: o,
                                renderHeader: c,
                                planGroup: d,
                                reviewWarningMessage: T,
                                applicationId: _.id,
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
            let h = async t => {
                let e = p.default.getApplication(t);
                if (null != e) return e;
                await f.default.fetchApplications([t], !1);
                let n = p.default.getApplication(t);
                return a(null != n, "Failed to find application with ID %s", t), n
            }, _ = async t => {
                let e = c.default.getSubscriptionGroupListingForApplication(t);
                if (null != e) return e;
                let n = await (0, s.fetchAllStoreListingsForApplication)(t),
                    i = n.find(t => t.sku.type === S.SKUTypes.SUBSCRIPTION_GROUP);
                a(null != i, "Failed to find subscription store listing"), await (0, o.fetchAllSubscriptionListingsDataForApplication)(t, null == i ? void 0 : i.id);
                let l = c.default.getSubscriptionGroupListingForApplication(t);
                return a(null != l, "Failed to find subscription group listing"), l
            }, E = async (t, e) => {
                let n = await (0, u.fetchUserEntitlementsForApplication)(t),
                    i = n.filter(t => null == t.ends_at || new Date(t.ends_at) > new Date).find(t => t.sku_id === e);
                a(null == i, "User already has an active subscription to this SKU")
            };
            async function C(t) {
                let {
                    applicationId: e,
                    skuId: n,
                    initialPlanId: i,
                    analyticsLocationObject: l,
                    analyticsLocations: r,
                    renderHeader: u
                } = t, s = await h(e), o = await _(e), c = (0, d.getPayableSubscriptionListing)(o);
                a(null != c, "Failed to find subscription listing");
                let f = (0, d.isApplicationUserSubscription)(c.sku_flags);
                a(f, "Guild application subscriptions unsupported!"), a(c.published, "Subscription listing not published"), await E(e, n);
                let p = {
                    initialPlanId: null != i ? i : null == c ? void 0 : c.subscription_plans[0].id,
                    activeSubscription: null,
                    analyticsLocations: r,
                    analyticsLocationObject: l,
                    analyticsSubscriptionType: S.SubscriptionTypes.APPLICATION,
                    renderHeader: u,
                    planGroup: o.subscription_listings_ids,
                    skuId: n,
                    guildId: null,
                    eligibleApplicationSubscriptionGuilds: [],
                    showBenefitsFirst: !1,
                    application: s,
                    listing: c
                };
                T(p)
            }
        },
        159149: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
                u = n("145131"),
                s = n("181114"),
                o = n("376641"),
                c = n("782340"),
                d = n("198699");
            (i = l || (l = {}))[i.CONTINUE = 0] = "CONTINUE", i[i.UPGRADE = 1] = "UPGRADE", i[i.PURCHASE = 2] = "PURCHASE";
            let f = t => {
                let {
                    onBack: e,
                    backText: n,
                    primaryIcon: i,
                    primaryCTA: l,
                    primaryType: f,
                    primaryText: p,
                    primaryTooltip: I,
                    primaryDisabled: S,
                    primarySubmitting: T,
                    onPrimary: h,
                    secondaryText: _,
                    onSecondary: E
                } = t;
                return (0, a.jsxs)(r.ModalFooter, {
                    justify: u.default.Justify.BETWEEN,
                    align: u.default.Align.CENTER,
                    children: [(() => {
                        if (null == l || null == p) return null;
                        let t = 2 === l ? s.default : r.Button,
                            e = {
                                innerClassName: d.button,
                                type: f,
                                disabled: S,
                                submitting: T,
                                color: 0 === l ? r.Button.Colors.BRAND : r.Button.Colors.GREEN,
                                onClick: h
                            };
                        return null != I ? (0, a.jsx)(r.Tooltip, {
                            text: I,
                            children: n => (0, a.jsxs)(t, {
                                ...n,
                                ...e,
                                children: [null == i ? null : (0, a.jsx)(i, {
                                    className: d.primaryIcon
                                }), p]
                            })
                        }) : (0, a.jsxs)(t, {
                            ...e,
                            children: [null == i ? null : (0, a.jsx)(i, {
                                className: d.primaryIcon
                            }), p]
                        })
                    })(), null == _ ? null : (0, a.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        onClick: E,
                        children: _
                    }), (0, a.jsx)(o.default, {}), null == e ? null : (0, a.jsx)(r.Button, {
                        className: d.back,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        onClick: e,
                        children: null != n ? n : c.default.Messages.BACK
                    })]
                })
            };
            f.CTAType = l;
            var p = f
        },
        376641: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                r = n("77078"),
                u = n("600785"),
                s = n("782340"),
                o = n("980638"),
                c = n("173791");

            function d() {
                return (0, i.jsxs)("div", {
                    className: a(o.paymentModalLockIcon, c.flex, c.alignCenter),
                    children: [(0, i.jsx)(u.default, {
                        className: o.lockIcon,
                        width: 18,
                        height: 18
                    }), (0, i.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        children: s.default.Messages.BILLING_SECURE
                    })]
                })
            }
        },
        210721: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
                u = n("450911"),
                s = n("819689"),
                o = n("884351"),
                c = n("42203"),
                d = n("659632"),
                f = n("646718");
            (l = i || (i = {})).ACTION = "action", l.LOOP = "loop", l.IDLE = "idle";
            let p = (t, e) => {
                    let i;
                    switch (t) {
                        case f.PremiumGiftStyles.SNOWGLOBE:
                            i = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(t => {
                                let {
                                    default: e
                                } = t;
                                return e
                            });
                            break;
                        case f.PremiumGiftStyles.BOX:
                            i = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(t => {
                                let {
                                    default: e
                                } = t;
                                return e
                            });
                            break;
                        case f.PremiumGiftStyles.CUP:
                            i = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(t => {
                                let {
                                    default: e
                                } = t;
                                return e
                            });
                            break;
                        case f.PremiumGiftStyles.STANDARD_BOX:
                            switch (e) {
                                case "idle":
                                    i = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    i = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CAKE:
                            switch (e) {
                                case "idle":
                                    i = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    i = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CHEST:
                            switch (e) {
                                case "idle":
                                    i = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    i = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.COFFEE:
                            switch (e) {
                                case "idle":
                                    i = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    i = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_STANDARD_BOX:
                            switch (e) {
                                case "idle":
                                    i = () => n.el("158302").then(n.t.bind(n, "158302", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("610146").then(n.t.bind(n, "610146", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    i = () => n.el("294569").then(n.t.bind(n, "294569", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_CAKE:
                            switch (e) {
                                case "idle":
                                    i = () => n.el("124416").then(n.t.bind(n, "124416", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("335900").then(n.t.bind(n, "335900", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    i = () => n.el("566748").then(n.t.bind(n, "566748", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_CHEST:
                            switch (e) {
                                case "idle":
                                    i = () => n.el("708949").then(n.t.bind(n, "708949", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("355472").then(n.t.bind(n, "355472", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    i = () => n.el("262001").then(n.t.bind(n, "262001", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.SEASONAL_COFFEE:
                            switch (e) {
                                case "idle":
                                    i = () => n.el("836477").then(n.t.bind(n, "836477", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("737995").then(n.t.bind(n, "737995", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    i = () => n.el("433750").then(n.t.bind(n, "433750", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        default:
                            i = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return i
                },
                I = async (t, e) => {
                    if (null == e) throw Error("giftCode must be defined");
                    if (null == t) throw Error("Recipient must be defined");
                    let n = await u.default.openPrivateChannel(t.id).then(t => {
                            let e = c.default.getChannel(t);
                            if (r(null != e, "PrivateChannel is null"), null == e) throw Error("Channel must be defined");
                            return e
                        }),
                        i = (0, d.getGiftCodeURL)(e);
                    return s.default.sendMessage(n.id, o.default.parse(n, i), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        53253: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
                u = n("296892");
            let s = new Date("2024-01-04T07:59:59.000Z"),
                o = a(s),
                c = (0, u.default)({
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
                d = (0, u.default)({
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
                let [t, e] = i.useState(() => o.isAfter(Date.now()));
                return i.useEffect(() => {
                    let n = new r.Timeout,
                        i = () => {
                            let t = Math.min(o.diff(Date.now(), "millisecond"), 864e5);
                            null == n || n.start(t, () => {
                                o.isBefore(Date.now()) ? e(!1) : i()
                            })
                        };
                    return t && i(), () => n.stop()
                }), t
            }
            var p = c
        },
        970755: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchApplicationsShelf: function() {
                    return s
                },
                fetchPrivateChannelIntegrations: function() {
                    return o
                },
                deletePrivateChannelIntegration: function() {
                    return c
                }
            }), n("70102"), n("746379");
            var i = n("981980"),
                l = n("872717"),
                a = n("913144");
            n("253981");
            var r = n("140596"),
                u = n("49111");
            n("843455"), n("782340");

            function s() {
                r.default.getApplicationsShelfFetchState() === r.FetchState.NOT_FETCHED && (a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), l.default.get(u.Endpoints.APPLICATIONS_SHELF).then(t => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: t.body.applications
                })).catch(t => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function o(t) {
                let e = new i.default(1e3, 5e3);
                a.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: t
                }), l.default.get({
                    url: u.Endpoints.CHANNEL_INTEGRATIONS(t),
                    backoff: e,
                    retries: 10
                }).then(e => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: t,
                        integrations: e.body
                    })
                }).catch(() => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: t
                    })
                })
            }

            function c(t, e) {
                return l.default.delete(u.Endpoints.CHANNEL_INTEGRATION(t, e)).then(t => {
                    var e;
                    if (null === (e = t.body) || void 0 === e ? void 0 : e.message) throw Error(t.body.message)
                })
            }
        },
        252063: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                usePrivateChannelIntegrationState: function() {
                    return o
                }
            }), n("222007");
            var i = n("884691"),
                l = n("446674"),
                a = n("201155"),
                r = n("21121"),
                u = n("970755"),
                s = n("140596");

            function o(t) {
                let {
                    channelId: e
                } = t;
                (0, r.useInMainTabsExperiment)();
                let n = (0, a.useShowApplicationInGDM)(e),
                    {
                        installedIntegrations: o,
                        applicationsShelf: c,
                        integrationsFetchState: d,
                        applicationsShelfFetchState: f
                    } = (0, l.useStateFromStoresObject)([s.default], () => ({
                        installedIntegrations: s.default.getIntegrations(e),
                        applicationsShelf: s.default.getApplicationsShelf(),
                        integrationsFetchState: s.default.getIntegrationsFetchState(e),
                        applicationsShelfFetchState: s.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((d === s.FetchState.NOT_FETCHED || d === s.FetchState.FETCH_FAILED) && (0, u.fetchPrivateChannelIntegrations)(e), (f === s.FetchState.NOT_FETCHED || f === s.FetchState.FETCH_FAILED) && (0, u.fetchApplicationsShelf)())
                }, [n, e, d, f]);
                let p = new Set(o.map(t => t.application.id)),
                    I = c.filter(t => !p.has(t.id));
                return {
                    installedIntegrations: o,
                    availableApplications: I,
                    applicationsShelf: c,
                    fetched: d !== s.FetchState.NOT_FETCHED && d !== s.FetchState.FETCHING && f !== s.FetchState.NOT_FETCHED && f !== s.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        140596: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return h
                }
            }), n("222007"), n("424973");
            var i, l, a = n("446674"),
                r = n("913144"),
                u = n("653047"),
                s = n("946028");
            (l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.FETCH_FAILED = 3] = "FETCH_FAILED";
            let o = new Map,
                c = new Map,
                d = [],
                f = 0,
                p = [];
            class I extends a.default.Store {
                getIntegrations(t) {
                    var e;
                    return null !== (e = o.get(t)) && void 0 !== e ? e : p
                }
                getIntegration(t, e) {
                    var n;
                    return null === (n = o.get(t)) || void 0 === n ? void 0 : n.find(t => t.application.id === e)
                }
                getAllIntegrations() {
                    return o
                }
                getIntegrationsFetchState(t) {
                    var e;
                    return null !== (e = c.get(t)) && void 0 !== e ? e : 0
                }
                getApplicationsShelfFetchState() {
                    return f
                }
                getApplicationsShelf() {
                    return d
                }
            }

            function S(t) {
                return t.sort((t, e) => t.application.name.localeCompare(e.application.name))
            }
            I.displayName = "PrivateChannelIntegrationStore";
            let T = new I(r.default, {
                LOGOUT() {
                    o.clear()
                },
                CONNECTION_OPEN() {
                    o.clear(), c.clear()
                },
                CHANNEL_SELECT(t) {
                    let {
                        channelId: e
                    } = t;
                    if (null == e || 3 !== c.get(e)) return !1;
                    c.set(e, 0)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    f = 1
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(t) {
                    let {
                        applications: e
                    } = t;
                    d = e.map(u.default.createFromServer).sort((t, e) => t.name.localeCompare(e.name)), f = 2
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    f = 3
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(t) {
                    let {
                        channelId: e
                    } = t;
                    o.set(e, null), c.set(e, 1)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(t) {
                    let {
                        channelId: e,
                        integrations: n
                    } = t;
                    o.set(e, S(n.map(s.createPrivateChannelIntegration))), c.set(e, 2)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(t) {
                    let {
                        channelId: e
                    } = t;
                    c.set(e, 3)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(t) {
                    let {
                        integration: e
                    } = t, n = o.get(e.channel_id);
                    if (null == n) return !1;
                    o.set(e.channel_id, S([...n, (0, s.createPrivateChannelIntegration)(e)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(t) {
                    let {
                        integration: e
                    } = t, n = o.get(e.channel_id);
                    if (null == n) return !1;
                    let i = (0, s.createPrivateChannelIntegration)(e),
                        l = n.findIndex(t => t.application.id === i.application.id),
                        a = [...n]; - 1 === l ? a.push(i) : a[l] = i, o.set(i.channel_id, S(a))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(t) {
                    let {
                        channelId: e,
                        applicationId: n
                    } = t, i = o.get(e);
                    if (null == i) return !1;
                    o.set(e, i.filter(t => t.application.id !== n))
                },
                CHANNEL_DELETE(t) {
                    let {
                        channel: e
                    } = t;
                    return o.delete(e.id)
                }
            });
            var h = T
        },
        928460: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var i, l = n("666038"),
                a = n("560350"),
                r = n("766274");
            i = class t extends l.default {
                static createFromServer(e) {
                    let n = e.staff_notes;
                    return new t({
                        id: e.id,
                        skuId: e.sku.id,
                        summary: e.summary,
                        tagline: e.tagline,
                        flavorText: e.flavor_text,
                        description: e.description,
                        childSkuIds: null != e.child_skus ? e.child_skus.map(t => t.id) : null,
                        alternativeSkuIds: null != e.alternative_skus ? e.alternative_skus.map(t => t.id) : null,
                        carouselItems: null != e.carousel_items ? e.carousel_items.map(t => ({
                            assetId: t.asset_id,
                            youtubeVideoId: t.youtube_video_id
                        })) : null,
                        assets: null != e.assets ? e.assets.map(a.transformStoreAssetFromServer) : null,
                        staffNotes: null != n ? {
                            content: n.content,
                            user: null != n.user ? new r.default(n.user) : null
                        } : null,
                        guild: null != e.guild ? {
                            id: e.guild.id,
                            name: e.guild.name,
                            icon: e.guild.icon,
                            approximateMemberCount: e.guild.approximate_member_count,
                            approximatePresenceCount: e.guild.approximate_presence_count
                        } : null,
                        thumbnail: null != e.thumbnail ? (0, a.transformStoreAssetFromServer)(e.thumbnail) : null,
                        previewVideo: null != e.preview_video ? (0, a.transformStoreAssetFromServer)(e.preview_video) : null,
                        headerBackground: null != e.header_background ? (0, a.transformStoreAssetFromServer)(e.header_background) : null,
                        headerLogoDarkTheme: null != e.header_logo_dark_theme ? (0, a.transformStoreAssetFromServer)(e.header_logo_dark_theme) : null,
                        headerLogoLightTheme: null != e.header_logo_light_theme ? (0, a.transformStoreAssetFromServer)(e.header_logo_light_theme) : null,
                        boxArt: null != e.box_art ? (0, a.transformStoreAssetFromServer)(e.box_art) : null,
                        heroBackground: null != e.hero_background ? (0, a.transformStoreAssetFromServer)(e.hero_background) : null,
                        heroVideo: null != e.hero_video ? (0, a.transformStoreAssetFromServer)(e.hero_video) : null,
                        entitlementBranchId: e.entitlement_branch_id
                    })
                }
                isSlimDirectoryVersion() {
                    return null == this.description
                }
                constructor(t) {
                    super(), this.id = t.id, this.skuId = t.skuId, this.summary = t.summary, this.tagline = t.tagline, this.flavorText = t.flavorText, this.description = t.description, this.carouselItems = t.carouselItems || [], this.childSkuIds = t.childSkuIds || [], this.alternativeSkuIds = t.alternativeSkuIds || [], this.assets = t.assets || [], this.staffNotes = t.staffNotes, this.guild = t.guild, this.thumbnail = t.thumbnail || null, this.boxArt = t.boxArt || null, this.previewVideo = t.previewVideo || null, this.headerBackground = t.headerBackground || null, this.headerLogoDarkTheme = t.headerLogoDarkTheme || null, this.headerLogoLightTheme = t.headerLogoLightTheme || null, this.heroBackground = t.heroBackground || null, this.heroVideo = t.heroVideo || null, this.entitlementBranchId = t.entitlementBranchId || null
                }
            }
        },
        698041: function(t, e, n) {
            "use strict";
            let i;
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            }), n("222007"), n("70102");
            var l = n("446674"),
                a = n("913144"),
                r = n("915639"),
                u = n("928460"),
                s = n("449008");
            let o = {},
                c = {},
                d = {},
                f = {};

            function p(t) {
                let e = t.id,
                    n = t.sku.id,
                    i = o[e],
                    l = u.default.createFromServer(t);
                !(null != i && !i.isSlimDirectoryVersion() && l.isSlimDirectoryVersion()) && (!1 === t.published ? (null == d[n] && (d[n] = new Set), d[n].add(e)) : f[n] = e, o[e] = l)
            }

            function I(t, e) {
                return "".concat(t, ":").concat(e)
            }

            function S(t) {
                let {
                    storeListings: e
                } = t;
                for (let t of e) p(t)
            }

            function T() {
                o = {}, f = {}, d = {}, c = {}
            }

            function h() {
                if (i === r.default.locale) return !1;
                T(), i = r.default.locale
            }
            class _ extends l.default.Store {
                initialize() {
                    this.waitFor(r.default), this.syncWith([r.default], h), i = r.default.locale
                }
                get(t) {
                    return o[t]
                }
                getForSKU(t, e) {
                    let n = f[t];
                    return null != e ? c[I(e, t)] : null != n ? o[n] : null
                }
                getUnpublishedForSKU(t) {
                    let e = d[t];
                    return null == e ? [] : Array.from(e).map(t => o[t]).filter(s.isNotNullish)
                }
                getForChannel(t, e) {
                    return c[I(t, e)]
                }
                getStoreListing(t) {
                    let {
                        storeListingId: e,
                        skuId: n,
                        channelId: i,
                        isTestMode: l
                    } = t;
                    if (l && null != n) {
                        let t = this.getUnpublishedForSKU(n);
                        if (null != t && t.length > 0) return t[0]
                    }
                    if (null != e) return this.get(e);
                    if (null != i) {
                        if (null == n) throw Error("getStoreListing with channel expects a skuId");
                        return this.getForChannel(i, n)
                    }
                    if (null != n) return this.getForSKU(n);
                    return null
                }
            }
            _.displayName = "StoreListingStore";
            var E = new _(a.default, {
                STORE_LISTINGS_FETCH_SUCCESS: S,
                APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: S,
                STORE_LISTING_FETCH_SUCCESS: function(t) {
                    let {
                        storeListing: e,
                        channelId: n
                    } = t;
                    if (null != n) {
                        let t = u.default.createFromServer(e);
                        c[I(n, t.skuId)] = t, f[t.skuId] = t.id
                    } else p(e)
                },
                USER_SETTINGS_PROTO_UPDATE: h,
                APPLICATION_STORE_CLEAR_DATA: T,
                GIFT_CODE_RESOLVE_SUCCESS: function(t) {
                    let {
                        giftCode: e
                    } = t;
                    if (null == e.store_listing) return !1;
                    p(e.store_listing)
                }
            })
        },
        275623: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                r = n("164538");

            function u(t) {
                let {
                    className: e,
                    ...n
                } = t;
                return (0, i.jsx)("div", {
                    className: a(r.gifTag, e),
                    ...n
                })
            }
        },
        246053: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Directions: function() {
                    return i
                },
                default: function() {
                    return d
                }
            }), n("70102");
            var i, l, a = n("37983");
            n("884691");
            var r = n("414456"),
                u = n.n(r),
                s = n("75196"),
                o = n("741460");
            (l = i || (i = {})).LEFT = "LEFT", l.RIGHT = "RIGHT", l.UP = "UP", l.DOWN = "DOWN", l.UP_LEFT = "UP_LEFT", l.DOWN_RIGHT = "DOWN_RIGHT";
            let c = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    direction: l,
                    foreground: r,
                    className: c,
                    title: d,
                    ...f
                } = t;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(f),
                    width: e,
                    height: n,
                    className: u(c, function(t) {
                        switch (t) {
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
                                throw Error("Invalid Direction ".concat(t))
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
        600785: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("434657"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            id: "a",
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                        })
                    })
                }, a.LockIcon, void 0, {
                    size: 24
                })
        },
        8161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("618991"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: e,
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
        613676: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
                u = n("128259"),
                s = n("49111");

            function o(t, e, n) {
                return null != e || null != n
            }

            function c(t) {
                let {
                    applicationId: e,
                    customInstallUrl: n,
                    installParams: o,
                    guildId: c,
                    channelId: d,
                    disableGuildSelect: f,
                    source: p
                } = t;
                if (null != n) return r.default.track(s.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: e,
                    guild_id: c,
                    auth_type: "custom_url",
                    source: p,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, u.handleClick)({
                    href: n
                });
                null != o && (r.default.track(s.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: e,
                    guild_id: c,
                    auth_type: "in_app",
                    source: p,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, a.openOAuth2Modal)({
                    guildId: c,
                    clientId: e,
                    scopes: o.scopes,
                    channelId: d,
                    disableGuildSelect: f,
                    permissions: null != o.permissions ? l.default.deserialize(o.permissions) : void 0
                }))
            }
        },
        300036: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                TicketIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("82169");
            let r = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M2.1 12a3 3 0 0 0 0 4.24l.46.46c.17.17.43.2.65.1a3 3 0 0 1 4 4c-.1.2-.08.47.08.64l.47.46a3 3 0 0 0 4.24 0l6.77-6.77a1 1 0 0 1 1.36-1.36L21.9 12a3 3 0 0 0 0-4.24l-.46-.47a.56.56 0 0 0-.65-.08 3 3 0 0 1-4-4 .56.56 0 0 0-.09-.65l-.46-.46a3 3 0 0 0-4.24 0l-1.77 1.77a1 1 0 0 1-1.36 1.36L2.1 12Zm10.01-6.3A1 1 0 1 0 10.7 7.1l.69.7a1 1 0 1 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 1 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 0 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=84664.64dffc23dbc9a8972233.js.map