(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77015"], {
        640583: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createLayout: function() {
                    return i
                },
                setWidgetLayout: function() {
                    return o
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
                    return s
                }
            });
            var a = n("913144"),
                l = n("819068");

            function i(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.OVERLAY_DEFAULT_RESOLUTION;
                a.default.dispatch({
                    type: "LAYOUT_CREATE",
                    layoutId: e,
                    widgets: t,
                    defaultResolution: n
                })
            }

            function o(e, t, n) {
                a.default.dispatch({
                    type: "LAYOUT_UPDATE_WIDGET",
                    widgetId: e,
                    anchor: t,
                    size: n
                })
            }

            function r(e) {
                a.default.dispatch({
                    type: "LAYOUT_SET_TOP_WIDGET",
                    widgetId: e
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "LAYOUT_SET_PINNED",
                    widgetId: e
                })
            }

            function E(e) {
                a.default.dispatch({
                    type: "LAYOUT_DELETE_WIDGET",
                    widgetId: e
                })
            }

            function u(e) {
                a.default.dispatch({
                    type: "LAYOUT_DELETE_ALL_WIDGETS",
                    layoutId: e
                })
            }

            function _(e) {
                s([e])
            }

            function s(e) {
                a.default.dispatch({
                    type: "LAYOUT_CREATE_WIDGETS",
                    widgetConfigs: e
                })
            }
        },
        539405: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("70102"), n("222007");
            var a = n("748820"),
                l = n("913144"),
                i = n("939398"),
                o = n("505507"),
                r = n("703370"),
                d = n("471671"),
                E = n("80687"),
                u = n("819068"),
                _ = n("640583"),
                s = n("49111");
            let c = {
                track(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!__OVERLAY__) throw Error("OverlayActionCreators.track: Must be called within Overlay context");
                    (0, i.trackWithOverlayMetadata)(e, t, n)
                },
                overlayReady(e) {
                    l.default.dispatch({
                        type: "OVERLAY_READY",
                        pid: e
                    })
                },
                overlayMounted(e) {
                    l.default.dispatch({
                        type: "OVERLAY_MOUNTED",
                        nudge: e
                    })
                },
                setFocusedPID(e) {
                    l.default.dispatch({
                        type: "OVERLAY_FOCUSED",
                        pid: e
                    })
                },
                setInputLocked(e, t) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_INPUT_LOCKED",
                        locked: e,
                        pid: t
                    })
                },
                setUILocked(e, t) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_UI_LOCKED",
                        locked: e,
                        pid: t
                    })
                },
                setLocked(e, t) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_INPUT_LOCKED",
                        locked: e,
                        pid: t
                    }), l.default.dispatch({
                        type: "OVERLAY_SET_UI_LOCKED",
                        locked: e,
                        pid: t
                    })
                },
                setInstanceLocked(e) {
                    if (!__OVERLAY__) throw Error("OverlayActionCreators.setInstanceLocked: Must be called within Overlay context");
                    c.setLocked(e, (0, u.getPID)())
                },
                setEnabled(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_ENABLED",
                        enabled: e
                    })
                },
                selectCall(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SELECT_CALL",
                        callId: e
                    })
                },
                setDisplayNameMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_DISPLAY_NAME_MODE",
                        mode: e
                    })
                },
                setDisplayUserMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_DISPLAY_USER_MODE",
                        mode: e
                    })
                },
                setAvatarSizeMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_AVATAR_SIZE_MODE",
                        mode: e
                    })
                },
                setNotificationPositionMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
                        mode: e
                    })
                },
                setTextChatNotificationMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE",
                        mode: e
                    })
                },
                setShowMuteDeafenKeybinds(e) {
                    l.default.dispatch({
                        type: "OVERLAY_TOGGLE_SHOW_KEYBINDS",
                        shouldShow: e
                    })
                },
                callPrivateChannel(e, t) {
                    l.default.dispatch({
                        type: "OVERLAY_CALL_PRIVATE_CHANNEL",
                        channelId: e,
                        ring: t
                    })
                },
                setTextWidgetOpacity(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_TEXT_WIDGET_OPACITY",
                        opacity: e
                    })
                },
                disableExternalLinkAlert() {
                    l.default.dispatch({
                        type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT"
                    })
                },
                startSession() {
                    if (!__OVERLAY__) throw Error("Attempting to start an overlay session outside of the overlay context");
                    l.default.dispatch({
                        type: "OVERLAY_START_SESSION"
                    })
                },
                activateRegion(e) {
                    l.default.dispatch({
                        type: "OVERLAY_ACTIVATE_REGION",
                        region: e
                    })
                },
                deactivateAllRegions() {
                    l.default.dispatch({
                        type: "OVERLAY_DEACTIVATE_ALL_REGIONS"
                    })
                },
                setPreviewInGameMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE",
                        isPreviewingInGame: e
                    })
                },
                updateNotificationStatus(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.OverlayNotificationStatus.DISMISSED;
                    l.default.dispatch({
                        type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
                        notificationId: e,
                        status: t
                    })
                },
                notificationEvent(e, t) {
                    var n, a;
                    let i = r.default.getGame();
                    l.default.dispatch({
                        type: "OVERLAY_NOTIFICATION_EVENT",
                        notificationType: e,
                        action: t,
                        gameName: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : null,
                        gameId: null !== (a = null == i ? void 0 : i.id) && void 0 !== a ? a : null
                    })
                },
                setPinChat(e) {
                    let t = u.OVERLAY_LAYOUT_ID,
                        n = o.default.getWidgetsForLayout(t),
                        l = o.default.getWidgetConfig(s.OverlayWidgets.GUILDS),
                        i = o.default.getWidgetConfig(s.OverlayWidgets.TEXT),
                        r = o.default.getWidgetConfig(s.OverlayWidgets.GUILDS_TEXT);
                    if (0 === n.length || null == l || null == i || null == r) return;
                    let c = d.default.windowSize(),
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
                    if (n.forEach(e => {
                            let {
                                type: t,
                                id: n,
                                anchor: a,
                                size: l
                            } = e;
                            switch (t) {
                                case s.OverlayWidgets.TEXT:
                                    O = (0, E.getSizeFromLayoutSize)(l, c), (0, _.deleteWidget)(n);
                                    break;
                                case s.OverlayWidgets.GUILDS:
                                    T = (0, E.getFullCoordsFromLayoutSize)(a, l, c), A = (0, E.getSizeFromLayoutSize)(l, c), (0, _.deleteWidget)(n);
                                    break;
                                case s.OverlayWidgets.GUILDS_TEXT:
                                    I = (0, E.getFullCoordsFromLayoutSize)(a, l, c), S = (0, E.getSizeFromLayoutSize)(l, c), (0, _.deleteWidget)(n)
                            }
                        }), e) {
                        let e = "auto" === S.width ? r.minSize.width : S.width;
                        e -= l.minSize.width;
                        let [n, i] = (0, E.getLeftWidgetSpecs)(I, {
                            ...S,
                            width: l.minSize.width
                        }, c), [d, u] = (0, E.getRightWidgetSpecs)(I, {
                            ...S,
                            width: e
                        }, c, {
                            x: 10,
                            y: 10
                        }), O = o.default.getWidgetDefaultSettings(s.OverlayWidgets.TEXT);
                        if (null == O) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                        (0, _.createWidget)({
                            ...O,
                            type: s.OverlayWidgets.TEXT,
                            id: (0, a.v4)(),
                            size: u,
                            anchor: d,
                            layoutId: t
                        });
                        let T = o.default.getWidgetDefaultSettings(s.OverlayWidgets.GUILDS);
                        if (null == T) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                        (0, _.createWidget)({
                            ...T,
                            type: s.OverlayWidgets.GUILDS,
                            id: (0, a.v4)(),
                            size: i,
                            anchor: n,
                            layoutId: t
                        })
                    } else {
                        let e = "auto" === O.width ? i.minSize.width : O.width;
                        e += l.minSize.width;
                        let [n, r] = (0, E.getLeftWidgetSpecs)(T, {
                            height: A.height,
                            width: e
                        }, c), d = o.default.getWidgetDefaultSettings(s.OverlayWidgets.GUILDS_TEXT);
                        if (null == d) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                        (0, _.createWidget)({
                            ...d,
                            type: s.OverlayWidgets.GUILDS_TEXT,
                            id: (0, a.v4)(),
                            layoutId: t,
                            anchor: n,
                            size: r
                        })
                    }
                },
                resetDefaultLayout(e) {
                    let t = o.default.getLayout(e);
                    null != t && ((0, _.deleteAllWidgets)(e), (0, _.createWidgets)(o.default.getDefaultLayout(e)))
                },
                setClickZones(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_CLICK_ZONES",
                        zones: e
                    })
                },
                relayClickZoneClicked(e, t, n) {
                    l.default.dispatch({
                        type: "OVERLAY_RELAY_CLICK_ZONE_CLICKED",
                        zoneName: e,
                        normalizedMouseX: t,
                        normalizedMouseY: n
                    })
                }
            };
            var O = c
        },
        127080: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("981980");

            function l(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new a.default;
                return n.el("869305").then(n.bind(n, "869305")).then(n => {
                    let {
                        default: a
                    } = n;
                    return a(e, t, l)
                })
            }
        },
        227602: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("808653"), n("424973"), n("222007"), n("781738");
            var a = n("800648"),
                l = n.n(a),
                i = n("969230"),
                o = n.n(i),
                r = n("714617"),
                d = n.n(r),
                E = n("917351"),
                u = n.n(E),
                _ = n("446674"),
                s = n("913144"),
                c = n("485328"),
                O = n("605250"),
                T = n("42887"),
                A = n("599110"),
                I = n("773336"),
                S = n("50885"),
                f = n("13798"),
                N = n("860957"),
                L = n("49111"),
                C = n("80028"),
                D = n("846325"),
                y = n("390493");
            let p = new O.default("KeybindsStore"),
                R = {},
                v = {},
                h = 0,
                g = !0,
                P = {},
                G = [L.GlobalKeybindActions.PUSH_TO_TALK, L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

            function m(e) {
                if (I.isPlatformEmbedded) S.default.inputEventUnregister(parseInt(e, 10));
                else {
                    let t = R[e];
                    if (t) {
                        let t = v[e],
                            n = P[t.action];
                        (null == n ? void 0 : n.isPressed) === !0 && y.nextTick(() => n.onTrigger(!1, t)), R[e].reset(), R[e] = null
                    }
                }
            }

            function U(e) {
                if (!g || __OVERLAY__) return;
                let {
                    shortcut: t,
                    action: n,
                    enabled: a
                } = e;
                if ("" === t || null == t || n === L.GlobalKeybindActions.UNASSIGNED || !a) return;
                if (null == P[n]) {
                    p.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
                    return
                }
                let i = e.id,
                    r = P[n].keyEvents;
                ! function(e, t, n, a) {
                    if (I.isPlatformEmbedded) S.default.inputEventRegister(parseInt(e), t, n, a);
                    else {
                        m(e);
                        let i = o(new l(document));
                        a.keyup && i.bindGlobal((0, f.toString)(t), () => n(!1), "keyup"), a.keydown && i.bindGlobal((0, f.toString)(t), () => n(!0), "keydown"), R[e] = i
                    }
                }(i, t, e => (function(e, t) {
                    let n = v[e];
                    null != n && P[n.action].onTrigger(t, n)
                })(i, e), {
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1,
                    ...r
                }), c.default.validateKeybind((0, f.toString)(e.shortcut))
            }

            function b(e) {
                let t = {
                    id: h.toString(),
                    enabled: !0,
                    action: L.GlobalKeybindActions.UNASSIGNED,
                    shortcut: [],
                    managed: !1,
                    params: {},
                    ...e
                };
                return v = {
                    ...v,
                    [t.id]: t
                }, h += 1, t
            }

            function M(e) {
                m(e.id), v = {
                    ...v
                }, delete v[e.id]
            }

            function Y(e) {
                let {
                    keybind: t
                } = e;
                v = {
                    ...v,
                    [t.id]: t
                }, !__OVERLAY__ && (A.default.track(L.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
                    keybind_action: t.action,
                    keybind_is_bound: !0,
                    keybind_has_shortcut: t.shortcut.length > 0
                }), t.action === L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? A.default.track(L.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                    hotkey: t.action === L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? (0, f.toString)(t.shortcut) : null
                }) : t.action === L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && A.default.track(L.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                    text_activation_hotkey: t.action === L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, f.toString)(t.shortcut) : null
                })), U(t)
            }

            function w(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = u.find(v, t => t.action === e && (!n || t.managed === n));
                return null == a && (U(b({
                    action: e,
                    enabled: !0,
                    shortcut: (0, f.toCombo)(t),
                    managed: !0,
                    params: {}
                })), !0)
            }
            let H = [function() {
                let e = T.default.getShortcuts();
                return u.each(v, t => {
                    t.action === L.GlobalKeybindActions.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && M(t)
                }), u.reduce(T.default.getShortcuts(), (e, t, n) => {
                    let a = u.find(v, e => e.action === L.GlobalKeybindActions.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == a) U(b({
                        action: L.GlobalKeybindActions.PUSH_TO_TALK,
                        enabled: !0,
                        shortcut: t,
                        managed: !0,
                        params: {},
                        context: n
                    }));
                    else {
                        if (null == t) return e || !1;
                        Y({
                            keybind: {
                                ...a,
                                shortcut: "string" == typeof t ? (0, f.toCombo)(t) : t,
                                context: n
                            }
                        })
                    }
                    return !0
                }, !1)
            }, function() {
                return !!N.default.enabled && w(L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, "shift+`")
            }, function() {
                return !!N.default.enabled && w(L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
            }, function() {
                return w(L.GlobalKeybindActions.SOUNDBOARD_HOLD, D.DEFAULT_KEYBIND, !1)
            }, function() {
                return w(L.GlobalKeybindActions.SAVE_CLIP, C.DEFAULT_KEYBIND)
            }];

            function V() {
                return H.reduce((e, t) => t() || e, !1)
            }
            c.default.setGetKeybindList(() => {
                let e = [];
                for (let t in v) v.hasOwnProperty(t) && e.push((0, f.toString)(v[t].shortcut));
                return e
            });
            class W extends _.default.DeviceSettingsStore {
                initialize(e) {
                    !__OVERLAY__ && this.waitFor(T.default, N.default), v = null != e ? e : {}
                }
                getUserAgnosticState() {
                    return v
                }
                hasKeybind(e, t, n) {
                    for (let a in v)
                        for (let l of v[a].shortcut)
                            if (l[0] === e && l[1] === t && (void 0 === n || n === l[2])) return !0;
                    return !1
                }
                hasExactKeybind(e) {
                    for (let t in v) {
                        let n = v[t];
                        if (u.isEqual(n.shortcut, e)) return !0
                    }
                    return !1
                }
                getKeybindForAction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return u.find(v, n => n.action === e && (!t || t && !0 === n.managed))
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
                        keybinds: n = e
                    } = e;
                return u.reduce(n, (e, n, a) => {
                    let l = parseInt(n.id, 10);
                    return isNaN(l) || n.id !== a ? e : ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, f.toCombo)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [...e, (0, f.getEnv)()] : e)), e[a] = n, e)
                }, {})
            }, e => e, e => {
                let {
                    keybinds: t = e
                } = e;
                return u.reduce(t, (e, t, n) => {
                    if ((0, I.isLinux)() && t.action === L.GlobalKeybindActions.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map(e => e[1]),
                            a = (0, f.toCombo)("`").map(e => e[1]);
                        if (d(n, a)) return e
                    }
                    return {
                        ...e,
                        [n]: t
                    }
                }, {})
            }, e => {
                let t = {};
                for (let a in e) {
                    let l = e[a];
                    if (null != l) {
                        if (null == l.params || null == l.enabled) {
                            var n;
                            l = {
                                ...l,
                                enabled: !1 !== l.enabled,
                                params: null !== (n = l.params) && void 0 !== n ? n : {}
                            }
                        }
                        t[a] = l
                    }
                }
                return t
            }];
            var k = new W(s.default, {
                CONNECTION_OPEN: V,
                AUDIO_SET_MODE: V,
                OVERLAY_SET_ENABLED: V,
                RPC_APP_CONNECTED: V,
                RPC_APP_DISCONNECTED: V,
                KEYBINDS_ADD_KEYBIND: function(e) {
                    let {
                        keybind: t
                    } = e, n = b(t);
                    U(n)
                },
                KEYBINDS_DELETE_KEYBIND: function(e) {
                    let {
                        id: t
                    } = e, n = v[t];
                    !__OVERLAY__ && A.default.track(L.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
                        keybind_action: n.action,
                        keybind_is_bound: !1,
                        keybind_has_shortcut: !1
                    }), null != n && M(n)
                },
                KEYBINDS_SET_KEYBIND: Y,
                KEYBINDS_ENABLE_ALL_KEYBINDS: function(e) {
                    let {
                        enable: t
                    } = e;
                    g = t, t ? (c.default.enable(), u.forEach(v, U)) : (c.default.disable(), u.forEach(v, e => m(e.id)))
                },
                KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function(e) {
                    let {
                        keybinds: t
                    } = e;
                    P = t, R = {}, h = 0;
                    let n = Object.values(v).filter(e => G.includes(e.action) && e.managed);
                    n.length !== G.length && V(), u.forEach(v, e => {
                        h = Math.max(parseInt(e.id, 10), h) + 1;
                        try {
                            U(e)
                        } catch (t) {
                            p.error("Failed to register keybind", e, t)
                        }
                    }), g = !0
                }
            })
        },
        860957: function(e, t, n) {
            "use strict";
            let a, l;
            n.r(t), n.d(t, {
                getOverlayURL: function() {
                    return et
                },
                default: function() {
                    return eD
                }
            }), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("313619"), n("654714"), n("287168"), n("956660"), n("860677");
            var i, o, r = n("992830"),
                d = n("446674"),
                E = n("913144"),
                u = n("561288"),
                _ = n("823411"),
                s = n("640583"),
                c = n("539405"),
                O = n("987317"),
                T = n("49671"),
                A = n("6193"),
                I = n("121338"),
                S = n("605250"),
                f = n("32128"),
                N = n("127080"),
                L = n("116949"),
                C = n("271938"),
                D = n("546463"),
                y = n("505507"),
                p = n("568307"),
                R = n("599110"),
                v = n("27571"),
                h = n("658530"),
                g = n("50885"),
                P = n("819068"),
                G = n("49111"),
                m = n("6791");
            (o = i || (i = {})).ATTACHING = "ATTACHING", o.CONNECTING = "CONNECTING", o.CONNECTED = "CONNECTED", o.READY = "READY", o.CRASHED = "CRASHED", o.CONNECT_FAILED = "CONNECT_FAILED", o.HOOK_FAILED = "HOOK_FAILED";
            let U = {},
                b = new Map,
                M = !1,
                Y = new Set,
                w = new Set,
                H = !1,
                V = !1,
                W = null,
                k = "",
                K = new Set,
                F = !1,
                x = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_MFA_FAILURE", "LOGIN_MFA_SMS", "LOGIN_MFA_SMS_REQUEST_SUCCESS", "LOGIN_MFA_SMS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "REGISTER_FAILURE", "VERIFY_FAILURE", "VERIFY_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "CHANNEL_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "MENTION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "SEARCH_MODAL_OPEN", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "MENTION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "SEARCH_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_OPEN", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_START", "SEARCH_FINISH", "SEARCH_INDEXING", "SEARCH_CLEAR", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_CLEAR_HISTORY", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "EXPERIMENT_REGISTER_LEGACY", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "GUILD_FEED_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_SEARCH_STORE_QUERY", "APPLICATION_COMMAND_SEARCH_STORE_UPDATE", "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED"]),
                B = new Set,
                X = new S.default("OverlayBridgeStore"),
                z = (0, r.createObservableLock)({
                    onContention: (e, t) => X.verbose("overlayLock: ".concat(e, " is waiting for ").concat(t.join(", "))),
                    onTimeout: (e, t) => {
                        let n = "overlayLock: ".concat(e, " timedout waiting for ").concat(t.join(", "));
                        X.error(n), R.default.track(G.AnalyticEvents.OVERLAY_HOOK_RESULT, {
                            success: !1,
                            error_description: n
                        })
                    },
                    timeoutMs: 18e4
                });

            function Q(e, t) {
                return function() {
                    for (var n = arguments.length, a = Array(n), l = 0; l < n; l++) a[l] = arguments[l];
                    z(() => t(...a), e)
                }
            }

            function Z(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    a = b.get(e);
                if ((null === n || a === n) && a !== t) {
                    if (null == t ? b.delete(e) : b.set(e, t), null == t || "CRASHED" === t) {
                        var l;
                        W = null;
                        let e = null === T.default || void 0 === T.default ? void 0 : null === (l = T.default.fileManager) || void 0 === l ? void 0 : l.uploadDiscordHookCrashes;
                        null != e && e().then(e => {
                            if (Array.isArray(e) && 0 !== e.length)
                                for (let d of (X.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                                    var t, n, a, l, i, o, r;
                                    if (null == d) continue;
                                    let e = null != d.processName ? D.default.getGameByExecutable(d.processName) : null;
                                    R.default.track(G.AnalyticEvents.OVERLAY_HOOK_CRASHED, {
                                        process_name: null == d ? void 0 : d.processName,
                                        game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                                        game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
                                        minidump_exception_type: null !== (a = d.exceptionString) && void 0 !== a ? a : null,
                                        minidump_exception_module_name: null !== (l = d.exceptionModuleName) && void 0 !== l ? l : null,
                                        minidump_relative_crash_address: null !== (i = d.relativeCrashAddress) && void 0 !== i ? i : null,
                                        minidump_exception_module_version: null !== (o = d.exceptionModuleVersion) && void 0 !== o ? o : null,
                                        minidump_exception_module_code_id: null !== (r = d.exceptionModuleCodeId) && void 0 !== r ? r : null
                                    })
                                }
                        })
                    }
                    K.delete(e), X.info("pid=".concat(e, " status transition ").concat(null != a ? a : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), b), M = Array.from(b.values()).some(e => "READY" === e)
                }
            }
            async function j(e) {
                if (g.default.supportsFeature(G.NativeFeatures.CREATE_HOST_ON_ATTACH)) {
                    if (b.size > 0) {
                        let t = await et();
                        e.createHostProcess(t, eu, eE)
                    } else e.destroyHostProcess()
                } else if (H) {
                    let t = await et();
                    e.createHostProcess(t, eu, eE)
                } else e.destroyHostProcess()
            }
            async function q(e) {
                !z.isMutexHeld() && X.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
                let t = b.get(e);
                if (null != t) {
                    X.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(t));
                    return
                }
                let n = await en();
                Z(e, "ATTACHING");
                let a = await A.attachToProcess(e);
                null == a ? (Z(e, "CONNECTING", "ATTACHING"), await j(n), n.connectProcess(e)) : (Z(e, "HOOK_FAILED", "ATTACHING"), X.warn("Could not hook to pid=".concat(e, ", error=").concat(a)))
            }
            async function J(e) {
                if (!z.isMutexHeld() && X.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !b.has(e)) {
                    X.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
                    return
                }
                let t = await en();
                Z(e, null), e !== P.DEV_PID && (A.cancelAttachToProcess(e), t.disconnectProcess(e)), await j(t)
            }
            async function $(e) {
                var t, n;
                if (X.verbose("updateIntendedOverlayPIDs", {
                        isConnectionOpened: V,
                        action: e
                    }), !z.isMutexHeld() && X.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !V && null != e) {
                    X.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
                    return
                }
                async function a(t) {
                    if (!(t in U)) {
                        X.error("Unexpected. ".concat(t, " is not a tracked game?"), U, e);
                        return
                    }
                    let n = U[t];
                    delete U[t];
                    try {
                        await n.deconstructor()
                    } catch (e) {
                        X.error("Failed to deconstruct tracked game ".concat(t), e)
                    }
                }
                if (null == e || !H) {
                    X.verbose("updateIntendedOverlayPIDs: Removing all.", U, e);
                    let t = Object.keys(U);
                    for (let e of t) await a(Number(e));
                    return
                }
                for (let n of null !== (t = e.added) && void 0 !== t ? t : []) {
                    let t = p.default.getGameOverlayStatus(n);
                    if (X.verbose("updateIntendedOverlayPIDs: newGame", n, t), null != t && t.enabled) switch (n.pid in U && X.error("Unexpected. ".concat(n.pid, " is being added twice?"), U, e), t.overlayMethod) {
                        case m.OverlayMethod.OutOfProcess:
                            let a = await eo();
                            a.trackGame(n.pid), U[n.pid] = {
                                method: t.overlayMethod,
                                deconstructor: async () => {
                                    let e = await eo();
                                    await e.untrackGame(n.pid)
                                }
                            };
                            break;
                        case m.OverlayMethod.Hook:
                            !b.has(n.pid) && await q(n.pid), U[n.pid] = {
                                method: t.overlayMethod,
                                deconstructor: async () => {
                                    await J(n.pid)
                                }
                            };
                            break;
                        case m.OverlayMethod.Disabled:
                            X.verbose("updateIntendedOverlayPIDs: disabled", n);
                            break;
                        default:
                            X.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(t.overlayMethod))
                    }
                }
                for (let t of e.removed) X.verbose("updateIntendedOverlayPIDs: removedGame", t), await a(t.pid);
                let l = p.default.getVisibleGame();
                if (null != l) {
                    let e = p.default.getGameOverlayStatus(l);
                    if ((null == e ? void 0 : e.enabled) && (null == e ? void 0 : e.overlayMethod) === m.OverlayMethod.OutOfProcess) {
                        let e = await eo();
                        e.setVisibleGame(l.pid, null !== (n = l.windowHandle) && void 0 !== n ? n : ""), X.verbose("updateIntendedOverlayPIDs: ".concat(l.pid, " is now the visible game"), l)
                    }
                }
            }
            let ee = Q("updateIntendedOverlayPIDs", e => $(e));

            function et() {
                return new Promise(e => {
                    eC.addConditionalChangeListener(() => {
                        if (null != a) return e(a), !1
                    })
                })
            }
            let en = (() => {
                let e = null;
                async function t() {
                    if (!m.OVERLAY_SUPPORTED) throw X.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
                    try {
                        return await g.default.ensureModule("discord_overlay2"),
                            function(e) {
                                for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (X.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => void 0);
                                return e
                            }(g.default.requireModule("discord_overlay2"))
                    } catch (e) {
                        throw X.error("failed ensuring discord_overlay2", e), e
                    }
                }
                return () => (null == e && (e = t()), e)
            })();
            async function ea(e) {
                var t, n, a, l, i, o, r;
                try {
                    let t = await et() + "&pid=".concat(e);
                    await (null === T.default || void 0 === T.default ? void 0 : null === (l = T.default.globalOverlay) || void 0 === l ? void 0 : null === (a = l.openWindow) || void 0 === a ? void 0 : a.call(l, t))
                } catch (e) {
                    X.log("globalOverlay: Failed to open overlay: ".concat(e), e), null === T.default || void 0 === T.default || null === (o = T.default.window) || void 0 === o || o.close(null === T.default || void 0 === T.default ? void 0 : null === (i = T.default.globalOverlay) || void 0 === i ? void 0 : i.WINDOW_KEY)
                }
                return null !== (r = await (null === T.default || void 0 === T.default ? void 0 : null === (n = T.default.window) || void 0 === n ? void 0 : n.getNativeHandle(null === T.default || void 0 === T.default ? void 0 : null === (t = T.default.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY))) && void 0 !== r ? r : ""
            }

            function el() {
                var e, t;
                null === T.default || void 0 === T.default || null === (t = T.default.window) || void 0 === t || t.close(null === T.default || void 0 === T.default ? void 0 : null === (e = T.default.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY)
            }
            async function ei(e) {
                await ea(e)
            }
            let eo = (() => {
                let e = null;
                async function t() {
                    if (!m.OVERLAY_SUPPORTED || !(0, P.isOutOfProcessOverlaySupported)()) throw X.error("Attempted to load out of process overlay on an unsupported platform."), Error("Out of Process Overlay is not supported on this platform.");
                    try {
                        let {
                            OutOfProcess: e
                        } = await en();
                        return e.setClickZoneCallback(eT), e.setHostWindowCallbacks(ea, el, ei), e.setFocusCallback(eE), e
                    } catch (e) {
                        throw X.error("failed loading out of process overlay", e), e
                    }
                }
                return () => (null == e && (e = t()), e)
            })();

            function er() {
                return ee({
                    added: p.default.getRunningGames(),
                    removed: []
                })
            }
            let ed = Q("setOverlayEnabled", async e => {
                if (!m.OVERLAY_SUPPORTED || H === e) return;
                H = e, f.OverlayStoredSettings.update({
                    enabled: e
                }), eC.emitChange();
                let t = await en();
                H ? (await j(t), er()) : (await $(void 0), await j(t))
            });

            function eE(e) {
                if (0 === e) {
                    var t, n;
                    let e = null !== (n = null === (t = U[null != W ? W : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : m.OverlayMethod.Disabled;
                    if (e === m.OverlayMethod.OutOfProcess) return
                }
                c.default.setFocusedPID(0 === e ? null : e)
            }

            function eu(e, t, n) {
                var a;
                let l = null === (a = p.default.getGameForPID(e)) || void 0 === a ? void 0 : a.name,
                    i = D.default.getGameByName(l),
                    o = {
                        game_name: l,
                        game_id: null == i ? null : i.id,
                        success: t,
                        ...n
                    };
                (0, s.createLayout)(P.OVERLAY_LAYOUT_ID, y.default.getDefaultLayout(P.OVERLAY_LAYOUT_ID), {
                    width: n.graphics_width,
                    height: n.graphics_height
                }), R.default.track(G.AnalyticEvents.OVERLAY_HOOK_RESULT, o), X.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), o), t ? Z(e, "CONNECTED", "CONNECTING") : Z(e, "CONNECT_FAILED", "CONNECTING")
            }

            function e_() {
                let e = C.default.getToken(),
                    t = C.default.getId();
                null != e && I.send({
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
            async function es(e) {
                let t = await en();
                if (null != W && W !== P.DEV_PID && t.sendCommand(W, {
                        message: "intercept_input",
                        intercept: !e
                    }), (0, P.isOutOfProcessOverlaySupported)()) {
                    let t = await eo();
                    t.setInteractionEnabled(!e)
                }
            }

            function ec(e) {
                if (e) {
                    let t = p.default.getVisibleGame(),
                        n = null == t ? null : p.default.getGameOverlayStatus(t);
                    (null == n ? void 0 : n.overlayMethod) === m.OverlayMethod.OutOfProcess ? es(e) : setTimeout(() => es(e), 200)
                } else es(e)
            }
            let eO = null;

            function eT(e, t, n) {
                c.default.relayClickZoneClicked(e, t, n)
            }
            async function eA(e) {
                if (!(0, P.isOutOfProcessOverlaySupported)()) return;
                let t = await eo();
                t.setClickZones(e.map(e => {
                    let t = {
                        name: e.name,
                        left: e.left,
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom
                    };
                    return t
                }))
            }

            function eI(e) {
                return !(F || !M || x.has(e.type)) && ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = {
                    ...e,
                    settings: {
                        type: e.settings.type,
                        proto: (0, L.protoToB64WithType)(e.settings.type, e.settings.proto)
                    }
                }), Y.add(e), null == l && (l = setTimeout(eS, 1)), !1)
            }

            function eS() {
                if (null != l && (clearTimeout(l), l = null), !M) {
                    Y.clear();
                    return
                }
                Y.size > 0 && (I.send({
                    type: G.OverlayEventTypes.DISPATCH,
                    pid: null,
                    token: null,
                    payloads: Array.from(Y)
                }), Y.clear())
            }

            function ef(e) {
                return null != e && (0, v.constantTimeCompare)(e, k)
            }

            function eN(e) {
                switch (0, e.type) {
                    case G.OverlayEventTypes.CONNECT:
                        let t = C.default.getToken();
                        if (null == t) break;
                        (0, s.createLayout)(P.OVERLAY_LAYOUT_ID, y.default.getDefaultLayout(P.OVERLAY_LAYOUT_ID)), Promise.all([(0, N.default)(t, e.pid), d.default.PersistedStore.getAllStates()]).then(t => {
                            let [n, a] = t, {
                                pid: l,
                                token: i
                            } = e;
                            I.send({
                                type: G.OverlayEventTypes.STORAGE_SYNC,
                                pid: l,
                                token: i,
                                states: a
                            }), I.send({
                                type: G.OverlayEventTypes.DISPATCH,
                                pid: l,
                                token: i,
                                payloads: [n]
                            }), Z(l, "READY"), c.default.overlayReady(l)
                        });
                        break;
                    case G.OverlayEventTypes.DISPATCH:
                        if (null != e.payloads) {
                            var n;
                            n = e.payloads, F = !0, n.forEach(e => E.default.dispatch(e)), F = !1
                        }
                        break;
                    case G.OverlayEventTypes.LOG_MESSAGES:
                        X.info("[overlay data received]", e.payload)
                }
            }
            class eL extends d.default.Store {
                initialize() {
                    !(!m.OVERLAY_SUPPORTED || __OVERLAY__) && (w.add(m.OverlayMethod.Hook), this.waitFor(p.default, C.default), I.setReceiveCommandHandler(eN, ef), C.default.addChangeListener(e_), ed(f.OverlayStoredSettings.enabled), E.default.addInterceptor(eI))
                }
                isInputLocked(e) {
                    return !K.has(e)
                }
                isSupported() {
                    return m.OVERLAY_SUPPORTED
                }
                isMethodSupported(e) {
                    return m.OVERLAY_SUPPORTED && w.has(e)
                }
                get enabled() {
                    return H
                }
                getFocusedPID() {
                    return W
                }
                isReady(e) {
                    return "READY" === b.get(e)
                }
                isCrashed(e) {
                    return "CRASHED" === b.get(e)
                }
            }
            eL.displayName = "OverlayBridgeStore";
            let eC = new eL(E.default, __OVERLAY__ ? {
                OVERLAY_RELAY_CLICK_ZONE_CLICKED: function(e) {
                    let {
                        normalizedMouseX: t,
                        normalizedMouseY: n
                    } = e;
                    setTimeout(() => {
                        let e = Math.ceil(t * window.innerWidth),
                            a = Math.ceil(n * window.innerHeight),
                            l = (0, h.createMouseEvent)("click", e, a);
                        (0, h.dispatchEventToPoint)(l, e, a)
                    }, 50)
                }
            } : {
                CONNECTION_OPEN: function() {
                    V = !0, er()
                },
                CONNECTION_CLOSED: function() {
                    V = !1, W = null, ee(void 0)
                },
                OVERLAY_SET_ENABLED: function(e) {
                    let {
                        enabled: t
                    } = e;
                    return ed(t), !1
                },
                OVERLAY_FOCUSED: function(e) {
                    let {
                        pid: t
                    } = e;
                    W = t
                },
                RUNNING_GAMES_CHANGE: function(e) {
                    ee(e)
                },
                OVERLAY_SET_INPUT_LOCKED: function(e) {
                    let {
                        locked: t,
                        pid: n
                    } = e, a = b.get(n);
                    if (t || "READY" === a || "CRASHED" === a) {
                        if (t ? K.delete(n) : K.add(n), B.clear(), null != eO && (clearTimeout(eO), eO = null, t)) return;
                        t ? ec(t) : eO = setTimeout(() => {
                            ec(t), eO = null
                        }, 100)
                    }
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    let {
                        region: t
                    } = e;
                    B.add(t), ec(!1)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: function() {
                    B.clear(), ec(!0)
                },
                RPC_SERVER_READY: function(e) {
                    let {
                        port: t
                    } = e, n = crypto.getRandomValues(new Uint8Array(8));
                    k = btoa(String.fromCharCode(...n));
                    let l = new URLSearchParams;
                    l.append("build_id", "5a9080ec51662d59b1a3645d6933f0f4f7358447"), l.append("rpc", String(t)), l.append("rpc_auth_token", k), a = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(l.toString())
                },
                OVERLAY_CALL_PRIVATE_CHANNEL: function(e) {
                    let {
                        channelId: t,
                        ring: n
                    } = e;
                    setImmediate(() => {
                        O.default.selectPrivateChannel(t), u.default.call(t, !1, !!n)
                    })
                },
                OVERLAY_JOIN_GAME: function(e) {
                    let {
                        userId: t,
                        sessionId: n,
                        applicationId: a,
                        channelId: l,
                        messageId: i
                    } = e;
                    setImmediate(() => {
                        _.default.join({
                            userId: t,
                            sessionId: n,
                            applicationId: a,
                            channelId: l,
                            messageId: i
                        }), null != W && c.default.setLocked(!0, W)
                    })
                },
                OVERLAY_CRASHED: function(e) {
                    let {
                        pid: t
                    } = e;
                    Z(t, "CRASHED")
                },
                RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
                    if (X.verbose("handleGameToggleOverlay", e), !("pid" in e.game)) {
                        X.verbose("handleGameToggleOverlay: Game was not a RunningGame.", e);
                        return
                    }
                    let t = [e.game];
                    ee({
                        added: e.newEnabledValue ? t : [],
                        removed: e.newEnabledValue ? [] : t
                    })
                },
                OVERLAY_SET_CLICK_ZONES: function(e) {
                    let {
                        zones: t
                    } = e;
                    eA(t)
                }
            });
            var eD = eC
        },
        27571: function(e, t, n) {
            "use strict";

            function a(e, t) {
                let n = 0,
                    a = Math.min(e.length, t.length);
                for (let l = 0; l < a; l++) n |= e.charCodeAt(l) ^ t.charCodeAt(l);
                return 0 === n && e.length === t.length
            }
            n.r(t), n.d(t, {
                constantTimeCompare: function() {
                    return a
                }
            })
        },
        658530: function(e, t, n) {
            "use strict";

            function a(e, t, n) {
                return new MouseEvent(e, {
                    screenX: t,
                    screenY: n,
                    clientX: t,
                    clientY: n,
                    bubbles: !0,
                    view: window
                })
            }

            function l(e, t, n) {
                let a = document.elementFromPoint(t, n);
                if (null == a) throw Error();
                a.dispatchEvent(e)
            }
            n.r(t), n.d(t, {
                createMouseEvent: function() {
                    return a
                },
                dispatchEventToPoint: function() {
                    return l
                }
            }), n("70102")
        },
        992830: function(e, t, n) {
            "use strict";

            function a(e) {
                let t = Promise.resolve(null),
                    n = [],
                    {
                        onContention: a,
                        onTimeout: l,
                        timeoutMs: i
                    } = e,
                    o = function(e, o) {
                        n.length > 0 && a(o, n), n.push(o);
                        let r = null == i || null == l ? null : setTimeout(() => l(o, n), i);
                        return new Promise((a, l) => {
                            t = t.then(e).then(a, l).then(() => n.splice(0, 1)), null != r && (t = t.then(() => clearTimeout(r)))
                        })
                    };
                return o.isMutexHeld = () => n.length > 0, o.getLockHolders = () => n, o
            }
            n.r(t), n.d(t, {
                createObservableLock: function() {
                    return a
                }
            }), n("424973")
        }
    }
]);
//# sourceMappingURL=77015.1ff554e9a249aeb64c45.js.map