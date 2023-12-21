(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["50756"], {
        102067: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var i = n("87627"),
                r = n("29713"),
                u = n("21189"),
                l = n("227094"),
                s = n("261047"),
                a = n("154005"),
                o = n("778455");
            n("357629"), n("411104"), n("733860"), n("653041"), n("817285");
            var d = n("735250"),
                c = n("470079"),
                f = n("803997"),
                _ = n.n(f),
                h = n("699581"),
                E = n.n(h),
                p = n("93610"),
                I = n("661223"),
                v = n("500833"),
                S = n("362939"),
                T = n("875572"),
                y = n("113079"),
                g = n("204606"),
                m = n("659300"),
                R = n("288682"),
                C = n("540019"),
                A = function(e) {
                    (0, r._)(n, e);
                    var t = (0, o._)(n);

                    function n() {
                        var e;
                        return (0, i._)(this, n), e = t.apply(this, arguments), e.state = {
                            hover: !1
                        }, e.key = void 0, e.onError = function() {
                            var t = e.getSrc();
                            null != t && (e.cancelLoadImage = (0, v.loadImage)(t, function(t) {
                                !t && (e.key = Date.now(), e.forceUpdate())
                            }))
                        }, e.onMouseEnter = function(t) {
                            e.setState({
                                hover: !0
                            });
                            var n = e.props.onMouseEnter;
                            null != n && n(t)
                        }, e.onMouseLeave = function(t) {
                            e.setState({
                                hover: !1
                            });
                            var n = e.props.onMouseLeave;
                            null != n && n(t)
                        }, e
                    }
                    var a = n.prototype;
                    return a.componentWillUnmount = function() {
                        var e;
                        null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                    }, a.getSrc = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                            t = e.src,
                            n = e.emojiId,
                            i = e.emojiName,
                            r = e.animated,
                            u = e.shouldAnimate,
                            l = e.isFocused,
                            s = e.isInteracting,
                            a = e.size,
                            o = this.state.hover;
                        if (null != t) return t;
                        if (null != n) {
                            var d = C.EMOJI_SIZE_MAP[void 0 === a ? "default" : a];
                            return g.default.getEmojiURL({
                                id: n,
                                animated: l && !0 === r && (!0 === u || o || !0 === s),
                                size: d
                            })
                        }
                        if (null != i) return m.default.getURL(i)
                    }, a.render = function() {
                        var e, t, n = this.props,
                            i = n.emojiName,
                            r = n.animated,
                            a = n.className,
                            o = n.size,
                            f = n.alt,
                            h = (n.shouldAnimate, n.isFocused, n.emojiId),
                            E = (n.autoplay, n.isInteracting, (0, s._)(n, ["emojiName", "animated", "className", "size", "alt", "shouldAnimate", "isFocused", "emojiId", "autoplay", "isInteracting"])),
                            p = this.getSrc();
                        return null == p || "" === p ? (0, d.jsx)("span", {
                            className: _()("emoji", "emoji-text"),
                            children: i
                        }) : (r && (e = {
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave
                        }), (0, c.createElement)("img", (0, u._)((0, l._)((0, u._)((0, l._)((0, u._)({}, E), {
                            key: this.key,
                            src: p,
                            alt: null !== (t = null != f ? f : i) && void 0 !== t ? t : void 0,
                            draggable: !1
                        }), e), {
                            className: _()("emoji", a, {
                                jumboable: "jumbo" === (void 0 === o ? "default" : o)
                            }),
                            onError: this.onError,
                            "data-type": "emoji"
                        }), null != h && "" !== h ? {
                            "data-id": h
                        } : {
                            "data-name": i
                        })))
                    }, n
                }(c.PureComponent);
            A.defaultProps = {
                isInteracting: !1
            };
            var N = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, d.jsx)(e, (0, l._)((0, u._)({}, t), {
                        shouldAnimate: t.animated
                    }))
                };
                var t = [],
                    n = [],
                    f = new window.IntersectionObserver(function(e) {
                        e.forEach(function(e) {
                            var i = n.find(function(t) {
                                return (0, a._)(t, 1)[0] === e.target
                            });
                            if (null != i) {
                                var r = i[1];
                                if (e.intersectionRatio >= .7) {
                                    if (-1 !== t.indexOf(r)) return;
                                    var u, l, s = Math.abs(e.intersectionRect.bottom - Number(null === (u = e.rootBounds) || void 0 === u ? void 0 : u.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.top));
                                    s ? t.unshift(r) : t.push(r), r.forceUpdate(), s && t.length > 100 && t[100].forceUpdate()
                                } else {
                                    var o = t.indexOf(r); - 1 !== o && (t.splice(o, 1), r.forceUpdate(), o < 100 && t.length >= 100 && t[99].forceUpdate())
                                }
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function _(e) {
                    var t = E().findDOMNode(e);
                    (0, p.isElement)(t) && (n.push([t, e]), f.observe(t))
                }

                function h(e) {
                    var i = E().findDOMNode(e);
                    f.unobserve(i);
                    var r = n.findIndex(function(t) {
                        var n = (0, a._)(t, 2);
                        return n[0], n[1] === e
                    }); - 1 !== r && (n.splice(r, 1), -1 !== (r = t.indexOf(e)) && (t.splice(r, 1), r < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return function(n) {
                    (0, r._)(c, n);
                    var a = (0, o._)(c);

                    function c() {
                        return (0, i._)(this, c), a.apply(this, arguments)
                    }
                    var f = c.prototype;
                    return f.shouldAutoplay = function(e) {
                        return e.animated && e.autoplay
                    }, f.componentDidMount = function() {
                        this.shouldAutoplay(this.props) && _(this)
                    }, f.componentDidUpdate = function(e) {
                        var t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? _(this) : h(this))
                    }, f.componentWillUnmount = function() {
                        this.shouldAutoplay(this.props) && h(this)
                    }, f.render = function() {
                        var n = t.indexOf(this),
                            i = this.props,
                            r = i.autoplay,
                            a = i.allowAnimatedEmoji,
                            o = (0, s._)(i, ["autoplay", "allowAnimatedEmoji"]);
                        return (0, d.jsx)(y.MessagesInteractionContext.Consumer, {
                            children: function(t) {
                                return (0, d.jsx)(e, (0, l._)((0, u._)({}, o), {
                                    autoplay: r || !1,
                                    shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
                                }))
                            }
                        })
                    }, c
                }(c.Component)
            }(A);

            function U(e) {
                var t = S.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    i = __OVERLAY__ ? (0, I.useStateFromStores)([T.default], function() {
                        return T.default.isInstanceFocused()
                    }) : (0, R.useIsWindowFocused)();
                return (0, d.jsx)(N, (0, l._)((0, u._)({}, e, n), {
                    isFocused: i
                }))
            }
        },
        998262: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return o
                }
            });
            var i = n("21189"),
                r = n("227094"),
                u = n("261047"),
                l = n("735250");
            n("470079");
            var s = n("600186"),
                a = n("262113"),
                o = function(e) {
                    var t = e.width,
                        n = e.height,
                        o = e.color,
                        d = void 0 === o ? s.default.colors.INTERACTIVE_NORMAL : o,
                        c = e.colorClass,
                        f = (0, u._)(e, ["width", "height", "color", "colorClass"]);
                    return (0, l.jsx)("svg", (0, r._)((0, i._)({}, (0, a.default)(f)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: "string" == typeof d ? d : d.css,
                            fillRule: "evenodd",
                            d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                            clipRule: "evenodd",
                            className: void 0 === c ? "" : c
                        })
                    }))
                }
        },
        615355: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("21189"),
                r = n("227094");
            n("357629");
            var u = n("470079"),
                l = n("348327"),
                s = n.n(l),
                a = n("97613"),
                o = n.n(a),
                d = n("682797"),
                c = n("312916"),
                f = n("731865"),
                _ = n("232733"),
                h = n("632706"),
                E = n("328470"),
                p = n("244180"),
                I = n("711119"),
                v = (0, d.trackMaker)({
                    analyticEventConfigs: E.AnalyticEventConfigs,
                    dispatcher: c.default,
                    TRACK_ACTION_NAME: "TRACK"
                });

            function S(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableTrack: !1,
                        trackOnInitialLoad: !1
                    },
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    l = u.useRef(),
                    a = u.useRef();
                u.useEffect(function() {
                    var u = !s()(l.current, e);
                    u && (l.current = e);
                    var c = !s()(a.current, n);
                    if (c && (a.current = n), u || c) {
                        var S = (0, r._)((0, i._)({}, e), {
                            sequenceId: o()("impression_")
                        });
                        return ! function(e) {
                                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    u = e.name,
                                    l = e.type,
                                    s = e.properties;
                                if (!(e.type === d.ImpressionTypes.MODAL && null == e.name && (0, I.getImpressionStack)().some(function(e) {
                                        var t;
                                        return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
                                    }))) {
                                    (0, I.setCurrentImpression)(e);
                                    var a = null !== (t = null == s ? void 0 : s.guild_id) && void 0 !== t ? t : h.default.getGuildId(),
                                        o = null !== (n = null == s ? void 0 : s.channel_id) && void 0 !== n ? n : _.default.getChannelId(a),
                                        c = (0, E.expandEventProperties)((0, i._)({
                                            impression_type: l,
                                            location: (0, I.getLocation)()
                                        }, (0, p.collectGuildAnalyticsMetadata)(a), (0, p.collectChannelAnalyticsMetadata)(f.default.getChannel(o)), s));
                                    if (r) {
                                        (0, I.setDebugTrackedData)(null, null);
                                        return
                                    }
                                    null != u && null != l && ((0, E.debugLogEvent)(u, c), v(u, c)), (0, I.setDebugTrackedData)(u, c)
                                }
                            }(S, t.disableTrack),
                            function() {
                                null != S && (0, I.cleanupImpression)(S)
                            }
                    }
                }, t.trackOnInitialLoad ? [] : void 0)
            }
        },
        183529: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var i = n("87627"),
                r = n("21189"),
                u = n("761020");
            n("724458"), n("357629"), n("462848"), n("633702"), n("266796"), n("996173"), n("47120"), n("653041"), n("814951"), n("230036"), n("330740"), n("363505"), n("723026"), n("757143"), n("301563"), n("254276"), n("566702"), n("191489"), n("773603"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
            var l = n("392711"),
                s = n.n(l),
                a = n("62010"),
                o = n.n(a),
                d = n("259537"),
                c = n("775822"),
                f = n("421219"),
                _ = n("405127"),
                h = n("731865"),
                E = n("677239"),
                p = n("610043"),
                I = n("606929"),
                v = n("871831"),
                S = n("604293"),
                T = n("497160"),
                y = n("366230"),
                g = n("428521"),
                m = n("555083"),
                R = n("221281"),
                C = n("467006"),
                A = Object.freeze({});

            function N(e, t) {
                if (!t.frecencyBoosters) return {};
                var n = E.default.getFrequentlyWithoutFetchingLatest(),
                    i = n.reduce(function(e, t) {
                        var n = t.id,
                            i = E.default.getScoreWithoutFetchingLatest(n);
                        return i > e ? i : e
                    }, 0),
                    r = [];
                switch (e) {
                    case R.AutocompleterResultTypes.GUILD:
                        r = n.filter(function(e) {
                            return e instanceof f.default
                        });
                        break;
                    case R.AutocompleterResultTypes.USER:
                        r = n.filter(function(e) {
                            return e instanceof c.ChannelRecordBase && e.type === C.ChannelTypes.DM
                        });
                        break;
                    case R.AutocompleterResultTypes.GROUP_DM:
                        r = n.filter(function(e) {
                            return e instanceof c.ChannelRecordBase && e.isMultiUserDM()
                        });
                        break;
                    case R.AutocompleterResultTypes.TEXT_CHANNEL:
                        r = n.filter(function(e) {
                            return e instanceof c.ChannelRecordBase && (0, c.isGuildSelectableChannelType)(e.type)
                        });
                        break;
                    case R.AutocompleterResultTypes.VOICE_CHANNEL:
                        r = n.filter(function(e) {
                            return e instanceof c.ChannelRecordBase && e.isGuildVocal()
                        })
                }
                var u = {},
                    l = !0,
                    s = !1,
                    a = void 0;
                try {
                    for (var o, d = r[Symbol.iterator](); !(l = (o = d.next()).done); l = !0) {
                        var _ = o.value,
                            p = _.id,
                            v = E.default.getScoreWithoutFetchingLatest(p);
                        if (e === R.AutocompleterResultTypes.USER && _ instanceof c.PrivateChannelRecord) {
                            if (_.type === C.ChannelTypes.DM) u[p = _.getRecipientId()] = 1 + v / i;
                            else if (_.type === C.ChannelTypes.GROUP_DM) {
                                var S = _.recipients.length,
                                    T = !0,
                                    y = !1,
                                    g = void 0;
                                try {
                                    for (var m, A = _.recipients[Symbol.iterator](); !(T = (m = A.next()).done); T = !0) u[m.value] = 1 + v / i * (1 / S)
                                } catch (e) {
                                    y = !0, g = e
                                } finally {
                                    try {
                                        !T && null != A.return && A.return()
                                    } finally {
                                        if (y) throw g
                                    }
                                }
                            }
                        } else u[p] = 1 + v / i
                    }
                } catch (e) {
                    s = !0, a = e
                } finally {
                    try {
                        !l && null != d.return && d.return()
                    } finally {
                        if (s) throw a
                    }
                }
                var N = I.default.getFriendIDs(),
                    U = !0,
                    L = !1,
                    D = void 0;
                try {
                    for (var G, b = N[Symbol.iterator](); !(U = (G = b.next()).done); U = !0) {
                        var M, O = G.value;
                        u[O] = (null !== (M = u[O]) && void 0 !== M ? M : 1) + .2
                    }
                } catch (e) {
                    L = !0, D = e
                } finally {
                    try {
                        !U && null != b.return && b.return()
                    } finally {
                        if (L) throw D
                    }
                }
                var w = h.default.getDMUserIds(),
                    P = !0,
                    F = !1,
                    k = void 0;
                try {
                    for (var H, x = w[Symbol.iterator](); !(P = (H = x.next()).done); P = !0) {
                        var V, B = H.value;
                        u[B] = (null !== (V = u[B]) && void 0 !== V ? V : 1) + .1
                    }
                } catch (e) {
                    F = !0, k = e
                } finally {
                    try {
                        !P && null != x.return && x.return()
                    } finally {
                        if (F) throw k
                    }
                }
                return u
            }
            var U = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : A,
                        a = this;
                    (0, i._)(this, e), this.query = "", this.options = A, this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = [], this._userBlacklist = null, this.parseUserResults = function(e) {
                        var t = e.results;
                        if (a._include(R.AutocompleterResultTypes.USER)) {
                            a._userResults = [];
                            var n = !0,
                                i = !1,
                                r = void 0;
                            try {
                                for (var u, l = t[Symbol.iterator](); !(n = (u = l.next()).done); n = !0) {
                                    var s = u.value,
                                        o = s.id,
                                        d = s.score,
                                        c = s.comparator,
                                        f = v.default.getUser(o);
                                    null != f && a._userResults.push({
                                        type: R.AutocompleterResultTypes.USER,
                                        record: f,
                                        score: function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                                t = arguments.length > 1 ? arguments[1] : void 0;
                                            return 1e3 * e * (null != t ? t : 1)
                                        }(d),
                                        comparator: null != c ? c : void 0
                                    })
                                }
                            } catch (e) {
                                i = !0, r = e
                            } finally {
                                try {
                                    !n && null != l.return && l.return()
                                } finally {
                                    if (i) throw r
                                }
                            }
                            a._userResults.length > a._limit && (a._userResults.length = a._limit), a.updateAllResults()
                        }
                    }, this.updateAllResults = function() {
                        clearTimeout(a._asyncTimeout), a.results = s()((0, u._)(a._userResults).concat((0, u._)(a._groupDMResults), (0, u._)(a._textChannelResults), (0, u._)(a._voiceChannelResults), (0, u._)(a._guildResults), (0, u._)(a._linkResults))).uniqBy(function(e) {
                            return "".concat(e.type, "-").concat(e.record.id)
                        }).sort(m.default).value(), a.onResultsChange(a.results, a.query)
                    }, this.onResultsChange = t, this.setOptions(l, !0), this._limit = r, this.createSearchContext(), this.setResultTypes(n)
                }
                var t = e.prototype;
                return t.createSearchContext = function() {
                    null == this.userSearchContext && (this.userSearchContext = g.default.getSearchContext(this.parseUserResults, this._limit))
                }, t.setLimit = function(e) {
                    var t = this.userSearchContext;
                    this._limit = e, null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit)
                }, t.setResultTypes = function(e) {
                    this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(R.AutocompleterResultTypes.USER) ? this._userResults : [], this._groupDMResults = this._include(R.AutocompleterResultTypes.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(R.AutocompleterResultTypes.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(R.AutocompleterResultTypes.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(R.AutocompleterResultTypes.GUILD) ? this._guildResults : [], this._applicationResults = this._include(R.AutocompleterResultTypes.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(R.AutocompleterResultTypes.LINK) ? this._linkResults : []
                }, t._include = function(e) {
                    return null == this.resultTypes || this.resultTypes.has(e)
                }, t._isAsyncSearch = function() {
                    return this._include(R.AutocompleterResultTypes.USER)
                }, t.setOptions = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t ? this.options = (0, r._)({}, this.options, e) : this.options = e, null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map(function(e) {
                        return e.startsWith("user:") ? e.replace("user:", "") : ""
                    }).filter(function(e) {
                        return "" !== e
                    }) : this._userBlacklist = null
                }, t.search = function(e, t) {
                    var n = this;
                    if (this.query = e, "" === e.trim()) {
                        this.clear(), this.updateAllResults();
                        return
                    }(this.options.frecencyBoosters ? d.FrecencyUserSettingsActionCreators.loadIfNecessary() : Promise.resolve()).finally(function() {
                        n.queryUsers(e, t, n._limit), n._groupDMResults = n.queryGroupDMs(e, n._limit), n._textChannelResults = n.queryTextChannels(e, n._limit), n._voiceChannelResults = n.queryVoiceChannels(e, n._limit), n._guildResults = n.queryGuilds(e, n._limit), n._applicationResults = n.queryApplications(e, n._limit), n._linkResults = n.queryLink(e, n._limit), n._isAsyncSearch() ? (clearTimeout(n._asyncTimeout), n._asyncTimeout = setTimeout(n.updateAllResults, 300)) : n.updateAllResults()
                    })
                }, t.clear = function() {
                    var e = this.userSearchContext;
                    null != e && e.clearQuery(), this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = []
                }, t.clean = function() {
                    this.clear(), this.destroy(), this.query = "", this.updateAllResults()
                }, t.pause = function() {
                    var e, t;
                    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t)
                }, t.resume = function() {
                    var e, t;
                    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t)
                }, t.destroy = function() {
                    var e = this.userSearchContext;
                    null != e && (e.destroy(), this.userSearchContext = null)
                }, t.queryTextChannels = function(e, t) {
                    if (!this._include(R.AutocompleterResultTypes.TEXT_CHANNEL)) return [];
                    var n = N(R.AutocompleterResultTypes.TEXT_CHANNEL, this.options),
                        i = this.options.blacklist;
                    return S.default.queryChannels({
                        query: e,
                        guildId: null,
                        limit: t,
                        fuzzy: !0,
                        filter: null != i ? function(e) {
                            return !i.has("channel:".concat(e.id))
                        } : void 0,
                        boosters: n
                    })
                }, t.queryVoiceChannels = function(e, t) {
                    if (!this._include(R.AutocompleterResultTypes.VOICE_CHANNEL)) return [];
                    var n = this.options.voiceChannelGuildFilter,
                        i = N(R.AutocompleterResultTypes.VOICE_CHANNEL, this.options);
                    return S.default.queryChannels({
                        query: e,
                        guildId: n,
                        limit: t,
                        fuzzy: !0,
                        type: p.GUILD_VOCAL_CHANNELS_KEY,
                        boosters: i
                    })
                }, t.queryGuilds = function(e, t) {
                    if (!this._include(R.AutocompleterResultTypes.GUILD)) return [];
                    var n = N(R.AutocompleterResultTypes.GUILD, this.options),
                        i = this.options.blacklist;
                    return S.default.queryGuilds({
                        query: e,
                        limit: t,
                        fuzzy: !0,
                        filter: null != i ? function(e) {
                            return !i.has("guild:".concat(e.id))
                        } : void 0,
                        boosters: n
                    })
                }, t.queryUsers = function(e, t, n) {
                    var i = this.userSearchContext;
                    if (null != i && this._include(R.AutocompleterResultTypes.USER)) {
                        var r = this.options.userFilters;
                        void 0 !== t && T.default.requestMembers(t, e, 100), i.setLimit(n), i.setQuery(e, r, this._userBlacklist, N(R.AutocompleterResultTypes.USER, this.options))
                    }
                }, t.queryGroupDMs = function(e, t) {
                    if (!this._include(R.AutocompleterResultTypes.GROUP_DM)) return [];
                    var n = this.options.blacklist,
                        i = N(R.AutocompleterResultTypes.GROUP_DM, this.options);
                    return S.default.queryGroupDMs({
                        query: e,
                        limit: t,
                        fuzzy: !0,
                        filter: null != n ? function(e) {
                            return !n.has("channel:".concat(e.id))
                        } : void 0,
                        boosters: i
                    })
                }, t.queryApplications = function(e, t) {
                    return this._include(R.AutocompleterResultTypes.APPLICATION) ? S.default.queryApplications({
                        query: e,
                        limit: t,
                        fuzzy: !0
                    }) : []
                }, t.queryLink = function(e, t) {
                    if (!this._include(R.AutocompleterResultTypes.LINK)) return [];
                    var n, i = o().sanitizeUrl(e);
                    try {
                        n = new URL(i)
                    } catch (e) {
                        return []
                    }
                    var r = n.pathname,
                        u = n.hostname,
                        l = n.host,
                        s = y.default.isDiscordHostname(void 0 === u ? "" : u) || window.location.host === l;
                    return null !== r && s && y.default.isAppRoute(r) ? [{
                        type: R.AutocompleterResultTypes.LINK,
                        record: _.default.fromPath(r),
                        score: 1
                    }] : []
                }, e
            }()
        },
        428521: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SearchContext: function() {
                    return m
                },
                default: function() {
                    return R
                }
            });
            var i, r, u = n("87627"),
                l = n("29713"),
                s = n("778455");
            n("814951"), n("357629"), n("653041"), n("312677"), n("69485"), n("13667"), n("390547"), n("573788"), n("996173"), n("47120"), n("633702"), n("266796"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("462848"), n("411104");
            var a = n("392711"),
                o = n.n(a),
                d = n("153832"),
                c = n("963694"),
                f = n("775822"),
                _ = n("731865"),
                h = n("361733"),
                E = n("606929"),
                p = n("871831"),
                I = n("370275"),
                v = n("439823");

            function S(e) {
                if (null == e || E.default.isBlocked(e.id)) return null;
                var t = {
                    id: e.id,
                    username: "0" !== e.discriminator ? "".concat(e.username, "#").concat(e.discriminator) : e.username
                };
                return null != v.default.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), E.default.isFriend(e.id) && (t.isFriend = !0, t.friendNickname = E.default.getNickname(e.id)), t
            }

            function T(e, t, n) {
                null != e && (e[t] = null != n && "" !== n ? n : null)
            }

            function y(e) {
                var t = [];
                if (null == e || !(0, f.isPrivate)(e.type)) return t;
                var n = e.recipients;
                return (void 0 === n ? [] : n).forEach(function(n) {
                    var i = S(p.default.getUser(n));
                    null != e && T(i, e.id), t.push(i)
                }), t
            }

            function g(e, t) {
                var n = [];
                return e.forEach(function(e) {
                    var i = S(e.user);
                    null != i && (T(i, t, e.nick), n.push(i))
                }), n
            }(i = r || (r = {})).UPDATE_USERS = "UPDATE_USERS", i.USER_RESULTS = "USER_RESULTS", i.QUERY_SET = "QUERY_SET", i.QUERY_CLEAR = "QUERY_CLEAR";
            var m = function() {
                    function e(t, n) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                            r = this;
                        (0, u._)(this, e), this.handleMessages = function(e) {
                            var t = e.data;
                            null != t && "USER_RESULTS" === t.type && t.uuid === r._uuid && (!1 !== r._currentQuery && r._callback(t.payload), null != r._currentQuery && (r._currentQuery = null), r._setNextQuery())
                        }, this._worker = t, this._uuid = (0, d.v4)(), this._callback = n, this._limit = i, this._currentQuery = null, this._nextQuery = null, this._subscribed = !1, this.subscribe()
                    }
                    var t = e.prototype;
                    return t.setLimit = function(e) {
                        this._limit = e, null != this._nextQuery && (this._nextQuery.limit = e)
                    }, t.subscribe = function() {
                        null != this._worker && !this._subscribed && (this._worker.addEventListener("message", this.handleMessages, !1), this._subscribed = !0, this._setNextQuery())
                    }, t.unsubscribe = function() {
                        null != this._worker && this._subscribed && (this._worker.removeEventListener("message", this.handleMessages, !1), this._subscribed = !1)
                    }, t.destroy = function() {
                        this.clearQuery(), this.unsubscribe()
                    }, t.clearQuery = function() {
                        this._currentQuery = !1, this._nextQuery = null, null != this._worker && this._subscribed && this._worker.postMessage({
                            uuid: this._uuid,
                            type: "QUERY_CLEAR"
                        })
                    }, t.setQuery = function(e, t, n, i) {
                        null != e && (this._nextQuery = {
                            query: e,
                            filters: t,
                            blacklist: n,
                            boosters: null != i ? i : {},
                            limit: this._limit
                        }, this._setNextQuery())
                    }, t._setNextQuery = function() {
                        (null == this._currentQuery || !1 === this._currentQuery) && null != this._nextQuery && (null != this._worker && this._subscribed ? (this._currentQuery = this._nextQuery, this._nextQuery = null, this._worker.postMessage({
                            uuid: this._uuid,
                            type: "QUERY_SET",
                            payload: this._currentQuery
                        })) : !this._subscribed && this.subscribe())
                    }, e
                }(),
                R = new(function(e) {
                    (0, l._)(i, e);
                    var t = (0, s._)(i);

                    function i() {
                        var e;
                        return (0, u._)(this, i), e = t.apply(this, arguments), e.actions = {
                            LOGOUT: function() {
                                return e._handleLogout()
                            },
                            POST_CONNECTION_OPEN: function() {
                                return e._handleConnectionOpen()
                            },
                            CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                                return e._handleConnectionOpenSupplemental(t)
                            },
                            OVERLAY_INITIALIZE: function(t) {
                                return e._handleOverlayInitialize(t)
                            },
                            CURRENT_USER_UPDATE: function(t) {
                                return e._handleCurrentUserUpdate(t)
                            },
                            GUILD_CREATE: function(t) {
                                return e._handleGuildCreate(t)
                            },
                            GUILD_MEMBERS_CHUNK: function(t) {
                                return e._handleGuildMembersChunk(t)
                            },
                            GUILD_MEMBER_ADD: function(t) {
                                return e._handleGuildMemberUpdate(t)
                            },
                            GUILD_MEMBER_UPDATE: function(t) {
                                return e._handleGuildMemberUpdate(t)
                            },
                            RELATIONSHIP_ADD: function(t) {
                                return e._handleRelationshipAdd(t)
                            },
                            RELATIONSHIP_UPDATE: function(t) {
                                return e._handleRelationshipUpdate(t)
                            },
                            RELATIONSHIP_REMOVE: function(t) {
                                return e._handleRelationshipRemove(t)
                            },
                            CHANNEL_CREATE: function(t) {
                                return e._handleDMCreate(t)
                            },
                            CHANNEL_UPDATES: function(t) {
                                return e._handleDMUpdates(t)
                            },
                            CHANNEL_RECIPIENT_ADD: function(t) {
                                return e._handleRecipientChanges(t)
                            },
                            PASSIVE_UPDATE_V1: function(t) {
                                return e._handlePassiveUpdateV1(t)
                            }
                        }, e._handleLogout = function() {
                            e.rebootWebworker()
                        }, e._handleConnectionOpen = function() {
                            setTimeout(function() {
                                var t = p.default.getCurrentUser();
                                if (null != t) {
                                    var n = S(t),
                                        i = {
                                            [n.id]: n
                                        };
                                    Object.values(p.default.getUsers()).forEach(function(e) {
                                        i[e.id] = S(e)
                                    });
                                    var r = h.default.getMutableAllGuildsAndMembers();
                                    for (var u in r)
                                        for (var l in r[u]) {
                                            var s, a, o = i[l],
                                                d = null !== (a = null === (s = r[u][l]) || void 0 === s ? void 0 : s.nick) && void 0 !== a ? a : v.default.getGlobalName(o);
                                            null != o && (o[u] = null != d && "" !== d ? d : null)
                                        }
                                    e.updateUsers(Object.values(i))
                                }
                            }, 3e3)
                        }, e._handleConnectionOpenSupplemental = function(t) {
                            var n = t.guilds;
                            setTimeout(function() {
                                var t = o().flatMap(n, function(e) {
                                    return g(e.members, e.id)
                                });
                                e.updateUsers(t)
                            }, 3e3)
                        }, e._handleOverlayInitialize = function(t) {
                            var n = t.users,
                                i = t.guildMembers,
                                r = new Map,
                                u = !0,
                                l = !1,
                                s = void 0;
                            try {
                                for (var a, o = n[Symbol.iterator](); !(u = (a = o.next()).done); u = !0) {
                                    var d = a.value;
                                    r.set(d.id, S(d))
                                }
                            } catch (e) {
                                l = !0, s = e
                            } finally {
                                try {
                                    !u && null != o.return && o.return()
                                } finally {
                                    if (l) throw s
                                }
                            }
                            var c = Object.keys(i),
                                f = !0,
                                _ = !1,
                                h = void 0;
                            try {
                                for (var E, p = c[Symbol.iterator](); !(f = (E = p.next()).done); f = !0) {
                                    var I = E.value,
                                        v = i[I];
                                    if (null != v) {
                                        var y = Object.keys(v),
                                            g = !0,
                                            m = !1,
                                            R = void 0;
                                        try {
                                            for (var C, A = y[Symbol.iterator](); !(g = (C = A.next()).done); g = !0) {
                                                var N = C.value,
                                                    U = r.get(N),
                                                    L = v[N];
                                                null != U && null != L && null != L.nick && (T(U, I, L.nick), r.set(N, U))
                                            }
                                        } catch (e) {
                                            m = !0, R = e
                                        } finally {
                                            try {
                                                !g && null != A.return && A.return()
                                            } finally {
                                                if (m) throw R
                                            }
                                        }
                                    }
                                }
                            } catch (e) {
                                _ = !0, h = e
                            } finally {
                                try {
                                    !f && null != p.return && p.return()
                                } finally {
                                    if (_) throw h
                                }
                            }
                            e.updateUsers(Array.from(r.values())), r.clear()
                        }, e._handleCurrentUserUpdate = function(t) {
                            var n = S(t.user);
                            null != n && e.updateUsers([n])
                        }, e._handleGuildCreate = function(t) {
                            var n = t.guild,
                                i = n.members;
                            e.updateUsers(g(i, n.id))
                        }, e._handleGuildMembersChunk = function(t) {
                            var n = t.members,
                                i = t.guildId;
                            e.updateUsers(g(n, i))
                        }, e._handleGuildMemberUpdate = function(t) {
                            var n = t.guildId,
                                i = t.user,
                                r = t.nick,
                                u = S(i);
                            null != u && (T(u, n, r), e.updateUsers([u]))
                        }, e._handlePassiveUpdateV1 = function(t) {
                            null != t.members && e.updateUsers(g(t.members, t.guildId))
                        }, e._handleRelationshipAdd = function(t) {
                            var n = S(t.relationship.user);
                            e.updateUsers([n])
                        }, e._handleRelationshipUpdate = function(t) {
                            var n = S(p.default.getUser(t.relationship.id));
                            e.updateUsers([n])
                        }, e._handleRelationshipRemove = function(t) {
                            var n = S(p.default.getUser(t.relationship.id));
                            e.updateUsers([n])
                        }, e._handleDMCreate = function(t) {
                            var n = t.channel.id,
                                i = y(_.default.getChannel(n));
                            if (0 !== i.length) {
                                var r = S(p.default.getCurrentUser());
                                T(r, n), i.push(r), e.updateUsers(i)
                            }
                        }, e._handleDMUpdates = function(t) {
                            var n = t.channels,
                                i = !0,
                                r = !1,
                                u = void 0;
                            try {
                                for (var l, s = n[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) {
                                    var a = l.value,
                                        o = y(_.default.getChannel(a.id));
                                    if (0 !== o.length) {
                                        var d = S(p.default.getCurrentUser());
                                        T(d, a.id), o.push(d), e.updateUsers(o)
                                    }
                                }
                            } catch (e) {
                                r = !0, u = e
                            } finally {
                                try {
                                    !i && null != s.return && s.return()
                                } finally {
                                    if (r) throw u
                                }
                            }
                        }, e._handleRecipientChanges = function(t) {
                            var n = t.channelId,
                                i = t.user;
                            if (t.isMember) {
                                var r = S(i);
                                T(r, n), e.updateUsers([r])
                            }
                        }, e
                    }
                    var r = i.prototype;
                    return r._initialize = function() {
                        this.rebootWebworker()
                    }, r._terminate = function() {
                        null != this._worker && (this._worker.terminate(), this._worker = null)
                    }, r.rebootWebworker = function() {
                        null != this._worker && (this._worker.terminate(), this._worker = null), this._worker = new Worker(new URL(n.p + n.u("45563"), n.b))
                    }, r.updateUsers = function(e) {
                        var t = this._worker;
                        null != t && (e = e.filter(I.isNotNullish), t.postMessage({
                            type: "UPDATE_USERS",
                            payload: e
                        }))
                    }, r.getSearchContext = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        this.initialize();
                        var n = this._worker;
                        if (null == n) throw Error("SearchContextManager: No webworker initialized");
                        return new m(n, e, t)
                    }, i
                }(c.default))
        },
        454509: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createHeaderResult: function() {
                    return r
                }
            });
            var i = n("221281");

            function r(e) {
                return {
                    type: i.AutocompleterResultTypes.HEADER,
                    record: new i.HeaderRecord(e),
                    score: 0
                }
            }
        },
        101003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("741312"),
                r = n("731865"),
                u = n("606929"),
                l = n("871831"),
                s = n("221281"),
                a = n("467006");

            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.default,
                    d = t.getChannel(e);
                if (null == d) return null;
                var c = (0, i.computeChannelName)(d, n, o);
                switch (d.type) {
                    case a.ChannelTypes.DM:
                        var f = n.getUser(d.getRecipientId());
                        if (null == f) return null;
                        return {
                            type: s.AutocompleterResultTypes.USER, record: f, score: 0, comparator: c
                        };
                    case a.ChannelTypes.GROUP_DM:
                        return {
                            type: s.AutocompleterResultTypes.GROUP_DM, record: d, score: 0, comparator: c
                        };
                    case a.ChannelTypes.GUILD_VOICE:
                    case a.ChannelTypes.GUILD_STAGE_VOICE:
                        return {
                            type: s.AutocompleterResultTypes.VOICE_CHANNEL, record: d, score: 0, comparator: c
                        };
                    default:
                        return {
                            type: s.AutocompleterResultTypes.TEXT_CHANNEL, record: d, score: 0, comparator: c
                        }
                }
            }
        },
        162900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return function e(t, n, r, u) {
                        var l = r.length,
                            s = u,
                            a = n;
                        if (0 === l) return 0;
                        if (null == s) s = a;
                        else if (s === a) return a;
                        return (a += t === i.FindResultDirections.UP ? -1 : 1) < 0 || a >= l ? e(t, a < 0 ? l : -1, r, s) : r[a].type === i.AutocompleterResultTypes.HEADER ? e(t, a, r, s) : a
                    }
                }
            });
            var i = n("221281")
        },
        929451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createHeaderResult: function() {
                    return u.createHeaderResult
                },
                default: function() {
                    return s
                },
                findNextSelectedResult: function() {
                    return l.default
                }
            });
            var i = n("183529"),
                r = n("221281");
            n.es(r, t);
            var u = n("454509"),
                l = n("162900");
            n("555083");
            var s = i.default
        },
        627539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RaidAlertExperiment: function() {
                    return u
                },
                ReportRaidExperiment: function() {
                    return r
                }
            });
            var i = n("516086"),
                r = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2022-07_report_raids",
                    label: "Report Raids",
                    defaultConfig: {
                        enableRaidReporting: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Reporting Of Raids",
                        config: {
                            enableRaidReporting: !0
                        }
                    }]
                }),
                u = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2022-10_guild_raid_messaging",
                    label: "Raid Alerts",
                    defaultConfig: {
                        enableRaidAlerts: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Reporting Of Raids",
                        config: {
                            enableRaidAlerts: !0
                        }
                    }]
                })
        },
        225634: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("356056"),
                r = n("21189"),
                u = n("261047"),
                l = n("324415");
            n("191489"), n("357629"), n("633702"), n("266796");
            var s = n("682797"),
                a = n("454836"),
                o = n("312916"),
                d = n("939591"),
                c = n("841869"),
                f = n("627539"),
                _ = n("437148"),
                h = n("243393"),
                E = n("911533"),
                p = n("172056"),
                I = n("262047"),
                v = n("361733"),
                S = n("327271"),
                T = n("567713"),
                y = n("334990"),
                g = n("114099"),
                m = n("467006"),
                R = n("30175"),
                C = new c.default("GuildSettingsActionCreators"),
                A = {
                    init(e, t, n, i) {
                        o.default.dispatch({
                            type: "GUILD_SETTINGS_INIT",
                            guildId: e,
                            section: t,
                            subsection: i,
                            location: n
                        })
                    },
                    open: (e, t, r, u) => (0, i._)(function() {
                        var i;
                        return (0, l._)(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, n.el("225634@2869:2898").then(n.bind(n, "63453"))];
                                case 1:
                                    l.sent(), l.label = 2;
                                case 2:
                                    return (null === (i = S.default.getGuild(e)) || void 0 === i ? void 0 : i.hasFeature(m.GuildFeatures.COMMUNITY)) && (t === m.GuildSettingsSections.GUILD_AUTOMOD && (t = m.GuildSettingsSections.SAFETY, u = m.GuildSettingsSubsections.SAFETY_AUTOMOD), t === m.GuildSettingsSections.MEMBER_VERIFICATION && (t = m.GuildSettingsSections.SAFETY, u = m.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), A.init(e, t, r, u), (0, d.pushLayer)(m.Layers.GUILD_SETTINGS), [2]
                            }
                        })
                    })(),
                    close() {
                        o.default.dispatch({
                            type: "GUILD_SETTINGS_CLOSE"
                        })
                    },
                    saveRouteStack(e) {
                        o.default.dispatch({
                            type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
                            state: e
                        })
                    },
                    setSection(e, t) {
                        var n, i = g.default.getGuildId();
                        null != i && ((null === (n = S.default.getGuild(i)) || void 0 === n ? void 0 : n.hasFeature(m.GuildFeatures.COMMUNITY)) && (e === m.GuildSettingsSections.GUILD_AUTOMOD && (e = m.GuildSettingsSections.SAFETY, t = m.GuildSettingsSubsections.SAFETY_AUTOMOD), e === m.GuildSettingsSections.MEMBER_VERIFICATION && (e = m.GuildSettingsSections.SAFETY, t = m.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), o.default.dispatch({
                            type: "GUILD_SETTINGS_SET_SECTION",
                            section: e,
                            subsection: t
                        }))
                    },
                    setSearchQuery(e) {
                        o.default.dispatch({
                            type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
                            searchQuery: e
                        })
                    },
                    selectRole(e, t) {
                        o.default.dispatch({
                            type: "GUILD_SETTINGS_ROLE_SELECT",
                            roleId: e,
                            searchQuery: t
                        })
                    },
                    updateEmbed(e, t, n) {
                        a.default.patch({
                            url: m.Endpoints.GUILD_WIDGET(e),
                            body: {
                                enabled: t,
                                channel_id: n
                            },
                            oldFormErrors: !0
                        }).then(function(t) {
                            o.default.dispatch({
                                type: "GUILD_SETTINGS_SET_WIDGET",
                                guildId: e,
                                enabled: t.body.enabled,
                                channelId: t.body.channel_id
                            })
                        })
                    },
                    updateMFALevel(e) {
                        var t = e.guildId,
                            n = e.level,
                            i = e.isEnabled;
                        return (0, T.default)(function(e) {
                            return a.default.post({
                                url: m.Endpoints.GUILD_MFA(t),
                                body: (0, r._)({
                                    level: n
                                }, e),
                                oldFormErrors: !0
                            })
                        }, {
                            modalProps: {
                                title: R.default.Messages.GUILD_SECURITY_REQ_MFA_LABEL,
                                actionText: i ? R.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_OFF : R.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_ON
                            },
                            checkEnabled: !1
                        }).then(function(e) {
                            return o.default.dispatch({
                                type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                                level: e.body.level
                            })
                        })
                    },
                    updateIcon(e, t) {
                        a.default.patch({
                            url: m.Endpoints.GUILD(e),
                            body: {
                                icon: t
                            },
                            oldFormErrors: !0
                        }).then(function() {
                            o.default.dispatch({
                                type: "GUILD_SETTINGS_UPDATE",
                                icon: t
                            }), _.default.checkGuildTemplateDirty(e)
                        }, function(e) {
                            return o.default.dispatch({
                                type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                                errors: e.body
                            })
                        })
                    },
                    cancelChanges(e) {
                        o.default.dispatch({
                            type: "GUILD_SETTINGS_CANCEL_CHANGES",
                            guildId: e
                        })
                    },
                    updateGuild(e) {
                        var t, n = e.safetyAlertsChannelId,
                            i = (0, u._)(e, ["safetyAlertsChannelId"]),
                            l = (0, r._)({}, i),
                            s = g.default.getGuildId();
                        if (null != s) {
                            ;
                            (null === (t = f.RaidAlertExperiment.getCurrentConfig({
                                guildId: s,
                                location: "be0372_1"
                            })) || void 0 === t ? void 0 : t.enableRaidAlerts) && null != n && (l.safetyAlertsChannelId = n)
                        }
                        o.default.dispatch((0, r._)({
                            type: "GUILD_SETTINGS_UPDATE"
                        }, l))
                    },
                    saveGuild(e, t) {
                        var n = t.name,
                            i = t.description,
                            u = t.icon,
                            l = t.splash,
                            s = t.banner,
                            d = t.homeHeader,
                            c = t.afkChannelId,
                            f = t.afkTimeout,
                            h = t.systemChannelId,
                            E = t.verificationLevel,
                            p = t.defaultMessageNotifications,
                            I = t.explicitContentFilter,
                            v = t.features,
                            S = t.systemChannelFlags,
                            T = t.preferredLocale,
                            y = t.rulesChannelId,
                            g = t.safetyAlertsChannelId,
                            R = t.discoverySplash,
                            A = t.publicUpdatesChannelId,
                            N = t.premiumProgressBarEnabled,
                            U = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            L = (0, r._)({
                                name: n,
                                description: i,
                                icon: u,
                                splash: l,
                                banner: s,
                                home_header: d,
                                features: v,
                                preferred_locale: T,
                                afk_channel_id: c,
                                afk_timeout: f,
                                system_channel_id: h,
                                verification_level: E,
                                default_message_notifications: p,
                                explicit_content_filter: I,
                                system_channel_flags: S,
                                rules_channel_id: y,
                                discovery_splash: R,
                                public_updates_channel_id: A,
                                safety_alerts_channel_id: g
                            }, null != N ? {
                                premium_progress_bar_enabled: N
                            } : null);
                        return o.default.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT"
                        }), a.default.patch({
                            url: m.Endpoints.GUILD(e),
                            query: {
                                for_discovery: U.isForDiscovery
                            },
                            body: L,
                            oldFormErrors: !0
                        }).then(function(t) {
                            o.default.dispatch({
                                type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                                guild: t.body
                            }), _.default.checkGuildTemplateDirty(e)
                        }, function(e) {
                            if (o.default.dispatch({
                                    type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                                    errors: e.body
                                }), C.error("Failed to save guild settings", {
                                    errors: e.body
                                }), U.throwErr) throw e.body
                        })
                    },
                    updateGuildModeration: (e, t) => a.default.patch({
                        url: m.Endpoints.GUILD(e),
                        body: {
                            verification_level: t.verificationLevel,
                            explicit_content_filter: t.explicitContentFilter
                        },
                        oldFormErrors: !0
                    }).then(function(t) {
                        return _.default.checkGuildTemplateDirty(e), t
                    }),
                    transferOwnership(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return (0, T.default)(function(u) {
                            return y.default.patch({
                                url: m.Endpoints.GUILD(e),
                                body: (0, r._)({
                                    owner_id: t,
                                    code: i
                                }, u),
                                oldFormErrors: !0,
                                trackedActionData: {
                                    event: s.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                                    properties: {
                                        guild_id: e,
                                        verification_type: n
                                    }
                                }
                            })
                        }, {
                            modalProps: {
                                title: R.default.Messages.TRANSFER_OWNERSHIP,
                                actionText: R.default.Messages.TRANSFER_OWNERSHIP
                            },
                            checkEnabled: !1
                        })
                    },
                    sendTransferOwnershipPincode(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return y.default.put({
                            url: m.Endpoints.GUILD_PINCODE(e),
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: s.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                                properties: {
                                    guild_id: e,
                                    is_resend: t
                                }
                            }
                        })
                    },
                    deleteGuild: (e, t) => (0, T.default)(function(t) {
                        return a.default.post({
                            url: m.Endpoints.GUILD_DELETE(e),
                            body: t,
                            oldFormErrors: !0
                        })
                    }, {
                        modalProps: {
                            title: R.default.Messages.DELETE_SERVER_TITLE.format({
                                name: t
                            }),
                            actionText: R.default.Messages.DELETE_SERVER,
                            disallowBackupCodes: !0
                        },
                        checkEnabled: !1
                    }).then(function() {
                        A.close()
                    }),
                    leaveGuild: e => (0, i._)(function() {
                        return (0, l._)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a.default.delete({
                                        url: m.Endpoints.GUILD_LEAVE(e),
                                        body: {
                                            lurking: p.default.isLurking(e) || v.default.isCurrentUserGuest(e)
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    return t.sent(), A.close(), [2]
                            }
                        })
                    })(),
                    updateMemberRoles: (e, t, n, r, u) => (0, i._)(function() {
                        return (0, l._)(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (E.default.isFullServerPreview(e) && t === I.default.getId()) return (0, h.updateImpersonatedRoles)(e, n), [2];
                                    return [4, a.default.patch({
                                        url: m.Endpoints.GUILD_MEMBER(e, t),
                                        body: {
                                            roles: n
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    return i.sent(), r.forEach(function(n) {
                                        return o.default.dispatch({
                                            type: "GUILD_ROLE_MEMBER_ADD",
                                            guildId: e,
                                            roleId: n,
                                            userId: t
                                        })
                                    }), u.forEach(function(n) {
                                        return o.default.dispatch({
                                            type: "GUILD_ROLE_MEMBER_REMOVE",
                                            guildId: e,
                                            roleId: n,
                                            userId: t
                                        })
                                    }), [2]
                            }
                        })
                    })(),
                    bulkAddMemberRoles: (e, t, n) => a.default.patch({
                        url: m.Endpoints.GUILD_ROLE_MEMBERS(e, t),
                        body: {
                            member_ids: n
                        }
                    }).then(function(n) {
                        o.default.dispatch({
                            type: "GUILD_ROLE_MEMBER_BULK_ADD",
                            guildId: e,
                            roleId: t,
                            added: n.body
                        })
                    }),
                    updateRolesEditSection(e) {
                        o.default.dispatch({
                            type: "GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE",
                            section: e
                        })
                    },
                    enableIntegration: (e, t, n) => a.default.post({
                        url: m.Endpoints.GUILD_INTEGRATIONS(e),
                        body: {
                            type: t,
                            id: n
                        },
                        oldFormErrors: !0
                    }),
                    disableIntegration: (e, t) => a.default.delete({
                        url: m.Endpoints.GUILD_INTEGRATION(e, t),
                        oldFormErrors: !0
                    }),
                    updateIntegration: (e, t, n, i, r) => a.default.patch({
                        url: m.Endpoints.GUILD_INTEGRATION(e, t),
                        body: {
                            expire_behavior: n,
                            expire_grace_period: i,
                            enable_emoticons: r
                        },
                        oldFormErrors: !0
                    }),
                    syncIntegration(e, t) {
                        a.default.post({
                            url: m.Endpoints.GUILD_INTEGRATION_SYNC(e, t),
                            oldFormErrors: !0
                        })
                    }
                },
                N = A
        },
        738776: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildSettingsBansNewExperiment: function() {
                    return i
                }
            });
            var i = (0, n("153551").default)({
                kind: "guild",
                id: "2023-08_improved_bans_page",
                label: "Guild Settings Improved Bans Page",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Guild Settings Improved Bans Page",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        777079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchGuildIntegrationsApplications: function() {
                    return a
                },
                fetchGuildIntegrationsCommands: function() {
                    return o
                }
            }), n("363505");
            var i = n("454836"),
                r = n("312916"),
                u = n("912998"),
                l = n("535291"),
                s = n("467006");

            function a(e) {
                i.default.get({
                    url: s.Endpoints.GUILD_INTEGRATIONS(e),
                    query: {
                        include_applications: !0,
                        include_role_connections_metadata: !0
                    },
                    oldFormErrors: !0
                }).then(function(t) {
                    var n = t.body.map(function(e) {
                        return null != e.user && (e.user = new l.default(e.user)), null != e.application && (e.application = u.default.createFromServer(e.application)), e
                    });
                    r.default.dispatch({
                        type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
                        guildId: e,
                        integrations: n
                    })
                }).catch(function() {})
            }

            function o(e) {
                i.default.get({
                    url: s.Endpoints.GUILD_INTEGRATIONS(e),
                    query: {
                        has_commands: !0
                    },
                    oldFormErrors: !0
                }).then(function(t) {
                    var n = t.body.map(function(e) {
                        return e.id
                    });
                    r.default.dispatch({
                        type: "GUILD_SETTINGS_LOADED_INTEGRATIONS_WITH_COMMANDS",
                        guildId: e,
                        integrationIds: n
                    })
                }).catch(function() {})
            }
        },
        114099: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ec
                }
            });
            var i, r, u, l, s, a, o, d, c = n("87627"),
                f = n("29713"),
                _ = n("185223"),
                h = n("21189"),
                E = n("227094"),
                p = n("761020"),
                I = n("778455");
            n("330740"), n("996173"), n("47120"), n("357629"), n("724458"), n("573788"), n("814951"), n("817285");
            var v = n("392711"),
                S = n.n(v),
                T = n("913527"),
                y = n.n(T),
                g = n("661223"),
                m = n("454836"),
                R = n("986329"),
                C = n("312916"),
                A = n("181123"),
                N = n("775822"),
                U = n("421219"),
                L = n("621893"),
                D = n("535291"),
                G = n("327271"),
                b = n("871831"),
                M = n("738776"),
                O = n("777079"),
                w = n("467006"),
                P = n("414297"),
                F = n("188453"),
                k = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled"],
                H = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
                x = !1,
                V = w.FormStates.CLOSED,
                B = {},
                W = !1,
                Y = null,
                Q = null,
                q = 0,
                K = w.MFALevels.NONE,
                j = null,
                z = {
                    primaryCategoryId: P.DEFAULT_DISCOVERY_CATEGORY_ID,
                    secondaryCategoryIds: [],
                    keywords: [],
                    emojiDiscoverabilityEnabled: P.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
                    partnerActionedTimestamp: null,
                    partnerApplicationTimestamp: null,
                    isPublished: !1,
                    reasonsToJoin: [],
                    socialLinks: [],
                    about: ""
                },
                X = !1,
                J = z,
                Z = z,
                $ = null,
                ee = 0,
                et = null,
                en = null,
                ei = null;

            function er(e) {
                if (null == s || null == l || l.id !== e) return !1;
                var t = G.default.getGuild(e);
                return null != t && (l === s ? s = l = t : (l = t, s = s.set("roles", l.roles)), !0)
            }

            function eu(e) {
                var t, n = e.guildId,
                    r = e.section,
                    u = e.subsection,
                    o = e.location,
                    c = G.default.getGuild(n);
                if (null == c) return el();
                l = s = c, V = w.FormStates.OPEN, B = {}, a = n, K = s.mfaLevel, Z = J, d = null, j = o, es({
                    section: null !== (t = null != r ? r : i) && void 0 !== t ? t : w.GuildSettingsSections.OVERVIEW,
                    subsection: null != u ? u : null
                })
            }

            function el() {
                x = !1, V = w.FormStates.CLOSED, l = s = null, W = !1, Y = null, Q = null, q = 0, $ = null, en = null, ei = null, i = null, r = null, u = null, K = w.MFALevels.NONE, o = void 0
            }

            function es(e) {
                if (null == s) return !1;
                var t = i;
                if (i = e.section, r = e.subsection, i === w.GuildSettingsSections.BANS) !M.GuildSettingsBansNewExperiment.getCurrentConfig({
                    guildId: s.id,
                    location: "7f0c91_1"
                }).enabled && A.default.fetchGuildBans(s.id);
                else if (i === w.GuildSettingsSections.INSTANT_INVITES) m.default.get({
                    url: w.Endpoints.GUILD_INSTANT_INVITES(s.id),
                    oldFormErrors: !0
                }).then(function(e) {
                    C.default.dispatch({
                        type: "GUILD_SETTINGS_LOADED_INVITES",
                        invites: e.body
                    })
                });
                else if (i === w.GuildSettingsSections.WIDGET) m.default.get({
                    url: w.Endpoints.GUILD_WIDGET(s.id),
                    oldFormErrors: !0
                }).then(function(e) {
                    C.default.dispatch({
                        type: "GUILD_SETTINGS_SET_WIDGET",
                        enabled: e.body.enabled,
                        channelId: e.body.channel_id
                    })
                });
                else if (i === w.GuildSettingsSections.INTEGRATIONS || i === w.GuildSettingsSections.ROLES) {
                    if (a = null, t !== e.section) return eo(e)
                } else i === w.GuildSettingsSections.MEMBERS ? a = s.id : i === w.GuildSettingsSections.VANITY_URL ? m.default.get({
                    url: w.Endpoints.GUILD_VANITY_URL(s.id),
                    oldFormErrors: !0
                }).then(function(e) {
                    var t = e.body,
                        n = t.code,
                        i = t.uses,
                        r = t.error;
                    C.default.dispatch({
                        type: "GUILD_SETTINGS_SET_VANITY_URL",
                        code: n,
                        uses: i,
                        error: r
                    })
                }) : i === w.GuildSettingsSections.SAFETY && C.default.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == r ? w.GuildSettingsSubsections.SAFETY_OVERVIEW : r
                })
            }

            function ea(e) {
                var t;
                return new L.default({
                    code: e.code,
                    temporary: e.temporary,
                    revoked: e.revoked,
                    inviter: null != e.inviter ? new D.default(e.inviter) : null,
                    channel: (0, N.createChannelRecordFromInvite)(e.channel),
                    guild: null != e.guild ? new U.default(e.guild) : null,
                    uses: e.uses,
                    maxUses: e.max_uses,
                    maxAge: e.max_age,
                    createdAt: y()(null !== (t = e.created_at) && void 0 !== t ? t : void 0)
                })
            }

            function eo(e) {
                if (null == s || V !== w.FormStates.OPEN || "GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== s.id) return !1;
                (0, O.fetchGuildIntegrationsApplications)(s.id), (0, O.fetchGuildIntegrationsCommands)(s.id)
            }
            var ed = function(e) {
                (0, f._)(n, e);
                var t = (0, I._)(n);

                function n() {
                    return (0, c._)(this, n), t.apply(this, arguments)
                }
                var _ = n.prototype;
                return _.initialize = function() {
                    this.waitFor(G.default, b.default)
                }, _.getMetadata = function() {
                    return Z
                }, _.hasChanges = function() {
                    return !S().isEqual(s, l) || !S().isEqual(Z, J)
                }, _.isOpen = function() {
                    return x
                }, _.getSavedRouteState = function() {
                    return o
                }, _.getSection = function() {
                    return i
                }, _.showNotice = function() {
                    return this.hasChanges()
                }, _.getGuildId = function() {
                    return null != s ? s.id : null
                }, _.showPublicSuccessModal = function() {
                    return !R.default.get(F.PUBLIC_SUCCESS_MODAL_SEEN_KEY)
                }, _.getGuild = function() {
                    return s
                }, _.isSubmitting = function() {
                    return V === w.FormStates.SUBMITTING
                }, _.isGuildMetadataLoaded = function() {
                    return X
                }, _.getErrors = function() {
                    return B
                }, _.getSelectedRoleId = function() {
                    return a
                }, _.getSlug = function() {
                    return d
                }, _.getBans = function() {
                    return [$, ee]
                }, _.getProps = function() {
                    return {
                        submitting: this.isSubmitting(),
                        integrations: ei,
                        section: i,
                        subsection: r,
                        errors: B,
                        guild: s,
                        bans: $,
                        bansVersion: ee,
                        invites: en,
                        selectedRoleId: a,
                        embedEnabled: W,
                        embedChannelId: Y,
                        mfaLevel: K,
                        searchQuery: u,
                        vanityURLCode: Q,
                        vanityURLUses: q,
                        originalGuild: l,
                        hasChanges: this.hasChanges(),
                        guildMetadata: Z,
                        analyticsLocation: j,
                        isGuildMetadataLoaded: X
                    }
                }, n
            }(g.default.Store);
            ed.displayName = "GuildSettingsStore";
            var ec = new ed(C.default, __OVERLAY__ ? {} : {
                GUILD_SETTINGS_INIT: eu,
                GUILD_SETTINGS_OPEN: function(e) {
                    x = !0, eu(e)
                },
                GUILD_SETTINGS_CLOSE: el,
                GUILD_SETTINGS_UPDATE: function(e) {
                    if (null == s) return !1;
                    k.forEach(function(t) {
                        null != s && e.hasOwnProperty(t) && (s = s.set(t, e[t]))
                    }), ! function() {
                        if (null == s) return;
                        var e = s.toJS(),
                            t = l.toJS();
                        !k.some(function(n) {
                            return e[n] !== t[n]
                        }) && (s = l)
                    }()
                },
                GUILD_SETTINGS_CANCEL_CHANGES: function(e) {
                    var t = e.guildId;
                    B = {};
                    var n = G.default.getGuild(t);
                    null != n && (l = s = n)
                },
                GUILD_SETTINGS_SAVE_ROUTE_STACK: function(e) {
                    return o = e.state, !1
                },
                GUILD_SETTINGS_SUBMIT: function() {
                    V = w.FormStates.SUBMITTING, B = {}
                },
                GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
                    V = w.FormStates.OPEN
                },
                GUILD_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    V = w.FormStates.OPEN, i = null != i ? i : w.GuildSettingsSections.OVERVIEW, r = null, B = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                GUILD_SETTINGS_SET_SECTION: es,
                GUILD_SETTINGS_SET_SEARCH_QUERY: function(e) {
                    u = e.searchQuery
                },
                GUILD_SETTINGS_LOADED_BANS: function(e) {
                    $ = e.bans.reduce(function(e, t) {
                        return null != t.user && null != t.user.id && e.set(t.user.id, t), e
                    }, new Map), ee++
                },
                GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
                    var t = e.bans,
                        n = e.guildId;
                    (et !== n || null == $) && (et = n, $ = new Map), $ = t.reduce(function(e, t) {
                        return null != t.user && null != t.user.id && e.set(t.user.id, t), e
                    }, $), ee++
                },
                GUILD_SETTINGS_LOADED_INVITES: function(e) {
                    en = e.invites.reduce(function(e, t) {
                        return e[t.code] = ea(t), e
                    }, {})
                },
                GUILD_SETTINGS_SET_WIDGET: function(e) {
                    W = e.enabled, Y = e.channelId
                },
                GUILD_SETTINGS_SET_VANITY_URL: function(e) {
                    var t;
                    Q = null !== (t = e.code) && void 0 !== t ? t : null, q = e.uses
                },
                GUILD_SETTINGS_SET_MFA_SUCCESS: function(e) {
                    K = e.level
                },
                GUILD_SETTINGS_ROLE_SELECT: function(e) {
                    var t = e.roleId;
                    a = null != t ? t : null
                },
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
                    ei = e.integrations
                },
                GUILD_BAN_ADD: function(e) {
                    var t = e.user,
                        n = e.guildId;
                    if (null == $ || null == s || s.id !== n) return !1;
                    $.set(t.id, {
                        user: t,
                        reason: null
                    }), ee++
                },
                GUILD_BAN_REMOVE: function(e) {
                    var t = e.user,
                        n = e.guildId;
                    if (null == $ || null == s || s.id !== n) return !1;
                    $.delete(t.id), ee++
                },
                GUILD_ROLE_CREATE: function(e) {
                    if (!er(e.guildId)) return !1
                },
                GUILD_ROLE_UPDATE: function(e) {
                    if (!er(e.guildId)) return !1
                },
                GUILD_ROLE_DELETE: function(e) {
                    var t = e.guildId,
                        n = e.roleId;
                    if (!er(t)) return !1;
                    a === n && (a = null)
                },
                GUILD_UPDATE: function(e) {
                    if (null == s || s.id !== e.guild.id) return !1;
                    var t = G.default.getGuild(s.id);
                    if (null == t) return !1;
                    var n = l = t,
                        i = s.toJS();
                    k.forEach(function(e) {
                        if (!H.has(e)) {
                            if ("rulesChannelId" !== e && "publicUpdatesChannelId" !== e || i[e] !== F.CREATE_NEW_CHANNEL_VALUE) {
                                if ("features" === e) {
                                    n.set(e, new Set(i[e]));
                                    return
                                }
                                n = n.set(e, i[e])
                            }
                        }
                    }), s = n
                },
                GUILD_DELETE: function(e) {
                    if (null == s || s.id !== e.guild.id) return !1;
                    el()
                },
                USER_CONNECTIONS_UPDATE: eo,
                GUILD_INTEGRATIONS_UPDATE: eo,
                INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
                    en = (0, h._)({}, en), delete en[e.code]
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    en = (0, E._)((0, h._)({}, en), {
                        [e.invite.code]: ea(e.invite)
                    })
                },
                GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function(e) {
                    var t, n, i, r, u, l, a, o, d, c, f = e.guildId,
                        _ = e.metadata;
                    null != s && f === s.id && (!1 === X && (X = !0), Z = J = {
                        primaryCategoryId: null !== (t = _.primaryCategoryId) && void 0 !== t ? t : P.DEFAULT_DISCOVERY_CATEGORY_ID,
                        secondaryCategoryIds: null !== (n = _.secondaryCategoryIds) && void 0 !== n ? n : [],
                        keywords: null !== (i = _.keywords) && void 0 !== i ? i : [],
                        emojiDiscoverabilityEnabled: null !== (r = _.emojiDiscoverabilityEnabled) && void 0 !== r ? r : P.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
                        partnerActionedTimestamp: null !== (u = _.partnerActionedTimestamp) && void 0 !== u ? u : null,
                        partnerApplicationTimestamp: null !== (l = _.partnerApplicationTimestamp) && void 0 !== l ? l : null,
                        isPublished: null !== (a = _.isPublished) && void 0 !== a && a,
                        reasonsToJoin: null !== (o = _.reasonsToJoin) && void 0 !== o ? o : [],
                        socialLinks: null !== (d = _.socialLinks) && void 0 !== d ? d : [],
                        about: null !== (c = _.about) && void 0 !== c ? c : ""
                    }, B = {})
                },
                GUILD_DISCOVERY_METADATA_FETCH_FAIL: function() {
                    J = Z = z
                },
                GUILD_DISCOVERY_CATEGORY_ADD: function(e) {
                    var t = e.guildId,
                        n = e.categoryId;
                    null != s && t === s.id && (Z = (0, E._)((0, h._)({}, Z), {
                        secondaryCategoryIds: (0, p._)(Z.secondaryCategoryIds).concat([n])
                    }), J = (0, E._)((0, h._)({}, J), {
                        secondaryCategoryIds: (0, p._)(J.secondaryCategoryIds).concat([n])
                    }))
                },
                GUILD_DISCOVERY_CATEGORY_DELETE: function(e) {
                    var t, n = e.guildId,
                        i = e.categoryId;
                    if (null != s && n === s.id) {
                        var r = Z.secondaryCategoryIds.indexOf(i); - 1 !== r && ((t = (0, p._)(Z.secondaryCategoryIds)).splice(r, 1), Z = (0, E._)((0, h._)({}, Z), {
                            secondaryCategoryIds: t
                        })), -1 !== (r = J.secondaryCategoryIds.indexOf(i)) && ((t = (0, p._)(J.secondaryCategoryIds)).splice(r, 1), J = (0, E._)((0, h._)({}, J), {
                            secondaryCategoryIds: t
                        }))
                    }
                },
                GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function(e) {
                    var t = e.guildId,
                        n = e.errors;
                    null != s && t === s.id && (B = null != n ? n : {})
                },
                GUILD_UPDATE_DISCOVERY_METADATA: function(e) {
                    var t = e.guildId,
                        n = e.primaryCategoryId,
                        i = e.keywords,
                        r = e.emojiDiscoverabilityEnabled,
                        u = e.isPublished,
                        l = e.reasonsToJoin,
                        a = e.socialLinks,
                        o = e.about;
                    null != s && t === s.id && (Z = (0, E._)((0, h._)({}, Z), {
                        primaryCategoryId: null != n ? n : Z.primaryCategoryId,
                        keywords: null != i ? i : Z.keywords,
                        emojiDiscoverabilityEnabled: null != r ? r : Z.emojiDiscoverabilityEnabled,
                        isPublished: null != u ? u : Z.isPublished,
                        reasonsToJoin: null != l ? l : Z.reasonsToJoin,
                        socialLinks: null != a ? a : Z.socialLinks,
                        about: null != o ? o : Z.about
                    }))
                },
                GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function(e) {
                    var t = e.guildId,
                        n = e.errors;
                    null != s && t === s.id && (B = null != n ? n : {})
                },
                GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function(e) {
                    d = e.slug
                },
                GUILD_DISCOVERY_SLUG_FETCH_FAIL: function(e) {
                    (0, _._)(e), d = null
                }
            })
        },
        188453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE: function() {
                    return E
                },
                CREATE_NEW_CHANNEL_VALUE: function() {
                    return f
                },
                ENABLE_COMMUNITY_FLOW_MODAL_KEY: function() {
                    return p
                },
                EnableCommunityModalSteps: function() {
                    return u
                },
                MODERATOR_PERMISSIONS: function() {
                    return _
                },
                MODERATOR_PERMISSIONS_FLAG: function() {
                    return h
                },
                PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: function() {
                    return d
                },
                PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: function() {
                    return c
                },
                PUBLIC_SUCCESS_MODAL_SEEN_KEY: function() {
                    return o
                }
            });
            var i, r, u, l = n("761020"),
                s = n("768517"),
                a = n("467006"),
                o = "publicSuccessModalSeen",
                d = "667560445975986187",
                c = "669627189624307712",
                f = "1",
                _ = [a.Permissions.ADMINISTRATOR, a.Permissions.MANAGE_GUILD, a.Permissions.MANAGE_CHANNELS, a.Permissions.MANAGE_ROLES, a.Permissions.KICK_MEMBERS, a.Permissions.BAN_MEMBERS, a.Permissions.MANAGE_MESSAGES, a.Permissions.MENTION_EVERYONE, a.Permissions.MANAGE_GUILD_EXPRESSIONS, a.Permissions.CREATE_GUILD_EXPRESSIONS, a.Permissions.MANAGE_EVENTS, a.Permissions.CREATE_EVENTS, a.Permissions.MODERATE_MEMBERS],
                h = (r = s.default).combine.apply(r, (0, l._)(_)),
                E = 1e3,
                p = "Enable Community Modal";
            (i = u || (u = {})).SAFETY_CHECK = "safety_check", i.BASICS = "basics", i.FINISH = "finish"
        },
        359916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Z
                }
            });
            var i, r = n("87627"),
                u = n("29713"),
                l = n("761020"),
                s = n("778455");
            n("357629"), n("653041"), n("462848"), n("814951"), n("568603"), n("128242"), n("363505"), n("978209"), n("69485"), n("733860"), n("330740"), n("996173"), n("47120"), n("254276"), n("301563"), n("566702"), n("724458");
            var a = n("392711"),
                o = n.n(a),
                d = n("661223"),
                c = n("986329"),
                f = n("312916"),
                _ = n("929451"),
                h = n("101003"),
                E = n("655864"),
                p = n("806790"),
                I = n("786649"),
                v = n("293377"),
                S = n("262047"),
                T = n("731865"),
                y = n("911388"),
                g = n("610043"),
                m = n("361733"),
                R = n("327271"),
                C = n("197905"),
                A = n("417223"),
                N = n("232733"),
                U = n("632706"),
                L = n("301309"),
                D = n("604293"),
                G = n("370275"),
                b = n("467006"),
                M = n("30175"),
                O = "seenQSTutorial",
                w = [_.AutocompleterResultTypes.USER, _.AutocompleterResultTypes.GROUP_DM, _.AutocompleterResultTypes.TEXT_CHANNEL, _.AutocompleterResultTypes.GUILD, _.AutocompleterResultTypes.APPLICATION, _.AutocompleterResultTypes.LINK],
                P = 0,
                F = !1,
                k = !1,
                H = null,
                x = [],
                V = null,
                B = 0,
                W = [],
                Y = [];

            function Q() {
                k = R.default.getGuildCount() >= 3 || o().size(T.default.getMutablePrivateChannels()) >= 20, W = []
            }

            function q(e) {
                var t = (0, h.default)(e);
                return null == t || null != H && H !== t.type ? null : t
            }

            function K(e) {
                var t, n = e.query,
                    r = e.queryMode,
                    u = (0, E.isSplitMessagesTabAndOnMessagesTab)() ? void 0 : null !== (t = U.default.getGuildId()) && void 0 !== t ? t : void 0,
                    l = new Set(["user:".concat(S.default.getId())]);
                null != u && l.add("guild:".concat(u)), i = null != i ? i : new _.default(j, w, null != r ? 100 : 5, {
                    frecencyBoosters: !0,
                    blacklist: l
                }), V = null, B = n.length, H = r, i.search(n)
            }

            function j(e, t) {
                ! function(e, t) {
                    if (e.length !== t.length) return !1;
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n],
                            r = t[n];
                        if (i.record.id !== r.record.id) return !1
                    }
                    return !0
                }(e = "" === (t = t.trim()).trim() ? function() {
                    var e, t, n, i, r, u, s = null !== (n = U.default.getGuildId()) && void 0 !== n ? n : void 0,
                        a = null !== (i = N.default.getChannelId()) && void 0 !== i ? i : void 0;
                    switch (H) {
                        case _.AutocompleterResultTypes.USER:
                            var d = S.default.getId();
                            return D.default.getRecentlyTalked(a, 100).filter(function(e) {
                                return e.record.id !== d
                            });
                        case _.AutocompleterResultTypes.APPLICATION:
                            return D.default.queryApplications({
                                query: "",
                                limit: 100,
                                fuzzy: !0
                            });
                        case _.AutocompleterResultTypes.GUILD:
                            return D.default.queryGuilds({
                                query: "",
                                limit: 100,
                                fuzzy: !0
                            });
                        case _.AutocompleterResultTypes.TEXT_CHANNEL:
                            return D.default.queryChannels({
                                query: "",
                                guildId: U.default.getGuildId(),
                                limit: 100,
                                fuzzy: !0
                            });
                        case _.AutocompleterResultTypes.VOICE_CHANNEL:
                            return D.default.queryChannels({
                                query: "",
                                guildId: U.default.getGuildId(),
                                limit: 100,
                                fuzzy: !0,
                                filter: function() {
                                    return !0
                                },
                                type: g.GUILD_VOCAL_CHANNELS_KEY
                            })
                    }
                    for (var c = [], f = [], h = 1; h < Y.length; h += 1) {
                        var E = q(Y[h]);
                        if (null != E)(E.type !== _.AutocompleterResultTypes.TEXT_CHANNEL && E.type !== _.AutocompleterResultTypes.VOICE_CHANNEL || C.default.can(b.Permissions.VIEW_CHANNEL, E.record)) && f.push(E)
                    }
                    f.length > 0 && (r = c).push.apply(r, [(0, _.createHeaderResult)(M.default.Messages.QUICKSWITCHER_LAST_CHANNEL)].concat((0, l._)(f)));
                    var v = (e = function(e) {
                        return e === a || Y.includes(e)
                    }, t = [], y.default.getRecentlyEditedDrafts(y.DraftType.ChannelMessage).forEach(function(n) {
                        var i = n.channelId;
                        if (!e(i)) {
                            var r = q(i);
                            null != r && t.push(r)
                        }
                    }), t);
                    v.length > 0 && (u = c).push.apply(u, [(0, _.createHeaderResult)(M.default.Messages.QUICKSWITCHER_DRAFTS)].concat((0, l._)(v)));
                    var m = A.default.getMentionChannelIds().filter(function(e) {
                        return e !== a && !Y.includes(e)
                    }).map(function(e) {
                        return q(e)
                    }).filter(G.isNotNullish).reverse();
                    if (m.length > 0 && (c.push((0, _.createHeaderResult)(M.default.Messages.QUICKSWITCHER_MENTIONS)), c = c.concat(m)), null != s) {
                        var R = g.default.getSelectableChannelIds(s).filter(function(e) {
                            var t = T.default.getChannel(e);
                            return !(null == t || e === a || Y.includes(e) || L.default.isChannelMuted(t.guild_id, e) || null != t.parent_id && L.default.isChannelMuted(t.guild_id, t.parent_id)) && (0, p.getHasImportantUnread)(t)
                        }).map(function(e) {
                            return q(e)
                        }).filter(function(e) {
                            return e
                        });
                        Object.values(I.default.getActiveJoinedUnreadThreadsForGuild(s)).forEach(function(e) {
                            for (var t in e) {
                                var n = q(t);
                                null != n && R.push(n)
                            }
                        }), R.length > 0 && (c.push((0, _.createHeaderResult)(M.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), c = c.concat(R))
                    }
                    return o()(c).uniqBy(function(e) {
                        return e.record.id
                    }).value()
                }() : e, W) && (W = e, ! function(e, t) {
                    switch (H) {
                        case _.AutocompleterResultTypes.USER:
                            var n = R.default.getGuild(U.default.getGuildId());
                            e.unshift((0, _.createHeaderResult)(null != n ? M.default.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
                                name: n.name
                            }) : M.default.Messages.QUICKSWITCHER_QUERYMODE_USERS)), x = e;
                            break;
                        case _.AutocompleterResultTypes.TEXT_CHANNEL:
                            e.unshift((0, _.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), x = e;
                            break;
                        case _.AutocompleterResultTypes.VOICE_CHANNEL:
                            e.unshift((0, _.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), x = e;
                            break;
                        case _.AutocompleterResultTypes.GUILD:
                            e.unshift((0, _.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), x = e;
                            break;
                        case _.AutocompleterResultTypes.APPLICATION:
                            e.unshift((0, _.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), x = e;
                            break;
                        default:
                            x = e
                    }
                    if (t !== V) V = t, B = Math.max(t.length, B), P = (0, _.findNextSelectedResult)(_.FindResultDirections.DOWN, -1, x);
                    else {
                        var i = x[P];
                        null != i && i.type === _.AutocompleterResultTypes.HEADER && (P = (0, _.findNextSelectedResult)(_.FindResultDirections.DOWN, P, x))
                    }
                    J.emitChange()
                }(e, t))
            }

            function z() {
                V = null, B = 0, W = [], null != i && (i.destroy(), i = null)
            }
            var X = function(e) {
                (0, u._)(n, e);
                var t = (0, s._)(n);

                function n() {
                    return (0, r._)(this, n), t.apply(this, arguments)
                }
                var l = n.prototype;
                return l.initialize = function(e) {
                    var t;
                    this.waitFor(m.default, R.default, T.default), this.syncWith([v.default], function() {
                        return !0
                    }), F = c.default.get(O) || !1, Y = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
                }, l.getState = function() {
                    return {
                        channelHistory: Y
                    }
                }, l.isOpen = function() {
                    return null != i
                }, l.getResultTotals = function(e) {
                    return null == i ? 0 : null == e ? i.results.reduce(function(e, t) {
                        return t.type !== _.AutocompleterResultTypes.HEADER ? e + 1 : e
                    }, 0) : i.results.reduce(function(t, n) {
                        return n.type === e ? t + 1 : t
                    }, 0)
                }, l.channelNoticePredicate = function(e, t) {
                    var n = Date.now() - t >= b.CHANNEL_NOTICE_SHOW_DELAY;
                    return k && n
                }, l.getFrequentGuilds = function() {
                    return null != i ? i.queryGuilds("", 100) : null
                }, l.getFrequentGuildsLength = function() {
                    return null != i ? i.queryGuilds("", 100).length : 0
                }, l.getChannelHistory = function() {
                    return Y
                }, l.getProps = function() {
                    return {
                        theme: v.default.theme,
                        query: null != i ? i.query : "",
                        queryMode: H,
                        results: x,
                        selectedIndex: P,
                        seenTutorial: F,
                        maxQueryLength: B
                    }
                }, n
            }(d.default.PersistedStore);
            X.displayName = "QuickSwitcherStore", X.persistKey = "QuickSwitcherStore";
            var J = new X(f.default, {
                    CONNECTION_OPEN: Q,
                    CONNECTION_OPEN_SUPPLEMENTAL: Q,
                    QUICKSWITCHER_SHOW: K,
                    SHOW_ACTION_SHEET_QUICK_SWITCHER: K,
                    QUICKSWITCHER_HIDE: z,
                    OVERLAY_SET_INPUT_LOCKED: z,
                    HIDE_ACTION_SHEET_QUICK_SWITCHER: z,
                    QUICKSWITCHER_SEARCH: function(e) {
                        var t = e.query,
                            n = e.queryMode;
                        if (null == i) return !1;
                        var r = null !== (u = U.default.getGuildId()) && void 0 !== u ? u : null;
                        if (H !== n) {
                            i.setResultTypes(null != n ? [n] : w), i.setLimit(null != n ? 100 : 5);
                            var u, l, s = null !== (l = U.default.getGuildId()) && void 0 !== l ? l : void 0;
                            n === _.AutocompleterResultTypes.USER && null != s ? i.setOptions({
                                userFilters: {
                                    guild: s,
                                    friends: !0
                                }
                            }, !0) : n === _.AutocompleterResultTypes.VOICE_CHANNEL ? i.setOptions({
                                voiceChannelGuildFilter: null
                            }, !0) : i.setOptions({
                                userFilters: null,
                                voiceChannelGuildFilter: void 0
                            }, !0)
                        }
                        H = n, i.search(t, H === _.AutocompleterResultTypes.USER ? r : void 0)
                    },
                    QUICKSWITCHER_SELECT: function(e) {
                        P = e.selectedIndex
                    },
                    QUICKSWITCHER_SWITCH_TO: function() {
                        if (F) return !1;
                        F = !0, c.default.set(O, !0)
                    },
                    CHANNEL_SELECT: function(e) {
                        var t = e.channelId;
                        if (null == t) return !1;
                        (Y = Y.filter(function(e) {
                            return e !== t
                        })).unshift(t), Y.length > 4 && (Y.length = 4)
                    }
                }),
                Z = J
        },
        806790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getHasImportantUnread: function() {
                    return l
                }
            }), n("661223");
            var i = n("417223"),
                r = n("301309"),
                u = n("587361");

            function l(e) {
                return i.default.hasUnread(e.id) && r.default.getChannelUnreadMode(e) === u.UnreadMode.IMPORTANT
            }
        },
        405127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("87627"),
                r = n("29713"),
                u = n("778455"),
                l = function(e) {
                    (0, r._)(n, e);
                    var t = (0, u._)(n);

                    function n(e) {
                        var r;
                        return (0, i._)(this, n), (r = t.call(this)).id = e.id, r.path = e.path, r
                    }
                    return n.fromPath = function(e) {
                        return new n({
                            id: e,
                            path: e
                        })
                    }, n
                }(n("885714").default)
        },
        832885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EVERYONE_ID: function() {
                    return D
                },
                MemberListRowTypes: function() {
                    return r
                },
                default: function() {
                    return V
                }
            });
            var i, r, u = n("87627"),
                l = n("29713"),
                s = n("21189"),
                a = n("227094"),
                o = n("154005"),
                d = n("778455");
            n("724458"), n("357629"), n("653041"), n("814951"), n("230036"), n("293114"), n("363505"), n("817285");
            var c = n("392711"),
                f = n.n(c),
                _ = n("505578"),
                h = n.n(_),
                E = n("768517"),
                p = n("661223"),
                I = n("312916"),
                v = n("694574"),
                S = n("311545"),
                T = n("262047"),
                y = n("731865"),
                g = n("362753"),
                m = n("361733"),
                R = n("327271"),
                C = n("565639"),
                A = n("145080"),
                N = n("871831"),
                U = n("467006"),
                L = n("30175"),
                D = "everyone";

            function G(e, t, n, i) {
                switch (t) {
                    case U.StatusTypes.ONLINE:
                    case U.StatusTypes.OFFLINE:
                    case U.StatusTypes.UNKNOWN:
                        return {
                            type: "GROUP", key: t, id: t, get title() {
                                switch (t) {
                                    case U.StatusTypes.ONLINE:
                                        return L.default.Messages.STATUS_ONLINE;
                                    case U.StatusTypes.OFFLINE:
                                        return L.default.Messages.STATUS_OFFLINE;
                                    default:
                                        return L.default.Messages.STATUS_UNKNOWN
                                }
                            }, count: n, index: i
                        };
                    default:
                        var r = R.default.getGuild(e),
                            u = null != r ? r.getRole(t) : null;
                        return {
                            type: "GROUP", key: t, id: t, title: null != u ? u.name : "", count: n, index: i
                        }
                }
            }

            function b(e, t, n) {
                var i = n === T.default.getId(),
                    r = C.default.isMobileOnline(n),
                    u = i ? A.default.getStatus() : C.default.getStatus(n, e),
                    l = i ? A.default.getActivities() : C.default.getActivities(n, e),
                    o = S.default.getStreamForUser(n, e),
                    d = N.default.getUser(n);
                return null == d ? null : (0, a._)((0, s._)({
                    type: "MEMBER"
                }, m.default.getMember(e, n)), {
                    user: d,
                    status: u,
                    activities: l,
                    applicationStream: o,
                    isOwner: t === n,
                    isMobileOnline: r
                })
            }

            function M(e) {
                var t = y.default.getChannel(e);
                return null == t ? D : null == t.memberListId ? function(e) {
                    return v.default.canEveryone(U.Permissions.VIEW_CHANNEL, e) ? D : h().v3(f()(e.permissionOverwrites).reduce(function(e, t) {
                        var n = t.id,
                            i = t.allow,
                            r = t.deny;
                        return E.default.has(i, U.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : E.default.has(r, U.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
                    }, []).sort().join(",")).toString()
                }(t) : t.memberListId
            }(i = r || (r = {})).GROUP = "GROUP", i.MEMBER = "MEMBER";
            var O = function() {
                    function e(t, n) {
                        (0, u._)(this, e), this.rows = [], this.groups = [], this.members = {}, this.version = 0, this.guildId = t, this.listId = n, this.updateOwnerId()
                    }
                    var t = e.prototype;
                    return t.updateOwnerId = function() {
                        var e = R.default.getGuild(this.guildId);
                        if (null == e) return !1;
                        var t = v.default.getGuildVisualOwnerId(e);
                        return this.ownerId !== t && (this.ownerId = t, !0)
                    }, t.setGroups = function(e) {
                        var t = this,
                            n = 0;
                        this.groups = e.map(function(e) {
                            var i, r = n,
                                u = Math.max(0, null !== (i = e.count) && void 0 !== i ? i : 0);
                            return n += u + 1, G(t.guildId, e.id, u, r)
                        }), this.rows.length = n
                    }, t.sync = function(e, t) {
                        var n = (0, o._)(e, 1)[0],
                            i = this;
                        t.forEach(function(e, t) {
                            return i.update(n + t, e)
                        })
                    }, t.invalidate = function(e) {
                        for (var t = (0, o._)(e, 2), n = t[0], i = t[1], r = n; r <= i; r++) {
                            var u = this.rows[r];
                            if (null == u) break;
                            delete this.rows[r], "MEMBER" === u.type && delete this.members[u.user.id]
                        }
                        this.version++
                    }, t.insert = function(e, t) {
                        var n = t.group,
                            i = t.member;
                        if (null != n) this.rows.splice(e, 0, G(this.guildId, n.id, n.count));
                        else if (null != i) {
                            var r = b(this.guildId, this.ownerId, i.user.id);
                            if (null == r) return;
                            this.rows.splice(e, 0, r), this.members[i.user.id] = r
                        }
                        this.version++
                    }, t.update = function(e, t) {
                        var n = t.group,
                            i = t.member,
                            r = this.rows[e];
                        if (null != r && "MEMBER" === r.type && delete this.members[r.user.id], null != n) this.rows[e] = G(this.guildId, n.id, n.count);
                        else if (null != i) {
                            var u = b(this.guildId, this.ownerId, i.user.id);
                            if (null == u) return;
                            this.rows[e] = u, this.members[i.user.id] = u
                        }
                        this.version++
                    }, t.delete = function(e) {
                        var t = this.rows[e];
                        null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
                    }, t.rebuildMember = function(e) {
                        var t = this.members[e];
                        null != t && (Object.assign(t, b(this.guildId, this.ownerId, e)), this.version++)
                    }, t.rebuildMembers = function() {
                        var e = this;
                        f().forEach(this.members, function(t, n) {
                            e.rebuildMember(n)
                        })
                    }, e
                }(),
                w = new(function() {
                    function e() {
                        (0, u._)(this, e), this._guildLists = {}
                    }
                    var t = e.prototype;
                    return t.get = function(e, t) {
                        var n = this._guildLists[e];
                        null == n && (n = this._guildLists[e] = {});
                        var i = n[t];
                        return null == i && ((i = new O(e, t)).setGroups([{
                            id: U.StatusTypes.UNKNOWN,
                            count: 0
                        }]), n[t] = i), i
                    }, t.forEach = function(e, t) {
                        if (null == e) f().forEach(this._guildLists, function(e) {
                            f().forEach(e, t)
                        });
                        else {
                            var n = this._guildLists[e];
                            null != n && f().forEach(n, t)
                        }
                    }, t.delete = function(e) {
                        delete this._guildLists[e]
                    }, t.reset = function() {
                        this._guildLists = {}
                    }, e
                }());

            function P() {
                w.reset()
            }
            var F = [];

            function k() {
                var e = S.default.getAllApplicationStreams(),
                    t = F.concat(e);
                F = e, t.forEach(function(e) {
                    w.forEach(null, function(t) {
                        return t.rebuildMember(e.ownerId)
                    })
                })
            }

            function H() {
                var e = T.default.getId();
                w.forEach(null, function(t) {
                    return t.rebuildMember(e)
                })
            }
            var x = function(e) {
                (0, l._)(n, e);
                var t = (0, d._)(n);

                function n() {
                    return (0, u._)(this, n), t.apply(this, arguments)
                }
                var i = n.prototype;
                return i.initialize = function() {
                    this.waitFor(N.default, R.default, y.default, m.default, C.default, A.default, T.default, g.default, S.default), this.syncWith([A.default], H), this.syncWith([S.default], k)
                }, i.getProps = function(e, t) {
                    var n = w.get(e, M(t));
                    return {
                        listId: "".concat(n.guildId, ":").concat(n.listId),
                        groups: n.groups,
                        rows: n.rows,
                        version: n.version
                    }
                }, i.getRows = function(e, t) {
                    return w.get(e, M(t)).rows
                }, n
            }(p.default.Store);
            x.displayName = "ChannelMemberStore";
            var V = new x(I.default, {
                CONNECTION_OPEN: P,
                OVERLAY_INITIALIZE: P,
                GUILD_MEMBER_LIST_UPDATE: function(e) {
                    var t = w.get(e.guildId, e.id);
                    e.ops.forEach(function(e) {
                        switch (e.op) {
                            case "SYNC":
                                t.sync(e.range, e.items);
                                break;
                            case "INVALIDATE":
                                t.invalidate(e.range);
                                break;
                            case "INSERT":
                                t.insert(e.index, e.item);
                                break;
                            case "UPDATE":
                                t.update(e.index, e.item);
                                break;
                            case "DELETE":
                                t.delete(e.index)
                        }
                    }), t.setGroups(e.groups)
                },
                GUILD_UPDATE: function(e) {
                    var t = e.guild;
                    w.forEach(t.id, function(e) {
                        e.updateOwnerId() && e.rebuildMembers()
                    })
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    w.delete(t.id)
                },
                GUILD_ROLE_UPDATE: function(e) {
                    var t = e.guildId;
                    w.forEach(t, function(e) {
                        return e.rebuildMembers()
                    })
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.user;
                    w.forEach(t, function(e) {
                        return e.rebuildMember(n.id)
                    })
                },
                CHANNEL_UPDATES: function() {
                    return !0
                }
            })
        },
        677239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_NUM_SELECTED_ITEMS: function() {
                    return y
                },
                default: function() {
                    return L
                }
            });
            var i = n("87627"),
                r = n("200344"),
                u = n("29713"),
                l = n("21189"),
                s = n("227094"),
                a = n("778455");
            n("723768"), n("301563"), n("653041"), n("363505"), n("462848"), n("357629");
            var o = n("392711"),
                d = n.n(o),
                c = n("661223"),
                f = n("312916"),
                _ = n("580905"),
                h = n("991400"),
                E = n("731865"),
                p = n("327271"),
                I = n("232733"),
                v = n("632706"),
                S = n("467006"),
                T = n("746835"),
                y = 100,
                g = new _.default({
                    computeBonus: function() {
                        return 100
                    },
                    computeWeight: function(e) {
                        var t = 0;
                        return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
                    },
                    lookupKey: function(e) {
                        var t, n;
                        return null !== (n = null !== (t = p.default.getGuild(e)) && void 0 !== t ? t : E.default.getChannel(e)) && void 0 !== n ? n : E.default.getChannel(E.default.getDMFromUserId(e))
                    },
                    afterCompute: function() {},
                    numFrequentlyItems: y,
                    maxSamples: 10
                }),
                m = null,
                R = null;

            function C(e) {
                var t = e.guildId,
                    n = e.channelId,
                    i = !1;
                return n !== m && (m = null != n ? n : null, null != n && S.ID_REGEX.test(n) && (i = !0, g.track(n), N.pendingUsages.push({
                    key: n,
                    timestamp: Date.now()
                }))), t !== R && (R = null != t ? t : null, null != t && S.ID_REGEX.test(t) && (i = !0, g.track(t), N.pendingUsages.push({
                    key: t,
                    timestamp: Date.now()
                }))), i
            }

            function A() {
                var e, t = null === (e = h.default.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
                if (null == t) return !1;
                g.overwriteHistory(d().mapValues(t, function(e) {
                    return (0, s._)((0, l._)({}, e), {
                        recentUses: e.recentUses.map(Number).filter(function(e) {
                            return e > 0
                        })
                    })
                }), N.pendingUsages)
            }
            var N = {
                    pendingUsages: []
                },
                U = function(e) {
                    (0, u._)(n, e);
                    var t = (0, a._)(n);

                    function n() {
                        return (0, i._)(this, n), t.apply(this, arguments)
                    }
                    var l = n.prototype;
                    return l.initialize = function(e) {
                        this.waitFor(v.default, I.default), null != e && (e.pendingUsages = e.pendingUsages.filter(function(e) {
                            return null != e && S.ID_REGEX.test(e.key)
                        }), N = e), this.syncWith([h.default], A)
                    }, l.getState = function() {
                        return N
                    }, l.hasPendingUsage = function() {
                        return N.pendingUsages.length > 0
                    }, l.getFrequentlyWithoutFetchingLatest = function() {
                        return g.frequently
                    }, l.getScoreWithoutFetchingLatest = function(e) {
                        var t;
                        return null !== (t = g.getFrecency(e)) && void 0 !== t ? t : 0
                    }, l.getScoreForDMWithoutFetchingLatest = function(e) {
                        var t = E.default.getDMFromUserId(e);
                        return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
                    }, l.getMaxScore = function() {
                        return 10 * y
                    }, l.getBonusScore = function() {
                        return 100
                    }, (0, r._)(n, [{
                        key: "frecencyWithoutFetchingLatest",
                        get: function() {
                            return g
                        }
                    }]), n
                }(c.default.PersistedStore);
            U.displayName = "FrecencyStore", U.persistKey = "FrecencyStore";
            var L = new U(f.default, {
                CHANNEL_SELECT: C,
                VOICE_CHANNEL_SELECT: C,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t = e.settings.type,
                        n = e.wasSaved;
                    return t === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && !!n && (N.pendingUsages = [], !0)
                }
            })
        },
        739273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("21189"),
                r = n("227094"),
                u = n("261047"),
                l = n("735250"),
                s = n("470079"),
                a = n("974328"),
                o = n("521588"),
                d = n("467006"),
                c = s.forwardRef(function(e, t) {
                    var n = e.href,
                        c = e.children,
                        f = e.onClick,
                        _ = e.onKeyPress,
                        h = e.focusProps,
                        E = (0, u._)(e, ["href", "children", "onClick", "onKeyPress", "focusProps"]),
                        p = s.useCallback(function(e) {
                            !e.repeat && ((e.charCode === d.KeyboardKeys.SPACE || e.charCode === d.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, o.transitionTo)(n), null == f || f()), null == _ || _(e))
                        }, [n, _, f]),
                        I = s.useCallback(function(e) {
                            !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, o.transitionTo)(n), null == f || f())
                        }, [n, f]),
                        v = (0, l.jsx)("a", (0, r._)((0, i._)({
                            ref: t,
                            href: n,
                            onClick: I,
                            onKeyPress: p
                        }, E), {
                            children: c
                        }));
                    return (0, l.jsx)(a.FocusRing, (0, r._)((0, i._)({}, h), {
                        children: v
                    }))
                })
        },
        733679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("735250"),
                r = n("470079"),
                u = n("803997"),
                l = n.n(u),
                s = n("974328"),
                a = n("545423");

            function o(e) {
                var t = e.children,
                    n = e["aria-label"],
                    u = e.className,
                    o = e.position,
                    d = r.useRef(null),
                    c = null != n ? n : "string" == typeof t && t;
                return (0, i.jsx)(s.Tooltip, {
                    position: null != o ? o : "top",
                    delay: 500,
                    text: t,
                    "aria-label": c,
                    children: function(n) {
                        var r = n.onMouseEnter,
                            s = n.onMouseLeave;
                        return (0, i.jsx)("div", {
                            className: l()(u, a.overflow),
                            ref: d,
                            "aria-hidden": e["aria-hidden"],
                            onMouseEnter: function() {
                                var e = d.current;
                                null != e && e.offsetWidth < e.scrollWidth && (null == r || r())
                            },
                            onMouseLeave: s,
                            children: t
                        })
                    }
                })
            }
        },
        113079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return i
                }
            });
            var i = n("470079").createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        857363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("21189"),
                r = n("227094"),
                u = n("261047"),
                l = n("735250");
            n("470079");
            var s = n("336328"),
                a = n("998262"),
                o = n("262113"),
                d = (0, s.replaceIcon)(function(e) {
                    var t = e.width,
                        n = void 0 === t ? 24 : t,
                        s = e.height,
                        a = void 0 === s ? 24 : s,
                        d = e.color,
                        c = void 0 === d ? "currentColor" : d,
                        f = e.foreground,
                        _ = (0, u._)(e, ["width", "height", "color", "foreground"]);
                    return 16 === n || 16 === a ? (0, l.jsx)("svg", (0, r._)((0, i._)({}, (0, o.default)(_)), {
                        width: n,
                        height: a,
                        viewBox: "0 0 16 16",
                        children: (0, l.jsx)("path", {
                            fill: c,
                            className: f,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    })) : (0, l.jsx)("svg", (0, r._)((0, i._)({}, (0, o.default)(_)), {
                        width: n,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: c,
                            className: f,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    }))
                }, a.SettingsIcon, void 0, {
                    size: 24
                })
        },
        288682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var i = n("470079"),
                r = n("661223"),
                u = n("777084"),
                l = n("470526");

            function s() {
                var e = i.useContext(u.default).windowId;
                return (0, r.useStateFromStores)([l.default], function() {
                    return l.default.isFocused(e)
                }, [e])
            }
        }
    }
]);
//# sourceMappingURL=50756.38f030abea810a429202.js.map