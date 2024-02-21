(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77015"], {
        640583: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
                    return s
                },
                createWidgets: function() {
                    return _
                }
            });
            var a = n("913144"),
                l = n("819068");

            function o(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.OVERLAY_DEFAULT_RESOLUTION;
                a.default.dispatch({
                    type: "LAYOUT_CREATE",
                    layoutId: e,
                    widgets: t,
                    defaultResolution: n
                })
            }

            function i(e, t, n) {
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

            function s(e) {
                _([e])
            }

            function _(e) {
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
                o = n("939398"),
                i = n("505507"),
                r = n("703370"),
                d = n("471671"),
                E = n("80687"),
                u = n("819068"),
                s = n("640583"),
                _ = n("49111");
            let c = {
                track(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!__OVERLAY__) throw Error("OverlayActionCreators.track: Must be called within Overlay context");
                    (0, o.trackWithOverlayMetadata)(e, t, n)
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
                setShowKeybindIndicators(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_SHOW_KEYBIND_INDICATORS",
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
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.OverlayNotificationStatus.DISMISSED;
                    l.default.dispatch({
                        type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
                        notificationId: e,
                        status: t
                    })
                },
                notificationEvent(e, t) {
                    var n, a;
                    let o = r.default.getGame();
                    l.default.dispatch({
                        type: "OVERLAY_NOTIFICATION_EVENT",
                        notificationType: e,
                        action: t,
                        gameName: null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : null,
                        gameId: null !== (a = null == o ? void 0 : o.id) && void 0 !== a ? a : null
                    })
                },
                setPinChat(e) {
                    let t = u.OVERLAY_LAYOUT_ID,
                        n = i.default.getWidgetsForLayout(t),
                        l = i.default.getWidgetConfig(_.OverlayWidgets.GUILDS),
                        o = i.default.getWidgetConfig(_.OverlayWidgets.TEXT),
                        r = i.default.getWidgetConfig(_.OverlayWidgets.GUILDS_TEXT);
                    if (0 === n.length || null == l || null == o || null == r) return;
                    let c = d.default.windowSize(),
                        O = {
                            width: 0,
                            height: 0
                        },
                        A = {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        T = {
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
                                case _.OverlayWidgets.TEXT:
                                    O = (0, E.getSizeFromLayoutSize)(l, c), (0, s.deleteWidget)(n);
                                    break;
                                case _.OverlayWidgets.GUILDS:
                                    A = (0, E.getFullCoordsFromLayoutSize)(a, l, c), T = (0, E.getSizeFromLayoutSize)(l, c), (0, s.deleteWidget)(n);
                                    break;
                                case _.OverlayWidgets.GUILDS_TEXT:
                                    I = (0, E.getFullCoordsFromLayoutSize)(a, l, c), S = (0, E.getSizeFromLayoutSize)(l, c), (0, s.deleteWidget)(n)
                            }
                        }), e) {
                        let e = "auto" === S.width ? r.minSize.width : S.width;
                        e -= l.minSize.width;
                        let [n, o] = (0, E.getLeftWidgetSpecs)(I, {
                            ...S,
                            width: l.minSize.width
                        }, c), [d, u] = (0, E.getRightWidgetSpecs)(I, {
                            ...S,
                            width: e
                        }, c, {
                            x: 10,
                            y: 10
                        }), O = i.default.getWidgetDefaultSettings(_.OverlayWidgets.TEXT);
                        if (null == O) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                        (0, s.createWidget)({
                            ...O,
                            type: _.OverlayWidgets.TEXT,
                            id: (0, a.v4)(),
                            size: u,
                            anchor: d,
                            layoutId: t
                        });
                        let A = i.default.getWidgetDefaultSettings(_.OverlayWidgets.GUILDS);
                        if (null == A) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                        (0, s.createWidget)({
                            ...A,
                            type: _.OverlayWidgets.GUILDS,
                            id: (0, a.v4)(),
                            size: o,
                            anchor: n,
                            layoutId: t
                        })
                    } else {
                        let e = "auto" === O.width ? o.minSize.width : O.width;
                        e += l.minSize.width;
                        let [n, r] = (0, E.getLeftWidgetSpecs)(A, {
                            height: T.height,
                            width: e
                        }, c), d = i.default.getWidgetDefaultSettings(_.OverlayWidgets.GUILDS_TEXT);
                        if (null == d) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                        (0, s.createWidget)({
                            ...d,
                            type: _.OverlayWidgets.GUILDS_TEXT,
                            id: (0, a.v4)(),
                            layoutId: t,
                            anchor: n,
                            size: r
                        })
                    }
                },
                resetDefaultLayout(e) {
                    let t = i.default.getLayout(e);
                    null != t && ((0, s.deleteAllWidgets)(e), (0, s.createWidgets)(i.default.getDefaultLayout(e)))
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
                },
                setAssociatedGame(e, t, n) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_ASSOCIATED_GAME",
                        previousAssociatedGamePID: e,
                        associatedGamePID: t,
                        associatedGame: n
                    })
                },
                notifyReadyToShow(e) {
                    l.default.dispatch({
                        type: "OVERLAY_NOTIFY_READY_TO_SHOW",
                        pid: e
                    })
                }
            };
            var O = c
        },
        999819: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-11_keybind_indicators",
                label: "Overlay Keybind Indicators",
                defaultConfig: {
                    showKeybindIndicators: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show Keybind Indicators - Overlay",
                    config: {
                        showKeybindIndicators: !0
                    }
                }]
            });
            var o = l
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
            let a;
            n.r(t), n.d(t, {
                DEFAULT_MUTE_KEYBIND: function() {
                    return v
                },
                default: function() {
                    return Q
                }
            }), n("808653"), n("424973"), n("222007"), n("781738");
            var l = n("800648"),
                o = n.n(l),
                i = n("969230"),
                r = n.n(i),
                d = n("714617"),
                E = n.n(d),
                u = n("917351"),
                s = n.n(u),
                _ = n("446674"),
                c = n("913144"),
                O = n("485328"),
                A = n("605250"),
                T = n("999819"),
                I = n("42887"),
                S = n("599110"),
                f = n("773336"),
                N = n("50885"),
                L = n("13798"),
                C = n("860957"),
                D = n("49111"),
                y = n("80028"),
                p = n("846325"),
                h = n("390493");
            let R = new A.default("KeybindsStore"),
                v = {
                    id: "1000",
                    action: D.GlobalKeybindActions.TOGGLE_MUTE,
                    shortcut: (0, L.toCombo)("mod+shift+m"),
                    enabled: !0,
                    managed: !0,
                    params: {}
                },
                g = {},
                P = {},
                G = 0,
                m = !0,
                b = {},
                U = !1,
                M = [D.GlobalKeybindActions.PUSH_TO_TALK, D.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, D.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

            function Y() {
                let {
                    showKeybindIndicators: e
                } = T.default.getCurrentConfig({
                    location: "KeybindsStore"
                }), t = s.find(P, e => v.action === e.action && e.enabled && e.shortcut.length > 0);
                null == t && !__OVERLAY__ && !U && m && e && (K(v), U = !0)
            }

            function H() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                (U || e) && (V(v.id), U = !1)
            }

            function w(e) {
                let {
                    showKeybindIndicators: t
                } = e;
                t ? Y() : H(!0)
            }

            function V(e) {
                if (f.isPlatformEmbedded) N.default.inputEventUnregister(parseInt(e, 10));
                else {
                    let t = g[e];
                    if (t) {
                        let t = P[e],
                            n = b[t.action];
                        (null == n ? void 0 : n.isPressed) === !0 && h.nextTick(() => n.onTrigger(!1, t)), g[e].reset(), g[e] = null
                    }
                }
            }

            function K(e) {
                if (!m || __OVERLAY__) return;
                let {
                    shortcut: t,
                    action: n,
                    enabled: a
                } = e;
                if ("" === t || null == t || n === D.GlobalKeybindActions.UNASSIGNED || !a) return;
                if (null == b[n]) {
                    R.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
                    return
                }
                let l = e.id,
                    i = b[n].keyEvents;
                e.action === D.GlobalKeybindActions.TOGGLE_MUTE && H(), ! function(e, t, n, a) {
                    if (f.isPlatformEmbedded) N.default.inputEventRegister(parseInt(e), t, n, a);
                    else {
                        V(e);
                        let l = r(new o(document));
                        a.keyup && l.bindGlobal((0, L.toString)(t), () => n(!1), "keyup"), a.keydown && l.bindGlobal((0, L.toString)(t), () => n(!0), "keydown"), g[e] = l
                    }
                }(l, t, e => (function(e, t) {
                    let n = e === v.id ? v : P[e];
                    null != n && b[n.action].onTrigger(t, n)
                })(l, e), {
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1,
                    ...i
                }), O.default.validateKeybind((0, L.toString)(e.shortcut))
            }

            function W(e) {
                let t = {
                    id: G.toString(),
                    enabled: !0,
                    action: D.GlobalKeybindActions.UNASSIGNED,
                    shortcut: [],
                    managed: !1,
                    params: {},
                    ...e
                };
                return P = {
                    ...P,
                    [t.id]: t
                }, G += 1, t
            }

            function k(e) {
                V(e.id), P = {
                    ...P
                }, delete P[e.id], e.action === D.GlobalKeybindActions.TOGGLE_MUTE && Y()
            }

            function F(e) {
                let {
                    keybind: t
                } = e;
                P = {
                    ...P,
                    [t.id]: t
                }, !__OVERLAY__ && (S.default.track(D.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
                    keybind_action: t.action,
                    keybind_is_bound: !0,
                    keybind_has_shortcut: t.shortcut.length > 0
                }), t.action === D.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? S.default.track(D.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                    hotkey: t.action === D.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? (0, L.toString)(t.shortcut) : null
                }) : t.action === D.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && S.default.track(D.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                    text_activation_hotkey: t.action === D.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, L.toString)(t.shortcut) : null
                })), K(t)
            }

            function x(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = s.find(P, t => t.action === e && (!n || t.managed === n));
                return null == a && (K(W({
                    action: e,
                    enabled: !0,
                    shortcut: (0, L.toCombo)(t),
                    managed: !0,
                    params: {}
                })), !0)
            }
            let B = [function() {
                let e = I.default.getShortcuts();
                return s.each(P, t => {
                    t.action === D.GlobalKeybindActions.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && k(t)
                }), s.reduce(I.default.getShortcuts(), (e, t, n) => {
                    let a = s.find(P, e => e.action === D.GlobalKeybindActions.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == a) K(W({
                        action: D.GlobalKeybindActions.PUSH_TO_TALK,
                        enabled: !0,
                        shortcut: t,
                        managed: !0,
                        params: {},
                        context: n
                    }));
                    else {
                        if (null == t) return e || !1;
                        F({
                            keybind: {
                                ...a,
                                shortcut: "string" == typeof t ? (0, L.toCombo)(t) : t,
                                context: n
                            }
                        })
                    }
                    return !0
                }, !1)
            }, function() {
                return !!C.default.enabled && x(D.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, "shift+`")
            }, function() {
                return !!C.default.enabled && x(D.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
            }, function() {
                return x(D.GlobalKeybindActions.SOUNDBOARD_HOLD, p.DEFAULT_KEYBIND, !1)
            }, function() {
                return x(D.GlobalKeybindActions.SAVE_CLIP, y.DEFAULT_KEYBIND)
            }];

            function X() {
                return Y(), B.reduce((e, t) => t() || e, !1)
            }
            O.default.setGetKeybindList(() => {
                let e = [];
                for (let t in P) P.hasOwnProperty(t) && e.push((0, L.toString)(P[t].shortcut));
                let {
                    showKeybindIndicators: t
                } = T.default.getCurrentConfig({
                    location: "KeybindsStore"
                });
                return t && e.push((0, L.toString)(v.shortcut)), e
            });
            class z extends _.default.DeviceSettingsStore {
                initialize(e) {
                    !__OVERLAY__ && this.waitFor(I.default, C.default), P = null != e ? e : {}
                }
                getUserAgnosticState() {
                    return P
                }
                hasKeybind(e, t, n) {
                    for (let a in P)
                        for (let l of P[a].shortcut)
                            if (l[0] === e && l[1] === t && (void 0 === n || n === l[2])) return !0;
                    return !1
                }
                hasExactKeybind(e) {
                    for (let t in P) {
                        let n = P[t];
                        if (s.isEqual(n.shortcut, e)) return !0
                    }
                    return !1
                }
                getKeybindForAction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        {
                            showKeybindIndicators: a
                        } = T.default.getCurrentConfig({
                            location: "KeybindsStore"
                        }),
                        l = s.find(P, a => a.action === e && (!t || a.managed) && (!n || a.shortcut.length > 0 && a.enabled));
                    return null != l ? l : a && e === D.GlobalKeybindActions.TOGGLE_MUTE ? v : null
                }
                getOverlayKeybind() {
                    return this.getKeybindForAction(D.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, !0)
                }
                getOverlayChatKeybind() {
                    return this.getKeybindForAction(D.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0)
                }
            }
            z.displayName = "KeybindsStore", z.persistKey = "keybinds", z.migrations = [function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        v: t,
                        keybinds: n = e
                    } = e;
                return s.reduce(n, (e, n, a) => {
                    let l = parseInt(n.id, 10);
                    return isNaN(l) || n.id !== a ? e : ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, L.toCombo)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [...e, (0, L.getEnv)()] : e)), e[a] = n, e)
                }, {})
            }, e => e, e => {
                let {
                    keybinds: t = e
                } = e;
                return s.reduce(t, (e, t, n) => {
                    if ((0, f.isLinux)() && t.action === D.GlobalKeybindActions.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map(e => e[1]),
                            a = (0, L.toCombo)("`").map(e => e[1]);
                        if (E(n, a)) return e
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
            }, e => s.reduce(e, (e, t, n) => t.action === D.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : {
                ...e,
                [n]: t
            }, {})];
            var Q = new z(c.default, {
                CONNECTION_OPEN: X,
                AUDIO_SET_MODE: X,
                OVERLAY_SET_ENABLED: X,
                RPC_APP_CONNECTED: X,
                RPC_APP_DISCONNECTED: X,
                KEYBINDS_ADD_KEYBIND: function(e) {
                    let {
                        keybind: t
                    } = e, n = W(t);
                    K(n)
                },
                KEYBINDS_DELETE_KEYBIND: function(e) {
                    let {
                        id: t
                    } = e, n = P[t];
                    !__OVERLAY__ && S.default.track(D.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
                        keybind_action: n.action,
                        keybind_is_bound: !1,
                        keybind_has_shortcut: !1
                    }), null != n && k(n)
                },
                KEYBINDS_SET_KEYBIND: F,
                KEYBINDS_ENABLE_ALL_KEYBINDS: function(e) {
                    let {
                        enable: t
                    } = e;
                    m = t, t ? (O.default.enable(), s.forEach(P, K), Y()) : (O.default.disable(), s.forEach(P, e => V(e.id)), H())
                },
                KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function(e) {
                    let {
                        keybinds: t
                    } = e;
                    b = t, g = {}, G = 0;
                    let n = Object.values(P).filter(e => M.includes(e.action) && e.managed);
                    n.length !== M.length && X(), s.forEach(P, e => {
                        G = Math.max(parseInt(e.id, 10), G) + 1;
                        try {
                            K(e)
                        } catch (t) {
                            R.error("Failed to register keybind", e, t)
                        }
                    }), m = !0, null == a && (a = T.default.subscribe({
                        location: "KeybindsStore"
                    }, w))
                }
            })
        },
        860957: function(e, t, n) {
            "use strict";
            let a, l;
            n.r(t), n.d(t, {
                getOverlayURL: function() {
                    return el
                },
                default: function() {
                    return eh
                }
            }), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("313619"), n("654714"), n("287168"), n("956660"), n("860677");
            var o, i, r = n("992830"),
                d = n("446674"),
                E = n("913144"),
                u = n("561288"),
                s = n("823411"),
                _ = n("640583"),
                c = n("539405"),
                O = n("987317"),
                A = n("49671"),
                T = n("6193"),
                I = n("121338"),
                S = n("605250"),
                f = n("161454"),
                N = n("32128"),
                L = n("127080"),
                C = n("116949"),
                D = n("271938"),
                y = n("546463"),
                p = n("505507"),
                h = n("703370"),
                R = n("599110"),
                v = n("27571"),
                g = n("658530"),
                P = n("50885"),
                G = n("819068"),
                m = n("49111"),
                b = n("6791");
            (i = o || (o = {})).ATTACHING = "ATTACHING", i.CONNECTING = "CONNECTING", i.CONNECTED = "CONNECTED", i.READY = "READY", i.CRASHED = "CRASHED", i.CONNECT_FAILED = "CONNECT_FAILED", i.HOOK_FAILED = "HOOK_FAILED";
            let U = {},
                M = new Map,
                Y = !1,
                H = new Set,
                w = new Set,
                V = !1,
                K = !1,
                W = null,
                k = null,
                F = "",
                x = new Set,
                B = !1,
                X = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_MFA_FAILURE", "LOGIN_MFA_SMS", "LOGIN_MFA_SMS_REQUEST_SUCCESS", "LOGIN_MFA_SMS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "REGISTER_FAILURE", "VERIFY_FAILURE", "VERIFY_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "CHANNEL_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "MENTION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "SEARCH_MODAL_OPEN", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "MENTION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "SEARCH_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_OPEN", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_START", "SEARCH_FINISH", "MOD_VIEW_SEARCH_FINISH", "SEARCH_INDEXING", "SEARCH_CLEAR", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_CLEAR_HISTORY", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "EXPERIMENT_REGISTER_LEGACY", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "GUILD_FEED_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_SEARCH_STORE_QUERY", "APPLICATION_COMMAND_SEARCH_STORE_UPDATE", "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED"]),
                z = new Set,
                Q = new S.default("OverlayBridgeStore"),
                Z = "none",
                j = (0, r.createObservableLock)({
                    onContention: (e, t) => Q.verbose("overlayLock contention: lastMutexCall ".concat(Z)),
                    onContentionResolved: () => Q.verbose("overlayLock contention: resolved."),
                    onTimeout: (e, t) => {
                        let n = "overlayLock: lastMutexCall ".concat(Z, "}");
                        Q.error(n), R.default.track(m.AnalyticEvents.OVERLAY_HOOK_RESULT, {
                            success: !1,
                            error_description: n
                        })
                    },
                    timeoutMs: 18e4
                });

            function q(e, t) {
                return function() {
                    for (var n = arguments.length, a = Array(n), l = 0; l < n; l++) a[l] = arguments[l];
                    j(() => t(...a), e)
                }
            }

            function J(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    a = M.get(e);
                if ((null === n || a === n) && a !== t) {
                    if (null == t ? M.delete(e) : M.set(e, t), null == t || "CRASHED" === t) {
                        var l;
                        W = null;
                        let e = null === A.default || void 0 === A.default ? void 0 : null === (l = A.default.fileManager) || void 0 === l ? void 0 : l.uploadDiscordHookCrashes;
                        null != e && e().then(e => {
                            if (Array.isArray(e) && 0 !== e.length)
                                for (let d of (Q.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                                    var t, n, a, l, o, i, r;
                                    if (null == d) continue;
                                    let e = null != d.processName ? y.default.getGameByExecutable(d.processName) : null;
                                    R.default.track(m.AnalyticEvents.OVERLAY_HOOK_CRASHED, {
                                        process_name: null == d ? void 0 : d.processName,
                                        game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                                        game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
                                        minidump_exception_type: null !== (a = d.exceptionString) && void 0 !== a ? a : null,
                                        minidump_exception_module_name: null !== (l = d.exceptionModuleName) && void 0 !== l ? l : null,
                                        minidump_relative_crash_address: null !== (o = d.relativeCrashAddress) && void 0 !== o ? o : null,
                                        minidump_exception_module_version: null !== (i = d.exceptionModuleVersion) && void 0 !== i ? i : null,
                                        minidump_exception_module_code_id: null !== (r = d.exceptionModuleCodeId) && void 0 !== r ? r : null
                                    })
                                }
                        })
                    }
                    x.delete(e), Q.info("pid=".concat(e, " status transition ").concat(null != a ? a : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), M), Y = Array.from(M.values()).some(e => "READY" === e)
                }
            }
            async function $(e) {
                if (P.default.supportsFeature(m.NativeFeatures.CREATE_HOST_ON_ATTACH)) {
                    if (M.size > 0) {
                        Z = "reconcile.getOverlayURL";
                        let t = await el();
                        Z = "reconcile.createHostProcess", e.createHostProcess(t, ec, e_)
                    } else Z = "reconcile.destroyHostProcess", e.destroyHostProcess()
                } else if (V) {
                    let t = await el();
                    e.createHostProcess(t, ec, e_)
                } else e.destroyHostProcess()
            }
            async function ee(e) {
                !j.isMutexHeld() && Q.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
                let t = M.get(e);
                if (null != t) {
                    Q.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(t));
                    return
                }
                Z = "attach.getOverlayModule";
                let n = await eo();
                Z = "attach.transitionOverlayPIDStatus", J(e, "ATTACHING"), Z = "attach.attachToProcess";
                let a = await T.attachToProcess(e);
                null == a ? (Z = "attach.transitionOverlayPIDStatus (CONNECTING)", J(e, "CONNECTING", "ATTACHING"), Z = "attach.reconcileHostProcess", await $(n), n.connectProcess(e)) : (Z = "attach.transitionOverlayPIDStatus (HOOK_FAILED)", J(e, "HOOK_FAILED", "ATTACHING"), Q.warn("Could not hook to pid=".concat(e, ", error=").concat(a)))
            }
            async function et(e) {
                if (!j.isMutexHeld() && Q.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !M.has(e)) {
                    Q.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
                    return
                }
                Z = "detach.getOverlayModule";
                let t = await eo();
                Z = "detach.transitionOverlayPIDStatus", J(e, null), e !== G.DEV_PID && (Z = "detach.cancelAttachToProcess", T.cancelAttachToProcess(e), Z = "detach.disconnectProcess", t.disconnectProcess(e)), Z = "detach.reconcileHostProcess", await $(t)
            }
            async function en(e) {
                var t;
                if (Q.verbose("updateIntendedOverlayPIDs", {
                        isConnectionOpened: K,
                        action: e
                    }), !j.isMutexHeld() && Q.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !K && null != e) {
                    Q.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
                    return
                }
                async function n(t) {
                    if (!(t in U)) {
                        Q.error("Unexpected. ".concat(t, " is not a tracked game?"), U, e);
                        return
                    }
                    let n = U[t];
                    delete U[t];
                    try {
                        await n.deconstructor()
                    } catch (e) {
                        Q.error("Failed to deconstruct tracked game ".concat(t), e)
                    }
                }
                if (null == e || !V) {
                    Q.verbose("updateIntendedOverlayPIDs: Removing all.", U, e);
                    let t = Object.keys(U);
                    for (let e of t) await n(Number(e));
                    return
                }
                for (let n of null !== (t = e.added) && void 0 !== t ? t : []) {
                    let t = f.default.getGameOverlayStatus(n);
                    if (Q.verbose("updateIntendedOverlayPIDs: newGame", n, t), null != t && t.enabled) switch (n.pid in U && Q.error("Unexpected. ".concat(n.pid, " is being added twice?"), U, e), t.overlayMethod) {
                        case b.OverlayMethod.OutOfProcess:
                            let a = await eE();
                            await a.trackGame(n.pid), U[n.pid] = {
                                method: t.overlayMethod,
                                deconstructor: async () => {
                                    let e = await eE();
                                    await e.untrackGame(n.pid)
                                }
                            };
                            break;
                        case b.OverlayMethod.Hook:
                            !M.has(n.pid) && await ee(n.pid), U[n.pid] = {
                                method: t.overlayMethod,
                                deconstructor: async () => {
                                    await et(n.pid)
                                }
                            };
                            break;
                        case b.OverlayMethod.Disabled:
                            Q.verbose("updateIntendedOverlayPIDs: disabled", n);
                            break;
                        default:
                            Q.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(t.overlayMethod))
                    }
                }
                for (let t of e.removed) Q.verbose("updateIntendedOverlayPIDs: removedGame", t), await n(t.pid)
            }
            let ea = q("updateIntendedOverlayPIDs", e => en(e));

            function el() {
                return new Promise(e => {
                    ep.addConditionalChangeListener(() => {
                        if (null != a) return e(a), !1
                    })
                })
            }
            let eo = (() => {
                let e = null;
                async function t() {
                    if (!b.OVERLAY_SUPPORTED) throw Q.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
                    try {
                        return await P.default.ensureModule("discord_overlay2"),
                            function(e) {
                                for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (Q.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => void 0);
                                return e
                            }(P.default.requireModule("discord_overlay2"))
                    } catch (e) {
                        throw Q.error("failed ensuring discord_overlay2", e), e
                    }
                }
                return () => (null == e && (e = t()), e)
            })();
            async function ei(e) {
                var t, n, a, l, o, i, r;
                try {
                    let t = await el() + "&oop=true&pid=".concat(e);
                    await (null === A.default || void 0 === A.default ? void 0 : null === (l = A.default.globalOverlay) || void 0 === l ? void 0 : null === (a = l.openWindow) || void 0 === a ? void 0 : a.call(l, t))
                } catch (e) {
                    Q.log("globalOverlay: Failed to open overlay: ".concat(e), e), null === A.default || void 0 === A.default || null === (i = A.default.window) || void 0 === i || i.close(null === A.default || void 0 === A.default ? void 0 : null === (o = A.default.globalOverlay) || void 0 === o ? void 0 : o.WINDOW_KEY)
                }
                return k = e, null !== (r = await (null === A.default || void 0 === A.default ? void 0 : null === (n = A.default.window) || void 0 === n ? void 0 : n.getNativeHandle(null === A.default || void 0 === A.default ? void 0 : null === (t = A.default.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY))) && void 0 !== r ? r : ""
            }

            function er() {
                var e, t;
                null === A.default || void 0 === A.default || null === (t = A.default.window) || void 0 === t || t.close(null === A.default || void 0 === A.default ? void 0 : null === (e = A.default.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY)
            }

            function ed(e) {
                let t = h.default.getGameForPID(e);
                c.default.setAssociatedGame(null != k ? k : -1, e, t)
            }
            let eE = (() => {
                let e = null;
                async function t() {
                    if (!b.OVERLAY_SUPPORTED || !(0, G.supportsOutOfProcess)()) throw Q.error("Attempted to load out of process overlay on an unsupported platform."), Error("Out of Process Overlay is not supported on this platform.");
                    try {
                        var e;
                        let {
                            OutOfProcess: t
                        } = await eo();
                        return null == t || null === (e = t.init) || void 0 === e || e.call(t), t.setClickZoneCallback(eS), t.setHostWindowCallbacks(ei, er, ed), t.setFocusCallback(e_), t
                    } catch (e) {
                        throw Q.error("failed loading out of process overlay", e), e
                    }
                }
                return () => (null == e && (e = t()), e)
            })();

            function eu() {
                return ea({
                    added: f.default.getRunningGames(),
                    removed: []
                })
            }
            let es = q("setOverlayEnabled", async e => {
                if (!b.OVERLAY_SUPPORTED || V === e) return;
                V = e, N.OverlayStoredSettings.update({
                    enabled: e
                }), ep.emitChange();
                let t = await eo(),
                    {
                        OutOfProcess: n
                    } = t;
                (0, G.setOutOfProcessSupport)(null != n), V ? (await $(t), eu()) : (await en(void 0), await $(t))
            });

            function e_(e) {
                if (0 === e) {
                    var t, n;
                    let e = null !== (n = null === (t = U[null != W ? W : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : b.OverlayMethod.Disabled;
                    if (e === b.OverlayMethod.OutOfProcess) return
                }
                c.default.setFocusedPID(0 === e ? null : e)
            }

            function ec(e, t, n) {
                var a;
                let l = null === (a = f.default.getGameForPID(e)) || void 0 === a ? void 0 : a.name,
                    o = y.default.getGameByName(l),
                    i = {
                        game_name: l,
                        game_id: null == o ? null : o.id,
                        success: t,
                        ...n
                    };
                (0, _.createLayout)(G.OVERLAY_LAYOUT_ID, p.default.getDefaultLayout(G.OVERLAY_LAYOUT_ID), {
                    width: n.graphics_width,
                    height: n.graphics_height
                }), R.default.track(m.AnalyticEvents.OVERLAY_HOOK_RESULT, i), Q.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), i), t ? J(e, "CONNECTED", "CONNECTING") : J(e, "CONNECT_FAILED", "CONNECTING")
            }

            function eO() {
                let e = D.default.getToken(),
                    t = D.default.getId();
                null != e && I.send({
                    type: m.OverlayEventTypes.DISPATCH,
                    pid: null,
                    token: null,
                    payloads: [{
                        type: "UPDATE_TOKEN",
                        token: e,
                        userId: t
                    }]
                })
            }
            async function eA(e) {
                let t = await eo();
                if (null != W && W !== G.DEV_PID && t.sendCommand(W, {
                        message: "intercept_input",
                        intercept: !e
                    }), (0, G.supportsOutOfProcess)()) {
                    let t = await eE();
                    t.setInteractionEnabled(!e)
                }
            }

            function eT(e) {
                if (e) {
                    let t = f.default.getVisibleGame(),
                        n = null == t ? null : f.default.getGameOverlayStatus(t);
                    (null == n ? void 0 : n.overlayMethod) === b.OverlayMethod.OutOfProcess ? eA(e) : setTimeout(() => eA(e), 200)
                } else eA(e)
            }
            let eI = null;

            function eS(e, t, n) {
                c.default.relayClickZoneClicked(e, t, n)
            }
            async function ef(e) {
                if (!(0, G.supportsOutOfProcess)()) return;
                let t = await eE();
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

            function eN(e) {
                return !(B || !Y || X.has(e.type)) && ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = {
                    ...e,
                    settings: {
                        type: e.settings.type,
                        proto: (0, C.protoToB64WithType)(e.settings.type, e.settings.proto)
                    }
                }), H.add(e), null == l && (l = setTimeout(eL, 1)), !1)
            }

            function eL() {
                if (null != l && (clearTimeout(l), l = null), !Y) {
                    H.clear();
                    return
                }
                H.size > 0 && (I.send({
                    type: m.OverlayEventTypes.DISPATCH,
                    pid: null,
                    token: null,
                    payloads: Array.from(H)
                }), H.clear())
            }

            function eC(e) {
                return null != e && (0, v.constantTimeCompare)(e, F)
            }

            function eD(e) {
                switch (0, e.type) {
                    case m.OverlayEventTypes.CONNECT:
                        let t = D.default.getToken();
                        if (null == t) break;
                        (0, _.createLayout)(G.OVERLAY_LAYOUT_ID, p.default.getDefaultLayout(G.OVERLAY_LAYOUT_ID)), Promise.all([(0, L.default)(t, e.pid), d.default.PersistedStore.getAllStates()]).then(t => {
                            let [n, a] = t, {
                                pid: l,
                                token: o
                            } = e;
                            I.send({
                                type: m.OverlayEventTypes.STORAGE_SYNC,
                                pid: l,
                                token: o,
                                states: a
                            }), I.send({
                                type: m.OverlayEventTypes.DISPATCH,
                                pid: l,
                                token: o,
                                payloads: [n]
                            }), J(l, "READY"), c.default.overlayReady(l)
                        });
                        break;
                    case m.OverlayEventTypes.DISPATCH:
                        if (null != e.payloads) {
                            var n;
                            n = e.payloads, B = !0, n.forEach(e => E.default.dispatch(e)), B = !1
                        }
                        break;
                    case m.OverlayEventTypes.LOG_MESSAGES:
                        Q.info("[overlay data received]", e.payload)
                }
            }
            class ey extends d.default.Store {
                initialize() {
                    !(!b.OVERLAY_SUPPORTED || __OVERLAY__) && (w.add(b.OverlayMethod.Hook), this.waitFor(f.default, D.default), I.setReceiveCommandHandler(eD, eC), D.default.addChangeListener(eO), es(N.OverlayStoredSettings.enabled), E.default.addInterceptor(eN))
                }
                isInputLocked(e) {
                    return !x.has(e)
                }
                isSupported() {
                    return b.OVERLAY_SUPPORTED
                }
                isMethodSupported(e) {
                    return b.OVERLAY_SUPPORTED && w.has(e)
                }
                get enabled() {
                    return V
                }
                getFocusedPID() {
                    return W
                }
                isReady(e) {
                    return "READY" === M.get(e)
                }
                isCrashed(e) {
                    return "CRASHED" === M.get(e)
                }
            }
            ey.displayName = "OverlayBridgeStore";
            let ep = new ey(E.default, __OVERLAY__ ? {
                OVERLAY_RELAY_CLICK_ZONE_CLICKED: function(e) {
                    let {
                        normalizedMouseX: t,
                        normalizedMouseY: n
                    } = e;
                    setTimeout(() => {
                        let e = Math.ceil(t * window.innerWidth),
                            a = Math.ceil(n * window.innerHeight),
                            l = (0, g.createMouseEvent)("click", e, a);
                        (0, g.dispatchEventToPoint)(l, e, a)
                    }, 50)
                },
                OVERLAY_SET_ASSOCIATED_GAME: function(e) {
                    if (!(0, G.isOutOfProcess)()) return;
                    (0, G.setPID)(e.associatedGamePID);
                    let t = () => new Promise(e => {
                            requestAnimationFrame(() => {
                                let t = new MessageChannel;
                                t.port1.onmessage = () => {
                                    e()
                                }, t.port2.postMessage(void 0)
                            })
                        }),
                        n = 0,
                        a = () => {
                            15 === n ? c.default.notifyReadyToShow(e.associatedGamePID) : (n += 1, t().then(a))
                        };
                    a()
                }
            } : {
                CONNECTION_OPEN: function() {
                    K = !0, eu()
                },
                CONNECTION_CLOSED: function() {
                    K = !1, W = null, ea(void 0)
                },
                OVERLAY_SET_ENABLED: function(e) {
                    let {
                        enabled: t
                    } = e;
                    return es(t), !1
                },
                OVERLAY_FOCUSED: function(e) {
                    let {
                        pid: t
                    } = e;
                    W = t
                },
                RUNNING_GAMES_CHANGE: function(e) {
                    ea(e)
                },
                OVERLAY_SET_INPUT_LOCKED: function(e) {
                    let {
                        locked: t,
                        pid: n
                    } = e, a = M.get(n);
                    if (t || "READY" === a || "CRASHED" === a) {
                        if (t ? x.delete(n) : x.add(n), z.clear(), null != eI && (clearTimeout(eI), eI = null, t)) return;
                        t ? eT(t) : eI = setTimeout(() => {
                            eT(t), eI = null
                        }, 100)
                    }
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    let {
                        region: t
                    } = e;
                    z.add(t), eT(!1)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: function() {
                    z.clear(), eT(!0)
                },
                RPC_SERVER_READY: function(e) {
                    let {
                        port: t
                    } = e, n = crypto.getRandomValues(new Uint8Array(8));
                    F = btoa(String.fromCharCode(...n));
                    let l = new URLSearchParams;
                    l.append("build_id", "8e12d18e9c9b491e06ad56bad4bf60a1f6ffbae1"), l.append("rpc", String(t)), l.append("rpc_auth_token", F), a = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(l.toString())
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
                        messageId: o
                    } = e;
                    setImmediate(() => {
                        s.default.join({
                            userId: t,
                            sessionId: n,
                            applicationId: a,
                            channelId: l,
                            messageId: o
                        }), null != W && c.default.setLocked(!0, W)
                    })
                },
                OVERLAY_CRASHED: function(e) {
                    let {
                        pid: t
                    } = e;
                    J(t, "CRASHED")
                },
                RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
                    if (Q.verbose("handleGameToggleOverlay", e), !("pid" in e.game)) {
                        Q.verbose("handleGameToggleOverlay: Game was not a RunningGame.", e);
                        return
                    }
                    let t = [e.game];
                    ea({
                        added: e.newEnabledValue ? t : [],
                        removed: e.newEnabledValue ? [] : t
                    })
                },
                OVERLAY_SET_CLICK_ZONES: function(e) {
                    let {
                        zones: t
                    } = e;
                    ef(t)
                },
                OVERLAY_SET_ASSOCIATED_GAME: function(e) {
                    var t, n;
                    let a = null !== (n = null === (t = U[e.previousAssociatedGamePID]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : b.OverlayMethod.Disabled;
                    if (a !== b.OverlayMethod.OutOfProcess) return;
                    let l = M.get(e.previousAssociatedGamePID);
                    null != l && (M.delete(e.previousAssociatedGamePID), M.set(e.associatedGamePID, l)), x.delete(e.previousAssociatedGamePID), k = e.associatedGamePID
                },
                OVERLAY_NOTIFY_READY_TO_SHOW: function(e) {
                    eE().then(t => {
                        null == t || t.readyToShow(e.pid)
                    })
                }
            });
            var eh = ep
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
                    a = !1,
                    {
                        onContention: l,
                        onContentionResolved: o,
                        onTimeout: i,
                        timeoutMs: r
                    } = e,
                    d = function(e, d) {
                        n.length > 0 ? (l(d, n), a = !0) : a && (o(), a = !1), n.push(d);
                        let E = null == r || null == i ? null : setTimeout(() => i(d, n), r);
                        return new Promise((a, l) => {
                            t = t.then(e).then(a, l).then(() => n.splice(0, 1)), null != E && (t = t.then(() => clearTimeout(E)))
                        })
                    };
                return d.isMutexHeld = () => n.length > 0, d.getLockHolders = () => n, d
            }
            n.r(t), n.d(t, {
                createObservableLock: function() {
                    return a
                }
            }), n("424973")
        }
    }
]);
//# sourceMappingURL=77015.9e284277ba6ce0e7e324.js.map