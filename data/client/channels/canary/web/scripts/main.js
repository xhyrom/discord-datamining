(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91938"], {
        69008: function(e, t, n) {
            "use strict";
            e.exports = n.p + "72eaa596042042be6259.svg"
        },
        226730: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1c04c4fae98fbfc21d22.svg"
        },
        7578: function(e, t, n) {
            "use strict";
            e.exports = n.p + "14223d22c9628be36fc0.svg"
        },
        41761: function(e, t, n) {
            "use strict";
            e.exports = n.p + "14223d22c9628be36fc0.svg"
        },
        978538: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e79ff570861bbb9679f5.svg"
        },
        66737: function(e, t, n) {
            "use strict";
            e.exports = n.p + "29306de8953471954035.svg"
        },
        340109: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bc35d12450c07bd37714.svg"
        },
        840763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("312916"),
                r = {
                    setDesktopType(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_DESKTOP_TYPE",
                            desktopType: e
                        })
                    },
                    setTTSType(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_TTS_TYPE",
                            ttsType: e
                        })
                    },
                    setDisabledSounds(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_DISABLED_SOUNDS",
                            sounds: e
                        })
                    },
                    toggleDisableAllSounds() {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED"
                        })
                    },
                    setDisableUnreadBadge(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE",
                            disableUnreadBadge: e
                        })
                    },
                    setTaskbarFlash(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_TASKBAR_FLASH",
                            taskbarFlash: e
                        })
                    },
                    setNotifyMessagesInSelectedChannel(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
                            notify: e
                        })
                    },
                    setPermissionsState(e, t) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_PERMISSION_STATE",
                            enabled: e,
                            source: t
                        })
                    },
                    showNotification(e, t, n, r) {
                        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                        a.default.dispatch({
                            type: "NOTIFICATION_CREATE",
                            icon: e,
                            title: t,
                            body: n,
                            trackingProps: r,
                            options: {
                                ...i,
                                onClick() {
                                    i.onClick?.(), a.default.dispatch({
                                        type: "NOTIFICATION_CLICK"
                                    })
                                }
                            }
                        })
                    },
                    clickedNotification() {
                        a.default.dispatch({
                            type: "NOTIFICATION_CLICK"
                        })
                    }
                }
        },
        314497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                close: function() {
                    return i
                },
                hide: function() {
                    return s
                },
                moveTo: function() {
                    return u
                },
                open: function() {
                    return r
                },
                show: function() {
                    return l
                },
                switchPIPFocus: function() {
                    return d
                },
                updateRect: function() {
                    return o
                }
            });
            var a = n("312916");

            function r(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_OPEN",
                    id: e,
                    component: t,
                    props: n
                })
            }

            function i(e) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_CLOSE",
                    id: e
                })
            }

            function s(e) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_HIDE",
                    id: e
                })
            }

            function l(e) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_SHOW",
                    id: e
                })
            }

            function u(e, t) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_MOVE",
                    id: e,
                    position: t
                })
            }

            function o(e, t) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_UPDATE_RECT",
                    id: e,
                    rect: t
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW",
                    id: e
                })
            }
        },
        567035: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("699581"),
                s = n("682797"),
                l = n("661223"),
                u = n("974328"),
                o = n("256805"),
                d = n("777084"),
                c = n("615355"),
                f = n("293377"),
                h = n("836744"),
                p = n("990119"),
                g = n("845649"),
                E = n("746608"),
                C = n("467006");
            let m = e => {
                let {
                    children: t,
                    close: n,
                    onUnmount: l,
                    rect: o,
                    position: f,
                    align: h,
                    impressionName: g,
                    impressionProperties: E
                } = e, m = r.useRef(null);
                r.useEffect(() => {
                    let e = (0, i.findDOMNode)(m.current);
                    if (null == e) return;
                    let t = e => {
                        let t = e.target,
                            a = (0, i.findDOMNode)(m.current);
                        !(null != a && (0, u.referencePortalAwareContains)(a, t)) && (window.getSelection().removeAllRanges(), n())
                    };
                    return e.ownerDocument?.addEventListener("click", t, !0), e.ownerDocument?.addEventListener("contextmenu", t, !0), () => {
                        e.ownerDocument?.removeEventListener("click", t, !0), e.ownerDocument?.removeEventListener("contextmenu", t, !0)
                    }
                }, [n]);
                let S = r.useRef(l);
                r.useEffect(() => void(S.current = l)), r.useEffect(() => () => S.current?.(), []), r.useLayoutEffect(() => {
                    m.current?.updatePosition()
                }), (0, c.default)({
                    type: s.ImpressionTypes.MENU,
                    name: g,
                    properties: E
                });
                let _ = (0, d.useWindowDispatch)(),
                    T = r.useCallback(() => {
                        _.dispatch(C.ComponentActions.POPOUT_SHOW)
                    }, [_]),
                    I = r.useCallback(() => {
                        _.dispatch(C.ComponentActions.POPOUT_HIDE)
                    }, [_]);
                return (0, a.jsx)(p.AppReferencePositionLayer, {
                    onMount: T,
                    onUnmount: I,
                    reference: () => o,
                    position: f ?? "right",
                    align: h ?? "top",
                    autoInvert: !0,
                    ref: m,
                    nudgeAlignIntoViewport: !0,
                    children: t
                })
            };
            class S extends r.PureComponent {
                componentDidMount() {
                    let {
                        renderLazy: e,
                        renderWindow: t
                    } = this.props;
                    if (t.addEventListener("resize", this.closeResize, !0), g.ComponentDispatch.subscribe(C.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
                        let t = setTimeout(() => {
                            this.setState({
                                render: () => (0, a.jsx)(u.MenuSpinner, {})
                            })
                        }, 300);
                        e().then(e => {
                            this.setState({
                                render: e
                            }), clearTimeout(t)
                        })
                    }
                }
                componentDidUpdate(e) {
                    let {
                        isOpen: t
                    } = this.props;
                    !t && e.isOpen && e.config?.onClose?.()
                }
                componentWillUnmount() {
                    let {
                        renderWindow: e
                    } = this.props;
                    e.removeEventListener("resize", this.closeResize, !0), g.ComponentDispatch.unsubscribe(C.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
                }
                render() {
                    let {
                        appContext: e,
                        target: t,
                        isOpen: n,
                        theme: r,
                        config: i,
                        rect: s
                    } = this.props, l = this.state.render ?? this.props.render;
                    return n && null != s && null != i && null != t && null != l && i.context === e ? (0, a.jsx)(m, {
                        rect: s,
                        close: this.close,
                        onUnmount: i.onClose,
                        align: i.align,
                        position: i.position,
                        impressionName: i.impressionName,
                        impressionProperties: i.impressionProperties,
                        children: (n, a) => {
                            let {
                                position: s
                            } = n;
                            return l({
                                className: E.ContextMenuClassName,
                                position: s,
                                theme: r,
                                onHeightUpdate: a,
                                config: i,
                                target: t,
                                context: e
                            })
                        }
                    }) : null
                }
                constructor(...e) {
                    super(...e), this.state = {
                        render: void 0
                    }, this.closeResize = e => {
                        let {
                            renderWindow: t
                        } = this.props;
                        e.target === t && this.close()
                    }, this.close = () => {
                        let {
                            isOpen: e,
                            closeContextMenu: t
                        } = this.props;
                        e && t()
                    }
                }
            }

            function _() {
                let {
                    contextMenu: e,
                    version: t,
                    isOpen: n
                } = (0, l.useStateFromStoresObject)([h.default], () => ({
                    contextMenu: h.default.getContextMenu(),
                    version: h.default.version,
                    isOpen: h.default.isOpen()
                })), i = (0, l.useStateFromStores)([f.default], () => f.default.theme), {
                    appContext: s,
                    renderWindow: u
                } = r.useContext(d.default);
                return (0, a.jsx)(S, {
                    appContext: s,
                    renderWindow: u,
                    ...e,
                    isOpen: n,
                    theme: i,
                    closeContextMenu: o.closeContextMenu
                }, t)
            }
        },
        644959: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("31658");
            n.es(a, t)
        },
        378467: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("26163");
            n.es(a, t)
        },
        985246: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("661223"),
                r = n("974328"),
                i = n("706608"),
                s = n("893687"),
                l = n("359916"),
                u = n("240335"),
                o = n("313572"),
                d = () => {
                    let e = (0, a.useStateFromStores)([u.default], () => u.default.hasLayers()),
                        t = (0, o.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0),
                        n = (0, s.useIsModalOpen)(),
                        d = (0, r.useModalsStore)(r.hasAnyModalOpen),
                        c = (0, a.useStateFromStores)([i.default], () => i.default.isConnected()),
                        f = (0, a.useStateFromStores)([l.default], () => l.default.isOpen());
                    return e || t || d || n || !c || f
                }
        },
        695682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlindID: function() {
                    return s
                }
            }), n("268111"), n("941497"), n("744285"), n("492257"), n("873817");
            var a = n("841869"),
                r = n("413135").Buffer;
            let i = new a.default("BlindID");
            class s {
                constructor(e) {
                    let t = r.from(e, "hex");
                    this.key = crypto.subtle.importKey("raw", t, {
                        name: "HMAC",
                        hash: "SHA-512"
                    }, !1, ["sign"])
                }
                async blind(e) {
                    let t = await this.key,
                        n = new BigUint64Array([BigInt(e)]),
                        a = await crypto.subtle.sign("HMAC", t, n.buffer);
                    return s.truncate(a).toString()
                }
                static truncate(e) {
                    let t = new Uint8Array(e);
                    return t.length < 8 ? (i.error(`Unexpected byte length ${t.length}`), BigInt(0)) : BigInt(t[0]) | BigInt(t[1]) << BigInt(8) | BigInt(t[2]) << BigInt(16) | BigInt(t[3]) << BigInt(24) | BigInt(t[4]) << BigInt(32) | BigInt(t[5]) << BigInt(40) | BigInt(t[6]) << BigInt(48) | BigInt(t[7]) << BigInt(56)
                }
            }
        },
        258943: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uploadRtcLogFiles: function() {
                    return c
                }
            });
            var a = n("388684"),
                r = n("454836"),
                i = n("253842"),
                s = n("386130"),
                l = n("10357"),
                u = n("99588"),
                o = n("467006");
            let d = new a.default("uploadRtcLogFiles");
            async function c(e, t) {
                let n;
                if (null == u.default.fileManager.readLogFiles) throw new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.GENERAL);
                let a = [];
                try {
                    a = (a = await u.default.fileManager.readLogFiles(e)).map(e => (0, l.transformNativeFile)(e, "application/octet-stream"))
                } catch (e) {
                    throw d.error(`uploadDebugFiles: read error '${e}'`), new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.READ)
                }
                if (0 === a.length) throw new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.NO_FILE);
                try {
                    let e = {
                        extraInfo: t,
                        mediaEngineState: s.default.getState()
                    };
                    n = await r.default.post({
                        url: o.Endpoints.DEBUG_LOGS(o.DebugLogCategory.RTC),
                        attachments: [...a.map(e => ({
                            name: e.name,
                            file: e,
                            filename: e.name
                        })), {
                            name: "media_engine_state.json",
                            filename: "media_engine_state.json",
                            file: new Blob([JSON.stringify(e, void 0, 2)])
                        }]
                    })
                } catch (e) {
                    if (429 === e.status) throw new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.PROGRESS);
                    throw d.error(`Debug log upload error: status: ${e.status}, message: ${e.message}`), new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.UPLOAD)
                }
                let c = a.length + 1;
                if ("success_count" in n.body && n.body.success_count !== c) throw d.error(`Debug log upload: stored files ${n.body.success_count} !== ${c}`), new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.GENERAL);
                if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw d.error(`Debug log upload: store_success: ${n.body.store_success} / id_match: ${n.body.id_match} / all_success: ${n.body.all_success}`), new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.GENERAL)
            }
        },
        10508: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canEnableForcedColors: function() {
                    return S
                },
                default: function() {
                    return _
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("974328"),
                i = n("312916"),
                s = n("871831"),
                l = n("328470"),
                u = n("501769"),
                o = n("59952"),
                d = n("329420"),
                c = n("467006");
            let f = window.matchMedia("(prefers-reduced-motion: reduce)"),
                h = window.matchMedia("(prefers-contrast: more)"),
                p = window.matchMedia("(prefers-contrast: less)"),
                g = window.matchMedia("(prefers-color-scheme: dark)"),
                E = window.matchMedia("(prefers-color-scheme: light)"),
                C = window.matchMedia("(forced-colors: active)"),
                m = 5;

            function S() {
                return "windows" === (0, u.getOS)()
            }
            var _ = {
                initBasic() {
                    f.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(f), g.addListener(this.handleSystemColorPreferencesChanged), E.addListener(this.handleSystemColorPreferencesChanged), C.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), h.addListener(this.handleSystemPrefersContrastChanged), p.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
                },
                init() {
                    this.initBasic(), i.default.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                        l.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                            colorblind_enabled: d.default.colorblindMode
                        })
                    }), i.default.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
                        l.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                            saturation_level: e.saturation
                        })
                    })
                },
                maybeShowKeyboardNavigationExplainerModal() {
                    m = Math.max(m - 1, 0), ! function() {
                        let e = s.default.getCurrentUser();
                        return null == e || Date.now() - +e.createdAt < 864e5
                    }() && !d.default.keyboardNavigationExplainerModalSeen && 0 === m && (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("10508@4127:4173").then(n.bind(n, "679763"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                },
                handleSystemPrefersReducedMotionChanged(e) {
                    i.default.wait(() => {
                        o.systemPrefersReducedMotionChanged(e.matches ? "reduce" : "no-preference")
                    })
                },
                handleSystemColorPreferencesChanged() {
                    let e;
                    g.matches ? e = c.ThemeTypes.DARK : E.matches && (e = c.ThemeTypes.LIGHT);
                    let t = (!u.isPlatformEmbedded || S()) && C.matches ? "active" : "none";
                    i.default.wait(() => {
                        o.systemColorPreferencesChanged(e, t)
                    })
                },
                handleSystemPrefersContrastChanged() {
                    let e = "no-preference";
                    h.matches ? e = "more" : p.matches && (e = "less"), i.default.wait(() => {
                        o.systemPrefersContrastChanged(e)
                    })
                }
            }
        },
        521716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("93610"),
                s = n("661223"),
                l = n("974328"),
                u = n("328470"),
                o = n("196284"),
                d = n("329420"),
                c = n("455784"),
                f = n("467006");

            function h(e) {
                if (e.ctrlKey || e.altKey || e.metaKey || e.keyCode !== f.KeyboardKeys.TAB || null == e.target) return;
                let {
                    target: t
                } = e, n = o.eventOwnerDocument(e)?.activeElement;
                (0, i.isElement)(t) && u.default.track(f.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
                    shortcut_name: "tab_navigation",
                    source_class_list: null != n ? Array.from(n.classList) : [],
                    location_object: t.tagName
                })
            }

            function p(e) {
                let {
                    children: t
                } = e, n = (0, s.useStateFromStoresObject)([d.default], () => ({
                    enabled: d.default.useReducedMotion,
                    rawValue: d.default.rawPrefersReducedMotion
                })), i = (0, s.useStateFromStoresObject)([d.default], () => ({
                    enabled: d.default.useForcedColors,
                    rawValue: d.default.systemForcedColors
                })), u = (0, s.useStateFromStores)([d.default], () => d.default.alwaysShowLinkDecorations), o = r.useMemo(() => ({
                    reducedMotion: n,
                    prefersCrossfades: !1,
                    forcedColors: i,
                    alwaysShowLinkDecorations: u
                }), [n, i, u]);
                return r.useEffect(() => ((0, c.insertAccessibilityLabelElements)(), window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h)), []), (0, a.jsx)(l.AccessibilityPreferencesContext.Provider, {
                    value: o,
                    children: t
                })
            }
        },
        250969: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("974328"),
                i = n("410291"),
                s = n("781735"),
                l = n("535309"),
                u = n("30175");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    n = () => {
                        i.default.updatedUnsyncedSettings({
                            disableEmbeddedActivityPopOutAlert: !0
                        }), e()
                    };
                l.default.disableEmbeddedActivityPopOutAlert ? e() : (0, r.openModal)(r => (0, a.jsx)(s.default, {
                    confirmText: u.default.Messages.EMBEDDED_ACTIVITIES_YEP,
                    secondaryConfirmText: u.default.Messages.DONT_ASK_AGAIN,
                    title: u.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                    cancelText: u.default.Messages.EMBEDDED_ACTIVITIES_NVM,
                    onConfirm: e,
                    onConfirmSecondary: n,
                    onCancel: t,
                    body: u.default.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING,
                    ...r
                }))
            }
        },
        702012: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchBroadcasterBuckets: function() {
                    return m
                },
                getGameName: function() {
                    return p
                },
                maybeFetchBroadcastChannels: function() {
                    return S
                },
                startBroadcastForStream: function() {
                    return g
                },
                stopBroadcast: function() {
                    return E
                }
            });
            var a = n("454836"),
                r = n("312916"),
                i = n("224022"),
                s = n("188304"),
                l = n("535291"),
                u = n("262047"),
                o = n("731865"),
                d = n("919866"),
                c = n("887101"),
                f = n("870742"),
                h = n("467006");

            function p(e) {
                let t = e?.gameName ?? e?.name;
                return null != t ? t.trim() : null
            }

            function g(e, t) {
                if (null == t) return;
                let {
                    canBroadcast: n
                } = c.default.getCurrentConfig({
                    location: "start_broadcast_for_stream"
                }, {
                    autoTrackExposure: !1
                });
                if (!n) return;
                let {
                    ownerId: a,
                    channelId: l
                } = (0, s.decodeStreamKey)(e);
                if (null == a || null == l) return;
                let f = u.default.getId();
                if (a !== f) return;
                let h = u.default.getSessionId();
                if (null == h) return;
                let g = o.default.getChannel(l),
                    E = null != g && g.isBroadcastChannel();
                if (null == g || a !== g.ownerId || !E) return;
                let C = function(e) {
                    let t = p(i.default.getGameForPID(e)),
                        n = d.default.getGameByName(t);
                    return n?.id ?? "0"
                }(t);
                null != C && ! function(e) {
                    let t = u.default.getId(),
                        n = u.default.getSessionId();
                    null != t && null != n && r.default.dispatch({
                        type: "BROADCAST_START",
                        broadcast: e
                    })
                }({
                    sessionId: h,
                    userId: f,
                    applicationId: C,
                    channelId: g.id,
                    streamKey: e
                })
            }

            function E() {
                r.default.dispatch({
                    type: "BROADCAST_STOP"
                })
            }

            function C(e) {
                let t = {};
                e.forEach(e => {
                    t[e] = -1
                }), r.default.dispatch({
                    type: "BROADCASTER_BUCKETS_RECEIVED",
                    data: t
                })
            }
            async function m() {
                let e = f.default.getUserIdsToValidate();
                try {
                    let t = await a.default.get({
                        url: h.Endpoints.USER_BROADCASTS,
                        query: {
                            user_ids: e
                        }
                    });
                    if (t.ok && null != t.body) {
                        let n = {};
                        e.forEach(e => {
                            n[e] = t.body[e] ?? -1
                        }), r.default.dispatch({
                            type: "BROADCASTER_BUCKETS_RECEIVED",
                            data: n
                        })
                    } else C(e)
                } catch (t) {
                    C(e)
                }
            }
            async function S() {
                let e = f.default.getBroadcastsToValidateChannels().filter(e => null == e.viewers).map(e => e.channelId);
                if (0 !== e.length) try {
                    let t = await a.default.get({
                        url: h.Endpoints.BROADCAST_CHANNELS,
                        query: {
                            channel_ids: e
                        }
                    });
                    if (t.ok && null != t.body) {
                        let e = t.body,
                            n = {};
                        e.forEach(e => {
                            let t = f.default.getBroadcastByChannel(e.id).userId,
                                a = e.recipients ?? [];
                            n[t] = a.map(e => new l.default(e)).filter(e => e.id !== t)
                        }), r.default.dispatch({
                            type: "BROADCAST_VIEWERS_UPDATE",
                            viewers: n
                        })
                    }
                } catch (e) {}
            }
        },
        870742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a, r, i = n("392711"),
                s = n("661223"),
                l = n("386695"),
                u = n("312916"),
                o = n("535291"),
                d = n("262047"),
                c = n("84819"),
                f = n("887101"),
                h = n("199643");
            (a = r || (r = {}))[a.INVALID = 0] = "INVALID", a[a.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", a[a.VALID = 2] = "VALID";
            let p = new Set,
                g = new Set,
                E = new Set,
                C = [],
                m = {
                    BROADCASTS_BY_USER_ID: e => `user:${e}`,
                    BROADCASTS_BY_CHANNEL_ID: e => `channel:${e}`,
                    BROADCASTS_BY_VALIDITY: e => `validity:${e}`
                },
                S = new l.default(function(e) {
                    let t = p.has(e.userId) ? 1 : 0;
                    return null != e.viewers && (t = 2), [m.BROADCASTS_BY_USER_ID(e.userId), m.BROADCASTS_BY_CHANNEL_ID(e.channelId), m.BROADCASTS_BY_VALIDITY(t)]
                }, e => e.channelId);

            function _(e, t, n) {
                if (d.default.getId() === e) return !1;
                if (null == t) {
                    let t = S.get(e);
                    return !!(null != t && (0, i.isEqual)(t.source, n)) && (S.delete(e), void 0)
                }!p.has(e) && !g.has(e) && (E.add(e), C = [...E]);
                let a = (0, h.broadcastFromServer)(t, e, n);
                S.set(e, a)
            }

            function T(e) {
                return null != e ? {
                    type: h.BroadcastSourceType.GUILD,
                    guildId: e
                } : {
                    type: h.BroadcastSourceType.GLOBAL
                }
            }
            class I extends s.default.Store {
                static #e = this.displayName = "BroadcastingStore";
                getBroadcasts() {
                    return S.values(m.BROADCASTS_BY_VALIDITY(2))
                }
                getBroadcastsToValidateChannels() {
                    return S.values(m.BROADCASTS_BY_VALIDITY(1))
                }
                getBroadcastByChannel(e) {
                    return S.values(m.BROADCASTS_BY_CHANNEL_ID(e))[0]
                }
                getBroadcastByUser(e) {
                    return S.get(e)
                }
                getUserIdsToValidate() {
                    return C
                }
            }
            var A = new I(u.default, {
                PRESENCE_UPDATES: function(e) {
                    let {
                        updates: t
                    } = e;
                    return t.forEach(e => {
                        let {
                            user: t,
                            broadcast: n,
                            guildId: a
                        } = e;
                        _(t.id, n, T(a))
                    })
                },
                PRESENCES_REPLACE: function(e) {
                    let {
                        presences: t
                    } = e;
                    return t.forEach(e => {
                        let {
                            user: t,
                            broadcast: n,
                            guildId: a
                        } = e;
                        _(t.id, n, T(a))
                    })
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        presences: t,
                        guilds: n
                    } = e;
                    t.forEach(e => {
                        let {
                            user: t,
                            broadcast: n,
                            guildId: a
                        } = e;
                        _(t.id, n, T(a))
                    }), n.forEach(e => {
                        let {
                            presences: t,
                            id: n
                        } = e;
                        t.forEach(e => {
                            let {
                                user: t,
                                broadcast: a
                            } = e;
                            _(t.id, a, T(n))
                        })
                    })
                },
                BROADCASTER_BUCKETS_RECEIVED: function(e) {
                    let {
                        data: t
                    } = e;
                    c.default.keys(t).forEach(e => {
                        f.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? p.add(e) : g.add(e), E.clear(), C = [...E];
                        let n = S.get(e);
                        null != n && (S.delete(e), S.set(e, n))
                    })
                },
                BROADCAST_VIEWERS_UPDATE: function(e) {
                    let {
                        viewers: t
                    } = e;
                    Object.entries(t).forEach(e => {
                        let [t, n] = e, a = S.get(t);
                        null != a && S.set(t, {
                            ...a,
                            viewers: n
                        })
                    })
                },
                CHANNEL_RECIPIENT_ADD: function(e) {
                    let {
                        channelId: t,
                        user: n
                    } = e, a = S.values(m.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers || a.viewers.some(e => e.id === n.id)) return !1;
                    S.set(a.userId, {
                        ...a,
                        viewers: [...a.viewers, new o.default(n)]
                    })
                },
                CHANNEL_RECIPIENT_REMOVE: function(e) {
                    let {
                        channelId: t,
                        user: n
                    } = e, a = S.values(m.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers) return !1;
                    S.set(a.userId, {
                        ...a,
                        viewers: a.viewers.filter(e => e.id !== n.id)
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e, n = S.values(m.BROADCASTS_BY_CHANNEL_ID(t.id))[0];
                    if (null == n) return !1;
                    let a = t.rawRecipients ?? [];
                    S.set(n.userId, {
                        ...n,
                        viewers: a.filter(e => e.id !== n.userId).map(e => new o.default(e))
                    })
                },
                LOGOUT: function() {
                    p.clear(), g.clear(), E.clear(), C = [], S.clear()
                }
            })
        },
        307468: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                getCanStartBroadcast: function() {
                    return o
                }
            });
            var a = n("661223"),
                r = n("262047"),
                i = n("731865"),
                s = n("232733"),
                l = n("145080");

            function u() {
                let e = (0, a.useStateFromStores)([r.default], () => r.default.getId()),
                    t = (0, a.useStateFromStores)([s.default], () => s.default.getVoiceChannelId()),
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getChannel(t), [t]),
                    u = (0, a.useStateFromStores)([l.default], () => null != l.default.getBroadcast()),
                    o = n?.isOwner(e) && n?.isBroadcastChannel() || null == t;
                return !u && o
            }

            function o() {
                if (null != l.default.getBroadcast()) return !1;
                let e = s.default.getVoiceChannelId();
                if (null == e) return !0;
                let t = r.default.getId(),
                    n = i.default.getChannel(e);
                return n?.isOwner(t) && n?.isBroadcastChannel()
            }
        },
        910769: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                },
                getIsBroadcastingToAnyone: function() {
                    return h
                },
                isBroadcastingInChannel: function() {
                    return f
                },
                useIsBroadcastingInChannel: function() {
                    return c
                },
                useSelfBroadcast: function() {
                    return o
                }
            });
            var a = n("661223"),
                r = n("362939");
            n("311545");
            var i = n("262047"),
                s = n("731865");
            n("232733");
            var l = n("145080"),
                u = n("887101");

            function o() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getId()),
                    {
                        canBroadcast: t
                    } = u.default.useExperiment({
                        location: "use_self_broadcast"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = (0, a.useStateFromStores)([l.default], () => l.default.getBroadcast());
                return t && n?.userId === e ? n : null
            }

            function d() {
                return null != o()
            }

            function c(e) {
                let t = o(),
                    n = (0, a.useStateFromStores)([s.default], () => s.default.getChannel(e));
                return null != t && null != n && n.ownerId === t.userId && n.isBroadcastChannel()
            }

            function f(e) {
                let t = i.default.getId(),
                    {
                        canBroadcast: n
                    } = u.default.getCurrentConfig({
                        location: "is_broadcasting_in_channel"
                    }, {
                        autoTrackExposure: !1
                    }),
                    a = l.default.getBroadcast();
                if (!n || null == a || a.userId !== t) return !1;
                let r = s.default.getChannel(e);
                return null != r && r.ownerId === a.userId && r.isBroadcastChannel()
            }

            function h() {
                let e = r.BroadcastAllowedGuildIds.getSetting(),
                    t = r.BroadcastAllowedUserIds.getSetting();
                return r.BroadcastAllowFriends.getSetting() || e.length > 0 || t.length > 0
            }
            n("870742")
        },
        94701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("661223"),
                i = n("974328"),
                s = n("777084"),
                l = n("991095"),
                u = n("311545"),
                o = n("857363"),
                d = n("501769"),
                c = n("243590"),
                f = n("467006"),
                h = n("30175");

            function p(e) {
                let {
                    onClose: t
                } = e, n = (0, s.useAppContext)(), p = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUserActiveStream()), g = (0, l.default)(p, n);
                return (0, a.jsxs)(i.Menu, {
                    onSelect: f.NOOP_NULL,
                    navId: "manage-broadcast",
                    onClose: t,
                    "aria-label": h.default.Messages.SETTINGS,
                    children: [d.isPlatformEmbedded && null != p ? (0, a.jsx)(i.MenuItem, {
                        id: "stream-settings",
                        label: h.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: g
                    }) : null, (0, a.jsx)(i.MenuItem, {
                        id: "broadcast-settings",
                        label: h.default.Messages.BROADCAST_SETTINGS,
                        icon: o.default,
                        action: () => (0, c.openBroadcastingPrivacySettingsModal)()
                    })]
                })
            }
        },
        781362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openStartBroadcastConfirmModal: function() {
                    return u
                },
                openStopBroadcastConfirmModal: function() {
                    return l
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("974328"),
                i = n("702012"),
                s = n("30175");

            function l(e) {
                (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
                    header: s.default.Messages.STOP_STREAMING,
                    confirmText: s.default.Messages.STOP_STREAMING,
                    cancelText: s.default.Messages.CANCEL,
                    onConfirm: () => {
                        (0, i.stopBroadcast)(), e()
                    },
                    ...t,
                    children: (0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: s.default.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
                    })
                }))
            }

            function u(e) {
                (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
                    header: s.default.Messages.START_STREAMING,
                    confirmText: s.default.Messages.START_STREAMING,
                    cancelText: s.default.Messages.CANCEL,
                    onConfirm: e,
                    confirmButtonColor: r.Button.Colors.BRAND,
                    ...t,
                    children: (0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: s.default.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY
                    })
                }))
            }
        },
        243590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openBroadcastingPrivacySettingsModal: function() {
                    return i
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("974328");

            function i(e, t, i) {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: r
                    } = await n.el("243590@314:369").then(n.bind(n, "985696"));
                    return n => (0, a.jsx)(r, {
                        headerText: e,
                        buttonCTA: t,
                        onSave: i,
                        ...n
                    })
                })
            }
        },
        512261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCallBannerBackgroundExperiment: function() {
                    return r
                }
            });
            let a = (0, n("516086").createExperiment)({
                kind: "user",
                id: "2023-10_call_banner_bg",
                label: "Call Banner Background Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function r(e, t) {
                return a.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: e
                })
            }
        },
        143611: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("632865"),
                r = n("389570");
            let i = Object.freeze({
                [a.ParticipantTypes.STREAM]: r.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.HIDDEN_STREAM]: r.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.USER]: r.MediaEngineContextTypes.DEFAULT,
                [a.ParticipantTypes.ACTIVITY]: r.MediaEngineContextTypes.DEFAULT
            });

            function s(e) {
                return i[e]
            }
        },
        450603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("803997"),
                s = n.n(i),
                l = n("392711"),
                u = n.n(l),
                o = n("661223"),
                d = n("767191"),
                c = n("974328"),
                f = n("256805"),
                h = n("933439"),
                p = n("311545"),
                g = n("871831"),
                E = n("888075"),
                C = n("137334"),
                m = n("370275"),
                S = n("107888"),
                _ = n("632865"),
                T = n("467006"),
                I = n("30175"),
                A = n("717126");

            function v(e, t) {
                switch (e) {
                    case _.ParticipantTypes.ACTIVITY:
                        return I.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                            numUsers: t
                        });
                    case _.ParticipantTypes.STREAM:
                        return I.default.Messages.SPECTATORS.format({
                            numViewers: t
                        });
                    default:
                        throw Error("Unknown participant type.")
                }
            }

            function N(e) {
                let {
                    users: t,
                    disableInteraction: n,
                    guildId: r,
                    participantType: i,
                    channelId: l,
                    handleUserContextMenu: u
                } = e, o = v(i, t.length);
                return (0, a.jsx)(c.Dialog, {
                    "aria-label": o,
                    className: A.popoutWrapper,
                    children: (0, a.jsxs)(c.Scroller, {
                        className: A.scroller,
                        children: [(0, a.jsx)(c.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: A.memberListHeader,
                            children: o
                        }), (0, a.jsx)("div", {
                            children: t.map(e => (0, a.jsx)(E.default, {
                                guildId: r ?? void 0,
                                className: s()(A.memberListItem, {
                                    [A.popoutDisabled]: n
                                }),
                                textClassName: A.memberListItemText,
                                user: e,
                                disablePopout: n,
                                nick: S.default.getNickname(r, l, e),
                                onContextMenu: t => n ? null : u(t, e)
                            }, e.id))
                        })]
                    })
                })
            }

            function L(e) {
                let {
                    users: t,
                    guildId: n,
                    channelId: r,
                    maxVisibleUsers: i = 3,
                    className: l,
                    participantType: u
                } = e, o = v(u, t.length), d = t.length < i ? t.map(e => (0, a.jsx)("div", {
                    className: A.viewersTooltipItem,
                    children: S.default.getName(n, r, e)
                }, e.id)) : o;
                return (0, a.jsx)(c.TooltipContainer, {
                    text: d,
                    "aria-label": o,
                    children: (0, a.jsxs)("div", {
                        className: s()(A.viewers, l),
                        children: [(0, a.jsx)(C.default, {
                            className: A.viewersIcon
                        }), (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            children: t.length
                        })]
                    })
                })
            }
            let M = [];

            function y(e) {
                let {
                    channelId: t,
                    guildId: i,
                    participant: l,
                    className: E,
                    compact: C = !1,
                    disableInteraction: S = !1,
                    maxVisibleUsers: I = 3
                } = e, [v, y] = r.useState(!1), R = r.useRef(new d.DelayedCall(150, () => y(!1))), O = (0, o.useStateFromStoresArray)([p.default, g.default], () => {
                    if (l.type === _.ParticipantTypes.STREAM) {
                        let e = p.default.getViewerIds(l.id);
                        return e.length > 0 ? e.map(e => g.default.getUser(e)).filter(m.isNotNullish) : M
                    }
                    return l.type === _.ParticipantTypes.ACTIVITY ? l.participants.size > 0 ? Array.from(l.participants).map(e => g.default.getUser(e)).filter(m.isNotNullish) : M : M
                }, [l]), x = r.useCallback(() => {
                    R.current.cancel(), y(!0)
                }, []), b = r.useCallback(() => {
                    R.current.delay()
                }, []), D = r.useCallback((e, t) => {
                    x(), (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("450603@5519:5586").then(n.bind(n, "84406"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            user: t
                        })
                    }, {
                        onClose: b
                    })
                }, [b, x]);
                if (0 === O.length) return null;
                if (C) return (0, a.jsx)(L, {
                    maxVisibleUsers: I,
                    users: O,
                    guildId: i,
                    channelId: t,
                    className: E,
                    participantType: l.type
                });
                let P = u()(O).take(I).map(e => (0, a.jsx)(c.Avatar, {
                    src: e.getAvatarURL(i, 24),
                    "aria-label": e.username,
                    size: c.AvatarSizes.SIZE_24,
                    className: A.viewer
                }, e.id)).value();
                return O.length > I && (P[P.length - 1] = (0, a.jsxs)("div", {
                    className: A.overflow,
                    children: ["+", O.length - I + 1]
                }, "overflow")), (0, a.jsx)(h.default, {
                    section: T.AnalyticsSections.STREAM_VIEWER_POPOUT,
                    children: (0, a.jsx)("div", {
                        onMouseEnter: x,
                        onMouseLeave: b,
                        children: (0, a.jsx)(c.Popout, {
                            renderPopout: () => (0, a.jsx)(N, {
                                participantType: l.type,
                                handleUserContextMenu: D,
                                guildId: i,
                                channelId: t,
                                users: O,
                                disableInteraction: S
                            }),
                            shouldShow: v,
                            position: "top",
                            children: () => (0, a.jsx)("div", {
                                className: s()(A.viewers, E),
                                children: P
                            })
                        })
                    })
                })
            }
        },
        84625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("661223"),
                i = n("974328"),
                s = n("188304"),
                l = n("354831"),
                u = n("262047"),
                o = n("69046"),
                d = n("30175");

            function c(e, t, c) {
                let f = (0, l.useGetStreamApplication)(e),
                    h = (0, r.useStateFromStores)([u.default], () => u.default.getId()),
                    p = null != e ? (0, s.encodeStreamKey)(e) : o.default.getActiveStreamKey(),
                    g = o.default.getVideoStats(p) ?? {},
                    E = {
                        media_session_id: o.default.getMediaSessionId(p),
                        rtc_connection_id: o.default.getRtcConnectionId(p),
                        stream_region: o.default.getRegion(p),
                        max_viewers: o.default.getMaxViewers(p),
                        ...g
                    };
                return null == e ? null : (0, a.jsx)(i.MenuItem, {
                    id: "report-stream-problem",
                    label: d.default.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
                    action: () => {
                        c?.(), null != e && (0, i.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("84625@1524:1581").then(n.bind(n, "64172"));
                            return n => (0, a.jsx)(t, {
                                stream: e,
                                streamApplication: f,
                                isStreamer: h === e?.ownerId,
                                analyticsData: E,
                                ...n
                            })
                        })
                    }
                })
            }
        },
        991095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("661223"),
                s = n("974328"),
                l = n("221083"),
                u = n("986416"),
                o = n("883319"),
                d = n("595407"),
                c = n("327271"),
                f = n("386130"),
                h = n("871831"),
                p = n("467006"),
                g = n("315308"),
                E = n("389570"),
                C = n("30175");

            function m(e, t) {
                let {
                    preset: m,
                    resolution: S,
                    fps: _
                } = (0, i.useStateFromStoresObject)([d.default], () => d.default.getState()), T = (0, i.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), I = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser()), A = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(e?.guildId)?.premiumTier), {
                    location: v
                } = (0, u.useAnalyticsContext)(), N = r.useCallback((e, r, i, u) => {
                    if (e) {
                        if (null != T) {
                            let e = {
                                qualityOptions: {
                                    preset: g.ApplicationStreamPresets.PRESET_CUSTOM,
                                    resolution: r,
                                    frameRate: i
                                },
                                context: E.MediaEngineContextTypes.STREAM
                            };
                            null != T.desktopSource ? e.desktopSettings = {
                                sourceId: T.desktopSource.id,
                                sound: !0
                            } : null != T.cameraSource && (e.cameraSettings = {
                                videoDeviceGuid: T.cameraSource.videoDeviceGuid,
                                audioDeviceGuid: T.cameraSource.audioDeviceGuid
                            }), l.default.setGoLiveSource(e)
                        }
                    } else {
                        var o, d;
                        o = t, d = {
                            ...v,
                            object: p.AnalyticsObjects.RADIO_ITEM,
                            objectType: u
                        }, (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("991095@1322:1352").then(n.bind(n, "222047"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                analyticsSource: d
                            })
                        }, {
                            contextKey: o === p.AppContext.POPOUT ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT
                        })
                    }
                }, [t, v, T]);
                if (null == e) return null;
                let L = m === g.ApplicationStreamPresets.PRESET_DOCUMENTS ? g.ApplicationStreamFPS.FPS_30 : _,
                    M = g.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, r = (0, o.default)(g.ApplicationStreamPresets.PRESET_CUSTOM, S, t, I, A);
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            checked: t === _,
                            action: () => N(r, S, t, p.AnalyticsObjectTypes.RESOLUTION)
                        }, `stream-settings-fps-${t}`)
                    }),
                    y = g.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, r = (0, o.default)(g.ApplicationStreamPresets.PRESET_CUSTOM, t, L, I, A);
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            checked: t === S,
                            action: () => N(r, t, L, p.AnalyticsObjectTypes.RESOLUTION)
                        }, `stream-settings-resolution-${t}`)
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.MenuGroup, {
                        label: C.default.Messages.SCREENSHARE_FRAME_RATE,
                        children: M
                    }), (0, a.jsx)(s.MenuGroup, {
                        label: C.default.Messages.STREAM_RESOLUTION,
                        children: y
                    })]
                })
            }
        },
        138847: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CLIENT_THEMES_DATA_ATTRIBUTE: function() {
                    return s
                },
                default: function() {
                    return o
                }
            });
            var a = n("470079"),
                r = n("661223"),
                i = n("546435");
            let s = "data-client-themes",
                l = "custom-theme-background",
                u = () => {
                    let e = (0, r.useStateFromStores)([i.default], () => i.default.getLinearGradient());
                    return (0, a.useMemo)(() => null == e ? null : `.${l} {
      --custom-theme-background: ${e};
    }`, [e])
                };
            var o = () => {
                let e = u();
                return null === e ? {
                    clientThemesCSS: "",
                    clientThemesClassName: ""
                } : {
                    clientThemesCSS: e,
                    clientThemesClassName: l
                }
            }
        },
        427421: function(e, t, n) {
            "use strict";
            var a;
            n.r(t), n.d(t, {
                ContentInventoryFeedKey: function() {
                    return a
                }
            }), (a || (a = {})).GLOBAL_FEED = "global feed"
        },
        676292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("661223"),
                r = n("312916");
            let i = new Map;
            class s extends a.default.Store {
                static #e = this.displayName = "ContentInventoryStore";
                getFeed(e) {
                    return i.get(e)
                }
            }
            var l = new s(r.default, {
                CONNECTION_OPEN: function() {
                    i.clear()
                },
                CONTENT_INVENTORY_SET_FEED: function(e) {
                    let {
                        feedId: t,
                        feed: n
                    } = e;
                    i.set(t, n)
                }
            })
        },
        551196: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("501769");

            function r() {
                let e = "";
                return (0, a.isWindows)() ? e = "platform-win" : (0, a.isMac)() ? e = "platform-osx" : (0, a.isLinux)() ? e = "platform-linux" : (0, a.isWeb)() && (e = "platform-web"), __OVERLAY__ ? `${e} platform-overlay` : e
            }
        },
        404699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("392711"),
                s = n.n(i),
                l = n("105691"),
                u = n("753750"),
                o = n("120739"),
                d = n("661223"),
                c = n("974328"),
                f = n("365903"),
                h = n("598561"),
                p = n("282373"),
                g = n("587650"),
                E = n("618933"),
                C = n("521588"),
                m = n("702018"),
                S = n("328470"),
                _ = n("281925"),
                T = n("432056"),
                I = n("467006"),
                A = n("30175"),
                v = n("748068");

            function N() {
                let [e, t] = r.useState(!1);
                if (null == (0, d.useStateFromStores)([h.default], () => (0, p.probablyHasBuildOverride)() ? h.default.getCurrentBuildOverride().overrides?.discord_web : null)) return null;
                let n = async () => {
                    try {
                        t(!0), await (0, f.clearBuildOverride)(), window.location.reload(!0)
                    } catch (e) {
                        t(!1)
                    }
                };
                return (0, a.jsx)(c.Button, {
                    size: c.ButtonSizes.LARGE,
                    onClick: n,
                    submitting: e,
                    className: v.clearOverrideButton,
                    children: A.default.Messages.CLEAR_BUILD_OVERRIDE
                })
            }
            let L = s().throttle(() => {
                E.default.increment({
                    name: o.MetricEvents.APP_CRASHED,
                    tags: [`reason:${l.AppCrashedReasons.UNHANDLED_JS_ERROR}`, `level:${u.ErrorLevels.FATAL}`]
                }, !0)
            }, 100, {
                trailing: !1
            });
            class M extends r.PureComponent {
                componentDidCatch(e, t) {
                    this.triggerSoftCrash(e, t)
                }
                triggerSoftCrash(e, t) {
                    let n = (0, C.getHistory)().location;
                    this.setState({
                        error: e,
                        info: t
                    });
                    let a = _.default.captureCrash(e, {
                        extra: t
                    });
                    S.default.track(I.AnalyticEvents.APP_CRASHED, {
                        path: n.pathname,
                        extra: t,
                        error_message: e.message,
                        error_stack: e.stack,
                        sentry_issue_id: a,
                        uses_client_mods: (0, g.usesClientMods)()
                    }), L(), T.default.cleanupDisplaySleep()
                }
                _handleSubmitReport() {
                    location.reload(!0)
                }
                componentDidMount() {
                    null == window.DiscordErrors && (window.DiscordErrors = {
                        softCrash: e => {
                            this.triggerSoftCrash(e)
                        }
                    }, this.discordErrorsSet = !0)
                }
                componentWillUnmount() {
                    this.discordErrorsSet && (window.DiscordErrors = null, this.discordErrorsSet = !1)
                }
                render() {
                    let {
                        children: e,
                        renderCustomMessage: t
                    } = this.props;
                    if (null !== this.state.error) {
                        let e = (0, a.jsxs)("div", {
                                children: [(0, a.jsx)("p", {
                                    children: A.default.Messages.ERRORS_UNEXPECTED_CRASH
                                }), (0, a.jsx)("p", {
                                    children: A.default.Messages.ERRORS_ACTION_TO_TAKE
                                })]
                            }),
                            n = (0, a.jsxs)("div", {
                                className: v.buttons,
                                children: [(0, a.jsx)(c.Button, {
                                    size: c.ButtonSizes.LARGE,
                                    onClick: this._handleSubmitReport,
                                    children: A.default.Messages.ERRORS_RELOAD
                                }), (0, a.jsx)(N, {})]
                            });
                        return (0, a.jsx)(m.default, {
                            title: A.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                            note: null != t ? t() : e,
                            action: n,
                            className: v.errorPage
                        })
                    }
                    return e
                }
                constructor(...e) {
                    super(...e), this.state = {
                        error: null,
                        info: null
                    }, this.discordErrorsSet = !1
                }
            }
            var y = M
        },
        640525: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("803997"),
                i = n.n(r),
                s = n("661223"),
                l = n("974328"),
                u = n("985246"),
                o = n("99588"),
                d = n("777084"),
                c = n("901365"),
                f = n("997351"),
                h = n("935178"),
                p = n("242259"),
                g = n("720139"),
                E = n("950165"),
                C = n("315604"),
                m = n("381694"),
                S = n("501769"),
                _ = n("671008"),
                T = n("432056"),
                I = n("30175"),
                A = n("515530");
            let v = e => T.default.close(e),
                N = e => T.default.minimize(e),
                L = (e, t) => {
                    (0, S.isMac)() && !t.altKey ? T.default.fullscreen(e) : T.default.maximize(e)
                },
                M = e => {
                    let {
                        windowKey: t,
                        themeOverride: n,
                        hasOpenLayer: r
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: i()(A.typeWindows, (0, _.getThemeClass)(n), {
                            [A.withBackgroundOverride]: !r
                        }),
                        children: [(0, a.jsx)("div", {
                            className: A.wordmarkWindows,
                            children: (0, a.jsx)(f.default, {})
                        }), (0, a.jsx)(l.Clickable, {
                            className: A.winButtonClose,
                            onClick: () => v(t),
                            "aria-label": I.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(h.default, {})
                        }), (0, a.jsx)(l.Clickable, {
                            className: A.winButtonMinMax,
                            onClick: e => L(t, e),
                            "aria-label": I.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(g.default, {})
                        }), (0, a.jsx)(l.Clickable, {
                            className: A.winButtonMinMax,
                            onClick: () => N(t),
                            "aria-label": I.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(C.default, {})
                        })]
                    })
                },
                y = e => {
                    let {
                        focused: t,
                        windowKey: n,
                        frame: r,
                        themeOverride: s,
                        hasOpenLayer: u
                    } = e;
                    return (0, a.jsxs)(l.Clickable, {
                        className: i()(r ? A.typeMacOSWithFrame : A.typeMacOS, t ? A.focused : A.unfocused, (0, _.getThemeClass)(s), {
                            [A.withBackgroundOverride]: !u
                        }),
                        onDoubleClick: () => T.default.maximize(n),
                        tabIndex: -1,
                        children: [o.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, a.jsx)("div", {
                            className: A.macDragRegion
                        }) : (0, a.jsxs)("div", {
                            className: A.macButtons,
                            children: [(0, a.jsx)(l.Clickable, {
                                className: A.macButtonClose,
                                onClick: () => v(n),
                                "aria-label": I.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(p.default, {
                                    color: "#4c0000"
                                })
                            }), (0, a.jsx)(l.Clickable, {
                                className: A.macButtonMinimize,
                                onClick: () => N(n),
                                "aria-label": I.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(m.default, {
                                    color: "#975500"
                                })
                            }), (0, a.jsx)(l.Clickable, {
                                className: A.macButtonMaximize,
                                onClick: e => L(n, e),
                                "aria-label": I.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(E.default, {
                                    color: "#006500"
                                })
                            })]
                        }), r ? (0, a.jsx)("div", {
                            className: A.wordmarkMacOS,
                            children: (0, a.jsx)(f.default, {
                                color: "#ffffff"
                            })
                        }) : null]
                    })
                };

            function R(e) {
                let {
                    focused: t,
                    type: n,
                    windowKey: r,
                    macOSFrame: i = !1,
                    themeOverride: l
                } = e, o = (0, d.useAppContext)(), f = (0, s.useStateFromStores)([c.default], () => c.default.isFullscreenInContext(o)), h = (0, u.default)();
                if (f) return null;
                switch (n) {
                    case S.PlatformTypes.WINDOWS:
                        return (0, a.jsx)(M, {
                            windowKey: r,
                            themeOverride: l,
                            hasOpenLayer: h
                        });
                    case S.PlatformTypes.OSX:
                        return (0, a.jsx)(y, {
                            focused: t,
                            windowKey: r,
                            frame: i,
                            themeOverride: l,
                            hasOpenLayer: h
                        });
                    default:
                        return null
                }
            }
        },
        71657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("470079"),
                r = n("661223"),
                i = n("910838"),
                s = n("974328"),
                l = n("96185"),
                u = n("59952"),
                o = n("329420"),
                d = n("10508"),
                c = n("106498"),
                f = n("196284"),
                h = n("948126"),
                p = n("467006"),
                g = n("891050");

            function E(e) {
                let t = e.ctrlKey || e.altKey || e.metaKey;
                e.key === g.KeyboardEventKey.Tab && !t && !__OVERLAY__ && !(0, i.hasAnyModalOpen)() && d.default.maybeShowKeyboardNavigationExplainerModal()
            }

            function C() {
                (0, u.disableKeyboardMode)()
            }
            var m = function(e, t) {
                let n = (0, r.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled);
                (0, s.useFocusJumpSectionManager)(n);
                let i = (0, a.useCallback)(e => {
                    ! function(e, t) {
                        let n = (0, f.isInputLikeElement)(f.eventOwnerDocument(e)?.activeElement);
                        if (n && e.key !== g.KeyboardEventKey.Tab || e.ctrlKey || e.altKey || e.metaKey || e.key !== g.KeyboardEventKey.Tab && e.shiftKey) return;
                        let a = function(e) {
                            let t = h.keyToCode("shift"),
                                n = h.keyToCode("tab");
                            if (e.key === g.KeyboardEventKey.Tab && e.shiftKey && null != t && null != n) return [
                                [p.KeyboardDeviceTypes.KEYBOARD_KEY, t],
                                [p.KeyboardDeviceTypes.KEYBOARD_KEY, n]
                            ];
                            let a = g.NavigationKeyShortcutMap.get(e.key);
                            if (null != a) {
                                let e = h.keyToCode(a);
                                if (null != e) return [
                                    [p.KeyboardDeviceTypes.KEYBOARD_KEY, e]
                                ]
                            }
                            return null
                        }(e);
                        null != a && !c.default.hasExactKeybind(a) && !l.default.hasBind(h.codeToKey(a[0]) ?? "") && ((0, u.enableKeyboardMode)(), n && !t && e.preventDefault())
                    }(e, t)
                }, [t]);
                return (0, a.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", C), e.addEventListener("keydown", E)) : e.addEventListener("keydown", i), () => {
                    n ? (e.removeEventListener("mousedown", C), e.removeEventListener("keydown", E)) : e.removeEventListener("keydown", i)
                }), [e, i, n]), n
            }
        },
        688285: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("470079"),
                r = n("777084"),
                i = n("467006");
            let s = ["Shift", "Alt", "Meta", "Control"];

            function l(e, t) {
                let [n, l] = a.useState(0), u = (0, r.useWindowDispatch)();
                a.useEffect(() => {
                    let e = () => l(e => e + 1),
                        t = () => l(e => Math.max(0, e - 1));
                    return u.subscribe(i.ComponentActions.POPOUT_SHOW, e), u.subscribe(i.ComponentActions.POPOUT_HIDE, t), () => {
                        u.unsubscribe(i.ComponentActions.POPOUT_SHOW, e), u.unsubscribe(i.ComponentActions.POPOUT_HIDE, t)
                    }
                }, [u]);
                let [o, d] = a.useState(!1);
                return a.useLayoutEffect(() => {
                    let a = e => {
                            if ((!t || n > 0) && o) {
                                d(!1);
                                return
                            }!(!o && n > 0 || e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || s.indexOf(e.key) >= 0)) && d(e => !e)
                        },
                        r = o ? "keyup" : "mousemove";
                    return t && e.addEventListener(r, a), () => e?.removeEventListener(r, a)
                }, [e, o, n, t]), t && 0 === n && o
            }
        },
        603835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBlindIds: function() {
                    return m
                },
                uploadCallscopeLogFiles: function() {
                    return _
                },
                uploadCallscopeLogs: function() {
                    return S
                },
                uploadDebugLogFiles: function() {
                    return E
                }
            });
            var a = n("454836"),
                r = n("695682"),
                i = n("99588"),
                s = n("258943"),
                l = n("731865"),
                u = n("10357"),
                o = n("14794"),
                d = n("841869"),
                c = n("105259"),
                f = n("20569"),
                h = n("331005"),
                p = n("467006");
            let g = new d.default("DebugUploadManager");
            async function E(e, t) {
                await T(e), await (0, s.uploadRtcLogFiles)(3670016, t)
            }
            class C {
                static getTrimmedFilename(e) {
                    let t = /^channel\.\d+\.(.+)$/.exec(e);
                    return null == t || t.length < 2 || null == t[1] ? "unknown" : t[1]
                }
                static getChannelId(e) {
                    let t = /channel\.(\d+)\..+(?:tsi|tsd)$/.exec(e);
                    return null == t || t.length < 2 || null == t[1] ? "unknown" : t[1]
                }
            }
            async function m(e, t, n) {
                let a = new r.BlindID(n),
                    i = await a.blind(e);
                return {
                    blindChannelId: i,
                    blindUserId: await a.blind(t)
                }
            }
            async function S(e, t, n, a) {
                if (!__OVERLAY__) {
                    if (i.default?.fileManager?.getCallscopeLogFiles == null) {
                        g.error("uploadCallscopeLogs: Upload RTC logs failed because native is out of date (getCallscopeLogFiles).");
                        return
                    }
                    if (!("crypto" in window)) {
                        g.error("uploadCallscopeLogs: Upload RTC logs failed because crypto is not supported.");
                        return
                    }
                    try {
                        let {
                            blindChannelId: r,
                            blindUserId: s
                        } = await m(e, t, n), l = `channel blind(${e}): ${r}, user blind(${t}): ${s}`;
                        g.info(`uploadCallscopeLogs: Uploading callscope logs for context: ${a}, ${l}`);
                        let u = await i.default.fileManager.getCallscopeLogFiles(r);
                        await _(s, u)
                    } catch (e) {
                        g.error(`uploadCallscopeLogs: Error uploading logs ${e?.text}`, e)
                    }
                }
            }
            async function _(e, t) {
                try {
                    if (0 === t.length) {
                        g.error("uploadCallscopeLogFiles: No files found.");
                        return
                    }
                    for (let n of t.map(e => u.transformNativeFile(e, "application/octet-stream"))) {
                        g.log(`uploadCallscopeLogFiles: Uploading ${n.name}`);
                        let t = C.getChannelId(n.name);
                        try {
                            let r = await a.default.post({
                                url: p.Endpoints.CALLSCOPE_LOGS(t, e, C.getTrimmedFilename(n.name)),
                                headers: {
                                    "Content-Type": "application/octet-stream"
                                },
                                body: n
                            });
                            !(r.status >= 200 && r.status <= 299) && g.error(`uploadCallscopeLogFiles: Failed to upload ${n.name} with status ${r.status}, ${r.text}`)
                        } catch (e) {
                            g.error(`uploadCallscopeLogFiles: Error uploading file ${n.name} ${e?.text}`, e)
                        }
                    }
                } catch (e) {
                    g.error(`uploadCallscopeLogFiles: Error uploading logs ${e?.text}`, e)
                }
            }
            async function T(e) {
                try {
                    let t = o.stringify(),
                        n = null != void 0 ? await new Promise(e => null.getSystemLog(e)) : "",
                        r = await (0, c.getPushNotificationLogs)().then(e => (0, c.serializePushNotificationLogs)(e, !0)),
                        i = t.length + n.length + r.length;
                    if (i > 9437184) {
                        let e = 1 - 9437184 / i;
                        t = t.slice(t.length - Math.floor(t.length * e)), n = n.slice(n.length - Math.floor(n.length * e)), r = r.slice(r.length - Math.floor(r.length * e))
                    }
                    let s = null != void 0 ? null.AppOpenedTimestamp : null,
                        u = `
    ${(0,h.default)(s)}

    Metadata:
    ${JSON.stringify((0,f.default)(),void 0,2)}

    ChannelStore:
    ${JSON.stringify(l.default.getDebugInfo(),void 0,2)}

    Logs:
    ${t}

    System logs:
    ${n}

    Push Notifications:
    ${r}
    `;
                    o.clear();
                    let d = p.Endpoints.DEBUG_LOG(e, "discord_app_logs");
                    await a.default.post({
                        url: d,
                        body: u,
                        retries: 3,
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        oldFormErrors: !0
                    })
                } catch (e) {
                    g.error(`uploadAppLogFiles: upload app log files error ${e.message}`)
                }
            }
        },
        105259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPushNotificationLogs: function() {
                    return l
                },
                serializePushNotificationLogs: function() {
                    return s
                }
            });
            var a = n("986329"),
                r = n("262047"),
                i = n("467006");

            function s(e, t) {
                if (0 === e.length) return "No logs";
                let n = a.default.get(i.DEVICE_TOKEN),
                    r = a.default.get(i.DEVICE_VOIP_TOKEN),
                    s = null != n ? `Device Token: ${n}` : "",
                    l = null != r ? `Device Voip Token: ${r}` : "",
                    u = e.map(e => {
                        let n = e.silent ? "Silent" : "Displayed",
                            a = t ? `${e.channelId} - ${e.messageId}` : `${e.title} - ${e.content}`;
                        return `${new Date(e.receivedTimestamp).toISOString()} [${e.type}] ${n} - ${a}`
                    }).join("\n");
                return `${s}
${l}

${u}`
            }
            async function l() {
                let e = r.default.getId();
                return null != void 0 ? await null.getPushNotificationLogs(e).then(e => JSON.parse(e).pushNotifications ?? []) : []
            }
        },
        20569: function(e, t, n) {
            "use strict";

            function a() {
                return {
                    logsUploaded: new Date().toISOString(),
                    releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
                    buildNumber: "271114",
                    versionHash: "66242f0893a62b8d3f0dee636339a8de674006c6"
                }
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        331005: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("653041");
            var a = n("392711"),
                r = n.n(a),
                i = n("990835"),
                s = n("644829");

            function l(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                return i.default.logGroups.map(a => {
                    let {
                        index: i,
                        timestamp: l,
                        logs: o,
                        nativeLogs: d,
                        serverTrace: c
                    } = a, f = 0 === i ? r().find(o, e => e.log.indexOf("Logger loaded") >= 0)?.timestamp ?? e : l, h = function(e, t) {
                        let n = (function(e) {
                                let t = [];
                                for (let n = 0; n < e.length; n++) {
                                    let a = e[n],
                                        r = e[n + 1];
                                    null != r && r.log === a.log.replace("Start ", "Finish ") ? (r.log = r.log.replace("Finish ", ""), t.push(r), n++) : t.push(a)
                                }
                                return t
                            })(e).map(e => {
                                let n = null == e.timestamp ? "" : ((e.timestamp - t) / 1e3).toFixed(3);
                                return {
                                    totalTime: n,
                                    deltaTime: null == e.delta ? "" : String(Math.round(e.delta)),
                                    log: `${e.emoji.length>0?`${e.emoji} `:""}${e.prefix}${e.log}
`
                                }
                            }),
                            a = r().max(n.map(e => e.totalTime.length)) ?? 0,
                            i = r().max(n.map(e => e.deltaTime.length)) ?? 0;
                        return n.map(e => {
                            let {
                                totalTime: t,
                                deltaTime: n,
                                log: s
                            } = e;
                            return `${r().padStart(t,a)} ${r().padStart(n,i)} ${s}`
                        }).join("")
                    }(function(e, t, n, a) {
                        e = e.slice();
                        let r = new Set(t.map(u)),
                            i = "",
                            s = [];
                        t.forEach(t => {
                            let a = u(t),
                                l = 0,
                                o = n || !t.autoGenerated,
                                d = a.startsWith("Start ") && !a.includes("RUN_JS_BUNDLE") && r.has(a.replace("Start ", "Finish "));
                            if (a.startsWith("Finish ") && !a.includes("RUN_JS_BUNDLE") && r.has(a.replace("Finish ", "Start "))) {
                                i = i.substring(2);
                                let e = s.pop();
                                null != e && (l = t.timestamp - e.timestamp, o = o || l > 5 && ! function(e) {
                                    return ["GET_CONSTANTS", "CONVERT_CONSTANTS"].some(t => e.includes(t))
                                }(a), e.shouldKeep = e.shouldKeep || o)
                            }
                            let c = {
                                emoji: "☕",
                                timestamp: t.timestamp,
                                delta: l > 0 ? l : void 0,
                                prefix: i,
                                log: a,
                                shouldKeep: o
                            };
                            (function(e, t) {
                                let n = 0;
                                for (; n < e.length; n++) {
                                    let {
                                        timestamp: a
                                    } = e[n];
                                    if (null != a && a > t.timestamp) break
                                }
                                e.splice(n, 0, t)
                            })(e, c), d && (i += "| ", s.push(c))
                        });
                        let l = !1;
                        return e.filter(e => !(l && e.log.includes("↪")) && !(l = !a && e.emoji === `🎨` || !1 === e.shouldKeep))
                    }(o, d, t, n), f), p = `Trace #${i+1} started ${(0,s.getTimestampString)(l)}
${h}`;
                    return null != c && (p += `
 Server trace for trace #${i+1}${c}`), p
                }).join("\n\n")
            }

            function u(e) {
                let t = null == e.tag ? e.label : `${e.label} ${e.tag}`;
                return t.includes("_START") && (t = "Start " + t.replace("_START", "")), t.includes("_END") && (t = "Finish " + t.replace("_END", "")), t
            }
        },
        587650: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initSentry: function() {
                    return u
                },
                usesClientMods: function() {
                    return s
                }
            });
            var a = n("887117"),
                r = n("705899");
            let i = ["oppobrowser", "realmebrowser", "heytapbrowser"];

            function s() {
                let e = window;
                return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox
            }
            let l = (0, r.filterThrottle)({
                maxBudgetMinute: 1,
                maxBudgetHour: 3
            });

            function u() {
                a.init({
                    tunnel: "/error-reporting-proxy/web",
                    dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
                    autoSessionTracking: !1,
                    environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                    release: "discord_web-66242f0893a62b8d3f0dee636339a8de674006c6",
                    beforeSend: e => {
                        var t, n;
                        return !(null != (t = e).exception && null != t.exception.values && t.exception.values.every(e => null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || i.some(e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !s() && !("Aborted" === (n = e).message || "cancel captcha" === n.message) && l() ? e : null
                    },
                    integrations: [new a.Integrations.GlobalHandlers({
                        onerror: !0,
                        onunhandledrejection: !0
                    }), new a.Integrations.Breadcrumbs({
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0
                    })],
                    ignoreErrors: ["EADDRINUSE", "BetterDiscord", "EnhancedDiscord", "Powercord", "RecipeWebview", "jQuery", "localStorage", "has already been declared", "Cannot call hover while not dragging.", "Cannot call beginDrag while dragging.", "getHostNode", "setupCSS", "on missing remote object", "ChunkLoadError", "Cannot find module 'discord_utils'", "Failed to setup Krisp module", "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", "Non-Error promise rejection captured with keys:", "Request has been terminated", "Cannot resolve a Slate point from DOM point", "Failed to fetch", "no suitable image found", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", "The play() request was interrupted", "could not play audio", "notosans-400-normalitalic"],
                    denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
                }), a.setTag("buildNumber", "271114"), a.setTag("builtAt", String("1709238474917"));
                let e = window.GLOBAL_ENV.SENTRY_TAGS;
                if (null != e && "object" == typeof e)
                    for (let t in e) a.setTag(t, e[t]);
                return a
            }
        },
        300102: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("389570");

            function r(e) {
                return e.supportsInApp(a.Features.VIDEO) && e.supportsInApp(a.Features.DESKTOP_CAPTURE)
            }
        },
        883319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("406789"),
                r = n("315308");

            function i(e, t, n, i, s) {
                for (let l of r.ApplicationStreamSettingRequirements)
                    if ((null == l.preset || e === l.preset) && t === l.resolution && n === l.fps && (0, a.default)(l, i, s)) return !0;
                return !1
            }
        },
        406789: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("965981"),
                r = n("488867"),
                i = n("171168");

            function s(e, t, n) {
                if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
                let s = !1;
                return null != e.quality && (e.quality === i.StreamQualities.HIGH_STREAMING_QUALITY ? s = s || r.default.canStreamQuality(r.default.StreamQuality.HIGH, t) : e.quality === i.StreamQualities.MID_STREAMING_QUALITY && (s = s || r.default.canStreamQuality(r.default.StreamQuality.MID, t))), null != e.guildPremiumTier && (s = s || (0, a.isGuildBoostedAtLeast)(n, e.guildPremiumTier)), s
            }
        },
        186477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("107888"),
                r = n("467006"),
                i = n("30175");

            function s(e, t, n, s) {
                if (e.state === r.ApplicationStreamStates.RECONNECTING) return {
                    mainText: i.default.Messages.STREAM_RECONNECTING_ERROR,
                    supportingText: i.default.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
                };
                if (e.state === r.ApplicationStreamStates.PAUSED) return n ? {
                    mainText: i.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: i.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS
                } : {
                    mainText: i.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: i.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
                        username: a.default.getName(e.guildId, e.channelId, t)
                    })
                };
                return s ? {
                    mainText: i.default.Messages.STREAM_PREVIEW_PAUSED,
                    supportingText: i.default.Messages.STREAM_PREVIEW_PAUSED_SUBTEXT
                } : null
            }
        },
        696964: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("501769"),
                r = n("432056");

            function i(e) {
                a.isPlatformEmbedded ? r.default.focus(e) : window.focus()
            }
        },
        66214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("221083"),
                r = n("116395"),
                i = n("262047"),
                s = n("188304");

            function l(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == e) return;
                let {
                    streamType: n,
                    guildId: l,
                    channelId: u,
                    ownerId: o
                } = e, d = (0, s.encodeStreamKey)({
                    streamType: n,
                    guildId: l,
                    channelId: u,
                    ownerId: o
                });
                o === i.default.getId() && a.default.setGoLiveSource(null), r.stopStream(d, t)
            }
        },
        500824: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("312916"),
                r = n("963694"),
                i = n("361733"),
                s = n("871831"),
                l = n("658841");
            let u = null,
                o = () => {
                    let e = i.default.getCommunicationDisabledUserMap();
                    Object.keys(e).forEach(t => {
                        let n = (0, i.getGuildIdFromCommunicationDisabledUserKey)(t),
                            a = (0, i.getUserIdFromCommunicationDisabledUserKey)(t),
                            r = e[t];
                        !(0, l.isCommunicationDisabled)(r) && d(n, a)
                    })
                },
                d = (e, t) => {
                    let n = i.default.getMember(e, t),
                        r = s.default.getUser(t);
                    if (null == n || null == r || (0, l.isMemberCommunicationDisabled)(n)) return;
                    let u = {
                        ...n,
                        guildId: e,
                        nick: n.nick ?? r.username,
                        avatar: n.avatar ?? void 0,
                        avatarDecoration: null != n.avatarDecoration ? {
                            ...n.avatarDecoration
                        } : void 0,
                        premiumSince: n.premiumSince ?? void 0,
                        isPending: n.isPending ?? !1,
                        user: {
                            ...r,
                            email: r.email ?? void 0,
                            phone: r.phone ?? void 0
                        },
                        communicationDisabledUntil: null
                    };
                    a.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE",
                        ...u
                    })
                };
            class c extends r.default {
                _initialize() {
                    u = setInterval(() => o(), 1e4)
                }
                _terminate() {
                    clearInterval(u)
                }
                constructor(...e) {
                    super(...e), this.clearGuildMemberTimeout = d
                }
            }
            var f = new c
        },
        477512: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                isVoiceUserGameActivityEnabled: function() {
                    return i
                },
                useIsVoiceUserGameActivityEnabled: function() {
                    return r
                }
            });
            let a = (0, n("516086").createExperiment)({
                kind: "user",
                id: "2024-01_voice_user_game_activity",
                label: "Voice User Game Activity",
                defaultConfig: {
                    showGameIcon: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show game icon next to the Voice User in VC",
                    config: {
                        showGameIcon: !0
                    }
                }]
            });

            function r(e, t) {
                let {
                    showGameIcon: n
                } = a.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: t
                });
                return n
            }

            function i(e, t) {
                let {
                    showGameIcon: n
                } = a.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: t
                });
                return n
            }
            var s = a
        },
        556469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearHangStatus: function() {
                    return c
                },
                updateCustomHangStatus: function() {
                    return d
                },
                updateHangStatus: function() {
                    return o
                }
            });
            var a = n("312916"),
                r = n("731865"),
                i = n("407807"),
                s = n("232733"),
                l = n("328470"),
                u = n("467006");

            function o(e, t) {
                if (null == e) {
                    c(t);
                    return
                }
                a.default.dispatch({
                    type: "UPDATE_HANG_STATUS",
                    status: e,
                    saveAsDefault: t
                }), l.default.track(u.AnalyticEvents.SET_HANG_STATUS, {
                    status_type: e,
                    channel_id: s.default.getVoiceChannelId(),
                    guild_id: r.default.getChannel(s.default.getVoiceChannelId())?.guild_id,
                    media_session_id: i.default.getMediaSessionId()
                })
            }

            function d(e, t, n) {
                if ("" === e) {
                    c(n);
                    return
                }
                a.default.dispatch({
                    type: "UPDATE_HANG_STATUS_CUSTOM",
                    emoji: t,
                    status: e,
                    saveAsDefault: n
                }), l.default.track(u.AnalyticEvents.SET_HANG_STATUS, {
                    status_type: e,
                    channel_id: s.default.getVoiceChannelId(),
                    guild_id: r.default.getChannel(s.default.getVoiceChannelId())?.guild_id,
                    media_session_id: i.default.getMediaSessionId()
                })
            }

            function c(e) {
                a.default.dispatch({
                    type: "CLEAR_HANG_STATUS",
                    saveAsDefault: e
                }), l.default.track(u.AnalyticEvents.CLEAR_HANG_STATUS, {
                    channel_id: s.default.getVoiceChannelId(),
                    guild_id: r.default.getChannel(s.default.getVoiceChannelId())?.guild_id,
                    media_session_id: i.default.getMediaSessionId()
                })
            }
        },
        735220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HIGH_FIVE_EMOJIS: function() {
                    return a
                }
            });
            let a = new Set(["\uD83D\uDD90", "✋"])
        },
        732165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("661223"),
                r = n("312916");
            let i = {
                    enabled: !1
                },
                s = {},
                l = {},
                u = !1;
            class o extends a.default.DeviceSettingsStore {
                static #e = this.persistKey = "HighFiveStore";
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
                    u = e.enabled
                }
                getWaitingHighFive(e, t) {
                    return s[e]?.[t]
                }
                getCompletedHighFive(e, t) {
                    return l[e]?.[t]
                }
                getEnabled() {
                    return u
                }
                getUserAgnosticState() {
                    return {
                        enabled: u
                    }
                }
            }
            var d = new o(r.default, {
                HIGH_FIVE_QUEUE: function(e) {
                    let {
                        userId: t,
                        channelId: n,
                        emoji: a
                    } = e;
                    s[n] = {
                        ...s[n],
                        [t]: a
                    }
                },
                HIGH_FIVE_REMOVE: function(e) {
                    let {
                        userId: t,
                        channelId: n
                    } = e, a = s[n];
                    if (null == a) return !1;
                    delete a[t]
                },
                HIGH_FIVE_SET_ENABLED: function(e) {
                    let {
                        enabled: t
                    } = e;
                    u = t
                },
                HIGH_FIVE_COMPLETE: function(e) {
                    let {
                        completingEmoji: t,
                        completingUserId: n,
                        waitingUserId: a,
                        channelId: r
                    } = e, i = s[r] ?? {}, u = i[a];
                    if (delete i[a], null == u) return !1;
                    l[r] = {
                        ...l[r],
                        [a]: [u, t],
                        [n]: [t, u]
                    }
                },
                HIGH_FIVE_COMPLETE_CLEAR: function(e) {
                    let {
                        firstUserId: t,
                        secondUserId: n,
                        channelId: a
                    } = e, r = l[a] ?? {};
                    delete r[t], delete r[n]
                }
            })
        },
        575301: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("735220");
            let r = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

            function i(e) {
                return a.HIGH_FIVE_EMOJIS.has(e.replace(r, ""))
            }
        },
        254890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isRTCConnectedInHub: function() {
                    return u
                },
                useConnectedInCurrentHub: function() {
                    return o
                }
            });
            var a = n("661223"),
                r = n("731865"),
                i = n("327271"),
                s = n("232733"),
                l = n("467006");
            let u = () => {
                    let e = s.default.getVoiceChannelId();
                    if (null == e) return !1;
                    let t = r.default.getChannel(e);
                    if (null == t) return !1;
                    let n = i.default.getGuild(t.getGuildId());
                    return null != n && n.hasFeature(l.GuildFeatures.HUB)
                },
                o = e => (0, a.useStateFromStores)([s.default, r.default, i.default], () => {
                    let t = s.default.getVoiceChannelId();
                    if (null == t) return !1;
                    let n = r.default.getChannel(t);
                    if (null == n) return !1;
                    let a = i.default.getGuild(n.getGuildId());
                    return null != a && a.id === e
                })
        },
        637023: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return $
                }
            });
            var r = n("266067"),
                i = n("388684"),
                s = n("986329"),
                l = n("312916"),
                u = n("992888"),
                o = n("389920"),
                d = n("841708"),
                c = n("963694"),
                f = n("237091"),
                h = n("706608"),
                p = n("605369"),
                g = n("775822"),
                E = n("475232"),
                C = n("731865"),
                m = n("327271"),
                S = n("417223"),
                _ = n("232733"),
                T = n("632706"),
                I = n("152551"),
                A = n("163442"),
                v = n("409913"),
                N = n("467006"),
                L = n("551835"),
                M = n("30175");
            let y = new i.default("MessageManager");

            function R(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: r,
                    forceFetch: i,
                    isPreload: l,
                    jumpType: u,
                    skipLocalFetch: c,
                    logFailures: p
                } = e;
                if (null == n) {
                    p && y.log("Skipping fetch because channelId is null");
                    return
                }
                if ((0, L.isStaticChannelRoute)(n)) {
                    p && y.log("Skipping fetch because channelId is a static route");
                    return
                }
                let g = C.default.getChannel(n);
                if (g?.type === N.ChannelTypes.GUILD_STORE || g?.type != null && N.ChannelTypesSets.GUILD_THREADS_ONLY.has(g.type)) {
                    p && y.log("Skipping fetch because channel is a forum/store");
                    return
                }
                let E = f.default.getOrCreate(n);
                A.AttachmentLinkRefreshExperiment.getCurrentConfig({
                    location: "fetch_messages"
                }).enabled && E.some(v.messageHasExpiredAttachmentUrl) && (y.log("Found expired attachment link, clearing messages"), f.default.clear(n), E = f.default.getOrCreate(n)), null != E.jumpTargetId && null == r && (E = E.mutate({
                    jumpTargetId: null,
                    jumped: !1,
                    jumpType: d.JumpTypes.ANIMATED
                }), f.default.commit(E)), null != E.focusTargetId && null == r && (E = E.mutate({
                    focusTargetId: null
                }), f.default.commit(E));
                let _ = i;
                if (!l || h.default.isConnected() || E.loadingMore ? E.loadingMore || E.ready && !E.cached ? null != r ? _ = !0 : p && y.log("Skipping fetch because no other conditions matched") : null == t || null != m.default.getGuild(t) ? _ = !0 : p && y.log("Skipping fetch we are connected and have loaded messages") : _ = !0, _) {
                    if (f.default.commit(E.mutate({
                            loadingMore: !0
                        })), null != r) o.default.jumpToMessage({
                        channelId: n,
                        messageId: r,
                        flash: !0,
                        isPreload: l,
                        skipLocalFetch: c,
                        jumpType: u
                    });
                    else if (g?.isThread() && function(e) {
                            if (S.default.hasOpenedThread(e)) return !1;
                            if (null == a && (a = s.default.get(x, {}) ?? {}), e in a) return !1;
                            a[e] = Date.now();
                            let t = Date.now() - O;
                            for (let e in a) a[e] < t && delete a[e];
                            return s.default.set(x, a), !0
                        }(n)) y.log(`Jumping to start of thread ${g.id}`), o.default.fetchMessages({
                        channelId: n,
                        limit: N.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: l,
                        skipLocalFetch: c
                    });
                    else if (g?.isThread() && S.default.hasTrackedUnread(g.id) && !E.ready) {
                        let e = S.default.getTrackedAckMessageId(g.id);
                        y.log(`Jumping to most recent message in thread ${g.id} - ${e}`), o.default.fetchMessages({
                            channelId: n,
                            limit: N.MAX_MESSAGES_PER_CHANNEL,
                            jump: {
                                messageId: e,
                                flash: !1,
                                offset: 1
                            },
                            isPreload: l,
                            skipLocalFetch: c
                        })
                    } else o.default.fetchMessages({
                        channelId: n,
                        limit: N.MAX_MESSAGES_PER_CHANNEL,
                        isPreload: l,
                        skipLocalFetch: c,
                        jump: {
                            jumpType: d.JumpTypes.ANIMATED
                        }
                    })
                }
            }
            let O = 90 * I.default.Millis.DAY,
                x = "viewedThreadIds";

            function b() {
                let e = _.default.getChannelId();
                if (null != e) {
                    let t = C.default.getChannel(e);
                    if (null != t) {
                        let e = (0, r.matchPath)(location.pathname, {
                            path: N.Routes.CHANNEL(":guild", ":channel", ":message"),
                            exact: !0
                        });
                        R({
                            guildId: t.getGuildId(),
                            channelId: t.id,
                            messageId: e?.params?.message
                        }), B(t.getGuildId(), t.id)
                    }
                }
            }

            function D() {
                let {
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = _.default.getChannelId();
                if (null != a) {
                    let r = C.default.getChannel(a);
                    null != r ? ((0, g.isTextChannel)(r.type) ? R({
                        guildId: r.getGuildId(),
                        channelId: r.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    }) : n && y.log("Skipping fetch because the selected channel is not a text channel"), B(r.getGuildId(), r.id)) : n && y.log("Skipping fetch because channel is null")
                } else n && y.log("Skipping fetch because there is no selected channel")
            }

            function P(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: r
                } = e;
                R({
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: r
                }), B(t, n)
            }

            function w(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                R({
                    guildId: t,
                    channelId: n
                })
            }

            function B(e, t) {
                let n = E.default.getCurrentSidebarChannelId(t);
                if (null != n) R({
                    guildId: e,
                    channelId: n,
                    messageId: E.default.getCurrentSidebarMessageId(t)
                })
            }

            function U() {
                let e = _.default.getChannelId(),
                    t = T.default.getGuildId();
                if (null == t || null == e) return;
                let n = E.default.getSidebarState(e);
                n?.type !== p.SidebarType.VIEW_CHANNEL && B(t, e)
            }

            function j(e) {
                let {
                    guildId: t,
                    channelId: n,
                    context: a
                } = e;
                a === N.CURRENT_APP_CONTEXT && (R({
                    guildId: t,
                    channelId: n
                }), B(t, n))
            }

            function V(e) {
                let {
                    channel: t,
                    messageId: n
                } = e, a = t.guild_id;
                null != a && _.default.getChannelId(a) === t.id && R({
                    guildId: a,
                    channelId: t.id,
                    messageId: n
                })
            }

            function F(e) {
                let {
                    channelId: t
                } = e;
                o.default.fetchMessages({
                    channelId: t,
                    limit: N.MAX_MESSAGES_PER_CHANNEL
                })
            }

            function H(e) {
                let {
                    response: t
                } = e;
                if (null == t || null == t.body) return null;
                if (t.body.code === N.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
                    let e = t.body.retry_after;
                    null != e && u.default.show({
                        title: M.default.Messages.RATE_LIMITED,
                        body: M.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                            retryAfterMinutes: Math.ceil(e / 60)
                        })
                    })
                }
            }
            let G = {};

            function k(e) {
                let {
                    channelId: t,
                    jump: n,
                    isStale: a,
                    isPreview: r = !1
                } = e;
                if (r) return;
                let i = G[t] ?? 0;
                if (Date.now() - i < 10 * I.default.Millis.SECOND) return;
                G[t] = Date.now();
                let s = _.default.getChannelId(),
                    l = E.default.getCurrentSidebarChannelId(s),
                    u = t === s || t === l;
                a && h.default.isConnected() && u && o.default.fetchMessages({
                    channelId: t,
                    limit: N.MAX_MESSAGES_PER_CHANNEL,
                    jump: n
                })
            }

            function W(e) {
                let {
                    channelId: t,
                    messageRecord: n
                } = e;
                null != n && l.default.dispatch({
                    type: "MESSAGE_SEND_FAILED",
                    channelId: t,
                    messageId: n.id
                })
            }

            function K(e) {
                let {
                    state: t
                } = e;
                if ("active" !== t) return !1;
                let n = _.default.getChannelId();
                if (null == n) return !1;
                o.default.fetchNewLocalMessages(n, N.MAX_MESSAGES_PER_CHANNEL)
            }
            class Y extends c.default {
                _initialize() {
                    l.default.subscribe("CONNECTION_OPEN", b)
                }
                _terminate() {
                    l.default.unsubscribe("CONNECTION_OPEN", b)
                }
                constructor(...e) {
                    super(...e), this.fetchMessages = R, this.loadSelectedChannelIfNecessary = D, this.stores = new Map().set(E.default, U), this.actions = {
                        APP_STATE_UPDATE: K,
                        OVERLAY_INITIALIZE: b,
                        CHANNEL_SELECT: P,
                        VOICE_CHANNEL_SELECT: w,
                        THREAD_CREATE: V,
                        THREAD_LIST_SYNC: () => D(),
                        CHANNEL_CREATE: V,
                        CHANNEL_PRELOAD: j,
                        THREAD_CREATE_LOCAL: F,
                        GUILD_CREATE: () => D(),
                        MESSAGE_END_EDIT: H,
                        LOAD_MESSAGES_SUCCESS: k,
                        UPLOAD_FAIL: W,
                        CHANNEL_DELETE: () => D(),
                        THREAD_DELETE: () => D()
                    }
                }
            }
            var $ = new Y
        },
        189950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningFeedbackTypes: function() {
                    return s
                },
                SafetyWarningTypes: function() {
                    return i
                },
                default: function() {
                    return C
                }
            });
            var a, r, i, s, l = n("661223"),
                u = n("312916"),
                o = n("731865");
            let d = 5 * n("152551").default.Millis.SECOND;
            (a = i || (i = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", a[a.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", a[a.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (r = s || (s = {}))[r.UPVOTE = 0] = "UPVOTE", r[r.DOWNVOTE = 1] = "DOWNVOTE";
            let c = [],
                f = {},
                h = new Set;

            function p(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (f[e.id] = t, t.some(e => {
                    var t;
                    return (2 === (t = e).type || 3 === t.type) && null != e.dismiss_timestamp && ! function(e) {
                        return new Date(e).getTime() > Date.now() - d
                    }(e.dismiss_timestamp)
                }) ? h.add(e.id) : h.delete(e.id)), null == t && (null != f[e.id] && delete f[e.id], h.delete(e.id))
            }

            function g() {
                f = {}, Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
                    p(e)
                })
            }
            class E extends l.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                getChannelSafetyWarning(e, t) {
                    return f[e]?.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    return f[e] ?? c
                }
                hasShownInitialTooltipForChannel(e) {
                    return h.has(e)
                }
            }
            var C = new E(u.default, {
                CHANNEL_CREATE: function(e) {
                    p(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    null != f[t.id] && delete f[t.id], h.delete(t.id)
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        p(e)
                    })
                },
                CONNECTION_OPEN: g,
                CONNECTION_OPEN_SUPPLEMENTAL: g,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: a
                    } = e, r = f[t];
                    null != r && (f[t] = r.map(e => e.id === n ? {
                        ...e,
                        feedback_type: a
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, n = f[t];
                    h.delete(t), null != n && (f[t] = n.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: n
                    } = e, a = f[t];
                    if (null == a) return;
                    let r = new Date().toISOString();
                    f[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: r
                    } : e)
                },
                ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function(e) {
                    let {
                        channelId: t
                    } = e;
                    h.add(t)
                }
            })
        },
        216412: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isEligibleForInappropriateConversationWarning: function() {
                    return s
                },
                useIsEligibleForInappropriateConversationWarning: function() {
                    return l
                }
            });
            var a = n("516086");
            let r = (0, a.createExperiment)({
                    kind: "user",
                    id: "2024-01_inappropriate_conversation_warning",
                    label: "Inappropriate Conversation Warning",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Inappropriate Conversation Warning",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = (0, a.createExperiment)({
                    kind: "user",
                    id: "2024-01_inappropriate_conversation_warning_staff_bypass",
                    label: "Inappropriate Conversation Warning Staff Bypass",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Inappropriate Conversation Warning Staff Bypass",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function s(e) {
                let {
                    location: t,
                    autoTrackExposure: n = !1
                } = e, {
                    enabled: a
                } = r.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: n
                }), {
                    enabled: s
                } = i.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: n
                });
                return a || s
            }

            function l(e) {
                let {
                    location: t,
                    autoTrackExposure: n = !1
                } = e, {
                    enabled: a
                } = r.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n
                }), {
                    enabled: s
                } = i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n
                });
                return a || s
            }
        },
        234450: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useActualStageSpeakerCount: function() {
                    return d
                },
                useSortedRequestToSpeakParticipants: function() {
                    return o
                },
                useStageParticipants: function() {
                    return l
                },
                useStageParticipantsCount: function() {
                    return u
                }
            });
            var a = n("661223"),
                r = n("689028"),
                i = n("65435"),
                s = n("146433");

            function l(e, t) {
                let [n] = (0, a.useStateFromStores)([i.default], () => [i.default.getMutableParticipants(e, t), i.default.getParticipantsVersion(e)], [e, t], r.isVersionEqual);
                return n
            }

            function u(e, t) {
                return (0, a.useStateFromStores)([i.default], () => i.default.getParticipantCount(e, t), [e, t])
            }

            function o(e) {
                let [t] = (0, a.useStateFromStores)([i.default], () => [i.default.getMutableRequestToSpeakParticipants(e), i.default.getRequestToSpeakParticipantsVersion(e)], [e], r.isVersionEqual);
                return t
            }

            function d(e) {
                return (0, a.useStateFromStores)([i.default], () => i.default.getMutableParticipants(e, s.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === s.StageChannelParticipantTypes.VOICE).length, [e])
            }
        },
        118584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                },
                shouldShowStageMusicMuteButton: function() {
                    return _
                },
                useShowStageMusicMuteButton: function() {
                    return S
                }
            });
            var a = n("661223"),
                r = n("963694"),
                i = n("731865"),
                s = n("386130"),
                l = n("232733"),
                u = n("642174"),
                o = n("552091"),
                d = n("65435"),
                c = n("234450"),
                f = n("146433"),
                h = n("120637"),
                p = n("925427");
            let g = e => e / 400,
                E = !1,
                C = (0, o.createSound)("stage_waiting", "stage_waiting", g(s.default.getOutputVolume()));

            function m() {
                let e = l.default.getVoiceChannelId();
                if (null == e) {
                    C.stop(), E = !1;
                    return
                }
                let t = i.default.getChannel(e);
                if (!t?.isGuildStageVoice() || s.default.isSelfDeaf()) {
                    C.stop(), E = !1;
                    return
                }
                if (p.default.shouldPlay()) {
                    C.volume = g(s.default.getOutputVolume()), C.loop(), E = !0;
                    return
                }
                if (h.default.isLive(e)) {
                    C.stop(), E = !1;
                    return
                }
                if (p.default.isMuted()) {
                    C.pause(), E = !1;
                    return
                }
                let n = null != Object.values(u.default.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
                n || E ? n && (C.pause(), E = !1) : (C.volume = g(s.default.getOutputVolume()), C.loop(), E = !0)
            }

            function S(e) {
                let t = (0, a.useStateFromStores)([l.default], () => l.default.getVoiceChannelId() === e),
                    n = null != (0, c.useStageParticipants)(e, f.StageChannelParticipantNamedIndex.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
                    r = (0, a.useStateFromStores)([h.default], () => h.default.getStageInstanceByChannel(e));
                return t && null == r && !n
            }

            function _(e) {
                let t = l.default.getVoiceChannelId() === e,
                    n = null != d.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
                    a = h.default.getStageInstanceByChannel(e);
                return t && null == a && !n
            }
            class T extends r.default {
                handleVoiceChannelSelect(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null != t) {
                        let e = i.default.getChannel(t);
                        e?.isGuildStageVoice() ? m() : (C.stop(), E = !1)
                    } else C.stop(), E = !1
                }
                handleLogout() {
                    C.stop(), E = !1
                }
                handlePlay(e) {
                    let {
                        play: t
                    } = e;
                    t ? m() : (C.pause(), E = !1)
                }
                handleMute(e) {
                    let {
                        muted: t
                    } = e;
                    t ? (C.pause(), E = !1) : m()
                }
                handleVoiceStateUpdates() {
                    m()
                }
                handleSetOutputVolume(e) {
                    let {
                        volume: t
                    } = e;
                    C.volume = g(t)
                }
                handleToggleSelfDeaf() {
                    m()
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                        LOGOUT: this.handleLogout,
                        STAGE_MUSIC_MUTE: this.handleMute,
                        STAGE_MUSIC_PLAY: this.handlePlay,
                        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                        AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
                        AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
                    }
                }
            }
            var I = new T
        },
        925427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("661223"),
                r = n("312916");
            let i = !1,
                s = !1;
            class l extends a.default.DeviceSettingsStore {
                static #e = this.displayName = "StageMusicStore";
                static #t = this.persistKey = "StageMusicStore";
                initialize(e) {
                    null != e && (i = e)
                }
                isMuted() {
                    return i
                }
                shouldPlay() {
                    return s
                }
                getUserAgnosticState() {
                    return i
                }
            }
            var u = new l(r.default, {
                STAGE_MUSIC_MUTE: function(e) {
                    let {
                        muted: t
                    } = e;
                    i = t, s = !1
                },
                STAGE_MUSIC_PLAY: function(e) {
                    let {
                        play: t
                    } = e;
                    s = t
                },
                VOICE_CHANNEL_SELECT: function() {
                    s = !1
                }
            })
        },
        97238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("838239"),
                i = e => {
                    let {
                        children: t,
                        shouldAnimate: n
                    } = e;
                    return n ? (0, a.jsx)("div", {
                        className: r.outerContainer,
                        children: (0, a.jsx)("div", {
                            className: r.innerContainer,
                            children: t
                        })
                    }) : t
                }
        },
        832016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("661223"),
                i = n("24135"),
                s = n("329420"),
                l = n("546435"),
                u = n("422557"),
                o = n("293377"),
                d = n("477815");

            function c(e) {
                let {
                    children: t
                } = e, n = (0, r.useStateFromStores)([o.default], () => o.default.theme), c = (0, u.useInMainTabsExperiment)(), f = (0, r.useStateFromStores)([l.default], () => l.default.gradientPreset), {
                    saturation: h,
                    contrast: p
                } = (0, r.useStateFromStoresObject)([s.default], () => ({
                    saturation: s.default.saturation,
                    contrast: s.default.contrast
                })), g = 0;
                return c && (g = (0, i.setThemeFlag)(g, i.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), null != f && c && (g = f.theme === d.ThemeTypes.LIGHT ? (0, i.setThemeFlag)(g, i.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, i.setThemeFlag)(g, i.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== h && (g = (0, i.setThemeFlag)(g, i.ThemeContextFlags.REDUCE_SATURATION_ENABLED)), (0, a.jsx)(i.RootThemeContextProvider, {
                    theme: n,
                    flags: g,
                    saturation: h,
                    contrast: p,
                    children: t
                })
            }
        },
        506992: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                getVideoPermission: function() {
                    return u
                }
            });
            var a = n("661223"),
                r = n("188699"),
                i = n("327271"),
                s = n("197905");

            function l(e) {
                return (0, a.useStateFromStores)([i.default, s.default], () => e.isPrivate() || (0, r.canStreamInChannel)(e, i.default, s.default, !1), [e])
            }

            function u(e) {
                return e.isPrivate() || (0, r.canStreamInChannel)(e, i.default, s.default, !1)
            }
        },
        781799: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getVideoButtonLabel: function() {
                    return i
                }
            });
            var a = n("467006"),
                r = n("30175");

            function i(e) {
                let {
                    enabled: t,
                    join: n,
                    channel: i,
                    cameraUnavailable: s,
                    hasPermission: l,
                    channelLimit: u = -1,
                    channelLimitReached: o = !1
                } = e, d = t ? r.default.Messages.CAMERA_OFF : r.default.Messages.CAMERA_ON;
                return n && (d = i?.isManaged() || !i?.isPrivate() ? r.default.Messages.CONNECT_TO_VIDEO : r.default.Messages.JOIN_VIDEO_CALL), s && (d = r.default.Messages.CAMERA_UNAVAILABLE), !l && (d = r.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), o && !t && (d = i?.isGuildStageVoice() ? u >= a.MAX_STAGE_VIDEO_USER_LIMIT_TIER3 ? r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : r.default.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
                    limit: u
                })), d
            }
        },
        43286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("803997"),
                s = n.n(i),
                l = n("90530"),
                u = r.forwardRef(function(e, t) {
                    let {
                        children: n,
                        className: r,
                        style: i,
                        noBorder: u = !1,
                        participantUserId: o
                    } = e;
                    return (0, a.jsx)("div", {
                        className: s()(r, l.tile, {
                            [l.noBorder]: u
                        }),
                        style: i,
                        ref: t,
                        "data-selenium-video-tile": o,
                        children: n
                    })
                })
        },
        976028: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CallTileCTA: function() {
                    return u
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("803997"),
                i = n.n(r),
                s = n("974328"),
                l = n("15746");

            function u(e) {
                let {
                    children: t,
                    onClick: n,
                    className: r,
                    tooltip: u
                } = e;
                return (0, a.jsx)(s.Tooltip, {
                    text: u,
                    children: e => {
                        let {
                            onClick: u,
                            ...o
                        } = e;
                        return (0, a.jsx)(s.Button, {
                            ...o,
                            onClick: e => {
                                n?.(e), u?.()
                            },
                            innerClassName: l.buttonReset,
                            color: i()(l.cta, r),
                            size: s.Button.Sizes.MIN,
                            children: t
                        })
                    }
                })
            }
        },
        240108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                },
                getSizeForWidth: function() {
                    return o
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("803997"),
                i = n.n(r),
                s = n("974328"),
                l = n("164323"),
                u = n("123116");

            function o(e) {
                return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
            }

            function d(e) {
                let {
                    onCTAClick: t,
                    callToAction: n,
                    header: r,
                    description: o,
                    size: d,
                    className: c,
                    artURL: f,
                    noArt: h = !1,
                    selected: p = !1
                } = e;
                return (0, a.jsxs)(l.default, {
                    className: c,
                    justify: l.default.Justify.CENTER,
                    align: l.default.Align.CENTER,
                    direction: l.default.Direction.VERTICAL,
                    style: {
                        padding: 4
                    },
                    children: [!h && null != f && (0, a.jsx)("div", {
                        className: i()(u.art, u[d]),
                        style: {
                            backgroundImage: `url(${f})`
                        }
                    }), null != r ? (0, a.jsx)(s.Text, {
                        color: "none",
                        variant: "text-md/semibold",
                        className: u.header,
                        children: r
                    }) : null, null != o ? (0, a.jsx)(s.Text, {
                        color: "none",
                        className: u.description,
                        variant: "text-sm/medium",
                        children: o
                    }) : null, p || null == n ? null : (0, a.jsx)(s.Button, {
                        className: u.outerButton,
                        size: s.Button.Sizes.NONE,
                        color: s.Button.Colors.WHITE,
                        look: s.Button.Looks.BLANK,
                        innerClassName: u.button,
                        onClick: e => {
                            e.stopPropagation(), t?.(e)
                        },
                        children: n
                    })]
                })
            }
        },
        904238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                },
                useOtherStreams: function() {
                    return I
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("661223"),
                i = n("974328"),
                s = n("933439"),
                l = n("901365"),
                u = n("84625"),
                o = n("991095"),
                d = n("66214"),
                c = n("311545"),
                f = n("386130"),
                h = n("871831"),
                p = n("930232"),
                g = n("450636"),
                E = n("137079"),
                C = n("107888"),
                m = n("501769"),
                S = n("467006"),
                _ = n("389570"),
                T = n("30175");

            function I(e, t, n) {
                let a = (0, r.useStateFromStores)([l.default], () => l.default.getSelectedParticipantId(e.id)),
                    i = (0, r.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]);
                return (0, r.useStateFromStoresArray)([h.default], () => {
                    let a = n.filter(e => e.ownerId !== t?.id).map(t => ({
                        stream: t,
                        username: C.default.getName(e.getGuildId(), e.id, h.default.getUser(t.ownerId))
                    }));
                    return 1 === a.length && a[0].stream.ownerId === i?.ownerId ? [] : a
                }, [e, i, n, t])
            }

            function A(e) {
                let {
                    channel: t,
                    currentUser: n,
                    activeStreams: r,
                    hideSelfOptions: l = !1,
                    showReportOption: c = !1,
                    handleGoLive: h,
                    onClose: C,
                    onSelect: A,
                    appContext: v = S.AppContext.APP
                } = e, N = f.default.supports(_.Features.DESKTOP_CAPTURE_APPLICATIONS), L = r.find(e => e.ownerId === n?.id) ?? null, M = I(t, n, r), y = (0, o.default)(L, v), R = (0, u.default)(L, v, S.NOOP_NULL), O = null == L ? (0, a.jsx)(i.MenuItem, {
                    id: "share-your-screen",
                    label: T.default.Messages.SHARE_YOUR_SCREEN,
                    icon: p.default,
                    action: h
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [m.isPlatformEmbedded ? (0, a.jsx)(i.MenuItem, {
                        id: "stream-settings",
                        label: T.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: y
                    }) : null, c ? R : null, N ? (0, a.jsx)(i.MenuItem, {
                        id: "change-windows",
                        label: T.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                        icon: p.default,
                        action: h
                    }) : null, (0, a.jsx)(i.MenuItem, {
                        id: "stop-streaming",
                        label: T.default.Messages.STOP_STREAMING,
                        icon: g.default,
                        action: () => (0, d.default)(L)
                    })]
                });
                return (0, a.jsx)(s.default, {
                    section: S.AnalyticsSections.CONTEXT_MENU,
                    children: (0, a.jsxs)(i.Menu, {
                        onSelect: A,
                        navId: "manage-streams",
                        onClose: C,
                        "aria-label": null != L ? T.default.Messages.STOP_STREAMING : T.default.Messages.SHARE_YOUR_SCREEN,
                        children: [(0, a.jsx)(i.MenuGroup, {
                            children: M.map(e => {
                                let {
                                    stream: t,
                                    username: n
                                } = e;
                                return (0, a.jsx)(i.MenuItem, {
                                    id: t.ownerId,
                                    label: T.default.Messages.STOP_WATCHING_USER.format({
                                        username: n
                                    }),
                                    icon: E.default,
                                    action: () => (0, d.default)(t)
                                }, `manage-stream-menu${t.ownerId}`)
                            })
                        }), l ? null : O]
                    })
                })
            }
        },
        742163: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("661223"),
                s = n("116395"),
                l = n("188304"),
                u = n("731865"),
                o = n("240108"),
                d = n("30175");
            let c = n("340109");

            function f(e) {
                let {
                    stream: t,
                    width: n,
                    noArt: f = !1,
                    selected: h = !1
                } = e, p = (0, i.useStateFromStores)([u.default], () => u.default.getChannel(t.channelId));
                return r.useEffect(() => {
                    p?.isGuildStageVoice() && (0, s.closeStream)((0, l.encodeStreamKey)(t), !1)
                }, []), (0, a.jsx)(o.default, {
                    artURL: c,
                    noArt: f,
                    selected: h,
                    size: (0, o.getSizeForWidth)(n),
                    header: d.default.Messages.STREAM_ENDED,
                    onCTAClick: () => (0, s.closeStream)((0, l.encodeStreamKey)(t)),
                    callToAction: d.default.Messages.CLOSE_STREAM
                })
            }
        },
        799416: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("116395"),
                i = n("188304"),
                s = n("312630"),
                l = n("240108"),
                u = n("467006"),
                o = n("30175");
            let d = n("66737");

            function c(e) {
                let {
                    stream: t,
                    width: n,
                    selected: c = !1,
                    noArt: f = !1
                } = e;
                return (0, a.jsx)(l.default, {
                    artURL: d,
                    header: o.default.Messages.STREAM_FAILED_TITLE,
                    size: (0, l.getSizeForWidth)(n),
                    noArt: f,
                    selected: c,
                    description: o.default.Messages.STREAM_FAILED_DESCRIPTION.format({
                        helpUrl: s.default.getArticleURL(u.HelpdeskArticles.STREAM_FAILED)
                    }),
                    onCTAClick: () => (0, r.closeStream)((0, i.encodeStreamKey)(t)),
                    callToAction: o.default.Messages.CLOSE_STREAM
                })
            }
        },
        350305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("803997"),
                i = n.n(r),
                s = n("661223"),
                l = n("974328"),
                u = n("116395"),
                o = n("311545"),
                d = n("262047"),
                c = n("834271"),
                f = n("976028"),
                h = n("240108"),
                p = n("30175"),
                g = n("969319");
            let E = n("978538");

            function C(e) {
                let {
                    participant: t,
                    width: n,
                    noArt: r = !1,
                    selected: C = !1
                } = e, m = n < 195, S = (0, s.useStateFromStores)([o.default, d.default], () => o.default.getAllActiveStreams().some(e => {
                    let {
                        ownerId: t
                    } = e;
                    return t !== d.default.getId()
                }));
                return (0, a.jsx)("div", {
                    className: i()(g.content, g.streamHidden, {
                        [g.small]: m
                    }),
                    children: (0, a.jsx)(h.default, {
                        className: g.streamHiddenEmptyState,
                        artURL: E,
                        noArt: r,
                        selected: C,
                        size: (0, h.getSizeForWidth)(n),
                        header: m ? null : p.default.Messages.STREAM_HIDDEN,
                        description: C ? null : (0, a.jsxs)("div", {
                            className: i()(g.streamHiddenCTA, {
                                [g.largePaddingTop]: !m
                            }),
                            children: [(0, a.jsx)(f.CallTileCTA, {
                                isSmall: m,
                                children: (0, a.jsx)(l.Text, {
                                    variant: m ? "text-sm/semibold" : "text-md/semibold",
                                    color: "none",
                                    children: n < 175 ? p.default.Messages.WATCH : p.default.Messages.WATCH_STREAM
                                })
                            }), S ? (0, a.jsx)(f.CallTileCTA, {
                                className: g.addCTA,
                                tooltip: p.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                                onClick: e => {
                                    e.stopPropagation(), (0, u.watchStream)(t.stream, {
                                        forceMultiple: !0
                                    })
                                },
                                isSmall: m,
                                children: (0, a.jsx)(c.default, {
                                    className: g.addStreamIcon
                                })
                            }) : null]
                        })
                    })
                })
            }
        },
        503122: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("974328"),
                i = n("386130"),
                s = n("389570"),
                l = n("30175");

            function u(e) {
                i.default.supports(s.Features.VIDEO) ? (0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("503122@516:552").then(n.bind(n, "312533"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        header: l.default.Messages.CAMERA_UNAVAILABLE,
                        body: l.default.Messages.CAMERA_NO_DEVICE,
                        confirmText: l.default.Messages.OKAY,
                        onConfirm: e
                    })
                }) : (0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("503122@954:990").then(n.bind(n, "312533"));
                    return i => (0, a.jsx)(t, {
                        ...i,
                        header: l.default.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
                        body: l.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                        confirmText: l.default.Messages.DOWNLOAD_APP,
                        onConfirm: () => {
                            e?.(), (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("503122@1454:1518").then(n.bind(n, "984952"));
                                return t => (0, a.jsx)(e, {
                                    source: "Video unsupported browser",
                                    ...t
                                })
                            })
                        }
                    })
                })
            }
        },
        410571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("974328"),
                i = n("30175");

            function s() {
                function e() {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("410571@344:408").then(n.bind(n, "984952"));
                        return t => (0, a.jsx)(e, {
                            source: "Screenshare Unavailable",
                            ...t
                        })
                    })
                }(0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("410571@676:712").then(n.bind(n, "312533"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        header: i.default.Messages.SCREENSHARE_UNAVAILABLE,
                        body: i.default.Messages.SCREENSHARE_UNAVAILABLE_DOWNLOAD_APP,
                        confirmText: i.default.Messages.DOWNLOAD_APP,
                        onConfirm: e
                    })
                })
            }
        },
        158057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("974328"),
                i = n("116395"),
                s = n("883319"),
                l = n("696964"),
                u = n("71132"),
                o = n("327271"),
                d = n("386130"),
                c = n("871831"),
                f = n("501769"),
                h = n("467006"),
                p = n("315308");

            function g(e, t, g) {
                let E = u.default.getWindowOpen(h.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? h.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
                if ((0, l.default)(E), f.isPlatformEmbedded)(0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("158057@1203:1255").then(n.bind(n, "77577"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        guildId: e,
                        analyticsLocation: g
                    })
                });
                else {
                    let n = (0, s.default)(p.ApplicationStreamPresets.PRESET_CUSTOM, p.ApplicationStreamResolutions.RESOLUTION_1080, p.ApplicationStreamFPS.FPS_30, c.default.getCurrentUser(), o.default.getGuild(e)?.premiumTier) ? {
                        width: 1920,
                        height: 1080
                    } : {
                        width: 1280,
                        height: 720
                    };
                    d.default.getMediaEngine().getDesktopSource(n, !0).then(n => {
                        (0, i.startStream)(e, t, {
                            pid: null,
                            sourceId: n,
                            sourceName: null
                        })
                    })
                }
            }
        },
        200562: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("240108"),
                i = n("164323"),
                s = n("661848");

            function l(e) {
                let {
                    mainText: t,
                    supportingText: n,
                    children: l,
                    size: u
                } = e;
                return (0, a.jsxs)(i.default, {
                    className: s.root,
                    justify: i.default.Justify.CENTER,
                    align: i.default.Align.CENTER,
                    direction: i.default.Direction.VERTICAL,
                    children: [(0, a.jsx)(r.default, {
                        header: t,
                        description: n,
                        size: u
                    }), l]
                })
            }
        },
        978450: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("928484"),
                i = n("461486"),
                s = n("601946"),
                l = n("30175");

            function u(e) {
                let {
                    channelId: t,
                    applicationId: n,
                    centerButton: u = !1,
                    ...o
                } = e, d = u ? s.CenterControlButton : s.default;
                return (0, a.jsx)(d, {
                    ...o,
                    onClick: () => {
                        (0, r.stopEmbeddedActivity)({
                            channelId: t,
                            applicationId: n
                        })
                    },
                    iconComponent: i.default,
                    label: l.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
                })
            }
        },
        455142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("820228"),
                i = n("702012"),
                s = n("910769"),
                l = n("246414"),
                u = n("601946"),
                o = n("30175");

            function d(e) {
                let {
                    centerButton: t = !1,
                    channel: n,
                    onClick: d,
                    ...c
                } = e, f = t ? u.CenterControlButton : u.default, h = n.isBroadcastChannel(), p = (0, s.useIsBroadcastingInChannel)(n.id);
                return (0, a.jsx)(f, {
                    ...c,
                    onClick: () => {
                        p && (0, i.stopBroadcast)(), r.default.disconnect(), d?.()
                    },
                    iconComponent: l.default,
                    label: p ? o.default.Messages.STOP_BROADCASTING : h ? o.default.Messages.LEAVE_BROADCAST : o.default.Messages.DISCONNECT_SELF
                })
            }
        },
        233887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("803997"),
                i = n.n(r),
                s = n("236702"),
                l = n("601946"),
                u = n("30175"),
                o = n("73068");

            function d(e) {
                let {
                    popoutOpen: t,
                    onClosePopout: n,
                    onOpenPopout: r,
                    ...d
                } = e, c = t ? u.default.Messages.POPOUT_RETURN : u.default.Messages.POPOUT_PLAYER;
                return (0, a.jsx)(l.default, {
                    label: c,
                    onClick: t ? n : r,
                    iconComponent: s.default,
                    iconClassName: i()({
                        [o.popIn]: t
                    }),
                    ...d
                })
            }
        },
        907163: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("450636"),
                i = n("137079"),
                s = n("601946"),
                l = n("30175");

            function u(e) {
                let {
                    isSelfStream: t,
                    centerButton: n = !1,
                    ...u
                } = e, o = n ? s.CenterControlButton : s.default;
                return (0, a.jsx)(o, {
                    label: t ? l.default.Messages.STOP_STREAMING : l.default.Messages.STOP_WATCHING,
                    iconComponent: t ? r.default : i.default,
                    isActive: !0,
                    ...u
                })
            }
        },
        985185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("803997"),
                s = n.n(i),
                l = n("164545"),
                u = n("397925"),
                o = n("688894"),
                d = n("601946"),
                c = n("30175"),
                f = n("848579");

            function h(e) {
                let {
                    className: t,
                    isVertical: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: f.iconContainer,
                    children: [(0, a.jsx)(u.default, {
                        className: s()(n ? f.upCaret : f.leftCaret, t)
                    }), (0, a.jsx)(o.default, {
                        className: s()(f.members, t)
                    })]
                })
            }

            function p(e) {
                let {
                    className: t,
                    isVertical: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: f.iconContainer,
                    children: [(0, a.jsx)(u.default, {
                        className: s()(n ? f.downCaret : f.rightCaret, t)
                    }), n && (0, a.jsx)(o.default, {
                        className: s()(f.members, t)
                    })]
                })
            }

            function g(e) {
                let {
                    channelId: t,
                    className: n,
                    isParticipantsOpen: i,
                    isVertical: u = !1,
                    hideTooltip: o = !1
                } = e, g = r.useCallback(e => {
                    let {
                        className: t
                    } = e;
                    return i ? (0, a.jsx)(p, {
                        className: t,
                        isVertical: u
                    }) : (0, a.jsx)(h, {
                        className: t,
                        isVertical: u
                    })
                }, [i, u]);
                return (0, a.jsx)(d.default, {
                    label: i ? c.default.Messages.VIDEO_CALL_HIDE_MEMBERS : c.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
                    className: s()(f.participantsButton, n),
                    onClick: function() {
                        l.default.toggleParticipants(t, !i)
                    },
                    iconComponent: g,
                    shouldShowTooltip: !o
                })
            }
        },
        331729: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VideoButtonWrapper: function() {
                    return f
                },
                default: function() {
                    return h
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("803997"),
                i = n.n(r),
                s = n("777084"),
                l = n("781799"),
                u = n("477661"),
                o = n("717264"),
                d = n("601946"),
                c = n("210241");

            function f(e) {
                let t = (0, l.getVideoButtonLabel)(e),
                    {
                        enabled: n,
                        cameraUnavailable: r,
                        onChange: i,
                        onCameraUnavailable: d,
                        hasPermission: c,
                        children: f,
                        channelLimitReached: h = !1,
                        join: p
                    } = e,
                    g = (0, s.useAppContext)(),
                    E = r ? () => d() : () => i(!e.enabled, g);
                return (0, a.jsx)(a.Fragment, {
                    children: f({
                        onClick: E,
                        active: n,
                        disabled: !n && (!c || h),
                        iconComponent: p || n ? u.default : o.default,
                        label: t,
                        unavailable: r
                    })
                })
            }

            function h(e) {
                let {
                    enabled: t,
                    join: n,
                    channel: r,
                    onChange: s,
                    onCameraUnavailable: l,
                    cameraUnavailable: u,
                    hasPermission: o,
                    className: h,
                    channelLimitReached: p,
                    channelLimit: g,
                    centerButton: E = !1,
                    onPopoutClick: C,
                    ...m
                } = e, S = E ? d.CenterControlButton : d.default;
                return (0, a.jsx)(f, {
                    enabled: t,
                    join: n,
                    channel: r,
                    onChange: s,
                    onCameraUnavailable: l,
                    cameraUnavailable: u,
                    hasPermission: o,
                    channelLimitReached: p,
                    channelLimit: g,
                    children: e => {
                        let {
                            unavailable: n,
                            ...r
                        } = e;
                        return (0, a.jsx)(S, {
                            ...r,
                            ...m,
                            isActive: t,
                            className: i()(h, {
                                [c.fauxDisabled]: n
                            }),
                            onPopoutClick: C
                        })
                    }
                })
            }
        },
        700933: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("699581"),
                s = n("414112"),
                l = n("93610"),
                u = n("467006");
            let o = (e, t) => {
                let {
                    x: n,
                    y: a
                } = e, {
                    x: r,
                    y: i
                } = t;
                return Math.pow(n - r, 2) + Math.pow(a - i, 2)
            };
            class d extends r.PureComponent {
                static #e = this.defaultProps = {
                    maxX: 0,
                    maxY: 0,
                    initialX: 0,
                    initialY: 0,
                    disabled: !1,
                    dragAnywhere: !1
                };
                constructor(e) {
                    super(e), this._height = 0, this._width = 0, this._dragStart = {
                        x: 0,
                        y: 0
                    }, this._offsetX = 0, this._offsetY = 0, this._removeListeners = () => {}, this.handleSetRef = e => {
                        this._ref = e
                    }, this.handleMouseDown = e => {
                        let {
                            dragAnywhere: t,
                            disabled: n,
                            selector: a
                        } = this.props;
                        if (n) return;
                        let {
                            position: r
                        } = this.state, i = e.target;
                        if (e.button === u.MouseButtons.PRIMARY && (t || null != a && i.matches(a))) {
                            this.grabDimensions(), this._dragStart = {
                                x: e.clientX,
                                y: e.clientY
                            }, this._offsetX = e.clientX - r.x._value, this._offsetY = e.clientY - r.y._value;
                            let t = e.nativeEvent.view;
                            this._removeListeners(), t.addEventListener("mousemove", this.handleMouseMove), t.addEventListener("mouseup", this.handleMouseUp), this._removeListeners = () => {
                                t.removeEventListener("mousemove", this.handleMouseMove), t.removeEventListener("mouseup", this.handleMouseUp)
                            }
                        }
                    }, this.handleMouseMove = e => {
                        e.preventDefault();
                        let {
                            onDragStart: t,
                            onDrag: n,
                            disabled: a
                        } = this.props;
                        if (a) return;
                        let {
                            dragging: r,
                            dragging: i
                        } = this.state;
                        !r && o(this._dragStart, {
                            x: e.clientX,
                            y: e.clientY
                        }) > 9 && (r = !0), r && (this.animateToPosition(e.clientX - this._offsetX, e.clientY - this._offsetY, {
                            tension: 80,
                            friction: 8
                        }, null, !1), this.setState({
                            dragging: r
                        }, () => {
                            !i && t?.(e.clientX, e.clientY), n?.(e.clientX, e.clientY)
                        }))
                    }, this.handleMouseUp = e => {
                        this._removeListeners(), this.state.dragging && this.setState({
                            dragging: !1
                        }, () => {
                            let {
                                onDragEnd: t
                            } = this.props;
                            t?.(e.clientX, e.clientY)
                        })
                    };
                    let t = new s.default.Value(e.initialX),
                        n = new s.default.Value(e.initialY);
                    this.state = {
                        dragging: !1,
                        position: new s.default.ValueXY({
                            x: t,
                            y: n
                        })
                    }
                }
                componentDidMount() {
                    let {
                        initialX: e,
                        initialY: t
                    } = this.props;
                    this.setPosition(e, t)
                }
                componentWillUnmount() {
                    this._removeListeners()
                }
                animateToPosition(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        a = arguments.length > 3 ? arguments[3] : void 0,
                        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    r && this.grabDimensions();
                    let i = this.translate(e, t);
                    s.default.spring(this.state.position, {
                        toValue: {
                            x: i.x,
                            y: i.y
                        },
                        ...n
                    }).start(a)
                }
                setPosition(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    n && this.grabDimensions();
                    let a = this.translate(e, t);
                    this.state.position.setValue({
                        x: a.x,
                        y: a.y
                    })
                }
                grabDimensions() {
                    let e = (0, i.findDOMNode)(this._ref);
                    (0, l.isElement)(e) && (this._height = e.clientHeight, this._width = e.clientWidth)
                }
                translate(e, t) {
                    let {
                        maxX: n,
                        maxY: a
                    } = this.props;
                    return e < 0 ? e = 0 : e > n - this._width && (e = n - this._width), t < 0 ? t = 0 : t > a - this._height && (t = a - this._height), {
                        x: e,
                        y: t
                    }
                }
                render() {
                    let {
                        dragging: e,
                        position: t
                    } = this.state, {
                        className: n,
                        children: r
                    } = this.props, i = [0, 1], l = ["0px", "1px"], u = s.default.accelerate({
                        pointerEvents: e ? "none" : "auto",
                        transform: [{
                            translateX: t.x.interpolate({
                                inputRange: i,
                                outputRange: l
                            })
                        }, {
                            translateY: t.y.interpolate({
                                inputRange: i,
                                outputRange: l
                            })
                        }],
                        ...this.props.style
                    });
                    return (0, a.jsx)(s.default.div, {
                        ref: this.handleSetRef,
                        className: n,
                        onMouseDown: this.handleMouseDown,
                        style: u,
                        children: r
                    })
                }
            }
            var c = d
        },
        702018: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("803997"),
                s = n.n(i),
                l = n("974328"),
                u = n("164323"),
                o = n("376181");
            class d extends r.PureComponent {
                render() {
                    let {
                        note: e,
                        title: t,
                        action: n,
                        className: r
                    } = this.props;
                    return (0, a.jsx)("div", {
                        className: s()(o.wrapper, r),
                        children: (0, a.jsxs)(u.default, {
                            className: o.flexWrapper,
                            direction: u.default.Direction.VERTICAL,
                            align: u.default.Align.CENTER,
                            justify: u.default.Justify.CENTER,
                            children: [(0, a.jsx)(u.default.Child, {
                                grow: 0,
                                className: o.image
                            }), (0, a.jsxs)(u.default.Child, {
                                grow: 0,
                                className: o.text,
                                children: [(0, a.jsx)(l.H, {
                                    className: o.title,
                                    children: t
                                }), null != e ? (0, a.jsx)("div", {
                                    className: o.note,
                                    children: e
                                }) : null]
                            }), n]
                        })
                    })
                }
            }
            var c = d
        },
        569376: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PictureInPictureWindow: function() {
                    return h
                },
                default: function() {
                    return p
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("803997"),
                s = n.n(i),
                l = n("699581"),
                u = n("501769"),
                o = n("700933"),
                d = n("467006"),
                c = n("55353");
            let f = {
                top: 80,
                bottom: 132,
                left: 80
            };
            class h extends r.PureComponent {
                static #e = this.defaultProps = {
                    hidden: !1,
                    roundCorners: !0
                };
                componentDidMount() {
                    this.setPosition(this.props.position)
                }
                componentDidUpdate(e) {
                    (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && this.ensureIsInPosition()
                }
                componentWillUnmount() {
                    this._resizeObserver?.disconnect()
                }
                getPosition(e) {
                    let t = (0, l.findDOMNode)(this._innerDiv);
                    if (null != t) {
                        let e = t.getBoundingClientRect();
                        this._width = e.width, this._height = e.height
                    }
                    let {
                        edgeOffsetTop: n,
                        edgeOffsetLeft: a,
                        edgeOffsetBottom: r,
                        edgeOffsetRight: i,
                        maxX: s,
                        maxY: o,
                        dockedRect: c
                    } = this.props, f = Math.round(n), h = Math.round(o - r - this._height), p = Math.round(a), g = Math.round(s - i - this._width), E = (0, u.getPlatform)() !== u.PlatformTypes.WEB && this.inPopout ? 22 : 0;
                    if (null != c) return {
                        y: (c?.y ?? 0) - E,
                        x: c?.x ?? 0
                    };
                    switch (e) {
                        case d.PictureInPicturePositions.TOP_LEFT:
                            return {
                                y: f, x: p
                            };
                        case d.PictureInPicturePositions.BOTTOM_LEFT:
                            return {
                                y: h, x: p
                            };
                        case d.PictureInPicturePositions.TOP_RIGHT:
                            return {
                                y: f, x: g
                            };
                        default:
                            return {
                                y: h, x: g
                            }
                    }
                }
                setPosition(e) {
                    let {
                        x: t,
                        y: n
                    } = this.getPosition(e);
                    this._draggable?.setPosition(t, n)
                }
                animateToPosition(e, t) {
                    let {
                        x: n,
                        y: a
                    } = this.getPosition(e);
                    this._draggable?.animateToPosition(n, a, {}, t)
                }
                calculateDecayingPosition(e, t, n, a) {
                    return {
                        x: e + 200 * n,
                        y: t + 200 * a
                    }
                }
                getXOffset() {
                    let {
                        position: e,
                        edgeOffsetLeft: t,
                        edgeOffsetRight: n
                    } = this.props;
                    switch (e) {
                        case d.PictureInPicturePositions.TOP_LEFT:
                        case d.PictureInPicturePositions.BOTTOM_LEFT:
                            return -t;
                        default:
                            return n
                    }
                }
                getYOffset() {
                    let {
                        position: e,
                        edgeOffsetTop: t,
                        edgeOffsetBottom: n
                    } = this.props;
                    switch (e) {
                        case d.PictureInPicturePositions.TOP_LEFT:
                        case d.PictureInPicturePositions.TOP_RIGHT:
                            return -t;
                        default:
                            return n
                    }
                }
                get inPopout() {
                    return this.props.appContext === d.AppContext.POPOUT
                }
                render() {
                    let {
                        maxX: e,
                        maxY: t,
                        dockedRect: n,
                        hidden: r,
                        roundCorners: i,
                        className: l
                    } = this.props, u = {};
                    return null != n && (u = {
                        transform: `translate3d(${n.x}, ${n.y}, 0)`,
                        width: n.width,
                        height: n.height
                    }), (0, a.jsx)(o.default, {
                        dragAnywhere: !0,
                        ref: this.handleSetDraggableRef,
                        className: s()(c.pictureInPictureWindow, l, {
                            [c.hidden]: r,
                            [c.borderRadius]: i
                        }),
                        maxX: e,
                        maxY: t,
                        disabled: null != n,
                        onDragStart: this.handleDragStart,
                        onDrag: this.handleDrag,
                        onDragEnd: this.handleDragEnd,
                        children: (0, a.jsx)("div", {
                            ref: this.handleSetInnerDivRef,
                            style: u,
                            children: this.props.children
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._width = 0, this._height = 0, this._velocityX = 0, this._velocityY = 0, this._lastMoveX = 0, this._lastMoveY = 0, this.ensureIsInPosition = () => {
                        this.setPosition(this.props.position)
                    }, this.handleSetInnerDivRef = e => {
                        this._innerDiv = e;
                        let t = e?.ownerDocument.defaultView;
                        null != e && null != t && (this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition), this._resizeObserver?.observe(e))
                    }, this.handleSetDraggableRef = e => {
                        this._draggable = e
                    }, this.handleDragStart = (e, t) => {
                        this._velocityX = 0, this._velocityY = 0, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = new Date
                    }, this.handleDrag = (e, t) => {
                        let n = new Date,
                            a = Number(n) - Number(this._lastMoveTime);
                        this._velocityX = (e - this._lastMoveX) / a, this._velocityY = (t - this._lastMoveY) / a, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = n
                    }, this.handleDragEnd = (e, t) => {
                        let n;
                        let {
                            maxX: a,
                            maxY: r
                        } = this.props, i = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY), s = !0, l = !0;
                        if (i.x > a / 2 && (l = !1), i.y > r / 2 && (s = !1), n = s && l ? d.PictureInPicturePositions.TOP_LEFT : s && !l ? d.PictureInPicturePositions.TOP_RIGHT : !s && l ? d.PictureInPicturePositions.BOTTOM_LEFT : d.PictureInPicturePositions.BOTTOM_RIGHT, this.animateToPosition(n, this.ensureIsInPosition), n !== this.props.position) {
                            let {
                                id: e,
                                onMove: t
                            } = this.props;
                            t?.(e, n)
                        }
                    }
                }
            }
            var p = r.memo(e => {
                let {
                    selectedPIPWindow: t,
                    pipWindows: n,
                    maxX: r,
                    maxY: i,
                    onWindowMove: s,
                    dockedRect: l,
                    pictureInPictureComponents: u,
                    appContext: o,
                    roundCorners: p
                } = e;
                return (0, a.jsx)("div", {
                    className: c.pictureInPicture,
                    children: (() => {
                        if (null == t) return null;
                        let e = n.map(e => {
                            if (e.id !== t.id && e.component !== d.PictureInPictureComponents.EMBED_IFRAME) return null;
                            let n = "string" == typeof e.component ? u[e.component] : e.component;
                            return (0, a.jsx)(n, {
                                ...e.props
                            }, `pipWindow-${e.id}`)
                        });
                        return (0, a.jsx)(h, {
                            appContext: o,
                            position: t.position,
                            id: t.id,
                            hidden: t.hidden,
                            onMove: s,
                            maxX: r,
                            maxY: i,
                            dockedRect: l,
                            edgeOffsetTop: f.top,
                            edgeOffsetBottom: f.bottom,
                            edgeOffsetLeft: f.left,
                            edgeOffsetRight: f.top,
                            roundCorners: p,
                            children: e
                        })
                    })()
                })
            })
        },
        753983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("735250"),
                r = n("470079"),
                i = n("600186"),
                s = n("974328"),
                l = n("442609"),
                u = n("512261"),
                o = n("97238"),
                d = n("498882"),
                c = n("4924"),
                f = n("362939"),
                h = n("467006"),
                p = n("817927"),
                g = function(e) {
                    let {
                        style: t,
                        src: n,
                        backgroundSrc: g,
                        userId: E,
                        pulseSpeakingIndicator: C = !1,
                        speaking: m = !1,
                        ...S
                    } = e, _ = g ?? n, T = (0, l.default)(_, i.default.unsafe_rawColors.PRIMARY_800.css), I = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, A = (0, c.default)(E ?? h.EMPTY_STRING_SNOWFLAKE_ID), v = A?.getBannerURL({
                        size: 1024,
                        canAnimate: f.GifAutoPlay.getSetting()
                    });
                    if (r.useEffect(() => {
                            null != E && I && (0, d.default)(E, void 0, {
                                dispatchWait: !0
                            })
                        }, [I, E]), null == n) return null;
                    let N = (0, a.jsx)(s.Avatar, {
                            className: p.avatarWrapper,
                            src: n,
                            ...S
                        }),
                        L = {
                            ...t,
                            backgroundColor: T
                        };
                    return null != v && m && I && (L.backgroundImage = `url(${v})`, L.backgroundSize = "cover"), (0, a.jsx)("div", {
                        style: L,
                        className: p.background,
                        children: C ? (0, a.jsx)(o.default, {
                            shouldAnimate: m,
                            children: N
                        }) : N
                    })
                }
        },
        246414: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("336328"),
                i = n("644959"),
                s = n("262113"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: i,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.1169 1.11603L22.8839 2.88403L19.7679 6.00003L22.8839 9.11603L21.1169 10.884L17.9999 7.76803L14.8839 10.884L13.1169 9.11603L16.2329 6.00003L13.1169 2.88403L14.8839 1.11603L17.9999 4.23203L21.1169 1.11603ZM18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22Z"
                        })
                    })
                }, i.PhoneHangUpIcon, void 0, {
                    size: 24
                })
        },
        717264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("336328"),
                i = n("378467"),
                s = n("262113"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6.74273 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7.74273L6.74273 19ZM12.2574 5H4C2.897 5 2 5.897 2 7V15.2574L12.2574 5Z",
                            fill: r
                        }), (0, a.jsx)("rect", {
                            y: "19.9623",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 0 19.9623)",
                            className: i,
                            fill: r
                        })]
                    })
                }, i.VideoSlashIcon, void 0, {
                    size: 24
                })
        },
        997351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("262113");

            function i(e) {
                let {
                    width: t = 55,
                    height: n = 16,
                    color: i = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 55 16",
                    children: (0, a.jsxs)("g", {
                        fill: i,
                        className: s,
                        children: [(0, a.jsx)("path", {
                            d: "M3 4.78717H6.89554C7.83025 4.78717 8.62749 4.93379 9.27812 5.22703C9.92875 5.52027 10.4144 5.92348 10.7352 6.44582C11.0559 6.96815 11.2208 7.5638 11.2208 8.24192C11.2208 8.90171 11.0559 9.49736 10.7168 10.038C10.3778 10.5695 9.8646 11.0002 9.17732 11.3118C8.49003 11.6234 7.6378 11.7791 6.6197 11.7791H3V4.78717ZM6.57388 10.0014C7.2071 10.0014 7.69278 9.84559 8.03184 9.52485C8.3709 9.21328 8.54501 8.77343 8.54501 8.23276C8.54501 7.72875 8.38923 7.32555 8.08682 7.02314C7.78442 6.72073 7.32623 6.56495 6.71225 6.56495H5.49255V10.0014H6.57388Z"
                        }), (0, a.jsx)("path", {
                            d: "M17.2882 11.7709C16.7475 11.6335 16.2618 11.4319 15.8311 11.1569V9.4983C16.161 9.75489 16.5917 9.95649 17.1416 10.1214C17.6914 10.2864 18.2229 10.3689 18.7361 10.3689C18.9743 10.3689 19.1576 10.3414 19.2767 10.2772C19.3959 10.2131 19.46 10.1398 19.46 10.0481C19.46 9.94733 19.4233 9.86485 19.3592 9.80071C19.2951 9.73656 19.1668 9.68158 18.9743 9.62659L17.7739 9.36084C17.0866 9.20506 16.6009 8.97596 16.3077 8.70105C16.0144 8.42613 15.877 8.05042 15.877 7.59223C15.877 7.20735 16.0053 6.86829 16.2527 6.58421C16.5093 6.30013 16.8667 6.0802 17.334 5.92442C17.8014 5.76863 18.342 5.68616 18.9743 5.68616C19.5333 5.68616 20.0465 5.74114 20.5138 5.86944C20.9812 5.98857 21.3661 6.14435 21.6685 6.32763V7.89464C21.3569 7.71136 20.9904 7.56474 20.5871 7.45477C20.1748 7.34481 19.7533 7.28982 19.3226 7.28982C18.6994 7.28982 18.3878 7.39979 18.3878 7.61056C18.3878 7.71136 18.4337 7.78467 18.5345 7.83966C18.6353 7.89464 18.8094 7.94046 19.066 7.99544L20.0648 8.17871C20.7155 8.28868 21.2011 8.49028 21.5219 8.77436C21.8426 9.05844 21.9984 9.47081 21.9984 10.0298C21.9984 10.6346 21.7326 11.1203 21.2011 11.4685C20.6696 11.8259 19.9182 12 18.9468 12C18.3787 11.9817 17.8289 11.9084 17.2882 11.7709Z"
                        }), (0, a.jsx)("path", {
                            d: "M24.4735 11.5602C23.9054 11.2761 23.4655 10.9004 23.1814 10.4239C22.8882 9.94733 22.7507 9.40666 22.7507 8.80185C22.7507 8.20621 22.8974 7.66554 23.1998 7.19819C23.5022 6.72167 23.942 6.35512 24.5194 6.0802C25.0967 5.81445 25.7931 5.677 26.5995 5.677C27.5984 5.677 28.4231 5.88776 29.0829 6.3093V8.1329C28.8538 7.97712 28.5789 7.83965 28.2673 7.74802C27.9558 7.64721 27.6259 7.6014 27.2777 7.6014C26.6545 7.6014 26.178 7.71137 25.8206 7.94046C25.4724 8.16956 25.2983 8.46279 25.2983 8.82934C25.2983 9.18673 25.4632 9.47998 25.8115 9.70907C26.1505 9.93817 26.6453 10.0573 27.2868 10.0573C27.6167 10.0573 27.9466 10.0115 28.2673 9.91067C28.5881 9.80987 28.8722 9.69991 29.1013 9.55329V11.3219C28.3681 11.7618 27.5159 11.9817 26.5537 11.9817C25.7381 11.9817 25.0509 11.8351 24.4735 11.5602Z"
                        }), (0, a.jsx)("path", {
                            d: "M31.6955 11.5602C31.1182 11.2761 30.6783 10.9004 30.3759 10.4147C30.0735 9.929 29.9177 9.38834 29.9177 8.78353C29.9177 8.18788 30.0735 7.64722 30.3759 7.17986C30.6783 6.71251 31.1182 6.34595 31.6863 6.0802C32.2545 5.81445 32.9418 5.677 33.7299 5.677C34.518 5.677 35.2053 5.80529 35.7743 6.0802C36.3425 6.34595 36.7824 6.71251 37.0848 7.17986C37.3872 7.64722 37.5338 8.17872 37.5338 8.78353C37.5338 9.37918 37.3872 9.929 37.0848 10.4147C36.7824 10.9004 36.3517 11.2852 35.7743 11.5602C35.1961 11.8351 34.518 11.9817 33.7299 11.9817C32.951 11.9817 32.2728 11.8351 31.6955 11.5602ZM34.7287 9.79155C34.967 9.55329 35.0953 9.22339 35.0953 8.82934C35.0953 8.42614 34.9762 8.11457 34.7287 7.87632C34.4813 7.63806 34.1514 7.51892 33.7391 7.51892C33.3084 7.51892 32.9785 7.63806 32.731 7.87632C32.4928 8.11457 32.3645 8.42614 32.3645 8.82934C32.3645 9.23255 32.4836 9.55329 32.731 9.79155C32.9785 10.039 33.3084 10.1581 33.7391 10.1581C34.1514 10.1489 34.4905 10.0298 34.7287 9.79155Z"
                        }), (0, a.jsx)("path", {
                            d: "M43.6644 6.0435V8.19699C43.4078 8.03204 43.0779 7.94956 42.6747 7.94956C42.1432 7.94956 41.7308 8.11451 41.4467 8.43524C41.1626 8.75598 41.016 9.25999 41.016 9.93811V11.7709H38.5693V5.9427H40.9702V7.80295C41.0985 7.12482 41.3184 6.62082 41.6117 6.30008C41.9049 5.97935 42.2898 5.80524 42.7572 5.80524C43.1054 5.80524 43.4078 5.88771 43.6644 6.0435Z"
                        }), (0, a.jsx)("path", {
                            d: "M51.9136 4.58649V11.7801H49.4659V10.4696C49.2552 10.9645 48.9436 11.3402 48.5221 11.5968C48.1005 11.8534 47.5782 11.9817 46.9551 11.9817C46.4052 11.9817 45.9195 11.8442 45.5072 11.5785C45.0948 11.3127 44.7741 10.937 44.5542 10.4696C44.3342 9.99313 44.2242 9.46163 44.2242 8.87514C44.2151 8.26117 44.3342 7.71134 44.5816 7.22566C44.8199 6.73998 45.1681 6.36426 45.608 6.08935C46.0479 5.81444 46.5519 5.67698 47.12 5.67698C48.2838 5.67698 49.0627 6.18099 49.4659 7.19817V4.58649H51.9136ZM49.0994 9.7457C49.3468 9.50744 49.4751 9.18671 49.4751 8.80183C49.4751 8.42612 49.356 8.12371 49.1086 7.89462C48.8611 7.66552 48.5312 7.5464 48.1189 7.5464C47.7065 7.5464 47.3766 7.66553 47.1292 7.90378C46.8818 8.14204 46.7626 8.44444 46.7626 8.82932C46.7626 9.2142 46.8818 9.51661 47.1292 9.75487C47.3766 9.99313 47.6973 10.1123 48.1097 10.1123C48.5221 10.1123 48.852 9.99313 49.0994 9.7457Z"
                        }), (0, a.jsx)("path", {
                            d: "M13.4751 6.29095C14.1789 6.29095 14.7489 5.77778 14.7489 5.14547C14.7489 4.51317 14.1789 4 13.4751 4C12.7723 4 12.2014 4.51317 12.2014 5.14547C12.2014 5.77778 12.7723 6.29095 13.4751 6.29095Z"
                        }), (0, a.jsx)("path", {
                            d: "M14.7489 7.07812C13.97 7.41719 12.9986 7.42635 12.2014 7.07812V11.7792H14.7489V7.07812Z"
                        })]
                    })
                })
            }
        },
        841572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("262113");

            function i(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    className: s,
                    foreground: l,
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(u),
                    className: s,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        className: l,
                        fill: i,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                })
            }
        },
        461486: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("336328"),
                i = n("853374"),
                s = n("262113"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: i,
                            fill: r,
                            d: "M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z"
                        })
                    })
                }, i.DoorExitIcon, void 0, {
                    size: 16
                })
        },
        137079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("336328"),
                i = n("758831"),
                s = n("262113"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("path", {
                            className: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20 11V13.5H4V4.5H13V2.5H4C3.46957 2.5 2.96086 2.71071 2.58579 3.08579C2.21071 3.46086 2 3.96957 2 4.5L2 15.5C2 16.0304 2.21071 16.5391 2.58579 16.9142C2.96086 17.2893 3.46957 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C20.5304 17.5 21.0391 17.2893 21.4142 16.9142C21.7893 16.5391 22 16.0304 22 15.5V11H20Z",
                            fill: r
                        }), (0, a.jsx)("path", {
                            className: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23 2.45174L21.5483 1L19.0051 3.55341L16.4517 1L15 2.45174L17.5534 4.99485L15 7.54826L16.4517 9L19.0051 6.44659L21.5483 9L23 7.54826L20.4466 4.99485L23 2.45174Z",
                            fill: r
                        })]
                    })
                }, i.ScreenXIcon, void 0, {
                    size: 24
                })
        },
        935178: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("262113");

            function i(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: i = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("polygon", {
                        fill: i,
                        className: s,
                        fillRule: "evenodd",
                        points: "11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
                    })
                })
            }
        },
        242259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("262113");

            function i(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: i = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("path", {
                        stroke: i,
                        className: s,
                        fill: "none",
                        d: "M8.5,3.5 L6,6 L3.5,3.5 L6,6 L3.5,8.5 L6,6 L8.5,8.5 L6,6 L8.5,3.5 Z"
                    })
                })
            }
        },
        720139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("262113");

            function i(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: i = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        width: "9",
                        height: "9",
                        x: "1.5",
                        y: "1.5",
                        fill: "none",
                        stroke: i,
                        className: s
                    })
                })
            }
        },
        950165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("262113");

            function i(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: i = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsxs)("g", {
                        fill: i,
                        className: s,
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("path", {
                            d: "M5,3 C5,3 5,6.1325704 5,6.48601043 C5,6.83945045 5.18485201,7 5.49021559,7 L9,7 L9,6 L8,6 L8,5 L7,5 L7,4 L6,4 L6,3 L5,3 Z",
                            transform: "rotate(180 7 5)"
                        }), (0, a.jsx)("path", {
                            d: "M3,5 C3,5 3,8.1325704 3,8.48601043 C3,8.83945045 3.18485201,9 3.49021559,9 L7,9 L7,8 L6,8 L6,7 L5,7 L5,6 L4,6 L4,5 L3,5 Z"
                        })]
                    })
                })
            }
        },
        315604: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("262113");

            function i(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: i = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        className: s,
                        fill: i,
                        width: "10",
                        height: "1",
                        x: "1",
                        y: "6"
                    })
                })
            }
        },
        381694: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("262113");

            function i(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: i = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        fill: i,
                        className: s,
                        width: "8",
                        height: "2",
                        x: "2",
                        y: "5",
                        fillRule: "evenodd"
                    })
                })
            }
        },
        543930: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setupWindow: function() {
                    return l
                }
            });
            var a = n("152103"),
                r = n("45245"),
                i = n("40093"),
                s = n("333405");

            function l(e) {
                let t = e.document,
                    n = (0, i.setupWindowId)(e);

                function l() {
                    (0, s.setCurrentlyInteractingWindowId)(n)
                }

                function u() {
                    setTimeout(() => {
                        (0, s.clearCurrentlyInteractingWindowId)(n)
                    }, 0)
                }
                for (let n of (e.addEventListener("resize", function() {
                        (0, a.resized)(e)
                    }), e.addEventListener("focus", function() {
                        (0, a.focus)(e, !0)
                    }), e.addEventListener("blur", function() {
                        !e.document.hasFocus() && (0, a.focus)(e, !1)
                    }), e.addEventListener("unload", function() {
                        (0, a.unload)(e)
                    }), e.addEventListener("visibilitychange", function() {
                        (0, a.visibilityChange)(e)
                    }), s.INTERACTION_EVENTS)) t.addEventListener(n, l, !0), t.addEventListener(n, u, !1);
                (0, r.subscribeDocumentToFullScreenChange)(t, function() {
                    (0, a.fullscreenChange)(e)
                }), (0, a.init)(e)
            }
        },
        31658: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PhoneHangUpIcon: function() {
                    return s
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("600186"),
                i = n("11768");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "m21.5 16.6-.13.14a.88.88 0 0 1-.97.2l-4.09-1.7a.99.99 0 0 1-.57-1.18l.73-2.7c-2.24-3-6.7-3-8.94 0l.7 2.1a.99.99 0 0 1-.48 1.19l-4.13 2.2a.87.87 0 0 1-1.03-.15l-.1-.1a5.18 5.18 0 0 1-.32-6.92 12.67 12.67 0 0 1 19.66 0 5.18 5.18 0 0 1-.32 6.92Z",
                        className: l
                    })
                })
            }
        },
        26163: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VideoSlashIcon: function() {
                    return s
                }
            });
            var a = n("735250");
            n("470079");
            var r = n("600186"),
                i = n("11768");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM9.2 20a.5.5 0 0 1-.35-.85l12.1-12.1a.5.5 0 0 1 .12-.09l.48-.24a1 1 0 0 1 1.45.9v8.76a1 1 0 0 1-1.45.9l-3-1.5a1 1 0 0 1-.55-.9V17a3 3 0 0 1-3 3H9.2ZM15.28 4.72c.27-.27.15-.71-.23-.72H4a3 3 0 0 0-3 3v10a3 3 0 0 0 .17.99c.1.3.49.35.72.12l13.4-13.4Z",
                        className: l
                    })
                })
            }
        },
        105691: function(e, t, n) {
            "use strict";
            var a, r;
            n.r(t), n.d(t, {
                AppCrashedReasons: function() {
                    return a
                }
            }), (r = a || (a = {})).UNHANDLED_NATIVE_ERROR = "unhandled_native_error", r.UNHANDLED_JS_ERROR = "unhandled_js_error", r.SOCKET_CRASHED = "socket_crashed"
        },
        753750: function(e, t, n) {
            "use strict";
            var a, r;
            n.r(t), n.d(t, {
                ErrorLevels: function() {
                    return a
                }
            }), (r = a || (a = {})).FATAL = "fatal", r.ERROR = "error", r.WARNING = "warning", r.LOG = "log", r.INFO = "info", r.DEBUG = "debug"
        }
    }
]);
//# sourceMappingURL=91938.9851aa0315471f5dad29.js.map