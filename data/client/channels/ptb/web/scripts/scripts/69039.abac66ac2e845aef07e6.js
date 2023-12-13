(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69039"], {
        741148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                focus: function() {
                    return E
                },
                hidden: function() {
                    return o
                },
                resized: function() {
                    return a
                },
                fullscreenChange: function() {
                    return s
                },
                init: function() {
                    return _
                },
                unload: function() {
                    return A
                }
            });
            var i = n("917351"),
                l = n("913144"),
                u = n("563680"),
                r = n("816454");

            function E(e, t) {
                l.default.dispatch({
                    type: "WINDOW_FOCUS",
                    windowId: (0, r.getWindowId)(e),
                    focused: t
                })
            }

            function o(e) {
                l.default.dispatch({
                    type: "WINDOW_HIDDEN",
                    windowId: (0, r.getWindowId)(e)
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

            function a(e) {
                let t = (0, r.getWindowId)(e),
                    n = d(t);
                n(e.innerWidth, e.innerHeight)
            }

            function s(e) {
                let t = (0, r.getWindowId)(e);
                l.default.dispatch({
                    type: "WINDOW_FULLSCREEN_CHANGE",
                    windowId: t,
                    isElementFullscreen: (0, u.isFullScreen)(null, e.document)
                })
            }

            function _(e) {
                let t = (0, r.getWindowId)(e),
                    n = e.document;
                l.default.dispatch({
                    type: "WINDOW_INIT",
                    windowId: t,
                    isElementFullscreen: (0, u.isFullScreen)(null, n),
                    focused: n.hasFocus(),
                    width: e.innerWidth,
                    height: e.innerHeight
                })
            }

            function A(e) {
                l.default.dispatch({
                    type: "WINDOW_UNLOAD",
                    windowId: (0, r.getWindowId)(e)
                })
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
                    return g
                }
            }), n("424973"), n("222007"), n("70102"), n("808653");
            var u, r, E = n("917351"),
                o = n.n(E),
                d = n("748820"),
                a = n("446674"),
                s = n("95410"),
                _ = n("913144"),
                A = n("684849"),
                c = n("611310"),
                O = n("80687"),
                I = n("49111");
            (r = u || (u = {})).REQUIRED = "REQUIRED", r.OPTIONAL = "OPTIONAL", r.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT";
            let T = "migrated",
                f = {
                    [I.OverlayWidgets.GUILDS]: {
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
                    [I.OverlayWidgets.TEXT]: {
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
                    [I.OverlayWidgets.VOICE]: {
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
                    [I.OverlayWidgets.GUILDS_TEXT]: {
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
                    [I.OverlayWidgets.LOBBY_VOICE]: {
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

            function h(e, t) {
                let n = l[e];
                if (null == n) return !1;
                let u = i[n.layoutId];
                return null != u && t(n, u)
            }

            function L(e) {
                var t;
                return null === (t = f[e]) || void 0 === t ? void 0 : t.defaultSettings
            }
            class S extends a.default.PersistedStore {
                initialize(e) {
                    null != e && null != e.layouts && null != e.widgets ? (i = function(e) {
                        let t = {};
                        return o.forEach(e, (e, n) => {
                            t[n] = new A.default(e)
                        }), t
                    }(e.layouts), l = function(e) {
                        let t = {};
                        return o.forEach(e, (e, n) => {
                            t[n] = new c.default(e)
                        }), t
                    }(e.widgets)) : (i = {}, l = {});
                    let t = !1,
                        n = [];
                    o.forEach(f, (e, t) => {
                        "REQUIRED" === e.layoutPolicy && n.push(t)
                    }), o.forEach(i, (e, u) => {
                        let r = this.getWidgetsForLayout(u),
                            E = !1;
                        for (let e of n) {
                            let n = r.find(t => t.type === e);
                            if (null != n) continue;
                            E = t = !0;
                            let i = (0, d.v4)();
                            n = new c.default({
                                ...this.getWidgetDefaultSettings(e),
                                type: e,
                                id: i,
                                layoutId: u,
                                zIndex: r.length
                            }), r.push(n), l = {
                                ...l,
                                [i]: n
                            }
                        }
                        E && (e = e.set("widgets", r.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })), i = {
                            ...i,
                            [u]: e
                        })
                    }), o.forEach(l, (e, n) => {
                        let u = i[e.layoutId];
                        (null == u || 0 > u.widgets.indexOf(n)) && (l = {
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
                    return f[e]
                }
                getWidgetDefaultSettings(e) {
                    return L(e)
                }
                getWidgetType(e) {
                    let t = l[e];
                    return null != t ? t.type : ""
                }
                getRegisteredWidgets() {
                    return f
                }
                getDefaultLayout(e) {
                    let t = [];
                    return o.forEach(this.getRegisteredWidgets(), (n, i) => {
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
                        ...s.default.get("OverlayStore")
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
                                u = null != i ? i[t] : null,
                                r = {
                                    id: t,
                                    layoutId: T,
                                    type: t,
                                    anchor: l || {
                                        top: -1,
                                        left: -1,
                                        bottom: null,
                                        right: null
                                    },
                                    size: u || {
                                        width: -1,
                                        height: -1
                                    },
                                    pinned: !0,
                                    zIndex: 0
                                };
                            return e.push([r.id, r]), r.id
                        });
                    return {
                        layouts: [
                            [T, {
                                id: T,
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
                } = e, i = new Set(Object.keys(I.OverlayWidgets)), l = Array.from(n).filter(e => {
                    let [t] = e;
                    return !i.has(t)
                }), u = Array.from(t).filter(e => {
                    let [t] = e;
                    return t !== T
                });
                return u.forEach(e => {
                    let [t, n] = e, i = null, u = null;
                    if (n.widgets.find(e => {
                            let n = l.find(n => {
                                let [i, l] = n;
                                return i === e && l.layoutId === t
                            });
                            return null != n && (null == u && n[1].type === I.OverlayWidgets.VOICE && (u = n[0]), null == i && n[1].type === I.OverlayWidgets.TEXT && (i = n[1].pinned), null != i && null != u || void 0)
                        }), i || null == u) return;
                    let r = (0, d.v4)();
                    n.widgets = [u, r], l.push([r, {
                        ...L(I.OverlayWidgets.GUILDS_TEXT),
                        type: I.OverlayWidgets.GUILDS_TEXT,
                        id: r,
                        layoutId: t,
                        zIndex: 2
                    }])
                }), {
                    widgets: l,
                    layouts: u
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
            var g = new S(_.default, {
                LAYOUT_CREATE: function(e) {
                    let {
                        layoutId: t,
                        widgets: n,
                        defaultResolution: u
                    } = e;
                    if (null != i[t]) return !1;
                    let r = [];
                    n.forEach((e, t) => {
                        let n = function(e) {
                                let t = i[T];
                                if (null != t)
                                    for (let n of t.widgets) {
                                        let t = l[n];
                                        if (null != t && t.type === e) return t
                                    }
                                return null
                            }(e.type),
                            E = {
                                ...e,
                                zIndex: t
                            };
                        "" === E.id && (E.id = (0, d.v4)()), null != n && (E.pinned = n.pinned, -1 !== n.anchor.left && (E.anchor = (0, O.getAnchorPercentageFromLayoutSize)(n.anchor, u)), -1 !== n.size.width && (E.size = (0, O.getSizePercentageFromSize)(n.size, u))), l = {
                            ...l,
                            [E.id]: new c.default(E)
                        }, r.push(E.id)
                    }), i = {
                        ...i,
                        [t]: new A.default({
                            id: t,
                            widgets: r
                        })
                    }
                },
                LAYOUT_SET_PINNED: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    return h(t, (e, t) => {
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
                    return h(t, (e, t) => (function(e, t, n) {
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
                    return h(t, (e, t) => (function(e, t) {
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
                    }, delete l[t], o.forEach(i, (e, n) => {
                        if (n === T) return;
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
                        let t = new c.default(e),
                            n = i[t.layoutId];
                        if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
                        t = t.set("zIndex", n.widgets.length), l = {
                            ...l,
                            [t.id]: t
                        };
                        let u = [...n.widgets, t.id];
                        i = {
                            ...i,
                            [n.id]: n.set("widgets", u)
                        }
                    })
                }
            })
        },
        901165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007"), n("70102");
            var i = n("446674"),
                l = n("95410"),
                u = n("913144"),
                r = n("741148"),
                E = n("121338"),
                o = n("116949"),
                d = n("233069"),
                a = n("271938"),
                s = n("42203"),
                _ = n("923959"),
                A = n("505507"),
                c = n("162771"),
                O = n("773336"),
                I = n("50885"),
                T = n("819068"),
                f = n("471671"),
                h = n("49111"),
                L = n("6791");
            let S = Object.freeze({
                    selectedGuildId: null,
                    selectedChannelId: null,
                    displayUserMode: h.OverlayDisplayUsers.ALWAYS,
                    displayNameMode: h.OverlayDisplayNames.ALWAYS,
                    avatarSizeMode: h.OverlayAvatarSizes.LARGE,
                    notificationPositionMode: h.OverlayNotificationPositions.TOP_LEFT,
                    textChatNotifications: h.OverlayNotificationTextChatTypes.ENABLED,
                    disableExternalLinkAlert: !1,
                    disablePinTutorial: !1,
                    showKeybindIndicators: !0,
                    textWidgetOpacity: L.OpacityBounds.LOWER
                }),
                g = null,
                C = {},
                D = null,
                R = new Set,
                p = !1,
                y = null,
                N = !1,
                P = !1,
                U = new Set,
                w = !1;

            function M(e) {
                let t = C[e];
                return null == t && (t = C[e] = {
                    ...S
                }), t
            }
            let Y = {
                    ...S
                },
                v = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_MESSAGE_EVENT_ACTION", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_CLICK_ZONES", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_SET_SHOW_KEYBIND_INDICATORS", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_UI_LOCKED", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT"]),
                V = new Set([...v.values(), "ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]);

            function W() {
                if (!__OVERLAY__) return !1;
                let e = g === (0, T.getPID)(),
                    t = R.has((0, T.getPID)()) || U.size > 0;
                e && t ? (0, r.focus)(window, !0) : (0, r.focus)(window, !1)
            }

            function m() {
                if (g !== (0, T.getPID)()) return !1;
                U.clear()
            }

            function z(e) {
                let t = (0, T.getPID)();
                if (null == e.pid || e.pid === t) switch (e.type) {
                    case h.OverlayEventTypes.STORAGE_SYNC:
                        i.default.PersistedStore.initializeAll(e.states);
                        break;
                    case h.OverlayEventTypes.DISPATCH:
                        null != e.payloads && (N = !0, e.payloads.forEach(e => (function(e) {
                            var t, n, i, l, r, a;
                            if ("OVERLAY_INITIALIZE" === e.type && (null == (a = e).version && 1 === T.OVERLAY_VERSION || a.version === T.OVERLAY_VERSION || (u.default.dispatch({
                                    type: "OVERLAY_INCOMPATIBLE_APP"
                                }), (0, E.disconnect)(), 0))) P = !0;
                            if (P) switch (e.type) {
                                case "CHANNEL_CREATE":
                                case "THREAD_CREATE":
                                case "THREAD_UPDATE":
                                case "CHANNEL_DELETE":
                                case "THREAD_DELETE":
                                    let s = (0, d.createChannelRecord)(e.channel);
                                    if (!d.ALL_CHANNEL_TYPES.has(s.type)) break;
                                    u.default.dispatch({
                                        type: e.type,
                                        channel: s
                                    });
                                    break;
                                case "CHANNEL_UPDATES":
                                    u.default.dispatch({
                                        type: e.type,
                                        channels: e.channels.map(e => (0, d.createChannelRecord)(e))
                                    });
                                    break;
                                case "CONNECTION_OPEN_SUPPLEMENTAL":
                                    e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map(e => (0, d.createChannelRecord)(e)), u.default.dispatch(e);
                                    break;
                                case "THREAD_LIST_SYNC":
                                    u.default.dispatch({
                                        ...e,
                                        threads: e.threads.map(e => (0, d.createChannelRecord)(e))
                                    });
                                    break;
                                case "GUILD_CREATE":
                                    let _ = e => (0, d.createChannelRecord)(e),
                                        A = e.guild;
                                    A.channels = null !== (l = null === (n = A.channels) || void 0 === n ? void 0 : n.map(_)) && void 0 !== l ? l : null, A.threads = null === (i = A.threads) || void 0 === i ? void 0 : i.map(_), null != A.channelUpdates && (A.channelUpdates.writes = null === (r = A.channelUpdates.writes) || void 0 === r ? void 0 : r.map(_)), u.default.dispatch({
                                        type: "GUILD_CREATE",
                                        guild: A
                                    });
                                    break;
                                case "USER_SETTINGS_PROTO_UPDATE":
                                    u.default.dispatch({
                                        ...e,
                                        settings: {
                                            proto: (0, o.b64ToProtoWithType)(e.settings.type, e.settings.proto),
                                            type: e.settings.type
                                        }
                                    });
                                    break;
                                default:
                                    u.default.dispatch(e)
                            }
                        })(e)), N = !1)
                }
            }
            class G extends i.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(a.default), this.syncWith([a.default], () => {
                            let e = a.default.getId();
                            Y = null != e ? M(e) : {
                                ...S
                            }
                        }), __OVERLAY__ && (O.isPlatformEmbedded && I.default.requireModule("discord_overlay2"), R.delete((0, T.getPID)())), null != e) {
                        C = e;
                        let t = a.default.getId();
                        null != t && (null == (Y = M(t)).textChatNotifications && (Y.textChatNotifications = S.textChatNotifications), null == Y.textWidgetOpacity && (Y.textWidgetOpacity = S.textWidgetOpacity))
                    }
                }
                getState() {
                    return C
                }
                isUILocked(e) {
                    return !R.has(e)
                }
                isInstanceUILocked() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceUILocked()");
                    return !R.has((0, T.getPID)())
                }
                isInstanceFocused() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceFocused()");
                    return g === (0, T.getPID)()
                }
                isFocused(e) {
                    return g === e
                }
                isPinned(e) {
                    let t = A.default.getLayout(T.OVERLAY_LAYOUT_ID);
                    if (null != t) {
                        let n = t.widgets.find(t => {
                            let n = A.default.getWidget(t);
                            return null != n && n.type === e && !!n.pinned || !1
                        });
                        return null != n
                    }
                    return !1
                }
                getSelectedGuildId() {
                    return Y.selectedGuildId
                }
                getSelectedChannelId() {
                    return Y.selectedChannelId
                }
                getSelectedCallId() {
                    return D
                }
                getDisplayUserMode() {
                    return Y.displayUserMode
                }
                getDisplayNameMode() {
                    return Y.displayNameMode
                }
                getAvatarSizeMode() {
                    return Y.avatarSizeMode
                }
                getNotificationPositionMode() {
                    return Y.notificationPositionMode
                }
                getTextChatNotificationMode() {
                    return Y.notificationPositionMode === h.OverlayNotificationPositions.DISABLED ? h.OverlayNotificationTextChatTypes.DISABLED : Y.textChatNotifications
                }
                get showKeybindIndicators() {
                    return Y.showKeybindIndicators
                }
                getDisableExternalLinkAlert() {
                    return Y.disableExternalLinkAlert
                }
                getFocusedPID() {
                    return g
                }
                get initialized() {
                    return P
                }
                get incompatibleApp() {
                    return p
                }
                getActiveRegions() {
                    return U
                }
                getTextWidgetOpacity() {
                    return Y.textWidgetOpacity
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
                        v: u,
                        ...r
                    } = e;
                return {
                    ...S,
                    ...5 === u ? r : null
                }
            }, e => {
                let t = a.default.getId();
                if (null == e || null == t) return {};
                let n = {
                    [t]: {
                        ...e
                    }
                };
                return n
            }];
            var F = new G(u.default, {
                LOGOUT: function(e) {
                    !e.isSwitchingAccount && (C = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in C && delete C[e.userId]
                },
                CONNECTION_CLOSED: function() {
                    R.clear()
                },
                OVERLAY_START_SESSION: function() {
                    u.default.addInterceptor(e => {
                        if (N || !V.has(e.type)) return !1;
                        if ("CHANNEL_SELECT" === e.type) {
                            let {
                                guildId: t,
                                channelId: n
                            } = e;
                            return null != n && ((0, E.send)({
                                type: h.OverlayEventTypes.DISPATCH,
                                pid: (0, T.getPID)(),
                                token: (0, T.getRPCAuthToken)(),
                                payloads: [{
                                    type: "CHANNEL_PRELOAD",
                                    guildId: t === h.ME ? null : t,
                                    channelId: n,
                                    context: h.CURRENT_APP_CONTEXT
                                }, {
                                    type: "OVERLAY_SELECT_CHANNEL",
                                    guildId: t,
                                    channelId: n
                                }]
                            }), !1)
                        }
                        return (0, E.send)({
                            type: h.OverlayEventTypes.DISPATCH,
                            pid: (0, T.getPID)(),
                            token: (0, T.getRPCAuthToken)(),
                            payloads: [e]
                        }), !v.has(e.type)
                    }), (0, E.setReceiveEventHandler)(z, (0, T.getRPCAuthToken)()), (0, E.connect)(), (0, E.send)({
                        type: h.OverlayEventTypes.CONNECT,
                        pid: (0, T.getPID)(),
                        token: (0, T.getRPCAuthToken)()
                    })
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        focusedPID: t
                    } = e;
                    g = t
                },
                OVERLAY_READY: function() {
                    let e = Y.selectedGuildId,
                        t = Y.selectedChannelId;
                    if (null != e && (!_.default.hasChannels(e) || null != t && !_.default.hasSelectableChannel(e, t)) && (e = null, t = null), null != t && null == s.default.getChannel(t) && (e = null, t = null), null == e && null == t && (e = c.default.getGuildId()), null != e && null == t) {
                        let n = _.default.getDefaultChannel(e);
                        null != n && (t = n.id)
                    }
                    Y.selectedGuildId = e, Y.selectedChannelId = t
                },
                OVERLAY_FOCUSED: function(e) {
                    let {
                        pid: t
                    } = e;
                    g = t, W()
                },
                OVERLAY_SELECT_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    Y.selectedGuildId = t, Y.selectedChannelId = n
                },
                OVERLAY_SELECT_CALL: function(e) {
                    let {
                        callId: t
                    } = e;
                    D = t
                },
                CALL_DELETE: function() {
                    D = null
                },
                LAYOUT_CREATE: function() {},
                OVERLAY_SET_DISPLAY_NAME_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.displayNameMode = t
                },
                OVERLAY_SET_DISPLAY_USER_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.displayUserMode = t
                },
                OVERLAY_SET_AVATAR_SIZE_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.avatarSizeMode = t
                },
                OVERLAY_SET_NOTIFICATION_POSITION_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.notificationPositionMode = t
                },
                OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.textChatNotifications = t
                },
                OVERLAY_SET_SHOW_KEYBIND_INDICATORS: function(e) {
                    let {
                        shouldShow: t
                    } = e;
                    Y.showKeybindIndicators = t
                },
                OVERLAY_SET_TEXT_WIDGET_OPACITY: function(e) {
                    let {
                        opacity: t
                    } = e, n = Y.textWidgetOpacity !== t;
                    return Y.textWidgetOpacity = t, n
                },
                OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function() {
                    Y.disableExternalLinkAlert = !0
                },
                OVERLAY_INCOMPATIBLE_APP: function() {
                    p = !0
                },
                OVERLAY_SET_UI_LOCKED: function(e) {
                    let {
                        locked: t,
                        pid: n
                    } = e;
                    t ? R.delete(n) : R.add(n), m(), W(), w = !1
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    let {
                        region: t
                    } = e;
                    if (g !== (0, T.getPID)() || U.has(t)) return !1;
                    U.add(t)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: m,
                OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
                    w = e.isPreviewingInGame
                },
                WINDOW_RESIZED: function() {
                    if (__OVERLAY__) {
                        let e = f.default.windowSize();
                        !(0, T.validResolution)(e) && (w = !1)
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
                    left: u,
                    right: r
                } = e;
                return {
                    top: null != n ? Math.floor(i(n) * t.height) : null,
                    left: null != u ? Math.floor(i(u) * t.width) : null,
                    bottom: null != l ? Math.floor(i(l) * t.height) : null,
                    right: null != r ? Math.floor(i(r) * t.width) : null
                }
            }

            function u(e, t) {
                let {
                    width: n,
                    height: l
                } = e;
                return {
                    width: "auto" === n ? n : Math.floor(i(n) * t.width),
                    height: "auto" === l ? l : Math.floor(i(l) * t.height)
                }
            }

            function r(e, t) {
                let {
                    top: n,
                    bottom: l,
                    left: u,
                    right: r
                } = e;
                return {
                    top: null != n ? i(n / t.height) : null,
                    left: null != u ? i(u / t.width) : null,
                    bottom: null != l ? i(l / t.height) : null,
                    right: null != r ? i(r / t.width) : null
                }
            }

            function E(e, t) {
                let {
                    width: n,
                    height: i
                } = e;
                return {
                    width: "auto" === n ? n : n / t.width,
                    height: "auto" === i ? i : i / t.height
                }
            }

            function o(e, t, n, i, l) {
                let {
                    top: u,
                    bottom: r,
                    left: E,
                    right: o
                } = e;
                if (null == u && null == r ? (u = 0, r = n - l) : null == u && null != r ? u = n - (r + l) : null != u && (r = n - (u + l)), null == E && null == o ? (E = 0, o = t - i) : null == E && null != o ? E = t - (o + i) : null == o && null != E && (o = t - (E + i)), null == u || null == r || null == E || null == o) throw Error("Logically this can never happen based on our if/else statements");
                return {
                    top: u,
                    left: E,
                    bottom: r,
                    right: o
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

            function a(e) {
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

            function s(e, t, n) {
                e = l(e, n);
                let {
                    width: i,
                    height: r
                } = u(t, n);
                return i = "string" == typeof i ? 0 : i, r = "string" == typeof r ? 0 : r, o(e, n.width, n.height, i, r)
            }

            function _(e, t, n) {
                let {
                    top: i,
                    left: l
                } = e, {
                    x: u,
                    y: s
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    x: 0,
                    y: 0
                }, {
                    width: _,
                    height: A
                } = t, c = d(a(o({
                    top: i + s,
                    left: l + u,
                    bottom: null,
                    right: null
                }, n.width, n.height, "number" == typeof _ ? _ : 0, "number" == typeof A ? A : 0)));
                return [r(c, n), E(t, n)]
            }

            function A(e, t, n) {
                let {
                    top: i,
                    right: l
                } = e, {
                    x: u,
                    y: s
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    x: 0,
                    y: 0
                }, {
                    width: _,
                    height: A
                } = t, c = d(a(o({
                    top: i + s,
                    left: null,
                    bottom: null,
                    right: l - u
                }, n.width, n.height, "number" == typeof _ ? _ : 0, "number" == typeof A ? A : 0)));
                return [r(c, n), E(t, n)]
            }
            n.r(t), n.d(t, {
                getAnchorCoordsFromLayoutSize: function() {
                    return l
                },
                getSizeFromLayoutSize: function() {
                    return u
                },
                getAnchorPercentageFromLayoutSize: function() {
                    return r
                },
                getSizePercentageFromSize: function() {
                    return E
                },
                getFullCoordsFromAnchorCoords: function() {
                    return o
                },
                getAnchorCoordsFromFullCoords: function() {
                    return d
                },
                fitFullCoordsToContainer: function() {
                    return a
                },
                getFullCoordsFromLayoutSize: function() {
                    return s
                },
                getLeftWidgetSpecs: function() {
                    return _
                },
                getRightWidgetSpecs: function() {
                    return A
                }
            }), n("70102")
        }
    }
]);
//# sourceMappingURL=69039.abac66ac2e845aef07e6.js.map