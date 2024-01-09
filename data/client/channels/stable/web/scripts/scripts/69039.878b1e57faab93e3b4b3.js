(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69039"], {
        741148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                focus: function() {
                    return o
                },
                hidden: function() {
                    return a
                },
                resized: function() {
                    return s
                },
                fullscreenChange: function() {
                    return E
                },
                init: function() {
                    return c
                },
                unload: function() {
                    return _
                }
            });
            var i = n("917351"),
                l = n("913144"),
                r = n("563680"),
                u = n("816454");

            function o(e, t) {
                l.default.dispatch({
                    type: "WINDOW_FOCUS",
                    windowId: (0, u.getWindowId)(e),
                    focused: t
                })
            }

            function a(e) {
                l.default.dispatch({
                    type: "WINDOW_HIDDEN",
                    windowId: (0, u.getWindowId)(e)
                })
            }
            let d = (0, i.memoize)(e => (0, i.debounce)((t, n) => {
                l.default.dispatch({
                    type: "WINDOW_RESIZED",
                    windowId: e,
                    width: t,
                    height: n
                })
            }, 100));

            function s(e) {
                let t = (0, u.getWindowId)(e),
                    n = d(t);
                n(e.innerWidth, e.innerHeight)
            }

            function E(e) {
                let t = (0, u.getWindowId)(e);
                l.default.dispatch({
                    type: "WINDOW_FULLSCREEN_CHANGE",
                    windowId: t,
                    isElementFullscreen: (0, r.isFullScreen)(null, e.document)
                })
            }

            function c(e) {
                let t = (0, u.getWindowId)(e),
                    n = e.document;
                l.default.dispatch({
                    type: "WINDOW_INIT",
                    windowId: t,
                    isElementFullscreen: (0, r.isFullScreen)(null, n),
                    focused: n.hasFocus(),
                    width: e.innerWidth,
                    height: e.innerHeight
                })
            }

            function _(e) {
                l.default.dispatch({
                    type: "WINDOW_UNLOAD",
                    windowId: (0, u.getWindowId)(e)
                })
            }
        },
        43982: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("70102");
            var i = n("44170"),
                l = n("597755"),
                r = n.n(l),
                u = n("522632"),
                o = n("748820"),
                a = n("872717"),
                d = n("861309"),
                s = n("49111");
            let E = s.RPC_STARTING_PORT + s.RPC_PORT_RANGE - 1;

            function c(e, t) {
                if (null == e || null == t) throw Error("cmd and name required");
                return "".concat(e, ":").concat(t)
            }
            let _ = u.parse(location.search.slice(1)),
                O = parseInt(null != _.rpc && "" !== _.rpc ? _.rpc : s.RPC_STARTING_PORT, 10),
                f = null;
            class A extends i.EventEmitter {
                get port() {
                    return O
                }
                get connected() {
                    return null != f && f.readyState === WebSocket.OPEN
                }
                connect() {
                    if (null == f) {
                        if (O > E) {
                            O = s.RPC_STARTING_PORT, this.emit("disconnected");
                            return
                        }
                        try {
                            f = new WebSocket("ws://127.0.0.1:".concat(this.port, "/?v=").concat(s.RPC_VERSION))
                        } catch (e) {
                            this.disconnect({
                                code: s.RPCCloseCodes.CLOSE_ABNORMAL
                            });
                            return
                        }
                        null != f && (f.onmessage = e => {
                            let t;
                            try {
                                if ("string" == typeof e.data) t = JSON.parse(e.data);
                                else throw Error("payload data not a string")
                            } catch (e) {
                                this.emit("error", e), this.disconnect();
                                return
                            }
                            let {
                                cmd: n,
                                evt: i,
                                nonce: l,
                                data: r
                            } = t;
                            if (n === s.RPCCommands.DISPATCH) {
                                if (i === s.RPCEvents.READY) {
                                    this.emit("connected");
                                    return
                                }
                                if (i === s.RPCEvents.ERROR) {
                                    this.emit("error", new d.default(r.code, r.message)), this.disconnect();
                                    return
                                }
                                this.emit(c(n, i), r);
                                return
                            }
                            let u = null;
                            i === s.RPCEvents.ERROR && (u = new d.default(r.code, r.message), r = null), this.emit(c(n, l), u, r)
                        }, f.onclose = f.onerror = e => this.disconnect(e))
                    }
                }
                disconnect(e) {
                    if (null != e && "code" in e && [s.RPCCloseCodes.CLOSE_ABNORMAL, s.RPCCloseCodes.INVALID_CLIENTID].includes(e.code)) {
                        O++, f = null, this.connect();
                        return
                    }
                    null != f && (this.emit("disconnected"), f.close(), f = null)
                }
                subscribe(e, t, n) {
                    return this.on(c(s.RPCCommands.DISPATCH, e), n), this.request(s.RPCCommands.SUBSCRIBE, t, e)
                }
                unsubscribe(e, t, n) {
                    return this.removeListener(c(s.RPCCommands.DISPATCH, e), n), this.request(s.RPCCommands.UNSUBSCRIBE, t, e)
                }
                request(e, t, n) {
                    return new Promise((i, l) => {
                        if (!this.connected) {
                            this.once("connected", () => {
                                this.removeAllListeners("disconnected"), i(this.request(e, t, n))
                            }), this.once("disconnected", () => {
                                this.removeAllListeners("connected"), l(Error("disconnected during request"))
                            }), this.connect();
                            return
                        }
                        let r = (0, o.v4)(),
                            u = JSON.stringify({
                                cmd: e,
                                args: t,
                                evt: n,
                                nonce: r
                            });
                        this.once(c(e, r), (e, t) => null != e ? l(e) : i(t)), null == f || f.send(u)
                    })
                }
                requestOnce(e, t, n) {
                    return a.default.post({
                        url: "http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(s.RPC_VERSION),
                        body: {
                            cmd: e,
                            args: t,
                            evt: n,
                            nonce: (0, o.v4)()
                        }
                    }).then(e => {
                        let {
                            body: {
                                evt: t,
                                data: n
                            }
                        } = e;
                        if (t === s.RPCEvents.ERROR) throw new d.default(n.code, n.message);
                        return n
                    })
                }
                requestRedirect(e, t, n) {
                    if ("Chrome" === r.name && parseInt(r.version, 10) >= 58) return this.requestOnce(e, t, n);
                    let i = encodeURIComponent(JSON.stringify({
                            cmd: e,
                            args: t,
                            evt: n,
                            nonce: (0, o.v4)()
                        })),
                        l = encodeURIComponent("".concat(location.protocol, "//").concat(location.host).concat(location.pathname, "?done=true"));
                    return window.open("http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(s.RPC_VERSION, "&payload=").concat(i, "&callback=").concat(l), "_self"), new Promise(() => null)
                }
            }
            var h = new A
        },
        121338: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                connect: function() {
                    return d
                },
                disconnect: function() {
                    return s
                },
                setReceiveEventHandler: function() {
                    return E
                },
                setReceiveCommandHandler: function() {
                    return c
                },
                send: function() {
                    return _
                }
            });
            var i = n("43982"),
                l = n("861309"),
                r = n("261131"),
                u = n("828777"),
                o = n("49111"),
                a = n("492249");

            function d() {
                i.default.connect()
            }

            function s() {
                i.default.disconnect()
            }

            function E(e, t) {
                if (!__OVERLAY__) throw new l.default(a.RPCErrors.UNKNOWN_ERROR, "called from wrong app context");
                i.default.subscribe(o.RPCEvents.OVERLAY, {
                    token: t
                }, t => e((0, u.deserializeObject)(t)))
            }

            function c(e, t) {
                if (__OVERLAY__) throw new l.default(a.RPCErrors.UNKNOWN_ERROR, "called from wrong app context");
                r.default.setCommandHandler(o.RPCCommands.OVERLAY, {
                    scope: a.RPC_PRIVATE_SCOPE,
                    handler(n) {
                        let {
                            args: i
                        } = n;
                        if (!t(i.token)) throw new l.default(a.RPCErrors.INVALID_TOKEN, "Invalid RPC auth token provided");
                        e((0, u.deserializeObject)(i))
                    }
                }), r.default.setEventHandler(o.RPCEvents.OVERLAY, {
                    scope: a.RPC_PRIVATE_SCOPE,
                    handler(e) {
                        let {
                            args: n
                        } = e;
                        if (!t(n.token)) throw new l.default(a.RPCErrors.INVALID_TOKEN, "Invalid RPC auth token provided")
                    }
                })
            }

            function _(e) {
                __OVERLAY__ ? i.default.request(o.RPCCommands.OVERLAY, (0, u.serializeObject)(e)) : r.default.dispatchToSubscriptions(o.RPCEvents.OVERLAY, {}, (0, u.serializeObject)(e))
            }
        },
        684849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, l = n("666038");
            i = class extends l.default {
                constructor(e) {
                    super(), this.id = e.id || "", this.widgets = e.widgets || []
                }
            }
        },
        611310: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, l = n("666038");
            i = class extends l.default {
                constructor(e) {
                    super(), this.id = e.id || "", this.layoutId = e.layoutId || "", this.type = e.type, this.anchor = {
                        left: 0,
                        top: 0,
                        ...e.anchor
                    }, this.size = {
                        width: 0,
                        height: 0,
                        ...e.size
                    }, this.pinned = !!e.pinned, this.zIndex = e.zIndex || 0, this.meta = {
                        ...e.meta
                    }
                }
            }
        },
        505507: function(e, t, n) {
            "use strict";
            let i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("424973"), n("222007"), n("70102"), n("808653");
            var r, u, o = n("917351"),
                a = n.n(o),
                d = n("748820"),
                s = n("446674"),
                E = n("95410"),
                c = n("913144"),
                _ = n("684849"),
                O = n("611310"),
                f = n("80687"),
                A = n("49111");
            (u = r || (r = {})).REQUIRED = "REQUIRED", u.OPTIONAL = "OPTIONAL", u.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT";
            let h = "migrated",
                I = {
                    [A.OverlayWidgets.GUILDS]: {
                        minSize: {
                            width: 312,
                            height: 300
                        },
                        resizeX: !1,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: "OPTIONAL",
                        defaultSettings: {
                            anchor: {
                                left: .175,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: "auto",
                                height: .65
                            },
                            pinned: !1
                        }
                    },
                    [A.OverlayWidgets.TEXT]: {
                        minSize: {
                            width: 430,
                            height: 300
                        },
                        resizeX: !0,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: "OPTIONAL",
                        defaultSettings: {
                            anchor: {
                                left: .26,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: .565,
                                height: .65
                            },
                            pinned: !0
                        }
                    },
                    [A.OverlayWidgets.VOICE]: {
                        minSize: {
                            width: 272,
                            height: 100
                        },
                        resizeX: !1,
                        resizeY: !1,
                        dragAnywhere: !0,
                        layoutPolicy: "REQUIRED",
                        defaultSettings: {
                            anchor: {
                                left: .011,
                                top: .011,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: "auto",
                                height: "auto"
                            },
                            pinned: !0
                        }
                    },
                    [A.OverlayWidgets.GUILDS_TEXT]: {
                        minSize: {
                            height: 300,
                            width: 610
                        },
                        resizeX: !0,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: "OPTIONAL_DEFAULT",
                        defaultSettings: {
                            anchor: {
                                left: .15,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: .7,
                                height: .65
                            },
                            pinned: !1
                        }
                    },
                    [A.OverlayWidgets.LOBBY_VOICE]: {
                        minSize: {
                            width: 272,
                            height: 100
                        },
                        resizeX: !1,
                        resizeY: !1,
                        dragAnywhere: !0,
                        layoutPolicy: "REQUIRED",
                        defaultSettings: {
                            anchor: {
                                left: null,
                                top: .011,
                                bottom: null,
                                right: .011
                            },
                            size: {
                                width: "auto",
                                height: "auto"
                            },
                            pinned: !0
                        }
                    }
                };

            function T(e, t) {
                let n = l[e];
                if (null == n) return !1;
                let r = i[n.layoutId];
                return null != r && t(n, r)
            }

            function L(e) {
                var t;
                return null === (t = I[e]) || void 0 === t ? void 0 : t.defaultSettings
            }
            class S extends s.default.PersistedStore {
                initialize(e) {
                    null != e && null != e.layouts && null != e.widgets ? (i = function(e) {
                        let t = {};
                        return a.forEach(e, (e, n) => {
                            t[n] = new _.default(e)
                        }), t
                    }(e.layouts), l = function(e) {
                        let t = {};
                        return a.forEach(e, (e, n) => {
                            t[n] = new O.default(e)
                        }), t
                    }(e.widgets)) : (i = {}, l = {});
                    let t = !1,
                        n = [];
                    a.forEach(I, (e, t) => {
                        "REQUIRED" === e.layoutPolicy && n.push(t)
                    }), a.forEach(i, (e, r) => {
                        let u = this.getWidgetsForLayout(r),
                            o = !1;
                        for (let e of n) {
                            let n = u.find(t => t.type === e);
                            if (null != n) continue;
                            o = t = !0;
                            let i = (0, d.v4)();
                            n = new O.default({
                                ...this.getWidgetDefaultSettings(e),
                                type: e,
                                id: i,
                                layoutId: r,
                                zIndex: u.length
                            }), u.push(n), l = {
                                ...l,
                                [i]: n
                            }
                        }
                        o && (e = e.set("widgets", u.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })), i = {
                            ...i,
                            [r]: e
                        })
                    }), a.forEach(l, (e, n) => {
                        let r = i[e.layoutId];
                        (null == r || 0 > r.widgets.indexOf(n)) && (l = {
                            ...l
                        }, delete l[n], t = !0)
                    }), t && (this.persist(), this.emitChange())
                }
                getState() {
                    return {
                        layouts: i,
                        widgets: l
                    }
                }
                getLayouts() {
                    return i
                }
                getLayout(e) {
                    return i[e]
                }
                getAllWidgets() {
                    return l
                }
                getWidget(e) {
                    return l[e]
                }
                getWidgetsForLayout(e) {
                    let t = this.getLayout(e);
                    return null == t ? [] : t.widgets.reduce((e, t) => {
                        let n = this.getWidget(t);
                        return null != n && e.push(n), e
                    }, [])
                }
                getWidgetConfig(e) {
                    return I[e]
                }
                getWidgetDefaultSettings(e) {
                    return L(e)
                }
                getWidgetType(e) {
                    let t = l[e];
                    return null != t ? t.type : ""
                }
                getRegisteredWidgets() {
                    return I
                }
                getDefaultLayout(e) {
                    let t = [];
                    return a.forEach(this.getRegisteredWidgets(), (n, i) => {
                        switch (n.layoutPolicy) {
                            case "REQUIRED":
                            case "OPTIONAL_DEFAULT":
                                t.push({
                                    ...n.defaultSettings,
                                    type: i,
                                    id: (0, d.v4)(),
                                    layoutId: e
                                })
                        }
                    }), t
                }
            }
            S.displayName = "LayoutStore", S.persistKey = "LayoutStore", S.migrations = [() => {
                let e = {
                        ...E.default.get("OverlayStore")
                    },
                    {
                        pinnedWidgets: t,
                        positions: n,
                        sizes: i,
                        v: l
                    } = e;
                if (5 === l && t) {
                    let e = [],
                        l = t.map(t => {
                            let l = null != n ? n[t] : null,
                                r = null != i ? i[t] : null,
                                u = {
                                    id: t,
                                    layoutId: h,
                                    type: t,
                                    anchor: l || {
                                        top: -1,
                                        left: -1,
                                        bottom: null,
                                        right: null
                                    },
                                    size: r || {
                                        width: -1,
                                        height: -1
                                    },
                                    pinned: !0,
                                    zIndex: 0
                                };
                            return e.push([u.id, u]), u.id
                        });
                    return {
                        layouts: [
                            [h, {
                                id: h,
                                widgets: l
                            }]
                        ],
                        widgets: e
                    }
                }
                return {
                    layouts: [],
                    widgets: []
                }
            }, e => {
                let {
                    layouts: t,
                    widgets: n
                } = e, i = new Set(Object.keys(A.OverlayWidgets)), l = Array.from(n).filter(e => {
                    let [t] = e;
                    return !i.has(t)
                }), r = Array.from(t).filter(e => {
                    let [t] = e;
                    return t !== h
                });
                return r.forEach(e => {
                    let [t, n] = e, i = null, r = null;
                    if (n.widgets.find(e => {
                            let n = l.find(n => {
                                let [i, l] = n;
                                return i === e && l.layoutId === t
                            });
                            return null != n && (null == r && n[1].type === A.OverlayWidgets.VOICE && (r = n[0]), null == i && n[1].type === A.OverlayWidgets.TEXT && (i = n[1].pinned), null != i && null != r || void 0)
                        }), i || null == r) return;
                    let u = (0, d.v4)();
                    n.widgets = [r, u], l.push([u, {
                        ...L(A.OverlayWidgets.GUILDS_TEXT),
                        type: A.OverlayWidgets.GUILDS_TEXT,
                        id: u,
                        layoutId: t,
                        zIndex: 2
                    }])
                }), {
                    widgets: l,
                    layouts: r
                }
            }, e => {
                let {
                    layouts: t,
                    widgets: n
                } = e, i = t.reduce((e, t) => {
                    let [n, i] = t;
                    return e[n] = i, e
                }, {}), l = n.reduce((e, t) => {
                    let [n, i] = t;
                    return e[n] = i, e
                }, {});
                return {
                    layouts: i,
                    widgets: l
                }
            }];
            var R = new S(c.default, {
                LAYOUT_CREATE: function(e) {
                    let {
                        layoutId: t,
                        widgets: n,
                        defaultResolution: r
                    } = e;
                    if (null != i[t]) return !1;
                    let u = [];
                    n.forEach((e, t) => {
                        let n = function(e) {
                                let t = i[h];
                                if (null != t)
                                    for (let n of t.widgets) {
                                        let t = l[n];
                                        if (null != t && t.type === e) return t
                                    }
                                return null
                            }(e.type),
                            o = {
                                ...e,
                                zIndex: t
                            };
                        "" === o.id && (o.id = (0, d.v4)()), null != n && (o.pinned = n.pinned, -1 !== n.anchor.left && (o.anchor = (0, f.getAnchorPercentageFromLayoutSize)(n.anchor, r)), -1 !== n.size.width && (o.size = (0, f.getSizePercentageFromSize)(n.size, r))), l = {
                            ...l,
                            [o.id]: new O.default(o)
                        }, u.push(o.id)
                    }), i = {
                        ...i,
                        [t]: new _.default({
                            id: t,
                            widgets: u
                        })
                    }
                },
                LAYOUT_SET_PINNED: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    return T(t, (e, t) => {
                        (function(e) {
                            l = {
                                ...l,
                                [e.id]: e.set("pinned", !e.pinned)
                            }
                        })(e)
                    })
                },
                LAYOUT_UPDATE_WIDGET: function(e) {
                    let {
                        widgetId: t,
                        anchor: n,
                        size: i
                    } = e;
                    return T(t, (e, t) => (function(e, t, n) {
                        l = {
                            ...l,
                            [e.id]: e.merge({
                                anchor: t,
                                size: n
                            })
                        }
                    })(e, n, i))
                },
                LAYOUT_SET_TOP_WIDGET: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    return T(t, (e, t) => (function(e, t) {
                        let n = function(e) {
                            let t = [];
                            return e.widgets.forEach(e => {
                                let n = l[e];
                                null != n && t.push(n)
                            }), t
                        }(e);
                        n.sort((e, t) => e.zIndex - t.zIndex);
                        let i = n.findIndex(e => e.id === t);
                        if (i === n.length - 1) return !1;
                        n.push(n.splice(i, 1)[0]);
                        for (let e = 0; e < n.length; e++) {
                            let t = n[e];
                            (function(e, t) {
                                l = {
                                    ...l,
                                    [e.id]: e.set("zIndex", t)
                                }
                            })(t, e)
                        }
                        return !0
                    })(t, e.id))
                },
                LAYOUT_DELETE_WIDGET: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    l = {
                        ...l
                    }, delete l[t], a.forEach(i, (e, n) => {
                        if (n === h) return;
                        let l = e.widgets.indexOf(t);
                        if (l >= 0) {
                            let t = [...e.widgets];
                            t.splice(l, 1), i = {
                                ...i,
                                [n]: e.set("widgets", t)
                            }
                        }
                    })
                },
                LAYOUT_DELETE_ALL_WIDGETS: function(e) {
                    let {
                        layoutId: t
                    } = e, n = i[t];
                    if (null == n) return !1;
                    n.widgets.forEach(e => {
                        l = {
                            ...l
                        }, delete l[e]
                    }), i = {
                        ...i,
                        [n.id]: n.set("widgets", [])
                    }
                },
                LAYOUT_CREATE_WIDGETS: function(e) {
                    let {
                        widgetConfigs: t
                    } = e;
                    t.forEach(e => {
                        let t = new O.default(e),
                            n = i[t.layoutId];
                        if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
                        t = t.set("zIndex", n.widgets.length), l = {
                            ...l,
                            [t.id]: t
                        };
                        let r = [...n.widgets, t.id];
                        i = {
                            ...i,
                            [n.id]: n.set("widgets", r)
                        }
                    })
                }
            })
        },
        901165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007"), n("70102");
            var i = n("446674"),
                l = n("95410"),
                r = n("913144"),
                u = n("741148"),
                o = n("121338"),
                a = n("116949"),
                d = n("233069"),
                s = n("271938"),
                E = n("42203"),
                c = n("923959"),
                _ = n("505507"),
                O = n("162771"),
                f = n("773336"),
                A = n("50885"),
                h = n("819068"),
                I = n("471671"),
                T = n("49111"),
                L = n("6791");
            let S = Object.freeze({
                    selectedGuildId: null,
                    selectedChannelId: null,
                    displayUserMode: T.OverlayDisplayUsers.ALWAYS,
                    displayNameMode: T.OverlayDisplayNames.ALWAYS,
                    avatarSizeMode: T.OverlayAvatarSizes.LARGE,
                    notificationPositionMode: T.OverlayNotificationPositions.TOP_LEFT,
                    textChatNotifications: T.OverlayNotificationTextChatTypes.ENABLED,
                    disableExternalLinkAlert: !1,
                    disablePinTutorial: !1,
                    showMuteDeafenKeybinds: !0,
                    textWidgetOpacity: L.OpacityBounds.LOWER
                }),
                R = null,
                g = {},
                C = null,
                p = new Set,
                D = !1,
                N = null,
                P = !1,
                y = !1,
                U = new Set,
                w = !1;

            function v(e) {
                let t = g[e];
                return null == t && (t = g[e] = {
                    ...S
                }), t
            }
            let m = {
                    ...S
                },
                Y = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_MESSAGE_EVENT_ACTION", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_TOGGLE_SHOW_KEYBINDS", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_UI_LOCKED", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT"]),
                M = new Set([...Y.values(), "ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]);

            function V() {
                if (!__OVERLAY__) return !1;
                let e = R === (0, h.getPID)(),
                    t = p.has((0, h.getPID)()) || U.size > 0;
                e && t ? (0, u.focus)(window, !0) : (0, u.focus)(window, !1)
            }

            function W() {
                if (R !== (0, h.getPID)()) return !1;
                U.clear()
            }

            function z(e) {
                let t = (0, h.getPID)();
                if (null == e.pid || e.pid === t) switch (e.type) {
                    case T.OverlayEventTypes.STORAGE_SYNC:
                        i.default.PersistedStore.initializeAll(e.states);
                        break;
                    case T.OverlayEventTypes.DISPATCH:
                        null != e.payloads && (P = !0, e.payloads.forEach(e => (function(e) {
                            var t, n, i, l, u, s;
                            if ("OVERLAY_INITIALIZE" === e.type && (null == (s = e).version && 1 === h.OVERLAY_VERSION || s.version === h.OVERLAY_VERSION || (r.default.dispatch({
                                    type: "OVERLAY_INCOMPATIBLE_APP"
                                }), (0, o.disconnect)(), 0))) y = !0;
                            if (y) switch (e.type) {
                                case "CHANNEL_CREATE":
                                case "THREAD_CREATE":
                                case "THREAD_UPDATE":
                                case "CHANNEL_DELETE":
                                case "THREAD_DELETE":
                                    let E = (0, d.createChannelRecord)(e.channel);
                                    if (!d.ALL_CHANNEL_TYPES.has(E.type)) break;
                                    r.default.dispatch({
                                        type: e.type,
                                        channel: E
                                    });
                                    break;
                                case "CHANNEL_UPDATES":
                                    r.default.dispatch({
                                        type: e.type,
                                        channels: e.channels.map(e => (0, d.createChannelRecord)(e))
                                    });
                                    break;
                                case "CONNECTION_OPEN_SUPPLEMENTAL":
                                    e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map(e => (0, d.createChannelRecord)(e)), r.default.dispatch(e);
                                    break;
                                case "THREAD_LIST_SYNC":
                                    r.default.dispatch({
                                        ...e,
                                        threads: e.threads.map(e => (0, d.createChannelRecord)(e))
                                    });
                                    break;
                                case "GUILD_CREATE":
                                    let c = e => (0, d.createChannelRecord)(e),
                                        _ = e.guild;
                                    _.channels = null !== (l = null === (n = _.channels) || void 0 === n ? void 0 : n.map(c)) && void 0 !== l ? l : null, _.threads = null === (i = _.threads) || void 0 === i ? void 0 : i.map(c), null != _.channelUpdates && (_.channelUpdates.writes = null === (u = _.channelUpdates.writes) || void 0 === u ? void 0 : u.map(c)), r.default.dispatch({
                                        type: "GUILD_CREATE",
                                        guild: _
                                    });
                                    break;
                                case "USER_SETTINGS_PROTO_UPDATE":
                                    r.default.dispatch({
                                        ...e,
                                        settings: {
                                            proto: (0, a.b64ToProtoWithType)(e.settings.type, e.settings.proto),
                                            type: e.settings.type
                                        }
                                    });
                                    break;
                                default:
                                    r.default.dispatch(e)
                            }
                        })(e)), P = !1)
                }
            }
            class G extends i.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(s.default), this.syncWith([s.default], () => {
                            let e = s.default.getId();
                            m = null != e ? v(e) : {
                                ...S
                            }
                        }), __OVERLAY__ && (f.isPlatformEmbedded && A.default.requireModule("discord_overlay2"), p.delete((0, h.getPID)())), null != e) {
                        g = e;
                        let t = s.default.getId();
                        null != t && (null == (m = v(t)).textChatNotifications && (m.textChatNotifications = S.textChatNotifications), null == m.textWidgetOpacity && (m.textWidgetOpacity = S.textWidgetOpacity))
                    }
                }
                getState() {
                    return g
                }
                isUILocked(e) {
                    return !p.has(e)
                }
                isInstanceUILocked() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceUILocked()");
                    return !p.has((0, h.getPID)())
                }
                isInstanceFocused() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceFocused()");
                    return R === (0, h.getPID)()
                }
                isFocused(e) {
                    return R === e
                }
                isPinned(e) {
                    let t = _.default.getLayout(h.OVERLAY_LAYOUT_ID);
                    if (null != t) {
                        let n = t.widgets.find(t => {
                            let n = _.default.getWidget(t);
                            return null != n && n.type === e && !!n.pinned || !1
                        });
                        return null != n
                    }
                    return !1
                }
                getSelectedGuildId() {
                    return m.selectedGuildId
                }
                getSelectedChannelId() {
                    return m.selectedChannelId
                }
                getSelectedCallId() {
                    return C
                }
                getDisplayUserMode() {
                    return m.displayUserMode
                }
                getDisplayNameMode() {
                    return m.displayNameMode
                }
                getAvatarSizeMode() {
                    return m.avatarSizeMode
                }
                getNotificationPositionMode() {
                    return m.notificationPositionMode
                }
                getTextChatNotificationMode() {
                    return m.notificationPositionMode === T.OverlayNotificationPositions.DISABLED ? T.OverlayNotificationTextChatTypes.DISABLED : m.textChatNotifications
                }
                getShowMuteDeafenKeybinds() {
                    return m.showMuteDeafenKeybinds
                }
                getDisableExternalLinkAlert() {
                    return m.disableExternalLinkAlert
                }
                getFocusedPID() {
                    return R
                }
                get initialized() {
                    return y
                }
                get incompatibleApp() {
                    return D
                }
                getActiveRegions() {
                    return U
                }
                getTextWidgetOpacity() {
                    return m.textWidgetOpacity
                }
                isPreviewingInGame() {
                    return w
                }
            }
            G.displayName = "OverlayStore", G.persistKey = "OverlayStoreV2", G.migrations = [() => {
                let e = {
                        ...l.default.get("OverlayStore")
                    },
                    {
                        pinnedWidgets: t,
                        positions: n,
                        sizes: i,
                        v: r,
                        ...u
                    } = e;
                return {
                    ...S,
                    ...5 === r ? u : null
                }
            }, e => {
                let t = s.default.getId();
                if (null == e || null == t) return {};
                let n = {
                    [t]: {
                        ...e
                    }
                };
                return n
            }];
            var b = new G(r.default, {
                LOGOUT: function(e) {
                    !e.isSwitchingAccount && (g = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in g && delete g[e.userId]
                },
                CONNECTION_CLOSED: function() {
                    p.clear()
                },
                OVERLAY_START_SESSION: function() {
                    r.default.addInterceptor(e => {
                        if (P || !M.has(e.type)) return !1;
                        if ("CHANNEL_SELECT" === e.type) {
                            let {
                                guildId: t,
                                channelId: n
                            } = e;
                            return null != n && ((0, o.send)({
                                type: T.OverlayEventTypes.DISPATCH,
                                pid: (0, h.getPID)(),
                                token: (0, h.getRPCAuthToken)(),
                                payloads: [{
                                    type: "CHANNEL_PRELOAD",
                                    guildId: t === T.ME ? null : t,
                                    channelId: n,
                                    context: T.CURRENT_APP_CONTEXT
                                }, {
                                    type: "OVERLAY_SELECT_CHANNEL",
                                    guildId: t,
                                    channelId: n
                                }]
                            }), !1)
                        }
                        return (0, o.send)({
                            type: T.OverlayEventTypes.DISPATCH,
                            pid: (0, h.getPID)(),
                            token: (0, h.getRPCAuthToken)(),
                            payloads: [e]
                        }), !Y.has(e.type)
                    }), (0, o.setReceiveEventHandler)(z, (0, h.getRPCAuthToken)()), (0, o.connect)(), (0, o.send)({
                        type: T.OverlayEventTypes.CONNECT,
                        pid: (0, h.getPID)(),
                        token: (0, h.getRPCAuthToken)()
                    })
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        focusedPID: t
                    } = e;
                    R = t
                },
                OVERLAY_READY: function() {
                    let e = m.selectedGuildId,
                        t = m.selectedChannelId;
                    if (null != e && (!c.default.hasChannels(e) || null != t && !c.default.hasSelectableChannel(e, t)) && (e = null, t = null), null != t && null == E.default.getChannel(t) && (e = null, t = null), null == e && null == t && (e = O.default.getGuildId()), null != e && null == t) {
                        let n = c.default.getDefaultChannel(e);
                        null != n && (t = n.id)
                    }
                    m.selectedGuildId = e, m.selectedChannelId = t
                },
                OVERLAY_FOCUSED: function(e) {
                    let {
                        pid: t
                    } = e;
                    R = t, V()
                },
                OVERLAY_SELECT_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    m.selectedGuildId = t, m.selectedChannelId = n
                },
                OVERLAY_SELECT_CALL: function(e) {
                    let {
                        callId: t
                    } = e;
                    C = t
                },
                CALL_DELETE: function() {
                    C = null
                },
                LAYOUT_CREATE: function() {},
                OVERLAY_SET_DISPLAY_NAME_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    m.displayNameMode = t
                },
                OVERLAY_SET_DISPLAY_USER_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    m.displayUserMode = t
                },
                OVERLAY_SET_AVATAR_SIZE_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    m.avatarSizeMode = t
                },
                OVERLAY_SET_NOTIFICATION_POSITION_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    m.notificationPositionMode = t
                },
                OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    m.textChatNotifications = t
                },
                OVERLAY_TOGGLE_SHOW_KEYBINDS: function(e) {
                    let {
                        shouldShow: t
                    } = e;
                    m.showMuteDeafenKeybinds = t
                },
                OVERLAY_SET_TEXT_WIDGET_OPACITY: function(e) {
                    let {
                        opacity: t
                    } = e, n = m.textWidgetOpacity !== t;
                    return m.textWidgetOpacity = t, n
                },
                OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function() {
                    m.disableExternalLinkAlert = !0
                },
                OVERLAY_INCOMPATIBLE_APP: function() {
                    D = !0
                },
                OVERLAY_SET_UI_LOCKED: function(e) {
                    let {
                        locked: t,
                        pid: n
                    } = e;
                    t ? p.delete(n) : p.add(n), W(), V(), w = !1
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    let {
                        region: t
                    } = e;
                    if (R !== (0, h.getPID)() || U.has(t)) return !1;
                    U.add(t)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: W,
                OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
                    w = e.isPreviewingInGame
                },
                WINDOW_RESIZED: function() {
                    if (__OVERLAY__) {
                        let e = I.default.windowSize();
                        !(0, h.validResolution)(e) && (w = !1)
                    }
                }
            })
        },
        80687: function(e, t, n) {
            "use strict";

            function i(e) {
                return Math.max(Math.min(e, 1), 0)
            }

            function l(e, t) {
                let {
                    top: n,
                    bottom: l,
                    left: r,
                    right: u
                } = e;
                return {
                    top: null != n ? Math.floor(i(n) * t.height) : null,
                    left: null != r ? Math.floor(i(r) * t.width) : null,
                    bottom: null != l ? Math.floor(i(l) * t.height) : null,
                    right: null != u ? Math.floor(i(u) * t.width) : null
                }
            }

            function r(e, t) {
                let {
                    width: n,
                    height: l
                } = e;
                return {
                    width: "auto" === n ? n : Math.floor(i(n) * t.width),
                    height: "auto" === l ? l : Math.floor(i(l) * t.height)
                }
            }

            function u(e, t) {
                let {
                    top: n,
                    bottom: l,
                    left: r,
                    right: u
                } = e;
                return {
                    top: null != n ? i(n / t.height) : null,
                    left: null != r ? i(r / t.width) : null,
                    bottom: null != l ? i(l / t.height) : null,
                    right: null != u ? i(u / t.width) : null
                }
            }

            function o(e, t) {
                let {
                    width: n,
                    height: i
                } = e;
                return {
                    width: "auto" === n ? n : n / t.width,
                    height: "auto" === i ? i : i / t.height
                }
            }

            function a(e, t, n, i, l) {
                let {
                    top: r,
                    bottom: u,
                    left: o,
                    right: a
                } = e;
                if (null == r && null == u ? (r = 0, u = n - l) : null == r && null != u ? r = n - (u + l) : null != r && (u = n - (r + l)), null == o && null == a ? (o = 0, a = t - i) : null == o && null != a ? o = t - (a + i) : null == a && null != o && (a = t - (o + i)), null == r || null == u || null == o || null == a) throw Error("Logically this can never happen based on our if/else statements");
                return {
                    top: r,
                    left: o,
                    bottom: u,
                    right: a
                }
            }

            function d(e) {
                let {
                    top: t,
                    left: n,
                    bottom: i,
                    right: l
                } = e;
                return 0 === t || t <= i ? i = null : t = null, 0 === n || n <= l ? l = null : n = null, {
                    top: t,
                    left: n,
                    bottom: i,
                    right: l
                }
            }

            function s(e) {
                let {
                    top: t,
                    left: n,
                    bottom: i,
                    right: l
                } = e;
                return i < 0 && (t += i, i = 0), t < 0 && (i += t, t = 0), l < 0 && (n += l, l = 0), n < 0 && (l += n, n = 0), {
                    top: t,
                    left: n,
                    bottom: i,
                    right: l
                }
            }

            function E(e, t, n) {
                e = l(e, n);
                let {
                    width: i,
                    height: u
                } = r(t, n);
                return i = "string" == typeof i ? 0 : i, u = "string" == typeof u ? 0 : u, a(e, n.width, n.height, i, u)
            }

            function c(e, t, n) {
                let {
                    top: i,
                    left: l
                } = e, {
                    x: r,
                    y: E
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    x: 0,
                    y: 0
                }, {
                    width: c,
                    height: _
                } = t, O = d(s(a({
                    top: i + E,
                    left: l + r,
                    bottom: null,
                    right: null
                }, n.width, n.height, "number" == typeof c ? c : 0, "number" == typeof _ ? _ : 0)));
                return [u(O, n), o(t, n)]
            }

            function _(e, t, n) {
                let {
                    top: i,
                    right: l
                } = e, {
                    x: r,
                    y: E
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    x: 0,
                    y: 0
                }, {
                    width: c,
                    height: _
                } = t, O = d(s(a({
                    top: i + E,
                    left: null,
                    bottom: null,
                    right: l - r
                }, n.width, n.height, "number" == typeof c ? c : 0, "number" == typeof _ ? _ : 0)));
                return [u(O, n), o(t, n)]
            }
            n.r(t), n.d(t, {
                getAnchorCoordsFromLayoutSize: function() {
                    return l
                },
                getSizeFromLayoutSize: function() {
                    return r
                },
                getAnchorPercentageFromLayoutSize: function() {
                    return u
                },
                getSizePercentageFromSize: function() {
                    return o
                },
                getFullCoordsFromAnchorCoords: function() {
                    return a
                },
                getAnchorCoordsFromFullCoords: function() {
                    return d
                },
                fitFullCoordsToContainer: function() {
                    return s
                },
                getFullCoordsFromLayoutSize: function() {
                    return E
                },
                getLeftWidgetSpecs: function() {
                    return c
                },
                getRightWidgetSpecs: function() {
                    return _
                }
            }), n("70102")
        },
        828777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                serializeObject: function() {
                    return u
                },
                deserializeObject: function() {
                    return o
                }
            }), n("274635");
            var i = n("917351"),
                l = n.n(i),
                r = n("316693");

            function u(e) {
                return l.cloneDeepWith(e, e => {
                    if ((0, r.isBigFlag)(e)) return {
                        __tag__: "bigflag",
                        data: e.toJSON()
                    }
                })
            }

            function o(e) {
                return l.cloneDeepWith(e, e => {
                    if (null != e && "object" == typeof e && "__tag__" in e && "bigflag" === e.__tag__) return r.default.deserialize(e.data)
                })
            }
        },
        819068: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                OVERLAY_VERSION: function() {
                    return r
                },
                OVERLAY_DEFAULT_RESOLUTION: function() {
                    return u
                },
                OVERLAY_MIN_RESOLUTION: function() {
                    return o
                },
                OVERLAY_LAYOUT_ID: function() {
                    return a
                },
                DEV_PID: function() {
                    return d
                },
                getPID: function() {
                    return s
                },
                getRPCAuthToken: function() {
                    return E
                },
                validResolution: function() {
                    return c
                }
            }), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("121338");
            var l = n("773336");
            n("49111");
            let r = 2,
                u = {
                    width: 3840,
                    height: 2160
                },
                o = {
                    width: 768,
                    height: 432
                },
                a = "overlay_default",
                d = -2;

            function s() {
                var e;
                if (void 0 !== i) return i;
                let t = new URLSearchParams(window.location.search),
                    n = null !== (e = t.get("pid")) && void 0 !== e ? e : "",
                    l = parseInt(n, 10);
                return isNaN(l) && (l = -1), i = l
            }

            function E() {
                let e = new URLSearchParams(window.location.search);
                return e.get("rpc_auth_token")
            }

            function c(e) {
                return !l.isPlatformEmbedded || e.width >= o.width && e.height >= o.height
            }
        }
    }
]);
//# sourceMappingURL=69039.878b1e57faab93e3b4b3.js.map