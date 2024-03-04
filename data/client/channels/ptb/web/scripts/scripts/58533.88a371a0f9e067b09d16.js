(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58533"], {
        328269: function(e, t, s) {
            "use strict";
            e.exports = s.p + "746284e4cfc7cd6c5e15.svg"
        },
        958787: function(e, t, s) {
            "use strict";
            e.exports = s.p + "80b04934274a1d198741.svg"
        },
        873390: function(e, t, s) {
            "use strict";
            e.exports = s.p + "6836d88af9197cbd4cbb.svg"
        },
        117262: function(e, t, s) {
            "use strict";
            e.exports = s.p + "c62fd6931adca229aac8.svg"
        },
        960476: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                trackSearchStart: function() {
                    return S
                },
                trackSearchResultViewed: function() {
                    return F
                },
                search: function() {
                    return C
                },
                fetchSuggestions: function() {
                    return G
                },
                resetSearch: function() {
                    return A
                },
                trackSelectGIF: function() {
                    return x
                },
                initializeSearch: function() {
                    return N
                },
                fetchTrending: function() {
                    return P
                },
                fetchTrendingGIFs: function() {
                    return M
                },
                addFavoriteGIF: function() {
                    return O
                },
                removeFavoriteGIF: function() {
                    return D
                }
            }), s("781738");
            var r = s("917351"),
                n = s.n(r),
                l = s("748820"),
                i = s("872717"),
                a = s("713349"),
                o = s("913144"),
                u = s("716241"),
                c = s("787336"),
                d = s("915639"),
                h = s("872173"),
                f = s("510849"),
                p = s("599110"),
                m = s("564703"),
                I = s("253981"),
                g = s("404118"),
                _ = s("49111"),
                E = s("397336"),
                R = s("782340");
            let y = /-/g;

            function S(e) {
                let t = null != e ? {
                    [e]: 1
                } : {};
                u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_STARTED, {
                    search_type: _.SearchTypes.GIF,
                    load_id: f.default.getAnalyticsID(),
                    num_modifiers: Object.keys(t).length,
                    modifiers: t
                })
            }

            function F(e, t) {
                let {
                    startTime: s,
                    ...r
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = {
                    offset: 0,
                    limit: null,
                    totalResults: e.length
                }, l = (0, m.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
                    ...n,
                    ...r,
                    results: e
                }), i = null == s ? {} : {
                    load_duration_ms: Date.now() - s
                };
                u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    ...l,
                    ...i
                })
            }

            function v(e, t, s) {
                let r = Date.now();
                S(t), i.default.get({
                    url: _.Endpoints.GIFS_SEARCH,
                    query: {
                        q: e,
                        media_format: f.default.getSelectedFormat(),
                        provider: "tenor",
                        locale: d.default.locale,
                        limit: s
                    },
                    oldFormErrors: !0
                }).then(n => {
                    let l = n.body;
                    F(l, t, {
                        startTime: r,
                        limit: s
                    }), o.default.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        query: e,
                        items: l
                    })
                }, () => o.default.dispatch({
                    type: "GIF_PICKER_QUERY_FAILURE",
                    query: e
                }))
            }
            let T = n.debounce(v, 250);

            function C(e, t) {
                let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0;
                "" === e ? A() : (o.default.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: e
                }), s ? v(e, t, r) : T(e, t, r))
            }

            function G(e) {
                "" !== e && null != e && i.default.get({
                    url: _.Endpoints.GIFS_SUGGEST,
                    query: {
                        q: e,
                        provider: "tenor",
                        limit: 5,
                        locale: d.default.locale
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let s = t.body;
                    o.default.dispatch({
                        type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                        query: e,
                        items: s
                    })
                })
            }

            function A() {
                o.default.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: ""
                })
            }

            function x(e) {
                let {
                    type: t,
                    index: s,
                    offset: r,
                    limit: n,
                    results: l,
                    totalResults: a,
                    query: o,
                    gifId: c
                } = e, d = (0, m.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
                    offset: r,
                    limit: n,
                    results: l,
                    totalResults: a
                });
                u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                    ...d,
                    index_num: s,
                    source_object: "GIF Picker",
                    query: o
                }), null != c && i.default.post({
                    url: _.Endpoints.GIFS_SELECT,
                    body: {
                        id: c,
                        q: o
                    },
                    oldFormErrors: !0
                })
            }

            function N() {
                let e = (0, l.v4)().replace(y, "");
                u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_OPENED, {
                    search_type: _.SearchTypes.GIF,
                    load_id: e
                }), o.default.wait(() => {
                    o.default.dispatch({
                        type: "GIF_PICKER_INITIALIZE",
                        analyticsID: e
                    })
                })
            }

            function P() {
                i.default.get({
                    url: _.Endpoints.GIFS_TRENDING,
                    query: {
                        provider: "tenor",
                        locale: d.default.locale,
                        media_format: f.default.getSelectedFormat()
                    },
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e, {
                        categories: s,
                        gifs: r
                    } = t;
                    o.default.dispatch({
                        type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                        trendingCategories: s,
                        trendingGIFPreview: r[0]
                    })
                })
            }

            function M(e) {
                let t = Date.now();
                S(_.GIFPickerResultTypes.TRENDING_GIFS), i.default.get({
                    url: _.Endpoints.GIFS_TRENDING_GIFS,
                    query: {
                        media_format: f.default.getSelectedFormat(),
                        provider: "tenor",
                        locale: d.default.locale,
                        limit: e
                    },
                    oldFormErrors: !0
                }).then(s => {
                    let {
                        body: r
                    } = s;
                    F(r, _.GIFPickerResultTypes.TRENDING_GIFS, {
                        startTime: t,
                        limit: e
                    }), o.default.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        items: r
                    })
                }, () => {
                    o.default.dispatch({
                        type: "GIF_PICKER_QUERY_FAILURE"
                    })
                })
            }

            function w(e) {
                let t = I.default.toURLSafe(e);
                return null == t ? e : (0, c.isAttachmentUrl)(t) ? (0, c.removeSignedUrlParameters)(t).toString() : e
            }

            function O(e) {
                let t = 0;
                h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", s => {
                    var r;
                    let l = null !== (r = n.max(Object.values(s.gifs).map(e => e.order))) && void 0 !== r ? r : 0;
                    s.gifs[w(e.url)] = {
                        ...e,
                        order: l + 1
                    };
                    let i = a.FavoriteGIFs.toBinary(s).length;
                    if (i > E.MAX_FAVORITE_GIFS_SIZE) return g.default.show({
                        title: R.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                        body: R.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
                    }), !1;
                    (t = n.size(s.gifs)) > 2 && (s.hideTooltip = !0)
                }, E.UserSettingsDelay.INFREQUENT_USER_ACTION), p.default.track(_.AnalyticEvents.GIF_FAVORITED, {
                    total_num_favorited: t
                })
            }

            function D(e) {
                let t = 0;
                h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", s => {
                    e in s.gifs ? delete s.gifs[e] : delete s.gifs[w(e)], t = n.size(s.gifs)
                }, E.UserSettingsDelay.INFREQUENT_USER_ACTION), p.default.track(_.AnalyticEvents.GIF_UNFAVORITED, {
                    total_num_favorited: t
                })
            }
        },
        718302: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("222007");
            var r, n, l, i = s("884691"),
                a = s("49111");
            (l = r || (r = {})).ARROW_UP = "ARROW_UP", l.ARROW_DOWN = "ARROW_DOWN", l.ARROW_LEFT = "ARROW_LEFT", l.ARROW_RIGHT = "ARROW_RIGHT";
            n = class extends i.Component {
                componentDidMount() {
                    document.addEventListener("keydown", this.handleKeyDown, !0)
                }
                componentWillUnmount() {
                    document.removeEventListener("keydown", this.handleKeyDown, !0)
                }
                focusNext(e) {
                    let {
                        getItemGrid: t,
                        onFocus: s
                    } = this.props, {
                        focusedColumn: r,
                        focusedRow: n
                    } = this.state;
                    if (null == e) return;
                    let l = t();
                    if (null == l) return;
                    let i = this.getNext(l, r, n, e);
                    this.setState({
                        focusedColumn: i.column,
                        focusedRow: i.row
                    }, () => {
                        let e = this.calculateFocusedItem();
                        null != e && null != s && s(e)
                    })
                }
                getNext(e, t, s, r) {
                    let n, l, i, a;
                    if (null == t || null == s) l = 0, i = 0, n = {
                        column: 0,
                        row: 0
                    };
                    else switch (l = t, i = s, r) {
                        case "ARROW_UP":
                            n = {
                                column: l,
                                row: Math.max(i - 1, 0)
                            };
                            break;
                        case "ARROW_DOWN":
                            n = {
                                column: l,
                                row: Math.min(i + 1, e[l].length - 1)
                            };
                            break;
                        case "ARROW_LEFT":
                            n = this.wrapPosition(e, l, i, -1);
                            break;
                        case "ARROW_RIGHT":
                            n = this.wrapPosition(e, l, i, 1)
                    }
                    return null != n && (a = e[n.column][n.row]), (null == a || null == n) && (a = e[(n = {
                        column: l,
                        row: i
                    }).column][n.row]), {
                        column: n.column,
                        row: n.row,
                        id: a
                    }
                }
                calculateClosest(e, t) {
                    let s;
                    let r = this.props.getCoordsMap()[e];
                    if (null == r) return;
                    let n = Number.MAX_SAFE_INTEGER;
                    for (let e = 0; e < t.length; e++) {
                        let l = this.props.getCoordsMap()[t[e]];
                        if (null == l) continue;
                        let i = Math.abs(l.top - r.top);
                        if (i < n) n = i, s = e;
                        else break
                    }
                    return s
                }
                calculateFocusedItem() {
                    let {
                        getItemGrid: e
                    } = this.props, {
                        focusedRow: t,
                        focusedColumn: s
                    } = this.state, r = e();
                    return null == r || null == s || null == t || null == r[s] || null == r[s][t] ? null : r[s][t]
                }
                render() {
                    return this.props.children
                }
                constructor(...e) {
                    super(...e), this.state = {
                        focusedColumn: null,
                        focusedRow: null
                    }, this.handleKeyDown = e => {
                        let {
                            onSelect: t
                        } = this.props;
                        switch (e.keyCode) {
                            case a.KeyboardKeys.ARROW_DOWN:
                            case a.KeyboardKeys.ARROW_UP:
                            case a.KeyboardKeys.ARROW_LEFT:
                            case a.KeyboardKeys.ARROW_RIGHT:
                                this.focusNext(function(e) {
                                    switch (e) {
                                        case a.KeyboardKeys.ARROW_DOWN:
                                            return "ARROW_DOWN";
                                        case a.KeyboardKeys.ARROW_UP:
                                            return "ARROW_UP";
                                        case a.KeyboardKeys.ARROW_LEFT:
                                            return "ARROW_LEFT";
                                        case a.KeyboardKeys.ARROW_RIGHT:
                                            return "ARROW_RIGHT";
                                        default:
                                            return null
                                    }
                                }(e.keyCode));
                                break;
                            case a.KeyboardKeys.ENTER:
                                let s = this.calculateFocusedItem();
                                null != s && null != t && (e.preventDefault(), e.stopPropagation(), t(s))
                        }
                    }, this.wrapPosition = (e, t, s, r) => {
                        var n;
                        let l = e.length,
                            i = Math.max(s * l + t + r, 0) % l,
                            a = null !== (n = this.calculateClosest(e[t][s], e[i])) && void 0 !== n ? n : s,
                            o = 0;
                        return r < 0 && i > t && (o = -1), r > 0 && i < t && (o = 1), {
                            column: i,
                            row: a + o
                        }
                    }
                }
            }
        },
        96386: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("21538"),
                a = e => {
                    let {
                        message: t,
                        className: s,
                        noResultsImageURL: n,
                        forceLightTheme: a,
                        suggestions: o
                    } = e;
                    return (0, r.jsx)("div", {
                        className: l({
                            [i.forceLightTheme]: a
                        }, s),
                        children: (0, r.jsxs)("div", {
                            className: i.wrapper,
                            children: [(0, r.jsx)("div", {
                                className: i.sadImage,
                                style: null != n ? {
                                    backgroundImage: "url(".concat(n, ")")
                                } : {}
                            }), (0, r.jsx)("div", {
                                children: t
                            }), o]
                        })
                    })
                }
        },
        737960: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var r = s("37983"),
                n = s("884691"),
                l = s("308723");

            function i(e) {
                return n.forwardRef(function(t, s) {
                    let i = n.useRef();
                    return n.useImperativeHandle(s, () => ({
                        triggerResize: () => {
                            var e;
                            null === (e = i.current) || void 0 === e || e.onResize()
                        }
                    })), (0, r.jsx)(l.default, {
                        ref: i,
                        children: s => {
                            let {
                                width: n,
                                height: l
                            } = s;
                            return (0, r.jsx)(e, {
                                ...t,
                                width: n,
                                height: l
                            })
                        }
                    })
                })
            }
        },
        891722: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s("42641");
            s.es(r, t)
        },
        809803: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s("261833");
            s.es(r, t)
        },
        538282: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                openExpressionPicker: function() {
                    return c
                },
                closeExpressionPicker: function() {
                    return d
                },
                toggleMultiExpressionPicker: function() {
                    return h
                },
                toggleExpressionPicker: function() {
                    return f
                },
                setExpressionPickerView: function() {
                    return p
                },
                setSearchQuery: function() {
                    return m
                },
                useExpressionPickerStore: function() {
                    return I
                }
            });
            var r = s("995008"),
                n = s.n(r),
                l = s("308503"),
                i = s("136759"),
                a = s("13030");
            let o = Object.freeze({
                    activeView: null,
                    lastActiveView: null,
                    activeViewType: null,
                    searchQuery: "",
                    isSearchSuggestion: !1,
                    pickerId: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                        return n(e)
                    }()
                }),
                u = (0, l.default)((0, i.persist)((e, t) => o, {
                    name: "expression-picker-last-active-view",
                    partialize: e => ({
                        lastActiveView: e.lastActiveView
                    })
                })),
                c = (e, t) => {
                    u.setState({
                        activeView: e,
                        activeViewType: t,
                        lastActiveView: u.getState().activeView
                    })
                },
                d = e => {
                    let t = u.getState();
                    if (void 0 === e || e === t.activeViewType) null !== t.activeView && u.setState({
                        activeView: null,
                        activeViewType: null,
                        lastActiveView: t.activeView
                    })
                },
                h = e => {
                    let t = u.getState();
                    if (null == t.activeView) {
                        var s;
                        c(null !== (s = t.lastActiveView) && void 0 !== s ? s : a.ExpressionPickerViewType.EMOJI, e)
                    } else d()
                },
                f = (e, t) => {
                    u.getState().activeView === e ? d() : c(e, t)
                },
                p = e => {
                    u.setState({
                        activeView: e,
                        lastActiveView: u.getState().activeView
                    })
                },
                m = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    u.setState({
                        searchQuery: e,
                        isSearchSuggestion: t
                    })
                },
                I = u
        },
        140331: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useFavoriteGIFs: function() {
                    return o
                },
                useSortedFavoriteGIFs: function() {
                    return u
                },
                useIsFavoriteGIF: function() {
                    return c
                }
            });
            var r = s("884691"),
                n = s("917351"),
                l = s.n(n),
                i = s("42507");
            let a = {};

            function o() {
                var e, t;
                let s = (0, i.useFrecencySettings)();
                return null !== (t = null === (e = s.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : a
            }

            function u() {
                let e = o();
                return r.useMemo(() => l(e).map((e, t) => ({
                    ...e,
                    url: t
                })).sortBy("order").reverse().value(), [e])
            }

            function c(e) {
                let t = o();
                return null != t[e]
            }
        },
        354553: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            }), s("222007");
            var r, n = s("884691");

            function l(e, t, s) {
                return Math.min(Math.max(Math.floor(e / t), 1), s)
            }
            var i = (0, s("737960").default)(((r = class extends n.Component {
                static getDerivedStateFromProps(e, t) {
                    let {
                        width: s,
                        desiredItemWidth: r,
                        maxColumns: n
                    } = e, i = l(s, r, n);
                    return i !== t.columns ? {
                        columns: i
                    } : null
                }
                render() {
                    let {
                        width: e,
                        height: t,
                        children: s
                    } = this.props, {
                        columns: r
                    } = this.state;
                    return s(r, e, t)
                }
                constructor(...e) {
                    super(...e), this.state = {
                        columns: l(this.props.width, this.props.desiredItemWidth, this.props.maxColumns)
                    }
                }
            }).defaultProps = {
                desiredItemWidth: 200
            }, r))
        },
        873622: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            }), s("222007");
            var r = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                a = s("446674"),
                o = s("77078"),
                u = s("913144"),
                c = s("960476"),
                d = s("538282"),
                h = s("510849"),
                f = s("145131"),
                p = s("810567"),
                m = s("531470"),
                I = s("140331"),
                g = s("588155"),
                _ = s("762518"),
                E = s("49111"),
                R = s("115279"),
                y = s("782340"),
                S = s("901137");
            let F = e => e.stopPropagation();
            class v extends n.PureComponent {
                componentDidMount() {
                    c.initializeSearch(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, E.GIFPickerResultTypes.SEARCH)
                }
                componentWillUnmount() {
                    u.default.wait(() => c.resetSearch()), document.removeEventListener("keydown", this.backToFrontPage)
                }
                search(e, t, s) {
                    c.search(e, t, s), "" === e ? this.setState({
                        resultType: null
                    }) : this.state.resultType !== E.GIFPickerResultTypes.SEARCH && this.setState({
                        resultType: E.GIFPickerResultTypes.SEARCH
                    })
                }
                renderHeaderContent() {
                    let {
                        query: e
                    } = this.props, {
                        resultType: t
                    } = this.state;
                    switch (t) {
                        case E.GIFPickerResultTypes.FAVORITES:
                            return (0, r.jsx)(o.FormTitle, {
                                tag: "h5",
                                className: S.searchHeader,
                                children: y.default.Messages.CATEGORY_FAVORITE
                            });
                        case E.GIFPickerResultTypes.TRENDING_GIFS:
                            return (0, r.jsx)(o.FormTitle, {
                                tag: "h5",
                                className: S.searchHeader,
                                children: y.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
                            });
                        default:
                            return (0, r.jsx)(p.default, {
                                className: S.searchBar,
                                size: p.default.Sizes.MEDIUM,
                                query: e,
                                onChange: this.handleChangeQuery,
                                onClear: this.handleClearQuery,
                                placeholder: y.default.Messages.SEARCH_TENOR,
                                "aria-label": y.default.Messages.SEARCH_TENOR,
                                ref: this.searchBarRef,
                                autoFocus: !0
                            })
                    }
                }
                renderHeader() {
                    let {
                        resultType: e
                    } = this.state, t = null;
                    return null != e && (t = (0, r.jsx)(o.Clickable, {
                        onClick: this.handleClearQuery,
                        className: S.backButton,
                        "aria-label": y.default.Messages.BACK,
                        children: (0, r.jsx)(m.default, {
                            title: y.default.Messages.BACK
                        })
                    })), (0, r.jsxs)(f.default, {
                        align: f.default.Align.CENTER,
                        children: [t, this.renderHeaderContent()]
                    })
                }
                renderContent() {
                    let {
                        resultItems: e,
                        resultQuery: t,
                        query: s,
                        favorites: n,
                        searchOffset: l,
                        searchLimit: i,
                        searchTotalResults: a,
                        suggestions: o,
                        hideFavorites: u
                    } = this.props, {
                        resultType: c
                    } = this.state;
                    return null == c ? (0, r.jsx)(g.default, {
                        hideFavoritesTile: u,
                        onSelectItem: this.handleSelectItem
                    }) : (0, r.jsx)(_.default, {
                        data: c === E.GIFPickerResultTypes.FAVORITES ? n : e,
                        onSelectGIF: this.handleSelectGIF,
                        resultType: c,
                        resultQuery: t,
                        query: s,
                        searchOffset: l,
                        searchLimit: i,
                        searchTotalResults: a,
                        suggestions: o,
                        onSelectSuggestion: this.handleSelectSuggestion
                    })
                }
                render() {
                    let {
                        className: e,
                        forwardedRef: t
                    } = this.props;
                    return (0, r.jsxs)("div", {
                        id: R.GIF_PICKER_TAB_PANEL_ID,
                        role: "tabpanel",
                        "aria-labelledby": R.GIF_PICKER_TAB_ID,
                        className: i(S.container, e),
                        onClick: F,
                        ref: t,
                        children: [(0, r.jsx)("div", {
                            className: S.header,
                            children: this.renderHeader()
                        }), (0, r.jsx)("div", {
                            className: S.content,
                            children: this.renderContent()
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        resultType: null
                    }, this.searchBarRef = n.createRef(), this.backToFrontPage = e => {
                        let {
                            resultType: t
                        } = this.state;
                        e.keyCode === E.KeyboardKeys.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
                    }, this.handleChangeQuery = e => {
                        (0, d.setSearchQuery)(e), this.search(e, E.GIFPickerResultTypes.SEARCH)
                    }, this.handleSelectSuggestion = e => {
                        (0, d.setSearchQuery)(""), c.resetSearch(), this.search(e, E.GIFPickerResultTypes.SEARCH_SUGGESTION, !0)
                    }, this.handleClearQuery = () => {
                        let {
                            current: e
                        } = this.searchBarRef;
                        (0, d.setSearchQuery)(""), c.resetSearch(), this.setState({
                            resultType: null
                        }), null != e && e.focus()
                    }, this.handleSelectGIF = e => {
                        let {
                            onSelectGIF: t
                        } = this.props;
                        null != t && t(e)
                    }, this.handleSelectItem = (e, t) => {
                        let {
                            current: s
                        } = this.searchBarRef;
                        switch (e) {
                            case E.GIFPickerResultTypes.TRENDING_CATEGORY:
                                c.search(t, E.GIFPickerResultTypes.TRENDING_CATEGORY, !0), null != s && s.focus();
                                break;
                            case E.GIFPickerResultTypes.TRENDING_GIFS:
                                c.fetchTrendingGIFs()
                        }
                        this.setState({
                            resultType: e
                        })
                    }
                }
            }
            var T = n.forwardRef((e, t) => {
                !e.persistSearch && (0, d.setSearchQuery)("");
                let {
                    query: s,
                    resultQuery: n,
                    resultItems: l,
                    suggestions: i
                } = (0, a.useStateFromStoresObject)([h.default], () => ({
                    query: h.default.getQuery(),
                    resultQuery: h.default.getResultQuery(),
                    resultItems: h.default.getResultItems(),
                    suggestions: h.default.getSuggestions()
                })), o = (0, d.useExpressionPickerStore)(e => e.searchQuery), u = (0, I.useSortedFavoriteGIFs)();
                return (0, r.jsx)(v, {
                    ...e,
                    forwardedRef: t,
                    query: null != o && "" !== o ? o : s,
                    resultQuery: n,
                    resultItems: l,
                    suggestions: i,
                    favorites: u,
                    searchOffset: 0,
                    searchTotalResults: h.default.getResultItems().length,
                    searchLimit: null
                })
            })
        },
        588155: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            }), s("222007");
            var r = s("37983"),
                n = s("884691"),
                l = s("917351"),
                i = s.n(l),
                a = s("446674"),
                o = s("713349"),
                u = s("669491"),
                c = s("77078"),
                d = s("960476"),
                h = s("718302"),
                f = s("510849"),
                p = s("671434"),
                m = s("117362"),
                I = s("140331"),
                g = s("354553"),
                _ = s("4445"),
                E = s("762518"),
                R = s("49111"),
                y = s("782340"),
                S = s("138667");
            let F = (e, t) => (0, r.jsx)(_.CategoryColumn, {
                columns: e
            }, t);
            class v extends n.PureComponent {
                componentDidMount() {
                    0 === this.props.trendingCategories.length && (0, d.fetchTrending)()
                }
                getData() {
                    return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile)
                }
                renderCategoryExtras(e) {
                    let {
                        name: t,
                        icon: s,
                        type: l
                    } = e;
                    return (0, r.jsxs)(n.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: l === R.GIFPickerResultTypes.FAVORITES ? S.categoryFadeBlurple : S.categoryFade
                        }), (0, r.jsxs)("div", {
                            className: S.categoryText,
                            children: [null != s ? (0, r.jsx)(s, {
                                className: S.categoryIcon
                            }) : null, (0, r.jsx)("span", {
                                className: S.categoryName,
                                children: t
                            })]
                        })]
                    })
                }
                render() {
                    return (0, r.jsx)(h.default, {
                        getItemGrid: this.getItemGrid,
                        getCoordsMap: this.getCoordsMap,
                        onFocus: this.handleFocus,
                        onSelect: this.handleSelect,
                        children: (0, r.jsx)(g.default, {
                            desiredItemWidth: 200,
                            maxColumns: 6,
                            children: this.renderContent
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._masonryRef = n.createRef(), this.state = {
                        favoritesTile: function(e) {
                            var t;
                            let s = i.sample(i.values(e));
                            return {
                                type: R.GIFPickerResultTypes.FAVORITES,
                                name: y.default.Messages.CATEGORY_FAVORITE,
                                icon: p.default,
                                src: null != s ? s.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                                format: null !== (t = null == s ? void 0 : s.format) && void 0 !== t ? t : o.GIFType.IMAGE
                            }
                        }(this.props.favorites),
                        selectedIndex: {
                            column: 0,
                            row: 0
                        },
                        focusedId: null
                    }, this.handleFocus = e => {
                        let {
                            current: t
                        } = this._masonryRef;
                        if (null == t) return;
                        let s = t.getCoordsMap()[e];
                        null != s && (t.scrollIntoViewRect({
                            start: s.top - 10,
                            end: s.top + s.height + 10
                        }), this.setState({
                            focusedId: e
                        }))
                    }, this.handleSelect = e => {
                        let {
                            onSelectItem: t
                        } = this.props, s = this.getData().find(t => t.name === e);
                        null != s && null != t && t(s.type, s.name)
                    }, this.getItemKey = (e, t) => {
                        if (e > 0) return null;
                        let s = this.getData()[t];
                        return null != s ? s.name : null
                    }, this.memoizedData = (0, m.cachedFunction)(function(e, t) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return s ? [...t] : [e, ...t]
                    }), this.renderItem = (e, t, s, n) => {
                        if (e > 0) return null;
                        let l = this.getData()[t];
                        if (null == l) return;
                        let {
                            onSelectItem: i,
                            imagePool: a,
                            videoPool: o
                        } = this.props, {
                            focusedId: c
                        } = this.state;
                        return (0, r.jsx)(E.GIFPickerSearchItem, {
                            format: l.format,
                            color: u.default.unsafe_rawColors.PRIMARY_800.css,
                            src: l.src,
                            item: l,
                            index: t,
                            coords: s,
                            onClick: () => i(l.type, l.name),
                            renderExtras: this.renderCategoryExtras,
                            focused: l.name === c,
                            imagePool: a,
                            videoPool: o
                        }, n)
                    }, this.renderContent = (e, t, s) => {
                        let {
                            trendingCategories: n
                        } = this.props;
                        return 0 === n.length ? (0, r.jsx)(_.ResultsLoader, {
                            columns: e,
                            width: t,
                            renderColumn: F
                        }) : (0, r.jsx)(c.MasonryList, {
                            ref: this._masonryRef,
                            fade: !0,
                            className: S.container,
                            itemGutter: 12,
                            getItemKey: this.getItemKey,
                            columns: e,
                            getItemHeight: () => 110,
                            renderItem: this.renderItem,
                            sections: [this.getData().length],
                            chunkSize: 50
                        })
                    }, this.getItemGrid = () => {
                        let {
                            current: e
                        } = this._masonryRef;
                        return null != e ? e.getItemGrid() : []
                    }, this.getCoordsMap = () => {
                        let {
                            current: e
                        } = this._masonryRef;
                        return null != e ? e.getCoordsMap() : {}
                    }
                }
            }

            function T(e) {
                let t = (0, a.useStateFromStores)([f.default], () => f.default.getTrendingCategories()),
                    s = (0, I.useFavoriteGIFs)(),
                    n = (0, E.useElementPools)();
                return (0, r.jsx)(v, {
                    ...e,
                    ...n,
                    trendingCategories: t,
                    favorites: s
                })
            }
        },
        4445: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CategoryColumn: function() {
                    return f
                },
                ResultsLoader: function() {
                    return p
                }
            }), s("222007"), s("808653");
            var r = s("37983"),
                n = s("884691"),
                l = s("917351"),
                i = s.n(l),
                a = s("458960"),
                o = s("669491"),
                u = s("982939");
            let c = [o.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, o.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
            class d extends n.PureComponent {
                render() {
                    let {
                        props: {
                            height: e
                        },
                        state: {
                            backgroundColor: t
                        }
                    } = this;
                    return (0, r.jsx)("div", {
                        style: {
                            height: e,
                            backgroundColor: t
                        },
                        className: u.gif
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        backgroundColor: i.sample(c)
                    }
                }
            }
            class h extends n.Component {
                componentDidMount() {
                    this.animateSlide()
                }
                getAnimatedStyle() {
                    let {
                        props: {
                            columns: e
                        },
                        state: {
                            translateY: t
                        }
                    } = this;
                    return {
                        width: "".concat(100 / e, "%"),
                        transform: [{
                            translateY: t.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0px", "1px"]
                            })
                        }]
                    }
                }
                render() {
                    let {
                        blocks: e
                    } = this.state;
                    return (0, r.jsxs)(a.default.div, {
                        className: u.column,
                        style: this.getAnimatedStyle(),
                        children: [e.map((e, t) => (0, r.jsx)(d, {
                            height: e
                        }, t)), e.map((e, t) => (0, r.jsx)(d, {
                            height: e
                        }, "alt".concat(t)))]
                    })
                }
                constructor(e) {
                    super(e), this.animateSlide = () => {
                        let {
                            props: {
                                direction: e
                            },
                            state: {
                                translateY: t,
                                height: s
                            }
                        } = this;
                        t.setValue(e > 0 ? 0 : -s / 2 + 12), a.default.timing(t, {
                            toValue: e > 0 ? -s / 2 + 12 : 0,
                            duration: 800,
                            easing: a.default.Easing.linear
                        }).start(this.animateSlide)
                    };
                    let t = Array(10).fill(null).map(() => i.random(40, 150));
                    this.state = {
                        blocks: t,
                        height: 2 * t.reduce((e, t) => e + t + 12, 12),
                        translateY: new a.default.Value(0)
                    }
                }
            }
            h.defaultProps = {
                direction: -1
            };
            let f = e => {
                let {
                    columns: t
                } = e;
                return (0, r.jsx)("div", {
                    className: u.column,
                    style: {
                        width: "".concat(100 / t, "%")
                    },
                    children: [, , , , ].fill(null).map((e, t) => (0, r.jsx)("div", {
                        className: u.categoryLoader
                    }, t))
                })
            };
            class p extends n.PureComponent {
                render() {
                    let {
                        columns: e,
                        renderColumn: t
                    } = this.props;
                    return (0, r.jsx)("div", {
                        className: u.container,
                        children: Array(e).fill(null).map((s, r) => t(e, r))
                    })
                }
            }
        },
        762518: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                GIFPickerSearchItem: function() {
                    return P
                },
                useElementPools: function() {
                    return w
                },
                default: function() {
                    return O
                }
            }), s("222007");
            var r = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                a = s("917351"),
                o = s.n(a),
                u = s("217982"),
                c = s("713349"),
                d = s("669491"),
                h = s("77078"),
                f = s("960476"),
                p = s("718302"),
                m = s("96386"),
                I = s("244201"),
                g = s("476714"),
                _ = s("671434"),
                E = s("354553"),
                R = s("49111"),
                y = s("782340"),
                S = s("186046");
            let F = [d.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
                v = 1220,
                T = Array.from({
                    length: 16
                }).map((e, t) => ({
                    id: "".concat(t),
                    height: Math.floor(100 * Math.random()) + 120
                }));

            function C(e) {
                var t;
                return null !== (t = e.id) && void 0 !== t ? t : e.src
            }

            function G(e, t) {
                let s = T[t];
                return null == s ? 0 : s.height
            }

            function A(e, t, s, n) {
                if (!(e > 0)) return null == T[t] ? null : (0, r.jsx)("div", {
                    className: S.placeholder,
                    style: {
                        animationDelay: "".concat(75 * t, "ms"),
                        ...s
                    }
                }, n)
            }

            function x(e, t) {
                var s, r;
                return e > 0 ? "" : null !== (r = null === (s = T[t]) || void 0 === s ? void 0 : s.id) && void 0 !== r ? r : ""
            }

            function N(e) {
                return e === c.GIFType.VIDEO
            }
            class P extends n.PureComponent {
                componentDidMount() {
                    let {
                        props: {
                            format: e,
                            src: t,
                            coords: {
                                width: s,
                                height: r
                            },
                            videoPool: n
                        },
                        ref: l
                    } = this;
                    if (e !== c.GIFType.VIDEO || null == l) return;
                    let i = n.getElement();
                    i.oncanplay = this.handleCanPlay, i.src = t, i.width = s, i.height = r, l.appendChild(i), this._video = i
                }
                componentDidUpdate(e) {
                    let {
                        width: t,
                        height: s
                    } = this.props.coords;
                    null != this._video && (e.coords.width !== t || e.coords.height !== s) && (this._video.width = t, this._video.height = s)
                }
                componentWillUnmount() {
                    this._mounted = !1;
                    let {
                        _image: e,
                        _video: t
                    } = this, {
                        imagePool: s,
                        videoPool: r
                    } = this.props;
                    null != e && (this._image = null, s.poolElement(e)), null != t && (this._video = null, r.poolElement(t))
                }
                renderGIF() {
                    let {
                        src: e,
                        coords: {
                            width: t,
                            height: s
                        }
                    } = this.props, {
                        loaded: n
                    } = this.state;
                    return n ? (0, r.jsx)("img", {
                        src: e,
                        width: t,
                        height: s,
                        className: S.gif,
                        alt: ""
                    }) : null
                }
                render() {
                    let {
                        item: e,
                        renderExtras: t,
                        format: s,
                        coords: n,
                        focused: l
                    } = this.props, {
                        color: a,
                        loaded: o
                    } = this.state;
                    return (0, r.jsxs)(h.Clickable, {
                        tabIndex: -1,
                        innerRef: e => {
                            this.ref = e
                        },
                        className: i(S.result, {
                            [S.focused]: l
                        }),
                        onClick: this.handleClick,
                        style: {
                            backgroundColor: o ? void 0 : a,
                            ...n
                        },
                        children: [N(s) ? null : this.renderGIF(), null != t ? t(e) : null]
                    })
                }
                constructor(e) {
                    super(e), this.ref = null, this._video = null, this._image = null, this._mounted = !0, this.handleCanPlay = () => {
                        this._mounted && this.setState({
                            loaded: !0
                        })
                    }, this.handleClick = () => {
                        let {
                            onClick: e,
                            item: t,
                            index: s
                        } = this.props;
                        null != e && e(t, s)
                    };
                    let {
                        format: t,
                        color: s,
                        imagePool: r
                    } = this.props;
                    this.state = {
                        color: null == s ? o.sample(F) : s,
                        loaded: !1
                    }, !N(t) && (this._image = r.getElement(), this._image.onload = () => this.setState({
                        loaded: !0
                    }), this._image.src = e.src)
                }
            }
            class M extends n.PureComponent {
                componentDidMount() {
                    let {
                        resultType: e,
                        data: t
                    } = this.props;
                    e === R.GIFPickerResultTypes.FAVORITES && ((0, f.trackSearchStart)(R.GIFPickerResultTypes.FAVORITES), (0, f.trackSearchResultViewed)(t, R.GIFPickerResultTypes.FAVORITES, {
                        limit: null
                    }))
                }
                selectItem(e, t) {
                    let {
                        onSelectGIF: s,
                        resultType: r,
                        data: n,
                        resultQuery: l
                    } = this.props;
                    null != s && s(e), (0, f.trackSelectGIF)({
                        type: r,
                        index: t,
                        offset: this.props.searchOffset,
                        limit: this.props.searchLimit,
                        results: n,
                        totalResults: this.props.searchTotalResults,
                        query: l,
                        gifId: e.id
                    })
                }
                getSectionHeight(e) {
                    return 1 === e ? 220 : 0
                }
                renderEmptyFavorite(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (0, r.jsx)("div", {
                        className: S.emptyHint,
                        children: null != e ? (0, r.jsxs)("div", {
                            className: S.emptyHintCard,
                            children: [t ? (0, r.jsx)(_.default, {
                                className: S.emptyHintFavorite
                            }) : null, (0, r.jsx)("div", {
                                className: S.emptyHintText,
                                children: e
                            })]
                        }) : (0, r.jsx)("div", {
                            className: S.emptyHintSpacer
                        })
                    })
                }
                renderEmptyFavorites() {
                    return (0, r.jsx)(h.Scroller, {
                        className: S.results,
                        fade: !0,
                        children: (0, r.jsxs)("div", {
                            className: S.emptyHints,
                            children: [this.renderEmptyFavorite(y.default.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0), this.renderEmptyFavorite(y.default.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE), this.renderEmptyFavorite(y.default.Messages.NO_GIF_FAVORITES_GO_FAVORITE), Array.from({
                                length: 15
                            }).map((e, t) => (0, r.jsx)(n.Fragment, {
                                children: this.renderEmptyFavorite()
                            }, t)), this.renderEmptyFavorite(y.default.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE), Array.from({
                                length: 16
                            }).map((e, t) => (0, r.jsx)(n.Fragment, {
                                children: this.renderEmptyFavorite()
                            }, t)), this.renderEmptyFavorite(y.default.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)]
                        })
                    })
                }
                render() {
                    let {
                        data: e,
                        resultQuery: t,
                        query: s,
                        resultType: n
                    } = this.props;
                    return 0 === e.length && t === s && n !== R.GIFPickerResultTypes.TRENDING_GIFS ? n === R.GIFPickerResultTypes.FAVORITES ? this.renderEmptyFavorites() : (0, r.jsx)(m.default, {
                        message: y.default.Messages.NO_GIF_SEARCH_RESULTS,
                        className: S.noResults
                    }) : (0, r.jsx)(p.default, {
                        getItemGrid: this.getItemGrid,
                        getCoordsMap: this.getCoordsMap,
                        onFocus: this.handleFocus,
                        onSelect: this.handleSelect,
                        children: (0, r.jsx)(E.default, {
                            desiredItemWidth: 200,
                            maxColumns: 8,
                            children: this.renderContent
                        })
                    }, t)
                }
                constructor(...e) {
                    super(...e), this._masonryRef = n.createRef(), this.prevResultQuery = null, this.state = {
                        focusedId: null
                    }, this.handleFocus = e => {
                        let {
                            current: t
                        } = this._masonryRef;
                        if (null == t) return;
                        let s = t.getCoordsMap()[e];
                        null != s && (t.scrollIntoViewRect({
                            start: s.top - 10,
                            end: s.top + s.height + 10
                        }), this.setState({
                            focusedId: e
                        }))
                    }, this.handleSelect = e => {
                        let t;
                        let {
                            data: s
                        } = this.props, r = s.findIndex(t => C(t) === e); - 1 !== r && (t = s[r]), null != t && this.selectItem(t, r)
                    }, this.handleClickItem = (e, t) => {
                        this.selectItem(e, t)
                    }, this.handleScroll = () => {
                        let {
                            resultQuery: e
                        } = this.props, {
                            current: t
                        } = this._masonryRef;
                        if (null == t) return;
                        let {
                            scrollTop: s,
                            scrollHeight: r
                        } = t.getScrollerState();
                        r - s <= v && (e !== this.prevResultQuery && (0, f.fetchSuggestions)(e), this.prevResultQuery = e)
                    }, this.renderItem = (e, t, s, n) => {
                        if (e > 0) return null;
                        let {
                            focusedId: l
                        } = this.state, i = this.props.data[t];
                        return null == i ? null : (0, r.jsx)(P, {
                            item: i,
                            index: t,
                            format: i.format,
                            src: i.src,
                            coords: s,
                            onClick: this.handleClickItem,
                            renderExtras: () => (0, r.jsx)(g.default, {
                                className: S.favButton,
                                ...i
                            }),
                            focused: C(i) === l,
                            imagePool: this.props.imagePool,
                            videoPool: this.props.videoPool
                        }, n)
                    }, this.getItemHeight = (e, t, s) => {
                        if (e > 0) return 0;
                        let r = this.props.data[t];
                        if (null == r) return 0;
                        let n = r.height / r.width;
                        return s * n
                    }, this.getItemKey = (e, t) => {
                        var s;
                        if (e > 0) return null;
                        let r = this.props.data[t];
                        return null != r ? null !== (s = r.id) && void 0 !== s ? s : r.src : null
                    }, this.renderSection = (e, t, s) => {
                        let {
                            onSelectSuggestion: l,
                            suggestions: i
                        } = this.props;
                        return 1 === e ? (0, r.jsx)("div", {
                            className: S.endContainer,
                            style: t,
                            children: i.length > 0 ? (0, r.jsxs)(n.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: S.endText,
                                    children: y.default.Messages.GIF_PICKER_RELATED_SEARCH
                                }), (0, r.jsx)("div", {
                                    className: S.searchSuggestions,
                                    children: i.map(e => (0, r.jsx)(h.Button, {
                                        look: h.Button.Looks.OUTLINED,
                                        color: h.Button.Colors.PRIMARY,
                                        size: h.Button.Sizes.SMALL,
                                        className: S.searchSuggestion,
                                        onClick: () => {
                                            l(e)
                                        },
                                        children: e
                                    }, e))
                                })]
                            }) : null
                        }, s) : null
                    }, this.renderContent = (e, t, s) => {
                        let {
                            data: n,
                            resultQuery: l,
                            query: i,
                            resultType: a
                        } = this.props;
                        return 0 === n.length && (l !== i || a === R.GIFPickerResultTypes.TRENDING_GIFS) ? (0, r.jsx)(h.MasonryList, {
                            fade: !0,
                            className: S.results,
                            sections: [T.length],
                            columns: e,
                            itemGutter: 12,
                            getItemKey: x,
                            getItemHeight: G,
                            renderItem: A,
                            chunkSize: 128
                        }, l) : (0, r.jsx)(h.MasonryList, {
                            ref: this._masonryRef,
                            fade: !0,
                            itemGutter: 12,
                            className: S.results,
                            columns: e,
                            sections: [n.length, 0],
                            getItemKey: this.getItemKey,
                            getItemHeight: this.getItemHeight,
                            renderItem: this.renderItem,
                            getSectionHeight: this.getSectionHeight,
                            renderSection: this.renderSection,
                            onScroll: this.handleScroll,
                            chunkSize: 128
                        }, "".concat(l, "-").concat(null != a ? a : ""))
                    }, this.getItemGrid = () => {
                        let {
                            current: e
                        } = this._masonryRef;
                        return null != e ? e.getItemGrid() : []
                    }, this.getCoordsMap = () => {
                        let {
                            current: e
                        } = this._masonryRef;
                        return null != e ? e.getCoordsMap() : {}
                    }
                }
            }

            function w() {
                let {
                    renderWindow: e
                } = n.useContext(I.default), t = e.document, [s] = n.useState(() => new u.default(() => t.createElement("img"), e => {
                    e.onload = null, e.src = ""
                })), [r] = n.useState(() => new u.default(() => {
                    let e = t.createElement("video");
                    return e.className = S.gif, e.autoplay = !0, e.loop = !0, e.muted = !0, e.preload = "auto", e.controls = !1, e
                }, e => {
                    e.src = "", e.oncanplay = null;
                    let {
                        parentNode: t
                    } = e;
                    null != t && t.removeChild(e)
                }));
                return {
                    imagePool: s,
                    videoPool: r
                }
            }
            var O = function(e) {
                let t = w();
                return (0, r.jsx)(M, {
                    ...e,
                    ...t
                })
            }
        },
        476714: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            }), s("222007");
            var r = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                a = s("77078"),
                o = s("960476"),
                u = s("140331"),
                c = s("118849"),
                d = s("671434"),
                h = s("659500"),
                f = s("49111"),
                p = s("782340"),
                m = s("420804"),
                I = n.memo(function(e) {
                    let {
                        width: t,
                        height: s,
                        src: l,
                        url: I,
                        format: g,
                        className: _
                    } = e, [E, R] = n.useState(!1), y = (0, u.useIsFavoriteGIF)(I), S = y ? p.default.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : p.default.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, F = y ? d.default : c.default;
                    n.useEffect(() => {
                        if (!E) return;
                        let e = setTimeout(() => {
                            R(!1)
                        }, 500);
                        return () => clearTimeout(e)
                    }, [E]);
                    let v = e => {
                        e.preventDefault(), e.stopPropagation(), R(!0), y ? (0, o.removeFavoriteGIF)(I) : ((0, o.addFavoriteGIF)({
                            url: I,
                            src: l,
                            width: t,
                            height: s,
                            format: g
                        }), h.ComponentDispatch.dispatch(f.ComponentActions.FAVORITE_GIF))
                    };
                    return (0, r.jsx)(a.Tooltip, {
                        text: S,
                        children: e => (0, r.jsx)(a.Clickable, {
                            ...e,
                            className: i(_, m.size, m.gifFavoriteButton, {
                                [m.selected]: y,
                                [m.showPulse]: E
                            }),
                            onMouseDown: e => e.preventDefault(),
                            onClick: v,
                            onDoubleClick: e => e.preventDefault(),
                            children: (0, r.jsx)(F, {
                                className: m.icon
                            })
                        })
                    })
                })
        },
        510849: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return y
                }
            }), s("781738"), s("222007");
            var r = s("446674"),
                n = s("713349"),
                l = s("913144"),
                i = s("240292"),
                a = s("49111"),
                o = s("782340");
            let u = {
                    MP4: "mp4",
                    TINYMP4: "tinymp4",
                    NANOMP4: "nanomp4",
                    WEBM: "webm",
                    TINYWEBM: "tinywebm",
                    NANOWEBM: "nanowebm"
                },
                c = {
                    FIXED_HEIGHT_MP4: "fixed_height.mp4",
                    FIXED_HEIGHT_SMALL_MP4: "fixed_height_small.mp4",
                    FIXED_WIDTH_MP4: "fixed_width.mp4",
                    FIXED_WIDTH_SMALL_MP4: "fixed_width_small.mp4",
                    DOWNSIZED_SMALL_MP4: "downsized_small.mp4",
                    ORIGINAL_MP4: "original.mp4"
                },
                d = u.MP4,
                h = null,
                f = "",
                p = "",
                m = [],
                I = [],
                g = [],
                _ = [];

            function E(e) {
                return e.replace(/^https?:/, "")
            }
            class R extends r.default.Store {
                getAnalyticsID() {
                    return h
                }
                getQuery() {
                    return f
                }
                getResultQuery() {
                    return p
                }
                getResultItems() {
                    return m
                }
                getTrendingCategories() {
                    return I
                }
                getSelectedFormat() {
                    return d
                }
                getSuggestions() {
                    return g
                }
                getTrendingSearchTerms() {
                    return _
                }
            }
            R.displayName = "GIFPickerViewStore";
            var y = new R(l.default, {
                GIF_PICKER_INITIALIZE: function(e) {
                    h = e.analyticsID
                },
                GIF_PICKER_QUERY: function(e) {
                    "" === (f = e.query) && (p = "", m = [], g = [])
                },
                GIF_PICKER_QUERY_SUCCESS: function(e) {
                    if (null != e.query && f === p) return !1;
                    null != e.query && (p = e.query), m = e.items.map(e => {
                        let {
                            width: t,
                            height: s,
                            src: r,
                            gif_src: l,
                            url: i,
                            id: a
                        } = e;
                        return {
                            width: t,
                            height: s,
                            src: E(r),
                            gifSrc: E(l),
                            url: i,
                            id: a,
                            format: ! function(e) {
                                switch (e) {
                                    case c.FIXED_HEIGHT_MP4:
                                    case c.FIXED_HEIGHT_SMALL_MP4:
                                    case c.FIXED_WIDTH_MP4:
                                    case c.FIXED_WIDTH_SMALL_MP4:
                                    case c.DOWNSIZED_SMALL_MP4:
                                    case c.ORIGINAL_MP4:
                                    case u.MP4:
                                    case u.TINYMP4:
                                    case u.NANOMP4:
                                    case u.WEBM:
                                    case u.TINYWEBM:
                                    case u.NANOWEBM:
                                        return !0;
                                    default:
                                        return !1
                                }
                            }(d) ? n.GIFType.IMAGE : n.GIFType.VIDEO
                        }
                    })
                },
                GIF_PICKER_QUERY_FAILURE: function(e) {
                    let {
                        query: t
                    } = e;
                    if (null == t) return !1;
                    p = t, m = []
                },
                GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
                    let t = e.trendingCategories,
                        s = null != e.trendingGIFPreview ? [{
                            type: a.GIFPickerResultTypes.TRENDING_GIFS,
                            icon: i.default,
                            name: o.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                            src: E(e.trendingGIFPreview.src),
                            format: n.GIFType.IMAGE
                        }] : [];
                    I = [...s, ...t.map(e => ({
                        ...e,
                        src: E(e.src),
                        type: a.GIFPickerResultTypes.TRENDING_CATEGORY,
                        format: n.GIFType.VIDEO
                    }))]
                },
                GIF_PICKER_SUGGESTIONS_SUCCESS: function(e) {
                    let {
                        items: t
                    } = e;
                    g = t
                },
                GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function(e) {
                    let {
                        items: t
                    } = e;
                    _ = t
                }
            })
        },
        531470: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("891722"),
                i = s("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: n = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                        })
                    })
                }, l.ArrowSmallLeftIcon, void 0, {
                    size: 24
                })
        },
        118849: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("809803"),
                i = s("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M19.6,9l-4.2-0.4c-0.4,0-0.7-0.3-0.8-0.6l-1.6-3.9c-0.3-0.8-1.5-0.8-1.8,0L9.4,8.1C9.3,8.4,9,8.6,8.6,8.7L4.4,9 c-0.9,0.1-1.2,1.2-0.6,1.8L7,13.6c0.3,0.2,0.4,0.6,0.3,1l-1,4.1c-0.2,0.9,0.7,1.5,1.5,1.1l3.6-2.2c0.3-0.2,0.7-0.2,1,0l3.6,2.2 c0.8,0.5,1.7-0.2,1.5-1.1l-1-4.1c-0.1-0.4,0-0.7,0.3-1l3.2-2.8C20.9,10.2,20.5,9.1,19.6,9z M12,15.4l-3.8,2.3l1-4.3l-3.3-2.9 l4.4-0.4l1.7-4l1.7,4l4.4,0.4l-3.3,2.9l1,4.3L12,15.4z"
                        })
                    })
                }, l.StarOutlineIcon, void 0, {
                    size: 16
                })
        },
        671434: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("825701"),
                i = s("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, i.default)(a),
                        viewBox: "0 0 24 24",
                        width: t,
                        height: s,
                        children: [(0, r.jsx)("path", {
                            d: "M0,0H24V24H0Z",
                            fill: "none"
                        }), (0, r.jsx)("path", {
                            fill: n,
                            className: l,
                            d: "M12.5,17.6l3.6,2.2a1,1,0,0,0,1.5-1.1l-1-4.1a1,1,0,0,1,.3-1l3.2-2.8A1,1,0,0,0,19.5,9l-4.2-.4a.87.87,0,0,1-.8-.6L12.9,4.1a1.05,1.05,0,0,0-1.9,0l-1.6,4a1,1,0,0,1-.8.6L4.4,9a1.06,1.06,0,0,0-.6,1.8L7,13.6a.91.91,0,0,1,.3,1l-1,4.1a1,1,0,0,0,1.5,1.1l3.6-2.2A1.08,1.08,0,0,1,12.5,17.6Z"
                        })]
                    })
                }, l.StarIcon, void 0, {
                    size: 16
                })
        },
        240292: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("308472"),
                i = s("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: n = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            transform: "translate(2 6)",
                            children: (0, r.jsx)("path", {
                                className: l,
                                fill: n,
                                d: "M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"
                            })
                        })
                    })
                }, l.AnalyticsIcon, void 0, {
                    size: 24
                })
        },
        564703: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                calculateAnalyticsMetadata: function() {
                    return n
                }
            });
            var r = s("49111");

            function n(e, t, s) {
                let n = null != t ? {
                        [t]: 1
                    } : {},
                    {
                        offset: l,
                        limit: i,
                        results: a,
                        totalResults: o
                    } = null != s ? s : {};
                return {
                    search_type: r.SearchTypes.GIF,
                    load_id: e,
                    limit: i,
                    offset: l,
                    page: null != i && null != l ? Math.floor(l / i) + 1 : 1,
                    total_results: o,
                    page_results: null != a ? a.length : null,
                    num_modifiers: Object.keys(n).length,
                    modifiers: n
                }
            }
        },
        42641: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ArrowSmallLeftIcon: function() {
                    return i
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("82169");
            let i = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: i = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M3.3 11.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
                        className: a
                    })
                })
            }
        },
        261833: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                StarOutlineIcon: function() {
                    return i
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("82169");
            let i = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: i = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M2.07 10.94a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83c.37-1.15 2-1.15 2.37 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4L12 18.16l-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6Zm11.55-.25h5.26l-4.25 3.09 1.62 5-4.25-3.1-4.25 3.1 1.62-5-4.25-3.1h5.26l1.62-5 1.62 5Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        217982: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            }), s("424973");
            var r = class e {
                getElement() {
                    return 0 === this._elements.length ? this._createElement() : this._elements.pop()
                }
                poolElement(e) {
                    this._cleanElement(e), this._elements.push(e)
                }
                clearPool() {
                    this._elements.length = 0
                }
                constructor(e, t) {
                    this._elements = [], this._createElement = e, this._cleanElement = t
                }
            }
        }
    }
]);
//# sourceMappingURL=58533.88a371a0f9e067b09d16.js.map