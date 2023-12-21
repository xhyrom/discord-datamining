(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78338"], {
        868200: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("470079");

            function u(e, t) {
                var n = r.useRef(e);
                return r.useEffect(function() {
                    var e = function(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    };
                    return document.addEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }, [n, t]), n
            }
        },
        886623: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearHotspotOverride: function() {
                    return s
                },
                hideHotspot: function() {
                    return a
                },
                setHotspotOverride: function() {
                    return i
                }
            });
            var r = n("312916"),
                u = n("328470"),
                o = n("467006");

            function a(e) {
                u.default.track(o.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(function() {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function s(e) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        483801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var r = n("87627"),
                u = n("29713"),
                o = n("778455");
            n("330740"), n("996173"), n("47120"), n("357629");
            var a = n("661223"),
                i = n("312916"),
                s = n("878001"),
                l = n("328426"),
                c = new Set,
                d = {},
                f = function(e) {
                    (0, u._)(n, e);
                    var t = (0, o._)(n);

                    function n() {
                        return (0, r._)(this, n), t.apply(this, arguments)
                    }
                    var a = n.prototype;
                    return a.initialize = function(e) {
                        null != e && (Array.isArray(e.hiddenHotspots) && (c = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (d = e.hotspotOverrides))
                    }, a.hasHotspot = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = !t && d[e];
                        return !(l.CONFERENCE_MODE_ENABLED || s.ProcessArgs.isDisallowPopupsSet()) && (n || !c.has(e))
                    }, a.hasHiddenHotspot = function(e) {
                        return c.has(e)
                    }, a.getHotspotOverride = function(e) {
                        return d[e]
                    }, a.getState = function() {
                        return {
                            hiddenHotspots: c,
                            hotspotOverrides: d
                        }
                    }, n
                }(a.default.PersistedStore);
            f.displayName = "HotspotStore", f.persistKey = "hotspots", f.migrations = [function(e) {
                return {
                    hiddenHotspots: null != e ? e : [],
                    hotspotOverrides: {}
                }
            }];
            var v = new f(i.default, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.hiddenHotspots;
                    c = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    var t = e.location;
                    if (c.has(t)) return !1;
                    c.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    var t = e.location,
                        n = e.enabled;
                    d[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    var t = e.location;
                    if (null == d[t]) return !1;
                    delete d[t]
                }
            })
        },
        925970: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return o.default
                }
            });
            var r = n("997419");
            n.es(r, t);
            var u = n("886623");
            n.es(u, t);
            var o = n("483801")
        },
        413839: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("87627"),
                u = n("29713"),
                o = n("21189"),
                a = n("227094"),
                i = n("154005"),
                s = n("778455");
            n("151809"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120");
            var l = n("661223"),
                c = n("312916"),
                d = n("243770"),
                f = n("731865"),
                v = n("648450"),
                E = {},
                p = {},
                I = {},
                h = void 0,
                S = void 0;

            function _(e) {
                delete E[e];
                var t = I[e];
                null != t && delete p[t], delete I[e]
            }
            var A = function(e) {
                (0, u._)(n, e);
                var t = (0, s._)(n);

                function n() {
                    return (0, r._)(this, n), t.apply(this, arguments)
                }
                var o = n.prototype;
                return o.getInteraction = function(e) {
                    var t = p[e.id];
                    return null != t ? E[t] : null
                }, o.getMessageInteractionStates = function() {
                    var e = {},
                        t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var u, o = Object.entries(E)[Symbol.iterator](); !(t = (u = o.next()).done); t = !0) {
                            var a = (0, i._)(u.value, 2),
                                s = a[0],
                                l = a[1],
                                c = I[s];
                            null != c && (e[c] = l.state)
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && null != o.return && o.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    return e
                }, o.canQueueInteraction = function(e, t) {
                    var n = p[e];
                    return (null == n || null == E[n] || E[n].state === v.InteractionState.FAILED) && (null == E[t] || E[t].state === v.InteractionState.FAILED) && !0
                }, o.getIFrameModalApplicationId = function() {
                    return S
                }, o.getIFrameModalKey = function() {
                    return h
                }, n
            }(l.default.Store);
            A.displayName = "InteractionStore";
            var m = new A(c.default, {
                LOGOUT: function() {
                    E = {}, p = {}, I = {}
                },
                INTERACTION_QUEUE: function(e) {
                    var t = e.nonce,
                        n = e.messageId,
                        r = e.data,
                        u = e.onCreate,
                        o = e.onCancel,
                        a = e.onSuccess,
                        i = e.onFailure;
                    null != n && (p[n] = t, I[t] = n), E[t] = {
                        state: v.InteractionState.QUEUED,
                        data: r,
                        onCreate: u,
                        onCancel: o,
                        onSuccess: a,
                        onFailure: i
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t, n = e.nonce,
                        r = e.interactionId;
                    if (null == n) return !1;
                    var u = E[n];
                    if (null == u || u.state !== v.InteractionState.QUEUED) return !1;
                    u.state = v.InteractionState.CREATED, null === (t = u.onCreate) || void 0 === t || t.call(u, r)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t, n = e.nonce;
                    if (null == n) return !1;
                    var r = E[n];
                    if (null == r) return !1;
                    null === (t = r.onSuccess) || void 0 === t || t.call(r), _(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t, n = e.nonce,
                        r = e.errorCode,
                        u = e.errorMessage;
                    if (null == n) return !1;
                    var i = E[n];
                    if (null == i) return !1;
                    null === (t = i.onFailure) || void 0 === t || t.call(i, r, u), i.data.interactionType === d.InteractionTypes.APPLICATION_COMMAND ? _(n) : E[n] = (0, a._)((0, o._)({}, i), {
                        state: v.InteractionState.FAILED,
                        errorCode: r,
                        errorMessage: u
                    })
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.message;
                    if (null == t.nonce) return !1;
                    var n, r = E[t.nonce];
                    if (null == r) return !1;
                    null === (n = r.onSuccess) || void 0 === n || n.call(r), _(t.nonce)
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    if (null == f.default.getChannel(t)) return !1;
                    var n = !0,
                        r = !1,
                        u = void 0;
                    try {
                        for (var o, a = Object.entries(E)[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var s = (0, i._)(o.value, 2),
                                l = s[0];
                            s[1].state === v.InteractionState.FAILED && _(l)
                        }
                    } catch (e) {
                        r = !0, u = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw u
                        }
                    }
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    S = e.application.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    h = void 0, S = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    h = e.modalKey
                }
            })
        },
        648450: function(e, t, n) {
            "use strict";
            var r, u;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return r
                }
            }), (u = r || (r = {}))[u.QUEUED = 0] = "QUEUED", u[u.CREATED = 1] = "CREATED", u[u.FAILED = 2] = "FAILED"
        },
        930232: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("735250");
            n("470079");
            var u = n("336328"),
                o = n("69240"),
                a = (0, u.replaceIcon)(function(e) {
                    var t = e.width,
                        n = e.height,
                        u = e.color,
                        o = e.className,
                        a = e.foreground;
                    return (0, r.jsx)("svg", {
                        className: o,
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: void 0 === u ? "currentColor" : u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                        })
                    })
                }, o.ScreenArrowIcon, void 0, {
                    size: 24
                })
        },
        313572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FullScreenLayers: function() {
                    return N
                },
                closeFullScreenLayer: function() {
                    return L
                },
                openFullScreenLayer: function() {
                    return C
                },
                useFullScreenLayerStore: function() {
                    return m
                }
            });
            var r, u, o = n("21189"),
                a = n("227094"),
                i = n("761020");
            n("814951"), n("363505"), n("462848"), n("357629");
            var s = n("735250"),
                l = n("470079"),
                c = n("97613"),
                d = n.n(c),
                f = n("194621"),
                v = n("652874"),
                E = n("849557"),
                p = n("974328"),
                I = n("96185"),
                h = n("702340"),
                S = n("990119"),
                _ = n("30268"),
                A = (0, h.cssValueToNumber)(E.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            (r = u || (u = {}))[r.ENTERING = 1] = "ENTERING", r[r.ENTERED = 2] = "ENTERED", r[r.EXITING = 3] = "EXITING", r[r.EXITED = 4] = "EXITED";
            var m = (0, v.default)(function(e) {
                return {
                    fullScreenLayers: [],
                    addLayer: function(t) {
                        return e(function(e) {
                            var n = e.fullScreenLayers;
                            return {
                                fullScreenLayers: (0, i._)(n).concat([t])
                            }
                        })
                    }
                }
            });

            function T(e) {
                var t = e.item,
                    n = l.useRef(null);
                return (0, p.useFocusLock)(n), l.useEffect(function() {
                    return I.default.disable(), I.default.enableTemp(function(e) {
                            return {
                                POP_LAYER: {
                                    binds: ["esc"],
                                    comboKeysBindGlobal: !0,
                                    action() {
                                        L(e)
                                    }
                                }
                            }
                        }(t.key)),
                        function() {
                            I.default.disableTemp()
                        }
                }, [t.key]), (0, s.jsx)(t.LayerComponent, {
                    children: (0, s.jsxs)("div", {
                        className: _.root,
                        ref: n,
                        children: [(0, s.jsx)("div", {
                            className: _.drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : 3,
                            closeLayer: function() {
                                return L(t.key)
                            }
                        })]
                    })
                })
            }
            var y = {
                    enter: _.enter,
                    enterActive: _.enterActive,
                    enterDone: _.enterDone,
                    exit: _.exit,
                    exitActive: _.exitActive,
                    exitDone: _.exitDone
                },
                R = {
                    enter: _.enterReducedMotion,
                    enterActive: _.enterActiveReducedMotion,
                    enterDone: _.enterDoneReducedMotion,
                    exit: _.exitReducedMotion,
                    exitActive: _.exitActiveReducedMotion,
                    exitDone: _.exitDoneReducedMotion
                };

            function N() {
                var e = l.useContext(p.AccessibilityPreferencesContext).reducedMotion.enabled ? R : y,
                    t = m(function(e) {
                        return e.fullScreenLayers
                    });
                return (0, s.jsx)(f.TransitionGroup, {
                    children: t.map(function(n) {
                        return (0, s.jsx)(f.CSSTransition, {
                            classNames: e,
                            timeout: A,
                            onEntered: function() {
                                m.setState({
                                    fullScreenLayers: t.map(function(e) {
                                        return e.key === n.key ? (0, a._)((0, o._)({}, e), {
                                            transitionState: 2
                                        }) : e
                                    })
                                })
                            },
                            unmountOnExit: !0,
                            children: (0, s.jsx)(T, {
                                item: n
                            })
                        }, n.key)
                    })
                })
            }

            function C(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    n = t.layerKey,
                    r = t.Layer,
                    u = null != n ? n : d()();
                return m.setState(function(t) {
                    return {
                        fullScreenLayers: (0, i._)(t.fullScreenLayers).concat([{
                            key: u,
                            transitionState: 1,
                            LayerComponent: null != r ? r : S.default,
                            render: e
                        }])
                    }
                }), u
            }

            function L(e) {
                m.setState(function(t) {
                    return {
                        fullScreenLayers: t.fullScreenLayers.filter(function(t) {
                            return t.key !== e
                        })
                    }
                })
            }
        },
        568376: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return y
                },
                default: function() {
                    return C
                }
            });
            var r = n("87627"),
                u = n("29713"),
                o = n("21189"),
                a = n("227094"),
                i = n("778455");
            n("814951"), n("653041"), n("357629");
            var s = n("735250"),
                l = n("470079"),
                c = n("803997"),
                d = n.n(c),
                f = n("512722"),
                v = n.n(f),
                E = n("974328"),
                p = n("498882"),
                I = n("440139"),
                h = n("535291"),
                S = n("871831"),
                _ = n("654703"),
                A = n("920341"),
                m = n("616571"),
                T = n("984045"),
                y = {
                    SIZE_16: 16,
                    SIZE_24: 24,
                    SIZE_32: 32,
                    SIZE_56: 56
                };

            function R(e, t) {
                var n = e instanceof h.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            var N = function(e) {
                (0, u._)(n, e);
                var t = (0, i._)(n);

                function n() {
                    var e;
                    return (0, r._)(this, n), e = t.apply(this, arguments), e.state = {
                        popoutUserId: null
                    }, e._ref = l.createRef(), e.defaultRenderUser = function(t, n, r) {
                        var u = e.props,
                            o = u.showUserPopout,
                            a = u.guildId,
                            i = u.size;
                        if (null == t) {
                            if (!e.props.showDefaultAvatarsForNullUsers) return (0, s.jsx)("div", {
                                className: T.emptyUser
                            });
                            var l = (null != r ? r : 0) % A.default.DEFAULT_AVATARS.length,
                                c = A.default.DEFAULT_AVATARS[l];
                            return (0, s.jsx)("img", {
                                src: c,
                                alt: "",
                                className: T.avatar
                            })
                        }
                        var d = (0, s.jsx)("img", {
                            src: t.getAvatarURL(a, i),
                            alt: t.username,
                            className: T.avatar
                        }, t.id);
                        return o ? (0, s.jsx)(E.Clickable, {
                            className: T.clickableAvatar,
                            onClick: function() {
                                null != e._ref.current && null != t && e.setState({
                                    popoutUserId: t.id
                                })
                            },
                            tabIndex: -1,
                            children: d
                        }, t.id) : d
                    }, e
                }
                var c = n.prototype;
                return c.renderUsers = function() {
                    for (var e = this.props, t = e.users, n = e.max, r = e.renderUser, u = void 0 === r ? this.defaultRenderUser : r, o = e.size, a = e.extraDetail, i = [], l = t.length === n ? t.length : n - 1, c = this.renderMoreUsers(l), d = 0; d < l && d < t.length;) {
                        var f, v = null == c && null == a && d === t.length - 1,
                            E = u(t[d], v, d);
                        i.push(v ? (0, s.jsx)("div", {
                            className: T.avatarContainer,
                            children: E
                        }, R(null !== (f = t[d]) && void 0 !== f ? f : null, d)) : (0, s.jsx)(m.default, {
                            className: T.avatarContainerMasked,
                            height: o,
                            width: o,
                            mask: m.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: E
                        }, R(t[d], d))), d++
                    }
                    return null != a ? i.push(a) : null != c && i.push(c), i
                }, c.renderMoreUsers = function(e) {
                    var t = this.props,
                        n = t.max,
                        r = t.count,
                        u = t.hideMoreUsers,
                        o = t.renderMoreUsers,
                        a = t.users,
                        i = Math.min(e, a.length);
                    if (!u) {
                        if (null != r) {
                            if (r >= n) return (0, s.jsx)(l.Fragment, {
                                children: o("".concat(n, "+"), n)
                            }, "more-users");
                            if (r > a.length) {
                                var c = r - a.length;
                                return (0, s.jsx)(l.Fragment, {
                                    children: o("+".concat(c), c)
                                }, "more-users")
                            }
                        } else if (i < a.length) {
                            var d = Math.min(a.length - i, 99);
                            return (0, s.jsx)(l.Fragment, {
                                children: o("+".concat(d), d)
                            }, "more-users")
                        }
                    }
                }, c.renderIcon = function() {
                    return this.props.renderIcon ? (0, s.jsx)(_.default, {
                        foreground: T.foreground,
                        className: T.icon
                    }) : null
                }, c.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.className,
                        r = t.size,
                        u = t.users,
                        i = t.guildId,
                        l = t.showUserPopout,
                        c = t.useFallbackUserForPopout,
                        f = this.state.popoutUserId,
                        h = u.find(function(e) {
                            return null != e && e.id === f
                        }),
                        _ = c && null == S.default.getUser(f);
                    return (0, s.jsx)(E.Popout, {
                        position: "right",
                        preload: null == h ? void 0 : function() {
                            return (0, p.default)(h.id, h.getAvatarURL(i, 80), {
                                guildId: i
                            })
                        },
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: function(t) {
                            return v()(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, s.jsx)(I.default, (0, a._)((0, o._)((0, a._)((0, o._)({}, e.props), {
                                user: _ && null != h ? h : void 0
                            }), t), {
                                userId: f,
                                guildId: e.props.guildId
                            }))
                        },
                        onRequestClose: function() {
                            return e.setState({
                                popoutUserId: null
                            })
                        },
                        children: function(t) {
                            return (0, s.jsxs)("div", (0, a._)((0, o._)({
                                className: d()(n, T.container, function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y.SIZE_24;
                                    switch (e) {
                                        case y.SIZE_16:
                                            return T.size16;
                                        case y.SIZE_24:
                                            return T.size24;
                                        case y.SIZE_32:
                                            return T.size32;
                                        case y.SIZE_56:
                                            return T.size56;
                                        default:
                                            return T.size24
                                    }
                                }(r)),
                                ref: e._ref
                            }, t), {
                                children: [e.renderIcon(), e.renderUsers()]
                            }))
                        }
                    })
                }, n
            }(l.PureComponent);
            N.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, s.jsx)("div", {
                        className: T.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: y.SIZE_24
            };
            var C = N
        }
    }
]);
//# sourceMappingURL=78338.ff40ff01eec281562ee9.js.map