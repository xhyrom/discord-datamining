(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77015"], {
        640583: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                createLayout: function() {
                    return o
                },
                setWidgetLayout: function() {
                    return i
                },
                setTopWidget: function() {
                    return r
                },
                togglePinned: function() {
                    return d
                },
                deleteWidget: function() {
                    return E
                },
                deleteAllWidgets: function() {
                    return u
                },
                createWidget: function() {
                    return _
                },
                createWidgets: function() {
                    return c
                }
            });
            var n = l("913144"),
                a = l("819068");

            function o(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.OVERLAY_DEFAULT_RESOLUTION;
                n.default.dispatch({
                    type: "LAYOUT_CREATE",
                    layoutId: e,
                    widgets: t,
                    defaultResolution: l
                })
            }

            function i(e, t, l) {
                n.default.dispatch({
                    type: "LAYOUT_UPDATE_WIDGET",
                    widgetId: e,
                    anchor: t,
                    size: l
                })
            }

            function r(e) {
                n.default.dispatch({
                    type: "LAYOUT_SET_TOP_WIDGET",
                    widgetId: e
                })
            }

            function d(e) {
                n.default.dispatch({
                    type: "LAYOUT_SET_PINNED",
                    widgetId: e
                })
            }

            function E(e) {
                n.default.dispatch({
                    type: "LAYOUT_DELETE_WIDGET",
                    widgetId: e
                })
            }

            function u(e) {
                n.default.dispatch({
                    type: "LAYOUT_DELETE_ALL_WIDGETS",
                    layoutId: e
                })
            }

            function _(e) {
                c([e])
            }

            function c(e) {
                n.default.dispatch({
                    type: "LAYOUT_CREATE_WIDGETS",
                    widgetConfigs: e
                })
            }
        },
        539405: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return O
                }
            }), l("70102"), l("222007");
            var n = l("748820"),
                a = l("913144"),
                o = l("939398"),
                i = l("505507"),
                r = l("703370"),
                d = l("471671"),
                E = l("80687"),
                u = l("819068"),
                _ = l("640583"),
                c = l("49111");
            let s = {
                track(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!__OVERLAY__) throw Error("OverlayActionCreators.track: Must be called within Overlay context");
                    (0, o.trackWithOverlayMetadata)(e, t, l)
                },
                overlayReady(e) {
                    a.default.dispatch({
                        type: "OVERLAY_READY",
                        pid: e
                    })
                },
                overlayMounted(e) {
                    a.default.dispatch({
                        type: "OVERLAY_MOUNTED",
                        nudge: e
                    })
                },
                setFocusedPID(e) {
                    a.default.dispatch({
                        type: "OVERLAY_FOCUSED",
                        pid: e
                    })
                },
                setInputLocked(e, t) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_INPUT_LOCKED",
                        locked: e,
                        pid: t
                    })
                },
                setUILocked(e, t) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_UI_LOCKED",
                        locked: e,
                        pid: t
                    })
                },
                setLocked(e, t) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_INPUT_LOCKED",
                        locked: e,
                        pid: t
                    }), a.default.dispatch({
                        type: "OVERLAY_SET_UI_LOCKED",
                        locked: e,
                        pid: t
                    })
                },
                setInstanceLocked(e) {
                    if (!__OVERLAY__) throw Error("OverlayActionCreators.setInstanceLocked: Must be called within Overlay context");
                    s.setLocked(e, (0, u.getPID)())
                },
                setEnabled(e) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_ENABLED",
                        enabled: e
                    })
                },
                selectCall(e) {
                    a.default.dispatch({
                        type: "OVERLAY_SELECT_CALL",
                        callId: e
                    })
                },
                setDisplayNameMode(e) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_DISPLAY_NAME_MODE",
                        mode: e
                    })
                },
                setDisplayUserMode(e) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_DISPLAY_USER_MODE",
                        mode: e
                    })
                },
                setAvatarSizeMode(e) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_AVATAR_SIZE_MODE",
                        mode: e
                    })
                },
                setNotificationPositionMode(e) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
                        mode: e
                    })
                },
                setTextChatNotificationMode(e) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE",
                        mode: e
                    })
                },
                setShowMuteDeafenKeybinds(e) {
                    a.default.dispatch({
                        type: "OVERLAY_TOGGLE_SHOW_KEYBINDS",
                        shouldShow: e
                    })
                },
                callPrivateChannel(e, t) {
                    a.default.dispatch({
                        type: "OVERLAY_CALL_PRIVATE_CHANNEL",
                        channelId: e,
                        ring: t
                    })
                },
                setTextWidgetOpacity(e) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_TEXT_WIDGET_OPACITY",
                        opacity: e
                    })
                },
                disableExternalLinkAlert() {
                    a.default.dispatch({
                        type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT"
                    })
                },
                startSession() {
                    if (!__OVERLAY__) throw Error("Attempting to start an overlay session outside of the overlay context");
                    a.default.dispatch({
                        type: "OVERLAY_START_SESSION"
                    })
                },
                activateRegion(e) {
                    a.default.dispatch({
                        type: "OVERLAY_ACTIVATE_REGION",
                        region: e
                    })
                },
                deactivateAllRegions() {
                    a.default.dispatch({
                        type: "OVERLAY_DEACTIVATE_ALL_REGIONS"
                    })
                },
                setPreviewInGameMode(e) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE",
                        isPreviewingInGame: e
                    })
                },
                updateNotificationStatus(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.OverlayNotificationStatus.DISMISSED;
                    a.default.dispatch({
                        type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
                        notificationId: e,
                        status: t
                    })
                },
                notificationEvent(e, t) {
                    var l, n;
                    let o = r.default.getGame();
                    a.default.dispatch({
                        type: "OVERLAY_NOTIFICATION_EVENT",
                        notificationType: e,
                        action: t,
                        gameName: null !== (l = null == o ? void 0 : o.name) && void 0 !== l ? l : null,
                        gameId: null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : null
                    })
                },
                setPinChat(e) {
                    let t = u.OVERLAY_LAYOUT_ID,
                        l = i.default.getWidgetsForLayout(t),
                        a = i.default.getWidgetConfig(c.OverlayWidgets.GUILDS),
                        o = i.default.getWidgetConfig(c.OverlayWidgets.TEXT),
                        r = i.default.getWidgetConfig(c.OverlayWidgets.GUILDS_TEXT);
                    if (0 === l.length || null == a || null == o || null == r) return;
                    let s = d.default.windowSize(),
                        O = {
                            width: 0,
                            height: 0
                        },
                        T = {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        A = {
                            width: 312,
                            height: 0
                        },
                        I = {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        S = {
                            width: 0,
                            height: 0
                        };
                    if (l.forEach(e => {
                            let {
                                type: t,
                                id: l,
                                anchor: n,
                                size: a
                            } = e;
                            switch (t) {
                                case c.OverlayWidgets.TEXT:
                                    O = (0, E.getSizeFromLayoutSize)(a, s), (0, _.deleteWidget)(l);
                                    break;
                                case c.OverlayWidgets.GUILDS:
                                    T = (0, E.getFullCoordsFromLayoutSize)(n, a, s), A = (0, E.getSizeFromLayoutSize)(a, s), (0, _.deleteWidget)(l);
                                    break;
                                case c.OverlayWidgets.GUILDS_TEXT:
                                    I = (0, E.getFullCoordsFromLayoutSize)(n, a, s), S = (0, E.getSizeFromLayoutSize)(a, s), (0, _.deleteWidget)(l)
                            }
                        }), e) {
                        let e = "auto" === S.width ? r.minSize.width : S.width;
                        e -= a.minSize.width;
                        let [l, o] = (0, E.getLeftWidgetSpecs)(I, {
                            ...S,
                            width: a.minSize.width
                        }, s), [d, u] = (0, E.getRightWidgetSpecs)(I, {
                            ...S,
                            width: e
                        }, s, {
                            x: 10,
                            y: 10
                        }), O = i.default.getWidgetDefaultSettings(c.OverlayWidgets.TEXT);
                        if (null == O) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                        (0, _.createWidget)({
                            ...O,
                            type: c.OverlayWidgets.TEXT,
                            id: (0, n.v4)(),
                            size: u,
                            anchor: d,
                            layoutId: t
                        });
                        let T = i.default.getWidgetDefaultSettings(c.OverlayWidgets.GUILDS);
                        if (null == T) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                        (0, _.createWidget)({
                            ...T,
                            type: c.OverlayWidgets.GUILDS,
                            id: (0, n.v4)(),
                            size: o,
                            anchor: l,
                            layoutId: t
                        })
                    } else {
                        let e = "auto" === O.width ? o.minSize.width : O.width;
                        e += a.minSize.width;
                        let [l, r] = (0, E.getLeftWidgetSpecs)(T, {
                            height: A.height,
                            width: e
                        }, s), d = i.default.getWidgetDefaultSettings(c.OverlayWidgets.GUILDS_TEXT);
                        if (null == d) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                        (0, _.createWidget)({
                            ...d,
                            type: c.OverlayWidgets.GUILDS_TEXT,
                            id: (0, n.v4)(),
                            layoutId: t,
                            anchor: l,
                            size: r
                        })
                    }
                },
                resetDefaultLayout(e) {
                    let t = i.default.getLayout(e);
                    null != t && ((0, _.deleteAllWidgets)(e), (0, _.createWidgets)(i.default.getDefaultLayout(e)))
                }
            };
            var O = s
        },
        127080: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("981980");

            function a(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new n.default;
                return l.el("869305").then(l.bind(l, "869305")).then(l => {
                    let {
                        default: n
                    } = l;
                    return n(e, t, a)
                })
            }
        },
        227602: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return k
                }
            }), l("808653"), l("424973"), l("222007"), l("781738");
            var n = l("800648"),
                a = l.n(n),
                o = l("969230"),
                i = l.n(o),
                r = l("714617"),
                d = l.n(r),
                E = l("917351"),
                u = l.n(E),
                _ = l("446674"),
                c = l("913144"),
                s = l("485328"),
                O = l("605250"),
                T = l("42887"),
                A = l("599110"),
                I = l("773336"),
                S = l("50885"),
                N = l("13798"),
                f = l("860957"),
                L = l("49111"),
                C = l("80028"),
                D = l("846325"),
                y = l("390493");
            let v = new O.default("KeybindsStore"),
                R = {},
                p = {},
                h = 0,
                g = !0,
                P = {},
                G = [L.GlobalKeybindActions.PUSH_TO_TALK, L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

            function U(e) {
                if (I.isPlatformEmbedded) S.default.inputEventUnregister(parseInt(e, 10));
                else {
                    let t = R[e];
                    if (t) {
                        let t = p[e],
                            l = P[t.action];
                        (null == l ? void 0 : l.isPressed) === !0 && y.nextTick(() => l.onTrigger(!1, t)), R[e].reset(), R[e] = null
                    }
                }
            }

            function b(e) {
                if (!g || __OVERLAY__) return;
                let {
                    shortcut: t,
                    action: l,
                    enabled: n
                } = e;
                if ("" === t || null == t || l === L.GlobalKeybindActions.UNASSIGNED || !n) return;
                if (null == P[l]) {
                    v.error("[kb store] KeybindStore: Looking for callback action ".concat(l, " but it doesn't exist in this version. Skipping"));
                    return
                }
                let o = e.id,
                    r = P[l].keyEvents;
                ! function(e, t, l, n) {
                    if (I.isPlatformEmbedded) S.default.inputEventRegister(parseInt(e), t, l, n);
                    else {
                        U(e);
                        let o = i(new a(document));
                        n.keyup && o.bindGlobal((0, N.toString)(t), () => l(!1), "keyup"), n.keydown && o.bindGlobal((0, N.toString)(t), () => l(!0), "keydown"), R[e] = o
                    }
                }(o, t, e => (function(e, t) {
                    let l = p[e];
                    null != l && P[l.action].onTrigger(t, l)
                })(o, e), {
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1,
                    ...r
                }), s.default.validateKeybind((0, N.toString)(e.shortcut))
            }

            function m(e) {
                let t = {
                    id: h.toString(),
                    enabled: !0,
                    action: L.GlobalKeybindActions.UNASSIGNED,
                    shortcut: [],
                    managed: !1,
                    params: {},
                    ...e
                };
                return p = {
                    ...p,
                    [t.id]: t
                }, h += 1, t
            }

            function M(e) {
                U(e.id), p = {
                    ...p
                }, delete p[e.id]
            }

            function Y(e) {
                let {
                    keybind: t
                } = e;
                p = {
                    ...p,
                    [t.id]: t
                }, !__OVERLAY__ && (A.default.track(L.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
                    keybind_action: t.action,
                    keybind_is_bound: !0,
                    keybind_has_shortcut: t.shortcut.length > 0
                }), t.action === L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? A.default.track(L.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                    hotkey: t.action === L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? (0, N.toString)(t.shortcut) : null
                }) : t.action === L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && A.default.track(L.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                    text_activation_hotkey: t.action === L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, N.toString)(t.shortcut) : null
                })), b(t)
            }

            function H(e, t) {
                let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    n = u.find(p, t => t.action === e && (!l || t.managed === l));
                return null == n && (b(m({
                    action: e,
                    enabled: !0,
                    shortcut: (0, N.toCombo)(t),
                    managed: !0,
                    params: {}
                })), !0)
            }
            let V = [function() {
                let e = T.default.getShortcuts();
                return u.each(p, t => {
                    t.action === L.GlobalKeybindActions.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && M(t)
                }), u.reduce(T.default.getShortcuts(), (e, t, l) => {
                    let n = u.find(p, e => e.action === L.GlobalKeybindActions.PUSH_TO_TALK && !0 === e.managed && e.context === l);
                    if (null == n) b(m({
                        action: L.GlobalKeybindActions.PUSH_TO_TALK,
                        enabled: !0,
                        shortcut: t,
                        managed: !0,
                        params: {},
                        context: l
                    }));
                    else {
                        if (null == t) return e || !1;
                        Y({
                            keybind: {
                                ...n,
                                shortcut: "string" == typeof t ? (0, N.toCombo)(t) : t,
                                context: l
                            }
                        })
                    }
                    return !0
                }, !1)
            }, function() {
                return !!f.default.enabled && H(L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, "shift+`")
            }, function() {
                return !!f.default.enabled && H(L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
            }, function() {
                return H(L.GlobalKeybindActions.SOUNDBOARD_HOLD, D.DEFAULT_KEYBIND, !1)
            }, function() {
                return H(L.GlobalKeybindActions.SAVE_CLIP, C.DEFAULT_KEYBIND)
            }];

            function w() {
                return V.reduce((e, t) => t() || e, !1)
            }
            s.default.setGetKeybindList(() => {
                let e = [];
                for (let t in p) p.hasOwnProperty(t) && e.push((0, N.toString)(p[t].shortcut));
                return e
            });
            class W extends _.default.DeviceSettingsStore {
                initialize(e) {
                    !__OVERLAY__ && this.waitFor(T.default, f.default), p = null != e ? e : {}
                }
                getUserAgnosticState() {
                    return p
                }
                hasKeybind(e, t, l) {
                    for (let n in p)
                        for (let a of p[n].shortcut)
                            if (a[0] === e && a[1] === t && (void 0 === l || l === a[2])) return !0;
                    return !1
                }
                hasExactKeybind(e) {
                    for (let t in p) {
                        let l = p[t];
                        if (u.isEqual(l.shortcut, e)) return !0
                    }
                    return !1
                }
                getKeybindForAction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return u.find(p, l => l.action === e && (!t || t && !0 === l.managed))
                }
                getOverlayKeybind() {
                    return this.getKeybindForAction(L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, !0)
                }
                getOverlayChatKeybind() {
                    return this.getKeybindForAction(L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0)
                }
            }
            W.displayName = "KeybindsStore", W.persistKey = "keybinds", W.migrations = [function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        v: t,
                        keybinds: l = e
                    } = e;
                return u.reduce(l, (e, l, n) => {
                    let a = parseInt(l.id, 10);
                    return isNaN(a) || l.id !== n ? e : ((null == t || t < 2) && ("string" == typeof l.shortcut ? (l.shortcut = l.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), l.shortcut = (0, N.toCombo)(l.shortcut)) : l.shortcut = l.shortcut.map(e => e.length < 3 ? [...e, (0, N.getEnv)()] : e)), e[n] = l, e)
                }, {})
            }, e => e, e => {
                let {
                    keybinds: t = e
                } = e;
                return u.reduce(t, (e, t, l) => {
                    if ((0, I.isLinux)() && t.action === L.GlobalKeybindActions.SOUNDBOARD_HOLD) {
                        let l = t.shortcut.map(e => e[1]),
                            n = (0, N.toCombo)("`").map(e => e[1]);
                        if (d(l, n)) return e
                    }
                    return {
                        ...e,
                        [l]: t
                    }
                }, {})
            }, e => {
                let t = {};
                for (let n in e) {
                    let a = e[n];
                    if (null != a) {
                        if (null == a.params || null == a.enabled) {
                            var l;
                            a = {
                                ...a,
                                enabled: !1 !== a.enabled,
                                params: null !== (l = a.params) && void 0 !== l ? l : {}
                            }
                        }
                        t[n] = a
                    }
                }
                return t
            }];
            var k = new W(c.default, {
                CONNECTION_OPEN: w,
                AUDIO_SET_MODE: w,
                OVERLAY_SET_ENABLED: w,
                RPC_APP_CONNECTED: w,
                RPC_APP_DISCONNECTED: w,
                KEYBINDS_ADD_KEYBIND: function(e) {
                    let {
                        keybind: t
                    } = e, l = m(t);
                    b(l)
                },
                KEYBINDS_DELETE_KEYBIND: function(e) {
                    let {
                        id: t
                    } = e, l = p[t];
                    !__OVERLAY__ && A.default.track(L.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
                        keybind_action: l.action,
                        keybind_is_bound: !1,
                        keybind_has_shortcut: !1
                    }), null != l && M(l)
                },
                KEYBINDS_SET_KEYBIND: Y,
                KEYBINDS_ENABLE_ALL_KEYBINDS: function(e) {
                    let {
                        enable: t
                    } = e;
                    g = t, t ? (s.default.enable(), u.forEach(p, b)) : (s.default.disable(), u.forEach(p, e => U(e.id)))
                },
                KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function(e) {
                    let {
                        keybinds: t
                    } = e;
                    P = t, R = {}, h = 0;
                    let l = Object.values(p).filter(e => G.includes(e.action) && e.managed);
                    l.length !== G.length && w(), u.forEach(p, e => {
                        h = Math.max(parseInt(e.id, 10), h) + 1;
                        try {
                            b(e)
                        } catch (t) {
                            v.error("Failed to register keybind", e, t)
                        }
                    }), g = !0
                }
            })
        },
        860957: function(e, t, l) {
            "use strict";
            let n, a;
            l.r(t), l.d(t, {
                getOverlayURL: function() {
                    return el
                },
                default: function() {
                    return eS
                }
            }), l("222007"), l("70102"), l("311790"), l("477657"), l("811875"), l("90301"), l("652153"), l("28797"), l("817884"), l("597349"), l("667536"), l("690341"), l("101997"), l("313619"), l("654714"), l("287168"), l("956660"), l("860677");
            var o, i, r = l("992830"),
                d = l("446674"),
                E = l("913144"),
                u = l("561288"),
                _ = l("823411"),
                c = l("640583"),
                s = l("539405"),
                O = l("987317"),
                T = l("49671"),
                A = l("6193"),
                I = l("121338"),
                S = l("605250"),
                N = l("32128"),
                f = l("127080"),
                L = l("116949"),
                C = l("271938"),
                D = l("546463"),
                y = l("505507"),
                v = l("568307"),
                R = l("599110"),
                p = l("27571"),
                h = l("50885"),
                g = l("819068"),
                P = l("49111"),
                G = l("6791");
            (i = o || (o = {})).ATTACHING = "ATTACHING", i.CONNECTING = "CONNECTING", i.CONNECTED = "CONNECTED", i.READY = "READY", i.CRASHED = "CRASHED", i.CONNECT_FAILED = "CONNECT_FAILED", i.HOOK_FAILED = "HOOK_FAILED";
            let U = {},
                b = new Map,
                m = !1,
                M = new Set,
                Y = new Set,
                H = !1,
                V = !1,
                w = null,
                W = null,
                k = "",
                K = new Set,
                F = !1,
                x = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_MFA_FAILURE", "LOGIN_MFA_SMS", "LOGIN_MFA_SMS_REQUEST_SUCCESS", "LOGIN_MFA_SMS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "REGISTER_FAILURE", "VERIFY_FAILURE", "VERIFY_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "CHANNEL_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "MENTION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "SEARCH_MODAL_OPEN", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "MENTION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "SEARCH_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_OPEN", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_START", "SEARCH_FINISH", "SEARCH_INDEXING", "SEARCH_CLEAR", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_CLEAR_HISTORY", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "EXPERIMENT_REGISTER_LEGACY", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "GUILD_FEED_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_SEARCH_STORE_QUERY", "APPLICATION_COMMAND_SEARCH_STORE_UPDATE", "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED"]),
                B = new Set,
                X = new S.default("OverlayBridgeStore"),
                z = "none",
                Q = (0, r.createObservableLock)({
                    onContention: (e, t) => X.verbose("overlayLock contention: lastMutexCall ".concat(z)),
                    onContentionResolved: () => X.verbose("overlayLock contention: resolved."),
                    onTimeout: (e, t) => {
                        let l = "overlayLock: lastMutexCall ".concat(z, "}");
                        X.error(l), R.default.track(P.AnalyticEvents.OVERLAY_HOOK_RESULT, {
                            success: !1,
                            error_description: l
                        })
                    },
                    timeoutMs: 18e4
                });

            function j(e, t) {
                return function() {
                    for (var l = arguments.length, n = Array(l), a = 0; a < l; a++) n[a] = arguments[a];
                    Q(() => t(...n), e)
                }
            }

            function q(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = b.get(e);
                if ((null === l || n === l) && n !== t) {
                    if (null == t ? b.delete(e) : b.set(e, t), null == t || "CRASHED" === t) {
                        var a;
                        w = null;
                        let e = null === T.default || void 0 === T.default ? void 0 : null === (a = T.default.fileManager) || void 0 === a ? void 0 : a.uploadDiscordHookCrashes;
                        null != e && e().then(e => {
                            if (Array.isArray(e) && 0 !== e.length)
                                for (let d of (X.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                                    var t, l, n, a, o, i, r;
                                    if (null == d) continue;
                                    let e = null != d.processName ? D.default.getGameByExecutable(d.processName) : null;
                                    R.default.track(P.AnalyticEvents.OVERLAY_HOOK_CRASHED, {
                                        process_name: null == d ? void 0 : d.processName,
                                        game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                                        game_id: null !== (l = null == e ? void 0 : e.id) && void 0 !== l ? l : null,
                                        minidump_exception_type: null !== (n = d.exceptionString) && void 0 !== n ? n : null,
                                        minidump_exception_module_name: null !== (a = d.exceptionModuleName) && void 0 !== a ? a : null,
                                        minidump_relative_crash_address: null !== (o = d.relativeCrashAddress) && void 0 !== o ? o : null,
                                        minidump_exception_module_version: null !== (i = d.exceptionModuleVersion) && void 0 !== i ? i : null,
                                        minidump_exception_module_code_id: null !== (r = d.exceptionModuleCodeId) && void 0 !== r ? r : null
                                    })
                                }
                        })
                    }
                    K.delete(e), X.info("pid=".concat(e, " status transition ").concat(null != n ? n : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), b), m = Array.from(b.values()).some(e => "READY" === e)
                }
            }
            async function Z(e) {
                if (h.default.supportsFeature(P.NativeFeatures.CREATE_HOST_ON_ATTACH)) {
                    if (b.size > 0) {
                        z = "reconcile.getOverlayURL";
                        let t = await el();
                        z = "reconcile.createHostProcess", e.createHostProcess(t, er, ei)
                    } else z = "reconcile.destroyHostProcess", e.destroyHostProcess()
                } else if (H) {
                    let t = await el();
                    e.createHostProcess(t, er, ei)
                } else e.destroyHostProcess()
            }
            async function J(e) {
                !Q.isMutexHeld() && X.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
                let t = b.get(e);
                if (null != t) {
                    X.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(t));
                    return
                }
                z = "attach.getOverlayModule";
                let l = await en();
                z = "attach.transitionOverlayPIDStatus", q(e, "ATTACHING"), z = "attach.attachToProcess";
                let n = await A.attachToProcess(e);
                null == n ? (z = "attach.transitionOverlayPIDStatus (CONNECTING)", q(e, "CONNECTING", "ATTACHING"), z = "attach.reconcileHostProcess", await Z(l), l.connectProcess(e)) : (z = "attach.transitionOverlayPIDStatus (HOOK_FAILED)", q(e, "HOOK_FAILED", "ATTACHING"), X.warn("Could not hook to pid=".concat(e, ", error=").concat(n)))
            }
            async function $(e) {
                if (!Q.isMutexHeld() && X.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !b.has(e)) {
                    X.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
                    return
                }
                z = "detach.getOverlayModule";
                let t = await en();
                z = "detach.transitionOverlayPIDStatus", q(e, null), e !== g.DEV_PID && (z = "detach.cancelAttachToProcess", A.cancelAttachToProcess(e), z = "detach.disconnectProcess", t.disconnectProcess(e)), z = "detach.reconcileHostProcess", await Z(t)
            }
            async function ee(e) {
                var t, l, n, a, o, i, r, d, E, u, _, c;
                if (X.verbose("updateIntendedOverlayPIDs", {
                        isConnectionOpened: V,
                        action: e
                    }), !Q.isMutexHeld() && X.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !V && null != e) {
                    X.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
                    return
                }
                async function s(t) {
                    if (!(t in U)) {
                        X.error("Unexpected. ".concat(t, " is not a tracked game?"), U, e);
                        return
                    }
                    let l = U[t];
                    delete U[t];
                    try {
                        await l.deconstructor()
                    } catch (e) {
                        X.error("Failed to deconstruct tracked game ".concat(t), e)
                    }
                }
                if (null == e || !H) {
                    X.verbose("updateIntendedOverlayPIDs: Removing all.", U, e);
                    let t = Object.keys(U);
                    for (let e of t) await s(Number(e));
                    return
                }
                for (let s of null !== (t = e.added) && void 0 !== t ? t : []) {
                    let t = v.default.getGameOverlayStatus(s);
                    if (X.verbose("updateIntendedOverlayPIDs: newGame", s, t), null != t && t.enabled) switch (s.pid in U && X.error("Unexpected. ".concat(s.pid, " is being added twice?"), U, e), t.overlayMethod) {
                        case G.OverlayMethod.OutOfProcess:
                            let O = s.pid;
                            W !== O && await (null === T.default || void 0 === T.default ? void 0 : null === (E = T.default.globalOverlay) || void 0 === E ? void 0 : null === (d = E.closeOverlay) || void 0 === d ? void 0 : d.call(E)), W = O;
                            let A = await el();
                            try {
                                A += "&pid=".concat(O), await (null === T.default || void 0 === T.default ? void 0 : null === (_ = T.default.globalOverlay) || void 0 === _ ? void 0 : null === (u = _.openOverlay) || void 0 === u ? void 0 : u.call(_, A))
                            } catch (e) {
                                X.log("globalOverlay: Failed to open overlay: ".concat(e), e)
                            }
                            let I = null !== (c = await (null === T.default || void 0 === T.default ? void 0 : null === (n = T.default.globalOverlay) || void 0 === n ? void 0 : null === (l = n.getWindowHandles) || void 0 === l ? void 0 : l.call(n))) && void 0 !== c ? c : [];
                            null === (a = (o = h.default.getDiscordUtils()).globalOverlaySetWindowHandles) || void 0 === a || a.call(o, I);
                            let S = () => {
                                    var e;
                                    ei(O), null === T.default || void 0 === T.default || null === (e = T.default.globalOverlay) || void 0 === e || e.showOverlay()
                                },
                                N = () => {
                                    var e;
                                    ei(0), null === T.default || void 0 === T.default || null === (e = T.default.globalOverlay) || void 0 === e || e.hideOverlay()
                                },
                                f = () => {
                                    var e;
                                    null === T.default || void 0 === T.default || null === (e = T.default.globalOverlay) || void 0 === e || e.hideOverlay()
                                },
                                L = () => {
                                    if (w === O) {
                                        var e;
                                        null === T.default || void 0 === T.default || null === (e = T.default.globalOverlay) || void 0 === e || e.showOverlay()
                                    }
                                };
                            U[s.pid] = {
                                method: t.overlayMethod,
                                deconstructor: async () => {
                                    var e, t, l, n;
                                    await (null === T.default || void 0 === T.default ? void 0 : null === (t = T.default.globalOverlay) || void 0 === t ? void 0 : null === (e = t.closeOverlay) || void 0 === e ? void 0 : e.call(t)), null === (l = (n = h.default.getDiscordUtils()).globalOverlayClearTrackedGame) || void 0 === l || l.call(n), W = null
                                }
                            }, null === (i = (r = h.default.getDiscordUtils()).globalOverlaySetTrackedGame) || void 0 === i || i.call(r, s.pid, s.windowHandle, S, N, f, L);
                            break;
                        case G.OverlayMethod.Hook:
                            !b.has(s.pid) && await J(s.pid), U[s.pid] = {
                                method: t.overlayMethod,
                                deconstructor: async () => {
                                    await $(s.pid)
                                }
                            };
                            break;
                        case G.OverlayMethod.Disabled:
                            X.verbose("updateIntendedOverlayPIDs: disabled", s);
                            break;
                        default:
                            X.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(t.overlayMethod))
                    }
                }
                for (let t of e.removed) X.verbose("updateIntendedOverlayPIDs: removedGame", t), await s(t.pid)
            }
            let et = j("updateIntendedOverlayPIDs", e => ee(e));

            function el() {
                return new Promise(e => {
                    eI.addConditionalChangeListener(() => {
                        if (null != n) return e(n), !1
                    })
                })
            }
            let en = (() => {
                let e = null;
                async function t() {
                    if (!G.OVERLAY_SUPPORTED) throw X.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
                    try {
                        return await h.default.ensureModule("discord_overlay2"),
                            function(e) {
                                for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (X.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => void 0);
                                return e
                            }(h.default.requireModule("discord_overlay2"))
                    } catch (e) {
                        throw X.error("failed ensuring discord_overlay2", e), e
                    }
                }
                return () => (null == e && (e = t()), e)
            })();

            function ea() {
                return et({
                    added: v.default.getRunningGames(),
                    removed: []
                })
            }
            let eo = j("setOverlayEnabled", async e => {
                if (!G.OVERLAY_SUPPORTED || H === e) return;
                H = e, N.OverlayStoredSettings.update({
                    enabled: e
                }), eI.emitChange();
                let t = await en();
                H ? (await Z(t), ea()) : (await ee(void 0), await Z(t))
            });

            function ei(e) {
                s.default.setFocusedPID(0 === e ? null : e)
            }

            function er(e, t, l) {
                var n;
                let a = null === (n = v.default.getGameForPID(e)) || void 0 === n ? void 0 : n.name,
                    o = D.default.getGameByName(a),
                    i = {
                        game_name: a,
                        game_id: null == o ? null : o.id,
                        success: t,
                        ...l
                    };
                (0, c.createLayout)(g.OVERLAY_LAYOUT_ID, y.default.getDefaultLayout(g.OVERLAY_LAYOUT_ID), {
                    width: l.graphics_width,
                    height: l.graphics_height
                }), R.default.track(P.AnalyticEvents.OVERLAY_HOOK_RESULT, i), X.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), i), t ? q(e, "CONNECTED", "CONNECTING") : q(e, "CONNECT_FAILED", "CONNECTING")
            }

            function ed() {
                let e = C.default.getToken(),
                    t = C.default.getId();
                null != e && I.send({
                    type: P.OverlayEventTypes.DISPATCH,
                    pid: null,
                    token: null,
                    payloads: [{
                        type: "UPDATE_TOKEN",
                        token: e,
                        userId: t
                    }]
                })
            }
            async function eE(e) {
                var t, l, n, a, o, i;
                let r = await en();
                null != w && w !== g.DEV_PID && r.sendCommand(w, {
                    message: "intercept_input",
                    intercept: !e
                }), null === T.default || void 0 === T.default || null === (l = T.default.globalOverlay) || void 0 === l || null === (t = l.setInteractionEnabled) || void 0 === t || t.call(l, !e), e ? null === (n = (a = h.default.getDiscordUtils()).globalOverlayFocusTrackedGame) || void 0 === n || n.call(a) : null === (o = (i = h.default.getDiscordUtils()).globalOverlayFocusOverlay) || void 0 === o || o.call(i)
            }

            function eu(e) {
                if (e) {
                    let t = v.default.getVisibleGame(),
                        l = null == t ? null : v.default.getGameOverlayStatus(t);
                    (null == l ? void 0 : l.overlayMethod) === G.OverlayMethod.OutOfProcess ? eE(e) : setTimeout(() => eE(e), 200)
                } else eE(e)
            }
            let e_ = null;

            function ec(e) {
                return !(F || !m || x.has(e.type)) && ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = {
                    ...e,
                    settings: {
                        type: e.settings.type,
                        proto: (0, L.protoToB64WithType)(e.settings.type, e.settings.proto)
                    }
                }), M.add(e), null == a && (a = setTimeout(es, 1)), !1)
            }

            function es() {
                if (null != a && (clearTimeout(a), a = null), !m) {
                    M.clear();
                    return
                }
                M.size > 0 && (I.send({
                    type: P.OverlayEventTypes.DISPATCH,
                    pid: null,
                    token: null,
                    payloads: Array.from(M)
                }), M.clear())
            }

            function eO(e) {
                return null != e && (0, p.constantTimeCompare)(e, k)
            }

            function eT(e) {
                switch (0, e.type) {
                    case P.OverlayEventTypes.CONNECT:
                        let t = C.default.getToken();
                        if (null == t) break;
                        (0, c.createLayout)(g.OVERLAY_LAYOUT_ID, y.default.getDefaultLayout(g.OVERLAY_LAYOUT_ID)), Promise.all([(0, f.default)(t, e.pid), d.default.PersistedStore.getAllStates()]).then(t => {
                            let [l, n] = t, {
                                pid: a,
                                token: o
                            } = e;
                            I.send({
                                type: P.OverlayEventTypes.STORAGE_SYNC,
                                pid: a,
                                token: o,
                                states: n
                            }), I.send({
                                type: P.OverlayEventTypes.DISPATCH,
                                pid: a,
                                token: o,
                                payloads: [l]
                            }), q(a, "READY"), s.default.overlayReady(a)
                        });
                        break;
                    case P.OverlayEventTypes.DISPATCH:
                        if (null != e.payloads) {
                            var l;
                            l = e.payloads, F = !0, l.forEach(e => E.default.dispatch(e)), F = !1
                        }
                        break;
                    case P.OverlayEventTypes.LOG_MESSAGES:
                        X.info("[overlay data received]", e.payload)
                }
            }
            class eA extends d.default.Store {
                initialize() {
                    !(!G.OVERLAY_SUPPORTED || __OVERLAY__) && (Y.add(G.OverlayMethod.Hook), this.waitFor(v.default, C.default), I.setReceiveCommandHandler(eT, eO), C.default.addChangeListener(ed), eo(N.OverlayStoredSettings.enabled), E.default.addInterceptor(ec))
                }
                isInputLocked(e) {
                    return !K.has(e)
                }
                isSupported() {
                    return G.OVERLAY_SUPPORTED
                }
                isMethodSupported(e) {
                    return G.OVERLAY_SUPPORTED && Y.has(e)
                }
                get enabled() {
                    return H
                }
                getFocusedPID() {
                    return w
                }
                isReady(e) {
                    return "READY" === b.get(e)
                }
                isCrashed(e) {
                    return "CRASHED" === b.get(e)
                }
            }
            eA.displayName = "OverlayBridgeStore";
            let eI = new eA(E.default, __OVERLAY__ ? {} : {
                CONNECTION_OPEN: function() {
                    V = !0, ea()
                },
                CONNECTION_CLOSED: function() {
                    V = !1, w = null, et(void 0)
                },
                OVERLAY_SET_ENABLED: function(e) {
                    let {
                        enabled: t
                    } = e;
                    return eo(t), !1
                },
                OVERLAY_FOCUSED: function(e) {
                    let {
                        pid: t
                    } = e;
                    w = t
                },
                RUNNING_GAMES_CHANGE: function(e) {
                    et(e)
                },
                OVERLAY_SET_INPUT_LOCKED: function(e) {
                    let {
                        locked: t,
                        pid: l
                    } = e, n = b.get(l);
                    if (t || "READY" === n || "CRASHED" === n) {
                        if (t ? K.delete(l) : K.add(l), B.clear(), null != e_ && (clearTimeout(e_), e_ = null, t)) return;
                        t ? eu(t) : e_ = setTimeout(() => {
                            eu(t), e_ = null
                        }, 100)
                    }
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    let {
                        region: t
                    } = e;
                    B.add(t), eu(!1)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: function() {
                    B.clear(), eu(!0)
                },
                RPC_SERVER_READY: function(e) {
                    let {
                        port: t
                    } = e, l = crypto.getRandomValues(new Uint8Array(8));
                    k = btoa(String.fromCharCode(...l));
                    let a = new URLSearchParams;
                    a.append("build_id", "1b81e2bab39e60b22454f815fedba785ea5e46c2"), a.append("rpc", String(t)), a.append("rpc_auth_token", k), n = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(a.toString())
                },
                OVERLAY_CALL_PRIVATE_CHANNEL: function(e) {
                    let {
                        channelId: t,
                        ring: l
                    } = e;
                    setImmediate(() => {
                        O.default.selectPrivateChannel(t), u.default.call(t, !1, !!l)
                    })
                },
                OVERLAY_JOIN_GAME: function(e) {
                    let {
                        userId: t,
                        sessionId: l,
                        applicationId: n,
                        channelId: a,
                        messageId: o
                    } = e;
                    setImmediate(() => {
                        _.default.join({
                            userId: t,
                            sessionId: l,
                            applicationId: n,
                            channelId: a,
                            messageId: o
                        }), null != w && s.default.setLocked(!0, w)
                    })
                },
                OVERLAY_CRASHED: function(e) {
                    let {
                        pid: t
                    } = e;
                    q(t, "CRASHED")
                },
                RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
                    if (X.verbose("handleGameToggleOverlay", e), !("pid" in e.game)) {
                        X.verbose("handleGameToggleOverlay: Game was not a RunningGame.", e);
                        return
                    }
                    let t = [e.game];
                    et({
                        added: e.newEnabledValue ? t : [],
                        removed: e.newEnabledValue ? [] : t
                    })
                }
            });
            var eS = eI
        },
        27571: function(e, t, l) {
            "use strict";

            function n(e, t) {
                let l = 0,
                    n = Math.min(e.length, t.length);
                for (let a = 0; a < n; a++) l |= e.charCodeAt(a) ^ t.charCodeAt(a);
                return 0 === l && e.length === t.length
            }
            l.r(t), l.d(t, {
                constantTimeCompare: function() {
                    return n
                }
            })
        },
        992830: function(e, t, l) {
            "use strict";

            function n(e) {
                let t = Promise.resolve(null),
                    l = [],
                    n = !1,
                    {
                        onContention: a,
                        onContentionResolved: o,
                        onTimeout: i,
                        timeoutMs: r
                    } = e,
                    d = function(e, d) {
                        l.length > 0 ? (a(d, l), n = !0) : n && (o(), n = !1), l.push(d);
                        let E = null == r || null == i ? null : setTimeout(() => i(d, l), r);
                        return new Promise((n, a) => {
                            t = t.then(e).then(n, a).then(() => l.splice(0, 1)), null != E && (t = t.then(() => clearTimeout(E)))
                        })
                    };
                return d.isMutexHeld = () => l.length > 0, d.getLockHolders = () => l, d
            }
            l.r(t), l.d(t, {
                createObservableLock: function() {
                    return n
                }
            }), l("424973")
        }
    }
]);
//# sourceMappingURL=77015.b26d85db73518df14f2d.js.map