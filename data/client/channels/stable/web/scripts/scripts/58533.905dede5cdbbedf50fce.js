(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58533"], {
        328269: function(e, t, r) {
            "use strict";
            e.exports = r.p + "746284e4cfc7cd6c5e15.svg"
        },
        958787: function(e, t, r) {
            "use strict";
            e.exports = r.p + "80b04934274a1d198741.svg"
        },
        873390: function(e, t, r) {
            "use strict";
            e.exports = r.p + "6836d88af9197cbd4cbb.svg"
        },
        117262: function(e, t, r) {
            "use strict";
            e.exports = r.p + "c62fd6931adca229aac8.svg"
        },
        960476: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                trackSearchStart: function() {
                    return y
                },
                trackSearchResultViewed: function() {
                    return v
                },
                search: function() {
                    return C
                },
                fetchSuggestions: function() {
                    return A
                },
                resetSearch: function() {
                    return G
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
                    return k
                }
            }), r("781738");
            var s = r("917351"),
                n = r.n(s),
                l = r("748820"),
                i = r("872717"),
                a = r("713349"),
                o = r("913144"),
                u = r("716241"),
                c = r("787336"),
                d = r("915639"),
                h = r("872173"),
                f = r("510849"),
                m = r("599110"),
                p = r("564703"),
                I = r("253981"),
                g = r("404118"),
                _ = r("49111"),
                E = r("397336"),
                R = r("782340");
            let S = /-/g;

            function y(e) {
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

            function v(e, t) {
                let {
                    startTime: r,
                    ...s
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = {
                    offset: 0,
                    limit: null,
                    totalResults: e.length
                }, l = (0, p.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
                    ...n,
                    ...s,
                    results: e
                }), i = null == r ? {} : {
                    load_duration_ms: Date.now() - r
                };
                u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    ...l,
                    ...i
                })
            }

            function F(e, t, r) {
                let s = Date.now();
                y(t), i.default.get({
                    url: _.Endpoints.GIFS_SEARCH,
                    query: {
                        q: e,
                        media_format: f.default.getSelectedFormat(),
                        provider: "tenor",
                        locale: d.default.locale,
                        limit: r
                    },
                    oldFormErrors: !0
                }).then(n => {
                    let l = n.body;
                    v(l, t, {
                        startTime: s,
                        limit: r
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
            let T = n.debounce(F, 250);

            function C(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = arguments.length > 3 ? arguments[3] : void 0;
                "" === e ? G() : (o.default.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: e
                }), r ? F(e, t, s) : T(e, t, s))
            }

            function A(e) {
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
                    let r = t.body;
                    o.default.dispatch({
                        type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                        query: e,
                        items: r
                    })
                })
            }

            function G() {
                o.default.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: ""
                })
            }

            function x(e) {
                let {
                    type: t,
                    index: r,
                    offset: s,
                    limit: n,
                    results: l,
                    totalResults: a,
                    query: o,
                    gifId: c
                } = e, d = (0, p.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
                    offset: s,
                    limit: n,
                    results: l,
                    totalResults: a
                });
                u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                    ...d,
                    index_num: r,
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
                let e = (0, l.v4)().replace(S, "");
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
                        categories: r,
                        gifs: s
                    } = t;
                    o.default.dispatch({
                        type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                        trendingCategories: r,
                        trendingGIFPreview: s[0]
                    })
                })
            }

            function M(e) {
                let t = Date.now();
                y(_.GIFPickerResultTypes.TRENDING_GIFS), i.default.get({
                    url: _.Endpoints.GIFS_TRENDING_GIFS,
                    query: {
                        media_format: f.default.getSelectedFormat(),
                        provider: "tenor",
                        locale: d.default.locale,
                        limit: e
                    },
                    oldFormErrors: !0
                }).then(r => {
                    let {
                        body: s
                    } = r;
                    v(s, _.GIFPickerResultTypes.TRENDING_GIFS, {
                        startTime: t,
                        limit: e
                    }), o.default.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        items: s
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
                h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
                    var r;
                    let s = null !== (r = n.max(Object.values(t.gifs).map(e => e.order))) && void 0 !== r ? r : 0;
                    t.gifs[w(e.url)] = {
                        ...e,
                        order: s + 1
                    };
                    let l = a.FavoriteGIFs.toBinary(t).length;
                    if (l > E.MAX_FAVORITE_GIFS_SIZE) return g.default.show({
                        title: R.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                        body: R.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
                    }), !1;
                    let i = n.size(t.gifs);
                    i > 2 && (t.hideTooltip = !0), m.default.track(_.AnalyticEvents.GIF_FAVORITED, {
                        total_num_favorited: i
                    })
                }, E.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function k(e) {
                h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
                    e in t.gifs ? delete t.gifs[e] : delete t.gifs[w(e)], m.default.track(_.AnalyticEvents.GIF_UNFAVORITED, {
                        total_num_favorited: n.size(t.gifs)
                    })
                }, E.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        718302: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            }), r("222007");
            var s, n, l, i = r("884691"),
                a = r("49111");
            (l = s || (s = {})).ARROW_UP = "ARROW_UP", l.ARROW_DOWN = "ARROW_DOWN", l.ARROW_LEFT = "ARROW_LEFT", l.ARROW_RIGHT = "ARROW_RIGHT";
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
                        onFocus: r
                    } = this.props, {
                        focusedColumn: s,
                        focusedRow: n
                    } = this.state;
                    if (null == e) return;
                    let l = t();
                    if (null == l) return;
                    let i = this.getNext(l, s, n, e);
                    this.setState({
                        focusedColumn: i.column,
                        focusedRow: i.row
                    }, () => {
                        let e = this.calculateFocusedItem();
                        null != e && null != r && r(e)
                    })
                }
                getNext(e, t, r, s) {
                    let n, l, i, a;
                    if (null == t || null == r) l = 0, i = 0, n = {
                        column: 0,
                        row: 0
                    };
                    else switch (l = t, i = r, s) {
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
                    let r;
                    let s = this.props.getCoordsMap()[e];
                    if (null == s) return;
                    let n = Number.MAX_SAFE_INTEGER;
                    for (let e = 0; e < t.length; e++) {
                        let l = this.props.getCoordsMap()[t[e]];
                        if (null == l) continue;
                        let i = Math.abs(l.top - s.top);
                        if (i < n) n = i, r = e;
                        else break
                    }
                    return r
                }
                calculateFocusedItem() {
                    let {
                        getItemGrid: e
                    } = this.props, {
                        focusedRow: t,
                        focusedColumn: r
                    } = this.state, s = e();
                    return null == s || null == r || null == t || null == s[r] || null == s[r][t] ? null : s[r][t]
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
                                let r = this.calculateFocusedItem();
                                null != r && null != t && (e.preventDefault(), e.stopPropagation(), t(r))
                        }
                    }, this.wrapPosition = (e, t, r, s) => {
                        var n;
                        let l = e.length,
                            i = Math.max(r * l + t + s, 0) % l,
                            a = null !== (n = this.calculateClosest(e[t][r], e[i])) && void 0 !== n ? n : r,
                            o = 0;
                        return s < 0 && i > t && (o = -1), s > 0 && i < t && (o = 1), {
                            column: i,
                            row: a + o
                        }
                    }
                }
            }
        },
        96386: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("414456"),
                l = r.n(n),
                i = r("21538"),
                a = e => {
                    let {
                        message: t,
                        className: r,
                        noResultsImageURL: n,
                        forceLightTheme: a,
                        suggestions: o
                    } = e;
                    return (0, s.jsx)("div", {
                        className: l({
                            [i.forceLightTheme]: a
                        }, r),
                        children: (0, s.jsxs)("div", {
                            className: i.wrapper,
                            children: [(0, s.jsx)("div", {
                                className: i.sadImage,
                                style: null != n ? {
                                    backgroundImage: "url(".concat(n, ")")
                                } : {}
                            }), (0, s.jsx)("div", {
                                children: t
                            }), o]
                        })
                    })
                }
        },
        737960: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var s = r("37983"),
                n = r("884691"),
                l = r("308723");

            function i(e) {
                return n.forwardRef(function(t, r) {
                    let i = n.useRef();
                    return n.useImperativeHandle(r, () => ({
                        triggerResize: () => {
                            var e;
                            null === (e = i.current) || void 0 === e || e.onResize()
                        }
                    })), (0, s.jsx)(l.default, {
                        ref: i,
                        children: r => {
                            let {
                                width: n,
                                height: l
                            } = r;
                            return (0, s.jsx)(e, {
                                ...t,
                                width: n,
                                height: l
                            })
                        }
                    })
                })
            }
        },
        891722: function(e, t, r) {
            "use strict";
            r.r(t);
            var s = r("42641");
            r.es(s, t)
        },
        809803: function(e, t, r) {
            "use strict";
            r.r(t);
            var s = r("261833");
            r.es(s, t)
        },
        538282: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
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
                    return m
                },
                setSearchQuery: function() {
                    return p
                },
                useExpressionPickerStore: function() {
                    return I
                }
            });
            var s = r("995008"),
                n = r.n(s),
                l = r("308503"),
                i = r("136759"),
                a = r("13030");
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
                        var r;
                        c(null !== (r = t.lastActiveView) && void 0 !== r ? r : a.ExpressionPickerViewType.EMOJI, e)
                    } else d()
                },
                f = (e, t) => {
                    u.getState().activeView === e ? d() : c(e, t)
                },
                m = e => {
                    u.setState({
                        activeView: e,
                        lastActiveView: u.getState().activeView
                    })
                },
                p = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    u.setState({
                        searchQuery: e,
                        isSearchSuggestion: t
                    })
                },
                I = u
        },
        140331: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
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
            var s = r("884691"),
                n = r("917351"),
                l = r.n(n),
                i = r("42507");
            let a = {};

            function o() {
                var e, t;
                let r = (0, i.useFrecencySettings)();
                return null !== (t = null === (e = r.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : a
            }

            function u() {
                let e = o();
                return s.useMemo(() => l(e).map((e, t) => ({
                    ...e,
                    url: t
                })).sortBy("order").reverse().value(), [e])
            }

            function c(e) {
                let t = o();
                return null != t[e]
            }
        },
        354553: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            }), r("222007");
            var s, n = r("884691");

            function l(e, t, r) {
                return Math.min(Math.max(Math.floor(e / t), 1), r)
            }
            var i = (0, r("737960").default)(((s = class extends n.Component {
                static getDerivedStateFromProps(e, t) {
                    let {
                        width: r,
                        desiredItemWidth: s,
                        maxColumns: n
                    } = e, i = l(r, s, n);
                    return i !== t.columns ? {
                        columns: i
                    } : null
                }
                render() {
                    let {
                        width: e,
                        height: t,
                        children: r
                    } = this.props, {
                        columns: s
                    } = this.state;
                    return r(s, e, t)
                }
                constructor(...e) {
                    super(...e), this.state = {
                        columns: l(this.props.width, this.props.desiredItemWidth, this.props.maxColumns)
                    }
                }
            }).defaultProps = {
                desiredItemWidth: 200
            }, s))
        },
        873622: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return T
                }
            }), r("222007");
            var s = r("37983"),
                n = r("884691"),
                l = r("414456"),
                i = r.n(l),
                a = r("446674"),
                o = r("77078"),
                u = r("913144"),
                c = r("960476"),
                d = r("538282"),
                h = r("510849"),
                f = r("145131"),
                m = r("810567"),
                p = r("531470"),
                I = r("140331"),
                g = r("588155"),
                _ = r("762518"),
                E = r("49111"),
                R = r("115279"),
                S = r("782340"),
                y = r("901137");
            let v = e => e.stopPropagation();
            class F extends n.PureComponent {
                componentDidMount() {
                    c.initializeSearch(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, E.GIFPickerResultTypes.SEARCH)
                }
                componentWillUnmount() {
                    u.default.wait(() => c.resetSearch()), document.removeEventListener("keydown", this.backToFrontPage)
                }
                search(e, t, r) {
                    c.search(e, t, r), "" === e ? this.setState({
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
                            return (0, s.jsx)(o.FormTitle, {
                                tag: "h5",
                                className: y.searchHeader,
                                children: S.default.Messages.CATEGORY_FAVORITE
                            });
                        case E.GIFPickerResultTypes.TRENDING_GIFS:
                            return (0, s.jsx)(o.FormTitle, {
                                tag: "h5",
                                className: y.searchHeader,
                                children: S.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
                            });
                        default:
                            return (0, s.jsx)(m.default, {
                                className: y.searchBar,
                                size: m.default.Sizes.MEDIUM,
                                query: e,
                                onChange: this.handleChangeQuery,
                                onClear: this.handleClearQuery,
                                placeholder: S.default.Messages.SEARCH_TENOR,
                                "aria-label": S.default.Messages.SEARCH_TENOR,
                                ref: this.searchBarRef,
                                autoFocus: !0
                            })
                    }
                }
                renderHeader() {
                    let {
                        resultType: e
                    } = this.state, t = null;
                    return null != e && (t = (0, s.jsx)(o.Clickable, {
                        onClick: this.handleClearQuery,
                        className: y.backButton,
                        "aria-label": S.default.Messages.BACK,
                        children: (0, s.jsx)(p.default, {
                            title: S.default.Messages.BACK
                        })
                    })), (0, s.jsxs)(f.default, {
                        align: f.default.Align.CENTER,
                        children: [t, this.renderHeaderContent()]
                    })
                }
                renderContent() {
                    let {
                        resultItems: e,
                        resultQuery: t,
                        query: r,
                        favorites: n,
                        searchOffset: l,
                        searchLimit: i,
                        searchTotalResults: a,
                        suggestions: o,
                        hideFavorites: u
                    } = this.props, {
                        resultType: c
                    } = this.state;
                    return null == c ? (0, s.jsx)(g.default, {
                        hideFavoritesTile: u,
                        onSelectItem: this.handleSelectItem
                    }) : (0, s.jsx)(_.default, {
                        data: c === E.GIFPickerResultTypes.FAVORITES ? n : e,
                        onSelectGIF: this.handleSelectGIF,
                        resultType: c,
                        resultQuery: t,
                        query: r,
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
                    return (0, s.jsxs)("div", {
                        id: R.GIF_PICKER_TAB_PANEL_ID,
                        role: "tabpanel",
                        "aria-labelledby": R.GIF_PICKER_TAB_ID,
                        className: i(y.container, e),
                        onClick: v,
                        ref: t,
                        children: [(0, s.jsx)("div", {
                            className: y.header,
                            children: this.renderHeader()
                        }), (0, s.jsx)("div", {
                            className: y.content,
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
                            current: r
                        } = this.searchBarRef;
                        switch (e) {
                            case E.GIFPickerResultTypes.TRENDING_CATEGORY:
                                c.search(t, E.GIFPickerResultTypes.TRENDING_CATEGORY, !0), null != r && r.focus();
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
                    query: r,
                    resultQuery: n,
                    resultItems: l,
                    suggestions: i
                } = (0, a.useStateFromStoresObject)([h.default], () => ({
                    query: h.default.getQuery(),
                    resultQuery: h.default.getResultQuery(),
                    resultItems: h.default.getResultItems(),
                    suggestions: h.default.getSuggestions()
                })), o = (0, d.useExpressionPickerStore)(e => e.searchQuery), u = (0, I.useSortedFavoriteGIFs)();
                return (0, s.jsx)(F, {
                    ...e,
                    forwardedRef: t,
                    query: null != o && "" !== o ? o : r,
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
        588155: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return T
                }
            }), r("222007");
            var s = r("37983"),
                n = r("884691"),
                l = r("917351"),
                i = r.n(l),
                a = r("446674"),
                o = r("713349"),
                u = r("669491"),
                c = r("77078"),
                d = r("960476"),
                h = r("718302"),
                f = r("510849"),
                m = r("671434"),
                p = r("117362"),
                I = r("140331"),
                g = r("354553"),
                _ = r("4445"),
                E = r("762518"),
                R = r("49111"),
                S = r("782340"),
                y = r("138667");
            let v = (e, t) => (0, s.jsx)(_.CategoryColumn, {
                columns: e
            }, t);
            class F extends n.PureComponent {
                componentDidMount() {
                    0 === this.props.trendingCategories.length && (0, d.fetchTrending)()
                }
                getData() {
                    return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile)
                }
                renderCategoryExtras(e) {
                    let {
                        name: t,
                        icon: r,
                        type: l
                    } = e;
                    return (0, s.jsxs)(n.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: l === R.GIFPickerResultTypes.FAVORITES ? y.categoryFadeBlurple : y.categoryFade
                        }), (0, s.jsxs)("div", {
                            className: y.categoryText,
                            children: [null != r ? (0, s.jsx)(r, {
                                className: y.categoryIcon
                            }) : null, (0, s.jsx)("span", {
                                className: y.categoryName,
                                children: t
                            })]
                        })]
                    })
                }
                render() {
                    return (0, s.jsx)(h.default, {
                        getItemGrid: this.getItemGrid,
                        getCoordsMap: this.getCoordsMap,
                        onFocus: this.handleFocus,
                        onSelect: this.handleSelect,
                        children: (0, s.jsx)(g.default, {
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
                            let r = i.sample(i.values(e));
                            return {
                                type: R.GIFPickerResultTypes.FAVORITES,
                                name: S.default.Messages.CATEGORY_FAVORITE,
                                icon: m.default,
                                src: null != r ? r.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                                format: null !== (t = null == r ? void 0 : r.format) && void 0 !== t ? t : o.GIFType.IMAGE
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
                        let r = t.getCoordsMap()[e];
                        null != r && (t.scrollIntoViewRect({
                            start: r.top - 10,
                            end: r.top + r.height + 10
                        }), this.setState({
                            focusedId: e
                        }))
                    }, this.handleSelect = e => {
                        let {
                            onSelectItem: t
                        } = this.props, r = this.getData().find(t => t.name === e);
                        null != r && null != t && t(r.type, r.name)
                    }, this.getItemKey = (e, t) => {
                        if (e > 0) return null;
                        let r = this.getData()[t];
                        return null != r ? r.name : null
                    }, this.memoizedData = (0, p.cachedFunction)(function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return r ? [...t] : [e, ...t]
                    }), this.renderItem = (e, t, r, n) => {
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
                        return (0, s.jsx)(E.GIFPickerSearchItem, {
                            format: l.format,
                            color: u.default.unsafe_rawColors.PRIMARY_800.css,
                            src: l.src,
                            item: l,
                            index: t,
                            coords: r,
                            onClick: () => i(l.type, l.name),
                            renderExtras: this.renderCategoryExtras,
                            focused: l.name === c,
                            imagePool: a,
                            videoPool: o
                        }, n)
                    }, this.renderContent = (e, t, r) => {
                        let {
                            trendingCategories: n
                        } = this.props;
                        return 0 === n.length ? (0, s.jsx)(_.ResultsLoader, {
                            columns: e,
                            width: t,
                            renderColumn: v
                        }) : (0, s.jsx)(c.MasonryList, {
                            ref: this._masonryRef,
                            fade: !0,
                            className: y.container,
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
                    r = (0, I.useFavoriteGIFs)(),
                    n = (0, E.useElementPools)();
                return (0, s.jsx)(F, {
                    ...e,
                    ...n,
                    trendingCategories: t,
                    favorites: r
                })
            }
        },
        4445: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                CategoryColumn: function() {
                    return f
                },
                ResultsLoader: function() {
                    return m
                }
            }), r("222007"), r("808653");
            var s = r("37983"),
                n = r("884691"),
                l = r("917351"),
                i = r.n(l),
                a = r("458960"),
                o = r("669491"),
                u = r("982939");
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
                    return (0, s.jsx)("div", {
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
                    return (0, s.jsxs)(a.default.div, {
                        className: u.column,
                        style: this.getAnimatedStyle(),
                        children: [e.map((e, t) => (0, s.jsx)(d, {
                            height: e
                        }, t)), e.map((e, t) => (0, s.jsx)(d, {
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
                                height: r
                            }
                        } = this;
                        t.setValue(e > 0 ? 0 : -r / 2 + 12), a.default.timing(t, {
                            toValue: e > 0 ? -r / 2 + 12 : 0,
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
                return (0, s.jsx)("div", {
                    className: u.column,
                    style: {
                        width: "".concat(100 / t, "%")
                    },
                    children: [, , , , ].fill(null).map((e, t) => (0, s.jsx)("div", {
                        className: u.categoryLoader
                    }, t))
                })
            };
            class m extends n.PureComponent {
                render() {
                    let {
                        columns: e,
                        renderColumn: t
                    } = this.props;
                    return (0, s.jsx)("div", {
                        className: u.container,
                        children: Array(e).fill(null).map((r, s) => t(e, s))
                    })
                }
            }
        },
        762518: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GIFPickerSearchItem: function() {
                    return P
                },
                useElementPools: function() {
                    return w
                },
                default: function() {
                    return O
                }
            }), r("222007");
            var s = r("37983"),
                n = r("884691"),
                l = r("414456"),
                i = r.n(l),
                a = r("917351"),
                o = r.n(a),
                u = r("217982"),
                c = r("713349"),
                d = r("669491"),
                h = r("77078"),
                f = r("960476"),
                m = r("718302"),
                p = r("96386"),
                I = r("244201"),
                g = r("476714"),
                _ = r("671434"),
                E = r("354553"),
                R = r("49111"),
                S = r("782340"),
                y = r("186046");
            let v = [d.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
                F = 1220,
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

            function A(e, t) {
                let r = T[t];
                return null == r ? 0 : r.height
            }

            function G(e, t, r, n) {
                if (!(e > 0)) return null == T[t] ? null : (0, s.jsx)("div", {
                    className: y.placeholder,
                    style: {
                        animationDelay: "".concat(75 * t, "ms"),
                        ...r
                    }
                }, n)
            }

            function x(e, t) {
                var r, s;
                return e > 0 ? "" : null !== (s = null === (r = T[t]) || void 0 === r ? void 0 : r.id) && void 0 !== s ? s : ""
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
                                width: r,
                                height: s
                            },
                            videoPool: n
                        },
                        ref: l
                    } = this;
                    if (e !== c.GIFType.VIDEO || null == l) return;
                    let i = n.getElement();
                    i.oncanplay = this.handleCanPlay, i.src = t, i.width = r, i.height = s, l.appendChild(i), this._video = i
                }
                componentDidUpdate(e) {
                    let {
                        width: t,
                        height: r
                    } = this.props.coords;
                    null != this._video && (e.coords.width !== t || e.coords.height !== r) && (this._video.width = t, this._video.height = r)
                }
                componentWillUnmount() {
                    this._mounted = !1;
                    let {
                        _image: e,
                        _video: t
                    } = this, {
                        imagePool: r,
                        videoPool: s
                    } = this.props;
                    null != e && (this._image = null, r.poolElement(e)), null != t && (this._video = null, s.poolElement(t))
                }
                renderGIF() {
                    let {
                        src: e,
                        coords: {
                            width: t,
                            height: r
                        }
                    } = this.props, {
                        loaded: n
                    } = this.state;
                    return n ? (0, s.jsx)("img", {
                        src: e,
                        width: t,
                        height: r,
                        className: y.gif,
                        alt: ""
                    }) : null
                }
                render() {
                    let {
                        item: e,
                        renderExtras: t,
                        format: r,
                        coords: n,
                        focused: l
                    } = this.props, {
                        color: a,
                        loaded: o
                    } = this.state;
                    return (0, s.jsxs)(h.Clickable, {
                        tabIndex: -1,
                        innerRef: e => {
                            this.ref = e
                        },
                        className: i(y.result, {
                            [y.focused]: l
                        }),
                        onClick: this.handleClick,
                        style: {
                            backgroundColor: o ? void 0 : a,
                            ...n
                        },
                        children: [N(r) ? null : this.renderGIF(), null != t ? t(e) : null]
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
                            index: r
                        } = this.props;
                        null != e && e(t, r)
                    };
                    let {
                        format: t,
                        color: r,
                        imagePool: s
                    } = this.props;
                    this.state = {
                        color: null == r ? o.sample(v) : r,
                        loaded: !1
                    }, !N(t) && (this._image = s.getElement(), this._image.onload = () => this.setState({
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
                        onSelectGIF: r,
                        resultType: s,
                        data: n,
                        resultQuery: l
                    } = this.props;
                    null != r && r(e), (0, f.trackSelectGIF)({
                        type: s,
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
                    return (0, s.jsx)("div", {
                        className: y.emptyHint,
                        children: null != e ? (0, s.jsxs)("div", {
                            className: y.emptyHintCard,
                            children: [t ? (0, s.jsx)(_.default, {
                                className: y.emptyHintFavorite
                            }) : null, (0, s.jsx)("div", {
                                className: y.emptyHintText,
                                children: e
                            })]
                        }) : (0, s.jsx)("div", {
                            className: y.emptyHintSpacer
                        })
                    })
                }
                renderEmptyFavorites() {
                    return (0, s.jsx)(h.Scroller, {
                        className: y.results,
                        fade: !0,
                        children: (0, s.jsxs)("div", {
                            className: y.emptyHints,
                            children: [this.renderEmptyFavorite(S.default.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0), this.renderEmptyFavorite(S.default.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE), this.renderEmptyFavorite(S.default.Messages.NO_GIF_FAVORITES_GO_FAVORITE), Array.from({
                                length: 15
                            }).map((e, t) => (0, s.jsx)(n.Fragment, {
                                children: this.renderEmptyFavorite()
                            }, t)), this.renderEmptyFavorite(S.default.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE), Array.from({
                                length: 16
                            }).map((e, t) => (0, s.jsx)(n.Fragment, {
                                children: this.renderEmptyFavorite()
                            }, t)), this.renderEmptyFavorite(S.default.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)]
                        })
                    })
                }
                render() {
                    let {
                        data: e,
                        resultQuery: t,
                        query: r,
                        resultType: n
                    } = this.props;
                    return 0 === e.length && t === r && n !== R.GIFPickerResultTypes.TRENDING_GIFS ? n === R.GIFPickerResultTypes.FAVORITES ? this.renderEmptyFavorites() : (0, s.jsx)(p.default, {
                        message: S.default.Messages.NO_GIF_SEARCH_RESULTS,
                        className: y.noResults
                    }) : (0, s.jsx)(m.default, {
                        getItemGrid: this.getItemGrid,
                        getCoordsMap: this.getCoordsMap,
                        onFocus: this.handleFocus,
                        onSelect: this.handleSelect,
                        children: (0, s.jsx)(E.default, {
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
                        let r = t.getCoordsMap()[e];
                        null != r && (t.scrollIntoViewRect({
                            start: r.top - 10,
                            end: r.top + r.height + 10
                        }), this.setState({
                            focusedId: e
                        }))
                    }, this.handleSelect = e => {
                        let t;
                        let {
                            data: r
                        } = this.props, s = r.findIndex(t => C(t) === e); - 1 !== s && (t = r[s]), null != t && this.selectItem(t, s)
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
                            scrollTop: r,
                            scrollHeight: s
                        } = t.getScrollerState();
                        s - r <= F && (e !== this.prevResultQuery && (0, f.fetchSuggestions)(e), this.prevResultQuery = e)
                    }, this.renderItem = (e, t, r, n) => {
                        if (e > 0) return null;
                        let {
                            focusedId: l
                        } = this.state, i = this.props.data[t];
                        return null == i ? null : (0, s.jsx)(P, {
                            item: i,
                            index: t,
                            format: i.format,
                            src: i.src,
                            coords: r,
                            onClick: this.handleClickItem,
                            renderExtras: () => (0, s.jsx)(g.default, {
                                className: y.favButton,
                                ...i
                            }),
                            focused: C(i) === l,
                            imagePool: this.props.imagePool,
                            videoPool: this.props.videoPool
                        }, n)
                    }, this.getItemHeight = (e, t, r) => {
                        if (e > 0) return 0;
                        let s = this.props.data[t];
                        if (null == s) return 0;
                        let n = s.height / s.width;
                        return r * n
                    }, this.getItemKey = (e, t) => {
                        var r;
                        if (e > 0) return null;
                        let s = this.props.data[t];
                        return null != s ? null !== (r = s.id) && void 0 !== r ? r : s.src : null
                    }, this.renderSection = (e, t, r) => {
                        let {
                            onSelectSuggestion: l,
                            suggestions: i
                        } = this.props;
                        return 1 === e ? (0, s.jsx)("div", {
                            className: y.endContainer,
                            style: t,
                            children: i.length > 0 ? (0, s.jsxs)(n.Fragment, {
                                children: [(0, s.jsx)("div", {
                                    className: y.endText,
                                    children: S.default.Messages.GIF_PICKER_RELATED_SEARCH
                                }), (0, s.jsx)("div", {
                                    className: y.searchSuggestions,
                                    children: i.map(e => (0, s.jsx)(h.Button, {
                                        look: h.Button.Looks.OUTLINED,
                                        color: h.Button.Colors.PRIMARY,
                                        size: h.Button.Sizes.SMALL,
                                        className: y.searchSuggestion,
                                        onClick: () => {
                                            l(e)
                                        },
                                        children: e
                                    }, e))
                                })]
                            }) : null
                        }, r) : null
                    }, this.renderContent = (e, t, r) => {
                        let {
                            data: n,
                            resultQuery: l,
                            query: i,
                            resultType: a
                        } = this.props;
                        return 0 === n.length && (l !== i || a === R.GIFPickerResultTypes.TRENDING_GIFS) ? (0, s.jsx)(h.MasonryList, {
                            fade: !0,
                            className: y.results,
                            sections: [T.length],
                            columns: e,
                            itemGutter: 12,
                            getItemKey: x,
                            getItemHeight: A,
                            renderItem: G,
                            chunkSize: 128
                        }, l) : (0, s.jsx)(h.MasonryList, {
                            ref: this._masonryRef,
                            fade: !0,
                            itemGutter: 12,
                            className: y.results,
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
                } = n.useContext(I.default), t = e.document, [r] = n.useState(() => new u.default(() => t.createElement("img"), e => {
                    e.onload = null, e.src = ""
                })), [s] = n.useState(() => new u.default(() => {
                    let e = t.createElement("video");
                    return e.className = y.gif, e.autoplay = !0, e.loop = !0, e.muted = !0, e.preload = "auto", e.controls = !1, e
                }, e => {
                    e.src = "", e.oncanplay = null;
                    let {
                        parentNode: t
                    } = e;
                    null != t && t.removeChild(e)
                }));
                return {
                    imagePool: r,
                    videoPool: s
                }
            }
            var O = function(e) {
                let t = w();
                return (0, s.jsx)(M, {
                    ...e,
                    ...t
                })
            }
        },
        519841: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                AttachmentLinkRefreshExperiment: function() {
                    return n
                }
            });
            var s = r("862205");
            let n = (0, s.createExperiment)({
                kind: "user",
                id: "2023-12_attachment_link_refresh",
                label: "Attachment Link Refresh User Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Refresh expired attachment links",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        787336: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isAttachmentUrl: function() {
                    return h
                },
                removeSignedUrlParameters: function() {
                    return f
                },
                messageHasExpiredAttachmentUrl: function() {
                    return _
                },
                maybeRefreshAttachmentUrl: function() {
                    return R
                }
            }), r("222007");
            var s, n = r("872717"),
                l = r("718517"),
                i = r("253981"),
                a = r("519841"),
                o = r("49111");
            let u = new Set([window.GLOBAL_ENV.CDN_HOST, null === (s = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === s ? void 0 : s.substring(2)]),
                c = new Set(["/attachments/", "/ephemeral-attachments/"]),
                d = 1 * l.default.Millis.HOUR;

            function h(e) {
                return u.has(e.hostname) && Array.from(c).some(t => e.pathname.startsWith(t))
            }

            function f(e) {
                let t = i.default.toURLSafe(e);
                if (null == t) return e;
                for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
                return t
            }

            function m(e) {
                let t = function(e) {
                    let t = e.searchParams.get("ex"),
                        r = parseInt(null != t ? t : "", 16);
                    return isNaN(r) ? void 0 : r * l.default.Millis.SECOND
                }(e);
                return null == t || t <= Date.now() + d
            }

            function p(e) {
                let t = i.default.toURLSafe(e.url);
                return null != t && m(t)
            }

            function I(e) {
                if (null == e) return !1;
                let t = i.default.toURLSafe(e.url);
                return !!(null != t && h(t)) && m(t)
            }

            function g(e) {
                var t;
                return I(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(I)) || I(e.video)
            }

            function _(e) {
                return e.attachments.some(p) || e.embeds.some(g)
            }
            async function E(e) {
                let t = await n.default.post({
                    url: o.Endpoints.ATTACHMENTS_REFRESH_URLS,
                    body: {
                        attachment_urls: [e]
                    }
                });
                return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
            }
            async function R(e) {
                if (!a.AttachmentLinkRefreshExperiment.getCurrentConfig({
                        location: "link_clicked"
                    }).enabled) return e;
                let t = i.default.toURLSafe(e);
                if (null == t || !m(t)) return e;
                let r = await E(e);
                return null != r ? r : e
            }
        },
        476714: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return I
                }
            }), r("222007");
            var s = r("37983"),
                n = r("884691"),
                l = r("414456"),
                i = r.n(l),
                a = r("77078"),
                o = r("960476"),
                u = r("140331"),
                c = r("118849"),
                d = r("671434"),
                h = r("659500"),
                f = r("49111"),
                m = r("782340"),
                p = r("420804"),
                I = n.memo(function(e) {
                    let {
                        width: t,
                        height: r,
                        src: l,
                        url: I,
                        format: g,
                        className: _
                    } = e, [E, R] = n.useState(!1), S = (0, u.useIsFavoriteGIF)(I), y = S ? m.default.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : m.default.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, v = S ? d.default : c.default;
                    n.useEffect(() => {
                        if (!E) return;
                        let e = setTimeout(() => {
                            R(!1)
                        }, 500);
                        return () => clearTimeout(e)
                    }, [E]);
                    let F = e => {
                        e.preventDefault(), e.stopPropagation(), R(!0), S ? (0, o.removeFavoriteGIF)(I) : ((0, o.addFavoriteGIF)({
                            url: I,
                            src: l,
                            width: t,
                            height: r,
                            format: g
                        }), h.ComponentDispatch.dispatch(f.ComponentActions.FAVORITE_GIF))
                    };
                    return (0, s.jsx)(a.Tooltip, {
                        text: y,
                        children: e => (0, s.jsx)(a.Clickable, {
                            ...e,
                            className: i(_, p.size, p.gifFavoriteButton, {
                                [p.selected]: S,
                                [p.showPulse]: E
                            }),
                            onMouseDown: e => e.preventDefault(),
                            onClick: F,
                            onDoubleClick: e => e.preventDefault(),
                            children: (0, s.jsx)(v, {
                                className: p.icon
                            })
                        })
                    })
                })
        },
        510849: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return S
                }
            }), r("781738"), r("222007");
            var s = r("446674"),
                n = r("713349"),
                l = r("913144"),
                i = r("240292"),
                a = r("49111"),
                o = r("782340");
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
                m = "",
                p = [],
                I = [],
                g = [],
                _ = [];

            function E(e) {
                return e.replace(/^https?:/, "")
            }
            class R extends s.default.Store {
                getAnalyticsID() {
                    return h
                }
                getQuery() {
                    return f
                }
                getResultQuery() {
                    return m
                }
                getResultItems() {
                    return p
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
            var S = new R(l.default, {
                GIF_PICKER_INITIALIZE: function(e) {
                    h = e.analyticsID
                },
                GIF_PICKER_QUERY: function(e) {
                    "" === (f = e.query) && (m = "", p = [], g = [])
                },
                GIF_PICKER_QUERY_SUCCESS: function(e) {
                    if (null != e.query && f === m) return !1;
                    null != e.query && (m = e.query), p = e.items.map(e => {
                        let {
                            width: t,
                            height: r,
                            src: s,
                            gif_src: l,
                            url: i,
                            id: a
                        } = e;
                        return {
                            width: t,
                            height: r,
                            src: E(s),
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
                    m = t, p = []
                },
                GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
                    let t = e.trendingCategories,
                        r = null != e.trendingGIFPreview ? [{
                            type: a.GIFPickerResultTypes.TRENDING_GIFS,
                            icon: i.default,
                            name: o.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                            src: E(e.trendingGIFPreview.src),
                            format: n.GIFType.IMAGE
                        }] : [];
                    I = [...r, ...t.map(e => ({
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
        531470: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("469563"),
                l = r("891722"),
                i = r("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: n = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, s.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                        })
                    })
                }, l.ArrowSmallLeftIcon, void 0, {
                    size: 24
                })
        },
        118849: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("469563"),
                l = r("809803"),
                i = r("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: r = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M19.6,9l-4.2-0.4c-0.4,0-0.7-0.3-0.8-0.6l-1.6-3.9c-0.3-0.8-1.5-0.8-1.8,0L9.4,8.1C9.3,8.4,9,8.6,8.6,8.7L4.4,9 c-0.9,0.1-1.2,1.2-0.6,1.8L7,13.6c0.3,0.2,0.4,0.6,0.3,1l-1,4.1c-0.2,0.9,0.7,1.5,1.5,1.1l3.6-2.2c0.3-0.2,0.7-0.2,1,0l3.6,2.2 c0.8,0.5,1.7-0.2,1.5-1.1l-1-4.1c-0.1-0.4,0-0.7,0.3-1l3.2-2.8C20.9,10.2,20.5,9.1,19.6,9z M12,15.4l-3.8,2.3l1-4.3l-3.3-2.9 l4.4-0.4l1.7-4l1.7,4l4.4,0.4l-3.3,2.9l1,4.3L12,15.4z"
                        })
                    })
                }, l.StarOutlineIcon, void 0, {
                    size: 16
                })
        },
        671434: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("469563"),
                l = r("825701"),
                i = r("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: r = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, i.default)(a),
                        viewBox: "0 0 24 24",
                        width: t,
                        height: r,
                        children: [(0, s.jsx)("path", {
                            d: "M0,0H24V24H0Z",
                            fill: "none"
                        }), (0, s.jsx)("path", {
                            fill: n,
                            className: l,
                            d: "M12.5,17.6l3.6,2.2a1,1,0,0,0,1.5-1.1l-1-4.1a1,1,0,0,1,.3-1l3.2-2.8A1,1,0,0,0,19.5,9l-4.2-.4a.87.87,0,0,1-.8-.6L12.9,4.1a1.05,1.05,0,0,0-1.9,0l-1.6,4a1,1,0,0,1-.8.6L4.4,9a1.06,1.06,0,0,0-.6,1.8L7,13.6a.91.91,0,0,1,.3,1l-1,4.1a1,1,0,0,0,1.5,1.1l3.6-2.2A1.08,1.08,0,0,1,12.5,17.6Z"
                        })]
                    })
                }, l.StarIcon, void 0, {
                    size: 16
                })
        },
        240292: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("469563"),
                l = r("308472"),
                i = r("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: n = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            transform: "translate(2 6)",
                            children: (0, s.jsx)("path", {
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
        564703: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                calculateAnalyticsMetadata: function() {
                    return n
                }
            });
            var s = r("49111");

            function n(e, t, r) {
                let n = null != t ? {
                        [t]: 1
                    } : {},
                    {
                        offset: l,
                        limit: i,
                        results: a,
                        totalResults: o
                    } = null != r ? r : {};
                return {
                    search_type: s.SearchTypes.GIF,
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
        42641: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ArrowSmallLeftIcon: function() {
                    return i
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("669491"),
                l = r("82169");
            let i = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: i = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M3.3 11.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
                        className: a
                    })
                })
            }
        },
        261833: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                StarOutlineIcon: function() {
                    return i
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("669491"),
                l = r("82169");
            let i = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: i = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M2.07 10.94a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83c.37-1.15 2-1.15 2.37 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4L12 18.16l-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6Zm11.55-.25h5.26l-4.25 3.09 1.62 5-4.25-3.1-4.25 3.1 1.62-5-4.25-3.1h5.26l1.62-5 1.62 5Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        217982: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            }), r("424973");
            var s = class e {
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
//# sourceMappingURL=58533.905dede5cdbbedf50fce.js.map