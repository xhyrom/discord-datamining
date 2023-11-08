(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77015"], {
        640583: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                createLayout: function() {
                    return i
                },
                setWidgetLayout: function() {
                    return o
                },
                setTopWidget: function() {
                    return E
                },
                togglePinned: function() {
                    return r
                },
                deleteWidget: function() {
                    return d
                },
                deleteAllWidgets: function() {
                    return _
                },
                createWidget: function() {
                    return u
                },
                createWidgets: function() {
                    return c
                }
            });
            var n = l("913144"),
                a = l("819068");

            function i(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.OVERLAY_DEFAULT_RESOLUTION;
                n.default.dispatch({
                    type: "LAYOUT_CREATE",
                    layoutId: e,
                    widgets: t,
                    defaultResolution: l
                })
            }

            function o(e, t, l) {
                n.default.dispatch({
                    type: "LAYOUT_UPDATE_WIDGET",
                    widgetId: e,
                    anchor: t,
                    size: l
                })
            }

            function E(e) {
                n.default.dispatch({
                    type: "LAYOUT_SET_TOP_WIDGET",
                    widgetId: e
                })
            }

            function r(e) {
                n.default.dispatch({
                    type: "LAYOUT_SET_PINNED",
                    widgetId: e
                })
            }

            function d(e) {
                n.default.dispatch({
                    type: "LAYOUT_DELETE_WIDGET",
                    widgetId: e
                })
            }

            function _(e) {
                n.default.dispatch({
                    type: "LAYOUT_DELETE_ALL_WIDGETS",
                    layoutId: e
                })
            }

            function u(e) {
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
                i = l("939398"),
                o = l("505507"),
                E = l("703370"),
                r = l("471671"),
                d = l("80687"),
                _ = l("819068"),
                u = l("640583"),
                c = l("49111");
            let s = {
                track(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!__OVERLAY__) throw Error("OverlayActionCreators.track: Must be called within Overlay context");
                    (0, i.trackWithOverlayMetadata)(e, t, l)
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
                    s.setLocked(e, (0, _.getPID)())
                },
                setEnabled(e) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_ENABLED",
                        enabled: e
                    })
                },
                setMethod(e) {
                    a.default.dispatch({
                        type: "OVERLAY_SET_METHOD",
                        method: e
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
                    let i = E.default.getGame();
                    a.default.dispatch({
                        type: "OVERLAY_NOTIFICATION_EVENT",
                        notificationType: e,
                        action: t,
                        gameName: null !== (l = null == i ? void 0 : i.name) && void 0 !== l ? l : null,
                        gameId: null !== (n = null == i ? void 0 : i.id) && void 0 !== n ? n : null
                    })
                },
                setPinChat(e) {
                    let t = _.OVERLAY_LAYOUT_ID,
                        l = o.default.getWidgetsForLayout(t),
                        a = o.default.getWidgetConfig(c.OverlayWidgets.GUILDS),
                        i = o.default.getWidgetConfig(c.OverlayWidgets.TEXT),
                        E = o.default.getWidgetConfig(c.OverlayWidgets.GUILDS_TEXT);
                    if (0 === l.length || null == a || null == i || null == E) return;
                    let s = r.default.windowSize(),
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
                        S = {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        I = {
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
                                    O = (0, d.getSizeFromLayoutSize)(a, s), (0, u.deleteWidget)(l);
                                    break;
                                case c.OverlayWidgets.GUILDS:
                                    T = (0, d.getFullCoordsFromLayoutSize)(n, a, s), A = (0, d.getSizeFromLayoutSize)(a, s), (0, u.deleteWidget)(l);
                                    break;
                                case c.OverlayWidgets.GUILDS_TEXT:
                                    S = (0, d.getFullCoordsFromLayoutSize)(n, a, s), I = (0, d.getSizeFromLayoutSize)(a, s), (0, u.deleteWidget)(l)
                            }
                        }), e) {
                        let e = "auto" === I.width ? E.minSize.width : I.width;
                        e -= a.minSize.width;
                        let [l, i] = (0, d.getLeftWidgetSpecs)(S, {
                            ...I,
                            width: a.minSize.width
                        }, s), [r, _] = (0, d.getRightWidgetSpecs)(S, {
                            ...I,
                            width: e
                        }, s, {
                            x: 10,
                            y: 10
                        }), O = o.default.getWidgetDefaultSettings(c.OverlayWidgets.TEXT);
                        if (null == O) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                        (0, u.createWidget)({
                            ...O,
                            type: c.OverlayWidgets.TEXT,
                            id: (0, n.v4)(),
                            size: _,
                            anchor: r,
                            layoutId: t
                        });
                        let T = o.default.getWidgetDefaultSettings(c.OverlayWidgets.GUILDS);
                        if (null == T) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                        (0, u.createWidget)({
                            ...T,
                            type: c.OverlayWidgets.GUILDS,
                            id: (0, n.v4)(),
                            size: i,
                            anchor: l,
                            layoutId: t
                        })
                    } else {
                        let e = "auto" === O.width ? i.minSize.width : O.width;
                        e += a.minSize.width;
                        let [l, E] = (0, d.getLeftWidgetSpecs)(T, {
                            height: A.height,
                            width: e
                        }, s), r = o.default.getWidgetDefaultSettings(c.OverlayWidgets.GUILDS_TEXT);
                        if (null == r) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                        (0, u.createWidget)({
                            ...r,
                            type: c.OverlayWidgets.GUILDS_TEXT,
                            id: (0, n.v4)(),
                            layoutId: t,
                            anchor: l,
                            size: E
                        })
                    }
                },
                resetDefaultLayout(e) {
                    let t = o.default.getLayout(e);
                    null != t && ((0, u.deleteAllWidgets)(e), (0, u.createWidgets)(o.default.getDefaultLayout(e)))
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
                    return K
                }
            }), l("808653"), l("424973"), l("222007"), l("781738");
            var n = l("800648"),
                a = l.n(n),
                i = l("969230"),
                o = l.n(i),
                E = l("714617"),
                r = l.n(E),
                d = l("917351"),
                _ = l.n(d),
                u = l("446674"),
                c = l("913144"),
                s = l("485328"),
                O = l("605250"),
                T = l("42887"),
                A = l("599110"),
                S = l("773336"),
                I = l("50885"),
                N = l("13798"),
                f = l("860957"),
                L = l("49111"),
                C = l("80028"),
                D = l("846325"),
                y = l("390493");
            let R = new O.default("KeybindsStore"),
                v = {},
                p = {},
                h = 0,
                g = !0,
                P = {},
                G = [L.GlobalKeybindActions.PUSH_TO_TALK, L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

            function U(e) {
                if (S.isPlatformEmbedded) I.default.inputEventUnregister(parseInt(e, 10));
                else {
                    let t = v[e];
                    if (t) {
                        let t = p[e],
                            l = P[t.action];
                        (null == l ? void 0 : l.isPressed) === !0 && y.nextTick(() => l.onTrigger(!1, t)), v[e].reset(), v[e] = null
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
                    R.error("[kb store] KeybindStore: Looking for callback action ".concat(l, " but it doesn't exist in this version. Skipping"));
                    return
                }
                let i = e.id,
                    E = P[l].keyEvents;
                ! function(e, t, l, n) {
                    if (S.isPlatformEmbedded) I.default.inputEventRegister(parseInt(e), t, l, n);
                    else {
                        U(e);
                        let i = o(new a(document));
                        n.keyup && i.bindGlobal((0, N.toString)(t), () => l(!1), "keyup"), n.keydown && i.bindGlobal((0, N.toString)(t), () => l(!0), "keydown"), v[e] = i
                    }
                }(i, t, e => (function(e, t) {
                    let l = p[e];
                    null != l && P[l.action].onTrigger(t, l)
                })(i, e), {
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1,
                    ...E
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
                    n = _.find(p, t => t.action === e && (!l || t.managed === l));
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
                return _.each(p, t => {
                    t.action === L.GlobalKeybindActions.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && M(t)
                }), _.reduce(T.default.getShortcuts(), (e, t, l) => {
                    let n = _.find(p, e => e.action === L.GlobalKeybindActions.PUSH_TO_TALK && !0 === e.managed && e.context === l);
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
            class W extends u.default.DeviceSettingsStore {
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
                        if (_.isEqual(l.shortcut, e)) return !0
                    }
                    return !1
                }
                getKeybindForAction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return _.find(p, l => l.action === e && (!t || t && !0 === l.managed))
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
                return _.reduce(l, (e, l, n) => {
                    let a = parseInt(l.id, 10);
                    return isNaN(a) || l.id !== n ? e : ((null == t || t < 2) && ("string" == typeof l.shortcut ? (l.shortcut = l.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), l.shortcut = (0, N.toCombo)(l.shortcut)) : l.shortcut = l.shortcut.map(e => e.length < 3 ? [...e, (0, N.getEnv)()] : e)), e[n] = l, e)
                }, {})
            }, e => e, e => {
                let {
                    keybinds: t = e
                } = e;
                return _.reduce(t, (e, t, l) => {
                    if ((0, S.isLinux)() && t.action === L.GlobalKeybindActions.SOUNDBOARD_HOLD) {
                        let l = t.shortcut.map(e => e[1]),
                            n = (0, N.toCombo)("`").map(e => e[1]);
                        if (r(l, n)) return e
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
            var K = new W(c.default, {
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
                    g = t, t ? (s.default.enable(), _.forEach(p, b)) : (s.default.disable(), _.forEach(p, e => U(e.id)))
                },
                KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function(e) {
                    let {
                        keybinds: t
                    } = e;
                    P = t, v = {}, h = 0;
                    let l = Object.values(p).filter(e => G.includes(e.action) && e.managed);
                    l.length !== G.length && w(), _.forEach(p, e => {
                        h = Math.max(parseInt(e.id, 10), h) + 1;
                        try {
                            b(e)
                        } catch (t) {
                            R.error("Failed to register keybind", e, t)
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
                    return en
                },
                default: function() {
                    return ef
                }
            }), l("222007"), l("70102"), l("311790"), l("477657"), l("811875"), l("90301"), l("652153"), l("28797"), l("817884"), l("597349"), l("667536"), l("690341"), l("101997"), l("313619"), l("654714"), l("287168"), l("956660"), l("860677");
            var i, o, E = l("992830"),
                r = l("446674"),
                d = l("913144"),
                _ = l("561288"),
                u = l("823411"),
                c = l("640583"),
                s = l("539405"),
                O = l("987317"),
                T = l("49671"),
                A = l("6193"),
                S = l("121338"),
                I = l("605250"),
                N = l("630915"),
                f = l("32128"),
                L = l("127080"),
                C = l("116949"),
                D = l("271938"),
                y = l("546463"),
                R = l("505507"),
                v = l("568307"),
                p = l("599110"),
                h = l("27571"),
                g = l("50885"),
                P = l("819068"),
                G = l("49111"),
                U = l("6791");
            (o = i || (i = {})).ATTACHING = "ATTACHING", o.CONNECTING = "CONNECTING", o.CONNECTED = "CONNECTED", o.READY = "READY", o.CRASHED = "CRASHED", o.CONNECT_FAILED = "CONNECT_FAILED", o.HOOK_FAILED = "HOOK_FAILED";
            let b = (0, E.createLock)(),
                m = new Map,
                M = !1,
                Y = new Set,
                H = new Set,
                V = !1,
                w = U.OverlayMethod.Default,
                W = !1,
                K = null,
                F = null,
                k = "",
                x = new Set,
                B = !1,
                X = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_MFA_FAILURE", "LOGIN_MFA_SMS", "LOGIN_MFA_SMS_REQUEST_SUCCESS", "LOGIN_MFA_SMS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "REGISTER_FAILURE", "VERIFY_FAILURE", "VERIFY_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "CHANNEL_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "MENTION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "SEARCH_MODAL_OPEN", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "MENTION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "SEARCH_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_OPEN", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_START", "SEARCH_FINISH", "SEARCH_INDEXING", "SEARCH_CLEAR", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_CLEAR_HISTORY", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "EXPERIMENT_REGISTER_LEGACY", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "GUILD_FEED_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_SEARCH_STORE_QUERY", "APPLICATION_COMMAND_SEARCH_STORE_UPDATE", "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED"]),
                z = new Set,
                Q = new I.default("OverlayBridgeStore");

            function j(e, t) {
                return function() {
                    for (var l = arguments.length, n = Array(l), a = 0; a < l; a++) n[a] = arguments[a];
                    e(() => t(...n))
                }
            }

            function q(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = m.get(e);
                if ((null === l || n === l) && n !== t) {
                    if (null == t ? m.delete(e) : m.set(e, t), null == t || t === i.CRASHED) {
                        var a, o;
                        K = null;
                        let e = null === (o = T.default) || void 0 === o ? void 0 : null === (a = o.fileManager) || void 0 === a ? void 0 : a.uploadDiscordHookCrashes;
                        null != e && e().then(e => {
                            if (Array.isArray(e) && 0 !== e.length)
                                for (let r of (Q.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                                    var t, l, n, a, i, o, E;
                                    if (null == r) continue;
                                    let e = null != r.processName ? y.default.getGameByExecutable(r.processName) : null;
                                    p.default.track(G.AnalyticEvents.OVERLAY_HOOK_CRASHED, {
                                        process_name: null == r ? void 0 : r.processName,
                                        game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                                        game_id: null !== (l = null == e ? void 0 : e.id) && void 0 !== l ? l : null,
                                        minidump_exception_type: null !== (n = r.exceptionString) && void 0 !== n ? n : null,
                                        minidump_exception_module_name: null !== (a = r.exceptionModuleName) && void 0 !== a ? a : null,
                                        minidump_relative_crash_address: null !== (i = r.relativeCrashAddress) && void 0 !== i ? i : null,
                                        minidump_exception_module_version: null !== (o = r.exceptionModuleVersion) && void 0 !== o ? o : null,
                                        minidump_exception_module_code_id: null !== (E = r.exceptionModuleCodeId) && void 0 !== E ? E : null
                                    })
                                }
                        })
                    }
                    x.delete(e), Q.info("pid=".concat(e, " status transition ").concat(null != n ? n : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED")), M = Array.from(m.values()).some(e => e === i.READY)
                }
            }
            async function Z(e) {
                if (g.default.supportsFeature(G.NativeFeatures.CREATE_HOST_ON_ATTACH)) {
                    if (m.size > 0) {
                        let t = await en();
                        e.createHostProcess(t, eE, eo)
                    } else e.destroyHostProcess()
                } else if (V) {
                    let t = await en();
                    e.createHostProcess(t, eE, eo)
                } else e.destroyHostProcess()
            }
            async function J(e) {
                let t = m.get(e);
                if (null != t) {
                    Q.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(t));
                    return
                }
                let l = await ea();
                q(e, i.ATTACHING);
                let n = await A.attachToProcess(e);
                null == n ? (q(e, i.CONNECTING, i.ATTACHING), await Z(l), l.connectProcess(e)) : (q(e, i.HOOK_FAILED, i.ATTACHING), Q.warn("Could not hook to pid=".concat(e, ", error=").concat(n)))
            }
            async function $(e) {
                if (!m.has(e)) {
                    Q.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
                    return
                }
                let t = await ea();
                q(e, null), e !== P.DEV_PID && (A.cancelAttachToProcess(e), t.disconnectProcess(e)), await Z(t)
            }
            async function ee() {
                for (let e of m.keys()) await $(e)
            }
            async function et() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                switch (null == e && (e = V && W ? v.default.getOverlayEligiblePIDs() : []), w) {
                    case U.OverlayMethod.Global:
                        var t, l, n, a, i, o, E, r, d, _, u, c, s, O, A, S, I, N, f, L;
                        let C = v.default.getVisibleGame(),
                            D = -1 !== e.indexOf(null !== (t = null == C ? void 0 : C.pid) && void 0 !== t ? t : -1);
                        if (null != C && D) {
                            let e = C.pid;
                            F !== e && await (null === (u = T.default) || void 0 === u ? void 0 : null === (_ = u.globalOverlay) || void 0 === _ ? void 0 : null === (d = _.closeOverlay) || void 0 === d ? void 0 : d.call(_)), F = e;
                            let t = await en();
                            try {
                                t += "&pid=".concat(e), await (null === (O = T.default) || void 0 === O ? void 0 : null === (s = O.globalOverlay) || void 0 === s ? void 0 : null === (c = s.openOverlay) || void 0 === c ? void 0 : c.call(s, t))
                            } catch (e) {
                                Q.log("globalOverlay: Failed to open overlay: ".concat(e), e)
                            }
                            let S = null !== (A = await (null === (a = T.default) || void 0 === a ? void 0 : null === (n = a.globalOverlay) || void 0 === n ? void 0 : null === (l = n.getWindowHandles) || void 0 === l ? void 0 : l.call(n))) && void 0 !== A ? A : [];
                            null === (i = (o = g.default.getDiscordUtils()).globalOverlaySetWindowHandles) || void 0 === i || i.call(o, S);
                            null === (E = (r = g.default.getDiscordUtils()).globalOverlaySetTrackedGame) || void 0 === E || E.call(r, C.pid, C.windowHandle, () => {
                                var t, l;
                                eo(e), null === (l = T.default) || void 0 === l || null === (t = l.globalOverlay) || void 0 === t || t.showOverlay()
                            }, () => {
                                var e, t;
                                eo(0), null === (t = T.default) || void 0 === t || null === (e = t.globalOverlay) || void 0 === e || e.hideOverlay()
                            }, () => {
                                var e, t;
                                null === (t = T.default) || void 0 === t || null === (e = t.globalOverlay) || void 0 === e || e.hideOverlay()
                            }, () => {
                                if (K === e) {
                                    var t, l;
                                    null === (l = T.default) || void 0 === l || null === (t = l.globalOverlay) || void 0 === t || t.showOverlay()
                                }
                            })
                        } else await (null === (N = T.default) || void 0 === N ? void 0 : null === (I = N.globalOverlay) || void 0 === I ? void 0 : null === (S = I.closeOverlay) || void 0 === S ? void 0 : S.call(I)), null === (f = (L = g.default.getDiscordUtils()).globalOverlayClearTrackedGame) || void 0 === f || f.call(L), F = null;
                        break;
                    case U.OverlayMethod.Hook:
                    case U.OverlayMethod.Default:
                        for (let t of e) !m.has(t) && await J(t);
                        for (let t of m.keys()) !e.includes(t) && await $(t);
                        break;
                    default:
                        Q.error("Unknown overlay method: ".concat(w))
                }
            }
            let el = j(b, function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return et(e)
            });

            function en() {
                return new Promise(e => {
                    eN.addConditionalChangeListener(() => {
                        if (null != n) return e(n), !1
                    })
                })
            }
            let ea = (() => {
                    let e = null;
                    async function t() {
                        if (!U.OVERLAY_SUPPORTED) throw Q.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
                        try {
                            return await g.default.ensureModule("discord_overlay2"),
                                function(e) {
                                    for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (Q.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => void 0);
                                    return e
                                }(g.default.requireModule("discord_overlay2"))
                        } catch (e) {
                            throw Q.error("failed ensuring discord_overlay2", e), e
                        }
                    }
                    return () => (null == e && (e = t()), e)
                })(),
                ei = j(b, async e => {
                    if (!U.OVERLAY_SUPPORTED || V === e) return;
                    V = e, f.OverlayStoredSettings.update({
                        enabled: e
                    }), eN.emitChange();
                    let t = await ea();
                    if (V) await Z(t), el();
                    else {
                        var l, n, a;
                        await ee(), await Z(t), await (null === (a = T.default) || void 0 === a ? void 0 : null === (n = a.globalOverlay) || void 0 === n ? void 0 : null === (l = n.closeOverlay) || void 0 === l ? void 0 : l.call(n))
                    }
                });

            function eo(e) {
                s.default.setFocusedPID(0 === e ? null : e)
            }

            function eE(e, t, l) {
                var n;
                let a = null === (n = v.default.getGameForPID(e)) || void 0 === n ? void 0 : n.name,
                    o = y.default.getGameByName(a),
                    E = {
                        game_name: a,
                        game_id: null == o ? null : o.id,
                        success: t,
                        ...l
                    };
                (0, c.createLayout)(P.OVERLAY_LAYOUT_ID, R.default.getDefaultLayout(P.OVERLAY_LAYOUT_ID), {
                    width: l.graphics_width,
                    height: l.graphics_height
                }), p.default.track(G.AnalyticEvents.OVERLAY_HOOK_RESULT, E), Q.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), E), t ? q(e, i.CONNECTED, i.CONNECTING) : q(e, i.CONNECT_FAILED, i.CONNECTING)
            }

            function er() {
                let e = D.default.getToken(),
                    t = D.default.getId();
                null != e && S.send({
                    type: G.OverlayEventTypes.DISPATCH,
                    pid: null,
                    token: null,
                    payloads: [{
                        type: "UPDATE_TOKEN",
                        token: e,
                        userId: t
                    }]
                })
            }

            function ed() {
                return el(), !1
            }
            async function e_(e) {
                var t, l, n, a, i, o, E;
                let r = await ea();
                null != K && K !== P.DEV_PID && r.sendCommand(K, {
                    message: "intercept_input",
                    intercept: !e
                }), null === (n = T.default) || void 0 === n || null === (l = n.globalOverlay) || void 0 === l || null === (t = l.setInteractionEnabled) || void 0 === t || t.call(l, !e), e ? null === (a = (i = g.default.getDiscordUtils()).globalOverlayFocusTrackedGame) || void 0 === a || a.call(i) : null === (o = (E = g.default.getDiscordUtils()).globalOverlayFocusOverlay) || void 0 === o || o.call(E)
            }

            function eu(e) {
                e ? w === U.OverlayMethod.Global ? e_(e) : setTimeout(() => e_(e), 200) : e_(e)
            }
            let ec = null;

            function es(e) {
                return !(B || !M || X.has(e.type)) && ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = {
                    ...e,
                    settings: {
                        type: e.settings.type,
                        proto: (0, C.protoToB64WithType)(e.settings.type, e.settings.proto)
                    }
                }), Y.add(e), null == a && (a = setTimeout(eO, 1)), !1)
            }

            function eO() {
                if (null != a && (clearTimeout(a), a = null), !M) {
                    Y.clear();
                    return
                }
                Y.size > 0 && (S.send({
                    type: G.OverlayEventTypes.DISPATCH,
                    pid: null,
                    token: null,
                    payloads: Array.from(Y)
                }), Y.clear())
            }

            function eT(e) {
                return null != e && (0, h.constantTimeCompare)(e, k)
            }

            function eA(e) {
                switch (0, e.type) {
                    case G.OverlayEventTypes.CONNECT:
                        let t = D.default.getToken();
                        if (null == t) break;
                        (0, c.createLayout)(P.OVERLAY_LAYOUT_ID, R.default.getDefaultLayout(P.OVERLAY_LAYOUT_ID)), Promise.all([(0, L.default)(t, e.pid), r.default.PersistedStore.getAllStates()]).then(t => {
                            let [l, n] = t, {
                                pid: a,
                                token: o
                            } = e;
                            S.send({
                                type: G.OverlayEventTypes.STORAGE_SYNC,
                                pid: a,
                                token: o,
                                states: n
                            }), S.send({
                                type: G.OverlayEventTypes.DISPATCH,
                                pid: a,
                                token: o,
                                payloads: [l]
                            }), q(a, i.READY), s.default.overlayReady(a)
                        });
                        break;
                    case G.OverlayEventTypes.DISPATCH:
                        if (null != e.payloads) {
                            var l;
                            l = e.payloads, B = !0, l.forEach(e => d.default.dispatch(e)), B = !1
                        }
                        break;
                    case G.OverlayEventTypes.LOG_MESSAGES:
                        Q.info("[overlay data received]", e.payload)
                }
            }
            let eS = new Promise(e => {
                N.default.subscribe({
                    location: "1"
                }, t => {
                    null != t && t.useGlobalOverlay && H.add(U.OverlayMethod.Global), w = f.OverlayStoredSettings.method, e()
                })
            });
            class eI extends r.default.Store {
                initialize() {
                    !(!U.OVERLAY_SUPPORTED || __OVERLAY__) && (H.add(U.OverlayMethod.Hook), this.waitFor(v.default, D.default), this.syncWith([v.default], ed), S.setReceiveCommandHandler(eA, eT), D.default.addChangeListener(er), eS.then(() => {
                        ei(f.OverlayStoredSettings.enabled), d.default.addInterceptor(es)
                    }))
                }
                isInputLocked(e) {
                    return !x.has(e)
                }
                isSupported() {
                    return U.OVERLAY_SUPPORTED
                }
                isMethodSupported(e) {
                    return U.OVERLAY_SUPPORTED && H.has(e)
                }
                get enabled() {
                    return V
                }
                get method() {
                    return w
                }
                getFocusedPID() {
                    return K
                }
                isReady(e) {
                    return m.get(e) === i.READY
                }
                isCrashed(e) {
                    return m.get(e) === i.CRASHED
                }
            }
            eI.displayName = "OverlayBridgeStore";
            let eN = new eI(d.default, __OVERLAY__ ? {} : {
                CONNECTION_OPEN: function() {
                    W = !0, el()
                },
                CONNECTION_CLOSED: function() {
                    W = !1, K = null, el()
                },
                OVERLAY_SET_ENABLED: function(e) {
                    let {
                        enabled: t
                    } = e;
                    return ei(t), !1
                },
                OVERLAY_SET_METHOD: function(e) {
                    if (e.method !== w) return b(async () => {
                        await et([]), w = e.method, f.OverlayStoredSettings.update({
                            method: w
                        }), await et(), eN.emitChange()
                    }), !1
                },
                OVERLAY_FOCUSED: function(e) {
                    let {
                        pid: t
                    } = e;
                    K = t
                },
                OVERLAY_GAMES_CHANGE: ed,
                OVERLAY_SET_INPUT_LOCKED: function(e) {
                    let {
                        locked: t,
                        pid: l
                    } = e, n = m.get(l);
                    if (t || n === i.READY || n === i.CRASHED) {
                        if (t ? x.delete(l) : x.add(l), z.clear(), null != ec && (clearTimeout(ec), ec = null, t)) return;
                        t ? eu(t) : ec = setTimeout(() => {
                            eu(t), ec = null
                        }, 100)
                    }
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    let {
                        region: t
                    } = e;
                    z.add(t), eu(!1)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: function() {
                    z.clear(), eu(!0)
                },
                RPC_SERVER_READY: function(e) {
                    let {
                        port: t
                    } = e, l = crypto.getRandomValues(new Uint8Array(8));
                    k = btoa(String.fromCharCode(...l));
                    let a = new URLSearchParams;
                    a.append("build_id", "dfe8e8f334ee383f82b4fe058e8abbf49af53567"), a.append("rpc", String(t)), a.append("rpc_auth_token", k), n = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(a.toString())
                },
                OVERLAY_CALL_PRIVATE_CHANNEL: function(e) {
                    let {
                        channelId: t,
                        ring: l
                    } = e;
                    setImmediate(() => {
                        O.default.selectPrivateChannel(t), _.default.call(t, !1, !!l)
                    })
                },
                OVERLAY_JOIN_GAME: function(e) {
                    let {
                        userId: t,
                        sessionId: l,
                        applicationId: n,
                        channelId: a,
                        messageId: i
                    } = e;
                    setImmediate(() => {
                        u.default.join({
                            userId: t,
                            sessionId: l,
                            applicationId: n,
                            channelId: a,
                            messageId: i
                        }), null != K && s.default.setLocked(!0, K)
                    })
                },
                OVERLAY_CRASHED: function(e) {
                    let {
                        pid: t
                    } = e;
                    q(t, i.CRASHED)
                }
            });
            var ef = eN
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

            function n() {
                let e = Promise.resolve(null);
                return t => new Promise((l, n) => {
                    e = e.then(t).then(l, n)
                })
            }
            l.r(t), l.d(t, {
                createLock: function() {
                    return n
                }
            })
        }
    }
]);
//# sourceMappingURL=a810e6ed501e14ab56ec.js.map