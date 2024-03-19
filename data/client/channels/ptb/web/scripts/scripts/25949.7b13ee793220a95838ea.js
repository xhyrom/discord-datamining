(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["25949"], {
        203472: function(e, t, n) {
            "use strict";
            e.exports = n.p + "72eaa596042042be6259.svg"
        },
        249712: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1c04c4fae98fbfc21d22.svg"
        },
        144261: function(e, t, n) {
            "use strict";
            e.exports = n.p + "14223d22c9628be36fc0.svg"
        },
        519772: function(e, t, n) {
            "use strict";
            e.exports = n.p + "14223d22c9628be36fc0.svg"
        },
        588281: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e79ff570861bbb9679f5.svg"
        },
        242412: function(e, t, n) {
            "use strict";
            e.exports = n.p + "29306de8953471954035.svg"
        },
        729861: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bc35d12450c07bd37714.svg"
        },
        193990: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("913144"),
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
                        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                        a.default.dispatch({
                            type: "NOTIFICATION_CREATE",
                            icon: e,
                            title: t,
                            body: n,
                            trackingProps: r,
                            options: {
                                ...s,
                                onClick() {
                                    var e;
                                    null === (e = s.onClick) || void 0 === e || e.call(s), a.default.dispatch({
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
        600965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                open: function() {
                    return r
                },
                close: function() {
                    return s
                },
                hide: function() {
                    return i
                },
                show: function() {
                    return l
                },
                moveTo: function() {
                    return u
                },
                updateRect: function() {
                    return o
                },
                switchPIPFocus: function() {
                    return d
                }
            });
            var a = n("913144");

            function r(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_OPEN",
                    id: e,
                    component: t,
                    props: n
                })
            }

            function s(e) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_CLOSE",
                    id: e
                })
            }

            function i(e) {
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
        988738: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var a = n("37983"),
                r = n("884691"),
                s = n("817736"),
                i = n("759843"),
                l = n("446674"),
                u = n("77078"),
                o = n("272030"),
                d = n("244201"),
                c = n("428958"),
                f = n("161778"),
                h = n("144747"),
                E = n("983782"),
                p = n("659500"),
                m = n("452453"),
                C = n("49111");
            let S = e => {
                let {
                    children: t,
                    close: n,
                    onUnmount: l,
                    rect: o,
                    position: f,
                    align: h,
                    impressionName: p,
                    impressionProperties: m
                } = e, S = r.useRef(null);
                r.useEffect(() => {
                    var e, t;
                    let a = (0, s.findDOMNode)(S.current);
                    if (null == a) return;
                    let r = e => {
                        let t = e.target,
                            a = (0, s.findDOMNode)(S.current);
                        !(null != a && (0, u.referencePortalAwareContains)(a, t)) && (window.getSelection().removeAllRanges(), n())
                    };
                    return null === (e = a.ownerDocument) || void 0 === e || e.addEventListener("click", r, !0), null === (t = a.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", r, !0), () => {
                        var e, t;
                        null === (e = a.ownerDocument) || void 0 === e || e.removeEventListener("click", r, !0), null === (t = a.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", r, !0)
                    }
                }, [n]);
                let g = r.useRef(l);
                r.useEffect(() => void(g.current = l)), r.useEffect(() => () => {
                    var e;
                    return null === (e = g.current) || void 0 === e ? void 0 : e.call(g)
                }, []), r.useLayoutEffect(() => {
                    var e;
                    null === (e = S.current) || void 0 === e || e.updatePosition()
                }), (0, c.default)({
                    type: i.ImpressionTypes.MENU,
                    name: p,
                    properties: m
                });
                let _ = (0, d.useWindowDispatch)(),
                    v = r.useCallback(() => {
                        _.dispatch(C.ComponentActions.POPOUT_SHOW)
                    }, [_]),
                    T = r.useCallback(() => {
                        _.dispatch(C.ComponentActions.POPOUT_HIDE)
                    }, [_]);
                return (0, a.jsx)(E.AppReferencePositionLayer, {
                    onMount: v,
                    onUnmount: T,
                    reference: () => o,
                    position: null != f ? f : "right",
                    align: null != h ? h : "top",
                    autoInvert: !0,
                    ref: S,
                    nudgeAlignIntoViewport: !0,
                    children: t
                })
            };
            class g extends r.PureComponent {
                componentDidMount() {
                    let {
                        renderLazy: e,
                        renderWindow: t
                    } = this.props;
                    if (t.addEventListener("resize", this.closeResize, !0), p.ComponentDispatch.subscribe(C.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
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
                    if (!t && e.isOpen) {
                        var n, a;
                        null === (a = e.config) || void 0 === a || null === (n = a.onClose) || void 0 === n || n.call(a)
                    }
                }
                componentWillUnmount() {
                    let {
                        renderWindow: e
                    } = this.props;
                    e.removeEventListener("resize", this.closeResize, !0), p.ComponentDispatch.unsubscribe(C.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
                }
                render() {
                    var e;
                    let {
                        appContext: t,
                        target: n,
                        isOpen: r,
                        theme: s,
                        config: i,
                        rect: l
                    } = this.props, u = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
                    return r && null != l && null != i && null != n && null != u && i.context === t ? (0, a.jsx)(S, {
                        rect: l,
                        close: this.close,
                        onUnmount: i.onClose,
                        align: i.align,
                        position: i.position,
                        impressionName: i.impressionName,
                        impressionProperties: i.impressionProperties,
                        children: (e, a) => {
                            let {
                                position: r
                            } = e;
                            return u({
                                className: m.ContextMenuClassName,
                                position: r,
                                theme: s,
                                onHeightUpdate: a,
                                config: i,
                                target: n,
                                context: t
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
                })), s = (0, l.useStateFromStores)([f.default], () => f.default.theme), {
                    appContext: i,
                    renderWindow: u
                } = r.useContext(d.default);
                return (0, a.jsx)(g, {
                    appContext: i,
                    renderWindow: u,
                    ...e,
                    isOpen: n,
                    theme: s,
                    closeContextMenu: o.closeContextMenu
                }, t)
            }
        },
        653564: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useEndCallLottie: function() {
                    return l
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414235");
            let i = {
                    all: {
                        name: "all",
                        start: 0,
                        duration: 90
                    }
                },
                l = () => {
                    let e = r.useRef(null),
                        t = r.useCallback(() => {
                            null != e.current && e.current.play("all")
                        }, []),
                        l = r.useCallback(() => {
                            null != e.current && e.current.play("hover")
                        }, []),
                        u = r.useCallback(() => {
                            null != e.current && e.current.stopIfPlaying("hover")
                        }, []),
                        o = r.useCallback(t => (0, a.jsx)(s.LottieIcon, {
                            ...t,
                            src: () => n.el("536759").then(n.t.bind(n, "536759", 19)),
                            ref: e,
                            markers: i
                        }), []);
                    return {
                        events: {
                            onMouseEnter: l,
                            onMouseLeave: u
                        },
                        play: t,
                        Component: o
                    }
                }
        },
        607837: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useScreenshareLottie: function() {
                    return l
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414235");
            let i = {
                    on: {
                        name: "on",
                        start: 0,
                        duration: 70
                    },
                    off: {
                        name: "off",
                        start: 90,
                        duration: 70
                    },
                    hover_on: {
                        name: "hover_on",
                        start: 180,
                        duration: 40
                    },
                    hover_off: {
                        name: "hover_off",
                        start: 240,
                        duration: 40
                    }
                },
                l = e => {
                    let t = r.useRef(null),
                        l = r.useRef(e),
                        u = r.useMemo(() => () => {
                            null != t.current && t.current.play(e)
                        }, [e]),
                        o = r.useCallback(() => {
                            if (null == t.current) return;
                            let n = "on" === e ? "hover_off" : "hover_on";
                            t.current.play(n)
                        }, [e]),
                        d = r.useCallback(() => {
                            if (null == t.current) return;
                            let n = "on" === e ? "hover_off" : "hover_on";
                            t.current.stopIfPlaying(n)
                        }, [e]),
                        c = r.useCallback(e => (0, a.jsx)(s.LottieIcon, {
                            ...e,
                            src: () => n.el("787188").then(n.t.bind(n, "787188", 19)),
                            ref: t,
                            initialAnimation: l.current,
                            markers: i
                        }), []);
                    return {
                        events: {
                            onClick: u,
                            onMouseEnter: o,
                            onMouseLeave: d
                        },
                        play: u,
                        Component: c
                    }
                }
        },
        881913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useVideoLottie: function() {
                    return l
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414235");
            let i = {
                    mute: {
                        name: "mute",
                        start: 0,
                        duration: 70
                    },
                    unmute: {
                        name: "unmute",
                        start: 100,
                        duration: 70
                    },
                    hover_unmuted: {
                        name: "hover_unmuted",
                        start: 180,
                        duration: 70
                    },
                    hover_muted: {
                        name: "hover_muted",
                        start: 280,
                        duration: 70
                    }
                },
                l = e => {
                    let t = r.useRef(null),
                        l = r.useRef(e),
                        u = r.useMemo(() => () => {
                            null != t.current && t.current.play(e)
                        }, [e]),
                        o = r.useCallback(() => {
                            if (null == t.current) return;
                            let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                            t.current.play(n)
                        }, [e]),
                        d = r.useCallback(() => {
                            if (null == t.current) return;
                            let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                            t.current.stopIfPlaying(n)
                        }, [e]),
                        c = r.useCallback(e => (0, a.jsx)(s.LottieIcon, {
                            ...e,
                            src: () => n.el("326773").then(n.t.bind(n, "326773", 19)),
                            ref: t,
                            initialAnimation: l.current,
                            markers: i
                        }), []);
                    return {
                        events: {
                            onClick: u,
                            onMouseEnter: o,
                            onMouseLeave: d
                        },
                        play: u,
                        Component: c
                    }
                }
        },
        368598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                r = n("77078"),
                s = n("619443"),
                i = n("153498"),
                l = n("116460"),
                u = n("778588"),
                o = n("708169"),
                d = () => {
                    let e = (0, a.useStateFromStores)([u.default], () => u.default.hasLayers()),
                        t = (0, o.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0),
                        n = (0, i.useIsModalOpen)(),
                        d = (0, r.useModalsStore)(r.hasAnyModalOpen),
                        c = (0, a.useStateFromStores)([s.default], () => s.default.isConnected()),
                        f = (0, a.useStateFromStores)([l.default], () => l.default.isOpen());
                    return e || t || d || n || !c || f
                }
        },
        951212: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canEnableForcedColors: function() {
                    return g
                },
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("913144"),
                i = n("697218"),
                l = n("599110"),
                u = n("773336"),
                o = n("180748"),
                d = n("206230"),
                c = n("49111");
            let f = window.matchMedia("(prefers-reduced-motion: reduce)"),
                h = window.matchMedia("(prefers-contrast: more)"),
                E = window.matchMedia("(prefers-contrast: less)"),
                p = window.matchMedia("(prefers-color-scheme: dark)"),
                m = window.matchMedia("(prefers-color-scheme: light)"),
                C = window.matchMedia("(forced-colors: active)"),
                S = 5;

            function g() {
                return "windows" === (0, u.getOS)()
            }
            var _ = {
                initBasic() {
                    f.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(f), p.addListener(this.handleSystemColorPreferencesChanged), m.addListener(this.handleSystemColorPreferencesChanged), C.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), h.addListener(this.handleSystemPrefersContrastChanged), E.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
                },
                init() {
                    this.initBasic(), s.default.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                        l.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                            colorblind_enabled: d.default.colorblindMode
                        })
                    }), s.default.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
                        l.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                            saturation_level: e.saturation
                        })
                    })
                },
                maybeShowKeyboardNavigationExplainerModal() {
                    S = Math.max(S - 1, 0), ! function() {
                        let e = i.default.getCurrentUser();
                        return null == e || Date.now() - +e.createdAt < 864e5
                    }() && !d.default.keyboardNavigationExplainerModalSeen && 0 === S && (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("856584").then(n.bind(n, "856584"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                },
                handleSystemPrefersReducedMotionChanged(e) {
                    s.default.wait(() => {
                        o.systemPrefersReducedMotionChanged(e.matches ? "reduce" : "no-preference")
                    })
                },
                handleSystemColorPreferencesChanged() {
                    let e;
                    p.matches ? e = c.ThemeTypes.DARK : m.matches && (e = c.ThemeTypes.LIGHT);
                    let t = !u.isPlatformEmbedded || g(),
                        n = t && C.matches ? "active" : "none";
                    s.default.wait(() => {
                        o.systemColorPreferencesChanged(e, n)
                    })
                },
                handleSystemPrefersContrastChanged() {
                    let e = "no-preference";
                    h.matches ? e = "more" : E.matches && (e = "less"), s.default.wait(() => {
                        o.systemPrefersContrastChanged(e)
                    })
                }
            }
        },
        320679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("118810"),
                i = n("446674"),
                l = n("77078"),
                u = n("599110"),
                o = n("791776"),
                d = n("206230"),
                c = n("862013"),
                f = n("49111");

            function h(e) {
                var t;
                let n = e.ctrlKey || e.altKey || e.metaKey;
                if (n || e.keyCode !== f.KeyboardKeys.TAB || null == e.target) return;
                let {
                    target: a
                } = e, r = null === (t = (0, o.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                (0, s.isElement)(a) && u.default.track(f.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
                    shortcut_name: "tab_navigation",
                    source_class_list: null != r ? Array.from(r.classList) : [],
                    location_object: a.tagName
                })
            }

            function E(e) {
                let {
                    children: t
                } = e, n = (0, i.useStateFromStoresObject)([d.default], () => ({
                    enabled: d.default.useReducedMotion,
                    rawValue: d.default.rawPrefersReducedMotion
                })), s = (0, i.useStateFromStoresObject)([d.default], () => ({
                    enabled: d.default.useForcedColors,
                    rawValue: d.default.systemForcedColors
                })), u = (0, i.useStateFromStores)([d.default], () => d.default.alwaysShowLinkDecorations), o = r.useMemo(() => ({
                    reducedMotion: n,
                    prefersCrossfades: !1,
                    forcedColors: s,
                    alwaysShowLinkDecorations: u
                }), [n, s, u]);
                return r.useEffect(() => ((0, c.insertAccessibilityLabelElements)(), window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h)), []), (0, a.jsx)(l.AccessibilityPreferencesContext.Provider, {
                    value: o,
                    children: t
                })
            }
        },
        735890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("452804"),
                i = n("135230"),
                l = n("168973"),
                u = n("782340");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    n = () => {
                        s.default.updatedUnsyncedSettings({
                            disableEmbeddedActivityPopOutAlert: !0
                        }), e()
                    },
                    o = !l.default.disableEmbeddedActivityPopOutAlert;
                o ? (0, r.openModal)(r => (0, a.jsx)(i.default, {
                    confirmText: u.default.Messages.EMBEDDED_ACTIVITIES_YEP,
                    secondaryConfirmText: u.default.Messages.DONT_ASK_AGAIN,
                    title: u.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                    cancelText: u.default.Messages.EMBEDDED_ACTIVITIES_NVM,
                    onConfirm: e,
                    onConfirmSecondary: n,
                    onCancel: t,
                    body: u.default.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING,
                    ...r
                })) : e()
            }
        },
        713726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getGameName: function() {
                    return E
                },
                startBroadcastForStream: function() {
                    return p
                },
                stopBroadcast: function() {
                    return m
                },
                fetchBroadcasterBuckets: function() {
                    return S
                },
                maybeFetchBroadcastChannels: function() {
                    return g
                }
            });
            var a = n("872717"),
                r = n("913144"),
                s = n("161454"),
                i = n("374014"),
                l = n("766274"),
                u = n("271938"),
                o = n("42203"),
                d = n("546463"),
                c = n("9759"),
                f = n("194051"),
                h = n("49111");

            function E(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
                return null != n ? n.trim() : null
            }

            function p(e, t) {
                if (null == t) return;
                let {
                    canBroadcast: n
                } = c.default.getCurrentConfig({
                    location: "start_broadcast_for_stream"
                }, {
                    autoTrackExposure: !1
                });
                if (!n) return;
                let a = (0, i.decodeStreamKey)(e),
                    {
                        ownerId: l,
                        channelId: f
                    } = a;
                if (null == l || null == f) return;
                let h = u.default.getId();
                if (l !== h) return;
                let p = u.default.getSessionId();
                if (null == p) return;
                let m = o.default.getChannel(f),
                    C = null != m && m.isBroadcastChannel();
                if (null == m || l !== m.ownerId || !C) return;
                let S = function(e) {
                    var t;
                    let n = s.default.getGameForPID(e),
                        a = E(n),
                        r = d.default.getGameByName(a);
                    return null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : "0"
                }(t);
                null != S && ! function(e) {
                    let t = u.default.getId(),
                        n = u.default.getSessionId();
                    null != t && null != n && r.default.dispatch({
                        type: "BROADCAST_START",
                        broadcast: e
                    })
                }({
                    sessionId: p,
                    userId: h,
                    applicationId: S,
                    channelId: m.id,
                    streamKey: e
                })
            }

            function m() {
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
            async function S() {
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
                            var a;
                            n[e] = null !== (a = t.body[e]) && void 0 !== a ? a : -1
                        }), r.default.dispatch({
                            type: "BROADCASTER_BUCKETS_RECEIVED",
                            data: n
                        })
                    } else C(e)
                } catch (t) {
                    C(e)
                }
            }
            async function g() {
                let e = f.default.getBroadcastsToValidateChannels(),
                    t = e.filter(e => null == e.viewers).map(e => e.channelId);
                if (0 !== t.length) try {
                    let e = await a.default.get({
                        url: h.Endpoints.BROADCAST_CHANNELS,
                        query: {
                            channel_ids: t
                        }
                    });
                    if (e.ok && null != e.body) {
                        let t = e.body,
                            n = {};
                        t.forEach(e => {
                            var t;
                            let a = f.default.getBroadcastByChannel(e.id).userId,
                                r = null !== (t = e.recipients) && void 0 !== t ? t : [];
                            n[a] = r.map(e => new l.default(e)).filter(e => e.id !== a)
                        }), r.default.dispatch({
                            type: "BROADCAST_VIEWERS_UPDATE",
                            viewers: n
                        })
                    }
                } catch (e) {}
            }
        },
        194051: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var a, r, s = n("917351"),
                i = n("446674"),
                l = n("407846"),
                u = n("913144"),
                o = n("766274"),
                d = n("271938"),
                c = n("299039"),
                f = n("9759"),
                h = n("837374");
            (r = a || (a = {}))[r.INVALID = 0] = "INVALID", r[r.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", r[r.VALID = 2] = "VALID";
            let E = new Set,
                p = new Set,
                m = new Set,
                C = [],
                S = {
                    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
                    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
                    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
                },
                g = new l.default(function(e) {
                    let t = E.has(e.userId) ? 1 : 0;
                    return null != e.viewers && (t = 2), [S.BROADCASTS_BY_USER_ID(e.userId), S.BROADCASTS_BY_CHANNEL_ID(e.channelId), S.BROADCASTS_BY_VALIDITY(t)]
                }, e => e.channelId);

            function _(e, t, n) {
                if (d.default.getId() === e) return !1;
                if (null == t) {
                    let t = g.get(e);
                    return !!(null != t && (0, s.isEqual)(t.source, n)) && (g.delete(e), void 0)
                }!E.has(e) && !p.has(e) && (m.add(e), C = [...m]);
                let a = (0, h.broadcastFromServer)(t, e, n);
                g.set(e, a)
            }

            function v(e) {
                return null != e ? {
                    type: h.BroadcastSourceType.GUILD,
                    guildId: e
                } : {
                    type: h.BroadcastSourceType.GLOBAL
                }
            }
            class T extends i.default.Store {
                getBroadcasts() {
                    return g.values(S.BROADCASTS_BY_VALIDITY(2))
                }
                getBroadcastsToValidateChannels() {
                    return g.values(S.BROADCASTS_BY_VALIDITY(1))
                }
                getBroadcastByChannel(e) {
                    return g.values(S.BROADCASTS_BY_CHANNEL_ID(e))[0]
                }
                getBroadcastByUser(e) {
                    return g.get(e)
                }
                getUserIdsToValidate() {
                    return C
                }
            }
            T.displayName = "BroadcastingStore";
            var I = new T(u.default, {
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
                        _(t.id, n, v(a))
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
                        _(t.id, n, v(a))
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
                        _(t.id, n, v(a))
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
                            _(t.id, a, v(n))
                        })
                    })
                },
                BROADCASTER_BUCKETS_RECEIVED: function(e) {
                    let {
                        data: t
                    } = e;
                    c.default.keys(t).forEach(e => {
                        f.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? E.add(e) : p.add(e), m.clear(), C = [...m];
                        let n = g.get(e);
                        null != n && (g.delete(e), g.set(e, n))
                    })
                },
                BROADCAST_VIEWERS_UPDATE: function(e) {
                    let {
                        viewers: t
                    } = e;
                    Object.entries(t).forEach(e => {
                        let [t, n] = e, a = g.get(t);
                        null != a && g.set(t, {
                            ...a,
                            viewers: n
                        })
                    })
                },
                CHANNEL_RECIPIENT_ADD: function(e) {
                    let {
                        channelId: t,
                        user: n
                    } = e, a = g.values(S.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers || a.viewers.some(e => e.id === n.id)) return !1;
                    g.set(a.userId, {
                        ...a,
                        viewers: [...a.viewers, new o.default(n)]
                    })
                },
                CHANNEL_RECIPIENT_REMOVE: function(e) {
                    let {
                        channelId: t,
                        user: n
                    } = e, a = g.values(S.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers) return !1;
                    g.set(a.userId, {
                        ...a,
                        viewers: a.viewers.filter(e => e.id !== n.id)
                    })
                },
                CHANNEL_CREATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e, a = g.values(S.BROADCASTS_BY_CHANNEL_ID(n.id))[0];
                    if (null == a) return !1;
                    let r = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
                    g.set(a.userId, {
                        ...a,
                        viewers: r.filter(e => e.id !== a.userId).map(e => new o.default(e))
                    })
                },
                LOGOUT: function() {
                    E.clear(), p.clear(), m.clear(), C = [], g.clear()
                }
            })
        },
        705565: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                getCanStartBroadcast: function() {
                    return o
                }
            });
            var a = n("446674"),
                r = n("271938"),
                s = n("42203"),
                i = n("18494"),
                l = n("101125");

            function u() {
                let e = (0, a.useStateFromStores)([r.default], () => r.default.getId()),
                    t = (0, a.useStateFromStores)([i.default], () => i.default.getVoiceChannelId()),
                    n = (0, a.useStateFromStores)([s.default], () => s.default.getChannel(t), [t]),
                    u = (0, a.useStateFromStores)([l.default], () => null != l.default.getBroadcast()),
                    o = (null == n ? void 0 : n.isOwner(e)) && (null == n ? void 0 : n.isBroadcastChannel()),
                    d = o || null == t;
                return !u && d
            }

            function o() {
                if (null != l.default.getBroadcast()) return !1;
                let e = i.default.getVoiceChannelId();
                if (null == e) return !0;
                let t = r.default.getId(),
                    n = s.default.getChannel(e),
                    a = (null == n ? void 0 : n.isOwner(t)) && (null == n ? void 0 : n.isBroadcastChannel());
                return a
            }
        },
        754493: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSelfBroadcast: function() {
                    return o
                },
                default: function() {
                    return d
                },
                useIsBroadcastingInChannel: function() {
                    return c
                },
                isBroadcastingInChannel: function() {
                    return f
                },
                getIsBroadcastingToAnyone: function() {
                    return h
                }
            });
            var a = n("446674"),
                r = n("845579");
            n("373469");
            var s = n("271938"),
                i = n("42203");
            n("18494");
            var l = n("101125"),
                u = n("9759");

            function o() {
                let e = (0, a.useStateFromStores)([s.default], () => s.default.getId()),
                    {
                        canBroadcast: t
                    } = u.default.useExperiment({
                        location: "use_self_broadcast"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = (0, a.useStateFromStores)([l.default], () => l.default.getBroadcast());
                return t && (null == n ? void 0 : n.userId) === e ? n : null
            }

            function d() {
                let e = o();
                return null != e
            }

            function c(e) {
                let t = o(),
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getChannel(e));
                return null != t && null != n && n.ownerId === t.userId && n.isBroadcastChannel()
            }

            function f(e) {
                let t = s.default.getId(),
                    {
                        canBroadcast: n
                    } = u.default.getCurrentConfig({
                        location: "is_broadcasting_in_channel"
                    }, {
                        autoTrackExposure: !1
                    }),
                    a = l.default.getBroadcast();
                if (!n || null == a || a.userId !== t) return !1;
                let r = i.default.getChannel(e);
                return null != r && r.ownerId === a.userId && r.isBroadcastChannel()
            }

            function h() {
                let e = r.BroadcastAllowedGuildIds.getSetting(),
                    t = r.BroadcastAllowedUserIds.getSetting(),
                    n = r.BroadcastAllowFriends.getSetting();
                return n || e.length > 0 || t.length > 0
            }
            n("194051")
        },
        234755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                s = n("77078"),
                i = n("244201"),
                l = n("856343"),
                u = n("373469"),
                o = n("474571"),
                d = n("773336"),
                c = n("162236"),
                f = n("49111"),
                h = n("782340");

            function E(e) {
                let {
                    onClose: t
                } = e, n = (0, i.useAppContext)(), E = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUserActiveStream()), p = (0, l.default)(E, n);
                return (0, a.jsxs)(s.Menu, {
                    onSelect: f.NOOP_NULL,
                    navId: "manage-broadcast",
                    onClose: t,
                    "aria-label": h.default.Messages.SETTINGS,
                    children: [d.isPlatformEmbedded && null != E ? (0, a.jsx)(s.MenuItem, {
                        id: "stream-settings",
                        label: h.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: p
                    }) : null, (0, a.jsx)(s.MenuItem, {
                        id: "broadcast-settings",
                        label: h.default.Messages.BROADCAST_SETTINGS,
                        icon: o.default,
                        action: () => (0, c.openBroadcastingPrivacySettingsModal)()
                    })]
                })
            }
        },
        858944: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openStopBroadcastConfirmModal: function() {
                    return l
                },
                openStartBroadcastConfirmModal: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("713726"),
                i = n("782340");

            function l(e) {
                (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
                    header: i.default.Messages.STOP_STREAMING,
                    confirmText: i.default.Messages.STOP_STREAMING,
                    cancelText: i.default.Messages.CANCEL,
                    onConfirm: () => {
                        (0, s.stopBroadcast)(), e()
                    },
                    ...t,
                    children: (0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: i.default.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
                    })
                }))
            }

            function u(e) {
                (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
                    header: i.default.Messages.START_STREAMING,
                    confirmText: i.default.Messages.START_STREAMING,
                    cancelText: i.default.Messages.CANCEL,
                    onConfirm: e,
                    confirmButtonColor: r.Button.Colors.BRAND,
                    ...t,
                    children: (0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: i.default.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY
                    })
                }))
            }
        },
        162236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openBroadcastingPrivacySettingsModal: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078");

            function s(e, t, s) {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: r
                    } = await n.el("725420").then(n.bind(n, "725420"));
                    return n => (0, a.jsx)(r, {
                        headerText: e,
                        buttonCTA: t,
                        onSave: s,
                        ...n
                    })
                })
            }
        },
        181832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCallBannerBackgroundExperiment: function() {
                    return s
                }
            });
            var a = n("862205");
            let r = (0, a.createExperiment)({
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

            function s(e, t) {
                return r.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: e
                })
            }
        },
        161306: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("99795"),
                r = n("353927");
            let s = Object.freeze({
                [a.ParticipantTypes.STREAM]: r.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.HIDDEN_STREAM]: r.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.USER]: r.MediaEngineContextTypes.DEFAULT,
                [a.ParticipantTypes.ACTIVITY]: r.MediaEngineContextTypes.DEFAULT
            });

            function i(e) {
                return s[e]
            }
        },
        836087: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("70102"), n("222007");
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("917351"),
                u = n.n(l),
                o = n("446674"),
                d = n("862337"),
                c = n("77078"),
                f = n("272030"),
                h = n("901582"),
                E = n("373469"),
                p = n("697218"),
                m = n("427302"),
                C = n("462579"),
                S = n("449008"),
                g = n("387111"),
                _ = n("99795"),
                v = n("49111"),
                T = n("782340"),
                I = n("964376");

            function A(e, t) {
                switch (e) {
                    case _.ParticipantTypes.ACTIVITY:
                        return T.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                            numUsers: t
                        });
                    case _.ParticipantTypes.STREAM:
                        return T.default.Messages.SPECTATORS.format({
                            numViewers: t
                        });
                    default:
                        throw Error("Unknown participant type.")
                }
            }

            function M(e) {
                let {
                    users: t,
                    disableInteraction: n,
                    guildId: r,
                    participantType: s,
                    channelId: l,
                    handleUserContextMenu: u
                } = e, o = A(s, t.length);
                return (0, a.jsx)(c.Dialog, {
                    "aria-label": o,
                    className: I.popoutWrapper,
                    children: (0, a.jsxs)(c.Scroller, {
                        className: I.scroller,
                        children: [(0, a.jsx)(c.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: I.memberListHeader,
                            children: o
                        }), (0, a.jsx)("div", {
                            children: t.map(e => (0, a.jsx)(m.default, {
                                guildId: null != r ? r : void 0,
                                className: i(I.memberListItem, {
                                    [I.popoutDisabled]: n
                                }),
                                textClassName: I.memberListItemText,
                                user: e,
                                disablePopout: n,
                                nick: g.default.getNickname(r, l, e),
                                onContextMenu: t => n ? null : u(t, e)
                            }, e.id))
                        })]
                    })
                })
            }

            function R(e) {
                let {
                    users: t,
                    guildId: n,
                    channelId: r,
                    maxVisibleUsers: s = 3,
                    className: l,
                    participantType: u
                } = e, o = A(u, t.length), d = t.length < s ? t.map(e => (0, a.jsx)("div", {
                    className: I.viewersTooltipItem,
                    children: g.default.getName(n, r, e)
                }, e.id)) : o;
                return (0, a.jsx)(c.TooltipContainer, {
                    text: d,
                    "aria-label": o,
                    children: (0, a.jsxs)("div", {
                        className: i(I.viewers, l),
                        children: [(0, a.jsx)(C.default, {
                            className: I.viewersIcon
                        }), (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            children: t.length
                        })]
                    })
                })
            }
            let y = [];

            function N(e) {
                let {
                    channelId: t,
                    guildId: s,
                    participant: l,
                    className: m,
                    compact: C = !1,
                    disableInteraction: g = !1,
                    maxVisibleUsers: T = 3
                } = e, [A, N] = r.useState(!1), O = r.useRef(new d.DelayedCall(150, () => N(!1))), L = (0, o.useStateFromStoresArray)([E.default, p.default], () => {
                    if (l.type === _.ParticipantTypes.STREAM) {
                        let e = E.default.getViewerIds(l.id);
                        return e.length > 0 ? e.map(e => p.default.getUser(e)).filter(S.isNotNullish) : y
                    }
                    return l.type === _.ParticipantTypes.ACTIVITY ? l.participants.size > 0 ? Array.from(l.participants).map(e => p.default.getUser(e)).filter(S.isNotNullish) : y : y
                }, [l]), x = r.useCallback(() => {
                    O.current.cancel(), N(!0)
                }, []), P = r.useCallback(() => {
                    O.current.delay()
                }, []), D = r.useCallback((e, t) => {
                    x(), (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("406784").then(n.bind(n, "406784"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            user: t
                        })
                    }, {
                        onClose: P
                    })
                }, [P, x]);
                if (0 === L.length) return null;
                if (C) return (0, a.jsx)(R, {
                    maxVisibleUsers: T,
                    users: L,
                    guildId: s,
                    channelId: t,
                    className: m,
                    participantType: l.type
                });
                let b = u(L).take(T).map(e => (0, a.jsx)(c.Avatar, {
                    src: e.getAvatarURL(s, 24),
                    "aria-label": e.username,
                    size: c.AvatarSizes.SIZE_24,
                    className: I.viewer
                }, e.id)).value();
                return L.length > T && (b[b.length - 1] = (0, a.jsxs)("div", {
                    className: I.overflow,
                    children: ["+", L.length - T + 1]
                }, "overflow")), (0, a.jsx)(h.default, {
                    section: v.AnalyticsSections.STREAM_VIEWER_POPOUT,
                    children: (0, a.jsx)("div", {
                        onMouseEnter: x,
                        onMouseLeave: P,
                        children: (0, a.jsx)(c.Popout, {
                            renderPopout: () => (0, a.jsx)(M, {
                                participantType: l.type,
                                handleUserContextMenu: D,
                                guildId: s,
                                channelId: t,
                                users: L,
                                disableInteraction: g
                            }),
                            shouldShow: A,
                            position: "top",
                            children: () => (0, a.jsx)("div", {
                                className: i(I.viewers, m),
                                children: b
                            })
                        })
                    })
                })
            }
        },
        976074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                s = n("77078"),
                i = n("374014"),
                l = n("582415"),
                u = n("271938"),
                o = n("205817"),
                d = n("782340");

            function c(e, t, c) {
                var f;
                let h = (0, l.useGetStreamApplication)(e),
                    E = (0, r.useStateFromStores)([u.default], () => u.default.getId()),
                    p = null != e ? (0, i.encodeStreamKey)(e) : o.default.getActiveStreamKey(),
                    m = null !== (f = o.default.getVideoStats(p)) && void 0 !== f ? f : {},
                    C = {
                        media_session_id: o.default.getMediaSessionId(p),
                        rtc_connection_id: o.default.getRtcConnectionId(p),
                        stream_region: o.default.getRegion(p),
                        max_viewers: o.default.getMaxViewers(p),
                        ...m
                    };
                return null == e ? null : (0, a.jsx)(s.MenuItem, {
                    id: "report-stream-problem",
                    label: d.default.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
                    action: () => {
                        null == c || c(), null != e && (0, s.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("485857").then(n.bind(n, "485857"));
                            return n => (0, a.jsx)(t, {
                                stream: e,
                                streamApplication: h,
                                isStreamer: E === (null == e ? void 0 : e.ownerId),
                                analyticsData: C,
                                ...n
                            })
                        })
                    }
                })
            }
        },
        856343: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("446674"),
                i = n("77078"),
                l = n("629109"),
                u = n("997289"),
                o = n("773356"),
                d = n("268491"),
                c = n("305961"),
                f = n("42887"),
                h = n("697218"),
                E = n("49111"),
                p = n("686298"),
                m = n("353927"),
                C = n("782340");

            function S(e, t) {
                let {
                    preset: S,
                    resolution: g,
                    fps: _
                } = (0, s.useStateFromStoresObject)([d.default], () => d.default.getState()), v = (0, s.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), T = (0, s.useStateFromStores)([h.default], () => h.default.getCurrentUser()), I = (0, s.useStateFromStores)([c.default], () => {
                    var t;
                    return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
                }), {
                    location: A
                } = (0, u.useAnalyticsContext)(), M = r.useCallback((e, r, s, u) => {
                    if (e) {
                        if (null != v) {
                            let e = {
                                qualityOptions: {
                                    preset: p.ApplicationStreamPresets.PRESET_CUSTOM,
                                    resolution: r,
                                    frameRate: s
                                },
                                context: m.MediaEngineContextTypes.STREAM
                            };
                            null != v.desktopSource ? e.desktopSettings = {
                                sourceId: v.desktopSource.id,
                                sound: !0
                            } : null != v.cameraSource && (e.cameraSettings = {
                                videoDeviceGuid: v.cameraSource.videoDeviceGuid,
                                audioDeviceGuid: v.cameraSource.audioDeviceGuid
                            }), l.default.setGoLiveSource(e)
                        }
                    } else {
                        var o, d;
                        o = t, d = {
                            ...A,
                            object: E.AnalyticsObjects.RADIO_ITEM,
                            objectType: u
                        }, (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("754534").then(n.bind(n, "754534"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                analyticsSource: d
                            })
                        }, {
                            contextKey: o === E.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
                        })
                    }
                }, [t, A, v]);
                if (null == e) return null;
                let R = S === p.ApplicationStreamPresets.PRESET_DOCUMENTS ? p.ApplicationStreamFPS.FPS_30 : _,
                    y = p.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, r = (0, o.default)(p.ApplicationStreamPresets.PRESET_CUSTOM, g, t, T, I);
                        return (0, a.jsx)(i.MenuRadioItem, {
                            group: "stream-settings-fps",
                            id: "stream-settings-fps-".concat(t),
                            label: n,
                            checked: t === _,
                            action: () => M(r, g, t, E.AnalyticsObjectTypes.RESOLUTION)
                        }, "stream-settings-fps-".concat(t))
                    }),
                    N = p.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, r = (0, o.default)(p.ApplicationStreamPresets.PRESET_CUSTOM, t, R, T, I);
                        return (0, a.jsx)(i.MenuRadioItem, {
                            group: "stream-settings-resolution",
                            id: "stream-settings-resolution-".concat(t),
                            label: n,
                            checked: t === g,
                            action: () => M(r, t, R, E.AnalyticsObjectTypes.RESOLUTION)
                        }, "stream-settings-resolution-".concat(t))
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.MenuGroup, {
                        label: C.default.Messages.SCREENSHARE_FRAME_RATE,
                        children: y
                    }), (0, a.jsx)(i.MenuGroup, {
                        label: C.default.Messages.STREAM_RESOLUTION,
                        children: N
                    })]
                })
            }
        },
        338733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CLIENT_THEMES_DATA_ATTRIBUTE: function() {
                    return i
                },
                default: function() {
                    return o
                }
            });
            var a = n("884691"),
                r = n("446674"),
                s = n("714657");
            let i = "data-client-themes",
                l = "custom-theme-background",
                u = () => {
                    let e = (0, r.useStateFromStores)([s.default], () => s.default.getLinearGradient()),
                        t = (0, a.useMemo)(() => null == e ? null : ".".concat(l, " {\n      --custom-theme-background: ").concat(e, ";\n    }"), [e]);
                    return t
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
        709377: function(e, t, n) {
            "use strict";
            var a, r, s, i, l;
            n.r(t), n.d(t, {
                ContentInventoryFeedKey: function() {
                    return a
                },
                ContentInventorySurfaceTypes: function() {
                    return r
                },
                ContentInventoryInteractionTypes: function() {
                    return s
                }
            }), (a || (a = {})).GLOBAL_FEED = "global feed", (i = r || (r = {}))[i.GUILD_MEMBER_LIST = 1] = "GUILD_MEMBER_LIST", (l = s || (s = {}))[l.CARD_HOVER = 1] = "CARD_HOVER", l[l.CARD_CLICK = 2] = "CARD_CLICK", l[l.REACTION_EMOJI_REACT_SENT = 3] = "REACTION_EMOJI_REACT_SENT", l[l.REACTION_MESSAGE_SENT = 4] = "REACTION_MESSAGE_SENT"
        },
        265596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var a = n("446674"),
                r = n("913144");
            let s = new Map;
            class i extends a.default.Store {
                getFeed(e) {
                    return s.get(e)
                }
                getFeedRequestId(e) {
                    var t;
                    return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id
                }
            }
            i.displayName = "ContentInventoryStore";
            var l = new i(r.default, {
                CONNECTION_OPEN: function() {
                    s.clear()
                },
                CONTENT_INVENTORY_SET_FEED: function(e) {
                    let {
                        feedId: t,
                        feed: n
                    } = e;
                    s.set(t, n)
                }
            })
        },
        779601: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("773336");

            function r() {
                let e = "";
                return (0, a.isWindows)() ? e = "platform-win" : (0, a.isMac)() ? e = "platform-osx" : (0, a.isLinux)() ? e = "platform-linux" : (0, a.isWeb)() && (e = "platform-web"), __OVERLAY__ ? "".concat(e, " platform-overlay") : e
            }
        },
        967889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var a = n("37983"),
                r = n("884691"),
                s = n("917351"),
                i = n.n(s),
                l = n("88807"),
                u = n("558062"),
                o = n("432710"),
                d = n("446674"),
                c = n("77078"),
                f = n("960460"),
                h = n("489740"),
                E = n("355025"),
                p = n("51545"),
                m = n("155084"),
                C = n("393414"),
                S = n("90404"),
                g = n("599110"),
                _ = n("286235"),
                v = n("50885"),
                T = n("49111"),
                I = n("782340"),
                A = n("966585");

            function M() {
                let [e, t] = r.useState(!1), n = (0, d.useStateFromStores)([h.default], () => {
                    var e;
                    return (0, E.probablyHasBuildOverride)() ? null === (e = h.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
                });
                if (null == n) return null;
                let s = async () => {
                    try {
                        t(!0), await (0, f.clearBuildOverride)(), window.location.reload(!0)
                    } catch (e) {
                        t(!1)
                    }
                };
                return (0, a.jsx)(c.Button, {
                    size: c.ButtonSizes.LARGE,
                    onClick: s,
                    submitting: e,
                    className: A.clearOverrideButton,
                    children: I.default.Messages.CLEAR_BUILD_OVERRIDE
                })
            }
            let R = i.throttle(() => {
                m.default.increment({
                    name: o.MetricEvents.APP_CRASHED,
                    tags: ["reason:".concat(l.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(u.ErrorLevels.FATAL)]
                }, !0)
            }, 100, {
                trailing: !1
            });
            class y extends r.PureComponent {
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
                    g.default.track(T.AnalyticEvents.APP_CRASHED, {
                        path: n.pathname,
                        extra: t,
                        error_message: e.message,
                        error_stack: e.stack,
                        sentry_issue_id: a,
                        uses_client_mods: (0, p.usesClientMods)()
                    }), R(), v.default.cleanupDisplaySleep()
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
                                    children: I.default.Messages.ERRORS_UNEXPECTED_CRASH
                                }), (0, a.jsx)("p", {
                                    children: I.default.Messages.ERRORS_ACTION_TO_TAKE
                                })]
                            }),
                            n = (0, a.jsxs)("div", {
                                className: A.buttons,
                                children: [(0, a.jsx)(c.Button, {
                                    size: c.ButtonSizes.LARGE,
                                    onClick: this._handleSubmitReport,
                                    children: I.default.Messages.ERRORS_RELOAD
                                }), (0, a.jsx)(M, {})]
                            });
                        return (0, a.jsx)(S.default, {
                            title: I.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                            note: null != t ? t() : e,
                            action: n,
                            className: A.errorPage
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
            var N = y
        },
        160139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                i = n("446674"),
                l = n("77078"),
                u = n("368598"),
                o = n("49671"),
                d = n("244201"),
                c = n("191145"),
                f = n("270227"),
                h = n("940277"),
                E = n("386811"),
                p = n("964264"),
                m = n("655804"),
                C = n("58463"),
                S = n("238500"),
                g = n("773336"),
                _ = n("439932"),
                v = n("50885"),
                T = n("782340"),
                I = n("804392");
            let A = e => v.default.close(e),
                M = e => v.default.minimize(e),
                R = (e, t) => {
                    (0, g.isMac)() && !t.altKey ? v.default.fullscreen(e) : v.default.maximize(e)
                },
                y = e => {
                    let {
                        windowKey: t,
                        themeOverride: n,
                        hasOpenLayer: r
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: s(I.typeWindows, (0, _.getThemeClass)(n), {
                            [I.withBackgroundOverride]: !r
                        }),
                        children: [(0, a.jsx)("div", {
                            className: I.wordmarkWindows,
                            children: (0, a.jsx)(f.default, {})
                        }), (0, a.jsx)(l.Clickable, {
                            className: I.winButtonClose,
                            onClick: () => A(t),
                            "aria-label": T.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(h.default, {})
                        }), (0, a.jsx)(l.Clickable, {
                            className: I.winButtonMinMax,
                            onClick: e => R(t, e),
                            "aria-label": T.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(p.default, {})
                        }), (0, a.jsx)(l.Clickable, {
                            className: I.winButtonMinMax,
                            onClick: () => M(t),
                            "aria-label": T.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(C.default, {})
                        })]
                    })
                },
                N = e => {
                    let {
                        focused: t,
                        windowKey: n,
                        frame: r,
                        themeOverride: i,
                        hasOpenLayer: u
                    } = e;
                    return (0, a.jsxs)(l.Clickable, {
                        className: s(r ? I.typeMacOSWithFrame : I.typeMacOS, t ? I.focused : I.unfocused, (0, _.getThemeClass)(i), {
                            [I.withBackgroundOverride]: !u
                        }),
                        onDoubleClick: () => v.default.maximize(n),
                        tabIndex: -1,
                        children: [o.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, a.jsx)("div", {
                            className: I.macDragRegion
                        }) : (0, a.jsxs)("div", {
                            className: I.macButtons,
                            children: [(0, a.jsx)(l.Clickable, {
                                className: I.macButtonClose,
                                onClick: () => A(n),
                                "aria-label": T.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(E.default, {
                                    color: "#4c0000"
                                })
                            }), (0, a.jsx)(l.Clickable, {
                                className: I.macButtonMinimize,
                                onClick: () => M(n),
                                "aria-label": T.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(S.default, {
                                    color: "#975500"
                                })
                            }), (0, a.jsx)(l.Clickable, {
                                className: I.macButtonMaximize,
                                onClick: e => R(n, e),
                                "aria-label": T.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(m.default, {
                                    color: "#006500"
                                })
                            })]
                        }), r ? (0, a.jsx)("div", {
                            className: I.wordmarkMacOS,
                            children: (0, a.jsx)(f.default, {
                                color: "#ffffff"
                            })
                        }) : null]
                    })
                };

            function O(e) {
                let {
                    focused: t,
                    type: n,
                    windowKey: r,
                    macOSFrame: s = !1,
                    themeOverride: l
                } = e, o = (0, d.useAppContext)(), f = (0, i.useStateFromStores)([c.default], () => c.default.isFullscreenInContext(o)), h = (0, u.default)();
                if (f) return null;
                switch (n) {
                    case g.PlatformTypes.WINDOWS:
                        return (0, a.jsx)(y, {
                            windowKey: r,
                            themeOverride: l,
                            hasOpenLayer: h
                        });
                    case g.PlatformTypes.OSX:
                        return (0, a.jsx)(N, {
                            focused: t,
                            windowKey: r,
                            frame: s,
                            themeOverride: l,
                            hasOpenLayer: h
                        });
                    default:
                        return null
                }
            }
        },
        983689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("884691"),
                r = n("446674"),
                s = n("551042"),
                i = n("77078"),
                l = n("485328"),
                u = n("180748"),
                o = n("206230"),
                d = n("951212"),
                c = n("227602"),
                f = n("791776"),
                h = n("13798"),
                E = n("49111"),
                p = n("894282");

            function m(e) {
                let t = e.ctrlKey || e.altKey || e.metaKey;
                e.key === p.KeyboardEventKey.Tab && !t && !__OVERLAY__ && !(0, s.hasAnyModalOpen)() && d.default.maybeShowKeyboardNavigationExplainerModal()
            }

            function C() {
                (0, u.disableKeyboardMode)()
            }
            var S = function(e, t) {
                let n = (0, r.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled);
                (0, i.useFocusJumpSectionManager)(n);
                let s = (0, a.useCallback)(e => {
                    ! function(e, t) {
                        var n, a;
                        let r = (0, f.isInputLikeElement)(null === (n = (0, f.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement);
                        if (r && e.key !== p.KeyboardEventKey.Tab) return;
                        let s = e.ctrlKey || e.altKey || e.metaKey || e.key !== p.KeyboardEventKey.Tab && e.shiftKey;
                        if (s) return;
                        let i = function(e) {
                            let t = h.keyToCode("shift"),
                                n = h.keyToCode("tab");
                            if (e.key === p.KeyboardEventKey.Tab && e.shiftKey && null != t && null != n) return [
                                [E.KeyboardDeviceTypes.KEYBOARD_KEY, t],
                                [E.KeyboardDeviceTypes.KEYBOARD_KEY, n]
                            ];
                            let a = p.NavigationKeyShortcutMap.get(e.key);
                            if (null != a) {
                                let e = h.keyToCode(a);
                                if (null != e) return [
                                    [E.KeyboardDeviceTypes.KEYBOARD_KEY, e]
                                ]
                            }
                            return null
                        }(e);
                        null != i && !c.default.hasExactKeybind(i) && !l.default.hasBind(null !== (a = h.codeToKey(i[0])) && void 0 !== a ? a : "") && ((0, u.enableKeyboardMode)(), r && !t && e.preventDefault())
                    }(e, t)
                }, [t]);
                return (0, a.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", C), e.addEventListener("keydown", m)) : e.addEventListener("keydown", s), () => {
                    n ? (e.removeEventListener("mousedown", C), e.removeEventListener("keydown", m)) : e.removeEventListener("keydown", s)
                }), [e, s, n]), n
            }
        },
        628922: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var a = n("884691"),
                r = n("244201"),
                s = n("49111");
            let i = ["Shift", "Alt", "Meta", "Control"];

            function l(e, t) {
                let [n, l] = a.useState(0), u = (0, r.useWindowDispatch)();
                a.useEffect(() => {
                    let e = () => l(e => e + 1),
                        t = () => l(e => Math.max(0, e - 1));
                    return u.subscribe(s.ComponentActions.POPOUT_SHOW, e), u.subscribe(s.ComponentActions.POPOUT_HIDE, t), () => {
                        u.unsubscribe(s.ComponentActions.POPOUT_SHOW, e), u.unsubscribe(s.ComponentActions.POPOUT_HIDE, t)
                    }
                }, [u]);
                let [o, d] = a.useState(!1);
                return a.useLayoutEffect(() => {
                    let a = e => {
                            if ((!t || n > 0) && o) {
                                d(!1);
                                return
                            }!(!o && n > 0 || e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || i.indexOf(e.key) >= 0)) && d(e => !e)
                        },
                        r = o ? "keyup" : "mousemove";
                    return t && e.addEventListener(r, a), () => null == e ? void 0 : e.removeEventListener(r, a)
                }, [e, o, n, t]), t && 0 === n && o
            }
        },
        51545: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usesClientMods: function() {
                    return i
                },
                initSentry: function() {
                    return u
                }
            }), n("222007");
            var a = n("245123"),
                r = n("316217");
            let s = ["oppobrowser", "realmebrowser", "heytapbrowser"];

            function i() {
                let e = window;
                return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox
            }
            let l = (0, r.filterThrottle)({
                maxBudgetMinute: 1,
                maxBudgetHour: 3
            });

            function u() {
                var e;
                a.init({
                    tunnel: "/error-reporting-proxy/web",
                    dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
                    autoSessionTracking: !1,
                    environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                    release: "discord_web-a72ae699709796dc4e0c61ae14d0046a796c00bb",
                    beforeSend: e => {
                        var t, n;
                        return !(null != (t = e).exception && null != t.exception.values && t.exception.values.every(e => null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || s.some(e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !i() && !("Aborted" === (n = e).message || "cancel captcha" === n.message) && l() ? e : null
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
                }), a.setTag("buildNumber", (e = "276436", "276436")), a.setTag("builtAt", String("1710822184439"));
                let t = window.GLOBAL_ENV.SENTRY_TAGS;
                if (null != t && "object" == typeof t)
                    for (let e in t) a.setTag(e, t[e]);
                return a
            }
        },
        479788: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("353927");

            function r(e) {
                return e.supportsInApp(a.Features.VIDEO) && e.supportsInApp(a.Features.DESKTOP_CAPTURE)
            }
        },
        773356: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var a = n("294707"),
                r = n("686298");

            function s(e, t, n, s, i) {
                for (let l of r.ApplicationStreamSettingRequirements)
                    if ((null == l.preset || e === l.preset) && t === l.resolution && n === l.fps && (0, a.default)(l, s, i)) return !0;
                return !1
            }
        },
        294707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("427459"),
                r = n("719923"),
                s = n("646718");

            function i(e, t, n) {
                if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
                let i = !1;
                return null != e.quality && (e.quality === s.StreamQualities.HIGH_STREAMING_QUALITY ? i = i || r.default.canStreamQuality(r.default.StreamQuality.HIGH, t) : e.quality === s.StreamQualities.MID_STREAMING_QUALITY && (i = i || r.default.canStreamQuality(r.default.StreamQuality.MID, t))), null != e.guildPremiumTier && (i = i || (0, a.isGuildBoostedAtLeast)(n, e.guildPremiumTier)), i
            }
        },
        430951: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("387111"),
                r = n("49111"),
                s = n("782340");

            function i(e, t, n, i) {
                if (e.state === r.ApplicationStreamStates.RECONNECTING) return {
                    mainText: s.default.Messages.STREAM_RECONNECTING_ERROR,
                    supportingText: s.default.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
                };
                if (e.state === r.ApplicationStreamStates.PAUSED) return n ? {
                    mainText: s.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: s.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS
                } : {
                    mainText: s.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: s.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
                        username: a.default.getName(e.guildId, e.channelId, t)
                    })
                };
                return i ? {
                    mainText: s.default.Messages.STREAM_PREVIEW_PAUSED,
                    supportingText: s.default.Messages.STREAM_PREVIEW_PAUSED_SUBTEXT
                } : null
            }
        },
        349171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("773336"),
                r = n("50885");

            function s(e) {
                a.isPlatformEmbedded ? r.default.focus(e) : window.focus()
            }
        },
        16916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("629109"),
                r = n("990766"),
                s = n("271938"),
                i = n("374014");

            function l(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == e) return;
                let {
                    streamType: n,
                    guildId: l,
                    channelId: u,
                    ownerId: o
                } = e, d = (0, i.encodeStreamKey)({
                    streamType: n,
                    guildId: l,
                    channelId: u,
                    ownerId: o
                });
                o === s.default.getId() && a.default.setGoLiveSource(null), r.stopStream(d, t)
            }
        },
        774539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsVoiceUserGameActivityEnabled: function() {
                    return s
                },
                isVoiceUserGameActivityEnabled: function() {
                    return i
                },
                default: function() {
                    return l
                }
            });
            var a = n("862205");
            let r = (0, a.createExperiment)({
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

            function s(e, t) {
                let {
                    showGameIcon: n
                } = r.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: t
                });
                return n
            }

            function i(e, t) {
                let {
                    showGameIcon: n
                } = r.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: t
                });
                return n
            }
            var l = r
        },
        233965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateHangStatus: function() {
                    return o
                },
                updateCustomHangStatus: function() {
                    return d
                },
                clearHangStatus: function() {
                    return c
                }
            });
            var a = n("913144"),
                r = n("42203"),
                s = n("945956"),
                i = n("18494"),
                l = n("599110"),
                u = n("49111");

            function o(e, t) {
                var n;
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
                    channel_id: i.default.getVoiceChannelId(),
                    guild_id: null === (n = r.default.getChannel(i.default.getVoiceChannelId())) || void 0 === n ? void 0 : n.guild_id,
                    media_session_id: s.default.getMediaSessionId()
                })
            }

            function d(e, t, n) {
                var o;
                if ("" === e || null == t) {
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
                    channel_id: i.default.getVoiceChannelId(),
                    guild_id: null === (o = r.default.getChannel(i.default.getVoiceChannelId())) || void 0 === o ? void 0 : o.guild_id,
                    media_session_id: s.default.getMediaSessionId()
                })
            }

            function c(e) {
                var t;
                a.default.dispatch({
                    type: "CLEAR_HANG_STATUS",
                    saveAsDefault: e
                }), l.default.track(u.AnalyticEvents.CLEAR_HANG_STATUS, {
                    channel_id: i.default.getVoiceChannelId(),
                    guild_id: null === (t = r.default.getChannel(i.default.getVoiceChannelId())) || void 0 === t ? void 0 : t.guild_id,
                    media_session_id: s.default.getMediaSessionId()
                })
            }
        },
        984519: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HIGH_FIVE_EMOJIS: function() {
                    return a
                }
            }), n("222007");
            let a = new Set(["\uD83D\uDD90", "✋"])
        },
        170152: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                r = n("913144");
            let s = {
                    enabled: !1
                },
                i = {},
                l = {},
                u = !1;
            class o extends a.default.DeviceSettingsStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                    u = e.enabled
                }
                getWaitingHighFive(e, t) {
                    var n;
                    return null === (n = i[e]) || void 0 === n ? void 0 : n[t]
                }
                getCompletedHighFive(e, t) {
                    var n;
                    return null === (n = l[e]) || void 0 === n ? void 0 : n[t]
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
            o.persistKey = "HighFiveStore";
            var d = new o(r.default, {
                HIGH_FIVE_QUEUE: function(e) {
                    let {
                        userId: t,
                        channelId: n,
                        emoji: a
                    } = e;
                    i[n] = {
                        ...i[n],
                        [t]: a
                    }
                },
                HIGH_FIVE_REMOVE: function(e) {
                    let {
                        userId: t,
                        channelId: n
                    } = e, a = i[n];
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
                    var t;
                    let {
                        completingEmoji: n,
                        completingUserId: a,
                        waitingUserId: r,
                        channelId: s
                    } = e, u = null !== (t = i[s]) && void 0 !== t ? t : {}, o = u[r];
                    if (delete u[r], null == o) return !1;
                    l[s] = {
                        ...l[s],
                        [r]: [o, n],
                        [a]: [n, o]
                    }
                },
                HIGH_FIVE_COMPLETE_CLEAR: function(e) {
                    var t;
                    let {
                        firstUserId: n,
                        secondUserId: a,
                        channelId: r
                    } = e, s = null !== (t = l[r]) && void 0 !== t ? t : {};
                    delete s[n], delete s[a]
                }
            })
        },
        391591: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("781738");
            var a = n("984519");
            let r = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

            function s(e) {
                return a.HIGH_FIVE_EMOJIS.has(e.replace(r, ""))
            }
        },
        723872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isRTCConnectedInHub: function() {
                    return u
                },
                useConnectedInCurrentHub: function() {
                    return o
                }
            });
            var a = n("446674"),
                r = n("42203"),
                s = n("305961"),
                i = n("18494"),
                l = n("49111");
            let u = () => {
                    let e = i.default.getVoiceChannelId();
                    if (null == e) return !1;
                    let t = r.default.getChannel(e);
                    if (null == t) return !1;
                    let n = s.default.getGuild(t.getGuildId());
                    return null != n && n.hasFeature(l.GuildFeatures.HUB)
                },
                o = e => (0, a.useStateFromStores)([i.default, r.default, s.default], () => {
                    let t = i.default.getVoiceChannelId();
                    if (null == t) return !1;
                    let n = r.default.getChannel(t);
                    if (null == n) return !1;
                    let a = s.default.getGuild(n.getGuildId());
                    return null != a && a.id === e
                })
        },
        821240: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSafetyAlertsSettingOrDefault: function() {
                    return i
                },
                getInappropriateConversationTakeoverForChannel: function() {
                    return l
                },
                shouldShowTakeoverForWarnings: function() {
                    return u
                }
            });
            var a = n("374363"),
                r = n("764828"),
                s = n("217736");

            function i() {
                var e, t, n;
                let r = null === (n = null === (t = a.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n,
                    i = (0, s.getUserIsTeen)("safety_warnings_setting");
                return i && r
            }

            function l(e) {
                let t = function(e) {
                        let t = r.default.getChannelSafetyWarnings(e);
                        return t.filter(e => e.type === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)
                    }(e),
                    n = t.filter(e => null != e.dismiss_timestamp);
                if (n.length > 0) return null;
                let a = t.filter(e => null == e.dismiss_timestamp);
                return 1 === a.length ? a[0] : null
            }

            function u(e) {
                let t = e.filter(e => e.type === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
                return t.length > 0 && t.every(e => null == e.dismiss_timestamp)
            }
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return l
                },
                useStageParticipantsCount: function() {
                    return u
                },
                useSortedRequestToSpeakParticipants: function() {
                    return o
                },
                useActualStageSpeakerCount: function() {
                    return d
                }
            }), n("222007");
            var a = n("446674"),
                r = n("334572"),
                s = n("488464"),
                i = n("998716");

            function l(e, t) {
                let [n] = (0, a.useStateFromStores)([s.default], () => [s.default.getMutableParticipants(e, t), s.default.getParticipantsVersion(e)], [e, t], r.isVersionEqual);
                return n
            }

            function u(e, t) {
                return (0, a.useStateFromStores)([s.default], () => s.default.getParticipantCount(e, t), [e, t])
            }

            function o(e) {
                let [t] = (0, a.useStateFromStores)([s.default], () => {
                    let t = s.default.getMutableRequestToSpeakParticipants(e);
                    return [t, s.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], r.isVersionEqual);
                return t
            }

            function d(e) {
                return (0, a.useStateFromStores)([s.default], () => {
                    let t = s.default.getMutableParticipants(e, i.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === i.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        924872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowStageMusicMuteButton: function() {
                    return g
                },
                shouldShowStageMusicMuteButton: function() {
                    return _
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("446674"),
                r = n("689988"),
                s = n("42203"),
                i = n("42887"),
                l = n("18494"),
                u = n("800762"),
                o = n("709681"),
                d = n("488464"),
                c = n("567469"),
                f = n("998716"),
                h = n("834052"),
                E = n("274438");
            let p = e => e / 400,
                m = !1,
                C = (0, o.createSound)("stage_waiting", "stage_waiting", p(i.default.getOutputVolume()));

            function S() {
                let e = l.default.getVoiceChannelId();
                if (null == e) {
                    C.stop(), m = !1;
                    return
                }
                let t = s.default.getChannel(e);
                if (!(null == t ? void 0 : t.isGuildStageVoice())) {
                    C.stop(), m = !1;
                    return
                }
                let n = i.default.isSelfDeaf();
                if (n) {
                    C.stop(), m = !1;
                    return
                }
                let a = E.default.shouldPlay();
                if (a) {
                    C.volume = p(i.default.getOutputVolume()), C.loop(), m = !0;
                    return
                }
                let r = h.default.isLive(e);
                if (r) {
                    C.stop(), m = !1;
                    return
                }
                let o = E.default.isMuted();
                if (o) {
                    C.pause(), m = !1;
                    return
                }
                let d = null != Object.values(u.default.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
                d || m ? d && (C.pause(), m = !1) : (C.volume = p(i.default.getOutputVolume()), C.loop(), m = !0)
            }

            function g(e) {
                let t = (0, a.useStateFromStores)([l.default], () => l.default.getVoiceChannelId() === e),
                    n = (0, c.useStageParticipants)(e, f.StageChannelParticipantNamedIndex.SPEAKER),
                    r = null != n.find(e => !e.voiceState.isVoiceMuted()),
                    s = (0, a.useStateFromStores)([h.default], () => h.default.getStageInstanceByChannel(e));
                return t && null == s && !r
            }

            function _(e) {
                let t = l.default.getVoiceChannelId() === e,
                    n = d.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER),
                    a = null != n.find(e => !e.voiceState.isVoiceMuted()),
                    r = h.default.getStageInstanceByChannel(e);
                return t && null == r && !a
            }
            class v extends r.default {
                handleVoiceChannelSelect(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null != t) {
                        let e = s.default.getChannel(t);
                        (null == e ? void 0 : e.isGuildStageVoice()) ? S(): (C.stop(), m = !1)
                    } else C.stop(), m = !1
                }
                handleLogout() {
                    C.stop(), m = !1
                }
                handlePlay(e) {
                    let {
                        play: t
                    } = e;
                    t ? S() : (C.pause(), m = !1)
                }
                handleMute(e) {
                    let {
                        muted: t
                    } = e;
                    t ? (C.pause(), m = !1) : S()
                }
                handleVoiceStateUpdates() {
                    S()
                }
                handleSetOutputVolume(e) {
                    let {
                        volume: t
                    } = e;
                    C.volume = p(t)
                }
                handleToggleSelfDeaf() {
                    S()
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
            var T = new v
        },
        274438: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                r = n("913144");
            let s = !1,
                i = !1;
            class l extends a.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (s = e)
                }
                isMuted() {
                    return s
                }
                shouldPlay() {
                    return i
                }
                getUserAgnosticState() {
                    return s
                }
            }
            l.displayName = "StageMusicStore", l.persistKey = "StageMusicStore";
            var u = new l(r.default, {
                STAGE_MUSIC_MUTE: function(e) {
                    let {
                        muted: t
                    } = e;
                    s = t, i = !1
                },
                STAGE_MUSIC_PLAY: function(e) {
                    let {
                        play: t
                    } = e;
                    i = t
                },
                VOICE_CHANNEL_SELECT: function() {
                    i = !1
                }
            })
        },
        981184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("404439"),
                s = e => {
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
        928741: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                s = n("819855"),
                i = n("206230"),
                l = n("714657"),
                u = n("21121"),
                o = n("161778"),
                d = n("843455");

            function c(e) {
                let {
                    children: t
                } = e, n = (0, r.useStateFromStores)([o.default], () => o.default.theme), c = (0, u.useInMainTabsExperiment)(), f = (0, r.useStateFromStores)([l.default], () => l.default.gradientPreset), {
                    saturation: h,
                    contrast: E
                } = (0, r.useStateFromStoresObject)([i.default], () => ({
                    saturation: i.default.saturation,
                    contrast: i.default.contrast
                })), p = 0;
                return c && (p = (0, s.setThemeFlag)(p, s.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), null != f && c && (p = f.theme === d.ThemeTypes.LIGHT ? (0, s.setThemeFlag)(p, s.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, s.setThemeFlag)(p, s.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== h && (p = (0, s.setThemeFlag)(p, s.ThemeContextFlags.REDUCE_SATURATION_ENABLED)), (0, a.jsx)(s.RootThemeContextProvider, {
                    theme: n,
                    flags: p,
                    saturation: h,
                    contrast: E,
                    children: t
                })
            }
        },
        289180: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                getVideoPermission: function() {
                    return u
                }
            });
            var a = n("446674"),
                r = n("223913"),
                s = n("305961"),
                i = n("957255");

            function l(e) {
                let t = (0, a.useStateFromStores)([s.default, i.default], () => e.isPrivate() || (0, r.canStreamInChannel)(e, s.default, i.default, !1), [e]);
                return t
            }

            function u(e) {
                return e.isPrivate() || (0, r.canStreamInChannel)(e, s.default, i.default, !1)
            }
        },
        289656: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getVideoButtonLabel: function() {
                    return s
                }
            });
            var a = n("49111"),
                r = n("782340");

            function s(e) {
                let {
                    enabled: t,
                    join: n,
                    channel: s,
                    cameraUnavailable: i,
                    hasPermission: l,
                    channelLimit: u = -1,
                    channelLimitReached: o = !1
                } = e, d = t ? r.default.Messages.CAMERA_OFF : r.default.Messages.CAMERA_ON;
                if (n) {
                    let e = (null == s ? void 0 : s.isManaged()) || !(null == s ? void 0 : s.isPrivate());
                    d = e ? r.default.Messages.CONNECT_TO_VIDEO : r.default.Messages.JOIN_VIDEO_CALL
                }
                return i && (d = r.default.Messages.CAMERA_UNAVAILABLE), !l && (d = r.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), o && !t && (d = (null == s ? void 0 : s.isGuildStageVoice()) ? u >= a.MAX_STAGE_VIDEO_USER_LIMIT_TIER3 ? r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : r.default.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
                    limit: u
                })), d
            }
        },
        784981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("952990"),
                u = r.forwardRef(function(e, t) {
                    let {
                        children: n,
                        className: r,
                        style: s,
                        noBorder: u = !1,
                        participantUserId: o
                    } = e;
                    return (0, a.jsx)("div", {
                        className: i(r, l.tile, {
                            [l.noBorder]: u
                        }),
                        style: s,
                        ref: t,
                        "data-selenium-video-tile": o,
                        children: n
                    })
                })
        },
        100844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CallTileCTA: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                i = n("77078"),
                l = n("551694");

            function u(e) {
                let {
                    children: t,
                    onClick: n,
                    className: r,
                    tooltip: u
                } = e;
                return (0, a.jsx)(i.Tooltip, {
                    text: u,
                    children: e => {
                        let {
                            onClick: u,
                            ...o
                        } = e;
                        return (0, a.jsx)(i.Button, {
                            ...o,
                            onClick: e => {
                                null == n || n(e), null == u || u()
                            },
                            innerClassName: l.buttonReset,
                            color: s(l.cta, r),
                            size: i.Button.Sizes.MIN,
                            children: t
                        })
                    }
                })
            }
        },
        607391: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSizeForWidth: function() {
                    return o
                },
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                i = n("77078"),
                l = n("145131"),
                u = n("668458");

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
                    selected: E = !1
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
                        className: s(u.art, u[d]),
                        style: {
                            backgroundImage: "url(".concat(f, ")")
                        }
                    }), null != r ? (0, a.jsx)(i.Text, {
                        color: "none",
                        variant: "text-md/semibold",
                        className: u.header,
                        children: r
                    }) : null, null != o ? (0, a.jsx)(i.Text, {
                        color: "none",
                        className: u.description,
                        variant: "text-sm/medium",
                        children: o
                    }) : null, E || null == n ? null : (0, a.jsx)(i.Button, {
                        className: u.outerButton,
                        size: i.Button.Sizes.NONE,
                        color: i.Button.Colors.WHITE,
                        look: i.Button.Looks.BLANK,
                        innerClassName: u.button,
                        onClick: e => {
                            e.stopPropagation(), null == t || t(e)
                        },
                        children: n
                    })]
                })
            }
        },
        951691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOtherStreams: function() {
                    return T
                },
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                s = n("77078"),
                i = n("901582"),
                l = n("191145"),
                u = n("976074"),
                o = n("856343"),
                d = n("16916"),
                c = n("373469"),
                f = n("42887"),
                h = n("697218"),
                E = n("394832"),
                p = n("985622"),
                m = n("356553"),
                C = n("387111"),
                S = n("773336"),
                g = n("49111"),
                _ = n("353927"),
                v = n("782340");

            function T(e, t, n) {
                let a = (0, r.useStateFromStores)([l.default], () => l.default.getSelectedParticipantId(e.id)),
                    s = (0, r.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]),
                    i = (0, r.useStateFromStoresArray)([h.default], () => {
                        let a = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
                            stream: t,
                            username: C.default.getName(e.getGuildId(), e.id, h.default.getUser(t.ownerId))
                        }));
                        return 1 === a.length && a[0].stream.ownerId === (null == s ? void 0 : s.ownerId) ? [] : a
                    }, [e, s, n, t]);
                return i
            }

            function I(e) {
                var t;
                let {
                    channel: n,
                    currentUser: r,
                    activeStreams: l,
                    hideSelfOptions: c = !1,
                    showReportOption: h = !1,
                    handleGoLive: C,
                    onClose: I,
                    onSelect: A,
                    appContext: M = g.AppContext.APP
                } = e, R = f.default.supports(_.Features.DESKTOP_CAPTURE_APPLICATIONS), y = null !== (t = l.find(e => e.ownerId === (null == r ? void 0 : r.id))) && void 0 !== t ? t : null, N = T(n, r, l), O = (0, o.default)(y, M), L = (0, u.default)(y, M, g.NOOP_NULL), x = null == y ? (0, a.jsx)(s.MenuItem, {
                    id: "share-your-screen",
                    label: v.default.Messages.SHARE_YOUR_SCREEN,
                    icon: E.default,
                    action: C
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [S.isPlatformEmbedded ? (0, a.jsx)(s.MenuItem, {
                        id: "stream-settings",
                        label: v.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: O
                    }) : null, h ? L : null, R ? (0, a.jsx)(s.MenuItem, {
                        id: "change-windows",
                        label: v.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                        icon: E.default,
                        action: C
                    }) : null, (0, a.jsx)(s.MenuItem, {
                        id: "stop-streaming",
                        label: v.default.Messages.STOP_STREAMING,
                        icon: p.default,
                        action: () => (0, d.default)(y)
                    })]
                });
                return (0, a.jsx)(i.default, {
                    section: g.AnalyticsSections.CONTEXT_MENU,
                    children: (0, a.jsxs)(s.Menu, {
                        onSelect: A,
                        navId: "manage-streams",
                        onClose: I,
                        "aria-label": null != y ? v.default.Messages.STOP_STREAMING : v.default.Messages.SHARE_YOUR_SCREEN,
                        children: [(0, a.jsx)(s.MenuGroup, {
                            children: N.map(e => {
                                let {
                                    stream: t,
                                    username: n
                                } = e;
                                return (0, a.jsx)(s.MenuItem, {
                                    id: t.ownerId,
                                    label: v.default.Messages.STOP_WATCHING_USER.format({
                                        username: n
                                    }),
                                    icon: m.default,
                                    action: () => (0, d.default)(t)
                                }, "manage-stream-menu".concat(t.ownerId))
                            })
                        }), c ? null : x]
                    })
                })
            }
        },
        683245: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("446674"),
                i = n("990766"),
                l = n("374014"),
                u = n("42203"),
                o = n("607391"),
                d = n("782340");
            let c = n("729861");

            function f(e) {
                let {
                    stream: t,
                    width: n,
                    noArt: f = !1,
                    selected: h = !1
                } = e, E = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(t.channelId));
                return r.useEffect(() => {
                    (null == E ? void 0 : E.isGuildStageVoice()) && (0, i.closeStream)((0, l.encodeStreamKey)(t), !1)
                }, []), (0, a.jsx)(o.default, {
                    artURL: c,
                    noArt: f,
                    selected: h,
                    size: (0, o.getSizeForWidth)(n),
                    header: d.default.Messages.STREAM_ENDED,
                    onCTAClick: () => (0, i.closeStream)((0, l.encodeStreamKey)(t)),
                    callToAction: d.default.Messages.CLOSE_STREAM
                })
            }
        },
        772442: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("990766"),
                s = n("374014"),
                i = n("701909"),
                l = n("607391"),
                u = n("49111"),
                o = n("782340");
            let d = n("242412");

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
                        helpUrl: i.default.getArticleURL(u.HelpdeskArticles.STREAM_FAILED)
                    }),
                    onCTAClick: () => (0, r.closeStream)((0, s.encodeStreamKey)(t)),
                    callToAction: o.default.Messages.CLOSE_STREAM
                })
            }
        },
        211019: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                i = n("446674"),
                l = n("77078"),
                u = n("990766"),
                o = n("373469"),
                d = n("271938"),
                c = n("30672"),
                f = n("100844"),
                h = n("607391"),
                E = n("782340"),
                p = n("100469");
            let m = n("588281");

            function C(e) {
                let {
                    participant: t,
                    width: n,
                    noArt: r = !1,
                    selected: C = !1
                } = e, S = n < 195, g = (0, i.useStateFromStores)([o.default, d.default], () => o.default.getAllActiveStreams().some(e => {
                    let {
                        ownerId: t
                    } = e;
                    return t !== d.default.getId()
                }));
                return (0, a.jsx)("div", {
                    className: s(p.content, p.streamHidden, {
                        [p.small]: S
                    }),
                    children: (0, a.jsx)(h.default, {
                        className: p.streamHiddenEmptyState,
                        artURL: m,
                        noArt: r,
                        selected: C,
                        size: (0, h.getSizeForWidth)(n),
                        header: S ? null : E.default.Messages.STREAM_HIDDEN,
                        description: C ? null : (0, a.jsxs)("div", {
                            className: s(p.streamHiddenCTA, {
                                [p.largePaddingTop]: !S
                            }),
                            children: [(0, a.jsx)(f.CallTileCTA, {
                                isSmall: S,
                                children: (0, a.jsx)(l.Text, {
                                    variant: S ? "text-sm/semibold" : "text-md/semibold",
                                    color: "none",
                                    children: n < 175 ? E.default.Messages.WATCH : E.default.Messages.WATCH_STREAM
                                })
                            }), g ? (0, a.jsx)(f.CallTileCTA, {
                                className: p.addCTA,
                                tooltip: E.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                                onClick: e => {
                                    e.stopPropagation(), (0, u.watchStream)(t.stream, {
                                        forceMultiple: !0
                                    })
                                },
                                isSmall: S,
                                children: (0, a.jsx)(c.default, {
                                    className: p.addStreamIcon
                                })
                            }) : null]
                        })
                    })
                })
            }
        },
        19065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("42887"),
                i = n("353927"),
                l = n("782340");

            function u(e) {
                s.default.supports(i.Features.VIDEO) ? (0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("861054").then(n.bind(n, "861054"));
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
                    } = await n.el("861054").then(n.bind(n, "861054"));
                    return s => (0, a.jsx)(t, {
                        ...s,
                        header: l.default.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
                        body: l.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                        confirmText: l.default.Messages.DOWNLOAD_APP,
                        onConfirm: () => {
                            null == e || e(), (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("649486").then(n.bind(n, "649486"));
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
        977347: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("782340");

            function i() {
                function e() {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("649486").then(n.bind(n, "649486"));
                        return t => (0, a.jsx)(e, {
                            source: "Screenshare Unavailable",
                            ...t
                        })
                    })
                }(0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("861054").then(n.bind(n, "861054"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        header: s.default.Messages.SCREENSHARE_UNAVAILABLE,
                        body: s.default.Messages.SCREENSHARE_UNAVAILABLE_DOWNLOAD_APP,
                        confirmText: s.default.Messages.DOWNLOAD_APP,
                        onConfirm: e
                    })
                })
            }
        },
        799808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("990766"),
                i = n("773356"),
                l = n("349171"),
                u = n("292687"),
                o = n("305961"),
                d = n("42887"),
                c = n("697218"),
                f = n("773336"),
                h = n("49111"),
                E = n("686298");

            function p(e, t, p) {
                let m = u.default.getWindowOpen(h.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? h.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
                if ((0, l.default)(m), f.isPlatformEmbedded)(0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("451863").then(n.bind(n, "451863"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        guildId: e,
                        analyticsLocation: p
                    })
                });
                else {
                    var C;
                    let n = (0, i.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, E.ApplicationStreamResolutions.RESOLUTION_1080, E.ApplicationStreamFPS.FPS_30, c.default.getCurrentUser(), null === (C = o.default.getGuild(e)) || void 0 === C ? void 0 : C.premiumTier) ? {
                        width: 1920,
                        height: 1080
                    } : {
                        width: 1280,
                        height: 720
                    };
                    d.default.getMediaEngine().getDesktopSource(n, !0).then(n => {
                        (0, s.startStream)(e, t, {
                            pid: null,
                            sourceId: n,
                            sourceName: null
                        })
                    })
                }
            }
        },
        600123: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("607391"),
                s = n("145131"),
                i = n("331639");

            function l(e) {
                let {
                    mainText: t,
                    supportingText: n,
                    children: l,
                    size: u
                } = e;
                return (0, a.jsxs)(s.default, {
                    className: i.root,
                    justify: s.default.Justify.CENTER,
                    align: s.default.Align.CENTER,
                    direction: s.default.Direction.VERTICAL,
                    children: [(0, a.jsx)(r.default, {
                        header: t,
                        description: n,
                        size: u
                    }), l]
                })
            }
        },
        576242: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("550766"),
                s = n("893011"),
                i = n("981913"),
                l = n("782340");

            function u(e) {
                let {
                    channelId: t,
                    applicationId: n,
                    centerButton: u = !1,
                    ...o
                } = e, d = u ? i.CenterControlButton : i.default;
                return (0, a.jsx)(d, {
                    ...o,
                    onClick: () => {
                        (0, r.stopEmbeddedActivity)({
                            channelId: t,
                            applicationId: n
                        })
                    },
                    iconComponent: s.default,
                    label: l.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
                })
            }
        },
        54727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("653564"),
                s = n("987317"),
                i = n("713726"),
                l = n("754493"),
                u = n("981913"),
                o = n("782340");

            function d(e) {
                let {
                    centerButton: t = !1,
                    channel: n,
                    onClick: d,
                    onMouseEnter: c,
                    onMouseLeave: f,
                    ...h
                } = e, E = t ? u.CenterControlButton : u.default, p = n.isBroadcastChannel(), m = (0, l.useIsBroadcastingInChannel)(n.id), {
                    Component: C,
                    events: S
                } = (0, r.useEndCallLottie)();
                return (0, a.jsx)(E, {
                    ...h,
                    onClick: () => {
                        m && (0, i.stopBroadcast)(), s.default.disconnect(), null == d || d()
                    },
                    iconComponent: C,
                    onMouseEnter: e => {
                        null == c || c(e), S.onMouseEnter()
                    },
                    onMouseLeave: e => {
                        null == f || f(e), S.onMouseLeave()
                    },
                    label: m ? o.default.Messages.STOP_BROADCASTING : p ? o.default.Messages.LEAVE_BROADCAST : o.default.Messages.DISCONNECT_SELF
                })
            }
        },
        336971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                i = n("758710"),
                l = n("981913"),
                u = n("782340"),
                o = n("936609");

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
                    iconComponent: i.default,
                    iconClassName: s({
                        [o.popIn]: t
                    }),
                    ...d
                })
            }
        },
        109489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("255397"),
                u = n("256170"),
                o = n("155207"),
                d = n("981913"),
                c = n("782340"),
                f = n("31665");

            function h(e) {
                let {
                    className: t,
                    isVertical: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: f.iconContainer,
                    children: [(0, a.jsx)(u.default, {
                        className: i(n ? f.upCaret : f.leftCaret, t)
                    }), (0, a.jsx)(o.default, {
                        className: i(f.members, t)
                    })]
                })
            }

            function E(e) {
                let {
                    className: t,
                    isVertical: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: f.iconContainer,
                    children: [(0, a.jsx)(u.default, {
                        className: i(n ? f.downCaret : f.rightCaret, t)
                    }), n && (0, a.jsx)(o.default, {
                        className: i(f.members, t)
                    })]
                })
            }

            function p(e) {
                let {
                    channelId: t,
                    className: n,
                    isParticipantsOpen: s,
                    isVertical: u = !1,
                    hideTooltip: o = !1
                } = e, p = r.useCallback(e => {
                    let {
                        className: t
                    } = e;
                    return s ? (0, a.jsx)(E, {
                        className: t,
                        isVertical: u
                    }) : (0, a.jsx)(h, {
                        className: t,
                        isVertical: u
                    })
                }, [s, u]);
                return (0, a.jsx)(d.default, {
                    label: s ? c.default.Messages.VIDEO_CALL_HIDE_MEMBERS : c.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
                    className: i(f.participantsButton, n),
                    onClick: function() {
                        l.default.toggleParticipants(t, !s)
                    },
                    iconComponent: p,
                    shouldShowTooltip: !o
                })
            }
        },
        116439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VideoButtonWrapper: function() {
                    return f
                },
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("881913"),
                u = n("244201"),
                o = n("289656"),
                d = n("981913"),
                c = n("423725");

            function f(e) {
                let t = (0, o.getVideoButtonLabel)(e),
                    {
                        enabled: n,
                        cameraUnavailable: s,
                        onChange: i,
                        onCameraUnavailable: d,
                        hasPermission: c,
                        children: f,
                        channelLimitReached: h = !1,
                        join: E
                    } = e,
                    p = (0, u.useAppContext)(),
                    m = s ? () => d() : () => i(!e.enabled, p),
                    {
                        Component: C,
                        play: S,
                        events: g
                    } = (0, l.useVideoLottie)(E || n ? "mute" : "unmute");
                return r.useEffect(() => () => S(), [n, S]), (0, a.jsx)(a.Fragment, {
                    children: f({
                        onClick: m,
                        active: n,
                        disabled: !n && (!c || h),
                        iconComponent: C,
                        label: t,
                        unavailable: s,
                        onMouseEnter: E ? void 0 : g.onMouseEnter,
                        onMouseLeave: E ? void 0 : g.onMouseLeave
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
                    channelLimitReached: E,
                    channelLimit: p,
                    centerButton: m = !1,
                    onPopoutClick: C,
                    ...S
                } = e, g = m ? d.CenterControlButton : d.default;
                return (0, a.jsx)(f, {
                    enabled: t,
                    join: n,
                    channel: r,
                    onChange: s,
                    onCameraUnavailable: l,
                    cameraUnavailable: u,
                    hasPermission: o,
                    channelLimitReached: E,
                    channelLimit: p,
                    children: e => {
                        let {
                            unavailable: n,
                            onMouseEnter: r,
                            onMouseLeave: s,
                            ...l
                        } = e;
                        return (0, a.jsx)(g, {
                            ...l,
                            ...S,
                            onMouseEnter: e => {
                                var t;
                                null === (t = S.onMouseEnter) || void 0 === t || t.call(S, e), null == r || r()
                            },
                            onMouseLeave: e => {
                                var t;
                                null === (t = S.onMouseLeave) || void 0 === t || t.call(S, e), null == s || s()
                            },
                            isActive: t,
                            className: i(h, {
                                [c.fauxDisabled]: n
                            }),
                            onPopoutClick: C
                        })
                    }
                })
            }
        },
        325753: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("817736"),
                i = n("458960"),
                l = n("118810"),
                u = n("49111");
            let o = (e, t) => {
                let {
                    x: n,
                    y: a
                } = e, {
                    x: r,
                    y: s
                } = t;
                return Math.pow(n - r, 2) + Math.pow(a - s, 2)
            };
            class d extends r.PureComponent {
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
                    let s = this.translate(e, t);
                    i.default.spring(this.state.position, {
                        toValue: {
                            x: s.x,
                            y: s.y
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
                    let e = (0, s.findDOMNode)(this._ref);
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
                    } = this.props, s = [0, 1], l = ["0px", "1px"], u = i.default.accelerate({
                        pointerEvents: e ? "none" : "auto",
                        transform: [{
                            translateX: t.x.interpolate({
                                inputRange: s,
                                outputRange: l
                            })
                        }, {
                            translateY: t.y.interpolate({
                                inputRange: s,
                                outputRange: l
                            })
                        }],
                        ...this.props.style
                    });
                    return (0, a.jsx)(i.default.div, {
                        ref: this.handleSetRef,
                        className: n,
                        onMouseDown: this.handleMouseDown,
                        style: u,
                        children: r
                    })
                }
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
                        } = this.state, s = e.target;
                        if (e.button === u.MouseButtons.PRIMARY && (t || null != a && s.matches(a))) {
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
                            dragging: s
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
                            !s && (null == t || t(e.clientX, e.clientY)), null == n || n(e.clientX, e.clientY)
                        }))
                    }, this.handleMouseUp = e => {
                        this._removeListeners(), this.state.dragging && this.setState({
                            dragging: !1
                        }, () => {
                            let {
                                onDragEnd: t
                            } = this.props;
                            null == t || t(e.clientX, e.clientY)
                        })
                    };
                    let t = new i.default.Value(e.initialX),
                        n = new i.default.Value(e.initialY);
                    this.state = {
                        dragging: !1,
                        position: new i.default.ValueXY({
                            x: t,
                            y: n
                        })
                    }
                }
            }
            d.defaultProps = {
                maxX: 0,
                maxY: 0,
                initialX: 0,
                initialY: 0,
                disabled: !1,
                dragAnywhere: !1
            };
            var c = d
        },
        90404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("77078"),
                u = n("145131"),
                o = n("324127");
            class d extends r.PureComponent {
                render() {
                    let {
                        note: e,
                        title: t,
                        action: n,
                        className: r
                    } = this.props;
                    return (0, a.jsx)("div", {
                        className: i(o.wrapper, r),
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
        457112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PictureInPictureWindow: function() {
                    return h
                },
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("817736"),
                u = n("773336"),
                o = n("325753"),
                d = n("49111"),
                c = n("578549");
            let f = {
                top: 80,
                bottom: 132,
                left: 80
            };
            class h extends r.PureComponent {
                componentDidMount() {
                    this.setPosition(this.props.position)
                }
                componentDidUpdate(e) {
                    (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && this.ensureIsInPosition()
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this._resizeObserver) || void 0 === e || e.disconnect()
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
                        edgeOffsetRight: s,
                        maxX: i,
                        maxY: o,
                        dockedRect: c
                    } = this.props, f = Math.round(n), h = Math.round(o - r - this._height), E = Math.round(a), p = Math.round(i - s - this._width), m = (0, u.getPlatform)(), C = m !== u.PlatformTypes.WEB && this.inPopout ? 22 : 0;
                    if (null != c) {
                        var S, g;
                        return {
                            y: (null !== (S = null == c ? void 0 : c.y) && void 0 !== S ? S : 0) - C,
                            x: null !== (g = null == c ? void 0 : c.x) && void 0 !== g ? g : 0
                        }
                    }
                    switch (e) {
                        case d.PictureInPicturePositions.TOP_LEFT:
                            return {
                                y: f, x: E
                            };
                        case d.PictureInPicturePositions.BOTTOM_LEFT:
                            return {
                                y: h, x: E
                            };
                        case d.PictureInPicturePositions.TOP_RIGHT:
                            return {
                                y: f, x: p
                            };
                        default:
                            return {
                                y: h, x: p
                            }
                    }
                }
                setPosition(e) {
                    var t;
                    let {
                        x: n,
                        y: a
                    } = this.getPosition(e);
                    null === (t = this._draggable) || void 0 === t || t.setPosition(n, a)
                }
                animateToPosition(e, t) {
                    var n;
                    let {
                        x: a,
                        y: r
                    } = this.getPosition(e);
                    null === (n = this._draggable) || void 0 === n || n.animateToPosition(a, r, {}, t)
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
                        roundCorners: s,
                        className: l
                    } = this.props, u = {};
                    return null != n && (u = {
                        transform: "translate3d(".concat(n.x, ", ").concat(n.y, ", 0)"),
                        width: n.width,
                        height: n.height
                    }), (0, a.jsx)(o.default, {
                        dragAnywhere: !0,
                        ref: this.handleSetDraggableRef,
                        className: i(c.pictureInPictureWindow, l, {
                            [c.hidden]: r,
                            [c.borderRadius]: s
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
                        let t = null == e ? void 0 : e.ownerDocument.defaultView;
                        if (null != e && null != t) {
                            var n;
                            this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition), null === (n = this._resizeObserver) || void 0 === n || n.observe(e)
                        }
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
                        } = this.props, s = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY), i = !0, l = !0;
                        if (s.x > a / 2 && (l = !1), s.y > r / 2 && (i = !1), n = i && l ? d.PictureInPicturePositions.TOP_LEFT : i && !l ? d.PictureInPicturePositions.TOP_RIGHT : !i && l ? d.PictureInPicturePositions.BOTTOM_LEFT : d.PictureInPicturePositions.BOTTOM_RIGHT, this.animateToPosition(n, this.ensureIsInPosition), n !== this.props.position) {
                            let {
                                id: e,
                                onMove: t
                            } = this.props;
                            null == t || t(e, n)
                        }
                    }
                }
            }
            h.defaultProps = {
                hidden: !1,
                roundCorners: !0
            };
            var E = r.memo(e => {
                let {
                    selectedPIPWindow: t,
                    pipWindows: n,
                    maxX: r,
                    maxY: s,
                    onWindowMove: i,
                    dockedRect: l,
                    pictureInPictureComponents: u,
                    appContext: o,
                    roundCorners: E
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
                            }, "pipWindow-".concat(e.id))
                        });
                        return (0, a.jsx)(h, {
                            appContext: o,
                            position: t.position,
                            id: t.id,
                            hidden: t.hidden,
                            onMove: i,
                            maxX: r,
                            maxY: s,
                            dockedRect: l,
                            edgeOffsetTop: f.top,
                            edgeOffsetBottom: f.bottom,
                            edgeOffsetLeft: f.left,
                            edgeOffsetRight: f.top,
                            roundCorners: E,
                            children: e
                        })
                    })()
                })
            })
        },
        754775: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("669491"),
                i = n("77078"),
                l = n("462274"),
                u = n("181832"),
                o = n("981184"),
                d = n("506885"),
                c = n("217513"),
                f = n("845579"),
                h = n("49111"),
                E = n("491595"),
                p = function(e) {
                    let {
                        style: t,
                        src: n,
                        backgroundSrc: p,
                        userId: m,
                        pulseSpeakingIndicator: C = !1,
                        speaking: S = !1,
                        ...g
                    } = e, _ = null != p ? p : n, v = (0, l.default)(_, s.default.unsafe_rawColors.PRIMARY_800.css), T = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, I = (0, c.default)(null != m ? m : h.EMPTY_STRING_SNOWFLAKE_ID), A = null == I ? void 0 : I.getBannerURL({
                        size: 1024,
                        canAnimate: f.GifAutoPlay.getSetting()
                    });
                    if (r.useEffect(() => {
                            null != m && T && (0, d.default)(m, void 0, {
                                dispatchWait: !0
                            })
                        }, [T, m]), null == n) return null;
                    let M = (0, a.jsx)(i.Avatar, {
                            className: E.avatarWrapper,
                            src: n,
                            ...g
                        }),
                        R = {
                            ...t,
                            backgroundColor: v
                        };
                    return null != A && S && T && (R.backgroundImage = "url(".concat(A, ")"), R.backgroundSize = "cover"), (0, a.jsx)("div", {
                        style: R,
                        className: E.background,
                        children: C ? (0, a.jsx)(o.default, {
                            shouldAnimate: S,
                            children: M
                        }) : M
                    })
                }
        },
        270227: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 55,
                    height: n = 16,
                    color: s = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 55 16",
                    children: (0, a.jsxs)("g", {
                        fill: s,
                        className: i,
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
        893011: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("354087"),
                i = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: s,
                            fill: r,
                            d: "M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z"
                        })
                    })
                }, s.DoorExitIcon, void 0, {
                    size: 16
                })
        },
        356553: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("671306"),
                i = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("path", {
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20 11V13.5H4V4.5H13V2.5H4C3.46957 2.5 2.96086 2.71071 2.58579 3.08579C2.21071 3.46086 2 3.96957 2 4.5L2 15.5C2 16.0304 2.21071 16.5391 2.58579 16.9142C2.96086 17.2893 3.46957 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C20.5304 17.5 21.0391 17.2893 21.4142 16.9142C21.7893 16.5391 22 16.0304 22 15.5V11H20Z",
                            fill: r
                        }), (0, a.jsx)("path", {
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23 2.45174L21.5483 1L19.0051 3.55341L16.4517 1L15 2.45174L17.5534 4.99485L15 7.54826L16.4517 9L19.0051 6.44659L21.5483 9L23 7.54826L20.4466 4.99485L23 2.45174Z",
                            fill: r
                        })]
                    })
                }, s.ScreenXIcon, void 0, {
                    size: 24
                })
        },
        940277: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: s = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("polygon", {
                        fill: s,
                        className: i,
                        fillRule: "evenodd",
                        points: "11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
                    })
                })
            }
        },
        386811: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: s = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("path", {
                        stroke: s,
                        className: i,
                        fill: "none",
                        d: "M8.5,3.5 L6,6 L3.5,3.5 L6,6 L3.5,8.5 L6,6 L8.5,8.5 L6,6 L8.5,3.5 Z"
                    })
                })
            }
        },
        964264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: s = "currentColor",
                    foreground: i,
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
                        stroke: s,
                        className: i
                    })
                })
            }
        },
        655804: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: s = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsxs)("g", {
                        fill: s,
                        className: i,
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
        58463: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: s = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        className: i,
                        fill: s,
                        width: "10",
                        height: "1",
                        x: "1",
                        y: "6"
                    })
                })
            }
        },
        238500: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: s = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        fill: s,
                        className: i,
                        width: "8",
                        height: "2",
                        x: "2",
                        y: "5",
                        fillRule: "evenodd"
                    })
                })
            }
        },
        336921: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setupWindow: function() {
                    return l
                }
            }), n("222007");
            var a = n("741148"),
                r = n("563680"),
                s = n("816454"),
                i = n("421804");

            function l(e) {
                let t = e.document,
                    n = (0, s.setupWindowId)(e);

                function l() {
                    (0, i.setCurrentlyInteractingWindowId)(n)
                }

                function u() {
                    setTimeout(() => {
                        (0, i.clearCurrentlyInteractingWindowId)(n)
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
                    }), i.INTERACTION_EVENTS)) t.addEventListener(n, l, !0), t.addEventListener(n, u, !1);
                (0, r.subscribeDocumentToFullScreenChange)(t, function() {
                    (0, a.fullscreenChange)(e)
                }), (0, a.init)(e)
            }
        },
        88807: function(e, t, n) {
            "use strict";
            var a, r;
            n.r(t), n.d(t, {
                AppCrashedReasons: function() {
                    return a
                }
            }), n("222007"), (r = a || (a = {})).UNHANDLED_NATIVE_ERROR = "unhandled_native_error", r.UNHANDLED_JS_ERROR = "unhandled_js_error", r.SOCKET_CRASHED = "socket_crashed"
        },
        558062: function(e, t, n) {
            "use strict";
            var a, r;
            n.r(t), n.d(t, {
                ErrorLevels: function() {
                    return a
                }
            }), n("222007"), (r = a || (a = {})).FATAL = "fatal", r.ERROR = "error", r.WARNING = "warning", r.LOG = "log", r.INFO = "info", r.DEBUG = "debug"
        }
    }
]);
//# sourceMappingURL=25949.7b13ee793220a95838ea.js.map